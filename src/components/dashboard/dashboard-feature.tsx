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
    "5oRSswfALWQTx3RtAT17CE79uFeghX2vvj43VqVa5KjkEkZeCaHWJXQxnekuSTA2zr88kTbZWmBJdSFHC8PDg5W9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54VoeJqGjBZNFJazMhDB3NuwEv5TUN7jivkJxDewekGokuVZFn2Ymeoe19ZFxz2AWeYofdgJhCbAAh5qNNeEm9L4",
  "key1": "xEK5sMnTZf6WnB6jNmd77XDPctdRXSL9NcKdPeVVhcvVVSw9FYKhWvq2uTrAPX23SjfX29thb5mWU8UDrig4MJR",
  "key2": "2yGZdJLxsKbocyyLZzM37zW2oxfpiEqvdZCyqh56XYssordRS4Pz26Z4NtGiswyW9znVDQovn3dJJYwbTW7wCxX2",
  "key3": "3KF8okb53oJp2R1fFne54btuxeAdH5SQKWj6sLk42NfTjzf78rvHytSpwtzZWLLtZCzzoXxPsgcqNYWhKPg3RW53",
  "key4": "5cuddhUyCrbnDiqt8ePJGyCTKWDWRdcFumFXNrb9Q96bpjgDkqTFqvHCgUnEFcCtxY7feMK29MBDYEcDer6yFNvU",
  "key5": "5hTGredhwMZEYPrbyWsNJebDn749ohzKvAbeXDmdcL7ZgD5NXj7mpb1N9ZocwFhBowzccLnWziQFoM4d1rGQ2gX2",
  "key6": "56XLgTLiASo4QUZmfFo2wPpCyGYg45c7vYMoMvFoLpNVMbwzDDHierRjQMZoU56VCC3d4HhzU6Ti3cYBvPAAMGhu",
  "key7": "4gu5qooF43vpEP62vpXjYHuSp3dprnpUWaq9Td4scPvgrM3myUDmB67f8Wpsk2tEtMTnWgJBbQL6jYQMsbMEeb7h",
  "key8": "32fJrt9nR4vsHuV7tUECZsXtv7AnaofDT79VmJCY9KCZ2p3CDEdXERNiU9PrjkKwftt4rfrqP7fLap3GAPT1VJfK",
  "key9": "4hDwPfXZjYjTKCwxxcoiUX21rTSRFx17nn4b5AaUtCRCQkoWzRWAyAavYHQukjuuYfMcBjpcQqWeZjzf9yEfvCoa",
  "key10": "3rectyXQTBpAfXAcwNitvM5R7tb5s6fcyLB8Lr7NBMEjmtaHVrHNgmLUedtzMjmzS6cbbqGVoBPAMenXgZRAe33h",
  "key11": "22eWWYqbUMLWeHEGSuQDKDmu1gAmqiQxPn3AWMzmLKT7kMeaFGEgjfd8HoozuptxH3EPFWKJX7vVvKDwwSeA8Vua",
  "key12": "xcSUQYy3Tn9pyZfha6GH3hVavLwJm5Lp8r5xeUQjozY8aYmMbTG2kqh5QLyYoq39pKv5DpKuCT4kCPyTLtpSh23",
  "key13": "JixaqvefwDDPn1tr5QS7dGVFYpdCEnXA8f62gMthBu8haCs6X5QffL2RtpUjpzPN2D6bo76ccmRs2qbEbBgTj8K",
  "key14": "48CipoLsUeoatZbHTQRbcbhDKxx6ZfHQ1MHxBfAqJkEBmL53qJ7Yh4dUyPqoEeKkBKb9tksDbtLiyRMav9AeCHAu",
  "key15": "4tTMAcBLRikWVmfsCoPosHUhw2ECCGkPjZMMK8ZUMFTWeivUWEvpbPG2eMpCT1RPAXWEVo34guMk4sbLNJn43WE3",
  "key16": "3CGAy3KpD5U2HNcmD7KGd9nocUNd7oyTaqMXhKzFBUYJh31vMP3ozYPrHggiAYbD6Yp4wwKoAHiqdL5ymp5joq7t",
  "key17": "3nUo2kVitY3ZxJvTJi7Fxhz2qMNE4sxUuCriZGRmxMB5P9HMK5st9QtCVwj8WucrogagfVTffMAxpYcCm3yfQ2ij",
  "key18": "4cwoq6xPN2aSnhGjSuSYmkJAGdNTfQgNakcZkeBytxi4XV89JmkAjDJGzJ4Ke5oqMRLFxAQo6iAYXBxF9wQyTfon",
  "key19": "43JbfByBsk7xEzwPzVp99NGhqqiSyHEYRBzYJFRtZouWSURQaHusJ5YbwjNsa6cZk4Ex8Yqt7gQWQmMY6ntxu3sQ",
  "key20": "2G7FFfViq5ErZsnjeXDnUaz2ZYX6DRawajYmCHLxcii2ioVG6s4W9maNzpkTBW466Bp5kQpM3XQfSMtuw8LnM4wY",
  "key21": "1fVUjTvdvnaoUgHJaXV8snBcGLWq1nQZuETZ9TemXPFKnJ3rsqwpgBsvaGWdW3CX5s3ZdfxZFAYYiEMcgEJPRRk",
  "key22": "3LJ644j52PF4YMHwiKe8AdfKwoys3fwMzDg4NHr2j5AAJLQqiiiKugkgFoYtvGFy5Z3pJc99usPi4EpmUi36LNwm",
  "key23": "5PURLY6EYtUL3Xz2DQaccdspCzWNTstmnMAjs1vKSQNuEUA9sHnqegNdVw1wFCTU5Vy4tPqs4yK56yDtsjHs5ypj",
  "key24": "2vXSBpLvJuE2vDUUaeeSdsKQuSSAxzoVBN6joFf8bgoncjERNoXsm3YT5gAnhKpsVw4Nek6jGNdTVApriL4Ek9xy",
  "key25": "4U9Yj3MdrLZbdgTg1ry8x7Xi1WyFifXZBbqBKmC5aNDZfcY73KxQrUTXUB2QQA7fBHhihqXCrhGWWS8XtGTanxHZ",
  "key26": "26GDLsLy7HkhDuTwpxabpjnAY5N45591yK8sXqPtGiTz56APX7xh8JJjQquPaR2txRjkNkKjyaTi5hKWEZZnZVwg",
  "key27": "5FZvtwUYBo79NGesCkRJasjYp7hz7zjDZdX8zuKJYnMYc1spsParampWBtg22t4tw5xTFg1xXKngbwyinm8qCNXJ",
  "key28": "ea9eeNBJo1pLmRLaWrPZvTy4oqwFBq1fbX4RDpa2xXLHV7FD6VrTpa26xsT4DL5JKzvURddXdiCAXgEuvSsPH1r"
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
