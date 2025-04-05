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
    "2nuJtDTag52aT3cVmPXtbLxNKnuePhXCS45KmSnucmGSsMQtKsZy2J6KCQFPUNsWnzTN5ZKEPVKgqG3GC9fRL6TU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vhB2YhMcqm48mKwEmy19WH2egvZAczH3MXA7PHe2kTz9BsuAuSpn7hnuHYu9Nwrn1GQT4WED3sWJh7LEwnYq175",
  "key1": "3oUoBHVt2sgAANvRYotdUqCNEYtdMhf5nd6iFapSc7WLXKw7L6aNEsGPRkYVc11qDu6TdEQj8WzRNvziwzH3ijfJ",
  "key2": "2Wi4F3pgychSFj6KovzDNiYR18vjCbRD8y3tSybkpaRuedQtHZjw3eU7oEYXRWPmrbm6MBpW2yDwndkHCvG3hNxd",
  "key3": "3HMhXssjmWSG8SHQETHoCBVQVdKrhVFoB4n6Gy28penq8ZXK9MxNb9gEiUriocpiK2iYMGPKY5uyR1PW8un23mnB",
  "key4": "CJHEjhNJstVNEZJkts8eojU7CzyBiKFpCMqLKAn5GHZtepRRxJFRJ2GpyiTFx4QUAU9rPD989rgdYGGVV23Gj9t",
  "key5": "3fHDFM8QiX77tEY7NCc4VbqBitdrc9sRKAatkEU7x1TnsGesLnwqQQQ54uwepAKQsQiFP3DJeqgUKQ44Yfw41d2j",
  "key6": "2YmS8PiMRyZCQpY2S2bHN2R3nTMtfkdiYYkzVK13RLtYwpoQNeB6gHunfTB2kUHJr8mnjrq1KsFEwNi4sdqjZQLe",
  "key7": "3R8DRPXREYz7xrvMKaUE59FnpCWJE9dCohsYX3unfQrFJR4RahNaLNPoTgS658wsRgXjSPJZ6gP1KpocArZZZTqZ",
  "key8": "3D1rKJPMGtnURtChmC5vrJUmotz2wPJMjSBzKoHqgYRyFPYxxaMTMfBd4uiEKhMgcac5xwUWV9XQxKZggPdU8SNh",
  "key9": "5TSQCrQ6vBw4e6wCn3YNrpEmJNamvYy5tS78Z1gXXQY3JRn3cNg3CWwHZdW6aeEcLdyZXXpfnQfh4vxmBYMaYfwC",
  "key10": "4DdLVRNE8W7smWqcm5wGUtsF8bW229yW65MhszJgQKx4aRSGPwwdQtv3H2cT7o6qqDthfRHrPp8VHEtEQ6yZ566c",
  "key11": "5rzBGabdptAtw26RDvVjx2MgBpQibzRWaBHaJXwGaDT64u7i3UMa4991satcYCGnKt4o3x9fNtjMtYAzE7eNwRAu",
  "key12": "4CACe76SSUq8W2ctrtPdaS9KmA7UghzBW2asJkHnQPfpmTjk18FnLctAbRKz2nycQYgyBWDV11Cb9L5HbCGMUhBb",
  "key13": "5rZPYEuyUk51U1t1HPWWfZA9xMjVAvBK9GqGcxAd7GKnvsBJ5DXgJkbhebP7dM2SyZrUTPBZN93KtiE93GiSbK5C",
  "key14": "iNUN9i2zi4RcyBakgWRpPsticw2NZtjeoTqNrqTDau9dbfxsHCXDKnWg1gdZryZe8ESpmUUXZxVBQUv9eHf8YU7",
  "key15": "2Z539FjCRfonTXh5M6uN9i6nuJANFXHexZrDN46LAEHzqUwUdWiFT8g9B5zDXaFdVmq1f2mNuSVpALw2YsePLJL6",
  "key16": "47qQum9dT2txEKrtRZ6dpiYtJ5XFjcihzEJif7B4yktTiwtmAVQ8xWdKetxDW5nNK7KCvxTjRbsosGoGTnHeHiqy",
  "key17": "5UYMRmLm86sbGFnYomnqvKi4d5GShsAEEXy7uYNUqvNGaBBCWwfdnMXtefwgy4ProDaD2VfY1mns8TYNRqueeF3i",
  "key18": "PA4uz8PNuqD69wuyYi4ekPu7F8thY7rXf5UBWeLU7qXQyiA4mk5U1NZMykTZivW18gEQ19geDPZPoumTpeWvDPU",
  "key19": "2D8fJCmduEV3FePn3GtnHPDx9X6Vq47NkE2VKp7Tv15XHY4ebq1aAPVf7eBHxCnDi7swtdV5wDhShkmNRhCk5tks",
  "key20": "iUuA69z7L1V3zmUpMGdJwX4Sinc5LnkpVtLR5pxcdxfb7RMpULYDSe2bM1Ciu93iP96kKvYCczYpPkCqwttYktj",
  "key21": "5M2Jv2g81o8UBBvVZbxaqU4Jyz5uYxJhHkxD5mhpVSdGu8fcvSLZ7DWrqjCWwY2UBZvMdnCNU459QJgvjwsTtfsr",
  "key22": "2pcWh9TbXbBzQHGWunhw1tHeZPaqVVZ6V57KCpvFoGDJyX34PvUKW7nnWWWRGY7CBmg9k2mGmzTna7VajRfCj8Gy",
  "key23": "dR3W9VemMuyagkr48p3YNgykPBVWxHVCSjsH2PScENfC1GJ2E3ZftEZTEABZJjxYyqzEzActwLY37ew9yc2diLp",
  "key24": "5d9Yk1ZMxYVf54fn1qCEEtBfsEyX9CF6Gu1ESgaHNNQGBswikZBgmTJyyn1WYydiUZ12ZVHfNjWB9UY32mcyi8Dx",
  "key25": "4ohjzRkEcAoaBfD7rbFEyHnswtnDqWmbUvRAmtUj3Lf9MzDVrApRvGFFKLDSR7JSaEHTxY5Sw9uQTduRnrXWhhJt",
  "key26": "NAP1XwUhobuSb3am8zcLwYeZBGeExNUiY9m4yESSfE3QycLduVWZ54oD7hHhtRsD22mbZfsKrFU16aFAtJoAiC5",
  "key27": "47eN7sjEYyMzZT3LNPWMKFsVVujK15VyvydZiWZhdRDqqzEyS9jb11ESpQGuzvke7M4Ehhzzxu9o7hscr13YKFQQ",
  "key28": "4qQxiPnBrbpfwKwA4b1z6EsryVviuSYPXETRp2iCWC8QfNchGZNc1rjiwnNqA4CvoJkZFgfVoh1a2BfpD9D7B7VN",
  "key29": "2bD6h1eKaFq1J2kmvh5kkwjni3geHZTB2U9T9SF2L7CHjGeLZfmj1ypsTaMXXDMJS55b6Xe5aQHx2Jtu6rQWsWoU",
  "key30": "2iyM7jTkQpfsrScQFuW837Yfc1kk9dQN2r98y6Dwox67DzY9zGhd8LMd394Bhdw9uov6RgY1Sj1c2aQjDEsaShgd",
  "key31": "4P512JkF6a2zL3LQHQrJDF7Q9oQQDeovYXdpf4zVvK65dBbzYPVM3u6ch6wFSzkXFBAqj23cndb7tCoyzCt7A6ag",
  "key32": "37EiWBi9ZU27VsWNxJLTKmxTjw7p5acBMRWvpwkdYHUaFntFa4vrEvzW54FWDS17vKSMMEFBUAjFiWr1GSKqJ1D6",
  "key33": "2PVU6keDoXWjz9LVHUvjSPrpb8ZtUZxVDXLDDUE3W7RU88CJfLDgSBwJqV33XYvtNX8Z6EDsuKVuP88SEa3U9LU3",
  "key34": "5DTHwJ2crVYZhT7pHDELJmXSzm9hYJ2Nj3HKBgLVZjrhThnLH5FahPHrPjFq9q1fi9e7cLiooRxMrQW5cGWyuvTX",
  "key35": "3VAo5kHVMPWyZXPe8foeLapcuENTavRwj88d43ZtZKYYVYLC2MaUzxYX1xeqE77tLzuTKxSPs8qctNcWrQB4ehx5",
  "key36": "4jexvhXs8g3ozDZAXcsjSrRAHyH3RvYb72Z5aKuwzaJ7dXrdcPm8FiYC1iqDJriq6HqVdAiCEcYnERZvbQwHDzwT"
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
