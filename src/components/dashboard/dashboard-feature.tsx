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
    "9uuohoAmUykKnGkYbaMniKz7ioDZSZfixpJ75SARzLfkqpXgcX6oxRdvGZn1zkkE835DWUtxQtWdKhcr4jRJdUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45qomt891G8iPTZDJZ78db9cTbtWr6vqsbibRJNpDWNVfUBh6Zv4ot2WcjP6Ex9JsGZ1QyYMNYnYNoZPLfErxG2M",
  "key1": "5jeS1pQ76G7SYwZYVrZc2Aj8Di1uDohiiwMRzhRFkoWAXHa6QKvp6uCRYtAcSKYGJ8BCK3Yg5Tx9sx42f5SExiHG",
  "key2": "2VdxiDT7g5aS6kvYysxrVDCbKY8nprJL1SfnqvxztwdpXM8oNhmZn9YNVp2oUj3FFXvx2GCZUNXJ9NoTMNifQxa8",
  "key3": "2SGvkWNe19Ywe3sTJo83yB5jeq8mr3trMoCoFTmojbCbs1Ki9qBAhZgKmcUeTyF7Y7ZtubvhsWCthsgCRj839A41",
  "key4": "49uRB5rAQxhmYK8JJQMDhHgeGdajxFMC63YZB1GuhaiqoUrwtQpguqDQkhyibwChPugYgbakdMAckc1tbyu4AoQK",
  "key5": "4TddkgtytJEuaC1KkjdLFs43P6Y3AWguYgoMqrwRmVghsZ2kN4QWWXSqpcaD94A5ZECKBLkNiJHx23wG85rjTPbR",
  "key6": "65hQMcEHGm1n5dnF31SeYmucqrfXpxsybZ3hNGmoLFPbRVuADPy3n9WYLvWRXerBpRtwaTcBWPhYEyXa532PMEiv",
  "key7": "2m1M7FwcFKYMAb8FMNFkmxeEtQ2qqHoE8n4gHks1Phy8GumRkD7BkKj43dAVK98WYrNz3ZFwRykHkEekVpMhbUfi",
  "key8": "3QKfHXrFHwsCf6oY54wyjSe89cW2hap8EFKspgLMaNniEFtgKQNwpb9pRXYLN3NRxGpMiaCjdDJWaJ36zmkeCDcf",
  "key9": "2fFSGrmk7KsH2nXHWghn4L8qEp4ftny1gyFEwbb2cD2tvttmQ1Hx4xozdptN2Q32JTrrdpsXnG6RAiys2TKQ5xQa",
  "key10": "2aE5zZMA5RHajTNmjYi7iD4KbLUervrNpFe3DWoAZLK7phUv89CpxaiQTyF4t7ZyKncd5hrPSxMmtbeq1zdVVm95",
  "key11": "s1SN2eChPachHEUg7UYerBioZk7GrBrr1EXdWSx5oQZx5nNn4rQTCReMcFhJL3uGqefxzGTEHfngkDnA3RzFwvE",
  "key12": "4GGZ1cMZuQGu97G5P29rh8HSnr2AEuohZ5YxPp4p9znsmghE4Vjbkhh6JujZsgN1uoDTa66cJzestkHfNz9y8Znq",
  "key13": "aPGaHJujUe9dfaiG4xL219j5pj5SB7rhDDmQrSXmtP96H4cFR6aEaZkkaFBYkXt6TgY7FvQRjMKYx6jcAZDuhak",
  "key14": "3HwwJLD1yPr9bmrmUvHy54PMNxugtYHDT8mFQei5AC8by7LCxLJ2wjV1dMeJVArSaRSHZgxoacpNJfwmy7EBT5Rg",
  "key15": "e4K9hZRHL8LE8PGhozhCYDzKoa4J7PG4j6xGYg7x9wjATTFKqJ74znL93ivphUf4UuySxHE3MXL4KCPozYvLFHy",
  "key16": "2fb9xgoYzEnmcjbZUz56t2QCExV8SbJDymaH8PVXvwu3KuexUUjq2D7ZTb6U8KKXkfxt2xraSeqzoiVhgKny2rcw",
  "key17": "5QFE9exGNhXkfrJPRQ6V4oWemfa4oqPu8g9fVABbtBEQR1pqYjpZfJ9LZEPMmh4yQrUaELpQthMBgwHfvvveiwSq",
  "key18": "59Le5zxEiABFBassVEhqNve1RNDh1YqomDPkvpQ1JCzcD9netGf3zqffSP3SnbAjTWec8DAmuG4aBts1hxLtG9dL",
  "key19": "44scyBe3GrLq3ZnTwzp3Kydy7fC9nsFoxQL5Acgx1ti6L532nJXDQd5Z3wXo6PVXc8fBi1fiXB71M2EA24JbVtfz",
  "key20": "65nwJe8RVPFd76VPs8pucFPc9ArP8rDySr1BjoGkQ9ZXB6L4umV9C5z4J46PyjAwNuh94VdnD3rQhpYp7KwWPF8f",
  "key21": "5XDmmqvDPKcH5dfwiEEoKNTfocDXzXzUferw7zL7N9zdVqJk63wGqCywCwZRhBSvPjhzG74NVz9grv7wZGnfLKxb",
  "key22": "4N3yywY7NiMkGhLHCVnQJZS4CnWJa2X4MeAvD5xvwUBDnRmpaDbGRiXmyjJELKYE2DSMpCK1sm64h8KnUNNBdDiW",
  "key23": "36Sds7b4VUnd9vwYmPZz7G7ob1bdfucX25NKxNZBHGHSL1zXuBd6Mp2dLnaQgbsyekzU87C23m1L35eAr2pLHbTt",
  "key24": "2CTrnByjcEXqBqhWefqWvmDyS6tUS4CypuF5qXD5txwKEVcJQduqTPJQ2wrqpVg9Mepj5hktG7YUtxwtMXSW1ri",
  "key25": "4ytozdHPbE6YcBxU5TUauWkBbYK3njVSeZY4Wk2U5tp2H2BuPPHWW5no4DDTiuvzY8EWgSpSxGJQU1fTc8mDfTm5",
  "key26": "39SgVvaABd1wbwUmJnWZAFA9akFJ8qiwE4djsX3nVzw4BZVCPFtVkFTKKDaYKbTtqSoq11zyPUm2yGTxefBapPFz",
  "key27": "3ZzPi57H3XZiBwyCn6tNsmQzCTz5vyQTJ4hFmV18z1iediYfuQEno6DHQtpSd7HdSr1Wj6HMvKULBdyFQJBscXUM",
  "key28": "3iPqaz88d4WqLVkXG9zXoeVy8ZYTNXAL6QocjP4vrR2iZcA92g2Zyxg2DJ8ZoMbKPQnAHj2KHhKfZF5BH3b1ufkX",
  "key29": "5jztpx9JuSB1Hi1pHRaXCqeRuaSJMracswMunTpRSBjUWas7WTFoZvRX2Afq8QSVkComo8dpvRrJCoa4xgj6x4eX",
  "key30": "4Q5g4uu4DfPjZkZBHCLA8ACL3X6mYRsaCXASEG8WWDZR724dcvDrb25U8i3WVrjVymUTowp5KQvXm8eNHtWhJgqR",
  "key31": "4VJszCjs3Hoj5n9HBQMSu2A8kTM7RRsPC8eM1wqgcdMXEgQUeU2qTgsvcSva3mGi9DSay4cX3JznBX86NUKaNRTF",
  "key32": "4gR1Fn2GPGCLTs9BpcFbACxyV6LE9Us99trg2L5eQ7wcnvLmhovwgzRZadJvoo2sg8jRFjpUUR126KD7XFFBUYmp",
  "key33": "3K2EqRbPVhT8bidXcznFy4Dv5qEsuLNJN7jzJfGBLS3HHQBaiAHUqzMh9DxrnYZa6M7kQEmXkUZdy8Re3VqYJSRd",
  "key34": "3r8nHapzVw93gCxz1AAsNHqTg91p4ncU7Jf2QBs2skabUgmJdnx3YEQToQr5jW6ytiU5HFbuGTnotzvubPjNf5zT",
  "key35": "34zr87BUaSkagfqNLLDdGLG2kNkYuXMcjTkW2E21aD8qNFUz3i6GS5e3MGU4vn6Dp4TAUg8KfTaNgMVmZ7wYKDap",
  "key36": "rX3pPZJKiepNZGbv6oHqX7krg2RsMLC6xuW43TtVmW77rSXZKz3p7e4fk9BMuSwHSDVecgPwm9LCxnmaDqWFbFX",
  "key37": "5kQHjoHHTvS5JsLmdxyabnZyZCDXKHrsqqFeVPiSN7BBAdeSrXbXPAXyHeBTHHSbXaPqyBNg3jZXu4o15WpfYS6Q",
  "key38": "3np1sLwyHKiHXpqtYjkg8qt9CRYsJVJbVBmSJ3qJeZc7dJ1zryhLcg9iTCv4L7zK3cqNFTev4u5pqUqLcQnCRki6",
  "key39": "2W52KFDS3ZnpCjsUZsj8f8WcCdTUqxff2sLQDzCdXohgj6W2xvVaGzVWHLJSCXtfR526eyQwWrv4vtFEfxgrUF2p"
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
