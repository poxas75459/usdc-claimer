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
    "4qK2gA8MFsjPGvt9v9tQrPhHR2YnRjq3CsRFCUEz2qSjdzzZ2km7kJeyiuQG6ZSGdUtfqY5yzEmiqQrhEdR3icv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bPr4o5VUZEzb5EqV2rA4bELeAY5hFngXW6msECn9JaBhJR6LnVDurJTWg1R7mWmR6cZ1LiyDXs9Eix2AsM7Fafa",
  "key1": "52JTmJFLgMYWZLraDqzMgL7gDPyfpg1UkH1Bxc3MhBEhpieRvCH2KguvkpA47KdcSiZXUebcBVF7UBBujZEs48UH",
  "key2": "5uLtNCtTKjL4zf1J64daa4eoYWPfmBNiEbWAXQBd2JRjPxrrNBM95uF2ZEU2Crbtm885pwjVgXt9KiurNT2jh7D8",
  "key3": "3xKi1xg3jRbS8r61zYzWAvYVgBQaQYXgqy6QJ9YBxVeDnQFQxYRU5sQPCv8bVjUjcu76Fib1cJcoH8nKmFsSDR8A",
  "key4": "3NFo8LJBMn58ACrCuc24yWCJys9vXD5XkhyoQ7xJ2t9Bnip4ZWqiRURge2KPTSyEa6LwKFzDyZEsxcUSV6mk3ajv",
  "key5": "58GmGutPCtb64G27wJNg7ba6mPXx4v7dLGUf9FWFhjVNvbqpo98wdpRvuQPaKgHMHbnpcAfRsLwLLztdCiZK966",
  "key6": "39wJRGhqcAxFjoNiDe3Srx3yYY7sTfSajpjgmZcXPLGxirHAoUMGzrciCkfA9gwPdGyC9xSfgpwABaHtGyENcs7j",
  "key7": "3btz4366QXwLhyQfAyhaSwooMYewZfaztG6dRmZcgZcQYoA6XVe3tTEgokg9Efwe5Qw4z5h5k5uizgXYfWcr9Yc7",
  "key8": "3qcZ8usBzqeayZ9rT5qDNZgKtcSCJeJLQLzPv7fGTU8RS7eXmePQCJnDNqR1cnzU6uVjX6HhMRZTofkwWyNq1t2x",
  "key9": "4sed2kRTvBxpjKdWRd7RGwnTUAQ3jUcTo5XPwk8hK158FjGX7XQYP5KeSk95gvMTpSsk1VwRUB5buDd7hVrQVDKt",
  "key10": "2XgKh3QgDk9hscxKGnLKzF1DJBRsyvvsdA7npr48mnKM3CmXjquAMrxBSqM4BobWRAX64pENp5PTugkHVda7sSGu",
  "key11": "TxBkMBZfnxmvvw23S2Q43nfYaMkbiPq4a6C7hSFrejEUuLct8pUDWYoeRgHfcPp9D1VrzbHAGrer14Fpvcw3scV",
  "key12": "5jfLJqcvBeV7oo5RDKJirqPDbsmsz1AFhaxBbDYULtjFQCakYfGJRpMAR37ZzLcootfD223ZP8DY6ZNg7uXaZ1Uu",
  "key13": "5UDm8gqEVgXq2cqxq6EKgvgHgyKLNpm2HBtdTqkcMdnrmijsDypStGv9JQmu5xrCFaJurkquVN7BJiyajwzNr8Qg",
  "key14": "3NoTQUgzAKjtrgC3uEbkFYimj67P8KT3FhsxHfSPc9eAyuxDPfXEby3Z2765jKXBUJSUNtd8to4iRkWyHm8z43kT",
  "key15": "4Vk8LEd3WqhSPRJqauFSHYAsh6CgLdrikdS616CSEjh3ABovCB75cqwftn7av79UtFG5xt6TbJ3MjcVGRNf5UvrR",
  "key16": "4Qa8N2B6XWfgD2Xnnz8rUnx7tKhTQdZ8pyMWNCw8rv9wHo1z43C6s6KeVvWBghSLSwcrYDgVvgDHBKL8CfoS31vX",
  "key17": "4g4d3YCWAvUqb6kXj576k27JoTqwFx3Eazmpa6T8xd8CKHQ8NjPHkEz6n1nMn4HrSM4MWLWQsprKwT8QAwz4pttN",
  "key18": "4Gwm8T5V5Ed7He2ZafFnsrwVnSLJ8AnrAyoyynsE4ti4bta73TtbqePiPNLU9tHXKMXsHuk7AfEgXDD543c2SmT3",
  "key19": "2VwSxyexGyQeiQdnScV8ZZkeoYzCfzKqyGmmk3YrU9jFA2EAcAbfFNVadd32BihwrvACdmtsCPwKecv1Ci7KxmmF",
  "key20": "TAJDQpBSc8VA3Z2QC3nKgeSuZJeJvAPqnyMVMRDAG4trWTzUHU9CRsGURrT1mvpM6jNrd8HUBc3kQS2DXXdK6Xm",
  "key21": "3ASzTjqK7yvK5utm1rZYHo8o5wrcPdH3YmTAkgCgD6jYNX8dKc67CPvpfoxk2ZtSWCorq62wbJnLv1sxLzTKLc3y",
  "key22": "3NyeLsvNu8UoF5BZTx86MwfmnAQRUDUKmbQADBnovUkCEz4DTK63Eq18XYQTpAAhvRw4bwSCfKXAcWEPSN5ZcCLj",
  "key23": "2vmHqWtMQoWhLiek9HYyh8EiqyCXuDXZEK8vcwm1qRQZEK3qANN4MuoJMbkWQLW5mDknfMN6xQ9QM2KN4Gd4SSYj",
  "key24": "3RTskHUoY6hoLJpR6kXuoeSjxkFr3opmDKgmwqBAtBdRtd5BeiS4iSKiNkDy9zHtJZpkbSmc36GkVszD74nNyNPh",
  "key25": "4RTBoPvWkK66v1KN3nNj91v2kp2wj2n7hdXmmFMbpezGgqYp2umUf9NVjvujtHT7DvrNwLNr4ETYio8RexzJEdSo",
  "key26": "3GjGki1tL1qQb6jcUmTyyRS9s3GGdJFwYvGpwQCYinagGsCfocoiad4pz1KdNPfX1tnVRSCnahZtWWBihSoyRFf2",
  "key27": "4uypetHX4tu2JWs1jZqEwX3caJhXUiJkZegdr8NQ7mGYaUugw3nobgSrxJwMAKy2TXau9y6E2Kv32tHMuDzrAjLT",
  "key28": "rtaz9XSmivPdJpChzA1XU2KRatnkH1CKJ2MrSnF4kALiwKFRuTwaHHFinzqhD4VnVDb1651x6YzuKZzvEvdFsD7",
  "key29": "3mArJ5oQM96K9R6QSv1YdbFSErCE4J55iRJWg9c6sNEj6ME8mAToYjmiFcMnoZbDXrXYrs5GWELoFXaPeK93Z8de",
  "key30": "22MV8EU5VvLaqiohDm8xk9zxyowQBmC5BMRBrVLkST4dj2EVy26WEm51nKyXqVwWXy52VhNbBreFcAPcDDvjYLR5",
  "key31": "4xnrxyXTzLYhEzrmqmEYoZLpdNd7GWqXm7UZ4fdgEwS4hn7dXAkSLTeyVQjPPTHbpqDzKj1qik8raovqVMmvk43M",
  "key32": "232KRV6XekwK6cXUT6aPCiGwuZ2v9Zt1Ttz3wQPTv1E8agsKKRQJfAdGwckdPRvHP98bEMBkxXcMCEBm4qPU6nue",
  "key33": "3bUBHmoi3t2EX1cKvzzGDsCsxNPraMh2NkfFn4fsPEdy1LschFBYi9N6hxo8uon835H2zRBmWSawLy5ZftB2Ziex",
  "key34": "5s32qxznh3zsb1d8RRY7bTDjcaM7DZkANV84G4N6jU9T5dvgpZkZ35tnRs6CdhUKzvqoWoF2PbryXRLgaximH5up",
  "key35": "w9ndUyyGP7szrLB9TXdj4tBUp5DZBptaokozweRUhg7xhCzVGZkgEp8VvExxUjSWy6X4s7Bh3XNszUapUpmjio5",
  "key36": "22y1XzLcZ6wybZEY7d9Xpn47so4EJPKGBaBoJnrPcw5yPqp1ztE2ifwtneYGGrwgHHrXDfLwLfu9TP2XXpfLQPWP",
  "key37": "33p6k3F95MMfiArDFxUhV73JdCzWr4kiSAgU69hMHa64Dr46J4xeE2jV5y7FYFoyf4JQXQ7XBzJoFB5AesYt1T7n",
  "key38": "2XpAgwBeFb84sv8Jahbpn1zV7zb3YhvSkbejnXVeB3jqJwgwzKJzxTQjH7Krxw2TEcrmr2LnVxHV6AgGuGTwzMCZ",
  "key39": "5aqdSaJXVVd51Ek9RvpSdA5vbvXbb7ZZA35D5HyCUPk3o2Cf42DDSDyNoeMuB4gNGFUn2snqPCqtedbAMGsrpT6w",
  "key40": "3Ac8RWmQMAT7vDUcRj6jxgRveCeRp8CtenXWX1Awewv4dE1vEUDsoEiDxz6VT8otukysaw1RGiTDmEyQmX1F6q4q",
  "key41": "3CATzztRBAtvCCbXk7qRggTW35iXA8g1zRpkfYoxhcsbLhvjix7JqKfhtRDrieqenB4BYRH97UZYptVf2R5ouw3N",
  "key42": "4d95exrwFDLEXKWUCHdKctvhSLBeXVSSKevXHAjWjFuT5pTFmcPEDHjcpWH7bE94Jf6W1sURbS6T7dXXGqQT7L9N"
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
