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
    "5TVmY47nBF8bKzDy63FTNUxXATFGN4x82Qi8bAxCEZy7MNFgDrbGsB3nPt2sTK9DzQYRU1aJKYLg7tr4PkyY5RJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wwYGMc7kwejKx65xUTnvnghw2NVwtAgnM77pUpQuLDwRSbtVXuW82onP8NaeWA8D2jWQxpvTY7eDFsRDfigGGJc",
  "key1": "jnyQsLxo4snXDtxdXPN11PdNhjn44MTekZknAkb2gDzm2YPbx2bMH41gx7xZ2kkFozb79ZTxmEkmbP3Um3GsQWM",
  "key2": "2iE4ZYia5f2FR4qaZzwFjQAcXUcW1GnM2EGcsiCDu23UdJTuYkE8caC2GwuTF7ZnFfJRg1drkkPCR2wDLGJD7EVq",
  "key3": "2bGYjTUjvh2YUqcDSiMx5F2Rnwg1naRNRrh9FiFKqAGixizFEru8tENQoRjNNcXJv1udsJ1xw7Q6FryxxgnfHnN6",
  "key4": "5rS3v5vWedhUFk2bqhYmXNPYNMTekZaPZJBH1Ep765VBCv3JZWeBRK82AAJZnHxRzThz5GTgDyEbwBLndPyQvLYG",
  "key5": "3mv6KH4tBwr9Rz6Nf1aL3iCmQEwoE6QPbTTkT8brd8xn7SAKMsKNwawCpWQFZdK6VnMA1HNjs8U7a9XVPMNnWEr2",
  "key6": "5VtZV8HaA7ssZmYZLbPjwiMfnRRiVMzHarN7KY7WJ9H6Kk9Egv7Lih9MzaNf6CTUjT9PKnoCHE36xXfaUUFMpj8o",
  "key7": "2A3bnPNsg8v6DKqYZ8ZxccuGf72KJENHtP6td7Ts4iBEQqYA33wrfY9QmhQS1xPvf1cXfkgQ925w54hHE79FvMwj",
  "key8": "4XmyjyJddMmhJYKaP1gPFKPDUV5EgmeFtowKaZDYEcHsSQynYgUg26uRaM3fB9C2pHVmFXDkGVHUpSgDXnaJabFM",
  "key9": "3XBrP6aLptXY6nFA1YDh1FG99pskwpAT7HfFxMVyRRHRk1pZz5hHWNGzFSY1r43vPfNmZzXbrmFBPEUBpnRKQUki",
  "key10": "23zJBwf5iXcMqNc3mDUQQaRWViJRjb7J1VUxkcZoz8Ka3n3HbMNbNdGVbEVmvgvuPLDGRVxhnNwvjDbNJtn7Xjma",
  "key11": "3GNWTES2JA5yJCNFCciTRxWHAaFpizt4zhN4uiC7Jao9MV2XoQ7Sk3fWM6eBbLkcHHDbtJGacFXWfXvRPx8gKmds",
  "key12": "5gXiQHWaik5YNndhSehJTJ6LjznuXRxstkqBh39qyjSueyzTt3m7wCU6kjya9HxZFE4Gy9BVETmU7aaMFjRXLhja",
  "key13": "546Np6E4VGkjBSGXJ4i6eCnNz3rX3eue53LyqD3fZTqch36YQrVXZFdesa7Gverr85jqb5epB8Cni6a3mZctk6t2",
  "key14": "pX1Gbj6CGSaKqxtnssjEsRonLUZrfMFFTaPwwTpHCnn2EFk7Z8tyDcwe5eAJgzMb7zgqWwCpsKTcyUB7VUq9Ssu",
  "key15": "4ft7EodGgN8pv9WR3d1uq3rz1Y2CQVvQi2JWURuFiJH8UbYKyEa3gdvxVW9V8AdXJvsPutPZ3a7VHW1MixCCkqv6",
  "key16": "4HQvjj3kQAFKP5pQL7rurd6Bhh8u6vSgc4n94H7ueUrRpZAj6ds33UnfnJy1SvrzJWE1MdtYdoeYJy9DLPtosyz6",
  "key17": "EvPj3Ydu4titpLfuNUxFt3AVWDwQukWEAV9zV1bsGL2nqk7k5gEdkeiytfXnY6peSBoK2RAojsJiuj2NWJhJRBs",
  "key18": "2f9JNJbmUmdi4VoiSTHQYSwjbPZcVRqj8f3T45mz5VLMv9wThsYaJcTNcwYfmeYCgx8vmVmAv3NjMGH5KkBA3GBk",
  "key19": "XCMFw1sBm4PhQHheCPgDxURg1sP8qQ1bTPobW53eqQUrBiLSZLMaysCnUx9gmMb6kq7PGXVPRCb9tTFbagaVUH9",
  "key20": "2UyyieyVNeFqZouQu6zF2JCXbDG8eHuBMpyScaFVKqMLxpNhAPB2Y7HW14BiTTZ7MiK4fWeN2KkoagYMCnk6dx19",
  "key21": "5foi5RZJVGJStnmfjQAxPCKhyvSQZ9mazoVCVHrKZcUNwy7yQEBTkDsnRUrTLm9CbABe3c4koJNcJ6ix7ZHGysqo",
  "key22": "28RaozRVWxk6e3z2A1dxw2uK3ha7eocwmfmFgiiNR9du83EccjSWcNr3ibPHNwF5b5cFY51EfNx6qmEeT4CKFHom",
  "key23": "496KuBBH4dZT3VXDbWNuuQoo2tx6otNciCJbPMZnTcVtdJQTq4v4VeS3wLjwcxkD6hnQE29cGtEdgTaTizfsUNjj",
  "key24": "35LPWaSZZrMqdrUUA2YyJqFNHgsTgeb6zLk1RBX6L86KefktJoyC4XBShGCaaThaxVmVUzE5L6hsVCNFZTCyqrm2",
  "key25": "5CjGkaWycB4kUJsfaDBYmKVboADVsa4uc9dGR2iVrPEtgvno3zh4WLaT5HwRdcjjp4FL2hcVJ2R5BeYEsd2o3yvs",
  "key26": "3dJPtPMX5oEnkY3i7Q3VJCSogHWFaqxuehADjaKmvZu9NDGdb1RehZRTUhccLWVJ4GFiAKviDTv3rTonAjZV6J4w",
  "key27": "GSKw4vrVgKXUgKneH6X4giZ2WDytSZFEQvvx5jm8VcWUAWvZ3k5sACU7pKFTVry7BxzkuGbKNt1Unx3Vhhf3uER",
  "key28": "2AFnLr5B5ysjPqTR73mHrjng2THF3hsbCqpwfvW8A7HDqVowdGXyoQb1HTYin2yJdrK9XXZLPJxxqzXUMaGBBeMt",
  "key29": "5W2XusWUMuw3thnjhWqUaBeQdmSfska1KGwk1g1dtoXGaGCMDV7YQ4oyCsAjMCmtJBXo2Tykt8gm1fU1nxZg6EKs",
  "key30": "5X966Ampm5h7qxUsiMeXudD58QJphvXiRgo2Goeg4eLpsPFuSALnuRjgUZRjsxyrgMWZoj2hdFoY1pQkXp1igfe7",
  "key31": "oEhrKAoRZgfgU2QJgGAjje5UCqkDwnomJDMyPwM47vDu3rFLy7WkE9aCntLPHPMyVWreWnGUjx3eQLZaACFQ4Yc",
  "key32": "s3L6GB5oM5CqUdcGwZ2kbxQFFr2MDMp8j68EG4AkcW7JfovRpreT3qCaJEK6YG573fmqLadSZhoxe4uuMcByNxb",
  "key33": "3QNkVkESwx71BHx9QRM9ChkrkEq9735LaBToZwxscKEWDxxE5ZkLp2gfrWVMQSWPziyGREDk6En7RunZHrMwybpX"
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
