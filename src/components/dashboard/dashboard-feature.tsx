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
    "WeWAUubzghp1FGKDBWz35x5JxSFztxt7WySE1JB5b2gyrt2JVCMsuMTvcc4UfNk6dRqYvSidKbdhAJB8TiBKHhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kQ1LKgE8rNMg6eXqNTaLKvb87KAutpHQRB958CPzhFFDXvb8kBHjuvEhrkhRTs24gEKCMEisoBe4E3CdpTuJt1n",
  "key1": "wa8U3m56f3rRcrXpj8Wyev4ERYTdBFzurTqMu1cJYrGYik4vBvgZkhoKoS7rrmZbzpEyMU2YXUwQLJzHWBQrj4f",
  "key2": "4BjNh7uSNNkgKzpjjusP5K4aKaE9D8pr5rhVnv3SPdZ7o5u6kYxN5AdHXmnKG9PKivJ7mYCF6rHkMqfBGY5sZ2cn",
  "key3": "3hDP3Up4kA6CDexSdFiG41y2RyiAkhPaUerbDUNjbzr4vy65Gthz52oVktv3zZgeN7G9fmR94jT6arqhwAKUXbZ5",
  "key4": "32haCAWnTzQRf3v5MWjGYLYtWurVNQLcD2tdX76q3fQzRKs69F9nMiy5JhjqUEUmFvPeUWawqrucjSYqQnmZdDXX",
  "key5": "48vKTdAXstnarQmpCTPy7tuZ2VSXhhU5cqz3yo3LjdbuxkpLgsopNCDjLN1AcfaWgP17UnHDBrmNVN8Aiy1Uwvi2",
  "key6": "4RknVKtDhPST3foMnQuMSM7jEJWrxuw8ovkrNgBsXAMb8LbwPyczp3bVbSBkNUYojrZck1AZLYAqJK2hzfk3c6H8",
  "key7": "4mfnRQiG2mKt6YMcQEiR4HmkJD7dcnZxZKQZvefZo9yRXe4DGX4pCQEc1KZq5NZyqfNaDXTPNpwaPsZJbNfk1hH8",
  "key8": "5rikKVjBe8H2ofRAXEDa2kq2B644xcPHp75YuaTeCoZuiedVYA7n8rq6bSGae5amNn2BX58NP16cWPkCkw3NuHEA",
  "key9": "4Vac7gj5g171kVimtJ57e7aba1at8kyaBgW5xTc9RLmxZAs4HLAvoQxyj3fhAC6h45kmkyRwTPmu7qj1ZWc1PbJU",
  "key10": "46ULut9oXVKbPLDKuk8sEcL9EgHtpaTvJ9aK9but7Zg3jVVrAFhZhFBKZPYhk2JtQFuqaNsskU71UhqjjFvK2gHR",
  "key11": "4FkBUxTYaxTa3NTzh7cdU8ah928o5ryGuTkFAeBQkN5rRKXLDvPfTzSAHaXQtnuZLsd1S6ooMYnuRKTAtT8xb1WJ",
  "key12": "ErvcQreGDjsiHvnbV9TRmvJsQVri35qDhazJZcnDxZsr28hvCX1QTZD6S41yvwe2MgnhmNMiHKFDSmsXyLwpgWJ",
  "key13": "36GN1hfQH7HE7HvdyabFh3KMLxvQ5eKThAD2whmunQuwWb7UCHgzNLsGADXWa3fVirBzCdtLd2WWgckZydJQoi9u",
  "key14": "4k2eDLZGvDY7keTLmXryrLJwK26Yv5AubfGvtEoQp5TWeEnEzk68exsoUQe2ZWvJjFbNGb7Ex4bQpUoCDdGjHQBC",
  "key15": "5GVT5c2mpujcopeHust9oAe428aPht28PBahpT8sZSdY9uZA215b9xtExbfY71aTWF7o8USNSvLSQscDrPJRoCRF",
  "key16": "5JoLo37DW1b3QQfjHGBXcgeKSGKBxgf4wChSeoSvMjLB1zpyH3Yaq6osty6qqGVUm9csS3NLzM1GxgFrNUzkjAs2",
  "key17": "5VF3Bvif6dnhW5BrHyVBaeVFWx2fWgHnHg8Tm8ihqcK8mCNfRKt5oBucuesAXwPZkQeDmMuSJyDynerJkM4e6q6N",
  "key18": "Fk7LCzeRpFQxthohnEFQA4ryKtU5CoYW787JFUqkmXCTZFLVWJ7SackCZESC9wZQrCpKev83ZDmqHaq9gUjpHFP",
  "key19": "KYAGsxLqFLs9FqmhKFSsmPu5AeinkLPgCx3JDsqtrPgcqZ44ZLZu7KXUSgai39zBfyfi9DekwXsxHWoKrk2AwBo",
  "key20": "24tK8C28bffbn45VmtYL64M2zT1UiYPkZeweEAJ2KwAdDCLcsmMbiu5CXEfYj9eNgFrPPawSSPzcRZY5AvDQwtTR",
  "key21": "4MJLe2naMcUT2K6MqTpGCvs6ZA2ZhxkR4ErgfXkRLx3KKtad9qCbJuYqT84w235ErY5nTkqVPP5nA8Qm8UzxsQ1j",
  "key22": "2UocgTeZFgPseZeEVFMyvDfqhQSLRVXrxtZHbkx3ZFiN7pZ4rhi4MdPeUbn7jUqpnmpVg6u6q1cc566azNzSjbfX",
  "key23": "5noNSj2CZTfkpQKWAbYwbP4nNqonGXGtiNPoa82Wk9maAdGy5f8t7URGitdgbeA4UzUgW8zxH3yK5FaYTVdA1HBG",
  "key24": "2jfi3bGyBWATFiN7DcjLpnmpbr5dqvtEZrhDPYtRbAJgubjJs12xiDJb9PFqqzMzibeAG5GC9dLrZvJ5M5mbAB9",
  "key25": "4iSCt1k75cGJ1QGTLqfKqsNX6cJGbsL4HVhqPrhE3jqDeXVRcuDQW7eMHpDCmhExRjTK2h7jBmvMg48rsFHNHQQS",
  "key26": "2LMQQV88nTbWUN5imbEFEHdnojuLAonwc1RNdZQjkWBroZRDCrK3qFwugSKnAk7aHpXY4mJopJeab6uUv9u4udgu",
  "key27": "pbJBsJ1Sc5V2hi3zCRBheH6WYzu4AUDBm6i2bYXpZLtpECUyJmufER7rJWEmFFkjDMRB2F7VFxpKafS3KNWgiXE",
  "key28": "2iQjLbhRTHzR53K6nVicCGsFc5K2SXkzAHLHgh9TKayfbPEjmup75q8kZc4vXr4thzn4HTyZN1S3HwcQ2Krs9dHC",
  "key29": "2y8NHdabiBeUYur5obbhhGbvEHv8XiaENwg7VXVMBkjQe8jyVBZGzM6Xt7aH9AY4WpWxi3htoFKsa4YUbQEmhDR7",
  "key30": "GGACoWuHRqq8QNrxm8cBoHRVVSomHYaZzGTUxoqm6f9NMctsqNW4UXA9ecoM8JK3DKgx6627gUkRAV3w47Wdqbc",
  "key31": "hHRvM5ff6xd5sM4xTixmk5KskbDEzYsvwmvMQjwXtHCzHJGvgLdhy6wAH919HKBhXMvDXiA1LqJ6ospvEyr4nkf",
  "key32": "2FGgmQuq3EDBeTcohhdPDE88a9PyNTeRDDKbgii5s9BHCWDprtcjF5NZ5xQTcotMJeywAc1Kb1iTNwKP4dsXyy34",
  "key33": "4eq5fgmA4mDBYgSdnVEiEc6rstu5Kre7o6Ne28S8TQ6PyfqCNKnmXat1wkQe9wMk4xneVcm1Kf9UkearW5ZCF6E4",
  "key34": "4fuMN1eMAGVMGT3ULFFrm3qAk6x1tZWbeNRgyypF2BE8Y1CSXzfWsSz96yhzca71ZLQB1r9fkMt8aMWq8rqFrvqQ",
  "key35": "pA78NeP9No8uByZwQGNLDqJDEwGur51StyfXTq6Cu8G2GCaoFEH71RmMnvXkLri4QggfvRTXa35RuqNCB54c9Kp",
  "key36": "qj1H9D7sXSWpfMp3mNtQZFCFGbnn31jXUKwXmFWq7Xxfy7tcRfE4Cnydj64Ea4vUd3k75Uv4kfuJUJ6WiuD4zkV",
  "key37": "3E7mQM9KKQpP9Za21R2QMBKRVfnjSHiScmBQrKB6FhYnqfdVnGKDraHMtDZkuoNytd6AX5Hrh7vFYM7aqEzGhsTQ",
  "key38": "5efHFrJktmeLiGg7muPgmd7ceQhgLys4CGLXAMWvq9hH3PkZT4d918KWVFmv4JYns3vVMcpVqDq9gErkpsYNkMvb",
  "key39": "2ceZoE94v8uzPHhscU31YpBs5sYFqFjEqYunci38ynGBBfJpRdp5iDibWrxy7a7XUJAmzuFyScEjKNwh8FLgjeCy",
  "key40": "4kdnPjNr2oJKdtstoZLSJoy4ehc4bCGJ85hYnmod3os1Tcavp8fPeUnMHDocwiDzggFyAJhjfHXxwy5FxmfhnSi4",
  "key41": "5QLgZ9WikE42Xd7WhCm5sU4NSZ6PN9PWWJFgUxccjBoFvKHRZQoHPoQjD3Coe9gyJ3me7bL3TGQM9TkXyY3Cpc9h",
  "key42": "3R4d1bQ1LKLGkKbxXPVTFcj1a2KfS9fijbUk2mbjk1cShUHj2aPvNwsDdVfw7538DssgRSMjJhtUyg4wLMJ7q5Hk",
  "key43": "27GdThV1MWVjmT9LhE2teCy7NuT79nBQmYZRWDcpKRjYGTLx5faWJ3nchHJYn17v7eHFLfqX4bANwZLJY2WynYbb",
  "key44": "vsxcMCmv4es7BRUeXzdzmjja55vNgdYxBHSdFKP62PKnZcZqXMTf3t2XY6fz1GN3q4VT5rePp6gBAdq6GkY31LA",
  "key45": "33puwq6QhVDzoDeRSJvajhMcuX7KHrThFN72hJ3VraNtxuAxpVZLtLC2XzvNMj3LzN3oEZoW5QCzv7oAhm81GGiM",
  "key46": "212E6Tw5HBP2ZFkbMKaz3v1Pgcd1sdzdRkHRLEDxKYZrN78BgMe3pzEX44Cr9iaX4E7TorLtiWPVPee5nSmY41zy",
  "key47": "NFSK6hfWTJSNkoDV2em9crNvjghi6oVVJ3JRU8eFAxSipC7SWPoirR58mcLuZcZ1cVLf87QeYEdpz3QW7B669E8",
  "key48": "5s3EJTDireyzDDo9hQJqh8YKRAkjtUVQHTUb8k8FDhzD8z2rR6PmgfEwKiDoeMXXXwasnC79xNnw7EVP2nZxRBon",
  "key49": "2nyKH92AMUbX1hvMHSSXAgn5eSuy8BZvABxxByDsn9wDjXvdAqKgnSucheAzoGSbX7PBC9srbr7PqgLiJ5m9SaVg"
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
