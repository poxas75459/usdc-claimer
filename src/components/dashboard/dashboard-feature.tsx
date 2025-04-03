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
    "4iMRhTUfXWPncc5JH6h2saWq6LzWsu4ACFRsiCidMGpHRa1E8SARzciL6gtVN3qoAqbiUjhUv6SMxqZkuYM5YQSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2env6dgZZEgo4JgXbcAFd8WqKEu4nTT3Sk5imWRvpusQrE7ibP5AfrBeA88FTSSjRSogLuQETa8i2vunQiMRbNML",
  "key1": "AJWRcA2g1rJT7mcG93FHqTmbCXjbnA3Rb3g8gyuppViosncsJVGbvZKc1thWRrrGdwLXfgsZVnNtxYfsoWDj4RH",
  "key2": "3snKA6HzYgmiCr5UkEephBuDHZ2x1o1JqeBi8VGCbPm67xY3gKnrf2DntGjWm9tG7WKvSTCv2FJcE5yAkANDw4K3",
  "key3": "2AZ3mhb1TfwgNM74eHxmDSeKRqwNtuAgtbT3WhkpyKEoXXYR6om5SstvBT4dRZuzdLqg4McoDcmaBcDoMuaSp7XK",
  "key4": "34LEb4V67tfqKTQLPWL3wN5N2Ngk51QviPiBTNpw7FYSiuujnXVJ37CN3LWmj66rQKukuvXsp2A985VJiRDsoLwo",
  "key5": "2bfio8xuvVqV9AsojJHAkHiZcUvJSobckkzofrGpJFsj1rR1du7anh4gYX5DAnWdSdb8ZTCsVt4wGQ5F5QBRnHZL",
  "key6": "3bf3v7Db3b5PYTbj91JpAdiiYrrCL2aS2Fo85ctGx78xJWKuRoMm1FdtWrRGCH9WiugXFMrR2qpKNkavxGyR9Lhc",
  "key7": "3QGkT1ipXpXjvYDeEXxPqL8kpnni2vdb2nDhYExjaXiKHbg5FeTfroBK5iZPtVZkSupmee4BhZNovbk1kZZcND4r",
  "key8": "2Ta5wiZeb8V6v2CcUUok1fsmJs3A2DQwSuQVaDw44aWgEenMfg8XD73RFVAp3RLG2UGuF3i29WAgxw4xGwgJuSiT",
  "key9": "5QNV7gMWwnRoTooCzbV1uCFH4JujYk7vLvg3EowJ62GktEHSjWWvpXV3k4LCpFcsL4Doom6uY9gh34bSaDaYHiwb",
  "key10": "5T7uvqhazJPQng7wmXto97btXAocFFyDqtzbuaLQbCp6LMcDKCt5nokS2uN3myNpaae6fcsqFYPbzetbzLF5mjBR",
  "key11": "4LJnkwiaH3fbv343bx1S3scMybowqcuo1bwsUQoiqg7JxL2wZpdb7i28Vqkmq9bj1GXPJZ2fNVqcDqGvmGR3AAgn",
  "key12": "3qv87RvARincCppn2ws2k8tEF5vVuCrkFsoP9XqvwX2jftzSFm7UzUiHW93BBMFagRc34JTUEx3w5zP2QY7TgZY5",
  "key13": "2YzZAkTa1usCUC5L3E1dhTLsSxyhdqarCkbeLnWa429FViYJkkMCdXfyxJceiaQj988eGzZTSgA17uxVWAJTSxd5",
  "key14": "4LmtmviisBPY8F9QGR7bvJCWM7GEYW6m6AifWpASCN34FucbDXG9RiyiWMtk8xsEtX7FBtx9ARUKak8syH2rjKbP",
  "key15": "3HWbdZmF3wbkmCp6pCLC3F1GSe9vvDBSPjYZEAN44sSqakk1X6Cc8eHcNt1waZbLwQxCTLykwcRfUW8CKsronraf",
  "key16": "54tDvpQ3mzrk2sYiiKFhgTPC2DGQMgum8ozGon8dr28a9TktvPBYFo1NT9Zoy6BWhY1W5kcADeuaaRyTnXYHpag",
  "key17": "2cuEZBs9KKSiixyW8S6oeKf8jCERRZr6VcaFVAKr2JbpweiXSEBhPnkRaG2o6FDLZQwmUjnHG6NbeNmvZcmUHy3x",
  "key18": "2yAyTKVY3UGKNSirWqEZVNR7if1MACndULCEj9oHBGy6Kv6YDqiW5pTVnPMRKqgDad4w7zQB2bM5PUs4e4eLEZfQ",
  "key19": "4ZPZLACU3A5bDEL1cMNfTMZSKUWNzs3yaT1FbwWe16jcYeqpq5micDi9tGyr6pr1jMadWPqRga2iiXWpYJ7XLnDg",
  "key20": "26ydqV91d3iX5Syn3AyNG9qreNg8SprdVNWfTJE7d4Y9m9kCp7zXzHNZwwPeanBkNrumkUpNe5zbJipK5AR7zcEt",
  "key21": "4uRhLuDGVLKcuaQy7h8qFAzN7uwAwbUmrsKwEng8v2UCQnRjuodCqhabo8CQkoEroFRZWaGPU8G2XnbNihYXKSC8",
  "key22": "59Xd87Brn62SfctXYH5Ljsnk626gT3ch23ASeEMsR7qDBZmS8z7khdsubnNLaNFQrUYiqLUc7hCnzZumJw2n45rH",
  "key23": "671EBcUzrkTSdMCiXbMce14REiHgky43vRRXT9zV1eLkzLhhjeyD5PrKfCd8kvjrcJN2J89mkgLa133UtoRfqYvU",
  "key24": "4FLBtnjsaHShf5YhAwJi4Fb1RG2NUAi3ec2VGNmKZm92PV7kS9BwLQwkckYv2tG5X9XkhdmMsCDcdvq47eDuVPqN",
  "key25": "2pDSeoJtfbiRrp1XF3VuaxP5LWaRzKhfCcSy8Jip2fGwS6UuY3zaNZAKVNSVbtizeDF8TVTFQcgoBqb4wCTzJZqe"
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
