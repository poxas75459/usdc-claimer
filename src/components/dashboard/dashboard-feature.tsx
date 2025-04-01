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
    "46JHWeTa3Bqp8hbJJm5VPTXvYSkhMPE9D7mFfUZdgAqr5zd764vJPfEWB6Syij4iNtUYByYfkd35AfHr8eDGCEKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qsX9Nqm2EMyE62bFc2NiRbE5dv53zCcNbBEjvE6tkFWjR23me2wKWaXwm8sjuEsxow1m184HAP5RZT6zbW2RhZL",
  "key1": "24kkv9pUrpuMrroY2MXvEFRRLEs49YALHLmRqhRYTwAAcY3xep4ga3siK4rPaP9cCwCq5iKQTRZy1rRvZeuy7unZ",
  "key2": "5Prp3qhwUxFe1JPWmsF9JS8iNQ3rftZKouZ6iGKnGdbeBs8Js4kDf3fYcq5WQdR6rb6rn3YwpCreWsHztqMLNisU",
  "key3": "43iS2CaAYrHXfT4iwoz9e58nFN1nCpa5ZeWxKNsMNgUjUpkJw6wGKqze8wewTJgevKfE4ZxYXKVANtNAKQT9R8Tk",
  "key4": "M5QhpHbgvJTwYn9Etjvp527hMKZ1KZcybWCemVKV1sefb1ABbFXZCJ946STgAd7LfREveSLTnC6dSktH96TNfiW",
  "key5": "5FiXATAGjGHd1dw5BrtMQypNJADhtG6qoGzo1FnHsBJjCkHC95wxRqm7wjz6HxhsLu9SKnLhrFFroFYyFnMYJ89a",
  "key6": "qEobqBtfdPwtKFh6wLW2M7cw75aZBhWw2JqB647w9eMskNePhthL61kipue2H9zteFJEi1Lw42X9zTR48K7WWyq",
  "key7": "4357c7HarenAvSoUNEwuM1o6p7wNezoepEmbiwNsfBhHVuFv7TJbrGsuqwGubNNpdAosSycsFGuNKBhNqdL2AYFy",
  "key8": "5kbGKErtKgPJzh5Pe3ai37phvaUhjJ3ZbbkTykGj5AtAQqBMvwBwQ58MZjA65oN6oqAPu4ma5EstGba6uyVmRXDp",
  "key9": "5RgoTZamD9wcJxk4Ec6uhH3jnMu9cEmtYqtCYXSqiEK7syzkR85sGNj9yVCqvuw8PpZ35CmyNwXVxywcEjdipXKT",
  "key10": "4TnsbrjpP4GgdryAcUoBHHMAGx1WFgHtdBVbtPSQPBboX8mGkXeeFEJtPRgMGRm1RqYYQGX7NMim7GMYAU6w6uHa",
  "key11": "2WrjwhgFJYK7Xv4W5WcVVNvHFv4xNSgtumFHHSo35NktuV7BYAXBzvQWH67PU5bdoLNfYKx1w1nDgp9tB7xgGA5i",
  "key12": "5RgnoL2peKVjfXmDqiUVjy665HH9cPfDAt3nK27UAUNqyMog8fmggpxRCiGih2DiwghGrJMSfwZvyynFz8gy9gvr",
  "key13": "5Edx3Y7x1okx5Tm4hTy1H2Muinx7JQJLP7rPxR1etJurfVGjbzM5HX5xRECzw1Xy248sUCJoC5hNUo8Rdjk92EY3",
  "key14": "56kiTi3ATbLVAKEZ42V8p5NYYDgvZW5todYw238Locc8251etu2ZQX7sT47gDR6xWppgX2e2NzTds82ohiLjc8Ys",
  "key15": "3aVMNpbXZj7E7AQ1xgdiXx2nYTz8D2pzb858VedprnwoaRFs2QQwgermFe4DjbMeKam48cNo63TMcVvs6uZqzfL4",
  "key16": "5nMwiorL1p71DKrueGZ5xxcgGKUFAP1M1z8MiuTyPEiiUpbnYQ2kPWnLobdXmwazBzXJhHJSxMpP8y2hTrb2JqcJ",
  "key17": "5xmHJQALjiWzTGSmjdNUgAJaaps7tjrLv7Kx63zVqCB5absYCt7LrxE1eGR2BrdTw4BsHwiQ5k2wVPr8LVXz2Nsf",
  "key18": "66Q6NDNpBaXMffqut1VvmL4kyT6Pm3cUhwizi693CVacq9T8cbkesVaDSwZBsmtUfqvRHTNLVmkwMGzhEeAbVKbG",
  "key19": "4jFisqTnvVkFKzQeUHXgSuZgLjHWz2MZ32TtNEG7vGPFWHCJaRy15DtX5aHPMefdVcQC4ranQN6JWmGVd4jJER8h",
  "key20": "2oX4yJziT8Qs3g8XYq9qh4AUfY6ib23VjWrm7dNRkvCQmn8iyM1PXTHA7tDcb4HL7FEBA3GQxMMidEaSqYdBvxpS",
  "key21": "5PA8tA2tF9VASELYgGPZXA2xgrGboMuMjU2YYh5LYSzZvZExscxkje5BBStzzGosf9CFCQv4GwgkY2KZcNTJEQe4",
  "key22": "2sbrqCq5Lh8T4bnTG8YztbEZE4UYRfxnwiUsXPUm3m88ctD6dYAWR5QPqjhTw4YNzszApKM523WcQh9hHAJCYHgJ",
  "key23": "3NQGAs3BQ6Hj3T7ZHhDdMPp6qkr98NFNCZKqHQHrqJC25xLuskiT9L6o6nDTguP8PtiekadydjMqXvrMGCmFQNcc",
  "key24": "3MkNzqkjyKiwswxFw6atEY9iPgfBxA6RknwWsEebCvQs7Bz6ubYcb2xsKASYwiKnJX9xWgk1yCGXTeDNeH6dk41J",
  "key25": "4EbppWjT7J8YfovBGA6AN7Szj4cdtRiZqwXJ992o1jvk7WjESKR4kiJN8C1ZA96EDfDUSKcrTUyfcwfHFxv1EC2J",
  "key26": "2ncYmVfM84XUdH9G3EE75KNjvchZYHnp22eQEoJ9QMt5r2TXuSaMGPZY93AThTohHA64jdh8jLFQYPqrcSzFwxb6",
  "key27": "2CgZSdTmAa1zFjmATYk5uceQKA45hqyVhuqG1ZhBM9tHgsvTSRYCfCoC4hcQLK41zf2bn4NQrNzjASskFNCZW7ZR",
  "key28": "4KtwasLUD6BLd9nMUMoDwDMuY8wZ4Epg7HCjWXbaSvPFWguSZ6ry1UAJ4b9cEQRNgvoCv6pYAqwuhaBCpT2t9w8E",
  "key29": "2Y1kRdsvVSArKmS6hohanA7NHhT7Tq53ukuU4tE6hYXMKChREQ6UDnLa63DGJZtUsGo3YzBYv2Svazz2WJf5N2rZ",
  "key30": "2QnYsnz3ww4qC8omdSRAghUA2vjQuB2c8w6T3Z2y4XBCyKQ3TT1nHy2xfefRg6Rx3uWhgMSNW5My3nvEaBoQJfvA",
  "key31": "1hRGpF8sR9DY2Qfuf2bK193hGM5WguK84SzisJqbN6WqW8G8R3yxemVaXdKPy4nEvtSFyBxLTV98yg27qsug6fU",
  "key32": "3RFi4cMgEisPQp1cUUwVZWtKG1CwzH7riEqzsfvb5srbMSu5RxM7dh9Dh9U4Lz4nW2LJ5aAC3xQGUM7179qheNCe",
  "key33": "2AX7kFvXTjTBXV6JzPQPkSkZygZTQdZS4MvboWaVTMKuM2agdMwxiY6aYCufTFbu1VSoVmMn3o1AHFYAgoxkUEWJ",
  "key34": "48ou6CLJjD7YRwFGWxLiNtMszpGbZYnvLqnT4og1Cst9Gnrgtc6SVR7zz2uZjKJ2QrKhCE7tMKJBHmQz9B1NPZd9",
  "key35": "3ntrzC7sU4ML9dCZr4vvzfAUVsEarTThqaZ29M9pJsBA7SnMEibZfm8GqoUiFGf9vb2RtUyHNttWFPHzQKPFxWXA",
  "key36": "GQPct7C3ivah5pS1WzhtXorrSv3r4LF5JYaySYnjA2a1P3Jo92ydGkaqbGHJuYpJNAB2D7u6UJLq1teyMk8jamP",
  "key37": "5yostU8MVtrFmdr3D3yvTgoJfY1YgX2tZf87zNnVzXbShC7bMsDRTbhrPC7Mz2VjeBcUeHvBoVBBztbJoykVjSYA",
  "key38": "4aj21Nvh6ppaX9nQRd9Dy3N9dZ84QVyeDHsxhvnEho6wu2E7ZtEdoGeoc63g2Jx1TQwTTpfh6M3HRuCCczy1oHhG",
  "key39": "aTdnrzEYeGQeEeitq6x3jiLESTn2KhnQsf37jpU9wjqezKU4mbYHSxixT5a1ivDovD9cKnRhuuyQmncyrEs7ojT",
  "key40": "4HHHkLE1nypHqkiXZCXkQvJthGXai1H4PpbRjHtG84nfNgavfNfDH1HU9Sr7nnuKhbqD65dD953VVGtPTKUcieMs",
  "key41": "3y82jxDtc9VjQTVUcyZGGVcViAzmbiNhcXrvKdCUBHDuUW3A7ze98S18DNPZKt2rVa15HDe8C4ZhG43ZfvKSjiFb",
  "key42": "62HuftRP5tV1VArLCw6RCwJADv2oErsXUPFFvsAj7pJ8fSJMX1KbYeLysZsfAfd5Lcjb5C1higfrMm5FTdFDYBUu",
  "key43": "5jMFCq8PobPLWJtczbVedKmnhugTNK2fL4tYAzybQ1wiTgQ9prxqGD4k2mMSuDQhZ5etKE2GDBAYroxTBr9KuCfZ",
  "key44": "5cbdDXGLRxzE5cUgHutb8TGcfekecVbJ8yNgfQUTzsAqtptL1DnnARQDQNAmh7o87ga2vzVcRx8fJfHegan7zCUf",
  "key45": "SXcGfuaS4miWc6Xcmefuk66yFhfqkmGT4jsoEZzp7eLFBWAqwBxtz2XsqhPuaTP9QoJq8XUGLR4ynvn3LboUYUf",
  "key46": "4E71vmAW8bsyneYoPGArTcehGQ43mDfnAjmfwikTo19n9sjuibaswY28hu9rUWM65frDqHoPsamWNBriHuRNdu9w",
  "key47": "2SjM2CUyBZHiZU74soiuJ5RQBYf3iDgzsfjWchsA6XCYsvmRHuEo2BZ3VMtzreSJaeSfykLS6j2dUQzPT3D2ATjL",
  "key48": "5yUV9JPzMW8ASxHz6r8wreAWbe3PKgnEZBVCGam1WhModfWeC2YnuZc2p6ZWAgb3UiehrNmRfWHzG3R7zWUHfyXi"
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
