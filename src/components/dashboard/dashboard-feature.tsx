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
    "4BUERdwgzu8k6QdWHQY94tzFrJQp1SbiUJBxZKK9La52RQuHxBdnTNNopoTdcohfhS1VxayJWeL3gEQkQjHDeMi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65PVXSoXMYZ8UeagYe7pMEVt3CiC5AKuCYgsfdRsjLUYr9HKX9V83o7X3eQ3eSAkYmaM9AN2TQFjZu6Qx9ggW6uv",
  "key1": "5XYJf4jKjXJCmKMmpJVvNbZbxsCMKid3uAzJRdbSs8bDf3usKsAsyVkuuHus5ybhafHnPUgEZf1aG5ezwiPE3hMx",
  "key2": "52CahCs5NT8iXMrobyMjsdTiqouEveqiMWsaHJ3LijsmPtFqoXFMuiaFe6pZGjoNkzTEr5Q4XgNxy91YFZUC9ubw",
  "key3": "2RiZVr7rwobc6CvuQxevgbzd5HTqHM2pGaQW1F2rwsS7EuXqaYUacHZotkhKpDvKVF7LgqftxUuNGnZsvPFU9BFd",
  "key4": "4SzoMN8zDQoCB2wdh5vnsSXtuR1GivaKjwZLhdWwyu2xdMuo7rxUSYxogCQaseb7abazmUjgAZHSMBbDx1iTaxeJ",
  "key5": "3QeSTuJwUL8vi2g77xTrsdg535mRPNrnEd4SPydcowwBBLwSS2Me8PYJzYagbtyWKB48oV21eWGw3aHF8kytMoAs",
  "key6": "Fj2LC7ZkLZfg8R36o74KuoYawunGJ71hho6r2TBAY7YifMLNguFiugveGm1o6dtRgiY3Jypck8J2pzLakfJhd2f",
  "key7": "4Aoso3942bW79ALYW4t5ZEPskS1H8MwUt9YJ2Ef4xNMmQitsizvJ3g71LBkpTd7bjZgH8CGyFBRZDJ3PaSXdZYLX",
  "key8": "5dJFujLeLPHxq84MjuvnoKXc4zZdTA4YXc83xHtX7tpPpVidU4EZN1jvJUDfRJWWFK5mZTWqyuANRKkS4i2dkEkU",
  "key9": "4Y9XXCTpPCenRWYLRCUFQgdafyevf68cb2Xa6VNnsGmG1Yv8Mq2b7EgXa3dSLwAn3BJ1CW13g1c11UdrtpLMEWou",
  "key10": "qL6fyXvzcFJ9kM2EFWLmcfBXjSGi8xCvgQrHu3rz95w7BLxwYsUSAcKjRBhQt8ZJYxCT5CQwigQCrkufnbtewkL",
  "key11": "228dha9DjSDxxQrEXud39YXp3ThWiC76tTVfccwvc7vWQAbDaYTUxgJbM536UaoXDgvxHnpqmBwXdZaBSn87nAYV",
  "key12": "4KBa3ahVzsB6X54S63Qv8GNWedrEimiFiqzoTqmPYbhomHDDX8dqEB5gC24nkvJs9LwCkSacchHawnTwVzGBQ4Wr",
  "key13": "3vHQgDprEwDVjZBCq1BpXzHmLx1Q7GX2cKauADeL9Na5tZ1yGzNGJR8TopXbGPM4JuJ1FhWAH6Dwwj84QNeS6GV8",
  "key14": "5SSiK8Rzz2L8FqXSXaTptyYkFmpHMaQBGEZTDSM4iv1kjm6R9LZsMSKzBgNhpXnT3jp1QBzbvpggyDykDXhDLhSa",
  "key15": "4bvMVEvy6Q4WGLdVJfw9BVNcKoBMGXHfLZWqoc7iSjt277LMab2WfuMhMAXbTsGkrYrCYK6RP3x897QWBtVt2UE9",
  "key16": "3g2Bivjs1uEGakVUgG8cGbVkuf4427QU5QLh5HxTUDC1uKPjJw9r85ndvcx7wcqTjyrjsJBkN5w3yAmZJao8KCJ5",
  "key17": "6CvHw123VinhftfGYtGzJBvNRYzHttvQ4wWd1FsJoYsg413j56don3p8TFvumy8NFkLVRCGpyCaigScMSRVin3x",
  "key18": "4fzKoG54aVJ7EXre5FsvJ5uikg45nNr4y3ry2MyfanqnofPX7AcThNEoNFy7kgZsXhFcSUFd5dBn7kadc75Mqg3y",
  "key19": "5ANfnXg9YNVyc58JD4pgxeqSK4N4TmUKMTsQqbcXTu87PoGh5tNe2c3CbURcVu8gBETgyREuabJBMyoyexvdwipK",
  "key20": "WvmhQdn5jCUPXFAipGuqSRwUpMXtFnvep1oxK9FMvun19JX4xmoA84DPj7dxUCRrBWZMWupGohD6i1wSHAXjiF3",
  "key21": "59cypArrqMD87yjrJQJ5i3JitPhwvfiZkMxVDk88t1ehnNcRQhriFQcesAyEzTy3UqP8PV5LrcyDfHewz9mUf4ug",
  "key22": "3Lis41GQcjdT6LgnqJi6szvj7oYvBQofBPRZ5bnjQ4Uonyy6HJTDwoLehXS7ToWQkrkben8928DirR3cc3jRvTHp",
  "key23": "2jyGWV3hHKLZr7RJDCZ2pehXgm34uYqiAMTkYiUMfJNpDogbyG6PPUnJ9ds4pH5zsZUhoRfSBX3Azc6WZ4PBv6pJ",
  "key24": "5cVT4cuvbirkKRnwEFCT8EEh4W3WjxpfpztrE5ME3k5NCfY47peYUtv2bJVtLoZDbgpTGgoiVKs71zeradJBMTQD",
  "key25": "3TaQZvr9Qp7miHdVcYTw1gFm6KPmdTdjJz3Sg2PLC2pJbT9Fkx6gdcsfbKkQFW5HigQQGuRXRZta2zVUtXVQhUUU",
  "key26": "2yrzGUrFgqQMrMGuXs47H6NRdBoRFAq9avf26TtVpUknFyEmvUFgj6fg3fGPkPLDwovTEVhWUVxptoxiEvWu6k4M",
  "key27": "5hyAGQtXJnVViC5TPcHpnep72WAdT2mtkpULm88AP9xQfjNt7LAWNopPMp5xAMMCUY9wWcECvoVnhwkn21Ma8myW",
  "key28": "2zh7tJ82TJdG8u925rQJTaBgxLhyCepNg2Uqyv9g86ed9y4tFFevwBXBtkHKncyv8knAStJ2995aRqHQSDDuzrJS"
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
