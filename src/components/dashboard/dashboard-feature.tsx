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
    "2K1TTeHUrsrWK67996rQqy1geDZ4tcWv5JgjEmCqbQM6YdUACc9QA9dAwVKdkTSMUpmYip6ikhusjxYgg8TgGQcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ajrwEEnBRED1kEXnkaKBCCyWZrsWuPM8QSASe1R8KPEaZKKCtabiRAH7zjTYgarSEMBGsKYEjRj77QpdBxcWhS",
  "key1": "P8hQj6thCYweHfBoQw7LVXHPxCqQcnTatCVaDRPwsjvSmnVgQdbsFZRHKyvydDkXDtZ8X3iePL2vCiJum1sRQMi",
  "key2": "5QEEpQ8Xmbfb52KLSn3Lp6nZhZt1akdx9qNogfQjPnysupDnQvXPmLsVLQX7JBy7UAgmTHf4niPtRAau4TGdSPyR",
  "key3": "4WMC4kEVGPsvyqRNN9t38toGR7pZ3zYCQT79a1s7jUTGynJuvmjNRddiTGFzdJMxvwaBjMsmgVyPLHfahC1qRX8c",
  "key4": "5p8YYDi6QCTBnAf1pmwUiaN5LyTrVgyJtD1fSWuvMXKiy7LK8C1Dt8qCqqZaRJVdRd7DbnMcoEr4YnSWc8gicLzv",
  "key5": "fgMhUt3AEYAmhZt591zX19zx7ewaArqV2aD9tAZaqHTdy9rbnM7Tt9c3KGjnRiSwHgQN5rtg696VhfX1RhJn3me",
  "key6": "2L52JVFksjLbaASxvEk3Ve7vxLeUccmVD5PYjVide8aMbVWCAgtPxMd4imrR7Nvt13xayo1jkak86weomKe4uU8X",
  "key7": "5nFYkKqCJbC98rAJ64Fc2rkxqZcsogVsEFz23XXJ2tX3f9bHAoxsBqdJdqrstcxg5SziQRJYv7nQTq3abEhXC5PW",
  "key8": "2ykxH2q8mngDnNNNvNSV7yqicw6DK9MJyjoWSN3dpztGcQM5ZFR7ai4WyQL5sg1LmRy9N94YPNRjiY3Kdh73bF7S",
  "key9": "49tsWhqQqkYpzwddXovdW1TyfXDZb41hVkaCdqNW5EZC7JVNDawwZ2SXbVong9WmCJgg1No4i67xTfQ5JCo79xMY",
  "key10": "55S1rwjdDFvVNafmxpDLiGuYJLqm2mnXJ8Ttesfy2yFjpbpQHsoKkATKEV6omxWihRaQ1SF8cZ8reVhimWQvvtwa",
  "key11": "3S27T94xHkrGVkNpFk2Ju1doz6ACDYM8shSbtKikjfcoTX8ATM3hUECinwgY69NdYVDssK4MZcd5oBBT29z6yJYg",
  "key12": "49oG9iKxcUbmSeB1cQmzvmuAUkMB9eeu3KmkorXLKgBiFcE1wCUngiZF8kFD14CnkivSHQzN1CN2UZmcA9RZm3up",
  "key13": "5JpUktxDuBZ5ugUaHtwg13vq6LeETU5SHmZA5SoFV1Zaddje7b8LdwuifTab6r1Sca5RuH4Mair7AXcQTRrSWJEp",
  "key14": "46Rk38mbmM3y8pWYsuCPx6ypZytui2D9VN3B3guYXSkaJ6tTZ42i5SXGGacLTXY2xV19jLPUcPVPivJktvnjfPzZ",
  "key15": "3DxK49Vsh6e5sbWESUa6Jx1uzuM7k29LqqYjFR2aSEHBUUYz59eky6uVZnJVFxVzMXM3Adm2p2Gv1FL3Rta68c9w",
  "key16": "2jWKQLoCuVN8WNXWzyoLAzFrwfQhzHjyot7EpRiEikbZ6S4For186JNBEFdoDjzLPxcvSVuxWfxAvckPL1i2H9aY",
  "key17": "gUTaC25MLTNUt1Qxua8HdpqnzJ4q6TWDafrevxMki4JDeU1phem4346C7MgmbbFNBWippiFMh63N7HBqk9CA4GV",
  "key18": "3iDbTCJSfUGcjJEBKkCRr6CuUHY6sJmb1HXPjPq41m1V9augDdkZdHXYCKKGnTM1kdMzMN5Ynq3cSqF32Ra8PJf",
  "key19": "2vSZa3bcx3V98fgTHfgDMnhVYVBzeCeGkopBr9Xi9LJraaseDG6NzgPv5mqxxJDibFb57qJziYPxZzhuLc2uWqGM",
  "key20": "21CWyK1VZoH5TQhgNCUW4nVZ7D3XmEVdJNvB4G7fVvssmcqqSG6z4PepEiHtMMQLPaGqWMKENfDCpNKhXU3wYWWv",
  "key21": "5LNamokngDWSQnbKuqZLHURcar4M6Mdd5EhXwjLJ8unMKKHwqJZM5RWmRc4QVnvur1zBbe4N4QCsAkyGRJaoetN6",
  "key22": "FaqsdAznU2RzusQoLD8w42dfiV2zV3b12KPirRTqd9NcUqXtnzkK3hnPqgELBV2QALVH3wnpTPrqrcpvGS3Mqkq",
  "key23": "sQqXvx3229uUtpAnx6nPf1C4fpdhfzbT89BMte49KxAGahjm2KkJzYZ5UQWwSzg5PS2eY4JnKRvo3C5vn5ysGBh",
  "key24": "Ziz2R2jiZXaWDmMNf6WRhyuUFejBfJ8LELKwYpUdZz1LPF4AUeBwUsCw5eD4Qf4AdJP6E1Bnvkes8H71kwpnC7R",
  "key25": "5aRLpEF536VET6aeBppk5HXBbbAE6QZYL36ixrkvgWtD6HK8j95XU5PdCv6R4MF1JDmpDjWXL4ryiAomWDqPb62b",
  "key26": "3VxK3MHYs2afquwznsi1PSXzsokaRZBmAM6Z3yarxh7gQXcNnNvMGdRhiJ1hzaJmqfF96NurfjV1KbsAwcNSHMEG",
  "key27": "3DeDgfCdX8Yo9ddtGWsUZ3p8pSfp8toAPCED8PsaETNt49c2R4DnaiyQdsZS3xbz6MjPMoJ3PvGyhtMscoMXKNnM",
  "key28": "37teQjFjFxksYqpjqXTf162XpdGcUnYJJSeSMyP93oHUcScw73EboTMgToc9FUnyQsQAF6Go3KFpfGbgCexBcYeD",
  "key29": "4JBZ4tCUZAYephdebbeC4Tw9fCxiB88x45NZ5yYi8rt7hypegp5nru5xaKAZWZ1Bkr5Aofvb7xTS5nB5gENFeTQn",
  "key30": "4HfHmhXnJ3CqET8KcuVAdgyWURBop9NhzGpgmA9EL1663P9rAKYkFaAUaih5YKMj15gj9ieeRDjWrPwkWnhhwMiT",
  "key31": "28QfZooeixb78oH2qfJnbxYdpEhuyjkTjgnJwg3vibZ5DSQ9dGygewxtWCSADAjpUa4rznw46UnfMbW6boXrobyH",
  "key32": "61zYkPoSrtyrtATn1CMJsKWgMhqpsiE2XG9f5KVdfqSSv1CaVmdSm2sgyYsDH93qENm86SFyYShjocBrwHuYP2mc",
  "key33": "3TZ3UP6gqtnZPMnJP3M3AxGRBXSEtcDYr41P1rwb8Sd3UT1MhvouDkCzFB2p6pZ6CdrJLiTb32n7AXAaejnxFhwd",
  "key34": "47rkvuwvXzdzLZVKZqxPtT2pRP6MrjSoNTRT5NrHo2MNuiZDw1VkACV32wv84TFgG46T2M4DMRyxzvcTTXKpuEBi",
  "key35": "2vowMmumy7EbFqWjuds4GGQnpucuob8PzHgCKsirYb2tjoJMQEazf3XLo7296LUnpejBizsc8qRxsygvQH1es7mb",
  "key36": "44xRhYd22mktvkyPVyc8fR69ewLUgYeS7Yt7PwSZhJ31ysBjuPVkyHM238uKkav1iKVovrFfC8qVb9mu5QEn2Ma2",
  "key37": "36pVenrPiyGCsNvqNwwKaFysbXEE5F36cDrTH95hPNhQjHvjjtwaUiC6auRDUgVzgsSC164c3Ya48pkJjKU1C7hH",
  "key38": "q3piz3xTjQ9rspKGe4zLSzuNHtk5T2LR6fyCaPKGyi8f25ZKeqUDUm5mmp2Y9Yp4iDoJoZbMMuNvmVoswKqgCg8",
  "key39": "5EGWvRTo8VAPe1ac1GZezgAgUTZsPi6N3pzbL7yrgZ2EcDUY9EPVKtmTAUyWAK3B9FYUaJe2DCzCwnReK44MjJ22",
  "key40": "426XiznZrbPHWdYBkGKdyYN8XTNPtU7ZXbAmzcB9EZTLchj2ubL7eCsKK3tneGj88PFiSzpBQpHgBYwH3vLoVCiJ",
  "key41": "2N5pvKVjZf89GcdsaBQoQRVjv6XcFaKPMw2VFkVejFrXbRCDAEx8vNp2rFGK3eXCRdD75XKq6Wz2MTrpYNDTcGjK",
  "key42": "5GbmEDwfaxNn8j51VoQuQgZZMzfhm4bjkVF681VWLC8MgR5Hps8NSTBNkfce9tZzaMcXbM4yS7JDuYQRAMeBP8No"
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
