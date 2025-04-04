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
    "8tLLqFSU5Ru8TamZBKt88bvjQ4YSvuPGWFRkrMpmbUkXKGJfqXrkBXmKhFaWThfbYanSHLqNDdQtLQc59tEuPEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xd3xb41dxw7ZkE93tF6kKta19BUXApmeNDJ8Szw5y2mhZKbWxMwaj7qs3E4ogjt6Toghvr8NLhsmDU47eJYoVmK",
  "key1": "t1wS6h6tc4ytvvZShHywa4xJnttRbyPJ2DHWQAC5X5Sdymm1JSjUu2EqH7mG8pJnNZwpPAg8cku43YMUmuP9C35",
  "key2": "65yXj8uE7n17rFAhRVKSu3AcMi2SMVMMCUJFiBogXmaRFz7eMCniLpNXzr1RUyJKismysnjN53vHCaKWHFAuk9w2",
  "key3": "5QPoNZSp1xiw6DGyzRt2AtR61DAPyQHpoWCNZKPpYw8GZE3tFyPFxiroStYZcu1snN2PFcwynpvHku5FiAhYKgGA",
  "key4": "56enpRwyYaMNfqAj3tBTLVMMsAaSX19fyrmVzxRT9SDb8jiddBEZQAHyKj2YPfspSzJvEPktoqAusJAhrwRhXDft",
  "key5": "3FoXS19m8EvH6144FtTeTzz9PhG5STxZePAoXqJw52b1pV1BtBP6DZj5cyU6qcSy4KK1ew8wFxLwREj7KtAvtopr",
  "key6": "3uBG8ngbhgC7MUjr2QekyJmfeCRHioPbJUujrADRfh99ixMjYwULWZ4bXaZNezrTdD8wwhMHvLHD2iL2jUrHLqJB",
  "key7": "3e7bLaWgHS5VV8HY1fUmRiCUNXyJWSTd9bu3ZjJgGMRnJDbK4tb6WLGYX6c2vKChH6Jk5ScDgcZWQufUYfGXzCkm",
  "key8": "5TJbpSEEnb7wX9pwF57JEFJystKy9RVnaYqBwFx7QHPjyEXvg9ezTYV161ASuyynLN62Jo3Gd3PeqVjkPdZj4tG8",
  "key9": "4hxQYtM8J49uQdZtWbmuJLEkU3Dez628GH8USmvDggwYyJRx2ZR2YgCY9SyrbxZAE7iQdANiMVDzDXNnEchEJiyq",
  "key10": "4NqpEGAF2obQfQ9FWEotGEBqZC1fMHNUaoakBP7njSZcMx6CRgtKM5KKQzNYwbAY11vHFTKEd9xwkuv4QXCfREUU",
  "key11": "2hUYYPfVScxpYQ2EeuKfeoywv6hQBWFZUVTYhStmdmHvw3jM6pM23GYWyPUrg93u1fQNKE5KyAh4saAcPG1WQLrZ",
  "key12": "3u2r7pbpsrBXXxzfPJEU79TS7T8sDqoYCN9JftSv7m7X2iPsq5U4zTEc2XRsfxgRGA4f2DnyUicyp9swAzSCPYuN",
  "key13": "4wxL4QmtMfszX9yRSmPQqiGSeG3KuwHCvvrxRsnE1NRDKGMfrGyv7EY1LD1Vy5GCJfBfZJ6n95M5gTTBNt2qXW7o",
  "key14": "2bvfnxK6gB1W2NihA5apkG6GJideKK3rVJHrSxtF6aeJUkFLAZCyq8VSYi6iuPowGeGuvfwcSzNJQUR8XJDYwzeB",
  "key15": "36x9enzKktPj937uQ9hDvB3ms4P3ymDJHcw8awPUa7Z1JFZ39E6kpTnBuWN4cMCWeJcZFLhJMuS6gYV5wutGTycn",
  "key16": "5gb9Ve9FgsXU21b8q627mx9Y29nUvodLyDciHARq2VqbPxCN7j54iDujAqPt2s3xy7VZBRBiash6dTnaLWaeBxF",
  "key17": "569qPGtxXFfQ6WyGQVoiHeja9MjthWYWTwA7GChdVAmcp6eDQzJSQ8fEWftsh4Ss6PTUgvnGNS6ut9kcAadzJU3b",
  "key18": "2KEu8DxzhQBkvK7dv5TKPNYJVUqEmoPB9uLMt5Nb4Uf7C2t7YdEmEaqDLWHhJeLCoiE9A9odyUJN55wh1hZfQHov",
  "key19": "i8rMxRVbEYpUAACgmZx793JsNb2EzrWLSEGPfwBckrwTKG393Jpm9QKayUiHUuUGDxy3yVhZ7qhKMRVc4tj9rFD",
  "key20": "4A4BJPTmi6ToBdScRk53giw2bboqEvuxxciQJ2kG56hpSFZYk9GQYS8w6abXzzMG1MVVhHLhvSq9GFdbj9p2dGmS",
  "key21": "QyqX6cprj5pN5ipfYBbdYg9v3skBKHLPcKjQNuVR4vqVn1DhhgFHG5KSHgoEzZ3jgW15KETytUB6U3qiwff2i4k",
  "key22": "28R4zVNXXA2VEf78QhJP1T9qy64qr3AYXH2Rxo552NZbLMCJzyDQ4GvpgJ5yeuFxUEVKR9vAjZyRtgXd5jDCiA4n",
  "key23": "5yFHitqJVis11PK1cPPpKZBv1Jio2BQkVWw27g4KycZvHyygKKKaG3E1TitJnAoQxxckxV6HSLCFx83SrqRkTVJF",
  "key24": "2cBhYfsS9KUqiFQfaQdYJQCEXAv8SDdR75Kt4ouZcTzzwcS7dfTGkeFgTqQHVeYTJN5XQdtshnsvAxCmq8AoEeqS",
  "key25": "243TB6dFpyzQHrmW36BUo8PJJfCQYHqxec7veeJzy67Bvd4auwmJ8PKp7oKp9FU52rfzmiddKKW1Biu1a9rKBC8H",
  "key26": "625T46fhn6rYiUj3o4e8xTGmTqU67QiheE26YZkEmJiETfbdD1jhkqYW5TFbgHfo8S5n3eTwneJjAdnMjN8C4KqC",
  "key27": "4ooJStZvVxXbuNEji3x7woHLvTJo8tE2KjhYCn5d5QEVUQYkqy4qcg38UA8kaDeNGSL4Gh452XBV5aEyraHo9E2T",
  "key28": "2sDRdgztetHfVArbBBZuivtxNVcE91Up75beUkSaBsVh1C51vPMjXCMvTR77AuRuAY4evf3GZfdCimxaeM5MkEwH",
  "key29": "BbtNgt6N93Ja6GfE7infjWZv9ipLXpctczh8kaCg6KZEiqtmWHz6ZBaBd1uADArfNf4w2XhHffQdk7c6CTuxxnf",
  "key30": "4mmgzFs4UFSNqiRJUC12ZKkU2cjp4kpKMRCzBdRqXPu1t8HGj6ur96cvtfy15H6WNmq3t7NzCeV99Dq86bVBfsaD",
  "key31": "4GfhvbmU5YEpueDsvoQitbB68n6YoytPm2ToF2Y79GanygsTunWcfxFsjUPkrgojx27gpvwohX6n9e9XWeHQDTpw",
  "key32": "62uJxrkkKoZ9rFxDQS4f9YH9MZ5hQkcsnSDGZAaRPxfVfjvmxBCKtPFvu5ZbkjN5JxHD9oPuj87Z8V3Ku9zMgiQt",
  "key33": "2Yu2mMGLDFxgvCXdftDjxmZnU5GRRRZFwB8Py45uZEhfiMeETgNBzzisJ6RRQGGpNNP5jAapKSLwDB8qdohwotgM",
  "key34": "36YzsdWnrCGUeQ4et3D3LWZyTpb7AR6zrsdqfSuYtYHqneFKNB7enYU4XVPngrwwr8btk2BkmEg2TTmtCwz8wxa9",
  "key35": "NkNd1MPcrVPAPpjcq1etuVDvgU7xGEEaoqxREd8PSRcE2D6UnLv2waojcebttbm4A2p6CYQqnRv8cBNVawXQwTB",
  "key36": "4QKkaXxPfbXPYGk9HKhjW2GKFEZpvfqJiQTP3PUoHyxTfGewqJW6mUfRWoNiTwCeN5AxnN3RX2vgWNQF6NXdr8BB",
  "key37": "3JGPZk2WfoP6EA6QFxyW7Qf2WceeBsTTBRot6WaR7XYTc7PGf1SW2viDtFqPfyQ5QTHxt9i9Z1AWgKB6TMmLRe4Y",
  "key38": "4rKZhZGaJBWqdgziiu5Y46Uau9WoyzWc4KwfyC8qaVTGiboJV1srA1kRSH14uyLHpdcLh2h1tk4XvHdPPuSUDh2W",
  "key39": "4bZFYwKiMsL4RAzsRGSJ4XXJYNXC7kzzf3q16WBqZxUpr1U4nq9PJZi5h2L9airp7CzPuwxnEzpzupNqiChw7QmE",
  "key40": "3NWW3o86LqSyqHkuDi2DGNz27XtUNZVVEjgabQh7fVmPyvatriHvK3UjY4SiVpAbvGv4RM7bZiYwRPmMEC9eKDvJ",
  "key41": "2M2PSNbDvyDdYiyBKCRLVJzYtR4dc4FSoJopWTiRZZw9D7GZSfL2ZuNH4ztQHr5eH61otjUydSMeGQM8XSpZ8DGv",
  "key42": "3WwhDcuz6wRGsU6bUXMAJhoeGE8SZCmDXzawPqW7xgjN9eBNAbmmoaH2Nhs62g6S4zjppaj5v7eemQqDtRHhwN43",
  "key43": "KqDK5TTRRdDBD8kUBp3Pm9dRjtSv8z2eaU2MiNy4QfHhDz96DkDsszq9bR3R6KHJQPYGST6vbxHRU5JcXBbGBN3",
  "key44": "23NFbdAk2Lzp85K9NBE5gyUhUBriobFbefCeHNvnDhRTdqK5GeZ7wmTWnbBXNtq3fuoWw8epgRVstwiTzYSB3Xde",
  "key45": "21R5p9MgeF6v1RHyXvfdGHptdksFmbU9kfc7nZCTv1HM3PJvjTELkTEfa9tUAbcF6FwBvyZn496C99GQLjUg7dMg",
  "key46": "4DkZSXosPu2S5um4H6SjXqFs5gh7C8D5pMakTp6eyRFCLPSfp4jZW8DiR6pDnfMkhtVgpM5S6dV841Dv7BVacBsB",
  "key47": "5xr9zKVvFM7xDxHRa2qcyFsj9LtD7URi7LHmiRe6gJLhPni4JLjUmmbe6ALgwZbFjoMfYAppLhWfjEEpAoGn54TG",
  "key48": "5YhkDySMwo2r6fN9MfUMiKRF5rJMRrm8VWAHujuUrw8U4W8ox7hk5UTtWsz6AHyF3yFCvnz5onyQbz5fzWadAX2q",
  "key49": "313mao8pkhaMkkK86TQ3XcxifxBPFF6hmAjk3eDCZi1ybVkTxaXWGcteJ9JcRGqftAEm5x5o335JJ9cL8VmjC2VM"
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
