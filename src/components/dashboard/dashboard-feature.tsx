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
    "2qy139fpmuzyjTjcfdWqzuQYPQYLXqy37yue62jWyiTEh2Wa2tSgvU5gw6Q94zCiNKnErBxYoBzqFCGeYXvtUoKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yDqRJ8gJtgxCsxQ45R8CtwQtMRVmi8ofwD179DKRfUbjQtmqa6Vi3hN97xzFRwg3fyGkz2hZmXMjo6TiBd6TX41",
  "key1": "4TyJwQycBGA9DrY2yrndFEiHubQquRVqR2zkFQ84Worh2LFHc1WMVP4nL4CYEtRGgiz6RvRkTgioxSTALNgb4573",
  "key2": "4q3pUwYwqkJfGn54pRXM7H3oZFXwvHs1UWfyQLyS5Eo25yyQNx7xiBq7yxtiy5tatgsLR51qEtNRSe7auYDoPMKR",
  "key3": "3tX12f4cuVXfZCeSWRb9VqzQSVsWWsSHKxuumcrqQ1a8idfpCQZL3PEqps8rQ5TfWeE2q7X3FJKtN38yLaAzKUCB",
  "key4": "4u3YZHvnc298MsBv9cYeSCW2DPPDq25HorjqGM9DG4V7sSQykt4RwSJrRpWSZJjadhmemPL3DkVA7kGaQhiLdwWX",
  "key5": "ZHa5jugheis2x5FmzwdWmHJ13c71YUB1WaWuHWSEY57oeTuRjMgnUhkAR6z5Cp58GMEWzBoEukQu5KzUtqg8FwU",
  "key6": "iEBLtuKcm8LCZZyWZWVhu7WnKNvZ439PAStJfHfKM15nmGR5wQWwUVTEMpP22JCuR5ebjGpLcpUpCzh1JJLWKs7",
  "key7": "3sx15GFo2ar4dMwQ6XADwbUc4uScbYE4KGy4TLYNKdbgUNg7R73MbVknE8eVdgHuoaqebv7faxP25YMBpTHXtA18",
  "key8": "2WtQEwKYVoxxK7RiWprp6mSQXrFUeCtWvGBWR1zW5mUcQQMnyKBtNw385NhVXhYVCnTnvWtggCJF3AEznqYx9QRe",
  "key9": "4Yn6k7gunXVPLX8JP8bc8ymEHAZjWkAmhe7N3RAhueUmaLvVmbsva2dEeCpeU96Suhuip6CsvgniwLrpTsnta6Bg",
  "key10": "64GX2XX3Ci9qWtgYXwaNyx1Bg2E2msv35EuywMPSWGmrquLWnQqcBQUAFmdtoK1Wnexms4u5v21T6DDdbjspxT1Q",
  "key11": "3EAiSEjMdFwUj4HihXNGaXi6qsE9V1SK1sYC7nZzVJ3ns4zJ9645N25rVksw2EKciHMpg7jP8XHt3JZG4N3jYUSV",
  "key12": "4CY5c9jDnk1HyGhPWkwrvTCo9ao1wVcLiPQL6jZSNuwzh1E79HwSEGD2KuNVHavkdLsQgCSQkofq85R5DJ9FkaDf",
  "key13": "4MRbnUZX3ts8DgyvB6reV8hF9b3owziTNAWC8VtyFceADfNn5Dr3LdtFbztrmriPNFCpYtCDE1AREGgH2F2sPXvz",
  "key14": "4Bvs3krx36brqtM2MZi937M3y3RD574hcxfwaMMFmHC5RUT77K5ac3oM2Rst2MBgDE6VTT4TBHgYbjQXvG5mtwpY",
  "key15": "AaF2AmrMikaDDkb96JRzUg7LsD78yLqCPHpBGvYT3bRBwVNj3gnrZzP7HaZVYyVmMLFe2qwS8E361dnEoZy4joT",
  "key16": "5Yp3VGcDeJehDxRU7ESUGW4saLvZjj77QNFVRMxLmRbVMgfR5oj2zThFkjA3oQ5A9SbHzYY46o3eTtHLdzhUxKe3",
  "key17": "5VuXpFJYp9CkQVo9VHkJckKVQT4ypL9iEnmC4ujUnzxcnjMS8ST8vBsF1gAPtYtvgcNrHppz5c22KfQBp4L3b87Q",
  "key18": "ewc9Bng4g1NkjNZmyj9ZQbi3nj3SnefC5qcSsbU5wU2zZKsSPgQnnMNt9F8A3dDzqAtnmMdC4txTWa2A3yN6GSs",
  "key19": "4tkeHAD8rEg2cgjdu1NzVLPBsBrfu3J5tHYNJrdstiotkj1DBBA1zmr2r5oqSzT4ZPgmSta1SoH2AEYGtFzD8MBX",
  "key20": "mnxta46zUYPp8RNqzgX3grMdhkxHYPEvVN4B3qsodw8P8dN31Mv7HKdNbjC3Zp9AzHtysAjwXeQyhaVUwem1MQQ",
  "key21": "2x2CZaB8Bw2supnbFe9mV5ttauBhSUctv87XNekFz827M8UjGXv1Es2LKLcjWbBJKGqMoh7BEgUhHw5ADeQSPgcd",
  "key22": "4Sp7Z33WNi6XACtftzXe9H1gPi1cbRC3TEN9RT3jTQNGrdGW8bm7bvHSL8WGsFdRShyKxQCQK8PTtVVMteDsfXhr",
  "key23": "3DJ4WPm3pgjwx5P7pD6ot1xUWN4wAVDtGZ5CRvk7yb5dWWHMyKJbXkTT46ozdFp5sX2TCTQydQa1ZQS8N4LLNxcJ",
  "key24": "44cXBLUVsZfkvYgpL5jFTEHC9epUtFBxM5LoXx85RN2THpQsgCrWxJZvhgZjwRr1tqnV2EYyaYDU55pdMjXKXovr",
  "key25": "2Bdhp9VQaUkePBPJKRf1wsYwhzUGy3ShcLf4DaC1sP2gB82AtwzhF2CNBcrsXGoM5vXd6DxnGivGyg2en6hgvvMf",
  "key26": "5jaF67F4KomHN3WdM1FPsfvNQNegPurVRgGyGQVr48aeDMQ1afF9t3Xh17AR1ouoUXfF3QsG5DsKtqSWfXr7Sqcw",
  "key27": "4v6hyhAJJLjcjVUZziLHWi7dCQpevC1Yi6MmSNEjQM1y81m4vRDvuTJzKnzL9BvrEALszkWGDYo21Gfm1dDLcgB4",
  "key28": "2sjTXzHb1D5LT16WvRsucadcWav74WD36gvuUyzqo9KWzATzAxbFqcoSZgnAjo7hGtUdscMDbHEoddcZaffgrxhL",
  "key29": "hEDTMXxD3JgxmdvzGJNnrubVZF7Q5jHDk31XvDVd6FMrd4WkBzS2Wa6xrQi6Vg1DuTC9xLsC1QxBq6HgpZQLHgJ",
  "key30": "4aabj1wjP9AhLfsVKjPe6b2kjVLd83GTHWNmhwExBTYVAvCSCKwi4HqjsYJBm9XcGxvXkhqBqTxbeebdgTMzXirC",
  "key31": "4DMV1VxDQH4V55Z9bWQZyErydMbeaZ6MFENactMn7VBTN3ysXKSdh2eR3JHdTqakqhEHJxGakDbRpWcokh4vj4ii",
  "key32": "3ehqCzNbhJRstJPUzfru1KdoGGdYonLGLNK7VWLrPbPUMgsxbzrUUimwFugfXQ7ahnqUtva6kbqVju12odEgkeu1",
  "key33": "3GJ6fKSVxwfPFbnw63dJ3ytjBiHNo7eEGFJftc3iBMWCEhasPcw7uyEyW5yvW2unkUx26ZjHBVTXB6HDFRdknD68",
  "key34": "4ToqH5mDF1WvyaTye6PVTX4yJkY5KneEMT2wfDufRn4EBYHTUj7aKGwns94S6LX3wTcjVUHdVZsDxMkAU2HucGRK",
  "key35": "S4KZgTZx97N6xHHNXMP4rWWoBhGH4R4JDBaSepAgt8vizmtS1Gb7Vfx7C9hViyDpVNt1KL5VfXqWepGgjt4dSNj",
  "key36": "3bnqGmrxxdXvrWXtSVXagHZuEXVy1YMeamW54Uw4zc3mVrSmRFABMpTxHbGsQFMZwzSx1HmxYwUuGsYdU8No3KDs",
  "key37": "5Si37hHuccR28CtG6QB4eBUnnF8M2Pa64qEh7cn8Jjpf38bVvtw8r6gMEmpAh9SXVxnb5SiTu5vTosE3Syn4f32H",
  "key38": "U87E9junotFaiYydBGP5NkZorrWHehuCBrF4oW1TfBxNBmmuFf834n99uarAJ1uvABMGDLDwwLJwMMiBDbQ4Poi"
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
