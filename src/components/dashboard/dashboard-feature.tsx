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
    "4WTKgijmxqanVepfKdrRbaXm54erNtzaTFvVhVk2uveFWAgUoswpDW1EAFtFVSPY96wwwgtoY5THbv3pa9EaLUiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27vgn1hrL8vC2cBCY9abkYDMi9b2yHrSoZJVmck19Estw483hwqCtvP4sjSFdVy4AqBGVkVJiFJPH1oy5PUQ2UWw",
  "key1": "4kzbT2wLfdUqmUaWdYL5pMeSxoXtRe1ggS9yUNj5ar7F3PuxATZfocG4uSiCuBcvSrWc4nTvLZ4NAiGZV5bBSDRb",
  "key2": "4zUWSaxCAYgZiUwaz4bH6Xq7wsCmDJib3pCwdwmbHi1MaMVEeERkVjcMPwFTLnQF29xqc1CBRzaod2SZvguUc5rQ",
  "key3": "5FZGLtrEkeJxGrwCsjmZSqX7hHHjDyYhpDhvQKr3saT3GqThhS1bcdewSc6whJQWkZqCxUphnrEAusx3ZAHU6W4c",
  "key4": "4rU3sscv1iesyoX2y4SVMFmdppZos8PoNQvBrhUCNJ3JUVJSEHEpxFQ1bHC11msySdj3WTkgBAkJwUJaeQov3W9B",
  "key5": "fcere8f7V3rzkAQ4VW1peaLho9SHTn3WbivcbX2e24qtL4jnFuKAxURzxmaZSckTb2e9NErXJU6y1ggVY7TLkce",
  "key6": "45V4oEmJSZygj2hLPFVmbZKAmu9jbtUAWYWgvoR8hZk7LxeEnCnFdgkk4s3xRe9RwBxNbokL57mxcH3w8SPHWvks",
  "key7": "5hdsatZYmTP3DVkCSHH3aJL8PjpTdmgvjqDLkx7VDf4fSuAcFEz81uyKegsNWjFsTmcDnPQqweibXYjuMvjfnAoU",
  "key8": "3yJ9BztCkQZLpjHkVQhQJtZgTRNYp8SPhg6onf7fY6qwyW341x1ufGk1hVVKsXJgW4sM5buiqFtvsnGVLRWhzs2w",
  "key9": "2oZ9GsZ7GQf1HaeT2QLvN7P5YJgTj4WTmcCAy3HG73vrZYZsjQ6h8VghttCgGtzktMq8jx4HffCbkFCkwWed7Bbz",
  "key10": "Q8rgoJxxLaS3Vf55ZkphShJ3bbiZ7anjsyxVU5o9UzDkb3HdHU4KNnpxLuMVgQkhii5kZiofGHLnAKaySpxXTyX",
  "key11": "51DRjyS9TShsYyh9Cf3Azme4aUEV81dQt7mVzNTyrLd9F4AXqqeaUe3dB5LKJ5bN5wwKMPrBnTRPt9knFbcYKaHA",
  "key12": "4VXRP2o8cTB2t8infjBXkbDY5S3h9Mx32c4UrCAkXhZdawNf6XebWAEQGyT9dRubkV4GkkHe7gzLUX599Ji6B9SJ",
  "key13": "3xEzU9CAtQSd911mZKLyZr7zMHfZ6XAwQpTk264j1xpBfkXmNY7NX1K9xfoJtm44btdDWWx7S74NJyzzHwJz9bEo",
  "key14": "3ZKs7dt5fz8AnauPNDBNTg4JxWNi1wfmGyXdXdMnze5zLv6R4gcMseBqcbPXGWVAf79Wgb4pr5t2LHXbbYE3G4Rp",
  "key15": "5abg37SEqg3G6QyGDz9VK5d2AXHt8DfXSpBh5Yqee12hU6df1LDKJvfzzg1G4DgiLydmz3Qk2NuC2W8fZA6D4Gnz",
  "key16": "b9vPjW8dhZDHUWGkVnsAiD1UhjwtosC3c9cnWwCRDBBwtPrjdqWqFFFFrM5dBHeZMd9bPp8bYJLKjqMuWomuiUG",
  "key17": "5QwNdxAJEER6cnCpmqTf4fFRHESnXtNrdRb6LtGWPaBVrRHg3wyYPBonWWS6jkL8LMFiePkz3XdVND5v2FpvUA1M",
  "key18": "4oMv7byp61bvpWuEQKaFzfXMMkFP7EH7YRju4zfRNGxYDjLz8WZBXFDPMVLjAEmJ7FhBibjQMRKAFoFCBp1Yizke",
  "key19": "5BenwLvt7HKe1kCNqK5xxc6NuMjdiH8fBiZhf7fgAJZix8wzsnEJRxoht311XcEQ2EGAva9g54osoCW4sBwxCWTw",
  "key20": "55W4R8er8XqHiYEMDUk1qDzH9yFgDTMkJZKg1QkGrYNPedA2ca8Jwtqeh86X6NxH4knsHeaAs7b6BzsCHtkxRbba",
  "key21": "3SkAEUsFJwKMzeF4hTWQANQ2W1Pv5NK2V1tmev4h2HYsDG3GbeBVYT2R9de2qVgR3M3FPLjcZo6SiThVsKpvbUW5",
  "key22": "3BijBoAe2w877pnTioSTGwEAFLdbsT21QdE8t4SKLtdjZ2BHZUFngitCf9ZKVhgbmfQZjBNN1KXo7bLk9GDv4CQB",
  "key23": "2Fphe9Gh2ZHrCGwR5C38gBB4uqpKi99sU8uD7Zs53QJQnhXtnnvt9LhMBbWa43Eo2QVAGVYJcEcxxZfM7vnXYgDx",
  "key24": "AP5ymKYNhCs2goAjoATezBR3razYuJ1tppn1nndB2zzm8oxU7HAGRvg5yb78DQnnwbMMWUT1dnAu7PmM8apdKAW",
  "key25": "2nC7RedM9pwc9R2Hy3TVctyPUfxhsFmaMihdyTPUU3mqWU6PVFhdNVGXhwSebfEp6jGPYxUDnwxu3Q81rxLUWRLV"
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
