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
    "G3gUrYhpYxyupwXJjyhC26sL2TDjTzJG4MfNdAJnjvaCBEjpiyF3FbBFZ5UwH3Vx92AsGPo85jNc5NqBAaP5pjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wHKzX8Bz71TQgFiHYs8PmoCYGua8HQsXyQo8waFN7neUFtEB3UKYnaqtdmsgFe6sV4KRQc2g46L6VX49oq7RsGC",
  "key1": "44si3ZZzWaj6fa1GjZTcUo2UbpSaXhH5eoMVXU3zCVu9Q4L5J7Py4gYdxRDsgZm69vciHh6ycXqfyToTD2YGzsTQ",
  "key2": "2915enTWSK9NKR5g5T786jcQ5YhUT1Laf1TSD6xF5GijgFD7bWYCyqov6Md2do1zqeqUFVFypp9ar65DDSjyf5mm",
  "key3": "3tHaKrxdNNHUHZtVGSS7jSs63mw6yWizTai5uE6qG6o4s62194gdGUbRkWyws677xoriTiFRLATeCdbgzpqS715L",
  "key4": "2ga1NezT9y3U2CtVgcXzgFBseRY7M45fwGqeyzMMcK1W5deYKxR92Ywh77ys9iS2sMmcT1ZCt8s1nDKcFzQFRXhJ",
  "key5": "4Am1R2ax9Ai7cFTqJVsgr1TZ7kZjYYbLjaJ8LPG5LYofnf47PmQhLud2yo3SCgfBM3acorMt9F8EUnr5LTveRbAH",
  "key6": "3PjJYEHAvHUqN9hkgu6ZAQujovFGe5nb5RT4tZJBHdtUgk3syWLkbhh3uTxBbmK1ngwyqNiNVb8oYh4KAXtuGeWi",
  "key7": "46Vo7q58s6itLZYHuNtqxfvLY1oesq6KNh637tWjgyKbTCfoggmEUVmg3jc2WLRsPvQ4N8j2eHqDq4VbfZSQeFmQ",
  "key8": "EGPdc4eikjuEXG22ySwDDXWzeM82bbVeX1sk4Df3vhVprhjuRguAS9CbDizb21ripwQc5AgMUYTVdqzvnsuq2Jp",
  "key9": "crqcyKQUR3Mx4xxN5BKaEUWujW3TtEUpg7Escse1ESU8apUomZpcn7bfUpRGCm5Lg52UUnWByLVqSKbfVPjMUDw",
  "key10": "3KFqTh53RsJFQ4ZiMyw9d4NBbjbLuJdjwQFvnCS5eLoRZBxrBZPcVv5fYqyUaTXvo6Siwz5tch9PDVNdayRE9pwq",
  "key11": "3UELYrW6oo6WYMbYQGnSyLdqqAfWDEk2La1YomMFv1pWrxA5dH346FX8AHUYYMyPUv4cchcfLnJyc4r9simVWb7K",
  "key12": "2NXMEZkacFa5QBdTJuWBqnHUxJgk9JLz649xRJmJbJuUb8feraaxYUpGMmKnoqK48WChX4eXxwY1HMFzQBMvD5ce",
  "key13": "5veEXVMPY9kirs3T6Bg7MWm2reTFucjSzVA6pLjCW9WyAbX3t4sVXCRmC85i6ym7ffYJMHz5ZRkB4qjQhJfkRaEg",
  "key14": "xqRcypZmABn91htDb65U5h9oDSG53h1x9ufHhavjX9YTPkR1rNnNqAdLQZZRFNzDcrRZ6Au3UfuFPnHpRcbBG3N",
  "key15": "YGhPjtLEySF5m6YT75cJ1BVw94t1P8bmCTTTSx2WxG7aVN1tgnb6FerLh5Zrw6WSoV9igASnhgmV95qWJ8AXKQQ",
  "key16": "4V9WYc26nCMV8TNw9KCZsJ1zCbcJrXZVaNGWRmPPr4EGuUg5zMYoQ5PG8xzzFBpjaGEV56k94NSXbDjqGqY6zGjL",
  "key17": "3dqinio9RHhYaGJUwReBSqncECJZMR4M6XDc5Jv1tgSRpvSvBmW9iv4JPNUKjmJ6xu3mCBgmv3fLcevuvBtD3Vkh",
  "key18": "598hSvvzu6whQS1dqrLEU8BmzHaVtE3sUZZSycMeKoA3dMpuDzYpMvgAxAS2cb4hhCdeni3gD6Syt1Up41t5Nij1",
  "key19": "5tkL1YDHBCvBfM2PEa2u8Y2JqDFQh1xtu8rdNd7ZdNQ8fn1szbJjWrxw92xAL162jUahC77ZzbfnB7ea4oMZoL1P",
  "key20": "58borW3iSoJ666ngfVFTcirFyifNywQUVSDCFGQycHvMFTcTmcktf8pZDWGT89SambodkQCbGXKBahBpaT1HHk2d",
  "key21": "47b7YQhGMDKpp61eNfZ65wbDuUCnVVYuc8BTXMFd1oTQhnMZWkRwSS1oZvdiaDYDfAyEhB1rUMeh2bVF5q6M75MV",
  "key22": "bHpqwftHoSMPTPPSfSHT2ciSG2gcD39tCA69SbsgEnhZQFqfq9sc21m6sW7fW9TAYuwJUcpqtZtwf9aPXw9yvsw",
  "key23": "4LReynSQ4cWhEoTMNvb86pwxdzwnAjetUoAJTGRVz3ajR6dQ3zQcQoAsZgafmdiFX6Mwf9wTPGZg5CEarLbW29JL",
  "key24": "S495VAFAcZKjMCtKX2CXq3nbLcRxfDgzwpDtQiJCD6tQCmL63dYb9p4795ernXKvQqCX4v58ZCkBBMxhaieHdra",
  "key25": "tLZgsmtJUaacEHf7u3GmYCmJXz1chj3pQzG8NDAjCoG4PPjqpePTyCzEjN8Zabz23FcaLEG9meU54VqzZZtRZhY",
  "key26": "33zpw67fwYT6okaxggMnHAsntLuCkwTjorh3qS82j3CnWcHdmu2UN4juWXywUmZZvSS85Xs7UnP9oL6H7ipEKUEK",
  "key27": "5pw7XHDGyu9uNz8TGp47dJHXAnCUw78UiyizPHktY6pvXobC5CYWfHDqNoChe2Kt1FZMivmgXFkCF2XaKd7HC9RX",
  "key28": "5fp9T9DM76rZUEiShDKsG9JQUSpRpsz1yH6AhAjXqdHH7gt9Es8X6pgovZwgn7b5h7m8n2pf3tVgSvmJdLohccdY"
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
