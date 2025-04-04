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
    "2baurwv8HX37h879hHqC2NKbZ88o3nhSVrKLqxR4EjhWzGKGyFKkv3kcQF36YZoP8esFfZps1RaZvessVxEroCGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zsX8N2F9uUxSn1FYRYzEuMxNV7LpBcWyNHuSsb6Gqoo481bYArEHku1U6uKXwdLjY7cvRnsrzGxVkypTGep8CZa",
  "key1": "PFqiMzjmJMA9NQZ53HrDEcE2CFyY3QGMrwVV3eB9v6gnLDEKPSNzTJLgchCRUwVEFeiAyBN54aw25wnAuh7LRuv",
  "key2": "5MFV4z3GUuCsZVjm7bTMSRNWgkG4NVfyWMXon14yeNVhpfHiYddhuK6YUqJNy9KNPXvuTRr1TXnnrDxEb1nkzKkF",
  "key3": "52N6LBoTmgraDb9mubsWczz5b7tizat6U6eZCa34Xv93fJG4DhV9N6pJ9tXesVxCBV8QWBbwxyQZe6XA7QAv7FQX",
  "key4": "4jMet2d3JUW1L2zsjM1Nz1DXLMPKjPNsuSgbKWGzG1EporxQvt2VnLHCAjPg19LVBofJv3iz2NEtjSo1b7qjv91L",
  "key5": "4bvBbGrzzzVooJtRZQ1q1JN8wgdbALvWsbrkNeq7jcdu56WqqzqQyzAVD4WAQXwek49Yx84kgpsfMFi6EdYS5xm5",
  "key6": "46q3aJxmYzmSXvVUyvwQs94jRrimaoXpb7QpQFm68jZ3ZPmZYUHcFdoTJU5L3SbPJZwtdDFWMfGCxc9nSE63d19B",
  "key7": "JjjZh2dV9oyfswp4o2AZLdv5ZNq4M6McEeh8fPqqdDK9QWGzUW5j1Mbik5DCiYc7WKK5soig8rp96JTdntVZred",
  "key8": "5xt4Mjp6FUV7JCM3DKXTrXv1VokbCWH5XeCqGf7FxX2BEN62QUZyaXdwDM7YZzVmdqctPwQNTz6vHhd7NxYcU5uE",
  "key9": "4zxqt65DEXD3tFXAbKCog4r7Cs4rjHX1Ej9wJw3kA8s94GgVnCNvsMBHfFFCsMUMM2JPx17fdxpSnxrBJU5BbsVk",
  "key10": "3K1Zd2169ArBVrwwxRA663RwpiU9xfsULycq57fd5fm5zsbLYZDHraiR6iUNcZPwzqMoDPCaYZYyRWtinDrp7Pb",
  "key11": "22tUSkN46NiY6zK7is1acdHPn25SpHQMGnmrSJCxQBq5V3VpoRGt7dxwhxnARXL88jVRwwPeNQfne7cCfxDVSSup",
  "key12": "4MjiczrWkH74c5auX6cedL8KsdJmEoKg7W6eMwZsAM8JaL9ng6mcaESeUz9nXhLcGSqjqAVUKo1ZmZARPifMvLkX",
  "key13": "4k4heUqNKGbUy3kVoZ2b3rnPryzdmsMoV6MmoDSK6ne4RYvQJzwSxVvpSC974QUKLg8KZ75UbiZQzcrAgaR67ziz",
  "key14": "59rjcF19AkbLUWkve7ytNV1Z3WA6cWrtsgneHFK8nkH7AZVHyVdoMgjqz2LQew6dSrfJvQfVpcQpzemVjGQM8qSD",
  "key15": "4LpYAxqG1YX4d9b5aDS1ibFQRFdcHJVLM8SmC7r5bSQU8sMsERfNeMsh7zMCJVYkyH9ubd3RHEHycbimi4u7afYQ",
  "key16": "5tEKR1basRt4nvE8553KxcKrKrQjrF1VU4pVRXAXn1hddk6xFzW7QQbeXS7m6RSqRMdDGWpa3jqMRbtcusjuyjvT",
  "key17": "4qBYFSXgmMzEHkpwRSaHW4yrHHEANcyYhk32ubhEvL5ePPNwgBUvukzZc4Ttz6UVi6yqhWJ9rkFxwfJFR5T4T4j2",
  "key18": "2hXwtK98FfHXX73Szn6FGCsATHV45ZgVNGtdZJ4UYdovy35RZscMn1Kb9tEjhVs8efc9yjdSyAMD5cciLFw9UGVY",
  "key19": "KZdVkM6qX26gtvovhs2sju3sjynT1thjfYSihDXv64ECLGqBhynqYBdD4ebLoqHWt35mWAkKaDfkY5Fs8Lb9rn9",
  "key20": "U2q8PHdEAtPWxevegdxF3iM9kpKtZH7foUuV5zms358bTXBe7A7dmkNnWkWJ7Qcv9VVZS8BEQkFkDppQEnBLTyD",
  "key21": "3ginUDDeuKGCuRKrN5NiJV9EtU6Jf6yKLmsez7hw4dfJyv3ZvizsyLDXdi58gz4hvQhceaS12UStzVyPv2QooFHh",
  "key22": "ZQ7qk2ESYAiNTqnw4236YMBJJzvtzwfmzLPoXeGbzpGMNqZdi1cejCmo8kESDucjy2rWwmwpTHNSH5S8pwPneNs",
  "key23": "UAXf3NdZ7LMxK193hWWPp8dJU32xJmW8Xu974pg2buv1sHWyhsXrU7MjxFS1Wtay25jaNZ2o64Bx63Za8hfRjpg",
  "key24": "47Yt5dR978QogKZ3waRev4z5rxpqsJMMjmPseAjckGiW4uFV97FJ8Wcan2XoULjzBsPeNicDXhqPSayYMoLUrkjd",
  "key25": "3xo4WwtgVbNGWhE8PraLgLfF7nm8LiJhwQaC3v2wtkxHZpnv5u3TgmnyBAGC79iQcJnQzzwZQL9kBxRccgXSVU9E",
  "key26": "3Psi7pADJZWsWxWuq5dDNMxRYWvBbefKw8ftoJ4i5F4gZuhTJeP6kkuVn9QPNp2NSu3mPfQL71NX3QUBc3bVx212",
  "key27": "3K7B17FMozCmhbBTvioVeRvjywNgVU986QVMJbpEXeVHmL3idXSawqbwdjTUtNiqdjKsMKsBLb95YNKW1D9czFM9",
  "key28": "3GaMX8qyi1rQLrZVqYq9XyDk8fs7Ek4sWc6bY25HJ5xhMPtWmVHZRfPwhserBKo4LpMLwnYwED9e9hTurUmtBBAY",
  "key29": "4D8SR27feRFCaE78W71ajk4ZbAxrAKz4Liya8NBEVE4Rv7ZwjqoKTFGGNsWXtLDNYUPQWt1mVGT99xX2Nsmr6ht7",
  "key30": "5BugArgpgiimNGeJBfxkPQNUuZD8hnviH7ow8NNyMfUkswyqvgHUBZ9scEv3K9Xc7iMnxroaxFe9mEp4QZQ8KbyH",
  "key31": "3QpsxmCYy7BoRVc5hycAZ4bCmsaCUMeZnA1DcTKQt98FH1mcdu8uqLFngHuaeFbLRh6MfEJEJxz9XLNNpSMuvB9m",
  "key32": "2Mu2WkTRwLyHL9AXwr2ob5kkFsmJ7k1gmAzvGSb5RBz2guhFkLs4292MPyc2Bk8NQr98D6N1nGQrZT9YuGEU1sCC",
  "key33": "2bX33VrdvKHBYJm6RgDEQyQxPooKzM6ybUZH9Z15ycYYyyrzrndS3ZBxQhy3UzPCwoEQVyxUVC5fCgxG5WLSSxPT",
  "key34": "5ZzZMtCNPpBViKzuVaqaythudmUkfkDYJM5WPUzFauGY2xuxuJqpku9tz3TruiYQfDVftPz5EoJPfvh3bLkLPgzg",
  "key35": "3HT9nwoo3JxGCjQKKdd4DpJWoabUQG3XLQPKxjWWqW6zX47DEwonfydub4p7m7sKu49XD9a1rgXdLwEqjKDMpGDG",
  "key36": "4Wca5iDym9Ykh1TzrJVHgNpr7iYZiS5R4uUFYBGzUe1nKpeCWnYV8VX5oC1Y74xcHt4N9WhiexzeKNSaeYxx1XGm",
  "key37": "2U2P4xfsfVfSmpwtYVusSjF9ZgxvKH3YR2Yy2jT9W5sHLVQgiTH7ozgkiTA2tMiJqLhug2Rit8PqAxDqwydF8hLi"
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
