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
    "2aTGBqikrKMB1V3VCg8uyaYytFC3G3nX58pfA2EGLyZh3FZkACQK3ceRoENodd1zpkFEoLbBuq3hQitBTLYyKc9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ekropprx9tr9csAFgynrGpP9hbZgSbup45kVq6PfmASe7TYjG4JbLfhFiSZyxqbQGNbgD1MkDr28PV95E5YQdPy",
  "key1": "vx36rmMLth8PZHKxPHo6ipRjR9AMhLD9hzbQS3Ng9xCGxU3unSrHr3BZPsiYpeSe79hgyNtwgy15ZzKiuta62Ck",
  "key2": "5wbc4j41rPTKPGtYe6z22KZu7M918MK4P44M8g1NkFpmkQwLr244LiriZWUdW55UdkbHqZZurdM9DFozdgTCntYx",
  "key3": "4AMtMXyJfwc5JQ732M5KUX3dYx3LP4cHCp4VvoUvn66CrnNjjKbrSaEx6cVYRxnzLSs2tzhvdBbd5y959PSsFL5B",
  "key4": "3wzS25syK6apWiSijmejXHXUkcYuWKLUshgTF342Rc5SgaddUATmRUpo6gNTez73bM4nnBaH5eXyXxCyn5h3E8RU",
  "key5": "T7MYcC4BoWBhDoMwwtJUjcJwLNAvfNYxt4G7HZvgArBGEkynddWtdQGZ1oVLL2QtAvA2ukq6eSHhSF5yfauY6qi",
  "key6": "3Nvy9z7Fs5GrRgZAsURDEjxAddRb7joasHJuQtMrtRxStuJBMbfbNd4xrfQyb2DVqu1adAkN6WZ2FTxRvZBbcQm3",
  "key7": "52HkKJSKhVnWKEsPBNwjougiD8NmNLQ5V36fZqvhV2ZtS8xMP9F21KBsrpLgbbsid3F5CtRV7brpkQxfDnN5VRbZ",
  "key8": "36ZGW4kEaRxttqXBRdPeotTvaMxGxaSNFDZLTVrRLznP9NoCrMDuL9zbNteDNH33BLD69NuJsjpLUefNC6Kit1uQ",
  "key9": "3GxQMy1GXYM91xU63fX9M9EUMTgkidjfCpE3mCoyvMDrgfRCYC3gAxLYav7VgT9bHh5RGohYUuZZnG68dopLBQjr",
  "key10": "3B5cQeKjVdPq3TEZ2iqWXGEnkB24q9XtNCmb9S5AaMngAc8VjUKe2FXXnSQn2eyPrP4Xr94nz16PZKt3M9saQvvu",
  "key11": "5BNGKDoaBsXcW8FgxujGvfrsNE199VCWMEgHL1Zdh6HLmD4YArMSZBW3BspS246Fqn9ppYnABbFfnnxisRNvPZ6t",
  "key12": "5JP1B2Re5R1HMvHom5gNXw47WcFGFr9Qa1e4Y7drfqWgCtsiGKK5kaDQAiK917XeW8BoQSC1dJ5znZ7nNiKbkkek",
  "key13": "bgAZePcgh9fRWDzFGzs3mHCCyj1aVh9472zb54HqBGRGbdWt9DaxTEpt1fwmMwTifzcEPptLW9mcj9w7RQXEsAJ",
  "key14": "2epTtY4gCNHHAZK3jKB4vYuVCFwyAKUSxLeDRDXwxpz3gdAzchZonkWHG6HSfRYkC8DpXMzjA5zvKhMF34pmhFyr",
  "key15": "HKnbRGxuPhdAZrRovPx2wnuVek3oVMFT7NE2KTRsA8195Wu9mE8WVQq2N3MLRAyUsExzq7iogTY2RvTSi7oUfXu",
  "key16": "4S1xbkFFThao36YzAyJzKLYdkUYTr12X63qjBTrc6tyh4wRXdmy1Cp4SeKXQjNy37PhGQpBJNgHiDsZ4jQ1p7Eai",
  "key17": "2CCYrXpze8k9AuDYAqe47HjcXgCRcdE742dhCh8ZJDdmUvgXn4UidpZrLpUbtp6smoFH3F2ADAmwW4BJXaHVaLVj",
  "key18": "GVidQJnGx5ZZohM7nDZaMHFgGBCk7muDve8j49DBihs79mz2KnhyP2bG7FPm7VhnJ8vSNQsmU4kuZF4LHnqzk66",
  "key19": "3j296Q1YTxGGQGUwuHiAhjSKT7Wo79bC5CwNjS43ouAnd8EiTdMt94Vnjz4UcUfTi2dd3DxfD9m6fwqP9oAYRcVn",
  "key20": "2uQ198qkRsw5cKKeSvYnoZ52wYncT3SMhUV9zLSb72ah7d6678WJjcaihfZdD4pZ2gZdJ9BrFf1EjfBMFJt9iZ8t",
  "key21": "5egotm6xRyB2418zRVtkQb8mdSsFJzP9FGYJn1SzXK1BsDWnWjZ9EL3Exky4CbE9qi1GGEsQDC2bGRCsdgRseKb1",
  "key22": "2cSTMDzAfXx3Y1H5mQaUVnB3wJpMc8Xpiv5KH7En4C1NVVbweQ3XcoACbb3Bawzu34dmYJZwK9vSXUanbiXheCkN",
  "key23": "4yHcMm2UKGVvsxLAmGccR1owEtk8F7BaruhAkvSAmFfyQ9pJZuCXVeqhG5Rw865YSh4GY2cF48niFXFFCy1QYZy6",
  "key24": "3eUJot3qHbUyqZdmqph6AvAyrcn8nSgcDphSLSqZtxZDfazsSWR4xq274AXDevYJB64YkfZ8riw8QNNa74jruDKD",
  "key25": "4P1JAqvjwy7Abt5axxU1bGRECW8eDj5MneQuAVvvRn48SBeig2tsY9u83ZeNwGpsPohEyQK68mbuzJ3dKke4Utve",
  "key26": "2JVR4tQcZM2sqVjMSovZX9srjiuzgW8vHqpKUXby2qwSdxUtdGM4aABPBpAveMY3MxuDDPK6ZouMveamkEc1NDVQ",
  "key27": "4CQTXMsZqmAnAPstcRSBYV4AwVQzSPbp8kxBeX1FZJU7sPLmNVbhpxg4ZbtgTCzkzBnJtxJQLE3zrH3fm3Fy8V3T",
  "key28": "5TJrfXctBKR5xvbxU5chpvTCLQNdSgVujbQjnoFor7owaYkUVoMnBLNoQC7n4MxvnQxG7z6Fh9F7WVWLBDqQpLTY",
  "key29": "3yiC75oVAeVNMdpFaw9uvJgrQWYrFP2hzkaHyxK7AfkT32kfxfP85YzUCeqY8GDbUKHhfEVzpAjzkZMv1GB9sU8q",
  "key30": "5jEGcZkpanWWyKbN6PVh2iu5idumUDU8k7M3GDU8UsHskG27Tk69Kc3UuKxe2XwtpDg1Q56edJmLjj4DcdApwtJS",
  "key31": "VzijBwiwSzaQgtLZT3ukbHTS8oCbWL3VKdrDuQABAshUCTomiaGaCTMfwiXDSmY7uND8vrEw8yXcdQJn4nohWq3",
  "key32": "2aTyyoiHLrLeCVX3mhzPWAJeVUVTKKmE5Vkm14nE1YTuCfxbtoVMar1RpkcSXEM9csUcEdzkXnATcSr6XSrAfYWf",
  "key33": "2qvBMmtSopgXgZLXmJsKUSu6UyqzZGGhD9ptyaN6ypTu5n4SvoRGKKysH3hMPPMW4AsZLd9EKUwPoMXGszA4tbJT",
  "key34": "642oASeeqNgG9y1ACas3VA2ssZdFeVFd2tzCG5VpWnBjDMdCKxJhFCndk48jdjhSw7g4kMbBfALEWEGrTAmoHeao",
  "key35": "5E1XXfJBn9kENek1SvLVarFoRMcmXVd7Pk6P9SXt8jCMkaY5t3vamQE8T9maGT2e6tzD1RAxeQFRGPxXEL4ftsFK",
  "key36": "45ndQzVkRNftFZ5mrHptBSwyufwvfWSKcHMN8dsAQAHBMso2HZMfNhJTJ5CdUW67UWS2Lpy2BdBXWjzJSy47uc7B",
  "key37": "3wNKxd9B7diaBaBrChSZP74eau9fuf6LkMTce6JSrYDYgX2zFYKZKvuCiDJTuX5GeGQeAdMiusjp7LqANfkYhSTM",
  "key38": "5VNWXa1pdwt6YeD6vxJbjaWfgjAJ6qGMTPcrHhoH1YvSZ9GwaLbMZ2mvNL76Eokh8s9hmuQnJJcj4hsSFFLr3cCk",
  "key39": "KAPLsNERqG2Evt1D4AGXg1L5DnBWF2cKSDesV4WeSe4own26PqwLjBgTgJyA4FPAE3FoB4AUBJ3dTKSLu4ya56k",
  "key40": "644xpgNsZuAmhiZtRQ4ykgqG7cmWwGwEj8kfUd6EigGeERVkg8rFM4hB9YEph9BUAxA9YmvqRvxFCu1jyGabsqwh",
  "key41": "ZXLNXgnTsAaSCUn3U43foV3DcKt3WEekoSu9Tfwg1zeCYrzwjhLy21ZREynSE1T5axNuH6ekxDJGebMYL4rX9ta"
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
