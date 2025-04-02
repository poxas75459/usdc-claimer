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
    "3Ged6ytbjinhHPCkMWRLWUofj5pUDzxZtb8YBnz1eN5AHRn8Aafv7XcMqYNnuGLD5GMqZagoSSnagu8dmgnB4d84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45KWLYk4eDHApR6rCnPnsfWpQT8qMGheGL6WZCNEd7V5HDQwkACQhm7QiF6qRX4LPai3k3tdUMYqVd7gXuo4fZ9N",
  "key1": "61Gh36rqW3AMMQg1vNL4yYx9waPC8U4xatPBShLt7d4RmK1VznhfysigYGnZWPnuhijjDZoCCiTxeh7Upr6XVK7o",
  "key2": "2T55HC5Rufn5VZZyv3iT2RJhEuXszFcPzo2z6PL3SHxVxvSeTP4CSKD8PSfcTd98zn3GnMumn9sNNhxmDZr5HDyZ",
  "key3": "2gEdjGprYuzjEBLnZdPCx4V2mfyCtKaGxUE65FbwjFmKGdvfxCMArezhEQfrin18QVDChKYnQyXrmBd1Y2v4Ccfg",
  "key4": "zZtWyFV1yDDLPYjyZ4jDniWcMbW769es6gdVbboa7EBJNxqq154QHrXaLtWxV17wvssFFkPzC9xz84gm5nB2z9d",
  "key5": "5AWy1N7pgJoJiuuwTtZwMoD9AAS11WMEpYzDRnvwdQvBW9BkpmAK8MpZW9VzaTqDz9GdvGbqHzanverHHU69bqvg",
  "key6": "5ToG6GZnbS3rdviPFK6jnmcSUtg8L9f4J6p8YNxe5buSgrr49mnngG9L87uLRhriL48j7cTTk9r6UDBvpwtRayDr",
  "key7": "48H8cyVaZMUiJ9r8v9NvkKoXLJTbCnCqKRUNMDYzM1xgvTL5WX4vo8fdj5GZfECs81TsgvE3nuGN42np8c9GZyxB",
  "key8": "5DnCVscQjiUdfECWkpgFifwE8EKSS29wvgZ6CyJp8WFv2Gnx83Ssp1X2aqWhnqqZYWdEWaadufgUtrU6dSZarV6f",
  "key9": "5FoMJ4TNvpJ2St6H4Q73jdaxn7mKuA5huYSp4EGZY7r6w39B9QTuJBpQT7npfrYvJ1FDqXK2tXpUU3SkWK5ntSjo",
  "key10": "2umpMuh5sGDN1sXjJ2ZQyzRJyZ9y7skXvB1Ya41UZ3EypYmQ6AVG9haXkEF5FRcjkzPiCfbhgSdzM7zaSwV8E8ix",
  "key11": "2nmxMBs4uM1yrFTQcPfU969XbnJPSvKeRgJagGakTsDHT8zxtukoZzmHGZgLSx7NE1adGXL1nhicX3GQPQ5UT4iT",
  "key12": "4z74XmtKgxiJpxeqc9gGwZT2ZZDvBzDJfrfCcBPVgQrtByA5s5wQE8uQ4aQTDQZpqz6VXbuBnUamFZejtbwXY2Gu",
  "key13": "4GErsTJhtciV2CgVZpRJsPSuGbx6cdWLQm5vGUaDRcswftfuYM2ZPsw1b9P5AX6zp6ejeEAMeDwEyJBxEQ9Kryiy",
  "key14": "UzKcetCsrLKbq2VLvb93ZUJjHMxTzkLX2P2cnz7z3kHq8XB4ioN42U3JaoV1A8GgBrqkXpoxTh6c2usfbwpTGdh",
  "key15": "4tznLyDyDz4wSDhUhdWk6h2riEeJ14UeNy28TuLkEKV5JSAVevb3D7cmSY8cxuQDd6xjTeiFrAnczHdgS29CQSps",
  "key16": "5NVLBFdJ6aXZAWjNZQ8Cd7tSKxdwwGV3NNEBpLZWNCiynPMpJ3BauWKFhFazpwD9aHbKojrvBcVCc3MTaLYirQzE",
  "key17": "5jG9e7wt1pZZXEFt6VDX8CQ1kn4dPfjHZEnWgsvPQgUdJ2dKoVa2SfK9GipEGgZQCq9f2hgjH9eMg4fNFLs2x21s",
  "key18": "2zDUpB9i1wwb82vwFiuDkHtD7QgcbumgVhQmapCBAKju7DE8g8FFvmh1nopJiBucsvaai81GJhHBMqUdWhnTKJ4d",
  "key19": "47zM9waz8e6d2p9qHKjeEboVTP5hYETejDzcGL2R7qoJ4qDxwagRYxnqXfB4kqR4VbAT1g1WoYGgThotL7LZhcCs",
  "key20": "gCkKSVxSn5QXe1kjTkDQaVfeQXCW8F3QsafGkTDSnAM5Ttye6MayNu1xxFZjaQ7ihqUZB5zaCWzpykQBCs6yX9o",
  "key21": "2koXztJzBDw4Jz54SW73iVKXvVers9xrrj1rkgmLjVJyF8tG1zgRDwRZUEASXR8ahCkaoaUrrWJM8am7FRyL9cTj",
  "key22": "4DYCTT8QsujMmdWeFn3hHfvFbXkJF7t8DVKWpRWajKoBPYp9zCHar7VhRkgM2vuHYcuSvhDHr7JNodvEMaGuudkR",
  "key23": "5SE2Ni5SEdaeCkpcJunias5N1z8UYxrHqcANp811itvz9Vyhfyrmg6VwaiNAv7JDF852ewjVuoMzkf2SDXtqiBqp",
  "key24": "51pg5ELoiPQ7vCQuDjeFXDt4nW9iDR9hrZSXYdM1zDGgd1Jp7jcPXyLKm9e7VQXnFH4s44bSHFCWcrT4rfiUUsww",
  "key25": "2r97Q6Nh6D93XSJ2YQENueauSrdDwVvK7Dr1UXViGpdifos2s9BMM7GDVyFkddDuVS2mPimqTLDFfaQCQ6fuf7fd",
  "key26": "5w6qAGWcg61gHubD2HGMLdADnkPJkkgjtd8YcmSBB3QrMZyJR2b2mNnGAt3gH1STE8vNVJqoqPgrVMugC2ddXLJz",
  "key27": "23jv4sjXmS98kZuN6vELKrLT2j5NW4F2vjuhq2ZayZWRJKPxA9iuzxTn1akHvYeCyCB4HK4Hg34M71EEfBJunSWa",
  "key28": "67n3TX6DxmwWA8nN6y4KvQxE4s8EkfeaEPBtTr4ZjcsuyfHZxroo69QvANbuWJwpgUEMDuaRMMc1S8DmWzZdzMSx",
  "key29": "4gMV3UyuYBZLZf2ad26haT1T5TLTBgDqTvDW24NCbyAu6h7fikE1723HK3znjoZQDrKMWPdt5vNU3bcFkPQ1AZZC",
  "key30": "4SjjiS9pioUBSHQUaQFLyX35Si7VWiHfmHALFP5FFu6o3w9SBLdXpq1dV29hqaqcWYocAHxKiJwE9mUXguQ5MZG9",
  "key31": "4zDo2vwJ2hH34ogYRK8b7drYJ6QSW6rL9ykCsP4MxuxaxFxCdcD5kEY9KsjHewYu16GjQ6GZChPyN6AJzdFLtJzY"
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
