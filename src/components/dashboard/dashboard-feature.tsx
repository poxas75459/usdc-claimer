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
    "5k7jwShCxBbvF8yFNrbHGXrC83uZUjnhEFziN877XTwmg57VaSMz1t6SPsK8xpxnLanA2UtsFJRWa3NypJW5Q6NA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iddBXfUro3YmHmvDkc4tAHPaRfjuVJzZ3eobt85FKTuQXzPenFXyGzm3X9c5Crv7rwkdQ4LoreJYv7vCuinh7ke",
  "key1": "4ZJpu2eWZF6XsLzhiMiSh6csZKqb9sP9Q5sR8N93AfPPNfrWnMiMVWoTsExZ815fWybeRx8FzBMKKWPcVg3bNmoy",
  "key2": "2CvMKJwFUV86DbU7y56LT2EvvyRqDWR6Ag9udEu7sqLU8aXG5kjR7UW6YzNxnLZb2VAfDomm2sxwHZnXJ6QJiY3H",
  "key3": "61kBefJUhp8qYoRxhWm8FRb1KFNT9oin1sEwvDTaP84PUn3D2boWdHEcCa5DEyVZ4JSw6on1XZWzDU7X1sjbZVb3",
  "key4": "4Ctvn7BEayFQg7Ag8XR7zqGiqm3WJmQxEWHGYqtJWJEL14UkrTrcUxnKzQi1c4ubKGjLCReJfNzYnf47Dhc1RGTq",
  "key5": "2qqhdaeTh8bJCaDCSLVsxtg8e8kBcZPTxYM4BDEFdZ82nHPqT7KTAsm5rs82SaDBAWCjG2rpkyzpBE9zGbqA1HrW",
  "key6": "2CKhznN2MqgTReQhUj11BE5B3WaojkUiccxBUEAsWm1E3w1keSQXytG9QED4LJvTn1suHPYDoDuWELs7CsaMtBs7",
  "key7": "5RdiXXJxFvvJmTLava1gpprqsEo59SZyKyiH2fHX9zdgSkNWzkwYEMSnMX8JY3FRjDDDGCrfxpLe3ukQru89i9QD",
  "key8": "5h94FgXumM16WrisRou4SF7ivCwjscgtbb4WLbaxRuXHN8ocw3QJaUysdHgVRXQmUnK4sVqPADPJ3XxSyh9f9smF",
  "key9": "4mpsaQisPZJ9toeVdRnAymFkFqHoFYrEjEBJJbszxNRdJEQuLxrdSrjnNCQ6d547ivbQtnEwXD6q8tDCPeydRzGu",
  "key10": "3aVpvrxC4u6rL1JHuyUYpCthH3N2P9J9EmPra2vm6jcEmznkyX4cn1nXBC9hDq2wcyoRQoNQazsLMLRJP97kw9Mk",
  "key11": "4GQK4wBDprkXheD4FBYfDcrc5ftTCr6BYhfoTuD4r5W8QPtRzqrB1JEtEfNj3GcgwfECy8H7y3Z8p4QfkWohQr2u",
  "key12": "4bUouZgSbEPbrZLL1wMoDhwfBcpdn1KvMQFLVytpWpV6xYcHkBEZWnGuNvhmQgt2WrMUZA47HBeFqNpfJU6tzkQf",
  "key13": "3BSefxR4Bu5JTn6VErhEqgZdBjaCWi5etYTBaKRMjBDKQtuRTsKkvRgJPRQQW3So2Pno1knfm6c6SeTg392ncko5",
  "key14": "43dVxCw1R6YEe7aNB1PVLTDyTV1x1MxqwP3Dwdo8TGbDQr3S4TVvXbuRVFVqKwoxcwoYGWAqaaZhFP9BKJwf9meU",
  "key15": "3dhoMR3Jk1tPx7xvFwxP5ViCUdDY4XLnEieCCzqarcaYQfC5YZYp7b335FoRdBRDhgY5ux83e5bA9NZ8Dqjni7bf",
  "key16": "5Y69K1vPeMdDs2awyfXJsEHLW69dA3kVntophhShQW7d493Rcmp3LiWJYKXYsgak1NQNxQbcavXX6AEwEy6MD8N2",
  "key17": "3eJ68Xp94jhcwZNuPa8KfjtvBLribLWMBae5toBGrKwXYkZbGjCghK3xELAHyzLcwdfi1t6VwtjjipToKoZVGu5p",
  "key18": "2nP3Hg2Lz2M5ifzzUDdrMYwhhJmioN95ax2zaRLkZypkeKdvwhnhJu8dWh2kBLVCRpk8n1sLdQUFxShotE48vBYK",
  "key19": "2ryKN4PLsYvsCTUJjTCgedsPCCGc6jHn4HNTYKGSeihPVHYmtR12FLsiHARuhWVqGYRYXkS2DkhVFchunojabWZh",
  "key20": "4Vz3t9mXjXpNFyKaniWi5vzhBnYb34L7R4fxTdhURMAC7REW5KhvJ3KmAvw7vCpfBevfXV1GAoq4H28pxkXWqBjz",
  "key21": "s1TJkpfmzj8FNrfzeYCnSYEQp4D11CcAUHeoVShTupGtYARW5QW1mJLxCwTjWtuNu2fNGfmx2j6Unj9pJuqukXZ",
  "key22": "4KMBVMnNHAqJAsPd41jVu4hPXYXLt8MJgEyxGQtAxHcvm7iffvV1HijsmwJQmiDSCz91VghRbNwrWgUb5Z4RV1qQ",
  "key23": "4quXrd7wobKv9hJV5BWZBzWuFV9cxFuRZnLta7CLmxDPkUAdquvbjRaBNMcZU6npJHiLj87zJaEcDxTVqUUqVaPu",
  "key24": "4tEWdzz5FswSDPNyJoR1bwT2CmvCiQERj1cfxt11K7Xv9aSPzg7PXDAtJdJgc4CwCT1FRGCvpiVf388QkRj2HzKa",
  "key25": "9HQmrvVUHVaiWzurS3b1kM1AEbtXCqjZCd9nQxz5vz5wFEudn8QcCRDzmgRUbzUkS9LQeNE2AgzvrucALCEyKue",
  "key26": "3fPfvtdztsBFVbu6XaNuBoCnxGrxPeNBkmXeg4FYV2rfrR8sMRZCZM88YP7ixNdzdXvLzahhe4cqeNjsoWMc2fyw",
  "key27": "3tNjDwSrVgireR6K3jvLjwULktC4uukw2WPbAZBZUifKiK833FeFfs6C8Lyq7Scsge1x9cdr2we124A3NGfy5mM",
  "key28": "3PHDs3rYonYcKieVhSQiPomzLe6iLvZhouz8fg8pbdyWbqSYeXw3ZHRGaCmTfbwqGb1Q2FJFiei3U3YYoQoZYHsG",
  "key29": "4Z2JMd7AwbxJx8WL6DHdUiNutfVKLW1RMrvazKVEYNF4GkNDsgmvvQpcDjCCG4DJA7KtFu9Zca7GbLprXEgcmBdn",
  "key30": "5c5QV9NVfnSMMHd3moRPZ7TBa5VhRQooH6bc6Uh6zsgt7XTRofXEh7hA51ziqDUF7eGareqjPfW8qDPHw93iybDW",
  "key31": "45WojE6PPkm4xiGyxUcyLUYx31e6ouz9EGyDqvNpy8HwZYs2zmZi8YGPPzfViLzrycXTPSE63FNU9pJ9rV3avyTL",
  "key32": "2K3voeCg8fS24CNDtUxPiZzvNbNBh7g2ry1iY7ZVUdfCPVreTKM7sFEcfVApSrjVQJthibK9zKJmMskPc4RfQsW8",
  "key33": "6fErarSa89Jitj6vmLQwrnWCmiXVXfYhR92pLPewA8AApaBXkgb4vkgw4VDRm1aPbyG13cevY9zv4ALUBSeJ1sf",
  "key34": "p7oHEmkCSDsrAwNQTZKoVAqorooWpy9sfxi1F9NYgog1iYypFHRKnLS1NiYxAo2zx72UKkCT7Bi3winTPqPijLp",
  "key35": "4K7MboT6CCjtrXAjZuFTXq3U2tKyc6S662xdaFaYL9FmCKCMvTY4cv3pmRoGefQNb3JWcr1AP6BjMA2SuNBPEYW6",
  "key36": "3NAn7vrmbBx364BjCY6NDH14sPbfgjT3jzWqeGtLUSbRNkjd6xnZ5Cmw8YFXc4bckJtv9jNVwoRU2kpsEiVRWjXD",
  "key37": "593NSQVFHVbH9z5jcLG48uAR4Rnr51GCgJbwHPTKBboZvFyH1DxtM7utZMdajMibqSXDdnKSvTfFJCeMrTVydmAY",
  "key38": "LZBVZdEFeTVH7gfhpiGzhFDL6xc2hTjauTjG2e4qtNz2S3FzHWek8thKUhGYgbAoSRivbnhJWtQfNE5iZgwFTC8",
  "key39": "Er3zveQBsDXYPPrvaJQFurCH64ZTi7G9PLh5xXbpJL2cpH2BZexRxz66kxubByC46xQGPvqy7BZSF28mm3EEXRY",
  "key40": "65UFaHHZAqSR37MaFWuJiYWZzRbv98CmQpQCFU3LMkHL5PUKj67T1nww8dmXyyW4xLeHUnEB4qmzkKDJGy1CnMdT",
  "key41": "4GViWvzfEUCqrcLrQw4UEC9qngEWg7nQmsCnj1k4488k3AxuUgWjFjVFBcnFF7YEKXtPaWDqu6NETmvLK24YuP3k",
  "key42": "5JRVfD8q5b8ADf8rEPJUgicnRBjMxR98ppQ5dKxKYdZgptqfKBgH9bJVaj9sQXp2k4Ns8YBY1mE4MVJhRR6VSPhF",
  "key43": "3zrNN2AGYFu5d9iQdfGbeQtpgkoHFpUgxGoZrEnJes9wR64W8ZL5SbMb7ZS75vwyRqoHMCH3qchcNLyJBmmqC41p",
  "key44": "2aWYhVzaKg4b51uupaXS9RFNH8ZGF96dAEPzBPwE1z3c1piRX7ZmV9KywN98cjkYrTVwB4KtnSMzdd39qzwDdSzB",
  "key45": "5KkSSXBmxkPV8QdZjatzaY87CzxwCo4XFbvqmSSCj8YVDCYDCxiLM7evzFTnfYujmQ45xENZ9VcQCLaB1EMBwLAb",
  "key46": "29sMGCmz7Mrg1yF3b5qGwzaHCzwiFVijJLtMz8PnBH5HjskWxn4318Mj75NAYfKFu3QGao5HJY1xYRkkYacYpF1f",
  "key47": "2G5fvaxqqyU9HfZySQS1NEicrEeswucs8Axgs99mojFdDFHxrK7fc4ZRy5839KJpZfLejP7vA6sj6JpCdWwwfCaN",
  "key48": "4bEWe7Mm46awznVTLefE2DKEQhkztFHxPwMjyM9hvMBY7m9VfYT1cVj67eJbPqEWgJ7bK7ywAvPbQT5fZikMNxkP",
  "key49": "5BzdkrqoQbxMm5PEU3ZiEdRFEwmaWXhBMzaBchkGqdmf9K9bULBkJYmJ6cC9VgaUCa1JfQ8yxyGBzHq98BhBwwbY"
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
