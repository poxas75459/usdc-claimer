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
    "49Fzrvmmu68scZfVq2BFSDcpsNCWYGn93Rx2dAW2ACtiZa194fbGjPoYQc6guAtgQb8ucuaew9ZBKjQa7Udfs38z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aBENjxtiQxKYbGtqcRwhzUx6AyCW2ce4GbNsjwARgqGYHohqCb7QPNtTPTa8zCM4NRoommrsyTXHZbu6yxNJJgu",
  "key1": "4a11LBJsNCrEQy94Heb4erYyvcaYpVoxpSXtLX22aPB5pDefUjbg3tumwPWWqUFUKGqXSEYigZJnnSRQUUdJscca",
  "key2": "UWYoVmgLzTFMfAcfNqqsT7AoD2N7ri3g13XBnFXRnxKhRUT8vkaLD3Bnp5NZKVjzzZu4FfcCM4wcSLXonbAE8qt",
  "key3": "5tafHF1SCyr1VhswL4Yx3s2ekkGsu6NCtz7mi1RCXNQBkf8ZQ8xrhwuRqeXTGKYSxsMTdqjHdfim2vKtfh3Fxaoa",
  "key4": "4tLYTVDpF6PRRAq5GR49cSZCAiM4pE9YqQCtQno2muNnifPkxuZCG7aLqxY2rVNQsYis3H8uyzAgYB2NVQLeeYye",
  "key5": "mVTCT8yShPkUtxwwjvcE16QBeYMRLNUTgEYTjE9WMFFLCDaoe9V3NSWzVxLhNVUYRaLrk7cxwm7PxsKeay54rpc",
  "key6": "3qcuEDrtxbdysb2YsGKT1m4gdUXFFixWMytRHKD88tTd2UJ8nFyD9vm5jDXxNPXLJ1X3jkymtbgNjcKp1dJrYXiW",
  "key7": "4qiSJ2Tcdo6bmVBNFrpMaPPUpaaFT5h8SCYU3G1LDr4WgywUVbMQbDKP98AQVzCHGEPd89eJ6gkdVdGoojj5L1oP",
  "key8": "3v2Mh4vBboExyVGEcR322wnyVggC5mS8hxvZ34aoWpHhbT3kgeR57ceJ86FaaZDrbyvzKjrshE62sGYYSWEBw9s4",
  "key9": "3G4VuFbCawSnS6siQB6JoUSzgXu3oHtELZdEMogAKUfjJprN5KwY21zyJKPnFbcjfn1KgRLbGceD3GC2wQnqdUFo",
  "key10": "jmVvYPZsbCaEPDjwNnSQsVFFcVU3J5cXgYaNpAx8oUhBFJ5Gx9bN4RueqM7iUQi3ReMjJ2fLbsoa9fjHs7kNcr6",
  "key11": "3pMNbEd2fVk5wHbauV9LivQvuTafSU1oscQVYmt7wZUDtLZtzjuG9Bt1o5aWRRbyUZR86sWjhYDaxYvZ9kM5fGqr",
  "key12": "22qXpYqt9fKoTg6v2PbBYdmXRzPeMcJJugo1zHmeD9dExfgGYw1p3Wh4CZq5RBLTJMK4Dkwx99D6cKAyP6ry2emV",
  "key13": "5xYw9qAu8JnPRzzoe6QuwzJWkyAm9oaa1ZkCaQ9WyhLyqduxMrhEkNcHfUWmmGaYNAcgxXGxcFpwCD6Ldub2RYXX",
  "key14": "4aUE7uutBH775WvqR98QR3gQjRN1BoPsiwAw57TXkjSTGZT7huaFEiKpGQNmgQDE6xaYbpMg1Eq57nADMWAeU5Vh",
  "key15": "3cy4aYEoZAfWD89jBiJQzQjMLG5sLJXPXCgHPLsxATDL8ozTKMWnR2CA1UvdiLD7Hge6j4gbiGMLsiJX9mcbxDeW",
  "key16": "3ZW2dofQFK3WHyLaNRBRGKMN6NeBpkMXRduFRwjCLjg23uKuZ773joYPXmC8UASqtcqE7fZkTgD39fvwKpgEmoXu",
  "key17": "4emV8VYUx4HEBLQHBNgukS7bFDSdWhbmKAbVRYJdK9ySiMAx4eFV2QYt65xPS3UbdEJyNKqwpeLScYAsf9vteHh7",
  "key18": "2xcQUhy77te4kfvZSJ23zQdXML3BoXcfEYVzDVnV7twAL58f3D3uX65y6sec9A79XBwr6zKKZCXGx21jDkw4dLgP",
  "key19": "2jd7WUr8eQ8Z8sMh6QaqYY9CxSXJavmAkAB6gC7azEPD8BM5zKwqZZvse5yPxiCg8uFd6QoLmP5yxXJAvXoXNmHq",
  "key20": "26xahBpSATxgQrsjxTPeSKjmk8usXpQyC2wCemhdCeBeN6SzR4Fu8VAJwuGgtdkZK64V4UNuf9osEJz7q44BXxbC",
  "key21": "4Ess4Rn5rUK6We95xRQBrRboSc5Y8Auq2ULJjt6ZuPyi3f1614kAPaDEqtbpqzNe9U1cEjkZuu9TLoxfYB5tNT4Q",
  "key22": "624Xx65Jwh4ePdFeipSLrHQVp7Q8uvLxXYPGVHDb2qFjJeRMunuJLmUq6ZJqTj4eRxWL8DE7CCHoqoBV59rm2KsB",
  "key23": "4rRBp4cEoy7kMRd9Q2dZd2ihWRe1ymEq4WXXuLj9Dx8MU5gJgkCjjqWi67JNZ1ibhsVhXX8KfvpLGMqKS3R46qrv",
  "key24": "4QnvkLxGhA5bjx24HT3tWgAr4W1rnUnJxSq57RVs7Rt9eDBA9QBmdrW2vHPqc8dc2VrtwGbzavuTwsmisBfd2pxn",
  "key25": "4iTAqt85TMcLvddbytw4s62zfX3dhQedXqLWtPqxGBfY8SUKfT7dvjxtaSGGCTv2FQQbMTajsf4X2GpUJN2NA3TA",
  "key26": "5DgW1a7dsgWRZjRqGQcPKRgj5KyCxJKfJ3Dc675qBLX2tnEpFVKS8EQyNexNE26TL5r1eboTx4LiNUxo6uK7oGRF",
  "key27": "27pSCeFoBXwwGihRrN2NJ3mRsBwJX6feh8hfrTTomqDjyN2MB6hufhJMM7bGWcwiA8MFopJ1FfV56huZhFL8274p",
  "key28": "4raoQSLRPeutkP2woMzmbopinkm1Nm4f2P5th9WDdkcpTbTaa8P1YSUnriGwLAsbeAjpcqoq7cFAabNmPrbMVyLZ",
  "key29": "2MT4ksUdGyKapFsyS76gcTHSpLY2XoxFRmTynEu74QiEm9cUrk94ULME9SXMGTrBnGpjntA3erGwUzvqFTkQhd49",
  "key30": "2beU7Q9BG2nD9TXvsmHhCLWyme3TxpWNUEqN8ApXRq7ZGe9jMgxB4VHmV5kuD7n8P9NWh2z5mxYvfZfbyg1iG9dq",
  "key31": "JUTZQ9gLirG3KdXWpZWSyRSMtC6jDNDUBQtRsFVXX42wY9JRpDp3ib28et3w3UhqBNp3BtyBdR9RF3Xg8BbrpaK",
  "key32": "5rSeVv3AgJMwVBVCfhA8hqZwDDvHoJW2fNwwbjLXrTTwG5q3c6nYGNoDEk6bFZdvsBfibrnt14BgLxfcjcJcUWRK",
  "key33": "2EowKw7gWbFN3TgsDWg1tAtCzsTJGvCwGeDkdNG7TFnAV5qMEKSuhbGXGc1r3XVoW3Nz6xiA86kFLoPYRGwU4vnN",
  "key34": "2SyL4dmGKZGeSTiiEKwGrZt4ukeVjhTkXCuahFJUcT6QxTp6dj4Y7fwLa3qsR2vbLb2hJAbsqQXYdw9m8ZA9SHyV",
  "key35": "5WVzmLVdfJjknZTXsF1wrGCyDEkGveHoDM85fAemmNcmZw6tqMZRto2abNQFk4Cvdsr9mNJV5tuQxdAdRFMdfMNG",
  "key36": "3UKbwMxq5X7tZmWXJdipuKM1ENQthCad9hJQzTU4YAhVndGvLk6BLXFLe7DPyYJg836ke4hFYxY3s74uwZtBvJEU",
  "key37": "2Dw7xefMGCGmYZQ14uH7naAGdUcoELrfAw4n1GoBvMHo3bjYk8emSBCex5bDCgWwuqNMxzPj6Ne1HaynSQVzCDM",
  "key38": "57ow4ydNo2wZZpL6au1LnMhgqyqLD3urJkoxMLUZhvzLNawmfhfkFjka575gPKS6AbWtPaApDeR3rKPrYMsKhgJY",
  "key39": "5ztg42yfT7iyVz9twNobnE6rs4ETCrAzu7JjupT7iEU7fnT7AtjgeFPzJHYvFG5upbtkf6Eh1oPEbwYsgpZPPQz3",
  "key40": "5sSatgUSEFXF1Fyt8FwBqMBFVNbistEApe86ZgfLzCywZp2knmjXNRJmWmSMTZgUN11PCw1tgGFcERireP8jB1wf",
  "key41": "BDYAysEAXiN7VLNgPCkpm9GfTKQTKFSF9aRZrehu9m1dUC4xYCn3iJvL6SL3sZXKjREgf4RmUZBVmngTi53erwV"
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
