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
    "3oA5a4Pw6atYVFW66U4epF195tpb5kHq1xp2fmuHboUQAjMsDGWfcEHVdTxcuzit62mDv4yXYxW5ymMzFYoXiQ8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zCVCtuy5c3ggmqM6u6vjskvGVjxkKfAScjvH4oiKkkKacfALfNy3XBi6qmMtB9eV1HVDn6wq7ivwTXrFN5A9tGE",
  "key1": "4mhqYJkNFpYSMVUau6qqFFhceFFCUhUkNGaMyKmCgPieTNY3EAkLsosZHhGzcLVMqagP6vk73PKXuhe8BxeQb7ae",
  "key2": "4HCJZxbmBFDjYvc7CdjV5gthvhUZXWMajjtUeYmyfS1FiV9fenPn74U8bUsBYmz4DZHA3s9EMj2vGqTXuiQYqtw1",
  "key3": "2PqmyR6515MqWD4YwXmmWn6MFczYp329e7bMxxSpmYmLv7XnpEcqUJczVmu39YYFodVMdPFbWRP5gmgiAk1w6KVa",
  "key4": "uGpoceBvXTs1rkJ4nDTTF7x1uP2GU66Fzo9ddYM5CeF794pWNtswWmFPs3oHBqbaeTFWyNJysnqJcUuiXunjFEb",
  "key5": "36rTAwpp25BXmYqdkX2mYceBNzy9P1PHFMD8nMX4YvioU7GNZCiycwn95SdY7SwDtRyxGpHNdwEJW3a359i8BgWX",
  "key6": "2gBgQqcfRFzgp2CZ53D5dCwor8fD97ATrKLGCXhRmrVwqNCbVJzXqZ4PNQt21BLsuYUQP5fDCyqohBPdHXWvg7RX",
  "key7": "fUMcdTPWBviPR1b3YaocPQM8o7DtSsjYycpaEfNeaz6xprEtHR5N4k3JnTHwZ8HPH2kBA23aMRpTriszXRFYDhU",
  "key8": "wEYVWJq9Q6jBwpiie7pAoiXSzezBp2Cmf9zN5sJUKZdNoRYx3v5N7vbjnj7ykXpB1JFp3mdv8rXRbWMe2mDc7zp",
  "key9": "5sTpuNKLa1z15ss6ArKVi2PTvmZsh4jWosXPqyeAJmp2JdLVpQmnDr2gPW2pV3iW3j7jZDcDLQ2pXgTDmo3gxKFv",
  "key10": "3au2adJ7QdDtLXb16JNVzRZxneDFhVKpKxJZZZjjd2HLk5e9t9WJvhrtouQuguGttrAsUJN62iytdWbNjfM9hb5p",
  "key11": "3svTsJugwtxas2XeHaL279W7TycNRAZMhJabN8yhS7dn69R8E3yhLf76DsWo4XVzfU2VvtTzt1mq97R9gbJCFN3H",
  "key12": "2c1vNJkmuSrAsajpBYt3zGHpusRfRo1p6KSm6Ym42LdXkLg8X9FfQ5t4eE9Pm2qqMxdQgw6RfHAvks1SnKarWddj",
  "key13": "4CsTbGush4AkVsqMKLErQy7RA9aWeSQh19hjWChbw3ZEfeCXvACD9onjT2GXUNMPQYkWnXgSNtWADmMwZExDiRjr",
  "key14": "UUyQFHbfYYMh5rEjKx21iVwrF2rkZLYoM1HvPUQrsyLzSHz4JFtc8h2FLDywLe4kgH4AvShpK16zjm9sa4nmBZ6",
  "key15": "4oBmokHEmoJMo49bs1FYiDaWCgFgrf9x1cvQP7SV9csJaKmjQeePP247RNZiLMN9iu9HXxcdakQZH3mY9dNa9zW",
  "key16": "4wGg8pF9iEgnxdmW1j3bKjaTwNmZ5hpc9SRRHDUm6d9YoSG47zBXrVr3KVLHeKHyryf9mRAYBiPprBD3ii7XmQTa",
  "key17": "3iaYe4SdT6h3Pzm7cGHsoUr8HqupjzCVmunukDeEvmLAKBZVpwY5tp1MgGLBiRQSuqX36w2NPXESGEevFJtLMdDi",
  "key18": "4WFN4hCgrCzDznPYtY741ntu44N7yqe9GEmYYaABbRi41VftGrMaGgksLkdHD4MsGXM9wcG2wwFeCH71j8CNr5DH",
  "key19": "3uYTVmTpWvj1HksLbeAGSEFNzrAYReRkhV4NQJMSyexJuswdtAuaKCUVdDbLC8mWzbQuDwSvPxUyq4d3gfiSHig",
  "key20": "KrP7ZENS2rPS33T3JkiXMBWCEYnDnDHx8of3PCghcTxctff6VgnTuMSAjUrshDMFXGAha7aj6Hk1zdKkrjHX5MX",
  "key21": "4B53tAijhsEg9sBWjXg9jqiUoY72sK9AtG3NfSUBydWY5G1bJJd89HDDZjgiKFkvza7xEmftNVjinX9ZDdHATpGM",
  "key22": "2whsSiY7vgpuxhVc65NMofsx5XY3N1kdyFzysyzLweuULkawW36HoRhzWvCC4itGkJC5KnUduVEF1TPL7FeZF3XN",
  "key23": "4Nu2o85yUdrQ3ZNZXsr5WxZhZv4un3eiJftk465hHiNsDfv5n3c7SLWCPkmC5GkYnHL1ytxJ3VzAah4xPZnnAAaE",
  "key24": "4tc9Ufv1m3vWJSyKCrU82st68p2aPZudKENMERfBSQo7GrRMsjcWRCWgi783mhsNmLu6AtSKRtWTXcCUtN7PecCM",
  "key25": "2aVw27oktEtriNzyw1JwbQEkFbMX6sQ5ZgX6hFZKRKKfq4FbhvzdjJbEw1oQYdTwtJeQmDkqsGaV8y7rytQ2yowA",
  "key26": "4QUHP2tHghyGwew9zMtMhzGVDGLg18Wk8Ex9zstRRkySqKMoo87rQvXQPfnwm9DKmCDRKTTY62G2w3AYyaLxG3zg",
  "key27": "KDim34ZS34UQMcJyCyTxM5skW95i5zAFtaybUDBD9tzgZBXfY2hyBJRc4FhfGKFHpHM55SktpY4gLRzuCk6SzQ1",
  "key28": "3LLUhCHkB1P2buPvzQnNCoXoWYkQJWneY9mHsbzAiuib3ZUbjKb2kGD7f1QbmrGHdk3LbpNQgZxH9fzXPq1AbEuK",
  "key29": "31kc2M7y9CvrCSNYUdVyFq6K3nq9h1RVQ8WbbVfnkYg5Atgfz7fnKfL4iDpFm8F3VCk3y2NYUzPzQye8MhmHKP2m",
  "key30": "863iKQiptwotqoPgM8Y78cvduz8LrTowySboVCAq9NWPHescUQuJeRTWjQqh5z2hw5uNjgjK7KQAGeViwo7DFL9",
  "key31": "4n8E9A9PCvuyk1JwxQUYWXtHoABiXt3uVM9hjNSSPhEGqtPaDHce5oqYzvjVnEo2AvA3sLWYzdjuaexdDas9Q9e4",
  "key32": "5M69trsX5SUcEmBtibWt2AQqcNR9vge8hrPcc7QP2Db4KrZuBQhV7ieMUfWTNfaseDxRBdo8ntWAhFsa4UAM4MqM",
  "key33": "67UjsyNeSRtjZWUMmi3Niq2XGhPFF1QuiNxgMHBxcXKRz3mz2esvafXmESMv22rJyrNGCaziXMANLbqzFUHpxE41",
  "key34": "41ff7RoeZw4vJNpjyqp4GFCCxp6fLmsrQ4nf8jmb4W8eM649a41fKjA1KVenmMk7woJ3NLCXxtUdE2y55f7iTMfq",
  "key35": "2gAyajyUKPjhgNie3uUh8jj6G67HmToPJPYoDAw1w6aG7ZFy6r9mtbBMtqBxbQkZdiRLPrkdC3riPpfaxHLPmwL",
  "key36": "5okzAuKfubpwde1BFy949vq3pAYeTCAfQ6vkBowR68V1ZqTJDbkLk5oGWfoAwSnArQSqTEKw78J7VkqeCe2EZM1c",
  "key37": "3Et1fd5AzehxT5fc3Y31ZS27g2dcb1FgTApoL3dKB6U5LpiSL8wYHdjZJwr6xebnXnuSNS9ADdbLwcVQEFZZS37R",
  "key38": "63SSvTFdX26ACTDC8sKnK2RJLodP3wFhiscy1T1zczPqzKa6VmiXk6vsCWrevUXocthbbSnarsMDJVdo3aD8Ui2m",
  "key39": "5cF9HxUwXmLLYM3bMfkSm9xNuKz9ijdyjN1NCfbjpTZ7X6sxjLYNg3oKuATncCkveQrfDBetcJCeArCYUmLbvcXi",
  "key40": "2a8HmEMx7NT5y9rUMZ4rEkvaQUXEKPEnQ8NHQ7ZZC9DfHecZcveNFDx4HRnwEpiBsUyTdJMQc6Kxhnt9xKpUm3e3",
  "key41": "3CP3zLSZkRS52P3JtLxc1By2VhD1mAYbz2dCJqCxtamH7TbWSchSCSETLSbqg1fRyCPcWVU4DvWHzfBqoaCSn7Bf",
  "key42": "54ko6yiyLJVB2vSvYwJWTF2o745tq2eg52aL5BiZzYwZ1T9hZCh8VzVdTaT2wdMSYF198BWjYu2B58rDLETfMjSj"
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
