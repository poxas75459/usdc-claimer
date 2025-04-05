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
    "29Lag1Ri3LAtGNYSR4pCTAEMNkbZoq8h85xXsvHto1pbJoFhaqJxNXDS74KsBjjfuEWvmsbsD9rAFdie228kYwyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57cPJJrn3L6U4orLA4EegogSS43DhQeo8iHuVLfWxyc2jfKXfuCXda9bcJKdnbbh3pEawzRNpP5zeWToQ7MXzqL2",
  "key1": "468U28bfzPpMr7yZHR2vVz9SzCFkxMTD4jVDj4PTBr4eu3bSqnjbEyUAwJWFYLv9556m8Fkrq6UNA4HLf5zN2ccV",
  "key2": "Hd8f8bNJp16nVSEHBjACfSa9LRudU1zJZfBeheiKMxZfZKV3S8hMgPCfHrL8Y1ZEkSU7gmGa6wSJoFZqZanzgHV",
  "key3": "4PEeoELZJWuV6cS7MV9x3WdJkBPHcrkLRbRrgAsdnjTMUJiz3tVE7DUX1A7vb6bjxNV4msyWbsAbumNtGusxHcFG",
  "key4": "5cdZmuGDuXvVJUvFwwJKAmocEP47M39MfUwRkV2q1vXV6x1RZ3MaACqNbkrTQHsSqyiUwdjzpf6tjv4QnNutoMC3",
  "key5": "VGR2E4hpayaoVdaLR5r4UhdU72uYMc65J2f9WTMeCXMSTuuQMNQEEdK1i9smqi7ChcbvmT6T2bVBp7byyqkcyge",
  "key6": "m5YBMfVaXM2c1HWoCvzH5p5WG47tpkvTc7SWiA3fQhTkuz2CRiwEqCyN1EuAd4DCdw4t2RJTrnyd56k4Js4EZhn",
  "key7": "2ejqTRd3cDLC8U2jWHJZLNfAH5EmBFFmfLLn3BctZwmz3e8Qq4Lyzfgir549h9N2JS5tmSi4t3P2gGZ6KzX5ducC",
  "key8": "ja868r33DWkbyKLwgrY9PvBrY6tcoqkKYgxVJzGTFaSadHsXqAEks8tjwqzfu9LRb8rkBdbyMheGDszTEaodFDf",
  "key9": "4p8bDd3V1VVcamHtpo8Zs42LLPNBcxSUV8dNruDxYznpTFYYZZifXV1qDCHZGkURg6g8shPjbQDdLNj23Vkct5u4",
  "key10": "2gqrEqcF1j4zRQtG8Sf8bZPpNp9cYJKwkpAMnKUeFNBwezGf84DGV2LbgAXFoPjy3rLqMykEnDkQMXBse4fDEZej",
  "key11": "4WC8RDJEufyQCM6yoYuYR8MwM6h9gqiUqni7oCNQqTryx88Yv9BLyw9kKsXiLUzPqm5nA39hdFs4fFJG6cjZyX3C",
  "key12": "4pELmJohjUmV9zKbgE6AZfm2ffYmrzGGKWtMPDZU91WEy7RsGQtjxzD5qu66GKRq8rEeEs9BLjRibXnLNCZxTznh",
  "key13": "2BqiCYrpecbcWYeuFoaSH2uRJMirJ5xdqvxRrxVezwFtfaEwdgwNVJHZLVcSvMCssUTG62pmJ1VUSbgiySijgXv4",
  "key14": "2N7uYRrBtg8PbPziHfzWtbTehTBWujtTfH1VgKPY6dUgJB7QbZCkCkJpFNSyab4BbMbX8juoznEW4K39FJzhDcCq",
  "key15": "4fDK3oEttS3AhZW4icLWbZLL2VN821jTpCgboBC54xuTCXL4MPdV4SWdmHS2zYFVH7Syo2HNDknryCHQZeqZ8ofk",
  "key16": "2gA4AgDysAYnXTEwr5PbZSbEiGwwiEB76s1kjx86QTSMwgUPoatN2QZzvceCDzAGFXZJuU6rMzoSkH6MNycsM9A6",
  "key17": "2CPhipNPtvvAk2eiVpLfoUaYv55jRXJ4G7YuBrWuxB2jFm6tRAoPK5CDhGW8XTRKG1L5AtwfK1JmXCr1xzQiN4xp",
  "key18": "48HEHEYQ87NXjmw4MAu9hmJwa2PwrJX2YS7c3GrYjfxedZ449GRv3dMwxhmThdt3iaxFS8xT2DEQXS2gvPxrposy",
  "key19": "66CniM9tMo4mMi61ZZjAyVmZmNfia7vGrrrKGDJbsHDvDFDMrjyxrU6pk1hYUZpS9iNwEMeikwchi2rXbNWCJZSD",
  "key20": "4rKmzL9dgqUJWZUNsQk1RHK7ig2FDJgwe1qReVfdQFscg3nAx9odFekyK9aZCH8KUNpNB8AwJ14LWPrbUS26GWfT",
  "key21": "2jL2RBLeZt8cwTFyoF3LGNEDtB7KWxWJSBeo8nSeVsuDfEurmoZn4NxAEoFqQTm2b1Suu1k13xSSvaZn9XhkxTDv",
  "key22": "3erEB8czGSeP8VDrVpqDSprNjjdY6UNcKDSsyqYfjeYoKPrM6mdGtV8qEPsBEpZUfin9nw8NHwkxweq9XTzfc4qT",
  "key23": "ud486h8rzxiKzjNiaM1NVcbcR2wMHmnHmoH899mzxzKUhPWXeVcdS1oTt1E5RjkzAcwbLApkVekKeBce3kgHSX9",
  "key24": "5dVFkuvDwkkw6GB6kYgQvvyp3f44n8fY18xrKJZM2MAAHgWpuiZEw96GeySGD2o9FYFVHQNaLnZ3t7sSzNiqCN2n",
  "key25": "4ZNJZx9uBP3ztEuFxD8xC7Ft5y1poZtMrxw9p93gZxirGgTPcvNjMbebSzcZBdJxnUZojki7pR9tbyucMxPYgZTR",
  "key26": "6ZVHHxki26CJw7WG74ggy15vzcsaSMPT5YVHRvruTaDuSGGmDQaWMaLLPSME6Rt1wNhqKgRhBgC3Rouv3j6kVJ4",
  "key27": "4EBa9MCjx9uYYAngFyxZ7ZHBoqJH3N5MyU9GGNUpsh37dnmysqQR1GCdKy7RkgYgciPWxaJ3AjnLFrmaQpymqeXp",
  "key28": "3pPwDku1KPDkUK1gQmLKTvAThnP3DzQy7ZzwqLXMCG9SSzMrQJ5vxYcxijhc9nZBXYZUqam4R2ezFqxLYb34sjCR",
  "key29": "5hd8WxmXiXiRPZtCmyq5ke8QTx62CPM75ieeLW8ffcTbGNzYNWSu2HRNoV6feE9VVZGaKmNACnwAZWz6Hiu4tLdf",
  "key30": "4EUEJr5yG6Mo1DhxjcFsMnnxjJJH9KB67UjxPcoBN8veiEzNp6195Zvk1iNPVqx394MaaKy8t6TNpr6J8ht8RQvj",
  "key31": "3Lo3V1ok1bwQet9KCyAEVH4ULP3wFARV7f5CshMyYvv6h1NzusQ7gNSzaXWMGhxRsRzVPzkP3nYt4tGeeamwtvD6",
  "key32": "67ani7rFr817rmpmjvqDWWiUf7h5qTevqib3QEZyb1e62ikN3jKT6gbuDNo544MLaRztaEqbVX5k8j34rALibYLy",
  "key33": "4rZxbchHMxqMthoqPoQsGT8tA1vE4TDkewhSfYbQ836o6jrn5MxAjS1HkSsnfDd9mP1DN1dP61RqDszcjX8Pp95o",
  "key34": "5mHk6WXjVWNdTAumBX6zDp9cnDXNyirBd3v2J42uSsgytnfhyz8RXXmcxihWhCK2ziJAZYzSbBcQWZxFUNHhGZ4K",
  "key35": "5vfTR6mYujjB27hPwArPfWuADtKWsMfoD8J79GE9WwF8C7v2F6KNeGTAREenEZSLRMTmE7QcGBNf2PzLT7SgQW7y",
  "key36": "4ESwSxntaK8HWeDQRAtiZR2UUUmXhN7osK8a6Gs9SwbFte5pqVmYKUX5ULeMZBxxhMuEgBCFHasY7optC7P8HjGo",
  "key37": "643AxdTU7hqttKXjSK3KAksBYP1o6ouSeQEEux94vbeadCY7u4XYaTX7f8T647fX3nw7sseGtYoXrtfHxdptb6z",
  "key38": "iLS2F6oyrxm3ygTQLhe91yEAtpvNsJsQ4RHz1BgvfvHR3S5ecuPC2kWAuBjqVJcUzPhP7TVgTkL2JUwzWxjRYWd",
  "key39": "5xV8TyEcEroXF2GnyJhacrVqKmiqiFN97SfF36J7birCmr5thHFK75PYGxSxH1mcWcDEXiJ9uvEEa3owSfTaky8j",
  "key40": "4wpT4dVXGV2CGVee6iWN9eVhLD8MyPTqB8daoKKLtEz8W69SHLusiudNBko3DUPaaTp7Q5SbtnYzGHrptGMGaT4m",
  "key41": "JqTswFK4qjaAwAmEcepNvCJn2ZMf8fsDUKHHBbojU6Hp3Swd5MjUMAw4oN1WDPGAtfSuvqixRpEZmFSAiqWmwpP",
  "key42": "653JMQuaK4ATCy69yqD1yePZew3t2b3oyK8nkTe5X4vF1c7HPZaS49iKXuo6U8onr5PTqWFxMtc1ATGCeetw5vz",
  "key43": "3LkVT7p5XHbofJ4DJniUFqrhuzMnuPnKBTKM2ZXxsT9tbKQR7StTJfe7ieMSLte6TnTuSEeNG1g6rXU3q1S1KkRB",
  "key44": "EYb1dg3gBV1K8n45yB4s3Kx6xV67bpWpU4J6ivAF7Ngygf1YX4aNhLyb2grYEUJnMsd5SgpTymg1Q6XBT5aJsAX",
  "key45": "5h5Shah6hpK83oo1kpiKAp2sCPAst4JN3dVMsEEwq1oVAc6wCQkPgrj5XYaP2hJhEvWAwRVCs8MPhsSkGAXnYsXe"
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
