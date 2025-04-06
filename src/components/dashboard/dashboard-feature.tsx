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
    "3kWFf3CQ7bFKwcSeWpuYx4EvCWmaPxNBVqZiGsNKLQhCCZBkokYoFb5B8xYRoKqMDyYWTvJJ3HDXU7vMLCXfz7ea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mxzQ5JSRdmZtZBBrpKv7kLuSfQhFHD4C6qvtVCNucoRtZPcu2yr6tpTYQJeGerdAe8RRMR1V1ENXVdg5sYVVD4v",
  "key1": "2rJBstEVCS6YVtpcWcwWNdb6NV7qhgBKG4Qo7U76xP3QgVeN81VZrY8V2w7SLp6bbZzWD3PRefvfHCfsgNHDGvXx",
  "key2": "i8kcoTvRT9Sxm8zwCBZeUAj47wQqW96A1TVrD8KbCgtVZVjHiCWH8j83XUA9bNUtzW71t3Ewpp7C278HwdzvnAY",
  "key3": "3QgvkLBi7Y8ii2M6xRv2o4Nx9CypqyHzvQNzLjv7c3nx1ppT1d8GUYKfB2hj6Sad647fGYMn6kMVkG9GV7YJMfFs",
  "key4": "3NQxLP1KUNrCqMUxY8b1E28XRUTPmu5pt9ekQqKkpduNmWq1vatcGBo9R4aofwviUGJ5WZ9wikRufpcQW5VJQyWc",
  "key5": "2M8fFqZUMMbsRXiHrHmdyS2HnFGBqv4pTKV78Vbhh9j6A9soBSrffZjrd94WqVSxP3C82pwWwdE5m5rRHSx9ZoDt",
  "key6": "5nPCic9dS9Urw9ZzP9wbU6KcM2TJuy2zHgFjP7pek94YEJ3kFQtGXsYYRrknhmM5xPG45rgdnWHYnrskNgricMAF",
  "key7": "373hXfyFFX5HDzpi5ZkS6YAdjCe2jx6a9qmpg6ePAcgPhB5DggMVuwdMVHGHoN9nC3ZEYwgNdhd7hqBbTBpTfcK2",
  "key8": "5vgFpvnthT2uJHgwonUAYanzScTKp8ZXUDPPS5neSbx7iGS2XBMF3uXXycgEiHV6ujDV8Nrf3gqbkuht81YAasKm",
  "key9": "3h9J93g1XU38Sh3Ap2ezq65Z1x8Qdu11dXeShpR3mhRd7fz7P2TqK7mjt1xNoSnNcEQqR5cWNKfKHhNftU64Y7vg",
  "key10": "v71ECcVcWKJgU6BQ39K5PEnJLJyzA1vSDGHiHfkyvXmw1rs3PNurh7B4JKE5BozfqsKsqSnR67KExUN7wcd77nF",
  "key11": "5wnx91bf7a4ZsPtwcZE2Se82ELfJ5rZya7t1EjmvJKqssMH43Dc9gdR4nbjhVYPTA3iYZq5MU8qPWoFhvvyTXavu",
  "key12": "2STfW7BZrKEMtvQfPRyMDwKUCGKMgtWxmiKnVB5nDVrnw92w3mUqJZtSYu8UGFnHPD8re7j1BfqKFuact3oRANNi",
  "key13": "2NUiLTKokFYDjT7ToJ7miGi7raFXZ1QZsJkKfbALKYVmuSpUNY9HwTnWdNkJuNPiwQFhpkanhC1PU9hWwrnqm73Y",
  "key14": "vYQvpMRLTjr2bATYVS7DUr9BsW6ntzYqhCNHA5BbxEvFgLYmqADW8E35xxUsnfnNVMbrE9gP7A6SBPwAeecPynR",
  "key15": "4675uupjsfDnDc8r2HMZre22HpRfF162NWZwLxKbvpLCUW354QEF3HfzAxtWFrGVpGv8t9Pn3TRGumQcT2ZxmxkX",
  "key16": "4yU1g34BQyd5WX6jkXysceW5fshxs6n9QjaFc2UTaEgmvhwbzGNDUiEXeJ1HXoYpRtGqnTUG2eddtFLN4d8QUtGb",
  "key17": "4MiA85GNysb5FhD4dr4EjjkeaTLXyyJL9D9Cnk6NjQaAsFVJeGAXxR7sTkcmRApF3WZ5CnsK7GqgPw1ii87mrDt8",
  "key18": "3Jrirhx56vDevXmsYGyXAyhgV6tdFLfjA57yfaDXGFNHZPmjXWxQXA7n9mECnHThW2VbM2nU5gBMuNdD6VaxwKEn",
  "key19": "3MTqxT9FzqY5m3UtevLxbA6dbKHWY2npqyGhrxbzDjYdVByaURDqYx1iZXjyaAgCgqdKff2np3DdWfcW91m7MhJm",
  "key20": "4kQc8h86QMMa7cHJnnr6x5RGBMFUfJ2TMPUBRCWC7DTNm8u2TyoGwX58Rp5NuR3osuTAZEqTD4vDXQK1tQktAjV8",
  "key21": "2ZE3eS5FBtZnGE8kTLMcwRbKjGnJq48v22EJt5ZwvT6rsNDNaUpG1cztUbSByvfKKqLsGVLnyn37KTmDFcXudgdX",
  "key22": "3c97d1JkgBS4UYB3J2gYRwrJtfEQhpVB6o2gJHa5ZQyxL5EFfwgqfkzt52o8RFQ2hhUBAPVyzXmBK6t5zabUSqEb",
  "key23": "S4mpv22Fv9naDmjseyyEyepLSVd4nGNauUELtjoioErWMMZz1977wFndwxmt7UoVZdSvWtMcRDrvwp9gjZSjCPD",
  "key24": "5j8idjmiMcLH8vYDXoRzNFyw3FX5kBDKcVAgZGayCPVpLLiBV7BFjr7wasps3dn7Zj8JQENduKAksyM7wWn5cd8E"
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
