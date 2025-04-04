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
    "5Fi1XHML5SADbHjDuDESj2S1Eqat43mogxuK6VMG2h1ky7FyCjFVJJXfJyKvWVTg87ovzjnQLYmVehVexzAhicz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hVBCiJSBeq7AGQ4CPDpedYsqfEoLViZRp9n42vEo9oHKQJWD4N9EGh54mNGg9UbzWmPzrJpgWSGpCyJHStuQHJN",
  "key1": "5MADiHzoi1YpGqwFhADKNAsX5BF9zhjYQUfdH2saEB59HdjKJUarsiirXDcEALGrPM6Zdv6R5DqNGixwf3wJWnZe",
  "key2": "4xL1xfrwUGKtR1x8x1ZYeMZf6HooqB9Shkt6kLYNdLiSKN5scaitZZ66ubmzoyHrni9KmxhNaHS2sjEDLw6FdRVn",
  "key3": "5x8yYdUzyCjg8DYPFmY7GZBQLyc5gTQDswE5FGLVKW5Gc9sB1KfKFKKpWrfaMFD6p9tBjZKZVRCHt5BBi1tjx5o1",
  "key4": "2Cgm9Gf8hBNnkLLbwnZsHfQc3CYfyW9WrUXDhLjwuFsWdzApodycpzPCLuD2FNJDUNmFmodj2DXAUEmidSmscpBe",
  "key5": "StXfA2Y7nSqYoWeY8q5C8UWu8zfgyLhjEoyUmtuy7ZxD1dJY2CmsSsHtP4VuGzYxckioqx1iANuC7DcUrEt5jh5",
  "key6": "61yhjAZ94TamTKhDQYKDySFsG2bSDJn4qewibit6okxeP7KrLbcaX6yZesMMK4GkDwhXvhQJjmgdzQitGNsEcetg",
  "key7": "3Tj9dq6rTP7BVpmVPyQXrYFYzhtKKd25VNC27okewkim7pAgTYJhM84c96zqjkptiexzRkNPsFzZLzBPoGifo52c",
  "key8": "3VCbrpDYtMWUU7u25H5GH8WRH1EBKwJy7mniC44vstwLR2iXJHqE39Zb2HzTijAZ9naNthKFZvZU7mTwxajthBGR",
  "key9": "5xt6W65y8nZCYRXBLMA5YmLNuCn3RqKydvirjhCumSnceJeYPVXVp1DG9G1poHThGx6yHKhSVqUKQYXRezi9XstZ",
  "key10": "5ZgBXjrNofBx4GSkFysu2ZcPpGewig8nz4dQkmuRegACjKcZzo6DezmmBmga6LJjh6cm53qp9fDEacBML9mLoxNj",
  "key11": "5b1f639f34R87r7ziasuhGXBQDKi6FM1vseJNubYPgpDRkRBSeNoirWALTAzZJd2HVJUGoiXs6ebMFDWjjsW2P5S",
  "key12": "UJXYvt9HBUgbSUynJZo7D3rGNs14C3nASYGrMLAnYKxPunEzfNTi84XgQopppEkyPE1YaqMv3wXMXPLy3gfD85F",
  "key13": "243cCxH9uGpZVWp9WAAZtuLQmfNHpBJ7vFpSa6xcpvfLx6vfnYvpeFyVS9jxE4ovPigLHUmVdDLsmPEtGSAUe7Vj",
  "key14": "4XPEFhzHb411enZbqH6skKCNEMv8CrEabUzTCTKXxCbEJiZJuWU6mcP47NHTNsXbZbB5q5TRbS89QwL2FenpZRdT",
  "key15": "4CkwXDvY8uMfLGJMtuinsK9pBHKobXYAz6YC1z8udx13W54HCMTNhqsuD8nXjNz5c5hga93aqFe29JSXgWLw59oG",
  "key16": "2Jv6jsXF4b9kexpqgm16Ru5ZcTUcda1bfTAqNpzapqMA1mhwds2UTb5fxuL4VSyv4s3VTupLYFZt8Fg4n923ewJX",
  "key17": "5Nm1hYzaZFBpTdi59YnchVLoqrsHYcoacyqjvw1etMMcmVtQ67Mz6QobAFPhVCyUMpvGJL6zRGhhK99bMJN38GiH",
  "key18": "xVh6jef8FrYGp9xvV11AXRL2btUkPMm2xNm2JSu332dgTyWrfqNYeGDkjdxGVpAdX6Gretm9cFTenvGPaSdqFAA",
  "key19": "5yJCELJ2su9bGNmDTCVmQyzaD12sdK9w6t7c46KJbNtYAzniJtUAZk6JLiRJggmo5t3DyqRLg1UDgfXVPx6UAAGe",
  "key20": "2QC1kLUGXsKujVpfUpYFhY1kpd6DSVDsmkN83qi9Kbi6J79p1WGENwTnw621u5Rs6CnhqA2TVSnZzq2ecr1yoxWS",
  "key21": "4w4qZHu5yWKWKQdJj2m4i5SY7oCmCa1oceCUyDUjJHY1GoJMbXjMd89LA2to1CSVkGvTYGMu24o6JZ5DyNvjoLya",
  "key22": "V5X4Hywjsxfw25r1SLExnQSnNHCchitJVm2vHAeJPoJ7ej5246MGRwem74aZxoNeoADUcVp4XRNvziWrB63eHfD",
  "key23": "4SRdzmT76293GEF2PnfxG5SeKT5QrqEAUnjrYKkJMDZJ4yqA7jKoM31TZ1XiJVFrFNJFoYSDSoYyU2AR3mrs11FV",
  "key24": "5cEsQb9KkFKZR4CvbLKmF72Sx9xYV3UFAzM5FrwutwK4okGQgMwd1QoUinkLarvzqLEVVidUtK7ubAumZ2Br7EJW",
  "key25": "48xKE4CV2jbRBy425uUMWjftgtNUbgotvik1c2No4XYJhsb5G1SmjscMyHEPNt3w2bq1iZQctWkKvsy9TGzzkZc5",
  "key26": "541nFCDu7tyMSS4GpcHUAbezEie3BathBGQmkNuEqAWV376nu9U6A9WJdxYTrLnzWeAwoGbDw5PiSnqk5Xkd2Y2K",
  "key27": "ze7uNRPtSj6sy4j5e6rjWQcsFX7qFDKim83fBYo9CGCMNPAESAH1SmhcZcmY98CkP8X5QbG5CfXw9QGxqrJ7cGT",
  "key28": "5Sef31fnKyMRs8nvE5FJdsgp3YJMLgmJH1q5JdQZKWV9U9oTZgEKsXoudCCgkE7iUAJkqk9B38dmsnm1KSt3AGtg",
  "key29": "3JcpDETT2k5NVNqvx1PqUHRVbwq99496FkXAc7WFXFkEfgVacNnTiU6PzXfirMMBexv3rcy47LNMcHkNumUd5bNd",
  "key30": "27cznrtcqHff7jV2FugjKBmxsxZsKmXMM7o29UznErZ8KeqfBLJvz9H1zzbmK6W9RVKukvVhMy1P2gtUiFZDiEH3",
  "key31": "3ATtR98s2n6SGHFNBRatPtJpTuiRLXxdnbkgKiEFEfBaZCcZT74cN5Ger9tKEALoNHVYsCLGSeqNPkgZPQQvPdjf",
  "key32": "3SgfTtSqG6x4in5GqWuPArttUGtWV1ok4rvciWNZeqtJ5RGsCKiwNrxBQ7Q4VRB1QLExdT6txGARZQ95ohg5Ufgg",
  "key33": "4CKhnj4UiFW4aPRiDQrxEK4uNiPoS2qheXvb2otgy6BUZwH7yHsjycqWbkKMSn17WrBNGPBqAJ1rUr6W9idwQJJ8",
  "key34": "3hMWrWh9e1iNtA1iYxBFmLkAJhkAStmgsvp4eBPm4mFWyqM238nkZQuMDufU1LB3AMM3bNB5oqXHcRENbBhXEiEz",
  "key35": "5ewbasoWwbPhYthmr3t78y1tc8wVa5JAzxZ6V7C1qPBieA1wCheL5a9jf98DdFn1urKLbvBR4uUhEMnghS7tA7Yr"
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
