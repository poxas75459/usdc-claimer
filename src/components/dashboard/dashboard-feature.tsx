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
    "4pUcU7cBU5LZ5CZSRa1B3qExk3NHTiwK92QLpSzhRPdfmERedTewNacha6TcAQDMh9xWneTAbSw39Z3gdS1b7VEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TqpUGPnji3Frh9KHfxtg2r7oPYmLngYqeg2goaeWZxW7S3wo3V8Tkns3gQmTJXavyg3onGMtK3qTF6wNjPBho58",
  "key1": "4bXGqvA3LjJCKCLqWtcXBdRurNm5SrHe2AnLC2ZfvM7K3YPDDGw2sucvHjpxoUfvgLmFDnHNq2sRknJaMDC8P21q",
  "key2": "4Ajm4KedjjT3LTKEN4Y2YidJKXTD9RH8JZa7d51GSdBJLnsQ8qJzrh6aZ9eJGFLjk9QruofRdL4P62vNpGYLXKnT",
  "key3": "26Aijn9EFsatVkQZYPZDhDEzH6LbW9DPS6h1RmE7Bc64bcJLDaNZRRGYxr8ZkdS8HoV5U3dUojUsbXptU37Wvsnt",
  "key4": "3oQ5sbXzzJSATN1Z1j3jTALD6EMQLY23FHrkt7NpUNM7eecrgGhyb74g87aXJU3JXSfoJHmuYrcss4v3AHJcFf9g",
  "key5": "29Z86bgntkTjzyRMiJvn5a2RX8kHViqJ94WU6Af9vFz6rJdZVh2bTmQ3eGQJ5y6XiKT6yvhuCrdWPEkaPKmqUfrj",
  "key6": "2fWM7Rge8ctsaA6iPY83eyYa6Eks26WyQ22akDZocd8Q1ivPKHDKNqtrNgBiEMt1YXraQVi3GW4Efa4rxn12mNPF",
  "key7": "3PAphu9rH172NdGb5TGpX9vB3xcbPzn8Gotw71ny2yjBrEFC5cGiALmUproCx2jNkFP3rN8cavxsQMSYZvyzVobp",
  "key8": "3S5DYJHUzYYK1kno7Rby1BxmBzUqFn8aiceU3ZJ688H8CHNHJWpXQb63XTx3tn9MQFpwZyD4QZ4WoDXqWhwEfUop",
  "key9": "vuZrEnetEjRzyMb5VMY9hiubG1RaGbVJbD4GFof2eBx3VuMTG9wTHjU4iAUT5kdZGAvV6wH14f5a1Ni17QTSLFP",
  "key10": "Mot8jTfwP6pP9Wc1Xi3SdRep7VnVEd5eF3ZxLRcvoSzkmgMDGnQL75p6PiPUpm5rrqRyPUiBkux4NunCtkRto5s",
  "key11": "4KDnTxfnNoFjvmqqDNrtSWVMXvtb1SeroiFDVX1r4iLf7xrJ8Vg9vzT74W9xagk4yoMVFxG8QYzpNoSuebuoDB8F",
  "key12": "3WuaW34DQ9W54RhkuPHnuEZsxnDnjfnnTcM1nyw5qaTqhPCyCbJLan4VtgP7i6PDmwTt1yyhjZcYAN2wvZAogczW",
  "key13": "42f4qRJM1eVSKCNyeWbqoFpmcWbrj1MU8ih27wWeXcLsprXDSEUMYAbTytNYXPpFMex6BWCUMkKbRdvELCKLdx9E",
  "key14": "XETkryfWRcNz1gABStGVmru1u8bHS5tmcSanMn2oUCzsHDAQp35sZacQBpQoEpdp14k1ABbTQedxeDizyQXRVWL",
  "key15": "5UiESeA1yLqAXGfrj9jYxVJqqhD8223PoybmNp2W3RMnX5ZFu1XBPoSrCewNYpT2fXcBxKtwGBVaPJAkzxBWhqhx",
  "key16": "2MtLo2zRuKpMR6kPBkhQyoQbZiU6qfxXzNGAyinrTZifkYQr9LVqG5PM77fNwsXMu4HKTFGSzCNdnXcaNsD9qzzJ",
  "key17": "3uWCQfLs42MGrKspQucjZmEuaEvbRyqWuUcYntCXVKGZH4RW9yyq4iJHKP4FPhbkuAiNCRszhm3FqoVQJHRndju1",
  "key18": "3AmxGpiQMroEtmW2vCybL9T1vQ8UvWmrPm5AwQvK6AqkWQpvc17QBs7kvCnQNjWCZs6ARt1tcBECdgSAWhbPa2su",
  "key19": "Mxe3cae8L68DTsTAbt3hjD4df8nVYnAut4VxzCfLBvEuutZGvjdMGkRCW2WBHtmmXMQ4ESNi1bCpawKSQ3dB9gJ",
  "key20": "4xBT8PahqASrY4YjQ7jVoztNQVNBYF1tEixZwRscw1zDR7MLLMVabwmsniz6WAWBKBzSKckub7Cxxiu993UtCXoi",
  "key21": "2qt3J448geMtRf1pKXQqGRvLwaSgAmDL3tJrtjrq3UQTSnoujMtq2vsfgCEFcZAfNFdogMC9XH8u9C5FfinVhgc4",
  "key22": "YfUhU2pikq4y5fgiDtuXHsHL9H3zWXf9QdZPXdLbKkjW5HvdrZcEBFwgxUH4u2crPnshuFpVF4LfN47ixkXRydZ",
  "key23": "3EKStUMA16EHPPHrNv2Rjs3XtPewZKxk74QL2Lw5x7zM17bQH98MVNwo73q2LN1fMQhinxrRS1bMJb47WupJPdkY",
  "key24": "4Dtnci1S4HVdA1kk9vTkuPeHocz5PEcSH7SToG2KrVJZPs7AZk9YPUwLQjTgELzgCxZj3gLJi2QBTf2dpYqveHZ1",
  "key25": "5ZzPbncCk7FJqQdVjG68TFDqLCKELPYTqBFWVFpZQkssa9X3q2KNPYgLGu9NkJhu3QRanT7WR5hxmDaXHAZL3jwa",
  "key26": "4WTz25E7Thn9tnRtDaB51qvmRCi7xXTmxdRZZM12mzv7e7LsVKhq7cnWJiiCSNRX1EaJ7PQaqth5hYvPBQRrPj6Q",
  "key27": "2f68rcHtt3rrmG6R2tRnF2FgF9VgFQJUYa9oAtQMn4wwb6t8rNigDxV7xmVKzcJfHRdmuyJWS5E8Up71Ve4nhVVp",
  "key28": "8fmAEhs83GpReZs4yPLHdd9onn6kbP6n4ex6kfLmYd9ovr6uKK4NutxtBQBAQMDQQ5ezehrmzrBj1GcorNJdUay",
  "key29": "fQfLhCd51sgtuy8KX17DgTmpzjXU4ob6LxURiyW9aC1ukT3WTJUFGTdQ8WTjD45aqrk6XwQfHqqQGRg84waU3Ss",
  "key30": "2C6hruhiA8KXPiLe6bfim3wrBxfHLZgL3o9cYtPJs7sSHd5kUFeXqzbkaA82ikeoQp6udEKBKM35PvYrQ8RcN7XL",
  "key31": "2QEdRkNEkf4k4MayS1iykUw9cbXQfsWwCixZeRYr42bCheDYG4VJECNTJkDhgkoqBT1tpDKS65hfhDanj8MWWhPy",
  "key32": "2h4dR8kgVkfQdbJ5WwadCHLVHdq3gPd16rsVAghQNgmuru1tJHTrXD31hpwxk89iYFuxBjii1DrnpVesZG9Zn2EM",
  "key33": "5pDLsF1Q3tfFVvnUX8p3NznAF8KeeotdFb3XMMuVAP6tTgwFXYUL7FQgBep8gdKYD6ttdeAd1RCQ9F6zoz1ixZzR",
  "key34": "3BpXjBnM1ohNwnjBRntGd3viEGA6VaDDa1cFcJWjpKp7meDwoWr7z7TT9xEMMQrNCoQwe1tcn2vZPc9XxLScj3nE",
  "key35": "5xYeh8YWpEYSM4UEih5joJ6PRraYn81JKhNkVdFhcknZ83H3jLXfwQarmAiK7t4eKWCcSzyX4Vhi1sM7PWkcH2xJ",
  "key36": "SEcMSwkYFJ16LdDREKpvrC88K24DLA5Q2e4XxXjYeepBDswxDHnc6nMomBrXDDyVxtgDk7ggFbijo57aorBmr8h",
  "key37": "34btF5wiLt2XkJBKhXmEFmACFMbr4mt54oGXpXbrFEuvQRovJgkBPp6uo5sd8VxGwP8ZVJTbEv62m57c9nHanjaZ",
  "key38": "PVKzhp55wyBdounjExDkGG7Z3FfUivBnUmkc4KN6zZaeSpz9Z932z8NPgr9RZuqqeYu8UgXnSKLnWNHuw6Meeqw",
  "key39": "3fES3PL8ixnjsVzjSUJnTgyce9UwXGs1hVAM4sRiCJpzkjghsv2Tae2DcqwVX2qtVibdFQDvuw6FvdwbcuFyzsZa",
  "key40": "4GxYo7a5FX5fwRBB7AoYdTuFawsEe8cMgz1Jhzxpr9zESxRyWCoTRQJYH2q92eFaNfm2DL4bQXKwY6FJ6qt8Sekt",
  "key41": "5qbmX4mHdXEUMro4JJJms3gKHXN8qQTbztCUvk8s7sPriVsxkq9ajMTpK8yGx2n8As6zD3tH8TkhfjwPDnXzsqx",
  "key42": "2ETVoDPffwXMfjGZ5tSLDKMGJNEbBhDfM8CbCRv8hXU7ussTHFTuMpEUyn1As7dLZASMFW5VzveWsLVM7M2yd6Yt",
  "key43": "4GsaVvNJd4GFqd29JRss4ifqQiQdVa6KYpY5SGEVVQmTNfabnS5dsLz2UrMF9cLGKoQBYyem6eJgcCMCyWNsWEgi",
  "key44": "3eDWWGvcj4ZofGdLhRZCKm2o2bedXQp422158WQqbk9jiuERhT15ApE78v4QuaHSK7rUNhs5V3574ap68yw8CzC",
  "key45": "376DwBihVAxb7hjx8YUsr6wqaXHiUhHyL4Uzy48PskPiQeFxXjEk38AQJN3deXz6bCvGLgyY8fsFjM34BuwjWRTD",
  "key46": "53Unh6ZBKqx5BGaKi2msy6YGPMeWQqLjPYe3vGGKFe2vuZFAs3DdKWwcNGYeGNu8RrwtkeXzpD3WKgRLN8jWZkgU",
  "key47": "62jhUuYQDUENvp4Ro4aiKrVXwY5t4sYhoPosB44UaxAGj5s7eVyAwJvnyAT6wRznQNJZ54yTNLRy7X636AxANa8j",
  "key48": "3gDioxG6FfsqM8mcF2exWfBvx6X9hb9r2AzSDBG74f8bUbvNbc9yCNZBNVLQ23bXBHz9XQxPMRovN3txLNsiaYjv",
  "key49": "3wwykwW3DuWDhiLHNZ1NMBqEFdFNvDPCXq7iSGZkj3j5ZUqDy4zcvR6UY444Mip1cekfAm833aFUTZ952ce8nR78"
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
