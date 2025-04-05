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
    "3ojs5kku4bHwEB7hydusVUFDahszLMiBpDSbxPSzr76u439rkj3yXdVazXFZvt3M7mBaAUSF5qy4QfUhdmoZjizb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51GuPvKCovZosmBS496ZPth9oM32Fk7YnfaFz9g1HPRVdYonnrjK5BRL7DLWYuUXRgXZWQ1KsSupaRonRQLhuxZA",
  "key1": "4JSHZoduyBNaKJMWnazhMqYKMmWpxCR23vMibZsW3jGALx66RRbBkmGUezUPQC9pTXp9xdUwFAfaLCAoX57pr7y4",
  "key2": "5hUNyZK1EthrAzySG3vQAsyg3SVbM3keT4eHV8spYqVc6dmRogPNTkQCiWnTVKJuwRdSQ7v6Ln5YnrgxRRZEPHpd",
  "key3": "2y843HGJHRNV7mDfhdRbtGvwXvfAkrhhntNTMuJ8ibp3EE4shGx9xEytaoW7QSYDjhqsAKRPuQSX9z9BwyRSUQC8",
  "key4": "2d5h3jQvoGWkC3pumAeEFWw44ZK8Hk5GLMooiGyj9tzywhxtK9UfG1n9kBMAi1QUcvU4DamtF6RWTs6y8Pa4WaQf",
  "key5": "4iK5sQYDoHUb2c4kkuYBr2vavLpzkhv9wPy2LuDx5BpJKTHUn627VNZCJhs66oUvAxvrMEYGcuwc2yYEfyWwR1FF",
  "key6": "3xE6HsUV41uFvkbVYo85sXXHapJePCPdAY9JgQnprXr6HckanSQYVi3yBhM4DnsYbDkziZRx7kJJcqzGqHZNbVUR",
  "key7": "2PYoVLzX77Q8ESAjYuzCgEDJSVpVfLbHhM9zWNG58xNRrLGaRek8XCRUYJHBfjmWPBgtiUQLDN49tciuVb3hkEr5",
  "key8": "YSE2fwZWxap9EMsC6UQFAbvHDVzBXfkpwvXVFEnDrrKw4QZeSBNPpBSyy7rSGQQvsf2PmCmnGg1aDQtbRbdvuPZ",
  "key9": "2NcWV11RUEtyjYsqj8JAJRNXZeZ7w7aP1gehosfuTxdZRDcpuQVwq8S6D4YmqmNXeosBG3uMyGwevvKjr2sDiLko",
  "key10": "2j3LrFo4t5EphYL5XBKwa1jhjxxssXG27Karfr3rKuX2MAc4aCTPQHvrgoFWcat81CQWJNPtZSZyzVgDmbrB8jQH",
  "key11": "2dxZqRFFYhjAeEBA46w1HkjDtURxGv7Vbe8tasgxcqgz3NU9tedZyY9XnRgmcDkZH5rquGDuXcLnVbDxSBdfQ7Ht",
  "key12": "2rx4mry2EH28mrqhmqDB6SVuWRWkPFK6xwFXnXZ7bG3BoXyU38T3mJnQqgkZvNfLewDNN1mmNo2VhqwiaKcMwabF",
  "key13": "23Swq9vXdCJviZQErPi5TmgzroPvy1fn96WfndKJhCJ5Nr4PZSTvADcwkJNc9Yva4nHF9WhjFgaMVCUCK2cNsuCs",
  "key14": "2bXFKRU3nEd7k2XqkUCFEHsD3y225KxYFqXetwMhgd9fKRvLTZgeDTBGFUxQ2hy4hnMzAE8SqA2UcBEkumGKkM7N",
  "key15": "2Ki66VfHR3dSxgg3LFa4LZUPE3hsriPzNGU6gEb7gzabEKGaXgMQiPq4eE7fvWcWoEygdtwgPpTV1SQA6JrE4dGE",
  "key16": "5CFTbxN7x6dhpVQBzd2KU1fPLAZtAC7nBjej3RSXCdFc12EJANeCpYzTq2eTwabLrFm6m78zrkUwjydct3mXHecW",
  "key17": "2EFED1eDekovNVZDwAnugtS16ivqnkjYx6gwSRx2fahoeWhPsQUxP8T1xRckAkCVa9yFKNsHQnPugkSpStZW8Vtg",
  "key18": "3Wz4V6Ske1gtUHU1Hn82GvfSHcxdck2VpdJsm7ebJBfVC4EYKvqCqQE43HAvgX7jocARe97hYcCNw4mZToRgFxSZ",
  "key19": "2WC3339qyxj86UcupNtoPpg3V7fkacKWTa8JeKbHpyTGWrUJRAvFC7EE8NRP8FwSmzvUSRWT8B2awKDfpNTxyYiB",
  "key20": "4qcZ14gwgDnWVRtfg4G5JgNcoJYA257Kvei2VRBNSrwNi1o9qeUU3c4QyVTjYzcLBQcJ2qByJNjcRAVXyQ2GbMaq",
  "key21": "5k4a1gGWcrknod5tkZRpvoWcJPQcCJX7HRze6t33nnz5EEyyNDrXwWJLemN8ira1f3RL5PnN5UEE55k7m9gwC6L6",
  "key22": "5aYktUQWULduMK1H7TxTDQnd46tGJaDsLkuMPbhdQ5qQtVWSWZ54sTsbFLzuUEh23FhCPNEi9mvJ2NUVegFLebVc",
  "key23": "fVbEd2L7JkdSBmcKskaqYRvUBZuiUsHMFDAS1q4VDxzCUkT9e4h5SpAN8udQcEiTsMuWniRGALQ3CiZgrxkSczf",
  "key24": "4smHYhYm4c3bcS2MbexZ7DbZnwh2ZF1wX4ERfjhw9Eq9UzPF28QFPrtHK32rEsALvMKJg2iPMvwwrF5U6fSjUa7x",
  "key25": "brzU9C1hAyr2XQdxihVcX8aYUhueeU4vPXceogmfp2zFXT1hwbEPgsDpcZXDCD15x1yacJs7WKoaVgh3AUey54g",
  "key26": "3rhAqA8BWL678nh3SKswPe76aBAtkvdqizV8KrTcvk2vnVq2Qdj5MTTXku1MqEsS7EBzipLwpKJnuVK62U67c11m",
  "key27": "53aXSFZCUjuyVBSQGgDpJ7R9S3s8EawZ5d3mponqEs7Stfv4BLRYCv4CPehsaozbGBSShCbadVnypptrXG36MDGv",
  "key28": "2DYTeHJngyntTcfWmXkcJgkGhf2K1NGR9JxXHPNPZyay3HnXtSNKDegXQk3Pj18ANxVegTcckLsKnoEKaYW7BBKA",
  "key29": "4VBVwhP7rZWMuv8NikFFR2Wz4kEmxxSbCBqVpTVYDKUYxqxz4GL1YcQyuzMFUMZ3ShDAm1eCJP8miNC8g6jdnFoB",
  "key30": "4TkAKQDwHb9w3gAyzCgGwsBkL3wDiHUzjREfdsWobG5g83D89as3Mr72wX1uzKTij4jojgFKDvH3Ym7ZESWKcYFc",
  "key31": "AQXp5VXxHiDCqh8yucHojwQKxXTWLzz7vygD9KVo4QgmfhZsQV725Nv82cixncHQhXWg4QD627MY2b7Xa37BNmU",
  "key32": "4HHMcaH5bMUtWXFm1Voy83JGLPDYawhLbotkTPuoY63rrUwVZkFbX2difggpPyMySYft3sES3nK3bPSAEzSGPLJ2",
  "key33": "4bf3BwgL2YM15s8HFbAzQZVERa5x9tXGsiVw9xg5gGZcKXbLZWQnGbtwCXMF7VSxJRpLKtzmUVC3Ywi4hwGZ3jba",
  "key34": "54AvrcgyRPS6HXdcqqx96P7EmDnWMKKRMMScacRiTstr2cV4rGU1LB5Dyp2Ag7JwmSV1YH53NWsqXpQfjktrFm9H",
  "key35": "3TT8kNz2RdMYptquKGHyCqT3S6dgJTd7Ro1LF2nQwuKKvdrLAbhHrjZJ2TbsnwbBUg3h4oXL53FJtTsdQoDvGhkc",
  "key36": "4dsRfqLMQ3QDZHYrp1V3rU1WrBxuGEyaDbpzg5uaN7qSnNKy2QaVKGbesqKpDApsBGWckiNHgckMVWraABVAKhWg",
  "key37": "3XnXyBuNtPSDsUEjV7wkHmsVSk9riaooL9DLfNSqGjWYcxwLQdwjJANpeZjJVqS4JNqMYVxAAj8DyH5jUYrBzn1L",
  "key38": "5nsSpZrGtrZZQkEboyhjKyiiubFuDjNr84PDcJujkokCcGAuXzKar6z35AeP9CxVQrrnwEU7fyJ4PJAe59vvUtxn",
  "key39": "3LK4atTZKHPQwveh6xnuqbwSp4cN5DABBSQ3DhQj1zkC3GNgV8df1Ez25Z4GSePKoHfsxTtG2CM1fR8hbTLk5Jhj",
  "key40": "64y1grSNdVY3GXZp8AWsvw3DKzY3dNUa7vZfSqKXb6FkX3pt9T5onJJAb8ffKh1FV4DbhcCueX5xLZ3C8eUnJE7M",
  "key41": "55r6ZjTrdEHPiL5iZiVt9ARoFhubwtZkJsGYvfpcMbZcT5a27XpzLPCRgP9LYCdGvbq86ZSrmsT2osqehy9M3GSv",
  "key42": "27v2gmwWB6GQGja3Nq8S3eUEeVhsZxqaWRgvHK9PaLHMcG6SKgUW1y349kiZAfQCirX3Q2icmMNNWH9CJWWoSvDj",
  "key43": "5ubQ83m1R7f1GPqJCueFF2BFpsQeqB32FndoMoRkcTsgAyVejTxskQiFprUns8EZX3uD7XqVMH33LszQKJrXSF3p",
  "key44": "2w6SdaVRb8FZcPaH4jeLUhYvHQqtM2tpk7QeS6rR8uJ6pHhndPPFPWNjucLTM75gobkZiHsDZJCNKqJhEqh2rp5t",
  "key45": "5UCT1RjEzZQqTXMJnkekWznZLAmDE2uHt9KCKtJf8Ve4WGyAxCE97BZ2VJNassPewzXwHFM8VbCdA4Pkvgc8WWD4",
  "key46": "4CXiB8rtzV4rHfnv6tkonUuWzwfk3jwcfSjyQK8VomjCLMxDE2otdCYEoJcrAmUgVvacucDwKRLvzjQDvKHfEzpQ",
  "key47": "5wKqH7aBr2CzxyDYrgY1kDdtbJ8NB9KfAViTuKAnNAEzs6XS2Ld9FMAGMtbfGggww6812rqZTAiW5yFxC5DRMKTi"
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
