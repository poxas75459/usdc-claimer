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
    "21Uv7jfZbyMGiQDDVjWQ6ppz94ep6wSaVpeGMWo4E4BNN4YVpLa2Yu3hpktLVS5JGgVRZy2hzY5UgarwvPsQDk7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LjcMYtYf2t8g2jJe4BHZoVDZ1FVB5Uj9kwg6a3oBa7Qvuh6LBuKEmgGPaNRko5Foy3XZwe5K7r7db8RHt3i3RcY",
  "key1": "4T22hv2cfqoqGa3ERsPgWjXZvSzvy8dphc9JNLCmBneqob4GUxegFAy8pWnv1ohpe1PPhkkZDoAa4qfHbRiYGtW1",
  "key2": "44s33hH7A6VQWpwvfvhfj6owESAaN6TWU2t5wKBowt2eudRoZVEuhuYCmYinkPgjzbAnf2z69ngSQWzGTYUFKuaG",
  "key3": "2FpLuBLZXaX2dxEQ9whGCaGwnAFLxHBfLdbXjzKUKsDgxhEYsLYrUj8ZMpCR5uJooPAMJ8nnuKrJ5C3fZkDFfkiU",
  "key4": "m8cq9eGp71fZA81qPa5LtcrtSvXJJAeYYKbE947wzz9sztvmUKwnC2szNPQTd9VDbRz7MA272xkwH6wZ6fydFTu",
  "key5": "4Cm1pVoymFJ9HSuvk5mafzBpqWegyQ7gHCk2akRJ6mYoaJyuvhsnoc9NgM1FH3CdDSGtAoQ1fZZKAWZ99jpYR94N",
  "key6": "28yw7i92hmNETLbdd6pJ2Sca5taByvWgcyE82qhGKT4oSAxTRJvxAB8pFNACxmfAK9Pb26duDSy43QuPmAjEBWpu",
  "key7": "4xLxyJfUwbKRkFXXtXkiJgkn3PccXgNsUys3iaivz9s5EQHzXEwF7wjScZ7yghAP1kC52YWqP68PwJHxvRQYMrJJ",
  "key8": "1eTWpGT1v5RVA9aYKkFwsUvdTTcKfWd9LA7q8bxfHK5XvfFBB7QG87Yii8gRMRe36PaWfEJzTx9kE5xU22YTP7j",
  "key9": "2xw5YNMwcRMUwpVL4iiVqZuCK52j4GZeV8p78RGviGxUZQ9286xVim7pjTzQav59HQoBPBqYkJGu7YFaX4CvCiBq",
  "key10": "3kPbQgEoC5v8fe3j4XhaGywKKZoGN6Bna7MJYTHCz3UkpQ3HK8ugJWmjemzTbHXiedTmSYkWXfdkA5hBBuzENUah",
  "key11": "4qYaTSui34yqsAyrzC4HdpnfAAHGx17xH9E6UK8sGUewBh1h1GJKt9TE6b5LeSHHNUWnQi1NpXSHww4dZoELQ4eq",
  "key12": "GDFQPQYtvPxyF2QkUCMTtUJjLb1YMpyh7LaYXA2GmtnKVYwvNQmz3B3tJtYZhxDM4AkXyXKxSWyoXNwykFWhZUY",
  "key13": "3MNGe5AbgmbqDYXkweF5DVMCvthE81mdE48pVs9nsKXHTmD2Kqpd7k2hD2M1qi5ZMV4pna4ZgNFDcg4k1sVLQSSS",
  "key14": "5DC9RKPxhLzSBFPx8NfMk8qdHvmWz2FL135bT7hw28j9gfKHnD4LZFUtg4FXCVeXabZ5RJaGiH6kU2XxLTXNXwhJ",
  "key15": "3xeshULBi8X9QFysofJML2jYsekMq7brVxkSA1ykwc1xZweJa3WZd3McxCx5TPPGv33XXZUtQyiU971rRmpxBhy6",
  "key16": "3VFk5vuVvMbVUWUWyLUeB18fvgiemViKGr9eWdZQxUDf5U6BqQKH4efoLBNJ4FJpt8o1bGoEcGWLai4T7VfUQunP",
  "key17": "4vybfpCFjNWgmr5tXgvR83tkm863tQf9HmAXxYq9fVUpaj3jHN3XY3ZSYTrDSu1FgRW6w1bscSNPaSRLLcnHrdhz",
  "key18": "ubCxyJAk1M2GTKEscMhrK89h4ywT7yfsQ6G6qMa3sKcdu4jz9XpzGWkHRgPNc5MwDH76keMKrJphph94EpnDbNN",
  "key19": "4Jh5JRNJd8FSvstL8wx8gcG5L2myFktZp6b3DmY4CUkSCWorYwBPz7PZcuzgPf6RoERrMmN11cgU4X4CVnjyKQm5",
  "key20": "5gZH5pnCyBDjbvnGarzUHQEXAbuxTnbh2bnFKoXbdKs5vhdNW1x7d8tWG8dEYBsoLxs6ivY7zDUTnk78cK9JqVKL",
  "key21": "3H3XrYTUYFRxGEK1ED74MWcprhioMdBY2ksdTqFaQUKwiwruns2jCzMAo3BbKyokNFtTwkPKFws64VhnmVFX1YGC",
  "key22": "2o7JDYj3aic89mNLXMw9piqrirQC3Lp3gY7g4qYeuDN5pAfdwpNiB7bbT1c7jvkxRLZTysJZhkQketevEmskuW3Y",
  "key23": "2ZLJLPdrL3hWivbTnUF6devsmKv2o3EpyZvchnYbjYGWeRpANexyPKGyQLYhuXYjAiDtVEt8JT1kzrYgWotTEoU5",
  "key24": "2Pv8FW29wZbfLe9SWih6EvpsMXHwfhWCZ8niHTq4SCwHGB9rm7CT4xBauRTrsrh1G35ptD5DsZ3NhG2Vz1pEnEGZ",
  "key25": "2pgNnof73tq1u6GPttkbKVdaXS2ntbsDH4yRmjLEnvCxZqasQAM522yMiJ7cJ4EZVXzg9miohaxfYqXDjfNZWTWX",
  "key26": "3PV2nLrs9HrdAuguxR2jen7tDsrLC3h3aMbZMUDwwmJ2yYTBHnHiuG71HFy6A2pQrFn4TxPcEL4XEEcjug2QJQAw",
  "key27": "5oTfqNPHszCnqt25UBBTvsCagYEkbMMmDis6mw9JL1Ev5TXGUngMFhJt4wi8Xzt1wxB37cQgmaKJqbxzBsk9HEA8",
  "key28": "2rQiJsKJKi2YDYLLX6LdZ9jhszCbxM3jBwtGExJC8X2guREVjD8jryxe6zm6Z3gU3JabvbrdZnpBzcpnUrVfS1fm",
  "key29": "4nJCzWUT4MhwQ5Fiti1ZsuRptB2TAZ25BiuKp62AXJMgWbyH9pTAmcjAwwKL6YcUxxRHLZfXzPCXJXJnd2Jq3VJH",
  "key30": "36caJV2ASk9yBqtHUxwgB76kjAqkS8PVcGjeT88vEDLhjwpTJnnV37rqZ74h1UkEkUdYgGfDRkTWGoiGpHG66fwi",
  "key31": "2XhnK8VznXddEtZXUFUKUWJ8gSSz4AYFa2ZT7JTEpmaYLLjdrh17A77GumPpxNE32ZCAapV14nxCjPiTJQZXHChk",
  "key32": "2R2BV4z2iEkGmYuXkT8TwEg1m6PooRzyxfBA6A7xyWtRPeQdw9TGkDpMSCeFLgZRykSQQZGAYWkLir7XyVmhG6f6",
  "key33": "5sK2MfUq9TaejCT51iPWhRTkcwHrPv8Ng7rNheYjiPKjyTEJCYbNjhcAPE1qQM1oyEWqtYMvjxrRWCC7aekNu2Gc"
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
