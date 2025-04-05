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
    "NirfqME3EsxW5cbqweHBVWpHMe4EXagrWbmwLuYBRj4XcibSfJ3XEuG3tgxYy1GEkYYZeezRwudJrFUs2CJtDky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tfK87RfyVEWukQBWxC3Rdgxyb1tJ8C2JzyBooRLSp2uebcRZH5rXymTXLTpFdbkJoLJ8HNW9zzxrZCufKBCXbwv",
  "key1": "2Ewf1dMRhqzwNj9jLXy92dPuKsjji6sdGyTgytJGaaPGSDEvQmYFY7EQTtGXRtVtrLhg2McQnE2RQ9LHDnz7u9GR",
  "key2": "2RKasPKLuSUXbWr7CWcxP6bPXGE2prYLDTknZces1yrzMzc1Sacor3sVo92aqFaM7rzNHH3VPE5VEvPMqsnhZ14s",
  "key3": "4M6JscqmYNV3XXEw6uFKcmxqnyjE8nKq3XsPE8vcAam9od67k3hwdjsbU2FxtCmY3ohzTMRQ1ENCNdTFVNtdEVFD",
  "key4": "8nc78xN35wGqVn8WKmi5taxfTsTtVgpq6bAwVttzQHyiHX4JtiRgqX6sx6vFsVVnWxvJw3EoBERzSmQ36QxcELU",
  "key5": "swAcsBnW9Dp5SwLW3sx9XJcdHGzXh4xTcn8ZFcGwzzCvcPwBMKVg26rLwvjDjTnuoJefG4CyU8aMuiBfWHR55vR",
  "key6": "2h8JxabjTMi39nE3dcgNXoo1Du3KnEVbA9cv5JrLXSvJJo4hdzZmbhniADtojkrWnqjGVFtj1BNF9GKxei4Hbmt7",
  "key7": "3swEnyMPVi3m3Z8TdgpNypWpa1r923tWSCxcEdNFvvCaMbnrdNbm7qNdLk3ZySLJcAQ4vHPfmdsgmBPgk1Up7ijm",
  "key8": "35Tmag1W9H3gHSeTb5heBLkDNxyHL1fqttpQ7HzvsEffabhnVFKhrj82rV4TnMV7nzN6riGromr5ShCgXDMevijp",
  "key9": "2xgXeLewcSLfuZPeJqGQ7Vru5UsUX8GLJQxAXHdRrmmztw2gDgwNhqN9ZRBE1t1LMfuhrjaZnLZA9MPnLMYpuZz9",
  "key10": "4MnjaY8zSE5ZTWuXoCuCZorLaeQEFL8iBXuYbAL9SWNUiyPBedJXLho2Wr3bLxXqmeTW1f8sX6cDvSPpoAGWnfCi",
  "key11": "26UPFd7Lzp6qf9Nvb5VZeCwcCs1QYo2jMzLc6McsTC16JCGq4MyRVHTyywg6NroA2cqCm3iaPY3NRp9mDDuA1rwr",
  "key12": "4Vbe1y4rEafbvvtFTp1dx6N2XwphMXcfYvcdBBUADjMDrZCn9tvpczxkgrFwWzexpWeA8ZXcXVi2CibaFfhX8pu9",
  "key13": "2frL1jkPt9D6ShqtJp28fJ84vKhjvPYPzfdhCukr6Mbfiu5NAqdSg6XN4vhiMrM3xajQnyEgFGC1gKwnAoEvik1V",
  "key14": "3TdjGQJkmpmbEXGwnAEdyfEKk7zkFMMmzFUXzDe43SXMtsisR53ojEL5RZdycpBZC2FKGdzERHmrtsmWPGD1EPjX",
  "key15": "sUCbcvfmYn6MqMWLpLT8Nt3TixLF5Dac29orAtowx9UuKba7wwPFB1EJ2WGTzyZM6LdnzghvFH7EKJjvEoiJSEe",
  "key16": "2EKZDbz4iJ6bohK6yKoLDeX4xmdHrujq1m7RUmF4aNsReL1fQi9fEmHRfNHcyJDe6mTYyCsLp7HXP2h9bD3tNMVV",
  "key17": "3z2g9QwjWXyLYyWzhxSjvYEGJzFaPMNzryDSFMZZv4KVciBhAC7XJzjNCHg9wDSzeNAMhaVhxaGQcRKSeX5zyLnt",
  "key18": "5TPgFKgBNFiMUXNMCJJdpVgTXXNAdD19TaGFXQVLBwnb4k77FMyq5apszxvW4LRvmoXp1bqGBK9eLcBa4naSesPq",
  "key19": "5Q5n3duqaFbnM7QA5fMgZyCTeywjsYEqjDxe75kWAgk1FUMDxPV7KjDEZ4AJyYFZLHJY5RkkemYZorNw2EbPUKUT",
  "key20": "4ZKTUeK8hvMt15fzfAdYJXj5cFXMY83Adysvk7oc1eB8d2jZAMwpnaszw8kVvA6wVMNQpstMeggLYF75bMx7eiq1",
  "key21": "3kb5JjRBpCDsZgJoUKkeDGMU64LF3m69Yakca699CrijfkmGwDwJ9XzfWq9GE9YfLNTVoNKv8kBKTYHKjX4MftUw",
  "key22": "3Hqf8NEYYBXeoPA2a6kHMatfnriYdRgubDasuL4fmGxPMiEqMLbfUgdWDRQFTy32oZgkrYbLF4dFWHYmmg6Da7x4",
  "key23": "2taAydozT93UCZU1CVzsVN5qpVPrNdRCpyhZSy44a5r6LpQHho1wfqaF6CTko7MTqGwu3BQdZN4E4H47Y87ncP7u",
  "key24": "5sFYtAq3fjnYdiQ2m5kWbHrvbjnRrT3pRRm4wanvV9DjZmKGvbopxh74rN5C15mKTqmKijnQxhqAMk8ymuQSg982",
  "key25": "4sWtivmx4ubzaUTjRpvj6GBVspjRwVZdbU7ewCNgpyu7q9XUNZHeP1zETECGxt1RNAdsWfoANXqxQAcCCC9BrSDN",
  "key26": "uaNMDHNJTn8WKpMBDoYH9oWpjSVKjhhpMEQ9zZUNmCrQvEFgASZnKsjB8TAMNtucBFzF8HXUqNpBVJ2KMQcCSL2",
  "key27": "613y2pLDheBGUVTPHmXHa8vtMqNNDby4ktty6tWyzcpt5T9Rnu8oarzsEiagurTPrYds2rNUW9bcwNXuNu2wPwJ",
  "key28": "29Pse4R2TU6LzM4tbFBGzoMjZ8mYc1hA9GuUEs6dFKqgfkp9zn7RVEoK8xTcuSGuNy4RrFXM2tLndhSnuCHU2KP7",
  "key29": "5Wt1QNA2x9YAPSnq45DVVhehjSsrW8tsB228zuUcTttnvdEjU8mnZhdCUVcSKHvZyiyRcGGfzz8anwvJxdWRiKqE",
  "key30": "ftfFeQfLqs2YvRdwvmL4ytGWSG9AejKeE2QfZD2RGPHBJJtmF2DiDcYkWHEDKfpVphW4b9FhZph1da9c6SbPi9n",
  "key31": "5YWau28hN7otxHaw4svEtVMYtc7Ku26FARBZ3MuGQ2E1pA6PypbB68ZH6Ms7Dig6kQUoDbHsMTXLjyuqo1aUrP69",
  "key32": "5vvdwo9w9CnGM2dnFYGvZoLELE47EKpAPFvymoWHYmYtQzfJYHJYVTKqh7SyjkwWJ2trHWUv83vQmwT8XXksQLNM",
  "key33": "5G4c355ivxRcZMssEjbMb1oFy1dT4A8gXCJGVgyw82WsaPdCU5cJqF6qVko9iciHDDyQraP3fCMuWDSZKBSDy5go",
  "key34": "3yvzoAyu7bReoy1d2iqLwv1ReoYYx2JNcVUeKqE2MY7KHgiXezCCcLJguk7n6kipyGXCsDAS4pB7uWRmVfxrZTLD",
  "key35": "dNxoTDJh12i9pp4z35iv5u23W8mnoGFWDNS1MMzGQnbZHgB5k9qZLvuYe6Y5A2okvFSjcf7EZSnyztJcmq7wM4N",
  "key36": "21XKNMucwmHYs24dBWH2GqgSgNYXT4HM9rAwMhVus1J1cHFGEr2mE3d3FmusaJUe9EJUuGnqmgoityZdBrUiaxvE",
  "key37": "42ZLZ3aStVkmhJaqyqZHZMv1iDW77LzqrckjDg3dpfcY6jDKicCuT7aRRdiCR7kAx2g1S5wjvxMAeZwJ5cvq5jKj",
  "key38": "5ukBdx3yAiFKT2DuNU8oknyyBPvDTrsviceB8fERmJTRJ2yy5HR6cB95A31MKkiQCiTA46BVMzLWiiZ3Pooaq3tw",
  "key39": "nh6fnHafuAsWBVg8KuXefjZTEwbJz8RuVcxEjDss6LV1D5tLb2hjw5NWjYMvHFziSHuS6CGKbCpwD6NoTTGehZx",
  "key40": "4pVniH5yi3khVqDsZLexQkyeGBHZ19hE9avQFenJHYfRKkgVD9sqK2nEfv5zx3yFJfgKAv3P2q9hDqUrTt3S9vuy"
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
