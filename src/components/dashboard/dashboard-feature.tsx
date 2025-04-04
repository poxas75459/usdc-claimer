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
    "2gHrd43561bFHgmpcnL68e8gTB7apJ39nRgVaMXP6SJduCS9eeuQJjPfQEGi7vG9eKfr2xkEDjYvGVZ6MTnu1wN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BH6HTZX2ZGqchBWGDjyoNp56V7chJBFbdtY2yYHLYzBzWVFQKGCsXQiJquYJo6rnjaM6y56mjjjqcXeRcD47hGk",
  "key1": "2nz66yph3yqHoiWKUENQtD9dVgPxPS79FCPbkFp5fNZs9NM75CZUc6KxaRa3CCfsaNQWVHtxp2xzPkp6NAYFyjZj",
  "key2": "49nyyoForu2NNXE9Vm1XPr8DNNY2eBS36RMmDLrz9dRnngMhKrEZve8K5wFbssrctepYNorJ4Z7ptQTp1be4JwKQ",
  "key3": "rFBAFgnewkDrFFT1opTPYxvdQWa6THNYWUxuB1eXZbQjy8AmjwJV7ZDz4Kesgcx5tb2g4EHgLTtfyGBpvmto7U3",
  "key4": "2Yuho2Sb7wzZHG9jYXgLwdXpQZZTq4FdBBH5MntP4AxLDUZctdVNsbh95Y66qCgoW8ctMSuoggTGfsD9FfVhLAFf",
  "key5": "QDDEk3fNXfKt16rEV9AYrdygi3onQjXAnUMDw1kWEtQvFsDFXsE1VtFVxXDeb3eNVUXLi5WCzNEjGBrQsgDuX22",
  "key6": "3tvhkvZ8iLScgmNpHQGRYyyaVUktK5jLRrvKREYER6kHYTwUCgTkoCQwSJC1wVefEdUo7hLWKwuT5MsN8dFf2YYs",
  "key7": "2dXZ4opiYAc2zbMWqfB4yEZR7fxmfVtDvqgGucgeFJZm9CnBwYEkoBiHUKrUofitgVv6nLLR1dP8G2pBDkcPYLS4",
  "key8": "QQH6w75QLKPYRhJx2RffS3ca54YYTiLYAGLeDNo6L7xa33h7PinxhH4W1iVcgfKbZdUwqWdRgyu3vPJa3iWhY7W",
  "key9": "55wwEgCEtwq4coqu2r71Yo9PHykuyqmN6QmUdCtFdXUCLrfo4fDtpYcuvRvvyL5qt9jBfgHJLCd1XtRw2Tq1yKC2",
  "key10": "5YhgxR4VAFBSxD6NQrHMgBK6bZunozFHFJfXpsAaTdYpd1ycBnYTyBRqwnV7yGcT5eAmG3M5CbgoezAsxSNHqa8Q",
  "key11": "5piZ6V1KEWtXTWWyZ5weRC1uRR1AdjqfAjZms3TwqEZsp9WL7yaDzBsLJdYecH3vUXS52rZuL8ynYyTtmkVao71E",
  "key12": "33Z2vHqZfh7gtmUyh5kLVZcS6fixFhaewUK5U2EeyZTcPuXTAhajdv8oxbQ535EMKcJYyY6BQU5Vc34FPqi8ELUS",
  "key13": "iH5sfnicbXfSrjCJ1iUGoWSxompYr6Z4UfaKGPt5Uinq9cY4nCX18wqmvecy6mELg2DnBVLFLQYSsirm2B1jk1U",
  "key14": "5UCCPindoFtYL7FKivh2Bh8nG5pxFwihiQ3kkQxyPKfsdG7JK1CxDhqLGrkSQKWkDYJm31pVo6p7DJRvihpqR9rq",
  "key15": "5HGkAmzhf5fDCsJodZxiZN9nE9gJQrunbu9YKDrksD7yfSAz81DD7YsXq6gAvCACWwD1TWLE4khpz2JvouovAMng",
  "key16": "P4ib5K4jxzhmchCCAaK9XntE4bwUEGKB9E3SferUdk9dPSNXBHSbnDGXceGRGx4DFuNxwfSf8EJa7oUNpLJCAs3",
  "key17": "3p4LEAt7BUSf8WjDs9yxUmvPsT48MjpYjtUoJ5vaQpDgrwNaBEP8PR4hiY1NFSug6dM7s2k7rbwvgK5jFurnxLbV",
  "key18": "4BUUERkLeh9cgwwtddzEFC9eHWrTjEsDSzL5VcBj98qYEwSare68FANYyjjFV7burRydgzWKsuf47xgaMfmDaEud",
  "key19": "2nwBW9nnjF1ueUeVsaV9ocUY3p3NhYpQw7shcSXkT7vMpEw8SuhLJJKWczQGe5L1d75D2su77DCTeg5xbZbJF6Cn",
  "key20": "3Z6XfKh849d6b6QyFnQrnumGKiQ7DvUE7oXW8CmJKXfCNcTpAfon8jaN7zsEAD2hza1sUqxYq78JSYS9ootZYYYA",
  "key21": "2srKRTwC99bNg1egtwhWmAvUwQxmaC1Hp8LEgqHEbz5LCJnBvoARwSDRj6FKcaUs4SX8UbUbc4DLDtYJgTRS4zAV",
  "key22": "5xBsdyPa5TvA9VxUDYc3UXMjnBoGKfAhaYLb7NfzbemUNASKVtLq1skeBiU3qd8RJ7MtVwYZMG8JmnPRo9AQEHhf",
  "key23": "2AVzmhyM45RUBjN9UdqGNTLi3gb22JbECHoErP4EiobhvvPNnV4dC7bawTsd3tUx6BxGesq8fy7W4hU8TWebjspS",
  "key24": "UCs38BJ44b9NvnKeMcBFSWwKAgwLFVSVRz9qVJnnvYD7d9pWzDB5KUPtTf9acSku93cuFQXSrkNLbYzqCgxTscA",
  "key25": "3RNJKPrvMngXxfB6HTZHmcKB4hrt3UZGLn2Jih67bbtFY1XGnXykqBNV5AwK9AcCrZP4REzMM5WxLJG4r8MGquG7",
  "key26": "4mApnecqY8gA4eksfYbWe4QGGabZbYw3eoTFB3ToD3saBddGV7RMvrMWuze8jGscThJ1BSFqYUyGDZZt2C3GnuB5",
  "key27": "3Q4ToUU3YYZNmAr1SnLmCjGxmuegHe1ap7E44zvjVUime7nenFd1vGrp43KeRbsFKnSGcgVVc1Gy8zpuXVaqAxd1",
  "key28": "s7aEhWZQj5KBjKXASpbADRa1GxjzUH7Jbe516wPiw1Cskp3x9QvLVwF8BDRd8BG3P2Yx1WXvv7JGdG9rpoQZz5T",
  "key29": "tivigUYqjn4SUdamm3PysrvgX6hX1EnmAKh4LcJ21THj8qpFgkhz2iaNeTVfEzu32uwbmEFiTdD73C4GGV4LPAn",
  "key30": "3QMhhcfWGwkPyzSeJvds1P1va2hgqSLnfeERG2CD1nhuYphJiXHAsX3QChoXyE7XttavkHeoPQ7zUqTLYc9jWyK3",
  "key31": "3p67jEcPpmcC7JrPT34Q14Wq3bMY7H7QC3kYiZAQWNzW96Y6qpAwFZePE1UfZqmAetUoRAFjjM3pFLM75Uwa9x5V",
  "key32": "3Kcm5cn4Ta7J8xAyqGP5moYGSX3VcFxkqHLapqo2EwA1RkZCH3o1z5rsb2sEmu6MVvaqn5w5zpxztSpoviaeBTE5",
  "key33": "2KWeNFWtzoE9eg7zpXnaXAv9LaNn56GwddMf1fwD9LpJPRb77SnUFE4k51gAneSGM8esY5KiFPpZ7Z4vyrSSD8MU",
  "key34": "4BSLw9VWCwLUrHgrkkqUzeYrBtoE7ZN55Xp3Gxz4hTbnq8UDYA2RseEFzxEBoUxqgmRzokZweVvjPAWM8VYRxVKp",
  "key35": "48NmFhvhuutHhapmZAaZpz3CJ8jwbujBtj3zbV7ZD16yYYS5BbjxGtxRgq9A7zekawdMbmzzvu8ZFeFEtKdoAuVE",
  "key36": "3BRd94AHgcxE3RTySYVnzYPSP5KEY6zzYag81yC5pxYJdgEcMhxcb1gdwjEFcJbRESix4WXMKrZwefCapc44XWqK",
  "key37": "5uEqSd6kuSZjNJhaaJ6whBLvU4EH7xztjSnQYSMithL82c4NbNCC2jDbnF6AdWc4Agz5uuoKRGV4K7dGwAp32jaR",
  "key38": "28WCjqHjBsPiGKVUybdARw4BYLR8MQC2xrZEChfWdPLGjd1fsDg2cip3UMHK2XL2LVU3ZbWM4voMhh8HdvtJtMc4",
  "key39": "63YHvcyUXy9vbzUN4x4RfuPs8MfR1uovtdsLe3KahFWmKkRfp7MvhLPNv96uKR3AiLXfoKeBiTSFuNyB59LTH2ug",
  "key40": "5qG2aNxkGxpr5gcR5qVsJWuQAdqHp4V3NodAJymB8vuVgffnMAYmrykBXVThd4cZ7HSuC2FHamAUbFnq4qN88Rk3",
  "key41": "3gjYZFx42jvTQijwNE4ERqvjXPvDjU1FTxMWjcYYvfyEBcxSrTEHGtAAbUREP97Hkw1JUuXzYQMbJsJwSyKXNzz3",
  "key42": "5CnndTusvCJzRuiJcPgn1ax3b6uM4w2CuqP54zc88PQ11TRv1XpXHjD5uEzgu9pAhbNDu97HhvMYCo6XjjCKzY1x",
  "key43": "foxhv6b1GiEDC3B57CG1yNfjXmwSbLQQ9NibSq7w67RP64zBhGuSnmb8eKLiafTeaVwax4DyiGmrCpjs94yMrDM",
  "key44": "4FbQ82g8reBwBUTyUmTdKz4gP6YSEPdN3kH2nvdkWs2rSMcjr2pLXxKsHbyLF7LGwqvc3rP8mbT6oZwLbeYTVkGr",
  "key45": "4LJ39CoxvCX4cHQZNR5HXqAeKk6GyDhQz9Rzz758q1UkCwhGy7pBNGCjYNMUUqftR2CVfVCkTJ2FMzLqiekgfs9M",
  "key46": "2RR5JLVxib2jXLNryRhT4tGEraXGQ742w8M4q1fKZrV2WtfNnWSWvT45sjEESTedC7r7wAX77osMZWb3GNSzLkMg",
  "key47": "2Kw6dugFTRhViZBER29ZkFxWatwQFxoxKGhVMRYunyyxWM5iREPHpG7GBmFnTV82dc9Tm1TvD2B9Uw4dqJZSqLgZ"
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
