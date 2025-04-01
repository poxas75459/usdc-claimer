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
    "3V7NJYSuHCnGJbAa7txBWLaX2HU7bFbWmUVhE6kzX1xmGkUHQL8ByFJpPoNSTVEsbnfBeahte8JuJ3tEfK56KSx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CdUwiwYX5ju3Exu39F9xFDKgveEXvRAagVxY2YDMpnsFiE9zv8Kt8YPVPKB4g4ifN9cgmCj2vouh3H9W7vZuNhg",
  "key1": "2XCHNadZfJnFXo6iw4juKLh2WfYe9dKvcZvgd1Er2r1h3kNy2PxKChbREf4xFAmRBLb9Gbm6Jha7ecnaLpA18mrd",
  "key2": "54KCND5CCj96ukx3n7V1wUPy9p3rAeAS9E5vxwmp8Qjruj5GtC5zTA3hZMfixz9udJ8UC1JyKzcJYDJQiS9GwJDP",
  "key3": "3LpAKhNExqufa38SkG2LeAyMQpc4ZPMP6vnt6p4F3JhURiRiFz5P2hdpSM7nbMcitsWECVX8xpZADpcmVRri55vS",
  "key4": "3gwEKpLV6w4iADtAivvMEVjMwvBsADvzaPbSD5gwuT32gxaauFbL1pdLk9sT7n3MfGqtRPvi5n5C2V49SYJJZ1Rs",
  "key5": "aEVLEyVsQ9ZpTLmtAqfMS7AfTyEQbku5QEb71oZ9r3JbXddcX5qka7FhLGHaLjjuWBsWvbVsdsdLfzfnTbBUtS6",
  "key6": "3deYn8DYNXKAH93T6d3b9ecgXhQPEgUNQiexbB3YaftQxeeJ8KUgaPZ6fKkSSQiAwVHV3X4kfLg2msbLF7atPH4v",
  "key7": "5M5ik7jk7tje9Fj2of5WfSADrbg8v8UZUYN1G2d9s29N5g3KEJ4A9V6shiJ4KygS543MYnWyukrhotYcKbYLVXZn",
  "key8": "5CfDyvxcBAjJn8WWaUuYzR5YjZyR5trD1tEh9ksDS52b3GE2MW8Uovg5sKFnqBe1fEykF3AYisYk6mTnue12NkTd",
  "key9": "445566NunrVbCBAtV7jYg5bC3UDhiuscuygUZ2MHataWXgQZvXacR2cwPHLv4j4PkUKE8M6m8nYWYquL1h3ipLtK",
  "key10": "3ULCAwe9bB63L3MDBkrn58wUy28utkoFhZajQ2LNapLToaNPo7W9V6waeDJzAEzFZFSuQv1dsL3okbzDi84Xdnax",
  "key11": "3VbDpUPo5cwMVVPy9cJ9o6SYxNHHbS8mD1wttqwUx3XuG79wwDdXKnvnphyiy9HcS1QdkR5Uv9imwdmvVEfbfgm1",
  "key12": "4ByKPa59W3SKLT1bxPvG2iJJSDajYtoPKVQCXwGtQKoo9N8ySSzzaZrpzu5Z4fs6yi4QFejMkm42efD7KnemEVSG",
  "key13": "2TrazBjhH9ABe7us6kScfwJAYxLoJ3CE13REragCnoYvGhLR4SGzkYiAUgqb8uBtrSN8UPKPYhy19uFhwANt6v2z",
  "key14": "2koHJJLAqdFYkXC2VUsPdzotkEMmJ7EzphtuCWcj7eNwipNqhgUoRmp56DXwCqyDeAwwK4FRzk5nbLq9cBBWce3Y",
  "key15": "5amQWE5vj6MDmGRmtthWYXhDA4SFwxDdeM9ZEQtzubR1QwH7JLdWTosdUWAohZjnimmhFeBcDo9RBicvviie2odw",
  "key16": "24Dk2CGs9HnZowKftdSVE5GgZZeWDiAis1AJJursV3aRWCkPRB9jhPPk3T4tbj3hL9L9kpGN77yeNzckRoCNUu3F",
  "key17": "5hrBXrhW6kHWcQcv2jPxXCmX9g31jEwoy7drUoaEsjAN1Tpnyr79M2cXmCESfxXj563685BALpMB4goi84kmmfH2",
  "key18": "2ReAwofGgT8KPUvwx2AKWS965ZQFon687qtxQUHXhiacXDLvKLCoZFWdocB2wHzcB48aB7ZwwBXxd5RbPw1d8jQj",
  "key19": "Q52uGE3DwiPWQj7ru4EzfYtTP4T2fpJo9oGb1FGAZ2GgPmtcQivMfMcN36dPvqKwpV67NyVYbz1iFdEetzAQ41C",
  "key20": "4t4FTfJCkxzfHMGRXKWLSa1z19VK1Uw3JbYEKnEfyqggqqjQZkYFYk1N5btwcVhfVkwLx8haWVL88zkkuUnbNynu",
  "key21": "64dpNmhvLqXsRCQ4q9Cjc8TmFPHBJkwVR5SidqPkarRZFWA2dUEGMK4YWk8nFhehiGepnCJSTXBPgjjcDn6ZN6e4",
  "key22": "5vnrKmAzYWuhzyz7LnHbMTznL197gkjyrc2WG9FwyGJPCmWYGhpKXKfWWTdqWAMXGUP22KgNoFVfLiQmYnGjS177",
  "key23": "4MJiD6HrndNCpmqGddYoUgA24JjxFAtKjiCBcdn3KK9Tv8VzqRuxkpnZ6EvFaRij3KYU4NFBg6avkXJcR8m9wVmS",
  "key24": "5hiXjLaAHUSGtoPd5c6bY2n1nqR17H8vT4L879mZSxV2EqGpdDbrXfDbwjhTpRRDqFs1kjCinqhVNtAagPnEGNdX"
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
