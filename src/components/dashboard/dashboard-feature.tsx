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
    "5Vk834SDx8MbvRXKAZ2MuYT3vgaf1VYkzYbYbgEhQE5sioF6iihSLAPMDxncGTM9HT8VJM8iECAxyJofy6shTS8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FruvP5nTms7pYwQmeLt3YttWuPDEK6XuDsKzEZwpgBWSFZWsDGGrGj3eRjWVo5NCQ3EvXxbTWUJKvkERk5BmDHG",
  "key1": "QdUhZg4QC2Z24J6hw7SV62WkCxFZtcnrVAN1SZtNvQS9zKEUroZAjiEHRyuPtRPXN2GGiYscyGTWjBBaXBDVZPD",
  "key2": "qtcDyzZqoMzipMkHJ9ztRtWqcJ2Cct431SHCWmy6vG8YabFWvjioJ3EHYTowgaxs56bdFBRxSsKWuZDfaNBCqsw",
  "key3": "2DcxTmFDBkRcZ3GUnHb5A2eLY6rw6iDv62c8aEhA5vWj4ptx1VMh8mWUhMK8YvgHMDVwVL5LZ6ee2DVC2jhux5o7",
  "key4": "45EZoKjLu1oax3Q6Xu7dozrHe4ftCnheG8HyRRVKZFnCXRvXcWYeGQPrfoN8FdrDLCzFCPzqQmPmNT9MnfjiHAFg",
  "key5": "3RTVV9yieppT5ZcpGhd1aBjpA8AoSsYZNku8s2hQwdGjfAp19SkxMCmSqRWBthmqv9RTUvJM8EYabJSXWzmCajsr",
  "key6": "3Uzr4uVVb4xb3CeurFVrCEootSDR71YRTBqn6fLNBXwSb7P6iBsNcdyQ11TUcGH2G5VdNS7nKqfvbvnocLVvKjrH",
  "key7": "4CMPWiuDcyEU8sAtb5Mk53jV8nQksLUCvYgaeqCv79LCzRkPEiiyBkBG7zdXWyHSkPWdFKEDRiHKMw6oaztxh69t",
  "key8": "4pkmA4E2CjbhnrBzxzzCUrfCHfmY2PGNoCL2StYm8p4GkRrvd6tEoeV4zyyREv24iC1evVqazm9wRufid2M12DxA",
  "key9": "59wMb96wexMfQ4izUjLj3ifQZYfiYMM2cRpSM4xBR94k4W9C8UAMXs3jDfEuesosfpAoSUgjCKiZpKBZniT3sRXH",
  "key10": "JyUft1M15jBtTECcPxPHYVG8eLq9kLh6Du92qu7zbZoaBtujSTQa8W2MGjnSjBHqYPQKi8Q7BgAYLUAzpdrP3yv",
  "key11": "eF55D9KYFnFLg7WfMiqKusoi3aMuMZw5UbXhv1qYtS7WboXd8t7Wdi4B2Lp1DA57ZZ3dGaYuwmxEsYTiKx8pdVi",
  "key12": "3MmEYeqL1myNSWyEY7g2yJ35oH8PbwNjSPai8ECmQCCNYARr9k8C1i2XDLZU4Bxz8QskWgKQdJQ85GFBxsfSBYwe",
  "key13": "4VCx5N5xMyDPauWiqgVBYix7vpUFg8HH8WhP3kf6VAWn9ytXRXkNTRQr3n2v34hshm1e6CbRckh1CV5Mwib7dXt",
  "key14": "2sw3q61QwxLQhAoEDm4L4Kzxa2bq8Dwof1ZG3cbhQcocf6TTnQVGx6GShKW4Ypmcymkx7tDX67wAGcc6aAjCFa55",
  "key15": "23WAh3FYNSZuXeg5C12u3QZy4WNgefHfbW1tnXki3Z3sdScUJc28YzZYnMqRELtRpbmkSfLvEYWPE8VowWyhuvqe",
  "key16": "3QdG7i2bWoULLdp4rj7V9cFtv9pfZot4bz9a17QxjAdSTQnDRWvwi8sXbjwHoK47fGLinCTZA8dc2jdJUCLhFNdd",
  "key17": "2GNBciBDQAWNzk6PenCCzNf9FeQW4nCJbe68Vc2VZ47NKMbWksNnVwUC2B8nexJEo2yt1AGNHjf9pZETy7ZLsMry",
  "key18": "5oHw5PXACQYmM9CuxqcHJfv1Dq1uXYi1iu9DDKW57HA8HPZp8qztZVVmqAo3XxYkt3S5jEJvaY3R7MpNsiU6Pd6D",
  "key19": "4gBt7SwVJNrVUH5wT6peyL7Wbwkd9T81cjwvAUiS1fVErHR9sJRx2oWQBU5X3riKJnsCBuH1vfRkRWSt29xC8WEh",
  "key20": "GFqCpXe3UaLxea7pmjzZe44VieggNw9aRA6PyY2PY8kzhKmWhRRx5spo6dnhq9amy7Aw3zE7AgMo5KApn5P5H5Z",
  "key21": "25yMd26hfvh4SKKyM1Wt2h3VrU6KTZicTQMgQ6zHm93waWFtrhifjCvJ4vE1hGsx3VaFKcX2mGzDuSUpXf6QkLuh",
  "key22": "2Pbq5CJUe7Wp6SG73HN4TJsLm8oadouz5Wgtu4EM5aEUUAb1PZ8dyCJDRfoP1LiL357onAjjvUNakhdckeGERePE",
  "key23": "2EqkwHtMwk4YyCa7suKMcZhMjsprCCQyTcfD4XX8xRficzJZWTr55f5zGkfZdAMFpemtY3MgXi1EoYYm2uXgpmKD",
  "key24": "38zGBCwoJAATsoRzHqPojLDMbtfew5EDye9SDLZ9EVsALAwoLgHztfnNbtTc3S8UGoQ1Gt8wzkKAWtVmxq6AaH2o",
  "key25": "f9qTKC1Dnoe9YPcsx2yKiKM9Hqdx88YQBhKLjRAjm1dCKjTKdK1k8YUNEpsGuB1XnBfrJSYog3ykWNqsJwxcwGo",
  "key26": "5coRE5s85KUjfo5ALNstRMvEnciUqBaqdTeNpQ8jwLsVAee2dBHaiKM2B2WPbGT6FsQxr9RQdER8ikU1P6b2baRh",
  "key27": "58F5e3nEkMWP5hgThU1UZrBa19jgUnLKzVMWHrEpizgmwoHj1Nm87e4kjLXX2jeCZuMa9BvsQjdFvrS61mGT7BTh",
  "key28": "2Lekj2TdQDSycifgdqbrssRVpp5G8DQr4fRhL43yDUWChBRQLdtKLUV153DvDba3iHvWWQcrChU2uRwpRAih8qBC",
  "key29": "QpSqCYts1fn4ukk2L53JCSKhpeiZypMtm9anU5P3aoChTHkWtPoMr2By4Rud1eWfwfAtBXgqpS1HuP4x7EhSVjV",
  "key30": "3CSVxya4MJCBXAw4W2WCQnXhr4xD49Bqn9bKZQ2oNeEajmn4BXwoW9GD2Nv7ZwXtMpAqV1ZyZKAHSmjUDw8dw2jf",
  "key31": "3ixranspdAWCfgdnPHiL1yVxRsi35fimHcD7iet8eAhGfgWhj7nW6thCN4CQnvDQDDNgsk3PrxvpGji3rJCMLaph"
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
