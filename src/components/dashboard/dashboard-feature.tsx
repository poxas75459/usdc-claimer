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
    "5bUZQKf1dsR6YfixcCySurG6rfSo2oTeSmj7hG3FFLUYqgMh2uxhHMUT5vQQGeNUFZkXurbQi6a6Mgfu9LM57kSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q8QPmuB3nuQXsJ8Pso7L4xdgA1BmX34xA4PLUwiXxKEMNn4Na3yJs7vhv7V1ET8D5MNozdDaGou5RS5vHun8KMQ",
  "key1": "5UQ7Qrw4FVKLsx5eYr73NuZj2KVvCNkGCYFmVsJNqsLeaMFVtLYgNp4UFgPnPgonWPpCSHhUcZBQcjsbTccuxouS",
  "key2": "4hNAhEYgBawwzqhdt7YUVR1oqtXaTfL3xUvEcMSHiFFLsAGM2WLWSW6k23VxMZCh5CDvuHnMJRc5VSDh2pCPbvtG",
  "key3": "2mz3UdBFniUHijVa1pDtBsGKbBFxLDpiFKnK8NE9BCjEaW7dEAoNUm3SDNMPGdq8RNkjS7xWUoAGxCSHPyZktavt",
  "key4": "5jmccXxQojcyBpVj91L6saqc5Yvtgk8adUo4CVRMBXbmUcsLzQkPtrwVigwCX92zqPZcAXhAW4EJQxtbhNCwuM1L",
  "key5": "b7tcHy2W5yui3HRwxCZuyXr3KtYtsD4g7ziXt5mZEuCkHLTWiyQsdDfTaDAnGkj29EodVEao14LrttgEMSYii3k",
  "key6": "5v5L15LAMBeEoA3zskcN6L8vUXds2oJDm3WcgoCB631WQzU622cQjeuQ4W34CCjp7M6iAV7kZvERidrgMWVHzXPY",
  "key7": "5zX1cxRakYjW57eVZrTkvpRWBvnydTGgYcFRWKjuHfaKmc6Zu8LoPvj67n2fLPFMZWJGffvrhB384iVEYDj6habC",
  "key8": "275a6ZZAzyrJ4dfYkN97XV1133QvDd6xXHpyWE3XgbZzJM3ozt5RChwLZ5C174Gq7BmcZUYmwPZFFRLZYnVF8eWv",
  "key9": "4BpL329cFeSSC6xhwdt432BknVzrkdcf4EQd2DcBHgdXu8NXhcGeaEfXPPbyfXYzhUb8Zcrcu2JbRMcNyuEfyhd8",
  "key10": "DkqG1YwacDcJesEst4v3xbJKmK4BB62pgiGMvQymZ1XsmyWAt5bioaGwf2YaFtpNBEHBN1t7XS6D2xa6mqu4tvL",
  "key11": "3cUMu8NMfdNckfp3yRHxmaKVH259q7tGqworftFudGbDkUPZVtwBxK6X8gafVdbXY5rih41v6XpuuxRepP1tqCwM",
  "key12": "EzbYohgCbCC6Erpv7npBLfyXqbc3c8u8428FYwfF6pQqj6xHyYT34BPkkSQss31Nz5D48NCchAbaaDkJCvYe8Ar",
  "key13": "FMvQbDXzQ5wwJXcZjc1AozjNjhCdhmGicwWJGC6oHB1YuKXA8ugvhPa9HbtbwVV2wKUoUAascLbpigLi96NVV2M",
  "key14": "4AWfvyF3C5F92CGZPNQbm19kESfsMfCZhnjXQHhdZVGh4ZmMUFvVPjH8FNnui1dCLSEvr1WqojhH1oFWBM5zqNgE",
  "key15": "4uwcXnjtAvxhC8XyH51iEFpjnpfiwyDRsUFJPvGhQr29eP4XJszuP2wXXpQvUNT37KqevXNgg1aNXM7eAxqYEazf",
  "key16": "423GWFPcJqfEXv3Wyg2A6PksQCnw2aekzZfwDL5AuHnMqCbDLLbqoid88kANVKKak9RtnJEHa6Lb3ZATdRYQSyrk",
  "key17": "4kHKzw5WtKDSkPaSmfE8fy1myVRwvku7xdocjR7QuqGfN2WqpMjezyqqPjFJD91AQWnLcmxxjvwZTaAWbHyLBYG3",
  "key18": "29AZkRsAzQ6Lp5eYtet92ZtsxFEQhoXU5dhWh6eyJ9Z7R3JKPGT5znPbD6QPDFGsG6RneRYrHhYVYqbYQGn5nNuq",
  "key19": "5vsDAj1GFLeEjNoAhea5vmGAomNmqVXE6ZCTm7gJHPfu6BteK4TUaZQhAPoantiNAZqbkaEsreMDixud43Pr8PJx",
  "key20": "2dy5oiLSMyPPx2vvNidEMrxghRGxeZTkSSuU5NMSpWbdrYNcXivgVeN4LG9EGF5hLsiMfnSHNT6GL7wSrh7qdKL4",
  "key21": "5ZttujBbtCPbipGXVvwonGSXxq7uKMZQHBXWHeZTBXXZVmbtKz5TAnxKGrN13o2CBiKEvzLZ2HoazvvCacC727Xy",
  "key22": "4WYyhEjxhaFSpzr212nGWk3dXEeu9d11Q8gHy83dYWzioVvJxzET9akNzPdMTns7eYs4Dsf7ghGaRcNsi5xawGCE",
  "key23": "VVetbCKatpugF5WjgU4CMDYNWWXftYMqq56ycUzBVmPdbHK6M3M14apWQsHjTcwxW6qwBoZMWCN7ChMMrAu4XMF",
  "key24": "CcC4icF3v1sYcKTJsEq8Kbs9BpkNF2bMvo12gU2qVkjtoMbQ4CeE7EDiVWGmTNxQyYAyznGSy8AWN2neGYRhESY",
  "key25": "2QpnWHTNAmrARsqNvpsAJhafa7nzZ7rAASq4rzefY7LiNkMR3nQo3ooStLAnPPSCoqTH2eHBQF1jiwYmHyzkFGmJ",
  "key26": "45yNojZSCqmyiYRvz8KmrtvSVVTzvneLmb4zjdZAM8hy3ocqe37kta1uxWa1tTLXYRuMEF6Yi3Rks3H6cmLamQaP",
  "key27": "3Zg5cEuu3mYKWRXXRS7DrgHyTFNz2d5LMWTL2t9PJjAfy2oaadFrCrEEHHUzWQm8b3gprkS4vQtcMDqg5Vyhs6Bo",
  "key28": "3hvZPbfCcwt8XdqM9vZWj4bYFArnCJXX76AGWhE6NJSwkt1JeLDK6JResMirCD7fqWRT3zCMFvAwYth8RUR9amSD",
  "key29": "5RqoGAE4GjWFwrP4oS3FysKqkVYUwT1jhVnD5JP1K4xfF4HEEjPmKX3vCa7GmFjKqRtP1v7UPCgo6at4GsYdNUzQ",
  "key30": "RXhjdfZT2nfi6LzkPj5ekXPjYaSx2Yt6W2JoUXTvLTa9PK1ac7wHesDhS5cv7ypBTHgmxUa1nL9e56NGQ5txtUx",
  "key31": "4TMhRFq7DBHAKPxunKVPLi1SLh5rYuVHwiWod77aYxdNNnxzU6Lq9qJYoJ9nsmqmr1arWNtUAyj9yKyaz4Jjigx6",
  "key32": "3u1LzKor6z3vwEQw6PaYRyrSrPMHzcXbnSkGpVChWoSXDrnXDUixMsZTZJiCXw3KaLFE1aSAuhHHxJjmJWh81no9",
  "key33": "3UZxFP7je7mHMrcsUX7bd1gaKeycwhMcCgx9xh9HVF4JhhBy4siJZjZefg6H3Nq8kpoR7psEF3gToJQmNae3BUa5",
  "key34": "4fUMKQ4kwMHvKvH39TLuzTx2LJchst1VXzJ4CuTNm4vyS1Jh3sqYC28MfHLEvwWLHTdZynbiAk3N4tzc6awqko5o",
  "key35": "4316QrMf8aaTY4dh1va8UshuF2FtVS9R8sYks1yfmLEqEtHZ7RtRHw6fpU5XSueZv4nqazLFeKX5RZZ27CgsC1Qm",
  "key36": "4nzikvfeocP3pqLepbZLUv9tkFvrL1A8PwUSiBGvxUPPjfyhLwaj9Xpgpzj4Q89B1vkZLKKbx6WXxDi77vXAScYT",
  "key37": "5ckQPmhXXv4ndX9CBgJRjaHLpEsPdWMw1RU5cJYoCWpvWWSxGSfxD5DL8djbyAJcQ869Ei41jZrED9keZNX5m8LH",
  "key38": "4W892y2Zt165mKxYWTFDxexm6y1XA3yxfkSR7LTEHbCME22or8Wep73EcU1c1YeD3PzhE1BHdam1BYp3AYwJ1mBp",
  "key39": "3VqEdwr5yA1wgqH4f8zcK9bzhPdsb9NzC71HZutweeC829ya7ZxcYJdLQJrfnHZStnobkvyejLm5YXSZPpbke8ZC",
  "key40": "2uufpSqn44Aowx9yZpL45tPQb1s692DRaRe1Q2dGG7dcxvwSpAGJbijUSpdcstVFfL2CmQyccspZ7ABYqaAEBBq5",
  "key41": "48YRemACd71RQuiv6RxipckaU6RiZvNgdocb5Eg8GVucKRggemeFbswR3y3GPfgd3g6LddpT9onVA2jEz8hmqHzU",
  "key42": "49jCMq8XiMTuRcxAxwZq1oBk5ge6QYH2TnH9sriqNV1TvChg7H5beH4qw8JkKAs8h5EKqydeB3dK8RSHrJ9HaVNH",
  "key43": "3rguRpR82kiEFnNavXfBoY7bbswmxP7n3NsR8DaKDYv1janCBQqDCSfTQ1KYgwPNHeVVUtTJjMPrFQ2ydP3xueGn",
  "key44": "5ZmozV47jveYiZiNTXFTVp8R4oTm45rU5thX9SYu9mZ9SAacuYkYFgBPZZM98GH5RRVg4rhw1pKysmfqjgoiJBAf",
  "key45": "5Agwah2oVxHkAG47SfXxfv5b3xw3CCri1daK9pMA5Q4XfAVwV5hqZ4xeB8SUobbi3nzNZ8ByABaxb6P8RvqdxfWw",
  "key46": "383KDNPn2T59eyGhL1UjD5qGEGJZ1nBhtNduPAGQPzzFmSA7JomCiHHnaX9tpKXZmS4bmXvBHz68BYogEezBHGLp",
  "key47": "99grhBJ8G6nTBRoyNMS1Gjevnwnrmn7TKGXCa3LynZcSPLBrMvjMQevHHzFZk2JMDKYfpwzUjuttGqd3BqwkA86",
  "key48": "2PmaAE6rwM6H5WgSEmsrHz6CX6JywKeeKWZbE7kkL3aWvna8tPcTLZowvx2X9Foxz96W4cEJnkTSbAUranFVJPzg",
  "key49": "65KBNW57LNGx4wVZwyZXRb1xbex5eVC7Rgm6vVD1dnwCAZXCZTGV7WJjXpkWhEJFTnqHezsPVaKPV8GGsp25w7kQ"
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
