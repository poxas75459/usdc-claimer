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
    "21YGT4k3w65amHVvHk9o6J45R82mNZdptHJdh9tye9VPGproDH8SpewE4a73svT8GmKeFmGUzZ3cBjudUwzrruCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ztrr4T2nDTs7D712NVDk77XcbsHsemJdAx7Ciuodvrw3zhPGa5ycJAirArUtdK6B3aGa8oiZNXay2ZVZGYtxpSA",
  "key1": "5oFCF3w8rTA5ciUM9kDKsoCBJ1gG6NBCvvQKmkaSezLSHkD5UR9jkNDAVfdGBMKPwZzvfCpWpjdW2fUeHDa99r8J",
  "key2": "5at17YJKYqXsLEri1SaPAu3fzxhXj9rvG72X9iuCkzmURors2EMhM8UmxaHeP7Gb9yTiT8vGhtEHTkXJ3mzHFYuL",
  "key3": "64CDo9hoUeHzBfAzq2DdCeNF9EfKjU2pyfxGJEb7wWdTmBxzUCaH4nL1ikBQsY7z5QjCkonzFE3Vr5QAkvgJy3u8",
  "key4": "36UNhFHeZ5EhC95RWtNU3PetJyVDw7vWFC6nbnHAdLVUpVRNXEmoGZddeiChSfyV5pVrJeaUU5UNBm4T6f9eqG1v",
  "key5": "2TvBmNDB1XVb5UfzbX256ztcK9CFF5frVuAvabHvW71D4eBr71zzZv2416xpuKTPPeZNySWk8f1rMse9VAiCQ74r",
  "key6": "2YrCkZ2GjUrZrR9LS2AAcwtcFK2C7N5xd4eJqMnrjswnXjVjprdGT1e3jq4yugRGrrxKHC7TjzWDquf7FvXK5n9f",
  "key7": "2VkNnoXNz3sA2BsL1sPusxaBvfDRyg8WGGYXGM6dMoyrnr4JGNeBVSZsSfe5yWqFE7FPF7krPYHaaZSJeXiUx81B",
  "key8": "5qqz2H1DTtB9EmeohEMSLGXampKSPRjbqCR2mCFqWbyvJYUw7A2RPpzRatJMjNUKneLic5Be82fEUhW9bKMPAWyN",
  "key9": "5WNzx3SmuTmMstLFX5Kh4dkd17LipWRone24hXkFwD3VhKjpYrWMLEbkRRTNnMiVwFSkGxo6xqr8NHVDMFgkogWy",
  "key10": "8ebFMgCrTCxsTG1EUuqonkdVhD5N4eEfVxXsuuKMcVZGjgbYEdfiD2VQ4Fi54uQ1NfXbiJcyZFg2d7sUM7WwFpS",
  "key11": "3JWKTtmEVjJU9YMCf2JttAZYDk9jbTwmdHnYvLz489beMcGuAiQSffj1xvqnxDAio3gVjf1BAsUyoJaeeMc9tMtE",
  "key12": "57oJu2ey4fNLEoXNRFgNmwFTYd6fFqYJsSaytbs3WDn1DMDGhYmaxyfJ52LpxEsLbSnDLbs4bQSw5kFBx8txHmwD",
  "key13": "jbphATyFGnLj4QKFb4AFBwUzSdjKQX5jbM17f3Axr8yUBd43gWGj7b24bBH78hcK8ftH1Kp5XMRRHYNaiy7ekch",
  "key14": "F9BZ2i6UUSa2jfDGS3jFkbgzggYRyDuSXz4tdSL18gGAqYVcsfzWTQ7MTKxnnhyjoparHwZf45GYoMLqdAugMYE",
  "key15": "5wj26nm8WnhF8jAeie8cCnukJykQUG1uCmW1P7mVBFa4o74dRjhor3c1hgwtYLKx19wL4Z7a1XZnfE6MndYWt54s",
  "key16": "4f42edvnzwboUURpaqDVnzPRixT5L7BSUzdEjCeSMRAKnnL1j5mCdrPfYmTmbBtULWm1rHcgenX7AUp6iJvAKbLn",
  "key17": "31LvYWVHpqA4GqtWrabSaY6e1Ney7ddTCNyA8BoZGgjEAY88tpiVvyv61QnnpLcikbFCvRkgJxa8Fxf7fHXpV4vC",
  "key18": "rKF7LgPAXMRDQL6o4TM3r2KP82P4UQJr3bjbvYRVGeY7zVRsphSPAPibVS2oNRGqQ8pwA8Ts1zGf9WncMi33dxS",
  "key19": "5GotZjUVgJQxuEMJf24hoHNGT99tVP14EJk57pAYn6QYWYrsjY8fd3Rm44PAGEiTR8ucUEuJZgd2yD18XDKpDqTf",
  "key20": "5meNKex2uiZkgtNgeVXWWpadX12WVX9tgU3c6bmExXQKArqkn3ax6cXijff4UynQ2UUoRhTc3x4u8iRW3dnGvSCw",
  "key21": "4fWpgxKFGkS4GyXS3jaTmeSEvVVdWFjgn3SEdxGH8cDrNGAreiTbJb3ghiNRPVx9JNNX8XgEyGYFPYBC25hvz9P",
  "key22": "4p31Kswae4U1Mh4DaDVqJY1ocF644HAPGWqJjsxpxftfUVMHhmq1jJp5tWDqC1cUcXwRp6gFGLSso6DtXvDSkc75",
  "key23": "2TLAbJqqVYCXxwPKDEgBtXDY4rJwLgTTCioAarVoPWPEk4BCcGxjYRdA7xuPJ3Q4MiJJ5FwVsgtVLZieeWTBKXqD",
  "key24": "4psNe171WKQZnB437yeNZLbzKoNAaSbPNtBudQ9eeBiUqSdv8TEevM1yupppNjgq4MgihQGhv3M57VSeyC4VNN5R"
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
