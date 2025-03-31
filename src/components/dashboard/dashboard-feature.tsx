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
    "3545DSpKTn2fddRFh4aWcj2sX8D12LgQEpCYP2EHuaJGrrFsVnx4TUKjDZXUmTDsW2zQdVFDvfjty75kXYK734rX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49nt1eNSyQAKfmNP8ShU8oZ3Qfo2mjLGqcoRXJwW5WGMXYRBpzSiGkcjmG1zQdkiEjY1mfPqA8jNDk3bKD2yD5W5",
  "key1": "39bBatiXTnGD5QPLKpXX9XfLVhxrpwupfwxpnbA43fTfd1GbnVECxfRGo7V3KuGaCXwN83oYbdZM32nsku3LYnae",
  "key2": "5Lf3evvfe7As7JcnvjAVJFCcMgjeHNeFLKsVUnq8VAa4B7GAjWmNY6DcTrzF5uDXtQf9nfafgi54y4vk9cNx7J41",
  "key3": "5Dxcs1FfGE9iBQXYttfnLozXMjQuLDr3s6DePuF1sniY58U7d3ATz7nbDgambmdGeWNyZ6LD2N3fRXKikjQTKA4F",
  "key4": "rPgjV23Men5GqExVaHSk2cj8Jt57wdgd1TfAi23kvTegksAUv3cYzaiHGvGxzMW8rkkdsK54TNAdgRHowFYPtuk",
  "key5": "VWRxL3WyjdjvsSqGEbxQkRTu9JVBpyUerXoCRVDhSe3ULvQE572kRgCs6sFePYyKsEmhZpU4tocSrCLA39pEWbF",
  "key6": "3A9y7xcZMZ2QxejJDLG81Ah8zTajU8kj5BrGgQwu6ywab96ucs8AXagYtVWPiGuhhx9Z9ywMbSXPnu3H12tYe6co",
  "key7": "4p2yPnuuj4YCgNvbgKhibxMoN5Us4xQAKRMXLdBexHQMkXgNkK4SRzvDbjSUZE7QQtQjSbLcrJt5njFjEpD7RiXc",
  "key8": "4BxsiyjjPUyMicLfViZxrwjEmTFiy4gFbenJDHUZv2p4uGZTJmwEXFUtYiq2EJXpoWrG92Yz3W4wSndvvqnzqAv8",
  "key9": "4uE46xKRWNBUVXXvayVCjFGRXg8PHQJiHMhsAqY94BqEnAebxDrpRHLJWFz4A3roRLrsZWWutJCaestpywG2cHfP",
  "key10": "4rgwpnTuQtaLuPZrUC1feMZmiS3V96Daap26apX6MZdW5xyxBU5wjeYVdbJ3w1si39uCag47dfHryydfZAqiZJPH",
  "key11": "3Cf5ZUFuEtYENcYAfddYRq2WTNQT6a1oBuxtXXfjPk7hcBJcRaUkm6s5faX4GdyrgToq7rEyeWbd3KL5oW8KG29H",
  "key12": "27VetoBk59e28fhyzP7vhRdF7iVt12x3CwpLosgoyJqSNqVE6ngGUGoGbL2DKHNwG77hp4v8HU9PJfppQj4ycRaP",
  "key13": "2VL2TA5QU1H6XWMo5TX4BSXKTQHQSXYosgUtRvfBXSzLWYBog9m9GpEvLQsaf3NcD4K6Lt1jYMaFKTvPcjrRyC7K",
  "key14": "57zGp72pfLvroLNRKZBU9bTaPYUafjxcNqssaPYgWGVKojUZ3TMZAqgEJbnGBduutxfCsN7aet5BMEMMXKUwcNUf",
  "key15": "5febAms2rpzueUqhQSb76eTxwM5aoBn8UaKYuCW77zhnWfGBVpUARkAVijBxVaikfM3sHUX3CYeqoif3L7gtYB1Z",
  "key16": "2XLs9UonDKziryAu2NAbSh7BgW2Yio6Ff6VfvCqFVK4As8FLLGVQVExd4jj4Px4NvmUSB2kGaizF8KKvHBtwnC97",
  "key17": "w13B7wrQGwQqtZJsENA4d4nbwguP9LSmYkzfcucN2yaXRoWT8QaLxr4GxfXsGLhU6aRDrgaLfLWMEfxKZQ3XsDj",
  "key18": "3jHog4WsqAQSY8rbknyVuSFbeyDcLUUqNYD9drf4yZQp7cfUVwNMWRLSMd8evAV3oFwNLH8xBFkgBHSKr8RZD7bw",
  "key19": "5MJDBNwEAHBtaJtY9MYecyhZHYHqSmp95DT6ThaxpmDVggq5yB5aGACnhz7eu1pmNuo99NucA23kzpNktrauTRDm",
  "key20": "3STMe5GZ8XGoDs9YJiP3KEJR7zR8x99EW23ZFoqhXiQMTNWu8QaVw8SvXu5SFtaG3XAbU8mRuXT3GtfQXsAR9eeo",
  "key21": "2uKo3BRvpyp9iQjtcVU9kAphYaJBPhtgep4QZTLfrggG1iokB5yzMrqbMzSdPk44LQy5twUxN1MqvwHH7sU3Xynm",
  "key22": "LUJ4tL8AH6EN7fY664pWxvXJR8ph1T5g3N4wF9gY7Bj9tFHNp6Y6fGQKyHoqxgoYMHQPJ3sKSEsZTh4d4fwDjSz",
  "key23": "4CYUuyPcD8Dko1incujcFZxfBHBPe3iKeaKRL611uZyT8DDxXpoQc4k7hoLBeoVZBKzMD2xgQe8CWxS5o1yWedVZ",
  "key24": "4BqRUQxwmKmxxLjaBtNUWj2qEeLhMYhh4derXSaSrK9HYaPqqjFabc7b8joMYxXKbE2rBMqV9wTa4NbsAJgQek98",
  "key25": "5rUnLfiAm6xNh6ravoFqf1Vg3SL3hH7kJWfuZ2HPHhPeciKBQoR2zcJa5w1bkuAYX9NEzge2kx3YAVAD6yRiWFQH",
  "key26": "2zbJYmVJUmbcLmSD9Qs1Zk1GXR2Lh2iEFzuZ5us19BPwqsnEHateVFXvUJXuS6sKLFvw4W62KAxaBsbv8eMXfm5J",
  "key27": "4qbge3FdnvGdH4PxmdBygC1Afge48Abrh4U7YZdKKEbjpd9dsBr9E4uEy8fYghxM54gA12g6D7HKFBQjbVZyYSsZ",
  "key28": "3jnYdb1ATUGd7aJXQPqpbx2dhbZXNH2Ubycbp8rVR4B2Rpkd1V3SrLmXx1LQF2bgZowUxbMY8Rs4bwiz3yRbqP9T",
  "key29": "4bMpKCRoWeQfTCtD5uR8yhs7qubTrf4RVatEwAkwL1tupCcsnX6JUY9oVzuiafDPS9WFnk23F8b8oHqfTwhMyhXm",
  "key30": "CaBMW8cu295kpnrkp12e4nxK2jQkCMmFDSXnHdouKB25f1MeuvTGByuwJGmpZAYRSPkxsccYv2QMpt6rsccxXjV",
  "key31": "51i5KHhos4TkhXv8q5nPjmfThzLzyhu57SpZAufsvstLU8CMWJ6ZKEatcPPXFtGCvsMFeQeXJnQkZkRLGJpsWGx4",
  "key32": "Y72kTBzc4i3i5os2GaSq5wyGMxMntB1FfeaGWHkRxQdm9CrAvGzYKJynSCaW9jHDgrfj3JmvYw3HQ5xGuZ4UDKu",
  "key33": "2Y7UKh292kGXeJM1NuiDWT7DLj1JHwuUYUFZDpQUps4MbqQ7Yjc8nKqZNXtwEShpSnSc4AfLNsSZyWuTmVrG69bP",
  "key34": "3gkhzXo6GXAfrDbrMP9gh8G2BHFP8wC4uc1z3RCRiFZgGGrbeT6prbENgvWkTwRtk4t3QjxXWreNtRnVKZjgQPke",
  "key35": "577Z2R7sohsUSS24znVcMFpdWdJjNNWXCnXnyXzdTSYquiqEiBHtYHNuGdd1XPAFz9GWg6g9HAjRCAGCi3dcX7nZ",
  "key36": "3NgfqLinwnyY52rQ3rgKfuiUYwL1zpyKGaJ8Zg6T26hAh6qwjwa18LSxxxkyADVecraZxr41CpdWejNdTgjCeLgg",
  "key37": "anp1Amvdicna3Z7FgEF6jXQR3r9uia4FNf8uRUP1Xdsq8AzGXPBptLY5nDwQYHUSuSBaS6uvn2YJj13bsbFg4df",
  "key38": "5ZoS2o9qzvkSixEqR1MCR38XvrFk7PtGw4HNwLFa8ExAk8UBSvrUbUQVnpfQfJHdpgDF6PiwtVBZsdttadE9JfzR",
  "key39": "2JhxwtvT5btjuCeRFmmcBmwcWCPvFEUmH7aNbEeuE8YGKfko5TGBJmzp8CxNn7jpXQtS26Qqqm1NGiFikTuwogPh",
  "key40": "581f6qB9Wz1jtFishnP54upiXkRz24N3x93VVmUxypGNJHKHe9SyCw5EMjGyYPNA64uqmu7spn2qC43hzmZgutfD",
  "key41": "2mgrkYvkb6y3KxDSM418jMxwokX6BDGJr6qdrGdTFeVP7GWFuddBBFYunzoRjUZLDAVFvAZ9Am4fTCnQ9RofnD5Y",
  "key42": "4G388QYC4Joc4AphZzBcsFUNXMGVgsGsUJbDycdPnpB2CbinRKyX3VePr9LbAEFuhGpsQtH86ixC7ngLPGXeHARo",
  "key43": "48WojyGAxrsk3x4SzCAvbKNhjV6beGfJFD7vwgvebiMNFYsXY69CnvYbdYQVExT6KntTfUgj9dkihXwQDGL4Gm3v",
  "key44": "4LpEUMQEUQGoBC8nTgxdhWnNnXUSaqT13E5HqaKuSQwS6qBydDNhM1GEAw8Z1givw77NeGsDodaNWbxLxJ4E1Vot",
  "key45": "4RFb4dAKZXjHvqNKth8X77VYSQrSQL8SAx4tB1sWt5bjMt5sbcnmhDUfvjJYbry9gzgiPEDtJraX2dBwseA9Fviu"
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
