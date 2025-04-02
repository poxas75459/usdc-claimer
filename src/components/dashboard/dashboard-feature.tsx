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
    "3FPBEgTPahSNBFVFWXTAoZzxbZLAzjJnEoT8n17nDb3WFABcnxXpFRyeHkqZ3bTFhQYktukMnMpnKDb2NhUQe7sw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QrjwdDigqcxT96UoZxiPVnfuJrcTwYwkfzJvj94mbG5CK1t9dztTPhusHk3FiRY4kcDBtgShEkSyAc3MhaJ1MiN",
  "key1": "2A2VXoCxkVYCD1JssuY8oimqnQxa622htF92TVFr2LkcZu2EQZmzGgtjLhZ5wJaRkFX6fyob42hizfwSsxKc4H3e",
  "key2": "21C5yKDGRXUJnJv87YAA38uCcw8nzYuC2itLFjgZvKebPX2jhTEZLbfUpiF9byxUskkwCXNnTgCxxzrcoXQLAB2R",
  "key3": "3BrVE71xbUfUx3NEpZGXdwwDHFg2VqPxihA8VkA7ubxTDeeLzVVRJGVLK2HZKhkCNpoqCEwUXK7w3hUCEGcDF1Yh",
  "key4": "nD7i3PNDKyn3YVCwSuWF9SQgKU6TyzK4mEbKcTfcWwXbMuX69NMvB9X71gqepkNDkFQHYbYi2y65eAsNkd5tbBT",
  "key5": "xQCZc7FZCdabEdX4Vs4XDKTcaMNogiy6Q59g5F7pzr5uJtrCD5W7VuUhycsHJ8YomvVLURtWqJ4caLgPQoRGQTw",
  "key6": "4wVLqgoWdgkwZFWauUaA4NCUXHTEZsycmUwjmQEhaPBDVzGjcUTRC6od2jSy3GDTMZBmutrLUNMyhegmdVE8zj3e",
  "key7": "5QtwzxtKa82WQPjGpv3mcfFEqvYgoUNecxE1Lpoj2BL1JnJ9awd8EwZTEoX4sbhc9ELAj15BGg2i3xZ6yaPJ7CRH",
  "key8": "61YRZirxSm8bZwH1sfp8o4KcpWVhN4KFKceGxSwBTfJu34Mrz381izEoJTfwpXJyxZ8KR9JLRHFZdf3J1qXqZ6FM",
  "key9": "2F3x4D3uVWYqnneLKkK9gwDekfrJ6MjBA3BnhasendehKhsoJvC1UfyHqfU73oxJiUgSsy6J7mMYhxEgYYSMF6FB",
  "key10": "1mCHiJPRaxe5dN5Ynqk5AC7whtZMN1WTdYXBnY1iXg818eGgWQGRDVjQcdvKuEymcZYR5wexNsUao99JDPuVhue",
  "key11": "wAcuv3gfmqVtfyZKrCyieRky3AuYiv8RV8ycubGiK5oKzomAbgNVN3wa8pTk1MkKW9oaZ53owX6Uk12W5DWTz7M",
  "key12": "47MRTKWBoZcHxLn5PckbErZbrAdBbYmtZytrPvxegjRnpq3XMCnuAMQcaN55fQ5mhTrLwxio8HAwTmydaKwRGiVZ",
  "key13": "4f7qQ1rwUUWC3nvKYMHqf1hwp8j8LQDXurnNZFpLNpkYF9g6kiaKjEbMoP6kMKBVQxZMbtsQrA1B3DQs1ptpsa52",
  "key14": "3sWGWVMqPXeAVCVVa4HhYjhfUvPwc5BB3tEGwSLtc2jvHcDDzkfwT363gJVEP4fmAntujqQ4vGnTKnH9PPV2PQQd",
  "key15": "2XAtCwRRdy3rfotQyQgmUoh8KKSkBrQiBrwcVCXiNyLmW48YtxpVMeTNennZTCwg1uBrtsakiRRMuUpaF3RK4evV",
  "key16": "4Bz1ox6xDqxCJodA5e1wEbwQa22BUMpigQuPLJvMb1RndhPaFDgBNMB42jxiieQXAEMFa5RKv5BVrvVjfPmhikju",
  "key17": "3ChooL7f593j8kn5nH9PywJmCQ4ZvP2jqYB6kguqEFEiFM6aghfWT3MJAXLj4Ugs9zvEcQ8cchJxNRBKwWzD7Urd",
  "key18": "2EYL11wC8NHyr2yyhUFbtrxoAzYVhCvsnKBbLJ6LdSdqRsyjSFhMGuNiWy8Ha3SUa9aDsAWZGf43GaqaRHn6tsrd",
  "key19": "4zo7qgFSLcWmQYoAywHjjwwkDy1MqMTesaCFqTi59nbbPJwr9AdNj3VhksxsSdFA5zwuhf8XzZixrfuBeBxJVWKJ",
  "key20": "3JSjQAh9FGFHNvSWthphKCo1JE84yrAh8WgL5QbchZwzWC8s89rb4Xp6RuVHcs8AYdBBLYreoU8NDE31FmwLoacG",
  "key21": "3npxeKvJh2GZsVWS6mUAGVb99AjyE4GPbzkK3BwKUCwrZcVLWQFAk6rZxAN5P2i9kpNRu1kJtUBRkiq4E95tq5Yo",
  "key22": "5DuBgtDNfJf6n2zrpVtD19rVXHs6cYQZY3onS1P5YH2bfo8erfdwHuMmkZx8iScvC4euy7YqDWUKoFyoG34Ag9wy",
  "key23": "29Cq9SBbhXtMnYnAFEUTUytBwa73Fo4eejXev1trpyJbMZXGemMPjxuRUbFaggKzAD7oeEoz3ez9X8cm5cgFW89K",
  "key24": "3D4shPxAAYXVfdk4SiEftKH8BHQbKQyTNoALhEbdPZupee1Uj3fwZQRC1swUpkzDVNfo5equTu6HQsf94zHpAw5x",
  "key25": "36U5AXwd6N3MNnxH7VB1z8DtcSYtn87q3m6JsmDfu5xKYEzwrKtg9L2yPxVQrgiwXBFRKGSZdzfick2LjEc9RBGm",
  "key26": "5DvaK5ZmK5kfH8tRqrAR67yWYCfHoEbdACaxGoaM8QB1LpwDt4VUDsgUDqdMqxmLHYU1zFvPkoSoQRMAoshsgtAW",
  "key27": "2L3JQZ5xo4UrceFuBiumFFVCuKr1uLAETNdR7TG5959qg7VKjLjD6SVUucUM2UXoQootbGYKWCQUnh4f35ABvFnX",
  "key28": "3kv93J2YxFRV37hQQzzTsuV5ximC5xnPSxCkZ6qZdFPJCmMqbmFKJDKJZ7EEpR3GAfjExDSgaWLoSrfTV9ckPTzM",
  "key29": "48V83hLtrG8KebJSzt6As3NDXbhyaBBsr733dWERte8Jh8gLbFo5sy8PmTTRawFMm1vXUfeB4dBhYvzB94pVJZFw",
  "key30": "2ohr1aK69Xg8AStwHxsjZxBAHKd6TzmTmSizMbRwnDrqWs9ZEXaCFM6hS24XPxUG5qEwoMaKHFu8YEUpg2sSW82J",
  "key31": "2NNUJMPRJa5pny7t3z9hu3Tuwj88MjqU92J1ecWSqnVYCdoCJNVJ2n11JCTcEQ511SgdL2iSxxmD8Uc6GNaTypya",
  "key32": "5Sm59oSTtzD9smd6VcTvdgFXRfZZHCKVJCrVuUh71Dppfoc1me4T5K76dBHLyvchNPxmerZZRStPi8Q5D5y8mwSR",
  "key33": "2M8HPt8a24FMS2wZQiYKE6bj6rUm5QBHrdhqZw5pAwfT2fwytmyZDuYFVyKB1wEUy3KjqjDiv4LXSMvWia6Yj4QK",
  "key34": "4WENMjELQ9noNFEmwVbGgZL52eqB5kAZzzeo6Giihv3Cgp4qDLPVNHLSt7hxQkNMFgyBfm9LqQsnF2z8b4a4Dj36",
  "key35": "D9RBcv7kmZeHr56hkiLt9sVJU1PBp6CVbJTzKCKjCfj2qzpae2A3QaWwhquHm6TMRc87fE9jW8UkStf8iAuU5pe",
  "key36": "4ex5cYVnRjkM8ivei1cwzFwoGRwqHS9euu8GNbSH92NcecGYSD11R7XShiTHoxLJ1pJesxpa8fJLSbvejL5bCaDZ"
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
