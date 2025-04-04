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
    "5WjEBbF7stzNivZKxbzsMn4CZN1QNi1TgF9LAiQTRMng7g2U6hiewE2UCVyYRcZQvDcgjkTgSFRj2xe8r1JtPE1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31a3JPAhe12W3VBzE2v828XKdeGF7Sg1CxgJTEp8NbDMYuNq5ahFzD3s6pnBsjSt6RZUDx3KcEY3ikU1zm6CYEoH",
  "key1": "4HteLZLpNeTKKYRWgbLGZffXjDJq3qnDTw3s5bqbAszZfnCoNf8MmXAC69UEr3ANLAQXyuSH54k99eAKz6jW7CT5",
  "key2": "JhDNvQxwoAX7bpKbxbj9gqA3AfnNrPzAXRKLVBPUW5uv4VaY3aES5DG1wg6G7pTMoqGBhFRqrrQJFcGhupgueRd",
  "key3": "4orXtsrtwwKLCzU1SwxzDqz4nz72Yt69VHQBFT6oK8Au7QysV2cMFYeQHHJZPcqDKaVsQyk1bqW2LoNFQpdB4tKu",
  "key4": "2q7saGfTCGWqeyiRoyxooEnKUDiSACht4fmFF7FaCZTR7wv1GhJdmLtkdWWKFXd9yNnntwUBEtxYoGY6mvJ5ae3z",
  "key5": "5F5HSrh7ZVL4XvxF8Puyb6ZNpLTDkVhWkYkNkKwcRyRcVsFu3BjegpVw9FaoP2gwVy9PJpA8GmzqWRXBzigKGKaK",
  "key6": "5ZzQZrgTf3rUfsyZyBThnus5STEGMxPM9RQZT881vk78KXX2kWTMbHhSsBiC38qsqH8Q436bJBeijymCvvBsK5Yi",
  "key7": "4K9tFci4FPCgdzCFnci5KnfLv5toAiU7DtWmUd76MFwwsmkzWCuvZpmqGUpZ19RBQkYWCPq91wkAFrxK9Pxamdft",
  "key8": "e2RLF1NurQyrdceSczTzSg8czWR3YuBDmKebnHz2611iwosZmpP8pqtE7YvDtP82czCPKpA2RdPpoXGE9Dad753",
  "key9": "48RsQjb4ZbAwyb5w9uubrbv3YsB17B1Uoky74nSvNbYwyXH5mkof1Z8NTDBLp2yhaMmgyY3PP5c71ikVVhDWrdmn",
  "key10": "2t3eTrRPikSgQiWXDBWWLpZy5iB7Ct659GJ5pgoBud7fepFMwexjWFeHwKWZKKaMjd5UyVTkfqTY7Dqeah4Va3Z9",
  "key11": "2VNSmtZA5Wc8VaCVcqVcxECWKojjx4sjFmqvAdRNveQLYa9RVEACytfDRTkj83nYhwzVPaa3kiiGReLrSDX85aSJ",
  "key12": "GxXKCPCyAqwJmYndsjkCba8qdKnyBzyNLjmhq8od3LEt2zwuYCFkckkHZSyfPorbzLgSiR4wwpC7makcKivCSFz",
  "key13": "5BuStpSyy1BCYr3r1BoJUqpDrmJw6fjVGdEftBd4if4vEsTX75Hd9qhRGBGv8FNadbFurs1yV6E6yXVEcWegyTBX",
  "key14": "2LKxA9v7WFBnphhf9D721VyZbt5G799qe1zu6dB6ZT33CQu8vRKT9DLrHzFsSTJ9NS73dG7VgbUGxecM1cAyr59f",
  "key15": "3puC3t6A29G1PL79aDgQCH3jL2GEoTyVYf3ommk9bQVihqUs9MDxGAzwgmFbTT2LWXBb5i9rMPPZhBY7SVPyH8a5",
  "key16": "JDz9f1Br1qsQHp273vKMV5s5A6oeDJe3PnfsSMB9ARGKy4AYKkfrMfu5LpojGZSYwUYBiWgsgthYUA9C1GpiCun",
  "key17": "aTmp4ocaBwc1XzPMsHFyAWsyiXxtYp2Zmd7DV5FjGjvGLLmDJmsuuotxhGpCR5bHrbxdNmzR6P1nESgKdNQ1PbD",
  "key18": "xgdr6XimEdZj3AsyUYKmq9c6QLFtpK1dpzgT69VMaFktYQHd4VnPE4w6pbbKSkxkaoxwVJW57xavPF3DCmKqgsJ",
  "key19": "2XXssnVpZyk4iQKa1aGdkJ6RGNeU9RMZe7VHckLf1NVc6DNebDJmcevxTCpTwnye6ztdmeC2KyHLbpvRD7K9qYQn",
  "key20": "4T1EuuRQxtKFzsathJbNugRGUW9kXkqGbPRQ23u5t4hEjv8uwWtrJNDM8A8hRjwrSogyF5k8uWzVTpidcAJHEggM",
  "key21": "34sunFngektVHZhhSYxrCP9EHJTsZxTNCwXkSigvcERDqg4iePhppFdts9Z2jTmfzzn2RcwUmK1dXMUx3DdvTx5u",
  "key22": "2RUkKKyjVY7S4awmbMnAdrtUAAzYybGiShipRXQGqkjcRppUqfhioh1kih6YyugNp3srhbhcdDJ5Rm3oTakHsTG6",
  "key23": "38DCYtLM4KzkkcFmLPH3ADXaFCuYW2tYpLARabo1JLzvc4JD8aLdAmBVeYguu1QtSpbsUJKBc7bqERcwDNtGjK4M",
  "key24": "242hqGsCwcaG3i97CRYoMP3MBWyr6bYzTuH33GtEuqmCp2ypK6NVPWrMiqGiLCRJRig11gLoxJBK8emofPKynYoo",
  "key25": "3wcR64KKRBb8RxeRSMMjxkENnGK3oX995t5mAuBmAwVW3UqwTSMSwTU8CUq5i1fmzy7MV4NedshVFh3vSSXSNrWA",
  "key26": "13hRhm3JS7TTBKisrhhG9BBXUvE9gXfTwyAt29LpY47czD9D7hzoxacUofdGHLdtM2sWye62E6DPFLQdjbBtkVr",
  "key27": "3DAbfAn7i2sheWx3UXis2t7MZaUcFzgPoSpVRwa23J8g9CoYViAhuGGyuWBQkMDYhQSqnVhuZqdYLQubYPC3dp2A",
  "key28": "5Q6vQ8owoguniS2iT5Xs9A7rjsB73RGsJgXwN8DVXPoNzLFMQJMfGDTZvG5Uom4G1vyUE9VooAvw2A3176CZqG6S"
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
