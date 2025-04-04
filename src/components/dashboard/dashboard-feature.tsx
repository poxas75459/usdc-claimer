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
    "4LPAmTEBe363a2s5h2pHhKWXLbh3Zadpo45TzYK5mj4cSzkiMu6Bmij5oJP1KDLmCKXnuhuxGeBdedAtYhn3wtJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qpmuMBs68LpsPKTiNGogyEf8NXpGvkW5iUS1NUkEUCWPaaxZ3bQ3G7uv1nR7id946NSQyqgtjV73EDFdncoCZt7",
  "key1": "2MnfKaiTHLU19zCr2wnEFJiwwvMdrTLjXBFzSbhkLUw8cxVse96em1zxUey9EmwnEL4Zm5o85jFKqiRxFCbEvqHt",
  "key2": "EaRm2zFiJk9r9VvbMKXjWhG9apSQ1CPs7V4obHpMkKDsZTC8KZY5kBB8hsNfzugyXYnHfgZuMGCB4Jy8k1KgBsZ",
  "key3": "4Gtmat67xFfs4uX7GFHYrHuFZpcoW3PXzDn7PvJBQTG1KgbGT8oqAfnw7XgpVSK8VrbxLk1J5SV6Dr3FvS7icRG8",
  "key4": "5N6BDoReUePAmnqdhqbk9th5eYCGuVq5WxoxsMfBuJHNV9AyCyh3rgTVfDvUaco4Xm2U2NjCeSASyiAxzAMACBxy",
  "key5": "CDNPxjXWGup1VKaZPjxuMGVFFp6odUQCbBvo3KFWdHXjLRM86uQ6g6GSN5BosFyowBC9WysAVVevRzuUyt3nUw5",
  "key6": "4gXUViZE9ng6X71XnbY3TDGzM41ST3jwjUzj3UtpS1PwSJ4u6oiUmGNFFztqjd3MFzyUrnBTCXDBxxLmEtRHgLws",
  "key7": "672RyCRVeSHgPrtVgmPbacbDHy76NJeuPZdbBVqV8i8s74hpAcFF6aeHRoifC2ffRAYKEugMWABGDAbCPha3qwxd",
  "key8": "3ycEgxqZZtAHackhNjjVWBL3PbjDGZ9JoMPCTjLAKBkJQX5AAdt3tftmiJCFPN4CUGwATyEAN6UWzyRguczcueCT",
  "key9": "46pVFbwqAdUBR4tj12AQ1EayKHjbXMaeczX4j1gBoXiaJWVbtmHBuGt39pP5Rd5BuUu2szt5KmDdPFxHa3mLkk3q",
  "key10": "4XtCvt1BGuuuVjGq2zDSEy68uWvFc6VTXBXBJaZjX2GmDy1j12KKnr9hW2xu4imXVPUuf2p87aDz8rKLo4cnzS8A",
  "key11": "4Fuv6PgDDCRiPSNKn5oEhgLwvDtVupU6V1bVKTyD4BLwvUReFU1JmJhXpEtgBKisUhLsCqiSBrwx1BuJwdbrSpjJ",
  "key12": "66MYrQ5tHjRzXWsTiTnm6kpK6uxUrcLLWP7zD5G5pA3qE9wmmNA8DFiF4zGsdYCzve2RzZiGeD2qC6XuDqbEJN7L",
  "key13": "4ara3cqhwYdscooaZ1KTAG4gLLM4d3jxxTomiqX1j2hA19yKNq9n72iTRswC4w1MHQXUXp568K5ynVWDmXjT35pu",
  "key14": "r1jmoapSvFw5fbvz7myLngRsWuvczwNqhPuhkfhvLjjcViuBQa4tZKxGP43KhwEZaPEoFraHkj8iChziRZhn4bw",
  "key15": "3v3hh9iNySAe54mgUAQkMaC4EFTBPboBeSc3f5XDYBunXP6EVyfGWSBKuq5BPYmpEA22uKbQAgV1P32svFNNW9eT",
  "key16": "5oT85DYkYup23Q5W23kkn3QuiNokovYmY7TeaoFr5pTZGTvJG1bSihT5R48Wbi2F4C1chaduBqdUS9KqpnpYMGvr",
  "key17": "5cPRbyQjSh5mYWWmFjRGefKAyge8ahWNKuxgSq6GGVP7z6UVqwx7eP28aXm9aSmPxjpL4GKYXndxZ5M19sXuLftZ",
  "key18": "2Ecj2AkGdwTdoEzdyhGrZtETVLYeQoRnskRhgFZrE22Q5As4QP7L7GJcKLMKimzLoTkwC32bLtVEYhhw4b6xjEuA",
  "key19": "3LoaF8jx2FvH57zWG8W1xpG8aaHnbCxmvBLqZQZ8Vqj7JAMCdtfu9ZJBpGEn67SJAsukcVS31yjVTriJKAehgYgB",
  "key20": "5ayE2yNrgStBvEnAL9YpVrFB5nyJ7cwGi965ax4KhWeycC3UvY5mM3PyqiwXYMutNqiFH31xa7cf8ijJDHNhCRKz",
  "key21": "wUrbNSsnq82BzFQKaAT4JQvrNzb6Ejmg7dQJCFxAP4WV9YdNRzR6hjK89x8NyBoK1PkFhLmuMnUKAAZM85qzJqz",
  "key22": "tBpdRd1wLFX3MaoK1yxdhHDyPBYrzY5xZExCghykuBtxZ9LUdF2Wn3FfMkFGSEEPi6Y2XLYYiUc8BaMWV5pvajJ",
  "key23": "3howwB4qP6TfSwYQnFfKMPF8QpLca7VZDLWGDgXCsdA3QQ75J4A8P2y9ojhT2T9DmSEYBWxTHQ2kLvTk6Jsq9GPy",
  "key24": "56xzG5v2XRSguXM28G5UkSScYbjQzBLEohFDvq7h9j7ULhzDLJW5oURWKafZBoMX9rLbgm6KJeq2qbiETPjZJUTL",
  "key25": "5MsbjjVjPav74c4XQaQNp5afAT5K2VcTqAJEsFE1M2YCQAwQ8VB3eKfmuhb1XX2gRGpTMkDWfE6VJWByECaRMpjx",
  "key26": "ezn3Tjjwn8ZyM6SpNqd5Dd42pBu5dSSTkZ1ug14F3uYApGHzRtXqERLwYGzzVBrhpN31F2baVa26hufbrDMvjfU",
  "key27": "5svrGeYxTq1U39WpDbsLPkeaEtE9mjhieKBuwjBargKQBd9yy5vGBnwNmVqF1zJujopmHRbhdLb437gyUHhRuZyJ",
  "key28": "5dHySgkxVGQwxoDWT2jadbyGqDBCpb9eurftcBfPLaSEifm3pRvp6sNbC9y8cXBHi3jwNVghEDHogKnurS38opbk",
  "key29": "tK9eZ4XSY6e7tuJ88fyXttJm298bL53AakehJUrLKKvLsyni4pCyPJhJDpuqbAses5QGSZH3DoM2HbBd3FZtaNa"
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
