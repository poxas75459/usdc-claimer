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
    "4eA4MFjJCjfmndNrY7qzSyKD39F3XiG4s2qWDjFA3Y1P1xMvx5QHCosyYwC9drk7WwGiFdsX12temB9PqFML3QP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CsikDZhhEzjy2Zx5WgNJ9zf4a6BTMgSb7YyQfnDJf7BhYMVZ2E2GRwU1iGVkrkH78HNee8roXaQG8Cty51xrPdc",
  "key1": "xK5xBJUEvVR6NRz9726Y4vbAAicX6Zb8b68E8iQZsPNwi9FpfkNahh1HRz8pDAzr4QMQjEmtMmeKGqjBS2qY9i2",
  "key2": "4S4tVGmfPdGknewSvt8LmKa9gAGXrXhchZH54JYLfiCzAgeckySchvmSDZtmzsf15bawJTkVm1XSyyuecnbGGRVa",
  "key3": "5mNTWwD11VmAx7z8yjy59uZoqcxTAZr4hdkXVoJ2RodpWh2CHGjS7zb1pRPyz4QEDoPf8VseiZ1tw8E6Nv2VgJeF",
  "key4": "3Fp8rBYUzZDJVBiKVBRtLva4pcApPMDi2PEVsiidEW8idkDJXm1C3naeQShrtmv8QLct8R7pGgC6jBro6iKJCX42",
  "key5": "nYnSD9oYNwAnXxHDawBhSCiXyKTKfiErszStj4mB7w5EHTHr89tRqk7QejnGfFxCwWCjVErwCved3Cyjjv9HKJu",
  "key6": "4pAuXhcoKirSHe1ZNyghayxjnCpiyggJAz1a8WufDj7j9ixTkk6jRoufMfot7fnRcywEbEzrix2btVmEuQupCkCa",
  "key7": "5PRcuh2nQsJcJUx2a7hjGKMVNy9zmmexCsWzoHvLV4rfUg8QHT51KLsPUBv7qj5XrhZCsk6zo9NGFtVM8mGXRxpk",
  "key8": "4J1NF7SK31PQfNaWMULTA362TzVgqbR41sqcfW3H6WJRuShXc4JF1dFZVFpxTAjopkFuk66ksJD7WMwpy1vJa4v7",
  "key9": "5RtiV8fjGdLy8BCLYoNvCFikgHucYs2HspBE9M1eb1cZcmTRmCmKMK1DyeQ9HxUzAMbK7KYJN4uin816VMwxKQA8",
  "key10": "4bSQQBpJW7GDX1Q3zAnribgjRbQxHMdghpJrBytQ8tN7tCHDY2RAQAhdrZYdQs1aqwfSaoFYRS7CAz2tyUCyXmEP",
  "key11": "4bMwReXMKy656oWQkFFqgxAzWsMnRLKzwpdTn9zPMTM9rBSCtLHbdKHh4bDM2Xf1JhiysR9aRxcCgcM1DbSMbH4o",
  "key12": "twVKN3N3TQUzct2afErQStjV1s4Y6jetFRiRwcrnoX3EkVTh6gY8RXx6fWJg66zc25bSvPSmwsvydcS7DbsciYm",
  "key13": "4MWAkuVQQbPL7XFMuRLDBZxCys3qkVieLKoQPuPC458FJK9hTqFsZWWLsuhihtkGnC5VjVpot7iZqYCLRTCxSGLR",
  "key14": "2aEmTquteV4xUTDbTQ5CW1uPWkhAFgqnoVhghPL8MicgcZ2ceZwbbmGwAMTF2QAnGjorgUZeNUCbhuZgbstngPFS",
  "key15": "2ckU5DUTEtvdpjSHSTiQH5Aizj8heo6TSzAKcwQAZ287REcyXPk2bh2TLNvPbt1DiPvc56HmNC397wqmwiEu7bqV",
  "key16": "66KB3GfbsJWMfNQKsQsdu8ooExiAPGxAnwJea3hjZ1NiSvri63nGbqefBY8XM66BfhnnrYepGHgRoxR9QgMDFnu3",
  "key17": "5GaSn5e1yWJWU47twAf5WLk3h4sGz3aSiHnMWr5azu1BosE3fJw3brn6iMPpqX8ZFPkmzuuKYtCSsnsR6GAn9kgD",
  "key18": "NDCAbcujyaH77SohiyPzz76iBzz46pakhfiiW4bKX99M6A3DrVHtRqgK9yfWtNQfNptfYYood4KdjnK92VVTiHc",
  "key19": "5AYrtQtEpMhwAveAGH9cckbhdLQ6M8m4HjLvYGbafYFDodA969DmgYzmPJ1ExLVY8SfjAwQjeR6DhiAgobPWQNGp",
  "key20": "3fsV3Ne4BGyo8fWcJ3zDrxcpLPQ9HqPiBaBNawbMzPKFF16uJmjqcfYRqpK6RHH7go6p6e2g3PTXv6DPor5QecSF",
  "key21": "xcGXNmWw2XJk6LS3moGukPbxxKtQzbu1RJY9KvaqahWm9JTtC8pg9JgBMj7CKHsfQeoSMZtrR2R4PWPXA1dKHCQ",
  "key22": "5VB4tynQULaVzPdFx6rEVytMQeESMyAFTjmQDMpQ9BZEAY8rR6qEAVS3dmXx76H4B7MZTzDPD1HZBxrHuVAWJrpu",
  "key23": "597zVmmxJTrK6dfedVhE8UfcfrrBauLzsrUa2D7W7wckcGSD9qcejbrgCKY7CrHKsj2J1uqbxRw5Phaua4XBaSQb",
  "key24": "ns25URQKWKurphbh8ZM3NEGji7TNr3A84taR51VSB8hANZVuayJXcYE4kFbj1Qrn2VPyWWwkUm3rqabaU1Af1E4",
  "key25": "3QV4ygkYPEWb81PX8QcmGFTbLECK9VXcjMhXbmNatnZMXwCeKMYeWJmL5xwaT5nrJpysWo2BHLtKkT1foJJcPqe1",
  "key26": "5Ln6wHiUJgqbW8vjY1iyPXs1mZjd6JozypTrjkJgpmmmDUFF2KEjbT61wi18nKhffk9jDbkRDChgUPuymevTqaVf",
  "key27": "PVshZr2in7pYXChYj9GmKtsMDq5PScDH4oyJz38UgxTVD5LTN9UnVRZaewqiJUmeHm1t3WeRpCh9PcJrgaJd82a",
  "key28": "3bWb2C9qYrhCDFNkGJwWrWo7Y88ficCcqTtopUqZaMWGbkVmdcydH6ZBmmrCd6nBkzWSppXnkswoRirsPMukNHqm",
  "key29": "2a5DesYbReyvZm8puZZKkRToDdRtpkteKmuNGp3TmvTWLbMPoJy7NgEAxTrJKhmQzGhqbUmY9XF3ERiaYuoCd7i7",
  "key30": "eex74hUDMeUj1qM4NnQ9bS45FTsXLNkjqN1NiMViXDzXC1Dzhx3zo9tJEu27C34CHNoGzxnSxmz2uc2zgkdniuT",
  "key31": "5HmwxagTkpPohZaXEiKDtWNUXgTfWtTTqv2yjRdSuhungAF81bAtk2hnArR8khi7qTSKjPHr5uqmWwitRapR3LN4",
  "key32": "2xLQPf8hFZv1WUezuHVtpq3ysYrqRuiXzEKBqnCzKnBdwfd7NcE7wS6pSTXh9JhdDSYDRUkTR2o6E2BUUEoFzQUa",
  "key33": "hPzBVkaT5Znxx62j55Lgg6RRc7P8BSCgFuNz4zsamwS9uDFVJ8Rr96c4euSW9fxd6nbH1q81nDP53aVJkBxcpme",
  "key34": "5uSZtDBXyu3gREnXYrFabcHFnx4A4E5FdqQ6b59gnEPy9mXG4SVjhnUusTVUtYwRa34xuATig6Yrf6jDeGKMzpq1",
  "key35": "48W7iVUGmHYvwxS1XGUkhTf9AQoJ4QXhCNqyzDo1aZMukfBGLbuRKXZ7ywRpBXkbpAuPDRVUwnRYg65Nd8nDmTph",
  "key36": "3LGbvyrpSoQL9oGw8s2UAtdHCLGsJFQQiJ6e7Did4zGcxFrPDoTGocHoeaMxx7vK1payjh7VgpCDv6gwcwzbiEqJ",
  "key37": "ABSGRvLtaStACsCuzG1oQ617n5zYiFRPkWo12maDQm9M2WbUcPc98fpWLhwZrXBNMmaVfum1AUthkS5kjSB4AYY",
  "key38": "4gwDuWqpnrhvYA1b2n4ZvaXS5dFc1o6eRSEbdkLGdSZzNGFEX8QMdmBRLtPRi83vNvtfnURMbKRwgMJYy9r9qXtn",
  "key39": "65HL8sQn9152MDTY5tmJV7vZbfdChZUCimqh6i2L6NQaAQFjFEV5SPLvvgYTTB4u7ZPBzTyDrZYbdkCcKBKMJHxs"
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
