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
    "4Ymb4kAH3Dz3wFvTezkA5CwGVEPHc6cmY8WJ9r6HTGzxJwU3q4ZSCu5dTMJ9YNLnuLdFVye7mJ8gSGL2K7c2G9kt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AWs1QKwgubXAWhTuW3js7ggmB7C5SG2cT7bzZ6PHguMitj1do183SzHzpNt21iQxEr1jQgW7ggGPea6N8H9mtGK",
  "key1": "hFFHAFxTXbaDTmfZydX9CEveKRqPmRZSmCKQ51bgK76jKsRF5xLbidjupzrBmG3NturMuYkSejq3bkSktLBriMT",
  "key2": "5wYLK4wvL47asD7YL8HJnKNn2GBaykzH9BaYPigyxJ2UgX1zGju6fVmBJnVx6WWrmebERiEzqafs2e8LYLiizd4G",
  "key3": "2bLABTAEZJ3GwmHTq9C8VntrrCetEErTkRtbqTuMdkwPbqxReZ1vkP1VrLxPvueiBhmSWg5UfxLhkiTj9rQE13m9",
  "key4": "UjGb9t6vswAVrnDWLqWAziHXtbkJ29csdMpKDDqwhByuwcm45zusrP6VruzVRtdytgJ6n2C9DVkvHr1er6tUaE9",
  "key5": "4MdKCezJryKTC9K8sBG8APvy7aBQ2LZHNdKmJAz1yDk1P7fGSKtaUt4rzQMdysfY22qBG5esWbmQnHMDNCDJqDrM",
  "key6": "2CJL2dyPVAcKs6FnFyj33HiMd36McLauHiR3RrMhs1SEgV6sk6ZkA3u2Z5n2tn8bTqPznXmdToF9SUSBKrpqnXFK",
  "key7": "5hbtaYzebTgbqSSM3EWK4RGrxcH2ASg61J4ntxcpJro45DggJLW5C2eEEHKTRfAqZCpbsEnQVgFZcBJ56aFYWmRX",
  "key8": "w5mL4jyoPPz2qfhkLjnw2zhKSSpU2Z6GnNVQLx15N38zsigi7deagem7m52EfCV1av9DnHP8GyP4upU2GAN61vH",
  "key9": "sTAfzk28EAoPDdcWes8RR6gM22sp6qX9hX6ByAxfsiKswMx1apSUuUTJGEVvRvcA8P8hNNjEr7qqyxXkKD4nPxY",
  "key10": "DJJ2tAMWFK15iU7sL5XCwr1azybjtxikLMpAa1JXDnqTvcfXfdDbrNYhD8TpT75fTkHRrL7Vdw4McPkPjzws4DY",
  "key11": "5SzjYMkLRqssgY91SqemN4XwjxB6M31x1aSDTYXA3rqvsd6VufBePmpszJVyPJvwrvTSmdw5xxogEp1jRHVE346j",
  "key12": "3Gf1RFQeaxdxsbmkf3TJkwZWouk8ZTEYbS222JrryduvBWMSmc7iTabfaF1cMvgaasMjKPm9hRmYmi2H2xBbZjnS",
  "key13": "5X5BGp5YcWFaLruFasdpgfuDecYaPE5kW7NyRo9g6PT8LKcRrGDoyAMktJhiqHcyArFntdKbgMbQnrXEVaoq2zDs",
  "key14": "33r4MMyhwWxKjbEPHauAvJEmGQNUiSF7dvvzwKqMUyB9pD8EzBNg42CnV2s1ZX3Ev3H4jktp1tQgbqNZv25BzwAN",
  "key15": "3ab5S6EFSP4nPBQFE5wF6Th7knctMhTU17p8XjxJyC3UjFW5c7QrxQZzPmWNBBDzdUErADQvyRFcbMQEVKLadoQ1",
  "key16": "2XGTu6YwfVZu7jcQXvkq3gtTxvGW6QuhXoYEpnzzDEnADUxbEtGmAnUyxZcUQuywwqNjjdkbH1yUiTP262B9Bwgo",
  "key17": "86wiybNoPi5Z45op355cMX652LuRW9cHWkGYrpEStM8L5HMkqonuyJyXaaPC8WcY1nnqj1QNdLd5xxrVRTHuge3",
  "key18": "3zHR7JKmqhxsNzbvs51K954sksikQ9LtNPJVKiNzVN4WDazw6YYy4ADgYKDjYnwH6wZNk1BxNMmpT8FS7Jt1DgFG",
  "key19": "7WmJf4Sfao59RyWf4U7SMuTJUwmiXBpaDc5k45TZtSi6gMg9w1v9nTdn43yNPcv7bFf1Gc9cVyqpWohmcja6fJJ",
  "key20": "4CVeRWJB8P6yXxXMZQCpKgPxEpX235CNTQ3ggcmoESaiNVNhYc8dbybbAvnLYzuBptuVSesYRVYyhSRvuVrwzQgQ",
  "key21": "4u79hnd5AVB5DBTCjJfSQSjd71eXHWzgout7McHXn3TPokYgAYYiMQ7YzBe7afDTb28DQNbySCVebrHjnTm61CP1",
  "key22": "oLmuPAjHtPrcrRF94aC71foqQAXmdTa3kwcqyZJvFMpeomS5ncJhPDXDmxxk5gquDNwtAJB531GiywrD6tnaQgw",
  "key23": "3esigQ4dviHv2bnEc99JmSNxX5yorTeAXeqpxMpxNfKkv34d11ytFujed6wEgXfykUKUVjaDARpmCcrKpEGtMvGn",
  "key24": "5rUKphVdyTCE9NUzmZM7VitUKmXfVVCnctSuoECP1eKbZF9rVN3TEsfsGANdHUVZtfsU4tNE91DgzCPLoLH2FrUq",
  "key25": "GjiaoTRj1CL4qemVXidhqVWD98oaHVqpF8ESp3DGKvb477PDCxZY9owFuzyr62D1MLw7pTSJLqw4jwuddRKZXEA",
  "key26": "4fEM1WSn52WW8xdXYePn9SJRVR6YCLZfFeNUJ2Z3tqfAFG2jWB7j38qcTCNPHiyaLzWeoRKCnhMuWJSGghj6MEYK",
  "key27": "4VKMa9aEALwaguH4zAN1DqEqCgu6m7PUehrkhjtFox69j6cPSkfCLututmzYiDm3Nx4kFFBiMyLizfgEA6cJTxJS",
  "key28": "56JEKWWxCgYyRSovCgULnY1jpPktSHny8boR2ZbR6JssTC8R7u3QZun2PA7o8wuRcwxn93m7JwZW6K52DHKmuvEZ",
  "key29": "2W9eJhpzFWxAGF3rt5aqQ1QGNrLUYxVNj1PLnUvu1cNJQwTdLG1GJexp5aroJFLGoRTGwM7fB27AaP6Awx5PFRDD",
  "key30": "w6X4nS9TYcntdrYCx9HA7s3cVPNGZnajqbc7p2mZnJ8df8j1QMR7f5NEh48CxfNnFqh4zMpUpiNnTGWesodFbMa",
  "key31": "YZSRQJeRBvRrh8eUNxUh7BdhhN12RC8Qoo1dwFpUspMYLBSfYeCLbZJ2mKLsXnk9e9hKpVyLWp3mby3HJWTdRP2",
  "key32": "4ijmY1bgqYFzNyNrSiw5MbX7TrszyH7JnMzj2ijG9sWUtDAmtqKx8sXJ5X75vHHw86bBmHdiJJrML5cs2F51DUZG",
  "key33": "7cWKV56sWPReP2g5B2a3jgHN94jnm73uThvfGYq9J2MkgWantApvjot1yPCPPavLNCJLzzXBrS5Bn39KdyqzfGL",
  "key34": "wh829xY8TB7nDmjgf2b28GnWWeQrMUQzmYrs6fNqFZ4QTVuEUua2fvb21stG68toB1FchJtUXqE9NtjiccP5Q1u",
  "key35": "4buv9eZDHFfoxo14g6ragXZ75AYDnpuLoFNrVZJEUADfXZRm42D2qGDoJgGYjy2buyd8x6xHC9PcyQorfmgN8DUN",
  "key36": "3BsZzMJcTNLekTENeKFRPkdsVytLyeeTTpe48Sh9Tr8CWTqHR7bhV959XdiT8e45yKEgmwLQZzPPGXggZbxk2djm",
  "key37": "nE7HMxX5JdgDUt7WmfJKLLSNxWtww98thtJ7jCTCh83EWdhzjGAo2gJdgeYTQeTWusiwUs5wDKgQK5Pebk1edhs",
  "key38": "21tsMRv2nVrayp7wkEXFZYTVbTGZjrMvJG6wGweG8yVXQ6sATddNVmnG2p8RKSHxwSoHy2a4rsD9cJLbzznBSfG3",
  "key39": "2kdJUUGtVxWCnXui1XjUNMRyp8qc5HaVkEnonPmddRMDUgn4WYqxwuUHhzqwUhEuN4H6JhVysXTi87CPS97jnxTC",
  "key40": "4mPru2tmca9sK252iwSpAnBB5eao996MvHsp5jRKAWQ5ZXtDKvXJJz4bX2p1Jn3PdL2Ho4QP1cpDMQzQDBq7GmwV",
  "key41": "5vbqerBJbnuY228SW2ZhTjxXZrmbRp1diTece1e3qwaqc4mKxQ7UgztDTcVrJnD2EsbMWwz86XbETARUSBk9aJzQ",
  "key42": "3uLkE1bFm3nfe5tK8KHPaJKf1VAZJSbv8ZuWbvDqDpJAjomZoF4wf67HYQXX3M5nDkghxd4VLV2aFuKHcCcvtz4o",
  "key43": "3LgA364GPTb8HY5kMNev1RxpBTLWd5s59Y8j1QZ5k3VPNMs6CDMJXKx2do5A7M5wSxzyat1zfK495W78fNUXTRZD",
  "key44": "5kumRyxWYu5xf1M6zErWRxRodJffp3T1mbP6fXSL1UekKG7aCYF59bKhqmEFWAXpT7V5dZgX6d8nvvyhxLmiyqJo",
  "key45": "5fQXsV6ayMNELb2TZg14dSBM5RBDZdAh2ziuUz4BHG5UbdEtbfAkaqN9VScJ8i7EhLXd4r9rQn47C1TBd8s48zhw",
  "key46": "4gso7CZ7KWdet6wtS6F4n7zBeKJTDteY5FWvXHMnXN3a2PNF83ZCV7zAibJuwKakUbb5MT8UdKbMaFHLsAmnKvCv"
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
