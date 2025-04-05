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
    "3emVGyEzSXDrDsM4ps533PeSXMWsBoHWw4yZ5foe7dz1A58SJi1unPwtJBWSPBZbD58ySrLySUv5bPARdAf4VadW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MAAfc4XnbKcrvjFhBMi11fDMw9qJWZ1Ww3yULePkAeXFPYLhEN5fSr7yAaEi6hvDWz342eR4fKFy7zDFNSvRwxM",
  "key1": "4LB9iyhXRQxhBpTCV3GYvy2SLxZABob3Y9qJympcDtzx5annUJg4uuXWGH13KseXsLvHCGtjbKWRkMFhc12AMZcV",
  "key2": "ddhr5WsDgYCoCMjpRcmTrC6Qjhunooz1A28q3w2ahCDTTPCmmygo7QbUbiLPJ3dQTBjjGJ7uyrcY1142Swe6gwu",
  "key3": "4omj5VXvrMaxVHEq6aELZ3KkT9oh2jbYR1e66PQ6ABm5ryW5SMdofAzSr2sGTmRwwJCweJFA79XpZYhSLSd4GK5T",
  "key4": "3CX8mJdGmkTzaKjLoQ8zA8r6hvH4HDsYEoj7PqtvFo9QiQ94gSkdE1g889SeAApy4gVwSw2o7dZ6JssZMPKV6WFa",
  "key5": "595NhQKi46ZVGHhy6ENTwjt2qLoopwqf8jFhKV6wokc1YhBCsAgJ47e3J7JxnQCYbQHCVsQb5Ej7zbfmZm9xcpcm",
  "key6": "5ewFWmfR6ndx4t42pRP2SxZ1QH6ENFXbfGrV76z3RUiqn1SK2Jfhfr6HyQzUSWhKaenq116DuzwbkAcy43ZwucQB",
  "key7": "2A6zA45x3hQnY7D23GpwochX9rFW56xCA7SbsZo31nEBeBY734X44o4QmCj74rvZkpyCSgwgSbLRA1g2m6LgbfLQ",
  "key8": "6748VVnrHvTGUUiMZYyFoRjnG4VsgWn5yLsmnDyXiG5ATXTy3xeYRefXyCtqXuK3sspqqiYT1TU6pr6mut7CKdms",
  "key9": "5eyDk5pGCtCNymqFfvWfRsAYphpaihXGio9paPQnznzTipeYJwNKERj3eTJcUcgzKBMGGJcRwcMwEc3LDuvdQUWP",
  "key10": "ysBVw25PGaJvALnq3dxmJRPp8Bsaa8jTBH5kfFbvoBtkixmWH3aS422xVVv6gUaZAYAo5J8E24AcZgZVvvFuc7k",
  "key11": "61RrHgvFXbBd1ZSmqms3deBe9HpxAnTmEyqtShvLzCNHHYroBBwfAw5Kxd8ZUN3sX7mYjTSDYrm75htVTPfVnxtE",
  "key12": "3u4DtVUsLkNrTRYpmRY3Ku7CHpyYwj9T12tTGoSxUj83PMVd3ncc4FowvEKjKqAxoALox4PzCqdKZHn4gzyeRx73",
  "key13": "G5ANfKnWNET8ZAzqFxZKN34qo19QtPcPThMtVouMbLPLGPwHk84VUW13dTzQGKu3SGQDZzoS4nWN2QtPZ3i3EWL",
  "key14": "MvMgziU8DGh8QHDH5xmqYXSprs7eiwjW7fXcC6YZ8RKucCgVXWS19a2y9t8MnMUGEBSuah1345e5jTdc9zmZ6og",
  "key15": "5KUXv8a5qCBVNVuA5LgL2e4mEPfoKrTrpC7u24W2zpQLGrKzURRm77XAVyzXTtd3MtJonMWzrWn1QXfUtwqSwrY",
  "key16": "5GAeHN5uLtHSjYU2xniyPJBYHySUHaMzNR6ZqSyTA7mQaNVAh5eJ4VosoTGKqNCgw5wbKfLzbsuLZQCb9maPZRvR",
  "key17": "bEJovpP2yDWwJCYpN91PYqpPzZehGNmkWAYKjLLZc9TnnvD7k9XQVWzgrFKR19eatqjCa72KUnACu3a9WQafMVE",
  "key18": "4y8LQvPCtASiuY74L3bWRv2EppyKpMyDeXzzPDf7XCn78maJm7DDn5CC2kFTtMSfhX8RpagPxb2rB1mPeGinmbHz",
  "key19": "hq1EMfnv8CaxbDoVm4uceB1vFkHtrJwyqJEAPky4C13fx9b4sNUAXguBVeoSYyKb3wxsCrLHizn4v7Lzj6Ck629",
  "key20": "2UDh3m6nTajWHgqxw6V5wnVEgEYahT7QyWAdR4ihw2xc9ffuBYjjo3wjkQTy6vava3CHqtBkFa7gZTibZzN2pQFx",
  "key21": "sQoqynZ9on138aZRECbdnCniWgCRVhuhYoyZKaZATD3MhBrwEQ3iXK8ordEYtqcUQ8CbZb697ZoJq2j13UNQBKf",
  "key22": "3HvDNCMNbhDRMZh9cAxmEtgCAKXzBJzwdAmgftA6SNC3iSZ6GBK2msav6hfQPh7WBp6hfL131MLQKWezECfr5kCu",
  "key23": "32WzPj3JSCgFNsguqxienMNBwXhKMddZVAs6oKYGnNHZZRpozPpvuZfq6JfvFGQtAmwAnovvUA1UmxDjMgG7W591",
  "key24": "2SkWgMYg5cjSqLppofRDMhBp4TJXWXV9YNPFRStvoNLpEKRw3akbZB5yLNwHJz2DfYGyPqk5jUmUXSKfLoTuY82d",
  "key25": "5UzcCDiygWHiR3ugAkgJunSDxTv957NWWSkCs6cW8LwQQrVCT4Vm5RHTze1sJ5w83JaEavqqqJrWc9tvbAYZ548D",
  "key26": "2ddx5wxv69xm8bYrEG9HC8xAT3KJ8weo8nygbG1AzzkkEYneCJSerpzcpF55yt26PLbgDmUcXVmwXqjiZm6sAkVP",
  "key27": "pLzZyJRSYLdfc2LxYi6z1sXChUGAQ31bb666jWXuR6qcV3eQ8HiexGmBArtKECAXynkzcT1VQob2AV4pHjkqzF2",
  "key28": "2e1ZcMWrjRtLDYDhdmVG7WAciVARdR7Vwm6tyVLbdwnPQ4J8gbuNj4QmU1bzYNaxrRUXEuhyd3So2NkHuCP3uvjv",
  "key29": "5j8guYL5xixg7xS38udsPCXY99Uka5Pzfy6c8b7stRVPenheaeTzGPh9r57wyHSF93AKjasZuSED8AHkLFiYYru4",
  "key30": "55LjA1gNAGRoj9WsaY614gXdxkzeUytadxjdjUmxL66Bv92F1GtUAf1wxmQVHtFbfP3EqRyqEuiKAf3243a1rGu4",
  "key31": "5Byvti3x6UjuDhRj4gVTZSaBNBuZgDcT1CyEN5EYDHy9zRgnqpLje8GdzWCkQsH2MEehbZDfkgb9BGQEASCq1giW"
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
