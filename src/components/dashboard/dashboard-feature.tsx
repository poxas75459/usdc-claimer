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
    "3ejDzBTaT3wL3BsbJWMNyKyAgsfNvqjkvJnUCo8FGX8ApkHSP84UnExJF9nRLvJDgE7YZecf2z273QC3o1tWnp7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K62HnKNXD1QU3sHm67RBqeSVqgvwCkZ6QNkrJSiDCzRKYwBbbpqGvvHhyWh2TdynEkskkiptKLaKeZ8nE5nMztZ",
  "key1": "2jCgH337ot1sULiQ5yXzyEEfXShZgTXQtSzh39Ey3Sf66Xr3RZdev26T2TKADX26cb5CFmBiqqBk8KcUFzUfJpjH",
  "key2": "2wosj2Co3noR6dFhm9v6Rz3uzCmqpv5YgrNq2GW1kJxTXzckipfD8mHrDXmX7GTz8f5JFcpzYuufgyvx4rpud1Cq",
  "key3": "29XdR3DDKQPYmgZYRdL38bz6HQFMnKUSdHhHQBPdyVzQBDHENaKZTGbgKTwghizuW9fsfK5jUx4PnmqcUHB1NnNC",
  "key4": "2zUqNQFAsW5sbuKYv7cbPKeTFQizEHZaLaCRHRZAmGJPMGUCojdCT2xLPaRh1A2vFyovMn2vZuMngybpvrrz5yUR",
  "key5": "4j9Fu6s9QSv9mCpMD6gqk8fjUpiAvcSNhP5jqQr9Zkuv41rSsCLHwVXqSG8mRXc31qkxBkXBHKNWDausq4m9juhg",
  "key6": "25Y6QXZHLAFADgpGwwyXGY1t4U1dvir15heD8dprJBr7eDxtT9StwCCyscfRbbWuyxbspT1LWaYbAocu9GKRKQv2",
  "key7": "5y6ZGi3HkK4mfzVZQHiwHqQ12u9nbBTmAN1B4UPp5BtaPY28Kbbt1bLzQXn4oUUkG2bcYR3bakAxSe5FUQfLTyhQ",
  "key8": "5juBUBPimntj1zFZy7Go77q88mHMCJfNHksV7rVCTvpwSEkDH31xXBo1r67YeG6srjBAe5aQFz1oEUTY1Kizaabi",
  "key9": "3heQvtrw5WXasdYJtKFSqvHdBcuLbZrVzZSkvYxYRq792HApYAVQbC1z6YoaLchhoRC5jVPvhJyBoJq5Z86jzCyD",
  "key10": "4SkZ2i5icyHQpeKV8BVzsZaUNDExWxj7ibth12sic8VBu53ykEhmW4ZjL63PywYx7hWrKrNT8nktNkLE7aKzHVHa",
  "key11": "2uAUqG6GjZ9ZYxrPvD3PWzxVoDYdRuBAdy8EG6KRawZ2EpRapsLvSiRtjNhkEXFUkjee7NdnvHr9pWM5tYjiJYi5",
  "key12": "cDLTinoigtEu5rnVVZe64gcyRnidXQ5K5Nbx1sEw1BgorsXgdBka9Z8GsmgetK2cK3NrQC41MrcibPjufqMtmxz",
  "key13": "b2dzFvsqtHJmKpFUgM15b1wFVyPH5nQbXZrDmSWs6QxyUvJNeSc493UrYNQfaHG5KLygtrxmif7x7DgWQnK85GZ",
  "key14": "3NjwSG2nEBGxnVe7EmASHU2fBzZ5bLkxRWT8txd5wQAwyufuiTvXcqiX2mZYsPUCAbfpD8Nm4J9mVSDU6wJRjDEY",
  "key15": "grEgMfetLHi3jR7Q9zuXnFjR6TcLiZmvtf1iPmBvrXE1P65q7Z1DsQBpbnGboHTtBstDFxYUNHCaUoboY9QTnsR",
  "key16": "Fc2UiNhDFuuhoh1samJgwEZkeHVgJF4iNiKxFw9BRUrgVi5GecHQGe8vCAFGrgsjJd4WsiRVc7KiCYf94tchgyX",
  "key17": "5MxSdCkAqjTgVBvHLoraVqQzabQzJ4oHhqbyw1LXDyGGR5hD3XWWeins3nH4Cv389Q697KNMipknDe84yKc4aqJX",
  "key18": "3AMrEmr6H7GT2JBYHfWanXvwu7po5en3hMBgf6gBueoFkMo9TxB8tQjVzZKbV4yYhJdo1us585jhtHucVLVyxFyG",
  "key19": "2pcXuijkJmJrLGe84nKaMUPazHHzBLdWicWDzpKnXZmC4aNtzC5sdBU46ApnYsdXhhh2TbKtViQNcLgzLKSnLhq1",
  "key20": "5ZjUbPooS2ZbCre8NeHbcFErf12jpGo4pJH7ejW3k6Ehsq5CPjsmiNdTZdx4fxkFyvtR9tJokqZexk2Ysmw9xjez",
  "key21": "4tB2HgfS7K3Yi8V1X8LfnvzaMBRKkSAR4VgUUAMV5p6ecMozhCjc5mzHQK2bxuVzkpaD3ZLZN3ditZPDx3Z3Lucu",
  "key22": "2yi6GshCfjhkaJy4PXBMQeQRTue8b4JLmm4yBGAHZcNEBodLcy8EBd42WFAZpCLed18FdoGqLAWvkqtx5Hq7uDEA",
  "key23": "6B1sjqDdSh9f5jBzoK6mjP8v23a7RZA8EhpDH647fBnh8gKyRaw9A1vRjvnzYhyjCCduj7asyKkiFReEzTHX638",
  "key24": "3J1UVamjkiE15iMYw77BGfuk2b65Pjkt8ota9n1TkMYx9geu4UnrMMB6bhur5QkmnFKKo5mj5Bpe5M6pPdvyx949",
  "key25": "2gdmRUFynKbEU4X3Zyt9oXdWVgXpjrgvLrcccWZj5ZMVfcptwDCWg6dziJT1zWZYpYregpNchxn4EwoD5BMTW95e"
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
