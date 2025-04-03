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
    "2B7oswDMniZ9EiHkms7UDBaZ3nZdgLK92FPRWm8FyhrtqDziTUYhhdeiDAKjWqGQcLqYU8zBpAcjTpbpVsAcLMDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k5ys1nkNtAxDz21kfDhTzDiE4ky9GHDnDQ5PKuDErE3hJEY2GhZcQQvemLZdnq6CwpLnsiWsAZ3Qh7Fk2QxQuwZ",
  "key1": "3Q2fnZu79d4hRoBnUfyojtz98f3KP37JcD3TVYXmWnQ4ztYAXpTHnGZpMNVqeetwFwFXBQ7PuQqKJJS6zcBuj3wH",
  "key2": "LQyhEmNwMjC12deHMMUgw5XGZ9F2QHG3d9cQ15aGViGaeSxeD277vy3JKgqoTmjvzCV6jxHokuqSK6GDw9qUuVm",
  "key3": "487reSahAQ8gYy9UfGxV1zFrvNeK33dK8nShuo5HJYLJ7kETMsVQ2PfsyXEPAjrkou6GE7dtzSEmYsWSeb4STcje",
  "key4": "2pcaN4KwCgfEBYs9zNnANQ75eyyCzRUGGr9BquF9XNxyVntSTwgYdTmYRHJ8XfPwiMXNeMmEqQnVFK3u85Rs6PVw",
  "key5": "5FSffy17Awcr5gQkEXJFMNryv85XRXbjzgYaWgYBeB9tdGHfAC1x6Jg3GiqnEEEUythroguDZESXaj2wD4XYHD16",
  "key6": "4hYpPXSeAtkY7e9pkJtQ2y7oezurdYGBFeb7xYDZvrzzCiSANTRGaJ48WGKbeuwBMnnqST1AB24VrSWUisyKteAS",
  "key7": "3aBr8tsPC3xHGcXQHzikjcfqwETMh9NCWjTuJbBapmZaxssE15WqyBzHNKgUXz3Y4azHVCrgLEk44sfBEKLowupY",
  "key8": "4kWNzWydANFhVvpvNUWQXB7CZMa4Ew12g5dvvkJfSwCHMra3fT91ugYFLT5jmLVwz6aMXTkuxpFEtCQ8SBb1devX",
  "key9": "5tQfSX4QNuPHhCAf6hcduwXR6Ee5xEeJT84ySTBW33FrxpLjTStcJ5v23kRFwwGxfa8fgdmqudWpfML6HfyzyYqg",
  "key10": "6E7cCGXBdeTh2YU6YGVuJYXjLuReHU5rB5zvQJwJAcztjiv3gzYNogYh7zyp7rUMzMJrCNPKwWrvwqED7FmWgzc",
  "key11": "FwRiTgJnBk5Px3xwDackHTe67E5Y55dXyXPiCLD8cLh1xtVxXTL7Xnm7HmYG67yopCa5Uz9sSFzafzgt9CEJgQA",
  "key12": "2FwRPeAzuFaVSrgwCPZy5gXd9WK2xQbep46qRQBsRMoeGCusar7F6Zm6zbRrVkDNJpV2ryihAATjcrYt9bKSJswN",
  "key13": "3Dhi1j4Ymw4Z2H31VYjtaP17T9aiJgvdhCsExTyGV5yJtN3zNjJPbz6re92EVwGWZWco9eKBiu2hAsJmV8s5JWny",
  "key14": "4LMD4S5TfjQRCkbuKnjGB5GWazhaT6hP9Ug82igWBmoZQnSAn3upq4gZU1QWHXCvHZ55T1ahMRHEFw3SVWcc6u6G",
  "key15": "4fgKVwgfHzURbaD74s69cBub1252jBC8RL9Kqy1b1rDF5LBNaoYYumDazMrsoyYCZp8NCXrJD4Y3TDFMWon9ZB3H",
  "key16": "W9BJZzLzdabca8dQQBcQCXvLMTAhpoUCAyJxJc1NyCYJwPvqqbUv8EnEcZFKWYddRbF1dJsFfXMKoCLKvxR9K1i",
  "key17": "3LMgdNVQycrBpnLk6dm5FeLX6LvoE6JLC4jwAK1xGHKTu7PjZVBUvyKgBbVkjhjLPxiaF7nGFZ7tpQP3KyKvVhHx",
  "key18": "54epMfmafS6v3JQK1rue67RZZFm1T8thvrWvgsFkxfXxWm3duDz13WgUiJ6W8CPx8hGpyygMmSL6QGQC6KGfzbsw",
  "key19": "5HZR6FH73GQzucCGjmtyhETpJufTs1a25DqDGKVR9CXXMJ5Cib6eYJVpR2LND9MZAChegcJsyn6RqqBUT5zgc1qs",
  "key20": "QcZQKQXNvRrqVf8XAeJU3QMsF5JM4oaNUU3YgWRwPKKPoFycWSGoK2uybT9mCpP7deVYrd4oTw2rh5cgqMFXwtD",
  "key21": "4knfKzg1KREvVNtNcStT6qS25cRjg8tZWU89YUGtnt66yyWsNQ5qDb8B6chYD2L3hVNhXrNc9ra7hXJvZrwGjRwT",
  "key22": "4323unQ96B5SDiYc1f4YB1FbiU1qXrosryWgix9H27ZC9Te99PW46mU9k6eMmmMdtTMccJJMY2wncdEFa47TP9Kp",
  "key23": "2kpPCAwodomv94ThwHFqgyZa26awJjJ9Z4FqL6MSDgzZJ36ZMCvFL89UibuJsG14NH9RUkfKX4kYfg4n8ApJfefo",
  "key24": "4nEapkix8DvDL7CqVBCzRD4f6xbuhEZDUyoQgSsMarNT7uPrHdkM9My9ZRadfxxZgSMAcFRybsPqTG5jzqJdEAY3",
  "key25": "5VCqJxjTseWhsvabXaKUx1iJKdoJFry4yGMWiffvvLYVaob6aYXeQzB61KfoavJUDKWKYkKwMFRcRrVdovg3rcn4",
  "key26": "4Tz9oNAzgg2f3rSMTbfavtWv6FUzhjimWdxXxbU3cgvLSQtNqioSpNKKvG14sbtWer1UwwLM5ixHaJjFWVSiRHS8",
  "key27": "5EtVJNhgAHEapsqpuAV2HKLvFq7wrUEvZvbrSQqSH2Hbtydkx2MHhwT1yNdzi6jSpueNM1Fhaj36XBrs21TCbbqU",
  "key28": "27NcDevUZw1p4eQXW64mvmDgNyw9Ab2vBGGa2NhPE4Yk3LLQmHFgZLZQTrV1sAQCwPM15Bax3GVfKEbnXkFcZMWN",
  "key29": "RnjuCBsaC4kzdgDMHKY7JwZBZHjKJSLvqaBVrahkdADWGAi87GNrPoRFsjUYGPqzSWeaDsn7QyfTDXPPKNPkyfL"
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
