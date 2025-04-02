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
    "4EKgWbJt2iknmesDiMfCt7TnzUygWVPxQm7xnV73DrhJ5AYNbrH1MrpwpWyvisz2XyWAbLjb7X4EV7RUQRAHwYjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YXtF8MwB4hz5Q5nqKMAD5NAKBFrjWsdhYLx8z3pUK3PUvjWPb51eixnrb7cKiLVkF4VFJFUzG7DHReSR1LypEHk",
  "key1": "6UMFvsVRPm7Tupp1xxmttJ2CkdFqvrLAd7vXtPWfcZWQ6NUjf5dum6HN6uXtW3RDhQQCurW1Wko1xeti7aCF8YU",
  "key2": "2GX7pQsKajenea9WeLAH8SC3gkNPc2wBem6o1Z6T5tNszJVGAtQL8czXTaJ88owuQJCXvvyuUkNP32M3CU33PZ2T",
  "key3": "2VSvRDuZEmND84D5zFKA5SL1vmdCNafYJp8kLpidPBbPUY2ce9pt4iCjpJLtyG2aEhTU7wAY8K3MyJLAdtDiQeps",
  "key4": "5bV5pH161BCsDqkrxDW1frVNgPrjUmhQoHBGkRBnXukwikjnbzUhhjMRddoe9iwuR5LnbSugq3iuSLNPLTfjW2d8",
  "key5": "47rB4jrRos8qAmi4wZkDQx31j5ZpZphHwrjz9DoDahv1UURxEBTTfysZfmBzPcSKH4vK8K9jHQBBgVWCwTwTytEp",
  "key6": "3sv7xdR1vWjvrvSrcYhcVhy1eeXJSinics97yrnquEJ4r87AvFAEZUrG9ATMKcXNKK5F9PnFWBF8XWCx9P5aU7ch",
  "key7": "5ZPT6vaXMrqFEVW7qaFMqW4BAKarRbaUZ69U5gwzyzKknBmVmR8G2WaHDPcfq1en1jQtuAogCcianVsFsW5NTdL4",
  "key8": "3tXekLsnnXbrT4Ha2YtuzVpbfbXdZhtBojonJFpotVzNT8jbf5bfBt48nRnnfPXgJ7Vqj1uKjDrr4bu86K5sjCHa",
  "key9": "3y2bnc2E6Qgy9Hnc8QKgRhiTz5p3L1PQVrxbBaY16foSgkF3TLXid13GqZqbvuieWMbgyCiKTD77rLcfaXxSNMLK",
  "key10": "4urkQknhnA8oxjLcsHrrAFP7QKgpn7gm8n1g2QiPeCfKKJt5F79aQhNj21PxPuVSpMjjz8q3PzXePZGpxhdSi1ty",
  "key11": "5PoKFAinYK3M8gNTRtA4nzcmWjv8SQYoTQwGf2ZxuQiHuXTsoGJsvp4gxjX6cBxgZf9zDpf2XWjoqD9v4qKM9W8Z",
  "key12": "6259jQMrTDSvC8Kymq2MdMprSAdqDn4MmsfGkGS3cN4Xi3N6Qau3MMXWtrvn21B1jHyRCd3V8cZSKCriL3i3RATV",
  "key13": "4KyBKstCauLHpUF5Vb1xzZqRzy5eFrkxBAPbRkyraSLRH8QtbQqVnmgjkbfJMmAifKCSGfPVdqPSXnYv5wvccTKQ",
  "key14": "2ccuMjX2FXny4kqUa8c4fdbFQ3rupTZX3mGY1RQdwJ88NhHCD8dtfQPVvG65BNHvrgfqEFYxQe9FKLpfoZ9ZHrLU",
  "key15": "4RfQskaTHsppRxrf3MvXc87ySbAdXeuPDtZ2hMJygFbaHFEv2AaAuDqMiTyzqNNwDgDogBxEJAp8FFuGL3nsPJvq",
  "key16": "4WobJ19tVwQGY7cRPmK52Y3g32FTJ1AWjx7fJpyrdrP63XQVGStLRi7vd9y3yYAZhMH91dDWwou6srP1RaQFsaeE",
  "key17": "XippFsQ4BJrgrN9sLBg3Ei7r5ekn2VgSfpkXn5ZVT9oU7BwiHuUr7yMztEEV3MLRLLhwASzky4ZCYgEjhLaVWKx",
  "key18": "3xRiuRNa9Z14mhcGSir3cDA6AsNR1sN1B2cv4mc5aU1e4jB7QdSKYQkVXdJ1byVhAkE1V7PUYfesUXF3aFxPXeCU",
  "key19": "4p85poRa39T9V3Qpc3X6gCkfc9UG539h7fz4kfD6C9A46b2NRXfSh14VqzfECKbuLf94hGsuZxWuQj6HGxpdEMXS",
  "key20": "3Kuw3BNcQgRPaDoGQkZ3iDLQ924DALddsZoN4yPCpmT2FFBu6bkWCFWsnjn2oho8npyemXcoPSfa84pPwPLUcv9p",
  "key21": "2xUX2a89VMS2ybZcJWWwX1as8yqBReoo7rqZeZG3eDANEeExYCrjmAFb2enFFN1uAEm5tmrSQn4JCHg7DDp7dtGy",
  "key22": "25698ZSFRzCZtLFZoAeTVSeUdT8ijsvVCAzKxToPA23ZJx58MN5nEG2yjVrsMxAmkSJa76huAHYRym3SG373SPqw",
  "key23": "4aqMNBsUw3mqHAH4gCMwGrebhf6xEThHZ7GsXHDgQEFoAUtJA2hzZQvkBKgGT1VtLGMntxUVW5jwTPGQ5vqVn6ry",
  "key24": "5wRX1TatE3x7tpu2KXAY1dB5TJBvbgaHkZVXRXcFxstgS4CvR6cEi7g7XvzpJriUDvmJQbB4WLLTk1jDHjX47Tyy",
  "key25": "4mVKC8j2JiwuKf4rPvWH6HBmNruNaiRc1L1FTPPxsN6Ci7JsTYc4jDPvnmFj67fZKVqjS35UpC8CT62gXCy7E7bc",
  "key26": "3H5WGSx81qLGNe2q436BVx9iWAwGv9mp5s62t1p2xJa5joR7GWX8f8prh4xSSpMee7N7zhLYTKvJFDkH97SRatLU",
  "key27": "5hMBG38GQKDqZvGQNoDuCPeSw2NeREEdK2DPKqUreTBcNiKX5Z2UeMphVoqbrTDykXfrhQ8vodrbu7zuHf2iD8pZ",
  "key28": "SgMq98dv36Qbw6mJfNfNMe9YLkYjhaZG4HnEsr9feNxrN82bSU9aC6S1wFx8fFFr4F5feFBqS4CBeYmpRtUsszb",
  "key29": "3L4LDbJRKJLmQF7eVJHVmoCHxnu7BbGXCzxGyvjntr824VAimGg5w7S2odGikGyaVr2cs193y2VFPr3ANCaHcUku",
  "key30": "wna3KdS83an59S1SWmWe2N9HBUAJcFtR342pNLWFdkQpCd5WNNHbb6SBDjh3moB8S8mdbuaiwf1MBVZhwMJe2se",
  "key31": "4516rzk2FEWfkEzjyT3SfMfA5oQDESbZsvM38LpaVJAaWe1BWuN1BDCKyfW5CDzUEUVgKGpwQ7zKftvyozGFgavf"
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
