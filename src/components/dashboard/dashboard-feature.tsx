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
    "5UsKo7MYCbG4SFBT9pdA1Tr2AQaiVo51ProiBAPKzgjosZNXNLi9f7r5nTThzydhkUt9MyFBxJVvKuBXZJxFWsc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i8NWVbG2yWiYmnutF6xEfJpCmR2zUMk3UYKsbJ41krDAZQbbJvBQ3haohM7Co9HhkJX5e4ykmbWWkw6rpUigFuW",
  "key1": "4txv5qonbk6Yi1e15FrhoQgfETRqUGwSDp2mSx6qZU8JPcefWsgjkcYA74zuj4TTydjsTzaUPTmKa7GjtuhCvG9H",
  "key2": "CMSv88jNhdS78RudHA23XuS2UCiUzzhcwFr1JB93Psoixds7KFG5KT4FdZ9ESFucWeXo4o22qdL6twu6YdRhEyS",
  "key3": "5nHzdQFCWBvevnWP41z6gcEr3oCWmnmHGt7J9sTEngNfaifXbLyhnuQfvj31KRM2dKPykKnADWBxti7haEfAo7Vo",
  "key4": "538Z3A2ffrV568zE6JxeEANVnZdtxywvHmjssHsbAX8Leb7wE9ysw46svZ6rjwLrDjGJca8mzv3wDKKnbjHFv8UF",
  "key5": "4G13rPm7oCNLpWbZh8F3p6S1ThnH9DfrDRe5RoqohLNvYpvpKKxnry6g2PZTqm6wf2z9ASDtoTRRuTdh3xpQz9Tz",
  "key6": "5tMsEuL3wdfDvmfad2vyk49G5GP7UEPH2PsrwzW76z4xCq4JADF1UaG4NbdQz3NLN4CMm8wp38WXEVKdfpMyY1zX",
  "key7": "3fGQWmaw2MCpSPH3MTBS2GX731E3YrVTcmqEjm7rho3w7VAbtDT6pjddbJt88nibduKgtBTfFcWRWAEUPEaRQ1cU",
  "key8": "G1C4DaUh3WC7TxisRLFo9g1UUPemtJUqS659C1UGNfukeEYB18gJqkH9M1vUoYeZSQx4CHyRcyJkBBmhKrimwvP",
  "key9": "3KGEsJbf3ef97P4n8yD4tpQK8zA1Jn2BnhVLLBgf3jvNjoSJucd31YjSxWTebdxRYngaBXEk56CuLkYP8mb4n2Qh",
  "key10": "5GpvbXKNAXCtdrZhTySgFhVdd1mhpvLhF5wzXibk8WRDKZVCi5jsiZ8E1QAH8HEKcW8tmDhK3UTL46446UoStqbB",
  "key11": "2qg6hTqLSWbfUKNhbyTjHXBJdhLVf7Qm45YLaeBc2Xbp9opq21Xo1y2exHPm9rjgjvDrV2PoRqJPj9t4NHZH1GrJ",
  "key12": "3cjfe4ivegGfPnx8vCZchAz4MwsdFRo7oCNW7sYtpWSwsqnR7yFe7c8K7cs6MbicmDVnqEvDFNgZjcdcKTDEABvM",
  "key13": "5RCmxxsnd2VtQU64WgHCgSdrxavEARtUDjbaTnfZYFxEc157c1piVHWA5kfM8XtCkneGcinq9qGG5JeMSMUVUzdR",
  "key14": "2xQ9Ew3s2cEcDQr5i9CRm3psrZ3drNQrPXxgub6pekzMkUNuYNAo2cMy4krEKRkGXCxLg3sXPbx4JkEaPvWjty98",
  "key15": "2iEHubp5TKgQfPPc9MHmLAg6rp6Qag8qJN67xEUBhTx67LGRW3BMUtirNtpGhaTgPVNNhADtxh1TtfSTCpQD3j5u",
  "key16": "mfi8q4gGaALFPD71kHsUwXDPj8Ewe6bY52n8tkBCozJXZ7yVSs547gw8mKBcLv5McvD4BuKGPq8TijkZVnFiq18",
  "key17": "25EKBfjGpEXHopDDV1sa9ri28gZHpoZ8atYEexETcj7RMLgh9UBHNBGM36bqBmYeiSCAv29uvcdJKEnYed2geWLg",
  "key18": "66wNvKpbiJsQaXhJi3WysZiNPG1HLJtWTFNW391RV8UmhPk7ygDySVHNecjZafVQeVciQ4RvqdGwxrAAxQjxiDMf",
  "key19": "3s9aYBvDzFcvNP9VTuY3VGc68CwapC51CNvcTvshmtud9AnxsQe6B6ZwvZDbbrPP6fPJjKC5VXCaWpDpHqux2RbB",
  "key20": "4bigGLfKzn7gczTwhsJ25HWZGoTYrHDZeQkvYK64gKhmCAbp1F6WJhbDmviQBuigB5Na12g9uiMtqox2PrErXZZr",
  "key21": "4rhqtfTY4r4UCReoWW3CuopYpnRaQ7EbjbgLYAgiXfSb6wgYkMp7Sp1XfEFN6sBFchpK12RRCSPirEVs4skB8yqe",
  "key22": "5frYng7cPJN3eifVefK7LRkw3G497KB5V4uJmNBQy6LSFyzJLJ6hf7gWxXKUeXmWBo4EDxDkRtJtqSV1dAv4bbwp",
  "key23": "APgBXxFakHa1CMmHFHPJMzyAx6qoPC6HSHuPzsTQ299mMoQEM9veBLuRL59Efq5VyAdwg1K68skJaTLafDhKdoq",
  "key24": "4mZUUwyjnkemvC6d2KjpSuRq8PkSYt6wHGRbFnw7MgWMprWRCLV3z1TSYbPVM4bxFCG3J79uu7V289zS5nPGh152",
  "key25": "diyyKHCKKuVV4nhcHmT2o498gm5rykLUNZn9Kny4pZMzfxwEVjNtpqxxUq5yPBmEbCMV5pXPsVqgFzxkVFwU3sB",
  "key26": "2aQyHpFFguarR3JVgHsCUoscrkqZYMiFoLN96XfcGoWKohfomWZpW7UWCcm1V3WimM5utHcBPNcr75gMTVFAmCZi",
  "key27": "5G1Hwtqk1EkfqfVRxcH7L63a7bPpcPuEprxyY9zYJ25kQtXRQ3FNf9YWWa3zpKJHGXJGC5i8Nq9Y97QCAxJ5g8SV",
  "key28": "5eCgyJCkFjQzteyS8jspLTK3DVufDSXHjE5PHkZzTpHEbkbKGvKswA9WtwGqbMGGKfMn8RaYSrn7T5tkjtaNezPA",
  "key29": "2tSU24Go9goxA4fYz3VdV65dQefHqYvsxnpBQ85FbhoDyqreGjHTFhijywUjRtSpASJEqwbsGtzS1hjLqRvPfNCV",
  "key30": "4hN88h2DEQGZxKytwzdjGeJKheuYHfpd9Stny4pfDkU7Z1iYjbR7sqaNF1hRCxdbE8tu7dAnNxw8kAsZX2CvSEtR",
  "key31": "wnATsALKR7kJrfCFVyU7t6ohNwXZ2KiixSTsLYyDi2zs2FTwhpGKaxgrrQtHCDuGkg5gvrm2cXPCbmKp9dHjsBx",
  "key32": "3qYwBRpJD6dwmHvRuUdJc8KC51X1arQzNT4ckKvqetVcznY8hyZpwE13Y3UL1TAsyv8jXfQcvz8AG8fT2mrJiepa",
  "key33": "4zbgsYMdqS2yda9AnszGm4G7vAgBdu8wPZ7NcouyQ9Kva3qbsYAqBYrifxfqBYJnK9mxWRSyn9Nb8NFvFZTBrMsK",
  "key34": "4iu2x1taUQgdjjcLysemixp7oEZ7oNnwzLrbqnUUtraLtkY4TmTK57qWSojzsZiDELMt7iPENrA642jYCnjBvYuA",
  "key35": "2gtSW9whdvjNrZTy1722qNUketTXgwtF1jVWpbqThfvdkoHFKEPrKdQyH1yTZrLCZ4juTQm9Q8BfwDEee7GSUfom",
  "key36": "4197GG6LKo5jcQgTz7DM49qCp6XPHQxdnySm1pYn3RnejNmgLmtPhbN5UZxwS3uUzjx5a481wqwT9Y956BG6gnQN",
  "key37": "bAHe86rrD3rcDEDtHZPN62r5QybUZYyZ9bu36gSS8QZmBSyuQt8Ai76hRvt6SgXLt8zm12tEhZLoJMLbLGoESm2",
  "key38": "4YTLSj2LedWsmaCKVpP7yyQLL9uDni3NSrRRUrRUjtGDA94z3zPDJaApuve3XcmTLB8NLK38GsQyLnXVdmmXTEgx",
  "key39": "5ox3uzDiu5BosPWNf4ssJx9XhBC5yJ4j8yVpVesA23iyA8mnEEQD6PVgHFFJtz7shXtQcpA8QjpPR8kEy7pyfZN7",
  "key40": "mhNXF1FwqEdVNk7dVPc7eqTCcUBQ9bgBnFhSptUTpvWnZZfun67s4MVpg3ypESxiNk78Edqmh7TtgxPGdXntoXQ",
  "key41": "mwQSFUqUcxbKwPc12AgwsWnAJKByN24YEYQT55LhMD438eBDVLU1ckQrkQhChn7kwVha3vTjyvjfem8bv6mo7JR",
  "key42": "3pJnJTEBH2CmTJotgLNB9JdbEWuCeUJHsYxgVet1S3R1geAFof7bpTrJAawQN4kLC97uSqK5rbznqcGuhwGgv3Gd",
  "key43": "nGXG31yyoDF4gvLAirx4ssEZu5i1kF92Tz9P6uGGQqcuiRuVnY3PgLtkZvxFkLmMgeteeu3guHVQgTEhMR96SaP"
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
