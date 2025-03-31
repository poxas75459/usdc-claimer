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
    "yHTLyFRcNamt8hJaQBZaXgcnQwX1NREWShqcDCHx9hRKpUi7EPDhfeY7jQL9EZq3q58JKziHXARmoxtuCs6VEUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WvCRMMk4sPCtLn5VPTR6QK5tY3pP5NeYPXwv3rNQ77ebsTBv3DzVzDpKNSGbK4T9X1LYATb3SEYvGLxB5CHc5HR",
  "key1": "DJki5QZDHVx4uizehxpKQMEZX1hvSdGNdvUgbqFy4gphZkWnfegBKLGYZzNg2Wg15zQ9tsvMQQeDH6YULpzYA9S",
  "key2": "4D717XTHFagJcTzxRp6aA2399gNkqXViZhiMbnLJQadX6XRYgCvNzNSsLxdjX4FaqFekmJuw8En3bE8VWFY9k3fn",
  "key3": "5JM12E8NAbzzDaVb9T5wcuhwXyvLGWakZHxGZwbAkkN91uVnbhA75e2b6jr56fwwfcADM2vFkBP4L5cQdYLwqbSj",
  "key4": "2Uw5Gw8dtRGjoWqrPqu6xeXRZJ5bRLWDotBbWm3TppKhMgxCg3EBKRWSThPvUEyFwknk4TEX1NHsEKKtcE1Eb4tm",
  "key5": "2GkQU1X1Y1xPxz21QuMCxkayvi7wdFYPHGusjFdH1Z8GRW8TZKC669u4Jp4jtv636nyLSftPLV4hxTmB7iKTAXLe",
  "key6": "4pJjpsWStvxtnCpt3fnKue9jq1xie3ZRQfYQGaDLrop5fWdt4zuioheJAwiLTnKhLFBED29ffeLwjwydsoDMnfaD",
  "key7": "4UrQGgdzjGak2zDdpnff5XXHVrLGhsqUkWoH5wZc5nBQW36Zd7dbfmv1L2Jz6aeEf4rLtWdWgtPmu4y7jkARYTzF",
  "key8": "4c6PdCaqnvZbSkDYdU1uF6C3NWioURGCCvmpBruNKAm6fEx9yaDcZN9F79B6VQJXkcSbgtAf49wsBbbaGhGm8pnQ",
  "key9": "5PTeMio64XRKwuSdrVcV13jRuzmh4P992Z9zF3kuztZjsGpaXda2DnExw6AVUceZc5q6EQiBsmLYpXM3iuaDsoVH",
  "key10": "2RKv4P8sXN3hpk7fdouhVUke7b5yxJCNxfPsvDFNtoiYmj3aBDUJa5CgoKz92n9pDWSVGcN2gzUqreTR2R44Gvae",
  "key11": "P7qragvynCr8HkCd52kfQ3QDaX5bVwZwk7EcGffFpzdQBFsALTZkrQPnweixRAzLHn4ZVhGwR1otCm7K1QWczpv",
  "key12": "q48EJmfKaPzRDPb6Rzywe6XxnLhnW3v7bhcFuyCTg8TD5zafHJ8ojngLxCU2dRJNFX6bTmTQyj3AnxYmZGC4VBJ",
  "key13": "2LDnZDsaZL5igozUaVLbRxShyCWRT8CPXkcgkWTVFKj51jkx8tkpA52QaXZdPAN4q65nYwiDt1HixYjWZYsZ8pfs",
  "key14": "2gQSpbCnujF2oHzXzpTvdUnim417SMWSjUy2neuDBHrDvbr7tBjS3i3m5ki7VShUv1tfQ9CouKniEfLmReGaBRDT",
  "key15": "2MkUKGsUooGXCuTS5d6VTrH5H5Qao9mim8wGdN4BtyvyAJ7mnoYADxWP7fvprSdQ6MaBCMYJRWAYSiTRGoqZ2HEG",
  "key16": "49toVYgVRBRsT3yNFPpd8wnPNQpjghik85cZDaJu3xuCqFMP4q94uvaHunEryx9jGncaNJhqJbhAzkHvjWAAqSUo",
  "key17": "5FQ4qWyV522YJ76eCd9DhsSn3hB9fmtANBKzjHrX7mbDw2nuSQJk53qeTrSSpKqtCJLqvBoEAG9xRB46XY4z34vT",
  "key18": "3qn5CzBCNwaWvyNzhqQksGVtr5ykZRc4denu7Vstk6B5DCkQuGeQfyq9UmcKjXGDHubd3D6zBCj1yqbX5fiaJJrW",
  "key19": "5ih8aaer68dAr4zHdjvWhHm5FbFbqTBrGoruwuDx2o6wjrWtZH9dvqR2FFPvM8ia2EEHLfY8njGz3LvbQFTYvwTn",
  "key20": "2UuF817x9Tni9LZoZhGCtTkcxDaHNdwieCdJLpS55wyNXpyVLMn6zrQhgnqZPm8KB3WAN24ZnQ2uUaLnfHsQigA7",
  "key21": "3CmWvNaLMEiyDWu9HBUXfx1MH4uKb1L4LHksYroYDqdfQPeP4HD4QYButdRXYgtEWFYr8F8HSqAk35vG7bKoJARv",
  "key22": "4myheWLMgBDfVroevCR7QDAHENQzMNSHWDYQ5KrJPYVfxLeuirCJ6mhYoZjiqaE2hzFRSeQJBpCbqbEBbb9gwYPR",
  "key23": "5h4EW5ujHZh2CBpduWwnctQtNrm2tz3bis51hp922bj94hrJRcrFhJ1ktzGpWqspnxc8EZoTP1Dt5UkohraETovQ",
  "key24": "2KDAw6xgd2jUSDQsHNnDKCdCmdqff3C5uG4TGbTTpTy3h9RbkxeTxnyvAgDTXiAupgMXLU1FoWQcsC9x2N8Gc8Bf",
  "key25": "5kdkHETsHPF9Sf83bLXUxV2cSGZSfRq1dpyaxVWpxegs5MJD6GP2yauDHMWgdUefcC9AunDUJFk8XL2c442w8f1T",
  "key26": "33PNfCukJ7mF7uu1nqCpk3uqqtLx9pfXhvt6hgtN8cxewLoofD3BVHVM31cRfP46X9afVMae8p8mDRwrccz2D6q6",
  "key27": "24gibi2yziw1YU23YGJkAQxy5PcvWuxSCSWNiLy5XyDTfuNWXWYK9PcySxVUnr3hSptv9fB8TjaHg6Eduy7xeJaP"
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
