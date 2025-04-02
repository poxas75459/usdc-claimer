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
    "2EAQWdJmw8Sqoey9xisk9AhquQFzeD5Btwnbscd6jYAFRKhorDBe6tf7QPD3uoLy8UdYJ4jhkAm3fgnaNZnZg6ko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KiCVPwn1t7JgzcKjNjyrrpYeW8KDL12SuiJJ6zHJQifb9sQMGgyXnFB6FL979eC25BSEYvGTyZm8bMvtxmBZrEE",
  "key1": "2jMbXQxB2SdxynVrq1PuygUPRNdEjmt46nAwXM8qQHDuqYcvWc7WEgk6AFzYUQNQXqBKW7bMajYtNLyhtpjNYypu",
  "key2": "UA2sjrH5oZDUiHWqfhMgnTC2K8ri9JzGZ8QxRywvqPqgBDSoSifdZFxBqQS1XMDRGPRFggcD4HHymeYF4HDoLUV",
  "key3": "35fcUayEUeidiHPSwnABMbLo87Fieyb4YieKCQX5Q6Sq2hvgGcmbXUFYeMGHnLft7GEQg6zPKwJSEA5SDCJd6SAZ",
  "key4": "3zXpxuVxPQ9MNVSkfuT1rBE7Su4HV9xEj4Lae92jMWViwTj2DtKrDwdWJh5bKqg7yRixQhqLLMLmHFid2DoV1JpF",
  "key5": "3u9pAFzHp3unzFVyb5e2kUoqLrKtwnaZ26mz7s8S9fAPWeAfqpvUrLf3byJ8DVGkkxTwBy8dNTukc1ekA78kry7W",
  "key6": "2ZhtBhssWsHdM78K897zHuEsg22NK61vL9kkXZ9gpNQFCb6yzSy6RPnp84gVTZ2oqzCx9r1k41rtVjG8TZcRVNCV",
  "key7": "4cuXzHczAZUNqCVutxLju9ytAXdYMB6oC95LdRbzsvi6ndGuyee1QL7C57gTVU9FjYh89FqxnG3TMPvSyfFpivRE",
  "key8": "3ZfXQzE56HstQ3fS8Y3DzZtyTBHAyBgWe7h8x8KQfLMYqyctiQp6YC2v4dJ6Wi2sHv7R36MCFUsZwSPPDhrgNkuw",
  "key9": "RijGmdkAXXa676z2kW18k65Ge3L5jhywd3GgVxn6d7o7VYYkfPEB7hvMkxxbTmHovyEcbJgzowLjULcgLwNcui6",
  "key10": "Q8u4kEuuncjd1AsZopuL3JHbo2mEW8uuyYTPPoEt3i3D3gEqQaMW1vhMEMQEDFTDUbAWZs8ovtxCawDGzo3oQEB",
  "key11": "5gyx9B6aRRoZD7B8ufgo2wShYaFR1zx4XAMPtDSbmX7GcNEGhUyQApFhzL42CkWzrdarfWnsz9aJpg5ro5GQ1bS5",
  "key12": "36yW428jBCCTmCK4ieam3dvTJxb9yZ1UQjaH46Za6ypowcPo82FLBqrbi6tqUd2fBy6uCb8nqcgGHFNtqGu1wGan",
  "key13": "4CiZL7pPoVii4SSBu5dj4FsoTjS2TRN31crJMEjjCo35E9QAKGkdNEyUpCFQYrECrADP8RFKUChEjWDoHF9dh5MS",
  "key14": "22QdYJsJdJDC2mUgPmXWySeXm4Zch7zjLPMWY6whHyhAhCTjVbq2bsudiRUUmtriMSDM335xyKTZ8yTHADfzxCTv",
  "key15": "2XEhroMjNbtZqRrtgCNoCG6Qb214HrkRKbnzWPJZ6Ax7KZBYk4doByDsArVxzSyEVyk34rowxwhDpJnpQYSnNHUT",
  "key16": "QoB2TjDSiVfAEwov4sReTiTzLt4kpWetYyNF1QsU3XKPJrE74K6L7Hz9wiBMLt19wKYHGsdsaYMDNFdhqxbU7Sg",
  "key17": "39ULiRWBxpqawozNaTe13ezZTaPw28LtXSYe8XwtMbxcTboNkKeXHcLmpzteuCFFyru8mPpvtTSWaABMtgykstUd",
  "key18": "5sySsAPnzJcSxmXH589v4F5qBCmgQQHnebxnAm2ExMbvvAKBNSybPH5jtoQytiU4a5zN4qe9CSKWiq3gXzQZk6i1",
  "key19": "5SWj8dJFVzc71FtFKRHDMPNt5FEaA25JhterbSc8Zg4daVVHMuThoBQZFRQLyf5zcFW1jb6qbEVxrEzK8gbi7518",
  "key20": "6LKu3JDPmZsHEH7JMKKhAW3SwcVRSrpLGE2H6j3cU2uKq6AuBGF44SJ2k1835RDaUXpnGgxHWpNc9UGpUuJUF6Q",
  "key21": "5WYQYEy2d52PswJrs7fneP4Pxo5pckzuCPjjHBGqSThEvbUjg2a8ZatjZjs2ZATmnGqvuE2D2xKDNeJDAPBiB3B",
  "key22": "2z5hAG6XRX8Y8mTpEDxJKz7tdkCsQcUuJJkwUjH3UAZxeJwjNyDArkVwzRCdXceo8NkkqFShdcWQzSFPbZF8RiL",
  "key23": "QDC3ru8ULcgrDGG7FvmMZ9UyPJGaiEeT91VaA2SKHgFA5FrPBuXivzycSpitGTaJwoQjdy7kn5xgveexFhXrmqp",
  "key24": "4w9bL4jebTqXjfr4Hg2E4gmJkj8yym435cNHgVywYf9GD5rtPGN9quVyVsyKECahHs2cTsHo5tkACanxnikKt9yz",
  "key25": "2JkohanFXXaouf6AZf2sxZ9AYroa1gYZ7EBABmfsF8QAp55MDqoCJLhNPcyy675xa717FFiFzadpW7oWVJRgZaNv"
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
