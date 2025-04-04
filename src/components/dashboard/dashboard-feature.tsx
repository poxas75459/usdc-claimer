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
    "4yuugKep8DMA3KAdUjjiSeMUF7pEHKHmW5XtJ7jd7qShLrSnZ75sXW3nALDMy98sE2ckbAsSQgG5GFjzvSXBMtYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RLAfoAtvBXfD7kcMSxVNHdWcLxihctv3DoZAF8iZkuHwugU3BtJYRtmBFke6bTDyJfsGWE9PdTMS17DyZfYBFa7",
  "key1": "554N1oNk6kzed8t8Y6JcA3sUjshKW51DrYwTCXeP9RKS2JCsgRaf5wGQsCpyPTZHoYZgg8333gEUgxTPwKTW3Vgt",
  "key2": "5N71R4QpG8E78jmWz25cw3rqjq62PuAmBWWj49YK6h3VqD9qh37zx5jej5QWrJp9LRQH3YPoYBckkbcgr5MGs95D",
  "key3": "3eHwTopXUd4nBQQP2tPG81FEtwR5PaoL3oMpMaXhECo3w2X2DeKHHc6fVsBHy8qtmd13RusEx2shF6xhNn9uqcrQ",
  "key4": "48Zy9FPBpM2EE134tZWffoTfLSqU54U2oX6aNnpzn6ArwnpLUP6heFmotjCz5aiMAjKN1CNFFwi2sFopKmHa4bQx",
  "key5": "22SjvgddnzempDK3fb53RknuQXvdFw3o6SqKJGJ45fz1a7Gc6hctfoJhhjofcKH7k1WHoFqHkMFi9U2zcvzodkR4",
  "key6": "5WRPextVxt6HGRBW5vrCThcB2Cah9xozLYCieLceDspVGMGkXwY7rj2cWsX7pDFChkRZxMz2AggES3W8YTMekxKD",
  "key7": "5oTEJorQ1vpFMqBbV5AujJGiYfFKM2CoZ91G6Mh3VK9DXYHN53EDMJPDviZChRaPFuofLbtYLrnuZ1xJ3zCn1qTk",
  "key8": "fybn9E7NDNnfkJgbLwggwE47BYgeuLzEmhxaa32D3eN7TQzSuYjPajsDJRYp3BTYetF3S1u7UNNJjN6Vgbtm74i",
  "key9": "5Rsj2SAYQQNhDPQYfxyXYj464DfjBBqQxfeCHmpnHdSKJrAzfyryReYRUq4fGncHCu55AY2pdQAPDxz7K2oV3EUV",
  "key10": "5eBiEm8nULUvH9sv6umv93MTdYrTZMgFDbzxp9TxBH5PMXP7Pxmizknp3woskf7BLaMiUvdbzjdZ3qsV6uy2hudW",
  "key11": "5S3UejN2opqMMAjKfkjXoUBr6LxPqiyq1zqU2ipsVV9PL7wgEg8jWz4rq4r5KpoKFRuszMTBZzxjHcG9bkAvELGk",
  "key12": "2P5rGyaozH6Hzhf28uWtkMeEciYUsQ9EFVwv6GLzv6V6zpfYntXHyzU3s4EbJzMjEi7mWtNfvZiFtz76G9ZDFTJB",
  "key13": "2RDu6J8s3Kckzw1kghcVA5hbACkAqrcYFKNDV2Ew1psP9WzjY5kCk3SLLJDJJ5Xy7rohcGBEUHwKyGQBk5qoZdVx",
  "key14": "4ELyqgajGCtyfYSCfpnKeVyJSiodfhxfin3fTHN5U4axzjiVbHHUfN8vRG5iN8z1Gz5ehuBkXTkHo6VfptpoXYN8",
  "key15": "5c2VDKptLrdgQ8q3tMRHF98jqrCmZi6XAi8igqst14AqsASFdzxZhHn8SiH7RS8rJqbMM7GRPjrtJnw73Nok5Ljy",
  "key16": "3ZEwCLms7AeSjKkzVzqwoHfPdLSdiV7LjQo1XW5ys2vLgEh6vyHUcjza52ASU5zmDUfjbNwxXEgFu4wYs8c9xZJY",
  "key17": "5xNLku3KWwRtLXHKVnBf5tnE5hVjZAZoHeX3zVEhYfr9JvmVi8wqa2QYWzUnFuedACYXAn6CcHJT3j8v8Xiir85C",
  "key18": "3yBHFZrxpQFvtparZyo5aifM6BhBQRvUUVwL3TdsveZ2cefD16zhPZqn7RVVAqJ2aPQRTa9JqnWr8dtMX8hXdfH6",
  "key19": "jjHAZHoMBUoydZrbM369rrRzwZ47dLJaAAfS4RzezM8Tb9mmBi86Atr6uCQM8mqXaBp7Kh8q8BVf8rJne3zvSvc",
  "key20": "jTGMNM6rmGhvbWuhp3NYDW9NGDvCYQbu7PxKx8NMEajmVpUi5fn1B3F3CDyXhLZ2YgqD9fpzwx1ho1oqWSG1Z5m",
  "key21": "2Du6zjqBgLDEBZbp5uqwYeHrFiXGNb5Xr9vvHW49eaxS9Dk2WStf3v7rfvFfydaWWQR72DhTfc9eaUkdChHf85BT",
  "key22": "377hGwEAqPY5SnX8T3wS6wEgL4KNuAtf83YHN1aWL7tnpFCPZeWhkUBqdT3QUh7FJpnGejxQjWFBT47kGVhEKBBg",
  "key23": "2XavHLqwmyQt9nNvkqgcjdWbomQfJsjkysaZYVuRsQdoYxGiMZ4tMNtzqULUT91Z7VVamEc4tbNMRK6LifverpSP",
  "key24": "3BwXNSvHPC3PH3TddAGEKJDVpeNBwQLi1RG8m8y8Es8gPmTTFAgoJoa7dAEKNUAkzPNwchvZXs9dxXcCT634x6xZ",
  "key25": "3z4RkiUnd8k8kZyb7dp55tt3wqbWefBv9q7HdKieYF1UEeADE8VAPobpZ9GU1odGYC7QvP7bJk8FNmNSdjh8uHuh"
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
