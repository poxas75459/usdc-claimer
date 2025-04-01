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
    "2cLx6pJLEHghKRaq3CbwKfgRp1E8xxnHbE9pZrH8xx8s5etCdMWDoe3rzov5nCTYqHRLHgMd2ffyn5WopFJHsqyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Eka6o8D5QfkTUQahqjsuD6ghsAANTrZMfg2xU3LerXSWwCorCNVskJqarNstHS9au2kdgfdzNj6AYvwfofGAp1",
  "key1": "5SrnyofzVgrm8r4zCUKdQraKb6t6Bz7bPUdLX6q91zX2doEdNXY3tFETgoagGV1Syn82hSNW1rf5C8SuxamqUvmc",
  "key2": "65kLEPBxk5jKHwo5f3m7r5GjWaybyaXf16Ur1Cd7x5ktAhW5wLcNFBx7RdkW1UJkjdk3MzKUwHC8BW7A4vX4mhh8",
  "key3": "4cwqc2gMhWap7jLp5RS2KpqKugRBqioTDXNKGr6H6LGdKfyFzxtto9SJ7AeUstoz8ppDdrHwXk8kdhAuorGu2E2W",
  "key4": "529MLiEcuR22g2X9AEYSC42CdF9E5HLQREKnYK4YMacALpgvsjfEkr37sgPfiuBaa32GCg3tAKtKSpwo6yYNJSib",
  "key5": "2YwLZAadHegQWkgdNcpHaBKcuZmQa39Htdz2aetmnd5U5Jr2UjtvHCZBY1iQRNz1ZfZfPe9RhUXb7LeJKVyuPJXn",
  "key6": "2kdAwcfStDBSePToBprdGfQnDtYcQAu73bjLEyg5W96phTBDijVvTzCsrHpGcNxNoj2N3PQAiPYRTwbdWHqRXdrH",
  "key7": "5FdTq4aWgFi2J6yHU75ykZKSwbvvD8bja7JyQ7FQdwBVSMqmnHK4rGnmM1WecK8vZo5LMAPuSuneHLCygwgqQNJX",
  "key8": "daKy4AzrFqhyh5F7s9m6npEcXNde5YsppPmpjTQWzpgzeskoXcVDCog87rugKw5D524DZdTZaeny3uUkxQRHpvF",
  "key9": "5izSP29qMG1o5bRQFqE7JjdZXyFUtr9JGipafo6my57upRiCep1sCCoPt4K8tuAqAbdbTC1mLXk2y3Qo3VDPo6ZZ",
  "key10": "2zwZpycvHBaMcQiH5PYUHKcj4qRL1RUmexWg8LyErr5oUVpR1ys4dz9aykYmxwop63JNgNjQxt1xjZeJhGVj77BK",
  "key11": "Di5aPwDmoUAeqeDihRNX6oGMRXL5B1jZnSBGhBuD2nz63jSACPFeR8V2sqHUorW6E976Gy46xwKjgeKFk5inQ3F",
  "key12": "4NERL5mQY6P5454TTBJmnX1SJ9d5BtbTjLDc6YVP5ZkS2vYt7JcoCcrjJjvHpzcFhvwsidpCDPrXZAniySHy3okh",
  "key13": "5ZZyBteRMg9XEZLARASgc35HEb22z3GgE5yESA1b8fnLLpHhGuqy1aTcYTTdkcDvYGAvTQW58GdNfariyu3tDcj9",
  "key14": "mTkMAmpz7PGe9MTK44rrjQ58U81vMRbpc2hiPspvwYswgThWhLVuAopAWmfKNhq7S8CTY9TCD2C5AUeYkBvu3QP",
  "key15": "2SkdBKdgc7q2NBLYDbag961jn9hMSaEWQPkuBYNybrfCd74DL2FZTnnqDiC7KKMoNdWe8FabY9iYd7GuWLrMCgRg",
  "key16": "4SmM2XmvwCyF3qGaYCo9SeBpWY9yShp9Hj3RXeGmJ61WAD5MTwM7zbDQWgV9PsHZMFkLNXXxAWaxEx1VQbsoKCK",
  "key17": "L9m9qoHge4k4yKpzFwPiMGWUirDnBnRpLH3vn2jFNH8cxa1vw5tKa7oWUe3fEuykX1kvqB7gxeMfHDM1swUcMCm",
  "key18": "2ifBVqKzgkwV8aeSaYeXQ7GGBekStaE4t4xK3ZKbSP9ZXXRSKsqCbAR3NEiXzPXNU7s9VCJNuvNcjK8LzaHcTxiS",
  "key19": "4DGfkjs5QBHcL9wTHYVj52JfYy4YjwNW7sGs74Jt7iu6bW2UAz4WGneEiBhhmkYEgxGW1JXCX3zY4d4zRzT8UcBR",
  "key20": "KXttGSsYWaz6GjVZBMTHSJNjtTjXEJ2iUNczaokKKakvUwCDU1f8Z62FV3HkyCbrPzrbsqTt6erPQRiZGpgRE4X",
  "key21": "62sNahd6NmzBH1Ux1Ty3MuWsPKyrqy6nJskQBejr5E346eEbBP9aiVtQnwfw9HpgD3DMWnc5kBQCb7DXjjRVF5LT",
  "key22": "2D58LXSoSKVfNXcxBsNNy11kvrQDJ5AymXyn5AWgY5ejUjs91XcuWh5FSjuFjZTJxZcG8BwwJKcA3XQ4yzHGZAx",
  "key23": "4ku3g1zGeX6QUcqUgUzAEjheNguphxU5KTPJvEDK9QeT3bE7Ma3RbeCkmA5jejk6tgTmNm6EjEGujyzhgqAgaWPe",
  "key24": "2V1Pk95RjAxxbEofcTsuJMJc862EwxAJMMJjnEvsG94a9FJUzmQVUmkq9yNehcwzBq8YB4bh5hkSS3cExjbPF61o",
  "key25": "5pomQAVCZ7sJMaWir39td5EadVtXKam54ts3fGQ8coXkLTAbSNcf2dsZAgmTv8Y5LN12ghfY4E5iZGrbD2Juzy72",
  "key26": "5GbafQxSooqgDh9oyHHPAVtgunccuK7q9Kkvq7BDAWbRQC4yPK98cF38AuYP97sK3nmifJDPTc7tqUxHg2iADfQV",
  "key27": "28UdsQK4SWcoNWCV2NMnbbVG7tiBmZvjBitfZ8NqnDNBVmReZW6mEyurdzotCfPpZKBhHxDpzYFXYurpeLYpiV25"
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
