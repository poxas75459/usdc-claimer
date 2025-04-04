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
    "4kCwMAJ6dTrALrRXF9Zo1p9Ja2No6nmgA9wGX1CYqymG8j1KrEwc2iMEN7GvzkooMi2Nfe63YND2c77V9LiHBcCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x4ViAQczR4UvsEYmNoZGdFMT79J7uj8bFWZymHwaVCAjgch8LVRZaeWw89GmQni59ZcZHC18jrxQxsKHxnjyJcX",
  "key1": "V4NRiJjwg2kf9RGq2pFDtKJUVAetwcg7kTokuBD4P1sJPfP4xJWEF6813RXjuXMRWrNAR5hKnUAtPYVp9e6f6d1",
  "key2": "8iJ5UygkDGNfQUzJXRezP9oaf2yvChpGJue9Z6cM3dWPmu66iUUMqz7h1tdKd9gDXQHM36457J6bGMp9q4Ckn7f",
  "key3": "3Qw3x5XHgMHaJ2WKTxJaDv8ndr4Y5QaAJU7UAVoxKc3oLwE9medDb9SqJSQPu1BRC6hjrJA44WAVBeB2qorAkcVU",
  "key4": "2ntNgayVv5HvV5755DTmfSEkLEmvcQRYacPjXYcxRMNc8CPb4qzZHEw9Dan6uwxKktPLRCeA2PM3i7RFgLxA4T4X",
  "key5": "31FtpVhVqKJ1LukrQGFMGcYVJ7Ep5QpJa7swQMMbuYsJrc1ZivM6yeV4KQjkxegoPoUMN7ZaCJg7GitkfhyioCw5",
  "key6": "3vZvM1HwZeUNiQuArx8Dog9CzuCzMrQMq78TyrppS2EMgdzbzXTerDBdDiBRoWjjjht4xCizxcDha7VK48VXb4hC",
  "key7": "5KsaQ7sdMuuj1DeSv1Wr2T8Y7NDDLwZxSmwnaBLAVveG2PGSsy6z1Lg6xRFQ5m3pZGpYHz5jvEc8dqxHL5S7rd9P",
  "key8": "3tJFrfpPMUZtG68ZGWCEWQwDT1qVwUhpkDT5CFoTcSn8RW2KGM6Ncftcba3Jd1R3X1f8rTrBf9sVzX6t7uZ2c24i",
  "key9": "fD5QM5sqNNoMjmnJaagPdkUSEAxYSMZtbNSp7785csgjsVPLWWiZt7tPEG3Xz9RHohJx8o12WGjxChTZFrtqZKG",
  "key10": "2qn2M5r8DwmsnCVWC9AgDQ39cBz2EBhdPwB4t4V2ZE2cuCeipyysscEN1rr9gg5sQ8YiuJSvYMSsLDMs82HMsbLu",
  "key11": "3f9Xcs2vaG38MZV3LgidX8FxK2ynPhkkDyqxMRcW6ePsg83dMUPxfTwPL1SDHbWTNLXi7egVxPEKLDpsSSMg8bSb",
  "key12": "4pGbyGWDkXAkmHgkprch4FHGcfyettNHsamnWDQpZGwAgtpYvYmM7KSU9sYSJBUkTFFpdPkxnL7XBMC25jQZvNhF",
  "key13": "53pZ8wJte7oRh8Cdtx7epE2waCqiqg9jxErQdjqgbaWaJB9Du7siaNywQiDw3X8JLJkVuwczitgB8Y1VL6JXNkDs",
  "key14": "56EvxARG4Jd6D2DvPySCqd1z53xJC9b3D99vDzHUky7kVPg9ksWGs2uk1iNoWEL1FBQPfSaWspzisgqmoE5ufgMC",
  "key15": "4wA9S8xuJEeA9UtK2LKyhQgCnrgoyXtk6eFYvMxwj948AHVsTCrf8j33qk9kgHf4Zo4yURWz5g1PDXZQpvTp8ePn",
  "key16": "GMS5zocVMXjgUUWGQdnVDbhYxHiWzM8guAxTmvni5tpfBwCEMzZ48EiNDTCznpXCPqbmPNrarL9upu3cL5g6BW1",
  "key17": "4z5z8VUCxSCsjLVHfjoCV8SyjPiWEjf23AmP4UobrDmQr14x1LJgWDJufdYppKMGs1icNHfBiDnPi1x1ZKGWcp65",
  "key18": "3QoAtTmbtJog5USmvPoR8MWj6Kvrze8gyaDKjUc29NQoBV1gUjkm6TtgSXrUziH8ufSh4NuHgxJbqiYxZ3KTYBdG",
  "key19": "62aJS5AKiFAL7rC4rJK6SAEoc9tS9uw81G6q87JpYWeLY12xuH1ZmnsdyfYDB9oTMcnvKfDT5PjmxX5Sd2qpoYXo",
  "key20": "5kB67vkdE6bb4QAbs49Ex6Bh82e4ZqzH14PYzEs1FLb2vPRyWWABpfwcJ4WWmCMyfEHFagmhFDK8EKEUraDRMccr",
  "key21": "2pwfXnT3529rqsJ3ZUYHnbQaszfjXAqKmymvvMDXcYXuxomTEANfhhRSBFFiUsvYS4NifgcRwSPK5x6nBgkrnqWe",
  "key22": "3s9esbBgWxEF7pCQvVBf759HeCTS4dwouos5tzyLVNVoDgjEad7gq1PaTJkm3uU2ZUeXWxbxNuKMm5qpebkQ9EdN",
  "key23": "4vuMVCRwfxyXs82BUQH7HfqqPq3g97Ku3PwfqvmUN3CradUbDfjruDRgNMgUkHRbfwTbfjnXvJFb3ZGR6wPgLTP6",
  "key24": "3NLNbfutsP4zvC9CyDQdF3kG6sN77D9h4zw1QZ27K76im9S1mr3BLv7EnBUoMma3ynSjNP5mra4rbCmeKNJfLk6Q",
  "key25": "HwE2c3pB3jkwTCvourTsjVwquAMe8VEkdkcx9dM7yMpmxTQHmRAgbmp8eTNoNSf37ynDBH6n8MXYsBofKXFY8MQ",
  "key26": "2HMw9y1wHkTdc1vzYapvRMf8BY8jbpEkh9SNaK2uZmMphxD244ofR7jCWe4mGCeg5TpP8PWDhZXYtA6k8o889vrm",
  "key27": "2hUWdm3M3fJyXmCpwD9DyaSdfY1iy3MEJJt9RTa58CAXyAxqAN67rmMBvyLkYE1yc3vptyh82NeHTiiKoemf8YCR",
  "key28": "4fs3g9cvZzBEA4BWn9GDTSXSdee14wmDyiK3pGbq5bZFmqrwFrVeEUHwwi38y8BW2ESzbSKWNnMHxmrvN1MtAqFw",
  "key29": "55RY9xtnKjAN961XpgaWDsQ8eWB2yGd6Entj1uWiLRVTeUsVHGMQtcNrgm2cF48H7dM8Qvx8tt7SHgzEANVPovsU",
  "key30": "7Lxn295MJJcwVoPWdEjaheJHqpAjWMBt1rbsxxyWzUBgXQUkp6mze3HAfwAQWaJPJnuNa2Z4h1LndGUm2EPepfN",
  "key31": "4jrC2kR8uvCkpEcefWDba52MhmwSgxWZ8WjkvJP7bFvDEUSb6P9w5HoZfUeCtmxR7rcf6jG3GhSUL7kV2t7jfF76",
  "key32": "58WhvoPwVp9EdExUnPUVfWVwAzD4dbGbb9QyEBowx5vG3FSh2vXcvcohQiTsVpNUsAYaUnpEyDD82MtAVyB3qiSD",
  "key33": "4kPHf3UQjB3veMEgn4Hq8JxwkZKTwYqzJwyYjfXqvSRx9vVCVgQpgUmcE7L33tfsLSvDTQVdtf4ZVUifmPLdgxPk",
  "key34": "6GGCwnPtwbn4X2BkfdmwE9M1V1GJkNbmokT8FdQaBzftW4RmVcredsZUQ5v9i7b67yvqTiHWHFwPA41JaA5eiG9",
  "key35": "5T4HQW97QjCqxGNQNpg1zveyzgSCNV2iSuyWAin8nnBnXqqeYvRrATW4xyGptqeEKfyAjy79W8D2zXk7rz7va2K1",
  "key36": "4iwFNtGEcqJNsDDw2pqzbrUN3ZNmwxCeBXLnPp4NLHUz5tjd7TR5mZqWg1PWMUQdw2GXwnRsptB9SZdQh3oUtEey",
  "key37": "5Uv3YqRxQRYeCo1jGNZ38vhXwEVy6km8yK36fcxySr9DF3T71ToWpADoyrdTUY7SADzVXKWbBXv4GNqhQQz33LX5",
  "key38": "4PLPkRUbz7swi29r5WQzAU4kkzczxZQhwJLVwEQMsRvNqBRDRpUnSbX9KwCHxPZorCSBcfPTpy7xydaJYAXL3nkA"
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
