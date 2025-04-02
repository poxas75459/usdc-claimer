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
    "3RNyTKWRNcw3vfJzQVtPyCmDE3FpfacRUPbScpnGjQhYdPHo5xtB2ea3mLeFQmRPSdQrxZsnxj52NtT4ePDbmNw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uQqsjL3g99RRTMPhd1mSjcZ4T6Duwe9TPhQu729YYKtgad6huargtL5wsGbPJAwAr4ETsDL2quzDLcPf4yviY9h",
  "key1": "5BxNAKiFRrQcanmrvrKEWaiKebBJqv6UVg4kKMwvKsM63i5uzRcm7M8sKhWDU4irKzXVfheiS3QLaooi7PZ3riY6",
  "key2": "4FAC1CH3zvdQJfCgnreDGbkqGndUSNpUsSUBAySZNJCjvMzXHGAagq4KEVFc2mhhuWFXV2oVgtggwiDvZKfMw69r",
  "key3": "5XYoDMSncwrC1e6XegjXCJJhqbrddrkPE8tjvKev1JnykQKyVkjqu2TKriEBtYgy3UApWUikytfN3dxMH6U7SUZ9",
  "key4": "5tB8eGdXWHj5vcFBNbgBMA3MPG6UkBikCiQqBXQiX6vNejiLuC3x4dsEUurSXmd2ebQbgtM3HFf48v1KT2h6adaM",
  "key5": "2R8Lk2facH2wuB4WrhsdyfQz9JtqXULfoag7JMspAKPfeqapiZKV1wW82YUkZTwg1DTTtZ34B4FVQkPJ2W6HuZJf",
  "key6": "387WgEVvHzi2Z94TE46naDhKwx6Di5cPijb5Q4eg4xUgJkLYmtYaFJPujco8DKAyef94ZTgar41L7fUJi9YB5KCc",
  "key7": "59WfhtxWBWv6ZvH4LDVZNzYABnFMbwVDW1qZXq89ZBA66LPUtUaWiYrXsGtFwWpLGxCdqMMUyZk2J3wngZMuSg3z",
  "key8": "4VBPDgNjkL6bZYzR2qSVxKs23YFNDue5uEwGnxnqjyCNsNJBJeSPmELbdWHaGBjXLN5BmBSZHDuSSKZgWxKxsS2U",
  "key9": "2z7Bg1Pw26KNxZhH9LnnE8KS3uZtigjKAbLDEPmkNdmtpDdNwubQKFf6YYoCabkzjtQsK45c6AcG2VVdpV1ejSd6",
  "key10": "5FNK5RiYRvSrBy8SmXhTKni27R3U4QuGBYqbXG8dGxkPBUCGNLbNr4YCr467Pj6mD8B7jmRKYRKX6Vi5T3eJV8Pd",
  "key11": "4DjsUwHFVie1fzQ6r5apepVfuALCsnsM67QCi3e4RTimNppfALwnHpthJx1yhfrgdxZNvCGKnoJcQUzHR7dj4gY7",
  "key12": "4e7x8gzm4knKDvetViKMbWVt3Fr6L9zA8tJyEDqqAj5D5eh3RLWbLZckGjBKJqdmTtjjRjvnmbCDNKFxqQ2knieQ",
  "key13": "2h16cTsfaojSujTtEcPszfie7EGgiKP4vMqmSozr2VyjPdBD8zABx7s3GzXkhDut2JUmRLQ9nyHSe8AESu9APcDG",
  "key14": "4hVqdRaA1MUMzMiMREj9e3w7EJpFf1WhtSNwU6rbNRALo2siQWTTE7Q3YhWGVy5Vrj6emNQpMUGH4vnXvB69t8Ww",
  "key15": "2aK1Ta7prFCcNV4ZEcFN9LPXu3pAB6bpoBG3nVgqJYrkeTGSw9tWNxh1ss1PztBJ19TAdmqS6puB2NSjyqP9HbcM",
  "key16": "5deLVZ67n163aVQtu1DN1jwmeM2VHQ1K9ySnntZJBP1NyhXYPSDaEan12wnMmj7JPogkBQJTY8JvxfBPZvGrNJ8e",
  "key17": "j1F8G4kqjjC3kHnWiAKWDiMJRJmKf9xePDjVXS5hAT4LYMyo7Ha9QUcNnytoRKsRKg3Whz9LZqVaaQygndPaLkG",
  "key18": "VvkdojJN4cveHRfXKjFjwMYgE11WJt7jtWokXB1zcayRtmPnG6x84NhmCcxijzwSrijGzwszhEWAqmjYfP2G48m",
  "key19": "4aqzyhynf8SMNwXXvUerg3huDUTemcVsV3BkYnpqwVtX6J7DG2dRuaD1HNwmw2gfMcrvNV7WRYhvc34swTv28Cw2",
  "key20": "1k2pi63je8n6eQaEe7W5HRzWZX5Ti9HfPCYE6quswbSs6dYhofsmX3tg4tsKJNESwg6FQvWBvpUuwKLVQkbu4nj",
  "key21": "3gn427X8W3mfjzQuDJdiC7W9ZYG3qMufYCMR9v6fD5JPCmhGNwTwQ2se7MuCwz7Kt6WrWbef3eH9dV7imq3i4r9",
  "key22": "5Bbp1pQGBVEArLcPYy99hwd3dtjz64rSz8QGHPRUbXfpWHtYEULYyaYyqxEJoPNDU1CfhQTiJziVjWPdNrRidvXp",
  "key23": "HrNtpgmVeQmiSWfwhPMJYcehuZPgqkgNf51er1dreFd15tiPvCYLtFQh7JHfcdfoYEHtZT2wfYZ7SZ9jWYoKFV8",
  "key24": "3CMCJSGCPDu1S8gZeDyQhfn2RpUurG4d37z2uwkjLExUNyUzsZyiuvD2HXUGupq2NFRz95MKcmHxY6EyFLqof46G",
  "key25": "48CpakuinsMfx1V36KA2ieSfxCMTqoXJUd18zChKLpY1tq91mFqeVTg7XajdTksSStgNhLG223ke2NiBzGGkYEGG",
  "key26": "3yrMHd9aDy2Ew3nMSHdGcd2oXxukP1EcdtkXDNi9usyF9ectdxGmRFYWVarb9TDQ1UJvcgUYndkqAwtu96CTu2Uy",
  "key27": "3JXEBxxTd15FSvJ6P1SZftZBK3poihFayujbZW98Gb85FeZtrS9FtYjJtrmKreqz3a74WGDc4VTuLNw7xVy995Ts",
  "key28": "4w4DgYMVUm2qDwANAqfS6V8iJK84R3AdpyPY8YLtcbddsF641pD7k4LujPpzn6MSQZUbyuTMfkRYWiYLNM5kixuQ",
  "key29": "2wuz5JiYF7roQMwxRHQQPqdHyD6oXqLc7ybfvWpDufXjMJD9RjS4gp15vtrg18R4uUhzeyy7dKnHeYFCnD7CS36Q",
  "key30": "27yRYjAGiNkYBnRxa297YimcZyWUJ6MEjP5UwADfzeTnvRKEpeNjR7DwLRoMSdRageNFVhpKHSeDxqDW2UygRuHx",
  "key31": "2dxosjH5MKHreRnY3WLiLTmST2SYWFJPWsfZgmHWqsJh61YB3fvrzbXw9VJDbjJ4TKpWJDzQtkBqGgWJbSgQSfcU",
  "key32": "22o6Ebecuhog2wTXoMa4Z2SHn3HDnnsD4WRQna2vbCLhEEQgwmSLGCVZXHoDgkumoSUFDCGqj7ZifrioV4gczdDv",
  "key33": "65gsKT8fVVgYcwfZiNi1vpbYr5pYkPivWUpHDq4VbRH71jxfdDPQG8f5K1CWuxzsaDqtYMzbqa3mTuXaGfuasr7u",
  "key34": "Nn4CTgqMx5zVdJZDmRjw7zcJMtvPXqorV7MrX4fLTgNNZ6oMv9D79tWDLnNdSJj8zhgaAMwhdvBn8Q8h9kjcRzn",
  "key35": "4pMkJLEnftfAXMFM1hwZUmyim9GYKxQXKsxtefzbhGbv6tWss9k3zQ9rHJqkAeHCWMVmcrwfN3ho1YJidhzQPoz9",
  "key36": "3r1ARgBkxdfFwr1R27hu3QtdeCH35AgoayzpKqP5F5AFAWUJPHdRMYD5P2n4Yvf1TjLXvE7zscWaKfb5T2FoXX31",
  "key37": "2Tmh6n6EKSYD26Fi6E4BCD2TXWNq68bveaCzpGpSa5LMSoBQh69WfqHXqZ8JNHgGPDkX6cudCDVVqDQ37DfZqT2L",
  "key38": "3JwiE7K3t1tDn1vqE54BqhGJ4PMcB3xmsKPYS8rLsiUAdaXr31BXaZCwphH3hsYGakeeAKZ6fxc8AVFNV7opj9x3",
  "key39": "Ymn4CB6V9ghvUE1qFK6vpYUgUjAKnS5cpvR9WgfNPS7pFdtSHhZJHVHsYfqHmhdimoY6nefXdAP2VdBFU9Nitid",
  "key40": "y32wRieS6HgnfHmXx1MpsioCnGpnu17w9sFqvYEjcUvhkGN5uzMxDq7F1yZvzt6n78QZhvr9zmiw23n6yvZEzkz",
  "key41": "62qR8EX8rNfGaPYw7q2t74we4Ftbupk56mzwL913vnYyhQDQFYx1HPmEkturk9VASPBJB6xYc9NaKEfCCssGQbH7",
  "key42": "28bSMt589jwVZHWtZy6NKven4tFx3eq1RXFCyK2qwvq8j7xbuhva5rVWPyQ88J8E5qAgRqK6yo4dx3LJMDSL8LUr",
  "key43": "5zMoPFw4iQmsgGDz8Twr8vk5k8MTarQFXG2dKbWw92vLFJ1GJrEVPw3KxcBdkWhWYwrf66AQFjeXofEUgTYrPJRq",
  "key44": "5knn1oBD7SEtuquBk5eY7Grresh3cbJN5DFqwHC3SYq5bVL4WGvhBJGSmKhdvEwLupvShFCbVfyw8PMKZTWtqYfc",
  "key45": "5VUuFBEEpSc6gEZNHJGoQ3XQujyXT8ZYUhw8MKVJuVrmMtoVrioWYNFKwBsFZ3cjSoFPWAdnwhujSo6eHwFeDxgY",
  "key46": "EnTk47QFgps2WnGiqiwwYRjQs766wHfNoqFGwPhaGA3b5AYWrc9dQQtKqjWcjWwh2KBwLVPDDoYktjcTL4rvttc",
  "key47": "51Ec6siWSM7pXcseXbatM9K4MBWoQ1XQqj3s9Yichv73C25CAJSjtC7Rj1j7veH3X6NC34HXtrCY8CqBiTbDzGAs"
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
