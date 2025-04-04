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
    "FAEkJ1Dwky6GTq5fmyA9KzaBC3wHW9AyWoEqKwdSf9dHSsDNBC7fJ8X48rc7q741UVTkaawKJJZgAFyw24qaLED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LXCyySPCp1Vt669Zznv6vKY364rVexcPYv74JE31qgQx3n36KkCVJ7PaU6WyZdgZBuCStb22AP9BQZvbhbdv9SU",
  "key1": "2GHTRDDNQU7kcCtZvpoRSz9jur6AJCsduiK59dBDwAARLEykiQTbz3JCDxWuizdQ19JLopVgCREVjQwF6g7K4C6j",
  "key2": "4pq82fRbDdhhPjfNTczkFM7whfAFpyGvvWWM2BFpC4jKkcpVMYSDhDH3SZ7Jc34ZAhbnqtPgT8YUYDypdy4pJHh5",
  "key3": "2exE4j2KZAEyY23uEU5gcY9i5yioVRH5ZPAtY1hzY3wjP9bQJQ2L1DxshqVH2PNrGV89jKD4uToHSY4TyTWCkhYE",
  "key4": "46M5kvuNHNKxrNdhXd7SKcQwUBq7irvZBwfYViVcyCY9Q7WMSCctdz9am44QpHx1ezJQhAph8aUa2D79ACeJdqSe",
  "key5": "38MX7CZB4Bv4GSnpwpHvpgBCuPdB785oQzHprvioNV1iJgaven4rhdqgW8kVFuVxEPnuxKkykGvdYutnBHjruRNV",
  "key6": "3QTfHunbxezY4HxfZQZQ4c42JqarULU8bpjTkokavjmhzJ67Tp6yZTbbLGLgQS1p5hspBFHDdoFrbQxHpYL3oZAL",
  "key7": "3snhBys4cuZeFUGeqo54CWj9Be5towdX1aCUYicpkYsmECTo6UAjDWQ9WxeBRyQ8Qf6XydmVhKi7BT9LY7HYNw5f",
  "key8": "qYQ3vZJoPdHAUy6keYqT4zxTE2VCCZfBoVtL8hMboZ5KmfR5G7taXA2Qi9mPws3369cAgpYT926Nopp5qQsF2Bv",
  "key9": "NMe5AapnUsUnZPR4h2Km8ARy7Noo9tk96oHaQiNjp2PqRBqtS3jkYbWNZVvA2E7AnqbHx6LstcNXCCj7mwxEYeo",
  "key10": "3nJ4woWUeZVypdyVsVtgwQps9UmXx2fHNviynoDJiwTAjS6DCsHAA2kmdVbkTdR657wPJ6sR4B5Mpd8k9hJfcCoN",
  "key11": "3tb7AYqTSk94vuuwDMcKs8NEie5XfhsPLQscNVseUMBWwUQtj8qKYDFxvX1dZ9S7ms7VBp2Zah7MDQ6k7ioXs3QN",
  "key12": "3evi671osdEuL8bZVRcBnRAqHY1wByLKFFL2GK3n4i1hMF1hFBFyVkHUJoGpQnkNRcDgPNHp4yt9TopXTTy287a6",
  "key13": "56muTcnyw9R7rgYVTFHQuKQaJMbrQLJrZbi3j6yY9KuK84MHMWvoBgKKKuqmXYPTq3AR18G1ZUF2VjauDQiyKxHH",
  "key14": "3H4HJX76hwtgmu3ZEM7kuBXWvn96QZr796KxWuK1aNXSfEnFDWPBdt3s3J2AmRED5cZNtjWkPnotXNw67D5Gokb9",
  "key15": "42Dkejcb49SBNfc6XqcnH12K1AvRdBkmLuM93w7QY83n6Stz6ztY3Fb2Up9T3XLsBYEZ79i4yYFdmgb1aPZJSCpD",
  "key16": "5Bfe4RCQVycGPA7c3H4hLAtZqsxVbYcYsYDEEVEW7zWUgLEJFM5ekwhtaGWdV4LJSEepTdjGCvBnLGCZ8L2kPYGP",
  "key17": "3xpT2D3nuNf8MeVFmsfFZQxkWwpr64CWk7Bqq7pLEk25pChJPUNosbQZiH9fereXfh95oYWvpX1T1mrYZvoj8pKz",
  "key18": "5gwkvRpjnjMVMn2kDZm5BHHXPBUivPXE4XBwCXbHeNikXFoYPKTBaFk2TTzp6MsmQxzgozr4hCnaRNnxRZDy3gBW",
  "key19": "65PuoHBv3Mbyxkva95GRfHhwyFWaTDKEFvcHuUevWL4m9Jt7E3u98asnN9yhdBikUL7MfdYoHfzA2YtBqxrehYUM",
  "key20": "kJSW1TKQSAEXwXg4x66jh8YuB3beeHpbsiFvjyKbXU28UXUex8etejXsBkafDeP2GkKwER4rtwE5AFQ2eZ6HiKG",
  "key21": "G3pCM4txxqTHYTP6efeUhCK2DJDtaRpzoNdaQyqnfeeZqMeb6H22ND8d74vnPdhe5xusUVvYx3csh7YChkZRyET",
  "key22": "LfNYGQaRmaQ8GNvb53zSkxxY7BoWmykCqeAD3uC42yvREii8F8NTKcYfAjgGroNZbKwNKuTShPQb9pGPHVMkbQt",
  "key23": "tAgE9YSzNjHFhysqFz4uTtELnhXouGSjxbe5e7VFniHKXP6GZuthk7kY5qrKjpmyb5nfZVadvYXy9e4rckWaphb",
  "key24": "5zKUBxEViobzQjcFPMSRbiKa6p4QR7ekvoswGGxEKhmsjYcYB95byzDiCeR4bNMSNzFq1WyLAt5cVquA4J7FXPzG",
  "key25": "4cDrzVYa2iner5D2QsGvHiGaNDEnwQamUHXtn1YshURQW65KTX8k34d64v78UxDHBhaZy2ipzpAcwyes8UQ4AGHw",
  "key26": "3gKw2oE1fpjvoFJJUHbeA7oKYKcc9gzcM56uN9Yb1tnheu91HkV9HGtkbzAiWi6kvpGhdabR3vsj4cSqWpMkJpnm",
  "key27": "2yJqQ1yYwHkHWoi2b47c3KGEHEtSvr9Vs2iqDf2tYhyAqEKSmXEm4uAWCgtMjeGw6gXyowFfFwPLq4bd9qGTRmee"
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
