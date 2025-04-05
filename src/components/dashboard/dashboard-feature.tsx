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
    "5Et2TgoeVPDGbqLVYTwDkUTJjskNjEk2s8REgLnWxosbA9MGcYh77vJnnjSfC518XEHNVpivrhAZJ6rdjqDa23b8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mRzhoJNpfijRZg7QoQg8tr5ECi6ZFrrdHLZdJx8u4pMRf46U9CGadcVULFqnojLbRgtiYbzUUao9X5MaKxkDPqT",
  "key1": "oMqAqmKcFEEHwPgVUKTbKf91Aci57bWUkkZPNJTozXSt5TaCiL4sPiCAKa6kjhPFpaUxV6oXUCefMvhxeF9hY6v",
  "key2": "4e88vpxcqAosy5nChPp53PK2c4pE5Wjt9MtfGk1iE2sZjhWqua2yWzKa1XaE8QwuXN8acacNu3iBwHK6LSvvoa6Z",
  "key3": "5b5i2BgwnxwEKr2TTVNQS4jfp8u5KVeewDNCiUmF2VY9oimic5WDwoFJJoWrVpLxo4KKWtvW8KeeVLDdr7n7Ppnr",
  "key4": "2ADhLAiKB6aQaXp2c1iQKrjKoeJNd8h6axCRVZjtCeG8HeDw65g4XZFCustSwoJSgC61qE5pdEgsshgfHkx6touu",
  "key5": "65QnqgP6eyWKznmUNRSTjTTXEwmDqfwWAcZs22qWcxtckkVQDp5dgYTXSEgALQ3srhYGppEBVcKadBXqtB1huCFg",
  "key6": "3EJQwt2rhBUSV1h8r3X5jessLB3ycpfCsioLwy9CWJXXSck3CjjEF5Cc6FFGnh5qT1AidusbkhmdUEia5JrgMQFQ",
  "key7": "4TEcXj6QXAsD7QJB4TAytj6KrB9FF3NMNdArRMvQDUDsx8rpPHr137umuPap5NEaL5mZMPx5zg53BCm3pvwxJUAL",
  "key8": "fUQUufwJB9mR37VA3TbVxLzBvebFEB1vxVxVsZVARAFyeDV25187g37hKDnRmPuT56eqDMr2wXZsPSgHbwQooaH",
  "key9": "pW4xzJf65yJjFPg3DmLzn4u2yvsqH7qgJNcc9iRAiXCFJrGhV6ZAvM9pE7KP1AeAbpxrWC5wqAtrGdgHxRzfDbS",
  "key10": "5unLyx2zjJyzvR9c3QUKa1o2SFQfK8sR467kr1ocy46jp2RJ61ZWE61m6B34G2iwTdbFVLqhcMyst7QeQXkSkWqM",
  "key11": "3XeW5iBg6bQrhmE8Mnd2xFWPfEEba9X7jcx2amQXQ24xeDcDnebS2xDjAnpaT48LUoTdTXMFmoC3uUivAc6grYD9",
  "key12": "2obatMEcvuFcEGou46yEBmfJKHwDngQXRpCwWSJnb36H3pNbofTzc37yZXbGHT97WKaz2tEeDmncRp6P65kUNzRY",
  "key13": "3uNMqmDXMVzduva4MsjE9LQqeRmpX6Za9AxXnRR7ydNh3TYS74WYAWr5VzQagpoMy78LSby249ohgf2SqXEoEY3Q",
  "key14": "3phzbbkNJx2tHEraQqBrLdDeZLAQXfHy8C8a9xRsj2d3gTy9bfSFxFmhz3QnDbDtFdt1eJqWTBwQUpiHbZFQCTAS",
  "key15": "NaLAwTKrJWgmEvhpMUyGkx317tr4x5W5U7CyjZhFkqG6j5fGbnT9cHgzCDxAnrzjcYpvqt2A3sS3DUtHARxL5RA",
  "key16": "2p6AgpSMw9ye17icj2BFGMhedbJG6yFP4zcSTZJG9QTmekC4qL66SkjFzwE44L1MBhwEAh2JuSC8qEfzpYboDPf4",
  "key17": "51VrDSmHx7oMNWSt4dRmMAK3cDCzkjq9RvqhrtaLtZCTNRh46scysfCsYaKWSx5ST6jpBvzRMnbNgV6sWe4napj4",
  "key18": "35x5iChqWHrd2Ypm5FscXGv6ywB4b8oeuKahREtmg2mProMGzq9Y6mNWY6bWc1a13TGi2iVSafgndqmjfpc3Hn2h",
  "key19": "4fm4BsT8vutyNj3HWX4Wnt86DMvU5xS4B2VxLFLfA8KdFkGCg2WBLtEJQySweVaiH2QCp53YqtSpWHuHnTDwS3tB",
  "key20": "4EXuxGSBvLKRa3kAseaNnZ5nUpDozqxYwvo2gBMA67rdQPF1zueFoLbVkyEzm7WuC68tNEPYDvai18Qn4CjjnP56",
  "key21": "4t82rUbVUp2KBzcYsyDvvoBDu5yS6oFV5LWgeCkyfUJZ5ETBVwJhTynD8MTZZMBbsM8RApUCz4Nvab4eHfsJLefS",
  "key22": "5dpr8z7Ar4hoEbtxkU1dnKLHavzAW5tdwrf5FYRAKttH1yZzQH5oE8qDwGVrb7fufVQCUdZPm4tdkahVW9AMsRcT",
  "key23": "4yMjrBqyiKv2YxdhEtAUXUgPRLAqVBSzv32hS3PaPR2J4n8LHXv1qamvGYnwpdj1ZJp14EmL8kmBPU9AJqa81ktc",
  "key24": "5oHTF5LMv2AtSTM9DueijujbUnTY4rh5ZvdpB35HDdGRzQWaH8r2yicNEkEgTuDQ1rnC8shDkBnViUn9BN8HUaaM",
  "key25": "2uTdLrzJisepV5pMDUPLVrX7j4oNA1sqrD25e5XfXuttirTdtWyqSgfKJ9Uk8xm4ZbSQb1dUm6gtB3JJRxyKeShN",
  "key26": "2Sgx55sL7PYnEARNHo2PLvGSLARyCkLx81Yaj1iL2k89YjsGW94UhhELUx5N7qwUoJ4fEkca9XX4yehKaWyf84wj",
  "key27": "Z2HGwAKHStCkMfwudMKwuj4YWRdh24zmZyZCbgfsYcF2mR4Sp6nwmZntr1Uw8ECiz686HNz8dr8JbvR57jdgoB7",
  "key28": "5Vxc1d83f1fsRSVuTtRn4BCeLyuEZ6W7ExCLPCfagV6ZnH9nna6WkWVYegEfemgPqsAepkNa5BEChYtvhPj8Zp9C",
  "key29": "4eNzpE3fdUP4pst3nWnVtZGoPro4HHtG8o2T3btaT9MtSdb6aCNHrgNUeEyyqJAvwxSkNacdsrHXDqfzMvtQ8wy7",
  "key30": "5dXkpTinm6eiFWrvNnPCgLDL6884hUb9iFH12rkeXrsBsQ4txnnj6bbshQAEKt9kHVEkN9LgsdB4JE7vrgXaFHfT",
  "key31": "SRzmGayKM2zxMpjHTzLGaHzS9AKtxdf69eYWtaJgpVHsR6R5T5gxYWTmiQd6vWXCUZfn9HRc8d6uUyZM5tRZLAa",
  "key32": "4TdesMQaG4732FRkAwcTD4XQs2yiD9fYfJBkuYh8LjHFFobh2EqLHWk845f7VvHRA4crp5GjL12FDKTpNRZYHiiP",
  "key33": "2uqFMMz6CvskGtQHM4oD12WNn5DBFPc8Hxg3yY3ubXZn7R6xZ5zWX1YEChC8rNnPoqyhHJBuQwKYQn9Tf25tJbo",
  "key34": "Y8LNEbwzo9qBnw1usdXzsFNt1YkCakpqXWCfc5gPEMr8iHmu6zFH1xF3HAwwUzyxLJToDKTCBEzpd6zw1Rm89Uz",
  "key35": "3hhNgd5Qyid3D94GXw9cohHQYpG75rGhcz6qTE27TsbWLtaqzB2GeLwXYyTbHSJdUVGeptp3G5cx25bNeepzYLtU",
  "key36": "3SkxJpEXeqyHLBwt7PbPxkRYf4wSZfDfVTg5qTuke8e12cxXeeVHXG3HXPLZViJW6dAwupDweaA6NU3UJPd8MjSR",
  "key37": "2JZueLXYFbsDJJhTphFD1dtu1YeZRe29kwD5ss2G4yxwT3JyAVH3rfhD8ZaUPJsLetYSsnhCDnGBnuBSFWuPn2xY",
  "key38": "5MDNntUhyhfe3jiiDjqEv7qmoiDBZZPZMjzt5sZFxkK4L4jFpLMy3pC66gUD9eq5dWmaN3eQKkW8ZvtiJ7u6Ds52",
  "key39": "5Cj9w31bq1B699RMsrdChKMeYMkbxo42FPp9WrrBDRebsdYiCJGvJyHnasjJxPHdmeKYuYUShkgeqp4JznTUAWav",
  "key40": "2Na1dPZAfDgU4H5s3gdqZ9K915TDXqWs6Wk5WcQsM7WX64fGUBvPbT9HkdAKe7WavKRaiKxhaQJZmZJmnc63m6xi",
  "key41": "3dfcQgVWYrgqjBvnxqW2b4sCP9PpCwtH46feXXBAMJMcCHNpmpsVBbEggjv7mxNFq4d6SEWe7UGBCKSsnXMC4qyR"
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
