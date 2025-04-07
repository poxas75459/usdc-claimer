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
    "2XBveiRrBT6gmiyrNfWt5ZP4zLyeY5MEGVFpAFbKTfYuHoAJzhDipkcjoP49EnGHF9CQurVcWrRpHo5QrsdViRbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L1D6ofXxKEDKQWscnt2Jfe8VtcXtCs27usmMDxe4D79FSef3CKNjCL8pWfcBtBv9kfQc2PiTEwfogmiZRXFfxxp",
  "key1": "2wTtV9nFNaNLCuB2kXkk74MWqJko5Cpirpjfu515qoMR8eJxSLvp9gkjSVVW9C3hsmKe6AtZFK8f6Mq5oxnmpXb2",
  "key2": "8m7fMhBvviV1PRdq6knYQ13kErZUg9qpLwHK3e2dW1Ee2FRZw1UA4jts4LKTd2crHXTpBG71cExQqcJ5dNcyg1y",
  "key3": "3MaEZUhNT6rnuRgpHi62W94p3bt6g9z6mHLbEKq8PSerocH2qgPrhGxGaC7BBHQv4rdeFzi16sU7trZKsugjBhp5",
  "key4": "2e3SLyY5ivc4xy85Cr1bJU9Fydagx9UmG5aPvRtSfAE9L4VDcRUC7LBh1ckrLWabn4iozRBk6EEeVxYsu6R9dW4i",
  "key5": "3tNL6HDgDibSB1uK3ZcLiBZryAsFG5D23dYgnYS1h5CRj7NfjaY9saUopwdyYg6mnv1aWejewVynX4FehesqQLsb",
  "key6": "2G8EPwRV7Z9q3VAWhHdjtqfDi9kN6Y4NBfPTBcPcwueHwjNv4ApNa8LeR2S61npV3vB17FFRwtRUJmpPBLGVWwE6",
  "key7": "2QmCiGULj7UvwKWFV7kL2ghBMxFfZPKKjgpUFS7JPcKJsZbqX7qBrC6K3u7e7aYoteHtufcPq5rPjikUPqxuMDpF",
  "key8": "5CbQKUYfu4tczQLnn6YjrjjmVxM1yRuj1retXR8CKKdWBfC4HiFhhoMPWq2QBk7Pi9e5EXvrfhVeGxwNGveqQqts",
  "key9": "yZGJiEyFwLFoRM55aCBV6grxkSicpj4xJfGQpHwZ1w7pN9B6c9HT7TXjGMaf1GyY8QrbiVBCTGBRncFHMsND1AC",
  "key10": "5C8Zs6TdpjLeSFfQrXJ3iXnxiFAygfXyMbAcVcLCfkGz4gmTgcHz2XLBsTnrBfF4RVf452hzgfofZPH7usyN9rC7",
  "key11": "3MsTr8YSd1SHAZtYFx5ri7eDqqArguUFxrye5cFYpYGJ3RmGNhGcs4dCodG2XVqiMZZDmaZ55SDXKuNiD387ckk3",
  "key12": "4H6eiN59M8TaRD4u1SeKhXcWETgLGat8td19uJ3W8qY3AriQEC5QS5cja2MS6749ZzZBufDhjGWfNPLTFsQeyFFg",
  "key13": "3HnrZd6uSUCjXL7gncjxdwYx47yDbbjeEGyt3g4c3ywjxT6hWA3f4cFdYBRXwRauDaqXo8v5gXGaus4AvxKBLMxr",
  "key14": "2rcTrSSFfUXv4ksm4FXC39YGVUzMVj7obrS2UWUSUi51VvgstgaRBr3FQbc2X97LRHdcVcSdyCFWNtJvmfvfkKUw",
  "key15": "4Dk2N5HSN3UkLHwAVg41nKpKqLYhWuxrRVKetuBMt4aAdmiZmRyx7NCUFQMtbkv4DUnMg55KHMH61DRYEA2yD2kV",
  "key16": "3VQEAeRdCLT651t6EsGbRDXqGc3ihcpxfBemqCUaQYTEoT6zkXJPNrzgEdePk16KENFWSok1bZu2JNpKJ2swd9nz",
  "key17": "4zNhV4vHqwbwuXVxvp3hFganQXVaheHzn2TekfmpMFzVJaXfGhh1e4NDADsQWMt1ZktEVkZUHUFBixSagxSGVcJF",
  "key18": "4ToewkXWPyCe3hgaQFWW9gARoDQyJ5jTsFwu2WFhGJE1nNYTfPPkdLt4t3zodiyi4vxYkBctVp7Z6dDT2Kp87Tsy",
  "key19": "4j8mFPtuK9y3b7y3jcnoM5rZ8ae6tkP5wA4MwbVRAQq5uAeTUJNPvrvhM7WpF9MTKF9mPnLokzM3HhKwEhxwTS1Q",
  "key20": "24niYfj3Vtc5vNS5a137FPWYy7WEKC8WLq56H4A86onETuKUp9uVRfeSUCyEvsv3Tb4jDsMaVgeqMXy7RHhxp16y",
  "key21": "2RAymgqzLNsFG34NsE8PcaEcfUioCX8bajabojB5oR7wdLWSZ8GnQyngWvNiMX6ppZBifQ4MxDpyLbrrtBEjqinr",
  "key22": "3iuTa1NMWXibGS2ioK9nPYxrntwWKnNHErMT7x6FwyiwdYUXfgsvwpE4iBEC2keWT9c5Pj5kJttMibDDe3UVudX6",
  "key23": "3bD2rE8YYXzSfekr5CYaD1U8XsZMTxPYXMvGCtUHTp7tFXLx9XqmUAad4WbkbPGcBGDGjbMHg9PHJvRfF96DWCmz",
  "key24": "2WZWfxD3EfEsckv8TDTCUqDMvFAw6uPFaKoXvL4ocTiCGPzcaWLSYxFHCrLwTMPPv1GtpAt1nY8Cu7f3gb3YVvi6",
  "key25": "5frJts69kEDNaLznz9531j95ubW6mtQEckJSViQsS9g5r7ZNjZwEGqhoJ3BhgndoD9po5jyPRTREejTAL9Ek4TAP",
  "key26": "3hPr1YTo2782b3zXTLCWMQvQfRrVkRbM3n5yRnibES8VxFtWBaBUk7ZNqPS4CbGDirs5FLTKWwJtuV37kPhs6NDr",
  "key27": "2uZZcQ6kmhk57s94qpsooNJ7xtGRNJTJ36KcbUaQmoELkdg2MDAqnFp7hEaXh5UDukuyEBTL6xVdxX59x3czQBCR",
  "key28": "49DpbMdUBfbYcCvpa3hoMnpcCEV7Qwhg9U749c8oSj9GUDXsgHJXbw4u5zku4e9bZqr2PKNN6PXbzTNTT516MWnp",
  "key29": "3cVyZ5wqaxH4QjkbrsFFsBsuULwdY5M5a5zHJzDhTUwbggkma82A6DLeecuJbvnDF4wYGoqZpBZtPe6uouvPzZaw",
  "key30": "3ckiCBcYsZHwBU4gQA8tessrm4RogneVfy868WUSdkCtgBZy4ecAGzketG7g4a77KX4NH5h9SoEpXWSxmeXEuR58",
  "key31": "4akWezfB8ERQVaEsC5jisgLt3wV8mZLVHsjr21dwXRhujAELeQvguvYNRWZoVQP9jrY4h193t6MM4e62vbFCdwPe",
  "key32": "2PTP2zCyvNcbpcMpgWuKDRJwea2r5XCNf2sF4w79VdvRThJprDUtCM8y4DwhDrzENAAP1a3bGdzmjr8Fr93qNg6c",
  "key33": "4pRLHSyrwzJJoYKeDTdDX6KhzrZeRWRUaBpYXyysnkzUrotQubmUnipFehYtCgV3QjyCJ18AkNgY3tZA7doXdtUP",
  "key34": "35oW9bPArrSWcDETsrB1E5WmPq5CZQv4WXBAvRJxAAMfhFTMRT77r6r8rkbKQyEJKYNcub5xnwM6ZKy2rosfSwHY",
  "key35": "MEBK2GpDuRdmZwHVkDpdm3iPcNEX4a8jff7Po4ZrQxenRJDvS4GC3SguVX1rfJzmVV5Wh8yYqcjrbUxrY5E1ebm",
  "key36": "5oc7UkipS7N7xCvfHEiMBvRn1Tj7Cz6xw7GLR8zusuB2RXUiqTPsDDznxhu9zi188zNXuBioKVvTBkGrZE711Rxe",
  "key37": "2aeUiK4TDUsHvmqayJbfWZgbzFXhka7dn7ezQbycYFzsUh7LA5Jq8bgL1C4xSn9AUwtwLDCKJ95GuARuw6Myvni7",
  "key38": "5eoUA9HQcioKRxrgLL21EMQarQk7K5QhhWBn24mDPXnV42pCvH1YqvnF7YVcgB55zbkNMNk54MjwqVZtTcTu2XQU",
  "key39": "3fhtEoYVNFKH7AzWAvUUjXAYV9yuwrpGooLGcm1UU7QLY6jU3hnzbNofd9ReTk9rfZY2qEitVswDxLLT8uxdJnSM",
  "key40": "4DdG91LCwFWWAMiKth8ympuYGuXQ5RU1PnFbSL9xmY5ovB35ZDEypeKAMhXMiAgr8WhVqzKaRGHAWS8oHguZAW2W",
  "key41": "5aM6VzAHpiYjiAukazDS2riZDek4JD6ehjQ1mmaLPggCA61ZAWcEy8PQ9dJ2Ri4aWLUpqWxgkGE5BgoUc8JGcXBA",
  "key42": "f7yhSsmZMRPq6tP2XtNuWjJweS8sxECDCAkv8yU1bMGyNKPe8k4UETHauuM5nSjGehhhiE7oSUbyNR5AgYqCPv4"
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
