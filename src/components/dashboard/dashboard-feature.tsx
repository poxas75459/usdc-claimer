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
    "GJXy53Cd6iTzi7KnNdyFJEQRpUbPB8fHACYLKaERPSRuxN4zJQkit5GY6yWF6TB8XPAdqY94YkW2Cc8MpHUuqGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t88df8VpxxPNxWx8bKugsCiKjgNEA2KNsFPhKWegCqa5X6Hz8B1ZVW7iNpuFQY9Koj4snLv5VxNAB8qdoVrwaQD",
  "key1": "28niK89VPL8nGyLYbCfjTbWJFJZ6gdCUxtT7JqWo2PUxomNJGs4tzLwWf9bHipUSVQxZbiNJuH2UGR65XzN8BSxr",
  "key2": "5JSe3NspGfM2Xr683jodwHA5XVMA432qKFYxhXoXYnYMt4cyq3T5gA5tnZHzcR7dzND9KA4eFTum4YSjTQsY4RBB",
  "key3": "5Vpugy3tskPN35sgSmtSmEJ5kU2bCaDUzA1CpyK2Qhp2gHYrrJG1tsb2yG2j43a9HpF6rGZuJbhxwtYdYZzziSWA",
  "key4": "2FBahikCvAfj8Lo7vsm8pVBeBYH9jv6RLyYT3iP2F7B5XM1VB3amCxqRGBfsf93WgJi72GjavZc4WECgKPp4pXq4",
  "key5": "5vjMVMubcdEBotZH1eFQU4CdoZxP5bruMqkvBiMTfajtGShXa5QYER7NJMoJSyeDT3brMWuFEsx5APdGXcd6hc8c",
  "key6": "3p6pAQemFYTLP7gvkcBKBb2JiBgfL1UqqGygtd2SbvvdznE3TsC7Z1mSeF69FbGhkpe98u8UhGnQm2ZtBfapFQZG",
  "key7": "54tnQ2xbCQXvZxPESVkki2fsBLo2HLYRy2TLmyWqKMGcNc6yuXEpKZXKtezKg6ViC9efMXnMPiTuJfzLwbh5xqjC",
  "key8": "5MT8v9SGKEvyZveaDw7g3MhwKg46U4AaUKG5WNFZvY8p38WtkKYTiCTLzpLH8oMW6FFQCBj7PC7rEjyvg3sQqj7",
  "key9": "5igVc7r38zo9NUiss2kKQ6WYK8vgsqHVbCzxhVAG7kC2Yv5GnSCkA4Q7XKa4a9iGMdey52Q41sUNKLmrrC1fpptg",
  "key10": "XmLB5vPeRBLcqdPTu3sEzuMn631So6jGD95XvMTMLyTssEehLyiQtw6NbFLHSijuMxBUABD65oaMF8ic7rH8wde",
  "key11": "wfdTLo266EaDzxeEafru1hCN9Xs8vmVfvQdc57yVYGSEWGN3QMwJCUMwqx8WsHtTA5b9P14UGySG7hHtxxhuzC2",
  "key12": "5qzvoophd1jwbqMC2vUo8Pi4YTM64xRoRCs1WKUMEQEMzYcMvn6pFg56RfkaETc7toswcMV5wYNGgw7td6PobG6W",
  "key13": "3tG2vfhPa7HtFS1LvXxYUGerdM8Y9trqCpWBWaeNWVAM7xAupu9K1N6v9Fr7B2kdBM75wx1YhZcntMSYoXwbWqoP",
  "key14": "2uXSwGEZQ7LDmcZN6zB1sPaN5daJd2LstvjRu6TGPFxmuyXQCduVN24Zq3s5kJ2Tjj7enxPkkkYhzSgmjyY7ogJ3",
  "key15": "4n7haEg7eErsXNV4uuuG9hgeEaiin7enKYxdZMsPGEvwfHKAo6wWtZhiqzTQ9vr9dzJ1JgstrTV5FwzyBuv91o4A",
  "key16": "2UTuGYYMiPYiAYBjnKzHjry7q7QtoLBeZ8KKgKCdCJjsXxAwYKQxB2fYzroAnqesAgf6M5Q9Kb3hqXJ3LVd8bMqc",
  "key17": "2yzR4467cXY9XyjeQaBZBqbV46Ui3x5kDkRwu8RCCXTT389gtFmS5tr4EDSWgQWfe2MZCc917dkko5yLSbNBu3c9",
  "key18": "2vBHR8rgGyWD6actjarQmC1SVHXd5PNg3oo5SYeDJMWGfoATjCfJ6mGmFr63j6FivBW1fjnnNsEyE1yDFKZxV1EN",
  "key19": "5PJ9SXAJVCS4MnnkC51ApiVnSo59s12LfEJzAWP7DiyMP5V3BBPe97DYDhFytiGjFQfhzddntDpt1dJLfV5aU77C",
  "key20": "MhwFLhuzAjimFuPQE3Rf1YhFqfRm4nZ31Es1TE6g5F7g153X7ycM7DezTrweJAzPoL8TkKGF9G74hSqvUxVjj7d",
  "key21": "4pUWFHGGumcMLgExuC2ZJi6Pj4pfzb8dYznMy6PNxeJWjuaYmGAjmmz3qFgagwGG1ZvZcpfGk2oW8Bav6P2a1nws",
  "key22": "2GzVyjC8myJhk8YYrH3bwsMbWKj6WehmzxLZjCXkqcUwQvD3Y68wYPz7gQBGiyDerryqWLRAeSVjFrucbu2UEhk6",
  "key23": "53xbiyurLuCVEkM8QdHiJy8k47zPo7QJ9i3fuKQo8V71mdV8NqVGFZsHJXyBam4fw8BQ181Zrt35YC8H2jsTMiQH",
  "key24": "3rT12ZHa4wqNPe3aexG1KRNyywzHpqgtg8ebAWV9zCKcMFco6cgNjP9J1uSFvKQLcGVWMtGBZJK3MCZzWDyFyy4k",
  "key25": "53Mn6vtEenU32mEXfBqFNieLvj9LYyscBzA3YBm7Ep59gDDuG92K5gcZkDe11g2aPxVnE29nQp1AL45pnn73jX7J",
  "key26": "Ky4RELNqfYs4THuMdrJ7qYBkn9zff4yWNABenJ5upv192ehn4Fgiqezh22opY7vHZ4JW2gtgJxBf2KbLicV3tCW",
  "key27": "2p3uRfafv2ZD2VL72Uoy66wGztq9Utxkrd95xfrdBvpfNCw7YsPoaATSxgBznuqNYzdTtQBf81aha9S4xJnZpoeX",
  "key28": "5vKEED6zf5gsGKs14Fe7pXnq5Nz416j17U9ZUkMV2bPsmc149c7mUwRcdkz3adq2o6zKS3FUFtLazZGj28fFm9Zc",
  "key29": "4r4Qdij8TzwXRMH2WvQwHmByPAEpzANeo4XepgkCZ5goRuMwsKxEhXSGa7YzfhtDnbzNY61BKybV3Wb6sD8txrL1",
  "key30": "2QDWHAn8tqrjP167rXRhFWBMJWJaWMe5sFALMdNHcQb6Zs5uK2L3A1nmY4H31whXwmeWC1nMciK159T8aGr8K7op",
  "key31": "52gbGC7JZeGPxUhCr1uUXN93w1MAHLrFBRGoAL1g5Jui8knM65jNWMSq4JnFss5onLxEFMoXYu87HjzuybZekF6s",
  "key32": "5Kzq8BpmfoGf7DGDTyt5NjNY6NBgAE6pk6PzXz1swsaT1fHxY3pk389HfYZ2CgyHMZYiKVuNeCq8d3DfMVDueKQW",
  "key33": "3x2pfPdiUkH5rXQsmJmEZtM3GE3YLBS8SMj5sxD7eCigDouuLP75BCfonBqvThFd7JAkVdC5Wwwa5t2iQnbHQ6NU",
  "key34": "38JbtunP6rqqFA6g9xGjeYYUKaw39Wft8vp9y1AaP6MQpaRKd8UHGBGJPeLT7Ncg4ptRsa4X1azDvYyoECKHyZYZ",
  "key35": "5Nn4eLsVgK9x2KwgNxgCZQEJBc9FnCXpUKQZTQBRtL2zNqf93aH48tGuQ4628y6Aoauh1ZzwdafSV4GzwxHSrKaG",
  "key36": "5dapveTidEandtsa28qobFSWU9KS89HDqNkuKpgtbVDNPmQAVe8W5cbmaFfbn5qrDd6KyJ4djvuKZvAiGzhcStDi",
  "key37": "5aYQ74GtYidXP18oR4PzDMcA2TRZuCcDUaLzds8My2gHGkt6uT8mpjss3NRRhJFAWhQEpV58Ue5mYZYwAByoXUaA",
  "key38": "5miM7j5xNMV3X4yFSYhxwy7k6HwwVq3qC6qAKSYBeDxmGsQ4Ra4xAEPEj9rW5XYUEUUSxRwNoSwNuAMVXspGaGn4",
  "key39": "3zv4eL87pZgN3BhSx9EJVbkofqSGsBYsxVL6tewKuDGdYbbsjWg9yQQtTWLez9GeTrHWu9CpJiSgr8pr2i5LLoLW"
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
