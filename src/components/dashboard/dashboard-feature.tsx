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
    "5JAabsBMa4LHvg3QhrVVNF56NhHzyfWEvm1ResS2CYthMktiNBA6kJuenzFWqDJ2GQrwYx3zXMrHKcbu9ynqJSCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X1T8hBpVoCt3Nrw1MsVcC8noAcpJxASBnyakTumBbXJx1fVoaak2jFeYSCkMyiFWRjeNnwCemFWFZTGbditBNhu",
  "key1": "4uTKD2u2CqiyfGE3oNX1NqLfMpcuNEmvc5avyw5WYhPzYDTciugDDQu7BPwEEoiq3RMAyeusQzK5wXRWJT6Rzv7V",
  "key2": "37swvrHMcUB4YuASEZFm8MM7WznWExRYMwBRLCQ8vwGCfBSmRvKUYEu8hFYctsguDym8jybB2wF78NixuRHXmX5h",
  "key3": "2xNe6QXpXVCgH2JMbjwQiaEnGBPJtsaxUVXMErVVHmaprWkwNsU7ByGF8g2SDPwoL5n7StoCayoaPrHyv1ogoZss",
  "key4": "4WTFwSFGgo4SQAf4WeP2r4Ymf2FZNobvdwA4Dav2eizxE7miiiMCLkawFuLSmVgV9iRnNL4fJLoYZy2JSKTp9xgr",
  "key5": "4JfjGzsE5cuBHVu8Vpqsrob8geocErQASVc1sG3rEZQHyCU9CGHE73TvkUbUWxZhjNsGXSszGMdr9Ts1XKNGCewH",
  "key6": "QuAWCRz4QVhyNzJsXmBHtfmBgsfxxxTMvxuBs8XmruU9pEb5egsFNTFqWz8tGFwvgRFvnUPZWcqKESxuju5uFZk",
  "key7": "4x3kXpdcJGLfe9oitcSvELeRCnEMfbtJCGErAwag4CZtacFiuBwz4sB4Uhkp6xWe5H2yKPttr73hUuCrPcaNaQae",
  "key8": "3pQ1uAq1jamLE8MJPp9tg3W1YZsQP8M6GqJ7qfCUYpsqu2w7SzoZxNpmd9vx9f6DMkJCETiBRJyaFpBPDfzeib2C",
  "key9": "2XVBbb7Sazr8tzVGBvKb3jkdiX9g4vDeDX6yv8p8PnViHQpANHazjfRF8EkMvRJj6LE8kMxsYAHUUoVzgwPwxG37",
  "key10": "51yptSaQ7Hg9noNtQbJtyTZkG8u91REvF7MTjbcPHKiLvnpBr8drCjjGCrT4vJKza65JpsznCWQc1dqMy7VhqbiK",
  "key11": "V2comozRycEa2BkynpdL5BNnJaRzdjynh6CU21BJLoaRQrXGnG4q9fpAHY777YvjQBumTvsMojjkKK1dCdS7cEK",
  "key12": "3FwuYJscioM31TPMxn8MxK6tQziJNS7n9szcUnCv3YiDhBNqM8xQQP715yHaHxyyT3ujoQ72NTkJMhBG4ktsPGD",
  "key13": "5jXCfhsLZf8FCHFKo4rbjiucKjnr36ath5xhnq7HWuCGY3poGJscgSFTB18pYPxkVX7vSibND8w8n1qC1bfMjg6r",
  "key14": "4yHWLgf9aVp6SwJAnR5oBVeym56xqrdonTeXP8SjBqAENf976wpkWMWNKkh1GCXh1ZTcWeNiJC5CL3qWJF7QkRWN",
  "key15": "4zdqs5o2aeLTMtW92rFfiyu5e4S6xbnstofNQFrc3W94oHNGc36n4vf5WM5vamAj93u32oFA4s5tZKyMRprFbwCH",
  "key16": "44CZmBC5TzAqzJfpw6dZbwijNLdzR56y66XTr5JNPZDWk8d56KMsEVYYaEBauRcHqtyPkpmNSiSdZnoR9TDC6swe",
  "key17": "5iUvPC5qnfabXBSB1z4QVBugEwzSBKqfauk2EYMi5nDRgqdQxNfefA6Z5D9m22evpj2YQ36XykRh1XWZLSMDJQiy",
  "key18": "5pFoMEpR1sR3o4m8oHxCE5tAUhwuxoWqJYciWDK7981bUAjnv4GfSrAnPaB75qrg3pVSFa37PgFjHSMM5myFnGr6",
  "key19": "2ThA2vEzsZVPEHKZNCYAD32LM6KP8iZRnn73AQV2UNfuFQn9qzYivrCthKT9mVWU3c6wHMHyvjwD1eQyMQFLrEQn",
  "key20": "r9wMJptMqVbb8RKfDAgtodNupTJCdYzyeYnhE86rkLmcbHeG9QAGKbLdbD1m4BZ7oc54WeHxXzb8yivfrrr1nT3",
  "key21": "BF9qoLYzfaCXF7xxyGdNXGtQ5tV9LvSRSBBEtWET3YPFBdyYDcoTW79QADaiVJnnER1Potrb5Qzgivj2WXypGa2",
  "key22": "4sJQANtBERxik2YemfzdWWx17HURZZErWzBxgwvdTScK3Mo7JSwwNzeUfXjMPkMEaJfMGu753ZS8HPkR6iyNCJFX",
  "key23": "46pZj134GFAtuXoF53PcMTX6USwqWfiHDcm1ZbQ2VzAzCBwuXPpdqhMC7nERhz2AJbtMAbZDVqTUsSDBHKpPsBCm",
  "key24": "5642SXYrErHd9HLbz5SCzhxm6uqRNwUHLAbJo69kMENxvfqJowmwGP2TQVfQsEvEGbX1J8d7ZgKbUSb5cXz6mNTd",
  "key25": "2WSB8PyBH3aoPa9fU8PGUYbe1VVAbhzFYbfpjhYWv6QHG2bZsBxS9b316RK2fkXn3Ei1FDQg9FDmc88ph8FFnVph",
  "key26": "3LUvFTV89NYduanyEgFyfQ9fwwUiLmA3Yvd4GkFaVs5zz5y6ZAH6B41gKwNJurziNeDTzYYZYtWX3CMmkxVB5wqj",
  "key27": "D8tkeZD31NpVnL8akewFQiw4QQ72T7ZjSmwZvTn4qhGc8zGcRDzxJ5q6XqYKpUZxLRcoHBm9z9vgdnLeWjFCXTN",
  "key28": "2q7QANL86dgdHcqd3mivQSVM7Mj5wckFKEndLLPJBcKmpzXm9bXmNiGz9NCBooS7oEvbcmx2XuNitx5ut4BnhaM5",
  "key29": "5dk9Xx8NtiybDQF7r2bvDjbE5oFD3yzvZQZUGQGo6iUfgR1fq2tA3ADYNrSMtxS2tVwHQmFZmy4mxQceLpXA1BAW",
  "key30": "4NuAGPPPoFKMLvjQG7sthqG1UW2LjRK19mvT42r7DGMz3oVUmm4TmchyHAqGZars2DYJVorQfgZtErbhYpwcmde5",
  "key31": "csprHSUsBCkfKU7H7AgZCtsTTemWQhTyZE1eNXmHk6yphYcikz1RryYDq5nTNLbxXTs5c2mrgZZDc2XD26nsMx8",
  "key32": "3DKzyoCmuB1AThQTa2ba6R2ZMounV2XLjNvgpPajTbz7Xvpb7sDD74xXYRWnMwdiSHCr7niRXDrZDgEx3kUbbiqT",
  "key33": "4BtPCrQCwdEaZ7Y2oJfJ4RrtXie2fcZ5d7aCjXGYhYacCj2a8dQZnTY55sWVwQrCQ4zSxszcy6kg6p7YHinXbtX2",
  "key34": "357LJcwuMio3CagZnFNhA11ewMF76iGP4V4t1srMTGA5MdGQsAbLzqkW8rx1vUkDQ5WAe1rMsGCy1QEM1WbCDxEX",
  "key35": "62evVLDaLKehnBEW8krKLJWvMo3RSsvQtxjJtCyT9jLXdNwZz2Ly5y8sqSFDYhxkz8xeqJVCaRb3X639NfuWzCCg",
  "key36": "58eqPBWj7pUPP7h3q8na7cLmGxb6STDs4fzdDef9mqfEiEBeQwTM7RrGpDE6U9MQj4H37dt4DP4rg31LjjaxyDXC",
  "key37": "5qwZSKeK9sez9JtcYqWCfmeEJD4SogfkKiDMaRMixh5B1hc9DaGPt4KP2eCKZQh6oFZqytVkKZZ1jMY4xUTvqFZ6"
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
