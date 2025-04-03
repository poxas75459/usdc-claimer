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
    "5hAoEBFPycgT7n5ySUohTeP9SgLjL449zyWKat3o6Wp2s5GfT2nUymnRz52sxTEEhdr5NxWfzfvM3tfuVgig29xE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZXxCzvomB9vor1JyBqjgvb7L6yy3wBgg1R9sH7KrgmsZ57EmavVQmChzrzEXfDFJLCcQxBmRRGA4QhXKKenbo7s",
  "key1": "3fKwPynNKzy96iZoNG7WuNjEnyq711rqoZHXVh7yMZHLTin8JX8zqNzr6wV1wMiZdJS62BqgeCRheShCct2nckmn",
  "key2": "sYJxmpBKovp9XEMFyn2qxa8FC3qfH1m7TayDcjrNSv911NcUhn28Migoh4wB1ZuYxGs1QLFp5fgGnJgiiAkAPvH",
  "key3": "BL728N8qE9GNRqyF1vEvxAwEhLLu2ttmKiN77n7TPtdmmFh1sGuEjfHwoox6uttfmREdnr2141bMRNBNafcgqVC",
  "key4": "3BQKuGgjPbgf7c4FQh17d4WnspGNJ5cP2rVhAFYok9bJoZMWpcdn3jfyW6RVCpN6EBu4bKvEANiuEe8aT2HSuzTU",
  "key5": "33F8UxnXZwqEeMCTZkDtXN8jar3KBgM3VZfeCJhkJfw827He6XXErRo6v3o3kN6GqbWYFeQAG6Fo6sSjtNXwJkyt",
  "key6": "CgqXcDTSV2NeoafXiww7E9PFc5R4sQ97BxXwR8aK1zoUBJXCnxkt7RcP6b8h8GCV36ToMDcruFENJyh5vuxVpM8",
  "key7": "58PGcVvS1tDcHVJjYuRPJ29Dx35a1VnbpRYicLTYLEvwi2bY9M4EVQTcjjeZamcucv9F915aygC4qawSCeFgTEZZ",
  "key8": "518NjuiRVBkiR1AwaoPt29NgNBA1aM4zb4PqAcgsKVZL8Zgz1e3UrFHSyKy8CAThbpGiD1XgpR2ErRFx2LK3t5aq",
  "key9": "5Ho7MGwtjZmRDkVAofX2DXtTXtjL7T5A4ZeRyVCeVg5sR1Fa1zqrKjAPjepR1dbq2GAqxPAAd8KQMS5dE4a9gfHW",
  "key10": "5nFutscRBb5ZuwKX75z3z5Eqajw7tXkEv7XurAxk2ocf9A7f2Qg4yogns646PLnYfxBPQR49C3kieFmKXjfDxdWr",
  "key11": "4nrSjxCBUXRtKaANixCbBANbiGpNpLYfNouRvcYHkXfQPFcAKzvbSkvtkJ6DJaeuHxpM8StdVvY8YsZgqfxwypQ",
  "key12": "5QEZCz516QrW82kQt6tdzSp56uqijRtzazeJpuYn4WcqoQEyZxiUHJdEy5WCX9s6KLdteKrCgQnkGq5AM5nDQcXb",
  "key13": "2jDVNed9jk1QDy2TdzkxgVNqHxu67tyWwBwkGdXMctSXG7XcDoEVUTS6MBUZvhAMu4UGgmWqRhWqDV44TxoJmduS",
  "key14": "3obm65vyGHtyA7ST1yePfLAZZgU3U6z7yQoVjYAEiCqGxEUZydoxEL8JbNZ86r5oMRtcEDQiV6PcS1HXZBupe24c",
  "key15": "3abbpK7VaC3E5uFcsqxye33ARbrESxjL5JG1z997EGeJWzeNDVawYJpydTua3mS7t3ZF7mjRqStJbub1RMteVMos",
  "key16": "48635PurpX7Xt5wWiSCTV8SZSKwy4ZzPMTZZzzyBgiDNtTVqy6MmK7Ya4zKMNHUjwd9144KeWdGLRJHcy4WhMecj",
  "key17": "46mW1MRphUj5Xt3c6bCeztKDLgEorfq1SDmDiea88NZ489MMbepykgXc9ogjQ1PXDnFJKY3HwafJ6fxvczA6ofNJ",
  "key18": "374xH87bZuZBkUKsG1r8ZywdwYZKVHwDxB86vLKz5UogTKur8WjLevatBHVSVwLv6H7Kh29BTLmTrQTezfJudL2d",
  "key19": "5LC5dv9nTfKWRLajTYqyjrgyNMvtKYBubM4HWf4KCYSrJuMzxket1kWWvq9i9PmbE9B8L4rhs95dVjxF6gS5h8V9",
  "key20": "2PDRsg7ZAD9XSswxCsPHA42Dy6823YzfZx6hiU13TrzM5vjxHs2eFpHbhmiGYGhcyTagxorHUxn2Zyp67TZ5eNUN",
  "key21": "275x53QnmnJvMMewTewYjwbUJyrdKkfu5LAQoWaUm2ydyi3rxu24nUa2p4U41HLP8Bo7531r7usJvDSSuMnQxxWN",
  "key22": "42DE9F1D5XRmKLmwfXV3N4N28sjec1KGBL4i7j7echbhd9mePfG7UDWbWixriDYHBntWuBZj53JaqmcVwsm2CH8z",
  "key23": "3ryYZ5Q67ZpRL6qgHA7WTApoD9kaWKpm1Bo5pJDVLbTK7Fq35PytQ3WxXYeY8bgRdVZNYX5KmD2DjDkrg3EAjRvJ",
  "key24": "4jHKM6nv3gsHRxmZMVJrG8nWp6qREGvwdAy9h687pMiSUPRxkeLFZAKfzyDF1fbqnXKaABeySf7A2JkUTDJv2zR",
  "key25": "613hZAQ4ki4M8CyoWNbYrRm5MDBYKeqFqwjLPHcKq4yj1JqsH5i3HY8j2nuT8FnATrbj6dzszoN75Z1sVYVRzDMV",
  "key26": "Pb5jnWksyDdvHyhBPWYsR9APuo7XJyyAdcEcp7MTrdACPputnNM9JWCsRPHB5HyWC6AHRLVq8DJ8EesGWkdLrTJ",
  "key27": "uZPA7tZfZNXbZkXzJXBp3hSYn7r16v4jj5EybVReaf6DS4hBZHo1qBSRv8WmoyJ2qt9xzVUuNE9SdDX16Ykhxxc",
  "key28": "3Q6Q8UN7gmDwHdoVh76oRWgXDMarppA7CNkWG7UfpHhufkbN4o1EccJ8ABapL4jgx5Tw4EVdJKZqH57uaqbNjQ6K",
  "key29": "2Hd2MKhLX5uSb91pTb3oHNHSa2SDHaUmo473Ea64rrAMmFrVFUECLTCU6aeATHBrJF64h2v2EopxzF45sSWhf1EU",
  "key30": "17Le7jExDiYGqj16f9eA3hh7WfuWqZeqApB2CiYdDtz3Uf1PAgQZRX2p3G399KA25UXT5n86an476RVNUVp29Ap"
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
