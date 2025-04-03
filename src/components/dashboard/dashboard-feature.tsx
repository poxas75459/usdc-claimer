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
    "52KvftGQbQxKurBjXwZBA5A1R3ZDU4bMEzkDjTE6uiB3FZa4XdMNGu9zNLM5jsw4SxSioKYHVMdfvCKJ1ehgcpQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u635Lq7azVTj5tPTiuQvyKc92u3dbhthuAvbAvDxKDH2ibVgNSXs7vSp8VTJ6PAGbMPQvykC4momK9vwwFURXrP",
  "key1": "4YXGqzVyXq3mvyVusSVaHY316GyYquhtefNp4fndWvLgNR9JYSP49wcRGtzrAsct3SaU2p3iFxLwxotKK3vys42c",
  "key2": "uKnDfv7tCLbrMPPBjJxK6NyVxf8RZGWuRQkVCQb3e2vFu29qxNxYBYDmteVYA3Jv5DEqCgGTdZ7yUDamdEeANqm",
  "key3": "3eHcqPPsTerYFygMTVinibYR3spi76qt3kJgDVBMe6weAisngQ9fVoejda1mMKBvExkphj8xVWesj6h8mjERoXjv",
  "key4": "2n5Sqv2v2XP9dknUTyaLwRSyhKJP8XyrjeH7qJewDsuy49PahnZxwMA8YoJzLSX28GW2Gq62h7mJSk1bFdc4venY",
  "key5": "3mWnSu5xtQND2y5mFVMGuzV2i5SdG17u7aea6RVq2NNYzcVP9vk8dxxLX5wiW59uJkx85CNzunXPfoRor8Hhq6f9",
  "key6": "2WYd8JoGG6EvdwgyVuC6HzLF5B5LXi8CjSq5uPDpNsvcV8dj14B4UReMxeHjBnrf5DmYrXGdWqCKkjVbJGd4diMN",
  "key7": "645yLt87Ev5gHorkt6twAwuDLaQWirvKcMroRcK1ruVteu3FdCK6wWuyvWWkLYw3JePUip1hvJYQd6VGVpXtwPo5",
  "key8": "3QJg1JuLNdx5de8HmQNXawMLFEkTh1MuyoTEccuCyeowiDfyGzHXhC1CeJjw33wHqqrED3ywW5cN7mZQFDAQjMGa",
  "key9": "4JWsMc8pRRbxcwrF2VnUWNjB59a625rXsmuLsjfqaVez5ZSsCTM7e6vJehQjZjCPSuJdZNKp3eUYAqv8Rb1FvSho",
  "key10": "4qWYFouiSSustyWBBVNam8FD6AMRmCwHCQAcDwxodPabEnfXgun9FBzxDNWrQwRRvaehCZTnGMq8o9v5U1tYKjYD",
  "key11": "61FNP3G3mqdpXXBYgJefUiNuaySmNiEFGbicSJpfhR1HKJTdE5LCkP6rKsnt4tWh2uuVVzsxV5TapzaJMoXPyoGp",
  "key12": "53yNrKo2Jf8kywL3y2A8vrSUDmAzGryPGV3uds1Aw98pT9mSKaoYuYmceSfUyefShpNnCZQQszET18GP56Rv61pr",
  "key13": "3wJ5whDvicP49GxuXatMMzSEyuEQ7fvDj26YgAsPeFV6DjrWpst8bvTrxzyKjeXWqbfHa338DBbJVR2hGrdxtX7Z",
  "key14": "Kb6tExNtREPBJtG2SruNYtty5Ks1PBoUqbZoWW8J5SQkzT9w2W3mVJGWqq6CHCm1J9s5qq37R6jjJGYnt9jj84r",
  "key15": "2sU7CuKMQK14F2V8e78vxWz2dZNiVKjg54G2YYdM2QBs2MnFHgKbLDBYuBdcFjHi42yZ7B1KBnoTcLH7vDUDvSG9",
  "key16": "4WcgkY6g1u1WZeM7vaTBXwiVUSrBrzPo1iSJKUrmAZnaSyDD7sprUzG4gUsU6XDoRirTGzjjNeAczs9vWrCtJPTB",
  "key17": "3XA2PtMgyYSgNLZQfMbWLsfuXzFHWtCtH7tbU9kXQxAHtNinWQ6zEZgZyzvRcWQpJ7MhgH4UbGajiVxFe6xXvneD",
  "key18": "52QqKZi6BjhecCsgVUxibGvWhJp3NwC7hnd63AVhXK7ruWxgD8ndKkMFRLm8vkSXp2tr5tPTa1PfadBgFrCmYNiR",
  "key19": "4YPTcFirau7FyConEWSJvQE1tnyEao3FLcGyot3CcvGrX2cR5iCqU5x1xijokEidtAyEtVyEz9ZHaNkgUKUcyQ7D",
  "key20": "2eqM8JxKEsEZDHrvL9WDxtW5zfUPuiCp4eRGPHFSCYdHGzyrLy6hR3Mcic8o9gXZ38Eb4FadDVE1C5eS7LpHNzRM",
  "key21": "2BFfGd8vqA5z15xXrEHMvUfVVr17EhFkynLQvVUUC9o65kfEL8Wb42hRhKiYHYMF5AY6Q51w3SErXhSVgMQnqwDC",
  "key22": "5WrbdNzgbw3MzpwoMpV6K4Ucq5YBVtkoSQf9weveAcawpJqyunX2C6gT4Lk5g9RB2y4zKZH9SVZ5SC2jCxGWH2np",
  "key23": "5jp5TLfPEbUS7dgS1PF4SMdaorpZx91G1TK5taR1qUzm6QM5EPgW3GMCeHdSrzA2DnNTx9tq72CLk4qa2NS8pCLV",
  "key24": "5oJivECvCZEBsR3i7QGusJ2ck16PKU8FpfbW3cDPpcTp8poPoAJUmwCZic5erCgrw3J1ySgRp138hEkeStJP2hj8",
  "key25": "52u2TgxN8vQ42bhTQbKL1CT83eMnhTqmmLpKTGJpYdfBzv5aqFzSGKcgkMqLUmD3y16NbAmvb7xchEfmgSQvBiyA",
  "key26": "4m4oa195JMa7FFuMAeD92Ew6aAoMfhBXvSbGGoLra5gVDmZmRfUpgYXRXCjNF2hU5tZFuJAp9YXCxXiQdZsX2SPh",
  "key27": "2nbizcz33xUjTBt6cctJaBjzyUb9JQXHszaBP6NUL4gjaocTXzqguzLdmGviKaMbxXRHjXZiW4PukBeTfWLE53fN",
  "key28": "35SnP24sNHK7Hgt7UByEWvSwEdJXTKqjkkWqyT38vQEMV9Piq1MGAB2AUEtccp2BJ824fwLvqNSQ9X6mELU8MCDt",
  "key29": "3yXUUTehX5mPzMKg5f4cJSSrGVwg6Yrs2ELzHgh5yMcksmpPw4s9osG39depDGsGqb8hTTbXWtDCARTXAuVCdXYy",
  "key30": "R8osUjWjUadSDeByz91mbqr8ch81TiwVqeGA9ABLVxUMAss64YHmtzMAebBueK4EyVPg1aXbyHC3d8MSpYMGHbw",
  "key31": "4gyak5kq85z56Hat7qN7XPjSXCuvzYoWPjPDNWTFbDXhZNC3pBouYHiu9gv8NLiun2KckjTajPAL7pq441k3gqYT",
  "key32": "5xL2zveKDH5FFNq7AESEf5mwrDUfp3QR5pcDjUZyM1R3hrC5ndsqc26tbUxY8qYU1pT5AbbE1uekS1eXQD8G6jVj",
  "key33": "3Br8jcUNHUHsVmKsckJbXyScXhPtm3gdQYCMS4nJ5dDZmjUTh2ei3zqiRYFbn3FX7bpAxQncDPVtNzH87zuXkdLK",
  "key34": "4HwtTzaFuyhxa49SGREarJTceVNmzShRTzjSavEqYd6hKdUjautkefh8xJMC5ESf8P2WWQtap4cjUrCJDTUrbKZa",
  "key35": "gUM4gv2w7UBBNc7DEfqARPGGnGaFws6GKHUjTxCJY8rqKCYZmrHVvjZTwsFqmMx68uwPHhW1g8WHqiRaEJFeksx",
  "key36": "VsX6fFVpwYQyLKgTw7HVQDT8pedG6M9qf6peyzBnmq2iN1LKXRFCjEJv4g6XZT5qfUaHw3qQxJpc6bg4frMoatj",
  "key37": "4pQuQAzcRSc38Q91GgbHq21EUCrYCtWoi58BoGS5Fpgood4bWbcLrtQLwTu4ZsAz6n9PYyPT9x9zhSY2Lm234Da4",
  "key38": "3raR5GZietipuDKoe1FcfJjWU37f5GgceR2xmqfet2mb6jeNzC7AZT6ULBgZ5GdGhvFx1pySu36ghrcnwkQJRkad",
  "key39": "39srDBSW9P3grizTeawt21w45shCPnjSTtMyxtSrcEGQ8xZCMr9di94D3PfvUTcHkVDC65Q1wDgua1QdiPTFcGt1",
  "key40": "eEyh3tnHvKtjErdbepjSczc3ikjgnZcu2ZSJjSLsJuyCt5NexE5YGT7cBW37gcLYvnd9W8ybBmi5Q9q5VCdbRjf",
  "key41": "2bVtBoi7qVv4gLTMT2CtvQioeESHmyYhVtZ93V7LQSoUPVSsaBrnixbxMREd9NYeYGmyGxhrxj1Aao6gmXWxSeP6",
  "key42": "yZVaHEkKenJVaWsNGTHrcs9a6dNUcTKUxgJs9SCf6tB5s2diw5c8HkxVvNqa9Xopwr436z339dvhH4KmXUYnrPW",
  "key43": "2ZYoDRF6TZ6tYxxvt7JZ34Uoa3gjMuVqhVn3ibzbFaSaFMqa2QCyufYjP2u36XvtDb2q3nEX5hyxM81wacu83tsB",
  "key44": "2NcU7qgEBsC8YuxMsk9pejJbFErvNJnVkJEXYnVcGWbeuurgQUtwDNc9UhqWXJcYJfSZNNfrZxfzKMu5mYBpWcAz",
  "key45": "2vS9ea1Bon7WKesjCB4YXhGWu2LYCE2wsQwQbuMzoKYWiX9MN33KTL5UbPswTYXkg4bAXa98HYksdo8XpgFoJNqy"
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
