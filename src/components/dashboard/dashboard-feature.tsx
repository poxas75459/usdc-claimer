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
    "2MwfHMGfNFq9X2AcjzxzC3FTxLx1Krmu3j82RdpM3tCMFzm2etbEnFnu7gi9RJxZ3CmSJWwC6nC8T7pPVmu9yDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M3PzU7XAXVDLVL8djeSTSeduqseT8kKPoe9eGyvgWv12E7Tr5aw2SkLZssQLVu7r1XNxP4qMinpRpRg8MtH1E4m",
  "key1": "K3wXhsCg37eG5kNoAPZcsfQxbyrgRmXd3hd5RWfewSKhTMuZUe9FSRUtjrUzjBJwmirorzHMEnQkZndCVrfUuJz",
  "key2": "5YWjVhhxekp7pnECFfhJpE5hpK5u5WSck3SLvDsMaJidMvAsdQaKMKCJTQcCJYSRxifmNdHDgEtB8jLng4XNHe99",
  "key3": "41o3Noy7Z9EsrnFsoHbk3jhb5M91FQE3Gm4gotGGMYvirdFSwLWz5UcQboQS2FNreUz3zDrXBDWMrWHZ1uqznaum",
  "key4": "4PCvVi9QEVgnHGbi12JCu6sBReLCThnYRe4M8XM6gavEPbEGo8vYGJpfz4RWaPctKUrA7gn1pzGUiybdGBgfN1y4",
  "key5": "5ZfLfb4RJchLe1tnBMQq1Z1SfYzvZJEXoAszRRZZkJKrZKnscSWasHMWXhQ3dJcVk3oXauUPc6AS49jPxbiZ7ZRM",
  "key6": "3Nm8Gu3b3EAyFYwtdgzoFUcFNzFxX7Kek8yLjTeLxaEha1eJwoQRNUFMwZNJUYtdQNwygx1PQDQVKLDjMaWUK8fP",
  "key7": "5sNyKkD2AuneSmEMCsDdXuXEE9CEARaBo1eGmw1nzcVPhc2hjevLKpFDjtHoVDE4ZN4LXAPAy1SDpzwfzK7nMrrg",
  "key8": "4wGi6RXMJuJpUvRAz9Fj9SFnLTKwqFxaafBFiFRhMcPxzsavYTicuZW1DBjtbMTXy22qQwTUmQ4TFsV6KjReZqrE",
  "key9": "3zyu5sGMeXpWwnSD79J1ocXX9Cyo5PpLQe6Ut2Lap4W2oBJ5YEWuRVg2Qzn2Rgg1e8NrfJkWwZ5yE8PtmXYesLpn",
  "key10": "3R1i7FwRCBRAZEUW4vmAVvP36Y3euKcymt6i8Cuk5GsR9VEn4ZZDssPYVDwA9PRkeyrC5m3G1pXhitQV6Q5rsxbY",
  "key11": "m1n4SBzc6Hu7fsnr5SNsJ2rFq1zKaBcy9Tz7YKtxuqVWEyHv3bmFGDzjtHVSxsRpFQShJ3DHo495ETWAanNk4uP",
  "key12": "L2CMJLzmq591282t1KupjA4GKuRnPn97Kksr4iiaK4B44Cmv4AkfCbWLuX6PDh494DXDv4ggysdZD1vPgeoTNEV",
  "key13": "jaaUqu8YY7HuSkV8o9m1sLPBHKNiSZnNTVY9Df2jw79JshgQyNNQ4NnxcbJkf5wfNz8nGL14riTJAK7zUXEK8oU",
  "key14": "2GkYndM173A5DQQr6S1KcRfarCGduv9T47cJaq8BRxQkJjLrCbVh43V975rS8woF9WvXFudd1hqFMCzZMxgYhmaZ",
  "key15": "4iEAHyjjx7dRneq51598wzphByUQJzHMGGokj53gZAcfWxwCsRVLgVwWG8Lye8N6P991RV35mHQNd19iB3KspYVs",
  "key16": "4MwDrQZFX1LjP4bnW8meYWL3hXk7iU4Vhvfa92JyJiHK9KN1Kr5AtXiYQnARxt8DFCqMzjr5UrNkYd1KUbBVkexK",
  "key17": "4Z4BZ4bDNi5kDPXwph5JdebFmR7N4EcdUFsTsvvmzQ6vPdRSFSmBBe6xkeivi3Tvdfw2TPqVsQrcCoyn2998Yo5c",
  "key18": "DVQHSWWjHCubx4XJQZ5rUKMEG7BvrUXitZL64THChkiEc3rJfr9E3Bj6poXJovKu2hmMYByC42Da6kafy2vJvxd",
  "key19": "3Z5Yt5gd8c3g1bLuRtkY4d9FWeDXi5TCrD3Zb4ogsQ2M7CUd6XFyeoGtGXfUjK8Mh6pVgsYvRUUagnKCNNZ3ZH8v",
  "key20": "65YDaJP9AcHcWZY4BjajruLw177SGsQECtTv8bRp8WBNM7voiutEJZ16ZD6fzb7cE51Mqj2YVVykx2qDPfJmEHTd",
  "key21": "cBRCrYaziYBrzPT5CJaevrEgR13g3aMmbN297fuEYwdCNB4gsb2uwM5YFFexzHs1uczRpxKepUYM9XFbQPVBq7J",
  "key22": "5kBosdsELkbpP6UUNcFNkQ8HBTMoKfFrF1tp6y1TeAKSdPhnXyZds87JiaRrxXy2KjTV2k8xB5Mwarzu5XTWtcYu",
  "key23": "5TxoWAvtyRGnXNvMwPSWynT5FFqE15kdpteiUJ2CZB6NeTWiALCjzJPm8PZN7T4PxoGcdiYobe67C4U7ShpnPK6q",
  "key24": "35FFfiAsN7e4zEzEBsHKLxJVTQQ5sXExdhcigTB8HRHEYJvDwZD73ZmqHzZtoL3KuhnVdGYWGaCPtUyUR3edNcAz",
  "key25": "975A5zKow8e7pcBu7sV32c8r6hJEsxJ26NwEF6QhwwbKWLW3BJvitUsAivyztEHr3vL3vL6hKBvnbGZg6AjQREJ",
  "key26": "53ahKkyw5hHnrqCz81mCWUxN6dxYhp392msAGW1CUHu8fR9Hm4L6t2AGuu5mjcMucnFdNeDo56kWzv6gk8t7wEZB",
  "key27": "2wS4bJB2KdavSn73FLrHbTJpbvHw8XmBjW9Wasymnm1F8xwMKd1gnqvmxi7iwgzQfxmWGiL6ZEv6z8NJzAW9svkM",
  "key28": "7JTtuQw6LhQHy9jc4EeFz42waHymHZePrrzp5nSfKZt3sbjRDwns5WGUB4uHZxQ3uGH3PQxkHL41EY6nyjUbZfZ",
  "key29": "2QTnXwU4NDPx2LspY4dHx9WEn1xCvCsXUy5WvG7qTJ8rzXft3V8ztcTaR5rriZpaB6aUuXji4jAaLYWvVdtAB7zG",
  "key30": "4SmNm9R1qBmd8uyVkToNVS3FDi9ePQMzoWzLGZgWaFqx9Mnj2KBT6by5G4PTeHc5CbAZCZpHs3bsc9QxtL6SxhZ",
  "key31": "318JmSNweFQaPerfYfmxeCUqRPdM16hpuTAx1tDkvJpfvGpmEhQAkaL9AdTfXdA8zpj8GYHCY9tupUdi6Vz5N9WL",
  "key32": "2PYAXvyaobSuCt4xpnBjVgEJhjtnqyNPqUWcWfSRFRSgE675oS3NKwiiBSc582ihGuaEd9BynbDd9vscq2s55sdo",
  "key33": "41fUJ6cVyq2LzLaTrXNwH5UXgSpsxx8SVnjF4sP8QfSf98cAfodLMfY7toTefGj2qSjBjue6yst2vH7ua331EZsk",
  "key34": "33WUjFJCYAW5msWd1QKYUVthTdmDTrLdi1dYKHx2eJdYGQbLsUWomDME56dN1D6oKPKgMQuqxHxsxFNJkysW3cyR",
  "key35": "28QW8QBtFSCf79xqYG2RiPr26Yriv9617fUMfohZxp5EPQrzw5WAzSfXy5n1Rt6ZYe2PqoYkU2naJDQhcyQvKgFu",
  "key36": "65H6NxrjA6JoTgPL1rCdSwSinCmE3LiprB1PGDvUwf91mEsfF2LeFukUQVRcPC2Qn69k2BrTFjhHapnVj832pzxa",
  "key37": "45qu1XJMduSbUoDKYFDGfeQ5ExVqMMtU4cZ9CY16S4dw8753pJSzQEYM9EPRhs4eJtyNQs1haCgXQXK9Ef5SV6wS",
  "key38": "619SGqDoCWbxiizRRoSAkcLDABCXK4zTiDf8wYWdV8gWynWrjeTkocDDb3nhLMCU2onCQTTqEaWkct33noqePW6U",
  "key39": "5yUn2BShEA1fV7oVY4wGiNLnoXkNY59iegGcjX6RqWAhe2gqhyYNHsrYCZJjwmgZcgRe9DLGcoE9tjwWMHRju1nM"
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
