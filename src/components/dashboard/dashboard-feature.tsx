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
    "qawrJVLbdJkFNoi1PResu5ECiU4xPzsP3aWgWRkG56oEVqH43xojeLN3Rx81RJKTsrwth8Pk4wgjo3NQtGoKJQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oMJaQoxaBFXkW9i25cU2Pq4FfEHb2sim39RTvu6KteD3ESnLs3zYte87GoPQQXPT7fYesFGZLRUeoYjXhmMri5q",
  "key1": "2QX6x5Xr1YWEZVxgNtuDoruZLePjdb9weUsdkS1oo3RPgErbRfxAPz3PKsn196euXAnG8NMqK8LZ1Yxz2ZUavHD",
  "key2": "2yKgLri3q6Tk5rchw2ANx11dEjwTQ4At97AK7CYLBH6kFwEjf4xXYoyJCM6qCKCATQWgWX3JbwGoiP4w14iMJYCK",
  "key3": "5AtcmE4Cavapge7wdTBKYJvoUncR9GemCurLyNvZSpCZwJxBrwc1T8tNQiadKZLzGyF3PN5WX3DXhHnrCEgyuihV",
  "key4": "ku6M1uvwZRLwiAn4Q7sN7o73SobhREwUuhLv2YCTHtNJ5ovxMMMtiJ1NWfwZBcc6A133Kupc2LiqNeARz6rPrgq",
  "key5": "31xiVviavssxwbQeqNbMavwTdAmNHnmqdCCW8UmvLyYkC51tdmX6aAZHYwkH1Vh34GEzyEesf6zVwmtjoXB73YeD",
  "key6": "3vER27f2p5ty1JGn6q5vjiz8TkGmiTTwhtVHgpd9R27L75EYZDtWmuS19hW1p2r4CiditxNu4N6LiTqFjwv97B5H",
  "key7": "55uGveX8hka3GFpBTNYAnKQtG2ggNupoPWmfmwYbJLhyQC8MMkn3BF3XDxBcD1kTm3Yer4B2vsodi2PLBKbm6kHA",
  "key8": "3Q1vX3znpBah9YRp318yTtyfk8Vi5DdWwRmTM44pKD8iacUSN7ZZqo9s3UbeL2jRK6J5FrarzvdeXACGmZLX9Qtc",
  "key9": "ny1eJumfLBSMhdMoZVntYZbCpKBYYozyxSrKmsKPVd7uc26o6WYKNxUUHfoXwTaMk9GBy62kCh6pEHKFoSw5frj",
  "key10": "5oUjCCu1hqfmRrDGLw3oJyXqybTXZcTybyJgGeAnC2TXEQmrY85j1Lz7p8zXrPAU7wsY9vKZCUNsgEFzyVzkCEsi",
  "key11": "4KC9oWYyABiYT35mHfa6j51MbKDqT9gRDeHnUA33BUeypj2SyfbohKtimuM8sVYF1tmJweQNEgDUM7MzUVUjiBgh",
  "key12": "23hWWj4LPksHbJ3hLTvfFZiUVSajEGq1cLpWdt9ZAY15r8SxwzdwaUgvg7SPsBxybHxkyHSbiCKbNQiWVZSXL3rB",
  "key13": "2XjwoK2weDGaksv12qcAj2ju7r2KRRBipkUB45WKGXiXoN52ixS8vuU9LgFGK4AWVEMcTvTeCvdh6SrV6EBzw1Kf",
  "key14": "2fbCMFtRtjxpaiR1KqqP8wKatoBEqmDjsdkBo8bmfXasshWhQbwxp8CquDZgXtifu5EjvR7HhTdSMALyorbiQuLj",
  "key15": "27ECxiUq7R2DVFAsjpWALYYJkfXsfjDeLVw6SnXbL2C1NJnbVLsL8XvoyUUHDfUYoAHh5o9CUH4mFkTyoM64g75s",
  "key16": "2cuXxztmHLHb9P1j9rk89q84um3APPceXD5JH8nhHKnGq2EJYic9GmqdEzkJVBKC1HqqQxxLy4Miht7tto699w1s",
  "key17": "2EJoAauH4R8T4Ct9G6j6cqRR3EDtwc6xH7gTfzionnNbNwmD34vJ1kDjvVyu31nn3MoVe5ADFzhKpnNHbw1wf9qj",
  "key18": "29gBjZJ2rSaZF8mVTWYKCZycQgBPrUurxZbZHtRWNoJp5ziCEq28UD1jXePRXf3ZBkR7XoCYv7UGDmN8Q4zUduTm",
  "key19": "uwbBgsKaZYifuEpFeiYoMm87y4MgHTjANTxvWKXb2beAoy4stdZuJ91igQTZNzVbGWkbPM99xt7cHZdPwFG3Dpq",
  "key20": "2QQ7zT1u3XUPqqsvdTfwLQW3tK3c4uHKHw5vxJwVWmNif4nxyYsogJMBK1KjeCQmMwefDYgYB9AVbhJmW4MftQsw",
  "key21": "35fSyYVk7D38RATKnZ6shBjHcC8jX7XTTZ2R9SDjHKdeJvsHMohNJcrczfmFJjDeAq3Hjr4rG3y1N2WgRF3G11mb",
  "key22": "5PrHq81ybpsdeETZW53mtosrDSWZ2c98eEbX3wfGQ9cWk5GmkT7mJiVpkpHeH3zvDKCcj8SB1FRuoczNMrnKiGM9",
  "key23": "2GjmoeUUcb5hSuFg79A83tnUFAFhsfcvXSP3XEZLSbkcwxfZByQ3bq9MZbpFPiMgub7jrDLq2BWF1v4GVnx39WCF",
  "key24": "q2eoqpTCpfszSbgTUkhoQD3hAA9yTRPbr1n3YtAR9gLU5gPrfjH3GG2ZNVX3ttoDCr1NKotWsxaNKE222h6kPto",
  "key25": "5tBheGCRdMpzMB1tVqL9MqYyYFAnSzWmYsTpnxbrDrPmPh5MwPwnn3kcSvFesgMRHpJJw6PbifG6uKWcQ4tWW3VJ",
  "key26": "5cqbqePiRW7xan4FJjkMb39p6ALnAUA4muMbWP11s494u85B4dPLvSqwz1KqvNCDdQr4wkwSCtjBeucVBGDhmkJB",
  "key27": "2tmdvSUth6VMYkBuQPBP8pwTNSVhywPBsQf5qUkbZUbetYMxxwtsvERZbuaJBdfsg3VKwEvJ6Mu7gnzSvqipB1Vh",
  "key28": "4jg185gdin7zyVWhdkfqfqSqAy8zriiH92dgKXiWh6eovFGNvoo7z8XnKWFfa6Mg3pgEoJzpt6vj16NyvUZMK9uK",
  "key29": "4m6ikzKC4wTebDu5pkGMMJigJn1CKZc4ufM8g3JMEebVptxZRR6rpmpo3WxVGeFyK268WJW2vV9wWKjd13nBFVqS",
  "key30": "3ESsTsaf6EFvrFto8wzvBWJmYmhm3T3mSKqHUXCEruYxFZzLic9aYUyDYSQYc9DR8muwo4KFhn4tLVPRWhNJjYZ9",
  "key31": "4e6QN1RGiMtx7tXwendFPvbbd1XBDLawCPqXYD5zPfFDw5ugnZCe6dABb4PaRpZxgrMd1fhPHgYnsWdMqVtQJfFc",
  "key32": "pS2HcPKsxWtjzPcVHEXNbnQQzZRry9Re7G5iDj6zp5q9CGeo2xj7cW81QAh71mtbHaNzxQZrrku6b2pJsok8wfF",
  "key33": "5kjrte5goHQ1GXEDSgAPTCqjBs8YAdoDDPfDDAWv5gmXvKVQeR45yTvJK5KwYpnuFNxat3p6BfvmRGi1npAmcWfz",
  "key34": "2rKwHgAS49wvuUAWnex7EV5S9woY9fEfV7mq7ns5sT6sBDxNGeNTP8WuDmyzmstVzwpAXHRn8KQVj2AZx2o5p2CQ",
  "key35": "58xJSufymLofwXKsH7WvWjygwEgEzG7QiN1ZamPR7RKeJdqyRvhCYKYBze8s2TQSmP9yC3ni5dfpKW49Ne1QYL2Y",
  "key36": "2wuAn3k9C1pVf6KjC4uXShFvJMBXrCeYb4GcpDMAGyGk2uVizmhb9WbpvpgVUaQM2jCXsuUNSnVUNNx7CiunK5CW",
  "key37": "CjqGGDahumb7aoe7uwKWHHCNWd7WWsDPasvs8KRvJMatPuFdLc1uZiz4QWQ6R3M53m2vsQHRnyT4hqHWnXdf72p",
  "key38": "WUoATNmStaFJ44jJpyuZrJpVDQhEaNCy5ExDVTNogbcwgJojzEnee1jnkq5JxJehiK9W75B1snoJ3K5kCu5Dm7o",
  "key39": "4kKN2DqVW5Lomebaii8yWccTwkpkjqZLx7weLaR7tQsEyXw285iFFiF1gmYDjCJt46jXz89nBpQnN1yDkV3rkQDR"
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
