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
    "3gjYAe6288Mc2Vv8yGBW1xQ2zZmwRRjrdvyTY6iqaBxZp8BpV8q6vvnCittcSLbSxzDzZE8TwqU1zc7njE8SqDGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qjqAMxgKV8QrG2TL5jjvqRw5hsX9p8Qw5Kkxfak5XQC1vjjvZnK2KwsmMTZbTnEcUf7RrPJDq6t3treyT5ZFqBn",
  "key1": "61YjmymCadqiWJj7MEk4KhEdRfkb2LG6JujCczbqCWYkCoPkaxG9hyCnEsjV8kehNqr4wkPrCPEZJv4JtcDZsVMK",
  "key2": "jAM4FmVhDCF9fDH9a3JfHki16qtYs5EzpEMMhfuf49fsyuBjKcivkApqS6WJ99kkiZ3JYfEMuqkMopZNnjy7FQY",
  "key3": "3zFxUKtcRNXSser9AsXA9NtUpLNhcsHEYt8HqPeN5SAvyBS8TBX4jKjS5PMVtH9ddMa6csVnLcm6rxN7FSaC4eH8",
  "key4": "4tpuM1AfmarFMRnoXbsY72i7MMXXLs9VNMkTfiWABtjxQBeoGiNM99aHk3KJiTTHcZTQrxpq4CsnpYHa4PrHWtxs",
  "key5": "5hW9kVmQuacPH8qiXnjamcqBcMP9AgxRE6GK6msAJ6fYjTeFo5oruGkoqnb2QoYNe64MfWQ4kqpvehTDJWW4Ro4g",
  "key6": "4ZuCrXEKnKZg1tS64DhQA9TB2jVGVxCvRQa71X6TGnzit2VDuFRiPH9RDoPf2Q5TQpY74avp4maSZpF3om4V22CZ",
  "key7": "5Ri8ujCyTFqffj7tuBoZj5oePeM9r5LaapRGXCE9Coo1gJoTrLTxdZo1V8ADYyNoc4Md5iKV2v4NEBg5q9cXpxha",
  "key8": "54j59PaeXNXYopdyEvZAkJJZJD3LxJfHeqs88U41T2BRk2EXNET7cfoBdDC2rd5CeyjQaTJm8wXpvkPiZbSg3B3u",
  "key9": "2AHLxkTk6BdB8Sairvvs1uuwGoJZEXduuwph9fpr75iPrnuqAC39KMZiXchBpe7X7ugVZc8XjEZxycCZn18RBBjV",
  "key10": "3cWJinnciFB67htnaQq7YZbqSn1xobQyWXRGiTuxc4oUQDMWonyfS2yYDcpw1tropvjo824PckzreaGaHEhvW7WE",
  "key11": "3HHS1fozTGsQotU8rPeo4H4NNztiKwsTfTi2ipK2WcYFRCoxhF4m8oKD57KLbYPpVzExVgK6QZjzmfCoHACMjyGt",
  "key12": "4pVWFWGkP5nYKedPKqt5ggjbTaBBbWPu6qiBq67rfS65bWb1ogqwGienPZJ4hQPRTmptZaPNvEbd8tM5HPKoc61B",
  "key13": "51QHKdjAhDrXc16aVGKdhr5VacFXQC1PrRmFPEPb16kt5fVFrUaFPEj2QnwhLxdJW8HNAWtDpK44zcaXf7tyxoqd",
  "key14": "2zB583ZzEWdAqsg2qpmTXxb82kNvJdq93dGnsBwFMCL2U47JzgZyvuR3kbgHr5kMPKSsv2MKJ5ifz24dSqFEAQAy",
  "key15": "HhiYA9fA4vh5prgKZdKdtVNnAtpaQwNGfg4chAQqDXzT4z48xH2Px7otcCgV6WxZPVwdYxqTQpuxCK8PSRsRHHk",
  "key16": "3J3BYXjjKDzuzHocVNMizqEGDiPngfQVjS9d5hRqBa9o8zPZMbuGpGjXnsT4U51fTXw8etiYbsHQQcgwWpawZeLT",
  "key17": "2vu8beyEGGzww2KvkyqUM2kjh1sXCVtbnZWBeHRceg9Dd9acogdzhgyddSCvaCD5B5RnH2CiX2jnkuAhJBqsAz6",
  "key18": "4zxWmPi4tfrmQ2DR4iPtuusuYpeCiC4nCgKB3tmfNpVQkzvQLoCXnC6jnXfeZj3tEzUbQJRjBBBuVcbQNW2qtRdP",
  "key19": "5kdnQXa9wVdKiZv6rFJrBP6PFhaP6FEBdxFhwTWTcUHKoBbChraDJYyWqhDAFiWHeLVyYi9eRgkzLhjDQpp7T8Sd",
  "key20": "33ZuzsipySEVxMaf6GkHznejVfpGeHCZtkSLifehk83m6BLGMDYP6XMof8RAiDPSQ95ZCJbwU7gjEZLEkvVL6W5L",
  "key21": "31erKBcryspmbzMhxUKiwpwszZKYMXwGiKiYfyhS5pdZmHFxefBJ8Kz9SfUHQWaEWZgCusah3rKET7FDUJaoUWWj",
  "key22": "3CNuUGesyYfChZ8pipu8YASZUpAgXLHqc24kR177vUuAWvRM2dwxPM7TiM6gd19BrQfVvarTCx1ccQDuWmaVaHw1",
  "key23": "5vK12cpM5Fj226DjJmjfBkKEbZJqc4fcfd7qyMQXrtLanTumoXC9fX9y4mwndCSd2BpQq8zG4qrK851Qqkvmpvcu",
  "key24": "2rRzgRm2kTEfiKexAZxNbjQYvkDPYYtCnhJA9529wVb76G7jJiDjy2Jok3LX5xjBbHpzLWkui8LvPyofnEvSP75A",
  "key25": "4145qkWM8xxHKsEb7fzFBbHnoeTr7qE67TXZVbs2eWnaRdzaQco688Mugsen9AuyhNuRCd2vuoX6fLB3XQgGCQsU",
  "key26": "3cUqPhQreVoxk2RcsngbYaogt5h6aiAzquA4EjyNwXpBbjQAZVX28SPtzUkcgSz8489AhjfMpWEj9oacJec89a9D",
  "key27": "3sk3eTUMSCTqSm7uLkX3a7npCN5KGnGmgrviwj82AiFSjbD4hSjnaZHCs5NABhZx85HFQaUra73XNpeu5UicZM5P",
  "key28": "3vX1My7RYYxaKnfiEm1xcj1wf751J6bdzhnCXbng6Zvsod37A1YwmjVcizePxr6X5C8SYkQZQAn2swLW4FUVweLK",
  "key29": "3KioRR8ejvE5aKtUC1bsgW7Fgif2yLrcFkiDh1j2SR8gb3n3MN9vA4zFgy8df4zehjdXo28vwRo1p8kQiPfRUYTV",
  "key30": "41zkmoXs9zX8Gkdf3pjkq24pWCHjg4gV1WJyuzNda2v3VyQwoCXHt4qEhRh5vzREr3RsbmC9BC8TXHn4PyYUsQKH",
  "key31": "5baE5YKFaegZdfFsvnQ8SgSPn3bgWPcz5gF3ikCn6fz1D1Vm2vjuppCRre6Q7NpuKi7EpN9P5Q9vH2nJRax5nZdc",
  "key32": "3aKSNF8QddDmXfJcR1YHibPvEhbAHto3v6AXTpB3LxbTMRmZ5fwFuzYA7BBi7ZUJtnpX44Tx4gN4jUmgXWmCgHsu",
  "key33": "4ghXH2iacQRf6qc5Ve54YSpyEAeDf5gzzZaqQxZKzVdKkjGGYbfUMQaaGmdfQopDw8xKuiwF3TnToB8sJJqQQC87",
  "key34": "58bdB1ZQLddMNbTpQrsJ57j7j127LoHLW7FYiwDbdb7KnyjLw2M7gi331vBUNSED6UH6YnWKsWbp2gBKfxXPgGb6",
  "key35": "3uE2ct247wzu4LYvMrZAT2gBCohbEpdQxbSFzFfRHqDQoQCo6DqVauE3ZDahcsQJfj86V6SMR9L2NVJAtnaFuDto",
  "key36": "5d2hnJsFHL9mdfBC6UrjNoDu4bWMeHLMQe1Geq3kifdNicsNey9KPz1RnWdMHY4LfPURJNd91cZLq8dx2QyMRK4x",
  "key37": "3xSz2iXzntjLnXBVXjsksFShEmEUsLDedV1LsFNDrgxo5c2rJcYUMWYAf597a7GNb2Gmwv56iFFcJEcVneo71wsZ",
  "key38": "uThsexwgt2yJiAm9gv3iUX2VCQxFDiLdK56UzFHPc3hkvuQ8bDD4RY2yh2suh39T1L7Z7az8wDxHFXRMx34dLMJ",
  "key39": "2PdDHGV2n29zhkXYJytX3DDT1JaCjbbr2rNMk3j2c4eQnxsP8F1hRuHsD5XETVfdJi82GsGRWHAGnnJ2KvV9qiV4"
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
