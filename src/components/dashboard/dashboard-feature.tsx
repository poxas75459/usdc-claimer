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
    "5GQEKGKea4jkuW2GNVD4KFPyGVJLoh8qqsr2uEgyQJy4mmFyEH8pgN2NNUtRYn9y9vwGbVinSsPWVQ9jhhRAf6Mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CxXcHD6EG5onKnqmv8gsrnA77vRJYW6qQ7P58csYRqH5p9DzpT4uAYbFL3U2H9hKbsMb7zXHhtzugJq1YX38nx8",
  "key1": "M96gfv7ob3K7atDU8MQPXfRusK4TMZ4WEWT8P4XxdvaSZkkzY5cJwyiGxzwKuU91Te8HcoAcoqopQeXJ64DERYT",
  "key2": "2HdZ9H48waouVPEMEhHNBjVjWgdbLy7QDT3iJjvDybeTYfJb9o6XrPYFMp9Z4gdB7SaPznp9ZEvh5ULemrLdGA3u",
  "key3": "26zwJEkrp2UTtEdwjBVba2HvhfzUGfHAdN199QNdm427Uccvaw9fpHBxo5FJGQ1PxAFf3S5xEw6ABHCS9ihqq2jJ",
  "key4": "3jasQMLPSivjZFmBJqWSYoYmMcfcx5mYMtFJPYgQFyPsLtSCGhuJdMytZcBKe1Ej7VyDKpSTGVaeuyGDSA46yVg6",
  "key5": "3RPJ76YD1syn5p3yLJ9fAyq7K8Gka8ifKrzPMJcrEmVFHeKDzHxvxbgnXUoLimyk7pEMpDpvAgRCzZXrX5rLE3m2",
  "key6": "2v49CifxU5BKDv7zhMoet7Xq77p5yDwdFan9Zx89wQZD13dsf23L5dLAyLsJ44KhRiG5F55Ax9km5pDN57ggStMh",
  "key7": "LkjCezJ3X52MVL4GZV2UjJQbHn83RTmBAwjzY5fEP7YWn6Jzne9XHZLYsvJ5AzR6VAVpuPh8EVgwha3amunmmnp",
  "key8": "5iKukjDWPi9AJSdHpYyzYVqnTqPq26L74GUBy2KTh7pCx4H7vMUHnZH7yecLuPHvAmE3KMP1VfcsV5a9z4Nb2A6a",
  "key9": "2P5gMQKA8NLuzTKLCdnKdh1z7VEFsjUNKi7ST44dkYUZPBqwF3bKqvqEUCbZ1hcF4epA3uKs2UmwPsDHesp3jwYB",
  "key10": "66CEhVoxuLCjzQtEQC57tW69nV6DxDxZfXiVuPhSFbE2msaUVHgEKpwZCuMGAxQXZaJws8nGeQ4zZYLHz9TpPJcT",
  "key11": "332Wj2FSRuSUaVu4pPEtPK11vmqPqt1daZ3uwF5NTQrR2WKf4DtEXDuYjQTv3JHknuXPQLrJZ2cZGLhBm4tGNMDo",
  "key12": "3YgzreztTdXR56sF2SKRmLXJEGmxgDGViKz3BSSquHvJkkRMtzdSqx8ucdVWVevsR8bN6nZF5Xr7wCqG9rXpcT6V",
  "key13": "37a5K48p9LQSWDV4WCuTvF1jRDA2Xfap52YCvBrVuXPXbMj4YErAbiWSaT1k14j62SRSNC3cPkC2w6o6gx57joRF",
  "key14": "4AYVeZspLaiyyQqK1zb7YVrkmTEWLrPJMBGXEuoNdgAL8tuy3eFMQhSEHSH2iSmgP9W58y5hFg7US1P2jc8S5hku",
  "key15": "3bzekEGd4CorB2PQUXR6kPnxxNn2UHUFB1CJFAbovKW26gbC2XZBN9yUVTo7gYrBdMmeaZNDJE28Ya8oSvFVnEC2",
  "key16": "4aNMtbbz83hVuM3TZ4CKxJkVCe7AvPCAt8Q4MY93VXs6cEzseS75hxzvnxcR5RjSjDLbshyywQgy1j8HjmJBAqiw",
  "key17": "3NaWrEFTEVVDzSGn1KaAwdhkYGCsqtHWL1bnCxP3i922McoDETXZ7LzHQimHqa1zWGCE2PvxwebsFZsopwEfSCso",
  "key18": "4UC8nsD7vvsUnH1tcPMsLsP8vsC5jSxAxtwB3fq2jLgHa2B9WVZw2rE2wEk7Gu78euVhjS8z9L2ziPEkGWTLPkgh",
  "key19": "RcqBnYkmSnf6znHoxC21wVPCyajcKL5eX7bj929MdAgHovjas99a71RapvNogU6yABQpGmJ44iMcNyZ4p7wfSxU",
  "key20": "3wtYz6Tn8MnTULtp6jTBKxo9TJxsofqVi9L37A6knBYRFoUD6nUQBJnGeYG96DLzA1tYXB9TDHcDvvKYRae3LbDp",
  "key21": "mgahVidqcMgoYmQNrUt8iDsAFEc3uAhhwzCM72y5zCjkgYMqYyAtfSi1JuK6pb1qxZzF4PLUN8WbpwT3m8fPipu",
  "key22": "2EXY6CwctcXbXg56fFB8Layv6xpVmNHHpXEuik8ePkb8L2m3KKiMmrnLSZwor5wLMzen7ANs7iaSU1FnfG6RrJox",
  "key23": "3JXcZx2vdFaakULo4SSrLKYAw2PcL3dcgwNAvfzrbJBckDEdY9GkCp9WnDdwQVHq2qVZue6dUwYCq6XBBSdCd5Sq",
  "key24": "4GMqKygfeqb6qcwYHmJqxNw7YvJuqDv8Du1E5p9PUAZ2VoT5GuTmts6n6BaQunA4wfGjLm6FuNt8qadcCpkdVTx5",
  "key25": "2W3FA5FC49SXoCJ2pZ5fKDmCfRyrUhtq5XzsJ82d1kxMpF9EwUdb1DBZ5UYpqtV52fNV1yGNi3sE8s3ar1P1Xtwi"
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
