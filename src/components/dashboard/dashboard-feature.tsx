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
    "3GDAEqVqYFpTwejeQKsSiurNvAuPRLsv6DkxivMTwtcu2GYdGAqVozHCJ6SFkQ2B3xKrMDEUcPyq7NHG4mqyxwfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GFimYkT9XjjAR2f1KobpSPmh6oroTfCmeomSAxHZS5meyxJ5CCS7HpUmufVypxz1wFMAgBXR6wFz5s84DGsSw1X",
  "key1": "4huC32PzZCex9PdFcktpafeKZefUChjoPm7ExssyaCVFepgcKrFAsRDRT9wi1yCBjinaKZ9pgtPbsZoJrJdvueZ6",
  "key2": "5gA1cDyJJtmuzyymvpwaCq3ZaZL7yeVpxyCxC8mHrEcv9kPMbH6joXH9Q9DanabCj2dPtMuzpdRpvcXkVKmxvAj5",
  "key3": "5uAb4TMwCUUXDBWD3Zi7jjzdU1GdPd4iDbB9FFxpBKvbxmyZucdqvzdsYmLjdoKQdBkb7zAiNbshy9jay7gmHHBo",
  "key4": "277UKtsWJKoV3Wvjt7bN2kfYfjrf6Z1efVVVoGJ6bmFJep1DWg2XyYREmbjAgc71JZMTnxnw8RUvZCwqwikGkDCM",
  "key5": "4qtx9Bf5it6dSd2ykuEpmyM7K1ncQpXhwZwunBg5aiMRhzsaNPvk5rkcC1V2QAZZPejm7LtkizzHJPKhFvw65REG",
  "key6": "3cK9jqsHt1KGrAxQnNxrqSC5JXpPwH9dP6zAxJC6PBpJVnufhUGrCxU2Lpup5pGgpfFZ5MU136ovUiLV4PdebKs5",
  "key7": "3tRBAsjrX77gVSYxejkYc4p1TFB8NP1HXSquti5s4etKrtAfJoM8u7NvX6ib7JWhDWvVzwsjRDwDc52gGfku8Uoj",
  "key8": "CTFqr5sWtKDbW4bZ1LDJaNenZsanc62GhN5vgh7Bv9rE61PZ9d7rM7fW1HuAD2b8SwLbudkELUJhhfb55V6ZW1e",
  "key9": "3Cj4E5f4uFRp1uzahbYjy6ojsH86bCkCmTdmmeWCtYTDnGGK78SwjuVWeLaFHVurCDm9NFc4ZmEqw6PSABPCHMzG",
  "key10": "imqUgPqH1A2NWxc3Rr1J2nCGBrs35qsCd4SJUPQpLruBMbNqSb1E2pUd612ZMjH3CX7NLm3SLsAZch1Ee7grQ7Z",
  "key11": "3iC4VxYeycXNBBs1xcx2HaHRDvYVjeqSVuXLvYhzT8cGKbsEED9SpPGTEuWsHZZmfH8m95PhHPWVRXTsk2MZ7hzK",
  "key12": "4i2bQYDze4AMiTU3fiscrp7GSEK8QezBBBjSJfdTyBoLiwYQQGrrd73vSoipxjjUAETgFgPkSc2eDQch2hq6kzQp",
  "key13": "4QCA37D8fAGdESRugvmNLzmQJZHKcSfj9kD2xEDuQCVNriqqoc4Rzz7ZMmVNzCRHKoa11cyfAkPAsmsciYgVdGZW",
  "key14": "5BLxWezZwm5GkS7dFz5Kkcqmsnz5kg1kMMdVRwB28bUkXVQXMtdePEcpH7XTpfEpuJ8qRo8Qk4XqY88NKjPHKFjK",
  "key15": "4TR7muHZYZo5GstP1rWHms2RTD1Aw4D4fofnAgNcDUP64s6dYWyxHWfMGxFxCrbLHMxK3F4LvCtHAe11S9xoP6yT",
  "key16": "2shvupBte5k1LwwN7FddxndotRXQxqyRmcSZhgGNJKbB1AN7zeR6mCL5DauRBHSzKt3WdnZRnG53BTdPi3qfCvnm",
  "key17": "4VtJuQeoRgo23mExHAcnGK2qK1NZMnRGBYNvoyrfxxP8hQb6ukWsfok6jxzyYSEJ7bDxu6uQeFYocQR4dZyywa1X",
  "key18": "SqFQ7V7d9gPiiJi3f34fwFUXHgwnYyuxqGvFsrAKHVUMRWoHMMXMC5EFdSoFiS9uCSNDJU27jcvid1Hgt4dmaeS",
  "key19": "3HtyoiAiJYJuWj7ErE9qJ1U4CSUUhYaT3eTYUEaUpGu6cfdsbCfuaZJcREKh4BND9156YjhUXAY8QJzy4vEoLCYo",
  "key20": "2uHey2bpqgU1rmmUush2kbFV49cfxXSB6nLdMhKTV7uqEyihwyjRQEUnt1kUFWs5s8qzegUEjMbdgTaPqznzCoS7",
  "key21": "59hXHEK5gFBvngehzDHCYpjxVS8XgGEYm2EukWmkNvkESwnw3yFK64GmmFgP8BMuJS54ihaNuMvdL8o63rcMwb5o",
  "key22": "2a4Bj9ciDQvaNmjxA3zHJzAjgBnNqpmruHYCRBP2gnaZhMPHSL7UHcf5YoeqGJ3RUB5ymXHw7UaWutWUmQcnCSJ3",
  "key23": "3A4CBxWL19bhjWJsoEouPQ1h39R9hoeCp9wweKWNTz12hETg8vt58NokNBrrPvwPPiMjnVuuYe5ZtzXRUU6qBWxu",
  "key24": "2ro1TSo9PcarNnyW98yCskNAFkZpcJ2zbwVXvPv3T2c44qxHQ8j8ZDW2V8yyyqxEKrzUcLGSLRybCnsvjF4ju1Ao",
  "key25": "3cM2MdNYwFF81vhVaSReoNaUKNer4Yz5VMsXrtKcVgDao9wuHHW7n37peds4pAb5Yj5pxzXpVvW1cezUbGuDtKqi"
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
