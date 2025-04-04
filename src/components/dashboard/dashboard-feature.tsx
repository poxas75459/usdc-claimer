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
    "3FH8xU997kXV2Hpe9tB39i49SSnFoNP5FGHpwnL3ZPABbt5RPiEwyfHJTxnLzx84K2nTsMeecL2y4aJkCVJ8zpx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AHid5oHwnxStXEjboDc9yCaEgm769bSFSQ8oZCksdKVtWL6iXmM6rCd11CogAxre1HSCLW141gc6nHNojautrkf",
  "key1": "3VBJg882YJMp3vJZt9jz3qH3b7EFb67GFqTsjieWB6erSwNorf75vECH3xatKgL23Jp3pY3EaM4v1kuYUFNCDRez",
  "key2": "4VnwDLbSTFfc6iuQaK1koQygbvizhXh3zBAxuTAHpHduGDgoq2TdrTKrHFR4w4MKbsb8L51EHaxPGc4nB22GAHcJ",
  "key3": "4s7XKrKyhN5NJ9hDUUiRey4mFHCrGTkZLa69QR9yqkLcvg5sgimL6ee2WYV8MVq3G3SBuam2nvDKKHzsREdA4oTV",
  "key4": "2biV558YCKYeaoe48hrxm9ir4UMgRwhjxcoESfmjN3ySTZNYcSFpAt9PT7HQDAkwHzCMaX242EojqvnR14qewTh",
  "key5": "5N7zuxMTuywUHZ1kc31fvEdHdNeiyFAaQwZAtaPhoPP8M2XAw8jdjHGo8Y7uoQuRYQLg5c3s9tDS1LdTJ3KRayHP",
  "key6": "2M2NkXcWzTBNYh21WfZqhJLdh5MgjjBV2bHsTWuSHG6ZmxYy7UvqnJZAWnn3vGERctDAAdgbijzFXQRsPiMgZud6",
  "key7": "iejhTSVHBs17CDWz5LT2cUC1qFZ8e8AhdqhiwAjppzRDerwegq6EJ5JJ6N8gSNJXiT2chNdLkkoYCatsekob3hP",
  "key8": "jCaU9WLM1h8D8aARRdmdPxkZnvEd5WGymA4zc968w3vUBQEmucwJq2CJzg4Fib6eAcPtzCCYXbDcVpBriKBBT4w",
  "key9": "9J4xbJjELxFVq11wwRwvDHV4gsD4ka2LkG4ToNKgpakmu4tbnQMBe9E8a75iLA35UjcAUPT9h8j6m8odDiMhk7a",
  "key10": "3PqSjWbrzYwJkGSaedDF5yVxHzBhaT616A721m8bf4V3ZU7N1qut6BHquU1Vy3oHPSg5orcMqtPizW1y9gEobRPK",
  "key11": "3ZakYvbVMf4foYocYF6TZhpqz1TzYn9eHJFWnm3GwF7PFiDQrjqyJSS7B6aMsB9QjMy26gQs1cJvS7RbDwkqUgMw",
  "key12": "vGd5yzY1G4yiB6K4fxMoWr9YFHCGhisEwxerDxBQYFUgx5YMeCffY2P332ioZ1HAEiJzjWXChNendbTeRvqZVzW",
  "key13": "5tAGsbfw5XhHRy4GhXuyPGu9dFs266EiRjoWhycfEjoBZgSK7VihTbsgoUk1dqg1c8wqz1jDALcdYPztSnnb3SHr",
  "key14": "2ocCpGSpMhrpoKqaHu7hmPDEegQv2JayvrzNuPUPPkzHkbCt5x689YKJrd9DsDdzRpSSGyuEkkibgMjQMoStgfjG",
  "key15": "61ZHhLJbijT9ZKYWwxtxkVajFyFBbiyxanzv3KnTJZe67wCjRbei2cgxzNe25wymAZu5cVgHVJRNaQPPFXaicxQJ",
  "key16": "3fnunydpSJtnkpLVmGwo4Z7Q3ZhsE2uknWDPCwuFCTxY5mmDsQ2y1h577JhmHNP7S9UDSsBNS3mvB7osfQAC29MU",
  "key17": "4321ELuqQBJBEC1gy7XEcvBkG6wdFZ5PXwvotLeu3K3AWWWTNco4USfcq5nmb7trjYspLUbU1gimgYUtykXvupbZ",
  "key18": "42FrTk3ejWDAB9qBsWq9834ZTcUV8mQDFBeMY529jSvyt6ZhZnbSntw6nL1yb9UEfXbRowuyP8jPRsV2qXhVfsrx",
  "key19": "3zHw2YyCYPaEJ6gZHDDXre9k1ewGmzDM69T5pkqqoYbH5aE82TJZp8ZKtCeSFZYfCZRssc9iYmjbgorsq3mvJX5Z",
  "key20": "2Z54cwmkh8WXaFh1GCH1dzL77R8kKMkVSZEpCoXw3FNkLELaUxqw6WdY37FuszbtSA1d5uz5ma6E6fAWF2ZaBwqw",
  "key21": "2ySzwr4GzLnqWMvvuXSTwFrrzB4guNMFEP6SMEn5N5vuXyvW9b86a5XViMoxTGRW8JMMRxqmcRJ5xWchEYDwdrv2",
  "key22": "58RcdYn89H18piQgitnTk2HoGPZuVKN7MrgGEqQz4EquaHN2RJSEyEt5Y7HLHqtdKTtdD3hj5KeyUARdWt8oRyhy",
  "key23": "5syZqpguz32czk1V1zQVCK7HLRPb3CdSs2YbGSvCi1cLeNGWvEfiKzJSWUm62fRoxeXCSY3BVhZBFYJdHN9TNxG2",
  "key24": "46PVAsdQLnYbu5W12ULTvrQeixjxBvxWG9sd5UaRBJRehjVW7zwJ1iT1YvGgqBR14j5uytwg11ia5d6bWU5HPoXU",
  "key25": "tp46Avrow3mYexRZmfsCeqTYv7VoFao5JovzsoMPboznfbTULEeWXLuMEbAMkAcNzGGpNfEWifiXGBrvYVjdvc7",
  "key26": "3Rcp4r3CJCimCQJMti7TcGqe3bUa8ADqUHri2umEmK6ac4VcjnSaSSarSaRUoNnzKvbGVaQUScEbqwgu429XNVei",
  "key27": "2K4A3yz7RiXfkayXpvaU6zuwGyESPrYwietnBBo2zXJrj6rQ7ozQuiRbDWNkx7Ynk7dWyPjfV1jiDiJ2DwUjR8fe",
  "key28": "5oVBMG4971BRT7VFL7R37y7fbhtc1Wn7F8sbP5sNTk7nzyarp56d6ozC4352QysM3o9G3KpkG5Yu1zxJLpG4XTLw",
  "key29": "4UvrnoqAQPceTb7P1VgYyuArVXq1aoMmDWv4mX7y5h2RqVM6R4bg9R5pZ3RH3mLWNQXEBQMXJChBNcQvfvxMzrgL",
  "key30": "54RJJL3SUuNpjng82G2xAxPgrAm6rqvSxkD84fJMSLy8LrTUb32sedrygNNEaW5PxoaYGY1xAL6xuyE7eC7zFbcf",
  "key31": "5iwhnKh4DW2Cqf86mb8VwbQqVcr1tPfo3qztC5yHZSdbZz6HnCHo9BHaUcrFoPv2ocd28dr6tPyaKqsmd7hdMqsw",
  "key32": "iL2CT8XNpjQJPwc3dbTCX69K1LYQSu2BfmDRsBrJVQeSBBkUdfX6HmTZ69bTsMNpmZaGgT6oidwz6dr67QxnS5Y",
  "key33": "2R4MwExzhnPYYGiC2vP8hF48mJ8zNE4cQWWyq7YUYuqNg5qPiMpcZxtvc4zmrwLhtiWc8RES3bkSjvtdrfCxWvHf",
  "key34": "pui1w6AeKXSroL7fJAeAqxKAZLU33wsmJx2B9wDV8GJkv9UUJJWdg12R2KviTpQaTDEUR9ssSyoU8pVDqqp9Hbn"
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
