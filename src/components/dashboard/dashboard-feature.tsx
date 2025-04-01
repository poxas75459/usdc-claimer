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
    "5zNZpaAHFEGfk4wYwLJwkHkijYRMkxLCDFo9heugtiQCDDSFkzDD6iYwgbu5c1Kmekdvue1hQsvwjLZ6kRUBS1JA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8MvdQWT1MKWeuy93p4mnYBRRS99bQrN6cunQnfLhvspKXmE4eiqP8pH2XSAJjSeyR1W7vsmTKUBhqtx5yCkAjDj",
  "key1": "2bLvD2Fgg7NTmM5aTsbAG4htKHsHsynuWSVYyEi6nJ6eSLzDkJoG3LeWuXnveSSm8j8bxy4CaWJx8a7DgiKD5bUb",
  "key2": "5wt7mqDXV6mKjmNH5MMuSogve9sNpYh1s8YZxCihNBpPujNEgcoRBHUzHWJGntftQdXPcNG2shMRxesZy9TtAYTd",
  "key3": "5R4rnK9ei4g5Kd3QH5nuxbwv1NhAZ34yQsojw8MVsLrpqXEkGqfKBaMKA56aCeQ1fzjBGf3PSSPRGpnaYFKYBM5y",
  "key4": "4ZnFRDMBaqNsigG8t6RMBJi4jjQ2b4N5SU8pLnbFJRZZ3mk4yNphfpuwLm3U66VbMX1ew28fxaiUgRxu7baMD1bh",
  "key5": "3CXGK77CyxPRx6u54E2cH1431rvn2K3JBwNLov6WZxhpsi3nHnKLoA8WRuba7LK2BD5bUGJtrURTzkYBp9qigSAQ",
  "key6": "4NGewVSi4itz335zQhbk4w9qWMTMN3uSTaAz5nNJUq1WaDyFr1WpbXwuU7zziVC1PcVucksWsUaqMyu99UPFyhMQ",
  "key7": "pw9bBpgUWqeabcnSh2L7egtgHz6RRwzzCHpyEAWmjyfJ2ihPUGpPYGLt4Wo2PHCs5sPk7rn1dTvTZvWj5mMGW88",
  "key8": "5qZ7SaCrferhdPHgcBbBBrQYRzzxkSUaWwaZ3gkTVf8JAtwEw41ymqxK2sUfBbd5hVV5gJ4M2i2DcxJ8bgpeQX2h",
  "key9": "5EVczYfK32AJ11nkcsLS6uMX466N3cxJCYwC9jpYmDTEYo6bNvRK5QGhn8gWjuN4XWjjQ3Reyj4xKfYhmNf5fiiZ",
  "key10": "2PGzA3ruPi67M5FgQP2ynocmvZHo6jqdkshWuC7fp6cmye2scysQVm1tzXQppimSBDTDq4fANKqyKKopd5ptULmE",
  "key11": "2H6YC1PsgrT2Tdnnq5ENMJ9mbfqng9jje2SJDcxcXuG7dN9VKMVGFf2wbiKNkZSpJDewHJVsxtbFtZYouXCFfxga",
  "key12": "62QgYCnEcDMsAwEmAG8XJDuLFYJeE2fcP3g4qHEkrQEZpHnPNoMV7zyhvijuJNfHrJgKSf3f9b7nKp9AciAEtPcN",
  "key13": "3DZPvi3fEENGPbjTM1BFQud3deFUV98GyRo6PswotR1rRiyxZMnymj8U1Vdkh1gAUCmQZBwfax9coSM4Zs2a3WMe",
  "key14": "576j75qkWct4MBMnp2hjEVPBUgbDg6Nq3R53ZcMM23DVKaojTrPB7TCUe7vaoZnLsPn6KtJaxiY3Ght9cjNJwCFF",
  "key15": "3M5noKAsGV2t9ZpnWATvRPNMHbMfh8HA5xXGBSHQhPy2yWBVLEfX9qTWKFAnEauuUXqFXxAJGwDFJwJhYusPQPBY",
  "key16": "o9rowQhNQcXg8mapbHQU44bGkbCgmvxHmTD1nSfDAomw4thUDtCdN9euUwv88FFRvnjgqfn5NNfBUvg1d5rN4hE",
  "key17": "4wyyW77cdco3gYrKTs3n8JQokuwfKDyn8gWvXv4n928jkma2wK9ztayuSw7PTvNU8gopevb4y44X8KhsTrJ47t7y",
  "key18": "2cdaouSncZQ31SKDQ3YFYrxgsnoEyNR7MuMc8w1QcfQojwNw4V3UoSQJ1tuaxgGHVjFy4bktoUbpT2rxQi9PqJHs",
  "key19": "5TYXJAnqHmWkoHFjGn86h6sFo2FbkimnVJXYYDSXHoiTac5AdvjUxBhnNrjnpULrjvjc4etPZRyvhNG666AMSJZy",
  "key20": "jHYPMZKQ9UtUuSFacrrrBK3W3QmSZVYJys8WSrWYyAVanYwTt4dEubrHwvMUqhaSVsRU6FFbkf1jGBT7Q1FZ85L",
  "key21": "2WhZyC5bhGjykhCmtRLjvGNzJpS4ySueZJiQfbpzwZiHVvwRVg5WrPbvWEDsDeTiZCqqjUTLF9w9fn43YTta24QM",
  "key22": "3Qz2AKpQXn5acCbhMRyZMxAMpuuoBdy7X1E24Dg7po12tj5RAroAqKV6PDu5vwhsKfJ4VkFXvsJcSn9R5iPBfH69",
  "key23": "7H4Q1NUiUo1Gxdb6Ym5NY3cvFSnZgfMSKevUkFWe6sKnq1P3WqSMpz6uWiqhhQAgoYBDjQsvCj1wyiBLKBXZCXy",
  "key24": "3vq18h18Rx5fdVEEnUPMbuGUG4mTGgja8tJLdgLccZGUux53fR4U41t71nKawZe4yrXhvDJz3opfypT1oQe8KmnJ",
  "key25": "5LbSzUdh3mVzCPuABxejfxs2jVEHg7DjRtprcaE6Y49c95UkRv49wtu8XESxZCkJyuaLErigK6oBzD93qHU77Ug3",
  "key26": "MNo2sNv3SJb9puvm5GaZJF8MQPjmcD21e6tE4h3y1c1DjxPSPFxQjEYdx69ETNiJBJiyFwnWGoejEjGx9HZbKqt",
  "key27": "BSG5zMhpSknBg5qMmANuVYnG4StdwP6jy1PXfuoxWSkSSzKTBcgZcen7A7boqPDAMhfYb6RHJqPk1FNBvokoJBx",
  "key28": "5GzkUWmC6QVCMNxGgabwsyxbju6v9awvQJVMEirn8pXivqD2sHfniQQ4saU6nBQ1EboMdaY1MkcBzMCTHFC379LH",
  "key29": "8PReGscrW1y4GoAfn1pdUi7AyasebVJEMJYNRbPfVDGTgnDjYzZU36gShFDUM8YZmhpojg3Z8x8U8kRXhW6HiU1",
  "key30": "Yi7kiPkU4ZrRXBJKNffa8hJir8iuWLvNxypfjDL7zw7ZvV7sEgo5VrrjQ5YuvFqRAG5qVGtiw4BpfxyM2C5cv9b",
  "key31": "55V7BLUPW51TucnsmUCPWzBEaZvrVcVa17UU6cGeXRLjxC8bvJDASGKzHa4YNxaejqJR4inumnq3nyrHVNCUz3ft",
  "key32": "4VWKc3S35Up4N1mbzS2vkb4AHGhWe8r8hT6wHqTXce3nrNj3SPibk6gcxZKLnay2aj77oZPfHAg22RHUukLgtGb6",
  "key33": "3tA3GjaQZWq1YJvMLzZFB83mdUbbMXpimkgqqeKcYAqQx1eCmXLDubFWCGysQtwhywyoRgSzQjr9ZroxULaYMGgw",
  "key34": "3dvFqbpEVik36ugRqFx3wW9tU5GHKAa4f1zTjmdy653wK4j5uexqCv86rpAcRTRSNxiDqQSQMCi71n3S2ydXxjXb",
  "key35": "5ZW4Abuhm9CgVKRLth7m9j6wwf5kWykRSqDMc4Rzk5L4pg5EGVG6rMQJRzD6eMQFBB7qFZgsP6ASykUodeV7cGCz",
  "key36": "ZbBqdq9dLtZMMrYHJvdxizRQXvpoDkRYXNmhPhgTHyHkxwDeYzJJb4DqVpvGXvniEEPen6BHoCvsg6Z2BxSsBrb",
  "key37": "47xc65sM3yWdnqH9ruX1QqgUfbnCCfVZLid9R2tqvhirQGfZXaoSZrSqHNtTGyKUbx7E8yfKDq3tbFBqgpUjx7ac",
  "key38": "f48yi8umFQR6F3M5agXG1UnoUqAZVi1a7QwCHidM5Y9z4we1g8EXHabi4z5PyW11A5s53DFaGuNkNvZVzq6E5zL",
  "key39": "2C5V1w4FUvLdRSFdjEjR3teamvdkDv7aoc9eEBwaT53oXpseXQGZqqyvBn7dVyZfwsFd9k5UJAQS4RFoArug1piQ",
  "key40": "5b6m5gQPr3urbChpwgT6HRygLfruDSAqC23pvxAVjvcYLZt8DrMnhMfRkzxyn54EuXXE7uP2WtGupoQQcPWD9GEX",
  "key41": "xTfwGCtnCWzjYujfaZsp7NiVzQai2Lwj98m5aDoM76SnT7dnVhmPvs755EHs5F8eAcW3y7Cfr3GaRCL1jnqwrNx",
  "key42": "pZ59LLptzBXpHzdCMPeGdtRde45bBuLjV7SrDDu1nTWioCivSYTPwkQK6Xc63YnUU5FgS5KwP7M6YeuZKx8cb7a",
  "key43": "4XuMCZ6HHQy1imbAJpixqKSrkFfdQVcNcySj2G34Hsrs8UsqWt9umMSkSQ6FzHkKkvydRawGF4qdaqQFhzm4Es2",
  "key44": "4chaBk5z5kaWweUtN6PMkUgN6LHutizwcXiL7Ewv5L4BrWqbfzqZGxmW3dbVcCK9pbKwb8mrzBMzQ372skMhMbcV",
  "key45": "3WX42xBkEyyWDoTTpibszeH3eLbF9UnmojWWPw4qSi5533hCkQFSaGsLeoB99zhw9kkSAXeCVq5fXF6tfuqTE3fD",
  "key46": "2offiuvMzoyqijU9goiPwkKtkxiWSeaNQT5SV2XhM2zCkhmAUVsWxBJ95NAXPPvyVtw2AmRTMobZx52haLiwPJU4"
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
