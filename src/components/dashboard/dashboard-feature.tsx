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
    "3iNTuKvTmutW7SmzVu4YvvPYPmGZHHj34zqzyaWU9bKZLb7u2kiQXKY4hfhYpkGQ5LUk4tX7pofdkjrpo9DrZn3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ir2F2vCsNSvFtTYzg5ZV8rqYZ1WVueAwmtfKAtHwxuyaGJ2erx8YHw1o1XMRCffxjUngnueqQ7efkD3okX54yL",
  "key1": "ihGt9Av5nBC5NAbZgW4YWjjDEZ6K7kupSgomPm4fNMqs2nn2Tge1MQywD4uvvS3MhTNTxZVmcNRjcRpXu58CwrR",
  "key2": "KHB7bToPjMjFsGJLvJQraGgnBBzg25um3Mabg7FtHChvQhHNxw2HWv4u6Xxno6NZxLc3uCnMwbZNPJ1BcY8ZCLX",
  "key3": "4zEDYeRHqceKUvEotaaFbiLsaCM2qeAHgyXkpKu1GBYk2xTPfyFuc1mpZpXsgv7h3Z9uq5fqakCdRiaxGH1PBZeE",
  "key4": "4ev4rSACZ85yvSnaH4V7YCK8WBUoVn3z6PMdkSM8GzR9MXYRzT8L8uHRSZnXfP2LqqFVAbdHj8KbR2PArPsEseab",
  "key5": "yCam4VyYnt5YL3qZFTUxUbxtQ2msPQ9t3jNordJamPmb6BPxK6rE9nfL3GQ2PC5y9Wu9DyVKVqrnZKTQeLBQVXw",
  "key6": "n5nQzZnAxLrKBohKHDZ871enUQUvuLUPJr2wTyoRVcRHWyNUjXqqJx8d3zkN9LXP57aKbr1Ggy9SnHpB4qGZ61H",
  "key7": "3mJX7NfzeBBRWGN7LRx3AjrNJSDwrstjzE4pxe9NHQ6XfHRbRhobnHCzFi9PWuke344PoppiAW7WAzzGzxGT1xnx",
  "key8": "j3KVJw5iZ4fLo1NTXkxUYcs7vfftT2hmCoGSaEWpur4aHmFcYMtukiK3DCAPC14sp6J5KAGh7ucg1LP3fSZ6ei7",
  "key9": "2EK12vf65UsKW7k6oEvMKBdrZJeVX2mjk8gzsthpJNXndbVjfpyMh1h72kk5HGAziZMDVLiRKxMzVe2SXAENBfyP",
  "key10": "4ffDbgwdC66TQxcyNy6gba64o8uTZzNQ535XibDzKVYDRMSyg7at1nfHSdBZsJW4bgxfwQHej1qMjfaTAddMLykh",
  "key11": "4aVuwbS3JNDYuXhs5HuW1AbxkwNjMEVwiTH4Vvzj6VqjcYhwZfCGqQKjCxnhD4HdvTnWn2iGa8egF94xWCtLuF8F",
  "key12": "3deLeGEcVbWDBY9qnpDWBRhrnj2uu39VewfK4yPQJUXMKuBt9WKAVSgs7FFiGSDa6rxSgbaj6efLXf89KmLEacqL",
  "key13": "331LdEcCtJ8sjRg2cLgQ9eB2Rq9JeSihCpC3wV48iUB6sra5st4rcz7ToGQByQjNUJCa2hMsGgJoiAbEhWSVRvrD",
  "key14": "2jjn37x5UDpAKguRupMadLdFzP7wAVVnKDHt2FokMZR8rULsZVrrRDJgKqfgY1b8NZQntEuKoGaSZ4rvzntr868v",
  "key15": "5hZXdGsMa717wLF5rSSVuwzTjc9ccCi8KvJHkPTfSvXLVxDRwjDgppkmSBgaw2DLjJxeEugSBceNB537qtC21vMN",
  "key16": "36JAGSX7QACcyoKvueFWMn511f8w2fDmbKcNsW4vMkFRheWmrLjj63yf6Byo1oSLXbyhAcwuFKWgay9L2hwKB2rg",
  "key17": "vxfyVTxUoJJ7SHhohM4B5M8ai8P2AgCgs3UV2axNaYsnoroGgvy3NtuX2AGQhCfPvPMc2RgvGcNBVzaeX3Pd4e5",
  "key18": "36hnvezoee33oaPbarV7DNSUtbAuDmwHdCn5keKxXfRUD35rURe2TS2U6SFQUDjHRp9WtNPsaECUpd5tHq8buSQU",
  "key19": "2Xqa4SRSctZ1ybWRtqyzLSqKHsqfBfyPx7j82dt8J9XZWLnn4uvxH1pgU5NMtuwSTESADyNBUqKP5Lq8D4yX27nN",
  "key20": "2aKbB3usNCzLz3yNP9g4T7PRkvx13vJn9mrBGxS1pBt8qcakeQLzXvteRkSR557JhhoAxXe1XSyGRg2G1kqDUCib",
  "key21": "ZFr9Bnr6j8oxUjH1EvvKNcFBVJfFSHqSPhugKmzqqD4BabgSAWyWaWukR9cDE9iuMj8gvXjaGh4UUfTku6yqfei",
  "key22": "2L3yZDngx4142uFeVsEQ5RyYwTcSEhtaSS7AAogZD66enDcuV8me9dJHny8XYS3j41QUQCcQk1edYujhGj1HZTrz",
  "key23": "ETxDoQ2NyXSvoZ9rDHQgFC6pjdfYB7wmPTMvdyHVY88ydhP7MuhXJDz3EW5PJNmAkJzchbHWsjj3CiUDfKA5yJo",
  "key24": "2h8wGt3fYV3skKJ5iFK9XMPqB2N5fHU58pV8yS9NoNbg4jzky93BG7KDGdSRD6YRNYZZgFXYRMhEEWACDN7Pd4b",
  "key25": "2GSK8DFj3jMAmEcxfg9DSJgesZ8vKjhyM1iYiUWWaknaNByhXdQQu2fkTNpFLSEH1BJBxZFwK2k5qc78xwQMfnK8",
  "key26": "8mBHmpHz9LQddfu1CtTg7hL6ubx5T2Rqjm8kCMqQG6ioGtrZiphpwzYagjFQst6dddvhDzAfK3mwQsMGaDLHEYE",
  "key27": "5Cr4fuLDqnHgSvD7t1dAUguHrfnTShHbUZUkDmdkxksgByGqyhTNawJ9Xd9sYRaVd96mfRXTaWNuCJFWbEKTik4k",
  "key28": "oA8QN5TWmWd9D3YWzj11F7S8SMY9NFL5tQ9gRCJ8VA6GAj8vTGhtkg32iqzhsmo2SxYA9foPvPa3Z2uFX9ktWPP",
  "key29": "5HwgwZpUa2dt6aYCZDLXQEKtLkgmuRSAgxComcMLp8egiA5pftz9ojQkkdkzTdXZd1CSTiaz34u7banu3SGZe9NJ",
  "key30": "5JoZ7sZDYouYupjLSi69V2ar941RdiSSLHwz8seb75tkNRLquJpfVFUQsrycdemywFkr9njWnp2WTGBRi5vicC3S",
  "key31": "2DWeqjvHzyEtVamACjzzNRppHJ9zuvitGtN6RS2W38V1m1PVWHyiao8Mwi7AbLq9vyhEHqSnJzsBBDgi3SW6AzU6",
  "key32": "bTAyWdRqNWmsDmNWALV1bG5hvb7dXEVd6uBrhzuuTzBipfstmEsiEo6fgDU5YcgouaMHdrD4vnt4E5GV5MAKd37",
  "key33": "2k3P6mv9J8YvCC5WNiB1DHqYV8sZPDDVgcvAZBtuJ8zkF1FKDkcjjYtHcAaXd5KVhAZ8mJ8nshzVdxZE1qr6gedr",
  "key34": "5EYhibeiwBnkxWAHfg63ShfaPwM87HApkaDWvgfEKBfZ9aRC3ZxnPbWou9YwxcKJpW4wwbQh1taoubxjWiwQf54S"
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
