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
    "4VGTwfGamd8Ang7GQABZieYUptRvEeyU8dp5dRsUi2EifinuTUEPjhTUX3c9W88aMxMLtuDDhke3MNgrifxZ5BVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FF4jTZKSCb4G6teeCcMfwE5Q1wtzGqvVnQ1H1WSvDQx8zDcjqVJGn5UCaKvMDXFmvJ7pNysM2HbJDcvFQMYr8f",
  "key1": "4LjJJwktU2oqKX6Z8HZANau9dyv2VfndWkgSKpAv8nwou6Ui8iXCz2BjzwuzHNAurnFsgjHqVwn3rk9P8ASBhBcv",
  "key2": "25uwqWNAKvTHHAiTacJ25NnjspF8sJXwS77JHLm7U6cVGHLHGRxfNX4idbaLi9wSrbYQ5BD39knTxdeFGJmZk3uh",
  "key3": "4tLyF9NrqVgd8zixQag6PuWPDYV7BRhRtmXnQAid9kFDntLo1k8F5psBCU26bKFfR4LDNCHBbJHvKY8ZgF3wDBXy",
  "key4": "2VbqDD92uUK9BgARTh5ZQSX9zHcdfJvvwzTNnGfH4GGwrLairgBHKdHg2kTsArgUHDMzCJa2YSwYj5LRr1J1Udpx",
  "key5": "kYxCQBRuQ5jzvtxqaKz7pnWy9H4nuqUhhokLiMkvsMpXeCAx8FcAUWKJN8w7NnHyQW9vGMXxEkXFkruJ5EHDP2t",
  "key6": "ttRhhCt4vurWRfVNEftE1dK4RvPvJZoPhUxCNx1q93kKPBpUuntcUiEdLbuvqs2ufisD8NWDcDQj2AWMrcuPaTg",
  "key7": "2T7UTncJMN2y8vtZWv3WLenWy64c9WvxMqXzHarE7edtAxeb9okE6uQpapjvPuZf1H2Z4dT14ptvxaX2owAcJnCw",
  "key8": "ZQ8hXKzYnLrJnHXRMPtFPj19xqeuX5mFwCnEgEXTs7nDZJoehRddbP9PsjqB6Js57eHEamy9S66QsVQXgRUvpot",
  "key9": "58rf5XQwCoTEuGJiNXfjq31Vc4BQMATyh7GmsbZKJa9Ff6YChNE521c1PCzqxYCehv6uo38ykHcxJvugccgknVLB",
  "key10": "43dq6JgeLQUtMwxDQN4KGkXc5xChCoiU5m7dB1G86Fimgv4VArT6Q4ptTKTXXoMCMsT3DSgPyMGKe6XGwNPBak7a",
  "key11": "3LEqxyyYmzrTPUPXYiz7CxkfhmD4uTVzJQN4qDH8Bfa1eHg2BKtc6eH17zw8KtCnHLxbrnUZTyNNFobLoekY9acD",
  "key12": "rvaLfHbDRESibvwzKC9xdHSEQy5T3jmPp3MHJ5LVjP6YSWuJgLVrKq6gS1nAxgYNxcEGwxH8SdaQ5soR3N1Dees",
  "key13": "3fRtLPU3as7UDzka5fumVzLbfRyMLjmMT98yTsPYrL4bV1TEMF2qcjiV6U4RMfGmMuvXFUR8RvoPE5ikAs7ZLVNq",
  "key14": "QGGiZ8bQHRLonfwzSoZ1WqQeHtQMWNsuLM7KvLek4j3oYx1uNSrR8UwmhzxQpfMyBA1aatFCS6n9SwwZ7mGKQW7",
  "key15": "3zMwPym5ZDLik7z7fbdQ7yVpm2kEBoy5xY7t2bzY8xNhzvPVhW4KyoqT9zzmy3f2qdhw9HMz38EHnfoe15TrY9kU",
  "key16": "457nLPaxZvw7rY5Ya29F3DcH5dz6S2dxopTh8L3mNbA5wf3ggBuHYXKkAK9XwPf5iSEyoicssFNXdCYzg9DGuznT",
  "key17": "GvjXLs6JwXngzycXDxpSWa4F9xj3YAUUUHpGen8wZqyfUBv3NTmjPCrb8yuD9CQcRmwc6kDE7MQMj5HLeKnHKdg",
  "key18": "MKZAZ97csBerLhtUysNpx3pB1YyyNzpqawraRXbtcqtz1DA9Z1Aqx9mYdbTmFj4gVM7ETvX5PRmphZfhxf4WuR4",
  "key19": "2yprkyTjsVzfC7JKzjf8Jy6GZADJQzFuSJgqU8RFLFxWdsYthzx6P1k5TLxQAbUZ48Snj5fsFDaQXR6poUMabyKT",
  "key20": "4YcCx8V5KnSTPx2qxveJ6evovudMaciTrd9bnN1HYREzDM93WjcK6a7rkx24G6ESmViceePGofznN3irS87f8TLc",
  "key21": "jmjKm7Lpj1Ptctw4X2LCYkjCRA6eqFQyzaXqVpxzW5z6UtodwHqhXvGt9LsWVUf3sH3AzRwkedLaenqEMj6TQMR",
  "key22": "371TEvo2sf1HsGwQ7mGGemGTKTnzumpwcaJsTGYWqzGsstkpUHf7NawCRNJrWKSoR3yaW2AP17mkEDjjEJwVDWdE",
  "key23": "44VKu7emw1am6S3zt6iaawFg2Eyuv1B7Zve6zgYrqsLsUt2etCiaGU3XsE1Xsi7WQ3fGN1rcsc41eBdnAPukV4VW",
  "key24": "4VnqdkCx8np9Hf91Vy5jfapq6VutVLfFmyiiWpi4C7SRxxSH46pV4uYKF4ATjrSKut8ZmxxY6pGKokN9pyR6cQR8",
  "key25": "4L28ocAwoJQnVPbbcJsN3nMfCJEGHiiQfgKbQctnRNPwBhdKQXhv1XP6y2LagAEueh2RysxQp2gRekYuvkRRdoia",
  "key26": "4P7q5vRxwVkTAiAgU3y6xc9BA6K75pwDHk785w9NcSZicd66gtvciwVEqYQ8A1HGq1VaJbunYJnyhB2Ueazd9Fe3",
  "key27": "21njirLMJ6bsX16eJ2QXLuo2i3gAC9CemGDrENEELDVTJUfyu6nyYem6A71UWpcxzCwWvxJ4Dcexhwae3PdSZGZE",
  "key28": "2brvbSXNw7KmgFHF8vAXHm5YG2ZkFERgBfV4LcbbtxojHsZvyvRK5LeAfC29ybu51YZuer6NZCuhzqkMBGhtBg9p",
  "key29": "3PJt11Lnvtuq7wgDDTZnexGQJ1ErHuPAMkaAoFxUtDCvPZiSyfq58v7ufZWtXwwcAkwLxymcw5kyzmTe9GB8dWS9",
  "key30": "9NLiDx8H3c23yTRwBppGE8gaJYs6VG8uejGPhmzF3Tapnrrvd8uy8LG4x8ojdvQpuy7DTbozTUWQXH5AQZfwqCW",
  "key31": "3p5Q5qa8X87CAhxUPssiXdRJJwjRPcVxYzMS6tkFPhF7txumig4Mr7JQjQTCq8zEL1qNVQp56Ch1zG39RU7eDQvw",
  "key32": "5ufLbvDe1hqvwoP3a3eauqVXy72gPpxtaw3qkdGfNo1yqr3mmTM5dYgHZjvhCArVVM41rmYi1p5TQXeFUWjz3qkW",
  "key33": "4jkrpr5dCQgw5qawseBLMc22toYZ7RrnoLzWnwQxR2p68XGYV81yBLdvAEkcx2YiCSWHy86VeNFQApjLg7UX25r3",
  "key34": "4m1A4JtU1cefDpJb1szkjYzf5sUPkUz2sCneCVTeZExuUcv4P1iubVPWhG7e6Rp6UvcrdUKcZD4UDWVteuLUQhja",
  "key35": "LjhhCEYzd7f1XLBSuYm2d7YQqMkzREAcGfjhfhMXy5er9EQPwTu98L2qnEZxzQjKYXwR5c2DhMeBouvouiwaopa",
  "key36": "4jvBfx7BxvikrMMGw8oVr7ZpvKx5vSp7ZSis2PzdctKGwMZmShueVL8NXpDE2rY9i7WTsYiik2HLyp6FinCNCz1Y",
  "key37": "5x5GsNYgN18Lw213AevErayjr9r6yPvSnYhpU3vheVHq8kdpEtQeao4YJcPVZx2gNWinAHRQZAHrbXw3mHkGHun2",
  "key38": "3r6FGtLmHNkBMJR3GsgBUu2ep6z3xVArz48ezsyqAH4MBbhG68C7wmqztKDG7NCdQnvARcr9HrH9eEMtLJuFim2z",
  "key39": "4fQTDfQFb585Qrx79KPrf9fE5eeahBeEfPA6HY2E77djxmoNoGtp8RuJyJhjUTMUuuz4QG2FYYpw2VBeUEVdzB1U",
  "key40": "9nHX1tvTEJadDJkrLPNGrrfrMFY3nqRLzpTTsG7QBPe5V1DK1UbPGgTaMT6Fyv7FJCqzorSrojgzKKbaQF6iBeg",
  "key41": "yu3uUCZCHudKuBggczMTwrd6Da8EzSByRvbQmrQa9k1ktbbopdG83NDCaPxjSD6meFtH1Rpg7QhdkiJ6HdMEPaN",
  "key42": "299hi1xYvzhPpJPn5Vzj4fzA1rhjG9Ebo5gqy74GgpHY2JVMGCNifCaEAtYPbTPUmMqe7moqbzwk8VM6xVLpgU42",
  "key43": "3VweExwjny1p5NfwPkC8go4VX2EwpvQcuE2Yj9yZc6GNDtXgfrjyunyswBr9BZYK4bthafu5vGLpe4PT54PvN6QL",
  "key44": "LTHYKjdFQMVByHDZJmZ2NBj8jgA1BrReuyPGHyYu61JgN9YneRMJRj2qkwNZDey6izmQ3BPTYiTPBWMfwryv9z4",
  "key45": "5CAtxn262rCU6i5wZez7Mxb6G9hZjCEU24CmJ6mwcsfkW9YjJfSCyvaEgDe2fpqeNfeGnm237VGCSA2cWfriRrZb",
  "key46": "v4xQRasMqbMkG9BH8gop9eDHBVqaknDcC9ey59Ug2TaNum2L7hYfjcqseRCHeRssbBhsReGQYcBuMU7hZXHkVsj",
  "key47": "4rgWPnit6dXMbZjc9rxmSF8diCkDUCVLQCNGXbBukD5BnSGwY4qjgygLtP6dkQhKegAsb6FenvqYgiEJuxwgYpex"
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
