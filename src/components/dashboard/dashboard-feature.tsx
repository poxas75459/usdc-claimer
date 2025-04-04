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
    "4BuxEQN9SZivqnsxSLyY2KvVgko8e2w6p8p24Wnz1jagGrWoLmiDNwHzg7s6mDFfqfNHhSAx8xmVY56hUoYDtioS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41kihWC1rthFjwQ1Yo1HxsTyCub8Mh1U2FVqY3mvzeQzqHz2G7Q59XLroD1kKdmk2Qbn9GUCsxKwFnazgwKavizC",
  "key1": "5XWgcckCxXseUCXxT9yZGYnnjc2Kbos5vhjXq1jtKMqkfb166axgUrrt5jWGyCa4rHqf696MgYBCvMy5PHVEH5Wx",
  "key2": "2e6aqzWG935yGDJEzoMRHT6A7MZqGuhooGyT51BdAkBUNRshCS2daEJqqfGoW4Ezh7Broq5veX5g8okKrbdgtwdg",
  "key3": "5c6sfx933WFYBEVerhPfecXva3kpA7qunxn2k25aiM1caP2fzYmAr4ujs6SqkbnKPW99zmNJVhMAnbmKXZxtXoHp",
  "key4": "4DnLbiEhcxQQNZzyXB8YiXYjtwwMnvug3QRRPa5CrY4EsFL9TxjDWvwAssJyn6nA8EkaCE9C3H74rJuvmoK62ksd",
  "key5": "2M886RqyNFPNonsQa3hsFNH3hYJe9qv9FbJwCuKZDFnbjsc6Pvi7JLeKNG4vijVUNWqS9fhG1NpvN5fkrE3ZS3Ye",
  "key6": "Qq4aVj8KNiPjkyqxJXBSPRoLjpUqAVyZiqmxZ8cDtULinLVX1hjhsZW5prSqh4Fv8HFSgT1cstBV2iAEZRuonVB",
  "key7": "5JMDGMoWg3nVK632EDJgrDi1EwSt4EdjH1WCdm3cuAzZnteYyg4Gd8Z339NgcqrUxjjekZhFwvUhjQQATB85G7gL",
  "key8": "3Tv2rvqbhP6RwJFL4iMn93g7CQU9KvwsVJAybMPWzADkPhg18hFWDhKJ8yRmd6LMH6TysGiM6ucAaY4dr7TGfR4m",
  "key9": "5PRkS6wHoRQjdV2CBikwWQX5TLwZxCBk15UM3ZLmESexif5VpDmNwY9Wshw1RSueU6LNHvgCQyRQxT5ZXTS49cyB",
  "key10": "5h8iLAKKkEHp3bXEeZEMKwP1uF49mnwCoA2Mj4HHPpW3bSRAwFPLD7xNWNdvDsJtMinmzTpFem9NSCcUnpqtQ7E8",
  "key11": "291NQp7yyAPm4xmpwA8Fg2GA8Y36xZQqeH8iUFypsjEF2W6QZShu4VKjkNCZuR4M9G3CxgU7W18gRM6Kzn77ZkGi",
  "key12": "4Jviu1CsJ3pAWhiXKbijmvbSFASgBPgp52Mdp4S8pgu2ZMTBK9Ea6VHe1dTiq2JeZzKt2MniF6RbwGLuzoBerNtb",
  "key13": "vC5YfGFdM7mvD5vf2n2xLdAosDsSMafBNPJoaV1cWv1QUCRQiGE6toT58bRwDFutWbj5F2infme1fGjhvcE8EZv",
  "key14": "ZVCjpcASC2NV4if2z7WzMDHbrGPkjghnXDanMBYUbsnZH2eVdJuS1WpXQrVLB7k8QnzBRjhbLb3mB1oLpfcSHbf",
  "key15": "24PcXEof61KpTQc9eVmo6yosCGeHW2ALD5yT1x8QxxETCcx7eHJv24rYnKKip43dfZHT35siJY5AZFYwAMTaHkyK",
  "key16": "2Qp5vTawrQRebi4EwvMTMJWDmELDLeAzH843u7SFQr4vtUUpxTh9YehCWCcm6NSyouESub1Nn4mT9jMgCRdJ9i5Y",
  "key17": "5vu9KgMFFCipXZu1UhkCMPMEuPsuYBA3uocv4ctb88eMS8cC8wbURV6Yb4Xz3vyfgS2esxMuf5QMgq9hvUzRv2dG",
  "key18": "5ub9o4VNeQyreCgAZM6KA9gV1aCVDnyR736dLiqMtL4CG28AdJBeCeSB3FkuysMYQUJezD4DAj42xD46cfW1yxch",
  "key19": "5SnRBgw8uk87yJezBK92z4bwiia7PkX97JAcX29v8zaNYEDbnAmY9YWhZk9mDU7KUrAu8A5eC19R9YhXtCP5GMSA",
  "key20": "5JJvXqWTmaX1teXwRZ8e2R3bRPLAMWMd8sZybWhNCQ6tYZhb9MYukHeqW41hotgUMKvc4Xd4vA2h5fcEv1Z2kXtD",
  "key21": "44WXknLe8MxqxZS9aXm1ku8JfGE6vd8nKE5aFEGNybJeT9L8KJGz6FiX8aWsu3pig9SkjctUDKqHgA5LJyXmEkz9",
  "key22": "44ZPSZrjZ3BB5396qgrT6MCzHHD19LHLjMjxpps92XGPJKDVQTasJ2R99WXRAMVkb3ruagq2tkbwnTDb6tniSxxb",
  "key23": "41REdU9mzZAhsdwxMHGJZv1KcXVYe4cws919areVDmVVa6nuFSRCw8vVMFEf1T7Fz1EfYUYte3EM8weMCishMnzZ",
  "key24": "4vMWKcqhkPdWKEA6wh61HhSqV1cZwcFhPq8jpPEU9zAaE9oNvKhogXWc59m44JYfpD4zU4FBjLWkHJwwMhsEdere",
  "key25": "4yjMoHLSjy7rLEHLm15BEsnRiSonWDxDfzEWLPuUJibeChFFuUTTe8RxP3p1sQzDt34Wwfy7SJpBy4HJnKeVKCYe",
  "key26": "5CDyZ3aw1s9UpbVrGzCapfauLTp8PjJRQxsdQdJw4mY7WT7CQWbGsUHVecvuuma4uoxU3ujcyPN9WReLYuYnK9fy",
  "key27": "3v8ZSef3DKCyXqHXaffjNeAZyhcJzezPz7utLGskW4PBFGntBUDXjw7vfq5DPyBHNFoBF2cUncmzNsYjCDygtZVf",
  "key28": "oYxVYxcjoFWQhgBNwkE1KJHQc3HBY9FzRCx5TAsL6VTf9dJA29cEg7kKwgveU2pgBFT8BsWrQLUhA9YAbwkKR28",
  "key29": "4VMv2zDUCKsELxouCgTLd3bZwZt21chMDaS55jhmA55cpKP7enxcu9qy3upNDan4za4btaTFMUw2GX8PDFbWqUR6",
  "key30": "3S1gz4pT5ckMXLBiTbJdkeXcvphpTG8TEz2jz8z5RgUeqkK4Nw8XmgWkhFVFVfazm8wZmzNo1gBPadJMPEh3iiFi",
  "key31": "5WmNovDcyEipeeVyBhe3ajXfLL5wQNKYtYB8ZR98uC4pfuPTTFtuMcYuGDPbasMpBQnHbydZk2RsKpAfEVPaB1T6",
  "key32": "3UdLpJYscsKEK5mJxDUpVy9pxXxtNAyikX58D8czwz7cfn6VuWXTAywwKf3p9nQFyDNRjEbTMWHgwftgeY6Zsb75",
  "key33": "N1GeGyPSn7JPBHA8nXdjRuxyfVYQk5dxJiiTjD8LxozFKc89UNckAK1mHZnhh5rn5jPciaPKAC5DvSehqEKP15Y",
  "key34": "cXANVxysrPRYDrQcXF2inwNV3KYMgrHvnADjf6JjrsmWrEoZrygFjMfB7yzUPFfCV3S7JgoKkpsBVDjzH5x1CNz",
  "key35": "4mYFjDWGv8FLayxiCEjtb9gicpgXdKeRcaujrkqbm7CZorDxLkZNj9NyUGz55D7ySSdo5RWh9gHM3jtwkukG6aQT",
  "key36": "LLthVQpULHu7GbP3ei9sdSkoDb18Zg35kQHRg91kDUvhzcAaC4ZvGZScg2j8ijQ53mgfNjVxkMpbwJiqws41fUo",
  "key37": "4K35qbyRS8V5C3BoHg6g9F4YkCgGBVYXE3wYQUpFmHNtYab3NWwgaguWTtEkHDVEVqRPGbCK7QD4sdosBG84ZRS6",
  "key38": "G5bLzyvTvb1pUyaGLKKKTXMzmwksefm9aRosTPgcbYSbyB1s2oWjv67b2e5Xt7jrNjSdvnWZ2PXzPB67RifZ5S6",
  "key39": "L3puhcxxK3GyBGpiGzMSb6XneFZErXHX9Mvr5a2PAGVBnRDKsXKfdkfyUGXiauexX13a2TYoPNVqEMwL31B1MPt",
  "key40": "5HR2aXXbKFazXSmTrd22ZmQJD4hz5WhX6EQ8ZQS97jkWRJsKqc9hyjqmXTr8TvALTHAgUEidJ57NjGTn5djmnXfv"
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
