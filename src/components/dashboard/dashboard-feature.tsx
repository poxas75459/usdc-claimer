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
    "4pmuTfR4sUercQFpND8fjtiUJ1yCtSjaKC4h7NpczTamKfAczF8X2JXXd3DADSAiCGB3kZRornzzyghV8dW3769s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xPd531rvqScxwqqM5YoJh8Yp7RdozR3yNNACrnYpkFseDXXjrtSZhu1XNbjp3FcUdL17TDvuJqxFaczTwfZPEw3",
  "key1": "uoZPtRtgvgGBJ32HBURoJTqgbwY5r8yoWorqL88Ua2ZP23pNPLkb3f9mUYemH8LacZXTwcXFSfPjn7psp9K7G4k",
  "key2": "4NgkgN3uPMuZRGzct95ee2jgXrVnmPUYehBbHdXRa1FzZREZzMLqS7fPaV9mVhfryAytF5QRv1UzMpFCT3E5NWwL",
  "key3": "SuUdSz8XDNUq4kWMSVPrpdC7x7Fx7atqaYB7aeVEqAgq1hf9EtTaxRMiXMvbsmr9FqCNy8GjPJJ5U2Xtd44AFFx",
  "key4": "d1SLqEzb6TQaffeyb1LyKWF4j3HH8nCzCBr7R4chmu5eaDJcvyonAY6rHtotMZox8AN2PupwkBCp123hYBGZacH",
  "key5": "fZSfSyDSUNKwpQvjqr2oLV8xdeeN9vu7CVJCHn2jR9tBCK74pXm9zE4KMZRB9wzpZsPPcf9fg9sb18KPuwxA34k",
  "key6": "Try3zPJPBhqZ9C7qZCtESBD4QYTeZACdrHwQL4EAYmgJvkEG6ZQo9awMcPgFcENYmuJCHNVZtYeYNfoBNvfHKHY",
  "key7": "5AWoLvzoxMBoqBsCyFoBGuy8aDuDG8WqpqWAfKsrmWjMpaft4Bun6kY7h7s7NC6VSep3cqrzXWL6zMuX2DusF9W1",
  "key8": "52Gw17UAXfjDdXNg6tXmThE9DzYxH2yrdpPaiSLiTQBK8qmViMf2TJrK4pwrFAcV9LF1An3au8H6nAJeK7d21vZd",
  "key9": "5m3uEWz2KmAXnBr5UHSdsFoLsHZrCYJwoRiYhaSypdg4sG8xZyep1Zq8ZYf1u3gZTKZb7iLJUGoMZDEzDuUWm6qA",
  "key10": "2ywxBYQpU9i8jspcXPCcwZH69aqYdd6DCv2ds4KYHjjEfkQhThAnSvFwWpciUZuGbWrjiEc6qiC9ypyL3wDHXGbL",
  "key11": "3XEnBox8Y3J4srHbvwqe5BqUKDGjae9VrQAchrYQX2MLCpZ2q59tyQu54gS1n7bu2BFZGndRGgKk6iDeCre6EKke",
  "key12": "F7bsXeWBqhXyGSV53rEBjGRwCmt1feqcRkugU666r6a17ARJqqTcSXB1kcGF2j6n8FTFrpv6DdmWqShoTiFgA6A",
  "key13": "RpmAS2RySCnbK6niRNo6HTJd2QEVQCzP7y1WkvTYoc9JyEfvWLmQ7SY5n8gchCHf8dVD25LSrC1jqcJCLXNmfJh",
  "key14": "XuaokxRtaDLtRwJSRVQtqUhAZLMEDkUrWMRN57xrNdQYA4FTpfbc6ZbBtXkgxP2Jsk2Uo3ufp8yuAGqJXuUnNoU",
  "key15": "2QDj7CRwznvHtALmaMxrMX4koEM4zzb6RXjo3nC2h4pSCbiSL2odZoxBe9pqzxLJZ66ZQeaHJnwqZiLwo12GAVGZ",
  "key16": "5TqbUzQFQgDMnw498xH4LCqhmr2U9PFQnj6NZ55p51CtL8TkricxEdULmkbSBpy1oFatfHzxismgYi7Q2BiEPhJQ",
  "key17": "54ZvQmYczV86FNgRJVDG8vsnfXdFmZmtL7hNEdRKXLY23zEwSsXQsvfVrpKyDYxqy9bjL7tHU7jetn6v9LeAPpKQ",
  "key18": "5p1BSGcPZbXga6JV7Uk2o6uMPknhrJ9Kp5zy8ZJLUREbxarXVNvQvEQeYKwZAVTb6tTTbpJ2cYeobFNsGuwxZCRf",
  "key19": "2Cx3JyL8BkJ9Cy4MGoNVny6RTgpmxZYccxWhLoh123dCnMFeZFTWfx85xGdKK6ZinnGLQSvgMQ11HsCZUFTddSQR",
  "key20": "zHmm2sfe1pZN6w9GTRcfcVF6WCm91h78vx54ML1iGB5nX9yATTwW2hBEYbJRnzqA7KT4MhkdHaKxTw5Kv8L2Q3o",
  "key21": "7P4damixZftXqyxLoGUMVZo5VxWTpuy5W5qeVLQaxAdzNbVLcvECgC7T61QzYMG21dEoyetZeNggX1MaFTCu2EU",
  "key22": "5gLTzjzLpKZyLnM2gAk9smLXpx2ruXu8QdHHYHFd7NTGaZ8AwpFawemTVnCz1LjmRbyK4SM4Gi2J9wwrhsd7jdn5",
  "key23": "5vprnQppDZ6sezkqALpni9JDS3tHGNRj6nU1ScVdv3g8vxzwyGjJAiAJ4oXXXwaGezEPsSXD7LSHSBmBHpVtWsB7",
  "key24": "22ruZtmafQbLXjaDngfqBTZVU22WuqRJ9QudHgnQ2cZvxeVcmGGbUGS95KRWgXGrQ2hn4Ku2YA3vygEmho9Eu8bW",
  "key25": "fiu9e8yU9RCZ7wtnGRFQ1BAVuJSnFLfRb1H3n5oeSkfsgXydStydMp7xZ8pGtBDvQsaS2QCxrxkYLHRwDat7ux8",
  "key26": "2W3VuZhCXmb69ibrdRnLG5J1TrH6XPBjDz7uzJKG8jD67M1Sz3b1zzKVGpQmhHV1BMZeXrsUXtk8i3khRizaWVFX",
  "key27": "bDLgvzSGtZik8BTM4FN1je1VNtRwjv92bFkHrZjK9C7eW44M5cGhRfPTLfQTRM33mT9aboJVmWReSFm1VQrnotJ",
  "key28": "3ujm69q9r5rhVYzRQsU5WxL5vbQRjuij2WbTrxLMmiHZ1Vvbpuf9u7GELex9WYi6Puz5v7ZrnZwpjpRsVoaCnHLb",
  "key29": "2X6J6BixXCRUvv67QBxTH1KuPQcmrskaBGzqwLNffCjCcXobTh2MhJW7QVJtWqE1D3LDaAYg1jhwi1ATJvPh8r2h",
  "key30": "3QByUGcUeyrGweYjZc3SGeg5EfeW1R5QsEDUuv1QNmMdVaoYXbpuiUebCa5HBwsBNKGtwFA24wSinsJPFSHQtaZE",
  "key31": "5qgwDpQxPvTncuLwWxhewy5kYZhtF4nFbTG6TALH4M79CM1yGRVp5sW3U3tT1LJpCGQDsQUY7NMKDWBzMLiKq2dC",
  "key32": "2jAD9RUPjMLkCPawTKpW4ScBSzg2oo22gXCfEo9NWvzGXkKgQeZFkbTvYX1L5fq4TqucC5x9peZNXig3EHAmqNUR",
  "key33": "5z7xyZDXsPRHeESqaDdbzvaq3ZTvZk2gBuGbKDnd1goFve8w1xHmqiaTu1HHun5C6qZYXidCHMhyJXYqiPmo3ofj",
  "key34": "5AWSATWFDNezd1cnP8PH8gVzHkzyntUG6iHVNdJDp3D9jBBHrnQg4ByH3C2joRMCyc96V7wyW43y8uJ9MoZ2qyCB",
  "key35": "Rg1owND9pgn9QkjBK7XAeDUYXGTFdGppg43dCUbdquGMhQof3h5K9U3KRTNoognmG48j2m29jiJbLXWQHeJgMe4",
  "key36": "2Eut1Q8R8om3aDn4ZM8C8EFwDEH1r3swkkk6XFee1LXaPVk314vVBJ3s4QmqP8uyeeJnBLvjTbJK2Yfaox6UgwTo"
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
