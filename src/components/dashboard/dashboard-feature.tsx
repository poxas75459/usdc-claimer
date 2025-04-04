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
    "2LtUracneGdbp8SqxrbCApwEFeLTsZHNPzgvVUNxdkwsVfEnhAfR47UYmJtYmKtWZsAzufK3CgoFGtQ1XXu5xR48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44UuPW7hN2QCzXDpBiiwRHoxnr265t54ooH98V8aLo3nLqTnDS6D7NXyVcLTE3uBqpFaGzZk3GyJDQApgFyyBVBA",
  "key1": "3n1gE9q2eCaWnQW3BdhvPbWSTwDMPvcTaerrZmUS8isiWiX9ozWZwkT1hv8NKhGmV1vvNxzPPQNGJUghCJXTNzit",
  "key2": "4z2DAVdBvMjpsz6qvh6g9SXYfmrgBd4b21zufFzL3eXumZbmMV5S78Bq4Fz58rUNWVmB7E28gAbcJxj464q1HMXx",
  "key3": "KoXkqbxn4u6XwniNuss8x12jtox94WKWEQagUeVTpkZHT81n2p8zNQUMHus4hd1r1y7tRzAcERLKQfUcrxJuzC7",
  "key4": "3XJXjUTT5cKVXkrFNeyLyDE9M6GYT4Ku3fbivGqtEcfuTCNPUNgZcLxX368d94DBnVAb4UzoB9RfhbZQ8gbFic2t",
  "key5": "U5Vd6TH5ZMdhDwuWiB7TQx9zNxRusNBwg81hKYmY8oAb4cP25AfLc8kkWnTo9opzmNJMaED75gWD4CKp67tQ1WF",
  "key6": "n5jPAHKeLWChS8TSZaxCRgt7bAb5W2UkxUoYA9F2XYHVoxoZYnFN6H5sKMr6V1wvCaSAJ1tpDYUgaCCHbucaVQm",
  "key7": "3RD8kdnessoBvghr5Wwv6cTStSmaCk15846qomy6vxSGgshQVM8kcCsWCPT7mQxWWUCLwmr1NvkxUFkTbSVxec93",
  "key8": "4uEL7EFH7moWqeYLnkMmTpZvTtj4BHFyyasJfePZhboKgcMQjxp5HFrZ4UrpBizVmvo97rB6CjSvAoHkLfYYC9SJ",
  "key9": "2Xh7ympZESQpV4nBynTAXLWJocituEvzWFQzjk5r4E7KTVMuytVE4jg2AE4BAU1QQtrcRLzfhHzGJgnTVd2NrjUf",
  "key10": "4S6AzRRj5aDZsKE11qPgkGG8Rfps6VLcL3LjC2aWSGxZMksXZts9UGgBGyzgVpTYTJ8HWGStME87pfNAypLjRHEe",
  "key11": "3VnjeWviJE7udvN9NPpzm7Z2FnuZULUGD6kAKuw9t5wMC8GB1LBziYz6echu4aZAGHBAZWpgGoha1p1kWDM2KCrk",
  "key12": "3XpTimNMze5vdHnSHkf7KTaSPYmZrm3QZ624ND4xte2JbpYsEaijacpzhLSNM62zW2MA3VXH9JgzGsA5gjPsMEdS",
  "key13": "3h12A86Xof1PTLytagawdTior8sChNJy5zTa7AF4oxmAsUmyKpa26SJK89bgkBL7fY4AAmwdeHPpK3YZfNHrxDGs",
  "key14": "4iNRbpgWfbNenvSysVYHq8oxe5sJd8LTWF7F318a1fUg8c8XCbYVPLDQGBJkq891HqReQmCvjHT71cBVrX7yedQT",
  "key15": "2XY6RfABs1zTxrVD43qsVuKrzMEJmzFiPdRQwWTK7R4cEhPpYqmn82WsMuMk2RBRU3fsvRBrUr6QsKXWFUGF7WQo",
  "key16": "3jCRmnqnmPrn8No8dnX6vgND6McV9NkuA5d9JeNd9xY5LdM53gATGKzqwrz2CFYeDMHmxU3xqDiFuqfVzC411rVS",
  "key17": "2PVixV85LVnwupzcne41CPpAw3CWtuEXA1XNavyfX48r9cD7VMtvG2MzgL4n5GaesTVLpwij7J6DPZGwnpv75QEe",
  "key18": "5L7CUHGgbdf5BgWgedRFeVEFE9QEEqzgZCLhdyH52yPXmnXBU6mVRFGYfcihCYygv9puFcfkAjFqSC8dcGLKsndJ",
  "key19": "3EWJMH7XGMkfvg1XrjBc9XGL5ECqc9Fc8QAiEzXrfYkfbv7PPFdzFmtaDo5AXWtDbhVZJ9ybRxcsY7Ygy3mjpXKU",
  "key20": "2tmFVradGdBSUYF7kEaenzNcbXJyDiuEJ1mQ3YeQyMgqEXgqdH33Lt8Sy8GYMn196oqNP8cTVuLhTkeXQH5NxniV",
  "key21": "3vTePDkjHjnVWdjM1hJEcNvZdKqbbrkfYLtvucyvMPEMKa8zXRojdazPzGqwq9bPTMfSsnfmfsX4VhViqSRem2G",
  "key22": "3abUmLNY7XEP7CBNvxQ5sSCsjuQVMCXEzgp9rRmNMX4AZA9Z2MADh6kGCQGAMgyaVkrUxjQB4acMVgnwRqxjHy3u",
  "key23": "SfKeWnrbgxdEygtWbKgMc97Co1bA1DF23goYFCHLxUHGrrJ5ttZeWTaXNbVHPF5q1vx6CER38kDGHrFPSyhSEZJ",
  "key24": "2KMDQkRHbq9JG2t1SHN9iHQcYhNSH4dsybcLXjTwaicrmDPKHF1JSdmjqe6NhkC4gvkeKWy8sN5PRFYwaemWjuM4",
  "key25": "4erXs54gvLfCQXbk9ZubhLfkjd8jgbVKvwmVjKyenmaWvEYZi66nwyvFF2MvkX8J6EFs2nqz8xNgTwRDktoSoax2",
  "key26": "4riZaSxJ33AgZvop2XTmA6mFNSnd6tVbEMZTNokmxWgNf1YCgR9LGtrBm7HY49V4kJgjSBF8zYXVjQkTPt1Law6Y",
  "key27": "2P5gqWLfMdR7udHqDH3gaKNzw64fwxJjTz1BXjPwM7DMXjBuX69k5icKvsDqTaoy51xJVWaMcz3dojayHSyQTZAL"
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
