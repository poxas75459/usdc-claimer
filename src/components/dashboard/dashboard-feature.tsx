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
    "FVQWZRfERUQHmjTaq664LoJE4ECVBSmUTGfFtQM8EMYT4ehM5CRP8kou8KgAdw1iBQ5xraLjTVHqrzbHTMGjThd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m3ohAC8JfGD1awmGGGSb1EvBDxHnqhq2UwL9GfyRb12Q5NpFWdmSC9NNYSoXGSxmqRFtD3DqNdWATzsfhX1Y62B",
  "key1": "635daWoDNfjs4523vDhGbm3YDyByBxK9kBbTDayy13haHjEArsetbeowiPfpvKQqvzWRztBXqshcdAe11peDzGkv",
  "key2": "3gRazdMzRZmUGiRMT22LyKESGUGNvgBtQ7N96KRTGd9t8tGeAQzLm3bw3sF8WYySe4y75PPEmhwMbCpRRiYHXZts",
  "key3": "45M8qxncKRFQ2Xkmvdsf6mn7QS2AogukhvGG9G2eqbzP2BKTqC5p36ZGdxfnoUZK5ngYazgQDVjLzerYtgpo6YSC",
  "key4": "2RGprRYUDZod1ABRUVNchXbkzc38naKBzoTMz8T4nv6DiVAHsou3jpLAbzWxe3TWSZcUevTgS7SWH6o78fEhWGUu",
  "key5": "59ZWN5V7L1xYETsnAW7uzVA7XZWwTigd9pgL36FErant6xW373zuzFUjnzboUw3pT8Xhrz9nKe8ENrk7XirSDFFy",
  "key6": "3pSRsqt1STGbu1GRfkzhkFgvu9TFty4pQxaT8mC5mjtaKZctzaYx92fKmNr8dC6ZDwpmFUniPeoDpzd8sSqzne8g",
  "key7": "4KN1deyPRjR5nJWWxyaPBtKja1nmvbjMuP1gYnewJEGdaBDAbMev93ynodsCD7oZuLTYFgG6tAojF2KXoCRpE2bA",
  "key8": "uyxqwatV6hN9yBRznL2eDYmcfFAXu9ANzZ2DHpdfGod1tDVmh2sLeUEpUGS2Ud9LbMqKrJhx4LFfusy2AKjwEBV",
  "key9": "3N4HecDTK3Tq9jdBXM4pAM4BUBavpLKDXDUE3EQcQ7KJcdoyfiKMCmjBHgj2o9wZuJfdr6gkg3NLL2kqsnAuhptm",
  "key10": "67FdJFZHnk2BAaMrXpFNQFhyPbAUthbKpCaq8eLA7XCrdqQjaCJrnFXhtj3RgEQ1cbdLiYqK7nNt92kSZjqH5Hfv",
  "key11": "2XzEhR5gwHcK3WdcUCEyo3ywY4YmHupUTjhwfJweEzvZJYrEobkWjn1isg5kYkyu1wNhgm35qnFRrRj3vBZA376f",
  "key12": "39k79cEC5AjwRaFciNcY8RUZXSDq51RTmPuWRGTzxbiPKfuSCk2adXJdLnuVcCy9xhywKQL1xSPb5wDAUPa9o2d7",
  "key13": "4jBXFF91CYBKnnUqkP3SygdoFKo4R9HZZ32tK3gLtopLCbFHsDo2yN19vdMFyZNEbp3s3XHk728e7JfPjrv9fpCJ",
  "key14": "59ogZW62GHiPACm2gurUYakiuPu6nW4m856zQPndtDcnqmJhJ7VQuaQwdqa6QT9RfKKFjnjoYHwzbxkZnDpcX3Ty",
  "key15": "5g67LpSidMR2ijdPQhj8gpQCxrkTDd3sPRcA88ZksfGez39xzZx4Vs77vkqDxqbEGJUq3c3gqDGvASbC5zUXmzWS",
  "key16": "5JMeTrDDnF31aMNU4nJ5pPf8vnb84q75NFjtTh6fUiEUtRn4Rp8ACJrrg5fjuJadAhGkJ5Bqqv2qioY2ypUR1BSE",
  "key17": "65q8mVbUY4DipyWqYEURefepdC3EtAc6XNMexAET7XV9tBErtQBiXaP9sB81oSEDmKqhzpAbY1fv8Vmw7xJ9YkCD",
  "key18": "4AHK14m5x5wnQBnzavP7YKE3fNEVikKWaiG5i6bKPWkJCFxDNsV5zJMitx5tLJEKSJ8KGxDgkWr4PgP6uS29tS9a",
  "key19": "45jzJLcztd98tJQAM1qMBiXpeaRjs1eMTeUT2zWnHkafT4zfJ5zypibH9PhxhQbp1jfUsFfgmsz81dW9K7JvafAp",
  "key20": "4hSpmZETf4GxT5VHkVnVP6EcmoSV8Ac7T8RJxDEEmSfEJPGjX8Mi62gnDytgPsB2KmsQ1Kbb5kJpcrZ2XotTDrEQ",
  "key21": "2RvvZZYRL8pVY17UBcFFNJksJu9Z76cEkrGH7n9Rbha9vTDnYVxBDGZQ4Cy3qMPJpc2ogVTPce9gX2bM4jSp3Rd7",
  "key22": "573Ry75bvGktwMKQuFw1AfnXHTD2ChNixv7e1CoyQfEumyboQXJkH9ExpaXGyzvrjSCCzv5BMt9BPrGrmQfPAQn5",
  "key23": "52st58aUbQJvVEtX7BJsaXtjzj1f12NiECNyj8Gkhh7oYbykT2G9TVYqAz9hkcnSAgsanU8Ug5SNWimNg7PkL5py",
  "key24": "2dj4RHMjejbMgw8uJZZSUVU5TaUpkDLyBgCiL3e2tkXZAMzG7YokZ7gBr93aKHk3ErG5mb6u75EWxNrk1ppS8oiP",
  "key25": "4eYoRS2vLvqnXYuA16N6TyuCSGmov4hXq65vzbuf9hE9uxQnKNM4Lm8rLFn6ugyP8asLPgskACWWGtTT9RJK6qxH",
  "key26": "3QNU4PDhbaSEDBEk6fikH2KUA95hDyun8Bbjy4V8gRuXosebPsP89b6MLRgQzFoStyBHUQ1GKAcLSr7sUCuTaqr9",
  "key27": "5g5gY7xLcpVWwWKHJEJEpjb1SyucRbEKGaVxveoptTDj1x753EVRgc7TjrX37Ru2eeFzQRxacDn8PLw51P5MSnTP",
  "key28": "2kyEsy25ZC7Hm2Fy2BpnDzhDt8RqRpaHHSBrWSu3S3Wm6KVHQdwK4bAGdQiYbkrKujeLqH4zbFTpsqvev69BvsKZ",
  "key29": "3LJFy8DEBh5bjBprJtYCXwJthvnWnAGFFtfzpLEoLWsoQAoS3e8U4vHXZcCsTMJUSqkzS1fFrCbNfo8LRLZmUDnZ",
  "key30": "547BiVg37FKmRREn8L4mtVgCGMAvJgAeiTsDkjJkCNC3nFWjCJYRyTdqYRAXo2L2ZhtnmCjHk4PUSo16FMvqmXtt"
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
