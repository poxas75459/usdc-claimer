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
    "5jnczP9cFG9v6frjWUmuDqctUETEK2vTbhHGtpMLkFvqYuDdPb3pATS4khzqhRRwkDvurVqfkAbDjGB1dt8GyYd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nu5fWtRAXEEQ1BQqTZjLRsJ339DLsZyByzP3L91dR4B83wbmBxJaw8LkwHLSVS86GJUoSh4FCsdtybni1m7vNv2",
  "key1": "4rnqz7nNLMpersx4kJ4baJ7X7WXYAReyR246yLQusuXt4deh3bMh3cKSrqwHYU5aLQF8GWo3f4V1evDEZ2As8A7F",
  "key2": "QKHgJXBz4LDbvDiJQsfip34GwbeEbT4Qf7KKDhnzfvhK5iuVBQHVsoBRaBzpkPz5fEVACxrhkN9VfCYavUwzRox",
  "key3": "4nkW7opL8eg9R2DVhZ7hDWoPSgB5NwVaoMxwTyG1B719oJLpdS8H2vUQHZFGtbJ5vjWdxT5m2JoLexv6FQCc3KXD",
  "key4": "2bSyGLNXB7kMHHHDMQ1tsiDeMg2cacjekbiK5jXr5NfXYSxw3TCsSwVKuRBCtrvEfjWz29gehophkJfPMZErK2yu",
  "key5": "4FH1jYXkRcrGXtViv4CSB6XLtSjf3udw7pwxSxRqaySKqVAt2ChTiKK5VdjoLPkD2brMUAFcKcJ1EDH4ESzGMX9f",
  "key6": "3ACHtk2mZVsM2BkvHBQF8cRGjRs8p4whAH3om5EUD57cje4ddoj8grBAwc74XXnAJCFe9LzNSHBFe8eqd9WtwinU",
  "key7": "2Xx1DLaReu5qoWFwc2UiAPHQXMpVsrr3vH2YeDQhzdV721ArJMMQ7zo6rBieRTe9kapP6K8kzstVVh5e5mewsTfc",
  "key8": "FX3VaeJsCzG2f8qtgLnRzNu7u4XS7eKYHFY3CagRcZ9ttNYXpBAkkAdTEVxgTZidzcTXKZGdpMari2HatAacwtT",
  "key9": "2W4M4CWbeYXdTNHEonbFkAkq1VCtUjuVKPWTuwSoZGxPcDReJhWPVafvvtEidSdB3oWCToW5bvP9rWGx2vvyUTeZ",
  "key10": "qn9Am3YuqiJedRcodZUAAoa7XvHeS5oKSS98iQASqJC78tWUZnuaWsza2wQQkAEcrbgsZkXZPgwGPbLJFTUAQZk",
  "key11": "pVrzMRVC4A8tpfEBTdfN6JURpkUjMfCUrLD22Nh4qeFEQYfQjAfYmf5P1jSGbSGPF5VZ8vWnTDYSbVTMaEji2HA",
  "key12": "2a6i6iLnwwTsLUBcMgKJjpJhyLyG7HvkVyS17xieMcdwJaAQEJ7bqEf7yup77wme3snnPHCJr8sHWVqRVgrKU95Y",
  "key13": "4HGNXf2VPtjNSvf7NMm6hA7qPKDp1DJUnSryHNAcZTbsKM8CqurYUrdFsGPnfFuLJjL6pZoj6ryis9g9QLEpbgS5",
  "key14": "2xFnsFPxgvdRTioZUifnjz6iMnibCnP85zSL5wakCHazC4e9nq7NjFh3VwtVRBrXUE1t2VZemWczn2vtGyouaCya",
  "key15": "2tW6NRYJnU7neZqoGQ4qE6NNsdoXnicD33rbqatEWWufsEmCf4LsoWst55BvJ7vw41E2Bd1qSMCJfCt85aeRzff9",
  "key16": "Qb4S7iqdt1ZCaXVFd464oRyZY2QhNGTcseKP3FLoSAkf4dqWAPsiUYijgj5X7U41yznSwX4msEPhtN3ojxVE6MK",
  "key17": "iwo55wuYcjyNfBdYK1TLfpajusifxSUqmNB3o8daoQ4rj1g4kAwzzTcaPw9LxhtB67KZcqcdiYyFtSwz4Bp9YMp",
  "key18": "ZRBHv9gPeBTxNMymoWRZm9aKY3SehQi85GR6LcWWmSkkoggvKmPVD3kL8eeuq6BcUW1VzPBJiF3S7Tz4qp1eVUh",
  "key19": "5sBHsRhhjof7V5Gph7pFexoojjrFJV4oTsfmaRDoMdAfQw8NN4tijikEeZRT25UFQdpDNKdeQ5e9kvQp8DGE6mEe",
  "key20": "5DGGzjqvkj9kvvxRM63FMgChZ9UsXS74nwDqq6v6C4ot8iAi59zYHV4Pm6wwVewdFr24MvhbGJhKXPDNJ1Q2A3iK",
  "key21": "3dYbDTjbScQCg9vHHgi6BA7hSHmBcnkcKbNERoLdYjt9RLx7j247NGSGgBj2PNpfsYqaFDccKA2vZz6iJy95ayox",
  "key22": "3DQ9KvoMHYW1eQhdaJKLon7r7K9AkQfJXeLvLkj7vpTgZroozi77FeNtMc9AMs9D9vEvSMuT4hbtjo72gnLHCD5m",
  "key23": "nAnopjdiPTeJkqyqLBbtK6vAaHPuKWWZ9LTZh3jToqRosUxhqZ8eHwdNUGn3FgkQBFcxehS7maVGjE3MFtnNsZ3",
  "key24": "5HhdfXLdgcQot1ygqEt2TK13jyTgforN6rJbig5JhcqpTdnKM5eLbeVqM1NXGZig86iTaoz1ipEPEbDPC7We7vdh",
  "key25": "4GBWJPEWqn6eWcVWrAHsLJwcHiyUmmWXXGxPMmuMfbJH2Ff39Pv7tLTzgN7TEadcew3uP3jQP1e6oLysan33G3pc",
  "key26": "4tkdpNbjzrgCWAMPmGrvN9ZrpBFmBsACKxvUQsNCZjnAT6GiejVYE1nb7PGQNMbERaRgquLmCjDtdfvY3sk5ARxN",
  "key27": "2qSSvCtSuvsKszrZqQsnoGsJEMmU3j2pzrzBcHQJt4qjA3eHGojXkVze4RQYQhxQrcZhdXh8LFRhnEkvtA1c14dC",
  "key28": "22DBCp5Kzq6M9xa71dgSv5V6GDigv77u952bwaSsQsoS5CrZrAC3KRdMEo5B5rSAGTnLj6ErNTabUDn9P95sV81H",
  "key29": "3exHAXJhF18GDPetAtsXWMG3qzZLn2bp7CjbBq3ABHTVipvSYqKqAVdeiigKqe3AJWR54mD2ytPXbKhQWto6PoJd",
  "key30": "4MaWgyczg93qFT2V1DiSag3Edn2FPvD1LxfmAbKagWGBCqTt9BDCRCN2asRFrp9o6keMmsvpQS4CokdDbYsefst3",
  "key31": "qhHiGJzrr5qzAfWboSaRw1CfCDasG2DyT4MaCVpu3jU1mrZVj1RufYvPamafY6B6EWrQMtLPwFsxCqJPkgqB3eu",
  "key32": "5VBzmwW2JmpbS2KAzWydrfEcdQT7Uc19SRSqttWnqhoGkhmsmY2dYXUsFgfoSSHTfNBNLsGBHPjeaaZWpTpNdJgm",
  "key33": "5nBhDJNcfqXKJTiVoFNWAe9SqkJZCBVQbB2q2d45jNnrjRPxUJmG5YhEQwnW6FCvprX9ZRqY1vm4jeMkpCZjkt3v",
  "key34": "4QcxCp4QbAHWVa9oKHtx84Y4SurEbip12Mxx2pQ5NRpU6LxyG2s3uQvFHhG9E4eB8qQDFmQA89d1XrC98TWGfYHw",
  "key35": "4oEvzchwExHyKCgrsWd1bth8SzbBfKHngcvf73okkn6Swuget4orCxFusBgqndnRidqBHP9uUEhpYXhrX8o8Zp7t",
  "key36": "4jYbTa6yp7u7YLighRgZ14qKV1Ji34U523xksXME7G9MJ91tWNEECdBGcpwkWMneN5BCReN5C35oHjX8tg9pmAni",
  "key37": "4VGy2tKPTu23xM4JiDuNwZi3CRGui9M1uLPYF7fJRkhBUjFVz2z9yoWrTf4W1Wuu6VPKFzkW4EwzQcGGrqfatG4i",
  "key38": "3i6Q1rys4gkN56EPSELwvpH7fh2o18e7KcmRLwiA1F5kPfTjNh1NS3ryyGsYCBB35NiDPLyrgdXqnXhPHM7ioBKP",
  "key39": "2C3YKEFsrgYHqVQVp9WYxdFHzwgrsV6HbKNw6LHguP7R2n3L1NQqo5aBp5XuKjFqk36PSXQi31qaEhCGrbxLqAc1",
  "key40": "5zzxGwAfEbJBzVdKVGt8hA4S3iejXRr8ixu5yE1YYYSYHCFaM9WGnAtQ9eXWMF15UsbvN1Zn47qLD1wZDj6RMuto",
  "key41": "5Dv7vN1riG5xCodkjEQiiP7Q8nCC4Nu9AfyvGH26v9rMLdUhrxhBbwuRcxR6wcNkZvWkBHza65E7m1PGXwccVwwv",
  "key42": "3Gh2otHhNd7gP4e7FscTH8dZkqjrWzJ7wdzFePdGHR1sfb5rzHfteEAaTzuGYrRxzAUFHsRedX9XtYk6pnv7XoQE",
  "key43": "2Xk8qV9PPs3Pd5nJDyiPkdkHXZcLZa9stGqRpNJ9e7U5kRXPZwjQL7eguaAceNe2aRso4FxNQ1owzyDwwz1xfYiT",
  "key44": "4VPAKwK7VUxiN5us3vyS6Rb2e4cdJfPhJf4eihHDgMx8zb9z2XzsnQ85fa8Jmcz8Hg3geURhfckEaxRrNGfEEqqH",
  "key45": "3mXpZNqWzJf1srJzbhyuyYAXZScBfxZanToQphrrHUrsXznL2acWsSZxBrXaajLpfQNjsfo755YXxQPq8gkdSD8v",
  "key46": "3LxLwy9Qw4xL42g3Qdkgx6ueX6VfQHXMQTWnLHqg87emTRAqomH3SUpdgnBYRA5TnSjVgd4Y6NZyMrZ6gmMgEggi",
  "key47": "5ZE7zm8mY1ZSqkWsZuqKWMDWys7nqySJFiRojBMBzikSqqczGmLoxHwcDNgLB9uv4u35jYfHFPqpgn1oCdz92LSd",
  "key48": "3vR7C9q3WbtpMazzv21R2YwLY1TMJ9KhdH8L6VPoTjE9DLAdWC9YMgSNLZJLjz2KguogNYHLZ2ThaoAyqhx6vRrx",
  "key49": "2LhAE3iDyH1Fdo4CuajSuved43Mofa2tFCQQQm9D18ftsxUm54hMvHoom2JdqFNHvpL4P3R39MrSs951J5WXjLxQ"
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
