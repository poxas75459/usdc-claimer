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
    "3w1LmsDACtAGSoEJB6e1dwrsxv58C2sfQqcmyZgbc94hqG4qkdanCscHT8aHzcF3a7zkTZ2YJqDoEidSfvNMXsP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jpGKLoBvsNLW74FG582PACD3VfxDYZVz1Zj4gQb7Jw1ZyqVp8hCEjpBrtoub1TGLiF2FeF5nQJoFsziknKbob4f",
  "key1": "oBj7dJa1qdTTGk3qSX1nnvKXfZCXp2dXAaMSPfVHGRrCYcfsUju8Q2BWG2txbNYsRLTZWuPQ9SzDUjnkmFE1M62",
  "key2": "2GrZfRxKnQAdLMveaycuDySTkDKK8tS7vJ22rBpcWD9p5KWCbwJSCz7ydGd7KzMycH13bnUra5Auhf9tCohSFrAj",
  "key3": "61e7p7hNSXTMzjbqVCYQng1q1hKYQmwmiFDTyoRp2SkXCtEwJsZXD5DiJavkwjdt6UByGx3oHJcgcExV4dJ99ETe",
  "key4": "3pZBQWvi9yRdDUNr1uS4AZqxTivQQ4n1KsTtnMBioXTQsKJf5W8962MVz1xHwv12uKyvWnpuYvZtjRLZ3bNk2itz",
  "key5": "2EXPRgMa5D2c2JSLy6XqHi3ZGaWzBaPaG32wkvCfF2BLDeERZDeMvjFWnQ4xaez85PCe2MVBvVgwB6wFsGERVuWF",
  "key6": "4buH6ZAsd32dKAEbSw694xHobXP4MdSgrZBMwTeCNypvFbhhitnhQ4zLHWRFyc6JTE8YvmCi6Xj5ChiWuuBuza7N",
  "key7": "X5jNJEE8APqcBZ9wuGnSzTTWboz14GqH8N5gyh9DPvS1zKBruLxGpiwkPpywVNHfFLoFawijqgVsX5gvdt5LgTD",
  "key8": "5xA7pt2n8LJin22iVf5EUpuHgXR3K36DDuDVKB9zFn8ZATKWFNKcz7Fqm9bq4gN51skFhaxFEwD5UFDjCUf5xZHM",
  "key9": "5MRUs9VM5vtE5vSPTMXXhaJo7i28Y9wGuB51SPHms7GBaFsMkQ64PciEWeKPFSKY2RGqD7xL4biGGXVrokiRmQ4S",
  "key10": "6vEnDSMMkaSFXtj5nniCi1sD28V6LWAWBgDd4s11rT83WC8v1srEKWjq3ian4cTqP32bNwWGrWhhhAG9V9x259A",
  "key11": "SQpMZpvhDzXzJR76muiXRJq3kzLXkTPEcAaN1GCV1vHb6UsenJqgNBuudGBpCikEj6SzC4ZJxD7heUkPGAE5eH7",
  "key12": "47TNuV2xuNbqHjkZKVyfgMRcUtdXuTBPG6NxHfa7YSGm2FKrFabVN7jeaRvgfxvYF968t2mejnDi1V8iqPJix3Kx",
  "key13": "cUJx8PPNAa4QV3ae3Tp8n8KLrLY55jJsSgTr6n9BaVn12NjFXNVHYvzRw1EDGkr6wVa6JsXTBxC4YYGQ2Zn2wGY",
  "key14": "2aDNMYuu83uhdY6KVwLX4xSD7uexKCjerWnhrxPWRYYbozKip2saCQ9sV5XbyJTRegmNUronPH3HomCW9c9AbfL5",
  "key15": "522nHUpivTVJA4k5kQPcoRABWt7Bqbs6L5YgoYC9p6XBnGiTC6vxF975TQkxJuHmzZMGwp8UnKWu1Djzrijyyo2R",
  "key16": "4FSnPwNQ9eZKfWL5orxhbH6fUP4pAcYYAMCjcrvVKGPUp3fbuZwb8cidtH3NQhUmvd3WorFPGrqNeUbCDMJ4v5XU",
  "key17": "7TuHCX8RW3BuRXSnN8VZjmadAUmv55ZGWXB4BUXep8ZkbbwBkrk7PYJeEQk2pX7TLxz66Vr7icaLCWwfGcSgox9",
  "key18": "23jjUsVmFTyYWeEHzxwBf3qUrPX9M6Uvc35AQEquQYh62WT2vxRjZKvRQuvnQKVKisFvm4DBm58tLC1vXTwR9hDj",
  "key19": "5XoagFq1yCHkss9vQjsBCpwuEmuAFjwPjE2txAiNd1zGcmrrS5LH5ga2AL81gDGRPi2phT7MDEvEmTRhUyYUQkTU",
  "key20": "668rNP7aDPjT3yPYXdpvGNxo98xXn6xTq3PiEhKYaJcEAb4KcHQHPFvQB2dQGsQWW5uF4tNZV3eBfo9RqoBE4rFC",
  "key21": "2BrTCGdrKk2zedoVYqPcmtBwcWN2T8PYA7Q481VwNrxuvPZFTS4F8bk7GmY2QkFZxjXtUBMFmgxgBfwodPHDvXNu",
  "key22": "2xA4MEcvKWCMLXTpz5AeFZaB7RjaT5BzjyGy4MG9asEzmzrqeFEE13zY2uG6RLS4trjYBPRvn6md7FXRr49vpU1r",
  "key23": "hNAidsYpg5Xd8RXbaHavzN9E1MWCzGYTa6fgmHpxb9PkeQD68Fx6vCupRGUoj1yxwUFDuSkduRdQaz3NHsp5HeF",
  "key24": "2XUYsXiey5t7XYXUHksosiJNgiTHqrLjaRe78usLitAR3ZAjP1RYshjCSVdEgdSAs7HFzWAy9RpUXbzPoBm8P8zQ",
  "key25": "5wmWAgNYy3VeeSNEkzNrSEbrFL1hxzrLTSfcU8juzKyAtx27pLVKH3FBAD6XH575seGJ3874La8U8BYWjHm2DZyE",
  "key26": "4D7AN2cgj8BoDbBMmbYP7ZyH7AQHRXCjhRj9StT7w2auGQmyfGBkNQpymJ2eznXLB5SsbWnK6TBUuc3Uy6prcNPZ",
  "key27": "3CXbkujNPnFvtPvVRqwpMjKu4nHUYHDrMA6f4XS5938uUHXf2aWBqTTQTwEvFBq75QPAcUg2GkzwD8Gzw5wJdCD8",
  "key28": "37gvqLCwDh4ZXKdqiviBvbfHuMBsgXX5kPSnxJAgfBZv1vXyRRbPf37eMcEb5G4pPfZLHh1fmLXuNP7BKB7zCWbz",
  "key29": "VqLhFx4k5myAfNrhNYXzyi5nLgefG2VyyZpfkB1nWtgYAhXBJrFwftLxy3hqHJPDLDxHi24KQjgrZXRjKT2YoLL"
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
