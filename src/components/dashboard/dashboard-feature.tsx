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
    "2KAPZk7eEciV4CVMj32zu3YY37c1jFp2viCzpZTw9zj8VQkANftaHKMuJ7CsxCpbkbxgKfnD7YRwZbAWjDhxYahS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9i5w7h3kQGzBr8Gs4FgxqhbvAfFaoYRe57VaRjpmVEsXWK9ALWZxYP6fPWudz2MqvBpNTRmJLaydDo1TvsuSxWQ",
  "key1": "yhNaANHQCFT5C12VYJ1RpBY9BEkUn22janf16sgztruNQ2HXfBZkd1tgo7zvTLvzJZxtALpbY3tBCDi8rgndDcu",
  "key2": "4mDW7u64nd5YTm47UeARtKKiD9ijjfFrAdt3Zz87dpPg78sPLwFtH8j3SoDGJyXiwMsG4hVNgtejFEadkGubig82",
  "key3": "5eZR7mDxxGSiUQHjYnq1ecFA5pyrdD8Nc3kQWuT2o948XYNvKAX4zXYGB1FvZUbDo3oy2CbMfX4oLTCnHj9Q5h48",
  "key4": "4d64JnjrmUmks58ZoyJYnrdn8CRREtasQF8zSVJ1byaqGNRVSXKqszQysJLRnVSQXGmJ6Y3FzU6iRBdVGpw6Xitk",
  "key5": "mrcH6MBTEMFXLbppK22qWnjmu7PSHtAkU8sdDaK6tTA7hFcZVkxiVAvM6fmEQ57WofwTrbC7b4aSP8QHJcKPSBJ",
  "key6": "22eU2a3T4sLXKpzGSaqY89W6oxLEaLCpVrWdrrKFD97bQQcYUt8cKxdNcEzYz28xZW7UTnJMCjwSM91nDPosq2cQ",
  "key7": "3eHeSh97xwf54ZYERfiuZGRkLheWiaugbqhDf52XX7E3VMyiPgs9hgzdXtKjt6sK4TkFHC1dUyMQv9VuYdn9inE2",
  "key8": "4rNcELjyJ7cwCARNQosNjX7h1tXtsgALGGSzLhdrAkAviaYJMrsP1n2m8t4nLQSkECpzVmu5APbhwuKUavKrX5ue",
  "key9": "jKi77xtqCMFupdtXiSPAsX2rLv2DmhjkmTNU7sdSGZR1UFzdJYpePM5MpHJSvjdwdS6763KX5QnqYPPKgJvmrWz",
  "key10": "4yyRGsPKPH3nvFbsJzjaPJaxMGbNKHC99TrWwgE4KEZ8By9oBUhyYLBCoBWugzZD5koKn6aUrNXHqeSvaePvavBU",
  "key11": "2WE5GyWmB5dLCsjDKYCL2sixT2qsS1jx6uqGwi6D3G4xBeiNPM6bZnLrbenNhAMXj4bEidhKiKWWitpcZLEmZ49t",
  "key12": "34Mmz6QP2yFDqXxmH6h6vYjyj6bPbGjAenVprUBVs1xVP8r9xJZa74vKirgqxqsnFSULhbtyUbAuSvHDNy8fWPVu",
  "key13": "2o5kq7cFzF4KLRBhscrzC7QgoD8xYSTBaxuK4Mf2gDuZtAx9WpRCXixVxE2bPPEjZRNQ4zYT462LpxaNmokCQqFH",
  "key14": "3pJ7QXosUS7EfKbs8pXzJGfSHh6GoDWmFoHvS3hDY8Ej82UeYiSUpixcerJKxXWKsA6TH6AiPYG5PbgY2JMw9edC",
  "key15": "4HedpXPM3KagrnpW1TXbsTQ6YQdhdthGBiNWHenBpFQacHM4be6eXXzQoXUceLQbMowPhp4c4VfHXAdYFemajCBG",
  "key16": "3pFuXi6mjEvypCdFzqE5ou792JiZggLuFRcVmLJFxPtVzYxs7T4BAaFPpHWrTxEG4KJuePqdm55cnGPBa4L8MJRk",
  "key17": "4AZnENxaGZkinrac57Z2hmpqGcBoLYTat3ZZpE8cCFjam1cnB3QYo5TfVhJjENeyDRirRNesmwxdZwkF4uotLr7P",
  "key18": "5HcTCu3YybfBaDdRB3Pamy45vR8Wvg57JtbHMbPoqGnZKpUL9FaUkWKh4TrSTGiLkEodGXhL4GRopSRCusq6CQZ3",
  "key19": "wncBx8A3XCyJL5BsbqRfRX8rTHtg2AtJS8HHUJh3ub7HqrD3YjuTiFv9RtMrewHdqAU13Yf7WzFJJJtH3AsFhzX",
  "key20": "2Pw77Xhd1wen4ESBqSNticfAh4smrr6Mv3yB5Vxcgx8P1TfiXtN81taMWmxxiEEsF21Auw7YhuswmJe3CM22YWZ6",
  "key21": "1beats3WbBPWZEMcGJzFM7uFMZKeB1o5kXSApsgvvCS8PUsZQjNjALrXTmhrBgsYsKJhgCftsihxRdeNoBxe52d",
  "key22": "j8N5dmuBXhcT4MNkKRB1hNDjVsSDE1JZ3dSHhGb2SogN863SzA9XhWbDQ2RUes3xjdCy4AHVPfNVJ1yNXkpPZf5",
  "key23": "5Jq76z2tcMveQCHzMNxnCxZUXJNUFvT9VTyyBrgNnDHMXif6fCE4GR8AJH2y3f5Q1PAm4DMcygRz3nEwLLgYUukp",
  "key24": "2r9dNFSb4QkEUAU1JLTRyg8D8c583UoFKpPTp1ziMDqU9wuLHCmAE4tav1emJLxMShu8HaZC7Vrm8bky4Yr11xh5",
  "key25": "EQQU33yd6HXxXFHagC1uAkv59Ni3cXrKi2cQcPaRZhLZmwCt6MJwR6xvMbjqEFFnbboKA8etquQ2a6yYaSKbFak",
  "key26": "2KmXKkCSUqx4WwoghWKUoAkW3Eh5CvUnMDZhmUVx844y18mbz9nkncBvMGcTMU1N2yvbbKHBRsynbEERPF27mhzf",
  "key27": "o5KGzcQmaMvtueZN94Gvxpa2AwnqWngSavembk7PDeNCxcPgAC9dzzwiEm6fVCmYxwUYYhWAgt3ift1jgJhpcgH",
  "key28": "3QBTSSTYdJgqQr7CPNYAESrvmdmXZwurZpCVfFYAZGPwnRS91LvTFMTsM1iq8iLbxUGhXnvGCAtwPRNkyQ2CJc83",
  "key29": "4f8Fo4X6iwfv7ZMNZQnkwWKwuKoR5CoqqbxiJkYZiw8DeqR86CWZPSZtffWU2VqXhAyjFVDyPC3zGcnTqL6Gdce2",
  "key30": "61n8z9wBeJcqgAAK8GBTJF9fWJEX82tkjswRRqjbc3VqBrvYcpwPvYyyN5Bd7PEm5KNbL3LDSTaubwzc8iCPEpcb",
  "key31": "4kvWqoB14zS77MTCJiNR56cPACtmYxfyRESzMGUYNUttwspyRE7fmcgGTJksyFiGtckZpoUwUUZm32WSJiZkDv8i",
  "key32": "3C82K3d1whH7pfohT5MwDF8Pvvmr4YJMi2jzBFwbHPcyMmo59XPRV26A5YrCGxbMgUE7xs3sbkWuei58fyKoK3VQ",
  "key33": "49b5s373ch87t4YLqEy3gFyyRoFJrkXK5DKcMvxcoC1AJU1932TgvApsxRSD1tbWmVGGeG3jXbNeYcbWno1Wm6GT",
  "key34": "62WefdqUAF15AGGmRKHf33jUGRYrpiLhP2YECV6rF3ca5jnrseTtmaQVtBs1UCBMsaVpTKUqYiySKJHrfcXX84DC",
  "key35": "2QzNQw3TyYVAthd72NBNsaqCG2qwpZvGQhcCZ2ZE7cFp4zBdo6g4u3WZ69Npzz7RvAydggynhd34UQRAN8VfQUAK",
  "key36": "ND999FdTvv2b8FQzj5cpmT9zZ8UVxgCu7nBRRXxhtDHUE52MhTVQy2hR9ETpN5fqZ5SaWGtoSjeHZCM8EjQiE1i",
  "key37": "4uEDyA1JbLd8721NrjtxGSC8bS44BTKWfM85qqUWrm6Yss9GWXkzhRTBKaigxEEMq3o3xrZuRsGSsqDhbjxV47TF",
  "key38": "EdxfWqF1ZWCk2Kut1WmHgwwp4PvtBWxaqHto63JjjTvZLVXrzraSNGoDm4SELyHqfxmsSVgNLkimQPVaUcRhs2g",
  "key39": "2h116CpZyBC689rvW6RP8JEw7p3DfeCvyi3Pm6AK2TW1aemBhfVqnsajxrLvbfLrQMVd9NsCr3rpx27nWg2evFvq",
  "key40": "b5TRqfKTBJZuQMMvWShDpyAZwxTL5jJmDeGALkuzm9EJRCXvPF2C9i6KWuwRekVBF1kD2Me6ETstSZydvanwX5i",
  "key41": "2m7WWh9mm99mX3BhNpeyuRDZPeUExBGd2npmjaANykUpm3fRsdrheza5hvkqRmiSaAbYQKii3Fgpo9MKKa3UL7MS",
  "key42": "38BciwVSUXTaxDKuAAyE62z1JECRP7r3PJndzoJ7k89v791JN3ujhJiBrZezRMARFgtFK8YYv32gHAhK28gZdRMs",
  "key43": "5YBvCqNJwuUpvLdCeEV5y2cVaoXQpwJbaYNrYkX27kWBRaXKQbBrccN6FzNk5ihNgK9w7BACzYqvup9cbM4NcbU3",
  "key44": "62ok46TjFHBsGy4hRmHC5fTEMuKBCdR8gBmemEkacvcPenH3EbByiU4ougYC74uZAv8tX9RQTTUs1GihjZFjHrkX",
  "key45": "4M1hTYLXCrtSUfUNS1seczGiuxKWg1euJPZQfS8a4wtscL54SJu2a8bf9r3nUgRSCsPyfh5NXRcXBg7RMjMcX8pB",
  "key46": "2JJFYa9bjfipURaQ8cSzHmdJrtyzeG72YKZpAitHdcWwYLPvrG33vS4v679w7sWTTePyE1gytetjUHEPgDD4Skao"
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
