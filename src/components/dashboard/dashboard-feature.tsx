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
    "TPx5FsewhxRcXSebaAiQd9xzXCq2VnJ2necLRJYkrNdNB7bd1RQz6xyKFLvVoMB8PYYamnQFHcMXgWJzS676rGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KiL16jhxKBCtuPY3G4fzoG2vBzgAS8cMD3AoKjRkdjxpyQwyA8j9hAdRBK9EG5Swymi4GYTNPzgnKzgjjuu48Le",
  "key1": "59hzHHwBX6VPe8xMftam2otUnTipiopSwuBMmcsGJdLYvsqCBkdift337528JdWqiZdPy2B9fXFuXEiaxHfW2sVe",
  "key2": "4rKMcjhkL4Ac61VpAFwciH64AzKXZw1bRFhyeNK16DoQmgqHpi6PwK7xybVRV1NTAv7LChGCBhFFEg2tY1M11nS6",
  "key3": "4tu4DhoxreTNKyZptnMi99NkCjxuhTysbqeGhiEGmLsNNeLLkzAn7Rihwn4XnupxzRUuU6KvqXp7jVGQjC5KgrmE",
  "key4": "5V6AAXpRvZSJAGguCTZmuf2veN58GtkZ994VURWeRGUyN5xRGMNeizeaafCG7bWwjbn6z5Y6QwBK28SXG5W1x2NC",
  "key5": "4qjJQp5uGxYgjuUZWWmzX6WYVdVpWUbtGbCUpXsc9dFPXiUjwa298Grk7PR7BEsHfmtAgKmQA6GCKJz2vGuygyeU",
  "key6": "CbJDqrAT7ysKVrEpm8HiGZyWYjGD5iKTPeTwsYDYb68kNVigx8xLwzW5BhcFFc9pmLSauJVwYQxkGDupxaMwkcD",
  "key7": "2ybYiHh7mUErofkL1oEadkQT4GPabGQjsTJWgq8QQJpHARitWQkLxkXPVFxhcUpjeMiU7vs36C6Bz6ZRijZPSW2V",
  "key8": "23B5yqCZTiJkTc8tBiusUpwXCv1x5LgCKxJ2ZAyFJmVsLQadgcf8WS8Hb8yWP1RkYsVexTJ3UCmxQaMSw8VFVjPV",
  "key9": "2GciJ7FSM6r6jCVfpTBduZLkgiPTPokVbfcu9nG56ANTbyHEMSiP9HcB2N57PHFr4cr72L2NC1JWmH4A8zGBCoNW",
  "key10": "4rrhLm8NbPU1iFAxqb4EKfTNkKL6QYwefL1Rj8MWr8reFh7MZLPM4aZRkg2NVERQ61Pwx4ktNKRRe88mTh16eNYA",
  "key11": "2nhzLCTBv3jjX9QmBBUFNyykDVcV5b1crFj2XTPmMcEQ1Ukygb32FfhPDx7Vd1H8pxVL664UrRB95rXa5jL4MSvx",
  "key12": "A6nFvREcSbu7XTTCt3etdzC92rmT4RCjkBqYs6CPdtwfvQCxm4nwCYhPNsUZvNc54AJntpjTn6W4RNPigzHJ3Kc",
  "key13": "2Xw3STaHwRYLTDqyf1oDBJU1QbqG3PPxbcyR8n6EZ5bw5YkXJDM4Xw7PfcrwfCwwwZHSpxqPNJCFdus6ntvhnrpE",
  "key14": "4dHymC7HWVJBoSMHTRU8t14mD2yCfz68aCku3vU1vTCgwsdAi9i9HQyvwraHuLBdceuNaUquFeUzBuwTNDd3J6pV",
  "key15": "3hp84b2Eo7X3ViJCHkvgqMgB4YqrjyZcmQrfUAfMyfQGysHBMajsKSVNNKEkRpPSQWYbv3skaJZKk16r6qUc7Hx9",
  "key16": "2jAUP1JUUcXiviHFoXgwey5m6E6rPvYyfHq6YVuqyGVu8Tq9g5QZFPwiAAWUr99wrmaShKodMqMM9JeKEoQc1ZAR",
  "key17": "2noxSH1yT4Lpxx7HuxbiWWzBffP25npeisUm4WEMsCh5QakiBemuWecDhz5KDnRSkuX5kp4sCXokoFe9jwZBM27G",
  "key18": "5WtdzBYaooeQKRLVix7ALq1RbXJpwDdTbDG6hscDZhq7DaAbXUu23S6NPZ31CEiREegxvcEAvsGduDVymM2qxenD",
  "key19": "4SUyBRDZNfuQJYbDoMFmXTZKbFiEVYeaPuUs85YLPdo7xtt916THwiVm1MeHpAhk5QcZqcKKpJMWgrhwSZDvnDuF",
  "key20": "2XYPBXUzPm4vwdNo35DNtkGubzppwAXfeMbTY1xye1jV6AdKcfvd1zBJy2DKCHchRX9mQ73GhZMrsBTZfKMVHCFu",
  "key21": "4N6Bu2cPxw2E9GFJg7qWgaKFfLBo4HPLxbqMyNKm4DbCP7j7WftiKkCrZcXzhTMxV47WzWQu4HoXQLLNzk5SuyP8",
  "key22": "4sDm6Vf3DNb5xvCsFUG8NPLsdLoEtWWP5RzzveJNHhuzecTwG7fyF9VhVRsvnjZzYcF94gv9bE2xcPfcH33tY4Nx",
  "key23": "4VJqihSRZ3JERjzAg7vW5v51jwSedq6FyY8Nu4S4qesZnvJuKr7Exi5UrW56p9AMP8gSkwMBRY9TB6AQajFxZUwF",
  "key24": "2HYoLxVXfcye6sp1LhytZRKuizizh4oXVgehNawRRztBdso3YcMLYU8kuLXoKimJeH8Pa3LwdDFqWiJN1mHXrehj",
  "key25": "2GM1pxtTwsnnWdXZ6aGkZoKBxGn9VpSPCVjhFcgfXuJPsvbdk3bFphm7EKRJEVBb34Fx92fw3MSrN68FMBrEXg55",
  "key26": "3PzEHWxJki6p5fxmtzcANTMCi41rWt3Rox9mQ9hB8bq9fNV3RRPANXkHsP1a6emywhCv2BKY6dsMCBHrhwKWjyH3"
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
