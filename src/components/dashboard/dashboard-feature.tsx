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
    "4inU6xRbucEosb3zuSoJt9mhucRZt1aDnn2SSHXebhy6q8tZoXUfQVL4idMDJgrCuxRku3KEWgE4iMPs3RtqDbA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TdzbZaxBTwTRcppANV3J3ePK97NeTStAsQFA4nhJLcAfcJFrJBhArD1kyPND7LiFMTsSYW38fmw66QnnQgq1Kjz",
  "key1": "7VrBGuLofDWEYufxfS4hSWDKFHfMWAgcTjFhmBWYKjpYswpNAKbaFyWAwp6Kw5D5w9xerbVYfaDryJnoCgWf1DQ",
  "key2": "5yWsTSiYLjuhsEZ6nvWFHSHtZ6T2jVFYHbTBEsWcnGRd9NxyvKVyS6iCBKjMvgvE6qfNgf1e5vExY7Abr4Hvk2FS",
  "key3": "4f5C3wF52XzoJBAcmZA8Mg4q7AH2TJKAALATVrbiAiEhtgbT5MwSc3Lf9zZNPJS6W2x6vyJJuih5pYHunfntk6Tk",
  "key4": "3z4UAPxRuYn46dAoknhLLzwnkfT5nYeJWEzPfGyKRq9GYf4Rj9zKhgdP9HQyEYwSMoYFYD7qG2tWAcwG55VmV4xH",
  "key5": "5sFJjwRw4sQHeMZ2EvQr4jwgM1b3w5QBVo3WGixwuAFmR3wCjvekh9gZsmLh2AQrfLs2pFUDJrzmDkDH1YMNPqzm",
  "key6": "3j3n82g1EHLsAyAkP8Vux9NiLQeM2oCsCfsszarmkj5y2B5xUVNbZWk2jdNBo9nmEJbZX6rtTNp37D25pod5PMRT",
  "key7": "28h5PMQMQcatzUFWrQuhqrYCpcW2x2RHsyX2Egmf5DJ47mn4iH1pCZeP4JSHCFa48mJpWVeo4Ux8vSrRV3CSket2",
  "key8": "3triHZUyQ58zQ6yNQKp88BN3KAZGreiU3b38m6mEQTr7koWYDfUArNcvVDzKk6JJn9FsRB36nUAo16rCCmkkDebG",
  "key9": "EfBSxPpKBzyk1KXVTcso6PSM9mbYbsnWFBYoQwUMR1HDY75WM7ksRNc9cMEkfYWThaVc9hmG53SptQUSFSBc2H7",
  "key10": "61w3r2nsFGhEVNRcioQqrJKhJCoNka6hGiCKLNuE4bzHPfxcZC3FPdMozMhQuPTqECMb6sSpw7EcvpGRdAvUvtiu",
  "key11": "2GKaMx3GpwZXLnKbDMZ3gjAhHJNB2d6ef7yTgD3rAN5CivxW43KTx8NDDpn3PkgvtuEFRLA7VdbMRfdKVTc2DZaB",
  "key12": "2NrYFR38kC6VdjeZykdAaZnN3EFXyeBPd1goC127eS7rHrLvSXPMxszKiJxyhtW2Pgt4Mweqp1GKTGTp5c4jzp8v",
  "key13": "wRWRUMCpa6F8oUAUVAFs8P4ZzctnAzhRsks4tgpSnHHWxcL5suhrme1ojrmQHJxg9D4J8i4P1LneLtgqGuxEvxq",
  "key14": "4TTqXvhqzbJy5zzrXwiCZMrggSTvFuoBVnEFrVySi7rmXNzNrSGXwWDRoe3N7S2n7XEf73GkVQYTPv9VuvvBKkt",
  "key15": "5kMWLpQwDgxB4rD5Egd8baptqnyrrCS79RQY3go8E2q8KE3zsNSj8YJSm8xosxUY8WhN8Jf9cZTf3exThstq8pCu",
  "key16": "3c79yJ2tzqwe73WVpzg4AagSpFU5kHvwhtDARz5Rnx9F5x6hu7zvKooM3mjfvN8yLTfzzrN1Jw4ZtAjVo3Y6rr4k",
  "key17": "3FBW1fThcAStTFTzDT1Y1PiDaouQkKs9EkXMDSPL4uut3z49mBSxYQDH4oNXzrUncAkEszjQfMSwzRk4oHLUUhrp",
  "key18": "GYgRgx9ErkS64T144fzCE1wNuQuiUMvV1Khfuy9p4nwxhoKsTH82UdLoXmMY7LVQC5RZmS9A6siEb3q69RA87Tm",
  "key19": "5HvVHbaSbixZMt88NENB8gQG5VnAPsFgpnNY76SVPUwiTfyqAhMbKaKYq3qNiuRWKwUpQjeyWuhtMuaTUg9oMA84",
  "key20": "5AF6HCWbNSJbExftLxEYQGjk3pBSrLaGChrGYQbb1UkfYd1TRi6Kcd6diYtNFUbw91f6oqrnmqjNuKyn3E2ZY2Ux",
  "key21": "3drYhjCph7UFhzL14JTM2YkrSsaNzjvQwviahUPqR4EiJ77zp3rCVbo9WaMM6GD4ciKKPEJDjhTPAkKJZsrvjqef",
  "key22": "2Fxi15uFfJfyJwRGvJg2ZfKMcKUX32GAwTDGMjs8HH7HBJpCjL2bEkESu3F5nGEP7yccDLA6gRLgji4RhJzctsVe",
  "key23": "FqG6mWs56g3rBM641agtbJ8nyyZ5d6Xf3ZJJMQRB4y443we3mzzf57ob7RXsSgmnFDUSk8PUxhbFT4EnyHRidRz",
  "key24": "2AwHhx7ciuTpmjro4Yx4QCkZTcptUaJCsx2oMgqcrwXybqo12e65CSYMsG5pcj9Do1MjEw5FrgtKWqpNzxZBShev",
  "key25": "59kUQgWo7KtRYrmkvyt79NZiFFQn4s62m1b3hZKFeTDVVgbN1tTrA3Y61LzNuFcWvyqSiP7g7QL4spASbkiSkukG",
  "key26": "KMS7ttTWCy3dJAhBSo2GtFbjHxwzaAedH7nRn78rir5me8dd6xhkqirecjWynWSJaxwhqatnWr2cAxPFiiUVMfA",
  "key27": "pmfu1sQfnikYr3jzZhW8CNqqSX9bh9Wa1hKuYKieoWM5gFRTCuYmSrHrz7G9uQDFsjaRVSSqRvYBL2rZS5QtG5W",
  "key28": "42ungxHYE89BffTVGVndHZBmspLE8FroG3qrEkFyf8WRLrAHMmA7b7GAXmxhAkHce3h6APvuQAMmwGLhb13Z7Tik",
  "key29": "42sVMX3v2NR9dLzArDQfo9qox9uanMX6JmopUZAePuzwhKUisnfStB2w6SKqV2mBAY2Ti7KhV9dEQLsYRMv5uyip",
  "key30": "4AiaA1v7KrSrnK14X5kQKXbFNs3mBGpxnaALXhQK8nmppV8KVqCDmvw882vZRhhLezVdcHQ6L4VqoRhimUYMNGvo",
  "key31": "4fy4be3X6cnr17X1StJTNybq9hoawDHPihi1HtwR74fpJ8JfyZCw5eKbx8GMC8NvVqd9HSHpGefXsTNRYjrjbRai",
  "key32": "3s63ycFn5jbLKC2hoPC6oTmAJ8ZwLnFg8kX7rXFmW5UAQJrUwQmijqmFAyq6W9RwBGFoVE8kkK5aV9zsgsKxE3hy",
  "key33": "KuUZpUAPrDJYjhrz5sWfyL9yzAW7AbmKtKHFyYJLWrCr9Fiz3AzpfWSHSdbtnVXbXJkxyg3SAbS2jt6VsrEM7Tf",
  "key34": "4buxvvtNJHfB2XGQvJCrhkyFsaEC8R42eDzY2zX8HiuhTum7JNwhYD1dETrD6CvfnfvuQbkwnRpD38aDrx4mkbMh",
  "key35": "MSs2cyA7grLWkjJz2YnV4hRGJUTN7MV3VBLms3JHdMwnRaLteWk3Y4ZetHzeGxfPhjFCgujjNyfCbwj4Jx3h3fi",
  "key36": "4Tb7YkQaucigfDWQ3iZC6mHSHiKTGLhLbypw4FWPiDvva6MuKpUxrB5Hrze9X2UoUWNpZkfWW6w9yTBa8dpoDjbw",
  "key37": "kTurNpSXE8tgtUwj4FxkuAkdxKNFLTbLvcC6i3BtSoNX5LzV9jh6E6pgbZ41hC6Pr79U4AojtfDHhJmEfWPzLc6",
  "key38": "56bacpFBZHamoqoRLHmCf74P8ABq2QXm7GZWsUMKvATR3FMfA6V5bcFvAmKgw9ydcVnggbT5C647A232SSEJ4qe4",
  "key39": "4NNBvv37if8gPaf9urqwwt45EXRbDVGkredVtZCkxoq279DuaWTFL5DyWxP8WvMF6zrD21dVssxjPxvEpWwqWZGc",
  "key40": "2E4kG4H6BC7So925jBPrZp3UBGf6gZgXxqVaqdW6cZX78bCCQTCGAk7dvYUZf6CZ5QPjvqAAFqPh6YNyxzepo4gM",
  "key41": "b9e4zXdPm4m8eiskb6evnmz94aBjZgFKiGEhqJjJUKFaShTR566hqYn68ad8G3GRFwQ7RcbbLWerpYajwYx2FBH",
  "key42": "2cXFQS9FmhYTvjPyozmQ2VUieBLEUtoHc8tCPEMdkvafahDZKSUsrJih1jppc8XuHHCE31gjTRcH1Hk5uVtVB2JZ"
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
