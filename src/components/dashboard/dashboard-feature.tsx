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
    "JnE1qEZvFKiPTrY9rd49iD7z3TeKaT3bHYVEu7FCeUQ5Ly2tBV6d8QTtiDeyHF25umVrnNMbbm9ApfvQXkG6DAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VcSEwhCkGM3fZg3ERRmUf5yJuAZSAF7MqpVnp1mCzUpmndwqdVobJxmootrqKduArTpfy1DZWx6CKBybDPuNuNu",
  "key1": "29KB77aWAtB34GX5ZN4nH4L1rBYKBaUvCAcW5Kdoa4tCQHVXT6d4ydCGHUBs5Mw9QpfPtGcwVRHDFh6u2kfgSWeX",
  "key2": "6D8npdzH3qHnmj1982cEEHg54uDmM4u24xPiMYdYwMRMD2CJXgzXi3r59pC5ekPVmxc5AWkFY9VQFceZ5GZc64V",
  "key3": "3NPrQRFsHVZ3BWjje4vtyLi7hN569kYejCZKGPdVSgh5VVKCukSsv9AQ4Qk7mviojc1F2rmyfdsRYDt6J8Qwa2xw",
  "key4": "5X9FjzpzLtEYKSRmSLgD7t5VdYPRnewUo9QuNp2G3ijpKpmvzUWDnzE6C8daMggqFZ6vr95wRYfyu8aUaTAnTRh8",
  "key5": "2dAFHPxoqxjMnddHdn6bEofKaXJKjU4Tqp1SycgM35zwALHZG97q3XteGxCo735RNck5MwDcmSFpsWsyS1apmafr",
  "key6": "mKyh9ZLWKAYRvuckUTsQN5vDAU9X9XPi3CWpbDpUGBPkCxpe2eCDhcKJkvZdFo7uGRJd5muFqVgPyM1PTaeoJS1",
  "key7": "3AjZmNVPZKsV2oupFnoR5Mq5NS3GagcFWnn6edetHHAqVMGPF12MUsGExQLD986k3HBn5YGa6bLukhWt4WRAkQy9",
  "key8": "ZGt5Bm1LXJKDr3mTKDHcVBszT3XKu6EyYzJTmJmMY8TLWeqcQPjcWydpZdJrTusYBg8YN6iwvD2HaocYEdiy3tf",
  "key9": "21AikiWx5ZnfQHYAzaPMZtP2AR6a8BocHquCPukvGgxCdTUjL2uaKqVmLza6pQ6VrceAPdL6Z5Aq8VSVx2QRXTQY",
  "key10": "35s8Be5pDteTBMChkAaNzcbp2tp6JZvJvpQD5wdMzmmWnfxZYdZxG28cVBrYq6PRbPATUYH412ExoBWESU28sUZw",
  "key11": "3zZ4u2nPTEMXY62RBGvdDmNd3P2DTj5Bv6o2gYgcu1nMQ2HwfBAueE2FbDMqbDcqv2ovNDJR4QBcaxp1a8icLBGC",
  "key12": "3TJwMVFuumNrUwA563xJaSvCiMgv7dn9GWCsGS9VPq8KEwqtK3jSX8j16hspbGm6gmbGpFnk1UbpDVDccd57mwkr",
  "key13": "2wHsQzDFPmfQRmKmTGAvVatjfxf6DZbJL6k8ZXoKAsobUdabu8E8J5J7xfMwm7EoTeNQmVdwpp3qita1er37fubU",
  "key14": "9a1cFz7DRhdiNhuZ6pTTJyX1aZZXo6LX518xMzLbfRjU3xbN9SNMKeU8CMPAytjS2AEQn29ApA7aXPLveKRoVRz",
  "key15": "38UYJbKZiRoe48PeBDrkCRGQozyPtPdV9psqPaUAj6pHYtN6bMnZKUjWqa6cPHAj2qfZP7hqm8qFX1hm5Xhfg245",
  "key16": "iB1UPxvusbf2wupFwCTgQcgyupdZ8LfuNGxGiZvBuj5GWJUMG2uDqVaLm3j7zE81kiwKnjNRkdSvBd6dpgpLQgR",
  "key17": "5GhFEBuzq95tqm4GavD1jPXh8Scpo1SZVdoSVqEjyngo23Z3rXif91SajcN6iUefQkB3Xj7EKFyBPYnNPiT42qUq",
  "key18": "5jkwwXNDqPU6jcjiyfYWktFYS9S1AgfRZa7dWdtz4Jmu7UYZZ99YdVZtDhx52iaFdH4zeZHXW1RPUdBUjwS7o6d7",
  "key19": "5TnTsfns2L3Earnm3MAsH6prGG8dRKAmfMJ5cFhVwpYnoRbUfDb1pwxH4DwyfJqHEtcsMLV2GY8vT9qLN84JtyCD",
  "key20": "499oBmhw1p3PYX37NiiYrkZD8jc362yM8jnvsvuHLZkBrvjoSSCVet6soAV7JG78RYQhgxK29s5tK95ayqN7Nykr",
  "key21": "5qKSkHkaR4FMCLuoGrKHpDwuWJs2UFpRf3GJVezXmUdpLiuunxJZkuSoaucoBZ2DTNuzkpd81ygdePrrgp7UkMJB",
  "key22": "56rRzxdKhE5Gvhx5YjHeGxXnyoTRdH8VTg6GbioZ3GE2WTVdXbpXcr3ppkUCCMVFLScJgBsCA4Dnay2pPRUv5Ynb",
  "key23": "5eeRL9VVvg3EaHhTaiNeCMC9AetHSzWTDHfD3bxAt7Dpji4HqhxHh1mnxLXPrJA1ckJdAXTZLBpt9FK9X1wmefwf",
  "key24": "3H83ThqJSg8sNE4iHGw9RRdkvmCcpabMrk2EUNhWqALa5vpnZZperjQivrifzv4SSZJzn7Vyrm11Qmf1iwjPpPcP",
  "key25": "4SWnNPQGjeB52Jd9N8Z91vG831c3k2zL95aS5VtU1aqUubnhsDQgP9p4XcHGYn3F1TjV2L55idD4NWMUwKkqm8D2",
  "key26": "3499iWtgHk2xxvyq9sQQwYzTkmMjnzkK2mefx7ZPQVWP4NgqsqPGDU29PAKJK3SgbvdJbtMuDyEfRMe1AqiSPT3V",
  "key27": "2Q7x1uk9qVSLpaaghxW8iBbnZ6fZKUQPVP3n1atQqZBbMQ3TFKQaYYxQFLvd8aN7dLR7o6CKV1v62mP7FyiUYCHi",
  "key28": "4qdcXSUmFLh7baoZBcm6ZRoRwiyRCSLyiA2U48MdEbg2ZFXTTbv282Fe1SWsEqqfgryVoQPrSTQ9YtTuZ4JSNdLv",
  "key29": "5dRoDxjFqqiJX1TVFMZ5m4oXK2haz3v53o8Eqan3S4tYEAXjHAhHypviA5P2YQLi2K8oF4crdkWJue5cBvU5tA1z",
  "key30": "5xGNdUCY9JcPWRZZpK81zyseoKWJ1LXdic9vhTX8VKwR6GuU1CYWNWPM2pnWy6TnciZCq1ghQ9JWN2JM6VP2v332",
  "key31": "2GxznTu9cqzvze4WrcMGYgxZo52yJLPtZjWCotzBP9AKckFjPZrVLXpVRgGg6ydaVTK7G98JeKMPs6VUsiERjMNM",
  "key32": "4pGM4iiF9QECVNEdWA4vAfvPCbNCsBm6a53UjugAgvs9G7tc8U3oqHYJozfUQbKEGqrfHDDU2q6f9Mr51rUeqapA",
  "key33": "2ZdvNQgUVYM1Y6J2HtbzXot24whUGC6hrJRw12pu9SXE8Wc8bkUVnh44d1wn74v2bzH4VBk2XNrvD1xA6hjXtVj3",
  "key34": "3hPXtJU9yJG8PoFJzomF9F7ycC6KKDQbzQy76bKo7K8PpDHa1CLaobS8osTgnqXKmDpmSg2zLGV9aMrTxnhDDJtV",
  "key35": "5k2xs6b6Jgw3f1b41112UpnUFj1dMC6Kb3RE3y1jjSiyKhAiWqmfR8z1NHhpVVgbmzA14H8bzc3QMKAQ8qB2Mg7X",
  "key36": "BJ5MioW4zZjvQ2i3NAW3mv44F7xifxuXaWSMYqcuGXSzfP5mrDMiyPgx4g6Dbqyr2cfU6sk2S5Z8EqvvmuMSbjG"
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
