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
    "2wcRRByHEps7hBmK9jbJcFMPxHuJBHaNVjVjeD3BNnR8BxERxb9Aaza7bzahYJjtZLwhYba9igTyqac3LtouAKv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K942Gi839S3EBAL8GdSLFuWQMgcXzf5YfGTv4CRuTCx3JXoFuqZPTLYXcZbDagwNXgfwbTG25BWeDDHqkGMUecd",
  "key1": "8BZ43t68XCcyw8ZLFMYJw1711hMkgBSEV99vJijkD126Pu8YBfUmx5AaZh49WB9vQio5K4dnkBmPbQPUeuoPpcq",
  "key2": "2fTZr94y7ojnkq6HwkWpTYemSFSwzuxDK7z4apzucfKgYvWg3UfxGDiYwf4oQBxQQjcjkxpdG6HXbc3idXJci8mu",
  "key3": "3eSeyWeBbu8owH5P9PWCFohL9gv5zY4XqrCPcFK9LLa6P4gXrJTtatCoU3q8JtoPMVb8wXKaA8ECLwwkYWSsBeFZ",
  "key4": "5pv1oZiAAFNTzsUqoFJ8ajRQYGD7L2y3oSeDp4zaw9oVsH69YSKT5ds6Zqd8X1QHziDcYSFBbJDyXJDddWSt8vVm",
  "key5": "4pUPt3PEfiuBCeAZCuLFWnG8LNzseLvEVkBA1Em3NSFdD91EX1LoTPKM6YvzmbB8Acaj43uezfEH5jKLR2tRAawi",
  "key6": "3VxbdczWpnHw6hbVQEJjJw73kFcyjYQx61Lm66czEPrTYHLxFboL8symr9fonwXfBj8FMMwSmUG7XoFvYN11Eug8",
  "key7": "2Nkk5VMYdu8WNN3jAVQNRw1GhVN7e7Ra8AXfrBciUUL7SYPegw71s4KVbdUwAmzNDtqHRtZrf9AgC6SRUub5jRCC",
  "key8": "5gwvUcifPEyYQ4j3Y9sMpTJGNExUYEbFM73mSEhNvE2nuRUoibkZ23JE4kVfk9u13QpTM62shHA1zT4wgwi7aHDU",
  "key9": "n6frx73BMqfSx5pNwRq7bHWuDN84r7BVJJCL3tTSgXpkLu4WXBnuwguQwW5qHEdo6xfPsA9zh1eqgZnLXfQ9je2",
  "key10": "W4ZGRWrv5NHhKVXGa1EEKgRLqrqrCtRztgdVJq7oA91dc2anfZXBs9ziu1ydPBUeykNxPsU5ynktx9YSz9c5Nt7",
  "key11": "2xZoaqJv4tCp65mh3BBdeEsC1CTjH3mhtueajGDXjhG4AKuYPJD9NkaaUGThPoTuD9fBaHk2rcmhArMAVzFDeU9B",
  "key12": "o1Lj4ouhGgkViBRmJHX9pt51SNi7hobPapKydeScaucPYW5tijpRXkjQe76yEEzmyExuqSRHfb5Tvmu139jiYkm",
  "key13": "3gDCF4xt3KXq5co9XWpFM2MqhMLaMHF9u6HuaUHQtUEbjkMC4JKSfVDG2xFKMfiq3HQb7eDkLZZvW6QVW2dCHedX",
  "key14": "3rGfiFoLiTFaigxFE3jnnox2ymfeAm7ks3ASLketCyoxwxgoPt3c6HLNP539tUhVuT34qqv4hkGfVWWWeAQRrCd1",
  "key15": "2UD8Eim1hjbdGQQHjwGdCZweHLQEJSFKc8ihnqqQmskqg6Sw7MXRUtLr98249Zfd23pvwj4zDDigCqdTJR7JHjQM",
  "key16": "2VGydwuoHserDKKKCrDhq6BMAfwvn5CGtAaZ6boFNVCptCxotX9qqodiNzpAEAnHEgGb4jKh5s31DaUr5eAHbmaB",
  "key17": "uHnNwArKDk7hp1RC7rKf5Hc5uhjTHBNThSH4fhjngP3xZQK1uhgxwohzccpMyJ2saUYeqfK1TbqUrw9FfuvHw7d",
  "key18": "4FSfHTuVQahwCnFsGhoCawRCMiLx84fRvMEKDpn97duL3gq5AskrWp1mc6Uyw1DBNL7QFXgdTApuU5J5WnPijdwc",
  "key19": "3zn2GpKpeRp25SjiVkbPoFigZnmhmrgtVofS5rSixoYnMUAfLUUEztv4JsfQmk2UJfLJSwcW9h2DFBeWvKrFFNuj",
  "key20": "4RXrfUnNCeygMjKCydEMN6gE3kDSGLjL31DNpMwyoY6pNugA64upScUyEbrBD8W6jvugYMHmimwmhnUMjiGLhfuG",
  "key21": "2gLQtjxCUiqUDgq7a92Rrsss8XfAnVQCv6rt3qjhPqu4CnT3ofNYTjPD1FoE1oDeUjZQtzHiERaWKLBoCx8LLFo3",
  "key22": "5SoGnBzV13arAnPt6mM8LngwEZUUBLQCnMRmEXD8Ye25VJ6fxmR9pyPSQMMymmGDn2JaRVYWNA3mPUGaURapZhg7",
  "key23": "616qqvkevzhLxjKQmuvJiWC7R6uPiaNKjF2oW52EcD7sAqu1y3oGECaTWmBq89qqieZdtCENc3FyD8qDs9akZ19W",
  "key24": "3Nt6PZc6prVFs8isdUgv81R9nfcarr68wrkiamEenvLUpkzCPkAe9n7DLXnq1kUAAM2e8uzrT3NtBMvq37VjhzUm",
  "key25": "2oWz8D1Vg4xBp6n9fStbGXCsVvvZexYdMcwmjhAi36BRwDCgJhE3zFsfhv4itiSiNJTMUD55mwiXYtT3Y2cYddfc",
  "key26": "3kkXedmpDJiQZM98EBEGmztdTviD4T4BSnnaoeLXWB1BY3qPknxpLjh4ChtFBQPpm93y8YfSQWDZt7ADBFDVddq8",
  "key27": "DNsC29znWsNNu9dsgN1tJkrcBzTXebdnfLQJxi6jrxxXxBJShnyykTRrrfcaAbG7p2xEDsAhb57ME5X2mjv1KNw",
  "key28": "EXw18MBjgCmDXvtbEjYwdGj5MDWyfPJGUeD2itGw2nLgXiMaYUubXirPsQkTm6WgzzD2vtqPWBTMdhGmAzKfsKU",
  "key29": "2SYF9XR6pFkoHDc2rYzebdHqbZKfJkApCJ8KVpLnaA7jVotAyXNvjZ4tq3BCAzTJYJW8V8ZvJvVJW3DLdMVW3XVt",
  "key30": "4g66H529PWkZ216yRh6Cjk9MVEP7aqNnjM5jAyN6xhyQcqqB954r6ULj4Vn1MkUBTEFaFtV7N8ovBVyu48stM8N",
  "key31": "SSEtEsTgCYy5SHwYpGKWifU4XJzvcKaasj2PuZWaNqRAyZXDXs7knnhA5PXy7iomMmq2oeXyNPmrVwv1QPH5uKj",
  "key32": "fYVR2X5qjK1Ci1PpGPzgFnNoNiFGTF79uthXd1ELqrRNhw8Zh4iivAtn1tPcnGwbiZ8zmmk2Fq8CpfMyF8eLCHh",
  "key33": "JGdkXW9aZgwR7L7ij4KpYapBo4wH9YtCJwcfTAe9ePq7hypuo1J7VcHpPhL33i2HjaViAiJHAW7H5bmiFz7ATxm",
  "key34": "4jRMztrvBQ1TGMF12c7GbCvWZPVqbD9WM3pY98dsjtYAcxKy4X1ScFRNAKBHWd55EcgugT7H7JaZeXkhadDmVyZh",
  "key35": "58LAVesRgobs3rGtFfr2XSSNh2UhSxXDZQhc1VWk3uiffEoQ8UbnojGPSjt4huEHMoHW2hycu43ECfjkJ6iKJMRR"
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
