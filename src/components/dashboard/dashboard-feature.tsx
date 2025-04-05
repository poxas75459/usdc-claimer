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
    "raFWYFGAMDq2ZV7u35hoWmM4zMsncWiwqMuJabXqtNf7r5AGuAvvsc6UsbrYinSzm8bx2qKH6YCbCYg2QD2HzRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nx7e25HQx5ibkWDURC546GbRJjG2LozBpQSfC1qSTGbE9k5GBAnSxcx9bWYwJRGfYuyb8c9c1vXubKTkEX2CQQh",
  "key1": "48D1cMrnuQVNHL8XPW7RgX3KM4qj7FfDQKGzAPLTmnsbwGwkfBuVfoEdNfsjGVvrKitVfrpVCB23wTV6jHcWe2gU",
  "key2": "3XYp7EgHo665tVNHKJgUHLC2EH5bwku8vyXvmcXt8yvyoZUKHmyk5jRm7GgqKgZqJQm7iCy9ifre6qeYmCaKpvkA",
  "key3": "5nP6jJLsS6nAcXxabrDQofovNDJo1ydgWFSTagsEJFKL7S8DMPWNB8sLPorocLP3bS4j1M1xNqrahnJ3vQHMQuCu",
  "key4": "3E37rEUujNLHyN38GHa4rY31xcMTqjDqgei3CiCDALdH1sw9yenDrLSvhMa9Y76snQXhUWR7HC2M52BGsmN7bS66",
  "key5": "nXxt4K6mRGRAarhPBf7vxb7ocViXXAivHnPdmQe8LMQMRVKmrAVo9WqMAmpo2UqBfSaGs2oqAMf7GjHnoh1rkPE",
  "key6": "57Bw9HpfLTEeGjpqoomeEtfoucj4JcKkoEYGX2bP49gShejLpuYUMo2VPC6KKm13fKi2pasurYn53X3vP6qCZL5t",
  "key7": "2pcxrFUPDdNH5FSbD7n6xF7pLHczV4XNsXsMzM8HqynHkeGwXXG6jFHin9QAcMjJ33NZxPYx64JWgFQgM7hwsksV",
  "key8": "22CZM1uCjN8vchw92qYQ1nGVNLv8peK4QVza7o9fQde6FqqNAfxdnr8ErKMuLsFDR6Pxmfu5zqJfAcZeZB3UiFrJ",
  "key9": "4eRmdadorJQDbE2zpje3VUUhc65oKQUSuQGSFKDoJVbMkUwb2kYz6k3xTtfmvqESutRnaGg5r1vFRAAdGVNMdbD",
  "key10": "5UzdA2J9jvfF2UMUwQ7GmCQm14NirGNHPbyFfiXTWF8zuqt3rzYMP3i74PPU63Wp5fwAAQMCSTjAQZg3mbCdQFky",
  "key11": "z79kBCvHyGc264ruqQGUtaGNfWyNk1M96nrxnmcDGFJyCyoQdcTZyCunutqowCcSLU3hHNZRVARXwqRRNdZjGnF",
  "key12": "3UJjVm72qLJTRw1eavTz9npaMg6gBv7untajB3F6wHLPrs6kHgDCp5dYMHxXWWUnKHiUtATQyE3yCGRMSynMn9Fy",
  "key13": "3i3GidSui8n4zdhGgadgXXZiiSdxUHvbTMvTGN9E4LizJ4XbPWcHohMQT2QBWYMKzB4CvcmwCEgerHUr2zRNiFnv",
  "key14": "5KKgdeix5npwoDVvb1acAD2gc8vC3tfXv51RYg3MnuGSNFCQzzLtQWAxofY2cnkV75p2tZqba7c97FRgrpAAtC6s",
  "key15": "5e8x6MU4ztCLfiRx9TJrW2n4zawgDfr1girHxi1uejaeAcZ5t9D2vB9eR1V9RFgj3TGhMMckd9fVGMkTttvc1GFQ",
  "key16": "4aK7biwggmkurM5Q9w3vymUiSmuqSz6eiatm1Lg888NxaksyZqcy4TtDCACK6LXGvH6fyqKdcbgoA9rTCo3JzTzV",
  "key17": "23EbiNQFJwki3oE9cPWBFnou3p1qiaLFKaJ1oL3knZHVpdHVGtJS3GkyeHQtkTTmHq6C2eK7t6WBBXkXBC2DMZxb",
  "key18": "4gPAUGxUmy2h7jzUZjfMMoA8LmPQWL6Mg5YvZYgu8ZNMeWkCUP3C2AQMH2n1xSqGnACijnuTznod5Q5z9toxwUpY",
  "key19": "2cuECAUxaxQ4prjSuAvJkdkhaE7jfrvV5b3ZswURTQWwCzsEry64Dswq6uw8VeoCbu64KDsrGV72u17rxKPriwFh",
  "key20": "4o355v4hDvb8LG8e8dkmJbtB33K1oW9MaswVJK84D7t5ppoV3wGZrDVgbWQKocaiR6LPNyKYVMV33tzTQg6DzGYc",
  "key21": "JYggRoS7sQerryKAhxiko8wZdhKMD1iMcY3mAi1aBeMBWPkYoKmxzP9Dggs9aYx79HvikUQsKgfRFRZMr2Xf7Cm",
  "key22": "T7XN3vNKkrKEcggPrqPjfRFuARyPvZBXFqbNiPUWQfWuiWewW2psD5cLA3Sx9WkL5pnLALoYNqpeHeqzFeyLdtN",
  "key23": "3pEm1eMaz6wGQXTz35xbUq6vFDesGihFX1iKz1dULkqjRpyxdgWG2xFdJWWXQeBZY9oFTKstFeg7SZqE7Bfx4CAU",
  "key24": "54zG3L2ZHsr9sbDU2zZyWwCxsHrM42hgPF4r4kkSRv6ocAXbhZQcE46UP9B2tSg4DyT9gLkTADwMpwMCWJeoKTgq",
  "key25": "2XhKQTaaRjWM3JLiCGUcBPrpqHEEJc1ZDLsufnjJRRXNB2BdYsvGNfgtvyGZESCPM4rigw1ryfvCGnkyC52mPeu8",
  "key26": "5e71eiRs5VJhMuQ9pp5TiZfbfcBbJpjSzypwqBpiZ77NuG8rmEhDLjHwbuPWwwU85w2Q1TRWvQiuGXDhewTrDqNj",
  "key27": "5wsyejySYAcH4e6y5sU88QtcSfbtY8UMEy99GeVjfJNmJRHNT9xFg3t99WnEgLpc8G4LfKGhwAbY2sM54wKUc2E8",
  "key28": "5qNGrRZ17nCHQNtgqFfxWQo3GmYxH9Nv1aPVMCz4dMs7eTCQPztHbdJEHvFyNcZ3L1Lvhue39MeS9CZ6oXrReJsr",
  "key29": "2WSYJLvgK72ofVzt9UTm5A7MyW7EVrdqYem5fq6gXbDWwbCPW6S8SMLGWmQVHaq9xEf6vnuZS7VTYYRrgeN4Yyka",
  "key30": "5whZaviJey9hkfG3N1qKKQMuQkyeq1aHLwJyCmruXR1UR4ERLxetxqGoXcpp5qXYD9zBvYtofJp1hpyS5CTsVbS6",
  "key31": "4wBxhkpV9kXcZKmVMEbTjxWwNxMeoX6yvtE7DjMxmtvzWneNcajnrRmJD66Hdi2Wd24tRmuZHRRScgKzG1aR8EJy",
  "key32": "5wT5EAmwk6Kfzn6ojffWtHnJEBwxaZgF6qAabXxBGMF3kT44xRc5gqBsyPGxLPV2NsSUhkj1SaNvKfHkVL4J8QYo",
  "key33": "5gJBDJAtj6gfRLGHDiiNFZuxDGTsufb9iGA8Bezb8gp9B4JNWQnWL99t7bZmNswM1BF4LH42BdnvGnwGEgHZVZZZ"
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
