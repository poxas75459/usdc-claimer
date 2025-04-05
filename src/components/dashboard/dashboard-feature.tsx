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
    "5ukMtELgAMmZPHMEh3zVeM783ZNzdcdEi5Ka3yghtzNFYmzEac2voLezXcMBMRkBPuKNFxy4LyujLgG9TDpzA9jt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iaNaeWvebjJHg46wyseAy3ueJ71KMWs8tT1Uv6gQKS4f8LoU6vGRqQMswofzroynRdsnZRXJSzv9nwSKNhW6sHY",
  "key1": "4xEHHi3FdN7zHiT24FmpgmjRCavejRoAk7GPfRbYpeUoFZTVnu3Gv6kaTcNUXTzjbP8h1Pf8XSkapuHc2fZyoSyw",
  "key2": "3KqYiV3BpZgW78GMpqwdHAvku8RRZ2i62bYhTRaTgDwjeseJrT2rVLW6G2FxC1zhZScAWU9FU4VjhnutTWqSE7Lw",
  "key3": "2P3VrjsPuNDgyFvn6sdiMJDa6N9V5iTsNRohwP2SLkMB4VpC5jzDXxW4u8Db4QcMvxPKrk5UzUt7vKrsXUWrmicG",
  "key4": "5okEhe1t2zWicPXBkYqFuLzkZU6XBjvVY7JXuTtAzq4neBHbuU9S1rsBHogotHGMVsZFrRSTjNSUDAQwSsTFCtJ2",
  "key5": "2gZSk1tZaTGGV1hKzoR89oi3tzzBRq8VyBqLptz2Zpq7grAomP7zPhviHHhYCuPXGVYgNB11aPn1eqbnBCKGZXJY",
  "key6": "4hCkCKDCJrzFMhrTeHKx99Tyi8z77XMFbPcgGEyNNZLDiMK3CJH4J7ge2Ww8okKrfvxCc7uHgvoY5DdHRCNEZe4t",
  "key7": "4Fdb717zoBnJ6jB592x3Hj2sytBdpQbCEP3Qe3G8nqwknhSGTe7T7Ygc6bWfPxVxDExg6EqA8P35wen6H4ywGPnL",
  "key8": "3vwASD93Cc66aDWRSSPDskqXiF59S9WiqtqA6jpRS2pbFna4S2CEsU7FHXDhLvCj2CHB3mhfAermUPF7QGB4usKH",
  "key9": "4XMznWsgpQtzPdtbAfB6jroGjois2V87fP2d6BiNTC874JDmAR2qbZ3xQmsa735evdVrYXT3P23XX3arDe5Jrf4n",
  "key10": "46Fomsxx5cm5EPegKrc4f1J5u7rPjoyE4PwjbFMeBGXnp8RKjf5Nd58jxBkcuq5h1new9yDausPnYpvWJkBPUdpY",
  "key11": "5MzoA8i71xjiPMFapKvLv7rNyVUdNmS3sF2ZzvAHdPYSmR9gcv1L8VzjGrv6d6dZyhk7woAYuGVJgbxwx5UKSsEz",
  "key12": "MEVcL7BTVg1scqoVDovmFcdbE8987vRskFEHDNSdM627QTVTQEMbnVkHHeybNvvLDe8p4ZDBRU41LPA7PXS4YcU",
  "key13": "4oa3LRW6YVPMe9fJLowwRn2PSEbxhwzct1AJuQDMouYSLLyeZrUpqJ3xzGHgUhGvp7YfKwa5WywheT3LgJyy6xaf",
  "key14": "5bt324a8zfFamzTYtvp8vpUQYu6AGBRSjwRMS5ko5VBK2aCZG6cBb5ym4qxG2oTWgTkiTrxZ7vGbqgHAQmfTy9R2",
  "key15": "1TXqxQHBBRSwm2YMR44VyQbjdzq2gE47knoSuTeM2r3frgPaFWfCP7922RaPqTwFuJuHEtrH6H55Xp6t53tognX",
  "key16": "zsyjWegexvJB1sX85YyWFrwPd833he6AwN3TApwVh3QDmqvGy1VVKvvNxScKLtnAUmoxGox9eh5vyVzJy3HTSPs",
  "key17": "4DtkDgTmo1r2MZXEQRNDgF9Bzvydn8tqD1J3XmNBWy99Xtps7B8yrPeBu8nXBb4aNND7ZhajvsqFm4GvHPXJSzew",
  "key18": "43ygMEUGLtG8TJvcGjssY8aHXzQ3M4U7aABFuGt84qivjnjmKTLoR3sqt9k7DHUyK9FDYkoi9i375W6djXyibYQR",
  "key19": "42NnHiiRCxGPkxpQtjrUL7cZV2mQiSeSYhpdvnJ9PoHhditmx7nxhR2CySSquyD9ZeMcrQjKMLpyCEhrWpemeTWg",
  "key20": "5h2huQpWsKX99Lz88ZAEAM5idDhrHiWTEgDG44bQy53LiP2UCBsw6kdiowCaztMyeGbSPqWV3izSNQ5rqrrc5exu",
  "key21": "7MUKbDhwnL8WffksrCU4nsbJa5HTLbEb4iGumV8FqyzMQvkCtB3fCfTj8FyNSLtjNp6rzVLNbzcTx6TFfp5T5kU",
  "key22": "2PNuxtEycZi3KjNqNGjDDnEPYQgCV4X1p5DBZD3Y6Gtj3tXpNAZbpbrmFanEDGFFPELTrxgA1ydTLup3Xq1K1QsN",
  "key23": "39wuoiirNLdDCFPm5d5a1ZKQXhwGymTJGvf2TJCoQFq3M38pmgEFRThcX6yNP7gyC9DFSYCHseNnNrDunHFpEhSA",
  "key24": "rMSv6SW6uMa72DxkgwDxmsciRgBqQiLQNUuUWyci31aM65LgMbTtFyV66MHCTXEfm2Uyq6JEMxRRet9JdFDeEGV",
  "key25": "5u8WfvjCXrFvj9Wt19tbRHagzaYoWRDek3TnDxNvfqfTzQtLWvLZQVDVVfAEuZcWXXqhZsb4xZrpJfnyLQ2B3CGw",
  "key26": "YsmFuiXVjsYUUMtogt36cxx8Ftfg9bLdiA36kLP43Kpa62FS4UUigDNTAYjwuf42UUpRoUmXSKcCLJEmRAB3iTK",
  "key27": "3Bv7Wqga4VaqPsKfUKbyR9EKEbiPmnCF7au8VE8HFFe9ADECA6MNfptWXWH8iMzQVSGwxAygjQr57tNv41DNswRA",
  "key28": "2S9xrd8ES3su2m9y8xKYc5ybZjNs7PvMf8DfC8HfaxAhQtcR9NTbG2Gdi9RqhkPvwhqrKydEcAopY39jp83qqCjn",
  "key29": "n93CpCLF2Xv9X6RHhWHjWKFcuc1gMVavQCoBK5ubkE8cbDXbu2g79jk6CfwisJXwxLLbDYg2Hk9txuChCA8iBts",
  "key30": "4o1iEm2WRZzsQTZaCNiLiUo6ekw3aFqmXvjAVfz52LSh1ukLDdeK2BeYF3fVfJrsZpjDKxcTWZKgee5mwgKhEWxB",
  "key31": "hsx6oExu9jmEMGDteMBQigKBxQQk8FJC4EPHN8fDJexaeTcpLfXWibsqWuKwE9tcJG4km1ZEmg3w9g7mShruhiJ",
  "key32": "21bKm8fK68Phrf8aMnSGN4ABvSST2JwVksnikERhB13rwrrZ3bdU8EfCQyuTdPhfLiMx7HTjzZ9bjXwgBujehjVb",
  "key33": "4cgBvP2aL4VNo84BaZLAUSw2ThHdtZsWMhypa7J5D44nJV9HDtdkxSa9EnqTfJucZAri4A4XjVjSHg4r3KRJgu5w",
  "key34": "25pfguT5HFeYuoTTwsiHLne66CE5ZJQ4wNRMZYv4hGvApirpEs6kDgNHUg3MZ7S7gQxSSExaGsXhdigTDKi2XeXS",
  "key35": "5KXTCibk9BEjQQz9WaKfK4wv2igZt5QmdRSQix99ndEwKH2MG6gudxNKJrr8DiTnY9JD9FezUUZkZLYW7po2nzue",
  "key36": "3j1HyWifH14xPw5XMh3CfemjvUW69mv8dH1R7tmaeHrLxXidEMgp1ysyswy1AYoAqhjFHRFXzAiVPVvfCRhN2Tup",
  "key37": "5B4BSgCmrfr1rPZGT5ATSLgUFFvqE9fw7zLuyoHuh6cBjdXvMCTU71DyDGBM8mFDSECdQKskH452GMGfnp2x7qZ4",
  "key38": "5XjpE6z7JTHCYcDehbMcpuXR7c6eEp78h7oU6gNsHzGpp4V5sTVUXo8i4ZMZM63visLhBWhgf45aHWbtZzLEKewH",
  "key39": "3F7Xj4DMvxV7eVoGp4voDV7C2j6MSCdJTKhfWiLMzoss7pZUUvzHo9ihpvuUYxnms6yXTCAHqZb4X5QrzEq34aig",
  "key40": "3QGwsJVcgPGJH5K8aKAtXaXGpPeQcgSCZceRiRV2GzrF3QzqL2jdJDmfLKp3MeedEMJNg7pvCEdnMEVLxcxmJRCj",
  "key41": "65M9bGPubjCKFbyYPhd33hXVMrhA3YzgFAj9pkbjqmvt2Jc3C5QKwXy3FEhKDgF8DepEwC81vea1KwzggteGXFH7"
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
