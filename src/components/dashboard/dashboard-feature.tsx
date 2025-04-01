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
    "5shDRVi3zTEg12gi24QYzeD6SqU7Lv9BWNYkPjuamDMcsKqeamb3UPixFA4yTod21b33LBWLRhFqU2pxQNHuDKjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oF6g4JMWjqTLNXuTy263Qtq1MxHpkyxHMhro1ytTnABhRaFuzgXHeMeW6FPGMa4bduJSkWXBuxY99ujBUXvTXMn",
  "key1": "3VWQN5wJg2b3tkmNFwuT736x4zCL6k6hMAr3ZqgYysNxMvtjap1WZGSXFG2nyM62HNNRv2p6G88J8ZaXWWyNuMdx",
  "key2": "4Kxnv5THPdpfSPy4fJ5RpYrA2yzao9Bjuavt3hDzQcHxmg3yBbik2hSSTjFCxGGNvSPVHBiHj1GjAjWoyzHDgapR",
  "key3": "32L3vw7bvJ2LNLsccUUJNrwLHZJfhnqBytC9coh3rpG7hEND8BFQ2mTmvq11Tg7yJGcT3jTWCAKSy5XTZaDSg5pE",
  "key4": "3txbE8R9yvaMKgZnFsMbfign1kTCqsihbLimDV38jqDk1wDnvBYzz1BCk4uy1jfsw7JkQss9VJxej5JRSh3xCATS",
  "key5": "3kc8ixYeeQxcqF3cRbcsbhwTJwvyvE1cu4FQqEALk1vdYPGeQ6BWnvCazL2j7Y7ZjmSzYjXuCm6aHr6KVws7PJZM",
  "key6": "4vwpNTJ6qLurbBSWF3yiesMZfHt2QnrYa6vzvGsBtFFW1JBPSCFLxio3CrDDfQnv1vSqAWREqyerWCndSusV12KQ",
  "key7": "53k34AkmGFHPEEWJEk9EsYFSmGyCfdBqEg6djhJcKqSWAUkh8z3JQtCyNg727FVQf8zuh7eqfDBJqo4Ve2ttMsFR",
  "key8": "3xPjeFFSget5JxoeFcpGQJ1iEZJF6ViGdcFztBBHp9wmnpbF8Jz56aQPDvDiSwkqwr9Xacks3T8CXQTShimPan2o",
  "key9": "2Mxdx2cNkshQ7HgTiSonpk5sCeJpZ6HLGYM5wzS7UW5yECiuvQ3ApS9ayBTZBs11Er3VideUNRn699CuNW8yJ9oc",
  "key10": "zaLc77GVVFGNfptrMmNi9gbS2mfNySqUVySz8oyEjCi1ST7QX16kNu5svDEL9Udd1pfQnDLLCMZJPofXQvT2PSL",
  "key11": "2mKFtZ8MJ2pmmsZAoL35D56quznvzvH6aXWL2w3RsVtTMviTW8KJRJ8JXanjfQUrEXWHbFXWvtaXy4eLvF2iSjBJ",
  "key12": "4djLtGMJ1aJxbMcbbujWqxn87JGropwh14QLu7Vj5ga4Akw59ueA3ZUic7JhoGs3ptujg1zWZ8rh8UqFLLATFQJQ",
  "key13": "4HgDsDfLosFS3RE3yRXBTgFTVomq3FvoQatg3DRtm6daEmoJe4LqRKG4iQ9kUoXcKtukZNZ18fFHn46DqevjxJ45",
  "key14": "3hMJkMUDHzvWSSaQNp6rSVEscRkNT471YAr5aTQAp1fNwMnHYFnGBWfgDbYYjqpwe1x9DEQixgD8uNfsYfx71g6R",
  "key15": "25fpkVRHptTM4ykn7yJi9FS69bUNobGj8MTnBwGWFYYPAK8VEnATWDSDGLzrt8mkmc9GdCUgcJ3JqKkTGJshRVMn",
  "key16": "4uP3ZrEPMu6kMmKGMZW48sHrChiAoh6gXPagg87v1N2Y5HP9zX82serp2wJEdLmiCLinHT5jCFDoz94u6HWEgC1p",
  "key17": "32bJWzF1j9tpWTbhCnKDFMGVjUuoEB9JP8zjbbatnh8QHKHj4KATbZm3M3QiRiNa869Md6AHgvsGbx9NAJQsyJ7g",
  "key18": "5jAVRuq33rAUBv8p3D7bzsCTGcwz5cTmocuD9KY7nyjNHiaifFetRyZ6GjsycHL6o5qVQCRyiis9emBd8YBDaYp3",
  "key19": "5Yba1MVrDxGGyDHNhjJLXuoRJyQMFqoNHHhDR75iZmd1i23dzwoSHQKNNrL5FEsZcBkXwVJ9v14AoTCxZtU2CJkH",
  "key20": "4Y7tMnxQ46ifbQPp4JL2KV9fLzFi8jweKcW2GhL8BLewMFKG6yAPe3hhvqx3ksam8ixoQWXH8mUJTzKXnhYbMbTj",
  "key21": "2eUzCbBiA4zWecrGND1V7g9qoFSGX4QC5SqqW91ZhNwfqPQLohJpYDowtJuKce3eTk9Z2b6vo26fS5JCgud1gJUP",
  "key22": "5eCiVBjCtyBMG6fWpTsCk95w8DnTVd3zRSUaJRbK4gTFpTxZbC2i4HgyH4GCY6EBk9DK4bWZzjyMH9bdDoxAd3hD",
  "key23": "66uffwSmaV2GUvTN8mPC1twLSvHQnskhS1hLugpFKAX8n5KF9BAQk4VxKJHcwoj9MkLaHn3EmQi1X4gNEFXSuuwW",
  "key24": "3mzzzaw1T51GuvSeapkVDJ8MNpTZqcyimeYiQfmzAw5gGwTra4io5JJefgXQgzqBYZtiMh6ZRTgQgyhUpbhVTV7j",
  "key25": "5hk8qoa9yBy9ghAw5wEU7jNf6Re8AEuijmJZGxMcC7CV7YEma6SNfaFCwpDH4Ewjr7HndoYAMX2LH8Bu2fRaF5XV",
  "key26": "3cYU8E9myKVW23frp59Gs78rA3fjfwqyFJC6ipBJAN6WzF3FmfJoJpHCzZJx66hn6aC7YeQLNHvydufZqsAHAJzd",
  "key27": "4DxGohE7UNqZ15MvTAYTsSzxq4hYMrcgXrHGfPk1izEdt94mDnoFAWsLaY1FjtTYiXNvnZp2xT8ZhWCDNHqhKoq5",
  "key28": "2VjFmqGu81DFJWFSaUVYzqrc7bqXHM2Pn1tf2ko9DxqGdvczQrLvdFNP3GaXpCPgRiY3eBFoycizHDiTaMnzEaho",
  "key29": "3hSQms7a2mPbH4hPK55ofVNyMBb1wXNfjfYTAeqwmYnfLx2Mb13qq2kTQqccPqaA57nawtPCT2PgfuSB2MdRpb6e",
  "key30": "VfEHA2xP82rTJjNKKNJqWhM6ZE8Jyv6VeW9YFiRMdWYcFaSHyhZ1XJLnbBa1bVwR1kuMmJm5ZQmE8WgfX2p9iHT",
  "key31": "5L1erCUFS85qTQJx1UEgqTmKwkF1xxRRAuMA3L5F32oz4nB13nhtPr1htU1DfFPhMf6WGZocqrH5sLAXvDc9ibop",
  "key32": "51hsZpjY5phhWPAm2BHuKkeeCmNgcrGmH7ypMDRsL7A262y14idKcRATDHfgaPZgWNHoETCA6VTYMaNUZEtQaNor",
  "key33": "3m24enK22oPg4NBarZuE5fHaRfF29gfi5fDbgwJJHnANhheyJFC4LJoEMwPyUae7pFFZ3u9gJcMKgf5AwuRRhjsV",
  "key34": "4aAxB1TUDRYLpNBeMjqLTp1oyAtc9HK6WqCTmifZvvnS3DWxjujcud6dA4uNGew5TuySSJAFqX8APYXtfmG4kLc2",
  "key35": "2UfxVkwyiejtpt4Wkn8JAECkf4DYt1kZfNDEwKqVPRisHfsZu1gxLrY1ySTSmEcbjemY7dA42fi4zDuGvKFLibBw",
  "key36": "oWRciQ8L8bLZJQxYaXK9id3oCky6KES22dd4TsicG5zH4iWMN8rWJUAv7CF9mKXxPzkMNqw2jN7RyjSyjLf9uuT",
  "key37": "Q6Jbjs3aEpgycAJ4wJ76NdCYdnGzpsc6kWS57QMX7gXa1ga7qWAvYC5JYH4SuQ4RXVR8PYu92ZAanavPtbyVmbF",
  "key38": "39AUFmZ3X4jUK7EUdRu38C8XK3tXTkHv1vikXq6qsjhne1a9ZHKgkp4w6EicUqawF2zFtuJSdVaqQQXJqi7vf6uv",
  "key39": "5ptLZEQGMFVDVEc7EN6AeJYfUPYmEZx2fPDBdwJDKWeoEPC95pircboezPA3GEgoeMuqdtwSHyLyEbSbeYqPDDSk",
  "key40": "5MwtZvebcW2mNhd65MWXZH6t2Z6bNmah94EiRrcbG8T7KQ9Z5VBdoNQ6vQ7xAezKvzBgpZCAcsbrnZdW9RDzJUrW",
  "key41": "3yGCmj8QinWbykRrgrRASbvVqNg5puThwJVgk2a2PhotE7w15Uaingxk6K4qCvmE9pDb3giAJzQMhBNt73A57xUf",
  "key42": "7HVxXrnAUmUDz6M3hz3nWjQhcXJarhVwYaGBWwhj8UrWm7ans1LDcxUTN6WdSrsxBSAfCDD72FCgCSnE5t3VUgy",
  "key43": "4Qb55zELiL2yUb7Ei2LJpLhShGQAapahCWitv6mxtZRzjMkbzn3agYCwCTeJiRJM22LfvLkyjDpKyZncoLfRd9vn",
  "key44": "3PqJihFipgjc5Zow54Wsq1JxPpFxoof9jf9gnupFiJxeMFG17TkGudG5f13HA7C5HHH8S7KiFcaK2WfndbYnJVVe",
  "key45": "2PndzMnWa4BDufwzny7jsmBUak86xi1gkMQV7YgrKEpeexRJBiEP3SdprMhtMYkuJxZzptNziofJCEwUvCJScmej",
  "key46": "5DUU2Eg3yuMkMZeY6B5VdYUE98H8jprUXbaSMFLJhWtdjwAUQ2w3qQdrGEpAJkv72PtZSbuiySzwJQFYyibVWHec",
  "key47": "fXCvD4NHMRY7PwqTxosrDv7eyycdxT8wEUxBnD5EWkWQEza8ZV2XKsx6fpuZGPxqmMXybv2GLD3Abm7E1Q9cgp5",
  "key48": "4FsG5kEqS6uqzhUgRAgbx6RRTKSt4nGZQNuPJYxdYo5AJmpEYuRi5krZXvCRpDUw1ahHwxbe4t6uMu1rxrFtJXLq",
  "key49": "3h71CEPBvVyTR8KuZZw9Uc56JbLnqUmnds7s4x5t5qT1mDiRAeByfaH1VaSmx9QMowoiX5VcTXauZsTegYunhxUf"
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
