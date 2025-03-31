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
    "5D452r4ubUgPnH9ykqy52WotSNyP4KY8XJcgTaVm8JCwYhq4hVLSnAGVpZ78CL1HUW674kKVdnSbPMgwSEVmF1Gc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nEvPzbe299mEBfK1VDYFRNDcLXhAnREAFtZjYkRqT9pFx7QZsaM1VCnPsQUde49sUj1Q6HEtm357G3pXHN7wH8z",
  "key1": "3zqK1aFBJ37DSdEdz63cikdtde1qp6cmpHuACwDCmgHit45CazvFeMJH96MCXhF6CceGnEkzyS4ddTpsAMjqF2dW",
  "key2": "2CJL9vYMwnEB2EEX54nwHSo22idzD7hgUaZofyfJzwagDwhMAtxioeijbxvLVvFP4qNrJdeskcrNmcLbPoCcVNUq",
  "key3": "zTQp9KzNJGGHPjWFwgKt3xdkGbvofWkW8dcjCTRDqtRpYki2oFP4GDyABbMLxS4rRwsSqEE89VyeBhk9q3VvwDH",
  "key4": "5qvqGTLaCVyZkcyW1tPYoqx7SituNRR2F3GAji7KUzn2DiGhqShze1wGC2VUkUAiyG3a6tNnE3Dum6VMsG13SLJu",
  "key5": "588dVRGawcX4TqCzJwf3kuW12GSBzMxYuuo5YLZWCKyYGyv7Leb6BJpKyQENbCvvgYtYJLH2HFkVjfWGVS983bn8",
  "key6": "4gqr32FwUamzNwj7LSzDPNsd5KLtkpehryXC14hEHpkThTh5gcVJi34gGfp3gB8zmU1RKxxwzKY3iRLxoFYJdSSL",
  "key7": "wSAX66yrmU6uv2TFeVb6pkkZP2JZJKQXspKksNxmSKd3Zb5aYvmKKvBspgD4voy5EEnHf6ctHv2ARtpWsCweKzA",
  "key8": "4gRmcLqm4V7GyBzWBg8r2vyapas1BRe65FAf6TwT3hPyKeaCRouVBcHnnQuhhD7WBKDbAByw65pZ1QR9eDdG1uNg",
  "key9": "3nFxwi67JybKNKDsUDhqbgHpXysTJddHPobk6ibYEMozstFubBwrBKjteWrTBuiDozDNM99a5A5sJzYzdUdJ3YLP",
  "key10": "45eRwWjhmvuZRSM9WsBT2JzihfvdgyVrSzswoBh2Ay2FHp9YpdfViMG7niAtqEJaQsfKzZdt1qpXyymLG8PX8i8U",
  "key11": "4mJ56hfmBPso8aZceCWtBUFJWrEURRdnpG7WmYvHPgfigCgKBr6dx7MP7DZ839VGsJooKEjT8ASjj6zNZGhuo9x7",
  "key12": "DW7G5hbEL4TuRZjCvt1VwWt19ipm4MvUNXZZfgj6Q4cVtVqhH4wc8separtFPKDLVLkTYUXRzJZjvDdCo2xdGe1",
  "key13": "5R62x3fef2Xmo3AsPWYWUZbJ4FLhDtoxnheZz21vumjuvLA61tATf6qpA85frT9XhfRxieqQpZwkWb2Wb83fP5tL",
  "key14": "28QyExNA9vfQAenPK1fN6re4W7qkfz8CRYoeLeiUv8dZU8PUbBUuyL2pXv4xGpnnG57hQeLoCAGnWVusuQHWamqW",
  "key15": "sTCjisHTfYhBNaSVqCyNG7qrUakdgT2Dwb5kMXXueguRnLrympEpyog7tJHp5FLKJ8Go45oEfmCGwYwm3UwqqnN",
  "key16": "4o6ZLf8iYahT3N9PbfdDcP3FWDbvt6XLFjUdrrmXQtNTaS6zadxjs2eMaZoJeAX6swQMTfv1hUcbow6fXZxLXFbt",
  "key17": "2w5aTsiL4CCNqcEYLSQbNyfvhbSTqq6DySxaa6ssMUnjHuKQjg5Ww4ZH4D2zTtsYcopku3xHKagNLqHCNJXGVSUu",
  "key18": "3rgXaC4Rm9ikvmMTbZi9R89h6L1zc9FVmUeTK4YLR5g2vxe7taiQSQaSbuQ7jbvjAqr9FyvHPXyDaj7zaDLgwCN4",
  "key19": "5BmZ245trsNBLpzcq8MsYMUq2A3jTdPRMpiYLFwZXqNuErpo8WEUVUH4eVEiZCSP3WRKiGNUNYqN1QyghhQtkTmB",
  "key20": "3RYiG6j8icbeHS7PssQTJNsGfxn9hWqsMweWkbPa6p3SoH8gcPLzkdJEiqnj3b6Mkq1Kv3he1bbLgeUcyYGy5t1R",
  "key21": "26V2qov5XwcRTuNNMLhdAyubighvjRFffA3NmKL1jPSRrfbM8jJBE8er9bn1eyLehwiqTym7HMw5zxBLJ7EX7WuK",
  "key22": "54M2ysRCAqFm1ruYuyb66jMSGhWs2hutZUtGJAMyCFtCVpDzMuuLz4j6Xpd3Tp9r7TUFaadeMuLFdwTYJ9SzbCRC",
  "key23": "5XLzf7E68xQLeTAPTGg4SYXusMYvpXELHLECVmeNBV562xHeQ9Ru2Xku3mGBRw3ASq5xjGa8UHMD492rimbUcD8P",
  "key24": "3Dhr9hzZ8znH6sg4SWcX8qmTUjwAiaQSUNXtSdf4aDELJ1adYs9qdJtSaJnVC9SpS7xjGwihN1VigGnjhk9mUTR1",
  "key25": "no8cA9ZAEEKhyvvpndjJcGKeQTyxoMYzgczDa9cqwEimsodtcLB31mAUTSyvCix91jHqi3PaVeoEmfi9hpmCJ59",
  "key26": "4A9CQQybiri4TZtnrQDcoFPnAhkrMpmtrCHS1aDrCkwJzWtV2MamH41r46dzGqBQSE39vDfhymbFAPM9Saf9QiQm",
  "key27": "4wtwGfkoJS3eRuJzFdFcUqby3VsyYixWiUkdQUyrMBUqGBWnj7qRdHCu3WaU2wnz5PsLoUaJ3RLPDA4gKt3aLMJ1",
  "key28": "4QhN6fbnTawg2CZ8g69rermhm94wKcJXpiQdfz3eDyAhKiLpRfyDoWtJ232HXd9hNd1qqk8RCeFXXdvamkjHNRZ4",
  "key29": "5nK1NQ3WJv6fUTJysSfEXASFwvsWxMzHPrKVwhvoexoxMjrGud4xvyDNqTRgaQDPnA4UzKKtt75fHGCMQmPtNWZu",
  "key30": "57FVSCThZsqA7ozR1js3bJArLTGoxoYsi36sa4X3Ms2g7tg1XYmmboErGfwu8JWNmTD9h3KgvzkumTq6SBpeYUQQ",
  "key31": "4mFaPPXenqHYfHnDm8kGH9mvrfHtDrj2QXYiL37RnNFW8mDe9syzZeey3t6DoWB3hXeAXvdss1EYvo1s9jhVsewr",
  "key32": "4rBmrV7EaPX4s1ZhvX3gbHwvSvTChqw3g31dfomphLHnLssw36gmoDujMGSETzjSiyCoXT6PQSeptrQ7wLF4PhXn",
  "key33": "3oaLtHnTyQ5ahXSVXsJTiYUGFfvYi9YApqk6hycaaG6nLkGYc9jfZHfWVM7t2gwdmD6sVUFs5Tz2BvMUcSoJu322",
  "key34": "5fSmccMBNTq14rpcqdpVUoaBfaYVjb5Nvw81WdHpYQcsxrWtZajACroT8esvsChrKJdPbxmBhkX2mbLaSRmHyJCU",
  "key35": "5nzJnws9yNAcWYZ8hoF8tJmyEwieKr3bieUWEUyje6iSNTmQNLCSgWhb6QCAZTTEuLzWDwMYEG57RqjFKZfpRrrQ",
  "key36": "4wpEUanTXg74FbW7wyVerftdnHhZsyFduSWUmRjHtCTwhGhFFsLL7iK4VSJruBeXsyisyM9KrNRpT5WwVw9g8KSQ",
  "key37": "2B9AwJhDQFd1kTY9aaPTKJ7n5q8V1CcagUGkQNJpKTVfq2KwKa133jbXaBYqDGhe8Npsnv4UdAZEurA6BKPkwWZ5",
  "key38": "58vKeocF1ARc7pXPihdKoY74nCVSKvvsGUnD9vE4jrRp1XpnwMEBK8Y2aAzQrTRXs6BLxqTSVcFSPZS2U2nYXcjP",
  "key39": "4E6vKicgakw7MRnQi2MSpXRezJ5mDCYVEByAubsBKEWLcgQWvk7TLr2mi8nvDFMNREVmWi9WNAtqUWdA22LmGzhE",
  "key40": "5qD5jYqVN1nq4Nm6shqXuZxny3dx4QF67ytEVtcb4FwcetAKnnXggkgMveJkEYkKF7jrKDVCfFmpxK8gHWDZ58BP",
  "key41": "2CjJVhsvnUapKTJWZGPZvLPWuAW9A1QLecPgZNzokyGwDVbyQZDfVJDDeTcM5aQCLvz85ZrxUk7wGGhZW6mdg2Vt",
  "key42": "318DFQ47rdsyHC89dsZiPZuAp3FUfzsW5DHSiprBV3CM7qnGRQbFesXCZfGG8Me12iPi1EufHJozyjBzBMTWPKqa",
  "key43": "3ceRNQaHtqKtk6tPU6C84cuNbkSxeETpKkMioM9mPCKydNgTq5o5hvc1LekNsicKbsif8b81n53gPxGeVHRH2ZWr",
  "key44": "2XshSgW21E1FdVMbuD2n6j4ZxhVP6RsXxuHw1nMjXon4sdhcaVLyqUZGx3uGUmSGpk7hBfMBWRm3zCK2TccGqjRe",
  "key45": "22oNeeuk9ViaEeYPcDsCHYTxyZHU3YrtkYgfRkeHmMipnn4cij1zmpTy8eJ6Qahm8xdMUzRNLodu7wErbZoMLkAj",
  "key46": "5XTyQiVnCYwcoyFmvb1EDaCoo4PqaMUvYyoLt9CymGv1rxXC2DnMAGmRxZPeXRQRgd4DzW8V7AQpB2J7xt2HCS7g"
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
