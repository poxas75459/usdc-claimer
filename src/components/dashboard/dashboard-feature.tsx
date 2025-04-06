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
    "5Ro8X9E8W6PVWsrcg3XCFFthrk87EshvveZX7rLjscMmD96tL9BZ9b1Xv1ZgoqKtjZcwAWsR8fnbKBxUJ6kbLMo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uMv9yNbPD6jmic21XcqGRK1G9CjGjceY2uQqCSewW1mPgoEtYoFtoNA1VdGbJztfMqbnYZn7MuZMUckoqRWqM6A",
  "key1": "5Qf7UBZERuu9Hne893RfeCS8SJ5edAWqdB3L6YXndHYMvCrXfymrysgyn61E3WEcxxJjSjVzSDYHNLkrbHMW5TgR",
  "key2": "2yyX5pNvGQBUdAaPMdBo2zNwyiXXjmMr7EwBCycLBtSwttujW8mVagg8HNXpdPnDA2A4LVGmqR7PmfxLniRJMFgs",
  "key3": "5b3vb5qeYU6pjFcam3E2uyVNPisJit4Vg6SgvMPWEm2fg9Z3PQEyJvaykJUXTnuitdfR2hCJi5RVWcCbqTbjpZyp",
  "key4": "5nENSpdYCvkuq7rc68FKm9g8YLyCePxqPwPZ8cAJNavU3xQ4TAi6Lc2EbG2y2oQRUAFqDboUzK1DWir2CxgUtFvd",
  "key5": "2B96VFKCjfgTCuEy4onJrrpuUQM92MSJLLZqiAKtdfvZ8p7jujKTrRz49Yi3JuewczrwGFspuLPcPfMAcJ8jNire",
  "key6": "46H2nkLCsn4hcisU2drjwjqQSH4hzgDcrsR1X8pT5etP6aJgC5xecADStn9PBw2zvs6hPLFxriwhj2EC75uD9QVH",
  "key7": "5zL71aJL55dFxWaUdddSkG2wvapvqJk62DfBqyjTWenGnVfwH75Y3K1WuL53gQUPjbx2QFNG6Y2VCwB1f8SxnCck",
  "key8": "56PBkoHYAinjLSE3SqHtK2syBBwAXXsQ1ET99dyqVXcwguQ15AUkXyJMiU5FtWL57LQjbgJnKqaKG25AJYcJLVz3",
  "key9": "4onvxoLrjSNmAH8dZuwMezDDJ525rsHrn7yLUfoUDyw7qW8TU8x1nNj8MoDR6wSigSsQC971P6g7TfDwCcPpQFrC",
  "key10": "K2P4AgwSiMmn5CmficQSPvZKBcHHBM7wxLQBoHisaB2pSEi3BAZ7KWHNUctipJm2t4pKRuR2E93xpayegyvFGrJ",
  "key11": "5wBNzcXvsxz3qZKdjqwbTYMpCjuYTZ5LQkywL5ELTjU3bNTXu3wMdg6s4R9DBcmd45EsFC6Q6ifvz5soh6rnpqW7",
  "key12": "r2HkTCVZ6vWCz7qcxvm6PmJ743B2zPvq5PNgkuH7YLgJVadkhLqyeSg4McDWBi4yeBfsa4NFyxbd5cHtS4YQufH",
  "key13": "55vkTwon6stLvEMm2pG5QXeKo6mChvmCNWmy3mDu8Fmc4Sc8TiNEhuNeuddkwoSmmqXfnkUyqhvrFUWfkrZLxSyC",
  "key14": "4N2c1PSpgF8TBEVThTwZWg1Zezk4DquVXpNJv2o8Drzx27Fk5KkEWRhbAgoU8HB7sUPKW5rg9UP6s6Xg2uDb1hHD",
  "key15": "5rKjjbpqFuZxGpHU1o1shhj1f3Gcq99htSW5o1zFNjGi5SRxXLfjphbzEvqN9H3TErSeRLHw2SvNcTPGnWd7Q7YB",
  "key16": "Hq4RDcyLsQNNfA3dhCrv7ium2hTWJZjZpw6BUYjrYTHdYGC2QogAgHFgmzXaBKrYETHesByRwDX7xfE9tVLYNyK",
  "key17": "5QFcxTg8Ba1EQCbuBLQrEC8kcRCgcqg3RBFCCWGHGKLzGnnjNwvS8juhWEqdcPvuUa39YmbsToqQmpqXeDCN8r3U",
  "key18": "7kReP7MbdBsnBegvMj138B4RbTgxR2a5MmoMRNkKC7XfQVCneDQBEsN4CSP44Y1mJhvbuDQCQ33Nso6UYNtqS76",
  "key19": "E3F1tpQiqwFbk3N6xJWPoNQ5LqDyZiWSgAom4uaAG6HFSEwveMZexup9PB6Mz1cjE7rEvWszeT2zC3nn3GdRhS2",
  "key20": "mLe6zTZWHVN99qwUDRY2edeFqFBdhJzAdbwvP6NZ2hJxvTmszCiTpJGqVcuYG23oEL6H2fecYaWpgnzR5jgf6Y3",
  "key21": "2RcQxGgrHtLyQ3iSpEXkMGCd2hLtQ3z6vCPPGqBgMQTSz1x45bNCmiZQVEsX572cypFJjkFASaeRJrnUJ2VqpNQr",
  "key22": "5PVyXJm8Cut15i7LKaPiUmuPBgEQWRepi9btUmL1rLgzA4nJ5kvjmWLPsfTiCg3HkGcMRPJACP5CKqJvwqb8X2WG",
  "key23": "m7crohmNg2T5TzWrGySrgvTga5QnvCw15vrcrZSEhaBmYm9WbDkmZfrcTML2iNBJgVJCNZR7GSUeN8yDsT6ZR9K",
  "key24": "QjvXEkYCsxQyV9JLcEGCjuLJnLxKAPDMWnt7aXmb7TqzrM5iF7AEwawQobuDsWhVByDTbG3XUft7bA5qtrmRaAr",
  "key25": "643kUofmnZDxh7FaJNNXuHuh8tC6nz4WGpaXDtCJkH1s1nz6ZZbBBqZ4LVcJMUGdinKttezi2siYEowJqjCML9Be",
  "key26": "25V1kPfX9e9PNjh7vWXbef87Ccfn3waeeRfuAihNUsYougbjtqNXDyf2fQ5z3nH4W7t6QidUKgycgky1huPZTJ3q"
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
