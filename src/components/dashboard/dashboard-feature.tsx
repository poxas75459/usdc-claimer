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
    "5KmT5cuNrovnvgBowuVPM1e9LGw8mcXMd6KSNsgVku8CkM2u1HKMHe3iAGi55KE865SEHXKZMGmHRnHED3K6nASC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jc9KWLyx8cDuN8htvSeoYPn98qnsuPKoJrGCr6t79mwv9nrfgkZpJeSaZ4wNchU6DVQoZ2nWqfsRLcFxBgCmtHG",
  "key1": "4cj7fBNJA1pPg4To8Zs7Bnax7AP8jsGMn88m3GwkYV61KAq7UJS7dBYFgPVNqQyMsGNPThd3svTnBbCFsB52yAq3",
  "key2": "2GUZrD5rVLKv2NRvuzB8VXDpUDvSrNP88ySquoBeYDZ7pT65XoMRDwpCzzL6yRSd8uixLZ89jRbZX4zbALpxiSRX",
  "key3": "3BVfzyW9ahYSZPkVbYtmgzH5nh6j676rpE4cm92e1fHbVsonn7Pq4UkLC45YRzsTMVAchoWRJvsyjhD5PmsFX6Mi",
  "key4": "4qPRzzwAdafHVCyHtNL1oU8BmMYpv89pkptJahLvgMvj2dTgqHK7B7qGr1nwoLNt8wEApTKoUfLMY3qVBNQsPx3U",
  "key5": "19EkSNRkm2inHMNNXXKWvUhPeJX9bD3Dv3C4GpGUPVQL7kQcpnDXBwHFumsSxK4wz8wjxLyyNjhmrL8hhBBcdQm",
  "key6": "gSybjtcooxMY4jFwr4mjDxoRjL9jEX4upSgjNAYwamMGUsuyUJ7y8oQoSq9nm5HiEHPbWs47WDb3X19K1EzZyQi",
  "key7": "4CHFnE5HmybXN4aqPvH5zZHLTf7Qv4ymh8KTFbZPSdingu4UCMd9sWfGqgUGKJPGhYpTA63nWMCPa2MxmtLM2Y6F",
  "key8": "2CkX7WvdnxXQybKuLFCZEdgdioymGt537Kamuw77t3AGstqFedZd1Radsih5FBGCtZiVwdX1jLpTFHTXwwK75phL",
  "key9": "2aH1x8cem2W4tNvuCxJLqcsVtxRp11uyXB6wSR3V7yB19SjMd7hPHqrPRi1d3v6oMNo52FJ4LQQriQYk5vfHYAav",
  "key10": "5DUdKvZegKULkSMciunHkJXm6cq8gzMUtWtd3gmfQ24CqHsmygx1FJ7nUxEUCowMejrZ69zQh43X3EMbS1ayiYPF",
  "key11": "2vYyqjyXiDNDRr6jKiWysSnvtpM68jJ4EkSyr3YtspiihkBxejy2PojmRQeSdLvQw6nn4jAptUWWunZ9TBDLiiTf",
  "key12": "vrURWWVXwBc8mfr2wMNXpSMu4vV9hV4FCSt83ipGvRoo2A4ijhMrpj5orkdL3W77NQejCXen4Us1dYindWtotU8",
  "key13": "2MR7nkiq69cv3vE3fWesiGBsobwHduGF77zDExYgUUbfTzRzo15D8rdgLEiA3CXPRtF2PbctukJZvpP6PgSXPZGf",
  "key14": "4gbqV6MkYf9ARWnrr8bzE5gL88waiTyopnFQN6DMMa7orHFSQnajQDZ3Fkg7W6QQ4BfykvemcsKFDehmwK2LQg3k",
  "key15": "25prP6MvcKERCT9EUALAgu8xMtiTQR7eBZTTbEoQLGWaEAxKhRAdcskZRYV1ay7JSzk4czrhoNJSKWP2zN6m5iNo",
  "key16": "2eGCksASx4gNxfq7n2vamWxPriiFsy3DhiCd3cCLyw3J3tvUqeitjxCmpBw61CGBbYyTDbqkHCrhkJfZ4jkDpJ57",
  "key17": "JVydQD8FTUnJeAY4uX3YzvK4qih6g4e4ZrMCaoq7tgFHpxtTL7ibjHRJz8tQGJRkZBRGDKC6auqSHLRcUjSCW2R",
  "key18": "4HhXkf3ZhFPSdKNkbS3abBgFdahcG2VSJLqLSBMamedQG7Efrcd5hK8o2pyqBFfAsUN7BFwNwmZhJxSpFhDXZ4JV",
  "key19": "54hdKjpz6nA7mhZc1g82DfvYVxGDcEePVJKW9UmYUV4N6kmNCZtQhYPTHASsQRm5toBj67yVT7rJ6of9dx9heW4v",
  "key20": "2CfzqgtkWQXMBC8LzEmaqJGNdxSUhwwdfgJro46qcMLyY9a1Qp5gSmRkvtS5FxSRXCCHN4vUDw1NHgEYQznRA9Dp",
  "key21": "2VXdGk7pggP8bKwuT96LStEGcF1mupTW7cV1siK9kR6KwcHkVFY4naNJ7Ls57DLnAUDUwMMKFzJYF1WP3ZvHLseR",
  "key22": "26HciyGw8dq2ioGqBuzfpmTg7mxXZjcSPu8ay6aUW9HBucCgwyLeepcXZdQWavJTPJPSHw6zFdrxTBbbnJ4GDgX4",
  "key23": "4wffBzuDQEnq5sTHJ6ZfLgPjoeHY3SkF5QQJaFKNMDNHjkrpWZko4CXn5Jb7FU4bmM7WG6W76asFtWUvwFfVVVje",
  "key24": "63xPC7qAZiSFE2nrKLAfwgsiMmYi9XTJteGgYK8b4DMioWDhDGwB2fn2kC5QUwbt2inwEnDG6FT14rwrYx1SLHoz",
  "key25": "63Ur1oS6otEvwiRwAREA4AG1JU51TmPmSnRB27eKXudeuCWnF5B4TpNFbFAFP7uzPac9nJaJ2cnS8dgfdXP5UYCJ",
  "key26": "23smwGmB7aeR7ayZmb3QsFJnRkuqB5AeDz1eFpmFgXwiwnfFG3CGgaorS4V2n1kC2xvs7BqKmxebaeYRe3ASozz8",
  "key27": "GozYskDRnCkm8iGUe2WtWyyGTAfeFdsuNUFB2HaH5aFU6nxreaNqNgvuzZVC4X9g1SUf2uwLZPrc85u7jSoAc84",
  "key28": "2dRtWoB7fyd6nnnqYRy5Fsy32KWDzoyeC3QRVX4kRh6MDZP4uS9qTMTMstTSFgs9QRDBsAirQis2QgyxJHc4ebwN",
  "key29": "2LTUfp51z1V4bE9dLCPc9qknsa5Zbwe8VUbP8oxGdNEQFT4YwbrVzkSTi3PsCFU2Yb6w7LBYTP5MeYe8sBGMLvTu",
  "key30": "2BvDz7k5YPh89gtFTsrG69u5rxfqa2FwYfvRy7tNrfCXbstq9BqHft695NGZd5NfZMzMGbXrgiKtf7RPqfJHGmFh",
  "key31": "55WeoXNhNwcdjCmnNVEnHiaf2US3WKG4gESud7gHXtpKjF8f89sxpiC24ENZSyFFxaGDkrSccgEeeRL96dWS1awC",
  "key32": "ijtcaWGLuRbq8dPPNnmp6xg5XQjFA4DEWkXCK2QLbiwiXoHV5c3uSZm2FuUt7YK8rcmecDMrNjKaRh5sqd198Vd",
  "key33": "vitQzbAZL5hW6cRFQVmnM6codZsKN9WuKTpAL7ZAEvyHFuQPUhcaGNB16kT6QGQh9usG4VF6CpceqoUvn5Pb3xm",
  "key34": "2nENeh5kakaUnhM5ZSvTwWdwxRxZ6g5osk4mwyDdZAhQ54FkEwoZR2ZGdfXF7RDqBKjBXCqjTLCmprnj6v1mSM2U"
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
