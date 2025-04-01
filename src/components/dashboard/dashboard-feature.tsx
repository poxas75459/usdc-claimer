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
    "Jdrm11MEvxmFSJhjr6SRwSnDWLpQ8dcShXd17XZ4fGWMG5UVEDsSxSqetQzekSJpN1AhYrus5Z37JXFmMMxMDZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uTj3G5nvbWSCg7uqBMyxvPgJDVUZ84Ze2PU9x2fJSwwxe7jy3GRQCQ98TGtWfP2r97MxZDDydmhaE2QWx4CFby5",
  "key1": "3pa5PfzVrcmgH8ZvWgkyayfcyMiBizBcnrhVVaVJqFLaw7rPFL5vivZmzzu3p5gQwD5W2vsrnYyT96oxELo3W1gy",
  "key2": "okN9L7n5FCU4a4tPSqdak8tYvUekktH1aQFZ9FoEWsYvWagt6ZDqwFhuhVmCFwkMc6aP3j59vcVL7EL39wL4WyP",
  "key3": "3jgSeSJdZUNTXx1Zs6fzfKiFYivN4gu1FwQdtGCyq6e2CSm8oyRj2q12DVi6aPkUJW7FfMk9ew5eAauDLQv4dVKA",
  "key4": "2hALMcHJk8FHfukvLmmudzcgQkt8zETaasorSnkUKAKtMx4NgpLsuNBW23PyiL6R1ngU8qMTpmHr1xPFCeUDBu8f",
  "key5": "sBYoKgxZKRjs7txcQ4CsMFAnPs7KdgTJKgxMEKHpNiMGVgJBkSEzjSZFaFYX1ZSdsnjadVWRPmPFgD2Jz6P16SS",
  "key6": "u7FyLdDyzpHTeccJtKGXpsDEDCxh3KFksGF1DyEUBGvYMZQvUVK8w8oRRmyV95Qtiof4L59jxaH4qMFmaSMNCd1",
  "key7": "3D7oswvfyjzfhHongNXpAcMHPeeS752ShZKY69c1vxJokFsJjo95xbsQtJUXX2zfr4VECgyRNfTV4jLuG8qkDbgH",
  "key8": "2U8zm7BAoZ1FoEN5gLJorXP5p5KXXbqhYWYMK5xGQ4KBrn2Z33Qk34RKKYWcBAXvFAVG8C2w6oHTg9SbXfzDbgTQ",
  "key9": "3wuSsmWWyjxSwzptmZaVUm6n5UiR5ax4LV9ukVf5dWC8GooL3f9zs12GZ3fQp6L5gzDbjgmg6cSi3FzRCtfDQCRw",
  "key10": "4EXWdSXEPQsKNZY9LXDaeW46dtyaP4KX6DMe3CDfPTmhkFmZmCifGAYnniUPHN17QoBJLZ87R8pN9A9AUikUqFAT",
  "key11": "3SjubXB489iSs5yVf268FjdzDcoe912X4M2FByuPghDfSyhLLVscU1z2WvGGU19gQoUFtTQcLUsgcyu4EfqVfV1K",
  "key12": "2JXFhnfwUoLL54UiLFz71XLd1rmLdkekCNUMAQpzf1myxbV1eJnHrtjDNoLsLoy5g6F3H7Jm9baF1wKRtUpAAZt7",
  "key13": "2qZUcWyUabRFSAx2TgeJRpTmoVjiARjMrC9EvWbQRC4n5WLTUFGeRX88zxt3U65TRwi2K8LtzCRo4Ppd4Kt47jbE",
  "key14": "X23PkBQLEAAYGiZbxibMFk8qyveLZudkPbydPUzC2Pn2kHgUhJ8x6uUzvbCAHicFbxVTvBP3kbf9GwHV2dpfZBE",
  "key15": "4p536kpi9LEKUnuEKiyYJwC2XKukmuRDeoHE8t1LkmjUuKiCQcko3FUamttxyN9dfstpLwx9NnFeXCj63HKzSxLV",
  "key16": "2HNa1GSsSP4iMfHhEQj46NQtVD6TUamiD6bV6cXZDnTxpZUB1YXVvcswTUTHtsUbswchhEhiPNQ9iwb2QQLhpgYg",
  "key17": "3cfRJWChoZN6VEeDfzgbWjByV7RXv64wJmaSETkMA4yqdNaeQqDCSpix2saDTzsWeBGmyJ3afVYdutYsKDq6Z3dg",
  "key18": "2LLwmnU3AEzTjTsH3UFsX77JpmYk5VaTdNpEFBvmaGnqeHvWAbBPhbu5wbehgsbh2ZnRFHEEmauLkmkurVY7c3we",
  "key19": "3GgrewQft4o3ycdBwr6vVjFYXjv1DP3TVGkwpQ5XL7MUwzgfHXYxmZaGjLgMZ9iVvfMnEAXdrdsFwEykLDe7yVF7",
  "key20": "3isfq3jwKRhr8aggzeHuJVjGLCJ67mpBxSsg11Wygetevu6FA9z26doJtr8jSRRF8945h6mSPb59pswtXWEjPxw6",
  "key21": "5nUFKRQCFZAXC9pfZbxszyySnqaiqsGKrp7g9vk9rtdGx4hGV3oD6j12dtWaimwXbMUSkcmHPER3Mr48fW97tmuW",
  "key22": "pv2mnDxwJDZVJpkqsPz94dqWEyJkSTJdHAshQWaFGYLbYJPFuhz6nXcPKnrdHNusTvnHww2Ta9YVonJNBsY2zv5",
  "key23": "4McoZRqds4yZrSThsbXDdqwGV8QEgxyoD9r6K4YDsiEqjMVWkGK3CyVhSu42pXp5KygL8CCcBCtSkxB5PDfKK693",
  "key24": "4BLpgfh1QLXCR6RBuqYUnHH2YgfNHTbMxBX8AZ3QcFF8Hj68p37TUSaxuddep2Y1X9rysurWf3Jc6WytQ6CEZHYK",
  "key25": "5oHnmcS9PFZ265V7SLxsW9wtUoXF8vZtXZ2mo8bizEPuvdm6AeBbavnhF5HaYSqboKcENztpA2vZHz4JCABXbG9d",
  "key26": "4BCz4j5aAmtc8EjoeXw51nV69vABVeTyFXuDrctKXnwTtrVZwEhd1NvEQhvR3j3Q5XuuVNoJgNt7mzCiN64LhJqQ",
  "key27": "59Cqk1oF7YrjgNk5Xn1BU59esWCSJEwg6rX6BZfRM3DUkZyFVn3DSNEUx9R8sUYPti3Z3Uq7ZdV1n3mEGbPonZQw",
  "key28": "3YZUxjVhSohrdr3ELaVdjXy6KoevcpASoHW71d43jn3d8iMFH8vrNtuzbJe6JwFokp4T1HKEiQ6FU5qcM2eq3qYt",
  "key29": "2zQPfZjrZFL8hE6TTypwKHTSJ5PdeMMFSavQMG3zcLgNQUT7g2PsYXfvW4jx8PXbrFyVwj2fWV2YoxLHE9akqafd",
  "key30": "5XY754BdupnJZ5ARbxTeYnN8DkWKhmkaFCzPVr1Lfr4zEqf3RdTEYc8UQG4acpunZPL5TxZ8gbXrERMbb4Z3PkhY",
  "key31": "4M6Wm2vBdrG6D84vR4kz3jFJPX4cVTrgvvNXEpgHST7h6bdFo4VQrd8ybikt6putTbvrLUw6RGrp8Gp3S6Xj7XtB",
  "key32": "5EojFA6dCnkKYkgucj8hWug55QBTHHA7wT9BJHgdRB6H1ZPisaAFaL3hx94WKpMPhdrBhiyycCCbPH5cWjgo251T",
  "key33": "38PYv5id6UiY78DUJgycJP2qmf6ka1eQYuRMbzFpob4hLttueeM33xaRA2kKpzXpEaYGJyDtFyjzG9aaqgWMd3Ao"
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
