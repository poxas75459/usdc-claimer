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
    "5tDzAbRnJ7XzvVuxhtYihGFmgSi3R24T7knvDpr31BgZ9rQRugW2pboUyxzi2q5JL9W7Q1Cj9Mq4BCyezo2JZtyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BPiE3yBaEnXZu5dtTX1LQJzSWncHJYauC9UQaLkJGPKz6KkdoQS8CaB7MQYF9XShCXMsnR3LoANhNWwabiwBWoq",
  "key1": "qBc9UEvqR3qGD4gQMJj76kH1UHSHE3iSvNGzWjCqRQvLidyU4SDijiBUNkXaEwLzDuJRvEJPrfAM3JHVCQdEZqV",
  "key2": "DEQcfUkLGQnzKaCsv296Up6hK9o3KTqqUETceksM7WVZ8FPdbpbLRen8WV2En8ph3qCoqNbb76yh6CiqYPBXGuo",
  "key3": "3Gf79ebuEASe9PCBSULd6cKbcbPWHU5agGhRy3f1DZwiGhu9oPnTAHsQ2hajER87c6eJnGuz3GeGtByGmXMtANLt",
  "key4": "TXXnmt4DkKXStb1zmTj1SDz55pEntgwE9TakT8u3L2ArmfsgPUkc18WYtsNdpwY89KGMYCzm63EHWSVrBPivu2o",
  "key5": "41ta9cbvD2NE8pG6yNR23m8eQxzkpqGAaZLcBd3PKXTeEVtCdnLpgXzLxvpyLmq3dk6rRVRspnngAmnzgZG1Xw2f",
  "key6": "i4WDuHXUefujksWAMdQtQskv9jQkremHkCzz6s77AxZBEaq6dAGWZ8jC95aHbRUvuVqxpwYQKmoeSBNbfgouHPT",
  "key7": "5v1Kr4ZLwhSeyvTXtQftCF2q6SXqqgPzxnbe3GREZzJTyoXTfP7EJaawj9XGVHwXxQfKyUJi5QRNZYkKS9xu4Hwc",
  "key8": "2QwXSy8jeBtd4A9PqHgbJjHbxAWiaiF979UmJ5q2wyWZUG6BqQMWVP5kkNGFHXJsKdiBo87m6H41Vcb6MeaANmYZ",
  "key9": "39HrW14CzqTyCjEwnozvxZiesuuHsM5kYQWHfyUmnriMBNubawfkkVLghzqA2vWkRg5ZPLaSij9JzA52RhBAXcLi",
  "key10": "5jkbMgCvNstXwpTMorvQoP77mYCa7SeDToNpZFvffGkynXPQ7M9zyCJAsjdVGvYhdey9qntJv4u59ZTrzSmxyeA2",
  "key11": "2HU8KZc1K8DHoANBxWWhNdznkeYNbX3M5JKigSsDv8pWvj8jZSPTzfenLqSe4SDS6SUTw5HYpvKcFMe8PcBihrsb",
  "key12": "5D3VthLBz7z64hyQXtntDJN3TxcmMsBuvNhEg2NoDz1Z9eqW9CtoFnRdE9r8FFNiMDms3zktziupigmbrc96vyP4",
  "key13": "3DfMdqaroaati9GFmPbeLZ1VPRxq2kkWvbgforX9XW4Bkqe8rrHrWJKydD1UJrskSSJLo2TjAhTgV3xfoybsV6ne",
  "key14": "3YmZLapuZvupPUV4K6AmeeLBXbMKPQ7VaQZ1bfF67hHnEJiXtM44cE4Ae4DpYP3JNbhC5uz7QsKi8cugmvHxXP59",
  "key15": "5ts7AYD8w5VWKJ9QAdytxf5P877jyZvhk8Gi9Di2cGGo8BBTwMPzTwE4xCbUDWRaG3UWPA6XQxiDWDVQMxVDBV3C",
  "key16": "4EZ7ud1VKaMpJovLz3P5ctBkbnfEEj1RfpsPY4xyM6dV5sN5nimuqEJmuDm5yTcPkMHYsxLWa59peXk1Cp4wLzrN",
  "key17": "4oc65Md5mLHVUrqEGXvdzUh9Hdss9WXA7KY1JMrHMJSSdyA5AomGZXv9T6rZSm7ZwfwNvG68CNWWXc3f52ohzDwK",
  "key18": "5LfbtxEtTASMeDRZhdPGHp7oLqwqg5fzbpbCwQyFDekFGmjw77ptSwcHHpXkS8BLjQN22wz1M2cvyok2BMjm5e14",
  "key19": "2Rm9Aq1YgQnPMbqXF9MaUyzGgWeaQNfrkito6eD7ZctG97dEe8aBWSzbEUuj6zHCqb1xQaqTdL8ShiqK5LApiMfq",
  "key20": "4u5T4Y95YK29guBMCaPfGqKbXtA2mvx2Xw97L9EJFDhYy48GQoD7Y26VnAarWAfevbgna378pjt7cpFqqYxTLQ5c",
  "key21": "3fWxZAN582Udi4tfW7uBbxca6gUY1DxnPNjSoUREvvU9AZv4poiztZZP2VnpR5YgZhLUHQZhzgcXJLU1K8SGAQt1",
  "key22": "4ubpEhZAiF228TMyXGiZoihoCPCqiNDj7pbUpF1LuxCuPquAE5yoVUy59i8AuVKsTSqz9wUmuM3DMNURtvPn9Rw9",
  "key23": "CjTUuijgxHb5R6CfkQ9PtTbZZfW1FpxSJR5ngP2m5XX84rSHtgFUSBtFrd8Nc4uPYDB8EYPVt8YHtCWNSjNK7ti",
  "key24": "2qrRmxrAwsUpywTcQLP2T5ptRFY82EFq8ydewtirktotFDUXQhqeLXf1YSKnNj1ZgcVfC9nbrEJsiEhcnQ4k8ZFt",
  "key25": "4r9EVcyWaXmVcgTCfxA8j8kzQN6xjCtKCEqfxQZtfHBREFsBa5fGuZ46hCLF52TMxwP5Lcn6iHYUiWU4w1Vg8HCf",
  "key26": "sHzV6dFijZUV9yiXw4Gt6jRe3FWTJ572JpuqxNdePV5VV8V5hkwcaogMAaSBkqp5xqyko9jfH5kafhDU4pcuaDY",
  "key27": "Z5aydtCCG4VZmMUeHkGy3WcaLeGDnjN3rneCk39pLxevxMVtWrjm4cfGMXZwB5FSvK1jRD9sWgssPYBDVHQmABt",
  "key28": "5SSc8emJHj98CctgyZiSYoPnnKcUdSQHQgBLrKZRmXhDPx4fGYN28zvLzReKp4d8dEfLZMrc6VNQM4KE7t4GwJm5",
  "key29": "Xqny7TDatoxrDmS8BN6TzstYfdAV1KN93cs3ihHGPwgwVxVvkWh2emkgxvY9FYb2f8rJvPpinZQk1GEraU9vMuQ",
  "key30": "51nMUjgDxx4vhkZNLQ1TjDhJNUBrLLYhk6JhLySwA599Yr16UAVAnpRQZt8wYavRP3jx1NqAuRSnmC5aYBWdcfuA",
  "key31": "aPhioxLMBYAFeeJpbHB4iLP3GyLjg7kYw8y9i8Xip1NvH6RemTV3g1XdYiVyb2TQUGjRCbcTKQH3M9rJGVqxob2",
  "key32": "jenEzaC3afz1GZEKZLtkAo51u6L54rBE9W2441ET7GJC9gwvURu15kXf5TwmhvJFcpg8YZnYm7xwEsHBYqLGC3b",
  "key33": "3AzYoYf2n656GDkffAmqr4Z5dSYmjmu3nQtBoGKVKK3bqGCQ66efvJtHnwuVjSSyErdZMHAc1DJDwGw1XuSf28Ej",
  "key34": "4AdRcWyhGSXEBigXAb1YWUBWkkPSY6XadLszbPb6N8gJmzd4qsvTaQgguaLNT1AAxxGZiTSoyWPESQ8MTWXX9ZPW",
  "key35": "5AhXRj1ACtbPotcXp9fSqrzSGvtJ271wnxT7B5CzjNF9ATQgSMUfUBbB2w3pd9fDg1uCAinTTXNUn6gSJEbNEkS6",
  "key36": "TP9tVj83jsFDmxSYTLe6L7E1w2wEzJZBRVLtimpFUdr4RTU29nkRQ5tgWCw9KsYvXF2WGohFJMipvt47NAe2WD6",
  "key37": "5TAeghkNTCHdBN9J2L4SZfEZmuHmPtQHJ4zaW78wZfVfA6Jbdr1EqhU3x6qWcnBA3U2R1xVywcFVU1DVLtixaCcL",
  "key38": "CNmf9cNagCuUK9zo71RTkAQ4g6JMAe4Uxxnaf1fqYgr61GzqEv5aQtef9uVcNiZoGt9ijbqVa87rjQSiYG6D1Sd",
  "key39": "4NhW9Kbtx9t1mEJfxNZx3Lnksv3jxwdTt6UYWivj6psTsQp1Mh2z15pKLmajqFVMrBs5S9pGkSWGDqDfWqDfyn24",
  "key40": "TgiqRTbCZ5nyf72Ft8cfXWqNcPuTho7F8E8W75xMZYV4soix9k8YfayViiTaibdkwTFt6Uety4BbT2q8yLtx5ce",
  "key41": "31fo6Dzw8p8V2ycVfVFScjrBLyJjxQa2pwoA8D1zZPbYfZ9DkuykG2dA41yT6kCEg5srmnNC11FqDi3vipQXoEg3",
  "key42": "5wkjjppj42f7qqMxSogSjaJCuQsryVH2LSivZ2jHT22FjEuF5jJEvRQVxdpgLMWGXcAQxVw7hj43tzFNot8hVkQs",
  "key43": "4fCPnCNHhehdmj9FK8pkoek587yVeobQpr93LRXCq6QyMmo7ta2HwcGQkL6QnoSAthJVibxxsSvTzUesRcGVRqd6",
  "key44": "4mzzUXzzExzhVDcZs66GwwD7ACrHmkEzc5BV2awjz4aZvhUrUiQ34Qf2ZRtqETPpwg2a1A99ZFVQVhVSf3priQot",
  "key45": "51BCgFVTz2CrbokUnbQzmzfTmGDzfJmCoqJnEPKGc3c5u4B22C4YjbcRs5fXocUDoh78p2KfKcZ3vZZtHkXVNPWR",
  "key46": "2xHiYqEEihdt6Cnb3jBeuk9rT8aECYRFSNRsfquKztRwDmxdnQpmb9v8Tbr1HMEFGSKFc5JLF7ogvv5Ljkab1H9y"
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
