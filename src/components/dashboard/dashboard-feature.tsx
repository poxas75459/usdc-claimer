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
    "67fUzitmNjxD37NAnBn4qKUucfg87H65GoTSC6ykhAc3oGVHuKP4uvTziGfXfV8wRp5PPUBFyCZrvGgNmkN8fc72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KAiyYeze72vAKYwLTckNbgNA5qYjdLN1nfZ4MGRQw6ZdPuQYExHWsuh538YToY1S1gWgWtP7hJsEsmiSpNfEnNx",
  "key1": "4w8xApFLBuMtx3w9PTsiAtRUkhhHmwUJuxFbvSPpBMwDzxRYffMeVzQZPuuqAS5PesfMNsBhMuVDqhrkaxTDAJQ9",
  "key2": "5tzKc7eS3sJhr7y1AddC5UmerEsipisQChmFuERkGbqMuJnTawAPJFD2VeenaEcfcRZDoSvoS8Y5fHnSzz6R6BoC",
  "key3": "58WqeVT1erQLR5Jk7w6qoAPW2UN2TewgiZrDCsFHshCrwfHrmAMpyZ5yT47Fo6AJBa5aRFbHzEHTvc3p4BKaopos",
  "key4": "5ikgJHsqv5p13UdhQNt5W5SkJSTkW7qKVVqGtFxzhsg2XebKCNYDG6gPpuHfH8qUhzjM6FCZYiBroV7XZWW8mKFr",
  "key5": "4sZYugGzxfkAWReyh3fSQP42QSbQnHwcCAdHoNx5WKWncxZJbXWe9ieBqzXj98nWwGwhQ58oqc9v9PQERYXVbGgZ",
  "key6": "1o4GgDoKbmsfoPwwF1tUT8YzgGd1NWnuDUnZfLxNLwceX6rQsukbdqMs36eETyz91ZaP3t7MdBuYVxiTHyU9npW",
  "key7": "3FRWut3fba6PUY5xd297ahPzXoJDVebPNjhGskf6p9mfWzH9A34cSKrXEL6Y7r6Fs5B3Y9r3S63cCee57RjVPS93",
  "key8": "2VQZCJ38yMzn6MBp7P2zznmvGKzzzYjqMxyzZyYkr6DC8brZvHkMRxj4e8katm5fsS6BoLWL4DdPfNhdX9hCaKRT",
  "key9": "539vkMx4haknNvuRxxdnGPpe8coGdXZWYRX8unZPzwjoRSGqt6D4NZgiiFS8D4B4cQHLhT944mVoETowVtwuGLPf",
  "key10": "6TWgFdWgynCxrZ2n2yCLDithFNtndRQZULerAwKkt2Z6rAkJyuCm7gNQGK5btJ56ehp6N13hrXcEaY48sWjkLbt",
  "key11": "4QUoJBK7qriSTJrWRmFSCrpCW1pJBwjC8CxCTZSpAggpiaoEe4KnT9x62WE7HZR6G3i3iQYPpVi9epNF7GJ3etQ2",
  "key12": "2LqZ48E3xVANNJhxPp2Btx7Qrfu6e8SShWqKoWfh3pnfoLokuzF8UiZfvNFD5SCVcGDmeh2FiM1M7xEDvUWiZZQJ",
  "key13": "4WvUWge3k14w5eS3sWVjBTDAWnMoJ7ZTafWeW6LMm7ro7fHDH3DbReeFMaDhHw9zbS2qCxxvQPNs4YDwN1QzgeHt",
  "key14": "4UZic62EzqR8uFt6h89KrGHGLRKHRq8xoasJS2g6NuuzJRpShKdarBbn7ae8YUuy1D2FgsXEbHq3B7vfF77tsNK2",
  "key15": "2brAEufNf6Q8naBfziS9P1fTLRcRYvNxAL4Q1puqNs9CFUwy7v35eRyPAmo61mdcV8VEAHcQJ9TaW1xEZsDf6QHX",
  "key16": "56nu2jDEDGLaGerK727yRMNpe4cLCiHsoskYSyeZBGJ8jWwHWYxvcDAr2yxw5TwW36HYp8oLCWsCw9Yi5E4Aucp3",
  "key17": "2jf5D1MbaaqU3NB8VjoMimgHCyMLSFXc1LpnZqAtriGAKDt8v2YJnFPyPmWsTrkPUESwhLxdtiBcy6vSDpoP4Pk3",
  "key18": "5o4jhQxVA2rGJJfVCkQsPmk4sSZdTcR2NQGJUapEVs3Ctri1g5qFGV4GNKjN7zZVoJGMs9awDowD6Ep6Jort6pmq",
  "key19": "5fRkLyfCDYq6pRUSjzLcM5Gq2QV86mGk7boK1p5N8NyuHfmTSyb26vckvM9Rrq2rnMdeNT7yk7D93nCKRG1YzCzD",
  "key20": "ibFX8qDtXcvgwyjXP76xV93tdwQTcvvYeQNPcTUNZ8vK2hqmLyrygo221o5w91M4sxJN5L57KGSCJqdhLkakSDz",
  "key21": "q7bsD7PW8shNBTMGY5kDLMsfJNVzCbNg4Efoev2oEDRYFYqix6xh2EQu5EGBsCBKm96arEt4ph1FgrQoRQKYVwG",
  "key22": "F5Qtmj2A7zp4HzmaV7VcKSokgwjkwffMKpASQ2ZgN7mdKg53p6QjPT6RmpekzgpJDXb1fL2qqQyz6dTsEtCsBub",
  "key23": "29H8cQB3pyE2L45XT84FKmjamb6FLjYyteMZv2avdGoFE4sexagoYpFuh6Yw2zWQi6fwF1711pxieh2tk8p8TiUu",
  "key24": "2W1B41JKZYEU2ELa1YbHjshi8Z1mJ7Qso8PzX7YFoBFKfBWdrXwCFy6716HdQsrbof8FFsqfTk5JMkeH9mgxd13Q",
  "key25": "2vCD6bXckbKxBnrZsBavuiZ54HgjGeqrNzYVzZHRh1FZVqUzNZwzoAngFwMQ18ZToHkWxHugSNb4DCUErj528jXK",
  "key26": "2EENS5K8hh7eYVA8Zrfwdo58Jqb4QDZzyfNhh3XD261MKToZo14wCZdtkj56fU5n1JScD9qVi298drCBTF5vSoqn",
  "key27": "yptgzzFzhyzUg9zae1ZbvWKJAT9dnFWt3FjeTwA2ZiesTs59MLtSNtHCjGQGDGb4YGaCmEiC2kmA99tXrcewxnu",
  "key28": "3QAZ7MhJBgygauQs6KTt4JurTL7cBf7uzGdbvTu9QZD6na9jMnMFefq469mW1dGZAvpa8waR92ZS9mgAr8K2xQhS",
  "key29": "mcXvhfgcUbPw3BYc5t4EKL3JoYWoaPtrbE7qS5nwwFHsUUcK1dXpUv3xGx2FVRGeGKJS4Z8RGvdvsXR4toECiey",
  "key30": "5yzq5KwTHF3YRWovw9W3ac79wM9E89UGqDnA7DkYVz7fwdoqmXdf8fppozMcFejDY66uW5MwHq5qWD4Fm7v5RBBA",
  "key31": "3B8ktw5b8pLcrY1aSskS9qMuxgor8bcdvBJQpFAnGERxdR6h41A2CvkPwUiJ9PBKeEHUjAgGYpy1pJN2pJeJMMYD",
  "key32": "5HFRTmy8yLXPZPFFpHTTeYPhNnemYyJjaq5xGkvNk5TmGHepDDUReNQ4ut8b7nmRTAUtqTzQtyzSNs1snfdtQ97m",
  "key33": "wUhwySNdGMq7ysjm5gtti2aUMurPrVLze6qcA1BfX8Niyq1k39VJ1JwFs285ZKBHWpvdC5GRzQRQmJSCU6xRrVW",
  "key34": "5yKS5theAyHNTedfiubjYHdkCYFB4iAwrdcvowZVYhfBuuT1qbgTfKpEYtiZcpmTZNWMKHXXmSxH6b5L7JZui46o",
  "key35": "2VU1rztGNd4e152E3UANx585XciJoLF8NxC6A8Hhw8KxVdT5fbrf5hDfsVdzmiBYqqWr387baEH5bmjRQxkG8UV6",
  "key36": "adsKf4W5Gij8n1AFUpemFsh3NXsevKrx47QS9KViydJYV9zMnqVQ1bf4yfxsMMqpg5N1Dj6tNyaaMDrjz4x9Kfh",
  "key37": "6QvJ1PrAmr5ZaPPZDNMTpZkQssw2CCsENDoK38aKCjxqhhWFDeo3oMbrMBe4NnYrkogNvrnbbSdavZDr93MbDmF",
  "key38": "dGpB1mjmPbT51nAfpfDYRAfpFpQ6kZkoh4fA1QYHfguCF5B91765jF9MjHHSWK3hi7RQCdceLwdJuNFpzeHUz3P",
  "key39": "P7rvRdmrriUg6d9JC3KuzuBv7vMeWcWomDyunLEKjTM1x47TNC9juDzEK6MM3VipKNCsBWcfYm4TZavQCmAazGQ",
  "key40": "QPhaQGjvFiM79BPiUNrWefbcRajrFmZM7H5JqGX3AKaRWTSqzYNSXd8EZwJXX6k9CJPNS15eScTKNVf5GaeySVV",
  "key41": "5Cj1yjYK9DvSewHNWYRkLVbjXFgnRzFnvnHwEVMidB1j2oiTqwW2Ez77PgsmnecedmUR423Qxd8kq54jHwm2FYzG"
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
