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
    "53nKZc6kuTeCQZu3vw5tNGY3W9NFLiCAZkexujBYzAQxRPzd6K6oDn4qCmaNCdW9qKmAcfJogzyma1WviPM4Y4BA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TRkcmReNkjx5ZDWZ3HJvN944TC2S1LhiXqJueMJQc8TLDGrffuZLHbeBhhEyRnLQEhSgp3mRQxjU1baL2tmPLjU",
  "key1": "51QjLYc2vPjv5na4iELVFQ2AP9KD4yQMHNPWNXRDC7aeuGG4AHsT8KYNCoruJo6N26qiV71MDjPGRGHqST7k62PH",
  "key2": "551NwKutXPkrMqXZzYwZztdGWxJc5UPrLZmYmrgQu5AzPMibcr1VjwobsQwWb5giv3t5EhFuyWhTPHfXUxXiigWP",
  "key3": "66jpx83DNuyx2pomYqrfZ1MbfaWcNnPXjE5i4kcCi1gD5Wf8ti1moaCfsZj5q9zCtnV7zFhNXmCo2Tua8KaBNuSt",
  "key4": "4hzGu6LRxNNa9fp8QPnuq6LyNawj9pgeRRUCnQ4yoSic2PVd7MspvRBu4AYUbjo8kybQYyyM3TfATwZ783x8kinE",
  "key5": "4VskMbtSJcRe6yjdXYcQvfUqXzwLqkTdmjDqKzZaPib1SgVNgZpUALfiGasZERKRHbpYrGTkvkw76uX2yXCcFFuM",
  "key6": "4ccd6jWp7KiM1AxL9JU3QgsWfY3LgayTqcdiBzcx16AL3uGZXRgsA3c3BUrsYcZiwj6wvd4uxjwfPuzLeVVP2hsA",
  "key7": "5yb4Quu9pJ5wpmSXqvbmzrMjbAdHG5xYSgDpDXR5staDZqui1LQjzkzMqEcJ3KvJGfDS9n3zbnqHeHtyC2RDyX5D",
  "key8": "fLLyT95V31KoMVT89EyLS7HcFhWvKemXGtJ18HxHxYchfa5agyfqBRL8ZStVRDAv8HRQuuDKhqRG5fC8wrrsZ9Q",
  "key9": "jVs7BzkhjYnccRiNbQurvoHeFs6xHkRrnkTLfpJaxDhNvw5ZHr7Y8nV3drmieLNxj2WcikeCL6hSX4YW6VQreyL",
  "key10": "2YKKWSTh4rPxW4hZKh18TyJWDPU9thqpdwv955gP5VGGBhvDKoAFd1HwpQcVnJNn9qBdZEFzhHpy7TvYNrkVQX8P",
  "key11": "36Lgg7iWPpKsu9gcXWeaScBxYgACgnR4VibhFojdtuML2h7T3pQkT9QbMR6TkBj2kYmkUku5untFoDqYqyifA2e4",
  "key12": "5bEZJRTFMeoHQUJkSYPXcBiZy7ggWUW9U3qYvDCwM56vhwWhsonz7nFqZoTiWT84x8j1KLX55pVqMTmU7vCnvpCt",
  "key13": "3QfXEXFmszfVZ3GMZorkuk8Sua7wYMJNTd4tEuVzPUv3WjF2FXDM7Vak9NBB6A5g9xBT22HWnek47LKqsjKn6MeF",
  "key14": "4QQqp3k8jFzNgfjtBaYisdDdKt2LsJsnzXsycu88noUTpKdoHXP6Muthc42Ea15f2Z9q7EhrziyHtkGnZCHmt6gF",
  "key15": "35jremE1Q1ZidCephHAwdUncofFwh43maut6DUFZvdPkchQQFZNj2bohKKjbAXegZHZzL7MtsVmRXuMkWA3Ha72",
  "key16": "3LESQo6AdvXaBa6SRcsEAytVmRzFVMw8whkthCKxrUa6U1s85warFVp5ApyfS8QzSgUHfm3CDcX9LeTBwvtnQEpy",
  "key17": "NF31QQoLtRBJbdYCXkWNn7sgoicYWUQ7nG8UUozZLxXZuwarND9U8Q5eiYnWxvDJypRExmVVH6CVUhhesGMZSau",
  "key18": "2tAgoQEjN3mcRP9s8vkFKDsJZ4hXbh4ryUkyJCXfAW2FDwt7u5d3RbgPbL1fK7qb1fkejkkRx8zo8gJ59Qqf6ncY",
  "key19": "2yPpLxxDbhqEyyLnXnGzfwAAe1MhKYzi97ebpvHcGvvDhmQGZUXBiRt1JFGUnrqcaEdYrgBMgUsJ3ybLWsF1VFj7",
  "key20": "5PAouW18cqzi1nkEGG1jiAw9X7Bov27PVJP464cKAsmbMPwwN3u3JkHXt3JBcN42bKFYcESTmhDemcuwTcHxdp8b",
  "key21": "61hpBoRFFvGM6bH1cibEvW1Ha9seEWQ4oTjM1z26u1rJFQH1S2KuVoxExiu4mJ1nRMiAvswBDxBsC4AZSjsAyP5b",
  "key22": "5FDJUyH2QVLqEWDVrPSeZKqescLVeo1MWiSMxFGb6zxPM6EwofrvJG5FiBKa1KkJxj2q3KxMzdxxz1GbfJTnwMhZ",
  "key23": "54NzMqYNPALPGhpyGPVmwThmjKEq2vK2tStRjeBq1P4UtivPoYp17ueqejJB4n7xWNStJcdytVDyeHLdziR4X5me",
  "key24": "3FdHzQtw6uEh6qzL9GbUkCsLYwuUCFHw3KzSYoksWZh9qBszS6STrJ4Xpy3fArvX93hKcH51iQ3LwgjCSrdZYNb9",
  "key25": "DVkytXCu9gYkG95RXrs2sixZSrMn7VRA7qm4mDpR27hU2C6YvpBugCH4eyX6zdA7TjxgtCyNEqN3aPpY79Uzi74",
  "key26": "35iXQC9fcARK7duwcooVPeNNVQJJ8tYNX4wSE985bUZv5s2g66hAXybKgodwKCZAbjCL8oCrSJf6ro7rjbKgmV45",
  "key27": "3sdMCfm7FPx4exYgpTrT3SGqczY5YyMpsFuFmn5QDTPwtvEXYj5oGwEbj1dhGGn8Z5e5rB5dL2MEJozMKmAo2GG5",
  "key28": "2XrADqd3BUdn9ETGQDk8Vjru2XzSkXwq4SWtfjtHxQBmUg8ZJtJj8dgdfQ9394Jko5ewiBRgezPrFRkbpNDtDPnV",
  "key29": "3uK5LYgBSiFuVvX1GeyPsDLsEcpvzpS9GcVGqsbYv4aBK3azAgHBAMm3wshEScM9BQbMradqh8HzDnAxivqvSaDq",
  "key30": "VN4beZtHb6VPZF6qASuefyQPiG61xVUbcU3LqxcLoL9ZCWjMod6YsGa26ieMqvg1vpP5CzvWrCU9AMx6KhAvTG1",
  "key31": "24u4XbX8q7Gp96S7RfmBF6x1Pkh1Ub1VqKZ7BMDg8w5Lt1eShGvUgHShz58tc9dxrWmADGJBiZdwMUqpm3xUK7qv",
  "key32": "G6NUierSsf2oAPNPMe3UG1Lh2R79zsTQHEt8zaLzSoo3RLY5ug2FSTZ22T8Z2ANR22k6Q61HwENchW4CuTYKYH8",
  "key33": "3P6U934T1kFo5giHFfckEnx7LHQAGiEpMZEasf2bLTiMPvSbvfCTMysus3rtVNdUBfeZGPVCBYEhbo5yQXF7tgRq",
  "key34": "5WtMYmNbJPUaxMufnLrmXVmk8pGEaibfAJgftoBJkz6toSoU2HzybDdov1da8jeFPC9snmCkDEZJ9rpEnBR7Pp7U",
  "key35": "4x37UvuBQs13PhN9SiqBDCaZhoFWVR38tcuXYLxxCVwap2mM9EN3QYcxsgctQbVKqy2tefritP2j5EwHvVQv4HKj",
  "key36": "4i2cKCEkdYRDjiT1pqoNSXbQg16D1NAjeeBfpjVZp3qsen3ZXGtvTQzJCS8WadpgqTRMUeu2vvg8AxQ7omtGEJTM",
  "key37": "49Gjz1YTJS2ezDN2ct8xJBAmPXE5hq8LMEVQuF8PeaK2FhxQC6qMFj2MWFPdqSXnaicnMs8U2joWxA6LnxYEnL8X",
  "key38": "MtUCmcTK6HZ7Zg9YadedCMu3bQ7kWFkvuexGnMH68UX8kz8NjADsLePTnEUN3uponwvoGxe1Dqrevyt62Wgy8ub",
  "key39": "3HWz4c1eVw2LTqZdnTBoG9Y8oEfvHKDQ39J2qp442bsSG6XbmxntjCWiZaUZxrVza8fw1Vjp7LYH3Getnw4mtEEJ"
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
