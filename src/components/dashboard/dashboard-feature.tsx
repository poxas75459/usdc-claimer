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
    "378ZJYXq35z5LbU86We8Yrd1KHTLcHZ4Qap7PcMxu56DjQyQ64MXrED9QbL3T3YuR5K4fJzbCrRQd6HgsjoxAP2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r711M8rbR5Z59AhMfZnoDaTMUSa8hbnYCZkcwHg4jKPkc1ySSHD3W7V1vyuagfJqGY4Qu8MeNzqkiFGdXtzZvQJ",
  "key1": "3hSqm79ttjkGFqdETgSPb9rRaMaKyYkiaKHtTrU1Hova24JNrPecQgQ714QHvjyirVCpQQ5QpSy2cay6DnJnEjuZ",
  "key2": "4tRPPFnVQcpztK4HTW2hVs6WowcDgRzcqd17z7XqESzLCjzoGeQfyJNo7mC6zNJHTXiHVxKfXAy729hnYmkCxGCr",
  "key3": "EmNbJyyHgRbJCQanX3LdK121q8nnqCQ4hMW4mew9KpgZDx4NUbAEuFCGeGVPjjv8Ed8ZgzK2PTt74pcQa59wkcN",
  "key4": "3Zhvft57K87XbTZUQWbaPStDY4aaANrYMHP52oLd1jX5BUr1JaZ6pCrMHDFiaU7FYZnL6gYKEwG2cSpV8xTDtimh",
  "key5": "225X7yZo9F3mUsn8FbR8aLy1SXBETxnkE7ZQmXUomZ5M6yRNs7h14csww3b5TLfRCNNnyr3QMCZ9KY8W1iPwbASe",
  "key6": "2LULgexMX2RZVc4FvKxXXi4vN8pwJ3CvDjyYebf2JfaKdeYpXXn5uBhimo6g2yCSgxBBpeWYQfoSMxuNvRsk1mBF",
  "key7": "24DX4gTd1Kc9vhkVKhatKsrR83XYhoVVgKuUdRLzVWaNnpHous8cTpMmMFuT4YMrSrHbwtQfePGd3kwrYckKUniG",
  "key8": "2N2pGbcvKjsfSyoZa27KTMe9peG6wDKqYK1GY7tXcc7iawaExNm3wXk6dz4w65iMnPn98X5EWteHELECZowG14w2",
  "key9": "5uiCvQBfSvGguC59gyHC4CSfmZLyouuFAEsffXRvpr1McARaD7a2VMzS5yLig3pMbcNrSUhh479Cp5CMDizTvRFt",
  "key10": "4qVKWb7gFKwHpprD3MYwyhdQXvyBmB6QLsViPC14QxG7HJzYGUWExywhE9Yxy87xqwQELahEUhi8UntJNuqqUCod",
  "key11": "iZDjuMJNH7D7W69E2MKo6zJN8DhJSExnNa1Ufqn3jXWJmRQ2cd6YJLZaQBb4Qwfab5AE8zrwCN3gTFtkDc5pD1Q",
  "key12": "fWfzGFbAJQuULqr6Cnjjerb44WSQ263paooUYXdJoapVqJWNPD5nnaWWFYsFGCcS7i5MxezgbuhjahpuHAzmeGq",
  "key13": "TEGZhVfHPmVka43yqsdBpN3tN8k4JWnTrzS5hgjeffZdRsGjfAtjmDKi3CKTjwQYK92ZVNCGwtxamAgQvPY34ge",
  "key14": "35zqE64qhFjT2ohJXVbqMaTiLiFUfMXvRhNKTNyCD4NiWK2XhwcVHcCNLzs6X9Fq2ENUfHiw4pWAY654RafPokQZ",
  "key15": "2uqqGjyX9b4GvWq2v2Lu4es6sVg1kq3zvStgUumJXHBwp4NC8eEdVPUdokGhzzRJq9YwmTBYGgqR3kermhvgKnXW",
  "key16": "61Ehn4bmgXTkjCAYa1V4z7sws5TVpQXbEfa7rSUbjGDggm1P3hzVU2rEDrEBLr6HhtbtQj9Snvtb7YMGMcQ3NuL8",
  "key17": "8e5D2XNH66Ta67e8iLf1CBLsknAKahrQw1dbaTon7hG3Kve1rnWKDUQJnWAcLGHkZcdWzQv1Zh4E9AffF7AGpHb",
  "key18": "3egDtRquuQMUWPeZ88wKZDpCsHiX7TQxM1QCuD2s9dEkjYPYTrTWUFnKpnJZ9MoDU9Hvo3Q9XXkSBLrWuHJipqot",
  "key19": "oz4LHebeabEWM5YC7tFeeyKq3mQ8fjJBBvu46qtiFSQfqjUqhMYYXfJsR5KbDYUfo6CnKpW889oBURzcJkayxcR",
  "key20": "3oq5T7pAKAKo5taWMEfKF3edBQUxiGBJGpwzDqTG7VHzDk2tMoNpDSpi1WbGUHqtfo4aqsSAekQGHrJKUCgkTyoF",
  "key21": "2UUgZTWu1AiMBddgEWtdXffuZvW3JLajbrkZg4cjE2djw8mauyTBpZcfK74emBRE2MEn6kAJCZmgK4jKG6Y2EteB",
  "key22": "hBKTyUqwvBBM9AFukJhW1EwUbDayBQ6fDCzXFSAvXanV9UbYkwpsKXRZYZNzgDGP5wzYUaqUXJ4DnoziYVWMcax",
  "key23": "67FGk8Z7CLxwgK62qfyhLHP4Ho22NBfWcuA92PBudirdjmdoZwMriLy1TZMehDtKcUn6BnNWzkdA9fa8Dziytkbj",
  "key24": "3BCZsQft89UjMAaJGnDApf5wJKmpT4UevLHi45a6N9rcB49MZNWEyKtMUqe1Uiudo7MnkZ9B5vusHkXAct7mQ3yb",
  "key25": "xG7hpDn1vAXf7RsADWYNgDNXp4bMjAL48BBDJD5D6P6q3JxBypXZDrohE6aUTEuQooevXPyMiWm3feQ7Co8BwX5",
  "key26": "122LWiKpW2WY7yBxojD3EzRgP1AyrSwd5fbzoFVsKFGZAPjFhkoEiF9vstcuSgtnetnxHEC1eoqMaGKdeXTzDw6n",
  "key27": "3dAeABx4gRmynCApcLJiq8PPGiQBWNo6EXzwLfzkHgJnjZSbePzd2V4FEAZ9cZckQAeeWfKpdWomxgVjiSbmBzDK",
  "key28": "64fJQ3wm5fM2XsKyiKsDxwCcvwkYTcChAYUQbga4xheCLs7J8ccVrHRieAMZpnsUvM2MJFaCjgoVHqJ4BukKy3ic"
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
