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
    "3psSha9L1KzhpvWNa55gsz81wz15iZ6PAbwogJEpWrrwc2RKYsKMZa42BfDPk3z3kHmPSbmyrCMNgw2W3SibGqz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m4eJLNv5a7ZrAByWd5ApZKy8M2YWu4oLSQmY8nDNuRAoJW6bVtZgsMpsWWotNEiNhv6UDTHRKixQnigd1EwQSbd",
  "key1": "58WxznCNKgz22aC31R5tZtNNNAMXMJ4CRTVWQcNaW9pMN8fieQ6YDj7uxV7XXHDgaAaFRR5ARhptRPo2SH1R6GGL",
  "key2": "5BiUrVJya2bCzznFxEBeirCn7hYd9a9jaPu4JLaBzZYcs8q4WNHrXQksqsyM9Ca4NrP9iZFmkzocqCQrGRfXsuD8",
  "key3": "4Z52doz5djKxnKzyj1yXgYXYHu3grRLVTS5YH5SGLzmDdijdNMZXz2Km5ATrgCoS5oiTQMrZkv92Ck1aWVnaQRTo",
  "key4": "2yom9THwyBoRr19u2mS4nnPqXcoj61nw8Cf2RSVoUUvcitMpq3L915SaEASYQgw6STNEGH97W6iJ8S8ScnwpBzbq",
  "key5": "5oRUY7twiXewWJd7q1ysteHBLPWCXHTKxdoaQAFqsXdQN7PU2BXb5KvmpsWpT9XWH1ip7WQ5m5anD5gwT2AARgcq",
  "key6": "5Hs7r6twLtFxoweZkXRjQp3G83ncP4bBUY68y7NXhQY6Nexhd5hVn1Fu9oraJ4xckf2veJ5shzQ3Sw2dDHxs18Ri",
  "key7": "5KHNjJ7mB7L3HmVr6xNfzKqhWmGMSfcYnud8W99YsEWFsQhrLWpn1rFM4yLcsmVUP72SgDqBxwrRKkxAhCYXCohH",
  "key8": "4Dg2bMrUFEkvDvQZJckarCbYyP4zxH6Gric9y1ii3Kqiw7cqJtP6WrWCUJ3ppSx4rcxZ7vFi4WqkEbXVWz4u4tJ1",
  "key9": "47wx93YdMRi84jNRReWJiqVQvm9qWJ5fvyjK5YnLQa6aL1GiHacRkzQop7DWWqrYtGXfiiNAkQ52527VKyN82niG",
  "key10": "4XG1Ukmqa9iYwm7r4NzoDXHKPqisZf8oyyBj4nrqjJid2wnhvgQp8Mtj5eab4t9rbSb4H9m9XM3SJBq12WAd9PRr",
  "key11": "5qrUBj5AC43nnsrBHyMfkyMVUt7tKU22wkCm133Q3vGgysBhC9JYfvMeJFEjwb7oKDhj5EEJLJgM5SkTosugUJNf",
  "key12": "yxjDKaEXqeFDnJNRs7sgcSxwTDC8YRocgGxBohXQkAEYHg48QacWAfXq8VHrH9ZSs8zAXoXMaF5uMaZsHoFxshM",
  "key13": "5nLN815Ei5MXUwbsrYpdf4Amxy1VCXDKhZpXoDCrJRWUqJzWDPLEHjAtbk24TgAqXkXkvxpMNBCVvguLdrwgonQ",
  "key14": "4wwbG9h73hzvFCY5WqeEc2gUJZoqFLt6Hs2QxFRzzLuYm1LfypM6FZSeNxM2uNfor1NpaAApvS7oxLH5HJq8CER6",
  "key15": "5mgB5v6KT4qspfhQSt3Pd3uRTrUwaAiG8iXeRYqXTvo7vTwecgF1gxFp3jLPfmypTwUJmX1J42kME8m9pKhMStA",
  "key16": "43chRZvRTNyuFV4dPKAGxUAGeE1btVA9qwD7mNebid6SKV9TT9fLh4SeJKBjFxFmWjBZ1NTGtXXemLB2egozBTgB",
  "key17": "GK6P94xJA4EbkgHtyj7AHwczPBe25YVtGv1m5jFcx3MNQmnA6kSWXkkwL5s1Yik1x26moVp8YDcpVsEbYMazBPL",
  "key18": "5GAU83GAceDegmSJsm3iCyQb4VmiiGfELy8GvzDe8Vxx4kzgztVQoyjK2gLDiwgireHxQuZBYYZQuCFTvuTZADHf",
  "key19": "zMii3visjSUvo1mcRsBKcFNF8HsVFMc6EYGM1MfYzyv72bk53fsBney4cMgeJJHPS8dBepCLsUeh6Nw6GSDytem",
  "key20": "4eykT7boEKMLwPqryf2RwGQE8kUUkvp3gXDGZ5kDZetCBdANqmqzH4RPNdErgxHQnNDK12zMCB3pEbrX3EGZfXS8",
  "key21": "3tU18KEP13f7Uvs7Ax8WbLn7GpZKAAG25LDYVk7oS6aU1djwnC2ebB95FMBHrg41Pes8JtWWR64NHAfs69HE15M1",
  "key22": "5xJtRE5doReXahMh5dDebs4MpCS6WpkHEttjb5RqQQ9qYkzqdJFwqjb8hCmLgeuGTZNqKL1cvFimmQ7S5RZF8ket",
  "key23": "2M5DyAixy6o5HnJzgWDSkWXLH2gD7gGeGCmVqVmL7hKnn3FVQnHXun7b5iV5AGtxbLeeg88WhhTUhqApwsuHicNh",
  "key24": "5kU23mQqnWP2ZJcCNR3tfUtwdyX7ALtdG3fFzyHkq2PKWNk4SouvqY6D2AxSXtwkANTMuQYXw2LDp1MjS2VdnoB2",
  "key25": "64Z5Hs4eCZX9LkdDQxS47GAmSFARptWBXw5JmADsfzxiuxdZ1FELfhyzSYLLTy6V3ZcrNFLfE4wuEX7YmoBeCdn4",
  "key26": "2RmLLMKBcvn6HmagJEsTy8RCx4dKiCBqiLPYkU3PqyTR1SFeMP5K31A6Z7KpeaxaWUyDuuDHPnoh9LTEvxR6RMfL",
  "key27": "3oyEvae7H9zkTEfJMF8bpZ9h7LYBWwxQs7TZHYEnv2TvZiLnib243MKdrAugKZCrku6j9i5ZeN9Z6GU6ScGmBP9f"
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
