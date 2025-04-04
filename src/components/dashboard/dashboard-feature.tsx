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
    "GDgYXS7NruTa1aroUwbPrsXdXoYTjMbKKGtX9EEZa86iAM1NT4y7RBvJqd2VRLUMSP9Z58Jg8yvs7aPm6C9uZVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k6GX8Zr6eda4HWUeoP819vyYo4wdLbgZPpKVdVmQcdCqYXXSVnSx6LpEXGDAyQBonrSXyd7cutPc4gnLfannmUa",
  "key1": "48CoJCQ8HHMZjSUnihhqfpEG6j3pvhyn7sHxSbTEbioEBjFdVPT92hK29kxcLQ3S9GwJrn4KjXAJnq6e7KKQLW2B",
  "key2": "4dVzec58vDYDovJLr5MmQdzRSMibXkwfdF2uFyGK1SwaS8h5LtehQHA1gFXiYcLmFRLqnGLPSg8VZwtSutmejzhC",
  "key3": "2F577ud7oN9BGyhSh6tz3fj3p3XjSbstsRFuNmnRqHvpXwWqskZoDWJDxhK9fTvtUdYxUCMoNbb9mmTqVFWjmNbe",
  "key4": "3TELK6XKZGwwa5xNWx2VP6JRvGUHje58AKckSQxStS5YnUmCEJh4XXqdw8jNfyvneMF4tWuRMRZoe7H1wreZtFN7",
  "key5": "28TghzWTzVGTkT8MqfUEmkrGdzbhctL36E7s8NQK2qDNf7mTzQwNG92HaLCZs8ceC5xfFvLs5Zo8JvSNZjayJehd",
  "key6": "4n1PjBipRXcnScyARrtTTeo1JDxNqjtoxgcRgy8bMJwU4oz7trGo3DnKUnSTAty6aCFFD8GagzS8N1NiT29AucYz",
  "key7": "4rRxBGvAapVpHykjbAmwgf3jQXGzKQtyKqbxs4y24s6uRFknPJrtCWyCsLdg7w3vPCePVFXWK7QGhQdDtpaiscb1",
  "key8": "3vi6TBb5FVkYd58pYVe6KRuV3Um2hGY8VPZv3DwwhbM5PtGA6s7wPaDEJpRgnkofjNHSgC3k1gaTmSuqDfcwy1R8",
  "key9": "4Y4GMD8Wc45fPuQwnkmrBE3GT55TcMtyA56qWcRWVVi5tfdEP8QuTh7R4Sm4dv3GEoMmehQy55d61HwPYz4t6uzi",
  "key10": "5P76tixNWHQZbGU1rvbsqdSxrLe5pUbFKvoWXTQQrPD5bTfrVKbcGHmjC51i6pUSaAKhqpdTQ8uAe23N9MnmbTjW",
  "key11": "3kNFhFj1m9PZdEuvfizNoxFbcEF2Ss6vFPA1y5vC8vYz8F9AaU9UgjYjNiT9jLigXriYHeiAy5JQcYunigTFuN1j",
  "key12": "YXGwXfVPga7dwwpcNaWeN9zAhrFSfKMVdGGVbXWUpfv5xz3PtTF6uCmBKn7L4yY6tvJ88v5J6QV7o4SY1sJJrbf",
  "key13": "3urXPvLYFjLmHgfiBx1xhqSzn4PLUjA4Z4HSNtxEmR6CVak6ZgaVQxMrHfM6cX7Yg5mkAJVsZvNywTHyysi8KNqm",
  "key14": "4DPiHFKGFAAgDxmNqiET9qxjKiEnpE4CobdghvfoN7ETLFgcWVdZkEujybAZW5K4bj8fGnuTCFT67btfAPjSNLSm",
  "key15": "538sF77Z6P42k7Yci4Uqe6p3zdEk4mHGA48q6ePXjQ197FSS8d1V4Ujq87F8SrVv7H89RvJPDZY3fQHmx8VwCPEn",
  "key16": "4Gk5eD4AnnrERXtJkSEhqD7cJiEUen23GUrUTU3ee3WfBXUBeHqMRy4xsePopBQtRp15SfLXvkjiri2hMpoztQKd",
  "key17": "2QwtPK3XhB5umZ3yF7LFhjU8pFVzp6B6WJ2DcinHefFtBsdhoNLN6VcgTcbrtNAx6HoFtxyPrKBKHrBmybSWdg3q",
  "key18": "3QJK8X6pHzCqX9X3eSNwqNLPwFz9ZUWc69Ws49pZodTZEJRy59YRfQXP4DGpXvSmUwJt8ZNdTn1ZVpjVtpjwQPC2",
  "key19": "5S31uc1AiHqwyUMCDvNCWYSWade8a6qYaJLogWhFeuZJgVf5jeANNtEbZ95w8wA6tsYTWerBmJY7aqwu3EAgj2H9",
  "key20": "5YiTTthUHSqhpn7qwdBtPMVAYHDETMuBXv24XaFnjy1WX1gnqSZg9FjLL3qEzcpC51XSN49xB2AJT76Wart67Bfi",
  "key21": "5Yq3bsZdUXJMuAucjBDfX8kNW1axZvzS6vwhhMtrZuo27U3xFRAmQ23Y4hiuzsdyJuMe1yMVwes4tHmHwq1Ke5Tf",
  "key22": "TJkU7Mxix5BHAN5Y5dAdkxCHSgTYT9mGQsZDscyMMAha7ydN5uobeWGqvcn2txz1Qb2NnUR1CpbL6FGaWkVKEke",
  "key23": "3uqdLufwd9gvzqfdD9Ny3v5acLCxjfDDV8LQPKkEsjM9jqmQ8ow2wxDrvgAHcTWxTbTTLPg6K9tnqqkrHkwaiMUJ",
  "key24": "3RpQPbg24TCNV2HgYgWLR3s2ns4a9SyeLYhgcKMdzMH5iEh4PitbKw23Mwm5MZJqQ4ea5c1ccDTWzxUjBGRpqrNQ",
  "key25": "349fuSY7WrPXfeqewzfQKEEYgujZZ9XSGBgucotU5htUGssJvVRt6Wmb6GdjBAfDsswqwon3k1aK2XbyYR1EUCWh",
  "key26": "5tRxKJQhpbATQKTSYWVLyQ8MuC7qUBdkgQhUfBPKRjGvrxLMJWWjC8h8sC2pUpEPWUpjU3kUTt1A6JBBzgbQwxpi",
  "key27": "2JsekRyDiXAnQeth1tANyiVhr3MQXAs6PwU2FufasXrBhCu19M5cYwQwqeTZDWmEZfehVNC1WVPpMd4DqHX4XMbQ",
  "key28": "4mHMfb8pUTSFcEuJG1qCemHWCrNGW7NAfCMLgnjecEmgS9KKakE9sfxKv8LK8Dnia8fHKf9RCLcMG1xmqFbsExjf",
  "key29": "3KxfNZVYmYYN89VjkBnG8WKf6MKXwjwNv8VGfGEciiP7nsqxGZ1VsCf9LBHWnJA7RkTzSmQ1nUDAbRUCD9XSLHJ2",
  "key30": "433EPajZJHk6MGeh7Xb4L8gXY2PLXTdcLBG2SNHwKJwcBi5nVbJ3otzKb7TPQXbp3eGud6DvCZ2HPZzsYYcmgkZg",
  "key31": "LRpR1FzHnsucySEoqX8hewtsdsahQozcNw9WizzhrBb2WegKPhX8h2GuPYtFufXS4HS8okztXzhYVFznxigmopv",
  "key32": "53uKpi71MZBjRPGGYetJLkeqax88aFSzQ3ETrYdA43ceuJQh4M8BDzwfmQMwPS4LTcdfV5FmbrSfa3pexJ13eCnm",
  "key33": "67f6FG3dn47YrakfaNZkrBLDwDg7p2RmJBJ3WhyFSSLTdRVy3ZSpUh2phbAbbUb5Cp1X7kvFiCW1zaD96B85kDEq",
  "key34": "3TqUWYHU5Dgkc6AK4kGnYjAHDwA1FxJ9vzD82SHp6uAvQEy698qcdkWQNMYCnQag6FtQJb6q6fjcwgxdoXeoT13H"
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
