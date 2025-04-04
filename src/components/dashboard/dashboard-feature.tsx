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
    "2ZGxNpbuWoViuZHA62aFzXd9VhRoeXWSqDKRheK7K4GYdjhPg88n8b4FcDPJTmADsTjEcHHTNhE1r396FJ9w5p6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w4KTH3oyNNBuBQdzwmiEpjFhFJFmmSsk2k4QtmVXepFukPE23n6vcUDFJNzY3acxiWLZE5jz9yifp6W6Re8eviP",
  "key1": "4Eecz4KoEjtwczaMejiEYHFvYY21C6yo87JgErBLjKg4LjL51ArEa4FcK4b2zoz1ktf4BfiENexFMHPzoy1iFdw3",
  "key2": "5rWtbRAWGAich7scnmMpgYusUAc18YCDU3LCVCFTTYCqbHLoE4XnkBswp146dECkg6y3BPntK835EFYF4SKZHL26",
  "key3": "h7UPBFdh54XkxsC85J1koaYw8Y3rztrtQuYbD4SxLqUafWWEs6hXkLq1nnuHASSFUhqdpjCBMoxdnZjHX2ZmVj2",
  "key4": "5uxTuSZkdQ97VaXT4rtPAAqUPJsEHXnW3xHrECRrHdwuZKDEwiiCgSnxB1g6iS7fRACop3QtdEwWMywGhaBdjzA9",
  "key5": "MB8kGnhyUuUUbMLuoPLT4a9UxLmRsiSeWQoFEoVSx1f5Y5YSFJXrYUwfhYTEg71tvsGfeiAoLVb2ZLmFWRrDNsT",
  "key6": "gvGR5gi1qPiLrYAgb4hhR6H4sDWULjSG59Lpnnc98JZtUeA285oJTERA3XRLSjJbaB27C4ZDFKtseptFm7rEYhe",
  "key7": "4rMwRH1m2UMbrAd2w6aqCsuu6F52hR2djeNgvP6hAmXktMz2vz1dZBPz2zAwWRREfsLqap9EdCD8iD4XbSrKJS3T",
  "key8": "Kzx1CPAvCuvXQncC1fvq2cXw567GUnWyu8chnYyH2dUTdrXNjBEenUz2QWrjPUAmvY1819NAiRgE2UqfBpeExeh",
  "key9": "zrctKw9hCvUUScUqWVfsACjaDmP4K7F29MVmSDJmqZHbwtSf2bfpP8UEiD3XJGpLFsSM8GFu9RdieyMBBvnkQGK",
  "key10": "2W1EzVz5TJDhnEN7eYLCQP4hvx8JPFbF7KjophZTJFaJZE6iHrUsGbMbemyKTDTvMp7UZrvcN5fhx4X1ZS64nkqG",
  "key11": "3wgghxTWZMs6oAbi1T1xHYqN8PdXWdcJber52M2X6tGWvP71PVxL1FuUWtNKTpugMq4gnYCsAcQbgTaqwE794FYK",
  "key12": "2UVX11vt9uXq4HHFjQWzXTXwLsabx66gqQTZzwK2HDaYHLyQamCZ5z7p9RDvSdDLxqw3E5wCLW3TocLrtoRdH5iD",
  "key13": "5wERKh6WGrd32mau2EsgXnZfiKw53Crt638xaNEmdjNdaxNNAm22xFMv2ePnBVdaWTBvdMmBmrqzQYoSV7BPmdCj",
  "key14": "5pPKRxQ2JJ11WSHPK5CF3SB1KkdFU8Y1gh1cMb7rxcSDhXJhzh7tvvFmNbfi1SpHSMFFor5Cyav6y9FEUakPqh5o",
  "key15": "MzjRw5cX8NERpPPbHzFZvo9W3K53S1e4qSux3zL6D6Y8xzdbmgTCpd3XBmMDr88fnA3V1yvVAntJrBKMTYFAfCf",
  "key16": "2N2YNf2uiEuU5TE1s7XrBse7i12vC6C9fbg4WgWyMYpgMTyjjkmm9tEzCznv6rBkFiHfkEo4mpQPy7888vjfESYk",
  "key17": "3yeSKYSxuVfwV38a7hZof5LwhqCX7zWj3nukCU7UmwYT645WTzhyDsB3gcPtYYLdhbr4kLAbR9dXybwm7jJe1csS",
  "key18": "2BmtK6gMhwS1ZmaqnsYgLXGXPnLCiBLqoR2F53P5HuHGWDQ9H9XJR5pAURvRMwYpnJ8qZL1suRQfVEHBvqZK7VaK",
  "key19": "475kvWVJZE45LchVVgiZSv8FjuSEtjrmXmw4rfudDB9x8RrKsFM3e7a4EmNiMtnR2gkxRxU1gEo2qWjgwZYto66D",
  "key20": "5YYTpycxnR8V1Z1oLeC8hdERB8SfvDgASg9hdNNK2wnrPinaRqaXiS1kBJriWHgD5Qf3oNhSbLoUki4wGiGRNBtA",
  "key21": "5jEnBz4LXJsDAF3k7DrArUcMSEwjm3544Z9GpYxH3j3XonmxoxFY3sA36p38Uf8aq442AYAkKc6ahPK5uCHhK1V6",
  "key22": "4R5WzGtg1aBKx53WkLXkCQ3zQtRZeppWTb3K2SMzYZP9KPkek7wqfRztkuzsuRgsYoiy7kKZqSstbQhHBBGL6M2Y",
  "key23": "2kw4vb19ucrcry45Cxt32AokDaEfvqmcAynSgRy8HnFYj6pMxNEqWZVecaZebJnQeXpkwgJY2x34rPrSRSAgdGDr",
  "key24": "3bmpNcVjGfp3qUorpRWavmMn9gDkjFo9j31eriarwhgGVvSzWgRkuHAkyPb6xFMRWbv1tKwG6iPKTtrSdLxnxFXt",
  "key25": "4jfkgFv73vCLVyarrJZVh8djFSgHiT9QBoHMAXLcsRXMXnvQUdHaMLv9tigjAeJ5BVC3f17iTa65Jh2V4DmiQPFk",
  "key26": "263x2WxUDNvywKW6TX4R5rvtyuzyRRPcj3RpnmjaMH6dEk76nJ1ZDertAWBwZJtEbMQN4v66QvkUNhJqrWQSgPep"
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
