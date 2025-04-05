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
    "3pgkMve29kJ9xLLBYq6EsqbmoWq48JHsDfSAA7eBdm88u1Sj9DXWknLkkuDu9uyhYHqUpdoLxHco8kpnLZqZMm14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MMXhkViB5BZztvVsW8z3WJj5jksyNtYKX5E4hVPDLzFYaB9t61EfhqMCtD2Y4JpRF3DoAy4UFE8m64wUqawviji",
  "key1": "4fzr8gFuD8EtLqHnctLxfxu8iRW7Pi6qWKG2JvZH8pTxLvHnfDi4s343P2hDc2VjfEfNugCNiizYn6iHuupH6KvJ",
  "key2": "5mZbNtf6zdB15B9euAVDTfJwuKyc3yak93gGRu9EVqiwPo7DcvF2r14Tba7YCYWLsA64wrQRD2T9b1d74N3sZzZN",
  "key3": "5nKnBXBsEiqkvuQSdi1qKdP9Mmj1abmJ3Zc57Sjyj7gMHybQPjk4UAs1JcQhJbNfT7JutwAYzWo1N3LhVEuzVMYc",
  "key4": "63yRRXtpqPx3cLZdZMZhHjg2WBdLEiufj1NWgwRyBohxf27XCChGq99dwup7zHdRLcR1egG8FqZKHwQtZ9hCQeAQ",
  "key5": "2HBvY8i2Q9X4Qc465y9wKU9ZDADvL9P2AkLSgefupLhe5H29AVCiXjr36Q9mrmbV8TWXA1tb4h2MHMPrJ3mUJRJT",
  "key6": "4wtX7nvys1ssjz1QLR6KjvuabRWGzWZZCMK8HKBsyKU7E1yPJav3BQzvrTHN48gi4HSKokBHHcrzjo2ftq4dW1t5",
  "key7": "4w6q2nKtffxzFDaXin7eau8TZ7THSfPn9Y6ewcwjE6GF6j6dUbe82eK9mwnVgbSpw3PrqvAU9TJtTwrvbgUErTxA",
  "key8": "2bDUueqoMKP1wM1bDuH98cQwcWeuF9WPytueiiuSFgPVgtAeMf7EYrWXkf3Pv96mLZ4EQFpusQ6KWdqt8cuVVct",
  "key9": "uZ7oVdAsj3ie8PSaZQjQBH3zbrctgTbDrdu8SYNBQAkpwvZp77d2fGLrpTqchrBNKuJ3CmcS4TUCiw7WdHpkd2Z",
  "key10": "51M1mt8J1yDiwGDzPrzJuvQb4XxcvN4uWizRV3B6ov6EbxxTY5zY78ZqJu3GVA1tTd3MTiEqKQojtAH3zFb5kqM5",
  "key11": "4f617KNCpPTKAqwAb2AHJ3TraEvUYhFeCsEWJyR2qvNH1SSC6bGLsRywTRu5ofWr9gk3ZRm2wNC87ycDRHvMN5R7",
  "key12": "GHPy33bBHfyM2CAZkz46iTLxBY5k5DCTBaN4aAwggJEAwGDKjSCHL5S7NPMar5nTzN6AyrDWLKWXQVza7B2ia2W",
  "key13": "5hPxcGBHmuxL5x5PDv4WRAjnAjP33oMrAhv4W7y3C47ChRTYEdMeoc2EMocH5nxPHdNPjPN18PzamsZEPeM19H1e",
  "key14": "4Qp5THNYZo9d6sjPNtiCcdbZpu64rSVWZXhTvqnjd2PykYbdrrxQQen3FbxbKyRxkBdfiWjU1ZERfupHqEwsVT9w",
  "key15": "2xzUkiYgv8QgU3nduS43RotedBxKM8nXGTgD8DeEtqpFSoV26woY4VyiCNvaL5ETcnJtpH3pNmrKhvDX9qsUETDk",
  "key16": "5ZUoP22ZMV6D9o1PU68QyDxNPTvv4TLUYDbZdi5sA9wKfJkrQo8QDgoNUE3E9SfHj4wWHEw3xzxEYfuCJPhtYGSj",
  "key17": "5PAgXU3Hk2P8VygygA6shPfLqNcMTx8wQdVevVfeDZf9Ym9UGmbZjhQrU19gbuNM3er3dVfixxfdZyb96cniTGq1",
  "key18": "2BUHw7JeaPSVazS7rvpa119euHdND13q5ebN39MXgwxn3uAiNqxpQ6nyCzb35Mqo9JJQF6mmHKkzVZoc76tJQwCH",
  "key19": "BCEGfk3cs9dmLr6jBJk8L4Dknp8AYjRWKT3naKhctDJckSQE2aP1jMoWvYHwtDN7DiTCqdC4q5pUb5sChz3Rig6",
  "key20": "5HtaGsAFivd2SjVtGgLWsrXfSrrF96cgJx1GPLRrCpq8WjD8pUfVToBD9Hqiqmesg7jpyqf59wFaBfbbsUgF87FQ",
  "key21": "aNmjMj5sV9JDPu7txTFHTYQ4ah3grbToYDNZU4EcqYPyG62vSVV5gZp7DGDmr5pKKpcNKYzufWznqbPspBEBUtH",
  "key22": "3dHXfuCyD7JXYYQAAwADoJNqAiSXv1oZyNuwwTzawyBN2UFiezowVLUZLK8ZaRLpMPJ4ibmB7Drok2BCzsJ91doo",
  "key23": "5zP1wU3T98ptAVECYRRdKCW32KUzmmaGMDQufpS8jmZXFkaVqmF9BtQ5nqyZLnXNXBSBB5m9mLzzhGMQg6jUqSTi",
  "key24": "3wbvh13s8rshPjS1SHmVsTa12imxc42TwAaRQzHZTvovEV2kgiQDX6gjpbvUViDCAmyTopj9sXYrHNEu7Hr23vML",
  "key25": "3JCzb6xvSdnPo8PuWPFg2QrkJ7LesL4PBQYdYbV6XYajDbBnK9N27xzdJocUdJH5H2RJiZbmadzuqYcrfkC88cg1",
  "key26": "2qpNnpR4cNZiok58bPSsb7Nd1UrxDFEEo7EMJ55P5E1f79EdeNsS9f4WY2PetA3usybvYqUZNQYo3szcdzzyKEZd",
  "key27": "WLPMfCjVTc8T68SPGmpnPhsC3xkPojMYdjSwjXb1Jzh8BV2DzRwZPQoPNMvZYiMv5VE1QTt4m2VvzeczGTMmrXU",
  "key28": "3QkQRRbmh6HeBhW2GwqQASFJJznve7o7kBgQRJy5xuyb8GoegeM7P2NkFLs8GYjcuJCKTxQ5nRuRJg5j6dijHE8y",
  "key29": "2hr5q2zdTznzgYtrBBajrhX1tWLJdCyGPJgjfGF2XToERHKvuaqYN8XdpPeCX24sFe1wRG3cn1exrza5TRE7pCk1",
  "key30": "2icDnyxFQrHtwjWKHuvLRkbw49QMJt8dz2tgo8u8f238QUEHz849XwsguTdVMyZ8YfgmKh1iVvzkg26BZ7cCmo95",
  "key31": "3vajuAfTBVMw6fyzGFAGKwyVY2J3sHvkn7gqPRiHHvYEWXPKTYRXUaiig9G18iQndtfg48m5VQrDD2j4kH6iMCvm",
  "key32": "bjLXUHLcZzRYHkN29uuiCBVvyUz6t8xeh6uyYiTWUocYWDj8dF5jHJDQgti7kjDFWybkroBhXFuWonwioSu2kWo",
  "key33": "iAHZ4nKiWYTMBXQFNTBtmTWsQ6pTkUQpfQ3xJuv4AXK1w2Nxfhen86ivwZeCk1AVqZNdjzYHBzD64eAD8BKx1xG",
  "key34": "3DXQknKDKuTkxWJjb7KW6W6xx2L5TRCuurCVaeyBcLxSse7iA2zAyhXcXoPbzpnecVtksNDVgvkVXsZ3zTKJqenD",
  "key35": "2kiJU1uWwfXnmFEYEpE7fiWmM9Q6h5cexV3etUgU12skJ1kDq8kRFw8qezzk6zZV7mD3y5ipU3ZckcuNYJmZCp7X"
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
