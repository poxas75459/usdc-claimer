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
    "3a4yfFrgVdvA85kJAxFknNpTQyUiar5vDB47NvfrmJNn3ZCup75futWn9GcdPjhPBnAcQV3SmYxRFnTXCcx97cgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qBXQZa2qkPuDiJFwu9rth5mvbJov697q3yuoxLMrCnpREyMzQL2z1Z4b24qJ282AeP2LfBeoYEvey3KMZ4QBqEw",
  "key1": "557ASey6UXUpux2e5KGuFGo551zYK5W8gJJXSwtLZBnxGHRxenAZgpeeUAvFKikvR8H2fcL7n7ayaH31Matuvdu6",
  "key2": "2SND96nN8fM7QRei65p7giteFTemmvLANtSnqADdfEdjpdh9bRqQNTG5rvgV3dLLkqyqdiqN41mSPGqcVsWViXkV",
  "key3": "CfD4CzvxGoNgWao9mLr8nDjnNG4mQxPYQQmg2WWtFAegjycwmi9h2a5SNuLrfR4bmp5GZsL9KPkqfqBq8Gr6Q5W",
  "key4": "2VJzESvnfWFGr2aQ3v2VcF1h5usFYBJAAf3oUBaRnrFEDCE2hdVMGUzhHn5GJj8YXfmMCfm2vJA6X2tThfq7JNUd",
  "key5": "3Mys9C6jDoaPkUposmLVg4qWv8NrRrVhLVDiePkSo8ZwQARZR3Qrksj3Vgdvhcr6U8Qgw2bguLn4R9CSRmqwCFxy",
  "key6": "5iYoY98aT9urYKcn6Uj3TeEZ2dL44msVcUXyi65nZpsdhja9mnxF68Y1nG5Hx8Frebpm2Znp385XcsSTg4s51Fmn",
  "key7": "2kycmTBsZnUxdWgknTMwBGhRTyqxP1rFyyCuNJoEc21kBb3PWkpesTissSB2L7rV8GyFG6ZASWMsyp3dLt6DSsWX",
  "key8": "5fJoeVgvAuEPyLqdo1BidvDJrsnzmVrPRcs2WxQpjM63MjoS4Fp3b6JobDziH4FnecJ2RoLobVc1disV41gZ11ut",
  "key9": "2M7Lqq8EbSXKR9J7rVwsTML1XwXDJyRAkDAcyXpyjKUra4J1QzytzUSvMC1QEQAC7Z5qPnKPBipJQaSaeYphCnzu",
  "key10": "CdAThuHLKooFBpHKEPgzyWMnfdV3JmE8usAMkfJJ9xkMr6WMivkUJ2WoRT6SPd4W4oANzM6tLLJp63qegfEKzM9",
  "key11": "3drJYPFcHqcQjMpMz7NZw42hkkEesh48zUgSChHTggzkgReyiyHaASbDC56m1KF5QuRcNpPEGNB5cHExYCf4vouT",
  "key12": "4uHPNGpUYabMwfKv7zcWY1HeK9r51ZiRCAw8rC5BxFEpgSoW3sFbnUAo7w8nPN9G6jzz5N4e4x9Q5yNubXBymF5M",
  "key13": "4aSPccrnFBz1zR7txsiWdrkWTU6aY2fqJNeMtqSmezWbgNMx23szgqhZwKYWaDCHGQyFehoUyp32gSdYTfNkznr7",
  "key14": "KtB6sjUb29vsp2gukkNAJ5xj8yKw1jVEmSrUCALiGstCw2kzKBpERPPqL7nW8hFREHufpofaBmwnCcaaotVj23M",
  "key15": "czxQvXtdtKbQZFEjzHwN6gRq8ciaTLwgMtkbdEXUCL7FY7v3hSj3yCN3JU1ra13dBHZXBpzMHwi5x1dGRh8vout",
  "key16": "32u68axhQcVUrp8jXMgUFGukivsy27jYpHSP5fkWJYeCi8BocbMYpLnThvEyEArvouMK5q5iBBRQZd6ypfpzM2z8",
  "key17": "6468PHyBUqgayTA5o2STokaKgvTcAwC3C1vpGsEAPcfyqbDR4rDbh1Zexk1pjc9p31M6zQNiJX6AVSufMHcH47PK",
  "key18": "3jXBPaADLCGesjmSD3sappBYp9yDq9KxxP9G7cD4vYC7UUxhzzxz6gXsx5TCZZX6tMFDaBxHZ3d2z39JSv2xydA7",
  "key19": "5KLdnf5XrRrGk4C39vpi8VyW1Z6hBQBxScpKJxzn6pEMsDrqgdz9p51EyodcRx9KngGAoKgJ222hpY9f8V84ezFb",
  "key20": "2Dk1vBxS3fH22FFmvJMiJ9mXYSJeoxghJXkHAxuKnDBzDhecTCwXEF1PzCo2FxLHZU4LBGXzR86Y715UUWF5HYca",
  "key21": "4epMi6YvaQGU99kqq3L86HQ1vwWudkxtUM2gbTG3taCdnEVz6ekhK4aKtLsNEEh7wQ3yqiRBEpME2sHzDAeUEKU2",
  "key22": "2mnUXePu7vPLhoiTNQGQoUzR1xVaJVTQ2hT2JFACweiKRjUgUvH4nSHPN5DJVtWoovaZVcFjaE9nWyv1yBG5hX6p",
  "key23": "3xQN6yDFkp9gXgFqdLL6BDaWpsDiJke9gLHH4ap1PeBWczP2gErxpe4wVK1BKCc12YshH4okFvMdr63yxZNar1ej",
  "key24": "42L8QD4566x1pNStLg6DsoY6i9QsUyLuZ6AaX9VCqRbqYAz5gDw53K61y1DJzFE7iybw3BfNtauqTYtMnoZiUZ5M",
  "key25": "nnNArMYxeTCX3vxX86phnvK6Wbjs6Kb9sWG21wnuXmghXHCFzfCDUxazKELeeLmvWpJaK4k6rqpLSBkpnbZd3dY",
  "key26": "2xdivSqVk2bDE8WaKgefGgrZzNeZn1a1AUdkceEyXpRbsD5EqjB944PopBz2YWKqqHgsQgzHx3JHjNDrJcQqH9k2",
  "key27": "2Sf91a5ZRHgH9yr4ZKtArNfcmoJcVHfuw4RsUhsN73wBt7LcoWCQfAbStTzY85vEiyxYHzhn9EWqydqozhiQPLTQ",
  "key28": "3gmhG2kPgBhhnwLoxaL5PnaxVeSb6fG2JXhsgCd2y4kE6PUWa9SJtByArDVCsHWM8XHAnc8rAEqcofbBYSsmGW8g",
  "key29": "5tqaPJZcyRKJjsXnmziiZSVsquXgrmWnCDVK3zE81MnwERbishypB88fWYUh1M4ZNc6ZSUP9i8koQWNTeSRsZeDL",
  "key30": "4nMgVfNeWLd6vM3C8XxCo7DjeiDu4WJ5KY48hD5URnyXbGJr1QGjwC7RvpeuiWMzHmjpZeiDtvSZrwRB9Tj6qmSu",
  "key31": "5o3MFAnJfSdev7acM4DTWeB6Ae1KefsPK9mHPf8HkQJukF994bzhLuyxvNCbrJyLu3Cd5oFDrpdoActL8KBiLaSE",
  "key32": "MRR8iZvLu5tBkggn2ynbT1R59JmBBLghp5PwRoL3Pq9RZ47gqw1xbRcYMKhGW5tCeSmEsof5MjSbjhAY8MZwQpm",
  "key33": "3jYcysW1Zyf4QVFCdhFe4tZqx7dakMDuJ3vMSGanABRWtBW3zu3hKBAh4CKhXEnAwxGjcS64d7FNzmgzreuw1od3",
  "key34": "2hvbMPZ1QwHZQHRUzmXfKJFGqrkQtk7uS78LvNwW5zbKRJKJGrJ2nPM9Kr1CVoMVL68k1s5D823Dok5VbBCuu9Mh",
  "key35": "34dinaooUamwbgzm7gCH8csmBfkE1gTamvmDLr7S4o1YH2kk8pxFaRGx8S4aWuc5k9ny171PkJBL3iUm3hVtvGT2",
  "key36": "VeTxqX52saQfFqGrQPZeVgoHdzAyuDAccHCHffxvrf2TRqipHTqo7U8vVXxes7SauPoqKcfTykB8jMXzgtNrgye",
  "key37": "4Q72wLt2qoY89W9tJodYx2au2kJVwyjjkCz1LXNoGhxjsbEpAxnMu3W5r9NWGCkPSXBVyaMhfbdHtSjFeZtGC2kF",
  "key38": "4b5QTobXGQSgWPmodKjnyLJm1nLL9RQLGpb1gY4Q24s2x3oL3jES71BGb5XnbKtWGvLVGav9JSUthWQmtRTTVLqi",
  "key39": "vZFLRZMcU1z2r49ApW13VfbBRvMux3rGERboeA6u99T8Vdb27do9STXRQPW4t6DdWNJj9tZzn8srp5zPvdUQShi",
  "key40": "u1JFCdorYpzfohx4P26xWB8fWN1adHtEXfCADSfUJy6b8NMQTH1L3Q9t8SKyMCfdLpdg7zoLS5DUK2EKtLqCiFm",
  "key41": "5bCK6MisX8ErGCYbQyNTFYmewfn3PfJAj2gVhphCXJCSZktbEUVzVscNnbkqveGKEven4eqzh93SUv4gzfjq4B3W",
  "key42": "6675hhViXPyCQLokCx1TiiLxRXdbZ4yXHCKcGRtCrPZ4pbdTJQU1s6cuoTmBwLeEiGULXsGem9wwe7k5Y6HwMJCH",
  "key43": "3SRqD4BzrRgR6xRUgW5kKNUqvhcJREi7i29evKgr8EBfevmgXrQqRVpTNHWoSzsghzQ72Gd5eA27KywwnYsG9dGz",
  "key44": "4c4XdD6QNjbkwaK4kQBEoch1acY3DZ6pzza41dw2Wrugw7WTJKi8iDrmdCf13frEE6x8Rzg4Ftpp7fsLP2ZBbXs"
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
