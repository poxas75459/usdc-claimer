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
    "5sBbcHF7fQBnHcaYiY4d2N4vRSEhUywcwvH4nkKW1iNfbS174pYRxXecE5HwUWBZHLeYMWGjB7jRYccFRgyDrwKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LW35KK81uS2QSboXnceeCdt2AmPkz6SCzgqpRW88FVCcepkQ5nhCHh1futLGNitXKEPWHWjEqsmh9ucgJ4ocjzJ",
  "key1": "8Dcw8fSWZn3PQVLeWVtWMyYT4sQTmEm8AZD9L3dSFPjtSbqVvCSgNvDThRKRioUo3RrS8HAc7zAgUd3FuFvuXee",
  "key2": "4u1CZbdzhduX6ffdFs3obn7FCYfsoA6CM8NknovR3mHyA3zwMn8ZBJYPnjLH4BwcvBXFcNU41L5VreRRhPd8uz1q",
  "key3": "4NsvNQxq8cU1BsSE2GYGJNtwmEkvNZhuy6AUCSvzqKHPK3zEs9nq9GjdXpKcLysLU3d4a6QM4j7aePK2rYWjXXae",
  "key4": "4wNHz39m4MovXAA7ddqmWhVpQPj4ywzR4MNtB7yDU4rCqcBmXARZYbfoGjghzGKoUw2pzQMJpXbfMr6PfWpMbvHG",
  "key5": "3T2ExxgXhEvTqPs5TP885idZcXTLDrQxnDgsbiJvahAHmoFsZQN2zE23J7o6KrUtgkHZGjdQGPoPhgxdcDfJp7oq",
  "key6": "3PPZV1vZg8iMhbFWNEgRcPmWpPDmh4PNusVfzPbH12rhFTGbGJFs8HkQVSfZnrXJujCV4EbbgP9jS4tEJJqE1Cps",
  "key7": "62foKeNi8Ec2zYCko4G6bFFRxiAjX9dERNBjpf5Cn8YALjU86tpvLF3NLK46ViJSQPb1LjWGwo8uJ6SUQKFcgziB",
  "key8": "45c26Ljf67x8z6CiYk1fsbjj41EH9jqLP5ijy79d7W6YgkcQmR2nacF76Lb44RX5YwqpPMpmBzgF6b2zyCaJky5A",
  "key9": "5TV3ZMqHcogxHgehhaafwB9NePmoSdr6aHQVeHFJ6WpPgoWLVfioxioQhvpFu6FEZQdpi7hjzwXWkMSXNxFBnHNq",
  "key10": "3QyTAF9bdQ1AXRAPVNsedAexkjRK3QCkFXQrUP63P5B7FuadGLhyUzUmetPxzuaN5LarRyfDkZMV7zKFJVuv7r4q",
  "key11": "2y1KaX3kvRbFowqs9zQfG4qEBa3y1fiQTiwpqAjEPtCfJVJdRmGiLxAPze9piLnf9mA9XVhTgDxK5nt18aEkepEp",
  "key12": "RaVuaR8kFUaJXDwryte1qoMihoSTGaYiezCaqeoWF4woEtVqX4acpnjBbWp7vLTA3XEn7HGwkxgjjY3YHaoJdWb",
  "key13": "32d3Fm4L43AyUdiVsAEnNTWqjfUoXUH1uReZGHQHT5XGF51NuazrCiBeYz3VWGDX8GQVQpvmuTUdnJtHKBtWTLKE",
  "key14": "3P93zSfFuiiburxzdN75noUejdyeYpp9DiND1X3W3fu3VdTCTftMgq573EXnQTtMzHWVejyUhQS5cyMSgFzJmmem",
  "key15": "Azugvw1Vchu46Q1spg4KL9skc5viTp4K4u2Pe5CgJuFPhK4egBqUgGKEiAieRYxy9mQvymebGv17S732pyj9fR2",
  "key16": "2BFuo21QHUbSrpCSFW49AVV7dkatQ69tZC8NeHp7dwMGVeT9udiYEov2b7uQec2mD9S4CbCHENars3iKvmAPN2AH",
  "key17": "2YBfaNP38QuTZ834bD2b3rL9g3wof4hpXqkAksf1EkiFfgF2ZWsoUnYGot6jvihQ2o9Xc6uiVJ9QyajkbuGbna1j",
  "key18": "43BKqDuBsqZxczbD5kLXkyFz36xCYL1urXLSZV5cfTEwPwdtpJfQhAUhvtDMfsEWfWcBAQZaw62mDft8QEcTvHAU",
  "key19": "z9CSspKxk2MuP937eHqsAi8Mxa2iZzJhmZo3y3QFNoLjD6LprFF4aKiWDHB84RocfCj3LEsUTR82pZmEkxWoeNy",
  "key20": "2jFGyiR3kp1pEW3W55VtwBDj7mUWXfUvnsFKrX22qXuzMuWASvpCwBWhBScB3UkDkTuD3R5aCZGYRWvuJquMTePt",
  "key21": "3g2MoWFVYb9JrLKXYD8Fj4wqEAPyt7xRCCmdqiq83y3DrJ61MSRDuA72dxYvfBkR6f3Ec2KTyemxJbgtrry9qkUJ",
  "key22": "2F1yQjsfaLaLHDm8JFxUBQYXrDm3TmkxNvRPqZTatpzY5MDGvbVXz6FCd85fJJPYLAhi4HjGiFFrZx3qxAGxEAZz",
  "key23": "4jggxPoRV65FkrYfhVAkH7PCaFq9LKyj79uzNqnuzV46T7dnDYnyvHKpMGu4yR37Gi26MmZxXP4uSy78vLZyyCQL",
  "key24": "3HXiD3ZhRJLTSUH137SVDBrgzUfu19M77HDWTjFTuPt29y76qbV9437EWLZEkhNHA2PsEfRMydc5CHa4bchWh7pt",
  "key25": "BbY5k3CpAULUS5bZb6ZbgBgee6F5MyG6TzLtM19AozqdDsn6a3XrE7kG1SK3FQWy5hScFzWtDz6ww3aBd91ba3z",
  "key26": "48fmVjEkcCeTc2CKtkzH8vjStFNBquoyZgaNQC54goMKrGcTnByhuuss9DQ3swdffEJcDhJ7mjnqBk4LP12aaTmp",
  "key27": "2iZvnBxXUMjL4kzPGWptwMWuwHv63a2E6chKtXxgiTT5nbwxyQaSriwnv72XavV1ihB6RtiqAbJpFisokwTxBLzU",
  "key28": "4vcPyJZaZEdtRa9oGpw6ppYkRQ3HWj1wpKttbZfwLNc7EMMu9uy5y6Kn1v3Stn2YvG3SNK5FMcWfN2RPRuwSVBYo",
  "key29": "4uynvJEd9DaGjqRybxrXUYJp9pkwLngwdWshvJ1HdxNfzQ63TW8RfJy75ymt5q9fM6ktHVoF44XzvEEp26wctS1W",
  "key30": "5yzBqpZNDjWkeMeSUwPF22xS8HnyJv8Q28vpXqeqx4MKoKcM33JmfGNin5zWWydDmXSBRvvcUJh5AEQSUGNDotup",
  "key31": "9moy84GyqzsBfX1rcJHMnEBZByq4HnLnRo8rBiRwfAVEyTPqgUGka2yKVUCzPCjdzdbDC3Vb52tVeVT3PBcCpKY",
  "key32": "4VcATAh8YC583Ga1tqu23ndyMFk26MrRLUNP12Xf4prKuEweLQNisiJeFd4gboDyYQTpPPZLhQxLW9NzPZd1R7vu",
  "key33": "4LU99YxJXF1TQ7rr7xdt4LU5PGVeJoMRsEytBYdA4MXFYXKg8cVW5cU2xe8Hc3XK3oQf97ddjUmzUugP3KSE7cFV",
  "key34": "pGnLCbEkbfbzpapFzNs5nnMRvdWEUFT6t2216wirb1x777QZ11VbBnJXnmXQGduKrp1LxtK5YymstdPHhhttzTY",
  "key35": "3yFwRnntoZkGT4859HuwDfJP5qoYy6gx5Li1n89Uj5AaEx6eaVBH3xSNMKvWE7UwSp7VdL7mzMfT9n2ehnhw1vAj",
  "key36": "5VW4Aesf7fMtRab1emC8x5DsXT5P1R3uiaVD6VviLZUHHtodJaeshPRcwPWnXjfWooFUwnoupUBWrEDbHqFdQdcG",
  "key37": "222TUtZZ82ogjy7CsWA8MyWfESiQ6YLgaUQDBD1mZKsUj5xDTLxnbwDTvxHmiUipkQQZxtKtvmzLzUoRGHAkMP3i",
  "key38": "2VkBqgjjXWtbJvnMhZrzdzWY1u8ufKja9FFLg8XMgQirPRu4PaSxqVczU1G8bHxyAC6CfLWePwTimKQ4KkR5pV4g",
  "key39": "5fYWMKoLCpEfscDox1xDCr1QnaE1jC54n7XrfpnxApw6MFSVQv1FsMzE5FrdA62T5KDvPbWwtdrnxbLXfgLP59qb",
  "key40": "4SQVaAjps5ZNHShLdNFU6kP6FaUY7V99NtUVE6pAdr3uxmYstxLZySv9k9wdsFibEFCUWGyE15mA8BFkj4LMtNkZ"
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
