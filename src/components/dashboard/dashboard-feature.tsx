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
    "2MWzHQLTw8TLrzubKoJJ5CWTnNUpquzBBh2ESyMoL9eipkBgN8pFdBnfjn1PS9bu1h8QGBbxu6WYKbnN7Gyz7kLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RFSrmgsbrNnhmN9iQN7fgj4KRTP5cE9CVEgerakkBxBhxxDtYzqBcCQb6EXt7MMJfu8quUB237qpS3uaig2RvF4",
  "key1": "46uNGQvhoYq3wUxFoZbjxrEoQ2CKLZsePboXzdufpSoUUWepFwh1qaPbzDBX8w9v9Jk7DfzHGnSMMDs6F8HWnu97",
  "key2": "NA5Zh8wHXQyJWu9ABSouyz949Qsa2FsknYw9LqgoekrBuWgkFzVmmZVFp8s7NFTnU3u3zNceNqVN7hBY5d1CZtk",
  "key3": "3te7A1afqJv1PJ5WowZC9yzakR5EiksnsJVsh661UgAXf5LC5LezvfXRx8dpskvu5D1cwLvbgBf5xeskPcBiFWDS",
  "key4": "2AuAsVeUqePh5urSq2YRf2m269T8UeNVPaAJqM8SgzmTWXXf4FSV1QHLP2xWJ4ehAxPkznGRLAkK9L6YEtP6xdhz",
  "key5": "3xcBnsWwTETguPyviMHQgxXeh9rnByQWBDsNGjtMw62HcptdgSHPkEjL2mt2Lks8DXj7Uc9ntJCF4QPmKQwNmHSE",
  "key6": "5qDgfUhUGQajyKEivPELoPdNXc3wSKWPA7DjezqcRbMwKq4VLYTE23L6sNQW43zMNoaC7ZGJHWKG2nvmh9YMXVGM",
  "key7": "4CC8hPjyuqDqL5sMvqWJbWkkTjDQZtt1KRyHqxheW8zPsRVyPr5Qkyoqeg7Z43zKC1Sdj1mwD6ZLnE2Ru3Lzi3T4",
  "key8": "5bY1FWDzbzAePpQjTde4VcBxkvzT2LmtXnvGPzeEkj2ZNUkGd8CoRQZZfxXPcTRdpwqLgc66ZooJxkxU2dD76sby",
  "key9": "3A9dJhLUbURAkUPMR7hbbPh8ZHQ4PzpZ3RJbUNp7emy7YQX6Y2pHR2NGTHAsMeq6ZvhAajkBvXAmkVpAiwQ7iWkj",
  "key10": "J7bUNL1dVgVhWA5jBhPrSWWNFhaJK2m7yAMop2yBTD614oQJRWwpTcm468N5HXiQ4KLD9TF9VmeTGSCgPno7Tar",
  "key11": "YqT3ZvK6d6sfPF1NfXE1pUSCrrtkJ6Dt573gRz2m2VJYBckpJUEsrL42e6LnU7JJWM2YNQgzir76CQKLbHvngg1",
  "key12": "3aRwTUpbvmK9nD1AvrqJq4PVUWhSPv2NkoKuyPBk7sJMXyCf5sCunqcJxZbivsv7MKrdTfST9XV1uqydkHbbvUio",
  "key13": "51Gfw7z3y5eSJqzkTVjwWYjgTeHB1gLX6SYfAXdrJsgW7B1Vr1fXHPvRW7ibEEeDunmvQt7DBiQ2z88uPgheQLxn",
  "key14": "5JJFKhn9rYyK1BL772cvmSF6CRk9wX9uoCHwee3qrLn2Wr1hDnjgTcSupvf5GyHcMKebZmZUZyneTS3tEb2PByLW",
  "key15": "29LKfGo5ewxdqvaoLxc12MWD53rTaQ959BApR3wR7ugtHNygyTM3aoMeP3hAnuBj5GwxKwenjQbeQH1i5ZsJoymJ",
  "key16": "4stbESNEzjgU6sWg7RjragzojFVg48hRkEDdxwAa5PNHi7hciTAVANBGhd2v3cQ6X1g14hyG2NopAB5xf9phxrj5",
  "key17": "oqKtGiJzi4NTbh3pZbqQ81VDQp5TbwUm1FswdGrbJGudn8U1dyAUbtBJrcjzWTePRqyKumyqewE73zmFgqt7A91",
  "key18": "3zdhuHSb1tHzpZEHNrwHBtK9qUiLq59prA8qnDKoSJhwejQ2ZRy9XE7UGgoFxEPEpT7NWqsxqidjRUqrh6QZq59g",
  "key19": "EhPdBAX37TsHngSdwYBg8Y8P7Gt6ANVVoytNzJDxFTB1s7CSt5q74b6bdZZJQyUoMTmDTJBoxt8v4uG4zTdSuqv",
  "key20": "2RYBv33gmmk3pHQvwqoFCfLurgxNgNNsJS9Dq5NtQJD74KSdcVFCXjwskoQDMja7eo2hXJLix8rP3HCWWWRmAjYy",
  "key21": "8mk4WXRfkWTbkXmNHeoncipbyUrgUp9SkzJP2zjEsoJTxufFmTWFrksnPRDrs6mvPhS6UAbFpEGZ6ZoHS2QuyZK",
  "key22": "3Jh7j3GAqobDnkaqmUo5pC2F9ysNKmWcQYoAw45hzFax6gVcmJsgfsCJx1tWVZWGo4GK4bgbkb63NCZTskm6GZE5",
  "key23": "sennPmGhUyCx3SBdwbM84W1uhiqR4hBcpesSKdCBz3hzRVqjc5fz5A5B4h2faKATAiuZ1owqCHZ1Sz27S5t8YW4",
  "key24": "1godCQ4KoeZzQcWnZ29rua2YYiSjXu8apiEVym73vaBtH8DxyE7p8z7b9Gha5BNKk9BkY7ssrwbq8u61N27MpHV",
  "key25": "2YzF6qTxzcfYUktA3DycxXNfrzhWgZH9mMEh1t88StV2uhDYvXjHnX6bfh8BcjQ7H6GZahES8Hn6WezVPqdJh3N1",
  "key26": "61TidcynuAcHLZBgiXVWq17nQfkFVnFvouNHeTiXaVuH66ueKEmAzY5a1qxiah9zv5u4oHHas3axM4MAPiS6sXvx",
  "key27": "5W8sBdMZPSvN2a6jbwihnCBFtGnQftHrkte1UXJpTdWSDqCKxjzB1nirafFB8g6nrdoxQcMsBYFBzRH3ef4DjBZw",
  "key28": "5jNRBgwP2sNuFZSfDJzqrUAyvFb56V1oQinZpjBjjjspwUGcATCUdCEKJrccptMetHzvL6RHYNiNp9wwqS1LqeGD",
  "key29": "5mmEd4wuYahHjYowCC4BQHsgt8VF3ZdKgWDycWGuGEbiQCcQxoHfb1Cv6nyBHEYBpXV6giJDXXqfDjaMi2YCdXoK",
  "key30": "2MWX8qzvrLNEWVNs69iAStBjWv7AojkX1tNg5tyXy3eVTtaRPcmzBhni9YDAu7xHY6ND5wH1Q8iqmrXgcpTBdXN6",
  "key31": "3PGi4bMxzcvM7WNEaMw5iXBamcYHMNDdXLCWoC5wdfMwkKFbNgPEUfzmsuiCmPQdCeDRqk6veeHbCghY9gSgbLuw",
  "key32": "5nKPQPFs7dBbbEyVQG1Gyv7Ww7gAdvqbhrwE7wLzQR6VZk9Cn8Ee6PywYTmnXKhUi5JTZq5f1BB2z5RGcTRUsDGZ",
  "key33": "61cCEVxTyTf8TRqi3DAFJvBUbPijWF7vzrqzskkz4sgFViu7wGxyHiGSZJJcrjgpn7joB3Vveq5QodF4RzcUSNUf"
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
