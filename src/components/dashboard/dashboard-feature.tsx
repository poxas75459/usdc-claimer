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
    "2M8crA7Hxvj5NmK1JtFV3ZkNVNEUf9ks34EjBXveii6hTrEXLu3z1TCsZKtMrAZF8fk8Sepg7NVtMpf4taUgts9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KuzgG47AHhqtc71rxqoyxHaFbp4aDfqdUrVMdMYjDaB8aFChbnkKSHreVDFqPssrQLQScxu4Qu8igqm3taV6HjE",
  "key1": "4pa8zxaEuC9BNvLpt8z46swD95XLd2aW9KVuKAJZLj93nkuo1tT4rhBm2US6otQJtGBttoYJe9XBEds765n611Y",
  "key2": "5vboMDN5HGLxGMYaFhCwWC5s9kDsSqTWroVUeRVjs4bo5yfQ7L6ES3YXN3bA2EfuVhu5tGv4izjVKcoNQ7GAQMyq",
  "key3": "3sXRALKQtdEfLJ4PEntRNTfvdqxAesfrroaV5uvZwV6ryhmbpCAmY9E4ZxRxTWinD8jJb3QBsCx47VmdCyn6nDMX",
  "key4": "3ZSvvDMcAAhUtTLGWPBwGq6srWSygpdysMyU2QakifSrPzVdjdCUA2VBZQo3MsrKKYbinqr8yLDEnLNXdCKJrMta",
  "key5": "3KpqXRJRW4eJsLuUBS3qCmcMTkfxznSLgFgCZJssMRcqCXmtYoH9DW7cEbb7zZGhUAbfY8DCiHEf7GJAxGaa6UuQ",
  "key6": "2UzF9PJHPzzFi7YLMZVrophxRg1hmQioHFkK3Cp5uHmYYgci8TVdzjYpE4inHYYPgKXBZnoUi8p8uXBtuA65pyxA",
  "key7": "mSKeMGVzpB6Um8kxqyfStpN727vvzaBDHCMyZG5ztmmY5YNh3g9RtUBJZ2UXMFrpyf7ZC7SDPpui5Sxa2oYoqDh",
  "key8": "28byvEihgyhN1SbWk2rKSzRKhumoxHpeD2a7dwXR1prMiVxdzsPxaSQaWHub6NGv7nNhAZYdzSm6yUqzr7SWi7sv",
  "key9": "5L1RHr8SzJRuT78WnqMbVNyVANb3ZxXnx7j7Hmn7C2sfEQseV35qnbAQHQ91Vtx4YiVvqcYY46wAeETL5EP6h6s4",
  "key10": "2pLs9RaZjqY59gFvSEUqUE13G1xozEL5oSf79r54bDjbKgZVrDNt2n6p6rzMC2kbpwdxrcywQ3X2zK7Rnxo9BcKj",
  "key11": "5tBR6sA2boCSh1kHTAXgFo8WfRcWUjfQZZHw45FE65jdrvAcVcMu1R1wBrg2TFTd27d4TY1gQhGXjzXD8w8CLJMA",
  "key12": "5YgXvPrTx3HMBLfAuffUpgvRfWW3xzZ6eWKpeNS4sgZ4h5orpsLFjDKpfHk6QA3Ggcio57xPNmtdjCkMByohbA75",
  "key13": "43RbQj79vZBNBgeWYc85k5BZRmy1T1FdLQu9qfPvA7oaV41FuoVgELm3XMtwctokNEx4WWBcQnRbgFyx4Ms3UVMr",
  "key14": "5airKvmub5PWgbnisWcxzwutP1EQuFk32RcKggaVN4QScPatun4r1SFgsYzCtAEfA1pQafNYQH7H1X9XZZgP3VuX",
  "key15": "4hagt8qvQQgXRXhS1bynR6B9fDBvybqgMXigEgj3ek26WV6AT17Ri1Rj1eWo2n877eCJgWCBkDoovcd1aEAVWwee",
  "key16": "3x9p9vuPFkP8xP8zWRjiifkENXXXwPiVnmTr4fy2q7TjesoideunLFk2K2pdx8cRcWAAtLsvK8ffF4TRCb9a4fqp",
  "key17": "CmeKuLG1u8BEfwXUhXcQX7MyDysJTrmAGuJkgkShtLFzeXz6kAuKHRWBoo8x7KG62HQ2SoNYw5gi9jLe3p9QcGF",
  "key18": "4y7B3id8PP34wU3tHsrhesJRwiXZRjWaA276R59qco3hzXZu28qC2wTYrKc4jNzFYJuoMQ1aPdqR7vk7FS6UpLub",
  "key19": "3Wtn6oaLpJ8Xus7GCQVAWJnoSSch37TSSCf6L1cfnNxMrKimxSY1UfJeTC7D4GrpZseETvGG2diC5WyEdhvAuF1v",
  "key20": "2qwe9WDHnsii8f54VE6P3R9h8R8Q7JmpomJJbX6fJYFPm7rfQ54YhShZLoBZK6MVRjBeJQ5u2yQxaJftuMP6PyPW",
  "key21": "4eFB3yL3ju3PSzkKnUU4WEmUEPQgd7oE9efn1dJDEspqUW9hYMVArxNLot1SGn3yGpZPnkeYpxkLJTJ7t7TsSVba",
  "key22": "JArsQkKgFLkwuf4s96FAq9U9hnKA8F9CS57bsyFxQHWdEYQPmwwCRnGFXV6aEvbKrzhx7gowv1fDz4ngkr5MzNa",
  "key23": "5KmKTbvgvS9gt6AGZNT8dLbvMehpV5qotGWdyvYJWN3ksVpQz2r3GgwxNT3NXsSA3fqzvV6aBEJPzCXxm9q6i9nU",
  "key24": "rRbHPPkjZBrQYhmgZMJ5ESp6igFMBaKUefwqNYB2sJcAg8zFY6JeW2xLK7RZszoPNi5Au1m4apdohDb4jCqSreH",
  "key25": "45m4N6TRzxnj8T4ZtUMV4Bxw1xaBLtq83j2xAbm5K2F6ktA31GejYcewQwBCuMboA2tE3gxxKFcMCRLQDxRrNv9d",
  "key26": "4iiX1hyqLWbk8VFoECoNsVyiWapDT8qmmHBwuXoic2jjXhVXHF2bNyiPP3Dw7HW3XbCTFJXZzpaWPrmb2BDpxo3b",
  "key27": "3Qtawt27AZnmyrwEvwKi5cJBAx8GYcPfq5hhYQcgcppf39rfrvkAgp2GmmUPPGJNuxBZwG1eGnHrjjVrqVykawme",
  "key28": "3xTP9j42P9q2WHsdBiYFyeCjh7a1jMLWwiNQ8sRoLM61j24bMQXnWw1nsirCrej3nrSHwEqm8frAoTLgdY2W6kbC",
  "key29": "qAbWUkACX7Yrv7r6TnKBjYy1WMc2CkfAuQr485bQy11epTtnoHQFgzMiR7ZPYpndE25NeJjQpsDrQdeqCSPoXcW",
  "key30": "3KELPnogtgzm2qaGBftSshaT5Qh1mzUZeBtEzsrbP1uJGvbSsUcLPdYit4MzKFH2cadhyTGQnZCYLiQ94E5HbEZX",
  "key31": "4kZyD4ugom2fHfPzuzFz6UHtREMMf5hQ7CHbwBax9ouKRrahbeHHoDhfTt9J6bJnW7zELtLy46NUtbyumjpWdkyi",
  "key32": "2QH6yxXnR6ZeCvaaGG1ZCZbfbVHmZyEborbQpa7PoCLcvyDRDxLJMJtJ4PVBGEuGPEgywcVc9CmADTDsPRn2Xs7",
  "key33": "4wDAj3wqZnEBiDrc36xVnyEe35KmDoV32L1bzngGYSi6Cc7zr2c8VBX521krwBUxooqZuNPrjSQP7TqE3Ub3Zb4C",
  "key34": "3THBf7rHjrLUGuZJLbkZDnjMvNNAKWwEwgHkTakegDAfDggbTj7QHNU9hXjHtaQYwCsqak938MDBXNj2z42Q3Wxv",
  "key35": "3kwf13RNKnffC49gV6AKarVPzfJW5LrnavZzn92Ktdsz6mAangbefEaT8UXZju9AXyZLuKvLu5EQXRbkZnsNuqaR"
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
