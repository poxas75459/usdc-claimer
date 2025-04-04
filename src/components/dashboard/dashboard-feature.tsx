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
    "2CNJFvkx4gM9wcp7fUgePrbiUXjoQrW2DtEVtPMSyZT6VpGET2stBH7B3sBVvvDdC9YKQMQq6fo6yGC6Aza2sHky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DBqdyrWWujDu4JFpUSb2vTYJW1jx5fFPaZxfaak6Q58fxhptdin9Q99Y9Fi6DSezdtoKC2knGcVcc2p7uPdSMBr",
  "key1": "RuWHRmuRKeBqYLxb32nhkoPeCVhvSV3xHEdh4AHM9K95gmmTesiVVc5vFfWnsLrsJ9iTodMwvrRCSMUff6p5UQX",
  "key2": "2w7AVjziY2DKkTNpxr5ekcuWeQWocRA5Nt7PCm6sCahb9H7dbNpaa9DnPjCUQoPqtgFNpTqXgKFUpSH5Yzpg6wa8",
  "key3": "5zj5z4f6VmJf5Nqkn11WvgsB3FBT6tC4nuFBKC6jKN7HrSnmEMq7v1jFhRu2HrvUxSsyNrR5BUCG2fvbQF7WC6tn",
  "key4": "32J3SFqCgYSxFUDzPktQvTrHu4yGRvSYMS1cdUosKYBUUdWg3gQeSgBWzGeSMb4BjrurtvwZkgdxbjhwYFWeq7AC",
  "key5": "4vYXzYEXw1MznxgmbovX1Fz3N8hGWDfzRqmr3UjsgzwRfP3hEbHjJ2sMVViqxZJ2DAdBJ8higyYht71L2HRho8dV",
  "key6": "4qosVjjEt2DvWvwqe7JSrE2ZRxyrY9R1ngrYTkMDmqn3PtzgcqxN4ibVXCHemrocRn3yDmHf2uXRWWyqwxvBk9Sj",
  "key7": "5ZV9gxQ4ZyhohCM139aVpTMzeoxPECwwRypSPH8rP9C7R2zX8yL7up9TBRwBaiVQNsgJjzikczkwB98umxC9aBmz",
  "key8": "45KKcUMWtUWHcC4qhy5GWdwXhQGnAZsg63FikFdt9sPkChtQH7P67Kqz8T9bqx6SPoi6VxfMiESXS22fnBqkBnSM",
  "key9": "Kj5ZVUUAqDc3B5pdHS2d7hjdgt9ssDi3z8Kt2osyybNG2yXNNfjtfm6k4cvqf7Ewy7m5HCsEZPu1a7tAtYwuLeA",
  "key10": "4XCMjTaDLDxBqbEvYsUhGoCTe5Sz5vYgJu81eF2NsKHosHoypFGtqCEP5YZivDhTqrrGrephQNct7tcVWCzjxKou",
  "key11": "4DzaKVEe1BnyeJRA1nk4BUwEEeRdx2UAwUdf2Xsm1nBJH51pbZXeJZ7hyR9F6RB8py93H49jWA9CK8cj3pLHzW76",
  "key12": "54JVuEJhLhSd2qbLzQEons1ZyHiyrL6hYQwsxCZLM1AX6rr6ojgnRSshW6F25FBbV2RsBxgWmTD7ebYKj3L1LRTP",
  "key13": "2r7eaebDKeS7B1ghuADaS6sFWC9Jg7S5kcv3idBm5TtgiWqLQAvGAPgB3tvqXNHWorntMCvRnKVJ2fvzCVUtZCMW",
  "key14": "DuJhMc1dSjRHdXgSt4p7tovA5WoiGjgLd5u1Uhp94qozthRZbk6ZciVrhow99xcPmFbEhnuSWHdeRe2N4yGnAog",
  "key15": "4HRM7ioD6M7JZ6n8j5n7RyvTqjsYDCuA4jDoZWeupFrjs1F3gFu8Pa451fU6qsTddwsZtRqujc4yG2EBu7XgXjUW",
  "key16": "4ioGGuoib5YuPSqChmMWHZGHLXmJ7Bd1oyzERnj77UzYDLxnWJVj85psPsrZcmQGx8Ear1CnKEkHYo9oGHzVjUWn",
  "key17": "3tTjvyJNaRBNGqoowk3YXqXrGEwF8dvR6v57GyBjTAc4mQMJ8CvCQQF6XXqpJceDo8WE7ZQ1Ve7qKGbRYepdhhWd",
  "key18": "4RX8GTTfT7YZHkuqbYk8eQmEFouK999Ujhi57jJfKiJVDwP7p4iovg6YTstELoJvmwyMBhR4F25JE8DJBmP3VrfV",
  "key19": "5TiLVjVVuEd7Wqdtxnb6Es18HGoy4zqRTHBcuZAcXBq2WTzkzT1uozy8CazGxXW7Sr2Vgq57C7HJNmXooXgLtJrc",
  "key20": "2FmxSEE1SXxdUzhDwVYsjBCoVswkdaDSYTT6Ud8G2RTsqxmB6i8R4K8fkpeUMrfA69tG3csL8GW7RaGYpfvYmX93",
  "key21": "5KTavwPnEEMSECxxiroeeBJ4DNUTptFbaiLcKhXCXNe6PEG7QNytHhjsU2QsS2DSUS7wSQtXN4Jycn8r8HB8NjK",
  "key22": "aT9bMKm2jebbN6Pf2Z4FB7G8VYvJjXTgXheTKyGUDjDbC28nHNDf3h5ZbMPzncMjmGksERxM5124RZGbcBnqT3y",
  "key23": "2MgTCmZCX1mNGA6Hm9MpQ2x4vvSoAv3KbTYBH6LB7oWfcc6ukG2D8mh5y4C1WySuZbGZ2aAEn9EYGXzvyEdjNPCY",
  "key24": "4KrScV1VVA2W3SycUaFEechqvop7Hz8BX4DrV8EZ2GEVBQ56B2xbXYcQxKddyryjoY72CEoCqFaR8xQ5jEbQpYaU",
  "key25": "5Ch81dnaEAfFseqavePR2GZPWzoqFNWpb7eeaeJyZnJPBeyx74KAGD5gnG79YMRGLa3nNSVF8Pm5oQNEzTioUTU7",
  "key26": "A4FXL8SJsXuRMWwpd88jVoimkRjg8JoWAfvAdR4U2HhY7V2HQmipVFnHVdQMT8SW3urUWtrN1kWSfPnyMHqQe8K",
  "key27": "tt7R1Nj7sQ2h3yuEoHqqvA8DEizog2jL63ShTxiAPJeYWmNxhYJUt816WHXZMPHSe33C98jfW7T2ztyByaH7YYG",
  "key28": "35EX7S3KkbDhBJwUAFdtGdZNmbU2JAu6z8tf5vJu61KoKeNSraKDPN7xLihQeLnha41zcSpqfFAZ6bn2kKM5d3w3",
  "key29": "QNbAo317ZSr9uHQYFcCdc5SaDZJtEhZfuQpmUsscxnxS1RXwzofkRWvwKsNq92DWhL7SUBmUcUWfjoadJfg5Yrp",
  "key30": "DtATpcP3inDjx7uMS3K6a6n7ts6mWPK4XYw9F6BNPsByrNigmTSzK1q2p9VVN9NVNVXJ34R52ZQCrjwn1VBsUza",
  "key31": "49MRNm3bY3gFy5bATWeWEPFjmvotxJKAvs28Gtrm3Lixh3MCXfyS9gPfmZynCJGvnVBGLW5FqXVioaLYrtRXQhNs",
  "key32": "ZakH4f4xr7SJgHGbuax8xoii5Ku2RLshjaEBpSctoy8KYgF1d68rk6Wsbdg6Tjz22Z7FPGy32zi3q92PBVMyeBB",
  "key33": "3Tkh8sHtpurivrCsyayX8wXZiuFcQQgDvKKS5p27BMDWngJtTYzrCYwXDwH1w8YEMHCSvgzq2ZaJw4j8CaC1HhZt",
  "key34": "2JiP8vhgAYY829zCKnQabuXHdFwVnZkXXnNUUt3vZP3iyPg2tZr5bUrDNBsxL3jzgMXrZLDqi8mbTPkf5poZaWHJ",
  "key35": "32oFNFUnnwDpzp3ArmhHYwQTkeWZixzAgaDZ2UEA7L3dcvTyCM9jSytsCAe6LWjK3xkrDCY9eYfSAuYDcrhFRLwt",
  "key36": "3pVXffnEhA8emzaPF89nrkMuxz7vUMGNMtrod64k7151V6tDSnDqVv1ey627ph5s4nAtWHGCREypitiyN85Ttrhf",
  "key37": "3BYNjG2P5JdeUYMkeQDHjJnGe6sKvXWgeU2T6pCp8UXNqbZ4hqx882RtSz8XZSa714oXJsFBQceonnajzQnwKzMJ",
  "key38": "5f65EHJ3Niew7M9Lnzs93CTWfbACfYrEm8JzVfmyi7neGHtvcfazhjBjfAZzeezahbcmpbxpBK8S8Y7D6Vz3W6oy",
  "key39": "RwaFttLphWNnQatd1W2VSkJm9As6pGaBWTPhdjZVLmLZZwhXgDA8YsLNwr5JaVkvoPoQSjXGffBkMCkrh1FDjNw"
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
