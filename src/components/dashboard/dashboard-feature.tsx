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
    "66eFKSHSyDjVjist9hQUgj1Lw2H8r6oNMVe7tGMCkKjn69SR6tPzfUTE1epiuQsnQucCHoHgy6yXzNx3aHs3vj82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qrgh5c4U9uJoWQoVWfqTGcVTn3wkwPhbAApa7gpeNgWGwmETXcvVRznCQGPrUHZsXFd1B6PUFyqB8ecivXv9PDH",
  "key1": "4Y7fB2TB4NNUmjrofXwSEjoZMNvstfWome8Ri22cVGdo6Ew7Z81LF91JmSwebwPwxYf7hAtNn9bCorznPQoqf1qv",
  "key2": "66uRf6a1cR3Qpx6rRzHkCZf4f9EEvSM3g6q1A6TajCTfdTB9jN3DrnKBKsMwSsJyYFZPzGeivY9LAmBJfLHBc99g",
  "key3": "XYPNZaPaTEpRgnYFeyhEg4yiahEAxAr25CvsS8zutBfNtCoNBK1pKQ7Zthpi1qxodCyDtWNgPbefwK67xgwCkMV",
  "key4": "3m5isiJfDtMURAvM63H247zvVVfqYdJjgjZSRHX6McUfPFFGE1ZjkRF8EtG5re7VFHfUrVVjAreAB1Aq73K27ui1",
  "key5": "vpQGnVPVhVZVScFKTaDQzXfrs4YLjoWkffb6ToHeyYPSdDqrv3wKQbZcBom6k67UAxK8bXXWHfDJyBq9MBi2Cw2",
  "key6": "4dfWdzDPkZhMxqNypwhJM1wZufDtc3LcAppvL1S4ZkPqSGEi8WewTeNjRuEUZidVnU1VXB3QXAsmLGrBGaz8kRGq",
  "key7": "3tJap9Fe1QevxegKjFkdWdbSS45hsHEbPkQwXiqidLqDALYVvTVBQ1uNVBFvGa2UaJgYX541g9132TANd3FB97Rr",
  "key8": "5A6mtHYhJNWgvQQ36GnMjw3vaGfuU1VKqvhaii7CbcZ3KN6T17pdFF6vRGac4xtk9DzhrKzwVB9wo7BQEknMGxzv",
  "key9": "63pcW7fGs9Q48hQJaQu1LCUn27yvMwLBNrSWnRWnKgnu7Xbc7TPFBXSM14JQMZN5VTc2exvkuHV7wE8kEAxGCHxV",
  "key10": "2crpuM54nYEYTV7o7trsj9jSd3igp6tpXGnRDURFwbCig1Gvz7CEwdqooGyGeoMEqq5APBJLDPaBWjzAQd2R1TYh",
  "key11": "3X7F2rHvHkzuZ6bg5XALke26hBPS92cYdEyG6yGKPxnZ67kWmZZDUsSWxzLXcWuvLWoxov3QhXhbJ7gr13i7CW89",
  "key12": "3RMPFay2xf1rCz2ze5SZEat6ZCWmiGbGejTHtcU86jdXFmwRzHhQFP1dnY62mrvhdtGUKGduRijVmi4WxeHzkSn8",
  "key13": "24uE8aZ9xxQSmfBWd2KwwY9gDfg1rCScnbt6euSsfi7T1RYuhE2mtRmr7XTfgMRmoNesGE5Un6EqwNFT28gnzcMM",
  "key14": "2zjnr3MomhwWFhmjGXa1jfnsdVUWThcsm8grnLcyQR4s1Mh4sACeStBjoS1rfBnpCNUHSbs1ufKYikYkAjFN2CQR",
  "key15": "3QM5sB8aJ46qaAEDPHReHY6i7ewbK2MdbP3dQ6ScHbkCGEHLfWBwDJjjp2CK4JQm74mBPN3wnmTU77vusARqycqm",
  "key16": "whckdEHx72UdVhMYFz1ZCaDKvaDqqjLhU1NPp4TbhbTwPPRaUsao411gahm4FT1WT2NyF4tbi3b7jraBvoPaZmo",
  "key17": "2SsK1tYJDw37dFPLZaEmv7hH86sTXEedn2foU26bFCYbZ9fyRzhtvNBNG1o9MGQug7somhRhyS9cJDYcPVuZ24uC",
  "key18": "3fRwXe2pbBr6cra4f7uwVERkg5nNjMRVKitChKS7VenH2gcNHz5zKUSfZ8Sct7cHpPtrUVWeSFBaWcfADau9wVVH",
  "key19": "4RfTPDp2EgTnRThJZZ1Sdd739Uyq1y7YDBPSHJpNuLiJCa7BSHSVLq8o1Pcn4qzZrNVuX2t6nKy6jNzjiXa5rE5E",
  "key20": "46SqVGVPrcjiAznU7X7q5saoTpih6Yk7c1Pjns5NqDN5ZKE13EdfkE7ykP1sqksAcZCZHcpTJQK171or6waR7Esv",
  "key21": "WgGgoTzMG56CpAs9MrqoP8mEsx58HSSfTZPCSDrf6qNvpE8hNaaxZjFkLRaCTaZ5jpYr4TKZNPNDGutd2RxFcaf",
  "key22": "YwteYMQMeqqq47RsShrA4xrMsNGdgvQenLSG18axPLXhNLkwiAnrwJZb7575pvtmCfA8te228dihoNf4Hfw7G4y",
  "key23": "2fHXio9qwZ5Dz1nsArDKoPNCDCNtTG1dFpb2BtXvzsAtEKWGdyTNH2yPmQkAESW5iyN2kr7nJUZa169WhcVDwdUr",
  "key24": "5U1ufETgiNyb38xGx9ZanpAHdYFHTkwqdwH9kSkTYc1HQ1XucoHscLMQWbDWZtpNeZ4eqovAfTepZ6LqntWsx9NG",
  "key25": "SKTbFehzpB3wefZi3rfkosMw9JKTwxYrmBtaMc2Cjhz1gtnYcdnxXjvMSNpzE2RynVZJd4mYKnASVCBbT9NsZEc",
  "key26": "4AQoFBgVmWLRxdrYuqdvLxZnyLqjnKsscKaNjPyX2QCTtcMDcBLKC8G38EktWp6bPR6U667ytwHdKAptswrUnrDY",
  "key27": "4FQU49pFaJn2bFNb1bdkWpLw7EaFy97zjHzLVKrPL5kHukTAo4KVg7UsfmZHD9iMR9WGdo539qvrQX7k6HvNHTnp"
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
