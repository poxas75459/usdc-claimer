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
    "3FydV58PAFgdzJsDLZDmUt1dstMbzyJdgpKH3JSpxWxovTZEmjyK5RdAyqzrbKPsnHbh8sYwznfnnuNJbvAt2PMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64GKmPf81PHw6Pu2kuZVtyxkpfLre2dV51rkQkty1rDf5R166XMszpvPvHxRj1QGbBa5dALS8dtzigLJMCtaMeHy",
  "key1": "5HDzXgGEvqws34DRimkEju1iJAXrJG8QCWPeNRSQMtaeosWqHm8xPXaq9qon8rRCfEGcjd8CCDqkepvmgdKAjL85",
  "key2": "23uSLJUmKf2iTnD8BKKtaUV5C9ym99RSj8NT29RpbtvwoLjdiTsLxkRFAqG97LxK2Jh5T85NJNcNdyMG8YyceJNK",
  "key3": "5HRqCf1DR784Ajzjhwxq4Bx25Caq2znJJrZLBMgGmFgfkw54K9wBYcq2tzLrQNR6RfrndxUkBuWF773EEc5extJv",
  "key4": "Gr6gyQSZwR7qsRcuYoyQQWjXi8nZWnc74c26rG2sQhiVJUf1xVHocDpu6TpF6kQAAF2zCofztynPkMpWM2XkWpc",
  "key5": "4kQSQar3XoGw5MMDWpRVM6tinZw1HYbWuHFKBcRceWo5Tnto2iZBYTpwVjbSSX2UEcxXfzGrG4hBMuRgi9aHDAsZ",
  "key6": "3ZJ1pGBqvvozh4hjJwLDKD9Re7mZhKLWYgbc69hPoyev3LYnWeMLoF8ALjPXkVXNqoSSkaSgshXX7uTVmPRAVbh5",
  "key7": "3j5j92DnucLgu2AJNiPVmrupUgencS7G4wGvqYiX9rxTUXSY4oK3odnMhgafjCsEvJnTiCfKuMWvLdNXt6z6NDzU",
  "key8": "2A5fUSUpWjbR4pdt4jAPRpwniqHhb2tpXJQoSxCHur7uMcXh7XJ5BqpjFGZjMTbmDbXe7xr4VScpdogVL8yaQGZo",
  "key9": "34j5q3giJKaCWRr8eyuhw5GgX5Fx5Z2fz99zbkEiEBQ9yJpxxWrcFR9Qs3pBB1wczK2CoUQpJv8iYEzaa6JmPdAt",
  "key10": "2tbE4kMtSw1jvw8Shtrqpy8tHwUq6wSR1cckefYVK8kbuWweTRBML7tFTGwf8yD8qK1QNrrnirDRhuDE3cR5QDQA",
  "key11": "Sq67fu5rQbmfzAKxtmNd8ujEL2J65gMzzviEof81Cz7kYtbq1u1XfphVKgQgeDDHmWof54CXqfUQJrRPxYdDexa",
  "key12": "2v2pziLA85veH4VFSedy17DcLn8f4kH3DkCBwaSizQXc2SwmKpur99ugkuBFCUv8oxR3yfeAcWwkyNtHmHXTVsXp",
  "key13": "31DytRNZV8yWPHC7cjGEVWHy8Cz5uq66thGe9icKcSe897gBnk9sFijwCoJbZdC8RgJJ9wALcSwepEbsGdwsckjW",
  "key14": "3cq9owpuuXJFTaXWi5oyxoR4qbuWSF2TEQKjW4jPWkPEBYXKGLJcFBN6qXjPaL7bApVqrUqtDmLhVYKL917zQbGa",
  "key15": "2FW1brA1p6yqF2YE4R4F368Lmbfe8GGK5Nsocfoo37axDih7BbNRdLNkCCgW7Tb3WiJVgvS8i5SKVef2NZDkSZ76",
  "key16": "4WiNHAtQdkJjmM7KfY2DhfiZGpaT9s9h5YFVHWECMFD7PnpByc5uMkgzN8Hhj3nVNTKHAWNaSz4Msy4JySnqxjDS",
  "key17": "4faUsnSdTDVjUrZFiRbGfqVVL6BJgkM9HJuraTM46g1CqqQjm3e877gxKDvnCvWKWdzWRduA5bW9dQfpo6eFfZ1R",
  "key18": "52H3ge4PNuBtsYzBUx6PHCbt7hvVVqz588krMysEGBrxqoXqUEd8YuZ91Nax8k9hdoSYWc5s7NS6yyNFDpAA1vdT",
  "key19": "2dTT3PH4WXZQAoVWvyZgtkNoYCkXpjbmckdck8Cxfa8j4dCdm7ihFwbUAevq8Fd5SUvNAd1TU811qhdi1mSXWhMK",
  "key20": "bpie32LT8ZVQsXA1CCuQHdSSyFd127TvygrtLbPMxEVvAsBEiZzVaCxcLKNwdx4xmK863TZhMcmDb7FJpuAkLTf",
  "key21": "25SMdes1dWzLTKBCQTxUPtDRjbrJGvSjf6jiEPRagi37k3spnVW9bDQTpXfmHqUa2GR3kZa2K31BiL42fwQySS4n",
  "key22": "3gu1PwTjTb6t5oN71Dc3qs13nrG3os2CMY6yaCium6LaoVWckdn5z1p7D1sGYexdXAEQrTiWtFMXgjUhs9FazPdC",
  "key23": "3Ep8rnxpavziwfb67e3FXswJGjzyRiajw9eAastZCHDW6v2hncQWcd7Rrzp6G6j2wphtyMCARe9V3huETvyhGgLp",
  "key24": "aHm5agFksj7pj2GnknKQDWK9hQQVjAYFtzhi9WgSN7WZcc8LdKStnBV4vmmLjFSZ6eWKHqbeeJ2VnrTsQGd3BZv",
  "key25": "YuMKbHg2ZKgc5r15Dbj7qemWiQ9Npm4sDJBAar9yyMAWmApoFGbQwoFrUaAz9C4JmCcd9xRDMk34htiWmyFkQoT",
  "key26": "4Y7c9Ua4tZCZ2Dcii56f7NvhtAZf6EnhFp5wfTie55h8JFrsEEg2gxnfU1uir71fSeAftCqf6KP1sxxydRztbQan",
  "key27": "5FPnZQcXkNUCM7cRcPAKPrLKPYcRnrTVVEh3aTTn9Fhp8anue8B7FZhCWkJFZPiwwRJKkQuGR8LnBpt9ynCFPFzk",
  "key28": "4mQThkoFqfCbDgRSXnZygicE9JR6fVh5KEAfWyXDrVw4Er3wbo6w6guWcsVLZC1oe4Xfo6JJG6q6datPYTNHn3Fo",
  "key29": "5BhwrMKsPi3ZcEhmGq63tsh84fCpsLdXLNsia7NCYnvF2wNj1UmTp2WCUpgrzNf6bFsWQEYuajXWmzHkcazJkPdX",
  "key30": "VBxuQFbsBDiT5k2QrUnqqgBAQZA9Ev3v2kzwxetn4TpGsJrNCbfgToVH2jUbwTCdNzSH7haYH1Yk45T37XtdpFJ",
  "key31": "367SXsQ9uSvTW37u3He8aSTqrsev4xyvehB9FG522e3cVDGj86wwrdPn2d2izMqZ2bavTLnTPVmBkQbwwVa4vBV",
  "key32": "48SzrPbCTpHDWHQcUuKkzeNeC7e5zumHhRGoKiLPNvccgUMhXgdNXqgQr6WQf2eDwen8nzMdMJnstULcM9C7YN3d",
  "key33": "3efUH9pNNua6N2uCW7W9Bw35eyF7jZKX38AYEU4yWqJttF4WMqrYBKx9UyYLzpVo3hLDS2qHdozJ1j9Z5NeZ9oQa",
  "key34": "U6tELwCF8CydEDuQCZ6LvEyY4Knax2yGc7Pns33zZtqewKwDC9pBmu7PUhmJMqVYyg9i4o6WPuo7aATLMdh3m7q",
  "key35": "4YQsVfQAVGqyjcJDch9BzXW73woh1Y5vcMCGSpnVthaEHs7UdVRiihfUjeWdff7mE9hqHAHBTFNfHJXcbnAUFmTQ",
  "key36": "4urk8uS5nFmXFMh4KeEDPUVmfdgwPBby1DYJL9u6pucqH4AoS28HfexCVWWEXKwYfo5eVhGbqPApnYqp2Jgcx9Jo",
  "key37": "36BBaDDQvSq8yu5gT6FBCGZrHCroktQbwhxLjkHs7kb9uLDTsn9uNjyTxNjk3UDfx9Nuaw4nh8h4ouxWZ9SCsJjD",
  "key38": "1q6KKQaL27PJVACyaRX4igAyXLgFcC6hqUUXr8TZg9sM4VrCsx9ak6nsRSDDFzdhu2ovTLMifRsbQWcSYbvctu4"
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
