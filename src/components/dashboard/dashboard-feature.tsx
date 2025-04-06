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
    "26Lr9WmQg1iPbr54gNMEZ75Vg4Lo2GdQJmif7Wg781RfZzsBajm2W15a63wjxdF53XcuxFV6rT45qFq8WZeFio3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mhK1AZmHQh1zvrYWdZWns2m1CA27JqBdqWkFfnJ4Fihfhs5JuFeThE4X95pE6Rcaojz9KEUvvU4RF18HRJutKhU",
  "key1": "2c4JpZPqig8cqaz3TPJA2oqpN3AXxZWfARiM1ncfuCY8TbUZbUB442s5jWXtpq8TZBQhS5FwqfNKraMjkCoY73gy",
  "key2": "3SxP7ftV5yxJLaRFnepJmZPzxuKKWy3x7Av1wrdSGHiHsGGqWXasrWLhjmAJmdhCG8TvC8HoyhDYzwQfkErbxCTK",
  "key3": "5caJw9A49ZyEM5YwxKoDqZJJAQ4J9wG1XLQvtWYUNaxUqYKRiiLoUZGzJUqoVSPM3yPDQbEchRiDHtkxydEuW57p",
  "key4": "27LKmNu5jsFgvjJTqFJ1wRKst8U6K9L5XympnSMtDfJKjFwyvxNhBM7pDY3yDjxXi7XjtpG3c81djarcntv2wFpp",
  "key5": "583qg8emaxMs6WejGeWQvvMHX841AvavtRj7MTbUdamYC2WFvZvVVd1GPt4ohpzwYCNdSACGjTxXYY2fcbWFniVp",
  "key6": "51WjMEYXs1ZRWdHPj8EAwDS4esasQpzmgKKFBkLSkm4paSnQufPfGeAnH6Fu5GmxTigYh8X2bHDS9GpPSTQmCYzz",
  "key7": "3ebLXEqGHTYHnzJ6kfSngp1BnB99NmhfAmP4jSY2EoofezdyU8vBr54TAn9ohHmjd5S6RbHtRkpzMFoichsYLezw",
  "key8": "5X5T8XAR72SRjC54oTWT2vDbDTPskxdwn1Jb77mrQC3n2RQ4wNhwRjdvV3Ta8J2DHKTiLsdnbp7rnSFaVkA5ES7G",
  "key9": "4Wqw9vaveFuAQv2S7GaLPuNfermA15q9cS9wTjGjfNdjhx7tU1MCvqi3bDurYzpm6qctPMZEbpC5WTaBdn8kcyQE",
  "key10": "2fewW8h6YrF5TMDwYYxMtDKcatgLNrtXcjv6Eg1XwCSganCqs4fegguCjdbxXv5AnsaFdyEpLnrYT5VqsNmWYYdT",
  "key11": "4FfWvhVQkVD54rL6SwzptVrmZHbpqAx24K81SxpoqsSjkB4SfP2pzs5HCsF7n14mkcTYzks44Br8Ktxtq4xWMRAL",
  "key12": "bVBnMePd19ZSktHDUjpkbCxLLANChhUUuxZbcgD6xiWZSarFrJab8b9axJSCJvQLj7oaXvRf4qzps7pYMcmXphW",
  "key13": "53PYosLdQzRvHbuarcxmbMnR7kVDG1ucrKr5r56JeoACiVGUS9Gd9GZWjA7A2VjFit2L4HpAUfVArHs9PhgzR3PU",
  "key14": "3q5mLX4xTr4dwAbpY2ssYEK5URBuQhg588cLQxb6aLbG3cNRMWHZwpxskLbUThAwMP7iCiHE2URQaT7rSskzAkGY",
  "key15": "61svAwx81bD3QtamFBn9tbCwe8JVyBm5oEgGfKBVW2C15LxesvG2AZsLfQ5Y9fqVeWeDyD8WZapgNWTwHAucGvUo",
  "key16": "2rzqJnGoRYTfi8ax6BBNZpdrbD3GukPtwsHKmNsK457qpRn2DnCqcCwtLp3UcuVa7nnXXy5cAuZwSP6cRRc5gqum",
  "key17": "bKjxSifJf842xtz7RU7X6qcgjUPS9n7LSUuKXqyEM5qa7LuGx7PT77rJ8PiZkZyt3q3CrMrZF2L1YV1oR6sDgWG",
  "key18": "FwGXR8KNzAM3QLsrfsjBYrAdhHgxP9vWmhHuX6JVsDj21JT9S5FBD5KdsVn5kiCxErGG1Vjn4bBne59MAkeCxh5",
  "key19": "enLy3a8Lzevgh5dCkktHKZUzpQeFB3NzB5bWg2tnyDXRzKeFaBaeAGTGv7hhDaE5hYEv1jRMdcNFX2D5nvDzEMJ",
  "key20": "61RMiwb6Gxa5vmJd3SdTYazXmeEBvpuCqHZG4n8u4fBhBRMQCLZy3ZroCtebkQtEbMjR4mpXkZFVTfojVcZ1nxVf",
  "key21": "4LeDfk2sE9r4ZxSYkSGaVxtHJdEakRk1XYf36d46y7Y6KFxKPthASMbpt3u7bYaZcfVbxTmiFj61kcmzqowYz1BJ",
  "key22": "Lveo7bWiK3xg5NVSVDrbqL1DB948TqcC3Sf8dZZYp4YYrop9EM3bacHo5MtU7iJTUG5pDvNxisiCXLt4dS5FMBt",
  "key23": "2fM9YmhA5dX1MmjGaSmxhptqN7dsSxD8aycxuFHpCAkZd8R5d25eRDXqJEYjsTz7QmBedq1g8Rj4G3r1Bm5MbCEN",
  "key24": "RPavH9h5TU1JMrFsm5t7q5nKQrAV3t3Mi4679Uj4Hbo47Fns14DqgS7i7f8bmxajch4yKnREEVvowB2TJDGtiTy",
  "key25": "2Q3KFudpPnmJ2xqdHL9Q6dnkGrrbwdBvxhk4t2Ckw1E1Tr3Yu2FGMRgdn4BM1SPyhtSAC74hj5qpyf3cR16f5guq",
  "key26": "2Pt8WBuuozkteATqKLN9TKowHEqA43ZbnV5Gz1C7hPhgHfHHb6suTTYajzXLzV5eAfpj3BVkGSKDyTZ8gyyWjSAa",
  "key27": "4sreryyKbtEMFgK96P4pvR1y9T8csfDBWZrGuaLNeM1gFY7TfwsNn5CUyCJJTugFEHs29amTxVXkpvFDbDmwkt9u",
  "key28": "MYgq8uYQ3w9mCor6RfAbBThihphX3rTErCaQEhM8KTcKERy3T2f1RoDeVu6vogsQZx4eRXiPpCbnfmayBnjfxh9",
  "key29": "2Fz6wEFeu9JSEx88U8RN6PThcfJihU48AtKmYp13SeoAWvNauyWSL6Q8k2NxZ3X9UK9UwgJLyr3kfQZH9pF6NkWh"
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
