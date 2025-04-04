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
    "3dS3tDEuyur7BKvdyD7ZobZKs2DrkaD1Y7qwPY6FiGAfUDQuJyz49AarU7dW2emzvnocUCRr3AygETNRQ6QdrJRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p9UHXSsGbvvjEq1tQs6udVdVSzaeHorwtDH4SCnG6SAVQWfWsJTK87ux4Nsnn6feGzLrtEs9yBaABgajpV4qRfe",
  "key1": "5zHgwaja7TrcH2uXPrzevJQeCmaLXvjHSt42iKkkJtt91z183VCHD5wTKrLuYkNC8x3dwRCUk3JZSg29FYNJqDMi",
  "key2": "tauKCAAwNbShZf5fFc2vr41mQ8oyJwj1EJH1HAXcn59CYWxMr5nVfYp7ujsqhVR86zaUrtS3RUe22rHVvuYdERv",
  "key3": "47jJwKHDwCjVWji2zijdvbAEtuBKrcsfmFTNi8HmZVT5LzdD4KrLAN4fTy4fkXrdUvFKrHtftKWjA46icdXvLJ5",
  "key4": "Jq1SRaBcQP5aK2de8kJ2S84EjKAnstcG9wYjbQPqhGz1jJznz4k6qHfhKEsC7DgiJVZW9TiiuR8h2B8M3Jn9iv2",
  "key5": "5jvmnZeJwWFZVAnreQdXnUcWF5kMH64vcxzxG85AMnfXy2XU8rtMscSoWf5bCYyU1Rk3cKp7LNHHgvhrEc1UsAvn",
  "key6": "3ZUuzdF564RELwVmeEAArz9VQeLc9SVd19FhgGC2dEe35uxZxx4iXmWMkxuwSiiGHQuKW99yyyxbSqhHXLQDPuBt",
  "key7": "ixhoxHWvVrB47LBb2ptM9aeKsrRxjozFRqsPuScrW1u8Dhj6k6ADFKVjD9geHzPJJJv1CeF2KcPhNZjUtvCG2Pm",
  "key8": "4sHbHdmdTJLZJfyWrHh4u9H2CA2P4VJr81A6Rfs9ngwnEB3m27F5RNBBqqd6rujNvvsu74ZetGkzmaxr8RTXstwB",
  "key9": "6XVHogDb6DundpfPPWTcM1rMa1JtmaaWFMQRSBBkKDERNm9mqau4gMtYPdAqDj6baiWaf5DXu3oDspiyz8SB4f4",
  "key10": "3riETNyY2hDQeMjzFBU2Jagk5NMfDRY5Jqo2jkMnGktZBgpZi9LmpxhyBSp6W85cPVos5UmVMnTMCEfURSd4qS1Y",
  "key11": "2m5VgcRHe8xfUExbkeRu1ytKoWhxaPenaeoHMYNAyBTNmRYJe14bXk49thqLZGr2y4sBTkrUniSnPW4cxZMfhHrt",
  "key12": "RR36Hv39XLX37iZhwjFEUsxjkN8GnVLGsJTki3pXnp8e6iKv75tvnhLv3hUga98gcFgkpWZYvpL3YasKpkCcA6F",
  "key13": "wviEwR27TTac53MnrvAYbnEoCTwzFDTywZ1SJwGpDzMi8UiQxa9p3xdb9zxinn3EzudSYHc3HBsJZzm5JUxB7mS",
  "key14": "63EuJ9Vfx8oaSpdJFpQzFej1ziakvUwJvgyMVBzH9kxx2wjym4PTD326B6VtRMw7UFqK8LiLtxfeBRQHywtvBf3B",
  "key15": "52NiiRhAvi1VPaQmDdvww9Lupy2cXZ3Ep33YakcuPMunyNQqNkhJjeMaVxB56pJb3CsgonYFS5TwfyBZXaLTiZTJ",
  "key16": "2oLrNboD332yHXStMQ4HdHENWCwPThmqKpBQRFMSmJuK9fpoXb2yNn9qrx8DQYhgq9TDPEQUMNTrphzdBGLWg2Ai",
  "key17": "3sPJhoY49XK8r1k7YEqTt5qCHkPAkuyUABJVASWRUuBmmJsEaupYhuqQD1CbBzrQdd617q8DRxBTQmifUhWLGn4E",
  "key18": "4Y51RG94u6qS8GXLPiaRhH5dEqpbN3girgXsQ8ceibYDBYMJuRdEy1QfahNbZM4e5oN6UGmw656zyQFuDwYt2445",
  "key19": "4HC7b2bZwVsQFc3mEXyT4FbF24WPuNHD4bLJYvC6ATeHQogUXTdn7TzYkpCsDGSJxUFEWkie7M1F2jPWAyxBAofk",
  "key20": "TgAY3tSVqESabH6ru7of9SfXj3FFUgnoC4k6ytEcnqwoFGWFC7FBKZZGhMNZq1Ej8HJF4HZd9MKV4iBwQsCZDRU",
  "key21": "3wAHF2tHYQoB4fBRDuCAGnCh2Wo1jAyTc4WCrqtBjb8izRN2aptK61wGkhP8XrZ6KXj1ju1TQUjvXsQJCC7ZRP1w",
  "key22": "2nALBpfQmRMFyArmBunbebRNtMHTtxZv3Em1hShGeFC91ndoffrJcqSGqceTqT41hv7H19Jv56fZJyMLDtzS5M5q",
  "key23": "2SchUA6SVGHMqiX8mBxDxhnxPMguzPWM2cj8AFPGCuMMKzU8JJVtS9NZewkv9jY5twekC2zmTdNR3PqcM7s8i9CS",
  "key24": "3Ty3b4Nb5X4xhjbSd1GMuxR58RJNcoRXd8EgPfDx1sq8ZjJ7WUEgi7XSqJw5TQLJGxiKBybsR3GXkvTS2a9LuZbU",
  "key25": "PFroUitxLfkr27XEcxLUsXZgz4PULVdSXya4NQeUUYAQDFniPevrotLypur7nMwyv61sjJ5v1AdyqL7VyVeMBdS",
  "key26": "5MudzE5M4ZKwxvFB4MB9kDTdeLxfHhq8LfanWC3FN1L58qhPoed8hVtZGKJcgsfnVMrgoZDPNB1MUwEgUXVMt9kh",
  "key27": "2ei1dFswQa9yV9iFummXRGa2AKK6RAqUjzqHrhaLTHuHb1izRe6pE75ciKTmoR7qn5B4X8cos9oKmXyeebyvZqoU",
  "key28": "4Q8vw2UkS1VN2aQLKLHh7YNR9vbXt9SdiBiueimULoA4YuYU1qJV2nD3D7DpnMLcbrLjGdf8HbBUkJjnrVmgHmrf",
  "key29": "28aysgbKNqsQM949pgLwiz8HFL2q25zLcJ7eXHsBrGVWdtJGjr9Zkn9rJbfjzaqSGLubMnpHY62BauzffbSojqqc",
  "key30": "3z57NPAHUVGDNMLF8TyPDeAY9TSjCyCRTLPzCX4c4dvQ4vSvcAjNTF1DBZiuR7szbTYCBgARqxtFFbg9LhCeK312",
  "key31": "4i6QxzRt7qhGu4fjxTKvzUGGEFLBJXPMPBjTKxYDP7PdUxy8rD97K952FEgYbWK49dzFBbcDj3pxb75FtUGQuHYh",
  "key32": "3n98H64sD6m9nUDoMmeQbEtjrW4oGpSjJnQxWoRnM3NvkYqBcSCxzkbAWHPtjfV4cWbBWhnfVcNHVyV5coGnWjPF",
  "key33": "5XaAxKV6qFbdPuiuRpqGMcPPdHcVYT2EGDESsRLjZ4dMHdELqQxSHPqV2sBjmfNb9rYRAds7f5FBzcpUgZkqiZjm",
  "key34": "2aKTcFBHUSg3ikEkSm3RwMGpqe357naLSov8WHQ67JrtViVQDK1TNjgfEUoadaeEJ7zMECynLNUfb34Hd5f1r7UK",
  "key35": "5fkmW4TLsxWcqbTHvRrUvoXq144LmUqbaQnLzY4gpvAGdidgZc1RueBejSFfo7oopwukePSiirLQcM6KkD9paQX",
  "key36": "9ytQgeyHpDcNxZEN5eyp13RW855hr3mBEgtd6ugDaCa5SCWbdaFrtB22Me9fHYsqGxsE2yjnpf419MC73nMcmeM",
  "key37": "EtLX5TMf1UHyeFLf7iHPrYCR3uKvfhqeTLqDu7AwyKTJ4DbAS2Kdiuj42SJR4dbdv3EDKyxkYfLNDsiwBtzCwjx",
  "key38": "3aR7GN53Jq58ftyKERPZCLveKX16Z2saeh1PXaKdyursdPQRZdTfj1vRf7jfAFVUex4Ko9n4Y8pmbk3LBQPcHbhm",
  "key39": "3TgzeFgaaoGWhtic2mCrjeDAN1FCZ6GTatmYKkAA2kbHnt3qQwZthx6LHmbDVDVbXdBypsR6Kfoh4XJBAouS9UTG",
  "key40": "wzmUenvUdnG2ebrW3XHucyu3imyb5ZhUi1rvAfh2HicLx2bzCKnJAUFSSnf8k5r6wwgeW5LAGAUdRVQVPTmhahS",
  "key41": "YcoXUdagrkZAmgEoXYqVHF9gBuzgihhMnjF8G6CaZdJSgyP8SAu4hLD2WtjKAXzTJTgDxKZHYoJUYnMsFKcGZ1C",
  "key42": "DpYqTnffj1RStYttEQQ1mqRUWi95jKTEE9v15WKN4qJX1Gpo2vKyHNQYsZE8s4yNooq7EpyhHiTHLEb6tBzzAEC",
  "key43": "3uqMxDtCSx8Ubi6Hw9jX4BmbnZV1FNfyT7cRCaBjcApp4REsHKhft2dP6zpZSHokfVPsxP9XV9FXgXBfMaPmCPRy",
  "key44": "4qx82CedDLkqBPbJQ5dqGDqzwTHTvvXs7Cjpiydj6WA1h6EwXFY6ZS4YooHb8YmZHbQ3Gd63ekdMT8mzJ4tcwPoe",
  "key45": "5CaX8eLj5GEE2UcKeMg6XBxNHSkn8doBmem1DWjbXrnAof1rF2UTQd7updQiCa6SpNCpXXXQsH8HWadhhGbbLy78",
  "key46": "21Caz4BPtPUsNhvKHNiuyfg66CFP8XavWQEbEdasr6qgzmLv7P4iFwgVqgy4TVQ5kAZPRZeMn3z8GSRDYtRMTgAZ",
  "key47": "2xzpNnaygVaapugB9CwR6ivZkUBiRfS6bq3jd4jvdwuX18v3NrHTNUbid9bx1xfookbncJWiqamiMjb7v5rfA9qm",
  "key48": "2YS6xvzj8yNgTJHJndZFZbaM1JV7c2cthKcx2tezC83SGce1nQC6yfBiwweMw37h21TfjzFMD5QcS779aTiFJVMv"
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
