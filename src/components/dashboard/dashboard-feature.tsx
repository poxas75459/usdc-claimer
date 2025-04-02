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
    "5fbXJkyj9JZjiVHrw2S32kyEZb9u11y6gSgjR1nUXeqZaNgAGeuLv3Tpm81WYisjJjKUghW9AfPThgKDDsC4MkEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AnezAgEw5MLD6gZJRQ5Jmp2xMBf6kAhXWEaUR78UUfRtgNZUPEM55UXhfjtQfpeVmCWPyk9E7qHLkRWQrE89Eyt",
  "key1": "5K9ZDM6cu4KcfPy3tZc4FeiPQSombzbEq42c8uQp9iZX4EJFprCdjHTcqYgvTmkfxr944CPEqUoUe9FUGX3aEhyR",
  "key2": "nDE8EsoQBNoMnhSSCdDPMfahwjg6DFjdtcLV3xGZ3Q9iAA1eFHRA123dQDaP2CSTenU9qCMw2o8nQbJq5ZQKUSE",
  "key3": "5oLUwGb3b2Gr3jbuuDAHnjCbCgvZ2Kgg2ex4jcLCNYcafut3jCdD33egcw3b7LSxb9rta3AyUjkBXE2FAho8UjfZ",
  "key4": "4ZWq2nz4QANs3Nz6AAvsVtwnv2VHoz9uywS3QacC7GSjC7pb5THDvUueZxBRuncPFCDhZKbMv3kWs77JuLkfEG8g",
  "key5": "22URLfqR8GhitEMQvYy8Bxb61kecmCjzx1NiRkqaDMx41bPVFL1w4SLYcPmuMtMgWfBJjVAQZ3VKDe7xAFz277Du",
  "key6": "37wC4Cgw2mNcZkodcjFHaanqnD71mr912UK11r7QoYsVRYSHYZJjZVDACgK6Q1cMpNQjgLaW6urnoaPXtjHhdpyo",
  "key7": "3RBo8o2QJhhALoTHV4iXXxf2ezqEpMSpFReZiB7X2vFFSYYCLLS4HGgwy8Z6cpv3ZhDgbptWpHykRrLtrdEwe4X4",
  "key8": "ES1XFfZpEoicpw99Pn7TP6LFDgHcgS8AsBvMMdaXsocRqdbCfSYUg7fF6zuemoDXgfUY53obVFBjrGHcWDkBNdm",
  "key9": "4oWSAJekaCLujia2F2NxJfMpqz5wQwtN2jWAgfaveDGKFkbGQRWctcv9WAQyZHkedDYuwzTz4bZmBXHBBGQ8Q9XA",
  "key10": "BXJkasAyCFY6PrqqgGupThBRAqNCsJxxESs58CZqYpZrc8sKpV97ESveJTnSiQZxPNJJqr6HhajqWVejk821BXs",
  "key11": "5yr45FxmUj72xGaPdiigkYSco7vzrQkLH8mgAcu443one6Jid1YFVqdXWetnafhCoEjTxNXwLsWnWJiaPAYSVLW",
  "key12": "4V2wR7k79yP5qfn1a6hx41BT5yA2ZFk1NgyZy9axeaiJ9BmqhQkZZMNg1uKWGb1Avfe9W6n9nAHKfKTQ2D62d9nu",
  "key13": "54g7pWRbZM8xFGgHR9mWEFEgRbhe4pub4VwBbNtZMVwHNE4XAaRXYXRmeZEgB9C2yacKWx9qXCuYwo96WZSgxo4T",
  "key14": "3MDwBEepScWBXm7mX8XdVibscmzouaoVrt2Hiws4ro1n9ooPdvr9XBW1j18imL7jDwj9ac37mNsfDUYFDktAHNug",
  "key15": "2WSuZ1Qx1Mpiib9yzeRLMwdaeayosLCXcyXCqLfmMPehCxoTb8mWAKUUAQQRR9Kvj9AujqziLHL2jstXoPWH7YDF",
  "key16": "3MamuVQLRZGH8WMmLy7JKQoy3bwdqnvAESHDPh6mu2ReV6dj95e2cQZiLNxnTbjf4WSpkCukznUbMrbLMea9Mxic",
  "key17": "4h9udEkkayb88huNA41KnYFEkPda3HfqZxfS48e4SmeVrZTQEWfRR7ZZ3y4cExB1oV5uggVoVjZ1xuwAow4SSjQw",
  "key18": "65J96jNAnVHw3hNfDuHf3S4WAQX9gcJkcoif35wKeHwWy17jFRC4vZfNWgpk3D5bhj8ULixogFCjcVj2GQ58iskj",
  "key19": "5E7tvfZPXm3ingZcfmTYoPdY7SZrEyYZQA2FhLmup8YGeFV8qECi7ZVHKaS58vPaJjBEwwShBzESC116c71xS1xv",
  "key20": "5Whu7Ydjn66NNmywWrzfAra5yQsgppNdzBMP4wU6W1w1NAMfBtUiHMK1StNnp7nYKZjFTaGaLEEhc2rVvVntBvom",
  "key21": "3SYoNuPZGN4xpiqTnim1LkwtSrYy9jrdVtyVo4htgM3xMYm95v5vryPDq9gfaw9WhHRsMbrenqXYgT9FmWPmJiZQ",
  "key22": "dhYV5tDBFKFKU2Qj2zfbx2h9YRRhgKkYyKZTvF9ku1ETT6CCiZTYUPc5bHanDhR9V9DNdHsF3gGEyDJxGvyjME3",
  "key23": "4fnuPnX8LrQDD6MCih2TQFRysja7Ykiiw2GMbYBiP2pNaJhX6iA62JqTd3R4yonnCVPSoxQ2gyCUjtEAY6Hjx5mq",
  "key24": "eLc8dyYeYCU5LAFMGguAUwULWEGirkg1zPNdN1e2NhLhKbmNkUS5dNMhtc8YSaN7tB4Fhj9JXjr31nbh3UvKTtu",
  "key25": "2Cn4Usx3oavZwQe6PTY4Ly7LPBJXUz7huMfVNwbKegbb1Tco5SiKeh9u4bABNAUC3BTydyEbT4zcxJcwv6nzgtiN",
  "key26": "ZA2CTdSCpidpaeQvGpgzPYNvjcLdXEPy6MxY2QErjegFEdqXV51XMRPPHZGiNhPU61BrTw8FTpoRUXGT2kHmwt6",
  "key27": "bauoBG8dLUqrHSad7boBZ8HvhfJTZ1wyZzXwc1yViecWTETranAdujvfMu67VxsyKWF8qNqsCGtD3gGzfm99v7J",
  "key28": "2NbHkj6Kty2m6yM2UE83PHSc9pJhFMv7Hg94sxwNe6tRQ9CJ7ZxykshEJuSCEfokr5UMhbE2nKpa1SXWaokYWczH",
  "key29": "2AVrcEYAaYoZCYcuJ6Fy9FgQtPbS9EknoYMdF1LzKMFDaxHatPvJFWaF2tTfKFwSHmBQjFsZpZ3VJXZD14nSiTBx",
  "key30": "5zSwnT3n7EC5eC6B6icr31VUb3bbDcn8T3u3PetkeVXFMFL5uNDgzP4hReU79VtvqQV1U1Had9JQqMtzHuhD2gdp",
  "key31": "2A4TCEwmUcVhoBRpRDHSYAQKBKNaExjdTAbNGy1MEZtgBSStUwP3MYaHcGNhDQk3a38hSd7PdNv6wWZnp1pXdoH8",
  "key32": "pyCVuBKpGcGBSS4JLmQHks9jf4bGX6ELdrN4e1X63krWGGxpvTjC4htE72t8zjzrtvT8z9vcQft1xkvd5Ac1QEZ",
  "key33": "3Rr8CahRWVixNp28BbbQormUHG4UcHqGq6WJNYruvv3btpqDVJj77uFukLQnvX1rtn1sDsXeVPuzg9ACZzN7gEhB",
  "key34": "3CbRtVzgRn8QW3cqhgtw3GQqgWoF8HGb8k981YE3RrRnTSa5urfukBLncdFe2LksbLbbQAdWWm1abpxniAYvDYhG",
  "key35": "44H656eShpVgt6MTT8th1NehiL4rzpQKoaCUkZKabmjGgjj1Dou8kKUhRQiENEGp4T9niBDfcm5CU9g9GWwPbuF1",
  "key36": "dCPEBbcYp3XkFMAooPWxjkyxyB4q2SkJvUTjzSordDM6rJNfzmhS6p7xk39YHiS5ugzT4y7xXzvXnLkHcSHFXRN",
  "key37": "2mtmzm7y8hXrTHBMiXeBqAkBXXBEUuctAzn4anGiZ6R4vJYyWBXXUxsScF9AxpW7sq95ZNoxXnF9A2PGefmDAa3u",
  "key38": "3saCQCX8c8ytcNdHAzQSwSmx5QoArjWEZMs3p1ugVvSRp77JtWd8ad1rV9XJiimtCWLBJkhKgHLirsAcGDGSYmem",
  "key39": "5R66H8zLwx4waoRd7pQSruPKXSkRmytoE5amnornW7sBPAfbPJFKXVvjxJHhLYfitRn2RNhQpiN6wcKYNAMQpkDj",
  "key40": "5N7jnnHMJV9ydWFemUcCGPmLbtgBoXfGjAvMwRzKRGcqK2Scq7petai5YiKMsojwXRBivNnDEDCapqTjitAHNuWK",
  "key41": "4aTX8xQ1rczABWRcpShVMh938NCavHNk4sHhwvZmigU2BWQjoUkWQ6yUmJ3gnLezyagoVf5Rc8CGVdkUovkv2kLt",
  "key42": "2xMVUXF8EqPaP3siLdAGHHkv6nho3zQXn5LLPVBygnzQreiM66gxDgoXXhSEZ8geKzDR2YzvDPLyRYSPZQT3p7E1",
  "key43": "4vL7PyPosHoLXLBUXkKsZXLNqzGqe13A4WPakXX9nCyRYoM4ToUXLgdRSGtjLuFpUfacTinhnLv5uriNQKEEHH8q"
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
