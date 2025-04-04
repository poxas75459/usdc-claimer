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
    "9oRtYg7i21AyfZ9TrcrPFwEuKPHeWWnNf62bfv4aKETnENRfd26Wmdm5KHRcGXDwYQ6a33TCJ6asqtE4chL65D6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q1StgoKvzDAbLCJMkSYdu9HqpDtPupGmySMEkPfzVo4CaAJYZurKqPw7CFjDJtzgNf83v2hkc7Xn4dz2KLCc35o",
  "key1": "hdHg8P4Qk4rPMfrZKyYm1hdif8Lh1jGFtzwyYkqrV9tV1L89x9S1snZEcfaBwcixScHVziftvhsvsBugFwMV4kR",
  "key2": "cg8cK27tBeuhzzHaV5X75VAxdiLyqXKhohdRSwFA59gQDBZFbtVmUNygqHX18he4xfj2NvPPPDAVUCgZ7JgdWLG",
  "key3": "2LZXcZce14Get4yKwJJsStqQHs3q7evUmvysfQdoAf9B4erCRU8ehgZZLAEX8vRgJEUCptiXUsb6Srj4ygmmgNRD",
  "key4": "44WhmCUnk9odCkYscFDfEUVLHksoFApVQRLJihAaRNiTuwUbHibG49rQFhz2aLvYXzoQEk5ES3BGThuHELSAHTWr",
  "key5": "2hwrZjfbih2CRtj21KEuBaCKzhWp8UcK7zBLJ2BH3X4aXqRfB5x7h7SpNvUuGDdr6mH6eVHAThRnJ1hBpVptWXFY",
  "key6": "3jeyzS8zX7nhfRR7fqSXjd9QgvA7nbB13cR9g6VcepYdC1ww87G2rXmPjfQYGVyikJ11tAzKBeod3ERja5hbmgKH",
  "key7": "65TGRKC1wUB3jy86sbaZR3qGu4qL4XwGPM37y9r6ePTtgryyv8aEqK7ETqZTLyEHCz7jmWDA5dA93FnZebT29xw9",
  "key8": "4n9hDyfAoN2YAvzDEuAqp1kyw8Bb1SSBrR5RCurhWEqUYnKqinWCUo8mF9v9kNoxeAMu5ZDyUoFBBgjdH9Pc3pm1",
  "key9": "3TYc3stcFTfLAPPgxmUERMRU7hqk8pK3AP6CKbbeprLSzy4Tptv9tG6yvg6YVBRCA8v9sWnqXUZ5Z8WA6RAZJNX",
  "key10": "5ctSMo59vpq8J7ezCFbnwFN66y5hbqswEqurMTdTWTtoqbQUkegF9voe1bu2HfyKkUWLRRjcAP5wQucvUMG7m8MJ",
  "key11": "4ASKDZn6Cm4aMaaFJetXhXe2kthQUFGdyHBaZtJbrb24Crc64K8uXnzKuRHkUooXZFvkkyGK7byiPrdJJAE3HQXA",
  "key12": "dVvQLzsDqk2rx4FqFGTCKpx7jHzjUJemWZk2cAY1aPzuztG3TVcN4C6Ytz9xMZmfeX2P3gXrUzsZVhn1aFik5cg",
  "key13": "sF6XhR9nAqFxpkLo421u4Cezj2gimhitnoYtfemXWYZcTL4RXp2HZUF7mi3bdM3unSZnGfoQ42RdUvgxAYpJiZW",
  "key14": "3TD3wjoL1g4bsi9z5r9pPoRXR9pKev3JUcUNWvLKhc1PfU7Dr2A4dGttRjJtJnbhSTi8PaJj3TYibDzwKWxj1DKD",
  "key15": "4SM93bQg5HhDvzndVb5u6tTxcGJsWX4MKzoH8ZTaBqhZoDTi1gZkQqoyJHxmiZYYGMYmbXwVRMqq7biXG28CZtTE",
  "key16": "3vGEDZeKrrWW3RAfwKLE9LfDe5VJ76uBNbok4fhBffnPCi8acDsaVwx2eYDkvjTBXrs6p95yGpFmq8qsQNnBhZ56",
  "key17": "5YmCipVx7dqU2axChFBzfBBtNt1bhRNB8aW1SfNDRjNga4Qi8sbGoP3Wh4pHSJXwjm6fCRziqxxjf21FzwPGq7PW",
  "key18": "3cbhZn5pvyEvLE216D46VVRmwSjR9v92qrvMSJVHrDy2KN56hE531C1DzE6dvv6t9TjFLGXMG4HowEDNZVKuCHfV",
  "key19": "4k5iJBAmK5Ee2uRMLGz8yBSj9EymhHoeaGnBGQrKsGtP4UcJvwG4C5dEchR3XFbpjRtW1bLqjpf9vmzHr5nDKH5f",
  "key20": "cWYqUVAtafBZrX98bBKa8FatHVZeF5WofDZXRSPLnvEQ6W6dyLb7BmFsw8reoeafktAzAayvad6rGUakZNtQcaS",
  "key21": "2QEMi6RhjxCMD8zd6vnqKsEAVuka9MXf22hGF4HvEPKMCS4bvg5279yeAVWn1b9nUxEsz33p7T3r7pm39QvcvDab",
  "key22": "33gMmsVwGpXQkm3B21daoTh3MsvR7CX2AxCNTyLHpt2d4ex7t9RZxpvDmVCzM715HTwJc7fSUx8c1KkHKmD1Pzci",
  "key23": "3JVP2zHAHpoFdwSptRkEde5CYmRms3Cnccm8ib9axqn76ntyRR45SVPZejuEVbrveoY3sZtguzahprBbs5Xcaafi",
  "key24": "4fMY4QA8Cecm9UetHMvFADguZtRv2wxgfHzKXHbRfCCDGxThYMqCBQHRDUuhUEeFAFCB7wVVuHewzKgvs4JUjPuv",
  "key25": "3XFQwTYfaXy7gLTgxLeTuWEC3kpQbXq2opeao79EyVgiE6nNnfDdU5QcUBcNHi2vsEEA57editNh45WeNhcmf7ww",
  "key26": "38ZjdQRnA4BvbGjJvMCMpUnhM1q8Sjc5s5egoDJp4mb4rwQmcfUu4m6LGfYbEhFA2exsXhEX8cGjPqCLEsrn5Xkz",
  "key27": "9PtjQ2d4eH2Mb8TeqLrdy1SSnZUuYJ5zoASmZKY1fyWeFSSooZ8i14Hrj3X1mqyCFix1pShoPJJrHqbNuaBSY2b",
  "key28": "3mFHLx4Y9cFxhfhPYkxw2E79Cy6xNnAyJGBUg9vWyLZQq9K7hKY1mekPc7thhtjQjfcvwN1dtcXZVDErTh2Q3Bjg",
  "key29": "2YnUtU1x2DXFJqDUP4xSZiYSbrPG16iwLkcXEVnFAh4DvnXhtUCgpLyGgG1R7zqhdAEfkRum85xHp6qG5eaV4z4P"
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
