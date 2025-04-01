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
    "5e17KPf4KxXqUXK3rq7AgDZ6QGN74uvX88KBXEJDYUgk4wxKPWV5Pdz1iSjPj8N7FNYHsRqhgW8heAQ6QnfdDroc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oKAbA75et5BAsueLwgfUZ9wRXoScAVM6XFBvKqqVsKxn7U6JB3jaPp6zaAfyep5YTFy9yi5LEwLxhqPWfMLab8s",
  "key1": "4ukHPQoApdu6C5tBCsfJZRpzUgRBYeneKnttjSUu9Fm84rgzYAUnfcKW49CEkvKqH6NrtiugbeyMjkTnzCzMiZsV",
  "key2": "2oT9X8hjvXWKJCufCYgizEAEvcvkaY8awLRGNJK7vMRrYbAVDFP72ahpQQtbm7jEug2miVBsvE9Dmp1SbxtSMeAL",
  "key3": "SKWUoKNb1qLGBTVWHtwmuRbtYLnbS17RAX8bWFZMZxeM8t3U3BCoBCaLq2Pd3noy83cQPXLpajA6jBcq5bcQPjV",
  "key4": "5fNwEuzcJGZQsJ7ZMQaxEoD3J4NMyL6NGeTSwZQpat2q1aMXeontyMT5DtVLfKzf1BipGELjm5GpNixgAcAqK7WT",
  "key5": "4tRmhcySBq4TbUF6UcDnQSBL8aQUxrqv8tXokyU6JXbkWtQ6XDHSrmVTnxLUqYz47HQ42wL6vUFaDFmKDsccyvD",
  "key6": "245uA3UpCFQyQ2y7sy6MXcaFNL5eWbSJRWkEQyvWKM5G4nRok7NBc6FNHj61us9Cuu3P9yeW51VMuwJYYT2YVMdk",
  "key7": "2xXHyeoVu2mTE1DEcjS7CRRKazxgJSmnpPXkNMoRhqUw8c7zE8zGZ1o4XqvYG3GyKiAAHWPoerYC5LQwKHCnGSzn",
  "key8": "5EdNJMLeyFHNLRk6XXjghkS5ffPJYFkKT2tN5KtcoqGav8xkgnGWdP2gwXgdtBvvkAZvd1A6SiW1N65En4RBt8sk",
  "key9": "Y92EAioQLJWRJZ722HU9eWrF6btuX7G2t5CeqSYJuSGXPnLTb2hSeBTuVU67dzkTwoSJPhpFseVpWsSePwYCKVW",
  "key10": "3awpbCPkzyTycbEneSjRheh6KwBriYStKjUqXi4ZZVX7u66K3AFmSwiVxjqEsXuxdqhabeoT8ufQ3Hx1n7eR8fmo",
  "key11": "5F7FMmJXZgsLjCPnCpjMuvbQ6Pzgpg2zDd7qw8tettyHir5idirr397mMYwsBF2iaQx4VS5hKWcqaEJ9zxKN8A73",
  "key12": "ZbGLqiHRxHV79t4HYXqR6T3xG8WCQX9QZYuyGsWNJESH1CpN16atAaN84W178W2pntaK2fFhQdHRM2eswqu6mtg",
  "key13": "36DzWvrLhT5inaDWaNfUFovZp7d7AyZCMKmYLZaavXoorgJjC2VxiH2eV8UHmM1W5HtpvqiTpEsSH8Xgvg8Egg43",
  "key14": "51afLmc1VDj86yWuoB7YPFYFUsc3pvdMfHp5bTB9Cv4RXKmkgDTJEuLHdhBfLnRA4pFJ3wXz8MySbuTiFrLqfYou",
  "key15": "KQrMU8YnHTsYBeaR21oUXbqjA4LZcdqLWnBRrxpd9MEANfGk4J3HNkn1EeRTjQ5b8k6Gt7DyZ6NzWS2tbDFSyLE",
  "key16": "UYwkjFW6hWHFQryZ4kViH8eNbHefAKbecuPyzuVhwXioTmpZ5uia6qSxSqFSqHi4gr37ath4isHN596quanmazD",
  "key17": "5wmaas7JqJ4yH9UeXp8c3TZJ5rfeTdgnAWkCgrJfEEHxVrjUapaBUa3uSEJvSmngj5MwW6qBCyPeBuu3UWGVozTT",
  "key18": "mcFwLvq4jFZtbBp13Lzomatk485wehWNbNrqA1m98H73PYK7P7oP8cbz1GdDf5NtRBB4aydQ44jiEuL7DntRNbZ",
  "key19": "2Ea4d7rSKZ6Cx1JpwEYHfxSbQPbLUFPWu3sQ3MbyKgR5LAxx4ro75kL8i1S9CK6TCrGiU1madjg829ktF2cyixP1",
  "key20": "2yMyHQ3XWxy7rBszhvpXY2LK8jMZ4pTv5tGSjePykuMdFgNpRjjdhmoiUjLrgDYNwvZkxj17vSgCmQBtc8wWLukA",
  "key21": "34RAFfhKwq3RLTNtsJcWka9NT7ZXi8FJTe1S9HFHrt51RhXiS2QLanwfVSRNsuhDc9MPHt7DLYCPqheJno6cy4Gh",
  "key22": "2fMpK6RHpTErtZ4KXWNC5A1U5rWS1SjiHiB3JkAh2r7UEbqrKiJ7CFFyZX8xUDV2Rjn1WY8uB2LxVgSXFkHoRYbX",
  "key23": "4u58ikMrzLKB65fnHYGFaCf33NeVbqKXqXfU4mCxfRRQJUuiSZJyEXoVKbnXCw1NZXm9aNjscBkXabKgAheeB5KE",
  "key24": "BKgR9DRjxVVqZs6DWUDwznZEstLQ1F378b1gwxbJXopHwcGebAUjTfEND75VzC9n4hAW3vL8NHsH7F7njC25ukX",
  "key25": "2612zF4MN3Tim5AktvtJ88xXnKGM8k7NsE9BmgJ2HAAcxB1NPXJJYKepHQrW5gwgXaASKsehjnLbwPvbZPvvX2Li"
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
