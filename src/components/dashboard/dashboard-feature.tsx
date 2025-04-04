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
    "4Bxx5GR4u5P9cgViMroT3dJPjzj2VgPxFuFK5vqDyNnqz9Qb16RpggwQA6A7PnQbuU1Qmpe1uAAQSYB1vxGdfQvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "whZgrU22c2xpFaPixT5rMVMXjWfgoZUfCfj6FPfcSbs4V2qauWhnmEgAN32Qf7qKhrGioHxMBodbuoXpCRaEWSa",
  "key1": "66y5LYEJXJgzEhRTM6sdwk89oGxK9Byh426a9ccP8H9Tp5fvL8ju3u5RmuSvjGpnAYNhzTYotnGTvi7nQP6Xosxt",
  "key2": "4Re2UBVBYzsPfnsgYCo4tGakXHFMKBdEPRdStM1jM9PDF7ev4qopU1gKrVYwNHieqHYHtS2xcLkAUuRPELeEyGbQ",
  "key3": "24CbAY7wppu8msRyoB1VFJBc1CD9EoMUEVfdzpNrqaRRnYpiWZnXevWypURTJcyQVLeWY4jFoPi6aemSx2bQ2xaW",
  "key4": "4xSw8ksrcbhzjY4G9YyeXBfBhJ2sRAWpFjbSfNcVEnDUjfDKBggSvodfkTLyiskBMtcu4rT8DUQJ39ioe1g2hd2s",
  "key5": "Rimx5Tt5MvWkYUyWzMUkvfLhWFHMG2HbRTZSB9WrjS5krm2r861VeVjvSDkh2Kv7gQJFGn6TQMdAS9CchgsfPTp",
  "key6": "5bh8fLZRZ1fse8qse2iBMj1Eh3WC4FUJzHvKjAgzry6vaNbS5xkgTsbwG5U7DSAvjfnq8Lny8uyrF5kULBtE7Auj",
  "key7": "22kTyLwFJm2HEZXaQKZSyaU477MmcjTRtY2JLxGFYDAMuSnEw4dUYRKyPtKpdtcCUeGNq1bwiqLs58B2b2vYTpaN",
  "key8": "3YJUDC7Jf8CMRT7gyL7pJ7P1xNYVWd7XuofgGpnnxVydtLovWmoRBq624GbkowZRiHmdSwmfUQ6aWEcd1uWtZqjA",
  "key9": "5bvcCkm3KvAzJ8oFUWQZH78gdYeJQinV7oCnLNTSgB7DnfFzbzuKrJotYDQQB5eB82s4ZNbUsAR4qfdsBk94UMni",
  "key10": "5p3dctLVobdwbUDBEqKwchMSQD9ktjyJYBwXoexrLJyRNBLX2DQJGmGRDFSQb3QwaZ9C26pYgqs8yZa7ArsDgaSR",
  "key11": "mxXckA5hshfivDv9qSeGhJJM6XdMGGffSHXvexd4MF61ooqDPBpvf6vrCJnGsmLmtszKSWGGrMPXqYETXPV3sG1",
  "key12": "5xhRwR1yfo23vtfx7NtRwodV49wxFv9ZDuiWYqrCifZaUtW6oTdM7o9UBTQmpi4g6X3twxGfRo9VP9cSB7rJ3rWa",
  "key13": "5YpurCFNwinTTxoay7xmFSagDKCYeDXKKuA7zi3gUe2SWjGr3QGiKzXwnngz9nGsJihfY7oaoegz5EfFf3nbsENX",
  "key14": "29cgwjQUZYTVhUFp4Z96tGBbKXfiJVAoMm612GVPwVibPaXirR7KBfHQLdAyG4pBwqbmCLYem3LJuazH2ycPx4hJ",
  "key15": "2cavXZvPGu4iETpARFnq9jpssq2RDdRQWFfEsePdEBrW5o2k7r4Efw2GZd5XCPNkN8W9QENZbScR7dXuNzDacZKZ",
  "key16": "4Mfd9MCaj76hDSBTgB4zSaUZrmeXLEFgdtXS2ZXXa7dfoT9XFaBmpidLVYztJmSLn3i777sQwvCndeJymP9NTFjH",
  "key17": "5VCe5HQCDyFWJwdwgJ7zR8TQHRkFr1CfRtJPfw1sCFFXVqR4k2dsycTXHWj1UnR11z855pp1oY7xySraycAJRewD",
  "key18": "2Avh5PLefajkKFEejTdP7EjJGWb3zWQWnRWia8eQZWAGhxwXVyAzAQwyy6Ni3JV7x1EnoWjnFfmfrfY9TXshHG5A",
  "key19": "2Cjy87x9J35pJNmrYigsKbWTPt7FwrWY4SWdeQa2qYhsSGoBwtqHKjsBkoUMjQEPNUZfMBczARwVv7N3Pq68MZoK",
  "key20": "2o96a4H5B6MjEMwvdBxdmktzJgKSz7zUFQa5YaeZBBHAYZAF4w2hrbg6ENb1jG95A2KDGAnMC5vz9mc1KjLYTWf7",
  "key21": "5qdGPau8RNC33hh6SyD2Usf7LV4xkJ3rxBd1joyFD5iJnKWyzFKfDktniGtFM2ts1ZYnPFGzC3PXiNoveQ7mHcxo",
  "key22": "299EwY1UJbEQ5TU3i7cCD9cVqLi4d4NJV6vU8YwnRgxqkUKa7EErT97i53LdUb4vNyjVmJChCmUJ46eKaC1XE5vC",
  "key23": "r1fnmTHJ4iw7RN5wQmcamuiRySJARRf2hAuBuf1GaoXewdnt7FKSxH69Ea9G8uFNA3qbP2GERY3wzNAf91JMSux",
  "key24": "3oDTS9BAw5sQdfmGq4muntdta8cQSK2iwhwXhKJwcLooGfxuQKZ8Py99Ne7biLFKmf4kgf3AvVLC3b44Pt4kiS6f",
  "key25": "3iBFEUo2DRvbHT3WwdMjRgKYcig3yUxaJL96u9Nmz2MX2DHnR68SuzUiH1aymovvRCS7FZkZXnPXKkjsKSZAzxLq"
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
