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
    "3AnFZYUa2cuWioe3jzVDgJk6Jeky4t3EsdB37VRwhgcoZKazAGdyx5LnaWrshoTw5dWve1S4EdvE72cVqk9iWqxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fecoCZUTxGhLuRCCSFNNTSriAQ1SYpH1CZLCAwTqvgcNWgWXwYGonASSkPmyGkRdDsMsH1yGBkgwq5bipdgxaYy",
  "key1": "pRbBgpVunVHiWo6tzSiLJLU8dKpT75K2ATT54uinBbhWRThXYoxrPf3FLjFLnBwyZkSSu4Ti7Szegbi6MKW8fjg",
  "key2": "2o1teKVj1h4TVSsyDkjEJRpZsEPSLwWv7u2vZ2VSrPFU23sxBuhoa6zqPzaXUK5A4zogyJV34sSps51ksJinoaEB",
  "key3": "4tJVKUkVyiPBLTSvsLmym39F44saoVVYPEagyAbc1tCxRkpPELCagCDNKi1acjaBm55f1gQryUUmquTmbsCYRSHq",
  "key4": "4CgJUF9MxZk6CxgZe4ZBg2KxFFj8nwfPeCYgzcqQyhT4CEVta92TK4FYyt7e58jVTQKh1kkhm1ptjZpHFPLRwhwY",
  "key5": "65fyX2sFcwN6NGHBvLofP4WVDrcTuqPRTUr6DBwQkSNL11H7LM19c1gsdcqkXeBAqJ8Hq3oqgbDH1pB2yHhipA98",
  "key6": "2LrXf1Q7JirLVHn3UgyWattprAukXStW3uRVjDManXxz4r1aFqDmvF6Zom3HCPPToo56hhrGbp2GMatvf1QoXo7q",
  "key7": "JQgpneL71mi16rGfNRyCGLH8TeYin4XpfU5pQB9rjJNAdR8EcRiV2gz2ngiHBNJwANAfA5qQs7tSp5QgX5CA47H",
  "key8": "2XGraJKJTHkxkQTQaqtJ3bm9tggMJTGcBqLzPpaBgy2dWHLBaVZ9hoNkp7BUrpmUpH7nhedwG3MyjzvegnBrMSxa",
  "key9": "FvUjL9yNnjLm2PfZD1whP1q25xMY2QCsGBvKrKb83yeDkTyL8e96hJaVVoYJ4GsRXPQKKNp19PLpTdsTTEougbp",
  "key10": "fiAiRKSTecp8fzLRCUCRsy54oRWHv8vAsXF6BW5WR1vKfZyXNpf36vZGE1aYFDwTWv5Cy4tV8cEYMPPEYMRR6Jy",
  "key11": "BMnMqHCW3x4JGest9T4iqzzcmERVBH7Z228jzBFozTi5wLn2ZEBSGBgvUUmSkz7UPSg3WbnYp92sF42KnazCyKB",
  "key12": "4wPsGunT3S6GX9vZzNoZAYGEmr7SYfoHq6HnimJxf8uqbXvHFGtHvzAxBzAcy1EodBQ16dkTGjkPiygBRtuQ7qcF",
  "key13": "3ftYpPkjjL3sTJyhpTmRkydEDkFu3NsfTKdxpycDME13WQ18HyKvNHjkd3j97naFFGKZasmREnzLDGokmHA3BFgo",
  "key14": "xvtZQaUHqNUzyq6ubDBbNV7qqEKSChWCA9VwBkrCUX3RvhyD1huLNyePNr5vnbtBHPos6izJ4BF47Rt8kuYpxSE",
  "key15": "KAZXMyGKTTxpF3tAikuvERraPUbzQRHqYMiTAMTHjm2sfKzDdqbv4EoRHyG1cE2vP57rENjAEZiWNnG8JWG2eCx",
  "key16": "5TnHr3ThnZFCYZg5p3Q1y3FGQi7DcvMkQuPme33msXdPbL5Cnd6HpUUx3RjXTj7t5q5izebM4LTdM3fC9kwrG3uP",
  "key17": "3ASw3zEAJx2bumXmpB6WyvHNmxJ74prRwTP9ZY88MWskvgQ7M3ueCpX6ffsSpXvDxofPhGagTvjwAbXgtrgVdF1A",
  "key18": "hsmYFve6qWWoiTpY6NKxiar1mVa6Y3gSTibSmijppxYeJwyWwknqkUx7Wgjy9nobhMJ3e6UzGJ85EE2QrFp8biW",
  "key19": "4HheN5AqgxiegtKiT7vd7Q4fbXf3r4NzJifwLYf7Ckn2BMrgCYib9TytSYzhr6NTh4WHRCpkZvigJZnUHSKJsViw",
  "key20": "3JT6JgfxvDMmdHRxGhbosWkhZP2JnwCtNrC3LJ1jchSZpfetVzEQzFe9L8wH8uDqB2s1KbUqgvqdxpmXgL9mSG2G",
  "key21": "5jTFjc5pTCmvfD9gZwPhJfewxNr9Z17pe6c5bBbfhjk2Krc5uWc8CDSc219SZWHWR1AxcxKKvgCr3oNBJLZEovFD",
  "key22": "BP8r3NfFM5yCoF23ANnwPjrUNvxzeWrS3jr1EATtQrp8EgJhqtxtRDkA8ryexyBquyqpY97UTrvsSgtdCCX15PL",
  "key23": "4KFM2zGg3rfqcqXTeantgUQEDs27qcoM4aDM4BQF9ESPffLjfKmmAgB2y5iW3cHSEQzeBHgZJP6T1d4hKBWgZpKk",
  "key24": "3qiwyHi7PeXw4RSTYJEqTxwYnbNnoLfZFK6J1yxWqJd8XNPftoxexY6uAcFMTfYqNQTjdpv3PDdV9zJq776nQMXN",
  "key25": "Q6yWoknKnPQjVgZySMQGStE9nhtxRYdZy57dDA6zTKFaVWqsCzX5upP2CZCADTanYtfkbamaUxCn6ZF2PqGVLSj",
  "key26": "3g4uvpjrEnPy9m6MxLqigmzmbXvYcBwm3UBQdETUbqGaiRmdqFBbGv1yuzDLgEYBMSoDdd2oaU8tJQwTt397758u",
  "key27": "2Dns8PoTfx1FuCa6TqMyErrx3DSMSBYQdUnZtXMRxkDJj719qC2upMh1TWqvRJoEofuNcSkQ9gwpFNQSczLJhefC",
  "key28": "Yv61FqeiSCwbyQ4jXwBNnJAnyVVCVkEnwKFaVYP7RkNP67CKkVpSU6BBettfi1Uwb6riN93K1k2Sf6rkGbGVb68",
  "key29": "3VpFy6ixqsJmiTmUpocawnZLqXfKh3suhNvW7iWS5wan4GJMQYVLBCPFj84mLjB3ZmywjuHYzJHvqZXLQuP3Wsek",
  "key30": "2cgmNTFzuuKoboNVnYjw8wAmyvfdaRrKEiYT7PEGeErqcnSH1FXnegrKnewzdUpzePhLGJh3dWChenqx2dP6ZXKr",
  "key31": "3UgdgcQZsU2c2xB7kdpHJbCihEPQaZV5VdsH3NzrHxKeNJuTo1Ptk5NbWiuRy4aZGUjwNtm4VGkHkydkjQvGVzzC",
  "key32": "4m9CnZ8V3HiDT2XwwkT1giJUb9RjoJ6i3ofwKBzakyr41RVen8kMd4VBWTTMigmNTDXAZ7REx7SbTBGj4ux3z6nh",
  "key33": "3ZgwkcMo6WokYoCNZY3ucNaFtzt8gQgZP22acNyf2vg8PtYpQWBwbBjsXyiLe54G4FirXu3p7HBkhwHEWhxUnKFd",
  "key34": "4yvPqXBiUMEGAt8SUUYDBssteCKJRMhWNWyNSs5emPjquAMrwmUnAtN9fw3KYJiiDnFgW7fiCk8qnBruK1xeCxWz",
  "key35": "36t6fSb8CiLUgbg1y8Yt2iDfafWCz5ERH2mZj9ahBKr3UuJH9Zcv8o1oADVqBdETPGAHT7Dw3kZbCAcgNTWqNAxn",
  "key36": "XnH8PbZqsAEDGFDyk4KZE9HQ8T9XhGJNAyRq3Wdgk5MtLfpS59uHwzYx82Pzvo6i26sy1hcer8fg5XTKfrvdoQb",
  "key37": "3Uv9xWpyQQHWNhPnuzvX8qDFL3pfymBXoXJnhsigGwvgH3igZVLC26KFiGyYAqhvVgLTH2zU7EWW6JbxW1LRF5ws",
  "key38": "5taqRmLuJaupUdGGd3CU1PvVifpc9A8zHfiwmBB8p4nhXZkkNNafL9v76ZXKqKVqkJJpd1mi92tMYbskgrhs33JY",
  "key39": "4Lmze9c7wfgc8jC38gMDgXrxYhFWnsQRhH79YniJXZTEv77uyx38PeuaZymo2ZduiYEKhGrWSp8kkaCCxfR3Ccqw",
  "key40": "2v6HVacwJVAF2afY8eRetXpA2zqRXighCrZPMvE5SC7rN58TZKvzPecj3TvNb1WcL2R64xAzfx4qN5MDC74oS9Aj"
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
