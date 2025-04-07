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
    "5BSDAcqpq2aWLJDervAdB2mLnR3cpAKRXA2TS48weWxnqE3VqtokH6LFSPG6qLqZDmLxh5Pu9CZ3ff5d5JD2CQa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7y5LCr13a43di5yQCRHDpaFAUs9LLMJAKsNzHTxw2iWK4B9j1XpCuN5Pckg9wtSRUb9W6msShG6TCstvjLKXjqn",
  "key1": "4R1Lc2Kg8JBvoU2mqgzAr2dJGqi77kAaLjLSZTToqP91J3AsdyocpJqw6p98dYHt3K7oGSbbPCTHr6DhcP4Y3RTX",
  "key2": "3Zof478cDDtJtR3RQDoNqPe4MUTyuE1gguPRLLWR3n3ukrUVjqiBZWB785iFLjdqGaVumK9XMuw1Aw2zZG1Q8Nv9",
  "key3": "5rxcpMeRGtwBfTL8WLvMobEqFpXWLSED9HgqVYtxtNw59gkfJm5QBDBnrcpdSN4VQGgZv43zuXsgEtMMYtywu6aE",
  "key4": "4X9jVn4ozu1qeEVzsNJ9YvwGpQtMJfXhzHCbRvUKRZyhDGBZLQpSM1SmD7ioA99ZDaMNk1TWfsMY2tkWkaWbnJu7",
  "key5": "gLuUZ87Ugx9gas7AS2MbY91eYtqu6o3pFMpiNeZchjaE1tcywTTzz836iFmJvUuALFRx1e9Q45FYeJTCNg6J8ij",
  "key6": "32c9Q39HcGhGqkkZ8nhako8bGtcoEZNS2Ujn7NiYyqjuWdBVQpKyChzZgh1aZeNT6BQNgN8rXgTmnHWd4DGca9JC",
  "key7": "4HoQuZzVKr9LXhXDr1dc5MpQPtDvd2oQtchCrPEnLcpnh4VwS5WAVDbLTr9LeiudKwFuxbWCu4FittkWkqayMWNF",
  "key8": "CitY52HFckzheKkeBji52USDU55TCdEcHdRJJ8XN4n73qMpvJHiNvrMrasMeqbnzipz1yKccaP2vXyELX4h1P1f",
  "key9": "59jHfZxSZru612taMB1JHg9NHeMnTrYeo6yXpVZFbKLVJJMAu6C1PLHnSAj1D8xDWdRN6BhhkJRGWc5JsWa76b6S",
  "key10": "2UaVKWQPENfGRaGEtWU5hRSZhe8PF9nbbihY4GzZTepSqiLtgCi66XjSwMkK2XPuLzofqjT42U7cj22uVMeCFA4B",
  "key11": "4R1M59DxsurkN5S7yxtwxmjtyJVSNboMify2T49CujFP2bxctUqVqChcs6dHDGUBCfCYqG5nGZCxFwfv6dg3pacL",
  "key12": "HDR3gNLwrWGNjwCwZ9QAfGFUkup5LUEqGLyfENKiRGbupqwVwrKyMMmnniw9Nis5T9BZxyFDTd18qMNmNRZbbKF",
  "key13": "39aeDh4ohQPpJjDmgA3X3FGpybkFR74sVfvK3kwJrbfVzZYH1gR5cFQqER6p9cF8fxinDmKcxB5mqds6nk8TnqRL",
  "key14": "4bTpFF8KGzqCGceTdnK4St6u3q5HDHdnL8BsN1AkeeUKMio9AmM3M6Mb5VmeftN4JexZHynUe6pTPcLyzBnQU1gw",
  "key15": "5VnxaJcba5ZpkBbS2EworK8SZyP36eA4KcGhJXikNTW1t62weXiSv4GgFGJkEg5vMTmT4aN4qQjQfkWR3WG4wG8m",
  "key16": "2tgiBppSCHWZhcgREUfvMRzACjGG1UJmM63tENha38dFHEKJ2CAWwVVVhcTpcpZ1bc56HbbXn8Vp3ozGWHv3D1Uz",
  "key17": "4pVM1edpUTeHr3Au3K2b8p7vKdKJgyczrqRuzwCdg29Wur2TSa6WzUFLHyBviAbj3gShou6NPpcgdEz4ddrUmn6B",
  "key18": "5UH7rWzw1eTyqCF4xAbamToZ95BFK1tXtvvoYA8GxFcUZpQgFZRWTb7XS2iiew1E8t8JNQwjKCSb689tKWbhSGwt",
  "key19": "mPAVjyvFk5a7c1bz3qZCCdoQqxPpXdRtxcGKk4jiC71vBZbs1yZZWeybndD1EiRT4Kh6kCpokYeWnzE2Tuo2pV4",
  "key20": "63Xn9bKNkptUicQDe4pQrYShXm9hDa25wWtC8V7sZ4mXvkFBMMG5EDnduaSAPohGHEwDYmo2cNWD17E9m3QoDWB9",
  "key21": "5g5J212683ry7Wjb3UfQtta4MyuyGm6JAHF5wmPncAenLQV76MpyRiyoQzKZRMbSjU3ZwcCPwPvr1792tdZJ1Pi4",
  "key22": "eB6LbZAFX5Cqa6UQbJ5Fvj5Prd5n75UEMHdeaeoNjKJezZSz6fUgfctyBmMobjvctxE3j3onm2kEprF7LwChhMv",
  "key23": "4AL6pFnfSPQX6RBLefWx1KTKUyqMdSjekdF6EZxbdcr5rdhZpDwtMhjiYVfSZy1n5m65zooz1tj3L6wAxFTDAqUY",
  "key24": "5fbiRXCfkikoNkF7y4y1JbU2cGZ8D3tesEqTVV6XYS88tJa2WxK5J3Mc484JYKWNoMxesz52nmvdNHPvPRDcCEaV",
  "key25": "3btea6JKzVAiSbg7PKw1UMsAozwQSCj3DBwkHYZp9svyoiAtvHMfXDoN1xFr5JFDD2wroCdNihp2LFHQBypj7VkT",
  "key26": "3bjVBfjfGfh7H1unWTE3fLcQBeaCh44sBVUVoRCxuSavcCu1CuT8ztQfkrEdp17z4voyn1Jy8vZCNBsDpedgjvi5",
  "key27": "5zdxPHEYKNJRnpTeWGjrnB9WayfLjSgj6yZq1xokekeWMnG9EhiTppuDGnXCi7r9QBnWazKX2LUNUNcYv5UNGAbp",
  "key28": "518D2TnpdAxTdc5weuNP8DNpYUhMostaVcPkZ1wXCBaCg7WH4iLZwDUhqtS67S6vzb2kjMxjNUPc1ijfAEz3D4N2",
  "key29": "2aeMzc113VED42bMjRusQD2KeNnkaPetuSS3yaUN6mcQc9ba981rjVnSPtBWLvudN9XnzFhxg414agxXKzxxjKWM",
  "key30": "3tLn5gVbr3sP4DxWKQarCWkooKKSGtiqf1QHb72geQ7pECtYYc6Hrfk1JvyDtAd5S6Rn1mA2R1CUXn3n9SZJSfvA",
  "key31": "4rhbXsugJYpFpvNG8QYL1cs5Art5xyDkA1mZ5Rt8Gp8g8nRgyLkTMEKy3NYQWgHTxQCpsVYXcmjhE4cz9BCGVJjk",
  "key32": "59Sf9ceWHgKT9z9TRLLCAT1YEaNrBqztF5RY3sCLhrpkPHUpJWakhAD111vLBc3zirq4gPzYF5CcgQMLycs91fiX",
  "key33": "3ATk8vjVUDECcY5uffLUsPwSqWMdpZhTdAnbbwhjAZTjNCePuV88Ji9K6MDLJaz6XufPAcxdZEEdHfvXxpNe4abq",
  "key34": "4gLRiTg6x4oUTKVVeASzaZdMUe4r4ocLa2rRe48Q4cEv8cVGUYK3dN7KYq8AiAbsKW5m7Ug9Pb6coi3FR7phKsa7",
  "key35": "2jt1yWEPKmvtBvf3DBnyaiDzHb5VZ8SgieittLCW13rxSsk2Eizie65x6BcaTA82cJv5pwytvj6ttkzAgbfKbMXz",
  "key36": "2ou1bcvVdKcb7xF8sdhddQRJy8eqYM9J4P5DvtRmLXiEHoBjN7MzZqvFg7gXqKTLHT4KqYWdh98shWMij9xGpEB2",
  "key37": "5WRos1as4eQ2z17RdJoqWVtsyWLzzi5n5Kde2YYRcJrHAcvuh1BUGGYiTXWfnrJGaZ8ZKULv2bHf9gxK4XAvzhzM",
  "key38": "2zCSt5jfHaihJYoBVqPLijw3LDeD4bCbMmt9Xm9F13UjYYfcuJDtASsfp1jyYe2wfJkk75hhUECUDcfKBschtNjr",
  "key39": "5TbRsoELdJXYu8BBZyeLWxcWtPJxoxgHHznHnwQyLmFUeXHjQfAJky8pXEnjCjjvjuQte57qqRQnzZnnQHfjPfq9",
  "key40": "5hSQy75wr9kpNWshbdWpPD7KPcTs1bHnVJkpg25wdpboYrMXTxGLUNqi95BcggpgWmoBrN6ZZo92mf6i41UaYnGF",
  "key41": "4LsVNTqJcZaRh1MGe8ZDrRUTgQ5JQDKwejoSrCcb6Y3LwbqyxGB5nZKkxhi7NUGTZKR3iQXLJhqEDBZBqhFXJmKS",
  "key42": "2dtphvXMKyq9zCaSUk4e7fukdu1TAVM4USEAyQqyUecvgAgbFWMtB9LYYrWe1h5Xhy1v1eoqurdLT9r659pXJtv2",
  "key43": "38fJgw2mn9nmZXwasDCUgu35HWU1YTaXmNs9FZ5NpsuYCmYNSRGCYRHgpwDEFsaenqeeWbbgQ4zcAyZVto87ruuv",
  "key44": "2BUDeceers8UTKCiqHQ7HytbKCa2acK4yCfNvcWHUMDu6NW45Z36GR7U94jqsGJmztF4SxdirBCS78GJZXsXXE2j",
  "key45": "2THVHvk6qiJTXJYd2tTiqkKHZoWhcVLkxoMZiQyxmRNm2Eu8mSb5AL3VNyW46XYeuwjG8BHHBYzR2C2s3LYEzvK2",
  "key46": "5EAiEG89AMDAvCKbGqytAUswaKKEnRSXF8brWYSgruV2v7KVD9BqKFhM1WYr7C1MytU3xGgjQMqfdpRgFcmcT3YJ",
  "key47": "5FZTCNGt1YPmXa78V5rD1xK67i27GxDqaqvHEMjaQpX9TijK9mpoFbWdxcZ1RgRpuSZKo4wp5BFQHJmnRy7KuEzy",
  "key48": "XP54re2MUknVu19h4u2wHCz68oTxag8gkTwh2BwJ6yLcYLV6nZfHTvDYq6nnyVMMnbBxa7ko54CoTwYbCgz1ncX"
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
