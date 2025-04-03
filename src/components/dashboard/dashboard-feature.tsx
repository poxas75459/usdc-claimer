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
    "4weFCUqMpfbWATsP9xH8zRTAWvoTnQCHM6B4m4L72RosRXmFiG6c6KyLVSzD3nHnZwsLty77i5nV7Zm4KhZ4135V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hacRuJWz2y3BVu8NroFQGv9TgsPCALbpDv2hUWCp6Mubk8ffJJfkorTxhdQRbJFBUzDowSgcYk3X4DmLiwh7xD9",
  "key1": "67VRhrjvjZ1ZNYUnBFfbV2dDADPZbKjGQvgnixL8RXShJv8Yhr5Ykoy6xmmR3JcN6bp64ycsbqXAUGrYb3VDTHqa",
  "key2": "3dZYXkVCpgk73GjbMriNmUYQwhWpsA4uGJXU76vAtpqAjof5TDexBBTTJwkwT6UwQnhjzEivE6Gua69JK9Ze3u76",
  "key3": "sq4vpgpkv6MB9Svpoc4TebKWeXdPMDamABWLyfws9SAq7cB2TK8DyzmPGGXjwPSeiLSbYw8vtpwWVeuU7rgbw4B",
  "key4": "3wFzbqmwixJk2Zt5E1G1GeVmFUQtXpaZr9FwpS9S64mXrd3dT51MdhMfjGd2bH41gwe6B1fgRR3drVpR3Ve2XKjM",
  "key5": "2nnNpYu6VB8KA88KwkARxjVDQEAPmLSCQWy4hSYPkfmZicqKaSAvLx6xP1kA3SMHqvEta8W6SY4j4TnNhoDkaJB9",
  "key6": "2uimCCuqjrQoP9sdbZKmJwy2QPJYSCTSc3C1gzge9bePsNTj3LghM6FnrHe65udxJpXyJrygCMyowjyUkh5AU6KU",
  "key7": "42omEc9iNxEhppVmh1fJZ4xZCuaT7RCQeXaAzE8ej9iru1TE9D1jcWwJw1TQXXgcJpS8NWWwA3sphEEZ2Uc3F136",
  "key8": "3QzPBgf5tWHZEnYLYaaVLdBQ4Hew3YSQph6HRFK6Q3WyVezdHVHGzfwiqKcuST5oYjGqwB8Ejy9AvmwdFzC6RLwU",
  "key9": "2HEeDFZS97iZnxQT2AnwowQusAGrTgb8XgKaWDiUp4TeHe1WuxbjGk92ZYB6jRXwmmxmsRG4ioQAKTXSbt9weHLi",
  "key10": "9YmZcJtSSLnwjSzv59QUVanVR9Di42eeecjjUQGK6vHH78k9Wfw2A2s8FRLyzg6h5EeG5z2y4ky2na8LuCBc7MD",
  "key11": "3rgT1fo2SEC65oXQNhYrWV6bd4QGs6MJzzNVBRarpDjDt6vAy2iAkJeffPWPsXysEtfhaaftXWsbFGL7NP953YCj",
  "key12": "3LCZQNcLCXzzFi4F2x8nyB8p7m8mZwXowtJbieJrWNaG9hy3N73ijA9vLJBhowoaYXgCgPKFxcbmX6Txby1rhs2s",
  "key13": "2MjY1VXC7Uwok3GyRWwhewjWpUjrRQTCsUNctFY7kK5FRCpDuti74gEpTEg3CJcS7CTwUBJ1mfzeFmfjsLgWas1Q",
  "key14": "2NhgbW4BipSLjTVSegdT2U9hBqhwfyZ723kZ6QWtUnWTFvxLxs6XiHQJyzkg9xaitNFv5eRHS6hTTzUiXtXuVaJB",
  "key15": "2WxYdYnbGHbnRpKgbTNKnZiiYSxjWkzuf5KuD4wRcqSKCBBxqwTzPwVbS3W9kEjZnbCHpr663pZodJNQLYReKDMA",
  "key16": "4K81kGbqMUr9vu1CMcpVT8BH5y1fv1r6NYkUSeUE91mXkYRzRfFR1uWXTX9MC8vbkB3BYP686jzNJhb3kAt4urnG",
  "key17": "5Qimdwbsb39FWDoCaCASSNekMqV15xmVkKevrnHaZEb6WDHPzjZwHsr6uX7wPVk9EsmxY6hgfExf6WEfJqKyJhqk",
  "key18": "36GTkvkMuAaegUihd9vwoE5L4e8cWjp8AfTRXLK2pcjvnVif2XtsuMaF5tdBHqtEXrid2exCFwt3dEYxY9mXR6wX",
  "key19": "1Q9MAAYoRYRXyjYZmpnguttMWgxxfMWT4MSrz2YmdrcuNRdpQM4o2wKsD2jN9iSQqaJ7VusRf1q4xkHLdZxEqrw",
  "key20": "XVXJnQJmFRAX8QqCQVpDu72VD8vnxB9L79g7sCg2PkYE9SbkXNcnChRs3mT7FeiAcbGefvayPwU8KxRbGVGpz47",
  "key21": "4PxP1WD2cYKwgobFYFg6dGeTPTrrDUkY6NW6dmtPwJq7fqJyqJVJ9r97F252gRBdpu8CWV2J4WbJmeUguGEQbquy",
  "key22": "67FziuKv8VMcb1Ttz6NMUjjMBXZDU5ALERSbP88s9EFsUYUmQ2ezp8785xrLWziD4SLoFMgRTLCyziVsUtYFM44e",
  "key23": "2wWcs62qVKRRT9cwhRZ7gHZvJQJZKh91QA5L3ReaBPM6LucWtGmwrmYegNSpFuBrHFneiPNXPqcvGnW5KiRKxzkJ",
  "key24": "KnFRe7uAphs9fTmrcJGRvsmhohzWuWAWw478NuFTqWLRhcHXekFWACCfuiNjFvRbA4zvN6XRwG1rJcApKH1VQoC"
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
