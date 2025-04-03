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
    "5i9P2r2b2vLowJ6tpkuTjZSaVAMmQBQHRqwybmvRGrFD4iqYQTJUYTh3fyeGuBuWT3waM1cJD3hMdEdEiuJaeJXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2briVSaAShvydYPsbz1bLG69wYLMTZiXDEnihpp3P64fhYraqARUU7m4vq9vibtfmv6eWmEVetjQSD9wmAFiy7PG",
  "key1": "3iV6HkksUcdAxQajaZmXSL66r1S4zfBnJPKGATavG7McumWFkxDaYg7YsznMg7Q6fCSE61QhWtaD2Q22cCt5XMb5",
  "key2": "2q5Qp7MBH5keQ5yQim2QnBdNgRsRod62zrfxh48sKempfGZCuwdv29pPpDvHFcW2rbRAFwihHdH4KtCczSWUD1xW",
  "key3": "2Uw4jrBXb3X6tTrb5m2J5WA9tRDVrP1xHF9BSKnDyLVNAJUfG8NpfFhKFUjvUWH3obmAxkHwu5Bz9817MqyT8qjJ",
  "key4": "4oi4g5vk9j9duG8Y59XzrdknmfdBQ2CrEeofTfUwHeGaubST3kAwbNkcggkgcXE85o54WQpVknxYwpccfqKUXTCX",
  "key5": "3D29U5eDfeLc42dRefDFD8QnNWS53ZUgMUfgDhBkyUuBmfaBao979dENVuhiGaxaxLeV9Lfsgaapj2YmqKBK9Uqf",
  "key6": "5T3tRPBa4CYNvUmTn7ti9n9oR4V6E8FdSN4qwknowHHutdwrWuHF4pGypY5pXyqSCrR9oQQ8NNTsEYhSQwxMi1Lj",
  "key7": "3mFBdnqtpPad3NuEpwzvHa2sYGXew3t4vbGLuWvaHVzqNcVc65F97ghjubjcmE7bntrmiqVFe9n3H1GnhDN4Svkm",
  "key8": "3Mu3kpEgaTtkaGJQiqLpBzbyJvii5ZViczXPmRHzPHQuEoHpThYvc6W18pbvFkJzH1aXgmaETWzVJrBuLAChCpNC",
  "key9": "6whrVeoKJgxPE1vVhQcHEU52L8szTrxSzzSBoRK3BWges8ZkDFrzCc6Jx4RqrSySj51k7kfzKZQcUuqZ7VAwfh3",
  "key10": "4MNaRLRJNUXRqCVBsJwBvty8D5NvCyW3DkxkYAbCaVqnQ2hdMEnQ1YbwJNMXfgcjwk8dGpkQsCnbfdMP264VhUhK",
  "key11": "2LqfDAaFTdfUkLgWDTUen1sDv1qU4BwjRFZxofywri2cpSuxPuoFbXjcfV9iGtv4SY3PzAxJKn3ag5LHmTR1gGRJ",
  "key12": "3CbLeDw1kxkgiDykEMVYksjDvJQdGqZnJbyRssHWNZpKJsgeKkQKnS3hEPKabn2Wk9KQavT1XWELmdvWCKzjBAU8",
  "key13": "2XyPrnbzM1LKwzygWXG1YUeZg11QwPzUPeZSgPTzGrQRcLwenRuCG2WYKRncbcxuJfsacwHhxGdUVsLowE82XdG3",
  "key14": "4pgopTJmuaWPTFNSSeUJHhZCEqoHNs8hUQ4KArZkvptzFD47xqzRweFAmq8V676QsUK5cg3aoXLNSQXqj8Whotgn",
  "key15": "3CoZSPH2TcpjyAskFJfcJ9cYPHXjPbopiMGNQo5xj3ATkHmVLDN4RkDSiZCzHKizwFsGe1xCzjH6VybGds925zGs",
  "key16": "4TRUoccaW2MgvB9A4pZKJKygfP7L97rCZot6znHjVTTuLCCTThMdHzkQV7RoeXrJxjD5DPi5vKgRDn2Eng59E8rY",
  "key17": "2kqbRMnGoLrU3C9uv64KQFSYnqTC9vhWD3zb9217z4wa859K4WUFRFLm9b8QpkV2A2jfUrzw29V2DFr3f6xvTHkP",
  "key18": "3QEjDzGfFnGZaLZov4rqDFLyyDvCmd7xSh7Wygda4NDXv4CoRYgxT2vzxjGcvFth1Axvpv3ddGf1hEvAhQvm9Zs9",
  "key19": "3dKvwAQXd4NSyJhCBmF1QJWo4uvcwjBVZKnxznoB1JEPbDrDM1NM8aZx1jijgrUUN7qsALThcddyAgPN8wTH7G1W",
  "key20": "4LQyLexnsZqgD2fHcr2bUiTFm5MkTgoe9g3eSXL5cZrVYemkQr3nrFayLh3ZP5xuAHM1zxFm6LioCkQvHjpBBw71",
  "key21": "coUnP3Fd9oJyLisXSseakK2rBgEyGqumkCKupRhh9qzhd57dXr7VZS4sc3arCbQopDCMZcnYiTDeBUzGvqTFRhw",
  "key22": "5iEW4jLATVt1ci9zZnKpjXajGjKq1sBcmZTGKR63ZpU6rot44Tf8h5ytRtzgVY5eyCx25e3SPCttmjVv4vkDp13",
  "key23": "4y2qcpk9UUGReQrQPizYDLB5qoAh6kUDryUfec2c4xRKL8uu6AEFEsrpb5XjZFieahwEfbyhSTJVFgkNuJguqwn5",
  "key24": "3dKSM9yCU3x5v8FzpnjxesYMEQyLTbGG6XQXBC8q9hRV5jx7SufjgiMJw3cU1QKbUd7ExeLUAuBbzHY9AWg6EYSL",
  "key25": "2fUEA9NXaV2CWxu3XqSwD3Uisoqr594dcQfpFhtwVf88pcJM26oR2t37VvheCz1HBQoxvYe2zKdQhHUBn9wjFQD2",
  "key26": "3GuF4di7U7zuhfWTtnuqyyBvUTw3zd3WNCn7tDo3f1rH1fPCDUcQJTHoCHAJYkh7ePZo4iGcgNztDPcUBgff1ddN",
  "key27": "2zjDApCXVCqa7JexdwyPFXbBWVjKR8LcZCCo2rZ6cqudLmKGzoEzCC8KoBfMLzo3CfC2mCrbHq2PhuexiJRKKHyM",
  "key28": "2AoHWuGUjjspFKmq1taVL1sQ17aTCtnYtbPuat9TwGTkk6EPYuXt1etUbD6ZUHbt3dXvAkLBrz74b4AhL2v81iEA",
  "key29": "a55P1HssFSBCjW33ktja8US9G2RPxfGsXzPiHYagszMsnCHWhnF6WoYxgGvU9PtktqQhSsmkhNs9pPZSM27mDDu",
  "key30": "37tcnnbRqbHcMxd6ipuCGcci3XP9YBBJcmNMzzJSt3hgUpv2Fg28wQsQ1yKoBDPhG5wNjStxhRiAK9EZunMejTzG",
  "key31": "4CtLRn2bM1EvAnMH3Syf6Ytp5bHGSCyYrJpK2NvFdVByEJfVzqnzzp5y1tzG3DhusVKXWqkhq433fuTNtrEJcEp5",
  "key32": "5FuA67EM9Bjeaq6DHWGjtZKy4CcsSuU4hGie8xZfoDoUXnECARzeCiYdnom1n6VUmEyLKrioGin8nZxWZQyuRUgN",
  "key33": "5mn85b6G1iV93d3n5myRWdhfKZBb9SvVmMXqxt5Ntj3gpY3633GHVxQ4djK3HV8xevwW1TA1K3XJB9U9VZBm6YHo",
  "key34": "4qmCyh15SMQ6VmzRRVPFfcSyhwwfjV7ensu5qJFreeGqyHL9PmA2tqnsgUUFhiADYU1Z8Kokwb9Q5eVdPPdtZn9r",
  "key35": "t3q1myNADfVBR2Kd8zi2J4Co2WrNDJVinUK5QiAwmCVLGau29mjgpyUWyoXeHVyYwy11ReV85bAFg1QNp9PnGAg",
  "key36": "3EMFKLWTk7pnSNKqxAfD1RdhbMVWyL7B6qSx1mgHSyxCMSyTEa73eXXYyxgMMhMtfbBKrwMs5nJ8PLkhdv59SqhN",
  "key37": "59d5xKcn6rdDJd6oxpG45QxvHULicwJV8fyBJeBa5u4M3yENbHbzCG5kpAdfQjiq2qFnB7z14MVDD2yuMpC3s84R",
  "key38": "49rMukjKUB1wke2CzQorcPbkLECTv2yjaKUYVC9tgk7ysmk6gdaKP66977P7y3x4cqCNonWYKVRaNw7Eu51hnR52",
  "key39": "2F46w7a6vKQ1WCChCYuLukh1tvusZLeRGof8RvjZhWpndUZzkr8FDgaNyrj1cMYcNCgkA1XtMGQHUavVBvN9QmvM"
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
