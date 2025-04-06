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
    "5re7Xovt5SWcpAoBuLfNMHuNWbXMSTNqUtUWwSB3xnUwPpabUsuc9m8yH3Fwp9Ff2HtsARLygqK7pR8QUR2XNcp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27zUMttZQa17omgzy3HrckVTT3T8r7cQAip9GK9Bcu2nWgVgkAJoSsKDFokPgfo419DVyEBpHb9BDn69g2cvLkRq",
  "key1": "3f73fZqJ3CcA5DpyVRzQQkaRUBkfJ8ocYFKEBM9qFmhBHxKGR2TTywQJKajRgT5CQAbYKe1FMEDbsDiFEenx6QBX",
  "key2": "rJvGv3J4k6KXp4sJa6arNLqa5STFjMBAAVgwZYmvT6b8cBhBX7YimTbKJCC5hp2R1iHYszrqdK9R1QMEqkrhjcr",
  "key3": "3bN4YRcEUxJmzKTAorZg3YHGiNtRq9aL1yagVdgzRFWVK7X8uC9JJ1f913yXEbk6UVB55Wv3fcrxAmfLSfwCkBDs",
  "key4": "NV5DaJs5UhSAhWUzVMKhpY1WPdKHNTPCMkqkUDaAFcVJtBZZiCguRaobr2WkrVtMswtnpEnJNCjqo3xF2SkhUa7",
  "key5": "4guw32pW29wrWvEyqC5YSYKaMDiMACLjpuaChn3kryX6xXnLaxVq9HSxzgFQ9gTiczzvC6xJupUPbvqNvD8PgCnN",
  "key6": "3zxqKmxDbD2bzCnpSYr6zY86oAKpo2xpSiPfwbYyqmzy5spukVTUcs4GAZCNe2qCYC3P3ASwhKZPHVfetbBFY3Pg",
  "key7": "3NBMr6TFSNGiv6PEPKbP1MfESTKkprcCdZyiafqTkX2BzJHWnRXdBY9Gtvq7GjYo2ug75unW3TyRyMFskmNH3pRB",
  "key8": "5qouCNWhpcLJ2dXQniVna1xkBTweqAAoSztisgistAc3VMg4SZUt5kT1KRmfdeTX4npV2qaHJM23dTziAnHv93CJ",
  "key9": "4X3QZVWMKoNki5FVEs9ae4hxYknCyYHRwg8fBFZ37y7evMZGWGBzqTC6MVkKBCAphFiwUK2oWCTAhTmYngTecNAB",
  "key10": "5i4V2S1vqZF1NhuMMC8NL4aRZhxhFGtxm5dXzcLb9aEfntzzdvoM3cEA6Ea1kHdhk4qWKEwCXdY1HAzMmMErijen",
  "key11": "4H6xR9V9Nq7ceFD8JJpV8TV4PwRrzdJ9pDaG7ZmMzYMc5zXreLp8vsBhZQu8D2UcAJm43CM9kEbJnteMjDXggwsh",
  "key12": "2rnsP2mphGPBfUvpoAtEPKz9dJrnYWMGT2kVPA1hp3B7QnVtqwvTB2pTX68Qbi62ypAsUwwfuT2XdbRwtDkL7HpC",
  "key13": "gBF8zCJiP6mcYsWMmRMMBnZCx8MxPo3w57XdQhuZHy6GYUhFzqbNrZc2CWJcUEAxsbt3qvAMchRLbzJMuQ5aEH3",
  "key14": "3Ajv2swQ3Ei8CqEV2Y8dYPzAmNQ2jXMbN8gsbwryZKgZvP9h6rxyeHGTZQv9UvtryhNTVbq8ecDDjxYFo4P6Bqb5",
  "key15": "3gYm6Ypqo2yVHdc5irrjbUGUF4EM2yGTLU38mXbg7DYT9UcqUs3LgStcbpW8Y5BV49tyMCvaoQ4FhSBWKVTSXmsg",
  "key16": "5m3VfV4wMbqvdPZMnto6VYX8YqHTKsbe3HkSZseNWzrBPaUyLvfkuy3ZvRnm32boim3LraM9cnj9vpSfaeC1P27P",
  "key17": "62HUeiWVBSr4pPBxFpeDj4BWemSEm1N1hjkc2JPQwQu7TZyNaS5tqyhVakWmTF5x45qmvCH4vFp6FD1fQMZfpcxP",
  "key18": "66XpTd52SkrWc5qWvY4NL3spqbR1SL5p5hvfT1zUU3uSu5AXRDocAe7QniANUW35FX6HCkYR2W198vpuVton8V1t",
  "key19": "5PeWWygsWmKKZvBkYTT2PP7nsZAcfzPg63dFhQpuJeGMFW8CUvTUhC5uairnm21brLC39UFS1TNnhkXMiJJmM4Q6",
  "key20": "5Rh8vK3vuUrJFUtgzNZcZQXyEzsvuG7osqkgqnpewZjdZwAeZ2rkkGogp76Ymu8UEJGocvhBobmpnzwiPGDALpft",
  "key21": "ijXmScRigeCX7YwVRzF9ZNnKp62BBhESYAbtFjTndtMTFL21A1H9feSv8ibsn9Z5FBcLm49YeqMx2nQQw4JzqS1",
  "key22": "5UMsVzqy1oFt9k9Qgi86WXjNJVoLsxH3Ea1HxM8adMQPjx45ZkpmPLY5wLWRDcLdwhTPcRyQ5aZ78fEPae8Nmya2",
  "key23": "2ZoL8qAW6TWwGsjgHvQQJbfaHacYD63htE6fDt3hcUMeXX6ZBytqbzbfojCk11aUwhTVGWq5sd17u3Jvq8pvMfxw",
  "key24": "3CjeTFf3m1uYPnt7YbpSPnzRqhEhsGg5zhYipnzxeW1x5bbKuGJtjmhfmhSeyrDnGed6Faj5eMWpMqUJuuABNRCX",
  "key25": "4oFHLxRo6okoGgN9DrZkLQYLvDQtnm4gUYuTnF4NqTivJzWEjADTEqyqS5ty4sbm7Co1re1AXS9bWX8RBkGZgpMv",
  "key26": "4d4SV5NBS7eMvR2jeVsXDd1oEeSnfsmgXSoS9aY121xhXjwBNzXK7Hxo437VSjtcKWx6DbxjbJxRFiV3B8ZLYCrL",
  "key27": "4GyAUq5atfKqaupRt24bBMfYNh6GbATtyR9A73f8RBDytYq6Bib55PrTAQm5BGAgWJrBcBR7Mx8m1sgptN66ucQA",
  "key28": "A1hc22EA8Rpqb3huaKB8wZBbVVuMMqex3hRspBWnC9CmsDkoi88WDNqo78dPbTzy5XriqtU2UtpSQjPtFCr8i8u",
  "key29": "hV4PDJtaMEZX9JWB4WLR5Yfq5GfzqESRbT23wVPQug1BaBReBGRG2Sjae57MkBSmdCcTX8zpDSUda6Z2FUEsRy6",
  "key30": "5svJP4cWvapNjyoEoTVT63neJpxATReyYAkGpf5n9h7Yvo53YfuyFBJTevxKhVLXTzFS1HbaMkJHSD99264EEvRj",
  "key31": "5yaJZ7Wqiqg74RQfq2Dt7ygTQzWXbASJ5yX2uaj7CdpR4ewFn38CsBKbf4ViM26vavhWCDLvANnXDFr1NZkbwYX5",
  "key32": "51unn9CambsCxY7HWQ4dTqe59tLzLwCiqZzBKP42aPFpcEykz6amtGqFGjCvQZwvqCZC3mCTppp8spHo4aM2ZWwq",
  "key33": "Ewmds673iKb5EK6UmzPmGapmX1Nr9ZPgTDZdKfMc5K7wHRTX2ppYHSGHcSzoF3rwwmKi3kkx33YutbvigSJyx7T",
  "key34": "67bhjP2jLa8KTSMi19wRh6Ure7HsFzqg3mZePWqooLxTY738ubF7SAm9EsD5bREumdqBXRho5vXjk5uy2VE3VknC"
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
