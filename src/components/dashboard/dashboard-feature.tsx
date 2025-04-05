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
    "5ztZDm9oj4JyEmJxfmDkgHTMovWqq7DF3ih1j94srNwRfDpDvKjHt6PYnLd5TtuvmTbDZk486KTmogkvQsqaxyT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K2Jvxcrbm6siTAMvLbLepW3ecdHJQbm1pHFtXxg4fVSkRLP1NbxbjiJH1ek3hxuY1wB8DZ3YUT7GskGQKPyZLBA",
  "key1": "24Y176LxmqTcJ5NHsBLd4W59cSbhYCx1sFEC7vgaes1wfvkiGENUMExUgA6xtezsjaUrt4cnJG3zatcr8khv4LhD",
  "key2": "Q1xDNV3h8QfSVacFAbN4qzy5NWfU2JHjndEoRjZGvNGjq94tdFvTxzSiwiyzaeRoH4j6hdMJWnBY59g2vjKC1ih",
  "key3": "CvM7VMjzqu4Be5Fo4nQtDB8hAAqzmat6oGZFNycSPMM3Xev7tTTEjGrbDLWvPzNqKrXn8Z2cDsFWhDTXTNf2SUs",
  "key4": "278awBrmhS28guELWeaeXTPbfUT7EPy3k3ueqo3tJ4SfxAM6Ld8thSv1pJ6QYVrEmerWXv74eR5hsLnokxLtEBB6",
  "key5": "VKQS77Byi4McYM3WvhR2DQkpt8WmsmhYCcuFqpZkxgsBNTkwEkpceAMBqouATcymF8fGVB8zSxLQrhJDtsdqUUk",
  "key6": "3ky2TiumuBQa9ZdadtY6jpz4YGHCzUkxDKWhT7FkXy4L4KdTAapodmGTUUe1CawA4H6HEfZ7i9nYwstu6Z1qvgEJ",
  "key7": "4wSZgFibjMmao8s3m3scTho47pVxCcHTUV2LHo9HeKxd1ejsHa6nqt3eEVRSWLoghxjrCjNoEYcFHkSvQLZANMeV",
  "key8": "5Dsvch1bjozDn5mxMphn4iNrH84LsrJ7GGSgi2kofpa1oSieCSQH3YWax8yjihoYZQjtJrsft3AbqyJfAExtdP6Q",
  "key9": "5MpvQiZLni1fHyBW1R5oksVKDKckeLQpsscahV7RjQwnbSsYvUJ5UG3mEUu1DfENfmACYX8wE6vzUodcYHq44WBy",
  "key10": "27kdH9d2SX33PkojGLsiRyk7P5o8FnBbfc3Uaa1tP8E2TGPYC54ui7n9xDeLyzBcPxrFP4AbmF6DfiNoYoWgN1Yb",
  "key11": "486BK1zwZFZEYJgkbZsMJXQju9vsGLKh73SfPedobqEUPspDQUHGfLLH5nxcJ34f2SGArfaakgzm8Z5VEmZY6sUB",
  "key12": "2gbYMjmR1w1vbGUt6WcAR8fbs6pyq7geAEEyckhdFN71qfG2wMetPndab6jrJQyDDDBMbGHDgo4ekrbrWzHo3Dfg",
  "key13": "2TSwr37TGV6yRs6oLZUKtHE5iJdQEVxYhSpeh6QCvorWGQBb8cw7Ds1dEFW41NcVPH5sRAHCCFdkdMbeGFhYgJWY",
  "key14": "2DYp2Tfm5gWCqSzVqPjsMYFjLC72gCfroUedVmrqD25uuGLvtZryTPAeVchzPxvD1RCbfPMgCkiM52PXtVpYhDQT",
  "key15": "2F56cb4o7jVpRBDyV4hyyyerXLNQcurtZEoRMcrzy1AYubWpqByzB1KAwvZn7AcGbzazZPfPpKvmuQXxdEBc1189",
  "key16": "4jCSrtSuC4mq5U9u5D6xT9wDH244ztxQmXRWT7ucgH1L9GkB9DNzYnV6JYSDtQnYB6rEf71utHApriTm277DonCu",
  "key17": "47nY5dpoiT6km5NBvrgBmwm3wwZdktWLo3YPXEsp3Fon7b8p59HwW2Rp4MtdrkDoes4uWzCkxBwstDHCstGcmuWd",
  "key18": "28BBBLexaKrAWajb2nZqFEt9DDnxPo1Kq8QdZfyns9eFsmMrWVG8oiGreX17EfxDxUdCLzvcUSHiTjY7Sd7JeBX5",
  "key19": "5d4za52e6xJNpEhuDfHf4FCCG7EXNPf6oJTisTNWNUPrmHcNy15tTHVCSubdmdWSGnsfyvmrjUwfchggowqmCesZ",
  "key20": "4faKPwgygBxThCjkba5q531aAWypNDu3mQKJCYzqyM5VcgQtzsozWLbCVMaYDkTCE9RKet86KVmJgqqyom34tkgy",
  "key21": "5F7sneQ9g1PF8xzAycmaaxkrTtKE3CgUThmtSXkXmLwJg4kv6soSa6vGMWw3UTQHm5HBVSzGZkfr8vZCqEqdR14w",
  "key22": "5Lt4cuva4g77C9gDt2c9nURHt2rwQMuFdN2NYp9zjD5w8vVDvjQU65zahfvUub6nGypWqBCPhfTqh3g3mdREWx8w",
  "key23": "4skoWUVU7Esq4xJVnXwLNdzj4R1EEkMPDvdDhnRjJuUr2Nxu16yETmZ6LzMqYKAggczkVHGb5RhTpV6YEVebVp26",
  "key24": "2pN35Ru1mN1fBDfFw1p6n9f77gF79qtRuBnx6V5CPZTYfAHpTGHdRMiNwG7vnu6FP1TqiFLRLd4mhvdjCLpm9zuC",
  "key25": "2FYaTMc35PqD9CM82ukYxqck7wwJ8N86xNsVFkE26KAEQYfwWPS7QykQ6mT7Q2nw7y75ynybgysLVud5Tqwi6jFU",
  "key26": "2nSwr5otH2g53bCARdi5U38HoyGfgWXCrhrs17r4GbLNezD7eTTpcVAnHpLCDaaGg5MYyByUL6XVjtCQv1GJTMXy",
  "key27": "4fu84RooAUvamGA3zCyqUsiyeztv867URafasyRKiEnGEn9xBota89dF2gp8qd9gS5oTqzELoM6g6uLz8UzQ8NPM",
  "key28": "2h4HBdZAkqoiE8nC52WMgwBQkzV3SMxG9h6kxMBSK2q5PZEdRc189cEVCAQdNjA37xcAvd2VExe6MEBCr5iPvicM",
  "key29": "4Xk12h7xLeNiMbdPKaAM3Bang1bkCkTzMgwbJW4byu7u1xEWHokocB4WFkB1h3dzJcoHwDCjAKGnWuH1stEVGaqH",
  "key30": "3gsgpnqTypLdr9ypQRY6nUdFEN2PgSuAkyNwGvtmkV3tWA1MUZL36sTAGRTmRSximWjNRGgKrqo1DUcpMkrg6kpg",
  "key31": "5xHraA3hAKvtRX3Jc83E1GJ9cmenYWL2RYvVJcFy5NdW19wmatPRGuWatEcubYMnxHj1PZSdtDemAmxsDNdDpn5",
  "key32": "2JM7WvEAdc7YhH6fZuuxo5gkFfefu4uh7cB6zQEbT94i3iGZsjPaEjw3ce47wL54s51vwmYtK3Ju8CUWNwZgqGZe",
  "key33": "2DNGGhR1TUSiRM64APYmpBKvatvCNLNpxLZCHNqsD5k3CMJizo7zNTNjC925R66Q5txVvZMDxjTB4PgsgDT9kXUs",
  "key34": "3LFpTai25hWpa7nYsjB1eer8rRKHKyenXY1vZ4qA5N2YcQ8KDRYJneoyS4qfW7GbZisLjLowQEbcTvannUZPsjNf",
  "key35": "2VJAdQTw583MAAJ2UWAXb9fspmFdTc5Ai3mTnhfXKqDUdyKVwA3rCnoBEBjUywC4KgFcizoo4AegAEE3n1AR5owg",
  "key36": "CBmt4doVvBsE5YfBVe9JW5X1qgYGLN4jPpR3ArhtTLGSAYm3XhBzb8Uz2z7A3NF8V3SrrJHvvQpYRuwgopzpkuz",
  "key37": "2TfQ6KdWmpR9kqxucJv1sJ1X3y7QShEEPjVq9qxHujWwXHCkXR2dfkMNHcPHyNUk7AsYvcdLKN3yzAZPHR51Jxgn",
  "key38": "2QobKxkAsD8oppqfTt7ZRW1ycPWXLHuHQW63vU8eHYoUsQJSAPRQB4uU9dZKUHuU3oFzQhkJAVfzK2X9iUY7DFab",
  "key39": "3izqBPeggKamPScF3arH7jDV3oRuQJi278WnwYjT3wX9zxPwb2doKtaFUSmp46fW6bFySTjTgo56GXubhyERd8kA",
  "key40": "2ef7z3jfLHZspGwcK9ce34RTNo7G6dhk778dQdZH8Sq9R5j68hHRKPF2zG5owWG5N2XxZLCPGMGVdTJoPHrxctnp",
  "key41": "2t4mBtPqk1f4vYNiXbucJGuxdMfZ3Y6bguqmgF3HtBFEWN52osKykKVmkFLzgJ1vaELpVG57Ftsht8yeqYCQZWSF",
  "key42": "4ayUtbAjEYQjsRDC2XFR6gno1cUTdWQNs33RtRxR5xJkJyM9ED14KJKirkvRdC2Go3zabkHCFRagkhWZe8F5iRKH",
  "key43": "3UBXD9Nmp3Sjqr16ZJJYk8Zws9NDKreQuqSirEtnvxpAdozRn6VYr3GeZCX5Hfa5q7U26CVjDwDyyUzjHQ8dag2T",
  "key44": "3JUBummc7RnbbTEypzoZqQZsXQWbEp5igTwLgcH4G6XxWMoC64r5o9kK3QmfditDAngdreT3PQTewYtr59kC53tv",
  "key45": "38aD4pWNCs27gDhw5C6mKyjepbS51SiCtFBeKcNdTo7eck1KpHSQ54eCYMbzhvTRZpbdkoi4SqCECX4yfPb5N1D2",
  "key46": "3itG9n5odFukjfR9KEJGC4agbW4GZQjY8bD2aRxZ1JA4viHTqdsmyCQhScvYsaJw2tDCJr4VAqF9YWbEyi6jDhQ5",
  "key47": "5J1WFfarjVvs5QnU9JzgXPmRhHyppJH2NaA4XEme5Wmnf4bRLA2CykxKjSeqjvVoJbY6rMruf7drggzGD7EVbdZN",
  "key48": "26gH4iUPiPckeh12YjHGAr6g3RUmBK82u4HWbF1PUC9k5agjcK8uSSUqWmrhNntUTfLLDmcAGNhbAovk6F5xtVCL"
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
