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
    "49fX1Ump8o3dxM1SLfvsfAQH2rox9dUkGjFAB9EZnVVfLkubkYxyzq3QErS8LKDYa9U1UMWF1QQdDd3yUGrT34L4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YxfwS8GdpnS3kc5nsqc37zfZaopJjxUcw7LqKWYjMVxFyhEBYryvqRJvsWmx8s6PJnahzcWnc9gsPtebzMYAWp5",
  "key1": "XKeyQV3HVoYwQ5kDD9wfGfnJo8tu2pmmwCszUb1AvUSqWWDXQfDTYAoq3tu7eK5BwguYHG3G5npYaJ1cp3MEPiV",
  "key2": "SCmX2wrFUPNpBqZezCVK5MgmL8nLojrkLTcjLFevGNUedj4i4e7NbuGJoT5m1HmWyvu6fw9fZw1H3KaNSHhJuhS",
  "key3": "5mCJStJ67Uy5Tps5TTMY2F8MKUbPCirwogQbRAnTfouMCdjV2AGQFReRS3ngBWs1bKFQMjHg1FUnfGJqhJvD7AhB",
  "key4": "4Z3omzKCi6RVFSoyX6dTEctVoBmaWCKUdsxn3VmKbmjJnd6biYVeQB3gM2sKKjMzk4VKuBsZqVD7D1WianbLAZnJ",
  "key5": "2imRGAZCsJWYkpgzj8MELbdDPBotjvNtJNXtnJh54nTdYJe5SZN4zZuLvBeTC7uxWDgFSCVKCW13Zs9qtkCeznxj",
  "key6": "2Xd3rUFsx1CnMx6JPP9pkzhackMVSD2Bub6c2puY3dNYoVFmtc4Ekx4gTFdoQJo18eJe2forXJrMK58B3op8ZxTq",
  "key7": "3Pmooop4J58r5WmDUFY2GCx9mc8dMNPxeRvSw4mMHcy1yqeNTEc4rqH44NDgKLPdq1HBGF1jbvuWujwMmx2SHbc8",
  "key8": "2gDbKDbfzswgL3pCKY4LUfuuyvrFS3dJgKyftXi5gQXh29phtF3Kt5Eei3zQBeUtjYVGVt9sXGmCS179AZmj71iY",
  "key9": "3KfbA2twmdfWHn4u7eAqa4zpXwsWGb5tRZggdEbjgRffstV8nzacyWXdkEDwrYTGeT1iKE5MMGnTMd4t8Z5s3YEK",
  "key10": "iEKhxitYfHWoYqXYhqTGVeLbFFwbk6jajA5gwy537fBuef6fY27TnGdTZFmqgsZBY63HtEgBzjRck92ggNuRAQU",
  "key11": "4QkpBDrzVxp4MEjfBEshQNkXVJB75nquXSEjRvfwUCMiJKCTpESBce48iZfQmfMvERBgCqyPHT7QF2doF2ZDYMUe",
  "key12": "2Q4L97FwgdDJ6Et6a2LFnZpPsRNgKnDZ2v9fMQXX1KtuiUcvUEBLAjxnivKuKUvggkyATJmyFEwhrmNC2AyxDpvd",
  "key13": "5swavb3qcasUpJXFwPYkqQVMeDACVGpyoxnE9AjxwGQRJXvkEXj1fPu3FpaCxyWvDK5d5HhCvJBNZrbur25PVyw5",
  "key14": "5KSfhKFesRVe2E6NfKbiDCx5TpbBMT2bHvHwQkrtFGhpee4nmpECS1HBRz9j1v8o6KWQ8qY4Bn81MdX75nTnjPRE",
  "key15": "5cvGn6HHkgFH16U6KcyWbxyYVjdBNw9qsKmVQBmWvhDYsUT9yGKrZ5tAGUbgrd98h8RC7PVfSGgh8B9MqZtvCfc1",
  "key16": "4WxGuqHJQtiC6rhMgVpC1ko2JbV4sEPmCSt5yZEzuDZsvdNVwh2jq4G5CbEmQ2wRgJEXd98jY42yeMaWyhJ5NatV",
  "key17": "3ka4M26gXU1h21HHGjsDc6fAHQd9U3QerpsL4KXCiCXw9fZ8VWoXzRTwFS6QGpHwik4nUUqpTbW9PipqKvT6nEXB",
  "key18": "3BJh6ydekx4ZTfhgXzDEXc9NxHtKppKCt1dfFWR1wh2dsQCUaK9vCVz4aeSLE3LxFN4ewsdhSM4kzEYTCkUe88KW",
  "key19": "TsxXUnXZ4JumFbz4K3n8gSe3D5aprMBxkRpvMXia9hFNtVQtonCFBso4HabzFMDtNTvdPmusYEbmkSkTBXnnP45",
  "key20": "u86i9qnZPHYHv6dJZRZTgYVbuKNCwoQmXdvBr2nnEjMxq2d7vjPaLZNTunNbWc4ybBnRcjwThweCdsag9K8mhk6",
  "key21": "4fikKiR8ALwx3gFd9Lm52F1SJTrPjH5zyjGBwhSSqtBcuM6Czfin29JbgJZcBKKtpJCyD2GPeSDnb1gpEZyq6imw",
  "key22": "4Mzwq5UTph88T4asqHFSfTNDDdftLvfoJTYydp7pE8jZxoEgCcR5sdWCfSWfm6WPNbe33yrAVN5MaMVYfsP5kVnw",
  "key23": "4LSFHk95Nmhn7V7WEreAet775NPBN2Ez1319F8DS8g4hXnWgHY45LvD9EtNwekpphVeRAqJGS9tZ7PfY7gTDTZk9",
  "key24": "khqRjgViKu9uKtBT9GU2BuWLwfDW4pPTecocMi9iQNfA58XzkgsVMam21gQyVwN4yiUr2p8UHEdjntwWb5caNMj",
  "key25": "39BEaLB5EFRGWEpnRj22c4CdcoDaE6Fr3qWQwniKiQVtR3MiyyaFzszt4sXNwwH2pydTJ8YuRoaWpESitUrSTvyH",
  "key26": "31g5NT5cTu88XXdNydLpdKLQstZUNoTeK8j7Jp5ersQcJfW64tTooEP4ZdZYgSyrnsDA7CvzXcyWaoMdJsTsiTGK",
  "key27": "2GUgj4Gz5qX7bwK4EGewXR9HQyrXhhWSLiQ8yefEX6GvEZjvGdxPHpSUTW89NA16t4ehaR4UkuLBeaDx98nU2qnp",
  "key28": "4aBLNArwbDWsE9xV8FJKLHwkhEADEmMt32BoyAUwZPfYqFLHw92e9zT6jrMfL9ZTLM98VdW5jMo8wuscGv6J2WeN"
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
