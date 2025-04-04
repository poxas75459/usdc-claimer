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
    "mWM7St3dXKBcPqwVAfucq2titgMZXeaRnwiksMz6GhevfJLDrWyJEzVaUAKjX8pzmnWFf4J1jzTMZ3mHAgsHLoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32YsCQ7uwspbdnPsYLjqdubdS9jnMR5HKoHeYwLh5XGnNLWQZPNqeFafAyAQkPQ1BniSa5DMtVxtbpwbJBbDm9a4",
  "key1": "gg16Fx335Hn4VE6f58bsYZrpXs8LDDqxyFxCMpgciRm9EeT2m3hvC1RYQ7FW4Lj9UbRw5DZm9LYNGLGpn1SPMDq",
  "key2": "2Xc1MYvxTkwij7owsf8bMXoUu1gdjqDsw6A7AopSkNM5VB8u25pa3Dgc8qeR3evMa68fJCVxgRS1GUSu7tXzfhxL",
  "key3": "5dtSeX7gHkp2yovmSza62sbXSMgjxPqrKuGMEh6hVQGv4M79i9XwaRJsWxAN8eqPKJoBhfJbSor35NA8V5jGUnnV",
  "key4": "4yavWVYhpr31Eb1tWvHhncU5TWkAnSdof2TbfvkqY1W5qHgKmN8LMpZavAxKoE6JyTKVcMJGELJ9eB7MVbCit7im",
  "key5": "4tmuLYWjBu95PnUg5najiVzJwi7imQWSzRstbpfr2atgNtwjv7h49LFjcEtJ3nufXbFZbyB966MiS8Afk7SmDGcU",
  "key6": "XEBuQ4vwvEcw3VZemwTqUdbF8FUVSTVqrCJ48BNB7HMsqBXsuRUmsxPGhkvtgAFBsBoHZRsUsBgbqmjdSYZDfvr",
  "key7": "5M8Ssm3eiqpe6J2yWhXmGFcXNRTXmNUXorqc69pwum7ZttsLz59ydcNwDx4dNWcb86wa5rn7bm94JcLTnAc2HUMJ",
  "key8": "2yBjVbonPuQtPRJbymirM9D1oySnAGCZTnXQ1yhXsuE4HmzYScAD5EQD6XxXuc8UnZ36ncWwb9LgwN5Mvq67Uv7N",
  "key9": "2j3qnjouQBRNqm9vXNs4WmsJ4YJhb56CmbufqtomMd5rANCx95Uqq8z6RCNQcR35MinrYDJtNpHeUTAphrbZ7s46",
  "key10": "5N5BpbscForHHx1fgkMe5HKYHdoEkfi6jwZ5ShdaPy7Web7mfQSLKqg5MTF1pUwPMrhs39MhejdXFhXoZzzZJrSv",
  "key11": "t3xLZKBJBHSAAt1NHhJUx19DcM7P8JSqaQDPBascF8ek5rWwUokP418p6e8fk6RvZT1dEqNsKbgyhztmesRNjLX",
  "key12": "2cNy2XYh4HZGYN2iSPG3WuumFCzZWX7sT1GsTmFja1EJhMMvVYNck777KyHGZpgA1mG3bPE7ZTyiGBDZ6PmjD8jR",
  "key13": "5bfnQV284d1yVrKVHq4QfMGo2A3FwKzX3RTyaZbDT4cqaij5NERPaQwVVi9tf2srAhtgHuBGQCGmgEWzbpiSw4Eo",
  "key14": "5ZuRbKzJRc2KaWJdLNhTyBxbtCHmZrpLJeDFDt6hA1ZTg9MiJUeTTuRdS1pffmAuqK7s1Q3X4wgJc11q6AuTciVz",
  "key15": "3dvhHRMN3BC1zNX3tMmL7hsqCsm4YCGPryvH7dq9WzW4uEonRqgySCZ7prdYTjSrxnR1oMACdaaNd8h5kZtfRLDB",
  "key16": "4DTqWauymt396gcJmt7U7cAdbNFLzVKTctKdRvTmMGUueiC2G4BRzxiXvP6iF6cnWGQWSLR7Vp2mXBwj4jfiGVm4",
  "key17": "2CzuNYQMefE5rqpgtVk4BAVvUZT1zuTccsPo2bmyJ3dEAdtGyyMHAKYFuKarK5KuPDEwNXLgrD1gEXRKSdVg5uvx",
  "key18": "5rTK3HYoftAeseUj7rftCpcjCTKmUCpTRJJRPgsRRiY2PKB2iv61cUNC7MNGG7V8SVAKkreDb1pQc3iYL2r6Jfxo",
  "key19": "5hc6J75Ew9CuYznxF75rdErhvDkXC54tYxd654E9tRLWkDp379nTYF6NY6xZUUdsQHPh7VCw9DariCUN1kquviRL",
  "key20": "2trTsc8WrhZNAEwX4v3TuFnjQX76ha1fckd4gViVReo2SJMTCETnVCnhUGaErcx2dW4aZveu6o9ELSRo8vyxW4S2",
  "key21": "4JKwPKFPbm2oTJXkSndwrYuB1QRDNhYpgjtR7tQh6mwF3FsqNbMsRA9akYAaqcuBGQ1ci1ScL56GruZVGDe3YfA5",
  "key22": "swuC9MsZKaKmgFaHF6WAiH8EC1UUBWi3FYETfxWfJCDB4esM3U1JeAjHS8VFtnPNaEzXbLpW1SSzuzmUquSkGVi",
  "key23": "4upta6bjpkMiDRnvJh2vbnjuoxs9YYfJt2w5AHUYma3RgxX9RfxG8P1HQndVV1mYPY2NBj3HxK92ugN6JsTTDKdM",
  "key24": "3mJpz7vTnKKzi4QNg78Vi5Zi3hzdtagV24X1MTBRqhooqsWugppsQ3wwNuqJuXwcMzFzHwbY76pLSJHrz6S7qKop",
  "key25": "3T6UzYkhL5PzaDesSnjditFhybBRLnBLN5ccvrQ43KoiRYH2WHxGgJgXC5uiunKMXwf8umrw7KCgsvfgCVUMN3zv",
  "key26": "63zZfB2R3pkdK8pnnoRYN1ML8G8r2SmfLyuU3VYD8jxd7wAn8yXjFhsUcUE9mymHocqdHrcKfhS2At11JSnhtGUG",
  "key27": "2o5gZJ3cH7kq5zWKqJFsSdopuvSuvTPjAYsxWRfVfLNWpFYeWXMmMGA5BSTxKabDyno31noYcxtPaipCAEGgsv6",
  "key28": "4JCXrzhr1312dctnERFTnYZAsYnXxdYfET6g1GFV7AUSB5GvukqQ6DVJrtYiE8eNKU33YnZJjN9GdLqQSyRdMgEG",
  "key29": "2BUVnHyhcgbXSjZMJsiARKhMX9oaQHVx6rnoSBvUuTbgaWGUmrBsX1kwdXANwvWmcKK8TGFnQtCgF1xyBnaEnXZX",
  "key30": "5djgj2GsjtfwmSHm2DYES316ceSnrFPTK7VE5jHb3gfwrjqM89QufwgVtxeenovswZWU2TnHEPg9TDjoLMzMWxSd",
  "key31": "tMpCSDGNqqS7NSE9G3vi869z8HjK2RaqJ2u2f7aZzN7JXTR1wnBBR95k7mDZ8tnTQBDT1vbQnqxKqFv7YjQWYFT",
  "key32": "4KZNYm2X5xswchBzBcR49pfdUV14JtJi8giuooHqJEPDqwTrKk7fiZqkRcLqGo67HWcZ3iaAG2i2mFGHJGVrBw9p",
  "key33": "5YDmTpQCFAN3yjRry9j6xtDbjRLzSmTVNPqjRPJqgJWt1c5i3owtGaQoDqNCbNiGH8A7ECNrpAXdixFcDhBueak5",
  "key34": "3YCEzV65yQRiPuszD1BfnNNrTk7H33Kwy61u3c8zTVVTh52p8ZFv69jCAV7gnM8PPQYsx9pmoSHsF11r9pLNefdG",
  "key35": "5PR7dcKGK8S5GJvYmhcWTHsL38sPz3j535K5HixXcR78C7RHtov3P16sbUB1SsZGJsaCLVnX1t2sU5tySUJPtj11",
  "key36": "4uHCJ26D4VZyVm6HWzNqwtEGQjVovWoDe7zCmDT75NhhgUA5SDU2VrgTdYY3KXUs3PNjYeDfYw3egqT1ug6ycsf8",
  "key37": "23j4D7CcJGauXeHDMVXDqMyLemrzW1FwUq8DYCXVUEqxHQE8N4oQoDVw1C7DMZvExpCjbxCEi3kW29uF9M7Np2me",
  "key38": "5DtsnGoZkhY4rhvPomnGm4k1CTBBbcBsDVyJzXEV2bV5F9bdq4XUbXyzbVw5ZnejYNBjVVrxsJfn5Hv2hA1ve1du",
  "key39": "AjooavgKWj3MgoRV9zzQN8Ay1RSr3TDPDN3P2nQeE89xLePAZ3oTKUUiRQT4jjP5PEfBq7NTQiSFC77TT9td9Ci",
  "key40": "3SxYEXQEQmbF6kxaiFeZK1qrkmwVTWSvQTdsKSZt1GFukLXBBMLVLZNYfsocwWMs1Cso9GMqNrpDDpocSg3M7oVu",
  "key41": "3pH45BfHjHQyinkx6HtAx1hP7aXo2D5gPt18tZYGTCrbP4gV8jb3ikyb7Qk7HyJXDHMdAkrYdwAmq2pDCFasnFFR",
  "key42": "3ZN8tHMhnaxqRno5r3qoS6UyoMrXTHSqvX1MwA55kvxiV3g3WuRFozEk3Vf6rakGkvbgVCYgsRtRTLXdh3gjcafA",
  "key43": "4DavJkeLHpULpuFHbiHgQcxyB9Nj28DbGpQ4gY2U3MeVKx4bxLqQZzeA8Mxsj6qkyFGfQ3imHGt3swywiXNGPmVx",
  "key44": "3GHzxwrBeAbngiHww9TW44NU8P8WrkuzxmLBvqFXy3CS2rKt8VzCW4emtn7gn4QJXtfoG9U3sVTUzkdetMfgj9zc",
  "key45": "2GyUg2NrqZYyoUuQKcKvtKYisnyF85coeii179ULe7xo9D6PQ9QCVrp27mCuz9nXR3zRPHTuQcrnyn3KcZNSnEuZ",
  "key46": "3796HPyqqwwa4w7NUkwRyf9r6ied5qSGBvey6AjWf1fKUJCMKfiQpRJGukLh3qdHYvJHCwrDNNqJ6DLtJdvXPaoR",
  "key47": "5FyHsHYQZR8ndZoEx3wJtuwciaFgh3LLYFLMCS4HWXGAjpKTYEnmBtD4FUVj5HvMSi78vfRYHikUKz9U3JP9qHQW",
  "key48": "3nogjgVgpaNr17pXREPMWX7NgY3jQac54q8KPNb3CzJdV9NsoQgk4LotygB69EP5FPXLB4f9VaLpV9DomDUABa58"
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
