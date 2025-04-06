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
    "3e4BAMSYrmwZEREXe5wmxwjZCw3YoEm7TPMZ8vcEVx9S3KgdCqgvt5cjNNKh3Dcc5DqsH4sLnBK18RtAGBPi44km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L5gnfHzYcJdH8MAFN8dst9ty9Ph2rzQbGFCChKht8ryH6ckTGav5f2t3Mi3tEW2m8r1asHLj9aDEXc4nXsWaXZM",
  "key1": "3UcYXq5P6b4MC5PRMUAqFyR6fAKckSx1emjzJzNedj3ASMEMeS7wFvJHeyde9QMTEBR6wcfgv3VNS8LqMHgaMBMa",
  "key2": "2e2Poe3xDjhQLxCofAZvPFQ3fTyWbdDwRDpxcGbuKnSQa8a1iqaAuv2cv2ieatyNJh2Ugy1E1bvf2EMyBTp9HjXH",
  "key3": "2TCyHepJfZragHYwTvBsooWqjTYS3dH8ZcJyrLDCJj4coDuCbNvyVQFjuMBW7XzTtvZMCUXR5fjx55cWjisrCd9C",
  "key4": "2zhnMqaobA9Y3wt5Uio7EgNrFNouepkEaZ4ZQJBH719vFGeTEaF18ZF6aeB6DgLujK4Q7ohPQMKAvPiKxFMx1Ybj",
  "key5": "PiRs5hGpwYxBdV9HYt8qAG44z1TgcjuFzEpDdWanFnmtX8rwFiTzs2hTs3a6b47BhVrWc5bxBnuPnUKDmfUVQw8",
  "key6": "2iNXkGrnAuW8fuucfX5eCcFYAoUY6yJz48xXcPtvmg2HtLvqyhko7roZWaQaqJJoHGZV53eME972zqzhQM5ULdEN",
  "key7": "2GnSaonut75WSwPXWqxQ9a9dNTWPkyE28mMU4xUzVA1UMYQdYP6jUhij58W67k3o41SC9MJSc5SybvZKwGt2MhDQ",
  "key8": "3vwq4QPK9Mg5vzYH5GQyPs4ohdw3wdwa7CnSq3pWMA42fwKXgkwxCrqzhqkL2aCBqfdphmFn3kVkZSw5DWYfZDBX",
  "key9": "3k55kJAaTtk3vX2EfXhPrsBPG7D7c2ZgPNAaDJ6dbEjWfKh9Y6ZZ4AAARcmarSkY6neMPAVRvjf8ePRSKKSgvQMV",
  "key10": "2yxe7Mb15T78P152TdRLCSSuc5TcYgYnQiD6HnWTMSQT1YwfRjNCJarw7K9h5rPgELKjHehMF8Sx9xLUEpPPXid7",
  "key11": "4YC4cznTiVr4fyUjn7zPmtSo3w18KTNceRptnizX5VQWHcyMMTHaCxn5JhCLkUo5thsHJQLFSmYkTnUqrrm98Afi",
  "key12": "5VJHo2dRycvWzMYToJBQqGRDdfoRpKPWzn28RivNRdBx7FZ6Qj9JAir8aLMknBvBeLfGuHDGG1tNoFFuuRSmDj97",
  "key13": "4AUtrDkhUgQhHvrViD2GVpbs3hzH1TagsgoVuAMPrhGdBcea8vC8hyLLzR7ZdkLpKc9gfW3whQGa9ZjoUUtoSu1u",
  "key14": "pbqmbv1fpaAViWktgnNL1R5yFrSRb7v6SFMRYBncwVCUd3JwWfACzkryyFWaFDPq2Pchj17eB8QptfrzRK7gSjc",
  "key15": "bs29eZdMjLXWHmCTbQ4vm4P8ca1HvoDByinJEQzuChXo1JYnUL1rF2A93T2Lh9CbL1MJvTSXpc9GjHYofQTBM6z",
  "key16": "2qPbnXVJyRM2XKLk7DD11w3zdMgYgqAgg56zvrYxtN6XLjBuXGkj9LXZKocHY31ojRX4EaU8qZd6BMfVMyyoUyzZ",
  "key17": "4QGa3XgfU1scowecp2LmC1JkAKWoAAhNDDjqW7dfSspQci2ygvTLr3NWX2usmXJe1vk5mr1SfN93CmVkFoZtAUrY",
  "key18": "3G4yCii3bneBCFqy69JhHawmDVxs8454hw4tYrrvsqTo3QaDjgmcQ8dF3oayYXB3tKG1w1wCXVCN9aUd22bFxZuY",
  "key19": "4B3jf7SFNxFGcppGNLhjaaQRv7kKtUTXoftFjjXV6xA3vsKFZQQCD2whwrMQdzQJCUqBBYq1pbWUzLZMxAnS27i5",
  "key20": "iNuhKYZZzggSE9MqfM16nBGvMt1e1Pz3hNjuMbTUryDSL3C3VPeSM5QvHewS6Piq2X9RXfBKH5HKy4iCtmKvrVP",
  "key21": "5aNcKqKZoKWMVB8W2ZexfXUxFTuGw8k3p8g3pvoXszvbdpjY5T6524HifH5zNd9yoeQZdgFAcJguvwwcaqAq4Jzq",
  "key22": "2uVfLh655oa3fwgtKqJZDWhUcVt4a9e9uNXunzzC7NtGz6TApT3o62EKK9woNbmgQAKJCS6HExTKvtsbd3QYih47",
  "key23": "NhPFDPfRiB7z91Lz1aNcEggV49qgbYpwpfLM27AmTYZU3LiLkBFPVzryUiEfxUaASsCaEWmEN68kvL3CJoUpsv9",
  "key24": "3U2uzJrVqZzmshmT3A4wvRos6yG9VaPEDvGxqmEACnMG3GnMYTu8itJX3SKuqTxqt8ukhn45bkftKGSKRJ4EprXK",
  "key25": "2pk7tE9gxgdLfwc4GfaZx6tSvJhMmp9dMV6svVyg174vGQVwkwboS6to19PabrfsjSUKtKmAFdHGKSmF8zH4QPY8",
  "key26": "5Dprkfor32AMn5aipJQ9gh77R5BHpjScufu2zq6EM5oVKUibTe36QRWRXWR9a6cfxxGNJzva1Pgte4YTepHJkjGT",
  "key27": "5kXSP99F4NGJgtkzGfwoTLbcgQdGeDJSe8aqi3PNRBmfGXdLgbrDMdUSqkTAcdBnR9Xt5RGQtEJV8wbBYuSkZfM4",
  "key28": "4F2AFwLeB9AShfKXTZBJbruE6FDZHd36QmMusSAAoXJkzRgjTbGsmr79Uz1dxrdEqG7vU15FLyZ76JQEp2HuJJuT"
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
