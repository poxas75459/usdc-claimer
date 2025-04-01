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
    "kwieDeLvuPYTkqhWvEgVtZjWkhp1ZG8jRGR5CuSksHN1Crvu6nfik2MnJY1WmZL9kZYpuvochuma5PsD248uTBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VxAfDX68qAYv9FcqVgfDWNqjAWEPcGFHo4neGVyi4fR197aF2eMkj5nqxXtvnb89FWPFPZbGRPCMWMAhG91aFLm",
  "key1": "3x8a3CyA8dKbvk9Y6LaSvxeUrEtCyLJTKP2XhkjdHxdrMX21c2JG9fm3moSs6NUVdBDZ5htgtANezL4kkKZ2K6Ff",
  "key2": "fAXWzu3J1YEkqjfsKX9um1Ak3aqgutuFX8aZkTJHsT73MpuD8ppPYTC9XxxSBfc1Aia5kYUUAv9QMzPMqAyEKig",
  "key3": "JPavdvHMz948npUpr743Y5UCg8iXK533WAKDCr4UnvvpCiLi2tJeMUBsdTQGpsqypdCyNqGCJ8VCz6btUVytTq5",
  "key4": "2vkQk2aW1TLhALG72npwrCxJMnFfSkKz9VwzsmQJAVH8wYMMMYZobTHkZHmihYjjxKh48dnogcM7UMpjSzbmqXWP",
  "key5": "iPXnAkTvjsoxEcLTQsUFQJwPwjATaKqzbX2PNUnnNorBe5t8BWWySgrqmToDufLQ1AbRTwqnmxTDfDWTLG1spRo",
  "key6": "53vCKuDdZGX6hXDsRYFW1iEWZZ4m18SXnMDk3auydL9BSHj98ozLBAAe7hibe9od2YbzXQ3Pm9qHzzJ3KYc5dH9W",
  "key7": "36Srs22ANb7BgsTHH1M1JCT9UkfcJ4a1mbMUBaw6H6E2iVJXYBmGRXFCfnDnuzCWEP43HAe5DGjduSHmZJBVUcm9",
  "key8": "2PdqRiJcvMuc7gR9RjtgUDkgEEKN76F3e2vvHPg66492cT9AARax9eFsYUTYvpTzWU2uJmL4L1X2SsP4cTVqU5fC",
  "key9": "2uv2vofKtSdAcQf93qhecpqet5Bnvkk3xSrUrmGAuULfCGjju8ZzdCXtn5ezSDM1PsL2Wg73hJwFFEbArpiovkTW",
  "key10": "3uhMdE22yJYSGVy2q3yUHLjd35v1z94wDnRdBaF7kmjonkRkR3SrvEJ4dc6iiGrvvuSzVw35Erhe9zfMiL8AppJC",
  "key11": "4Pam64nfuVxZubkwPpc2ruG8A9S9Zyu4iB6Dx2FennR8yKYc1T37y7hR9er63NdoPZPNBGQJTK4KCB1HbHMF42Fz",
  "key12": "4Z3nxaWVHsNHGMSpj4AunVf8jk9RbL8cwNAd3TaMqLrdQ1MVeE2CYoLmKWDAevezMXZ2c1yBKZGwKXP4zAEdQii7",
  "key13": "5ggNEPEqSeUV6JeDgfZLfu7x7BarLtSUCZzx5N5WBk7LjagnMkuWrugzv9Hj3SaqhczqzWzEd1oz4GdeMFx1oiVs",
  "key14": "5tqyPwi3Fo7XaSWDdYVvW9vNFuFsCQQ6nEypVcaER7Eats7Y6U2oQ1oujVAdZde2ucH8yERe9zHkBHSu5XdKJk9v",
  "key15": "42GJdA3eQMFUeBJscV1jN4Q3aatL9ZuwbFnRohucmGAtWswpRoeNWqECNXbR2NvczzEdQGAXYdUBWvX3wKVDk5qa",
  "key16": "4HDVBrE1CyTFGk57AqGfSEX6VpE3e1nbn45ZsHUa9SU6EZJ7yvY2msw5f3ktWwP7yWetpV7aKbARxEFKZgj2xasN",
  "key17": "4Yqv1UWcn8zoaV6CT24i2gB6AmsAispZJuwxPz3JwbB5GBiYmrD6hrf4CDYvVowRedvEVb6yTidmNiDyaSbobkjH",
  "key18": "3MBCztETboBAvHhWciscuDf3u6wKq4gp3jkmRK6kPiRG2t8BatScktehP6Cs1XBq97fyCppCboof7nhMsLjV9U2U",
  "key19": "5ZLortZxoyQtudFSGnoUMQGBGWGGMUgzFfF6N1bdn2HBAafdoFhFAHFpEF9bjzkUSNsJfA3oJaX2S5mT6GirjtXg",
  "key20": "4htGBeU5quusyTUxfyvqyD6DYoJpX8wqmkw4GntWaKx2Y9wEkW1MJJCtWtT5AdFLfkhPSp6om6AAyejCQz7bLHZv",
  "key21": "3oAs5XAmEGeg6LPZqZDUfLCphxjnqYzoNceimxmhaJwWibP5M2otvtUdpbrq8qmwsaAdV3oDe1rS8CuYj8fQSTBn",
  "key22": "36xyfD5CAkbAnByKBgwM5bkAVKrEyoiTeEyEVYvv6NXMHBYELrXSuDFCVKvfVqVAkvsSCLrm5BGyYoURFeth4ofY",
  "key23": "638rSzsoJq2iJR7LyuWSb3Bpk7sUfDMhSXgQLqWdrwSwoV4JPu2geTrXXac3JG5XbFJbnGTbobCDQ28PPvjkKriP",
  "key24": "3uk9sXjDY6qycF1FW3GoUD5QB7cxN3v9iK7Tat5aNyxMS6VifTeav584uMyT1iYRgemBS2KVm74emoJHTnKMKbnJ",
  "key25": "3KwWFrXVxrZRS2v9DiLBkVkcsyVmuykrvb5t3FZHrF9gTJQZ3s6WW9PNL1SvLpf6b8smf8DvZo8iwiWJDhhTmtZX",
  "key26": "acCzJhmmTJyMJqFsNe4UvQSDVUVRf8xmdhTVVFDeN4hTwPEHZPLvBAjfeEn3izoSLW73NMatLNTRWrqAsf6LCKK",
  "key27": "3cNPR65WzZ6ua4oD45tFPep62otWC9QQSrN7yDfXhnHNKMCVwqt8PJt6jaAMPgTtQo5PLW8mEQe8ZhR2WCqtUYQv",
  "key28": "3aixDi7QoZgcQYKgZ7mhL8vfCrnLuQYiE6W8kC1pG5MTD7wuRtmQrLN9R5meA6ikpi5Sv35D27RMfoLkbyecrkNH",
  "key29": "3CvnxQe2aYrTeuTjxzd3JqnnPEw1ypEYUj3mrwBLsUZV5mPBDY8B2KTwcJrzr8ffNsQBJRjLx1RGqsgSfTn8NzDj",
  "key30": "2pEa3833Xt4XiWYYBNkGB3dNEAnreTwYfnTmzdFLigQZw8zPQ3kpHEz5neMsYguZhWgbYFrTVsethZmYXFWt3DY8",
  "key31": "3F3aNgCaXGSzdy5LZiyZx6Y3os6VeBDvYSMiA5o9mbhdJnyocAWh7WyHjZTsk895TkgAqnuaMXkvdpr1AWrbFgjm",
  "key32": "25Lpb4iQGxwDBFVKFwZFYQ6owm6cTThiH6jsP62uDYXyTFV8tSiN5df3hZJUCbBneBqDix3Uu9vNYHWfR91BLJ1K",
  "key33": "59NTMd9BW25NmJCRVz3pE8kQd5GpEqNaBiAZBX1Ya6rfFHhLBafLgDAdE59QqeRmJfWXESkNP4G4fYpdX1trexNc",
  "key34": "5fmYNko4gkfkxzqMzQ8R3sYTXpabwjvn3dSejr3Bd4wy7q2VLfbguHzjMsHncUd2SbZRvWd5n8wKby8qbevzWuod",
  "key35": "3oDZUj3AsE1kmXyN3FWePvUbt3KBFSfAwj2vxMtCRaUcHiSCn8hpzNGwvCx1Y9ZoQDgJBDwhXn5X8We8RX5zodry",
  "key36": "4vizDMWGqUm7GKjxNqyH2N7MNgLLxegaueDyvKrT55pHxFYZZGJCmsngiV9yChEVVNgVAhN17Rgc8LACLoePrxSb",
  "key37": "4RWLHFp6SyimEG1DQx9hdWs7Nmda5kaY4QfwdM5GpCXmtJxEjsXpzgbGpfrba7Sa99iVdSrvpG4W7uJbcsVTKbHv",
  "key38": "4oe9zuZVS2rsSDkDSnR2DRDpzNyU1CS7p4hTvgAcUw915urBzw5fX5QNAeVnkQekzyNsdkWZvuuKouqqkLBoMcBZ",
  "key39": "5jdK4XWXv1nyW5X8oBcRUy21EFgis2yqjHNAjaYnYNguvXU71VBVnKRMhr9aynTckvkqcfCJyEgUXP2pRCDp3rdS",
  "key40": "5yPwioFmMHKzbFp85M8dh4JTM9xFQcocR1L2FZf694AKMaqcWXAxfosgfTuUjmuBfEhCS98pbQY43WgsrkHrGua",
  "key41": "3A4BhQsMig57MvjypLLaoo6dDJRq9nEWrMqAP7xhNTddVn1FEiLJmyXK7oGLexKV6dKYrM76JDteBTmPjGRtXEVL",
  "key42": "4w84CLJA8d8SKgas3DZieD1Q4waF66EXgpMNDumvd6PpTcNw937TfpRKwiU17wkCEZCpaqFt3Zja46f6jnZJizMt",
  "key43": "2zV6qGAyTvSz5cUfs8BZR63Lxz2QFvpCXWMB9ojv9Qjmx9u3RUztUtkAiifjh8Dj66WkuoKVwABY1fQfyfDoBrpz",
  "key44": "2EPwM9wZm3Pj5BGFDtA77JcTqeVFDGqifPdRStQz6cHNz5jrcGq2ERNJ5QvMWGNDLTu2ovRqYjsQ7DcSjbmRPTVc",
  "key45": "3FTRUCY2Lt8uCcb5oUazvaZQEBGRnZWcJCsd5bT4HLhi4Sn7KGgS7sG7CFgkUaC1uJHdhM6onRjw6jgLMoVP5z1u",
  "key46": "5pjTkEEYGLKWirSs4rVLZgxQFHxFttStWgRaMszexxEG1ZXEzAR4tP3PubnzHDaExxn1Trt4Ey4omiGYwY7CvHJb",
  "key47": "4gBihfYVa8DD9SNEVvbNMepvsYdqA1m9DB7JQbxzY5dNxTypVtc9XSGZJZETtgfGdE5kS9RT7s2SHzSHdCncviaG",
  "key48": "2DsYTwhdpd8UFty4EyvYhRoTbcQJg3GoknpmjgANsbc9dSihxzXEZsMK2FbPaEm64cdU6RMuL3aZKSyJryG6n6rk"
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
