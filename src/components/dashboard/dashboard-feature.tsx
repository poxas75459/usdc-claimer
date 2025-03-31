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
    "UDqPx3RMTzqGGnZzSAR5unPyC8j3UqVYLzN5FL8DdXDAgM6xWMts7FXb8mJvEd5cVMiaqQrnt6Tbsp3LRHkUsvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iehEST5uyjjX4fUqPGRUB4ipDm869iePcgNqjPSMCi4EPpB91wR1UTNHz4iVe5G7Rk7KtWPFA4WxMtJ8vQTGACP",
  "key1": "25as8sHkPKgDXNUE1NU1RQ3DhbYBmBktkdHvdLfKneb8ourvmzghMwkdPu3JB4u2Md3ryuonCPX5rUWfMGj1nKiM",
  "key2": "4R76AzDNJrHAACJVQjix5rZX3SWAr8WeWX61s5SymPsGpqUyeu3VGu2w1J9AQioduUedRBi91trgtcM8gQUrqkDf",
  "key3": "49pa7mJwZ588YkBQCZL7A6jZrYBaieWZ6kNkoqdhtHrEZLMC4zpYsM4nhiXehyM3SMvDfpxr9X46PPZXi58bwE34",
  "key4": "2E29YAN2kUeGy9a1zvLmbVJYbVqy9tvkhErNa8vFdpYpLS5uYb43heqSyDEDfPddamoNrmmb5gDU64hzEgj8EYSU",
  "key5": "5qXNXspuovXz6qZWqtMp2ZtCkLvkbUjYvjRWPWypRnHLzVPXPpbCeZbzPqHk5P3merdctmcv1v4KfVpYbHmxXfdD",
  "key6": "2WghC3NmGKjx9fgkoTFC7TqWEH8pj9doSVEy3hDcUqnaZLu4FFXiVewY31t2FSaogN7hc5ET6AKJHdCrfeQ1NTeh",
  "key7": "4is3ESwqcYLdM3tq14AX2b5JyJBtXfA313ZXwDHsLxKDdP7qvYnhCuKD1dm49ZPvkdg8P6nkPWaiigspZVs2rj3b",
  "key8": "3SS9VoniAPXbcTFyg65dNPeSegYWkiUsLchnBAKSXpxJwbEuj1J3eoTUnD8eEtByffxbkX4QaaDbo9ktegPkJ2YR",
  "key9": "2DwbYJZS6xX3YZq3v7pQE3uKKeyLVLR9Br34tpFYwkAHnzAcgTnvRUn96E1UAqYQvbjRndkwa99NDDSQMBk9jCwi",
  "key10": "2vtrKozN6iyE2jUW98kTr1ztkVvoMVH8Vrjki39cHYBsB76sEuAtfr88WmDJVTjKdzDG8U7LSpjkFjydGSFkQuqx",
  "key11": "v3Y8f4P7jQkkh7xSBnJTdVfinhxHqUFgT8aXKbwrp3gV9sYHtTqSCcLnh2rVWwmN7HHhGjC3dn7MxZgRVoK3xrn",
  "key12": "QFNC71cAAzjtc2rkdAuQCThUzpCtPdtXS7zptSZxrhYQprFa5H6tA4Eqnx24GbmjzHPz5CYa4S6tnVJusgCJhwt",
  "key13": "4jJaTo96Cyj3c2qXXPj2MeMGwsiSbyC77geMB4WbhdzYUDvRSx2Qzxix5UJwzTNdvGpeP2MxVhYTQ36zRjJPsx7Y",
  "key14": "3YbdCMMkQaP4iTyWRVZsNP9F5HftNohyZweg4GTSCp2iiie7F4X1oF6d32cptJQX4kME7cBskKQKLSTpHqjWDNo2",
  "key15": "d44tDNy7QKhMuWFXDnKCw68m9uaquEHZnsNvNWrJ5vwE3tf4ed2DtTfLDQxLQ1o9fGp4PZ2MPgQsFMZaSxg6eSB",
  "key16": "T6GCBWctVUN1BtHXDqqK66JhPhSTCNECxKvXtkDQk86Tk2caVs2ufioX5iAfW1oF1VMqwL7nLmUQBZfFHGUMsVF",
  "key17": "3vYP2Lv3Ryxkc2vdCXSUDJ11X72zsqCtDfDRRf7hTpryHfb3rpN95EtYrskts31DSjy1ThnzsUPryvw1QS3eszw",
  "key18": "2u89FTfWwozYY7kwUczgcTt7YeSR3D3wwTZoarQbFBDNJoEorQzrz4irN8NKa2NHvcpZf89h7MQGxhUb4SeruuHy",
  "key19": "5nU7N985CcjEg9Lzy2ZnMpFD9x1cRJ8ctkStmtrDWJCuq1NwdWvgkdBRtYt6wLVkxnkYgaUjUQFo98z1cjRyK38A",
  "key20": "4KLhRg3MtYL6wZwLhsShU7VPJ9rDHVo5g4C7MqpZu19kP62rn975RJRmnhJx8cQjBajGAhXwNdqusYAqLXMMRH5m",
  "key21": "egu6htjw4vM4kn4J18rYoMt9Dxcf36qenFF8mQXNSDC56tM5xjeNGYkShotXX5pQVKPFSvx6y5AiBoBcDPvXpPA",
  "key22": "4jyv2FpiXRmbKvJ1sD4EpgEDRVoeJurqKfuEfNpL1KTbBB9WYe3ySvSS5p17udXnifL6ZCstu61pCHsCJZqQiYa3",
  "key23": "46PnNnTwWUc4h7X3DJ7LgXFF3FsSRD6wxEBvA1stANJJJQaxLhz9vfitEvRTr5yr8EGFop17ZQNw6oWKZrbtNj8D",
  "key24": "2FYqLUh9mhavhjV6c9Wo9gb23uuj3quYiKUYGbz2RmetUySgrwZb9gHWCEi8ggiCfCdYKqxY2VHomuytopufhCth",
  "key25": "38JomLAwFGnicacosCmrmPMGSRNFQQRvaWhb962PTXQY4G8gCFXUZ8fkdXNotoinc8aUFVHTDcgoGYna6fhxkwAs",
  "key26": "5ERbP9WFjTbNdLEMrksvpiDba3VsF6C4yJux7E8R9U6M7NYVERDXnKdvK1zYQQa37SW6jyPpmTN9LHVxbbGxT7nV",
  "key27": "4s3X7WXDMmLrhes2eFCkHxo2hr1UdE9kVthLDeaDnZSwkwvwzYsGBnzycuHazTQMbaTvit21S5TYG2Lht95SRoAZ",
  "key28": "5fcRtEebe24RVa2qdAsGQT9dSztJJbA1mwFjWa8TAwyQPBss4FSNUgq6LjaxkZFcwDtM2WbXS31U3t6A2i4Hqq1V",
  "key29": "21oVWGHCQPH4CrtrfJCNhdf1E7ATdMy2Yhg1NjiUQ6YRii9WyPdZdgFS7i9uAykWCf6QjahpZnXMRUK93wLTTqmv",
  "key30": "2SijNmgVLec8tUnDLnAy2nHYsV11gSAkq7kL1ZjvDvRJVDDiQx6HKNNEftWs6hW9Pi47QNaPS2wkWLWEiZLA6iyQ",
  "key31": "5vDgY8QuKCr8RkmJ13TUQ2YLB7m9nag2tmKwMCZo1yBhPUvykyKVtcXptPEEqjFUXvGkpVhijFM5MMKRcDG5xhKi",
  "key32": "4vXjRGDwAGEwNe1F4Y8GkMyhT4CYbmwG6S3ohLd8ahXcx19m9Rj1dMY1bWexKJhKhi4oT6hB5uxcTfZqZzF9kXa8",
  "key33": "43SeSsMe56trJugi1ExzofYvw5um9Ew6NXaSAF1Y1DeAfbaNW2EVthZwjaCZKA5xA2U7NQuyKVkMUbr44bAHvyyA",
  "key34": "4KUxxHmTbgc8rBcN6qV9FRDSSiVW8hpFmpg9ehr53WuyxdzSSHaJxVUz4DXRTEDn5ygP58eafSNzefY3jcJKYiVt",
  "key35": "2hJeehTDrtp8Ekr77R45JLahpVim8Hhbu9rNmA6wF5ijbNR5R5D2RS8uRwdmpvER79jsb7omFehn9ysy7hWKaeLy",
  "key36": "4m41XqhQtocLSBhYthugMfj7uM23pqTdwoMP3J5bvtFKWv48uEkghhJtoNtLkdKAnxD67UCtnfJWxBFmPT2duAWh",
  "key37": "aFKoWmvxvqdTesWdM6cmWEkaeswCtgQoBbpeE1CtzF6EL8yJiPGiRGQSwyEVWJUe4R2SQXTrrWvEs564Vp6z9An",
  "key38": "2JpzaNY6DeM6ct5rWkcmpF253mAPyrk7LiMyZSUCCuSbmJeerqY7MpbjbXz22VUwqaKXzaT1qfd3uJZD7TLTZpzp",
  "key39": "5vvRBr3xkbzfiqqj2LFL2Dv9iDW1vSeYHURWvmWvnvFawjHQ5fSNuJDAGgnfVnCRcsraKts69KuUN544y4UsDDf2",
  "key40": "5WPifCc4A3UXQeVgrZZWSJdUX3Lqb8rZAmeNHnmZFmwYhho9xFATGiHjGBNZkm3qK4sWfTA5YBFb2cXkeGvYztrQ"
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
