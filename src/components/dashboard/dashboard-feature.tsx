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
    "5H3uj1WDbMCoPp8nmnCAHXGuShWiWvYnzyCdVTJhpW8rbTUEsjW8TWdcbRioiWera9mgjVoijkSmntGQgDY3SQNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FGGnWdFwFTK7tJctvC4toBgyANZ3CFwusyjh4GHmChqeZAYvnavkbCCiFDeCxVQr4sZ3ZVFQB2oejLjYc9QqRi7",
  "key1": "28zwTXbBQ9ECbLDjYog4rrZcWnmhxYDuJM9BsLBqwPigq86Z6MMiEvyXYyaS5QRXU4Z823hDTfcYQHBHABQ1oMXc",
  "key2": "3w25N2VrZ5t9JoaWxha2bjiR5Xc4kmXPFDmQJTro9sg81a8qbV4cXh7FuGkg71KHYWM44ENP4eUebKfa6ofsq3en",
  "key3": "31M24g3dEtkF98HD1UUPsNWidP7AeBQhPTZp8iegiHVov71Lg5WCQKtNBoKBZoEuGMSFSJVqryEtLVUnCAf3HVd6",
  "key4": "3XFT7qtxApmbpomovwPGQCuUgzscYm2z5FWJvMhUyqx2sQwdrGqBw6zu5KH7UNfkYPspBeTVCMvrLpN69yxNYq79",
  "key5": "2YF1tmDzjDV8Aav9Po1XFP21qBRXv9meS1SNfNUdHEPKthdHz22HFMkxxQgmwXU2y89zNxXjDstvGsAeBxnQ8HcM",
  "key6": "62jBinThwdXmg1iqk57Nc9xVvDKS3QKeohCSVwuVmZjK2RSr5VNfUYHx9tWghtpSQDEDBjPGoZiaFwgJwUzdsmDW",
  "key7": "4xwTRRhv1n2v55FyY8RfUWY2UFa5hdtWm5XaroGuQwQjAtNcawgzCg6CJX5bKd1HsBn8Wh6TpbzreZFCBwbjmFz1",
  "key8": "3Z7se7rBH1merKoDRatyVRB6VyyJiHHYx888aDE6nWuXzHCddMYVJedQj3gT6dCQDH2mfPdMvqYETimaVS1t3uuM",
  "key9": "5NsBE1CN4HoD4f4PVTmTMmG6rrYCHLzeNfo7rjkDXK85wCNi5qyS7fNjmAVHhiWBRKdcPf7cNWjxAjg7VTvKGgiN",
  "key10": "3W3pWr9ruNHotwY9vqNKKbNRWsQpeoZbiqiwPELbQedRUApQk7esaYWrm7zJDhM8QDBWM6KZ1TCPnprJnVGcByq9",
  "key11": "5BZ29JkLqHS8okbHZeFBUJEdNYgLJFENHqXogeRSVgT9wjaJ1Kg3j2GpABKUhABtuy2J4EZhsiiUKhbmF8CCXYMz",
  "key12": "2dr5Zr8MNmgfBNQLSy8itEgcSBsNhozyfYPvteDRueDGkhTVjKnkKyFN6ANLJAvqXt1e9esncyrEQpMVoo4xtNNM",
  "key13": "9HqkC3y4e7phzTm616Qf8hHXB1Nuv6is2PPdq19cL3c7W3Rsfkd5eAAtU7w9M1zCgGi9VwzV6c3WThaXBSHq54h",
  "key14": "F6BgH8hDfnLk3ccUWhrCto6B19GWyZYn8Mcmu4LuxGTkNiYLNU8j626SgbyPswNvtKs6ArGGdfgH6XqJHQ6WWiz",
  "key15": "2BnPkVHp32BKoPoqbovfgYM7BzLjSF9VMzqQ1foU8vVdhU9XyiJoCUswxyxsQxyK8AiJRzH5FEozFnfw5cbe4Cgh",
  "key16": "5jkz3KCzQwcD56U3iPJLQGdKGij3HB24azJPQQixnqVa43fafxc2rxzF9R5nR544nBNxC8pAg2VyDHrSLApePh4L",
  "key17": "5Kn8eHt8vXAZtjXam9KpqZwwosXwFwSvVEQKbhbKTwoFtsd79wCW9DLDfLvGhT3XBAk9eK8LscrPmR7MVFpmQXm9",
  "key18": "2mpTENosQCJHmciK48iNDkLftGfpt3muXEXzAjkHchfbwovXrDWeqWH4Cn7mMjbqrqhXMacPUd6c4FRmyhK794gX",
  "key19": "3JqPLJcCaP9eLDdge8HrnHg2hqcTS5hHXR6NZeLG1vJNV6RPUvdRTjk8KRMX4FBT8uhYRCPu1khfh8mBygZorMbG",
  "key20": "2Rh6zbg75ysnjfas8F5N6LgiQWeBz3tRfGRVPTEQXFMDB5NcXYJf3XMrWofjjbbSvW9GgykgR39YtsAr8dC6JcDk",
  "key21": "4bGqA4ANV66W2gVwZmB5VaVwPj4Zcr8dtvp8FDmVnCHfiynho5QLHm5JoxzMkubadK8bz3RYuqV747pPaGWbim2E",
  "key22": "cGmWpKMopJd7fxgjmPj3Fit7rZSMvSExbeLmcEP59Vq4pwvvNFXSEF9mpVTtxza4mbTAN4id3AgTmMta8kYt4K8",
  "key23": "3ZNHAA3j3gdZNNek4HTFRzvc8RdNoVXtdWC6yE66atBMjuwmbDhdZfMUhSgZx5ZMGHYPydFeiEwn6A4P2oH2xAiS",
  "key24": "4zZ554hLMkYZgjTf6NNtPYy5SSTHb7Sg5dhS3BWU63mKFoyuvcU6hBe4eBgT2cQmJPQsaQhhTjWNxysDcFDQgXQH",
  "key25": "2GUbadBT3vQXt8asA1KjjwPcXTVeHYPQw9chUnUfmZXkefiKGEW1fSr9THrg3F6w5T9rrncgcvUTPqUaqGFX254i",
  "key26": "5P2gTmjvih1gLjhoitdmhW7u2uekoyhPunVW4xZJLTQzCxVJgm8gvq5bbmxDd1f8Nwi3wVR5De4tkwdC2sqyfkVR",
  "key27": "5ofaJLx9THhAammDe3kqXCLqqhro6EnUkQYztw6MB1sjBrXKr5LvwLU6d4M6JWUi6x2YreEMUGXS2kCS8Dh4MB78",
  "key28": "v5R3JSq9xJdr5XtFUNaryMHexNWXKHipWE48tGuMVmiwb7pwfoKqGTbHmbD5sKaPmZn99LcNHCJtHM1FZXgoaYu",
  "key29": "3TXjN5QpCUdX36nS9hzC5BVbhfS76pCZcA4HQLuavqKxjr6nJhU95CgBJVtSMWkVD9j1Mm3AxrZQDeJWSnZ6mzqG",
  "key30": "D7TLrBNJTg4pT4mXroAqqchfwSTkNSbbDwTr6kmW7cAVcAQZYRZkpDfUcWTvWJSaKsZLvAC183BfdPUcZW2aBEo",
  "key31": "2hMWT8PpTnSme1a6WfnTYY6CHsQoV4vgFf3JdYyhJztef6RnBQBdanjwyie7es7nXZ9SFZu7riGf18m2H7UwPBcf",
  "key32": "29pEG8nPxmkLdgvcQE3Xbgp58H9nw9dmBzLPQqvcP8qa7pFLCxUN1iLRdys4HHDFQnKBhL622Hco2CYgcYgnhJ7E",
  "key33": "2WTkgCvehPoLpRTG1W7hWP1YN8gqmainVe5z5fUwTv7DJ3bj4dzbV8qyQyZETh6rLRRbZt6hj3j2vBhBSAPPFxue",
  "key34": "5DV4mAGZQP9pKbBmnTvhuDyHqjcxidAL34JPJjSG8SpLysyvWjJyumW4T1Z7fEYzRp1nbYxXW2xr1WkCNNkgSPr5",
  "key35": "Yr5mdPRf1BUWjTeZjtDcKXfxD5bn5NdFc6D6Psibjyhsvw7TQdq9dDQJkUNJYLj7kqmw8EnVjFpSb5HRYyb4wkW",
  "key36": "46oT5Hg5WtUCfTZYwPnvDWE4NeVJUrioMQ4TTyuJpQr3DPvxJsUv17sHUE1ogEuuZgiEQfYkb24xPDXBFauH1LbL",
  "key37": "PnmTu1NL94DpiAx4W1etvcAMBrgTowjb19z5fnhoyi86JK9y5aN1mq7gPYBxXzJJrSpuqimxYB86iRykJSXDgyw",
  "key38": "uKHeBnj6j8uCp3qZWSXU5hsmREFUxAJVeosWEmGzgKw8m4iJwZ9Ey8re5ZuceYW581NHeJwrZ9Nn1FNLyX1sGus",
  "key39": "4tBM7faVfc9NcXtG1kiKZZwPVWcBAgKttEAP6wdCGEPaUrybvqjdVG6qVFMnPtYF5sKt52gTe4JJYDLZZfpWTKa5",
  "key40": "N7c5YAsbHV9EcGp6jyqNFtJLzTWiT8F8kBPLDkbZp5PGeg4KuMxpw52NUFwbFX9Tbp3MzLx1gexLa1gsnaQJkQq",
  "key41": "5J6X6XsZvrBVTEqJdVrvAq7fo8o6Rx1DYHikdBGonBaV2wjvfoFLvdwnmu9vZFP57CF1ybMr8jgew3eCnZGNt9Xv"
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
