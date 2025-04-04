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
    "5vfyUyBjBTpvUAX1SgU37uTyi2srFEPipxapNoSUiHibVud9ByodREcbXTL2kdZauUxiCKDhMeZF4DmiHHHQrfdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dUdPDPAzfopB6tCqMLddQXWRvWGodXSVzKVuFwB4ttbaB1o2XFAEdP8C3ZCo163tuZ8sr8jHVFmpb3vKbEKznu3",
  "key1": "3idemcDJHqwfPoZo3LZVHNaLMSZHyqpNZXUeFodB4wpcxvKuPLboYgj81ZkhiS9MdbnuRhhGaMxhe61kgNSYjQZC",
  "key2": "5hLzqE14oMDrMrJD1H3v4FaQZA5wjZKzdiaT3yJQh1wFtJfmfi6Juv9VmpvF6po54d5nECa3k6WVG66o63krKxVP",
  "key3": "Cm5HjC8rpkPjVzELvjupn5UXpbeyFJvMH1s1teTrtB3YGsTpAF2EgDqTkz4z66RCEZVpJcqusdPPkgUhELLyDTH",
  "key4": "3sKWZy1eLoA33hq52Gh16iTHxQzYbgTbAcFDwVYMgvZPT5tFpdTVdkyj9DgapiiqTR2fpAoCamBgd7AVamf2pvAL",
  "key5": "2jHk7iimcpLCsgrpfamhaSiXwsLYBpRvhBdfKi3zWjnhtDiNNq2b2z6zGKk9HGJTKca9zZ5betr6A59FVhTi85vk",
  "key6": "5qy5X99PNwVCr1c7HJwxCtWWy3XkkaR1X7FaXsr77hFSNbdzQLurxa1f8gc5fmDgVgQtpsyCJ8fq1QyWoyTJr3eU",
  "key7": "2Xj5pNTEUhCmukCgpdqvg9F7dkTA5tnRZcjALuQVpGjQW5ErepjFjwYDeDCLMP99Apebe2pCCk9apjyJmtBupXFQ",
  "key8": "4sfjUSJEfY9NGX2yE8BYw6fym52bGzZ8e6yrj5xW3MqiWoEBHtwkE9TPJUaCFXRFBexJ2jJvtvyDrKjhp44G7x5i",
  "key9": "3GDft2WcBo9JVmHQroqndzS6TMorighphPJCyRYMXGNFwTyG8R7jPGg1yzTU2T42LXu59Zfcd4LEr4e2zB8KvzGU",
  "key10": "4RVKXNgz7LcxXc7zo5tcvHcjByk59fCLJ2oWWMtS84C4Z9aG7oXcuRz9THkUwGqmtDsMDDj6UPGfHsq4vaXfPfYX",
  "key11": "4BsD8RDtKiETXRLrewYj7XaH8aciQMvKxubiBL1GWUE9ZrN71GCmRpygkLFHC5kH5GnQp6FLQP6oiiHdtyugkqmT",
  "key12": "3CUsnHgCG9RioFwy1kYqiXgsEQGWo4PMLuo9dHgEkjUQZdMuoHTmd4oF1UBgHcYWimPzXyV8X7ya7PvJGpTvbv6C",
  "key13": "58Sx3mwPxDhoqXYsi4Tf61JKCW41t5Yc4ayC7TwGRP9UUdLTtAhBaW4J1Ckv9gJtPQynpmscp3SsTME6iokrR3gm",
  "key14": "38VGJpWB9FQCHNHzLGCGBvDceyvNCab5L6MiwZUJcfS1jBaXn9jd7pVUAQYWwHNtzkFRWEhaKd29nDRqrjPEGKuB",
  "key15": "2PyxAgajSWjQU16ebfZ2UDQLphvtBtj9zjV1PjTVG2B3cxYAJAxrHmBAozZxFBnLyfkHPgfFzWWTcjLx163h2XS6",
  "key16": "4mZYFnzyPyMoL8D15svAvTmt3YDXWafbgv7sJ3GsY19Xs8fpt5iVYmHLPMbuVaFtNVBuiKrjZbjS91dAbNPEjuUb",
  "key17": "4JbjfoE6DCB3Mvd9KtF4BVzatTThnN4KcSbacxNF7RQ4sZUQzTbKuMJGE7YadpXSTap83HxMqgodUGSsow3mKaGe",
  "key18": "4NFp44yZVAXj4r7RPfrcSzyRBhKhNCs52MVZTfSaoFopzhfVFWQGFKFfBDLyKRYtjkV5RmRH2C73SmnkNTx69DLk",
  "key19": "5ciufBpSaazmLD4vjHx1G9V7VzZFLPfmwL3NcLzZaovwbUqF7qwnzp6wmgmeaskFZ9PJgWW5NyFRyAaiNDY9Lnpt",
  "key20": "3s257kDGR1WjTaWZ8CyTpAwti4ereHp7J5nLPf5cin3oqpnoJneg5DcqjREjaUAbYjFvutASK39NdLua3bcDHbvH",
  "key21": "5MhGHrBmiCZfkNHBhiiHW8Zf3FwiViZ8yTiKhe4jHFFeWpx9kEGL84A8fnXwvtRF9AdLEHKVCS8E99zcDwh3t6Tt",
  "key22": "21q8UUJQTogy8uhPCGxFYhqeSrHx3DNZ3QUW5ofbemfEUbwRzHNtuDs3xzZUhZZAnoFbqx7oP9J67RURGx7daBWq",
  "key23": "4UVmksgRvACLF7nUyxBcfGz59L3CgX3teaxtfqK1U4FVwgeZkszrbtnBVLMUKTiU69LD7joGWYXpdK2dwj7msy95",
  "key24": "2Nw9jhzwd3HYVJxYQFBLGd6SrD5mkaxTX8PcD6VVQgfjKRRHbXickFcmuQUSWonEaDH9BfWMLXcxbe1w1D8Ukbwq",
  "key25": "5t7CWqNVaShJJPmadfGuS1kwwgYES3aLE2oNXQG4wojyUoStR7HTubecwRb75ntTvBaZBDW16ZSU62iTzgXoM7ks",
  "key26": "46V8XPa3ECMmYkkn9WBgZtaGRvUodFh6z4KEtp7bTdNwHqcUjMA8egkER23fVFSAr1DFJ4kfGrFm5s2JTVtF5CCq",
  "key27": "2tTEGjgZ5DYTHEM4bV5FUtR7qEMuKf6KVtK5pHjRQbnSauLaVuDSivCcJ9K36h5VvFta4QjQBajMDHErFaayw32t",
  "key28": "5E5wZ7rKGPa8dPu7KktsimdFwUNJCaKgjuYDhtJ65pTquQJRnLCSGZsJQDRwyqVFXE8bzGPZ6ppRtWDqHBZf7p4K",
  "key29": "5gVxeXdXSm1xWtPZehaxq7MC8U5TcM68VTuzqymS5qfxfKiqv61ftJj22mkwjWByPTm7RjrdE4WB7JgGPd3XBHa1",
  "key30": "Wqu6dwxpvqGPyMNAwvGNcA7xeqdicUg8DbKDAdZg9hbf8M7RoUxJ7N7FihanzhqL1kp3J9M1jmGHadM5SrXc6YL",
  "key31": "3PJGpvXzPS5isSpfDfJ4ZWPm76fTspnkoQnswir4ivEUCHsDZrAZH4eyqDoE8ooRsXV2VtXip7Uipubhuzg3qh1R",
  "key32": "4CrW5NXZkpDSQKJsCVoqfcndGnBB2mTboExUpdbT9MkgMwkkbdQd5rmFNTbzwFM3c5cFdCc4bD1wB1PZ9bzAKSLd",
  "key33": "3gkJQFHDVk9EpFEBjoFArPYiXh78qTwahgYtyt2EYM6nyGmvHBMEveE9qTadKBik7kWHxgdJcDmyUMcAgCW86kuS",
  "key34": "5cQt2Bau3p5paeAybFprrgoLsaZ1sRrYcb6ZdTafwqtfqhQ8iZR7B4BjvuYUafRYQPHMVLMUYmPzAoiEYUzKmyrz",
  "key35": "19eSiXXf9CEQqcqoj2pwVoYqL3SrBxcm3qpFCfbSVHnYNf4LAP8PVsfXxYgTTzdaCypgPumXktVhdEhC3tUWifS",
  "key36": "5BEoW23K8RuvcbmeSuBzJVnX2jh8Cgh5U9tqixppijB77ryQfdrkrLnkiFi7UQXt6EVz9gBLx22eqDTNRu1dXevN",
  "key37": "58qvSCKgPCoxR64DbugXtmHQK8o6BupzpdfYJ1tj8rCwasryvbNuJkZaFkzLgDbtAzKrXjWuMt7tvrj164mHduZK"
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
