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
    "5zJP73D2ocdx7bzyvrG9xBjKBQeEJGqYgFrboq1WHiZVv9rhFW9R5W6FQMrvoGothWSMATazGTM31mWLzHvmksbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fkKAiTvVnpWyncbdTgLEBFkVasyznSisaDR6wGcPmSJzzG9yPgHUk3ySssR2b8rvsYGj6uYvNcw7o6S8QYcJ9y8",
  "key1": "3ZbyccYQLFJgaPZmp7xzHwEiU9jE6kyVRCTwG4F6NE4oQKUBJpng4m1ab9y7NicqfPDrSvPnAGk5KFptAmiLcRut",
  "key2": "3KAsm2aFfiTBepoLp4ZY9esV6VrPxCvqQhG9jL74d5tHYX2bT9kCMx2HPukDy2KRxW5hiRQoPgQW4nUhAcZ6yhLs",
  "key3": "5FakSdeAgxt6YqQ6qZ8cpBsA9Ye3j6SrRLzKRzNJQcu6dg8Ak2ZZ6UctVg2TnBAh5vmfuNWnXLRqeRezexBdK7Ym",
  "key4": "52828HK86TTyw9Y4EBoX4MvV3xsKagTtke7dy8pi31FKjTKir8uHDJkoysvqZpEDW31TXM6PC1wjZLnHsWCFknd",
  "key5": "4WU6nw2AFWWQmtQGZcEcXX6vpQiCd1xMavt6RWME8gKWNsLPirVSri9XezV2Abo8Qd2BwVssNb1rgBrSU8sKcKeL",
  "key6": "ddKFh3N5SY3kyy6Kxdc9MfrV1EgRZ59wBKNRHJLCcWaTWq4GZFigCkhGmQ5fx1zKvQxuM9Gj9PJCicyS37DPf7y",
  "key7": "23yXvKRnTWhpkiquPrwwLkj5ZMDazRCGsxG7EkwDpLpfQZcSFu8LJh1YRzikSa9iFMtNVFeEKv2yw6DXoxiZa7x8",
  "key8": "3WUiC3wCqLUa5iwaaZqw3nAuFpyG2izek99naayApo6Xuo1UNwN8okPnWjqTxPm6XetfMRG1MFdKmfLMdcKUKwvi",
  "key9": "GTyr9CfDdt9eiZs7LLPH9SML4sBK8m4ZZc7ErUUudPj9YdosMD8Yo3MqKw51BGXHE61q5eHv3nk7iDhfLWiPXze",
  "key10": "2ErSW9XA7K6mCyeDMmD8GM19u61E9QuUJp4ebSa1PxAVxi98sq3ELD1xEmbPEAKf1Ek5rV9hDiPvteGLDJEBncr7",
  "key11": "5jjkVgMVrXRQmxKwrJYS6r6kLeMvvjQWQ2mNvK3PRXXP7LzZ3AWxpppGLZ34onbXphpiX6W64NTS1ivZT6HCcSvZ",
  "key12": "5AenGd9nk1Lb1yNca9PACQhb7GRcq5p8LikQw6MWYF4PKe5wgtqibq2eK1n3KczBfc1zxp2iCZyhTWyRYVJgeG1Y",
  "key13": "2nvfjfxEm8ZtRGvr4mQoFjTNwtm7dnZVshrvWUCHDNvnTTc6UtSaeSQiYxJehFgpdk97Bm2NVuLUFZxmRbspXzQb",
  "key14": "3KkuGjfWUGpVD9JUfTt1Tr2vTHsoeG7Mom15vCgRhgwEyq68YceuH92itfjw2x9iDQ4WUbnFGwY4ZXw4EJe8qkw2",
  "key15": "DeSZJNQPDxx1oVy4vLRMTtbUUqywfu1cxYcXgA1mV5RR21J31ro8zVVUaNnGUS9UteDodKmu6bcPeTYmjfiMnTA",
  "key16": "4fP7Wyci6eeveSQp9zXdYUAcmMfqQfETu8eGiDr5JRvDYyE34w1sccSqbYLKxQnHUYZqETMxAVHdvReHvDxop6ue",
  "key17": "3sDqzbZWtBqqkfhd7U1H9VB86K6QHuhXQnA91pTgGTTBvgFHWyZMUuf1bXtMvVvBcy7J1FXEoxK7bpYgsb9Xv3BW",
  "key18": "4ZHnGMW28kepCE6umqFZ3dP9UhfUHw22DTmpo9oB5ohRZMdVCo9XsVK9g5xcmRScUbCX6DbWS3WMwfLeYo9UFiqE",
  "key19": "5FCpBHhjRzckExuyEUN6Xf19J9sht28pdcgRCvZV6AJ2qViy7CRKpMdj2pbpc4vH4upKVFMySYaspGtGqg5nNsZy",
  "key20": "4xtaXzgRNxAQcyK9HfQSA9TqkXgwU6JXQLrLbknGq7mJ8F3L6nAbVsHEAX4TWrSSerW24tLZexZFPuUshE1bTjsZ",
  "key21": "utsCeiZV8haCNN8z2BBjEKTohEyJnhSwWpmuHgiyLk3xpCoS6wA9xCiHB9J4xK7KEkPAPenE4izM2oVe4aswSRs",
  "key22": "3t2FDSsbNqiNxKSb7PDWhp7ihe62gk5wCSzzeqEQAjB5DiaTmnkK5NEXB2JGwpCVpcd8nc36rg6wJiJvwYoqM6sy",
  "key23": "cgUCb2s5znowqvAn1UQ97MDq6YrxPAH2p96s6eQtT6pqBgHHVVCPbN4VDDwa8ntonvCu81f12iX4tZXm3hSGk3s",
  "key24": "4B2YqdD5UQyumuAeJnek2HY77fAb1j3oPrF5mAMFbaANxctDw2C5EZnSonVx6yNfQvkZTdSALsuv7ckJEfxoiUd7",
  "key25": "5NeMp3z63diiY1Ay9GScEgPxdgabSYhRaRXoaYhyXwQGSCpw2E8gocbSDcadg3oJbUsoAeryZX51ZhfRYbEyLZVm",
  "key26": "2WthfFDWPhMEYi5mFM1PYJvygV5zf6FJ7r5PRSvJwL63SYkRrFyqy2PtTuVH2triSnAE2RnsknaDctPDPWRghhdb",
  "key27": "4ksEsenC6Bk1vmntJQceFkvEgYDhVK7SsnRvKdU7rj1diZj465vSasrsPVqRKHaP38hepRbbgXEjQ9y1XSs8eK48",
  "key28": "5MYF19JoJR6NVTkXf6QBLr9roRZNpfDTbkJzW6McnJ6eWRQAhUu1Zr43neLfEDjRsNPHPNFSRLWGh4cB2TKU4MNo",
  "key29": "3912maHUyW1mpeBTxNCxjeAqNDfvP9L1NPbHXTqKq5LxzEzW62FZEjhHg7Q51MrUy93o5rhG4WdHeorFvJ7T7v28",
  "key30": "NfnXjcbRdK3dtksmQxgrzdzBGzvzoAJEeAsQpM2SL7VAshj35UzUHatRqRA3snGrKMF66YxyFnQmvJmcBPPDKE9",
  "key31": "2jiNe9zePUDdJ71rpuz1irV5Zm7kZJHWHdb5VaxesU5m2cAHmhbfro9Px1tWy7tgXmB9Un63eGJCSKFts5fv5hco",
  "key32": "55TQ7Nbt92yJ8BB4K4bdwchsBTtFgGLspptRaz2t8LCaxbj2SzTPeWVHXFV4UnsXPmas6BeXSUmTupWTnnj63wGM",
  "key33": "52utkPnpAuuW9wpEb6ifJjXZ3XXz7xvv3pSWgS35pRRThXGg4UyPkqv3CwFmk79Z76gVjdAmTLRsbx7i2jeHUvYh"
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
