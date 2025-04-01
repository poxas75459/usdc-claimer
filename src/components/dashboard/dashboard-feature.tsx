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
    "QQeP86JaejGzoT9vT22pofikVbjviGwJKgg4LrDaf8WJcJLzL7i6WhGNnHEdSZ8svBZLP9ipT31mkJDZkeZFUTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ms2rmtA61LYzp21o3upc6bxpt6QthXbwUBkA5Tsfg4Vxo4odDGDMXcjVTKiwfCkByEnQjtZr9tPhMcavdS5u2bw",
  "key1": "2cHafAn1Sd1qGwBWqtpzUoQPbK4ys9bix5ni9yJmVfUYrvbsVBZVda1CBycAgbbH4KpzgocYdPEufYzcq7HVqLs8",
  "key2": "4x2LrJFwCB14p2NgvghmxGLkvhdKH1BXTJFgVBCLweKkSnaQwUGEy5BAHGjHJDzyuLttQApWARkABjoU66jcKnL",
  "key3": "4yvmNtaAtxyTTLf8cVVzSZvVk8XA44THUAt2PhFSo8tJZu7ema1WqzE5JQm1ASz4Rgu86d4S2PYok8VndSLo1cR2",
  "key4": "5RtgFFxdQFGkwu6rRBGzkru4jBBwpfF4cSFSzaotPKyBevXUF97NQ8CQDGsb8K3Kv8ncHiXSzrX3ETU2GybZLsq8",
  "key5": "3p5J8fpD9uswK23tN7yhLuK7RHTgEuBrofgHcm47ZLKYDUcEfoHPkSUEYbZATmde5ArNfcVzBwcWtVNFaLH2AinM",
  "key6": "2vkMenvKdFxBvc3xX3VqHs5sicTLu38jHyFG9owEG3sMvE2nUcvbVqMNBawvqZZ2jgxDYJ793VrJq6z11AE4BfjG",
  "key7": "3CXbXftjPkUAb7Cwdr4LJMfH7jmgvgk8wvnsDeT4qFmWN95h8WErNTy2aCJpqruuXKAh5Fodjhxxaf98m6QAtdB3",
  "key8": "22VB73XYVuFkq5B1Qv6b2Bs1V2fgor81cLmy6mjLa48MdD7JWAj2g6BGoNYMmUxVU1vsXJbrJ5xSk7b1UqxM4DDQ",
  "key9": "4VATSdLxAybJMHqTqeyfDXepQ6QgufmQny2b3di74tBpmLNVfRkutYruivyjAHvgvizZhtyVGzfgi9bwq4GF5J6P",
  "key10": "4jxHyJsmGF7TDwVi73CQpcmBywGnbfsFRW4cVBEpD8EUkwhdiuTcz4V97G6Bs6UkEtjGb5XWc6wAyiyMnSmzmayD",
  "key11": "287BsBdU125MwnA5CT39Xzuhqy6j2kUDY4iKZuR8wrguXff3LewxNS1bgsRUZne3Uc8MwwaXNWTi4NbDJWVUrfYa",
  "key12": "5g5Hk5QDqRMt8MR6fKgQfdbd6uc5s2aiUFKJ4N7QBtb8ri435zJz44pPNypqZPFtK6ujaEFGjqqZH6PjtRuDYvoy",
  "key13": "2iExhMo5zjPVjRQzfAoaM2KUQUEchwHT2xWHfJ9wQnzQKSMXN1H3w5UdngysFCkHsJn4afW7bELpz3vqfJWPvjsA",
  "key14": "4gTrKAz9qfme7qptyjEEXVhifeDbnbT5xFPLF575vUaLAaiVKi4VRWFtfcVigGdouLUapCufpqzEcc9afR7PrmCx",
  "key15": "51wuxfTKbmDfmqGk7EhevcAyLBEucTk7QmS33fGVFKt6J9EfjoSrFdyr5ZexFGPmYUS8xZPAHsmnfsNHgiTuUGHt",
  "key16": "2Ab52kD4pbMNQwwVhbvDCp63GbWt8DJXq7yKCPjBjREdxAHa2NEpdNsWS8buHvXjXGFe2KQr9YVASmSbfK1veyEo",
  "key17": "37RZeZJaWSwUqxjUAxi84e5BmLdQ3DJr439ZZx1yucAsap3A7DxM9L9r3vaM6bcVVnL6jqtoRyQPmcEXHkLJiiRx",
  "key18": "22RZcUR5XsgYeNZ7rTAporGAauJ7WFEBnsgH9cPEU5AMg4PhvBtepBZaPe7szRDvsg2arURGKVmxJZWrzL6GX2iN",
  "key19": "66jGGMiWMW2CE6VbjxK7nQo9hQtkPeGPQFkPDUxV4jmnNsCp41JUvWQtb9vRhjibPvYmU59uN7ZCxPtPN6d8tQVB",
  "key20": "62TbcQfCzdop35mSdYdce43GZNdYYBzbDaVMBWkFLejdctcqwR5EZGkpeQz3dtxzxk3TdgGvm4hYceX52o8yNd23",
  "key21": "4C1LJFTkqtT5fAZ12A1875YEzQvxBx8N3iHeLKSiWCGHh8LcPQtgJ4HySkE5j73wiAcRTag1gAK4E2p2KtRLs7ne",
  "key22": "337Q1dzRNGHVAe9a5Avponn6HhDbARmyFkzdeASAk22cEE6qDjUq7dWh3XdrTE2BCyiq3hNH5xJ4Ga78uDkMX33j",
  "key23": "5Y1cPZnzRphkjmiT8ra4fq382FaaHSAYiwPPBPaGQoPqUZV7FG8oj4EvGzxv3ndJfGkzwqqSjAJjDrgX4q8dv6qj",
  "key24": "5qEeWd2f9evRgFp3pgtnGum52f6KHFdNTXQX4NFFhfZhxqQujQDxa2x7XqGeDywqMDdrQdXnaQAhPEgPeiTUMP4P",
  "key25": "4FYNomKLY9LKjz7EQBzF81DnZtoygXSuiAkr9ZMTb6Qzyma2gcV8wUKUHFo5XLf9pbCtWrThSjqLu7GFWKtAg1vs",
  "key26": "5GmrF52UcAFN6FmCGkMEDFes9uvBpNV47CMNP7beDSUhuNTmj4BP8VEPK7BcUbyHDuEbMmP2d1CUbWwXU1ypcTi8",
  "key27": "25t4W33zmgeL8xR8wEtxnbuhvf95XNnVcoQBPPjp6kiuhzQ3WXkbf1iL9dgeWGUvB5tKDC4cMPe37AEYMVbHEMqi",
  "key28": "AoHBrXN8jJFmWkzL7dHmXZ2aEG1iVXawdWWGuT3uT8dSaRtLbDuxHUbmsjkTf3subrhtuwxdw58jVETm4VMckrE",
  "key29": "5bUWNEbTM4on3rLJYt9h7xnAmoLASncaghrywJ5woEbmbpX7XUK2g958V9jCHQgFPy6LscriafVjV6B63Le6w2EE",
  "key30": "PhAEumXJ1F8xgxhjQVfiFsrj4ABXuLryH6jLhYkayQdRL1N6j55PD1vFDk1fSnkv4GE5Abr937PKakjCbAg4wQE",
  "key31": "rKXx8U3mnWioRzQn5hwWxiP241g3juKvQzqPAKxCNCF8vt2XpMfGtBePTfzQNpL1CEFx9FtxVaoAWf8U79oZVpF",
  "key32": "wA5LJ15oERf48TVzqNRp3wjQUJg3yQVk1ELuc2qnFRTxpunVr1Gv61uMRD9YBfHxKADYBSRQGpm5G1XYF3DY2GB",
  "key33": "5ysTj1HqKb6gWA5XiJxjMH5B9EDTJP6kUPJqyra3fZ6x3quzFpDKrrXgrdDNgcxGrwwnnnDtuJxPxixoDKsdiUeK",
  "key34": "2uKcgJWLZ8nKu1az2aPsfjiPKBvpZSBAimCE74YX8fqLvTDLMHaWTCUrotCcqe1VwsJCzGsB9tU1zsTfdEweto9F",
  "key35": "2FXujGhv8rS7hEeRF6ez266guewcorQ8VQhCEpw1CkCjVgmwCdUEzUFkq1YKnQmiucvmRFrmBrzFxuY8CxzCJfFq",
  "key36": "2tYawTUYmqz5YZpj48Du76QEW1agfTp6EZ1yb3F4yYuYs8FDGjTFMwXu8pdECqZuJQUJuRc8pdJgsgpKdYGfuW5v",
  "key37": "4VedMehVeihmqBipeLi5xZWk7sgeZhiAsXmnp7AfxYejUKASE4C945kWjMv2wE2eesHkv2pXE6KwS7q6nX8rxf6j",
  "key38": "514kdoirnHKs5Gdey2FcDPCr29FfJcYTydVzPRyRt5EssFgwChn9jk7vQWYF9DLDZEdKbhBjSGFYvdQpNqFejmsm",
  "key39": "3gHVqEF1t9WGdPRK6WKgs3rH81rkAqVjNU1PGYTw2BbtYyBwm1NcrNh69WFPAR62MdCHAG7kvRVyuYb7ULT2u4Xs",
  "key40": "5J9xdKriLicK46y9gN8aXfAxckrYyUpYF83vEkVfpkcVk2qknYQ63QUDKxGKtCYvTowu7u7R37yZBbGXVjXUF27i",
  "key41": "2hCxXg3aSoPCRGkY65RHVQcC9XFc9sSnDMyzTTvCqFXDuj81cwspjppYR7Uo82HEQpEbQkTMMdRHsTxHtR2dLjCA",
  "key42": "298eDECBAkByUvSLPJY8evAdz8wcn9CrgmGhZSnjJCKcMezLupaCAyF6n9GzVe4yc2Q6hC37559KxYi6g6cVQ9jn",
  "key43": "Z65cvBz34RpAvvc1MR7uUjEy9d7NbzdmW9TkUBBU7Mr97JiXQsyfK1sGTMDBZiZMaabYx84Ko1KjvKASSbqUwG2",
  "key44": "WVMhnTzsNYBKDZNiNzaNznwVr83uHvur9AyLFH3C25NZ8tZsmXEWtzkqf3E8jGdeV9cWyX16cQm4q2tmuyZJo5K"
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
