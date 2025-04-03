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
    "5vRWUrSdnRwrwuKN8DUstGa7jPwu2zVyFyggnnsLan2xus2UTicX4qv9QFMRdGbr6pDpF6GioT8uaJorkGohezRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mhhcBqqH29FJTnACujJ8nH3VJGJKoEXvjxyytYUYZ1SeWoitArYgxo1PRDUvuK4khM74QP4kfWrfbyR4NioKRK2",
  "key1": "YYaCWH8LBxGYFknpxc9thcGLCyoD1eNmMC9LCEaJ692bsHoCqooA9CwPPKgTyTek84xLfgo48s8F4yy1oj7FJTa",
  "key2": "48WDbNTq7mS6AVWgkGeKpWaqY8XTjnD6wo42Bge1SEuz61EB1DwhLwsbdct1xWQuh7eEWNCUQJw6zUG9zs6akdXc",
  "key3": "597ChZuPttyUB67jqHSinZkXZs7isTAyLy6PqwqmF3nYEEeUweyoWwhb36dVMRmCWGx64o8Jz4VCPV7AiRRaTit6",
  "key4": "2fi15JW66ns7A7uauD9UtDhGiq9JDWgmRy1vvyeLuF43HBA2fBr5XWgQY3YgKTtJQYpZ5v2j2YbW6fNg2CLrf1Nb",
  "key5": "ipSkZC4F2AvaAysuH7aoczThfQn1A2BAFtiK3tJhPb6J2KsnX4AsGDQfg5ucDan7Fe1QRparDWCmBkyj3Lsjk17",
  "key6": "54Y3FqAYktCt5bvQU1cW7EeubPz42RA3m8yZwrfhVHKL6QPC9dKACwWfboGBYd5JQgnkTGfnJ5k2owyigcDtjjT8",
  "key7": "3aNAVPjS1Azhs6nrLbDut6HNMh62Adya7A9nJaDPyfgsxSvoru4AgbMDdKF9NkCBeWhxLnBAnD1RdbdyyFD5CqEy",
  "key8": "28gzyyXfKFETqdsm8UjznPqxNBf9gPCsPL8d5THwLrZWkeBKSWy4ortmMUwZxtzxu8xTYzfbNmkpvVq782hky7iN",
  "key9": "3juy9redeyDydGyXMi7xaunm43MrAQwi5wHLvzp6SfbdDok2HuDav4tX1s8beLPAe1v7wLNS1g7cbsjiF8qt2aJk",
  "key10": "2FwaoESKemwukRKAfifDVnJMiyBxAcRGXm9HYvFNDDi75NK13Z39rioQ3YGc1ADo3bHVrpk2F9XV1F2Lbvx413Wk",
  "key11": "5aQv9mLbpwyM1ZYWrqCojtX3gTxk3yJjwD2Sff3YuZdexkg7Z1EGuRDqtMMJBxwxwdKHifSdvp6mpP8LtJN2QowU",
  "key12": "357DaKTFRwvCxkc5wRKWCC3tR9B55RB5R6NDWXDCP4F9qn9yKYWRqQF1qUPDagPiUwRKsUfYXD3XnLKUFBYUtDYu",
  "key13": "3r8HtuBVnSsBtg8pEPxY5EKxC8xhgNiqeTzt1JMWojeAjdtxVwCJiQxVCnxreLemfYWSVYj3xRn4tjoaKovzYbzy",
  "key14": "22xoAWd5p1BgfTge299pdnojtfpUqL5VpGpMJYmckQov6p4T3wWpAJh8FHpxscCrbryKBGgUzi57ZMYcCWXnQW1r",
  "key15": "5kEbP11LeuxmedvNwJQ1QZW5gMqwaWpkGsSFCaR46aZWV29gd6jzgvspqfsuavNtrPtbUXoAAfaUk6SY9Zd14xe9",
  "key16": "47uGMH8u7e3XbYWW6dcWDGAnAyLZ4FDMMJuEet4iy8fpcppxp6G7xMMEMVrxXkL7vCYWZBJvg6otnSEAVSuNpa64",
  "key17": "Qz5swGEW4yERmzeEGR81JWSunBgXNiZ3rjCwDn1MSe81m59KyxTwu3y3cFLdpcW5Us9sf28R65pJtPXm8zCNgTq",
  "key18": "3HKMjU59NGz7eysm1PJ4hLTpiNJAUHJ9xtJmnwPsU7jvdmEfabQLkFvH5vXzdoQvc21QzWx6XoN2sYQxWfH2aWax",
  "key19": "67EoVa8Xutux7ZyH9dC15QjSjNiHU88cBK4sUm4yXGp4mW1kUPaarAsW4z4pkh5SaxTThwzoy76m4NJErVysPBJt",
  "key20": "4qJSnzex9HZw2BwmR5y9NC5PS6SYYSKGwTyo531qsk6XY5VEWsRZKwWT7oAGzRYLSfUGE743a2Cq5dWCLNK28np2",
  "key21": "1xJYoDjM4Xjuf8mH4kjHVridfFHUyYF37KjYqpb1BdTbsH18vmVWocSm6crrEs832NBhFeDANyk8J6F4cS3cjaB",
  "key22": "LAShNrM7Gesgu2KojwveAprULkYiNaEEAiLiU2WHGp3UCfZTszA5RAnXNnJubv8qvsuBGGrgkpYizH6L5uhH5Cs",
  "key23": "rhv3GfGKEpNBteZjH83g4DqAh5Q4J8vgPnHstc1SxeyvPADnTMqzcVxxwsSjMwYpur6cGsy8Tt2oUz2eYUTJ8x2",
  "key24": "5WAZ6daq8hEpAkVF1LuPkeSZ1Za8p9Xe2X6nNsyZxjz5dj3B1J3Kf3DMWeGT2L74NmrCwZ1XFY35okkNy4pjWiua",
  "key25": "X4Q8yZ2dZSyVLsCkCrqY8WQppLxccDacFTEMkGUjUQ3gT4e7HU7rz6MQz91vB8zW3tewWWmES42UuuasJKtBXH9",
  "key26": "3bsUZ21awgTAPu2dnQfnE1KSFgtTBJdc8y2Mho21x9jGwYRx1RYDDLXvkFDZ56yq64TtT4wS3nAKzM2Q5KAr4L8c",
  "key27": "uAgxMnaSHL7AoCbdvwSpg1eaWaHMbJJVEgq4Hhw3YC9iZVU2RmAdesKYdaDN16iz9S9nB7nBWG5akB9Y4E2s3im"
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
