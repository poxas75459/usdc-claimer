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
    "21q2ycExxhPDwgKnZgTYm712ZTZm86mug6f6ys5hw5EudNxoMar51kqBhAN7nHAxFUJYDEFD3nHQVzXkidr3JKnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53T8Zz8UAk7QDjUTH8Xohnx5HtD5ohjUFVEp1hvzS14RSAG2PbhEqybDsx6rUpZcHQNA3xdeZqFc4RVhymcrJzzG",
  "key1": "5shLNcmUaCwVDHgHfrv5n5m2dLbbSTmUs6qVKvFmsE4YTe2TTGt3oL66Ak6vtcfLEVzWJ3GTBLZCDSbX1AGSmCzq",
  "key2": "5Rs7uHc76UdLxYEfA58aXqNwt42QAfF5abdnKas1PiBeHyBumfDyWiQ1mW6WDE5snT1Z8kKcMFJp3MCNMsowNfDS",
  "key3": "5jBeCMKxy9xUXjfTLPhzXkkwaY5ryPYyU5ZeVsyy2FPEPg322vy6HRirjUnVvnjewM5UxfhU3ViVZRPeizebbqkN",
  "key4": "61bKh9UMbe64ZPVA122N68xgiPPSqWYBS8nZgb7xKcnG2nphFt8wLaC9G8nCJwnk9fKhhASJLaa9gnaeBrSETYVZ",
  "key5": "JbwrKxAdVGNSW7ewuPF9bVsiTNajpCfQcjgxzWPNUmHTQ9dtQHmDFU82X7NUEgSHKCjBYYydcSKT7y4hdqGZtbV",
  "key6": "HyDu2mt17g5tJbLVH3CCNXHYE9iXfxCGPLhsJ8ZzS7pajcjvgZHQ4PwsjXkhtUsNZdsZXZeuMRRMFFVb9aE5xYx",
  "key7": "4dzK4yANcjxKPjLhQkcCUcedKfRjE8vGi6sKeL9aJyTDDE52gQUXSLKUxkpAQwkVqfE31qyt1yvqAs31jrKx42NA",
  "key8": "3uwGV1CGKPAi65jEhagVafesMb1LbmEpyAdsBpeMdhJKwTRTWzftHnHbN6wg7PZEvRMz6TVsXgFaCBzGBQVot3y7",
  "key9": "5RT9pAvRcRdNso9HoHqBoQJQsyqGTxZFKprDTJdkgNvHmtx1pnpqZAtnug3rU2wzGpEowLhEpt7UzwiDBtVMx7eo",
  "key10": "rXmxXyB6thfmVkNHWywkghVpvfBmuM8JXtcUe9tHWjwQL8qvUyrP6bThQV1z47mW2KFrpWa6S6n6gwmcVX8qkWV",
  "key11": "4mczL6SK8zNKuKa4k2grTFub7kbzNFtv3RUiBtkvNjqceHoGSTuzesvFcSA1u4cZSW6wgUwAn3dNr377NitMWHRj",
  "key12": "49FAQYXjfUxwWEEAjXafBd8SpyM9kj1XmcUPQoWtVNyrHkPUX1AgkMAHeqDVSUwaJSoFWzdCRzLnGnSWFL2aG2fU",
  "key13": "3qHbqG7U5L5g5d5YQ1GN8ZBYopQriyMtumdov3G1qpdtL9dbV6HHWwykKLX9amEaVsMGD33hD4tRVoHptDScZv7D",
  "key14": "5GNJpbMr7Ekd843qPWpSDv8tNCLrio1RQSL6VzhLYpjfEJncfXkdMz8nhfJpGBtrM1R9pYFPXgk1kmmeudF2UpCQ",
  "key15": "33RUZJZYEfDTgFfX12orhHAnH76Np4Tr23AESVccX9DreyVrU8XmF8C8gzS2xjDTb5mdc39e9ZLhK66Pd3SghdyA",
  "key16": "3JmR6kRkvRHSenYSoAadjzHB2resmwGkm47vBF3TD8SySskV5NepaZvJRBnQsZQQwFz5LRMQApV2AehmeLA6Xm9w",
  "key17": "3DkoDmvtc6UTcHDNkv2YxD7nTzqGevB3y5TfgfetGz648CQwtugHxWbV3EHwVH6F3R1EKP7NUZq5K67i8f3puNCR",
  "key18": "4d4pKHxF3BgFipfqc89wBprog5xjsaUkfVpB4Vpc8hsjUxxLmXgY7L3b1qbvXSg9XLHaG1rdzn9NhMjdL515y1QP",
  "key19": "2mN9QWVZ3U39KJVbp84sjpoHKo8tcubADW6hR1urV2Sn7PN7DZRhZk1BWnJkyHYtk7KBkhamzNrCjQiAUDnbQrDf",
  "key20": "413BkQzBo9RLzXSELE7CjHrYe12MrNk5XkPpmEckH7M2BmJCjzzK62psWt6x13YBTNtnnoA5pxTTbsZZZ7FRVrVz",
  "key21": "3EpXekZT2Wth1KQJCwFzN2UHGfFUZgMwuuoaKDVPn8qqfLiHdKvKVJUymyxoY87aXsvqfV1q16CcYFRpFapEoArT",
  "key22": "3cisLwDyrkRMyXewCpx9vYAu3pCXjpHSw8MW91Mx1pGgcEvUCE3cF7PNAnFygESPWygjWQQLCAcGeky1Lyipg8ox",
  "key23": "3aqKa2ktqxjCfqjim93suNccXe7uxADTGmsaof8UD4kSw8v5ELdABQmd2xxiq4FoUkLZcoLBn2somH6bm7UfwRWm",
  "key24": "5pH4EQAy8dS8Khgj8F7PU9P8hQAcmJTo5QYzkv6khvAodfo8qWxuhMqV7PSbRkStCs4KSjRMfU3GtDy6wdaodxgd",
  "key25": "yGbBx75EgLx7nokUZuQRnAtNhw2vDDCPWnqBXg9foMPcd5Bzhz5rHL2wKaEnMxf63Ws4CFXPjeTZNdGj9jxF2fC",
  "key26": "5c2qLtAct3jfuV2Vt7oWkDSWnRDoVkxrAfsH7xm8brQW7i3KHeqmi75dPWV9xN296E9ssuR9gYdgiWVHgYvL4MJZ",
  "key27": "4t6gTESSaPLTh4PGAZfkKHf2o8qsyyFk7uBFs5XS7UhfvgczR37U2cfvvEh6vt8yYZ4Fj1mmC5Co6hwrimyHLbxG",
  "key28": "3mivdUCPuGwDjHZD1uPBpPA8cgQX4u2xUzdYzzfx4a9DwENCHomnpDwExGJZJBEiZG1cz8fdoFeNokzt3QfvdG4y",
  "key29": "5KHjJ8Qgy39GQkX8QBejjRpv9rXXfkTJ5KGUDPEhU9Q9wXianErj59Z9rKxBgJsVR3D13iws22ytdZNUW2svn3iL",
  "key30": "21iGztT3CpAcCThMCag73M3ZugBYF5J8XXfzJj8CFBbTH3rU1cXQucBu7ZMTbT7ZkBJ7ucE4XNbs8ycW2ZGLGM4z",
  "key31": "2Nh7N9pQRWYh43fwRmMPNezX3pbZKio5hTEk8cPJjWs7s9bQx4YYLm2ruWK6xjq9aFmxLsWLdGqvmCjzxstZdWF",
  "key32": "63wGpUStdqL4graSQEsACP1tHH9DUr3dpeSyvhTjw4rZDKYNh6UPwoKTUs3NXH6EcqZN6huqQtMdVWEoMwc6JjpL",
  "key33": "e8tCRovPrcrreYHqiVH5uaxLv7J8ryki6W8Gaa4XuxiLJHbYpHqMqo9e5YBcx4XVCqCx8Gj4kfXHA9xCCeXa5xe",
  "key34": "5RUW63VaA3wZTJPCaNMjj4kGiRmfEmAJ7Q775UHa9b6VVNpBFh9qZqK46qk1NG4sWf8EvmUp1T4bv5srQj4wHy6X",
  "key35": "59r2tNjwEfSKEL6UpXN8hviNZqb9594M5HyM2hbL1pDgao386eN87AUozfxQJ4yEVGGhYS2kWBX5Pxvxp5hJUWQC",
  "key36": "5XGqt1Fva7QxN6pXs4wj6pcid9Su1JumJp7gV7ThwKnPLprDuMCezWQE2roRv9o7FHdS6NwJboHPtfm34mz65NRy",
  "key37": "3ofGYbFYpCgCzps8utCEHcqudPhkUwjLD9gHHVNQ6PhF4Vj9P5LbGk16xVtbTn3L8b6KsvJtH9Qvwr2U2DyBkX7P",
  "key38": "2PAHaSeTYH1YDTTEvLe8CgnEbyQ53Uvj6GGmYKCqXuf391pd7qiPY4HAotdyUnD2sQAwyjrvWr764ikbDW6VUJhb",
  "key39": "3ezDnCv5siDkKEywpPWrF8rsTbP9LjUcBrWqn7XC1PyUdmiNsutwksDmrzogeAS2AYN6hpjZ5cR3K1KVP7WUzJE3"
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
