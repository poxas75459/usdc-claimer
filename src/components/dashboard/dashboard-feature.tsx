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
    "45Wotbwf9X6cba1FmzBjZXynwAqDsaExgaCiKNeRz7pXY4bHgVaxnAZ1hhhoL3qZPiergsLTNoJBPo1gUbvWCts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kEiHhH1oKbZUpsYPCkASkckVNtuzpH6ENGiYy1kMTkRxX49MXB1ff2QGVt7gkKsB7JcUUUmb16URzCpeQ4he34N",
  "key1": "2zhC3pRjSUgUqMKMkcJdiW6GgwGt7zxdPq3UtzeofGJe1JDAhhFKjiPANZiXL2Voy5NZez5rcrBaM8uDHxQ84R1N",
  "key2": "4JaKJ3yx1MThTNNg22mbLyAsx4PstHTFYtCZBqnEDhm6V2mYSUL5RZQYBRfaYrzKz5R9pbu55VgCgq3jGak8rVz",
  "key3": "3DuSyd6yiPnGuE5mDcfFi8gQ5CMLtCnhUj7xHKFgjRADmQQz4THbbMt838GbCEkFRUW3ac4nhbt81TGGdnBRigfJ",
  "key4": "2LH2m6btQ4yC1JU3NQwXGPA7ph8M9tzpXLJgZvhia7AdruGHry6p2nPPaEipoe8JEvZH6DyaVEBTSY8rLrWKMFSA",
  "key5": "38FvFaHujmp6a4MXuFkPGjN3zRDVmKZ8r9KK8gYMLbX6Jy4PJdi7tDFkcdrgYZNhTzbmTutgBPDXsKWBaLko85ve",
  "key6": "3jLP9uf8LBNzSrUVJ2fhJFzTdSnhsLYP6spVRaCfjCFiSTn6dZuBNbMae7yRk9hm2MXMbdwbMtiTJRVf9yAPHmvH",
  "key7": "4o6Aa7fPRbfsM75EGtRdxSAtEuTosaURuk4GXpKARCNQxnDbsxYDUzqPrLV2JfvuRfWoXGizqXUmhQabXeV2gkQd",
  "key8": "ujacthwHHY9MJz2B5MKKuYYyqHY6yVtvJAANihLU4BXT5ZZasgxS3rzjkL6ZwTYaguVY5LANMVVxEtMAW2uGnTa",
  "key9": "4kVnoDf5gadVcMUMABK9U5gpDVE7JMmLTu2Lq97odWUFDJvrszxk4Qn2MA8ErScAx2grELm5WDR7vMGGyqYxHS9C",
  "key10": "5Hc3tStodZ7HHYreUQuZbN4S9W5ZdwMfi6jUBzb35KmzzzSpCDNMtAuaCHdCSkJh9kn5QoahFUafJt8wKW8fB2Zj",
  "key11": "L4HuJzfvmiakqgPd4CE3ZMN3mZvAGQPtjJMJoNvymBTUDvt7SNQrvixjMaPK2SaDGyeoc41YTGNdct9uTC1KFp5",
  "key12": "jAybaCk7mFZGR7g1jBSESxUgUGwVhapajwmgPisXZk7XRnco45biFjhhPhUB4qjyxLJSTm98Ajm7GRA9Zj8yBtR",
  "key13": "5TRPLftzn9oJKtGUGaCPbyDVzSpkCgcStUker9RrTTakKQ9qxUCnmPb9VQkgbn1xSv7hAYKYAw1W6mgGbQBHP8EG",
  "key14": "5ELbzdC3x2CsxCiDrQgXD3AApQA7P3ZnrdNNZUgTun3SgBivMW9uS5kkNfkkiRUQoRKNrHrbopHZ69wkdF3H23UD",
  "key15": "61fSy7vZxyf7zbueR5etTrqGtkYRSW1CYx4dt5FYJjaM2bRHNFGuGQVJzc7jWPX2dzrKEBJJHRiq9dxCdrYiChFR",
  "key16": "2TscFr5T7QxamGs3nqcfUV1sUmuSFtFe9dt5ec445nDSgPBDgMtzWBJAykhkD2EgNthC6wqb9W9LafBZQ4NVB5uD",
  "key17": "4wxQ2Je2u1wy1tHakCsfxJV3GFJPPAhXibHfZTMXfWNg6gMcFVM4ickyUkUPHdqWDzvESYjyvx4ADhCon59jijZL",
  "key18": "5BHfB1Z66HtDmyLMdB8jSJ8MNYdt7iWQ28GHHyQENxY87RKiExuatSynyqTXyiSxbNtXNPrRU7RHBfvdLeX9vAoG",
  "key19": "5j3XAA19deFpP3mFbPdNnrcqGrQFEVxZNkK5PPouSAGjqfGTrBd71atJhYPtRRVFWBgRyxkF6pqngs6grCGx9cUp",
  "key20": "HKJNg9sVf2nz67F97xg2MMkPFLkMbaN1zLazv5hYZy9YXzsDEL8pcQSkbM8MLXZRYo1sxaEgLFbaC26rxcMRcgB",
  "key21": "3y6Hf6ACdrDp6GnvvmJcg1oxyTD7YMBW57k6Tpppur7pPtXXTYco8u39vqM5q1R8W2fyDKvnaQi7BhoV6rXikC6u",
  "key22": "5s8Rfv1rrYLQFVesm1KQrroCzqzjHoWMiR8tpCud4f22bV7cwF2XR8qHmjuhqyTR2Pv3NT2yN3WNiYwMGmTqjtF9",
  "key23": "2piqszroZNhAsagKj3rh9HaA2Die5DCar2GWMWQxToXj9Qe1iKRpQY7AUPkYSKJeWZfUy5Ke6j5ZHkZtn5UASUYb",
  "key24": "5DGJiKjGg2ZDFEKJZNhFanrtRrZ6F9AsX9SNbTmTgNeN4rpReFEPaQcgkBkx3m7UWb9r9XTZvXqgNn3VJEb6eLkG",
  "key25": "2SuGDZ13KDKn3nunUZBpsxW15UAUaAgpzT42CqwieqinWUEdHgEKLQk9FqGGxPfg8t5MoizscP83QdJ3fES2WGwb",
  "key26": "4n5Eo7B5AAWQiY7dQJa8QJVWj5HFoQX2hdBgCBHp2uRUUgdqq6teHdyTuDAPnno3vAGdsrRYoYW1y76UvmRgQWzP",
  "key27": "92XuyMLxW2f4rPJT6pByuW4LiU9MGwu8LmYb5BT4SnP5XouMYywvMGJb5gx5c74UKgdnoWa4ebp9am9V6MMKSUW",
  "key28": "HmZ4JQMiB3DdXDZivd6wk4PzYFXjwMaUupwue5ymHCUvkwqvgNRztrXkHSLYBZxHxyczJsMWGCw1eZjuhih87tJ",
  "key29": "2JbMnxBFoTNNQrznBxavU2DgZM2gGnEE4qWyZCnKrLF8nDtjr7eYfakL2TWh5F7WwGuw7asmwG8XD7W4ynJ4JQPP",
  "key30": "5FL5nWxTH61fZvAbs4faNok1RLqYMUaLxxqy8VqEFCzVSTKguenpGyFKA7CRUEeS5uT1qksGp4pCJ57reYSwTbAP",
  "key31": "3a2ubriouNoTeZcJiDSyyTbxueNzDjnFLVwNdBe3kLzusk2shfJoCSwUd7hWJVah7GWfA8outGnYi5JQahdTrGZ2",
  "key32": "SDTwtwZQ9eqoLxcUuFreKZS5JkccsaMQMA84XVYAiDvEd8CAUKFCaF7XwpHZDDantk4EYFS9BECjeGjzArcmx2d",
  "key33": "42rMkSg7DXBZ4AeNnkgmT6g8doxs69bm5YnHHGz6BN9ySRkVnnEZbpdQNK9VQ1BFj5kzrNHr6TWSGmkCCKKzpBez",
  "key34": "57id7ADyzcuPGQPvFCDgaUHnmi6EKf4ZBNd1PgowNrwAH5ygmxmAvbsyy269Cd9bdxFawgJVdMKekVb7znEuAFjj",
  "key35": "4XEWBtvb1Waqz3nrtaQAJEV2LAp3e91Qhwv5ApTwWbfqycCaNSpWrkxD3xSYYNhcRjva6Wx1aXfJfV8pAo6GcXWy",
  "key36": "4DdSHfZns9xE1QMDMDmvb6stLUaJu3wknreAwhRVhhxXPKHXEDNg8jtC4GfAfAgUC3aTX5zbwTpAerHRbbxcF48r",
  "key37": "43b66Yd2G7DTsDujAt2Xr26RJM8GXrN9bLojS9o4hBJPTqM4HqPx2re7wjuTXoGZxdJeFgFdDSiKsMVBzMtJDAfp",
  "key38": "43bpbzdchmmagbSxxiAAC5YSnCwDEnA6et7YgXAVWhxubRRRvVdPKCYDNuheHtpnpLK9zRcgMPokDHbLUyzxUM5j",
  "key39": "4SZxXxExij4vo6bF2mbPniguSrgyqQFSGN3TJ63zJ1kxXSWTmsF9fj5sAj7GGzCsZ8hipsyLHESSeGNoW6EHLp9D",
  "key40": "ynSDwJc1aqMEhrzHyRfGSUZzqv7JfNyBov53YrUzQAim33zK94SaCtNjJa6tGdFi6AC3myKSNeboK8RR5MCJtHX",
  "key41": "3iqt8ndfrBLuoLG1VaRcrwB2LuXU1AmGCM3KC6JfnznY8PypUyyCVmBea8LFYoySCJjY9NMMtv3pTvT9WvP1nRHW",
  "key42": "48o8QgmfiGKEAS1WJgv1pVZYhg5Dqeu3RaUXfbDFdTsiAVSuE1QwGCAPJu83HdfZFRSeedHyjH6jSdPEXZM1UaXb",
  "key43": "3mzWYsw5TeC53mXnvPtf9vfmYENFkaBgaNB4spbguzZfmKjo5xRFnDan9xD3GuWYY5Ydg4FSxuNVvLFT26nNjFiY",
  "key44": "3YSPZg8xVzywZ2caHHmprxQTzoZpRQEC8rzwuJqAtNCVQ3cp1iRa2HeREUuGxstzW6SCPJqFkuUHPgpGntf7Dw6u",
  "key45": "4ezJ7LaTMZXzCBs83DCCvwcNr78Rfgk7fBzPA3A2dWvDhJHwXCjZDmWbvMvCkzkTgzkt5tnvVZNuDZ5Nz87MAnjW",
  "key46": "2DGyav1RYbHKt1ZHRNCZpSrmsfgfG3wLrtzb5tpEZ9RGiVPsmQPDshukJtQNKS3qDixdiqGEPeAgCRB39kabkjSP",
  "key47": "5X6bHQSmz3imnhKypig9NL9bKquyqqtFtHswJF6iLPpysYEsVsEami52HkfAGWioDJkXyBvEd3FxXzKcnd4d2iSv"
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
