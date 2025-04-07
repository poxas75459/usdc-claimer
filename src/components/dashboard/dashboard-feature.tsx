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
    "3i8ZCqRMGQ2uMsZ8CCc2yqccCdsq8UCXEmfCHkTkqyXXYDgenN1nj9AWjBJkhyxcH5uFKZJw6qwV6kcmu6KKaZuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HK3yMFP6jbUpFbbfex7HGAZPtq7VoSecjLNGuVkHeaeDwaxvd4UAEApogXK4pQaHheZL5MNETFcpeMx7o2QFkLV",
  "key1": "2rY5yzu1ZY7oaK5m5X6brvZKi6FQYowvMy8LxdqeMRpqJfwXRQ2QHJhPLPDzsAGNUJU7adHWCs5d4SSBQQaHeFH3",
  "key2": "5FxyMzAs6d9UvTAnySkFQMhR7vYi5Ku91PpF1NJ3FKt7y7w5vfL1LmomTUExPeRUzLLAfjRjdNaGFsAnczs1eUdk",
  "key3": "2wBbFXidZTTngLfWj9h6szgbfpQub6azH9Wgs8oijrtZPvuKKrc4Q5ccvfR9tgsqosVFwo7S5voY2siPYwrsbHQN",
  "key4": "5BAuaDhv7WJQyYK9LMrD4aTf5BfQtqDJCwA3VGjxXgjV4C21tXodkjSjoa31ySqSz19vqzscPQimhSjzmJfdNmqf",
  "key5": "2H7ZJchMo8GQVfzmuuFyTUbQwdkVvhc3kXy4mDutKDJsiKA6d1s7b1rQEDU77aQj8xefnhq4CfrPoBBnUsiD9QRR",
  "key6": "3u1cdpGZ6RzcCUPEDwBHNpKnFWDtqm73JekXEToxZa2Cb5KAFniS1yXh33zzCmHtR3xpm64cNwuAknfcf1cwEDuK",
  "key7": "5xuh9VqSbPFUXQr8XBTkgYzGLNCmqFVTx9nHoNv3DeyS2fJonjGsaptaBma2BCYhaGnD3rw9n1NU9ogWkw4Kdt9C",
  "key8": "EDFHVbpntYdBm1pCmANY3D793gHB4pZSHvPMYAdYBToQEthyabwZ2xmep2jdXvZhVThd2GMHRCiiiKaD4wA1YmS",
  "key9": "4hbkVPw8vjrXePohRDoHkKi8D3ef3znqGaRKpQcGJ1D5sHWcedCbng11HcMLACFEfjbdVpkCP8wreRHDrDgHviPM",
  "key10": "4HT5ZUSs4FtnWuW5qwJQGGo6sr2dRqn2hKp99HecRxHJsYj9Mkf9ABvrJiK8iYbhcM9SWW8x6wzfkS7GoTJX4ySq",
  "key11": "5k5niPToWJyx2vpaAcgepgZe4PfHhB7RwYqohe12Ht8o2cJu6ixMcUdDEKGgz2WazEFdr5PEUrjvZqqWTiDs91Wf",
  "key12": "2yAqvtqSananKbkykTzTrMoKsYRyR3XtwgGJRcAVd2q4EuSUHUs7REXWy7ihn7dKX3EHegCRN8N1WPCH2QgH9ZZr",
  "key13": "TECBvB2ZPTaBAJDWQcpSDhSNEJEaDXdNzpbDSqVNG9fQwvqSfPKzfAYsXAvpj1hSM9aAMmW5Zu9BAtEaC4L3ULk",
  "key14": "3SboNYAosGyz8DLnjshwoGBBmkKsGwQYCWHDjSPczqj6egfv9kqRz4k6bRxsihY9RZzmC6ZQ7zNkY4QRvwfJXpF8",
  "key15": "3GmPgWNQmgTFz3HX7ouAPMjyVE9vgrQkSg2e7c8LdgCJL219LFxAM1d3PqCHFYKJAbm12ftHp46x5NoUQYYXAvwA",
  "key16": "3wTb9HrDX7a3XQNt9hLDnMQyqZpL9D25K5158iL9Tj31cWKJmfweemV71gcpctdE1K4ihuJ6Ucyoe4NNQjPdjFUE",
  "key17": "eUnN9rbXFXPFowKCcDt7zBy1STf6bWW2B9ugeDDjUV7mzFUTbQx9JEhzQNhNyJuU7EfmFLCNLYYgfcYSeMUrXpM",
  "key18": "3yWnAigMrBtGyCBdhK5UHewxBwo1vsJsw49QRLUfMnBg7vTYakYWRJDBVA14D3piaCBCH7Aqe2nMZCMvX4wYWbN9",
  "key19": "64yMw5SicXgUWoyyF2DKScgeUNh9r1nE6BZ7PmpWzeYUVEN1Z3rLtrb4f72VUtK7PEjeJhG6EAfvsY18sAh5LBau",
  "key20": "22oKnxjcpkJyvC4Zw95vYKoCUiLu9LJiLvh5hY6wqVdssCAfiLgZySyGW34XDwRMG7yKz144Jcri8NcmgzV6atgj",
  "key21": "5T8xPD5HxAub6xkKT1uyGimHVaXBcd1ViZnep2jKRcwt4NuUxtR2qRmFQ5A9Becdr89kURY6DB1uHcR3gJzw5hwV",
  "key22": "2UQSpJSxSzb67mRLeamGrVBXKjL9N1cPTovRkBCqraNcFUJiScJ4HEMc7AX42KHYiMVCz4t9hy9PEXRyDCVHaLYA",
  "key23": "4BvsdsRp5YWNokUgM27aFUyEojYRNWfdiM7MQPUYWnmvdA6W9nbT7tYyMikYs6f6sBP4K7kWJQmza1q9an54yaws",
  "key24": "q9FQxp16DPSMcauDmXz7eqhDrzfFcz3bQEwnQM1gxC3ExqqKJWnfqAn4Nt32pteyNmeSQSBj2j7cUF3Smu9W6eH",
  "key25": "uS2Sfbo99KcNh6nw5TTt7B25atME6Y3hdgEjWWdVzurgF4F879AYkEkmmDTLngp9ruKY33MCHxF5KgXLxfsaexJ",
  "key26": "3dhq22cULEc5keSEhZvXn14samG9X5xK9C12reXNFNV6f1EC1CiqgPkVVLsL35eLMRLeQ9mmayUErzYMShcsgmxH"
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
