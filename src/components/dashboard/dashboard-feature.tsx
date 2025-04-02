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
    "2Wf9gUv8weio3WGpmy1aHnd9xMtwFFd9nSTDQHmev6cyjDABPgYT83jdnLBMuqQ9oMEXmrLdzXmvjC9RCroLocVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "84MtC5vYtHt7wHmnBYuCYnipu77H5p6xGf2V35Yt6ZYFUtTPd5581FsHh1AxjMNJzG8SUNUAdEL4FnZ2K7Ahxts",
  "key1": "5q12fuWKYPJsbfg6qgGP2psomnhPdXhEMbGWkYAxfMN4Xx1biLFgDqZzWN72vLBKrqvCkTDz53ZNFvMRsjr2msev",
  "key2": "2q4yrUTJw4w2Div2US1CNLqFHri1JJrF74kSfYbhbgi3MyFNdX1f5yiUAqV5S4pumPo44VGcA1eckf1fv1aEqUGb",
  "key3": "3JQT3TYEBH1E1jnDqSgF7TGXBivnWUJUvy1Hyw7N3mqK6wZrVb5Y2YCHMCTHtN3iWQBzrXatrC7R3sauUVxQcA7t",
  "key4": "2b4TZZ8zf9tCi4LsauYPTTgYzVNfA7zEF1uaguZeRd7obxzmWu6uZhuUc67qQ5pDzf86yiSeMoBhJoSEqhzFsKTm",
  "key5": "4f6Nw8VkAL1Dj7CU79QRVB4vPVt9k9iWVrwN6sKKfVaXhu3KayMqXAdV119ASCGc8WzwGkjYfQV7bJfrcEkGVq49",
  "key6": "2aSqeEV3kZRBCmKvJScfBvk3cGgwcbBHxGicKVJJivXVrhxLb9FtktCMF627mj9T58fYkYUjfkWQ5cHcSbBT8aXh",
  "key7": "2BUxeBvrMDbxQYPudhieRbYTHoi9cxsjjmE6b4SogiNs6LoNEQxTEja6e8JpAYKYzKdAiazm1HoTzMHzZkxYhUhw",
  "key8": "4H7LFeJCtjZHdptxz2Y1sAukuHpxuTyCHkkYDRFgptiRG97Gz6daTNerC9qcdbBxyELpsCGsALi7iTopgpJJ494G",
  "key9": "4PpZuYZf6UtVVh2kQnNBiHPZM8TTkx6JstF9fLNAZ5f6poaKGAKMSmCsVpKhHp6DqKeJDuLm1qnw6CL8oBxWcoCD",
  "key10": "FSzUx2jKCAmsmR1wUdEWAK7xAESAxTt2vxi51zJgFjARVgpvkJhiH77FcMZQNysvHu43XU2KW7BewBa4KcK1Ewz",
  "key11": "Rs3suG6KhLEJ64RVuk5rNbb5CjWQEiXWzZZkkDFSUzv2cLkFAgXo1DwF6Bs5CtKnhSgH39oqV17JgfCHk9r87pt",
  "key12": "2BiykN9NCRHaLTSCRp62XA8xd8YmqDQNmxMqP1dXMqcevnHvNqP5F4m2i6E7Nx6TViHY3Wa9nAKVqsTMXehqYyXP",
  "key13": "2Xa8REDkR7W8ryXzxLn7b3oGMkr2hf1CKZcGP6quygESj6EEDnjradgC9M77SXZhQjEQBvezxiCDtGKo3cS8AJYW",
  "key14": "2vs1ykphpu6SBwjvDQBAiaSTp3XUqv7uvqBbQCCDqNB4V8Y39SprPbDVic442vtHraMfnAVnS4WHyhQae4vxmtha",
  "key15": "2fUoNeEpmQ3BZqFXYXj2exG5Cs8p97JPvpGrGMw4uNYHEvoXwH6vNYcE6BA1hP4ZWfVXb5devAxfc1UzPig1cwif",
  "key16": "4sgGAZuDrJb7wdsMc63uR35kAJgovCj8impMjyidTREpgiRy9P8wMm8qkTKuK6t4g4MzZPVorrmgzsQhbf1Mg5P4",
  "key17": "s3Z5W27Lttd8p7NyeiEz2vmNiFKZE5LLwtv7wKNwEoDWJwgzEs8fMghjoMvShoY5kCMkE773pt8sYpoxo2uG1H3",
  "key18": "5eNSt2Css9xrimNutqEBmk2dKfM3j8TeyGwVdZ4TjxTFDTuaY2HjYgmFpXMtRzL5qH6cVXprKXf6vRXYxrJ5yPef",
  "key19": "53uwU6p4NZHKD7DyQuMQ1XmyKL4dVSskof7MU4zJ7ZBv9ZKmGcHf5wLnx7ZT5mqKCyTRpJEBSFZaQY6j6YCng7dj",
  "key20": "4epFMWVf3D57hoXdBwa9S4NJRLUFkLpRh3vPADKEqPjMxY2o6gBPZGhFEeYs4b3w1uaykhKcvM5vWQCEMeqGgLyA",
  "key21": "MwBGWbwUMNvpsqBBAe8Kv9x4SCBQKdFNhkyfNG55TTCq96StQ9ddNVW7zQai1aJxK2w1AKrQKcB7aAtbsJQ31YW",
  "key22": "5i1cF9QFTyi8WjrXEMDXRpfeDX5bDFUhtnAa799BCJZKcfC6qn5LKLFxNG2zCYaQpCbsCTqZwTdNTNVpioAQte4F",
  "key23": "5neBPktLnodu3W9HTGopVhqUsTnekJQ9PqxsU6DyVqh5rahQLq29ZZixzgXJiEZ5LrCKXjKSXzQ6zegMhGyWuHZA",
  "key24": "4VbrkK3GdLKG9YbMWQzPR7fY4GfMj2kknLkz63WdswgLPCXMrDSBfvyP8BBtS9bv6Rg7EnCm6FsxsW9bqxUrXEtg",
  "key25": "26W6zy3jZBwaqjfBD8SMvrZsggLuQ7rU9Fx5w9yZ5nNvv42Y9aYVWqXgEXbCNNgchxTgMkJuq4xY4cDPG7MfhqYG",
  "key26": "23jY6Qq1DEJH8h3irUWSpJ1KMP5n5inSQW5gDmRxgCteQWYDP8hAt6k18SUhdkeRrpc2mjNAyddJLvpX14do4EDE",
  "key27": "3vxJxb4ujgzqzaX5JrBCLbcfD3M49D9Bg7emVomZRzS9cSjZbTJvordT63xNzWkt3Bfg7oZVYfj1ebJN3wB2HwDJ",
  "key28": "yNeE3i7a55rn8ZE4e5k1s7ZZ14yqQMyLEUEgZt32U8gd7wqRvcV6mVR3iTmhVn9e22H2A9w8J6fPGQ3mf8yApQS",
  "key29": "59Hae6xJ8SKW51vKVp3VUMAr7YEdu1vi8BivBAu6TyYLWWHXbArMfXXeA2U2g2KLepShqv591pvVHBPP6MnSKXwc",
  "key30": "2avcfJHz8n6ox6ZhWP4gG26JpMqjpBJJheTuFfL5idjrk7SThWATScKWwNNJb7xRxM79pbeVLDbHDx7BMPevmgpF",
  "key31": "3rsXfMg9bq4vtt9XuPDk84h3MevMvxQixxnhikDfCwDHPHwQXewLrGE5pkyfz6e77mFB13XuuTELfN46KzjPc9Qf",
  "key32": "2aSMBiBnmPwAS6ZLs8XbQMc7uEhpB5s4K6Jz7A9B4T3eCqyndeW1sxP1HXqnCQfy1v7Zx1gBe3AsSXzJPXhNtoX8",
  "key33": "Vx5dT7wTvT2We3cDMSi1Ebk5686omQe8iDXayrLmHMjPMwcHJwaiFjiEKXtRrs4VDiMbJKxJgGZuf4TasfCXRxC",
  "key34": "4EnRuLs39EKripXUtzVFe4b3ARFSVBJPUsue54RzHNgYe5i8jQqcEoR7TX2aoH2wr2q76djkjbR3pfw3zXAoCQL3",
  "key35": "5t5JHWoAx9a8X6EBf8TwBrUnWcrriAV6De4Mv6Xk776ypyp9mDQcGbFcPNP5BeuWXsVioZizzucZZ5rMZbkoaTMC",
  "key36": "3D6cicEiPvg8q14K47b8N1Myd2bFMK4X1B3kiwecTmjwqkKoUXcu6MZgRqBkYmB2v9Z3j1dYUoCqWqL7HyPXsuv9",
  "key37": "trwM8NepTegn9JgxESfqo7vUCLGec8Vd4LSVUsjsBizvoLjPS3UtC9A8jewYfgrjedcNz3TZxBtRdpxs8JrXq8c",
  "key38": "2ZBw8yDbNuwgPf1f42on7J1P7JNES4uyGnHqfbvLitFkTR5bDVMyc4Biacsx7YGZ8ZtQoxmruqKgf2Qom4pshmhs",
  "key39": "661spqU2qvJfdY3s1vQ1rVzk9dAAjfderH3K9e7kzva2pzbYGxYVFFFooizT35TGDXCNDKBzchk7kN2ijfB1hBU",
  "key40": "paZs4y97tpg8CQmkh2AtccgzBfpHHNjCPwjofrGdsAro1aD2VZFeNaedSpBYWXgDTKf1N3fGpqiw2ECuh4YLR4y",
  "key41": "4mkL7ELektyxgFtRTLE3qxSB3E4QkhMH4z9CXchi87vqTTUT2NmvGkLyqrbixuE85ya2rkjKfhVbdSdZuftHxDvu",
  "key42": "4i93DDSuo8ZCWJFKEgZ2YXs2WbAGYroKqoCqBtrYvF3o6CDwLpoEjpK1hscKSoasWj55YaP9A767d1qj2nUXawrW",
  "key43": "4EaV1skeZ2RDdDnLFRuyaxmXCuH4aPEqkJbTU1XsXqLNrje9LtYr3iwjEf7TVZPYPRRD32p4ePRe8gxgsJ2bPmTB",
  "key44": "2o2QTecyCiJnwWrtCnKKSwcgef3Rrdscpm468QkeeBjN3pFvTEgnYMbALcAvEvnCN4ZKte994N15QoDD8YtDbrHC",
  "key45": "5dJpzJGvcEeiYFfATkAZsHCeJWn1T2ZijiZea36YXa92QvKxaGaFfAVYr2wHhAPTysxtGbmmezszJpVoPFp1Mymw",
  "key46": "DsCdXPfCGDiRc62Ae35VV1soLoN5ZZ7p6TmRD5qxUw41om54MF293uSiB9hWwTkaEnwu7NXS36aS3nKCaRH2voz",
  "key47": "4Gwmz2mkxgfC8gd4vWzrhBZQKQ8fRBvgcUQhZyJoLEMXWJpYeqAyvA6JHZCmWLJvZ8YvXsLABDvhdHxymvQXcbPD",
  "key48": "PvkmyBW1ySYaeDXoJbkYKWmqatPawhTQZvVS4uL1F88QfxhUQgCFNBt3JMnASsrL2PCKhTr9EhDw4xrzUCxetEu"
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
