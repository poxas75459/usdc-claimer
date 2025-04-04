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
    "5BeW31LjnZ96KHsPQi8rosV9J23yHPP5wpAyMT3HSe72T5DnZgMiYFjEeJct84Ej2Qvu6ugj5WQueFsHufBPgeTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oEfnttiEJJW6m8f7kTHmjunakdYJ67dmTmzVyc3KCuFkv15ey8jVxRwuconXxH985to9dHvaqjrovHXdcdwiqFU",
  "key1": "3ombJfhkNCiEATuB6qN62Dxej6CZx8ngGCQMjCfYMrfDHFTFN9f1DQKnNCnUzs42Vg1y9NUzxECJ3X4Rvnhtx9pb",
  "key2": "tspnK7UhaFbZXMn1Fq5fnFJtZYDangd4n2WfC4NDjjmMJoVVSMCDnsRAYhM4UME7eW9cPzP9yjPt3XwtHwC6Kik",
  "key3": "4bQRqvu7aLhr6rj5WfmjqaapVyR26hvhp3erbAZQUoNUj5xDLxTEWcb18QwjPN7ge4VautF1oKcAkjFaB7RHY7np",
  "key4": "2DgN4KqN1vM15UAy7xy9As5cMheY7utccMWfedtWYNQJuJZcLRHjsbUG1GY9GLPbvJVqn8p2rKZmX7qVw7i3dVR7",
  "key5": "67Z9wKdUe7of99aTtRZfhkSu5MqtSzT5taRLqkjUHt8EcuvGkcz1KnLXFgGHFAmYM8TJtDkF3GYvCfgyqKwWojiW",
  "key6": "3PA9v78wmeE4VP7JfDWYR2JaoyDXfGdioM3jHrGgKJpSDbSSgjetBULfczNo1NS5ERfSZDYLJthxkbPGky7V1Mhk",
  "key7": "54tqPmK1J4bbdtcYrpgS8wSdzosr98BifpnL2xR3ZHgvbAzwjnQtwRZ1VAmGrKpyujTgvKA1X5gRnx8haS8HKerq",
  "key8": "aogtSSbDV8KRH9Vnfw1SaFg37T13FmBFEdSd4uVFVAkYRjs7NVRUVaQCWSgGc8E75D69UFKbU1AtVXKi6jGw35T",
  "key9": "UyyLHuvjKjrwxqVzR5ob9r6XbbKDvgGmU4XTtNT2ayns2R3v3zFEmJ5SuNueUQectTi7HLBrL6ULyXHXXjhtS8T",
  "key10": "XQPauqUC2C98t4JxKb7mbk6wBCQxFVtUtdeZs5xCNJZ3JBDyZTmJWq1p2jkSmheFF3DWM9bwHjFkqBYoMo4TLDn",
  "key11": "39XdKzozjNLuL6XkyBjULQHzkLz5Besvw3giaNRHGTMqHpSkDDp5jzXkQmZ8zj5BdhEoUojwsJJCtV8yWGfo2tf9",
  "key12": "Fr2EkmaoApJpu4oCfGqy6wXjniBWjmYk8m8sC5bTpGpv72kvRdUZcqGk7WeDT3TazvXLEReDfyrRdRugf6XWjZA",
  "key13": "3R1ELwj82hErotmB5s81cmWsQ1GpqKvWydcJyTPxkWhnVqvUbMdsGxU9YcEmuYznTJdkN5tSre4bFZvp375zb576",
  "key14": "2xb5E3jAYUuqiyMtsK8mpciz6tprszYMP6tUUebWZNgzd5caYj2cFKqsVDGWgKKcJRjxNeWiuWgnswpicVxScfBn",
  "key15": "56JwR6eF1VkqkFwBJXfGABzT3W9znyXwfZSpGQAeMwqV1paLi7MYTDb2mDqCrdKHvUbiP3f7yRoN2XkfkPonLyum",
  "key16": "JyEdfDbsdEqo3MbUDGzd5Bj5WpNVuv6f6WiqatNhfa5WjknKT9af2q2eoAkvJLWdaN25mTRCgaHe5REcmMbv8Wr",
  "key17": "3DjrrV1SC44MhtS4gmoVj4J3DpPeWt7gixeE3DXz2Ab9x5HiNXmQufppBxy58tVBZhbs5qB4hvx5NNnpzbrbUE4A",
  "key18": "3k4YJ95GZp4S2uDVGnodGBttrVKnjX11eqGWEZSUiteWtgsTBwLB7HQBhWutGzjMiXc49u6mziMe5yyc5P5GE2gg",
  "key19": "4o5Z981h4s1Xpco3shHvtMgY12o65ig4HgyAj1oMbNBJWWKbeWXrVRe63pN4Ghy2ubrg3QiHvxf3w3WigyigGjyb",
  "key20": "5DTj7yWx7v71xYBd47d8RBdKVrUAP1QdG252Vz3AdzC2cC4Pr6cuPWE3mniERp9qxc3nNB1hVsW47biAovcPQsM6",
  "key21": "eYuCLX8ELHcXRT6M4YKrtFupkU15RXuzvQGbN7zvJGH3DzbQqTAYT8t6zLYmwd9zCEj59TciaS6c8GtdTri3rKh",
  "key22": "5HAmQuuH27xnCY9SX8AiwXhSxuPfhQhuswFiRFBqBgRXSapeieBJF7ViVduECByQWhRohHchwBgaDE7f6RUCujME",
  "key23": "62Fy8ZMzzSM18rgwda7HTAp9LmQ33oicKd9AVW3LgV87q7VHv24BHCsmy1TcBA5ti8Z2FgZPxVP71ZHLfJgrqY7C",
  "key24": "2em28e5nj6gNTBDTsUgLqBCjmE3KL54yLrQRaicPkLVb1Nka7vphBSZCrTC2DQQZkGgqkbAjSyKiDiWYvtXMBqxa",
  "key25": "5A4PFgxBGExy3SSzZ29hriXQAwE17sXbkbGriqbVdxoLhvwUgSFFA1AtcY5qs154z6wEAMzRKRowcwXP8DQDYwBp",
  "key26": "3E7ngHAmHuvqfoqqauwo8MMzSY84upgh7HMcYyMKLsjMCeDBuwNQzo5Ljo2Gqg9oXytWG9haAE3xtTXWey4mvLD8",
  "key27": "4gweMtSPZjKgBobqdctzknFzsDBBRknatrxeub1GnCNMug9utjXk6MzQozC8yGQ2D1zge2vewMVgmAYRUePm5uyU",
  "key28": "4TNvHquhiLmMNhts12twLN4s8LJRXvynAqzTJYQAYsfUdbAukoXwYYHWYEapNA93vbjDeeq6aJmepVKc7tjPrLvc",
  "key29": "4ceFZcAvfact3zhZxjgo192BvGPvEDfZ4c4dwZbmViW6VvpGcoQB6sFqZxWLScMarkSfMAEEFcyZFcj8V3LPkoEV",
  "key30": "4aSXS5SY5NqZ7mJhLe4zM5iQfZv5wDfbM6twysdJ4JUfaQXyBKr7F1rvvT6bHSan8Hh3jhV78ypkSde8skwLNHBB",
  "key31": "65unbBRwB84EUHLwCAfoZMfzWZayEw1et3PWf9jsTDbkhc8N9ZCJSacFsrdDkSruArcpygvzdKhcKdEPZbFxdnRw",
  "key32": "TcdPM3hZdmY5pBq4LsAPCCe1tBXNHUSGCv49qK6aSmeR4Z6bGNuxVWkUntYbdhegbvWKajx2NMBU888sPfTSNfQ",
  "key33": "E3nZWzF83yc8XNb1RpnS2fptn46LQvSUrwd9VGXTK247toySRjMuEBC2PSWmimJYozNbTKZHQjrFc2n8MbEZ7KP",
  "key34": "26T4VWCNHmGZwwkPCBX8Nkiw6nK4KdjPJz5dBWdYjyzdc6UDYYQTMSoFVMkYAi3mhHHWLHmVemWvXWad8k2yJC41",
  "key35": "33mxzfy5D7poKEYyTGgzhs4K2vfmHC7bqYjckXf2apjPhXCwC7UsK9tFUeZnt37NXrBJjhx29MJ9Sp6apTXt2WfN",
  "key36": "5qNKZ5kzMAuf49iR6QXMpfsL5Vz2v2RsAbv7sr6RgqNCXN38KXSfRWd7YVqGK2n3T22fyeY2W6tmM3ganN4FVEnr",
  "key37": "27Q82KbfHTt2PRe4XvQwXpfvVvRpRKfuVRmN22n4tgP4EYrzjxXdQKQ5toNrk2nUyjg7PoTvVBXGZfUdo9QneEcV",
  "key38": "2Hp1BSqUF5DkmudryZewFBFoBLLQD6qedXYcLEFGdqHnGU1N4kpVzEu78xsuaHv8q695rUm2DUTNbjijPQVANan5",
  "key39": "49VjESzagFSY7pmEUEHxhwETcnFj3WSqkWa7pqsBVieUexK3N84r5YHbkQtgtpHzn7GtSkxuiV4nKHiNhcFN9xz6",
  "key40": "2F7t75vve5AKAxV69twSvprM5NWw83csTQGY4pdNzQeciMQbh8E9bqQzGbX8hWrXvESp1EsxgsBcQv4Rwp4bVuiW"
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
