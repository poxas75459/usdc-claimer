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
    "4a8xEQQUusuBsAwsQYT2zgfFRenPRRcUr3BYRBKVU2ms2MwhcBB5xwpx8NJ6C5SHKvQAW5LKNvu7cgSnknnmmsca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m6ygRs8JnJrscymETDF6ftPhvDUrKLZ45q8nNwUcupitG38yMa8KJnDqapG2rNFnauRemVRuu76Ngz7LSPZmCcH",
  "key1": "4fHEMaVtTiGpgkx8vKSHsHMDRcvYJECQmTSiNy9pHTeuTdKs7KnUCqvxQhRmjtnbhAqSWdyQWiUXKfhkTR9Tnuvx",
  "key2": "3XT3YuhvMrdnUWGXemnSeMKmp6vDcFyvbnnbUUrTXQknbVTnTRX2VwEMA7UR3vB2qKW5xSpvjYNaKwVKZZAjQ7X6",
  "key3": "2YbW6yY4akrYHHvfBQa1P6wBu6zdfCCNU7Ysb681AtzUs6VHt9ChBHddYd1cCvHajWPV8GX1dkZovVLAs8S1qrg8",
  "key4": "5oraPemxHsvhK9RD1W2keDr4ammaZuALY3VRM44cUFG4bAvddYnGsdPUbQSMH8qq8Mo4papGDf7yfgcgMbqgDkCv",
  "key5": "21neuck2H8CvJ9UpSi2jBcegCE785hsJka11ZxtrbPKzjBEpfSXeDF9Q3jYrmXJY84oMoKMTRc5TN3CX5CBHtKEk",
  "key6": "3gJDgAZcA5tZiVTwyECDUNaihPs6QvxicdjoGLi5iRGtCgjJVMH1Y3E5H5bQQQttTpfrDqQStAb44CTkBqGuwYcy",
  "key7": "46CL1z9ukFhCo8cSPLS3eqRaY9k9Wg5ddAuNKFPwwYSMXt5M3aBJcifNUVSxQ2MtUmt1ZC9GHiF5hben9DuqsegX",
  "key8": "3niWQLcqp8Dxw2haLsPbSuAc3gJv7Xj1NLd8MErX6mM27ZyBLhKYu9poBM8ZMxvkVnjVefjYHGqE7erh2CAHA7q5",
  "key9": "539tX5764Hbb5ZtWp1XEMiF2ivzoCFXWLZyE5Y28tyUqNetVDbeSxHydVGd1o76PTFm1QT3wZr1y4ovAipsp8Wkm",
  "key10": "5jXq2FdUbUsEwsVFnnV1AgXJDrhpvny6MwYrL2ikqtPDy1cxmLGb2Wd5pkMbHjrTzyobueqPN8BDHz1Z2pfAs2C5",
  "key11": "XnUGmL2pyWqy6TT8mnQieHoP7ey6H6Stf25VKq8mrBj2dQtcs7znVUVHkgw7uEFvRZZLiZShfTiS6MksY9LD9h5",
  "key12": "4UqwB9xoCCskvueBqDC7Ede5RbtMBAo8FmEpp6Ry3MoRzJAAfkZv9BucdzZsUy8fejhmzFPMbXuHVuLKoCsVoB6F",
  "key13": "5FhcM1SV4YAzqVZisaV7onvcDmGHNiUonWSjtdH7zJ4oJad7qoDAWKTgRCvxioscd8JJNXDcZcj4DzwDEtWHYSkq",
  "key14": "2dooW29YccDNMdYNUUCD8TjzfNajz26Jt8syksm5We1zo5cxLitTsXsphA7rR2dPxcbf3exPFyt9KXkQr9gdnA9K",
  "key15": "uFzKixNUGmdC67qLH1ASR9inyAZUrxydLSTWH2SUapx1KBSvi5BiTNsy4rmoSwDULf8rVCKsKsFqJHuKPNZ4JGg",
  "key16": "5o39XGCjWUKXDhkBKGGitF2UKna9oyjhK83xnjEbLqD7shfyhkmjm8UkdcQC1Be1Wmd3awwveqMuPTJF1TANrhjM",
  "key17": "4s95rxABTS6dPyZsSEhVLGq9B3DTE7dWkAp3bgpe8NJerKk2bWkWCJAK19UnBC4mT4haCA5L3xsscFVMuS4cHhmr",
  "key18": "2Z561YgN6Aw2r16hhiBucYawY2vvzQ7EyoBLKCYPZBWocvo8xXTXsfgBB83hMjwKwKMeuwqYXwdfMtihq65S9qYo",
  "key19": "5UaUcGjNXeqJ3N2GwsccgxFAS7aWQ4xt8putFKktCJDUWSsDREzaG2GSA5NSVuN7T6GftMg9bAvfMXMefK6nSWU6",
  "key20": "4FsYnT6pKnfbJ3LHsR51qx6EeiG1nstaYXrooLbmFX3xz7BgUcdYRyFUXBaaqkaQmf8eoPzwWGLYWFuz9MoxFMut",
  "key21": "2nvm87Xo4YyNctvx8MsgP7fPid9KC8f64FMTQCsCgRUTKiDKa37LZx9PJJA8kuf8mVQ6Z2CRFXKsZpCCRa6UaiYj",
  "key22": "4qnA6iCAoodzCTe6QspWFmgWcN3qkatYDnWh6NKQXx2dQVA1GKhZRpaFEEZHBNvcRnWmUAKeKqR9xXnVVv5Ax9P3",
  "key23": "53CSwFV4CGEMFMMHmZ2DSGLmTyUPZ794mnxAK4LrwBiyTFnKeHmg1jB662bbLKDaskQ8i1MMQgJ7ssR2VtVjm6sg",
  "key24": "5cHQotEoEfFZaPLPJHypcfN5HwjEjjuaC5xJ8Utyz5o2RYiX9dpkzzH1P7UYPBSUonukBgRxt7dZSsKxxD5U1pFC",
  "key25": "4M5TH6Tzbk9qXjA9TfXNN2ZiuMFa3i7WB4y8MkJt8ZaP2AzcT3dKsdtHfFk7DatZJn447vbZ6abeGZxfLzyfNAzS",
  "key26": "GtMCx5Eu1sJwWRixnhzbiwXBC9BQQj46c4Dc5t1JjGhS1TwxKe5tg3447XLo87Zaew3wweWBmfp4r7cm65JE33b",
  "key27": "8iZUKEhEusL3jBWALrAYQYEJYhLWD3zqEe6VFCaEE4aTYM91mkpcfAb6RxKAVJChsSUat4E1YwwRy8qkJFqbnjU",
  "key28": "4EqVg3oUZm4h9bR7KWy2AETXKc4fGHDHbcRST67FivZX14ytKsbFjCdSa7D3DyzuzgLVCpWyuP6B1pVeVEVDZfC1",
  "key29": "2hnU188xRkJ6uJfSHeEfJCxnrvjGNQ18z296wBww5mcamG67qT1EQ9KCyGTpo7TGfmHQG4o18rNP45PbCAYEU5rw",
  "key30": "4hPukCFV1WUwVihgcRE82hKuSvJfkKmpzfVWQPWWzjcJk2oomjEW8ZcdgskDGcb7aFxWQuc3NhGXLi4szZP5E6Xb",
  "key31": "1RRMm9azuu65cYC6bLE2ZQS5MnG4gaX3Chn8LZBXtPPPxPoMy25hfUf69YZJy37thg7nG4ePezFwGK5Jr4uby1K",
  "key32": "3tViFiwPqnL94nnyTrF4j3uD38qu88CnKCdNC4yWWuUktD69wHzcpu95nfNcsxA9qfors5ckLjh1DuJYqhLDRjwQ"
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
