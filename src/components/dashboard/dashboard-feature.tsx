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
    "12Zeakd84Tej6uoWbrJogzabBfy9zB5KqET5AQgmH9JMwHi2HzsLU47xmzxRFiwTAXXRmQeYdStiQgU3saJt3TY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dYybBngMzwWSvqfXhfFaqS7AnwFpDoXz8DvHnvEMVihGm2tu8MkYrm4Q11JGA1w4r1xAQkNGi8rUAzrZrCydmN1",
  "key1": "2j2d5imZ1iY6PoN7GEVhdG8NrXXn3ECSr8EBgHBqhgBHoaQj9WKk9Cc3dvYy22jrYM28RFbxoyv5MEnogrmuB7kx",
  "key2": "5iFSGEMuYzLnUb6gfUbToiLTJRST3CvmizQ9bDc1MjnyPpmuKCw5URaLRzGEg8oBGWkvcV3RMiTYwnidWvLeZ4W4",
  "key3": "4TWDBT5cXfQpBpRaqSoGAiYGRFpBQndQy19qFQY5Xq8jPekev9Nc6WLii81LcMrqg53oqR3meYvF8xSb1n8oy3mU",
  "key4": "4cpUiZsFa1huSS4t6uD5ojSSYKGSq1rT1VP1sNKkRA8WXqKXJKRiJ4FGXCMwZt97pFPpJZV7veYiYVCNnGgyDmro",
  "key5": "4sJjAGhgWRBMnkqzASVXTA9BMQyRQuyHXLRg6gZ1E8Zac2pkRqSLQ5KgXAnGa5W65dN2116QGkZatC9TrRfuMAkf",
  "key6": "3qBudjYdAv8Grx1JqFVffvJtiH86foYrvyDuWCdegU9xj7DeKEmpsBwWYB6Cz1CiPkBQ5VyBWY1H4dfdFqrxePHL",
  "key7": "2G2Ea1ohF74rNyCB8cJLTmLyPG283sEui6SkJEJXUJN75zcdhhjtW8bSGLogjp37PPdMWwYZgwaS1qX6xbioouTX",
  "key8": "5GZXESTTTJcojWHVR3eq3Gds1ri6EeGcoqatThVvUfmC4upQ3LYN8XZLi1X5u7y1M7aVaKt8WEC9QM1Dxkj7PxNG",
  "key9": "72WYriJRo59MkNaXP2QdV87kNSy6hsZubjvWz5SHHRSmgGvHyrjwsEB3xfp4pfQmh9GvzrthQdZR1DCCA1xSrnx",
  "key10": "38wC9ruTCNwPBebPWmuUYw2diFyfGSumuebQca7jWmU3b8tCn2Qjqt82cRAyN388ADpAuJn8WX3NVCh4NYXtLJNY",
  "key11": "5xcogsaeBsYQARspd28Zfp7W9HGNcrvrqDRqUDnceZruv13A4hFPp3NVwbrtHK1CgC8tQoZJGv9wnPeMeBwTZsGT",
  "key12": "5MJRUXLDYtRH6bhoiBJaTSZYn783s9jubNo5wqCGRuYbm8ZGyQ2pjTEv8mWXjrAsURWxJ4KcpDyVboxuAwAm9kEf",
  "key13": "27nVGqD1b5SZCR9zTi4izpmpEFKQaxqyM5pF1iPuwk3ZwrN3Kt4QLV4rK49adAynYVR8UMJc2uNQa9skkTKPfUJw",
  "key14": "4Ke6aFsNpJrgDU5o9LShmrSLhWz8cmFR6E9YrSvmfhsFaCpX4WPFBNjddXEopN9eg8ht4HKYq8teGvnZQ6WYnvvm",
  "key15": "iGTGzNBN5fxh1J2u8qKJ4j6TUHfdDKP3f87TMahnb9gKwtKkqyDPqEBhAV8s46sdoZcY8DfAXnUJfYgDYUCZY3G",
  "key16": "zbNiYUDsia66AjLqEQPgWvHzMVRgQNTVwZRJbErFi39vk5pHT9yTYG8HYjDA7ghbXBo8BhnH6eJfJgHo19uR5q6",
  "key17": "2L3QhXXVJWiKg2wVuMtFJoZK4Sbkf9QXAFEkdiAk7PHWXXaisz1w6D77ii7Aa2SmvEDNrEkfJVvQu7vjHDNnGVgm",
  "key18": "x9U2CgodTmLikBMZY5nywzAzHmnuHLjBLjXYo42p69WYMvGH9XqiDGFY9iyhueytrTT9cZjSgz3TmLxeGfLJvXy",
  "key19": "3V5YbNNSEKbUK9maGLs5Y5yPbtZCqmREvDSt7FWNKoTL7WTrgwFrhfFhU1mf76BKaexLGZTNfXnDNBtCuWL2FW35",
  "key20": "3iXdMd4TttmiaJXYig7tii2gS5tPgtKKHCbQ1MeNdrTiALGZkgXrVXmKqrDU4iDNjPMYXnBGVfjEgkPJSnmGhLUA",
  "key21": "yY8mckL82ri8ZH5Nj7fopMpRqvgTFHu4CAyLgxWGqZ7KM6VVG21xjkxZnc6tXLcxsbyE27R3YgozPPWovogJcdn",
  "key22": "4D5G35B4kKneSAYJ7nEqsYonnaQTVDukuF2FJH9kmhf19RrJBWAWqJrbR2rXpGZtdNRRKWgoRWx4CWgzXuZHZcC3",
  "key23": "29Q1VsoVtk7AprMQvXgHRA48yjCKiQLMXoiCxUj74TvSJsGKABpnD3pLKZfHLB9DCRbV375Ep6eaQ4Re9KmuKXJm",
  "key24": "5JCi9wcuFKXNq1W8ndinQat4YHf3zorwHfTV1VqAWSrfMhc6h6KKmWiHyaF2tYwWjYJ5MXS26bSG3UFau1LAhfkr",
  "key25": "5aiUQm5rFfWrLVxLY989AzFKXvsWPkN4SkNHS5iLMKdj76dXXUNvYbNbHm3p4pmsuARJLCHL2Dg22eSMF627XjKg",
  "key26": "67oJRfV9WjDpipzRco8FHC2y84CsT5hq8x13D9UUHUKPik2CXDzwJLw8Re3YLuhEUJwMvKBz3uTfMeMpBEeiyP3a",
  "key27": "5ftWCGEDxwuJrTXJL6ZM354HtMrrVdiGvoEeeF9sYCurU8zhoXDNywjvwRP6ZwkPadLC1hvHk8acUzCsYXdZwpY3",
  "key28": "4tGwkRX6zgMu2Yc3rb9kp2B25cYHsKPoBtfbHttUhdewyhQJuSdgxMN5LMZtKmz6m3CTVooAYWY6hDVWTpMz1shK",
  "key29": "opgSk8WrGD4iyQKePo78T8QNEWje3KjYjJ2RWT1kmYAFvgRRaoY6AtPVscNz9ZvonCQjWgUYkfyYY1v5YDQyHEr",
  "key30": "4EQoSe9X5PjWiuSBHMX81BfXp51CHYZqZ3QRPB7N6xEZEMwg6uscGUAT5PLkSh5VmWxzQtCKjitziELmSQtxg3k6",
  "key31": "hjwrSEpU2iZf7ehCUfrQ6JbeYUEgtvKSzwoE2Z7QRvf7gbKD6wBgRU4Pjfz9CrdcKnfMyQ2Yei7X9fBRaA8xLSQ"
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
