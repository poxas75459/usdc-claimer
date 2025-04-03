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
    "2UxBYLcwJcgHCmnPw7yhZk82UHYYeLrHnGPVqVj3toMPvutYTy6nienBLsztVLPEU1WxpgxRhxFzkqYSaZRBfDU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t8DDghGk6V6YfCXM8zmzDSp4hMerEFnfLLRXbrvNvaYsjHDU66ejTNsmVFfiTQbUM6uCSTFbAsc5jt5RreUW5DN",
  "key1": "5sgpJUvcPppsDtSqJ3D1pkxrxwFv7TP6hWC1J3vPaNmJ2239FXaAdbj8Pg525YhTZXSZR42EYNQQKYD1Te8EiJbX",
  "key2": "51dp1sn4UXjyfP9kqdFbY6VcBUZcFqoqV7bYWJ4577NSEdN3LLCUfdvhUbYVkaT5rvfpJKCo9dvpo3AUMv15ikZz",
  "key3": "5FJMsnJBaFgB3z2aCojxAK82MbGTTaymfeuB5BZ58pS5iuCkKnb6fw5TTkXxRTwLcKPHU8vRZ8X5Gng6wUsnpyRF",
  "key4": "2BBChBpzvqKAsTXnPSvcei8XTL1HjGz6V2JLUihxPTwKUwAFeuhsQtKy2whpoYwKCRiFuFarmjcbN9eu54noNLgL",
  "key5": "2WrAkMWdRuCPKLrhMztsRL6L1MfKTqRm3uhYqfDngH9aibVffrec2TydCoP3VfJsrFb1S3f3J87HkksZ3E3Ft732",
  "key6": "3gWBf2bo6oZQDmRJCrAkRJviCgQbg45MEVxaTRRopZ4K36JVoDgPoYQVniqNRw67YRXDoivpKH1RnDtCAGbyQY4T",
  "key7": "5R2iohLV4UWRgT6t1dTUWpksJ6v4ncqHmmimmmg5xnWQu8LRcLjUS9zHx1eRcxG9WE3PHjU5sTCmxCwnzBVQBmYC",
  "key8": "4zsnQJQ5HKEbq5mPHpKo6pYwS3yEoFc3RsaNo19rdaN52poMH8YsAihtKZz7UQAxyZuHcT7UZKtXySEW7i7a1957",
  "key9": "5xYYvcbFfVp7c9FQ8PZ6goykSsRbTbAqXawdmtRd6HrLYP5VdGcrSDETizFbZvmywn1QUt9u2XBrMHy33gsSMAt8",
  "key10": "AXVipsX9QsJmaNRtbCnprPwuT6xXWNGg1ywcz6rgx9nL5VB2zVa3bxszuXYzDuxg2c1MbAefzvx5KeazcSAt9ju",
  "key11": "55dDUSHaEcE7BT2eY8vSZg88BLd7XqTqHpSDAyswVmvpKmNYYhFDWTwnbqbpTyv6B2u8G4bBb6KwmAJdzBrUXVVJ",
  "key12": "57BwyX4ad6b56koZvgayZHs3YNnvE9Fq4AuRu5sS3o5w7j2uAK2eQnBsJ1LHiGNzUm69bwdKXNq8e2eRxpDUwTga",
  "key13": "5RTNQb71zYQVwpue1rAf1ovmEo6dPDCt1tKqMa9nksigeoV5zri53q8GcDDuNmpEmsJQZnx1HdewY8ixRnP86LPb",
  "key14": "zFUmxmsuSMJPBsxnyufTArR5CwEV2PeDg6VGkXvM6nS2bQ3q5rpbEocn4CV4n2wekzRwkHkn6P9h5J83LaDUHjN",
  "key15": "2EwEJwKt8oBtT9Ug7sbbcMtmPPJKPbfbytr1rxbxkthUFP4bQFHfscotyoGRabpzoz4eeko8b89ovopz1kRVHZKN",
  "key16": "5CE2nF6bmipxdKiefwt2HL2tg8cYNg36SoUMWMiVy1e9t2JYzRdohFyHfrAveAhDcGQTdEjXgW1KBmmGi6aRAm1t",
  "key17": "nXVrvDrj3eV4SSrZXA4p4g3WXfhKeZtSCgUaKJPgoJU7MGuP5iaJMmjSteqVkvqv5iQ3KpiQUxSYYTKCRs9Rn93",
  "key18": "5TVLkCf6df3UWC2GEw1Rx7KfRjNgTz4Ku7Qa1g26MRYHHti6FybrPT3GFhDzuqZSczTXdicpmv7B5DvturCi2iTF",
  "key19": "4sFS69JrniLeUW54XBvCAxstKFkurcnbQVDup41nZhQ3m6hh8ptbgHm65d3QTJQeaUG6QLbxbQBBT8dcD7EKXLiP",
  "key20": "3XGmFE8Fz5NmXsHZXnwDz4p3Qh9wZMCW6N7rmRyHBff3QkHMvtXeWnvixfGxdjTCE5krraDQsXaDaC9q6xKPR8wD",
  "key21": "4RnrHymDUoDMoyKodVf4vBN3FRAoHEbQZEoiA62aLWCXFjMcjdfu1dMQr1nAk4LSHBCxamtfR2xdAZ8phB3rVsYz",
  "key22": "4XHd561atfBaqCUgqLrUVDjEtDYSjp5SQs8eVYDhaPbjg7mAR5HYJugdKbvTsDvauRS7K8wvDb82BQLXA7gzSbda",
  "key23": "5BzGR1N2in8rg1BEjVpPpFrc5DDcNz4w7fPKytezrpPEp3srKWJPq3Mz96qvRThkqDFMiGaKTMizvtcbQcwPN6FG",
  "key24": "2oKGgswLTRMFuKPmdJvfg4qHVuqqr9nZm6HM8kifg5bo8U8EHQeeFpnfUa8Q944zAjzQAE15zJKwoEhJoKZwNDQ3",
  "key25": "5fBGaRFngqqMgth2RSBBGqgow7ZJz2T2F9MxVStJ333NF23kPjwDoY4uKrPT32Pd4hA9TjsC14PWjhB6F52VNyt8",
  "key26": "3LBJd18vXPsXTouLR55fDHaMaE4FwuiUkvZtSGkrp7pfovsRiTAA6rwWt9BKf75nb5QqjuDTmckgLcMuXv9bKoS8",
  "key27": "4u9DQBn43GTdzSo9Gq2FHViC1xfaHe2w8YTHFBXkLgBbreSuiSscNZB1VJ8uyv8pgisiDnAiYbvdR1xUYdzT8Nbs"
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
