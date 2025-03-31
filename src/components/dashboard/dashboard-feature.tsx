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
    "2PYfFn932WJ2Y8FBiM93pGRhXMWhcpvPQkBir76brqCyFwVLc4HJ5XbEM6HHBt8BSRDkrvicihwGufz9EXEyxjMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wWU6GzZnsoxKs82FCgqNatPrCktwJkDtDPjuhhZmXVy1SeLmZECHjmVRDKvTqaNi3mpMcQzJePDQ5sTpLmhHhYJ",
  "key1": "4mdK876tDK8tDx3D45yeDhMMdgHsDfw1Z1M6ntuTPPtaXStdG1rmYKv8Fx17BwS8ZuJGu9LDkmfXF4suDS1RBU2G",
  "key2": "Fr4ds7PW71hghSgjbK2CyQLpBoySU3LXNmjcqKgYuWyp1sn49UzzgkFV9H1ZyMXzj5DqqfLAW5X6BkEX1aB8pCa",
  "key3": "2gSfrypVZBNcBZLaMvy65zGNATPzqE4dpVuP5HMXK2navTGuw8WBkFZpxBnGqb1A9jMgkvdBgecFQhb7ubBWywrJ",
  "key4": "4AkJQaqsaFvbncHEXPmDAuN36waBacez7kRxxySu88QQs7PRWZDFCjD8WBAjm9UKXxzsmB2Yhqaz8Gn5hv24LWJT",
  "key5": "4AkVeb7tXtkvLnfdvWP7gCmvArBXzgo4tDaYmw1rXp49KP6cSXrceGagNZVqer2d77hfcLUhdNpSWWBvuPeRXHM8",
  "key6": "meBDR52hWH7LeVexmmHBX5ifVQnFrxpg8uUDRTvtHN63xFmCt8eopbBUAQEKJC1YPypoSzJcxAGh4mUb2ZVfUay",
  "key7": "5t3JN7BusnbRQZN6ZdafsUPWttBA26SeiBGXRei4QexLz1oHLDwSZ3SNtSWznRPGSQVzDV3jbR7wG3Csg381UYJZ",
  "key8": "LqAEtJi2niv3C6kJBpTUHN3EBrKaDZ7tDVmobCNuz263nbiFtvWmydjYk9W3g78PmiKMqCrSd9CBREENvquPfXp",
  "key9": "3omeijqhERVqaeqaTRhhD85A7LUEPptev4ZQWMeXMLsU2fJ7vqQwZppHu6MS8qnTNa1vAXFPCjmKNXvWPRoAjBfx",
  "key10": "5yejtMLWjJ5EQdpSbB3mQdZMXyCcmVwpFMLoHrR4jBR3Tf6dzyDumgxqFJXMkKSwPjKWcXs5gsQ2tAPscg7kQySw",
  "key11": "457HZNEbqGWm4bvVkgEa8KTKm386sbgjsFNCsUncyiXchNWhyyn8VfQhbHEgoAWEuosv7WreBQN4FP9tGitREX2i",
  "key12": "63amxoPex3qQheQi6xrEYPSd9pZb4GsgLemiYUAfBS7WzYqE8UvLE65YwgkF4oE7X8jcZnjuaZCynW4dmekfkn2j",
  "key13": "4cHRK735cnaH4otq9suetXJhZdZv7mqBihtpEWoGD9EcTBSV8NdUSeecwvt8rhgFPiUST4vHedywL8LDy7Cb1o8e",
  "key14": "5ouavH3QLRZx4wnRxnguHcwoTjz4CJvJaaTUgqMZrUKWyVis2DrNBbSmY6S8yfrzXE5jLcY8u9Zmnseu3LwFz78W",
  "key15": "cKTCE7RkVuxzAzX5Zhg57VxyL3fqLtmqPt24NCifVerSTGa7ThyfMcWAP4sqD6126NsDuPmWzRSEi3R2qZ4X9Vg",
  "key16": "mmLWmMETE6FPtKsLx4U5A76DAYYsGLJyhETnkyGr29TAmBSJidHGBPLJPCLKqm3TZ8djsPhJxs8NCjvDTxs1a5c",
  "key17": "4YAFgPgyvnnDorXWgaHFczJL9TDRHHyZs2wieo6TZFpq5qith8eMEyuJPZcHArg5oL8euVLRxpzyPqQTNqqALnaZ",
  "key18": "5cJ4VjDprELmcq2dmJhwfuWkvtW2NanWPSa7fRP3Xqtrjdfmy2iQvdMuEX6k2rxUYDw65Yrd831zC3GidWiq1E5Z",
  "key19": "3hbGydaQgdEeagc19t81hi5G5z1LPeHNmVJtHrn7hcr7vWWFXPgvH9DtaBp5EBfaCssV5VmPMckhKAGzbmefXiMA",
  "key20": "43CX987rEZapTft5sQgNjG13UYtQuGSHqJ5Bsxaa9Fagd5cyWyDgZPXhsKh3ZaQWKEBnkG6XHxpKTFjHnxCpeYYW",
  "key21": "vS9VsJmfTfcMTWjxvEpKYWj6ZVQnbycm9frd8jm8UqsfCmMhFxxhnJZma6LGYWsV5PQcQN9SmUTihvFJgrjrRcX",
  "key22": "3g8vDVpL4SbFAvGAKdVsTLnr6s4J9vJizSN3vtTVHhpRudCt83dXaQ8E6Q4X7xUx2JrQxMnAWqSZw29vBJGvCD3",
  "key23": "8V3KzeFMH8aLA8Yk6TFHydg3mevPwwy8iY2JpTwputQgZAQBJphaHqx6i5SymBQP4nkSMQnR8eRJswgsRupQA4a",
  "key24": "5RkWnxd6Yz7ZTQuxnRduJsDXK5XXUc9BwtpQXPeawUmiz3ESJuTkMfSHDhP8E7L9Dkm6XVxJNcHqcX2ZKteqJo1u",
  "key25": "bRvpSa1c4r1A4rptXiDMJigd1WMDScsxCCFurt6eFTAzZbKUXsRZwcGNh6nV6zGJpQacbxnNZPJ3P7GuHnMdwds",
  "key26": "5odcwxUBxu9QEoNeSLrJ5aCy1CkBWbarUT8z2jP59ri79xZyXgwfncho3thZp9H74pjGDpr59AS3ywJuxfnfSTvK",
  "key27": "5BaEF48CR3vmfvFEDNojdGLRyiaGdMM1WQkEizWjXUyYN7ezBu5txafcUescskxcmNHpmAcS1mw85zPNesdp46u7",
  "key28": "AVQTbWYERyNSBiMiY1sbanz7XzqdFQYPJVgobFyU2Yb45xHwDaPv7LdKQmL86rXoCtoF8xHziJ8peBypNkqpPgy",
  "key29": "2dFdKwvxjJPmreqTbtAuqbWz43bQDDY7wHxQk9viANhawt9jNYCsuZCwPCokM9Rj754k8a2uq2tTRVdk1gxfitfX",
  "key30": "35UZzWYbnLiFpa9REyxyhTT9TJpZrf7d6C2dyuDnw1MUmHyr5yWfQK7Sft7KWBpoJNhNDYskJ73tDKFnun26GF4u",
  "key31": "2feZ3W7uzXDvvtGsfsTJEGyPPXtYmVaHysZTxbJ6oCs1xWixK2Xr7C7vguvqsHCYJmdpyXshfq4gJpBfBHKgUa7Y",
  "key32": "4ZivDatn18GPRwiBaZafBNT6ejC93DB1dmEe64LJcTjmfSWy88cgSVRJ82w1CTLQmFuAfTRCbB15q31yUzKcaGev"
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
