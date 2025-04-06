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
    "2FV7udM5fU23Y6rjJ3drW6iwENGQYZqyBTCAVrghxXcbuJXbxMBN2BTscSYithx4a7uxNBB3y7VqRcdZmzto3587"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o1fnye8eP8mwMbA68htq7z4XywJraegHrRX4jZkr9bor3Ah9pPh6pg3pwAwB1hkRr5MkiQnD9TtsjYZaooYMiUJ",
  "key1": "n9z3G6FLbMooewPTZCAeSKV8fNZwr7q5CVvexSvrZGiqEUTu3wcWhb5dqwt3ERoKeWqa9XwVZT1AXGn6w1tk77M",
  "key2": "X3ftxNMPGUQZigHTAXBbhU12HxpeAyVtuQPWyoMk8CKqnDfZDQgZ5Uysb8rLTvX36EHLc9jDNoRnMAL4Dbe4ysi",
  "key3": "5mJY7M5id126E5H3Z6UxmT5qfSuVG98Zfcuzvkip6VXrKtQZzVkFRtP3dTjqpXf9VshoU7KrJr92FkFhZ1Rjcyai",
  "key4": "4L8BjhZzYwMHBMXEW541mHHUCw57J2sEXX13zCuKKtQUPbUvW64pgSSKBVobTwzoLsCCxRKsTLFCHwQhFL9uGBTK",
  "key5": "4LmuT6xf3D6ZCLsJG2QxiVXcpCfJ8QYXoUcE8F3HSCdxtM9m7uUh8s8j7NQRoqTociHhmQtB4uoLe9rwwNiREh98",
  "key6": "3GbPpP9HmKr3Kb8TWcGqzdkRaTs8W2dvVipg79RA1eokQpE4vktMp8h8qWz1xGFoUzWpAk2zmtrjYCo5AN4chn1h",
  "key7": "5rYkywxdoTSLvADdsG4767YyNtJnQfBoHStyoA8unSGTHZ5Est1cNjE5J4sfqA6Kwwa1anj3PK47FhacVHbMjcnj",
  "key8": "2aqtpyNmGB7agsuqyKrmoXkx3ro97ztnv2o7mMrSdwGczkxc7A45FqQAfyPHaHX5Z7KgJQbuHLYsGMB1zKhWM8uZ",
  "key9": "pvVg7pJumhzKC9eWp8TGSV36RfKyy3piwvv3mpJdv1CuW9Yzo7bXHvJ2akqBwR1rmeNDY8E7MZ9hmWkEaELYFHq",
  "key10": "35ucNxZjmdgRKC6EF2KyJhCuH2XwPJaTfNnQW2syp79NBn7KnrTZZX3GeWk1cKWAoc8DFkT2yNh7W28SZcUh1kmV",
  "key11": "2UQDbqzt4RL1karJCwqYTLg8CxHe5PGTwnHkJJf1YEQoiXXrHbys7pwspSxu8sxD4NcJpTZjVyfJMJJedZ1fzVGo",
  "key12": "3MQtPzdDC9dV6GULtjqsoRtk3DEvqE67KeGqBCwNDw5EihjBaZF6yXD81nzDeKRkSjVxtZzciAMw61W7yAjE2Rjh",
  "key13": "2qgcH5sGFpa1xyXTbHCN6FTXnFqsX3Vjpmec5okMKHDkMrWT9BHLi3mxoEWyR433mm5wS6YCGBXY4TTbgUcGsnkG",
  "key14": "5AT1h9XiEr4vejx4v4pbKVHTwzAJHvCxVxTrvQz83qjKJEF9tRyEfjchFY9wyzurgCNDGhyecnwFeLMaJHRqpb7k",
  "key15": "mvyxLfdLPJsPkpa7AZjNor358TUmyUBbLwpnC8GBubTmbyu1x4HTQ668fh4Kq4bjPZnf9AL3h2N1qp9vEjQtaD6",
  "key16": "4CB17asvV5zdR6iMdTEdA8KUY8hdYQUmDW3cVNfAB7gpNUaKuVJTNUhLutpNyqRh3rkKpzhyH4R5uh1yK9QWfsfD",
  "key17": "aeupW8aGCpw95sN4jHK1fuVfJHvQAJdfBH4HkNSCmwRM5hEX6XJkUD5QL5FXgzRpcJPkGbA2v7tbpKDg1DwsWgi",
  "key18": "5HhdWVd3BoeyNfcbzpQZPY6Pw8985mZXPS6akZoMJ89QGjUJKR2Rt1NWLkoeFkZQXKFhcLDQsLPbCwqKVSvf8Jwk",
  "key19": "49pHsUGv4p8pjHmLAeLUrLgYu85HWRvCRVxFGRoocjtKtZFfKWPWZL6R5BxWu7tA2jUvmDCzw6JRP6dKFDHaguVL",
  "key20": "2T7odaTEYbq4htUhGdWjyHfM9dRHzL6yzQe8kDedQ2RgLANepKBufyhZDc4Xs2Wp83sbDwn9kUQiMh22ULngnvcD",
  "key21": "64sDvesYkpwjxjqa2gzeHEtyyhcRnE6GsFLDjAkcjFVHSxxXMNPnhtLKRyAHfzLfht2pNQUy2JS7ayDayhrCKbAP",
  "key22": "3u7Td1nRrt8VCLHxKXrmUt9Xp6ZfQbpfX7DwPBGkumS8F5xG5gJ7nbKkxZVnqWHnc4BZPUU4RVy1NYLNkGUvKTCW",
  "key23": "3hvhZhwfp7vGbybnTHBo7PurZLF4bDgy6gh5wmVk57sk8Nv8R2SjFqyceZWiy9oBkzEKzJhYeL8vAAHKX84qSyMc",
  "key24": "LPthhsGTXwPzFe2UVKNNjuCxypi5u6YixS82hFRxNcQ7aWoxr4zGDa15YPfBBJ5vEn9soXu3nAtFY4CLY2NT56S",
  "key25": "UEqiS1A26gADCJLe9gFGZGNwFh9619PqnhF8Me5QqtKg6yLjcD6MPi7Nrr2KawTHkRR6ji7gtCvxQinpPBtDWVU",
  "key26": "2ZeCiJ3U3pP8jtTYjapzps3wcMqdGhsrpXMcwHVDLsCVK5YG6NZtTQPWuRJehUCC6X6TXUQeTjex3yjvHyeDXuQY",
  "key27": "3h7Gx91BVT9ZyAL61T98b5LymbZnnkgixGKj85SAMDQEMx9KxoHq32orRTbfkNzXAeMN7h7zhL1XSoGVXLS6SSxr",
  "key28": "4uT8wvjabziWYhfNBLZ9B3Bj6Hft1YujjJmRK4rVoJuHEp5j1CiGEApd9gqsc7mSP9XjWn4ZEcYMYxXPFb9bGkjn",
  "key29": "hDo1UUqiSAmL8JgQEcqwVQjF2wmY2aXkawjikz6GDiEhtRhcp7mtedhCh8jJp36Zz5rhmcVTS1R9n3iFur7LLY6",
  "key30": "33MLAkuTaynj6ErgaaFouga9x8JMf5vmRToLhbzPESikdLWXr9fGqdffwZ7ETJHAGk8NcMQdHpbVnmXKEabcCsnp",
  "key31": "5rjYUgtFX1g2UvV5MsXXiwi6WZq8tVJWUGFLiuE5yMd2VRFtGAXCgKfzf1DARQZrwN1XGU6LcVqMNFdTiVHbq1jx",
  "key32": "4B5BSa6bNqBCdvJwZVeonxb5cCMWpQsQVsJgeV7h3h37CwbT9PNS6bLxFVoqohQ4r5wuC45yGJYqN5mWfP67D46D",
  "key33": "5rJd59oHgz7Z6Rh4VtEhmKv8Cwz32mKrYaRkdkhifojzsJamLRahy8GwS7m6sHSHCWcsVuawU12eGj8VTbb1gwjT",
  "key34": "2pQakvKUQXm5qjbcUyDAhM8vd8v48wQU9TQW6MUr6vxv6heC7NJWEM7FYgSLvQnzhDvQsk1SsEr3uNj3gng5b7ug"
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
