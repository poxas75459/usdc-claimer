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
    "tVpEapTwFAQyx4fa5AN5Q6Wg4NiFA55x3DVnLgaZZhVaiNCjK4gsHqVSs7h8AbRh5CtsggiKa5M1zxFkco3Ux2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DE4R7F3yjgoFe7W9HLgL35mpkUSuiQDc8FWLiKiWbWjLP2SNL48Cv62bFPnEraai1KYA7jjYq8ZpK1zSLQouz7Z",
  "key1": "4GAfvdu5QZJ5PKoAVDcyFJ9CrxtzefsYdyzGWAP3tcfxmxqAskJKr6yyKQVgmASwCcHWt1Rv1JcVBona5Z6a8fgd",
  "key2": "2qKAxCq54cp75A6awnz2xiuBFJbugBhEBTVcy3HdNvsuMbbVTyMhnxUc3GGCFLUg6Y5gToKvdmTvLPNTjTRDFyPn",
  "key3": "YDdz2wK148PuPunt1icsCYagKBYwsTXKtwZFfbeBK3XqKth77WX16bm8325bS3hfRiFJvNsPygwEr1erxXYvVyV",
  "key4": "5ecGWZZ436nqdQsQt92m64dKUAX4dgwffD92sHrFH3RLKt9FkkJsVFjwJ1viwMmEjALuK8fdN67fUtqSuR9pRYUr",
  "key5": "36trMf7sSZJ9vBGnWKgMjLXACDT4NCgNMefnqoMHVGzWkbJHTzJJ4UyFjpKRnP2Bbbz8H4cHfK4QuazkJh2NZCai",
  "key6": "32Qi4vYuzXn8VqSL7qbm455pBbUis6XUdYXJA2UcKwwYeTuWFC7z5DM4Leh974yuPfjwQLE82YDbDM9Fo4LY2fj5",
  "key7": "QGyVe6T9Gootn5y4PSMwQAVwpbQNLLLY9eJWuGApyBWhsoRA81Y2cYnRqqsgt3WMWytgWPDexQsxCMZxrWsfQuJ",
  "key8": "3gZWVSKJjqpX1vgmUFb7W7tj9YZ6UxshvRC2L1SX8F29bHrris1uzWQRmVTUTuxtocfuZ6XaJeMnXYdsYZsjB45T",
  "key9": "5d45xVDbPsPFmFoiwWi5CjYpEkGeXihvT61AjBexKFnmSkbTm7pv2ENH8mfCR7t6DR6Vw2Mb9sTHTtAfi7WcuS3q",
  "key10": "5UFzZvQzP9C4uoGaiK6DFkXH9rMiLhGUNrJEsxhXrtDPNe1ct9Fcu2ot2RTGTYjaBJD75cSkgyiHgXziS4qz7TP3",
  "key11": "2DQW8q9WQVuCrrwEiNuHjGGXWHBo93N9Q7vdd8xMx7Smdxu2mj9KD9HfEbZqDUCm2QMzy1AdVJCpfai8vTFQzfHP",
  "key12": "2qagq2sp9aaYJbwNofS2hjjHXgAKi2FKc8Xaz3sJdJfx6YLynNACggm1r7AaE7nao8oKd3J3DFPEuf3tG88SLA53",
  "key13": "5dmBVTQPrrvfKB9ZYgU2TDG2qzEcQeBeEjgj5c2r7CxT4zYAbG7cwxsKG888a8jWSMpgZJwvZwyDg1hkR1FM1TbN",
  "key14": "3iT4jzGVFccwyg3eLAo4TrnEg9ujt42oLdFfn8Zg9wPehDU6VcrHS7biJwc7N3MDDBxSyVQNSyxHodkdYyFDZmGU",
  "key15": "2CPkrZsz8AWKNkwwktRwRhSeKQ6mKAKwyDikhcKy3Wrqsw1i52gMDE945UtfYkid89CoS8XBgtTEb9HG18qFcKvB",
  "key16": "3sNJzxCNzhgCNCeuoBBsudc2TzP6cHPFrBANaWRDYV2PDJFiP5ZDGkGiuZQhdK6dmEvj6hcjRi3He5yyVrw6m9aA",
  "key17": "2xTw1iwgdizGgQpfzk3h3hZdedLb1KUZF6ZzicA565vT4pMAjTazt3tN4QrSq4rEgQdyk2CxmWhq4S6PggRkMt2j",
  "key18": "RdQWud2DxGDmP4ct8R15HvMCxQMwXT3D8CUYF5TWoopikDYTqKLaUpJd659tW9rVpyW8bp9XXTaqG8AwG5U3mSR",
  "key19": "QRr2mWpi6X87sy2Drac4wmYAzfHiju7pr5gk15h3wqrJ4v8W1SieS9EmAsGjTHr8a4cRi3HMSvkpbujexndEihY",
  "key20": "3C6AKP1yaHGY3jEEqa3WirDaUf1zmo9qN8CMkyp6dEWyJdKQ49497KZEtGqRpo6wQE8TQKHAHzJzPYFakB4UuSQz",
  "key21": "3FEHXYvwEcSGirdfVDrA7Qnu8oWPCpw4bi4ckziN956zZ5dfi8Zbo9LWyN4oTY9NFRQVmM48T7XxbQD36oy82M3k",
  "key22": "ttuU8eg41kTyTyvSQaLHG3Sriufae7Hb9d9LjXs6oczyiDS1omgG9wkLyZcjNwxY4qibmPvqaVKTZva9mQgovMf",
  "key23": "2iY9j2nXv8j2s2cA4kkaDoBzgcEaqgzg2XJgQXsim8xX2SwSCs93cmVTgm22sQUNAZHsve4mAaCrMwbprYL5xGRA",
  "key24": "48uctJtSotjFeSx6RCEsLYh8o6n8Tnxnoo1XHH1bPdMavdMv5tvXqcqt9dgVnCnVCPZ37pNUeMktmqoXKZBLAuV1",
  "key25": "3MAUm8fmdJA7dDMzKPv5gdRQeKn1FEqwxYA4m7a7Z8Ms7z5bnXCHu5rtRtEd7h7tUJ2JnoPnYDdX5DXDpenwwGFu",
  "key26": "SQx6onhnYZg2CxYSwYDmtCe8xsLJTRta2F7GZ2GJ3pDRxZbPSRRB1XzdSzLoq3Vfv66UEYu9B56H8sXyrveySGm",
  "key27": "3QF96m5HSrphYYaqZZuJp1LJNjVhnmfdD765J1D1foRSooUEm3pUyeEJz8Wbp6tFd6yzwtqBLnxKYA8y9khfCMny",
  "key28": "4XrHr5ToroDVNmuK9m8UwPSaCCQiChX1L9rZx7FJayxbaAc5xxNvJn1sdwQJ79NGVRbY7aCe9DzwkqS6eZu6Kbmt",
  "key29": "3UhKrv1eQ2UyuHLRxUkJkSaCzPs4v7kuUckug3CGccHvisD3c1UszYNcpGTi8i7cR5WVz6zjqi6sGXHsq3uZEQeg",
  "key30": "2CnQkWgLxVgxBX3Df41X4V4EixFiVRu6dCvXkwmFEuDw3WMP2sMMuNRkkSjojFaqGMrsXEYJsF8G5msqxgua8HHq",
  "key31": "2grx9VWyKDPDL3EHQ4SbcHbyBUraVebEepEvNuaeo32YjXvJqjTApD8MxE1Z7vrbU6qeGcaVMQMFNnKcVoXGCgE1",
  "key32": "aazzWMzTats24XUKmJ5Gexcsm7Vb83tgZ6TEQycgd78B8Si578fB1qr5JYmctWpqtCUp3BZfk7VExSww9AfNn6w",
  "key33": "5BW6YzJbqApxg2yYcFtnjdHkqs117AXAhGngdP7Np7t1jJ3EVbzYSrLPK4ygTz6xaw9UW8Ru1T9z48TfQAgN4YUj",
  "key34": "2DVGhX4EseXRMu9tD6gVCoHUMrJYJMvP1VQZVKqiHm7eJGazzvxsrQvWLCG7AKJNrKFT7JZsvHZNqdpyixFSiHxH",
  "key35": "yT8yvQoN6o3u2b4gEeXU875gDn87xKpP3f7RUnh1KcCfYnCQW7FkggDten91NyRDtLoRYWswcozAiBD8gmMykFJ",
  "key36": "238NkD67h5Zwn2XZy7WRa7G426qDHGbjreLeFKY7dSBdoJygSiEnh61r6AXnVaBRo1j3CHNnGvvELEzZBSeFQgDy",
  "key37": "5BcvSZvVgiQh9FA8ttyHohWbmfBvYAVyLa1SpiWrtapxJjyesfHjnajYXGSdRYJWniSfnSQVXGWbdD8nFkaXeSsX",
  "key38": "2YXbmc5QvF273sqZqVtHuTCtcDoXLaSzXdtGzSUZgDtQrgjDQKDTPfwZJp6DPAQhCvupXmvA2pVrRb99wsBPXyV2",
  "key39": "39G13x5CLWLSJSUxREHWGwYqN9wccvYiXHY9vg51KLzvncFm4WmeJMvJBoQRyb74YpcGeuWwjaj2DCjKsVA6wYe2",
  "key40": "2D8iXw6SVMhDMmae1WhNguGcj9eZJq9bevp1Rgz4hdkubdU5x7Uvii4xfhCmVN4XrFZaU26CWW3yyFsuLuNaUGic",
  "key41": "4JHc1cFiBXdfcjaD1Zhnyup96ivmUeysL6rDHezSwbnagAGA6NgMCSAmnaetLR6q93taU363Nywmas9P1u1MGvom",
  "key42": "4acuayUkh4SkJcphovCmBhFBVVPEdMg32M9PaEktZGpp3TqkmPdsaVzsN2Fx7xgfgPPqyRDpYWR3VxRGP2NK7xhh",
  "key43": "beTJXLrLgDw6JWxyDeV5mZ3f97r9FZfNHPq8rhZcxhcPTyKJPh4Tmc1t4VcFc2skpyoRRuVcSWzPKnemJ35dKeK"
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
