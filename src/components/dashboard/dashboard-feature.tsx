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
    "5SUuWmkL5aht8noojXuswcYvDNMPZ2D9bRsGgguBLcAYChJ82yeKF4P7Dj9JNbFWd8tbWXPWJx28A5enFtwhhmLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55k5EJcSrorK4zmgjvP5K3DoUYVLLmRmJfoMzy7FsecdGGi41gqPZPfJpLP55Aa4W9Znm79LC2BeDbKrgSjRk5qR",
  "key1": "2BsBxrU5Zuyfi25X4TiNN6u1Gpp6pUrgX4jKR2W2S5U1FNcpcUM1anNksQAfafZHPKrMZB85Eg3vd2VepZQ7883B",
  "key2": "FJUiJywA6UfpJA3aiED8JVj9zs1DJdmVPHccuWhQZ5v8izKTjLcdqRUm5VBQ3BJKw6EqMr8My8n7SGWxAor8mtU",
  "key3": "4mPptHTpri37dZnbaLWKuDwJXXrvgxPYEqTGHAx6dyJ7F2PQG2QoxaZyNz3vTPoQMeAYWsz4gpEq7egMd7VfDmkh",
  "key4": "4kKAAxzUiPVeD6PfPY3HbYBBp4YvyrbAv1Pfg7TAo9XTVYbyCaymqcA1UQGA4xisG7Eo7FfcJGr6EzAA1WtvvVLa",
  "key5": "PR6Z1LRnt8yWo66FLKKX3P3t8UACtBL43PF8vuWvtmF2UVmyA31eT4pgrSsyR6YoUVfKMNcx7XwgVHfihQjnovJ",
  "key6": "mW61Dy57uUQYMdQwY2ckmW6CYfokjoMyDZBQZdKVTsq4iM7tJMFwQGtfBosoyhzAD7MHYCdqBrWqsfo8A9GiMrY",
  "key7": "2EGsJ91SvhrBcDiUCtfTAp41SGQaqFG4vu6vbyXDTCTSAkMLd6HqBJ6JPKR875RGPKweDnKngVvAropfas7RcMxA",
  "key8": "2kBcLt6zxe1nvD4Fiv5UDfBWAbPrBCzZuzp5LjuizrDiPsw8sT7F891GG7TiNNNCZzstYmk6JFxPYgqLce3qsQws",
  "key9": "3ZDCTJW5xjnE3KKhoqckVnzihWh8UehZz63echT5CZPEsAeapStuf1hvbUKi55dqMry9SPJ3UmtvJRJqZFN7FfDr",
  "key10": "5JzxnDL3yzNnew5ydGT814Fig41cHESBUqYL3zqiLSCiytpqVoo67aHn4kCQh1B2E3XsH9PuwmH29KdvLLXzRhDh",
  "key11": "4aUSy82fW9G7eT66sKNZAC2zpAYxpUfRNTRVm16moW9jU2Sg19DKebEgrCDT97LRMVaEUqYynTunfSfjS38Qgw3e",
  "key12": "65CgdVWfXHU8YufsNWPwMNyQbETypKjqTGDUvCAbWfcYDuA7Lc9WeAugFDXR3SAVg3iQtZWueEoZNRZN4UdAT32F",
  "key13": "5CDVz5z2PXu57wf19WW7pWHxqZVYDc4K66Syec2xVxggHu6jY9HpwEUAoXivCotaFNwqCRdvvELBK2VDfQcmby4x",
  "key14": "32ggjBtNVDukxHoZwMLkzF2Auz6AGBy8My6F71zrS8R5J8X1TdCudRdKRWbqSQEHhzrF9BmQTjJHCwizjsQwjGAT",
  "key15": "3M4Ax9jN6MF8iLuh82Qmr2hdfn1U72gV9r2mkUwkbxmciwhNQjDaVAY3KPtThVqkoDdcnLLtw8hQwtcwEWyhdpmB",
  "key16": "55bpzBGHSuBJDig4n43YsnGf7nwBjAu4erKD8TJzWM99gTasVgtCABAQCYMNSiRRTZsLrxkuEvfRQKpypVqfjWZy",
  "key17": "2dtxk8KyiRm448EVmPFFkDHtAwHxuijRTNYAWC748J9MqGhCxJ9Srb6XtRVK6NKZNxAR8cyUzSTrhebVgzv5cAHM",
  "key18": "pBcvENPCpWY44u4BkDufAU7qfNDenTALFS6eHFAhfbJbfH7w17nmm6HueufQnzC2Wz5KQpr9zzin1jcqbW8u9Z9",
  "key19": "5cA4L27e3pxK4Ja8w4iBvjC9mYbjMnq3R5wSGayJEfHY4xtQPiL8uTQQrmkZ9XpxGvZYFcTYsaGr1PkawuUbaeDS",
  "key20": "3c1wwE9pvXp2GqPXBH93oEWHxnfbKpm72aqvvgDTx9f19qWbxbBa7gc6oGT2GCdBFXbABVeeGNSTiq7zBYhDkytf",
  "key21": "bnR84ebPSdjUsiLJz82rc25eZgjo1JL4BKJGj1UQaTcXeAh7oy1R47rjPwdoEbk7QzEFGp2543T7vbCeBc6RFGh",
  "key22": "QxEVUfPzPgpKJDVrtUgZUzVhsPEZhzZj2o1CohfvMVsZFDYF26tyaeSdYsKQqwShUeadxwcFrYy8etvTrUt2D2C",
  "key23": "5R4uX6FuWt7Zs5ro12p4yzgpSMTPfSpRwMhLUckNhnEyVTRtPDbFu2Efq35c8HBFacT4fRofAi661CZ8LShTPNGj",
  "key24": "5hFXHUiYERkCu8UC6rBVet6LeCkz3Sf6pAxwfZp7QYijNhXAmtuKxi7ZbpXouycbVNaSofbopJw4HG9w1AJPdc5W",
  "key25": "QVpga16U3gggHJXesiw6Ug7oeE1NnwML7UuRBQ718dMhVUiPNpzMvV7x18zAcLg6N7mvVvKDyHpA1oXbYYUpDqn",
  "key26": "4WvPWCsnzZ2ZYWZ1TAKajjXhTLWXbk9hWG67EuB2CNs7PzgdbQv2gKMJqZ5kAVaXxDRnKjYJtP816sMLPLayK4WM",
  "key27": "5GSjHUjrHpVCH53ZYup8LcSu7kqGhUiUdFftfHfyjgtacDz7V6m7SVoBBzHn88rPcADi5yCdv1X25F88JFR6CaDm",
  "key28": "4DAosJYdTMBCj9A3crPBpdgpdJQwiwWgPNdupyqjbGANzCzvCkUgs8zbf4HTpNFXXPgaLpXK4fEDmivjm92xDiEX",
  "key29": "5o7Ye2WPwc9cczN88wCs7aQUvhDxf8TfJGnXpvmDYxua1D9SEcxugT94RJMpkyRAzwGokYyqTmpPJ8mF9C1zFAin",
  "key30": "61F9cA7Be1TJ9gyHvT6RYGFVWm1CJyMGvPHHk26zUePeStUV9QZBdxjv2MFyBKyQfyk9De32FGc6yij4vXdkLX2j",
  "key31": "3fFd4gxk9V47jz4yH9XNmbaYNKmWXaTN2hEcXTAmipFu7Xb2v52WaR4mHP5sC66VeVBzKeb8pkWt43fvFkqfLUy",
  "key32": "5Lkq7DvBmgbp6cvBaAvTyYGinzf6N6ZWAshpUTM6GYArrfcApomsEvYbr92XyRLFbPJuSgPg5gesp9S9wTucE96x",
  "key33": "3UUrGxHRy5HxAjuaLwLxEQvaWbi7KZaXzpTN9o1bZ3C3qooVe2qVQE9wgBcvjEwyPWhP53VuaQP3N2Jnh7drncch",
  "key34": "5FxtEi6KV8jBKk7aR1BqNWjqMS6oD16xPGi4GbAYUoNKiL4pcsMhz5oSdFRLjG6mngZaPD5aU7AEKwmrZUniButj",
  "key35": "5XN9Zh2zTuwxZVnTseDFyV6Wtw56SGystAG5WT5aMpTHnc7kepdL3FsfKRKNSPNNKGE6qBbWqieqzqkBXJGugqNE",
  "key36": "nJVNoE4VEQRS897A7v6d8UYZ3aCizVH5JMTRGUhwYpRnCjcBWSX5AFkhJ2BnvikX8UMu1ghB8sTp9sXtyiTDR5L",
  "key37": "5EpwJAzu17oxJGUhAjTiu71rMYHfjrdTm3i87aT6rwZ59HP2Mduepps7Zh1E1CrRTDUgmaxHkNzJcWvuLwTWCmRz",
  "key38": "SQ2TYMATExC5SHJH4C2tGDc69EL5W7Rz9mivXrT8oEHtjSbo2HRVR3ZiPcCmuVF5mneFjUQRgZpbwmewzqgygep",
  "key39": "3tHx1z8GCMaSfvoFQXBxBiXU4bdcigWzfJ2K95Cs7iumGDVu25c1MK2B6BzgK74AcaKXM99T82dLN5LhwubptFvP",
  "key40": "2DZ9DmFQNC2BAtJRN3v6Qfhi37rYVQMeQFvy27zEZ6fTLgFvNhkLG9HMC3QRHBXauyC1NWDUVAgzVhm4QgiANJ7k",
  "key41": "2WqKouXhQNoGtsZMjiymHFJB8dSkpRoCtxTvYwjjbDTUsbLvKpUa8CwMAMKt4hqW8qEDi1gct9ioA8M4N49LmBTC",
  "key42": "3ePmnjWdcMxXDfATQhYtBE5L6XE6ihTEKhZ41pYEdWR19aryCiT7YNgxdEL6W7UL3yZwuyyxve1nXtJXkvsLL5tc",
  "key43": "5nzkZUw1idVmsodjeVJwEgv2KBtqCnyHXdcQmyib2S8GnWYmSLe4KK7G4qeWhoYGnZ3Cvzs8QWRaWFZoAXByPFAj",
  "key44": "2piJihAoyhJ8GFiQVDq3w9z3njHkZEWXJjFahXaY8xVcCH6gsLyWpZUJXHDkfHjijauXEUwQTw9chbMy4TVsW9e7",
  "key45": "ov9Pjaqw74Xf3kC5Ej9TVgT4yHv1TsxAmgLQL5W822hJSKTffqg8yML1rRewMJwGxazkAWFVBhjugm54sXi1GTY",
  "key46": "5srMaCEe9zHuvksJHsfc6yft4dfU4xQe7BBkyH8kEK6Zr5Er9BrDUiQbLiLz7fFQDyWuGiNcrQyPzDUhhxeVDefB",
  "key47": "jbQZvUFHsHzHJFdDGvHFH66wDbiJzFaaVrV9n47JwF9t1YtGhBhU5ps25QqkRRGdE5gj9EGzVsiZzvKnHSrL9ph"
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
