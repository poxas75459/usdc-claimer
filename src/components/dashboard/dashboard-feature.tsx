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
    "2grFi92MpCrHaeZzpXEkSnmU2Bzdw5SG2hs7YU555fJMJnF77h4R65zboNAru4quUf8vhEJiLsW8FY2vwiGnausD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rmgv5U1hea2QPFNXob91dNajiUURawbvupdRoGUjCNUDEqPDbMvTMu16R5S3Q7SAWuKZUszpTVGzyDU8VQaCYpg",
  "key1": "5WFDR4MZaWpLe8wtFyY5DdxGr4YAFMhmqdSB2fWRW6QpAnR1B3D56jy7u3gLHN3Yy3E6dVi3vFMexYmrvEDfG9nh",
  "key2": "4xHpEAmHiJkHMpz5WTqx9YQX71t6UYqebPU7nqXXF8YCnFQ7yzXHFj8zrH1o54paDgXufqkjM498ukbLtZMZET3f",
  "key3": "4vpV1RSnVYxvdMs8ipd9ATUFTqzG79ZwZ6YQVZdk7FE6D3RRTqC456JvYk8Gax9fRHdUDxz9xvuV1qL6MBzPQwWN",
  "key4": "3sgYTP6kU3VXq7dMbp33RHhAs2AiHNJqVEbFjjoX8Hb8cN6M3pHFALJceKDYugEaUN2ZLnxACSsc4LrBPMX54faz",
  "key5": "dnvUw6oB1wKUzj7YjESvYECfHA2r7Y4BVvLyF8WnxoQQeiBux62qaZnVaTytwcYE8yT8avPT5EHui543oFadwwY",
  "key6": "4iNu3bCvBxAREz4459mz3f8ZwvWfdFM6z8XEBh5LAcBEdEHTZtxPGoirYAG3Kax8Y2oB89sJjP8u3bcHNAfuHQ8e",
  "key7": "4P3TXSfQRJXqxMP1Ep4MLkyitVj5eJxk1drvZ9mYMA1HeeazyzdLyrhR1RHMfGC6j8ewhpP5qo4i2mzcc1hYGGHm",
  "key8": "5u4kKqa4Wfudg4F1jod4AoogcHJmXMHfhpoFy4wfK1xoo16sCNLVnFGkibWRnALB82k1N7vnbAGJDu7vd1md2Zcw",
  "key9": "2iNAM3VHErYWhmE4EoTAPfaiV2fUGoS4BxMqLbULbVvkPQFQf9qewNoFVLKCxsDh7SrmhBTQAVPMLR3h88rdkwCT",
  "key10": "5og2CQXuDpcd6YfEgSf7mwZURvk8JmHMcRFuRuN23voi6hSwJ1iMUjpW3QUNgqkVos6mq58UDt9UrawvQQ2CmRdD",
  "key11": "FWw3X9W7Pk4KpDy3Wpc8m2RMvriK4zMy4ot29ocZT5CZHQQBekFc9xAtd7Nb8P47bEQ9uZK16AGyGsbMjcczC9Q",
  "key12": "3SQxGN83dTMeANXavBsCTEbAQVsRZHDKVgccm7ZJYdH6r7AM2sjvqjs7UcyqjmoeXLvby5v3aP1mmgfDCnPEUqKC",
  "key13": "LdfXFuZ7JZzeq9K1Sv41fpw1ewpbqrBciEpmz9uWJU69xbfrc8eiiik2ouvnywqKoSBjapgnC8eNKsR38i6vgZf",
  "key14": "4EmFscXzitR7dAZzQgAie4wWYZ6oPt3ApRqwLQn1E5JKK745qgy3HXBHkJcdgkXkz5tVrDQCsPZviLukLbxy9uW5",
  "key15": "2A7pQgfuvkpzmy4ajAHd6Xo6ttC1BZU9cdXqDMvYtbxGkWfeh6qQsrD515YNcfXtytTEhvWMb3F7nNhK48FcXj9N",
  "key16": "4KHgoryDvGLxwUhfUE6YZoPprBgZdek31buHjKpQx7Rm4Ka2XxJYBZy9RuAVhj798mQuFLUUMznb2QkQZZzhBPd1",
  "key17": "pqQ5ndB3tCA9ixhxUuNGba7TSAxH6SQcTrUUZtFAbXLKVAJ6qnPvUCj54MG2veDybBUgm1aRdD5M1DXMAVgRCzE",
  "key18": "5FGXSF4Kx1TvKcLc7jQAzuauVp7z2cb6tpJrPBhwbJqwYEVCuRhd99esxs2UTfro8c2B1muLdtwEE7U641cYQQ44",
  "key19": "38yYrP6u2TWna6MsTbBieaiCTex15fcF6DxdF4FctWgasCejgovqViKnoBy4LFob6Cv5g6xWPoeFxcKaEyeh4gwg",
  "key20": "3JMDL85JG5j1tdYvRkQQRnRjcPmTRkFP1wb9mzJYusHK6KGvLSnbCgpz2L5E88hGzttXiKMyy7X9AwE2aeqSrhq9",
  "key21": "2BsaUkwkFbw5zBp4m8CAhxN68TudrRgjYkffpuXAGJAJM5hmZ7WpFy2oT1xpcggVtxc6kHz7xtdM14N6aqmByRXj",
  "key22": "5Aq86d3VjZxNS4kdNkMQcXPQYxyzmqcQzM5YGJhb68Nngyg7RC8QijEAXyedArv8kyMmdPtcMJGmzXUbwSYn82vg",
  "key23": "625zGmo9YTAU61SdxKz3tUd4hkNmpAdRMVCYwkeCbeyRuudyc1a7SzXAm92p3xJiCZkbtyiqCq3WV5iqAK1Svw87",
  "key24": "4Ah9AFHEN8LbqUdAXhCdLy3CG7cRtg3ifB9uVd4unTBoRXFgrUNfDRVEN98RGhjdYb35ehNxPS1nGAkGUEnYf4kh",
  "key25": "43oEoMJzZedKsrhZTQg1LwSKMVGL1mMBtsGstTXBzAbfdHMUPLWzj1VsKL94gtPmZPGDvnbzTjzscpVdaqWsiZnL",
  "key26": "24MtkzgUuc9C882w5FEDMY8r8ZWPimmPA13cWHBAtJXj1Tt8HjVH3JdoQEt5TiSVNUpoSJGZiZZyPsM9aEgrZtCQ",
  "key27": "2aBrQjz7FpV8Jn8DxSUNRSQAU1mbATZSNo2ft4uypMnvkTjwhXtTM6fZtfuYa9gkmSs9yG1EYwKSig2Tf3ZP8NNc",
  "key28": "r8LrQA3mBHwozLNeaW6HsezA9TiMSv2y6ofW3MsfXaR2aNacdimX5Np5AnYX2fb6oGJiS9Rdre4rMsDQGN5UE8Z",
  "key29": "5GWqv9hK7sV1E9mim3RDgao5rXewGMgcaatST3RKsHA4CRQ6LxaNvjXTBXzUtQam4y2Xkbv9xxosMgog3SPsq2Y7",
  "key30": "c72shbA2WdF1GsDxYqn9zBcaHToH7DAfMh9985KiHLfNV55Si9eBbfcV5RhFwE3rkTvJyEaNRRmeuL3NUa2q4GE",
  "key31": "5Ta5FbA8a6U2MTBWEyX9ucVE3Q4hdagTkZx2Uiw94tNsBNhVjoXkfKMqaE5JrzNgZyu8FfhSWTfBiWzfCe29ptue",
  "key32": "2qkz3R1zC8GKcZh9bwndUwDrzzQip5zrSqfkuw5Gm6cAk9asTKeanGkEpWpGd5Mu7ok5whMV12DxsAXnGSDZCfaA",
  "key33": "4BX1552Vc7qqXg3NJkHqdKwKL3ZTxKR1eiSjWeFfTbkCqRWdFKfXajpzBsZikPGM3fVpojGwQr3kveAzoAZmpXUp",
  "key34": "2oPztsXVgNNyEaWWVogsAFku48isBrjqEW9Dyr26vBDJbXynDTspGrq6naTNJDNaYXercXTJbCZss6PAuSrikqbJ",
  "key35": "5UY69LeHzEZcC7F6PFusrowRkSHJhAL2okEbcyeEJfwtncGad1RiqQaoVMBQdkFfoBn9veiDTWTaMas3wyUMxF3e",
  "key36": "4hfkQjSn7BDZocB1B1FZLSAGJXPezBAMqxEJiaibYzhg4rtKdXTrr298Jve4qXoWNJRU4GWiiRrTxmrQCrdE1qaC",
  "key37": "nvKdtDmU57gfjigfYh3VCsxL1psWXKhEzMkojR1NXLRM6NtzcJze6M3DrQQcxYt8wMv9zbxNTSaVoyci24CYKNw",
  "key38": "T3XJ1y4BYxBW8oduK8zAJL3RD1d2HX1kH9urxVAbdqCScTzYrCm2erFEhj5nH8bTEVLMMiVfiqiopSq4irMz22r",
  "key39": "5i8gTQLaYtwmeEET7RZmrYRqXpr5EWi5oWWo36VWhoDg1LrJVYepx2mFC9mqMKVTBgSyHAAXJK7P2UrG66DWtfrh",
  "key40": "3u6R2cR7X3LwXwHGndYgx36kWLZ15ikR9FSHiYyKcEEwz9Mkf69WoFthC9uRuQ8RN46iKdjXnNUrd1HU4sZQcUG1",
  "key41": "32iUqNwYAYa4HY3ibucYsUSpk9E5kWh4ZawgBYK6hUWcnpxskQEewt18tBr2bbN7TNTKPeyWFgx4nByk333GyhGV",
  "key42": "4cccq4yUazQVkGMKW7JHQApmVkd73tpDnkmon4f8fiyuV5MrW9BQkBL1tA5DmZ4gLvfMERk3upEasrAqFR17EadE",
  "key43": "d7d1fzo9iT8GVbFwPkdMZQnNgNY7nBM6b5vYffsMufGdBa2pzJxBRZ8nHmSsGTdM9F2EtHA3VPcASsTMgYFsqjS",
  "key44": "35eUuknvxZ6pwzqnHJ2LrH6RVL9Q1SJYwexwPxT22KhShGRCUyfwtF7HT8T8aWthiseFpyW1EoTgAqmazkDj5rVn",
  "key45": "5JqQ8j6H1GgutGBZsCyg6n6FthNGgD5nxRVqg6KJ4ZLgpMg16dVN7ShqpYE2T8VgJtkH6BooqJS5V8DPNAMEDcpt",
  "key46": "51ybYucmb4dRWZm7YLvdCC1TDSD3EZx8xKA9mr1YWeF41qUZRZK96eGhKcRExhBwShfwpGUFfNau6qBD2jDP3o88",
  "key47": "2gcW5FSZ6XdnVzojfxr1egFFE4oPrnmPf2GPy59pcsPSQVffqtWy1AYPHDGPtnmddZq6Mu8F36cNyNnuVxwHoh6S"
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
