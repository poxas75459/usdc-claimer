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
    "3TxYA3wCD9TiJh2NbFwRvYoYEdzTrBwuYr5gKR9Mrciv83nzeMd2Pa9uhhVJSSLd8JAD6pWSRU8D73gUmBC3e9ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EhQLsSrNarHCxKLFE2L3SDwaVifaeRS436rqPPAhCHceVtGeNydj7UcPBkCf4abtn6B4zWRk1pahvDHgy9f6AvJ",
  "key1": "3y1iQ5y3YS1MCqwmEeN9Rb4BV12KA1ZSuZPGgKR4RtDhQmtoKKULx4GqAhP6LQ57o4izpFX11HqD3B3UTEYmnsRg",
  "key2": "4chX7ftyFjEpUHVEVp588CypNb4V6M5hPDA2FtXASvv4cGviHiztNZrrtraQ6S2VQvrzr3rfwAUwV6t67G6zUV8a",
  "key3": "4r8SgpZ6s6a9AJZvpCEfWYxTB6GabVAkpijup31RhK8PWYgVdY5oHBKNMY3n4gu25XaAn7hqKGbuKDEqxk2W92qv",
  "key4": "gEFzrSYvK4FSLte3eRh1q8YYyKyZEa7eH1P55uSdp4KXBcmm2y6UuN4fh3pZeKcHjobxLGrYEwp2SygARsnN3Se",
  "key5": "rTBbt4KguSYZnmM8QAbcUd5hUEv9EZwpfYPygc5efgy3RypKCRGqqjL8EdXgpFNR5gZmaCX3RKjg4EhGoUpiAWP",
  "key6": "5Enie1VZzL3aUnx2ywAC8sqxqjH1LrZd9yR4cxeKG6WfARDp7nzVYix5iRbFe3ZZrnpqaeLY7fQxAHGL5RX8KAH8",
  "key7": "4ng41Wr4K8A1339ipVW9kM4dSS3KK5sTBQPX4oVHYaL7u6ax6rvBp7mJw8sjWLFLtiDCC6qkfs8CcL7PYA98bjci",
  "key8": "5kX8vW55XXPKSVtTih7jc5KR98x59SqPjwxz8WHDYF8CpT7zo1P51KmtL3vNpLpqf9FZjSZu6yRDrPMpAfcFcU8W",
  "key9": "42FpcYhyysUBxyWLbgB8vDZrRHzSRYdjK4fRHwSz233c2HCegRL5T9dnMBETu9tZQroMHWeY8xRtjJUcFPu3xab",
  "key10": "4aryqyBURZQK4h2Bx4DSro3rtAwyZMMLrGFnE8zvwcqrfr7xVfveJwHzR6FAAhpqgcj4ryv5kbmXLWtvpVzRhkMR",
  "key11": "uNfSWE81Jzf3y9yapJgt9iMjTx4KcNTJP3uQjiie5q2ucixctJBwVb4BLWceRdyJG9bpahosYQ6eMT4LVpV9xNU",
  "key12": "443NKu8kg9NSK295kjXvebZr9Q5YtKCvuc7JisguAVF2D38sroT6RsP1Wuy7Rmm9bD1K8qGQMDtaVxDjnJJnLbHk",
  "key13": "5XakRJYoZBJqHWinCTaSgnfcWhp1rJaijacR6Bw9FueNh6piaDrLzoMDoHgUssmAoKgvDa4xfRntXTcmRc2TmwMe",
  "key14": "5YkAzHicCaM5FF7MdpXVkG1FMv1NHHJ37dX2MvKgLTBRXNvoreW9MBuB35cT1Xuux8afGn3FE7rSq7mFi1JuPdGs",
  "key15": "2GhMeFvCCwqHYJSm2ooSMjK9TrDWuHttbzAb9UWUxHNCC69NMoaygAH48dUf7xePE9tshLyrsz53qRnR1LJJFYfq",
  "key16": "2ZSrQB4NvubF4eUZxNvaRrS3RvDM3rW1ERpD8jU3icuGh4f4w4JjeE8qmxnnoXwTCio7xqvaMrrDFpKsCZqmPry6",
  "key17": "2nhZ5Ys5NCL48fq9sehLFNV3uWV9Vof8iAqY8fL8wJCZWR3r6ML8nELrGFXPWwXnfJVWBibtYTYEGzknDsgdhdbU",
  "key18": "4JSQg4DFWPnDNSfRmUyV1y2qJLScnuwZutgUNs64sabWMJdPmaejB3SZoKdREmNkunJrbxAAMMrDs4tU9dieYpfp",
  "key19": "spbFVigEpCXDeU77fT5SxZJahHtxoYrgS8zbocJjtaJhd7EDpiPsZH9At4zBJvzWXxBev1AFGS3AkoQTD21aLWN",
  "key20": "5LfJwxTHBW5VZgJcuA34CF8akBU4R96N5FqW4w3E1gDMhkbgENUcb5j7FTumQShWV8kVtWB1UFvkAmvKchqrsWJm",
  "key21": "4RAk5gWyFdvDrVmBFdiYQLRZBExbayf2mKJZxwspCf4sQxJchWSAbK5cZJqUfiJCfRBVUUi9G1WvVwvVA6C7Qjaq",
  "key22": "3nKojRuEX9qpoAWfeAB6Ld89fCU6GoTTf4M9sxnc9vAVBA6MhciidDfHV7Xn4PFXSoYp5JPsBL86fQetcjrPAQWD",
  "key23": "giQ6fEoxn2m7BaJCkpaSXWgesdXJDGF2g3aF6mEhhYhmP9MP28Hja2C3A69V5yZ4PWEyny2WkMEK4WG1tYXNJcU",
  "key24": "4L2YJBXBqrmh6JzYkhvzETVrZxArpo4cmvTonLSE5sdJDPTMDejTLUywRpKrauvpztSzkcVLysBfsjChzByTRHVT",
  "key25": "5jvkRG7NuPdkKjgWSR4Q1VRwVjVdVsT1MAHcndfmFPaNp29iQG46p5fkr35zNyKmZNYzom6fzEDCHSz2PdhRofEz",
  "key26": "2yMoo48WWoNHvNeYivrm9mkWVG2VC2XHi7K42D6uA3EHB4V69Qy9rPrX8N1BKw5bU5o8f984grj6EL2sN4DQhUDb",
  "key27": "5uKdQtRazjPAdqz3TZVRcHTecSkgFc4jCS9i4fjvmitZHmtfAFkMKG5zSCxvLUTueV9bHL2HeUn1DZh86FsbNa1e",
  "key28": "2LNuPFTnL6eVFEW3fymagap1BX45chsR7mULvqoou8BbUdBmDgjy8nBYjwGC4jMRrcbCQc2bf4VSgkaTWtcLqbXk",
  "key29": "31jGiTgBM9JN8yo2R7fGwdCFdf5dJpTjn5bG4sR7eHasuGVmvUdGvxKmdGobDU1t8bEZSKsAeSdcenDddbodAmmV",
  "key30": "3VDn8ca7uiEaZbqttdyXxqreEYXxcE9whjuZGLKMSZPxhS97FknNEWPDxnw2V9Bc68f4ACSoYq5e3dt9iTnuXUCn",
  "key31": "gNwoxc36297ya6QDjFDmQQtMKYxFnzQaDhXyji8qkF459hKpwc54rhgnrKuSUohk2DHatMWYehyLbWKfRBkiuSo",
  "key32": "34Xs6zVAJc3cMCUNAEAqos1cowgzeFavS5iW7i7F2TvJos8bqb3ErmP8iqQnSwf6w15tGteeAuokatMh4ZHEWTtd",
  "key33": "5T7ENcMbHKST6TojF9R1Lfosa4rBgDWnDpjwpScM2RVFWq1yM9tqH6qCchs2ADGzK3aSfRj1cux1z9E4is3A76Nz",
  "key34": "2W765MQLbCN3ZSdBByTsSXSHBc8XBnTXGsz8CLGMq4cnWPgqhYSxJYpt9vMUxSx72C5EHNvumiP5q4c59EacaKzo",
  "key35": "DcRSEGRtFsd26Mn3W4tqv4ynj6TYN3Tb6YYW6qZLRctTRkeHxVmbniPZd5vCd1WMYWWVfvFbjKfUZRDF17WkJNf",
  "key36": "2BtjcxpZd59YiXCQYzV51sE354yTi2kJfNmBY1Q6PvYKCVRuEcdEasvdYbegQwZzt2vFcUQGUhqVKwJisFndg5MU",
  "key37": "nAzQ3gp4azJJzaBZWfLKCH622SVjk6tojbMs1EZSkyQBXKN9MNoMgkyZXuhJU3xPgeyU922KMpCgAVqaJ7BZeyr",
  "key38": "3pXmxbkysLfcVu5vjPztdVM8V1xJ15RHCokn9NPcpQtr7cpsVVqCX1bwXruySmYyV1bJwRtZ7apa7kDtPGc1Nshp",
  "key39": "3Ncmb1JHzhV1uvyWRmLDzXj8JbpkXrEFiJczsqSWQthbdW55aDzUphQmsBVAuqTEdm78vadVGHfGmPb66jzhA3c6",
  "key40": "58ZV1eN1ddQMfZzfEZGf5Mqmb67S9dEiNxbExi5aNjCGiTvmCLNgs6ie6EvbuBXmUHToAxBRjZbMuEtdCMPFtpRn",
  "key41": "3RrDfcux6uz2LNkHAYtqkA6DrBqhRLxHk7j7peL8HFsnxx22qeavdnQEHoVHrkU4FBABar3WdQ2kBifQnf8T8jXK",
  "key42": "cMuHfRM7nWzHvjULkkuZwDzKNbxxowd3rW7ACVEXhG3CRAJQexFnX2XwJ1cSU8rAzfuycAqNqgs8pRejupk9z4x",
  "key43": "4bxdvdpP49M6SXPNeWLFJa5NfmEWM9yGT4SPqV9Hhedd5QZkB3ACX1jRgUcsE7g8iJynTrMoPXnBxbVp3VJtcFvc"
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
