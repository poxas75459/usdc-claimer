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
    "57S5dx6fEV737ogm8WcFnWz25eBXroGzespa4XJmSC9F9fxqMq7qkC2tmryK88oArtUAe2HmDKxqU61V4A33vrDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NkCm1m7PeFjvT3Smcm87VpbjEs65z4NhuuUMiczCoAFr2PNYTGYitacFhojgVq1doCVqvQLg22HagMSnAnMi8LB",
  "key1": "48YrmwDz8oiBhRvDZWRx6k7VQRZDV5pwR2qXM6XL3snQLP1WdbfzrFYv6MFy8A4GNocwVW3uhaZbYgZdhvbRj9pr",
  "key2": "3yadsgp1S7KhFSY1RLKBXnVTQwCaJihjfvne4yjsSpTBJA6HBiajuEWwFDyZ9VQdFUBzjouRJjTonGacnqePpVi2",
  "key3": "5dbRdjodNLRSGXbNE93B2PC1w3u1GX3ujg8JD79a6p2dHQLqtKFU5QFpx1dNAB6HAD2nUoNDNCdHN8oKtTVidRFd",
  "key4": "uNop11M7jQPWxRvnUjM6iK9HWzB4WN8GteJvLCMCerqbjDCNkAKFzSNntLAMCi3ovo5knuvaa6DraHYvP2sieV3",
  "key5": "5a9iDNHXMAfAP9tETdnZwftuv8VeLSKEF9CTscEbfhfAm3EFUPRKgE4y9DivDDLY1u4879DF6F3wQhoDd8w2g8iK",
  "key6": "VscWTtqF6wXfmDGdmHyCqTjySdEjH7TBaiCHz17d2vp18D8i9xEjQ1yxnpTvaszFqZ42E9JY8LMb9Pfacnz7d8y",
  "key7": "2pjgaHBGRWzBwMbyBwmDvTc3NhiGqFJ5K1QATrbqnAwUEg1bE4aqjtXTtWCRpTsJPwyR9JyAfs13P83opNGBYRV9",
  "key8": "41PaR11Cbpj5zDRodgChBVyAnpCtzjkVTsfqiowPVC7ZcaMxs5AgfQQ64VB74Lyz1Xe1TRRnoHCppZXNwaoQej9w",
  "key9": "4aXNy13RaEUzju3L2qfjasb4uy19H9mK5VrZoDk2TQ428hdWHfmnMY3SFLqs97Y5tg6Azfp3WxpiJ3YxTXWssSZ9",
  "key10": "HEdtRLy2zhGg99jB3MrTUbg18MCsYd923zUurgh1yLjuZTL8p7UmHDVZUtG1EngrU4GRs3zkk7ThHd4gH6ZtreU",
  "key11": "rV43MHfdzHUKuJi7wVqxwJwesC29r7xT8s948Gu8VNyXmKaoWoa5f2mkF8XtZqcxjm7cPCyZCgq7QkY2UE9DNsX",
  "key12": "3on6VLzdSAtyzsrzXMw357bDYVb1xgJSD9MEQwgJQMt3BpKJEWZ4vbZvoEKobUqPUoJw3Jtm4PPde68E6Uf31cKL",
  "key13": "3uCvBpJfbQrjog3mEFXXC49EPEiFPUjcAHMGwUnFBQEhbo4NccTd3BeLa7KxYhriPmU6NxBm1V2B71YrC8X48y9C",
  "key14": "NuPi3Lr6jqgFhmN4MiKnQc3mEKHF69Y8av8LdNXPogy9A7pbRBf9hbYTpnKwUPEQKooJ79QnCd9mGcBZNUP6LdX",
  "key15": "4jjpjWQjDDADu7K8EdLADZCHezoUVCaA6k6dFr9EyGY2UdmNLdDniF7DfCcHYHViRdzcQ2iNkkEAMFXkUHeEAtAc",
  "key16": "26Hg5LWsDGFvm6z6cjSGyGvFse5Aj1kuYnFNS1wAMht5Jugc9S5ehAVt5CpYHMPEjGQgqWTvx3JicjLwzAxXptCY",
  "key17": "41DpzGWz5mdeSXfzpx7LVUidEawaDhzDYK6Q9t3jPztA32VfzyphWYGW2WSRdstpX4pyDVZW6acweWr3hZgJDgDB",
  "key18": "4rHKi2RGqiJzmwuvFugZW2HPPp3RAEVXS8goRWKcjKUvc6HHp3jS5dcMWa8KZnjEiS9q6rHTVY4mUDJsBrUh27ro",
  "key19": "jK9TFLP44RVZHRUoRvJb1hnmxbCaamAjjvZF3mCnVFbFAshxyasfAGG2cakCW4N6bW8yfAe8hQ87MGT3xWpSCrM",
  "key20": "3pxxa1PFXuGMnZ49jsyv9HFhsvJEFme5dszCmxo8HQeBCLBZhYVkY5sU5xd9kyBkSswemqt5XKJAdf4ojjVC45fZ",
  "key21": "4PWPHg2YxV1T4xyW1V55DUzG8Ag8cfeCcZ19er3aUUs9JmYWH1gPfuEUuFBWS6NRqYo2yNUbH29wtfpJQ9TnrQ1k",
  "key22": "8qQZq1xTyvcerBBBSfqsA8ctE6aYNaCMvrRG46RT2tfpd1SZimwQcbQhWUfwMYaU26AUxoGSqyFkgyLb9xkcUA9",
  "key23": "2jqc9adV7kTikMvcaLSGMhSQG4eGsdnmFor8ooqszMKxeAsTCTq7TLRHhLqMKSJjFYm6UUyJfSU8cWGp4fHENLwY",
  "key24": "3kPyVq2BS2XSrcT97fQ2RJ5RdoegvAF1KFwM57xfjggGaBJhg6B3s6MuBebRyCU6UgWVcSW5yvvsvRtcSV21NbTG",
  "key25": "4fyCRHkW3wZcTtWhKZJvC1gnwVMtcArJRaNp8ByDoL4EUMqTzL3of1pXNLJZRqH8cWXrNfSEfnoYXMuRBECmBB4W",
  "key26": "21HTM7fQXgzMc4A7EZtbBBJ4VBGpXv3L1WjBrMJwzGfAdUr5rYH3Ss127qo5P991ZCFJEAJFM1d75bLkTo2kTNTT",
  "key27": "62fFr74McDg1fURFbhGLWqw7KpqEKj57jVUfhvbqUeKVaTHJEtUVTegnS6sxjHxQwFnp5BV6RJySykK3CooKQq4i",
  "key28": "4JVyczG3weHfZfgfdfqtFDz6bi92DC2LNNYKrML49SkZCneiWYmmhJSUN6yYXtAUnm69UC8nHffS74ekVXdrdzPR",
  "key29": "4Vt4yj3ey2XaGEaKBiVhfaJ1cnCooziKx8hJQEgwWqyBZ3gviArjVqqy59J1n8y4ErfoZPUJzCNVQ4pSyXNWFAEP",
  "key30": "61p3B3A79QVBfkPhCRVnmCrosxtnJy19S6Y7mUNgWMAYWz8whKBrrU2YzjaSUMAWhvM7CQVUf3GG53BSK24Mjkmi",
  "key31": "zLV2AQKtv5esdiscoxMUmc8gV71Nw1Nu5gkJ1e3aV5V5CuEXizhW6qEUqvWG9KCciCSVecidTRkCLickUG2w89z"
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
