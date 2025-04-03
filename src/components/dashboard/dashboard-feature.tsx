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
    "3kjWDFQkaNNT34zpiuzD36zPEdH749Tnz7yxysWzbKwkDKw4PNMKmNpYyjneiSopz8PCmrdQAaVWSdHJmPiuEUX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wkdazjjrCwoj639dyd2FPDYhxvbg8zVhigvEbUJpWu4SDdWYCYszyBuRVCaYeScb82FB2KeuRLYcaa2T3RLekYQ",
  "key1": "5Gg5kjMxLWbr4QDXPqeJKYm1W5oRBDfNDJS7S8rFwRBz4peD8esJyEKvQBjVWg1AWztino5x7TPH4kuqveePFVg",
  "key2": "wUakzvWR3wRfrxXRZ5M2G1ruN4t4nejqamdhwVXm4k1RPSLKy1Lw1PCg6yc1Fsqb8YVrSNVBWAhV2yobkzFwSvE",
  "key3": "7EkwCrdkkt37wZda6fyzGT6rUbTP1T6VNsSZ4SVZxy6Df3BYfkYvFEZqqdYUSeGaZhm2kLDfa1UH8xVgD5HNiBa",
  "key4": "5JKV6oAw8Nou4fqrqZofMj2XxqZifsec5kTD5rwRAs8n2BMDYzRSAYzcFpd5QSN9VwHF2BrsUyEyWNNzYExWhntm",
  "key5": "2e1jRv95Xi3Haxs7VQCP4qdm8khFuM5dan2Lo8sSqjn4fid1FFngwCec3obZHAnMFXAsJqe88vfsihcwWoxwurhs",
  "key6": "KJqU5yrSA1rjce2DyY8NWfVxy8SvYCwdjafP5Zz3wgaQFyD9JyGU6fLqshvHHnFCAp8ixxN91pCHFL1mWGyTNw1",
  "key7": "8NtSwey9KQSuAwvnMNMXf4KMSA7jxPPgokaXUwnZVPTPfYyeBqgA8vnGQsxEBuUhm6XN6jNAF3oiPoA38n4ahoS",
  "key8": "4raai1U9i7yJBPMqfDbv76fkQ8XUtfN6pEPVn6QeyYBm6E5nZ9Uj1nTx52s8Nn8zc3Z43XuMQrnHtyRcyru6YfqR",
  "key9": "5wZNRatFpzmLC73XNMUcVwkapKfhTLNUFb4SH5AXCdYncPNwkNdtTVxk1op41zGm9o45AE5tH4zefczSX7UztKnA",
  "key10": "7bboZgvrpdDcoefDMWM5UEsa939oTgNGv2mBVtR6uPEYeVB2xuJym3ivP4GB62YJmRmEsPZHfmXFtGi3nArfaHk",
  "key11": "3zeAAwXGzt3NA6xD3yUw9THJRLmZkD4vPm3sSjA2NNXvJQgsF5Ca751AK5i8Lpa1WsiQhSWEy5T4728vREhRyKV7",
  "key12": "2vcg6a68PJMRuKPLmYxRh5wz6LB5SxHWNMQJPacv9MaknDDCphSLCfQQfkWgv4TYKhjrUba2FGAc2VimNL9KsGFP",
  "key13": "2JpPgCG6Fcjks3DaH7Zg6Hzs4MWQAV3dtrzfV6zZWcqu7Scapc6sj6iAmMVGEgvYqB339tX94yvhEDzEFxZvAL7S",
  "key14": "5gToDJCgvR9KCWbqLNxJ1ppEGtkEo54nKaiARVgw4EVsq7uLBq73fQedUCewXvdcCxp6hMnFkvABRtWJcuVPHEYZ",
  "key15": "3uKtBonkrevCVDiRdpSoaVnVze7xWe662GjeACZUv5BDQ6hKmKq4iKJ7sxHDknnM3wBky6uHuChfkVtSmvuwLcrP",
  "key16": "5L2Xve4Gp7NN8uoHTCb23oeHxY973KLQfPUgrRd3BBo8nUwqZTtHvFeaS77QBiAa8vBnGgBBkHU8GC41GyA5Fqzd",
  "key17": "3HR1A4ouuQZePLq3Qt5Ytuizk1xy2X9m2RkcvitRcnptCGzmoyYE78sDHEpc2PiqLg29KdA8WfySQQvozjrFn57p",
  "key18": "5s1EyZqbkyZ7S1Cc3Ft9GmegANdQddgMW3XehdRkk2Nwtt7nG3LVqKvTp5JTAXQSTRMHk85htNTZHghRLQQSB578",
  "key19": "2stQgA9QZBjGizV6rPY9ryqkr2tkVAn4GXDZU8seXeWDgzUXhMT4rP5SHtbozrumLbEuAcLx9ApKg1okAunZrGtY",
  "key20": "2xnoTyw5o8Rg9PnLLi2pmPMgWXC8c7FDmJftGQj9h4B9uE35n9G85o6pk6RnQ8vb9x2DT6XhieVeWFgA5tJVGtnP",
  "key21": "43LeZ3s8BX4w4eTiBGCTWSWQGNkng3aSkPUsUdzMEyNyEPQ9vc2kPKnUVPDckkkjmZyJnRvyVuUz2Kdp2s31LoPk",
  "key22": "5Dc4MH1oin6uZsypEKX89rvKQn46H2tfbM3v6DyUBifmxx2AbgL3Pbzokcd3ou32bxFZ59MWfr8V9iy1kRKZp8n2",
  "key23": "3kcHwJaYV7Z1MTXPr97MRpJBHtF6iqYL5r9WehGAUbXpRyNo6AoPqUGWqHpGDwecfjCEtXmiA82pfBHtwUgbVivj",
  "key24": "4RbtXryMvV9wc273sGdgQxgFKbPqknS3TyjSAX3onnMXrPdUFUMefUEXr5ReE42eAKBob9YCjdSM6NUCtGwx7r61",
  "key25": "5nRvJaPhNvGnycT2yGNzEoJzxNJFwK7BYV3NHxupJb9ZHZNdZxQNwECUCXtpzDxXKbtaD2xBUvAFFcjaD4BDfCaa",
  "key26": "4XrmG14dNmDwugfKyj1VqEJWtymwTXdLeZS63SL3E5syeCQvArvVJ8ky3KS2EUha87jrKgJxYb2xA96h2ABi66Ab",
  "key27": "54Es1SXDi7dHwY85pYvyaKkzS9DhyzpCKt3sxuwtzeTnKdfRcsZKGsKAiwrj2UAdHcJiYNHyzwfRzzdDCChdk2zV"
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
