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
    "3H5w7tYDro7cvRFMxsQxavxRCMQgVSZUe9Ywu4VzQPY5nG9GHUpfNfv1h9MuvjJKuWyqGAF4D2YkxaFMHYsNAyYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P9WWAkiSYzrufuJyZkKTJqUXE8CUZMm8EicmDfwDUmKNuziQEDuUBeP3f7NUzT4VKHYTmFuQ7yiznQQgczxWm4x",
  "key1": "4GoxsSKWtmbK8p24zS2VPqDw6iHwG9RK24v45mbBsnhc7G5qf7UJhw8pNpNfah3nQTjSK3bmxskB1CNxndPgjdrU",
  "key2": "4rrvmEWubA1FBFYTV3wBVsE8CABTQDoa1YS4LK9Szs4GiVhmxkPFcx6C5y6PTsHXR8smyugCZv2hbwRbbKYPRTrD",
  "key3": "3NdEUrF8pDq5J3wbzNonvUbebNyDbGsuAWCcU7SmkcsoV8rLLGmnrFhLBHpQBQDe7mUXtGGbKR5ojmeFQzZLkFye",
  "key4": "2Rx5CHFuVN1sATeJCByUWxAkRj7K3QZaMDU6GAhPjqakkReERH1eJKGSQzyCxXpFt3MPQ7c5nEiUAyRBZHH1BpJx",
  "key5": "F85QshjKeYE7v2tRum5Rc51aWv5vaqxtC1Qm6LS3GmKArCRDhwB6rLaRJX9Lhnd47yDmFu7e75hxECAaGstfboZ",
  "key6": "2RyVDgBa292V7ttMNCXbWK1UX1gKoGjLD62AkfdWSenfWKA4y2zz14DHPAFMAUKxyE8SjAbXT5TKAYC6rCK1XCHR",
  "key7": "39wr3gBRs2dXd5yxEbxVt818jh7yiJwhe7cb4uopcaB91Wvzv3UjVy7aVRbJ9PXSh2LfVKEAAzTGjkZwGLuKwsmX",
  "key8": "3Bpsgqu1kqqdQVshcEVfLJir725qfRJTieVqBgiXxJw4fvowhurgC5mRadrKpbAJey5bB3pQhVnqMM8owzGeQjQB",
  "key9": "4Zd34h8x1oWQ666Qg72ewm7FYyGGqzQPjcmfgjk9Ta5FUTfALNf5dTatZvnrjKKKAfo3LZFhKQekitvLfazUooar",
  "key10": "5jbtXzdHUB5enGh5nF8YZHyZHjSCc56D55QmXxkzCa9LWCNVJBvtkarBrPTLsMZADm87xG2pktfisrncNN8G6Y7J",
  "key11": "4ZV5gkkZDaYV7PFWUSxtX4fW1vd6rUR9XfRYgsBWQzszahox4D9jS4zdK4nAwRhutUQuSWNU9VBJkjRvVHAUd1N4",
  "key12": "3jgEqQRLBPUMV7tkK6bWccbuwiMXfXujeRd4Xc3G83dR72NUgQ4kBu1gMskHXZKv71WVRAxFfX1BPn3k6FUYuWkt",
  "key13": "2azHyRhZzEE8oYTYK3CRniBWH5344avMTaV6svz6Wm74Cxf5T1pNcYarf5xhDgoHGmkyPn4Rc95rWBFtSuvr3cfa",
  "key14": "3o1u8JBcmNNJ5f9sNwX2GmFFFMDtVE1mBAugLNthXMX8AAqfBinZuFvBUkZJrhik4C9cfizKN2qkuCMLmGAo6w57",
  "key15": "4azjHjDtcWtKszdmmGmHoqekieKKNpGxFWSTaMAY2vZAFQAvLELSeh6beeYLXKNPZe6TDtJpK2oWYUywYqZrLkoT",
  "key16": "VAzwexndXxcfU3W252obwTDwEsWZ5ZbvvW1ghCakqfGy66vu2T5fksLk4tfHiHsL6jWawCN4wA1NwbnXJr2KY3B",
  "key17": "NouYRJCw4yn5MTjvk4XfHwmLVaBc8Mud45wqdrXozo2pakKWzBBVmL8QcgSUsdLUKbHzpwwpvAMzBnN1B5qdNcA",
  "key18": "i3VZwgTdkj1cXxZsjQAmQZip7K6wtR2fDE4fRXNfCTn54og6C2on9Yb5KaKhx9BEk5RMzza6zxmsHiGU3RXuTaG",
  "key19": "4xvDPpsrQqLAmhJLjrK4rmn2oJ8caaQSuC6UkkjtaYZ2pAyznWKarnxrzygkCMz61NguwtyE9yUh2fKG32zSeA6R",
  "key20": "5LmPEQ5B4zCT15nr9fP4UWA3xGwebwbJVsi2doFzzoscKb1DDGRitSmQfhb17s7BKz3SUSpwMiXdLm8dEZ2JzsFe",
  "key21": "kYELn4No7hsCHqv6ekBQcRAfgUvwJLAgamRjWeBeRWhNfgoWLgbPyfJDKuBL1nzSfY9sAZjfEEQ8dFJtwThjTNR",
  "key22": "5nB6DoeRWHWB6w8DGhmfDsGU5bg7TP1so93JEgDm8JLYpgwcjnapTnJCVmcwRnaRrxPuGkCT1AQUfTz8m1DvUZRB",
  "key23": "3z2q4Mru1Xq5ZfHT3fu8Lrq5aBoPLiLTyfisMsCcpj22gb6nmNt4HkjKwFyxyo7ty9yPpJtH145SEyMa9Ngtq8sY",
  "key24": "2dN3zPRSdivmfFKPRGv4EMRX9yZGC47Hns41PmG75YJHoHkNrLfmFWoiKgut6vchBdd2JwuErqRU1NahZRqjW4qY",
  "key25": "3jHiazBhk4i6BtykgbtzwpFS4HiHDSYLevzw6fHd4DFWJL9pRWHXDkVQd3ChtqxqU1cCQbTpVsnJedaZw9UpKyEW",
  "key26": "4we3EJmofvU73HhBqGyGJapTts7naX16NXsPqrYnKdoRh5hNJniGiyTHYhrX4G1ocdtxmiMJCiX5upEbJJQRouX7",
  "key27": "2DbdvBHU5A5atnD7SqivBenu6hi66jWeaeh19N45XxGKd748m1G9RheSTpkgRjPb11rL4K4ia6RWCZVUFoiBqaUD",
  "key28": "4ECrXGAokRrxmgSWdCiPi9X3CWfaRaqLtBCiUbZ5aYDf33p4vfNEyUvHXjzYWLyyUhJHdZmwZ2DGG6o6N3PmvauW",
  "key29": "4RVtRteFxnD9SP1SPvHHxMNt7GSjZ55pvBVatCNWsWo47is1EaPggPnKbq7D7be93AuBajWyhPePuSuhdghov7Ge",
  "key30": "5PWmA9iq8N2KsrfHTxNXNMAFfeSap2UstAfddZbsA6VxjVk4Bo2z9KL4oU5xC1NphVzJrH2bmNopuaQUkw8csoTf",
  "key31": "ztYUXZ8hi4CLJhaYELVPmV7tG6feJ7WAk2JeUZMsUR8VTNJsBbZiY1hgSsMk1pZZbdRcFBpacuwTYgod8KLiSNP",
  "key32": "2hgbvrmqgGVXkqCqFZ4KQqnaSudzLGrbbjxurmiXDZCs7kbKBN3fkdW2Pb9sxPMms5xyJ4rv3CiE6xxGwVrk4HTX",
  "key33": "3r8wcH8HLVGFy5Ci6qJQq7DR8EBACGHixWj1nh1XTizK4ECgCeiSZ9MpW6ECW4nF1XF43FxB1Y783oz88kZbanow",
  "key34": "35kRQ39caftQQDutgufTnjzczrSTtVHG7FGWmzki7tPq5kv9qZMWtXZTaREENFMaLarxR2kTwQXqRd3fqRtYtbq1",
  "key35": "3Cu7RjdAMaFBJB4Qn9ABb7gEfJvsJZkrRRi8Vj3FfZooz45r5e7UjAqHRZuMuRx9LGQdmmpTiimUt6dJCeWtJkB4",
  "key36": "GHMXYMGNqU3Yk5MfX1FsU4kgeUfTjui4miEUg5Hwxp9vQKwCXNLT4yd2Qvvz9SHumHNuHobXhJHpK2fFoZaHPpk",
  "key37": "5YXv1TqMVjtk1dDen3zkDKWHZWNb1h62YSrYMf8jj8T227DELx8hdz5BDhAW4NAC5X8DmoH5jaEuAmHekYchkSLL",
  "key38": "58ZLR49dsZQo8vVWwc6tc9FeFyM4vDXQTAbq5Rcj7P9Vtzna8T4D853fzw4saKDZkcGR9CaYc7wasgSPq1t1fGax",
  "key39": "5Eq4vjrZ7vSrxMezyHcLc4gWKJRskuySTUD9H1pD58tCYRkP1BfnZHvKCq3NqVjxaSMqLmQkjQzifGkwR6jHtF4G",
  "key40": "2Ky5K6ABFCnHhaqKCse4rZyUVkWbxvcXweQa3419V1w7NyuTHoKfLNdoYiCKQqSJHMRMK3ZRj5JKzixHms5gN7SH",
  "key41": "2jyWkCeRpPiyzba9gJ36RgjH6ELxrzwatYhXwPYg4eceZd2xmzVh8FnwnWDfHdeBvmCmQdMCptdm2xnmyKx8g3nC",
  "key42": "4Pi6bVXecCannWand6mdffoVJaUUuTh2YM3HLt1bP8dsfgjyvNsWYr7rD181aQN3UBZ1FD9Ty4URT6grtH5VBi8A",
  "key43": "8aPV2TfERvAKy6nZBx7GgJ6zpzPCUwyBE4mVf8RtZLEJL6Brga27RQtZWk4DXZHfzvqbEncKxtNQ8Dz3y2Q46LF",
  "key44": "eRrNfG39LXPybfXUyZTiZDBQZj7KXcTrBMurb4iMHkmGJ4WiXGYNVwsEjBhHAaLtvGq4fGRyyyZmu2hshXq5V9a",
  "key45": "5efo7hxoDKo1tmrjwEurr3coDaWJXebgLdbJtMZZA9ky1aEdpXGEeyqrkH6UQxtjx2RVxv1bz1vUkULigVZ3Woxq",
  "key46": "42xTs5TxPT4rxMG8fdpggTRsK7yudgSD1iTnvy9W9r1LTuz2RC2rAe5zSccSJC69bygHJR86v6Cfh5ta9YMUEvQJ",
  "key47": "5sNiJA5TQQVKyzZd34N9AP4wuNgteeZA5Jb38kwqQc6awqGmwas2s6c6BhCbLu98yfQRETHMumsU9FJpuTqFU5BL"
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
