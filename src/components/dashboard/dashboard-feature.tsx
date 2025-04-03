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
    "4VPoNEC9G8sPzZjhWoTqB4uQZ4aYZwgUDUMNA5WUUqtE8NBA3m8GNAKcr2rAwjLSxjjrgaG3RaJUEtk97zu87i9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YvgnXSwcej1KiQ1bLZFBsbkmkbPBFPZvisymqgEmtHjKWLJbnUUCFQ2z5yfFJVHpN9FAo952Zs1crVpndaERNdN",
  "key1": "5b6wLjKN3Rjr3MmFG9h1Ps1kyHdseXQfD6ZyRViThqbQqena8PtwLXSFQZc2AuVEREr82hb8wUFSfFU7EwQWFVjw",
  "key2": "4nbu21raoXMHMqxoBTSYNLJk3kxavURk6hnKXoQjHJZdYXFxRZ6NwD4LEcX6rxVMbRaK2itfjPEG1giWZDwVS5m6",
  "key3": "rqrzGpNYd33vkyAxgskqTmNG82C931tGZKMXBD7JFHuZXmvUQbpDXn1jpMibbTG1hNHEwzZGJnqPYrdFZXjzwsx",
  "key4": "33z9pfWRoNr6quw36nCX4iKe2e3VyZJutpeeToE2zbVdiW7Kjd5Ph7QbnSvn23hozT7PQ96Zm83q7ZxBmhQeTZ5x",
  "key5": "2rmb3poLgd7EVgDArkagwvGrEqqUxDTJY76FTrW2YM4MxGFHHLAqw9u3vUxU2W2hcDiZXBRBEKVHgb26eS2yb5Af",
  "key6": "5741yaK5VZ1GbD2qK8MQHGsRE85QLWRXCwk5b9Y1TCRsjb6HoQe7F8yUVgkD2DiA62zRwr1aRC14qkPaCPxLNfvJ",
  "key7": "5bEedjhC1yxrxbWCSnwi1LCugSFNDuzNb4C3abBjAuqeFdKcND8aZfShHQcwENwueSULS6fuiAh2a19hB3Nyv5CV",
  "key8": "2NgwXt1k9P8H9i3WfTz6xhf2HbTEUfas9EnNuQcNDePEJuuCojAwgfpWEeTQU3wV9miWPdBUHfkJBfeTkoXRW5tM",
  "key9": "38aR5TLBeReHHjKq1SoEwirF8U39PvvJ7Rh2BYffiKMEskhXKV7Nye7VWFG8UGTbtcvAKTmT3LLyXME3fuGhREsk",
  "key10": "fRQZMBw1H3A9BjT3ai3vKSxNXKSLDWBr89fcjgZdJU9JuR7cJLeNn7TRNUAHHHmGWxW8to68CrM3kK1wVk7a526",
  "key11": "3aWhq41Ko8UjdESGESBAFoA8Mzrzjc1DWFDDG1xZVyEd9Ane16Xtke9ef9ZWbbUCZuKftVpt9ko6CP2hD8ZvFpbc",
  "key12": "uAbLVRkwYyoJTQTTvgVPuWLwqYHZ7hnXj8WWXogiVvDD3KPX4njh5mD3VnN67FudDVxsxKfjFQAuAtzFpY1Vu8E",
  "key13": "578jtLNWQCyJCe1d6yJ5FGwPCxdy7fvVBoo6HBHAVsTDQv6XJdRw98cNdtWwdHQG5u5aqzgs4cqw86Jgn66uCjQE",
  "key14": "p2153aXq2RVUmFDasDyWF5civUqS7H9EBtqUddX4nKvyS77MH87bTmjzdn5ghPexxTPEAPVyc2iwQcwoKcASDao",
  "key15": "4yHJ46nHKF7Q7pgdkyBZgAvZri17QUV5cYEebv5NpxBLqvakdXZ8zpyaVSB1uT6YyGwpzYPLo1McJF6LKAGGW9WH",
  "key16": "4bUc1UMLqxQELBfTzcvjFcLZFKgKjo9utrp4vooo1BifH4rTshfwMc5MDgZkVnNyuxCQtB5kzwq1MTaZYbj1SEJG",
  "key17": "59MVLoJkE5Cp87bwfxyqkyTLE2c3vcX9HWrHQPx4nofZA8yaG1gUuV4JKd6YeJMUQpR4tL7SDLjpLfYYU6Pc7eeU",
  "key18": "3rZTje3b5JiZb62zKRF3ZBZAgkwSiFdKmHZRtGaptL16DvGdkBag9G7FDvijoJWP6Fv45zAgbLnBbfyEtBNgAoAt",
  "key19": "ScuPeXWPGRqw2ySrJVmJswx4opUFCEhkdGKdRKEAUpK96siXETf6FTy39VZyLzKYyq8eoCjCWjBjmr6KnxBTYJC",
  "key20": "4UqRXEi2ysu3N82LPAKdXPo99VFKw1f36uaLo4qwt934RMPDKUqxHXHrwr7FtNt9w4Gu4tZAk5y5zTyC5rZkCaUh",
  "key21": "3Jq4XC5MDF5NEgtRAKDzFb88fb3Wbw5H4gLCmAkSAx5jNkHok736LMgDtniypCnWN3gY1a4ooX3SrAZkQFQRhiyW",
  "key22": "2SCyeB1w6iqSjbZkpCArgHoTb2REsA5SNCY84Y57pg7BNYeJdwKyJjz63vrgfiAE5RRV4E5YKPv4f2HuuPg1BwKK",
  "key23": "2Ghf2tBCC8CyD5qYqBCTDhMPa9n7YeMoknvY6WfH8EBDHf6NPMzomGVWHBANZbxvnjzhhA3v2DLmwHBJb7yQrzPp",
  "key24": "5GhgL1WU4eEo7cfzAuHUir8NbKB9F8p9SLzr5jJXStuv3CjMMYncTyQ88nJbLbfvjovwEZ83h9rUq9yDMsk4vaKd",
  "key25": "3D4cuRkyoZRu8cHopqredWm81mPQtrRwsHFsWox8AzeYcatwH9dfjbLeoyd29WCGvWkBgrLDZDDMNwy87fFGmHBf",
  "key26": "3ZjR3S2JrQn1X8KNQxQdnHkoUsetcoY2g7bLSEFR6szdE5h4oW4pKK8fG63oMPMF6KJ4iEEczZgVFcLK8StErNV2",
  "key27": "3ZeQhtZwc53yCrs74xz3nLb2RXY9ErtXBZjhB7AG5WDp8dV2JGtNABWZEGgYU1KqQhd7Tvs9vJ88sv16QwGYhk15",
  "key28": "62ry32oBoUiqVG6FUznh7F5oox9sbQnAvoR2h2uSWj8gcFQpnoWkauvCjfaHM3cv7KtwSM734mVzH79et3NzPUv8",
  "key29": "5Dc4po6cCyP3ExvRAcwJnK7Dme5rvUrKRf46JcwNJhPunmYN9i9W8dXiuD9hVsodSyu4WPUVHscGtxEXhKZu4idf",
  "key30": "2E2trFC6D1vXPjDECUxUUvzfrGe7fbLybJGZLL6NnGFuGMM2ndQRaHP8nb1BpERKuTRqcoo1dG9cUivTwC93EiTN",
  "key31": "24eZfjz6ReK2oQTYv74eh1iMZqRwGXd2TCfyTUhjHpe9QXu3ByRYpgitJ1RJxLpRz3ZDzBhHN27fuX49NfYYuL86",
  "key32": "2HkWQdbDXyNn3C6AKZJRrAzuAY4nJb2rjoxwsJLAqY7jfJts4kqWfVNWC35Rr3f18viLwNnFC1mRQodnFiceYJ7D",
  "key33": "4qry9JjN9JTVoyQP3MhgjugYJgvp86poMCH3nJw5wgh4fegfEHDjMRDUE4JAWXtAGdU4WAmDpZJjwWvKQLEpuY34",
  "key34": "3JxkTeefh8Ert8qDBSAiEjHunF3Hzu7Fin5rfQQACjyP6XkbEC35Lod5LnyNoGK9PVhxzKNasVE8jrqZ6ZmzKKRu"
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
