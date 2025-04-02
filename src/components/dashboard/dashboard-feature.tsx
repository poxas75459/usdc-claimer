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
    "27kNHDp1Nm5KjmFFNCXpWo73c91erAyWgcc7G63ZA6nQxQBq843TcR43h3QGapyaRi7EdPwGeHamYApWAxVzcFXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47efNU6k9zsCXEnPgC1qJq6m1UEJW37qz67XhgoqS4gLpirQTqhwsvXxwzfvpvEMzoefmqAmSApn4ZDy7SQbScXC",
  "key1": "63sQ2JvxyNfzJFhnpGGJJ4owEqb26Vdwo72CDxzCe1rKDgcwiYJkw85WVNN1Kw2PfGx5dLeYv2EbD1UeiX1sckG5",
  "key2": "ADsaunENam5FHXdKNHr2x6hHX2dYGmtopnsnAfVeoMywGzKp8ypjyHy6hUHpfD73JNn2mPrsV81k2Z51LVXXUFJ",
  "key3": "3DswED5d3Cx8T6bSkhVJKt95tJjDFWik5u2S3xNesz4mr6VYnqCZ6DELYNaK4JrPaM8qkpJ6epqmyyfHvvRxuH25",
  "key4": "59KyfLPZYhmkvcSuY1vbcfvxikizKfcu1rxJMhAAFbKj8tKxk4XoNoJLerH7sA3cMg4TwK3V75JGMKAYwgKCAr9j",
  "key5": "3waRREpMJSBw9xPDKPewyLXcDNXsf7feBKrXUCK2Pg8oJEqJFSqT2YTo8mPXcQtYzvbGpVUexm6Z6BgfVmgZFdJX",
  "key6": "2okaGwBSg9LL8hFqczKCm7KF3wqPs5FbUfTCKgWkc2UH7LvbQsp3e5dMgyRLgLMYhc9hJiA84UV71b3WfUrcWoWh",
  "key7": "4Zf4J6KrgQVxfuKJ3pmZ5EVaFC5Ny56tBYcp5q1R5eDTvhGAv9ibaoinM1yE2RpoG5J42LZSHtkbfrjbkBch5C7P",
  "key8": "5cVTyTAJFDUrRTtWdCmbXhV1SpjxvNQXUk95sBdurtWjtAr1SWfVcZ7nC7RJbzw8fvNeRoyFbe8bdJvUN44s3cfW",
  "key9": "3v2ZnRyAdMSnfDMvgxdyZFhKdvCmn6iskKb2J3Q3H6zxY9WGrCZjmZq6W3AvLEE65P5jTZgBtFHcSsGTMU5EyBQ7",
  "key10": "4ud3BzJYSkLzBkxXnr8ZLAAqstJuWiRSbuou6VD4twGPEnpWRFtMLkLMr6FywRoshBY5qrnHGTqDaFPxXMtbR9oE",
  "key11": "5Y7bZvZ3x7BwKNJVEVgJTEfp7FufzE7PrYsR45H6gP8LsNSrbCLG6to2vAGn5j1tsXyPpV8TdiN56EVcm4CxJcZL",
  "key12": "4exRFGQZ5Hj88kMjDAjGBwd63L4iqLJkBph8HqZT4fA8jt6CWeBTDPwzBT4XrV6Ue4Y1K4HXkE9fy5DwYuHbqCCZ",
  "key13": "61Kid4otPaJsV2YwGCgwfawtegvkWsV5L8UebnMyXAa61dx7VUa8zB5sjusNwvyCfcKR74cyuhH4XAWc5BcekSXo",
  "key14": "2E3BfQnWKKwwVMwGnYN7U6yKyGAUHYD5guKTJbbKyyGPsfnjthbiTkVX6sAQZgYmosG2kbdsdjDtuvcEZjUMUqZc",
  "key15": "4wg7eNc7HnkJEF9qXZ7PBByJwHmjhPyyq2DYTLz2wk5WmNmPGTTuJKLrvUa68EEAJfrwNaTTvj2yigGd6bZBuuVh",
  "key16": "5kWTnwEascbV3KAPXrYpHrhQgbn6442Na7qZyQhnEfwAC8dKWYrxkeRLXggsMx1oLCfSny6iJXR9SUrNj2AiXpxs",
  "key17": "25pqzSAVJrdETktMdniEMK44F8wF7NMivMi7o2VBoPxjwP3fhchXQ2gBwqGGmdgQkj2semk5n6QHqbrVMKmsfyyi",
  "key18": "29V2tNJrXC7nEorMAMvUYxmX5AXHvTLQ9eDA8Am3muTNRrmDRjnFdiWyVtHspAhkibzvgvgPh2VTT5KbdTzn6Ci6",
  "key19": "25shZVFxyYpHp15b94qvC7jndf4Y5aUxCxvqb2H9Sjrof4iKf4X6Rkw6zdYxbctqv6J3wSoiZEroMuo1kgeiaAB4",
  "key20": "29ej9BZCDZEwnHyigZF5QYPMG86iB8XxvE8z1fNgh9K1gFJmBB4r4enCqY79knd9jvvDLHgW9eqj6dPr3z987rvo",
  "key21": "4AA2fC1NYiJCR8d77PXczmX5ZeNe9zHSF8HRP2TPYL7kLXC95BtFmKLhfkpYHrfCi5WKGH31Va6RV8NeuKB7Es9",
  "key22": "3atcW1L8cqrbmkeRDdnM4zQRuzwsnHH21LoYd4rytvRbLTLzoMKK9ELu7e6aDbQ88dmRmn4nS9tf6ZguopBRMH44",
  "key23": "4JRHZD24CLziYXhZ1fShs1h6sUkt63j3GbXaUedXXXFmm6ujKULSF1q4pr3pFtf11pWY2Q39XZiGPSEaQfdbh2f8",
  "key24": "3FwYxmco6nvaxsVG2dQKL7pogz3hNw8uwThFFjN1aibGT4EQgAh3cosS82tnhhKFcEbtcMz73o5Zav1R81njtC8Z",
  "key25": "2HMTTzrYfLrS7MpmuJ3Gz46icf3SpYhPqYP6qtdi7HwFrnn375xaofm2yFT6ohEJaRkcshJWGCd4TCPD4wSTUZZY",
  "key26": "MQVL7EL7VYdpFSWhnaQxRdbr1sX3m9BGqjikMohnhD3SoHEkRePMe1CkJmLTg4YVJsh9bsgNzNTYZQCupYL8j7W"
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
