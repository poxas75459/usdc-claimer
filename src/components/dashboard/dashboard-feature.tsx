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
    "5ozhib8SH84fofxbfgyu8PJeFTA6URWzSJb8m97PYvoip3nGx9hBQ7KCDbcts2P2hBCSJgMroXZj6rGwaarPmZ3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BaNpwDQ9iBSMisRauk27h7eYs5oBMGjmcZFGgFKeMWqn2RxDuLfqHyQz1GaMT7Ne1PdfjEQYgarNGTNABSSNi9M",
  "key1": "4RKik3oYfi3kvN8Bv3PUZ2PHH6tbpavgFH3KwxYGrnwSKFee6ZcdTtBDos96RG2XHgA8KsBVx7A4UgU9FSCZTXiL",
  "key2": "2EpZpM7aMVqF83EEwhvnkfiAKqexiSJZq4wgWTYnwZWzfgovmQk4xPV4L89LozXNkw9GTrfZcCLHmniZu5NFzHSE",
  "key3": "3ujSAg2jy1theS7uydYi1kqwYAAePBmbY7XPeSdrMKisWAQQbpRpYCYttexDmmPSnTazr6gy5v59oRf441RmqAbe",
  "key4": "5QaZy3xhmgZ8KdZMCobAzDbE89V7E9rg6qfS3dduSq9Z1Niu6ozDqovAtiTHr8SNj3FGHcDwvdfCX6HTr8ZncwyM",
  "key5": "7TDjcRHRmbmjzh9EiopQSzJVGiVGzWrnpkgvMjLF9MjXaGPhshEwu7BEtpxNX4TKDYPgdBqLtCzbHVCvmxYqdd7",
  "key6": "4d9uzwsQhytwQvHCzRvWizDxhxTZAJYGJuYStjnG9mcJr3pbuDXnhonz4F9NZnEZ5imQqWWjtdD6DGvzNLm9A9iT",
  "key7": "4c8pYTiGrBZUpU8gJ39R6NaHySa1jYgw9YXkREGbZxK7RiKFn2JzHvvUUGVJAWgZ6LdRPkQBJgJtos3pPer1H1Ak",
  "key8": "msNkn5ykjodRSB5YVVUeyPcd4ZRP2WepT6cvwpXFvMESpasdngg1nqEnwZS57L7imd5B4ERYiZjm8vSQmbuVS6o",
  "key9": "2kxoSheUXojRNnErAeLrzTme8wQeTwJN8hY763SxNU5gjePnSzwycyDNvL5FQCB34sFikZoezGvu44fPSn9gdRUv",
  "key10": "3hQxzkWkndktQRvERsi5zANGTwMZnso3cXib4SjnYQvkGXHX1RrwnmSuxAqrxJVQFRkxZosWDwSKrt37pfEo3FEw",
  "key11": "2nVSjyXnZziRyPyMogDYw5RWYKbmSaL5jBa1ZNCRE9E17j3sFtwtM7iHs4tb4Gf7VmQYQVNQrf5AVAN3tQt1NNEL",
  "key12": "5w3rUCP1rpSUiSkyuZsxo3ogAZD2gX8tKNVYQADqqTVEH5GzbnqyTbJaPRUahM5xEzJYUkqkVPdLYDANbqxsu2Xy",
  "key13": "2Y4PJigGRD9SVp2kErKM92uay5PtqMvnEbdvLhRbFasJu14L3Hv9MDYqWwHxxnj2T7Vj9MZTaw23pHc2uun7sxDV",
  "key14": "2j3ntDcb1neN8bFKeSBmYEpfQciDPxvYzKJgtdrg7TWAv3Hthun1SnPAP383qgUWH9ozFk2gWDMQqoLwzuqL5jN9",
  "key15": "4hyDjQMA7RSWkUfZChjnMbayTWuHhCwpL1egb14t2UFbAe3GCW3Bp6LP3buRPAXKr6J2eA8TP5jRL2wJ3eWTEaCr",
  "key16": "2AAZX9QYDgiYWj5qzm5C5ApkrJwUv1EsbN5rCDGbN3KvSVdGgjFeQkiqAQLXPn5TZb4ymDD1dTnS2RKzcv74Lj8s",
  "key17": "3HxQdwFHzEiSXr8yKVxJhHVVDnJy5PT8tWpjqCSzryGrYoq3BwXmU7UQ5c5ARe8gVBdDwcU5vwVaDkjffVan7TEE",
  "key18": "516ZUPsNdjp6675penDvvi1nti17JimEtD5mZYv74ejt6hNHAeAsPJ13hHJTeZ5D4MC1hyVikCYWXTmhhJUqdjZy",
  "key19": "kvxdVNsnWJtJAR1yrdwYthpTpp7AooG38H7WKuUbBRJiAwZaTqoaCB9M5n6t7wGeACuJxgs5D14AiizaaDBvvio",
  "key20": "4cCaMdV4omQNsyiEZVzA12NHG7g5u5p2zQ5v3w6HDEd6p28qw8EBtSGS9nYmaB4kWf8yV6bjHnh7rU1KdqwUnWof",
  "key21": "3HFGzuSyXJ9TFNzPo1HZTjiivbiy5omMLyxQR6er6vCbzLawjk9hqqH8TGCjr1Sx6rAgFv3reKmZDHKEx5Hc1mqL",
  "key22": "5FY71GYmBSkE1paovsJHRMBjZTjHS5QFNzhJynCrSmuCkThwMPPyuMcG9CCUGuMERvGBCvsV7rEycoFTW1WxHYm1",
  "key23": "5C2S94tcMc3BhE2oQ295z4WmunNPKFCKB2rRcpPyBAFZbATNBXZ2j1gQ2P1Vp5GVmAZsk1b9mriNBgRE5VhCzQRv",
  "key24": "4ziy8Xy5Da1TCP73NjDrpFWEJ1wxrR1TgMkaxj53FhQpFr6JAeCbkWUtwz3F9bVSiz8AVbZyZXxVsAweFjVa3ghK",
  "key25": "4nDbU9GvwfLzcccCLMmgp9g7PsU5Vsj7WE6k8HLZrM9Znp3sUcLM8eWDykTvfXmu1wYx3imCqsxobgpUpCgxfU57",
  "key26": "AaD1UQNfqvePuRm81NLAKZcrtPhLcbp7XSsxZeKVsh84kVFxAQYrdpt9FChyj535bipfpAYJKZFYaUVdgrg1o5D",
  "key27": "3LnZCqTdSNXQ4vN5Zr8Li1ZS2gmE5FZvL1B4vELtULR1RJGi5rV3mABvgTm7fuaCGn7YdWgRDRv4bzrGkUhFPTZc",
  "key28": "3Mu311XRsLSthDP2j14qx5jxgXxic2u8FDNXXRwaY8YAwJYNCWEtsD9iT7QpmybXvtyBPiTLHtXeaYMnC3FDpMB1",
  "key29": "3bTUdabKw7SzPF7aoFNVUfB7rkkQ1x7QE3AFYRf9VdzA66f2whxrDpMj7M1a8J5Q37XMPNK2daCPJRLC7dXhZiaA",
  "key30": "3VWJhhoXeBMvJcFi6xT6y4fEothWdMugsiHStyqv8QqhVYun267LrbCpHEH7jyBi85DcUGXCeGKTiqHyQSfQCb52",
  "key31": "2WxRQSy6wNFyyNJ2YgGFLRLXhF11NUDADpYY3xk44whWGyMUFmkPPJ6djE5ahLyxyG7T7JLuwDnvnSikgrBmszAN",
  "key32": "2SNdPFFf4oeWxqQmXyRLWy8zB8Kae96sRvwhWbSRYTwqhdSAy3skVW3HBcR6oDkqcncpGUYLYpCNLDSeBguy5NKt",
  "key33": "4sR5STVvcg5wAc4jQ1YvrDRNtAkExmMhTD4EzLjnzq2UcsfzmCX8SfjeAYwo71UDtQi4Rsyvtet8ek17nyesZDBU",
  "key34": "4JytLND1P2h17DjUysTWTwCbFBRv7W2TWH4RvFy6zQ3HP3N4gBwNQbbBhuC5NYfpHw29mTSHAKhyGbEyKf6UFqoa",
  "key35": "25PqHEz3t4zfSX1BCFDpJax95TYf52o9kMy8s6636bZyGvFqdaSqDw7zua2AsMBWuQ85mAQkDqr4AeAxLEGjCRZY",
  "key36": "2ntkAfrPcySZvdQZLeSV28FxtYyuScnSXN2cDm9ycgqc872hACCNqiYY7LAMRx2zMsJMZBb4rwtai26ePT26geEf",
  "key37": "55sMTpnFRpZ5LyR7rXSaqkh1vBAT81KrWJcU9azJ8WWn6BkcRrzLogSrnnX72KxKBCJcgyA5HhaNMjWvhxcDDoY3",
  "key38": "3tFeDT6dz96GdfYdqwsXDpxpkhhLpeNnman8cAqV3fNkc15ZEL8pZfe2pTqK2V3KGSSQjRBBxtyimdA3jkWfEt52"
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
