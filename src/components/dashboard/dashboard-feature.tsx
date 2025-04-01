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
    "5SV9H2hbAAWXD43jk6dWXsNadgcGtQPnidFZ4MNji3d5aiXzz5NBDQhahdPxxAqQhBRsJKKBP9A7JCzNPbe9uNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AGb3ZTda6brGW59YJ8SgCD1mNACyHZtc763P5v3MatnZMjcU79pYoUdHzsfxk3CzvG5nt4bngpTyZKHS3frHMA4",
  "key1": "3WpDAaux3ZZER6cvezotUzBt8KcqcUrEBgUXgMm8GXovv2P3Di8Nk1JBCWXeViUzXvhcEeA9diHdum55cPC7e3Sd",
  "key2": "3EsyxxVUsMJKZu9dguhWgKPU5gYjW6Vq1WECDAtJFrQYVE89rQ3EENYXvDM8RXN9NUao1L1gP1cE3pmV17gmgWdP",
  "key3": "btARTo7VxVg9ANj4Kud6KDQyFgWKsXciWmd6A7X5bPfsNLnrtKMniSFUTfaxKZydRMn1ywrGK5UP5f4cdkNq49G",
  "key4": "5HHe14iR5zfiNhR9rS2hokzTZKtfi4rpTwACtFNqDfAy7nZTbqy1KeYbtm6VcaZTvGoTUzZ33PyQxuvSS1KRau5s",
  "key5": "29Sz6m3vgx8jmBY33HhvP5Ssn5roKvVGs72zw2gz8VLpt3v3UrFZfjKa3EJusgkXj2dMTFNsvQH1uspPi4be4YE3",
  "key6": "37JRHjwoRpEPBSBGKs4ace8krkh7QKgV98Cn5mcBGvFVkQ8JJo4toHK8mvSpAY4bkCA89DTTWrHC4CAz4y4n5o3D",
  "key7": "2GUkVNY7q7cE1uhxMBaovQPeQ25SuPMzG3n3RZVb7Zr6dNXWkJemqHFGRvUyNy8k8qnhzCSdq25cQDfveV6Gfj9U",
  "key8": "359y8GbKr1th9qFyyDRp5rrpraDxgcEdrJi1akPpUS7N2o53K33jNvLfM5WHHrFnoNFTeaXBLLb19BiUzqaV51p6",
  "key9": "4c2378MTc8vjDkhjJ7vSiTEAoYHLpbWaSPjeh1GrtA6qhM36uvMFa8hFLxDn7xACtKj5SyC7zU62jF3xbmGTqyjR",
  "key10": "66iWePx6iUuUZTeJfEEKRdNie9KSoVBkFj57TYnQkoup8Qmtr9dqtXpNxhef5iwKXFhAKcPLsBqBg3Zr8RN7yC88",
  "key11": "51rDTsvzKKEAnZUsaGMSNGJXSW21Jwy9J9zpB6g5zmxpXc9mBhdDa9Ln9YALYARvL2KqoYqJDYVcrSj6iENBrTkn",
  "key12": "4S1x7wnEBjUA5cEn8KurVVSUwCH672pNVbixsaCDRhop2UYs2vNR9HgC2XqYEwaNvNtbgjJ9cBqvkA5T8bUr4QHA",
  "key13": "4K8wi43N4envwqtQKYU6zoMMYxLRLVH9zrW8BpkzzvrU1PWr8GrTVxVJSLzDTQ124UGj9WTBkQQCjefctPztoRhQ",
  "key14": "38wdZ8JqQo3fJkFMZuJvijxvENwuWRm7VtpTSW9qw82dU1hko643b7bcAtMDky4kF9hBnjkXdJLkczp5tX2rGGDp",
  "key15": "5iEYpe21VygTTomAG8tyPY885tMNQsfBwEBDh2dz2kt4iKA3pGeNhTu8gpTaDUnmJdAgAhuxgEz1Hj4frab3jedB",
  "key16": "2GGpujL1DSaZBiXGCBVwkktqztnUG372uvZC6UeqRrBfmEjBcAguX25vu4FKvd9fkgnWausD5Bq7LeRyujycWNgi",
  "key17": "4hoSxv3edueYV9FR3VA5NQ2HXjDTf6TPuWPPhe4MLdX29ymwRQythMhVFbp88A4sYhiHUJ6KiY6gcB6VVkL9C1R",
  "key18": "5fLVPDVugBcxbj3cMfQiFUoQUkfWb6zGSksFpSvqgA81q4LgKetmtzZMG96h68STQFzxmx8KCAtQfJE24bFaLCvA",
  "key19": "q9bgjJUXYgr93RxWUuzKspUkaLX9McLoKaSHiAy46uAYEWu8zRL3vTZePqPL4gosNrA7aXXCm9RKRnCoLFcRpjU",
  "key20": "3sfifVXPXzRA6AoVyLnZEyNh5pfgHA7azwKsLbZZcK8cTJFKC4hcHzboN34ukwv4gq1oPgVXmHXnwFNposeXnYHA",
  "key21": "26nUZWuasMivT3qyej8QCj6dVXSSZhKhX6Eianzf1AfiRoFbwyjYfZiyS4GUKe9aDFB4dcm7qMeZEsKNBRcrLRRR",
  "key22": "3Jx86HU9H42mhNxJRRs9CDn9DiCcBdLiA7SMtwXq5ymPsMME3nG9TQhS75VJJyuB7CA2fRtDybBsaUqBTr6KyZBN",
  "key23": "3aP9kDtmUiGWhzHxQCJpmomVafqdNTcF7eBDJhBC1JU4HeWNfkeuFadCWYn7hPQnMVrJVuhPAKW6WWj4wbmYwF9J",
  "key24": "y4RxFirNNbBrmbxKiFJG4fH5iLGWZdBw1tkoC6UH4oMhGFFmn9o3E4PUhS513qboqW1NkgCkR1ZCUq873GHdXVn",
  "key25": "2g4ovkcnSqKrhiQorMM3wf1TrqVsEQXsodzmiBoxB7yFbCZVU9Z3LfaJypr53V6QS3fQuZ2kzuMF5jNAkx3NM3Vz",
  "key26": "2fiaF3PsRFGQqUzNhdYPtD6yxAB5fFqqQ5XGnP7oA6boZGhBTrjXdFYJHbCkPnv9dgUazFDAFjzrwSzPK3oHqbpP",
  "key27": "55j7Fe7iQ9ao7sjK4hNTVacjVihGvM6Kjxq6rdb6sY9xGpHRScVM7JWSMPuh9Z9uVNzCAc3q15H81n1pVDAZ2JRj",
  "key28": "5sEFokW1Q49fteSk6GXbGK9chM1JLnsoXro2xi1HNv1wCXMZgvU1hT14V7U2Vjc572SScUUFe5ksgVS2jXt1g9FW",
  "key29": "d36Z57a8Ba3csyHtmhcbeiDFHiMHijtpuyqVDGT2ZcnuihQFiJqJNHNnF656mzQjXRKWa2tqzRN3SwHjMsF3aK8",
  "key30": "5kvUtE8qVKLbg2nhFnmCY5yUbcb3Wbgf1on3xfenPhBGZ6LG1DN2QvJd38nBghEHC3xxvj7gxQpaKuQu2DqnTn2z",
  "key31": "jQxciXCr2zW4aA3zPYdd68gic29rj31ahb2WWacHyYCKbF8eiz4f8cuAZ6gVgguh1ZJeCTesq99ABPZWk4R7dHV",
  "key32": "5o74NpMJCHUTWFpKEaxxP6XiKU8HzWiRG38dkCpwwYBWrWSW11iaWJXz1wJUG8fWGX961xZepqpbPDaHuRVNJrhd",
  "key33": "45SPMUkxCSSVygvy51xahNCGwG14QwtoR9N1MqsQtoa5uZCzLbh2jBnBVAgbY2nThkb1kBxSRKhqTzPejCprFJjx",
  "key34": "3yA3t7LUiitXCkEvDTKeYDMTKQWynCurLvCSyAjhfzipRjYaBXa9TRoLV7euEMcjyQv1UdTHRB57nzoXTFdQWtwM"
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
