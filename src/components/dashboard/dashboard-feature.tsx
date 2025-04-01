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
    "4PaBEFXuYo9CXpVzRwsmVkThANf1moVVmWMDesbEJ39mR85mT5fhB9hbB2zohiUrKebD7D5UWvMjyg36QvcY7t4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yfW37CvmnhTrqWmP8BNuBmHvyuNxMDgdeM6zgqL84dsW2EVpANWMgmBZ9LvZZRJKgXBDBP84PNnW1qYaMpdQVRj",
  "key1": "5PyhP27ZGYKQYcPE5nTm35imYv8GjqhuApE1B7bXoUPfuCCr9kQeGMUps2Tyz5Cmri1jxp7jATY6B2HAUPGRT4EN",
  "key2": "4LmC5jTTDCdRHKqermDEHJqwg6sbXphoMBx2nNp5tMfCV5H1A7GRqce58bhGWwUBStH9LtPKhauV2quskHMaSnip",
  "key3": "3ftzkeSibsm6XH4tn3FTkuPfZUwecTZAF9cYyoiM2LwR2ZEsYTnxhwQr8zF6nFGURdGjP3NsGyBya8HcwkaHsX6n",
  "key4": "5F2C61mnuNN16A6Yb6Zwv5rXuHrcpZnTT21u5bw2vUshtSS3afjDymbNDtvU1VzDrphvgZVGDFCTyZ5bwY7JLut1",
  "key5": "43sCy5aQ75GpMVMDJZq6qZLrdueHoHZL319yACkBqVF2hb9jQbm3uo2e6kTrWqGbkWVTFoXJ5xG5ycER3xinDqxS",
  "key6": "4DBsKmUWC7SDmGXkU8ihGMXo2tHNreeshFgafaBu2MbZtKzpyZUZE2Ukxpm4o3pVcp6HaAj2fHDV27tE2HPe12dj",
  "key7": "4BATwKzB3AnRreDPQ9ZViBdKkkVSoH5as6g8gzrUF3xErJAjHge3A95VcoSsY7B3xWWf5wcpXz7DhDutNKULxipY",
  "key8": "4S4FwfQf4HkVM2PFxA1rX9r9akSYeDz59QcdmRcEpyq3pnbGRcAya5HGAv5hxeiuXnSBz7DtzLXe17ANqiPXV4Ld",
  "key9": "55duYfxcADJ4bGr3Sh244XQNA2B7HC7LpwjaaxBdrzYA8458jSkwMnyat2MKFm144ZH6CUBrs6ZjVnnNt9eW1M2g",
  "key10": "2rfPg3x3Eo6x62gmmf8GuDHPULVQw7qQvdoKE9mMs9aVAzSL2RqbPzj6g9VDvvKKDbjFX3o95zqcUTqrQoReqdvQ",
  "key11": "5MCGTGysCBgt7LnqTDemaM76rie7wd7WeehQ3Wk1AYhA9Vtk5nYo9EqbaQQ8bM82e8kFKxVvXvFAb2G3JwjJfrQ2",
  "key12": "pw6kuX7Jpev7bToJrMdMq6G8KzJwMtXJebEqUG8x3nc7x7eRPTTgvPJRTFrgqEFAN3DTbAc9VUAZuZyR4p4QkaR",
  "key13": "3uC8vi1QPLy1ubQbbwM9b5EcfbTfycLqYC7GTcZYJgMbkHUwFzvh8igGv32TixzJxhoAfB2ibqXGDpYyEsZawdCU",
  "key14": "4Xr1k4QZBbiwN4yfGHYPXc5k2UBKL6oZb7AcbvBXUSs1BN443YoZdzt9pEzu4qXGgN8SHFiiAXUnUCgG7KbqLw9T",
  "key15": "5hMiop525L6YBL2AUCEBUGYJmLjH1nrbVTxQ3az3EmE4ywQ8XuEgCLPbriSxLAQ7ykHoqXxjD9NcY1XgbMwFhUi6",
  "key16": "28jz9ytMfdPeJgncFGUA43gzK1BDF4v4CBSHeVEu73hBSPJeeHm7qDkgNajjQfwQ13XiHb5H7yWjH961jJ8PXpvg",
  "key17": "vw5riJwL41MiEDeQK7fkTi9xujaZc9Fx8hKm3Uekwa8brX3fc4hW2LiTJPdHZbC8c7rQEvth5G3nVq1YuHNVXwD",
  "key18": "5qmtt8cir8bCxUBiqRqkJekhVhfbpGfX9a17NJ5mrNUePoH88GrshrynDPQob6FEVgyfpymFtwPmbWaCnHPR5gnB",
  "key19": "3r8fvKkK3aY6nRdnnGSxYyr5pRQcdHxLE4d1FxSwCCZQLuGcDdm8kXHuYELsnWvkrCn9QuAdPmeRUq4Q9hyvQTBZ",
  "key20": "4cTQoGoJbANXsLXgXwst8hwM9Vu1gYwj9sUbSGPJvPqTJ3NHRbT532nU6PMtX1zsm8w57jQa9jzm5YJgD3nzyqTR",
  "key21": "2gKZJYzDqdLvPmyVMkMGhRPbK25RXV5Rmn7aV3pjpEegL3Z6mx5xVgwM4qpoogaoxGpyf9CaavmXz9AzyxihQnyu",
  "key22": "467N6tJxMM3w4cpJoiEBDvt3XRRiBadQ8BNqtSpSjJjrm8FTxPC4tN38pzVsB4gaQ4CTqwueAew61Sc2YmKCAegd",
  "key23": "3qgB9Gzvp7mxjg2F5hiVspWBwmmH6LjTtttSxafgKKTNEAomtrWtdk5iMEB5rAeQvDtuXxDFMQQjmp2wDynSP9JV",
  "key24": "QPnqCiup9PdQitXmntR6ZteqoKqCLDE6JMGTXj3HbbSPfkSHwqSG42fNj415LXZSVPdyfsdpW3z8UPNGiZe6cAY",
  "key25": "43VFM6rU3ei7HckaSGnBqnJLcCiWvbh6J6JA1RkVuLre3UC9mVurp3cKGCrcmyXiRKPjjntH1cmmFLBiR2DoM5h2",
  "key26": "B2hpM1JgYKYrSVbKD7UMLZeXe2pmMFeKQwKNzXRrAgP956phEVbrNniVpaSZW1ghinpre41AvKGf9PWRDgCZYUL",
  "key27": "3ByJzN9fgW4hg7Maj6KpWQyqh8A27jhkggLwRjmdvxrkcZZqTXGdDXtHbC5PmdyfAPgqraGQ1exiszsyk4f9TEu9",
  "key28": "44R4W1d8wuzrNJwKX7fWiTQvjnrvLUbogxqvZ8SN9ofQKobdrf6bxuhM5dDbLu6x8koNqo8oN3aBxnNAwYjf4uDC",
  "key29": "Qxu9bpNmaY3zyvAtUp7Bod4dseTEJFkteqb9jem1L18dakugnmZ1UN4gKj1Gzo2hGVDyGaigoRHaR9v5vdvvDXX",
  "key30": "2rtseBs99gd1zbTTrKX2CxbEVtTwkKdGDZu64zfAVSmjvHJDxSE3p3RuxGMu3VhGorx1nHH3jiusytHVE3rnFEBd",
  "key31": "5Kdk5LXbcLTpBSbj26F39xJriEEVY8DLw8U4Xh831ykwKZmp33K43ubgVokrGz7GrVjkjukWg4AJogLB6H1bfh5",
  "key32": "jrJTtog93Rf4q4EX5FWemTXuPmSjaqnyinvUZx8d3bjq9k4sSK7bg8tztF9WmVhMLynL7FBWDj7aKAW8BAc5wM3",
  "key33": "4GVdcGYGZT4muTz6KSr9TLxBDBr8S5cZ1zVBaME3Y9NsngW4qHt6EKnhdh5i8sasijdimZDBE1sA88eMF1tsFHHV",
  "key34": "5PR7MMu9j11GexRishotCgyzk438C3XCuFmgsPsSMvQJWvRCbdqnmptuS8wJwSPBrc7UiJ3bQHFm9mRQAEMX1Tkm",
  "key35": "4DH6U7SmdjgswL9ZqNyG5YdSD6WJfCqw3MTbBFakfx68bvL5N8oUDfFR9Vg777EArKjrUugT2mUfXprKiYTeAjRQ"
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
