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
    "2ZNS3djW8GGfLT95bfNQysDHzHGRjS36spbPF4k37GahpTKFb9oqisN5zQ9V3eE5MkfYPGQ7DpcZpwBzKewU4qVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ZqeCsZv9tPTQZayjTsbrXRxu57poWRQsx7R5sWEwz2CmLoWZdzotBRMx34AzgAccXgWifrotYvNV8tSVu7Hh9b",
  "key1": "5q1xKekTP6HRsFtxP1SHGZaoRPF44GT6Xw4bHiLprhFgV9HRJgoLxELgQYR6AuDkeSwXTpXyrBAoQvN6qspMCpZp",
  "key2": "HtFHY8mrwti1wxosw9Xuhv5YcpjHrjrz11sRcojCRpnhjMub9r1bv9oem7ad2yKPs93SVC5s3DPMzcXhvDpKodn",
  "key3": "3eDNrXNbQFVn6N2kJhKHGDMhjhcs5cTFGbUKqGWSwWBCpYJSL41ZWygc6wUrmbjtA2VQhcwVvfNWPHqnAbc4RrXH",
  "key4": "5nNXo9Q5WsPycg46BcqMFZiAqvoRfnkvrYXXXs7MZaGxWZpWHWSswmePiMT1w7vRfH75PjTuz7881Sp3h7XjfsjP",
  "key5": "55467PuBM1AwEr2xGTGb4c1aJcPN9nfrWxrySPTYHAe3a6fSezzvLekXn8uAYiqhFHEjeDC3feN3QNqqiybAuWpC",
  "key6": "U6ARRAFKS9g7iBFaoLtExVyTe3mq4B5uqDRpa26hoo3spnwAnHQYrELVYTimgggpgsE6q75RbT6fGA9Q6osjJ1w",
  "key7": "2PtuX4GCa1fPZpmh1pJ44CjnY7enzGSMjsoWmwYbQkMVPiN8LUnXsywvo1jWgTVPDf5SZpmKLsgtoLfVqYd18Wfg",
  "key8": "4Qo8LvpyRqpVNUYPHTwueK6tXjLUEkTtV7mURFaNnPFzM1es5CidohyXWKoJs4gjVnYsg2NcqBXP3i5JCV6zqake",
  "key9": "4yBiJU48SbtVC6HicwEtoeCvfBx3cfrLMwyX69RBWV7YgDzJygogusHMbFtTZatZRZxwv41kXhgUkMroqANbjT8F",
  "key10": "27FNiA7oPyshvyzFQ7E2igjKEHgeY9mdrm4vDUKvj3WVUhAVJPZdtkrn6Kz7PFfdGB4DeweaD7CoJxXhXowZBtxo",
  "key11": "3PNVZr3eDtUbpqGfZ4hkehg85YZfmgAWxc39Nao7SkQWe7rbhcyXkc7s5PrRczWtY6Q4w2pPiARHVaxt3sPzpujn",
  "key12": "4bYUL8j3KAUKcjw2gP3wJhxYpYCF4NmuoaTvd2c1L3GNda6npYjqTN8zrTAnYnwVq6d89pwNEEvyE4FGS7uo5DJY",
  "key13": "3jVk5ev5hWZvMhosNzumE3M9RW8XZ9oFd2HGQrVG9wyC7F4HobM4HBhnsmts4R5Av4kb7AknQ7eEtx1rcDZjdV9w",
  "key14": "3xXNQPTCyrwFwjN74xQFJp9CfuJAHPeExYWPUw82C1q3GttpxtVyEgiGAjPTUxyGQrsyRsu9R99m3P5z8kKiBHvM",
  "key15": "37BijGzkUFmd5aLSmR6vvPkNsk4WsHPUcoHnTcj8VcbajunZDMKKkcXGyDAB92wuPrmJChWHzkbjPF9gDDrNcvBG",
  "key16": "2uFjfHnaywiM595Q7gLNxkipFUhSJpySmYSvpW67SDHyA2ZropA7i3Dgn7SuPup78gDfz1nSoF2H1NFprU3D5XhV",
  "key17": "2woGFsD9Kh6WR8nsE362NarmHXC8MKvbHLnuSoCcvj7pRqGQUFS5E8BuSUy8uMH87hMdfs9jCjexALTZ5ARbkXzT",
  "key18": "bEsyJAYxNVoc2UbmVTX6EYJZXAbAUAPvhixdpmK6W68Ni1wkNmhV1SUcakVGyr2CcAFgLySPidee6P2RR8kDHRP",
  "key19": "2nDpxpfmn8tqAHwMQe2HdwVRL4unwMxYN62wQXjjvNUSGiowdKmaVJjB4yzPefJB2sEg99szcaZ7CUk2MnP9kj9y",
  "key20": "2X4CYc1bZ8CsUuKdb6KjPmW4HywHLhsBdp6yooxvMKqKgpHZMcL6p1x828LyhQeErYiLA9GMVy5L4z6JkzBDium",
  "key21": "2ma6HqAuXeNmeQGZ1MRNpvJ8SLw17cKBaKtbEj99AtbG5WpvdtvGEEYw1oNuHvXzAeFguzMfm7QjuyiiNWdT77oA",
  "key22": "5KYZgYpFzMUGizhc7cneLkjGpUWpRnK65Y4T1JafJRbXCFm8stSm8t2uuN1zgjYwUhLaHNcGcuzfW4No9EjSRaVR",
  "key23": "31TdhkjYf2jmm3Ceh7RvaAVg1edc2QPrjjfqkKgSo7Hp7s4nqWaQBrNjX8k3JH7NsiAnei3WxmVy152qUM6VvouN",
  "key24": "3ugc5Hj9XuKvYx3ocAtXAmEfUmCNtqpUY8dt4eayVimiBwnA23mGp5Yj1aP5Jqg8HZTJpJhXRhkC7P5JAKu236tz",
  "key25": "oVPGJysT14fdcfwKxaE1YEqV88etucn83oGRwodARnZgLonzSV4NRducbi1Yny8TYGYmUyPKxJhQMQq3LBEeYw5",
  "key26": "39ADSrQMQgTwYDnjsTo8wUVi7gytHe37ms1GHyaGYg7jwLqzCCnGaf7HA2zNfcZZatrJF9cMvit1sN9o9zVKSfSZ",
  "key27": "3239vkcTuNtnUKBb62GeT9fByqGCga7UmsaeQHU84UZzy79e5s3R6redh2x4i3iBpthugRhZjxco9AN6D6pWue6k",
  "key28": "HppSLgF1EAt5Hrkrp2BX3tuNkVURwfNkjYDKq3cVktTZ55wyPz4UjssdrxYvup2R9FKu72x25oEaThxqEMEUHYs",
  "key29": "4DVCjCGBSHwLeWXL6DqnNAQhDB8F9E4de6fobncRsR4oQjyhcG2TXnUXbnu6RXk43kJRXgPuPohcnEMJJYEyaziV",
  "key30": "H1mqVWf7EayjuKL5Fm96FKuf9MrMCNsMSg8NTiyMmmcFWUh75sYeKPZFRXAyGbhbDkpHkkJBdJFxvEX8JRXdveH",
  "key31": "4dHGDj1JTNC2kud1wnDV9YrMd2B6kj9ugusGe1qsYqtAcmbAj1T5KsaXn65VKbNSadvTG5kdP7mRg33sm3MkaEUf",
  "key32": "3LQiMabgEhMuLXJxdm1paeDZXYHMXjM3FcM23x1JsKafizrRYk9Ayd1WuMf6avdpjRWD58S7KbBQmhvCeNVj4tr4",
  "key33": "25hvKHHqtBXfWtoLZzEKjc6tv2G8Zhnp6JoHfPcHWGFoqByQXfehsyPgsaLQSyZKWoEVyMgnbbsqb3kK4WZ23HnA",
  "key34": "3gPfYJ5XRCHSxVNfhBQVBE84xMK1keMWLeu57NjSgQYZphn4fMySaQCpG46pBCaS8Kmv4R8pZaS3Daa5DPAPxC7s",
  "key35": "4EpqJu6gc23jDwhK7XVwzc4m5eUfDZWQub9Qz3LzjeRPnDBJnKyE7HvXJf56zx1HEdhytP5UmYMx9GL5gXcPQ45Q",
  "key36": "3NEYs2LtoNt9fnAJ32vgEHWSiVV43p4u716BCwNSSUwG1wApN22HnnzGsBhgB8FKaLzVBeMa1sff5s58xxhD2cQa"
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
