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
    "9BtsNR225itHSaJHhtCxyQEcU1KiARuTLj7EE5voJczJyJQ8ncoAVxH9MWhag4r8tpR3qE5YDZeZe9ohjT4CS2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j6yyFRGjm15zrtmmpbRihTLqJGWn2W6SJmgR5tzHLLY2oZrMzCp9mg5rpmaSEZ87gPpoC3vT6423wKW2423WDB9",
  "key1": "3fpNh1YAdfx3kw5scxFEyq38FRPVStczJcz8o55pe1ckxTZxDmeWzQTrnHkFCjQPLeUyZDKNqDo5fxvswBkLigGj",
  "key2": "j8J1nxCxTazqkVek2PXnkzYq5ogCr8uWCii4NPEQFRPtZC7ohpRuiBmCGw1QYVHMfsGtx8kfBmmWZTLpGCnaR5u",
  "key3": "3JNkUQZxGAG4KVGDDihfyZRrmfYN2LBApPZSmnHMuW4xppka3cxzNxGCK2hsYJHfWkfTNaGDuasiY62JnZDfGvCf",
  "key4": "w83DLae9HfwKSxAz7LJUgU2DP7VBvniK5dHQR1AEiTrzi5nEz8R22bFFZsAGyfokT59PVWMd5xuyRJvkK6AZfxE",
  "key5": "4a7dyrtrCgo4QUT8qX6DRvja8CiriquUfQR5uC6xuwZLitFWRSg4V93mpe55qALoRFSbdDuMw1tNHXntTN4j8n5w",
  "key6": "xdjMBBQiCjAppcvdPR87RNpne4NbEytTX1mVojmKWNnoqzi7eyj8LEWXEqUbvgMCVNrnFGNCDDr6J3RNCPnY9Lw",
  "key7": "4Mzoh92sdPKEiutYVqoodXiz7r3CQE2iPm8RcCU1SKjjFj1FATNbmvwRZ1ety7KpW5QNKoMaixuM2zu7JoUd6569",
  "key8": "2MVBcocfnDNupcsgJz2kMXsfr4zMhTzsJv7rMXwdoyrRPF1Jj5WttrdVsyrzphxMaPa6tWT6Wxyhx2AgyFGDgZZW",
  "key9": "4riSGuBAMHAvG1MxBTT2rSFPWYdpnJGqXzw2xsRP93PtnC6TixETBqmws6wy2erR4G8wKnL9RnfvQ9DmAQ2ThmAY",
  "key10": "5EBCRh3f8KVFyBrzueq3p8L3qo2EoMY8f662C43jTM5VJdjnqLuNvpFbKRhAoLBHAE1Gf4oigV2BX6dBpAdFR5ev",
  "key11": "5iNT6zTVoLaz9uy5HV7eMgc2w5Z1EfyqAmoGP5EBPJZ8mTYztYqsPmS3BWLbeABFQcPgiyFncWVgzAH6G2bwqU7S",
  "key12": "4ri2qqaHVpvorgo5DKRpc3hHgHKyXR76dG4PtsxfXUYTz4NDzeSKUXrgqmCKsAcxUpFhZVsUrfXeNxqTTUfbMbYm",
  "key13": "RA1GSXQDxzx4F6AX4P129s5c3A1VTJTktvKQuLjNRGS2YDYXZpTbHdCgtVfbWgFzb3hPuJaRLQVDSvf1d39vgcp",
  "key14": "5h4ueT8LjHQuQ7dfYZETyUoDx4nvkCGL5mAF5NVYS63csUqWacEKV4ZBrn52mmNv3PgVd8au6LyomAKkqK3jGD9A",
  "key15": "2H6Ls2DnQDoC59RwqhdtdhHLrVzW12Et6Vrw261zxTbQ2L3cuYG4FBcKeZbhNWSQUpNS7jSWdAm9hbbn9mD5grYi",
  "key16": "3u85CFn49KDWfsTdS9LneDa8CirFitP64785N4nFJzTxzsWEMZpEcr1ToHesFGyLJ13b8E5qBeoEjjo1SGp1qzAF",
  "key17": "4W6V8pM1nKSuQJ3RqoMDabRkjbkhiE6VRteKk3Xtdwsof3gvBaNB2QF15XDDPRggrxbTXkSvQDehX1UgMNDDrd9R",
  "key18": "2EQhXfjXS1B6ikys2wHXqaMUmXJfizYFnD4b5CyLQpF1ei68AxRg8FcbAvxmDHhh1DmGS6EHNoEUhCsFePkEFVww",
  "key19": "5xxtJ9B5dtymqgA9Lz14gafCN7uUrbT1cgwDEj4E2G9kWkegMvnqKRqHFEGpsu4Db6nMj5Msasq8GeczCoSSS4wF",
  "key20": "47RzdYnnEDd3fkZXaqWS7cFHq97WJpkB9kxifg4iW4e3y1xZqfcoTiUKSs412fJBHy2yLhUYeJiC3xVXASGRmEUs",
  "key21": "4NbCcKEbGgdJvjtqgSoX34qpACFCTwDbBrvWUekGfDLzZRXi56jF1Jwpewmdmqe1tafR5bJj61tu5YU1o2smd1Zt",
  "key22": "5t9T2Q4CfnjYcJGZHnDhciaXHxtR9TyG8prxnwBjpGNPt3vRy1YQTW3TAXY7ae9T97sC7Ryi8CtMQYdA3XnjUwtK",
  "key23": "35DipoTLnbDvHFkmskZuknNEokjiJhJu3NpGGLkVfLGYqd2ppPCtYwcMkmfUouYwXL7Gx4Prc8rsJ8pbFdNf5XTP",
  "key24": "553cLzU5Q7qWF5P91FBp2UHdAesdzyke4pzXADwvf6kk1SdKH9UmcDB1BQZxZHZgasaHQjr2pyG8jqzeaAjNGXR6",
  "key25": "4iTbxTQXMGsW2cD2csihsNdJHTYpfTiEMkYpcZpNkWvwThsUNjHMaSVZbfidPtvF9VSCskby8rXm7ZLD912VRCss",
  "key26": "YkCKeQmJPRiqSqgZdSta6bNrHaDmA25VUMjQe7ztzuovTjfkjajJGnLMAPRLVknRig86tbHmZZR59L5uDp7GNV8",
  "key27": "4iAW2gCfjLE42japXWCBE5W1SGDtHbjhgFYSBZ5Yrk1zwm6WuBVDRkgKj1xD8RW4ceNA8esEUMegrvmZQt4qYxYG",
  "key28": "51WSGHD9YsSwMRzEe3sViKULn1dXZQHDACwvZciKUhFNwLkPfcvJgUK3HPAgi5JaYTd1u1dJdPDhYNMwUspucVTs",
  "key29": "3yFCRxvuD63dQDgocMJmNVyWtjBL2HeT297Up7yLKz6xhVPurqsyc9VRT1ecaFLbg81ZY9tusQMCFUgS624R2bhG",
  "key30": "dt7Q8DVw4WSahXcUVJ5HXFEAaUFgAn1qud6V3NtMFLgvnCQwepGoFNLb1kcfGV6oqfLu1LkmSh3nUoY1QtBq4g3",
  "key31": "28Xt5G6BxGASRGJYnBZFixj5ZjrX8xq8SFt4S7Bgmq3dPRHDGBd5BYbV4cHwHtEBzn4Fjdc7TKWkDg4iLpKBVYBR",
  "key32": "2EB866CxA6FoWDXoqBUJ8keBEAJ98jveEK4RcNuS6F6vjW97WzD3ysiUop5kzHq9XuWp8SeLBV7EJbdLJCHiLRTe",
  "key33": "2cajLxB7Hw3J3etfMALC4RRThCXgZtfTZfAhTkXMtFfuw3M2udDzyKbbagytfUkhY4sF4Ejer64jftCMiTs96XSh",
  "key34": "53j7R6Dabwgt1NNF957xk6Kk62XNJEpntquXHujaUH5Rp17iPrkrHdNChzaQVb24FLQiHzEqtRWwnpU6bUsvnoAk",
  "key35": "5ofyDGp5rFDy3kTjagVtW2LPzcsXpc6PqUr57wEEdRp14ruuhModgD1c2S5t8V3BxgXqdYsfi8JJhaNkHQ9Ktih1",
  "key36": "5mgXFSzSfKm7px4ccvHnGB6NmjLyQXFterhZbBCqJ3yUcZmr3mow55jjipF3Mos5RHaYerbHQpTj9Dyxw1wGL6VR",
  "key37": "2fNn6YQf2An4aXskziHKyPfnVf7xnMVviBziUXEQVg8xAsKrVEeWmDhGTnqvNYqhPCWFetnDHRKPcAYiuRhHjgHk"
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
