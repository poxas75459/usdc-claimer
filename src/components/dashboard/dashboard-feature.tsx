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
    "2JLvCVDUA8j9Xseh2zFjrAi4ZVJvyVSTNZMCJxKD7nb4bFBPvwpwmQchJeDKZzfmAJNMo29k3jgzD44uknxQh3A6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XLUZtPjN4DGUq2WMU7NGJDfA1oWVgjVsHexQoti7er31yU55Hwquo7P8Gh71pGXJ7dWccMZDFB9hLSzeuB6YWRv",
  "key1": "53WjLLQo4jRnM98YWjVCt5EDiJCHVyHqMh7hFHrXKQEz6BuEfoAE6pjMspM1aZa77buNFkYGdrdsBxH1RUD3FMJt",
  "key2": "3CbEGsp24hcKnet2Tj6iviaWDavHePnhcoima5NkLpKrkxffYjsXJm5LSV4NkowTNsDcTKEhUxN7nC8eC8RqsvUG",
  "key3": "4KRVSwFRQ2J11nkTn6ujVeou5ZmxiQxSbmhrhry6ifZgNnBqtRbLbsVpWXGqUHGRq394QPJKEUJCbgLCmk8sdvGr",
  "key4": "24zprSpHT312nBFksLtJsaLUi5eVzzdGKpXvHMRCsLYPCtGN6FqCREj3fX5ySjgpNGQf39T36UmQncBubemt36nc",
  "key5": "5oUfNF6ctJVmRwuYC9BVPWeP4vEUhscDoMrpsqM3hbd17KLDhpw2svqDGSWGzJjDmHWStabNKanuhwXwgpx1dggM",
  "key6": "5jQeNazQDgh137GjdNa21npoPje3ej3xQhF8XUZb6XJh6pzzHi9cwJqo3i7rTTbiKGPjAovmkFEZZVFLGi2gTk1i",
  "key7": "67fCw62wRLhVftMt3GUZqaBAEzTGKVZV9fGTnw79BXMP9HDhAzfuBs3nqtSMHwN53HrK8h2N7R5zrrCgdnmy4J4i",
  "key8": "31D1J6fcz8NxTXFoMiGypQBTKa5CNxgyDFLGL2JWu6F8STkpDohb72yBskBgJNArxRh1pGezaEgoA2pUJKb4iGTQ",
  "key9": "2v4UNS5Ro1xxSsUkysoK7FuciztkG3LxFUwxozMuo7J1iDDZTLN9pgTrLXcag6cYwiVcyp9iRtMFNWPNk4DFJ8Q4",
  "key10": "3CQVv5A7JGXZjFDg1ibWd4HkeMhjGqZ76vQMiVaj8eWT3sGWGDQeforBfr3Cbiohnhf6tFDZjASGpE5bthQReiGe",
  "key11": "3tD3n1xWpEBkCVTytvAPVCmmPYSDBi2gWfrDeVBDsbBopqQzmPP5KirpajWsMRnojssqNbkJqfRTY14TwXoEYa1B",
  "key12": "zpEYeKNoFSbr2mcWigRqTJwL1R6vrEiWDkQmA5dP4bPE1jic7ne72d8KDTHxSexC8eZe88ip7JfhTS8yFHXwcde",
  "key13": "25tnaeywcCsGWo6woP8GGMxf1ZmNagg7APuWFPxAyHQUJxTJE7BMbNtGbZrC54qKiQmjwFE5V4uqBQoLPZhxoCEN",
  "key14": "2hwYvd3DPG6s6WaCCg3p4wCEmwj6RQ9ChQuB4xREZ7QgQmXBwmDQ2sZmhXk7guQ9kXSto8jKqJTp3wnwT2nX5tiw",
  "key15": "3nTgiHHGwzz9gY4bFNhZZDeJymAiTFcw6JoDjB1NxaNA4s3bshiWYQSXGy3U94hvW4nNNKcHxpyLWDyXFL7B6EJq",
  "key16": "YgSvqXRsFggtjXRXtDYe85FBZ8i1icW7gSxerp5miV1YcACLcmVcQKQbdtG2eLsBcxEFLNb4Z4ZQNHw3oyhBcvM",
  "key17": "427StJQGqV2ESjkq5BWuvbhFcvfausyiszEM7GsKmHxjDNoRot4qR3nFd3kfURuacJA6hTMXfeoSCJj5WPej3mMv",
  "key18": "5TFaJ7tWksJp2yab9ynPGQh4rrERQSRvtT8iHC7pFGsKLRfWKntFuXxNe1k7LffkuB8yvwh46CBdETu7GLfSdBrX",
  "key19": "5qFKXpd5MKYFT3up4V8KrcLk6Q2xfCWW8i7GDanPCFjNz7SPB9EBVvdnEGp6xTLGxtDGNpfD79EcGiTdoXD3vzcF",
  "key20": "2TyM4rzdWML71tPfeMg2CB6URh7EKhHbgrezovhNCVUTwDJZnJLeGhZ2GN8YeEkMi37kkpERyiTK2aaxEQDbBQD8",
  "key21": "4fofQZoK32GRMABkWjSKVKDA8qwqrkUAUUFvaJisAE5KPz8bVcHoT1cBjV564JFDXQS5BdnMEF5X2RKv4owSBBkU",
  "key22": "4QRvsymSweyNVzm9WFGEjY77cEu3VU8w7shGoUPgAAuULjJcLviHAkMPJWMysemagha356K5kjafh2MKH1o5zoaw",
  "key23": "5Ev61SBSzfxMpuPorE6xz1ho92a5EN5mcHF81cvrvbw7XNszZiApGGt9aKkorrrRGFxqLPG474X3W3xMTxqY8X6S",
  "key24": "2Ns7eNHM5wKr7iB4QSXGRMriFbySNrMGVwPuzYYHdUGcCKzXmt7TzvGWPmoFSQ88Tc9EBt7bjQtKna3FRNYLrQeW",
  "key25": "4xNZezjTVZwXKqoLTWJDw8CoPLXbVaixMrVZmKxx2cagHvYuyzrHNMTcpxGDF5oqWpH6iBfsHDHEQrS9RFTjM2Fb",
  "key26": "5KUB2Lf6Q4awgNr5hUQFvbH52NPic13YeVqtJ5K8rvmYx77iVvb3NUgdevYSSqmRykx6vHy8fwAf9vtJ4Jrs8YqP",
  "key27": "NtT9DdPA55ahA1r2dVRrgULcBRw7zpWFoDq8jaQuiBXV9sNyQjBiBZ76utEXpLSwy6oCfce1eunLv1KzcHN6Dyk",
  "key28": "5AfvYB4qJ4JU6JUsHVMMdW6Xh6FA3uTfxgrLDn6oEJMXAJy4EHmTCoYf8Emvfh1WJPPnztnuko1NKX6KJBrmRZbk",
  "key29": "3VxKZh8SogjRGGzV1sb8Lk53c8bHKpc4sFhH8cq81XszyhCwkJGsV5oBH4Tsymn4jRs2zYq75Vm4EMQU59pfY76g",
  "key30": "rcegsEkmFDBYip4VvVeas2mDynDG1mq1VcVeLjLhw2wPiHnU9ppwQcVVVS62Htm5USNixCqCrAxvgXHCxxQVBCZ",
  "key31": "3VvgJrut19VHAoxNzao4iHf4ZnohN75KexJXhy8exyh6dH9SA7RqihV1im8ASfCYMUxoyxr7m98FqtoguFEr4E33"
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
