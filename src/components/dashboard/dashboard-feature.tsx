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
    "4HdxCJbdpkY58RJcxNjkrw2imUuTfk623jxVs3qxSJKuKhHELoziPMR4muoGHBdBUsjc3aSV1v3d8s8R3TyYTQUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pv3Q6fQ3gBpuC9KDVrJ8PT6TQSyDHEHijEyEfSz35cEL8xQ7sXb6ATigKwJTWDgQX9GUSBFefGXGBpy1grC6GJj",
  "key1": "2G8C59Lr75ZL7PjrRtxxAJHhVNkh9FqboJ6pcHwavne5QYH8g1CedsvSjywPYHeivv5eZ6je6VH8NwLnnCyBxYcQ",
  "key2": "5SLxhEwC1vpqjXSBZnxu4uoxbbkEDzaLf6Rex1dMFzfB6Gas682mMJaSuqsWoHVkGup5uFJv7ryK2LuAVdx7kSVu",
  "key3": "46Cm9Bey4KZHWsXW3z2yNDQkrjsjRXVus8stJa1f5NAQXh8SEGvwksS6gRecSPuCVyshinanAsQgBKYKnCfVnFk5",
  "key4": "5GxYoiW2na6oseGy5VfH72XmYmCnJAdiWa2oJoRvSDWyJU4ujwSATMHN4P16hJYtbLbqiNqzv85f3sgFNxQpoV9C",
  "key5": "3doM4wzXnNAe23N89id6oesztbxha39GLM2EA86GdB44YajV1wuz9oqXXYmfqsriR2DkfcmTu84oetxwaS3xpFM4",
  "key6": "2nxZwfLhpwCdop7FpUHeMHqRQ5aE121eHK8KeTVzLbLzjcVgpEJwauGFA3WD3bYnXqFg7foAMLEod5Gpb4rCankB",
  "key7": "3MwEwBup2k4hy9NjqhXctB6ChrSkneAbgeaE9o38vZZrLuYEHfiS584fpMa2ASh9V49w7563AAy3JxaTqxPKaNTa",
  "key8": "4R1Ciu6YyZxqN4gKtuxd491vkhM8VK2oU5ZJmtFr42hWSpsEVTQxcdCbcuNisDhVFDjupTh1jcUw2zoeDGuhpfaa",
  "key9": "3CDrhYdnPqSNJwFRKDx6UHQm2ZHdZbYc6fREBW3vaNET56MrCDFpr9pPFwD8Xa6uBUsAkmUGKmdizuASYPVdEruc",
  "key10": "vPLvMexPE36WmLwZVvsUnKbY1unefo4ngdvt7zyJxVT1piD88RziwcNWKNDabBRaRdjCunScxME359nTZk28zR5",
  "key11": "43kch8n4481f8E6pAQg5kyjxjU6nSYparRbqMehmUMTrHbMo9gDzPGaioooFeT5ciqgcVaMLsPQwXedsuajY7Aid",
  "key12": "4sTh9WNdN3s9VYx5o3MFd58mybKps4d4R8uToyJKgzzMgvRVjckFwyxkDuLTY7LxL5n5vJTzgLWbJg3XnBCanBXi",
  "key13": "5VWasx5Fyd859hfk6QcTyM93v9g42p49ZsQsNiujzYV1963SibtWW4zMUKnyPULBa9NYQBskN7hzTdxjkVim4SbL",
  "key14": "3NdrvvFGT5hyDWSDYc19Xp5fXYm7eRD7KzdKRyuP1iJ2N4bTtuvr89qT64AXTrzQq2nWDmJvPfowg1d99XmaDyyG",
  "key15": "5xbvYKWTCmqiQCLo4Htj3UXSF5f8Z4BBgUxEFVxev1G2iPcjHdTdbXwmzrhCaUKsP7eXYCechabr4PwRMi4fZAJF",
  "key16": "5zUhtF67RP7HrSLXwmuxwSRSSHjvwqwYxT9qM72oP3keFLgq6uoJA3kB6ZB6JYAsckDfg3vnbXCRpxThaKNFH43v",
  "key17": "2EwXDD4Akd2Gzn4iuq67YXjpS3h6V1ytteUgrgcQ5La75DhJ3DnTn78j7uFuN5EpYp9WGh6a8FZfQ5rnefLHZQ3K",
  "key18": "f6V1eQnSiEoETgAbVYbEb9nrBNCbnKapQS7quTKKEpbUbZuirGErwG3Lgk2SDYfbNdg7LfEQLfBhSs9tbX5zfwQ",
  "key19": "31St2fZSEdxDFN7fxTbTnTQYcWRD785TkLGULFSkdbfQD9kqdt5Q9QBLWzmqrbqCvYCKmb7zNGWW46nkPWnAwqCE",
  "key20": "TqAu8RzmRvoCUhwg91M25H9NGawjiswF4gk9kXDeYfcWDj1N9pnpztLfrvDtpbNXRbGXfTLb7JtuCavzxjALK8J",
  "key21": "3tbDgZTkcuqbKnzfFjvCXUDYSBQjeGy1a4WouACrBcWE2tz3bPMUNZhzVYBYwDxFjn1xwU8SFXz5smig4de53XxZ",
  "key22": "43qspgQgabpuJhVTtY5ECsmCw95WU6i1b4s47Xeqo3t6ct7WZjR2wtpQqaFTsByLobyMrfrGjFBtPHqoWmjTZjw",
  "key23": "374C6cuVMmrW2GRBjjbri2QmkeE3u34fyLbs8Yj7EWT4wr9yZugBYvy6wcfn8yN6JN97UkpN9D9R6qPVAvrUwqXZ",
  "key24": "Y8td2M8ftvf2G9qyBC5Kee48MxrgmDdEVqYmSJa6vccjYg9VoCru9i8oouVQVaVUW1U4e88rNQbpVDzoycTyJq7",
  "key25": "3eXCxutNEwQcQnS4E6LLzJPEX37r4KCUiabqDxzvgst1jdQsTBeYqGUuQ9zN4PivdxBgdKYokKKi5csA9ytogsUU",
  "key26": "264EAfZzx1nqU6aYeNxVnCJKXGMjK52U9QL7npguA6LfQhXNuxtYz4VgiyXbayq8cEhZKajMJpAXKDf8oXxcXo1Q",
  "key27": "4q3PN8jwPiq8eGrTPydfEZV5xdiiGqww8gDFVBACGzrTdfEcMM5Hr41kPu3VSBPyHrh42vCQiBTk3YJ1DFZPTrX6",
  "key28": "jiPzmy17PbzRGBemzMAGdsYv5mMvWV6dvdDiQJ2otrj4Lw2ezp5YwHhtLMLPFR9x8y1tFmnr9RLg2FT1QwVECnh",
  "key29": "82TUHGzdaoeW4Hf8FWoZAYNbSA9rkFM7px9EiHqfig6k6m6V4M5QRgNVwi1p1CjKrkKDwTNRuo5Xxirkw8x8q8D"
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
