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
    "4VtKmrJv6fVRedSRd6sgahdfcv3Vg5bkzLZk9nTEA4wdf7CAvPPNzEFWRc49ojGB9GgGnPtsgdQhYsv4G4nSMERT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HUdRoUogiNvMwvHoSALSn3SiV9QaJccJNicC68U5xAHfdpch4r394HTUy56Mah1TuJVbrfXvDw3JHd26ax2uKch",
  "key1": "R1ZUvGfvzcLS69j7oMeG8GS26mZh42q4KUi14sXkPzxqwRp98a3M8E9h3FSDPFBxeCUQCu8YPtJ5qRKH2eERzh5",
  "key2": "4P2YHn5zxmUz5BYJzLzww1THJPG8Uf6uiCs9BDG2a7DUG2CDA1yMkXy4yUwXKYGtgfBQHSKEjQVuUafYtZ1kHoV3",
  "key3": "51xTwt4qJjyWPSFxaqV1eNGYZFuNBLuJwXYGT1NVzK4rcNK4EybwM3L1qiY8bk31SdRbQxnf8QdjiNk42cSk2uhB",
  "key4": "3j3acDnYvESUYco1enXVBCoG4NyaiMTVjybQSyNjjcVu1Es8i5zJ7BH92HFbQQpk8z7T53qUQn1LJTdfGdT5D97g",
  "key5": "aTeDqhqex8wHpfJfddPzE6JaMqUmq1pdcgYUgypwGbuavNwt7pXo764hFjsjQU9o2kRw7vXkybnQ4oegt1GYTaU",
  "key6": "43Z2BeTTv73ZjDejy4NUSB7d9EApd7EvtPerMu2TWsZqyGbKrVsrikrcHB6PgynhNfLmWXRWuREZTF4p7w49Akvk",
  "key7": "3YK5UgQAKnRT2Vs7atJe4TZEqbtXtknbnyLdFjoDmEDNYo2kCqTKTUsvNRb4vHHhLFsRwZ9X3euLoeAd3EdEWP1W",
  "key8": "5F5wTicfJXCinSnrDFPSAtEifHvt4BhanJpfML8khuJ8r1UBk2KumjdBk8gXqK4xwzTVvyQ4zCSMsciWMjskWYLn",
  "key9": "5LJAr1hNA93HJF3wfnTwirENFNm4CnEjJzHsmWkcuyFBpx1AeNZ9RyyGniovwLWTnJCibgmGESi9P2WoxFyUZQET",
  "key10": "u9uAucQbWYrgiChXkMr5cAgamUMfam5rpRp5qA4f2Rjkridu6HQMUrKzYBCv8dW6ELDCptZBKCqVNm8aUrctaR6",
  "key11": "2GGSeXErizL7p7LCt9smKsTgcSnaBXJReZ2yLnmrV3iPPXVjvxusW21f1sHvLqK7XcaEq9BptRJxkkcgKNek5at6",
  "key12": "qNeyvXoWFr2Esk4JzTUgx56JiypjtWohe7mdpoeDzjG3eZ2HvEXpZbYoLDRcnR6x4WN6sebhfRfcCkydvcs55rT",
  "key13": "5kcXA65oA6M5i5aQ4thLmoXGFWfLSxtphLRVVv69Gj2vyvJLs2ogaFTTuKaddgFX9TYEVNYbsmEZJzw7YJQtd4Th",
  "key14": "5JaKpQ9pe5WDnwEVgT2kdQML7Fbk26xENSuAGG3DYED98CmdzQj8bUYwRU4i5R4hqX8k29b2wjjxM6R4VmMtase7",
  "key15": "3WvQGSoLoiDvbBMYaqWZs7QgVzdkwLaFD8mvatMpyWKkLaxPXbuwczPKrEsU3aSANU3HLHMJoFXfkrZ4mZsyk3tN",
  "key16": "ticokSXXjL6PxtF1igQhCdkfRG9puF7hviJfAUtrL3Wy6NgEK34k17nU3UR3BhhNZf3mxEF949Jm67doYkXokfX",
  "key17": "3UVoBsgebrLR2qgcZ56zj8rZQ2q5ca94f9h9Zs9T8vP2AhV5dy2ZhRYpxGzRPpbhJDxPcsLVQZa3zjLc9aLKaq9c",
  "key18": "3stM1Q18t4imefSQsR4MsG3rMvsofom9GocmJycTo55TjJSXks7pcnzeXD2ywt9rDh3Sx4ekPA6oKHpWPtswn2XT",
  "key19": "4Rcg3L1diKo8Jtc2FosaQPoJf2hTY3qmoGtfhxxGBCwsaUqMAcxYHLpNRPafDh4MD6sEEKzXVL7LwzWbBUdrCfXh",
  "key20": "4i9Hm6LqHqfkBXUYenDTEiXmR1wJa42bio4wtK8xxtPWeLPYdVz4urrutGJqVvy8Ee8Q48zMFqN6hQAmLZAmtKHR",
  "key21": "4oMXUMb7H5vZUoMrkkSAQzyug6Bai1qrZUcqGXhqWFAFaKTc8L5hjH3Jv1n7yPFVMby8KRFMUvefpcP9j1Bseij8",
  "key22": "3a2TBway4ebtTTNVHv5wLPRDqskUpG55CJCYtMA7jAC4rU9GaUUuS7HGnAhq2WGCeLTLYBpcqxSZNhWvwmbYNFCS",
  "key23": "3QWgjnFk25MuwLdBfDadzbid9kbsPjvA1M5GRxSWguKg8bNqcmWMhnUJmgAyoYiBLvmtTuEhadVwjFJjALEnqrBv",
  "key24": "67ekgr5sxNVXkntUKYd5Dtm8FposukTZkzWgYGgnj1jVuizgHwx4WfJuykdAFfPGdTA9xQowoJ4X5HWMJ8QkteXv",
  "key25": "2u6y9AV7BhchezsCBHakuAdyXTKiLfjUb3rTYmefGxPh6yvYUEZNaZytbv1CzViZc874a1bBtG5F2R3maVNyEpxs",
  "key26": "2iz74cVMacK8WsmGLnREbzAhXe6UEWRfuatMmWZA3XxfjbGb7pqXzyykh7mPXnQJ33jGPWz8tPzYLUtW5m7pGvjK",
  "key27": "5J67rWWXqtcdtcwknaDAaN2R1wJb61xEBwQKLuwRPYH5nVb2U1xkYt2nWy5HGnnCAq5MgUhw5cC6PgHTQjfyhrY",
  "key28": "4GCqrZ7pwo55XJrM8oyQsbE17RX5nQa3qJTSu1NP5ovZKh37cbS6Az5SYMnSirXtqjGr89HSyeV4Vd1wn4PAbfeV",
  "key29": "4hor9pfv1kySzLdVKZobdbqn24rxVJjixECPtAnHr7X5T9B9MR8bMFfVNxHnMAPmxLUZz9GRwwLd2rzwiYPBsi9L",
  "key30": "3HfhSLT2VgJGp7FWukDny8vtqh7PUjVkmsKcAWHKL545jDJhujjAin7xj7Ey8KAmcufMCSRUSRwr5pk8qipXVbFS",
  "key31": "YZHDbd8rCnetmyXW9yjmSd8rS6DLAyYjXk6Y3K9XXGFtFx6VeJo2dJPaV7QJku1RPT2vqitVejgzh3y9dekDPuU",
  "key32": "5mcuthushXr3EeQUB8qhBDPBxYST6Gv5HkEtFCMtvXG6zG2UCAQ9HGDmRBUPVPGVa1VnWJNUFjsiU7FnevdRVgAJ",
  "key33": "29uZqrz3fonFc4hTyoCPNMxuJk55MLUDjjXrEx311TpRK3C4zU3U7221bw2fsEGu1p7EsaUwfccimiXVKPaeEEwi",
  "key34": "ZsLjkBBojW9YyT8kk6AQTc9TZUWSCJrZA5e3S5Y9tUhKUkTPNiJHFJsnJGsa22wpqQn9VWziw8NucymrqvaUaej",
  "key35": "39qbcLZ3Tk8gFeu5KnLDucwSq7qEV8WH1U1t7acZ3Jo2y5MEzBiyfCFSSeGzwpzzToSPD6QYH2FCwdDMZRApQgtj",
  "key36": "58kP8aRokH5EdF4KkjyaE2mkM3HftDxRg72c3rxxNvq7Aouz6ZL5KcXmytW9R3qzsAM5xmsoJbnKkXTJN2XjxHBg",
  "key37": "JwaQpRzp9PvZkrfjUbvwLHCjQhLEJ9s7wra4bQ4RhRvYWizDnjy6HB5knjfoQrXThR7E7ppjk9WtSHaMHJqL7y9",
  "key38": "5wTHpzyWaqWg9et5e9gsfuXYCRC5iWtGN2eYj4xH1zu4J3FVy1JceDxDRp5jH7zcG6fG3NnJHoxkqetwY4jZnSQk",
  "key39": "5FFYPdkd7afbBvgwjuEzqJkNd8v35WWU6gtDeFwY5HARTgEWoZ2kLtvWKhq3NXG4YqSGHeMothK3SnX4YdWrmBd",
  "key40": "brgLTEV6es4RFYdwaSxxFahupvxdoGqLacKqo9g7DNP2XxJ7sA8wC258sHzpfpJNxq37rahpAkp4XHsWprykj5w",
  "key41": "3UFJkx1c2nupFqsBhMpg1zWa48pNewbMeV5cdDeDc9RvcnDeLUshNhYgSMW36ZXszuowwKox9bmPJJFa4u6ypAw5",
  "key42": "5K8LkSDccxRMQ1Mk8SeKaf9w8HWAyM4K4BTLnDKQpEqymugh7Hy2c41AS4b4jRsZtmtF9PXVfX2PhuangQzovMSh",
  "key43": "4qz9MeE5YmHsjLpp6mb7qdk9xAkcDbdi8FTbf3CGxhjyWyqviQPNkSArwra1dpxnk2A5HCrJGDgMbBwe8gqtdJ4X",
  "key44": "rshHpUa1SvViCHJg9DCCkzZsRG6yHfbaRR9wK6n5uA4YZPY4PVvuos38Z9hJdJwKP4mDGbwjCVmcZdpx93kN9Gm",
  "key45": "3LqZ4rBvECoo2b6KuS5n73c8269amfqzssvrFxmLiJmRQhfnw9koE15w3KQQDfn699bUsoBFTT4ExwpLGNjRJwA7"
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
