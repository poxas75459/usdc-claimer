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
    "3t7ueQL4GJtPsvCnuzyZXovWVHwraMShJBTG6zxJ7xfLvn5ZP5qzr2JMzTzfC7uqQNDr1ZTF3Myc7vQjYSC51iZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HbyDkHcdCdhMNFCFtft6gbmbzKaAApVpz8sfUVRDkmStu57vQTWkV5XtAZ7W4W4i9c9p9v9EQb2UgSuXHrZaY8z",
  "key1": "5DD1GacCXDs1oVAum6SX84dSjaercxmufeYQHpcwDqXQAvp6aBmpX7ihcjkmbocGwTgUedQgD6LbUd3k9yLzZJrF",
  "key2": "4uCkkncHfDtRC9jbLZWL9byH71M86TEDnQg4skiKwVUuCNt5LWrvSzhT5iRNcQwN18FsTbi15XVJJjWYEq8Ko56",
  "key3": "3kmkzXR6QDNCDcgeCbrWQQio5DuGrDErdsbWLx7y3opG9coCWhfwuqDUjdxSxMHgU2BUo7M6sqX9pq1hQhr1WgS7",
  "key4": "3pKTAace6ns38wbG6MSwmvAFP94THfx42F2YGeZZQ8hwic8sMP9r8qA5xu5LMYhR2TpiX1M2MfpkbsCpsLJKZLs8",
  "key5": "5X9wpgcuBgz6KfjPr6UuaAm38j519mz5d9ZPfVM3TShwETadU96g4a6HwPYaraH8kXFNa86StqZdJgBhK4vFCp3n",
  "key6": "PY99uXrpNFrfs1PTmHuobFzQyWanj2urxzU2D42QhaC7LqA44JnyQzBBCF97MEXikpKhZJ9ksL68Gav8TTeaDpR",
  "key7": "5nQThc9AvtM3ki1gwps5yUaUKZrgQfvgcfZY8v5UbLTSCrTr6u89zbYwNU5AJLijquCyHcKAJxXQbzZGgu7JDKzF",
  "key8": "3VkSnDoPjr5GfnYrpC4tkAuRczF5AKv1C1u7xLACM1sC9cPkcYHVxo6Jw8cgcMLnxQYF7q6GvkZS2HCsGzjR2gGE",
  "key9": "67Zp5o4KNJdcaDs8KzCDmNZAGAVVDUFM5byGA6yGMqJtYR4CNjJePGnPjAJ1FuXBdk9arXQJuNsj8ArxaGML8LSH",
  "key10": "UQnC1wuQPiSAZoHhXnUgLHQ5j3bWJVhXQ7R6nAk6a231mxV9URt2uVFXDWfN9gUTHbEEUBgwBejmBiarYEv5ZBc",
  "key11": "FUvLY5w14PsMxHSWmLCHyyXE611xrT6h8zA42sL1QgAQmZ2kEfoDpt6jEkv1rHmHpHz3toLVMHNvBzzhXZXJt5P",
  "key12": "5s5BKhSKygLbuHyAdN6J3prmYTt44B4djVuRpG6K4XRuAytkpa9ScwGrsEvH9Z6UF2qxvPKysw6cUoHKrTW5GvKs",
  "key13": "55qg3jRsPzF3EYd9wqFMNkCBgVjFYzsrN6SStePE485XREPR3doBxhL5LK4GXiykG3cjCD1QZQhHV2b3J245qX8r",
  "key14": "5jZ2X724h55k8juLm7SLVbcH5uYw1FVfwoo2rzSWE4w822AT7Uz2vEti2F2UmuQ1f5HKMzBE1FHWWs23MhPunjK5",
  "key15": "2PPcuCmiPNpT1CCLiT6sDxPEGU7kWHCM3XxoJAaCkaXK9mT49eDBzEZbBW4C71S91YQ4vaDquueBw2juEZ8r9mtr",
  "key16": "2e6WZzZy8BuuT9VRSbSRJ8Gd3GHz4BuHxVZkxV4y7ZPo53hz2gxT59SykwecUVNUAK1EJxawHfJZB5NVnB8QvQbJ",
  "key17": "ELfdiyskXSGq1yXjPZt7w6NxgBtXhfAyreEdH8qsPCH1umTZg7smysktP4vQw8J4RD55x1La6CF8B342fysdAmb",
  "key18": "3nVFYapAofnm6xLwKf87yHqqb2CVADBwCDnw6qVMHd2MZxknV9yh8P2JjNWNyQnVWVUxRcaX1TJxcSq9zc2ucEST",
  "key19": "4KgyLHB245AP2yThVoz7BqsoCEJqgH51bURF8uqLFZEbCSaMH2TXuMnbitrYBseNp3FVS3RDdbktWTJH8Dw6iuMe",
  "key20": "5gmJJ65GJUCRBun9jpfwTCdK987TNQ5GDHp8UWipeLdb79PyeFRFV4AFQ64WkJnPnXt4M2GX12RLgQCBsGCBXxHL",
  "key21": "3yAGf4sM32XJSGDkCYvesruraE783Z6MnbW63yhwntfLiAbhWJaWV7suZ3cdvbFMsSDnQ2BNZssAFsaaoogGH24D",
  "key22": "1mvvCnixgmG4WbmE6n3sGsFeuGaTZpt4qfMpUGdzBk2zg5waKFnATXDdUHFnRkxF7HNHGUWaVXuwcpMYuRDjTgs",
  "key23": "D75asqmG8mtcxa2UvCz5XXXvV3NQrmPhhYNkWu7Ge62wD7CbmNkHdG5KjmdZS3hPucNtVntHsL5MXb9nQiJ4wDA",
  "key24": "EccFDtLkSS2iuBSAHR9csMT6yeUSMV9mFhFRvyVHPUYG3oT8Sem4kp9KDScjW3bKSDkyRXicbiLtkfVxp4GHAhw",
  "key25": "4SXH3Ft9JBQeRuxcQb6SGnKK4aRbW3kNSvP8kk3nZdLe6ERKb76bPu4FnexGs3Q4pgaHLdPAduuH9dEeBtWKpHU5",
  "key26": "piDEGvYvU9JRPSAAs96AZL6tK8QbWGsDGw98aWLDR7AYSyhCZjKo6XNMVkXsXT7r1C4UKDKH9x8sbBf2Yyde2ij",
  "key27": "4uqePLpRa8TKskxrb8q8PaXqHL6ozFgocxrz7Q3oVN62qLPd1achkHAJSviUNbwMH2NXpT1geXSmsVPiVUWGKZy4",
  "key28": "Q1yLeeSvhgauwNVzjgXzuiz9N72E1zNKekWWrjpfs5C9eTHrHy4aCC43yv4WtLU898vLXgf8pJYpcd4jBt7Bdde",
  "key29": "2yAeiffGZy6HJY7k2oaajCFkzSjDrKVRyuNgoDGgPkEakNh77MBXFhXZducySviD7JQRHBQdzemk4b6B9bawdV57",
  "key30": "3aMMNUjBGyNFJaXQpiBwJWRedfdZCAWMjvd6PZau3cX3Fgupdx6ftNWrVFcFuMh5d4QYN2UsaX4v66saJsK3Ews",
  "key31": "4uRSn5aG42bzvHNxchow9PCZXVMzeaZdcYbH3PjFbS9opZSRJumAJwPSHKXDJkZEhNCfchRUN78WuhMV1Dq5tSH4",
  "key32": "HFScyYWyVDWUYnUpVcvUyQgUSTAKJUjGmCZ8j6AfoWF7ZgoCos7PAB4hYe9NagX8hZ6DyHYr87WPo3v74EcYYhF",
  "key33": "2UgYptoNAaKX1qs3D7PRzbuAxoihcbv722yGao8Cd7YqZQW5Zfm2ZJNVgJxyPijM7SL3hWZG6f9Tadq8ordmgPaz",
  "key34": "EVq2zYkuT3Lzzq6QcVav1iv2RcYGjzZryXAKZMtYaJFDPAYYBqJAPR9rBGk5eeHF6UiCar8Vgx3tgGP8yQg2D7v",
  "key35": "57KSZKKRVtZA7bGpj3t5VVzguQpTw3fT82fgpMvkkyZisd8TKM9ZPTP9hdnVPTN2PacykjQEVJ9Bm3GYT6tAJboQ",
  "key36": "5CBF25uAeYEeKFipAz6YBNvPiyrxF8DLYhq28ZeLm4Fzcr74Nw7fzUN5b5Vj5KQUSyyztcUop8erc4BSkGbbTFwN",
  "key37": "KrfPLxBkdcrKG3imQQa7PQpuwZ4EhFfaFK5FL8HVYcKtZU5Me43FLEwaiEkCdzfZvPbA3k3DTCtz7kQrRi71ctD",
  "key38": "HUxcckaM2Nw5GZYA5bFyTyjqnAdCe1G1oLMjMvsn35DmUrckZ2xRXmoUEfBio589XgN7DZ1Aii7D7ywLUpi7of2",
  "key39": "3uQEo9AT3wQ957xS71LjWraLcPFBery8gmeno6vd7EXphiuDEVRFn912iHfWS6NgegjjbZ9B7Fcs5kc8D5M3qy2n",
  "key40": "3N8UCrvhhxMPjzw185dKGm8a4Zk1DdcRJEVDYFVtRsguCGSmdvoYPHiTjfK1Cq57F8FT3dEmZJEZRcKFpSdZhQgj",
  "key41": "35x8zm4mQWQxHz6odU27ZhYE8BMSMUKPrp7cNM2u9Lx3TpYDEBSMXrYBp56iV1SZJZJzWjJsdsYfW9nvjwP9m4p4",
  "key42": "Q4k2sdmRbW53w2pJaRhAyQu12C5HL938eFK1hyGnRSvbY79hcg3Ew3bfJG4FmscsKu9ZcmZC7zZLp1UqTaoawRA",
  "key43": "3eULPsa13ayA4z3VE6hyMAHaZYrTVNCQKXUdZBLGzfFyuKtx7kvTbYNkpDqJqS7cG4pE5ssgLQki27sa4qCwxz9D",
  "key44": "2Rv4BMozFJBKiS9aNqB8VxXDWSrHtpnmsAE5meQQengB3P7Tyrc9JyDY9kpeSiNxknB9Nk9HvagqivUfi7kXvf1U"
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
