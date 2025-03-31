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
    "2fnWHEqeVT4YDRhiNf7CgsgFBfDuQ7RbS6haUNuNFzJ4mhtGgRSQYiHkSBKd9CSJKkemNxycNBP8hAhyj6qhQ8a4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MYnEv1qRZeFZU2FreCAs9HAB31B2EE7csUuNogFdQyviQSvH8UaZAtiT16tr6y9JYhvjPCyUi3SccGiJd3E6W64",
  "key1": "5ycjFy74N9MoeKiAju4URhutSQckq25DVU3f5AqZPFzt2NXXCvECPQdw4TYNkR9wZS1er8EcCroNiWW2zqaRTzqW",
  "key2": "33umNbFLQxsmyfFDEQ6eYwJM35uVBiVZVWAi1GALSY8U6wp4TkrwyRSDCwdm18k5eZt3RVeXSRJv9ckobiua9k8X",
  "key3": "3TWf6LcHesinqNtPTz855xJEZ8FmRWrpNeqM6apsFCZY9QopN4ikpLsKiESzD5nMb7JCzxBAHYgiHzvbkk9BSvYN",
  "key4": "3bTLAaE9sivc6Zaj6roQga7EeW1by2pkri9EiVdzkxjWkTzAMeMriPmER7KxRrqaR5LNRykpQqqHC5UyycJsrGU8",
  "key5": "5Hnfm4pJYjT3f9cbNSzApLhj7vtZyXcBvAu9MtFhxE78HSPoftPj3BEHx3qWohLWcj5JtLr9kwSYrBKGNBBmd3u3",
  "key6": "5bVnEuaLjGvrFs5o5WM3TBi3sTRoqqvWvWkVVxwcTtNrKorwwo9uoEogVF1tvP4XgnxZ7RXBGfDdxq8Aopjc9qST",
  "key7": "25mro6prSvQYRSAYTSqzmkSYLspKLChjDDtgvizmDFy7thnf8ttXYFyg5FDyRbB8S7veaaJJtcVNuY9NHmqoj4ZQ",
  "key8": "4R9fFcyf9viuk353J3ycAxn9PB7H7F6nYAvQmS86i2fuPHWMauUW4vnAHmhrELFXhRpGY1z5qH7s2WmSVkHPEnVP",
  "key9": "Z1kzVhTsgVh6XbG8LPnb9NcVhx5GgE4h75G261Q7UjGkUAmJLBwSJ9fLj1roNomGzMm6bYTuEuJEK5WUEAVeMXQ",
  "key10": "74caiCTGwSryT4bN5KLVG32sCt6JfxWBegf7iios93Hzk5nHdZZZGsYL1XZPFvY7SDCbct63FtrEY8iii2uYGF9",
  "key11": "YUPsG3MKcJ8erTgrYqej3X4DGDQZfDWdA4w416Wt9xVZLwrZjJYuK4dzp7BUjRgrDtWLgdoZ5uMgyYHUJKb6Jfm",
  "key12": "2GqdG3Xn4YjTMf88ZLkdqjRzMCxMx1kk8pTX2XKCKxkJM4UrnUBNfaWpzA4Fvq5M7kzQXnWPb7gpWWpM6qYFDh3Z",
  "key13": "39KdB1D8WEAvzYCaoGwaNWSaJTAwt5xQgy1ADqdcCV4tTAsEMaGn4suKXgD2uafL6fTp15B3wofqnvUuiFxL1sjY",
  "key14": "5GDJp7cWf27G63aiuxTAw12QG7Gu71ZWzBdrYEZ8cXnQyc6hv1zf8NJytANB8LRKSSucmKKs8GBvFM1KsDz4UKaB",
  "key15": "2ZtjhcWJBrRKktnC9K6jKCvXxye5zDwygR6UiMYa9u9h6H3HASq43357ffSNRzjMTRJJdjpZap9pDXx9weJU6AfL",
  "key16": "EAyw7QJgDx5QtY3CV1VjihAGu2tWKygbcfjVRX93u6DL1HpJvvhwT2JxqdjAyJP7eCAPJSMdngXwzUTbv2SNzVM",
  "key17": "3ekcrSsaWkXmdagxMPRDNwCPpCG1pukTwXsvXxMQx59s3dNadHt4uPjRZDCMxEy5btJyTzRMsDgDPT6HU4YuH68",
  "key18": "3bHb9Rdno3b2WKTn34j4r9uFsvcDZLapqSosFBeKyriMjrtUJsFJbDjtcR8t1uiSvBpuxf1SHHPiJYKA1u7bAFEi",
  "key19": "JNbz9Y46642sY4FNYasHSXu7qE35MSAnmysG2mx2vSWuy327uUYuAYw7HFdg9YPiZJrSDqbnu8ave1ByaPPecSt",
  "key20": "3CQNTRVXPHzrX74FLn9LWirqD6BM5nMicDXbS5FUzCPQDjLMmQnAFxeWx1DhmitbsMv2i9d3XQAouiiNX9fiL7v3",
  "key21": "4StWmuvx18nTS74UFpDDe64DDwwt5XabVs2BLe7CmimLEDy284xc6jh8JAfUbZcGFDY279opGphQQqHEq9QMJgVU",
  "key22": "3WFpfRi4DBqZaFefY86nm8qXXy8o1is94BWRDSb2kNtZH9vi7fK3dot1jJNXRsMe31VeyLfhxYUtj7UQNkM8Fcsz",
  "key23": "2KQarjpCRz5g4EteN93VhdHRYhq5yRKsWbNo8hKibsoQ1NpCRF8GofPQDqAoyBLaevnTK7vioshB7Yw2QKdpuy2F",
  "key24": "3cYxd8wi5oaGK1kjQHQyc26e4cUnP7nU4iu9S1BBVK88GsY9VdY8uwfaU9SUZpa1V5cgqoLpR5yWNn6ZMAq59mjm",
  "key25": "44PQcm9DrmZy2YUZ6dayCcUpxr9jH6fm8m6kL3XsmBugy2dA4nZLWs1S66tEq2B5fPZMeasUrAEjCDwBQ7PfGfWF",
  "key26": "6184faDtAHkDr8adWg81fDdZafxd3srGUjKJ1iiro888cJL1iFRR4TTVEkjFzaWMPXjy2p2XFvC18ZZHcDdckrC6",
  "key27": "5s5uWvbKUSfqg67LbMoo2Jd8FKxZwkBHsjkPtxjrJn4jFhzro8VnMAXaxtzRjM5UXvsbgt3p7M9yY7Qsa4dbEomj",
  "key28": "3qcmtzDJdS9si7DUvRRRYNP3CqVBQfv7PPoaxsdD6NVERtaa5uVW4c3rbt7WGY7XBewzh5N65f6Zdgpb54rHQTeK",
  "key29": "4d7qQJkp9HKkirGAJjRCgZFEoxXHfSPAGywaybE7a9F6PJ3UwDnDfFv47NTqrRPCkUq2R8gFqbb5YahFqCNZ4dWR",
  "key30": "51rebkebXruK2XJsSK3eC9z3dCY68e5phNv8VHNt5oyPPmWMcdAfny2RJoGoxLm1XpGQ22WK1FoqqGa3vAKbFqwG",
  "key31": "cyYHFC9k2m7BwJRK1kiQt4jaHkaruGv7QRQNyDCe74BtBqgCQ9xNmDn6ARXZkvM53bKb8t752d9w93oeN8HZCRU"
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
