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
    "MpXV2FPLbykrvEx9nRPwevTAxaNG1GtdPfGNSEXxnKyM58yDh2nLehR8vvJkhuL2r3Gkg5zQjxa8qwrVrZReGba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61cuJMkw5uu6TJjt6cMYouxDCwoBxXtRkp6KwjJXwUFF1mot8VwehC27ViwgdgZvhcWtD3g3Ehs1Kvo3HSmhM9qn",
  "key1": "X5S2Q2rszP35q8YCJRggq9kFAn8XaiKLErzf7pn1dXpBi1G8M4M5t4z7cv4QQSkCKeMRuyLkbSJFkZfghA88LXm",
  "key2": "5yTerLEky95u9S3FgBfx8UzaUkcY1x1d6tb12fjrWuuJyvjSnAYaRf8MTq4tSyfuMsjaEd6qWjZDxpX6es4vjkPt",
  "key3": "eqr8jNJnFzgg86oAyqBPkfSx4hvqnbakhevHuXTshzKafRa1C7B9Nzy6f3PMxGir19QFDEoENu2Q9cg2keVTEzL",
  "key4": "3fzGCWAiP8GeKo2ZFznpdYeqGkAQxM4FNizKBMJZvczGKGVauZsosBYHdsFwSchrm6Etxxq2iWSimUf8eYPKG9RG",
  "key5": "4w2ioiPmhzV6yUbMLvdVW1p2sFqpCiCZAQiBX9AxKqXhqySr7uGnZuQSf1XxDue1UeqtLVxP4LLcsoaSNSER8oQs",
  "key6": "4Sz1CxQhFZ9LCBhkmnaJjDQJdTew3jtqP6SomN8G5DDWssgPvWpTdood6vTsatapVSgTDfhcJU8UirR4iovagWLP",
  "key7": "s7V7GMMa5vvTop1XyeecgLw4gNa1dGhJg6D1hnKTiDDL3tRCKKyxkvdfp3hgvURyAGdN3hPGDdTq5pkboYXXsLL",
  "key8": "REyaecWbdU2T6U8UM2dnEREFxy7Jn9VNCqCqY8RuygNJ1LYaFEg2Up1cERw7rzSKvofQXAYZXHdwxafvvSgCTgU",
  "key9": "4iCFwU2TtSY2un3v1hv9w1B3Ur5e88UhGpycgNqK5WSdxPBUqZV2SJgfYg5atEM9UFzgxqjDNFkqnKWLe9EtCoTm",
  "key10": "2QQ8XXgdxWgfU26KRBqK9VUMSjHNxk6FLZSWXxB6v6jaCq1Y64iGxPiS3LvdzSshHpgwD1As4Sino1vGJFpUw47Z",
  "key11": "4HZRMmVQtgRh2rxhyj1qaHrEL7v4V27imBLSnW8fkGefkA9YdGuP16tLBg3Cgok3bgNgyVr4gy9qp7Q5u1qacB2F",
  "key12": "5M5wH23w51VZC5XnH6zJoAkQtMXtk5TfGjfdbFj2vnXVxNpMd7yVX36UqGxY1LJLXQpTVypJGYn2WYaJbU9gaSnh",
  "key13": "4VMVy5d4WxJcY6FghKuKbwWmyLcnwFWWCzc2ZvzKCdkv4YwabxBuWsRMVRszf9T7K3TWcb3U3jPoJYcXzbFpCgrG",
  "key14": "82fg4Vtt8n9SsoguJ6wvhJhmxhuSYoBoqRqesqbxakZUwcAoowPtfYYcrHNNyCw2EFyBPRESATfkAxYk65D338K",
  "key15": "4ijaQksWGx5LUUveuqE1UbWQMe7EMmKkurupnkz7VujMwzpc7uCJ1a9xPX9BvBUiAtgc69t2K5dS6jKNwrNjXiEt",
  "key16": "2oHSaFLRwMwnNCtxwb5L6YJKEGR4fiScSFCXQTUYyxAU9LCRGVSZAYGiwHU87XtXziz56wq4sF9djr51AD81zQWZ",
  "key17": "3kie8zaF8bQwy6cfrQQeSYpXx8PFueSoK1aPxFAPondtY9uoKPaLW7B4AonSziEh7iwfQmcS3RCo3Yf1A2ygUB5o",
  "key18": "Z6EmnR4huf2pZ1jntZ8iFrfGyjyKHDGnohwZ4YCGocyDPZTdVrvdZdHQHwxASNgwG1BXxR1np1ujprPKPnU1SEk",
  "key19": "2c6FENiD6zR7Hi2HbLGZJ6aoJay7JTot2dqJs2j8BE12tSbYQLQ4zLN4QwVuz5VPLQihzGuJ3K2TkH4WWoywQRdh",
  "key20": "4J8nBNJaB9ShNoNg9qFpAG2YW5u8EHXTgXeuAATV1J6RXkdMshV44Ut58MusfjtC9yho9YJoMpfMTiGDA698Znyr",
  "key21": "3FygE3mhvjGXDH3quRnvnnUXSUkysFbC5XuyW6SYwHYcRfFZrECv7Bo32Sf6c62Cho1HvrZfcN2xd7e2HbaSUu49",
  "key22": "2fuGQVHT54sNvkfxSCiu8XWxUX3s38uoN6GRFjxMAgGaWpknwZm5Z67UX8vbQvRmtCtNjWvF9ryvHjD7KKbmk82m",
  "key23": "5DTshKoMQyWDYXPJgRU2pWSzmchMrE8RykbTGu8CbW5Ci19c2WRG87KNqRxp5GAAY7QM47yq1YfiF7Smvk3dGgUr",
  "key24": "3pQV1JGgMtdyquQovxix7N58YUG7LVUmPt9B2KkbZXjTDRBbEMDKTiYwPPM9uwTxsuZZuB47iGE1svSWfgTitzfz",
  "key25": "25WoTTyEEne8qJ7tPqXDqD6xP11xg9YffaGoQ4KJgs9DFDVwZsArkL4HFHvLSA2nQpYFvNgQpB178TdETtBaiSGp",
  "key26": "4vZrQxba9cDJzmwn8u16VMBP5T1V7sMCLRAF8tFZNvtfHxBc7T3EnXZYai8CSkHDqLA78MVQVVvM9CKx14e4XMJK",
  "key27": "LbYUpwbRDkJ5cxf3THUMfLiQVakRxS9CcSCB6UeTZd6FQteFksiKZFfgycSxG7bMxiLabzgs5xj12d3FFTLMBxB",
  "key28": "5UgQmB3ciKHaNqYcByfHFPfcycQYtXpKmkV5zinRtyzKcPgysuzL3L3Sm2ghoH7T9xteBejVfFXCn1JJBQvbbTum",
  "key29": "fKUd16zLGnWw6d6VgUJRbGAK5xeeob5qVK3c3tUscBc11yfmM9LBbm9yFVSsJS1Ej57hrRp1pGEhadomRBQ3qFF",
  "key30": "3VAtyJiR7hBBrx6CT4PnaiXVpHsWUvyz41pxeEnvApwCLMjUcqMGpXFS4wZkryCgryvNhyDcGiMydx1FJGw9wNyY",
  "key31": "2rXR6okJtTaSigfKFCQCtKxMyqxv7E6rmL4cfqXSfEVLJr9imvrZynYaUCXVRT5TfY8YiGAUK3dMg2iCDWi8jk77",
  "key32": "2siG8RDRKycwWv4tL7V6k3cPnFVzfGJEWFSb5A4VjMXq34AkEBjbuR38D11BFVS4SzyYoMRzE4vWPVgFzCQNSnax",
  "key33": "3KPTeTw7eFAgvmNCDDzGD1ChKLfCjWXMkqR2NQfrCEUJNTFBtNhGFaz3dCiGGJFp4mopwxZgGhaPhe4ySE5EP2Ve",
  "key34": "3fxvcHYNSYJZ2Q22Rv7A22K77ZL2KGYL5QBz8s6BERbpn8bQ1WKsNQp6D9LCp23WjNEqts8php1EkCJr5G7En9F2",
  "key35": "4FczjL1jq3gWmxXQkLHrAD3XKw3wdVuvbAYpbTAxQ8Aawt9YwoPAQKWgVnDJBWUDLAw6f7ExD4t4S9FXmb3knCJc",
  "key36": "4VcxaWaHAi6bx3yJASDR18S8X1ZQrX7ptFACCJk4m29sUTGCKZroVN3cj5jtJoUa4RStJJQ93gcmvceMMztBeUYp",
  "key37": "4oRjtg6JoyWo19sTBeZBk7WMr2HYfqqf1cRqa8LGwfNCJLbJwULookN34UGC8QXRCQVFzuYveo5UeK4CvDye8Csp",
  "key38": "5mhu25XPNr4yiZQgrKKf3LsyX3dh4xsfUMxzyQDJrc85NGkgen7X49jYmme1ytyxZ41ev9HPjX7QuJ3D6MSsUAG1",
  "key39": "3zykRsFsxST5wg2M8KDUBKDNJ9BPu39LMr2gqpirSWkP1RTUq9W4WPC1EQhmLC8Kfxwy1z2bLawBjptQdot289gu",
  "key40": "2zRQiQNzLGEGfK815RexXSpCetQNfaPam8nSQoYv12RmVdoPR2zJNLb2FEUamCHRZYHfoShombyPR8YPsC4GemeT",
  "key41": "rG9cAM9FEtU5YJGPLx6myH9jms4kLxSK8bBKm1r7E9XJkB4AQWRmbjLa9cCy6cMXfszKjRQGcq7U3pYMtHnEGVA"
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
