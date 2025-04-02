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
    "4vbvcK7zhwjCjMSiLYuGBDEXY4PVoJ6XdLfYKa7L8Cv96pwFDjtzYuevsmwMo5b6Rp5MS8Sw6aouJp6ZY5avn6Rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i7vfMriGANNsLEfYkpMChLjRe7CEcjcaGPiveX7Tkx1KUpbnw7wWBWFsMa6jJKLChd2Ag4t7QZJKYcxeaj3xEQg",
  "key1": "piNS4nbmoCAh5vuq6zLnupKDp5AccTQkAJRYHrcx61bMBmpzus8mPB7EdgmD2U8rCYZmJmCSceaNqBoYBFqq7Rk",
  "key2": "5UNKj8aAxKqYTG54yrBUPP8NaL2iwpbYq6UCRgSn492tgB7Bm5xcSRmDp2EXMoJJauSo11Jv7yDkFCho6rdghiuP",
  "key3": "dZcpPrNz1XGxbHFqGHNYBkyoMwYPUdWkk8K9XgA7zhB86j5coAnuaufDTTo8FRrnZKrsUC3Puu8coWLe15Z7Ypr",
  "key4": "5UPT4xYFUUHMM4eKZfvw3baEB8Y8uZNgRUZdckpVk5yNEqYjUhr9aZGPxqTfTVYUT16fitCpH9xj4pqeDXAHphb2",
  "key5": "2BGHRU2WvLLFt6HuXC4Dnx6aekFkTRuDPTPxuDwjPdnqEBUckz4XG8ein1boJXwdR5w3cbaTdPj99LbKg4UAJwwG",
  "key6": "fB3x3MAh7swk2HpkUVMYQLVQZUCXUqNUvvAwnNVgaZkEu8xDFLoJzxcSmTaqzxynQ1bt2rBrCAii5rkDT2rDkNT",
  "key7": "2oPWg8R2eSE497NQGmKe49pMgfPrzxvQDMHvBxddYdyo1e6izAxg6N8ioWkN7Sa1eQ9CpdjFUoXUwSXvUGbokc8G",
  "key8": "4RSNsBmaKr6m9Ff9umDtBWn85K93YxQsws3YjgVfDEbmbDAq2ckRwXo8kqJgKDu5wZcv75zKnarijRypA6Fw5eJ1",
  "key9": "2XArXX1XdP2knhK2kVitMTLCnfZn93G6uhsVzPxb4kSHHh32RvgkS59Dft9Dekb5th2y4nM24EC7rK8fuxnFXVEs",
  "key10": "2fXsPJn4uFtE7wioj1hGfqDMiNjsghw9rnbv66munr1jiUxcTQdgBumkFZAuXpeWcyNTYeKLQBujm3xRVKNkbhgQ",
  "key11": "44y4U1qrTsnUhrkak4yuXG4GAFwEjf7Lrz916HrVN59kdZFUuJbW28xZyjxauAdyGSvbLUXuCis47oxWMKAwHP7n",
  "key12": "3B1LXcHS3UQZ1JoFjPYETMSuhDAGxYHEGREWhPkzwhzGTjtrZQTqHdfFa9uuyH9LASYsASeRvGry8hdURyC5HtY",
  "key13": "5C5MAavM4gpVNRh9muoxiLW32DxCkb8roXCd8XAk5SsTe5L5TgqNJmdHws1DQUXpgqRVsk3bwtQyonMF3GzHbLu1",
  "key14": "28kWo7dpT8YU5SjH6ZSJ8e1vpmzuAoEVzRRZk7CzijKeR4VesAGanr3ncCxAhbwRnoFKR68cAZeqnkDnNKLA1Vtb",
  "key15": "4Kja52RH4evbrTxGocPYqknPj4kQPmxeVcpex2wwRFk1WjUYW8FRKaRvUtgiFNmKWacu78tJphCuKrfTUyPTVoD",
  "key16": "pQP1PpnbWXSjQTaLY19c36UfjAkfvryh23cAAEvwqGJNLNV9mUg8sUhwayXnZRqMBbjAddi5Po8oPgrokEyoKkj",
  "key17": "5aWDs3yjkMouRq62nYvFawdfH67r7qZuV71K9ZzcLFhmELanvwBZJpTLGq965tGHjTNmL19eskfPaXEo7G3Vpr2r",
  "key18": "65eEFYJ2944mBV3irR39rdTR4MYYX1b1WCtydapdrpW9x27YkbbzJN2hhyMR8ynmFPkMF8bJ1C3n7WNRFod1Vnoc",
  "key19": "5b7ekib1eNsyEA66g3dsWBNHpvBeC9v94nJWvjRFB74iBSm436xQps8bzRFayFDc8nf6kZpnXG7tBFpLQprgVDxM",
  "key20": "4oQfPHwJXnAxSjwWwSioNCwDmGpuiZjNeGWonX1RuW6LkfomhWLS5DkwfNUvv4rRGLHzuKV5FepUtLr5jUFVDqWY",
  "key21": "45HztiV22NsEeRjSVuC8fp9xkoN5Cnfpr2umrxs29b6ppBtpuviYyd242LD8UzN2Fm7GcAsqA2fduzSDYgDtG9JS",
  "key22": "4PiuTNoVRHbf8jHMd2P4yoqC4g3fjsCNGWkSLTKEtyxKmwpZ5uPLLPiavRXNge21NJbcaJH3hSn9UhEYYRpD57yk",
  "key23": "29fpQtAx7tk3QQQ6dFXoV8YE9JuXJnjfwH1WEFYxLHyUvT6WzZRyg43N3ws7DxRBJZqv3ZM8cafoREthh9w1pMv5",
  "key24": "4stV1Tcz6GURoRJ17NKvQsMGZuy2cNYWfxYdweBpFUBjojJVifVt6FFSC5Lr55NoZgxBW1JNSPpgnysqCNMKmkPu",
  "key25": "DF98JMg7j8YkNow2ZNCAre6wUDq58thvhoVwngMjXzCLnLsX5yFQrZXf18n6Upg31QGdndfBc3C3UtMxEZxErTY",
  "key26": "2foWhhoec1LG7wooR1txEYbhxZFFLrPR5nWn5DRzXdYgAwrmhJ1mJToKeywM9CwBpsPDWnU8bG5eNbFW2AvzrC7D",
  "key27": "mcoj9iwUvVbPD4RMUJxsq9mtc2WpzioCvdnCXd734oqMrjwhxHAbuKpKYnAUxxQgSYiPUFWiWehUATgssRGMMdD",
  "key28": "4z5xhYUzhWJVTVy5sxHSfiu71DkJwtBvjdPVLvneoz4J5Vz5FeGbeAPJicoXLWQqkMujiiaRsDdfkn536QjCk6HZ",
  "key29": "3D7NWe1ZSk1hrrocrQPKCbiYPBPr957VEXE5264sqmtdxiVsyagAyPguzRLDG3D3hZcx5JcVYXxsNdvNMsUKNpTw",
  "key30": "jX3ZuvcHgaPCLFzc7CagfJEyH3tVVDj7TPEZkM9TGQbygSfk9nCeyDktEPTHJ2GLKiH7ro8XbsxvrFg4Lnp4SJC",
  "key31": "5bA3mecpoPhXnZJhZKcdbv21DmLuGZL8xa5FNNY1MHgWUP7kNfTTcU4HcWDPMY1BzgvEpHhdZiX279G65uq9npgd",
  "key32": "3MQH96W4WA1QMjJpfJTVfR6FFHuwWzevkd75EiL9Dz93kGgJUmZVCVVURaG2mQm7zcTj8MrPpcWSfzvr3PeuuYWF",
  "key33": "4gt5b2cdifM3s9fRp8okNXr3N9R5gfUj16ewdUTpmpH7cfgBttLMA2MHsjCwufm6Qi9pGK2wMa7yYrM86JR8QvPH",
  "key34": "48PNhQZDRKKwthes8Q4ihazn9rSEPeRezmX4vkwPsPnvK1Hqmy9kG41zveuzJbQGJSMqqdWfMXSTdoiHsLDHtBrG",
  "key35": "5n5uY7BPKtnmrAnXLozKTXhNQ7afX44bCaiZrvD42aEnH5DP6K1jin4DNMGw5Didhr8GFh82fhsTdy5RexJpyWAu",
  "key36": "5wZSpXch5GksPnVW6bnKFhDTF7q5dgXMSDboSrC8i2mEXY7ZgUnDHbKfqTS7isQCGgLqErkfL7dv3E3XGamvB9E8",
  "key37": "3jWLMRQXK6ivoc2TCUTSKGWhRwzoFsoYQag566qY3NK3xR18fEzvxZzLZHoaSgn4ZU9JWpnY83jBrdJLebb5bshU",
  "key38": "45UE4d7D8qA3C726ubNbFF6SvyzWGMCriboMsMuUa5nd7qrZ4VQHeYAfEncPakva7AaL6dPrKNnLx34EV156bKPT",
  "key39": "4kQXwVv5oh1DbA69v8ZX4FWppVjBeJSPYaDHdAsPxdXhq6LCaJBq9PV4z1eAr4tyiZUE1AAsjH6bSQxJftFCNpx2",
  "key40": "5i3Bnq9pbmWkDg5X6gLM8EUNhs6peknwdouC871uDdQDnjF6YcUtXxv9i9uYG9QK5hhdZm8CsKxKNTef4YVpeKUm",
  "key41": "4ESvorhcVs8rdY9dm1M3Wjmf4Nux54Ej1hnomez4tfbpXEbCUjumahr1fWF2wnFc3tM42rw69egwNXUKrKPrTtkW",
  "key42": "5MPoe79P69mPpsqRnnbrbDE7cC8sjQU2zLKJs3TsHKTYyZNbYbrPBdKHbHyYioV4UA2npyxb47EtTsQh6Xtwiah",
  "key43": "4y4L1cvx249pH1k28WJLGEZbkS5ADu6yiKUXgqdp3yFUeQPaVbGHcvsSbgh3vQW4itMqw3Z3PJkinUnSaU1o8TPj",
  "key44": "MJkCG8aGNt4tDt5ER9dndSnFVxSFFCtmcC9Q8dErfTSg6WrxT3KByq6ejSeK22csJtTVFiY1XPeZg8vTeJ5VbUV"
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
