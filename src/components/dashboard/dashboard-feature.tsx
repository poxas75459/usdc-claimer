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
    "NXNEfJfcWxnsyURam4VEjP4Y1fK9FRFfVygYWJ566VQtg3jswgine33gyR9gYZZGfM4YG1VoGUFFmdQ8xuiqAyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D3b1CsokReP3aLKLurNkMR7VMqgVL8p5HX6p9MekCktVRy85HqWMF6p8NEhRJtvYvEm53yVxeujJoKyFESNzAju",
  "key1": "44TGMsd5Zjda7KGFhS3f2aSens35kFX44a7mLAhhcATcXRQoKuLTsKsYiG7MwTwZ4m2rc3JWo1Z3k8zvkcLBVhTU",
  "key2": "3iPM57FccKvCYEcvp4r4bPByP4kZCsskyv7RmDRcYVREjHTYJBE87LXWBWeWxh9XywtRk6QScGhkQqCUCEUmX6c5",
  "key3": "3hQhk4parrKHSizaoEwwCYPD3WL2H7cALBXgguipCW2aASWjf4FnUBoyLTdcKiPPYpM1Hna6UmYAEoDzHiMdaVs9",
  "key4": "o99b2eYCxG6fTdMi5eamGgEUmTS9NcU1RT2AyKuF3EgP1npPUPYhiJAXBtuwucpeP1bEQUgkUhU7k5nhqhzhe35",
  "key5": "5ZRs1kVkTHMKksuAVXcZQPAf6gPE8xHax9SraDXst6Mpqdgk1kb4xGDGsgM8SB5cyZo8NoCeVKzK4xg22dukzjSA",
  "key6": "5fhsPGepY3Y16QCU7mgbo1oC4xuRoTDu1XkQEmKT9rxjNWHAhYdKEvG9eNVFseMYYHpEv5hboURJz8LBPNjXgHM1",
  "key7": "sdFk2QLuhj2aSH8iNvU9WfDbXieUcEwm5DwodmmUWwtiQPj7AthBN4n2hXKFHnHNm6gbZhx6eJY7z3qKAGLfTdB",
  "key8": "3JBifpguaTBGJhF3cbJhyuu6amWGDD7kcnSoyM9dKd1LbpNt1uLGDPdMLrjLd4KHcXC3zoTPUTWeTckmn2DbqGtA",
  "key9": "4SrBBveg4u2oSWbtbTX3Xt8qyMNnCZgiT4Z5znpbYhnjdJSfhBptvB9k8fh3s71t3sAtUrGozq37wML46WJH1fjN",
  "key10": "3P2Y47L36N8xRqBXXWyxvgCfFourcJqz35DtFabwdgkjjDQuDVgpUbAD1ybkEwoD7SD2DNECDe5J4cEMCWkyghUK",
  "key11": "5ouPtG8ZpcfdZiocYqJVGtEa3wVKjDLppdGBWRUCCueqtQ7fhyWZEoFRwtoR4UUATChZw1bBYdrfn4dEH6Q64NEr",
  "key12": "5Kf6zK6US2z1t1PRPQ5i9FKhbuJZExcHLyiSmkMvimnWXP96d6zwPvynMuPbicG76ta7vjWrGiNDQ7RiLnc5z9v9",
  "key13": "3C6cic2M9Krcd4gtT2wmb6u3LzGdLtKmZcmgdFfdLeh5YNB5zP5YN9Sguyy2z5hsMcvAMYRTrBYYQ4zzh3wWK6WX",
  "key14": "BPhFpjchqfU9kh3KVQUYs8yP2QJiGThnd95zvj336MuHwUonn59tKc6QPM5vkX7YLH2powoZZLHjg7fJkMnpHku",
  "key15": "4eUGZUKdFQWY4ToaVxLZyeu4EWhpdpMMghCf6KTYrgaHjLqm6Yt2BtjJgX6t6S5t68QLtphdqcdBCAoN9PGn8kfB",
  "key16": "4dpE1upPTSjZYLGVrK3mNq5jc6QxGU6bJWH8SMvHYtVKr5Nf6XsEFrief2uapyiTPnGrZfFFj9hhHZkKJHuDmadD",
  "key17": "2HNS7J2sQKWchgUQTd5T4ibJSJpswtvCxgeva4GkLh4hqoshiBKxHBsZcGtMyQLWy7NkxwxyaiAYKaTsQhFYFMdC",
  "key18": "3arf9hkC2RbnMEmSLjwLKWuzeqzmqNrM1uMkXjEjrpNRwps2nbLRqPox1cY783vMTt4Vy5UUTsBFQ6cupxv1Xp5r",
  "key19": "4SmDtEydaxx5mp6S9yXYBhjefCDg15Ut9m5yaZpJJqEJpUdWHa32AMyxp1bWwyHPUAcEC8xw7mHuZ72HJYUxujDj",
  "key20": "MJS7NaLEaRZxWpvzmhn7whYg5kVeY9qQ8voqXFKWDEafQPois9wXtTV54YVFEh55jJ5qgAYreDdZDFp5RN6GuYR",
  "key21": "5LDZePakWF6TsCukPQ2ShbTKjBn7wic6JGyTiaZRNVj2Rts1VhEFoh1AqJvc5ReSn41bv6XYK1jeuRVNdbyuyXuM",
  "key22": "EJfrFde2HPP2sKAMEWpbj7zKS4rrAt1P9ZjFZH2ZcFpJTg5wkXs4uftmgdBzGcHQVztwguXByJUy2dHanGBZAMU",
  "key23": "2Y8FCnWvC9QEwRQZm9ETiZMiem8BvUv19oegsDb9XRxfqBYd2FKWmhZg1Xnm7UvfkSjnTaoioKCMoc1TmGdFqCPi",
  "key24": "4TX15bQJx9Buw9qu9TyxCXRsXAcg7d7JAZbuXnsmSCmZ2cAWgtveTRrVFLByiqDVqXdEimG4u8uLxNjHiSrcScek",
  "key25": "hU4fHLtC2ajbQ87CCFVNSj8hdVFG5vLRDcW9pF9CuTMnAFY8hkc9xBnSGxv7Cp1buZRKnd6b1TssnifsgedSCC9",
  "key26": "5i7up9FCbRFmduT66DwupdE3QTMRDn4VuYN3Xy6KkKWUbx3GdFUVGFPZnAzdCANNPUbpWsfNDEbWWyw8MaEjJKN7"
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
