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
    "3ZsosZUD4R6ufegqxMfG2wr9FmcMUP8mwnrFnjzrNhazkDzGB1sjC5EXatymCN32ndkV2by1UY165AYfafRzZfXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VqxK9asyFnmG2M5Ki5eSetRkzijLr5jyqS7HHHFrezj2rDjXNydhBpzp4xrEKbAntrvqihjPr1izzeHjuL2HDPD",
  "key1": "VN1sg5XbePCL3BDw2XTP2Nhhj1yqQkRghnQwMyN2zhb1j9uuzPK6KLJo8vpv65hdmKwTHbPNDkMj5hihU5AL2dQ",
  "key2": "adwWfcFfDmgo8xncWX2AAFEqX15teCGozcH6ztmgzUA6HVGtVPt3qPZCmzE7ERd5zgFNqMqR7AGF436rsxwoUPc",
  "key3": "n635sSx7cH2wEV9DzHtvxBSuDpie349C3Q9YAQBML3QhrzxyMpj8tQPpWYYDCYq9RmkMnRJThNBz9Zf4dxNnA8s",
  "key4": "h3arYz85MvdHoDk3cU1wJxhU6JKZEY3jtEeEJA8QG5sk2pXSw4Kntpn7ZNKf42uBPyhdjsbmQZY4ZPwQZm1Fv8x",
  "key5": "5TKG4X9f4rksNC9GHCbiPbBptdgFJZSbpSfYYTY8Mu2sUunUFWM4bfTyjr1nfnPFThuAF7sAV6hRc9nzCbwdpmef",
  "key6": "6NnZTepY5eKypfR9cNEU8rcyMVj8SmWr7k4YitWR8gcyov7Ne6tjnYMtf5Kmifx5SANuunwoAgcDfSy9DFdekMH",
  "key7": "463FtNL2FEiuMaj2jSXpyen29oz2P8niySNWRtD31RZGh9nBE31gcVRRiAjM8Ldb6CVfU8sdgqtuy8U5ybzqoXyQ",
  "key8": "3mciVJB9wCdbkjWsMFdBKDfkQXXtqnyxfAqs6mF8hKb6UA9bBk8Bf3ntdVqWrBwG8Nfbaaw4seLx5ZjBJfmVMFem",
  "key9": "3cm2HoqCkRbMswdML4WSUMLoKdXL9iUDaYstqQfjGUci97qeTc3t1xodwH8BdjAb6ZTf6zNdJKpGLXQEAsG5cFdn",
  "key10": "5iUqREQrYfrLeZR1vcgzZdB8iVFHAzG276HXLhhCUBk5oCingBsvqsAS8bbj7wk2TxyzLTYM3S3haNxf2rLmnskj",
  "key11": "5mbSoWieDLGRzp35fSEZmohKn8mGs3o6vLiVogoydKd4gGaju1dMszz2TXnEnhkQKefcXX4BgJakj3Kf4Y9Z4Wg",
  "key12": "5n2C6uJPEuyPFRQacaUbAmjrP9yYGdpuJLHweDN5nCWKYtXdBz37mS9BJMHLoYk9pQxvy74JYzfj4SWDhqPKLDoh",
  "key13": "2GhnEvtJrw43J6yKzMFkmzU1gnpjNzDejK9bUSofkdMXyVWHfaLJ32wgRyCHkbScZzS9ayhUumRHysT2TJAuDZpr",
  "key14": "2vnpoNh7QDVqj8Y6XbPqtnoFJGKghhmJwdvPxNRVWjdj1akV8ZzJqk2ZykRDmDETxaqNbkUt3kekCBo1gHQguadL",
  "key15": "54Rqs6ZEwjAWyVivomjcsNp6Kdj4ztUatxjUm3b3bSHmBiwFiD7aGsdMZHLwHGNdhYQj63WBkJ35f9xuw7zq5q8Q",
  "key16": "4EFcrRKTAjvAiKT6tAFVs1xtYzpCeodVbffKM1hq934GPfQGEQSVDmCLzdfWn8V64enhqm7F4DuPewDDb4Zzc4JV",
  "key17": "3Hf9eHs3ZMg7Ab4w6BqGxxxjp1BY1XbLuKtNrUM7PHt5SbfGZg7Ms8uo2GxBo4zbQxofAvZGR9pyLkshqjWJcfmK",
  "key18": "3HBzCY56PbjCPcnL8AVjHoNa1ZwkawD4wiR8mB9WPLDsrAF6q78MsmuenmpvAoxEcHa8BRNJNXaCmyAecBmzTFu3",
  "key19": "4UZzdkpm9SntP7VHUo21ZiYm8qJjx9yXpkXBdT2SXmdskc475ngn8s8mibU2ejWfM3nXfwJNd9jzvetEbeCqw8bb",
  "key20": "2FaYwzgs88RJLqRnLw3ZUiuH1juu4kF6DpNLE1o3Syc3LEcvfrJsh5bRNVbo4SEM2crCKZz3Baf8Ko6aRMK6Fyci",
  "key21": "5Ehem1aB5wbook1LfJqbtWE1ccAGxcKK4CaRafhntS6H1L4jYJKA1z8ZGxX5y6V3oPsZ5odvjCN8UHMsqRe6jgZ4",
  "key22": "5YHqBDdL5VFRrxfTctPKzxW5Z36F42gLSrmdcLkXS9F993HxR53H5wEg7ueJrMTUqs7xwV7yYQBNg4pZ26xk768Z",
  "key23": "HKHuL6SbZGJKKaKnwXe9YHJMtkTL5GjnujAHkkQUkfm3jrBzXLkYu1TsQD6oi7NnqmUC93Jnj9pmweU23bvKYe7",
  "key24": "3TWs6ahZHz1Lm2TqW2azRVry2aNiiKJU45CW5kkMiBExoW1zAizAdKYKS3rJuEZQaocBhiSirYg8EFtukd7c9DdC",
  "key25": "2h3n6BsstbFU3G3nnsq4fHVMt6Zfv2eyAXbxczTSVkFh6aESSpVf4Ch5uCLHUbTxA89jSVPyGhRXLj9ZBLPz8brL",
  "key26": "4RsqcQe4LB52L7RRnGUdHbBCLw6c8xu65oxRbpA9zLhHxEscHCnHvgYyX3tXEwv2id5SCwFgUvawDjTnTLHdKke7",
  "key27": "Fm4tmssfWgrKhHapqMm9KPDNtWAiAQ3RFELDbj5Rd85R89gRB4BTsKQZrNt8voXZP5yHSi3PgfeKDyjowQNGfFJ",
  "key28": "3AaB63VM2ChVtwjz7PU3o7d8n1Vj9e4PSdX3B2sBx1Khr89gu8q2PdKJrJxtVkWLY1ziyXPkJHumLDco5HEREzGF",
  "key29": "5ZSztF3dYkpqoYVGksZ7Ywu8fFitHRPY1cXERqkmAfsB4E2gDC7Qqr9UBvAA1bKAPkfTQfjqRqBENcqBmhkSJ8AY",
  "key30": "3LVSgLBdocBJecR34fakux6fS5zU5mnjD3kJ3fesZHY88iXNy4nNFFhbocGWaj523nbemitcphBEsNeauypJpk89",
  "key31": "4oX7nxih1z5ZB6P7vUgKpifDGWhmqw2Fa7aj5i2jGyeoBGYtYPHiQ2zjBCeSTkE5dLPrbbRt3i5fUcN1fKDGgo6F",
  "key32": "4Nk1Zk3PbJLwj2RBRhd9taFxp2iyeGha3ntnxoqqphMddN4DoJFEgR73gwgBhN5fQ925fe6g7P85v7M74maQB3FN",
  "key33": "2CLjbFBYEfdzXn6YJ3v1cPoUBW8Bzyij8r5hgjEoQ7rMjAYGfm5Pu9fWAx1tv46gQmToxREPRcpP3TSRJGboXJEo",
  "key34": "64oZ5GAWvj4u54Yfr45D6Th5RjEhgFRTpwQ43VPitPhxQSHRTU6C2vZup388LzPCrLixDy5PX1YnZZR1d4soA7ix",
  "key35": "2KyfeNqdSEjovQWvFn24jFNqTbrWVV8TJF8B1V3x7iJ7dbkW1iDFKZDLADyrNZwTxP8fUPvP6mgkMNkqbNjLcCoM"
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
