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
    "4uSAUr2eWZRnqdG1peERnVLMARrNwnXvJDuHhLvqgrEdfQafmus455BK7QFwtpvtuSKnc9FiDMRc9hTtQQkAA3FV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z7c8DCQSnAmzxm8AxkuKTeD8f2WjPZyeEHmXvCGgSp2uDvC2yYWwixmBcyLmbCV2XzLQEmi56K6toAPWcW19Hy7",
  "key1": "4P65Dxc7XEboML1tuJVkXhHRF66K1ovFLHC6tqnEkxmkoj6rSXSLxGLTjWPNQfK5XMcF8KMR4oDnbh3FY62wC7Yx",
  "key2": "52ELotFyFXXzqTcRG1sdSgqbr9QW4uxBPKBxNCWadBnDt6JfeP2iNdqX2BX7EZKEhW5L21oy9yd8TLtEjH2aWo8",
  "key3": "36mwZm2kE8nFQT8rX2tFpMqDugB7VU5y7D1K1z5dkeehLLjkx2isLTH7Mtx3G2w3FEhPhpvMwwJNc8J5H3JetZzb",
  "key4": "4fpKEBLCY4Poe7hu6XXmmjjWo8vYrx7UL4W5gzq92mMWwtbNrukgsBWfLYB2BZYwL3VZLTRSJAdHMoL1wYsP8Eac",
  "key5": "2hHii5nd17ts8LnyGmoKyVdumN1qGBHeaXifWRJoCheq5Pa26SS7gSh4vKhvoRb2y8PQCEvpX2sesvhpb8wGZFsC",
  "key6": "5ZUEefcAtxGRCWfevjLQ1oKLqhrFkCbUj29rd3kWUZj92XpzEBZHmFcejvhD5Ks4s8HguEKFigYapABhiuvLMZ7G",
  "key7": "2Pyexvr4aeCv3rYZ85pPcrCgwMxjPPAE7xispUjvd3UNE5VJchRxX9nTjDmV8MjETT6HVeaoAUQ8owZNcfDy9rvf",
  "key8": "3RtY1RxQ57UnQtgDkU3gNa3LonwGPCYJgvR9JmkCA4Ub14i5vHWQNXab6AAA2PWbUawyYYi9HqjoHTocP5NTw8Ee",
  "key9": "5rrgZyTN2hHe3qks4zSNCJ7KZZGsSs9tPqDZGNZNGYjsHa3nSR1o1e1yEssrTdsgmB1WV8D3diLLvzdXBxTe3fBX",
  "key10": "21J2kSiB2ae7AuENmpp7aZr4U7TsMkNifXKKv89sGji9JEN7MjusWwFeyFhQqm4B8rbRk7pfpHMktnQXomBcJ7PU",
  "key11": "2oyTK8QcVqvLUCekaBRgmtBqLPfpGGu6CSW1XxDJrvgwtwedQJX1osNwssYmiueTcmVcwKiUFTS3pxSrsTsJMad6",
  "key12": "ksnT9ehFzDPEREPW7zqbxY1goFyZdeDJsLLo3v1fqrF5v5JHvcYXe6Ugz4bXrXMmmD16zg8iZ4okEyxpteiiH7R",
  "key13": "5T62DwiHWRRtWDk7sZgTNaiaPNyzeRzaj4Z6sPDq5sCarm7ABJ6AL8wpX8P8ZEkYFCC7n7tk6xpQDLBR1XBbwoSd",
  "key14": "2fD5cDq5H4joQQv3aSAUR3665TcU3qK7mN37tFKUtTfGvp4ZpLtiGu1jwG1dxSwe2Pu9KJXJuYNVqYpeCo5D775Y",
  "key15": "2yViDRvSetLyguZENR7jWuZdW6gfUariMHfqjwUVvfQh3zH78CPG3TU28kt5KogLjcLSNaDwooK3aFnM2PyH3xhQ",
  "key16": "3CLTA5HqpQns6DyuVYUHW2XqexHyY4dodecQSpYH3SeM7BHPQdPtn8w1ZTmGpG6orxvA87RnqJnXbnWfrpGHnRta",
  "key17": "3f4vz2tAVTafxYFDAtHycFxny8wKaHgZedkuCFNL7igqVk6XCkLtX7L6SvKqifxHZVxofspT52QUMV5cEWbnWYGZ",
  "key18": "pB4KDyozjQPs8YwW2Sj4RSpjnZa2z5S9mPqAk64bcVgvDsNzLqrYDfGCxHLVbLQnLBspmcr9Fh4SKgk35Ge9enu",
  "key19": "2SRYJu5D45AFyiFhzHmKgZDrQityW6ChnBNvtiTmh6z7LojxauEtbw3c8fNLTfVYho5V23gTJH4qvD4Sy2aoE66P",
  "key20": "3YNeE93cmFWwKUZc9zLLHEp17gz74YGdYSiGQmwSgvs1QNDYMduNuj7r1rag9y1v3ayigeoFLHT5yg2bmKpC16rK",
  "key21": "3pP9PX3qcPDyLDuUyndeMxrcMgNUQtZVwHdnyyPmMFGmi71zRrXz2Wqfj1D4uHcaSALp6hJ5iZEwkmcwevNRpvee",
  "key22": "5fLD43PECZo5iM558X4XnRb3DvWnsoRyh6hL2kVw4onERw1FvvPQHQxUCywktNsCzzLVMYPycAF2yJsVMSdmqeoH",
  "key23": "2BZhoMNy5PcVGZBNxm1sPpMMF6G78rFqg83wgSfDBuPJ4PznKf84usB6wTqNztWGZngiSaeCF5yqwcW6E7d2Tmgs",
  "key24": "2VDdvuika7dQJrBVNusmNUjXauq5sq9eFz2CxEPHtaPMMnE1G1bePXxZPb3hJEVAK8ExhpHYKCAdzoMayQeycw38"
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
