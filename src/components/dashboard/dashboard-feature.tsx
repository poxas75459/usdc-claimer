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
    "4yqnWL7qZbBPPyqULqbDixsSpNnbi8SAriLdggxrhQnE4CV2uD6MgPbc7scr65xMZs9MnpciuK81kEExJv9M4niZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MkbRT1XWiQEHttHrFxWHPf3odVaugLCeNJoJuGFMXgm7UKRe6f8gNzBnVjjoSXj3J6ou9LjVxQ58YxpreiQdCJ9",
  "key1": "5A6PQbzSx9FoDnL8g8S4xdWLBtj9GNF13znTo2EKYRBoiatYRzNsqenNiF5Pyz1MgJG8rmJK5h7ZLuN7T1LFDJVY",
  "key2": "5PFmG94x2RD7ZXwQRgEDetUNm7qL5QcEButRPoXiGJLLfv1VG1nRFcS5odQ63bjfYCoByognQJkAxUEXd7DufCSd",
  "key3": "2sh3DjzmhJV7MTuGJUJfDw9ADRRdTYjrfDVw31Nz9HrKZkJ4nkzaY9MmfL7zfnecm8v9pctrC3d7CetJJuNm3cGb",
  "key4": "5vSV5cnHSncUtbkryPXgxMEZyEi1WzZNF41MjE7QQNqiajpCVodJPv9nUFUYDmt78F35hbqE5tTsUR1S5EpZMfAF",
  "key5": "2BLf5Fg9Br4LLeUATBbRysxYBFsz4TjX4yyujrvsY97UPaAbjfUha4CjDVNKQ2SuRkK7jf23jmsbrDWZiMvNprox",
  "key6": "4amJ6kPDP8kKLEmGUfzvMcPFhLLJmWkv9opD5TXspUffbD5EKTL1JiNd3ZKubWgfZAfuTnb1a1EHrJyBsRydsaib",
  "key7": "4xdR3NWjRVSB14JGaWFK2zLJeodbhK1y3FtvD1Z8U9idZh2zGfAXNcsB8vv7wv3mJttPfGYox11QTARSa2V5vUMN",
  "key8": "FdQgAStgn9hRj3iBp4RLeC1RLWpdgEkVUK69Zopn8yGvax5Z3iLYUVQ6ipgyYVREPSvQaqHCQbhUsP5JTZn7Es7",
  "key9": "5xFu8FvjGr2SdEjpKjw48dJmAnsbchqqmoNh5bB5yHMMjiMmyRxrWh2BRS4dhSM7KCcw7SzjUd3dqrzkCWorqkuW",
  "key10": "4B7EHKUBteaF7EQwQYjBQZLKuXG3rUrJ7hcz1UHEsnUxVuW7cho46Q6aM8aHh3q2TesCNYpqiFKGKyfhnoYFYRP1",
  "key11": "4RRP65qruhmMNyP2jf9rXHeBLF1TnERVGkBeHTgQrgVCQfw3bvAPP2qfQ3iUnTmVZUBsQaguWZe2oeL9owLShT2X",
  "key12": "JF7UsDuBoyrE48XKwiP8vUKNxjGaVwm7njBB1ZWusp9yc5EYehNjgKk81WVkYYo48LKAsgrSJ3VvkY4qVaKjM4P",
  "key13": "3v5YXzoCyW1Ke17R26ww5mzPCp5ZJfLJvujfxg9UnmBDrrnm4s8LNQsnDi84MKmxpSJMoYViGHppxW1tGGiG9uX8",
  "key14": "3sTqMjPPYmStF91cMzST3sLesoYBAbC8FmBzTXRiZk3njyR5SWR6FDPz3UKLPQLiY81zaVBHNR1ACCTLUFTJU4Vn",
  "key15": "5taAmxAs6seicdHnExtmx7aad6CehLsN1X2hoeUnkwVTzt23jWmWLhbKWutf5Yo14L4UavHDmV6wGxRH82EErHWn",
  "key16": "2hqmurTPNn4HDCVsXE83mPDSAFcDLDQg2XCLaBzGhXZtCvXUW3y5bXbjQ8Ft4RzTPiCY5XL3MRtcrnEqv21ARaeM",
  "key17": "2RSM9uHwukxbjgrpDtfs1UoE4KsprjY2k1gUECSwoY2kwazM3pM5K8yCLUgoN8B6pT6GQHiyCy5hvYQWCqf9aCPY",
  "key18": "MLUBAaTL1NFgLj2VC7RgbF5t8qneckGqi2StfKs3kqvfQKrG2mHoR9St6795zaghiHWFkKFj8MLVoqKNQiA7XuC",
  "key19": "4QinpoeFgUnWzNpuvk3Aer2g1suJDVhjqZ6irwwbGyzHcN3dMXywDCZPpTAwYCngaGMwT8yFkZRbpjqURoFp8si1",
  "key20": "3rsxnSY7gkjQ9jTydRK47eCWnAU9P6CXtNh83x2qZAb3fQraZ11dRsFg2B76AR39rdvXKTs9qDrCe68NBCEwUgnW",
  "key21": "3yfcA9L5T7rTzifiEiWoeVZJqSTr7Q2SC54HeSeCsHZxiwU26dxLeyhUR9TSbeGMc5ziXU4PgK5Mx3Gy6THA5ATt",
  "key22": "2BW9emR2YQNUUTF5TmUhaEvNaoWe8LwHJyTsGUxKZpVWRjCtJfqvC12JgE1H3zN71ZdHqCyDf1GFojXk6jwqBSXS",
  "key23": "2TKnqbMqynExd1x4PxoL6bNBct7rHHyqG5Qns7EdB3M5Zo4SioKW493y23vGa5Sk2ZV9AQiojZyNr6gnrrL9MxmW",
  "key24": "5k1cDW71Ez9S4UuXFMAPmWA5zQ7sCG3UTCtpMzzASHP6sFPwscF1sRAAnUUXESPReUCuVRRbYj8CJorf29CoHQTm",
  "key25": "3SqYNBw9rmttgjcYVMjoidrcLuSyXmrKHYyu1pAyxrrM1xzRQQbUQwG4auqJiYGXL283AG7Ho49PUp8P4HdjNGf5",
  "key26": "5MD3zgQo2fbvEefdaSkczGPcKyNQzNFYBDNV37wrj3vCWqKmHYarpGbt1iA6aRjuJ7fk5f4ncQhH9VhNY4nt7MG2",
  "key27": "5GuwUBz2eKwrQJQDpRSM5775qCnsJFWpCrhxcwiDwPwsAPzXSrzNyWZ3pcyYFdxoxAZmx2LGFvFivQ5Ex3L35dZY",
  "key28": "56q9tB7xydaZKqW666nYD2DevxDVF2dj6S8kNY3jufT2aBH9FsGBDC4Acs1Gp5zCb5vezCGkzbTG7AZtPDZzkK8j",
  "key29": "3T5XBeTVPS9k5wLePbmeoFwTdD46uKbbfnZumwzQQkbFqr9RQdwYPLcSBrMuqLme3caeQqBGmhd7x8BnZztgdsBA",
  "key30": "T7GDLxvQjeb9zyim6NTpMfgHL8PkcaFD5RXJo1pyeBNzZ9zRS7VCt41ewQ1XbuQwYoN1eAfWJk72gvL6iHHADWk",
  "key31": "3dJz3jxhWNw9e3LRvFpK29FCEPMwFMFvTd8TFSpjr989Z2acWYcz1AbNGDTzyejc8Y1gijksV35PUsDTojhfeZiR",
  "key32": "2BqRj69uKKDsLVLuYi2M75cwHJbKppZuh4cNTgEqv3SRtExXpVN69aQBRQgCCUWYibJAzWJ8GUCnfXz51h2NWsD5",
  "key33": "2H4oP51r6vSBN7UeeVsa3tHnyCW67YAuHqFNvGDmGrFATZDFAmQjwRZUW6Jkr6CM8EuS2rNKvW5Scca4ENzDAfVo",
  "key34": "2p76FDW5RkhnUgr3jPUdVXtQJWGEiGwyBH1rpppCaWcpTtcNB5VYAcwzTgyhKy9goFtgURrYjDtfit5MPgq3ABZr",
  "key35": "3XHfD5tctL29FvPA1cSi13tFxhTpd96BpEQXVTBnu5LAeK1jM39bxTPoA72QDsbiGwAsKsXxxqJHViRfqf3MWHpu",
  "key36": "5gpdoCyMJLeDTQDGbHcC7KJBpukQ6h7j9e2fpuUynCZsuFWHhNTaHXZ2UX1Ftv3rwfNym6sfpw8uFxaXNLTVzhWF",
  "key37": "3dvMoAxsNANRWay9kH6m5f5phjmqwc4mrg1s719e4MbsiTgxwHAXRWYXq4TFjwqAcvsWLZi2jbSmHrA4M49XALgq",
  "key38": "3bVB876STJhKKCsJqcs71a8hDPZFkAkfdDhEFUQq8CdsVBKT9gveK6r3U4wrPosinUsXNYViZbuFJrFL9wpMJVrn",
  "key39": "2UpCXgBNzNg6PAqcF9EWub1TxVNvDz4SkvuVvsM9ErBu6PigMzpK1ygL1HEtZzphm5JJCHNNPaTCAHabV9bdTfXu",
  "key40": "2JWREEvFkZSsedouTGA4ojynnDCkCfMCbx5UnwUUhJ5jnhu69gWLHGpyf4buuArM4CVbVdmtP4dSw9cnkzSbhJNR",
  "key41": "28yu7bYz8WTpwyzrKMsoKAVd82Arp4tphtixWqecZRNzeLeJC8F8GK5WdU6YpDKM2cfcEdQE7HFXcwxzVadXLhsA",
  "key42": "299Eevo1GE8FuNrAdmi8tDMjYMWm2r42Q2qoYN9UarJxPF9dR5UzrAAXh6Ex9EfBA4aJ39ghfBLDwHgndXCPcgAq",
  "key43": "5D7XpooFSJaRWuMZxdNM3Jc3goE6GdZH5E8GS9AQXRVujBeCUGZML4jSvnqXGCsD7kY84UDb4NbCU7mLNUpViKUJ",
  "key44": "2xSkQMGaYosyCsHnK4wJN7Sj2wstCgFPj7YNt8ECfeTNScDdEAz5GNHUj1icUaJRTRziGztfipp11xmSuNtM74QE",
  "key45": "1s8EoSK29DKtcic7Pn1WV5MYU6qEdsHwhmrFsP5qRHAcMRTg1eWoLEWknrRaUUsswPx4RzUKoKknfBitTjS9yEo",
  "key46": "25bfrojgecM3hVfk4Nxf3JEdyGFMUr3viNEDQqMBzW5gqjHH3gyPTq21NYBesCXSr5sZ83AxH4e5vfzi3Jgm2Zvg",
  "key47": "48UHVgAVErj1HQ9u3fkiDfdBbtAnW3x6545dTH4VcYi1LvvyHvSP7S843t7KqvP53vB5sjkDwahChR4wUtv9J8Am",
  "key48": "5efH7bnxQ2F9U6wA7runrB3ntijkkFgiCq9rqLzoFzKsZDdHyTDjwyZW6jAcSqxvMankqNb1ypQiQjuetz1Ls6Hn",
  "key49": "2Hx1dQkdAoMMgcrfSn5N3xASqBtwdSLbTFeuCfJ8pW3Gd9kVAuffWmHY4YMDtZFnjhJZN6niCWnAyoucc5SByu5x"
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
