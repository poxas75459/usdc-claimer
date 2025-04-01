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
    "4yW31C1mcQAH2prSByvbmv3nXi3m1H7zr2AptEvBaRzqibckVHVZZzAfPiMhNCbuHupoNp1fWjQzqDW3urdffsAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U6oBmGuFqCTGsXcJbbdJxJHVwfJFvcNg76vds5voyWz7KBud6s5XG5nioJqw5qmBNZF8gJXEmPvJsD9FiBFMmzH",
  "key1": "Ug6TBYmwpyJtxFFJney8KLrqBtEx4TTHHZMkFXYUcDkxBt3CAjaJcJRy2x1uUKT1Bef6asH4Q87ActSi5qAMDot",
  "key2": "3Skj1eg2tKc9A6GndbTQSiNf8F8D8Faav4qixga59jwLecNuLTbgT2hFpC6ApwGWXsdC8wuBzqRBEnWFFBwEsN4W",
  "key3": "5wf1mNfdSLkUXAToAS2SbYMEjaepjULWwW9AWpWF5k6hzvwEDFZowr967T3iXUKKJ23akaXss3iFp6BkYU5WmYWH",
  "key4": "3bVuduL7YU1DmcMpU7N13ckyaaQD8gY9XjVaci98PANNEtgK9HML7Jhb7txJMz3k1ahMj5VNvuxtt6XUqbezG8X2",
  "key5": "5MNwkZpdzDoKec9ohqPGBZmVv3PBsuuDpF9yxXMPUBUNvge6rd52MPXrb9x4fWszwboTGM4gFDSXWMtVxdaGeeLe",
  "key6": "2ozXqoeBsNN2gq3j7RK8dtau9X47VjcV3o5RANz4PmrZ5zwndEuirxxiU9pcNQvhvq9VxWAphstjAvckdzYNVHYe",
  "key7": "4eKUDQzZ7WGwi84eCvyDtWZJYx4y9B4rLEXMCsXjBMKKq6oDMezEt8pTa6KLYCiXjg1Es56Z9md4tL4UVbJ6PsWC",
  "key8": "5NoYUkTXVEgaSkbg5kaiFnGaSZuwamej1HunoirY1mZQNVvP2HVJSCK86DS376VDGEKQh7r8HbH6qt8X25Kzxvxy",
  "key9": "CVnqwnTyHYbMWiVr42TRCr5ouNa2ZSQNmT3ftLUfqLWuiUyzAqeMhERrk8qDrYy2iiFFgci7MgBhudQbdtJkQH2",
  "key10": "5iq92gLQXVQczAnjov8VUtymp1wG83ZfRnqnXQtS7C9yDzu37NPrkBoRVEqwNeNneK6TCgw7KeDPWtnBuhe3hvef",
  "key11": "3Uy6BizKFjtXKwYbbpUziNLUb9S8TBFJ3J6CjrYDsd2JHs6G2TBhw31z2yDYY1upVHUY6SuvJMaSachFgbKTmne7",
  "key12": "5XB68z1VnSbkTxPmaiArFsc87R7RH7BGj7cnuS1vFoFPgQvG8kpPWvhqbJNNzqpQUstBCp81bKyifoJFTv8NMNC8",
  "key13": "3YUcBNLf1gX3wBHrpq65chxM4mpqorvxp4ZRun32PHQS4zequXFq9FdVRvxFexT6L4jPJCi2RLC53DeHh1q4KVRA",
  "key14": "VSyiD3BiXWj9WbCdwvFciGsxzryyt1cH7sv9tAdABXXJbeYJRubcuyDs7NETUXnGGv1AVvVZhx8Sv1MxcLaWcGg",
  "key15": "5LetFm57c1pLB5qmRA8Au8K9UBz1B9bzZjCSxP2n1hT7SjoeoDgeLfrxx4oc8SJQ3Kok7YwibKWmz7fAsN7WBPxw",
  "key16": "45iNYZg3Nvf78XJ55nHwjJ2V2UDp2M7wqb1vDiZGeZ9gCdjuudhSVafEavJfd6M7mSBgx82uosBWRn4piG2NHVak",
  "key17": "3XdMcxw4cSJX828ujJQVguQwkPAgiJXstuzFUFepCJsd1sS9fmArfkXFypGBk8Cgf8NYCgEqhAVTWRs5o5KrdDJJ",
  "key18": "47FA5uLUafd4kN5t6XsayicH9Jn1q7emg9rnfonvrr2LMdGrSXDy7EPBgRUMzmA7EVREnsU2hBnqXiYhK92H4a5Z",
  "key19": "386cCCRvDkSHc1REK4DJjUQKMFKBdPyjPCybKUJncNYP2DTLKd4Lctds5S8sTZjcf99rL7ghTq3vAXwrnPTfndc9",
  "key20": "4sMomzFUxacs8Byw4Tfkiz7waWx2BAAsnnuP1At1cKdhmExDKXwfHP7c4fwg9oT5grngtKHNBYAAN5RVvW5eVevQ",
  "key21": "4U8CZcDaMJ3YwQBcFVEvfCNvAbQnExMzunGg4iqxJa3co3g3nViEqGyvrNS1CAgx1fLSVDJtmpN43N638MfxepAd",
  "key22": "g1SCUrxYQX5tuJMbjPGSF9nNWno7rHEoBxQ4ZK8SHq7niYvYLeNWjnXGHzZwidHiCbtA3yDQCHu1EwKnWDzyFHW",
  "key23": "38CjkjQxsEAS2HCR8mt8vt9cfibKjSWqNYUdHH7GQRvMnHJ3dt1t2eXqPzj6zV5yMFi8uUXDEx4RAYBCC4Sc5GG8",
  "key24": "q2LKA1Wb8fLyGuhrHHCqds5gJgTLnvQpegbb3FtFamNawxfCzJETQKQ7TX1GPN2rUcfkHTho5CrTxVvq9SBFDUz",
  "key25": "5nsfWnKNPs7heR8ZBUwxkFhm4sZ7yYETWo6ji3NQw8w4Dd42hLf22pTFMYVjQTkVSsUKuc3176mmuNSnF2H7Y2UC",
  "key26": "2pMBg5jKVYD1Jie8RCgZAEJWiaG3aETdcFX4qyLKeUQBM36Z3r7gbDUiFssJmGW6BRjJeD79YMnJWCmNmFXnWy89",
  "key27": "4k4Sck7hq3hydAEMs7xBFnvX3Aq3ZtMJRhgxcd28PwY7qRkWgsCbBoXpF4Da3ByueN1bka5QeKcAkhF9VYE6MKaP",
  "key28": "2SRHejfNfF9bYsTowimewu43fRN5bX9Stdez7WSzfKoufGuFdGLx4fCkujcodUCBGmJCNHPLfbZN6c7WztGeygoJ",
  "key29": "HkP4yZM6pCngQz2Farq41Ui7CqQxePopUHUcHMts6BeHABR7PFtDF4AY6ypzfy6PJUwQ1VCiqrtZLyuAwHEKnQE",
  "key30": "N9S1YAZYoAUctWeXCseK8sHLGTgwsKDr7utbyCbWx8UEYxkfMia5abW6CRT5RmjTY5mfErP4HppqVMwjjrkCieJ",
  "key31": "672YheVVpmbm7Fvb7GJ6mGdXhiuq7c1Anwe88R6hXDpS3r5mnWrHaLypxV6mrvYVdkxPPRPpYoBVzRaWNTgmCzXY",
  "key32": "4tA7RHSK1eN9B6P9boHKHAqgYLMRZK5DAyMwP94uKEsEoPHwMtzxdnt1vKARbY1ACbrm2yDHV7ASqSa2PQDFejb6",
  "key33": "3QWdfP7xmt4vfNcv5Fgfyt39Q2TncmThzSwGZpCeTYYHmB9wABenuTNs5xCax525p9J2aaYLXL4fUVDYATpNXq4D",
  "key34": "gN4P93wbxt3rFgRKKUG74935AryzaGhLKq3d9XY6HVHeKCGQFx19Sixww3tkqoQvntCCTQzRa9VDx2Z84uTsscu",
  "key35": "3VtNamSXSsoS5KqxbNjXLuhFGgm8uDUF1MYAceuBsdHuBk6kQvcjvnNoHn4GzcCkyRuX5w79XvJjQ7QsRL71b9Fg",
  "key36": "2mpivek7CSSkLd3SRUfQtXjvK993wojJqkTBix2RHL998iFbn3QhYm4qbeqsLEX4E86Ks9xuBtc38k9N51NCduZA",
  "key37": "47eBpXwe4Us8osTzvkAeN3brPGr9DtV5Y63Ez7tZQs6nkp3LWU8bzhDUWbhSEXfH9yeqbfyVqdJ6K5kBGkPucJio",
  "key38": "3a4u9xc3sgze9jVBvVpShZsW8dPCzBaafL2w3Yh46NjwvmWruaDn1tcnyBETMUojHKcQyrhoUv1um1gPrnM3JfVT",
  "key39": "25kcJcsdajSLmbbfUY4tXTHFR7PvyEXX2p6QNqYzg3wJqSLpTkGHwGRxz242gxTLDnpQY5ZFGCR4x9MyhTJRTFqc",
  "key40": "3tLQJuudday9m3ibq1cMmGAXh2Rc5npPohuERoLgSx5bkFkosMKmsfywnb7KMKYnBQgxooW8YVCAhMwG5gYWXtgW",
  "key41": "37QgbLMauiQJQp3hWmPVwKDeAZbv3yvQwSMgjBCs9hUCR54GhnJypU1RgnNYqM3kW2ZDMoMBsRpKD1bV9HPftA2A",
  "key42": "4fBK4BCSTXLGX5vtb99L6UmYAdDg3Voxrbj43bqce5U8psGut13Puytu67zToCCBbf8gFn79XaNuzbrpGnppa2Fj",
  "key43": "3nUW16BvEs9oHKpF8ohxuSoa91Pd8arruV97nyH3JLz1Zed7CsBpKn4e9EVPoRTxvpXvamAW53huGRteoCX12E5p",
  "key44": "z4EvyrGRtWGjiZ67B1cfxdxEXguHCh58HmQnYk6cEy8BhAhki3MCy5qDurjLwfQ5WNq6bEUAGbRbkvqX5Bmk5ph",
  "key45": "66jnVXarf2nB7H9u6kcHyYtb8rGkB3XHJT3wM42g9SVTrnkhQLiRA96xqAPkgbM2ciAdJkvSfQKAauHQZX2YX9nc"
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
