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
    "5rX9G9bgCdvyBU7LWU5imgQ2HHFRgya5C7HJhhgufAqafzPoaYxdKK5tgzaWEdQdkxK5L69cfWrXQGWPuC9ZtW6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JurDSfQBdL8h6d4wo1653gTFqVPhYo4oHUxsvUL6bEcYDmffyV3AcbCYvHije9DhZPJ577Pppqrqvnqu6tJqFEV",
  "key1": "V4HQRXvKmpcshxQQZrko5nGqjkeG3VPQmFjgQomkCzqabfvf9uj3N2P4bmVUcMgzydWeoaboYvjzZ7oCtsKnNuQ",
  "key2": "4WC6kNPyHX4yaQrxpQ8N3JmKFXcLbAxXMrikdqMtQBtwsEo5e7pMxcCktApPWngJKxdisLWaK7MR2vWUpJnd87RV",
  "key3": "2HPMwCRSPg6APhE36Me82ncVPG1pTDqkdDw9zMcfuCrGMqqn6kRZfJmyP2qQwWsjMomdhSUWtYeUb3UUZmqHoL9R",
  "key4": "k9DESqmVLDscHkm28HxxoKqgZ52fZpLqqQRrmm68xcYh58vhW82ihLiPb4RQGb5MhHuKM8EzhSMPF781d5xPx42",
  "key5": "MFQQsMwzUU5SyD6vVuiDaHDoDtojJPMMw2EfrpLM3jNbd3qy3WEkec4fKSgYmWSQCPdZ9nokdRYdoWFwteapLvY",
  "key6": "5ZqLroHYxZURRsUbzLp3GXcnRvEzJEfjn1wxfLaefv4DTPFfBe2oh8KA6mR7NdoPBJHSUfhJfoyA3E8jPwtrBHjt",
  "key7": "5YkYJi1nUh6ySkynMaSdszWbAh2oKZSDZQJw8SVZdekWPmRkuytwBtX89vRy7ikHUqsiY39AB3nuVWvmWQtC8A42",
  "key8": "2La2sg63z6vDsQ7D5V8JTdHSE3V4BRnksy6EfUgpsPM7gq5Au4nYTiPhFr3x4Y6oaqZYNeGUFcStBChJtxV18b3x",
  "key9": "5RgGyW35Vxy5Cd6WRpv3nwmjyiMdE34hsU5KMt3FkTHVhaf27VC9cZ1boRgZSpDBs9qBGY94Km74aM9ZmpmL9dzQ",
  "key10": "4dC9JDxcNvyMgW1sYKiYUDhmWQiMXPA2EU1s4XStteCGMPRWiWGhrT1tXuDswNejxECLtURjMTPBa8X8718ANhWq",
  "key11": "pm3eyHTkJzjN9stBSiqSrt9EP26nBs4p42quhJyRnAAgGbuDbThRraRboLQmZJzvVUQaqw5qQQN1Zb49uQGC8dV",
  "key12": "5AN6ZKxaQsCqQ4XV4kqxSEgqjk4kwaHTZscEPp87DC7wsvsw3s6DfaKE8uA2dWJpPEmzkmW2AMurQiFenr1DunXv",
  "key13": "2Hudf7xfegL6LGHjqG6JZYZYgYXd7NWzof5Dn5HVsEebnCq8U5N1QZaGg9YBadWoXFVm3kDxar7zRsgzQGcU5ma",
  "key14": "4rvMxewhoe82j3pmuANQGUqznN3G5jKAaj7KrTij3ycVoaiRqe6uFtjCeG7BjjB7EzYNunf6uT3tHS7CfZSYJUXo",
  "key15": "zshfenf8SxQhUvSZUZxPwna4iWTJFeg6Xif1kXZzeRkSfY8iL7Rhgri7okoR3yUepNwXCXdeGWTvDtbJMJNkREF",
  "key16": "3MX9yUJjqzFutYLGjcYsu3oKYUBQnJikpZqrUxr52raoRRW8eDCzYF4hfb9pK34h69h71QkbwVgRMWYMuxkqKxWX",
  "key17": "E14GDXGPZxH9GaRL85q5jtaaFYKbHriAivbRSaagwqdbKX24MK9mQpeaZqsvXZVjY8fZqe5jLf2Yn1eDHhB137q",
  "key18": "3e1v3nPEiKXK759mnqsTLeVGHUfFRBXdmCKt8f1Df5S35xcrNArR1i371q8qjs25ShfhSt1jzokA87r9jTzBA46Y",
  "key19": "3DhuU84m9E2FBzHYMFwk68treExYrgMokSjrRjrCdwMrJ2Zw8S3b1csy2f9fcDnWAN46NQqZUScBoiUUAkupCQgx",
  "key20": "b2bGiiRQzLWj7ZtimpcMN2JYrBA1Eba5ApDc5ywRK8GKcLfkzaq6JppPX335wpGvwwtc7tCGEDoUZ57EMNNrBWR",
  "key21": "2PkQ53A7N2x8Acvzw2X7wpA53x5eYKn9oY65oK2ymTLeP2PvT5X77AtswkSVWCV1w66BhJPMg9AcKt3NsXJNUN8Z",
  "key22": "67Zdh2zr3eBf8JgVsPX6ECKuro8MKizwM3p4jorGTutLswdtygFQFgezA9Cxgcu93nF3vX6QZWsHzU7yRA8rUx2a",
  "key23": "5gv8MudK8WFegDrjVth7yHELThhzPwD9VgTFUjLsUdX6mBULP4ALR81pJqTojNuZUtkLgeLCc2W1SGKVchGQ7afu",
  "key24": "3gSRmp2CZu3izhYhRTZV3x8ubEnx3VCLxmkXxmR5iLJgwDM6Csp3zMPayzbL298sRv6VKP8apgke42pMKb1eJFfF",
  "key25": "2fAYqH8ST8x7VWVzq1KRUkq2v67MokwVkKBeh1vBWDvV6q5Jz4iPkFBEto1F9awnUSSXRevSnSpWDsCKeCmwyZ3a",
  "key26": "Ci7GMrnGqrE5DPS7HcampGEL2W1DgzB7UhNAtoJAQBiLYKihrjhh8uykDoTwgDXXXAgGpeyEiDmSHBihhfdQ8oB",
  "key27": "2swxnemzaSLs72xRYRrqayzwj9zjz5P4viP8ZvVNsPxfTZLHoAos3i71aQsPAZj9RAFwVaWDYigRxXE1FBdvsAZh",
  "key28": "4bQrP2xq6eq5mU5uEpxys3XWjwNxgWmwTFm2cNobBgJXgDkrhvKqa6nsLUU7WPoTPtHSwAT1DeVPdsWmroUEx4X1",
  "key29": "4zG6BbaWSSnJK4VkZPEhRSs4KL4Mz8a9f6R9mt3FwLEDDGxEPcGCs2oTUVF1dNL7WpcnwqAS1F5EkCXC3tsRYHNy",
  "key30": "nyCwTJkGPM8woBoT9g1wEGx4ddW9kiPbAPR75ds6SSPLrDStLkGx57ssc58dEgAd5sP6P1RfiCXGJjsSuZEnGWN",
  "key31": "516KXfaxcMBkTcYQJfYadR2GRvz1y2kJuyUGQ8w3KZ87xRvGbAqD3mXojghcN3Nb6S2LMLVrK69vjCn1ZNgPgYTS",
  "key32": "yxQtLBVN1Phj9nx7j1K5d6mSqwQaTLFGJCMLjkR5p2HSfryuX92PeVjt2nb93Gr1TDSiXqCoiECAXYGXpaCb67E",
  "key33": "2P6JHA3qHG83YJ9CKzVMZqizuDxmQHhcBQd6erMhSjF4ihyeKoFrcmYA9YtxG5Pm3vTLYtJVzFaBXKKnZMnhM7bb",
  "key34": "4WcwDfCR5bizK82hiBpcQUWDcGwdGNjy3fdzTXvjfbnreJcyq5nuSESDW1PpKq2pk9g6ikmx7oY73MEriVL79Krs",
  "key35": "4mievQ5XKb6rsn9urQgCXJKkF3VnYYRwcafqEKrDGxnwZc3FzsmhQXWt6e4DLC5xSNgQ1BLEnMj4EsVk79aTVuNW",
  "key36": "2xBprj1KPabsrFmkdVfwa5wr2v4xKzwqZ4ZcCHTEr3Kired46hjHPKu1eefsA9mKDwiHssWRLUpvAYUoGZ7dCAZg",
  "key37": "3KxVDoEGvnfQpUjYWKpvFKdqYbAZBu2PFZ8Amh6tWh256ya9KTP1bbRzxJLLWdeExjBnVetFPd2dQBQKeQRAxfAS",
  "key38": "3bMFHr3mnFkXYBCWvPfhqgt5AkgaSDxuBLXXDeZcQbVxFAwo7bPMjSJZkcx7EbMnb5fAzwzR531RT7Eo2FmoRBKV",
  "key39": "4EbgGF19WWtnuoEUh2yS83wNfyANd1tdkVmFS6eDaY1aqD8pNWWLtFNWJCpFNxWQM2JvCqm5YzJVjM81tkcSDNQE",
  "key40": "TiM3Tf7EVz5H3VWCABhm26zjCdwPgqQKxVbtsCXwYLXDCewtq2eVacs91incpr3ahmo6keRDasndvBv1oj38xu6",
  "key41": "5wv9QUp6V2q3KjrxMRtegiLVwVoph6dZ7HGcQxuaUSrs8cswEh89ct7cL6M9obYRaat6LzCibtRfRU7rJcbfeAtm"
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
