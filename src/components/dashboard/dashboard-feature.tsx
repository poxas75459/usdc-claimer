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
    "2Z1VWF1iY1R1dq9eWm9f9nxJs8LUcZ3XW9na9Mhmk3ZRU8ctfvaFfZeHZRmXTSwFEHy9fQHeSP8d6rtpb9rrd4xV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NSrAPZokoQYDZRXiDZmTrfmqKpLt2mQXY36WnmYtobsmGhgjkptXXC6r3C7mUGmDmPcXbf5ZHcVuFiSpz4nbdPk",
  "key1": "5tZcTJpSN9GFHVMxu7RgxvRBPyTUPKwTcnpoExjpUbEho5wYe7fqo2iyzAofV3M3qp6tykkgwPKzht2kWaKs1iX",
  "key2": "txeEMg9g2Zwkn3Z6uwmVryzhmdphkbb1fsKztQtvrukcnvZSVtzRmCLtwdC9LvWCBdUmZuGA29ZUgPVrZZzLH1P",
  "key3": "3qxKPevvcguXWqCjpf6RvQxZRRAsjVacLiRQ7PBszpbsS8Lbbh1F4sD9NeLEM6BPGLzrhS6U3LvKNXYGKJdvzMid",
  "key4": "64oWwxYGfgsujSxN8Yr3CxMFvGQhwWtjQz28gYRoLXuH3RoJPnicHrAiMCvXFgxb4YovcfpNwUq65gzTHwYrhmjN",
  "key5": "2rwqtFD3KeuatKGf6piaK7d9F38ysbSbgY8YuK7dDv8WcwS7CQw2pnYx3Pa14bv2cBWwuNsTgMqmm6DPLvwm2bBA",
  "key6": "4wUboTbyWPy52g5BE1p66SQcHZfW1ndMjKUBKv6v9y8KKembP2on5purfVyxUJF9g9fHRzPuCMcczyHSaKuoTAgL",
  "key7": "5BwDknydxEd8fgdUGF3rmdf8LmrXt5AJ9JxzboAA15Y5sKsdfXUU74R7Zscn6MwzhSmXZpq3ARo86Fn2ocRmqQUF",
  "key8": "NNyBuDFTqBEhvdM6gQ4Hh87nKXyKd6ArcGDP63vU6Q64rFzBemR2Gy4HtcuBtLtRgWCmj4EeUTtEivzAabxX8ex",
  "key9": "4StSQgAsaFNu8KcBGRPsbecb5k48wmqQ7jVmStiEsXZAdatew9jbbomWdwQcAyxsdHhGPoevbw7YD7a7cbXSWCZ2",
  "key10": "24BxMDvH3TtmLuYmCwHK56aU3dLHrpgjGVw9xJo4nNocN54PV5Rr8RFPHjbiHT1VrdEbw318e4xBVyP41BZzDw9A",
  "key11": "2bMk7V8nBVM35HN6os7LXXACm7ytspYwhuXGeg82Eu7GZ7hM7Qa4Ta8uWjm2QpL9bH7V8dy8ci7zAJPvdNosw24B",
  "key12": "5aoMfodTep9yz9EPdRFfheeVGwvxTQ7s3ujUv4KM6CDWTaHndHkJUv7a3BfSTPUDNJTcWyCb2vzgwAtEpXKnwTYb",
  "key13": "5CcZ6s2tEe39iYfyLcjYzeXWj7BpQdv8wYmBxp9mdSpUVvjj4GMXD6uJjHHjarYUqCgn4yDybnMfKwDt8EwigqhM",
  "key14": "35fjGUZT6gCmnnbmGLc625MLthWnxxyxAWpAS19V3hzK6S8RPX88yf6jxu9b321nr9TXeoMTMKuC6byL1VPnNDXA",
  "key15": "2JQdfkfEiva2svsKRQno8bEw7bhjgoZrME3bZj6FTk3npRzyndnyoP8rnGjiEstiaocFdiWQRKY1JAFhDb6huCF6",
  "key16": "d93TVkjir7H4naomNFDtTx6xUjUUh25LDc9i6JN9FPLHHXrn1zrnZEtHrBQcSPoPP8EXPpSqY4UYeGY26iwVnaR",
  "key17": "4iAZxF3fbkjE37KK1HBddGvSTw8Xnf3EZS3GQLNtqHdFLRsRigaXxg7QxcFPbr4VUQG4NF8VuidsX3kZ4QSGMcbz",
  "key18": "4BuJgjbTtw429ZnaKSypDMNV3tgDWoFCq2z7KtMiAnuSuGie6rni27opqDV2KCGZQ1Whuqb4Nezoy5e4twPNwJMz",
  "key19": "iNuwBpyU9dcNHHD7x8PR2gnP57f4U3tH63EFbbL9BZSgcvWCiyF3MvgpBsNgTXVkuR66LBSeLwZN3aEEUDFirze",
  "key20": "425ua1fhuiL8Vh6wixnL396aktRWP7R4dVGVyHQXoEXErBzpijKfVAvbYyk7KGfi3PcfDvjxE6VyjxfrE55dAVcz",
  "key21": "3FqEEYE8zgdi5QaYQ88QUPKAhtLJZRwTPSpgizbAJy7DDXR7qRBt5xfiu4pfK2oooRygKr3HKjKmusaaeLo9s4PQ",
  "key22": "4RgfCF18Z8GVahwozRXwuCQy2aEKD8GaRJAyHWjHccFck1LefRRxWuYMSsHwW6ofbwCN6tTCzkjANAumASXgRhHb",
  "key23": "5hLW5XguQ1qqjvSuK5caV6ts4BGDEEALYsBfVw16gWsaBEDs1xhbLnSj7FW4byFi2wraFVLPtvFPo4KMrre6b2Ck",
  "key24": "gKUyYkn4WH3vXLFi6ULQQFzt536Ht3JxLFcZUfcM2fPTkBKb7A8v6eev9Bta1MaaWpJ6VCFSbYyRt79QZw1RhAF",
  "key25": "3aNPegDpHhcq5PhK4BL5oY27fb7RxsVxBHsK8WiDqmyUqzEkDbyfkob8AkBLbT5YW8jA7GPM92892V1X8xVtNrwr",
  "key26": "A1pRNvAxkrhTo4bfcxqv5wVVfoc9ZDyUayHgSvbqpojUWjVMsnVfxWk98TAegPhtERBdfoQ6thQdcLRwQUe3Mvn",
  "key27": "3ojpGHwUD1exarvg2KAt6VCC6FKDnFpsBdtXe8XSDw77egZvb6xqPJdYHcQqfXM9frDfwrVJ5qjfpUTuokjNctVD"
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
