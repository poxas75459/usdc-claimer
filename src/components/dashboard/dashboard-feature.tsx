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
    "59hLD2Eic73SQLaJG1bEDmNYmQYtk2bRNX6Gya57WbXk3ND1kjWwKJ6nNJYJPRnZ6fLgLY5ECn11sPGEfUh43EFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56F3xEcaZZvJ8gB9GUb13BAQtoU9abLWrHvWbSrpFHnSNFtQ3FNUFw1JWAYEt6e33A8xmQttHgNVbeMiD9txkmQg",
  "key1": "3kBUjZVZ93ZEbynBGHzYVnX2weavzyCKcNkbCTchkdjvTEzsoPsgCQV5j4H9womn9hfuYKaviNmNadf3J6PcWc6u",
  "key2": "45VKPJkB8rLvHQ5UqnCNx7JbLTkUGXfqy6kHLWcxw3UcYybLXyCsW8pL7HhYEPbuieeZZP2KPLLakqtKpxjMKtDZ",
  "key3": "A7RYNmyWi49rnQ9tJidDkGHXU2AEuNc7uvBBvdt1HNHeBYEy4SKAY8kQPMjkumGnSHeLMNet3ErKf1c9uGuXqRi",
  "key4": "m1YYyAy2dGso51Aviq3SEwN5pwMrRtPY1dLtScpKrFop67N37VmYxtWey7qTiK5HXHhMiH3UjB7kueAjd6Qk9sF",
  "key5": "3WwYTAHDgRC6eW3SCN8cardE52rjAJKXBZvnSQ1zy7v7baYbF5JZuCV8VTfpHeKwkvS3e1e6xCyfjpEYmhGCLpMj",
  "key6": "ZwfZ7BVcANeSrhcxvKu5hwL8Jv4KKGdgqWQ3U4NPEzmyJ7essDtHS5Qq13Wycdtd6XAnGcvvFko67AXxrKpTHqz",
  "key7": "2oeoohfu43X7A2wZR9kWXT8atPSRjy52zHX2iqeYqoFiV11uTA22MhuQdUnsjs1jRftVG631kb96D6PCtZ5RXrN8",
  "key8": "2pcmXBHRRriqx6b3JmGdncRmBdVnoXvUZUuFnZFFpPX8fwzg23ds2nQfbgmyGDyK3V9WH5zUfpw81PkPANw7rzdg",
  "key9": "4Yyhz6TdUgHnuHHmnQCU4DnVeHTn123AXZCrwM8nUevZhowc8G6sZtRgPXAYT7E8zkhA1MDGdSZJaAJRzbCVChWE",
  "key10": "oz85R3n44xD5SQvjXujtw8SurnksbZkMfbJhkTtDM7uHoBRcBwkHec5DomaaFd9J1Nc5ZkPLETQKHMJCWkK9ZWt",
  "key11": "5enqY5YJLgGqvkoYHByx8SZAbFLKvvKTXub8XNxFNEMsf9HhdngPXrdEejvszHvwkjm7HfvaBvQ46j9zm1gb8HGW",
  "key12": "3Zahbkw7TvWLvfQCYGpcC2ncFynyXAHiRtsAbKy18T5dTnHQjBJhVKezr9QvNxsNHwY1GsSbKhfHmz4k7c87Aogj",
  "key13": "335ExAofBeYAZMSzzvZeEWENRAubowxn4T12b5N6rH3wKyxHfh6CSaTPieMASeJtS9G8ttT9ZAYMyzMkY46WAX26",
  "key14": "5RLgfHvgPA1DN6gCfb7yeweBXD28yxrw5iQ1tSWgcPtfDSyte7RU9GYzXniX8b5JMQSgUSPzE2acF1yZCUe6Avfs",
  "key15": "24MkgNCdNsZAaTLFuUTimuuo1dMnUZ4Lztg46FyzcJ6W9azWaoHJAaqoMoQH24x5BhPHc6D3ycmLfiRbsx7ZzqeW",
  "key16": "m1ZNUNRinxckSMDfMggGioUDkEsGzjMvqpumZmJsNZmnMsQqsXSgjba1ZKBsCwbn6zKRGLTBrTmx7vNcwW1wPgy",
  "key17": "5K8WcTFdQVLhXTZL9dZA2bSRBKmnw2Kzpp4qPfJsEoiKkmTtsgzqeJedvHUx1s8JvXi9D2jfXPMkCNyPeGbMtRoW",
  "key18": "5YyZof19bNwd5FrAkKyXjaiNYWEr2wtLL7NWAdNYAkxPadHZR5NXWA7UyaUCz1tcz3NLD2wyN5C4QZpBXEnQkVpn",
  "key19": "33Fb32U6vb8TFZbfuzMSszKR9S387b5XjwezzByyFY2rCVAij5CkcF4ZmD9sdqRurmmUxeKt6g6jkgzBCRENq6kE",
  "key20": "2o11qtnFxDy9Znxqdu6N9q96VD1ssC8GjpbQVq8g2i73Wo1bgMh8Xdua8ZRjWCS49znLh7ArZNyXwn5Qttu2gCmm",
  "key21": "5hWRQ7BVPLFeGh98hA8L4Zech8KnaHAyYxG5vsHhA7k7qGaNiY9NBLKcnXnaFnFNBDXnp31wrYuMzs9gCR9Jv7DE",
  "key22": "4pgi6rHgCr4V3phqPFCkCGSSeGxnELh6qbNEUFWoQdfhWjUSTMTKq83iL2LGpcJmxvArXTUVgwpEa5gnHaqwZjU1",
  "key23": "5WjzSsZaPZqUprVyetxWKo5qWCPH4Q1KPNoZMe3aFJkdCm8jC51CkSjyqGK4mQxVzMXaDNGa9e7CjPgvUp3A5Gtd",
  "key24": "5nCSc7UTA4D2uSG41YYx5bAQruCt8GfLabjsGgvYtYDzU5FjqJZpyuSdG2zVPy6baiG879rkYNzveWTWRBKs7JBZ",
  "key25": "2qKq8NV8weTqd8Y51cyvHcEAqr6GmxrvYmdhPm7zaC9UL7UxjFb6cxPsbw2LXohtP4z9JiFXdiRh3BGSgRMaN8v8",
  "key26": "8ehZt4WcSo4SWAgQQc4HTgdtHSq14vkH8Jg4ePwARHYqk6h8uabPhW3KfxnJaLYn5it6Yzs42HsRgiX8JQthCr8",
  "key27": "akiUVHN2PdR9wabMhQYxbvMc7iJ7X87AzjABkMMmbbz57NcyU8ig83jC2eBdLbgZ6wyBVRHMSUDQBG8yKWNHb7T",
  "key28": "5ZXJYe3W68jxYrSvdhhJAcfJmwjikamwMQmvwDLVPj86g5hkkVA6X8ue4po1m1T66uvXNHuL22wJYLrodeLVG3UG",
  "key29": "5QiYAC8LAc4DA4WKvUipYeZw2rzuJXNTPBLatBvrfEWcqfF9VMBD2m8T1KyxRTzB2f2dEyA5o2wfgSWJB5ErX82B",
  "key30": "67S4y1PeE4mMM4YD6TXH9azQSiFpiS6eNDNc8LPecK4jtEf2Y8DP7oCLHx54KqFppcR6RURP3LezgrnozvuVwpVg",
  "key31": "DErSpS4mVwVnwBP8JGQjL4WvE1co71qd4C4a7RPaP27dzFMzM65MvDZ6zFuhu4AZ26WQbFctynDLSeiVdPAJS1r",
  "key32": "4k1vqc2aSSfHceLwfVEJpUUcMFSxHBFqYx39kimPJeDQBUshnWcjc4AD1hqKSE2WfEKVuQNV2kqxpTnvSqNaouBz",
  "key33": "tvdRmXwuvp5UMsMsJA8sCaWDCQ95nCsNX88At3sPzzwNHBzADxbmALW8UFY5UmBSE25mkjo8ET368qM7AYZZ1Cv",
  "key34": "Wr62gJCtmmRnhCUVoYpTgUQ6uwmDewrGhobKMJ3UZ65BLiuDXcxGnVQAL2mciE6EYwpwHiJEnoTYYNuJJYCT1Ho",
  "key35": "3VJyaGoP9hFbxHTXE3bZugbhM69uNmko7yuuSLbzgZFdStbvSasPpUZd95hSt5ajF3CsaPd4HN5CiNg9sWYiuH9s",
  "key36": "3Gtdb1G7rVfaaAYCEuwh7p8S4Fy98zyWrMW7u6adq5Jasc3h9hRREJTMnAyztoKgZpst6qYH1szDUPg9LsE8NZig",
  "key37": "41NsXzEpj5j2KtwxCt3QFBCGepTMhQWWZVPkcjpSpsokBV7jF3yQV92vZsdPWrRXnj89oX7sA6Dn5gv8vMgjuVUL",
  "key38": "5VvRVNZyzC8zCUmztsFyVAXv7C6gFLSYeueFGrprihKK19jk6MjTyZhdxGK9ALDsEPHsdnzkm5tSKe2Y9PfSbdsb",
  "key39": "5SaazzcucPXx5AY3F2WXo66hxtL4ELQcfhKkKDRzAsyvai41WJLuiDUD26ovEdfTG8vSP8CXwuaGjYo2JQS4zCSi",
  "key40": "1226bwwBt2CW4C64JUyxTckSNB5ERgfgnJZWdjCSgrLaQnDzrmv3iZn7DbSo9yhRvP7TabsfEhQKjz67JohLuLFJ",
  "key41": "sDdQ4oXBcQTECUFSzerq1neTeWhsSP8CRK99wUbLrgH6zG8wUh1zAbt1VCp3KDRnLGH6pYeZdZ2jDqCSwGnTzC5",
  "key42": "58BcT1Gyjtk3M7hmc3N6i7ZFcoLEpjzSF3sjFWhyQu8KSGP4ezT49v9wpaSxjXcTFHDkKxux3vF3BAUHX4ShLtS7",
  "key43": "2G827my8FamWheK8TNRH76SGtZxNfqETv1mJjMdiW23bjVze7rSYBMPtLy1uV6gxmmmkG3G58mJ2mZGMHBNxNsQn",
  "key44": "3orzqqJNfF9SPd2xHbcdojwMVBEP8HnD3AnjcBusGwVKqDQG4qdY42chEVMBFTQkW99t69jXyXGXGEfYiupEDVjA",
  "key45": "4yTLLEGehpcRf8GuHDFrbnwzvEQuqHt3RzvkYyHQCbKoWv924HfgKU7qASM1CDRPuhExSL9JQRigN6kNfDK49mZK",
  "key46": "4QQcKVmxEDDL8VSsiKmKriCqrCpnL4b2UssqY13x4NHJ4yE6vrSKrRpU22r2nJ6cGfRMRie3ZcQTuNZV8wSh24og",
  "key47": "4a4dhFFfDsQSYcP1aFLmuqtWP9328WMZUETPd4vg2HDUrFi9PKUoEVNd3fkSFJ38jaab3KD4fAy2CWSrd76NdSiP"
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
