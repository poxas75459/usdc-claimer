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
    "54GjJh2kESUzQQjoXUAUYJ1c2KsFCdmgQCqTqa58jwMUxcyUnnetkEose77TzsqujTJrteVX6MrZ5bWvVyvLaiZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M6CS7u4a9wJvTSA7LRdBGJiwn81HeDV6MBQAXZKn8gavcf1EuC3Han2aLKvRjkWFGi33JrwBHFGBPgZzZTeELDF",
  "key1": "5KESn781zwKEpujxDhb26i94zMCjNRdho3pyysEy5Czvj1snSwsRTC7ZR1hN7o6cuxHUTkX8UVDs8DfWzbRGLPgR",
  "key2": "5wtVYLj3hhwUaHSFf44HiUW2esDTeAaTFmfHw6vuAKSFot3YBxWJxL9tUsKuVxxiHcYvwVw2ErQHdUaD2sHS3Kcg",
  "key3": "3AQ2aBkRvGCBSSG1YQycyUgXBbTuJPVcQYM3j3GF6ZHn9Z6cDctXjNKFPT5T5AQkjh1pMYCB2pBEyMEGG1y6hn6a",
  "key4": "4hiVUs1KhFLC6izbwG3itXgcKVemhSXutjmwTNzSHgjZGh4KmY7yJWCfeTnoWFhWzi4Yn71M9B6NBeyeracqbBDV",
  "key5": "d2ZmvBx7sK5tNzSzMwxw31FSYD9AWhW4B7aN1rZmNdVpv4hHzgF29n2ap1A1bnTjdfuknjNReMYDaFZzRqLkmPR",
  "key6": "2o87Jtg8yZz9fN7yKeMMgUrhmxXKTe21Bn432NrqHsbKvK5huCp5xkYrkxiXhkgA4Y3hzXgCKsiE5SNExHG34L3m",
  "key7": "3bdSb5dL9BnyStnAuRiLYbWD9RVS89d1jfB18zE6ng6vbaaEh3va6Xs8XSDHX3CRTChHRFFLb7fn7RzfrzbXRgPJ",
  "key8": "vw5g4XhaQ63yfXfbURtfwE59jsE6BbXDPokiLyEjYgREqB513tQ5WvH43FytHMnPQqMopqCEWnTcRNBZVaT16a8",
  "key9": "4qPhrkToPRC3ck3cwcpRGa3EBzBnXTBD6KiDqoGPndkyAAe4pcsDGE9C3cGRHkPYzCbfS2hkmzQWKapyJXKAGV3B",
  "key10": "2TrpZWy2FdQsY4SWNF4TMR9VfPtEzKkQkgPoyfGKeMZUzdQjEAbHLgZkDiX4Ej1c1vPV8DdgHNgzrcPVNYx7eaVz",
  "key11": "3YyLeHdJxB3dU4nyQmfUaszxPCm9QG7snLrkCo2UVUe9PK6tLaVWAuwSYtygQWijHH6VK1eZ1wCCaFTVzQMkgtRo",
  "key12": "295DtE4T9QgkGzoE8stJidMeFDJyQ4kkL6WvBa4T2QehHpxzaxt3bEC3hRZ8uqECPwg8q3qMcBczz83ZD5iqzbya",
  "key13": "2X77a6PeDvXL96WVM3DQ32MhFscRP11Wxz4WSxRkPu4uHZozPXdaTA4CkCWLLoy42ER2H8ehQ43Uzx4V9zEezGtd",
  "key14": "52XGYLyPHBR4nVEg7Vo8RHrGHsSSrHQ29CvmBz987agJVq8aCQoKjpzY1HVEYCApxd4Q5LPX89deRAqmj4DKWFJV",
  "key15": "3LRDKMf7pDPdYZ71o5hpPQW8YiG32rxw4q638GcBxBHiJbg18KQCME18KVgABUXYjJaTkxG1iHU9ecndGLRWS6VS",
  "key16": "T2hc6min7pPDnjjxZte2UzvBqfVKCPBW1figE3PktWYxFKXduTj72jmyDy49U8uGJ7kgoTAvSEPdZCNu2gvYZhc",
  "key17": "2738fD1Af7jGA29WHoHWNaDyT6QPJfirqVeN5QacSj6XWUTcTKn7YakxAmu25owuNT1qcYFGWxjXatcGLt7jSmVM",
  "key18": "38zHju3TwqG2bU4XYAC3YDonqGaVfLawNaB5HtEzhqZuDWDCkfkuP5Qk2cmL4h4aw4wajMMTyUMxNhtqmzWmCvJo",
  "key19": "1Pj8twhaJY8Hu7Xg5mNhWsPTaL8fFw72v79dz7wkc8DSX9M95Nnp11sw16BNBuyjnCLwc2JZfVYTLpRiT1pQSYa",
  "key20": "42Eu1H1t39farrQeQGXdhvVbpzHYWT1KucQnq6F9wsjm8wakunT4jo7pirhUo7rFKpsyhHsGRUoP1dQNvwKp9aso",
  "key21": "mtrAjU1pbcWVLzwGCvTArQfdhofaMEJRgHDP5kbUTP5GCbdTQAGL9iQ28trLM1BRMHxSoZdFGJyJW3zMqUhwfxV",
  "key22": "5KwQHWVcpRYRyiwNm9WvCe5fCUy1216khKmG88hKtfhadUoAp33hnpX6PmPmsgQJknFfYKhiUQeiqmrhfFZBkFkm",
  "key23": "4fro1Z3iaa5JBmi3QPfLsqkK9hUQPYTw6r7D3hz4PAwTWPCtPhhp8RC9xnqnpb2XQAh9TyTB65wozN5WYzmMjmma",
  "key24": "2kGvfGe9MyXJEYdcWJtr8MfiGyU1T5BoveceZxjcR1UccNCtzYW6C5iNHVcZLPyp5AYd7KswwCTFnYMPYqifs4kz",
  "key25": "4rNYaNLyaieHkYg5etC1FixxkYqFBn2eAQconMK691rRvnVCxny5YGxkmA9mvUu8R5ZJzkZcQuntNLb1Y2VdU5it",
  "key26": "3d8U6PU1yWRA9XQEefZuW5sSLiXevMQQEYa3tpoL4TvUZjm6xF3cVin2cAZxzFab25s7vtz137htGEXir3WS2pm5",
  "key27": "2RNrNwT6yMjDcHBj5XmBtwQ7uTkqQ54hYfmzJyoqCPejL1vZRXkp19hUEMw24sU5YerS7XamhHrA5Agfpbj4CFii",
  "key28": "2g7LuQVRKQyWzEh29KUupoZDJ5ByVwo3PmzSSazbUZypgG6iiW81UTbnw86AtN64WGgfE24EwukokQMui19wA7cZ",
  "key29": "5yvRteRMLDMqG36tSAg3Bp5DiewLVnFjtxtwkzPZjmd8LL3WfNcNZQ9p3bF7jtovzJ1TU8RXnjQw7B79YRV3ig94",
  "key30": "3HNWn1usu3h1XR6dAfh82AxRuWLRBB96dLX4ZFd8QGduSPKFFMd1DV566VUcAK8q6VbKnX5azqGvX5J9x2vq6w4S",
  "key31": "5kunTczDBarZV8sjJkhwcKuhybxoTozmeJmPedgW2NDegYbEVQs8Fnwy2Q7PVzYNXxWHteba8nRpEbPbzWZFYBvu",
  "key32": "2GvUs3kgfxiPRsk7KL1nCP9akk9t2wQKJiKPuww42K1roBQ1qxq8P6pkTt3HsMw9x5MGtzBJuJ8FphVznmJe7rF6",
  "key33": "4NgAbgCMvkHnJR18gdsZdtdQhF7qPNSoZvdTDSwMafdCHMQ9QKAMkGCf9y667bErsg3Bk8HqBAkQ2DhcQSyXrPrq",
  "key34": "roZp2dS8LVTfNvfUna6YXAAHS8e9BuCeY4Z1pkkk5Df1Y4DiTxjUJozDrzkZSfjyzxEUzdLtQGiVxHUQYxtmL21",
  "key35": "4JJP7gNcYxTyURCXTmUBHjNGmY7GpKMe7XR3RcKizpcsSWsdvFGbccDLputLYTJmH7YZE7HpLUSgUmfiYZH1jawn",
  "key36": "2UjvaTnTHSsjiwsBP87FYJhtn2J44y8acohTJ1Hf44dS5jkFq3CAfcmFcCEsnXjRtavDNu1hhWTTuc4T446Hjg8v",
  "key37": "2978a1Gc5PUpkfk8tZ8ms6j7toLL4v5EjRnrkM858ngcLZWsjVnyNwb5Mk1izEiw9wAY2JAj3wCKDrqFTugfyV1T",
  "key38": "yAMpGe4w38avbmB8K6mEfVnDFKwMUYWh1S6kYevPdeaWzfdrcgd2aQamSDtbfJAYdkgdN28Dga3Fav2KFWhGfyX",
  "key39": "4GienEnxVZC1Sfm2JC3jKJvEG5sgSjiqK2X7YZRipNAn3V4k3wNXX487N4ZUfW9zSpNr1UqKbvEtkZGwQU31wj8x",
  "key40": "4CvnVJbHGwJ8ria32ouQrjQe7R2cm2tReueQm9XyFm5FzyevgqPtq5wLLscdkvGtaBEZvFq2UpCSEeZcxc8rjCYV"
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
