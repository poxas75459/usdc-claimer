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
    "4w7PZPsWgYJosC4iSYf7WgHHNNYgHzgNfyreeJyKrNr7va2tD3gHAX4ToNK4oU7HBg5ocLfUcnF8K8LrGu1ag6vB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CP3Adms6LCqHT8eSonGPuKUKiSzuY7co9JAR1N849sdNd5gPq1jUAK13gpzH4zXdk51yxQtqN3tykPYhBwZ2VNK",
  "key1": "9iZ6QCrZbf6gu9zhwmNxpPSgaTnx56TUBXsSJT5qbPzsaL9gQfCfvJ7WW8qaUF5EnXDYVutvYFjxGehY9yZArZ4",
  "key2": "3JY4G46Q6xFNcTkPQibjdHA6aTY7M5wP8vm9CbRZZBa17iPAqZsWRmiD27p7MKmhP2s1RwbdKCLRNj7s19hF2d1g",
  "key3": "MJN7kSRivmDA8XGZrHEr9MMpBZTBjfZDaetFu8XLuzHHPGdSh59RApKwn82GYGunohC5GqprQ4KjSHA3LyA73Df",
  "key4": "bbyquPDHrr3y6gAADNkEg1ws2LZ2gZ2NComLSQrtCvik7eB6ustQQaWdu6C2vr9Bxc6zFS4mb9anthHD1d86A4W",
  "key5": "5DsXx4odmpc6DWBvFRUXCdZTUpHarASNeKobHzeUVCRfdMAnyfKozB77G4EfJJsVJKECyKhAyNQ5iAhZ6uC24yr2",
  "key6": "3oeM5KPs4rsizhk3UtPCHqZcrbE43TstQqghaQcgmNL6DFLE2mpnYqgFuMU6xhf1B5Gs6pvGgQc4ojByae7SrAKx",
  "key7": "5pAgUxzGyK9qWppzXjRHgVWJWkxgkLMVYjWLCi3KrjBg6u15fZPc4RAbV4SrjoYJX6FE6Q1xsauqGiswo7iUy4EC",
  "key8": "2rqvm4Lg8kHXS5QYM8cbSgQ7xJTDoU4R5URpo9ssXEEkF6nZyEx21GiCGDrSTJneAZjvvjcvZkBtiTgppk7AEsiG",
  "key9": "2xSj9ytyMFj8psyous5kQxq7kgaSNZqoE26VciaU5D5QUTqYMWLbUYCh1eacmabqZfX8p4dzU83hzajBxLwH9qgK",
  "key10": "27k2tiCPdVWMSe2YjFPcts7xqSVkhj8Wpa2iEzPuh4fMKCL3RpumAApS3kwxpd3xaSv9qEbMzgfvWwnbujBHiJGT",
  "key11": "7ePAdkH9zYrsQdqxAFfhPPZzYFXrRFw8cQNQKxf6biYALzN6HdRHb5XTdbtMEVBcjwsetFESBRQWqS7KjFfHYYk",
  "key12": "JKkzfNfGyGXSPEzByD2srNoMzWtMyYL4cPuMMnrU5E6BZ8MJakQMMPfAU3gF655zrY4t3vuHdDhM1UYUn7wVEJN",
  "key13": "2S3F2iEFk9m39XR8zyPBUfsrTeEbwSso7P1obNf1nEkNUZwV2hMywcyTrpTv4hHu627yeseHAp3Ak3Em2AkXwzUf",
  "key14": "vd45mzSxr3wUWquM8tmoFiEx3Ew2xz1jKUgqFE75aHfD3q6K8s4PvkuVkJYhNbZ3CUhNwrs2aY3bSbRQVuGvAbe",
  "key15": "3yTJd8ZQF5urrLkJdnHKqfW4ybzmntAxrnyDLpVQmKZ3L4i74QUtddM9zW2FMzyQp9U3B4xBcaT1eL3r1TTWxewC",
  "key16": "5P9HWVrsoBjh1QBxrum77ef5cNrXLcTMPyV88zjdzAe8DkJsPNqDDw2G7opjpXK4X9ZyFwkuUFQYiU2eLukpxcig",
  "key17": "rzLnWbYykfVyuZYprEWciwM8nQLT2EeXaKQCzcyfBq4RSRbudFXnWnbrPjk3tF5pa3mevN5ebtpebaD6j8TC7Hm",
  "key18": "4r8UnDNzX5hmNnp7X1keq3XW3YSsJHtGmTopcuh6sXyVfFwLV78v7Npn31RnpSN45xcYnxcV24YQXNG1hm5Exbbj",
  "key19": "2QYYEr5CKdjaaWHecut8mka8vWNydk1tViAvNsZYLmftC2qqj6wwhwd71LQD21rn9ze3y7K7RPNUEhSLrYrmifbx",
  "key20": "48rmwoG2iQKLg2B6yiQyoC7bBLixp4hetSTwkRdh6Hnh76qSZ34AZpHKdSMLesCyqiBk31LW5ChNtc2wSGQWDqJb",
  "key21": "57ShdTHjuX88reU89KdomdMq6JMWvLrkb3DK3pakPsvpb8ZvCMLhYpLEfhnsQ9WZ5TzL6eXqHCL3etUqTLsJbyYZ",
  "key22": "2WrBXbY3YDWM7c3v4WygSBdXWDYrMtRidsDqp1bjM7Rmp8ttiNrafAz2KEjWkDnYzaJfhHtvJCuLLTUQP3CtsPd6",
  "key23": "3ppXbzsvQHer5pVfqHaSfu2i6qNpCeh9bQoWFmRMRMqo6gpRvuJqj7ibXsicJQERiRqD27y89Gsh6JeVsy8SVt81",
  "key24": "3oZWUndYkNYEXTQ6LirTELjAWYJofWwmr5TQquggfGFxat72LM85px4CN1aG3jLDQ9fnbfhzdighj7ziqsNqTWNY",
  "key25": "3v3HdLcH3WTiwf1Hi2hRkVZBQWKqqeg3o38SYoYdqKdM9WcJvmUYy88psmunFkmffT2Twch84foLf13b8UfnUQ67",
  "key26": "3rrpnEtK5ErxUh6CV5p6KvDm126go3JCKtm9CasmFZGrFQEmvMVShe4zcXjMSSGp4cUHcCBHYerB5SgszMQty5Y1",
  "key27": "BAVNP4bn16U6844U9MSA66iCkFyccSwTLf4cCgKFvrjgBornYSxh8KEvrw95L6vPBVkUh691rdxHDUAZBGw96Se",
  "key28": "41fSqQ5Kz4o373HRkAztj1CcDGChwxHbeEgesAndJ8GKexzLcbSHYPoCiby5q4p4YrW7pLXWxSAUZfUijCEdaSPG",
  "key29": "rLKaqME9PCRnLP7apZW6twfaGTvcaJ7nU4P7Bra19EKk1yEjhRYHpCGbxNR4uDnXMsbKLLgBviy21EJr6w22JgL",
  "key30": "3YLEYv362Ng6HdFGT9Z4KLD7eW5kDd1NztCD8SVBnPQC4eVn4akCqhoAT6j6dKFUH1vqb2yMjBKf7bpBG7WspL9o",
  "key31": "44AEC3dGdr5bF3pbK1ax45rD7yZ5VbVjS5dKfWR9wrKKiZ9f5AuUkxkczrddueaoEoT2xDPkcishQSBEF82W9e7U",
  "key32": "6w5DYXCfpHBGxhejdMURQDdfZ6Fz1HcaSei5oSaCLsK8kmRab1au1WFpWd4nKG4ct2ZbYWrQLAxrt9yBJsfZuBL",
  "key33": "55aKHEg4ZScYyXwALMUGmkMKdHRAA2CL65WEYqbk14PW3nPaKdQ8r2K3BWS4Dyz3d7CofhvjmGbHgGm2ZZqJELwu",
  "key34": "63JZs9XY2EsrMdXGxmMcqMxPWApJNGS6szNZa3ezt8gY3K99RA4Tut5demNyyFaDN8qy7pT29TtWW1FiZo9nijCU",
  "key35": "3N1MorLy7huMZ1C37adsczRSu764v2ZFDNp3imbt9HR82FGWZ32o4iGyFdUsxpXke8u3javH94zUzo9cbhUr8FUj",
  "key36": "4gpXj4dv7EJMM2sYxMNFQaH3AGgznuGZ1pQCaBAEc5TUrwZNj6FWQH9NbKyXxzaMupFWYS7KkGwd1rGYRCCgxxSZ",
  "key37": "4riGnWNkuJ4gwCtfu9swwmGzeK6rg1zo1rcpskDhu6Gsn2jMKJm9QWeHhUTv1wLBbQX2P6y88Kh4Y24Cdz7VYSw6",
  "key38": "iyr6QZZxoPWXt7mN2VWXffuT83Z8K89Fp1ZGi8oVMfwM8c8XtJkU5Wm6hrdFNeM4fqP53y2BPr5kTiTg63KLkh5",
  "key39": "5crXWBtiKN23NTK6fKuh9ww6ZBkDMVXh45Ff6JVK6eHFWt7Qo7xeg1YBitjqRLijBPY9S9w4frP4jyJqHucHSP4m",
  "key40": "4XqwyuHBrknWJxWoaJw72cRPAzZ1pPjmi98oQkpHTbqbpCu1KWknEReUdbrY7w4QXp9ueGbQJ8cdfCujFViek1TN",
  "key41": "27r98A8o6QtkKYVLbNSvkRSJrZhVUXMrtQGAqTdJhHsy2APz56gzGzBANuCudarFhJy4rb6S9cYsDXNF1Eo5UWpQ"
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
