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
    "44CSGf8a3YHFrvQFdhDKxCStFouECBGg93tU2xGHcetnmNguT7u4fh1VqNd4r1nBzzofuawFVuMuwShjrN37zvFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65HFbG5kFiQXTjNSdvopA1xdDyT7QsvSaCchWicQ4hrqn2QKCnyPgoQtFvrAoWnwcoWGvzyVPSycX7EdoGrtAJef",
  "key1": "5BtJZ4zJXuPoRUsY4bdU2xAVpafemYVXd79RP1roxQJmjsQzgcBXZGcFE1tqUTqtycjag2P3FnVneqRZPk1CCWQf",
  "key2": "gD2eqGJetNmp8H57AfvAPEX5q1vgyrRcDtD13YWBrXpUEaeGtVRR1YLxajfyCCNNqLfYT7RFiTx1hCbm45A1Nsx",
  "key3": "5isXYsJz89AMuKGAcAsHBYXVE3Dz91pAiTFwMqKQK6t9r52KNguKsrZGxGak8SCWYYBJDeg6W4TGyeimDnnAYnrv",
  "key4": "3bQ4f6SRNN6D1ZHTJtcZT8Yxis2DqV8RzEkH3H9sTWyoucEyJfEbibXwRtt5aEAMy8FQGuAfwftcq6daG34vDtEw",
  "key5": "3LrVwvHfNKkzWE9wobHbvsvZ9QVms4F37t7v8pFn9GiUHqk5rg8ZaFVBDMyTa4e1yLgKZeJNRDmqa13FLUQXVztU",
  "key6": "4WZjNC14NJvWwBALvXZGrHLMbH1LzgSq8u1zQTsU16iTLivSH5dvhJ1JK8zc3rJdzShqE656bF79duPdnWLuk91n",
  "key7": "45EMnZfdf1h5psvBCWSqRKhTkJfBKX9xav81xEomgoTsEguPFbgkhb4u5yG7y9PagJShD8aeXTXMvj1ddv43ZXug",
  "key8": "Vo7rei5uuzwqyrYD3xYXioN2zz9ZZtCp7CE6wuJbogdJdAvvBve3NRr7NsfTaPg3fNY4ytHPPh5AcQ3tgADKm2u",
  "key9": "2bqk3dd1usdUt58Nxw3RwPuf7t96cZn7tweBVsPXJuiK7ZDUsCoZqrHGLfn9HbQkLiaqnDfj74QrqUKtSk7kh5Wp",
  "key10": "4EF7r7Qm6MJ54mPi7E3QgENjJsddXcftyWvHPwhnU6m3mUwXNBKwzhtnKcA9nvRuKoCYeeYLGH6dfMxPF5jiPvJ5",
  "key11": "5yn9t7ntL2hFD79R2M6bkWR3HbJknojU7EokLxwqrCjiRLEgFGW5iS5PYB1zxrLicq4P9mr7u4FmFTRVK8cRVNnW",
  "key12": "3EpQg4Le7EYu6ekS1fUvgofJaZbkytVhVBrvGxG47N22TydtQjs3SvYfGn3h8KEZHXKYpPjD3esXnVSzrKbJ5eB4",
  "key13": "64uRpCSv56hRNATmw7JqMX3j89SVFS2hMUn5SedRFbatP3Q8obfbJysJWhta7PZwQvcUspybT4RCBwaJw5A2m5fq",
  "key14": "36KLnB8gErSrYBtNNnTPS1r6kUyfqEPo5qKUqpuFHtryYu2QajW6YLJN1bwbH2xH24vZW2X3WsNHcEcYFWMPXy2w",
  "key15": "2NfZRsvqCDU3KFFzLaFq2tuoD8ZU8C7cm32jNCQMLs8eBqLryKhF9Rhpqw4c5cAVhAZ5z2c4qPnVTzrTTwKmGdHo",
  "key16": "61K3VbV2cSKQjDBeYqc7pDCNSAMjS6SWt6T7x6nrcmoQUrcLdVo7fnk6BcD96L2yQHiQ5txP6yteKBvTnxdLx97k",
  "key17": "5Rzvrp53cYBTini7xopZxz3mKM3KuAZQFSibSbdoqEErEXJVq1xuxcikYW8JZbuEQ7qTuUbwzQCtTr3mKBjbyhcn",
  "key18": "2rSvJjoTJcu7p2rpHjo35occMpzA6piooDLGbv3vGAkbh6JyGaDV2Y1UhZfEMwEesTa8iUUSsZkm49ZrM8H3zLdW",
  "key19": "2EB4XV1quy9LNBixUatrusWD43eUKMa4ULUQR5JUKZJSCq5s9tGVjdwerpWpCDcjsnH525ho55sHNz6s1DFm2ZSZ",
  "key20": "QEzzSWqCKcto9ZLT8LhNsapuT1e16fD2ErxyJMRu8XUogMxnvb1zDsuT2Tj2DPmKtgHyUWeaj83wWpCpNADivaG",
  "key21": "4o73LnYhqBzE9WXx5gPeU34fAbhwjkLzi2bbbFCP2h1LbvPCWhT8imSTirGKJbFfXs84fwZYrk7aGYQ7gTEo36Sn",
  "key22": "2bZMDeeH48guytSB1knJJ6E36d4WmFrWa8GQBfTfNYLTNyUcfALHLcrR2PPEMx5JgSPBYsEn6fFiC3ThPvxheixh",
  "key23": "3xdDSry8eU9hbX9XGHdyPrYZph9byrhMRrcBgRZkBNY7mtodTJkYY9CZdvrQWAfd31wtSm1dwEBTbkSc7sRHvbJR",
  "key24": "2HmkTeTM7a6r7srbxyB3SddiLkbwSYHnmbS2nJQXiHeXBWbsGy9LHWCdKGmpcqoxJJmL8HC7MPaQHRng2Z8WES5F",
  "key25": "4XZS8XjpSTNgopoaESCf3tRgPWuiN2Bdyzjxewv1enZJtJmaRUFSHdKX614xiAnD5zw4ZP2eKv4uQnXoWuJRvrcK",
  "key26": "3hQ6Dydh6HpUio4LiUj9KXbRpgJHK6PTzDjxm8ESQZWGsMknUVVtXEiJYDpe2YKVkPnHgVefdQLjVLLLK9XyJebF",
  "key27": "4hHKytbn7mnQPmA5JLLGUFCpuHbfNf8oFD9ZDmXoupkRUW5CePJML6VwU6ET9BdPHC3ey8kz7u8ZEiZKknXCYw47",
  "key28": "fsoxgozjGZg25Gu4KWFZb8y1SzqUBmArz1fKHQUasM3hAbpaMMxFtm9ZoSri3xY6Vs22bCSTMrfdCMU8LtE2qXW",
  "key29": "E9AChnZHn4XCAjv6KgzPDwEhMkxR1SmwRWWK3VKVDHpSkNfWedq38qu6cxmVNSp5p3PfqJ7zXfDQEMkjd1ZFaQA",
  "key30": "3Zc6Q55h5TmQXt2rJMBEaCh67U8utAXZoCBbp4t1hvgN99HVXqXhTaTCHnsyKYRxogfyHLeZeFV8FrxHQ8ShbRWr",
  "key31": "5yYP9e4tQeHnFX8fysi2AZ1kXnFpiwRvt53mXmB7MSxow5T6raCs2NX979B9xRD4egA6ddKV9CScSBQ7p4eg2UP6",
  "key32": "4QomePgrEcLUFcFCYNJQox5PbAJL6fPaXzgRkjQXV9eyzp2vAe6sUSwyWWmVhAh1RvDYzHGZo542mWAMCdEBXrnP",
  "key33": "2ScRyvhEMC96qR1eNsy3rnPXMqKWCZohkMmydh9Q9jViC6YgvD3PXhgDbNXogaV7y7JmKmrZCrrCw1vCAYde79nM",
  "key34": "2wougnxiS22RQg6UaazsLirasPFv6tXcakctLoosbCwTDTGANjJjM624BRQkLBKihqZZJehQppiqvTTj4s38TBAn",
  "key35": "4UYBUzCzpiWnb7nNJVp9W4Tz5F7pc5zeitsDP1CY88CJkbu8AA4ks3FtHwCVrJJDjmbsaM42bgsgTo2dC1K7jajr",
  "key36": "3VmDQ2YTJLQzbGruFDD5dnz4wz4AqZVmppMmaQXGkoZjsPvhKURTNi2x7gBGDcpvZHSkvg1r9Qq5zBBQwnWKQESj",
  "key37": "3rfb2zpnmiLgjCLMj1pf2FHVPNvA3JTSPERC5ZoSaNY7TsUyWWUk7y4ouoFMdfu1P9ove8X6GSdReGjoH8uzLZgy"
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
