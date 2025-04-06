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
    "36DU8KKvBMTeCxk69GTHwrykZFZZL6kj5X7oHyje9Zu7uajYBYcs1yMJoVjtvHSJqhnDxJJscFREEuAZPHWPX7YZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8xrEmbPc79vTxFBuK6uHRDqURqL5BkddinaN2SuTEha26r6dC2ZYaDDJFJYaAokcQGv3uqHDtRx9ymtVznu2W5",
  "key1": "2VQfLLRujtfUY37KrQYvjN76tDLeQKLJCXZ3qepgkQejZKSjg945ViFiYWNxFfALyXxp9gc4XKQaDrkUdFgY5xHf",
  "key2": "2VV1NqJ9Wm5yksjbWeWMebaAx3CS4f8gmvjzaPqUsHNvCvaoJrvveEXM5gZmrZhne7iCayMYosBAvjNHct2zXy3V",
  "key3": "5Z4R2hXEhejM5orSSrMxeSxqdHqhXT22uBNwKfr49qBGXvf1jZjX25LtPKzjqP7ZZWc1YeGQmWrxZTg4QR7KH8Tz",
  "key4": "26GR7ezfENrGpfMAXEP2sEamoAYTBiapa9PJ8vkWrMXu2rhsNwmJSjRbBfSfZEKGjQo3ya85xfVxJ9iexMm8Ne1d",
  "key5": "3Ffrp47KCJk12Svv9EH7E4Ku9UT5ziXtWdmPTPZUW1ffChK8hbHmEh5ufLEPwFG63hGtgrsHxyPPeFJ9HvL6vyyT",
  "key6": "5YGyC9RyswDcJku6KoMqgEZc1iAubdk4j2xaDAmpRKBonEYSqZTtLLcwhdU17h7ptdFXePXbbqQjiLwpC8qSFkfp",
  "key7": "3FAypHVA7ajmp1X6gnkbHDTqJHMWBcKP2GiqBioJ7cTYP3qNtKmpvaGDvN4MijG17UFuiCZcbuZJUKpzB86repk6",
  "key8": "3dDphr6NPs75WfpohYLArusZmtEajD5RjTp4XaQP5C22R2dgA3WaEahyPEgtfytaMJ61BqyBjqWkG6uVcYCCYS1n",
  "key9": "2ZPjaphcXYAmxuVidMvtRuXLGTp425GDDSDL2L61yCqLRCLhmr9zyT5qNf1T6LjJF9wfq515PxA9TgXXAXsCzuHa",
  "key10": "3DJVkdNC7GvCCV2p9TXLqtX76xX3ZMC1npXya64NsY9Prxfa1i8PZrd77GkaipxyFnc89x77fRWtDhy2DWmScqWt",
  "key11": "4zSqWFWqwway7rTXJqandvz33untD33UTh1YV3qzHht27KP5zS4b7SSzui9PDT8rx3dxZDuLF8JfG6hgAvcpFh1X",
  "key12": "4g69gSLLyfU3e7aMPuWViUF3gYy5uVsQTi15mJAhG8ozeXvKUn9QDcmwXA18eLhUG7QbKQARQX99FfEg8tFsU46A",
  "key13": "33XrsQMMC9uhaHeYuLrXZHhRepcKFVer4aDxNpaJsTns6QtdFgFpEUbyTRqpBjFX1nGWa8gBZ6uZUV9h92c72etm",
  "key14": "YhSmKMdFVwFXGkBjpJjx9kSXLR9bK9yovqRsVzLqbQUTKstXLQNG2n55ZBnyNq9TAM3F8USVEt9ht8w7dAk4NK4",
  "key15": "4F1WDD61tw9wgEhovrBGaYU4g9mn59AqEwP3HHqJuVCdKA2KoMGzevsP7S8kd7915CxkuBqSsF5HBky3QdYVFRHn",
  "key16": "22bHXm5UvSJyDAo82iEZmft27NmMiL9hnB9dsK8FA7ou1BxPXvTXEhmeLRvvW83nxMFEB3v6q78M4eBqAPhmCjAN",
  "key17": "3STCLYjwhaU6M3nQuxBxuLr2cFGSd2Y4T5AQA6q5dta7RU1934v4fTBccscjmnGyAnKszmAjzWyTcCtThax6uHZt",
  "key18": "2jqtjhQYHiikZizVjygdFiog38rvtycGTSRoRxtRcSEemom9m893ihneTc8DM66nSgfjPmigzznWUDzQgRmheBwf",
  "key19": "4vtf23qFj78YCh349jiVYedcvcGtBMcMZm53AkWzKeBmBTXptoQ7i18Ctaq8isZdQbcLfdF5cURPoU7SnCweab7c",
  "key20": "4crS8Kpp6YgFSNcLooZEWNMcURc53SVVTq7RSGhSfybfdnQymrP2VY9yCSUXyb6GdXd64BeyRzj1BqCsKkxhiedj",
  "key21": "SkzzYZTU2ss6ADXLDBYwfis6F6hswbv3bQ62kD74yhb9SfQ3BKTL3yR8cK4gYZJHp4hfVXrq6HPmtvcvgpuTja3",
  "key22": "4Kn2qWg6V2a1j7VKkkhJc3GdMAcvty1CQDSKK74E1MKEe7e1dQztk43ARhtnUxsz23aaZe2biPP6yvY2M8xmzZAb",
  "key23": "4WhdJD67a7JVCTgmMsRoH9hY14dZdYD1h7CgS4nxRqghk6gfhXW5VpJck65HPE18xEfNHGQKKHfdUbeY4MWMFrHR",
  "key24": "5mpsRGcE5DnHcKB4QPr8uqcVmcExHvwvhZNbJ2UG6ZEvT81UbE4uPjL9koZiD5b9wyUGAQHEpRxGq4776pjcq3LQ",
  "key25": "4QveU9j2gHKbPpqziqRo6ANiARnDBY44QcvnSkycZhpJNDjc5Dog77bvQU4ioR32rnDiucyaS2SNe3gjDUxCc43V",
  "key26": "daw5KcY9f2yHvsH18MULAEZ77PD2v2MEcAPfQjGdj5CV2qRsWWt9FRphUFpUSgQorxL5phYuNk2yatooKXQYaBk",
  "key27": "26cz4oNcb68xFnSkQoUDZm6h8zFoGpeqdboJxJKYBCrPNBMytuEyjP8bumMN7qCFsqbbtor857VbhxTerFjH6TFz",
  "key28": "626NeMRRFkp2W5LSg9uLCfuZZtVa1B23hofqZNU8hgxmYgWQpVYaGnHctpCLzM9qtVw28cJKLEjMw57rUoqGv8dS",
  "key29": "3tzScZ2fm5PKsPgdUtbsS5Qn3fgjUeSpN4RoJWjK1zzftQ9ZHnxPY89A9zrj7fNKMTSvWfyWdnygEac6KzaZ2GKq",
  "key30": "568BTtxkq3MLSvEGhgaT9emi1HaSeSgrpPLTo53hmyqJC2RNnsn14YtEUthQaoqLmvS2krfWfYjpgeW9FL7sB7D3",
  "key31": "2yZSBBVF9eFqAEAf1PR5ows4iFkW18mTu2SVRoDkuQYsZGTnFYrjEojn8B7AyMUibKM7WYwBNgx2WsDvkzPJZDyp",
  "key32": "4YBCxnjNA1w3aj3zXMbsBPr2SGxqhWyBQUxUhK1Dtzf498Rz32n1q7B1CoVg1kQT93MBZGXRCFDn3yYQ7wT5ouRE",
  "key33": "C9fsszMy156kyyvucRDCsE1dwjYyLtYr47PHoR8veE6SPZ3fsb3TVLieeWZzenpdQpQxWQFjZqi8T6EANUbtM76",
  "key34": "3rpvMVBptwU4XaNreUJ9XAUHiDnhQEdezfeuXp9GYrq5agT63vruG2EHvsv9imH5wqhVDYJmhBKj5a2uxug34GhA",
  "key35": "1HYGXaDU2kuE8XiTkDreW2fkLyd5b216sB8gXJfjJ2Q9BG3EXhE3N1wYD4Nd733wuK2PZdd1g8sE77UALaFrKMT",
  "key36": "2XPazyjokNmXpTuSwMJHXFK3mvVGUdVtFJSxihYhbnfX6GYRUF9XARtSXxLVrBnqiCVoCGMQ4t9SY4A4VuNRXi2e",
  "key37": "29d9YEdmn9vj8BEVTEsWtZPUNiSvvxtkVmZTFPRVKrxPQUaru9gCwWoRrTMKMjSfhW1CJ5YwF16a3xTg1qtM2x56",
  "key38": "551ThoJwkKkHgRCdovcDusWkXoeYcMsWJ5fm1gBb9QQbVUSjtGXkAmK57TUo5aXzd1UncF7QdEPdjkrmHG9GHwa6",
  "key39": "4yXmAbH1V8CLP2xqXBPAjWv9XQPkeXkHmywiF2ar8FdLZRG8acTPQ4xQeYj6B361jTEUWUnKXWgi2N6c1MTYsFL4",
  "key40": "3fWcVkBEVJ9hNsNHBESSiguKdocFaiAZLVQ9RgGYF5SGwgaLGGUxSeeH42TWJiY767q782sJUy3uUcvGQc8BjWot",
  "key41": "5wkWgTWb8mK9LEdx5gtoANspGTbyGCGtQrrxmX5GG7NRonyXqpGtTXbjgdaJwJJUBaiabR9FbYQ24VNZZ9yfLN4j",
  "key42": "4WofBQ815WpXZNZcTbVeBedvRbVjLcmUwnnF9LqAPk1W7EM8fF4z5G2hTr66x3bfX6a7iZXF4JT9hUyjoA38uBxH",
  "key43": "56uhLbJwtLrh5C3deNSTtE1wB5JDKUn33P5BKkRWa1K2HfoHqx9Aj2CDYdicQrKQ6qhRp3HX6c7ZZ5ncm6afBNXp",
  "key44": "31Pea3qCCeYHHKH9U5FuokmtGcVJ9wJbU1DqiiewZaSdp2ku8xL6df4B7pBmiN2qSqTa6ctWywxzUvWbG19wc4dp",
  "key45": "4FHEdVFcBmWTfdo2mV7VBcQN3ZyrzDNxnu36tpQL1CHkYn8TKoAK7SMMMdFdkVgHdjwXPGhDo86iTHEghZKZ81N9",
  "key46": "2a9Fb9tvyZmUhXorjiEYpgdyCAq8jEaoo6ZwvyVN1xZzhxYM9ntsSfLoJwXJbudUiGBDohbeLXb2VnQmXRriLtPp",
  "key47": "PCwVqnBE4w9ypS5rQAHke6E7S2rmZyH7QxqsfaRB53YviqhYyobxyk37PJ5CcdtPkz6oNVh7zfB4Ux8ypAGcm9f",
  "key48": "52zRMhz72ZD5yhLMaLidvRtpHfY9AABsA1fdkk46fTAVhgYBGqmnXVSYur2zXYn3BNTWiNyBM4ETmqWjdz5kkQZ9",
  "key49": "4ab2jyUY4GLBqnP5GgNVcVtKEkSTKCp5GoTAzynkq7PmzAdzLNUBnUM1xgG87EXQDQLzDaWgnpzwiPRQ3q4NpJLc"
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
