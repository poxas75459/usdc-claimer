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
    "2Fxy5RsxJkk8bVpBstmFB4SgmYyH7kqjsQQV25rCvCePzAJs3BB1uUGf4HEKHFkuvtyVmE2PakPhzJjMsJbDJ46X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TFKSF9Vw3n5EQCE5AgGoFiRGgHcmn9Ltu4iCfedTGjtFa7AascN7FaZpYW4pVCjDwex2vQvNk4fjH8sC2SPBvpJ",
  "key1": "53xQJ4cuuojMuUYVJpT4cNj5TBmBJ8Z6zVcRYfasCTfgAWCbJp6j8VaHYEeYEDVXzJ7GoSACZxTteL9xLKGu4NuG",
  "key2": "4wUqfbUqj275Xuej8mLarsM49pvkxpKV5kuN8BoCBjUL38HUcXJc879G4RNsC2TPwd8zQM8hZR8fH8UAcBzrS1JJ",
  "key3": "5rsGix9mA9XYT9DJAd29VPp493JU4Z7vBqsNm9b6ozS9xS5xFnjiXAqkhGerFwUcg48sKqJFVTrUbDodBhq2R8Ei",
  "key4": "4JPiM5xFhNY5xHHGkRwMp1jNTs5VHFPLCR7U4zrBBFxbR5rreXGfsTsDgtb8dMCKcHouRPFgc1XMGcrJpoTCgvAk",
  "key5": "2vfwgGZzjx4GA53jtZ56yG874kvzs4KdCkjbM3bGAX2YsW7RQ3xNGCFXN7kUkTSGkQrHjE25LjTmbYqKkD91iysD",
  "key6": "QZQUorFd7K4AV3twJgN3vHdMk35F61C6vHW7SDCrE1nS3dbMSfrAQthu7Kt1yYCoQeSuTEPhfQKBXZuDxj1pPye",
  "key7": "2p42kSKeMyT54NQRQewocT3WCurTRYtnaLv4Rb6w33UdzyCYuHFFySPYPKW6k3GUNngyzSqVp5vMdr3qPBvLyhRi",
  "key8": "4qribYKKENtaa9BA17kSkD17MKg5nFLFyiPqQdNxiKdGMPRm3jz42E5PV5eiZ4XkugwUu7RitkBr4ZrqRKKALFNM",
  "key9": "4faLMAPMxNTGnT4CahiB2TuFoSGd4oCswaSMTHpL8Gj52DE6KHNnsxm1Zv8eVSihmCTtxvrJZUdbo7FibS2wWE4U",
  "key10": "3Y9VwzbrFrFzkrTAnWpxdFmE684kQ72439K635sy8YriWDggaVxJ6qSoxgcNo9aFtkDx9aZNGdVMq7nNCmDHezYu",
  "key11": "3VRWARfr7MryooL8ANmzn8ZZU6LhASL1ao3rCAdcMZi5Wo6i9Mn2xNuzGXJPAGEorCocmqWHVs1Go3nSN7B1sSdV",
  "key12": "2ur4XoiRKGEX4KtEM9GYLM4PMRMCLPQTpA1oj5heskGTGB1wtJK87pbBkyLZVkjaSaMuJKYPuHd26Cr7SJZ5ePn1",
  "key13": "4v9EWnH1yUNxDyNu1FTRAwujoimuhFMqsPMHfJM55Y1NsKsWQVHWcQaMuJM4GeuGmNaAw14qEg3SA9sqbbahX8TZ",
  "key14": "2ApzXxLVjBac4am1pTr1c6rAwbetQpgCv1Mp2PoParnvdX3t92VEe147Xe2GToEi54U4QDQ7J4Sc49GtARGj4v6Q",
  "key15": "mkNxu8iyZCtFFfhA5LGJjbUVUkvnF7w4LmFSUcpJxfCwUmiSiLBTbXvVNEr3kD4AUV4BA1hfm8nveuwNRxfrqmr",
  "key16": "5XWyxi2LfSJ5Uomq6qo2adFhyZcDRMxcUJ1U1qg3y2aQvA9H6oX6cJCeBVZBeT6mh96vPNEMLenkdfxJsf1ZSXZY",
  "key17": "HZmiHVgQpL6wKbaYcqRjbsgqKbG11bGBuKCyux4AGExkK4oco1zAcXjL8qsYqmikeZ4GgncJtjGGMqhGRj2g2Pp",
  "key18": "3op5vevSsFQX99s81QeRwZyiNn5Wu2MPjzV8QkDhCVeNGRDJ9EqRjpYk3GURs72S6fDfP4cDE432Q3VLHtq8dW3X",
  "key19": "2kuTJo5NXPVEchTjRNNJmAcEQzCs1VqpoFLkmJh6zEebWKG7pXVFPqSSQPm61BPxrPuB5qQtm3LwzVB3FHCtCwM4",
  "key20": "3hDN3Vk8uEdpreMccdtjEBh8kVbeXf7j4GQhMDM4PnsP3Z4J9WErwvFTo6nsBLfebBsdnmnwdf5sPwHkiXtyfoVS",
  "key21": "2b7GmWm4uddfFfouB8DHHbtJEQKfy1J1dBwzVcaH5VRJAG31fSmrSEzPk37AD9AM431QFWtFeHdmr7toiZNe1n9p",
  "key22": "2Hj9WTqvcr8ojGfrtrtonEGNCVdoUzmoznoe14cLvE74Hs9TX5Vb8RPS4zkPqgPUnB836tkrkazdbo1RwXDD2mez",
  "key23": "BkufUQxCxV43Wm3RWtRaiTmc4YCrBi6625i6wxzU3YrLNMoh8QXuEwJjh5guogdUW2Ny32b1ZccofNCCmyYKN1C",
  "key24": "25jM5k7C3hx1JYE9VVqkmLZPyeDwfexNhnyZdfxNhQD1kWRHKPTfXnkvshUkPgx3vR4Vajigqc6JvpUrBbrx2pdM",
  "key25": "4chRJgFRVmTsLjSvuQB19Wp6cvHkFzpmnrs35wengrk713vdhuvFUS6NvxwJtT9Z5rSAVm5EXdw5jMaaqDesdVk4",
  "key26": "2SnjRSQbzSFyboP1AdXBQTj1XjzZVbSWGScVivNxtW7Xq4QVLBZHYCBAoHwwS11iC3c7hVB8ZedfcB89eitqVtwW",
  "key27": "4JZM9RFMpQ72qoAkoZKEHzNBcPdy1SovsfWtrUvfo9WqBMyz734gUCPBAQwCUM6s5Zob57FeWPs9QaY2WcHNktEu",
  "key28": "3pUuX3GAXhhE6HszusGTtvG613uzUwbD8B2VnBmRqGRaGzLW4Zng4zt89FSh3VBPCAxazLfvyfnNTNGK3VUmbEZJ",
  "key29": "4d8xVy5dfjiG7Ei685yT1Av3SMG6vJ2SDTKb7MbqeohfYtYmMf2MXWFHHBhDh7c9d8pipnw1dUYHQFXuMtRMjdU5",
  "key30": "3mpGYDaxqGJXZLrTmFnLTxW9tBVPsFfLvzDZVDHLxXEUQV6erQrdiq7Ve6rDWEUWwLV4y848xe6j93peMSVXzeCE",
  "key31": "2KRcrdhRGXAiYU9Soc2UDGysTCLQswxQve9PPDs6fj9mBX3X555Tshch38zRtkXAwsnGnkB8rFPnVFeimxZ7tAEf",
  "key32": "4ULbXcEt8v88aD2Aj5oAgc6RfWou9K1Bxv14za2Zf9chzxozRV8kzQqQnJQvKdPnLqx1aRJ3LQJWYeC7mFjHyv36",
  "key33": "3fPzypPq1NDj1XnUBUB5aMowzKr6Yb7HFaYNh2XeYVybLjK5KtmrXUdnDsSacem1Enqja4pqmuaiADueXvsYvHpE",
  "key34": "5kAbcVhdJMCCucG3cNbjtjRqQFfQgBWQnFPuufKyeN2z3NAouMBZabRSj6HScbAhjKUZHP7T4QRpqhPucq9bx4K3",
  "key35": "3Bmd2JWXvTjtyHxAtoWZN3h32MjQ5L9PM1neizZzdUdpTPCU4eFqgjK5sZJcXx9WLHTRr7dFD4JCuzqU3Aur9VVJ",
  "key36": "2oPHvBHGfQePQqogHBmAqUMQM1zXS55sz8XEMkn5UezfXowAUj3gPUJsx3Hd38yuEJsd7XFFsZA6c94TEHGKcB2J",
  "key37": "3oAUDir5pXuu7t9nbUpJC3G39WkRB1A1jiNJDZtuuDbtEDYXktikKosjUWgez3YbJNXJf7dKmqth8qY52bPDACzQ",
  "key38": "51nCwTXYjNug335oJPNi6fnrAfYfkeiRfWEpnk5oZ2EZaNX5KWAJDNzdhftxfpQzTJk8qhL2VCCVPf46iSS6pHhN",
  "key39": "2BvvHX9ysXSp8m4RpyRF8R8etoWAqov8iRxrU5dPPGW94UvzQKcRk4H7USgZUXXSfCwssRqDfw5DtYVWemcqLfg2",
  "key40": "27vLrMHDRbETqHF3TaynpseP992Fw46eAZqDo7oV5evswFGyrkDh7JASaZ7tBpbk6KcdK3NSLF6TQ6yBE36LofxB",
  "key41": "4KoS9KPepsDyenuNxRZdc39ghVKgtGXnERAiPdeNReN93ibwbN7EDCNcYmrKr9s4o14VVk1JdfcY8KW8qQjCJTqK",
  "key42": "4ru5BnWfdzZPF9mVmVpc82ceJvZqipt4nB6RnUar2TSe7HpXJFKrDt2nyVWj33CWwFM6PVybqpVJGhhEGvZ8P5zF",
  "key43": "DzXfMkFBsPDNLcXoeaMzMNVfaYicmCmuQMmbBjR9WEaWryGJ8exeN2MJ1X2MrzAV3N9KEnCxQMtyNZT6j5KKjju",
  "key44": "2eTiJSzBgKVNnq1JH3zW8HpC54vUhxCADeiqpZMwon47BigpfZzTQVHuB3HmeAC4fqCnDcAZTAnfKPFXThkRhzV",
  "key45": "o4BkgJNmDJbL59EJYRtaunTvhiCLTxekCoUT7LGdYdUKF4pncsBoGrnjMzJywgW4iakhd39ypMY8waCEEXrbpDR",
  "key46": "36kG3kD8kf6qtmK16SWmRTaTeNH4VcL5BQYkUDfUYj7LiGKnb6w3a7x8k4zupMTLKivuwfESHpDR6Jc9MfWVT3He",
  "key47": "2fcMXV5UW3Lo7tQ95TZzYVF8M8hJKnmUfK9LTNqmEeYYjuMMzLE148oBS5knh3B7PkyJdyBJwPSEos7QkLfbwT68"
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
