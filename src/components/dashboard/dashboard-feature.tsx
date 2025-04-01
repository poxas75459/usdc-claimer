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
    "61WLQFyNmMzmmz2v7dSPCsQvqjx3yzhuisLwhiYt2sWGNSbsD6B1t2yRVcR5u97hH7RttNn72FeKwJg2ZsfxRv3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i4CMtYNsbxf1uasvEtEqoUuBWoPqyGf4zdXeUT8pJgdUZBMwuEnP3PwaMmwoTNxVqonVSJX1kQT4JRJcs93yJLH",
  "key1": "2RewCuni6zNBpjPZE6941ZcezunXx7CWX4fih3CYjXXkCMKLerq6Mj1Kt3WNuvae7fzrZ36UBqgV9ZdhvzfMbx9k",
  "key2": "jW8BeMTTFvg2EiUM5Ddyz6Y12i7w4dnAQZZQbNViiC4FQJhW57f96aVgQU3duzh6phB6sk6N2g1fAZip7EYHZN7",
  "key3": "5X7dgBoKoQMnE6xV35u7nG2McREGZddRorehTvaSbsXbJR35esspi9Noi9VszLCf7gHFbEYASvGgzmGBsFh3yMQE",
  "key4": "3xDLCWXLs385kTstoGfGo5t8sG3LqjobCP5HTiV64Zm6uM7cejmtMvcKVn2x1qCHGADs8gwqGFHQdCKGycXREHMo",
  "key5": "3JrUyZcF7mXq9nMhkoyxnFPfzqc7EgqXzvbFJBUYRdeWGrybAnrvfNXNVirzj5mx9fk78baf9AVSNTXNNTzoAXci",
  "key6": "34U3GPasYxDmwkJ2XET8e1myCjg9gSusp8NJ9YibjUVxvzSGiEH8kUHubWPBXYFm6qPiEAS33ZYQ7WhdCs6yofin",
  "key7": "5T7BemQ7oPWVDuF62o5CnHK3zxyea3G7dppLkaELprt4VwhP83ie9qPSKivy67KuEuFyqh4mPMpid6SrKtYzbHG8",
  "key8": "3aahupmFQbpQD4mUa4Scjx8WWBWyJJv9FspnY8FBkrkpEEXuidXC27LGUrddgJoXFouZhN5aFoXa4kLZnpiskYLf",
  "key9": "4iZ2Tn4ivHgQ4KnHEgAVfrrVw7rnD5N55omUbaGboNEt1sCehQ74XjmphYAVrp2ucq6kPfv456wXQUQRyarpKhF4",
  "key10": "48iiS6AwHwvVZPYZVajWXS4u1mQQG5kHmuk86AKgamSTDDwP5JMx55rf1j7r1j7eyGGNoZhwNZJ542Dfn9UyBYbK",
  "key11": "3oUDeFCkVe88Zbjw9hm7z9bpkFjjG3srhTPaShqpvFcQHxhC7R8kfaodjjmPUTBXuNVonUPdk8oeBZTyRnGYn1KH",
  "key12": "DzaowGEpSTkU1HwZGWmJQ1YsU5YEDcqzoiKo4wd6cNMs6zHduFYcVuijraV9czy1w9S3b6iQ3A9ziF54ZB1YWNK",
  "key13": "3fLWZ5p1waDsY7tx1jPiiGXg2ofbgkhm4DrxBHX4idwR8v7me856N7paGM8yxDyc1wwnqaem3sKJkd4hdxAmvqxv",
  "key14": "3bKCKPet6kPyf8F3AgjZjGRuDugfZoVFfq1CFFE3gzgZ4AJReASQ874h8H3u7HdqF1xf2xb3ZbFnWodwqGEkg2TD",
  "key15": "55at5cs1G27k4ZTJd2YgnvAa6ouqsn6ZAyuW78qbkykG4R7oPiZJ9Sqxadjjb3hfCakoFA2cpq462bQhDw4wQZWo",
  "key16": "P5Aq2kn6ezikNXJye5i9Mdpjm886tjGZu28M1dckS4gPpeqBLLbqFBVJqJyZbNM1DqWsTRbZa7BHnRqekJrY7Lq",
  "key17": "3xbEgcnxDAvmKGuZcuN8KRrhHewgNnpYAg7XCQatRs45eJ2WTbf9JvMyh9RryzVmJtYtojw8hpDjegWwBbooFqMV",
  "key18": "34WUPiSCUomYchNZxZtQYkuqAprWrJzd7JnZ9CFFZAsrezFRy7WmyAZPEQ5iAoF9Qmk2mDYLNdCXd2ZFdN9Kdcr9",
  "key19": "4X6FXwE3BwS2LC72EGAVWDhj2XwWoxqrzz889nN5qv2pMd1hzh5fKRvTCkfjqbpKaUAjD1qLAzoCCtkqDVR65b5f",
  "key20": "2XVnpsKbDtmmaZ37Dmx9tM1ugQtvW2G9NUtrgGo9K3jpyuDNH5rFSaCfugMxKAfq566eLLCQZ2s3iNjz5JgWRt39",
  "key21": "4cf1dPsCaiB86FgGVswY4Q4p6u5kWFo2HK8RhTrk2DZbTbWmhFKsJme6jtm1PQbbjjVkPaPjoAhq8WU5CuajNQXJ",
  "key22": "2fD9oG5QynyyscRwwBqTYZG6bwwBz8sFcwt6Mu2gW4zQM13VJg3ufwwUfS1ZoZovhQ68SbNhnPSiem4HcLYUvCix",
  "key23": "3hMXnVfVSb8W9ve1qAEczWCCGhMrhWUWWFGfoAVsTdMbYsKMTuPpLAqnmA1LwHXZAUky9QPS2b74aJJGQtWgdBdz",
  "key24": "3mh6pScGUueFJ2dizWCdvpUTPzWx41zSKYLTnccHDrEP6Y9hyXtiz8qpbcdrrLnPG31wuGiwvWaLVpasbgCdJ2Wi",
  "key25": "5dYLjaYV1Mpkfb5fz5gfAFFB2kAg8QQGdTcPcUev4hfr6Yy683skccaRaDT9azyxbagV76fb5pDoAaUPcSRVzEwo",
  "key26": "4xg9JpZv91L5NaLSc3pank39xtH2xautkBduqJq64PGpFJYDeRAcLRKcHqWFvV9uPAd9BBhdv6QKbTEd7vhcPiCM",
  "key27": "2BMruXT8iteHXifcLcCYJ166wZpVqPewYZURRZ3MEQfMU4GVRr69g5cN5EWPZBpZtQ6cduoA7s7tURdrSVXLaKSS",
  "key28": "4dRDcwwhZYK8d2RZprczJj1WPiwzAVMQ7RhMuZ7PVD3tHvydSmrpzDXxfGvvm1oaFAHLMzLyHkLGnZXqWR9CZbv4",
  "key29": "xrAvGqy6iP9VDzccz4iyPtksLXvp8EVbA3GdFkAnVdz5LWoAxk22A2Cji6hXGwRRfscbbnZyzHEkh9J8NMPJomd",
  "key30": "UJAxjUpTa28x2ar8HrDovQZ2GWvuc4r8DjKukhdyRSpKogVCbTbNVMjmRugDr1mHtjCAsW5Mc2A3heb3noGh6dC",
  "key31": "2PBuTByNsYK2mwCyE8QNHkWXf5U4Bd8dsCLvLcXm3NKb8vBqPnSwxfV7WL9aoJvzRDg28V9gxq9wh3cq3GdyCkDt"
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
