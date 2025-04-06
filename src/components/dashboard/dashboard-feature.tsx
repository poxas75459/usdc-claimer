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
    "3zXHKHYNUFWQXPp4CZCPUtqQDqQfDhHapvppEkHUHwLNJ5NFibN79ux7cKs9jeVD3Hx2XdL2uK2ET4yFbSeVWwVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Wbfi7pveoShzSSpZTNZoYBJmsYzUVRZCPiZyviWKphRTTXNWHMqL5ooCYAyJMhZqXdgb2yBm9Km1agG57PkMzL",
  "key1": "3bKJQRHWHcX2sXxBWBKPFUFnLm38DoaPqLmqNdbRYnoKPNkd7hGrFjdezenj8KhQUKfwcUXPxm75pJUyaah8P43y",
  "key2": "4vWEYFf87PT1Yk6uHLww1btdjsmZzfocca7ZwprnpSqL9pdTREjSQnXjXLs5DYdHQPLu939sZHWQKN6ESLRMaB6X",
  "key3": "2DPhF3vvgsiw8z1imDByXGppS6Vrspu8Q3wKm7zVAZuSXikFF5Cxda1jSYWHpazPqE4Y9h7kLSVCKvx92aJBdesx",
  "key4": "4hmWqQaPcJzrhsSK8JbcCN6azRXMjfBiJy5uEVnJJHzbcMdZnvn5by7exouiZWGgNjAfsEbdfhMQJMzQS7LaVWsa",
  "key5": "2toRQX1tr1dWSCjW5SEZC6p3r4zaqcFjtTvwU4SnRkWNwyckEc31huNZsen9HDUDdvrQniSbp6S7B2Q2in3Qnnm",
  "key6": "4GoCCdaZoLydroPk6DfXcWcoATcgYYCKZ4SoxH19LuL6rMckw5WXYVYvFk8vB1o6DGeNMXnDv3YdjEY7Jg32nikn",
  "key7": "Vid3FwqLhntmTzAUMbpcbkCEgrsz5EdkgthMvTHWzF5LnkW63uGmF3sEzYZjqsomNM73fkoY5QB6KHVCTX16PJZ",
  "key8": "2uNahma7R891o88yvvgD3aEGi9G61U67k4o1LAaL1uYFvjM2xgGK27XfH1Yo2bd3cyWRCSVyC9j4CJAoJpBebUPZ",
  "key9": "3K1crjoWzGomwjipvpK1iEWocwEM8fSpqJ11nrcFXy8PZGLx9TcyMTCg2RfvbXm1xVb4P2czVHPF1UzK1DC8G1BK",
  "key10": "5Av5KrWyLdZgNhLrQNpcHGB8jEM4PaQPXWGmqhYma5tpURhy8xjQiEt13davLJraLsZtKBES3ATbRcDsoFtcefSj",
  "key11": "2CDjgXpMqXKrQJkMdr7rgh5mRxZi3k1hqvUV4vYqqY4uBnTCHLYD4hU2u5GKSn9eDinfjQUFJEWuMUN88HsPwedk",
  "key12": "33J56cyoKq46ciSgUkFKqpiJcgj2E3TdRg6JatzsNf5X7AaM7sZMBkJ94qMfMS2abeeCgwNQmrgcJ5f6SiWy9LPM",
  "key13": "2PZ4rK5BFLxCWMu7JuqT1mwfdsAGFuozuhPDwBLspWY7a725PpfF4JoMvgE6DJ9pr2Rtzr2umkw6MELBPQrizzpK",
  "key14": "5SgySMHHTzTsTSzsS8z7tN7pLZV4AUg7x674C6KXyP3MC2pyXXW9dGjWmzCFtjeVbXfYNw5NyBT6ez8N91wfNeDg",
  "key15": "4JsRVbG2ApZoQWjVofxsQCutaXGy2hyaKiWdYYNtJoYFNr6RE5KHpsYvzqBD4kRyi2QtvWWy94wGz1shzpMX2DzA",
  "key16": "2vDe6GBD8tnTgKroCFCSmu8ZPxXfHH2xyYcgTPCA4uq2KiNQsrCna7CATia2z4zBDb4MS9xTcP53dgpQJv4Y3Zmz",
  "key17": "3Acf962mkQ76G4YVMk1BKEUosfY8pPs5MqM7dXf8z8jCgEov6MbioSnuffurAUAqHAikCS4cKL3gUV762bJ5pkM3",
  "key18": "4RMa8HxHvxhk492AHG2j5hEdguj6KufyrWQHL5pizSncizj2ZqQheScq2SwM8v6DUBnPWGwA1uPRvAUPTyJUvC7M",
  "key19": "3wHJug3NxNdjpy79Qb265TVLrpCnp9sDzhf1scb3sxsRP44aqWa6MZPiD9uM56iPEK7VeLDNvU9ouQdob4LJg1CV",
  "key20": "5WCT2w3fb7DpS5FrBsrePopMaF7GFPE7C47RHWeXzHxp9hm6fYQ7UY3APftMPx5gpf71sQf2ZbvkrG6J89pw6QSQ",
  "key21": "23pvX2avybnCPnfzdKV2AUbYkCad5oCRLuoxR2z8JZ7FseXKSdsEx2u91EVLAEDuGamYpsiCMgcUxuVzcWH8eKov",
  "key22": "3y9SuDhz78cnr7UvaLWubTK4YbLwvU36zmqoMiWAc6ooq2w2qT23Z9dTQoY1mw4mzjAmAwHiKh6VoR185er4j8tz",
  "key23": "4fQRqMWhJZjBcicCjFkgqZUve98GfCp1ekexK1QzcxapyMCMDW3ZWjVmqnonnRs6eMi4C9PQxU3jjGCwY1NDogkn",
  "key24": "3CyzSr81x81eKcqRmYcWT4ddwys2JEVMj5AUBiGocvqdMdHHCiZCLs7ttAAeQMciE9R376G4zvCqAnT5pWG63uQA",
  "key25": "5c4tu1ar9spVdQ5rz8pR4iSosizVeDUY6zeKrfy45yi5uZ8q3UeYQ3Z85xXEGcbMtxay3ADLxV6akW34E7kEykAy",
  "key26": "WeA4SPuR5YtBvbjEyhRfc1hdnG52TAbnZ42FtzFShhJDix69SWRAZkvYjGp1bb664h5HzWnCSEtbDcLpvuxWAya",
  "key27": "5frtuvhH4P5fAByxxa6wmb9CVDM7P1xM2kRFg7vCG1BFW6F7XcYSX1vuAtEXQtefU3Y36ii3Tdv3prcUH5p6p276",
  "key28": "jyKSE3xHVrkjhPrHef1hDNuCiqYpwuhKqLihyfjV6jAoNuHTyKgKp5tzAsi64yXVyj2pz2mDYupKJ76RByhgbAC",
  "key29": "4wYHBfK7rWKqGYXRuhjWRkTj5LnxiEL9zHb4gkbMitNp3sL4feHuKWPwoFkGKQN471dE9mUuTS9zw7EqpTW83PxE",
  "key30": "Mejkqq7Vx12ZUPoyaAoPqLGTQnkuZeULF2ub1WUE11Kd59m7ukiqkpCchrBBpbQUrKukSien9eG9icxFo5yEaFd",
  "key31": "3sNdwoxzhXUCq1KNqo876nmU27CzpZ6s3qJX1pWk2PRpvqxqe9xvjiHk9tm5xqNog4Rnzdx9teaJNgXijZxs7TTU",
  "key32": "4fTexoPujbDv3VuuE4frfkP3oNbiw87Qi8W9QM3ZXPEZVaJfL9Qh1hPnwNLaANcnzM1Mq2PRuK1KTe9PwMwYmEpX",
  "key33": "4nC9MfQUL6UdGzgNsDxQpifJaGZ4ZcwHPGMWUm5EXWRicbcDRqPnvPxVkDsW7zmNv2Hk9jAevZWzQScYefGPr3gS",
  "key34": "KMx6vQNz6yTqYCtApCqiXS1Gc6ftc9wVCYRXNr3eJ9cd1Pcm4R7o9JZTVbShd9jhAN1pxyKALN31u22GqGHaL2V",
  "key35": "Mrhu5ZSbBQmPivzNthongSS8V6fCZrduxiDDsDDzuCzN1WdfYNe9vZqsBR8u5LhYqXd4PjnQzafuMW6y1afHKXH",
  "key36": "5ejAfu6DvDbdh9kY5mRYYHBXqe6ZTRrH6RM5UGzXMcuUYubuyPDXqTWW1P9NRpSgTfgawdxq2gMBaxkq8FFJtRTM",
  "key37": "Pee4cvGyhVwF8ryDT7dYHaNcncKBAW5ZDJGhDoRbaQdZVc9FwL6k3gEFRJiTZnhXb5sxNQSKdgb1ZHhaaqWGxs1",
  "key38": "3zB7ocUWFKGmANkVUA9zUnSj63vcoNJ51veuydsud9mbKEq2geaPeYXWBr5kcaHeP6J7GpvJXGEYBEds1iXpXcsv"
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
