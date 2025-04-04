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
    "3DEsChzW6wF4KyKTDU6D65LW4DgSM8fXUXDtkZMPtw6VAEu1Sv9NrFzoretqVPHhu4V5LenPR2ejfP4KxtBeGbEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mKEPrxDuxaf6vYiRWqdZ3dkiKVP6MGoYpcfzSDsRKavckcXKoV3rvhXpu1NHQEWjfCjEcDt6sbc4B58PAycb6g9",
  "key1": "2nQzWocT5s3r7R8XN66bNCsST7gKLc1en3u1DruN52Vh1KFzYRRHtohGQbDTNP5SsKpVWEWhb2Lv8fAdEBmHzWdj",
  "key2": "51172ZRQySYF14VzrQ3ARdcazw8C8kLRdXk1LScrbLN7ekANvLf3RqeCj5UxYrd7XEKVMtq2jwxHicyzASd1DDE9",
  "key3": "4bdaur4U4XdZR4ePVteV2Jpca7ZbTLM1gM7yxckFGSgwwfEJzrQYJEQu6AYbNuQaz3nzXK9FC72cgNdY71jWcjjD",
  "key4": "5yuD2D1kKpfVBhcC1qxVhsRjugeEscLS5452Jq6fBh67kGRQeaV86ZJhp1rzWrqfE93f1hNdayPhX94Bi5GDT4mD",
  "key5": "5XY8ZvVGbPhTRB8uJh2ZjLrSqt91B8LKMPCJ5fcGb3BJpu6Av4wP3PctzjU8YyhQcAb5Riy7P4zLEdUzCEazbzQw",
  "key6": "2NXHAnk8mtpqCq3LXJ1gsr7jQYwiuNTUNn12ySNfLPBtEyP2biVmWBQQDUK5L31aFiVm3dAsDrzUZgwG4yke4SRn",
  "key7": "2pXokMNg1YZ4NmjeuavwCvMv9aS8MYH3cKDkFarUqGJErX9UiPhT3JfnhnXcPn7Z1wunN4t5gY7x8qukYkazTBH6",
  "key8": "gPi4mR2ZjudYfK37syEVZmETihRCA2gpqDsCk7bk1e2kyLgubKut8MBaoZnr3ZnciDQJE8593D4uy3Mp5Uh9VsL",
  "key9": "4BMVBx28WYYgVqaj4ZUpeSHu3xtwFLTj7YR5HULt89FwwKzWbPYL6nqMpCt7ZtuHjR4Lo67wrdopgvvbvhnF6XA2",
  "key10": "3rv2cH3WBGrQsudz3xLZnbFPt3VrmFVqmWPR8WLTJask9YvJdXka4mDUfhSMfmXqLTD2kTYJWg9Njet2v9Z5d9f9",
  "key11": "ZHxAHP5NWqBGpCeR3mwKZ7ibffawjpzKUiqAevj49Roft9oKpYqumYHf4JM66jb7zLUnUT9j4r6q29sra53vaWP",
  "key12": "4WF4hRymTnFDra3saFrxaF6fgXXfR617b8t7HTujx8U8FmHuHssWRiUVMZkaC31ZKs9ksgKqZuxFyuu1a2mv5FPj",
  "key13": "5af5wvuFZNi2KEAAxsRxHhkuL67qqC9Aw5HiDWG11YdUxjT1UjHubNB8fU6gyG8PQXaaRcNvpgJwSfVHsai24k3c",
  "key14": "4QT3YWxYGZb9aPgTrEkBJF3bHMsM7F45HYuwACN2iLk6aocZSWvJDkcphoH2g8EzjZZdZr7WNgUHiSVsnFetxNRS",
  "key15": "KekYq1JTmE4TXaVcZCE2oE4QcLdcMS4UPRNLd3rqy6GzkcuxThYxNQHUpBW5TE2KVATh9jzr6aZ32XrJgWEDHLS",
  "key16": "3FkDbVsG6E29xDamNzUtCsR9nvQwhXYCjyAVFDeoirZjLrenXFDbwKyrtmF6ENb5UVCxS1Mu78Kv1dhLGBzXrjF7",
  "key17": "3GU6tD3U47CwjUqKFBY53qnMm344wpqRsn9E6FRHry8VTQGu9nwwTaLnHwMf7KoV1whAASPEn2tGhfhWw26jgqsW",
  "key18": "5296Hr1DroAk6yzkCLZU44g1o1pBcCH4EFfaXrH1tBF4467eFi8WPNbTgsBrRNjyovvQbmkuXfJQFZkVUw1Z4xxw",
  "key19": "4DZGz648bQdyxehHVmF5hJHJFP1Boa1r1U3KvUKKCD17ioZfmJqdRKcANKvun63fLHxbkiG9QCgCQ76wWAY1oNws",
  "key20": "297TmvfH2bvbcu35PocgHfdGjBDSeKu4UqFu2rou2B1UA6t7CvSRYjyEdVwekiivH9nLSaY7SJwra4Ca3DjF2nj2",
  "key21": "29gFbQFHCGy3NMf5uWagXdV2emT2ob5a7mVsi7Voaqq6w1uUEpbyZRXCr72xiJacpoy6sBgZciMbtutaKvdxATdB",
  "key22": "2gMVb6JnYPxEnpiqunc4S6woAa4nmvHaK8oEz6pTZGkCvPBYaxSp6CLTVXTqZdzepTj4KiTRLSzC9NS7Gase9X8H",
  "key23": "3dPT6swMk49FuziorRkCgUurhdZUm1dKHCue4TpJLSzR1v6QxLjgEz6isHQY22RuF1bj7jEmYniF7zhKfjyeXDMn",
  "key24": "4XNLAmwxSf9WCdZCjgBKWBj2GQqjLTxfsjpwJoH1rRnRYbQ8nfKbQA75GeKhXetHBordAqxSoazDEpt6TZZSzJFk",
  "key25": "4D1UA2NaguHPbMiU1JDeZRHwa2XXTdNiQJ7vnvyeNotNPj6UeLSG3UkBM7jrNLaHQcn6pQJLqNy3QqCF7FdpmGoc",
  "key26": "2B9bFZJhqbqke45ktwzRHQb6hM4z8bKz33VujgTd8TCrMmW9x6oiKdkYuXU1sxeTSciAyoRvdp2SW3EmvkQm7sAJ",
  "key27": "43X3tS3QXVwMVSVsQdFNz6hP1yLyuGJHF9w4YYsMDuXUjHpYqizWAMAQkqUnVsE65pSUDh7NEcH5chposF5jeeFA",
  "key28": "3m6mtBrfTLAVYYcCEVfhAZvPr46fMqRGWx5Y4Qj7fXYw9EZkALnGJUa2pokzkxK9tP3EEcV3BLXqRnTnZBeBRtkd",
  "key29": "2jRvkvsMWPcpue5ftT5xJi6oUwZrYLX3Z61YfzcrNKUxiaMvP9Ah7fe5pwezyCe6K9A44FdKu917VoMHZS7qZHwN",
  "key30": "9mDPWpuxVo5UmDXJrUBpLuGs2iwVenbofKxvm47pqZNyuw2hTgzL21Q46KspeMdBQTtjVjEU3sgs3k23ZWPLzrE",
  "key31": "5Y1KD7SEL9TYtgHASBrENahhWjPccxXenJVJQhgVL1PkubTziUkn5XLNdazcYJXPGCrQZ9wR3SZsu8Ax44xoTAKV",
  "key32": "3uue1RnsTWsjwVafm1LsBfYUkmuqj1hw8XkemqymJZPn8aCGCNnjrkEQYxMmrwhtQH4ZiTCSq9itgFmaXwXDRuyR",
  "key33": "JTSjNhgQCDvFqZuhyDmHLSayHQRbRNDsg7ZAnjYEh8ptpTrzaTHC9gohtXDfteqg5ekuG4krURkXWP36Nb9rVVW",
  "key34": "teTZxWfpJwanPMcYK5FeJv7yhSGY26acoeB42vAkz9ZVEJ13AC4QY5TPpRTafqqHTnsJSL8FksdHT6L89TDESGE",
  "key35": "EfeUd18u7x7aPQh8XAugk6sJwarHveZNc8EP1NgPxt7nBs7uP3dVhAFCq6n7KgmkjScVjQVTS8JZYUFwYwVai8N",
  "key36": "2NXfAkLF1RbDRDn8XcJr5ULZoFGN3xoWfob6NvQVdgL5EkfEQUYUxB8YFpo191HbFCbsTmezpfE5ZmskKyWkvH67",
  "key37": "262ZT2bCpCV3g8YubNKh8kRbdNUmZSVqbWom7Zg7dy3xWuruBqpWZ6FbnKPGfDkt4uaS9wVyZkm6BvnWSPv2nqQb"
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
