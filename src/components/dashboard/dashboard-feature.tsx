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
    "3eTdZJTbf3SJchDxmLkFj8wocaqwc5Efr6gpGTyQYMx5S5QfYC1mDq9ESXjskhtc6tYSdSDXQ8n5vMS5JCq5VXEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DxQQyY2px6uxicvSdgjAXabdGMAKuVXtSDPeNhYf38JsURxcmmHje2jER2z3hZ5Qj4Zq9YT4STmZ1PSfxGchHE7",
  "key1": "5x8Sa6rwpaFK93QRU8bHVyao8m1Ge4GsF8jbswMh4XrA4B2iXrVcLSYGu2MagxJgpNWjrVJxi1yWAKZVdHs7M1WN",
  "key2": "473FHBr9KbQ2mxfzEZpPhSKEJF7rUbjCohp4vMog3r2JBmSpVYBFcQUbMBNNnGzgHn6nf5Wc1kDvGZXBvuA23VHR",
  "key3": "5sXDJjYQAsjwcEWKwfqQpUZ9bQSXydKvyBLmw47PxFr2Pjm92dCZSEJnusTEBDY8F7Gfe7nL3JeYCsqhGsLATr26",
  "key4": "4aZeP4TQvdSejVPCzrVkDY1sjk4tFxNDwQFaoobi7eCajCXYG3aQ4WN8kme4AqEcUbbYPESf3rgJW5CJvdYohHkN",
  "key5": "5pm6ZnJbndBAQbaM2vXrc3Bat7yowqCXNti8nuD2U9tLS2gkn22A9GgixuVV5pi4kz7QmW5SDbHbtgSqMBRa9j46",
  "key6": "2gUa2HNk1WmzASeJuh8fYqUSYWy874MBD8VpTbJefx9FrVBksqNfRLv5PQ9JHmhEMoyTEVJBeUcAb3u6DVZD5QHV",
  "key7": "35fqyrPBMoxzeb2QL3ssf4371HfJWioxDCuGA42LsEiXxxb1GDaRZTz1GxYhjA6GfLvsKGc5SDRxqBEFHgcxpJ4S",
  "key8": "5b6BzDEo3wjsvKZdk3ogXfyCCGS1spyLyxPynf98EcaybtdoTjMxCWQu5nqJ8YavDbFE1zPuJ9sg4FsqYVzN3F3s",
  "key9": "2SmPuXto37DxpCcAcnsE8QjBY5WrrkxkpcoDxeNXJF56EEY3T4FfYDnZNy5c6yUCNS8j52zkkW1gesofLfqB4bUY",
  "key10": "Q4MANA8H9FfWLgofHo5omfVhyMrKd3ubCwqXWDThnGJypy3gAaEtgHtBgV7xC46shmC9rAhHqTvzYNJU2DxgkxY",
  "key11": "4emG3BEEVg3pWL5tfXiDZbAmYX8NRFNK2Xej2hx8BhTNmghWU2DAZFDpYnGr26XTcAefQALBEy9mVPoj8bQKBroW",
  "key12": "jBaurfomWAdu36ZhkBfdQDaxmJF5wkQreKSzJoLqTmR5EVfrac88KwMU4eh8Jrtthc7UetXcM4E8Y3jqqcHKAqL",
  "key13": "21son2hpUkFzMvn9YifLSfytxXuAx3thgv89ztvTruGzRnEyd1Do8mPnfykykhuzNcZAedc43GUrC6kDEcJPCF8j",
  "key14": "25c3r85JhceY2h7vxpemSeiNcESb5EdMCkLKx2rjUuvjDGvLv3deWasJ8XJqsxJiJvrH7wiG5NANKFed9aL7L8vc",
  "key15": "43hJiknSfJM9J3ohiHKKhocHqqa3DKgJkrGFhirhu2sLwChezkezUcT7kmq9CMUYd8Jri3M7xFSigQMafJ2HMf74",
  "key16": "FT1qxZWb63VcdpfgKPzdtkrJUgwWLVKRNhzkbxcTBYGwZzLrpt9XcQSftfrRic11zwTzyGouCV7E3hWfKo6fkgf",
  "key17": "DNDur9fTGnZtvvwqxJquq6i7fyTGsRFPDcnkPEyj9Jif4fyXCU5fDSvA2Ji72yyb52Twx4HmZYiaJDfab8dcCVM",
  "key18": "4Q4vWdXzBGKG2oQVkbzxR9MNexqcxqKhXWXemM1n8WiRkgfD2ZKNyCTLompEDugLZJi7uTCX8j1BKdFUM6nxNq6i",
  "key19": "2kZDuAHXSmVKA7aoagvfkL2HqHgNYhYKutmTgefT11wNDXp9eoLbgGMxfzAatR9oAc1zn7gvqbsQhnNevEJatNQ4",
  "key20": "5wGpXjnAyp9aN8SZH6UpiuNXuw6u9iZnmHNGrggpf515Gd3y5KdGdKwB7L6juHFYnrFgXAWgYrE3jHbyWbTdNBUk",
  "key21": "5AxUBWoe8QBnX1zamJNs7r8yg5yFtvmNcpS8Tb5v9N8eDNtXu492LiPvcbkbM2CgdVfTzg5FMtwa3XTpFi7T118g",
  "key22": "2STqHf68nV88oDz6XTwEsHeoSnrr3rzLUMiWm9GqsdZ4A7qQcnRnGVYbNBGwSnMjbik7SnDwzooQKqSUfPsPoUjR",
  "key23": "7dZkVZUPa5Sx2AN3NCaky9grFmhaFWAw3vzPJi4ZapxeDStk2E23kAbVL1FsEgcQ1xQg2mPJETtefNzfqb8aBn9",
  "key24": "3Y1BiC5Pi86z8XTeZinoNGZrNkzcN122p1KtBNAWDzSmZ5buBWjbhhtDMz3PzhhpNXjLZbFHuKAkR7x8zqG5CaMd",
  "key25": "4HZsmED4qN7fqgLASBM8fUPZFgG2nZ7dkbHjvLdQmNGU69AQtBJ9rvp2n5skLvsCq9uuTFa3xs8htxsERJCZLNQ9",
  "key26": "2yU9miPfvzPmxAEqqRZ3WzZkUurEQSWbUgmqQqsmNseYCAPdMDM3Sepcf29t9RAZZ5MTPqrZUYsePNA51qyqoDbT",
  "key27": "22JAon5wBdt5i2x1dTJFQduhrNDrVrSMiZupFv48ieEa1yVVkRQ692V7V6A9ymnUdURrFiFEj2N8oLRPadB94cYU"
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
