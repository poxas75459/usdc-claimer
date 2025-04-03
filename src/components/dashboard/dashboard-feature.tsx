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
    "64eYBc8JZuxNUVexXG6tNJXNYXVP3dojNBY4r5BBozd4d27bLheR99VKqvjX2ko3Rwa1hJWjMA6b5cjQbAMEJa2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qKr6AhbTUyFLh78DT6Zt2kt8qaiYZjj6L37TGPZpnyzTGVhVQKc7Z3gGQata9q2RXQj4MaWmUtHEvdQFxbdRr77",
  "key1": "2Gjs5YsPUL2ZFmmuQVy4CdJsRGUgXe7RhZmhxVMZW1uu3JVsWdsRXL6jv632a5LUrUas4DD3AZFZpxqDQFVbZ5Qm",
  "key2": "3c1gYamPBEucc9CFGxGcqjRPRFM3oQQgpGu5dPXrKRG4XjJoiNgygxvKqrGSEjNjKva65ZM56neMY6EsBWfda8WW",
  "key3": "3bxRDGH4hgei5vRjsSYHnr7EqBQE1H3SGSpucfm6u3KJc11joD5FoxJZRyknE8guNaehwpZ5enSNcX5xJWy9WXTG",
  "key4": "29LsbhJ3ZnyUpCDy3eBbJvQnC9Px8Gn9VhMiir2cYwSG17D3H9gsQAF2mkfUWMK8cAcLeoukitqKHyZAneC6QtG9",
  "key5": "2WwagvSrfEXCtKyMcRZ8HzmSkY2W8bJaZTLHtSoGQMkRGp8ZdexDbXDSyXWtBuU4BKQEfMheq2BZLzKfarRYTJag",
  "key6": "2THRcZWdcB3E9myXurEUHd9wZLvs9EfsSxsy7ztHw4Kr98LuRVGS9So8zouNuR8WnCz3ffWM4aBJPMWV7NLNEMuJ",
  "key7": "4rSbYAQx8WsQ5Y1By16VcyDUiGeGuy7gV4Fvryj53ZkaW2pTHyjeSmErTsRRgsGFu9BRLfFXLrimVPDkvyr7gJMz",
  "key8": "3gmVpghA7w5TyS88be3jz9CrEU5kKHKB29SgkNUSMYjE1L2qdPjnY2bF6i6bZ8HmdRTuVq3NLEF76q9XaVx4BdCV",
  "key9": "5K2sc6K6gShCH7SE7kCCysH2d6D3HM9QaiCYbbEKYReCXgYGCUUS6Vdc366UKcsrNuwSHgZ4BYVXmssrdAyTrbrc",
  "key10": "3Zc7Te1DMz3TXybViN4feaoLRZex6HXtg4CUJWwkUmehTrV3bVSghcWbHapSSBTHA1kXdAwCwCP2BuTKQ6FjMKKM",
  "key11": "5A3vED4N3X5wJngwA7taXeGzHzT35CQZwbGh77bxY75ZCLsz87nf2oVTFNj7cj4F3epePX76VNihyLo2Q7Dqr3mg",
  "key12": "6t6eau9iPnk4Ph6UH8AadYSB7LDBtCKVjZWLnfQ3W4V8kMs1V1z3htSKqFrBiFywsX29bDCp5Q16wy7rAYLrWjk",
  "key13": "3axeEWMnDyhsU4wcYGjRXbTgtT1H117rw8qLJEWvLCp7hbPCcFXfL71LawFQ6wVFfrRoqj9PMJ7GHg129BqvEHg9",
  "key14": "5uNEkFAyC5Afr9tHP3QAq44n74aKxjrYxNy1uKxX8PvYrMQYQhwotXmDKYAmWx3GJxx2yAPFVcgyjwK5A6YA2Dgv",
  "key15": "27UKAJeAwi6GDovrSw46hwEJhB2WyKT9yWvY5CD91gevAsqvVxMKn7K5GQAthhBoYyXvKcqoFqQfBZpQL1MxkuDu",
  "key16": "3Ji14BCGHbobTPDnVMkiLpPcFAuGvLbVrTM7dziG6488JnFbKQUdfZ8JadHBeT6zp9RmzBvr5cGSd3km5tkqwwZk",
  "key17": "5HhCyex6FYMjLNjjm7NWs71xFvggC1HHKFfwo3K3S6pmV4HyZvS9xvtnrTgwRDhC7FcDhsHNtc1DBmXMF8R8LtNJ",
  "key18": "P6hZ7pNw6QC8tiisNnuAdsYC5J2mMDdSSZ4VVhLMijcjEkhMH3GuCuVfZ8N7FMUr5hgCUKFJsQAuMmroZ1TUWis",
  "key19": "2ScdpSnkq7hBgWKZVuoUqumS3ZkrUNrVE6DfcyinjCQ2bHuAzyFcaFXp7rt9U5A42A6d6FTh9NxLmEHnzfF8coY",
  "key20": "2tVSUSnnVBhoFp8YjdLHeKMhfxb4wqBN3VQXktvHmt32w8Vv7cXj6nHTiYxWyrTidKsaTTb2GxuM9BSxFwgBoJ5C",
  "key21": "cQiwm7YWnxuR2pZ7WefeEXD9yf8G2Rau2nzSJYCqPVKgb3rRT2pjXkWeStZNR3aJhY2eyRbPfYGdAxUgmXr5paz",
  "key22": "AsPAT26qUmUqWTvnW7EAjKs9MwSvVAXToazC87PWubAAKHGBYAU7eL5ovfnRBC6FiV4PdojHks1zqFKfbKeAhCS",
  "key23": "mUMRJEaWWBqd7qM7rfFgHA6Qb6Uzu9Z8aX9AC9cU6xLvNpGrznzChSHGBRnBowoZGQKaxS19uHcaCneKKsM83Vv",
  "key24": "3z4E1qtwDabUzNahHMcjEFH6JTDUkNtw9KjvUaaKCs94WDMM5v9QZUCNT5GbVdaiarY89wyVbNx18rZG4WLBMvHD",
  "key25": "55nwSNmJx2eFzQarhDfHU2tQZYZFCgVZB67srpVt9LDfXYQw5PgD81DL32nPEB4mMUsWt9xTbhhFSpF9JPVhAeEu",
  "key26": "2j1ABCFcSv9fqddN7s6aw35NcAmw3TpyTwSBPHa6fsbXx3QNGQJEZAMeRejzcZ9PzXkgYGQF8gpbZG8VuPUDQMXz",
  "key27": "4MFzLyQTJuPkP9guHuTFiS8Wxymk8JscQHNMNYoWGQaiJz3ycdsJKKgFN5aMMamd5cR8ESVt84i9Zf8bBuxD3JxB",
  "key28": "2credshsq6UnUjtRLgZgiV8V2YnwavUXeQHApSeCjAPsqRQDJWmWymJooURqD7dRHdXeotnjyK69Xw66tnSaFxkt",
  "key29": "3rWv6m5xWwHNabY9ZsUVsjmLtYaZ47H2Q1iJbDhxgEZ2usmhTnT76bAKsmaqW4MRRZTCmYZ1S8LmJRcjeRCJCWW4",
  "key30": "41WYihpiTQgmK8xYnwRojYxDxKdaPxZXVd55c8nfDNnKjJ7Jthrj8GSDCyEhkB6im6ZzR5f5eo4sGamnA5FJsWa6",
  "key31": "3Sk9tJRJe8btNtXh1Y1M54F38W3EXpqy6WUhayXSKTv5e1tjKr12Arw4AeCmn47APuesXJhEFvwXr6bUWbZe54AJ",
  "key32": "4wnNcLesbQr68yrzF6aWBSZ6PyU3PXZafyixDPNjL7sbpZuViZQpakzcMRLnMjHyBRKWz1NEV4WR1BVAoPEQjwEJ",
  "key33": "5dMAMASCG98j67kcpCaCaXCjzW92xqkHUh7wdeNLy3u2ur85JCrUJqzSxbQ3dMestqWEdecKUMWRXkPHFGCwBh44",
  "key34": "K7j6gLv8agfYKkQzJ9S99b4dgN1S9TnhmkDmhBTAT6iDXtrsWNcZFUN3u1jydSKfe6EX1o9oZKmww8UBtVBLTr4",
  "key35": "2eupVeeqYaE1B5W7CYmJX8vcHndTRLDjmHGLGzfjdC3vGrMBMzvjhQRXj21MGoYE1s4Nz3psjLeeFUt3B6CSMSmf"
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
