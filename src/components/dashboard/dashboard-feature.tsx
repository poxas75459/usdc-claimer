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
    "5Q4K4dMjY5dtkFC2FNeZt4ncfnz4MYRtLSLiQE7p6JPsNpFbNF5BJcdqRyop8diDpC57F5u6DAKza9iEJcHfDB5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DUAy4gXet8KtMF2EgUFHxeWf7qHHm2TZ9dpmYc4qY2u5VDozA2F2x6GhEVpHZQZuqyfbsrNoWWvT1PxHno9R9xJ",
  "key1": "2E6gTZ3nURfaSvvseq9XqjMjvygtyDoPvhMJNJ8GPZcdGEgCkw68KDrcKQfAeNeSET4kVo45TgqvKtRtMQZgR2DL",
  "key2": "Bqprrtu8hs2XS96XdeEAzaT1zGKuhAURAWPHVXrwsWKXyRHgYdrNLvkiMmCSNL2ENMPoTd2HgpuV896b2mEB5j8",
  "key3": "4fVCBym2Zx2WTaUFKTejtBK5kwspRq2JZcGFBkDWUNnNMLJAWYNRYhZQXkKymUDugZK2sCayy6XbpNgJySKJPpLA",
  "key4": "2b2csXvniKiNicPfq34Zs5U5yQ13tAYRn7CFmZD1oVND3x28SfooW2uJhiwvcTMAkrS75f6omHgyKGEN6hKRmxWn",
  "key5": "4qqGRST7e9hPQSTcjDtQMjEaqCji8Y1rZDSwQnLUBLitPdS1yUHrdnKQYb4z5wseS49P4mDxob2Q5ua8c6YvQkm9",
  "key6": "5YMbk3914ptyY2bv73CFrEQaqrQhpxikkGJrQRNoYbJpYWF4ZJqV5LdkNeoUphikSQm9hei87x371aYLmvQuXCc3",
  "key7": "3s8aYtGg8JYEjpj9RvjRvVgcJZjioGRR6C5hgHL2QUr4Av3VBa1ihfc1DReg2cwUGR67yyJhVhGFPfdjzc98mzWm",
  "key8": "4Vs8q47w95B5TGPPdRftZhj4qffqzMt2TEcvFkBFvNN8wpQY7WbjJ5BRpPdZkg6BYxNVVWEvbZZCMxeNf77jBLbK",
  "key9": "B9HWQLkj7grXcHN2Apep8KbfL6XViyxmTvHiCc69nSYYnQ9BJUBSHDSeJaHkDUvHGX91NSYHCgb7rA21G1mikBY",
  "key10": "3R5TGfjcW1hFDFegVMKm4FD3SHNnvepD7M4fXSoPda3VSGi2DJheQYrVXcTMcbU54NkLCWdRxcr4pqwUmEpSKnTz",
  "key11": "QQwJKA4G9TnmMvLQ1TBvoz5AvbznfaoosZ2VGeY3pK2YWTchzttJVJfC6V9aGHY44vbw8cjy1Yc1vwDcNFT3SP7",
  "key12": "4oh1tyreep6N7w9PHVgZ5W7kgbrSDhfh3NMCfMj6zrmCHzN12LPhHvkKvFU77MFBJDJkVztCq86aPfqNWhqVoo4R",
  "key13": "32sdiGsFz5wdndEUtVaGeBPfornDfPNb1FR8CfDSnnn9vHegGS5xhHF6EwK6G4FfsffX1MGxtYvoPhwGxywmmWxm",
  "key14": "3ArFHpyhsyBKLvuXXaeWuskm9JkWaSw134K92Yp4LHYmSRuH9fv6D7PMNBB3ByPe9wXQj4Qy9BNhWqsF3NQjWgTm",
  "key15": "5vxHiXbi3iKB22xKgimW3Zzx55C2fbmqWsP4vJEpn1A11dxv8w21ebmsPwRGXHB5yQefRSj1dRtkCid36pBJZBNV",
  "key16": "3Dxoq4x2TVJV9pHC5V6R9xR6KgWsVMPTM3WdUhgboa4yHzUNThbYBBzJkzJH7np4gr73xXKBQgfBPdpvL5RL9t94",
  "key17": "3gWfF94vwkFRsfXxijziHyha4BCpYxFZEug3zeiQjyQN7tVdL8RurYH4AsdfirQUnht8Fg4MDxipuA4N5FCsf1DW",
  "key18": "3yQcAZHjanqBxnjXR6LM3oK9LsKh2aXFRaGnUrTasgvxUdCeYRt61C4eLAsEwh9WrTAZ2YmV6HRXj1T1KqbSJaTa",
  "key19": "44wx3wgM5vdkNfJM3aRW7LbKep8vWKANs7KMD7e4nqWTvX1y9k2irzsgKzYFwjQ5pWc2y6C735jY1upKnEfRUZVe",
  "key20": "SgWKBS7cXPffs6ZoUDxmkExJLH7rrY2cMT259DGEXJDHGjHLGyJT5cZMbWLqYEXBiCiXxfM9xqn9b4E3LoZUhSS",
  "key21": "2xTQPwuv26hYhhB4kRndeDRauBfpRg2jfYUUe92sXwQ58YmczR9eFx55G2uYpYq3Gctmb1V5u9o5Fsd2bcB4uRuc",
  "key22": "2VUZfYUXvJxCRuKeddbYf75WRozLn3u9KHPKh7Ps4XDUG1iVCqw5Ew5HMMEryDZWbCVmJGnsNEEDXYLPsWpMjXjv",
  "key23": "5upXXEajDyuzVcWVU3p8vj5ugQ8QESFi1Udu5cT5BQQ9P1o71e139X18HjuYSgoZBzMmFRTQt7aTTELuiVkB3SGz",
  "key24": "3S5sNDZLeiVf1HVyQetKzkG8xnQHRo7fKvsVnzKSYdgB2cUDbWHPBg8UXSmnGgo8uXERjWpWu1RzpWzcGDKJLasE",
  "key25": "55yCtzBJRp5GKrjgMBjaXccbLrZTDM1SzBHQvDiH6ivysFiSE8Yj7SyY9sT9xKxLE7GNECuv4AbmqbQmHdHXQb9X",
  "key26": "2PVCBgH2a7gaKPEAkeiZz4A75VYxjVZ96LUCuA7CJQknQQJKDgqyKmfvPruBtMqXkusBQtMMZKUNeAtCN1PEL1ZJ",
  "key27": "4i4qFUjpDeC3Mezkm5PDEkthDrCi1qJbinVVxt4LqCRiSc1tXGnaMpyssiCVKXghsxvpooyQjceZCv7PzG2c824m",
  "key28": "2v7oKMa9jK34EiwoeRpgJasxXPh3fp7NoPEupBYL1MUEM5D1THDtp9XV9EfFvYNqp2aaFbnnRBNfvbzktj12W1CJ",
  "key29": "32hqu9ZDj6BpVknTePBTpGYm5REFWocuU3FLgsgxTHhXPEqgc1LYKh5kVjQtnTWKUQbu7n3pGWkq2MaLsB2LVqLH"
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
