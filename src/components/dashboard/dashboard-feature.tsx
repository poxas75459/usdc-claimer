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
    "3BsDVyA3pmYsfxzesaU58whGYVATd7U5dXgCBJkfUDf7CSFWYdqbgo5osmriU3FncQWJEerdoWXTotcC38JFDMMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jGezhHw4dkZYC3hzHfejroeFSBMTEX5ZTi2QUWJw79J8Epy1DjEe9yZkcSnoyVBMg8SCYomTDVGSQdo2aT76z5o",
  "key1": "2xwz5bU4GwMnJaskVNuNQJSHkurK4GbcCgRv3wAbQKYKbftAx2ttQXsQTkR611nyQ6yhRUsQvjhCpdTF21xBXPEy",
  "key2": "qiEN77JxaCEMDTCKr49QbnoGwLMuTWM9atrkNTkdzjnd9GZDt5ZLWugjWVeKSL1GmGTszU2D4NAZTRhKRsAPREX",
  "key3": "hcUeeMEgqmrLGHqHuNSATB5srdpV4qQ1dHkzboWNH7ViebyMzv24F7N6TSZRJXT6dCyBqXVyddbZtfUjG8gJhDx",
  "key4": "3RdN8x2g2jRnJJVcC8A2SpgP5nNhKkrSwJc9ANejj6uEHWi8H961DG4eAS3j9HEvzLS3gS2DX7ifVRky9mYNQ2ya",
  "key5": "2Ki42ME8qQVVS8E3XKNzPKUiL4pzXrn7go1sbVdFmfer5gCECWu8PtcEzfroj1sM5rA4nW5pdiE99tR2tW2Pub39",
  "key6": "54rkWScNGt3cevWXVG3W1wZkmqesR5jrrzHG49i1Zxy3Qk7jt7nXTN5FqE1YYYK7AxiNDxAMUSCA8X2SNfvEzMij",
  "key7": "66Q3LKqJct6yFLwXbwC8uay4bN52hYegyaQ28rX9gXHCu697TbEsWRSxV4NXyJCNBXjg1ofTha3STXT2v8i8ba8B",
  "key8": "3paVjpomfPyYQXgJ3AsjhzyQw4PXNhpdyjfaG9wE9APcD6Mmfc1dcfG7ipsqTqo5qGMCfvWWzJs2iSAwsoKC1k2F",
  "key9": "5DjNEjXcyeyDt7ePBwayZF83MGUoGxybw3QUuZ5JirE57MMUJUcxdxNm5D9hwvHPmjq4tPY5VrncKsVtdyZVsDiG",
  "key10": "3SgYvMhd8r1uLiTtjudgAsfTs6ACkcRH16LzcoHSLUjRfmx7ig42S6TiyYQXjYMeuJghFqMj39mFRHDHPyCDtVEt",
  "key11": "zCkDJfg1ZfL6DSmP9VGVYHG767AwoUxnToTKHWJkNK1NGej59RLodzqP13oBYnU6n7c3CcDuZGgehZRqgf66RfE",
  "key12": "5xxsvjkTMgYMpkjV4wJq8yUQVfrZoXDZRCCia3Bmtd1rMeYXCFzQ3UquQNn6Hrv6GqNkQpG53UQ1Sy9YvsdLp3im",
  "key13": "4Lg5wTqihqcKX1wJYCq8toEksM29Tghchnpdv4vcbP6x77onY4jmAujvwKJbebi64RiH1bSBPDZbE1VRR7GWDZbg",
  "key14": "2pFx5Gk2R1orKKBRb9fQFpGND3H7SmmNFZezpVdT98zjMNYDPW8gFoprgq393hNnganzDurx9AAsQGQq7n2uDtF9",
  "key15": "Rffmvozh9qKcRm4A2Cqo2mH7ny5m43vDeMJXriaeGVZ9LViGYv1iqUqSqcJX6d7ffb4aoBoZdQWePHrWzWo7vYQ",
  "key16": "3T3RNzg66awcvTd3pNbiU5krR3sfFKz3trJGTinkuaJMQ1UjKX1avjPj18y8eviYHMETBm1CNkkFKiHBQ7ESqhZx",
  "key17": "3g8kc5Tks7zBbnjMeEhxmM8us2JoSrF26uvw84ACoj3ELwWMKyiH4Zvt6HKR9XhQvS5sC3vFfzBn2upNmbPQWQUd",
  "key18": "FT7ZdyUuTu2EDNgThbwYRQJYF8ixhfWT4nxu8bgKg1osqaUZ9qdVmXC4GRyZxxwxVuNBpA6GGavmKZprTMKLUYd",
  "key19": "3MhHgzeVtcCVgMaVum7MtpoT6KZAvjGr3RMYYxFXN9egZ67zCFiH3gMUnevoVXVmw7ifXVtJGsw1TZ6pZroJq99c",
  "key20": "3cojvnrVzTbfVXSLKXWUFw8LzcM8xt5g2NLtWFUe9x35xDWRNNGuUBvSzpkkdi8Vit45wzSBrW1QBzpkPwymFCYE",
  "key21": "5nCsosjkcCcPe5u5c1vDjbZQAK4JiyJo5h1594Yz56CEpDj8pQCeWqPJiZ5JRAivaoEBycdsdsu96nMGqXAPBTFL",
  "key22": "o9oM8QYgeBMDBwRSJgkLqBN3UGg92m4tJxWSb4QZgs8mKr3C27KnnYg3xVL659bcnbtmQ7aaZBNkjVT1g7vfpBx",
  "key23": "3SXEtkFmRLT39QvrKEjX7aM4tLj1ZfmyLCymDX4oNSSuRAhykzoeqvKLrZzaaggnFReG8BqR4NZhE6kuy8t79m6D",
  "key24": "ZmfeV5toRR6o98YfTW6pBWfcsW9Bpefu9DktPRY24uutAFai747VfwwvQN6G3uNQNEEU2QCPowmFSjY4T8MXBEU",
  "key25": "4gdZhPTJbzGxtA5Rrrwhf4qGjFupZaGinmuZYKnhwFnUTfp1UDDfDhFnbm81qTFscVscvGBszCvBEAXreCU2pFEr",
  "key26": "3cQQfxrK8Uw67wnbfKaw8VA6aor1S3d2k83HbaNG72pGYMxNX3T2QoPgccPSkXVyLiQYzLhTJQnsEs6GMo8rdYbr",
  "key27": "QktAAeTaE7b9oc8LGvK19mkNeWQrXaDLKmR3WAhRm9FAh9E8SihCrV3SYZrcY5Fk4yp5YkaKEvWWDHDqdRLzZhk",
  "key28": "83cu6NU7sVKX5dmvV7z4skJhgux6uLXwScg3XSW4fvA5FqxVecY7cBduQttWU71nVj2mYVaVMMwE5vgbjXW71X4",
  "key29": "wSL3UnZtHctk2mViXVwEzAQhibgXUqM26zquBu9gou4V7LRigv5J9EEezoj6vza6TJG9g7vDJpUqX1vnGyYKXGp",
  "key30": "5uRhwK82x3KWy5Y8tMSN7cnzQw6JnYH2w7nTrxwVCrmMT4CzF9iNVNCsNrcisWgG7X7pQdHfVqZb6deuYoY7Gxpo",
  "key31": "3HAVbe4yxFXSNKwBMmd4UJ4pUc5wVUtqNXSipnMJZXS7bQJEk5SZXmvcNDuijPQYLsow65fFcboS1nFajeBFnHfV",
  "key32": "3ntXv1uAzYGB7XPFtfzaUyhAjnnmdmPoJX9nzSD9Fvbs2wtVLThVogxyefzcH75tjC6KXLoCdSmHBsXbDhjZbS99",
  "key33": "46QsPgTvVkWFJZrGkjgx6kGCJRaMDfEHkmyhQyrbibhGNVb3jUZQkWR9YU2XCgN8wGUfUDkXQRhmLsm7VfBQZw2D",
  "key34": "2bmZXB2L2d1c62RBdF1mT9JcuuCC338tF3DEvfXXZFKdxq4FHdedYy4i2MxrSRML1TRyBnma5xBDaAtHHiCrpWWo",
  "key35": "52y3QnmTo5UpAZ79ZQG3F7zUmDidXWt6CW5CaZsDL6zqbZAvKhucLRKAMUzqnqA32deK6YegiP9YFHPh1BMxfq36",
  "key36": "22iuQxrrPpbZMSduvTCzaAwsTpStFESRZGfJcKDwoBtLwkshqUrD9PtdBV1FZa8s3ZKny2ZyDodmJ35zw7yjwVYa",
  "key37": "4vkK2NX5rAuj5iVireLBGPH3tLWpzi1StrSJ2sR1aX2L3oRbULPKcfCYDWfLsPGjBWRJN6mGSuXVUGAKAX6WBuB8"
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
