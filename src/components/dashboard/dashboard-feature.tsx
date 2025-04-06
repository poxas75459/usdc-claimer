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
    "3ZoEpTs6W1owc6MfKSP6dT3BPWezU3QwWTF2M2YKNrdca42QSgmVT6bniZrtkyHXzjnUYpgwL5BhF8UgUPmtmm4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QktFX6NKq4TobHgkjU1pTwTbAw8aiR77BzZx9U3VMU5PU5cSeTEzELErs7ZodMFjSyrtz1NH22c2KFapJgdKxYp",
  "key1": "2YvKGfrUW4JPKsFm9EedR9qfzM8CtX7aQznZWaDLqkrC6crfdecupztBs18tezUkAeSkSC21Muy9FBvDRjCNGnHu",
  "key2": "2PQmhpJXVsNNUhLvYWyfPu32r2347wpycson7BspGp32VThUQ35wNpAfK8624T7rgBfr8qpwUNhgTX5qxBuMV9QC",
  "key3": "HJt1a3QTshx5XYvkhEBaNx4Y4gZSFzP61YE1JjXkNyWQquHGNzo2yHZGoVCW6ycQ2gTSjRYdpbAEcFWpZYwmtFN",
  "key4": "bbN8y4YHV8MuiLrhQ87cwgC2zhYBfyCEtp7rsmpy8GXB3c27Rv1WFHjceeSyJPJ3QkCcvWu2DytA1RFXiCmEiMP",
  "key5": "2yByDozMzvgXXCVedmP4NjcCzEFk19qgNsfXe9araMvZhcmhYyVyzVkvaWS8wwozeejfEAqze3qAtfFvvvNh1wok",
  "key6": "2HSwVKeP2ymPXWM2XyodaGSM5NUxRvynknGepQmvyBG1BG96459YfioyyDwFWyhiHhddA9zFGjs39k1gbhWkAU5P",
  "key7": "4LSx2xyTLZHTeATZyEMWFSWSngfn2TMGSYnrK5xbLxTsZP44Sj6m9p1TZkFPvsVrNha9fxvZGsfpQyQZLidpkCy9",
  "key8": "3fftZjLpgYhdG3V58LMkscEu8XpBuAC3TaNXqgDp45BBTtRtfrrBcWeLx684kq9Nk2EKLajGnBkSvQPsQeyPgyzL",
  "key9": "284ft61q7FqKGMHDwZ6taBVFJzmFjyZUxq4znrYvicAKkWc8esbEvK4UJVri8gCiRVt4bm41kSNRY1s8ikEh9pb7",
  "key10": "2nPwXT8PFGc2WxFHywXUfBXCF2QAkU2CWQ7gvszRMku96QoHrPFbnJbVrLwkKVWMp6bFHMBzbYgpv5tFeXXXS4Zm",
  "key11": "4suz4DM7FWPPCj2DGQUEDiTpB13MwGZM7MsRW6Xgwda2XZLWeYRK6X9Yqr6v7Zo54AKk6tWjxzYUDp33oN1mSVwE",
  "key12": "3kSLjS6KSWGR9eqPSzG5kqMutR2Vt32Q9zcNQVsgzUy1Q2zHVzwgLEQNsATPkFhE9ec4mHvkbG3yaApYFVmdRvga",
  "key13": "cKFw2KwerCjxj3hYE1su23xSSz2vvTW8D65R1QBGJAiSFsiSarzWgrGjtkQoAXZgYYi8xjEALxFqUeMwgDUJat9",
  "key14": "2pCq7GEcVwcoboozEwtpNKxicct8jLQQHvqoSS2M4L8nn7nHqzLCdTEyMva4yPiiPcQr2J91b28a2SSgEG4n6q4D",
  "key15": "3xbPSzmJRRQugQdKsm5USgo2oSYC9k7wWeFAohrnZ6CsHSADeYRx3mjWUPTVaeuTBmyomPyRLeUgswsbVd362tVp",
  "key16": "3w1tVxVXRZpLLpK68qoRGgkq3qXx1vuQBnG2AgH5YidsHfgWXQ564vuZ24KG7XUoC2PqQT9ijxzrxQApAWjtkULb",
  "key17": "5QNJxFFkfbwzszgZJkNS1T1CqwLiGgAnwhHH2FYrxvgLAZaaCVqDWCaLQT7YkUftbrfBLcMqwzzfbtCvUHuCGXdf",
  "key18": "67D5EbLoA9wU653ikqSu74uHycooLqgPqpdUnQjs2N9KUUhfk6aDXsaa5vtsfEhcwRiSLJWmmgS5xJqZMSMxvJmg",
  "key19": "1b23jNfj2ffD6cwZNZ7hijbPp2ubxL75XNSc8MghP4nC2MzMQr3ri6AKui6goQwBr1Z8i8QbxmTFrN8zW5S1EMz",
  "key20": "5SVB7F9w5HYUpPjP54KWmMtbrycZuGsPvLUX1AZy2oaec9TnsnhdZijN3xsouBjwrXNwsNXrpPNodWrm7R9FCH98",
  "key21": "5rCxWUcvYWU1tv3RMLzHzofTgJYgaAK5TyGsqB7QWH5D4uRyjkJ7quE1RWBYbo4odosxKrdfbEVnxzc4hxxCGy9U",
  "key22": "bx58J2ZQzGpswYfaWFEzPTamK3wU9WzmyLhyrZCkmCrWaZgXoN7CMxYcW2SaTSDNL8suhReyukDu3p6KNQ2Viwg",
  "key23": "4Q83Lv8uDWBUEaZKxhwLTeHqCaFNJ1UVLvrWMZLXCSMvTAtjwPVmVKF91faCW1PpnVUCYceDsyXpvJnE9gBtxzpV",
  "key24": "5AS37AvsVjykRHAQZYHCSa9JJq7CcUW4ea9hnr2xnQJvYwbUF28c3jJzoZFgPMtybcEuGXw2pXDQccupXMuq3NvN",
  "key25": "5bKY54qk8of94EVpnUJrpYdxb6NPZXdBpNoqaRQwdom4aTokAScLtzPT75ZTWQy16ywxyaJewU2DrazfuTz2sFx5",
  "key26": "sUJz9EeNw6HGhkjahhLet91gJGzNWgZbpvf85FM4WtCMm3YkG4CeQaPHwHybTDgf4QpngBMUs2vridZkaYXyLNm",
  "key27": "5G2Eqw5dJZazy8T69EqgBS5LyEZWWoRmE8PNhbQsony4Nm8MZcekU4YZy72nhuRonMF7vq1fwhPLrhJck9h7Ui8A",
  "key28": "wsjfAUTUGZoKPbq7r67sh77HqHoxEtQZwTgBDmTYQ32moNATw99SK7EndiwPZhBCdXURgFCXrwYaHm6M5L2MRpZ",
  "key29": "xqYZ6RFeHfvFncAzSgY4KW426Mkq6wkn9KAezqJRyFn8ybH9rxkW8qKetnXXGfvBGCkXDPi2Sk4ZoFUToCViWQb",
  "key30": "3du9Tz5rAFkGMzh1iuXUfvEizT8miSNBu4WKnvWvFTQ19hLgk4Jx1RQrXpSJuPftHsiwMU5M9urfAz3xgDhcKVaL",
  "key31": "2nRgJUTGHtE1JcNARBppKDXvFA2wfFLPcye8VEbX8w2G45fYhNmvazwamDHR82nmWgNH9aPmPaL6aRPCpbRiinRN",
  "key32": "5d4meKAY69MLFPszjTzGHJBbWsBSFDAKVDoAkukMcfTePStHX2p9YzizfgGRg8qFyndEY62AXnBveWZBgvzuyTTZ",
  "key33": "2SKsADnhsXQ1UcT9xcYS67jVJGMiFJA7mVKhzAKYuXcy6HNmdD1nFEBzZP6maWosAATcgYTQNZWGii6NhoUafW2R",
  "key34": "32UuEZk7tZWp8B7k4tD3vv3613c91s4nZ1UZwKLQXY14unfsf3stSb9TWrN1zXysneyZcPvUw4AuihmTvxWuAJKD",
  "key35": "4a3fXDQBzQoEoytSTk5GpBUnEu3mThVMJ21u81aYhHtt1Xsa2AH9yqvjG3taq3uX2PycvMhyBESpQnBj1hTyZ2Kb",
  "key36": "5XcTL4kJoUayPLqqgTkph5fUtfjk8sD9qvYSSpPtpTF6MCVno5k4jUSszv2TQEVpmfqhqHoXPoLhqEnj45LWtkGi",
  "key37": "2eRE1CBAWHTXTacNTszEDxvHcYUrAc6QgSJu6F6ZHWAxEZJ2p6zjCFMovhZH6sTCREcg6EUwg5PVuZyb2HhJi6ZH",
  "key38": "4w4Cmf7YcWiQqU6eHPqQKceCCKz9pArEkku9GT3KxS36EWVhq7MXqBFQ8EUuFe4rtQ8nmctVqWPRNZZYvvNc4XVM",
  "key39": "627ezfDhv6M6MxE8Ywxo379xDV2FT7SrP34kc9JpTN4RJMVssHFbXgzZmfoP8XM9qdsYr86haTvnRukNWsXmLDLx",
  "key40": "3vD8uNydNrzrz47Pf62FKKDQktDs6jUDmtWTk2AgLH3pkinTM3MnqYAyWvo9q1W58aEATDMsbJa7BgnwbeorhFQ1",
  "key41": "4p4ZV5D7UJpmxV9fR6cHLP4iNZKhfuyWySecqersDpF4LvJZe78fwx8mxc6jQcoqqMSTT1hrbd8izyxC44EKNJAj",
  "key42": "b7WpG77obYsEwL6dxKPvtxw9xQDRu62WZszQqQ1frRb1Z9XjkohF2bD96qjdY1xNdQY14LZKFqBFdzcxGEpARGk",
  "key43": "4C6MxqgmRDmzYMAb269T4r5iKemdtbFwayfpGEKRp86crQbhwiySsMPpDJUqMzDP3qUZ2tpjrjk37pwYxhfJyj1b",
  "key44": "HQS5NMQ4ZYiasEacBnaUjiGeaWnGBJmpsVYczDaazp17FjybG8csVpJ6JXAh7vwRrnbm3yTimCRzMtxVGDjU45V",
  "key45": "5Xc2h872JCxANmv4UacUdeLfniFM9AgiNDFwi1pMDuvExvmS6KthJevvZUmy5AtRB1VXe97bz3uUoguVvY2JFeSo",
  "key46": "493BMyddnj1jhBRUasomGGFiYCmbsB6NKAQEnqe6SXYcv7se2755mv6VN8Ms85faumWECDM3wjEgv1LRwW5AKFaP",
  "key47": "4jNykDsFhnNY4D3P2Mc2uGtP5Vdx4v8LcGTRPYzhphUAvdcYackJ5jAY2cff46JydasDmivMdaKRpFmTcLpSUjcb",
  "key48": "497sYhSypLx9qcjVuvm5sexjdHXzSmbUQU5BhV9qicNQ64JDN9q79em7DEk7bFpfYD7fGfxJagGYh71sx9GWxQT9"
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
