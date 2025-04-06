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
    "rGsF6JoquWBFfKTtvYjeHTaAknPQ9xkCyEcYQHVcTxJ2qPSF3XR1vJr4adHREag5bnWbefLDqb4mxBHjJngvySY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ezyc5tYs3zrSDzYeWfbhX7x1AiWjBKpKhrftTZr7sBu8hcCzXwvfVUsZ64Lyis4VJNPEhdWUC4ZwZA5o4GzxTDb",
  "key1": "9KEaKdv5yDSLhSRnxqhzZizWkERw2gGEVx9nQ9dwNwRxq3VTcsjxkG5LAYKiX4UaeCiq1HhFGLo13PYdYFBA9rr",
  "key2": "42r8r8Z3RASne1aknZfEvtGmLikmByosBSSKkxbrQiEspMww5urMdegyERTk9Z6pvAK9GEbkAXn3BV5bpMRDwd4E",
  "key3": "46KyLcJNY8QGQUTgkGYVYwqs344kE8J8jK214sE4AwdqWTGKJMunhkawf8RbkWyEevXp4VE4NUh7JwQzxGzkR67G",
  "key4": "63cyiYq3SvhamekkpSgaAQp5gG974sdJ6G7GCehNQTfJHgmTgYVWFaSCjpAE9EyT4qece46Fh3XhnzUjP1fqXeun",
  "key5": "LWAJofiED11dG1NbKcyBDm9x3hgQbaSpDDSRMrU6wAWsS17gFUDfe4zMsaG6fW14wmUFGyLw2UZTFVo9GP5UDZW",
  "key6": "4KjKYmfs6BXfkHTg3GprAdX1XZC2kkfQUk6eJXxLmaMS1MYowawUJChd36UPVuZuZJYv9f62byD6DyWkH7gWCPUA",
  "key7": "5qKuZKQ4DFExNDE2qqfSc1Caaf3aEyXpxrkWsaudjbdZJcPFN32kK6vgCeLiwn1XrkhnSB84gXcHWQVrkTRu7mUw",
  "key8": "2m8sJgZLC6f8m8hR9G1UAJaep9jmF3EhXYcKDYncPM1azzNGuNEjyZYZFhdHgyydLT5B7VjxkgAQA6zMmzrmUWuX",
  "key9": "26Z1Yp91t8iYZ335iMYJXkXkB5FBiAkb57ky1Ngx7YoFkX6iZgewUQMUF2aEwAVKdKcoCUk4JWV3K5JWu1QyEpd6",
  "key10": "3y4hdoL86Lu1shwSYMSRkJpgmJvZqDvMXemqt6Y7Cq6YxPfnDddHU7awVz2fRNEsxn1P9zD7MrHpE6jhJoN9MmH8",
  "key11": "2LRxw4vsmAic2qx9A45Zq9NXgex1cYoSvJcWEFFdaaDxtLxWxsYmspUuE9DJEdfUSgNJsSZ2Jq78Lxbo7JDwmrxP",
  "key12": "3qiqveStvSveyWLhJtRhUsEYwzjUonfSQafesreT3WRsk3B8nbAoVNTExEzG5me75vw7KAA6Qd4XekGH2JcbVL4e",
  "key13": "3VbwG6VAesjwUf7fZx8KBJdA5ZEVArL1vqz6jX2imVXCyDMHEmWhLtN1iqWpj9gtibEiQxew5jBdDvrV5LJv3717",
  "key14": "2UDqN4SGczUFDmzE2U55vponSu6xWwURpDjmbSGN2qpU6SPMw6rms84aR4yt7VintrR7rbE54os871qCgo2Srjw",
  "key15": "489BuXiGqGhL9tT7hoaHKTgoS2yMmEbMAH55RqxmdkiXJhFKVPB6mv5EeyC3Fa28ue1urK8ZRho15UombssYEssa",
  "key16": "2CWCZa2rgbei7MQoaU6GfD894Gvfa33m4WB1A7Q9eNCjrHY1opvABX814WervEYjcoWAyRF9H4feHDTXqdMzmSfV",
  "key17": "3t3dSFKLTYkATJVjwjPcCqsCmdkGK8731KRjVrfTgSBvUfjDcek9vLtiFVM9fTPgEN9gGcxHyrGCU79WCuzQZsRY",
  "key18": "aszetgpD5DQzrzvnxenyVwP7HR6FK6bhmCt5CYig1RX8iymT6X9aUJqP16Nx3L8sN8QeKsis1PLq7jHmvoHBJ7M",
  "key19": "3zCWSQ6vA4BnKikDXxhnMGmnY7kkQARXVfTKekUBaREPFKJY2YVimMaKEpn25kH9YgXSxLme7rHpR7Gs7sytbDqX",
  "key20": "5p39jhs141171Gy3WmXv4yyyVmw4saQVkU6zuja4ChB4gCbdFc55VUGoYwkkSYnSp99LxUwvJ9Cs9tbMPXtstgJK",
  "key21": "AYRuRdK5AiSMi6VTnNZv1kE2JpNkkmsBawnDTV2qY8h77RVGpNctxqwrnUV47QLyViuKiZGyPEhkkou2gDJCW37",
  "key22": "3hGDeakWGAFTbS6sFFoWyPHXqJUao3g93YPARiQAj8nLNUvX11TYmDnnrzGXBMRqR1bDhwnyVyapoux1nSwuGfJz",
  "key23": "2PtcfxJ7rHxr9CxpuWq8tcjWZsvCgcQhxthZ4fK9it9JJuVf3Ym7aKsTYfaQsjHCLVdjKMPNTLbe1343sBQetEGt",
  "key24": "5TKbct3jKjnZscRp12bJxwLrE6NTedcFsiTdauVjLEkggxMNFnHCHfvoZFERyM2mVbCesVhFz7nd7EXKYd78AesZ",
  "key25": "3cnk9uoGjSf1jgbWJ9LY7Uh2AS6pQ6p6DBcF5dYu2w2N8422fFZW8EpY4q622tdkEN6kdWZrjMNmyzMyMBFDQYbA",
  "key26": "2vqxvfD94YF9MmLgmk7MahNLArzGWxjhXheCVu7v2fztkjMNi97f6Gm8aaciQQQRZoYgHGK1cCffNg4CPqPY8LsB",
  "key27": "aWPW5C2HjqWh7mW45L38s6XuBd16azi8YvZZgWDNHeu7Xc3fqr6759Afrp59p4eK8WDNafVbiuuuVefDpsD2CX1",
  "key28": "29rEkWrRwhFrs1CCqJgeTyob9oEqCsEjLYa5vPN4cBP7A78kbMYZG1efiFuJ4b8HigHGWer1JHt9y4qdKMPihYLc",
  "key29": "3b3S4rMac5bmNA7Gou4sLXUTw9M9WkBeJ7n5G9ps8pgMW1FPvUXDWAPMhXDPjvvaqumog9LCJjkYr1XAcnNVJDX9",
  "key30": "3NLuwoHsPHzD8qSNdppa9oLmgAgs5ACz8duFiJzFgg7VbA2BTGCuk32LQvTtVS9BYwwJFHsbYQu12LSUdk98HaTK",
  "key31": "zKjRCNNK7QVxZLWjknD9MnqZMVhi8iaG7kW1KSJo1Jdfm7zwSqnD9AeNjJjBW4Mhb8jYWvMo9ETfxzbjAaBivpn",
  "key32": "SqBv4jhqb2kc6L2SMXhwkcRau3dc8qLyrW6B32Pc6kGfdAJYFRzoHc17EryQBBqANikaKSsdhitHwMLh6dooykE",
  "key33": "mGS1He9W9raDFszzj9qVNjgwpPirZxogBxduAsgjn5Kj8r6pDdXa3bSehNeWwXfQufdsxERFP2AaywpzTNJfq3q",
  "key34": "2fcCKNR77DFVqBeTvGBae996nTvH6Q2ivh5DvrpLnP1pZD4seMi8BiC7qhjnVdoStJw58N3KzEmaA658oB8Mv2Xa",
  "key35": "PwmGfajFagiYSp2MfuJKe7mYvEMYNWYBDLRxt838CaVcXpqGubV6Z7JAd13TsQbcS499tzv6q7kkH6Kk3fPzgHb",
  "key36": "5EsWqjoSaPBuPHipYZZCNbybKF6jjkPpJ3YhgJFAgMQ2Krwa5HBuWaeKKeahphVe3Gh7hGEd1XPU9hFutdwb4cYk",
  "key37": "49VAXEmJhHLc3pZRUwjaSFNL2pAGPZv6pu2HY6q4oeC26NtdJwZnhCVM5FTNadCuQLtioR48FqKakWmH8WorXHXE",
  "key38": "46ZJioxY4UjPaErmMb5ohuuMRijJeUrpu6mznBNoGcJqjBgenmTfQbE2jTQKthKY9QB7wEw4my88g1HAzqnK8fxs",
  "key39": "2kKtgkJJdA9t54DQdqvAs7LUkyFHPQV8148yD76D9w5ueisfBB4Mp6N75BEd9mw9jLJg4xEupr34PDCKzXwypCH3",
  "key40": "WAquGruJ7QvAMJca666DCKQKLfZzTSqDqUbDvEQdbFgmDsSR9BHR1u159VNk9LFzeGzTwWEsFDBZ1T1RRZPJR5U",
  "key41": "3Z4ipLbTt52owSAFVthPf3oMJ34Ess1wVd5YJpAXY7wMJ4m1biZiEkpm9ogu3Rb4gCmhtaYaaNSd8nuGZEMamdkE",
  "key42": "4nhjWMWqAZ9bdmPRLUmpM598hNxu1u6DmoREzKLbiqpVsgKejEg6VArBgD3ZN3CLn6TJDm15W8qVgmyBgcPA87yR",
  "key43": "5uQEavRY4dxxssEcPN8Vj5EfBxDycJCrwTn5Ns8a14KKTjJEx5AofVxPTMiAexD8vcfWSHN3MVRhTXrBBb2ZKgJ6",
  "key44": "2sVqmomdJdSAb1XadxXCM6Z4hdKmxvVLa5WZa2Z916pXmCjPDL8gps87EwogmibRMyQ6pkvXPowhmHbpGYTbNher",
  "key45": "2Vh1YuuFDjXAdwM6TRbTwzKSwY9tXKwePaHLtCPEka2rdGpWfyL47g3FD163vWRiy7WteTFGvm1uXiBeMe1ZU3Bx",
  "key46": "euYvTBZkaENcLa8Da6vUhg41J2VMC2P8uFFirGyaHBuVCXXSM8fd8yCzca1PTXgYQhqZXWt7HFMhgftZwbAcvLH",
  "key47": "QXthi33KyYQUKEeZvoXkYSFgDfjWkjR9Gc78MUqKkskhnryZmsB4QGcVYotRxFzYdY4uLQAPXCdfDqKhNnLSRzy",
  "key48": "2atEs1jaD6ksA3oNdavqkuxmHqnqgTZy6911trMvasL2U1zvQYofv9wQS5thyUeQQMvyYbuVSQALM8v7uAzXqR9f",
  "key49": "29vioyJfUFCwXiCds1nQA5sRUzWt4vX6grdiumGv7wRFMTRTn4zCy3HrMPCwSYo1vg9UUNbX4vS8nWSerX52qRNZ"
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
