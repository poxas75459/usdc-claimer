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
    "5vHmrUm7PFQYNMKWZqWD7GDtuXFXvAYGqVRd4aPNQEzVvMxg7hgsHwd6MWtTPHN2MGTRggC56AZG3TYivJNRz7kK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tEmsHnn59VFGUgxZShApToK66ZzqkjaEt2n2PpomTY91KwfubtLzKTdR6boGJp8H6PAtZsk8wEYRTEgSeQ5QqYQ",
  "key1": "23ZnngCg28roqtMmqfWLkRS4PNDbr6NYxcSTfoUTZg8HGiPmWb91rPhseq89rfabGs2jUfe26t6uw25z4RtWJ3Bg",
  "key2": "BWXSAefkMyqtxVHhUJR5U1mdpHrwrBbHASm8NfKhe8niyLVM3dzgWMLjupDGkCZt12U13iADTeHJ8dfXgsrwpCh",
  "key3": "tb3FksZ9E72XL3w9TTuYeaxroHxFn81uu5AMtQQGHhEmfVAfWYzRuRupaknebkcBugnLsM7WwtZdjYj7BLVkHV6",
  "key4": "3Vo3SVCSxyXFQFCMExPddwij61s3UyKt97nNDfrVhLLH9YvAzn7eJMF6qoeeDdyp7sX7gLnVTf496rLeUzintAg8",
  "key5": "5k7qZGtUWCjGBWbNW6XRWGBX3X6LWmHPxF1ggg1Nce9n8x2Sp9zSkGTL4psBMQdZB2cnnnrcjMEh8UdSdYp9fokc",
  "key6": "YaiJVXDajqhv9K7WZiAN9EWS5jmJXH7eJg8hcWepUBGrTwy665dwgQfUyWe9z1XbpYiswKizLJTuQm5vtQ7Q7PH",
  "key7": "5MDEgjsTcKtkgXNctFfhP4xMX2tVmXF54yvwGgAZemxaQBnMvqpv3kBkBAuCKRBmehM4gobo5j9qx99mwKTBXXNV",
  "key8": "vXR38Qiz7naFJzJ29ZxEVQ6RxtgurFFvzpKGTyRLzvbSEXFZXVXPapjgvWWwjFYYLzqVFryLAZ5eccbYPbTpUrJ",
  "key9": "LCHJ4r8femtnhAcQ2nacTwvZyZE8F9HunRBsRZW9GGTtmfp8jVxz9LLFRZAg4munWEevW19cuzvBBq4PukW8ZBP",
  "key10": "4vL46AcSjvPrphyKAN7P2cLwR2QKUHsVyHpvBy6aPUSZBJ3FYPs18oS2T6jzCBYNnpg6dijYroqvr95UwSPWQJDC",
  "key11": "2QVnv3Zkw6yY4rCBibeDKEnBQ1ehC3StX2LWF2oBAgUvvv8wHwg8Up9KwU2Dhz52NKMsLBqxSW85aL8D4u2xGwQi",
  "key12": "5dEt4dvxz3f9Pmpxu8Wm6Pjq23TdGvdYXTma9dXvxrMp1CwG64V9ZHpPcSbBvzNYo8KhNVRCcyhgGTZCHjkaR2JH",
  "key13": "5715NjewNv5CrADwowiaTgeHH8Z6x1ymHxwSy986XUiZJjoh9NzCFzsZc1odCSLtbSkSLoYgB4pYYiqSrnrKTnRi",
  "key14": "5JNAp9Rxu51Jki2a28iU2ayhbQwgiPDRnJDw1sXo67ptMtPnXRV8xS2oJuvJ2YKiA5qNb3sFipwhk9H26rCRESaf",
  "key15": "5zYQQ6duF5Mb1t7NQQkppVMm9HwH3hseo5PbhFfMSxqMmEnGwbm2h9T1Zhwnpwsyd2596PrxVMc7KAZGRsznpc7A",
  "key16": "63jJwBnWKv12ob84EdTRUTatmRd6gGL9Kjvp24N8NNysThs3gunq4nJLFE2KsWV4AhxjBViN5XCo221Q63FB5s74",
  "key17": "4JaHNsb9YqWaBzQNZ9WL11zKRpVvU2efKbaHBYY1MiKB1PJ6u3gkHKvWJrTnpqo63r9UiPez6knLyRSDZ7nYCwx2",
  "key18": "5BrGAWpriDGfGJRpqQzDMUdYbF6aWFR2NgB6UxdcqZC5VotLMRQXSTw7nQupKi8c5N5qANTH24GnT8T9ShxeNBv7",
  "key19": "2d9wJgXSVEZtuyBQJQtcRuM86gsEdU4GLdVvFJ19QhQYg5axvJAWJ71k11C98J7UPeQUZjLpEvs2m1e89waHo78R",
  "key20": "5t35nqMYS1zxaMiSH5pMnpxAvcawX5fxtrigvj9XnFVahLLo1a8PgSJXngNFpQWv5B19CAB74FWNPCc2uaakmf59",
  "key21": "53RWciGJT1XZULD7NJ3zpNGcLsLU8x3UtdZjRobb6TuxHvTXcdRtUJRekPJ1edcxdH6ur1Wzf6UcAUw9tCX1HbZC",
  "key22": "4QUSN2ZoK97wLv6WeMKB4guyxFZASXFeGWWm8tTHzR7uqXQWaA64o8tPsyCVaAE4btFVUGQ2s2yqieAG6h9HY81B",
  "key23": "3fR7jZ7jEyNoX8csPWrwR5YBao9Rtmr4FARRQARZ1EhXsKTpBLxuPMsh5YLdy82sZwTD3bJZadTCrMAGWXmYZghc",
  "key24": "3qyvKcyWvV4YCodxUSAj3o4MXBtpXrZaZjGYwHYcK2ZrNE5ogVfisBC98Uam5E27Y6V3hezdbPwxVsvvsFajB3Fe",
  "key25": "3u3CiHGADCnHbq94oama3nvK1KZHsyNqQQUsto1gaGJ1GBbJmXfDNChe77auau7777aupFTzpGtxBchCDXQCcfAX",
  "key26": "4P36jXSgz9WCLASEsR9VzgP97d2GWcnDBfmeoSEVzYDBi8uyfQmRUBN22jE5xCw6PchHweomfUWvwi3YnKFRzy28",
  "key27": "gGSMbPuCPrsGE9ALmvyMMiJ4GY246EWSKznifi2qW99WzzmCUhFH954W6eRssuPqqcUYc9o65Rdc2LJFtFoMqLb",
  "key28": "5Rcgu9Np2TCjQQhY7PkARfJmSJZ3XRv7QxDZZvfw8mPhWqWr3TAWvGeP5mBqEodkwGBWnXMgiVuyh6rTLdRYUQmr",
  "key29": "LJUTt8EGvQuMv4xmbq7bkhBdzTBCWi7s1qtNaaaYd4rvAjybr6G5gF5rjRKASchZpxAUigFpCFdNUfqVAeggXCC",
  "key30": "3DznHyYo9qm7QencysEK9zuzr8ESfsCUEBLefp95Ge6fZPFc7sqAog9xZPfJMR7mSXdZ4KwtEnxLv2nFpAPse2Jy",
  "key31": "585d2Jvr2Rq4nHjE78FN1MNmx982e8srb72xcoZBRLkrWBtLs24PJJRNdQwscRNt7stpVEfzuyiVVmJuuih8o6mQ",
  "key32": "it8KqDGmmvDwR74oAPMY3LkZ3HD8ianPP3UPRvUfAREB46pUtqyeYJtMoxNTPWqe3SSKm8tQZVU4QFsPjXKxPEJ",
  "key33": "qA4UhW8BiuQMNUaNWfJ9rRMWMLKDro5JRguULrrsE4U5fU2RDoXMZcjSmwb2k6eyiQJR3gHg8rVUNyoDgfrsWNP",
  "key34": "2ctTeXLjYNj1yr7W3MKefQwAgZMztCgegcqo3WrzMxK2dxCwrdTUmSFXUR6xWdZen4xSfdE5SK9KbufUtfvDAKX5",
  "key35": "5YBpdTmLbbsJ37BRtnPZGfpho4jqUkrHWJgqSyoM4aNN7ijpKZwgjxRYsK5JBQ5DLwFbk6nLThR39RqycSLQYTRN",
  "key36": "3N83RP1z24BezdkZLoNT6dZrPYpmq2mKxm2i2Jjxnvahi8pj7ggQHWCdrprS1uetRE8qTFWBx44Pt7oaLcdfkDfD"
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
