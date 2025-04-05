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
    "2eJqrDQ9vc1hDhsTpXhxYXxNzuFjFa49UM4xd8hh7WTNzDcBaWKWLQy7DCRneQjKA2mR9qwsDAMRbegSxWo6dfAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PGYNB9ob2R6znXYn4znVu1uzfnqSEPy68aheVPBApPXy1srDZ3zsEjQpW6m9yztDg7DsDEAoHzAX95F1sXmgMfB",
  "key1": "3SrLKGtpFurVPScReDg5kxcG2D5QxzcdPagNpNt6pdzNZ99Jhw5kGk8xx1a32eagLiB3z98UKjDJEJVr1YGW2hP7",
  "key2": "52KcUXCpmmVV7EQmNEoDfFuedcX1BAYngWYNJi9DhYb1E1F5w7G3JuzVLkdkpwKHBnsW4Drh15dD16W2z6pRdySa",
  "key3": "KTAd6sbpaLCUD6q6nQW16wLC1MuBVCYH4NNsH1AHyjdGYB6WGeMRpz1ULkshEt5yeLyreTmSgDxfADZ2XhR4Ray",
  "key4": "4V9Q5UC6reTkNNkmVi7qkH6oMsbAJpRMjZVUEsv2qjurb33B9yZuw2WsUJLsLe1rWyT6Btp2fxuTcC7u7YDfqReU",
  "key5": "579ByTiaPK1oRB1eSN8xrVUnQPDPSYboXHxuDC3xcVoCAxAeeLWUcrzQpL1ek4vkyFXd41MXDYXb6PTpHhMmGPuE",
  "key6": "47wfuLBxqWpKeK5cssG6D4SF3PL38SynBvEcF9j72AY6jbDfTbBWFqfGqLjQxowbZQUvj6xjhbtPyPS6QJxudUfU",
  "key7": "3AizNpSoAwCh455Qv952ysQzzso68jY7XPN5ig1MyPurLjVSuDFNRk7Kq7Jnd4YzXTLwVwkLikNCeVmeGGR9zyPK",
  "key8": "3sUtuRcQRE4nD4em45AEC2hCz8QRaG5tB6aRwnZhiciCojU8P4zm3o9APWUh8nbZJvjN3DmRtCqfegS4ueNeGYJy",
  "key9": "3ceojQ7UzCPFMUjwoKcBobT4eAuzZoYxRehrDjCBHNw4MfcYE1GUHTEj7vdjQY9vwbwkDSAVJ5n4YCnsnqLPNkm2",
  "key10": "2e1FbnoB1cXR5Jxtwv3JJhCjVGc8KgQA4uHRZpyPnQMDpSWuGA4Xw5wqEnS5UCcgcEBtkjwpT7dBMkCBLkW5zvR5",
  "key11": "Em35Kvfa34mYUNeKeE3UK5otZGdcXZ7nBw8hsebXTJFgvTdRQKo6cAZ5pdcJR7RdUhx35hemmAQiriUBPTaVAcv",
  "key12": "3JxadFbFw49DAv4a5UTRDsE6eSf5eneTDZ1BRscxyiAHrtxprHMZcdy8ADc9Qr2RRusLHryWbgCoDkL8ebA6v7Ne",
  "key13": "5uPJFQJ8JZC5iRYTWRUnRSmTHybGxyAbGPQXDQN2nRmGFR5bTwLTidnPTcjNgjkB683esr8mFRcJMkEpSh8DzbZo",
  "key14": "2sLUwaLrfBYbREmzMWz85DtDieKmjQN6Y6qnmAngZnp1w2WLQfmLErC9FwnE5tUKFhBgUPHffeLCnwLnCChaFVdQ",
  "key15": "3Brjoc2jAndrmYpFw8UyrVZQLXZ3jmdFkrMrpEy9vYyKoZPFCMuC589bsyjSzEdXBwbdXTwuDxXkd5wjbb3RLWFv",
  "key16": "3xNhEkXpgobe8eN5oan4RY9Ev4DC2Ky8anfG8J2XVfKi6E7Yf15KrYZe9jP8MqGdXwSnJgoMJbeT8kZi9E87ujkd",
  "key17": "5xVN2bRG3vkBDiQUGYv95fcFaq6RPtpLKft3gfHYkfgdFMj1izn8jtSAyKj9KGoNeS25jvUUoTWqgev79xSLuBKS",
  "key18": "5stAnR1xH5HkDaAeUuvhXic8UnKi9FKXmuxSXGP9BEHZAuuG8vrgVfbPJa6XymMcAwc196R1FYqkT634cS6gMsDQ",
  "key19": "3DsjTvvorYVNWyzYEBXqXNwuvfftTaJcrLs84Hkpf1MkxWBxQaCFsg7v7Mz3F7e1RBuqHLoQW7Grm2nuArBXAoQw",
  "key20": "aoaAgsYHcNXbzCGXAMFTXoLsCNigS3NS9h4i7V8WaiRAduB6cRf7AzKBj7jGvFXkGSGMiSwawnK8Br4PvA9An71",
  "key21": "5jVDiJBQj9bCcrGFCwNfYR5gQTpFj6XzSESW9YvzmCtGj3zbkoAjVJPWswM26g43PPsec4btxMee6srHGPLd2ee6",
  "key22": "4Lja8n1mJtX1mqcffC1Ay5MLvsvobE1K2LXBgZcgD9moYxtbZENVhhQQnu8i1QWv6EYxLCxiiP5Y3r5PaewztqpE",
  "key23": "5tFVY3nmPVLf96zz1bcTbqcBBjTCmQ2wPUL69pa2tv7Y1PpRpyC7YBAhURzg3qP5GywfrC3nCw5JHf2SYJZg3uYh",
  "key24": "5LHTcG7BzZZ3tyoJDVCHH6bfLv2SNU17T49T67fkNrPQAEdGnAGPqFsGTi9BSkRwKPQCTGVhwik47ZDhVU8YT6Ld",
  "key25": "2SptemCv9cY2xFaE9fWgGBGCoPbQCXu5NVVJczdeaNg5ysbGhpH5cbrVMQqmnVXuEdyEjmjhUoLA5DqEjjNCvc3E",
  "key26": "5RRMYx8vV1TKUJSdJGNjiyytdXxcrfpUvguqXqcdezywR1mpq8n5q93Hyu4nUr3iRG1pCy7VSiusVSnAstpKhSGQ"
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
