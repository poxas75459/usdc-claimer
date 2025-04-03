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
    "5ezujBFdx77FP4QmyyGJ2FsirXmW8M2zKrA2FRf4Bf9V9NquiCbQDE2tsYTedZZgDe66cdUY4N3w7ikRbE4XLRAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9yCE1bGTD49aYqeUt2WK2USKUKPD7eAk8SNpk261TX5XtwwwPGBTyhBNMidx5bFbh1XE15na257xc22QNsUyiv3",
  "key1": "3yihSNUag6gvzadF7sjA6qEunTVpc5pj8euCC3CcMLafyZLDsRVUMnV2BHUAZzpFZ4ifJLr12yiotGym5yJ7sZcS",
  "key2": "4XjK5eYUF7N8bUjMkZfpPFRAHw5mWiv8uDxxCg9P3Ks4jfwTACuASBo31Vj5ikJhBK1C9NDZPzt51BjvHv68mYT1",
  "key3": "2tCBCY6Gzb5m3AxYfHDLCp8GTFE6rdCzyL4d12ywPHQyVWadMLLPKQoT81DbcDqUnWHmDqgH4v5vgFMwyeiEfL5u",
  "key4": "5WK5nYWn5RQh988FtrrrkvdUD3BHSEEqG5KfL2eWjydeQTaBcrUQd6fC6XtRy3kRyGBeqp2veKuA5NW5h4bww2r4",
  "key5": "2KUAjrZQnNtAKDpYJekvNXuG41woppathhnSCPUddKhzvNYHvUQRK7aYVLadYjMDbXyWwLvS6fhxWo3SZmmJKFKX",
  "key6": "3QiUuk6mmwiT8rK3pXFRDPm9trhdJbAiLW3B1n8JqedpExM2eUmHMdmpiGRQ6G6WSuUEHkD14gRGupNYMkj9jjLz",
  "key7": "34JJLHtsUb5ChYdeVpUhn3riByx438kdBBvBvNSb1V4baNQphCLn7WR1EUGjhy64yGxfdhV7qvKgc8qsbZ1ptnyP",
  "key8": "2UudkwBLs7pA93APeQ87Po4STXusJhAHnXd9c7UAwBunohDRF6cBhhmmqiixg8qyz9JvcoUNMHBsdfn8gShWy9G5",
  "key9": "4MxE7U21op3uBuuykcBgpQf3jk2fw2RnE5gDSQmodTQHkukmC753inCQPH6Gpu6KGmhod2Jbfu4nwRHx8DcMYcxR",
  "key10": "4bStLmLYhUHemUpANqpigEKce9tMLVuRG7SYQEzs4EJDtwBEtDrXis5CnSPXpt548JxzX7y1nngGMfMYdJKr4DA",
  "key11": "4BYDuc7XpLJomFARVwpFLs9zrMzAs7q7cFtKTt7e7WNpPZZaDXuDKZat5xe5aQNghwGuw7Y1GjSATzRF8sXJQVNr",
  "key12": "661np6PzE7vDBhT4vFLKA9UVeVSYVav2ii4qR4riEdgiAL8rhVKTkuL2FkAJZBrw6U8efaiGCizf3SSotPxdsCEJ",
  "key13": "34UcAHJY24YrJofjHKNuZF9Tw9uWwUaY9bN1NYmFr239qqA459ZdbB6LgZpvk4JYethW2zQpata8YPX2czZj5ZN3",
  "key14": "4Rhpif1xoSeTKQBVLH8o4eiwFBCpBcKtyJXVix1LyigSf2vVLRysauwkaZNkHy9zeFM64sLByFhTDwXpGNkmKacW",
  "key15": "gZ33Mnyj9W7ZUdC7pyax695apQnCyUrxztpG5U6kGJj9aX5Ldqj7yVGQY2r2tecMzYwBwUtW5VhkkRLRSx9dbXD",
  "key16": "3QvYaeDQZGfaM7ZJqkzSuAimFykoqe9r8AZ9pbwkF1k2czgPyeZfyPv4HY4B38YreWPxXFt8QZjyDggpm8ZHtofR",
  "key17": "3UctY6HGykvu57RrccpHESvMRJ4jboT73LNbn2mN8cYxJAHUGWqpqLT4DA7nZRiAyNW8VEF9RuJ249D3XZNYRAPP",
  "key18": "59iETshxZ3WEaDXGwch9iGv4qSBN915y2VA8vbDR2oZca2X5Eomc5FYHDZ23bFQG1ZEdDD4oNvxP9QnGdunm5RBn",
  "key19": "5m5NK9XNkp4tu4mjoePzaSctRYQ9PsRFqHUj9GrCnSNTpeBKNwAmeRVh7ACQGM7eXxp1DBUNqTsVWxYMR5khn4ws",
  "key20": "2yrQADYX4LbfSwEranv4ZfoWA3igZpa9nCwirykoF8o8tm5AwUPxpQeGrKSJauvWfqCUFdzuShRKvoqbPyzigCAg",
  "key21": "5GySrB44JbqCc9wQVwrmcgwSXHFSnK5uYwcfuBjkEb5gRSyrgBwFF4QNbQ2zdJFpHk1B8XnSfDc4W8QqAAV97uec",
  "key22": "2QvxZ5T1v5esVZfPxL2xeuzbc9pQ5Lv9SHdAQ3FDqAN1JtJfbo6iznxBXsYeuDnJ5aqj8cqhaidMFS6DRJbpvYJe",
  "key23": "5eFffz6dczbU5Nvrw4zm3mYrobtzsbL3Rvg2QUzQBByBqoPauADzPoxvCzM3vR3fppj31eMqAY8My7o5oUGnVTXx",
  "key24": "EiognAeYxCXfRn6sY4QkriLrs87sWu5JYhdCngNnJBvT5mwYnA4tUwDHxe2rsVTyAMsWDitZkGg89rm1KjHYhZo",
  "key25": "DPZDH7Y7TS6pvpnJ7kmWJGfuthrbCdsMnRNJD4rxLnbxfXPZWcRqahNXgo3CaLtcydx19seCRdUq7NTeKodR8xw",
  "key26": "3Xc9QfqMzZckoZ6hwfeDNDc5jp5tUK6mv192PV9QfZymSZ8deczXUdbsEkaGvr3VCNcAiiGibX3q1ez72xLGonZc",
  "key27": "3RKSNSCYM3rSpDf7zgPxBXrmhJALhYBnE6Epvix9fStfZuX2oKHVYv2Wf1kvNsXZFSeGgQwh9SX3AN6mftt4jMXY",
  "key28": "ow8oT3W5HQxMDhqArgubrYQhcKtKS65AfBHEvGjCqyRwhqM6Cn5HjtwMqQ8TNtSoiFbKtE6cem5ftEKRMf2At6J",
  "key29": "9u8NwjWhkDRP5o1YTCF2PYyVkkVQCLtSRuzBBfun7sMu8jPkwazBopiam17aQswJ7FRA2Sbqr61omca2ACFKkuk",
  "key30": "2Y9ntcj5jowMRMktUavRykqgX2F1Z9KnFDsRGmEESk5A6FUXEana4BPvrjzmZ4t9Rw9zFeXJqHvBodKWuuWxqtDE",
  "key31": "3SE7WdvHiX7VNKJQsenAwvak8NhvJythRDWRvCW1bmFM7pxe8LR4nRXS1QXn4yQFsdD6wfhFxbWb9cBTbTRGNTBQ",
  "key32": "4pHYATfzBhjvExs6LVqvvyyvZh4m9oGfQT2XGGoU3Cc8EorLeLk6bNkeNrVzVPzAp25vMDzVpz9cQ3B13cAzzR5K",
  "key33": "6d5CLhNpJZRukgvvRjbznec8oRLdteMsWdjQ7cUwu1Y33LGeTiUMqh6biJAoefb5ViQ79DLxoBezu9Bcjqnhkp5",
  "key34": "BReiAPMcz8J96F3dk4HTN1W5H6xj9KQ3v21rNZsTdaY1AXYAYWa8EGNr1umMCifWUGZzm49FkT7v72MPy7Rc9Yn",
  "key35": "2u64W8R344ixbZ5d22zTpms6AVdeggaHwVLfEUzEZ13F6LDCRtsZMNebX6FpKpNPh5wH2hjsoPqfR6YB6scAzcje",
  "key36": "2W1WA3ch3KHuheBi7jnmwGfaFZicpTXP2KH89pDmpNh3ewU1CJhvghhQTJrSVZtY9mdpfHLoxZvVaVNVUX6n2UPy",
  "key37": "3S1rNGWjJvoeaLX9mNkRzjnxznX4UyawVwyyeDwNddT2CjAPUDL5HRRrxpWg3zD3aGWZGrEEnqNmc89WiuPVFMsz",
  "key38": "346vg2DqNMd4faZcmzVnad4nrD6ZvjmWsSu9D3TjEiDcKvKdwLepV8epKyXWBpcp2jSMLPi4FLZ41y6TdBRtHLmG",
  "key39": "5HpfmCeKMeipUhAYy4oc9vpJjnbuuh7sKuGwk41EtRtnQxW5zhH4QoUM3UPRCjZxUc5kC49HSKwpw79PayZUboNY"
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
