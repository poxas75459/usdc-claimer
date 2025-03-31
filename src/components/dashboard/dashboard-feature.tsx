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
    "2e6rpB31BakB4jqDXfef7NJ2aNy2aFcqFXDj84wWtRV7nXhHXaLDEv995uXMZLGZU4UudyiXdwJZ4gYPA7FqUK2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xgGTnxz6r19usaqKrA6dsBqUsu8JCWGr14ZZ2JccjVQX5ksgN3YVKwzHgQ5e2nGatBJe53LtzMvt4PSd7XJDLKz",
  "key1": "5E4BEvqUUAvrKB7B2a9aVtG24Vhb1GmRbABnxPmF6vRt3ztHmqYuX8kY4fYWn6jWDiFtMLFwh942QkwMYtt51wTy",
  "key2": "5WeeGSSh1xBvR1S2dRJ5JCDCCn6rH9J3YnuF6wZL8yQBTzFVzAwXVXBVbEh9Mgu34wxBtGopDhF1BM5eDJaYvLWe",
  "key3": "3bUt1BTq6bQTKcSqMJJgRjsAqjhPMnNSLmbGhb7irNSuv8hCB228816NSwMMwsRucYi473w3tuvByzkR4MNvJ52c",
  "key4": "mTPpC63ZmqeDGxVHk2vtAXMrWQ57DbQL3YaWWJNXfdtaHJFpSSd1xw3Bcu1qj7qjvy33dHR32cckNoPJv1SSyeC",
  "key5": "324VEwGXJJ3afTLMTb88mpARVuitBt7GuzSaPMZiCNXZ1yrrYgaVTvMc8TGLyHEMxDtiGF2i8eF6Cgh1ZkXqaKHP",
  "key6": "2VT2frnmHQxn4M19PnaSh5cDtR4gXeotYZPm1muyDmwkLA8DxhS2iHdoSc2fisACPbRJZLimzBrJoxdH2m1n5JvS",
  "key7": "3MdT5xS1mm1qrsbSqNoNaL2pdZvm48xNKgi1scCR8CGb4R9rgdMJccMqksbYqAJ1Sxnj7tfem8kkqP4qSW8tKG91",
  "key8": "2NGwV6aYZCZhy9HPc7xfCHHPFTUWYaCiDoSFRw17mG4QRPqLiPadnXhwKBQ465yDe3K4i4QBKjc37xUCgssDyRoo",
  "key9": "3wSsii7KVYQ6MiFHpwmKt7itboJugRinZWxDXdG32vnH1B1URPdLzhxjVWL8FJnKMSdNngqPmv2AjZiZrQbuhdi8",
  "key10": "ZHaAEUpepqFU8ACADPPait6nJhmYujN9J7MaJ5L6QgWM47NFr3cEWm1SY4T9wrfbujB6SSAHG2t8N4MRU7pCqT9",
  "key11": "5B5WAKVmrEkNL6J9WGTczVCGvMuyBTjrqB8ui99WGZR1BfcbbdvpbFbpzZWvBy54ED212TPKn1Rfs597r6L7MCXX",
  "key12": "2DSWaRBG9rtV9DYRniQsW8yvu7MrgqHsELXcK7g6NXk1bCAw8DJdbVAgTgX4A52tzQZv3G2zhj2W7aPT6HwKBBmm",
  "key13": "2dE4r6fx4h5RFbQLvbkugBnQmTo8yC1RkWRoLzPCuxyRfPoW7oZud6sCTnA9QdkytGfYsEt88TmwavDahD6rZHXo",
  "key14": "5kuzRnrQUYY3ZmkUN2sbXG5nNTUGtn3K2WcnAQnFhvoDb4tuzcsHEycJqfw8xPAqVZU3bxUAhpcNqLxTRv42zBzW",
  "key15": "taS4FaNFSdgkfrg5pAEhDnbL9Q6x4QyJF3KA4aWQPBYFCYEzmXBhoahVffNfdvD6zAcyfPTakNQmAiD5SazYYFD",
  "key16": "qq844xYApgFgN8bzQNBdVvRjYNoYQKzbgrYiqfPEgCobrzLjutDvd8riEL2QT9q2ge7nEYox1xfNQzzKqyR4QFM",
  "key17": "bkHqFN9fgA9LHW2tDzxnp9NHf2JRDTVY5iUwC1X1twn1sg5wZRcPLi74Nu9dPRkuX3Rahqui29Np3KtnwwUjWDK",
  "key18": "5s9suszT8LQDSfFqjbBQnnXNPUXiuUYuXUiCn1sGkPdWrkrKaks7qEVKN7unEAveiKTmb9yEaQUdQWSKCa7jBaqJ",
  "key19": "ah99WkMcGvPAs3veRbjBG6HcN6PLPVQEfWb2BjYa6UVBHBGht6dBxnw1EvYnGrB8K65AkxoWsFgpu3ALCB5zdPN",
  "key20": "46rc3qikKjctvYS8XnauJTcbVJo6Em71tThHD2RgXtBdCQ6QiLiyqH1BphvW5Ne7mWZGq59n3D8Y5Hp8se7ds7TQ",
  "key21": "5tfBVMXhzv92rb2vY6ibL55FHTt7TVx9HobrEiHV837QmKGbRptAn2GfZ8J2174UjRUhvXdgaLVMo9pLwz6PcNnu",
  "key22": "2EbwmRpvLKT2B2q2hfxKtbqLU6wMsUDBPR7TbZQqHMKFw3yfnibR8zVmfpizKTbuw4oyCK8U3TVMTnxvULW92E5U",
  "key23": "2RM1Hg41LWF27ZGsjXgqowkBcDSjrV1x123Nbu8Syfn6hdsuHc2Av4z2XwGuDkr3SKefgtmsJUi29EaKRaZvWNFF",
  "key24": "4PmgwqeThqfFvQfqyQJCbezMiSJgxiGHVREREARYiMdHfMaexrK1x5rNwqZ87qG3SKT2e3ZPoeKxYvhurE9zyLD",
  "key25": "2mmej3An4rnRf98SthrVBhmLiaYrZkZ4qwyhpYsH5Yvx1ATfktmtypN5uPA7D8RcsAdfTMSfpCNWHBP74t36mFYM",
  "key26": "HfksD1mGtzxKiUzRhowV17zCa4e9etFRqEij2N1YPBJN6p1jFQubVHEUsJMP4b1HCbZgPPyhb6dFiX4ipPyRWyG",
  "key27": "VvqKPi2MmDSGePCnSK3bSfZVZ6m2ntgJKWH7qdadb5aLgAABFzB5ptpokfKbPrPLwPod1PQzUG8YpLVNoYvCf9R",
  "key28": "56VjgmQdEeeZk57WxKjEqfHNtABGRvS3p9qpfM3bvKRgB9c74ZQCocuPrYJNzg4k5fMt7ZgnHABnMLPhxDASkuVV",
  "key29": "3TBqWGsvsy3EJZohip1mNKc2o3CH2JxrVRDLBeWfCUSmsnXJyPGfZqy6niSsJaQVKGi1nMDExURyg87YTiNnH9ZT",
  "key30": "28GHZwHtdJxtq2An1mzgbxBPjzfF8e7CDdFGMKNDowPnJidtUHTiurbUv6F8Jxy2LghXKEykoND3vf4Ms86mZ6kx"
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
