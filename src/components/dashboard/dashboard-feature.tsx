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
    "3MSSBpFh5U7dJRaNPzMbHCfHRp5rJGyrSZ8Mqi4DyFgBmBedjEEkwdBLyf2m2L7NE2GWDYpQcNSUtF1fAgToMK5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YY2JxF7gwPdB2rWBjmt2zsPEU4GB4ocRoh3vCsLm2UbQ5GFx7yHLwnacq1A5rMiCuGngp4nzSsovvNh5nB8p5gW",
  "key1": "3aCEQyjCvyvEFwNQqSyLWiRsy9ftj6ZB9CoSk8DeddW4ZSQ8xoCTBREZZCriZQyjXtFmmUKA1HD2sBpvdmZHmgH7",
  "key2": "Bn3eXbJToSNm1q7RHfUDQankv3Zm9FWYakZC43djzWqphEmsfnBu7AMkqRFNYfA4vyHLkJKPfi84SVivTaxQJ1e",
  "key3": "MQTr74TgKaH6z5iDgRrZ7An4VtESKFK1BoNHbsDCiFCgPaUGDsoiH5zchGhhwadmi8c2FTC8aktJEmGKwJUJvaf",
  "key4": "4UiuGbg8pAtwL6RHgXtQQ6cGHoSvm4DDYuAnnwZJgxnn7UPookapJj8hoBrwCpu7CUpJvUdkgZR9tCEcr8dshRAN",
  "key5": "Kz21gaAcsFHuaFSBbvHmXACd9frhEPJa92x5Umur7phxd7XR2St7B8cJd9ACmFQM9upGsHmjHQA4i8dKGijWjxg",
  "key6": "yoaGd3N3iGDLkscVT88WhxddJEQDfyGRKu6s89oh4DtTnEE3qbVsqG4LGjCzpAUiJ7pv1hYKQTyQCxTSCcvindz",
  "key7": "334CFZaVF128SUJVQTeEmq1MqHd6Z6B6rJnQsHtHiA8qY5pCrxvLiGfeVEiy8guV9ph3PbruG7ga1JPcM6vXdWkc",
  "key8": "FdULXkSLMkthorNPfuVn5jAJnyGGZSLL3LiTk5EKX51WTfzARB7aZWVQ7jWk2vPApxLZTJ2oyijkvoMAitndCXb",
  "key9": "3PFJ7NjUL2T2PcmjkvV5iGM1ugFJ4yNnegx6NqdBVB7YFPtTaw6boUbzGdKwRh3dXic9McY73URK3QzgJvpCNGkJ",
  "key10": "4WW3fUWb6aT9NnNeb6KRm1xj3HKHM6PPqhQVV3wZUapGzhgMgyiF5hbEGxRDzxsFQzpqycTSCdv8iicJFgXPstu9",
  "key11": "55d1SEnMDMJJfPc9c4NufoDtZ3bcjSUUkhXkUF6s5mX9MfyN6b6Dwf3y5KUpXkVmLvcn66k4xHrrPmCs7PyfqBnH",
  "key12": "5d9oC1zerxgUDBzZGPAHQ97YWEU7vb1VWdfpU9ctf4ApKPXMe2MQRWrJ63iFDwru7epEJD7tqb8FSsJSdKauzCMu",
  "key13": "4tjwfzJAYYrhdFyjQSKYLRvyqsWx3Jp4pB1kyqaU3xxAYRHcY2Dji1vPpHyMhMVvhRLMR9gMwNWRDB6FfJ42YJzX",
  "key14": "DZf1QwVX8do53xTPSijyCeNo3iEudw2S5DeegXmKECETdttSYBUGvkx3ftgSPyCBr6VU9jzeksPHbgadeecTgKg",
  "key15": "nZDPqTRmGUkLJJReSE7tbPRkqnwp8zGvYCpk3TfFCRpBwT6mRMuwufsJGshjJQusZAacnhhgbYgfjyhHqQtkWyg",
  "key16": "4oAhLazDtFnRiN3PWtA3yV9djTT58GWB8EcN8L3mKCJfRE1ohz9VZyD8vaPVxp6bWYjcMqEVhfCv5CGcobuJ9r4d",
  "key17": "4C9CZoNAfn67sj84E5hW8BsAKw6ZqLaqPJQtQHFCHuWF1HkS4y7fwpnCM5GgmJEPhaVtpKrxzrWMPRBkN5XFcpeq",
  "key18": "4jeAeY3oTfbZuAiNaRFALrVmroX9BcQiDyFhRdX8pvJmXE1yeUBDRt9ueYetVSRY7QXoeBoe5ikAsrPqmz8gT6Nw",
  "key19": "E2QY6HWCishnoiMYYm2dLo7F2wKzqCKyLkejerbS1Mi9MCxJ9hwm4eb91nsXoLXgsYiPTRDPELPHREeVyMrbepH",
  "key20": "32V3LNoAYXjLmPre6a5j7jdSewXeGPGTowztBjpeFHqwkt7KA4xdGPV6XgNStEKp9ChhxK6jjdV7igceFrCY4teo",
  "key21": "5tY1eYBzB4SgjYTCGXPcvGpo1esdybhLJErKo4ggk2vHHVW5eFbXDiv4dr88M21YTwUuJ44tnBX4Y2vYCC7GfuNj",
  "key22": "5JJaZMe9LCbJAxKwbAC9L1TBzumkL8Zto2yDhoqdDeHs9Ln7Qezm6uhmQdzLpp4MPhNcidLKWWVAMYxxu1qHTye5",
  "key23": "4eCctzBAHm4dwZnRRyfmtTK5JeT8W47jTn2NKAn6keWYn46gCtDdVo6FbUy7B5G7d4JFcpcKGpXvawrRYsWW4Rbj",
  "key24": "2QBd4nZNhf2sJMiEND2uBRWRKxTx2PD5qgDjDLGhmvj3Uv1XyMEmhSFaedKfJKM8XuJJopkHxr9vbWtJ1t7DRJz",
  "key25": "4GU1DVnD2M67CW5dNn4VxM5fEM6B73G2hXcCArnP5i52guW36T32aEhXbL3g65YKx4cUiukqYjHwKy45VTwbrM4m",
  "key26": "5u3Ah9KLc75wn6fJQUaXMtyLNytGvpmestdmSbGDiFCri1BZzHWeuwNc6rG79xbT1mHutE9Qs3nYLnECreVpt91o",
  "key27": "4aDuc8rvXfAfRy1JvWmzuD42PygMm3RAFt5AY5NmZVXgtTNnWn4FrkKUHryu1LjKipEjoZidRot4qxb8J5mx9apk",
  "key28": "2rJyUVpGo2x3HMvxQgW6SaWqujegECmKFrqL37JaLftdjr3pcwfqqYRdhNS7aKLYhug9xfPXFoHqM5D9oSxP3PCq",
  "key29": "5wjPTWXR3CHPDW7ybdjdBe9BBxCsWcCrdZkPSqXsqNhba3jqL5BPt3Lvj27TRgxNv49NTsq1YJbttJNu7H9Kze7i",
  "key30": "5qbjhvmSirdNnvW98QpyGQWamrGQpgJ5apsgayv4VBBEqBWu2gwrV7f6otyXo8Vakuq9vvr9amYd7XuWG3z6a8Ns",
  "key31": "e8NBNomjUYy2FzmTwz8UQ74bn9H5HkNJjfm9dyhubnZjjSDjNMsD2wuzmF9DXhDeufJtPZ2HFPyhShKejhvh3fy",
  "key32": "3YWAxDQ9MZWX5vYVgU8ncieKjCh9WASwbe73YwBXvSogjrKVMP7GH9ivnuM1hXWxcrxXhT22CT9JcC7rCfjNp8uU",
  "key33": "WsJw3jctycZokZgUBWiHg4KQELr5kTsSBjFqXzeNpxn3EgP3ejit2tUeYiehMYnkZ3brWMNtPuNYVk9gTiYceFp",
  "key34": "4LmSZmFyibeQmZffy2NDoM71Hs33XKqZysPwXycbbcfH2uJjMEs12eJyvnyk97r7DqvGJbYEXCMfDh7kkJU5BkrS",
  "key35": "2n6L2aqkKRd1AT2eezadtcBV4cvDLJhmA2NNi4wwFK8DCAHMKsiqyFbgDTn4wjhXQpUBhaFn57QQMv6VSQ7od8gG",
  "key36": "5G2UTagKcqvG4PsA8mrxvWAex1isVD8KLQEeuFfLNrqZm4DSeWdGmTeS7Mz4BsVootkVhJQaLig8KL6BqkSR8pyV"
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
