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
    "419r71KkY7BVqYfN7sAPv16NLuLNVSwNVZ1dsDJwQUj2fxmvTWCcHBd4kgDNQB1udzMjjBjpnEjPxkbRJRnvCCq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5szkjdJ9vpUw9NRTj5mm5ekhPc7yUV2DMDHZPXERiUEar3rYoYW2fcc7EudSGFrBWAdsERbL78k3Ge47PAGFPDJh",
  "key1": "4DnGyYjFzGt6ZfRFt3QXZ7a4atrgeGesoH6vv1CLnFG45A2GANMYM7DXimBgHz7LZmHkcrRRBjneL8onakcrZc15",
  "key2": "2fciUAAbKg5T6H7W3jDLwi2QtfjmspTHwft1BqHDxjmWL6FNPevzqz1F9zNqq4QQMGTowT4M7ZvrgyyrS1u2bqDH",
  "key3": "kpyPCckhj8sGisykYLwNvgADg2AU4zjMYfkEKLAffHzxxDj3baBfRNBzxEfAutUKJBbMSDomiNfsBb3vAJdrGGR",
  "key4": "657jzriNmBZfJrvi6C8bzrWwKKsGR5CFNjFyfh6Fof98WQGkmJuw2YkCLEN26Ku6W5xmFVtNpZ3793WtuQADq74i",
  "key5": "3ZtySrLDBHeDRdxbu4skYPHBUEZ6gQHHovB5eiTFYxAzjZvxKbUzbx3PPTUmKVmiyjfkKmB8GSC9gCX1CxgRP4zU",
  "key6": "2i6Dc6swogR1F9PsRXt6BVoi71DWeEgkd9QRGbvBaN6XzhawAugsJkcRWWXo2A4ZQyYG8x38ysudWo5SEp7yajTH",
  "key7": "5DsBWnAn6VuMx3agn2VVPJC2NzVjL79Aurbj7mH6cL85wQ4Lu2ySTsVyXkWUMFi5orHaiXhxHE2psRUfSXpYd7Hd",
  "key8": "2wSVqS3JZ96nKEogqmnJRopkitpKohC4RYiUv44PREdMKFbPpBnbaVCrqMZpNFJmnX4XD9a52wG79U79DNnP3EKG",
  "key9": "4wNLo1dicBYnYUtofRjaCvPSMqq4ciQs7f3VbGoqmhPeZ9yXP46Ds7YAPUFhchBMxXCXjWTYodGmU9zFYtFEFN5n",
  "key10": "3x9zJHw3NkdRwm1WQZVnee4PUBjjfxdpSWmTS5jxgyTQ3UJZEiEDYb5DNxNbAYUvBqm3FKNkS6eGuQs1VVthHdt7",
  "key11": "61JNbQaXceU4xT7rshYjRsj2S6BCDVH1FqZPJkzEqySM1anssyrGfxuUkBsvxuJhnnrJYid7eQqHbyGKU3AFggmG",
  "key12": "WYCeJ2y5qchRGzmvcdYrVsaJe3xoGDXQzFXMdy3LC4wPbmH3bRVt33yQqToN9ck2trBfGfRj5nxEFAttV8beknY",
  "key13": "3EzJPbk7n5KS2WsnZGAY89RRqE4hNzpyVLacxJPjpqFj97WDsLme6pypbGxLUT23zugYoXiuUj6YZzk51NfTtXYC",
  "key14": "3U1ZsX5HEZZoTvhPwsg1KtkHpmtmvAuAHQuXdT8rXHMsVB6ztFgVZAwCKNAZDMUsGrxnEqCNgB8GfknbVdjFYXTs",
  "key15": "pqMgDzWRn4Qr1efgVPMrpqhQkV683PJrzLDer56cgTkDHR5fDqsRXBc5ZG4YXa6fSo8RQ2QMHCb6RwkeXKWGm2m",
  "key16": "xxQb7UWkKFvjiJq8RugxZxe4Uvgh6kM3bCXMfTYCcqzLi9aVQaN8GpZCxdAMaKzgHQMAYmgeZ8A9dCTdayY45yL",
  "key17": "rqzyifFBnFwff5d14rEHkxWUQRLVTqnYM1Yw1CsUK7nKqAs9t9zYkCVefApU4iLFyDC6sucdAGxkMrL9i4BzAqp",
  "key18": "4GW3YFL46CMVpkcsRDrWXK32Z7RDaKiXJFamoZhf2YGbrYBWEwRPN8c9T1Z9yqNusTH7NzpoZH3XLfyZADAv6xBU",
  "key19": "2nebk2YbNYzKq4CbDdXZFhKuZKxzvdQrv1UseQBMxJDEvuhCyndSHVYhW2zMS3G4Sr4U8uK9k41b8ZbS6CTvATi6",
  "key20": "61dVUaRyVxCQ5bUpHinoq14yGUxT54evsLuabnQCU6BNpu1ZypCp5NRYoMYgUUJCzu9DqHFpAFxr2r3Phos6ufW2",
  "key21": "64MaQNXvaK34EVuS4vTQgPXXB4eAPmwLpwd1NfhbLPzonhCaRP1rUtnx2ASTW3JyKGh4aPxDFLcyFKp1ib9Trt3t",
  "key22": "31sM3kg1591VX3iZ91BSoJ8hCZysgg8mSEVWeVJmGDsnBEDhb9GAycShk5jBhyFZobq1xS2DFcCtYtGBnm7SFWM9",
  "key23": "3xNjUZZBoEX4AXNkjb4SbPVKZazyCpjP3F6apHFaVb9MakdTL26FEekRAnXTsnLDMZzi7af26YcSwvw7EZA8eEUn",
  "key24": "2KLH3jYw8B31DQmjc5SiNXBY2RAz4K6mycgqVppCsKyrFKUzqaRw3p7jZP8xgHBsW5Wr3ULDJQQcU3rCDGsdw5xH",
  "key25": "3v3e5AJgY7HnYRHDX2kyFxMjwc2WWW4APCLmgvBXdzSEVNxF34MvZqSwYKmE4Z9CSok8zfrAc5donrt2n9JCXezB",
  "key26": "2Vy56eTFsstXECSFZJsLGuDmjwHM43nZnHTXc1jDU9nZ5g1QvJdWosvRAa1PJk5bgRujcZHwr8V3z9zyL6hnE6hp",
  "key27": "5dRqsfNmhDk8UJe1uFZHP8DepovaLbYphXkb11tmsfWHWr5vQywQwRfdxaWwd8VA5stX7rzu1P98QZ1V8V8HdLuL",
  "key28": "dsi5oA6pfo9uKHgEGUZqpQ4UvwUYrWPdwXG534gCvCx28kk4LJaeT5NKhz5j96jpS25GjbRRh9K6rBK3LeuYG8a",
  "key29": "3qJAyiTFTimexsDxHromoGxLDV6wPD5zoq4mKADxFdjfQSNXHpgcPacXuNSTDkVDLafjt432cHV4KBsLQo1yp2hz",
  "key30": "2uDba3NqUsaxu84T2wVqnnNGcUU4ZHT5iH8uoQ4suuhsD1mvC7EjENjhkrwtVUECsHNw614LaX4kztRN2i28V2Va",
  "key31": "2RpMYSFGyb3dHPM9G4cRgqY2PFJed3uYZAxMv46dD4kpF6gHohFw3RwwWze8tcPsrCTbw67Hpi18Ga2jNYfngmDv",
  "key32": "ZfMnciJLhYzLUs8doXnHgqEeDadRLaAzKwgCLe6eqNf82CB3HF7dQqHALhMTEzHRPdUoVM4Tcc3bPmfUuyyxNkE",
  "key33": "4SWe7bRsKeuJ95HEJEsr6p7vQiyu7HihdvWiffnQdXAP9eim823xzpPJ83DC1AtNdcQ87mLk4889rJs1XnWCShuY",
  "key34": "4XEr68SoJ2esBUJnoP5wFmYBtZsEntsK69rz1CRPY5FpyFrPG2kyaYvRxkSRMHhKnvvVqRdxqBTVKSHa75AqAStx",
  "key35": "3ioLeVCUFedVqHzNYjNWhZQp82WfbsymyBFRKf6Lc7zzzh2ZZVJrUCyhoP8RQomPKcFrpCR4Z2B9YLpzDowqGH8U",
  "key36": "5ArP4qsqbHcBqcc94u3GXABgGaHJ1ft4bJwuU835apbwcYBsdruNrdqQwA3G9pmqHpcoVAwTZLph3EcGxUsxaoeS",
  "key37": "3Junz2FNcCZztaXwyJoG4zFFrfJ66fNhM4pijzBd4dZkbYbtgyz6gHox25efRwiDDkvSnX3V67jY16rDiEN1egyW",
  "key38": "3bnqMSGRpfpsiTaibecF5Jfpw2xTupR3fJg9ZFQUuXC5gbADBafxvo3RRLWXXicuAxwoDmpN5eyAdjQ5PLfXP9zo",
  "key39": "5dTvJSGABjhQ6Wava7LBbTSunGG7WNPA7acf7QcdeFP2NyLwUU8Cpv4HHpxC5FnvpiyuB3KeqdbFAypzuQkqHsT5",
  "key40": "3FV31UojH9yqd81kyR9YQ2eqkCUiW2KATNixUqeCpNhs39d8U49ifri78twctwfD5bRLGbZRt1j8pmzwSxjvYSfA",
  "key41": "3dPu9mx4rLp5kXyRqmTJMnSiwr9PijEAfkdNVLhyq4CJ7mgnDaJU1w6cyh9pJt83tZd6RUx3UvdC56CN1fvTqQnq",
  "key42": "3U1z1VSgsuRFz3iwPzBbsyKQESFvRhs65YkRLgkCevA8WMF6JaXXcG7moJTT1k9QtpRFtoUAndqzdyAWCviQGCye",
  "key43": "3VRX3D7JZSg2oSAmLsFe6poBLGkQK6tpiKW53oZuhHqtzPV1phCFo59nGR4u3WaVAhW3VDSPBV5caYe51wncZG9f",
  "key44": "5gk1ELBXT8dSMaM8cJwe5GFW97u7N4UJUzDa82ephRzQwdJzdrWhbii51kLUn3R6Dgixg83Pz1BfENAyKXopGC4C",
  "key45": "sCkoiKvqyCAiM8gFUwt1FYFDTZbseZbGTjVouPhht4xdSYgCbat364NW9hATbkq1im71vZfDKfBLzhraSnjpxEH"
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
