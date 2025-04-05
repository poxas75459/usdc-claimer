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
    "23a4KYHfCs2C1eTYKbeyU6aJSF8yMUdamooFeqQxyY8sVbw27T9zUaqNZfM62QKNJSRaVDb3nBRt71R3HQPRBUib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vhZMhwqdyQbPt3B9jJoF4vZauFESYdAmVooKSMqCbidVVnzgG6WrH8o7L8LSnSWucppSNnRDtdknUJzDWY1E8yf",
  "key1": "HZMaigfkenRkEMpsS2iuHcMLG8ghjAe6VV6ZJdsdwTPFVSDAtx5DSf8RDtQznEKdj5HSK31HqdHvsqC5VU4iUHq",
  "key2": "4UVExodHkqWDw8h4hKuYb1jfnXZswn997fYV5Lz8kygq9pmda1ZqT9peCFrAmyt6CyL9Sf4oW3dLk8rg4NMvWqrB",
  "key3": "4ujDE3F9xhAFerbvm8cxzptCuUQZEJdd3gAAuXNoKJGsPKFp1cWvvWADDfAHRwFfpSCsxfNtGAro6mw79WADzc35",
  "key4": "3dTZR4JVQr6xpC427G8xvcvLRMo7BdaBXmZH23eVdYuTeX1nwBanyxC9WmXUfx5xEDjzqeW8zfQto6gywjwC3hEq",
  "key5": "5BikLMFrGS7J7hgSLiJWrBvbiWS5RyqYYY47hvBGgJ1i5WL2iRyAB4YGcUmspSxkmv1as5wLwDHod86HcrtS7vcV",
  "key6": "LxLFmShTuXWaJadnahXmyXSKytB8xTGjgUbxQ8RRDS8NAhPZG7KNgSNEv1Q5ECo8in3afepKWTSvFgArTSpVhpv",
  "key7": "4hZc2e6CEXjWfq7EQJkcr5AkGe7Lgiypy5hrEQb4qYxQxiprf1b27JyAEHkU8dz9cRE1eDQDEw8jzpw9u9emcMtM",
  "key8": "65PqhbJoyNAQAMB75iDexGkGiwb51NJJpDqurmpUJEjtt5wTS6Uz2yphfKhYX8H5wPsBQG8M27nc8HBH5k1wALpk",
  "key9": "jWZzjQu6jjNgMdeNE5L7vmw7ZuK47fgrebJYN2yQwGC4no7twLm37NTo7w7C3LFFehtrmTzm7KEFJL3fA8zQpWx",
  "key10": "MfnT7Vx7bMHqrm4GhaPSFnHpUTxq8on7s6cbNKBsC8DhUs1Fz6ptRVBhtnrF1bpBG73XUNKvi2nCRhfVbyoEMDr",
  "key11": "VBcnmHvj8PZUV2vW5QVmvzWK1LYL9kVNPWexbLYpMY9f1E3Gc2B1rQxcnPkdNbC41AKkW13h1TQ38RUTySBs55C",
  "key12": "pgHGbFruaxxdsriW3p4Mq1DcNDnko4tELwxxiPn2D4RzkKuQAGJi2QVNaYB5fQCvPaLdMrGX1596uPB138A5VUj",
  "key13": "2gUNfa4R9QuwjN5cDPXJQZNUqayWP2dyVfz6ajsNpGVb8wwuqDW8ozfohGoYgrP5LtFjrDRXYzy81rpTCaHJ3qLe",
  "key14": "3zz2kHn8cPz5V6V3C81trvYGZqPqkVrQvVnSeRPDowy8BHPnFRM3BKJMzTx3wfxQte2dby3DExwX94SmFvAyVA41",
  "key15": "55JiFse6w2jcZJQzdCRPjM15SkDpVX8gq1za37ztFAZQKFAd1hJjyA1HZAF2QAEbX5ugRGFG1Up9YmMAXLkdZQTH",
  "key16": "3cFzXZ7wY46jBLRC3rAw3U3PCn8UmsYLFYeeTjRyN9S2Mhtnwezjtu2xF25nrq6dDHcwf8vpiZsfsPdCK1Rd2Y6h",
  "key17": "2hyaq4HLTp2brqLN5A3mGvuFSmUEiMaxvfT5Dfp7FYudCuRgt9hB1gW3CyEdWjFTpLpo13gyz88rQLnhR8gfEi4M",
  "key18": "57GLPtarS5NKyQsRvufx7LfBJrntrQJKJsJaxzGjB4dSN7McUjcgMgc1bU4CQxk3eYUvZ9Wo5mRFPphjnQJPYB9e",
  "key19": "g4Z3cHRrUFq6Jz7fofiNpmiwG4aL91tmyM52iNbroPXB6sH9yG33FhkzD4rL2qbckyY9u64Xa2t8QGNRZZihCCM",
  "key20": "Lr6tYrWjnzykYhK4pnkMeaUtaZtUBfx1UbXkDKfpbXyUc3WePP3E4d12qNoHtFBeWy7owAdQqNH1Dww4DnXVHMd",
  "key21": "o5AQEqthsBDaaCEHtvxndqJEoWfLPzDpU5XPhJtBCQSWdmz51YSexsaEVHrSXJk4E4AvAXioPizGCaHQdSVMzyZ",
  "key22": "364B9z2W4boF8x2mHcK1XmVDftwFDsfVdHoU9kJA88ixoBu37zXxV2criRLkZJvMZCHskV8b3RG9sLyk33kPUUc5",
  "key23": "5itRgsEgjJktJ6p7Zk52YnmVBhBaxdFo3zSSNdqZb95McUNSQQno2DPhzqdZnUHAbNwrWYxWM6wJPLSC48hZtext",
  "key24": "fjd7K495ZoRVbkyToDqPyKUjfMYC2kM8wzexhHvmhCu2m3wbpZcWRZUPUrbT3hohkZiXQXqdbTksuiHSMaJHZJo",
  "key25": "3HbuMJKheCmW7sU7R3hWHbLoaG81PVf9uWGecjdqcxUuyjyYX7u714kUBMMgSBS6CkZU1F4ya2aX6ssDFNUKMZ4r"
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
