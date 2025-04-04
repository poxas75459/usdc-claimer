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
    "59YmCW9hLzbneYTkQJjsfW9A62zfRboptj64w9rJXF1BL6gw9gYBWZWNQV3SkrfSAukXYdjAh7ds4ZVQacmoRbbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "436AYimW94fkKVha8DwqCUGWGX5JWB1RQawmfV667KRJ7xGdSA4UTYHwavm5uLi8evrWPWoAvYtBQ6KWKmD6BdET",
  "key1": "51rDqFYwuVc6uUijZ5AAXoow1otGwv9Hz9GsURJPEHNXLRwyzFisPRqAF8sDoHK1diwUXfg1gdbMMR4EwbNcrk8b",
  "key2": "yxBUXQjGKGw3a39KZHYciYPjehca8yH9Q8DrjtpGvhXWS4qbeA3sv1AyqxxBE7xUpdB3y5tLNSEB6myUHoSuyJy",
  "key3": "5gDf7Hg78QKkthrHrAhNL7Xhd6F27QAbVNCCajJj68MfW2E7P2qBVsmW7t6qvNxq9bKHp3LYwLtUmg3HHwZpvQhm",
  "key4": "2XivkRiRemEExQKUho1pb4iztixunW7HsY1RiZY952mvT7uRWM8S6iTEPstEFv2iWiZRHuRj6u7HBpxkyrAuU6Md",
  "key5": "F3LNaZaJJ1coyUt6uDZB1BztRbhuDzCqMDJPb8SYV3NLpfjfiqLHMnXL8oMHb77Pnn9oTfXHZ2SZUMfeu2xfdQy",
  "key6": "4UCuaKR64ukXZhs13Jw51KpJQ7MmfJryGnT7fbbuCR7vEA5TUtyEw5reiM6AR1ZiZ5WF3op42q13qRCJvwxEsNY8",
  "key7": "3SumvCEZHiZmoT8CQhuoQYAYWRbnTH7SXru36p3yLmQsWEyHJDVjw3FGGMpqSLbdxYDShrL2NQGRApqv7ZKuyvhy",
  "key8": "48tPRYBE7zEwHmVRgyZKnbHoiyov6GWK3N3yd4R3sTWhTJvaTCBg6qk8ej26VALMEvBT11K5kdidD23FEmMhQvUC",
  "key9": "Nig55VkX6K6gtBKYqRv5e45pPiMGvDRnUPP4VRQLQcMTkMvcu3oDE2o9NKHKaJBLdzLxcp7zJLtKbbKRuWfsuAc",
  "key10": "3jRBHx6gebCtAeGWMR5A7gQethpCXLUcLp7icAgSYJxg1HHRS2gZ45A6YehYBTw7HRYhU8bQYNrAcBSLwjUeAUhC",
  "key11": "Lq3LKHNLzDGj1dy5RqNbdqyBXYu8MJEcAm7uv5CribS8t9q3ASVQtaSxD3Gc8WpEYPWAsziB4dgVxKAwnqGz71D",
  "key12": "3YvKzpSFB1JmpoaqonRLQthJEybNjHZv65fy2FYR9VYp8ZqZkEKM9yRohtk37saUiyKPMmWfp3Kj7CxdwXjcmbKL",
  "key13": "64fvSCEiHarA18otxB1zA1oq5XFd77bqigMaWVYfGUtjHgpZgzor6PW3Dh7HMmkgXpRuW9Crp9ZP817GCcUqaiYd",
  "key14": "Y7mppzwcwYC1fakmcX4gsX9HQ14LsYfoAKuUA96PPjEe5QhwTxPFTF2cxM2GN6GHfRs7fNZooQ4G6U1gbcuhZQj",
  "key15": "449axfKw2Si3oLp5UbVvam9yEXqeF9wFWGrz2Ke93ZBBnJsQKcAdE2FVTsawtApssASWYqiHo6MQyCGPkyn5ne8m",
  "key16": "55gXvu4amm3dZ6Evf9MUAQq9gLh3gGh2Dnvc3132MhpCnvLpWsjxwgtkBigNn3nPkRCJBybMFAmtXbE2khGK69g4",
  "key17": "cbYZA7wgWpExcygRiPrzE1o7QfSsLS28zbNz6QK1zHrYWdNKesn8W8Ugh9PQAf2PM7ERZgeAR81DbejFbWJnJNg",
  "key18": "5Prah2HdJ419NKQdMnzzpUaCFxQdyT29eJZqR7Ay2GooxWBdGP54oYHaWCRNAZw9SJGy65DPrLVTurmDKWsEL7ca",
  "key19": "2HsSC245xZTCkafq7YbP7DBmMAmuf4aLmfLhDfAvX6GZZeM3YnqCfG8T77MdyNsQ2e71KoLJYEf1CbbCBssajraA",
  "key20": "4gLdJYPVvFQMU6UQM4sFYrXpj4cRxNY1nJQmECD73y426FB8fhJj5MASe7QoTG542B7SfVBUHUJpVQYAHhrHvh9n",
  "key21": "51G8pQoPAvv4Ef9twzMXV2AUANedcWsQ4q9TftauLmwAwQVtnXmsuSKDzeWBXZSNcyLcYrJVtpbmRDSmz8mJq3wo",
  "key22": "263rBjXiwQoekfGFYTQUdqBRWxjqYnZnzNxrFgSYct6bM4tEbG51EPmLEPyCG1LmZL1Fe95Laqw6HtkkqVovDjnj",
  "key23": "4ZRzBC1ZVR64ys7QekiTNYNwbjmEYSHb292oarjVMNx8RZA2UrMas1jKX4WE8dUDA5QCFt8gMdUQGdVFzmY3xz5D",
  "key24": "3nnzJjqQfzmZUiq4tuTmpUHctpK8emJ25NhHCUyuYYu3psbtV4EHihRKkefenKmKHokYTZu2VA2VMefPfBReExFe",
  "key25": "4ywvUAKptSBCNinvwjjaRf4ZcpoAV8q4QWtemRETNc8rKeA64N8LucAMoQM2YGjQsskY6UxEBsSf7mR2AzzVwxaV",
  "key26": "3s1W94f9ACuNRRVB2cHsKhgALJoBodYwy3gZqKaJWrgPcpZxiYQ6NALWh5yLVLG69oYQawk2EkEv3tkpxsiowh4L",
  "key27": "2HxRkwPzApqHqVj9HfEHDNUAhcssh8b9eeTB1PgBPsjxrDNLTzrzdzn1osVuaxS12A9Xva3sQrRTn6yKtMmKnwXL",
  "key28": "5VPD24nFMXG8HGHjs6cWfMaPCXGvMsap9sL4pLh8w5NUj4Lpz4fjAWkLhYQn3nhcj4kEX5YQpSAMhD2azHuNUN3N",
  "key29": "2h6pkVHjhfmrPxPWDAQpDFCdwXVoAuRTZWCUMdyYBGr4Wo7ZHuZgvqFkitWaeVMNAmPJkt2mt7T1nADAFgodJZbr",
  "key30": "35WXZZjb32KCHRtS8Foaw4JrRjicrB2yhyECv7t7P7NzY7wsdGmjABMTezaaPM7f2fyYJFuhCjhSw6bawetXAHSN",
  "key31": "3Nfe4KN4vrdWMus7XDR1jNQBaHhurso5sRD7zacKHEo7viYW4dmRP7JrT63sdFQh2R4wXz6cAfFvLG6mtGVeWThF"
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
