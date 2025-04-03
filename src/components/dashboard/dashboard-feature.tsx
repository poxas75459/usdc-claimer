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
    "5vr6x5oNNyM8esBcmh7dpAUkZ4rgTbuxXjaERCQiqFZPUNKeXvHZwwExxD67LQUA8xpJH9ymVef4JDyWYtpaHzsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RK3xe8BN9Wqw54V9WKyDr9mJkztkgHSjmhPsu5EsBD26E8cdQEPP2RzSaatnFpFBuJZYnApfAPpnchYfW2wtxtN",
  "key1": "3g46AoxPfhSkJR3XTqq2Bt9gRSAEH7oYFBcwXSXCmj77d7bA5163quj4A1rLHazFEsxsJNNsprPn1ah5gTaajyf2",
  "key2": "2pw7grUVK6NQ6J9KHdbBckeaifY1cEHfTQ5sBHmLGLRSJm82JrxujnqrJFio7NTPU9DfQ9HJeDP3qdFJKcMYqVAh",
  "key3": "27H5wSQu83HQ2gtRCykTeBPHNrDX6Gg9oidPEijeFqfCTAWvP3TDJPovB5vjC1uobUp8JPMoWBredNyu6HLvnwug",
  "key4": "Spto4bdBDXTW5ofEVqfR7AFskGKR6jPGxAvfsnAywpm5QdHFQBwYRi23TNsNnEeQ26awXAG695n9A1AVxEFsK7W",
  "key5": "2MmSbUGiayivKXUBUvdNH9W15BUhgEGRFtfxLoGbh77z3t4px9hebFuzSi87Gc6Aj4JKSsBQgSzuUCV8LXQNtrDe",
  "key6": "56RZvmDufmvbKZ4xQiMW5hq4NfskT9uDKpeFHvMVzewenRcuujF1ntGJ8t5BJMyR6fFDPSRGdQJeQvE8c44vHbB9",
  "key7": "zf87QMijurDquf7ati9VwdnKfWEifoF9gzsEgTYbt6QK5ggBuzDrKinzxr4pjNwcARXReDtUE3LVLB3RT3aDGcg",
  "key8": "uV9bh34uetRCD8A5ETehonSuDvthyuF3KVSaRbkhZeArUBNxrtpcN56fg9vQQAeNovPUKh3Q2PbHyVf1Eyj91oG",
  "key9": "J48a8XbBFjiT5Uh7HRgpVoBDd82quttMaFmwuukrU5FnJcodErd5BnmeSfk5YdHVcXnjSVFsZakshjZQFZS6RK8",
  "key10": "49xH4ojFu8iwfVT6RXx4AA6as1WdLaSdCQrCwzVN9VqA56iNiTydo3bGNbv9bDcnNcACksyNGCB4JUtvhL565DfF",
  "key11": "4og79oEL8FMFjGKLimSiEkzPnPFAPj2xVA7vAKZ8PY6qrw4Xy4TvV7DBYzBmnm1Xnri4tRqGtJnPyanqYzXNhPRU",
  "key12": "2ub8Zf9yrExax8w49Sp5cGMo4jfj6pdrPdZS6PRXW97qov5fYy1MbWVhzkr3g5dJehAZRCYeHPHZeZTPcBncjTkH",
  "key13": "4k6sMhm4wn1fKrY96MQyvq63k8ubviza7xWimmAgiqPjjfZGnri3rxqaS6srEo46NzLpV3vKYLSfqTgRvUe3DEcQ",
  "key14": "66XXFDYW3stnaDAod3eRvkYjz5tf8H5YnxdbRKmYjT31vWgsAbqsXH7SANj3EZG34kvcyCiifsaGdvpNfQokx47b",
  "key15": "5woFcfTzJe2ZzzWuGRBtDmiVJhokNk6dguCgqYWuW4EKswAU3yBLv1UJFiH5ScjqN4BwTLurECAMUjwncsPnjoba",
  "key16": "27JbWeVRcn9RambzZAsb3trPmMqC5PF9pymR3SgzKSAu8PsJwShx74jh3ch1wPzTqioYFAmQjo9174DSspArz6GQ",
  "key17": "4Hg2Z9EejK7N9c9Cwh1GvJJS71gWbyn6MGen85HK2NgkicQx1r3XR4Hyg49e8nnrZREZosLQaLxhWZ39Dnkv6rAB",
  "key18": "4JvVn4qE2Z57YdrhCtDWyRaYWu6j4SgT5XsemvCvoasC36n7pjVDNimpye8b51ZPdGibCyXBTX362Zmp3vf7KcL3",
  "key19": "4zjknDCNoqCKzq7Xfp5AF6pcwgMHDzcdnCV4C6jwM1f5eXM1r6hX9HcS2HGsoJUtkFEYWahqk6VVnT1r9RdwMkpn",
  "key20": "purGfc8Btuzv5VAbWEFyjrYeAYShCMKELcocNFDgJ8NDa9F3gFx9yasMbDPGBVzo44c8HVVngichFk7PLJmXFso",
  "key21": "4wz7LWMHYJ5hEKcRzuToLovbD4YAqKfh5E3YvEurtVxunzgjhBfC1r85A8Mo438gftxq1wW8DcAJBTeTzvM6bhMG",
  "key22": "4L6St6RLAg48tifN8Pdr44cpTKHTuGfqQ15wYqc5YNkSjTGWgjX9HJG93FXHig8aPhGSiXLVabzX9v7zKWZn1wPa",
  "key23": "4yQnq7fvrUULYc7KXAiEubkCeWsm7dTSAQBDZDprnXN4iNgfSB5vwdzcYtJ6b5itsGgTgwv1epQiqPGGppqoP5NQ",
  "key24": "3pzzEMYBHwqXhswAn5Ye8AjMgJ7XyTrVmcqcwi2s2sJSQN7jecn9pw45k4KP7aqqq3dwFpxyWzr8e8UJiWbPt6v6",
  "key25": "3oBdY8U7Byutbd6H2U7TmEaoqw7MYu5Mx4PHmExgG1pSyuFLjfLnYRaaWZPc9ErqnfH3biqSFLuKeGiYrWQxWz8D",
  "key26": "3jpBZiwgcbv4Kdi1ZhkP4gfGzpaFApEwsa8Btpfi2UEU7fgSzXjLvfgzzUHzJysU7CRG5p4ZxQZj3MJEtFDiaQTj",
  "key27": "2caLdakN7ZgJCUYCW4fHx2PuTLPR6NSLGavwx2PfhJxLzziNKPsTvzKQHADJkGnAsJzARxU5caB8MX4HTiW1WkvG",
  "key28": "4X9HsG9p3U2zREvPrTcNwZwnYdjH9dKhQ9yj9kTu8hcF8uYnQYvAyokJ2hYdyrafcT71U8Y6qBSrfdQ9jybdo2E1",
  "key29": "2d4XLN6hQkGouzWr9g9kfwHig2WuEepHhH6Vm65zX5MvMWJJyfsNMGaLaxR42ck1kzmFEE4RzZCM76BAr27eL2P4",
  "key30": "44D6NojbgJHan7Yc9sV5TcpKCAR7D3TXwAmdcrQv9zz3oeXdc5yMC8MfyiegSg4iq4LqDmbuaSaYHX1HT8Fk3XeH",
  "key31": "bHAhzfA3YHrUmtV8Dj1ryemG8WskMUhDZpNMM181PK7XFkUK5Wuw9HcwCTTMYywjuU6b6XRj49jkeFVtgkem8me",
  "key32": "4LQ5i94scTQhPWPcEB2mMgGfuxzpvkhRuG7Z7aAS4eJundGTRpAxyEaxdY9aDEibS1qW1VncJcxb46UtABghHRRt",
  "key33": "46KKrXwBfTiCQH1FkQq3cuLLPDfsxjThy8raTcJeSBJ7qJ3RdDAF1ZRJSSH2T7Si5xeY8v6jXi6QNqk1zM2n33n7",
  "key34": "4sSxJRWPPgUoRKo55utbxfUKZHNCB4bAz3bNuiPYNJgbixdcusKagK6zEqrvuyoBxEkHAVowWcHcdV4ZTYMV7RqC"
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
