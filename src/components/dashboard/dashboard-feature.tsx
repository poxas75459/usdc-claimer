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
    "5pPwMxGGDRFyQUNZ8pEzAHQfESimBLDuHYjyXgsMoRHs35jirPL9Q6tuP7NubPUHnxcn86TAXst1zYX2WQateNsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48nG8haXP4oijqmPXJ3dvtxGJJT4mrjCxM5nrdMogCZmncz6N1rW83vxiVf6uFryvpt9Kv1YRPL3WPSceb5ZhW3E",
  "key1": "3Ns6y6UAXa1xrW3hLZ4wgEkLSHSYPDSju5ibBqAjRF4cByJZSAendEfMBMWm5yVo7BDfQXdKGvxoVrWekfy285LW",
  "key2": "2ae1zxuu4EYXyNsahTGxnrhnZSzNENuvFEckQaRexipiptKFrbiLTZkaQfzWCzW2tqZaQeGQby5i2j21BMxC9wVL",
  "key3": "2ZUT1hMDgTNWVKW16MDrCALKtg7uYpVcvvunTTi3rEgW71hiuBTDFCk2nYEsT9fRWhUpTWiHqjYFBQ55fbeC5DNK",
  "key4": "24Ep3mKsF5iFSD6Kfo4xDbuwUssgpbqBHpsdijkWwf8UszbeSzdkSFXXy9eurwVm9kihboH7cfHYgHgjD9xjSHi8",
  "key5": "47wD1SvELYCAAsHs6zGEwKwATDTSpkhFF2dJZqPdq23mtMkxEWUSmwp5pCokqfxR1PbYbVuNj5fgTooHe1uqFfAx",
  "key6": "2AX8Fr6L5bg3tSSSLURRXftYAdbdtStMMEfenAhBxsn9uxGAw2UhzSKq9virzBQMjgMnr48G4t78DK6wzMtgCsx8",
  "key7": "3rZrnwqpvDfcCsBF7pUu9RWLpTVLzohK6d7XAH3U5HNW9LacqNrNjJSZa4FXuioGkCuRFAzZLK4JuUCg3M3eCQXL",
  "key8": "5VYpW2WzXdYAoBq6dEXP5pYSDixg8UeoasduwXXZSgV3xH5p15fCNtn6eLqZxHie4eAnNz2cKJn9Gkh84JYNg9HW",
  "key9": "5uUShBmMUf5QiLjPg3TZpb3EBp5jYD5H2bznHityrUyEDZrwvfwXrtowZF3tPGLTcprapwtCNRT7k3PnGMVQP2t7",
  "key10": "4d2VYW4n8DUHxUGDjNDJeQfwZkiEm9SQ9kY8ho629J9JcsKGPehyzrQyjPjrnvnHd8Rj7DQU9m4mC5JS1BCvwLAY",
  "key11": "tkfZ83rLLgcWwyadkfueugA4T69nqzLRMhNnMXSwdeVzwYRsiFrGrk2JmDXnZqJZuzkTTAEx3fT5wkyY8P5b3Sc",
  "key12": "2wnVxzsUGsUfTrjeZx5ieisio8V5J52eNVtGTHGyjf87iDyMPxTLQAQZRv99fNJsiFtkeSRcxqUPdRk8DgGFjefk",
  "key13": "iswcoNrP7MnHY6g51arR4J2bT6Vd1S3uN5mH7Va27TwnQLEPKkxnJyDHB9SQ4qDFSNtDL16xBvseFqPGQKLeyh7",
  "key14": "3CeahAzHDdiYBS1UHmD8mooEWADQ9rmkmvzmp4NM4LBfPfRjvDxvc8STUfeDisunB6hmqiHxqe5VZscjwojZ1MQa",
  "key15": "4QF9gvNKwwANjTX7QiekmqpXqograxsB8YnHxQ4w9vcoHMek9QvuJF8uWECKyJRWKHgMivJvsuQKoYTwun1t1Eyw",
  "key16": "4DzPVs8h1D6eHMeMjqDgu889ZJkEb5X7vBpvgvP8z3Ds5ZBcTSh37sTHQNjz59axEJR6N2VpRdgKR6mBeSxSrDRz",
  "key17": "4dXoTdxvkbwCvwugwe7xLwpt7QJJYqRpbxQqEYwfcFzcbwsfRm1c5idA6Wc8dWEGDvF4GkSJxwLKnGm88zFQfSyd",
  "key18": "2tmZLh551V2cccZC5nXskMFcFkXZvup4XLFWQ5EtTgNaXE1iivMTZ45z4KU32wxbHEPmKFFYCBmsFCgsgJSSxCJH",
  "key19": "29sARrRGFu4jMUukXawLCPk92V3gcYtkHZ5aFnsEeyoZSaxnWuBWfucMLJsaTgyLNGb8gPaAxaLuSCYTJDviKPvb",
  "key20": "3Ub88wBsLwyfAZRETFzUvYrkFwJH6CQyg2oVpCPn4rVAT5h84cSyb7QXfNHnze6ztiP47ckXEZRcnqyHtpwq42mo",
  "key21": "47is6qeFZ44Txop9jMCtgDbxVs36EhAS83r17VMAZfFXutKewfaViuyMAi9YjwPQMXmpxsfarmyywmUmfCZ7RLa8",
  "key22": "3XTFjRNjWgHvB4ap2UQkVmzTZmsn6rhDqAeSmFZLSeG71wtnG4GPMQ34mUDLA3Qh26uFvQd1A616KVp9zDp1EiTM",
  "key23": "ysK41RwTeZQgp8BrXTLDQkxXT44uAXatqpaLWUwTaYbhb7WTjRpW59sjPyeY9iGp86hGvgDsZh7XehpJJeo7qjB",
  "key24": "5PavFmB8kv47jzyJTiRvaXfJVstdto8URjx9dy34Vx5GaUhPHNf1Y3TXc8RgQfYxDV1M3BatQbmn75kfudTVfad1"
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
