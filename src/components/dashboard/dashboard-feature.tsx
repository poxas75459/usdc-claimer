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
    "5JSPGCBmeMU3EWfxB3aLaJAynhmN33SSLmMd2HR1fUwsa8vZavG6wSoEd4so3bx31KQwmMi1t3iQUzpG9FvmVK8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ys3DsZiGDqp344euJjTd4zRj3DeApunZzBoNRaNnACDLMUTisKK6jyLBzUfY2gWxStcF4PN9cbooUy7uZaBuXAf",
  "key1": "5dRLC7CnnfYxFdeMKSJZiaBKWSjS63SD3yV2oL5ELdhjoj85qBvvB1iLbHpGj2d79kr7xrz45w6YUR9LmUVKYHRF",
  "key2": "4cbiRse4tJQYTFct73iBjZ7YdrChU5hyLNZe1mTeimajj4cQK3YS2PDD3R5qHk8gnz5djFkSkd6vUqPpXz2EedcK",
  "key3": "4PxYY3Jkt4zJXqG33hqqsfvqK93JZfLYXc7LfLJQpB2MfenujMJK2MZTaZiuF5cFg3PZYz5KNxx7KBajyVmSj78t",
  "key4": "4ju15k8MGrXrUMLr14cu1Tz8n3FQuGZsB4BXekZsx5TGj5TrEaxEmfqgwDXcXjcGUP12yEwyUqVGXQF287YLibmN",
  "key5": "22UT1wqYDbj7EPLdsP3H7TnbmBN7VeLDFEDxyMg3mpduZ6MeKP39FsZFs5UUyY9fRTGdoqQNXhXB6RFWkosgo1FB",
  "key6": "jif8XCBt1p9RWZ6C3XeGgSNH7ykmQtQqyANXdATtxo6QV8GHzAa29yh6jMJag8CqYrcbEVR7fJZMVGy3mtpF646",
  "key7": "2qsqxsu1DGLekLqHrRvgeM95jbCC17M1qfQHuRt3JKB9iuxhrq99seeyWU9prCZH5vzo8YkpnaZZzBnGXDjuhBcY",
  "key8": "4Rgj2izVdgKnSyT9nmTgumTTnesWiNjCScTjbnJbwF16EsrDbxHHYRjqUQQRwQ1Ne9auwV8cRmBoymPz6RQPoLQ4",
  "key9": "5LH4s975XmWWrEHrqmCJacu9xhmoByXgF9To1qr2oVvJ1Kkcfz8zdbWdQ6t3YHMr5L3sNGKZ7hfWFMJ1cZboKev8",
  "key10": "5NXpcFFm9VuHT58uzet9su5g7NEHC7BWSJkW3z6uv1z3AkLcsEQpBvD82RN8Kwg453fd2tjw5ngEMh3z4yZY9SFA",
  "key11": "4yApvDwkV6cHEy2ZnTAndA25jUBc75X2L8dhNPW1w7mdTjpAdF2MNeTQ8vEMKPrTe6p2kYnHhqktfyZnH5SBC25H",
  "key12": "2pYhHXYyAHW9EEcwAKRbT2wk8qVNuEXK9bzNjrmSwcwvHVieQGJmj65uhmaVDhMbTS9emAiZX6AWHwVeT59jsH4h",
  "key13": "5Zg7WXyvdkLwNyT2h4KFzqve9D5i1NAAttKoWPdqLjYijzKjyk42aUZf3s4o287GHGVFVJW9beXQhT32h5APq1YG",
  "key14": "5qALx2xaxrHNscifuE4i6odCtNHd5TgQ6AEJ4j85312vmpLiGiXeZzB5V1VhAmP33YtE24v2LjaoyU5UnLBnjTHn",
  "key15": "57jp2cR8c5ttJAfcECp65WJ7Br1L3sdPpmZRCtiETNKXWN9pHfn453NDb2qSM6My3NMNeqmB8JBG7FKKyiLy2TbV",
  "key16": "49NMNBjM22Sgk9tm7ynjznDzTUHpt5k4bqRCxsNxZx1PhYpfMDYx5fJfn4wTtq8SMZmYUaod9ByhMF2vEfo1kgfT",
  "key17": "5yfD8Vf2tWnqWnJUTEafzLUrKYiut6UeCK2Fe2bP1ycqUg6Wqg9KejTpR29vtzCGNKRVNr9WdzRxhYJC4WTmWSLJ",
  "key18": "3LmPeUtvUSjKUV3BQ23jgyyxmL3HtobAmnugMJdmKN4voczjbD4fA8wqwQBU7zrN2NmYvAp7p6xJarLaqcaqnyQp",
  "key19": "2qhi6HAEk5wvZGjDP55UoC4tcTvaMyxsUE7pXv9r1WRq3GNtwxZBvp3EXVc9k2imii4pG4UsXfrN1eHTtyumM5rs",
  "key20": "3yfSBL55beCm9xYHorhN7vNxhB6YjmLtiGWtKHuM6MM1DVMBb9L97QT2drpw7ur8BqcXqJUpTSZLU1Kmag2VtPK1",
  "key21": "5daLKrmKQyRqtTDzFJo7GHZwpFNHiMBAbPJPsZUarLiE3RxpjVnsUxorPxVcGKuibdtjYun4HrqE6S8iphoNkzXH",
  "key22": "3jZJVj8TBTUCeEKd6ohQK2LhsR6ZkD9xqEgjTDQpHGfuWN8MyqVZiPXGugyiVD1mqv3xB9pyo8CDtrbUGPE9v2Za",
  "key23": "62bLYjShpAE4WowzHB1bhvvdNQDkrwY5Vg16Wid6mNHUXmZfvT255bW8dF5yMYpewrj6dfhqSdUHZ1QKjC9nvtzY",
  "key24": "47G5eaa7DpeMfTM5spQW5zJjrQPJvyMG6byU1K6am6f3rjG5yH6TuFapkYLBGNmmPjCzAB9Zen1DpoRZRm4qVzyX",
  "key25": "4D5NuKuGUgfuv9z8fw6qrgkVABYPXXyP92MFoT9SH3oxfcsd5hUmvUPnHEPwjbWN6CpF2Tm5u7pHa9WHw1FRzXZh",
  "key26": "4c5xnnXEq1betzNiFwu61wpQNFWwwi2Kii8MfqjQdfQMyvJ895Hq7J3ppcEyrBF83CQQtTux8MfPERAPBGGZrDcE",
  "key27": "3exJhhByYNv7mX19t7QxYqSZf8yUkg3mnyYjDSY26RjWVzL7Ye9pEwjgkEKaJt5WNcYy1Q646v9uLLFpqaNyyEst",
  "key28": "4GCTqgnQKHWWmkkiFPX6BhhyHGy8KB7tsyrXmaLbK5fvWJa11gGCRX8sHVLrr5A4aUt3DCV9tVKTQE1QsBTKCxTL",
  "key29": "5XouY4ZnWcskhFK41WhNzTpkAZ95PV9pnwHEXdQXcYYskR6UshkNgky2PkEsZSrmUnjV9DqVNSCcPuKf4XKuFU5Z",
  "key30": "31uSL9nnesg3FhMgfy7MjY3GVfmfqoi8doQ4BKqv39n43wWyPBqEinpmjd65ddPv64uaAW59KJcmeriJv1gy4Dpg",
  "key31": "5ob8uBzFpehV8WUw4eWpsBpFZr4sVJTLu8akNrxALTGhSNYJgzZLjwN8XBnozrQw7WMKHLsTm81QoyZWTfn8oVeP",
  "key32": "67Hdz6UCCkm4yoC4ZEjyz8t9zRqQPCaRv2FR5C3XPVMmHA46vKgqCpAtU1sT1yGnmNJJMoNetnzm1u6Ajb22ypNF",
  "key33": "1Bu3MEmGg12mk3dooAWrshTk1TAbhfz13yqSYSdD4UZ3X42iXURXyma12Z35bssWtZC7X79bbs15JsRHXKMeiLz",
  "key34": "3KmvCdqs8pkVVvKLvVPMPKzMMRoLjsHcFKMqsAE1jeWwhNFKnBFPriurFh5WTDAFrdprjF55DFMMArSJqfUeLPHi",
  "key35": "2xGAd11D5KPARDqHUkSiLgkUM9tMvSeGeiKwfzToJSNA45MpDXEy3uuRkrKPaYEzWyrWK8M7c1VJw6jmiGpoZwVz",
  "key36": "4m3pfFpaPsavQ1PX4ohazZ8u5sn2hbyV43UaRZGw72ArxbybStfii8CJuciKxvhzB4xUh3Gb71uG8QqmuBJawX75",
  "key37": "283m3fj7YAMy3P3Mq99brbzRLVPu45jUWfCokeAfULhpcjYRKLJLThVbBMJiChPQ5E7fxhTYouZsWKKGsJy4axS2",
  "key38": "fMkpJCqgquS8WoMEN6yxEfJHZarEP7PjVmvy6UHJPX2UPavuukULzqBTSxac38h9x6oyzWUJX6oC1sYT1incHVp",
  "key39": "GRsYjvNDLgYozA3tUHSKJ2nh1rH4w8burXfmdvdDYTRaLdVM1m8iZSXkxqYUopEDxFQK2J9GTcKDKYpbArWR7SZ"
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
