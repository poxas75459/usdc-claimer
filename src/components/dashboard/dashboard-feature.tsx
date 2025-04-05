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
    "4YhjN6QzfsYog8M1zMerY7tNpBuaKdYWavbsmL7gkbUgh1Fmm7YNE28BtckaxgeHQuzugwPnKkyTJeZ58VTX2NFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "495gEoXrsN75Ts4YisQ7MkeAWZuDyMpEbAy9fefVSJvjCn1pkHRRnHWnxW7LiaUYffNekPVRavEDL1mcAqGRhUsU",
  "key1": "2F97HFwBARAVtUSom3Kx27nwiwRKYhVU96iUrunKJggoJPBydR3CWh6n51qCz2xSDsvjz3efk2cj61nm2sFnwwjf",
  "key2": "3AaT9Rg1bMR3PSEoHbYX7rVMsBtHeWjaQGAozR5vLo5zPqSaQrMzvor2N9hBNWNDLi7UFe4omnT5KXosjGHKfE95",
  "key3": "3uADYmnrUEvbzHpNywtHsfZkqJdsHfxTTQCtrAjrJsbBKXhQdHRXvRiVYbekLnud5RETcaZynxUN9X1ZSThLeLM",
  "key4": "66ethi6hLdKKK5oesuqvCFFXPC44jQRfz6pdXxzhvQRMGWEdmmvSpcGhD2reTFo1fufVFNwMTFNVTc7MgMwHAFbe",
  "key5": "poh2yBt5E5MxD1JAN2TiTjMGciEWRs9zdFrHEWFaHS8RbBDm3PXcBT5ELH1vAAa25FZhN2fxB5Fh8GX5W4tBokh",
  "key6": "4qUbtBJrS8jw2AxLaNWfehMC5BmzebJ6nqkwawvfvZX1Ss8fqEh38tYq6vkbqchjrbK5uLJg5qnbNbfVyta6LCt1",
  "key7": "5P1UfkZMtUk4tvyFwmiEeLfYPGMjVcbf9Go9ewJETAa1qSCdUrHusutKn7mZQefFxh2hr9BuUqXd2kMcqhi95NUg",
  "key8": "4Cnd9hciM53wpjEWuGRprzRjG994N2BuSC3u3xGruizQuhDaVSqzchS6Horg2K4Dg3batVG15AgtzsEdkPYHMhkT",
  "key9": "4sLVjrvcciADzwukLgcJd6XXaDjDYMMDh1wD2xvY8ei5WwFEEaaTa23cvRpK8Cre7Vd29no6LiGCmWB6wMZM5hvB",
  "key10": "33VvihXqvm73dnTRSwLTnGRJfnqfw6h9euZqvFKieEtE35X3L4otNXAYttzPmxaiyM2fF1dcJpPxdkWqYPia1J5i",
  "key11": "2cgcsBR53P1z2sTQ5MVVpFiPFFWAiEtXB76Bk5bK36xeqZoxtGVmQieP7ZfYPki8jav4XGdL2nxcvXmhJACTxgb9",
  "key12": "32rDvQZEswZikXzpRbJHtZFfVzXJbotHK1HV6UVmgnzzMCkNeaaMsmeXrqv64uMyEv7Pefg8YuGP7xKFq11gBEMv",
  "key13": "3v1J5x7hEMGQLQ7Gwoho1w6WmMex7Vy7T7UbZ3Szyz31NnAnAJSpjTymd3DZntZpNi7c8oRtfNocNHU1Vu1WC86q",
  "key14": "4nWJvcheDihxEABcot6BJsMT9UquWMCbKsrNUKxnzSzYJiNwZYDjGJaUNLuYiCmzYfGrqCoUTyNTnNuw2cQAt1uY",
  "key15": "47ewXcX1Sbgspt9PDjaJ3SWmsrigAocvKUxPGkiaAHqowBerAFaT39VwHbXbDPViuR7EwEhG1s3N1pjQ1E1FX7Av",
  "key16": "vXEpsipGeRfP25MiQsz6mTGGR6uQk9FFQon6FNvUJyZNTZkHbReZLGjRbu99oLywEU6u9zUavx1FAxwDdRX5nTy",
  "key17": "4mXtxAd1AHSqruLNGNxaKy9eLCwYC53kYCc4UkL9s5wWgYRJYkM4JctjhTLUzPd8fmQveWh83jfp7VE7KgDDBonv",
  "key18": "2PZAntBU21eTidatnGVpwKJH2CLHATAaT3XaX7CUHN5x4VKy9tFM1U9yZGKUYpz8tyJd81scyYDdaXwJePy7tz13",
  "key19": "T3NirauNuvo2hpG4Er7HdJYPxF5ueHCyeoqjmiDkfkbW5ubYvLLGwQDxWtrPDYSj4HPHjkN27YkBHVJ4Hrzvqi6",
  "key20": "5HcsdHbNzY9zDVDvwk3MLW9a2vwQk8ARXMN3JCZYRDosz5HcpsXjCQcdvDC2rR7Cobdt9omwTowJmaDvUeBeW5oB",
  "key21": "399FqjRUJWmoJ16Lq1ghRK8cmAcuJvrTuoZh5hNktQtxgnk9TzDBJbeEihiJth2VxvzJVgNVWdidYhDfKorxz3tK",
  "key22": "525VuP88Vy9wGQj21dBerSne7ZdjwnWgcYfCFzipYebEG8cVrJbt6ScwzGnr2xNy1W4iWFMVAn984V6uT4zKadMe",
  "key23": "2rpns7rCkQbEjdjPgm17VsubY55iZUvnE1MnywGrLidJbHK2uowq3iAsZdgFfZzW3GYTV6gobrx79SZ5bztHRth1",
  "key24": "3wSLCv3qNEJUTPYLSscztT8ZYkuoYYrhzrh313k4A7wNupGf7D7Eej8iY2dFaNFK3XKAwBJ46Zehsc8tkCA9FxSt",
  "key25": "2hRCQbiSeir5a9Vv6cuFKpdDCCnSS78cH319CrG1ybLbv3ZDPCjNMDNc2NeuKHncNm4WM64djjvnJb3kzXMDu3DD",
  "key26": "2XP64pyvqakwmUvAGdeoPmQVadkEVTtaVJn3HwLf4fGcrz6tHGhTqN2pvCzfcRPmRgbmpe5H21pQVfbPtQ1tcWrD",
  "key27": "34uacRUAACZBFdvARr7STKg6rThG5V6QrDm1a3q8hWQFKe7A55nnjoRQHDY4kGVsnjyjokGnmGxiSyMqQDboLTHZ",
  "key28": "66p6y37ZANq7khiUEMW98i1CihMHFDTTaNDp7mkxETapZuDFY6PmU9htZ11tduZDb1zURciJUxbPLLrGbvjMcmtM",
  "key29": "4Sz9aLp23vVPuGnDS1P5h89uW5ZSGWCyFhzwxwu2Krd1RVzKAez9GjWE7cycE59p2JsFYfhcQx93B6Fbt8VDgnYL",
  "key30": "HqvpQ8TPRy7jm8svkE6cXtBq5xFpu1XFRjiThkg9ffkmLj4XkA2E2KDkDvYgf5xfGg6zX5J1d2Nm5AunydqM4vw",
  "key31": "4sKd1vYBp5FawnT4sn7tturCSfDgpLW9BqWNb7U4sH3jz7qfvFo4kCSrMJrCZTGShhC7ekB2v6NMmEyf6JqERTNW",
  "key32": "2JVHd67r3FdpRjEe1PBmZUdRS8o5oPNA8rkt4XqA88GBn3cweCzdtxwSj4u8cFGdDghNJW9SShwNzqXFagTZZxvz",
  "key33": "43DEr6mReDDp7cnGeVcc6f16ByvShscwMUi64Ppx8ruJVF8x2mbxZhL9eeAAyn7WpzBPcb2GgQScWgy3radJrGg8",
  "key34": "3fLsUYfLeTdszmipQEsiLM46peWUztPFYKGEsCpnEy5nujij1cfya3W7V889t5kPAz2y93dHnkaXEHHA41MJRjAY",
  "key35": "2BCxbK8W4GAe9TRLLkhHMBmD7LiNxiyureLABCxWNoDtx7mqguHYNemgk5EbSstubRXEfhM4pyyN3vFHwVCBvbnQ",
  "key36": "2UAwsRzEtTTpQ6PU9BbUR19znUB5HigzQnr11dg9r1acwVxJsmPDU3oP1B5NtXEvwXHxrE251jv7VLRUv3BmxYtf",
  "key37": "iN1F4VvNAxE4AjmicUSKeh1VNnm1KWWUHh6FhhzpQeUtsQ3i3iXNNw8ESCKwZ111kVMDHm4bKpdPWNWCBF62yJ9",
  "key38": "5fg1xHZGBSrZDH44Seta5VdF6R1g67Nq8QqDZL2XnihAWgpHUtJVJjtwq1sG73c9azqbGSLbJkzLcQcTA3GHHSUn",
  "key39": "4fgMdw5p1HuGuvh15gt855N9pj9ARNRFbFqhXQzrYenQAU3oSjQ9gsoX3odQntoJGQG7Aoka1dsed2yVY8KdfWUC",
  "key40": "22mib4aojYSji6dtr3sDqNKyhSbhJW1RKqqDzdjP5jddNqVMsn6BJ63gBW9fV4YKd5s4HcEd84uH9efRsEL526rb",
  "key41": "4ZpkSeX9sVWFzD3M53yxHJDNgSux4uSYEn7psECHBUe8JrfNgeuPygTv94G4cjVaA9xgEPYG9Dm88d83yL431X14",
  "key42": "2FnATxztPKAy13eNN1TuFUzYLUKbX8GrRbv1H82VXAQZvarrnV3ceXmSRPfuqEGwTED6yWE5x7sDzw2hyvRsps3c",
  "key43": "4UBjBx9A3yHtuqXxn2NEL3FQvTUzi9i7WLB4ZaDcGgb3ZfanNbTb6Q6KZFEkVMGdSxDVrj2EybCxxQmdGwWnm6bB",
  "key44": "3AT7dGADYF7cmHVt93d66yDjpGSfnat2Kej6sfRzpNhmhaQT5TtpC6vXviXiif1MndormNvHsmbx9CjSZqiHRCdC",
  "key45": "33En7z37e1zpkbBM3i7f2cV4VwVL2vcdpoWD4pDaH9SyMEQkyGNcbHCQuUH1wsBMSYNX8swe4BadZZ7zjoRP8iqq",
  "key46": "2QzqiC9tn98zKCkPVcePk8QWh5nCUC3itrbFLTV23P2XbBtDA7BQrKAunzQQ7Z1N67cHBi7GRsLCUMAPiUWp4Smx",
  "key47": "j84DftHov1rqZevikqPgn4V9vGWJUKN1CsWfAHy4a54pPYMPQqkjb4CWfYmGZr5TqcPdGuaPZjTwdbnMawsngtE",
  "key48": "3j69W7KNTcqkxE8mTbTCsbVBFdE52TrHmPqDe4S9pKeXqA3yxdvhrbXrYXVXKxdVViYsvhnsAxH8Z3Ud7NGhEVTy"
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
