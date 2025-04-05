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
    "gGBgBmsiUKjUmSFzUcdedg4MBpfAYZCCWvKG8YjXs2tucSEp5baX731THtZtYKEYjBDMRrQ6yx2DfCoEFot9SDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "212fPXqfijdqfRi9J47AE727JPLUmKRSMR5pHuV8mpfKdEu3YQyEwfajbEDp4pmSr5trKnBx7YU4QwDgEEWB4eLR",
  "key1": "bRWxuFHmv8pPkVj69Apafj7BNugny3FJE2k5BkvXDHPx1oaJPpTykwFKqJURuXgFXWipPsjPAgwJX4z7e4DSaWU",
  "key2": "5R8w1ws7ZdxpiV1QvkrJPsXpweoGMJzjhKzUjo73vmeWP8Lh47Su6kkhsEuwaxxZAGXs4ZP3uGyFdXCvGhHkFx6c",
  "key3": "3VpEYWYiBHPNiMH9jeYD7u2UqLETxC81k9eU8j81gf1g3A1xWLAMKFK5vxB9fw2cfLKFptqgPrXQP2Rqv1PEqu2X",
  "key4": "3wTAuXVyXTawguYGeUU1yKaGG8aBpDdV5JFETir3R1x1WKiVtxSbMGFuQaxcCQKRpPgFYTweny3if7qUegj38E5z",
  "key5": "2EmZ61rbDgfoJzKspAwwTbUfzqr2YkergEZxbsj8frbQAK6dAEVRDnYx1KyP9YtwqefY9XhMMcWQpXGemmQ5qVbX",
  "key6": "4jkZgcKoVA4gdT6gkx16PTM5TsijhfTeRHRmug1fHcy1YCena1eqQNcf8WXFNS87Po3jeCHcxiU7VMLyU3JxwZA5",
  "key7": "4DTBXP1iRnZkirKjmsY4rSU2dnyYAGvGuAR29HndzVREE57C7ZNzf4jYgxrjeVUxWX4WBLSVknerpYZBfHPBqhfb",
  "key8": "myPPvLs4o5W7GD1V4ZWyYbbDj7RDj3x4t6JAbfuwagjANm5qsu4FbBJ22N6Hiu51dGPomjRttxMe7YGVFUiskKh",
  "key9": "4zhvkn7unebCakYbPikzsRD7eanX4Uv56LTDfD9Gu6icPLB1bqyYYP6DArfYNez2JuXazgFRF6t2UVSH3mKnuSqd",
  "key10": "4fNxR8dJDD94vcJsxNh663GPpNpqdtj6iog8vF6Pt47eGn4VC2GA1ztnQ4zWKhhTLGTKDDvKBL47SQ32ys8bzJbR",
  "key11": "3yvi35FySS9owpbPdt85jNtPaPiFQGgJjDgJVPVrhBDViYvE2FtG6nXqrgY5dWjRZCdVrvFiaxG9cFUzwsienjow",
  "key12": "7fgohnJxBhEwnZXZQ8VxAzBkBp4W65WCxiwaaVuj9ajoJrTvLx6HU3La7SHP2BM2gYVPsSfUWDc4PNnhnSf174A",
  "key13": "3qdYLyA7CvEdZHbpa2Du9tG1numvkdkbQFoRM57GverAyKyfuHb7qZcs9ub4pm8aFhrFVAwFkbmBDgrkNWTCCmDE",
  "key14": "UKCVDmQAV7i7uUsrprPU8tHa2kyoVP4ThwmWmDShKJ6RhUuK8rqbmXxabRq4jr26u7hwCozinM24SbAGxjKwx3R",
  "key15": "2WdR2hkP1xaXAxankXG6CCGhhiAkJkwDz4MSYMt9xwmamJJovxcvNXzPxmtH8KCJPpP7GDEMgpxfb2bwDRuANYTt",
  "key16": "MRprjr2dXih2JYiFCxEp3YggJKy1PT3ng4r9NAc8nQHECAPALdSC5ocEesn4UfUyQihKdvyyrr4dJW2RihkVe2P",
  "key17": "2urDPJAbsWx537AdswKqpg2WdAUh5aLaTNnAAZxrFpqRuh1NaHUV1FziyVM7S2CVFLFHfK2BgPU8johPcpqM835L",
  "key18": "cKHZeji7dArCJCTX4PeB8AXKT5totHz8EDoGUa9yJQv81UMCUNzXhNAw6BTbSQEuUvyaFC6iGf3ZcgCH7iLWzBW",
  "key19": "5QJEYbX6DEXswg8LkKMY9Z2b39RAbN8pQ897GNQm6mqH2AWgZUjjac5tUKWeZv4ranuzddDUYK81fvtKPt8ZCjG8",
  "key20": "zqDh1i2FszVYtrogEkefuU4bzCcLGJsFWPXVzh7H3vfeqnPr5pnGXUq1jBEBBFwSbcLhEwLktArVMJSb39bXWyV",
  "key21": "DoZ7e3xH6gmDtkoSJ4zrxUHWvbumHzstJ3r12L6La8mqXaNdHN5DXcf978N3TjCozkGcHGt4nxapWcZRnpuRfAy",
  "key22": "365WightYyzbuXSrh6iWBe1fjmgVvcG3rHQZM3JREjZQK5hiXjuuJ4ehqR1sVJcyCJtAGH3MUe9K9wuvRt3KvXif",
  "key23": "2nZFPfLKJnDg3pbntgqTCMopZB7NG8mbDDY8FsugBzPCrMBDcc7ovHyEFwYQYVojtaxN4kYYA4ecn2GUTU6gVG6D",
  "key24": "Djqp8NyW44XQk9GfWmNLGxQmKVzxnvPBfCNDXmp4TSS4BAuhzyu2GFpif39kDPRrA7dRMqZBvGXVrNcN6kHYn1F",
  "key25": "y38tvysWAPYXzzxGGZJVWQvnpHsHjxsACBvcwMkurQRV9gK65z4J1XFLXTfU9cTfXfZcZdmegnNPq1Bd6UBoe5s",
  "key26": "SuSd3SCFy8HxWepE7czSwJUudaCRgH4NC32HTDreiFv2Y5EyptSyuVmMYbKYQBX2KhVWcAz1pVJ7efGqLBkV2Za",
  "key27": "SgeHsU6fecpYjMCKqg7MTSzn6DtkNEw78fgFmBzjcADSFzhzFjPpgHakCd81YWTLnH8KddtVwwLzhn1rWpti5Xu",
  "key28": "4dCKe5CbCEeZaE3XAKrXbDdGvDH2Gt4ozzpbc4CG7khJgkwCZQXVjgnszkw5jyWtMUaWbPfeuSzZVSfAKNnXdXYf",
  "key29": "471idADTGg1Vasa8fVTmApQv18tFNtHn2jaYpXx4jeqepARUAxqGNDDkvEvrhrML5xnvq2C8SvBSaQ2pWViSmHwZ",
  "key30": "4jQ2LK7ys5HZLfFqUrTYfY6bEcX7Qy9gjxpYXaj1XepL2QV41TGEK18aaWtgPvTNJncrio9TU9RjYUYWsMhhFasH",
  "key31": "2Ts6GYU2XeoJnCnpHJXsEueen1HF9B4s8FRA1W2okqAZCfdQdpcWQHhku5B7VBVDA2WYQsTrhDHRRbjzAKsHzQJQ",
  "key32": "3obrtSP6jJDfSDW9eH9sWCRKCWhsQ8MsmN5BNn3uWXM5ZnJBUVhLK1L9wTAhYjtygdFJ8XWDBbPtWBd7LYSD7wK2",
  "key33": "681LU5Q38qP5BDFuNUZnwaq7fhB74iLbt9qMacyh4oK9ChYwHNkC6h7d9gfCeUpPiq1sTaYdikrLph8Y6tX4zhr",
  "key34": "27VSoGpzwYuDHd9LMR4tY1URMVMXZooHRMjoEHjpcMpRu2vN4iej18etHHbG4AiHdzUjcXH9BhWarKKtGAkn4oov",
  "key35": "2KtNviHQBZQ7ZduDvq9GbMbVqRXzEsDCpSnKaHuP2buapnj4P43zprTDhKKZ1D7B4JjnG37mWgvkeHH6yRMu3Y1f",
  "key36": "PECmJdsmWteNEGKi5gstv79qBxg94McrZeRUggKy4xNdi4f8LdAm2u9w66YcvtYjtrAfUEp3ALn767iYn94WoiH",
  "key37": "5HLxE8SbMf2wCXYjCSfzMVgSPaL1JfmCbsdmpfeVp2bykgEp1hyZguHWme14mjneB4zLvUBJNfHmMbQFPgs4BExm",
  "key38": "5UUb5ischB1zYLG48sv7kVESS7F1ovFi4GMFgj9EwbiEWruBegayAytcQMCXBfGkUy679JoXdT422UCqgTKpGCoy"
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
