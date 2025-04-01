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
    "3C6aZt1AGJqHtkaev1gXQHPgnqDCdgxX9sS5ypsWsXgc7B4c1wRRpYUxr7PjyjoQiqE1HYu72wgYyzqHQhKBj3ew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VYFvPYqjt9FMfVibq88Z5SGHDccbSKncbysa7a3KZrf2FBXpQtQUJQ6kQCKHQKzrhNbHzB3vkeaNuDVagXSqFTy",
  "key1": "2gQoZ8pCHDiFtEmW7i7ENgCd4vuJiq9s9rNXTgdjHzbuDKsC1smzQs8w5uqUtifuztN6XBbbJf83w3kkHT4soUcK",
  "key2": "FPHwyiqjDnarbSKPYpMha8oG9PPXQfRXbiofv1sQ4PwxiHJtRQGDkae8j1sKjjBUpzwzANRFF6zughJGESnbgsd",
  "key3": "5Jd5cQ9bKE6Q3SqP2hLDpbwq8rKw1HGwiH5Bnxy2KtV4CkxtXySUCfy9FxMKwzSQPSfuCGXqvCqM58pvsAEtmDwk",
  "key4": "2kaZhp1R4vBEeZ3EkjZ6d953y3w4BQ4bYcM2TKm174g8JXCJSLnfBemZMFbduav7ra5XGxpjfH84mTE6AcVERA8N",
  "key5": "5rhMWfQJeJKK8WZQAHmNFS1Wtvh6xP4o2vDAbudiyShur5ABiC9yyiMwbMoub39KYLu1Xj8GWvWrgwEJWeoCeQjU",
  "key6": "4zb7PypsTyBzZ8ACYmBn2HudB3PA5fhxvpMueGAFRM4qv5H8NQcKR7kxdok9RpQQCHcnydzdRaU6U1w1wFGHQReZ",
  "key7": "3E5w4mkrkru8oEA7sLBwEeXXPmhamREnQe5DHucpNpNwZHS3EJZyf9BSUxY93kV5pYkgtHjXaTUofrmwWF3UXBTB",
  "key8": "3Rsc4w2YXYHwdU1r138xX6uvz4cUySmUawmZEXKibWQ36wnnkA3gdKcsCkEJAPq9PMMLDjumXeEhAwokoaEemZLb",
  "key9": "3K1ofZYzdfVV2AyyTNWaffbKLVUud2z6msJpjP78QLdJqcBtGRUBX2PXiPfkYMjgZFVHtUtiZSdL3ahWJiugmxJp",
  "key10": "28CC7T6CYtSpg4ZYuXaBwwXfNmWeyovLnwTpuh4j51FwxR87VyNJa2hdLMPUiTm1RR3H2yGeQpNqqTU72EP8DTnT",
  "key11": "Va62JzvZ8JvVF914Pvaan6P1qW2r56UQe9AG6SELrhxweUgWkLh5BuG3KodEwdPjwmuG4v6YBdaFPUn3pUMw8Wg",
  "key12": "2DUDytv1DU5qanio2DvAtMVYsYPap7K8K7et2QKmyvWXqmRvAxeRkVa2NjdYJ2Era2GC48jJuq3B5bzZHCrhggsY",
  "key13": "433vo8QYUruV3rm4HgZ9tgx1uuSXgb65nN1Zgsn5HkgHxqXpsAYjSyvjVoA5QbnQCLJNpA9MFPN6umqcE9EHJVRd",
  "key14": "3GNydWrCZv3DLEmrfbHvvMxsULQeK4LBy21uxoRdQLBjxqMvHBAG13Aqzif6TgX6Wz1F7S4mNfHQQe4qbuiTdcF2",
  "key15": "5eYB61uizKuVfkg6CLfcUxV32oFg5vBAs4DcWezTzZNfREpXRRsJKTZc8joGt4FQf142rvPkbPHhg1khhvBkTpiK",
  "key16": "2UxeCgDAP3EE1dhUyzcsF8pGvDgBbVDmYDT1j4LT3wjFDkXmihsZQRwpPUazA2ErNf7LVKqA6awksEc2XS4o4h2u",
  "key17": "3E976GGLksTez9J1bSYdKb8Ljv6qvKFddoJYWfGxK1F3XUYqux63yHkDm54KnGbqM5QGmWdQkLMGzY6LFHapDBTe",
  "key18": "3dPhDiZLRgyWD42wsbWUrShkpDDQSFCmrVtirC2St1wvSaaa8avaa8ms69eTFkUzvcZojufXRjqjcZzXLAxc4bjR",
  "key19": "5Azun6CgFmV3t8yrYTTSKduUH5TsHimdu5TyyqnjP9ztCuHRJe146EDzLB4r4NuUDCZktsR5Pt364TUK6yBQXADm",
  "key20": "2xQTb56L2QRCYHh4RDKHWEP5R99gBkzk5EwjLF44aDCcxSHgedbfjrcxai1mXTfeCvP1ekm2rRbHvPKSpDjnyUnF",
  "key21": "SYjUjseH57McUSebXujjhhXsvsK8ihMq8WBW1N7PF3LRUjB1o7tcGVdNRZge7yVQ9NiM8SnSQUW4qodimCnpMz3",
  "key22": "5qNXGARP6vzs2ZR9VxCgTQohkH7A6djoydSYQQiHPuhqCqBYCrsUsy2kf8MyErgfYpCw1zfsHHDQb59aXsZGpR49",
  "key23": "4oRZ4CdTLXKXjkVcWy72vEX1qo5AC4jFqYWVxpCwtAkFc4QyLs8onaj7teybMVBjfGcf8JCPuGZcA7X4hnj36KjN",
  "key24": "3ikqEP53zd7pFbUK8pPLxKidUKda4PFiZWRS1bx5pJebCsUQUVTqLmdiMRo7MkMVmHCzso8vgZYSrK53dJp72SXJ",
  "key25": "4zqsRqVXWPAeRfVzhrEr4RurmMrHdoZMh9w7BGA5o9AabkXazos8X7SroMCM6qfoWsHBkh2L4y5Nq3qNYdXqNo1E",
  "key26": "4HkeYnr9rJ8EzW2c7oj97SaLA4Gvbfm84uroHKuV5XGVgbVNCqvuro99DT9ifzmTw9zaEe216a2wSNEuz9U3iEiH",
  "key27": "4ZD8Q9tYKuoSdYzYsiaoF4AbPiNZCEu2yaVTMdUQbHshxJAN5mkyU2N32ps9zZRYue4nZ3fZvfSKJbCm2bPouj3p"
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
