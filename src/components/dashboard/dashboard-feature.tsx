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
    "4bWUgnTaEUZpuHiQZXLN3dfPne1KxcMSctURbPo1SEAWRAUBfGmgFJNBfVXvZK61p1ZH52eM8NbzgtBAgQg5nr6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36aSRjX6zvBym81nQZ3mRQRHeFCurGAosdT1ZhwEqVVRowi6ehk5bcngdk7rg73wtgsJjw4BHFNZk529nZSpZaRj",
  "key1": "4eFLj6qhEs2cWsmeavVTBoiZ5nVft9j38h6zs3XcrnKV7Gerzij4JBuQvAhgX3jN7xH8viXBk9TRM97r6gUbqZqq",
  "key2": "2bCXSyW4hcP2CS93uwFSPKuQTFKdoAuNVybR7PFQg25PvszVaVWgzn7gNQtU5wBWMudrEgujdfUqEpjA1Z1TPrwf",
  "key3": "4qH3mJ1JHJQsfCyjFnsKTnpHGHk6LtQYRcYMp8xbTrDfYuSjPndFuGtRHFpmDv1tg1iDbCmuEiuyiSF2AkRfptcu",
  "key4": "48FpTuNMxahe3F5fMu6Dm6HvS1ttf4Pv87yWtr6jDxrHfBs7TarpSiWE8JMGdUVHisQhZDds9cqbbTFHZ1Ta6jnL",
  "key5": "3ndWhC5UJSQo1u9LW9VdJdqVU68zgEHB1KXcgmLrGKN7GkTMVHefBzBpHSwGpaBPPVM4mKBCoa72eSCrjjwUR54y",
  "key6": "3DuwvA5PMAvRyzfdwSW3Ux5QqWSVCQoJFpmJFvLU5ZCJASM7dxJVfskNUcESg7gCWfuQSiejpgfTruajLLf8gGJt",
  "key7": "49KuLeooccYkgWpGBd51ox6Ph4p6Nz1g31Nb75ED9zHXe1cRnrgP7ZDyZeiraDvEFJoi7aqHUG6pjDW19VT8Rec1",
  "key8": "gaeuFSJuFasFUsSeLNnKnHG2HtN8APaRkP4g9C2NyC9br3gQoiDmqYW4YqHHFUeas7eUzM7y2Lkot1fVRvUiuJF",
  "key9": "2cYPTRo8LPbH8TKgUU21zb9TQKC4vTP9fCmmELBzdJ4vFSP8roRye4Y9pMTmBmUwPSdMGqJLL6iNH4Y16wyhuHXn",
  "key10": "33wVN7Lra8WPA4uctDST3yMUshHTAcFGkgPdzAmUTeYUFN5BLzaZwGEA3vZf29FKzQBEJsQtbf9FRoyssEujJNtZ",
  "key11": "3kfSPPM7jNmJbdmSd7BqmFeNd7njKmjpzzkcLHbHXn4P7e1rENj9UnDszEEbN2L5J1nmp7S3U75L7cuZR73G5Bix",
  "key12": "4BP27b59kiqQj9ugqVUFbhRAALbe6nsiLEDTNXMsNgFURtxYDevRWXriAMXQNy9R4zppvKJyth317XyKcpNj3gxy",
  "key13": "hdDjYnKRgDSq9Ks3v73yFf1DB9uFY7ah9H5mkwUEi9xsTfGYoVu4FkHHGLKKwkhBn4yn5N1iUZ7eHTBrxUKvGoT",
  "key14": "2FU6sjse9e1tCuxUzFRYqowocX1mzYE9ZUjrRV64Bhfd39c43Lydm3DL9xGeG4EVdjSrTygm9qPbbZBaZL8ihqU1",
  "key15": "5yHwxLATEUfzGATckkmTAiLu9uBbYffGr64mYam1hLev2BwRXennqrVxaLwDPnCvbDVKvTFoHCQG2CeqT6qQNG4u",
  "key16": "LQF42EdRi3CMsH7nszBfB5ZbNGpeAbM8BKyJ4pZkQGSezUsZjzxBpYBqQtxwzoe1p6KpVSXrQmAQn3KYUuD3Nvo",
  "key17": "5ZtSxKBgsjxeh1MjJSNv8qxsdGZrZa954yX35W7yaTs98kcY6VTurH6S7jhbMPbfuAaydqd2Ct3M7xTYnncdaHvf",
  "key18": "31kKXCCQAmkTbs2VcWqwp2K6ZbhfKhRMHsgHUTR8QA8J8PYuJcNnWeaL16JdLSLfJF12Z8Svb2d6mhkB1JoamC4G",
  "key19": "mnqyMetixLvWijwfXeMFyg2ZbocDPNALniZzvKuktRVDWYYoYrscFPexwH2EqVi9akHKgtLSPa65WgA3Uqxs2bX",
  "key20": "52jKqfwhfU7kUkoJWGzawxn9qm6ESGbUHghM1Z38fuvchoa8epv93agBQuweo7eRaXHEoHsHEFhjD3GdKodq9XWc",
  "key21": "3UiQApuxUFAEFQdMkKxrAXTBqjAQHwFJszsmWaKpmMuh4jCND7LWWWdsvZrtN2avyMoQtF48HqC15GiGfPiNSF4K",
  "key22": "CLSkGEjLbSQbqubiMBbh5CkcQfVi6dRLbD6dnsczPTMUrkSVgELPPuDsdm5PQqkWVWvopMRfAxgjXCWEzHwUC9B",
  "key23": "qRxud1jZ19K2mL8L7kwaMXL3m2wNTwFShfCSACbBPn2o1bEDCWPUNhHYsYNcTUbwoDMKRcmndkwtwKLr1W9nbot",
  "key24": "3acHwf2ymymheoeqava3MFYkyCcUSjZPYEAVw5woaifo1mYUh1x9aXUUPT8aGKoxeRJ7syuayMmWGc37HJJ2uBns",
  "key25": "4RgvKtjmpmRRBhWFbwS5sLGvaXo2J8PySRnwSQFdTCg7Lp5fhba3qpgvEbeGim5XwSYjkrZveuvwinHhjn2caLUc",
  "key26": "4mJygmEE7YxS6vEfz566tpZpVuSD43cmXh2Dx5UWBLDouCvAvVhaYWWAgGw7U4yAJBicxD8XHEnEv2DWR3VSbTR5",
  "key27": "5F5j78wTXcLKitHWeEgMQYqD854tYzuhJUgQP35ecqqjsQsogGfq9Bz4xVLyWnTWzTY2zQRXcT44KB5empw52b15",
  "key28": "4vFPNiRm1TBSkiENCthHoDb5EL86NUXKVg2cRSUUbpV9ErXYWJ3AMv7DeKumtL1hhZUTzFRKQk4BcGpdWGAXNczX",
  "key29": "39wAnJ4VC3SpdMiN2pLpY1fc3rXPjLDY4qNAVSEELX9qVA81EDqgtwMVNAioTpQp7t7PK3FUEYyRQZzt2y5UD363",
  "key30": "by7jrYSbosXSev4LKPuYh9AC2J9GiRCkErfYdFfu9DCVJPjXoR1SeEqoQNZDXwJbRLdPTNnLQeVczb5wgQC481Y",
  "key31": "37ahu9LuZ288z6g3GD648MMaKLRNX4yk8YqszEvEJ68pzRdpf4cSd8DX5w2fPtFkuZw6zR75zCJDJQBiQsHmUU35",
  "key32": "3k98pQgT8RarzfLCsQn9LLv486n3YxsEaiQc1YBUVKpqRQj9bduZuMJLQzhoKhfMN8dxJMdgp3FyDssdMYeQ9Quz",
  "key33": "3nKHSYN4GTnAH3pSvCQ5yVh7qf15EdmMN9CQCG2Z2BFHLqyLK5GtHNJVgahdsC372Czi1xDab7pmzY51TfLRb34J",
  "key34": "5K25bySJtfjivTEoGV9WRiVbxvby8JUhxEtjeVjX1sy4oTWjHUp1TWGYYCK214YgVTcomD8d4ZWJzeHgMoM6LU5y",
  "key35": "31hkwH2Evc7mo7sThnAnVKazzVQYDzHGh84mmz69gduiRR1raufFvoJMZeaN5twAeRu2xhbQDWaqAQjsKG5chhr8",
  "key36": "JpAAdwn3csvutXTGnL1kKtujDAo6g9sFoE16rA581zxSM38Hoisqk68aubstfh4sASfyLLZj6X1MPJnFYG928th",
  "key37": "24exYrkBTdnmahvCZ6GXfQWKMxyJmjTFkWtQ9VaSmicFbnZqKYKPrGVC15sCC44rknsWptVbqY8jyhZU7QxoPg5c",
  "key38": "4hwpHPuGAw5DzYAeeFkMcSpyFHgYKb6s5qStzZNwGtikLZ5PWrBSnRR2rUdz8Eogf5oCPhpndZhixQCaWnNhuTUB",
  "key39": "5FUv8wVnM97ALBhBSs34z3SientizEkYs3EvDQFBzwrqXC3ou31XVGav8iePgKtGbmMRVLhZnkRh1ZWXCz2T4vQK"
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
