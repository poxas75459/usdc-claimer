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
    "33zHeJJuuFchc1wvBMwVLCpQrSR3pnWsTw24qtkzaE4Ffhtvzxau4jSXBxiztuqynqQmbwbg61YstKWsgrUzcQcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DjbmVxwVbEQse54iEHDBid4oJ6fr6gaCLr9nhTDz4FZ5yvLam6KLBugPpDy4iCcp5pkHou1CSKnScBApm73D18D",
  "key1": "3EaVBnHgCeypektrT6znhMHmCGC3dC6qTyH3DwnfigJpQ8JsXgXATTLyeSynGoABNHXSrbdwcA9ogtHXaBLFF1de",
  "key2": "3LR2vfWAS7smvf8iycH72rvTC2MKKmcH6E6Fz8KAY8XHffpRhFh1434hRkCH4h7jpiPa2zUbXu4A5QkspD8yZG4u",
  "key3": "3Csxcwzeibzy5EBfpP5P4DRvFUSMk8cvhU4HpmPc414mQcixLuwNF7rqcLJcq45iwjHXEMi6VtiC9bmQTrPgeBYy",
  "key4": "4eTCPeftR22wuUPFWNtJwGXPqkb5vnVtenWFd3SNWKx7hA8o3wB666hb9VotFapVb4vpXtmDksPcgfMp7i4TzaDT",
  "key5": "5G2AGT9XGPsKpb5ZDFaMKKYPvEAqEc8SffoUX3nFdqYcbQS4QrrTBqPASvBJTRDdXkvvVf5XsHSh8AuDJofYdqPL",
  "key6": "5in8zeKVa5iW6x2fNCMFBsMii9qpE7z7MhNoPNK7psE4jDgUxpCgKwqu79ndeguQPhvdTPKP7BFQo7w46RDowUVe",
  "key7": "2tTpAoGVZgyFbT674jqpUQKuGsFHAZePwFsc6RFZ5P7zds7WxQkikUSaAbHVjNdBuwzSfjb4ortDNpYhpBTXm7gb",
  "key8": "4T2T4kkTvyuJ1Xwxb8bDyD3JTnH6BnBGRCXt4uBsX8GfR9dzVmdqeRTK8S4m8nhLqwESLj1TkYscaHUdASe5bFPo",
  "key9": "2g3mNahHzXygXbYH6GjaK6FgoUV7h5gZqGZuHTmNo4DLxKtKexfCfvRmfLicdEiAkozVsCQkGCrZV9sQWwJtz9oB",
  "key10": "YcJA3h2T4QE3LnXuhRGSVDcGVVuSCkNXNJe7zo45wmAtpcmpBdx7WUUtJaLe7yH8XraeQ3XLHUYzCBkc8JmTvih",
  "key11": "CnhhFYHSXvLtjEa6YWBAyokdjNin2n1uWTfLoUsF5Hjk7EeUEKtUbCyqsdHdL6AUdsiM3QR6UV3pgZrQiNeYv2A",
  "key12": "38ohTvPyAyZhCfsNBXngsTeL1zVXTrMein5Y3SVbsUQzez8MVAZ6DvWQ7gJaULp65vLvBvpCLvyumzs6cP33jxYk",
  "key13": "5D2ZZQ3Wqf6sJgxgs4JmCtw5kFusJeqvjm12CiYMbPEu62Q5tMdsbHUyXXp6PgrdrKcj2qSXecyKQSXz7vFBdoS4",
  "key14": "3FqnAHup9MGQEW4Vv4LArHqJ7dP5JfpQaZLPuDCcQjaeMreBgsX8CKNmJB98Fjh1Jixtikm4AqeHB8J5cPmiqvAm",
  "key15": "2AEpZvJ1bsJbFyyayMkMAFYY2WE6ZF9XAaWpqLXZbDscspGLsCgCqtygTEMwTaLMGKuhrCqt3Adj3quMbjnPmp92",
  "key16": "4XWMb3Bc4mNT3VmQDZCH32UGVBJVzRMnoqMh6zwiehS2j9tHbM6kUHc3WNQLay4es8MSEjyhyDDi3s5JaYWim2br",
  "key17": "5aJQBJKqPkH1oY1wFhUXaHGzxMz5EuA2qdpgUYY8D23AQtLJtKuCuTCDJPmC8WkrxgToF3nWahjQqqgdTHL8Kve8",
  "key18": "2bokv3Bx9Ys62V3iDRNE4yiZfEF8JRRFv8vhB7QHguFGbNwsFu7JDpHGtpZAvbEefVe83GM9ZngkawkiRJX1k9bt",
  "key19": "4p9QMHWA46br5SS1Tx3PbDaZ5E6iTvzRcLocHdq3aYndopsDZhm7LPRW5Vzqhj1zDku9PmeqFwJgAmHbeJxuaakz",
  "key20": "W2XAKr21x4hgEtGbtrCWiwBphb5vUabqyPS8YuyCLjqXk4UtYJgPf7bjpYjyun8iRiAGmBaG9WtCa1HFrBUR1qw",
  "key21": "34CK367gzJCEWkrfJfYARoumbHXEAr4J3rhy2PZavRZaBLcFNm6nU54W76LpEWzwmPyhq8h7VLrokA6XZRQD6t8M",
  "key22": "64txJuiXhsrcQCnEp1wbAn4e5XRxDYebF5z1szoWG1SeD9VWWY8m4mMfeN7rENszzJvG6MY7kGFPFZ3VFhrZFp6H",
  "key23": "3inckB25G5okr8ToMtEZHc6ZvbiQ51xEGbJzFeB2tDMiGgXRYaoAaz1wwt7MTpRonpT3ZWMrJF72dvGFujharwG4",
  "key24": "61CGWkfRpK4t7ZqZ3MLPJPk3Pu2GbE5kA1zTZ6Rc2r5a4fqNNaLJ4WS7vaAirrG2jYke3Awq55Y24ByphMEmzShQ",
  "key25": "4zg373p5suZyRzAvbsiBZDuR5r5qNdon3MYYwKrStUasdvruAkTCGgSkau7g69dpLcgkKFrivgAEmESrsBPfimdZ",
  "key26": "mhwexK9vchqSJaEu7KFuAkUe3NZ3DvKdJBjU2obgpi7NqojEoDPJQgonYviX1ua7rGxmiqTkh48vq2fX2o5ndMn",
  "key27": "4LRy94Z7dESeFSU1xRn2KEjmMyjiFpeLCdb1hZfG1sci2iKc91hHMJopcRbSSu39NjypAh7enfDhHWedmtrtu3Yx",
  "key28": "2WYZ97wQwcL9ZYPXgQS9D66tHbKWKTF5PadoBZsXZfPkFtD5UBMbcx1BoRz9vhenEQhL2TfRVjHD8rcYqUqPq4L6",
  "key29": "4jfXGRaXqHooybdxaV4qr3U9b12GzM5o9j2pfTqApCfPhshWAGJY8oE578rkJQZanvLV4FboB6hrQzSpU4BwKKhi",
  "key30": "4dABGrfKPBM79M94yut3HNz3eKWQdB8fnU8Agz528bmjwUhU8onRR7z5eHnt1pvfCJfqieBfxAvzp2GmR53ZgkP1",
  "key31": "5PYdGPQR7TTnH57JyPMWSsSwt94AwrJQKPtrEV7yZNkjbFn61A4hgSjWxRdYBXi4v2HTN7RpPqQUxShuhSzMfk6v",
  "key32": "f56Yp29u3sPAMXxkXyzHPMJFakXxru28o17E2mnYHGL18CiCd9t95wufdtG6njBTvwYXeQtdaZLctKqx7XkiWFN",
  "key33": "3enggZA55xxSWaAdE27uTxiax8gojhw8FYE9W6E9ukTEXjjKEHazcEZTmtZgCaMTJPYo52hKG1PCQ1Yg9cnJqyqc",
  "key34": "3JMNoMSg4uzQNRmLuQa65ruFuQzd8gUNDf1NeBfeo51mFf85z8u2v9vP1eVSxfLmksejbhFkAyJKJiPeLfoSB7WX",
  "key35": "4FCom5wpnazomBqFD7KXdLKcvzaa1HJ9CSpSjkUrGyFNW8JzNgYGTEqBe99tGmTHR7vkSUAyv3js9CbcMkbCtRgk",
  "key36": "3AuAuMtxvoRJtFeq8Y34D9gfqWfPh7jTAVS1eKxr12YniaEE2MPtVYfmnzPCCZPv3ZcVhvQNUZGTWvotCDbcBRCn",
  "key37": "62aA4Xw429LYQPvRXPSsYsRt1PY7rsBMFFznrkeENG4y82Rt2V6eQZjzUKLRcT1kZmNR3Dcet7X8iCiWTHJXTP1d",
  "key38": "2kpWrBZebPYJWecdiEfc1whmL9Z97zoi3udqUa6B1Lha1cAEJsg9c1BVztJHzPXaqiFELVyFb1HmCDnFeAADyTVr",
  "key39": "3bF1faX4C6Ac4FPeVjdHHFcZV7yKwYxmi8GSg8NCDyctJyC8mPf5M26zFB7rr5mj84vBGqDx7CdY77niueDVDsby",
  "key40": "2CUoQfRvoSkFSTGjHk6sMnBTm6J8bHdWYpvtTVXQiQMsk2D4KWyineG2cwHrpb2ckCTSedFYSmA95kRuguLKhhTt",
  "key41": "4eBDh6AhewRhPz8PiBbSXu4Jb29MMTk16HvCoPWvozN6X8LeWF5jYrNNyDbG4PGUYhWrkeFcdBAX9RU4ukvctpCw",
  "key42": "2ZSpYhm2btnVd5G91JYvqv6BEWtqaq9swT7hKP967VXYpW6uzHVct8xq89jrcKumCwQ3icpFtSWeoKsWUbEReoZS",
  "key43": "4BX6huzeGk85p1Cq6MaJ7LC91kmyQeMSEzPEGhSk3Jnq4YA4U3UgS9CbsrmSFeELC5dxZogA2ycRjvHLjGsdYN11",
  "key44": "4XuA6F842GPDM8LsgiVJeJ6KzCDvS89MyQBa4RU3KcpdBuJQGjLixRr5DoL54fiGS6eXvgyJDZo9jzF9er42Pke1",
  "key45": "3Qqcj6HCZ8V57GSeWoXoC8HSvdjmUfmPr3N1hCBjL1ZKNJtm3LBCHU5BZHxJnkjU8jMs7a8FrCYWnpHAj1Ww6Ckc",
  "key46": "YPs4iFHC7u9i3cU118UY6rw8HSfm2vLJVDetVZBxTTujPf5Ji9rkfd4M7UwXfa6mhW9Jto8EY59WMhKJm9KQRVF"
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
