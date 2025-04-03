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
    "3AsC55BrYwoXCgRm53qkbtLK28S4q1XCjvPrHAKR2ZBTcfGHHFoTnW9HbrKJh2zuUWqDd2fVcULbibChZRzDn3b8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GvNvXDPSnMjAPLTDRtvxpnKKMaFvyFfna3Yw8tWwGNBCrNaikpBn8TkaPMDf6doLTv1vWyRRNMN4L1oumzcoEDx",
  "key1": "4Kmm3ZDTc3fYjzAeMdjins7rkxvMHmEo4NjCW79NzeBYV2zT6XRzmFBfYMoxa4apriZUwMFCjVp9zXk4vtF8Ed1",
  "key2": "n5SLEvgzhzYNzzENCisvBPQKaiDQpK2KapnvKo5P6fQnq64BhhNx1gJCHxsTAd4rwDsS1cV7X2hfPydBXmTcaFD",
  "key3": "2UMyx42xPZJ3vT9MxFjGcq9isXZUKKAvNad6ukY5v2n9AnDJJJt6K8sh5cVDYL2neyhnbnwQkT2EE9vYusXdeYyZ",
  "key4": "3ChZyRvzsXWwkaD2j7cxsZ8VgTXFLP8HnXr7iW9D9rqCxTrHDZEMJv4G7JoyUfMjpEH6EmkRvWxuNexApgjoou8K",
  "key5": "3dPxD9X3N57a2G24Ldot6HB1DXMZXjcy29uDQMfBvuS3McDYBJhsww1kg1ZKEmhNZ7WmPkRyZeUUoFhhPeyTBwy4",
  "key6": "3jJreFicEw6tS58a3YmUkzc6kTMvBbYuQpBZFDMQxCNrhx9sS1KaVWih3AR74fmTYZATwjUg1FbZJeWK9CZnwB9Y",
  "key7": "2tJghcurEDmKkbPHk9L7KzzDUZf8ejvwGkqJ3MTfrtM2WDiJWjTeGn3d3AyhAxqwS2p5kj8mgVBLGBkevad5n8vM",
  "key8": "3RZbVE6J8SV75GWfD3qFKnvrmazL7JKcN3VVMdfozzyTKZYEFNNqLZ4ZcWyEVY7sCPKSFYZ9pGjK5YPjvdzudyM7",
  "key9": "31kPgMUg8V9Uo5EhdBECBpicMfumQgWKGB8juG3wA8oZTE4uJX3idBdsRwhtTQd3AW9sRG87NKTcYiNur9sVQHCX",
  "key10": "4XCiGGnpsek7o9phk3pbvKceWybVVsqnHxMp1JPCwNpXFapx19dhFiyBQpcWRrsR7ofbneFkNLUkk2ruZ9wdjAL3",
  "key11": "5v9zEfDuBzn6ZvMygJ5CqpxQeVkUPXRUDwqGGgPLUkTUgMCvokLzwHQFuuZ43Ap2RuG8zstuBPBqrdk48cxwcXBz",
  "key12": "34y3GFfXz6v14VuWYx4HjyfNUnQKdF7jYmtfK5RwCgivUNsYXmKB7nwbTLRDnrkqxiZ8BWmUX15L6hWmHQFL6ev5",
  "key13": "4BoMaxucvBJZRWLhC6ywiaKkUUpga2U7kqmk4iFcrhRzt2g1kd7448rrJxm59hf6q6sg8QS5GRgEkrD2Kzb2CWjA",
  "key14": "4VCMdc4k1333kgGMEQwF7DtEJvCwVnJpYYdb9KbAmhJWVqPLR734hA3jckY8KA1p68gfEQotU43r6yea9QvTvt9g",
  "key15": "29aPyyRmvXHB36XCLSuDFJAHpdf9jzD3hSntNes6WoCNBYdRHoxnVjxqq6zabRoYfQTL7U9SZUX1aBX5rua65jQa",
  "key16": "4Lrt6a47h938afKhKBPSFP5L29PZkujRuUJ5jbrsTL2D2FhmPyYD6KkisMXJmyJQ3NuWpFNh8mhbS4He7u99gsmL",
  "key17": "4Z79qy9xy5LU5wQdwJDRKQHfdixXkGVXBCJ7ifyzxgzeZhLy2r1biE8v5UsT1cKBPvdWtW7eUPScr3MR9xMyensJ",
  "key18": "5gwKTYPNhX7vCtiojtGQjwDax1rDHpfabt8wjzJKp62thukncxTiEbjXYCFSXQ19Z2z3m8X69nwW44nHix4JTDn8",
  "key19": "5728eWJxr3mr8yzrb75fAquj3d69xqN9weRRwqWJGtc9Lho5diBf4N4Kw84DmCJ64QrmVZFcnJQeH9zkqbVhpsMT",
  "key20": "5t2CVvA29zkSZXzWqZsWZYLr9eut5rY2JaZ4vLjoyRXnBopEiaf2JB1CEQVSqKJaqWK6uswLKhoYi8fUv3t7tbLM",
  "key21": "3c1zQfWY9kyiNaUHz69xcvRph8bcr8QP4aucXrcWaFtFLfY76UBFZkGuxHXmCqwq67wmGhfQqoVSkQnaV9UacW3C",
  "key22": "5r6icHazfL3oVNbnjgkL9qfWBN1Ly25SvfGGKyGPBeUZZjjQxotAeU4yq9578r8iXiJmfrGtud1KoohDCkEHG8vL",
  "key23": "4GnbVUFGeoXm4LDe3brSQz2XQhQSmUC4gMALssqfnnXVauH4bhRBnb6jWUwh2ojW1ZUY1nY2imK6WHvuB8sXNzy9",
  "key24": "Lwbr8kEnHKJZe1hDFKN9chg8MdJ1VPivxDtDCmKiQ5bTYGhF7yNHyfqQ8ZD8vaHU99WckG6G1gSEZahAiCUE4BQ",
  "key25": "3ra4cfBKu5RzytpA7YfCrRGjDEYdpkKj5bD2eLCqgJF52UuPymgGkbTRjoNPUph5nVNk4p7wYLKZNguDmfSfAYY7",
  "key26": "36T5q2Zuijh7q6qZ1YsVNXicXMh6tXu9AZoiA4a9AREcq5AeM3qPEPCoPFU7aVt7MZgVevuSymhdzrjr21TLJPWN",
  "key27": "3vpBWfaHYKgUhq5dJiTBiTuHX5jaYJRZmugPcPEoxmHCDmcRnMYR9vWs6YAVNco5FNbnaFCdKCTmmAcF5BXS3KRi",
  "key28": "2RNYXLWrnQhCJ4PYTtWBQewQy3Q8DeLsfQwqkcaRbgnnqzJ89J92RAZn113QWbcuq2C5ezQz1AySsnay3e2KjTff",
  "key29": "3aYwAm6hMPkCFtuyMGgsLaXonB5AaV2KyAmRSUpWHrKK8s72Dumq5TPnDFxRvP8CVUZBEB7X428jQN7NfDQjMRyq",
  "key30": "2tbZ6vHWykurv33m4x6VDgNBatYftike6SrW4d1kHUTbTri6XyzxpF7omQJ17awV67NTgqmCKTQgPMx78Nq3pR6W",
  "key31": "4MMsEojQptU5qhebHsWLQ4bkXm3enQWFJxduJqUeCrcV3ACnkTdPRcP59A8pFxPGTkhvUesYVh5ERNz4VuoLrq2j",
  "key32": "3fZm5vt27B4yriJhNANGH6nNEipyxqhiD3EFh2vdGSegiVwNT574mGo2CHv5yu6R7RgDqsCMhjGWW6KwD2pqLUxF"
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
