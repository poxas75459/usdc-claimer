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
    "3cJY5HwPSzbDyqiaEQzy4DkrqJUFAT2YonPMtFbTpVguK36oYS972LAmHykVFdW9dpcv9YhLBPQdrha6JuqaNw3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YnWZLxkPNFxCR1hZh2XdfykFtXZxMCJs3o5kPcjk2FhmDXNuZekgFcKrshxi7v22t9A2qDFL26jsmV1kNTuYYPh",
  "key1": "mpX3dMwdvKgH94821H3Qmw9E431fnoQgjr4SJaEu4StNmjw3uZeAU8NPnm917aSdqjnRF7exaqyPZieWj2RZ2JV",
  "key2": "Bty7msc1pRAKDUK2shDLabQZBDjrUgwKcTWxNMXNsmZZJaq5znxFmojJP5jFX3cCpUTkjtiTrd66PXC1y7FUnWo",
  "key3": "re92Ch6mLz4Ed9X5vRihGhQvt87pnLTxFu3hWDTwo2WvaRr2KSwscmvwKMhJuNKGYxvMYWhG8nBsaZhZit8pNEo",
  "key4": "3kF1Y1rHivqiPbtKxcqpCqL2bPyDkSroaAAeqr7Znzncvec5EKCxNHBeS5hnEVhFaZA77YDHCYYR6L1PkqPjrgsH",
  "key5": "2HrhYLPpdrEeqo7SDjsoCRsjKxffXqHTGejM5TmeERjF62DPbnir5RVYSC3dGs6Aen9GeDqTJxwpUXbyFtigBw18",
  "key6": "3wALfUEhDFDuGaEbZ6RigavskthTrnTnKVM2qspc8tETArnVSJz9Kkj1ygPzCdr1nqfamWwrUJfesFyC2QeDUYrr",
  "key7": "2TLgwF78hRAjdFHwkvc11fASR4JDfCVFNKN5KqobdUUhCrYvZ1a4SH63oNsUuBUiVXY2hXo3XqPNfUcuKD6ZhE1e",
  "key8": "okt227ZcSdSMd2bG63P1Yo5cwBQLZtCzfBLUnVyCL7wMTDP6dZ5DJ5njq2umyo1cBURHrbi6eoPNyCAPuupky4h",
  "key9": "5JPQ2spkRDEMHLgfU2VTV4iB4x91D7QF11CbceCDu3ib2Wxj3hS8e3XtPYwsYRaVstKibvz9P3an2WcEPdQkCs3Q",
  "key10": "3g3wXhfX3kzAidu6SXotiiXjaf88hDEu4DBrGkkWrY6SP3XaXQQURnZLuq5bNcJLQjUdyogLRZb41AcSjTNc8Wzb",
  "key11": "w9D2LtJMKUd9owuXaqn37bKYDev9ecJEho1UaUUfTSFxUGGzGHz753uqyNPmFVQ9ZGCoeNHqrQhNkrGHgwbPd6i",
  "key12": "3vqQag2G8n9BpwuyAmdfvpoKUucLcmgBEDcAhtprLEh3p7jojXmH3tqm7k6eCVCkYpwmtRcx6veZ6PDru4HsEGUN",
  "key13": "2FsA3UFy18X8ukp7mhfVBWkKG46gdKqAqF7YjvSyUQhoKPUAb1pAUNmnnBDYZLzKMqKkEBCForJ3yhN77Xwwumcq",
  "key14": "35EEzqCzCEfkZeDcscLZ1FcQwk8kARpsdzJUbCpWeqcgD9RKmLJpYHCYUqMgiTPo1Yu2fJxXkejG2LfECAmnVhKT",
  "key15": "5gV1EVE7hVbJa8hq2w3vhYR3EoSQaReMPW3HKfcriao6YCAzn4RL7M5DtRu123bRgTpJR98Fvvci6uWYRe4QEkgf",
  "key16": "LGoYY4KR2pC759NwLDk3KqpfmYpmbXeKiH8pdugj1HSCEi1mUJGvSN4VTkoLUw6T2W8yfHJZjpFf4KKWHRKbNmU",
  "key17": "4E8CJvbhsbWhsNk9GudzuFfdPwQG5uT8YZH47VTZRTc7GY8FhP9317oC4n4sugAP3y7G1nubUpbbRK4ETMqvpMnw",
  "key18": "55UFEDUXYxuFmTaGd954DuWYAgjZtMHjzDqr5iKfY2jeS3FKyDzyVWwAgcwfUFzheYY6LR9SbjXHFMmvQqe1GvaR",
  "key19": "5i2yJDwk6dzCzMN1S9k44zV98W7LTyvNWvsjiunVTSbUT5oKHedNJz7hEapjCLR3KuB1Ngka6FQF3mYbU8rNL5UJ",
  "key20": "5SMHsevLmsKJpM562vVnQq11mJLpcS2VQ1Sdr8kEYXzKLee3rkc2vZj5nP3mBx52ZxQBSx4tJAVrLhLaWFUoamEf",
  "key21": "XWDxb4wBgXwMpksf6wRZX6xAjRYCbp3K2qGYHG5ZNwqGhEofv2yanWgyGceuzSXJC6ZmNZ2Khn1RLXYkjYKmZr4",
  "key22": "Dm5EL8b97m798Miwm6ghRtMqhmS9fhpMkznZWsp1ZVVJKKu2vL7xzgWj2jyAjYCyZZ6wcWrBxc9GJLS2fsdtG7G",
  "key23": "2FWCrX1BsZPn7nH3oqTTGNh33bCPoVQ2hohJ37MHgednukEKUQRdDsMx9BoqAYW7krQfgo9J8hGQL2usQ7LYmmCP",
  "key24": "33DzuXipvrK5WDmgCF9CUmD1U9dDcAAmMtjB3hrUVTLcJJDmLpEm8amGbcaiLvQNVXhcAnNdCkkjWsBKsx3Ge4rS",
  "key25": "JTAg4MgKa3NkgXY9iatm9EYX5YVq1onyx4and3j1oaQE25XmABmXcUA5U8xXzFR4AefV8kCfQxqwxEYnotg6KfV"
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
