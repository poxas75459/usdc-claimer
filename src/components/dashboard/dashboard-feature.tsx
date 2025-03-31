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
    "3EZtBYhmLbwW2R82Sa1qX43VZ3G4LA9uH9JS4oYpRQxSgmPTvLddxyYhr3m1jW41nra4Dm8G5mCnzU73gGoJGEnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qqU11kr6XhWNotUWtUMpyjs1bT2yjk7FN6SWXvw1Zgo7qP35V944H6ftbHk5JJPZq24teJad9rmWxrnrCY2W9Rf",
  "key1": "2wDNjhUAC5iSmBQAogjYTuDvE4GSkxtY4HD9NYhYYRYUmj3EpHhCsYZgcMn8nFHviwyNQcDfXkJdyFkMTsxcPWGH",
  "key2": "ZZomV72NDy9PZ6sn3ghbuYfGMcK6wTs8uhkcnUS34c9vaUtCDD36v6o7sCWtGSvh8PJ6YHt5rmCtif2yCiEW2RL",
  "key3": "4ReWAoXoCZKR9jRBZT7kXXJ9DKBDZCHS7154TgttxqjypgUhM2gunSiMMcbqW14XEVjg4Yx3qCSrB7TWrBLf7USR",
  "key4": "51JRQEU6UnQSfkWwZW18Xhkga1hpWRKbEB6o2XNqd9sgF4VbeQzCoe7TrqKXZQQREfXd1n3aAKv14vVudGi57bPQ",
  "key5": "4iBUD94kMpcyTi4ArbA2LcJU7RBZR8pARvRwwoj8CBokeedMqKWGPt6MnfU7NyPPwEJKLkrm7ZiDzuXucL2dW5Tx",
  "key6": "5zyCq4Cw3YmrgduFH11MuVd3T4RuDY7dwg3kgjGchx6Li4DWtrdT89nMdxLtSZbbDV57HfPaWEij8dsg5m4Zi5Rr",
  "key7": "4Xn4n2PcLFZbPm44ezShprXEbm8pxK1owrn8SPhLxTKqDivUEtwELTihwtxj7E1bXbLg2ujZLXBeL22fJnuBy1sy",
  "key8": "2NHc3A6hdzWiokP43rRMRAFpGQDJharuH3LN4oAgN2eWAVaV9bnoqDDokKNkThwWdJ7ytsp3GJQAmhzpGErqk4P1",
  "key9": "2uvNd9UnXZCm3JBoyWF2FQ4CnvQHY7WkiP41p8qwXeBeYMiZBg1XT25WZMduHdEvzrXz2Qftpsry9ZtADRkm1JRh",
  "key10": "4ceSyfTM6m33o1TLKMKaH21cf4DEik3kX8ESESQ8ULNB117XSb3eUvA1S5Sp4o177TRFKEzrsmsXBm6Zf8AMW8zd",
  "key11": "35sAKTB6cKagpY95V4z5jPsXrnzAHEvHdFoiubXYy1pRF6VG1r8Vf5szbNM6uEKQxnF4yGCfJVd9ecoweM5WQFkv",
  "key12": "554bb6FVCkiixCWCe2B6BzDcFTZ2cnbMzPNBFWwsFmfhQvnaPHpKG41wNNyYeruMKWo1nvTqRkW7CYLRDtfMFvBc",
  "key13": "4tSi47wscCtdevQFzJjXFPxk9b4hBLzdKuYR39zq85DhB5RZKdBDotaEKoAxFUNn1aWSNv7JBWMWC7cnaUnEdDnT",
  "key14": "R5NzAYtrduqdLh2gVA1bgsUZNpU5WwguhBSCvmXAfDYX3LCt7nTn1no9ZfScn6wCc5Kb9CKX55THS9ikiGQseK4",
  "key15": "4pBLzwG7138CFWgPddZFD4haUuhHAtfoDu8TJ13hUaSd1uUZhtqFzWJViuiccwGsVuE9FiusUnKFVEetxariTQ5h",
  "key16": "2eL7wG8NKr9ywQz64HhjcGw13UJDovFCLWCSYNFzH35Q9xQ5jJiMJ9uGgC1MS1ZCR76j7RnKgB9KSRoggohNFhx8",
  "key17": "42GitfGXUtYT6L9Mg3fYiV1UfHDmyZSWPdUTJRhcqr9vJeESTqNmooBgqhPUnRdeLmHTMSxrsS2R5dinM2wBLwRK",
  "key18": "4NApjomS8EAWbsG63BB3iePPbeUSmJwgtsWhdwM4xBTzWpPpqn9xAhSzu84M9aJW2tpB5c5RFhVzei3xksrg7BW",
  "key19": "2mnX1yVniwLJzgo58gVZUgHrsirsmupva12uv2sy7fZ3FWrYR3i1cbJbcHJDzRwz7Rn5dYrdedzHT6knB9iMpSBH",
  "key20": "kJcyFDfUZvZz7AqnRgQcrhCNxWYWmMyvGsRgm74NVUGwnFDDu6XnBboEX3Nk2ANkKHTVCLzBA6eVtNv9ZNYPxdX",
  "key21": "5Es7dkYuJwi6rg3W2J84xuZUmb1TTjrkrXWPZ4UkrtFC7E6PUJhg9cD3hskFFcN9bRKvWcwspdScc92HSsumt46L",
  "key22": "3DMY6PT6G5BeqY5aULTvcMpzfAJtWwojto3tJA4hj8LvveWfKgB4YUoVLVj2KBMnYsrctXtRjsK53Q1FaKKJZx97",
  "key23": "2sPyP5goiot7uDJ5wLHEdzMSsLMm2u2qtx6GWxaBG6n8VqPZaqwTDw2WWwGKCthj6J1qZ3RaNSB2ptMgwGwnRzGM",
  "key24": "2HWgfjWjqwsPoBWq9wdZwTtdRxnGLzSBkLRmjJGkR8SakW1ossbwvbHZb3AJ26auj5yAELDffGxXM4yminZS6RHN",
  "key25": "5x66n6qiCDyHv53icwQfzyKEkqXFbcEo9h7yQEbEtQzmxFV78Db7RVQNU5hmpnCdSWZpistrTht2oAfCtQNfcN7b",
  "key26": "5AB9bGbAqnDBQy5VFpFxzedu8E1t18nFiv8184eJjzD9BmxXcmGVhPsN8uXpeP9Hf2WWK7XpJk8fZNvdH8tvaK94",
  "key27": "2PdvPXmSKWqg5M9U5zpoKLSSPGpxHwjj4gqQeD5JUyCpNJkFBgEVKMKr1Ty97wk6RipWz6ZGB9J2jjFoijvYzrv8",
  "key28": "36uzTnKo2hzKoRrXd9EhXZp5HaWSxGVivQWe6mk8XxzCV1XwDdCfJXoqKQFRVdFkrE6xWnd5vkBusisEDEvLiaRf",
  "key29": "5mReRPK97RhvLmEiGWLN1NHu9cxJyn724CzS2f2MQVgXH6mKaMeTv5AeQSt14cPm9BpjqnWbZHVfGtQxxjcVMpH5",
  "key30": "P1dGTbSBwJTwHuPc8AG6jSoherVy2SGMigZoKD9KjuFkpgMUqq48skMB15CQ1NbmadJFX8dpwor4R4m4rgua6rR",
  "key31": "Ybkp3GdFZsMhXnq8gYDwhcfzqrsQw8ASpenGx8JbvvuqGggxbGB9kCVCgwcux17ybAvNzNnAH2ta7kaaCXNjh4F",
  "key32": "656agSPvTpDmorpmUyHzks9JauDg7HsE5nXP6aUAN2eHPZqmPQHvrxndS5xyTnR5KdVfcLnpb2TaMz4q6yyNfR8W",
  "key33": "nXhmk3PHbVKy6zF2wbU4NGBwMnpHa9PX5zAjc7oAbtYyUpGRnFwXF7e1qfCEJbnVSFrVEmv4JHJi3DiUf4RtouD",
  "key34": "59vozkujLx2Zsfvvp5cP9QH8oQqkYJX1pYNGgw2UA4TXwatdDbcgPKnvUieWbRUwcYrTmsgaEKxFUkzWkTnZbVuZ",
  "key35": "kt9EFcTanbHMCUzR69tH3uiCHjZGf1bwz7W2hWgY9z1XX2Zfo7KqugfGeDgfHJk2pvwk3M7BnL81VGXG5uDrne9",
  "key36": "5sqWa4sCCTYMfMRYJJLfegCcST2pvUcqJtKn7mFRPwuoCKnM7xcseTxGD4tA5Swj8sVmYq1cNEvkJhfjfyrkJkwv",
  "key37": "4bWk1gmH4Xn6W3rQtTD2FjixWZCX7MfTsxHyLpUzBJXatJWv1q88wLYxDM6qwoRrkWTcFYkd12JsFF7cbkBK2bjH",
  "key38": "3dVPiqZUjoeYykiZXStG1LmEt9gEjZRmRZGCxbsBR7GHks912hT2vLismoTGdDj3EXJc18GfMQqp5bBhSkahb46s",
  "key39": "4sinp4VADwk74yS2srsHq5MrAm5LFwaVpHYZBWHxe6t9rDuFhKzAQ8D1tA1MTYnvunXsZpKcVNj4kcMBMdf5vHnT",
  "key40": "ET9jm5cGUfvyL1kGKd2oU4gpxebzmjmdiqihoDjvVV81UbfXcSv625a1cbQTmBAEubpUWwSjXLLj5K8iBM3ZhXs",
  "key41": "5yQgbWG1Yf3HRfvho1piSfAnQ3v168ADCKmecBo5woXzqV84LHazwgZqgrfohENCzN8bM3Lu2d4z6pvphJ2dJ9o1",
  "key42": "4URyEuGeY49s4hbL1T2LNawX8Q4mwN2k2zVNgM8gkEJKEuGGYrdpdhaETfpJUHfZjnf16w6yvVBYRjoF3tcbtXYt",
  "key43": "5Nx5CbpoAsCBzFQZVhiDzWNnTAtUoHnDhZs5TFDN5AqdHNjmAXJMLLwn82iQcDy7C1NuW3zGywDHX8C1yjatiqDk",
  "key44": "3wVaUydZS4cbzvDcQ5jNBNwBsuFZMGF9P41oMWiJiSBW56ZAxgeGhfWzFTVpEAWqWCckfLvQtg24LdyqaevY2KoR"
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
