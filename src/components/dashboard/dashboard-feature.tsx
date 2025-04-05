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
    "5fJKYxFf7FUJpRigoEDHDyRDU7baDpUzAdeZ6TedoADqx9eWxHvUVSNDJz3bSgNGKtyX2nvA15EiJraDcgTgs2qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pywwC5Xw9n7uRYdaasTRG9nHZfq4VERvjsJrrizRyGVcDBW5XLQ8YUkrDgvi4RTxHbysw7ZFaFmnm3Vjm2p8kic",
  "key1": "5KCyzZAgACjhskjM8QHj1HENeaXF5xciTqCoTxQYKAUNtMiECsVyYMzFkTY7DCQsR18YiETyXLAMMZGKV8ePEyxE",
  "key2": "44VvRUmUpCpviRtUeJNFqKqKNn16t27sJVgwzaesDB7SUkxeDvz8H5j5VWhKatZbk5F3UyrgNfEJYDHao29dZa3n",
  "key3": "4hfGTWHsMCgGd5bNNFzMSdVZFbsireDF2aPy44Matfvpj5ndcx4Qy4bDXzZDctwatVpDrh3w8ADe4VJjUUrc1RPi",
  "key4": "5fkTC7JvXXfzC9et2spdmy4EYuf6iyfcCzGD9iLRjNAk2ME5NhmbMabj1orLRbMbGKe9QB4jz68st8sckehAgVue",
  "key5": "35AnUQGyUexMSx3cXFSRDFyVtn17VibR4Uf3dfWHFB8anyti68SpkvF4UH7BuGPPPdmWXQdC9sVrY4MnVhUSk9UH",
  "key6": "5ZiKxk2ZfECkB7SH4rLYqpxzQ8njMtct2Rh6Vnpz2mYWaVpTmbgdbny6eygHiNTnEH5TW9DRNH9JLgR1ZLuSRjuD",
  "key7": "2royvQEqwEyt3iK2nL8wkTdNiHHTMgpCAW7m3iRmbaYcFDECpYkzGqd3gaoSRHpKdayW39dxTvo54Vnob42P8vo3",
  "key8": "4KBJLeaFguGBXUMnLtbpYuyfnrsH2efL6LzoECw5cDxaHaUCFbZpJFNvRqkqQN8r7WwYkUT2qF7dgMNV3bdetJok",
  "key9": "E3voWt9g43dY6nXrAageXEj6uekZrCWrPimeTa1jSH8dj8gYQSi3b9EceD31TznFSaahWE2nb1nom8QPv683bSh",
  "key10": "48EKqGAADZRpUTuSS44TMPUAqGFY2vhHfZs8TvMzXWJ8ho1XxeuNmUzvuD77GLXWRf8MSzsMenQyXgo5KWfdk4v6",
  "key11": "2rLSL43PpRbzcqsWP9pDdS5cniwTv9oPMQAkZAbvdwNb8PpND8gVPhLwRaQpQrfhfo518mebxSAUXJsRFKYv4cz",
  "key12": "JcLhUQ6PCndceu83BxFqcEe8dTDgLqgmoJakXi1uUrYT5n4dAb6JEkPPVdLCsrWTXpq7hDj7QYk4kx19zygD1pY",
  "key13": "2juWYh2uChdicafQ2FLnogy1499PdCzQwuc81sCVzZrgpiP8txjv3vLgzuT4rky6sq2Xup3yyJgvPyJinQzKW4JP",
  "key14": "2FkQdMkeZ1qpoVQt6oJi63uKq3tsLEiMqP8XtJ4dAJo6KJUJztjGk2JM1tYdnZMP9dzmrsSW9p1MByhVsmFFXgJo",
  "key15": "32yR4SCZk3rTTeni27GyCpGSktePiEKYPuLbwGVXiAHTaTS6GvRdNqpJbq79AN5yXq1HT5LW6Fm9mGtmUwHF3mTs",
  "key16": "4zLTpTuDuR8Y8uhSWW9XSiMc5RBa9KWE7X9B3TvLGkF1w851Kwq8YtoMW9RK3usZu3QVmzfn6nUx1Qde6Xr7Agwu",
  "key17": "3d9LLpzTAyQvTG8FA2SFfo3qELFBsixTbX5C2UtPPnxFMVUy1Z5QXbists4UBtwesjx3W4fpyVisj8D2p6QXuNP7",
  "key18": "65UQUorMyCF2omLyxDRCups3dRniwSLen13PqcECxdJNDx3SpdniDvRB9LaUPbyN2Rmrgv3qH68gUyXa74kNtYz9",
  "key19": "4BniNGzYNLrBmr461X9YqjcN3rRbM2n712HbRGDkGKjsHk7C8FLwnhTkgCfRGPL9FPfUv2XxA4wpJ9nS7bA24qsa",
  "key20": "XHoEvr7f2XsZXQGFdE5YjMQYNNfFMGiwZyUdhBd5eYM56gmbxdtSbs6RSdvqomG7yffHMpcdC9m94CPo5vt7mw5",
  "key21": "3iufRdWiH8hSmHV2hz7TAiC66vvnTsiC28wgPARvqNX1MWk36UpRWGakdgwcYaT6DABf2Uv6CFxytyZHoLZBg1Mf",
  "key22": "3BBcUd4a7EexcV22FUn79p1U25i2MCeJ3YoEpUmajSXKaoQSPiDcDoaZBfrfxDAAHK3NTAE4bn3zo3w6dqayPBuP",
  "key23": "55eKBUrc8SmU92hyfHh3FA3w9975iyhoxAM3zpn5e5EyG2PU9GSrYuc3i1BEJ8qLCpQ9vC6NRGbgADXT7iyPRcbG",
  "key24": "5ZyShgTS4HfG1uysb86xodymyesEw2oAT8mMiRkzWxKWFWjp1Nt5p1XemzC1ZCwWPWAzXPBy7411RAVurWNdrDND",
  "key25": "35rJYNpP7AoUzmah9jNaAKeXEEKgfGqYGexRd42rQm7MzSwk2P6TXvnhvYki6QBD2uo7tSqQ3x1yQ7QFGp8uUWSp",
  "key26": "5S3fdL2CfAnyeCz5qX3ioSFJLxUT7ZY8BXh2rjiUKGbWiFRSM6pvwLxb7GwMrNGYh9Dygj5FJ8TGidJ7DXUrnHHi",
  "key27": "2ZzNqFuTBZUJggCqd9YDLyEVzoy1Q681ETZcvaDwyDsvj7NDxtf2traRyb7Xw6PvuHm7zqR6dFfER4qSfuaKRjo8",
  "key28": "DV9QCzCo2d3YLQ6GYuubUwtstHvjAb1kp2xu2jqX6A8auYZyai4iasF32axX7Ctw222ReQGjbK9RyioZZBMdTge",
  "key29": "2cUp9AAgE99U5ZQcLJpVw8SjVQJ7KnXeq1756Ht5qeg2kdjGyH3h7b7C7z1kgYKnnySSsnWk7qhY5L79PyYM5Pt9",
  "key30": "3XdVyiYDKfai3q9ghNe81rCDPvXfQWayReT8zCbj1kNwbsHPmXo3if9e1v3kfTxtMkbWehQ9ovMVNiAH3oaG41Xy",
  "key31": "3qujZfg9qH9LxoTpzCVL2URaPwRjbRFZh7toDqX199cUVmRqqaeix3rntMr4zPJ2nbF8s6wv3sUuVu5qajLXrfcK",
  "key32": "2kpixEkQ6fJxXmAhGkj7WTU2h71kdr8Nx1KdTZBBphm8rsxqSDRwqPq2jyfdrGqHFRFGuyxw98xaWoyvDrta4rrp",
  "key33": "3We7UTBUAR8mVAVyeLBUzs245JNSq8t3MD2Xzsawj8nV7qtoybuXznfgncPz4sKx5DKY7ce29nUMkVbfsuieWBm9",
  "key34": "bRJ8EVqZpExtUMq9BNtmzj9G4Wi9QcrCHYQ5mWHbSwJribM5ZBtFznAZoSumiHekwR8N8BtS6pZw7RVtUohfS7J",
  "key35": "2ypMykvqpGCgEPa88vbc3yNCrq7XPbWmkgAC7hchJ261Hjyy9cQwhna4fQAMvA1vSWCmQc1Rwfomr9via79M51P7",
  "key36": "5UKgzqqMDd6rdEZVSA7oscBUGxiPhDaZFwHLNU7AWW66iZFfXPikhsXTPFQ8kJ8oYwSTZwixzGsw9dSvv13AqmGJ",
  "key37": "39eKRRT2mfZaXH2gtKr8guD8344jZ5FXRaxzMF5MjipvTcSH3hXCL1E6qZo5pakpdKMr67mwrjk4W5pvsmEULhzA",
  "key38": "2Fdf4HcBYTERvn7TQ7vWeDofved43BnRKMSK7NYuyF4J6QNG5Z5DHPvAMR2kKdZ4zi5kFeEPpDq6tvrvqjEEyr2m",
  "key39": "3QD5hefnBPGPmffQB2oUc2taqrJsJYgJYXWhUbYucuPGmojrZcFTuorGLHNKGW78HwKbLLMcEH62i2DSCDhJZPoR",
  "key40": "3aZX3v9cu5AwinYVNCtsEX5bAEKhR6AgqqSNLA4yBYSoMHFcM9yVcPXxx13P9mtePbgSkuh3RgRw4G9MWnG3WrtR",
  "key41": "3mWXDs5GV51kC75BcBR6jEKsg7nsLhT77qjSit1M4TSQ1iDRxLouWXndTjq2Jn2H4sgRBVUkSh2BCfhsDa65WJLS",
  "key42": "4UYBE7Smus4nLSoSKKFWD24ejR3qV8EkA9FXTDYShRxbwQcHA8BFxEXkT1rLbPUimaa5D1mtmiu8tRpfpdbUnmKn",
  "key43": "45mryYfziUaTnHvvjx1kzUwQRAvdFKvbMbWHuKgEx4crnuGJCduvz9sz3UoqipgJCQoJ8AMX7PKu4ugAUBE4XTGh",
  "key44": "Q5SFLWdRM3j1ta8Fz5noYQD9WX97t4uLSaBcDhc7CEGQRTky6Rjjqg9nN4mUz4kDnpec3VWauG1dXBdrBjFckj9",
  "key45": "3QB6GwkwnxvWYgUYUYeECfXjvZybCHk7RTS32pihTovq9KVPwEkGQWhtebNx2WeHCQPRPcLfpJyceWGoLkaV9WnJ",
  "key46": "4YuzBDPC4A6DFcgrq7Vn5Cg68Rv6ZHaBSHAXisS1KYEUkQDC3mVbMc1q1kNCHdirwP6SeNxjuY6NthJYAaHTsKu5",
  "key47": "44k7dJkbToGQHic2MVReywuHRv3LoggQ1wGpDCUPvy36aBrtczdyb4eQFr8DrBNRTtEny8ETt9C768vZ5HUXUKLU"
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
