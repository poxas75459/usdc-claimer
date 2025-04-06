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
    "3zbTwz4xBoa7ihSWuAY6z2tqCyrDexYCMKavMinR2aHje1cpNHvEwtvYFXQfB1tswfeRW2YNoNfTzZ1bhBCeFein"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4srKSfrt1UrobYQ4UXsxUQafkSggcVnNXFYN5KMUqJ1NAvbch598m6gWCJ1jHUpRNg3ZNgFV2k1t32vhSwdSJS5r",
  "key1": "46pe66hVqSnFu1vbogHxtrSfKGiL2ecdzcUUfuE7jqUJWZGVM6Q8XdNonPaP2STPqwiPeQqJc2zmGytM6GAKPV7z",
  "key2": "4ExWRj94pBFUKSnkdrex7be1XY5QRELhUQDC43TbP43qvqn9GwBBAsoD7EuRA5cn2qXYMwxAT2YUsuVXgN9Y3WDe",
  "key3": "5jxxEkKLBuo8S2vv7A6z6T2WBkph8MDKQGxC13ky41wBYAheN5L81YKNWS4h9x9LTq9myVTNwVqtKi9T8Kdg94SN",
  "key4": "2bHcvXKN9kj7t2Yvpm4sBGjnUWZvhdXndSqL6pNin8LCZTWVHyUwjhkCEufsNhzRCxGkk5VHS3BKCvJKiWN6N9s3",
  "key5": "2ghYWSAgXi5J5H2wQhgPZtqGre2Um6XraQYJT1A2rdqS3dL2qAjyxdqRTjsoqvT9HqR5YDT2BvCPb7STDwnjBPkC",
  "key6": "4rhWYLCHYPmjunmgbxKRnegy6tyjNTqtx6fQit1RxeSjjEi54opkjkdXCifx1dTsiz3b8t4V5iUkmT2ihoFGRnG9",
  "key7": "2JaMrgM4yjtRoPYJN7u2PKzXzinXLfTmRRFkomhBMvwvAQUvcswWa4p1vzZDdNamyBDeCxzzfqsx28euFofA7y3d",
  "key8": "4WfF1frN4FTqwwGeJKS69NzcLToP6M3bVjsbiLs5wyFTfJ9U3tB4uEiiKAaFFZGm1yYdjP9gXXs4FzvNk319nCGr",
  "key9": "3321JZffkK89RV3m4U4jAUJTNJVc6DUoX1NHMtZWXJ49esSSJG4PLMHJaCiPp7nu4GZ4ugym5upTMZf21xa58nqZ",
  "key10": "nPAPy6jzEPQsmV8FBqJacnic1wGhBJKQ4g22Ke6KKMxq55trwPbRN2YaTf8fAXRHrrwYaRPUN5XVR2Nxi7p4GS8",
  "key11": "qsucQVD2tLximEPe2snNZ1k6C51Wk556iJPBeHNmAJu3oJSiYwg6yh87eAez23U97QLHQSH3Xx2yMH4cGwVsmXz",
  "key12": "526kxs4Lmr52wiwq6nbhvquhJWKk13Kcs3SoVQHnSMWW8r5HXHVY4FAc9R9v8j1cYP7RtsHAKhtgUJawbb4ttTRM",
  "key13": "X6DpsqALSTogbCLPb5mMm2hYUKLZndkWUJKXjLDzucurfjc2LsM46vathKQJ5kx8bcW6cGffEeWwZhgzMjcjnNr",
  "key14": "3fcwDZ2cejyTHLm4ubDpQbbdzbqMp4BgUpG2cjn9bYoxJ1sRiXEE95zpHFNd9MgdVRPFR9j7P1SspVCkp57wXtxz",
  "key15": "25rsJQ34mYdkSkUrvxM3pMBT3PaCZitBwr4VgssVRzJ8oLEjava4YGH51JE1St8oj5DEdU8sSfRHHmjUfRd8f3Q9",
  "key16": "22FcNZqQvNum9CrGJBEjhbqVMPCGxqZjfC4QhDGvR69RCXqtW77wmgnA7r1gwpqbuC5TaNFbxLVeNFx5SgsJRy55",
  "key17": "3ke7iNcX8zKXQQcBSuBZkczS3yPY9tndxRk79v7umHfRMKhjs3GCnGNWytGF9H5qu4FqCFyoRKkgoPq3xH5yyajD",
  "key18": "G3M8HVTJjMqZvaDdEMA4w6N1eLyuH91kvwdQxnjdLVdGLLrAXbN5smZLi2L7AKspHA1tgemzGFHso9ZZTWK7SN9",
  "key19": "5AsKXrNb8ZmYUptRKePpHPySegLugTP9cTYvV1F8FLdUVM87LUuVYbrwD5KDZ4TSMqsXmaips3UJZWbtgavnCTse",
  "key20": "48umpKbDExuVurbQWeYvicf6e9u6NaowzMnWqg72cKDBLDYBjxVsFFqjqtY3g3qThZDbdmF5KjLUPPNcMmmA7JDE",
  "key21": "38ymjuvVtdonW7TaLbghgs7E5uNVhqYoDcV8u9B4jqCGd9pXzpoCWStm76Uq2iLZFAF3tDH7szQR31BamToY4XF8",
  "key22": "2ztQAjUgpY2rMqYYFDxB3S3HXayrki79oaYi8BVkygEXqBiyMSheYXGTNJUSxwWN97Shx3w9pNcQx9nVkJKJ2yiw",
  "key23": "4pKXnkWtfUkV5Bbs55fX8pusApywpWmRNR8zPxXsfkaoMttAutyRuHVwrDXkP3JRDAmN7mvZCjAcuetiaEcumyEi",
  "key24": "2CBxigqcTcv8XZ7HT29duipW2Ff3dMaTFkVftNRpUHZFUSyoGWL4mahgGt39m3sxxFXAPsZ8TZcUj51pEkv4iQSJ",
  "key25": "4iF42k7cmEzUBLSAGZekePfjYtzphUbz8aakszCAKrnZJEA6j4kGurfxsEa18mRCtjGDtxKEnE8NqnAogJwU86kr",
  "key26": "2b4sMFUzEFFmUWB2FNku7cWVmZFHExwYVssFhj1Lkq6ca6fRj8DwTPwUNETJtzWKUMakDpKqQH5ZPmJCd6y3RY8T"
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
