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
    "4YaRWkntTySc7ZMfcA7H1xgbWS49WxbjzmHdCYBbj8XJTEEKsphNbdJd1ceQRySyS8t3aYLqM6cjYP9z5RRbGHm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HAVLHArPFNdjDZGejgsxRUwpLVDa724n9pdgz2UjHqKHi3Utnaa2GwgHEVMmZJo1cUbc52tkeaZCoSZdvtN9rUk",
  "key1": "37S3Y4gjVX9HfeYPeL279M3dUx6u8uczyDRzSv3PdSXbfy91LYDdtQKMpYUkM5P93gKjysinBytp2BEzZsujpMb",
  "key2": "2849mknr2TS3AVmBDGjQUyPfK52RHMwegvNyZ6LwmtGCDxfWgJWqzqd6rkA2o2MPYSeXFxEUvp2ikXEhaAuN4awM",
  "key3": "p2xqmDsAVTBxK3BcKGka6WhjVSQF24h9oVzAomuNuGWhEo4ws67azVocGKCcXNwEFLDkhjEYwxTJWAihzhjnP6s",
  "key4": "5Mr7HgNjUK9ayZtGecpamYSumMsx4S51AE3zEVbnS3ZUo5yeTJtRF1uL3GxaXqTMiqwSwLbGdUkBeyZCuvivv98K",
  "key5": "5jgWzP7cTX1yknqszoJCZm1t2vH6ENxAyRzbZsnjaaDkqwxCxbfun5XubgqwJJy2ghVrzVmqfn3myTF16BDxNKB3",
  "key6": "55ZC194U9BsGVBL9sKdw7VzShQV9SC52w1WYYN4v2YuH5pNbmvsBj2MoR6RqzbqXNaVew2W35sZ8yxfQjBYgGqQY",
  "key7": "2azcoDu9eRMV3eAYYVsLbAtK4f9D6yJuGZM1yJoQ6JGHDBfyUTjjfFWcf43ziu4DU1Z9Ntbyp4gz9b1SP9tRE7jG",
  "key8": "vhYp4HQtt2HTAF1zNYrEDZ9ZQttXSKpbBqjpE2PmXA3d6QDW17EKtWPPnQMGRg4PiMVDhvZq7Ciri92NJyrfP8a",
  "key9": "5vSTjFpSYovQxX7LDSmqGpeLwSsJ43UjBLkPnfwp2MEW9TwzAipe6tSpZ8Y3sAGA9N3MZPHLwdCqez4Gcs48skLG",
  "key10": "5DjZrZRb87GTzhyt6oE5FQ29y8UH2w25PjrP6jQd81nhxbdKiqdzWZ4XYGMYvzkKp2w5TwfoSNcMDewJpuPS2wjJ",
  "key11": "3zqbcjjozdc7CKgPLzS5LBk3Pmj7W2R2yAqiJRFDrbUqdmo1VLnGRVSeXaDrd3U3FsxK32DZjPzF8uGx62RBRaMb",
  "key12": "2bpsb5UczFC9CSBUhpvCj9XDFQ6LFQEKraCBveWQhjdmgPuw63oVCHvPPPXjqcFkij6y7mchnNzhYQSGTVUuwmFV",
  "key13": "4YACZdp5eCMyyzrSrNpoF1V7tUfnTQ6kTWTJT6g4SfNQZ52c9tSAg7dBjnegqvL27TeTvk2cxqj7erQaWMe4Pbrr",
  "key14": "3kd85bDjgmM1CumZjKZ5VJwn6rhr6VJx78UBAVb7Uee5ZNXjGHkUw17jXA7SXpNtcKqNkA2zv3HCg4prKDTLRpqo",
  "key15": "5LSYuQHnrmhh2D8GbY5mWYbysWhxLCgVWhhEj3yExivQK8UVyESvFW3v8ZR5quqgfdD9Nr14okKLkh74qELFgQnR",
  "key16": "hU3nBSqLirnfSe2Z9LWMBPhtzVme2uJZK717fc9TuuxPrmeSvD3nENY1z3kzGgcXbvmM8pg2vuyHKFeLuJ4Qnge",
  "key17": "Y6rKHBqEcEDp8vLj13FW71HTPugokerzGVLFcvye5iS9dEK1RXjzujS8txFJ5A18VYnTcLLN5aYvbPUPHW9dqwX",
  "key18": "2yqaPozuRJYYdawJ6PJwvpyC8dyR2rF35A3Msk18sPh2FEadkt61TP64Zapr2xeoRRYzT2FoCJqB84G2TLArN2H2",
  "key19": "2dn73PgVzMQ5C5NxCYh3eLDD8VAiSN9wM5naRVaCcE6Dj96BJsPWz7dLdbkXgoPTVfdHBH6QNkXqwuwdmzxNZfwu",
  "key20": "2erQ44di1TZwzguKJNMu6smhbz5twmDHJqJxEekWMt2ti5EWZ2ezq3ezZpEsd937tXHqkfQuYT8eW4D2W1npHG2B",
  "key21": "4MqHoJwDzh7HCUuc84h1VHaT7LPvxfD44GeSpBCCTkfb4zv21uZ92BacdtgqiyKPBdop7pmbBTb9VKwZh1mqjyXe",
  "key22": "xcbmJFHAt2VQP1kbj93B2Rs5czqeH64WgNX2RwXK11L91P7Pn9jPyUbi7PfwJG8CETTw8husnHvwhVL7Aifgah6",
  "key23": "2E2crNQ2mMGsswN64p4G8zsTCP6wredsTHjRB8y84QvYp6P5kS47xcAb7R492xaRGWNJ6e5u15iejzzrNMzGL2hT",
  "key24": "5w1gFC5ZHiPeGdSjSZ3yCib83QhK1wY7UUD3KXtJmnx7Mcj4iqkNuWCwo3QeUB5jp5xPNPeUSatU7vcbZd9cLi52",
  "key25": "51uZHC97fJMbS8uqKuaj6DEn5c2vk1WSbKKB8sDTmT8tsfbXnyX1u9Lwo9pE4n8vVbe92qmKDrXz1Nj2o7syXo5L",
  "key26": "2f7d1hh8cohYkMvbiJo5RbuHkGHni7zjsGauTPqRXQazRjdF5srDgmWN8SNaDuryPUiELvCXUpWt5BhXFNZAe9yK",
  "key27": "ceJ514wfcnH7JpQ9kB3BDcY4fY3E4aohnUgwjQVSe1SP12KCgUhdde6fhtbeF1Yy2tPEkFfkoFufdLgK2JadcFt",
  "key28": "sCjbJwEg7vVFHdver4u2UVTfSXAR2eW4dFNGsugaVmmXPBdQvYvTmgHVfv49KM1EbeN4EjgKCPkjfD6gGuCZRvS"
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
