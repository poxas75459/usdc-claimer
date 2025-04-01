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
    "59kCvPnh3MJ83VhKqWHueDH7sss9TpjL7MgexhRJoUi4zJZM9reFV3u42ctJdAgjLqEUDigzhJ2nqzrtQ3R88jfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KkPLeUYrUnKfX9DDT9aFv63dduWnqFzBCtz8tzUEg2LLdYQLQU7fTGgDvthanNDdTJL48eiPLZU1mvRFwU3NGyp",
  "key1": "3ESq2VQuTjnLgMzqmR7545g94o5GV9gVCrrX9i443ecukWkjZ9wW5f3c9AwnvuWNzNW9vJnm5wHBjJMPBgKj9dFc",
  "key2": "fzEUkvXBaGw6xaLtzqxCJS2Xf8fCMKU3jNiDECJtNqz3g68FkcjKRaJZfY4ZRr9Rk6dLjhLRLsZxao4MQDBQvjt",
  "key3": "2rMvB6D4gt7EiDMdGNf7VtHLNR7uXyXHvVYEGxoXbFFBRtGTmNztsGTGrswJofsEgrMBwt6pDBLhT71gCMAqwUK1",
  "key4": "3J6iGjTFKSqys6CkBtHCTokjwAFbwNB1Vc5GZ2edb43t8jj4ofcG2SboBFyUYotFPSgQnF5awu2tkrmBkNc67NK2",
  "key5": "4eQpWy7bbf6ChGQr45qHr94y9EGrentEEWd3uSaTfNajteebSPPAh3JGipGkJAv7joEagGstitN3D5w8Dxo2UPra",
  "key6": "5keNbLib8GUwK2e8CAYj19sKbN9DUebVLHfcx2GHCAQzDYVaWFBh5g6pVjur37QeqsL8GweALJ8tLChWVHxa5Xse",
  "key7": "2kDDrtBEmHVHTQayNxhzufSfM9q5S1kq73FNzoDGLNrjUo6mKZoXExKoZPpxR1Fg1qqbtjPu31xKswnX8LETxN1R",
  "key8": "3Hcu4en6vf4mpXsgQp8L2usjZ64cDLPXwBcLuExjDXRnzEQcwWetRXoySz9nEK45VD8R8dh5Tgk2fFKLZgyim9ge",
  "key9": "2Pjyjm5ReRdt8nr4MLRLQ9Vyr27mXNCg7xAFSFGq3Na1oEhqptnHmgMcggNNnNzyQDVwU3Vxkhy6CCgbFnZFkuSe",
  "key10": "224HxVW2s3EkgtkAXfeJptHzPcQw2NkC66Kzkk7dX8WwSRZwpqCDjY1BqpxyoCBeGmqxFUHjs37qgTzYBUhVU7NT",
  "key11": "2RYbx5HumYDdiHKmUViVtU8vLDCscJzH16Ycma7GnaaUHHYNisshjyGEfBFiaRDXp3yjiiyJY6kR1jBtAQtA1jKk",
  "key12": "5e2qeoTbe8vWpHPjgjadMesneyGFVRb3Hjgyg7sxPZ1DB7MvHAwMRfXQe5svoR98j6McDDQaTD3TuwTvNcSJBRdP",
  "key13": "di8Z7a9cwoPNXxJV3xTWFDoVSUkoMH8szFnBWCXgi1L1Sh4RgBdmu9rrDcmRYLwa6Qrbxhz6Vtf74EZ3jWHCLuF",
  "key14": "3fVo7eGCC6vcD1ZtMXGVi3WKGTpPHQ1LuULxYtkHLc3mhKQmt1jh4P5Sbo6VoLMdfrjsvJtPwkMLYvioB3PKfeRL",
  "key15": "3fzroCTCkLBRt2bd8YpxguGGRBwZH4cTsr9VjKhu7Nu4B8fof5zVyBcE3rWGjWRkLjvLGNvLkSZQEcS7qrEZUKi5",
  "key16": "2Zhu2KWzAF3WWeNspZ2HUUur4Ju5mu8N5BbF7RQyBJP9ZYt78hVRXF14Pp8Cs1kDgbNE3upkz98HxxQRBDphhESj",
  "key17": "3JtJvaWAiGcsFdKBgBXXfT8aMY5MBtcaTrYkRQYbey13jL1vUhemy7QskzdhqQfog6XKVynYeK4zmX6m327dGTVh",
  "key18": "ws5Cu27zVAXorFoZuckQWT9MC4vMK7euTqpt9yHptWYuNwSPNSTWcRRnEvTJAeabb4h32bqmcGbHZZeMjdTPNrh",
  "key19": "3sZABWiejVJGwr3nJTvhLP1LTZQ55VN3WXTSiWt2GrQ34rCVhj44VjJ4VsWSi6gqAtMLWem81mcuNwgxdNV3d7TR",
  "key20": "48PnHD13kFQAEgMiwGuuNV1veKUDXR2R5Pfxad4wnzhESKb2suFFD8sLytmoGoYma5LJ7WwSLTXbybrYUWMDQt5s",
  "key21": "2MKjX3kVigZtpqkGLsuxCChA4EdePmL5WWxe1WoXvB6BKhqvUPm1sUYnEeQdkTmdDjTz8Zd7Sk2vDw4zB7s7NuZe",
  "key22": "4Vi3vgSLHYYYYnKXyGGPiNUmw6mC43DvkKX5n9VKHj7A5St62dYNnPSptZ5iCkufWf7WDs5B9eXE97Jfv6ENT7ZA",
  "key23": "5HP3quvr6o1HssSXsLpG1vWLZTEbiuDcyZX4T2MikkLw8Jwm4oNxT6zrUoJcjAqvLuyWGAMLzgeTRad285m8t4q3",
  "key24": "2VAhUf7KbzADxHzcmNkg5RxScaBh9NnCh5QX4wsDc2CJUHxBo5F8CgBS1nWWbvpKN2KrETt5B1p7xegvMaYg2MTY",
  "key25": "2YvNTwcaXWCtFfeXjfSixQ3AYLYxbpM2gzQSfnLm7JJnypUDqFrwAgh1Q4oyteK9RKPnp54vKZbuKKR2c3psnoCZ",
  "key26": "3gpuQ9ZGv7EQ36QukTodFauuDvRQHgH3WbqzLGLQp5s2hryHcTBj7RaXQxpTiEcin3DqdnwLnMuX8A2RzPJdrTnK",
  "key27": "3kFHKZfpbY8CC6srY2wofMTF61XsqjsnkCQEWHy4haJDHa6diLS81Kf6BTWeWnexJQPeWsJ8MHjsdoBqbK1ULXBM",
  "key28": "5Fcj2xbRVzoNdeoXVTQmf4So14oudsiMWxrjS9sQtRbEvUX8FaFum6D3cSEHPByZ3vhWq2sdstUi3HD6A6BpKM5Q",
  "key29": "fuatBLnCP1t2mgj8QnKzXu3h3tkub7VdtPszpUDvxRhm1gNFhHfiMBU7hsciU9693BsdVD1dPDuBKfKZ4AwSmp4",
  "key30": "2cVzEonJKB9ozNJdE3C6bjb2G7vw5TJvKhyhzLq3tcy4KaBGNNHbSPdkL5ZNQTEfbtjxAXEtHAkpnMp7EjJ3AEb3",
  "key31": "2jNHcB3pdZACPu94BdMohojZBz6RYC4ngf2oQrFrM2DZdoY9d8g52feYF9mCMzu3DCjH62oXt9nTx5AhjyEfgsUh",
  "key32": "3oNfDyezuJSjPqeY1FBchAvuy9qVQ7XccE98HQoyjCExTQBS167wZRGaT3PTrDX4VL7kXFbJn4rghuf9uSJW7dWu",
  "key33": "27rvfRwEcmjSMfWpHasACFystsz7f3mNLzWPpadmveLGBjTcWYuCJYNynG4RbM1zz59szA1bmUPMp2GVUswhbghG",
  "key34": "3ecZGM4oEW4yVpk7xEn3C4pKgQ7UnAFEdphgBuZ8iRTNP5LfQSubioazNq45koPxNYRJPVaQh6J4xBLPBy68BvC",
  "key35": "ZcpKp7Aor32uf86upGvYaoFqpnKYAsFMR1DKjAUA81yjE9T4oeVzoowUohB5dszkK891VGS4aqzS1H9AjkiqgyB",
  "key36": "ZpraBUkugCgUzn7Z5TPeUsnnfwYzAQsXQCa6D1Xgwa3yLDvmotNoUCnY4ZccjS7dtsid68m8Z6V9EemdpGuzv24",
  "key37": "Bpat5guqwy62FrQpqp5PCe9BHJw4kKveK98JFykkXz51bNchTuWzCZRpuPToRwx2VQzJQBL9oDqwpyfz2KY8zX3"
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
