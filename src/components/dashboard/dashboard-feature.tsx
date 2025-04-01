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
    "3UowmWfDHL6ve93W2Vv5yQ56sfDDuXHAcMHuMQgGm8VxQTAoybd7jv6EN8kpv5d6EYR4tkseo5hPoYwegjErwZmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QtcymDZQKocsAXNkGPv5npn5VC3s12XtdTzooXpjKNwLiEPiGceeT8qGmxdsq7MtwfVhK1yYpPh4n386AgESJ7C",
  "key1": "2t6QxQMBeR9qiRceAugUBKiRQwmkctsRQNkmhRXQWR828BHA4LbtNTpVwcdbtA5DNS8vDkJna541Vk426r7QVaM1",
  "key2": "jEqx1WJKKDZLFbH82XfAzNPUmJPmN2pNVoDLhQqcGArFk2MamN6vLVcS6PXYcJZ2HyTAwgcyDSZ6nYix2F25t8V",
  "key3": "2KuRs6WHuDUmKZdEjjmxCFha74LDEuWNLGk4dPSixMWvk9TvS5wJ4Qxk4n1XtcbvwKS2T25A6q717anBL7g1wUoc",
  "key4": "6P8k1wySajUNQ2rHP53st9WeHWraqD29WdBgJeZXyiBYNJXzUX4UhRLU1JbfWhzCnUxCqjT9Auqh7aPVqFj6y8L",
  "key5": "fbMoqU5AFzbXHWgSrDqt3nDV3GX94dX3TN75Uk1vJU5QtfLjURGXeCeDFQRh6FL6zczHe6dnnvT8WhTNpRJU9m6",
  "key6": "51TudPR5gsThsJ3pGhAt8D8gCKjJTN6NvAsuNpDevJb3gqtuJkii2PLyJbcmMmhENzfktn1pdFDKewaW9vZr7kBi",
  "key7": "4nna2UQupKrVtmNWWtp9qmNtUEf8EA2sMBrZTQ296qo18dFxwd3iRzc1E6tMj7oeizzgBTZn79Bgq3x53D8JCjKm",
  "key8": "4EJ5ewp8GL48RmUUR8WWAJNXuLuk8funEp2SWS76XrMqiwbg2VXuCmR1Kq6uuPB2mBk7dfgbVcubHtxyxU55qKHF",
  "key9": "4mYJTq8vhnuJRFGxuKMDERuB41gZGuCGmVAh8FgSc1N2J8o6Q115qm137qFGarDJCEThFhCfTYx26NJrNnrfCdzc",
  "key10": "5b5wkzVFZB3vnvz3N6rPP4VfBrkM7bPFVcUnUG3yVJMGW9Hs3mjPzgk8W8ebxfoA5h3EQVU2SDauWC5yhrVr1bZN",
  "key11": "5cWKjwmGk7N9U1kGm6U4DZkVi2BhE12Sk3J6uen23Umd6gBQbHAyaRCUpKpWrUGTeJrcnVDUyDurUrBk32PU9wYs",
  "key12": "5UPbr4ND4j7RFeRXBvcPkPNJ8JCmPEGtgfVDnfMAuyKiATKFCWYTuXh7EwXYqdCENT2uN5NLNnCM6C1KM9Yu35ya",
  "key13": "5SAgu53ywS3BKSwYA4UT7RCs2Dkmy8Z8kM2jB2ART32DBXbPGpAyRjCmwCt7Z2wPWTRPWSbc2ZggySLKRaxtWQU2",
  "key14": "4TjZG5foksJndEcjkU377WbtMcsrcZLBUqLrbkcSSkikyBBBwvQn2bM15gD7RcLna1unRMNsv4SW7RtorgJjK9Lo",
  "key15": "5o7D1Zwm6tW5urbi2vmm8JHtnmTd3KDcW16dbdrW6P7jAUFZJp7MfTyoddXTmH3RGYZ8DvrJZw3u1D2hZdAq54Du",
  "key16": "5j4kVEzhLgpaZ8Z8dfx6HxSD3fyp4aSkD9WyitWwoqAJnZz14EEoutaPPJeqnUz72GjKRGQqmAGuUZ7gGStqKb2r",
  "key17": "2Mp2KAyoHSNsk98xJeMzR2CwaLNeKcBvMAjf44QQu4aqcy4jaWxdvSH6VX4N7pnq3bQRxhPX67nYYce39D6hXh5H",
  "key18": "emqWDhUq3hh8cQgBDUSyK6rpJQ1CnsPhZAZNvwuSV75XUK2pqMS97w74WPRMK77FsHD6gDNs4ZaBKDGgXxMcAft",
  "key19": "5MisermQkeNq9qvsN6BpdMeDG8WJR5JxqD8rPtw5nkSJCznjMR7RmGktfsLTTfpgkPNBpsrVJLUitPLySkBvfUcx",
  "key20": "26c4dvgfZbM7Yfux86y893xmTXaQZXJwU82G8Bnm4Ak4bxriXfe9ciwXawBFLkyUtgzz2U9rgYjVr9shGbSTxJUP",
  "key21": "yttbWj9AKUwA7rctZVF8syRQxsNHGjdYGp4Wy1fPKVQx1gRSuRtE8qRwWVsmNwoTfjBxjNP8HFps6Pd2Paww11C",
  "key22": "2deCHe3qcWsLRG9ijYf3VaK3d7HYrmkK2imFoE3tbSAm5iTcWvPkpmwE4R777wKQ7BcK2oR6VWwFY4sQUE5BpzD3",
  "key23": "3qq4MMUJMPmMwqiZ8taRdwHTNwtLCyeNHRhw1qdXYptKr6Ex5cJGfoLFy13VBRUhghLz3G2d1dcrbNTwXV7iGe9R",
  "key24": "57vdLGdcJmmkgWZxgX1ifgn7q5o3qhV7Rf3aTSC2LJ6p7VasRE36cWWPcjb9hfeGdbCG8yHvkvn6rUvN2k68QR4e",
  "key25": "2FLdzVRXSG5etrxGR1ETveNtiXdQ85VLp9ZTJtek7YfqArwz18v8or1fpveLyi4bXcxCQPaZmLwCWF1u6Uh66wHe",
  "key26": "4EaaxD9JaWXVCMynUuibCmg9v6mkWeXF8sAFLobigQMEREydeLaczCsrfN7bUPWMTqQurnyUyU14WDnw7mWppNcr",
  "key27": "3V1TLnqR4zXMxQNGdyfd19oWAkKrh5nx84Ec51VRAwMcp4qopJiRpjStx5vXmdz1aPCmj318VV9nZdGDHUJZwMzT",
  "key28": "227NzJtHEsxacFjebxcvy3KKi8Wg4g5rg6mH979VfHnmayuWG8MbM1zUTxEYJoaGKu1qeURWeiJAPAzSGkXWt2yW",
  "key29": "37xb4GYKeEiRWjp5aFJQ7zLqw5BDF7EzySkuruiJ8ia8mYXFgydoMdXJ691JZVowkupzuMPmb6KBaAC9YNLyA4Au",
  "key30": "29soe63KDkJNXaRqZhkRiqGeMCQM28FEMXvHm2dfnzwRNjWmXX6Z5RHJ65EFD6oY2cQHWqRUgfeT1FVvT3xRepnk",
  "key31": "YMNgZeGujtHiWXgo5tPuDxCgqC5KiYioDU5mKaNV7CrrHHVHtSQhqrAj6Ly3evHpTv78izZBaqgbbiyd4SeQLUH",
  "key32": "2UHTdc7WKGm2PSQBmEneu8avitsJKXou5RgZxn1BCu9Paj3EokcZQYpngKJjeNkrawhXF1ohQ4Z43ox1w86RQME7",
  "key33": "2dYfcWrjynwxZ44v1We1pb6uTa3n2CaxVcBzCa7BtG653LGXZJTXz11E1zWvJU7q2GHEbd87a321wSvwMWt553Ht",
  "key34": "wT2kNDq47aaQhGm7P2u67EXuhKrn2DcgEFkvbmqicMkWcqWEFAxr6fws2aVMw2Gg6N8xehRnJyJ5artu1juGCBu",
  "key35": "3Zx3RgbgX4YxHUUSB7EUvPHou663uFCZYmECPJrsvGpXpYJ8tQbvoQ9mBz6wSBNHZG7SpwG3H7afYtXz5dfKnuQg"
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
