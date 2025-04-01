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
    "5aHon6245774NuZGPzmfTEApFnPddEHqrv8uqnr3HB5DQ99jf2iL6bWDoiWR9xhfwyWexYewz4Dyqc7Y8pJmTSzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63zur4htRjXSvuxtANfLF5NwijCfeGYQedoy4gcaex7gHJHek2TzpYXmF57GEm1csu62P6Z1HugnVfPqRP4BsxbY",
  "key1": "2DjQkfTWobywdVFW4UTmUmaVA4wbFVig9RLW8paHZPqv2nT5otfAD5pGVpuAaJ4e3noAzoF2tadTBoKYHG8wnpxY",
  "key2": "2Y4UZEusZx47tek44drkzB7DSDK9VhyNLZkVuLPS9MjVgmai849E4XqCWBqAMFwtyMtBrAXGTF6LcfCx8vzakgRD",
  "key3": "3Qp11UEmPgrfxBrcLhKafCrLoKQLjitVL4DUoj33p563TPCP3zbFTdcAG1kqCxp5VVy4xSUaHhZkmc5JyW3G59eL",
  "key4": "2B8xB6n8wLs2BmTVaPHWEcM6pWahUuKTvB7fFdYeT3f1uvrqZRKTiRLZv6LE2KMrj5swjqbaKW31DhjAmunvoYAB",
  "key5": "DjQrXimHCg4E2r1QQ35vNrr56sVnn6mCiPzPSUnfpwZdShaDxx5BqoM5JUYnd86asDJW9oEZTnRPjxY5YVtE44q",
  "key6": "4pStQUu4wV32fmdZEiTqzPuaMavatoSm1qttBehjzw5dM9wcDum5CYPdwtJc3on2FPTPWbMjDf2KigECRU9Qk8BQ",
  "key7": "3Ab51VPXeBfKtG3GQuamosg5LvngsEe3ssQC89oE32zyx3P5sxLxgTPWTWDSxr3UWPkMqXgj4Pm512io6Lr7jDTM",
  "key8": "5x7ogQkoxYamabNGLy1qdwniyjigQTGiVTuq6kf289XSKFbwMru8CfTnBeQSinJ29mVDrKt4TGyCUdDYH3S99CCw",
  "key9": "25jgFubPnr6SkMfEihXLmfAZEQfAfi6s6AQscUZLSNoDXSynrm7KLa2UrDS35NvKTEm72YtKytv3FqV1kXW6gBmr",
  "key10": "5AdF6gcnZyPZDeCxyyLtNjSTwBcdsAvq4Wy8tShgSYuxzbaBBfaSZ2RfJ7VRjHoK1oX8hnNbzNirCkDpH9urDCyZ",
  "key11": "42S1RerWigY7dg973gRLB1L1fYwMxFtd2HxYTbEpjZGJMw4V5xWTpgsQyHxkR1Bb3cPM99bzQ4cRTMAw2cr5epHn",
  "key12": "3yGwXqvbjK3voPZHFVS4egMGfHmMJHcZQxas1d6d41rtme9LbUzZwY6Sms9wTwxgjQML74PPBXotzdxWsEYToThV",
  "key13": "2RBHzR6aVgb6TZyFF7LxKL88rq3iRF7jXZ1pDXu9XPW7wZ91DzVR7yShq21kYECrPqXi1izc7c1rCmEpprL15sYP",
  "key14": "3BYnce8rUSmG2aBKgTKz4YV4wJdr9nyupD4HdExafP5jL1Hh1uVJusTZ5fSKyzQE5U9X7Qp7KDKzVTKGSjPVGAag",
  "key15": "2Md1Wj7RBF9Pq9D2q4EUYd6prrBVbNe1aSTjqgG84fzJNEXhSqChgh2o5jCQUTtYYXWut6t43GPvigXkAYXgu7JN",
  "key16": "3sYfk7B3m3gxDYQM9xSXcN2HYDTXteLGAo8GaMwdBN3MwdMCybRL6q8m9yhXkX7iaF9KJGkNeknMZ52LjhfcGJ9U",
  "key17": "3VpL5xiNwJTQi3nstEK3zSi9fQCHuQMEzhZbDM5Jdj3VPephCjDNQojSj1QoAqLbrX8buj5YcGBgcyLXXVJpbMtx",
  "key18": "3rLSvaFGKwFV1nU8dAHfgVC7dB8EesxBUX3EHcyRJex7GwqUzq7QfgVtthkvviSg3XBY34UfQhvzJBqRG4kge6KR",
  "key19": "31o7eiJVxRtcoA4AFbpF9n2ZM58cQi3owwRgLH6SQrSwRRey6QPCgXx69LAujBHUTSRh2931CdmmFm9qLX3y8oSU",
  "key20": "34PgfKnwKxaNkR2coEw6uk7mM1eSeyW7skjpYpTq1mN29Lg9hNYWd6jxbsUb4xqsRaLkhxcXC1G8K3sM6gUoVuFK",
  "key21": "2SDZ1m1b5HfgbbxYhpuFuKZEksWwUGSvehbQnU5TDnHFXbZwbzSZp92AWVm6SgpkxRjMUB6vP5TAaPwj6o6xLV6M",
  "key22": "HTxKYaCmsbfKS94xt3eguV1mDAtVnvLxtH5YDGoPjFF8szFcTL5nY6Xj4tp6AnKJqrKXKPaJwLr2DFJXDU5s8Ji",
  "key23": "3HLsbnutHLvXNY62XuhZ7V8vzKBjTzoDv2q7MMLKXMB4BmPMbNvJrj7rcnz6kLubzEb2nB46dbutuEjvZ8ehMnQB",
  "key24": "jRvwXB1wyftbkTyrH3FP89GW3ohtzX3uaTN9QJ5xytNS5D4eDxi73mBHjXUsW15Bm5NRTnykRVxvk4tm5Qbca1u",
  "key25": "5NQSzMMGmT4w7MQhHcuFFBsguKEvHgtywC7WfS5tXr8gZXASXCjK3oZuobijupZvh2a3kdy84HvyYW1WuGFEokw1",
  "key26": "3WpKSouj9ixX2KUfXkJ7y6gYJhotTefDpY3qwGecdtRrUFryPTwjzDcQ3pragJ4KuTHK54ZXfSosqh39P5aw5doJ",
  "key27": "q5foDe9Xv35nFngvbMrX16g2LEoC4j9RqE4re121NTXh4Zw1E2Dy9XYtoP6WDcrkHV7ZYKtcoiygMwosziunif8",
  "key28": "Gpsw5rh67os2Nj5p2mBvommHJ3AR6FAXbyKxmxyGcPCuVKdv347ErjopqUVwXs4h1GgwYAq1jTv7JzszLSirTEH",
  "key29": "3LNouXkRcptkvzfmJHLxWhdTn9mDhd2q3Jsga6fXJjXoLDwcy4Qz2iQ66Y3KqsYTFVrSm9naDv3BB5V2PqpLoXk8",
  "key30": "7aFSmtoJ8HewJQzSBLeAJaqthioQhfymFqNyQKq5ULQn4wfrj6G1UuqQ5sejWt4AavB1thQfx5nNWP29BU4hkwg",
  "key31": "4LXeKtwhSCNjCqWAqQkGUPFKbwDWC4Hh8TdWxioSBJHVW8HXHdDJHMYDGbZxvqwSQe93sgHLj4XKEr7sjDHgyQqi",
  "key32": "32ppp5fwgEcg6kPKziJANfwypZKGa4yp1zP3HAWQoe84DXokNvc2b67GXe55jckMkBnAkdbhUpoYNQjkY4MZQeth",
  "key33": "5igcKK5cnrt1qEHYbciZHUedndauja9GbMMSXJMUrtL6LfYxAsfxHEp7ZhmhAMKoMjYsn79VWH6EF65g33HXQg3x",
  "key34": "2ZLy47kv3onL8bVWwcBoKAKpUSZxcK78qhkSwyvZP9Y2QfwZ7W2XhLfnwFH7DbPw558AW148njsPGW6yTvRamiJZ",
  "key35": "4c1zAjqPeNGXskLqQ3c7cSnDg4ePGT1yw26fwdU3J4EPFeeLjZ9YzECaBnA685mqtf3k6nXFSt9JSsnpdxvWRBWq",
  "key36": "2v1vScVpXpx84AiNjQAHpsaFaDU3HC8Vf9vm3ejqG2mGWrMw2b4uXQT8v9MQd58NGSSwL46FSqp8B1YtDMdLbZHc"
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
