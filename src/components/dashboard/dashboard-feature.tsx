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
    "Uu2SrNqcmmqwK8VTF4BXdzcurNMCsHnXMUMj7HAR7UiwBbSyGVXdXKgtxnPJjwSgS1T1z2tFP9YPqs2WwuXMNwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zs1VavK3So7ys416zHGT7dchzG9Rug56TP2GPeBmueZqPZcdUznxnW9XFAi7FELV2R9EKQWWh4dZWSrtded1zhh",
  "key1": "2X9fVGiLtFJGZdZ3GzdWfgEEb4ZttT7xGv5QQzaQTmrZvmfwBoTNMc8o8tVUhJByQhYhmn6nDq89gEfVR7KgQD7U",
  "key2": "SaBi6UGq8SEPQ4uM13C6codMJANcadRFR59VNzqdwKgiR6Sr8RNbeT42DVFFQVjUMzXzTvRZd2TamA7e52DQkmf",
  "key3": "35LuYQwsqtb8HBHKPmvFfffk96E8cm4u6MZD9St5FLRN2rRG5gLECMPu5aPn4mdd9xTkGJaYSHorDBwhz9fAfd8h",
  "key4": "jzvHX6jnWWoK2Rsrz7NiwpvmCYm7tJy3QQy9t9BnaCeGXeR682ja7cW8eG3sQFfMKrXe5u6mVxDm3pA1T1Lmbfj",
  "key5": "2EBkEHDfz286peEEgKMsqdpnKijLLffXUBgkJR7qfKMnFFcaqpxDtvj74S4vvECNS1wudNLZNT6NAoGpzWqV23mv",
  "key6": "2i4rRRFn3ipGvy1QyUKJ1SWNkzvFWjhRpcfpt6dnCheKUKp1qTrdLnixLeii2J7g6Z7qSj5SNJ42XaGSyd8wcLij",
  "key7": "3WcwK6Bq9EUpTJe322CoB6UX2mudfLAjGmLkXrT4ES4P3oAFa3sN1TamqmtkvFgPoobBP5p1a7ok3BXrKD7KMZG5",
  "key8": "42zJeuhKktwkNZE3DUf7th5KBwi7YPyrSoNyD5d2XRXNHjqo1XDPMrSYPGdguPxCoNkFbpgktPjai2u8pRbgcJFR",
  "key9": "3ht9YJKL1MWnfy3b6BhMDGWixDjpZnSjiLXNGzmYkDGV1X9sMYfqQCpXXLkP9t7CsDKyaoEAxb5NnurghQFyHkLA",
  "key10": "5SWDxHPTNVRSryQ6ESE3fHaBAnT6AShNkdZ2GJdZiHNtvJrToXaKhnDrMQ7dc4SZYyN5aaJfZQzqNhCJstyDp4wJ",
  "key11": "48er6pZvnCSKmmj7j2RnFa5AYDyBvT45FmqijujLN1df2esdH4uTYhi8QuLMPqxVrM5PCmgoXKqUbdkkU1XFuCvq",
  "key12": "44gQ8YCYi3DfHrVJL6r4XNM3cKKkBvwrNvk4wDc9TJN133D3MvKN366Grx2NzKK9XYZbjLdWePmURdYG7wSBugYg",
  "key13": "Cn1aXAqP37zd3SMYBjXQYNj1tz4azSgNapAmqLeGrTEvpL6kYKN2j3SfSh4yd9eXCYmSaspdaBnVUeMi22Df9pK",
  "key14": "5hd9kCTaVnSvNcieswMenyeeVPKC5ivAa3Hg6R7PbrWDEPFVQcb8UjCRigwVaJ6NqxGWVyjcSQQXUyj36b2AdrZ3",
  "key15": "3gxoQFSgYKZHuAkSjBfxdi4Xr8e5dSd4RQQMwjovyzidXkAxo89rb38oQXEkczjoKKV2YQEjdVyPJs6yA8VBPPSu",
  "key16": "3GG72NZKeyFj2UVL7EfczaN5STXUvWFFJKaqH8Ebbno5SoaYpwxau6y7NfYjTeJCGT7rhn2SaJs1JLzbseFJz9Hx",
  "key17": "5y8Fe1SqwqZjtQ17qavvPgVPfzaSrKvm5iffM9LgqD4WtzsPiYctH5xRHocFAwt5gswMvHUh2KohwPRQiyxkEiED",
  "key18": "2KhoKxH19x2RHeMNUxiNqPdSYQM2bmA9enEt58Za2pLkXXE4EehsWtK4xKhtpnpmkzFfxAceSPEziAbpY383UfEL",
  "key19": "3Q9dWKo4NkCWbrpLfxjRjsdcPDDoH3bP18VUP9Ro9RvHS3s6spgU18CPfqRXW53hbA1MFSVCDKjPRGJwp1aVxoRe",
  "key20": "4ndY1D6eL2JoPQv4K9w5ZP17BexYYLP16Na85agDb4VSFJ6x8285nKZrLJaZjKb7WirSSwM7ghNnfMbeEy8oNYmg",
  "key21": "39vBJmRTD5GtsmudCVrbxRsGisdCuZaNhhtxPvpf1gwWD1SNUH5RaAaeJFYbfDxWfDa3DVM1GPAWt5gURu14SufT",
  "key22": "2Wr1ihDGm7TcNZBaZBK62BnRDxJeJzH5vYnWTvMUazJPa8nvDABVzuAwscuYedeCDWtEt3rQ4BV5o6zqNTVW1FZ",
  "key23": "5y3FN5ayLtNVYZDVLajedy21oNvJDp77Nz6D9wp7WpaAhrWZTQmiPrx4TXF9oWWsb5McRivkRdXenMKi9D7gpRU6",
  "key24": "2WmXvwuRVmZ8usTymCfu47cXtVg5Ky6D11YcUuDpxWDZ9qq6vGTuoyc75CEJyD8pADB1owbnfdhsLLFgwgXbvw28",
  "key25": "2TLnDDHMPuwAW9PgfFQwDCR5BCVViRXTudT6y4bi75Yn24W8F9t1tZZT33fmpfgoBPL7Ykieudz9NY3bqYq3XoWA",
  "key26": "4PQGNZgYVj8SBZx1dJBd79FD2D2DTNxKyfyX9bey5MxBMz8oMBTMH6wVAQTJbuJmJWxXkhnGmSCbgs5dJ4gDfoeQ",
  "key27": "4qU3dzr5yPR5uHpq1fF8ofsy4jGuYxgm4ecWW2pcJzydxrESLXuF1xN7sHnfxFTPFRpoXX26zNAaFDQg3B4nGvZT",
  "key28": "zwsohkR4z8jstYaR8NKa4MHax1VEE1dmfN26XvYHCCZBnkL4J8K93qad3rrBVdTSMksDnAQPxpbRjnJct7zpB7i",
  "key29": "3SBmwdvApue9UVbKkHwxHaX7vuqrjfvSoA4ykR8qimmaQFZK6c21BHBzBKnrMA5yhRMRRsgTsdDYrqYdCUYn8Lhd",
  "key30": "4rCt7ASzGZdxFV6ioUYjiRgSGxTa9dTP2pWixA7sbUiv5FHY81G1pDnowTfPoiTzpsZM7DpgqB6M1Ch9sQzueymF",
  "key31": "2q7eXHAxQMfbGx8MH6GAqjGjvn7mS7Pn42FQA7kuXPbNdTb6ED496qH2tXU5dtj36Q1h3XwzXJ2gdfpKAPqFjMSX",
  "key32": "3gESJomz3Hn33tQhzX5mp3x7kEUvGPJFXorRdpsBU1MiNvjwzrPaNP8nuV2dVB6tJGgMx25tX6EX549n3BVV9YJn"
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
