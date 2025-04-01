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
    "3wYVPw2bM3F7j9CFXf36F8BDFk6AGK7h57aWv4fNQKYcEZEGkU4wcvJuVCgm9idzQfe9UNCC5S4Azn3o5xTpYnXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YZopymvmbKqPeM9ibDoGovgCyvh2MzuusJ6P9HsEWZwvuANdypHzRriRafQshDmP8uTdrrMcS1TfL3siL1x15hQ",
  "key1": "5VQuZoic5185GRf7725LF1aH3ix9ruW6CaLtuPMAAz4R36DnkZFpgQhHgACX6kz92hnqeHbbUTwUjnkLShnwygbR",
  "key2": "3qrqBayJpWPD4WUmox99VnamRjZPDAzXewD8t2F2Nj2aRZFbrtdYa5NNefRKbMYnqtt4WrZrLKy7KBErBWdRp6YL",
  "key3": "jX8TNXRLqSNYecaJUBf8Fvd2J2aX3VdpWsgW8fj17xe9inveZv69Q1EsnNi546H369cUthHpj2xJK5MYaTN6wD2",
  "key4": "Tf3V6aJE15RZ8cYGZFBWgi1Udh91eega9kmjTgPoPWh1q6NekDn2nJ2gM7PifX6KJw5uuRePt73baPnR5xpWWBC",
  "key5": "4D7fbdv6osTdwQfx7xrUmNR4bq77HTvkUdNRqhYBFbCLn5YdX2LnYdxsKyeESS1Q9D4oZybyCyNEBkLuUWKWukCt",
  "key6": "C3cbDMUm74uUiduaVUWuY1G5bEWWQnKv8oZxJBtbuem4SMX1kCck44y3wJvBW7mabY5CAooGqckxwxYbrFnmn9f",
  "key7": "24zVPW7NwekEA5g9LMmAEmgWdhZMUi1PstoHu7LNoZvDqxcvCpvx1pspUBV3jXN83EPKsADxYbXvnde6dQkkPz6z",
  "key8": "U9DTHbHjVxFMqVf2GjBJMDN9ro8v9LhnQAXoLfaEh31JA586k6roXvn3dG63tAarTcbt3tSQ1ZyT9SziWsw4x3B",
  "key9": "ryKcDgLrtBzxEmAiBesCw962CgrQYENYBa3awYChzqoAWuSio6YhDzjLnyqjqiaC6PZsLvM9jxjZaKqDMtxbfCd",
  "key10": "2pSh2SuSQFSyePsY91hkGYeweBZPf16xb3rJmdy3Hax4JFo9fWNTWUbccDRHFpRpgzTbQfkSLs1Tc5JEZXqKFCZS",
  "key11": "2WFNNF1uANAatGdUVmpMp5d5bpMiAro4LsME7F2fdPbDJ3cQ2FLjuz7Nd7ZtkjD4HHZcyuQV5RwLnjWhsTkJh3xc",
  "key12": "rPMwX2Mag7GCjJGBNZkbokXeG5m6T7D9U1v7PRbBmHLGynjvrdDCcupanTZpjBFjrUfeEHfwHW9kwDmzbEPs3Jw",
  "key13": "3eTi2P7AbATqKzcRh5LAwS2HTZCB3aMDUDPxQt3UKc7TmEtup7LJvMDzXENWg5E6ZZarMo7UcS7TuasKr3PC91ww",
  "key14": "3uBkxYtPqoun2gSmx852YTPn6WEsiXYHxb21Y54GoHZKKHffEWRGF4V6cZEcKYAZSaSiPTFmuyR3k1Z42U9Zjcru",
  "key15": "3u9iT26Rh7UpzG5YzUJHpkcgzWBfzt42cekSYh7E3G3j4XzJGZNag7Mt72x8pZWMk9rC4pk2x9pxeTLWy2FAj9FH",
  "key16": "3LpaTAt28U3ebP59sk14sq3fYYnnKeyH9HpUfMP7rRLKotyiewhnSqmcJQhiDffURuAL82Xvh7tpww4sBbdBxUYM",
  "key17": "2vRNTvAqZMhwBY1mtTjbi56P7GBqEEYmXDKAj8vmptqX1LqFg2U6faHag6M8h4FQohyyC1GqLoiusL1ntHZ4K8KW",
  "key18": "FFg38qeKZ3E5ruEzR6YgxQsCMb51aSwZ2MbuaZMfYcknuSzcR71fUY5p6H14dCiaoppskPZvaEtQvhg9o7vLZbQ",
  "key19": "6636yqwMnsD3qNfeKtcZFmKcwX548PEG52kUQKAJqVS9asG6RQhnZxtvUhXdRMJE2H63ZHmet89RZEtwyrDvFtrK",
  "key20": "3nteSR4vi7wHoSf9j9rpYDT892Mp32et8g1Y1722BgtCz2zXZ5dm8TxUVQ9M3GueoWb4Eynt3jwcbuK9xDdNyEwK",
  "key21": "4tWsVuRXUMuujm9TK1oR442m3yeuGf97kNRF1hCcfwyLpU45kde3QXkhKG2Mjn6xDKq7fSGK9JeJWqzvAZDKNAXf",
  "key22": "2E6rPA7JUAnwLxuUrxDJGZzNSWwg4eyMFhEkuGz8ULxhbd1pWa8kQ4yTuY1HBsgbnJYjVLcXjwjJTGp1j3K16W8V",
  "key23": "4Uq1pbT7fub7chAZWyJpLZyEGA1eYkVEZuZxGjJCXQ5JTjZJjywSwNmiBbE8cx8J9dhkoP8mtvWUP2YntyzXKmF9",
  "key24": "CnuQD3VEyvJZz7j1HQrM4whJ3Ajp5mG64HgBoKhyfXgq2cLfu1HAYU97EhXMVXKeDgHrXrhJ2aH2URWvebPPzYP",
  "key25": "3bs4GrE68PSa7jPk2Xee5U3M6qEH1tNRPJxTr9xXVTkR34gFQef5zJWxknVJwtGtJiasNBqbc4a7bUZXrwuJcYqS",
  "key26": "3AvYHpBfqbaJhz3Yph5JzYEVKJ2xuym3FeZbGqk6hRdukHywVYG7VqCE5LudpjEKDZo46uHroZPPrS3JnfZWxzf7",
  "key27": "4fan28iNKcEPphKVCNuPbCE3qg5vZz9akPsVbDVffaLbRVm3rwGEM92rFdZSjAQL2JzaydBTbHR3cLpqJefZHG4Q",
  "key28": "3Ud6ssBoU4BG1jK6WvkrUc94quPaq21gHJSg9WX6cVd6na7vSkLcyYPoHZrv3B6rhATqf27uaujupie7xgJtXSh",
  "key29": "4KE66rWWZG4F32eHqtEb1DL9xP6oYqyajhQ5cpTpjTfZbsAPeddnD3NUPvuVgSwheL6J78JiMZ4Abg7zXd53vnSN",
  "key30": "5xagcLKEPyorQfpiJbHTna5imtZEz2e44uLCgLYg4PjchA7x4YxfEBDKLxzq81m3Y3ee7ki5SDQHbUTpCVsr5rcB",
  "key31": "54HcHUvjFL9WYfC3myn1ZZod69oPNuRuwsNnkpNxENuCyps94144GGMgoXRppQzQoZd3KHtmASRh5ZwpaEfmT1ky",
  "key32": "2KZqQHcbDnq14S37t4PyCpfScjwJfU2oPetELgqCpV7fQd1wuic1mJDinmVjStFZkE9vpC4ASwE8cTR8JJuqcfZR"
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
