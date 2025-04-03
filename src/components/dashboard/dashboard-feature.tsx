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
    "5XuFvrB6KHr2ydPRMAVM4BXG61zX1WX48MMa52VMUFSUMjVstM4KeHaJDhLuCTNDiJoraiiKnf36JQGYgPQrJQRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oxBQdB5kQ8nkLrCzvSHj9VJJR1rP3GVkmgBzQr9NF3NC5eKjrHL5nSVmGxceey3jH8V9yi75MLMu8eKa7D7SHoV",
  "key1": "M5NbsJjV9XoVFihZHbcsz8yh17cYnJK4hik5wqx4sRXi9eeinLzu122697CCruDj476AcGV1JPum2PRH42GqfcP",
  "key2": "3jkk7ZUwpVPMaH3oFVgPJjfW7aDAY49EcFpYTZu35ETyXxn5bqDndtQf7cE5jiNvxtsaoGqZ9ryP8FKRyAjwNo1k",
  "key3": "uRTGdK5rrr7EWQZbkpYBbSLKrJnTDqYXNvCCWQjF4d8kYQ6dYeo8QZRTpCarkupWVqgmP1h9roP8LjKLgbx6f78",
  "key4": "4xEg2iTtXMjaKkCuUP6KQfUW4MpkSC3mvRkwyTreS84SzWh2WLG16gPS35BtLjsbsqbdrfjG3YsCSr1b53Ypqk9J",
  "key5": "39DAjzC5QYXPADfb6QBj2fS9QkW1BLyKPdi8qAE3DYP82Gt1dKScC5sZK6n4nMrzTt6Yx3h3EDLpqMtu1Ee2Dzrv",
  "key6": "2aykcMxUXN7GuT9ButJaooW6pKeE2HPmkT1KQMavDtPPwMhK7RVg7pQPksBftNQGqKGtMiHqznbjuWtnM9LnEcCu",
  "key7": "4HVfjoN1p8jLBYqtEnRNnFiFfhgK5cHhC6HWwdZkVZ2X4tD6pLT7Un5UVJxzbbZkUa5r8VffZq8S35LccnuR5mv3",
  "key8": "2MaVhTMGmNqsjSmb6kpVkFdABdnecrrwXzWxMYR5xWjwMMV4SNvQRDnhjNfrovqkXdHNoQTw1TEVk2nRpF9PvdJ9",
  "key9": "4FGBQc1GWdfR9jk8sD5Tr7Qp8YX4971TvQXiJzQX5u1ot3XT5MygnsiNwYwVrV6UP79Npy5q7oJ8g8kcETNvKmNC",
  "key10": "2WdRdiyfY1NzgQS3AYvLj6rVnJi5Y3ZvFkBA4Qki8et83BfG1vTNs76d34scLsU3yZVRigsgXNfM2uUrLPcAenFQ",
  "key11": "4qv6XaHAuftAGyvF7PWhthRwP1a5bfmGgHZtaZh5wQrn7aCtQWmso4Vr9RczcEQS1t6KPZHW8XcME75BYN5hbcak",
  "key12": "5sRVP6ySwdEuixUwgd7ZQEJ2AaL1oR9L5LQniG9uTqxP4PjpkSPer9Er5MAnFhdz1tyGvVbiBZJf765xuYTvX73y",
  "key13": "5W2S2w3skgBpWkoCogQAWrvS4sbs7KEXSfkN54X5b8gz61a2sw49jD4QFkr36RYXMNd5mvCaM5qMYmR1D6gGHbts",
  "key14": "3RcUHBw1UBdG5FY36Hon8xbxZoL24L8UiHBBQfroYdv9CJ8Wpuw5oAzKeVAQMQXraSxan8Lz9dcmDfYbTyRo8ie8",
  "key15": "oxywtAyrqTZjxo5Vs3Uuk6yt79Wp4sg2gcPNjr5Nyq9dUAWRH9gDUUEZvcec6TY5GVVaaoHyDkaXXd2t67KdKPP",
  "key16": "5HECSsoDUZ6YiVyNGB9P3zTeRCippidsje9yaRK5tVt4y8PW7k4PiDgiyurHrgRnQ67tW6r4QGcF6fFmg2cjn9Rq",
  "key17": "4afrqsfFry5y6skKNUZ2fxtGEVBLma9e9gQgusuugND5rqPHZZNArMyLDWseH9wQWgRGcRtbVU6XFFkGXx1f62uU",
  "key18": "3z9ijiLnpne2L5TouumWWLVWRwTZWXps5MATqfh4v4jLGikoTvxPX2jujrtMSbrRSHe5CiJm1D8bhCtC4KsFaT83",
  "key19": "MYzDTn1ifa3sVWznHWZ6XTipt2GEmfLdU8Ct2ucSyf2bHMZY5sBJGJwQUyVjN8a7vyJLHMXs3xm6EhdCzPG6zW7",
  "key20": "21bYRhMPYV7LFuo8sEnMjxDh6U5wnekfZHPnnxhpE7USntdfkAXej5JUzYDwKTP39VquvubTmQ2wkeRigzMipHqg",
  "key21": "3XmeXqfQz57UjeGMn1yGJAe6tVf6PB2T9nGZLLnhHZfgZH3JvCG2safbiiLYR3WgQ8tRyDBXPPZa4TvZBh323fxj",
  "key22": "DzfXHunGPXzaD1keSBHNhWPsDTjDSoxFa864aDny6gAyzqZ3z2aD7x9evew4Ea3R3ztTnGbovrDJFyuABqWfYQ3",
  "key23": "35kt6w7QVVyQELsJn8NGtvVLnUQRpTUARxzswxtnR1jWbGyPomfUyD6bgXqQ6gsrRbEKkNxcD6EUVd456skPibif",
  "key24": "2ZHKMSyEg7B7oikYmVmWMXAsXPXxekrMzk4yAhVQ6RE7o4kxbCmArVKXL2pLvKzqsu2RQfU8dU3uzooBunTc4N5d",
  "key25": "35sjTQ65mj2iHrwvzL5mGZVtthhjWW8eekR7gN5WSJ8uGGde9wLFoEXYJmXdjygxg4HiXBKB4gRjojzEJUnRdQBn",
  "key26": "52mkBg4PK2ErHx1ho5opzQsfqRcsEwfazLzhndkXwcie5nxb7fou7SyDyRr5tzMjc9KKPRcnLHxUkE36Hqo6oZRK",
  "key27": "5hZcwzrhbkZJEkZ1pvuufU43AqU5uv6mnJctfZt2CHMYMKhSWyx6zqWY7zQqw1CnTr2FBYRivj1s6KwiqaWDN8Jk",
  "key28": "3fo4nPKP5DwpRwDq6bySS64XWLgSf2bpTfmhKkkCm5HPb6qrb8We2mMGvaF1EnbhEKkBht1FwBSTfZ7pSHAGwLSr",
  "key29": "4ZNnT1Za1zZSFC5EhELqWMpZkYscdHF1WesPgfJMd67WKH7JUCovwCL2TTVXmEBXYhF8UaurUiVTMHaFTP5TA4of",
  "key30": "4rjZJEmf86h13A4u6Ge23NXvhiq9JTRdzL8j6WcssZ18qLQp2EKM9ueJXMubUXc5W5xFWxX6Y2tr7ywc4Bnumx2Q",
  "key31": "6Gmy8fGHCWhNxxjT84JiGLebznTR5thTx5Hd5cw5ujTEqPcHmwfZPAe9K72PdLURiAcpP3kLK7radzZ6WYTLA6s",
  "key32": "2g45nQC5DUCJZ4cxHwGLT3FoA5Kqtgu5LE5gkiJWLD7yVYeM5HnPweVgjf5EzB4k9K6V2DyMWWgA4uZK9DbFS64d",
  "key33": "4giaCss3omBrixEBt3ngu9fSrf9V4witPc78TEacSBGEjbvHm7shbRJE6LddPMcfgNxL2CqYVctxB2wQhhuYQdbN",
  "key34": "26rQKT7fFw3fFvRxtRa3MijbN5xNka4BHM7rEaqSJsAnghQa2dYo1GvdXaXbUEH8uxg1iv7QQ68ctHgrktvCCZQL",
  "key35": "35ZBPLYZsUZSRXkw21bCS3TqZz7XhnNwxjrZczq46FFddVKRj1ySRPXVC1u8HxhDuzftxdMB7drqLKMh9V9NWK1z",
  "key36": "5UycwTrcZCnruDhb8E6H1RuSXYrfGYTPRRv4EUsFBhdx6a9PWSLSs8HytU2Wz8xYgn3G15awR7VtAN1CGV6FF72Y",
  "key37": "3cFCTAMBkpiGPNJqPXJCiU8FTrybYp3zS6yDFMtZxNJ93uShLf7xwtFSqqFHEnosTWpEAAaXc8Nvf8f9rcE89vkQ"
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
