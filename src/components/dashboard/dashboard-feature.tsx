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
    "4Sne1UcNMCgXu6mtZ7pZPbXhSuPRFwvQxeH9rdpMcbm9ErV3L9ZcuC9GWvFXxz5k6Wwt9QJVP96Vx3f6BuXrvWuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3byBanVoVcae3KBokQ21zQHQVA7jCWcPYwBpsMFpA1AqHkpTNiaMF2NgJWJBq8CYdsATgwiaCPfkGnhCaoBzbVV9",
  "key1": "aGyHSYJpZZiqjpGD6rJmxBuDdPyz3949CSBNphwtfbdiZEWoamuTmmw4xejys7UWLHqZQmeGhzEzmxXXKpnLmQX",
  "key2": "5R61zmRZo5EPYE6tbH2yH3wtb5q9Ac4Gakawd5Jkp988A9AjKoaqJ9BaEmK5oSh2ErVWCLcgjoXArT5NeVG65ZbL",
  "key3": "KvAQAfKvawjvSAqstiCfoFVwUG26f8hA9M57vSNn9DpTiwTURB1neJqLX4AkQh1ML2htRK95cfXNN2gnHXYJNzZ",
  "key4": "3oXasyDa5KP5xLaWk75RbSKuhmbCEm7gPvnetoLr5WG85DwrG3NjrETkasx2uB9LpvqhnUq2B7ijZpFj5f3Cagfj",
  "key5": "5h42j3jDTKFpdcCiBCFDySmhjPx7YNknGvhNcbivhjj2rnsPfaP4nYpUAKXEyfMu9DHroWhfyHaKAZHeT8Vkxu7K",
  "key6": "gvAXZ7jUd6ntyyjhVdoXccwPM6LwcWs6WozmfYDKfKjcNXji6uV4vEB8G9oXDXsvNjBh9KLisx4nrKGFnFy85nU",
  "key7": "m627P4rahTXfC9LweLZQpaF42QGWtx1xEySQ61rEqZd3DZmC61TVAcSzLzRYkMKSNnZgja7ZeACRYmZ3CongQ3D",
  "key8": "4tVeUHo8xdBQuRZ6EPJTEhpHWTbocyq1grsiz3wuzAqtX4cozkM2pgyzQmsvGWzf858hMAaVRVq6CiyqTe6fRDP5",
  "key9": "2mPBXprnq3TKJgRS2ihyTM1w45TBcKjedz3x8Hm7wdQNBgqMQbNsyXKVQ3QmfKEFVUZrr55hhKUxKdE8wrYTSKxx",
  "key10": "2qH97Y9Az8wLRP4ZYsLDJUjJPv6ny7kFo8UyomJP9JsD7XswhokHgpfvvGknUeAeaE5L5XQnwhuysyw8W5FWZK4L",
  "key11": "2QpenbBv4RAyZnZ9wt5qhm2KgGQdyoiyTqS82MZ15rbJq22HfPSsCCxLkGvDMRvYUz3CTtr672byhMAviobCPqgC",
  "key12": "3DjBgZtT5ru6a5Hmpa5j21aFaQfgaSoKpK6xF2YQfRibhT3Zn9VAcytPvLDQpGRHcXe8Fbjk28AutVnkEHceGw4U",
  "key13": "4BAizJHUc8TFgLgpkDJ7X2pzqR2R4NN1GDL6rj5Gf334RFJ6My4MrKXx8GT1dPBfvXeWQckCVHA5L1BLTbApbPUv",
  "key14": "57iqs2n2a5HgAxtAdv3EEosPpDEWwnqQqEHpD7APu5JLEE3588dm5ww9j8yU3twra3EwLAeMJk2uk9AtZTMdRF7y",
  "key15": "WxjeFb5cK5RZScxX5zhqoDDv5hcHju31gXmNREsD7rtNY6X6seo1LL6vJJHMrsLS1qeb3cM55hVSEZAiBxpsu9r",
  "key16": "3L2gv2XKzract19R4MyZfkhX8hc65jbfwYSRM3bmZMSeMyW3A1gBUGntQUrXnhFuNBpGMg97MYA7JG5GhdTLKgo5",
  "key17": "4zqtV9z5pxcoCDMXrbeJXt57o31H3XvSdCGcWJ7xEJUVF7r55JVFVd916qMYvKE68ryLtaEzeyaqALD1JXK1i4tc",
  "key18": "9QxEb38K8fB7wBYxtb2TN95WhG4n83ByTgKyNKMMCYcMU7y9cUQzKCiM8W7nMXdxoAyZ1dSgHi1NkrtZnUC1WeY",
  "key19": "5DVcfuyHozW2zPRHqQUFjbBuwfaeAbHKbF5EEt7bcdLfg74Cb8Gr86QiTYGvrtEteKDLkSQGTv4aaBhPBX1ep5Ff",
  "key20": "361v7eMidhPEhjgLscbMv3SjtsWPpNAz8jghzHY2L7976H9h4QER68WQcE7HEEgf4FL41PT2H9ADrUe3fkQrfepy",
  "key21": "53YT3ZWQ5bB6SJGPnMrkBcZgRC9dmF8wheifU7ds1bMFKGXz3QJSLT2WpaGBA2SM5Hd3hjhfeTtRBXowwTsJganD",
  "key22": "Cd9SLSnysE8Comrt3GZty6NJYcqoJFumxcgoxh8dqgRCV2qa4nvAND3tSeWeZwEAZYwRZLUuqRWyck6sDwzxMMT",
  "key23": "5Z3worFS9EcRz84tYZD8oYkvEH8hoSGA12o3rvmbU2jykh4TKHNF7wUE2W7QnSuYr4CjSFs5RxLAarKztZxNoL3E",
  "key24": "41ZkYCnDgMT7gvyRWxXAa4svJnRxTGZNvNmQ1CvpMU8wu37rpJrSSTTR4sbqrpGpJcowmguaQbYLxnCdC4KKCVrd",
  "key25": "3puMn74uj8wM2cLAGmfoeTt57HTHhfMvrEgJtoqZ6BV7jswaKUNUT233iHRSsmYJ6aWqhvQ9M91njK6dtzgYQ3QR",
  "key26": "24bQHw2yxrZnaav6EKWi658roPFVqxCzd54F4md2p5zvgwrSrdQk6T2g2NS2ubLBTEFEtg5BZTCDMv4b5ioG36tj",
  "key27": "3LJpq8pPoy6spbTiBNPLQUuUq8mVxshNe8S169EEXYRUT2zCBKQqWKkSAs6mE7DNdTX1conoxySMCQBakncMAsJF",
  "key28": "S8rMJHQrj7DTu1nY1vzVackuMyvxJb77a5osfhVuNnCPnNdq6J5v5h8SgD7s6JfZ6JfVj2YV9AqqDJjCfNZTM9N",
  "key29": "2aD5gTxmvAAZDTC16PpU5ebPiw9Fv11QXcGUVu5n2dBKCs2H3TwiYYUUGdqAZadRjHPM2x5fG5TT7EYEvgK5rH6H"
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
