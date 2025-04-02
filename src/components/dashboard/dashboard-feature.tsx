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
    "5nnBYNizkJ3womVSe3CvHp5Gm6DMAF2EgdxMdMrGG5jEkbdfA1XyyxHePXhF5RvRhffvRVg4wK54nRrWcN3cpaYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KL7Pv1BrKQtWBCFNr4DChET6KbxpmGFMffJ7g7s2XabyjLckd16ifC7qbJx4cssBxSHw7bS8TvJACaTU7F5Ntpq",
  "key1": "9zkcbKThiV9fJbCmJKdaKtjnJb8ehHWHfMcdW3XxwZT3hentKCDHi34k8FJV75GNxxSDRpbXNHk9oqDPEUPiMiR",
  "key2": "39jAy1TzJRytCLUQetSeNGMt3SnassPCoJuwtDasEnoQoozNxhnCEKLzYJRHa5vCXrMHatbVVbaTpjphmYcmS9HB",
  "key3": "2xwt4rv7ej4LTjuBXzJvH6itRcAhTUcDvDrvrD2cC5EBSfGi3TPFUbjiYEfZg6p7R96i76nnKjeqZYaJJvEup82a",
  "key4": "2pAtdXMYJjk7Z9wkveCYD7VECNbeomqQAuxXLhzcHQhs4nsw54MzBqVDQHbydymr659AVuxdWQjWEgqySnYdgwAR",
  "key5": "3k59khzcBTKUSAKcYW5NHPZzBnSf9Bb97fXDyr8Hh655T2DkFcAV9JKnHeb4YaTJQTbkUJLMgW9PPA3wFiBLSv2n",
  "key6": "4Y6N4L8y1uDaS22oBbxPUYxaPDPQVm6Fb4FFAFwAaKZVt2Qhb4uPoP93z4nnZYWwbSs2wV8zA5pPmwySdtcxejc7",
  "key7": "5auTtBNqsrGtLdpB5f9WVVR9u1CYp6T3AQdaFbubLrWxjA91QW8bQfVjH3m3VJp2KWaG8RLwUAd445DWAn5e4QH5",
  "key8": "4ViK57eF7kaZznypYziJB9khqSD79ESZHvEXU489dbyB4TKQ357ZNtitTvYs4wwrfKBp39RhGamfYkczx4RtAEm6",
  "key9": "ooCaz67NuDRErux3GtzbFHs5YJULZWU5o8VTm2NFu2VQ8d8q1g4FHnw3BvZaQ7Mgi2QeYu4mkW4bvyqj1dcxXTu",
  "key10": "jNHadwXuG4h7RVz4LRStgAYvBgjFctD2Kjzn1RKjFKKKagh3tUhovQwx63CHEnH1tH5iq6maWeJX4CqF3Dy9nDS",
  "key11": "2A2t1mZ1y1xMqcLHiYdc7kj68M7Jz8Dw4zsELfhSb1hgc4JDeB7e2kSeB9tkiaGPgWiXqXjFCkvYZLfQiJ269e6s",
  "key12": "7e4Nz7VFRPwKeiKeBLEFNMa3ppoVKX3dvkEJpeWSNBxFYpTPwKoDXShfX1upbwcDLq5g2Vjx18unTnMbn1QPzNa",
  "key13": "2tMPkkyyndjx7KbS3m2HNrwxjC4G6fmvaCRGDxQKEKouB42JbZoXzHkLtZ6zHKgTmAGGSSg771X5Ynw7yBGKqE6Q",
  "key14": "3gPh88ouM67hoRfQKbnogQ7h9xYRzkj1KyATRFP7cwkhfFa4M5THgy2pnn1v6Bm3odDTa6BSq3ivTMKuFLCrx4NH",
  "key15": "3QWFNbDsdbqdziSnBh56bKoe8Y5QMkHdm843UZb4vjtg4HvNYdufGYGd6tNuNw8CV2qskeZLjvGxWJKR7GcZkWG1",
  "key16": "2hWEushz1M8zUj3aVH5pRKHwGqaFTRQ98Mic2zuEu5giSWjyWETMWTchAXyuRi4YsB3SfXFfSUbV2qBTZfi79xaf",
  "key17": "2h2xtW2YpU4xg9a9zYFrWvAZVYsWptzYdYRm1Kai4gKBc11Bt1SXQY6CuAzamUDk23nxcBsnA1hg2YJsHs8ghCWS",
  "key18": "de8wAZ4h8TsU9uVTPKV9cwYeFpcY6JbCGvF8oJkPLhTDaM3JKVvyuNVcRfgpgewh1ge7P7XruC1P7k39TwkNpvz",
  "key19": "2iVmhbGpqtChnUfesgqLzNNicxtJ5H3YUdmB1Mph3B2YLF9eXPJg9VR53uRqxJQyJ7pQyqeChViaykjeCjMtqkeX",
  "key20": "JeDRmWz4ydqimwQQKGy1izQ6Nik7wSt5zZX6p2PUYtdYDv6Yk3VDJotK1LBSVNgpkP4hZPXvUoyeg8RoXhAiUgU",
  "key21": "5W7Zh8Witm4y7pwHgbo52ejVJ4S5RdSPeB53ahBDPMykeFrufAqvP6dPqqcH3ktzR1vjJ83nmVnpVwmKy7vzmNPg",
  "key22": "4Cn3AhrWBYoiC1wJtngUurzwnVAZ6W6Z8LnzMezKTd57a7mvFDEv6LhovzRh5wEi6FYhryXc6gLrLbBHFzPUrhL4",
  "key23": "3G5JyNKzXteHV7RjHWdj8sgRtaqSs1CqqJA5nSj6sY7uQc8DgoqYnR41GoiAM5dAwBNorHMGFnMfbCaHE7kXeuP6",
  "key24": "2ByvMfsbTo1rC6UxQnzUxtXhuGxvoBf4iyqsA7SQKqsxfvqHNra3Zbsb7dt3DTH2ky4qBbhmPvmZzmaZ9Fv1dY9i",
  "key25": "5PkQQP9V9DyDBmGNdJE2w9AY9kNoTodohxwtctMFEdYTNj5em8XhNJXsik3naW5knzvTM87Q1jgLxu6uPHRQLCT4",
  "key26": "3Na9roE7aW5E816qdEcs3Pc86i7hA7f5keb1vzk2vfBFhfps1GKQTKhyjhU3KGtH33DiQpXMNs8Hm7pXEeYYXzok",
  "key27": "31wDhsBkzzoMNTpjs4cxeAYXgscycEQwVp6n2YrvLsf7nbJyNBLGXEVFGGTRkz6f2MEmNUzDfYebhQVNnoZZucdH",
  "key28": "5qUEnqb9wyxcVDqTgUiLuH6xsPhHTZ7rfchNwCE8Qbcim9nfnH65ahpVhNiVMCqRrffvZvhezYTgSqUVM151GZ4h",
  "key29": "4WMdYjXihtxDvNgTeJnFXmWsrmAtaz2XLLPAdesRk6HThjd1P6kcKVMiCw5uarm1ZhSvfWUjMkaeHunJVqDdTPfL",
  "key30": "PQcwgxxWu62CZrduytJb9uxptvvgCvitDpGDfqSKduBoNYhsgd3D34VWeHAHAFUeymHZ6jYPNLDEYfDdyH17vBC",
  "key31": "2NfaHwvt8Ce83KcLUGyLPS1KFfffSomXW99eERrC5wf4wLrzuygcGcHqkVkcLcn83M58wfyFuPcg2rGSjPMQJyi9",
  "key32": "5kNdEy4CvWiDJrvRJn7Zv5b9dSzNZbZa1vqCM7DqhDMt2E3AfJ5B9AZSV5zuFyLenjCzmgmrrEpJS7WW9HX1Ehss",
  "key33": "4JYunaR1s2UuimGhfCXaNQvM1PW7QUTGLWSF78kRyjJn2EypcwUebAs1GS9BxG5NGHvcnR3WjB87gKxsyrZTDBxT",
  "key34": "5tm1ZiLpwEWUV4S9ZHmQsApXFFBEgqsNawDnSemhWKqaUvK1wnJAVwt4N8Yf7tQNRMhr9zyAjYWaUYVy8w6fdSEY",
  "key35": "521HGaUEpAAgTrVm7AM6sUL99fvvCCPzPw7agV3qbcoqeqDFbEvNviYr2yhMVqFboEpNJm82g9XvvqU5LMrLYybK",
  "key36": "jUfYxgMA7z7A475xp15QYPHFwBeFHivoqVbgqhNpRbwPBPCz2dp8LoxSyB2x63fgkgmTBJvhFRThA3i963R1FDU",
  "key37": "5RF8RCUsKhDsHsckKiwpE2GTWajodLSQY3jPTbrrw1nY1zp27BQmYPHzPB9jsc9r5hTa5cybHxxnHB32ouM6NuVz",
  "key38": "49NoAVpwZatGesF41gf7TPhh9iHrW2PifA9E8BQLAjS5ie9oCRFCiFBjGEBGujPpSrw3DeAvMhh2Hf9N7g1SxpN5",
  "key39": "5ysZ4z7Me1qZQKcM2ikTDXn3z34Lw74BZPVW72zB4cE6GZc4hQMuGW9Ma6trApwwSMAicC4MpKMiZNXaNf8etPKz",
  "key40": "3LLbdxx1CYx4iDiZYfRrRetFXx8fWAqq8sdkXPhmtRpD3C3tRgHyMeFqYqpqTzPpJTzYwHmPZMFyAKVmNEbXWLSu",
  "key41": "UPuomnu41ofT8bhr9EQZVoVnvjyW5AQ6jPtHvkUpNxMahtEMQhtHQWiZS1JDsMoEQ183N7m4cQpKnAgbNFR2kah",
  "key42": "4A5XRpn2xNSPuqghspYsBbMmnMxFQFnL4aa7NTST83yuiE2i2kdDPF2JUfVuV5HG3fF1N5zptpkSG22nyT3NzW3H",
  "key43": "3HshGGv3yL1Tc4skpa4XjrenZkpjtpZ3S4G1taJC3H9LsqJUD4SKGPsN9ZzwmzryJVE34tx1g3V6R7PDFD31x7Bd",
  "key44": "JsEd9bEXwkqF3hNLKZaV5YXZKdNVr3RC5CtEQNdfQUo7VE3gBxkDMU18SukmGZTCvqyGhR2p18W9X1KLsZang25",
  "key45": "4NaV3GCfTXXqNgVVSRnJiKnW6tp6Y2CayUQvGsQG8MkZ5TUsTQkzcViGGrdn9YqxkQKPB3Ti8KpsT7parqGvkHN8"
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
