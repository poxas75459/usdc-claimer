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
    "oT5zsudCx2eMfCDwxteLGdZcvrJ5UKe6ALMvVhbCpf4d56qHbZk4xmkHHPe1oVp4sM764ko6egCfws1ogJBkt5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dyCEHs7u1PdNa4X4QesnPCbehcuhVJtehe3PPxLmivmXT7vzE1mKWyDLks9phD73Aq3sNoTPpVpQ1QT741sdiJF",
  "key1": "Tdj4cnodBmZDK9zBpmAyJrk8Z1rP4DtF7q4Sidg5rPwUeArLuqHT45qbKuYvGHkXmECPSsV3Jv8irDP1ftnHc5G",
  "key2": "4EKuhtaZZzpYievrMMgdtPksWN3RNvTe7eUszVz28K6onj2ZP9dXPTzJbRpQSdo1ZUCJ5WbZt7fseKPLRT3Lhf7m",
  "key3": "2f8STzCom1QeobYWwkkN7ipwryxZNrLVEBG7i4ZzMVuugPSGrns288BoQfGPypyL5B4TfNQTUaWRpvAahtgwAded",
  "key4": "2JXafpwaUDRXDvqWqrjN961pNdVKKJyx6X48LmUrYqh6HwFRquZsbEgL5tC4nw92o4TVowweD5FJrnWQfBTbGc44",
  "key5": "2irnqTngdjLfS4m96zbCEx5FAXJXESyyQqQCvtCeycQ3FLbBxaMmh7BLjtNiWYT8AwHG3nu2MJCr4eqS6QrRBbxs",
  "key6": "5u6q7WgR7Y15vMYMvsh65rV7wDiNskmdEhtxs1YPQKimuhwseu7g9F16sir3B25kUp1faTjNYJq8UuLEAVsmfWRt",
  "key7": "TMZZvTnnB3A7GieJg7Vrdr3SoYtr2bkru3fvJ8J8uevAEZjZSjkcXJatMB6mCRCQZoW7tjYKwLsU9PXUpKXRnGf",
  "key8": "2ghnvdbtam7ocCCh6Qq23BDBndr7Jbo2L8sukFExZgiYyxmoWmqc7qboGQ6uepFyHELR1gCtkLRHYeh7vUE4Eqz6",
  "key9": "2GzZWRMpZSzCgPqhg4viX5anNY5816b6hvJyTA18a4HoCgMpSc5SojpfjHWWvxXzrGdZfvkBj3FxFBYEmq6rPdY1",
  "key10": "47HZz4JdxXjt4Vc2LHDSVwLAk5qHrtBss6hPstzW7W9ZmvunpyKcNUDkdJ8dKmh1Emv94px6Y9hKwHWtZ1DZun39",
  "key11": "5n63kpD8bn64CmCQxjQcFKQTJcAq3N7imz48c9QysriQH855xuRMxTuZSVDM8BBVjptKLgFmsLCZ4GqTwWzcizjM",
  "key12": "J9x7dSu9WtCJAFVrHvxh22ejQJ7tDtf3GxM1JzxtyEWvjKsdEYwjuDW3s1tMvKHAVgiPjMj1KEcngs9s88QPoit",
  "key13": "weLD48D1gncKSX3zdHFhbEo8DKobvEFehu3KQzh1JVNugBWnutbRM6rvftghUMq1y2DV9RJ2D54BZy7DEdfcFPs",
  "key14": "4ruccHPEntiVCg3TmCu4DcecjYJkD6uidYcfhADK3obfMbQXMULCs5x63MWQQbS52AmXJbhGjnZr1WjcoDo3rm2H",
  "key15": "m3NZsFYJPSfwDnZAN48XU6H3ysFzHwrrqZE2eqgt1cYQGTa5EMQbEw5QCi6QHt5R2jHUi4Xb3rEgZ26BrVehXQ3",
  "key16": "2hJXNXcMvtV3PbxepqLCbaf5oVCEiK26pZkfgP8SfMvyik6ShWzdyBNyfdATZ3wJJdjGFz5PhDbqigLH2AQXZ8vB",
  "key17": "5BBsPzGwoUygH8vuRitP7MLuENTR27ShVXiQhft284JYAdTnujQFaJuBsEpuL6Tgn5pHCdwepY1CWV4LqdsdwojM",
  "key18": "4ZeQxtj2KbJx5oBd3NcPpZFairhoyQSNKftbCiL6JxkwTVcwGSvdF3qqVZyLL2fuf53W7erT1qofBfozzjsw7xS2",
  "key19": "2ekyN95LuQ9AsVZ9t1VoCWouSw6LYa8rNVs2zNfZGtU8DAT2NxkKxuUK63jgeXaWK218GA2sBT4qf3YJufCFJxQr",
  "key20": "2wap4z345tdd9ENAM9PZ5vC5drv1jaS859VDKuhK7hWGdYSxK8ovXx98BAtSUMfbCE31tfVMKnt1X4gSQ9TfjYQu",
  "key21": "3pBqrbvV5MbfvegsdpKi2u9pA7dnQCRCuodjDiwn3zp6vaxBPV9Ppc95kzxZ4jcrNPyfk9bYH8wacPgNLZD3vkMk",
  "key22": "4nWJUzsxaJKYWjUCxBamT3GKLX7qXRPDmUhNYs8kBLQdjWoVNDeucLVqYyrz3ab4cNWoqcmBXMJazDk33XS6VuJw",
  "key23": "4fqMwnmTUKv6oFTfdkAcmPfChDZvKEbDkSMWSTJD5LhDndfG7mXLnLB6sDpBtmsQD7mPhqQ8XtcVyVpYAj3uq8nd",
  "key24": "42sKc1cTSr5h3Zqbdz4A7fRGzQ1kAvmHRmNriwQmPqC7H1LpGFgf3GKvQ6JSZXL931TwFfwJmMywrxmdGbbU6f2K",
  "key25": "2mDD1y6ubU66z3LCiHtCFUfvQ7Luc4pdg9H8umafLu1JXBqyXqLkits7DHPjL7Z7QoqQh7CsLpCDRYKuaf2LhSe2",
  "key26": "2Xtc1ETWZAxGXW5rFNurN8payXABEHivnytXxGNAEQmddGjnkou2NpczR7WdLhVKRx96zacQSzhun8GgDTJkB2K2",
  "key27": "2e2WuL5hqrYcZe5B35uiGipxAn5qKykdzGaHi8rHJU4a3B7owfmEcGyDsKfQ3xHLvwFXGshpgiMAxe3L8on4d5Wm",
  "key28": "4G4fthmeq51fuJCXFiDbUsc1aRfVS7kC8r4Um9T7EZjargfxfQ65Z3vWMXmbw2DTdNjaRMVDwhFMFHBunn3DMVAN",
  "key29": "5PEZV6DKMMXsnip1RbyLgwoHroSPyVRE1anGiL97Eg9bq1kxWToPxf4geBmzkruSGMVzcwJgssjPs2wDbXsGdYJy",
  "key30": "43sp7wCYhER7n9xeYKbRBRpL51ZN4v1mjRFi4H9iP7ybmbzggaTTAbVuNJmuqCYj8Q8TzcJYCKUWuJVx7SWRtaj6",
  "key31": "4phCRrGHoNoGBUPQEbnVbLmQJ3LUhxemkJJDyXahNQFkX2yAJ2UySK6UVQXFVbUTDXFYP55s7n5XAmtSdFZvX6rQ",
  "key32": "4ThjvSnUxcc27rA4zEk3gcwiftdnFr1n711xoQ8HPqSGc9HDyQqifw5JPR3qWPnnQkKUesjEQejL91KVc2V29x3p",
  "key33": "2xVYneJmMLU8aoC8J8ykxAGLyvegxkcXfnx6XcZtoa3WRDyosHZ5i6ffi7TNRESNXUpXiobs8QcGHqRdcpWxV8sF",
  "key34": "5MPqiDjpuvN22zaYc2zFvg6mYgXQmDHPVxf5PBo7kySQhCWyFLCWN9DeAA4tuNPWT1iyyKwLn38fXEsuscweLKW1",
  "key35": "3cvRchUmCAVAG82Ew6NBuRM1FYvMPBtHbwwXyeTc4Aojwydu52ajx4yiJJGBe2kHz4MgFX3D76jPsEo1YEmR86V7",
  "key36": "2pyXSEHPo57nzjiTw78JWSumJcTYYJ1LWYk9GtZ2okr3wnCUxXurPC3889V9qUN7iXta928DBEBQm5ZvGBTFKfmo",
  "key37": "4WLfPXSCYvVs7YuD5u4KrQwSatq2ZZUNB4MYcVbvWS6yQjUmg8Ya6oas93L4EbFjQ44xHCdpGdTg9Vtbso4qG4fZ"
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
