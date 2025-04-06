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
    "5m1G7pjyq281Yzy8BneFD1yWm4RURoPR9pXJ2eYmddiia3ZZMYwr8U2XvgaHWX6GoPRi2cDu5qFy3W8eATfcPsC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FsPXhzmKTNNGVoPiURjAqNcXWxWJ2PDDigh3GoiRiTYfwYBPozn9kxuBoJERzYYLrsEWdqSMqCXVnY4i7gxV823",
  "key1": "2C9EK5khHD3fBkThKSJ81ac9gSidjj65QtWKCBDsmLzVqeL823BMkfpQYrTXbn1sBNDBcdJpHcJp1R2883tEPXxf",
  "key2": "5H5qFmvVhiedG9qMaQPWApaUdFg36kLX8BKY558b7bTvdSQ6H9Spvs1za1VAAhAuaMv44kv8jRtf1BZ8PDbXd6h",
  "key3": "5wvzFTDeVp3bqc86t3m6zygQu1F87xV8ABGXBnxpqfLa1V2FV9x5WrX59gj3qo865QbHdGep2qQHRXFTXRGoSzqT",
  "key4": "453M2xxoZbk4u6Yme5Hq37cB2jS78VdzTKC1FfXtQQ7Te7eXW5AHHYcADZvVopT5hQVBGZvm7jzruX7E1sU2fVSi",
  "key5": "2TJtr78HKW7kuWbH7QM4WQ7s18JxAmb6Qw6RsCA4jzqJTdEXfsaFGkvViY9W5Drfzc1qsr2X8QwsQC5ML7j9NpX6",
  "key6": "36Rdj2AmDuZRyv5kR2cZUgi82VTb3xyT1JFcPirtwfFzKav8SrhMYWQ6Nde27eP3HCgypweVDjCsHyxAyjmQa3u8",
  "key7": "3fQiaFichTFwfAqMfqNPPszDbamq47CivyTuVDXGThbxGbafmCdZbrm1EtDALoga9HcYK7aJYHAwtNrrnFwt8Fmy",
  "key8": "4MLnoLDZtYgJR9oV8ChR9ttX6RFeVEcx5BCmzm98CMGWdKqx62q8JxpxVcVc1rXLyDxtxrUGAco3DJM28D1xiEB1",
  "key9": "4eLaC6XCbEzeQHxUz7hbxv67NA36GFKh2fpPDTb4X7WUcGuLcLL3mho62XnyPv4fkKEZZVxVvE6CZXP2rXebNsGQ",
  "key10": "3rSLVFGP2fgRQ1XPqEXvHnWEdDUxpb4r2d96G9absHuWUiDMJqQcaVj6ULV6RvFFpotbBBtYuxkKN1bMk9NgkTBY",
  "key11": "5RaB4ZuygaLxyFkBL75Xk7smvgM2TQXqk3yFSUiUAy6TDh5WxRmarE5DdQz7t84JWKNYzAS9LcqHWKLsBBB4ydvn",
  "key12": "5qKKTBtEJ4qte1DoWvefC4PNieiamfbS1yshxMyvgx1EM3PF9kbkSKDwVzfXXCqMe2Hrnd8yjbYnb49TnkTULD7Y",
  "key13": "4L6H6LzbhiJ4ewyoNnUxGgJJwEPF9Dfi8gr7uCQoX2mbudAa91z5UArx5AbiCHhVh7EBs14GU4NUujeDgWbEeroL",
  "key14": "4pgfv2haLRdpvaqBUCcHP5pi6xceB4xtUGy399Gqon1XGN6yB1rjpEeyqqUyvzGWpTbMbxDfhgqQisahUkxJ4Zt8",
  "key15": "27C36ipwb4TNVeiRi62ooRtGRHLFjfnp2pZv2PTpaSb4UdvTY3rRNd4uwpXALJsPdCv3kdzk4DgcwwRbAaGWJ8hd",
  "key16": "3YskPPLSUMRNspyGcpsDY7bvJitaQXJAfmqS6YDvr1a7R5rSGP55vq4KrghCvmLsD7nhYuaJMziyaxxAkxG1yj6c",
  "key17": "zdUQ4ud8HK3NScP2L6kCZtn9bzS1C2G1Vu5gP844EfN6Zh2DuLyEW9AKRZGKKfV6BUkzuwiZNey5JTa6NvWPhQ4",
  "key18": "2eB2qDyKtBbZd2SwtgHMe7GiwyFC3W8WxuX9S2FS2GjStrKEkTVNoeebuPrMvMMdDAuqFSksSRub4BWR3bUCdsEb",
  "key19": "5PjcoiL8gTjQmTgY1g9djxk2YeG3qMxTMYVQ4NsbtvzdQTt9hQZVwjdw9HDAT3ySzmjvK83RfuWTh9BCZEXQEkeh",
  "key20": "5MxD63Jibo9yFmNhrMeR1gkCgsvmdBbujoSKaCwBuiGJR1UieTqTBUd1QScGUC9tSbQ4mvjMtDjzJxGfBo9f1P24",
  "key21": "2kSwHTG5Cjiu8qkBnnezm84Vhp9XqbyiX8STXHjWExko22uwo416WJ5ie8RuFcx4XfmrAQifimXP3fRTzcsYnvS4",
  "key22": "Wb1jLLsN6orabASiShBqiZKhmw8R8whpmC69DYE1kknwWy5Zb8btusGAm7gXT6UbR1rYtSJHS6Q2yCuW8Do55We",
  "key23": "qkwqDNwvntbWR3spoCtx2q6zf5YhRfrKN1oDVC1jh9LVA4XmMiFigooL7mvwAVsa5NJ7MmwfkVaQiZZqGZLDC6B",
  "key24": "3DzzM4MfPpSmS7jsRcXLbie3DXj7CCQJYFgPabPLKcrzbcw3qC1Hg4ST14ecCT7EKxbjGieqi3hpmFBfoERVmd5r",
  "key25": "61i8G4rn6kRQvYNaMvXuYJ1VW2g16QeZNSxyX8pm2ntwWSCMLpvRxdp9vSh9Hf4TjoM8mBR92F9QuThUC8XqbfwV",
  "key26": "2WGGCK3ecXoqoQVz8LNGGiKDDBBTPZuLEZ5cJFcaVqyeaeUhnr9bAkcwigvzammRSxmeQpK7iqsW94cp7pA4ZXW3",
  "key27": "3JRVZxT2yWWFxVB9H825vrx452UBNHFWsTTXybp1cmoHZ6tHdjNfsSbxRdqG5gHZhKPrmc581ESFjuTPVvLEk2uk",
  "key28": "4bVebNtycvMh5BMAMXhQvouzDB79b8J9SMKViwx8Kg2b9yYzq5VU2Wf7WN6txbR5LmweLU8ZWU3C8FkNCfBVk2XM",
  "key29": "2ECEtVCxGD1hQ2D4Ec53zisq2aU6LoZVsq7rwHDVw6bn1j2KhwtQG2TTYm6irmwfsBwJJWA2MCcep8ZSUzdNFuzH",
  "key30": "4g2JMuemBaNJeTUnnnF53jN6EErnRRr3MkNv5Yfeoi7eanZ8c8Eapbbq5Z8WcJVnwUEnfAhaV7uVeowZrpERcnrv",
  "key31": "4mARNEeiDqGSLemnP8Q9Lspz2QjhcVUE3Sce2XSmZXFT25vwQAaqCiKgsbZmsfDivkGALDh7GMwNr9rWCgyiovVB",
  "key32": "2TWm5hdGyAbtwAkYpCAKy4UwEoZAkAKBf8pQj9jaFKtmoa7TpXqb8LR31fwUG838u9WQUCFVFfp899UgKmZ17XHW",
  "key33": "23WKE4UYKmhhWved2dN3xWgnSbwZ4i6rvGhcfcPZKyTFw9nevXRkqEXyXqF56yFCrcRzttdrTEMp4J6RMzgvUT5H",
  "key34": "56imQmHdA31qbke4vdF8F2u1cGP71Ngy6NAZ1ScJpDJWMKR4psjHdvfWcc5isD57sxAYfcVWVg81YjrTqC4jkFdT",
  "key35": "5CLcyQqRHc8nGu7QtGyyHQf1WS2TPwPkgU4vnTyWMaWHKwcW4BKs93UEPuVe4BC3p4q6EaRsk6ionc4u7G4fo5Pj",
  "key36": "3zrQYDsQbeJtKdGQiKjzFoGCg3XCnNAijxQu2vjGLNs5PyCPSt3yiWuR2736n7GAeBtrFJXrnynxGtNiPA6cDL7q",
  "key37": "5ZxMzLXE5N96hAHn4PVZSp4YAn5By1JJbtQzQSmhTGUR8FtKoHsoNisvLB1LcNQ7cUFkF3qZsXMsZ1jh5sJ78umV",
  "key38": "sNFsEjbD5umaE5Bre45Eu1YxjmkRuQWPt6iG8yoyTsqip5e3Ubwg9rRdJ5Lb2jcTELxApwsVZbnrXnZ4D3ACUXK",
  "key39": "477B2xdA7wNFcwo2NgfM7YXiCaCnyqRGQgHemUhby8okdT7sEW4cSxAk2G93aaT33bE1SYa6XvbGaK3YYjPn1eQb",
  "key40": "3MoqBDqUBybJodraqf6tsdLTVDkTmuagJzgrMFvG9T5RHotmTXh9u9sk9qTGEVCEj2kUDCvJAL91qQ13rBxZV1qu",
  "key41": "3QuSxpY4RW8hKDkiKcDP4W3RhfVMVFRVGMMRuDgBSQ5tkfZ1fGgssizN6o25oBrpZRLkdx8N364rMcF7bpzXbcNz",
  "key42": "EFz6u6qPvQfmGRQuXs35Fgiy1Qf4b9KePiCNZScRryaFQPv1CtiKd2Dq4zCtPJbnpjPmLDkh1svS6DdBb4Z9ztd",
  "key43": "39iLrcTPJpgZUkWGi7cuXNUjtFeV9pccgeoekSYMnwjzLQpq96mtzfYEnrvjGU947pZ4Scwg4nrfuaaqazg81k4v",
  "key44": "5hGWwCeut8mjPMZWeRHuCCbJobKd184hQk8N7djM1dYrLwQbsznZtnMz8PQKEjzNRrr3oNioUMQ3Eu1ehnDfKPhs",
  "key45": "2Ush4pAXXAF9h2LYWMG4X2Sp5sfDJcFH6JGkn15EeFfTWEddR8v6xKP9DEaK7P6DKmHDB9fqY7A6wdZCjtE9X5Mp",
  "key46": "5WSPPgqWCmHAevwg8cDzuzjdydtrQ1pPdFG7BtLwYkSNa933RULt6TTjBJT8d7YXkFXJgrxhSch4rMhdihcDRqwH",
  "key47": "4396Jmp5a2GJ273S7Md6xVqewxpLYAJ2UsaZwZEY3WBFYyHpfNjnr3FpvrVLsg3ATm2wqWcEM476m6VqHCzMheFL",
  "key48": "2EPSigBNXYYwPy44YJqpM8PwLT63NLLGtne5uFBfvHk6RwChinu4XU8NqYonon85TziexzkzXcTg9JkcMHyiBErL"
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
