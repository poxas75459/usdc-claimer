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
    "29xiWPvBDDbnBip4eJsdEPnGawLuz6zqdgSNkUo87EoXf87jWR9ophW7xnpQbcaFL28K12C2A1EYEUbBNWwASDrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e7ZjVy38ePJqVGUqu4qZ4qs459Cz1voiAWo4V5MEsjpJBuoaSPzATaCrKqxwmwgmb8Re1iszRV1RMa7XA46z63f",
  "key1": "kuT6MU96tapnHsd2ZxMogzD9cKUt4ebGPGBFyJWCsgiDNHTZdHvqqCGMCXFQcP7cs88gCpmF4Fg3sLfix7a8o9e",
  "key2": "52adFc4aRRRUfBNE5VEkTuSHqj5deJMBqmsF151EzYuXAoc2koTkkX9kpbKH3HNn9ijdbjuwmKxt8j1epLuRPQZS",
  "key3": "3Kw6TedY72ZutxeV9WSbCxFzaniJ7HWjkv5jp5TCHK6GKxujMmz3yWUfqfQ8Fy8d42Trp8A7kF9PbTLZrm77Vb6p",
  "key4": "2jXcabhSmuTAcCe8mvnMoCgCDSjchTPoSWtkvvnRo48uzyYzyBPcykuMWx1VcKoF9TyvVxFiXwgvDUjk1uXfPsPc",
  "key5": "5Km6hmMMmgmEghyZjSkLEPUxaoJeoyjHw1ZuXNyTPp5wzsDXwPyjv8WN5R7Rk96nwzGLKL57QUd4yP2fcXg7QFKU",
  "key6": "4tdN3sSXwHg98tC5HFZSPv1uo7CDi26TeMxsmXa7MwC4srRoYL2Bv1bpQoK9FskYDmEFTWVmbFBFWDrhpLbhKZdu",
  "key7": "bprNKwaAoagaN3Ed7iuh1qoJmDhPhGcPdhXAqDN8yEnGCFJ5ZrGCFatJSqBe6PLFZJS8XePcDcKuopJ9X1TRehC",
  "key8": "4QKbr8Ph3Pa9uCcqieEDAh6UE16m9D6w1hRxjk7s26JQDcdgWLiGEf5h8oZkUAett5Ch838dohbuPT5kC1Wiu9RG",
  "key9": "4E3j5QW8GetYvGvjLNt9kVHNioSB7GyRNouBM6Jq1qRSToL8zQg4bCpFeCjxtt8s8txxBg5UNMRvTVKsmDgDH8p9",
  "key10": "mpsqiwkqfEsnxMJ4K5EzBc6kDNgPJqQ6SvS65DA6yv92XiCXFuoAhGRkH9fM4q97bnEbEyNLbkPuTZes7VLdr9v",
  "key11": "3b3KFboDqMQQGJXR2UuW7W5N8ND8k9tz5nX4YskJaxjt5UBJ5kTtwkNDwRcxoTUKg3yVUgFivp4rUY9HyoP4BzV",
  "key12": "b3jeTREaibFMijsqwKoBMwhGFN7zKZ6yiJBsiV7KjyUgMnsW1SpPCJEBnQQobpoQFwpYxbWADKHg5Zxc6jvBi4j",
  "key13": "3SdvRUgLuaJzLTK8yW3Rc1oSk65kkzbW6gJFau1utefrBddDqwo2EAJ8dtrDUio3HDoEpV5PenroEUN6kPsUxraV",
  "key14": "4gkm2mqAFk8ADfoppXUcCtBTdinhsCMxtGMFSBwrW5cvQWW6eSvqvsLEuinyyP67enDbDCn4e7T6ZMAHe17ohP8g",
  "key15": "3CoPNfvgMeBsuRVRBd1QTmgcJkgcG4puCUNn5PhEdkRPr88JgqmdsctTaV177UF4XyCU96oYoYPSZi7f4aivRKHU",
  "key16": "5orS6dnur5oFktGjgPzJUfPsXZpeLszhgRC7FFXjyq62rWqHxe57MeoQQtV98Nckvb7LBW8i77Dx1aCchXAoqYoy",
  "key17": "53duKicuYN3UT77EzYMcgR9cxSSM23WQiTUDfFvovTgqPugo29Er2HNo63jwYFXo71dW1z9FDQLZHRHtnc6zfkGs",
  "key18": "3aBnyqHzs7qYu7XQWhEqAEVdS8vA8qpmFXjCfjnKqR3D5X7nsk8jRiwqG3YPoPctGybDUbhRRKSWQ6YV3uHKVg1B",
  "key19": "2WPweuFSVhWcLRPWh9QMLQdatDvwqbtq3Wm4fiSiHmAHCQPbU6WniHkvaYWfGDHW24AhgGipTbbmRAojbxQgC516",
  "key20": "64hgkpBc29PeKpTq1kR6V9b3o7skRJ1iicvzVusZ6wxVCbzeYY6EA7yHqRQw2HimJkY12CTxfDVXuxsg4eY1oxVB",
  "key21": "24URtxG21278vYeZkiEzwrx1ysaoguY9u961XMKDa7DoT7ejFs4bfTrSD2yKm2Ct36tAgsXHsL9mBLuNbs1n2Jxr",
  "key22": "5oJyJ3RyJSTwgE2PcnC7B9QHWiCmUNaqpkzcBgYjZT21PmknvhVj4nGLWfykuN9RZ7bVShMVCd6pHwLmz3WKFMsh",
  "key23": "5danNSFFmkmr7ZYHQYeeC3Vk5Pa59xsLRYrcSLA9ankzx5FtQyRdoSKKF6P4xehpVNX6R4rfH5QUv42N63pX6J3f",
  "key24": "2YgePHjLMrmg78GpmxNR3LbazX7RguLtpWzvkGN4yKUH26q7wc2hfqC4KrQfoMaB1bqQu6zxfJgn65unMSJTAJUN",
  "key25": "5TNzTvWuZgDDgvVyrTeo7SSvY9BdDDpL5RZHAPpgf9AiKLH6L2HrSQ58ekJSwyAdsSMzM5QXECStmGGuCcL8AynD",
  "key26": "26qL1vuqZLYWduQjNSDVF3yEKS1WZgJtNG5phHXTVx57g5qWpdihkyuCTDQjvkCEbNtCWga3Re8vik1AivARv7WC",
  "key27": "3SnvtrrbgJa7iFe39XfuPY3542SmU9Z2Ucmg9ZsiyHyvib34HkJubkd3udEX4YcRap6F2om1vqGpb5AENAvo1cMD",
  "key28": "LV4vewRpBPS6ywic2zkQVA3o7QLVb9Xz9qrhs1itV2vs84AQnHexErYPCwNN64vHswaafSH2SdepFUWaiT7q9cx",
  "key29": "4f99ds9RReJvSMuFjtL4xbCHV2L5vSgiak6igcXEeWb1ZDbzMZuyN3sqbwpC78VnqAJ8GpezzxYGMaGV2Hiu2xqy",
  "key30": "5mH7FcFT1WMeeYEDqs2839UYsEAmVpAXqBMn8Sk8kBUssTzQioDw4Xf2gSmREAFZZTBTjbKZJsvyxWUGt1nkumX1",
  "key31": "3oYrZAbgrbSKDQ4sZ5KoF9PD6qTbymHP91omhMwhnvBf3S5xJpwNUM48TvxcTdoBcBZrG7BKMqyygGRi2sUkaccQ",
  "key32": "4DVAEoHntPsQCm7jM1kQ3AqATS4qh448NH5SzGTMSrntf3pm4cw6EYTWLUFjT8iSGkTCUCEdmTeFscdyji79CwjP",
  "key33": "2rSipHQHAfM8Ya11hMgiewsrW5pKQj5zqrosiTx8RFL263oPagNUf6YcbHqstRiGZsS4QNedKT4xsV83PiMHGBcN",
  "key34": "5dtRSMivPZ3TWtGVdBW65UivX4PiuFxGzDZGapaTPW18Rc9zowTVZzhEJkLdjaD1c1bRiTRDh8q9BLnSjwow3mUV",
  "key35": "35zfCW47BzykfjuMXay9wDEDEf47ZhEzaqwmmqWNztHbvhCAxnUPipM3D3nxK4vd1W3mmr2S9e5uD64tJjZxVgNd",
  "key36": "3TRG5teUWxFH3RYvNCxU3zodF7jJWmak1yvNkFbGNCYyADmxoCEsnzpiJX2XgEJiNDQvJtaczB3spA8AxWXtugHC",
  "key37": "2vkrryNqqB9mTfaxr1mcRAHmvdw8Tmxi7VyNvoxV7aNQppEDXWM1kTmoW77grAJtZbjqFGtDHTWKT9Wm5hLwbHd2",
  "key38": "63fefM7FdKd4cyryDBohJbcjszAQcyvCoaXQABvHY8vfPWCq5WMed1e6FTG7fFXSebL9tCc9g1YwDtFDASmHsMn3",
  "key39": "N2DZ2dAYrsdpEQAJ3q4EGHZBtuaZX5u7pq86F7G3b3Wf7xZqU8zcqShi3xMYSk8d89Qdhi7es7Z8SduJWREvo8X",
  "key40": "5d6VAVg1pvpqXejngtULBrxxDkCKHussgVxDVMeGSyH3QCudB5kHwMVFVgTgfLPikRug5KZFb7oJN6BT3ixe1FSf"
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
