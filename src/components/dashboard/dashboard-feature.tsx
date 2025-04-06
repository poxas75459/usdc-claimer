/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4YFTJMW4UF87s6pVTQRVKuFwn2G4wd9JaAZhjGsFpjpoFar44iA43n2w9KcrbiCTkLqqXPEMRqfNJAyD77bVrw4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dmBNxw65ZZWGrXBAn8ZUDM5dinRozYDRZ4tFSnitVW1XVCQZYzVM1etUDLiUGy8A7RE3yPXCMYBjt4vJfZFHag8",
  "key1": "4FV949HCeBSaNfNJwVTkVWst27JQ6EeNCXd8MEBfSLL1K13T21EoPo2s1E7YENjGaP8m2duHRvjoD2ca1vEsmfnx",
  "key2": "2hApFU6yVzjSnyznDS3agvU1Ph2qVhCCp2VZCHX6kRjgcAef6imPvooKzzUjubdkpUcHLux5tfy15WrEDoZ4fEJE",
  "key3": "2vpeSypGf778SVRFLj9yNhY6Z3SWXNknUakrNQnJL4vMYjEqd48zhhwNXuGjyzkzRAfqyUrPJpzWM2SEEK3Mc2Ry",
  "key4": "66BEDc65cqxsueC1Hjqix75cvF9nD8FgsnD75LLtqAXRxw2DEci3BXMMiVmiQdq6XDjXBxf19AtjHzbNE4ee9MKd",
  "key5": "3YcfhCJ7ev4WYvjVX47UssCXgEoVyD4mzJsaHjdtTUZjWdfqui5wavxBHWh5eykK3eAFxDsuAZ6f3L8CPue9NUJ2",
  "key6": "4m4N1efMYnRkLdPNyjAaDXbEnaCT8x9pyApkpDj4ZCGnEvdNnmwC7xsAjn5JJxkv2SdpF41mNAb9KCsqQxp2uEAd",
  "key7": "2rYVypF29GCdbKCSpp5Vz3mzUhxNg6hPC2dRZwM551CegisgZ1YHT3ihwMt75pDhqjmWSWBt5uTU4Zn94UkFFKqJ",
  "key8": "ZJzQouAJyZSbmpdHRRXH6g1519fwJgG1Rkkqn3QELAookBsFUU8Qv5CDomHytWmASdyTkjYDuWxY92rCTKb3Don",
  "key9": "5YvHY89J5mLqkAs66zkZipZsqaBpSZ1zCHr3BzUTozeuAxorzhNEkDGpSUka3QMv8bk8MeXM6UVAEK6Kk7mXUAGB",
  "key10": "y4aRkhgrkbMTmFFv2BrnqVSCTTK5RCxv3BdnVsX3CkZ8pageKbwENuEuMf3GyELDnMUdAqdjVKoX3Bw22A3juid",
  "key11": "zTkKUzNvDPsC4c8BdAcNj3F1CzRuGF67wmebYxcUruQc2yX7Ag1Zy4Jf78FtJct6XapP3hwdTRdVWiw3tS7EyiA",
  "key12": "3ZEGn1Jy8szuzieWYYpVT3MsscXrC1LPMcPB8LrakyVGfFhEgmLymD6YYp9bsHnxNQg7eWA7QWsMCoQgf1vLc11H",
  "key13": "61WsUePNHK17DAF2yWXiR55S6L4DREUbvAmZHhV9CZtnchn8nSTSREwprUPZyDGii8FvovbPHXACUNWuNbTKFWjj",
  "key14": "13WANSLVxGDWD6MKUJtp69c9fSfckTutEw4AjgxDZXvyxXfMzBtyRsN9PuLCkWJ6FaruFyUszCz768uL7udibBe",
  "key15": "3Ypsxp2kqrYfxDym1rpJGjcSPEqvXpYsCqAq2hADSrV8XWJzfFvan5db1zaZJxpTr7b3gGaHyxhbRwug7zbjJZmj",
  "key16": "5ipBFnvjMBT4MdGepNBTmKAgLRgngKEQUsdT4eJudd8s9miiCWJKkidGRZH54RwvXK8g26RLAxBZ5DAipa7WqKZJ",
  "key17": "2EhEQ7xwZ6y2cBPHW6AmzrTzrwVUhne1TEtFsPSfUL3TwqrWRgHPeRhFvDz5a6s5tQss8a1KwyFTEdHhMLFmx2Vg",
  "key18": "2X3RubGSJjUGt6aT7Tw99FHruKvfZBFv52tVjN7F2jyET1aQ81M5BG5u8gqCgTMFTTxfuoy7zC4SmTXzDHxCb1JE",
  "key19": "3kGBuXcJRt7f845o5cpTcuPtgnUUUU8tX4nQPyQAFMiRrchutrXR1WDzLksGYNbGTobKeiDrYcgpJMT8wTnckVMV",
  "key20": "cY3rwo1iFbYYmxoymSNCwLyLLptotixizP3j8NF1zAR7nvEXhk8UW1zfWxRRHRB2wr2fQXKhL3N499APKqWAhdh",
  "key21": "5qbYEvRSXAaoaP7Z46u24fGijL9icvEfP8p5vGPuNBsXPb6q4GrBovqW12omZL6C1k6A79ZMyj8LuZ32LhUVLDNo",
  "key22": "dNLbwpu4YtCaFoQbGJ7v13FsVgaeKEcSRBNco3WBUGWD8EpFjp46nYdfCHkXHbvVySn2wBKJbg1zSyNmK2DZLUs",
  "key23": "dGQob5X9G4qzUSc1CyVtqQmJB9LGLVJwYirwcDh3CyVXxvd99bs3MaJ5QGLZyD2r1PtZmf8jtxQe3FGzJtksiEr",
  "key24": "38Qa9jwXY6Z3fxrbnvdJ52CWF1tBPgxayVjA5CTPfxTtgqvEMt8QC2mU7c3fNR5HLZRpWaB8h93vUWRhr9w1dQyK",
  "key25": "5ZU9jc9kPFKYHYMH6gbVKy2Kk9EEYyymRGKdgU7m1KVr5nEZNTGD7bKA6KzL6YitcGHCPfdoG7HTURWbpSfecKCC",
  "key26": "2zKBTNwo5YCANPWZzKNYufD8Xfp67TJyabGYLzohkspAwBo8pttakJxXAgVVxkuKC22aChSVPeoovHFzTBfTYcc6",
  "key27": "3MDHeuLH5wqLMabF2exUJePNKAqYQ9112iNucH5P4fFLQQX5Jcc2BixgZmkV7ypfWVbcaGqWPscTKxT6q1X7ZiGu",
  "key28": "3CXMb1LLWfXjxAt4zctn4NNYvoFqDRB4wnU4PdQC1YAdGREvMjpv9NVLZUL7UKmcymCJYMpke9Bu78xgSJmn6CGN",
  "key29": "4xvt3BQiWCAB31HJPAyAXRwAgPs8oDPcQf5mW4wkXUxqDxyifasg5337whma7bKRRYprtPSGmM4aaAHkLaZXTcdP",
  "key30": "5HRU4nTFPRzZRAoCDrMDN8FrSbvB5afTrRiPmjdgDMDaEnYZL6XFaEB9Xu1WbaC5dN5XHDkHcxdpLLTLLAU6CjPk",
  "key31": "4Nf7hArYHpdjCJrCTfCa4HLKYqKPVbrVzSAc5iBUiYXCNpky1p7e1FcT13BPXi5JBsruk6LAFLhhs5eL9afqXqLr",
  "key32": "5dc6xtxVQhzUVBSWpkLDSmnKNcDDsRy7gEV7bDAjKNAmJaZjNmwxHnJGRwP9jRQgS3LmjaJinVp9Q5py9VdYLChU"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
