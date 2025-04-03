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
    "3jLKTLaSq8YYHcYJyB1aAeBMTqYQcHSW9DXFGBigXdjxhZrdbjNtuHkUBBsyAZPyDuSmg2zMWr54xFR1xn3EyrSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sEqeaBsUFiSPwLjsUjP6docjsivPrcHgknKrLBamc1xTBcnRWEzMEo2GzknnY9ArHLZ8mncYRnsgJ23z2NpTYNj",
  "key1": "5RM2sMJmX2ErD8j7SnVxt7dRLPD7PKdC9Pmf4TCq945FBF4G1R8evpzrs1D4nqFihFnvtChWN9Y6kjFt2ZyA3Jib",
  "key2": "3aMKjtSvRED1NBEyoiyu1GpKGwEudabqyUzD1nBa5XZSbpy965kjDkBsSPQBMykMDDpbft47oPeFeUZLq3WoYp78",
  "key3": "4AeRpjMBBwdp2Vq1hu4YwgEFKRC8hzcvUsCkvB8icm7yZbRi92KtioUANwzYgaEUUcyqWjaZQ8Ne8BrmyymQCwhv",
  "key4": "5Bkh57NGkSksTXvptJw9jXknkr6VXqsSxakXrU8AXZnME3ZXqeHTf2XKXHL25NfwBs79a84SQgdzgGvG4D8kzeQq",
  "key5": "35ZvCX3fKG4sjydqFaZjARabRBB6e6sDEDP7Cg1GfSt59oz5RhusoW8QZK3iUPdyS6QfZrjY6Eey6FN77fxfzVuZ",
  "key6": "5vtHjZMbcQRSD3DqTvoXthPDrnPDUwuBUVpLNSoX5uvqdpmksNVjCpeDmcfBCzwxnnRF51WAoqibeJyS4Wpb4E43",
  "key7": "5BmYCSYEbH3YPTJvTGBGPbUuvzHgVBYP7bm4zMSu8RJ5KtZminXuiZwPHmoBjCdFCBF4ZEhSRv8bVUs6v1zFUvcp",
  "key8": "33HbYPqrK3D43Y4zrbTStBDezuqPHoksSjm3PYZQb6c6TMa9FMN1o7jyWfCT9SmcKpfajFhs72HDJjNFYG75mS53",
  "key9": "9hrJidmo7A2Hy6F4Y16CaXucAtTxHnPFMMcPbdB2gGKNWg3LCJDCh8FS56No5ReqVxKtcMzHUFw5j6RoWjLPHRz",
  "key10": "TQjSz6yPMocqgYFeUnanRnVE8AmS5cgY2ovAQdMSPPmbjEuh2tdnsnxYmVZdpgohAuTK6aPJiftAyJHXLQwJE7U",
  "key11": "23TSTVUw99gh1UmbFsBPfJEUkoJ3i8fkfa4hT1EaqYqqb6Y8Q3p2PbqebghwHQSXq8DJHXUr8FJqa5NUgbC13sgT",
  "key12": "3HFKAnE5cXPy8fMhDtgCRZYGJ8o8Nkd5Zdjrpu4zi6JnsWb5GaTs7AdducmUhNCD1qQfPVuo1PuRS5uxioDbunQn",
  "key13": "5U58z3cFBcfwvkfgGq1n7ZQNvgSM3yZj61WqN4P48rDWW3aktksj216TN7zALBpQu6vX2pkGS4vCWFSTKqJxxQCJ",
  "key14": "5gg9keNeraR4kPrskVzAXpJeRsfoCBkanMecS3C2ZQSBkSn7zTsqiVWJ4LtAXyFBmifoh9k4dZ1F2aJy4ukTLAT",
  "key15": "xdYbBiRoR543gj61ce6wFcpVTKZBZPBcLmPmkTZmBWMeazysWGWA9a3kire1oJcEqJ7muJFYZUEemYqsJ5FkLQe",
  "key16": "26K6a5jCBdJTZVMfVy8max1eyLgZPhGS176YPRRqtbr5z3ximaqbP1hntQnfKr4QzNo5uYoVpGrwMsXJg5cgGyJi",
  "key17": "35Wg2VU1jUyJngRgishBq1VypYj123BByAMArAXLH4qfdciF3VYWRUquxXomdAaNQU5bgj42uFwgHHypgvJskCRS",
  "key18": "3U3vQU2ZMgG81iCdA3t3ZrE33q83oEWqU2rfxuWmVT7awa4KUrGRuefonq9jbujzt8KJ9vko49tiCQkZcj4E3LLq",
  "key19": "32rhjEEdVmygJowUuEXwuKYK9ktmhT9PJzTQLynydrfPaZ91pJ5YdNrdTTgHdn4teWm7Rrn4N7cShk6BYMV5wHkQ",
  "key20": "2vFWqNVpPbjrnohy23GY63PX2CvsGjmkQz2m1ZQcoyDazuaewpD6dZXiWaCGy9wbtZcDPf8EgpXCFi9ckoxsKT8y",
  "key21": "34Uny8Nbvu13bhdH561pusVtEZG5LQmUBXQvgtEHvCuDFNF9taM9Pi6mVjfn93tBHH2m3P3y7YwW6xbvQ7CC6r3s",
  "key22": "5643mfRiznCyfPrsGrE1GxRCNaLVdXhHFvSexfVpuq4DQa4y2rnc1HAWhd7moxq6N7Dio3rnv3YQ3gFDJFQVFzya",
  "key23": "37pis4LtvpjeAe8zcb8Yegksvuta6dEpkrfAX9uJtMVjhLJAqAF8tc4YqEKsxdLTXC254cyQFwWmkDJ3UUDPjGav",
  "key24": "55163M3RcYVHtxQ8r19jGpDhqxnrQhvM3Ry82gTAmwLuYeYGXb6psGfaiz3BrzWyTWgLHaAwLtocD9WNg47FQoMj",
  "key25": "xaeGtr1iP4QE7qQYLNa7n4U7LCj9sT4eqYHUQTtHicuGYoaSYmt2sPem599vNPA5f68SuaBPYZVUG9w36Q93s85",
  "key26": "3nJPZX3mKHBhNWJkFNbBBF3KUBeHZ1GnyGZ2dAV8NrCqATmRi6aZkw35RWAKwLsQaarvE62wJLdim1GmUTNEMTd",
  "key27": "4mVnb2uVkVGp2Vps2XEwnFfkfWHjVz5Jy9AzjuGbzDyWXBA5Ee6TD6fh8U1b3suqEsYJ7u1ZsA6cRBWhx2j6Rwy3",
  "key28": "4Z6oZFHUfzA12aqMr2TLNm54mLLjKXyg4wnEWwVTL9CkESiSdpaQnkxM3HXjUAMdALa2FgN4Swiot478urTrW9qp",
  "key29": "2o7uhCgTjd8jwHGvLLSGNArJsfXj7UcxmGFxoBaxL29wtEdEXB2ztDL6TpnkBuBBDFHTX35WVLWhP4JwShGGwhTB",
  "key30": "3BJ72xyYPrkC9DYBNYX9C9gWJNAA9MKLkvbcfVpYxxwLuYQuswMUMG5AyYyhSZoXLSh6TATKsh9RSE4YzDuxZpTb",
  "key31": "3WVMhccC14PSNa6q3RKNjsexyrdc2eBfdHdX9vL56aHJWF12N6f6twv33BGFwvRZ4uvviPkT9qjcNAZr2pLGHBZS",
  "key32": "3PqN1cfDXRW5C47FwFKjYg6t2wKHZieauwMZcHy2vTZffkhyRtiaEoRCjmiBAFXn8nuiqsb6zPREF9MPoCZXXZj5",
  "key33": "2Ub5L8eJHuNxYn3opXmNvH8aGrYEDnjX98MYxUnxFcWczhyVsX5q5yY7RmGZWm8HT8WowXPNEnFJC9MrBCnp15s2",
  "key34": "376PouviZAERpjqkwmkN83ZtvoSPpSCXgMNnejeDvS2MFBWznCDENYZxDyoNXUCXwA3zjPCNsUM2kN7swWJHBBd2",
  "key35": "5WkU7bASuVBDjJANcGHn2Gah48XtUusbYjkRmGZMuhvRkuhfEyxoPePXiyYKtFdAtRtZp8mgaZ7Fw6fBCZW8j5xf",
  "key36": "mk3wvgprJeoMEB3RnCLGiWGswKShLEXMTbnwBdnMUaP7jUvQFuHbBf3vZpZETbrJLMjTGyGGakKddy4dr17uY5B"
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
