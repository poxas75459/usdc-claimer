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
    "36fTdnAXaypuRdECuRsmHJuJn9VpLGhxTLi4hhdAg3sRzKHmu9p8jQZmCBbuyHG2nvCzZvto1sxZXYWw4YdkSAjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Gk8LM1KQ1TobaV6iS2BHvVSM7FeKc9vvTN1kcTjmbRTGU1rjwTUbczFMrjZ6wVrFFZ5Txs6sGaGAXocqoBN4n7",
  "key1": "4bW67hNRUeEgX8W5Xa5Q5wtrNWy3srEbBHeDUjVP1hZKMrj68ym4tBMVTY8m2JagDEhAHCMehN5cxirSjXwUEwS6",
  "key2": "5z4MN4v3Bth9Wxp9GiKhSuU12fy7AtLeXd5HfW8iLpKELFYQBhmPfjKma7qyq1arzoQ45Mhwp8iNacJszCWSWgg1",
  "key3": "5s7DnoUVqLBm49gBJTR2GxMMDaN5qqjWaqQRc6j4GVBnbogQPpYJTwf5ihBHoJDrNcgLut2ojHH7r889ZGXZPbpN",
  "key4": "32KGvC746MWf8M28mDWdE6mMtvr8Yaq8nnngx8TjgWJLfcgBYKmzWXcFbFK3RHvQTajqzXUvHt4bNZ525i9nvzWS",
  "key5": "3Y5xwi6LzkFjMptdy7Uc1CQJFwQacZpHQ3wShauB8Nd6tv6HF26gE18Vk2L8X1qGpFFqrdri9NncuRh9xZydc3Ts",
  "key6": "5X84oALr1vd1ig55hrhcqsoXWYmTNhgkJGSq6QqUeHSunGfnyNCcExdjAgaqPsG1pSJjJNQFmqH5KjZySp5ibQZH",
  "key7": "e5owQYnzXTiHk4z4rZaeSvptBGvv2FB1SQ4becZ8M851xkCsWVRpgqpCackKjxVoUxPJCRjDGyeayVugiZhYNtR",
  "key8": "5EKLZTYhsATg5FcEbRQ4uvswpZtFQv4WLCtMBMKM5QrH3Jt3cUsHuxSwXYJAdoCzUYmMDYmQd3Yjxb7jUHd3S9YZ",
  "key9": "5MyzeCQrQeDWUXtF6NN6kdyQzNA3hoP87PtPRvPVRqNVCE8A8RZHkaB4Zzr6f1sCTAvMWEfomFVKJQ2AJp5HZtTw",
  "key10": "4kjzaxW74xjZu6i2coixmC82aU8vB7jcx6xfowwE9T9jSC7CjVz4G6JAGaonW3zhPf2UBn9h41cBLZdYboPSBrbS",
  "key11": "2yqi8v3hEPJNG63Wc2B1oyxzSVDweA5RXBiMi9BQh95hH9ZdBzqUcihUrkyH71YAqULoR4SqH3vwWiKtJbeZyn6v",
  "key12": "5NSsz2LRedjMFth8ncM85JRBmATNBgRbeJXL19AFf2vBzLAvZV2QDuTkUtwkx2i7jecJcTCkwgpJX8RGrxt33Q32",
  "key13": "6aVDArjQgjWydnthmdSb88t1n6Yoth3DALdgC57VwMG4GQ8HNz6h9kQoZtSR7T16gRWVBBaUhZnGKfMCrTdsmtj",
  "key14": "2o5XW9zLdSpnNkygXbfYgXarddMyBVdJYi1Uj8n7UftkSRLRm8nvEHUDDMQ5vwsP7DZWa8SyJxGSZcNrzdsP51AS",
  "key15": "rix2gc3cAgj6dN8FnMRhCpGoUUAZQfoTU828U8Q6DP59A73kqUWbpCoYbVtuMyqWRsb6vGJhqamgFz6VDVruqDy",
  "key16": "4BeYsGZbhzaHMLcRWRDFrhaS7AzzfwmRswu7Z7rp3d3URKfxWKi1oEcZXqQcd937nscfyffyjbokSBFnyQD2nAVy",
  "key17": "46BpC7WcKZC784VEG6s9aCSmUGNxscsiU5bJ3WkMP9oN7iSUn3qQPdqh53upa8ndgieWfS9USjYMPuQLeFzPtctz",
  "key18": "34e2DjDmYBa6urdcpz1Pwc9bux1bUtBBTiCXqLzV3yUa972ZbptVxQUYGhvJH6sqwwowkrMhXNit2su8TgC9Q4b1",
  "key19": "c1XfYcrpJgY2NwtoeSNtW2M5wkrcw8avA9FNDKvXKPqp6ZuSBoGtF7CaYX6tYvmezwGyb7eHxrAhCgA2Js1gWho",
  "key20": "51NULFcPczGPBZB3zPuUstE9PXK6JVHtQ7kG1rD59cK1yQZfGxZubo5RKX4bMjAMHjPez86Kno5YQkri84ZLuc5Z",
  "key21": "5KM4Eo92BqPoopv43WuztyKAcN847QiKpVmzBaSRoD7QYJ8koZAG8q7bYgRY2qAM6S3ShJ99MNVE6WoGYbzmhcVc",
  "key22": "JpaUqGP6fedasr22qGHk4kUrQ1Zn8GUHC8i537N7KvSGLpaSAnSWEUQ8oZC3pdmX63LM1Rs1LiYGgJKAWLNnTsH",
  "key23": "4jaU28EE8dr8icBb3qPbZ4ZMRbVNV3njdqU2mLATq8owkeKujy5uKDuRUAv4MgYauuFqMyhtXGPmXkeDP5aSJpdG",
  "key24": "59MXFH4ouhdU7ChDf8ApQKBZMp7n277M3uX8AiqmKj6sCLmJbzyDamiLmPD4tmrEczsKhb6viUz9ed3xmb8VjByB",
  "key25": "6XtF1rtY8jyUibHVcnTgJAi4VYSDDYPMXLUMkmVF8DbffBQtnn5EmyXCysjoM6Sdq7Y2oH3gVB3V2krptiJymYr",
  "key26": "PRZ3FFmALSbPrB3dbCDE8dpPRFEqTHuqhNjwnKFdo4DsCwVv9MrKn97fu26PUaDdmGjRrzp4yXY7gM2eL2zWadb",
  "key27": "2LwreMwDy7diBGvThVrygB5mQTbcsrp5vdKuJbaGZs2PJivsxfos4SDFdbPSLP7TH7c4i5E335CP5aWRZRHGHP8k",
  "key28": "5djK4R8jpsN3v3kMjDqEhQM75atAMfERY3jfW1xAv569qd5AWSETS3SNbMK1TR4CbfZuTPob1kwoGcmH4A8uAmUU",
  "key29": "4rcok3F5wmXtbXV2bC4ntFooppyJtKcgqxmdtso86M2aTUnP7uK42f1Rw7mtGwdMaCcNiLtAgCaThPNS6be2UKs4",
  "key30": "jBg8DF3924xQshp4ZcjoZMsqotzWE2xb5poYLzw8ZqRnU5AXJdu9bbQuFB1RnmVnF1wdLWgAz3x4oDgxemgzjBB",
  "key31": "2SEazcQQxiCwRY8mt1n7faxRBdJknExL4ZLSGG2SLF88UzAZ4ppgyNCBpk9KCjWBx9JQSaPZ4FnrpNQu4T3q7ZLp",
  "key32": "4xGV1RWLBcRoZB8etQA6mHcEXbmjV13X4dTUHq97ZhW8U7EcjP4dyypyGyZ7H6J5Dazw5MWmZQiEJQaz1rtHHbFW",
  "key33": "43YGukPsoyfxbYVJmvBZgPDTgFDQPietzg1Kei9Y9JkFmJy5qRCN1XmoTxFQNpMbBvoAQREUWrnjVKjKNkjPQQVY",
  "key34": "48KxqXrZCnorkfPrUX5UURfpbgQxrdPYg6iESBnPYX9f8bPwrLXit8eX8v6qZeNJEvcxwgHFCg9FZD5hED4c3tq3",
  "key35": "3BBiZD34vKYrw9v2YbxhVA3691pQopT1d5k9vHaAwcpQCEFwSSBE9SrrUgmwcu2QYwPdXotYW6pBmj4Da4HxUbhR",
  "key36": "2n4xMLHiEJTkLn2HBy26HGrUPdNL4ZvpZhUM8g2psXxcDJMUx1JC5uGtrdpi1UeQ5PdKDu1A2LkhGS17vWJqNUS6",
  "key37": "3vCeTxGYbD1tpZNmynBrdwzzPCwZFwxdxEdgcmPRJk4J7WqhEzBD4oM62ixiWFFnwnPakx443w7t3dyWdLuC8tF7",
  "key38": "5ZW5R6yYU1H9f7jRh9FSZrageAmQjVGKs9zgLVPEWWqJtENujvyjXGyheRSLR3xQbRnCkKB5osHeqtrY5dAHN1EJ",
  "key39": "3RrPcS8njph4p14PumDVitMNyXSaUT99LXNyYADYmQSGJXgSfQUZbdJpFppAc5v1aM84hKV5WnJwTPwqDyBZ2hk3",
  "key40": "37GQkPB3BWpd1b3hP2XEgXq342EfmzYWcYDVwjHwz8CMhWoQZXasFp7jqzHZ9rYgzLuckFd1DuxY5pDpwBKun6S4",
  "key41": "3e7xni8yjWRjWroQpPgxgvDXLaxYB6wCRs1jCmMhYBLvCwx1rEBatuJBNirAqktTXXhZ3CTcJUKGU1zYfDkNj6Pe",
  "key42": "5ryHutmqodFU29eaiyVLZasUkvSQcUxBNDN6w3th2QCBQAYF2tTWGP8qeQjWXESkSYKovTsKK4VCbhLpfmPQj1ri",
  "key43": "5sJmPJxD2zgFJMUDQRPehYzSBSjqe563kNSASLadQ5pBCerSLyt2sGnj8QFFSJgLc5gBLbhMyHKfv2svjZA2zdXh",
  "key44": "2euWGsD6QeozDbnakcJegchDXgkKo9CqWEipQzN2zJBCtwrqoyShTyy9okZjiNvAtTrcCgyJuHSi4Cz3eP7nYLdP",
  "key45": "5ii3vVUcaz8ZjS7S66U64cZ3hbpTjBzkDsDWZcXoK2PZWfLf8vbHGKCPYqi5Ewj3hR1MGUGLLYQsTWD4QzhNBH7q"
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
