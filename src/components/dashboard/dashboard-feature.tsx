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
    "827HfDsNm5TSBB5uHM8uCY7oUZBLstztYuiugCnvLxkE59KezNHUKHJ4kRY5iFCU4ZYoKYmh22ToVgnyz29c357"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i11uYGs1obNWDFcWdTWoQHaWZ7cZpK8iGPAawaKWCh4LPGKhdouqKhFMfG9QvTUJ81L6d1BcFPw9qzVqHvzEQqs",
  "key1": "5k8N8vsy9QDNycPJjpQZegvZCASEw1fVCgUx5Q1me9kD3Pt46iorRoaW9cRFNKEVQKi7sceXWimqVXoXn4xsa9qX",
  "key2": "24eveY1ZkxHrSwZCsFrS47Ptq5GbSLwAaTWP8UFDondZ9DYbfjKNee8yRWhPzri1F33NCzQD1xmb4ivErjCf5QHC",
  "key3": "5wpKUmQQWyp2Y1ExBQYD3gkzPGXDG4zQQi1UthG2E2zGHuWTmDuv76DmYS2N3T2ZAWfUwCmVEjjGy6Pf9DoiZYqQ",
  "key4": "S4bBKWfo3zUHq5HGcUeNEqvU3BAt6n8Lwz92hRASMU9GTJnLSzL66KwDYD9c4NBEFAsiZqfaXpSwBHFa9VaxVpm",
  "key5": "ogBKE5Ns1iUUjShwajUXJrDMwEGLqGHmrwWAXaEWBbx7mVmiMkWtfQy8c3BxwZVVeq2Z5V4Ndq4PyRd1arRHsP7",
  "key6": "2EwGCyUwcnhZBpGWgxwZC3eD5QVNuevR6zGvzFRua2yQrTCVUAPArpJGVSaTfd56oy6jk4JvDH8c1MwFXqAMUrBw",
  "key7": "5BKsAoZRg5K4dn87QRxwTd19EJGebRa2SbupnAxoC3yYUzJUPKZgXGT3TWKaB61aZZ7qT7oPo9JVtL7RxmBF8aVH",
  "key8": "2523D79P9sfLpGDXxfcTYExPGNbcH9UDJVbjUGHpAWXLyDLY8zoQZrewX39qWdxsPu3sxRSXKM5jAKktWkADfZ7o",
  "key9": "4DLEmDJf1xfSmgD4Y9yVp5DugRBev9o9hCoX1TpzZDxh9o5BbNB69UVuLNQsDYv5P4B1rt38kp13NhRToCETADf5",
  "key10": "2dQSpba9mLWqHAyykRRXf2UrzZBi35iQYi1MVhKPVjed8DbXEuULoBr14G2qQ5WGAxK5ENGdGahoW2hJNFJcebcc",
  "key11": "35EQ2KsxLMn91yoyYVZspoAdpQFZDzcRKb6wb9YZNfkmKqj5Ds6PmUWjFCat1hAf5Kfci47efjGsypduJ2zbXSLm",
  "key12": "42BwPVWdMMVrvxAyJ1cXCU9v7zHXVVBQMGWz16Xe9kwYaLEFgQj46wNgHdyf939F8QztkmUYS1VFFzQJNKJBnBSM",
  "key13": "468KskawKaGWumxcvmQri3k1tXv9b5y2E5kyx7xgP6Kh6iX5fTs42W1cbFNf9PwqZ6RrKJeW7rBfPYdMo8gZ2hRf",
  "key14": "5BJa79j1Q3Hy7xmJgHcVDqohVzAdLnn6zz9dVz32hsprmCUJ3ZCrpNyUdrBG8gdBsGqcvSAnfkK9b3CNw8MsxXcZ",
  "key15": "5B1eQCL4iPjAaDnZtAvUX8wqoRd7HR8yLZ2m2MvhAy86u1q1rxhV87dJ4BJ453zogwwwDCW1ezHsZ9mvEbEkcAdm",
  "key16": "4t3k89pNWxNLxyvHkoTgY1tFUirw1YFmCUYK1RGjA6H82uCjB5JZJvJnEYES4q1jKfumYorJz1cFj35hduV6evLa",
  "key17": "33eGj9pBzP2i8kpwqmmU2WFgnZjFNQmJwT5KXW8sRQiHszGXU8zwrJKZEsSjbfibw2haiXJncrHB2oEYHnNjnQNs",
  "key18": "Y4RLWoapuLuf5eD1UutsefQZ6S8npVe3vx5gudXyZUFMoWxqXMsrYSwaq4rLZJWj5BehuAxHUW2G7sBS9Ssu2qD",
  "key19": "4n2ofo6LBH3KUVmUZw7wKsFmeuWR2sHqcEnpZTYYZksbiA7bcPQ4wwtBfmQ8QedjJCAHJBs9gRyCqFGHsU3ez9MA",
  "key20": "5PNf1CkYGJUBVhhf4dro28xp8EXsFt5L4oDRceH3MkJNAKFv5G1AhEXpKk85fiPUnEPe3PGvkteW4PLAkcM1VxhG",
  "key21": "5CdojiDGer9jCRsdmF8djCSjY5GWJMgE1cynUUnDhz171xPpEfFCrzZa8j4Ph9SmXinaf91i9NmenLCfdm8ZB4Sm",
  "key22": "2TiR6YUrKZD6SvCGfeABZuCvhhj2Q7G6nRxpN8pfh68F7mCpWK9JPRZujVAGEE4RC43iPyqvvaMNioYYgNTg9FLE",
  "key23": "2BpnnjbjoRv4WZX9L2Ax8dT9Mm9tUcBd9BmpgxuKY3qrZGkySbf8GGW8ta2K5Xgq7z9PBBAtgs7RHzp3HyqW6zut",
  "key24": "2y7r1msJ4293RL1eC2MsvvmZLqtG3Kd6CwLMfV5AjEtHH9kyAADZfzk9GmTzgrdQ7sWY6iRcvR7dLJaSdVk11UMA",
  "key25": "33VQPd5gr2VHrLYZxo7gkmsouwtyikHctjUPfb192agrxn6YqJoLR1B1CKUiabQz8TVmK44yPH6ENptMmZbeAe6z",
  "key26": "5jkVodq3wnHhjNzHQKQacPvn9DkVRqUB42NNxMkYGLXcThTdL3vRGfacCkgnkejho7zp3zApacmtvsti3v6Gz9tp",
  "key27": "3UVApwJchFvovx9zyNoCwtKEvjDtSEMDtMJJMWZBmWY8M4CHimEBLmuTcezN7bEBfzaC9oTZ9ioAKhuBJnaFMnE1",
  "key28": "5HH1sdaXJXBbrr7Swt76XqUbiSuyzC6kXPgyFsfBc9g99mtdX3BUnYECSBL4GNFU7ELzQcGwu9MFXa9jBWXY3Fzu",
  "key29": "3V5yopyTtj8uwRwbhXSwLVdZhhksypafRZ6h6SxgHREQFc66RPwbtHK8Vh1XRAR5beYX28tkLzwACKK7qLN5K5aU",
  "key30": "4BAViuSenZzju7hum1DNEuHUmZLtFPCvAafbkTHiZMbKVypGbCDR2iZ2a2q1a6qWsvVf5V46J47mF9tnjrzjTtxq"
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
