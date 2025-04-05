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
    "2mcXqwjPsuLj3efUaGGGs1YEduLGvAQPKEoQmw1DRgmLWkturWuAfYQ8KLmbuNqvZeipADrWro1V3mr6ehNgKxuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qeT7vhQoornBpRNZ55CNd8kLAAg5mKChMK5DcbbopXVJUa66Q9tM9rjmC2NSrjGGXBJaViy6bo1T2GM4rnavD5d",
  "key1": "4a8WjzKgNFH8h9AbA3eBpBLPfzLCe73F7w3MHdKYJY9amiZ4tFGhgAU5MMHW9QMEVYxViUAmux4rtrc99RQxpwg8",
  "key2": "2B5b7sCxZz7Av2BaRX1yYtidhVTVdbMo6LwHfyrdfT3EibZt3yq4YH2mPBC36QZkQwax1oU8Buomp3yaKB1jr2Hq",
  "key3": "57H7cDAREaKVeqqChugUDR4GZoFuK8iXDeB2ez8RDE5tPxVVXgtqdZGstve5UxQhrD15AR9heepdoWJpN6JfERAg",
  "key4": "5fEEEHzo1XkFeZuiKhokree3SXRNmECEqrARG9Z9gAyURdfiAn3FhXUN3YjsCGPNaKKF2ofXaM4aH8mpnR7PBH9U",
  "key5": "3hd4sz72vsDUwGHRYj7Rboai3P6UwUUUPpmcQR2cCYUYWwmHPdbALdNzyCzZA87ykUFEv8p54A55eiMSdHxG8sSg",
  "key6": "63LQV4BudBkxjydcCjMQSYFvfC23cJZenpYPenLsuZf7DYw9jTiT1jy5AwiuUEeNeSrBt5Lk8iZHWkw62xwLQABt",
  "key7": "reYhebjzctyNC7igU5ZdxsNVk8SuyrDJiRtZX85CjzLRKf51JxXYq2jE62c1qx7X39XVZZftVysQmSeScmvBy5W",
  "key8": "5wureUoktyw6F3Jn3VDocJ4hV27WW3LLphSE4Rx9BW4V4YVYrpsvRP88giowfbF4mL9jzRhfKFz2yyFumkCfeVeM",
  "key9": "3S5rj4PrQt63VJoLvBj3n6tYWHhkxmpuEcVMR7pAHm3U4jJsNG4e3DZM8q3NDGPq3xfZZQxj3tPBVDVN5BKcAVvh",
  "key10": "4rk4tRJTpmFYpiNZtVcE1agQgAg6y1y91JY4QhZu8bAZvWXD4SHHZVrYUmQ5rv1UfLmQXXkHHvwnfcXBVGi3GkV1",
  "key11": "4KMFqDTNDzzSJohx1TgrF1m86FMyfaqgL8j9Hucd7Xmb8cEaefhBzdUq4oNApjokfFroXLZunQxNhqKmgrqBoXWc",
  "key12": "2gFKPLMkSi4nvPLBLn2eBjuySuCNV1i2U28X5UoWVrjCBF6LD6xiGm7sKRXErmmrB6AbBFAqEDuLdpWKHY7V5SkA",
  "key13": "2TcvVqv4Uv8Uvt817iHamjXCXezeohyApLEmmjELhkx1xjy83YyQww16YG4TDAjE93gwT4m9BcU8eKmtSQoquQ8U",
  "key14": "FQ2XR6PLEbiHUmbcpw1P2ZFZvY4syP3vQEPSrng7wqyVryPbB9TrDyoo6gY8rtNcLtPrX7qsqjVVaFJHyBCxNoV",
  "key15": "3xc5KMwXfjuyZtRmNBoJeLbhYZ51tNFZpDMVptZT9v8ak2NfJ3WcLWRHY7WNBkNaEL5iryYaFhd31XZ7RmszuxgD",
  "key16": "2kqu425QN2zvgFVVMs9ejrAY9Ajsv4PZhGE8rCbHJJ3FwLiHpVxq6jHKBhEXmENjGoUAQXG8WnCrPmi6zLGRS2Gi",
  "key17": "2iZvXw8YqsSZn21ijWiu19Khcf6PsehkbjusRZ4YwHRwYRM6yYPWjcu8BQktJRrLxnLqjD5obzduL9KCR7wjsoj2",
  "key18": "y3uVRDQJMH52tfCKWDcAePDSxoiE1ZKM9i5qSyKEEkX6vmJFxzmz5fas8n5foVNce5GWKC9bijZ5fZyWSEHBimV",
  "key19": "5z561J8v73CgJekeCLiXdsdy4JuAiA1CzYTqxdeUfEVe4gXQYDPt8tPzfRhjEan6hkg17DK6b2c6hTzYLGPAt1HE",
  "key20": "3A3X5gN82DLcirUrD6Y7WbwfD6nrsUZJeXJp3UBkfcPWZMsapcwXw6NxuBhQq3qntX8mjSnkNmvQ3vWsaRhsEvdr",
  "key21": "2yFJ9UghN5FUabCBVxgFG2PW9zG9ctYwdd2AFSQfApgiK4jgDig7Lqv6Y98GXYmu1DAfiBChLBVwK1hZtoSAKoJL",
  "key22": "2hct9ZKkExtw5fY9UjoXnNSgBGqZRufvJbbZuezwc91zcDLxGEENvJKt5pWLE5z1pQE8xJvWu3q3zu4aTq8meXQa",
  "key23": "hQVdboJDVGKYCUkir3im4mXN51FyoEhHJih4Vmmt4XnqwwGvhSJT9fKuCg7aDvMz5uVVvNKKHowTDFVq2WF1vok",
  "key24": "Zkgc3Cxcv3KTBh8LDXbn2aaGLq9V9TKbJac9YDnV6U74gZ936D8VBFSbpkX2bkmZpP2u2rCqnoJGbtUiXGcKHrt",
  "key25": "3S5hrHs2NwetUXq1x6gKAMbo46xVFKBYiy4VZAn852K3YP4r6FDGQyh58gdEtqwLf14ztE6vA6bC5EQdE3XGYHd5",
  "key26": "3koKNVX6vQbVCMZW1EW6HdvyHoqnhAuizgKsG4XboU9doh4YfCtqRjKFG4uy7xTHdixvUcaGAypqaEiSpLw3ZAtA",
  "key27": "4x3L6MqCRYUhw7ggHjrCVEqwWJLivRDnR5d6f6MiViEfVeBx8XLkGWF5tgNKr6qik1c65zhdbLuMHw2jaGbkk8KZ",
  "key28": "4K2aoNCaVvq2vwzgVJqygTTcha3MREry3XBV5ZVfDmPveBPspEdEdfbUg3Vqf4AmeLuwH86Z1JGPzP2zeoai61DV",
  "key29": "4iqjzKaSfaxqU4sso6AwFQYf6Pzycwu2eohJrq2CQFznkJJhuV3BUtL8d8un11NUYTNkzn81VxTDjxhhNE2SGc1x",
  "key30": "2eT2oXCFAMJYU1xDKUztTyzL4hme8h6gqummKM47yEa3pg7pEkabGonq1ysyP6wtpCXefRBviWq5XFdRBXJc5JWa",
  "key31": "23r5wpLFokWVgV1Dqs337zZEaPCXK8zVa59xt9Cffy9EdvFWa43MCRJ21Jhyhn3iSPbRiAF1jjvhbyq43VnKABbJ",
  "key32": "x3ENgb41nxnQ3Dzm8qFzDnyWkJiP5K7e1r4DnGan37PCXEoA5dXwUAUi6vktjrTTRMJGD2sMHkeJQbfsgwWVBmr",
  "key33": "QuzJJM5xVHSZyRNCjJxLeevKVhcHaAoNt6pXJSjxpM85H4bdNM1R19wGgKHv2GfKkukny8yAVZbQnsLKPfwZ2Vf",
  "key34": "4Xi8st7BTuEAZx3C36LazmVQcVycbNsxwRXwJj7mu3qpYNrSLfLCRW4ZMGNoAMCLnXumuWwVpMggi2agZg1LAWJ4",
  "key35": "qCUsS8C1718XmFbewUqzgGBAs9ycwwWk7eEHZSC48U3DGEJwR8eZ8LiC7WnugTkGvJm45Q3EZa6TgTQyLcm7Hhz",
  "key36": "67VASbfpENiVWgw9DnxFsdUxi7rWCBzcpVzBKcfprgyTm64uoNFGWEZY9yorHyi9D2sgRHQ1zMe2NQmT1Rud94Sv"
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
