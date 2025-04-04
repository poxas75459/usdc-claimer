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
    "1RhzkixK5kpZY6CeFAnhyVzQMM5C1w5cBCiJsEGJ71MkjYERn41UAYHAwbU7HnsV7SwYnwT2hwjrNfpFUAC58a4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J472JbRAnQMsidqiYHigrvP5FmxVoHXdAjivt5wKacJnfWiWEjkem1hfk72nvPCT8nkxrahNGcFZzYRUGafq9Ki",
  "key1": "2P7qobfK4b67GRhB3vv65ntW91y5P3ZKgZ4JTJb3hecyF22pfSrKWzsZ5ko9U7JNDhbsNLgcbRGdCL6zh6RCPj9F",
  "key2": "2cYpJWCxdY1CYwGNCC1zqS6KNjJCKeKqaVsSU6Z8LCgM8gHwXhMM7UKM88gizpBt5LZ5PHWzCzvqCmBTK8RpUGZV",
  "key3": "3uVhHTs1ssMFkRRJEhoBdHpfBA9Go2AZvLEX9X8roB2sWpvbPeC5e5SqwjMTcBJBoAQEMQZSXZF85K7MHB8nGaj9",
  "key4": "3CyLzNT4rM1ED8Ue9oxsn1iDUiBBn52ypAVocRXhDx5mmz8dZqLB3m9Kxu4ouayKSUJsxnxhcQE3BbU8zhHetkJ7",
  "key5": "2MnVkyaZTrg3QjtAdWBvPp6swSW8L76dckDV2aZuwUdYduFFcUV6TZqWv6jG4BPneXiA7X7RSTyEH6z5D2v7x5Cm",
  "key6": "4NU4ukvuJwHXB1kRrJcEhVbUNpmPq7rfTANKTmwHCKEt7EbZxSCYyeyUAozMSdbm1WKiJ1uaRay36tZfQ6gvVakJ",
  "key7": "5d5thKnPj9HrH48HnTfZCqPGbA6Kcfj6hMCQ6mSqAsqTcok7aVdVeTK7Udq55FETXf5eH4akWUib6veLZVX8s4VQ",
  "key8": "4UB7Xtcca66TFc2VfFx4atEmkYFnr3sjWtyZsxJQPZL6BKPfashjZBvvYFAuzLErbEZJ19ZexJm87qLwqyUxRzYp",
  "key9": "5v55UhQaHeRW3HvBxiS51ZoqF8enm2vhsEasD8thdfVN9a6w5yvaLQejYyvVYdYshyJq4LnnaEEPsJQrvRcqEiS5",
  "key10": "2Y3KecjmGVHmbp5BChc3eLYokFHXzNqVuG1yy1AhFS7tF8qtWWks3FLHgDq9mVQzv2ooZfxzc8tGUWZDE2jxKETC",
  "key11": "5HYft1qHtZW9ceu93cUEm5rb23gYbsTdMrM6rvQoACTycEL2Vdt6siS9N26YPWbD5t796fwqQwx2tas1xaREwDQ5",
  "key12": "63djoY1N3dnvMTWruwTMp5fECvTZQ35KA7aZCp9Jpy5vJWE6nKTcrnTBCYLbGSZutfGVHC4rcRTHz6ZVR7CJtBm5",
  "key13": "wH6Auxu2Kw6caTaNirVRvtRhrazUSWRuAUXGcexgcj5UfRLupgxSnHdHvuqNuk18RrkVBzWZT767BKP4LkfKWSD",
  "key14": "QBk6HuvyZPVVeiSV2gTyef3ZQGm3Sbp1J5hdLUMP51wy5k2L3WMrGSq6QLXiGmeBTGFY8okY5uPyGxRSnfvU3Hu",
  "key15": "XUVkDYynYwC1gMeNYRdMPCcBtLqpQPU3BFF1G4xbiTLAMdGrdjG5v2FaBqb7D4GWBp1e5iK56MBHiM4f1UmQSjC",
  "key16": "5TYFcyByo4menJqe7de5xmoJuBL2Y6mxdX39PXtpNuXu8j5KbCGU4VJrycREYbr2BJ7tbM1jM5YaBkcK2FQaPHdm",
  "key17": "51YfDeBLqjgP8VmtxhSPzjhfjdFPsV9Kfy4LvPqPcZAYTTTPTAyf4DPJif8xuLC6ijq2VrC9kzZnvU6yLx3xbgHu",
  "key18": "5odCjzKaeP5CavrzKL3GoEL2QKc1QuYzfQxknddEGDRFVzqnBk6Ahnz4vz2UUAC9aVQeE7uCqPT4u8aF1xAsNuBH",
  "key19": "3JwhzypEYc4Km8EemJgehSUkb9YcmvJwgHPFeZf3cPpWSbya2UxRWbkVKZzRC2tk3sXCFsBGCRNdpQWpGL8Xgv6X",
  "key20": "RPYXSaGpuXZn7MNzQeiVPGYWhv2x8b2tRXaCjtz9JVZvbSdiLdfU5JYSq5KrFPLVGYFWi6N73uaYKu1Dx3YDT3b",
  "key21": "448BmQUH558J5hgtLNcJn9SAkyZ59P3EN2kfjggn9jSpF8M5gDk8SvMdousoJA2W3kAuQJwk3aeefuS6kxAWTMR6",
  "key22": "4L4nb19pKviDp5B23Ckiqdz6KP3LvPsWutcrtfzThsTUeugibsDLKhPDrXoFCtnAN9B4GtqQfFYNjgaJVKmxZwv8",
  "key23": "3RRKR6o1CopQo2BsZv2H2ojCUc7nyg9dwhF5g36Vqxh4eYXGmZcpVX3GSYwcxK8zBRqNaWkmdJiYcyVveJVatn9n",
  "key24": "46so4rWJpGu9sP5c3Xn7XJfZYCA5PykdQ2YEdDKxpeW4QYLYVpFQLqqPxX1nJuT8veTvT9sYyaNwgq7Sdzw4Teda",
  "key25": "47XPZZrYrhsnkZeBtTKbSFBDwsvm9qDYCgsKBz2XSXD9VYfwJFmeKWATMDrrgDwmuPgDDryXVA9nZyGy9eeYZwzr"
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
