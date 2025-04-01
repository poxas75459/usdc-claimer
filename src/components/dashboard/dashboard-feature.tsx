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
    "4gRwuUKMzLv8wVFQcp6ZZutWrbYnk3pGUXzgqWj1arUaJT7fFe8d1ThsT1M1Zo1ocqjboTpBd6Nq1jJtGAksggQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iMZSdFNUZCwgCtZCiBn5UpMsKgCKc29U6MRczEdoT4UUiwJxnLdDAJhED9GuHv5qxTYwtkG8A7cT3VT8aFpDpCZ",
  "key1": "4f9mRvdJm5ppx4jTepsyeZ5QfYu5Vq8YVTAgkkKbRsouYNzeL8HHS1ToMNj8bD6HyZEWvVDpS1ExQKs47Vit5L9n",
  "key2": "2xnquZJeagZeD1zYc8LsbM8fVnsmxbiUgfjmxwag4Fxy2gkufiiUUKqTGtK5vdjM6ndFjvnYJhNCA1dWNMs7yh5n",
  "key3": "hPNWGysSSw69J63mgZMcrVc7xfNVuuQUZ8QH86D442CA4xiWynhXLAH5nPC77DDGjyzJT3N46Eoh7v17445vfFZ",
  "key4": "2i1skZfBujxJB5w6PwSCbN59agjZx9PL7Cp1jwxtkvURijLmPgiLUFthXtt92vHXXVEv3Vc2eoYtbJFdNYe1qfyP",
  "key5": "VrUnzVK4eHp6PwxHXcpFjQh6tGhWNLrUywupXymyy5X9nwTR9KGuZewW6FfXHoXoMngvfFgUrnNBELwPFt5fBTd",
  "key6": "35gAULdWLxKRDTcu3hP5W5Ms6sy8S2yeQ83D1ATm7QCtoES3MTzgFMvjSQMrWrDRcJHNyVqnUZEWLn6eT8ZdV7p3",
  "key7": "gvWxaN3TWrp1ABVnnVRSrzFWQVQkto3FyoTJjicP82oWXxLXUAC7JVYCVDgGd1FpMmHbrV5kFj4FNzwdcEenQUR",
  "key8": "3eUtUCgfRaNXw4x9tVcmfPcQF7fBQXAqWJauNrUWV3QX9LDsNG9GJtzPcwXVgmbfpGQXhmQUD85QvhCrDqCowYtd",
  "key9": "4xGVvKuju96qW44escDK46RBnW77bdNvFqdJpuNbm5U1LH7X3RqnVGz6UiwxjEsTAS4szX16w7xYQXSk2AAT1hDN",
  "key10": "3nQNfhELqhS2mD66YBkFVDCtLYnGUdZD4iXziyGo5foJkJrBtW5nsHvbDacJesr5EB69XAhHTxy5r2orVWLXz36R",
  "key11": "4criyCAnvxqPkNo6UQYdVpcdmQBqT8RftA1epdYarvC2PyNUMFn2k3EfCYsi2VM1vJeretPswffHKUrfazVakunT",
  "key12": "2t3iG7iAH2khGXRXSGgeuj2HmRcG1Xm6YmYkvjUqScqmrPptHJmWUnHvCM1tYqrv2D4wZuLS2D4BHRozPd9feJuw",
  "key13": "CjPjtRGWGZ425ERiCzL3tMx5GYiM4hmKd1dMGSRk5acU2tdRTGBn6qZ8sHqrGum3mTHkeLqkHMPjUypEPPeK5KF",
  "key14": "2pYsc4tHEKU5vGfN5tt1pkypqZbZJsJmpyAWYfS2tCSwQdZB51E7eXDBFf36rF4pHC5pTGQ1d8Uh3Loj3Rt433PN",
  "key15": "hGPWT5DpZt4kQmfSeEcyovijR4vpqnMCvtUPebYKmSwXYFM2hWq9iVzsa61x7ZESZ5s88oKBMG7vyXEjSKaNjuH",
  "key16": "QAEPz54McCuSdSmDDUeMhqM9uXYaxmTr5hTzBB9M82AHixH9J6NYFuDwMktcaya5JTT6x2mWPgH1poYrJrcNAow",
  "key17": "DgpPKENW6HhhMTyjtTFD81wMadmAZsFYoBBbiuyYnSfF1o48pYXEnB1MSMrA46A8eWQvHRNBcMh8obVATEm5biA",
  "key18": "T9ADQnv4e1Hd4nwtE4KeYsT77sgBtUq2NnvNNoTtcfcyW5hKmxhFg2jUmMMALRpo9LFFL226avrYQA4gtY2WQLs",
  "key19": "EdSnc5uDdR5mdiMBqisF5B5AQwkZbh3MynS7YRsbNFZ6vD6JbVEPv5LFjaeSdVT1w8AtUuGYDqdrhXfJC5tVGgS",
  "key20": "2UZM4cZXDSJ7dsaHCPAzZo52BKyDFoe57nwDeqqb5Y61JyUKoz6HwWeotE6dY1H475JA9zJ3BhR5Dat2mH1w9whZ",
  "key21": "5AV2f6KrBQvkheksVS2fxehx38ta6XGXyjyBHotNbBHqDLbAekuXdWPr8TvpxGodUr44VahAV7vhtVxPXaHuFKD",
  "key22": "DgkTNWcubMSk3g9XM46NwNM6gHApGkNUXo7CVCcfcPpkn8WdM9dxCHudn9jUw3M24vvw8tSYRYrEqFdQCaDvtLN",
  "key23": "4fBYTWh9KMpQ8P51z6PUcJF5cE2QhnzGkB1LUjAaSG3kQhpfYMTCBMpYuWzdwWpoFSkFgZvR7qrE7cv3goybb1uv",
  "key24": "3kAmMNporeTfrYLPAQNyDLuu91hCe1iwTPtB33Bv1F3mRQe7wEqTG7LPm56VMD8XWqgRxsk7ZCPHn9CiExvvpB4e",
  "key25": "5w7KR1MYy4XXe6DDVKCcciSCUm3FQhD8rrqQ7oKatnP2fHtmHKZhGetb8ES2e6s4sHAjRvALHj8fhzs484pW3X9L",
  "key26": "Jeyz6jS7GTUS9FEqadegmwc2g4B2tFy2MauHYG8BdamUjPsXnDscfm6tsJ1R1BTsKWM4r4Pg3PTd6FYvBcBzNDB",
  "key27": "44yQzUvCtgUyifnoX52BadPQ9ysqHGQfKdyjF4YpMvttEed68DizZq6mkSREG55H4hxzWyhxhX7mphUSw3vbQqcN",
  "key28": "47jcGFeEgA33cYXWsEwZ6BGo963kzUs63oy57NG5CE9grS4ndfVYFPZN373SBsoqMjAs7f3qu5NCVSzBs3KLnsjC",
  "key29": "3iWwynMUnF4NKTrmGnxExNXwCfxt7773nRmoiWYujxyThSsi6mX2DfUc29PddGyFrnVfr4CzARtFBnvvqiFQj68t",
  "key30": "N9TPAqkrVYUsVpTSFg62JkpA3ThNPM8JHe4j4bijeK2RGAq2Ymy93SkVvad2NFaZf4zC1n6odTdzijoRxbDy2ch",
  "key31": "nqA9XFdJ5kndByBK9CYP2vA77YFqsCushLFBCXDFFYd827cfy4KGAdRhQvuf9szPKRLSkMLcXJh9HhBbQvCJVjv",
  "key32": "3Ujhxn99ztGwVi7HGFTRZ741TMZ4ZuNhwaKMFg5ed4dVKME649jx49iMXc3yH84n7MJ5U1vgx1iFamhG5Z51cV9o",
  "key33": "2BpELL8ZWgxEfTE8eKkwrcPr2rpwhFXfsH2RU4ao8tYyH2NwT7kP9XKCNMYhoGg7DSSaCq3GoVhjBZqMPbRe2gY8",
  "key34": "Mao4uEvgg8da4YMZNcSzVT83DVDEHv6gZ15TMutWJQapcpJS72LJ61RsrwFHpFGWkzmo7xrUtj1Evn6LcZoMzjc",
  "key35": "35A9i4pnwrQ23Yd59doih8UxdSAD5pNyVbJMhJcqDeWXvaMa7nWiDA2XBPx9HbDNpDFMPJkmXfEU2KgNouybtKP8",
  "key36": "5VABpUzhwJYiGRrRvQQp2t1gaEui2us73HDxrLcJQBvMJFHk3gyabqivFNVuPWTM3DrdR3cozHSmwL2HEz6fjYsV",
  "key37": "2yqjcnuJ2pTFEGnkpDDfhJ4BBqrEfWH1AhmkUtJjadH2To2qesnekcbsYE7du7NSqxuUpTjZd6VijGJk7oDBF9Jw",
  "key38": "4rKhcfaA27Wx7Cn3Yxnv1vPtLYeBpGAWaYdtUrLgsPBjagfNPFhyuC9RiPGKYATkK1KQckod4Eca5WewV2aD8v1z",
  "key39": "4BRmd8HdyxmhMPc2bXtevd34ag4psRHwNmEZZTvzUfK7Lkb7wUE49fdRWKQ82MhQmTgwQymEGZWA5oVHhQYC7ses",
  "key40": "4KyQQjVuNY5EtKikRUgaGuqZuo4EtfFouKTXE6VwCJXpNTJgJirQjVqjHu4HHyFhU3oHznXAgzBRi4peFKVS7Xfp",
  "key41": "pHA2KmpSKVoaS9HyspJbNBhk7wN6LkoiLZ3XPbEoDdCVkp2xwK1BytnvK4oiY6NdLnmNTUoiqsAkhs6TCUqxZcz",
  "key42": "bVe6yzXooEUYPdKV8FFvKbmcDAcYqpNGbm1UjANzXaSuM6EetXDH4quynJ1Zt5PDpzdUJLouuqcYeyPbvvDUNsd",
  "key43": "5W7oYzrcL9rji6GJUca3UqMPwPDwuegxC1Zk3nmt7C9XXMwY6jYG3FbLZvvKtDMS3MuYtCH7cLNbUZ8gtLz5hgbX",
  "key44": "GeKD4wHWto4Mb6ngthChbFqrjyUR3UPaezg3NtVwfZnx8GGj1avc7RfAfnB2vWDNNnE8AHcS6vdpRtqRPrsJgwo",
  "key45": "2dfk6cMQXSZTgA1uf2k3CsmxxspKNhpQkRWgGc4Yp2agSfQnk3rwaVkZE4uXj3byzXTCncJoZL3wrDjSXwTcbvWE",
  "key46": "689xRdu9jvYEPX7jonMGNhYiGvvg6ufNHie72vBasD5B7jRHpUwaLiwSosV1PzMyWMjjxkzodQDzvBXWS4eueG5",
  "key47": "51MvDWqKxzo6mDV1tbLPEsgRFkUXjL8W5ToMVyhJbAJAAssExdzpoMhFdWLeVPyu7xNs4VuL8DDU1bYKJce23eyq",
  "key48": "2VRUkYY4FYSSLRqqNjz67TqJUQvYFbnqGZ3A7DUtXT6DnpomK1KpRxvsFA9Gww3fsEx1jNgF3cs5YquRo7GvXQic",
  "key49": "3ckypgEMeNdmWeeAC2fdzeCnGAWdA3THUa2S9e9dKz3ZWNXgq2q14xvWz7cZacyXdHKNQa7VvbLNndnW3S8QurLR"
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
