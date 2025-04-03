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
    "49hthYEhTb5qG1vPyMZkkLbd3efErFYQCAX6b7JJV4ZMGU9teGUePBvn2f6v1N5KPJ2MA59Qo6PQowYRQHCTFbvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tjSror321zWQfEwmV712zwaXXG9WVVmmtLfA92AULoTCiCcepNMDUPFT7r7Ad6mJYydgqa5WwwM3iS8keRCXSVg",
  "key1": "2Dg1gFSJBoZdXndjc1yzCL5EsGVRMogZmKtuZe7cYPnRA5AMDbVCxm5AMU7NuWHPe5AY7LNGLQ7iP79wysy4aXm5",
  "key2": "p765CK5aSUUpWQxQ9KXEQFQbWPQGaKHmuyNWT3XvkRp2W9TDyERfFF6MjiLeVjNzhZ4c9KbFYdCCvFCeUfMtoMV",
  "key3": "4P48MFbpSCCPBkoB3R2NPciYuMCH5o8FKKpbXCqFQTzz5DD1R2wYbA43jbwNXqp3fGwwC8yanQQivM3UdkkR9moq",
  "key4": "26XiwyvwGcStanGg6N3psfLmD22z3dtRM3Vozq6D67pKAtLktp3Xnq3wphhPp97Zh4TwqjSNga5T3tWz7VqKbYT6",
  "key5": "2GHtbhdpa3o5F9MKbF4MS1nGvSa1iBwTGewNiV2FAKFo69G4TgFAsHmR7aELzCcNGYo1bs31Siz4eQvLXr32p4uk",
  "key6": "u9RjqvcvFHtZeAi3KbXJ1UGkgLT8bCNm8DmQXStawRZBp4tXXgr9W3rgyvAqEu7HKV9jBykpgtPBnzBexiTiBae",
  "key7": "38bTsHmTavijgXVQ4nYwtyGyP6sk5kPi7FpmWR4oCUjvhhVzGTtDVnY15wpk2BcoPMt2AUVFZxPmhKuR8cmJ7ikr",
  "key8": "3W6eWYbmVJsCMXaDi3PZxYEhvnDN6489XjHHJzd6Fe2kieLVxJ3EuHJWbKgWJ3LBumqqNDxN3PEwmcYgWm1BBg8d",
  "key9": "2D8EB4Uwf5ecehvUMHFSzxZJfdFCJRMFZKuDLDhB6afTnor5zU6h9LjBZ7hU6GdB45Cj6pNnUv6N9d5jVd1WFX5v",
  "key10": "55StX7ZiJ89EJEgD2QXUf2maXjh5V3s1kYNZPXf8pe48WBH9nm5eTmvif2VGGfh7g5PrEfW7Zz6JYwsQt7R4ubHC",
  "key11": "2S188KvfgDyvA7VqooiVMhrrAxNaooK6UV1GtfzTHiPKd9hKh712gAxQheG6tM4Ykznn3SbEVvMKWnaGn4XP91Gx",
  "key12": "3FeUUybrMSiFMsZPiBdEhcwQDf9KepvEwCeoU5931jC47NY6KTcjE5r2axDDr2ZEqXiMGFfvLAV3yHoQoEZVh8Yc",
  "key13": "2pd6jvZ5kbL2SEja5p5siPyLGFaSquNkkCEAfmXodqzv1SUeXczw98RRt6iTggFrB9CeSd6nu8w6P8agfvXbSvUZ",
  "key14": "3CHXvEUbdGLe9ZQD3QnYQBWRdPdbiMWYJWw3QhCffGJE4JNtj7sPt3j6BvbYsxnJ32GGbBt5PSKvdynZfVAd4cR7",
  "key15": "2PaCeXw8Zy8apfmGWBG1VN4qvDufCwBhUguuGgV8iXuocJda3QPNfD2buAN1fiCTiXhpqRkPsQtCrXqXha2BDMuJ",
  "key16": "4SZtL79thtJnTjsx3NLYXUkhGUNbueqhXzpqsa14rLMBnn5P8Fur2TYy36Xxbo1K4veEfxb77tKQB9XLJsXiPHLr",
  "key17": "SN6MedgEPpeeMwDMPNRAaw8cPuuXmtJ9pSyWwHzqNFiX7jdaawvjm988TTggBQnqxGzLtGCMP8hwEtMzr8uTZkQ",
  "key18": "2btDB8V2Rw4cJX84v9jP6udpEgxEBFXT7KxYmFJeXaujmzGyHumGiXSJowr1E59qHtdHQm9hBBaQfsnpevLmDiUJ",
  "key19": "43NfxPDEJymjzVio2PYFj56Z7otJGDUCAtwDpZovv3vYUwmEviQLF5ZpNtLdd4Mh2Tb4119x3iG9qJHH3Cmr64Xv",
  "key20": "5UbKh1y6HFxWi7K7iWeDRjMPaKCDK6koTVhSmcCaFjK2oMVTo6LrKqbkkwxygSLWfSH6kiEJiTBRxZDr2eZyWzAB",
  "key21": "3kkahi5wcw4Pf1jpYLhWJqsJuyrUiapksyZuN276CcbtXLXpQ6qBwAEmNfVosv2ZF2dA8KK2vkeokQEkrpWR5h8d",
  "key22": "jUNPmY4ZZ9YBAPKdGJveB7PvZQxMKkP44ZoL17bT7ciZP6EK8MTyRButThcw8Jcwxkqupn71rFTZeMVEBcFcGht",
  "key23": "Dp5E6c4ic6J1Wg9zQeiv6azFjhTPwknJyEz91py2zYCV6V79kErfnUhCYb7KjwJTUEx9Gz86tymorr1Cc9YtJGH",
  "key24": "31Exucd8NXTUFdMAQwQFjXXgvBDdtVG4Z9p1hnmAGM3N7VhurNEUydCPKSRNW9hkMSxTuTbTnYAyhSwkPD5gFHk9",
  "key25": "2QwhhCUurScbXyupvqoKQ5khvVqtt77uu6xT3VZGHTH5GaGvQunUfEMpwpdpTQjGxvVHFYEKV4tLLSFdECCJ77vk",
  "key26": "21NqgAw49KGAtVaVNxKsHvbghPGrf2PzjtFSX8ey3FXXe1fCJ3wYZxU5wm4MsxJfFuZwCsJJhsZM73zjwGaFSdt4",
  "key27": "6133gHfr3JnBqTpxLJQkha86HjRWd4s8p9oq6N9EsvKM8DFAwA3jBsiLpyQxzS2MKwSop9ZrcS7W9YCo1g9CzVDb",
  "key28": "2zSUKaCjMN6GhQ1m4K91BafXjCtUBkccAXW8nEau9HB11D9rV9dD5V5TAdNJvSzsjAgGwemdrrvYcWyqpw5w7PX1",
  "key29": "33TepQnqz4VGvthXcqtQcL3V3F6nuwLWYYDu4QmJuuW9h2p8YPe5W6uKEjhcsA4u21R3USjj59SKQGAfkRwhCrSu",
  "key30": "374EMUG85sAVM33AnK3tEJHD11XtJPRASrckdZ3SWqBvEJEZWTQnNe15YTZyAtQaHgXHXgWBtvRsv3QecNEMTrgc",
  "key31": "4rV689m2GuBhBGSkQXbAVx4n2gW2CiFGJ4SfVvuDrdP2KT6QJDhhHAinUisDwNAgs7oV21198YJS6EYmqFhsaYGk",
  "key32": "2UBLLEG9WMen5c33bhHFtZVaP7sxH9M5BmCRfYwCbRkMVfpAuUxTj87jhSt4n7fHBnZRhsgHZp4YgFjmwukyB86h"
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
