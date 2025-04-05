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
    "4RFC9BwpBhQUGnEJSQipbaVc1eTCexh85qY3q1nWEiEYHAaadh5gKC4QLRdzZLWa5ZdzkXLtduxhbMyGWr7Q6s8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XumRbdPGDKHTBV15qYuVeR7hexTEzX7XWJHam893ZrHGfpa8xzgmarX54a3dG8J9BVNHg57HT4N4MCQ9tGWCQKG",
  "key1": "4r4TYKBFSNk3NV9GL2nKAudjBWfwpSURHm47SR5K6p1MgFTtfLSUgfGj8fhou3EuJXEP5WRPWKDNwrNuF3m4kmSw",
  "key2": "5cfVEGfYdFmL5qEAj3Y5WQKFzd7k7di4sSiJLiMnyiiFL6guQHNtMzvwkWgoEd6htM7szqJ8nL2Z2mdbxxD3VhH5",
  "key3": "N76VCX3NibjjXrdf2bg6fWu2yQ1iZ9eexWnmxyikhyM4qQSBN6y2Zbi3DNj3XmBfcFxmH4LMd1mmk6DXYsNXkg6",
  "key4": "3XTCSwvYD2Lz7gfsrvdhLLJb2qWGx7mvb974ifhiwH62JE9cuH1MbwhyE2QJz17GTCbSV7xBSuH1N8HXSQaJ6Es9",
  "key5": "3Tn7pyW56ceHNYVWhFfEuEd7nEdH7gV3wVRZs8gEtCppBhVjEeyMoZTRoJy7QatKKbYJgyo4Daj547GuocaWoXbw",
  "key6": "EwmXoLaLBqZ8cbSZathSTevCHbqmgB2ua6xPmwpiWSqqYN2JMoGBERUcDiN7vYZhgR17n976yGbbTUsMaDPhRFR",
  "key7": "2bJuE16jiXAc29cNEXayYS34yRyyJYmixWSdfrVg3ktpoMJQR27NZxJoe6r3kkPmEPWAAycFxzoiVHWeUPiL6HeQ",
  "key8": "5hxw8NrYNg4V27gZRD9iB4aNrbUpdh19Jfkgme8z29p2maFB1G3aJUcJQQg3XhoYknnGC961z75b7c8XNxzUus1Z",
  "key9": "31X2YYGLR31Rowp9zS2VYzzCHEf3EffpxwkNTVmdHCC9Guh36vhoKGPKktbv8Gw1MAsiZUoQHkjkKBYDpFQhhCDa",
  "key10": "3fVwsrcusfcdsSyFdU7kEhWhgEBw9UC2JrYwjrKydYerQefWwFXkzTvABAjSKXWr7PcuaQMeqkDy1qrgMxFg2iGB",
  "key11": "u385jumvQjdX1V1CbhrGWEyWxhp7G7tiRApmjJ7EC6Ug3RqwVPLTtffvYgrUrWMSQmd6KyheiLw9TJqE8zY7zu9",
  "key12": "61zkxmagGxGGmG9TF6q1yWKNBF23KJ2itH8jxKLqGwZWNd8tToidMjiurgjvqBHPKTwWXUpNjDF7T5XBZvH7a16p",
  "key13": "5p9MCDPMCzxSzJSV4WiUwK8eRBKUUBW8KHMBJoDHS36qA5cQjUKwNK4ozmsVeN2qfmXZrMijWuqHRiKQDLY6oNhT",
  "key14": "5DncwCoC6vhWCU9qCH8CujnG6i4wPQtcuu9Qabps3VdrkwPNchT2RQ6GREdJfREzTQFkaH7YQEtVknE38q4qoLrM",
  "key15": "2LuQeEv7haASs8hiPQibrUWkB3o6hBjsuNcw8w2k5yu1So6CdT2qCXfUym8zmThjFqyNshpXvfYzARX1XmX6Nh3H",
  "key16": "6F4Pp6uPoQqf4m96dodNBDKLZJhJQVEA2MPAhjheGnfKR5Gi7fGMHZJdeVwYRcJZ5eg87NpUF9Cq8x83ZC8MeiZ",
  "key17": "2Bjpyq7NTWmqLNN3iKULPGck2rdHzDsoFfPjwkcWfENdWm6K8o6mfrHAk6DH25x3AKXVEvZ1Au78L9yL6zw4csKQ",
  "key18": "37EnEKAthakEFaK9VxJ46ziS2sVqXJErVbHNoLyJJeAztizCkYhsmyADfMHTcchpbBdUj5EtNaa6s2CnG8Lruxas",
  "key19": "631KH86fPqihdVM9eGgp6FaReJ6pLa79wSRHZcpoKXdfpCV4c88xceAobEJjFzE6zvrNbLxTq8AXdxmTzS1mjijX",
  "key20": "4a2ofUPhX5jmfjNLd8MGyetwo97dtHztJPdKgKfzw1ZDexJsXgWTSHDdxRaSYhAVhoRWo6uULgAZ7SywqZGLhWsn",
  "key21": "3dmtMMDXP23JoP3x9FwxqmyzeY9HyeemNxcXeY59Cp93s78YwgEnrxmZPPbjo8icX2quNcxzt5jPFQucviurJi2z",
  "key22": "2jy7xXbv1E2LvPFmEwYYXqmfv4VGM6sXe1f1iCaJxT7c395PXCwcfkzPKqmn6D4yKxtCW3oEH6pxpwaNgNZfYUqH",
  "key23": "3pBCpJej5bs67ps1rTh4wMtGu5RbWDneemcuN6AYMuKaNpsgEUxjf93UTGFYXjr31NkXNveenEUEB5t7X9z5vK4J",
  "key24": "2BdA42BawJHN1VHhRUYHLVXbpBz6mFffoHn3vNkJLpD3wxDpaomSNs4eTqsuhRFzEJ1pbqgCvA6cxTnQ6WEPH95a",
  "key25": "5DQLFjwsPBXLmdtEqrB39FERRsF4BXZ6ALiQX4MhJ8xHELTh4DbK1haovAamCFGxHwXpnv7HfmgUXrokZLtQF3b8"
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
