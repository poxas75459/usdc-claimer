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
    "bkpXw9d2BCCG4JLcY99xhnTY3F6atqJwACpVwKREsADki7ou8CA3E9uiiMjXDkTkzs3FUvSYX9NWpahevCm53mv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZGtv3UjDyQ8gHAP7dzoTnusD9uhP5exrz7ZNtTPKbTpkSpTx8McYkUNGvhJTbbs5XBoeFmvrS4upZeB98JDP7v",
  "key1": "4HKD2hmj3Mn67ov2wEs3siygiVVtgYW3MhrVbrBa2FmstpdrYeZU5FaPeBiEi9NHYcCi6UkoEzzNnPkr9fPPiNxx",
  "key2": "5mrVzBgNgCxQ51pjDbqjeD1RWQtmS5XzKLXPbWavfydhdJ2ER4znYtGVMSdUDNPrEpAoKQPNkAERv9B3uCQDbjij",
  "key3": "MYJBgopJphCUeBFayhHNbEK2Pb5Manc8SmcgrX6podbUiBKZ2YV4oaxFTjhn6qDXHVymxW6VDBwSSbYLaXN8mqW",
  "key4": "38v62GwUqExNrMsQZLbL43dWwvwJAVotSoeRv9JQ5TjhhmWGkRMysY3kZJetj5pH5ka1W3k6qbJQ3cS5YfayyxjS",
  "key5": "2ETcKBNtc6npeLKFuLV3VwUuuxERduQGsVMQY2KWarhASW3TfzfohDBiDC3AiP4T49MX8E4HQSbwuJDUhHy8VtE9",
  "key6": "5AGnc2PFQZy9sC6reJ8GHinQLFVUEToEfKXgGTTogBP97k6WU4VKeRdUiqsH6RFSL2ur3MaJDNqRjoUtHjfUUQCa",
  "key7": "2MwSrZDSb2dJz23QcbCnUBpyUDiM7WdxxXr3MYxveA3jJJfG31SEUXPvZcVeyGe6CT2DqxJEtSsPfv6WEa2wuuEr",
  "key8": "3zR5oEGumXbJ3UXFUukjpsTM5kKCpAJbGbB5Q4aGLbgimeR6mJkepNSQcbT1NYJaDwvM1yPVxn3cy7J4z9ecxBDX",
  "key9": "2GM5t9vL3kDd73nVpDpnrphhh5Zcgp8wAHujya94WRgESDzUTshNqR9oQfo9K1HLcbrBSS62WYnjoBYRg8SKwhDb",
  "key10": "Fzk5VXq4cb2YHVeK8UegrYJMrTjwafmkpvSWwTVT7JSr5QyPbRNsaNqtdQq2saLH9o7nQNqiBrag1xK44Uxktt5",
  "key11": "5cgR5J72PSN8PAVXyKDh3wdG2YTsNjDysVPJ1mPP3YYSZSbdxV9WGUwueb8GuPUjTAt23XdiiXfKxhoQ79CURheJ",
  "key12": "4UdasFSdbSrk3k1yKsoKDjENcAgQwKtsbAkAcWa6iFdqfHYPZGWJZGB5Wtj4MnPjv4cRWJF1K1DpCwv8ANBFzYV8",
  "key13": "3CBb1aBpe89SpcMJbGCsr27juENNM9JP6XK7Uvy97e2QStFsBeEhrDERbVccbq4MYRpEHvfvrKTdCe48Zfo6DYhc",
  "key14": "65nfsf1N3taoRJdNd5g2wfeF5hUv138ZmP9X5ksNgFHcDh4aCpzfLGgApiobzPU2azHAL7XoRFrbS12rBMkXvmM",
  "key15": "3Ne1mmZRyZozVqEzuTo1Ed7Lwc81ebnvurmC2ruAJwMF4F7WVRydVCcWL4pcsinRMPFCdFuTJnjpW25HX331jHhh",
  "key16": "4RB7QgereT26zHBnTVseYq12Tt3Vzf4WDAXjt75WBviQmySnUvMQJJicb9Bh9vA3AgFtjMFH1cVoV6cWoiwZQdWA",
  "key17": "ES4FbuyzGAnNmWiisVN6r9UW7Ac6nA9SUuF7VoctMZhFjxHMkN2wKMTB9Hn94vBf9a1y7EkZoCJ4g2F9FwK9z2p",
  "key18": "3sHtbEsNqL4LSBLZmbMMtUcYF4TMnem3S5qnodZTds5TkMWdqDN19RDAMvC8WkLpwByFGPZTjkkzm19DNJ2bKSn1",
  "key19": "3CCb5K4tTf51kzJCbtDRnCzpJ2jFnjyhhDJyeEPkqs8eRK5Ct7whhyoDu2mj4FTvbR4rSTy59xtRX2pUF3XB6hoW",
  "key20": "256hyzosMthvuoFPpUQ4KLr9bhbknyjePXVvEyQCqJp6ndxNUJ4FcEyh3Svop4eH8dPUN83a4X3Bxa6jLGhanLPa",
  "key21": "3EPZgmbBTNP1AGSKhuZXG3fMgrCjJRpFxcJNZonRdKjxpEoxNkdjLPQssBak3V3oQ75mVUhcxESz38MMb4ULsHyo",
  "key22": "2RxnmC3wEgorp5wX158D9hQBsDEZTKZz9Q7L7uGNhFnPRRBRC9vLGWdAwNyFJcganuraJ5SRKTuER8DVrZ9hXbHx",
  "key23": "zht6J9L9YX7tkf7StGTC3M4aVQC3NNEC96YnZso5Ud4NHM2zxct3SnPECAMgoxpEppFujvPQYsz3JLr7VjPMqLN",
  "key24": "4gQFPgPxZAqXt2RuxPqhwHejbySrXtEUNY1fRABBCj6EdCemb4jTVX4nFeNB6CRcsWxW69rcXS7S5xmUGj1fhzWK",
  "key25": "5MLyxNk5epjueEM6eafj4uSGBBaYjT2UFRBbd7zTz2rEpP2GvPnuE5ifZjiL64tjyTrqDRBQZHRkURGiBz6P8KAa",
  "key26": "4NKvu4GsuBkVTpRANCciVsYzFtEoJXQ9QBJA5kpDSH5BCQNL4nTFKdByQbaXHoXbWUK9dmk585wxhsd6NF94j2YA",
  "key27": "4zKp3TyuLAx6ogweVZgNnJF6qbmk5tV55D2MAgaySoFNc9vwHAKB8ojMY1gSa1jJo4u5s9ZZRKuRf3bshRsJSi6H",
  "key28": "3D8xnSAcHcbxDTsLnGEstH4QimcTag7o9ZM8xAGKbXCbWf7QxNEd4skjf3J9DNUNXVT8dsFZCcRPw8LgXWU2Qu15",
  "key29": "4ii32VocTDvE9JNvpLYrXkTZ548PemytmEk7DNz2qwWyWqwHSQMBfLuLhKrUiUTUG8jF6Jd4ZUFrvwYXwLGqB5jL",
  "key30": "4AWAGDAucCvWSYDC4RFRo9N7zFpmUL4Zn3dGrPxhYeVtNAfC2HsCoFmJ9XwMTHPGTrDPZYF2vsiEMTq4sJM36aH6",
  "key31": "6asQW9z1b3JhEn95oWwe6bpHBq1ipubazeJ5TE41YyuaWMu5k1fsbakXAqhUgXUhx39rus5b4TodUyD3hrztr3Y",
  "key32": "3xEY5LoqYrW1poQB1xNtZ93952kmjMktzpur1baAJQGRE6v2bMgz76ZTk3QxZRa6LiUankRvJ2MzW9bk3FBpMjt4",
  "key33": "5dQ5hFtMRACuL2YQNkBn3GDm8UkpukFEvPNDkCm4tuqW9x48GvoFSssWruyVnJ5zpWEH5bdTGjjxypxrFATwPJfg",
  "key34": "5xKi8xuFgrqwtY3Ygg9gwKdpJ48xWfBMSoxZVtePDNo81yN6eqn3nr9HQbnmQNRpFY3XjSG1pWX5DAWebP3aFu1B",
  "key35": "3UAnChajcoVzKuUN3Liev6nT8QzxzF5FHuT4KsBcMSV74vxSgENqReeqrNQtGAyzqjPjgHCHo9gsYnBdr7EHBzyW",
  "key36": "4EsKneJqyaeEa91EHSNo2cgaHjxktYb51VpfPayefssiNoXvEF8STSLZ7fj5ZPFDz23RbybP6rU1B2TEJxeunXo5",
  "key37": "3p4bGgSWHNXP9aTp4nR2mqnGAQrHub3GmaFBirn9Vr5nTTPtQauumH1PpyUP3dPKhDyDqx3YFw6DeY6DFqocawqi",
  "key38": "39b9XSbkmFwnhWXDig8u6kJB6kYSV42zrj88tHzPifGWpvyo4Nr98B5JYTMBP5L6UBNKn53Z2e4jsdF8L6WFjj4H",
  "key39": "3i3SpLHMMmSUqmCDGquZe3PkdeiVU8tQAiSZgkEGFDtCNaHj23HoFey6q1ycrAUFaYAnRrbdK7BkTHWkt5rwPf6K",
  "key40": "4fjXDfzLoMds6XQkZz93CNmxuNDG6SRtGva3Q51WPWsw5gHYkzhUxUoxXTESFVdgvyqhf43obarrSiLjr6fuyCMC"
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
