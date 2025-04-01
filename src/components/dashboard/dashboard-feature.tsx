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
    "4vGMBP2qwewcmqo8tbvBPN3isKvbt3JTWboQ8jzXoap16SZKw9F45yZ3i3YmSzgbXhvq3AvB4peQdF6r5xjkPrhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oBwVe8gYTGvxH4dzyfyAAW9q2U387Pi3223CSZ1MrXqesapdtVgStEQu7JApsAJuY2wrC8B1oUUehHxj7AV3kwZ",
  "key1": "2QvQDyjtSgFrEFT8aTAs1HmSkuLUeM87wu9ucaFAfcRGJnf4Fn3DYuZXcDF8upt3nfp3b5KN5yWsgYReyWYyiyhz",
  "key2": "2DU8DTuzHi3bRKE4ig7FPPcQbr3M6t3LXj4WFwR8EZdvpc4E9WCj9uH9qwYwhrK9LWA5J2WcufrzahLwCvk3x31w",
  "key3": "238gdNQCRCKxWT3t3tDCnikhzixZPkrVk3mjzP1dHAnBCQ3iBaLBzZjJUETHEqwiN3HvUWEFqRNemikyB5nx51Su",
  "key4": "3MMMfcz6X754m9UyPSrXDfgQXg9dU2raLvQyAguWbfEBeMwe8YsEdSqpK47urVqjkgvqRcZ7NkAbw5uacA7XQwYp",
  "key5": "43PBtYB1FQxz9ERKJJkAQkAuesVEzexRf8qFF4m9m3qAytNPsFnqzXcKRf24NKVtu5EAth9qBkxVS7gdyHaR3hgi",
  "key6": "3jB3fVhRJWmZtAXLG7ZGb6E1XNHcE37fWrifokXHUBQrEzznKn1ZVBox8BhWX3QEzuMEhvfLBbVPhtRgEkqS3Squ",
  "key7": "JXsy3CxJt6kJ6LDNgvqxtN28Ccq8WxKyaGWERBAivKWyz8i6DpPBVa6EnZUCFqYtMNVrvFqrm4y8qunC3Ug8Ewp",
  "key8": "4BbePeDVWotdKPz1CC6yik9ojN8FZuKcErxBCxYcVGmFpYsfNKRCx9A7NZWn17CrDAopX3NYqSErDq1U5CUfRert",
  "key9": "vQ2K6GW5gTtCk56PECwvyMge5jh8NsnJFdLAa186Phy2xcVwWoF7uDZi8hWfTxjozNShKAXFQL6YHpSsm3RrHwt",
  "key10": "2DGduRoghuPDnAcUhBr6FYdiSFQ3JbQAj5uYmiD2vX6Dqd3dpgpTUphU82NMzaJVTkdyL37LxA2tJkD6mv1pMkea",
  "key11": "4okhsah1CkfCGRYdjm2V3SvvXNcYE9ML5uR5HF1qqdJz75ZpSNUrkuLa9VMWZJfuucuaULwXJxvkQkGDk94GMTGY",
  "key12": "2DwXwj4PjheV2QuTVKY16dqRmAnrH1PCf5uJc9SU9dNPjx84BKf71w1vNL5CUj7xK2Cs2LMHvbnmbEH3DbgfFCer",
  "key13": "5yUughJYQSRif8EAy1Md6pPoot5QhDk7XjEQF7KZdUXTf3BE9bUDSR9NFSYeZbX68NzLVAQ5au3eVwF7RkgXAUhK",
  "key14": "4H6AmEjagWjKqmAZWKPPsRA161SUvMHuyNnc6cex27e9G888QiQvhDvfQdgS7x33xcfVVVWF13RjcbNotnNApqDC",
  "key15": "2ux45b3sCu1BjHJtBf2jZEWmASycbwh2tXWuWrfb13VoKPNMadvJHgbYBophkP5HMe9nFXNurvNJmtU4u1fqmh5N",
  "key16": "HX85nbJFCTCAreW8XC8dqWCs7Xj39TyYWnLTk9wZBTTae3KpK5VrKoUVnn2cX2q3d4Jetr7x9PN6gYyv6LkZs6A",
  "key17": "627spEuABVZ3MAYgPygc9zsGfgBAc9Msmvh9PKzK6eXKr7u6HfNBB1jBS5yWrjTr64UXbejr89FqGM4ZHCPyNS7",
  "key18": "T1Ev7gGBNz9dVK4a5UnvmXJRhids2DNMpjJoGYMtddSHNScRXnw2vYSdh5LTNqUR7MDLX1yM6roJY9DSdVYAXjD",
  "key19": "4rjA3K5CGWex5y6JZR4skbs3oA9a5SFKuJZsPppxdJekTcoTtreECBRY1thig97nPqb2wMvFd1S47SeMhDLkUfb1",
  "key20": "3amfmSZGNPpDwiYsXjm2iM7zDZmDFfDLzoZjCxpQKxpXJgDQZRKcUbEwptKz9VFa1bAMYW6CBxE9nFMhkH9PgKTc",
  "key21": "2ygYcFdsQDxktQE9FxDM6M3ZRq23Xf5AnMDwhECWjGMMsj7hDNJsQWCCinCSEsCGirKcmJTWWBf8U6MLDbVw7Kyr",
  "key22": "3Yi1HAj9e1cWMAx7NTt9VAozrrLXywsxZ9roFZNaNREzHMWF47ZxHTTtAtKi8zyeU2ojrwCpjrbAQBLhNwuqJw7h",
  "key23": "2DFwg7JTHpaaYWFekywikFMJRetagemrw789ybjo5FyYjyK4Y9kAqAALVQUZ2DWoagKJYHFKfKYgK4cuE3E4wNtS",
  "key24": "2Xbnh7EyyGf2UAH5QYztFZQXtnzuawcuK8JhToQ2NFkKLJafRuK5b8JfUJtdvCubc73mpVu1Tv4t329syExupJMV",
  "key25": "3fYsdimnT1Da8H14mzx39Vs5CnSxpAZ9eeoa2yK8GpPoXRvjxTpL5t5LUHFwXHLzZp4Fh5xWFYdjcu42Gc6G5mXc",
  "key26": "3YsYfxCKqGnGtAKgohCRgp1E5fC9tTcxCnZdAXaajqS4HLimsQFXbEtcJ7fCHPgY8UVoF5jGw7pL6GrCx1W88WKL",
  "key27": "4fe5Rn1LrkqEz8oGiL3TQRCgmWh9fx3jWU9ykbPLzHtBnos6XHfmNB12kSCBg1yCk1NP2rerNgN3YJ6aq9ToNFS7",
  "key28": "3V7TeCuhbdmBiRMtEDUnoZbUD6CeCHNoJrEXneGonv7KsB8zpfYu64yRQzfMjPXCQHtutBc9VBZQB1cmuZw1h1N9",
  "key29": "5j9ki6fgx23gWcUuyjbLwAKuBRCeMxjirAPh69dyjDtoavLCU1BWux3NJpoc7siANwGzQ88tX3qvBMqP7KL5GCkb",
  "key30": "2eTk9GKLtg9ZmbugjsQ7fa7TXWDQRnjtHbs5Leg7nLTwKy93ANWXYt9gNysLtiXTRgvX3vcsDffJEsxWMe6UHZx8",
  "key31": "4k1pKaNZ8bsMaxmjRYhSqyYR7SMbK7W6Cin7daCy8czqQYuvd4v36TTAkSBtZJkDnK2AXyv1qkn6E9zvjTSXUhur",
  "key32": "3Li5L389Bh53zwzt3oX8C8Kt7SbMszMMoJCMwQugnumChTe5zRBtfCN6bUtYroHDfkB8TJyPdhCypg7GPt2bKZNu",
  "key33": "48JgDS3xZARmkKkBuL7N9M9L2xnW2WvK2uz6rKDdV6i4e7MwQK7uTS51sxMSpTTgnJBdmGMUUFU4gjENPEDdGXTF",
  "key34": "2gLi2XrnHfCoM5i56zQvhNXV9YQpgkZDVsdDsdsqmGKiBDtgHQewFkwjJauLxueGSQM87s1LyLcWKWY9xYPWLuGj",
  "key35": "3jjG8YksHhsjXvThDw8bQ3GWDwWsfZ4dnP352YRqMARR8eQedY7mCeCXwR9W6weVEpSCsWa6gkJYq31fUFiBgz7R",
  "key36": "2DSPPXYy6T2oMH1aJeyqit3pvdMeEyApHaryCic6Ps8GGpWzVpyHVZfkaWC9WaCGi1p3ceuzLxMncysDXRhhRHbc",
  "key37": "4b6gPEvnhLMdoYtywhZiFCbG5CHtGPTShPGsGaHLMjJoivpwod8vBMjjXu7Wkrn67rKNVH951DZPJ4SXGezkcaNW",
  "key38": "2tCbwuXB2Lbs3HAYSwEAFbAvyU4ho94Y1EViFhQZduVv2byvPT7SqH5YdksiNiAnfm4AgYR1b5GwKyP9nGkSciwb",
  "key39": "52nQ95rSFw1HUCE3EkLgX4NEwSoLF9TzLhndDKEdSjp7XHvQZPu5gaWXumvEs6VpanWZi9ieunyDGApUesyVF85p",
  "key40": "vFj7m3D4bS9NnL7CsWYPHoxYMFt7bxLNgv6o6vRruECLA2JDUg6CYpHBt4DYpRzyuNqBvy7fiYg1mdF8cq2ePup",
  "key41": "63aiCWUpi6tDGgQiCEyugKqcDtNn6LrdHxcyngbyGsoSYiuAxWNkTFrM15AZ3ohk4MHc9fZhX9XabJtm8eoYQhHc",
  "key42": "45URpQ627icnXwnvqTMJHgyxLorkkBD37cK1bRRmR8fYmmfeFyjhkKEWvpmhqfoMzgiiHWqhHKdBHFTPsMg2bfVX",
  "key43": "436jHe9aWnoUSrTJYNEsBLHXNSsnVTbkeztiZBUbHuzTeDBk3Fzy38pKrVJ5u6FeJYjnGvDKUc1EfXNroMqsrsrg",
  "key44": "5JfzUMrKPgYE2BYW98jpKCnqVzURav1DHEf2CpWFHt9XK5oEo2TnPyg53Ay4Y3bLKvHwrgsgLS3V4yKteEGi8bHH"
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
