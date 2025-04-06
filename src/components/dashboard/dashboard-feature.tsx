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
    "5tq1DDPy11mh5MDN9HcrUwqdpUeYF5AtcJPPjYbq1JmNzkb1fcnB7hgeaBZy8fSKZP9wm5vmxhhz1VEiRCqvGueC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32qmvPS86Uw8JK6yCy3pUScP9nEt1NovdPoQhfQiUhJ1bR8JXw8TPyacctKB15TM78ppJdCxJEpojLG2S587Cx5V",
  "key1": "2eKuZXevom2LznSkuLPGTrfEV2gwY3MPjXtxyX94MFeYFueUKMu3Wx7LVyCyGZxYAAgeYzM1bMV684TVGDfdkAVe",
  "key2": "4EV439vc81MFD1HnDieg87JkaXmyvCMURdFT6nWCyTnojVZQmPFgmH8bktLvNbHSG3LmshNpQs7us1v5W9jvH7s3",
  "key3": "2SJtPntfGbfSCaZTP9drDHKMLboL2euS8wUJDcDMuBsb7PStcDmCheoRHAHya3Zd2rqb4BqN3DcnWjhuP23qssgX",
  "key4": "2kTe6Wf8qsuZMbL2wXvCNEUp9RiiMbzxEkysF8BHXL8j9Db9M4YhTmr68jBGVRLgnZ7aVT24vhZCNttsrJWCukeY",
  "key5": "2txaujt8th3nSyoeBJ9oGXes269ReJVr5gMKtkN1w1aMEDMeBnckm3NHPcxCDS2F8FYdjk73ExJr9ty3Titb7k1P",
  "key6": "3oeRtZzsMuhqYT8skiMB8QrKkqbkQQ3czvf6E12jHKgjsGZ9bK6Gbf5yKLcQBLrLoB56GZ3vsSMMSi4cDMNzGVuT",
  "key7": "3g9mCyCqLj4uoqRRG8A6dmxmLK4kPxEzo69eLT4ZaqfEoTDdq1U6deMnXSWcYhJbLD3u8YGARMpu8jhCy2ZQTSnu",
  "key8": "53q9JSuYq3AJWWhUCBDhTXCc7rw6MY9JoBxWU53yPH7vB2ohz9uQZBsAEVczyx3GdhihLf8nBx4sSQjZt4Ykipnn",
  "key9": "2hnVbMugHaNoBS2NjHq4bS8zg14iJmdLBXG8DLRyQfdRoWcGku3c5SzZhCPVGHBHAF8UG1R3UNguBCJaQsCcZo3x",
  "key10": "59TCjCnmc71J1AgXFKVzqrBpZ4eRrAfVeapLcBZrVmr4iAoVkJgCjD6GaxgYGuKnAdNZkRomPxkofkdGEoFFByGh",
  "key11": "3SnfTmW45fMKcPaNqQYA5UGUcM26x7w3VmeLs2RzCspMmpASth5B8tk631yWoYNoqCT4BXU9BZwDMNMfU1Wb2biT",
  "key12": "TtwCF5FT9wE3WBarR9etEirPkAJjQnwUcRbHMwxbZEahrFoA3xU5Rc5Su47D4H71Y5v5XuZQDhxvmSegLo17gTL",
  "key13": "3hsmdBbQDHHGL6Hp5ZsUz2nhPLjEaQHikcbwxFCZTumKpjMDXJdXtbfMwPANnvk1My9jSBGYUgzqsnd9pf6S7hzt",
  "key14": "3w8Vy1BYFwd7Gm6Pz7W86h7Nor4arxXPoRKV5JiNxTmSQZhpbki51z5REV6r8xPsNEF4k8ZviQ7mBuEx78JUQqEV",
  "key15": "YSQ4svwYjzSqyqUoPAMSToFSgjHhCFio2kksKdS26MbjRnDGw3FRsbWLXdqTECJ15ZHCFAG7etJDY4r2Trh7aik",
  "key16": "4AitJSprVrbgSQdan3vJSxF4L95M5RqaAdiVyHtQTsQcAUcMijFQK6Kwnp4kK8gaksoJC6czZjsDyyeCyB77cpfQ",
  "key17": "3DUCUPuCpFF2n6i3FMNaC9m1ySP7rv7KcYFLZTwBR3GJQL2xwogrheiKRvyz1cMQz9iqJPMn32tnmFXjRTR1iFwz",
  "key18": "37MVN5LpwrtDj4NABW1upLPEw9aivNieiFJ8pTjoWQGwncazYj7UYz1bjuxxc1GJHGp42mvfgoDzgtLt71tZ4uS4",
  "key19": "XyzcX3GaH3cuAbk7LWuiYJYz5JTLLTo33UmMyBnSsZg4Tm9qXzoXDBYMSBKHJ3TozmwbzkBSkezAGUh5G6pgP82",
  "key20": "5LoSg5QjvhxvPP2bw2AefkqcyxBwLevSKz6eVoA4cvibbwTFbtptF936DQZuTV3AuoQBTEzxWR2y1GtSCqVHQHRe",
  "key21": "3VQWmBnDpEa1ACxpfenKHjJgHdG2tJTTTjj9NCgc57wBdhXVC8LBGgBZNsiiby3V9xmrPzaKJ6y8TbPnpxSzbU3B",
  "key22": "4zDTv2uhqnTBhJVBKUBA9Dj1xjxWRxUsSWqjJWBY4MBx5sUaHnqQGS2iKDXE6iGwwhsve51DPZPA5sMRnA44oEup",
  "key23": "54sFR1fDMjcNhNgCQMjQMj1q7J1iZ1yu5Zq5bn7pA1DGjyXSieXCT49fVwMZWuMHe6AcoA34CznQV5rEtEzEwtBM",
  "key24": "5KX15s1Q4z9FQ9jHvjYjGy9NaYrppEncNyYp7TJ35ZhN1d8UWChSfVTtenQ9PeSk7Gg59tM91wnLWwmCiaLLCdDW",
  "key25": "59e7RtUJf58Mpbnzh8NvMrrccpbXq9LodFozrqZq34Y42GFX9sxUCduzrumfdD2u3s5YgGJJcYk6tC19tL6AuSyF",
  "key26": "266asc4LpAvxQ9Sc2UspT3N8KDbr9Ng9gMBs4TGP8pwYhzcX4KtTWUF7r1BfBG5Bz4WRF5bw5v22UgUFyGzLErNW",
  "key27": "2gH4o44WEzt6u9NQuqbuEGTeRG463meeLPqtY6G32evK77Z5q1q5zzoaCnVA1WAebRvUQWvBSrsUFXV7M4pS2KSB",
  "key28": "5yoHniR4kjWTN3cjSdHForLYYP6ek2HXwhMMFyNSgfyJ1CShsjA2QDJgVuBhsjLVFMFKxeTNhrmcHNo6qtY1o23n",
  "key29": "gBGE2LQpJXLhDFMwi9QTUBGNVUUsZhVbfkyf786ygbFkg9y76RqjaQJhizVWi95RKPJr8mayXhHuXKZ2qTv5gzt",
  "key30": "5YEVufg5Kn3oS1LZQ6JGwhrW6PaxE1XSb7PTn8ZUuNg2xBhR12fYsmRFReMVDanzDWPwVM5rSLBRQPWqqknUGyNR",
  "key31": "39GMU3CT1PJzsgxrUwSd7X9idmMNFrdNztZLL6e73cLuaaMhNXEWWXRkPneeUCGUvoWpMXSTNJ8r323FjJWLSom3",
  "key32": "QNZ8PPYpaPM18xtWHpDHoBNCLB9xMBB8HwxiqBirnVqhRAgXLUpZLs6wcNAoTuRqL6wfd6kpnvEkkUBwaNi16UV",
  "key33": "61dnMtpMUNVC4LKfotCN4Fw9yqo9XLwfT8hCkP61BbFzeZXcmbA2KJeo6gbNPwRnLgXS57SsDaddn99DJWubyZMJ",
  "key34": "4VvXy3A3U2cw3SD4dUo93uC2tub6Ebwg5Z4htRaJBNTPeboBKu2kG8TCRfWEdqcXtBv9xZZqDjXNu2ss2H5XGzhU",
  "key35": "5gYZKmwXRN3WFRQGvow2aB7E5TWSk9qxJMFRDraVMtdQ6HVMjieMPbCiLGjfDiUwwqmUmqp9WEbqZejquHFm6s41",
  "key36": "4yKJhATnfnxG9v6XdApBWDLonWKaeQkdTS2zxrzPtHqUhM4qcSDm9e5DmZMQeUJ1SCtAhjrV14BJh7WjqJNH9B2Y",
  "key37": "3QXqAJf9BfC3n5zxwnJy9NjJiUmR6Urse2NiDcMmGxCaVqrxPPGs4wYgB79w1pnhmAB8oqeFw9ZzzB1c5iDQH7LF",
  "key38": "vst5zHfMiazP8b4f34W25WfVKNqbXQMcRMJ8RRppvsFb2oFyqrxVgPiqRDuGAxaxZuNpziSHDNZFqq5fC6kiJuS",
  "key39": "3YxSMm4LXwAP2fMtqLBe6MyZ4nEwrakRx9DgfqgsbiEdvASDNxQv76QDsHajBnzwqJ61ohda6csTvvvLu8ZhEE7p",
  "key40": "5nTxysbJbgpEzaVEfc56z2b7PBqemA8rvxGby7t6wWCSLccrPTJYTa8DhFxanfbaQmNxEUJxzF416YQjyKQRK5b9",
  "key41": "45hDtJKHxp384CgfTf8RGCDCAh5KEt2fJ7E7NTCX79hwxdDuWdgYHHq2RZLcDdwE4wwCtkXcZv1DZcYrgPUEufpK",
  "key42": "3SZcHsQ8Vhq883qA56MxxSP1gnhc6o54AbTx73NSEFY25ErUE2QvUYMCUJHM7FR9WDTZGsNMRKYvdTTd1rM1Q5XQ",
  "key43": "2Q2f5nhvw6PHoiVmniGVehPp42TKeFyJDAQ9oAa62PdCJbjzLTNzUgXghXseW6pUAJ8bkQQ9rwNwgd3M9xc7GtXm",
  "key44": "2SzxWpDZavBnjAktupLhVdez2qsacdQ5eL2F89Cwqq9rRZCUf9AZXo5VKSrX9GVSezrRsRFxS81Az68ziAwrgBdP",
  "key45": "4MNp7zY2AgqUDcPjjuPESX4Epg79iFJF284shGs1CzKASG4PYFvaXsXWMkoY99Sx9WxqXjAKuEsYCextci86rc2K",
  "key46": "2fkPYs847zhZRAdWffA5jEGcjJ1QBaMtFiMK83T9asAv3TV7zkikWJcX7krFFUZcYRC8L8St2yNYGbQQgf2pLzef",
  "key47": "3DV7Gr7Nf971kLTUPVbw8Kid3PpBmDPq8kqR9gkAYc18oYiQyR7BxhJwt7CBi3LZvHetb6wW9TFv9HuvpzYSttF7",
  "key48": "gjjyfW6rta2dQn8Zg6sW67a7bsaph3rfof7nWXSy5GHc6LzDAiMgRNcuzapkChxgzQhkr8moCZV9Ufbxvm4XVvn"
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
