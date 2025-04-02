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
    "2QyhZoqS14HuiKXCoEezFD8zuHQ22LFQMSjwJzrumFRd5mSyBZpJKpsP19YcevWcrokxfBEz17aa8APPaRPLCfLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TKrGPYfmpzb2HBKVdhtDWPdNZ6vyJhbQNotGF5fEKGJZqq4HXnMpbxje1n1H9xKh8CLEJvze2Bo2m8rJXjSZMhN",
  "key1": "Z11KGNZ8MY2ty2HPvoK5QDv43Fsvc1zvc91taHRPPYV1UPfufEijuzvTZ3divbFZZM3xnddhSMZ9Qc3E9ybL1ft",
  "key2": "2oTjsh9FyXgRgEKWh4fgoXswyCvW96LE6GQncYqmVuCghmFA145qoXu8z4fmHqQubbLgFZxCxrzbYP9KELjADjFA",
  "key3": "5qpYipsxV3557xgz16cv12kWPSc5Xii75PHyDe5NZuHC2JsySWBimCg71siAhQrC5fJGv3kLb6RMavdmCbBriwNq",
  "key4": "5dnkwtRR54uUAzG4ZXq78Av9GvBEVzhfqrKYiDYAAmpD8jv6dutR37n7X7vT1k7Rj6YDFbgsCmp928WZNBn5HGGT",
  "key5": "5V2euRPUDvfCu2vjt6XM1362k4J6unLaRJvXrzXNwM3cK8owydyWEzsHNc4yhU68jSuLXXBC6sgafjHKPe26Ac7r",
  "key6": "5G2LY7JtnSvsGHYWDHZUkwKqXgJgxEaJSKCqbhbGXrGbKs38ELY389cgwcXcbFFKX2TYhKnX4hvhe11aTr6hwuuf",
  "key7": "2Kt2dTq2PCi7meNDPoRSHWGkJ4QBqypDi8bHgvpsUfejsXTsuLJWLDtNqQfcGZNex1zLtBys4Shg8D7tNUg7vM7B",
  "key8": "4MqVgeHgweprz6rR3E1xR43JGLqVAXUTvo1QyJFafVf7FvYCpTfLv5QUoz4HHT6q1fhVC2EQGqFYi7Q7KDV4DsvA",
  "key9": "22VYXYFVRXo3RLdoEcpbkzrze2sqgac3Mo3EgiAq8P6zNHrDynewDxTbgPYrQfuF9CKVYpv54zpJQncELr639pjG",
  "key10": "21hJpq3RJs1sHVASs7ZEBs88CZKZT1aeYaSQwprDqDmczvodNoGnG3PaTGiMfejp8kbeydxG8ykGF2PYf67w3buG",
  "key11": "2B9ADPBsWVGMqTLd7TQEvhToXW96z11PhsMDubQToTs3kFzYRm6yBNkuXQdZHXz8YnRYSDGen1k42pHhbsUx5dCm",
  "key12": "5H3yCM2aEiYjTRCnWezuhKengCcuw2RddcyPhWdAkJFDfb9BT8bVhsuba52w4oh6DBpz1wt6iHARmGbuJuDqJNvw",
  "key13": "48JPJTCij9T5rbtr3mpP9nNbWjV47fYFwAHZ6tthPak2XscKzPGvQxtbeZZGV71UJsNc7FcyLrZmqkuJ6EcQKyST",
  "key14": "3a7nniUH6QUKTGg8QyozX3dFzc8cK781cZSNMob4BoJLKtdykCkFzSbiTCviNnCFdFuBYf3V8bS1wMfqfugG8ZXh",
  "key15": "3v7vg4M45gqSZgn31ienaMSFoguznfvWM2rhPkBirqP6GouqwPovRuyQ26PVK7xKU4LFvGv3usyexRWVxWqyfTFr",
  "key16": "2zuUcwuwPQvh5k7DbpAHLdNcd8C7HP6YDT1K2Hpc7hVGdLQKDcS8ZYd73Ewg5HUWhUVVfenvB9ht8dfYFfYTSm5z",
  "key17": "5tJTEUvQEFD9kFuZTkk3SyVjf5SPZ38Nn5VfRqzZ7YL6dCshVh8ZLgLynjnVyooisrT1gucYPGJWrvtJtKrNJq4J",
  "key18": "5nq3FmRG4higaj3h78EJoR2K7ynUebPFWrbJyfwfE1GLSTLUeD7E9ZDR7mgriJR8HhbPQJ9d2QQBsFjf6VZXa37a",
  "key19": "2xebfDCxFSLTEAnbYk9iQ3meR7RkEXbiE5PRc1jjK7bsfXn6NvCrsK1jFwPcmKS7Qat4d9w4cFoqSUpra7jsATHB",
  "key20": "4KMF29LAKm2JGjW2NYJwoYua8W8QSdWxCS72NDL5FQcuNMq9zviXnALNZtLNtBsiNDHHRTz7Pfo3kDdMpssQJBqa",
  "key21": "2hNF1fYaJhKC4UMUyQVjS1GnxcZNJj1NAKLU6WKhySwaoBpTAJB81rxQFAPCHY83SpX6tHizdUxNgN3zPtw1akud",
  "key22": "3jqrhQuhKUniTYRjsp52gRe6uJ5AXotB87Ysuxh4vKa66gUeXRtq3NN38vztb9QgFnpwAUrJSdr4a4fDPRy7govE",
  "key23": "5yZ7DCa7w8X4UGWifxpWUa1jyX9txtg1ksbiqvogGoj58B46TjxMYrZScDdEaXrK4ueqNnyRqkXn7X8brBcUsmkU",
  "key24": "KLT5fwcJFvhs6ahMjPjZMk8eqeaTqxozfH82d8VdUiK9Qn54RVCSHtt27XEFfKpPEx1rBuGFejwVMAUM9WpXpGy",
  "key25": "4pEUarZWcS5aT4kn6GXnbNKwNhEWmMrR9ePai1PkaPsf1ioFGb2hDuk7wmAmrXavA2oSC1RRVgLy3nGv5L3oabbL",
  "key26": "5tY4Aten2dHHLQcoccScqNe1Y8umJje722SFTsTx1nQaL9CWyuFxaHRW3ryXWGb2C4iLvGyTa4d2Wt74kQuazfgE",
  "key27": "39sUYwv6ZjHWVgGHWR8oiHPhWeq6e6uKAHv2W3BBPAaxKdAJX2QaGio1kb7AN13aqaJDukV6vmfCYi16daXUm9Cn",
  "key28": "2p2xME3BW7pdrsWckmZgyAUdUwhE9A27kwFVh6MiRp1QTfv295vDSbx7aiyAaQT8pT34njFUs9K3GwG5F4SZ99YK",
  "key29": "3aJfVU65UEuWDasoYeysUHkWFx4qRHFGCBTatLigZB3eRWbjqT3nZQNhAZPy4ndPkEUA88L9g1XTkKAARscUuGw6",
  "key30": "cFC6PjmfGDiQt79pTQr1SfoTTyMJBHoan1gV86rygNqL8thPvwXkRqmdm7vFHbWDHCP3XrEYf8UrNdgbXF3m2kq",
  "key31": "64ZV3RsT1GvjbtPVdaaHnsC1rxbwG3Zx81zqXKxwnbhLYxWkTJLbUVHopNYdLvEZkA38zjdDGRZxiQmqkycL3P74",
  "key32": "VSn1Tyi5cvvYCrRG3Sogm4Kt7ZkV7KdU4BBZM5doXbqgXFugZ2ksyyzCNP5W36QEUBcEUobsnVYJrR4YXQmkyh7"
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
