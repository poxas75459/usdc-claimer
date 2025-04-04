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
    "5q7y7pjSCZK1r4ymvcBdsnis5HUebsxE75dgjCs9WRgmwSEXuNUWV4y4uQEbdrcXLEpq4q17rFFZ53PF3MTkhEQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7hqPnc5iBiRRSufkcH2cPbB4YmEwZRNbAXoRr2Adz6PWkBSG6t8uGwuJy2yfz4tNyXrEac9LpH6yHramTdYnDe5",
  "key1": "24foP7igWFo13yY81ugYhjToY76LR8fZtoUepuWKkC8jegn2bWvBXvpym2c7jEto5dWcYDyUMLQEq3qzHkCvDESy",
  "key2": "5fjHMfRv15Cb7hW7wjuEdTJfro4H8HdG9xhBYw9PXAu5eAcSQJnz3N34MbY3gRdrUWmmyvBqWuJ2dRnt7Rq6Ywky",
  "key3": "4PvEn9xthgCxvBHjZgi3QemdaRDDDs5XZVZbTAjWXi2DXwJubjugxvFE5XVwsU6TPkn4BeSvh9HXVsR94Hp4Vcvb",
  "key4": "2X6S153N2LeGPn8TaQfpSBTqd7WpLX7zPXz8Va3uHPtMdYs7sjdu84pob1oYc2TqhKzGgCdmDf7HwQS2YWW8Cc7K",
  "key5": "35aaaDknqy2oHYnGRzJ7sPamzx1EVzmjJ278kA9fwz8NopU5yrEtP6XPHCguaTcmZEQsCL58uXVdXQRXeyPZ3DSC",
  "key6": "4ai6sZ2pb9ztn7YfM4tRg6vFDYm5seMRN8htebH1ay3F7LRZDDeaz7YqsksxqkCHsZtiohtDQuN6iSvXzcyWtd64",
  "key7": "4nK4K3WQkC2qheApeAme5Qy9c2X5rnpYWVp2w5rpDwU68JkuCbRjpwB7NygXdYVnoSzpYmmTfrh42tCsf4zy7axT",
  "key8": "uFKJ7Sc5nghXeoLhDTV3phmMXKAoGDR1cvCWM8Drd9ZcxfM1THgSAhVes6GHgJbehNBvNi1jivdsgram6K95bGt",
  "key9": "4bSAdXYuwyyJu5toczonvSVA2STnAWeXmrYsmm9uP2wfMgM5o1Aay2F8iuCMRp3ki8fv3TY96Rjz5otbHnC1qip4",
  "key10": "5h2ke5dCgieqszrkTsL5PVxpV8N1n2UiknKtA531yXYcjNRRggs3zNaQLjgJ4DEegu81BBwALmQXpE2hymvwosjj",
  "key11": "415gKL3rGaMFMvqdvAE2F6tok4djKNgmZbQ8bYffGzeXVEfeg97EMFAL2iFzbrw5QrpUQ29MMbBMMuFSGoXdYr3i",
  "key12": "EKBpZ7Vd1HAqzZ6e7gjrQTnqQCsB2qxCKphT65YDcqukDJpjm55XyjQCtUhBmJRHoniWkt2qvSYaGnK1W7x4mFg",
  "key13": "mDTeTXqpegMX9bFjytaBwrMYxMCa7GtvKrz4u5SXvtVw8vXAt6TjDyDzrdtQWuDtQkKjSshhVr9chexDqkY3oTT",
  "key14": "298WmHRWph3jDrwehjiSggFJKcmopvynT6fnKBwj5Y53ut7yHfi622uTiJLr81AHYeZJmiZtJ8otAsr1rTbvS82L",
  "key15": "48oqNGbC66H6oX41aeZwCMSpR4RdTPHfQZEfQuqArpaAbMBaQ7k6RRJnpAJiHH75SC4p6BHT6nUXVKo8kQyqgaud",
  "key16": "3EB2wn8L5E4k6pNpx5ciZAV4anb6chn9uCgv1kf8Ggb9v7hGGvHKSeUDnpHiYbMVV2VFFHq9N9Rwp9CYmo9LkS7C",
  "key17": "3xyLFZqGJbB2RQPfFMz1GBnVPR6HfeB6GfM6H9TpG3kWyB6Cs3zoieFja1mnyJEKT3oRxSCwRavGz28cccMYLmTd",
  "key18": "3Wu1qo41uEiPaDjbXkcrXtGPCR6VpUTRi28PC6qGGpaJLjZ5vGdcNRnLEtqmnns6oAv2agQ1miasByNanMFL222a",
  "key19": "5ciQHacjzmKzEJpfqMrhjofEwc6mHLh7kYqB7B2qUb7yfXcVZ2jdgNQ2dPFyhfKgcauLqCcRDYTSJVjRDNcCVe75",
  "key20": "cgRZEncqojgsFZi2yUo6jWW1ceX2JMYiTBnT2iLcTZxQCZtex1oHp2NLCFaW2ZmcRiadG1dh5YaUB4mAfzRce8y",
  "key21": "51yFxmnKVcHkdkChZtP8kTkGLFKaWRJiyf3yc9Dva1MQwQA5sXWqoarDjygDKZJVonhdvxD5gWuwauACcMFGR5ju",
  "key22": "2HRs73m6h4sNby29meM8FuDS56FKukbKZPKVTAJq81ckViKhi5N41z6QsyRXsjJRjhVh826Fb96yv23qTreEwL6W",
  "key23": "UDC3hai357QGDuVzgmMtKiqHUUu9D5hLyATmLyv8aheLGNWgJe14BmiTwQPBBjJMBaaNoAC6YoZ9YZnEcQQ6uTC",
  "key24": "214SnXgSyVaVURe3x6k1dLiPgNvu57hTuhTAfQZ8RHsxRBParZe3QqruCnmM3nnnyMeWqHq5Bg8sAgKSfBXuRaqq",
  "key25": "4w6V89jbZusaB1URAB2AcbzNX6aMxUW1NuFEo5KjrNsswtS6kuTYgCbyPENum75LQ1qvopLZdCL926TNGdpMJNia",
  "key26": "5j9xCuGUcoPL6PWjLQUBZqFj6qrNRNAowTqwYxi6gUbBPGe8RhFbQWqYDQvmQn83wZhSs17AA1YiJyDKWhckcak",
  "key27": "2P5zCKfCTkrRB2ADpsAaBSY2SycfKtx2tyhriYhk5vjoNkN9pBpEpGDE8dvR5W4UwMHMkUEK8w16MpGfnNoHw9hv",
  "key28": "48ZHhACYA9vuDfpXDh8jHaMmoUnFvPKgRs56sGEYngsbbdRrH1brtnjp8npSGS6Koq4iPZEJHHmYcmzWtA58M6EA",
  "key29": "4DsGMWGVWadEKARSgRJ4nsJ3hmiscvDXDBasBti8FJEtNmUDf24iLefxk55rAGm6ajJXjC5r9gC4Gupu9j9Mauwf",
  "key30": "5tWW3M1EPTJo1NdfkhHUtxKEHTJ5V5KAapYFx46ozH9ESp6bEnba5Z3tQZeaU8RHRqoYJfL4oQEZip14i1ZVe4SR",
  "key31": "3kKrJn16oTkA6tzNvCyxGox3r4XSdofT67NoA69GvepFUngbPchB61PZqT8eM7V76npcA9J52te9qmWLmwsauKZg",
  "key32": "oi1v9DziMfcaNsQ5iX9mqDerGbYC4UrJYkfMaxyDE2SrsnVz2SzLuvwsjvATzqKCw41sa2fB3LYVEmFeZAqDXie",
  "key33": "3RstmffkRWwhMQtiXgRSXvCcXsfxqdgNXEzTspzhrVWeUKQJNdihVpwXwT7fSaSdVMoJXuxHDTmirEe95pQ5nUrU",
  "key34": "3QmEmi3sKgj8nCkHpJHUhxZRMAYCiGkmNM2XRUJw6mJ9JFAfLzy3B9PgTpgTmTWHAU6BDtUADY7JxTnd3mi2n9cM",
  "key35": "3LPKBt6s4b57pfbrQyQqtyKGUYH9GrDWwDSYPTQajpLmZTJCHpeCEwk7rrmRKCtVZMN4pFb1YfZksVBxkxsddJwW",
  "key36": "4XMpgfybJ7uawiyom9TUC6168FhN5WCgJJ4r8DdzBQnpQMY5Bt5nGQdMkyNHpuV7JDjcgLSJ5UMRSPkVPsAbzKc3",
  "key37": "osEVW8YSfs4rU19sz3FoHejAt2TJuy1HRG8ythHQFcbqbxJLHXvi3Qt21vBXrcnJZw4CeSUQ35sjaFDGigtMVXx",
  "key38": "44gZV2xpRTeBAEXC4sQQW52KW9oKxSvod4DeynVx8tG9vW1H9R1v5xg9VspWPdZHiC6yHChRyvfH3L1FuFUrCbhu",
  "key39": "B4GPgBAbKtRWMwQ8FifyB1UFTrqfaUHpbHLMUyrBqvyV8M6ZVeRfkkFuXvNhswVKzcBUcu98VhLbyVBmGpXabC3",
  "key40": "4ygwb2BTZdpui6uKzjZzDpzkstP1sf8LCFfp3QTFwRsMphKpgfV7WfjHLRXo3QM1r9T1oKjYJatuW6yvqDejvHP6"
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
