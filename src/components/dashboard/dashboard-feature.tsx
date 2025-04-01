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
    "4CHEMeziN3XbZiwUYkrQYqV9PFvmeT2gvkePAXDUQKNMhyS6Q1XVXx2fe6aE9cKyj9zNt6gzzJ7iruVe4jFFodDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FCRfvc6dSjPnUQKkoCiMxnPoCvntnsMwugkvRu5rBcZgnwAV9wLyZVNLuH7KDd5Hs1zdK9SZpZM1v7c6kt5yDwg",
  "key1": "5cFsmxqBKKitbvWLSBcLgnQ8VYJPiAUvDZcLWrTFmg2uHmruJWdg6PMomnm27Fn9jgW416CpB19ECqG98HWJnBjf",
  "key2": "3AT67JztLNFDAcazaaciE5u9d6VnHqJxx86iHNs4FLESdb2BqUH3sEcfrFgCQpr2VzvGtAprKWZJZCG1GHuJvDr7",
  "key3": "4jrEvxfQoUH88v9Chb25LztwBci92mqV9eyZjkw7NMUPCB21CEiN2tmQe6x3RmvV8ZQ4Q3orSTun5DwG6ePz8C4T",
  "key4": "5q4ksNvxgbvQmkN3WZrNqfjjFkqNxQ58DQgrdUoRa12VEezYiQ1yAR4irmRQjf937xttNtXwJbxMFXQ4wsjCY1F",
  "key5": "HfdnE8ujZcnx7w83Dss3GW9bbUQPJR5uRicb4mJtcHr7AdRtwAZpqgV749cDR9b3svJnHeiMde2EG4aiPosz8pB",
  "key6": "2sQ6gDw8s6qd8hW9rwxZvzHyUNDdfzsRejWzqk12Km4aAcm1JUMSVRCUXKCJ7hVAHTuYjQ6e92Bs2hwpyb7zA9gg",
  "key7": "5HyVz55uJEoz8YttpobwWtXnMtpsFvaukK5YTpk2TbvCQ8qocSauL6ycDoZf59GGKhKLtjYLqbXRkPiJ5S5TXM4E",
  "key8": "5YsEhv6iZRHyTEwijJ83wwPGpnyQVYy2WPwxCaL1wQDVRKvb2Lrgt1kL8FT5KWMneS7FTCurJiBPyczGAAaVFw5X",
  "key9": "3pYWCFmxnF8VqaxZJZYYAW8oViuU93CyTAzSZMkVnyuJ2fgE4FBwXocRmRgfd6bq5pDBYUKppShtRE8GUD7Tcepw",
  "key10": "N56rHpCgVqzLUcofDhgxSDdQEF4jDfRmtNiV9cWdjkBcwUiDVQk6YQA9T2aPhCwmq5yaWo9i97aaKDDDhwFY7v6",
  "key11": "UV9DLebGVKUB1KtdqWLTJkue6DL7KcMQkNf8TG8qgZXCDP28HfkwAjDmsWTbpBtH77iVRPBp7BN4u49eJLasdMT",
  "key12": "2DCT4cRN18absMk8JXaduCeaACX444jZiX48u9PPHWaFiR7qPi4LnRGc7isBpJ7DJfLeJVfkMXjLjVcYMbUiTdnU",
  "key13": "4rsHSowY6hqrBAuKtMdQM86f2HBQRgufCg3gxydoMnAhuoK7LG3kSDvqAv26HdSWNb1JsMy877W28k6dgrXWNBmD",
  "key14": "2nZC8hTjXwjAxGaQz3oeY2QMLuHZ5uVGqXqp1rwoVi492W2oLJmjR11UdJbCqfHrHc2UcFua8v8cbU5WwDuYrqwh",
  "key15": "4HNLvNsuphHJ2zZKsHX2KPNAmAYNFtXAfPgjkfB31cejMMNj4eTNjpwqzuPHoQiohL4oTvZTJ3M6vzdWovyhdTfH",
  "key16": "2ohGsskXzWpNHLg7KS6HLvpGhqANoFPhWjb9svRK7EuLnyRz7qkUrFF6u9HnTcbWh9ohjyUT1tCb6HCSHWuaXQCv",
  "key17": "47u2YQjwD5ghb7iFyNUVA9dyY6vzdFWrqbdZPgeKz4wHDtuKuRT2MFq2aJE4DbL3sVasmaRQqSnLiMEDHpBL2Vji",
  "key18": "4uQmMdd4dcUWPtEepYpm6ZTuTzhbuKXGXGgJmGiRXgZ5k9CrotpZJ2JeYH98AaWhUSQTmaP1oSAzWhozaCddbtWs",
  "key19": "66eGQQFK8v8wmGFdL3zd5WhgkdYfqx5x5rJzzaWofHcPF689rzdG3MQKHHYdZs7PtquVNkFHcQ28LrhPvuTC2nbn",
  "key20": "4CDKedKDYNrfhPp4XTKEuHhsBbwnQycnfzQXFF6CvdAwZjwsfBcHxHdrMSNkzqdN3wwhokVRFEGAN8oakRuQuEYF",
  "key21": "5gyKWXjZyMkwYo8DoDBUeFhJCVruHp8jvQM7F2GbhuxNTRjiSL7A2vkBpFaWQsYBuZMiWGX5LNTasNYC7Yheaj5h",
  "key22": "2hxLRKhwefRmiG3Ck3tFSYLstZC91vHnym6UpNzSSmSnttgoPE2eRNGuF4q5v8rrMbMvU4RaCXjGYKyK5m9gtG5q",
  "key23": "3bSDzH7FdDcDZe4oDE93EusdtzSZaasTrSkXemKE8gKzTxFnrHxw7xYaYhpFxRhtn126t5vvRegGxxpfsbGbq6HM",
  "key24": "26gRHNs8VtGFEtgT74ocsh2cXdAtLXiRK1YiGEELwNitP3utWPCxeektXirt91yYPh3mZFdeVSmVveadT1YZ79e5",
  "key25": "5D24Ac4bKdQvHqXHXDr7qeLuzfbMcHG1FohoVE6aGuqZx61PgqS4ZEQTGdwE9Zqc2CuZNjhG1kJ3xTrgXhJW8T2m",
  "key26": "4zxMZkKQfvThQXCQwTGcXTBWhi31hDge5bbWZytn7h2o6sqWbb2V43kFq8ML7iSjEQzsDpGi9Ket5QPcJthrRFd4",
  "key27": "4LP8s279w2iSgjCzmNRz5TUL7iHX9MLEwNMoSyhcWPhseCmewkJPXsp3Ru8z5AuhFzSfVGN9WahEGErjYHwNkbnM",
  "key28": "5Bi1XyXghSTWXcUDmEdNrUPUvyZwcUYUwiTLLcPBeYs2HnmKAvxLixTvhAUSQHD6GrmGH6R9vFyJzQ8xcFfyEAdH",
  "key29": "45YJRBFsYVauVUQE9E7UZ5k1MpNv8Xh9DszpXaUwxDRgX8pn1wBmqWk6mYX7tfpCHSb2KcT4MMjTjbcvKPVRRsja",
  "key30": "2wsaJW23ury4PfSyJhdbA7xQE9RT1tjRCPEjmUSxMaZhg4RkUFjahV7BpKRWy1Rni74YjSpsyq5xXVBrH5EAdQBV",
  "key31": "3JqEYtN1rAAzpH7guVP19tfPoYCzMG8vMuNP58xQzwvWXHApAZeTWBQuEMyo2WQQLfrWAW8kgBrhqSmnticaRPxm"
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
