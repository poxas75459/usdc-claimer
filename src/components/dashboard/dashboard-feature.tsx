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
    "63KZw2pbaxGFVMAmC4wcjH4fBG7qShwRpkLQ2oS5zEdSH5NKqVxMCRGMRkJEkBvLaTV7M24FtmF43BMCZ5NU2u7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y7SL14n4D32fwawQiUEM7cHPtE2dz88EvZeTa1PgNJtxTTgekaWkQkC9gkcxfw5SRFnqy2wf1ynkMMMJve11dzT",
  "key1": "2RiQSbq4vB24imWFtff9H4oJkZ5QAojfLa45cjGKBeJbPGSXHpC5YCZJ8K4EyEf22jGQ13oMiTN1gXGpZMfGt8cy",
  "key2": "5i6qxzDXw7X3MhiCGn6B3yoPmzXRuRCp2sLE8YpMCMvSgLyYpQNLysan7wMERW619Mte43VWx6HJa8nTZjTrgFvd",
  "key3": "4KVXppHdSSUyXYLYV5GrRdcEQ6WzRqF2CTb73jZNF4QnTdsZd12P4HHkZdGj518gPvJacT96E1DEijc18JLGGmRn",
  "key4": "e7LZz23Dvw2QMcP9MQ6Wri5rx41dFjGVWsBFrZL8NBDFdMyQWsmYYvMNPkcEqVGcfvTKKV4imFPaR3rtkFiBzJH",
  "key5": "4eTDSvZVZAYjUFDGkGQgkhUUtJyb5wiGNWBDHhYgWxz8TZeGooBghEKqxRXHSonifufZNEWpRezTW9atx7fF6Ra3",
  "key6": "J7UW4MQ6P7RDa1Ly4qDACgRyEKhSSYvepUmR8mPfVATUTBhZRMzajt6oAM9BU8UH8zcNarRxFH7ivYJQ9xfJdUn",
  "key7": "674z4sVUczaiwmtU4yQbAVc228SpCdBt61aZ87gjn9D7e7pPMGq6Z687npSprN72zQZhdjMCspBV7TUUHPxJMn5y",
  "key8": "4Ub7vaWUkXVpb9mT62cjrrxTDL5fmYbY2r6Z1vEXZy6TkvunsfukCSLCumAGmuBLF6g4LW6SJhVZ8dvdFoMuPdUA",
  "key9": "3pNTiKpD67iWw2JJttMgCAQxRJ52nuZ4Jfkd5im4mCsPB9Q1QHvbhoLmxW8dKj3HR9BHWpv2BZD6oKihP4k87SvZ",
  "key10": "3Yj2KqzD4pRWeexUotkpimmX2wzxNj5JMKP9CScznzrtZwbtdtcu7vmxT1ZNQYk8PUYt4QMdHw5B97Hr1KMirJaQ",
  "key11": "4prVcfZQrYQ6kDJaULMHE5bcRVmegAT2h8Ahygte4oeWHjgSevuWKgdB9DgAPDtyNmJDwPTpYV51BNDm6Ef9dJkw",
  "key12": "2bm1SaRoHHzxrN5RZ1eDYGhJHv4yUjvZ9u4PKFBjdp5WZ7vm2Afexnkt8ncgBmCJrWom8zBwTj44wrNvGpXCs2qi",
  "key13": "63z33qCcmhTAHpV4rrod5FVZGE5FnBJUVgiu52tTU6ffRn4x1uYKwZAArzLUjXV5B8chKHZJ8ics9iRPvR6pEeww",
  "key14": "65irjKUWaVkEMjRbTEW3WVv4eK4FancsCZApGhnPABzTokoZJns8pCq5fFecxw1yvfMCv2h9zJNGJEKPzjPGB8oW",
  "key15": "3kczBSa41oqZrVa2pF6UYjcP8yRcAnnFRxnDSGp4qsJ7SyD7333FdLN68K6KTFtdD1DMhZeLYNDfRbgdkJLMyBfs",
  "key16": "HYzijGMoFuhV7kTL11tcpkdtVA2WoGwLsGmjd63YETn1xhPhxJLaw41EeV6ch4wVybsWTGvFzcHXNHAgJpieL4e",
  "key17": "29jfELNCHNdEd7XrpYsHjrxsbFwtMhyWf8jRW7hJx9PBoLqG7gDdagpQWGeNrCZX2ZLKD3RpdFDG9XQUzqm9vPAu",
  "key18": "2FuwpYVymwADAWWxrEPbo4Hz2HNa8ptr8vreTdNjyh9Kzq3dTubhk4mdHsz739vq64fnj9vrivKC4hFmyFQFptoz",
  "key19": "4sPf9bnfqpUwZan1bGwq7cfkeDoV5twVvMtyJsnNCsVcuohSCVbM9qNwpB7LidT9w61ra7Z7EW4bUP1Tm5zWg3c7",
  "key20": "5doEGTMZs5nnBu3T2ksHsvLBA1xEZJYGqqLuTzq3XoXaqJoCyNtARCo3rsw1k8rJfGLF3FhVucKGgRVLxpNFaj3g",
  "key21": "51vzVAkWTqjzfdcQjyHiGE7dTG36qXiXQfGtMGh9thk6tG8SUCvXLuTwLMC7iLKdHyDiN7DnWxiQqSqYwgqrLBfr",
  "key22": "2y1Dssp4QJFfMu4F9f5QX2XmZJeuGWm2zJEzto6CTFZjD1HVPMinAGT6B5BCE4hXxdEAZQqX8qhXy16WjPW9j6Jz",
  "key23": "2bsjVr4siNhr7r2KLJfQHGB3xgJ7cM6DrksCmvH8b7aPGr9MayTE3Zi7mp2r38xxUKC5JKkW7hPaTz1reFraXh5t",
  "key24": "Mzhyz56X4SF1sXZ4KNv1es2PRNcx6xenP8eD4Han3E7dciAbQzqThm1k4jk6UFrz9wfKRE8HJ8NCQaun1Va4NqS"
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
