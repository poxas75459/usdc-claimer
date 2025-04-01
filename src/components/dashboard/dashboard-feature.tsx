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
    "5FN2KmVmqU5QerRESf5JmW5RZt3Ni9iRiRh9LdUyLVr9kLcHocfjDhubKASU6Rr5wTc5F3WXYA94hcTgP735yM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R6cMaErUgEA8UBZT3S7gs4AjXFrDoF232DFDnRwvuxPq1vXxZiCUcZjoDCMCjUQcYmQvWmDjD5xmQiPcL1z8iwM",
  "key1": "51mkYxhbbBDSy2evfDYaerdKxiWfV1exiyzC2BWMNub5MPv22PWuLAfM1u1CUKVbxfXK9k7je9NnEQs5FSyomFmb",
  "key2": "4VwTAmJnuiGwZAJdcpde7arN8zCeB4bPYQPYnhL9yHbtKQpLsGzG3hDUThBjhBEmnY3bPTJd3Pg8hbU3wzwivEUg",
  "key3": "2i8MpSzd5PiAUGJ9AXNuSWy6WUAqAaMZYdwfsiTPUu3XvwpiLMBLjLJkKTJtGXUjzRdoE87Q8D4BYBDq5aJswp1T",
  "key4": "5HRAuHWyzBYSVbhfdci7MrysTHwcGXDv2sCkTGTJtmF24KdWYUUXBAu2Py4UKULeBK9Tj751Lt1Fu1gCfMFTjkwj",
  "key5": "3mzaSSf2L1zpcaaNbGhXFHTua7xDrdfhbUWkrRv1erAvJeun75USAFL4dTHM4GVCJPpVUJwZCNzSraFsUbTeVGPn",
  "key6": "2e4XEmss3T33QvBXEh56Cb4yYqHW2dMUP7MAvEGzB8hb8sNKkqQkTG9ASAr4KxrkkxF4BGBypDbUww45FsUE5vhP",
  "key7": "3pQStFSXVQnMwC1VeytEXwfq5KT853iURvQYj1wvba4R9ssVvVrvzQJtrzhrS2FfpGzwLi1vSzB6cVfqtrxfasRx",
  "key8": "5BtZV2JFf4YfrFuATj4u9iqkoSzyJ8z9VEB9eBTPx2rRtZNUvLiZmTLABAB8TScxvBxSdiadLQLq5zYPFSTYx6ok",
  "key9": "2NMdYCYFWbEt3JREKZKvwUnNExogTEunRwRYg27KLm8w2MQmyggVwKUkhiBkQzpFyarQgMLm59qgB5d4fdhEs8RR",
  "key10": "4ohJyhq9Stb5um29VkYXjXRhX5Dmzeg1CUGKxEyA2NLNqiSJbtS74WbmPpq36BGUAetRWz59k8um9AcdZbkMXTxX",
  "key11": "5M9o7kNAK8r6obeUXMhprQPpPwiu8N5VN87FXGLNUMC2prM4deZDjTjukXiT6x9M3XxMBm91zqcVDq1fVrjTtkV9",
  "key12": "HKibJwuF8JHyqpux5sznu7e6zqFsiFYQ57L2h5J8RuNzZ7gTDB568TdNF7ZAz568vz2gY3yfaf4v5ZCdzxVXAew",
  "key13": "4AoDstamgayF43JxvgC1REMnnaTrBKdaZXWWx2MdGBAtZDQ7MZy5hByFmSRV2QS35mCnSHL3ZoYB1nw8XZv9PUQS",
  "key14": "g5m6HRFHYGYy4AbV1bJ78uS98423YdVqCF1eHG5EVkbNn7n5zVAz1LvFLho7xfBgorAXdNN2iN6imvcop1i9Sj8",
  "key15": "3Q6FftTyyzmhB9oPyaWnCyYCTe1pJmAvrE6YeAxyGD8owTt9UCQRk8u3bsspvYg5EbuvDKRPw5qccsb429yABTYV",
  "key16": "2o6uiBKUKZAsmCVkuMjiF39S8wxt5Nhjh7woogB4bpheHDHRq1iDPHgNNERHr5UkKiKsQvCEJ9rjj1cNn6PZG35D",
  "key17": "4F1etYDuwD85HNe2PtYmTEyveZFbCK5RHahBfYtgkw8E2ZXavMkYUEELDQ11yK7uZasYdxdExEv33nknYZSdEA28",
  "key18": "449yXGxeEPDg8zPVzeUkUwN6PLUnH4RMn4QEZqfXF6zZ5X6EKD1kgmwWmgHmyFFvWX1WTjEV6s4YBFrhDEd1xzhm",
  "key19": "JPC5buUfdJHLcBfPbxPsDLVYWP18k2LhPLvrScDFd4GMvE1vX3jTKJfPhe5amoeDgurK5cYYh55vJviJ3P8fENF",
  "key20": "4Vyc65dyvmuHpdVrKGx8GqtvArgX97LJwfdJZCT7tQWTBECBrKYXKZJjpjsXoTVdQGny22gbTTwABGEKifkYfJVQ",
  "key21": "5BXbTUMXvWJepDw2Y5qYMHsKzYggJ2nYBb6dkQE2bVqx6VztzRD8FbBvunyfoxktG85ViQHWCa9FAUMJEDiJJYiu",
  "key22": "28eb6nb96hhsFyPECmt6597FUETYM3AEckvnJjWtZ1xrC8gri5rD36TDfGkcWDj7BNWB4J6MPNfPuUJnNcHpxf59",
  "key23": "DF3NgTv6jHQDkDB3xMFRAL5qWWRNT7iSbtmQ3PLWZHbGhBBgaAMbQ8Rtb72Kka5Qw6aRtxAFmzMutNSnZGaPS4h",
  "key24": "3iDi9Pcm2M5tBQ2EFaidsDZVXWJZzftAZ99GUEkgqWXxHgk3Ycq9vGCqFFN9bnqrT3R7RKNeRLtzJoqXazAJnab9",
  "key25": "ECaEPu8rBbBrtNQqukHwor5ioDRft461GxrSUWnYeAKCSKiKunnY9wpeGcei5unk6bbDwZP5RpT6DGV4mcavVEb",
  "key26": "3mQYrb1LtzLSC1az7mtfJQDot3AvEFhLRu5B8EkchfLTyZDfaV3GxqNTXMRcuyRKTid8EZZuzADXAFHUK76Lr9az",
  "key27": "4msPK2PtSYFQTRZdaTJiF5TeaKyvSPkt8moegygLbxkttEwj7zPZYC69MXxBGKhGpAs86ok7yrgEJ2BLzWvcfqoP",
  "key28": "YGJY1dRy84XT2M3wJ3rCUxBcNGWhtyGjAyp7PwVr39GJSHM8ko538UXXCxspxjj8GVBStnMnNsgqJvGiJbyuR4U",
  "key29": "3EjdmwH5kHAgkoPbXxVDajYgvB7VakVDMMsLVNcriwXLVh6T67YxMeRD63ZCdBbfxFzTyJk5g4jJGZ2wtyMZJtbm",
  "key30": "3bgHmRzLoPoJKkdU2QA15PKHyvhgX7BcEoZstKaRJN6jwjAxA7NSzqJmNN3CUTiSLbdQZVo3Z465ewN7gFZ8kWFf",
  "key31": "5J9txutiGNyPXP3SByEwQR3M3sxSdzbP9K3BcHHV721vXSvQhsx7GSPeUBveM3GkfDZNfxdsQ8VjZBPwJ3FPb6xS",
  "key32": "4diaRQFei4oAQCV6SWZL4pLSpirv2fMEm1fMj4oEJkieffh5yeNU9rf8RcnczzTFZqNvCCCjocDSH5WdNHMVySrm",
  "key33": "ecSQAqgbTH8GFwqNHCoEsfz7q6r9rV98AKLMsjkuTQTCFvksPFgy9vorFG1JZzA3Rbvdtp4g8oECWg1AKpdyBaX",
  "key34": "3QxEZdgXiSJ5DcgVwK9YpFho7rWWRaMraUC2c1XrnpUoLZBmippgMPjNyaNEnNvcpkuoo3rLaMeQ3i9PUAFiwFQj",
  "key35": "4tSUPjnqpbLca5i3KJCnGYDLiZDRQzePwZwPVwhsBevKBbzF6pqJAixMhENQoRJGoTgf5pAHUwL67WqAFZRA6BXu",
  "key36": "4KNVmB45iL8c1aKUQv8iUR5HA8M8h6e51MPmZ1VDPutBy7JZx35tLFbQFQ3WT56urGX77Fz661Xqro8fYZgDx2F7",
  "key37": "25nNScp9NFH8sJDzhfdo4jH44WTqdVTrnnCMxtwXhmAnsFY4BBDUgspTFXSwxsiaXAgiNzCGaWN5pbeyZoQ8WDth",
  "key38": "zuBbpjtiag2A8yjscbhtqQRbDzkjR2eUXsQUXEYqpXVnbE73zK8vAkCeznSYEkTrwWAZMJDiboAMJ8kuGzfkGXY",
  "key39": "3VkoPoxamxxAqtng1F783gokPf2MGVu8QQTQ8FDzDyfUVqMZEmwq7ZEe7KTTTmXwcr6C37qU7KMTbmXAMfQu87h9",
  "key40": "62MFxK6P68WJE53NxT3NjqMjizjvcWL28UJT4rqkhFAr1NvemcdBfXCFcCKZqXe2twmwUK9j7vPq5mUUVkH4cenc",
  "key41": "2e962FKnjZFG6LifrT1K5Ang8UbYzYjAB6pzAJ4U4ZF5FXqY2tN5c6Gw9cdPiGgkH2mcKyYhsdxNjetUsrcs7mrA",
  "key42": "2J7qKXpgMauQuY8WUw28F9bsEheAx1LPRtHCGZ8sd3gmpTb3E38jsHQZF6MpQFxQnu1LSE1kcXPM3WLJ7gtSMhGV",
  "key43": "2WmpfSHCpCa24MtAgxYnAQGn4MqqVCHvgGbXT542UvtzmbAYHMYSyMpPAV5gWaRb4AUEKBQ4ZSChPSeaDYXEAL8g"
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
