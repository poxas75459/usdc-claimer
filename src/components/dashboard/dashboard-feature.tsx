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
    "4okG9KtsULZG4fmv8wuNRoA5mZvZiy1nGXSKM4dSvkhHfrVb29TQFXxdCUQ4sRJ8pyDNJ2m3SRLLGQDxRZnNC6ty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ly9Lkcz1BbP4BTPqxQ9cWB3MUX1bevAiTa1yLxnBScachAtAHxvbFFTsTbgHhtTfanARFkefQmBg5aocN7vaFqN",
  "key1": "59eqE9idKyUzDmy4Ak2GkpxcBquGYKcDmdaSbbb9d5tKY7kQVPKJZjxspRvSD9wi6iCkSxarnj5Ly4s6fJ4KsH7",
  "key2": "2GNPgwZnpzT5YD7p4bjXFXa91HNXdU66LTP34kFtgZH3MGS7RC99xjTmcJEVG72pzq5w8njyMdBfqd6UUuSiU511",
  "key3": "41qqzpTjD98q6owCPajNoSCWqynsiyzigZ7ou4TjV45A56dDsgPNBzmwQZf1spk6K4eU9Tre8maRm3xZ9xWAn7DF",
  "key4": "4NZEGB4da67zEWYH1gLQjmMAGLSz1UqTsMhaNfc93xXRPDtbz2rG26GH7qQxKRgVt2RsYBHdx748yjuBmrFKWtNR",
  "key5": "2V17jpTWKswABgXNA8xzXa7iHawcqMiDSU9Piyi4xpQNvqKgj2RUXY7h62MGyo3jKx383K2JTs2gHK6RQau4Z3rw",
  "key6": "5zoDFdZHG6CTdWoHt2UgqUZhU46PaRaVPd3QUuGm3wUPXVYhLHtJu9cbPviT8yHMTufDYBdzzhvav139hc1wQyEg",
  "key7": "3KaQuL6HVrAKzWKx4ZaZ4xTLSKkkPYGcWdvrYqXSH4iaCWwRuhBSHAmWuq4Y5tmsoK8yrW1UuFkbr4Ru9i9BUUf1",
  "key8": "4RfvDqguLHuyX3aNEZbHB3W3xAgao7yN7uMdYFpRmtkgHoaLQwJBJvgczps9YMJJVy818ropHQ2Lq7LFVxwRHRsW",
  "key9": "5tnbV4ERfZRWgeDEittBWB3794YeUoP8X85AATMPafQvRLBh2ytqKtEiWtWViBLb7ziLb8xUZVU9WefQNsuEGEDB",
  "key10": "5wsCJXcrj3cu31LBRYExvR2bSUT4n1Wu2AfZL5BGHNHWgvCevVQvpCr3c1KJxo7RsjhQiwT3Sgu4b47GGfXngsrF",
  "key11": "29V7bQhi8vaG7v2topWbShmgEX9iZ49YpMY2tUA2ctwv6LrK1cWh9VWwKdmYrKf2i59UJo3ZLBQw3dkLtxiFK8xq",
  "key12": "4hmWQhgGkrHebUCQUJskHsbrAG7YmfF12PrNFVuRnWksEKzfz92mAnhJkbUu7pFTf53YyYfvG1XnLrXrSgMffR8H",
  "key13": "32QSvgfsiduaFaMEiwAV2smjuJnb6wL6pPMZfbUQuQAuq19kPqS1vk1XPGr5dSzEwNfQ6VhiqHLYPG9YTmXFDSsE",
  "key14": "2LKC6yPwDTeCputkEGbqUJnJ4cE6UT6LgHfczoroTNEwyxUahAwKNN2iBhM17a2YSpkzq7AGAoE1gZMu16Z99ta5",
  "key15": "46dy675i8EANBnMo7AY8KfvxmDgm3jH1y8Q4SS1wci5sr6XX1HNCNvJ5uSJdLS5jfbJ2gNb964r7aFG1Xq7gJHaB",
  "key16": "42b3jALtpHGZw7Hs3Sw3cSfDkxCszXEtAHEWnP9QdtpjdPYJQRnKhNsPqA3huS3qTmMqwmAjshK86BVwXxXdbjWY",
  "key17": "4xpnyiegjtA436dY3UMLZzfSUUjqwmWZnnmJAgBXNCDPD3a1EUiJV793cwPmugqEBM4PJQ3f2SPXP4qpUK8mqU7R",
  "key18": "2go38LpWNqCsokwyMp2of39CBJ6vKz6NPZ5REoXNWpEHzPTbywWCVT81RGVU1Y8XCGSp6QvYGfu7tV4fMRSKziYN",
  "key19": "3QMGCYCYpc9ZPTvcDmRQa1zxF9yFvHCym3v23yyJJc7JGxf7czvygwbVZqdcDoaCadvB8pRdCtL2txhkSGoC8krD",
  "key20": "5iLJ5Ej2FRFAYRaKG6QcqCAtJRdq3cWyV7A7KqERbJqewcvcrYn9JLa9mbM1kBVyCKF4VY9rAuPo4FfCJouSHTGN",
  "key21": "31yBdKHsrvgvUX39YZbGYEai1qeB8nYeYWi8ANAdWNZEWAcCNfzkpSUohroDHviaZgN68dTwumRDMrouYsx44awG",
  "key22": "33QFFZEJ9Qv1WWKVpJsmGta9WoX329UimiMA69WWQvUn4Rxj2v5w1ArRnQJRE16JRVsMCkcYcs7xMJFijUyFXCP",
  "key23": "SwLfBFvrRwQUv855R6viSSX8KAh6Mv5CyEUksDfpuvvytNta1wgpD1T9XioDP9GFWqgGRuvtf8CkiE1PQDQ4zF9",
  "key24": "4ZXyhWe8wywUjJoG6K2v83o52DfiFbtPRYqn5oFfWZZLqPjcj3M2Smw25253dg9meV3Gm7KRh1rFGDbL8WBsCQLB",
  "key25": "55NaxwzWR7zcHTNZte38BN69fyCu7fRBVMBknF9Z8FMeaYFL7RrmQVYzn1sQ6pHhb415mHGcEwTpVUzxH1CZVvsu"
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
