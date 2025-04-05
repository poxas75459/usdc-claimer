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
    "4uTcXwzn1XRvsogCyNpJSJXx6nQbKveXefustEvVyRXz32vbkdAq5MSh74y8BtxPSMwXVanYzRrsKjNUy4m2SGot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EbgbyUext6BR33HmLMiK4JUsExnqBD6qYpozf16QkQ2DZekLt9a2GX83zL2noYE2yRcPB5oLifCnbPPEGrioPCL",
  "key1": "4DmdPavXwiXNBoUNVZLbSVhcFhCzgX7R7faYnauMSPdQmvH4VTNGeFH43Y3KCoHa7u4bK1d8VdVi9a8Qv9y97G41",
  "key2": "26ZjrKQGhgJaD4zHQoSzxcwxUtCmVPQcmdYnVMHvJE2yp81kZqztzs8N7VNdD1GfYE4JXNoTXr9AVrRPiHEbJu75",
  "key3": "2yu8Z9U1fVv395oAsa4B66DJ57RVzxaKJvAQPaNGkzycxA5A6626qN5sdEQMV7Ap2jRnEWG8SjF8kQyn9oDNxKYc",
  "key4": "4T77J5bypNHM8KucboMTZcUwLbLCcWWt4eRADWmuQoj5k9GCmXoJ5MD96EGZVnfim1q6ChQbFcfcR25rQXKpwqhg",
  "key5": "2wzKQruaT3CikQy69TyUEHPMociGRryjFLRaLWBtuLt3omke2NAH9SoVu4YvRj99Sa8opZxLUPDfhELF3wccpzZV",
  "key6": "63gqkLepoRdY4gjprQamgUY7c6GGs5zLCotzZAeqhwhmg6XRqjNrb2s4CZxwpivn1UT6tXcH8rujCTycS9r9RKts",
  "key7": "3pe15EQ7h8iscAQqjDmLQEJcRBoxXvgCeEpEDiqg54PiFMSMRF1GBC8Q7WA4tbeLvZuQrMio6TfX6PvqzVaG2UNE",
  "key8": "mUp6Yo9xttuaf1GJE7FXVycD6qTDtPL7UogmsofM5Vg7bW7USDoLpGzxBXnRGaNa33DqtBsxGWbHESHxyy3rmra",
  "key9": "4hAVuxET3V4SvqLytW7GmG5taKx4frzFv9fn56YKSA53oyavPUrsoZAp4JbAnSDCs72ZubXE4bff2MZYytivFZB2",
  "key10": "4ZqEVwAXJp2sH9we5WfyoJwrYW4ELQoKTXtUw2ZaAnu9G1oXhrBZ964fvwuE8iDUWT989Qprwx4GBQp77ZGnyC4n",
  "key11": "2bckVoZmyJfbUv9DfYGnLuzrw3B2ioECZ49MdNE4FSsjiCaeEezWCVgwkvxQSecdkSkA64HnJBBr719u7jqFzjFa",
  "key12": "4hyNSVEpfKujWXtj63y3GcZrQS6n9yf3H3jpSe5BKFqbDeJCVCDNJMEZq5CEKE2UhFg8pRC8tTuRJc3u1mmwcfre",
  "key13": "2NJUH2P6pfDT7BJqc4kbMw1QhEiqwmDrFocCmaeALjfPGxhRX2PP75e9FVQ5dZyxVLtJ8BRU45pbNsxXgQ17pn8V",
  "key14": "2WHwC7a7o2eQ8cAcaETCa3DepVvTc5yGSSMomsBLUzTkQZ3Rj5fn1WjyDFJtPdFJBk5LbwSXX5UvGSU3uR7G7Kuh",
  "key15": "4Tr7tmVAc1zfqJmnfttwMgiR2NZdDSecwL2VJT4Z3hYHfyaDtSJ3b6Dz4SdZAkF6NVTC4dhh2413qxz3E5CMkirr",
  "key16": "dFH8c5CLPGdpEqUKW1S7WxPu7KKDZiY6urBUC2y1BR7czhWT8TQU2XeTKKAVMjNcbaJhFLfM1UQ2V6m1JvzcSiH",
  "key17": "3aJg8t2uvbrpT1efKPCFUuvjd5YJ2xsoY7V4JFZG8nqGQhBVRKF64zHADiUVpt6P7UjkvJCgGuhE3nGKQA2U4wJ6",
  "key18": "4kZw9hCoQrjmhAffW2hk68zWZSrmpuDPzfHw3W72aYoJwgeoURTHNSDX1Uih333nTgQtm3UMkPhaSjkBxvD95GcU",
  "key19": "656rwPcMYF9J4wCxNwowoZMmLm7zRBPryMChEtnq3wGgcKX3Bb3JbUSMYx1pTt5wB8Pyi6xsqNvYyv9NQU4GKaFF",
  "key20": "3dQpirRZx5bkjSWbavESwMSbSPJYrY6ST9S1Edh9q8mZTCDsZqhEhWVVF1Js8SEugdrpzoBzeWZYvtPHPM6NiUDV",
  "key21": "4jBnTEKbDL8L53tc6rrXDRCmfipNaPqUjCsUw5ozZByibRjZEGvrUoSqWGA5EceULQnvvoWVVt9gw8LpcLXH39BP",
  "key22": "UCDoYaFZvthah2LZd2JTemqphFSzQC1k2P6swTQPdgCGwwPGbVes1mbGd6yyj5vrR2rjnP4Wy6BwNuRijhcKE9w",
  "key23": "3newXbd58LnedZusnJJXAi628xAPC1aqLKx6MUARAWDoATCK9WoNBLMMJXJJ2932x2A6qzmNZMVAPAan1PJto4Ym",
  "key24": "24RWHHBddKMZnHvfKxrjdQQ1mxLHba9ZKoARQE5mictsQqsuDtkEbg4EPocXCiTfnLMeu7miF6qgx1xQwQbXt6cG",
  "key25": "47XcBPby9sakk6XtsPz5KQr1HaV9dDBZneZHgfLYcjVACBdnx7TP8fPooVgVUsmCrzdUzjTvjE7PSGrEPndLDeJg",
  "key26": "5spQPSLhqRLqZ7FpRkWrJZMcURnQqjxTmA61etZg1oa6VVHfTfVcYiL85hrKhJ92mESYZ1XP8QRWWU7f2iTo2yMW",
  "key27": "2RYBrnCDf25m9fPgcPMGjvjYjJkqZEUBy9c9CA3jWDZEdgiFP4kNK7a1dtxcX6FsYgn2BUoTv7G28QykLBGhhCGf",
  "key28": "5kC9r9izFrBU9nD76X1RsnH7eEwEgeMFCspkLnHREHybBL6kLsY8Hep1i5rpHB38qQZPqnBsYjTsyNAbXYJGsKR8",
  "key29": "4Ss2eK4ZdKmqVHfbhQ7bdABDaefkHU3L4hSXNiyjCXymDzAuFw8zDzQVVQ1A3GQZkNFgbE1oB5xjkuCWtimQCvy2",
  "key30": "54eJncbHqtFTic7kSDXC7ew1JUkUbxGZjYMXTi6xtmatXa8NKijQB5Bgbk7cxM4qYJMCoymMpHnHhxf3chhjEzzh",
  "key31": "5q6B62qaFqXdUZzPzcQ58LiEaDonnvmr1iUKsFT7g2XNavuaXec3KrqfrazrVFcG7VBz5nXcsVCds1MPwzz21euX",
  "key32": "2DpPjKV7LZMxJEM4AmeQPeTxbuLYjyD4UKwU3Z1PvWyyws6MBzpzZ6qkAWFPYnkXFmJy7HDk7n4PKhdMT4z5DYXK",
  "key33": "29AANSjdKsQB2c1oCT5HUGoz1LB79KtJ5tbBgfWGxGfFxvHXDMJ5AD1kU8sAsErL29AuU14bQy13tJgCzc6iPFYa",
  "key34": "4zUWgrfqPacvvNZk4CUZ17hVT2qMfN9vjNCRREr5HSrZobcDE1YnoR7kMGfLiSgPcg4roVY18fYoy12ENZ6FWA5E",
  "key35": "5fkuyJpPdaZ9p9kNtCbe9kLjcrot9RsFJDv69FMSWiQmhvzVQvCx6jXY8iJL6VR1fY8vH7Pg5VdvY5oEwmhg8heC",
  "key36": "XPxFCrEpYsfM8CukE6Kbc3UcvHqUpSU2iMiBHLxWAorQR7ZNUwA2rae9KZ4HYQ5aitMVYsRe5D1f6FWYTfdR4om",
  "key37": "4taedrwRgjhEH3XfJCa1RhohzbCNm9Ri6JdPn2hiFRCbKQ21VHxncL6N6Q3Mp4KbrcaGdk18iR5FNGnUc94S1hnr",
  "key38": "26FqhhWgjovWHQnNVB6wRfHHsSTmhuVPD1WVeS2zRz8z37NW1esp6ygBp5qr1VN6zhAUd8xYLwnHeaVZ9eyBpKKg",
  "key39": "4X7ryb5pXH7zapM1s4t2TXyxb9pRuBHqW2D9kQbRybs2EsLc7WJ1t2uo8fU28HLn83Fyg6hKX4Q4zVNkya6kahZ4",
  "key40": "3a5XdTvAdy48jmzs5cSRfdQRQuhd4U5X1g2YYHwGH1enAxCmjNk24twQCaXPDxiAeNiy7zELtd5v3mTLebASVHMy",
  "key41": "46G5iCFcuC4k3sTo1pvBbi6huXxRNpfuUdrcKUADtpiuE1cPNhsyGaXbucCgPxaMWh2KDfXPWe9Jw2rm8hybNqZi"
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
