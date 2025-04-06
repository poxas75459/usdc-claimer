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
    "2L9oUEt4woxSJjFbUgYesA9yubpfJBcJXaV6prxeB3VXeESmGxccjWHRdAuHFNhSGf9NxfpYo4gvrgrZ7dPzWhBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EnMmCWxPUig782o7Wzmz1Y5fZBmqEf8iQ169sPBGkQtx7HsJYNdZvCNbenQiqQEAaFMyVazFzxfozgEGnwQYQRv",
  "key1": "2o2mEtEfvN9k9PtAZ38mnQWLnAtWa1KHC1i4tJo8FG4vt1ZLy1pJNKcqawVBNqxiFF69jh3VAH3t25BK5E5St51F",
  "key2": "4U9GQhw4RfHskMWStqv4vv2WH5o6Qc9hexbREqQbrkog7RYzkodUu7Egx3dTSadchgKPGPYeNcneQHAdHE5QcWc5",
  "key3": "2HrpSfAzYNKeyAaa3C3bUXtvdix9jYo2vcLvW87bvRBDMoekAmCP8BE42EKokoqeK5ZXsc4ohR6HBJN7d96biJBY",
  "key4": "4S5tJFj1kUMjoXuVJQQHVeFSjvjskRQGiZBNUa93vGt4maJRiJZ4tRtpdSsYa8G6pXkNCnvF986hH8huHKHwNZpj",
  "key5": "UoTpYuXbPCrs1VaNsenkJGGUGVJ6yecTjPcEkPL7VW1zA8xykRg7aFQ8MEvJBz3TN6r4MR3Nb8p1c1NAJ3U7gE1",
  "key6": "3mvvokRiHR7qcFX5rRPzpfUdcfauFgLarBi1is6ikNRUsQcyZL57BLzKEKxfbJdSRxzQ8fQEwSorgeZUmdnwVUUv",
  "key7": "7Bw14n9RjyrXWdZjQUQLuW1Ys7eb4Cbh1kDrQBzgFNJPcr3J7S5fcHzWzSHGGUuefdV4eK58QJpWChhbvX3bUZU",
  "key8": "4mhxs6wPsqW6rvKiMFjmBxqhEgMqC23RSV3ustqaS8ZRDk2bgntjdAzX1bo9sWxGhrWZpigNMGopT253NZG4Kqw9",
  "key9": "5t6tCcr82Ucq9ict3VE7PLF37dQXeHhUTkkxY8onaBLYm46eTo65gsUPEteh2pBmhgYxJmXT5PYrtpKRSqAeKWQx",
  "key10": "3Gdg5924UroTVefQjn2oAZo7rHGX8z4HRSMXeRd9WuTrVSDhBLwmPSAeFzq8VBdzXuUXTw5bdUHF8x8ThsCneEgG",
  "key11": "3CCVnHBcrdxa4CVWVcBQ4HCjHp99U5wmH5WEWPLpeE6zGhvenENuJUDsaawzmSWnE4tCkc9CSR1QQQCR7pXsSkgW",
  "key12": "4vPyxr174Gq9sMf7YnNXubAjcjNdq9MDe1Dt2cZpF8HeLndSCLettgnqqGvu3KywtXhmmVuXYzEE4TvM4N2Vq8RY",
  "key13": "5Bp1Q2U1xNGwmo9AUMGqLsXXMZERrD8jXwwN9AsDzJ4dGaz171UjXdViwSEgZ6SwBZ1HWjAuX4x7JdDRvbxLbq4x",
  "key14": "4sszWHgcPQ9uoCiTwTkygQpf1DfeFJRhkavQuVvTdRpT9oTWhrwC5Ya8SZWDRJyfKUHK8wRMoNboCwXhHnRdQnU",
  "key15": "4TArZ4TnUNNedUt5K5RjwQwuLZ337vGfYQrd1yq9gsuyFtSkPGogCxp3gXgYKBxK85scepnRBsRBUE6U3ghNH4Hh",
  "key16": "63NH5EnkAykqPPpm1yC8ed5vW7yyzisMYBz3aUhLeMPgfTmypTaQYsb4wE4QMdNncuCXbwenXoCLm49ZyqSXhCmu",
  "key17": "3WV97jPSJQJDTTXaDU1WDYD9i4PgUYN2Ytm91SEm3MxuCwEwGKuSKPD1gkvwVdVYS1AnqjmfYAGQBUFnj799hhSQ",
  "key18": "4iCf1HLVo6uW9DufXnRC72AtozYWQZKT2a4Zx5zxdRHEJi2eWC9R9sXpufp3hc1JoQdJrXyk8BDgXsAWV2nhxiTk",
  "key19": "2bgps3cBVrjMA1e9TNomhssmPZEGbzPwmtgqUcXwFPWaX5ea8DE7Cfqqdxm2HgNCuyPP4xjDV7nkwPNfUs9V9QPh",
  "key20": "3TitKdp1K5p9UPz2yFL6Hj5XqxY1exz1Pc4AepEyeev8EqGMpahFetK19RbugnkxsymGNe2YKtmt268x6koePCXV",
  "key21": "2LWXwpDHd3z3afQUdkVsRmLqwzkKYJBxkBmYVuxGVVLvdSuYgNkMCVLFPRkm9L6DoJB4YGEpkcR41NqgxPorhY6w",
  "key22": "33VLQyM4k93Pcg2k4aUfzswR2e1DGSpVgmFnnjRtnjCrBHKhiGZbT1Ec5UYuHLJswcnvYsdmMKXiSbAgkQYC9UHs",
  "key23": "2hcsBu2u6TxF3e5tWpefBvfQcQ7kCbZwfDadAsnB25FiHpLNXx3f1MJU7aDxffDcLNQ5TshZmFtzxW7gnQD1eMD6",
  "key24": "2WthP2La1SPF11Vit1V8EGzTgGgPgxsXNDyRMper86VCvhJT1m6kJcc61kutaRts6LFWxubUzvu14cwYqe36v8LU",
  "key25": "67JjLWqwqAyTd88AA3fZWzjaUctbjuiD3g95qf2XQGekZ5UVKjmm3eNChQdNHGwD83Fecjt1pzbLRTaNpLvmZdAJ",
  "key26": "2AsXK7srmx1yCxbAnq1vseDdXN4VGKf7DmkSxd4auX7TkeKEH7XpQ2Q2WVsURRSM4zGzncrbkA2gssEBiLhwWhbE",
  "key27": "4AeVNUCEb8zaCBGDNLBtyuLQYE9PKDrrBYDhSwxXekA2SzodKTuvEMgUyBx6xTbGdXHpKjMQvF7bapLeNLeMivR1",
  "key28": "J54Dj5YGgy5ySbYDxVsSPazSqMqzU4gFFCm17DZJPPmetb273YWqpcCC3BJ8PLfvVXuLMKahk7FbjJAxY26CNuZ",
  "key29": "q2B29xUUTL26aDAEtm5Uh34kJZbXLseMHGysAhk6h59Xw8etuyCZZ7q8s4jZgMNM7NhQY6kkpkrwmd45Vqhoycc",
  "key30": "3W4ey6siFsvJYw2BZ3WXNA16QB1bW9HBRUuEDKwVzZ7BMD6rLT6Hu39h4pc6Yi9Hh8gaDz4djnz4rNyJ2dEpe9if",
  "key31": "qkSWMagJNexySSnq5WJzfUc3DNmQbaazgFyuXwvd3vnFF4tEkZMo1ieT3yUDPMTVwgbYECeqqUtJMMy4XBBG6Yp",
  "key32": "Wue7rihSX3PvsB7vTENS5Y2ZYr8vcVnrC71eVajEBcrs8KPo4cxA6rEsZu7Sx7X6zxTCpaSk1XSgAYrbVsbAWuQ",
  "key33": "3oT3HeGF6uDdGRsXgesRZX3qBWb5nh3CXjmjGATKn74E5zhyT18NjjwP5VZjem8ugzLVYRZUJth4bExEZZTUZvCF"
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
