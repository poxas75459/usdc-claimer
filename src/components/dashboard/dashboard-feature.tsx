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
    "4t1gCvixwKARrbr9W2vFymrP1huvoEeW8TBZn84xCaw6fSYfcGZA1Vz8R6VyxqYZj9j47CV1PVZkpKFf3gsGrD5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nbFizoqfss4UaNcpWXL4gTxtErENzSP42ZxNuoQS7iuTfkYonEJMFoYGoA5bqzWku5UR7LFfJRMwQhRKn2Ksmvj",
  "key1": "yUJiChesFfSXisTwQC2nDgzAwtkF4D8g8x5yMvDccJKtwPCu9R9UcuCotBDLgUpHaVDD3WtpZd9zCTFpHGGiN4U",
  "key2": "51REzhSQeLiUu8h18S7UDjT1yh7mprLDHwhHCaqCayfqnG49jpDqS8PV7QB5iJX3x17Ybag2WKXB3UkLHrtBMSHL",
  "key3": "8dNb8B9D4vTZrGFsFgwMa3eUV89KuZa5GwHzgfo52FJ2UZa2PuchGNXWXQ2npstdLB7mR8M7LLnD4cEBdNHeXKe",
  "key4": "67nmTM5Hg1QZUmf14ekWwYaVoct3ptFKgYpWVAbXSLepwJ4CmA8Uwvp7upD9A5aQbcCRfdcRoYugFRXq1g3nYQHj",
  "key5": "s3M4eFJEWhKkeXVVKHKYSePhdNkcphvGFsoNzAECVko4mUAFL9UbAHX8kxJ9D3eZWjnxWzz6JjCfqTM5q51LaN4",
  "key6": "3qwM4N8esSTRxnRkBZvE4ZL3KgutNLMhWCy2nmd6JSBxPdrKFJ9xMpg1feDTSHNk5hJTDjqFJSbmd19DyQuEpVTh",
  "key7": "66NTpANczYP1XzhjVGiKxHgFK24sCSdYcpba5QWQ24ZMivzEx67B7Y5czh3KA9RpztTgrMr6Bci69YiCN8iT3xHV",
  "key8": "fNmLqzgstMr3ogioZ4BcWD6PMsnzMn8Fwk8NTSjQJK6fuT7Bw1CSrNTaamckjCb6Qk4U1VdbXtQESi7VWhAqPwB",
  "key9": "dZTKddcvcXrDp4gAEZnNGJCoMHFcpH1HVLvvdHiHEJQYQp1XXWYr6rBSvwo5gRn3wTfPRGQkgHBEWYUxkcvatmx",
  "key10": "JbR87tPRkyhnVKd6PHgGiP449KXUYuzWa8bhS7uF1hm52vVkwJAnuLn5Gi1b9wvYCsLmXWmqHjrL1dezzGn6Xg9",
  "key11": "3xN5nfTHKvAam8ke92iHKx3U78VyFEHPBrWimEnpk2Dwd3ZdQq4NDYFZggmmx7jsyizuoGv2Dkga9cd7xpLfoSrp",
  "key12": "eMYwBn2irRQe9sPaRasJPZCZYth5R75M2gPFKqg1zo8pi2g2Fp3CxdZ2TK9X2kBuQyrnbGGEkufBBzfTtDPXTgW",
  "key13": "5u81Vu3K2JZFL7h3swBqcdg4HFM9DMzu9tBLg3dJ9oE1n8sPaQ1Dw9buEvXiBhyr7rUduSmjskHhivMWbzzs9p63",
  "key14": "3zAxUvZLmaV4YWna8r311jW2zrfPXw4ZYMBSSftEyxZfmjmznkiKfUpvY37fzm8qNAgt6N6Eq5uFfSQagdL5qkpz",
  "key15": "T8jL1CXtJtsk4XCy2NaULYmZGJagDdvY6jtoRymzrZwVyh6WokGXT2duRDu5DQaxJFRAi7timAjWPpuuD91oMPN",
  "key16": "2Qe3h9E9Zo3BDBRmmc1T89WcWx3e3jDx1LBX9KdfG7QCoBkYhoGhn4uKjGcLQPQ9FAsqfHxLR534pAW8BzX9Wq7F",
  "key17": "v2F13dxWuc6JgedTy1g6vYDMbwXVLdc3LFJbfwHESUCDmmotzp4tQtzfB4xQnJi8rY9gndpi7Teym49RucLVPDx",
  "key18": "owiH39ThvPmMQMY8MHBNAbUVkrzmRHtLZp7wgRhACUFnBKyKYiQoaYCkxDBRKwAUGT9woMgqx21PxvmHZw6uind",
  "key19": "2rQEBK8mondHh4qY7RLDUEd1PAHAycxthRzrqbT2BvuQ8sxTR7p4poCNcyQDvMc7RitUunmwwZSgt72xm542Hk2P",
  "key20": "2fxLfqx1XteHhFK2LfNCQ8Msy3fp9oCQtLZuMUxQY1rPi4xqRPZDyhpfP8ZbjbcX9qoVtGPAFbbzURY27Ah7MvNt",
  "key21": "27nUjFYEwXACy4DuCGgAn98LTjZMrTbW5Lj6suXjYNQGfdRkQCxzCAud2m1xpq5FLYe6pPtMPCGpwS844kQ2nEwU",
  "key22": "rCifMaqqH1CCYofg51v7iTs8Bs7gGV7iaSUSpLCr6kpZcTzzinMJu8QNfKQRp3wGfUoxVTAhNg4T2jygnPmYysq",
  "key23": "3cDYQ48sGndD4B8DxdgJccEmU8znretfRMAdWSqrtfqdsNBnp2o2bQbLqQhHx2gMbW7mD9nUC7ZynxBQvGKBmfQX",
  "key24": "qzjDaavW1jN4SUjMBB7DNwQPEqQxxaDn4uq9DMbVhxL9Y4fb7t2yCDe3wAXioD1FeBC7idHmfUHDPE4WqKGCtPK",
  "key25": "ecL5zP8E2eietb37VvB9Jett9bcXuuriNeMzCbTq2HkP1KvqnRtRhogJR3HtuPhtE7b5RTvZu4d1tothGzwxV1q",
  "key26": "bNHqFXp58CvCojBMMfpsfJDdjeyE7WD9JbaW6LZQSAnngtNN8XNHHYpJZ3RY1c51gK9qyTdx5q1W7teSFRoTKXg",
  "key27": "3mTGjxYpcZ8AgKYPiVVJj83G4AuF7XYDbck1NeZGPDkN2H1km9RV3JzSv94d1ZByA1sFmDyAmm9dpMZztNHyxp1n",
  "key28": "4u7MU4BQy3SXF17b1BWCbBFH3rXN6q9WEgo5mCRgriWDt2tncqHXeiy9tnPUSjWcHAWpf6u89sgKfcNgspqBAyxh",
  "key29": "59Q3WEi4YiiFsAFgVPCYwpgesKvuvy869CZmu9PvP56WHmqY5DJ74MRAjdc2pTeX674iumtzcJgU6CD6be4rLsDF",
  "key30": "3nTd7queKDP8MGKVfBZN241CvjrsVri1X4vGx5xV3V1rTW6quCuVPrh5JJrNabCrmVq2qCpanDJ75v397LpRWiCT",
  "key31": "2XNheCRigNaTewZWGGAfnzKWoWqoBhVrhQryajXjdKNGQQmbntWbr7zRYHn8VfevNJgL4R2g96ugoPQStDEdeUkF",
  "key32": "LZVwsLPPnkC5tWqk9W2sC8YrqJXFjoBHAaiK8GBUFSbr5UUmJXpyzMNv6Wtce1j1qhmwhGBmczWoAVYgxYMUaki",
  "key33": "2KmF6Go6waN6dY2oQkmVo9QUVZZjvAZGvZa1Dc7wzMWSPpEPApPRHGQuWJWXH5nEry27j3mBqTnAkvePX43pR4oA",
  "key34": "2GowHgb2632dcZh9ipT9WSu8C3w2hBj5eCoB8NFtybqt8wSF9UPwjdsum9Je4yTB2CUQ7zxTvjsdpk2rmzVremcq",
  "key35": "56jbFiUeuNBmdExZinPz3ujKyCtuPTnVKGQDytP6ZcvsSfi4WS88U3tidoCiKKK1AABQCeta5MBGXQ1ughSvCerQ",
  "key36": "38EKLFXkgWZLYLgtbvsfdk8gChfenfaxt19n8fjCNEPnArcBaHdN2E4AMZrjfzMBczeiGkL8qyLLNgR7PRDNWy2E",
  "key37": "5sAjptwFjVJZNLHh3izKptiJhw7nctTSptCENMz9ewxSUyCCnYvfjjV3cNhsUUPt3rsja6czxJXSES7pYAa3i2iE",
  "key38": "mAKaPxWPAiKzkZfUZkStmsMq5BbqxcxnPjeZGhbx7rsboNQQpjETxTESPoCAHEsQUmhBEF6EAZ8HtRmCGYwZB2X",
  "key39": "5E17TLsJ4sM1hwXUDm5jiVPkHoKVSDwLGDzY8fgem58jzMMu4Q7XxhTNxZwUFyWKLYbfqbbw3ftykNQvcQ5ZBuG5"
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
