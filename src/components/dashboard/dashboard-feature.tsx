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
    "pa99PpY5qwJcuSjp4aBT17wz69d4MQgAwmCgEcfrWuYKdjNRd1JhRwThCDponp4QSrVkgpyBtVdZj57igJZF1wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KKCPQkzEnxMRLM1KqL7GNFyL93cqsR2e5DwWC6QDPJWqVTaPxfF8g62Q2x5Hoo4PhmBovhmuQ7rFkKenq1uyEXi",
  "key1": "RkFZBKzSMWiMaUDip6TRJiaS8jbiPNFKZAYXGiLmSqePRNYguNNyUJgj7j3q74Bk8uiT3iQPndrcJzMmqAUN11r",
  "key2": "29p7toS9d6YjUZDrSwoKFEQKKjE1PoS6NSUX63AFD6qPby7jpV6427R1sw8mdN6mvrXaQmLvyjwBwLLcwwqmRxjc",
  "key3": "5vcXu4GPEYDUmD4PnK5EE9ZNTrNbYSYQBWFCt3v7DN7ffMypYjzTzYsQfbcWhS9WJzVmLPju5eorZdwQW6nC2Lfc",
  "key4": "7faiof2AikRepWfRE8s76gtARXHhySnkCUHV92QtivHweCvLom3KuHAag4nXGHRa73ABxkLbhyLezmKZWB3EVRt",
  "key5": "4QY2T4Bsr7KLM2EhFxK67Pk13dpkQHZCSDNHSbxe8cTypwRYmbsw93aCkeoi4aK1AEXswZTZe3QRy5TaMbNaB5hx",
  "key6": "58P4DbZ9NS32YDVNKPNE7LurmA23M6jL7yKY6uxyVSK3YUiZebHrSXaGvRLp1N1ixZgv6UdTedskBVZr24uMtLn6",
  "key7": "uUGsyzH6iQyA1q8Mi48gkyZp2v7u5bX34vWyW5MKTnkVkJX5Wvo6MbbuoefrCSiCEJ8xvnArqbfp2oQrxGU3dc7",
  "key8": "2yftkgK3547SaG8ZmgqmQbMNKb62NTfAtpUFCPDSPUEYcgsdxLmnAMbyWj73ipVvhQw5TvGdPimDemRjSh2LiAQy",
  "key9": "4uKsX5pQSYsHAHqzNMgTVemxSRXU1ia8oRHwws7dTihAiBK1KLXSfQMMThkZPCvTzQr2CVLbaUqd1pec3cikjaxg",
  "key10": "36rnmqcCeV7AqtZodCE41JnY6EMnpheS3H4158t3R3g77jABDX5phu25ynsmKFBtyHKq3naiawSs9bHDb2nfTqFu",
  "key11": "4LmuedSw8dbQwawsaSBGmT2UdKrehtrR3zUkkkEwfnPcw6A35MYZoGYgM7ekXMmcXNUGeKPPhmdp3EWzKwB75Vmn",
  "key12": "5DUa9MGFFbKGdAt1PmUaqB55YYMw9hLG3iFNYjibReh5T3RK8hzr7Pf2XZfwWPPZ2dE1kB6fBifUj8uKXEAk8veQ",
  "key13": "5gkbXTLrWcDWpsZZg9SSN541LBQCoEevstMbVUdcg4s9jGBzUyyoJhxxzt8MJjqC5AoCT5BE7jccJhciX44q6y6u",
  "key14": "4v8nsZ9FkYwntrPEeCzrJnzT241ESPuF5ohACGJZ82jYpWTH1hystHCpdDjkjSevsRGDXQDAmSM3xdcH8D1Ec6Lm",
  "key15": "5toFPUGMpvnXfKjWEjgNhwncZ4oFrBosVySGRuHTJnAb1vLe5VweZ4q4dDykbXNtTf71t7DH1pQusnH7WUWqmsGv",
  "key16": "44JMqbZ5WriVFe6fyJbSTKEzBRHDgNqVbAFoQZ9mHo3pR4F5uCaGq2LhYabqiRTsRfvp4JazvcWmMPhGpwP4e15Q",
  "key17": "QjiaXHmHB74khcDifEpBzwdD2Taq2bcLdjDwiK8ERiHtzWPSPHMfN9TWtNXDBWDTgRWNJhxqMEQboPYhZZdutXe",
  "key18": "oHu4R1rVWyy5EAvFb7s5aBrAi3u3xt9XnP4cPaKtL6XKwbBEQKZFgNPSBqBTUPE1rAmRHsqE2rSpH96eHY8yW9C",
  "key19": "63GWohyx3wmdYyaLzwrTdiqujKDr1LjRbeYaCUTDsNhXwPVdvo8DWFYeAyKaRk2EscKfS2FJeL5aS55ZfxRYj87C",
  "key20": "4Y1weSGf9vo5r64FLMc3PUUHb289PD3joXLoHu7vPBgpwWS1jNz3LnLktjbpF13qpakMJSF6n8jB2oEabXzGPhJ1",
  "key21": "4eCwuwzD5RTdw5xR4AzBYPunURWDEuV1fu8Noz4uSW3mmRoEoiXuNusLcHmcLTt4UF6BE7rAdnzMg8UVgGPykrjN",
  "key22": "2w5SGnkHnZLx6n9xCyXCEEgeLjF81tASC2xLydJZq76raw5kAA9WbnASmSQwM9M4wU1sV7hfoi2Qa5LGQjgvy9xp",
  "key23": "2ofovktsD2c7kGDGkJqPy2xhHSX5y2xJ4Hb2s1rwB9kHG65yM5ACKqfLLyM3rgKHerTuHz1SZ9YjDkaYaNrxuqV8",
  "key24": "2fT8Pee3ya5m63UeuW3GGB2JqPk2a1q5SEJQC5CeaNv7TysRjQNKJG1fVksYMh5M5KuuzqAYyzHUsYNGe1JRQWy9",
  "key25": "5yXQFkHrQBZWZv4HvTH5D8oDjiJnWzNfyB6xPefBdCHDJwcr346jgYtqU8ysUiavpoFd8kfeLVPxxch9zSuu21ce",
  "key26": "2RTU9W1HB98ZhZCU8KgKGNQJhGJohp5yM7xtEwu74CSCQuxvrprnqeHh65n5HA9dpieEXZGwfBLHxCWvjRdLAas5",
  "key27": "4md8rS6AvKsSsmkC5imRcZ1Y4tARXDc6nU7aQNu9EVj6GAN1i4fZfJVBG9T6jKqSKjRfLSeHfkU3ZZNHWHPv8rvt",
  "key28": "4n8xiC9fi4cJrjKkjPfYy378PvUVQEWajLWwMadntJYeYvnuk92GM9BQfStC8sDfYumr18eLx1qgVGCmFJ4sxnVU",
  "key29": "3feeSkBLZM5UAC2YrFZmN9k3jFzaG8XoVH84zjBNUZgYeBWV9akTYGzECoDXnYxXVNXsDsUU46LYnHmwEnEA1mLH",
  "key30": "5DviaxRD4fUPpPh9KEVFCfqgFjz89rggxU8w7FyoFEBWTeJ1dP8WVrzLnPK5vnc3Gm7qqch7iBXXG2iU2WgMQkX6",
  "key31": "2FHsWLu63dJnF8aCHuqwUYe4yKC6bay2fQu7ke4PwBE78tf8PakvA4AEpcw5s5AgtKg2hdxAJ7W4aFMVmAutt8GL",
  "key32": "5YGjRMUm2syDXzTjRA1oJ339Yb8wpQ48u7umyVeQYU3AETSKe3bikJSSnzSS6PyghBvzLveSvqFVv4gEmFeWkkt9",
  "key33": "5Xrr6h7L52AxGc4WegGcdAaUc7JtCPfDPpTqEPtFha946u6kivMFcTVS4Zc8tRYJ1NZaQCHLjZH64WMc4pSrywoE",
  "key34": "2i2boza8v1qNL8ypkiDvKZKcvyHTrebLtSSDZu7EnERsDEse1jkcSt5rKbtnGS7dbWUmWUhn51mqGeyRKHxayh45",
  "key35": "4kfq2FqxjReNuRjtkZmQ6PGsNiHbXkyvjp3RH2qNsE4VeaajMo3AUmnw4L8ZtiAXbDpjDU2EAJxMkR7QT53wfnBc",
  "key36": "r7JYGhJrJwQd1URa3kN9ZN8sxF3xRGCB74YtfDKdbEXSJ9ahJTKgQqLiV6YbnpBdosARC3hNSjyrSxT532paBKA",
  "key37": "4TVXvibiDeAmuKNZmhgHFgoMiazqy7HAEHmB2N9LZxv4zFBL78FhztebZGGxWBzZPPwAJTWyN7gkvVGF5QHDfX9S",
  "key38": "4XV8cwfMCHAqkSdHAdT6XbVPFCsGe5B1F7it7h7Zi21FtAi51b3K7ya6S1v5D26MFEwTGtGZNaJHg47e6hKKRY5b",
  "key39": "5WCwYzdSQphD5qtBHDiSXskUsMBUypSttJh1zMvf9dw81y3uB7g6SfvDQo5N15vtdMENsP2fyTdrT5ZeUkFoSE5r",
  "key40": "58oEjUxk8u2F1oppvjRwyy5bDTs2qKK9YQqdu4PGafhqsXBWnVyZcmRqo9BWbCz4b8z6YSRfjxWte4mSVsoExDyx",
  "key41": "2whi3QMdq8nftvCgrs2sakDPnVzQFDHHzTwQUzLqG2FtY12dFgb2yiBK7nEs2affArExWA2zDnRBdFKUDzeekhkH",
  "key42": "5CpChRBdXmLQR9vRPvfDrVFqcb8biyUkSv43rjYK1Dr5w83ZbpYfcV2h1jFiFmzsv13vpwGe9M7wGDs7i8XfYvV",
  "key43": "4kiLKfCEsgeJ5MHy8wGJCmAMWu9wGfrcZdVUTYJsDRkPW3zyjBWYUMpEZgDzKhBDadDbQcvbBgEWRvuJj9Du95ks"
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
