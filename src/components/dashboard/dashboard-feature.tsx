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
    "2qPsczL5HxmnMHS9zBe82qCXjsUUoUXE5yyUGkoEGSWT5aUmYqHvYzYS2uq6i5pJeL46zuU4wiSvVhewqfjtEYY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EwPRyAvvdfVaC4a2LYESAsZW3dnmy8Wr17n5NL81dyp2jQLPsmunLJ6Qgksy7MeBiuoAaxuHbqv5ioj6JcY1aEm",
  "key1": "4LPcWCw2hawi7sQy7sDnBvm5KdkpPAoufUyqYu5oteUVQ1FySDxTTK8aFHZmqDqodTa6MmRsBcvTqSBXeHfwYyLV",
  "key2": "67Ebh8AFsPDjuGhiZsSe8Vd1GfvAtU3fmfd9QnRFaiGFk7zFRrEM2PxGrvBMkpGaNrtktHaBVyqhWcX8ns9xZcYe",
  "key3": "rwxMJsuGPjMTipGpHQ5RTbgZyQrdgXSKURMYxs9F38cESapmHHks23CWBZfXWRVFRkAtKn1dBBNdKNqbHXexVqi",
  "key4": "JuZanVL4MCR8y6YdZf7nhrmewTjTKWNTUpkw3h3KHdPNCaNUXTk87zYckZpmjzTxgqjCWqGww68wAQyc2hhDtHp",
  "key5": "3rSHSsBjkNoz8RM8xyU7jUX15phuaVYewBbxc9AMGodXnFBiCEwg9Fc12vDj8oj6cbWgiE17Co1wasqksL77An6N",
  "key6": "4NU6NE9pZ67HYy6A1ms92H2K49pRk5MtXXUWNAGRNhe7NEcUm3pSg7Wz46pJYBi7o362c84wCFMLZTDhL6kS1xuf",
  "key7": "5dc3XacWMcNCp9PQNCuWxVBpriMHgtcEe1pCUCinypFLp1oAeakz1u3pwMdm5Lgqy7NAFuLHacjSsYwxjkH1Lsqs",
  "key8": "5vKSXkThbuVbpJmBBZSjsEmAPDhdxsy2DSM3tVxVBRLhDr8DhExF4dNhtcTE8ikgqK1DpysPFTnUpboVXXQ5rrsy",
  "key9": "2pSTRfm4RDE6WDJ1bFBJkjVosB51ibhGwqrLdLdMT46ude4oyzeGsrYBugCnzQRAYssMBCJ8X1WjFctCA9budCtZ",
  "key10": "3AZdvNHypuUU5XNDFV7MFjfDj2tQndJzJY2sz2Zp6wfneWkfwV5Q1YMAfkMkJiLuRkLCBxpEuopvyVxfM75UJKnf",
  "key11": "4M5tf5VbzXeo21eAArCi5EvttuEbFxWQC9mzP6FtVAFHyRhMpLp16K5XGx29m5QsorEPwGF7j2WcXRYLbrm8dK2r",
  "key12": "32iVjrVd9Qo1R8M33KA5qxPhPfJ6Kn8o3j3DfNq4dUESTFxJTGybydASiYmhKz4kTgF1b5HHtJgtQdwM9tHCXDs4",
  "key13": "5N7EUjQREomBUMYJ7tchtGtmvUMHXxheg5zp5frQhaYcPJuqJGCZRSdzyB3xBuYMS6bB82UarpNApr72ZRVB9QRr",
  "key14": "R9NzaGdNqBQQVLfsoXFjm6Hm8evD5JSCeiW7MJVzzuKwj5BpotjUwQsQBZxrCgVzBqWMqfZ77GbLuJNWvu9cPah",
  "key15": "4ix7y6vg6hYC7d7jhjtpr5ZN2MwK1ish8JmLHKbEsRbyNnwCLGjwD5LV96kbBDeopJMg21F285BsVkuUpZVM44xx",
  "key16": "aMcov65QS5D9cmFfkz7JQUjcXXsHQUyogjaBDe3ympLLDgUmD7XZVY7G6gWbGLEyUEK3oG9Rb2NDoxMqpwLJSna",
  "key17": "MQ7jSEwnLLixbKb9EYiZKYS91WDoxVg1d5iXEQ7SgceewVfkk2GQbM1dZMfTcLqdxbRWEbmxQyhMKoBesCz94j6",
  "key18": "5Ab9sXFSp21beL4tHjH6ZdkHkk48hFW66ieECjxXczzRnoLFyYwA9Et16aAr6ab5ma3d2B2bLmYWvVCZdkBcPjkN",
  "key19": "5b32GiUkGwverifwnb6xM3CkzGthKnxjwb11FEknr8wdKpBmEruZTfvFrJdE1kqjWMxjiRrYe4F13i3kdCPFSYnx",
  "key20": "3Lrn3AqdDiV6PUEnXbaSMdNJWkpUbi5x8wRdW3uZjfL3W3QKiTcEuxfwqyuQWpVWSPrpzaNsVaFpDNrPbPjMkvyb",
  "key21": "5kc4ZUx3psNQmjYxzifXLSsd12jFrsbxydSaagFV9MiMq34BknoG1j6druvSgeEwGmW6e5LkBULrmwNR7a69o3o",
  "key22": "3bJYQD9ymRQVt9S2eMy1mqmzFToUu9FWRhGKKnh3kCong3wed2r1XK3Fv1UWxX6vGmgsuWugmPdEcy7G8MsnrtpZ",
  "key23": "2gsGJFFZSMCvmT7tS2DxVD2nXHL5oUnESkr5aPQuyBNntuaumNKZoCyCXYt3AkHiEgZdaMRKgZqrauPebLcszVMv",
  "key24": "zE13GkDvmsQdmveWTCKaSrgd1bYoSaVpdg5hT2U6S4Bk3gj3LBri5oeG4MxgUFs72Pj8NT3yZ8f3ASeXeY6c5td",
  "key25": "3zTnivwXmpuEPJHxynDsoAEuMAWzPhtW3RwGEFqwybLDTDkyWVFPbpWJVVDgad3GSDnoBiUetfoTZLZt6FfN3dUh",
  "key26": "54Y1VXt2URTQS16c7ywqTKHBQMkz6KPStX5XM8ERhXmrg8qzaRbF4Nq6p4UcD2oRrNWGosjcD2fCoyL6QetB5Ae5",
  "key27": "2icbCgxj8RiaSpjRSPd5Sn6sqP15yVkdh6Et9t48xzBfPp4cKV5Gwc6wQw2ZZ4HTQG7XvaauBum1UtihPGmo5JYd",
  "key28": "2SswfhfT6GBLCoCtxq8G6PHuS7XbAKELEWUdBhiMcxGiDLwLpCyPPUvdBStNrA8CLswvyBa2uKUrYunjWWLyszx6",
  "key29": "FMMiRofTDaBuF6MaaLHe9xP3bayg5WbGi7j2V1vL7spEq6rGdWLhMhB2yiRPGNmHMLMH5W5mhzujwDJ1z6zaFkb",
  "key30": "48NogbrHfNnB5mPtBaUQYdmdAdV4wKTj9RSKe8x7hw8cxBuRrPSW5VcxDignL2JchM1nH4cJ2HyJ9mpYEdJGDsT9",
  "key31": "4FoeXF412eyKxzxpPLBMYDmKwrZFddjNHpi32wAbCkRvLBVmCobjbTxpXrecTouAsWjauDticm1sonKmoeCdHSnB",
  "key32": "4Skp26VeLFXaDLCqXEoHPmB1MBbSVBkcjKSgMBM5HfRhAm7jxUMVFKnG7Ur2t6BnDDtq29VjXeS67TmL2RaPTWRh",
  "key33": "3j3QLrMcCGs3BdEzyrUY9Uj7P8Ux1SQMRUkQpnxGVPHDH44cCaStQDqVTdwfZqGwFnAoT8aPVZbKD8yktyC3QsXH",
  "key34": "xYxRVoMCu66wBrp2iqHawzsop698FFpLUyNcy4PyZEFfSAUawuaVsaL2ZfXMc3naGHiLTvxKMdcQrFTP65zJwja",
  "key35": "3FkwYxzy4cAjShSHVKnCivKE29UUtsEyLj6aNRv7NkYe15HCBYKFSknBftwN4LjVDYahuas2UbR8KQ2Aah9MDL9j",
  "key36": "3mENdUcLiykWt1UPEikrD3TT13xDMG62sFjfqp769e73s12oNF7kpFbLa11k3CcrBz411tGpASu1iXoonzdpZNNU",
  "key37": "3wWSSzEso1QwHFU54tuL72fa1UNNHADPjAb1LyT8TEfvReQMV2QYTvvT9p71HV3oN6haQNfjEZohzVQ8pztQVCsp",
  "key38": "2ytpdXNQzzFNxk56GPRzph3szm657qi9REqxkGbwYJiWD75Wwz4sxrLonwMChP8nicYomCqtY8o4iBVtCVnUfCu8",
  "key39": "4eYTYfSqb5cxNpatQCx6cRFrbgDnZ7bjAHzA5eT111tpQqSFHyhqmuDWNTFNbsh6V9uHsYMuuMPFCwbjjENRV7rR",
  "key40": "4RRZTZ2AGR1Xn5kQTM9a2mr9NkZttSFsLjAsqTsvwjmiGSJ3M7JVkSbKwX21qk4DwDwWgi2xtgozng696YDvnjzy",
  "key41": "q7evU2DCWh7oaQeAvBF7VTHnzr6TAjdYXb4WLRjeNLgdJdcXHjo7ShUafjL9djKUkjiuqJveXQ8oKEnnFnQuSEk",
  "key42": "55QxKs9DUQc51CpMeKxctHszZbzoXD9v5rxPKukAbbbpHJke1pH7qMnLsMJvrHwHCvf4syXQKxv2xFR9nFAk1YCX",
  "key43": "SEnVw36cYkx7mwX5vy7pTXxKJHgvCoXzmS1oQHGZzm1DMSYbdW8Nz5CPLBDvd2zGXG2GRv3LBy3VLBqEcx2HuTC",
  "key44": "4YT5GFLuViVYMeX1pyYjz3kToxxuUAmPsmHCwggwy1cCu3YyDHfWsk1fX8QFDW9A6LPqbxiQUQ9tSrx5rjREQbub"
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
