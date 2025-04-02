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
    "eS8m9PbJbV8dJpKCXLfgxf9ucgidTVS8VcBgFuyhop2TQjy9AsqgBZjMxiy2tjz2NkiwGF6MxemTYPSceLxGE21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DRWSgFwBRQ1wBP4gGCDHGYtYT8brV58gkpewssb8v5xpGTSUyBCQHKH94Sgmn3NV5dCPL35hXFp6dJSvuCdjdVJ",
  "key1": "2cQEKKVpsLwCxbfKqpC8kQ3yZFdiVpuLY8FcrRJ3vFNhMWAzbV95EXu1BY5oZZdfN65xWZavwc2Voe8KECZZ1R39",
  "key2": "4rVRniwAWJYErLbB8b2ibN9qL7YYqyTBg2TPUY2YkBrSjWKRE5RDHGvR7vi9DTp19ooSLBTvbzwhPg78G7aYU88M",
  "key3": "JcQ9vX4hWFz5VHpmJo11ap2JMjQ5ajjxb9MXnjrLD4vC9F4djVXJ61GKCNmJ71m8679rTCErqeZiiRi3PSR52Zv",
  "key4": "4k71BM92ZhyL6ZpLPhKX5SkHqsDmio12ixRkchUH3i3jDgPAf3kgsxow1fU57x2CN946DRzc2Vh6iyb1xRD9vpNQ",
  "key5": "3PEZi3P8pEBuczrJFNLKhyQUu7rUBRdDWD9QpXuHJrd3LDAjhePGsQsnEeXKWn3xi4HL1GGjirfXJF7dhawS73VS",
  "key6": "2b1AeSpxKmzFFj4mocMcYZGYGaJ8GZvUf7N8GeNcRtt25YnX2SwNUJo1cK8m65rwKrNoyBViKmFyS8M2JhRGurFn",
  "key7": "Z9uuWf6FsHUwfB8PhAaBGfRcbYtijejY47SnfbshAgUpzZnp5nwGY1fbQZk9gF66TGygAnELrS1UiiKSXAqyHfa",
  "key8": "4waWnagCX76rMyiUB8u9HnkXQasW5K23hBixEt5FGEPWkij7RBEkptBEWrYs4BwGQxU91ncLE7SKTe1RAYEZohx6",
  "key9": "4z1BVqUatJBQbpm1nRGTuMNAUUPKV2B1CkVfJFPKsuF5SPd3G5xt91tFQFDszxGfmHhMQu5qt1c3o2SUi2Bv1Dtj",
  "key10": "2X9v8pRiAp6zxgcpXBRu5m2fQ1zzAgJFCjH5rGdi2c2i5GJDQXPb5ZgpmS8dNmwRzybPWkS1j2nYZpaAk5cA2Rjj",
  "key11": "arvcD5FSTz4dUT5GCfhWSdL3YgbQWok6qVtJ3G3qq1vkceVSDQZ7JNxUKr9xjLjPNzpdBGtyhjD6ZJTmoUfV2zT",
  "key12": "t7LRHQR6sJ23BRLLBetpubAn9N7C4vM6WZtuEYqedqJJBtvnibi8Fza8T3ufvRL2S1TfHjzn81fAqGBPJtBo6Xq",
  "key13": "4SSqBJuoNH3D8z1GxTDeicNvAHi1TSniJg2Zm9sLBzFYMkYQCBHMA4KZ6GZEibvEvWiawf7at58b1mGQ6gjs96Y9",
  "key14": "5p7LV2g3g9gdv5GCRtVMwbM8mx3qwYaEnnV3pUbvzyoTTkiPvrcNXuAoexPBbT567SH2aoBBEB46K4CLnExWcvsb",
  "key15": "5j1bUun3yYyqh8jGcuFjSJfaTd5VX74j6wDrdCU5zgjRVgirsy6h2WYr4S7fwEpAMs2tuZBTcszE1aq3woU7DVkn",
  "key16": "5ki1F8khXhiXhJumkeGQAuNFeRxTp7s3rJMXUfmYpbswx3MKSyYa8mGaZf3hXr4wZ5r1NuKKqA4UQqJPW2ykZP7M",
  "key17": "2bQkWnKuX49sR7bBSz14y4AdNjvsp4Zrjmouru25ccb3GaZwdHgTWdzmFSJ1WiWFyWEzQ9N1ayyX6mvP3qVbsqTw",
  "key18": "49bqwwasmeTdXpEsqK3gpkodoPpLkRoVcTBBJKP2AG7C9D4HZ6iwhf4PTBxJTZULEb5hACpuWYJN4LDY7RjsyeN",
  "key19": "4g7AyJ9R1ggGYzo8vvLSmubbgW7EnXALr8ZmBQaEzZk5z9ftSXRYs81tACak2bpzyj5eP4URcnVTmedK3u49Cxt9",
  "key20": "5S6TvFVvee14odEdgEiKoV1CjbYqpDWraFLKBH3BYeDvT4kfkGXugKdUJLDCD3gf6gFwgzjM4cmYF3UEtXWxbVFM",
  "key21": "sB6Hd2kGzTvBeNEtMsfWL2DurCHmskpuChqbVSDU1xswqGvmQRSYmex19n4anYUGT55CGfdWD1GJgefDCYFvuY4",
  "key22": "gcFKb6pdsv7dsawgNfovkMA7dhfxe2FQXjdVe5acTyjbMbn5Nsn76UFmRzAPke7aiADfFumftgUxhdV1KJMxbHE",
  "key23": "4EPWT2ZBxGYM2UQCoMHnyMQfXJXtCzETzCCoUx3bZc3YF59goZfp7vE8HVJduqeQsRUpcyJNewr488SEaYyz1bJH",
  "key24": "5tyotTMbrbx6w3uQNsDkaxbTVYgbBRo4WwLFcN5pJDrC8tWvP4ixUDPAfoMZk37Zz4mHRox2At6w7VKKSuS99spt",
  "key25": "5FyUsSFCxLXgaMzKnL4HHnn5xXUNXskwy5QW1TnY2h9m8U1dpzQcXCPUx3PibDk7yLRycto7tLhNxBRUYq9xJ7M8"
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
