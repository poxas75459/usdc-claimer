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
    "62VSCnijWvacMqmQYpxrXA1jCvRar7Hdwobu7VW39z4gftaGSpVKUDT1iAYdQWB3pmF2LdTG9piuxiv1y5855xj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vXb7Zo7SHhSNrYWLifcBrrVoS5nEyvK82R66Vtshst5K8iFXFRbjMhT3ngMi6seW23d3ZjDmkd9vY8MHeSDDXfj",
  "key1": "StuxjKWFvVyfxsgDo36KU2s8B32g2n8zKGfi2N3LwNh7YctzYCX1yRduEHC4hki2mkxWCYL5v6tdJqeF29gi4PV",
  "key2": "3qpsw28C5yuVUWPQcqbKBAShNN6ojPG5ruEQ9kQgM8JCxqMim5aQwMDnZdyPmyaqt3HLfZVf3hwbeqk1PrpNoTb5",
  "key3": "4xJCCg982dk8gaQivSm3dbPqNdqJ23D52PL9Sts6pN4KWmNbi9ziZitp6iD3vzPvZuWaHmdFrqnwguYCT6Jdsv5W",
  "key4": "2LxZwxfswvSeV9bqWWMp7NVtrjcfKgAuH8gpQJgzL8gr3cTSxXnY6s6HXZsmL6EMoYaYK3mruWUVBStyLCR3ZPHd",
  "key5": "2U11ouYdaXLPvUyJTz4gzTa3kfPmNig49y8sKSLiwHP1tbSkF6y1HBeUtiKwrqJ7euCnjJUy3npv4UYYiDqLCjJ3",
  "key6": "26i7efSVr7hNVcbMbTXtL7eZ6Qr2C5qGYNBKE4zUBLjphFxte3cNuJU7nbhwCsVQB24sbvk3dbkXvTzA1oMXPgHU",
  "key7": "2weRc4MdwbjLFAcio52Lrk2oKrPByESu4aXH6GmABjVtd9XRXnX7FJrAQ8ScPBRmYAj3t3DyDFTBJXbmggw9Huht",
  "key8": "nFBHizVsN76dsxY6VvNpeFP5Ua45WyqzqkqaMYhYdRMUv6iBiCUZGnwL3vbtqhaPBMHdUjn4U3ZWfhRhjZURMQS",
  "key9": "58BYA62L3GLCzUj7753WfrJ5DC4m1vxR5Qyma6DGtzzztVxiU9FfMVurWiQk3dVzYJfwMMcfsro5XT7V1W6b9q8j",
  "key10": "4wNxc9Fztd6w5oN85pz2EUGkeM9U3zZBsR22o4LJw3Ksc1GncrBAiTHTbB9xNNR4wbhhh41FyEXPyDVUdxAFJqFi",
  "key11": "2Mr5bZEXg7WsQemRpwZ2edMkVkZrNfWRLxb1jsrGi21Sa9XSDwF7pKn8KBCv27G3Ey5fbqqNromsGtvS9FFbGfvk",
  "key12": "5C6wWh4Z76bmtnzGHL3TwLhzGNccmCxx2UXrPZ8xnHjx3hdr2WgiYNMNsbz4MgzquiZvBSHvS56jX4GC7zY1SNsd",
  "key13": "zaePzLADrkZjxGTsqGQb19eDGXQBqRNa1a1gmwtmdsZY34hBvcz3bLEkbKnkSFwjrum6CH36c4w3P2XxWzG9YMr",
  "key14": "3JC2W9DgsPNwGcmqwsZVkmRyPYYj6HG4gC9YCQLLMTpAZWLMc46ZoVritbqxpSkT46EDSpUqkosz9T6a2Sd48Nj3",
  "key15": "4bQvkoZM7gSM6CrsWgaGGggLdWX33hHUeDdiqZZ2wwAPMaxBaeLK3wbSoZpMuKUkKEbeUBymMq4shEbx8Su9XDWT",
  "key16": "4uTwkAudNqKoG2s3jEXbojcfX5McQrxypBNMCNHxU4EANrYdWD41VUGV7DMBtEUmcovgarYnveBLGi4NhBQBPTvb",
  "key17": "4BoaqfYgPksEvffHduN5GoYyPxU2mgFFK3gfH3FF71hKDDZVNRCLGptLk7GGrTZ2rReh6gRcgC8wkf3SPYEj6RfG",
  "key18": "4iN782LdCrB7YZ7qURygerZSXzagLfjCo64T8ThdJ3cfVrYniWm3QByQkDwz6t4KrWmjFwVWNtfXSQCRzZZVYU4L",
  "key19": "2UrAREq9WQJ5ma5T5zC97XiqvuX2CvHqf2utR3JGshqXB4mu1VhSZcFiAz3a9qSphjpwn6qBDGBbH9jeGZbYuWDK",
  "key20": "33yfLRGkvMmwRHVdesLNqtqV1u7WswisFgXjRh4dTm6KeUBCqJNguxfBeTL24z8ns1HgufRQmToUdUKDkj7GghDV",
  "key21": "48vK16FET8B5hXBNQuwa5cFzGZ36tRJ6NP53LweYeCdooB9HRnkLtPcFfPKBXLXPSebMt2nm9mNQHnEXXy43knin",
  "key22": "QpDxTcXPta25fR1o6UPkbo3TMT1EyX2zP4GnNrxNg8h5XTpYEz8oqjV3r9WkqN9rCju2pTAAMunLa77hGvRdC3D",
  "key23": "BTGHwNFs8DE7CmFpzUr9d1YD8oA5vSyyyFprkEejo6UBkRU9g4Ftxnc7UqRViS7iEfULF2wUuaZJK17atfUAu8J",
  "key24": "27SCtWAPekt5n3RRfyUA8oDJceEHzxZ5D8mAPEdZXD2H73gBEHmwx65mMecrLD6zQ386yUQvFTY8G9Ys6tTP5f48",
  "key25": "4VQU84nLj9AUDBS7S6s1h8D36zFbR8YLeWPFt5662ntrDeYhHE62MGzSeyLi3dsWfrfjsjvKnsin4onav1LzHraV",
  "key26": "3nRDHBnKhobapwnXSKrg85RruM3ZoExq9JD4aLuhpiDqBCokVabYBKSCeyp4g5S1BirA34tfQNXhz8KmkL8UqY7z",
  "key27": "3CEbPN8dLvnqLKrSyvKkyQy673P4G5uQiQfHyJSpjHWskGxpnoU2TxF8RMyYBuGSGpZtsZLC2kvBRiJSUKPFzvZy",
  "key28": "3GQrkGAmWefH4GBx9FrpcmCRB2gzVjBK1HnNYuBasFsfFmGRwmq939w25yKFqnZJbzf3VCN8jQS5rCAjY1wtKF8B",
  "key29": "5uvDTF4Z4KFg9BC3hR3bgHjT6C6xqAf7s8r8ktjYGotrcrCaRZ4CDL5RKSJbNfNLADKNXcKCpMUduPpSrmnBasAp",
  "key30": "3V78E3HSRagMfaERoANHbRFoW7N1fCiFGUzUVT93LyFSMXwpZWCekidfR1CskSzp5e3ea6sz8bqtDNjU6YFhvJFM",
  "key31": "28jC5fwoSc5nKfLZEhtVPAS9JsCbc3PK3AiMzJD2Pk2Lfa8aSRg539ZVFA8LkncTqvVMahWFybmqJaTsd78KxibP",
  "key32": "39emoWoacv3CVDmcHkQgmQXKUMNFmpeqzxVaFPJUpdJQ9PBrzhwRyfegeRBf3NUhy4UKWohZsbZUzU5jdidzf2kR",
  "key33": "4YEsvGasE6byHSPZqWmUQbpH61sfCEmLabC5M2Kc3M62SuskSvWzFpRx3wyDsZHCrGHMq38k6JQymy81YsCkZziU",
  "key34": "V4Ly3wW4zhkPJx4729s9bzA5wWFKGA5LG7vg5VUWkadpXPinn9Ccy7AxfrocBHAeL2nuwufmtZktKAYDDbrxD8V",
  "key35": "3Lz3FYi5TpG3iTiywjDE4KBoBGfpuyhWqrXx19Da3Rx8J12xUoKnzLHJRHipYHgkuu3UNXzuSo3VjUS5o22VoDJB",
  "key36": "27mGvjX9G7r11REZahRsgjjifJivM6GvL7pNzA8awE95XQJjicvSrWrFzbGWu5V5zUZ3Xoj87dgoFNGsMcDBrUV8",
  "key37": "in9dYPrd34ZSbxX4P7xbWAfdEf4qUnghpkgJNPnrKknipStEiEgdTvZdFSpuB7ypa8RbGVggqxMyMYNPoozEzgH",
  "key38": "3Chz8ubg9WS3e29EDSJvrEU4iaF2TuhVKv995WJCXK5i84YyizWqcU7nLG3qDML4BQLWcsrt5Q4AhLgKc1QoGPjn",
  "key39": "5kS56sSjEMUoCfwkRZqLKcqpYm2AXcUJaXbJGp4XgXxyDBSHMavZG5JhxQ7SmycPXo7CcJQpqnqiQ1urpwunaqEv",
  "key40": "4ezXaCNJ9n4LenZuaJ8Vsn9xjqrXtvCXHddni91qeryJQyfKRQNELx2zT19rbbreuu94vxHykibE4wA8kw74WW4Q",
  "key41": "5B855A3ZDTdjdWPzFobwNeWyxK4zMDZW8NqBhqubJLQeCr7wRr1VDfcvCVQ5A4EquPwZyKudcyk5XBrHCKBZCHmn"
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
