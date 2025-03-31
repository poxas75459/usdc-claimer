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
    "5SDqQF7MkFfEq2DzbrMUijme5ses27GmdH9HEQyUkjk6yeBz4GoULH86cTL6RjV9dNRuDkYG3wAmuTNKFsDNGnd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p3Q6k2CX5r9tAnaaQoaZUEKkXHamWU16cKNjpDnBomh6ZbXW8UN1AMNKAV3HSAnbbaX5DnkSaoWTjYPpE853VP1",
  "key1": "2AHJBS8nU6KFuKUMc1zRPot5hYNe76TX8cEH1wX5t4GK4rUhX2LmzhSP9N8gzw2Y1jbZwaWXz2SXF4qRJH8gG79d",
  "key2": "5Y5wrnopvaZkyL7h9HSrreWMLcLWJeNHcuP9bY4LkWTNUBSL2gtmfR4XnBqFefVstaAQiTkm2ajkNX6GAfDADBf2",
  "key3": "4C6gw4RKtGkzgusjXXof9NEDChdHf5gZwe25yYdjGjQrR8hbeQa5255VYSfHaG37eiAWMUp7F1DLRUmTRysrddMj",
  "key4": "3a6AnrLcocW5oytq1fH2iyyDXJkQ5UnCcFch92LQo1Ctuu4c5Bq7DLGesFyax4MAXNCzMCTn9K2SzjxHu12vZXd9",
  "key5": "3nqDwrj2brS4WjrTiqzAYBhpAV6pe8b6XUaaRjHMpojqbbSrZmVwYzNwXYcm927yyxR2xbaSGCeGLicECdjMUsCR",
  "key6": "4PMpj64UKxfQHsybEFPUipKTWCM5ADwokAgzbVofqqrgpnDTcM6RoUkxU2Sv2A3PwDRkNo3jNpzRywNzfrewW1FA",
  "key7": "5ib169Vbq4nGyHEZ2bxctTtQP2BC4H9qJkVnEPnPFBG1ffYqbrRVzqJBGojtqM6CM6Bt28wWMnam8phMJXet5qFX",
  "key8": "2ip9vZUjLLWLBPkoQqAooESHsH37G1M6gqKuNJcpYiLe1EyKm44vcxEcaN5NQRLccocihcWhRNLCJzrwhKNWygqc",
  "key9": "2DS3PpWNogso2UwVRyA9Wzt8Uky7UkR2V7YJoec29uAyfHv23jkeR5e9Tp6T4rAscDKisGcS3CMgHF6NhjUyMx3a",
  "key10": "5WrBajaU8GD3fU5qGFZDsPfGFw2y19NuNDra1J8AmMZCego8CkrrVpif9qK7RxJuCcejgAqQmMfM7rJYsjsoFA5F",
  "key11": "2oYUwLMh7Zek6szb3BGHuX4uQjNjVyuVnr6892apmgGFzwsDNzy5J5MiE2u1SfKRdpN2ZnNUo4JpV6fMscyFUvKe",
  "key12": "5g1pCS77MorNVUYqdbj9JVpvUQeTEizh569oJiyhnLW1RLZgACU7hBNqph9NiifMXRq1xBsDZa1LYjVJpHNArha8",
  "key13": "5J2VbKp6u83wNvHYfJaUr5ub6KLvp9bif7YN5n9VNbVcsmWYZbDhBsjUhVvsW71Gs4pJTkGesNfEfQtbMrVSpt1U",
  "key14": "4ZTaZSKWDXFHpeC5ucqS1Cjha4c2BYiv446q6J2WCdLnAJRXno6q7rHU1yUNR86AokS8D3FTd51oD1HdaLU8cbFG",
  "key15": "5CCmvXPLag5UWgLGKvAW5hacPC62WV6TaSvTMpQcvMisB1YF8uh7Q4Wfz5ez2kqEyQ6Q8uvnaDt9U8tvQfJAiQUB",
  "key16": "n8mWiH71RbtdaNSNP4KufnPJ3e7J8n922hbYTxYE2qtRJ63Ax9XcGn64vLEGQS5oJQ3xT5AXWoAv6UUk6sKwqQz",
  "key17": "4X2AmaNBfR7fZiBLk4GmNeMiNfkNCKWJb9odzz2c3kmkhsUgUZHn58V4uWH7ymJaHsNfkJy4V5jrc1eR3sTGrdYq",
  "key18": "5dnQRRFt5VpSrcinzF9xU28GYysX2Ayf1A7iE8Y4kewhtC7Z564m1pfXAahDGw5GFvRMYrRcKXkUoXmW76yNo9se",
  "key19": "2a24ZNRDhBrGDWCZhM6vNhC9uRbmEpQzQmJpNT4CA9CsVU1QoX5C4m3xrSKBRAokBpP24sgWmXezQVJEzyWtvC8r",
  "key20": "5aw4imr6dL2GpW5eKhXxDsD5RGjtMqcTtJbEPGZEx3vQiFoPpxoHFnVhL3dLj6qkptcsYMPeTcLzjykHYdJjQUBj",
  "key21": "3iy283f13dSxeUNm6vvYXyVHsbpdny9VZRDM9wJkbAALKfKPai7k4hSFfMVvMR91mKr4BQ6a9RWT39cbXSpsquCS",
  "key22": "2u2sosjFBYUi7tTSMU78QdV6Gt29uVVBXKAd2SkcZy6bZuqxDmJpavX9p4dKLfhqaQG2MQFYccuswMxTBGzVXa51",
  "key23": "2cvGjkmCRmvWmx5a3gTf8tKpMrq4ur9S9Hzx9uFhKMo46K5m2hwntkjATwL99GMpdpQiS7K1TSha46ZtxRvh8uYb",
  "key24": "3Ug9rkHEvYh6LZMFAEtLxZbWHs1GEB5wrzcDhTXj29KTsBvvgaxcQWxJkc67zgpffKMtG2Jj1ifywjr8Ls4kDDe6",
  "key25": "5k4Fzzt59kbbCFR9HgwYJdA3dX9rx2RNFBoyQGvEeeSnfe6tuJvyndieQwJ3booYbgLsQkDWtk1YXZEYVF2b1rxG",
  "key26": "xj5zmyQvDF5rQwBXS86zeAYKoeCzTsLNGoQeNTWGHzxJfhyrnoKti23wCMWCJZda63DXVxFZ7eoD1X5hb7NhKM1",
  "key27": "4SWPTuaBEdPVFBKQ38Rh3SGgPGxx1RP1niJb1gy2GN9ZSm1LbopF8zyGY7i6fUmF66k68fHncGd3kQ6K38mQZmrL",
  "key28": "2VeGU9h2G63t8NYhjsiBkCo6jXCiBfMh3jaVsWdX6JSdLcvXnxhdZVayk6d5wA3Hmdi6VrJpLHGdT9AKwA9hAer7",
  "key29": "5jJE811Zuv71NQJkCUzTuvJgU3UFJfDrdSdBQrFWYeX6tfhZ6xPvYcExtM11UEuwQZqhfiThVBoLD7insYnTpxbQ",
  "key30": "3CYAobA1xGiE7YTq9ZKZGGFjT5hYCKGgbmVmMKZG6TuwpLXy56YxUXnPfu5JGoeyUXtLsVoaHj9JACz6qFH3JmDF",
  "key31": "tmQVjADU6jv48Mhcn78ScoE677P1m69AJi7YXXzwpqS2FD6DoyZCD2XnjUAVrVcRvHL5oiMHQXob5p5nciouMMM",
  "key32": "5j5nPYjZjmmQD6THt7ew6UPQfo3Pnc8ZrNQPuZWBuaBQvSLQ9f5tccGyJdnn9qrCGJsghak1WwgAAmgMSvwaumSZ",
  "key33": "5aix6FZcSxVPHKSmuf5edhSm7aX9HAhqNdfUxS8axSANKTXf1dti9A3AoRswu4W2zgQdBbDQJLEr6ducYPBzWRNC",
  "key34": "4ibrVR9Wupgru5M8LFLMZH9Yxw6BbLkfu6QPFjRFV3pa2UcgEwTy47tY77ifqfjyHpjJNbNFfTpFfQkRRCfXmnHy",
  "key35": "2S8DH89RvURhrUheU2g66Rj2iPHagwv3hYyqgMGygewjpePiwPJ3XWjgzHR2qDtvjuDWYbtwJ7fGYohhkxwTygrt",
  "key36": "3mTrbbxt65nnfBEjTf4zAo3ftWMujg4nG5Zjh1GwdUYEJrxLTRFUxKfu5GuQdv1MrZBDfJqz32FrNVU9T1qQSMFC",
  "key37": "3AZiJPC6gbuPXSBvrrWpkRbPwhcDkrFuSLaK7rJZnG9DCM824pR1GrpdwxbypXviF3Tanwz5LN28mxTPD2VZbqDS",
  "key38": "33Lz9rKUoGvQRXCKqfDd3dovJ6srxLpUjs1AzT8AyPYyjEjjXeFBsYuBvsDmL34qmn8112UH1ugNPNkyn5WybgWo"
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
