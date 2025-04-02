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
    "5u6C9fLUsjzpx5Y4PddMB6D9zvnv65GJ5puH6wDYVPUAFdcMKyFdDcMuY6LHizvgVdPV5tPwwUgh48nRiJQquh4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VK5mbEQtJ8zdfiQBoBRkrUNaHRhmtdbGQyWsPDgjCbuufjHgJ3uK7A8YSFTa5Du6WpPZ8jYQ4ja3Hh2tpqWuEa2",
  "key1": "2JL46x5auCCbthaEV5n31Mvjcs1MceKW2sKcedGd8Gk2gpbfMbvBQQhZbELes3ewjYePfkLtkSwXrpccrqSXGDMX",
  "key2": "GKnaP4NVJMmCzE3fyKSvjzbNwnAbdQKpaD9cVdJiP7fBPzYKehx2Ds3iRSxnH5H3QYFhoiCF4ZgVVA1KWXHifCY",
  "key3": "3TqzCLCN9fDwhSEuj6y2tJePp9uvx9V3fWMpTiX5U12edGTicP144qMoR9BKcKBo2H4EUG2vFA29dk2FG96pfBpx",
  "key4": "32wouvDWtWUhV3ns8GmtvEj3ysy5ZcpqWP6Kf3sqgZVYeX8KzituE3cAad86g7o4SUx9zEr5c1JhMEKarZ3EWH9p",
  "key5": "2SEZm14LL1akATGQtkiNo9F4VS9HRJrDtV8eHQuiyNZp5hi9sybM4YHje5DDTrXM8RBJJJqc4qWcLT3mEisKiKFr",
  "key6": "5rrgtcaH6kGQe9BGXqWYKad1uuBDRKqrADwgsfbWB1xD4BX4xGqAky7XJ4ftJ6akFPwnFDArbEsEEg3Ldmk5ZL6J",
  "key7": "MtNipxSyJvvyd3UWeWaBVcWvvHfu5S2Vuqh3Cdpbj3vSRJ7pE54YxwmoeyXe1y5MPnTTgPKMBjxJQ2NdYNZcMRH",
  "key8": "3qgrPbAfua7D2TybFwNvWMjaWmL8NX4fTMjEfj3VGEqbP54GPxGjR88HWaJKLFrivdfjNdcktchqhJRnPzmNDh7p",
  "key9": "4rVD2ttgpJoYHRYjCQmkjuT6VvdXzkSFhPhL3xvJaMsJ4NWkBKhzbvpcpoF6Yev2GKEhAHvV6Dg3D6YHnQ37QQZZ",
  "key10": "24G9aWxZXf7sWCkV6CPkuMeMpq7ABYZEuF4rj1rRb6NJVAAEUQgnVvcMYZAdr9yH3jDKupxvG17r6DTJzUYtyRjM",
  "key11": "Exv8WgdGb6CvToq6UUh2H3cWrt5zCWhRohYc4nL13AuUppC8pXRiyRHsnkNY5fs8AzUwev7UMnK1HNXEYv7SkAX",
  "key12": "2m4eqkow2CKoHWhu5U4QhNhT4WKCp8rhougLiP6Y7JKhGWmp4eEYUkQPfMmfeQiCCFDvGSCvhkrzxuBwxjGPXPwU",
  "key13": "3CGhyVozDtbA2coLS4tbQz1JfjPWCKy3Aak447YVbC77hvyVEjUrhSUEDnSiTJEn3znfu3JNnd8fKg5dmUnFKNsr",
  "key14": "6232RDmU5w14UbcBTADWvasJKaiQ7qTb4XqKkf8qBq9aATCxKJjQxHgQEyGrN5FASX1XVq9WNJZkknBLrUzy9ss1",
  "key15": "5VxfTreKFucgCMzpsYvqJSi92mNZc98UL3Kez5sWpHbwp5E5ooyBqJjFCcQ6pQsbXkw2sarDYm6dGFiaLyWKxnZx",
  "key16": "5R9jk5kaQgvMaUzWTroxsJwCLy72yPoBVkcSM3YKpqs3mqLNTnfnB8cpzDPeF16uG5n2wn8cLccDYMJiQdzVTGio",
  "key17": "1oexK3g1wZuVqUEet1GDmZyVVjBHWn9bc2Tifuzoh3LMJ7e8dqRDA3itSs34BMq1YQogQMAvL3XsVkZZBySc5QQ",
  "key18": "2txwjoFWxhDn1RVnAVAHBQzD1RkaKufGNq9WYRZYhBxe1pN1w2naNtWqiKcnGjbeFbswwMnAzdy3VtRcPgqUHK1Q",
  "key19": "5WJF4CMFGkym9LWJEujfSnKYPdrMAqdq3zV3hW6K3d18gouFSFHUP8P6jKPn1j4hQ31xR6W38KKRWBJCckCBkfpN",
  "key20": "55qoqFKyVZ4scACg2WtdfmkLyUYZ82pjgZ2L82deNm1cMz5AiXW1QkmpRujFFvmiuW6rh8aFX3Dh5UAn7PvmeP5a",
  "key21": "53EqWBgus18QoeMzvKrYvs2UHff8duxH6KNbkvbSHdMB3ijUgdKQptymW2UDT5UuPMHhRd8LfG95Zou48ALpSVRM",
  "key22": "52zZKha9TZptUd3DcfdVizzjzgtfGgP1JJwCj2noxuijPzutqBqi9uurJ7ZbRqFzNGtRr7o5yvezsRZNU7DFmKg8",
  "key23": "5PK9m2QRT48gcVe6hU2zEnEkpmgB78oLozfdfBSNxL95oEpcfe71boGmaferhHupGs4CeMmMTuoNvL4SWPbk6c1S",
  "key24": "3om6qPEjp74UNQMrmzVinYwSzQJnLjuskzNn6n18wXSwESmy7UKoDpkwLa77nDLbRR23BgTBpnxLHq63nW8bhTg5",
  "key25": "4sv7ZF7mevKAQyy8Y8mT4eAU5kDY8PHu3LAsnBm5DYhDiD33QDhZt5mAmmS5pUZyEG9kSYQeQXZRBLDhLUSDLsBB",
  "key26": "5x1hL1LnPLSBdhmvTXf4NM42w5fCT9mXCgCFpwpGHFmgtbjA4enLWQkztPwsXwdZKvdBh4bodXdDNqhq9Ekgtqws",
  "key27": "26oCg9mnMbKRH5PA7ybvYXxqLy2WQe5iodUNrrzseRyzrKkZ8DudUVsLVGuCvr8Q9RA9hP5XA7e511x3DBTXC6qT",
  "key28": "2rK1gPECpV6QTrSWarNRMY3xaxBzYFChxC68RfiHSapa3eSuk6PhSkk9QgfU56roJJyyd8ZUnCRYd62ThMDn6E7C",
  "key29": "4JET7nFNjmSM7UJtJkgUL724WnsnSfBVg7AXUzkQiV9TmYgsHeUr754QFhD5eAtoa6Z3pks4UsTVH4NvQxdb2McL",
  "key30": "4PwtcFiDroLybdG3WMCZgn7VSYSGnLdR1w5ACwEwpjFYo8SxsZ6Nq1y2MrS8EurgDeSRPb5QYY2EPkeCSW5Fdrr7",
  "key31": "53gMJE4q6rQUS5mh9giktVBknkHKntu61tNEsezMx9YfUVLhvWTedqFFTtAPtzx3p8GKwtBTwivehiTxTdkPQBkN",
  "key32": "2gzLf4knataWFPVhqM4MRyEux2j4rN76R6Jox98nJkvqE2X7gy7EVoCecHbiEnEzzPukGaxEydAWZMqkcpADwxzp",
  "key33": "4dMbJH5QeJuwUmfRiSrMSnVkRueCEaKnLi4QAGNJDXaDGdtmYCszMExppYtppqyJhdtbsfdbsnxXMJzL18wMXZWJ",
  "key34": "2xx8MEeDkqT7Pgqd9vuxcmxYi9LtS3QkhKqLfFKnPAbQjtKCJoMvtXEdXsPYsvkKyQBxpwrF2XpJszV72DK5qJEu",
  "key35": "4UBzygbgigkBK83wVYfCsvSgvCuLLC5rmEVCv6fufEL5PVz96ULxPPyjaAW2zoEPXnEeXGpvywNMMPhLuYm7zGY4",
  "key36": "4F4QjUvHAHEmYAqyUmcKKWn9mJHLCJHmqg2RjsuJEMaBjXgAsH3RivZC4aHVZWey5Th7xuMBmYQ4yuWqZuU5Ruv7",
  "key37": "5h17cBggp3Ma2axpWrTq2FuW9oBazJngmAgPXxqRsyRn2WXe2aaWp9igt5gvb9rYWMdp6mcotmHu3vxoCQg689MD",
  "key38": "3tLhkhiLGmCouV6vBSpg3kLL2THeKDqwcTkTSGTYibU9SEReejAcbN5bE41dk1j9i2yekYhzw7XdKRCaAA91bGu9",
  "key39": "3jDYeftiZ4KUw3SfDAWSHAdyDR7zC25i67PX5xXm8K1z7f5RynUj2ayvzcA1LW1yRZysCwguJsTYVo8uxZ36VU55",
  "key40": "579BYjtsWHunQHEPdD3uNLu7dBL1iusZf2qGXntXqd8DESp794ykJRsD6mgnUs53LxynY2pwhGnmmyFRkJXcEjfC",
  "key41": "4WZR7KSjC9ssybTzGrtBiAYhvGcbdBiGK5AFCzXsKdoXNE3TLJDYkAZwCMCkY5Z2CKkAtUPhVPAaYbb41J1pGirS",
  "key42": "2FkSMdVFU5LJpAGCSg5UpkobkTt1KF9GkD1ATVcWLfunxy7whFTqSaKurMb5qovoET4VW5BGnTGCEaN2Vwy6A4oH",
  "key43": "uZ6BSsDQhx4jVaH8aGRENxy3q7KjCBUkiq2gxSFnv8qhtYZrd1CctddhMSC42QvxsK3JsDHCb3zcY5btzQajj3e",
  "key44": "4KTvkKpmGbb1E3S7sraeDPcM9kk2SFdKr1TxMJocgGNaC27vT2vnD1EcdN8qhU7TEt5Eq1zRVE3Ev3k1JZVJ9TRT"
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
