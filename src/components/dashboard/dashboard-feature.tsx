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
    "42Yn2fgByZJvuRmoXffrugG3ysfmmCDrKG8k8PZ2h2DfThEfkDj5rupGE8xnmd4o2WBbAFyhYpL7QfCvc7tACTY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z1h7PGRM6drM2DsQUjCtdsJP5fje9evX5g2ZBtW9B2hkGRq83d1Sh4TVnd8av9m8ZR9VQWUGUrjqsVcaZd3TkvS",
  "key1": "wPJRtZBWps7pU5Zsi5YF3yfr2egxdfRV5N4KQQ7RZzFkh32Z9Z8RWhuz4w7CfHrSwXuoLHQqcfduPuFHLWyA2mY",
  "key2": "54etcnpg4Uzx7HaXLdMYZPGgBKDyjFeFgfnKYjS4VdUFK5X9BhaYESkLQisA86yjAHo2Ae1ku39JLDs4bg2khpqa",
  "key3": "eXyjCuPZSWsxu5EiCn6fxkADGvVCqvv9EovCvZXu3boqMTKhvUe8AkQok7zmdDDPk21m2iFb9RmkKxhrSEFSC5T",
  "key4": "3S6TLC1zcfEVQ5MAoRLtQRk4fYYrkkdJ1orcKen72YhXhh1wruKggATpjPfZddjnEbmbArT2LaJmETdmgMRahP6L",
  "key5": "3vSVMXgWaE6gxcC8MBBkXsb2zqkrTGgnozRoKP7JRaoMQdowMuZWagsDgas1d6YEkHqtGhykagqFpAWoXsA4kQng",
  "key6": "VfAvoyNKee7DFndqC3Ku5G29abJZcvk5YR6gDQdrz3sCiY1f9Bzq1RdUmeK45LdyDaTpqpsrEWujFwuXhzX1XyF",
  "key7": "3GsZVTirR2muzd2Yk7CxfFyUcMfEtLUzDWhvaw6YU8cQzhktfsoHtRCexBjqQMXQaqzd6idfCRffqZpjjdMrEXfj",
  "key8": "3PY55aj5ZBYXTe6hVHJhio8uxMpkYWcE5FUg4zwn3ZhGgDXUJRsXXLSYjUHW3dXYToYcks9LSKqWJRDd9SApCFCg",
  "key9": "2mUGwEwGsgM6SkUaJEbDMQXMVRpGr2oQLRB7vnVYrW9v11giXmXYpoF5zk114Xmxod5LPrYKh2RzSuSEqohrsQGn",
  "key10": "4a6tx12q5P8rnD6K4Asb7d2mpjiHzyGWfYbf5qWKFVc2QzmtJ5Dms2rKQsK9FnzkzkLh2W7rXJaXh34miBzSzeuF",
  "key11": "43J6zFWqqqb1ACJkgNTzEu7eN6VvEXtfvinMR3aX74BVUQz4RRf9UAm29CSA1re8wjedCNTcbh4Kn9M2et21ZeV6",
  "key12": "52y48wtFcdrjtGHj5bxLA9vM8RQniaZUyib9uiPcKZC4v8aXhtRWqnRiPmrKLxFtCTEysqPetWoPFga3UGkrikkz",
  "key13": "66KsehXfw5E8Q8vfDSxWAam3ZpexcTs3d3aX1xCPBBe4cuhVHKKYVtcqmEnfmn8bysugbUZNrjm7rC62F6LfQYo8",
  "key14": "CzzCzXLEj9VU6geb1Ctb6whtSRaJ2KH21NrwRhMUcpVpFjiCHEUjfXS2pf6Rt5fS6ZNuBKgf6WSxkRpbbbxfN8a",
  "key15": "4Q5gJb6mTvbzg11fNaRPwW51Ndt9F275zV3QcJxc9jC9KQDqp8jMUQoTevitGEBNq5ku8n1z6ymmGRfmJyXkh1J6",
  "key16": "3xGRMmMyh5ePyB6jdQ1fHbv9bYfhJiRcXePc2YgrYB6x3PQ6MtmyJLfBU9AhPcNmdN43SZvC1cxcxrmWs5wLNAnQ",
  "key17": "4NCt5uTs6BnosgEVMFTgYpyMPuxvAzFFewQ7Cd3UYxsx7pkEri6K6RVX4MS4UeDbmLarM1puUcQdgEZw3XcTMi6b",
  "key18": "gjjrV8oZLHaBNpUKQc1sxvYjsuTgWRqyiJnqKzLJ3DCvwFnNZJxxmjfXeAdxCmdXvS6Vn6AdDtsw1dc4gPrpYTj",
  "key19": "3xHDcz7ECcTESC5AmnLFUVarATV13pW7cpKxywYgy3UZtkHCdUnKWEHjEkDBvaiQAxpYRM4RaxQrY5rZokLg4dqn",
  "key20": "3vg36hkLUs8Sho96Z29iLYS1mdJ38ZCyJC8yDovEJQpwM7uAEMsi6NnFqrrVuZNp6zM6To8PJq4j9zR1rYSQEipk",
  "key21": "4J6Ttx8aVWc4wa2Xe7by8prdcgSNQYDcviha3AQXb8th9AkRgLjMUohjfPWbK6Yi8FY1MVB4c9yuJNEgngcqh5Wh",
  "key22": "4fZLaK6SPXLA7SJPyMcVhGHCwatrFL6qhfm9uuKabfyAYmCwazDKPSAftw5i7smUk85aHeeG7Nm639kwxvRsVNU7",
  "key23": "3mzRQSVAiqWgm5dc5ksUiJM1Yphrz5rhpf9MZG3Yi8KzJ26Eiy7TybGDF5bHHn8ed7xWqfTyHgYTYQkdRxwvDEK8",
  "key24": "4SyyKTZD2QqcNtPXRBgzMTsY625n6YBSy8axckDLv5CZJshTu3rBsZaur4jf5SRTBPCTZQyTc9UnUQWDB1HTTNK1",
  "key25": "3NF2LZQTJKbxGQx1feHeem9UV46ivxp6fQ1q1Ng6nM77YKr9EHbW4CVdLs6hBhfDJpUrBK8crLNg7z3NkgKTwptm",
  "key26": "4t1sVXcQcadYpJyegukXo6y4g32XX2twRtPwgF29NVPhka8WswUeei6xXNkcs1KGM1k5T4ZAo3i1AK1y8svCXyeA",
  "key27": "cLPxvDH9uCBggHPqNrU6omqQvWdd2M4efqd2aDVRYwNvfYz8TYjSsjxW7ptML4eSYaDama1GG3dmsxpmfJekzYJ",
  "key28": "5cREB3uHuauDaW8w5EpVzDtnVv8yw62iZehPSnCPJk8KBTzvGtx5aVDgJxvk4hdUe3E7LUGtyfvoU3g2znj41AM5",
  "key29": "5QQJdhvuvXdHDQi7PB6tojtBzTocj7Nh2Tr73Sz1BveXwNXvHebSJUhn6WSTF6oxefGYKH25DHAo32vQqtDqR2SK",
  "key30": "47N94JwkTV7MyiVdCstApwdfNufUoq11Z1RVZJnvT8B25N75MbVXdHsuha5xXuMjDv6kZVTXuLVHhyjNWL2HqKkb",
  "key31": "M9RBK6PQj17eLb9VY2Vf878nK5sbf3kN7F1KiEoA89NaRPekvjMsHdtJ4c3WMbPM11fKNkRZ5JnYkST5qSKjqxj",
  "key32": "29Qt7LfiNbSECPXck9Rsue5nLjW1TA177eEAZR13Ctd6zZZNb32sB2wV5GE9yZLnb2kdyS975u8v4hG3iP2fQZQE",
  "key33": "z6bdjYpFLwkD7g6wckhNgnc3KUqSVd5Uwfqh7yabmnkkp4tjSrAbrQRJhzUcrMN2HgKqVtsVdbCe3GQH3W5suPe",
  "key34": "5jeqiyNapFsXwMet3LfUiod5xSFDuSyXbDix2fgPwpYTRzYfd4eKQ2K5pRTwqgubua52pZabaGh7FUHiA5mjs8z8",
  "key35": "i9hxU8kArDF1cyV6td4pdsKZTEuRH7bybCFyrwutCBjk8ShaGjBA8e5KCjpbSV7QeSvKYzs2oLoChF4WbWM7WRj",
  "key36": "2cd9yu7zpLrarMfaXw6FJzZhsVoUMNkirZaToHkk2QJiv5DAjMp1bMUPTPVH9AJgDcUDMb29Etn4wtZyd9HeS8eB",
  "key37": "3koP8NtujhAh2FmdeiJsqiNjBoWnZKdyZ4B2JPyAsJZrUyzJZVhgDDUZyq9ipic5QyddnL8qR2B3nzNw3NE52vLJ",
  "key38": "4Xf8LsftY7kR8fQgt19uPVFjMp7GkChVUA3viWBorWKruKAqPaN84yBuY1piwt5kHUfVV8C335qKEM9MMDhkjgwY",
  "key39": "2WJ8YwrrMx8AUpmzaawbFZu93UNZyyBpYnTgki33cJ6QfHZPdBWgQhmyPhtWqJdMsudGiG3tdxzDbm8qMgbq91MR",
  "key40": "TwTmsmYzwNxPTMdB4XHgFAwy2YscEHxMBJTuL9cuhxKQj8zg41GCamo8sDP42iktJcM13nS3TFiAwxE5eANd1Mj",
  "key41": "GyptwBbjCRC72xEHiF6DjUgtswy4cnUTqeX3xgrwT2mh6dXu9GE5rG5MJgX3TwiKv9oQ4AXC6ZVHNN4fFxPZFNV",
  "key42": "3RWqzcA7xgadiYWbans93n27eXKsHMZtdznkMDjaJNh6iVrVLj6AGwasHk9Pd5PegnsrmjhGiKKmWdb9oPu426gY",
  "key43": "5TAQ5BFFrcShjzUhZiCXtHwAsKrrscbmsCtf1x2cpFMRug2Rx9x4ZcwbdLvhPCpeccv4HJAd8q7XWAvcaWjNUTnm",
  "key44": "598gkboYQ3yZYjxNkG6Lx2M3WXK2qgGmFQoWmtX5pXCD3yBt22obu7RZVSZ7pLAizWUffA65EEvADdqeJJUDKGjo"
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
