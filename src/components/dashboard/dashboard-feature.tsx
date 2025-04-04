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
    "56wQrBL7e2HDDgwGFkcX2vFBmbnnzcaMswopFdThybFuEj2EvehJZogFNyzPMcdjoN3WUfivbBZutaL8dYnCGxNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kFNsMHjhESxbmLBjHQ99SPKEkzvAv5N85Srse9KXTQDKaP9VKysUryn7Bjj6ttS4vAfiAddXbdyXGDbEJ7XMRVL",
  "key1": "25wTjVH5LXiwZ92UiCrJmQaWW9JZTqvgiJvQe55nwR984c811EAvg1gzrngxSwX8DcXtPxpFaEWWieMcUNve62XD",
  "key2": "2VBTZ7RspkEyyZk6RfGKC2b6RsF714AqSaQXWTiDjZ3FDcHrPJnSxUfSjUPGwZEcQxCh7198jXZ1SkPxCjpYHm35",
  "key3": "3ejpvhu7eqmdHi9oSZ7FtXqoqkEZPgjomeivBRwvjL2wG5oZz3Vg7sDQRwVdYKHJdF5DsSbfF8ZXNYykyad2eYqz",
  "key4": "3BHoXUsAg6RqGdjCsPE7bo1sbGAxP8g7YQ746VjfGaUujHXzdSU8bH5BkKx6UL2TC8yrMd61KpwNCSU1UQusDB2y",
  "key5": "NhGPktKvvRA88Mts3LpJuM85mjuFKXWtazrYotwnDYWTvNHPh8NsysN57gtE43XgoYoDJSsqR4hNYS72xTpNqs2",
  "key6": "2GLxoVFXBzETvvGogx7xd9h95xLDQxdCWG1husgXtdZeD7oghPWkhV39ReHJ3msiBzBG3znN1dNLjvnrcmUj5i3a",
  "key7": "2gPhAnKWLs82zvc6K5kDvXJzK1FURahqyzQjvyoXn7mK4QUscLmEqdeR7LSJAJ6TFWDjYy9b3cSciNAZ6z1ou8ix",
  "key8": "5wm5kGrGopHNznyeXYBejR854qxUBFUNqZ4wQhar5ED3znK8ooodU9U23h5z5bjJioyQ6NsyJqqotP9xv8wntXMP",
  "key9": "3FiRvLrCd7GScPpx2XReREfecQiRoVVKEac3ktbLFcVd3EGEZQuEyTqa7tKXcpDqddDcPMHuaM5qWuj6cqDbGntQ",
  "key10": "2mYbakBYv1WGCoR6ZCTsMCDbqS7tpyPqJ2PfJ1Gem92ngNmRRfeEhThMwUJKLPgSN7KC8UVcz7EEFBCF8qV5ArxD",
  "key11": "5QNkKVuPvYJpyJRftxv8LxVd8XyLYwX17jfE8YGCnewnwAfW8ktucB2mTkUzpxCgN1PbmDzbUiwU74AXAWQknz6v",
  "key12": "5DUxngqPJ429HcCKEAeePWDcaTX8TPQuModamQNHhbNXWnR2Gh6UC1zMHmQKVpM9V4sReMpZL9n5WzW99zT652U7",
  "key13": "YX1GVnBgEPEgExp6qbvV9GSEjwQfHyogNTA34hk7UGEQU33oMMsCPbLa84krYfhvbSDYQcmEfFrN1WAC6kPRrqK",
  "key14": "3vmL22mYeFKB9A3xQmazrA2w1FJf7SX7PX5MNZycPJ28E6WR7s2Wtne5fBK3agvSwEE7jvz1YyjvFaiVffLQAmLR",
  "key15": "oXp2urMb7WXY6hngx918vWQ9XE8aXL16hE9aN2chrAxKRmNNfmqp7Vjx68QngdsvR8pxXpcD4MdEqQXh5cgw2Wy",
  "key16": "3cNGmfssBNvMUXKieorxbHr99NCahouSDviQK647ukZvCutVbu715wP33D4kRjNKYTCkHDJVbCXuAsrNqVuVTiiX",
  "key17": "4pdsRbbcHwt7X2TorsVm8zBLhr6MVrmPi2VDxZeF4ViD31fGuAWoo2vjwdq4Vg4pPnczizMJAvYtUcgZMDpyoHWX",
  "key18": "d8NcoDM7X2uDekYfzX2Ym89vHuWEbzzQEPDYK2RAQa3kagDEJMLuDMBEupZkAcCp1EWYegyRvWP93n1dXxWiLvw",
  "key19": "2kDLTb1wvZN9cJNx8UFqRSLLvbzUKgyfSh9rqLJwUgTSS7a9LA5KVLXnEPYzzKg3mP7Q9RhJtHCHZf5NAbjJGsrW",
  "key20": "5bXCofREHXhTpQKSwoK3FY2A9QTjhF7U2jwZWGxY1cFeLPHATg3qJCFBt63UvQkhN4wMNTpbKbFwybLrU9LwyMNk",
  "key21": "K2xdzMbvZJr7LbAcyQiipFeweBnHdsgJcjj6KaEt4ubfTrPVJKZs1oLdQ7wuU8K3BsVYEfPfVhYdwoFZxJaZWje",
  "key22": "4SVsj2uDBqXMGiq8CpoghKaCkafBjLoLDn2jrMNsDuqdw6bzF1WspuHpkQfNmEm1L665pivf3mwcGuhCUvz7vdDk",
  "key23": "3kifjddmUXMrgCc4FHNGZctx29sqU6H22HrYLzWuQ8WXCkggQEXftmcEGxDDYYaMWRqBg3LZrKFXCJs73rnvvWuH",
  "key24": "3fMSrreT7KH1skikrFG5ZfDaHfoFRN4uiL4DcFfoN8EYZBxTX735GbXbu3Ci5sTrXFWZqM5Dh4Bkma5qficFY16S",
  "key25": "5UvuFveQcebGUZBe1JGXx6kTRRZFB6D6cVWbziN7qGctgLgBRTv5Jq6yd1cpMom1XZdykiLL5wZYugUz6wCE5RcT",
  "key26": "44K2kpc3mUdidJPvYwFtdbmuttTwkhHKPreE1MhMcfqwx9BFydNC3ZxyWnbdEqpQcR5ExBVUpusqAZvi3bNCLnAY",
  "key27": "4p4mMJ3pSqBFWi9dGf23o4XB1U7HeAhgPobEG4Xzm2KjwtGbQ753NCo1YjfCtt4bT1vNbmNkDtkt3vfCmstG5siJ",
  "key28": "5UnUrRsPmFPdGGbdiLDbcWhASeqqQfCDxpckYEDt3gdSjnjNFpAuUvXEU2vjfZEy1BYVJyHuD4stoCJTMfLSLANF",
  "key29": "3hYoadM93sPYDaAL5J3ypjPoCGVaysVbx2Rysd4xsJKbUXdmcVrBS5qZx4sUM7zA9MxFsSs65rLmNWcjySEnS6tE",
  "key30": "5YZcPkUsKsZdnXJe3DoHZRpfMecXqCuRPfHFEyPzznCp6bm84uYvFM6a2yyVB28amr6oU2x36BeHYiaKH5B6mDSw",
  "key31": "48iXXTCeGTJeCiqsjAuc9VCb783R77VRDFdMrMBHqgyMdppen6AbsKbLWXmQVXRXqza5eZWq9erFcc6vFVeksdZx",
  "key32": "VGQwAAxaR8RqRs3VF1J9yjsze6HR3eKNK9XcbtTmasamfsVBHTKayWwuaXdVpArwiYhc7iWrRKSpuh2GPaBDnT3",
  "key33": "3qgFUx14AecVEtPSJY58PvUDTjWfojix4bAaUXRqm1FfxsX8C3Jd5mq2PoLQfp5mKNXujAoQQYRh4cxHWuaJKKAr",
  "key34": "4ijqZz9YsG4PZknss9jL6iXbA6L2iNdwJPf6DyukKKaQBADHFrPLgVfxYiiBJCfZCqabrxiJzgB8M7pzfiBFiAhD",
  "key35": "87RXMQbyFLpDCZfSRGpNBAL8ATiCRZn8fcNx9SYArwuRu2PJetMKfLaZLdFFSDd7vX2UHpkxGgV1uuGAGbD3c6C",
  "key36": "45MvzT9VkWKRkZfCYKTne2kHv1ssj6dbq8aty62TWrHmC2qftu4nptYGU3rPqHYAEoeixjZj9twQpc9p5S2CLf6o",
  "key37": "kw3FNskqgFVxm5GnuAGfFYQNbxwoR9PRVhFL2KhRJsBU2ktYSFMcPqzD3bC2z6SZQckHghpARfshQktE3jXjfa7",
  "key38": "3i9DRVGvdemURGhEMp1VjFNDSBksoHzVbVmA1Ba1BB4dU2d1D4xSwm2yjeXgPgEnRrFPceXFjAzeYLsv2fSGSkLy",
  "key39": "4gaSAAMsgCXVpbrzybt4qSFxyYG98yNYsL3FhngU44WJj8Hhj5hsmLV78wGnzaKmV73V32pXQ7aGeVtfNqtMKJUc",
  "key40": "beunpYGq8k69FNXk5wUMMUVftEfkMYwTY4aAqrhbdbexybU1LJsUExvfMsP346H1qkjAA6phC1JGTXhDnZLcUbG",
  "key41": "4UH7uNAjq2A5QZHhn3GKVv9K7G3ih56Jh46rowHAbX4GaE5HsheJ9hzLREXqSnaKGbME2f2ZQBgcgx2A9F6TFpz7",
  "key42": "3QAhPLnkd7oPCC8pSDUfeowbdQezSbf8J8hq2w6zEH5HnNeQhvsHHMXngc7UMnTngXAEJYVyLZVvGLxLLPudAPdK"
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
