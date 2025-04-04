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
    "cQF1oKHJsXv7TBsSSNffwSa5XambuLL7YZstcJGwxDnoBSVnwTEVaufYmQGkV4UYcaMty5CXRSbjxTKi4jHr3Nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dg8WJQd61zwmux4xcZRf53tWDBVteb1ocvG5HYDtjHExASzZ7Q7fJj4mtfFmZVVJ2b9qgvceLWqPJsqkMfSapsp",
  "key1": "2az8ifw6cdVzNcnq3YV88h6fUzMoVFg9sZBmfJj43pYyRTZJQaKZ5vZ3t75xZG7D3oRo6xzWVMRZCD8PUna1hpJj",
  "key2": "21SJZVULx1nRV41KMbktuHLH3tHsDNm9Ktgy6MByU8GBsKhMF4eQuq7nBvfNaHoYYgnpum7uQH8mMDgTuBCLiqwB",
  "key3": "uFsnx2D3f3zwivrrjT9UQjjSK3ngGwER7ziZ7iDN6fTyK9ym11hKQFPLeQFvWF3heLwKQn6k2RTQqP6aLMusjGo",
  "key4": "5cX9s7ZPjJEAmuJL4rSUq8W9sh8VyGgv4oEuiBz1xXn9iK4w427rw8GKAWXofbw3LV3xzbdbfaPULpA1F7KCwGw8",
  "key5": "43AorLgyT9varRxAwcGSe9DZskDj82QdMkRDHwi3nCJS7WKcdFQJSVEXcBqcczYXztAd9MLbJw3TkGpgJ7roN2vS",
  "key6": "4Dg8HP63AQHhcLtLciDvDgQHsVWPT5oVfrKcpgj6Hu1MppBEcrsLifrsxuGmh8bSEyfiShNWZcp8PyHNkJrxRqq4",
  "key7": "5sf7fMFoJX5aLSmvqEy8ZNMuShubzLyu4rTLwhBy7MoxeJ9ohg1yA5vtss4xCN7jiA2vPECs4E5g2T4pg4799qyp",
  "key8": "63opXtiws9Xx3zZQVjtxN6FZPwkkCQTLRZyCfHFuEByYD1fnApST4qvQWhywNoFxMcrQ7qEFGfF57uSKtfutiXmV",
  "key9": "LfZAQdQSZ22HCRQtXnJ82nnkVUMJZ2mJLnsWioi15pzkLvoytAZegnPYc1m7RoVvJAGvyBhy6jJp1NLADiBRyg6",
  "key10": "3c1RkB5BbcvD3XjVrGV6jQRzDFMpW74UKVWzZXsB2xhHEPcFpW1v3oX2zpdtc4ip19oFNGhVp7k8JHs8YoLvSS7H",
  "key11": "3GbhwB6LiwX8KWM2L1y5cTtJiZQYXokS4LjbJoYJm2KASGxGm6HbDJeNJo54J52Khoun95U18AjgdstXeMBbewWw",
  "key12": "4MhYrczTizdMFeqkW1Vkt51tt27qz8RuX7MBk7KBqucSKLvBvuUfKDD68YcE4QxnL8azTTSrmAwxVPzQiV5MaUNc",
  "key13": "2RCNwAAitfdbCevSNecPPYr6kFfQDDBbW6vary9C6haD6JB2Wwuq6ZsUiN1UqU1NL96oVvnum2TQEVoXi8ePaAmW",
  "key14": "2tDjzvAbcXKnmEVyqFuCSTgYwM8oqvLwQT2noVBFT6Ypbhq2RHCYj9P56xgytQ4qqBdz5yeeYRKc1vt9gDZFXM9m",
  "key15": "45ucXeAQNezSaFRthALGGvrMrHeYsoFu3UKirTnDrdZG4Zv63LZTTj9Bq9AcGmmy3LzEdPYSV8d7x2gCsRM3u4Z6",
  "key16": "4saCDZCdE2uvEL3x1jvM4hfqied4fpHrmy15gppPg8x4cYGMezjDCshSo7HMNYKV4cnMAvWxSMdMEzpAVSbUmXSg",
  "key17": "RXF2oz4bTzLaTYf2gufQvyVvWr7YPs5WutQvHeKUgndms9vreX4FJKNud3v2UWq8h5k1ZcrUTCgLkD3FHzMmEuo",
  "key18": "4J58r1LYTb1B3DmRAHbSdhBaZc4GWeuWGFZkXwE8ptKo98xPXgXzJa312ziJ8jPWsdpZVFQ9qq8MJMqkC36CoRBU",
  "key19": "4HJUgTyge14FLa4yArYVmkUSkWPTjzD2sXErQSXXApZuHSpSStZRs7ZPsEEv8NDSbTWzPE4iY7pmwSD24UugRJuy",
  "key20": "5aNThCpvnA9bo1iD8HYKqb1TRnGwRdSAWTqGMPP8VNVgoFbG3tMRK6JHdYD79Hr8rhpDhGPs1BVDSbG6K7C8ensg",
  "key21": "3h5MvmUhH6pCXsyCE9dkgW4CPhcfmpfZ9gjSQDs8T2DS5izCCPXTkLYv14WgxW36zJaLLXedB8wxAJ38jpx5eZLF",
  "key22": "3HvqKzGhgUdsCy5fxNmLAVEyRoU5ArX7SqdE8f1Hpb48XfRjQagThvWj7TqEgMQFN29mnzPn7iyxaDabsu9m4rx3",
  "key23": "33T84AYJud5rHfbq6Zsf2Ee51N6zLjB3X9VuvcmcuuBhhTWZadLBuSXLdhYAb13tZX9apx4JgzszxpvTSGNsGuyN",
  "key24": "7EQWCy2Pp9iT5CfdSjYLVUeNCs7Tq6jSxydPed8ATUpzfcMMaUzeSYDDKzQHZ1XJJv1NcJgdC5kWimZEskG1iZ2",
  "key25": "4DqD91ZZgjxbGtvmEwVSmWHqv48AuTHmLvptbZT9Ypw36dSjWY2Vu9fLPkLe8sftGVKVbTcYGHYzLfSihcMLW1ig",
  "key26": "3JhRrz8KP3ReYj3RS6XjeVX9dkrDxjFLqK96dCr31R5v1zRAP1xTMrVh6zNVbeKsKWim4xqSBkKLXqa9td79tuEN"
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
