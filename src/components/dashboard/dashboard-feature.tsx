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
    "2fcR6pYRjqBufQ2qEsPNgdFhsy9axuTWP23XpEq8DGLhtg9MqqXABS99pVDLpqjJvvw36Zy5F2pinvfxGtuNeuV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GnBLSDuEmica5YJgQ36aeAFspn4Z16Vkczeq2KkGVzgsAVx5GR5tZcPH9sddJWAPBM1QUbswEvbkhQYRWBcB4n1",
  "key1": "25Qk62JKiCCcJxZR6XmWkH3WFWQYiqaihZyiHf48fyxxbXrznig2GAgeJcRkuyL2gCoFW5osqqS7W9hY3vFQAGLy",
  "key2": "bJWAZaYf3FbLC3qhEgCX7tmaJLN3mvb8FcjNN5xvdQRDU8ndeousY7spYfavHDbFdekM4dFwoAVZWSHZssaZ8HQ",
  "key3": "3ZNS7hWhwusFCp7ESqys9HWeZ2yHQUt6E3DpF3Gu54hRFdJdwpHJF6iVot8oq32STsDJyqjyS3MaizKUw9NnwukL",
  "key4": "5vrfChY7DaNYDpxFHake1dkSUvU9SLT389vnTSDjg57EGbXvjscnAaH5irMaw2Zno8g9bukzvyYGvxGC63kLsPLL",
  "key5": "5CA9B1sxqTieXmk5XQb3vvkFHgTfZfXHqRGPL9bTsqM7D1w8jaRtxMyVSjQRT8HsbHgoqmu8Rj8JaWcxCrQTD6cF",
  "key6": "S1qHGpALohfSRdxsN33geVNerXJfExhbBZBbFe6thv6PV7c3WypCPJZcfBzRLaW7FRtoyEoZkkK9VQrdK6n6QG6",
  "key7": "4AoEQfQ9JX1ttkekfYjY2EkNrjEEQ6BgN2kWuUvcut52fYSWLSedz9ZjKGhPnu21L9Dw9hZQppoD36oD7gHmT26e",
  "key8": "55mEUNVSeSEA6N7yxMh1J9cYfqgoTEwTW2zMY59mgoSaf4yitLKGZrYjSkftjwCrd3MfddRtZufn8q1tfWQ2YNTs",
  "key9": "2a5hiJZZAAJXNWVW1xnAjy8TEBnJqFRNmpEs5MJr7aj7mDmWX3rBwrCkRNLTri4NqHw7zwSkYPwPezMRZHrtas3D",
  "key10": "pHucMoMCdbCqJ5NfnPty99rTMTSF9VWaaKrtwWJhmDqG3aWzCk4HKevmeuUqFn58A5Tyr28vd4YNJm2z5yyzbkA",
  "key11": "2zjB2mJKywfEYcXBxEuGNMtqRwr699fUYgk51QijLAbmkC9kwKK2Z82oMGvVgvFAGwX36nKyE7QjZB2NQiNCm61D",
  "key12": "3Lb5xcUkkzNCto3zXi6vDH1crKuu6noxxvy6LqBy1HbDzk7VP8DGkHSvYFrGCnDEjejeR2QRi1GhnzZ3FKUDiAyY",
  "key13": "AMcr9gVun7M7c6zkEafnHmxEJdg5HefMyGkLHbVXg2j5dUgzFmHFtddsEirM9yPbHg9GeMC776vPHPGgDHsTtMC",
  "key14": "9diGyWu6RcXQxboUEn2Vdxh3dcmVP2jz2DKqHdZgJq7MmUwJNpsPbgYQoFfpLw31fNPatfFfywAj8BsVqYqS8eY",
  "key15": "oz7daX11HJQKVoMi89rT3jsYFZ8hAeVwgWmf2kMjF3qKxcJNKh7SaHYbj9qq9k7UBE4UFwELzy6bDagghnq1PHj",
  "key16": "cY4CcFK93etv3bJcGQFA447h8uZQkBbnpFYPiGmfAkZYK3dyCU1EDFso4bAG7XmChLtJ1qEZn6BEo6Qc4BCNa2r",
  "key17": "q8tZjy1W2SDG1YD5oUXZZj3hFH3MMoay1ukHBUbdCtoinsegZvuYZRSYXnuuatYpoAi7LPbNHbTZeEtEG2zJ9y1",
  "key18": "4xuXqL9LpHSTUfquvavd8ooSpgeqt5JAWQrSYNEyQzRqu5ZaCVvtWytUhJVx8PzFwmWWvDU9o5SBjqqUGfgC9Qzz",
  "key19": "4jBTNMbm6EBXJpTWyqSoiKhCNrQ7NcwpcsHqrSnHmXhd2MJ2bEF4dLNDP22uK6EuYPbCJGkSVpYKGVjXBaA1FzUb",
  "key20": "2E49mKw61RUnKCGWb1AT5TDp2wK7xptcm4jHXxLDAHfwYG7hxfJQqF6RnRRoPSkZSSxeph6SpdRDtohWofcUbeNL",
  "key21": "WbvtZfdrwHLkzoe9x5tPi6MemTFExzjyqfbD9UjMnfJrKypBkh4B3ycDnHzcrDifxyCsGQEahVoCmVXhTpNJjFy",
  "key22": "5woXdHhHiibh66QWyaWW2PQmPBDXt8dDx3RcceEyTU28Kxi5cg2g52eivE5VDSf6jzNvupYt1ZM2fuLH2mgbhs5a",
  "key23": "4tTgp9MSnugjobaKGxwGgaGFZdFsJv8NppKZejaVLAuV5MDiZXPU6JdTvm2YBH6PoQyPUR58jeT3bMd6nrLhDxpt",
  "key24": "2VzboCipc91x3T8jeUnxfcefon6rfsmNRXLCYpJYpE2dCen3vRgsSdUomQpnqeiYidseDiuFbeU9pXGj29opGRM6",
  "key25": "2iWsT8LhNLQtdM9i38ZeKnh4s8ponYEEtCUyf32qP31fDjxYY7brtKwBsefi1m42aSRPeimR8PbJSFepfgx24i4f",
  "key26": "3aK6zpZmK9LqdT1onNrNFQiWHNWzZJCYULP44Bx2MnyrCwrb69xhapboH3Kt4Ps2rWwY5yBcXqrd1CQEMvixfQXB",
  "key27": "YXCHqSeSSim32mCwxKr3cjNyzqhkyfNqsY8pkxqFitGRijJY1PHfVqGy6c3hxUaS1ZoQGQ4h6EXKjF7JptYwvXB",
  "key28": "3UHeyk7RvxqX1vWRJDfWrT26835sjNwZquGHcXRbaQCnP6njkzEytVEi333DfFSLMbThzYbQXcXEnud6KFsVaTty",
  "key29": "29wE5cYZSpDejMLDTsVakrot7j3yVDs3utyo5tkgkkBS13MtHcfVWwyoPGm6xwubgtHcw5AFYaYrJJapurqyoXN6",
  "key30": "2rap6bQ8UGCyykUM29RWXPNaHU7bvfW2WM2AsykRBg9CZUZZdprRdXES2ofRPNcA1FydbMFaEPVXkM3bK5owt5hT",
  "key31": "55Wq69rihFvaVWfRDzoDUVWrSW4tc3R9PJwiBSr8p2kcntik7UrbStREPjzUGz88N4jvjaPU2ejF5TuDGRV7Skjz",
  "key32": "3QizrEPQjYPxsheLsSvZXQePNHsbvEiJiwZax63BojfcCVmFzZx71kNTXwQaEjXoUUFKk3WWGCDRyMPRsj6yM5Cg",
  "key33": "pZNqsDALU8EiW2toEMh4bgzzx3xv1kEjpdhywQ8cGacbH8Es8CZBHzvLZ6sb1tDRPFCcYYwadwxQgkYYYc6BY2F",
  "key34": "5iEz1FztsNk38xsXWZYQXwJM2khGN6NwR3xfBsqzzmutF7Pj5QLBj5awjh4amshTJfdwEsDqfMZFpnVh4Z7t5aCv"
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
