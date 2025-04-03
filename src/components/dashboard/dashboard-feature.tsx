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
    "2GJbdtJs34yoTi9zsE5CYyWgHm3HW5N5qASKiGG6GRgevpvn5NVFg8Ze857dr1uQohtnfffvpJ535dwV8ZoP6ke1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LoTmQsLfGuPWvZFQCbHv9ZCAq8exeW69HQXxhKxStAtc9VvWLeB9Tii6JbZtnAsLwSCPRUkFq4uQr2RqgHAk1Bd",
  "key1": "4zR9jrY7VorbF6HcW3fP7bWRv7ytbuJA61oSe4cQa3qehnLQaLiWcj8KQQLXZr67oDp5mQK55F7BfqsnW16cTeqU",
  "key2": "2sXrNKXmm2vwKEBUAqPN31CqTjwMwzBTBF5BFUu1EgQ1SkY2nUrz43QGFM87HexLUPAkQpMRPs3PtCF35BcocuUX",
  "key3": "2PH941gNokWcB2nqsrxB16ihsZzYE5E9oBmyRyLAuZXBL9DQpe6yTAF1ZxMzPDej8SzsuNuFCGrQi19WNJFKTnZR",
  "key4": "3DEqe9EBkJASD48pV7PumgEoq6mJhYEcrizdGmziEsuRCuEFYUZPZ4ZfcqSAJZtWK5irbwoVY271MxHh9ZFm6Zei",
  "key5": "vW5h1ajjQsAS83SGNtGKdDER2PTJidc836ERtjikzGu6d3MSbejzHvtJMe8RQcJJWjbijchMvc3hP84ZE2AGj1S",
  "key6": "3WBTNtX2VUjYbwNGFQG3zhFpTcwmu84o6ygBHwFuL3Ky1pNMSmqTcMtqUonzB1UUmr7Y2ipDnsmr5bbgvBKewHYV",
  "key7": "UMUnN7B4k9tDZb6PrgiZzK6pEemXqYLYwHFE4ci4Sq2wgmpkwsaejPXn6z6SyPacyaGrAWSTSeBL5kbt7fK1tV3",
  "key8": "3eiU2abE7bYqJa4RuvsnF6G5sCttVFo7yVZMxbiWA21SJtt2wDZPSrrZiwsW94BDQYJB7RrggUQWo7y7UNPqP8F",
  "key9": "49iKJWiRoUaQq1n1wuiDghu4Kn65pgm4Yk6vUaW89VPnR1Sbm29bJe1KsVbnX654sAL3NEZqb5fm8Mf6ETUBpdCH",
  "key10": "2tZ1sugHWQT2LH54u5WqZzvUE6modVo9C6F3TL2fHDAaBjc87PMbyv3eZjHxUJQKZ8eBB7FZN629AnT4aSzS1gHp",
  "key11": "5Wb97kQfNWtFMhLaqLw5aEVsrhtoyHAANZ79Qbf9nNJkBukx5t6xy4c12dkCLiRj9FEDBqrEUjAdTaP8dfVWUNmz",
  "key12": "ePZwDN494huBjWvfpc1awdoyrf9PbY4Ft664TqgGY3W8mu1WcPKY8CTQrsSjEVr3hnoVZptT3U3BkgaCFxzzniH",
  "key13": "5BqUUxXkipc26xpZwCjSjWLV6ikycoE5xpumTDYtJqwY8tWVf18yNpQn5AM4xdb7747WeCA8rVBmbhoHauZri5e9",
  "key14": "RDDCJrxPtJf1H2G4iWGu3xgpMYzSEE2vtr7recD2sAnq84PEDFkusDN9uXgy7mWrtS216oUCrcrKGh3awhYBxHW",
  "key15": "Lwo9GFWhV5Q6aNAixM2WzsCQ1PPN6uwR35M3MRHJBHi9SadfHQ1aYx9N3Azps4QHhAVzJsoikCv3DycH1cnVTCf",
  "key16": "277UxB3JPAbrS7ZVERaqeH37X4cCfkREzz6x3BSjhrXRwhXtsW9JboCpTwvtfnaFx8R4Y1SxoyFdg6NyftR3dPG7",
  "key17": "d2UVZyKzMdN7kUQ1BLmHJzVy37tE5sS6Pg1ua5QyZNaegWDBXscrkwj8wjSb5ZiNyKHxRH8Lwp3kT6r9p67biGr",
  "key18": "4dsKN64xeJNF8Fye9vkQxDhukywYdjYZ2mdzAXCowTCejsYG6emVbMoY59tyUkGsRMmwcxwHyoQZsXxzzoQnjR1F",
  "key19": "2oNMckaRZxeGbnJkj9WN3Qx7bXSJHCfUZdbMPCEJYgaBeSJPi6jmJAJDcQPqwHmcW83GYwFZzvet23DVWroM79U4",
  "key20": "3Gyg1VQxdUePd56xY5X1R4zLjuzB9fXYTF2GXKFecaFLJnYzkRVihaUkMDJrAHT46fugpM8NPYYXDiJ5nJEUD3YT",
  "key21": "5FQWCsWXy4ut4nwoQHmVBYhwn7L5B49FJifa78kTiRLEPJ25SjJFX1NQqV7BU3nGJYLtuPdnLauowyFobG6HJeGM",
  "key22": "2oq8ebL58cdaRc244FXpF5qZNfAVc3VTXamLar6psmi8vYbMFT8c6iTy528jpmWRwPp8atB66AUm7DPet2vfjeFw",
  "key23": "5SHX3vmmaNJKFJ4Fg45yjhdrtmnpQbAAbXF51BMR7eY2eUws7sfdCAaX6WU4uFZSw9LRqdLgWTzAX1zkQrn66Do3",
  "key24": "4UQquZ6Fecpx3ZRCHAzpGZ85jCQ9PfVccxDM6z1snzCgah6CWVKXU1LxMWM3tuRg3hHZvmCEWsU3Vu7NWjW8D4zN",
  "key25": "BYmaAqJvDhjDkGdRizCzatb1XtsLedBqG8bc2uzn9Zkiib4QBUEXAu6o85wRS28Cj1iZSo7fbUKxrdtHWMXTbZx",
  "key26": "3ex5QmbVU57exodFCQueB4nsPzyCsfZ1mqG2b3WXraSoa55qpKfwusiCLZp9PyAsXVGunhLVCh836hboZRkXhGJY",
  "key27": "4TcdFEGZW9UCCprKGAZCvLmeidxBt77ZkY3jA22hN3rqYGzNX4P7w1rTfSgdnoAdPPGZ6ZCxScUVHMPBY9WeQ6KD",
  "key28": "3t23SEydPsoapyGvi7hbtyCya5LzDCUtTm9q6p1iucYN7K6kE5JrtcaP7LvhNt2Yx8yc1uRm9K6mmNZVXjLDXeHL",
  "key29": "5t6RsBY1Gux2nedn1kKGU9hS1xdyYKTNtPuLFfsdJB4JSYbwCmPs4Rue2SA9M65Uanb6ATRP4hh2seQckzk3va91",
  "key30": "VeQYXxBfh3XCrYaPExyxWck7oAQNKxZQCKdajvnersY7s76KzkX2iabvHvSnciuucBTwVx5xdo4ahVRj9rdf5uK",
  "key31": "4kJMbe9rNhLbbSbS6nBgrBDYADLWvHDzVmzDsuhN2FeU6pfeq4UqgXcYXWZYT662GD4wZnmHrxSnXzjcrxLfuyb7",
  "key32": "662ohDV5vTEdo9jYJgqmg7EREjihoxTZu1hVJQAS4ufXWLvqYRtomYQLvHS4oJwTPMjScheMz5q9KTgM5eitquuB",
  "key33": "2bWjwnPsFhE5p6j1kWEJiNjRG7yV9W3TBN1cZHTdie9JnfYbdFjfYCRr5mn6sz6comHWdJPP7bmghCmRzn7AYSMm"
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
