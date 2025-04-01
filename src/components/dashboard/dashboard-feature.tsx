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
    "54tnv1TRnZAVcTYBamUSuQWwoRzmNrefQXA9p2zKKtZ9vF8j8FLcRzt7FJEnY77LS4yLhXKxPKwhgBFbJpYtdfVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JkmmHCCCu9B4SD3RHLroz7HKQqxkC1UpcYfvX3XJ5T3VB9ZjoBr2U5qV79eZBn8SNgBgMNvxnoJMF4goKtgRrLn",
  "key1": "3L4EWim3Snfspu1vbiaBnUxsMjJ96Bsk9A3SPYubX7bdJvfgckcTaxAxuoFira4EKDosJqXBdj7nDjrZGywx9hpC",
  "key2": "24Kx9rpTsXbkhBH2NzMfKrQTZMRpuXZDByEEnhg7MEWBe3MvB86vW4FQHwBQSgEp524XdhefFSHjRn8QnvFD4jix",
  "key3": "2Z46c8R4kvtXxTwYfaxPjpqnBQah6VQYESnC9M39iWDc6FCXjsKi1eku7ANttsJUWN6PdzMpxH4bqsY3DEa1dLKt",
  "key4": "3JKJdrFmxBuxNBP7vtDonQsC5vU1fnq8U7HVxFvEAv4Cbcjh8iETywo5La6ZUYbU3DyCWYb6bL9wcQVYYpNhJMBE",
  "key5": "3Jcdr28pLTMKUvjWpUtvQMMxdbVjSVo2o3gbZoVvkNMXAKe5CDUGB4yQucP3aobhoKNeQ6vAizCyVE6mxoWo4H9F",
  "key6": "2MvvnuGyvs3dxPW9Dyo9DAb3p6CsvcxvKcgbJTnLjnk9DDYmMvYTTzoUiiGLT7J4JB7yJxgZHEUz7nSUZr2zuSnd",
  "key7": "36vgvMYX1DsWkEgtoygeXwSCaBtdnveGQFaSDong3hzuAaMVs7YFmideJM5v7vwZj3C2zL8LQd35zYcTJF4tG9VS",
  "key8": "Tm9JZvQCn9N36NvghBKR5Nf1oPB6E3SuU1nYM1v1kBCqL7oAcLpn435UQPErHTKv6tiTkp7rpLwQ183JqRP6avq",
  "key9": "4HLNMUuRfqdEEjbzFDxZv9F8EqU3FPrCZXDk7BJ57WMSRGBfDCyEFJum4fsX4Jss8WaZ2tbcSKuNupJoLdxfePh6",
  "key10": "48zKLGmyfPtQQhxb7tFiuiUsgmLomCBaRzVAxvByKN4WqYDW2MiAXxF8k8DSusnmviztgjrPPWoPdEV3qiDwd2Vb",
  "key11": "5VpdJXL7xHdUfyHZ1uN5ivt6VnqhdowsMfPMmZgz3VV7V8oXF1JnvdZobXdkEcKa1gkb5kjeJrumUV5jFcXGGxM6",
  "key12": "285b52xgdt4hiAgAGw7kpmoYtnp4XnEUqN81coiWgGm4fLFCHjjAUUikXNJKELdT8M1VCCpRfBk8MKx2TTTeuRV1",
  "key13": "3fD1hs437EyPd4LgqLFFoeQj96564QbMTKFm7FJ2KTcsLiqZg12qokJqQCoEjU7DSEjM8NbfZX2JW9VrkrQJcmgs",
  "key14": "5uwn3wcmZyn52dbQ13M9EeVJa1sUATzsDxSGk1NCDKKR7qDC8kK5FV5epG63frDrfTcyCWGra1jxfdhVtVzsVSrx",
  "key15": "HPVMh32dF5g11fSYjdQAcQj8chtpqvBDveLwKDxLGxfUBZ8qV8LAn6ikMTBsx4j98XE7yTHsMQqNo2v4bEZWf3v",
  "key16": "4SYWdq7nh9W2efxWaTqV8NRsT18TduVQVDm5ZZ3eBu9erRMxzCr4C4LcqixR7WQ9Qs36VviZLSW3jBsj1eSHz6ZR",
  "key17": "zyepNoHGatBoHc9HDR9Krpe3pSSm1ZxV1YhqappRyCV3evGcoo8m1QU14AoN9DDf2qfxMjer1hZrKtnEkK4DxH8",
  "key18": "ARbt9JdyDgokRG4NqMnuyF8hhe2d3Hn5g31gkveNasiDjoj7NKQx1phGdqszXJWkHtr3kNdeWgc9kuQVdxVYnXu",
  "key19": "3tBEbY6Dx73ttx3X461Ktoa1gobfHMzLxAL1W5VpVBGt8gTV7bJeJu8thHUDJ9kyqo1LE83VrtbAzVcZasqn3X5d",
  "key20": "2QQr64ktaJS7u6BPdHwYdteUZfLQUE3UPpNzhcWnDe5kEgNT1Qo5J6S5iW9uWn8gzt43tkPBRYsgrGXZC2qacxda",
  "key21": "3mQN8E8taBDigE343C4Rtu7j6L55hrm5F489jNvpE3EoMCCb6w5JjdHWL7U8UFuxUcw2q9toxoUUhXd9hWdTpi6d",
  "key22": "5iTMVQ8GpZWwaKoMYrpKtCQi6DUtUj1z92xbB7qEWB2uKxURcwkou9RPxmVWL8CvtmpcSg5ap9iifJYex6VcemAb",
  "key23": "2EsLigWLrwRhfFKzAuAa292MTjXrDVpsucAp6NMVvp972H7m8Qg2ufZP7G2D7XK3dHqpgVC5AiM99k2ckbh1xfbd",
  "key24": "2e9f8rtkRYfS5oxqCtsQSUTrVs4rHNnY2WKw8UmwdisHkse8htjpqeZDNrYMS2CuKUdBbsox7rp5nTNWyXiPzgjZ",
  "key25": "4VX5i3jHSvnEpcCEbhFecd1BRJiPkqWfxDCWk6Nivkmn5ySRxd1wFdsaAmG1xovRpwKwSnqYniVcbwsmc23kRkvc",
  "key26": "66GyThaJdxN3Yif8L9YaxaRds3BnJYchEjtpwkaBD1uvknvjmbbrAfNb4utSDBGy6FdLaMnE9AVWDJz1a6z2tH6w",
  "key27": "521LM88mus3PizM9JgRfibW4PjpyBRQ9iYaoZZHM7t1iVQfqSbrAxKHYjXt6rR3jBQmCE3Naj7gh54Z7nGKAVNns",
  "key28": "2sQXfvs97MJHaGjwnEWMr8ezU6AzhcrDnjeMkqgtUSDc7n66gdmbm3KsU1p2yHSWr7TEmrRVZq6rLpQTnacdwhbH",
  "key29": "3kqmb56PMxUMeqSSFy7x7eP9V6TVPTt3kohBMRur2zxKEkL8BNpVg2d63bNfqyoXUJSeBgTvjcGbdzGxQugwiGpU",
  "key30": "5LfTzf3mjUnnuf6Gkf7SgbSha7AJBidkt6DCgLNfxXqxpEi4PFS5apke6g2KaoTvMqRXGoqZLbSZ52KnMTCzrrwF"
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
