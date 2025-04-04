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
    "maQ94hPodBiKo9rGNXEGCQT14Ajr3GbT1htA5mcPYemnQ7RueC95N37GY6FUC7kwELopNS1MsneegHsSsT7WSAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WDnUARhaBMHCdFvMQvU3Jdgot6NgMre2av2n5jrwXCtMtqRG7A3PgL38d1FM1Tqbh2UkHYSvdu32wwrvmNxEKkQ",
  "key1": "649GYdf3puHaY6Wfx3kUDUGfdgq9WXWj6P9NAuuGnY9gHUf3teD3dPBUxmXhSHg3M7yKTVkybQE15hVALSfKTRTs",
  "key2": "nSzWWcnWZSM7jWHyBP7Z6vaSPe7WzN6d1Dd1EzXLtT2DSnAbSDeieGa6omWEv6yxeaRdoDiHvY8NutmHPwbVL8W",
  "key3": "2nzWxV6q952FogCXE8ND2hgAPFUkHbiDdXbzxHxznuRTWmxkuHMXBCssW6BExefkuVZ6h5c6nnP9Edr2WFq3VHqY",
  "key4": "2akJr7kebxNXQuZsKa9sGPjwYX8WiNdNCnCWE3CYZa2AFMyyPSFu6gggY6D6V7LupimRLUb4itfSWESUmjiZGFYi",
  "key5": "4bf8RH1wyC7tBES9cQidiSgtdBETcz7m58D1eUeuAS6iWbvcLeznUZWwzi7wRnanHvdcAxh2Bupd16LEMsne4Lf7",
  "key6": "2RYt2Km9FECabSadDRLYbYzDWQT6KN7fUsC2eAVU3bZVhji5KhHH6WbiTwz9i9NgJMYJwbbztZoBuCp9p1N7k6dA",
  "key7": "2d5Yohu3eJDDZD8mDVHh44H1fxJSHFBz5sxHJhPA5Heeu7mGdp1AkFNnj1stfToM4bcrbmHSSqicMyHyNdm3s5qh",
  "key8": "5fBCYc3ukZDfYodkFMcn3PAMFoNrFnKkaYeRve6YSuJCpLgVwwx6savTt5b38k72zUXht2vyY9E3SB75VDz51Y6G",
  "key9": "34r5b5nyZNisUot9GgioYwX9hjsV2fxGrTbm9VGv3W77K4cqS5eDtepsg99jsVVFW1etfBnkxeSjy76rt7Zf5Vxw",
  "key10": "3vAroigWReYW5i3wmZAvDT5cLH5v8DVh2kaBm4FzncJiGH6A17FdaEudTz9hx2p3fyP5Py5FN4hpmMeF8UgGgwzX",
  "key11": "zUNo51VhhqwycrmQdjdBxi8fGh2XtfNpvvA7wESbegUkCrE36iUDfVSs4ciJnAf99BnPb5iGSeHsERAngQVS6A2",
  "key12": "4fhxCcoFtFfb1qLziJKxy2shd6kXi6XDXXcKwktnd1NNY7e3V2WbDkca3yv6twt5Dd7aw99jGhh3GWfj2EjuUN2Q",
  "key13": "24RNKMPeaPHkGxPPM4Bh5TrvLCYZgXamGagMPKQVc5BWQ89iiKm26ciE8VDMMZ7gxkUkBT4ejGEFzjY4fD4keFtr",
  "key14": "28FwFw6FR6mNpkG2eE5EK8rdmFzHX3cNSV9KZG14MuEx7ZRF59pBjpaxKBvbp2p94rxi6XjQ23H2XUxFr46qwXUM",
  "key15": "HDBPyL3vyjbinpdQnHwkfsPgwdPRRFkqyuhzn7ikcFjA8iYYzfQj67WNS7NCFQG99oqSZatAsDvXLAHwmoBHrjw",
  "key16": "3Jfbk2pABFg76x8Wd55FUcLtPoaWEcunfNn2C9k4Z8XBFrMiyvk245G8sF8zDHmxNAijMDFT9Xuvxh8242waBgnn",
  "key17": "2j3jbuY3vbhNw3LCnh6SVC42BUPe6YoDsFoKcZNnTxMjgS6GYdBie3h2TCKrgD7gqLT2jx1MRkTwZa1qq7inzYLq",
  "key18": "w3fkY6wUbVhaWCna9zDqkeMJbYzTG3a4rMZrFscat2M2wiX5RWvwb3u8hrV8LWWmocLLTnL6taqPMzCg2Eb5dcT",
  "key19": "4WWVnkikd3Rv6AhS7bm5vbEigrEmMH1d7KLspGTBktYDxD4MWkiL8M3pBsf1tEwWTYazMmQmFoj2QwsT6WXpnrYz",
  "key20": "4adPDGoAWZR5QwfUQCzRLwwaGDoagb39edErXU4CWVie9BbP3wbJq6FyH4T5SmqwZJfFHeb6tTN1zTNYHoFh45nm",
  "key21": "xKn34zmdeJRqxq3nsVHh61eZkHW5YvzGUaLUAzBrkWcXaBsFBWBZjb5jLnQdR3E9HKjDii5duaMea1YzEmyJNXi",
  "key22": "4dL6MmrPYuwXtRacp8nD9VsnKjhkM2go7tKxHBjzR4r2gsuUNJ3H8ALL5qqpAeeneqP99TwVhNrJFfZNRmXYQC3r",
  "key23": "4jqsaBkPPDXTmKFfMkPzVcH8uCQP3TbSHrss3s1ks6jut4eAodRKKj5LyKFToxxvEDenHBTAWffdtPvKCe6fcKdE",
  "key24": "5TADAquUFoCd74DvbzCKvHitzrzvYcPXD99B4bs8opAFo6AXDCEgn3v9WuFca1cDKji7E8nCjo8LKaMfTWXVCxKp",
  "key25": "4N2sANC7re2NHNgDmcpR1RiHWhSkq72xbTmwfQdXqawLACBYfUen53zQceCGXVEGcuCXfvwajWMpnRwqbSiyR2W8",
  "key26": "HCmFLG5Vs6HeAnLDirYTzyBvvT6gCKtz1nRk2Tafeuib8332vC3hNYgpi82EDKUUEULX8B47uYBxkyXSSGyZWgX",
  "key27": "2DdwWVbc787TuBgBtDe4JAV5caHqMh2yr2MnjiKYk4U4y91193ZjNGZwyy5N6iGtwuRrj7ipATD634s2rvSBJ8og",
  "key28": "631E3SpwaeU3yaUqWUyM5NfzCTKuWAWM5hYE5Jq8FWe6u128NhhkigjrvgHHHUG8SQzyLT2dhJo4NDxWTT2HA3H5",
  "key29": "sTph3d38xu7Nny5pFEdQr13wQh2eFGocqDxUEPbPq6XYP82jd6xyDuYSSf4zpXizaRqcF3ZeMsqbSFKu5CbtzjK",
  "key30": "5bamCbkFx9t9c7NcvmmRPLP2BsN1Vi1NCbzaQJAYnhRShDDQLuYvYB38MhpY5eNUYTjUmQDxeKZgRrbQzk8Xbo4E",
  "key31": "U6n5N8uPzYzcm8nA8YJQkKN2wripm7Pnez4anTEkNenx2TLE2wfbyDxMMxgR44PiW9BCK8C1d2XjdxCEE6Ecf6Y",
  "key32": "4DU6DsfkxdNSBnusc9ASengNobJAc1g5TarcnT8v3SqAGe8DGRZxLDBf3fxp3DFnJtaMGHy5pR5Tej5qckXz4Hkp",
  "key33": "2Sm4Yk8GsTPj8GuJSE1vy5WPShQyYGFqKQEEDn2emBTdETuMoAm2AnoGFyRbc9KHMdgE8crQXjCgeH2GivvaMtaV",
  "key34": "3nnzU6nArDvQGjq6EfCwm8UFtCTXRfn3TYKhZcwJb8cK5cdtyAY4XfjbNFFWcvwDsipbsRzaN8uHUU9aYE15tiJv",
  "key35": "2oBuJ8TdaGtqQR9WVuVvvozYWf4FBuvsgB1mZsxACFxFjHjELjwDtPfe7cztsgeDVjVVzxfSUhDk2YM1KfxMkKx9",
  "key36": "5E51s3ivbtmE6xJyLH2jXRGtjocem33ayeFASgqDRtThKdfhR4Ni5tjss6Q2fWRXzGVdfGWKboaLdbhwNcyFUxYj"
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
