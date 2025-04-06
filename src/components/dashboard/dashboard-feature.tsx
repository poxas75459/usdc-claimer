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
    "5FgfQ1TtaedqJgsEkwfMhtHG8AYQNHx3Kt7bu4vcCtmtrvAefrdpEQYPhdpsMTTPcq45hA15NnPye6PNbcqrUaU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dFVUW5YwvA7YVkJhTJBWzbsDvT8Q9NNr7n6oLbYQfirw59XMU5NoLzqejrAhzRm3uU8ZgNBwV8JwKoUatCDRTm1",
  "key1": "4yAHPnpzoTqNx6rRDdr7LXDHNNdbM9obozepaRdEvw3k91SeSB2CkobBx9ZtXH8NXa6hSSMafAnyajnvtP8kkHUX",
  "key2": "AYQHxwKigS2Ukwyn4qQEkYdGcPHmG2yd59Je9m8VA63bc5JtV6EwDPs7SRfmsmbYQvtFQAKs97Anrn1hVEyDmZh",
  "key3": "3Q6vw4X5NMLcRKukjoXgsFVZrH4XXE8un7xho9duVZHLZesyDmGAM1StsUHdUJhUKdZqer3m6aHVmgGBbmm6HCtC",
  "key4": "2pYYTR2YoQhj5YpskK7bTwCC6Huyj1GRFrYsQWAb1t46ahaBXbYVJP4sf4QWFzpFojvZokb2LBxf8F2dnzqgCmw4",
  "key5": "269BAiM3jCzywmffE9mMTF7Xd26eBcimR3GwwBRQWVbdd8xa6LpiTwyzHNvbGyy5rqhhBUNKpn9xScAdQZGVNeoW",
  "key6": "4GR4dxpq9gRbbu9kyUenyyMCit5JjNULY4ZYKs7Z6ehQq9UmS5Z5apfC7TiLSsz6jtKYqXjANFcEJuiwAkiAGFm5",
  "key7": "SGhn4MWVtb92evYsPZtcb1xS7GDJPwVV9HLR29dvjGStMEVDxvtdsjk4xR3HvD1CNjCZiByuQQjt7uGjAsaTUXt",
  "key8": "nEX9EQWGEncuEcevDNvuUKXdbq3r9AzpBKEy3ziyXcY6GJSxmf5n7L84iEpNv86eYXgkPwhCyUCG915ypL3nrZW",
  "key9": "4KKccHepVk7rVymUxrd1HoNf2x4e4avF415TPZZ3NTxWXrYZ7PvpJfqdx7M7MfeDnMRwcE1qhEEeJcjZn3MaP9HT",
  "key10": "tKJ75nmsWXsU5J2sTHvxNpQKWo4kiyNE7Dbp5HbGheJBmxhRzQChYEYtq8actNQxCZyb6L46bWhzwo3Gyb8Qnjf",
  "key11": "4xZspay6EhAh26P95pzYv4JRmxuAzpAKJ9YRdvZBkvKg88hzer2ymxSyJ41Fq2bT8CzqGojAx2zbEhK2t3z4YPfp",
  "key12": "3RpzVCEX8vAm2HFHSqFBspcVtBb9EMdB7hcKgYpy2cW9wDpjcHiC7ijYsAaiafUzxyyN5n6HgyiyzxBeffnkr6oT",
  "key13": "37CE5H4SY3KeUXmarHyBiB8juh2dvaxnE9cCcmSVQLHQhijB1EZgPmxQCAayRTBG9fN5brJyDcLcX2FL8xyBaLAX",
  "key14": "aFnUoeg2EWnpXp5FjYmq3eyeDoLUnKTdoATJKVH4yo1d1kTeB6B4qisDT3WdXhZ3egvzT7wvUdxA7Vcfkhf4coz",
  "key15": "5Zrs65UUxnfXgFxpDvtuERPruftzsGEYVxfdkSbRbZqZNno9ibeg1HFNcT1xZ1hvh5oE55RQGWpRBWxUhcaVoiu7",
  "key16": "5Ry7iNgwa9eraCv8AXtR1eTykeEqrZ761X1bns3pN6gsiCYKxvRXEW5EjQiXcMrXHYN4F6p9BfWvgUqVeGVQ1kB3",
  "key17": "2Ed5KKJcXcR2FZtoe2PbFX1rh2fZ1EDJL5hLZRFnudcTDgUFyXreG8B4kpshUL7ZVRkrTmRZryPrrtQiyQEw9jzA",
  "key18": "3hAtmW6ygpZWtgSAUDb4a98UVZikM3KDxRWgP3gxFBvwdSa2YDqUYwnvm51e3dcTWSesu8rckPmvgWiJBfQFKLnq",
  "key19": "J8TE8hSYJALdbXCUdak7xSjkQLYRtnr47bH2rG2gLzUDx7xyAwwfybdW8SQG7iBNtaBPDMuC8LdUSyeuXaoYKaA",
  "key20": "2vzexbGFDPD4MZAsa26zcMCdRH2sEt1nmS4HihPtjHPKj7C6tXHTQCZgUnNgwNaYkEn9D7RCk5EEiHPTqGzAwmQc",
  "key21": "4mcjEeTDhzLMdVMhrVNe2h7nUBkQcgpRELsh4zDcYuxFhcgDBmc98bZEQpn8XUtRJjFPhQSVoMNMCh895zz4BEoV",
  "key22": "2cCrV3jzhukuy99yheZ7np8QVj4jp1GkLzPaJBY8kkMPqFMawRyMvd1uZ6a9V2aMk9LdzC6q7wasf8KhNQKyyZ1v",
  "key23": "5wMkRJ5eeXh6b9XeCckiGnYU7pxkWaVyhbjArNoHq7k2jDATUc5ABdXjuQ1KDtSk57i8MVQjBmoxhBKbkjh58sgz",
  "key24": "4RarGshac1mGBRmBFjGkph1fWzKS6vF1U8u2WWxmQfGqGhzMuc4FTLCFAYqrvoSX8J7xcikfHcSgvm2yzUmFpoXT",
  "key25": "3cz7rieJW6nboV7mjMA6CRaHnzDAgXrmSe92XfQtWS2bXtUSsqeDjTzpzML97ekFe1MzNAAXR8KqSRMMtW7mtoyJ",
  "key26": "58vjJrwCBqiZ8oukyde4MgFNUFZh7HWjyisDTAGCG3ezQarrYMEnQP7fDj7UYX9x76yj848UBVNttk3Voydq5mhU",
  "key27": "4VF5AWmwDTvefVuP4u2CNsfPauXcinpCTKFzeBmj6uG2GRCNudWDsnwvQjMp57n9manvuqNTYhfTfbQSY6jPBAQr",
  "key28": "rAmcFCLTTbkVfF5Q6VMRDKFEATrC2pDEWtUezobYiP88saXhyF9VtE3sJDZnhj3Ah8Qn6UJYTjLjQcTcgU1qLoF",
  "key29": "2k1HZCgtV6PZfXMaD2xonguKLpbffCsPDEf2bQcwdNQdsZpyX3sYRfUjMbM4hwLMWMMA7t29f7pHcYL7CLCCcXvv",
  "key30": "3ZLBGXvAX1AJYfHnZjym3uTKfJsFRxpsX2L4zneeWYRkJfCGGEvY3NUiW4p27ARBd5VX539VvkaTaecAU9u1bwCX",
  "key31": "2baU1QZiX7CLMhNgdDsr6Rt7es7TtcrGJmKaKrGFH82rCzNjM2ryHJXsVptsgekmJeEUARM9D7F5eWpr1qB5c96s",
  "key32": "VsVnUHpZ3HMM1VW9a3PvsMdHgRBeZdnsuLzTRncLwjuTHJCxPiFLU5WPRmskCjzVFLBCxjJes5YamT8wR6NJJS6",
  "key33": "5F4wSvJxaiRFo1qv6tMM7f1vnNRqRJig2WQiviR1UQn4qGTt8W1peV2sasEB8NmRXZr64tv6MfTGGwKkciNLJWSG",
  "key34": "4mRRFrT5WRJaJzwthJSZrU4j4nSrMs7bLLnEUQ5axWjaf1DWcw3hrc1zt8QpRuFF2UU4Fk2WCxswVmHALUAjiMNe"
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
