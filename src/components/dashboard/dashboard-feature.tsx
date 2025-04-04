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
    "4wt7321cb9hx3Rk2Ej8T7t4t4wcaiy4fBvuGowxb7n9TWvaKUnR4TuEGJtKVSYxh9Lgi6GNx987jb47rMp5ANL6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27SsPqnU91eJmRKdifwH993TzSkBJJfJJ9QCSDdHdx5RPwvAirs83fA4ZAV5Ly4FRR4QYt5nymo15JGHuuZVRDU9",
  "key1": "4nxWpFhfKs7q2BWvDmRR2QuJM4od3pb4DvNrEWKAe5DMbSzDPsRmxFjYwiE2fY6tP6vXNWnzSYmydNsJXoygMnTa",
  "key2": "3NuMwVijGqfCB1LftXLkp2tX8Kd4gHU7huVqmdd8KiV6R5E5ebPVXhnbmw4DzzTQcXVRrjvDHG2JAScJTrGTnyNU",
  "key3": "59csk4Eg55GtKe5U4AsNuecCqJi7MzbxTtt1smRJyVq7TobDezVwrPGmgry2vrKgJSc9rcy8tHgpgGrXhssDFKD6",
  "key4": "3QQQBr4WG43mUkFbdBcAfB5xf28WEzJtLw7Gv8UbGE5cSVaW1r9TySHPhdsRBXuXPuwctAn87yDfGaZ6hMKC7H9x",
  "key5": "26C8zV4VDqkysCm2RiqKAU1eHymrTb4dicQeFQkbYskSzQnFpVp1gsZfTwDCUF6oHmY946fLoyJbfXYTLZHnRdqK",
  "key6": "3ZynfoKpfDHuGMg94PagDb5RZWZ7Rv4WD5KqXa17WAyNCyncSwkAwSTVy1z33brpE9eiATGvVvZ7iEcA1an5mSs8",
  "key7": "476U1ZSK8fG4uaLXjkJFj5QwLLrCoNdQshvqdB5yeJApenxV46A5w53Fe6mA6RPsoUdc8WitKZmt5oHAyJpwsody",
  "key8": "3sddD6szczNQLm3wZqAFwwvMHncrTfMpbXzsRuLhg2LnmLVd4u2mdx1556KuwLGaFy1izDDSQpQefk3UBEkgN4tu",
  "key9": "5xVLBxYc2nHDDd6c8qZhPLmAqZmuDWKsDtKyPB1oHMDf3rn4dhjbMKpLn23RB7mszkuECHAtNfDfy2ywHyEsXp7x",
  "key10": "3nrMEpJPRtY9x5wgtBccrCVddeQ3gzoCKrRvL4BWXnyc8MfDynUQhLwNXGj1aDjmAgLx6kX8mfSraw6CCXAdyygE",
  "key11": "34AuFLDxseKQkSWfj7tv9x4p7PiXWrc3rYrBY4fePw76cuWJM3ufdfc4K1u9jNT1N6rY9wM8LsWeui2QvvRrxcp9",
  "key12": "8RYfd1MsJiXMm7oQxfFwRyM4uGxvnZeyatjyQ7HFcHtfn2ht3zUNuKMXpg38VEaAhzRDduGpdPKuScvzPtMw7XS",
  "key13": "2n4UEkmcYCD7yQvy8ctPf1ssry6U2BFb5W6kdrsyXvh8ZPDZnPZqACfhgt4zi4XTtFrJYQMsb2vCywveGXZfeCqw",
  "key14": "5JT2ryCrCtyL9uc2zwc6qJE9S6xYyrdHoK39H1TbPCGtLbMGJ62c4eXAMRx47GcPHypubwJcJV2dte53qXSkg2yB",
  "key15": "Egvwwwo4QdSmzkCeTFUw1NdXVJSU4hWQXD2Jd2WoC1fzTZcDBNZw8vSnwb5HaijNLNGQN3Budp6aqUR4kD21hbb",
  "key16": "4eZ8sEGpjMo9mGC2QQUFvnhRabBmiqWauUqWmaZELMBB9RtDFqnDG1PM3yXxQym5Wc1gjo6YAGJJKbVhkXUyJCDV",
  "key17": "DdVuS5BT2fK8Z3GJZKPAides1UXrH1NMqVKjqe5FB8qa8YVCDvEqn3rCBz5w8y4GRQ7Qtv5v4wQrp4xgqW1RiAL",
  "key18": "62pu9Q5uQBcHwL1RWeXb99fN7ZKh3kR1Kpfmg8FtY3jvT15SJBrTzsv9wh3PjJ2sj3bJrzvt1UoZcp1ncfJJoPo7",
  "key19": "48mNeznmr13tMUCRyBi15eSk5noqM3pjUAs27owhZjjcSPFQUK3izb5iWAVMr7aojJawX4XrLTh2iW5mza869BbC",
  "key20": "KTDPbe7mvWf3jiPimSa7wqHYfMH3gKA8mrGhKtbDYP1SmF4P8Ysbn9NFMqGQ2mPbtntg9Z38SP5f5QKSEtdTmBu",
  "key21": "3Z3skee9sn66tk2EAFfi7cUPL5yt8qoapmbToZNpTNRxuAkuuYtbD4DB5yVSRwQjPfjiru9CtaEPmoyAX3Ppv3WS",
  "key22": "2yoz1QkiMbdatkJ3JiuH7t9mWBHBqtVVxD78LLD9MHDXwQkNRo4QqCzp51BZAw872WTFV9Ue3EYuaB4VD2UEgJeo",
  "key23": "5ZvMq5H63e6DhU4b8WQ33SfDQwpV6LtxdkrNpsfhkgRrTqZ31LYrMAjMf58m6D8fdqNh8YVAEyHa3nCiXg8U1qWj",
  "key24": "2J89ceCd9BEPnLSEHTdTYoWAEze6MGqRxwAo8k1rHkGfyyMRXRot82DVcmFpdFNjebM7JRZRvaAR5vb389oXoFa1",
  "key25": "3x75Ld4zEv6BJ29csjFJinVg1P2bVdCAMJCKr8rE8cfwUuiABmcPbvrJp3K8AqJr69nui1RUK6sAZkWjdNx6VBFs",
  "key26": "3SwLJuH4oCZsYGhKfSiepjKULdp764WW6kxLECh5ga3FNCXoaydHzg8mYAZocM2ipyF1QbfngEvibmktqKTtWGJb",
  "key27": "hXnJaWsCJfzUK1Rit1DN7rb6K1R4GJ6Y5Lh1HyZzJrQFq7PoAiDMj2EhePFvnTzKD2H7vzhw8kg3jvDv71ttuAS",
  "key28": "4x5CEyJquV19v45ieYmLCCzFHbYnd1NinuooBDBQEi4Wf52Vp1t1Chk3wR75r3PXH99e7ArEDdpuhc4E9AV1q9u4",
  "key29": "2qgbt3aBffpQ6XLRCMeQhEBshxAZpD56APUEaaoFdcxRVwghnzH4azQRhzozr22QTke1ThH9JzLhUqZB14vig97k",
  "key30": "2sUPGDiBYkYt6vbuWukenmECU1HEySAajH3UcJLyouXiFR8GUgMWwMftGnzHMJMDE5sVf7xVUBxkzHsmXrmckNyv",
  "key31": "5squSXLCwNwHWTtpkaPGzne7bbQ2yPSCBdkSBXsSNjqdg6Amjf48b1Tva18ZnpRwR5bXdGbxiphkgW42BDHS37Vt",
  "key32": "4yRZpzgtbuWrchtNgFP9vnt7SS26E7fK5uua86HwjFDQRdjTBEPNB9dVpnLU3mbbAJSwKo1qoFoDiBLqYzXb9asA",
  "key33": "huWayW3aGji53PukeX9gEUhfk8HTSGcrP6ATEJDiX7E9kNMrnXM66sfLHCdsKwmUSPVtSYb6HaEmCEX3hwawvP9",
  "key34": "2irBV2e3r88QzvWLFMnFgirXcDzeHqYuNDVJ6ahJS2DMe6qudv5hXchB4eFPT2PigUeEuZUNf4eusT1stNi4cvrn",
  "key35": "4kSCtVrf88YFi9xxpcoRxr5mV66j69B2ps3PdLCCe26LwSrrvMJvRXaVcgPcP5UhaYg9i5HsQ3LVr6Nk7mriwPxX",
  "key36": "2RUNzPrzMfTF6zdrP6s9bP5heuVbjyGWKJD5MBMcodcg98bRn2ueKQHR5s2biKVBNrxRBiVXjphfKFouZjmsi3p5",
  "key37": "4EcbCPqc4WdZYxg4SGaqifYPyXZLjNdAZgEZLy1rhhyiV9MNsTwkBsqBAYZF6dWF7578mXbFmAB74rBPPm6VC7bj",
  "key38": "3VGkJc1PTr3wameUX5F7GrkRYstZsnwW262QeSUJQ5cSStaSiyraYDf5xP131o3BRZjdErejrpUcVApCYs4GJBrk",
  "key39": "Qe6TBnzTXRZdiGNxd8Gqad6E1eriYYXeTLuPvY8ffHy42Hip5aNP4WHZJ9ojoZhvS7Xgu2EodM6y9hxnsDmhEZE",
  "key40": "5SACEL81LJquKcBFmUaTEx6tBvh3WbZv7fc8YNQurusV6C5BHGRqqiRTJj78wkMVUra6DueHKySSuTuiKQuwatHC",
  "key41": "2hyC8LrVMNbTxmNuuWFPv6XoZ5fPWUwTdeCGAq36BQovq9tiWpioACDRv3sMYsAD2Q41wvToVG4UGxnSHCSjWV5g",
  "key42": "25DVStidCJvrPQfWQsqpqovci3YTKWGGWa3g5npopU9t7VYtQPLgrdC31kcdAdqyMwbHp1sXvXGbCJapyA52aCv1",
  "key43": "4EHDvVcQAgbcWEr8id9rcBqT2uFkx8pQZqQuTwaVXfmm2XW1icvS82WZA1mCtQ7jH3PqmXufgpBAQLExTKVCnchw",
  "key44": "2JQxUEgUf2F961A9zMsXmsXYxUW3SXFwx5xqXNBQR4F71HVcXHj3E7d7ZE5RbNeKHfSUEXUwiWQgyDw3tMvUUucx",
  "key45": "Gcs8g7T14vA2yDR36R9nB3Gs5eTZuTa9oWy7nWUMQ1pNkyjHaniETBp9pxQj4DwQUnLeYcfPyY6gLKxUcpsaoaH"
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
