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
    "4E2hQMsoQDRbbdPXtNa5yUE8SxKAptF69D5qLLSpbbpxjg3ug1adAoxHdFBaTfvXYYh9GMpy4n3V7AHKTa18ABSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LR633RHVgkV7tQ4CUE6xXGXYtUxSabBzip2TesxeDHAPntoN1dX4iYaPKj73yiefUkpRfuFh2WyYXMY6pDKNqA3",
  "key1": "n9EDU8Zyq7hN3NXzy77Vx4556EAwAJ22ZNoEmYYHir6v5VzDveUC9N3gcwSNrVfh8qwSyVUgmb3DqVeWaQZFDVF",
  "key2": "44GtEmd5yC4b4Gt6RPLoqDXkw5eae4Kz7tooQHLWN8RNuEQY7bha4bLJg9MxzVAURt85CsaNB6rtd8YAc87hZyhV",
  "key3": "PRdNfsDcKLv3d6WUkEjRwavo9QMZJRnfLg1aWis2pnN8G7GsymQTnf5xoY2ZentuSphmobhnnESFinkiU2W4nXV",
  "key4": "5n5EY8LW4yizkVEpbptjaLFpSuRgvARsi7fet4oYvbs6wMA2bbGvX95zsHRxkM62Yd5ZhSEUcz82PYgjg5nC3rdV",
  "key5": "4xgELDdMGd6ZcdN4tvQ3AaetiH7f9FZ5MvuuCYdz3oJFfNSvn4yb1i6xaz8uTV3EBWSFTUQ5MRDBV3Ew3VfiGvPE",
  "key6": "3zScUZ1kkeoUUcWHpayiFJJFp4pWwPDHxREafoije7NJhXYnpRAmirygEAXihbeYb7CGQ2M3NdQQTxdZh1GnJJAg",
  "key7": "tgtN75V81g9ALJrER4guSD78tcQj1sPXehVDybLte19JRDh2itmD7GDCtCQEipcU27AGNVxn9EwobjM51NkFpZA",
  "key8": "5gK3T8t9TQFpQvHLMEtSs2CUXh7RBSS8EZKhdtkcyBJfsbbQGaue7GeBEA6ieFGVWPAJ6wbpGchKPAwM6aCCWtbf",
  "key9": "2mxjFdGwGpNUtw1F4Rif7qCGE8vni6vG2sXKniwDBC2dRBCuGRBaS9AvS9u1gCMkmj2ZFQeb6M7iSwimNN2QNCwF",
  "key10": "6S3KJ5eStevTB2wchUumyApABQpHfmoNz1kyAyQRVaumAce388dfKkNnHrxZaokCfysZ2tr4E1SEywBbzVkf8Va",
  "key11": "36yDsc3zbrdfonkVxGE5ygeQDStTSHGiJF8TW89mKz1TU1HyVVBDnXzGQQXxdyZ6fkKX288vRzMwGVeJhEuRhwdw",
  "key12": "4tc9oud4emTvM5F4tYBbS1fnznSYEVQii6krCsUm9ZHvCe6tZZ42NXgqYivCiHtZGM4puMWSp9e5Y9jzHjF169T6",
  "key13": "5XbrtU53w8CMP6gmqR2sumxqCbkrxJXhDro7ycCAeMrSngsfBfmqKtJGkZE3nqBKd2kEEp3riYmDkBLvmoGxyH4D",
  "key14": "4FEDgnk38J3idWorQ8nYCRtCuU1PvXvPrXQx2738ceDvFzeQgZYyynyCcgkjMi2YBeMDZdCZ1Kk5c5dq2USUgCdP",
  "key15": "28PAeuFfKRc9t1AuqSAAoBj9dE9F7JdABDiqanZrUkwfRMGAW1BxhQPK7vRznfYZnbxzkDZbGsNZoe4C8PjqbWAe",
  "key16": "3SJRystMWTiob2ALokKiz8Wr1gerPpT6SXRKKHW7BG7tSWabAgo3gSUidN5mfDeC9UsoJFGurvDUnew4igydkwxK",
  "key17": "5371p2dxn3JDuPNe5s24NRVjaZZPQKtzwGhcg81E4C3QaHji4CdbMtJVe1nSS92xCGKR3N8XdrFXGzjsqEQ36FFT",
  "key18": "2noLifGhAKSjzZbeDXagvRbsLGqeC6wUNqXaXgy8AVszGNuBvxPQyk4SEXuoLLW5E2HPdksmx7P68VuzRHfEdzNC",
  "key19": "oSHjaFnwDbEdmPMCvfLp99df3QtoghJT3cnDiDXaJnyk6jLFLKpgHLocREpxNCpshFh7Uo7kVH69mokSWahg23Y",
  "key20": "3GZWKk42oHydVnRK4Rk2RaLoXwBQUhrU97VmhoqRRQqG4CEeELyfZCS6CWEuhcxBDaXTyUEnN2M4SP2eUJEyF45m",
  "key21": "5MCbgH76RjhYgwhkR577hhZ3JLFtzC1799d8mSGxB53QcV16Md9yPBwZhPtZP5RxNdd6q37GUZnawiSN2PsXfDEN",
  "key22": "HeCfajQ4TtRzdjgy3AZ4jKCcRs6LVeJ1Y7pbrHfhUWnttewr9PZ4zMaebGNZ2W4CUJxHRx9UySBL8Ypve5VTTfL",
  "key23": "4SYZbAubWZMESo2iG2AkWJ5DXxMbXUWJw6tJ2E6YJu59pKhnBJCaZAEeFiBcAPxi5dsfPrHiBKMzj3SXG3kg45eQ",
  "key24": "4QywGeVjpguPke8mQkiD6RjMKdBhFkhv63sS2cHHEpZHhiBDwQntoh7kjRbxCi6Nfbw6UpHjTdCAQPBFrYoGSBSZ",
  "key25": "5GeusU2ztyqoFy2RQSomrjkiM5CpSNtZotBiyDyTCE5mwku8bFWAthV3zz53zLRC33gP6deegb3THEaJsvAbmqoy",
  "key26": "5vevW8ttrmkNbHP4etBHJubhfnf2SN42mbEHRY8wF5Tzf12s8nnbLy8zUwdKZwj8VSVKFL1AruJQxwcvaAnQKhZo",
  "key27": "3NPmeJjYJ7fZiZkS6F6Rm78nVHYxeU1nvvrK5pqVDoLXRmc6XjwbSdSYoPVbytXv6rZQq2p66hc2AJYXcx5BY3jq",
  "key28": "2xRhb499dNaGGiuVm1h895tKest9bhCzaMRm1Sd5rT3Md52uFtec4U6SeMFxR4Wt8u4Z26GCtZtMCR32QP9rZExB",
  "key29": "RDKaeLwcoEJ5dPoSXDETmYaCefGrXmqb5tosnoxkC7RSrScG15Zeof2FM6XWs52qRiFJPLTnkdz7c8TrwmPr6MQ",
  "key30": "4saQHKGRWcbgBV5B3nFvASk3ZgS7nmjLNssvwPU9CDeZ7XPpquRKFyqUtAbKmKiicJ53JTxHUnUsct9znJLYsVt8",
  "key31": "39acTRWxthNASHiS1Tncq2QKwmsWM1tonTSyN53YaUdyy1gwbSfo9v1zRN3aF1y2gDnPMScJGFL1M6zoMjPpoqQx",
  "key32": "5wMLSFq2JbpDkMriMxJgm3Qm7soygHfx86ko7bJC89GurFexvhSPntHDbqxdcPMnrvzFVZAaQXEnN1X124mSkGWF",
  "key33": "27SKn6jVsmUkf9mzRbRAZQLN2vDFfXtBvmU63jrPxCczNf2d9tKv3szbJfnffq5BpJUnmouneinUTsXxA6UShDmC",
  "key34": "5yQ5n8HMaK8w56NRCNDR93dLh8ZAWfjovMSG98EfswLtpiQcHPpdLYyJmZrxwSsTMEzjw8s1KTujsbHkjdCMnfqc",
  "key35": "3LZH1wAJesVR25cc5PExAKDxkAQ9ZXjfHTyVAhTKduXiBrVNY7MkC1o67wNsm1Xu6ai1h6adDDnAg2bB9Zo3pAPm",
  "key36": "5C2bpXn8d97Tm6gdifqnrtF3tk2evRd7epGin3qyYk28B2ZhqL5cRJ2rhgwgSNDCLFNs7j45qbG4oTD7RMmLhpHr",
  "key37": "2V57BsyfQz7Dp5kPJfFziui1vBckZG4UCntX21kokUH6sAgoCp5P3Y7eYr2wc7sWxX8yLittv34WWcVUzRrXPCtw",
  "key38": "3oyJ15syJ4AyDriG82cyiMmXJ3fdUjXukcjmRNtQnXgU7K58WTnvZLW4CAhEZZfPkXS6eKNAM4teuf7oS9wrK9tq",
  "key39": "2Vrk1oUgDSohNQxok9usuYuyyqzqaavePeb2HeLn7pzGTmZHzESvsEUAzxSYFDFaxYM88HYWJ7G31TKWdELHfR63",
  "key40": "Lihd99YY7D4UfvF3BR5pywpWz5h5AqMkBnH6BxSzJ6v8zuzHeQYXhz3saTpm2d4SP5uYUQHxUEWY4Wiwf3i1HyY"
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
