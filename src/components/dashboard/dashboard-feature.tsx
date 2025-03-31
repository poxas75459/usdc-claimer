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
    "42z35zUZb1P93EwqAkHH7zLi2zwK77DKH1Ke3Q97MZqrZtAiVUhfDzHnREPUDqqPoZKHraxisCnBoFCCqHbReYf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LrUTjpBHcgnqXgpKkeSLKVf7vrDvfSkjdYrDR5ECtDCioaUqbDiMpfmgfZ7GFh7WwrfNmmQSKs1Q8CZU4tNzeSY",
  "key1": "4agtNLzWg7MC2yHh43xnCn4ymMFqN3G2Tb2Uvz4Y1dEqCQRzccVDRkeaKFh6oEnwr95qRJvMiQuG663WuHDgmXda",
  "key2": "RrBYHU5QW4zUwT5nng5XZFPD2EjaiETYrv6u3cne8tcqUbFdvTFtpw7btWUBVn4b1t7m479mcpewTMcuzYH2pMM",
  "key3": "2MZSLSeWYUyZZRLA7RkWB9MDb4LHPu3mTM1PWcojWdKGCbkbYSwjBUi1QaG4kzsSTGXwCiAyP37Quiyiks2qvwgG",
  "key4": "Nfm12jDZDriiBJ4ELz5g7YURZs8iwZQptWG3sNfEtsU2kzqj5HK9Js1JpokoNmHavVjb1952F2SzBZU7ragnpuQ",
  "key5": "dK6USxoHMvkgEFzvUbf9jsjFwBYTTSFtGiiDv51vE3QdhgFVXojpiGwAgUcVbBRcA14m35fyByXMwq9sXCEvWDa",
  "key6": "5WczK5nvTPc1pS21dDZr3PJQmVETtzhStHXq7kAMc6C2QrfzS8FQdj9QGaB9A8oCQPU4d47LnfuRa9wakt1MYk4v",
  "key7": "TiwRQ1bH9THDrAuwDaVRZEZDshGNTk8ddNQneR1CTCYt82LBSXQATKjoRxuzgSAe7Y3wZ7nNF1XjjkvsUu7D1Pp",
  "key8": "2cZYC95AmduNXAP55opWEBGk2Xaym3hs8KiPtV5et4GcwRzg3wDZBY3TcUkogZQ1TMj1nGmxRy3TXZsQGRJr3DKY",
  "key9": "5Yw3sgUs9o4tnPKt4jLJ51QgpfmAGG5y9otjvMkmfyCgRxYUN1urZ8SfimFVB8jVJNci292aHgrySZWScYuw1z9o",
  "key10": "5Qmm1hW9m7AqUBr7ekbRdcdpYbEG96KCAAosfCBXR3WjzGGNyAaucRs5PLNpkUVDSSrA3EzokUJ6ZuWsdcHY1jiA",
  "key11": "3LjWdALFqPPWDGXhamZnBzgCKjXAQUUZmie31qRjJx82Wo1QhEnLYQNk1qMTyjk7QmdWeAFb6K5mz2UQBrLseJ9i",
  "key12": "5K7zHZKosiihVQGnFbyu7BF4mFtcxHXuxpjvV52nGEgQWyZy3Nb5gproC6zbBEryySHSzfvtiUmfAPWovGgkfSBz",
  "key13": "3MhEspGkfCy47hQVmmP29Wb6Q6wgwK5rxJpDuhryXBvSqiMPTFa3K7VSxzrKSQmww68VKtDX6Qi8BiFEbtnGBLFG",
  "key14": "3ZPhVGqqVd3P46JdqJgUqc74z5P81nJmx3YvmuW8PZRDggVTNC2oLeAykGTUQ12f6HrNNQ3sQyfznto7bGUngMBg",
  "key15": "FzFRAgYt6xQx9SbxKayTL4knvk1whBSGimwx6vNsDRtCiexanHeyf79NbhRNAzHLQy2Z1LnJYyN6xbuEBwNGTRZ",
  "key16": "4bPXqPrFtoFBMg8wTwC4zwh1zgvoTA8VKEAhXLRJpV72aDGcPvHCeuuqMgNkHEqKTts7DPDUWZWC5d4SWchZb2HT",
  "key17": "24LhBy5yLxZjMRzMAJpZ53ckVsshwLwKuqty3E6Se6vQx4cNUbyEmwD1xUDDRttdsFJrkNoFxeAwPkjMur5Ljnwt",
  "key18": "3yn1hgg2ymLdQTHZ8cdhwnVF3G8Wo1MT7HgxnT4gKJbV3PzQJMnkz8NLscK83kmYDZNSjfVuy2c48soLeE42uEn1",
  "key19": "3ZM3qF6864nip84cPfN3DNhwNVKrHUsUkJNC1rkcE9shxXD1x8MgDD8oXsan4K5KgoxMPM6Pj1FGMqcGajD2sgwP",
  "key20": "3Q4gKt9TkwQvpcBcXMhkHyhYsnGL9LcJnGeTkQ4UmDzt7qZbfCiV6KSWecTnXZXv7MgdsryC69szfwEJGT3JQtSE",
  "key21": "uDSQ3y2UjVsx4dm3P4bJ4amLpwq5TxZfVPtrPLVPzbVhm6xtaE4V236avbhKKEzh1Vt9Kj3a2Q6MKzv9HMHeQzb",
  "key22": "kFx1uBPdyE2hELNDBU4ncVxwfzRtjZxer7RP9f4zrjijeZ3gaf22NEKGmhXR5kRVs9szwmaWgzkG5xqFxxbC4vq",
  "key23": "5fztWEXmGg8JvuAQWBpRqSfayG2DFf558RRgMaNeZMxztHcroeh849vZwnqstHcBmn9j3fumeAC2nTFoLVQvCCyp",
  "key24": "A1NobMa13UuPWgd8KL8mXdVmE5gHHRMqVrJN2EWejmAtwc8MRUuymhG4ebriRjkPAWEoG3hMVqiassVzkqbM1Bp",
  "key25": "4auKg6WTUjSgTTQh6LDgAFSrxtqTdxug93adpUxQaYFeeSMYBFV7HgLtdtYF8coHauUexcWvmMvJrSCqjEuG58HM",
  "key26": "45nqEvzMt2V7iMKTrqtp9BJ3MfM7oLSe82ZqLUGbypnD1mqHTo99cBXXNzMdBjowAGDqV3FpBHK9zLjodZJjk8kf",
  "key27": "MyEGFzLFNZ2DsxaoaWr6pzMfVEanCRbLX5KkEBFS3yvxYge4G8VdpPYfTLjZQHKVnfH1BfzPZBY3r62pr48pu8x",
  "key28": "KzaA6BMKDqgHaYR8TPR8PbY9zHstzj4UmA1Mw5b9k9QgzUgKArczV4gRLTACsf2i1QN24PRNXt2mqD2XsDLdKLg"
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
