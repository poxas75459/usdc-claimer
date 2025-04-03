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
    "4r4WSe8R66zGvJADbhykimuuxVjaiRdZ9ZtCfBywFC79F4rK5SbsthXWzmB3P3HLooSmMVSqHLJ4GqYBcyDMiMU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zarM66EZMFXnFG1Z9T27NLpF3k4yc3xd9R21qZVFSz6mQQzDKm5RbqvdTYW8FFWK5SKtgA3vvXV411KarLQpQ8r",
  "key1": "3JhbLRqur7UNGRQMsgL2GGzqdLV8NxneVihyfBZoKeBJsJ17PcLYE9khwLiytdSp8fTknBUVLpHkA7zM4vDVdP5o",
  "key2": "3GEhthrbZ8HmSxsfknBkcGobs8x9kx1AUnHEibcfm5cemQuQ6tAF9tvoX58hDAf1QPeEuLsUaUpD15uw6RvG6iQB",
  "key3": "55XQozULcQcYaiAQdJ7tnxZzAd91UkENEBoZz66n5KEmRyGQEGVh4WRmztaHE6Tj2bwA2bA91iCtTY5bdtZV3Quz",
  "key4": "DVR1YXdrYhmtYbiP9Do34NeDCBvEsexAaDrLq9yrYpG7WogcFe72Jn5sy7H66Bx9JrfWpzg7wxWKc9DnrnJTpk5",
  "key5": "2swqcbmEXXJqgsM5KceGieAmMP3KZZpZcJ8ootDG9h3keWPpWCRFSdENQCjBGYKbnDDCnqRDkYgv5Cvozq4BZQAj",
  "key6": "3T4N1QomxLSSEbTHnDFaGe2zqCBHWfXBT55P5izj3jvjpRshgsKJvh6Zrz5m9wixTrY28UoZ687KXpcDHPCX4zCi",
  "key7": "3V8XxPXiRioANkGCTRzBmTrsxqeM3MUv2sqrks3uBHqidxFaTB5FTNL5ehd6L71AZgzop7B4E7sMiZ5ASEEHFVSc",
  "key8": "5RsyHiE73t9kCMjtasMTQ5cgLZzD6iAuJL2B25sKSs4C2tqCpYvkuT3byqPZzHgjFoKT9gXQ9tysRUD3xNyVrs1u",
  "key9": "aHH71Nb8w53cbUn3YHbWpM6SZs5qBwWmwQKYymapxkeL4ZBszGTFru8YAAFzMG1X7zaPQTdhxYd6S32rgdcduSe",
  "key10": "2DGdR6GZm1jBE4mzdAXAYtEp9u4y1jereEA1EpWh2STU6f8mXz1WAm1egMfcs5Pr4RGwDn25AgJvj3pFwHinymzh",
  "key11": "5w1H7FMxRpFE7SoBWc87mDooAdC7mEGbFAfkGgDePe2wgw9xyVeQVMuNn1mymbYBNptutQ7tRUYB7Nt45dgMH9jC",
  "key12": "29VSC1oG4A2eYkRYLRWBx6dKaGtPDzmFhpuqNS1LW1KEvRU8JbdTRwDTMkoHxfztUErtf6ggiQ3bQRoyXXzG8ftz",
  "key13": "4MZxx9rMKrwUxyuq6bZRDCtqW9TR8U32MzDDFxs3arLyFG4U3YjGqqYRtGmUTfem1k6ADhPNXwoZhYfjH3WLym92",
  "key14": "3WgWPijEsMsr31sioaWMj6UmkBPHVaRCPAWaaEa1h9xUhezBDFLLWeA4Pj8xHiDSLyz9kp7u2bfS3NFmnbg4qn2s",
  "key15": "2HjHiJ7wYbrrzcNgE1QRcWQUsnU3MSU7DPjrJYBVgUNCXdL5McX6GjxLRv4LwwfjUPMgTwmZnyzsnUi5Y3KMcNm3",
  "key16": "4uayVeCHeq5EtX8wkZBbSgTdkKrhZjdnLHmam3TKQZZqh2UTQfNF95XAg671PrLEan9XR2jUxcd5he8djQxiHcAg",
  "key17": "2QoqVRsa35G6MUjwX7yMJhgFS4vX9CZjfXSpgwyGgz88cQQfETXnWWsiehp6MKR2fWbSH5KPgQbBWoKJDUc2TAiB",
  "key18": "HKY9b1bZpgZBeJHJPMhN9nJ8RCUM9SgapMpKBpxGiZxbFaBmTYnemqdWLQPdw5qxn4GV7JbdZiP65RedX7gkCbj",
  "key19": "3h8pLVW9WPTxcQ3ZrNggCyZK1nNsEumaECsyn2UvD6BTBJFG1kNQ8tFhWa29SfhvydE48UAGVjY9qJ9UkdEYwG4d",
  "key20": "smbaaLTNEK9gZc6F5swdsQ8EJjuSBASFk61pCsnVHDrSZ2zUt1x9mZCN4pipamkvTrDEdQzwrbrKXoskktGfPDS",
  "key21": "5LQhPoFyciMDytr2bRsAHpeSY8Zb5CWbmdVdFExZScDJTNZbLfAYB8A38VnHW1Yca32vRmZgEu9pMcrXi3FT1kqM",
  "key22": "2QysPX3xJerw35Vf19dvvN3gFRu7JDojrsbSKfN5TaTKyYhjhbBuQP8KgVvuaBYcdsD2stPAZpmRjdqvGYRwhoME",
  "key23": "43dxLmLv5XdPA8n8UVU2nrDVPb4Nt716BRciXTjBua1ey14u66duXWMrB6YM6pybgu7Q7g6VbiV6ELmDwjQeN8ss",
  "key24": "C2r9TvjrGPXWUmoxGogurec13AnNz3LoR4Wf6FxKfU4C67jcReuS4JEQgq9rm7aJeZaSFbnHFbRmG4Kn2NxhvZ1",
  "key25": "5wiLxXSNby5UwS78JkiUV4pyi2pJXW3YNvM9f1Ax396w7muu3EYS1rPGjzPiBGfDFtTYGiMKw2SjYdSHcs2s98Qe",
  "key26": "3yvv1JaNb8k5WmWqa4ttBKm7dGFP8qCTSrc2Y73vsgaUCH88B4AvFGJg4G1GKdJ5Z5Ahusur81BEQ9HyGKV9neva",
  "key27": "22kjRQLZWupaYCNgN3A2LL8x6qJz5fjHnMYhk9T2zzJ5aZ3N5apdmiAeqfu71CArALGHqHxgjfQuYxn43XWqMFXv",
  "key28": "34FMHpJVmyKnVHrTUS9v9svTDzPCPPfp7aUd2qAT9MKB7iDjv3DbHczsp3PHkBB2DxB4dqauE646geZyN8eqLS2q",
  "key29": "2x5ocUGigKyuAEUKpZm2E4Ds6hJfMzN8Ds5aiXGkeqvmWASNKd5jFxWzxVKuNoAByA52QxwPxaQCFZ61pTVXk9h7",
  "key30": "5XuHXb9HKjtcr9Rc7KKiEnRUYYQvL8wAVFQwjfL6BdAbTf88s78sMgtgMuA8i97KzbgzWqLEyRucreEdN7KmQhXV",
  "key31": "4L2wWdQBFQog9MonTwqWmnDeTiXaE2a5gDNVEsNjysnYtbJsb5U6Fvf6vFTkHbtYk1BnY4cBhwkpQYgU29f6bJHP",
  "key32": "5WnLiYn1fjT3gJY34rDC193a1u61oAjSuyJcXxNy3hGhAqhC2DpoSmCxYNKvRGhdT5VHSBBG2M2WXJGYrAhaTjn1",
  "key33": "3WAExMPKUuCAxCB8vaWzMwZsgymTYoywgGxNEoRkrPf6tewPEM8f8zVifWzUZzUft7FW3ciGFVmx3w7gLmhQb1hK",
  "key34": "3sbRs7yvp6pyi1YG93ZJ8n9bfStMPfZS9mrAVCLwwxuNi4zJa6WQFuVKErzEu2zeSbPr1FE8g8tn3gVh8wjaysFn",
  "key35": "2qZdnVKcZzG27HK2W3unK113q6ZLMXJwqFbqrmwDGA4vLCSCDw53KH9RCNuAQZdspuMTGdN6TajnZsZKeG2v6wM7"
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
