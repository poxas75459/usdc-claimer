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
    "5sseYXLfAoAaehnyuRHvfbhiWmRtb2ZUG1j8aT4rdg4UyoiLD5t36JZj4BaXN7w2tW93F4frjYvJrjnzVuZ5gwT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cwzjNxUP85aYB5WZSEJhwC9ZGC8T4wKTVZtLJuU29QPpFvBi2pz9LdREHZzuyAgcXaAiVvEoTHwAvGvPx56net8",
  "key1": "62yv8eS46i9r7K3myGioNnx5D16vqYSSNUEtY3scxLLYa266BhWrTjxwcA8MxA5AiJto8nwyXB7EHhz88PQDwaRm",
  "key2": "3RSvWBzn1X27wJecfiNxqZbXZsA9p5aSeXjXJEBjrD5Pz9A3iEkWVtL68RMczNa5fEapK2onwZqjYMiKG82MCXnJ",
  "key3": "39oNcheBa6Mu3GnJPgYWxCjdTfhURYf1EHSizG57XWemrsembXiWBqAF7mMPzyXzg3WrBez4aprJLA2ouvj3UzsR",
  "key4": "5wrNFT74YWJdBdfyL8vqR279th57NMdSfSGvmvNLGUr8cSQ7wfYLm9w5rrnSWPYB545vCdRdayZckDarqF6e8YL7",
  "key5": "3Q7ABkF5TMVdcJoYUnUw8f4scDGC4uEP4m7ML3tkxFvhhdzbDPtzYeq3whtY6B7nsjMkAipDEJnEozUvBHemmrB7",
  "key6": "iGjCvXo9inEMkH7q8qRtjeHXxwjLG8Pat19PAwA9NLLeQ7VR7AX1A7YbBDMJsS98ftGDNwfPZymHWQ98DoXQeLN",
  "key7": "4C171YX9hnvCPckLk9kcaxDC3mhyXeNPNFLxcGbpt3sAaSbZdKcYTFrQFn5p3XC8wr74uwhfcncwD8o84ipmU9eU",
  "key8": "54r2AC7HsWQyhJJcgb5REtBrLbLqd6NgzXSp9HQG3H1qhpJhb9jvoZ8WFG8Passm1qTwVXHWXrJiPZvDMA4NEfN7",
  "key9": "5yj3qw7Tuk2ihNKSUE5mqWsYyENAetHdFCw5i2sxYaRWDbLui8PTv8rsYu2FSgP3JpX9dHkm2aPnXekfkRk5xWRz",
  "key10": "56XkRfUDJYsmx77GoFkVzF7HhWnKAk1MfB7UVac6kCY4kRPypCPD823SJbUQTFtNJLNfBU5YG8mHSK8YrQSsH2mk",
  "key11": "2WZ7AjeJ36Z9XW6S5e8D8KDGXas1o3FY8vNDw9HFayiLXVd73g799dTipZ655b5jyZVSX95gjJ3Uq9heS17TkVVV",
  "key12": "4d3gt2yu29GQWAVhDeBC8di1sJtY7Pvg7WVW2DrT7hcEUEG1QWUsr8AeGAqwi8Ctm3mMzcP9jT1XdEkTzFG7d1Uf",
  "key13": "2RFpXXAXBiy9D5iSq65oDSRHcuD55vXVkc6kFSggMvZa2zTSy87KvTxNQTTQDPqXKEUYZL8WrMq7F3zjmRjpGjgX",
  "key14": "2KQWAzEKo3JUhMVKErJXcP7CQU9Rxnm6GBxHLC8z2ukV6MTeHPpKp8uoLcedUYe5aVKTpV1KphM1uE7wQL618iYQ",
  "key15": "3a4feXtQgieLm8Fc7rhxAyuWbhNnJ79WYSo6UsEEm8nDZY28HgfrkbikpSTX2wjiQnyMPQ2t9ASC4gTSLrMrTU6E",
  "key16": "624xzjvbz9hro9VbYeWF7eTKimM2QMjSPSdnXnpKXpxfZJTHn7BupkberaqXqF3NPbKa6xecofochrkBsbRanjJB",
  "key17": "2aGEmvFpqhzoQmzGdLvirPPrMNEUtkXZ1uaccjvwjNAnTJpTZXaXR3eLjzTGvLy1AVwm4oFerPNyhkUPB5j7e6yP",
  "key18": "47bg1nggNFxHxDgqU7W9Yfz8W1UA4Mj4h8Q2uVuPSvqzEtbf4DpfC7PkESxonMHPPgXe3HYopGg2uHzzdqHFoaPw",
  "key19": "4V1Gfc8tWuzxxxkfRuNiGJjXtZTq6hebFJccgn6d18SCKV9WEyDuQeTPfwswywEotu1jmGGz53Nt6Z45HXAA5j8y",
  "key20": "wEcviQLMWu4p18REX7adiam4T4aEAgYf98vMveEoyj2CSeZsKKhpXWC4Uxvc52jQMKyRc5egL81x53nqFWNfxZv",
  "key21": "4Eiq15HNRmccA8JPWwB9MLty5ui67RXwhKWiBHjAVUWabAC8w3HQ8X8K2TcP2hCr7qLPmnYSvVvwEYUmpm8k3tHu",
  "key22": "3spGEnaVuy2x9iaAJS2U4HufSb2rbro7Q1FKgWv1soZJft95aXihaRU7deBWLF1U1W5NP5b9ogjmTtNGhEbyPaEq",
  "key23": "2bVkbW37dGGUcZswAh6358ZoSikV9YNbzBSKRQG8dvvcGaKtvRacFJQ4myPU9nnZ28cUsi5cptsNJtCTQ4FKJsJ1",
  "key24": "2rdQfhwmHUoCJzHdvghqazJGfGTzGb7Dgf6ACt49VCqSCy57je22F4X1UfLqyFwVDCfjbmoY9i2jzUtGjH911zHj",
  "key25": "k8J1nTK6Z5mtEpaAwbDCwhQ6L8YZeUzZ79EXAm3gab45WJv3oTz7cTzLTuXCi7yTupcJ8tV1Agcw6qh2ndQvrtL",
  "key26": "4p25Q9N3ee4PS43aQ7FYH5ts7HbA92M2fDx9wT1c8TEbi79Uy4A6AjdZ6fAv2YuxnJkGGTVT1swwmJCmQrhNHZrs",
  "key27": "3zgaCxQFCDoYjKsHScxR6jcyqNLqNFx2Rjr17yvapGRUc4o7hYvmJuL4pU5nG9gvkk87zjdZuMEqYcA72Z5jH9jZ",
  "key28": "3r2vCAwCAJJfUfdxbddYstD3Bf5aiHxiy7kRtq2Mt12mwBYuEypq27RsBuHntnAShtYkJcQQpRu64FdGuQLPgnhX",
  "key29": "58ba5tpouYnr7ooiknY8Z1bAmTNXhZsYosbVqYvgY5yR3McMkkdFNcYCDr2pBafQfsF6q3okvpo5VVTDJtQ3gXwD",
  "key30": "kViCY9G4EwstAs5EqP2kLT33qJCDmWavk8VwMjEux9yrdF7UaS5FeWqXSRXBTNf57MDUS8noPVvQc1wLbVwzkEL",
  "key31": "2CWaUFie6WLvGeHF2EtXaqu5FGPMRNFYagRuWSp89mmwwRcexVzeDfzo8GJHBkR8ceexEJFZFukv8efsyWdn8W7t",
  "key32": "35aYGmUrrzwmZ6PVpJDogfEKLSea4A8SqMZrqaSBUs5naEjF9gY1cdsQ11mVU8LEDS2gAKaaVDVzCRsiiH4NpNtW",
  "key33": "2Tph5j7XMLBBTDjGxyQEJBUAotnaPxFT8MG4Z8UdGJqapbABLDaRHhCGf82tDEJHYJ73xR7dBVFHC9JFWpbjumzD",
  "key34": "2ruGXMBLZqrcFiXExZRdfXvpC3VxijPycM2p29Umvvr3Eo1zVaU2sneJnqRvoayDSPsxsAYHTQ6Aw2PJmg6Asg6c",
  "key35": "3EyR6Nev9maydxB8yCFyuEXHohHhWQ1Tea4L6Z99EGQv7Nzef4e5AWV2rtSAmpfa2XHyXQfahbVDLmefDRSpZ86r",
  "key36": "3TkujBU53RtXL62XdvGcaNgbhrrkhgQND16gWXV24t4NMqCWGc65mvS8mjNrnwdAC1rCAy2NqpFZ8621dzEuaMv",
  "key37": "uAspuMYCotzsWRek42aFXkqw8fcDkV2AwyLYXVb1cBSZKH89Y2tPvCBbCVULNe242UBg9xepEcqkfj7XxrUAsUR",
  "key38": "5y3edsPJ3RpL2ihjeXBoqLmTXBMDgp9x6UUppyhMwbYVpvyCv6SgUzQaPAe4wGRzzC7erAK7GPiiZ1p55WjUyxyX",
  "key39": "2DuukoLBuqkvTgbCFs31AoVBvpK7nKEoR8KyS8Ju7AHnJ7T2PMTXLdVcGyMmT9RnKg6oTmnKGGF9yKW48XodEp7n",
  "key40": "2ge4CZsSGMyLpeZqD46THMxn4c93DJJHe9QJPHEWX2AMRspcanHnXAwKpG9XPxuQEUbwDdLcwkeG6ys5EmU3njDq",
  "key41": "3vjWxxVq6TvJHrjA8zbPBnDVMG1UczCjetCypMV4f8Hm6B2x3FqpsL6ZidNWF2BmeDz8WB7oM7MU1QPHdTi5NJL5",
  "key42": "3MkUUDTwxZkGURWTvhrj4UMq6b4YgJxk3UZKdEs22URv7sTnqurwqLBJXVZzjSTnpCkbR9Bm2zkGRKtrHYzKyp32",
  "key43": "qHcQt6tergKukiwzQ4tQ78RMSoTay6dPa1Hx2vCtoTF4CBH5T1SbceFtJwiXtmd6iUdxvN74gd1DZWp7bgPFRq1",
  "key44": "FmRJLnMB5Wu3nqJfbg3hxJHmazJNfjEXkzCEzHYXppSQvaSjFGVfYzchqrJtSbjFmhFZhr8qE17xuyXjfJmaiw8",
  "key45": "44jrX5DuQ2fXsJncL2HpX4fJ6ik6NqSepM4SnhCMRn8q5AuLcfX2DcvHF51wT17n3r6EbVZPimGtFMp5KXihqSyv",
  "key46": "X6yAu5cmRcQkePxvw9DQuCwX1xxk3597S3yssSCKb5UgybckJP2cSHA7M4d4i9DdoYRSWJK2aVyc6M4SsKfe8Dg",
  "key47": "5P35SoxLNLMegoz32tRjKrHRPokJKB5n6TYGcZccL2TrznwnW12PokjJHbT57nJr3TeQCwb4PmMkzniAq22fwqie"
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
