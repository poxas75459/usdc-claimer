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
    "2BWiGvk1gAQYaDPzoDCfkv2SBauSAVtJey9EEh2aVZNMRXg5A15ALg8x6YntmgH46KXnAacdqV2ordon3roMudYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fmX6p619nJTEmtAU9MWzBE4tySVV1dPNJ7fjSCkRG7m6jXcdfC22tgnswarAkBC9tr7TvPUzkvoWguy1d8c9Ath",
  "key1": "44oSLc87eFSJjTYSnDzF7eP18xn4v4cGY1rQZUfhLwQfdMBq2PXQWxrrbJPAr9S7ngXPtkiT6Uo4e2M5XmKzUGp8",
  "key2": "fnSLjLbeodhkC26YMEakCPve2zKzqRP85wXFPYTzn4XTnqt1CTtxgvqBKJb7VE13qsapk3ehPgSUz7XeJaTpyKA",
  "key3": "dHTmvRzFxf1GdFVwtWwPeZUDbyuzZMN7YKsQ7nsmFpK8PdP8cqErm22QrkepXYiqk4URRCu9VYmkTfsBZekWCnP",
  "key4": "UdwKQerLE2krVB1R5uo6AKmexxor8MVhu3AkaS2kvcqqoZdonhiYo57T6ovhGKs4t4Qghd21DXrf7dbeyCgHQ9y",
  "key5": "45MddthMoTxuorBSDCrSWbNzMdLtZ8iX5pTivFJ9JPeyjR5AeUpsSzthLh5YTRYBxg56MxAqsFdDGgcixV9xr71g",
  "key6": "383cCdDLhzNW9xnn7cgGtzvV6piqnv7nsvMm7J2XyNGWnjszFjZoeXEda4EBwLXrxCmJN6szxDUWj9ctjnea4zmw",
  "key7": "63Uf23hGjCioqrA8bFVAxWJmzZfdqsduP6zY8tNx7hYqX1Lmtp6YoZ9Vs1P8g15EGdBxq48XSqgKfhCjKUVZKhmA",
  "key8": "2Hd6A5auEXk1FounJpjuLagSDMNpMf71q86dQc9Ykek31Z2G49VKZ7pudSJ6MFiER5cWAw2qn6yaymfVp4JUf1ad",
  "key9": "poWoWhfkYKkqtjg9zSeG6dWqSTrgdc45pRgBHWmJG3RrQqTTk5sWiiBoAkzYJsMFKh6koc3ckJRhpMrn8BHbcLy",
  "key10": "3KnPEhWpDaqq5EYbbh4wk2fqzUGGqAhfgkve44jP6vuNiqenvxjzALHLziw6nXU7dxiC552Q4H8ZunNmBkuy1CFZ",
  "key11": "4QfoDcSPrqw5kLfHLGnpDfAWDWJL6sHHNvyEFavsCYMuJmVxPmkEPff1nPgdZc9E2x98k3Ljx1osCa2qb32eoTvC",
  "key12": "4ch5YK8yRQCGkTJ3vk3TWGwquWuKcEZj1EeEkZWSdSVmynQ2CyxdaJMFya19rEpDVcfkRHaFR1zmxL2fBF5RTogp",
  "key13": "3ZNzJFcQSzs1pqaVwypFi7VLDuhjBxtsZ4ddipLqKNsxqSPqGHDSJdaxZCFDPKw7oyqnCvJ9PybMvRLFXHZa3FAq",
  "key14": "27ZvUSYGo4uGoAFmLyNFamw8BSApEkTujKUhNpVsDxGJja1vufGtCNYLu6Guwv6hSHrzyG3Ksq6iw23S1ZTwaLMN",
  "key15": "2z3Kp9FBBNz74sHpNxRpSFTUPXwZFeDaWTe57YnGxX555ZPs9nHZqbWfvodXFZqZBU1vfgdqkwwFg4HZyYNvMEyz",
  "key16": "2arn1v5MSxJ8KS8g9AoVLDYpMxo9MWBd7dx1iyJDHGgffqNLKctEHUBeZnxpe3ZWpqv9RFEC7CBVucyCbB1dTb6e",
  "key17": "2vCTkGh9o2zUi6FZNTt4rDTyLUMN3tgjtiAinXc4xAdB7n19Mw3WMd43dWwwMcqLMYxKrvXMzVJ734Ds7otbZogq",
  "key18": "kkX15t5Auvzmh6KRtKSfZz8maTqKRzTS6CNJLNFTnPgCNmhSvB6QSJ2HGvGpjFoMrppxKF6MQEEcpJj2qhcvKt3",
  "key19": "4Kobb9rrV1NgbR77BHXFGNSW3cozByU3N94crdjXQta7V49B6VBNwtaDvazxbfdicjiA37YGTUCHXSmFkbvNAVb9",
  "key20": "3KuqT7bs4N4nx6Ai5uUBzhLbfbVRJHKUKEF84Gd4hNyCxj6ZJ6MrLbiXeatU4R2hu9qZnVVRvYWA3zhYyRMWqAvh",
  "key21": "3sxxt41S3U8pgv8HYZ5hqSNoGdMtwkv2VFv8mbYfSPW3s95D6iB3zJBq58bz6tj3McLk6LR1qn4tsSwwneTWEKfj",
  "key22": "51NGyiuepqF7qMaiyLFfNuxTeP7Nxk25iDzfU6XbbQqbg64MXMFNyaKSUTBtkrrgU6u2G26C6cL8GPhmDvZGZiTa",
  "key23": "5T5jDSa3M5YskoqatrXbuMzJotQRtdWUQLw6kWwxUazyPWf9n1XH6jq21HzJfnMgNP2KhRkGcHQUgrjnmL4Qvtyr",
  "key24": "VEvL4Lus5nDpBHBeAvnFQMdjYFe96oeSGcr9UbT8jwJvy4GGNSs3HMUNgSWWZZkLLZXS4Ui33icPmSukuemLpwD",
  "key25": "27uvT2QE2kLUPknJRD4cSwExiVxJYuxAUFmVMccFNmjr6pggtHgy5FBEoE8tvQYSv7KYhcmLY3t4KEDdWbLGMxRN",
  "key26": "5NVW6S92k5wyja7tfa12LC1QWS774fvCB5hPfTJX2s7AdVxzb2G2MQU6zwEfcwNpF8vPDWmiiJbZFfE16CvSQzEL",
  "key27": "24NDhnAudzDhCbEKke7yN52gcc9XhMdo7uNWAcYV8D2Lc68qUboCyij7XzECdo4FusmNGKqBghoC8R46w9rMJzMJ",
  "key28": "LpJhR1di8ULSFAkAjjLFp8KzNszMZhAtgfvydZPNytLCbNLPU1RyLbmkCGw5dEZS9xPbiEDu5gcC6BFAYRL46qE",
  "key29": "3U6qbv2UKdV9224SHovbMZkFZMHPx3i6CELFm1HbCDEWx8VCEKABj3Z1BSWtx9pgZM3mssFQHCc6Cf9FhPnXs5nt",
  "key30": "2zguEBh64HkjfNXbozMqwrm5UY3WvQSw42BHq54V6jbxY8YktjubnYKVWHwwY54a6d3Ge6RDDfLRxABnsBNcFsTe",
  "key31": "3KQMAT6Jsj25tkeM4JenUxad2Ggqj7qKLpjESNYrftZYWSmxFiCSnu9qwWcYrJbuu5SDGH7QdVzCQXbS4K9dUL4d",
  "key32": "3KDsn8uVQfBHqVpPfqNKaT9uj8cBKbZWA9hFZJw7stSVoRugHhz9FZqaTpo3FqJM5jvKVhb1MxKNFhMgDqQ7hf7E"
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
