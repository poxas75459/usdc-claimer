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
    "2b81B4ttv9EVua5R432MPYD333s4JCMFe9LZxNi6yUeGWSCwhKAVZGQsSRuQmw1gCgUo1iYnVBz2PRYthoc8nGgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "391aTdSMV4s6AhGvbemBzKtTiQN8UKPs6uEW3cnhMGoPMQ2qyWq1Q2Fdy4VsuvTefibWv9DXifqkZtyACPcv3vxi",
  "key1": "5G6KyjfPRLSSssNZj55SFcnysmwKfuxBJTyzfKCNzDhQsQaVCA7SqvDfwNaRhj8ZpQRgPss6ACWMYNNXfsGgB8Z5",
  "key2": "3ZXeKVRFH3oyPrUznwPgN1MrUVAXUhVTpi6hrUtZVmipeniCAMrRJS7xHu1yTMEukQsDQu6fgWWAh9kZKDBgwoX2",
  "key3": "4DaM33WKGdi5Mu5SDvX5GHjnvHRFUKKdutTbAEfuL24JuX4NdFNGGMcNboVg759DzNrR8GUnbnkXbtLnzZzVQr5d",
  "key4": "54QYDN7BxuwzTTfPCVS9z5uTXmjHbHFqkmLWedWME5WdE4b4yU79KbZyf885pyBFQdY9JVW1nzgwj2qAQrBzy5pT",
  "key5": "5oEmnAypt1FCDaNQakZFTgJFee7DPT9ZgYHXGf7gVoxjTFStqVcGHxRRuKadNkvw19HFBRxUfREtLdDJuWUpYPEp",
  "key6": "2AiFntVSPGwJ6iVW2zW7rK5HeNPXr5TVrBFC3U4WzRRTtk7cXaA9ZXYgPYJYdmu8n4k45o8AAtQJw9kNq1nBQRjE",
  "key7": "3fM3LiqCugZXhoypu53GJ6M6b4bxAPDLWeDGPsiTcdAPATcSSNL1MHS3MKYi1JpcDrnHtk89JhV1XQGfD7fZujbK",
  "key8": "2yVZRiNpZcoXQ1P1rn7HNmuc4LZTkzaBwd7TWGzn4rXmhkotqQWENCX2BVj636McSmbjrjmHWUraxp97vr5qaNde",
  "key9": "3FfujmtoKPXcGUL1GfWiSy6Tx6fYpXiW3THXCbbaPq8FMT4KKG52coDmppM4CngRo84AzTZXobc72yQ1eprsekdV",
  "key10": "2gntn82ATtJGPtaSFv1ArnYniZYXzeEJ3qCQ1iGFTuAY9smFpSRE9bJfpVvCD5zEgzZZSsrcx1cWskeXgKBXmq98",
  "key11": "3joxv5Ts6TFpHN24mZDCwmLUc1WxBzEydAka5Be3RSQgYmoiBq1dt96X4GHcrkdEaJpiJnwE21Mi3t6548nbLPyV",
  "key12": "5k4HUSHTEjh8L7NE5LX7nUtDcAoDkcrAwr7sbAvMVqkXzhuqTcFcrWxga9Tr7iQxa44cGXXqJ2f8wNUL7nTcB463",
  "key13": "61TUuTB8kPWUdenz3adBdAy4Dy7RERDPRoJ9wT3ys7VUYEuQMNyEU12v66cqR95mAxjcWfBKV9nXctBesvBKPm1y",
  "key14": "zFNZ2Ua3iY5VGH3w4ER98nb4RXbsPtAoYzFwD1vcreHMyyv4iW8kco3BnjNqA6oFmVGuBnNJGJDYSkUkxZ53QgF",
  "key15": "26d6BYCaQbtGoTiJ32g7Hp9h5QtjAbqv7fJi8xWmNET4T2navBqPRQr2YKySXAzTEv6r83P9ZodJNFrzPTR59mhv",
  "key16": "2oVQ2X9yazY1yyWHHwUqGuCeRJTgFYMjSsXY8nM4n1qjfJmy1dyqkev6rBfR3Bi6bvoHQQRbt6LVPsBqPnJxSvS",
  "key17": "5m1pYCt8evey3n9vuWgemgdFXVMqtNKAiKu4hMgBEC1tPNPoayVSgcXdMMKWQeTS6cPWRG4ontuYAuBvRQnxUX76",
  "key18": "Bpsy8Q7wNjdRiTuTRTJTXNzm6hy14sw8p9KhBysZuUNYYQsCNfM5U6AxfLjVUCLVVXfeYBFVZvXoJtG6PLWR1b9",
  "key19": "2tsvhJvUgR7vCAUtAtFwJd1pNhekWMdtdfL7pDMQAoXSE7qiojmVCp3t9AohParohzbEWui5YUuLf533nqtp2jQm",
  "key20": "3Nn5Fag2ZGF1NxxKGvNR6mmGUU3uazg4TVi3VX1SQ463QwkVSJ5EtaXizWMYZjdBPrcuhMK9imfo2BomgJVifZVU",
  "key21": "3gsDiJxitrg3LKTPEEqLX1PzeH4zKY3di8rNT3AzQjc96vTbLT7QTGAmfn7xXj4gF6ov7q5Bnzepkoqu5QrtswaC",
  "key22": "2RLE7to5RkFxcq3ohS9WJA3vL1hQZFckn1942cenVLAPMABJTzQUNUy7b8xrbe1b2iJaB7i87d5XNoyMoFFk5A2j",
  "key23": "5riAceEDUckH6uwAuLtL7WPUcK6N7en7DjBGiobsavESYMU5bcxrYDf9nPyqnLp79iaEJe2ASps8puuHJgmQWQGc",
  "key24": "5BwwUw8tGtddgzZhjQBQrMQVzZTVnHa2NdDaqZkdRnHzsDz7JYqgbZq8wPeap1ZCaQ3ttF9oJkgtFtqWyTtD6sj2",
  "key25": "56xt3hGc1Q7VEGZqnB31Ci3fz13pHZLJG4yhpf1av2VbK2UZZuQ974tnRj5wNe9HoKUYfFPCpqQTqfgA9KLTvau",
  "key26": "5GvVgDB2FNRjxYQP2hocLcMFaCuUaunYtgCQ2ACKxqMj2VPskobEftqackUq8FCWajVQTxAUj13w1pUhx6gNizRX",
  "key27": "5PMNaYwuWrs83DPNFEpCr2McYE79UVN93X9VuCN24b9jfPCpuRKXYf4miVpVyvj6CxcZ8coKpUeKbLQ2w8tZ5MSN",
  "key28": "4xV5AzXrAzpbur7xffVsLQQRf2Cmuhy65orHrQ6gnrrXsicEAeNrz7EZFMJ2qUEPVQEHiJ7rbY5hkqPAoGHA5KmM",
  "key29": "mVieJ2exanyax2Shqz8mnNC5S3Cx8XsYs1mxNT7hQ5i355vkss2MraWVUZLQkxgPDRB8nY17ShxueEWCBT6sahj",
  "key30": "iuhb1CQrwuoQ9CAdEtDozetA95yehKKsukzYvLxSCMmstma4ModzzxGuL18pHpBgPKB81jfRMGhgseeFg79wDRM",
  "key31": "3YhUKrjr9fs5jJS8hWEjqKyPTFvskaQM93Z3F2Ymb2a8uoK5ZJurkJJiwDqSouY8CfEzuxS1cP26pWNnjhRgGQ7U",
  "key32": "62VxSmM6M6VJzUMqLvLYqUBN15h8mN58kWUVUxri5Kp5Bjz8UY9WFTzxwbL3yd6qQjHbe57TMhZQ1B89wxUJTEmG",
  "key33": "313AYNNDwze3XCeJkKsRbMRtCNoNNcDwwfnFKn8CyYBunuLrgh1DBFocAMagzLoDVYovca9DqKFNVWuq4DKKufAj",
  "key34": "2a3t8vgfjeAZabt2rgheitRFpwE5EutotMNyZCPma37t8u3L8GjzaJWHQbSm5antqF7h4ZrMEYs2joNKEY4CqZo",
  "key35": "5U9S6gyqPmCVpDWEAFL4AgHY7em3Qgm2CsbUj39fvNRv2VYCjM2EtK9UCSQbjBk2L3qfufYAnJPX4uwdAefvq49V",
  "key36": "5fpXmPxY1NBtDmWVES4Vm2iwZNY4nazrgA86BhXsxJzLuFZeYwqKgB9jvSBt88BaZtbo8uPzbmngrtkLSt5LWKtB",
  "key37": "5Z7FVcDjtEjDDA1N3WCdPqu24A6bp9byCEuTT8pHSCAVJ3AbAqywGzPtvmNjrETFxr6S7t1T3xQm8E2UUCgYfYFs",
  "key38": "2BHWg9MfCyRqJirZPwqC3SoDmY7996mXcmFmMqYwxjoeDTmwPqSt1nTCwA74qdui3Mz3m81q87kPZvuahdAZHMN8",
  "key39": "5cfYAMiUBnqtQvkPu4MCLxq4QUF7uDTvQihG9WEGDiAkvcmxFvRhoDrF19TKBmeRPZu6h2QPsEmnjQLLBepATZ35",
  "key40": "4DmJRP1XsHaCdVan5mhoQQB67USHhExQwQnSUjGBgpmM6MpRUP17vRFn6TssPdkUxq8LU6hgZW4XuSSSMe4fajhh"
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
