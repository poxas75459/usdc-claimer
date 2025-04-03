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
    "4UfT8WEXWDw3Ncvrm4mUsbdr6gpgTgtuw5sdofTgNTJngHo4L5JMqg1gr5SUUWp76N628AxMmfnTr1teH8atGt8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TMXGJyTf3W9kRzADjbLqv4pK7xDiNAce3Wfp6YFo8dRurxpJ2YwmrqEmfTEKuyMAKU6RYivr7j17DMQhmHMFG2w",
  "key1": "39A4b7NMv2KEojkvB4gzEJkKioW5zNwLB3QaYSUN3pfg42siNY6CAdimZZdDQtLVS9TwejeVe58kAsKCKRf7f3Po",
  "key2": "4nA54vDbAZ8JGAFe2576PQZn45hDxfC1M7icAFSwP6xrsbbQTaxJnAkQSU4x2hqtCVSTSiKTo5pMw6LCYYjzK6mS",
  "key3": "5fpjRLdUDMkmr64BUotQbEcw9Kv8TKfqM1GLbsAiA4jVPzHZm832zX7jB9LWES6xJTWxQT6GBky6XNGrCVWMwRSC",
  "key4": "4vhzUJGWyfQK4GTU9Cyeuc9uCSCbeFcqncig2BZeBGDuhNFpxhwTM9XRdigRjkeUp2WFDrkawdsgjigaENR46YU2",
  "key5": "5hVnGYvQL2jod83QEVGLaJEYLgDq7ujhDmPq4M1Sw9fKAHUw4MU33wfVbxsDVaebnpSp8Gke44h3ShpUSyioCCqZ",
  "key6": "JeMUcSTo8qHLUGMHdL164ggcFxkfQ4ou6Ymj5qc8iyKoduZrMPRrX79gKMrjLTGoBWCsvhU7U3VjmyaGMGfbiRu",
  "key7": "3RHpxqjEbw6rcp6CErjGLyGobv2Ps3VGTNT9jCJYXsmaqUWHjtvVEg72EhSXZk41WiDpUsB8wVMY849mPvvJaWD5",
  "key8": "3jtPKTaVCGP3wYEDoB6FchUd5EEx6XuPA19AzWnM9PYK84v9jf2dk15Rr6x2QQe6G6J9CQp9M9JoguCXFsx6rMDF",
  "key9": "2mHbxeY9mpuJtHYU2bo4pDnVcBvzujwTvW49xucRiHCA7rTA1ceZfpG9TjMJT11dcdVovDueQzK1B64Fsf3c4o3g",
  "key10": "5D578zmWvz7e2DDxvQceqfbiw52Pumk6P9fvVbqabcVuYtM1diTHsKe4qZt9LkNovFsiHLpXedaPxSjwEKEViMGw",
  "key11": "4swKLvYUcKe312xKzYSVu5X94TxBbrCNivHh4p9wnDKQb6atkjgHDA3ebStcR7doAnVZizLLGMDYZasXCRE7hhxb",
  "key12": "r9QpRwSV3yxTawWB6kJbYjRufptNwKVf3vDNWCV7Q9HiuiKn5zDvu7Vy2sNcMurWxcZ3V8zJUBFQbTjt7ctnctw",
  "key13": "5HS7t4u6xHf8E596rU3e8JEke4JNmdUzEKV4h8uWRqWYXSaVJp3Cq3vdV8336iBjYtPwGNjhzoXKAWQToGXSAbHv",
  "key14": "41WdVcqEwxd52ydBU5GA5keX5XVw7DDQmRdd6KK9wBHQBfs54Ps7df6CaczSzGBLEfS2Bp4tLPvNQGZ1SNQGajYv",
  "key15": "yRvPaKVju8m8LBxAyUGTjymgfYfMzdtNVXSjrzY5KXaRXWbgJoP6KMjeEySGnmsson3z7n9KKkKTErYp1GQvmPm",
  "key16": "3nmzE9dRUEb2xbotJPq299Kf7iUB7n2e4LYxyN1co595BuAWLpEaDpNDuURSsMVY3gnMWVnfyHUdG7G85ebGKgjF",
  "key17": "41uW6r9aTWhTXyn6fbmkRnDbabQHBmKetnSpFfLtNvHs4ocCSigLTf78DeucifzwxwTcAXxB9rCKcXdwVAXRJGKi",
  "key18": "3dvqASvUcBS2irM1gYznZwVM1cBgCUyCLKtAtPzbPEiZLapfQV4mGG22xB1ZRwRMoxWQKfe5SXcuWzWEzZbLWgSk",
  "key19": "4Z4cbZAmniYqf1i5jiZP4A5B8WPu65QHqc7cHxgxHSg6fpHAsK2rwj1Wsop6w9t9U8qyxeei3nuyhMjdVdEZWciv",
  "key20": "5eFBH7YFUbMkNG2HWkXNSxqGgdzhHAVCJWmn7UuRGd3se7nq3AKczhuVYa6CKLDpd2Bn8g7HybRCYnM7yQkFqHUc",
  "key21": "MHHUDs7NLwv1b6gMna8JwZxQouhSquaDr3Gwk6Ra26kZfDzKpjC9CKHHZWQoLLimLjB6sFCuKK9vobSbMfVBPhW",
  "key22": "4wEvUXpiWbisucbjS2dUFvSLwpT5jU6xq41NRDrbbiHxxHXVrxG48dELSQBWj5LmYd4ecSsHba9CWa1F4pz8x34t",
  "key23": "TWtE9dtW7JEAPRTU7ioe6LpV81jRJcxfWy6kqS7inhaEVGzBuW4reGkxCvZphHDTbaHSmFxKaFr5qyzNj6JdxWd",
  "key24": "9fqPshQDrRZ2qGMQaLujqv1osoC8sDNqioYgL1y8WSne1ZDoK6kk6Dr557MCf5JSR9UManQvYZRLzykzaMaFPWK",
  "key25": "254TrthG2ntpfjcPgXhziB8hCKxxidAHovsBwa9TDx3NHWzzFS7W6zMB3ZKWGmAg4kwcyvv1z4xUTyoeJRb1Lu7f",
  "key26": "27rTx51wD9XRGWpqrQtRN4qyzpr8tkGiwhYaa6w4yPQeQSAZ9QTHVKyfa1i1t3dEk4YJAe56hpwSA4cTczMqtqVP",
  "key27": "4Wx6bxXcHoYKxMVZ6HKMcFydoUJ7EF9wK5yZuUudumn14H6muN6UoLeFhTVbdL1sd9wg2wXH36ZfyH4EGhP1xeWX",
  "key28": "4ZtmBc8AeVoZDei8z1sV3wcC4K28KpQExNN4k5sadRHw1Chi5zagwJxq3QXEhETFgn8mXQW2jTwZPw3HfFBWsPvy",
  "key29": "2SU5Wo9CkiBo6GWJnW5FvMpTKKxCFSe6h6Epq2ZBxBha7KEimE5XmcxL4tLH6FCmqt7jEHQS3qo7vfAeg9FiEcEj",
  "key30": "3PQyxcMBYQ4WcjKhP7isGnfPX2F1EfLUsoupXLd9onsZh2cLfG1P81r3DCRYLhucjntL9eWYztRA9Wx83uTBdi5",
  "key31": "53kWPA8jpZ4eT5BFTvf3igo47cV7MMHiQCNPZ4U3ENYG5dEx7FNHyTt6FCSQYi8oJzct28Yf5dCZbkSfA61tRDST",
  "key32": "3EWX4wkJxzgBkhuGac8jk97RY8Eaj485xW9onN8YWn59YhD3WQb34qN5pCRemhAoHwd8PzWrxTt5379TPcKQf9Qj",
  "key33": "3DmYaWSUtKHGLr85peT4kHHyFsvEa2qPqYDAQHaJuUzPSWGH7joSZXzxCaNBeghhEyxXjfgoq2kDRK1yD84V4a9f",
  "key34": "5xPUvtB7SxhadQeqdHTPDMPEpoi7cQiFag9vGLn4mZ88szmSJoEsqNB6LUTGSQDps6Ghph1c4WEW6nBy8oEcAV8Q",
  "key35": "P1HuqzovoBtNiYWLqqWsLB8dWn4xwz7wAqzMZbXtKW6nUvBihW3bMaE3BBcWJ5K8B4e57FDt54rmGdC37WcLyAA"
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
