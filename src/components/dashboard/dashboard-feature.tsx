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
    "63T7zxjdQZW73z5edy5ncisZ8CzLamU13bpMmJCBn3zeBEXAehivWGJ5AJY4ZLbyd2Ab56gPgNjHe5qbcX39HDzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eetYwsaGXikPtjpYMk7KoX61fpFMrDNxjnbj3GXyXcZv7SxAyWXtzEvE1fA8NeXU3fqDi2JpvZJCzJSFTYWUHbc",
  "key1": "48xokrg4hCFhfgHJnRJXDWQ4bK3ynQrayD1xE2dEZH9HobnzbqLRXkES9PUvgFon9hqAGbttS9cKDJfqbNJJKkg6",
  "key2": "51oXrNgJxHE37Wby9yAKRNNnr4avKcBD4cgcAE46kqxtYuMSgbZXoxQMKMSN7do7zbZ6y7owBvLH2Y8Q18AsaqKV",
  "key3": "4VeP6S1CdgtUGPXTpMvgbJ3evwZbT4e8duFx3vKQch4W4RM2jqhKWScc1pdq53GDEiik4aoknpCLSddAxRfgfSgN",
  "key4": "3jC8SY5tTR5rvjGkRm1mAbF3HpR7GqFuGJrtSAgTnHS6VVMhC4cNfSK4WwAR9PkQBQYRV4xrhBswPwJ84FhMSWDL",
  "key5": "wiwvaZueDia48PBXqcRCrxf9wqPZ1DsJkbjFGRv6T9ChWiQReFbUogfSE1yu3tM8xVnZs9UC7VALpYQHTqkpU8C",
  "key6": "38BVv7gvcDasXUBzuwqaJjvNZCepy5wEXRsxh42oNEg8qK8xBswf3yaktf3FtorYkGq44Qgo86yJJoiz6vDKcbF6",
  "key7": "5e2jzLaYKzfNzJPifbgiAR612n8FtrHMU5fdZcc6kHGqq9UwwxvySfe5MHkBSjWERwAqDs73i3xtUQtWjmXWHeja",
  "key8": "4zgupkqvMCVQ2MR2bPkZB5QKhT7yy2b6iW3ocaLgMaFAGqmTKUTCbUHi5P3x4V4FFB7DXsyzfzJXsAjXTLzMbLj5",
  "key9": "3UhmnK4kT389b1JG7pdrysRcYKFYoe1TYLfDAr2Z3qoARsXcxAnydrkZoC6mJaBRBvH5pNmZnZx2Nd6nRyRKqR6U",
  "key10": "Wm2abEHcKhkbBRkY7DqoeD51yYYL3AVEMdbu3rj7sUGEbtHw96av1u1qdPcxN7U2Nw3mJTDGvv2hDnjT6PobLze",
  "key11": "62NPvRf1R7GQEY9dzfcnYGG9WxtN1Ed1Ck6GSChqFBUBS6wpqnuXbSX5YbKCuCXn4yDnsVffJQmwT761fFVq9GS7",
  "key12": "2gz5E3gQTnvjDyRUm2ZRr1YAJpnCnywFFy63xEvS94DQBgT1jafD44oiy9AEcoDtT58QZBvnas3bipdCac11tybJ",
  "key13": "4ZF3xRkXjz2J436XazwMzBq17XWhW8Ras2x1iXcjB9ivtRWfAMJ1UwxCohGXjPFnUfdRUAVW56tKWMb8CREqpb9w",
  "key14": "4bxiNMS4qhNTQTH7HtUW6dv5EKXyR3ruPkPqKABQmLgraNKEfxKrpcnGjHhUYkVLFRFvXFQKkYrYbFQoLVoWxR8F",
  "key15": "44w6gTBRbuG82jQE5xUnyS8UyehGTTGRpQgW7QXJDsNZsSbvSjimmaqUfYrfdyCPerBSdG3hjx2P796LG36jkgS3",
  "key16": "e4t1jDF3BAHfh5SticZ1WWn8mGA7q1U6hAV7HMFK7VZ8khfmNKF9d6LeZWnsbUbNBWhJxzDY3Yc3Y4e9Th332xa",
  "key17": "49rdBdZPJhb4bts9Q2c14EFopwKjZLnetC1HMhNJYAttJz1BYM3fjzrnL6rYdML1Rf2GSy4NkdaJFY45rJFHzAfy",
  "key18": "1v21t2EDmhWf1KC6GJ8YkVimRB4xufxBVQdAcwXbGkBpZCEu5XXgZPx37ZjcPrrL614DptSgJ6wYoeBgXanMLKr",
  "key19": "3UNXQQxrMrx1pAWCBfVXMtARi3GWhVH9SkGuGiNh3jc5xuZS6BkwW97hjVVzUYjNfRfa2ghkAseez3H31fKP1Ago",
  "key20": "4koofyRhQCvxKMvwVvMaPXZGy1iTC351pqza7cJod6gikvyx919mYdRdk1E313wy4NZhUN1ybChGDPV3NjpDfGT9",
  "key21": "gCrkDgj9hXLgu9zDYSQbYhAkgTMiAp5eBvjgPtKawMrAomM9vvaQ7LcZ3L2e1vAMKCDo8REYEkQQZuAHd5bmt9d",
  "key22": "35HqKLsW77yD7coZbAeG5nVJJZ3yGVPb7vTQ3BJnYaqu9SRF4jAqFztfo7bsQY61aKfAe69dmwF8PqHnracGrAUn",
  "key23": "4AZPUscfDRS4qQCg7Pb5FAYwG9zFNdiR7LxhdLnqR11VCrJYQ6Hs4XTFZ59FpDRJzybZKMC2sz5HwWYND3i5kTcz",
  "key24": "3ewduJs8Zvv5WCwrPtuo2NnQp6pi9RZSfYJwJRzSEsUAgMcEhRvB3GsK7oYymgD9fuQrSannAqE3K4adg7c2fn44",
  "key25": "2NmezdPG5AbM1LuaBUfeWHCRmwAQtFEKwVFJhFNNhaFUxRK7GpqbzQr6fs1nqVsnK2PBqR3H5kYnySBZ4JYx3hfT",
  "key26": "2PayhbkEvCsgkF8asw1MRd3fJtg6g1itjNbCQNLzmcsJV5nmQbQ7W31EHfomjnkov1f5BBcKDjtzjtcCzzDfr9i3",
  "key27": "3BQXGtewJEWhjyusFQUQMqNCjrn5HYiyDsMXGrFEW93zYyPvGAf9Ec3u1DxzWKqcR4SQqpHd76GDDDqE8oBjnStQ",
  "key28": "52uLqYvRdg19xGECMvCv1mcgiXKeJisHVnn4j3AUaNx3djxTWhrA1qBhEvNj4HwfgjrDEjV5oWZsh1tC4s9oozQ6",
  "key29": "5T6BbZePdsspREYT5EvuufinUnHcQWX3A81vG1qrDTLJLE4G5P7Bsq7agUdoowo3UAGVBuLC9cdrjuYatpYBEMJd",
  "key30": "3iDmte54tKg8o2re9yKDgfkrGqsJtrFwxY81nuJF9bmTdyGiM9g425sme9kEH9NDdCpBRoCxXb1yptXumJGsd5F9"
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
