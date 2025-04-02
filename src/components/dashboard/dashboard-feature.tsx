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
    "YgGiH1duUAXHh1cNTLP5P2nWLTqw72mn1QEf5G7c1ZbMpgEHoRKPSBti6wYexwJBWkc3VxL7zc37HVn8xdPWpXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZXDSf7abrbxo45ZHo8cNk4kBVwSLFQbh7XKPKjVPnbCrGEVpwgAnriQc7QVxH13oncWbppRrJC8kMkwJ4UDHwPm",
  "key1": "4CPTc7FGTkzV43Uj8ToeyVoFFgETkTJKS6zhQhyhAWsntZSy7nk4uFfsqmf2Dy3RmYQiDPRAFtGcw7pWcGSjhh6Z",
  "key2": "3LNix5BnJz8nM9BzbDbE2cBhPKCiQ8eHdJXv8et5KaDDRaogRFHeMmsAzEGAx8mdH5M5QqszsJz9jEyTGjptTRtb",
  "key3": "3nhW7aTrd1ZRML2E6a6b4AsnZdKqP65MV8ZENUR9ELfpyLFxdkGzFJHnVJjmXxQZp8nuDc1DPvSZuv6QaSkxEQRR",
  "key4": "4jq8TjCdjkx7wk3oJdAqQwekMNBBZehcK2PgpgrCkcYvP8ChkNVsPdw7HUt26h5XTB92thZh6dh9JDvnusyngP8K",
  "key5": "3NvccEPwG6rsq536ggm21SpjG3w4vvGYkHe4L1vawAVnbLgXMdjQuuBZcujMk9sSwNPwrvvJv7rgnYXCLbH8TG6T",
  "key6": "3dsiaab9CdXA5LuXDhoQcSMBsjs9KXToLQaGCv847oowRwBHZQ4R7jffx92pCxyZYBAEj592dbWJGGduKRY3884M",
  "key7": "57JhogAMzrbqDYyZas3TZ6r84DAZFLrxRcSijDyvjbwPzqhkXYmX2ZFbEvR4BuP6iE5SKkXnjFuXDdRPE3L2BUny",
  "key8": "BKXB8qPkUYRrNaBSajfSfbZznCnVnn2FWtY6ijQ1jWkrJMdUjH4XkPtjSqECfNVz4q7aj9iGopwoisxNVpWyFKg",
  "key9": "2YEVDSWGxfxo37SNRaNN13G2fv5DE11tM4PMKU3xMLBQQ3Df6XkhAyJSDcyi3e7S11AHwATBtE7AiHe6iuWgQZ44",
  "key10": "2QTXLcJRgjUrhYyu7wepEPS52u3k8xkjnG7rY7JFKwbRGbCduZz1LJ9mrHdhbiitV49LT6yuopQ3KqkBVrQMMMX6",
  "key11": "2TBckhzyXFNtmSKMPrPM9rjaG9C1RANjULxvcLmA6fpqfDd83FmzHxpURQ6bH5dZMudRLGPpgDkijbM49K7yvtpp",
  "key12": "5o4YaHb4EaXQa6pr9PGb7xDd7TMNbQEiQi866htr66YTxiGKQG6FqcApFx7d9yVWcCxNwRvdhu6FhBPgUAtcFW31",
  "key13": "2cLPLNkYnFwgeMigGJUKnjZdsyqq2UKuLHsh88Zk3MKZv5Tsrki8MCEjLCi4io9pKHdwKEn1XWAMP4T7ySRLqLoT",
  "key14": "5fDaENP4zhnDDQy1tUUea7MJq6TLNV9x1uMykojJPuqBWysP5NigKTAb7SoH17zj13724yd65PZ87Ryid61Hon4u",
  "key15": "XvHVqopjHGFQQen1gUeA3qUf5wyLP9r9Wz8VAk3rSbzd8oVtFtu6NYcgcMz4WVgChiwo4gzHUj1VrzLyh3dEvKd",
  "key16": "2Jf4hSQopEFZYcZpUC2onb8sLAE8mRCvDe1z42pSPuwqCMk759V6yg1g4Xf3vb1ZZk5gG5NN9NRenaxrRzem4cCQ",
  "key17": "mYYTF46NxHZpwxacYAAn5JRHBYpL77CtKbkcJpFCGnijqfwkTWhqYiSJYw52jw6Mv8vL4QWFCk4u6Ue7wLz8QfH",
  "key18": "3T176M5zHYmphc1mz8Qc6uSGS7TZeGc6rJ2LvwJY4iB2aEdxH75thMQRwB9MfJBVs5cd5VTU6yNovyVu8HohNm8E",
  "key19": "4Fr8nfzDVdkE3nhq5Zc7a93SzJi68RM511Ke5EhTCK4u2pozn2ez4BdVfHsfxk9WPWzHx834mxA85DuzoU4XXBKn",
  "key20": "4Wmie8xmtTbC9cNe3LAWv1k9GkiYWR1qoEakxF6KxonSkcHqVHFgKH8iX3mj9scpZM6s8a3vGcNcNePywXfz3fdu",
  "key21": "3arLNNo6UzzcoL1ToDZNitba1rUhkwCxeHiucj28hT46eXo1nj7RPzJzQt8D6qMWHuSiVEN5hP6G6YVPRYBCRtYL",
  "key22": "236eyMFwNxMa612SztesMa7VQHLWiD8xmpTW3rdFhYSy6ZDD3SXYG1DUQjttofK8EZX2HtpsV8aAyMQY1gmb53NW",
  "key23": "5qjsAaUfT8dzvs1WSy1owraWHGqPv7DAmGZXVbYHWUcHZv3CZx6iLq6yeR4j7cG8137xWbPkDt8S1qC5gqaUFt5D",
  "key24": "3vL56pHMWdu4pyNCP3vMFSvPp3zvjESZyDnyhjaNCD1rgfxAbcHB1xnw53uBN92xeXTBV8xY4Bvok1R2xi9tzidf",
  "key25": "5Lo8EQgCS9BBmXaW8qWJNyJ6Jcx9LrPApnmMJa9BrVH9Rw5RCFUKAxX73xK5zMiH5KcYyLckykK5vGkyc9LeuosM",
  "key26": "eMV4kbB7VAArpd6m4sb6VS5d84SSdkU4fnWrehmkxx6cPZipL21juo3odWTN6miqqMTEiHbVB2C1NaF2Urfb8uJ",
  "key27": "3TwZKwtfBCWCRd2q3KyMaXqrQyhYDdU9M8zCpS1aVbUUHbXFe3LLRcfoheF2wcAMjUPJ3GoydFD5gKjvsGUaJKdQ",
  "key28": "2V9YXrgWNmxqh7GkYuWEPnFRxQ5GMAzNUJ2Qt3waXiiiKDmnL5KkoDcsmFJjyQ5GUvKnPiF6HRzHaHBqG1YxmZJV",
  "key29": "iiUuYdwpKteAXAG8ncPZFoQJMeGdq4BrsCWuwKm5WraK8GFHpqFZm2yrcnbCFHRYXPeDBtNHPTFcxhEo8nzKMCN",
  "key30": "3vkJfEa62yAw7B7eGxaNayQkGk1fEc1DiN6UPzfLHfEQZMJQkotKeKB9kQGFWGZgFqubSux1T4TLetxa7yF15x2o",
  "key31": "4pkvyZWmz4AvCL5pxsEFMYR4GwRHMTknHdhRnF4biAmZqpviKCASpT72ZutkEuGKZbBG6aeyarUa4PcxBUtEV8sD",
  "key32": "4WRgTiSMGFhZR9rD9Y28P595Aa7wYPcecRWmXTgkPgjGCiRm9UHVes6C451GxGvydSb5okRtRr6jTrEbsRFaZ1MH",
  "key33": "5C25At7Yx4kBeNLbD7uJ2aNV3SujZMrD9mmKS5edVWh6d2qjniab3WLfjeQH3DXP5ULeah5X63q7VWqCGc2PyNiD",
  "key34": "3HXEuhhDSLfhn697QN52KD6qtrz2pKBtFyNhi3CqsNd3x24wMhQbtcaBhR2B6urMv75F28m4UcR3vaKSWn8UNpfq",
  "key35": "26CvL7eozNsVd6a6tiLnTMxmJ6SWequrGQJHwMx4Tj83xMuYfYScmKSKth9of3MXc79JJyCH47zDKKTT5momz4Mh",
  "key36": "5npo3iJGRULNZu2Lgvd2qXnPwr3aaGTa3ydUkVeDx3oV6nbcBxu2h3ACN4jomcy6ZFA6ybmPuuv4q3JEf8dccjtz",
  "key37": "2od6UcurFAVuEMnppoCxMLN8e785CDmQQCCC8Hn42qhvB4hNW7QFuEEKtGpZmxy3p2AiuzCrnLS2f2ixRtR8dp5w",
  "key38": "3CY12g7tfLFyvLLU732pZ7GMx7ce1jCEAfEjfoANkoPRc1ev3jjfuqkBpfvJJ9QxzMS23CSTJL7bCXLUaZh2Dg7t"
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
