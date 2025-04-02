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
    "3d3ghEKSr6qUpn11cSxMaKfkgVL9oXqTzDqSfWsz564yv94YxyT8NrCKeGfkbp4B9bJNfCYgEv1sva55KNLKvXi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55RhtS1YFR5T5pPGuNDqQd9Mv7oxfGBsZ3RQwyRWgzq6VdurYvENQbEfEp1baoeBLpjhttjsYqNeJ65U7J3VR85F",
  "key1": "4JNsnnXJCD5wB7pEQfNT2RjHUDz6QW7QaiAYVejDQpipKkH91r52WqnsLA2fwfd94MZAAwbw7UNmkx5EonxzH3zx",
  "key2": "5S8AFydBXZWDLQPCsJj2ENGH2tor56WNJrbFHVbb3wHxvAYqhrL52XMVtWjzzy78F2K5mdqnpqmLbXFEFy1U4Wwb",
  "key3": "4rkBw3ksaRgKQRfmLs1GiCUjfWTVfAs2vbqSpMwDhYgYGmgMSMLmi8RXJogZSBAH6gkDdHyp9jPt41wp61uJ3QZB",
  "key4": "FdqBNu4Jx2MpBEEnNjeTQ4ffSTEDC8vBcXEDRPkaciUHwhWq2xxXCasSGMvDNaitujdQxPr8vkk9vUbA5udPSxb",
  "key5": "1AWg9AWJJRnRZZxDiBPrF1vYyywtxb2VKZ6xyspEpah7BiERtoSg7nBTFNMY7KMb9yJ9Z4KJZbMvgjsRiYfr1VJ",
  "key6": "5ce2rN7ATqqGmHbudnGpcCXwcvqdWwm5kBLwbE4zToBBgmNs263dtnJMM65QxE4hHTRuvF8HgxSqdjViEAVMDX2i",
  "key7": "zzGNgq3vtC5UhNtHTAsXtLHVwUPmrbCSFzULbBCzRakxLBMdCLF4mpC36apM6SJqqmdpa4j2H12f4p1eBgpLrrd",
  "key8": "31CP3CeHwDzRdgNnv9xUXC9ksJNbyFYRtiq6bvwtY5C45VtpkwBpxvuLMKu5hzXbVftfu6nz5n1kzF9Dfzc9dbaC",
  "key9": "4WR4KGsq7q1kQ4qZG84FaqHMXrzzanLSo4ZneMhwkwDi3tF78s6SjBqU6cBVrKfJTe72zY9ivdCXDbxTtybLCerW",
  "key10": "2cspKjZknrijdSevmxuchKWfRTtsYeS5Ewm9p6Gpu4k2hDgRpwg1nXb39YQMVxjuAyybqUtotfC2QstESF27V8Db",
  "key11": "2snThKMbL75pfpCpJcGgwZTFM85MsvazwVNujukVT2vSLNC5Q81Hvo5ma4msNbrec4tSBCoxRibZ2XmQ8d9pYBZN",
  "key12": "5mHmNJskFk4KNKYN5WDnALdwQQKhgB4dAXwXcWQoNUVVtUNgCTu7NVfAuLLLGeiDPHxfuxHKq4teTehFkkwi6A3f",
  "key13": "5FBmZyoAgVLmR3tunoDkrCGr3asS5YSQr2Ch4NbBQowoQVDCCaLJd64RZogg8YQcbhqNdhacsm9ic4Z1MfrU7u9D",
  "key14": "RMXWU5XLQrxq6dmYWYpGoSEMFH4z5EakJLWjTxffgdg1NG3YRsKCDzvtQhurEa4964HXsEDEyhz7yBADLE9SGdG",
  "key15": "3JLpQRYTVHgaua5Sy4DguAAmorcuqhZma9yXfhHUJkEkQwwutPzPqSpwbsfTqjShz4y6Tv3SRrJMtVkHk9EwHd97",
  "key16": "5BnpBm5iFG5S5zMWoqY9DbdJcG6TpBoLTt6Ggv72ng9NU91e9Uh75EF3Xk6VM31wgHKbhMjkWSURX3yPLdrHmaWP",
  "key17": "3BKpmUPjzSBu6uobfhB3oc9NPDqXT5Qz3Xta1CxRa6t39KJJExMmR379ssNxSCHTYLAf1Yjs87kkyJx21c2ZDR32",
  "key18": "3cN6HzTo4c3gHNciCARii6w91LeWnPRBEiqoDi9UX1YvYZB579JxMKMhcXeg7VtTC1EovBVDv8wiNtqWzq9NcEBJ",
  "key19": "3YSTkHJa12u4FRCtoymVohzq1i2QnMjaSTH1op7XMLSyqZMnhujd2pdY6qbdLgfgr1b9CarAR4bcgp7T7NzV5ZKb",
  "key20": "yjtFkBPSDt2imLC9tHvn1vFtmoxsNuiwX7eoA7nTzgWKrUBn4v3oeLYAtJoCmkj8ZJdrUMrhysNnrptB7X4NHcU",
  "key21": "42ZsgEbiAsFAhrWFNLHiKTK9NVJRtF6GMfwGah3HPiVH1ah77wQp6Zt6dHCJfU98dtPwzgUuJSqNuSv4qnJTYtNL",
  "key22": "4uLvdNrtr1Xf4VVGXRQKhSLTW9ZkhjFxiL6cPXfnWDtcRPfnC14jL8sDzmVtPptTo9r7F75bGnoFpYkcV87aXF8L",
  "key23": "22VVQryMQxEY9FmEBVJhkHedupxN9cAG3z1sYPdD19CGtrA39K88mrCuYoTX2pHXnHaSCfZ45j3GcgBKxWLheWso",
  "key24": "63fhJiWHY9zZ2e55bbCwM8saiwDuoi5JkLavb2obuf4E2LuurpfBk51PRiWQYUQoUYB9T9bnDN39zuowAnMzCYpy",
  "key25": "FzUcJDwWknKtBdHXDk3E9TrGAg7W4cwBr4gXLrqQWF7cVz7sMw6gozi2qnuiGxabxHsAbJy1iBYYHyewqiUNahi",
  "key26": "wkRviyFUxY2jNcydd9M5emYGXisXLnwpU6jCU7MsFe4FuWL6iK1RLjpvkAVULnnQ4EZ6eWVwsRftDZw9F4ktzuF",
  "key27": "g3rMUF9ALTfBqVagEhppSzrTmTod5APzp4SFWjY8zq4Gf7Pi6U4SNYp7zC5Zjc22fzh3nhwoi9TavwXNece2NKU",
  "key28": "2yNEV3ssGYeUoZfFMhyUDsh1MCRS72rCnRvuJAjk8CGEM4ripWuKkckd4ippeytgFeEGDqtBsjYECordeTMi7RHg",
  "key29": "3BvPNurX7LNwzBDkSiFNDJWqZVox12CtspVvQSvx8sHujEc6B5wZgYKTDCGhwkXKaakJkLjCZRs9Z2VFM1VQwv7A",
  "key30": "2RC45Gv6x4tn3svHxQRdCFAmKaEgsvZUw3R7YTZWXoG4XtzKrNwhvCUBuG5SpcgEyUMwtB2YxCkqHHFAFPDSzS31",
  "key31": "55ES89Wm57yVzr81gjWemA5cC12Wu5xYmP9mZxT6AFvt1hANhRuKs5QzkDwmxqsvDrhXLc2YEwX9qd83Km9db4gc",
  "key32": "4oPu96r9HEzjMf88DDqXPjpya1vT1oGj8Td3E3Kq7Dv5DN1chr3YszDj9hHKgX6T4AeykXRPHNr9pYzPwP9e5a5P",
  "key33": "4Lp95eS4KLD48Gbb1tPgp4GVudtKQkaKbi5xJHL8qeRFhLD7DqX5TQdbNL7GH5QEuTpPPQ2NF4N4ZxueeMJcKoM4",
  "key34": "3QSGVo9qq5sK49vwcVzKiWHGBzzT8wi9fwv2woGDpxPi1CoMThDfuQsCJDA655V61QyWPrfRFToS82epBj7pQr8w",
  "key35": "3hEBZ9hVJ8ricQ685otSuhXzQgJrA2RqkqxD65k8B7pG3i2YaXe9c92y9AxN3uXLLt1Vfizgj9hrqswkZtPsYUcG",
  "key36": "3zh4PGVQpXv7riQB5uVThEK9Co1pmstVgXienFF9Ergwnb1GuQmxJjvJYiVDxkB1eVwXE88J92WDsKJDKFow4BSL",
  "key37": "2PzQtK7k7Q3vd7FKKjgYdxTqWnM7CXsVdiMaEGpCEXbgx53HGj3EqNVx8tLyv1feYPFiBwXGYm4sKnRNkEz9FHUJ",
  "key38": "BhV19Duo5PJgVWHJwTagL8FbSSC6NdAkbdr2MWUXKx9A3EHvTYsgeJV1UScbekgHK1re47gj78ZYtsPmN7G4pXK",
  "key39": "ctZSt5etTDCR1X4guQogKDVrTje3dMxFS5X567J6EyugqkVPpzaMgD8YobcWuvuSSHvvQFVMqKmcUoAJSyTjpbm",
  "key40": "XWxk4AmbLbnu3K6aHEJRtBV1fXNLtbrahcPosYRz2JN7vPs7BzMGPiLHHAGWecn94mMSp5BtH1d8tycqGRDX2ur"
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
