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
    "2UsrgfjeH1hPPJwLKHEWNnhxVPFRWafPhGr9FVdT3qiBehi8RUyrdajMLsE73pjRtkFg2PTGfPDeTtzCzB1aKS9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GMU25cGUeuqnJUSvyJu2nRps9e9xqe86ZhQn5KovBiKC81ft2M1NUsN6ZBwLLP4yJNdxCrpiwJZcLcA66hY2NHs",
  "key1": "2gLfvext7LXmce4BNLeiN4ESZLwkxx8UXDXiYxHZ3599pAANUue52W3pW1MuwYCkALkvrPFoppEQGHpan6Fp8PyN",
  "key2": "4w2QVYX1LudVhEEV5MWjbXKyBFUwNLibTV1nBaJYdX1Wdc7ADByCcEs35oL1i75MGUuxHrV3FohXBWs4aaM3rowZ",
  "key3": "d2MDWftjCqrZaci2pEQXZxDWuBCrhQHyuQsmEZyU8jp7jCaxFRfhDTu5jwyYUNNMfuxKU23rfvqEP3anYN5kV9J",
  "key4": "BVYfzeuqvVJidznPKdwNMvZz5HYrMDNRo5dgYWu2cob7onufXMABcUiMP5gMc5VbRBh8EKntNSKh9Svx3a1EbCZ",
  "key5": "369mBVV9SbERWcFhovCEyNWuztapc3BBpyAMTDpYyT7V3wf8Sh4AqepQYvMK7DPwPtt5JxZa44JzFXv7sULGk72p",
  "key6": "2SkWFZ9ZQbJ9WngaMC97fvFuwKTr4NuuoVam27DPxhLzDLhoFDa9hvBc278473nLPLeSF2Gwv2vf4y9AhhU6hmUv",
  "key7": "4qVRqKv3ozw16ueKN12SCi6tunDCZ9eTgjFVomVyzB4syNL6XFKNeLkC9nfYNevSxR2g1gWGrSW3mPzs8HRj81a7",
  "key8": "2gWKcmVM9TBdAjAHuPH57nLimPde2uxRqmfEoWBRrgaw2X7uGJ5ET9ySTQfVf9VHvSWdAkZiUe2Yf8zuaSi2M8Jy",
  "key9": "4F8W9kvHZEKc9GSeojxiBLfpcLG24pqXnmBXKWxgUtz4N8L3AEa4fiJhMJQcUkDZtyPdmFhviW6AjnRDTjcnKvKy",
  "key10": "3PGAU3Qe35vWLWeRszy9Ca8nCiuf11m6nGsPWmqKicEZNVfg19w3deJE24XZi3f1WFPasaLdvNdr1QdVdatqGZah",
  "key11": "3L7JyHCeVqpMphEnxCa1HhP5Wyp9QMx77uUMfYijq4gnCqzhLqcbQWFCEHJ8aCuYEAGxBJ4FkGqybNUJwnP1ypvi",
  "key12": "2RXyn5xsftUcKBMFdACYaupsbAeQAd2JmqPn199ENGiHY7WSYhr6NYtcBPWsQXaX4dkdQ8mbbCehYLGMExhpyKiG",
  "key13": "4Hdo5hYjoWM53PqJyRwGC1VEDEXz6htPD3n9KjoCkNGH8wQ61tEjpVGLkFi4Qa6NcAnAwxMSXMztDe9bZh5p2iyr",
  "key14": "2sptNnF8emmtuwmgUziv2zqKuX7L3WEeigzTJFU4sgk69MXrgeJH8wAkUccvDH96Cp69T6iNt1DCmTmYXjTjG9Yw",
  "key15": "3z7T2rEMRHEV7qbevHjrbGPFUje3yC2Gr5nGHbFQLqhf4WuAMQxNc5Wg5kFti38RisrvLZEumgPC9duZGRqGoeYJ",
  "key16": "24b9NZP72MqUUSS1W7VcwNwufeqhsc2ta8MeVNtqtznG5mCFzWCLizZftNUDeLFjrD1oMsYrcATAn5ittgqq5Xce",
  "key17": "2kNinZfYS1s8PS1ZsbR3pg2RATuaa41TgWGKCD6ZicpMdHymCW2tfGwz2oLWL6iPuQCmYNYiRNvPsX6cbfwQeM1A",
  "key18": "5iqJf9iTWZkLDBWQs4s4SYb7S4ekamLxzKoC2xSz5uNK7Wd3LQ47iHejaQK4XJZ5fq6JyhWgbNvMDFnCQbRJcWrP",
  "key19": "4Y9FpFkXEZTPw1C1q53UGCs5FfGbZnD2maNCEDWdc1htd3YPZLBcxMbKLowhxC1T59BbWRvgZx7zEH4DcScw7kEk",
  "key20": "a2kYdGz2PyvA3yXBpz1wHHFNdJtjSkN48YamyiiT4gGushpWyXr5bt4nR27goyZtVTdY1jD19rMNoLh2TfE5tCP",
  "key21": "3FzwUev3CkR5xSGxR13pMYYMadQMLvPn8Yq2ReRsqBdhvMQgC68qDChggYfsYarJiahPAvThSTZ4eyZZ9zDrvmDz",
  "key22": "5LXE9FHrV1a2RxcowYryAKrbfuwVqRfri1jokWaQueEP67Xm6hYtrkCR9e5VMQzb3Erm7Q4tsKv9XTo9bCk2TcBr",
  "key23": "3AgRwEzymiJ7GcQfijz6AcDQfH23Zoy3GJ1WQKV3jpzLNWhMCkyT89pJXQtGvkEMf896sSMuPdv79zRZavzVk52A",
  "key24": "5MZ7BMJRJCbjPGjmqeYxVSNzAxCcHUuwwCJPvAbUYEY4S1VMzdGWRkUDxuiceFLxCE63a1J91LPceqBDastAGM5A"
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
