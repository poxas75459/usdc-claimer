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
    "2v4D9gj7ueL3eA9JneHX31gtjiHUCoe1EXd2hfijdqHYnFYjJZ8Wf65TVVMb83AsiPuKeNh86orsHuUhP4vbHNA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "553GCsAMQFdTXLA4m1h67wsXe3C8W8Z6VeSSyUqUWMBc1KDFLM738CTu1ES5me7VVkbjZeinmtKbEob2DbpJ6G8U",
  "key1": "3ZXTLknGopxgtm3AYdfbYA5UVwmkRKWLaZzkGJE7Cwgow75BzvGcf8nDxZnFTrTFM5ihEDVXM2HadN9dyWc5xPjT",
  "key2": "4b92yCyqJJdY7iC5avd6CUxJsPjafrTezt869skXVbjzq7EnCNQn4SLu38hwFLrHV32HokJvY9E7v9idLjixatBQ",
  "key3": "3uLKGxUxg5JMfq4SxCX2VdBrmPF2bodUNNXtUw8kwzhK6KQ4oZ6RtVQwSw9ta687wUwepd4aBN4XMonh2MXR6LFQ",
  "key4": "3wHgTEYAuhGDGeBwSzhuX9YRhK794rrwwSzKubUW3toS1oQy1pgHDcs3vGWqY9Np3LQvTTNW8Wx7uvmRzZAGP4LB",
  "key5": "J2aLY5j59LGQg8nGUMJYUZEGHq52DGeZg9yACcdZouqjLFBSAK1mQDV1JLrob1pdFK3decqKh6vkjjbPtGCc7di",
  "key6": "5tAGEWBhD3GbH7vhm3PKPdb2zgWCtq441kJEsEiaW1fcCCpsggkJ28XqaJ1YCaNNcAZNhiMwrCb3Lud6tvpWseVf",
  "key7": "3L2dRryH1iXKmQfyihCt67ebhZQjEfiVDJHC7RBA2QEEBH8qkcJCXLiJzUeZniPcGXAqztFLWChE7q4o7PKMLZdX",
  "key8": "3Pe9iEEUcf4MKd1gYNhEFatdY4F41dSerJW2hiXGMdisXzRzqbbWdMYFCBDNiVU7VyZqzR2H9kKtam3jYgYtP9df",
  "key9": "3Gk7uQ1fUPa9pf9cgQbTY8Vb4mhFNu6E3Zdg2cWFjcLYsPGv6c9s9oSuKBVHvXvNtzwvYYTjPnBGyY5ZHfehih5m",
  "key10": "5b5fnibvm3iDxJc5hX4KwUXYxywwdTJiLUu6K9X8T6yRCKt7LiWvTnRWVmMjPj8FFBgMMiRCPEBC27HGabCkbvx4",
  "key11": "28nPup8j28V51TVFVYuRFbsdjBs6fWvQxfLiuxPL1iMLqC6h2KDUWq63hBm8gdPFZodyyCcH9X3PX5cX7jYeLFMC",
  "key12": "3HkA6LYGHHNGD77KjrS7Ldfg2Af6gcxAnqGwWTdGfy7UAE4WejmNJRMqo6rKbGBnPMAdJTp4KMwxqzFDD3cqyge5",
  "key13": "fN5F9tKtqY9M3CpHLSY4LryfJfUA63nubMC94jCsgoZX7n1UdyHgPopWermuCCNP8UHGUk2UhGqrg812tTRSAjU",
  "key14": "3CYMQHhiBbXhc19TEsWRF4cYyCvQAAZ83RS5MJBkUMunUvBWEC5BPGA8M5dRnfuLbP8TyA5oHi7uWQ5d7o9cT2h2",
  "key15": "RbUGBzfi8NNk9rByajAmYuZ7vpZkG3Sfoktig7tXohUxumNVaYRef65eWjiPWXJYkup5xPR3HbMexohCcbpavVa",
  "key16": "5B21Fmwc1352b6Adw4GXLAbDPawjVLfLUqpfhzL6uzRGgRVsEVST46F6vPR7jWMB58txSPCD1NHf8H3tQoP9GGQA",
  "key17": "DAkMekggyAdZMB52hLsLmRKrg6Be4vRvJZNVdmfajT4wYHiUhTfyKZf4gdasRRjeAETa2UcyjtSTKRYoREnModq",
  "key18": "41Hiy9dhRSQ4Y1aim2RtwEmejomh4drHPTwZDivLhnXC1iAAuoNE89bTZbQzt3WUjsPxDPrT9yiD8csoEMPBrx41",
  "key19": "34woVRuWaNDMyAEUdXhRfijmfFoRntkY4TNq9Qn9z3xyFBd2NH4wduyWpdsgekbuPGnnt2HnycCs2xhcDdSuH5j2",
  "key20": "5GGdDdmw9Ac3vtiNiEZKmw1k5LX2WdGKzPyYsF11yUEWTY1P4WD4qWpcymD9nrD8krCbK9gCniweLgNQgw6Fyfm5",
  "key21": "36ZaQJGtdtEgKQptJ1wC8ARrtnFFpqw72W1vPy9xZAUt8CuYe6ZKm5Ca2HTLvWPF7y18fgaJ9LUB9gDYL7HZ91nc",
  "key22": "123mTGs3XTcYJb2MVWzLrLSHyKMHpjdw2jiVhVJnWiQuF3QEdAzRXnvYYaab16aHEkcKUPxso2RbeUhy1fwsJumu",
  "key23": "4UoVCohG9KGPqsTn1GwQX8nauTHrzDZtM9GXFtZEbtwG2YkLpdTiybbdDYHFitVigqTbJ92RV3gorGGybkrchcuH",
  "key24": "5xWT6e8tRLRV7jaB4PdruCLu61BvhWUGk7oQp6hkVcqbK4rfDgCrF9LeZT6ScqYmYEzohWPn7eGZn7nyweHCNxQr",
  "key25": "3SNy9SBRZYhj6yVU9vr66APrbJgeB5LsyHNHMbMET6VTvJKe8jBsuftEATJpF3vqk9dSwvW5svWrV1Q3AJwcqtts"
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
