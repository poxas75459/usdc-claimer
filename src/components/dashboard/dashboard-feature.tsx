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
    "aHDsEctvFAmnnMbasCXVdH8RCJk62Me6rMDjr7rfSS8pFf1qAGrsntqZFFB8yGeHAi9mQBPGJDv2C3FHhuZcuD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3syCyDT5VxsDYY6CR5dkFBGinw5jpGb9TwLo5o1E2ssysmumLQfSR3seAYudBsEgg6HLaQ2jPJWtCM5XBTB4Ab2X",
  "key1": "3SzTZAuojaX4hQ9GoVYAHuyAbqKtPsmjS5EcmgLabWLi3KJ3KypRGN4w6TCw3u4LaKXVnYUDLqv2xe66UbGNyZGH",
  "key2": "3FknmJtgJLdFpcp2mycsJDapZwxz3MSDze8j8rgM6XmXpxVo5CN2znZmhrGmqRFRw1NbtsMhLqgyRRUYc2XQy6fr",
  "key3": "5cDresRr4cCQzHAGyVdpkuLXShC9JqpLmgRTAoHYwF4c2So77UJhFMceumshtZuKNDTUreXYr9U8YQguijz8KW1K",
  "key4": "zrqxFesAEcHQ2VhhvxLSjCypdSTg4jEMDtD6YufY76z1t9dVknTBzBu1Hmpi5pyjLxVnsjBLjfNij3efgNY5xSL",
  "key5": "XdAVJQAobGEWQqJcMViJsRwyffMkPMyATpdpMm5efS2npo5P9n1hiCJqNxp5qDwaspyLe2BPoXrRPWmMx9W7Umv",
  "key6": "5Ls5w3ox8w2GJJvwadJ7pR4m7pkcKRTbsd2mYJJCGYUtebowutyTQDMthCTep7nyfqNSpr1tDboMwuuFeZsyCEQH",
  "key7": "38dB5dhdeEsJRKpBtCruju2rk392Y1mNyxHiWmPPxJZEfXzeaVrFTs52vvKk4iknANSToBRMeiKJUJciLbpUXbGi",
  "key8": "2jMAfyg4DTuJzTFGfysdCqM9kervEt9G1xhYG1Pxh8q3rvgF2xWVbLBSvT5UFYMZ2RMinabCWkQRmcYTwYBNimU",
  "key9": "5Jyj8ryx4PTF34VcPRrfy9ouULc8KokdwPhuQQF4q9gwvbdVtA89DCUJQbdJHZ9CUqVf2UxHxvLoRJTBjpNMuA2P",
  "key10": "45utWRWUwDnLiWJcZmC8NxY2k1Z1cQDxFUawcidMp5zhyFJYKtmSwrc9bCFbu69HZTfZrtBpMZPudmfAJfcZefXP",
  "key11": "kbcUG6Sv6Tqpw5zG1DYcA9kywTr8SUWu1qd7utZYQRWZ4vMdUeh2G3gSuo5Mse2aXfrnNhRiAppeMiYDjz3ctPr",
  "key12": "55bicB5zKQbHRJnrKfyQNayfRPoJLGDSyuSHyiSZhPtrGtnv96uoZHoyA1xAaPWpiiHbNMgB3DbXB7WeqgpxVdWL",
  "key13": "3dGcqpR8ZbWnphM93KbncjQrwg3WqGaMXk1KgAosCJjAw1PKRmUjoLUagwstWL1ZgfojcabzVz5vYyQiNrHx3oK7",
  "key14": "2pEKeBPKWEz8SRn5RpahUVSZa7k5jdNXaRMr5t6eibZttMEYhGeaSawHVjWq1Kfx2WyPusH9yHCa8nnUPRrAVagk",
  "key15": "2DCdLZQ7Kd4Joz73tCnCcsUNDi5G1bk6qyYjhGDrTjkiPUYamp64ySaPQ1UbHekFdw6ubaXZ5pfv7nGQUnuyurBi",
  "key16": "5JjDqNQMtPs7ZPvAsWM64QAmY1sPNhbmLkVnnD5tAbkn4xCV8qGgvJ2V4NQAK9yQYe2o7aVoDYfqhMyubrMa9Qc7",
  "key17": "3ZqzAa1hK7Zay2qzRKm9eXavaN9p3t9p7TCbGbAHsqZTrQHL69XGjpY6kua1znCQmEJ7yM4AYVKWTB5j4q347giK",
  "key18": "3Kbzx1c4DaLt28mWqCDwpS5KmJQNkLN2YuEMzY48bHtpdBvuZfqLUCbDUSuKXuDHuWPtASzV1dZYafeteasqHksB",
  "key19": "3YiHaqUrw8UmHE7BPNDUX3QK1U1Qa91c6DfB9ppFBNins2S4GFih2TLwrtL8nVAVj49rrDTnSrd2p9hwLAYetbzG",
  "key20": "GSJr67JhYPCHvuP4TmRzUiFf8gZEEaH5hqVhvfPsa4mJqSQB9isuRU4bmbPECfMeD6ZhZcDYXSWCRgw3BAYMfNK",
  "key21": "3djMaUTjmbSW7aUwLkWN337HkKBvGrGGkaq9LhqmmNVAZq285QD8HfV1i6bmVVB4hrC3iwdUvKW36gqDyxq1XpKz",
  "key22": "3np6XMaAdEBMY4azVgzLYGHdqgyjVfLoRfFuacFvgFFHzwEus8yf5nnbmBA7R2XYB3pCeSE5Nr73RvHmUhos1rSd",
  "key23": "22tC1eRe3ZK5MVHpDBmURmYW8HxqabZUpHnwrUorRnu6pEthzRCe2uBtrWeBpkZ4gziBg58vGHhrzvUvm1DuYrR8",
  "key24": "AuaWabsHHhkwbGXGbPY5YswhUA1q1829UM26gjN4wU3GqBT8DXjEuX4ac2Erphu8myTQbh5raobH8hL9Ai242AB",
  "key25": "64h4yYbnhdQr8MzFqPHMbezeQQYcvCcU4wEBsZJEPNvFkBmDzhm9s5YqPqHdU3DgWcxV2shgmGRnr6KQykMaTu3c",
  "key26": "2UoHCvjbzVmfkg8nGfisjD9nc5dfkLsHqfekD8F7UaKF8f7xw7Y5UqFCn2ZAVVpKxB4XsCv2PTgqgwgu4mMKdF9L",
  "key27": "3apCe3hTH9esV3nFkiGo18QWB6JycJQ4Yuf4zs168gc2UvqTP6o7yLyrhFXCiq97GkThz2yKakLC8bGa4FrbYUQT",
  "key28": "3gCj11Yj6yVJ7ZqrL5phHG85ykzpiTfWCdKpSHZ1KhtN4wpWobZhUmLcGVmJ2XB43R3PKTpSaj128Ljq3JTuwS5E",
  "key29": "4tWixmTZkXZrjco6wQK9446YVeWtGnLpH6Y3owhk4x5WkCXRcfVJoMEG4Ldprm9DCKiXJbZptL1xRdyMpyhkR38b",
  "key30": "2MeVPbbDxE6BP4LTgkQDztade5BrqGPhyu6A4htt6HrVtYzhNY24g5iEGSdHhBtBxNe9MFpRQk2A9iAGzV293XYu",
  "key31": "44RJzd8VTGk9Rso2GG4xHJeaptE7Lo9eawX6fgPVpcRmGr4GHhyjSJ7o7r9D4niiBatwX1otLLGC9FKMR5ENe6WY",
  "key32": "5mAaLzhgaPprP1xPCyJ4KDm4qKXy6xC98sz3HdtwskYv6p6kLZBLdtvghU6mBXuY2ir4VU1kxE3oS7pM6k6FAHxN",
  "key33": "3FgfmPbcaVRs5P2esAmP3zUsQRWCjpM7mVnox2cx6GjaALRpMD7Ehyi4oppEuL8uxc1s6mTHpZnATD7CXqDpPKq5",
  "key34": "24TEHw2fv6MPoT7ZcpDPGWS94domjJKu8hakYrvq7AizA23ooBBHmcPvpB7Y5gonwRQo7fV3qBNroZkEYpH29qRf"
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
