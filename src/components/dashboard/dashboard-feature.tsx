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
    "EdWWoBRazmV4ZBabECqorwqLDvqrz4Dvw8ybS14AxzxhEjzpeXhMo2WXczwULPsMFtyZDj2pPmdWEwn5qumE9Vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BU9pCKkfnAFtgRxE9b2QYQy2X4UMPGrpvkpG4TCBYqNL9kSjn3UBa4atgXcgNJY99ovAP6DqdjmrncnCrEvuWtK",
  "key1": "48hbpAF7xEiyzPEtxAu5yKaSzRsQ8SK6APSe2ifx62VdtT3KHsDXpUbbML31ANNxvQH52RBiWdmDm8AUQHr1pfFT",
  "key2": "2V9DzZ3zw9FbE5JKmSqbRpxbwBHrVPQ4ENa5ZpG3cRJLQAtZDSBJ3pBFJGqytCVQvtyto5pkb7CbzQxYkpWib4nS",
  "key3": "3dWvkjUEiihoQjgYtZVWoYVvV1Ara7h5hBThw64yAL7U23SxTJTPyCUYs2VNFL9WUg1pTYao3H96z3xtUdm3YvN",
  "key4": "5MSFexVGFMvzLbHgNnVTFycw84qfvKHYkNSUMNaGs7ipDeJuhP9WuAqEa773qt12ioaz7X459b8WcZT32LTXUjCB",
  "key5": "2FLuAeGzWTtjkSXFwnVK35VKfeoJHbXoyLYAH8dqUcDkWYuVK7tBtkUmGnogWyoqEfceMP7oFcepqo2ZUf7uLJEc",
  "key6": "5op5jB8wr32NAqPvs179JGJ9bD7igffFP8ieyM2gcjzRBouz1jdLE8bBDfhU4rSN9nMJGcuWZgiYDpb5tJsWTP9M",
  "key7": "3esWPK1ZEmDtdLqLLbDqbEHCBWBdxGGmomMKzNzDEpVydWNwctK6rWRgdcXsApU8Uc2bNXkvJE7WDKnyrvrggs66",
  "key8": "3GTVCCWmbfm6zvpudfVF9MTQ43rtLncj2S9cRhoFtzi3KaNn2ZJ3tWYSR1VYW6bxaYEkxYajgopg8GKxqDoWYZSm",
  "key9": "UYENqSyYTyoQ3XHdCSukxw5mpDv4JEmBhwLXrV5RJ1hAPASDBM937mjN6gUUEwLCAQDBdQrz1TfBG3RaW9AW1hv",
  "key10": "4gghQC9M9cA6s65woiGkfH3TD23zHmaeuYmUsrBgHGgdRCrh4AHmMp11GcQytcfrU5Hvm53eHhqmNNxRKRF1cvW3",
  "key11": "Qt1rofdBtupydjMGLVkxoKN5j4P6mpzmsFPmMeBZzXDro5RubAw52ef7ghq92tcCouVBM9gThEfzpkmpquG85G9",
  "key12": "39DChy7jKQ4ip41nthYu5diBEqeEsteePVbxfw8K2Zk4U5eCPdt4cnm2Xd3R2juGXCXCRUr5pauaHKu43eRqFAhV",
  "key13": "2EZAwxjaCGZgpUBxk6m9sQFL4RQ7CBhjfjZVcL7x3QQ5iwmMhNV7i3gGPYaWwo8eh1BJaFe21NutofMkELUkFJ33",
  "key14": "2fFXHQebSfz6AxvESxW55SRiaoLoXEA9H5zCwfRyAozYdxhjWB9B8Hxr15yZo3QfTxV6rU73MjgmSDYZLvFhdyZx",
  "key15": "C1BVodFeAagCdh4VrSNTrJR6zBAStMTUAHVmVmrMEGyE8rXcfnGsGFvqXTiBvENqTSQTsATvdkXN74dZrBVofTe",
  "key16": "3ELXvnKBoQAZHXyB5iaBRnEU6F1upFhRqivAhrvkoQbH1H7imaizhNaE3VEGRzu3mHMVTybFuzB7hM4kviXt8BgC",
  "key17": "4JpznBqZgW18s4qvbSipHkFUyD6Ti3sTcYfgKH6Stq2tf4Dj3t7ir4WTqAPXCkB1BmdXdqPzeGgseT9upHBtvX8w",
  "key18": "3zWmUxw4zK11nNS4W5MwLVuE5xeypCrtgnWUfdCkTFrfFVBidrwoAijLio7dpAtudwaz8RHcQVm8CugfKsm5F4fM",
  "key19": "2jiYGiEq8Qx8GeGMNA95zLMPP8LFMoGMHhZVgUrqyxQnSPZcKyaRDoyH1k5sjaWHee3uAYFmAG87sGYiasMRCV7W",
  "key20": "2gTkUYQpnuT8PvnsUUycSpUbyYzCtB61vM9XRDkEXBkm8X6KhwvrgQTHBbJHwxstWsRpVAXGCwCvevk8v2wmLDz5",
  "key21": "5M2zNTVrBbkegKeBJYg9SaKEX4wDFSHErCc8AVYCJhwLQ1xXET4qaHNuuiWNpEhbQvcdYrtNxAKP2jr16DFaF9ud",
  "key22": "496iuHE3LEwCTmZgEfEyKeX2KYhShgJegrRCpienYP3EBwiJXMr4zrxbPjHQe1cfPBBoh2m8KNE18w5UN7LAXcqp",
  "key23": "4LyZ3EdcBTyV4Y9g3PFYjxZfstDgqPEAQQrwvNKjXR1DZumgWgZBijSsQnSC6kxT5VqZqmKshaLVwtvQtuxQWxiQ",
  "key24": "3HBw7uWXjCdJzGN2V3rEUAVqnGb8zfyMsWL1CWctnidvp88yxBUHCdRSWNRbAbVNP6DnTAFLeSyFxsMqNFRvir5f",
  "key25": "2Lx8UqgkGfpPnFoUj1jqpEUWjPgEJyQjKdYcCwiUv5r9kBeLgiEo8x3JZgTreiRpo24LqjxcvWe4rWNJWwHNhArc",
  "key26": "2euB4osmSk3TbyVbqupCghSuXL5foVeEdxWcrnHFgpRDqu9u2XHzDnLb1SJ82b2GvY6HT1K8FLnXBHuFeyAzAx42",
  "key27": "3zfKsTiUWx4AMkBMbXt1s4kC6GUKyHUuWCS8GoqsH3osA7YRU9cu8unGPvrMqGFYir9Ea9KhSPbqr7ddrSCi7Kei",
  "key28": "5DS1dGs8z6sG54FJ51NDnb7mAt94vJxntRyiDLUA4paq5XzdvpqBJV9xz8qMLz2uBrSzHk4Pdi5Cd8q6Dyx3jpUC",
  "key29": "2ZC6TBJYpjvykaKUw5wmKb7PkbBF3DUpKLi977FaSkqNKNwZcA7CskDisMEyCfvZ75SQYyYvvwuwjPVvwg9x92Df",
  "key30": "cawXGZ277nZ95LmSWumcN6uoxqEYNhQHYBp2rKCLZkC8yadGU3UepuFMdvtmhooSKUEYWH5sH31Zw5LYN3z3qUH",
  "key31": "4wVEkwVqWarpqtXMF7HGXXWk7dXm5hzC4M9gHU31ZJNuxw73yH2ugs5vJYC9tVUeqsVA4ruhVNqdfKfYG5XDjLph",
  "key32": "nmuyxiEwgBStvH1RG3YBkAp6reeoLKspMH9PkEJarntjyJPwAhx2NFMz6ZE8VLQaExJW2r4vGwthLavSssP8u4y",
  "key33": "3HzwZ4CsQeqDYH1FRmwUSFgfrSYUQKFw5JnkNij8d5qHTFcaxe3sTWhL2gewB2qUJecAtFMie1Vvh3KTqYxgkW9G",
  "key34": "ns9WJj68T4KWDyGUTg5xArhxf8RjqN4ViGZV5p6BPTrsBHGdof3bkeERYrZdnA9gbosX6725YgHTDg851tpm8rk",
  "key35": "2MZmxL3jX4TR92Zbuy6werjjQugE2HfpdVcK734QTaMGtyZhRqNRX6DFk7h3mHvBaeiMzvyzYn48YJPV7DZkiFyZ",
  "key36": "TCAn5YAfs2NUvV3ACmqacTouLkurVZ9G6XnzK4AhZaDf526DL3QM7SpZdnx95pzB5StbTg1KHos9Yi76zZtHUoz",
  "key37": "3XGaJwphxvYbRVQjhpnoXztsT4bF5aLTHWwNuBe6SnvqaHaUuvnUssAVPy9Tp1iobSE7yZVTU7kdDX42P8f4g2s5",
  "key38": "2EGA9HKGbZ35XJTv8ZyCLqDG6mdN2mS6L89GQcD6qrRGSTyhbXwFkKRqRxq7SUF9FnZ7vwtUB615Q5p81PKvKxNz",
  "key39": "Wa7mUUao3dhBhqsDPm8QJMDpnUK8dkYHU7T5Vz2b5fLBo4yHZWDZRUkizh2Lndv6tR6vYXQFEJRezTRMt3T2qZN",
  "key40": "3V4KJeWEXw7vu8fhR6kiftuTXo5cB7rTWrZRt5cKNUM6fpzFUriy3HN6vB7qNaQLekCJfoZaa1catFRqFv7mQM77",
  "key41": "T5TdEE8o9Ah67BeCDawggbBjw9A1LT32adnTikKNppWzyYrG1cVmkj5qPxELsQKdhTRSPgvtNeqEv3fNn6yAAb9"
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
