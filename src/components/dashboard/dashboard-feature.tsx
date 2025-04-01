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
    "7qWnifZDjBigudKBUUiw8WhtZbDEL18zkahS4d1LC1JjmdF7YmN8CCsdRWgABSty7U88HpBFDy21tmhsPBBBJD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48duyGhFdRtp2TrvHAa6BzYGe3ftDT88xKLp16XQ2Gn9hUTDQmnnwbAYm24QBMiyHU9VwME5Ukz1ssB6gNWAp5ev",
  "key1": "4d239G31pHcm9X6KmF428cHH3NmLGMPi2HRqhjGvRg2uxqNvKUspKVKQRJ5nsVwehHBwcfTqcSjfKbLEWRV4pJDr",
  "key2": "4JhNTPS8pUjAPCUZrMSM61qH2mTxj8VwETj6haxScD9CeQ3D5EjD2w9G666KgHeNSCFcyVJjLUWaBRyd1qQ6WB4x",
  "key3": "2uEdSu9oSTDztsAmY1bYxEcPFHGkZ8S9BNQKspkgtXUXZMYhu45FZb7e4GRw4F1VqrnBHiiUhKFPmxtS1kVmG6dS",
  "key4": "3DidSdhRAFyXQsZyXRvhY7cCSkjsrZhYYV5fGCB8kGvxPZPEzwqERxxo1fyecn8UEavoAmzfe8CuWGc3qWscrmN1",
  "key5": "3NEAojpbaSku11NBsBT9pKvaSqi1pGTGiKE9sgxUoQGaxVnLkDaf3Gpm7pFzgpR34WZGTTNKWj56yQiAKGP4YCRB",
  "key6": "3QEWZwAivjhwudBntQq9MejtnokXmM47QNwXApivszSgQ9xNpKSLZh1Q9CjvLsMHEad5gDUHSA35tadCLtW5YHJa",
  "key7": "32kGb4x7q3PVFHCAaz1McTEyazJzKv6WTQyDrpMDj96QgUk63SF7e49pTEDiFgvzQASZ2gzpMUN3PMbAKf2BpZNp",
  "key8": "3XrxFGwUbmS7p4vhitbRquixSVvNH5Ty898wASYv8vjTNmpz7xdMdUaJxkQ66kh2hdSuQ4s4ZwenYZ68amizf1Av",
  "key9": "owmMZHRPaHf3BvGUUE8xq2Dh2nh87tGoyWfGyTaS3Cj6FPXPLgfSECEz8ZXXEN5oEDTYyfbuJf4ymf2N6ivobu5",
  "key10": "2i4KkvLwvBzwmv1VZfNcdNesLZ5k17ukFdf8o5MSoHqTYybcrFo6Wh5nPvgUdwDmaBt3K2jbmVgM4heg3iu4i4LH",
  "key11": "39Dr1CyLSoj4aFjRUUnyme2SKwkF43S7NYf27VJQnNKK5o22n1LWx82UHWnCygRe8fbkv4HPrWuXrTQdeocNzghQ",
  "key12": "2qTAz2SwEWPoHiQx1nWrz4f3ph9WGTKCaVtHMsLwBwciyi3qJwEgbb3t6PTtTacGmSkgdBiUnyRoCoAyuwe1iXL6",
  "key13": "Z3QC1aLvqeK24gavEbXbsnqVyAzUWFWfHjqc6XDLHR5FAs12f1REWhX5289pvJ6MQRJoHzt6qQx6w11iHFbaNEY",
  "key14": "2nRBDs4R9hvNYb1wqs9T4tB5vhe3HDYs48TUuLUqz941cYrQgNAZNbs48H3NQhTxTLAfR5hPAQf5w9ZhsKSRh1Uy",
  "key15": "5NAvhCfvqk47sHam5WsAPaGUti7oeqBeUCEjHcruv1Hk7Cy95CHxR9z8goiH5scWxGrtTjg6A75NWCoDsyCAzxfn",
  "key16": "Py54iyCiQ9dY851NRSGwDk8tko69c37LwgwCMDbcGa3eqmJPy9JpU5geJqmHfFVFJWZZ9ZWJbeFfq4vDJmz1bgv",
  "key17": "4JD59rDK6pnv7PYFhE2qosHymUH1SrsbnQ5f7yD3VNjAs5ZoBXCUNqqwREqQakUHH15Xywe4ytQjuTcCvGaDKg6b",
  "key18": "4mMsHoSjGdMbMi2GUqNguWYzHCDV3jaDogaX4faVniySwAz4uUeoHeAsJUsdojt4VhtzPidgNTuAKZKxbwCZdV7R",
  "key19": "TphqyMeX9vWik1b1Y8f1DNVZJkCpoknrpbNj4VSDTzNSMAWoEW9bxn8rYngf2eNxKq7PQZEhrcCEvymxi4fQFWA",
  "key20": "3yhb9ZbPeqyXW2NKetnZZ7r2N7L6cWLKTqAh5N91fWkQJzV8DnuFJzGz4QwRbftZxqWAcLAR6jdNooJD8KDY12yB",
  "key21": "3Tpa8ktHgeuVNRKT8cHckjs6QADFodDTQLMrLjTNsiTgGAd9cJtsQewGU3o8jwEecEuK6fZz9rbnVCndCo4tABNd",
  "key22": "8b7DkvDmVLC3fPSSzwrMtKdwDM4nGE7WuyEw8ExyHyWQSsKdp9M9DsNNVe3reiB5cz67y4TGPtrihWK39agV8mv",
  "key23": "3rT5CrCWTE9i2SZgcrrB7RKKVvu6MGWFMTL1BGigGJpXyXXGNjTHs4mk6FJxTSVA6g1ctGodCeCvvbJJbXUwpsJk",
  "key24": "5hqWEYvKSeHK49VRy55hfiXALRJuFjSbpYQNvsszRf9nptUCWFrqucmxx2D9jBei8wGhkmdDjwF39C5UQcDsBef3",
  "key25": "58jWyggBKmNxb5YS28kVNb3kcmhQkgzvucHQMkcrAWKYhjxMRKwqP8CV1AUe9N5U7RuMxZHgqjj2HY2onEtYEwCy"
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
