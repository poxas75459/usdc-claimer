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
    "4z6Cpwbi9EvYUZXrRvY8K2RPQB6koDFfWewrnAGox4NzbCN3jGikrauRvVoHqUqEc8SM13t5HKAKAqmp78e3aQ4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NiKPKsbui6r9wVAqepRRqCYWNZRUmtCchng7WqXxVYcxThPhPuZn99Ejcdgb1jYtQhPwxeogqH1tH2FmPirjBNo",
  "key1": "2zCpY76N7oktCFF2hiQUwnUcmZm7idwSbZ5kYiEQEUGeuKjTsVYuCXgvmh92oz9jgRCBTxzxU9fXRnTUQX31EqCk",
  "key2": "2MXJBAYV4uxTLH33CK1eaAubBauPdtnAdyxZExRwHj8H6NFMJDShMAuUkF4XKtxM4DWsF1UELyk7NAdZQLqcTE8",
  "key3": "3xBiQFZ8zGC9FVFoxaUDocbebe3eeTDUbXHRuwtRzNNGrWi49Tkn6qqR96jfHWQeaj5JRkQo1YRRN8PS2VZnKaVb",
  "key4": "5hwCtgKpNBLkQ5boDPqyX5eN2NhpTSD6RxQ5S6p6jXEUyY9vAQ9RTfaGigWbvnEzbvkVcUdW5ceHriPeEatcuCvq",
  "key5": "5UwNvk2P9Y6z1cqz5HWqySkCEGG4xTf2ZN4mVRdcFy6TQdoNeAgoUqEngNCvkj8GPxD3o33wRP4BVXjjamZTBnzy",
  "key6": "4pART77nVkBb7MXQ2cjz9H5L6LaT22Yox1VyGY5HyjKrdAQhtwy27zULLVRuUwtVyuBqc8LWa3DiB1fN1c8GoxMY",
  "key7": "2nhubKtTme3nFTfGoGbCLAeP2hoM7k2J35dgS3DuXFyKcJwyy6iSJqzkvb9WNmPRCA8ETwxd1NxjEe2stdBLqSyp",
  "key8": "J5fgYGQAfDTx14qoc3JKSXiCNWQR8G56KVpZjk7vVT764WTxyYKjfjPZZbDfCVe84YrXBDLGL2jEFgmFoffDwrc",
  "key9": "rjT5ACTHpefPJTufCUuvScEPGH5DaxXSgCSxurB8JTn6tWk3KcUUFmGNXxwvLLvQWM4EGKZaCfL5oduDhVbd1qu",
  "key10": "1A9ZE3nZKEpQXVQT1PcMEouqCJcxWFqf2SzFvh6mcRC6ZofZ9jBjGdR9o8WEM9NygGjsYdwjAdfrotWZDCy3os7",
  "key11": "2WsHgu3n9Rnv679BRHm7hSrfbQBHyQhiJwRnEHi5KpdQjGk5L6MAuDmqTLS8LjH4ReepgRVhbTs8kvtkKDBpmbxD",
  "key12": "4ydANzaonVZ5uLM6brQFfpfd2TxmGhAymY16VQbZZ8JrmUehagFDN4sEAWGCWM2w6wbkBVktQV29rybD5aT34hYt",
  "key13": "2chgfKVHpAwxLEyJpkr2fNjAsre7Hs3RH1zkVeST9eYtZa6qeJVP5PTvMjvQ4vaNG28FyDAupg9kAVrw51KzDP4w",
  "key14": "2MLmnW45jcJ3gHEe9iTxAZf9tRZBMnqbiTKgk65vqUe6bDxoMjP52cpQHjWFKQL3yiM6K4ByhuqrVGNrD7dCE2GG",
  "key15": "3MmndeLh2CXCKdFpzbLcbRQ4zhAPUTmEuMdQhoRCdBnse8xvYWGo8jUEMF16ab9oH4NB72iKTN8ZdZAbajKy5LRx",
  "key16": "5d2DNrKTMVBLBTf7JD2azDGkn8i1ftX7uJG22pZaXdVDom279yfddr4is4MoKqEqhnPBM5nzoTXy36Fadn2o6bsD",
  "key17": "5BxvBNBowm8LhszKbikKodbY78Nsp67qKHniWainNfBXAKM4MogSKuHrRw8fzf1BGzjiA6nCMmRqSZJibAZRNmuk",
  "key18": "4YHM6iv8r2rNd5s3xF3EbZMdBYJH4qv7iapsyXtzFfGrBcWgUJcy71ybX1k72N6yGfxsr3LUG7PtRTnRRFqJpJjW",
  "key19": "as7d7WuYZ1ijH5KcavHgLrMoYFsnJAxmMURcaAtGkxuhJQLshSXiTmNTDtrFJaLJWcRLYdSotbAzBi9i61invqh",
  "key20": "4ZvrY8cEXqwawYK3M3ZXaX8DHwBMFk9J7Fc9sH41ba89ZWqxn7fA7CfXorztqg9huFMv5Uc3uCWEsJKAax6NduSW",
  "key21": "DEdoTHdsKJdVKT5drNfZcxatgBw4kDdZupHezKm3YjNUL3iDFjkH7T8onPvVHnYNK87VvEFrBo3jjBvMpSs43ZQ",
  "key22": "31jDWpXrgcoyAesXZ1KQg9Tj7E1KtRAuX4ovpbPyMK4mCTAGPtWM8EwDauRuViftpTCxnTE4Jh9S2VkRhHBEtYoi",
  "key23": "Lzu8wv4ggrWtREsaqV9SYDmprMBpBg3NGErS3wUfqnasiWBnTtKafeYWD6Hbzj7QACinqocxnh14mHwb29Eqoza",
  "key24": "5LMU3PEZq2RbbLM6nLRka8o66NAsiMTudQMebMWg6KuYCpLj2KGeAxiCTmjnPUC3NKpDSTW14SUPdq4B4zCYoJet",
  "key25": "32hsiiEAHU4FFgsigTG6sKQ6xoMFdYkXEt5cMBpQTah5CXruYovwUDRhZ7N44Wr2rjpoBrsjw73DuNYEb3j3xvJP",
  "key26": "9JPxjTPaZrDTeyMzGwWUAT4CdcPbSSkTHVgo6PE58EWU3hjUwPs8Y7k1wQ9jgv3PP5aoGzRkLZX1xmc9HNpiJvb",
  "key27": "4Y3mXJTnsPaJJMRr1QX2HWLW78dMhqmU7CjxDtU1zAEt8t2MB9Vpt9dreBarJhK47Fdp3rgGSRoHBrRbDTDNgKHG",
  "key28": "2voM6XFcGpWoKZoBthTCUFdMVecmTQVSTXnd21eJc2s5omHU1FqVrpoyQBiZDcZCh2QEzSDrR7DtE6jDzDwvRCz6",
  "key29": "3uVky2PzKfpbu97SaLwXz1fMzmzZysBzLwgCyi1QGxRJcNThupUm7R8UJvRvk32GnRW5Ww9zoEz1Biz1W5Ssh9cM"
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
