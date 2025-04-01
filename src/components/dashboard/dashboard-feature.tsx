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
    "JQRSmLVSBawkgfXzsjNLtSnySs2k4rqTWHCUdED9iyE9331o2GUNvpZ9PM5niNMD3bLpMeHx3fKBtrcmN8QbW4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dETutHo8Zsm6yjNM2wqu2fJ6ENsbsrpXCZqG1LE3bUcTjmKKupPfwVfMPnGrvmYuehB1YnMUCvGbhA5RaRufDBQ",
  "key1": "zQQbWwCr9iy9gsMLygaw3WsQus3TXKoZp5FhHCQbRCXBWnL7oPdvh4efXBpmmiBFT9wX8ouWgo9FYZGSrA2GCc7",
  "key2": "4GnA7UJk6PwWpe9NF59czMaEYpZcf4iJUx1cPPyock93Fp55TSCww45GCgJcu8jmRBmGzrxW62JB68nHXmzqzJ4b",
  "key3": "25g7Lz7D8XYQc1ACdhzY8phXEUmYkbXsku2ZfxnWGgLibZH3TH4XEbHZviGWQpHmNGZttSm2fZYuueHCfwpqX6dp",
  "key4": "34RpLjumCowuHyiax9cq8jAkUE1gB383CnN9nQiZR5aWvPhj5miGEpLLHbuQMyM2Xva3DnaHz7oT9CExYagJDDFS",
  "key5": "5McwtwvpTaTs9zHU6jUxVSt328DmAxDdGdDA3eCRVf8TAGXi3vQLboVUHAkWdQFH31xCq46DUrPk1tMjYVRQgBBU",
  "key6": "35AyBCJKEvAsAGhNkuebUybALKzbmv9st39NS78cRLXTeZzMWxqf95y6KUDbUUSPCrWCozJiWCUVcCjakTmRbTMY",
  "key7": "2Z4cqxGYbegoznu6hc6v1mtsrLd8fxf8N1hefmudUzHzYHfuniq3YtkZ3YKxu1oHzfmNjeBq7xtpYcswU82MSgpQ",
  "key8": "3NZCJkcDB1XdWFVFo2ddJrMXq5DsU6KnCt2SEmitmSNAtCqZb7jVgxtLXE9QVEtdqLAnjFfzoFn7yVdyCprc9XFC",
  "key9": "vKfvokGb9DacTRaPy8nXvjvX8yBrbGnb8djneonTxKZ8b5WUvhA4xRTRov8NfZuVxGDVY3Db58tqEVfXJGMLAKj",
  "key10": "DGTXhgZxwanDhYN3Eu6LMJfTmdXHgZBMR3WiW8RJ58p9nGHfnXhnCJYJRKiVQr6rKPjrBi1g5YQoUMTHux9igXt",
  "key11": "21eVBEXavZ4viTwP8EVJAYEpwaEZyAReJB5X4ZotfkbqLVZXvQozuTo8dgQZcmLfJ9wxBUHfpz5K5q7Jv7nDACin",
  "key12": "2kvd4a4p23ngaCVUaHaa3FCTaFHiBv9gkya4779E9gm5cZWDjerJe73LwYkvPNuJRa8dtK4dogf2a51ZqeiGhku5",
  "key13": "48JvzPrHNcntmeLNmR47xgw54pcEwK5t9to4G3wwNpPuj8fTVj4B4joGbZkme6HbNQoMh9nMFTwd1GY7CmyqHStY",
  "key14": "32aoWe8NZPJGiwyF6hmwLZ1tUuqqnResY5Ugrm6BuGEXxjCAx4LPtAafBBMiEEmhPNtRZtNxUH9s8Xv7q3w5yFQH",
  "key15": "3KaSwdk3JsyVqFbbbBuVMgG9LdTfiHQTwMdbCMinrfyQMFJzHSxofpXc86mVKKGxnNGkm3XCRpHPvYpbcUpdxT1g",
  "key16": "5dEqWsfaWEQEnj3bnzx695QNcbW9ripg54Ngs9pKPmhbQaH12fSgAPFwZjUXhjTd5FW7PZxMmRAZpKufetnvpHdU",
  "key17": "51zu13z7KPwjY2ipkj9WuBEymVktpFW3pPwrZzLv4MNDoAZvCSgQ4r1a8g4jiaZHmfjChfGsUDAP3JY9YK29VtJY",
  "key18": "58VGub4P4MAj6ay4JCZTszg6vQWDNHtFnKwpHGr5ekVEq5xsPQMPb8SQ5CrRk6e8kmRFquRjkVTHkRcCFp2HvV8g",
  "key19": "51kCGdVUyjfsh5DnSm7bmuKcwVGVmuEYJtioBNRcJkRNCmYxYR5sTR1z5391QeHvmQzgPxnbw9bGmNJ96hbJFA5n",
  "key20": "2qJ1j8gtCQDXh9Pk2rv1wSLxScQreo2fVNQ3EicyvBHia2QhjfkkBk1ad145uUri9QX1xj7GkEnvDqAojmGe4kYa",
  "key21": "3jZWt6Mua4iUnTs853c6Lixw9UreKyXrf3wRhLx1TpGf5jbFBeVG2NdYVJCaB4vsW9rfi6kc3eErE8XicuyyZaf3",
  "key22": "3vM6bNcMp9eVSLxgd8iCGK651K8b11p1BtxEqAyeoMMToQVqea4Axx95nKMLRBR6P9sUfyD1wtvpQ1qV1dsuNNgC",
  "key23": "4v8zkhSK1p4S3t1TtDLxZZp7RBhc242YqLDyHaMoqSrQNhWarFzbbPg1siUBDtzn5zpxhqGVvHsiRn2Uun1FHqQD",
  "key24": "dQutyZ13t18QyaZNkibvfLdzAuyoK1rgdFr49CWNirZi7yDRpwDisnBEkzB4dK1dexMAqaFzWauvaRvgV6hURo7",
  "key25": "39kn3SXBALBLUyF86xVvfert6NR1DjnRX8UUAoqEEAdX3TrJS9VfrTF8Th7uwxG45burBS98TpJ5DXNLn9Tz4T2N",
  "key26": "577uLLfH7sTbbPZQtL91zAeRwhUmhDNCQEhQKx7DT8GmDa1o4xk1sHUQXxV2FEDhRRHDdaghXt7k2eaGLZyQFWwz",
  "key27": "3w818RHzvToL9xcKuXfAQx7wBrXqbUKFpHjSkmNuKzoYuwG7LFQ1cRjJwKjuoUKBmmXD86spwCVjxHFiSeMPgBR2",
  "key28": "2bqV88uywCCGMF12qkvkaY4CN6VMaANLjWLbwuesqio7TgqCcpDANwTn19fnovm29QzPp78tEJM7bYm8xGekXx3E",
  "key29": "4M37wnK93UhtcNdP2HJrnqqhTa2Y8px11684Nzp3Rq9tEcvVSP1GQKsrkVFebAYAbRL47yHSibwPge6diioAYiip",
  "key30": "53cG8SsQhNad7xzZSmPtamcQjUihZ1uqdsxujGqexaWSYxoScbJFu1VM3tgh2GX6EJeQ4Fr8Cpq3UT4RzN14xoDL",
  "key31": "2XY1igFpZ5wJwNaH7diqiJD43CkKnKibFCd1hMrbc6SLRCFSR6pfNUATX6k6bRRV18AxX6MXQ4HrRJPwGSvsS18Q",
  "key32": "5WQEvMSPwuznGnghkynwYNEwhuwdVkHHjdrM13Fnr6ivC6W4vh23FrjYLYRgSU5Ku8cZRpq95aUFMcWPyehvHWr",
  "key33": "2Dc1oK1NCVrcqU885aPm125BRgtiVkBbSvei2CoCGaA9bCN77fQS8ERfEWoDectJeEfikACWHAvxjqdpstShtL5D",
  "key34": "WDFyAXe3Fj98VoMLayaiHr921ExsvpvGX3DZX3F5Kdo3CM4VQVZn6mQiPNDtmbFpf7YQVTuDGAnrXd8uLMEzTzY",
  "key35": "65H8fss9yvrVMs8GVnxHYQ111yp7iarwPMtZB2yJGTn8XyCwKcE7r8pYnvC1aQjHhgDioewdLXbYvT1UAVteyJth",
  "key36": "27zY4ymduTqWz94bvMFeHQPiTRayhkL5NjokqJvn6LTLs5mMXdF4ZwWdrj7yGZ9N5iurgxacRKfZE9MNochyZJ4V",
  "key37": "2yXSZrU8QkgzVbryFNesauaG6H2zwbUZyKexG9pZ7AhY3kg7sxpumwfDsXnt2Ek7BbCsy6xu9qhUKdmSCL87BQvf",
  "key38": "4111vGJnXc4ikQqPcsSQbsHK3iUQfuN5dzB8ty4wncWstGsLaaU2Q5BPQyMYzXVj4gKyn6cjzAWBzmzEz1vzkkFM",
  "key39": "4L75cXu5DfSVAixGAsrpvy94ygCBbPeoBMpiqpgneprqPmhXzoMigASeH5rFPdg2Cv7mKj4RWRE6AUYuP7vwT7aa",
  "key40": "3GD797cetq1oqKpcBK3LSxGCnTaQao75nUc75BQqSNnziK4fVNvnwBzVFr7oR7DJbWaq16PFPGMXzex8bKHTWB6T",
  "key41": "4WRXiEeD8AMz6SCHiecFnjg4i6qpFkzC4d9oxBc2jnQmkkCM9qvfwKcUYTz5EYbxTi9jbRHAkqE4uWLPbw1cDZ1f",
  "key42": "nZck71YkSMDvMS84vVxjJNcZR2qXkmh44rkE7wrzTY2L5gZY8in2aHVgGthNGwxiDgPwt12cKqnGgSHqrJgsgP1",
  "key43": "3jQuYdx8qyHYNA5u8ovEBrGLHiRgCMhZoZYBkEKswxhBnKMDKG7SQTQ3Z3D48Tw3jxVG8wDa8hKLRBMqb6t2yznk"
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
