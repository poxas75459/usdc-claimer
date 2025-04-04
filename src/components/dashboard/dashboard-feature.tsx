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
    "vuVAvEH3LtfpyBKoLk594TMAKPd4d9txfLFituoChK3AMk57VTzymWHVQvpGF5UNL4An9EnaBxfj2pGBDSx7T2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ghPhHL6RU9wD1xD6VkPdBstgHpZNN8zkuTSvG5NgCWGgimj8iYXw4bW8umgL4Bky3CVZnPbcnwK9rMpiyuLM2cy",
  "key1": "44DYbz9gF3SbB62X4pRUYGLwsm9iX3qkHSiAuBN378ybxvugdZoEVp2N5bj4kRoGHT2tGTHCGrhLGAFeuLQmskxD",
  "key2": "4xAotX5YLDNVE9qFWzKUb3n3dTK9NgHAnaZ35a114q45JrafBLvwig9g83vFUSeBBQJ3LjkvpvAcrgj4BVvm3GxB",
  "key3": "57zg2iPL4KMwdR6dmFFkTdvExmxEcsPLx6mDhS3LjE8phMu2sweT3aa5MWVFQQKUFWZS1rejAZieVtd3qhSPdjdB",
  "key4": "2yrX35RvRkTkYYsgb4kqDueWCzpwAF4P59RmzdqY5w5HdPfpXyeymkxpSxLFs7S5hFRKjqMP2QobMzbyazwgxGD5",
  "key5": "3qP98ZdKuv8NNi7MypSFbuFwnyiHZ82hZU5czwzYLUKYLTTeSSpWiqQNHJPc7noKhfcBycEQ98RBKDRjx1uemnps",
  "key6": "3KvMa8HoLi3UgDfH3nEEwo4qr36Ay7z6VeTidwFNFqb9gWegBjgYLZ9jh2wkR2yhmU3YjJQu4YVujmZqQ4jThoJb",
  "key7": "4BMZzu8vD7ZEhb5KHctmEK5Jw68ZnfmV32bDfFfm6GiQbfUFEuRsUAe1aLxYQN6yKpa6TNeYMYDAhHVJo2R3igfm",
  "key8": "271L3AykDKfVFAwiTKN3e5zdhdNydmKCKWYEebSuNjKuGXinYxjVDCtjCUNB8exwEtcZ6GeWxktpBMPYSbQZEUVX",
  "key9": "jAUTpbyW3riWXzKrEUhnVhHAcavX2Ci19HE2R49miDagqxy7ozYopwdgCH45daXFovC7jur7xQQCZDth4vNMQsH",
  "key10": "k4t2P16kigM5F8M5pqVjVqNBpusnZM36j1op93m3ZqcTfQLigG6yic2fRNkwsermotRVXbo5Gzr7eBGH9s2s6tt",
  "key11": "4iGxSLQda9vYeZoZbKNKEdxBDb5UmGrFG8jKfUdLyifKpvtU1dQifdhxVsRYLM1xDb9Xatu5ws4X3jZjzMBEnfrw",
  "key12": "26w6KRcYgCbNNympfzzo4K7bF6Hrx6arXkmeiTaLkiuyp6eou197knxNodey3kteDvv78Mq2L7FLjHfFwpfxxq5G",
  "key13": "4KcEw5W4Y9WdiG1x5Aa1tCSwoUrP4EGPFTV2BZ2vCKyDy4tsHD4V2DYw7uD5Mn4FwTSr2PT2qKuQ4GDXwR5T17rT",
  "key14": "3DKZnK1Q5JsNqBYaUNKhu2vDUf8RoATgC5hWK3djVEd2xoKUgANNPRYSEqECU3JYz1xLiV8B7j9xZeA7QzCprxCg",
  "key15": "3QwuKP8rTWtQWPCmAbcdFpGQs6gGciwSCj5e2LjMtM1FbEA9JRW6xDxTHwEo2pMjF2BunYGym8rbwDndGWnsedUU",
  "key16": "3rnmmSD1y9zgk3S1H9pvp8n18Rqq8jJNtmpD7J8imkQGuJPQowvDZEKWWfC34Hd8zz1Vp4F9Woecvj36qPVgtJGL",
  "key17": "5E1sL5TuG9nvmMoa1tcsyuwzhUUzSNvTD619ieCoyNtzwDfYEdp7jThEkGku9eidgFhjLtterNB7gTeJvPocJn5R",
  "key18": "32r1Uey9x8M2srdDTDQ5WsVAhU3GPC3TxACLQ54yn92ddgwi63gSAAV4FCwBBgjYdGtkPdv89oQvQfxYmDUqn6jG",
  "key19": "yU313muKnraADLAFwQJDN6mRHCQ7Q3hP1FtpJQDLLHh5APAwVKtMvXg59iQEkogrDBS4cGy7JuL3SZrFHRfqNhs",
  "key20": "4xS3bcbb12hcohLTdvqwjXccu936t1vHqgXJCuKWu5hgds9ze5UKryXw63FTztooRiysVFY1zgxJAK57ZzhhLdMZ",
  "key21": "2aZozYooEkt2MBiUBmVsgDzfTNhtfs6RvS1mdLCcnpf2z9q7rZs9UCKLD5TEyRHsggKETW2WnZnM9kDB9NPs5q42",
  "key22": "4adrFDmxQfj7RM86VLD8ndXEG5KG9svSDgaK9GM9yayAsFojg1DwS2Fqr7XAnKJhYPgh7hUGMoc9Wq5EyVjE2hNY",
  "key23": "2os3TCaKR2iNSPf3Emz6XzcTCSaQvEq1GHkUvxb3q4SL1mz2eNFWsnMZb5hzHqFchxnp8dSW2t2LWPTCSBNpifuf",
  "key24": "2zwFw3R7nCpDbFopEZf6iGSPvTqfJH9n3C9nkzHzpYinkavwHUcwHyg2MXSJVSCWKiPbv5kKXozaD7zpTrscViaf",
  "key25": "5XzSd5rMPwmQnJRfmtTtosbuVrfQgB4XnWQ7d6GeV8Ee6od6t4qr7cCsv64HsxgQ5vSQQTPFFaUoL1dm5fSoh2ee",
  "key26": "5TuQMSR7giSY5QfW5nMk5QjespcTwncpBr7qZ2chPj7onKiyqfRUbMSgEw8wJs6XQY1bC1JM799XGuP1Zq3Zyjqg",
  "key27": "4JqQYRd2SEoVuvtH2u5hCB5DHQd1grhz4uym2uzP9rdzwvYkr9fQbxuqQispfqYG5FWYHSnekvW15b1aRnv9zHxs",
  "key28": "XJFdZa5MPrZepyrExUC11Swd99qNGT48kX7Yriu6q9ojPjAffJpfH8eW91hoxHL9SkyEnNQRrMejjnp33BKm7So",
  "key29": "33Pq2jwR3YxCUyDVvY7FqeVkqpc3Kx36Sr2nX5saNh5hHjyzkxPs4Lwb4RNpm4YQZU7E99YcJgNYca95DLrimZuE",
  "key30": "5qayrkeG2LDqKFEZKYdUcy2Cj1e1TZ5KpwkybbUA8deLza9fCFmUDnUL1GWKPzjVkjEChiwsoJVNZ524QEXMJmoj",
  "key31": "3JZE6S8UJzGiaabePWuPhUHZtQfVoCbHh6LoRYp9wnxQUUmZvSR7Pgo4wcxkSqzuCS5CJU5x1cFQpgpzx6WZ2hny",
  "key32": "5HR18PqnVkPaTskzxqSg1tKzwf84fpZJgdLPZicdQ2F8kGLTViXwxEPdcfTnWmWCT5xRoZxKrV9mDNRcwSjP4LUE",
  "key33": "3bLJWQv637S5x9BnHSXJ5oPyJoXxBHJKGY9dnKFuQUhJxGwzCD3kZeRzuvEYz8TBczRPYDKs2oMhbxUUBq1jCngy",
  "key34": "5X32HYuEpgcjfYzCTHSm9h5BNQm4cwu66fLu8eykYBs2dXFeetd8C9LpU6RvDtzeCmwwNJjKzSoazMkruS1SRTKr"
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
