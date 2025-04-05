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
    "3RLBcWj5cm4aR6AWYxTMfgLrHbDY2bnA6Wp7vXYivW42TDZLPsQNpCzdAM2SksWii6Yrou5CwebcbsSztZKKUsCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SYAQicWPqUADQQwtsXj5XpvEZamQ7phwxg4kX97JSrEjVEDDCvK24HmP1cJiRMmZhZ56XvU3SvC8vSfKAMZzv77",
  "key1": "5tyus4x4XznoYqU1KRQFkteyXAbiP4N7mYRBDWsPNgpfV46GbAF45utnBCW9YCSyzi3HoRX438KgExPcc2nKP6Pc",
  "key2": "kfZ97ri29uq4o54TfA7zZEMHRKKdMXu94AFVCU5HFbzCUNkmETJjmQj8mFcyi9WmuDmopDKa5nkitcqFvwAM5vX",
  "key3": "2prticJJ4pAA58ThnE3wWzrxRDCRUfDxXj6W34dZvNiU8kUR6rRJCSYK2qGkbAUPwtVY2FPVGtgaY69pdmnX53mF",
  "key4": "1uhncyVMDcDbXhpN4NZiR9ZNP4BSYs9zTKQrStiQh5e3p4KBPP7FUuQH1ryprUBVWYoqgUhSBZuAD8teTdyhe8L",
  "key5": "2rsX1PrmMfaP6TSyyiqHkk9fevCxrKddSgZQq5gYnMdXbLAsQK6kE1RuAxWiBV5cEDPbvbtxgUkLnvMqUwDkv8n3",
  "key6": "4YahBp9yQbf2Dyye3R9K3jYAqPVzoEji9F8D6taC3TMoRh42pNLFN67RsrnVLQ1KYd8aTowjg23CdMjrRabekV1p",
  "key7": "2kzaaRT3SsBkjWc2KABYULBLgpn8xAEtbVz4sF7knSb6dVGHZ27VPvCF1aJaQaDuJZRaKBEKdxvunFBs92CXCHtX",
  "key8": "4StobMgDg57ZEGAsYrpg3rCJaVkXeEiK3mGHLcJfDBnhy1jMvV47fVhSMem87UefruoYzBcEwHW1RaAcMCE9MYFB",
  "key9": "4Jp8hvDvC1zqa97vjo3TPBBxJQmXbM4FwPy19P92YgESvKSbpTVpsEGn868Q6cGbtAWjbz9PCsozqQjDESRdFiBb",
  "key10": "2ZscsLrxDnYSowUohG1ZNhwLDg7F21ow9zqGNM2WwkpHS6r5i9NU6CSJhopyoX5cTU857PVrzwKDTsgP2wUMTnsC",
  "key11": "5RKMVfcDbG5ipW1cKWE7AKWBhKgf989kf5STD372roB8Gg5Eb89NrhZdWRujg5aLbdQvVibNvhfHMpzQYXoktWoC",
  "key12": "2GVmCF6NoRp9msuTZVCbDzunCVvy6xBfhJC5BTGDi6kk6peAK2XbPjSzzCEZU7gzvb5NRpZta5a7r7rzT6GnwwcP",
  "key13": "5TNCLZ4h1doWCn7HdFKYJ5dScQzDrMvWQBbmt3KMicNm9zRmQoVJpu4KqajAZpH9Upjbj8QRQyELQUGYYgrKXsmp",
  "key14": "4gt8podtvHt9sLQV5WWkgatLPoH4XrNaY9GmqrySK9ZQghMjXXA2sA9cCGShwAakXWdjUTRVUjUF7d8zyM8R2qp8",
  "key15": "4uekSE8v97sBTBoAbYAFa63b6YQJ9wfoRB9Yf8uqVATr51vpSe2w2J7vdmGvPaf2uv2gc8FUyP4TVieVJrHxEN2f",
  "key16": "66XUzYDxrJHN5bGibmXZ4Hd7jxPuug4Lu1r8Toe2m5kEgSfAfRjk9742UunVJ5P5rd3goL3r8c6ZR81QFRDVNBXb",
  "key17": "57HTUY1c9dFxLBkCZR21Egw3LR8mgZuFywhF3wNNpc9nf4MgT9EPrC872AKA2ka4se8g7n5G9wi7BGQHnSndvQnE",
  "key18": "4hBHi8hRoWA389Za5bCMTJY3chbnzb7eacKWRxAK42juejVkQEtL59Xb3jUMyivxmfpdPxuBD8NUjcbo7cBTyDJu",
  "key19": "5EnxxE6mpLFXzD4kwBFA2povGUwnXdf4gq8drcFtheKwm79jQwM62xutY4pqce6LLVXZArn9bR53Bq1p696FqC75",
  "key20": "oZrZZXzsb6qqjd3xsvWhyxZqpRtXeMFYBqhAsTiiSdATWvJx2dcy4KqEQbnGXj9sjtjSs22BHG4TJzn3ahzD5Rx",
  "key21": "33A4DQmMG8zxFFABo8Wr69MTC3py6dcGRW4vvaXrYyffEE7jJVvHsueuDzadGUe28eH9yDhKvrg721YAJbyckbWv",
  "key22": "5g7fXfxzjordFipgpGdYKatn6DAvQusPXvJKGbjXxiGikgqQ9ximhgkBRJGhk7Hy4UFmTYEhmkzQNwYuPqHoNTkB",
  "key23": "2rb7iHWjEVwuU1Zvx4jCDgScr4E3R1kzURFkBCwumx7bg7RAcYJZXL9L7BbLjyG7bg67un6n4cHeAy62jWAX3ubu",
  "key24": "54qV6RGgF4yjnm62M8WxExc2gq3e88GcWCTtwRRJpsnfBeKYDinXGk75VhggG7aG3q17qmZeRXro8qYiJgBUiuXn",
  "key25": "5RtALJ2269tiqUfSmVhLLbMZvtwhpR6qpASKiJUv1DbX7JptREVPjguxQRfFoT2cFe6EhAN65KfGetGT9yP8wKRJ",
  "key26": "5gRiYEmNy4kLV6aq7pdyRhvYtR8QXBjfVgn6A16AiKydDKvPqfoCdz7sb32moKLLHN6FXmDQf5Ga61wGrJC4rfsx",
  "key27": "53ivFhd8K5RRrZhfwgdBsJxTgaRVGMoMjuwgnV3rDH3cS4fP32fGgPqSZiFtWZ537wi1vaqbRh6q55bkJGxLCGim",
  "key28": "3n7JMjkBcvMRAQTohSSDr3z56nzubM9MLiSZnFKPAXjrAGqg6uxCiQENpTkUt4Wth7KkV9K7tkT3VtAaLKqRjKEx",
  "key29": "2NSruCgNVEJ9J9ekVmau4xfccRpEASpoDMYoMxC7Fzyshp6RmyNuiUAnHqdFGYdMNM8ZsDGT667TXY5cJaf8xJ3o",
  "key30": "ALCje98XK1mjghYFq1STbzr3bE28C66JsArmyrvzgayBfghzrAAtpYyZE2fcAVLbpiVXGZDyzr7xvaanpxs5fDP",
  "key31": "Dgo3QtSPseQGNr5McGtQqJWXxuDdaReS7QUpYai6gAMnEKeaZ5j8WwJxZruZgcXahMUvjBShyUYkzXDrbMNmski",
  "key32": "WqvpczpmVDvsyKyHXe236CotnPzbBWwamvBSxbnP2rnA9MbKwLo7HpZdKeJ1gxiyim4rx6RtvkddaHdjD411rrB",
  "key33": "4pyppvfHn6v7DVC4M1jx2TMBsNyNePpFEmq9HXWfjzRHBEABDAEBvhanK7KFYn73YiMsVwnshW9SawT1SbiwN6Dg",
  "key34": "21UhkPjqzLwfEjoUZwUufzQhJCEKVHAV1rUjy6xhymWymVpptjaRLQSeKoC41TwUGYD9YGqeGPcCQgFxmaz7kJVs",
  "key35": "3YsTXLPp5JDZN9VQqb2wFhvtPJZkTkX5eEXCCrPSyUDgpTPK86i6ohf3vntcWdUF6Q6WudW3JrY68rWyz5HvSGSU",
  "key36": "337Pwwc6GLbBe19bWQBXQ35kuobTUxUkqMfEtP1Xjnir9sq6eJWChLWob7chnd1hWGzU5Tx7ff5Wcj5uMZMXXRVf",
  "key37": "3QDBn93QDb8GY1jzgZhJQE7R1C9r1i9JNvFDMFkW3GSKQWEyMbo3pMEff65TjvzHZnMvGNXmFwekwqJKq639qHni",
  "key38": "rYYs7qEmdk9gM3gv4Cm3wsQPLpnJj3ehn5vbLwKvx7bQ6BMjr28qzU7tqqXZE5V9iyCswkWgq9RTRM5iyxYTT7y",
  "key39": "FcayGKERya23jybTrWKPWLSUQZe1JHvDKcJ7qgCAWbG5CJe4vN48E8wvagRjmhv5jmXy7bzcz2bAHThnApxZ9xU",
  "key40": "3x1njSnED6Qk2jsB3tZqcemqXQ8rkbWi8tj8yFPgGx8gbV43mo3qBxB2f4CEP5q1ZBRGNtizqew2iWFqmLqkPKaR"
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
