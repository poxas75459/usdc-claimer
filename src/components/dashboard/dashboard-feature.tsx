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
    "UNK91aDsrt7udERMPYvsMnfwRbi7LX1eF7P2eejfbwuVmkJmJqM71wygvnoa3C1bCQvoN9Y6p1trEjtkBHKDSvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GzeAa9rZ8AzMmRH9QHeGtDHvnxm8RkiD4YVi3LoZgmdvAgpqiNCEWdUN2i17fx1N7X4oMbwDzc9B5nFvy6fXzdm",
  "key1": "4QntnoeWm7n3yNPVemCQrwbtkvWDtJJrjC7po2cntogyGc7QfM1C5sTVt1cMmjStVRY73frUsDzfEaH2FQrMpd4a",
  "key2": "5Kdmp4MaumYWc6HbNQFUVAYo67pfSheVo2N1xibeRTjVeKEqj6reXrmJPVQcWnb2Y1Nara8t6u6HNsoLLKLupTez",
  "key3": "5Y1ebXkDZAMoCbNCp44Pj71qgmkESv786Czz7eRfvt8bhBpymbpiM2oVCv9ADF8XhYTr7pwurGrCNisQCDnMAeoP",
  "key4": "2TuyVUWgqxUCvKj1HR1pP1HioEaTr7JHQAsJpwsx8qQHpMU32FLQKMwe7fh3dBjg6EdC1XuStQUyF2N9y3XCSKzP",
  "key5": "2CjHpWMWLB1moC8Aic5p7Ky8qb6HR3vxMZ4AwH8kYosCuQR6yLFfG346iJxVxLe8D5NoiB2QPS2RR3qaBfKnxuEc",
  "key6": "3HDmrVsF5Zw6aVUa5FdxK1Cf3EXC3bAL4GvYBvSP8w8ywsUeUD1BYMzf7RXQSWA7zgpCUNQ24a8b53tS3FQbjW3L",
  "key7": "aY5CQmKouZFfHji9S7koRrMPJ4vzX2Tuhr9JzouqQ5PtznaXzEWKftvyMGAw5LDUWpLRWQQoMUMSgrRjg1Ydb3C",
  "key8": "4LAAkCshmpdwGfy3PW1tJvUEqbtUc7769zfR99uCGvtevkDGFMYeenEcpHRGWDyrSYqB7qAqs58sd9Ff2w1jHLUK",
  "key9": "2g5LE8mNhaH7csL7R1sNM7jQ5JaNzuirSVZ9tWkw3e6ZexoLPt8SoFkrS4fN6JCLrboLMXgtb9JTBW9GZPCaHXaN",
  "key10": "3omYh57i4Lf5GCyvs59x5QN1Aw6cKfcFDUpwmMMesNftAhtBymUZrDeLYHfp1FE8UE1yWstetAKqrHkAfbrH86dn",
  "key11": "2yf1ewkCb2e5HHL2NQcZ2C3BxcoEBF5veQrhJGCA7UomY592T32C8PYAaGhfudaQd6TgAcmexuD6RRxQ13FHNJPP",
  "key12": "rt81zTPXka9xvNwJNeyBQqSGynB8341V4r7ATj5HjCQgb9Lm3qQ78Xo28ENyz3sXMtRj575AewgpjfvrB1rn45q",
  "key13": "fz9xQeu5Qiv7PRzhGkGTWvWQLVTczLpJd7a5EXRbd6wApXRWfVLLZsAdtkHBUs3RRbLgM9ijQ8qfo5c7XwSpG1T",
  "key14": "2FJdTuLJ3anUMvre7WyXNC6WyhVCiYwszF8w4G87S1NuWJz46bgtBS9Gm1R42e4oeejkjCmhHhtDy9gJbxJX2g67",
  "key15": "9DXLrdCfkQmsHZgGVQP7xEtFenQiuoioo8FxMPv3kLZVTf1wjEH9uFcexG5pTQTJjXjg2NYFRqUDMAguS3jgrFJ",
  "key16": "535RdyNt3jcb37nWJqU4Gb8f5GZn3zt41RytfdCMsipAW2WLaoVo9faD9HWM3h3g3yvCWTQgMKmPCvkc851rfNJF",
  "key17": "4U2A8fnptunUduS6WWMmg6LB3yDHcPpDNVWnCehAt4coFP7cKKxD8Jdwk332wsyHwFnwKBwRoQhBuTEgB5Z4ccTp",
  "key18": "3BiivCdnDFzNLHNLv7NKN47VEDzpBZYAut84VP45r762GF1gh3jh66ZLJDxnGSvJkXp2Db5PoqmvxZ79tBkjZZry",
  "key19": "Fc5t1baJubwkdjwhCy9ZxmSLcqTM1CHWCpUruzocqtC1TvRkgx9j28gBdDpw5uYFtFUAksGC4UdoKr67xgBj237",
  "key20": "4sjc1beHsGiWYerW3ZYwM4qRAxJQoSGnBLbBcZsuWeepJEbk26xDDksBvw8aqX4B73ewtZAk7G6kEYMpZw1jk2e6",
  "key21": "5RePUXv7fD9YdwYSPD5V94pd8K7sgxuo1p7pUKqJJqwGUMa4nzrtADGYxZn8oaZNHY7Dr8WHmmzDPFApyawDeKZd",
  "key22": "3CA6bes6hVijGwQ9nUsfNqiZTDYGqWNKQ1WRbLCw1eXk3Zm1yvwvgwM54ZWmno6LdAwSCpxysaarK817BAuAYqCY",
  "key23": "1eGeDApuHZWieyaM5fNPT6ynsu2v2w6jTnpRSKcaDdRUSQh3bNyLcrNvgmd3xGjx3hcjrK3Mh4jYMWQxATP9pLc",
  "key24": "5onpGmnAUfEuUQfKh7jWdCuJ8hMRvGBgLVTZC439SKZvs9W5ekXWwDzexu8Ke8tnpoXaszBAiPQifjcfTpbeQAaz",
  "key25": "386mmcAPJ2AU9iYiiA4xiy8s49yWmjLbbRr1AUVdNBbzTFZyt8og9w8trdCFcEm2YMNr6PMiRGGpVxAS2KQr11ej",
  "key26": "2ZfvhH8FQVagQvdcYVTektEh9L9s57appfxynxvBDa3xSHGdQYNfPXJ2mdmiZamfthyb5toeYbSHPYp9xpnJgppv",
  "key27": "4Z27z3SYL46eqVe9rTH2WQQbAdB2beU6avuKWTa4qSQ6bVXNo2Rfun376DtdEfniv3mqTE3SYWqmCTfDp1WuxKu3",
  "key28": "3c1zCN2hbrBizp29J4XRT7TrZUA9sRoY4XZ7nZN9vpizyvtiT3GCP4cizZSbrstx5qrEdozkJhw1yTKw2shz3MNS",
  "key29": "3nFV8VDdJnQJRisc2VhiKtxb8U6wu7LTMXFTYXSqvLZjy6eNBKSMpA2aGBNKiEzjdJgKshGP9w7UaYCuVMYRWEd9",
  "key30": "53zqNMryyKCfXsCRWw9P5nh75KDN1Lu3T7porhtsjnFrZbmaewTkyzzJDzULoEmQQJCKgTWSpW1MAFbG5fYEGpMh"
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
