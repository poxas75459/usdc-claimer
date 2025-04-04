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
    "2hZyEC9KHt9aPZw6ihEwuThwPX9Gjt6vSZSphnmTgr2E93kAvb3T2aUS9W9n7wNCfJ45zJ8gFPX5oGrJhGS6hnk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G7qvVm7w5hzEBKw1xqo4LjDu9B1rGUkn15Xv7EiueMtdUqX927xDqPNgk7gyLwadhNY4Hcrwegjuf1rq1TKM5am",
  "key1": "2eP3MQirkG4Wjh58GheWBgY7aRymhzugefYW32XsF4xLeQdzdEhUoYq3zWhRzYGBygiw9NmQqpcUGVVCwDNs7Zdr",
  "key2": "3oHQwCgTBQqeh9deDh7LEUbpDAxyoRG5x3T45xXAGLbTPwjKcgfuvQmsxEKzRcpqnPiJUmm5t5CRmVCFFkrjLQ7a",
  "key3": "3r7hQCch8BZZuLqog7CDxDZujejVQhEQpQCsbFag3P51fG9Jo6jEP6V2EHAviUKu2AeHkdJq1hxmn6vyRnJYe5iS",
  "key4": "3g8wdxMwXTxC4VkKPEW7fXd2oewA2d3dFs11LBE5AByZTTdrwpHcEVpXY7AfzfQZaLpcX5JLvEsh4LgW1GnUrg9C",
  "key5": "3kx7ocXsjJs8vKcJQorCWY1VRgCSuV3ikhmULFeopVbKbiJzhQZHNjUynTH3QymG8dyqW9jDVXhuCkNmbeFqeNGb",
  "key6": "CbVTLxbVqWJ54WnQrib9GUco4o6tucaETWVSMK9nhiLi51VvhWHQiKZC2W6epr6BSffYeZsENK2bpayGg35uYP6",
  "key7": "5vMizUqy1LXA6vBRaUSyWgvwhdNRPrFPzgbzVZnNEEAziyCiRqTMXgZ1hhtMz5Ear92kHtt1w1QzWVudjE4TcLmj",
  "key8": "27JbnJigE8HQqiRKEPqxtMVKcVwbD82JQpafky6oowPSq574WSXd9Yba4evTV13VkUq6GfhuYKegoP9khzVCFmmm",
  "key9": "5ZZNqo2Vdmz6SREZqAXGbvPnvThNYYz8994kg5uRRAdSA1yz3JgGD8uXcusqubJrvLfXKBu6M7XPMPBU9QCiQygP",
  "key10": "3kBWwaEoPY7LeRvXgUSe288nf9fH9E7EotV73yc6b2Pcm4Hbpk9tCGoXqNyqpTG1WqjcK1ETaCARqwnkjJ12bmwJ",
  "key11": "2wihBRdJw4tzmRSVotKyZqcgSRNaHAeF3tBxGPYAbsULMtUiKvmSNeYR7bqf1rZwLGtWUz6myQ2Xm93Kny9xrjem",
  "key12": "5njJv859kb8Md8AUtFGLEKKUxuVSSEhUJJQnXp7TbL9yEBazYtrQL7m61wfDrkzQD3iGMj2jQiVDg3P49Cox2Zdr",
  "key13": "4UCG4JgNYg3p6afEb16MiZNvXJ17Nd7cUvExjonJRcdUvTEyrfyPmxMaWNXkz6gdyuJaYqQ3P28wFxSgEQiJwJpR",
  "key14": "4mC2kKgxDceveUjPn7CXmxBt6uNwU5LJtmBWzmeAsh4nYGFdkqoRX6WrP1Y5zzGY8qq2suQYp5vaJkL41sEi5Zgd",
  "key15": "3cR1Dam7hEvVx7zRQA4rdLErGzL47G299XPZH66tyLAQbqudE9CkxzP6gRJdgifT3dmpjoB6owG4X9TPQn4ZbD7Z",
  "key16": "4Jrj5vekijxtXoWTxn8aNE6p9YefTYdzA75As3uTMmuAdYxyzkHvLvYUvWgQrCFyRR7eDj5U9h3dd3eFWCFJG6Mu",
  "key17": "51SbARNXba2Dj9u619mcBgGGZJnSpfduiLiHVr1J2mbUkBPq4fRjn8Gbr7RWXFLr7R9LS5NCGFsx3anzVJZPFLrw",
  "key18": "434cifuhSpew48qLbAayA5B8QxFkf8J9JBvMe5U6Dm7zXu9F488Wfb1rAK2LPkUe3Kwd1PfVTUfPKmkRh5HpkW2b",
  "key19": "KcVcFHUvaYaDFvjVMECoxW7fEfa42ir3eWGTcqinPdqiq8nLqvuzhZ6HinEeKcLc1c24Voyr6xJ6sbnwoDTeuGp",
  "key20": "gDScu8WHeDaQbGhfrLX1wQxhZ9yDQkK7QrbvPLuNsXjrdC4q4vBh3G44HJvWEZixG5DWdce89bxEJzGvqzX3hx7",
  "key21": "nq1PJ3bjwi32WCDe7exhVPRXXbzpCuGhD7341mdw6wFzvPwMk14azL7EPs71nWXSr7H8z5zbo4hoiVwgHvvKFrm",
  "key22": "2VVi7w8WdjWpxuCYgp9uot4JcBsjCGffa5tHvMQ7J6Axw6Dox7qc1nUGF2znqAxAvXVceqohD1xY1qXM5FdcdpNS",
  "key23": "5EdDUVyz7EiKtFVztccRaMrMz5C1msJ3wVZAL3aMERviS8X5jBsTTKPgBX2tNBajArTLdd5nUpELgRRiGxMBFqZh",
  "key24": "5JJi5tfxVk4vG645bcsCPGCr64jq6AiaBC9CoXFJyDBPN1rvFVWembVXTeu4SagADHeyWXt1Sok5RRRotMtY2Gv5",
  "key25": "jPUbuJydrhTLxwSPRR4vRp7wGoCd7APwpzQDCFkr88iza4qT312Kzo3DWQxQ3kttUL8bsmx33TNFdqyB65QMCk9",
  "key26": "3UD8MZ8y3iMVvHsB7UJa2S9WwdfkjreP7iCe48vqTXMJdw7DPbm8riDykFkFehQr6MidB5433gQhtT7YRhWEKxVc",
  "key27": "3ZpJoegr6g8SzCb3muqyTEwCEZWBw4EVtUyKEfffwdhnSaiifCoQzCJJzxaTmhLxLDYmgMFriaQptesjwude3pNS",
  "key28": "21zX1tKRJPhC3zeyxJnrStRXqMJwZQubydifg3gJ3j1AKPeoR566faRXywbMttdVhqedA8dJukV7QvjTiLbZh63G",
  "key29": "2wkVeFPdnHbxM3nn4fWuGsVWJaWNQ88LyA7mbshYz5Tx984pstnP74RgYtKGHZE4jaHXRzaaCFSPj7eQfWFVmM4W",
  "key30": "2S73mzhPQbuJ8bzc9sLjj6Qea97ime943K2TxYcqHLb6zFtVXvbmzoUMnAfWq5abqGLyBsWZtPARV7DosUKEUrAp",
  "key31": "4GneGxDHCjgNCPtvrxZyxEwJ6zcP9vcqc9pQqPN5PWV3RhdU69YnrZCGwwUiL7hbuB2971GDNVymEeR5SnuWhQ4u",
  "key32": "4UUEwxFvH1Jn1UsHw47hGkFKvznNFQE5ePS9JbMFmYp42vYsWSywjJiMjMxecPPqyjq6NzXrZYAyQjpKZXfv6Z2H",
  "key33": "3E1efXw2BUBt8uTqyN2ZrbiexycKxu1fSne3HidHAU2ia9jhLqUeYvLKCMBrp7RWvXKYRjohYgRAG2syN8n3dDw3",
  "key34": "5X29UW3A9tU9DBJqwgCUEqND9c8Z5ZVVQfwce2P9xPzPdb2sK1gS2s6qKHjs7QJkzVg2zVLvfTA2ytyB1LnPwKHp",
  "key35": "3UST8YeMz1tnW1D3Z6QeWTBRsoc9amXvqwFuP4EaGRXn9fnzvkVEongcE5Lyw5egNRzwpr9KKPxbiiJSap4scyEr",
  "key36": "4Ma6RBYMByZ1CaJ3EzD3abvGbreHacEvD7tkvUo5NphWS7r87cEix4JTcr36fHzLx5naMpF83tMX8qLMkFPisiCg",
  "key37": "3Sy7nYur173pkUWsVyAhgugpterQ76hrj8QGztiFB2SWNt1VM8fkiLo1TzCXJwSirQbgYEKouAqbfbKUmSwVmoaf",
  "key38": "48A3eNKzNJq1FUjEom1tggX3QsuV9zPUVkEouAcJfCUYN2rFmeB8QoD1rAaA16LzhtQhZaFtghQubYKAJZc5ebEs",
  "key39": "fWbgEr2HC9755jGpMD8TtPJDy5RAWNvqEPKH85baLyny9RFjTQVEtTz6K7wRQZYnHdMPRtEGfDYVuRqgWn8Nc7r"
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
