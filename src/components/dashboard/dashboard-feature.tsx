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
    "7CWx5i4HL8KUCKoGPPhveae8e1kD6dXVMhCu6KGcWpGZdZnFY1PN93jZPiWd7ZgXLfEVavSLZrnhx3kAr24QUNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bt2ed865Sd1FCmbBZ6VsMcBoi2YzRwfrGuLRYjhzaBVV5xgAaaiUQQ29LrRaN2CG9hmG1oM9a28xycGsmvrNwb5",
  "key1": "RNUJcZKz87dVmtdL3SDs19ZVcGLeLn7ZHXu8FZDTSqwBi7EZFxhpV1LrPCx8xTE3GHFXZMS9w2DKDhhCUct6Wk6",
  "key2": "UFRHgg7Y4Yi4SojbReKHjcHSAk17rWWC93qampWD8eJFuVTjk17pKkmF8eiXrNae1dYE78f1KRE34uWQ6aFzPYM",
  "key3": "4qPhYgSq1vwUSsMzWYonQy28rieHD4H8zWe736wpW3afTybstGny1q83rAMkatPHFx6P73Equ3VAAiXnJ2VEzkkt",
  "key4": "79dsDfN972CHmG65wHBW8iXnTVKmJTYXyPHXhCAtDqh6dpuSnZGSvyPvyU9iXEZNWx4ZXEXw4gGSQVSyaJ3PkKT",
  "key5": "4mPwUL46v6e4FEyE7wzdPSbbCmo1P2kQDe5BtgirSzyZgYG5sNuCuhZ3KReaj2xVYD3SbYsvdDxskVPot26aXDx7",
  "key6": "5dmEBwv9e4KNHj1tSLzi7wpq1Hisz7SgbbgJbneBbggrGqJ73cE13bjFjbgtHCzZ2j66GqaZo18Um81kWLx9BSDs",
  "key7": "UKW1bBW2BwfpdRCWs5YiBmfdHYMtHDYDuUEaDLuP5FhMrN6QEjhMdpTYUrBXh7DmXMXz8GphxxcE2BBfZQhd8EZ",
  "key8": "PD7umEHb3YbaiRveBixUBfLSEY7s9jux8KfquTxCJ8J85kaAn9iPj8s73PWmiLpb1Kf56JJppYiLY3mKBpYYC9A",
  "key9": "5yf5vgakpqi8ktRrcSK3M41tokwxDz4KtCSbnc1Lx6HTnHX2TiCRmoQxP8zxDCwUNmsHq7wpnjGmfKfheAzboL6A",
  "key10": "wBHETpfsmT94oyLugShynGpeEhL54GKugKbmcWLyYmADh3jsSjWGbLvwocA8trmihAynLMcN9AxiVmVVDETyqsK",
  "key11": "2KVMqq7ofq3pguGv4xkygr9Ur4t9WPzRmJBMunzTWbRuZJRBEBoYSvF62uD4WWEhPq61VnvNbZuW17JGWt37PpPx",
  "key12": "3XsCeJkmocXwHhHhr2QRZaHaJSargWNjq25MBfMxzwpfcutU8vg86bwy8DtA34dc19VWSiLkH9GQ9oEwYEpj9EUJ",
  "key13": "2dKGAiYE8xud1zz3TKivEDbUZwHhFKEDPZXLVNQFsAiw4xH42Jn9ntSz2rTMoUR3LDqADz2waHLQuAzhB8hLPDkd",
  "key14": "4gCRRWw2cUgyo34AAiea81cuzzePLCWLcS1UmLYtK5BCfUfT5foYjAZsoAiy4x13KhfKQaY7qn6N98ShwXWubv9N",
  "key15": "2KEYBgvKuJT7AurMZVnGu25ZWcPptY1NTBkR2iGrVXmYbW561L6e81Fg4UBKkTZTTPu86Ag9ygrkia97T7zu8T2",
  "key16": "3c5iFDvoupYL7AcHzWp8gLsRuai3YPKXCq5sdvoR1M4e3E7ReZFXjDeYCfeobCLQpPn5Ppb54XnXm9vjpBzPJG4t",
  "key17": "4zpPjswqoVH1meYtRgKe7CBFyvqZEe61spVRGBJtDr93HVXhEyfgSwDqdReFf5FGCi3iPVy2fma9TkuzcEC4NJv1",
  "key18": "wbXk6zCfnadh8dqZwXiiMnozdQqfzP1FxCG2W1vACJdECZWtb1PefDaU7YQWipTVkCGfPZaZkUSQ911aHQxURjg",
  "key19": "4NhfmwnnRqg6zfXLiSkDrWMcanCR7XNHio2dVgktcAGHkxnjCuJ8RmGxMJYbc1jfusVXRypu3TqFuXVZynrG5LpP",
  "key20": "5zGAV6uLpspq4mRSHMaR1LABRtJ1QN9qdaqdATdn7WyjjF7ExUxzHUYcJjL7TYvEJHZAgu54CZujRKKphoZDAhGA",
  "key21": "5LPGRmTrixV8hhCzrQqyjjChv3xC8Dm9Kc8MBxL7Ak7VdKTsireVVs71szRjmJawBUdeNLtPfrbSM6UJG3TFHKXQ",
  "key22": "64JwvSj8muvwSDsKikK3rzKrgJFqJn8NJjJAHbAsTbGEpo9sWTG4jqJEvzbe5wj5iJijt17rKvGdM6bad7JScFSr",
  "key23": "35g2Ha2AS4vsQMk9vgBVSND9irCYvnzSPcPFjiZKJQsaQy9sEf78GMDrVdtRhNjsmKErTcaVvahbSrsArdTFVXnt",
  "key24": "C4XSr1oCbM7fhKw6mL9vueLim7JgAEqD3WwJWynT5ZCVba73nMeSnbmTcciyP2JjAQVp1TUU3wyENFwmEYyHcMK",
  "key25": "2EjDudLDrf3mYgQagGGS6QNd6Ai7TLuPdxr3WVBs4aZK3Wxp1h7wZDxpnP9qo2MhkuQDncF29KZznYRa2Rw1jdhS",
  "key26": "rwycpZ7VszkcQYKh5vXmweEqCG8Bp29ahrxQZs5yJKqekhSBb5mXzAeVKkHuMJcbLocyiV8B2PaqgJCzBWmj5kW",
  "key27": "45rk5YrVjgxN2hspESWmYQvjJmiufLhQNVPh79jesZLvqYGm8JcdSmJytRXHfJWi4NSYdmhoZbjgkDXUTubiWiqq",
  "key28": "65scuNiSkVS7JMybzwRY9AQBB9gS35NJhQzPenuT1nPjUGooRKgsiR4isWKEuHgmQMFLe43ec32sCvnz5XW712Wz"
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
