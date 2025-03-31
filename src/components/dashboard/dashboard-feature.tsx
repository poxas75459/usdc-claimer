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
    "dEs1cVrRtM3oZfiQNj33y2Zv2midbAPa5XethUqdsX6TULyyKzagnARKhEXkPGSt7iy6wSyfnqiKCS8PpT1k7WN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JeJCr1Q2awfCwTkr1MtGf3Lsc1aYS7Byyn8iduKkvRVfHvSHHHxTWQAeNfdwkEnu4k3uQ44fMJwJFCFvQzkUF8W",
  "key1": "3FdcNX3vNdBSPy7FR9otQvXLS18nXcGhYjaeiLDskEekfLzmAEUntoVb48LPPWBHZ83HP8GFJNY9XNagwfPCz1S7",
  "key2": "4yAPb2Z43SZBR3KRgvzFtTLrA9Snd7boMgvpSTnJh22v4EN4LvsV7Kw8QsP9BSnyP8jUcqXZb7cynEZeohBgPV1A",
  "key3": "HqDCQUgxbJ2mrz9azTp9ZUuJZhGZcUVqfBZkY8cZFpEg7d5RsVBMxKSutMGp86XXtaYcPjk79EURwrWveEzK7LJ",
  "key4": "4uKcyu8UpJx4DBCAhgBZARAkQ1evJSFsBxPvM7SLuwWFczDvgN6MR4gZAxNBT7XkoCJm9wJmwKCFs5Ru1MaK2uhp",
  "key5": "3BWZpVx3UEzoeLs47yK5pebiuo1C7VhzwZWFq9r1guQCv4C4yaMSTZg7g429NXemruNnRYYdiKjumyfk4gXWXjfR",
  "key6": "4Ne4rz6kaKSagVaxgY5WjYdYJ5qVyHdStGTpfxkBEkrSFHZD1JWv849fXkHTfhNbCkW6EADZjgCbWoFFi3BeGm6h",
  "key7": "4KjDkiMoPCH6dRN3Hmh8EBNyk3B4VvPSaoQTcefF6vEM5f8uxGragNFXieKvrKdpFbyNqUvjA5K31xPgXCd82PRE",
  "key8": "63HpSRi9zKN1GDK3aeimXjZSAvm5Fm8KHg41691S4JxtKCyV773Twzz2J6GSrvNY4YUVWjeXaLbvZ1L8stQmaMHE",
  "key9": "2DE6N73WbyoMu7eniz8XheenRjsCqR6XPcx4dvg4C1AG7ccZ3HqSqLNXBtjg7v7JFybdCncMc28BwrSKy7rEnu8w",
  "key10": "E1YCx3aVGXmLWdNzTMWpXX8ZeTduonaC42325nF4xTzQqZkqvYFXnKWLTihSPzdZbDc8Z8yoBsziah7dVS44kCb",
  "key11": "tEoACotYKYjFLCWaVjMXrxWg5hNGwBrY67NHxv3nq5ehHMkxH658aNqkA2jNmsaygG4gfmu4ffVKcyq3eGTofzd",
  "key12": "2xC918RD6ipDYZii2PRscgJFMCeUwSaf1tPiaLvNDEhEhTUFh4ABvxjhJzxDxTMDng2tjzbLQiBYb3PYAFM4piyk",
  "key13": "2R7dt26CFrdkJ9evvNqqp2L6aPvMWFW2tQ6tPeci1sYWMffcNtWFNNx3AVcqpufSynXwjtpQpkSswXNYt1UazsPe",
  "key14": "SmHhWNtNeQBdeVWrzUcj9VKvpF75dQ7D92W6PPXQLp4CStJk9Y99VkcNZiAQQ6Zjfj4CZksybjJ2NzX9CQ5AyAR",
  "key15": "4uAK7cfzSusSiQLVf4KY2D5KzJVJAtUsGhv4WK9fqw3cuQzGY5YVrHymBe98SGDNNgFiPzM5QxiobHKFzEmGcRyw",
  "key16": "5rgrnNSpskn6sbeWU9e38xCNw7BhaPLBR6DfnyyYu8T5ReBRaJHKp8rU5p1oD1Zz1vok2skjiXW92puDoZoFxJrB",
  "key17": "3vHqmhEGsVAMLVCmMQdfvL6CCwnRReuTRcnxRFPPh1T7bXwQMRGg8a7qvSLsErs18ucmoY4qu14x5WzdxrTWaTQt",
  "key18": "64sbaq7g4Ja1JqnJBMLkVqZJB19AHFrizRU3mL322G9uga3dVb5JoMVx4gkxWyaHQKUQKyWFf1K1vSSTg9wDnXVt",
  "key19": "3ztZ3kUiFxB3YkBox5B6wyQiKq1HRX9qXkkEV6sByCFraVARyaDcZpNFigHRTnMH4R6frzuCH6tUamTiUoHhwKbj",
  "key20": "4GXVdn9dCxQ6nBWJr1MPeTYtmxcB2KQQtm1EsWUdchoPmkUjmbxs4gMPBNQm9oS96p8FuGPx4x5g6u1WFadNh8nk",
  "key21": "3UF6GSAtqnJV4dTz3CDSJxa85YdY6tMuW7QffA48fLQdeRSH69ceokCAMf24QLXmbQMbk91f9ozmsuMgTgLMVg7a",
  "key22": "5DtifkQKKvJvmWSjWvxKraxTN9kkMCN7iXkDohQKC8mtca6oeepHgC8TdiuyFosjmivRniKYdoQz7rwRVUPN91Kw",
  "key23": "2U6vvBosAVP7uriWqpUGfnziR2qsQtob4AxHP7jY2qpgbgRXEH5QyNUZW9YN6RJfPj6ZsMeCVpbceNc7n9JMdYE9",
  "key24": "2d3eCZ6yKAnGbsZYrxLmZ5YEz2QysM7v9hGE8Qfrj5TqJD9829mutHidrdEEZQUykuo8h4sHfd3UeyWEQzkRPw3R",
  "key25": "4SdNZW2tWrwtBcF6qhN74NBYqvsZLLoaGNF5vrLCdMmJr56mcdYntF1oBTxkxoLUxVYrojz8PL35np4x1StH7ds",
  "key26": "4bLMiuoUm8MNhhHZdYdo9rWY73afNMC4aAiyxWGfdadPd5GD4j1YF9N7TzEwqQo2XqggwCZDdzUwJFhfoFFvLxHA",
  "key27": "3yZ39asxEwu7SzzTWkFgfptFUBDEBuShbuG8u4bsHqoTGdyJT6cxhTTpY9EpSiCjJDmHHcS9Jdgd92RUs1ZJDM8J",
  "key28": "324M65ovnFm9vkyndr6U9BMQ4WSdXUcLXC5SdTd6C4QmE6XorjDGsoqc7c5QQDBAGvezbup9yv9Hyz9HVaJ5jMfM",
  "key29": "qUZ4n273B9WjDU4ShD9VaxYRBLX1qgEiwwuoSh9iV6PNtLd7bL2hDTaBSMj7P3NTiLVtMDvnkUJHVyFNgCbqCuc",
  "key30": "2vX6pstowUZtLkmG3QXhs3RVS9yZQDbEnzeTxFQicCCi5gPVkUKXe5bY85sVtHdeUJS5zsVSjz9HJtsKJY1uD7T2",
  "key31": "3o4KaYqTLQ8zLph5yY8dSBXD8ciSeFLooeYqMuXuzk5mAjsdzJgT72D71EoKQ1YHnCuoSQqpkv9HP7bouvGPrLnb",
  "key32": "4kWj8LUGFwjFHUUKWvF1R2ZAuS9ejhNpBWMVbmZRecpaWSM4mR9AwuomH8dyoni9GqeZYFD5K5QDcYsxCkeSszfW",
  "key33": "3FkfkR6bVLaKeJLnrADQoeQUtN6bEh213esPQcPPvNmJ7KL64wQAim2UBVsGH6m1Jpmx8VsjnFiYHBqnabVo7eGv",
  "key34": "3c4Suw9JfzrWfsaHG2U7aVXAju5YLrSqF79rYng21mhSaa5HWGq9Tk8fKsHtH9ermYA7xPuyvWQJ6znJ8zvtKs7E",
  "key35": "36DptCbWWPLzg138NhHYtv1RsABTLX8zyWAW3sZM11e1G97bpCvyiqmusN9aiFn7fGcX39ZVL8ZywhjibiPqUbRf",
  "key36": "sjSywg76fGN6iBngG62shAszo6CnGz9QU13aa7VHEwtZ1LRS7Agv6iDZaS9r48g5Xa4yAGdR52tYMYKGUr9XJfi",
  "key37": "3t75M93PJy4zP9Vwd7htT9uEmRxokQEeT1q9ASJjoRo49yUtAyPmLezrNKJS7Afy9oNvYqFn8VBvHBvCToZZ7Hne",
  "key38": "hsXz8w2HAwYtp4JDc7Woe4AoV8QbBkC3ueiEhkJSLsjyhSPsEagv3jJiSTippn2C4B5RLVos8a89qGimjJ8ZMst",
  "key39": "3kfrGgcHjy5VYgUKjZSTkQrVBqunELLtPkXdZqn8faZKYc3SEzNGRdGJN31VFh1sQ48LJXZ5SqCWhb6kJnxFJQ4R",
  "key40": "2zxKzjNk9GrL7f77GbmWSne6StKsLBkrE4ZMSV3WbpaP9p67AGjGHxY9TZSDkrgWCQGLJUYTxSCrKRf6XuBb8yJh",
  "key41": "yCJUvqD6bCYVk7vCTRYqjUwi9cGvLyAmeMoJ8nWaRQCdrw2p21qKtUy66XzeMHoNKMHNCATvrKZW5zQJASVAU6r",
  "key42": "55A5CFnrzWeC614joAGnFdhnBBdFG4GC9ZBJuGoWTTUjKrmQzGwSYwtCCdwLaXcq4fFSVFRQVyRB36ZJ9SgXzn7A"
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
