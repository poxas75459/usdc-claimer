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
    "4gEcGztLV1vH47EoGHoF2R4Hghefo6MpHwUPWcfrdGf3XBo1P4rNjjqaKJsUwYxug1rbd3iqNqzTSRSsDx8cEF6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58xBfGAfn4aNUcYqoi6gnL1Kt5GtY8pitA35Xzfau1WwCnVhivjowPbEiLLhWk3CoqAbph2p7tU199V7ujiZfBjM",
  "key1": "43yxAz464yMGMfpqe1X2bC1BjMfzYUEg9oAfBX548UGYG7NxV1wwaVmHsEJWiwkQSa1xXpZXZ8N8JL3YFnBYMojV",
  "key2": "3EhfpMtHLSAz36GxKfkq7qa1onqCtpRRcEvUurPYGdZtokdpZkpooVuLhhMgUMiC1FNi6zh25mPyvxX8oFAP539e",
  "key3": "3T8vDUoHaNv6ZBHEp6LQ7mDDtwdEUTrPg3LADiXfpHm8dMxnYhjHp7c9kv8EBcmsWfsPC1FU8jnrj8BkqgAhko9i",
  "key4": "2Sm7mFfoyyDgAR6a23v3vhGyWs6JTFkcoD9upcKRMWqSkUAXxUo8LCfL9DH1AerZY7bCzbBz52Qm8npsRnsYMn1C",
  "key5": "3EmaNkFnHabpVv5woynWB6W4A2Rjuq2BukAMpGJiwwbBUbC7zocj17HGvhDrULzHuAA4hXn7StTu2iHSHLD6SE7L",
  "key6": "5BBkWLJjXhfXLSVnS564C441jFa8Y9EKPR6XG8Aayq8v6BH4GYka9ZmVRVtUK2ZTNBkDmiFSPAKeFn5SSZCs8FCX",
  "key7": "3MWtoXwyomUwfbdB4Lvz54bTB6SPqtyNtFukuy9pvQpmtA6Ej7ADev5WmSMpDL5dA5ffmG4UDt74MVLiAgYcUMtm",
  "key8": "4vgEq8rkG7fmtMi5NoabmJpVqy6h1RS6ejU25LDUMfK2vCaiZ8x8jXJzbFLp7WoTkBrL3G18nNYvop52j2V4o8Cd",
  "key9": "3Gnem7FeRYNxEyQakRoz9D5J9pnikJU4HJeo3t2NEgpPhwDL7eb3wJM3DQzdnVxDjq9WseECp9NRWGnTunbgXzUh",
  "key10": "2w45EkN1EYNmVqNU84saDiFDhz8tgABbUdW7GupN5SzdJ9BR3aoMmU3RB3cBwkrxAfcRMTxS74cR3rzmJJFXZsno",
  "key11": "BTEnP6vjoWSgAtusHXHNeQSfkuxcT7toZzpeiR2F3vqjqSAyEW2bQkd7BGVRH9tGs9jNCjTE7gTRUBkfWq6xo9o",
  "key12": "36NJJ9QpSqsKEUiowfcKUAkRF5PLwp37y8GSDeUiLmZivQrv1jLFMqSmk4xBh2tSBzS1SgV9fw8BBnYEF3L9txn3",
  "key13": "fXChWVv4BeMhEG7WpshEPnEppoFiZbAP3wd6FuURQktPN3KHn8nb2WLYzKkmJhVAgTooxaRRQizZaDj4VJPWXTs",
  "key14": "3sd1W6cNxB3wjuVWifST4Yp8zfSS46So78b46U517CeyDpnqDFT9oEQvXTzhdTnyQwVirZxShkMbaRtghSEh5QGk",
  "key15": "3qq2cpr6CLqtcHscDFavPHnJuiWAua7Mgf1GpcAfytRWxxAhfYfGrVmasEQUB3tPu2KzebNXYXyGq3E5smuJThmh",
  "key16": "3wE6215icKH1LVW5F3W14VdLpbYmvUkfe7pmVvC1YJo4jfb5Zgiwy6Mv6pdWDiLsstEJCeXxCunoi65E11TLfBRr",
  "key17": "2pGg8XULJwRq5UGs6ktGyXqMbuFRD9wx1nzYL9PG1TCse7cbxemkis9x2N9TA7FD2urSN4XbksoQpuuPbPfzXuQF",
  "key18": "3YWuwraK1QTJHzYQDKyDWVu8cwy2YbFiCnwMwUYPYRhRA1xVVaE1kQNzQ2qhy3nKq5fmmjoF7gv7gRnEjrcFvU9H",
  "key19": "4BhSBGspsaB6LPBEREjFKPcbdKaukodsTxBiFZ8wVBLdNNi7ZPnt4E6QboMh6gqi4f7PwJeaG7m6199Ssp5Wbg42",
  "key20": "2NvKvSGS9Kvez7jM56Pei7tgPZBiCUocrs2Mn2CuZx2ifSe21yFQTVyXqLgKkppn4egtDtmjGgKhYshDJehjjxgT",
  "key21": "Xvhntd1wx9yhQCzVoQVAiR7B3Ttxb1X2iBRjzne71qouLXFFpUuK5M9fDZT3wmZ3RbQD7VJm4a7ux4yXvdoVLMi",
  "key22": "2G7m7uxw74iCiUp7s5sXE5JhourkhFhdmyKh6SoCgWs2xPbvzm3HZPnb4aPCPnXfAeuEQVACcZXVaBFyZBoGb7Di",
  "key23": "49jpXFC2WJUhfzSsLnHVYDL4HEnkTXouPepg4Rp9QdmcEJC6xV2Bnz9VA4PJv43UYbtK9B6F1FbZ7nVkRRC8eVM2",
  "key24": "2AXnfdFtVaZpSY8M1gjNEee3he2nas1TJHxQLSay28Gb4tyriaTswthYPkeVcpbJWWd5nXFHFEczxQHT21jZczp3",
  "key25": "TKW4LYMg9fy3oe8rmqyKYs8Yv5ep84dKvh6k3Vx7qYvFDvqPzddNd4fZAR1k2FQZ1sWXJDsVgEfCNpKY755PqnG",
  "key26": "2bj1m8mqChDrBMffScgtTdjCSjhMwrVJ3ZRzJvYFr3mqMcQeZL3Kbomp79joPu6EUjtWfw7DunjWpnP7JtVUkn9F",
  "key27": "2o7VrE5Uo2z65GEgJygSuGuwfGJbG2tuSCy49nrerjD5i25y8Peuo5LR6rzjvgxdDD4hfMr9K4Aw1Suh3NN9831i",
  "key28": "5Yq9pZBQ9uqmCNw5mR4GYx3pCELkbxiFntdFgeMpAR5fYt3tstU5kLCCpGhYfhYsC8E62Qc8N5mtiY8qYrZPvfpX",
  "key29": "5qQRMDuFMDbXgdTHxgyxFMuqo2BPfB9dZoKkLGRiqhLywMdhYpN2JABWzfVP8Zrmh2fDjNmAnCQy3Sj6miLHvt5h",
  "key30": "GdpZkDGYNz8yUBTfjcVKEAL4SG1STf3ZXmQdxiD8cLWrmqrTAdzkhd1Ppje8kTZxZfPb6rMPxxL12wRtK2pLDWU",
  "key31": "4yrNG22SzCvgdRd2WSnJciw3fZhGU5BcapxtiPu75PrWuibvWhHem3B53P7LuPi9qCcUEt6oa87mvjNzqK48ipse",
  "key32": "8DyhJYjAL1iyuAynwaix8qzppQQqWDnfTUGa7Yp2QwWHMxtQPLx8mhV8nxgMJzD9zQTJKfUcwfUEq4yr4kgv6jR",
  "key33": "3iCLAxru4igaErsMnwxcDbDpFmwCzw69Dedu3XsGKg1SkeL5twuXtsjYzW3xTsy5NqvxfCBoCi4kQj85oTW9n8Jd"
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
