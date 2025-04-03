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
    "cYL1aAuavfgDSH8tkSM1fBb4AYnbviz3Cdbhg5wgv8d9eeWwi5gwZPd1i39YaVm7RFdXz1ma43fAP8WNkSNSGtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bFUfASVWLjSwenZVW5xn12a3rJ1CrFh9vEMLMa82pi4xv3PXLHKd7jHpWo6JyA9cixs5dtH1bR7THHBoKETFndZ",
  "key1": "nKDTXa8yfgkXXEQ5Gap41g812iKqEJkt7zMJHZNRvji1rzEFksVeUUW9p7SAKnQMZJ1VzvjxfLYmUL5GBMhane8",
  "key2": "2R2BHUfv7WKkxx7QGxorhcCHEqrvj7ztHXABrJs4rfrrYRKCBvHxZkb8yWzSGvxc4vQ59RM1zyZjTnkKZF2mD5ac",
  "key3": "2txFSPUWchvxSp1jGGnYDzy4sgY6TY7UrYVsPzbqMAyymBtG8eLdBJFdTygUHqisk448sjNhaeo99z4fvwNHnVd2",
  "key4": "pchx1eDyqDL4GUg5FNVARd9QTyhuYFyDGqVU6BK4N4hcHKZdz21LWqSK9WwqTcRWqJQXvQ2Jqzsgmg5npZjJSL2",
  "key5": "389JjyT3Q1yU4RbaG4zVGE4nrqoEVxkpxJ2gnRCjPL8bUhQzjioHJ4wrQdckaVmvv4Jc4kMkxnziW2bUc2UTRqKr",
  "key6": "3BMmpKVGhReqwYHy2qqW1XC4byTBDP6jh7tpDTC5PwwKwH9SogkBHTpQ2CWDbct21g7Xp5vgzEDb8NFtxX9BUrtw",
  "key7": "3V8UBzDUM46YR6spgGkpNmpbuhWowcbN4QjzvkJUgTGUMkye5MghYK7kT1qmdckWpX6FXxyWFgppuGeCAGZ76UCZ",
  "key8": "5MR53C9vHEFUjoKjqtcrquviRzfsdnZGRYfY4ZLozEPDA6BkYp1uLYvwQgSwNypF1ALfmfdzmD7cStyQqfprVdW1",
  "key9": "347BhMM73Enmjn9njpoWWccC5RAjYgc4kiNdopK9CYNoWU8mysNCtL7Dh2azRGS6EuEj3EeZQNtm9jjtkU1Ew6YC",
  "key10": "dKwYyaXC8XigVEKLmM7VBbzWQcCDW9EEBZvS5dcKSVPSUHbqNXcZNDvvQ4CALsQHGqeFi8VdENW91tsR4max8Vo",
  "key11": "4zGSHymUSLezBBgXZfB6B3ycmq4cQ8hsW13Z8pYUFW46BHotihFDMDAcbdiuuYSfMbu5UXEmddXqYvRX8v1rsDFx",
  "key12": "5bsVfxx9GN9ZJo1sz73Z6KZ8QbNdqr6Z1DWGkXdQZWjk4GUUZArpQ2tWBEwfpupfcXpHRjQYcftwfsJZcJfxyDXa",
  "key13": "4zE9FpF6skESopjbxZ4QUxSQX4xHTaxHZhdBc61dW2iV5dGmRMaZTDE8vAgwfSD9UNdDk2mGYTD32ksXfMZtwHE2",
  "key14": "31TBQFY5qgN8QXfoCaZH4assLCRdtpjV3bMiSfGvAJyLimMyng8BDb3ajS4W7Yf4AmMYwUoDHshLJaf64g3RWLaW",
  "key15": "eLnCkcp2ayYDC6rEv3bByne1hchriaZEc6yqSz5qAJ9SpatarjYLv7HfZMxhipedCmgUzCd4Z4sZGQ7jpkr4vKi",
  "key16": "3VgTwMBikndDVrSvA192mPpkDxWpS8Q63kMbrL3wXDjqaS6b17md7i8xWGfkSKu377Vvz47NAWQSZnYQobxTkAf5",
  "key17": "21nPMHAZ3BPFs73JoRLTbweoimrcLvsxkuKGAjjfyZ1z52K9XQaDyBRM6sh1pgU4DaEcTdWpSwj3kos8PfF5HXDC",
  "key18": "TfwqwRrk8oCeywSdXbu1fwGohzTh643KKWu2kznK2sLrx7ZsuSGr4jf8uLuZBcCpQb7J6XujJ6RZ5e4cSkZDNEF",
  "key19": "jjDstUiAuZcGeB48SKMtYowmzJ3j9A8ZEbNbC7jxjDmwj1BMWJuFQbkWukwWTbgH1gVbdPGK7qzSbKAHzjTYXeN",
  "key20": "3cKed47ZgTX4Ug8SaiGp3L6RqjSUfeV9JzuBNgpi9dxxsYCoAF7oKq9WbSEdvsUZGZG1qDuVnb2b5yxjhcj6Q5JN",
  "key21": "31K9X6BvmgHiBMCFyYQ5u8H15TJyr361VEjsWnYcgWna5ZVawRU4vzNNcyd38btHHWHqAMyd4QPBHPTi1xbUpFHp",
  "key22": "5PsM4ujP5HMKVVVydwNzmqKp3dR9KbDFfGuoQLBJyUX3PqDZoFPrqhqa1AjRJ6P3ZMKDbzHW78yao3UQb9dNt64e",
  "key23": "sQBRCptDT4zzthugbpawtBAKySkFKa69SZWAAKg31uC5pjnUPki5696AsypK9aGRqemFMg6YLZfMKm7eYkfjZa9",
  "key24": "222B9nKcFLK14dnKGbGfT2mm9H8oWsZTGUjZ5gdsv44iCMZBP9bZDndHw278m8AyFdehqDRBKqXgsKBbsAa5RzyL",
  "key25": "3qr8Dg5eB3WkjfMqZoEbaRe3Lf3149sW3QiAkQNg5JRc58uHd717e9DahwTEBCjQsraU7nj6XTCasADwEetG2eyo",
  "key26": "4uyGhn76oeNSk9p6UsMubKKiv69KQUvBfoEf7y31qVHTdck18oMGVawjMgKsbQo1smhj6kh9XykbD3VN3Lx3PH3i",
  "key27": "3E4eRMEsDLJpsMwy7uJSK36w7mY7px3NDsEDfmDwckLZnoLa31PH9ZodkxpLJoPdxKbUWB41iQ6jXmGJ2YfTFoGh",
  "key28": "nRpNvZvm4fxibzJHPDsf75tHHTGH4VRD4BA8RQrZh9cnWTqS6k774zKbfSKa9BWKiSdh4WReu2Ypk2ni2GFGTvv",
  "key29": "5KM1RcNVKvyC1Qk5fHbF5k3zRnSWE7gBsMvVuwURfiJLrypTVXdF76NdaVLW9D168PrNceQMU2eZxmwFCHvqWmB6",
  "key30": "5dzJxRXZWVoAidv4mfVqexRHBBRZXTpVBXu8w6C4F9HpC4eSgHbgf6n83N4MwQieowUmimjHh7aWqDs8DEspWqAe",
  "key31": "64DnnZ8u8pbU3YYFKjQfsTcpjTAS1tzMjGhfGEZRn6MuYT7GFWyJZ7d6hqdk417RPwefouguZCnBJZuQqwAEcMHw",
  "key32": "2Lmw5duUMuA2ySFoXyrC25BzYTV5P9uuSbfLpHwQYiPWB7ef7ZwJMkLXRsuZxgwGBQELQGveCrpdH9cypfpdf8pP",
  "key33": "4nwB5b1RinaecExhbKtRTioWCqd9JNTZ7xLqBTUcJUDfM3SudQMFKHb87t26P16F5xHdG2iaGttXVvvsvHyFDBxz",
  "key34": "3Uu8T8RBnk8BZvGWA2qUjcgHqAm6UReGdWUn5cc7hDBPcTqzA5KovzsFg6WWSGBKUiRYuqXphDspo1Pjgubdx2MX",
  "key35": "4SN9fo1fu9tnSBm2g7VxXH26saAALVKX8zZBSizbKX13NiYeRKn9b5tNmwLMqjnSEyEgMjEZQ7s7CPp4gNJng63i",
  "key36": "4fbx8tiEkgzC6gJgTVX4bvcXrDpnDqYKsfdCMBRuz95Rvwb6vroJsX1A5eYPJTZBMnQtKmcBahePBNByUenMrG6z",
  "key37": "3kBg2BSHejvh1CHo5RNBoKDJMEhdt1pDFb3TzFcV5FgeW1ST4qoE7fiLnpq1EbeVchgv8D7TLCw1HTtHREUWGdQy",
  "key38": "3C4jyUMWHscnq4CMW9U69EDa9zm1s18ZnLu2ZvN5ZXPkE6Mwm6nGEu4gTMGK7wRxrvCme6EtikkJANuAGB1PcPW2",
  "key39": "rof3ngGDr84Jn5EQ9FKsM5EgVRMp19kHVMvU7NnMS57DeKSEESTgNgG8GZvd9prPAsRtnZkot32oxp482nsvio4",
  "key40": "5iArD1Er6bTZJjsy4u2WKeemyrn63EyzMSWeRwUPKRmcWFGQo6PpBo6i9Z4CJpezA9gFWNVr2nVHHs2GxhLKv281",
  "key41": "4vWahf3t3ukrrAzDQfK6HUk5TSH6NdbrMWAse7p5JhnstqsSpcB1b9iFggudACestQFj5tv9zurqiBuvSf3bAuH5",
  "key42": "NBnUnGs6pQXnp8cnKSCEEeeJfEEB9jpghkg4jz7KrbU4Ur7aeaxoHbi6ALMCptvaDqFv6ZPLJ82EcmubbVWFQvK",
  "key43": "5B7UY1u2jXvjrhiFKo6AAJWfKuqtzUQ62m2nv8ZEVoMF9nNy8Jz4dHRhvRFpKAGzF7pXD33ASRuLiDi3a915Tsjv",
  "key44": "62HygjArV5iNKvoBkHHqju56RBmXPirffmLSYxMXNdL4bD6ktKXY4XwYGHmALbEKHeNETCBXNat9smjSrsqF2US3",
  "key45": "4FULfbJUbPoFtzQNGEa8Bn74r41etHTfHLproepDBBDBryVszyqc9XkZyEcuDFgkBBidVPNAQBTpBf7ymtaQsDcE"
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
