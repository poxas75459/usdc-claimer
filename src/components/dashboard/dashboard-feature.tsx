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
    "2T9DDCXtMRnxH2nc2nERyqVbWQnRYFUYjnCXchr7ALyExaURYyXEuhavTeMLuiN1QB537Kx3nT4We6T4dXxcnACz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5df5uwQRNTaNeGinaUQwtn6dmAsNWVB6BJHcE6A224W4DtyZ2F4wxWHLUo48aN2QGfFucqMX6fAVS9zhurBpc9gJ",
  "key1": "4Zbc1JsqTvmcoRwjHMTAmSz2rsqkTGUcofeuNfCVQq7oAvHQnZjE1SzVkfeaXoNFdXbP7QciwVnKe6XYLfwJcVVg",
  "key2": "44U9GSCbDkbe6ZmXepptmJYkLmv3q5hgiS22PHf5nzNqP5npuGyirpt2aFR6nMgscDpJ3SPtdmWBSP5uBvY8fyzY",
  "key3": "368p5SfWP4jgfP5Fj8aTN2joyR6XGVRNYacHSJ1DnHwNcmSjYFU6Uh13CSKwWWaxVvsUuELdiTLxEvXWMSdHeQA7",
  "key4": "5457f4Apn5L1AWZDBzg3VFPvto9tqoaHL3SJtkj7FJGHNryw2F14Kh5WbiwHHCUku4BicG15LnXJzkWfZgyxV74x",
  "key5": "5GHZjLi5ryzrYVzABoUnafFMFimSvHKFP5rQrMGvzQsLYEjF4wi7i7LLptakHRCm22nkZPb1UJQZqBsWZSmvqdeJ",
  "key6": "5mpH3JtTH7njfuefmNw3W68wZ5y4XmbMkMhwfpDKj1D6PDUMYDD235Pua3SGGui2C4rnKH4sdwt2WproCV4a551F",
  "key7": "2C8VRekFub4VnPGuvzBoeKDPgvvtAbmBXE6d2XiqoTvYK66iibE3fVUia1kXvut3QHvPpL2jkhhg86M8MWZBLNx6",
  "key8": "5YqyS5xoXgzb6jgTGxHrz4WotZi9UGS6yNKS3jHgALvtWMAcoatQQcFxhDiZZZ4iNvgX6rjRQjsLEtQJhAMrA7BU",
  "key9": "25e4xXJoj4TUdBgAVCx3zzjXXzsdwsH4LAY6tCYFmG44T25VpUEN9MFon583iN4tR1Zh5qHAkrtjCnwBXTs9i7Ds",
  "key10": "UjexGnEie3arN3aX7zDmopJy8padkVSsPggoPBqSxavAstRkpiNJTeBb4rwt3AXFTRQMJqYcLdBTfFeqSoyrUgt",
  "key11": "2XnPd2GcEyaPR4aDq1QdmA1pfwrQNVDmGCgwp5dkanVfuZ5dcGAy7XDkXVXz71BqjZ6t5umC7ShQRGNdDnNUxPRa",
  "key12": "46zKgKgEzFg7sNezKTa66SX6CPZqY96hLGFSMX8S6sAczJWxLAtudvPyRecFy7tXbvsY4mW8fhjkDqiVwuJ23KxS",
  "key13": "dh1xM8LTmeUpDCEiPEFWqo5vkmcc8zjpDkCgtpyFsDgMfZgfpmJivMj8EUYohLDcN64M2sc3y8jeeTrQViucdzg",
  "key14": "T6ikxqvi7sN74GRxcn48Jh9oNTRsjkRh7okk4wajPdzN574Zhdpy6F8orzqF3WftLJASyGEwUd6tG1MwgubTSsw",
  "key15": "2qAGmCdfiKpia4u7Nmd3ttzSfy2rNtngn1VoGh2JN56ryy5931NyXJWA1gvhy88fq2CRvCReyUBgVdFQ7Q1q2WJy",
  "key16": "4N9YWdcb6FjJj1BfSd6CBkBtB8D1PdPW9jqZvUe671EZd7PiBEs1nP4uzYR8xcFp82earqBeBE4JYxnfXUS5AQob",
  "key17": "3n8d1Yhtw9mkmvf2H1Htg25LVxzebRepEjGFvCyr1mCEXuaG3EW4oNCRAcMp8g62pxSsdVdQe8up1CBnLK1pjcJE",
  "key18": "3wW228z2xZDakT6MkZSPNXMBUJLBvcTZAN24NwXB1ErbdXzqCazvSm5MgGYRVYjJZWrjFdD23ZNHD9hDXBbTPgMq",
  "key19": "4oYiAdVQRjj9rYpSGSeg5h2ogWU5aMPSsSZrnspz2PRZE3XY2dmE4rvMeMdo7BZXnGzYq3FixyZ8ntu6Lz7cb3Hi",
  "key20": "3xDafXmKaAhbHEB8myw7ACdikAhBheCpz7gFRAcmdFYRGXoyFHsF2Naq5zMxmFmzzcLgBqneUjT5UV8ENJvayQjD",
  "key21": "5uUmNi2M5H9D2PPX3GxAiTrdwZbbtoLhUtQt5Sx4EpRcEeWYUfFkNFU5CNZD8PzWsFSJh7h43mTRbPnNM1yMkhYe",
  "key22": "9sBheYngcN44qXdX6CR2BNnJf9sv3w9poXUjbSjMtpv6Siw2FM2Tny3r6z7dpDiP2euCaVRMktQGrtr8fRATZPW",
  "key23": "ZVZxTTE2zpFYqEnSKa2FtEmd5i69Qj5F1LoqdWQ6T2mhFvWVxt39y3AGoZzbkgHruvAHkx3w791wjKb5XJGuWmb",
  "key24": "3VmNyxvCs65kR9ax6fuVVGFj1tfz2hcWvDe2mVpugTn4rE8PP6LesERawiuaLb2jfnLMhKihtpGkZExJrX3Ksaz1",
  "key25": "2sn4m3XH1nLw4HyBB4enCMwg3CE5oiXmgydrx2cB9LARYvqRRcbSnoW5rd2DCQ4DGsfqgP66wATzszvJo2o83op3",
  "key26": "3t3J3EuQDn2nQ8HZwjzfxYGNqX63QCkQA4c7SQdpqvWZmhHJ38b3qYX59hsYRoMATDS2Hk7Xx8smttoYz5aDcDvx",
  "key27": "61ZuE8du1JrgsbGVPAtiLA88va8rZDq4XtbqbdSDJF9R9jzhvyjtv7ZSVSjz8QwQaP5YsnpcSr1G1xjY288tjvUz",
  "key28": "37Amy51qQZy3bhGTEor3R5LTFEysfY8MeSssa2Nkwxs9NQRsDWbTJXKUCGZRDZSxNEfZtA388x1n3FLopkDw9er",
  "key29": "62bR1tdGC9szg3GBjVvsLifcqKey8uvgZS81zY98cGJhm1nm6DqmbYPZqabpZysWFz73maJeSQzs6sbwSheAxM27",
  "key30": "383eZafNKs4Yxr6YdGeN7EyQxZHUWdo72f97SpzvpfbxA2UAibC7mghwwPUkyyLEQuFRNmK4D7v1knRxppFNC1k6",
  "key31": "51NatRnMPUvBC3keqWZrZzvaG7pmzLmJxXeCwT2nyZLYcA3Vf445GpN3YeQcq4MqhJRjUS8H1iqArBkr9Xg1bhet",
  "key32": "4DbLJo65db59zuBxJVixsS2dmXYHyLcx5XN7mr1Mm3Yy7WZ3dw5LSMqRM29ZPcCwrLSh1GUkvEDTkB5H6hGMkWdK",
  "key33": "328YhhEMy3U18RXWCaYV7VcDrBGTFQG4Sw5xYHh9ikQS4k1vpo8XjZyMwoakLj6KJqPUfFAoyEtMY51cewn1HZ94",
  "key34": "2bzRQuhJzydGZ4JHrP2ZGBGmpzkpPgm9xL3DLTrETwNfbDbYhtCd5Ha3zci3AqTbYhzhq7KZo1QBqk4EN4Ae9MhK",
  "key35": "2Qf6oBWB4J7YcNssYy1aumY9LLXPMwurpV7CeGBaH9UsfRhUAPaKnaGfRvMt2wMMCVoBDuf4m1mRuEh6mV42jrwt",
  "key36": "P3U5zJ8haFyMLkFbKE5yUgFCdsejwTByLk9okeh1WaVtfVxTWNQL2Vs6Fhnnze3APJBESgdyyYk2bvt2oBHvpqj",
  "key37": "2hYkwagTYawY74kSoX6LoU2b973HyC5ou8XjKmwt5iJzcp41d6nJQBFrgWKXSCteJwaJHtKhReNL9QX5LtGsqGoj",
  "key38": "2GL6VyREt3TMHHsTRuLY6sY6311tuV1mZumRCQwDUUsXsx7hi2a8wuTq4jNAmiDjwa8J8jecFfe7RpYUsLAPrH5H",
  "key39": "4vJVh1emAHdYEitYcLE2JTMv2fxH6zkyqs8WX57uu32EDaWKgddoKbUzveZqGcY9CgpdCuJbxTfNKDRFLsNoxin2",
  "key40": "5mKpk5GKRnfpKy9qDVVztZys6ym9J7DfWkqMqTF7wezWxfkxFGuVV2jd3vmaPT2YciFcFospccjoLE4XBvag1CLE",
  "key41": "2asFzG4NjAyjg6t3yCAACvvFis6dsduuatV5nndogQeVNBRr9wXBRd1GkppcJa8MxGGovMvMsVH6bYY3EHyFFDhL",
  "key42": "2KprRiD7nfNLGJ5BZqFduSpdQ24Vi9yHqWYu2psn8bA13jracUobw9AYynTHjgKkjcC7YURJCyuK7WA774Hhe362",
  "key43": "quH8LwaJV9FFaJrcYsT3MPwtSyBxXvygFc5nzZtCNVZ2Qy6syJqHstS4cdYY7RXBATLWuWFiQT3defB8cBbjCvM",
  "key44": "1HkU1R96iu2RiMpbij12NAooR2H3D5UBizwg1JUH3ncPNjjSa6qukUQAkdZfz6PhvYuZe2pCtH7qBvDv3zymUGH",
  "key45": "4EtKgVzb2EwnLskbTaoRA9fPRRwt3ztPA2HfBF1CUPiK4RtKpSrE3JxmPGYNHSCAutS6NTaVCDmmaWEzJ11TYiUD",
  "key46": "5Bij5CeF3vMs7m43iYpC1XqLzT6TspyLxYKoei7pt43KpZMe2dps7yRApPNrkYu7dgGnzxX5YeSY4oZtWoEMT8ed"
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
