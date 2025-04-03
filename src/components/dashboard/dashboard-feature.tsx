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
    "2VazRNfpRB67EGdxbMRFdUfEC3VRbc75xeoAh2UWRWkyUQhE7HnDquB929jCMUUUCQioXAq8grPZSQ66tSwEPryC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q7r569Q5yv6Kb54BfGryj3ixknQRXFyEavDyjiK8Dye5QEikKmDnPCZqA3x9zj3cnvg2se54fWKktJnxXMJ9QUC",
  "key1": "3fsHadTMttVBC5cqynTyYsg2N47TTdB6SZLfJextrrEzNRQZHumg5oZ1AxRc5qUwhMnat2MEee24GzzBK12H3eoc",
  "key2": "65gVNMXaiyBofYFHsa9MEFhiuxeDqp1wrGaivKrWcRYKAyVRu5Joat73Lwok8zaW5Rq9ZqGV1rPZKi4hL3YZjbPU",
  "key3": "5sdrea7cLPRZRvYTstmrBfDVs2ChgpMfNNKC6Y55Y8AUpsQ33qPNW9e8Un1XXXKLjvYt7EzX1Qi56wMQZq39PxnA",
  "key4": "5h1spDgzhsdfaqRjxLnaehRQyZwuWhjxJv8ZBPp2i6xYmdLEe19CNVgJawPV4MJ4H8rj6H3Xxgw4sacYjq7FMDCy",
  "key5": "5b6NwE4sQRJTz3jadFkEPQ4FRqnwgFn9crmDyjLZC3SPNGpvtjybfFUnj4g1hm9bkQHs2FBCws4hm9h5ysY4aThH",
  "key6": "5fnzDq1PcBXHANgUKyuatXYXMc4quSdrbkrQgdBVQSe5S4LaNoDa2F9jkucjyTij196o6pWAdpbnYARWrw7FzXHi",
  "key7": "2344utDRkWmXzNWbPSiLukMEuh2uCGDAYuq3KHWxMFduAyLrUTCG7Hnb2Xcay1ubN2unCeC8cvgehkH4KEmdHjfZ",
  "key8": "2qZDbwwBcATNHbPMAA5RPJjwNJ6iF85cSfqZoJ2zix3LNfqH5SsmLzfGsymk6LFMcFcDuA7GAf2baFYQrCSTQQws",
  "key9": "2xc3iHo8DF1eKdHBzChQh9kU6nwETgkzeHLjgcqVa6BdK3scdubfoKuYrXrHN375aLxYr7TMFTD4U53QpkVS4neF",
  "key10": "65wENjqG5tkaHtEkUW1TdNyESCdQk295JyqGEaeJdnBkC1MuWqCKXh2rM4DwxACEYZyLuWgsxCEqoQRXCnRDhR51",
  "key11": "2gXa4fCUHTJYoD6t4YYWRcRqVs4DDAf2T8nAfb3BsYCSg5n6nMvTxCF28VKUmad5gsTLXg1vMj3keYYMMzErquTE",
  "key12": "4UjY7A29yM3nw78QdGseFY9HYWVzUmYBxgLDGRKtVwpP8mJhZNgALmWAHPf6pmJihewDFyVmPwx7F5EeKHNu2Chi",
  "key13": "2RsKDt4drHZq6onFYYSDdLaRYYWxg7Kv2Y6ZoJFNaoU6ehEBfL6LXHdZzWbh9SMPTbnucpM42TYHwnPAmYGuZ2CQ",
  "key14": "2PZ3UF3D8kaWynqJ18gW9mz4Z7G2Btcb2Camf2rkSDYqN77GBrDddNEpCxvkGgiaYcd698ELbhZBTs3iv7Q721y5",
  "key15": "5XfLf9mUm9LiFXvAikicsrxQxCWkVhWz84mDWds2n2rwP71VjYsGLiVzymBeHQpucGaJeydyMAnxGcTXKN36hdfv",
  "key16": "5T1Ua4av2XMHNTV4ZBEUTnFoqfJDduLevaM6azJw1VRQVbfWFvGvzcnGeJ4uCzv3muNwhqncbAbwZ8kx7q8GppZ1",
  "key17": "CEwYC4f93DaXvenoH4K9nRWbeVM6RJfKEstAFpvBXoDtgE8fvrfEbTx2nzTJ8ozTyALEAqxrDQsTh6XkyPB7aPB",
  "key18": "3CC3LxKchn5xs4Hdh78oRUzV9Y9XtvyupdX7iRu67iPBqHcfEgyrdjYvjgFhf6EaL7g3uYK6rmxZGf5EvTxBVxtW",
  "key19": "5ae7uVnGHwS1wRZWU12MfmVDTmWUckDNoeBZwFkHheoJ2v4xn6dKxvixp3cEC4zU1AcJuSWWduArBPP1HUduibtp",
  "key20": "5LehFTrCge1Wed64HKEfUQDw3csR1VkfQnSXxKYSvKyLR2C1JDXcg97EJgzr9uqgoGTde5P6V2kdYcx5Br5Z2AAp",
  "key21": "2ftw7gxJ7NdEecJM1CCM1cLcbEiKpKxxdYqpeJ51mFJxdNuy7pgH7WLMmfH4MaQMcXfnpRiQwbt4iNzYGdaoD4E",
  "key22": "3PQseuxfyUDwSnQenh9kN5YMtyv6FBMXkg6vHVoKwCia34rrSCc335BeZSPHwbCjSXARMJ23skbvY6WSHTv54Khp",
  "key23": "2ffwoYA7ubCsUHbWyiG6eFkWuoZX97rmzTMFbGZYkcokvLvmy8JdTpR5kbGr8WxcxCSmXbR2Vib1i8dxqtUJHZgb",
  "key24": "pVk5BgotDyTsYWMD2VbjojReB4SgZYAxo9eDNFEvaMrV4M24ZNhfUWUqKH9mV7mtrCGY2aVYGacRDRNuzXkFi8N"
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
