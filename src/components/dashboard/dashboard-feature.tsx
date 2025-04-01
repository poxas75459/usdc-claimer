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
    "cuoyk8KpEPzhW7FEewW271FA4YukZzQCXvRSqRcpPzDMBMTPoY2uf8ANvtsx2n12UX4uwx4XikchiHhSfEiUsr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mAxygcfshLeUopBKHsU5rX9iNXZAxU1K98Rb143eeAR5uacsxunp9q7TFDVxsEudFzLQ3b5tXinAgwXSXwjZsNy",
  "key1": "2JnD8hpLr73UBCsQfQAyfJiiEY3VPXttwq3ow49Q95MvVUJFqRD8DWemdgKKVYzMNaNigf67XFRodLXnBBVpriGg",
  "key2": "nb2MeKSJAixUWEBXh3VFqa1jJK264JfwJ2CFSHP63fWmDpXVDJsgHPfqbX3oC3D7SjeVAaLitUopGHN9E5bdwqC",
  "key3": "39F8oqQVTEBgYYCyKd9cs9xB4PwBBUGUDRuQXfBYPTQ6R6tCejhsW9CTaUqjRb3MwPKN3eA5mAE9wFZQ4hj34fGL",
  "key4": "m2QjX2xuieC6DhyNeUmra5CCfo6sgSj49k4d5sdqQMJgCczQXUfdx1Z7ugaNBkzuhYKuf9LS6ZHtBhBcWAK8Xto",
  "key5": "jDgRQcQ3SQHPXVT1PA86xQcgfDJGDsEJjf8GisADQczzDZGzFMavyHZkF4z9nKnYDNApEYyYbfmHWv7CKc2Nd1a",
  "key6": "3qRn9tgDPUCbKVtPqEN5y3yGa8yeDyYubqfmz4gdjqH8y9JeYKy4Vz2dNcizAcuSdDpRGzXiEkUjMGbXJuPCiFu7",
  "key7": "2YXRCAVFR9BUP52foRe2Ti7wAcyfYVBwf1ZV4rBxy97KuYZWr8k62wCBtrWmApbBBChgpGoFgdiURXSPkLGXuFZ6",
  "key8": "7XGV7gErbszUncPpjzxwKCqptDSdme4UwiXc4GXSjGFe3jNREJ4D8aJfgEU3zPZbbfj2o8YybAceZ6DK1Txw2tq",
  "key9": "3UMNN4A7xK6ufP8cbxbob2t65Ki11vFWFDGE9ojKL6egCjPWUH1gW7Bf3dHR81QiLaPfiPB7qyow5gzjnwseMWUc",
  "key10": "4TVVqvpRJeDsJf9ELMZyzbPsiXgRvYdeAowPm9shsJ1qMtn4bvNZ5aMsiZHfmYwPHtoiRD2PUjKH9RWNPBshec5T",
  "key11": "4oHGQdYSkdFLqpjyCDTiQRDKUg1ANGrLuvHqoCzunQ3PWkaYh3bqJDdAwRRyyJCwhCUk9nhb9kQYkdYbBbuCseZV",
  "key12": "2Rmk4rDqHkdqWr1ZpPJzwWWf1WY88R5V9FxBUX4rZFJNpUJSBcRjepptMxwrRgv2MkPDU93hioL4k9tXQ2LjvJeW",
  "key13": "2UfM5zXkEBRa4g78ptwu5DHdvSugc9SR1DtNH6NWyLgQtibz3Ur5jUNDwRqicif2x9BfggF5chxzJEndrrtDSLEH",
  "key14": "3z9ZBBT9nXHmqaojQxovAFPbnTt1DKEeuLKwTB43ytM4YFe7KsJ1JSy2wHCD7wM1jR6Z65BSDGFjJoMYt5xkwo4",
  "key15": "557ETaWkauxPegvMBbLyP9Jomus8jaGPjZXoVfLHAWcGersJZVMbmviUKmxYBVDEGcuLKumfAweiw2HhSXbZrcZD",
  "key16": "65WmB9y8if4boX6XQMGDHY1MF4DyuKHm8RWfK5uU5yvHwKEvThnmuKQvwzcQz55Fwo7XApTcgnW5dFuDCjCFeFaA",
  "key17": "5nq9riK8UcpDAqDf9r9zUYeqqbYs7eiyGm7EYpHjd43nmeiYKBnA9kjt1oySrrSUfQegPJdG5U6LL9xHAJGWwLrf",
  "key18": "5pQ1M5BBnb8iFiunznL4XdYN9oLF6M88EtScFRSh3d6dQz5QfwFxKqM69iCgoSjYHGHaNkQhJZcT7xUQkpVrUti1",
  "key19": "67dvfGHRzEFDUarJ697B9jsCxfF2FGCQXxUZqq2XjhwmzFr2LmrU3YMdNi79254MECGmuQhEdSgg42QCcVhncSLk",
  "key20": "3nC1v4ic3iKUxGaW9bTNyHwD8YpFYve95rqQvjWTqyQK4QPUmVGArzKLZ93UmPXQ2WF4FWQ3XSrnUB1Y8pyur78r",
  "key21": "55qgTeuxCpdPcx115bFXwCALrcAQxdoPLwSHnZvogDYDL9QPfANGR1EzJYQ7A24tr3pbHFjwRpaPszXBNPZVAJCx",
  "key22": "2QSZ6NSnojyw1eKWs8Ay4btkidYZ4qBRoofBHW98j3Xo7EfoMivKyzzDnqVT7L1jHPnbEBoDTtvKdsnPm2mNoSJG",
  "key23": "4snZ572m8FwzZbwSmc5wABsjnManX5YvtWsmiBH6iVVQstxNrdShCBqxLvccxo71PmkZFfnaiSvNiX2o7LzDr5bS",
  "key24": "2Cs2pcYwFEDxVphmP5g5g8BoYd6a3J5cwJt79a9WD8EzdUkss4xAgRx5Lt2m9wkZCmJBV71GLinY7boD9UKUcKzr",
  "key25": "49ouHBocUnoU9c41HfoYVP6sjsWgg5VDqNeiFePRvnYFubkqf8kUK2PwEEjHMwyJnZXsymS75eqMKBDxs1ePyL6c",
  "key26": "5pMxZ4achUktWKR1UusoewdzsUjKVpoqqdbjc4dPnRoWjXoW6KiASPRuDuuL6ZYWayrWTmkua3KXYL4gPDbHtxSW",
  "key27": "5ph5GAmzJ7u7MAfB4WdMNSsH33qscesjLR5m3BdBxnDbfKmDHnEKZoG8WHpe7Fg95SGk3GrvYMYGDsgp2i98rzdu",
  "key28": "2v9DvrXtoMoooWhzdjmi5a7gMG4fyKDUov8PUxoYaPLWiaAFPj8XvnQpovTzEpWfwn8FQ27rxLQNSFU9DvmtdPfe",
  "key29": "4FtNVZosMJjJ1n2RhJMcJTWf2YA6gpfBJiYLzNyLc71iJAwbGatfXmNM53ACtrSPygfST2Jh8XWmtDHxMnvRrGzt",
  "key30": "44GPwbco9bdpLhL13kNxuQcpPhQRMghp2KRADr3CPZyLvhypmHpMUysTZhxW98ZSCWY54QiQpKQhFmY96F7txUBZ",
  "key31": "q2TpjUbEL7An3t5p2CMfTMko6QFf9wLysKsHaaYAdh6c3FxTLvKA9ALqMTQW6WgVswiCyoAzmFXXZ2SYVpVerGG",
  "key32": "47qTWjKMMfKwuA8k1AheRLjdmcm9LPLt7tjUb7Zwhqg8fHiRpnatz1qeRXtALrdzXB2vDai8AVas25d4DAt17FL9",
  "key33": "5NbjqAkThRXAhWSNmkSbnYQYDssctF3uyigsE8LtS6uWfnbTjvZsoiBreBkREj8hF1yLrcdGKhNde5DF7YdQpJFb"
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
