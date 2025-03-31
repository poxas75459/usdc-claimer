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
    "59E2zYwZm2oJC7PQ6weKjY4KU7RyyM8fjcpfM88A9Zj1aRcyVwjnXojrNCqu5fcF6yFpA28PpMepJJpf8UcZbwpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YpuqHZizCZtcWinmxxiDmQXMpS3Js1zDjR6NJmaZNGqZ6MV2Zh43iysrK6LHHxF5ghoXKhQmh6RnQj6uC8Xyzsk",
  "key1": "4f2FKc7MkVRVhmV3GTnYW8Wo6CypwuGvpJiXCE5HfNgzRp7RL8dcjWwj7TN5w8r78FHghrUhkFVztbLgpGLHPWT4",
  "key2": "TgSyymuQ7HsEzwLnG8MbmPtiGX3V3xJkruLYj3pK5n4mz2Pc8gtwEoYHCUDUo7bH8QE3EmrSJxCvk1WkG1VyEWk",
  "key3": "5catQT3X1J6HrLFFyHxLm9LAYSwJ5iaXkdQgFkqcrANkjiHSKFZQ9bSHBqkw3cCJNMDMK1NZM6KqjYK9PTWq4K5Q",
  "key4": "4YPDjuqUmLbrmUTtyiU55wsvNgADukb2LnihiRCd8EwF88aG1AtdqMiQaDVqCrddTPziXKuNR7xTA2BsS3o2Y5bt",
  "key5": "3qevT5NVCg7dRDYkqDqntUy19PWPmxFZGJEuY8Z3ivss6kC9Pq19CZixd8g2uafjP4ocwZWJ2PCzjqCzih3xRKLX",
  "key6": "5PNHfWZ5kvM8FR41scSLfaXGLahjLKJr3fG86igkLZXqSWkSfDqgwyi7tEeKQX5qMC4vTaM8oAcjPZNHvgEgo16Y",
  "key7": "YPPf8RC46CHHADX34g4qo1rJW1usS1jN5bqDwektaMvdGgpYstMBQJiY8mEe3YR7bo7ehQ3PxRw8TsGyFJpLBEA",
  "key8": "5RhCwvj3M5g3i5FEpo8dYq6r3y2Y3XErSxrCroHB9QickyowWEe2iBRNpfvyRxgy5eyggDHn5dAimWvHBR9iPTww",
  "key9": "2ZuDHTUMmYrQ5cPvQFLbBmw7npqmqakFjaViGVjRYt3CSEQbLP2CYnSTFEvKSNZBcCEhusTwKQ8NnC7rA243uZ3t",
  "key10": "7PFXr39ziK8BbokQuS6c8RNdFdAJ44U7ujpDPmxzyYRc2pQmHtTeNjwaRFQxKxihfiykD9XmUQEgwcUsyFcMEu9",
  "key11": "3n6S839jbjR572Ev3HdykihoqrPto8kveykduGvheEs6oYvNfrmRRMvh8H9eDmQ8nVSLok66tnB6gaHG8WcjTJmw",
  "key12": "5PXpvAwZ5JoLFJnbkfAqEEzGyvaNzRGWz2AtWMEzdaViwnpxdh8bHm9UovV7XbSD71pfGfzBb6TKnKrZ2Xxgu3S3",
  "key13": "4gbVcsrpFbTXMwEJqLMZuFdNFZZb9Sockbk3giXeCbUX4EA2AD8hJmLjmffW2fyRZca7TwtLRWjFxbUJpNcZCYDB",
  "key14": "5H9NG6SVtriKjpw6USoe1hi1L72QDwr4Pn73SMhACVaBThjUPbKitNHfxnfew5ypXHRckaD4nri3pTR77jDnnNN3",
  "key15": "22YJG9CoTU1yffMJPBC5CrFu57KjudW8Az9Bc8PYHGRtUXBD23HmNGUzFe49Nt4en25VmpPJQQtKUqYqAWWZ9H8P",
  "key16": "3Rr2tfG12zX76MqX6yc4n4PE99sxdMu9bZcAa43xUmyDzKQZrAJP9TiZe3DmX8aVALkgW8YRGokV6oQLDnJqwHot",
  "key17": "3CcJumaJn1YnSxeWvHPTpmwTvhzRkdUXK9H1wxEvDcJA4NUcfAhAXgPGb6otaAtaSjnrLh9CuKxsxGRBcVjAxdnG",
  "key18": "2cVQ14ueLr7MhU4AZd49CAito7MXiYgAtsbxQiZYLNbVPjV9d2WC6Th2ha2PQ5nqtbQqPBKoYAECLTFeE5vmFCDh",
  "key19": "3LFp25srdsziUzbP4wZ3SGDriKYj5e3njFEWz3YNttnyf7tCJNbn68GttSaWXNbqPSiagMFwpEV9RLgJXCAkHSzN",
  "key20": "KuC1bqqEoviJ9gNP7fv8tArsQgiSSbDNxkHetucnReTJaRTCGHhTDSZ17hpSgAn9XRmFgbvn7dCiRTX613TGtGg",
  "key21": "3ai77yfGsKz9gZ2cjH37eXKQcmKcN7jbhJbjeVE3oHFpPV53UGPvJJi6zmUWQbfAzvwHAq6JnqftVuLq6MmLw8eT",
  "key22": "5R15ZLM2Nh5jcH3n3arqcUWAT93qX2Mo9RittUAgNdcbtaTA8XkX5NQskjt4UHVjWVVbXw47u4Hb8uuXswQSmvE",
  "key23": "3TjWzJx4JM2fb3as8xNKM41TAN2kKNahgDDUArrGoZxLwh6fzwQNykQ2FU8MyCzAtbrEjsRi5o8ornU6uvSV4sib",
  "key24": "3P7Atn4gS7QEHDASHdKWyXpySFkzCith19LqqnoEN6mLGZhqZXBxF6VcSgm2C6ZMWUqJSuYq3Nhmy3R6bDH7mbVX",
  "key25": "GeTgX5n5C6aQc211Cfae2fDn5KzyS5gDjg6mRNXDegk6VRVDFQS95TX7LPkx8eAD7enKAEhYT9GKxsbirEBv5xx",
  "key26": "4hr5jgRRmad2YPTgSBVucAEtud8Nh3goMeoVT5MQbBQxhZofg9kW5dKDmngEBFi2BjPqwfwSRyuxX4NjzMAewKuP",
  "key27": "4pUxLhkkiDkmUZsmbnu7v2oUEsRWm2uoGffaoM3GTRpSfGn3WdCEXnwYVkoPDfpUjCtoAesveXkAU7uF3KMXUeCi",
  "key28": "2J6p3ctc39q9CiHqWN7sfgsU1zH1EMbLVZ89AxFAaULDxEEwxFQTkf4X2JjJ115EtBurRsfQ89eFXyupaeb9MGcb",
  "key29": "5uAhBhrEEZ8PLYfjLzPqT9VRpgLVuYUQV6mPYKcghhBQkpL2qmx8HpCZU1dzC2goJJRTRRh3dSVV1BqPU2AxBsJG",
  "key30": "3c8dS6M6iVh1xQG9kpZC3okS9guHqgSMqbkP2ZPfNEbNZsEwxUXFdctH7w5aDHCtJtzhSy2Lh9MDme7hFdA5eGJP",
  "key31": "qFukucjuN4Q5gMmPLm4iDAUW3TiNEHcARYJE6QAACs1KmbSnYFd4mcJTdURXrqidHZ9wiErRqertkkJNZsbhKbk",
  "key32": "EZq3x2GHZXBHBN7rhQDaSKrv1RNvbzqx4uGzvr86rTFo5Ud1KMQLGiU3VXTyoxSGX3JTjkeyerZUnkpi7TM1HG7",
  "key33": "GKX5ahVtQfMhmcAjvc3XMWHPBpGH4iug9NfVR8rQAqkS58b2SLxovDmQAcJ25JQaF9RRtAVL4q9Q9jUUi6izZBg",
  "key34": "4xm9UxwDbsHqi7ogqpUKtvewTeDyff9DTJAuaJt9E1wqBTDphvJASE2EXhqQ6s12fvbbjdJTcrFVM3WdqVNpEqsd",
  "key35": "47wxgBb5sJYkSNQnFt2NSvKf9UWUC971dvdNFxPLh2AbEN5C7bkMwb2oZu3KvswQ1U5zHkqE1cRWBqqBsGM6VGS",
  "key36": "u5UdvaNwWS5XGKWCEDwNdfbXGrKEMyBzFi97WTDi6Xgwi8S81u3JQqTVdy7LmBHjECBeqHRodq8WWTy2VskD8JE",
  "key37": "281JfSQxkVU8aADzj78vZUydPpq2b7sgxJzUWVuu4XVtrrABef1YT25MCwV9sVGmDgkbbqD7uoS5HTAGMVJUuLT2",
  "key38": "5PqyYJ3GWm5yhg9p2Z1Zgd9fNkcULWqWvDVK1WhzXNTdDQXa6kAQSW3LUvTgQpr65Ea5mSchnD5PkvUs6d5TFUvi",
  "key39": "3UdJPkSQbk7a3CpdyXRFzA6Fwg8xHtwDVMnhWz9RT1BWKkjN68bASf484hxsMyKdDNWCiRdDkxVwJoJb9rwUb7ds",
  "key40": "2gR2faFkD8m9hUDXwBm9KA5m1qwYefT9h154zKHHUKWVcFycFGjXP2opBfT6J7D9Y7LWBvy4jzChFwFgecdHjjUL",
  "key41": "2ymuZ5JymFSsojcDKZYL9Nd3qxLc2TZqdRXHEy1yc2GxJKBjwUu96dCgTcnHZz3wUubMj8YFeocj7E4WFdxFdGFf",
  "key42": "54yuup2vJ7MezhAsMk5smbve8CN8TNZRxgY7aKABBJf1engCGucqS166zSBnfyqT4NVKqevne8r7AwWv4Nx7PVTw",
  "key43": "4MmFbf8AnGdHTxkRuFT37J6Uoy3uf9CQ9ZhnTFTNYh5dCC546nAF2gpBxEXYBxG7vZBgeUF25WZefaPj8AQuNKN8",
  "key44": "59CFP6Kb4G4LzdpDQgEyyQCbsQDc36dQGT8U9WFJqjDDq2aJ5FsNYrL6AtBeS8jcomotYtkHa24APWjRB4r91kSC",
  "key45": "2f1Rwx61TF1V2wDdqgMLn4qFEUhfZzEGUtACAD3YYt1HvsyvL1FrECX6UEVNZygUCuXMa24v5Xgq6Wudv4RK7dna",
  "key46": "5hPoKxQEaYJyZCLMXLWVHi9KL6rTFAm5Lr9efUnkD7dFpHQyP8eGVHD7TqPuhkGACvmUuCmngzzGLeoYAwUdEdjb",
  "key47": "5X95rnQZQ1XV9EhSEL9nHSH2UL7c9Hjj2zA7YtXcxWCZNmu6NEKQfN8qXUsNYaLLYdvLo5ijZNVha1Lb8KWanQxB"
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
