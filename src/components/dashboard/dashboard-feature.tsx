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
    "36e4DwvpW5uvkRxJLNtbRyxWGKFQhCREJ3MD99FoK7WsWSNNC1SzQWPgJAsWMYC3HSB9q47NHzMYupA14DViDSaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JRWfBDZet4srAYgngv2hb2hiqiZ9s9gqcpDK6PAnTb1uaAn8oWTWGUfX5VrhFC2AQedRasHNZKE4myt6khk6h5g",
  "key1": "4rsWiZTM3vynZJnu7DyNEKXAEtoQFxu7zyVq9RD7w6LVPmkjBNYfqHeSZD1iZWzRFxBHHZNGAiC6qzWCrFvYkVFF",
  "key2": "3hN4SFQzcvAw6FfPzbPpRQHor3vUkann5vFnSsoPBYp4wGUtKS1Xs1hbYEj3Rqn5C4fL2YyW28LKHrLJaufSEwLz",
  "key3": "422RsKxEakWNam32SirFckhhkMiNJr97k693rKbFM5MeQXH3NFgdbG3kHhw6SejkaUomnspbiDBRQcfa38v3Scci",
  "key4": "5cuQuHbw6FDav7qSpyKpFawaqseyXZ7Bho5cmM2Ka7PiLkP9GL9HDKfNPLfRqK9GfQypiGkjDURwhP5NqWGRCFM4",
  "key5": "5KPzDrRD1h6ZqQLDYFSUFKHigdNTubD1Hiian5gVFMD3BFm2Kh4ruppqq8a7rgFLJhiufyE3ZKJujZm2ofFXTbQb",
  "key6": "5D2ANnjMitM5FS5QwBFQVuy1ytxafaEdFpjz6rDeT9hntHB5K8Fs5heY8HyxnbmMjnRfvQzb6U74e8A821zK65Mr",
  "key7": "TkHjDZb4ABhuuidXpZqqDcF6yrd9yyBNdjZvq18vxTp9a2nHe1jkBWBeyS9uwbi3cjMiko1GtpXxxVZMCt6QmAi",
  "key8": "4B5S2SVbpkXWX42cAGuhGwci1CczVx8z6zQsbE2RpqyZnUf6wT6nn9MNaGKDPgdjcQhPXCrXRpNeZLScfGkdgLSW",
  "key9": "Lgd7njDHk3MCZLw4YbPLU2ncpKk8C6EPLmttP4Ezg9c8NggTYKF8vMMXmJNUUmESHzhzCErecd325W377KJLLKJ",
  "key10": "tPxr9R7Feb4TeE7s1oCXWYxeeL3mqifYjJ4UFXKw6hBecB3UhqpMV4Vz1wxDNkJnepeUa6YYNXD6fdznQ8Q17CU",
  "key11": "3gdJVJGV87UB99Hv3dByv2RtkcE2Pg5Er9XenCfcyo471gADSAneY8cvppP7Jrc9aCaf8os2hSw4a5rvxoehemtP",
  "key12": "5v5UjXiJM2K7sR3mPHMxqA12Pbyhx5XUC257cgmioPXxsyWqZf3zE56R2JKyTD5X1ct9XptEmww2gyh22ydDa6Pd",
  "key13": "4FAvwFA9SqFQXXSuA1tYa3vSCJiKqnSU7dwF1MMZYSL7t8XZR7oKjqTKjgoKRVCZ8GeCouD4AF3fekuJaJ11wh6d",
  "key14": "MNVb8xmaKQZqb3bBP3yFfUvPP2y82AGWX3zf2Fdn9vQCMyZVkz8aNVurCvaU1myeD36b983wZBfFCNnFyCZknbB",
  "key15": "4WRa5Ka6h8f6WSPrMo9e8pmuTkMRAvM5stAXaKcrDo5WzmJ1cbHr3Dwtd8RqX6m6kWzg4yw7jUsWDMXPr7RAECsb",
  "key16": "3tAyTiiL3r9QeZ8PSah1stuCxvtnvUDSLmSvJzsCoFba1NQxdKBPNevBdt7Kcg58LmJVneiJpH1Dj6XNBkFNDfcS",
  "key17": "3SyVi2HCtSSX8ismuMqnuYBhKp42dduizxNzTvAbm5mEyEbJg5Gx2ctk7hWj535dMxCsCVQYeHJZA4to65xyjuHK",
  "key18": "51u4E5XjwyUPvGdPyA25QWQkiZCBiZPWR6X1RQDCKTZaMCoS21Ef9th5BzoVVk2qfs9Mv1swVFff8s9XKodFrc9d",
  "key19": "5x1QUJSLVDYHa5e7S6dSeRDFEEqRqaMdEHr2ntxyx6TpEiAuuNsHoRU6Hexz9B1vmL4mQwoK2h8mfrbMn8juG2U3",
  "key20": "5zwsUTpvowajccfiT5HTL5wSuqdzU9S4tSE4bxBcm7Qdwwd4Ss9bgbAKjgcUzT9gkF3L8CjT1kNQNSbi3RWdBAFh",
  "key21": "4aCuHA89xgbY5PrJ7Fwe94dFLAtmDFJfsCnMJPGKvXQb8VxdQXQNSSX2LTzuft8arN15oHTqTtB1ukYodKLS9jEP",
  "key22": "3H4WAdciHMnnat667aUwjntU1oe4yaZL2npEDtT6YevCZLySM3Wdddu43xeyyNJHBMAp8jbgJpNvHtAQw62JVTqc",
  "key23": "2LYaihtPweXgtrrYj6r3wZ4fHcSRfw54WWTHvjpRGH8C6EbExTczYkW7UBKsTvM67AZRWVKCDsSaoYGTPcvehnJe",
  "key24": "woDD5hJxe6Bx3247ZzsFhwJK2prC53wrvzpMsUnbhpgZWW38AXHiHzq1Tbni9QHYGZ3CDP6n7HxFzs86kjckZuv",
  "key25": "53MXB4DX1QwSscjiKDaMmqZZRU4j4TbpMaYWNDBG5h7Z5igXdi33vpCDbw2KRr5UrKwGie2YWWEgvoMpA7wdjVEX",
  "key26": "61EYLP4XfHGa7kez6SRgwyVrTfLSXage9nCnXVeBKfZAb1ZSa4XZFSD5TAUBfGt6BrnHUbWHurHi78yXriE6fEw5",
  "key27": "61ueg3SZM46NUrER9fnsG1gFWmSzmsy1pN1gm13zGKFqcpkdRXkSZkvewu6TDUCPVwugzDPZTz63ySxLgBuoXjaW",
  "key28": "FZsn2QTvyrMyRPaNjwy2Hs3Spb2ZihyksrqSKQSQpUDHUD46maG43fDPNRQkHoPq79TWcC7bw2RpjYAXBNr9MAx",
  "key29": "2acdvZVkFj8BipgedEbGy9kXfLvZJpZuxshW99q6mpA3p6tKLHYFmQnc7zgtrKaXLFC6FJD1saBzcnRkHNKq3y3B",
  "key30": "5MkA2394xP4risMqTUDjbBuXHkyfwf6iURxgTxiGsaxCDJWKGgRJgXyQFfg8XdonqP3rtBvZ8PxVg9CGfCiBAQBT",
  "key31": "3FJSyPgUnzcqzN1uHrRCgjkm3vens5TW39yGtKGEvZ7cKMrkcq6zZdTeP5T7D88guLvYd4h4MgG86smjRHzLXUpa",
  "key32": "2zmZgVmvYkymEwSKfp5YdQqr1thC6yuv4rcceqipf4CWhAeFPdR31kabgvipDYDBKn6jEHT5NvMxGd9HZx1wrALP",
  "key33": "4RWjFv4WvUzhvvt5yRgPNNkF3o5N8ocydG83EffBMDTYZkJMWpRCkkNj5hoAQ1gqNKeMCSf358EEAdWzqofL4bZ7",
  "key34": "3wT8v8dwUW8YCUKDfDCSjiSC73JPyx5c2v4wn6guYQx6L98TZP2baFrNQg13hUsZshi4uK27A1nY6VhUL8dLtwhh",
  "key35": "5JPahK4cGnDXyqisiceqSNu2vXMPNMwaTotCBLuKuWZimpA2YAoMtQcP1JX7Q33Bzz3XpxCoSLk6teFk2TmQwvb2",
  "key36": "4hehgn2tS58HNMFuZP7R6hBR1LJBLV9WEWcaWtEZEv4HemozDyz2TzdGczKBnRyhUw9thRavANK1ysjNh6czJtpN",
  "key37": "5m5xj78cvdU62yRTnv2kHeoFtBcpd6MNy3dyL7URg52Qg4UKghBJmgnTn4Ek54dy67VrCV92AceozYc7nRsDBwE9",
  "key38": "2z4wjRHgRHAo3SsepkQkNFd6K5CLAupeEj4YUFyCww7kRMoc9h91GciqAY1n83npt3Ght2jH4TwL3kesjbg8QbeG",
  "key39": "58nEVNLAh7AML7tdmdRZkLCNN6x4uYms9szbY3eD93mtQrMhiX5kJNGcByAK6oUB3qRrgQNmDiFi6VwAjfHWAC4g",
  "key40": "26zbFCqeVJmbjJjVS9uuexJuagaeD7GVhfHSpGyRVLjxEpBwm1F4yZiEjr8daurVjCxm3KHM9b552mdKXbfGj3WV",
  "key41": "2875my4ydE1RGkaGWyEgaKrdoWESSAGhoCyFSfEdMrCUcrnBytRee3rPoDHoF18TtPM2zB2VPe58XQcnRRgY5DcQ",
  "key42": "2kqhM3Bksa2T2Ew8AaKFKDxxsV8KdByLYDZ2qY3Wo1QfwZuJ6BSZWJcmyaUi5JJjJsrGSd8KmxDhw6xA2pYqJXRz"
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
