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
    "sakQgtTJyC5nMp4UrWm5awVQgSg1hwphPMWvnaUB6Az5sLmqbhdhHgAcscynWYRhwQ2kcpdQkW41DUc25CdJC71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qzqewAzh4R2cAFFCLV69FErso4y3s5s9CAn1A5nHCrLNp6fFkrocLxwEA7ARMsExAhSWX5bMKv5qEiuT9EfJPpt",
  "key1": "4qVk3VNJY4XhMKNw3xYj9ERvoL1HqmSiwVkPmdCyaqiD93C1oDD5Xj6MPFZH9o7nK9PVzXRy6jE8uFqN3qoKimsd",
  "key2": "9KvoX7Cv7tC4UAaRvTeuMpHyajpkFD3erkNPY326q18EdE7rSi7Q9tEF7M38LYtc7V9nWdiKstLbcLz78J7aP3c",
  "key3": "g5WjYSXYQbnknvQBXvkWKBr6HiBJxfGhPaUkuaDJscHUPYLSnwGYRTAtzgFdGFfj1xZ8VrA2yfkqAzuSaE8AMrE",
  "key4": "3rWk7S3gNS7sEswHYFa2TeH87ZCHvQD8q42UiezhRqtRUFGzyrTY9feAq4Ej88pGwcZBF4SLCav5kZrDpv9Hi6Hn",
  "key5": "5ugfUspaU97pmzbYQUGMT5a8RrhpFtmUincmAiKq1M7tWDPPmQFV9jT9Crkpne9MVik4yB1HRercsFYHBfLm4EQk",
  "key6": "5MtuXYCWWFSXDTHsazyYEHjBVKnwzum8bXuTFRScHYhqTNnYXZhki9ffR4Gmm45sQPkXczTZxhRD1VifgboF228p",
  "key7": "4e699fAffCbrbjvXx8xcxbmLAvBffnpTJdrE1aJbSqrpDA4VwXLV9G97RKEVf6UU96Rw7sAsFsE3r4ZQb24q5uox",
  "key8": "3GwWcMxE7V5XC9pWEDJghYFsXebP314NZeUun8ayhhAy1Sdoawuuce8NMa21bj5CtYnZU3macLN9foRKDMdar1Nz",
  "key9": "3fMhwa17rd4pUeRsDfTdwqVPcCwkYC3Wbit7t5azsrmRXDB71DiXrqdS3rE5jY11fBa7PEBbmoqX1HRX1f7qF8b7",
  "key10": "AdVpRpsREhBAhms9z1F86rZNyhV4e6SMrToLCQLXAGZzhL8899sb6YrWedu1UH91xb7zxoBhvJHYzvM7Yrxh7dx",
  "key11": "3WMcDDwW7eJQ5PfXBzW1HiXVa39wT6PsU4bSKL8WExinTSqcWkrNF9u9DjqHwHaMivG9HZXniUokfB25ksSYKKqQ",
  "key12": "4eKiujcjYe1aMY4uhRMwzVA6qLyS3UuokoJNCV9kv5cuNv7wTAz9noRvvFDiqEe83Mi9REptZtHSVvx44xLs97oa",
  "key13": "V1Sty5NHm4CXd79gQ6kWxmt1XsKgC8sdqSdf8wDSWxjiaUMFUFeX89UuwJst8pE8VjzdssfjMHoH2MHPYt6RALV",
  "key14": "2ZbKKaPxhvsocq1ispwKx394JWVhfTTFoQexvDsKrHEKnQfghgrcq6PcvyQMCJSBmwDBcE4fPLKTER5dLYXFhk6",
  "key15": "5EdUHRok8PPBVFpiVieuQoy8qsTuafYDzLzXC4BqFrLZbQtdKwfNzkT6TYNz1tGErMpjWh2gGDbirFNkbGzxTD4S",
  "key16": "4jqYaxhDnoF9o5movXsJsNf4dKiZJQHzgibb6P6uqb4oZCWeMnLXW1q2Lsnf2Kv5YwpP52LHURDw7hrerb9cBh5f",
  "key17": "K7wLPHvyrzFW8gfV9ufaxVz9hdPwXx9TkfWNziiwJquyQkPJRyVyegULMn9cVQeHbBE2XwKM7SzAuawrUXP8cj1",
  "key18": "5sqGQK1J1U8q3sJpe5BtzT8dUXs5jjWXZxbq1ePqvpGE7WZfiZmYwhzQMWE8Fy5QaQtdvG23gQZqKTG3eyjseCSj",
  "key19": "Fi9Jqt3ZJyfkaUdkwgMzzgrVWx4LWKGRrFD6KPFtH3rQYU5pg1RJyHjyKoHPmj7HxTUpES4MRHwcjYDmzHtvJE6",
  "key20": "4XSA3ZDsRx3op7bo9u847eLUaMLScfRZfmhSyavYHdJkm425FVypK2isuCnMP86QaAhG6YNfNsVziSEKusoupyoA",
  "key21": "EwK2qDd3T1gMCNLew51Mw4BFg1s3whYmGJzVCP1A9HNk9VevAxApXeMzyzfq1pWeurbMmX7UxSSbrRP7NAGqQ59",
  "key22": "4dYh3APmNeQDT2DmrTa329nStZnHw8KTww49NkkX2PFX55A5d3fmiiB8YVSvivJ1CCNeGdxWnm2fA9feJPnuNdS",
  "key23": "V5939WrfRGxw8ydcfMZycHZfEhqyMypY4QnwTzgBLejT7qFU1MHfWQpNfiDzmoyY9yDm7e8BMUQCdRkKPyVgRkP",
  "key24": "4sAi73sSBnEsseuJa8FvvBBXrgbBQw1eRJv9hk6kuXTMoxiv1Wny6JpgWNEjgB1FZ61BZKtWmit8mUSQrgyybShJ",
  "key25": "oL4HKcYsY2CowjctaDQpdHotxiqi1thLJMsrib5oAPbDqWH4SJp1yQBzpid9MJbDe7NhXGS7WXBxMdyU7MYP4hC",
  "key26": "58a4m9VGcC2cKxiq6Et3F29Rvsj1NfFavP2YKk8wVyyRb4J7cMCrYnLF3dHnmHgDwZ6GEyGGUvmJvwem8s9KyWQP",
  "key27": "2X41vxQRXFRBVcD6JeesqoDKpkrvjExcVFJ7fmm5hbHPGnNbsrhdWTCaWxyeN6Wqe9vBZLZkKF3mGqv1E47vZKBv",
  "key28": "359phgWRoYPaqwKPUEHR6q8tStuoZzUW5dxLUPpK83jqhv3dLkbF5QCs2RsFqnNugo3LmFMbYPoCAqEAydtfXJ5M",
  "key29": "nPxDDgMb8SmVkvqirqnxqeynrtQqMTyE7uYhHvK4rxBsmVXk7vz96y9qaaSG6ySAVm31fmTEzKwjnjg4EqkNNub",
  "key30": "3wMpv6upxufWLAk2r7uKmmXVMxXJdSXEurEyAYjg4NGT13X9qPKvHk5mzVKuq8QyPSdHA2DR9WAPppDUTJM5fhBv",
  "key31": "35GVXwwZoQzAvYtZJZQGQRc9omcwnejX4oXNpMDxRHbSfLXPbeMAAxKfSadM7VP4ywzN2C5qdro9MWVEzHaBMB3L",
  "key32": "2LP6HRHVrQAcLe6WMjnsYukHPrtfM31N8VEURmHsgFqcBcNU65dNCToxpPtoB3Sun5E68vZ1edGgN2MSXwhNJTT9",
  "key33": "4RX2wqZQL341hNxXWHxzhFUQdd1nSucWA1RUYRUtBMyBn3s3iLDsArA4hhxm6dMs4qM8mcNK8quee9jVbsDyCoqX",
  "key34": "2KhvZtkGqjyE7vZWQ6M3nYthKekEi1HVAUSeN9JfkHTt74qLr6Q3hjn6N1o1HPNnLZqgBijbNxxVKr4LFb5agmur",
  "key35": "3NDe2JXbdGu2T8ZZZimrXeFLavHeq5NMv4fdY5MAbCYPpH9FYZR19QQMjyhcFxFk6wrcELm9W5jKu3Yw16XE7VfB",
  "key36": "3LFvFdC48xMhnrnBSUhnejdNJTHYvjxh3YNUVt6nnwGA5DwfU36ZFrBNfaXj2ix1ZZdCsZjFK8ee6GZhpbT95zJn",
  "key37": "4DAoDtxe4mwi2mK5tTqZwjGWHdYs4VGGegTZyYaTyyPSMrdi8SwbBVHEXCHsMdRujySTQX1CXVUW4NrSvDu5ShE8",
  "key38": "5FNcHDKK8uske8HhS8Zu2igQyRB35GXH6RkLA3pdpCZto9QkqU5GYwCr2iC5SSSzNE6WZ9CmrZRCzUMD2F7uFo38",
  "key39": "tN4icMEJQRHoYY7z3usxtKZrF7UwbXp53xS3MVoia7LhX5p9A9BJU46yAVEjq3UPJDhFWAiKmEs6P5rs6ZwqJfn",
  "key40": "5v59iM7b5cHUqpt3u2DLYDBxQJuQKFPGF4XC3o8NkFvyUedPz2TdQUzD9JQ1akP8QJSWCwk3KEP2dVJWwYshHGW",
  "key41": "7F7vzQ7bj61iT3SWKW3FkUa7HTZtjBfMbLzxQZmJbn6qtfVyW5G2aUhsRgQr5dzMxuQxvhLtBVzkyUDmFUeT6rZ"
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
