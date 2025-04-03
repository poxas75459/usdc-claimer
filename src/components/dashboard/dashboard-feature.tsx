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
    "5UrTiDWHXeZtRx5tkXNSw6f8FfS5rGRhtZPHYk1VcHAJyRhg1WEC9E9gCHdaFVkwVQum2EouxTv9kj3Fda8ADEDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X7vq55cSTY4nAkeJgvA7XY8janzRM7A7RYywMobCjRrx5gpTXdGJHFFZ8DmMWbTqxn3NyBproNJU83tSLs3X3S3",
  "key1": "UjKSLst4k9yW5zUkf2qSn6HPkf7eQc2HpmgrbmnhoTidxkHN6etbXRRPqZNZFTvSCQbsdR2wzhZU3LtUkNKgdR7",
  "key2": "FGcgQft7R2JNmmqg24TQfLV1oEEpKEk6t554SZA9kAmNzRu8F5nmYR7ZWCDXvvdmDtLhMEh1fXQY85MQyPMFQqn",
  "key3": "4SSyDESkaKvD9FUydoTGCa6P1BwT2vTGv6KbmasqBcvGh9sgcGLGrE1N4RMmpCTTk2jocq2vW9XePbQAXEFKKdVx",
  "key4": "eJyHWySzCXd68TFFMYJ8A88pSG5W1hAAbQefAnwsMwQwKzvqfiDrmUgtYLz96nXdTC3gvS2tNJXBNmumLLzdW3m",
  "key5": "3NkMSDDqQZkqjvBineSMyRcFEFH61aFGsBhHvWXceDxPTtCEuRi5ksrtjCo8iXf4me3JZtYw6HDPWqHaiFRCm7KH",
  "key6": "guRLMha9MUQdbK56C4eCK5ccUUgNh4xWGXb3ZEcsFw26s1K5jczKLTvdvNw6NjKzxiBLpFh16ByNB5n8Z8n9gwS",
  "key7": "5UGx3B6mMVvVPFb1ukzWEVmiJqTDBUTCo9zqGaTeg8a9AzUaA4wrZK7ysNqobfsYvUHYefgFtqqv6pFnMqemtT2u",
  "key8": "SE9D4e3ryRiBoLKCenH93MVRXkVC8xy6SiRaxS6kU464eJzsVwTZaCbAp8NkmapWmQriW7weuuGMKprHk2yarDP",
  "key9": "55Cfd5vHHoFtsUZKWyzghhg1yXHjY1yXABVHaUn8sDq2zSxwjfpPVkSt4ua4e1GD9sBpin93s7CQrFsJA37FC8Jd",
  "key10": "4yfprmKFmjNZ415gobUuFC6MjwJBNQbhhH4J6rFS85qpKKLbpHbXNp1BNqvEJ5JrpAkXirqg77pkpNAxMpsZteE1",
  "key11": "4noXTtgrvYZtfKvjwJo9mLdvmPXA6gTwQhcm4Lnfon3f7hp1e4EP3KEwzH4v4UpJFsWP2EpY3cXBKCT4ZnCpsmN2",
  "key12": "ZHd8wweRpt5njxY87ZNYHyFVoGQN8xWzM7cE2vUVq4DP3JXnnXcodRRRL7ankViqGi4bc62Va3dpRoC3CArzkhh",
  "key13": "5z9seKVe2GUyXD8HCXZdV7fU4u22YB9CrvgsJghnsCyL66KYjcZa248CvZpo8agozque5hv9kTxNFpanFMnV82wf",
  "key14": "25TCXA4j5HAoUPqHKavcYYTXJaDyNG5un5MtS5Q9sLiJuZ6o3WajJkyjyzmPPyQFqwhQ2UVHB5Xwkp19brhYBc1F",
  "key15": "5QgJ3PqRmT2Y4HmT3zdgNLU2VezepCzsy2e5BFws7RixBKTeGUuTyUHoqeMEg7JmRVXHaYTgb9szqzbsjTnEcTUm",
  "key16": "5Qeq5MM7PVgmec29FbLghqzT8d9Uwe6jePWFJukwAUG4qooCVxvNYggocePJtgWvRrrdhAfuGCkFtNPVRif3gQsL",
  "key17": "4e8WBKMZt3ZvCBHcxNwmDqA2mV23F1SxjSLRTeCzia9Kz8BvvwW9XwARQqQ5xVkofBbEaD5xZgCxpNRSi53JC7FJ",
  "key18": "5T9bfTM5nVoRyd9QudnhyFra9a8eb9mEaeDcFjBLAfBy1gFGMQ4yqKtJinirgBCMb6qA7sT5C8iZVqPGV9G4mtmH",
  "key19": "5naQGnhhb1SRTCyQ1mq6ErM8fMKYJfTA8Dm1UkERdwED369E1FGwdKr2huz5CvH84QsRLi4Wbn3sLCoUB3mZQvvX",
  "key20": "67XvEzGuYXAy5GmWKNQGnbdGRqXFrSijKNg6zbwiRQZoTdYJ263At5QB1VqeCHQr5LGY2hioK5wysH6LauzjFSMR",
  "key21": "2S1kMg4378JDYwVdgcwUATeV7Vs8ZXqsddF1a5VdaC1muQvj27KdbecRnobnB9iCr8bn3n56kYPeapH3s6ooF96x",
  "key22": "2oBUShbD9dQSbddkrqpq7wzTy2uV6T8wDoUx8FRMMfeYDz42EEZVvVNWrW1v6Z6cLy3WjamVzCxVyR7ZusFEREPh",
  "key23": "2eqVKExR6Hvi11ZtjMAxDjUvtrGVfe5Z54JpnVGNGJs7FKRBvbHfgfwrhFr8D1xq7dZU9fzsVFjwuW9WaGs6URZA",
  "key24": "3nYC4ewp3N1QXEJTMrwV2GUn3puMtfgR9s7vdRDRNreNDzjZxdQNBteED8ArpTwA9nLPtWKdqUFRokmSmwh6bKie",
  "key25": "2LyfBQJ3s3LrSuPProiBv4Gz4TVptHf9Pz6Y5tddJuPhLz1ftEs2HX2czzN8Y26geuv7rFJ8wsqRinuCzNFapPJ",
  "key26": "4UnafuMZ1aFZTvJodJ5FttvLyGrkC64uRPW9N4QqitX2p7j1MQigey6dosNyiyjGXHnLC9UpBHYy4Lj3wdsvyYNc",
  "key27": "3As47BmNmEW83hnNm3Y2xHUriaK6xrvXgzqCtSJcb4stj6TK4W32dsw4nbpaFpRDxtGv8ufQnVug5yvFHh1NUfjJ",
  "key28": "96fRAZ8oh9fikHLmniKWteqHd2ComxC6XZPrhzMXA3wTs81MGv9sEJKRhm48cHkZfT99aEwpd265djtVKwAZFrZ",
  "key29": "Sv1MMV6Eb5KjWEPYApbJZ1WhSkQwKEqgK6aPGHEJbo1PCoXJxoMhi26E8ZSCaDEjyHYizUQAKmHWGrZd7uzcotb",
  "key30": "2L187rEFQ2y7Gny9saPdrgNdTCxPBiuTnQM1dsKPtzgcp54roUxcvNX19Wsm4DJbcM2uDtXsVA4qyiAG5s7ae3bz"
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
