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
    "TQ7QV5Yut9DRkWnWVPCTxRrzneSkEyHuzX2F4LiHtu1VESqc3G4FVKgZEk5tzw7MHjk6MhsjfnZNMwBrtYuqWcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kSuxnbpsYWA3bcynbzTmLSyX2jTNEKjnt89vwg6LEVKbHANfj1sc6aednew1QkVf2EPA4f5yhf42Y9ujf3RPG86",
  "key1": "67CY5m7QgeoCjXK1v1V6MA1LFoSNsoKWCRPvCpJmmG194ECjNEsEsxE8dLrn3AdxneG4NBb9jzUWj2tDWfQL1W1Z",
  "key2": "3emMBZXZNeGHcBkgSzo7SiMzbDHxd214Z7ti1ZjzLoabtFRSCAXsctJ1BFf89QDbnJ4sNU8wy7dippcxZvpBnACv",
  "key3": "pMovHw4q6d2qeJL52xtKiBrAJSpHnvcAojyTU7fA2hoTgVRASuAEmsq31EaxZ6tDMaEgPjbG9yNWbc7jqGJwNuL",
  "key4": "48oLR28QRwDutxbNRw2bybS5f2xnm5pFLt7rnRJgnjhqA67RhqwA66tbosAFUQTmt5rdDd298yHAxCi7urhPQBMY",
  "key5": "5HezP1JQDgK1RsUrHBzcjNn7XRZ6fZjitTSnUkDcHoKxFh9DjHTCTSfnvjNnRJtbDb2jKch8o39H2YMB1aWrJVyo",
  "key6": "62t4yta4YhghZhbRJaZe2KpdjHQvYe7JbRUT9XbopkvbEh2Yt3UkkL9d9vXuj3cm55nyHYxuUbte9hXad4LkP4Xj",
  "key7": "2y46hnrTxJX6KEo3c7YeBTSh31HmyYCFGwVB9HJQavpNLWHcWk6L9dpgRsz6uAgeKckH3gamGNkchtCXjthT6hfQ",
  "key8": "S7F9ccAWMbXzr6Ks4o9ZYMecvdBmamDToFsTe46D7Xq6PBycyr9D4NoNRkBLNB2KkEh83BW4Rca38iQMKqqLHQw",
  "key9": "35ayU9E1fbX2pEp9XMeYM5HQBMoQnQVdhY8po2VJu4RvtuvcTqGCht1c8D1kN6XaumFFUAZjQmG18dvJBDWzMuzY",
  "key10": "2xZ1qfwhGAVf4ug6Cz8JusqhrTKQgN1SATVtJLvvmK2B6omGkJFj6egVkMMAja8TQugm8LuLWUKJAKmDmLeEH7xS",
  "key11": "4gnvW6AcxdMjNWSpUe52g7ZKXpFabBfr2RXqHp19ZS97sbQGACBUj9ZCB2eBi9nDe3MHENH7PzrHvwPBWLtFCyN5",
  "key12": "31DCRo2Q9AVGrTtbYEEarfAJoMDeuRQ3p5rE9SrTtJPo6YSgUr5mQMGQ6sb9SyLqhAns2i9EuP1oWCLdeZ2khHc6",
  "key13": "64iiMCzLPgHbE6pSdcz3Yo3nMzae6SiFBqVhyv5MZPvcXuGVsqzen3LYgJYpwoXbzXs4QrqwtT9WNCYwCPywBQv7",
  "key14": "4zDhDZXDEdxL5Dgygo4JShAYunndRbecjVKQ7X4edAdoNNvEbJ6rfNA5qomhuDyatzKaB7JVMEvpbTzUsvraSdjJ",
  "key15": "dbd63HyAHqZSXwsHSpF2gow6g5ZCMFx8LrQtSUuQAdACAJNsgy8wiZBQvnv1tMmFHV8pCaPg8jxbroPabfX7HeJ",
  "key16": "47mrkSAYKyLWkWbmkGNU6X4rD8oSMthdecnPtnCDD87EJafvSa9Tzs3GscDD9J4tvcHQnjU2apjDgSZ4Tr2JcW2z",
  "key17": "3ojM4nf5P6X1H4RZbBpE26R4fNL6AsmrCRgQWbJgRPVZmH8CU258u2r2DVuzunZZhaZSucBJM9wng8GfmVKNCvdZ",
  "key18": "4Qu4oBKYbJAhGE7rXZ5qhTYgm3cmLxuVzU7vf9dv5NR8QksDGEbhSErLt8F9GNtTUd1RMo3h7bdPmVDT1Sasn9qn",
  "key19": "3y3n2qEi1L5K6JKxgXU4umqzbaFeArvGMuuuPzSyUNnh7GafQNjtFeMQuHAhYjb2xL51jmth9yJZmrQWQWYbZbMz",
  "key20": "3PEHh13rNrPxCivxFQZX2CB1ZfxZyya9jAXTe1Pa2K3TFgSXGLfDMw5JGAwMcqodPGdiBHV1HQC6tHePAhePjW3n",
  "key21": "3tLTUUv2HciJ6wZPUdFDt7uJs537CDVVUsHNXCRfZByqpyGBkLGbiSopRAgfSFEWfoSiot1aPe3EjDL4i4gsQS2G",
  "key22": "3pxJ9SSAx7YmNyF7PR7CAZnwLzzAvSdYEqmRXqp6wWWLGBem4DJC3vgbVdZ6WVRHwVyW8uXmonSEopwqnP8gHxvK",
  "key23": "4tr6ii9MDQMHkKisnubRnAzSnVPjnWLi9nPcKYy6xdgxbpefeKhXbFGLs1i2bsNCXubNt1SLd7GgBvdkDMNdfBcV",
  "key24": "4QMk41XsE6srzweutbPn8ytWxFvyY9RvEan2xfVyVY92d7gSrUbtdXdQWPF86TuuMM4CTeMuF99GMD3199TN41yv",
  "key25": "5Yibn5eDGyUxeavL6Xw7sRsbUzC5XGaeH5NQ31zo7XHLdvKgEahBa24Z8kvSW6C2cbhWGqMMTsFYCyuX7Tks5Mrr",
  "key26": "2C6mPqUXeQ3uocXWbste7EVy7xUTCGNv2K5NPFNfeJ5MFvnAQYWGyRmdqTPBCK1QNmfCCGPG8WtqfBaraQcrWNdM",
  "key27": "9rNNaiBH9mMzzzNyhkYPESMQ2wbiW4uBTdMnZ8seC42VTXszzZqKAuJf8txpjeNz66zwwYd7HGupb2omhnFFWx4",
  "key28": "4JepQYwsrdLjWj5nXEcAwiHKmw7D5yeCQQmSS3vZmHe42ogvKGJsw2QVLniFeb6FSzj4h2NcmWN5MsHmLkdmYUBS",
  "key29": "3DY8jPiLGVizHXbYSQaa6zUAJL6F3VvCYuohupVFLu4j2PVefMva5JbHeXEepSNVZaFxFCqvmncobTXNdBBzA196",
  "key30": "ofMzJMjGgnUgg9FfggMo7Rwzik1Dt725yG1TAw66LKRGEEZx7H5tdpMY1m9nFC1xFaT3oKuBQQXqiqgQecUJnXi",
  "key31": "5vc83RtvQVSEAVENousoTkYjsNjG8ddsaAc4Jkhwx9eCfby9BfyspWJQdqnXB7S1ATQdTqqYkX1Uhur7mLAFmrXN",
  "key32": "592CqgJGBHRjJXtkCuKezSCjA1FFHi462bKgd3FZ6nLXPJeLNBhxoF86bEFQtfT4cy1zxUUGyZ139wcrKPNG4LNv",
  "key33": "3w3bmVzGnwGXCs6Emk4wNQtXd2ctafFHTHPRxjsuYPaLYDqiwCo2ibuY2pFhNnwaSXS5wuJtCyu7si5JijQG9q8y",
  "key34": "37P9qVqmFSFiAx8cQYsmjB5BpBtycSCkgTGvU3K3pLduXEAcB3wUxhyJVhAwxYgwar2j3hcNMJUtqqyypwxvFn1z",
  "key35": "5dXmasv55JNWvxTgZeySG8EK7uN2Adg3GDcBVx5ucF8YgZ5V7Y1L8jLtFn52yZxeq1qQWxV6fSLL45TnXwKNJ9f2",
  "key36": "E44SffhRdoYRQnfRLsfAGaBfWCooc9nACZBaeVRDUDvqoQNXU5nn8FjzGW61HAZXJyp9xsCuALXt3e4qzhCWnFQ",
  "key37": "5mtC5wNCTURD621A2K1aVjhuoSaM1xcDL9SThEdnckbLQzdcuJqfhHas3SYpLyxqmucFk26XXcbcsrdLeRZXWpqx",
  "key38": "2EMbHLMfTU6aCLCm9J3pmWeWUcXRwChhvZoxUDXXStHBhuy2Pq6tiiZYCRiF3v92Bfy4SG4nLFQdvx44cvJiESC6"
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
