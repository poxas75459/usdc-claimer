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
    "4Za9JyMsNyUJ8JykpfksrdwrGC7HxShCVgh6pAnE1DcB3JvtURGYzUbPU5JVJeKNfyRLTHtGmtaipyd9pSCRZhxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VXrBK7FiAESVwiQtco4zZyKQV1yhbU8K7robQ7919XVsp8FgEE6krsnbD8ZsZ1W4xSi6FmviUkh2qmXmXrYm84x",
  "key1": "4AeQVAtVtfBvx32H1KjPseCTNDZiNKy88hWjCJ2jd3kNKPWBkVtWrUtxQqovCDGCNNGsCk2Wh1ybWDDtAGqg5Afp",
  "key2": "nDZ3AoncjcA4Zei8c6e3fxCBcAVBjfZLjbgbK1iiJfursLDByNjr5fcWo9XkehTb2LwhYmaghPtjJh9o9iCnVUV",
  "key3": "4HdYtLZA2TvKPRGxF5SoqayQND7z3XVfLqqFJ599LDFB2FGjh4NsQuD1kigTxTEjU2seQKyqBbMa57bk2YvZFZL1",
  "key4": "3SrW1GkV3JvXxwXa24HjGpegmrAkoEkZ69yMa1GzNsy8djgihxjBJ7V6HCGWVQW5gVzNuGZeKZFR7xtjLMgAYhBL",
  "key5": "2rmpwpyMaNsZjHBuy5TPWAeXps1YyeycW1W8f5PFmFR8UYrgtif4qW4CiMZQ6vK1cUcMi8449g6dYTBWeVurkHGA",
  "key6": "4t6112PbzJzj4415XJveisLEScL9fKvjdDA2WtrSuaFHo9eogjabVuqU67TYkxj68FKYd7mRLrZ99heRGAXh7jyW",
  "key7": "4y2BUzHNU5Kkd3jLuXuvrnK393otKutduwALSQSoHQATdLPmE3zZMXBa8pragGR7K48d8d5qNvwgrejR5TRPhD4a",
  "key8": "4sYJLCeo25XgZLEdBchs9NxxjJP7nLKv3vdd333TZp63q8dz7PCbVZMygfYZWTjw5ABpLwbfoaNQwxgi8b3RFoTt",
  "key9": "swu1ySf4zs16MeFJtSnffgSVRnawVnUdigL6jxfa6fehoYbCG3PC5fUJjRseAdtnW4EyYgt8T1PgF3J3Qaj6rAY",
  "key10": "hpUF6PdsSPELmdju2xn6FL5FBakg191y1XFWNyNPbiKdikHyn9DbfVcbsmEJZZkV8WAMxiWkuvEqtiNjcbe4frV",
  "key11": "2GCGJu5eazW7Gu8sbZF3EctVCe8gqphxaeZFw7j9XcAAF5YZpcLB3r8YWwfneHEHzGidseYmE3BJDSJNLT6f25Ya",
  "key12": "3qFZKSGdqtKAWLEiDiCALQT6DRkppzK9EXkdhFKhNmECKHssVm5fYmL7sStgibRoTh2VCfe8fkHWMKGfosiNEs8s",
  "key13": "3JHUxmoEq31Qw8qURwaPvRk4XW3nigCnUKzxN7utne8XTAe4P1k716Ku1HwFsSDQWCrU9oD18zBEKsqfk7nYUMbN",
  "key14": "5YnerS69tB7AW89rpDiPNiHASErG9YL6fu4EemDWZiaHtoMwQGpKXdHdb4QY4YD8vdP4srGsVkqcNBEaGghcYTSs",
  "key15": "3y8kuRNkm2BQSAMyztNYYLxDxrYQ9vtZS7JififSEWbW3aySGM8K7dBvBuHvJnXtwQar2ptS99LRD5Sukd7Ji2na",
  "key16": "5Ra5zeVUxUPE8tpYPTssHe9iZNET4nah6yUcPhnk3udMvf7kZsnQvf6nSFEoqmd6AoQLgLkMDi6r3BiLj6xGMi8U",
  "key17": "m6VwvAPB13WaexE32FmBLmLcKFN2pZy867tRCR9i1G2Y4nUfpv9VnCFAtPT2qFQRQf7eUe9K2KWpyHqYxmKF92u",
  "key18": "sxsxqM3ddGBYbKrkN8tfhsoRCwkD5MKKHpX27NtharKvP4P9S6GaADJEvqLTe8MzR8LavkHBtgEU52ZpgfhVZK3",
  "key19": "2sWdJLhYydFksaUVDefa2T3LdkVz926zBzmLc6WYTrWsXR38XFo8iLsYmzg9NTQEgUYLM3eFrE2eUWg1JU1aLxDZ",
  "key20": "5Dahi1VMpCgiAKqoG8wBKoCwEEnipj4SYG5wxbJuVqFnbfPy81utxtKK6qrSAW9LU12tDuuAGemtfVxPN3xyAY24",
  "key21": "4v9X5uDpnFLBECAq7br44YNojH9oLBYcfcmskPQRQLMQMDnZQJaKgKpZhhxWKfDRqR2YURQxceETARhXFqxRFjfK",
  "key22": "5h8jwS9K8iVPuhLAxjjm5MV4maqPchWnKB6rTJRd3KQuV1CdB3QNcejjUm4J7N7GytzHU3foSrKUGTkKSGQjWZGP",
  "key23": "3gUsJMtbqw9XkSozd18AHKhPcdMV1VPHADr8eBTLXCNuTJkGmrNvdWA1JQETC3dkWoavGppfHRCgnFexu6hWsqgf",
  "key24": "52nZXci1cBfMDERR6vfBDEDP3xpi8SLhTMJHsizH7LNQWQT3uwiVfMiNcUPsV4HzwKdV3G1dquCGRh3TDgdFtjWw",
  "key25": "2gY5iPrVA1JPtsS4ugTFHvhi6aXLgWJi3s3bZCxFrxebFcfEj7PuWvuyvb1BHUXwoSsNJji6QByEywwnURSVTQRR",
  "key26": "2omRs7hY3Rqnx92eibBPJiZp8Hz6jAxnsQUihNPrDeJEudpBe1n327KH2p4UkYHZULVvtAmCt98s9vbV1CPJKM2W",
  "key27": "5dQsEfQDviTs2m13AZYy1cc8yJ2YNHh6G8nhthauYANZFNKNNbCmar9RA21duj4bpV5awXzQcmifZBrRJeE2BVJk",
  "key28": "eTmU2LYmucHxpXpUDrLLjfGmZkJ1J645cmovwaJExZDQXucwatqXvoB8otnPALcdp5EBsSgT45LP9qqTW7WXymp",
  "key29": "5pF7enyopmPVjjdK5USjKcNtayv13vHfD3p2BdJwTTQbbXLBbC2VoBVLQ1H4QPHWkUpfRmpjHLkS8Hmf2KgGyAhF",
  "key30": "4VQLmq1vCSVBGUnYsZVqJ9ck4rVYdFVujdiWMTZCC541P8Nvw2BLi1EZUpvj57mG3fQpyKEHpcXyNy7ajBUqsU1m",
  "key31": "2fS6c7bho6psC8U3DmxH7h27sgXUVWpaHTaAgvouQf4jnbDqH8L4SmExdUMnvMiVsBT5bUK2tFYzTWYjDEddC7W5",
  "key32": "3oCtv3U8iSWxUbXHEcbaGvVjC5F9pVWVp9miDPnZTibxGCppgPDCtrZcDcZTTnRUrnJ1kmZWMYPNeQa6U2BD2Hip",
  "key33": "2yscST4KypMNcRf5sP8NyVyE3HoEssQrTPGrzJMVefEEHQRBEGyrniAxdiSAxgFeEVQXb7p4pN4svjF726FCSckX",
  "key34": "2B4GyHvxtePUxqT2F6tZLvWZU5gKRtoTZptbEb13s3QVR44fvaXc4Z2QkEN69HDniUkWCwtgqY3urX8RZVF2i8Dk",
  "key35": "eXNwxUGWPmMjjFQCb31Ayqw4kr8LfwxgM1ggTvepSP22j6xRGKb3yxfm6TFAVgXhKzWv7yzCVwXsWQHbws8PdLt",
  "key36": "7XVqi38wKeuXuXvpdUAZ28LPzxa2m3gRPFPxV5fwYGB3MgDEvWFXQBgKs3x2hZTy4Y72KFD1puu4gfMAb9A7gdZ",
  "key37": "3KPXZNF45uk8DAZRXDp12HEXhEcHSyfWVZZ2CCrvFEBjUQv5oJewUu1q9RUhQgp9fqgYoiCyZtpFSYMeYiSVpM8g",
  "key38": "2z6XRrZm2rZK7RxMHxKoQgU7YZ4T1npDkHVyP7FQzp3TGGw9QD9ssyRLefp6CZtDEGmGHKY2E3ACK74a55B9k9sN",
  "key39": "58hJzgwjiV9X8nwXRkGpiJdyLqvvxbFiCRoRHF99LEcnEiTX1AANW62gLuoYdno7nHwBjPvhVG7xttWUQBYKkWif",
  "key40": "3T1bQwEY6RwZYdyA3p49y9xo5stYJskXewfqfsymF3TGjEsMnGTHsbrrWL4W5h4soH4gs5c1jqr95oAqTUEmEF8J",
  "key41": "2t9j1L7q4EWSwcNdxGNWmZfLurzUAYY1hD1nbEKZ33bmTQsiEgSiKU3YvFpaqwyjxmPf4z5mJFNtF1EAxFUvMM74",
  "key42": "4UPtSE7Wrn7CxNskDPDiCS2SZ1QzYd52PN5X7ktMwWwo9MRkssFuPDpVJwirdsGUbkhjhmb7F5DgzEDqZ2zMSKzu"
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
