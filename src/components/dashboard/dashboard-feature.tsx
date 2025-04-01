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
    "65ii9Wb6TNY9zkTL6A86FNwXttquLcdMBcUXdhFBe6U9CET6jDhZDkA7XwYGJnkR7er3avfW1PRrMse8jxiQuZNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JNcd7qoQcqCTDvob2ubXmXv78o5atdGUPCPAEBcbhCwqmx5QenkhdgjpVVf6gZTH4k8QRbxWHWJxceEw66xam58",
  "key1": "67rPEP9up1DwKkfDwrrE4W9znpujWxHm6xBGTFaU4KZxkzzcVngLk8xrheAwxPw1sEXUBhKgG5iRghWQQfJaRA9r",
  "key2": "Cx9af87j4uQdcP9xEnbTJVLpHbLWWWN2LQqSLCFLZw3jXwsLrrPPoCzXjfYKqqux5Y3Wnca5WrZCLznrMAK7pxg",
  "key3": "3yjjkiTRpNSG6qLUWABjBgijF6FFaG4ZEfp5Uwdm7XGQQpsG6kTabfBSiQqJtW7Kt5eGtRfbB5QxaiWxrLP5Toys",
  "key4": "26J4fu8rtbQq7LKKJHy7fo9pqKXjgkbYBfdTX7S26Rse8b7iy2NeeGbFcPqHzK3iBJuv8zUKoV3ucu6LMe6xaWDQ",
  "key5": "4hQdEPGzmAxGp415LY8AfFUyTJUibfEmmMHaBHa9VHQhmbtd8mUQbAURPrKv3iTuMav1A7acSy4gSeTdBVNDmghR",
  "key6": "5TNVSWSBiUdE92JLPFset2znXUPm4GzM6J9UbLHegsTYRz87tBum8qaYRxRj5kLvF1aVgZvxKWQEBe57KeKsh24V",
  "key7": "3puaNVjNERFZDSGXkzXtPcMmMNCMJJmuqMCn1pSLyg7XZ4Zzc3KVWYZrMvCASnW6ueyQZrSUsLWmpr45DFBaW3oQ",
  "key8": "4k7cSH1uCP7xzdu76RSQJKj3gHC8cYyzCNGkAQFLz9tZfRBR3cgmQ2Q1CCjiq3qM1DV6nir21qHyvAXz2Y7zQ3xK",
  "key9": "MAJ61sDtsWt21DG1ohsXGgGJLG2p7eHU9pVS8drRZ1fepxJFYauggwse9UFRm4YkXVyqqBWbsBJbppqyawWw6r7",
  "key10": "3wxoxxRdttGDxoX2KJHubBP171AVTvbfKEgtHqWgE4iPZMH5dspynaPDZA9vcgAyuETSCwNwLTDPjUmvLFZ94F4w",
  "key11": "4pxxP6MisupUYxrhG2qHHMioXtzaKdKM4Y819SqEWA8bs1V7nTde57TbFvhEesTU28cP5s48rWuT6AgnhQbzHiM8",
  "key12": "4xQuHPwdZMZDom5upipCq5bfywDUiromTXNiLDyf7iZYbxYDyUxhhojg7ckZVc49i14vWcZRcVNXbAxpwFrSto4D",
  "key13": "3o2VMWwywbRWGehBA8ym8cKo4aKFPZdkcSD1wvmV3Vd7ym6G1d5VxqnBgvu6TdMNPwUAkp7CVjJR46YpmcSa1NqD",
  "key14": "CQBJ6oHTUF4YPx6qqE7j4XzSMbEN9MW1KJxBwQfHtLEvBwvjQA4yMyNrAUuDZae9tCa8h1wEoPP2voQimjHDzVH",
  "key15": "22XNr6FbgHFC9K4uZz16UEtheQRqqexnyRQCSvnRwpkL5Q8qdaYyM3yW9kahJB97dwutp7aYDfqbBcbMgpaDoEpD",
  "key16": "5bPcp3dn1Mzo4Ui6CC6v6FdRmjN1XWbNRT9SCVZTyXqeGeZfCrLhYH7Vx9iMcRojxzrUb6XA398QgBt1syRr34L6",
  "key17": "4yjsCbSuE7HTKp9M3T6FPFRRPCwH1m1iFHFTwu2XdKR2k7orMGEChUMG3xkfZPkFYJxQigLpRaJj3LueDpPozBS1",
  "key18": "3QUJcJAyhnNrXTgmqYaUin7RTrAczo8SbeaRYRf3hf3WLqsz32v9fArq1LMtq9q3KCe79ayTFuoDBrxcYxW6yg6Q",
  "key19": "3wBZkJZBrbcZqCtrRtp4cBzoAehNaiSThhhDKzZSo8enoPhCgQ4MvojopghsFaR7zE4RietqvqBMjMzLpSQSce3b",
  "key20": "3pcG85CwkAo1XwGi3QDvuEvL2grfk5rvHAnNg4Hm6WkKVh5irkQuEaog3RbNueZBzLakcB6mS5uokiNH1q1pqUQC",
  "key21": "UmL7mSDD7eM8KxHzU8unr9seP1jQoAxsQTLKuy3mfZjyTuKuycnGKcgTpvyg23FHpe6JcUp1wBGErBjajeRLMJX",
  "key22": "2MbPhgBePkuzic78pXsnRJB4mzXnNyggoaRxUccFUtj8Y7QGYmuWJY3sJV2LfVwVFsmVDBuKZc4dAYWCkGoEYXFp",
  "key23": "4MKUwymnC8jzXLVgSE4iGwy1BeNrTXUP3L1byfvmmmu8FkuQCsUqHCkjTEEoB1aEfYqmKPNernFwaKzje9ot1GGV",
  "key24": "2T3nohwdHns5MhRj1LitMoJnCAgm2S2Z3rT4R3BHEGdSrK2kU5XUAvbYTZdqf67vPYrPFTLgeT56rhmVxRrHiJ2f",
  "key25": "46jpMYaKkWSsvdCrLZopJiGVAa34gyBR2sDXQwRqddcToWx9jeXFmYXWRX9xNBWFsMKonHPefHZGPW1w3FAXnyuH",
  "key26": "333YrLDj9hwGjab7QTSnxXNK18sDe1VEvfnbNH4qbrVhoVDvkMitMT8NUmuqU4uoxyRrhAiyUhrSWAWs6nENsV3M",
  "key27": "3jToj7yBeqrNa7bdA8hjoT2jLT14EC6g4QK9jMjPRXhbnCzWaZWcmEH94hnvakHcNHBzhHD9vKDhK69fEXTnwL3P",
  "key28": "5dMUKzsn66HJLtYkLnW6CeuK2kctc2Zzba5MShNcan6BmqFmg4G8nuwRn3tupD1D2RdPk3q3TbQiBXYq5zQUNqxn",
  "key29": "3d5d4CxGPmUQQkqM6bczxi89vJKKUcd81qE1N1YyChkep3MYregbSL1WHVvEs5YoCHAvX5rZeTvjqbYwptHZezVw",
  "key30": "4svfprDw8WrfUn31Z2U9CgPTQe871oCQNnfP47nJXr6KsycRDcPdmeAzKR2CdVFCrWvHJHiPmM4FpTZkLeEnQEGU",
  "key31": "5NGoNZqiSKrS5aXtuxVWg2iqnksksVSXe5tyE6GxW1G72p1wLf4FfTpFLAUP1AwWKpZf2M6SjvP5sKTrwEyQFxJi",
  "key32": "4W4oVzZJFaG5saf7vzsq5G8p9cpVdJrXxmdp22ExCVQJcysSThBuAfkyVc8JEVdybmig4wUofQpnncuL9Jf1dx1Q",
  "key33": "5KUs6247rEmMZDd3FEMNEdSfZTHavoW1yrY9jG26BsBEBVcKD9jfgaKgwJfGnoqaJdwzwkgoZNUnZvuGX1RaVZR8",
  "key34": "2jTKvYHJ33BrUQgnmMasU2P6W1UaKt4NUBXqnN41wC8f376ih8n9PS7C84EGQpcVj7o1NGr46Nmi5PRFGBdcGujB",
  "key35": "RoyPe339Z9RG4FE6KFbGkDZdngyDcN88ufMp9ZKsBcB59ZGPXx7WhPMX7wR56TfW6cQj3Hd4pKGF4aSiV2s2tW9",
  "key36": "3RGirc7kRnJGco5UkxcS6VStTWBYJwDLdeHNGnfFpy5qJYDCxohzb3veMsdrwGJ2QK14HjQGWgjKdzySFRDtoRr6",
  "key37": "5P72Y48nwwZzvh5QhzyDzYXdxFkKv9wJii59dZhbLdF6R6x2yGN6kKWpByhsxfYqvhV7cvh6N8XgSDuR3MG8cLbW",
  "key38": "3BBwypyL3Qhy4FJwEyH25hVNdyquSwXavRvAQ2wtF4WkfUBWm3Hr61TfXLX1qTFxzRKa2nrjiVN118MQQz2JoUut",
  "key39": "58ReWNAtuVhnM3u96jEa3y3BssAgYzmpaiQFmEwxSCNzf8P65gQMto3QFDnBMBSqFbLPT5gRMx8HFtSrYtL1iBi2",
  "key40": "kkN7dbwYmj7kVqTNAdpsRkDRjDJBCQUAooCJtihL8JmPtEtWCdncPRLzx4KfwfDrqwDnEu4f3tDKnDEdckdujvs",
  "key41": "3WyXFbPc3LJDkWJHwUDkoE9eW3ZASnMsYmk1yGnu7vJKTyjzWo5u7vucDAWTNNLPtnvgP1kLLejDaaTpR3cSQoH",
  "key42": "2H76dyZSp3H9dsn2h7t5nMj4bAdG4BL9VT9fMEkScBRhhHwLzPhmkf6c3ZWJ1nh8PcJbgNeDCSsBPtFUn894GGj9",
  "key43": "4EidKNJicCLmZJ9kVVVu1qHrzX8XuY9whd8ahGk2nqxGonSG1v9bPf3Ph5yZ9FmanSqH1qf81iFc34iFUD7wn3YT"
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
