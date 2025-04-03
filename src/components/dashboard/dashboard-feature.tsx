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
    "5BGha7sKHMdvbcjUChniyt36aEX67tWHmcPJ3hMsdZYzG8UZq34oKkaGikYVWtznDwiL3wtZiUhx1y6ghMaorJ5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XMb3ik37ZhK39xPEoBZF2C8yeUtTEdtnpcgdDEdn28B8nE2DRnHqtL1ZjZpEzPfmGzCiZTCycUFUKGiApJN6h9j",
  "key1": "4iKeYysZ9L5jSBXP4ukhAT6Efyj9hAY78dvWhSRrcfE5JvzdUhf3fjtQEzjKK7eAheCoMjZQRDKKyyFEiXKfHnF1",
  "key2": "4JEz9AsauLDVhVebX43dKUN8h8AcEvHG4kBJWN6njgRGCJX248eqfnipujsu1eAkaVJDvhwHjJz6ZxyzX86zREs2",
  "key3": "3j2DW5swphVDBcAXVXaxqW6s1nvrmqSk2nYyyk9bPXqTV5f4xHt8JHHWAwSCjEZdDZ1h9kyjV4wLwzZ7jxfFzQir",
  "key4": "5zYyYNzJrmzUNP3eGCkD8Xs6u5qJF8evUc356KD1iM56yTjUvwQJS9rVD3B7FExZzkdHmKg8JjpLj9W3vkYDiUNZ",
  "key5": "bmcCsfp3frTrARHjjTwnJrRq3mUpsqnsz1kppoPVzMwCyStNzD5pz1wuosgZ6uYRf2HiMymqKNsQe75Ag797Xrr",
  "key6": "4UKXGMeWqEh76LbKoyGtHioVswApeK7YmrmaEwNmQzCkLhxefTruvt8pPrmDNR9yJDGTLbVHWuEatvXNwNViQx9n",
  "key7": "5vgzUiN5yYMaBYYcMryJoTgp9cUmZhk6phQDvkGuGPZA46w7WNrZ1F3nDiDyAZRHcecQykvEzo2K2xkvzfbTM1vy",
  "key8": "3aa9UeQHWJgkt1xd4ncRxmCkbmacjx4FaWztk9GB1akSbf9Pi73hsqe7VqL359oj1YmiMJbZNXY8r9FjtLtKmzML",
  "key9": "4WByKP4x9HEqqQ2vC3NcNYX97NwUAXwtVT1VAFb84twgrfD36kNK6Fk2UKgkZTwvNHDG9bqsqQntQgWYZS1W6C9F",
  "key10": "R3bbkGXsLCUrCbMXFHzWr8C5Dm3fwHArKmjBPrug6sPJ3grUT66eiJqrfFQSHfUZe1DSH6YHKFLvbgL2TKAEkoT",
  "key11": "3C9GHvPUwod5Segn4Pt3AAer991UMsvHV643BcYHZmenY1ytvvMrZwAN2x6bBy7Qb1A51F3QeUjK1ppbcVmt2ZVv",
  "key12": "3GYkmES7EGB9n1PJGHy14FwPW36fx6xmPwmYRuj1Zpejhbr4yrntpReSzCQLuXApA7tYHNz3fm5N91arahiaCjF5",
  "key13": "47CBEVLVnsKbzm4sdRtJ3CuPWVJbEJD9URbYkjV4T4hykWfQympqf6E2tGNsCNAS3p1iEkawwz7qf7rVhN2NhPi2",
  "key14": "2yt7tbWctCRf1wvrHQWAw6U9ATY5JzMxySYeb1Wf43T6bRDwWjTRfqpic2tQHsQP3TeGi7p8fesR2oRJL4WzCKDo",
  "key15": "45Yop1x5PM5bUBUaD3vqPk8RWtyqyUsNig11cxqTN3R2XSyhBdDRgJ32wfyHFCvx5qt9gUafDbqZEx7jso4kPfXY",
  "key16": "59qiNUuDdkuY1zKqx3SWWHEt5qipVtXDhwEBcae3trsn1bXaJNyBDVg1cd2hXG5ipEUPFUiHB8FXauWvM272birt",
  "key17": "4cihNSiDtcvHSfayFEv1FZTDNdkxQAjBkzXw24PaLRmjSz5zHyaWEJDM4qpyvbuVypJ5ZXycFhpjqansQyd5Gddj",
  "key18": "2jFsfrk37FS4LN1uirUjdHRDwumUKBSqQeg2BjbfjMN3ymvUnbp7LiFjbFWidMjP28GDbDDaaBwNNojA7LTgXEEr",
  "key19": "3Dv4GnXq2zM4jbUk9rC7oezroRb2MgtDrHRdPwEyQBrkVbXGH3zam3xkKxhJHjLJn11wagkF88hTr3weSpAeh3Wy",
  "key20": "2GmQ3qnef1SNYhh6C3bNtBRLd6SoEXVeV5k4CaLYG9UYNGXoeaagN8HunkCH3joYA2GRtQ3CQaNPKJEdirJKA5kA",
  "key21": "uvziWQucPg2UhrsTh8dshkK2mEuwgPYjjajPTwqm2aKiRb4sQyBSHvt8uDaNh17YaRnCqDmmmkwaEkpuFzhd9rZ",
  "key22": "3MLfxdzZeGWoRxB7qvtM7YJ3x6VSzddcQLua8AQbMq9HtFQrk3pUFKGhjvN7DYGWgQ8v66h9XcbVYG5YLj3Y56gd",
  "key23": "549FcC3CEUTeAeXFAW9jd3FCb3pLttv7iLiqqt8owDoqtHS6rE2J6ZhtDhZy4fi59er1wk4LZYNibVUhn9MU72Uk",
  "key24": "331XVtpXMmkrtw9N5x2bdVK7pUZKU6t6Fagk8KtHGiy1WGZVCTyjAa3tBVdyEZNmURigudfFY8ksc38N8kSkb2QD",
  "key25": "5tu8gCX9toKg5wo3Ef7RBxrXeRRcF6G5HBEnXcJNUwDZ2LCqfnFCBW78pD3E4mKhUKG9Z4Ecdq8aEAmSZ6oFHEpi",
  "key26": "ccLXmEi1wnwWGzXMZYWWQB5KpEKhZVdJbhCptnGV2k7EG6fdfimehAwoTrfTnF7ykJDd6q6TzU15E7vPyYApQLX",
  "key27": "wYaa3ZrTTYbRkvGTwxWxPphHafJEKS4qWMxHETzRMi19A8VHAkmPGiDGr4cGyq4v9kjj171MDcvBZPqCqzyzZDJ",
  "key28": "3w4VFWRr3DkwuJFsXiTbeQunWsCJBsQQuQ1LfSaTmXTz6qcfm23D1bmK4WYzJKknTHKyrpAGM9CYHBoJ7wbRPCRj"
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
