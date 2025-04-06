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
    "2sdB88pLRXsZ2ZNjXVSCbEwSThoDvZrMisJB3cG35JsiSEUYLJQnJPSw8JNBCStaHigGESkSMth8xQNzpma7y9WH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kNmQBMvcgHQDFq1aWCyzafJuhqPLh8XYj7cAQjNiCBfvV5EqhMyNAWwM8H2Sx7GcZQy564bBaQktJSAD5tzudD4",
  "key1": "3YUVP94ZdFAfZ5tMvGUY7FQxFum2uRiCJKe8MtFJbNL2o1fbAXbtKkEKch5SJKW1JmBK8rJHzWvXzTvmvZqcdody",
  "key2": "5AJ4F2aR6oUmspqPdef5ajrvAFPgm7niywvDgHBCbEx6hNfzDkM2zGzCtNkMD8tBJtwVPFtntoQaLzwriMj3WjU9",
  "key3": "4YqpEUh6pw7csXLC68XC5KiVomQ12MDVBsw5VSybWH47YqTHSFAKnK724wS2csdz5CePzCu2VLRhLEhSJpJDv2y5",
  "key4": "ujpWuvjZXrhgzjfFRZ9oYuoM6GfeDrKhHQarER8t6hQUPR69UQtgisikRMKtckeUCCoaGQSrPTuEz7dQuv815wz",
  "key5": "5KXub5oBx4mEyAHSzyvgX6P3bs22rvkn3vNRUXqHgWtxzoyeD5Wj5rVoPD7ffmHXEmqx39vUL84JPV4EoY5KTzYQ",
  "key6": "cNvsnmAa9D8WTSY4vc8gLQPgxfC6TvgVz9QN3jVkG7bSq8KYmqzJfpKQDwVhgreYtZSHo8RkJ8DZeYaPvoT5C8g",
  "key7": "5dUR7JBxjrz3AuFbsrgNHaKvxCVjsCDnB56diN6WMe5L7JFv7DsRQaFSKU21w3xcsjqqWEJShNRssJoKYjsYmKvx",
  "key8": "4Pq5KMDWVsEJJemFXMsP9V6RYpQNBnxFdTLgUgnZJ1sYx31gEUtJWJb3mnposTxQrXUFKEkmTtDokD487dY8uaao",
  "key9": "3MmSWRVnrtVG5tgge8obPCTcH1VZJrTq81hjdieHJEhV9pXx2q2AcZd5Ps4x9LrTVgjvPfrpErwp1xVUE4sYspp2",
  "key10": "2Ke2feB4uPX6NuYWVxgggqgKF7y5fchAqFfQv3VdFvS6Q7HE3We3TELyADekefsScwQfZxnt82agi3vT6e9qwa7X",
  "key11": "2xRwsWD6BgafpDUpxdHetJix6bnbmxiLnhajjPzjP9H1GrMxsRpw4s6R6bCo1SFGSDZeBmoVEC1CFfJC5oaMpyPL",
  "key12": "51v6ER3M4kBS7bEMVbS2bsFCPpPkTRkwyC9jkWLQ66RxvJGQ1yiVVkbjzeS1F3jUJoPGTf6RyYb53raUnJSJ44F6",
  "key13": "3t6ncqs9CvBmBxaHuB93bgt8y3tbhxWhM6npqcc7kdbtjGFDeVhx57jAbcEkydXiLmghV1iMgCCT63aqVPiFq37d",
  "key14": "4EJHabpwVkDiJqappmSgVdFL9jykPxffJTvKpYQ386PGDF8ftXfbav2W2xJ5YMu12Efxyo2JoHz8XcC3BWXgPd9Y",
  "key15": "2Ps5DRvEiSFWzPLvvbR9Y3J8GtvT2dDhBqztGmceMci4jvKDXfxQDp69rA8Gcn1WbDqDhgE5RkyqYQEqRinTewgh",
  "key16": "5QuhqoZFYaxXt6NqpWtyBATRgBNStgUr9N22ukCEwhssDvbb9EytyQd9S5G1JXkdnoj4hpxpVMseT2NiaqYRP9AY",
  "key17": "5mqSjMVayX8FGojeH9wppY99RyBd6Rzs7ZUnV8KghDigVgCgCEvCp3HTSLANJFz9q1mHxeLYCHwizkyJFdd1xzdk",
  "key18": "ZY4Rj3DNHgQf8UGP15q9HqvtGZCgfB3hKBvmsnY9yMXFzuhCBjKz8DggnHTVc9KAe7bz49wrA3du9pyVQGv8mRG",
  "key19": "CQkUfUzcwxz7Hhjhwz1v3AU2aLyREJEgetSSDva1C1uYAScQLmpij4VrLGJkiiHRpYEGNNNoyUFvyhRdb1HmeBt",
  "key20": "31Azj6VYLSFwHtDKzmddtDSyQcWPpbWgYKe4etTjxak6fh1opKsoZdcyDW3hfmzbEVhMvbo7LcanEoCgQ94m9n1j",
  "key21": "3zGDFpSFfUvfBp1aPAKBzzQuteLGrkVrDdf7GjDhAAzCSHs9pLPNKWnmfGNyvPYHDhjc7XsTNWdbxEfoecQTveSY",
  "key22": "4V56cBXckpzxrNE72nfVxLq9xyNa9KbXcKW2ny9X2vRWX8FdZjXd1LkLMfC2YHQJFRY3R4NBZjEMdXHG8BLrTWZ3",
  "key23": "4VYLaEwrMGh7LgLeYrzZsc7vaE1rrTBWG7y2FGEHv3SvqeiPM57zST3QsnmoPHtdoWFebKhNPY2qERytnHAFmCWk",
  "key24": "5sRJBL6Ket9qKs5ZiPfnp48QL2G6YwTwg7JJBo1qjYxCAhLCs5CcqQs6F1NVEW2qyfpxVw4SkVaHdjShoNyWo6Jn"
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
