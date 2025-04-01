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
    "3ydtJKH8KMyhCaUjt5ebcP4z8z7pvuibN7AJuLXz25GRHtFEKHtU5KTYk1f2kWsR4nHfPF1MFnNBoYHbxN82Rp9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2itqs6axojexaXnp3mmu4VVDS7jcc4MddqzM6vwzrJ9BBSzS4pu8Q4t93Zyx7vtFCBqxoG4iEkYLr2ByvgMVDGrb",
  "key1": "4bJQrGL7vbbuPQPBAuKFwgwgnio8x5u7QNWwjd6mNLWJFFq8qLWCouB2Hq9jrHq1QY5ZvKYmiqoZZXoY9MFbQVkt",
  "key2": "FLz9RN9ZTLdC8qnaNVhi3BDRaFqeR2dRG8oqdaVfsqK2zJ3BEgExA8Yt8MSTJGdsS1jibyWKW4XrAjixJCDe4BH",
  "key3": "4cqh4Ko9vAHKooba61C7utSHJSdHCLvT5LULoVVxfxVR6sW3Hao7orPjaUR1dpYD6RMT1jo7mmLjZ6PMUtv7zQ6J",
  "key4": "5GTZLtb7mAztNUmDJeZMQogHsedWm35XYFGfjKo3Uo3PXX8UcWVy9tTMqsmUjaYxg2L3W2GgSDdhaN2mCQ8AsY2x",
  "key5": "5RKThrirVjJwTbfZQkB5kLX5zLGKFy1Nr7pMxLMMBVTEznDzqFtqZJjwYJuy4jsKrNWNEVcMdyhJBry4hbESN7SG",
  "key6": "4Ln9oD4HPpdU1cktDbNzxqdLmoXZjmhRuFgZtevzSSsFnWu4QLa85tqcRFDAXjWbFeZPBADGdH8P4S8fJMoVecUp",
  "key7": "boCVMnxeh922gR8ciVUAFuu24pkVz9LH55fwrcbUARibyc9dR3chUM8yFkZKruVsHA61femkenmoWeAHQAFQk6T",
  "key8": "21YB6KVYYp6EpiQs6RBUeqUesvhkuTrc2usg9SL18DAkij3EKC9N8c1tVtp3G946hrpn1s9ES5JMP3YUF51Ayxh3",
  "key9": "2eMxxdssBkYoLWxdttMTU9kTAo7dAQ6mXdkgzdXqQETMHiVCF8ghFhLQv2FJYHVfh6XJDBPCsckAZQdo2jnf6YAG",
  "key10": "2YuBzX1ivuGADPNEHDsuY4z9SbqmGETCTV1pMdSQhzYB6TLGkzVGhPgtTcv5EP6mCLkrEjSKCxuv78uZdhB8XLy",
  "key11": "2VQ6yfwJd5cgPinwGEeTgAqhtqPjhX7399UMEcw5TYnz9TuA33ywXU2hz6SdErM4nF1VXhE5ZLKPGSbaZQrYyq8T",
  "key12": "55qmGNhk4RuYsM6aWg45MuUkbizRhJHUifrnPu3CduH2BSDAUJyVf1ELpetrhGw2urivpCNmXaN2b1w3w3kuHcxZ",
  "key13": "48BmfKTRAdUXj3Z8kPxHyLzXuXhvt8ygoe6PozUEfZdqUfqZKK2cByMpAEdgbLTM1JxyoWjKgu85ZGGzeQ3aKWb4",
  "key14": "4AD5BrLWY9xSeE1DiWmCTsKk77XruFdXmkbxG1z53D7JCYAWQCgapsipZ1r9YpqSLdtZdMiAesmDNQaWqxtXvboE",
  "key15": "4AoZo92fPrZkwR5mQBiZZBbKwVkiuy6FTLdKn5W6f6i5gFXagDJZgddPWCVoh2thuUzKgj3NDCKeD5Gz5pF423Ec",
  "key16": "5bQ2XGYLUf4xa3YNRRBy8mwbRr9VGRut3ucV8MwkLPFmYqEFVnaSzZGtYirpzjMYgyKHxVaMrFtCc1f1jq86JDLw",
  "key17": "5oFSsxLuqpa2PL1TYbg9MHGCXxpNL66zi4ZdRDBpW36JpFitHfphM6sTNerCudg4W6x4HVQmGiVKLNvKGXfyRL7m",
  "key18": "3CKPUTrx2MUF5qzFN9zLYbD4D8mAxNpX4CDGKuTgJ1DAhSkqqBBgfknJ7E1q74oXCjeux77o7JiK6WW8ZHazAEGy",
  "key19": "Cvy5jDHZo4DK5XXY258g3jM5VozM9yby3GbP97buLDtUyuizZYGPr3cfxegvZDLxmhaE7cArYiPLbaDyK1odvQe",
  "key20": "5F8sagjKnFZXA6Kw5W6PhkAUJmzQzqzM1Ezc7rQXRDaBnb9583KrXF4CY7dkfxf7nY5d9NYryDgFCXxpJxwJJVdG",
  "key21": "c3yUh34C4BYFbNP6pavNNQ8wn81JUk2YTafA4Cx4Esuk5fAfih6dqJfbT6hDb2zMPVfuZn1G3bAYLxWqz8wuemw",
  "key22": "6wHC14Phqg5f8toTVwfyNenmvzCKzzTohurrBeusHAg1T13voW5mErPZssq39dnZLAPceXfzGrntfxqGNcX3BgJ",
  "key23": "24iP8aABa876JMD1TALCGXaWgHiKNRp3YoT37Tng2RhscoNKNfb4dSMMLB5hLtRm7QtG9UJS8Yigy3MEekaZYj54",
  "key24": "47mKDgcQr7BJJfsPPaB3fhzc2CajqW3qcAndrHJix65jf4CqZw4urDt5Nu3dzCbDD3H8TABLPM17Q24EskpuMwse",
  "key25": "3ZQEJCYrd4dfWFc2zH2DmzjAixU1WFkTeTW8ysATP9RRBtfrQryhXB3HHG2sXRfNJJW4Xfmk9Teovesz1vnucfJP",
  "key26": "52RevECSbVNjt1RacvBM9o8qjJdnXrQQfnfgnMrvvZPj3wyF61T6pgAtHhWutnBNMt5cehPautFTHL24ekJ9wogm",
  "key27": "4asZfBLsFdkyrkWKTe1odrBRb53XVpmiKmBwGZVTKpX8QqbGbfMWHsdbv8rTLdKkBbntTmRfsqFc9pDbi6gTk5Jd",
  "key28": "5Bug81oLqqL8PXh4HU9tvPYx2N5SSUReKFkQmdhKuAAUqJ252mnFkCKwpcYRTzinnUHTu7u7Md1BPyxtEjXw9nRD",
  "key29": "2PggdL4b1bqQVhtrB6TNFtXZRc8MeJuN3xTq1CJb4tz8nHwwhdgqT2mhuYF8mDaBHs1URCtAJTwCxsDW6UwrWT3v",
  "key30": "463VrSU5h3qbiwuRJZrh9EXe6v8dVqk7yApb7H9dgDkDzukA4qzQZ1F9LpkCNk7y8KrcibQNzjWbzgn6gmmNKA4f",
  "key31": "2ZG2KZWUSHMopANQJDTEyupevR9qFPMHPBRkscannFyGmomgcKXE6hBzEHL92G8KYoH8Eegpsx84QdfwaoDQv3Rq",
  "key32": "3bCuLD9BhndvZUK6BEw9twdF6uQsY6xo2XohT6Ssai4A66ZTTieaDwzM41sruD7teUnVt2JVmp4PG61wz2eVM4KG",
  "key33": "5UhkxXQ9McPpvM2KAvnm5UM69BuBzi2ckPuxyAzaEVxJnJuScnfkoAQHgu7XW4YxNRnnwebnXXS5jNb5fU5fnd3N",
  "key34": "2LKmzQbawg1Dd5vNfU12twgpsXfkkQAE9frZSzkpRb9Mzd3Rj5k73ZRq2n4gS7YxYKgEYDZkY2H97ga8yz8NWUJh",
  "key35": "4TcvJV4yjKNXfiQ89e79sREfMTqR6Mt72UsQkQ64i1hNXPrYDsJwMBZfyqaiHej8JtxvLqbSzrD7pdBnx8Fmauio",
  "key36": "yYH8rXKfLz1i2jikLL2Z4WRmh7n5KpqDBRZ4XbCgRapy447ikz7M1NaVLi4wbf5QBA98s22wURrGxTyfWP3VeFg",
  "key37": "3BMEXaSGpHURwriyhdUJirpdCBPZj2zWmXTx1SBaYM6BSR2SdkFEzbcWkyYE41eqHzX2aM2SAtegwxgkbHR4FP8",
  "key38": "5mATd6mabrsx82sm8mjZSe1EXRMSyZuv9Jua2tQHSDDdxoSUftf7HGB4hwopuCDiUH74ardgVVaDMtbjDK2mhQaB",
  "key39": "gdwgw1Sxfh5LNUaXm9ezGdZXcHk575bNu6PR9NtLeQy1SFzpcKYGJ3bc2N66jPuTj5qJeLwgdxDi6wZg9A6ggTj"
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
