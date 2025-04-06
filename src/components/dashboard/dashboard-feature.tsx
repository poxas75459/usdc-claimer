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
    "5kktQV9egowmTDexaToy4L35MkqDBTmKMT2dwmDGxFzvD6c4wKDufKMGaoGLfsUHx6k8XJuqrk7jJMbfPuxUhinD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h9eedtqdrdG5J5Mtwa6yucyStRqtckWv9VHPNyy1byxycPANzvB3fptESUqFRBG54b9RNq4bBRqW5Zm6ZrtTY7o",
  "key1": "5hZ1RmHfXdWJPLUBwZThvLD5YM8pAa6zvKix3w8Tm3AZFwyr9eC2BkAY82KEnMw67VNNcEKBMnRo7kJqpmxnC5u5",
  "key2": "5aSZyWjgh3XokpX3axvsciV1Jhusx8HtzZFRHnLyE3o7NEdgZTR7duK5tPiFDbKxanobxAJGbw9t95Gc4E93LHcj",
  "key3": "3wFxYk7DXUoYt6ThxZLrLpiKmrKuJ4mYg9EsHDwKPzfaAZVNnxg7xPefqjt2QFZGx8u6UrxZ26mW5Q5JXP5wFy1e",
  "key4": "H75p8X6SMdZFPCDRrURm7RssLUawwVjxQWECH3yRhD1j5XoUmop2gT7ay32uR9yWoDjqDo44GQAonevxEi9pvXM",
  "key5": "5Afc51PwCaJWnS2DaxZ2LCbXwC4Y2D4xQmF1VMwodfst7nNQky19pd6KagtsFPzJCkoKUnMRnwTCzmYBmJj8mu3y",
  "key6": "yAWMMd2nZqiobv2Y8ZxppupJgJFBFyuS9eSKmUMdAiC6aVnmq1vpKLT78yY77hPC8ToWnawSJBHwDXeAdBQSU4Y",
  "key7": "5VhExQDVyXnW9HdtNEtFMEUEcTL2q5YaFszcuhKwk5hLbywPcQJorFinJ7P4ver8DhNJsdL5rpqr6WrQnTeUmnmc",
  "key8": "3BLCjTQB3WMkjRr3n76Thibxq2X7amULyLdN2JwypCVUDtVDSFDf1QKbhnMQJqZ2a3Gps89nEV6i44PPRnLiDPqM",
  "key9": "4zQGJGhoqfpoZqB2KfPHap2gCfEaiPghDBcfAR8GrvDPnFoqK3VDRoFg76M6Dos3YHQbERHWh6qUjEtCkjpj3oyS",
  "key10": "2uEJA94ZUZdMMGQUdNtFSB4WHfsmPe31cMsVoUYCtPp1vKAKXenTMxYm6NwsDMAifKhgdUWFDVvzHZ7zp5T1u6a6",
  "key11": "5qjmKa1CEfyxxVokPuFCA9sBKVJc5YbVGGopEjUoYD5bVEg3UkYq7J39rUqMRANJrfkhzipCem2vTh2DSE1pWjis",
  "key12": "3WzxrumtuNRo387ozGWENGZAGZfJsR94dYEePdPakHRgngv63uXEkSbWrfSgXGLkyczoLXzsZrfHLMkdsPRA4w7p",
  "key13": "4X3noQAMGE6BXdinD31JxtthBaLkC4tUEYmGdy6CicotUqtGboYe1wnGy1nAKpRnotARBFARBxw5cazjJWzcaCE9",
  "key14": "5tFMaKwwVhwboPSVC2qND5oid3jA43H77JBi4tnJspsNnkXqjhr1z6rC5Hr2vmogiGgj15nyqZbTA2GXPh28fzRk",
  "key15": "C155Ztc3r2Dip2zGQdGyMnK9PN9sSYue8PvWzxTgnrkukCMZtE2Fz7ocgaFNC6ma5Y5btXQVjARpXj2P3PRBvqu",
  "key16": "3W1wDMkMYN1vtFL31BP3v9nvPHevfKLQfkJHQGvTJiEBvwut3xrpUx1erXtmJtpE5sZTq9abeUorku4AD96MXdKz",
  "key17": "31ojv1GNRX6Q7EXR24ngCWehyTXAA8QaNb6KqcaHN4Ui9EfWEJjuxBsERvixTedeiGpyCj4jcw2MVGUHwuXYh3QB",
  "key18": "2DKt3nBYTy9nJgXLss6KaLt2Y7bV6MCfHW89dad3Qcm1NsgYK1MAUDVar37tp9Cuhv6m68zoP75zFTCcZdCqDLeu",
  "key19": "ix7v8GaDqG7R586BUuBD8JaTpdxgyrbjsm5r3N4TjYYvbyawYhj6GYNxGPJNzRHdqouk4wmnNSZWkzDTi7UzmEy",
  "key20": "57uWbtjsqDEhWzgFfAmErKrZhP655sGa18o64wSf86piY2E17H9DsizDzWucJXTJyPuo8sDGwM2RihH1sPhTfx3Z",
  "key21": "3Sx61AnB9HwuqwNbsyhW8dyrHt7zJ49amBmLsD5p5egbH1N3RAqxNYqagzNLHZn3JrNALbDzy1FNTd1HtpfEEGiy",
  "key22": "3s2u1FuS4gwrn17YxzbSyhdnVcgmCNMjftLUrZYVx249cbyQLp57qBbpcWhkAcAuP5RpGhmEog3j8cg8x6Qy2aHu",
  "key23": "2iq465ZtjNLmUM5iuKJJ7h2jjCtbuWqWJUGz79PSyEt9bDXeZEQgsYPiLZSxD2A7zhNTN42VSWxGbzoT3XPttUm6",
  "key24": "Fc9YW1FaMnFc7NXa8Wy22s7ku6ud92B2j3rSG893fAmSuPPPf9eNBzosJM9qVMo7Lvi2dHtfmesC5SNAmRdEtKA",
  "key25": "3XrmWj4Q2pYo6NJJLr8tDJWFvvvmmazagL9fT9k2vpVSjjtXfFbW1zxVbPbbPNG5DYZQfqqEKbe35C3SLvjsq3Zv",
  "key26": "3xA717et9Ga1e6i32pG8hHSjKC6ZWAxdZS3Nu2Ki7jTGKfg2aKxLSGv6nktv45pcke5HyDveJbU2GmeKc8WhGiHM",
  "key27": "28w7Y8ek6A8ZXSc9tre9SAygScA6sKACpn71qYjcDBuVELqr72Hy2GRNVSNfJs3H7B4X7vfrjVgAsdt9vVmassAw",
  "key28": "5Nofs3M6iwKi6Eq4unHsbLQYmWLgANxKYfxkRHQ64rraVkLP8BSjRaSyxh2Nwk4fjvZEy8EHxR8Lsw6uN8VT6VP2",
  "key29": "27LBUp7W7RLQLUPKQ3ykghbFdJ5Ciz5e2RWUNWmrnAPP9z3V39eGQ49b7HRLumyqQcWpCvhfVHQP8SRoG2CgmHfJ",
  "key30": "iNTPpdAom1w2CkhKASgentXAV28MFCmZLKYAr8snFx1JSsNkF2sJiT7vS3mKBAzb5UasQPi49QZayFMmRUPqy77",
  "key31": "3sQ9ewgZyFGzEuMB8jAd1qgLwuoMcKx9bVZ8d726PmWtpjuBC719dvgU1FCS837BBc373B321ZJZPE5Q8nqT4w6Z",
  "key32": "p6BQW2BfmM6riYqVRAAKeMvyottjemw91TMT69mhkyWz2xABMbXYycei1K69Xq3cYHkVcfbAKqfUrjwUXG9ZwaC",
  "key33": "4aQyjeL2nHsGBUP7NonKcKZRSk75shbKUWxQXeZhZ9vAiKswCacrEgz7hkwE5fmh4aGsqxeuMp79ajrr6G3WMaVS",
  "key34": "3RCFiZYb3X3CyaUJaoF7HCagTaBvZicmjwokazqF4fBtdzZ9zXNU88XxNpThJssbVHbS7ggtUpLXNopb1KEkeujk",
  "key35": "V9oPzUsD1K4VgRhNapyF6LiwxwtSdYe2CDdN6or8ht6oycyxs1u3QkRXbM4mpQhDkLHZwbQRv6kS4GsD8pJkxcq",
  "key36": "Lisr4UFWrqtycDLDyCZNVi49AExSn7FMrUrWaUSthUpdHgqSQQdYinXYLCkG452rnPpr4vkmyvLeiMGDpfb3hpE"
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
