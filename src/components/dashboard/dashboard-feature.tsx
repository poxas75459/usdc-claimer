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
    "4jyWRw8pRmCKjwtwZnA6EBUZC9dLtpsXRUjzoHZwxG1oBmCuGDDfkueJRgo5WDzZRJVF5Eoqz2cpKdC3h9fcGdyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cn3TRftWQ7JZdxNyz9g2XJuHVecPZw1cNQXaZq51ryUn7icH9ntTaxNXyzM9EQ66QNeihv94NYJgJykNroBTyZ3",
  "key1": "8pWkqQmQQfT6LkCjam5SQ2FWPJf6a23ooxwaJ6QdEzjoVwzdaJ1t6D93e5ZHixdbjo3xYe4LxQjSsBKCmfsnYkE",
  "key2": "5PqaXfNrx4zoD9argmnF1Z5GqDpbMDtWvDbHqMHMkpdiMcdg7FHSanCm9oGVTJQQ8CBDySbe2PTQGPZwDZkBrAar",
  "key3": "4zGWPsL1V67uYJVtTKSBFH2sfbn6hGJSDzwY1rgaAoR7oyPyf8AujvnAh7vBz4Bjum6FFDNauacgHMSfBpZS7P19",
  "key4": "4a3DK8BKaGoHmpEjYc3vRsaQqtHsjJmjQZMkmYsf8ipge3fywoozKQ3RhzoiYBsTQ5pzxFyCDdWnp9HYEmXPoexA",
  "key5": "tB2oQgnkaTUxVJMeejPj4nBs32AGeEada7jsfU6hABx5mioZdvojHcEn1ST2FKSSGE9an4otwLWhufYtxa4U1Jw",
  "key6": "3w9v8XekBo7qqS9oeDZ3q3vxi7pdLxjaE4SUgr4U4B7kECFP6C6F9GwszT5rMjkUg8aHaBDT2fo9LoEQhS7A3jcv",
  "key7": "aQM8LNWjwdi7Ga1bvqGmc2JTjWsQAVccMbNCy7KRRe7FHh6fgPNCWJYFXZXZgwqfKzyzGDjtJNyfUMJv5ywEwMu",
  "key8": "29pyDXabV66TBKUf5h6GSc13VbZF9vKssza7F2R92NUfUSYfyoJne398eNpBb1B3i1JbvC295h7uepu8xtqccBJ2",
  "key9": "51eF2dnmE8VyjRbrinqrcwoJiR9S18you5NWD7yfXLf9fcWmsQR7nPzjcgCTNaPXNB3168bPaF1cyjXVQr8kLVfK",
  "key10": "2kCLFn8jRCTLYz4FzvhSETwcK8TKN47kvLbpViGLxhXdtpVGkw3fYQriUpbbokzAHNQo3L8Ppw3zEArvHNZeyJkq",
  "key11": "3gvbaZsveHKTtF1sBnJAaLbK4UnL8oP32KeyVHgHDXBpjoVrJvcdC9vX5Mg3EmZuhLVjry1CXHyHsqm7aaFzjH3X",
  "key12": "64CNYXauzHdFux15NoaYenCyZCMktkfRChWEt5AVfb6AoUMYvx16N1YPi8AUcmkbDx9vKpPyVZvzcY8VHpdgHCnW",
  "key13": "48hwGvhnQq9Bim7UgGazJRe2wJoMHu5eSnu6tULGLhnZceuFw56uo3rE2Hw7LckrAPBpxqk47UT1x6XMUocKG8TB",
  "key14": "5P2URMTzChejFyw5cVqK2aSRX1awQP7Q2ofbfvtB347n1rPzP8vpLYdGJ8hcbGU3zQNgqeP3MYp9VjbdxGXyep7K",
  "key15": "5r1MWLXTWMAbdNzguJUxEqFJVeoZGXuQztiJs46Eva83v1rhY6S6uGwHAWm1knHMF7wBb8kVzkhS3RGyhacrFUAW",
  "key16": "5wimHNaQ9KVVyZNyFedM9Gf91UTXXNRXVdwuFhdzKbQXsPUHYiHK4P1J9WeqopJGoo5YVJW3RzNh14dPaKgcpefC",
  "key17": "2wWaj3KBHrnZwi1Tx53MQvjbiCxLqPksCz9KLy12EG5NeeNFXeZ5HPZQMFFfKF74Er4qhGZk9rMJwWBJJmgKbdW2",
  "key18": "5SSXmjrHqsmjP5fEBpeuuSrCU4q6D29dW73XSFbGw5gp7vRMLYztXhq9q5avVZ9khQWsYjxmhB1rETMFegBK67AV",
  "key19": "BWPpruKShHj54XkvFzVjfUrLwAPa6tZYfjDvHdsLjxF8jwDNruKD1EZuWevn2Ky8XytAhuad5QYn2eVQgeu49MH",
  "key20": "4BYeQDut42n5L1htXjivdoLgoxcj6bApeqmS9sJYL3DvGAwHqfUEWgyzaLiZjiRUfpUBJx7384oFZT2aJbpKQWyU",
  "key21": "4EFuKwFVjZrDY6EEFTvVMeG6maqzR3dCLeCgWK5fn5X9JNdVbUuywyCX6dCQMZGbF5oZYQKu6BAd8T5v5ZhYRYmT",
  "key22": "51oaGf8xFADH9QnpoXBqfMnsZzPMkLRcFLG9DKS46EsG8YDUi8JJEMQgw1qZU8DXYjyBSSqPAowPvQFDZ8Woq6Cv",
  "key23": "4AwWFDYboFfs2WFQGwJ5u7wJHTvpVwQnXdMg5sUGu2VKepUCCNnuhf6mQBdjEsbtsHGNatHa1LqcmcubG8BUW9oR",
  "key24": "5dZUc9JoWwudZREqfvWW8GuGGL2FYpi9uX4w3WT1cDXA7HpsnWtan915Qon6DrwY3HbremYcZpqwhtzMh23ub7wJ",
  "key25": "4zCzDyyEpedBV8BBSca2j5kYtchbtGnHdmM1NFcisSjAAuwEKMe3ws9EUsDnEyJEMytgygEwCnHLX13pUxBDrzFy",
  "key26": "3ZxBcGPzyfSdw4vpzLRFvJ98iaZFCtMxWu955hzgSuyZS6CvkmuukW8De1ccXDmUsKGFq5CL3N3Vx7S2rx8wuKhs",
  "key27": "4tVC1D2QfQicNnpnA2FyCxntRktzcTCz6oQZFotmD4kEfVsaRYZmgA6UXCP7pTRHfQbuSeTkEKn34sC3SF4LeDQe",
  "key28": "3Gi79wdQZv1xJB1vFqcqUayY6Qa2N4Wy16j7UMski8nhjQ4deW6rckwE9BADzbjfpbd33UyHCRki5UsdLusmVC9z",
  "key29": "5yT7pUKS9Wic4zfgbLVCWYT5EZiGrbQc1Bav34wqCJ8tw7RvHfrfx4hw2kp9QdpfBWw4cYBaxFrXzDb3FmHGMVBu",
  "key30": "3GuguMfZcyvBUfyFmXRVPcPKu3AqqsfFZKtVu1RNBxTQ2ufiR5bC6Hf5goBX6ADXPdp7sbBrorxEpqbE93GAGtZ5",
  "key31": "38RyHUNPm4yPtsRiuyw2m8by7U1gBaEtkUTrCXCM818v5LLt26fYeMxLvd8X1gnb6Vp3QXuj8crEpKi3p3Az4rRs",
  "key32": "qhmBQDConVibfNXPKNnvVTAyM4qCxXrsZow6S1nm9vcEXw3BjPhNqCanuWNXC2YYS4XERByAHWuHwefdce4G39L",
  "key33": "3V4AoCjhPLBTrb2MQESzaBQc5E9wDz4jcdLUekq2cLARiH6vvJLpCBRh6bXUBRSzCoSYSXVYuy7bib6Y7aRCzWdA",
  "key34": "JMZ6cc9Nidm47mnQU81yawShHxyctY2BfdnczBmCro6j7SquJ3nzaSzpd41Kb8pzp6r7TY5iKWFS1QEHusvCTeu",
  "key35": "4tCn1FyDMzSH59PJu3TUZKABNb49SiK3f13YRUNyGv5V2NNKkZ2JxiebXbc7T6bCxbdY7wLCtMGh5caG9DH2QdHL",
  "key36": "qB2DqgJCTbvLP1BM7Uw26PLMoLszKEwXozyqUxEBzog7a9aXE3V97jaREzDMC34iu1eRnpzSrJmbY78VVxVwb5Z",
  "key37": "5GsFwZH3bCsfqotJzT13aTVNc8g52zE4CJD6CpZY4CvsnzwNCJoCk8M4Hcy8LbBUnHBsscfC5hkbg5VrkdA7Yv66",
  "key38": "22mwapssW54b4QD7U3f7cpUXc46mHHpRCqnpS8oSPBKrCwu7gGiCxjJri8UmHU4Ln5UyWpSkaJYgDbJcvXZXaT6q",
  "key39": "3aup7CvH1LvM5HS5TqiFvSiAz4B5Y6yAbub9xo1g4wCFD7iv5ytnMT7MpcVQAVjsDSrHdcjy6KLHJuE5oV5zyPNH"
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
