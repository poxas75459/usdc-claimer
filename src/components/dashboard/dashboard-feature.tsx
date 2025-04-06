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
    "5aDYD97oDX4qpzhKRvT7nLsagGMq2YJCEF8GxbwffQ8ysc9XMDkwsbREq7CKrZT5JNWKSzTJokBjSBmEKPsf7sp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XP4FBD7AD6vSxY9FeCnKG2ynrYqX1DZtu5KuMojuATm4hdi2FwzL7gKVprTDecenVQN4R2a5GTTXZszBaMP6Cdm",
  "key1": "3wTSVF9s98H5zXxLRow4MyBJ1732UVFUrZ37zDBgxvEbsP7VJ2oN5FRoQW4owTmun1H7KBo5wGPr1aUYi4AtsfsQ",
  "key2": "5HbbiV3zDQVV2xjNGN6bs6E8m17UVkkQkjhazEhZvb5iwyW2946XFmFpM2xjciHkEwXJxfErYqjHsnGNGGLvdUDS",
  "key3": "5qn9m1A5LUsASFbHep6Jjm4AC53Fn6UbLtviqrLVp47E25FMTF2mFBTzbbY3yjCEVs4eCSMYKTs3ovMBv5U5MHjT",
  "key4": "3aXcpzTKbwy1yV3ZJFxaFVa4cf9fR6NZdUeyL6SgMEgzTrWBTjYdVrNk88dba3758DSGhRSMjo1ugPxwnRraJAdo",
  "key5": "RhpQJdTmn5xy3hV7hEW4pRuQKwkkULRzw2oqHg4HJJ8WocSe1nkbddWAH7Wh8Kw7ZNGMppE89oXCHLNXR2EHHso",
  "key6": "4F8jD8xBSCd1iVvJJ5zUPn4P2bCHfpPcBoEcMQhLyvPvUXJ78gJGr7cjGTLvfx9at6d2AwKMdThpC9yziiUS18nZ",
  "key7": "64Y5oL8g22sg8x3cw6FcQVWP7yEv3zAyEgRpgUAusfyrEXm9c1chFmPnkRosSsiQ9E2sCJA79xXwXHuSVe5d8owQ",
  "key8": "2DQBZmmheLMp2QENwA94QBidefHo5ejuXdkstx1iVPNFLwZXGBT71wUH1mfbCMFxam4J5JVYDFhNLWp6QgzgPtsr",
  "key9": "ZuXJgYAQBRYcCy9CQNoYSYZa8ftm8m4bhbdoz1mgQ6xTXc8nWE3MCXhNdVJBCNP9zcK7xLW8VHR23LByetjDTBu",
  "key10": "yMdvc8QnaFaUfALu4mG9hKLMuoJEDceqCfz12EanRGYsfkE7ggZAmdY1Ms1A3RHw5DBVZqTqjFZbhZcrTPuuVf3",
  "key11": "5qJrYosj23tK22hTB9o9SPwz1dzeR3mZTLYPm5a6d9k2nsLBWFox5T7ZPbZWK3VmypMkhwwMKQXsvQoKsBaMFBvi",
  "key12": "66S1TBgabQo59DyNhn7azsvuTPpcLcTBnxGZmxiq8dGxq2jJBeMhjajp7cSNLnHHNaMya8NsDJimJNvxzeV3eaRX",
  "key13": "3YFYD8q1YVHPihGMPkGJHdpjZN1MXioKget76yF7TcS7Bh3yePsNLtPMdz2QmdQDfzND2fY2kPfK8gHQz3fYcgB1",
  "key14": "4Lk5ftrMxTQ6JkyUkY5B1ZGiAMrMSv9JWXPXyDxY3ABYhGw4cnF5WExiEcJdqvrPng6ws4A5KWPveYTNdbMx8bgp",
  "key15": "286vuuvNKohkgw2mc3npNFpJfjMcRkvc13V9gCgFtGLUKJ1neppSo8FhrXqsixovqUo54pQXNsDUrqZhgGCSPXxa",
  "key16": "4LDepp2EDGyrbGo3WFW5Z7JSWn2GVFpr7VfiJm8R1RxYwajBT4Ueqd6vcjrsn75gqB1E7CixFsY2tH3cnBxcgDJ1",
  "key17": "LCLbQF22BbT5qQKaCZt2WQiLpKNM2tsigzTRo5B4ZZ6o8Sak2YH2YaMJ1SW6rw6jqjYGvdradErNRZmoE5LTd9q",
  "key18": "KVBY3Ed5m1DDBSqRTH4jqTSFku4UtgLXQEB3D3ZQsAKPp9SiC7bVs6vpnGhcnqMWBjdDpPr8sqFdJTbw5F6EQbR",
  "key19": "hkiaeSJLQPMvF9jDG42vc2UsiyKGWitmW2Hv8395Jj3YyDiW7xRRwhZASqttKEfRWguj1Z45Tsjz7ZqFCQBgPkJ",
  "key20": "3dsRqLmsVoZpEsH8hBcmubXag4T6xppdcwacsbimiso4qUQvTgvwpwjt5sHUnNGi5MU8hfFFzVgYv8Gok4NKQzua",
  "key21": "2WqZmzdiqNSTfUTVg6XQmJzwxPuowT97oFFrjc9PWjeeNyBh4zkSYS2B6KA7LSCpXsjz2rYLLyN4JGcTCbzrtHQs",
  "key22": "4GL1PgRKTjTNYtNoyMSgxUhPkUxLmbfZtovC51mKByZ4gTx2QCknTsjmRrpzroCq7xz94ASxGgbBpeS2qbc7X9n4",
  "key23": "3F2pyxLckEPPrazEF9pLsQcupTTvGgJ4G3cVbcKtG7Wz8txadGNpMq6mTQzF7yxaSsU6Ga2bSeAmGDXpGBy4W5LB",
  "key24": "2hLQuKYhqsTietwbFjc4Pn4WMLRxZVadGtas4Z4EmaQgTTtBLgLtcT8QV7DaCt1YUkUMXMRGPe8vS351gNt6TGSZ",
  "key25": "3HacVLVjh4qMqtpkFW5bk1AMxshJnUgtqGLJfPY2k6UGxfhyHczMg46uCSSuyFx2GJdvrcMgDD9tdNGCjwRniRBc",
  "key26": "4AbhH8AVB5uMHA5YJtaDegpdmcYnnNppNmbNUcfNTmVxBDUWruXFDMgM9vtQGahhcRxF75EPNXrtxuQ6PNAKRpQe",
  "key27": "qhrdMmTpjQzqA7BzDC17etHnbp2eN3T3cRCdUDKSBytm2KB3b87n3761qxowGVjtqmTMMtdQ5vhgS5TcEyYEfen",
  "key28": "3VqvRSGXk8ax3FdGYExEWwD9QMn7LV8CYvaDUimyQ2rnZYKQXBP6JXnWrCi6DAANQ78AKwbWiPyAZaRCeQPF2RJn",
  "key29": "4WYJJTNa6x6BAgsxY8ThE5C7xp1uF4rzswceu1abomRpqbn77wxEAAXWCpadsHaMQ2GBKBLXBaYc1zGUp5mtCo1o",
  "key30": "26roHaew9mv3LGpS11cUjwAxv2dBA7q7vgyXqxw6ToXkW1yAZfxH1keQCKuHw6y86BycAdE6kbSw1Dyngukzeknt",
  "key31": "4rz22psuuQ5f6y1q4EychntQnpQ1Js3at8D92ez4bq9kh68EvemHCWK3CMjqXDZi5xsxGfWvcmw8Sq1PL4K8MSxd",
  "key32": "2BUA4334awuT9d8khXnFc7owgcBQDwFmzGbX7gpq8Lwk7ibXqycUuMdvSbyGmvujKn5UeZmZ8AFWz6x9W7Mb6XYG",
  "key33": "3K3AweumCxajEDUUECHw7HrfeV41RHimfyLD8Cna7jq2jA3iWSpfibPUGoa8SUp7Qjk3nN5RbUyXNyBY5khzRyaN",
  "key34": "2AwG99MgTbdSXM1Y2uSLxjJg4dK5WW4CD51KjdSTxwGPjeeM47CCdxJCkvo55kXiGEa2ZPL2ATqvvSfoTUG3SqqM",
  "key35": "J23Kv2wTXDciLrijHNxy9n18b3DvzWYgfQpkW3MkkxDMXvRWTPnpyvsfR1Ppki69fV94HZwVuEtfESwW19dTP7p",
  "key36": "2118CgNWhUti3B7FeWd3vFiXsUR3EGHxwX7YKSVjZJqvVqNBjp2dsfkh7M2KfpvhaNgczuZ79hbmCWrhCQdfW42f",
  "key37": "2ofVLjEmq7oXJt7Pn5nMZZSAKzDh3SHu6iq7BQsS2zDrn7WjuXkvgTbBG1Q6Xc4msHfspaz6GmF7LzuRc2PoKHiG",
  "key38": "P8KWE5iJb3dj7qimkj46JF8cARJWSS4YzR9tBUCxpZVGaAFwaic3uQ758j4Tk4dVNJ94ZCwdZNiiutVkhxfRYeb",
  "key39": "2PhMEEs5xEppsSPKUJGCW6nFdtC2fofAyhtW8Ss4SSKj3XEsbwfYYmqLH6ph1cAYjtDchzZCogEe62rf2edmprs7",
  "key40": "4or3YMUkY625Cma6qEUYLTBkaLUiRTiU7iS4qnYkoX5HNpYEC5Hfk5knW5FE5cCwsSqPjbHeJCizaW5DyFhx6Y7v",
  "key41": "3WJSmpNNAPZ9Fysf2VmEbp4pJ3oAFUMfrU4ucjcN2bk3Kbt4HxPhWwtj5C6t64TxgzPe8m7Ghiza2zHxdBs8Tpu6",
  "key42": "5rx7Q7VsoSZ1jXD3d934Yp3mnhn3d7MjUQBsgeDPixMu33xBXBe4hpfvyA4Z7XgiPhTL6gXGy7RDtKWKmKezrXTw",
  "key43": "UfeyfztJBfDyn3cGGkVPw18W6Ad4ZkDHaZNHj35YQwokyiaUQFrC2exuPcHVqDBgjRerWsoN7m8VpnitEjgBW16",
  "key44": "2HUyR4i3FyQrQbrkpvu2ZLkPH3jDbAB4PS6mD5yx6gPLNGp81qZQ1RmPmSdysLZV8A2y2PfHi5qzcJR3R9tX4agy"
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
