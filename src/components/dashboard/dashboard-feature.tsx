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
    "3vEpdivLnSxxvti9UmXcrtVgDPace3tguQpqDtdfqLh4fgshYi71VLgtMTXv2igw8BdRxoYrf26dXdyCzcFwsXnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cwKPCiYSLYRgVnv3Xom9vSY5VTRB43JuHBxzoPQLqLc9d94j4RxyvSBuoaSbTWrD3Tbv6koveX8y24xFQJiaz4C",
  "key1": "4TwZ3Xdd9HZrPdsQhUFofWHDDHEjEFiRQqokQ9RGsfA5vPa3wW1KR1rXKQwE3nCPjLp35fiEgaguBRmY13b2GY6V",
  "key2": "3rSnKw53HgT37Afgnapm5Cp69cs5yvjahfd6iAuEJWtiSGTdGXzU8aeKY9sYkjZJXWw6YSWKrMm1mu25bRyjkCgX",
  "key3": "5DPj7eeF77Sugc8toVSkkErG7oFsov5SnT4kmjNHqM5tHcynrsM4m5K5zvGBAc6KVJCw5pTazgCkZEsZpWLkKwAb",
  "key4": "5XJ7tob7DXSmVczNGYiE5u5DiPYvczuNbBjb4Qvje7oT2QDavwoSSG8t8Wc7621K7WuRTJUFavHZjGYoYMdQ3p5s",
  "key5": "3cum8GwEUHXQbMHi9nWi6tcWzNtR1A53y7N5rc2gqHNkzUu8CHiBZ5WaWK798PfthDixcZZtExV4S5qmTjojSarG",
  "key6": "2TgVAkykUgFe33ZJD5GsZWcqbQro7CgFsdnMWWRuXEMpe2mtDa4ayeHeRLQsh3unjmLhD5tXie57BSQnSoUgnWhQ",
  "key7": "3iS3LkbH48yZMFuNrvsV23TcoiDgWY2LsErt8yc9reGXQWnKv7MMMogeetwfxfxaxQ2RpLEzDVaKBrUrZFDo8kL6",
  "key8": "2ixUbVdYhEhuMjGZxmhSp3RSmWSChaLRM1k2Hnug6JFst5CyGAb1PBHPhndhjX4Wr3Q5fJZkM1u1jVq5mV2G2FDa",
  "key9": "5H8PTU9uFmsvozdW15M1eMVSH1Fdxr6xjyfqot9QxwDiRSNfM9S7BfZBDA3yAiWc97SsMtT74vwkfaDNcUGvMWYg",
  "key10": "2XW4bXgXV5myLZwnuQQBVKjeLxnGjbCuVZuNWzgUhjB1jkbs5danQgL5JVqUZERbHoicvgfX6A1Uvgbk1vPvEeNb",
  "key11": "64TPyBhfSnyHgDTwXGZ99hyc71U7obTaQCKXggJMZMsRkBBQ1bnL31X7JZT8mtPzHp3AscsvTegCkh2fSNJiNYbC",
  "key12": "4NnNyCQekqCMeYbbsDYuQysw4VP2CGSYAFGS7cxXpbNSwqnkS3FcVJg2zDKoM8kG1sB6iBhdD8kDG61upqoc5VXM",
  "key13": "4TQnmLmggA9pcH1HLDrS8JmGzkd56JfG3TgcdZrMcNUvhuxrQ6p4TXcHcimh4MbVn255ZRTHatvEToWLpeZmvG3q",
  "key14": "5WsrXWVq6PPGArhyvVKAXwEzN1jsXAMvFEDtRXhsqG6paxrC5QqPepU5fzTQEqR8b83EEP2c9C4UeMwB9a9DYzyK",
  "key15": "4193qpTH4oTGQUSqLeLNKgjF2uAeymN174YfjXsFPr7VEJNSLaYXzxggSQPCpmjBmvGSSYC6zX1pQqr1De9g3cc8",
  "key16": "5uzsK1rfUrMNejVSBU5jXxZfySSwUEBntjbK9bN5nAGhhJGfh4Zm3JpD9AuVB4DLG5x5bTZr8rUwvdcN5C2eXoEU",
  "key17": "4X5GpwbnrRZNDbsqFPhq5npiJ2t4r78WRW6bWbaYzrshvRq9yQqzMVLdPqZtueBvbjiCfApykHU1rqD2p9y7t1wB",
  "key18": "4JGxJXNkpFJvGC5zc24tt8daBDfbcTi9PtoNLEtFsN7vR7CR4vrbNP5BHUgJeX6XZMPwi5kKpVtAeEeqQrdvai6q",
  "key19": "4wn81cwW9u4Nf6yRuhp7kXctVuwbGFvDvoaMFnw19GXmxkudV3msj99PJuExDCjJwdeoKcnso2F4oF16ifwbrwPd",
  "key20": "5L3MSGWYHbz8hsQEQFbswnkX8S6TJWwXEDB9qnRZg1mqY7a59rNqTvBwm3jqY31ovQXZTVrvb7uX7QsGenRak5pv",
  "key21": "mSmmen7hB5qkD63yjNQXXec6h59PFv4ZRHtoZwcr8yWsMxDs3z4ZUW29MUteazHM2vrSiGmhffcjCAg4BbpCDW9",
  "key22": "3cLoGYQ975wDrk7AZjKAGsHHC25WHGdaY8YvSVZZBuat6a8MMNHfwgEXhjqdrkmapYN4VPRu41Z8Ebw6ZeF7xDeF",
  "key23": "5LwZBcCaHey8hMgEUwS1P2soMo8vj3uUyhK5EZAECuujcNqawJUURNAHeXEHpsUcKg5jVBqbRxr6mW7Js5bYmEZX",
  "key24": "rHzenzkt4R4FY2uym4zjU1wp8q6ZET7eoLcitkLndzFT9tMRDRpjngPx1xNTUyCbb5NF7kU8gQxx3mWm2hH8Dwu",
  "key25": "58AVQfFRVHsVAME9dt8kxzaxa7J2n6piBsPqP3UQ7gwTvX8vLqowGGeXehT8rRkkfrvpQJcFUT1P8GsKHht6s4rt",
  "key26": "4w7heVxYtwf2LD6t6N9upfe2cYbC7SjRkW3jr6eG6QVFuCnT2AE2hddtefv2RPcMC2UqHppKng7KG9FeKtJMNCwT",
  "key27": "3FDyyzL9N9iKRbVBeArK9Zvidk2epc7sqoLecJc8bDcbH9BcB2goPdHznSt7GEcqJQBJXcGXsmH1DcrGhBrbH4Vi",
  "key28": "51Fr5aNCc3JNT1riDGyApWXRyc1uBesytrFELKrPrvc9a7W4QKT3GD4yVdzVZULo6uPdFFBbTEm8UtgLf8AsPSri",
  "key29": "5SdN1QF2eAwNq4Msf1kNMhY7sA8sR8EF4w43u34KjXa3giLW9SufWMcQRzfmoToGnUZq3FGHh88YSVTd58s6fjth",
  "key30": "5dW3zLmiZ9sLZLoM6wEtRLWwrL3DhPtkaQAELRsfZPYEadHNwbvpNtRQRRX2y3jpgokkgoFRucNAH8Codx8SZkAQ",
  "key31": "3V6z9SMPvJj1on5kRA1nqdkyUy7G4o35i8WyyDT1UgPLeLANAPRrBJ3PSDeYBrqmMUfXufzxRBx5opeyU1ADCVYc",
  "key32": "4e7jqo2xRKD8AQs2tZFHbzeiKLEHqw4wY2vMd143pnEgKJmUKeyFcJ7qfdQHn82KDy9Wt2Q1Jojm28xGkjJj7zij",
  "key33": "4wrFfF5AwcVJkL6dbKF8yt66yvj7SwxtzUZXmaEuV8bxQcwg3eMvYmWtGGXrbX9Q5f31jaNNWoGocQjboUpticYj",
  "key34": "2tCiUsdu3ocW9AXEDKuA6nKcDNJy4rCPnQU9JRQLGBbjAXeaD6KXbMP1EbTXozJvo1Ufa4h6Wk6sSam25USWvxRB",
  "key35": "5qj1yCVP9TBgZmcbR877EL69FsPCPZyUwRm5fjgV5xx7Pb6dnUNg2x6Ric9rSzitVSLsad38CvA7ZFfv8e5LDomw",
  "key36": "2DFggFZC9DNFiFMqG72fXPjfVE5r3QJj4aEyaoqd61rCrDAXFtfNXVxrgSk3k7Nzm2Hd9eWmrRikfpzFJKowyNVo",
  "key37": "62B5GsLDVNcXgTSa1XuMoDCJhFaJVMrSQqtTa6PQeYMwQ118oGXxdWhgtxpBQWThy7uDt6KnKmyLfHnMLEzinrAn",
  "key38": "3MP1DXp6yzCbQ43bokjbuQuvnC2JiYzsGfVpbH4SycuzgU4wWtc4fK76ggeYroApArQCSiLRbTao9dtSWEPU5AAq",
  "key39": "4dyS9U1pvFWpiKHZyyFFpToCe8AzXHTeHBwj6UGBBYjgPwDHekCK82MNkADv1ysLfhKdVELTS81YZ6Ra6VzyNjaw",
  "key40": "5gfHf3nHLFvEUWSYuGvUJ3yX4hkxPARvaLZNgeuf8icbmm7o9PRNiU2Eb15iFQMCADRkuf9f4ZHRcJ8hepUjz82A",
  "key41": "4q7rhnxjMCuAudNF3Eoz4mE5cnkfapsuG42x2G4uW568uNrVyxuWeg6p3NEcr7bGJGR1usrjX66YDRruXHApT6Bg",
  "key42": "4xkxvxV5mKkUq8Kpp7w5YmNEt2uLKTUTqAQowUiTEz44yQmK4bxqTLWMGxHfSi8X4fVaPuqciCheqYHdHeH1Uinv",
  "key43": "4VrD4gjH2hZmNXritapjmveuGCVWZ6vMeNSrwSAQcRCtzyiLdsWJGkgkmc4T7FArrgT7futHBtMfcwH7CZt2TQ2X",
  "key44": "ViNXGmtSW3WoQ9qtbkpLX1N49xaLv9GAX3XybT6FjmHZxua1WHbAkyqMPD7AeZnG4gyr3xEjJcU36x1BebL357i",
  "key45": "4ENiYT3ja15zVnh8auQmPWqpLwVkz2LPz8uHPz96Bx6syiV7zDjyv4575xoUGU1QaDZ9MxqtS4YvbyQkvTCJeL84",
  "key46": "4zXQQXzMDAnnD1GSb8jr9VnxmSgQ6zBc8VvBcCUyA6tNKN7yVprjkQ59Kfkp1LXpinNaqhX6sqxdh6Qm3U3tNrVR",
  "key47": "2wKUyLLcR2Eg49iYuDvd7ZD753YZ6U4PdvrUDovLS4YeYpu5BMTD9NyFx5b22win4bBHUiYzHb76PLDxNjhEw1zk",
  "key48": "cAzeujm2ngM4e3Dg4uPhKh2JbnEEppkQyWjJ1PS53d9E9rkkBZhWd89zRmfrrQrEHeuijLx5KbXGf8LcZGs85bp",
  "key49": "4DiA7oGN8z9JiwWGsEQoP4C84Xd6XNQ5aCJFRRjo57T1BHA6kwNBaNXHCmDsjzPav9a1pVFrSP2b55qAemtf8L1w"
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
