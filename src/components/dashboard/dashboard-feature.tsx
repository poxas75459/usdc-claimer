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
    "2hwbUMrrVpwWUezLdBBUvy8njAKYWiBodqFDUku3EYKeBg4ipFkDBf6CkCb98AqgLmjBhCFjW1RF78GSbT9tQGv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZvsETLVguii7JUBpt7n8NQN2FnbUFDPj73CxjgKSF3yHhA8WZPrMGRN1dXX5FX5DG3mqNz4Mvs8ATnhUJuks1PQ",
  "key1": "5Vf8i2WXV3nyEG1giR18Y9PFUcWmZUE4NhDvEvAtBgAUdvWYkdXHbYBpPSFwxfaeuhgyxM9gNP3XLV515Srj2sa4",
  "key2": "5LbW2HB3wE2W7G4KybhiSEpeNJBvWCtsE53STz7YnmwUJ2suzdYiStTXEsPd2yyrAp4t2bpkm6APGX5C6GupmnY5",
  "key3": "36eUf7UdTiACqvU7owYpyTtxb5EzTnK9YbvydnGHYY1RzDmNaemMiAoYA34m5GyfzgxSmzZogQtVrsPCqMrLKW8g",
  "key4": "5aAy6UYLjNq9ypGmKzq9a8Ywa6L4XTvgKHHqa8QX86DFbSqZa5YoNz7FD1nswXcTfHb8HWLFE8oSZMeqv6QWqSw4",
  "key5": "37n9duDAM8h2D3QtfJYJGFWVPmBiHoq9WKWNrTKRs56wJZFZ6JHmjNxjUt8dMDBtESerMto48inCTiQ42aZ7UZVE",
  "key6": "4NSjXyPMuQzt7W4eNGYqBtFD4gh2NcJ1KpMrQXbxRkUZQ3zKNMpptGBrPYb3G9sbPF79LKweJUqinpS5GJ5cPRSJ",
  "key7": "4rbxqgioVjfohca4GgnNYXDGsdr8gfLRCvfkjNMwtW7qb5ue3gpZb299bCKfmZ5QPRg9ovECv3AoALi8o9tcKLuE",
  "key8": "LuvrAFYt4455WsNFVyBc26H2evA2unQwhD1UgFKp6842spSgKwFU9ZX5RWGEfKvFRZBxTFg9GKyUwizoA4Czr5T",
  "key9": "3tFiwY7rTjHf1PvKTCwfsLuT7xNdFUyGSdK7BcFyPBzYBqWvNjPrYwAhbwpWa1JP7enPV2qvc6kvz8xNvvxDpz6S",
  "key10": "2DJApGB34qdHui8vVmA9na92uNZ4HWnhMbPVBce9hoZHCPMeCW3Yk9kjMAJyMtMYCw4SdmZMD7KGQ2dEe5jWRfXi",
  "key11": "3iXySCdjhXKzP9Fpvm3u4niqnLkf2NKLDfFgnpkoz7m8CrxGXExiYcNHhMj9cHKsW89M7a9pRH5Fb2DKtpu1qGCH",
  "key12": "5dM1xn7qDr8h2TSKJKfcjTF1xTXTf9VwoEfXvt5Vpv3xrNE8A2HbjXxpZFCc49ovnkX6nYQ3aKtw1GbdbQ9fLLmX",
  "key13": "34GTTeAVhPGuqULBA5utyWofoCPZEQ6FUVHJyDSSRMNJkS7YmN582ahL1egPxDjUc5QSDA8D6EMThFAMgXN1RE1n",
  "key14": "5tGcs5pSEPBZa3K6CcBbzurEvvak2x9WacKVaKkFjSGtJPd8pRwLFT3UkmosvM8NWuWscRDTBctibx9XcKAdENHr",
  "key15": "2hwifGWVifYshjYTxiAzuzrN1XAq4VC3mDc5P9jp4jSZBWw9qT1pZpCum2po4T5Qjs19UHsK6M1MxPLGMSXC6Tm2",
  "key16": "2699owuuVmpJ6GoBLssERzA2D426WjMHwKCYwixmEhWuT4dSXAqg4zAkLcNpu8KUQ3PpAaKzi2bgr3SQFw5EpaZ2",
  "key17": "2Mor18bBoWLg3t1ZE5auGRWbfzuRk5cKVKyKFa5zNkKazFagQ4S99d5GsHh5yaQZUDxZ8cNYzUGTWzgCZ8GTtsdH",
  "key18": "21hdjUqw7PEyBFKZH3JZF5xJTxgPNAacaHRKoVoni6s4HnsCQa8JCuy2jXQ245yJav7dfUNjWM5e2bv26iY4Q5tW",
  "key19": "7qHium5A1MSjiPU8PQ8ufCtd9XxnKv8zeAmhumjeEqef9PUoDxv1E9oXr7VgZCXDEfEWabAkCM5NXwKUs3zDvVG",
  "key20": "2DcVbaAncG1QtY9cyFmbWGArAHGiEeSpzYpytAaDtqW5qyNjAGLi7FQRhyFCFoQxq6Y7L43WMrH2GtomeLZyvhmU",
  "key21": "5ZhR7yyP1rBvF2jUuUEYFp58oTs5spm1mAuBvirGWyEfx2w3XcmMr5QWodA4m3fN1E3ym4SfRJajBzso2zJgNCPe",
  "key22": "4FWV97ojGUTNSVhKmdrSPMF4pHTW12Kzw5UHffhZJ99oi69LmP64HBFTY9BTNF3b2MitNUDXsEHLUYpxSzY3Sb1z",
  "key23": "3cqoron1JEb2qmzDduyooLzFSDTxo3vwBXEuEa7yrvhgtj1YCVf65UmVH3ekinPmLDDCjST4eaZ52udwXZm2FvsS",
  "key24": "5uC2aEisnvbnpnKnUCRm6HMKMEW3j2FD1oPadDyR9vCGLbhqHyxDQjLovrT45o4dEYftQQuuaiWToZRGc1UihfuG",
  "key25": "2PiTyrrgC3Sbdsv7s2NGYpH544n36p6mLw8JFZJo2zBKFtgbKPNoK9PEdYWNTN8YWVk6YtGvmPxbsMFixSfpc8JG",
  "key26": "3Dhgic3TceXFSF9Tg4wgBvr14ZvqfJRu8qVuCPCZskaQVF58jN2ZnDmVCp31vTmqshYeRnJpEANuSz2qW36rB2qQ",
  "key27": "56BJoWw54wMtrBP63uGasTXvGpsgKSv4pUonofY8NECDRyKii7WkY9JdZ62p9uzLQxwRyzsjbbFe22T9zwNA2cpH",
  "key28": "59RCBMNuo6AMvmVC8UrGmsadGtArdfhkWAYqqUD7xDYpnAeegpwN4h3XFQxUxTsksd74awcrrJpAW4FzkyBwzQMh",
  "key29": "4TTERz1dbEo7ZGqZpSGA8YFtL6tPxaTRsK7Mo51XCThQT7yuW6w1NpEoGBytbPKtrPH83V2o8XZ2FTKj1ZMcMyWV",
  "key30": "3kxtzdJXHK3fbmU9HWjNaqYJ8R95dQrQ9XebEw2VExYdZfFdKVWaTALgm2HWHE2Cp277MdofYYoTFAV5aywgtxQS",
  "key31": "31nEneQKh4aZGTascWoxAzLNb6xnqD9sry9He35sSkjSQUacNj9zGdZUnXyo3S36HHk1bkvSkkgWZXVYm9C9dFv4",
  "key32": "3QtbQyjUrrwcuvEaWbDpqxBWLTiFtyRGDqYdg3qua1YVyFvVQ8bWDu4uiV56Por2LfaRpVZrYtHadisNygKesCnJ",
  "key33": "4mKx53p2W4VHn2CeiCB6LLikkXse1PvXV6J2ydbMMCH1jtWAGdyGj2JFMq2fTrWYi9vQryUevXEmW3wJR1MtmGrE",
  "key34": "2ntgrxtwj9ikeSwsGQRCPvKj3uVV4YduweYMNdJK9HBueiBYYojRV5PDXCprhSBrULX1JTZdDeT8jAQkpbrLjffT",
  "key35": "4w3ioKCW1q3UY7E1LxQQSR7meHqvpK5EKrCdQR6gfrHZGRfewewkCi7VRWUG8XKMMg7xCQ9hzmFZMACC5xS26dY7",
  "key36": "cgLReEhCKqPZfCCsqt5QAJDFivCweH753Weoj4T4QdhtUga1zcLk1fa8UT3juZk9mQuFoiXsnjKDZAyn2kWA4By",
  "key37": "5CVnkpgGQzTcp7tEZNkfi2hRb2gbzWSzVfpbYYr2fqfmQn2bfPxqJaGgZcwWtSJa12YSdxN2P8wumJABKQtCAHza",
  "key38": "5MHx2Dy9XnpBd22ep8prMWvZxrbanpBFHHdCbdpj917RuiGXBii9rrPhFdeWRVxm6DCKEfurcDTNFPKEak7hDK24",
  "key39": "3bWSRZxk7rYYW2eJtqz5MX1geuCSdxwqoZQUkQ7RurENCX2HRkUb4kwCf86pvzsyjtpkV9BcRkNhKqDCq9qV5roC",
  "key40": "3rA2Pxu9rr6htadJtwEzrMbVKD6rYx9qokkkWDTJz6Rn35XPP7TfqftVG3magkx1ebnWAQ9yqZrM4yXXF9WLfdVB",
  "key41": "gouoqGtWs4pJuiyrtMHLVNmAkY8dQ5S2BenNE7fToBEYMhV5eYCpixde6mb4UEzoiazm1AML8X7413MAVxhrTXZ",
  "key42": "4SwPS4chk9r2BrCfWz5Zcr4ggSNo8tPb3pT6zpfHjC6EDgisezZXKNaEVamtQwSQxYyfJ2aRbjw4TwxfofLYcXJs",
  "key43": "4r1JLz3T37kHHbhoJR89m7jeukb2991N9g6K9sYq8jjZknAsaTsBLqgQi8X6bWRR9hXvHZbwKveohkSYvuajAicz",
  "key44": "5ioWDNZuFbXbUrqgfNkWKCtRrC5yDcpzDBKeNR96EkmLqd69L6UtKKdLnU7ghCwTJ6L5VF5UNqUDHBi9V8LMZ1r5",
  "key45": "3N7ANm2xJuiykkmYtQ2fSjP1WT6BRSZKACLrEAUxWCUwDUFgabX6fwoMjP1V2KLbtYUfkNcogP2Kyi2wvbcB4equ",
  "key46": "3JfrL16ESVadFgGAnjo44PMFsR2KPiZjm7vbotA3a4Vh5djgRx5CZAuNPQzJurJc7CtLTKzQpx1K3bNMCaByXwEb",
  "key47": "5N4wVwa2Gj1AfnajjikfHi3jWVrUqyDUsaBcs7T2FZ8GND4V3E3UuHkSekBjhW4fi33t5KkCc2Y7U5nttw1wnsDV",
  "key48": "2PecHYDQSy4SwSRtitNMkXNiM4AKrjohJVLnRWesQSTbZuzBcW2dKAyAZpfTXq97DRqzJCTgrzUqqbivh3aewo9t"
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
