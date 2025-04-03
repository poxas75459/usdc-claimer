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
    "3M8hanmFpWWGupn7Q5xRccx8RwaVEt5eP8hBNqWVF3iKM593J8R4LaynLBAvQjMFrxZ8Jju5hCuj6z1SNgaLiDhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZzWHyXKQEBJHeUDnVAmYP7rhyjbBAsRxv5X8K3rHbJfPFoaE4e1h7YK9BV4MBJF1Tup6NsgvMsqKZYavArXAdBG",
  "key1": "ESe8cWEcxLsCi894njyXJybFEDtTwRowzBGQ5SdNdeCsZ5SqJ1awc6UJQryAYJhLQ17rDdDWZhKdpzd4nRDJZAq",
  "key2": "4vtPFbykAVAuQvQuReqBts8v8GCov4YmKvj82aK11EyXjBcmbxKnyEu6AiJ9o7aY1HzB9DCtcykuDdEvnZip95Tf",
  "key3": "2km2Mud1Ax3229zP6EVok92YySirya96fgKwzxX1x3bNbCchEkF5e3z6iUGZJREHbbjkMPG3G8ikQbVrLin7MWo8",
  "key4": "4phYsVR1HntYK7PS8agGCjKT3UW5NKBufr7yAwwkP2iDW8wrAatCpnKxDCnScSpbRUAto8gCsALfhJ7xz28UoUWN",
  "key5": "49fUyvwAJG1nFLjagtTUfxbTQ9A1bNzmdt2QjEYK3YvK3YsvJ3ugNXdTn5S1fe8SQw4zSoKnCb1dXKoJUMKyQ4QU",
  "key6": "3DuukPkPQT1aViPeSE57jK6MqLFYZPbbbaibUPrvyxc39wWFgLAbqnkKacmwjtkAfp16zeLiKNdWkAWaa9z1KpBM",
  "key7": "3wnvTsTRmgFCfZt6sqPFxLfh4km2NB7KbveNeKnknsbzKMNnYpCKmS37WjjG8cjXLRajNd1TiPSscocrmn368bCK",
  "key8": "3CYfV8qFkWksZXZBPTgzBFMHo9PDEBTY75QLoEng7UjkrHL8xUxg23wWDBCQcNcdcD2MonihqmSneABBdTu61ChZ",
  "key9": "5FUa5adBgG2SZDSTPGRyMsfvJcKHpfCE7QX1wZ8GXLc4NVcVYAiESZ6xUs4T7dTxQMAywqVy1fH6JKHy3fQG1FyP",
  "key10": "31g89Me5dj68EuGb2iFAt1xnU3827XedbP3yiVm28PT99N35273JQX5CKGdYcsQbBxqWdoXgPNew6eVUJ8zesir7",
  "key11": "36CNsRT7E7t3FPnZVVvg9yQrwNqxU6mSdo3F6ozCgNbm6mZ3ujP7HA4PMnDwRyvkBZsrmRDpL6t7VGRSj8yzWzVG",
  "key12": "5yTzh8uf95Hno383d2h82MqMc1gjnaY9szj2bkxGg78gq6ZvctvVFqwqsRSQUVjiAzK13sM4YSH7jP6w21h6YscG",
  "key13": "4c2uNHmoqsJ3PpXebEFCv34L7xn288sRd7V6iCHMXKmnH5H33MzJEKYdmguL9gpn7S8R1AM8AmAb1Zd1HUuYBRc2",
  "key14": "5mwionNBuuyYiSmD9oZustV3BPZ5p14BKL6FwJ4xsAEH1EnFFYLbmTUYeJLruxtzZXfB9ELPGTfZcQj6RVen1chi",
  "key15": "XVDxNHDmd82nuDuiEJPDV7KTSXnzZbX4NpYaDSLnAyEMc3s28YoxRThE2afRz3gtpKRcBEX8Wdj3Jfy7BeBes2X",
  "key16": "5LWrq17xQZzAZ6ByTarydXDMeRYXBncjvfHfnEgh3WDrbvWgnYt61dQub9Ge6bSkyNNEW1fkoVWKku8VQci6LVRS",
  "key17": "5diHyBmJ9n5obojJh4gzmifb8gL6SojKU1RNYPg2HAZdUaqBUJeXBVV4ZrpqKAeyznj2UMQvKc27FC9As2Ade76t",
  "key18": "4cf1c1YGcHNrupfTcZZ7ENNas7CDrt4LymRRAMZuQEQw81GrPCxZGzQcwHrKTGdppp5w8RCXtHtDuVb21m9JH4Vz",
  "key19": "516QPTCos9qUzAv5n3AN5j5BKoY1sSWaMP5E5SraTfr4HczTBVkVjDhEzLJHeaqKMNqaMwAGwynHmAvznnECiW6G",
  "key20": "2fPz3QX3raZXMbNTM1L2qNMhAFSBRpRgXYLwF1jhVQouds6ULgGDCfXuhMi3JaUt3bEH2JrekU5p8ATbC8eAzCvS",
  "key21": "36yCoqyXnuw7XyeVJZVQ9eRwbzmJ7udQRKgiW7L6ZoBWzPzQPtpVztAodvcV65Ep1D1FZPdk7CTxWjD1GjKxpbSD",
  "key22": "2XxeShqX1Q1b6HP298aEc2UeNe6BPJtQdP2swNF4dtgaSMwQt5qsnoeis93pDaKEUYsQRWv9FJpydj1BuJDAAtS8",
  "key23": "5mQWgdxy9MyXqwMdypEqT2jr7EGMuCNzCLZmmW73Mf8TQPstqAXXTb4XvqA5FqztjkWnpsc12DDr3zNAv1gjPyEd",
  "key24": "4tPQ9ZvrbigijYGe1xyMZUjsKCpRawFmNC8obML6zhupporjrJrspuMvyYSAwxnhW7HjRLbnEdvYbN6FLrpSXwDx",
  "key25": "63Bzwnfe8EwZDke3mKPwttxZg4Fjd6kMPumXYeLwQU1dzArv99JXDEruunoyngF7f1WtrGX2D9vQGyS3BTTDmU6m",
  "key26": "T31JVUQikmsrQLREbtqctpqrz1hWSyAkFJ6N9W83WZswAFYoR9nEU6DX4cMxxSYRn9ZkYpmrZKCYyAwPJfZGkgp",
  "key27": "2TfisE8k8bz3e2rKFeixiCSHXVCypmEKbDUd54h9nBsfWx9z2CZRuCApo5CpJJbaYoM2634j9ZmjAVkZW5J1MGDH",
  "key28": "2ENLtQMbctmSZ9pUJgYsxV4UaPz2T7vfLC317bWRKpxMsmncKgVvZynCM9FdW5V9h6pE1PGBimqKsW1YrPa3Cecw",
  "key29": "txQ6y1ZH1p9UGHdTEfuTaAjj2m6t2C8nLfbPLwWWJDxJZTZARBvQ1d5dSSmimwzp9QDcUWY8vFRm1RwJyCWeyMM",
  "key30": "24awHLKiVF8NzCbVpTASmGq698U2uJ3brPFA7f6c86B3PAPG8xiPz8AU86Wa1WZQf9hMGnywiAH4QvizzuZoJes8",
  "key31": "3xqhFjQNHjptsQzqoUW7bmhd8n8HgMd4tguJckUm7zChWRzdJXwvD8w5PcArdh4g2vAtpzfwLyEujRAtKTRxSe6b",
  "key32": "4m2wsU1CzDKVLEKn7BqYFQLmbWkuJtrK4nLLPL1q43huoEiC3YGCgAjjaBfUXnCmcNLQy8pCqv6nmUoxrPQUurXE",
  "key33": "tLN8bEynxutG1cnYrv2v7PMcfqjRMo6MYqouptr5x6MBKz9mrKcF4d5SqjA1Fd3oFCP3jbKJCAiwKKSS5MdVxqo",
  "key34": "BDxAJvHw3673YASAuZ74undRLUFpc3ABiwZyoTkL2YjpJ7Ni7w1R2bdTAnUL436wquJzbMRH5rDKWqvCDLp21Zi",
  "key35": "5R9ZUBN4PXEWKs3Rk23kxcniQ5CVBFZLZNnKWt4V7zi5BUoA183aHyRYWU8Ms8boXprdqGirQco69iywLLDyu3zy",
  "key36": "4KAQMxXwTSKdZYeFmxQi4uqMifjwUwUrgjSdcdAyGLqqvGtk8HsNuYqzz2btSywXm9YWqLYR7L6Y7nNcRM1zDstQ",
  "key37": "4otM2mo8JMYF7Mo7knsa437zvoVxx2Qdor38oQyvTWvDBR2oV3KsArv2Zge1AudC2PtS63Wy85vRKcReUVhS3Si8",
  "key38": "3H34tM9wVaLMbLyzbuoJzjCUEEu2ogRMwmq4x8u5inj1xCES3ezF5YAB3RshbzhBxqY8DfY278RzqT21wHLhTMG6",
  "key39": "2CCKT1n5pgH2UDmMoaXkCeZVVmj6TNYrSpicuraX7hRzbGo5NCYq2wmHqnTGQ1Wyhfbqc19msn1osHWkL5oxRHd",
  "key40": "54NUKk5QL4NcnxpQh1JTrCE4A4UcTgd9HaAXgez9eqb1bsh4YbEn8E1UySdLrsK1E7EThNhwVrpWCiK3ojTQp9H2",
  "key41": "44Lon7L3q1AJDPayCC8GyncGuYS3BQDKxx7kAP7nWs5hj4V88TEUVgCZenZMwiqudMaJvjhSzctNsxscQjiYxyfU",
  "key42": "5NvH6HtDeSc8HWWRKLM4fFXJ1nRsPGJ1pVovjZW2EvxaNZ4dfvG29gzYCpgcjyewJ333ZDkAU8yoYxd9EZN6f5FE",
  "key43": "5cH481Pp51k586hqrV8gRtN7nAKyyQQtX6fQJ8ftZM9q3X1rg2mbdnvfiFykDN1qds7QzKtBZwZEALntxD7uxFBr",
  "key44": "4iqE9uncnJQLZumjicmUFuA6YUz2rVdoxecUoDSybmzXbci3QTCAUTsYCjmbM9QugbagTWWjsKob2DyvbNwxhaRF"
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
