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
    "2FY6MLgBezRBctbAD34iYShN2s7BZc3S4n7JfM4YNEKRe4t5G75S5dWpzSNJrXycFoZhznhhqRytgzyDbPvuwjRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YSpKetPDr9PYqfmVeu9chNVLNRY2VMHyJfo4YYEdgu6HrcA4TNJHCKUyEHz4eQ3hjaTKNapkmTcmegU4hmPX3if",
  "key1": "v4yYsxCg75mQJ9t4YN66SFNLHUf3gg8iFoA96qXRFA5TEjVLMkwUazYUR2hFvSfgpLqiUiyfFLJZp2TZ7PT2HRY",
  "key2": "51F1Ni8jmdsB4hL9A7zVSDDQvM3RcCK1gKjJQkyimB9dzCTgxC4o5e81AnuBbPjy9thxstLr4D2L5hbHEVHkEgV8",
  "key3": "4Mg6uZgGQYKHeeNx1onY5pbtucHrmeCN3FZKbCB4Rm5sMpzPQDErQDkjdgPwCQzetzJZ45pQqwgmw4ie6boV7acN",
  "key4": "sqMtXwL2DXed1gMD4zN4aF6KXLW5Sopd64RknMoEGh2fXjcYsjcgvScYgkPPod3Yi9RGqEizTLjJrtxkBxxheQz",
  "key5": "2LBhH2DHviTzJHyXRy9FfTbSKvtxcpLJjKcCyiBnS4PvisNBhg9ng7z75iTKk7dQogsfueyVhfF1Mfwe4aWHRpvd",
  "key6": "2f5mW2iBCQZZTAZXBQoddFQ8er5Q1xbqibKDdyydpg4PVKQH6dtr8FbdoTnQoERdibVmTfyDRBfmvt2Zzaz4hrCa",
  "key7": "4zJfNdyaQEqkJTZCcjQzFNHdLkbhXLnEt1AVnqQPvJFJRUsSnV8YGfibvzRHW3sUyuJFKEK3fq3kQsCwMBi3YNci",
  "key8": "5wuCYAL9BHTp6AMrFV62cSMgvutrwfttYJdEDvNgWLuwbd9xLoSNpjTkTXu4ywvVw1rki3dZFEPCeNxJafKujV3V",
  "key9": "2bRSSoELLGWmtiCddDYuW8Wvjo6SU3GcMVRMhjinquVMBotNGV4A2paxXX3TymyCKu5dh8dgUQC9BkSLGwWF67Hq",
  "key10": "64ow67xfo6GKKTs166NtGuwKemMGQKX1rCPwfnfKSAngzrbuu7MwozvQfUFMmadyJ3xj1PHw2w8zh1KwsGMn2WqU",
  "key11": "G6AUgjdKaC9JhRnC4EBzwUg8BfhMRkG51T816rw1sdqvTRNzixmMZmjCZHw4JC7xAs73dspUwiMZM9b7uyu66dw",
  "key12": "424DiDXy8rdHicMKr5vYr6nBXUUyiJDojPhi6hCWB49sZF5b62gP7zRXC69w66VgPNFeT3vMEFo1U2PmSe6LnAQy",
  "key13": "4Dv9nCxxxnNKrrzxsxWC74syrSeTYXte6dsoXZ7FYLhSHteEoLVWZ9Asakha8Y7Ymxc22aPXB8tthaMKbenvmHnX",
  "key14": "66Stm5hpUf9LA7TvfBpsjne7C3z6QH4yZG7ALwZBEJNbiADo84RES9BtnXArS8BUyMpeGnepXF12pLf3tVeQaY6M",
  "key15": "2qmEKvgei5Nc6jBRvJHStk3t6akqePDn2q2TznpvQ7H1i9AMXpFgmoDAwvweDGQB7cJAHg81fDnLVbMivjP7V2B6",
  "key16": "65whReybTcjjLND4ZYzvWx9QoGYo8N8mAFZJhdkeNLL357kVbYhzjvWPDLxJSrXH8fNyyNgVZM2ihJGr1SditVbd",
  "key17": "4qfSb2YBQpFqRBmxq8mPoHoXwz16Xt3RU3Qf2LvxoBqMhejzc7Zh5pvNHrmjMpcNUuVLST4ZjQX3gygiJLeyNw1g",
  "key18": "5K2RrhypEH83WXhpwv4NS26gBbvYe7JvHaD17nvito1o61K2U9SqjMfVqBDqZjqQVWqNVkSPzLkh8Vcmyfcr3RrQ",
  "key19": "i86LBpwxhwKLLaLKkupXGktDhqS6KSwzpJoBgYqemmCytBtvU3zoy9j8ccoXkPyGxYRFRsuJY5igSUTHgRSwK2L",
  "key20": "5P6CT8nYDbfbzHiUUN6fZVEb3TU3wBEm28zruPaRagtBLpY8MYD9PrP1oFyfiGipDrqxedB6t7xJgANyTtpjZ7zs",
  "key21": "4dqZkJixi22tsJNZiRiKj9eAwV5doHDZC9pN5JvgykhU8keuoQYJfPGAcWsG9k1ECQaunVJZ2jo1BFtMoCVcXMLG",
  "key22": "2qWVCcPZH6y7QFjmZCz4GhEyoJpXjZAsTS1RjHBdNU1VTk6TEfSKRLmQD9TxoxCYwmQjZ8H8Q96Ujbmi4MmzE1zy",
  "key23": "3R1UvDbRyat4avxmbqC4e3fMZfDEDJqUTm4XjdZFFRAe6kLsxCJFRMWbkisMeFPCFdCaXdfEbVGb2Ue8YCehhAkZ",
  "key24": "4TfyfGGZoUan6T1Eje6u3Y9XBFHKXJ6pQsdmJMEd9vVCac4dLfzCbMYREaT9QDZtkaK1bi1VTqje9gnbkSPNTCA6",
  "key25": "3juhMaaBze22wmNm5DTAwP3MXxzxpua6f4hpvHubHN6nApAkH1cVzUn26DAaB7BMp6wScMxpjcyMGbGPC2akTSH3",
  "key26": "4pkQMWumPPuMEfekexVYtdiA3pKvgfifDmVS6Au65n1QZpZcsH8ZeMp5Pi9MrA8xEqzcEnS19qmJcrpZ6tQiWGZy",
  "key27": "aT2dth8KLozyhNfT6wFa99VB8dZy1gEZd6fa3d48kiB2T1vLntjU75uJfCXZje9tjfMzL1hRk8HyRagGW2AS7gD",
  "key28": "2S2d1V6LmQdtNLJyyfTayNrghJAd5W5fmEN1bH52RPJA8xrxZ3may8NPTehvMBiXfZvB1ZnGbpXDAvHL3fZUa1vv",
  "key29": "2evt4hVqeEf12XpdWdgiv5XvbGKob4B549Ykn1kKz9W5WJQa2CHepghavpHbNtiTeRY5HSzJbs461c6jkDw1Nrod"
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
