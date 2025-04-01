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
    "3PYf4SProwbt3oMAnRkcKhfEkK5UoY7Zgk6fyaz6U9af1wbS7vFsa2C4PjrNdDuHz7hs5LysQus4cfdRQvJnLVgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L8EMyvoMGCuk4GrM2GevyHCSjTQTAXVrK2vgLjReqFXLGBRgwMbsK1bhGMLmYAJ3CebkavLEY22yeRqbMMnM1eX",
  "key1": "bbMi7M5YRmpb2uzRhuDtVo7kYZhw9b8mE1jHyvZokY1pkisWFABS5JeA2wLG9dzaW5eihRTqpZ3tXGavkLX35i7",
  "key2": "3UAYMgR7mcj8afcvBM9qxidqzzFDn9oGarnLd2fynPLJA9dG8Ppf4MqANCVBRjLUENt67TBMiXATqnvUoz6mFzDu",
  "key3": "2ip4kqXhKRRwYLTG1KX2iDGVFo6zbXKzD4q6hRVXRiw8EiejXF2Cx5Urx7mK2jf85x1YMxFsZjcx1JeTXaKW5n8z",
  "key4": "4WFaGAbyg6xy5KaVS9ygrw3eDtnZqxK9ttriFo6DW2wAKDCSQ3Xe6HHtDjyLof2hbJniUg4m2CzFGzinwMBsR6xq",
  "key5": "3LnkKYXocqnjcaLzc1GcmydkUupvfzqqEW2piscBgtGGkajSYJ6xJrqbRYoxfF3tuPzf3UAtbxLZFY98WTZyFs3s",
  "key6": "3M5KV8vCjYqaXbRaVq6NYrprY7CinwqvYYtYBY7Csh7YQx82LxBFNJCMACEqY7Kjx9JgRGgCmZ7FYr8SCxqXyiMF",
  "key7": "5N8MBixMqTyZQPF7fMCD7hG1xZHbSFDkaELx59pcFZv6KDRZhEcdXYgHfFoddQi4kcEgvVgJC5SVizMW97YFn6MC",
  "key8": "5t4DTrggvXKMKfe7KwGdvnwX2NFcSxnCCBmNn8SUrZUja7xH6SCnffkXB8gdF26uSuAAkWuy2pEoir5TZ3b1wrpP",
  "key9": "5fJDjU2TWzSLQhaj2YkZ78T6Lz7wmjsQURjZY35YEyWr8ygztSs2vHgHZtaJPVwaZgPL673wodZuCe4e2gkzysnL",
  "key10": "53MftE15AwR3CEHNgYjoXF1ZGNGTwmptcCkpf16g4rr17rEmn6sLb3dbdxJbynVE1VacZZEsuYh1SeK4nPJntkym",
  "key11": "V6LVCBCyiQ8omto3GnP9AWCmEEZhFUpTahQFSx8JRno3ANtZKeFqc3GTx4my1PxZyuWVoMFGK2Jmy82BWePfJ2Y",
  "key12": "nUAEtubwNjPUNkzDgExcpBM7q7RJzmzXpwcKG6ZZiapMqvV7QY7reS6XVJLTNFLVCey7xGpr351MhB6eDRqXVAw",
  "key13": "5nLERi6c1ucLofA4KVjvPD7MWPhMnoaqsuSZqvSvSHemHw9n9sEyoa7cd2tZxrFeDWsMyy5F7nvCJgm1ShH7US4",
  "key14": "5UkoRoFjFET7LeaM82qv1PrhuoAYt8WG5VrxJyA1Z9o6KftXmciyM4rftvXaaa3SM5RhsgeiLRytGxUqEbxV3U8T",
  "key15": "dJ4gaXD1DE25UrBTifgTtgPa1KXM9i5fPDaHi5WXsMMBk6mEmv97CnPLVqjeVxyLzjh99qQHDtqnEuenk8A6bPf",
  "key16": "47mh9BUHNkR5LqsWErxJbpZbmQ4w74aarFxACxm2esR6stTHUJYw56PzcQPEXp1dV4aeKWMT6txLW89Mc7z5PPR2",
  "key17": "2NiAqZqhMpQrv95d42YzXsCSJwX52eLxgmKmbfpvYiJ2AbAHYoi7Ge8ZZY4ScEfVx9Ht5R3CvZwAAybScEJE114B",
  "key18": "3e3UhwVZf2MU9Zs616LZEvMqeZ3NoYuSRYqV13GEPeVEFjDcRPr7qt7CB3SqKDb3Di1a8e7kHDVX7E3sdn31JBYM",
  "key19": "eLxcABEskejRho49c6E8JgMsAaW2236Wnod8CGa1gL5g6nNTZjHfXF7VwEaZqo8xmQJEaMyZz1C4xxqw89h3YpR",
  "key20": "4D9QuQinPfupbjk1cT7Uu2pyTfSEZggZMn3Fyk2YBKHtkzsYAStirVAHXNDhFHFxmaqavBaGnyVkUZPG4eAdt7HK",
  "key21": "5s9VP75Shqex2Hbjv2e8KhNMdTFJv9SSHcmdajoxXTSD9ZDBEzjUH9NCi7FwAV3KwKrH7qMJhpKmFqEhNDKq4yS6",
  "key22": "55rpwskjQw4DY4b4dy3uGAMYg6pTsexQdqmFtV2f9yB4N9QjbYjQLGhnxdjW3xnxTkm7ZXZECYjESND6Zu6MUSuf",
  "key23": "49oqDekHyLm66pyUGFYQFCKyQPhhwpHspFXzdR1Mv8274TaoN6roxLfxLmZa98uD84vLc6NbRhsxXVnnNC9i3NYF",
  "key24": "3xPRQZsK3z8NPYnsjXZh2QvoREiF6wfni7fJZEw9Wn81DZcznpeKQaYhM7skD776Jrhxzvo2UErEjmdh7Pjoejr5",
  "key25": "bj9vr3S33V74Tfk3smRfgvTs5H29SJ7ch9MrZjDjoYg3cozmWFWqjAATaPE66kcgnswvTFxDoERqcySGWuAhMSF",
  "key26": "5818MybnYeKAz5JfyPFYWEJNtJmZB9BbtmaryRNA866qngYTXpyGmjbf99C7SDHvtdaNJA9wVcZAZ4e8wiW5g2iU",
  "key27": "3Ng2XkcvsjePoBHQxCH4kBY5yQv41T2iRscV6JZDm15nYC7bYUGDsAB2wRaVku2cDAdAp8B5yA9bkhLYoi9c3uVe",
  "key28": "27vtzorEyda3No5W2Zosb2LMpD3AgYbSsTfvhNYRfc5RyYbRp5tkhaiBFzeMeuQGv8upR5Hw67drBFrxCeeiRgCG",
  "key29": "23oh11a3ypY6XrmvBqc8WaJ2VBynHBsnFv3nAzMWCBGjRwBoUdDsXXS7HTwZDfEA9y4QMo2S8n8H366isYoWKHWa",
  "key30": "5rbMVLSkAPL58NJzgJFCUs2bnTYB3zitgNS7TFbKdvvCH9Q1nSgJeLsPuHTVz8ufUrQSQHGpSf8yBVJvRdK4cRgq",
  "key31": "2eisAYWdCy2o8BVBLDqJiJmFPAu3NGdKkYPtALToDEtod5jWHNHXJjD81Q94iJfkWAmQjbR4e3U5DqZaduyeYMkx",
  "key32": "2DDh1H9jVdzr1YuniqiWkWng7VmrGD5qXiHkTe4hs9NHhoE5UTdyoma1UG1fjYPhJCQfeW8isnxoPbBjyvkzBCJW",
  "key33": "3PvQoTqFRWEJH4q68bGB7bDmPgJTUqWGM5EaUXJowLsQBUwf98i7PyzFgEP4ksU9eer1RbKutRV6Rox7Uzp7DB6j",
  "key34": "27sLLTKjRQ1Fu42hJKM93y9TV5xHJR12RPoB3NiY5GbTFmruTXVX9MEXu776aqt5sDuHg5H8PEGWnnFZWxjFcet8",
  "key35": "2AxWGqniqoMCg9dmd94ffLy2XHYXKtiDUsFu2HvqArSXXjdcuQoNsPqs9VzMvKFkJD4y6D7dw8kDj7XzBbinsB1A",
  "key36": "3wNVwTvxQb5Sq6QRGC8aJZ6evRLyCWydkiH4Py4LEtspKtaUcvwTDeTYr1edEtncnaWivjqKy3AGqfAjtGDPk2ua",
  "key37": "4hiC9hmEp2BNo1irLrmKcSAUvPVnT4Kugg3aXLoeXW7fdwFxNYN4DK4VLfmXqpefdu8j3xUQVEhoYWYp816VggD5",
  "key38": "3DimuLw7JvXD8Xhw9cSEHGf3aVZuRGphXuT5qyoeNCXEXTNccakxQ1sXUP89ACriFMqNSzkzgK5U4N8LnDFdiKEN",
  "key39": "41x5a7J4oJUayw97sP8Ky91q5snDmhdjZaxq7C4cffGGs1RfsrbN7YSssiKcKwpXG6NLLxGPcBNMQH3gNMm5jP3R",
  "key40": "JpKkyYnHJePkM8En4nVtzgvXHs79pcy8hKb7WSg19cV2mYKb3mMVVddt4TTwYgZUrgsdS1Nm8bmRPozozSLxR3D",
  "key41": "3FcaEy2RDDUJqWvt8Wy432jBg5W7wyZLeXEqFHYhS6j7Vxhqa3Vqzyeby8dUH3pkfLeMvkireht4SW93vjWrPA8Z"
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
