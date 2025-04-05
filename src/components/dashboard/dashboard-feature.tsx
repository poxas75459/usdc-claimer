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
    "WV95Bh7g7AdttqCB7mt5jSvfnaTUB4eT7XfPFf8qfGu18YgoZVjEPVPn6M5gqomE47Ak1zqdTyoBK59WPFhjy3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29JvyQgpBHir4jsBYocApvmRSTzdzK8XRm15VXKnUyWHRD7ikbkjHzbf7CfpRrRUtqqZTTJn9B5ZF1JMAMAtrxhx",
  "key1": "CbMnL5JSZqCwFJe6KTgYNvL88qHVkqmHyCBq9oU7biV4Xv8hTPnRbrQEyJxYtvbirVkyrAbaSWF35CqZhh2GbCJ",
  "key2": "Q5RmJj8jPFQSPyW2r4W7sdtfL4fRhjSswyazjfBaESyENcQDaS7NDtjvEQAZYADAr1mVrkqWMfB63XzWfnoMm8S",
  "key3": "21Qj94HkW5wQdwyvD9aSrHCg71iHcRgMrQeacerXfWUQeQBcHAMpoWfjw1jShtATJAUAJQydppCbZrpsUgNTKvWp",
  "key4": "5yU5T23y4yHZPgrywNnGapPxTG4dM3sJFcs47ZKiHaEaWKgb3HChprYArvx1GwcwSMXSVkxT6ojNWmCDtX37B2vQ",
  "key5": "39Py8zwCSq4KStsLVG8pELaMSHrN7vN196tY74jEeMq8chtiSSc55ogjAU1geBb8qL5GXfpsW7xkoPtyAh5MmDhQ",
  "key6": "3hd3XYvSzdoqkQog8vMKL21abaNPjgcVh2z9t6GJmSU9ENKdLhUwREJSt1aM4aF38V1h7cbshyZyX4bNrBEqiDqF",
  "key7": "zzkUQKxxFbKbAuHiYgP5azqLjgQ5izDBWDK3P59dNVX8Gm4s7JvgYFzBkp8qtBnjsJxkcJBH3cFrUGCGpLaVHBC",
  "key8": "rRuYywHjzVnn9oBrStJEgr6YbupVGoN2UbrY1g9gzkcJt2SfdoHgK8v8ciiFLw4h5jpJGrGhkpu1hNqEENTQvzJ",
  "key9": "qMe3RNL87R1jJXn4bAdK64LKUyoti7C5Qr4K4YLkJAnozB7ABrskzKd9pFYtGQHX62MPXhwu8MeH84PQn2fCYWr",
  "key10": "3uz2121L1sBaoMaj34KdV7hSAmc8yQgbPQnUBcdve68JYfTPiEiQBe2M8FYBxWdvoW9qxLCPDwEx5o8EVZSP4VFi",
  "key11": "32wPaJ1t2mB7xnH3k7Nbsg742TPr9yeLoV37HHAzvXx2AdvVuYQaDbhMom1Ukcx2taosWsbhuqr5rp8TGNuG5XGN",
  "key12": "3ai7v7wCLR8ygWLP7DVsjHZ4UpHqd86CGfF4YGioGCMWfxt4KpitfEpLdTU23wDCqXMYR8vzcmepo1mND2RgtVmG",
  "key13": "2fiHwkj6b8sP4WMqduobyFw86YLHegfTz8BoqGRNYJfuubJo49jkQEECXeNX8Lz4PaaoUus5ChyMexkyLJMtPdvz",
  "key14": "4m4vb9pMWt67QeV4c4o9hX85KQahJT923WioPF5J4TViexcvzzm4wChPTfSWubveNmFizgexwPgMV1oQiBqdqHJS",
  "key15": "4BCEa4t3dbLDo5zx1smUoH5zZ7fN96mxPSEvfbaJJHi41z4FSRnu15kvtd3QfMkMF3Hp9ZvAe3NrS9d94FUrgWQd",
  "key16": "2uWVX91hSQtdBod525mG3eziSdxRvevbdqXUMkAMqSVxGvHRccMUXbGJKtyPjjE56o7BkYSMLfvY8CEuxCF5J8dE",
  "key17": "5AstSbxvsRLqGkvCuhwuj1YpNqu8Q6AdvQ44g6bTbLkMqxucvM49kPBjfEz56bTvXikZRdn4k41zcJbbboFwJnZM",
  "key18": "5Npwv5C5btbFKpcyFRH84s9MD75mwsTZx7wMQQhJXtJFXFK9Bj7EayC8BkHeMje1gsLYDU2VjZRdo88xkMCVuFH3",
  "key19": "3jW5beJ3VvnpNv7TUZMdWNDyHFesdSCMzvxro6JVeTVMwWJ4dfiw2JkLTy4FjThQTefT1iDzwBmkeUaQPju9m4FX",
  "key20": "4q2kvHWdYJASPSzWJEmmsgiVageh1waM4AskNidkGZMutdRL5QactpNmwKNqrB9CfrGo2pHx3BY5mySesk8UMYuy",
  "key21": "hbFzn6HjgcCHvuHbbE4qKLAbMX2KbBfGAj9BcVeAhMKirmCCkUPfez4YHwBVQEn6zZfFPUVkqZzHwsT5DuekVyw",
  "key22": "2ytx7JYT6uwyEeUuWQSDeYCMEP1yDa3j134gyjFvTtFmUx8AMNqnXTUqdsxvFCas4rtCKuoQqp6pK7ddnjJJBXy1",
  "key23": "2bnvuas8KZcqC9vmLGFb2G9uB9B9WEoznQ6JkF91dfa2pdT2dqjUmyczTTdPgxqxQZssFrPXgkqWsRC67w6T9kVK",
  "key24": "WweMm32MjrQ7Xks27Lp3ymAN4bLxCkgCKQ64X44zNXm4ejR6r8g8TFWtTonDvGghF5wKLkSBHmZ6TvxAHo4zCXi",
  "key25": "616zK61CGspjxEkYVfL8q6c9fMYQhN44xdN8QXwnhGYHxcyputnsGcC9bVRcwibDd7Cb1UTyqeM1LQFdRMft8Tc8",
  "key26": "ux4tbJ2X3ZgsP4SrbFoLJv1gtU3vuTZDjw2agjadQXcq2Nra65Ac28MgtNUku2bWEM2JVsZsTp3Xv8m5wbjPxa6",
  "key27": "4ukfR11s4BEi4Jy8rS2T3R96w95Nj32cZ1MJGY7WDdhV12tfqa5o7quXPyQvEqSsgwhXyPWZoHXRFn7oRwTB8Pc7",
  "key28": "3Y7sS69C2vdsq4KbL7FyftQX5ie9y3fQa8N71rFAZMtRBgYrc8ofYuN8ZicdV68yQziKNMdTgXPGVvcPeVZ3dioM",
  "key29": "5j5DLhNjs9s8SfUWYwhLyiDiCHgHdqwcRGxmmLNa6VvEnyMnJkouiVzKZ9gbckRsz7nYBxioefRR69xKWEuGj3sT",
  "key30": "6wZh16Jym1cE9p5LYSibKtENLUpFANXXDpsGBPzYonCuvKbWiH7wNnvhjTqo3Ahi1AZjT8gNt9vD9KSkjynv4d3",
  "key31": "2sz92GJCF5a7oPmyq9ckNK8G9SkpGnT2RUov7UAxyaS4rwYkyvdLmTcuy1KSbD5qwNXT8VPDZDAFYRD8N4ZqyEWR",
  "key32": "23axA25KnqBPvpAqrapBtd9Ms2TY5azYhBQrF2xRnmvq6HMWZVGaUGXTGc8N2bcAwFFvpwbVwC5orNGfUje6BWWW",
  "key33": "2YBYpQhRcNWUp45DwECyAQB9sp4MCRzLnvoEFEGh4LHsqhVnfSpfJ9FvsD5Z6L4Vi2ugiDifqRScqiUqdvD2cGCg",
  "key34": "H6taKS8HaZY4ZsTnDGvq6EQF9FdZxGRGpQhVExm6kAZdazVFPYKb3MdK9Yrzn6hLPEfi4WQ1xPxdRJdarXDUozK",
  "key35": "5QzVMSPegKAzDg5HWBtaapmcb1UTJ4PB8sYnouAV5KFr1hJVekGumzBNpphoX1SUAcnAYWYiMJSKBbtTguTPtot8",
  "key36": "3VXsx3i6GaXZcaN8B7kJ8iYA2fARsoeTEGu8TUTJHFpA8DsMTmjvXTzXJyTSdXCPqbT4JnGEkzQzJTdMXNUJzuUB",
  "key37": "CuDnNPR649F7Y3uV6BY8qafrWxZpjMMjWSt2okVnJCGrRbtCrMZDaKA39jKoXBkqj2WrRy9jt4crVZGDcoF12YB",
  "key38": "2wSjFQyHV2Db3HfzVNyssyzR2cdHsDCneNFRhj4MfD3Ycg4AYF8JRJ3hoJJe4Q1qBvg7NjppiTkpfD7kLetX4npi",
  "key39": "s2b7Zk1tUf2Cz8Wi67sPGUfMK5PCY7gvMdK8mYxXt6FZKAB7qnkbYpzpTHASyJqwQ8FoLVrxrxvc4B5k2d2T3hK",
  "key40": "pdfrjYNUwtCvVr7e8CwBAz5ifRyizVcFcwnoPA8ufTRmqoNqESSXFPrvbrpKpxbb8fnzLX4yeugKN5q1Fw9DXtr",
  "key41": "5E3o9b3135jYJw4c9UpxfP8gpy7bHEf4bg3xf3yphEihd2kaaGAJNbBwDBXn3LSnoJ35pvVCws9V1vDDdHRZfb7"
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
