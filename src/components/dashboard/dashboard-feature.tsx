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
    "5NNSEfPc1VUEVwY8eQ4wkm8qYmzj8D8FHN24VbLyQGUxEjFfmUnEkHUpBhysX5tviteFb5SCeiCWCH6ZnV4hfipM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A4woFYznMRnX3C649Hni5MNDxb51fqT2iCAQEbYT1w9r1NpsncWMXYvbxJxECx88yNiktnL96gdU52oC17muhrf",
  "key1": "6LWcCEcfM5ByuHrGtWcchnU2NAzFekDJtjqbHf2h3efHiF6mQH6Rde6g8gi2gQp38eZSTCsvGtFNNnT2dojq6E7",
  "key2": "anZLiVAV47kv1mKh5pGTqcGmmtcFXxPbjuNX5LSpAwCKw1wqh9CXN9nQH4FMtjqxMhEamdCnTr7zakXczUTgkEz",
  "key3": "3pVvbCkiToG1GYZ1hHU3c1peKyjuxJK15z6LCVgNMz7nDAoNBwvNzLXpmo9JtjPCyj4BbewPiWPzJSR1Bcj4U5iP",
  "key4": "4wT2hsUQKPaGaeMUfYeneo22G54YCDjyimkWYbJedtoi3VV7jykDvN2ATeFWVipCLSxkDEEz4tf7FtgmiWoPAKQ2",
  "key5": "3fstYqGG7jLMdYrJJWQzQiE3ejA3C7ZDZmYwC2ntf1agLa1TGciZqxvdJ4Dx9ujvzAFq7BQoEs4h4Pr4kM7ewn4A",
  "key6": "3Qg4trsJVYVqn7nPTzkqkhieqfpU5DQkUAfobk52aYFugpNQvL3dmHF5NywbLCrxyCPLhwZi1gY6kxNza8jyqKi",
  "key7": "YAZeFQatM66AZffmB84bHE4NZHxoJ1HrYenEczc32A6MQkXrZBoFvy8Zt1ZkHvoPnUYWMGjxnypoY5C4TDG2w4D",
  "key8": "33keR5tMSefrMXjTp9Y84F168Ux4zCAnLMDchkRefRiG8453RGX7Njvcn62BS7HJAU5aPgreVgxvfNEA8thFdBCG",
  "key9": "2KJ9BxiyXZMTfiM59dQgbExYjbGVvJ5gAs8xHWw667dPu6SdnXtWy9zqJyzKqy74YC5N85CrV8pMr268LvjntEh2",
  "key10": "416dZqutTtY6vpaLpyJ7xFqwhTHJoFox8XwfpNwPwL97e25iqvwWzbxRLJhLHnRfM8QzEjjagn2YbgVeMMZweyz4",
  "key11": "2eku4FUMV22vT84nrbGHZnNTdet5TVRZ7wNWtPi7oUPUGFNAKRFyMvKhAh7en3HXwVHJx1uGV8eJEFTbwFYLd56R",
  "key12": "4qzD9QQX3fhwXkWb5iGaUZamBgkASUtKdFFxTe3gU9BCq3qPgh7ECXizH1xWTZtwocEj2qD9fEz8ZhetRicVufpb",
  "key13": "3xQMhG3uhyFwsadoCGRWKxCUZMzKC34HAAdCvtYjdALNsgVXiziqQGX1Nxm4gu3PUKRkxYw8CmG5J6zM4smjtxw9",
  "key14": "iDs2zXkYnWdhFHzgynmQzuQSD7nWaXFpVM4Kfm6uG75tgJ9eub7FFXwd1rERF8AoSZCqNd1i6ZzuDUsKRhYXppq",
  "key15": "4XnS17freHVdWNHxwce98hupyBWGtSjpzcjLNrVD4h4V5NwbDr9swdKTkoj3Fp5hoojvvTknyN4tgawaoRV6Z7h9",
  "key16": "2T5diKv586n4hvdTP7A871pwGppKGzcH2QnwByNtKokg632456pa9J62X1ic79CeDQsKBJTejJ6QjJPwtQx27jQA",
  "key17": "2W5CDoqTNSTYwBU5V4sbHhGoPkGA8zUNNiK4J6KhyCbAisbrCBVac18jLSpVmzaDoTefUtWn9jg5FLXmFLr7KTzW",
  "key18": "TCQipfdrbkz3HQkouytJyEoKZyekWCD46fTGEcGCwyzeNnPDL7cjpEA87pTRDn1di7hGxVWseKYrKxiE3Zb5BcL",
  "key19": "2jAYpMvtCZ6WQDUzThYJcdQzBgf9qeEYNDrZFf679FZKRTAAAJYSu6oMYM995k2P5yWyrFxEQtCwPusz8jStEd3B",
  "key20": "3x2BR3EYpUqTDy6eH2QSWtSDv9a5B8M44Zc7gisiSL6FjA5pojHJcL7dcHb2QZwgNgknfRzY5ge7ktTLavuUWTxa",
  "key21": "sAbpJz8nEb61Lu5pERwojXQouY1k5JkcpY7UADPx95ADX1FJb2zk4pgZ1S3NFCLjWy4kjvYXtVfDWqVTpbXJYeZ",
  "key22": "4DYtMWf9LCEtZE1GCNXBGsMrCNjkZzcLk4zxWdeER5FY55vijs4YuMaNdCfFr4PBPS4AfkR3wwbnt2Wx3ntMF8WE",
  "key23": "5oN82JnqoP4y8PG5ZjYeDiaYP75k2kZLNEaZf9dJBWVa29bR15hDXkES3mrY8zpfDhnrQShKJyaEAEgxe73BZw4L",
  "key24": "2LxRK3UbGcnxKQsWMSXgoJarPX9k7cfreUTpQ3uNMoVXLiAscAZqqaD9mgqD5bQdznGfsSBz1nxjReTMTf6qMgrA",
  "key25": "Lxk2mvWoQ7CoYhZn3qBEvhSC64ZEne1Q54TEfrSZ8esk1zH4zrtXdXjPUzFVXrS96cHnRLx4Jdj8zgMwAjSKj8e",
  "key26": "2mWkVeufn4EMES881XoddndqNoCuAtwWkEsNhtZysuZQjJcMDovdtx161kEWK1bs1J1GgAD3hmzRBAyk9yFh1hc1",
  "key27": "HMj8FV9YRGJwqn43K5gt6NR9W1nuW3EBPrt4utxZJhd8KPKou679wiT5XUaLL6ztzgx4tYf8zcs3W95pEkHp8y5",
  "key28": "43mWa6pfbhcWTAGZ8iKohtKYXjmX92mcpBSeUFoGJCcr1FjyQn3gPDUKgYXiWQ58eFUXAyxpiXy7fNRbJY97WM4Y",
  "key29": "2SdtRWUcn2LoJFxZaeSjJVSxa6NwRw3fYazFsx2Y1yz2bK2yfWftSgpgvVenVz8kKzshiThuCpvQPh122wxyESu4",
  "key30": "5szkaM8cdCYnRFkax5o4aM5RZKP46wuLS1DpejAK2hACP38gyRibnFUMmATXz5tBEDmznuqLK5WvYN2fkqgzpRBL",
  "key31": "verYjJzkxG8xQQs1m5t247iRe5biuQFkKXioVGo2QMR4PgQp7m9BqYex9z4kJJfPbboxAF4j5vstV3e3yQjYusQ",
  "key32": "4ZGzPoKaoSexpHqAZTM25B8x7QiYZQac5deTABLhV65gRwqQqy8gBkPTfZT5J7WgJSoHoh7z6fGZ3bh18X6Leufy",
  "key33": "3JUoCzanewCZfwQJz3nom6tgSHd5bsZVzdQRwFXvTDktYxL9AYHNUJqQvrtgRyo24ZsxLjqMgacZTTdibZ6ATt3y",
  "key34": "5vQ9KZjoUGgqXdCM85TfGATTb5aAVmrDW5B4QBdvY6tkNWDYectg4o8EpSPMb5irFAfCwbWfG7eKEZ3ksdJYi99i",
  "key35": "29bCATysPrmZm9PdYzTMeuY1TnPALR6itrd14D7GSgRnBE3bhAf1RtfW3xRpPasW8kvuGy1GphYcWCv6NcY4537Z",
  "key36": "3p7yrZY5bvhGFjxyVbW9TSj5nH5uY9qVAG9bRkY3gjWNC4HeHPE9tjJPn3fHJ4A8BiMgTgHMGJo6q7qTjdzYL8xA",
  "key37": "2YooXMdK5bH1RGfhaCCA9TwieDGLWAFv1UqtLdZeNr8pZuy9zk1xd2DCAsfaSzSkPSJtCqvUtT546YEbgrNBBxZX",
  "key38": "2pwg6Datos2c66tE22pS3mTBBcA6Ht7yQJz6DkEc3tE7BCzX8QQXE9fF5ZjCsF7QzsqyvjF68wohTomD34gGyfoS"
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
