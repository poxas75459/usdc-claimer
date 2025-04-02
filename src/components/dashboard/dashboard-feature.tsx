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
    "52tKSsRPwS4MzSW9REk4STATeGddYfgbqE64CbpHCS6dg3KPmG9EPT6P1seNidUXGSEXjrbnX4MhAK27TNbrXdjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydyHxyvWBrhVb8XPaBqM6chzGortgR5jUcZQF7fX5vj6hDu4mLY3mJAk4jKYC98U7HzLyzo82qBeomfnaxRwi6p",
  "key1": "2uwdN3WL1uyG31Lfmm1gr6H1Vgw2NRFpdtHWt3Ro6vrK8z8QoKnVGQ5AF6krkAUU4YHQLK9HUWGVL5LxJgV1tRB9",
  "key2": "36q2V27AtvNYBvYY9La4jAGZ44sMFKEmHnRC9PWSqxCeTZbcdiZP6dDWnwRxjESJQoG53muaDKfhnzMyxYNXACsK",
  "key3": "2Wwux2oxXGob9hhxvK6oW7WvCjxDym1fs9bxTSichcpYTZaoa7D15rAar3DmVgciJ3FvM9VJdJ4ck3Yc1XkE9ZUL",
  "key4": "2PVbMeeNSY4Q5hyE8u1BRse99zHkReUriVC1fNb3XaiJeBfZaeqAiBQNwg5ekSaGNeAVBKzHpUnpYSZgxmPmkT4v",
  "key5": "2Y7MzCyXfdyTn5KWYT8S7KbjgW4h8y8txS5nbPoMHwaTh4UoRoxAW9txRW17iQZdBCVtn8oiwBE34aX2vNmnSnCC",
  "key6": "7c3QbdHTcXqEScAgf1txk7tjvPuDbheqZ1XRohVt8cFeEM7JiVMdV4rmw4QnmezBCXQa4dYNpPVHJbzmYbkEMdu",
  "key7": "3uQ6PsEmFRpYV52htTJUpP4HtJ5TvgnMu92G3notwF46vwmxdV8G5cEurpnfwbqWRBLB2Wkp7rjfbtRRvxXNbURK",
  "key8": "42L7TBiyTxgjU1X9rwUZVbZcKsUR5kEzrrEvsivXckL9JrVkiF3zTZRMA2J8D3AwTF5w4BA93mkThQsqmwdh14zB",
  "key9": "zvfj77BEQLeDpYRQjY34z1QSNqqi8GHDxsLMJ9Zz6su8EEe6th89jhfydYHEYo9JWRTbCF7duaZM721h7X5pBj4",
  "key10": "AtkXh8JGQ58ZBNtyRAZSitjTXbkXkjfL6NmMeUmuJFiULe1hK3uSjvjMfTwSaY2gD6ei7toKLhoAp5S7hRWHiar",
  "key11": "55RL9ma6nrZgdmEZo5kPpzCJUcaeTSiyom9HjPSb7zh9FZCCNZRzcdofwij326uwiinbG2B7wnyUsLTpBjP8cten",
  "key12": "2YZ2vTE6EJRdE6aZQaKnqgg5sRrdCr4m7DYtdFMWq2bCLDfJVCBTGJyT5nkA5cMpC31RFP6RKMiCo4ev2fjeTmDQ",
  "key13": "2tJeEJkhM52QjsuN9xkF9zL7JgX7UX6f7D1qbGWfhyzFeXCcJuQVLQNfofEdgEzqqm4bibfkZE15wh1J8UHWYoTX",
  "key14": "f1mXtPWcAeMYLtb9MBZA9bK7W6RcLZ86vUoUynzMUVPgDCaZkVxF4GnHN8DsxF4HWKn7y9q9u3dgL4egRwsgmoj",
  "key15": "gqn8RxwJsUUFBqP7ThMPUxdNKCS4mrv9wgWdgLjtzwDDfaCPJsHM2m3gjZRaAKGrafgQzmeG6EXSSLty1vpFcDy",
  "key16": "3UkEWyRcxJNJC8HaCEDTCvuccQypGQavQyCuuwgu4w9G5QtRZw6Y8TGVp92ZT9v2C5y6bxy8N15tv5SQArjtt75F",
  "key17": "2EHMWsKaXmABGoecXZzCbZPVNr3HmXcoyapf5RimeaTwLKcauTjy8FpSjS21qhm5J9mePVf7aNSig6YUfPii5uqf",
  "key18": "3nodKEicQNGLSrBTKrNCZQ775fR6KCMkPxmHptCSbyx8RCaxdWfJrbNc2uM9Tq3etj8o2oC4J1PkWC6jnN6QN9Kp",
  "key19": "4ChHbxFoFs53aFdeWJzZ4LLhDafW7h1vGgYbKs7ysvJT1zQh7nQ9XrsU2P6V8dpGwgpM3UcKSyVWkpuWnJN6XpS8",
  "key20": "3xgBAWHFNDLWFYio7hc9CF654NrdXW6tFkJ6eaZTcM2A9ythAWfb7FHuv5WcZkCu193dwaJcEAAGzPbsGV6d4Yyn",
  "key21": "BcDMGACFsrtaELX6fw9gCNY2ohUPHWvaqRHB3TpZf3twv6yntzqLjHfBMdtCuUwDaH23V2Z2xwXoxGGoJ4fCQ4b",
  "key22": "4PwzidyzqEQv9vbidkeW1vwW3sxWJeA8TKfdFXS2ySjxF6MSPuuBw2nZJiJEnGNBG3aY8cEPDAeSbXNWg3UAodPs",
  "key23": "7S3Jria3EF1jPehm3xMPpnewHMfk81XjmLgQDPcWkPu5A1Jj3uRq1kCQcamWZBWSipnTf1FifdTTukHmPwRSnFS",
  "key24": "52eTDuxpAp89xe2LEGrrmQGKxygK518dRmuE4fKacJ68BFPMnUr9ja3gofgcBXfzz1kZHTymFhqpfAxa3vNZ7oR9",
  "key25": "4DwHUN2kN4MoU8nkFtx3dr9sJ2WZxo2ZjiLJp1QqtEFL16DEPMf7e1c1hPPCZJPgacYAND8HsMms4JkSsVQzWsKM",
  "key26": "37BoG8S9XWBdR6WHG6UEyyJZCw5dVZonHTJNiwbu89EnEGQFnzXSvtixfAhnfCBQXsb7ogYZYG5P91Vp7akcJWQE",
  "key27": "2AbMbGoW2Czxu2uNZA23iX5LHmz4pDS6NBPtXTJyEEBDpSfLqLcxp1peCQXKcWqm3xzd3irap7UR5qRpCqo8miaB",
  "key28": "nLn5GMcWWTgGKogZYgFMZrkAtTG5Pzm9WnPqLTzBwnThVH5rqryM19xhaGoVSqYxaRc9Kf3XTJFdVoyEsgzDC9J",
  "key29": "3bdZ39UZg1foext957nNz9c8Q7AApik77Sj31iR3gj9CN2xN1DhSGXdDrXsnUByu6he6XgeiWP9Th2EhkGkZZDuq",
  "key30": "5BPgLuRuwJPWEDAvbxwD7Gw8pQLVWEL22cF65UzTXVbKiRpLUpgi7NNedagjAUgTUhRkNfywoN3pZNCHA8iubgBs",
  "key31": "vgq51qkfhQsV8drN9Ewu9simwZ4u2SBxKhjSBd55ZAUjJsUgVEEFL4fbfWF7Pry75PKvvrJD7TMmgsj8NS5zo6o"
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
