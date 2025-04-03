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
    "4fvUxzYgkfaCc27TzXBTGUf2e4fxBJZMwB7Rem14UmJ3yhPTB6bUK2JMvwMBunBE5jjziLyxyXFY5wGnrZnZD3Zs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jF8Ren8JVthywWhiJDmtrHAEkZRcKuTQ3YB89bVZHCwgdZahWnXHq8Zy1kv6rkoyugX5dv5F5qu5b3DaTTHjwiV",
  "key1": "5ZxfmqgZnmXLuSVFsuTVVZxwQZEdZZJNhj4Ajuf1ppHQYVSWXMpjZH52GBqqTgoppadaXGKDwTVgx1hgKNWWpEpX",
  "key2": "2YKQHr3enEtip4kWJ2FfmdB9uVuADFjgHF58nHftDjeXz2fU1sjyx2sGFWYPTAscFCbN5d9LFY895ZXpVKthHUUf",
  "key3": "5juGpLZiUQEBCV5NbhrkU79zqUJVYW5MbX4EbVXJdN9Tz9Bh9voASLAh3D5fDjgdrF9af8tttALzesa9kQthkAzk",
  "key4": "EAbX4Bqu2DNhvDRuFAwfKtXq93qNGgJW38ePP8qnLPVhHaK1uPxmCoZ1izG7hR7fLhdEKJMj8wu2b1zaz6MQ1kA",
  "key5": "35GU3CWJrup4mkAmdzvpZCGSauTZ4yjA5TsURCSDt1B9PFhW71AQ7Pf9gmLbU5yoWDB3Mc17TE5CQoupvjgHw8v",
  "key6": "5UPaAmgeSGmhd9eV8R67C2Ljr5qL4mfqzrab3H6Qsxgto64cib5ANtFBaDDJrNHNBeFSUQbuQ8GgpmLizh5dSXCD",
  "key7": "t1J3yf1dfAA7EArnNybs87nV9VRDynv1srcGtAP18uhXGz1f4bjQVmGYjkUPN5BQxsSUSALffX7t54VScR8GsQP",
  "key8": "2CAFADykZcZ8GG3BTuJHmk5osMgF89sV9VNEKUdjbzSV4h3qNWK38zw3AL8KKP3XnRY8bk9XPBKdzWFjh9GTm5Fv",
  "key9": "5U6p1P7xuGtJ6QTipusGQnHPVXn3A8H8BzWA2Qfh7kBmjaPftGKeP9y34oEZznVX2GBiLCcsRpHZHuGWQ1YLB4Qz",
  "key10": "4TM8YX94iHLU7BK5HQfVpNf7ZCvYRK4HJbAwfMMrbCjDSuMVCVSXiivNnDwXxWh2gjoheDC2k6pa76wPE4pZDErp",
  "key11": "3CZJsum8E8L1mWRN2fZkcpNJXR2hx7eNLaPYTX83jsbZfsTf1JKro3v3sD8HbkPV6gpj6fgLW2vzMTMdwaXdXsjr",
  "key12": "JcgVSQTA7pFLuazsHBMjUPci8YqMAGpbqggLTmDBrWGKsXRcgDDNcfYp12fvJBmFGSNj5Piv2FnrCYkX9VmztGE",
  "key13": "rD2ELwMV1fmj3kANN91VbgXMEa31uh7M9uSj46853MoAfurKYgvumxA5ViBCWjrWdWdQE9DShVSBRSKdhXFukjK",
  "key14": "4XYWWfA5ASuzthnPeLmq7PT7Hf7RP44cj5BSncMMz8XJhZKMAPN7jT5g7JeHF2ZAnAP2e6wy6wbqYEovufn22PKb",
  "key15": "PUnY5qQmA5Py1xqnxsToD8B8dG26xerUPYBQEbTofapx361uQ8wzkaBbgiJQAv2VW2BX177iDs5wbjWKAmHpwAa",
  "key16": "624LUCAMaeYNyioePskPXvrVhDFV1oU8sSEV8otcJ9941yNFZvKerw4EauZSZoUEBSZHHM16m2q2YPsANULurRgD",
  "key17": "2iVGCFgCktM2wfnQzWMTeCQnFSBDDkBVsVr4ayXeeUnDcUroo5Gu6kFawJpSdPeJptKSJja2UWXR85Gz17QkHdUo",
  "key18": "3waYkRuCFRTLCVKurwjs7a9MobLCDzDQnSuShK2BZLxvFzkhbM8RNKmxe2jV78xw8grHeraRpnC1QPTYGCHELukK",
  "key19": "5ukXrwGFtbqH3jGbkmgsi8vWGU8Rq7yYGsdWc8MMqi9z6deknvBMgLzaqg1Ng41o2bK937PBYcdfHExf5DnVbF6y",
  "key20": "4kv93mg1tJZQRh4YcKB9qUoy2ofacPMftx1K8a5EhrX7Db4jo89Uiayk432AdTBTq73y9Dn9mPFqX2JvJB31ymFc",
  "key21": "2wubuBmJJeSB6nXLsCiSkJvx7AXFnjCwLqHHv33VEU5twXTiBqVhDzsSNzkftiej9m24fiuop9TPyQugdbakAQfV",
  "key22": "5JpXehMuTkexcgYVFfLx1uEvu2279o3L1wweeghKN3s9z8uX6kijdAw8gARGHiXvTwF1cVdUyMbNP3gx89nUPSMJ",
  "key23": "5v9Cfd6s748YgTrkRtTzWJSAetJURjcdRoWZttPZedPXFc7rcUqP9FN2ogfz63jgCaVaSu3SuNSZmCRje3s1GJem",
  "key24": "2CcVfsEY9u6KZ366BvugHUVVGDEj3NHkYEze1uTuAh2Loy76756KNNakdGUoa2evt4GfuB93MNcDKCDASzv5rkrV",
  "key25": "3idLLfKTje6A8Ey5dpxc1DZvCvra2DyELjZ2ZhvGYSGxu9XLzoeasZ95chwy7B6oX5S9HSpTT6z6aJ4Yiz3XZcns",
  "key26": "5eB2Jj6p6UjTUcDULWF4nE81UUbkFXLNbfjuQx6MCVCic4EdDLiE9vwrBUkyJZLGfj72Rzsv3F2mDWVuu4wtrQhh",
  "key27": "2BUqdqHqXoKLJZhzCSCrAAw83CTaE3g7c3txdHJAbeSgpWwkNU6kQzxoyzGvYVUEoa7yHN1uJ9TECi26jX5QNTyh",
  "key28": "24WkzSa9k6pRqmXGUMvC8z3u9osjmkDAJUjCVbA9moK2w1KpVQYqntU5a8uTrWEQhNRxmeoF4eZVj5F6objsFSfL",
  "key29": "5W2f7v55sFG5VqhM5w6CUjKtq3A7waMPV9wkc8kFyRZQNiMzcvEv9btPjrMeAo6TRoNt7ck6Heyb1VtWX3Zpvre1",
  "key30": "31L1H2xPDsgM741rjY1Md9PBgkdbpicy378UJMoUsRcNuHfeuNbb9PFa5kqABR6vtMw1Fnpqt6DpqruiVdvti5sZ",
  "key31": "2xfiPKiCAyvcbrZrX76zzHR4eJtqmzVDavcPywguQeVrFEvRgfkSjpgBGtXCLoP1W3QoGhDBZknCFvXJtkePJTyX",
  "key32": "5Vcx4heUcwEPzgXyRMWwRCXFSYk2GtSZi5JtXzYEqckh1iXE75kS4vtoDaCVkUtGdePsMKjSkWXdGbDZiXCphaXC",
  "key33": "244RBmHp8fzXiW4hrfDksPHfcH94XbsbfoFaJgNRFwzgewj7ARDPubqq2ZdsLxbeK3xjwRaSgtXDfaRYiZAEMYcS",
  "key34": "4mkForU8xQA6bTxrR1WeZmtiHTT9tCvTsi4mGvpHHkxSSvyZDi8qeRXpqCpYGtA6nnmhaDqMBki7THUDu8DvZjL1",
  "key35": "5TyLdmyCZACaMtD6idLrGQbTPXhGUHeCAxRBPh4D6ni2yhNGEFTzD4EVRbxKL9wqTyEBNNUQ2p6jvWw3YMu6eRfz"
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
