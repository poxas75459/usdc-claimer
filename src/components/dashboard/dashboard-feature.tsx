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
    "5KWkos5TP1r4418NLE4U858EHDbgJzfXSHqTNufcUdGCB7kSj7NdFuGQQNmyL8Dit1P4Fyqus87mbhvGVBvUNs3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tceLdAtGxXf1R9oErLVRDsPnsNYQeZyx4tN1Q951z9Hp83W3owjWaqdHcgkJxTghh3KHnuCCsNAkQtecEg17fid",
  "key1": "5QZNYphj8jjk7mbmMCckwngdnmfSJp7Ajy4SR356j9JGeTz2MaWubMsQ1LW2F84wymRcjdRGWRpjCpWyCkA1FmFm",
  "key2": "3CkmBpY9zqq95hZ7yrZ2V9RyLVxNwmD5hmNwpjeCku63SbyTd6rxiSNfEysVKN8UyX9RnFwnKAQJ8jvscZd1MfUC",
  "key3": "2ghFVpW5fAG4GgKaqaKTogUzHS2w7GaneHDtsFRZmj1X5vFgmM4rNKjor8giK2tNeQSEf2wkNqvz9dDz9wRPrnQv",
  "key4": "4MDiiuntFBjF2kXnGdStNGSsu2qv6Dgyj3VBAg4gkgH71oF6mucMLdA5cDfuhQjuc3W4LgH1PMDRXSCw59JhH67U",
  "key5": "28cR561AEEmZAwyKn3M1WQgd3byrXKyGGF9xGveZ9qdTFXdmuYzLkWBPARNNYWN22pyTN7GVmd2zkBTUaxz98hux",
  "key6": "DNgGr51yJdGzQjqeEfNbfTYQNcXbgdkPEY89jeLrC9D9P5AaL1e3cj8GzfuV7ZPbcMhGvhEYghBrBdq8x3z7kwF",
  "key7": "xqLdSrEdPGo22PbAN6JD9y4tMLXwYzCUrtB33q8MS1ukV7gkijS56VCJpqawqW13HmAe5V7rWGNZ8huZqTHJKrG",
  "key8": "3u6xa58qz3B2ext5FPn1PiziTuezdivFBdot3CSsLoNBwdnxQXVe7dFUCHe6AHY1J4ZWg2Hm7fQPvEAMzcqb5thv",
  "key9": "3eagcURDeymd1MQU3Wja4Ub8oVPbW973sxtR69Tza2191kybbF9DTJkW8B7oqQqjUQcg8A18GJXc7q3p9R6mxfCB",
  "key10": "zSLy3qZv7ipRThL2CeFkSzt18DsFVLbhQTmxmFwpzNh9gRmxBSiMdJyqVPsuK2NZ74VE4YFNh9X8ghYo12sJKRJ",
  "key11": "5nsYVkhx7WjAywiyxNgnzKENX39cvYtVM2CFUXosZbeMFQsFiTzVocFRNu4jyedJfR3hETJ8h55ruPERT6QEt4SC",
  "key12": "5tZUA6zxX8Htz61B1sLBFQXKuN4m9pGLfAXihYoMeCSs9AJLtErpJbLLa9jsf74yWRJKccTwQNJYWKWgV8VB8f4P",
  "key13": "2Wza6WEA5BeQv7KL9wSsZt8FJbDkVyztSEux5DW1GRgBMVRBjyDD4itrtMbDsNbeS8LfpaTHLWuUSpTUiKwD3dGP",
  "key14": "vknTHk45RnGRcjNpzG6TzLdJKFemy8HxCavesnzTi2NKyDWrmRYcifYUzA55tVCkyhvXYDwtp7VahYBwzjTP3Kk",
  "key15": "X7anZuH2SdTQJqjDJTBjozixSRnE2aDFMgagQaFvds3VrC7QDEhm1FVpRqfh75gXv2AnaSaoFxetQTpjCqfVXBf",
  "key16": "4xEDb7PmmrjCLrjHSNj9rtCYZU6huaFrSR9pGZEeXjoqmxhPQdbinPBg7HVzvUTXfCfzNz5TsvoPWJtN5MRFL5NC",
  "key17": "2bXwZEYJbFAjS2eLNkHt3XRWEbogqWL695xCwJAmu5KZS8wmrb5exiqimt673dU5qmDvvPkk42rcFfTpZfA6LBgQ",
  "key18": "2HHcLz1jvS9CpyujEpWSNKQ4Mhuuu449QiQXNP16fnpbx77NcGonu3DUQ2nYZ23EcQsB89emfvY4vxdJzudbqnj7",
  "key19": "2JFLroeWdhpA3ZZGnV3Jg2eoy8pwB4NTacYu3zc4ny2VDEZ5uWDCSK99ykYFWNVxuMPvpfVYCYS2ceJLgTJHssoh",
  "key20": "2qwGiMNZf4JphLMZb7azhaWxV9RDkHu3ZuMsyiXwZp7onhs9bpsoarVCD7Mo2ahoVrqUYBrNxh9ofGbNAe3Jzs5D",
  "key21": "3WxaEhwoDkF8GQoAzkwJR6QGL77K1JRcw3HjGyXAgrLhp34tQJZZvVCxqVuFxSfyABsZNhnvAMybDf9E1WCAXvEP",
  "key22": "4dFAUa9nTnA8F6Wih2tDG2wCeb8NNGmMXKDiuK8TxY1HXFFCVqGCSkdHESm87Gu4hK8NufBgp1uvrcB8uEeZiSgN",
  "key23": "26ua7Ez5CCGpvkAcExvNVMtpFQMoEQiMCKpfEmtTovpJK9LS2zZgQQt4cuZJrTbVLrMowjMyVMVxB2yHq4PGxR9c",
  "key24": "4r7wKVdabm3kbaS2kFxydhZeDQ7EgwdNiCnJN7VRKjQ6wzF1e6vwrgbwgo17mWpUsLTZKPswd7W4YxmutHnAyms2",
  "key25": "5cu1uan1ebRhmZo36dMuDCQWX11bh89hrpuwgPgG14SwFroo9CGsgrD6YPrKLCsnaTQaFh9wLLkuEVh2Rd9Kbhvs",
  "key26": "2xf6pbW9ngZMeH9MKGSVssRffeeFbdq5YFM6N8bxKQpYP8J8WrAsAwWPmAuP7EAdSwXjecpQbpWh9eyqEkVzEugZ",
  "key27": "57ZoJSSfE9zjACLv4QptTFrkJ1JzVFjp9ZemjgdgiTT8jv8aMRo1kLMQfC2T3UPLDBV3PurmK8NCwnTMWH5hbvJ7",
  "key28": "4EkfdZcQSZEHgLxH8RGd4wiWXTqnGnhbpCqcN2WTceqyL6q37bgw8vAAGc8Zpb7DzCtbFKDYpfXWMXEaTgJLujSC",
  "key29": "46aRemQHyL7RbraZ3xeGzerBYhSMWkHT9ah8bb3gEfpDPmg9iW6yeHjWDxFderTWxrFJc4aUHUC7459aSwFvyrJE",
  "key30": "5FXugNmKQvpq7oTNUFcCtUHn6KW1m8gtPxSmgLjygjhAc2Fkau65rQ6adTuGGWzfb4LZp7iA5sLBpjmw8TSXPf9t",
  "key31": "D3qmfVcNLaR3v2M1T4aYT4CvhqraYteA1VcdwPcLwsWBuZgSiT97wMAHSazBTKhcR8e79Vhgda8FvseFJafgL7C"
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
