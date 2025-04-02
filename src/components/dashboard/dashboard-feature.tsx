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
    "4BxwvGPQKe9KCr4aRGUTUrbtqN9iicGgaN9UfAtkQvR6d22K4u2Wvkn2hXmfRuCB8cVmc6beevofAQJ7sYZyeLM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dkx5fa8jKYXzRh1N4hugWXcw25PnU1QuCaCwsH7Z7SM2C4MkhMgG7ncpKkEgN8gPPGrPNLWHbyAcDpNxHs7GKtR",
  "key1": "5eyBTGHb2kLxdd4vtw8BrgNbL3yQ28j7ooPo4cuQvwCv4UyNd7khCF4yCgAVTCxFkfiBPAdysaGK73amaeCehNZS",
  "key2": "54NW4qhwG5hMqV6DmYe2yDG62YeWjN34MXhBZSFcRsoaroxmwWMLwpeSmv9LpDiCFBHVYrK4iszg7FHEu688Hihk",
  "key3": "5S4QninygFVR3vpqtwvagGyexBKLzE6qSJpDg3xJi7WXCS1twYqrvD9A4JuNeNziNir2F8T9Pg8hNLM6qojMfRh8",
  "key4": "1LLEJtj45vdvnNUsH8vSFLp9K1FkSeHUjbg1bUoAhn5Z4pGZn7ipQbLxXjLZFc9miiPogsx96X79aRVkiGSUhd4",
  "key5": "2CRc1yW1cBK72XniZcF5FeHLkBtPrGAHYzEmyfMV71nNeYao4v4HGSbNv6fDdzsA5mEiqGLk843ex7x9UipM3KPW",
  "key6": "5xVdSEX26mHJSwaYHpZu4qQ4kXtZ3ekct26DoTogPAr3VQrf5YgQmzeKT1GMs2cpTh3nCxCABjCbAF9567z1SsbU",
  "key7": "5BjZ4RBEjX8xT7km7mbkMpiATJbc3GqhD7GuMSauWGLsS8hasSDeS6B4jbshJx5dEz7LprtG5btn9gWVwpsvA3sc",
  "key8": "2gNuAbaFNQGKM4Q5NCdeQ3Qq9iuHhsgUn5BaQvdiJ8J8qxeAbEwLbT4V8yE4Ts7oaPS1fvEf5Xp2ABYFSZtiNmMA",
  "key9": "5cunHZgcPLRid4A1ywqByqVByRCPVXZU11RbnSSrJ4LyMJ6JqNJ4DxRifD8uSMMzxXWMwsB97XUyRZZ1YrzWGBj2",
  "key10": "4sRAqLZ7UYEMsDtvkHvAVrYrCiai1MberzbW5q2i7VEGwk7GFSHpzv5Nkkx66jA3Jw5e3h5YTR8qxzefGJnfWY8K",
  "key11": "3X357rY26RnQDF3KKgcRofwGv4VJq24j2fUKadFvk7EW6R8QDE4kmbuqoSGaD5bhL3MPnZCmkA7DXVNWUjHSB4j3",
  "key12": "dqH23eJrkfNtjJGHvTso6tkTydC4r4tbpbkn9Gh5MtFoZKt9AhCnvzzVeLG3E2vzhMxoaNn9yaUujVaA6gnB5cN",
  "key13": "4M95xV6wSmxsUX6SPryYeC44dG4YpFqhBk5cdhbD9yHVhZsoyuYc4LBxNv9r5SU4k5tEGd9rfx4o7Yvdxv7rbBEK",
  "key14": "43HM7wrUfMEQUFiJ6D2qweYAuSNyVD1r4yetjEi41vxYJcJKvMVLNEFhY6aXzUJq8tnXgBtmJQ855iL4nhfad1eL",
  "key15": "5wSDJhgHBx3YQWVEtNLEapgAV9pWunG5Cn7FP5T7t1tRHcwkwjcwkpBQC6o62ov2HQ5k6kA6UWQvbfNAK3tdgDNj",
  "key16": "2oCFiSopca8Zd2i7RSp67Sv71DCkPBAuCusbJfqyX5av2rVKtscZoDMQfwxqixMzfuNKD4LCWgaBRUtyteG6REDf",
  "key17": "3zKccaJfvmccQekURuMqzRBuwBC8SBdhNgvjFS6jhhDZVdKqUov9qq7Mv37YXmNBuGWtVU1iuJpKiiDMuWiCx8PJ",
  "key18": "cTXu2PD3zCugL3txNgH47s9Gfb95dibCUvaiPFYNYSnArqLXnLdv3boJT9thrfuerXbYk1j7x6roKtsUSh61R4p",
  "key19": "2BZPfqhVTQ8y3ohe9AYhxrd2WUAHNgcZmYmcwa5hWwb4vvMmDwjvSYvjhXKUjsHnQhhVxSRhBFHJCSyeQBVWR8Pw",
  "key20": "5jPmrqRct1NQN8YYxyEqd8coVHuDzDFG2fmJNwpTB2DQd8N5YGStLLFeKNHgzLonzpkhQC9h8oq1V18Q3qjxHWtG",
  "key21": "kLHh7uQ5X9haeZSBhfSuTpVuaqiYbrcgiVHu63bXjJKHimMwprGVfRe4fP5ej8LMVPJNBb44nGVRpVKHWpTu5UY",
  "key22": "4qZTHs8wjyu1vBxB9t9otMnszzyiZ5gVghxh8YNKkvwf2QX34MeD8KH57XNFgXYpD9TE1gP6GQ6ncXR4V5ZpCqoT",
  "key23": "3NZkZTYdWJNybwPK7MfXNKRo7F6D3dFVeEyFbpYFtom5AXBq2SLrdU5LHdgATQeHBrQTh9fKEyGYpvwo3sV7786X",
  "key24": "5wAWRdnp7AHhcxt1SgiFbCssWdK5X1UM8rECSSQz8Aq9TiQh6ZSJME8X1hyhj38f6Yj8b8WmjAszDqDjvJGjJgsP"
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
