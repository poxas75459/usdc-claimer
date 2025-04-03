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
    "67NbCozShGFWKYrCrmCGpxdGZuzHnFZEhhXEjNKQxGQe8oNZscsnoTtAd3K6nZTXRS22oDJNznEW7qs4X5HMqUtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SuAwo2BCQFTckMQfnNvACrLNGvnBsaLXSzpb4gqPkWA94NQDYawVvqYYQZa89CB7nSBrcy4CQiXy3AX6Do4WYvo",
  "key1": "3qpTk3Lk78t3tTBLJHk5x8zRJB9WC9ynGoHTyyXbdhDXUbJoYuSmTkMd1MKRr1H3Mt1VrfEy6Ku3MneXmwYRPBfY",
  "key2": "WiYksPU6zogE8jXnvhFtVzC36m3EkzH7csvFShCedRYJuWVcduixR14pZy2LhmvmZgRnw1o67LguEZiKgp8NrAm",
  "key3": "5X1AXKbwdzhYb2Qtzqhv7ZYrVx7Ld6iaSsdjhW4f4DcYP3XXPBUcsqQ3SKL4zXZvAP5569NUkYxVBxYX3TZrvzVf",
  "key4": "UqsSMjVciTsBAAX2psafhFXVTFetLZBHQNwRRVnewU9Vqa8gd7DFiHNY81JPdRYhAV8CERvFqG5T4vNjUHuyZdH",
  "key5": "5Bi3hU1vDynAyudPwonxfghUhXzki6JXrtkCK6jKdoViTKGoACGRTKZRyqrciYnG1Ysv57wgjw2JG4ZFMaCacf2n",
  "key6": "2zTYsmdvicVYo2pmZ7s3YrPyiYUHL7DsVky2e3HbAAH679jVqHMr5gGrvPBszVzAbdWe1GivzcmDYjaZFCaZP5ev",
  "key7": "e7FNfgP2QE3FQvBw99vEC5qnxMKbeXLvvik9DFLYN59wbcnEU3NEB97SciHsZjNagwu2j5NEHXtfaEpWV3BHCDk",
  "key8": "2BS9ivU197yYcmeGr8FrRNnPDp6tK2P935m3C6w5aJDB4GfethS6ooi2VNAyEe34X7bQj4ncpSHD1ncWPsqi6NwH",
  "key9": "5SQArP4fDkb5e1tghtZCKxbMwAoSfNc2GyFw7GUhoHeNxMHqwV9HQFgWoomKnx1mgr7wv8xEMo2NG3pEPBfb6GcE",
  "key10": "QSrCg1pvbrdFyBitRwVQeic5pLNXD7uwfk7J9BQFcHdeCGbxknVtYqu6pcsLxJhuZpdZHJDPtKfi4LLnjH4wdHg",
  "key11": "wNenciqAzafBJ51r9zohgxMPcZ3nEYrZUUyXrZyT2rZdTmNS8NYJxCnEGtU1AWqkMabTf1xBHW3PqybN5vjwZ6C",
  "key12": "5PiSnKhtDpaGymbyoJRveFACaxy2NcTkeEACfwpEe3JVCozy8xXErZBark1jq6M1CNvHhvojGozDdhm52vByacvF",
  "key13": "LgJPRtV91K1KYJRjKJg9NqpxzwZ9RvcdHRGfWg3BpmkezrJmdk27zALQysgdkx7pETAEHUxrp5HtRnU6gqGDUT8",
  "key14": "5BWQ8eBgx2CZR3EWGXPLyhHPWGBup7rrRwKmwEQvxXkhaUDzaHFHCQuDGA7hPqPfSX3yrTNwcKRFWxhhsJNgc7EN",
  "key15": "2S7GahYU1i2d2GTeVY6J4wQAKUUMFbJLRYNDuY5mbb1ANDobzFc34d2VMqExoHGe8Hixda3ec13gY97KYwLaBCjV",
  "key16": "4hLgqHDjYFfTVEHUcMMuUnFXcQNkQvZvSb5epyvzbfsRPCjF2R7rh28juTTiACA6fPV1p4HTsGckB1zQECWhXTzr",
  "key17": "4UuBJH9Y3KPVkseXnTwnApMDPpqNudZxXYfwE3kVUKR1ErkYWPZqkEfwJZFGcVzAg4Am1EsSoLjfF5jBAXRFmxkq",
  "key18": "5GWbmaBzArjC8HxeU7oasNtDhYmKcUDX2K132iorx5nqyFgYVmDosg14XeWFwdudisrLWwN9C5Y7AmuSGfXNBWtL",
  "key19": "2jp7dL1vHmDcnRbpDSj4EXD83MmYFGPQqhzU9zKYaidRQNYNwMrQtyNRPwQkEtYJZmz89QbrmVQwaam2fUfYeLsN",
  "key20": "44MKKvVsDZuuHCyxUHnZP4XC4dNp9N3bnpF1oHE5Q2c2mkfvHJEUrT6dYUhExVPt191rS2EAJpeqrdezk3Eb6h3s",
  "key21": "gWRBzraqCnX6GbJnKJYq6Y6C3xP9TNcCM6m2u7ogaCDwSj37MgvtjdarhwgqoSQnX58VEk6EXFQEbzTo6DSnRXb",
  "key22": "4R3X31sARprpBifNKmnPw6vkfuQ4v1PE2FjEjQMC6itmmHFNudrkVPUxBgfrNhj5MvZWXSifdhSiXMamK6onCxyK",
  "key23": "2yTXQSAmktJWgHU2M2ac9hA5NeY718HY1gChwPP86hbqEUkPkbTxZy6pwsGJcazgxHGPj7nSjiQkd7radZjGw9fR",
  "key24": "3cLyi57JZaHgqmKfbo1uD58op6jysoHM6rqagXshe6DfAWkC1We38HULe1QSCjGegvHLTmkaxiqwiLNjSk8uHMpP",
  "key25": "42Zax678RWF7yum6vDJDqMyv7K9aQwN3bfiirGp8C9F53Uxm825rmRghMrkzkt5QmqfFyNCju56ezvDdd1i8m4Ff",
  "key26": "356HjXviUDDnPSDKnX8q3CSefkhD7oVudQUWRAQign9G1pacA6z5FSccQv4njWTXBLbKQvkwAaLfYSyJUidzMnjC",
  "key27": "2aH394GvxQT9i9zZNqbMfEXe8CBygnTwaaNS4uJC4RWJJf6KdpVsCzFBrpMkMK4mYftYmeVSptKwESCaLEHdtbyy",
  "key28": "3Fo7W6g1HxnHJ722VFLt4WMDMCymevHA5k9WjVJKb9jRWgF3c8B19LbPuLSCsVa3vtLBvhsuYzAYXcrwN7viSXxc",
  "key29": "3rXEitgNMFCvWwGwrDwB1g197hbFPX5t5Ju3KQk4e1d1AX19L3vsrb7kZGvGVs4NjTwuoa3uEumeaiKjYmFCyXyW",
  "key30": "2DgqgBuWgikriJvDKHZwe5ZhHGMEYH98YspcuiUS1pReRnc6fLdWJpjr1GYQydWiTS7gnhZy5VVG3L6i4BzL8WCT",
  "key31": "4Pkf7YnpRfExGnYzspFNBKXXZgETcvaUfo4oZcFyzyQNgWYqkNXUPjF6HUkno85CuJ7Ch84QuRgqNeKBrj8cHaSR",
  "key32": "5ax1RJ6vocR7Yc6UgKMnEXrLkWL3dB1Y4xEK6Zu6jVzcHzhyVYcYV3mdRYgvefNu5eZDVTnMcmwgcfmGCd7TJGnS",
  "key33": "55ssftRwnR9JU7buQr5XD7tHcPXQ79Y9NuhLKHZC1UQWzfLEawnieMiFDcWYQd5Wv4Mw8qxDFeniC8nHY4bfDvDc",
  "key34": "64rQy559DKbEk1ZCRSA1q2vEkMPCRwC9cTYAGUsryWdLexs87qRNEorNoN8MHHanNAaDSP7dnrvxgTNAXZPbKmPN",
  "key35": "x6oZ1MN5Pget1Q9WAAH5d9oDEQepv8VQneRLZXzKf5mrnvtuqnZ2G988jsexceQ212crSe4nD8FiK7JUAJgkMPb",
  "key36": "7WjW1exMaVWYVxm36nHtjPHGYGUsUg68sr3UzHCaPCbGAaeAGv3tqdvyfDbe59oKdaxRHxdwKFHk7PWJnzNWc1J",
  "key37": "4F3BFZHyFAffuBpi9kT88KxRNbVEJZX7j3BB5BvZTD5MiMLCkmVsxzYPgz7mLTAYXmFeK71baTWcrtHMQFk48qLx",
  "key38": "dr7AVo7ptPSfe5sfuwfymxJb3cJt8NzhNQaUw6YYVvj18GDjSEMuntKVAHSzWPfHZjLZrqkrCfuCSLoUTLkXNqV",
  "key39": "4WNRBEP6TZFfurzzHhz1FxngveXd3NKybjfFPkMxoP9H2DwYCX9VSnbKrHZGFjBBsTekPKrjzLLxyMr9vL7KhyV2",
  "key40": "4Y5dgXB2BCBFRKgcbfP9VZMnH5dSsAMHSKY9J9FtZFHf8GA1rJP8imCR4NQasrpwwf21vb1jEnuXJb1pQFoGwNyi",
  "key41": "2814X4Y4dqQcREvRAYa4HSddXBiojAH9epGLki7budPai5UfvcVAWiEr71pRFitiViPvDP26dgQCAC3LVT1pjGaF",
  "key42": "51s8BdCvVHPFBXoggJu1aovYMBBx2ZKffFDPeuFf1NzBXdw7WGHuBQtmm6y8RHrFJQAUoPH9tbvXVdpPfGvvDvyb",
  "key43": "5jE4YfvSNsiUkhLzfAEpHbo4CKMmR2izqGSviMkLjz93Gd7iC5DPwgFKDcGZRBULVNPK7aLjQbqB5MXHR7q89KAh",
  "key44": "5G2MVfNQVo8XGud7twZyjvPpE34xUptWon59dNEMhRp1RSmq66hqQqQeeoT8v4zMWN7WuPenrjT6emcGK53oSRjr",
  "key45": "2TXzp4c5amfRzahzQ5jtafKbAyMxwu3ZMRK62ajNXo8f1hNhqGrTfPJ2oUsUEvDad6EanhpKva6PsaBs6RLQmmaJ"
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
