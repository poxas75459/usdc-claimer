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
    "4wjwNcXn4UNsLzFVzaZEFbnjUpLfduRdo8LP7yKqxqxVssE8fQk7vSgsrtQT6rNt66HCttwVijNwyxYLnZAPp3XW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qQKFQbjCfFJANNWdL5wkZ4xr5MrERHqoCB8sAEhdtjGuXAwRsMrkCtuL6bepCQSCSTrRCHEbRMTdV8UzmjSgVqf",
  "key1": "2fTsKNWa4mSTMkEG5ZULfj3EtdHxKV4a875Jh3wcMiSW516k1LmwwLfGjftDqHPKyWW7q3VjDWppArWHyGidR7bq",
  "key2": "2HkyZFcBXmNWwzMFizpNp7Mz1JpxNpjoxASKBEPSLJiova7mZGAhW4g7aGCfp1XNzdWHJghmGtMJMpNmdooYh1Xn",
  "key3": "3yHaVH1o4cz8ifBK2RKPyGmuwCENDcN243n2H9Shazp77JwDyjic1ch7dXhp6zrYv5DwhbxsRca9B3jecnr3cMit",
  "key4": "5kxCSnVNiURXbDVf2HEMusDvwoNqMRVJFqsSvHvPu9ctmqyyvxhBqTDvzk2BmPDKXyvPW3WNofaVakoCCaFMzVWj",
  "key5": "3G4EHf8U4NaBwztWg7rYUYJi8WTpZKhiaKtpFSZGG519WLoZv4h7ecmvA1Cj5U42JawMJcPVFwuujaTARAPBFCEv",
  "key6": "38ziYsvswwcy9zN8Yiyc8odnHcgTVW2dN99FFL83MAgaKZgxW9fMTVbLYjbapCtGnEhNRbJaRR3eYRToDBP1kie",
  "key7": "55FUFCTpht1qBTvqusAGs69R5nZ7m33uGX4n39A3PTcJJQFDBMWAWXj479Dkoz38Qy6wPdgoMiDUi6G6emU71iYg",
  "key8": "25GBV1cvpHMft19NMxcsPGCvtxxMdSSycey86FbLHQmWrF99gjiWTtVDdCS2AqPZHEydZjbBtTbx9bLR9Nbqmyed",
  "key9": "2oy9PY2QPkG2x7ifA8Brfuyc31woZd7hvxVjDG8DGt9jSuBTWHaPpZ4uvmfsyR3nqFkhuamE4Mg5Utf1gp6daz86",
  "key10": "DU7qN27WkJqmCmwa3AL5PcDfArXM4uqNUjRLeR7VWRPiMyacb4YWccd7HsfMMe6YwGqsKsv33qqqnBU7vLmp541",
  "key11": "3s7y6GW5MFsepZsNKXk2n13cxcJUisSSqY2iZsDVxVqGVtPdT9RLy3BQ1RKnuq4dzYwGGuWorYUPkLBBUwHip7cd",
  "key12": "3fF5zvh6JCoG5bj5BdTDeXBXu3rjECP43qM2WFQyWADgVP1DiR2bfx6Ku6CqVZ7bw8CLvJAUdSYFjjDoj1zoViQh",
  "key13": "5GWpa2tcKZABZRRPwyg8qLZ9pAz5rc2r3YT9fkbphCJm1q31ndDx27zqUDmtPChqT3qxDoUVr4JBnaynGLF5KRD5",
  "key14": "5pwZi4Un3tPsN5aryLZgmxM6FdECXETkTnmrC7hYCa2qSjMSwqojWjb7wi8W5LqpkB3CWBhmo7GY4JE6e2Q1JJqt",
  "key15": "4vRzRVqP326C66GmhmxYirst734nGREuCRuxmFnV5yREfyg83fYB2esuEs1hD3cQkYAqWSuaA6y7shvkLkHqRED6",
  "key16": "5kPFa2ZDXSXfr9S6HeYFWZt7qZ9urkeBWY6s1RebmKKk82Lp7qa6SC5GLBUVfcvRkGCT4Ptvc85n6vaLNiaGqogh",
  "key17": "2HFPGqZNMPPp3Jxsz4onFc2MTibxkbGP3kCYZ5KdHqxrQBJJpdSQFsQCCbnXQp9zeMw9hw57hZwazCbFYD74Twrm",
  "key18": "62ThgvCMvakGJN64aGW6bZXWDXuEfEnHojXTwDFRawdG2h7KC3tKUMJvHWeJA6hrdRxj8RqZdZPDm5pzC7zfFtDU",
  "key19": "3DH2pbHmCdCWhXbyXJkpYoK6UKGT1HaDTYMM3trx7U2SG68yygUkooJKjvKGJ2VQ4FxJPfwS3xkeb2NhtF9ZQ7J4",
  "key20": "5sYWWPqpjcRbTNRYQt8WMwD89Mx6SfcGQLWpjwLnDx6oUytw6YzxHRtKfqv2SpHkhU97tYjpREsaoZ17iKc7zE1e",
  "key21": "3y1CXTvpRALckKCCeWD1qWPLZvTfxJ3ncTSpwJT2jBUcKQfJ1tesRTcnsTmb3GgEfoGMv7aasfR8nL2rkGhMUx4K",
  "key22": "2qdGfDxzmzCWEGeRpwLX2BbYQz74TkTwx97FvQ9vMwtDS6VmGCUUUNWWayNACxBqC5BvcKeHqGBMNEAWu16eYeXH",
  "key23": "28sdzLJHx1QibGEKyANVvJcZfvePVxdwhLkUQXrrHekZNeyLqkjGWxB7QSP7P3CjWUgiLrvfCGc5q3DcnwX1khuh",
  "key24": "2RdSWa8XxTWEFKXSPpsbMonSQre9KmMwi982KbLirgKq7Xxkqyitr8BKHqaCuhRhjTvWKAHHXJhoMQbWYV5ugLCd",
  "key25": "4u6Kg7uUDAU5zSuXURuFPAGukzfQVbbAq85DuTfcZjov5KD1eJ3HiTaLbTkbP8LUocVDmtGAbcKJW44n1abAWW3j",
  "key26": "5ESr18F4X9LsfqmnhgfcbS1GBQGQs8S4d1SG34tv9DwkQ8WHPyiPRdz6DypKj2k52rv5WpcA1tQVXBeDs6f77Q5L",
  "key27": "2tRyV4sNKjYTuxjAPtTJzhHruam9Rrbpu2HzQofydWvYNUZQUJm3nJfRMUoin2HyJQ3xrFJmpGZyE2pNKW2fKoYX"
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
