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
    "29utwL6Fho7sPJsG2ds12okCm7d4fGcyhpXpvjxvyTa3Bm5mHjg6YTXKxH7uttTejz6UFSCo2SieXbeKtuz62FmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NsbBXXknFijPmrvvvGrG8ztfexcrMBPe6AcuQMSW73XfLTQ2F3zLEUcvPJgG6Co73dH5UpPFzS8Et6mHae9tEAD",
  "key1": "3nbCxiZLapCKb36KzVvRTVyQf4etwyKkDLRWxx2JbvySJ8piq1it8ECnYpCixJcbeWyeU4RAjnhvVoiRiz6nvgHR",
  "key2": "2cTG8sdv1NWEDH1TZXgaBBa2MVhU65pUPBVbZJjoCMANMP8QcCV53x4zMnuKj1RsVuNkNX21UUWFbXRejK9nbKBD",
  "key3": "4AJC8ADQMVsaABF6q88jdBzMrUQNXBp2CX6z7buHcMfLtyoWxD2xFPcUD46Le8koZJAxxbLuDJjdqwWdXUUhhpnJ",
  "key4": "UeqVqy1rS4RVbsuCEkQXASAbdAtPGWfNycAATMSZZxfzJpPvTY7FZJaKLRmGJGEtpWpuxPU21zdrCr1TVWZWZJT",
  "key5": "3CkxHxbaVt1q2E2UCGB6WhSJrb2scEVZcGEMxmU5GAM7X8dKzs9SqkdwwiwepoBSGMWKqp4hg26jqRMhySQBuj7L",
  "key6": "4hBY4nJvHz6YNLtHb3siQYNcxGkaSn4cyzb3S4Am7TSRK4AZdt6Qap4xRL2RSc928n964W8JSPVhVC4VoG62FShp",
  "key7": "5p9RMTifNJs8rVrzCCbeD723NuhJjkWMWaDd8MRF3zeu5MZu7SVbY3saiUbWGmAULhGAb6s1bik5YUevmrz9im1G",
  "key8": "666rDapPfgqUuX44ZspjQNJpGThMG63pJHDgexCDtuwytNEX6TPHNPeWh5e38LWm9q2onzbEpZvZ9k4GfbVWyZr9",
  "key9": "4Mzr1t68C1rUhcupK3JfgND8Qy3dG9u2VqvL2JG7ADYPhjStKfb1HFrBB2qCjH6P4qoKqeucWGTfjMRPdAr8XQPH",
  "key10": "2gAZtvbLfPFaa96KmN7uNs5Ki1ryAGu9N48vr8fg2xt5pduSX8aoEpHCSvEwkUvQ6pG15dct9xsZ2G84uv8wPKMU",
  "key11": "md1USaqv43YjVd6SmpHfU3XNTfkYsYL5vYNqq6HiY6YFH9vFdUcDRLGp2Yk6bFG9geGPhwv8NXSQothG6Wz2fov",
  "key12": "2PEZYDaLi7Dn85ByZfXtEFiLUS3NQVprGvHj7hV7gjNt49wDcZjSpZP5CJzVLrfrncotpRG4wpr9A6RAYMyCBjrV",
  "key13": "5NzQ6X9GMj7zinULCMjbSr3HQhoCdyShwUn6rsgFVC4XXk7Skj8a5jyDBSQone7aqzkbKN1XB6GxpGb1Hq8uuKEf",
  "key14": "MSvq3UxhGj1vuv6pLvYiJVGLTa6yqPbgEZKai8a82r6WogDTSWFSn2zNkoB2ySAwzw4ruTRMgGMUuo8JEnjuLrs",
  "key15": "S6ZCYMPEg8MgcyKzNvJZNCqSz6mdSj9fiiyXEgWcgwWdpBTSBBSQpfr7pwTdrAeXJJzJsSJJR1nJA9mw2Am2vER",
  "key16": "2zX3T5LjVkSZgKAjx32SqmDAVQvgi7o98EVhqboznesiXXLcg1jehJKSHAJDpVPR5AQsEcDtW2UwComgJ3aZjDU9",
  "key17": "27WqxjNSeTYu4mG2zo9nhpEFdj1WpjjP9ZuSSp2Cw1bPGJduHuYoTbZkxEhexw1EpVbqZf7ZrkCrnrAfuh1wSb5a",
  "key18": "5Xa7rPmENE4C1kzeg5geA78D1tTD2MBBYUAx1EW3VwrrEpxvsLzgL8VwVK8Tw1FJXtThB1F2R2b8CCwxVzqt1k6k",
  "key19": "4yDUFFEFSVqHAGK4wns2AFVYdQf3ioD7rkrSoxu17kR2XQ1HQ4RzeL2bgkSTq6N4um74RwEWAC4GhzYTV2mgsGCf",
  "key20": "CSFEzNajXBPxxPThHrHcvLc14LxVtyJqGu9AxofPUkBTRWE8kf3DnNA232W7K5rZBimHLx2fGRSSsKTS6nHmDmQ",
  "key21": "4SBjikdpRCfNZ34Vu75VVp4t4yq4Yqa9irVuJZuxTNpgWztUj7FEuwxm8b4MrVoE5rRzfeJRcixxrJiC6wwaj4Uz",
  "key22": "4Tca3dMrfCS3xMyt4gx8vMjmxNcpeeRDc7VSzcwpqCTGSJoTQLMfVJ3rqfBQpjhKJ1764327XWxW3bLW3VVhDdEC",
  "key23": "3r4L8CLNF685fPi5L5gMw85iNb4ejoY6KvMR9r9MpGMpLAYRrLM6CZZb4Ks9XD2YTWxPaG3N3gnHpv3qkSVdpNeS",
  "key24": "4afatzMAjktaPr9Xjv7mRtpUzkGad1RJRTorWr2HHXNHfB1Sjhxah6VaqcZmW9KYaLmznoYRyQFjHSwGsm3Wh15q",
  "key25": "4bb5cDJcPUjHAWFySWq3ad689WJNiuZyCKZNLbdo9tC5BvSoFDf2tcnsu5KR8kJrdRuFMwHkZD75tXsm97pCzbzm",
  "key26": "4sDBxg9wqSqyPCpaF1YNmXFpDVVRpZeVQCJEUyXX6vZKQ8fFUvQXvbpUvj5tjzB41PZgU9DzMhKMMd2qTuCDK9Mh",
  "key27": "4amgQyfunPh977Wu68VmwjZ7YGS9X9keYdsCfwwNN1xEVgwn7AewHUnDHUhjoqRNfF7g5Mrv1f3JCxia5xnmkTeD",
  "key28": "xUt3iV4MXMNNYJYWPusbz5NnSaWhB5qLn7c5e8S821gLkST2XuPvRzyrLKrWevsj6pGoGaCsBr8SMhAWe6irFPo",
  "key29": "4A34RTYTw2SKB8BTQizKi19b6cfsCVyw5yJnhjgmJ1v8q1r7Lej4BZLz354uLR4zvxz9W38RktKef3ZVD8rDmrA6",
  "key30": "PmUDoh1K92ffRWWKWaEjRc76xvYdTkukALr8cWbnQ6QQb1E5T4JxVX49nWmMk3isz3omtzgyDiRqrMUewigw3qX",
  "key31": "422RPyrvcdRuDo7nQ5rtMh342iAGrSqDpuVYTcFXe6KtqmQm3P3StHFupY6jvtor93MBAGC3TzbHksRR2iZcRvdh",
  "key32": "25kCrPRGG4FFJNHgYUfsfR2BvYaw8bc5E7ZSmaqYYZBuj639UfYUvXo2i4redZkwUhhimHD6PyKPRUUTZXpVNrwS",
  "key33": "5EkHzLN8FR6QwFwhiHB8YXAEvveVFtsKXhKf7GGzFj1HxAkP2mbK9iyHNDvF5yFY4BVkdkjVyoXNVFxMrRtAsoTX",
  "key34": "35Dft1kXGcQrm2ik3qKKRepA2gXprozqhQjwMKCgZmEMwq5ExCfVpJDxL3WxW1hSnyGSkC3784wz2zwtJgYMdUb9",
  "key35": "5yPmFS2FxUmUsZwP8m5aMi6sMUs8pWZ7mRPTtDBgQkgTv9pGVXGzwEEZu1pAMcHjWo2QWNvsUbQWKR7QX7PbrBBa",
  "key36": "5sWExzZx9djKPRFsSnZHtSj1cXWdoYMwa8HsoR4oQPn6pbpfgqo44UfTHey4DbeDVbTPNb6rUkagUDjBEXXg6uZi",
  "key37": "2KNEgwQTFm4UGv2gVriSVrsgSknNtpgm8RLwXe3NUWiAj2fE8yjLNKQ298XGGJVVNiRQ4SuvSVwCudexa1Aud6bQ",
  "key38": "5TBekTtbtTLqratareQdyuGGdS7raBYVZ44mTVR2pKShXd6Lv5uzLbEFyRFM2UwEw7cqQA4iFNMUqQvRiWcxtJw7",
  "key39": "3GGTirRf1PGAqAKd63DFTprKNrwQ4kY8K1vk5HoNT3X8Y8ZmgeYyrUaZ7jwAi5PuW7oHSDHgKjA3Q5dDcD5RKAJ5",
  "key40": "3AmYsHphcuRWsj7Ja5cx2m9BoqX8gAKPdBjtFb95copX4oW9F1k3gyNLJDUUh4K4eMgCMni1DiqPrbNrtFdfL4Lq",
  "key41": "5vJh6gh7AyLxYHEdUoWQi4PB4g1ECquRvf7MfgtuGH6zUUVTpgQCcxonmErduPikvd1PJj1x2ixDDiciNbCNYPbm",
  "key42": "2bX17sJQsn6nHqVvXWKyo1P5iqjXebz17cB34tDomEvTxuEJPmcE3tCXZK8sQf3GGFEzBMfJ4ZFLXc1udrxbXLmH",
  "key43": "2uvCJ6hzLLEMLwhvTWWjZNEyKpgfsLKcVJML34nxcv7jAiG9XH8RVSP4Agtu2Yswk8W7JUzKtuaqdfDYW7oShvBp",
  "key44": "7y2LotBEb3EiFAsVmri1iFFxB5EEtTXzo7cvN51o8sukBfyScEpPQHSzYvxWCejz8WpCga9urYMZqmUKUWRzQY1",
  "key45": "2RnYk5XQXhw5VX6RKqZS5T9ExarKvoueukwuLyDkDyCYJ4w3As1f91Xu5tKwGSyBm1w2Y8dMp3iafE6qy9QJP6xR",
  "key46": "5Fbgzq3zeS7BsAouS2xhH6CHzwbkumafAPY6QJZvnwyD5YQs4ByhDUWshCDEeoDHghvWjjMZHKCNEm6HCrcC6yLG",
  "key47": "3NY8gMnBKpQZLV8rZJgvUBKJdYi2b5656ya58FuRH8MDewJHkkWedBQE1DbCFhb1rdcYsGcqUcJ1jK8xJoe7iNqN",
  "key48": "4npAFedpxeHGHd1jAh8WC3AhKZxtyHP7PR7NjNVGepjpjg6tyyHLyCUsDVEauVAi4XVQcSiYBXKbDGtv5yApvnYz"
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
