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
    "2qCbu5jxR2GuwdFZ97t7igc1ddnSv9VCt6tpLtRX3AeRhtzkaA38ekTcwXMPWi3ZBBT3r13jgyMsc3hSt8M5rz2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ldq5JhX2taARB7Dju4TGr9uyHjQHEYydGitohYo48wPxdcJPG4d63dNWjoQRLXw45JUz499N55SE5oQ3NE5QoXv",
  "key1": "29Gidh1QtVFTzw51Rd5z28wCSvCtQmg3ZmzGDd5aUXT4eBp14RhVQNeTBP7jsNa83e4zA9jA6oDWRZTcu5UZZePH",
  "key2": "2Sh1X8s1DkwRY9thWBZFLCUk5oP5UEy4DtQ5ah3NLNDVeH6f5YCawePssAJBgwcUZvpsTWcWJQ4VQ1zidMunAhiz",
  "key3": "oBHKjBwPvL4UFc9nx7Nvr24ERJSYjCTVdBVvkEfuN9F6cLkkkscxRDVxRZqXp1CC83HFC4dShXNrTd919VjA6CW",
  "key4": "4MTMH8EkR8Xov5GUXK91vFb4Q82BNHeT4Vjkbg4vfF4ehFBhNPQ97GbYeGurvUjNr4zB6KiFkMBHuQZwD1QzFfrd",
  "key5": "5xe6tFCCvi5Xxjy7CRUBvksbC7Jno9NizzQk4A9TPzLCUMZSyoe2mtKDMDakjtGfAfZm2ZQzVoaq5qoi92MaeXQP",
  "key6": "5H6qxkbLgsv1xDiRcSc8Jt1WsxR6fTuwPBebXjeR8AQ26H9Sn8KYvMDQ5QKfizmNo9BhKEm8Mva1v9QRA1cDkE6S",
  "key7": "4VArKudNSaYdS1KzYPpoqCC5b3DxixbimraFJNn8S7ZgNkHSyjfEfaruYxDfy1j1oTPerukGFQ1teHffWqkYYjVX",
  "key8": "52vfxsDVmJnzPW95r6Zh2SDigX53rZiwyV8AVmiro4eKR36yotePmBQPZwPwSWzP1xsWKZPfLdte3GUCST6nFDVD",
  "key9": "5FFeAKWGoeQUqzeiBvwvcUXeXr8zrFRQJyBXAVikaAHUPnv5yG9YkGpagJ4gTKDSLRewNfdPuV1Zjm7hjMpEkY9n",
  "key10": "2joDuZ5Z4RGpMXmtcST9oabfuRe5Rpd7UxAV1sf3XxHUT3FeoPRTmhKcYezDTBJ7s2tHExUARsRMsxdPP8o7SCND",
  "key11": "3rfbbJGnaqHFyMvevHg4gwSeZybUpCzyzrdy4XronZKBvo2bTiWX3KePgcMyE4H2fVNUByAuQKjK2juNvWWSGuRB",
  "key12": "58x96TPLKYvAxNj8bCTL85ipvcwUfzdNyVSAnYFdGS4osousYrpkBqov4WB5ASMZkeupABaxBFQCmxFqYDz6ByC5",
  "key13": "8Djzkb3u2JdZkyvjV11e7CDCtNpH13R6KqgqsDfMq9tcUUYASFk51HbtXJuNY2sZnSJbqHCxwtfRj4uDaKhcppT",
  "key14": "3MXsGRMFkMitnwPWkmVbtuMVJxGgUHMRGq82RQKKTMxmvsoMsCeoCdzsRJDTTX2uAynocNawFfjBuAEwLXRdukDd",
  "key15": "2wMSm4WobZo9Xbdvff5fUkQzxs47AfACUBzjs5nLCsWfbpHKuwhtZr3dAPa7EKzWTkvhwst4yDVAHBh9QxTECnbg",
  "key16": "3BFXGq8oB74SsNDLw7gRhU3QLDTQkYPakTYvzLRisQa4LTtwYy4a5sE8279q23XVCKvoGdkLnBw2F13kdbM1WX52",
  "key17": "5EmBjcpMG4gAG2XUwmtjQmzSKatppnFBfJ1Npo52LGU34iT5bA8SSPQPgfnDdnLu8DwUh1AZiv2J2iPtS7NkXgvm",
  "key18": "4KnkFV7B4R1K1h6iUdqmjjg5WRQGW13tZ7aYNn6M6wJt85QWYn4paZr75nGsmSEdRoQTgBavVkFMwqg5YbqgiWq8",
  "key19": "4DQBFxMmRMhR7wZNmiJKyBCdCuXZb8kavSQDx2ZBkgnAiHoBsjKWPn7vZ7auZGDyUh5bdHSNbAopggK5i9B2sxdn",
  "key20": "e2XRV3TWfTwDJUu1LjRFsDxFNA5NdUjKgZdPfENnRSNtJVJvLf8Gekm1uyCTEPhLChjpmjk14NWVcwzecut1LcX",
  "key21": "5hbA1eieffUvuSeRfWZVN4Z6cN4F5LbkCQJCwaqbW9JSj2UXNMZ2KB9AJibU5jGAjfgKGfKLHnUPRCPnC7NkKKFL",
  "key22": "RavjR4zftTL3xPC7omCtz6HesEvE5nQ2nX6eBvKkMgiB48YjqRJHRfyYE62PL11JWErMnABUV7rdrG7NoYFWhwo",
  "key23": "5p6r2ffQWFV1xLGCYcDZL4Cssjxyzmwmc5hcgdVWMnLGSC5Y31NcqT3o77ocVeCjGfAWZtWechRkx62X2ojUUAHn",
  "key24": "5adFxbG9mgLD26fMSaAji8Lie9Q8RaT6RWNVeaesmA3wDoPs5JUCWJWw7JYJyKhv79L7PHhkde8RXEqdgbtYREuA",
  "key25": "3B9K1NgbARC2C6zMMEBHE36ooanWha4qaF2vU6Mbpp7fiUGa8EkSTmbpbGUPrR3LsSteNFxt26NTNsb3ygTFuWaV",
  "key26": "487XjQkqCqconuaCi2PzEUBesHgNmHCYoTvHHbuuXifj2gC5TvNUMj3g6iUgxLbrqC5UVFBLfcywqXJyBo1SWJp3",
  "key27": "gZabjPjzBU1Asq35GaN1F4WZPhK2f6MVhShAHAMfka3rLfZa3f6cCFSNcWCosvuWq3ryi6kri9YTTDEbHAa2DfD",
  "key28": "4QGY1jqzoaQeZsEtTpWG1RkMnRdoQrSRvCUe1v9cFASJhwxUxo18sRXxhMRoYkS4F86Pqo6MAURYtYUEnQpzXojh",
  "key29": "42YkuWzKy7nmNCWp7aTSAZn6TLD8YTzTPUKmc2D1fvsUuXAmWXiw9vtYyNiZUUorymgZ8AD9TmhdDs1yAyZYTtj7"
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
