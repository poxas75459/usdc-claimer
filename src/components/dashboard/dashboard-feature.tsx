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
    "Twr3ejBanNBh5PivzdAox7TP4uAsCCHsHFrSHq2w6FR9uEUogkDH7tBdyEbpcM7zBN1krghfwjyB5TghkxooNEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j3JqKRaC1MVQD2Qbr9ve1jmgVgwVMrh86MoyNZD1qJUXfPvAmd4eZEiNwKFU5TcogT569oNyoHopBiTwwTPt2f5",
  "key1": "2YesTZv8Wd4QoUqbDHpuPYkZcoXveae6QtRdZ844tvHs8wB2jawd58BPdnR7tFEpoh4E2MXBEkvFkf9bkKehD4gm",
  "key2": "278rCVAaufBP8S2efAeremV6moaGHvZowEuL5icj5w5ionv1SZoin6kQCsbUJViR87DXg1X2RtVnSZXEg1DaY2SJ",
  "key3": "jiKbychV8WS1Th2iCzLsX1MQQETw1gpsZisLHaorqUdyNezniZ1Dxt7FyZzbTZFqdWwF2q1Mo7NDggpStEUEPxn",
  "key4": "2erCnJuidggjNS98WurKyQYuSzAZC9yiChzykiRRmJd6BTYuLsUDH1vNdbCDfCkvpgtKu7wUVtEjX54WAGu6TLSF",
  "key5": "5F8WJFrBUrfS2PXJCsPa8NmUHFBjsXaQgp8wA8zVmH38K1h4bvTVkxKHQztAp1KZGH4P3RdgYxjj5R9TPxabpyru",
  "key6": "3mNmB9oYPkBfr6e4okyiUtt6qNtqx3zyhbXkze1QSwoYs3Bp6SDuS3VJZoJUDRJLqkhht6TjKLbJNniqsyk9RWu5",
  "key7": "5KQWiWkCosgje2XSbWEL359HytcGQTWyex6aHQmLCSDvFw5iapKwHpobxeL1sdA7Lv7P7FckRsvBpUXRYJgfeA7H",
  "key8": "3fMSnSW2iabWujr73kzioFH5nr8NsN5sQ1nVX4bsTHSwwtPv6XoSbJPuWqiWezQTwmq64yKkeJvvGyEXEnMCuDsQ",
  "key9": "2kzrtFVRZ9YCJBqeQzyt6NKWJzwnevmowRZZyd1NefM14YfyxFN5fn2onWw5kJzNpoWp8VZ3yQmyPavwQ34xsNmu",
  "key10": "rLZhuQb6MgVJBvfHXx3aASCJW3F3YEeiTZjPGPvGGQU9Ve1AmZ3CZrtUjFDdvhCJDi5znssK7ntyysSgSAvmpBA",
  "key11": "332sZtXB5iPDi71aUGm9DHLdXhFo9jNB2jU5vs56sQUNhRxFeep4tJHah9X7dq4xGRTV7rdKoFngKZyfmohCHGE3",
  "key12": "4wZXdg7JzQvZmWtRV7nGyFndAZkNWAUAw5RuLWK8Ggg7SijcURc7juLyw1QQXZAzkQNPimLA4eeCUU75wyFm5Bf4",
  "key13": "3rNTE7Toajz63jbKW2fgcEPX6ZrkrVMx11GmWUzanEnYeP9rDKhhNXm8rJTK6Q8iy3w1YQhFCpN8MGz9c1a2Mb2w",
  "key14": "2dMsHD2FPaSxmRkQRxcWrYa22vrLvXfAPUXGeqRhSV5g8FSfH3T951cqvcAv6QpznFPdLEzP2BHHM5DHDrHy8EBb",
  "key15": "3sW8UXHd1hnNNVVp9cEVGB9S98TLpZMsFiFJT31tdnMXCSSs6RFiRko7rYLVK3ANBDAUKKeNGZRL7NSrJK8NXaem",
  "key16": "4psWv5Y2ANnRCcw17hAukg6iYhkZHKJPxRb65MrEnS8pEdE3nogF3teSyfctwdUexWtxR3U9TW84XbcUzqGRSgon",
  "key17": "Wx6G9avy2YKc1DBQ7kKbxr2uX3iqV7gY58ovwWv2Xkf3iRhkUVEm7cZcwhQjvec1Z96JQrkR8GpM6xW4uKL9ZqX",
  "key18": "43zzWWHeUvN1xzThowpQpS2mdeSwwWSSB2CaAN8kH9wDRJqdZHo1BiDUFMt67RssG2Px2ACkCxhog5yWBxoXg6Qn",
  "key19": "3bWKZp5XsmShw5D9Zq1EqHdHeoNZZWpJSNWJ7YfCRYWSqdFA37uHL2UUHjnogecfgKRcmoHD3kPZvBfEZcAGwX9",
  "key20": "4EGbtTWBwR4QcJETRndEfqajtipMYPdUJibSEGQrSZwFb32z5q6KhjQAPUg8dFtFtsrw5puvVsPDSNNr7kycq8dJ",
  "key21": "3wxZX1k3hkafTrdCMjPAq9Vv2gXDQdwVU38gCSZdp6MqFZCsVB3kRd5gCVM534gPvbMuq9ShFXoG7F6kBAg4N8H6",
  "key22": "QNZ2b6RKpXuHJ4Se1EU4g87cinCHvviqSQiztmR7GZ2AJcY3MHQm2mrLZ8iZutJtkaw98PZoxy3wDE4cSgrpyQ5",
  "key23": "3inz63GC7KMdoU8rmZGDmBub7PWQpm2HP9PkpXKRWuqBSfo8tm3GeSRPWtXMCMP6BbUGdLVVAR92phXqLbryAa87",
  "key24": "5Cvi5XwVnWFxkLewNgcyV8q28PbGvxTXj6116uNBDayY8ceSa99s4vBwWfewAEUojGPF7Wmgiz46F1AxEDtA6g4q",
  "key25": "5DWKXZNMSgTqtQJXpoGy1ARBwAcdvNBYFGtfKj1mhzz87jiyztSjxXogpKdGMusRNpk1EwvurV3D3CmBdmg9uUyM",
  "key26": "5jCVi6SypHKCmZ3hbVJjVBD9ySBbf6h92Jrjd8fou1Eenw7E1XfWtmh3Wk75c8LbS2vx16FF55dYT4r2cqPi7BZY",
  "key27": "4Vm43EQrTdJDcmL2nVGLRDecKbdzAFh981TaKhRE48rMoVmrwV5VcCvEc33KWDuuHk9orpzQP7oP2vxRRisf4gfh",
  "key28": "54p769robUihjqbMx8buyU5Fpf9nDfrpFCEhWNt9tR2HBHN5hjRpkSg5iXuBfbNZSQ5bhV3wXXzDvC6wSZbuyEpm",
  "key29": "2cMAjsXZcKkCogiFADsmyVVxTiKWAt2evpMhEV7iDUfsKuWQ99KoAdLBeTE7noTBGdiUx6G7RuNjwrCYZidBrfpf",
  "key30": "3cAvAr8Rpfwi1vYhq5gtj6dvrEqfH7K9axNxjWTBbDHXGJynGt2AGN8PFTHtRjSrQwhX6NQWYTNAAVEA3nXeuo1K",
  "key31": "2tr5LQpDzgWUNjk2ukP7991wFvANJknPY9i8P2PKUTY3vLAeiBh23DieL91AdStig9ztvu2qfGLSqxC9iSbxxXft",
  "key32": "TwEgFsA7jW3FRrWzs7ZFf4pox8MurCSJs754gmpjA3Q2tfG3BBrcBUKVhgUYsJKuWCyc4GP4XtgJcNPZTjbCwr3",
  "key33": "5Q93XiAohTWvY3Empcic39Q8cbKBadjfLFPAX6EEtAiKwRTvjprfMRc1qo8jZQUxxtuZ8U3kcU7MLDUDV32gP5kS",
  "key34": "3JafNc6eZjgMj2ReegwRjQz1sBc4F8tC5uuaFSkMYmq9Ehm6XjwtGy1xadionfixEQ58mC7pgsKVZTN2RsjJqpv8",
  "key35": "5ZJ4yMvac54h6ysV357pCSw9uWX5R7d1D37nbCXNZfMAZPy5nr918eGQXurTXosYtqmY4CsTSArYr7UpmVJtqP2F",
  "key36": "5oEepSEHmMaija1kz9aEpqrocLoFJ5r6wW1TnQK8J2NtJM4u7KYcgKSnTNZdoQNjQ32f56wDXm2BoiCsZCQJkTzA",
  "key37": "Pci8KWH86aECpG9wS2L1XjE3UjH8YbPx35A9EXtJ3XWxDm8tqy83bmWatuA8L1vHWVeNLWVyVY3weEzuumijM1x",
  "key38": "5wZZ2b6yN3h8EMXy6y33E1ZS1Wqhbqkz2oUXvJqjVNQkZU6AGCmbuGDAhgDXqqrP6p1VEwg8HW4cfbCSFLFcHj48",
  "key39": "2Jes8BiuMh8i9o4T6Upxn6uEp3H7E75SqEETpTYUvBNjq6H1JVDSv87noGCCUn84aeLZo5fVk8S2K9TUSp6jPRi6",
  "key40": "4yc8rbc4XYzHM7vTNpEGkpUkZHfZ7UyJvx3gbF7W3H4yqaAF5uYQT7xxNRNwaxPj7rmVV953kbpunXtkDPdQWzcN",
  "key41": "4AJJN9n4FoqTM2aUVJXVVA2EcEkncmMSVJWRFy7nPCbJ6uxw7ank9VEVfxTrWH5xTAbKduibSDJR4mFpfkgzkv2z",
  "key42": "35U6MSukmbFVidtKwckzSym2nzKZmwZKuc3JWvzEt9noX4HkxK74Epu8xN1nRtgWmXm1RspUjGQ9K998gNvZSxSa",
  "key43": "5TQXGwGkoV1PEtWZrRqhfTpcQF6L3bq8ajm6xqoQ5N7TtetsNJwVXfMcMB568rQsWYamb11XeZ93AaGADtPAKGqo",
  "key44": "3zoDrwsttCwBfhRLW2vwR2DhSmxLBacivEykDZJGzksvYiHDyenuPBhux7YzJE5HBPEuv3V5CSmiNHmXS3Qsn2pF",
  "key45": "4DSdZAdhoGXCf12KwxHRmF57RLUV8dwWfsqLWUNkvsj3Pew8fFHrAeq1dj7pD5s6ZaEkfuNv6HWf9qbTRDANwjsk",
  "key46": "ytPwefbkxsD67fPYA6DAw57LayisZA9K9hTLuixUsJUyZpXowUTTRiU4MdnFq5nH5LKXw8MsNp46awK6MmvfLrs"
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
