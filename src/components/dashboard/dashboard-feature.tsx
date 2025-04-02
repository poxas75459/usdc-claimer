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
    "3smHivBL1oNVspv6xkp8LGN8DUGCXKrYcdMgPeUTHUjmypN24veX18Zy2rUNJYpz19p128djpbNxhpHsYPXAUjHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yB5q5jjz2RP7w4FWpnbLDPhD9r4iDoy6yET8FoFDUkpRkeoYxZBiSUbDy2BjGKMZniBxxrm15tatneKxcYbhFwK",
  "key1": "4HDeFHMKRAKbSFC1wJERfRGUr8TTHP7d5nQaLj1qa45TqBwQaCAGQSUyCXxY1huoswg64nvvB2FvXdQAXiaPGTSr",
  "key2": "3JP5mtZYWM4AsTk86mZ7fqbJwwf8JoXTVkSqT5yCMKF4dBfmA2Et62FXV7AMZVcPNS6QnPMiwYqLaZdpyjxWfPw3",
  "key3": "YTNn2w9t1Aqjoax9ptL8vpvxCfCp61DNeet8eVdJJEtJUyh2yTxVDiWzGLPgub85NthTiYR38Cwi9fVPLFXyEbp",
  "key4": "4TMFYK8mEEWb8bo6Fux9ENYdHgKfykReU2sAFkU5yeDXmUh786Yj7juYMfVkzRFUgQkJPKa6VxkJYTvUFXgwjzW3",
  "key5": "642mGkdrqWYE8ojLi6bh5R1Xk4qbrbTcEwwxytT1eKJ6TauQukWAMZJLBDNaAbLLmomejVWABgjW8vVYqU3NG1wZ",
  "key6": "313ADGkdLoLMxFCnLLTTSbMrXzyPZTXgLVAhwk2ARgkqQTdtNsqkjkh1HDzrhRHtAsajTn5FbAt2UuzRhaCmyHCS",
  "key7": "3u4pLjd1CrnvQwH5mBqmVZheQrW1jNpMs7fevNzhqUFwbwz3B9Cue9QXaKDQwiNa9ufxwtWSS5BVtA7t2QMrkWhz",
  "key8": "3N9j4BGQxwkrHKREvQVtbeHSMjEroaGohkqxgMkrYBnQFfa2nf7hnu28DJxCJh3awhD2iddt13FqhR3wWxVGuDnH",
  "key9": "5gR66aLx5jHxf9wTmsUnWYQ5wtegV9TJ635s7YhVdU15bE4M5MKhht2YkpA9MSzpC6go54b7QXL6ShQsrkTvtYrm",
  "key10": "5CscEmt3EqrAezA23Ee2FZVVfaZ5axRgkzPbo6ZUjdMMERyUCa3ywtZQMswFAAutmuPZXKzbgaXmqWTsPDpVdWAJ",
  "key11": "3GwJTvqPBqyjxkWzf8HfqostZPFnHnh75hCDG8f5iDgxQqrTXMMMVXYa3YPDcEyuHnTddWU4Nkc7YK7mTF38JUeM",
  "key12": "4b4qZiZ6BcBQTE5HyvBVqdeckBKds1mYWcKbKHTtSKUxJ1tm8NbXhpnBn4onWHx3jZmTGxFr5fR4pPDPLV74dj2X",
  "key13": "3FhdhwAoKAvW5zpmJLdV2kmcj4aZcBKMkGa5Ca8Gkkpio9K3mUz2mr3EsviU5qoSazhhHiE7Mvr3kKbMvsGD3eoZ",
  "key14": "2XTvg8yV9LMpgfGrUQHTS3k3SZkKiJG6emcdNJprT78YDqkGWwbD9LY2cD7g6Ds3XSnzjqsVUghF2CAtQCxsNwFu",
  "key15": "5VNhkuYRB5EShqW7PrTtHfCi9p2DSD2odrYQnic8PgHKW42FignvbuqNhmgXqpHJD1t1CkzLRtqJQD7ww6MkKGdr",
  "key16": "nG1u8tECotryXTrB67nRWwaWqpc5EhwFP9BrCmiVkuPV8Nv9BMNB3ncaYdTu76N4wUoEg4NouYEw6zAZbRJMccu",
  "key17": "2mAp4SRuJFwjHZG8aVNUSq2QvLYase1jqgbPKzCc2wRcFk2RKgnTnmdef5rPvs75YMCYYMhvuAjQ961eabBfjGP4",
  "key18": "58xEhVaANmbQ3Sd2ukYujRwnWkvYqp5gzqRThxQW8wJj3znoajD4zfJMn2Bf4zkyufc6dE8zyvLi1cWQ78ZL6Mpe",
  "key19": "33w7BLmhA9VVdWHVz9HXnTCrdjovt29vufv1YmafhvGywf68N2HDKLXLTR4ftb83R8TmKte7KsabKiaY6RFZ5Jop",
  "key20": "3vwSyNtqfsge189PRQhCGZoHvU6YCiy5AExAD2hFbaDA8WaghNj8pkg9VNP4rnSALtAtmNSs6PYik3Dvit9sQyt1",
  "key21": "5dmw9fUy1VeHUiwDctBJgPFJ1fcnnyDtBFnbtY6zwSAKpHUYsUkGfNVpSuq11BmRYBScuZYDA5irUidkqPjMS34M",
  "key22": "4CAbQ8L1xMXYhe9veKKUjqnVpiE9RuaMPZU4gLbRmaPKKXkfsoigqL9BiZoAMbn3caSoYCeQuuz8vXZeewkTU7sW",
  "key23": "274NAGDvthJegB7ap56nKxsoNm4pgKdVsqcSEj6GjewbFp57Ns8wMjBtkbkQLPQojYcbPQ8mCL4Hz3KPpKNjUeXd",
  "key24": "3tAJTy8xPe5qPH3QBDE2VDteFp1A543jZYjjuEmvSSukG5RE1wovfYYDb9RZjtjaiCc3KruVbbv1okRWi89ALPqo",
  "key25": "5B35pEiEHtuCv8duDs92mWa3sEoe1Nfd3f4eizrYJWvzD8DW5sGod1kTNs8xigDRhbrnGefohf9tYre6nzN6kFfH",
  "key26": "5PYBoABWUkSjNNsYtzL1F6gaTyPZKG7sxH9U7Jzx79fo58TYqAdVY8y9HN7Rau3qa8GNoTiDQBz4jyJncoPUdunH",
  "key27": "K1SD8yhvGbGyooRmgkZ38D7FVRgyUvyXwnradddVmxjhjPRwSgvwwCTNCeYk35bKKf3CYw5Sa1bRMxojzZkkw9L",
  "key28": "2yVBsc91BrPEBBSRgTSzwCtZu3SFmqvcafDyBjqDT75Sn1hzvvPhh69pvRZtHpbuGngjQ8WsKQwfERKQxDtZzGuu",
  "key29": "4bGG5z8wXGussTWoZ4NgPbc6oywyBjWs692tcXwRcjbvimP6R4juAjKh69gVEJygkFtV5Gkq5bxDLMUiJ6q34guj",
  "key30": "fF7zu54THRPEVLe1KS4vmA8AQbWPEwScE3h1PgSTwsFrRCvSN9E71nn7xP6NFUneH7vBDgc6vEh8P1iMLXBXGmR",
  "key31": "3zua9UwiJWDpnshKmB6n3W7hdhjLVqfVNGY6CWWzHdnMWnKR9yhsipLpzPKTgPz4bg1foRsyK3VQG1uLZwJrL8Yk",
  "key32": "335FPSxMETSt4Zde1uExS7XwgVDCg4irehrgH8eS7DQ44t3ztxh4FRH7JorAhnUDk2AZvrG4u9urZbdzz6eYm14W"
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
