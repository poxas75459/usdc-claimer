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
    "3FriGeqQhodgs55vtdri535tz9JYqqJAzmdADwXWuN5C9DV2J4cjojH4amFjFgMF3wGrUp7PH6jMZWcZhKd9cqCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54r95DHKXdBekdXy7BHYSexLH6FVEFiHZLkwYEPJ8DGxBao9dgbicVzD9GhnzVeLs1ZLDNG6rRExTfn4XB62pQuU",
  "key1": "3GhocpcFooBBA2xaDMFHEscAZbhA5xcryE9x5qGNpGXy1vtpix4GUy74tE4VDkNq8xokFyP2f8DSa4bkFuWnoPtz",
  "key2": "hXh9ooJT8DVEzSKmBCwip3TxFNtvifwCeENtkpEX8aDfbvgQxQNerM9HQCP6d3j4cQ3XdFcKwg957xn8fzS3Vz9",
  "key3": "3AJgbjezoLXWN7tBwYfTHKvN1mUCZvB3SrZGj1fRXZg4dB9g2TRhjzqhgaogP6xfo9ZPc81N6utfFKAtk913c7NG",
  "key4": "b9Ekp1W3p7FPBRdvoTTXnAp9HiumJCCejB6hhM9Z7a6fA3rN59RUan5UmgEKhc3XDnZeLTWfZGLMVW2b8DU1SSh",
  "key5": "5WxQMCEREYeDkzTYRHKJVMXjzH333KbHV8JfLszecTG44KNjKtGkbs2dWiCLKdYsLadctpfKrY1ARVJb3Jpoa84m",
  "key6": "5BhvqdZs3aVyGdqGLN2kEQv1rwsAEMciLQLmQfDzHvXE9AAAsrWGhuRcP1oQae9QLLvDAFNvkJBQK726qWeQZah4",
  "key7": "5zkkfzyEy2N3kaMGrcL87SXcNLLHbUWiXv3Jindmg6SMatGLnzuKTkvibksi9garBRbYYr6qe9YUyn4ms4E9e47C",
  "key8": "2PS1nBxyq7VjSvcqNcQnGAybjnzvsUFutuxDrURAT6NVMSTZDV48NGjQWVeWsk1Vpg531jYPJigQergtxmAVtPby",
  "key9": "4Y1Vi1MFGGvYYcHBU3mBMKnFQ7LHeBtU9Y5fC6s6mW5j1W8PLFpqKeaan9wD3gLdtGwJVb2dk7Wnw6wcwuR7zdyR",
  "key10": "3vqVEUBkrvkU7V7CtzVXRDDzSHCbbhdYUkdTSguBYRz2RsiUCTKttWeWS8CzxGAaw9rofFmUinpd6iMoRb7vx1NL",
  "key11": "4qMTF34wXQ9UuzkJxrVeXWsehy8Gz6YPS18yrkm7Fk2uehWSM2mU4adGxxTbNs1CTa34HcALX8k4h2nthBjbba7R",
  "key12": "4evH6zNVjUNmkKLdTWqKjzLjmmmnqT2h7HiFLoYp5ZcQq4opdFJC2GRWpdVdPYwBLDzN4BEkYk4fHJNh2pbbBgzz",
  "key13": "2xjV8yyBjuYwFfDaSFgq6msZsaBvfqsB4L2Gu8zFAY9Ghae2kpPq2pVdcHbpghGLefXL8gNjm5rr8uUYUEGcxibb",
  "key14": "FaRWQJHdKGzvzo4xoVHMqkcPfcQn47aHoszFyhY6NtGjVPhztvb4VVRwdmPZYGii6G4XWFcK3pxJ23rZi7zekPH",
  "key15": "3U1iLRBuKRPQsiVXZDRk4Kb2kqKxeEKaDjPizA5jcJUnsyadvbkAKem3nZH2PU9dpsVYq5jHi3gzmf5XjTBHEsJF",
  "key16": "3WKob6RaaDKuotpssVTFi9ejugAToQcggwCEYc2Qh29oipVoFzeGNH62SP2GjoN8gX7yfbxrVsnAeYpfWZ8DBZWE",
  "key17": "345stwdWu1iPVnqbuueXmsqs3AHsyF2X4LuskCZK6D6HFs1GxYzwT6d3gQXKQdJm9TwKwYkEXw6yLZxSLw4PVDRE",
  "key18": "5jszYPhTWGXvw6sg1dUHGAG3LYZw2FvwjqZ25C48dMv9puBzdqH4CQdEuhpXnVcxvJqsTdV5VC5rK4DEcjbjZZeB",
  "key19": "3vYV4KgFFQN4vWdf7qbREQFkybAG1wLFvu3WEwUrhY96X8Bv99XUVP6TRktRPg5KFWkbt6uhP6K9zGPL6WNtWSNE",
  "key20": "pfseTmfoy5smfNwb8f1719493NXQaWHL4UFx9zTpWVWzhL742Wyo71tF85F4yEhxz88cGbGrc1YG31sAWjxc5ix",
  "key21": "2S1u8iBUHNsG9GLfFJwfC3gsrMWv1cyZdZVe7XK4nptxAnbBi4kLztas59rBvvfMHeQqspAWSRHaPdsqzpp29Qcy",
  "key22": "YrApQu7uG4vjd7y9FAqkkTnuDzstSZr4Bkv8CKvqoteqntW2umsUPFfu5w3YJnw2iwP1K2wPA5koVi8xPjBLY3u",
  "key23": "hrqZt2z3msTyh4KC9QP3bStffP61PSoyj3F1XW6bjn9gtkGgSndRyJ8optujPuZ8AdzbQNGcUe2GX21bfiiP9sc",
  "key24": "5oMmp7LUfDnBDVusxd1rBvCM8MnheHiuMvyxnzitEtNTyKExXGqobaXjuifM7kGKhwLhnADf2EZo6aDTELa2b2WP",
  "key25": "yRjNfByoTzhYs8SR59ZYb7vjre7uhuj6pjLpsGQiUHbtJgWBDGst8FXJ8SYd9wdjnyhFvR9SnqG2n3V2U1UwykG",
  "key26": "3b5PoBLSwYNuDwcA8QBdPpANizL4T7JnLA95PY3D36y2oWY9gVSZyxQoGhnNMzoYnN1999qjR9ioW3mGuxPxsJQx",
  "key27": "2HD2E87oDMG5XfEw8UcDMzL9J4rKS7m2UBJzbMadWra4jMDdGxYge2RHtWy5gvQUKoC8RfKaN3dWsqVQvAv8dDKs",
  "key28": "42LcjqQnpXimL7qbd3TSe39zimpiWPYpQQXWXgNHLjhZ6VRqZNcyFADnyCwnVaLKECbb5KciF8P4B34sdbAvbMJv",
  "key29": "2jB6dNSRXUa4sYmGuFmhSi9A4eMCgaLsdPnD4xRswYHpwtfEXd649VYtLbTXnXqG4MbxE6vjrQNaJff7A9DifvRT",
  "key30": "5TbqiXmvaR6X4NHc9EEiM8K9k7Ed8KRY924Jakx2JNwfKdgvfxa31DrKenbTgm6wJT3c5uo6NAubNoaikQkuKfTm",
  "key31": "5CDmUKeCtR58oaEie979jgvc4Qp1x1adRoB6gH3gfVqDPVjxqh24gq3daquNgemt3VBSc5wjk6viodR97Q5N2YWH",
  "key32": "3gFAugE7EpqgddUg6rcnGS49EqigW4syysCYbAoxxZ5qDKLCGjoD1LCy21cjFDubw7FPscyb126yaDqpv2VJBwUn",
  "key33": "3wPgAEQzaCgDAH7Kkt6NRBqsBs6PmhbTibW5DJkcYN3d6pbzTUNuhGyFefZpc2LHoUTRSu8TboyuL3gBs4N3YBio",
  "key34": "GXmagzUZqAnWbM5hxA4BWV7Z36amyKy8Zp1sLphr6zogG6UiKPm23vzYsap1nq1FNNCp5BkVhDsF5D7DPEwXpUL",
  "key35": "7w4wVKscS2gb2S1u52EiGYCjUCHf5QH2eJFvZitcq16KDGTF6T5gkxgAZZ7hQXRjBZG7vUbNqQDs25hQeEqALEs",
  "key36": "5j13Uc1F9TDeNX5mVymYFyAeCLYbvpCPrjYn5GnkmhctWtpRU35ynv7td2mDF1g84h8YWQNE3nMEeHEHoroN3nRH",
  "key37": "U4Tm4GbM75XN8wwaU5WT8wozNhd4xwuhK76QAMfsnuK3GnazKnrHQNVwpAmkcLe1UZm7L2QcrHEcwg2kPCg22gA",
  "key38": "2HJLHYNWSP6YtUK56hikYkaFuPYZXBrdwJXM6zHLCAsv6nwhz11iJLtvrK2y4ZbMZspurSdiPC4wPKWLRYpijNrQ",
  "key39": "48ibMQby7m8hwZrT4vT3venXBVt87ABx5antH7aYSsHk5dE8Vo7V6xURx4JwSwwC4kurx3Y6t4ttVxV9JWpnsJKD",
  "key40": "29qXaPvk2MrakPfwBC4jc8eBdQGkHGE8CeyGX9v7VJFq7PdJK6QsBWpBdZZ2D4eWg24hzqHwtX5Tb8PCvPYUyW83",
  "key41": "25hnxyZaMVfKJtt3gnsz2Ek9hmmtEW1hoVxdHEptWckJxN3zkEtEKykBKyypX7virKL26Mh2GLo65pZmaYwdgSqi",
  "key42": "goSmToNmbpNCCTc8rHE8AMTi7bRaxtXPN2fNr3iAZnW3Aaco1Q3CDiX1n3mLg2rpkFnAa1DB3xemvisrTYoDBiv",
  "key43": "2Wnkam3T7TJhxf7mLN99xhyKssocNzimnbuHkSeaJEDSwgiEftNeQXjjuZq4H6oQVCRWedL33MZeoCk5qsxPJuhK",
  "key44": "2fJsBgqyY5X6fggxuFsy5eGHgGBVcPHUekZGqQ8ZH8q81iPp27CDhoKND5wwgZdJt4JAgZmfh5nh9U2xQcVYc8Yi",
  "key45": "4AsbEBg1STm9joDVnx8Sk2i2SiCtLJon2bBNDxG58d7asEtgSbjorfb3hKEwFzqfy1TUD1QqmR9rm4KdutyAqWGj",
  "key46": "4FodxJVWCzA8DjUT8qMsf1kfH9nbCsDRyXBPYNKQKtxYJrnprExmiq3bciAaAwL5whTER6wTGLoAAaWqmhHNoy3k",
  "key47": "5eWgnYbhRHoPGR1bHJS7kTkHWGRGmK4uJnLbayxHrn2Sa8DrLcGrB2egXL852bp3ubKtourLNMbiWMGvZnZwVQsF"
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
