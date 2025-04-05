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
    "4vet2LuqLSux4L3qbLqma9bvo7qStNaGkndqssYrkfqSvaKNCwWFAFqhVy3DgrgMcpRGgnu38RthvG6wbGjuVw7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57SHVp8bH1uXGhGnJ3twVJnrBKn4KKKVko59AzbvmpgszFtDkcyuJC2yJdwEMKheU5JTQt35EWJjk66RWHvUjvrD",
  "key1": "4uSnX9tj21uALS9ytbKiZxi6pUadqCMHnppf2ALjD6eYYyHcquQqRhvamKFPLequxZcD8APfyA5Y7su4D1QjSTH3",
  "key2": "3p2MJcNLzsWbwn4youmv7cXy8oJGaCRk4E3dGaXFkFNVuNRsKjbCvzWozZA9MRZqiqRSRZqtBTojUaTkoQ5jqKGC",
  "key3": "3gMX3B37T44Ga3CSRmtuNJC3MzQmvdLn5jQUvxjVmJnsEnky9FRG3qW3m5RBc2BHXzY1gWau82qFrSmjG6Xj7RFV",
  "key4": "2q3Ur7aRosA5FxAyqGdTJaH6ESLdjtxsUhvX34gfs3LNcVyN6EZ25NR5xJNYeJocf52wPC8CV1J2CyFVrEykdZnL",
  "key5": "3iesRWRB8HNaCw7EzX4cXkSwkor8kp8Gp5XoYqXJRHKwNeS26pJ2ojhddiNG7iFBj3D9dYfZpVuvkL4avRmhxwZx",
  "key6": "mc7YCQiQb1QuAopgZQco8VcU6y1s5Ubkmnbr5R47X4K1Yjof7YuFtm7nsBvB4FMVczr89pAKY9hDwyg6SAfsi8H",
  "key7": "o9E8t3t5HEtRhcNrJgHXRVxqsPUuTmwidgYGWGu4ZC75ykWuHBSE7bKojeDvN781yVR4KceKGTCcJsAFTT5HLjo",
  "key8": "rL7KvrRHNPRfW6uoftnX1HRv25Y2kNhtjpofd72niHJ1tRUTFmi1KNT8XUqxA1HTxukGJBgserony13AL8cWDdf",
  "key9": "3pJ5Sgwdj7N6shgsLh3vCTcbbHyCZNfDnoEnApzWNAK2qVgaqJjjidJKC4PcF1P2G3rRnmNjLhvavFYGznorvN6L",
  "key10": "45yK8TK8xLtg7d5ZrYxfXkwgzYPfGdJ2iGocFP7xD6iM7ZzGWu6fgtekhVYHSr79Na1b8J4Xp957aww86CdynNv",
  "key11": "PsQSGEJBEyNGbHx6na1ZuVLNFHGNtvVkaUFaiaeAG7PQMUSZ1htmUZBLXtRnC8bX5y9hEAHbg3u9AQibhQzU6KF",
  "key12": "4dBKQzBVxn6J5DWvJTmzhUaKnPN13wthudgoy8uX9o6WmVYYqvHaaHURtFAP6A98R91rbQyFhMaUXdCQqpZQkKjd",
  "key13": "2eNmppRfKnV3fvgpZ7djVVtpAvRVudzTtuB6a969uQJZtgBMcS8miaRTNPVv5eTdNz4iopLnb2vdXJ5AUjqoRvoR",
  "key14": "X6DYSifxfNxFs2gP3W7Phhb6RD4ygsNf6PfyEfcJivQ5S9doDc9vGyRUYczx26dVfkwjbJXEzkkfFHCXSoLSSAA",
  "key15": "4NfhKZjnyZL4KCjEKXCrxfjEzWib8jrLEsFbTVFMJpJnPyLyXZD4JXoaN832MJKf2ik1c5bNx5H4D1tMqmiKY1L7",
  "key16": "Dcfa6s9x4PSLVmBQ8k4aiFZtfSP8JpNvDQeJZ5MHA5beS2CzBDgQ5mjHsrEVrvWKRpSMAQio5PMvru2nPwMzMBa",
  "key17": "sHzapkreA7TTujUUnzwWc6SBVAvYGMWaYffVPhPfkQPPig6LqBZp325Bua6K9DNLUbMWbZ55am1YgHEsESX2ZiX",
  "key18": "4AifbP6FBZRLu8BEHD1ggphVmkioMXqXQ9GRpKAAdqn7TjHQUHUCseMJnTNKwMdvmireN8kgNDsDpdfgRymu8k5D",
  "key19": "2oSntmbpMTstDBbzxC6yw4VVzYAgQhDwezSYbw6M9N8mvtycVgViLSo3gLc7dGJHuwmCMZKjnkovDtLVtiTDpY6A",
  "key20": "8uxoExGnKY3RE5yPubFNTtm9aRZ3pXsgmiuB4S1CJR3r2eQSaUM83pX512fF1L2CTYf5vyju1eAN6fNnp4z13yr",
  "key21": "4Pfckr7MFVZAScG1qwUSCMbGPsDeQmVVimiZR1FWymL78NTSQEVotsTQjzC5Sftg25SkZbq8vUg4gEasFswvWJDP",
  "key22": "M1A4CpT3fG7Jfnwmw3vepUD4Li6DqZS3eakWXcJHU6moryjbMnVKJoMAu4Wf4S7AsiFzvMJNk4HXb12BZZw6A2a",
  "key23": "5JLZB4cTY9V4dFkXtyMosbKkBLus2axnPYh9Hm5k1morS5XtZDvL9E1xhWhgiGC3uFLzfQddfkrWVg97gFQcpnPU",
  "key24": "48cEEfM37YkSqdnociiARJTp7FGMW1eKj7uSqztvtVmzv8ogNwQ9MsVP6PDKFkNMnHox6BYiTiS2Le93eywFAvmE",
  "key25": "4E3MrPgzGnn5raWEWFWbhhupLbe1q6qpnFm75dqrkNJTh9UonL9b6f5MBjdvBVYmBpsMd5Yp52ayf41pG7D8jnoy",
  "key26": "5FfY4khAikTZ9VyqcbH5okYa23bzdh1Ueja86mdXtG3p7RRNQhceTvXitR6vzKbDZtLP7yQrKxvSe2iw6jLmZRVu",
  "key27": "2NjebmGgqXiHu39JF5C75cM8NS5GwW3RmCAVm7i3Ad9RybfCjGSB6AgMeafUr7YLvQnuNG4VjJzTFGDDsUzpQSYz",
  "key28": "2MFV8bBTU1pZLnwXW3jeoWSXjZMx5MSrb2CmGS5mdVXQQAmT7V9m8qkVY4XL23x5ccHh9xbc95S9mApJFUxJ3nDu",
  "key29": "tSF8dagW8dXfp3UV3mNPxs16eMsiaLaLu4ZQaqPykkfrt3N8V5pemtQkHVLmgyz7Q7vEsCwEvBodHD1Jh4v1Gig",
  "key30": "4k3vdQDotoqsvNbU1EEtPz3zHP7THeobRqGr7YmVodURrXWn1zFHF9Q7coMhN1PKjD4tyuyvMJVorA1AXojBciHw",
  "key31": "24tiom4Bm5HZE8uW3Kj4LMBAT4hE7akMqzHLM7v9VE7MdVYY8mhC2Hm6UzvwDHj6ZATBx5WGh38ZnGbsh58rTw1U",
  "key32": "3g12PLPR22jMNgXeAwCsJoA49qBxb1zQqkhjdB2Rb79ZBTRcRSVqs4z84sZeuPCRKJPFpWt4eiLBmb1Ren5vNM6z",
  "key33": "4iApzh2GDBtuUkmEzb9A6LBjGrT1FxdskgHHfmNNmQgbhtGTa8NpqtDxn5wPMHdCUGrZBFrWKjVSr34Hcm5nMjur",
  "key34": "x7xyjZ2uKvbpCs5RbsRY9PfH41hzNDx6yCt6z9GV8u2ESJEN4KcLBBR3aV3Y71R6tPbBajA4QBxtfLLFZ3KzgKc",
  "key35": "5mBGsnageQ7wwrK7uyMqaJNU4BZbsDfQajWESxhkMJ2KSpDHtZeZZXtPAZWVjfK2d126gRuLzrerFkZryjeoiwQQ",
  "key36": "2yNLY1dhCCn1vVuXQ9PVg9qzga32GkHHJQbQS2W1tEjRGjUYNXvfLtLWMWy5cPzmLf5Di2TzdpSoTK9ciqSp61HL",
  "key37": "3Zr2xHCvLJykSemUjdNTx41wEAwAgoqiQwmdErMjZhBUEpmD8nQxowHBNaH7cieocoC7JYe1v62DVwY2szMWM41u",
  "key38": "4eT2dmf7hjPQt3Yqm3Qqx24pGGMY7PQ5ohJacMdJBYgrdW5FcmAWNwK1ifpmKTXQuVXcbxAuv8w9To5R3i9qUUG",
  "key39": "3bBqP6EdSCKmCe2TsMR9HLLpJtPdG5BGVtkw8VfCyKmvj8GR6DVYXguS7va4nms8q634mc2R24u22KJzzTNkZinr"
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
