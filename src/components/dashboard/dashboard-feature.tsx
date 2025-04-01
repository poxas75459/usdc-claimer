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
    "4hcKakkhh6TbPHgzoAnCVUFKGeZEewiBJKgjDrHSCBLWPfEZjui3WTuDLYjutMewtLP5WT5ga8aSgsw7xEg2S9pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36SgGrKaPzSmvLQ9kkF2KAnRbWuMmA9zHz4b1GmhteNTvQnPYJubcoMbpaJtkpbpHaG4GmtZ7fct7WBfPwHWyKyF",
  "key1": "5mu4EfyPK8v6y9DxQNa9HpbKiR5ZddJrWKTMgwArLEeCxJQBijMGktMskR6wtWf4HLJscfwBaqXMYCFnAP8TVcsV",
  "key2": "2cqaTjaCGKFb1co1nzWiegn5iDYboQ5p3R63bhVDRx51P1CdcDDAY7j1LJ282HYYCas9K4uVmmBba7VR8CEXiGZd",
  "key3": "2nYBZdjfPbZwVyg5iHE4iXFRrRqjBTSkCLdNznz7nQFbbuYZm5Ybc9W8UQVu7bfcw8j9cJKJKZMsz5xfvZZ6bftM",
  "key4": "qMeWTk9Jo9jkRQmCcMq64BPhiAQUYjAQE8TcBVfpXY1W4whtXZscFzSV9zJSJsQ8ry9utMt3dWz53v8iXhfRA9K",
  "key5": "BHM8bDsBzfTdR7wkqaTmQ15hvpZDm91fiaMoX4R22pzAt7PPKAsuGtfgPRN3SnotCQYTjhvQMXKGY5DDn2hSwMW",
  "key6": "5bCEg2TAJSWsEtSWmVHQF46yhHWyLF2LMk787QRFEDE4edT9sQoiZe84ZxGQhhU41LtRUPK3CtqepxKMYJrvFDpj",
  "key7": "2wzi53WhwBTEee2xccUYodGim666e29i14iUmZALxLdERrTUirwqsZreCBRFCC7sjaXs6NCU8tue8ZAzPSNwti3c",
  "key8": "4J3pbtqXWRASC3XDHB7Krxkr8fvSGfE3zjx8tRTwdsp9J9HeXmtDyT2q9LpHL5Zj8jGkEyXEqHxes1oDqPssbyUk",
  "key9": "4m3J2pUdfhecmbrfJS1MQw9phG8SizDHDUpTTzr7Hm6r8bEGcpozc2UeW7ocZSMjCm4NMuFVAXe2CRuQoWasM87F",
  "key10": "2eExdNXcxjtYRGeisLWGXhRzzkeBPoJAg3aw1UqgMNJ4d38B6xT4ZexXgAJifLPUti1RRfGkLeBtaMVungUJsNb5",
  "key11": "4TZLiDyWrEhweeiSV5SgNy31B3Ng4G9tjzvLnB5xJA39Mc7AisZGU4eyppft3XwEvjzHu2cFaDoWeNUYP6yicLw4",
  "key12": "CNeVSonSWEy5RveCFmm51w6My4AJfmxCkSe9zHQU6nQZLwr6fFLTjEw9NFjUavccWujRFkQR1krGJSwpcGFenL3",
  "key13": "3uh8vsYb7L6oupQBZmtwM7oiDVLEE4MsBoxMPaq5DR5gDtZaN4mAUSSbBcX7rR6KWQzv4YjVMDAroJg51MKKMaPi",
  "key14": "3DpWhMwGCewzD4DHpWbsc1XxDSPsi6aFRBXKqfq8A4ve2t2jgXSjdEkwtSSPd6FwFKFPN2gQeiRr8wjhrZcjdrQW",
  "key15": "5mGuuZvkiqz2EEfaKMv2EazCkT9UXp7LsZTU6SxSBsvjkuKz9ZjqMvxSuqpErr5hUr4rAJVEUH61RdWg883jeiW5",
  "key16": "4L4yt9HT3yRxQmgQ2tbzcUtkYPAu1PVpDmZjAWYMFsAWKaFgoVaBrhMr93U74HUDYYKS472GibArsLPjNY35MN5J",
  "key17": "4pYeupSGYUUa5EVhVT6Ax59vkVMzoJQYXFtzdSXqqmgbT5ZYyvp32AN75pry11EeNS76XDPD1DWiwkrfeoQZBBEU",
  "key18": "bxxXwMuetDkE8XCNbfga296frDVTimSMbganAJqDNf48uC7ykmN9cZDT5ATKyqnTxhCbeYK3J5mRs9pYshtGKJx",
  "key19": "2hFCtDd4P5nLS6YK42vJ7ZDiYEBueoMAvoisFkSyRyAFQ73L7dUsXNzaWMEAZ71ZQNfN37BiUmZXGEp98US22KJD",
  "key20": "4Z3wxfBut6trrixm6a6dWGcCTUCTFUzapNJPCTRU8bG8FKxEKiLL6iogUUgfA8wTiNCE2d4smJMKupJr3zCNv8t",
  "key21": "53JKcoSf8SrTi9J5jtoDmPiwd4ZyETmwy2Qq57YHPHv9mKeWLK6CWS4PRf8wBS3f6nL1AjaPPHdFtk5h1SCouMok",
  "key22": "9UA83PSKiQKsTewyBSHJBobofH9YqBAH2vQdEg3JbbUDjiwNjftnAQbnsJ6XZcMa9DwAgtoQhs2AJnSHpRmnmXj",
  "key23": "2rfnbKfF2FFAiBprEDoHKmhZ19uRfyzD6jZtqh54zUfeYmwSJujbKywaJxRVmJD5NT9dTebzoM6Q6USwwJ2VT1qD",
  "key24": "3gfDKg1xfneBXRhBLymfmUyzppYkaieYy3rPkSAXDqrMNZm7UnKfqVNbUbqiHAoroAccVwUZYWju8nWRJ5wwETax",
  "key25": "2g4SqHCrTGRj47UStqzNfZCKacYK7U6VPAeAE4hAFgo4RP4rGTcFywSajjDV2yf974fzqE7LfRFpoMREUXPLwCFg",
  "key26": "28mmYWo1v9zmhy6xEQnrtkWFN3zquSASpmq8MaChjqKo7pbN5UReNCvPofRoDSTDosMS1Xg18i6b6FmoN84DLDXE",
  "key27": "2et4wsxW4Lxc4tZYzhmr8EVVnQQEvRGgxDa1Rb9hMwf5U1g9GYGDpGqk3eDgprxTgjRZrmMqKkjwQQ7AV1ZTCJR8",
  "key28": "56Lf7W1CmuKLy4aeFbiPzC4tWBk9ERSbqEfmvcgY5YKWnAQ824TnQztZXq6bf5G1ak2y1zVk3BbonBCMjjZauXNv",
  "key29": "rqW8eGCtsLxYsB6P4pV1xAcsZfiasx4dQHBVPgL48V6mmUW651QPyjnSiqiAvqG2NPUviMjk2rva6oHpzsJHWA4",
  "key30": "3pKS8rkbyBAteVEGJPvYweLfc6p2u5op255uL3bzUcgPu9Mb5Gg5DM53YJERpfGDkrSQcqD6pjqNj4xdXVLD7ayE",
  "key31": "3b98Ba6ZevRZtzYDyqQbTHQt4Hm8Z9KRkSdBEbE9La9yELcDchcx1CLB9doABLFKUW17KgSmSnSgBNmDBPgR9dx2",
  "key32": "UtCoxAasQDCiPAc2dBV95UnXVdCLBvHCg1GQ4BKp3vB8FnKaoRtP51w4rdybmKUujbo23sCkcJz7hKVkYJKqreq",
  "key33": "2uBh6cCNJ4qKLrF2smMwoanr1gk18mUzXebkaefCPVLn3vLnfShZWm5GF4EhzqeRFbHoRtDB6DRWaY3Jvxe6vr6Q",
  "key34": "4s1K9ECqAac1BH5bUXC2UGV7J8ogQdzxvN6SgGzXA2RUwqjGDiQz1BKHABh35XuW9PjRGuJTD4rF1FPrF6aya6N",
  "key35": "59dLAfGUXWphBoRS38mQZL9Ji6dj5TEQj499SDMrdNdkSkDZkmr23tCQxkgSdvmcxQVxgem2CcWSJiE9D9Axi6P3",
  "key36": "5NKwSgG92PjEm5NKTuwXLKY9qJGwESF74LbGSMQZFJ7MgkNdnafyh9qxNuHZGXUPGf1F9Fgbqp4trRLC44fe5J4U",
  "key37": "fLx536c8HhmJWmSLakTmSkVCpogirPeNVnV8qdCKaxn1jQzQYZB6FsS9dpWvfeNeChbyo91cXQMU4r87f52C9Sa",
  "key38": "5zKGUeZ9PXzVgcq9S3nczvL34P7TpD7XmwR2Fy9Ud95YqEteQivV718d9e9J4AVvdLKue9ZECfoDeZzg8GiQrAoA",
  "key39": "7P8hd1AXahFa2rx9GX2KvoXyH4f5S3ehJfDWs1bE15vtskQNuxy2V8XpmgcDtbFeNneadG4dJC8kguRhBTS3Hfb",
  "key40": "5v14UpncFJeSZMsscvZyeGqz2GyENJ6Lg6xJ7KPwnbgUYmMystnAedVLSYthcPw9kB381ZaiDoEM899h71pDPwvz",
  "key41": "22jLPzct64bhQH4AcxDj8atxn42uAPkhEvX32jZKsYBr9QaMPD92dCpq27toPujb1z3WiAPTD3EKMzJ1TkCojp7q",
  "key42": "62E4wLzyP7sy8CdnevRHw2iUknb7chdjH6ZTRgPDcRZcFVdcpuwGsrZP2VjVMjtrJrFeyEoRxHjkEZv8FBEaxZWg"
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
