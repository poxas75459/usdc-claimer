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
    "45TbGfQXGkcMjpsEnWKecShx7jQ8QrdmaAHvxfCGzN1vLnasc72fhAEsaEk9nntkKifgNnnUUJFqFmrvdENjg7kR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j7CWuh81hdgt496DubvgeVpBdApKU2bNE4qBCZic3yUPDDoHuJkZTWt3riYmX65syafiK6FR8EfGX83f9AvQc8a",
  "key1": "k6PgeXp5r1zcLr63ovB7C6P3vhJ8ccMR1siCB3Hpgta4JUjKJgo6SUDDSbqxYaKPiGPZLoEeCpeNiWg4pcwPV78",
  "key2": "1CuAV4mnVsRjeCNtuiXh7EsPQh1icJSR2CNo8d2yFY4CzoG6Gz72Tjd7ZejAB4NJysscTnyavvpikvjtytJ5vNT",
  "key3": "39iqtPQf2pQa5X5tiFjzAizcsPGxZFAnAQ7HCUAnTPgWfPQ95XjsCHD6GKjicBB8A8Q1DYU4BtLucCKrif39syEc",
  "key4": "zm1rt12Fkn8v4jVmSrXz9Hiu57DZE5smQ27tb1eqgrTKGFEGWeVpGsNtcePomizMdEWni5LbFaNKs56Rrxq2DnN",
  "key5": "2KSsarXTRSe5xXskuoyJXt5WKSBebpqGnDppnS1LDNbYVtRkHZnHLnrugVBoPhppDDBJYrWQpqLiH4pxTRHawZtJ",
  "key6": "2M3H3HPFxGHc6HBthufFqndZJZM6AKuRrZ6SvNb7QjkNpsmad4N3FtkyxQgYAoeHpGnsQrV9seUtqL6YVWAuENX6",
  "key7": "furzN44ni69qKzNjxX78wi4VZFgSe5EAT1MJp41ueSTyXGb2Eio2GRQfT9t38SMHMiBUbwvKxopxnJPpCBm2Cx4",
  "key8": "4z5e4hAjkeXkYTL8CaiBSu7TBV534iCQZkQMLmv9h6U7NAJx1yhsupbASrNyjCkig4uZNqUk85zjMVWTGvy42Lkq",
  "key9": "5ecE7KbrJ2J6CPjC2MmUdZY2TwLmDQATsNioura1gAiCuE1ufRiHuSsph8RoXmmSo8bfRAU9AS9ZbhxP41xDVuud",
  "key10": "3gLL9C758stgLc7bGGcXW3mvSDAyPvhp2oj18C3wyw2H1y2hLKKc9eiyjdLQgzh5G2DCydAXhDAgkAwXQ4x1sGcM",
  "key11": "48kuBgGYHxdJ6fo8AbwVfZrB2hMchBLggyP1UqY7BqDVjKcysJktxWReFQXuvD1zxbv2FCurQiTjNhpSH7y1rrLv",
  "key12": "2grdZo8oMPUP3FZnfcbSycjfgsp5dqsETik5bTtcm3voePh9Bo59zRgJHemxWDYmbkKoCigGD8Y1MFfV29cLuPkW",
  "key13": "htzA7E9z5rJBceJvS7cVheTk7NoSXwhFjJhz1yZtYT3wsSy63PbyxpjevJGB1jyzEdDQuaNT4y9tJLzKBF33kY1",
  "key14": "4JJr9QHmNB6koDUetBypND6tg9svQYMksJSkjj85jBGARgHy1R1nGoaCWM14jLJeaY1F16cXDcbt74E1KbFYE85Q",
  "key15": "86JjHk5Vxh9f85fyYzWQ8RayZfcNC886fGvEvBQeYMQBCEX33Z5LJEfteUfzTQFbDjxVX3ks3J8Lk1BmybsUpcM",
  "key16": "YUF8D9jBBqMvKLiZtdnbUt5xqBCJ7R8wDB4CKkWcpa21x4SRJxnNBuuQbAwqDhSA8VmbA2e4UkiK3SxreZAPte6",
  "key17": "4wAy5HKxqom7ZCJkqM7yjS78v8GLLE57b5rPeHuRRNbb1jTqK5EkVfxTZ9vMQCDhb6kXEsas9aXQT4qqeHsQHH9Z",
  "key18": "38wB8AogZoibYQ5gQFXLMUBx8szqKMu3i5J5EkqcoYXH5cpYDzvthoNH8pEUYSKTXwX3VSDiiS5ogjDPCh5Nf2ca",
  "key19": "3s5V3rftNoAKXRPXYHmpC9XhSd4JvdxYUrUf7QjaJziuspERCCU8PP2Z7xAyBG8H4WPARqU7CZDjwJQiiqS6Pd4K",
  "key20": "2huUPX8qrecHn4NM4GaxJuNGv7wXpWpbbWVxh4RwxpaHqtay9eA5jP6hP34syaLrygZBhrwiWYex7L3ZSMFJgd3z",
  "key21": "5Ymwe8kKxBLs5CvNmi3WMZLdhFkEfEgPxS96DFXBKamSaWwipkEpNoZgRmJfaJyCJMPvYUgDRjKCoQTMDR1iWu8J",
  "key22": "5UWGrkcLLP2BfFT1vVhCvDHT5xTYtnPN8xXeCQe8Fx85BitUNVqLzvnkDAGc8D1GfhPjD8HvBFMySZmg4F9bVANZ",
  "key23": "5r3GeSNXkpPsRz4zZwcvLcdQ36Yqp3Brd84XrtrowvJBpGpr37GgrXt9ryTYYNmS5uasQPMKdaayB3x99J9tbAh8",
  "key24": "5KJnUTr8YrbH3uyTAmAXMNZQaGM7KTnfck3pTf8sAZ4EMUTL1VFpkUYph1Bzjp4oD6uoN1qva6NYqi93ZykS9SQk",
  "key25": "4SFSMyoQmGnD8BXAKtZ1Jx571iuxrx5ovQpdopfq1bjQNT1Cp8yqcxxLEmgg4Ywyp11mFe1o1rdSiasEgz8QMQQi",
  "key26": "2mFTQGQU3MCW2Er3Ywph7extxFAdCzcgyBEKkrcrLdx3kdQftWQMe9adr4mRD41zsywDVQdx5zSP9vwLWdXL7rTD",
  "key27": "3ph7XZhoXdPsx6q3mfdkJLeoq3ryQ7ks2DSn69d4AQ4MtfhRYM6ge6BWF1Ym9p74pB92n9oFvDsozH6nJC4gqS2c",
  "key28": "y7JvuLNURcgSvYq4rMrCxatbDYPnbXjbgdqAsp5bXGnmLSZxtqvBxVFjtQkkageAnMABWjqBW6SeJVXfVGX5PDH",
  "key29": "33zdVnqX2V6zaWrS64kE4qovJDmFdGmsQxwoTAAfP6nGcMxMqws6LpH3exdnJJszJxTGJBGTBKGsTTWEfdgUUQB3",
  "key30": "2Rzoap6Fk4zQqyErUSK4qcFj4WP8S2P3sCDSJxCCvNMPRzXpsP4qSvcETWEnqL11BFcQys22AXdfGd17hr3ZvjEX",
  "key31": "4sKCHRBFqE4Dfn536oUKHZvbAt5pXtWaqob1Yr2VVBCNwGY2ZvsKwNcERCRZ5U3o8MdLb8QPmCJKuN2ScV5QaG8p",
  "key32": "58MnZbES62ZxUjH2LVfpNJvCWcQ6DFFdMkoerNP5cBiZLs3m9ewm1JY8x2UUp37rUt4yviGCRx6AQKQubn49CYVw",
  "key33": "5ZLugz92JRVA7vsc3V1jZ2jxumF5bp2RwsvvKpbK6HDrVJxnJf7ubsLvpj2hgM4aaY5zqvFXJq979B68zyySLxHu",
  "key34": "2xci8nU4p2UBgYARYf4FJkrG19oWZb3qr7Sjuz5QK87gAr5MVHwM5sf1KGB899pgLVGbUAf6a4XegE4ZS4ZYT3Ha",
  "key35": "4AqW7z1CB21kWy4m7kcxVkPisWH7npepgNCrDqWEbYUF8eC3qriXhYdyY5TXs2E64gQHvFAb7ZQXjhbX1AzsDkth"
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
