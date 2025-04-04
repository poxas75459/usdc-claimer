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
    "Wfi9RdHxd4Kea1YnPVYYv4YRdWu5CUXE9FsTX2T2xzy2oK2n5hUvGuYm1dRWpFiaXhGSjzkYtShRV1Av7HauHMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DtNu2mEMAE9Yoa98WTVYJjEsf9Nyer21mRAYgGrJ2q1mCgKyRBS9qc7TU6iLEpFN4xbNsimZzBgW1cQH2KnebHW",
  "key1": "ZiNPQi2pXSS3ZRZYF9oBjXTqA4m7c8bYnW66CRff2eD1CqbZuq3mUdJvR1gpQBt1B9FDHTWQ5sckwqqLya7SHWo",
  "key2": "2SNFhtMnB8JBnzswAUDrMWsGP6UanZqCesevi5vnHfRGXUvZMUu8NxqAY5xMDCHdHKukogjW6jyX4HxVxksywJR",
  "key3": "5KnRPsmjEARiAAGAeGixX8v7qusJUtN5GVBq5aghj1tub1aBrEK5ukLmEdHVKDhToJeofJ9QHYqq98yhjTrkos8",
  "key4": "5ZXJ6o3jBt3fYExLNWvVSQWLuYMYTVik9yU9muAip12DLCTsYRtgAoHwoJ9N1Cdg5gmzcyyNMwuFtXWr5QkfmuC5",
  "key5": "4HDbzKxbST7HftJmbRY7Kaz9CAF1b2DKyLeo2f6SGYHxnVFZSuW84htfHuepV7rsz5DNV66Hacu5DS9AkDEyDHWp",
  "key6": "HTwa2z8F2Tcf1AbcF9SkobNQUK1xqaXojU7NNoJcrUziQE7uti6z322PEzrAAfTWSMmN1ajQWkVe2wWFAoGBH8V",
  "key7": "h9hRsRLzmMCKc5h4PNDEqJFbgD9zMXt5SWhjcbwKnA1ryUGoCZW21PF7An3RwndcJQW1cLApcmNBfwFxvT2nxNA",
  "key8": "3bd3x8R633qsC5oeh3xsqi2o9jCkgc7YSyvFWrXfigCCy2fh5kUNX5Qa86YVBe9pF8h5yU4GVZY7GRQ328JqZvoH",
  "key9": "61SfMP3J1Mj3UguVDzhbNe8hhkgmrTfjUYhSb4juWxGcJh3B8BTjQYqLWbCMbbrfFzYvbTLUBRP58864zpkeitaq",
  "key10": "sCERHbBvFqmt6vuPFtdkyQhDauzdN9NmoYvbT8U88W6KBH4Lmj1Wyz997Sh3JzvnCeRPcZmfdxM6vjmBz9CwM6g",
  "key11": "4kjHRvyxZtgKmMbXtBfrM7JqM9aTHsLRAH1ppmmMW1uLapRWEDimJeZ6zRMoMju5n1uwK3wQ7V9nrqpAp65AWywt",
  "key12": "4SXSQSpTxx4YSVX4ZDjzNigaXaZQoqevHfoAMtSs1rzmFwLtBthaSw9ZX4o2frW7JpLfKdf6eSxMf28uiGtp2CZg",
  "key13": "32ZdyCN7SMu2FXg3bs2e4b84omPZ4HmcKp1RLJ9a4LVVFFdRupprGqMqVsXiprS98HNXxKnV4uZxrzLz3U8E4Ez4",
  "key14": "2iPXPXvGCvQYCXVzpnQEczkFBcvLWwx5AVbVtKLCSdCNJ56MVUd31mALsH29r8eK8fKYMkuk3YtoCZV6mHjHwRXE",
  "key15": "4MmMdbwkRss57H8LCrUjcrR929KHt9XmevZc14t4zGjY131oXzBAwwJer1wzW7dttDudFY5tnbB8UWyyMHSVa6SF",
  "key16": "Mf3YctbNyszNRBzHwhuWMRtAzWBo4BhCmhbyJawZG5ksj1tUyBDQTvWpQ6QV5jt4uVEKxWHdDBy9vDDAap7AeEF",
  "key17": "2XwxR2Z3RwTvvhoyq2Zm3zZyrwg8NhGryu9k5R2u9fAkG9QKTvfYzM7zawfaqNwVpMeV3cjViT4wCn1s9AoxZ1gi",
  "key18": "5UC6eXaaHxCtZ9ojZicR8uS6MUk1HQFM69DBdhQAERUZfK1KaYNAEqJiWs3AuJm2N3PHfo5WPaZLShNep7g1pd7W",
  "key19": "3wED6UdBoEjkHcTSSyYK1HCTqrspa4Z9BneVKoXqzsisLQCM92vCDmoJL99vTZvE6ovEBZxeDMnixdt3ynPKfDSH",
  "key20": "5k1UusEgpVCDzecymg5jYom7p9PibyNmCZuCaq7vYBX9FxKL3L9fHeK6PqZCgKLNAZghQcmoxge8RpNW2arh6vmn",
  "key21": "3wy3nQd5XJCVjgXfy3tJoLeFQUcy1vUqsnwMZRyAKtGyFUWVjJ2jt8dU3g8cGeoJS4DZ6KjfktsGGim4oeD4N9vG",
  "key22": "5EApikBBzjUSr8F1LpTMxhd4fuZvENw6ovcJ7RWHLxNF7jG97gWwx1vZwBS25kpiyrEWgFycyhnGHZTm2tqZZbRG",
  "key23": "5fPfHNmZHtG6NoEUUJMvSczDFbD4UQc5ty6ckpMsHjeAjYtd5f7W241mTfbEfFydXyXTZgso86oXN1RkpHz19Qjt",
  "key24": "445wHSiD326zJq3itiLkWYdHPUMVDnDKN7XMEF2oHxMFm6fVJQdJLb8cmZqgkhutaKRhFwCJuhVWEHkJPLWv8hFX",
  "key25": "3si5TVcWkyDyozgnPY7euYYvfGJthQ6M3X14PqFEKKSMAYPLbusvD1byGmPBeHZ7NGXUn1RxZDoJCExmd73gRDrP",
  "key26": "2ZedMoMEjeagzybLbjn3b5Ke3pVmnm2FTgC5X8iiskyhxoJjSk1MaphAx7e2e9HtgQ6TbLzN7mG39JSA3KaRVjfp",
  "key27": "3y4vrbN3NX8aeYYUZ9mxn6ijjazxeo4XvnBWa4xcwcRJhw1dGonX2hPAL1pwu1FBhsMdQoz81Srznf5Xn5FAeiVi",
  "key28": "5HxfkpGEdwC32NVAYAuePvKQoB8VtMKTqB6BzSMALRZtyLSfZABLBycVevFGVfud2b8Bqi49t7R1naN1JRsUFSyy",
  "key29": "2XC1hsttykjvn2PuTAqvVsGmjAezTh8HTUuTKsco1Mxn8yFMoo3EhfnQige93nUy8TwihcxKx98v9zFTWWQNjEke",
  "key30": "4FpFjLricBhV8jDfxatEWqb91PbMxduqYUGvd77NsRarpZLa7piKtnfvSzcn8M8WxEHLu1hxpesj3zQ2Ad4pquhU",
  "key31": "2MtQrBaVfeNzMStvRjdRk22wDwDp8EH5NdRvgQ5REb3KCVeZEWmVShKEqvQs7JydyQdXW8GJ7ZzXAAM4N6dAvokG",
  "key32": "2jMtDM5T5kBfenmjyGizAXKMkGAYLEno6Kqr8gVT6HAYhLebeGzByHqZdY5NvQjo2LMi2UrsRBYFv2kxtS22Yd9G",
  "key33": "2kouMDy52MZd1HPZWRTjuw1qZtCKe96vufDjGmLe2geHMJnYf13Jr2TcbX8ZqvUviH57a98GzsGwbGFGEpB8P2PC",
  "key34": "hWN5Bu93YLQ8RsaF8Fwv6FC8cLbgicVEiCKQ3pm2meJDpjsJcTKpwmNnhgfm1Ycn9De6sZRFMZCWC87D6E8uTSo",
  "key35": "2FVCqhgHQnkfzNroGDXGvMMmk1TprW82p8YXfxHB14gsLF4Pf2cryQL6XANhsmvDA3jTAXXF8SwjK2rxDg8zDBCU",
  "key36": "4KtR6VF1QyNzhSyBY2EUuyzJqAfL5i9bnTGvNMnmTZJaHjdqhY8c9RtE1HfYERqf4fpEiYMwnAYLwZ4fEZyYYfqe",
  "key37": "5ha6KQYm2ZoECzKh86gX8ZaAhnPpPYzbkbTNagybCM8NMurZZfe1kpcqttQ4XtiXjNLqye2HtkBKNjBZsxz5JcBA",
  "key38": "5zVWZ1te3UseKzpjziMYGoQcetKRnaweRV7BVjpxLMHv8WUaMVYEgU3BsWBJoshrRtRr4Q1zmTsJbtkGZET1JdHK",
  "key39": "5DtvnBm95SAcXPqQKa15GUzzFuLCDLBRMFQXGS6WVy4psaAHhQsizDtoPWdFiCUW8Q3BHUmw2FsxwUshkj9bHpqi"
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
