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
    "4zJVYZioKWR7bGhAmQ9FEsYvwviVWXXVqStN6A57xK8sY3ULgATJd6w4zuq5wKWesP3Bm1n9KYtznNRNFmWHmfcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qCfVuxWjvd5BFB9gQDTUr9hK9K8HGTC76joGHShtKn9mFAEtimAX8jKbghHGBaoGkGtNVii6S4dNGoFAvJNze7H",
  "key1": "32NvsXFrKMwmvbbcJErGfo1MaPEFdBSTYkLikNiCiu1FvyRoQMC8EMYu2drbfT7o2tzLNze3nn6CcscZpc1bTwcU",
  "key2": "x6qTwvriGSYF5FQZkXiJcjwynEtHt18eFvXWR2Xf5CgWhVo5B8b6pgBiVgqvkFcxkDRYhP8vMmH5D6TZFLcZDbP",
  "key3": "5agLoNTCHcieRRoZHbgFeYz5kw8nAhZaeFMVQm14EUmQifXt9tqDxwTvHB6WKTms1dNMEWxQbw2j5XYVYuUp4qZz",
  "key4": "461suw2x879h4yz9EoRtXWV5GfVoYGZMLLkrk1PkTdpNhRocFn2CVPB3QFWNMGLPfvfo6YbbozCFbFzzNnr9zB4d",
  "key5": "3yeQs37uiT6m8gc191khs7w94W4Xnt4ioBqMysFuHci9XEbL12R3SMtJE1Rh43sAcwGfmgEjVXkiNvWUa2E8cv9y",
  "key6": "5zv8tSCq7BGaHGZLNBKWQrsUAXKbqNAiGmvtrVYjJ6C9v2z9K33mS6ATTqoxe4iGkrCZ9yt7WJCTXA6VQQKbvc1A",
  "key7": "4Qx157aC3YFXzd2whgj4LF6PUj7XCh8hrTGNDhh6L1cthtFh4rcDxBfX3NJmkwNqGAozkYT6e3No2H1k8jPpahx6",
  "key8": "3vqFD86aoAVUtL18HeEYkUtaGLsWPGM9PWW72xKEHkK1cSUQG6qQiE5v4Kz12HDwgkqQyqAosKiWHnrvMkXQyNWj",
  "key9": "4uH7b3XpJVr21GJfP36ETThsm8v54Q7BbwuknQsj3FygdpgWTzxpUxsBVUx8YCpbmyXUwCzXUSEauqGprKrAx5Ud",
  "key10": "2uQxtaDrrQMC8Ve8V9JxUrFbH2zM7U3rLToyBuc1y1ZZs7NaTwwzcu3ZUYwRfCDP92MWt3ZSozuuVogLS9KVhyZa",
  "key11": "5SLxLc1BL1ms647gXDcmZZbBTPyAW8ML8eA8KB7JDi1ixe5zXXjTgjJuMSE1ZK9gq3WUa4i7chueDnEQcKzwn7xi",
  "key12": "5jWCXEGR61ucgBfPo7w3Faeztb9LqtwoDMHLEbfDT74eS9m1yZ6Q4qBB8N69FKfim92FLUahQTVL4PoPJN5AEVUv",
  "key13": "4GcojMEqiDvpq1wjJsD1GHXo52SSPxLhqVaqswnPa61MR1yXvjdfwhRVHrUF5w3e3StGUBgFgb4TKwoSgJxxXTeW",
  "key14": "1Lyu2sYPL457FVBPAonabP5eKMjvWszgWFQeu6hPyrzQbtNkA4pMsroP5raxC6CGqra6qW4Tf291xWBT8cT672G",
  "key15": "5Sg32kZkvvfFyVSd7jKwyznW5Q4PKYaKxzomDiVw1ax8dzrDteNrrqgmm1nxpwWvUeGvnmrLw9EmfuLR1ZT6K2D2",
  "key16": "5ydY4xDE2oTmDJkokZjBboK6PZWtppngp5ZBs6BsbHXzqh9MSkcwKqqHNB2QJBwsmxrHMWSNN29nPJuZkro8XUfM",
  "key17": "Jo9sCSXgZjLFRNJHNVPykumwbrzgkSVb5JiKzUEU9EdTUXYofAfGLw52hV4iHN6qUn9KvTQV5fdwumy4LpMvefW",
  "key18": "58STgm58MsA7yS2UK6M61fDyHEJgwBsriodqWLYhws5tGyfG3RP5H9PwVsgnJ1aFEbe3czv7RXRUujqoidCBoKHn",
  "key19": "2Xb6g6EreYmtRFPG1JQXCTPCEiZUnZZ8v416JHyJgffHmzmyaAzdubHSXg22eemCxfYiHKk5gvRze3uB8MJj193P",
  "key20": "2zvwxqe1Cr9qW9oyJNyBb4fkRvEfHaN7XSWofdR45imDmZhbzmvefqCHgfLNmmwcjxFsZzxDngcJuJAi1QH8xzNo",
  "key21": "54nTFNFNqALjvBshAHqjGQh4fa1tR3AoSmR4JokGnfKSiM5vkUBSwQ5EXWKSHDwFT4GHVJLnneuzjAMHPxnw24Rw",
  "key22": "2t6jsPAvjKZzarhKZzLAsKLgXdDcACFyF5f4fJSXMs8ThXsauAtckX89fkBiG2VCUp4YPNHRbV2uXuawot4vMWWe",
  "key23": "2pb3KrssBKx2UQsCBemJi4sXPBa1XiHBeQ9Wph4LghHD9ztcSatW5bfwARxpRYAzhXTF9ZYKRz95AS8yeTgovyfu",
  "key24": "5GhZjdAGAw9KTnso1cpCYa3CzgrVVoHiyTSQvdqFtqHrrzRZtmGeVxYm3ft3h3kdkiTPZys35ejU8VrjYkG39Qga",
  "key25": "5DoKNWTNjVxFcxTWMDMtt46dpG4Gnh8wBQKaYdH3FP2QksT6Rtd4wEyVbme1yCiYrpy9hqrbm79vJmaQqXxzbM8r",
  "key26": "3mBPtcAt5V7YTdcMnQm872tLKQs444jmV6RNVFaQ9SHqTsNyWt22ZCamGTZEfZ3aed1RoaemmLkKDvqutBiTBW7R",
  "key27": "3CpHZB6KMNVxk8YwgS7khZC4c4sSJtraZRPBDpvdVo8j4vhQYn4RZCPv5yX3mFeoj5Kob57pr1JWdhsficpN1j7M",
  "key28": "5kxmuBNYrBEUD8Tff1LZeiA2xcQs7xcoUDopGHqiwfm3cByQzK3cDV5mtt3ddHiZ1wtigcJf4KrVZt9VUkriWFSb",
  "key29": "58S5zfb38caJG41g5Pq3RECu7Rw3LVhwYqyq5o2FNvaMDY6jRK1BbkfxbKw25PKk1d1MGrtMDyDDKzsYNhtsYRp2",
  "key30": "5YJCiqY7RRnTApKvekuDU3xkkNvEBU4tbWVmbi9BBwAdQ2pwHQWZxU8j3JoJ4MaHAPz6jkhGPxu7v3GtmSd2RTCS",
  "key31": "4UKm241f64UY1QhMaSMh1y9fxuYsVSJXVEJgY1mbqeR5iSZi1ZvyyTnMLVPoPrmHFTxLC35168LQpsTKAhE1g7Zk",
  "key32": "44sX7zMckQQFNPah1hukT8B3vykTeuG6a1NoB78XEF3r7PatayESafeWo78WVvT68iuZpum8GscMpWoVJEyHiviS",
  "key33": "2egaGw8KFqduJgdbV6tzN5dhQUjo2ozUqTn91NBoXuLuVbMBGxgFixD2pr3xBfFh2vpq16oM322w7F38dg2MZnnm",
  "key34": "43d1Pj1gxSBnaga3Hz1viDxKSQN6gy2GSA7sHaSPu1NTABA2cgj9Mt5npwmddTLEfWEqG9zBx8ASQAtRZ7FpBjaV",
  "key35": "216P4gGPw5tkptVoNeEwKsc83tiyzme9v4SV2WaAYrD4pcnRxXKew1uAmGngZDiGksNAKLdnDvLK5L5sAuamaxT9",
  "key36": "F57MVXCzV8bXZsPG2FDKmzLQNmH1RGoFS8q7yyKr77NnJGUAKacdB8BeiiL9DcjA4B8ZJso16rDW9xCRZX69jBd",
  "key37": "jEYmbzLvTLgptbMRNMXTuDeDJ5un1FKYpeeNYQrU8J2evx9aahUARM8RPi1GCSrs7MD1GwTcr5KyB2H4TXE2b6E",
  "key38": "4Ug8Z4YAvkqRpKdUeBMFcmK4JHPX1FJKstiCvNJp8ZR79Erwqnfk9JB2oeiS3hY3TDnyAxmiTxnGKdekiVui2roU"
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
