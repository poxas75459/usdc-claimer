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
    "4Cnju2weVxkdPzdE9d6rdYBbMvuGcRRAkhmoc52KhqzmjhdAcYrRWvgjHNth6tXTt17pVNauwK8QzwZxVqSR1giN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UxYJGn7eXndtMX8g4THWouKvenjJmAPa9N86DVJo77FPNURdJoauU8tTZiPEWMrpjEVXq8pZCf1xdDooM7rZsNX",
  "key1": "2UcFKU5kssxhdzmy5o86kMr7wpYo38JqQTpvTgVvTjKXNmt9X75q9C2gdANMpWxShZrUYtikocZx7BekVY1EVBjK",
  "key2": "64CH6j8FkcbdhKnvD51QkSyccpeDeASQ5vmN316adYkHjNDs61CXbvZ15rahKRuxtX4aRHz5vpMwAVXB6Df29Wgh",
  "key3": "2pZG4Rxq6q7p5x4GBFDVGKd9Ypro5orH7YiRNBRyJQkq17g2GeejEjibXWSZxFH2jNWb1rRGaoZm9Uoyuwgge5z1",
  "key4": "5DGG5YqmfnEmZA9fagPWAvAA4eLLmYpASMRjpUTTqFnnMV4SjazvwtazJ6UqA5Veoe9BFnvakE2UdXcP8Sbhcx4j",
  "key5": "3wygzbM5bvBLPb8LD5nZprAfLZLWZAM3Tzs48zGM623oRXoPPpf5qxP7mcJY4UQtEoJwCWJjPXngjfNSTbqSQdC3",
  "key6": "4CWCmLN8Vb9cP12sbG5Ze9kCWk7X4RnKxSdK2PQARqVxJNXb8cxJ7ZcmBWUXBxNSYGL9MaXs4mjiXsiDZVxvXXuS",
  "key7": "56MSZj51a2xGE4c3cstHJdqpH4bU197ouJMCWpEyRRzrMHWeMwVHwmd2xSD8JNMaYZZ1Rr1AQSpwRHbiiazvHFeX",
  "key8": "5hWvYJC7VPcVnv99vpxDXiTm42cw7apPXjgCvDZqKbvghbgTiULNr2yUtzT2vnTxppTumnqsMD6hZsbQXfBHe2JX",
  "key9": "64BrATADBw3c6BBhRGxBEvYodkw9mC3WuWfH2xX1LFgxi5KQqahqRcMRzETnkofk9X78bcaBabkF6SZaugwd7h49",
  "key10": "2i82Svio3NUVB2Di5i1XuDNjaTM8n7EM4SykVeepZFc9TwRgF9S4AF4Fmdg4tJR3MtbLVrVj7tbxjya3YCw11p9N",
  "key11": "4hsTrmchWGFZAuRGGAamizihKBcAPyhqrYsQ5zqYWxkWGaqiH1uQRJcUV556STJiGUPMiEuJydheVQT7QHUT167J",
  "key12": "wsNJbfbe6sRoSw1zdLjS2fDdZV47A5js3wghaK6GvdW5NUxP6YDvjhzcJnZkAuWjk3sWN4uxg6xgpSsyghvyy82",
  "key13": "5ZdG7zGuTn1McZnGP1BVrcVEZkFpXDMQUsgNk7GMqBc3ohBbmkq2Zcz8Bar3yTyeEgbvL9kW5enrto86Z28GNin7",
  "key14": "2m8c6q2uuA8TonzwKWMBg5DHgmL5sqW8HAn91gnmFt8j6w8N4uZLbBkp6qYYTKD9m5bLBCXnkSPvZPzCHDHpj5gn",
  "key15": "Bbk6GsnQpEqW9MtpcqMc2cyimBDv1bZHpsE3T1S1K6CAK1uyi4zQhdSfaZDxwDjzxHPGPBZL6LJ2YhEj6sg8wFd",
  "key16": "raVzgiGs36MGNDfYS3BmduNVDj8FeLPTLzk5tzNXYmCEeBZKBwa58aHLcSUGgS7uRTa934c9jBzxWKH3HVsXHbj",
  "key17": "2vAZVE1D7TrrcNc1QZytANVuwc97Y6otD1k8yCGbvhhyNd6tQm4AUermUmJEVNSAbwr4ddCSp1br2iDKqDNUxQeU",
  "key18": "4Fov9ACzcj5FUX6LExhdRuepE7eiTKJa6RTeJrQxG2XAaaWuDUzvP9DsQSgi696ZcVi8h17gD4Tua7tXc9JxG9QT",
  "key19": "56PE5p9mSBpwZmdwKUbP1isX1aK8yrR9wXkYxZiM16X3cRkRDURhY41NWcZ25SjgbFGcxuuiGLshp9uvETixF1fx",
  "key20": "3d41p7SYQJn45SwkKi1WK1aPbudbLhhmT6pgQS33ArqvrwtBL49L3mTufw89UW4ApiBy9HKQ1TUqhsKhAtKsE3rG",
  "key21": "5gmEtmZsdd2nmk7wFRArcxsnqyduyLYfajLojpSi3DFK3eQH8sCg9h6T93PG6tVySjsj1qqVhTTF7SY2XWAZ1E8E",
  "key22": "N5ujQGoHkyyxaDMY6V3uDvNzTYkCBc4oEn1wR5y56YGyMhnDtaMeX2efn6eaFVCYb24QvNwvU7vkiib92B2Sorm",
  "key23": "2qxDFxqKid853EMGPfoKkFGt4eNenXDyLek6L4P8Pf13Luh78HMFoSavsW1DRyNgtyUvxyCjAEmYvL4attUmD4wg",
  "key24": "3MXuiwRbjDgAHBKPdDdq28mCLy8YoCcvXLxa81AZbnxiRMvmGd1R65vVAAku1jj9DjJ9PwgYGta713QkZntZGKCK",
  "key25": "62RmW3D7wpbFic94cCwnS1bo2rtTMF1YkNHpATTrBB1LEKtfy6ZKbwy3LzAkyVzVxod46mTyMnAvW7tyrejUzK2r",
  "key26": "2m7NvwkA7PgZifMovPFWhSjEYsTopVde1uCMpumdoCNmHLruUaK3Hv7LEiKGWf1ojA79KQvW6cdoksDNi4BPtWh8",
  "key27": "27cU5XXcHGpZg4MNyzuc5QqjpNtmoxxYPW24AZMQHvaYxyd1XTzdi5X7f67iinJuR16h1bjYZUEFKqUTugHggvxX",
  "key28": "4wMekuwGzvGZwKvxJjLSBdvTQidsQLntw71zdQ2BZ3xhQtKmN1spvfMWRMqxdfjnWGChSxeMtELQv7vsNC4s8k4H",
  "key29": "42u3D5tAMcf7Xi3yErsqktxRqAPQ4woqxfo5Mc18DHnErwqaMGrsKaSqVs4MC53uGULfzCJRmLHnPnLt4WnhJcwi"
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
