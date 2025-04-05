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
    "3Lzyvd7jR6wd3k3JmrZCyUzcSrhATjwsYU8TiXVHewB9W8bH3FmHBUMiCuuqivvqkqP1ZEu7AWE9ubPCewLU6EBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67iW2SzxsftehEB2sCUNmdo7xFCnjndw78Sge8XT9h6zWuMzhTXQMFepcjaxCVW6oAhR8LcByT7hPTyG9zC1Bunz",
  "key1": "2mVWghnszH4i1uBAwYs1rT6bCpQJDxiV2BuoqNYU6dbKaFnisXgEnEYJ7vWAxVBwHhfqWyq6mTWfKHCYEftQNVkP",
  "key2": "2fnyhLpLkbx2zQGGmG3gPj1oc9fUPPUkqeuZpzj9zFiEkxxsyV223itYcmocA6QjjQZQJp1YYJWAyKxB5M9GZkqW",
  "key3": "4NyC3U8k5eZemTCJETdgcbH3id3ait2k1rY2TjaNz6PLzV27LqXMeag6LekSh963Zp6KrMPihYRuB2SK3eNN6uj7",
  "key4": "4pyrHEhwG5QM3PvhcjkdtQKXcAifFnZdjPsyfrreiHbotGj12zrT9VpM8LfFJNW7oYXmGux2UwmVLyyKc7rH6HP1",
  "key5": "346zi4Hk16dgGxFeb1aEP8ttYfSvowGubzmvE1mDY8HQVf2xckmFYj187sZaZjqpGRdTVXSZaV6tvECMMyDT6wCe",
  "key6": "2Sc7qs85DLvLkCLBKy22FfaPA9PYTJGKm8Rr4XRd8fKBJ38FfP7wywe2ASMMSkxw2HTGJszjVrnoTE15MBPrcpyH",
  "key7": "Msh7qWyHdXukhu7DoY37Mfrz8WePWsBKVnW7eexrSRk9jW1GUhYYSSsiqJS2Z5ce42qZ5v3DxyQKvfkGQp7t3jF",
  "key8": "5w1Wgc2xDN6Njbfq7aLN3uGekjtP6npTyLu29cjhT1Pmf7bMDQYBP6iTU1MokhSXe1J66MZpoposYLPnEzJkG55j",
  "key9": "PPo39KhopFuzQV3tR4ToVhUjGEYDDeAQnYyU5ZGkLSHgMH94LjbXDisgpwZ4odpdarP9ATKB9FNdeyWqTDddhoa",
  "key10": "3RVuBnkP6xDnqNePfxw2KWXhBxnxraZk4KAt9Gh2zemwPg8arVpUMQLTTfigPhpSCiRASXjBsCXDJNKtjUvPpTCB",
  "key11": "3kgEqdkgcsbdfaBMrCRVbe7aNsEyFoLUTLevxJWuXUKQGvF9S4VzK8vNEfxEMkDG72VLDE6TpypzquuuwmpYfkQ5",
  "key12": "2tLn5FsEqjVoawt6DfuA8tU5aNqhS1YcP2RQ6hRAnaGVvutzUR5gifqjTHfgyiQKfhKTTUQSeSMwFvZgvKgxErMM",
  "key13": "3pbS2zHMa95T6rXXLwAMeqEjbSYnLe4Zf4YnDPb1GcNbD6bdfHYwHt6hWGz7KMCnMVn2dfDrrg8EkK1pJZuabYyQ",
  "key14": "2j4w4RkNa6BMiQ6rt2u968eAmPvhuCNpwrAVYz5B5dZVzd4vi4Xb9M9ogyjzX1S2sjGyy4gWEERYCiqCcResdoMv",
  "key15": "5ybsi2KAdvtyhwywi6h9ofHoxhcUW5j2TN8XkdAacMQXmrFUTNfcK1m7vnohBaD6NB2UncPMuBwCKU2ozNmS5g4q",
  "key16": "27X6syn8XrHevWAhjX6nz8JebTUtuop99QFgMxVnVZm8PSzHo5BWZ7o6dXHiKDKqEWHta2JzdS1AittQoGDjfA1f",
  "key17": "4Qb49WF7kXBjCoaNsm92XnCFYeMHcBn2CE17mtWsnmzxY12kvrhX2iLcbNiZc6KPrkJSZok9i72WHeUo1PfqXaeV",
  "key18": "5hgrUiHjNEKo9qAvcBgzsTEBTgjWoTvr8gy6kZnXrLJkypVDWzZRP2xrxcNAwVa1nFG4q4UnV5YC7FAmXwu8kJ3N",
  "key19": "26LpQBoESMkNEUJtLkWd1F6JevLa7eZteH6HuqQBQ13hkDZeJnRYUQHEF2JAuDb9cR7du6S6RDAGbqgNC6NrPTcz",
  "key20": "5YM82su5fZvqCEtmCWiuHeX5zx1MMgeW1Cvcpjs9wthj1cQgRzfpQv6Emqy5h8qize8RV4vsaBT92a8B3h522pf8",
  "key21": "5Bfbdy3xnLacUjeGJwUWsPBgD9unhpaHAUpYtn69bVbRnbrtp5e6z5918muJmYWqc9ApWkYQir7YCu3vNuyq2J5m",
  "key22": "36LzZQkoe1F1nbqjcjYKcCaECzYjtqMtm6UNb3T93eAot13FsGnTWZGTSVMxCZ2MRZvtDEhfV9bv8DYM4P8a1ypW",
  "key23": "5QbTeoM7iAuHkcZ3pfLT5j4HP3nAtYx1tvC7KrymfGvu2WVaWeyDYHeTp2Gfu4zrHoo1KQtBSAhNQbi7tpdQcavF",
  "key24": "fdNVxVUiHiU4rJhUmRTuzheLmNKUvJpTgA8jLFHHvZTRTsYXtEfzo74JegJc4DFKb657JDPUs518Vda1yYZyndL",
  "key25": "2DUjGFHZZEUNyQh7j7G5A2Z1iQecaNFVNk83T9KfZuRXcsaiLU7DrPxBrmtHP4K7saVhruzZkuVETWG6Z4STtfXq",
  "key26": "39XdCho7uQDtciaYHWV1F6rR7jUha84CgLEKvG7YaE9WkzThaatncPwzKQq8US99mCgp34Cbu3tTnzQ98L6HCvZV",
  "key27": "2fGkzrt1wgwPWWfmYkCrMcgLcEWYk8Sv5LsWhuWffzt4vLc1XPY58qN8L3damPaKBxBr3nCrV2xHqnqKpKyk9Cy8",
  "key28": "2T4DzwKGzYQR3eQAK5YPVvDR4ExBTyb23DSMpZtCc5FUR815RpbH6JF3qoykXDs1q23ABYVRmLcXk71acsMPVWYF",
  "key29": "2eQBRyRetoz6gcQiwe4U2e2Gtif5rrU8e1LHff8dNBfegYSw3VGacHjmqmA19FAMUVrk6SVp8KwsGVkwuv2mMYnZ"
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
