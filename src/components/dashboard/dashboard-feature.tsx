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
    "5FjRRCxNfH47Y9Y4twxBZPLyas6oMJpoS6BVAWhqSoTtjJrgXznMsHcWqiPCKFebApowjQtycNNrFY5CDmTmvWJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZZpS96VkXjJadwU3W5Vts8pJfakAwTrP82R8UZczeQmBkCP3FBQ7Xg5zQePw2vEUhuYWq3aYi5Tt2zAa3yRhaZW",
  "key1": "4qxwx9BuijU4mtTuXbNqUjTMhVfmgvccU4im3ingb6i22tMPeSydLSWucPvUv1KEWWHKUoS7kauNUrHhMzPhDrUh",
  "key2": "3f1JJ8cacX7Whe9Ae8FcQ3ZUJBYZh2mSkVahzRKXXdZTp4XVQqoL1Q3xByKYzBy2FxHxWgKEoQVePjrwStYLu1KD",
  "key3": "3uBCtLiC9jHWRNr3nLZvek2YPUkGLZp3mK7BLyRqQSaA5Zzhe6GMjAcvcBGQZ6gCqgUcQz8uRT2J3kWkXCubEnJ7",
  "key4": "2mXjcH1ubfDYxJdDQhFVnYz2xLH71uTn71D7jqLnmeqvukk3GKm48AJFE35Mb8fiSEGDu6BBqKV1j23GVAJWxBjv",
  "key5": "d7Bx9tKC8pVM9YP9AGtsvtKCSJq7mRY2dbBPmXQR2oYaLzXgyHuU7m9CUH6Np46hQqu4MnQwcvHNs1A1irRGNz1",
  "key6": "4Xo39HiKzXz9S5ozqM5edZugnxQy1LeF7q5b63cRUbeRgpsKg6VT8sxYTYgnGkX3JC2yMkzPAnq9hD7gsRcGdcmW",
  "key7": "5keUKzpqBJizyxtYTutHYQFKokkYxMV86kXRQrfbF8Cacy8vbb8MLFrix8kwCjJLnHa3deBwZ9Jg6doqtTxw7Mur",
  "key8": "2528FfzxpvU9j579Wa8SUiYweRg3ez1ttc2JqWM1dsCVXzNQFkhZKy2fJq7Cpg69qNPebvRXikmayjJW1bWiD9CF",
  "key9": "5Y5NHUWmPZjwY8oH6rWpovKoWNy5YiGQFLixWh7J9CpWgSnqqaaeTR51HkVGS9Grse9ZZDpTnCtRpyoZFQuADdPG",
  "key10": "3KojHBvdJ7ETgX6iQtUpsj4WtkDkvdW4ZextDK4tHnEjaxnKxKpYwLYj6rSYXT55Mubys2Ku736cPycMWPbqfY4a",
  "key11": "2D5eNT9tb9h83NXqTJARvEMgYfZuRcB9ddXiagfpEecP1dGpj5ZobWFZHX9CbgAt22829FeL9mZMeKQLrXShAC7t",
  "key12": "3kLkgW2wb1C2ZbEAVLj5wrmphQEsLEDD2nFEk6DmJebkbzc9D47YK6e9Vi5Z7mUYNFdYjMyPBCyMBcFvEQAoS837",
  "key13": "4RCuaQb3bRSJ2KHhmHpN5JBRxpLBD37iSZAKqc5BERjWTnseFB5FLML3ajwgLU4zfvc5DrHZBGNHWnCiNtNSkEKq",
  "key14": "4WhtbPo8V33wD1LPhorcFhSsy8ceAbdLZB2usXH5FvuELcvS63E9AtjvWcZa7mjY7vHdCdkgBfSEPNoyk58GmY6p",
  "key15": "yYLxrMpqPRMuN3zoZ3EkkRhtFzsck98EULabQwwMXtnNv1P89SorwSqz3VDcrMyCdA3Y6WHV7Z6YQZgbYgztbC8",
  "key16": "FosCcTZS58s1EMG1t5puG1Mayo8XhKPjgat4F9FRP9d7zhfxS4P6MBuRLuLP7EBJumngRkvFbYfTDZVykXxxGqV",
  "key17": "HmDJR1hm5C7KSTW5QAbrAVkL6WygimfSrkNnANYA9hUuuB34QizccZ8GWPx9SXEYPwBLbzvjCG7bPm7vQaBTczu",
  "key18": "55SKXUNcEcDQGXSkJG7i3wMHKZ5mZCzJEoB5EZMGw14LR8NSGzt5jZUJnxaGMWYQeJ3hXVwaJ1auoUxgi9vMVG1u",
  "key19": "64Mameuy1ifSoXLkJfMbquh9uCyw8oHwnstAdNGwEjGBPdsiMxbprWpNGAnxCP1qrSQnUmhDZhfTcYt4Cx5DtyLD",
  "key20": "43VsvD8ZgF9JYZRR7GAqj82C4gxAiTyWgGBPAjx4oox4CogHL3TgGxzhzWhm4UdG5rD4PQwAejov1abfRWuNudJ2",
  "key21": "orhjqeiFZeH8MDWa8AgkUzqrcG34PNGAtEVsFdWAdrLjXqD4uK4k2gTBS7qb1CMKgxxFb5gK9y4HoPq95T5Y1ho",
  "key22": "3CHGYQfw3sLtJJeUEYXdbVtEF5BxMUGhTeb5STZUdo8cxNMSmHUgkNDrk74tGuyQ3eZ6YbVfU6q3aHe4B1xGhfiS",
  "key23": "5jmKxu3QK1x6Nnky42G3rcxv1eyxeNjVD813jrGjzhGECc1WEzStxbnuc7njYPWXTpXJNUxwd7zocr41E8BJYkeA",
  "key24": "N7ZyAbSDw7hFQjm6ui5KPqgwYkm1Wz9bWQLpyVrzFv1w9KEC1tA2mLUMtutjBFFe4QPE8wefYxXM78AvbKNY2ua",
  "key25": "2JvUYHisfKaYSnFhK4A29UVkiawqaEQXNxXZovfAxyNEtQRgWGVeA8VSwzDCgo7HccNnN3ryNxRHAeG5qxrDApDL",
  "key26": "5TrnmLq15htjJtVsDe7V6jTeG5VUGRrmGESAttyn7uEhVwQRETuDWa98g4ZAhnf97bwWwUYwQwyJeYkQLDYKzwVj",
  "key27": "jn2CVcb4aRZTUsf39o1xyYChusNCCtYvkvGzDfk6mZDAmAV9d71bzQj52AXeTGVVmqe86gVAobFLNHXC86ddgkh",
  "key28": "4JMcGBvE5j32PoxaCtRnEC4AU4HmaKVG9kx6C8Cbgw3UZuZsF11ZU2f731BPF1rNg8uYzBoB2SWfDUg92FLxo5AH",
  "key29": "3dgJ3WyNxEymUi5E2BnmUCrTohG7rL5r1kA2p6cYUQRV51FJVSRkEKpxVb6zK4vP5sv5CA47BqUQejHxiDzYc3mc",
  "key30": "2zFBvYVBJRn3WC2X3pjAz912jZjSm8jswTjb4eUNXWTgfWKz67tRWKgocHxvy44EVGFE12VsSh7o6cCv1AGKQgUN",
  "key31": "5pNNyE5vBmYwXy9XBsqFMN4XtF8XjedG3HsT46EoEi5ty2oYwoAXxmwFCnDcXzPLRusFnEMX7g1vAgTpphBWvWi3",
  "key32": "nWXy6BD6xwxzoSzBZd3Vrv26VVcAj3XVky4YfjShcq4pbjpAFbS76K4GKdeEEA1tUNykdaZo15Cb6mCCxQpQPFZ",
  "key33": "4EeQ1uwfYZ6kfooM5ZmWk6oj59HckwVYh4UQLb2AuCwtCZVdV7CCNXhet1oJyGkXKHUKDqzEWTwVQ21sK7ip8wjG",
  "key34": "2JEKGnwNbUYoWfg6iiK1s325pxrkNPv95U4NyA1sHoF8B6Ke4BjhnrhHx5ph4KbVFHJ8Ah2arcie4jhwwLJwJx6V"
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
