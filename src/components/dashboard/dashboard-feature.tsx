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
    "64GRW6M3ZkL7q7eDaKj7BqWqhMvszWq6it4t6XvyaxHbdwro32cXqcniYvT9Rd32PSBbnEVv991oLzFia1yi5rcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UvFYVZbM1kY4FGaXmXkPd8RoxsU734c51vMvSiLDzG1S1BNhrBrcYQerG9nnJCwhemdQ25J4xNG3uCPwG4C5VkS",
  "key1": "4DarUPnQRTEPC5JzwWcNa5DSnjiBPj1VMxZie7B8tunEgKbUfK115sE9UBwqjUtQQZ6KdxwgCFpJ6uzPUY6VrQHW",
  "key2": "3cFeKLYGCCcYcPMoqK2VkfVYNbFFBNmBZcKRqFpmeSTFHjEV4NWKDrKywJMxabbu7rz1A2e1ncLb8bFPSj7DVA6z",
  "key3": "4ZT7TCDx4KL1YvAKJF1GWdKokD2KAtWZ3aYiFhMHuTkeKCNc7m1k9dasD1aR5ACjdkciYiZpMt7Sw5tbg46War7p",
  "key4": "4y3DUtXXwpauKQ5tYAcKExxaAYPbi6UzcFfzWAx12s9DvnBcbc5bGxmVyeFyNnLhbg7XcYYYDp9sZ5EJz3rmLkEb",
  "key5": "4rhNf9XuUQ1vKXdWixvQ2wjUevD9R4bngnta1GyztxzCwiUqsWySDhsjPs6SWcswbixMfFM5oLYziB7oeWbzH7s6",
  "key6": "5QjjQyWxAbAFnnrYSUbHt3WtNmSvSBHVdfRGD2grMoqQ1gPChvanyWXpi7wnQWQD6Kr5n8mLQ9SQJ8cEwYD3WzFh",
  "key7": "29j7X7X5jZXXYcxCeoLNriYC9x3cxiDEBWtf9NGYRkzFejjSYHBWoR4DFfgPQH5e5Qd1kwP8uH4FZhpGCpbCya93",
  "key8": "vacSKRrkC5f9PhSAmMba9iSUCS5h16V71XetSdrncGuXhRDXmkBPXGpuVgt9YgNLXSzCjqM22oznnLa4HE6X1B4",
  "key9": "3H7qfdhEwFoTVdTwCMUCAxJjuBbQdC9Ne4VtN5ETLCXoUPgAJFc9h8iGUnTnooLC1QnCUuHkJvVGACYf2yiPMuKi",
  "key10": "2EXopQXuwTxV5AWfny6SEJvTV7DBCxf4CYYd2rYdHyE6ruEmgqc5qVxmhzNPyzrkY2RihLwXjD6Z6T2s8NPo8ivS",
  "key11": "5Raj8Rzve6rj1f26ygk8JAfcqKoD5HhNUjDgUdMsxaFKZQqGEsruTq8zCVvRUzwXQsMLAJatJ1Lq49DAwcqgQo63",
  "key12": "5BAJLogjRfmDg6KoCoyfShZnGQWpL6aXrHK8fqNPWK72cGYMi8gSSdTMVCWncq5aLgVngBkje5VQeJqc3NGLZnV3",
  "key13": "64crP3k2cEwtT8r3JZooNZ8vNP3TnbbNtd9Zp8cavQxDjCA7gTsXcBhcWMnx87dcyUmm6rm1EhjEe1ExHx6U5Qv1",
  "key14": "5enMo2LahCFPWG8isedQ6afs5XyMQhcHoHt9npYVBsk7pU912wU87GcVSE7sXyuip6wGp8zZK3cd7dSLZvLizZsJ",
  "key15": "2Fyi94SxwTVPRTKUhtzS5z53QevhSUPys2X8jDExr3RosZEWTMtQoYH8iTSUFpLnNsP5AsgBpXoShJoXmuw9wNig",
  "key16": "aBPAiJoSiBDgAAK9hsCZ9YsDZ478mizWZebgFphTaqSFT24adF6pggumJYMVd7CiGbi8a7WEvaD4Wn6Au4YXgKT",
  "key17": "47Go5NjdVMyz7kHQcHFU4qhjGEuEwGUqznSkXtdP5dbqqhSns13eLYSqESVPj774MjSr9AbMxWU32tQy7K3NyCKi",
  "key18": "3tcYQAuZipuAo7VQGEm3hwYXJiCyFs7EBNo2mb6Q2eFPjDMqDiwMsHNoTaQEt8nEc2MyKWMLpnmLCu2tmKLkqRaV",
  "key19": "4xWTpD6g3yQhetq69ZY4kiDvo1yDuvi7M8f4LuDhWh5T3mLhJGWGRqP23RqGTurBwNcR1fkBDgDcKudqYUY17735",
  "key20": "5bDkBfVL7uHTKKTueJxzPa8bhEwZEpZpGqzsfNVbKVokjEdEUtQkQKPgZGe59KZ17QwNFNXVUdAuywLx6gT8nfqn",
  "key21": "4oXoTF2m1YuVyeJL88tCFEEXTTEUu5778z6MinYLK5Hrpr7uyGrEAiteU5ji9SpPED4UTLVvTxxnXxSniTCGdWFg",
  "key22": "RJTeHEfXZbzeUdF2eVJctM8T2WwqkF1soBfzVk9A1ZNrBVVCR2qWxm2uoHP4xLcw2dLfh5sQRXys3nKDpbjojxS",
  "key23": "3J2WGN1BmxocvpkQFt1UMaLdSLnkofDeksL5pk4aWcTM1WUyXmJpckNpTJ3Phuugo5pTmgNuvzFMGPmxYoiE6hm8",
  "key24": "4GCqTXXWAEavumqjKhFBF71poV5RtiCeuNAsXMTk4Z737JUYnwLvjg87YJC6uKs8swHz2CpHzJp5ydW44iBshPLa",
  "key25": "2B2KaGQpN7DnrmmdHJVjkiCxDp3Noo5k83Bfisma9PLiz2xqF11K2FA2QR3dMgfHoqwEYup1hA9B39FPAP3T1qUZ",
  "key26": "5AQG7J1kbUMwHmCrDksDLknZ9rhkjJSBq99VutxSBNCf2grZCfWbBdpyMhajERLmHT3hQiDHWeqEAPeVxBYLgVVz",
  "key27": "4WjsMm4fcADVF74VpjevJ4aCxwEeAhXHoPjg9jDRx39oPqYxJrwYT4Nh8kRrCbfGutvE2PUT5xkc9FkGMiizm8sb",
  "key28": "4AMdE7DVXffS5PqzPUc7CTZrHTpMn4nVsJu4DVPhig3Dp9WzhoeEUBAxcrhMtxTtKHpkSkfRv8KERuPeNrnX3f8Y",
  "key29": "3qXHQqF7FZZrj9THm7AtMGaxwFwEHsyHUTqkrJkdCVEYueBZD58McQ35yTyacR3ATcnxvQtFwTkjz694WyevvXao",
  "key30": "65hAvHXxHAYbrSbhBT1HuULv1GqYfpn2pdzLPPy17NnaBpGE28365fjezDV6x3AKJExvvFLLhjmZCGHpXRSyBkzt",
  "key31": "2sDHXvkNAnam9uK4kXPmD5kpXDhj7AuEHSkK5V9gF2VqkChSFQuUL6MQtceVuTvATLQL2qeRALT3PcN3AM853Mwm",
  "key32": "2va9DczHCqDuypJL8pdpMpFfGmyS2saMMbMwM3RR8GRHWgh7gr1vEt2qmPxvQAUDDppRsHS4HChcWLPmB3EDRRjK",
  "key33": "NPiu81AFVFtU4DzSpBeCwQk4zJUXSSXMpjwwwmgnwFWndYerp2ivqzfoMY5VK9p8VVrGChmexL4wGLSpnH7BpR6",
  "key34": "5bKMLE28Vrq3fVLBaAp51A5RjVhk8QMUsRYrPho9bzxg5bY7BSxgbMuCYDdkeZ7b26X1qiRUi6S3r4EZHDo64FWR",
  "key35": "4EgdMUh1e2qWzoJCKfZRAdjyDmFn8oBqmF8eYqRWLPMkBwo9YozRPmGM7rMVsfT33kCSXtQrKjqRz14GAiSeAVeh",
  "key36": "5mm6Q8EP4yrCNB4noFTMBm3Znk8nF8pbgFjeE1xyaC1GeuaLUVKMUtJs3D8uanJ53dcP4tGxRUJD72j396TyNr68",
  "key37": "R7H53QYzooA9yjLcf3XHhkDvh6fXSFgYYfrKNkMNQxRvBFFUHDtqrJAnhB39TuNFN9biZ8XuHSdvHDZRcuUgXoc",
  "key38": "4w7yt72eThczp66dUpVwdjsbthMGZnKhCaKNo6rRxEsXs5iNm6zNu3vrYJFWAamouZ2KushhUzmDrUUjNHwHTpab",
  "key39": "4rBkeqi77nuwbYzkjTCR8Mhkg2Gj4M5jhqyZ8vJDbtha2Kc6e6mFTSbx1gD3yjSnSJnUNFnHGaG4F7kdNVXSZFAq",
  "key40": "3htjFmtdCdpnc2rBthZ2EkvrCB5SZPwkNiVRsWmAUvzF3uyLCVYyj3yEwpGH6o9N3ywGkbuUgwx45ods1j8ERkmb",
  "key41": "32ais3GVmHd71g7N74rVYJmhSh4Mma8CnEGDfyHZ7vKfMKvUU8CXUFMb1thRenbaNJwVUmYBuTUtAf3Qxad6BrTe",
  "key42": "5kvwowzhMyM8ZEKq3QpUpxGAQXrnxWS8YGuxKBbKLjHEFQJswFTxCkYTT1tDbRoqejs69Umot83kVbtMB1t5MjJp",
  "key43": "28VGCg5nuSn9bece9GzQJgqtY1GERKG2fa9pBk4JupP4FtJWJdcBCaBMKYVAvQ6UKoqRd8i85v29iKbFi1WgzBFC",
  "key44": "56wYBbYJfNouS8REPp7d9GQyNSZMeFo1AqxmyhzN5cR3my9vzfKpWJ6ooxkphfKuawxv2AcgFZMRvz5XscaK3mbi",
  "key45": "493i7DspmJiqAo5K6GFuTrmeKhf1o5JCuuvEU82PRBAh5Fjm6Pgr9Dq2FPthYF1T2T7ooaGKKBf2tKaRN4Ddy9cK",
  "key46": "4gZabwYFpYQYXsK7eTs3s5gVVk8JCeR5x9zwNr94cYwTWG75XNdzv89sJUnZnkAHhKjQbCCu8GBDDiN6DtbEhNsN",
  "key47": "57P1CkwTaVxpNN1RJq55VeyVMA1YBAPdeWfaazZvhevmLhwfY8iMP49kmyGhTxyUU3fH3NxQ4ynE8sfZZU5sqJ3A",
  "key48": "5fcxxb36UHDessP7eQJ8oDxW8RUjbTXJSe8n9GC6PN7urdTAT4ztKWqQShYcVr9wA4upxECvoGLqktQYZrf6tM9"
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
