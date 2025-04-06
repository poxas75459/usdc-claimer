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
    "5NGKcZ484py8TgnvhamwJpXgCZnMrDVaBkUoeHFiw5pJThHLLqwYigasQAEukNH3tn4xDYS6gLoKnQ5RZLGsyEXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UnxXP3UmggMPdPrJDvKs28mG8NhAtF7GivkF968wfWQXhmH1KYnAjcKkHFxzvb5s4ntcWi8ponD7ipVURwDKLHM",
  "key1": "2SRADRSY8T8MmfHJdLWf68YeibJRTjUB2bTg5jPoFFuBN96QQsaLivZSrQYXhr9HjnyxeRCXBcukMbw9Cqs9H5hS",
  "key2": "2xGnRWUjsZbaXM1ADbnuJxKkirZaKkSh25RucABBvWaqYwoUK3hyZi1fF4izrykhAas8KrsfMBDu2bNDSV7NCzNG",
  "key3": "431aeZH4w6MQTXNV5DBcPvcaHbj9ZtjuJUf1ieKrhT8eaDxhdyske5JDEJHQxyE5aw7tuECUC6SeMrw8Hrx2zTNK",
  "key4": "2VfTsoS3UEBNQHsYHN6YFBmiPZCwuYUinAkRSuZc1DwLvvnXnLGfM6y6AfE7HonjzWjw6YbooRMMm5yYPBu4GVKY",
  "key5": "5pDE1HoJ7qGRbUjXqqXerK6x3JmqXMb4H3i9P3gpH3NButSYYEWDn8hjv5YLwaiLVKQX4EYcJt8J33141PAGNXsy",
  "key6": "CdmNe7EE8asPDVPrSFjDAjwkFQVYPSMb9BqKdrKoNERkdGXdspzy3XXqzQpM1WaNP7HwY38pxj2hKfQ6HT3KGYb",
  "key7": "4SYGAHG9NrLKW6uqcadRtFVqEoRYrTCzUXci2jSvTRmZcbBcCWCrV1sJ1Bn1AaFZrAW8BssFJiifSXXGJ5zCManh",
  "key8": "5pxWfhaq2LDUJdcNW7n1GWdYD31k5ErSgtN6cpk6pmB9gHBn4UidhxHzGaAFvqQsUtkWHTiH2HvsNVYZYHcMoBpE",
  "key9": "vySPqDaaXCb959ERzVxpnzH4oR9ezgcebKgfW4iZzsACJZV9SGcRSENSceVaAm6CVPHr8iYxHgYw9GX3Yu3BG6J",
  "key10": "5H413DqVEARy14dq32rXx9EFR7RbZ1vjVUGfseyt4HkspnzhEehbpcjVXBP6fPMnVFbvSz1CLiwEzm6hKTgADEqT",
  "key11": "yskwpAx9sTHpsZNhqk5iK6N6xB4PgnxytobvSrgcztEVwfcsjrejKBJYmG49WwnVwR8Q7kdMJBWojFchRdhciNa",
  "key12": "3JxhxKS7TMbX9rEYVcHwMhNb5VmmBcAZCcGWtZpkzCt6YLJgJeU5hNLgrqPsybVghL1yYiVPHHMmEkJwJgdTnJny",
  "key13": "3m8TyMqvTc11hCMzYyu4RYXcfmQSFVgJZY4yVKCN9iQv6EhmB1yCBTccNXArc6pBFuK8kRVFMs8vgh1kteA1u7za",
  "key14": "46xgtyiH41smSdLBq9UXLLHue6E7QebK5aVcqPtkae8PV3ZH9oNQUGKqemYPaZkkz8ezVvhLVtcNfctg9cYssDUq",
  "key15": "5qfcfEBCcTjLrejEfRShEF2yixW3XXN4gtAriUbZkk6FWRxdnvYWBGU4f1dFxoYs3YLEEHwE8L68taNYwBozKtnZ",
  "key16": "2MQQLxn3FpG3LcaLYNMGoHCoKuP2AFMSZgCK2CCHjoYEEeneMF9Xc5v4zUtBwX7gYCgJDjWDezecLkWKjZghe45P",
  "key17": "4isEkmbWNuD9yVQRbsjnzFA9gco1uZm75kUQm17XSmWKXTZW3qZ4nZiFXNR4MHHEuXNXdibbEBe7V1N7prUWJEGs",
  "key18": "2gb8xwaxVxxZzwvPDJC7CFAgC6ZHngZeTHxoxxqpRkqFvgxeTAVknTyQSKRyfi32Zed2n4uGQnzUXtZa4ymG3jBB",
  "key19": "8p4D7L9WWUbTkV3whmehbhuDcduq9WBeVBnSuT2A7xCnUvY89bAgzBnPQJyLSevKuPBH8nV6G2VdQRGi9JfrWYG",
  "key20": "3HrDbrVRY5C4PPg74xkJb9BUTKnwe2CFxzKcY2sV73BHSo5R88i9732rieX2yQfgtnRMdCNTAErJsgURTCNhAFV9",
  "key21": "33ncqNp78Fqfbgb5E5mSUX6JVLwhk4uCumjjEWAKDyvpJYSW8DrKDLgcNWFRErfUpwD4snbQ7x8KhVi7VritG4kD",
  "key22": "5YUiqmTq4YXwoGxapLo1kVPBJSbmwob8K476MqKXLoefJsCnLgke4cWPSmLP3qyqYHaXKh23hswnCnYZWUkVDR6c",
  "key23": "5ZfRJ3iZSrbRv6gcBMqhtGKh657KzXM4FBtpHmY7Svaq3867g8ztyJVpiiKzDaVxKCuvR3LNiqFGfL5sdbWMSm1W",
  "key24": "u5JxKDE8sRdP85Ve1cUpBA2txmu1oENYhLM6J3YZBTrXCESQd5kM9m8EQA16C9BChPvoaMYbMhnLBTLp5EnR3VC",
  "key25": "3EG3b5oFhcrY3i7g3tF6VCXFCUkc9C1k1bFUZmixe8iP7Ajfi3jad1gHHuhV45PVmDmL6dig9DJpQQFcSDQyomm8",
  "key26": "34d3HQRtkfXg1XvfWx8zaVcGGoUbg8PH5u33CB2xatYJZVZCrSnhXo1Ze5iYvXb6H5xgA1A5LvpQYr1fVWbz6T7s",
  "key27": "24mssV6nAaZjwsATMVkuVJj5B1Fjmd6VYSxEUG6TnzbfA2BY4QeSGPiwijxGiYKAfAu67CZXYgy1rZRZFiJA2gdW",
  "key28": "3oLRqd6FbM6pZSyXnAQ4Fy53qzF3mTRooxZsrYQQ1oinGEdXPGiNnfJZJ9FxJs1EgzhinfRnZ87Qk5Fy9J3rkARh",
  "key29": "S1VdA2p1TraWrJiw42ffrDVQxs3zfYAUfz9UmgyzJrbbJnWayz9Lwh3jMR9F2QH1E8fbJLPWua1NY5sCQZoPG9D"
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
