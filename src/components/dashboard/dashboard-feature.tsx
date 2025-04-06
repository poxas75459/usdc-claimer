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
    "GhWHHCudd9TrsHYLGDRAEKj1UpeB5N2TwJcML5jmpHr88HAuymJz7Xvu11CL9raYrqGS2mszsjAviPc7ecvgvhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32vNWndqw1wKCVqNcLsL6A9dQ2LhdbCgnLCSMMV1P4PJCrPvSrxwBS7LhzMoae8SRh8oKh3yxT3jaQ3Un69X7zR8",
  "key1": "2fumPYgqhrYK5fC9LpZhQ6DpChMvyQ68TShRG62TXYQnnXLmDYbdDehcVK5dAX4fbY6XeCaTWHBRWMqYjqv1SffP",
  "key2": "5iGfTfEZuQr9XwvpWkBeQFFnR33hKUDzzCqH9G71DwojMAz9onMjaZXqGYqnzVGqnCqjwDY4pXMaLFRAffVAPY2P",
  "key3": "4cdB6pXELAMVBHNnR8e1Ai8RUkEVXHS9sx2LbvvEr3c8vWUgDewSkrQdhFsubGARLb7c7PP82LN5taP3s3EpBLs3",
  "key4": "2pmNt28yjdumAseXWVB62JozkxL3Sr2MAWpLKPmMcPgn642CcyE5bHsT89Pkkpyd16SaEGK3E8CbD46jzTEUHWi3",
  "key5": "4TMwLx61fZe3ZgaZcMAXzFJY6ED7A47ZiVkDJQHhq2fVc979xySCVdX9cEevV3es8btv5FsZ5wWZigpuLRRv1SdD",
  "key6": "3tBjfTSXUmcsrVNR81JUwF6a9w4ezMWC9sEaFCBU6rHFhQv6CARv2k7Nsx3YWfAYtSQFeuVTumQ7eaBrMd9xVmTG",
  "key7": "AS3VFdYPuawRJPPJj8BYrHdTzEbQzqCJLoJQHNJQNYaGRKeLcxPXizQ7wZp176vNtSVtLApUdgNq37m2CtgitqJ",
  "key8": "4KEys1V6TdUFee6Agd21Twzqc44caP5Sqdt7JPdNrbyAYWrm43b1QemB9zcyFeYBmWtpoFNiHmNPge23SVm8pTmF",
  "key9": "3x9T4jtDLojp2RiQCP8gC187P8jDvKCQYXwxARh577xkAExB96f8nYyYCtsFXhHMc1Cb9ejAgVFKedTQjZDM1WRs",
  "key10": "NgsGQsaAVKtLJNdAiddgzRkKhcJ1bezkC4S9hKUgWqwvhWnuyU5YqNY9Qj7ijkpTpfYnDDP4ZEfTFCqJrih8SAC",
  "key11": "55njS9tibp5YwvjPvSyKxdkRT3Cnd1f36xfheRnzhzzTWqeFwQwtabt7FuonGFsFkLv3tQrqTZoRpemPN36RJbDv",
  "key12": "nYuCWRdP4skyjcTMmeKxAFgipMhZMVeY5bdHhFGQo5fbo3hrsGeo85wKK5mq8ViJc7SyqVKD5vvXX96WG248QLN",
  "key13": "5KephEzuTweKfTFfJFYsrcUq5Wr9PmQf9Mvj1Hu79oX6DdC3w3nWAJTR3eHc41qsg9kKDh66RzsWc2uvdgHfyxPz",
  "key14": "45Pp1UnyFNNmcue67111NQYuVvo4ue5k3zG4AQx4ZKwMYdVGddxw2fZ8UGm3TAdMdNrWduvaTSXjbupzxztBZ4u7",
  "key15": "2Txo18vvRLYuS6gAwqS8uHJKd2AC85CsXiQSGribDq39DkfbVcMmvXH2B36ZuvSw61V7digs3W7Dm1UAXk19W1Hu",
  "key16": "2aiQvZwnJyKBPnPzeL6wSQvMhMiCGj77cFi8fgaUGk7ujMeZvvRyrtQ7Sgy3tNE7DhosFBb3bDZtzneRXBDpnEXU",
  "key17": "27Vox26pZ8n36KWeiLbR14TbPbGd7D76nKqRHiK2eDDWjgvXnEyi3oZzzYEP2pG5zjtu1LiHHdqJbFqNhRzvq16T",
  "key18": "2kZuUhvmCYBjWDHhPZqkddWdtwC1rgxDkb1DbrNEWWLw7ZmUhMmXBti7hRd3uTSRV1yFSCczdG6xcSstJhZy2QEv",
  "key19": "2FsdaSc4kDL18Ghei4HQSpWd5tx1XkNyUixMu9Ey7J48Hqn3MAz9fW2JyjFEGEdKWzhV14Bw3JUm9uiE3PaqwSEi",
  "key20": "2YG35z2QHyWfhkSN79JFsBLFU7jSrmMbULzK7Ar27otEYpGQB3hQVAASzbupUu2VQDXQeQZ2pxBZQ6rA7i1BC7bW",
  "key21": "3vw62T6MypsWMgVg16BGf8WeH7vu4dHWYkRktS6VQB9XR5wc2pgDQTzayTNPxGqN1Eg2P9uzDaqULqGaTaaVnFQx",
  "key22": "391FjMZ14fHcECpibKXVvj3UVy4swV2sQrvws1VXMSeAS4XTeQbd4TUKckhKPGpU87ssn79egAb9YdohrG62oVDA",
  "key23": "4NAcYLa223VE2KjnLKvKoqq7JHa4GgsRSdUw8bqqMpedffvnQMcDhDg5WzjETJ1M1EKhK3Gjh2DUF26rkQgUBBH6",
  "key24": "4Jheunqmvn8bGwGbwVJtgN4Wo9R6UwF6cMSdNq5UMXhGPkupXsJBfHJvQ7T1JJVmZtmmzErteg6v6MzhRyBhm6wX",
  "key25": "3Cjd8mHFrMwdDaQavCRCRaEUVqAqnyQkytK5tUdoYy5QRntGkbuGC1E7TgYNkcpnxqxXBt3t7mVVqyufdJ2dtnHn",
  "key26": "ZZY36anq3YM8bAxW4YxKYC57NMncyqnn3vMpsLv7R1e3nmCULmrxG8g5xaS6x3arfovoZXkbw72gjiAHa1ip3Ys",
  "key27": "4ECHRQ23noffonW3fgjJsbfaPKbyJYyhr8Z6wfccTRmq1o2QEkyq1yhpAQxbqWEHyoRNiPCjBipmeMsEa6UpPRyB",
  "key28": "gYbxxUgqVRbcotSCzcqoWB9w2hesMSeYGg6JTi2ePSRuWQ5Tu1fUxgYcpug7Q6r7tdZjCHHkkK2Fu2Akgh2J67h",
  "key29": "2f4GMKC6z7vqehskQV9cCmnm3LesmYDWNN5opVwjXjUHzLaLp2prAaocGogsh2tzVtuUeHEqF9vAomPWdBN9E6bw",
  "key30": "23nNGFfBoPr6X5FFgnLwVbsDgRP2FG6BXxSHtT9GSCVrnbQph9Em9vXma93wArBNoUf8CRTnZJYCZLFqqxkPXtDN",
  "key31": "5Efvy4ZPFk31vwQgiFTAUDZaJFjHusG3pdkfmKJ8RQVZ195BpyW1qF4tVaWZnueTWcyR44fnFmCG7aLtk3NtewNz",
  "key32": "5xqJ85BYGTdV2Ewke8EHHnddRcU4rMVPuKmLNThNciPg54Z8R1P4KXZ6EbjCkn1AT9PhJ1XbmNRrpQAZQVnkuMVR",
  "key33": "3j8vme1fWoSzWBCyruTGX5CzWsyFrraz7ancaEK7yM8N3p9EYMXGzwCT6WRyQnE5zuGiVxLsui6LboVPjL4RBpgt",
  "key34": "DNmjfgS4RBq7kLSqHFNs5cDfpgXG7UtR7KhXmJ6L3nLbEPLwTxE3qBPif5MWy8BL5vUHSwdz2YF2V84HWGqHM2i",
  "key35": "Gp8Gqp4PCfV8FuVm3SDGrU8B57vfNeDztwJ6MHDQA7WmFSqBSNKNUTGbY1vAciwT2J1mw5oLMaMUPWarRncfYyg",
  "key36": "2KrFuLLiUFa372MEkyhjHCitmViTdXFr2Eqm3jmvN5KG3abJeDFq9S4DRGrGJdB83gjFPNX6GbSrNM3gP6h7Y92V",
  "key37": "2Rnbqtof2cW4dxAwS6hgJaPPH5nSidEF9ATuHSryeHbH9EnDFLAFf2ohvJ28DN8EiTRNodr717Pp8vtJhRgA2udx",
  "key38": "CYZAwXSFRr52PT3CTQdyc48fDWV2uJQRtWqhKUjfd3iudUr12B5Ur9b5xABWuxAgQXvREkQnjR8i3eRCu3TkQEP",
  "key39": "3BSVqxu1gTyTFEYRZPgwUxsgHfHCYLYHey7W4hjZjYvUrvR4CopeZfV4U3o1qV8NeVRZhfL3sYyYXA4LFZdX1yWr"
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
