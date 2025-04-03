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
    "2A4m7SqTGkM4kfeg6jCFDc4WPM1YcHKF53stBbsxmUDA5pFHcdbw2voGHfUDrrq79xgyQZYWWhHxemnAiDkPyxzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Q3592GiE7oDMMjLGhLiN7vKwfqzWHabFHQ4mybufkCSX7xky8EJdpsgBXynhygFMqNppYcbTRNoAGiZ4nVnzxx",
  "key1": "3npwEv4DLYFuguLPDYbp7MAkVXmg1yzWt8rFUFUfWeFM6MipbvfhY87oLnfqPFXqq2keqn54CRgrb5N6EpG234UM",
  "key2": "MNZjEuVXJSsik8bQbKCmXmiDnD6qxhiT1HhV2xiAVoKmmZ43XtM2Gg9iUSrhNwSvRGs66ZgKvWiXnBMMPcq9Rdt",
  "key3": "51yDCKbg3C3tft674rZGWbSYV3nGZrirmPiTp89fvfLMBWtZGpczgQJhYfTVeY64PoigYLP9DyXJWceUzrtXkYzc",
  "key4": "2RXTxab27XHWyXahbntTGCdbiF8KG8SKGiEo3o6JXTPDyaUUALrETxjzXbe6UyxaD9WGuP9YVsjJTkErQjBxWgCD",
  "key5": "2JJd2Mbm1WGww882PGuXDVP5qBuCq7CWhWWkDoqZvpAnTkLSvxcUhTnZC52fPSAZQUrbjAv97fvBCX942sm5qQv2",
  "key6": "3ux2bPuRiUEbRi2XjwzMCR9T2agWJPVvwcNZwqqCyn6bNY8jmPLesKTsusXwCBHybJZEKh51PSfHutpNk3tKFLyq",
  "key7": "36cTmeTSJToV8NBKovwG7La4W9XwWHqxsHuXBsaKHC4pP5ZHpCjpFvgmKujyhC4mHocqX4qwSZsbgevJrdFai9ow",
  "key8": "4rhDb5yZNhWkcCWnDeMzLQxxPAwRAQ14YjPFg7MNd9cxYmPCURaEgSpLasneiF84L7FQ5JYC3kmgDPsh67kJMym2",
  "key9": "5SeFRki73C5Q7aheBT4TA1mrEn1Gv89u48eTGB7LYg9nUegf5g7k5QCdCurtWeR9HrZXNzM7a28PHZHxgFRpzVZe",
  "key10": "3ku2FEkZ5pdczrGidqxTwyBwkc3vcFLzh3T72YNPNoeppTXcD3q9VPaS793bAi3QUFibeP1D29MZ5vPfv8FA1DHF",
  "key11": "kZqcgbPY5oHSpeXWcgDpqfdLctuwAsw8tBzBDKeBNip9Ab5xkCbfVeSNxvW3o5nZSRMuejSQnDvkFPfuLijWbPZ",
  "key12": "GVmfeFYWSwJdYiqNCNZhcFyXZN6nHcGv7GP6PKt6fdWC7NBxKhUN4suwfTzLfCYp8Ar9cVCnPspyYct71NJkXHN",
  "key13": "66XCy13ga94DhZrEHd9eH2a2Rysr6dt2stHhYtz1JFEcQGb4iNpCthrQp3Zmog3iU1uSY48ZDP1Mvwh6zVrRnm29",
  "key14": "2NgCB3HdCHUAxPBYLRFNHHjm8XyExgeSS4m7LcV4sJtFgfrzaaaFTgr7eHftur4fKYz1p4k2UhwzMSGo3NBBE1mR",
  "key15": "49LTnmyBjBDF4jyCres4FLbygbynzMsyj8kRBT8Y9L8imykhbJhetviHD5hSQCghYM5QivYAv9CRSKmKEAxukhtv",
  "key16": "5XfjH8ZpgesezNzAg5PrLzwfpKFYAdnfkWBMW37CdB5q7wy69PUJD9o3JT3eXtvXYM57caQsRR3QwfrCDDnshizU",
  "key17": "2Cwx5kRA6M7tpkXHTkyz5Wq9keVVahcLy8dxPX12hwBwEQpdrA5ThJT8ZytocBNC7qHdrAxu7hTXRr3Y6RqFQFXE",
  "key18": "4hGozf49WofKyJ8x7CCfXU6f5iyZwq8uZmrazswBMxKTYGrPrdiHdN4JDZF5F7LYeoKXTJiXS5sYD9TYfJXQkVJD",
  "key19": "2o77PaDXHYTbcr4qY1ELrg68yNbRjy5y8HDwZ5sC699gwTJNVbNJWqfY24j3j5P5rpCJXxmpEYJkySCbRA6qibUX",
  "key20": "4QBYh4AqSFiC7A4eAWpFKwBoKVbjSGizb96zh9okBQvtuY9MU2CZty2mrK2xJhyS7JTDYfxmYzz8MzWvBkbiK41F",
  "key21": "5eFUZCpC9xi7hne5HyooFGNBB82vaqpAGgFPu1fxpkiDWiRYyj11bnwfBrXfw66q3jhcqcnG54W7wqbwBRcJ943E",
  "key22": "4KvyGqMLEUW9v7vbi82u99EaxZo3AfGxmBwNJhL5bMtpyMi7ZfmrPQNqiqFisaNuVsM2kTyY82oP1GxmUMpA9kXx",
  "key23": "2Su5KmAsLRuLqPBAqUc9W2J2encbP3FYhxqvNJvvY3yE5bRsCXQdLTcnPCRh7qE5Jncgiz6KkzCD4BbE2jDfCPGL",
  "key24": "2U4q2V9uSeRJL84QdtYRgofqCF6xcUoKhiNb8NJEtkNSPM3YrA96uwgebwwK1N9eC2Yk3VntNQCSPjFTMEVSyqGK",
  "key25": "iQARst2RcHYGWhuuo3TPyu31SZ9eX3pTMFPyfJRV9e4BDLQrTASUXYTfJaeVmiukY2vsowKHjJ4psp435yBWzBA",
  "key26": "47Ag93G3uz2Q7Q7X62wGGYzuLzfazA9FPH2QrHFRVh8syigfmKKKiTxtgi3XDNVeQM1rJpgbC3fMAVPKuCC962rs",
  "key27": "67UHZyaarhfBWdPyBLeuhC5oHUzdcHTtzVt37fn814DZu5CB8SvpNocv8ZYagbT3j5rqEnoCM1JLfYfTw2UgFbEF",
  "key28": "LH4CGrzF4QxZnF2nZGoGZy7rLAKL57Zo7XFh3i78KN2Qg9aLrPvRVaLftbd7RLhA97QVbPtNZFFFhwJ9dTE3394",
  "key29": "5peNgmUnvR5QEPWEGbTP85gQ5R2eMx5VEC3UkJjdVQsJpBPnBQbsWhubBmZtJykrkJ1kYkpHK7RngCXLZS2NRJC6",
  "key30": "64uvVwzepDHJ1b1zQuViuT6vfhQUASDpSAPd3pfgbbGMhgWLDjxM2ZpGeHCuzf7whvnZoeH3sz5k2HawKHbAX5TF",
  "key31": "2aGDBjcqzou6CTuMQxJ4YyFCgXFdhvY9geWEXgeywg5Ny6QUu4V841Y38sTgApuUEP8PY1neZPphGJRL83gLGw7S",
  "key32": "4NZCgEQz9qygm6SrFb7hxQWNS3GwvewoeUgoXWGjNrGy4iMNHWdZQodWQQsiGYJAGnX1xxUu5D57hqPUMaQpM7V",
  "key33": "Q5hKcgq4gzkMyDCuzYeGdkCG9zPT619AptoKyHmMS6JLkgCHEyLtPu3A1U5nWerGVjmYfqw817xxpDtKDng9fxv",
  "key34": "3es4H4J3zK4odcnvpBFnsvwSXmAAM9Bi5Qv7NSo1xzYWgdyZqNmLMxPF9YsAMSLTtjsixM3aRasQwcTNkXVDpvRR",
  "key35": "2ngRDb3gvg7nWERyLLGGaEPYLvyzPQBr5rPmV3Ptm8xngMg5tSxRh1vFsZbDTNhistm9zUwbBpPzb9w29HSWJFx5",
  "key36": "3eNAY6hRarT7NffcdBGyftq9yQKGGiLHSbD9SeZ2oTf43u5dYuhaAmNh88FmKHy78idnzQ27N8A6LtdQb2LnBhEi",
  "key37": "24TcWvgiuuRcoo31r6KYydgbRcf2Sj4aDHPKrVbMYU6y3YMde1SbtgwcbfVE9eX7G2UqJ4o2rj6dKALnz6piAYU8",
  "key38": "5w9zz94gTk2SjpPLcuhcT92rWmHPVQjKYGfLdGnPtc51z6H517NTPaK2U3XonPSWpHhBr9NULmoUmDqysR2K2Y25",
  "key39": "3hLmDbvukQmYhtfEcxnDCNLCjGS7Bg8xi1wRp1yqnR9yqd2oTUywd9rHLSfRtMp3xWvKesAb2Gr5WwGZ7W6SXSEZ",
  "key40": "4nT3EGLqQPv4W2ZTmXref1nLVQPnsDgqSTiwfPLrVQp9BBt4PS6CRrKtopEZxACQsFxf7Dv9qRJ45KUuwEGbXM2k",
  "key41": "3C6FWAruY4iAk5Jj2NigLzkT54ZW4KtBaZr3zkZygitZ4Vypr27TAmJpV9hFtuUhHcq7DpEeCG7TH8k7xYV9XwXU",
  "key42": "2GdyyLGb2zUwq4Y5yURkfURWkHvzUsfBNHmpABwdPe1T6DVrpj4WyaRQquQn8oCYEG3b6sNhtLEhSvTRSrj21f4t",
  "key43": "3Rid8urUAeRwo4kqWfedeVdfduPn6gdMBHsYCR78ttJVucMKxKy2LrQWhVG33ray7jPdnGWkDk6e3br9FB7ttast",
  "key44": "4tFhVsqWbWJ5sCccF7qKhxW63BvdrXX5DTJhnaP1NWAiKSQxr9myuHEGbVboEJAemh7p41f28vQ3mK3V3gTcMfNS",
  "key45": "52QZBdmZGMb7cgUu9C3t1tQqe72JRk9sQDXhrRt75NCRVnuHpTyqwifMpEMF2UC7aVh8Rx2P2cdqokawgquVVXvW",
  "key46": "3KfhaR3wrQbPeiWdt3sMb79VcVdobbUjRB81JzGcmxGzs9nrqADvLT1WSvzZkpp45xjR1m2xH2qDkz4P8oCJobzv",
  "key47": "4AQw9MsQdRhRznxUu5ZCpck2NGiTswv8KvviCcAxK4y6ZwzybqfHjnjp6kNCk8hAZoq5UAdxq4KAAfUQ2WuJMede",
  "key48": "651cW6JqzqHZBJyhJatKpHbYavp2HCjHZykHwZvg78ttCserebjpyQQ3wSFwo39HfjMEt9P5XtquM1bAgwHgjcQe"
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
