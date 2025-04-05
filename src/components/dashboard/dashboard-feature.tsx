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
    "23HaPc68ALwaHeceZfwXMtNFoHHo8zKZoBQrWRYmn5L5q4svU3gZrhyYZvKUFWR2GbkFWuEeccAKABuwKTuxZGET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ojd8rCbWqdJRPpQrbSJvLLtNA13bTUNuaVfnhXvwv3pSWHRtPmaLFsLV8wsqUTfGTUdbPWbHECTwh9HggpHPSxx",
  "key1": "2TcPVtgJr18HyFBTwaagxDzhFrXWdJBTZXRkcCJYySLm6ZLnSGEtvzrkHLm1UngbYMfST8vsQsUkTg6xSQWZqRx1",
  "key2": "2x7toL1GmhMcUCT9dXJtg1TVQ6r2wF6jwXaNCBHfLtzpnUAReoZrex7cZJqNKxSEXtFazzqJDMwfSrvK2vJBvdLm",
  "key3": "3xbhBKkGapHCetts6YvJtpbZYkJX3FTevcdmrsKcFbBkhYSBsp6C7tUio6UAGQj5UgKQ8eBFkWucNxXWY99kbGRV",
  "key4": "d51Ka7PSU6sn7crSg9aFrXPt6W6twBR1u9gB5FjLiYoKe9qZ8L5YfswJQEfprBBt6Dkb2hhx9vGYdNxJh3d7Vzc",
  "key5": "5ag5Q66CPB6f9kN1ChG1CNFhAy5sWr92nXydF4zaiJUrYK8W2Ufaq71QspWLijzy3295Ww6WXiBWJz3boLiNPcxZ",
  "key6": "5ucLAnGDs4ibbQZrGKSyzjmA6rLAmw2zhEjfPRujWDWYenk8T95aqHqUZFwMCwVgqpcjWjTXMt9NzSPKc79V3tQT",
  "key7": "E8bmAQpeTxCjTgxoXhMvd3TiK9A9qr6ULCB9Ah8GtsoE7hVytEtQXqY6cMNV6FAgqKMgea4EiW4G4hbJ8726PyS",
  "key8": "5zHssvPYZzV399NXVYMmJSvaqiqCVagPJL9szR6GpARFAwbLqN6po5peZQTPdDCgK4gUC5ffmXP2G3H4HoRmTQft",
  "key9": "3hhbYyyhfzk9G4Lzpvab5KNe1Y8NuaztXWf1a2danS2VBxwXjjspgxNCGtSm8mixMcxa2eAgvd62Xij7sShkpteU",
  "key10": "2i9f4LmvXKunDFdX9DQbz6BSicExUYUg1etXuVxnnSZDrevvheZ2df7mATJosuspF94y6YQNyyG9s9FFpiDhbjAj",
  "key11": "5KqFg6Z8hvyxzXyQzBK9dwtjMj1LRnqLmvYDNLsUm9H15VnNuoFQ5zXL85GUkidRt2RcYm2h7zQeMF3EPh4Z7ciS",
  "key12": "3zHy9AWkHH4TE7PkgYtCiUuYiQyjcpebMUo6obbuWfxKF43kh8pfZWxZRHRbyzv88cDdnHqdwKbygN5cmW545WfD",
  "key13": "5tBz1kyBRuacN3AusXxuDR2udJPwDd4ELhBe5np8MYa32DXhmnEcaSpD4ZsSBgr9FmsjTBVVQyYPCtCyDU6iHBHw",
  "key14": "dv3JipgamdS1UiHSP7hxAaNWqaxcMrxPWLB4e5aKF9ejHJLH3aHKSrekC6rvRsDNqmxCTCqPyACG4izKB5Q7h4r",
  "key15": "3iaXCxzuqoWhV26gZeVGiE4Lp2ukzNK9sM9ZyXb24x7VyDenq4Z78Uv9JH92T3KP93tU9wFqfF5FoLJzRgM8o7um",
  "key16": "45Sv8DGemi2XSLZoKP4PXXQxtKnUb1z9yAf7oHTmmgYEnfusnZExsBD9DRHSmcvr9nmktVcyDarfQ1H6V7KVDQQk",
  "key17": "5ABaHhmq8CABBqB6bcGuh4he5wUyErbubGymD86eQvcr1nzyyBebxodvhgVcxeSsLECkPqZ8S2HTKt8JBtJv7H9C",
  "key18": "2pbvVuJKxuy2koqxwVfiPEaXdfFBEoaXj2AszSYUSTsUaSh9ga4df5ztnmuhVnFuZ95EWYRegEDadJ8XbmpdyHtj",
  "key19": "4uH9qe8fZcsxsF2LcLJ87Q6uYK75tHwPSua3kmpvkU4gLJ9JABGWPjpmFRLwsWkVtyGw8KUw9BxHpGwy5ZVekuHN",
  "key20": "2UridDKiqjfqjUfsbTiDX4CyaZbSyC35q7T4K7RhjAnLkLDFnqQ956CJ9pdE6QSkGNSm3VDGwy34mxHi5mtYqGvk",
  "key21": "2LKYfmznCAe4rezuwdvjLFzWu7Cn1YkiZQ7mJjVxDcZ5poCgpXKpBUnV3RDCjPmkGEVM7p14fgtZfbRy3V64Y4Dj",
  "key22": "4T5SZx5tPKDAf24d6b8RTKBidjfu1QzAMxrjspEemgL57HmyU2462GY8AKh7qzhc429bZ7iMqsPGtkkBHjnj4t6F",
  "key23": "3ZBQ1zypiamDvSeKW9Ptut3LEhc8YiANNSGbh8djTRnQXybStde1DHiep88ry1W31QnLVUQjPUsmkPswYzZnq3hr",
  "key24": "2tFvfDBwiYZKtyF53h3p6cxK4swoXjYcuwakFgCEnjgQM4devsgeP27PfaQeMJtv56MikRsnE2sR8KQeQs2XgYE5",
  "key25": "5VhVNyqodraSTsxbcVHq1schewhQb6UkcBJjAYoHRGS7jypVFiSqxyWPGr3XNc1Y5ZwJmMkLHcoRV7QZiSnsTzgk",
  "key26": "4uAbYvZDDXcKjxBTx3nerTawqWXLKVmThx8LMED6p3VVLhURKb3Xq5KEJYmSoHxDjK5AS7xqgkp2Akv45m4itmAV",
  "key27": "2fhJcSdeUfLpKX84cXgu3zo5dA7iDaAK4iSWYBFTonDh4jTMJiDeaaAcmHfqo5bM1r4E31aFM81cweRD8ehYc39y",
  "key28": "cVeLNn8hsAP1bYNQVTTxsYxT1F3Bgd7P5NndBenbkKmNivAGtEHDxhAy5S9KgNyCQFCaB4vVpCRTV51oZ6JtgT2",
  "key29": "5DfUfZFzn29SAN12WRnGsDr6TZDQQA6QCc4KzbZ8xc1zXgDem2cuLXkPt6SBTJFQxKkWsATnYLFjFS45aTu6Cqjx",
  "key30": "2yJkcwk2FchBsVHqoZuLQg7oTv1BRvktqKrA2CFFtkvjdubv1rcan8cdsVeGmBHwvcr5A8G22wbYfukWzxyVHpUN",
  "key31": "5dMcR46dexhLiMzUmaVHQ4EtCRacqrYRk3HJrXGM7mz1DXg2JJ3Ynr51iGWyvEnAaY8tDA6x9BL9QzLbBdiChX5S",
  "key32": "4VW2Hy2HqkmeqG6CvknrUCDGA7fpTP2HiUzzKmYAWmEmB3JD7yoeciM9oNXwfgZ1vQyknHpW1TpX1fB3PmGqxGcU",
  "key33": "56gNorPyTdg3Qihv3XNVGanjpxvhaESM5KomvBnFzkkACHn8qHgv7yGFWanKykjBNaGxrhG51SByycsA1J3Mgho8",
  "key34": "3oZTXHXGQSXUSJEEiDQYL3uaifCyAz8aQeTk4xE7J5FweGkisnTSB9XP35miyj5kFYTfYtGX3H7q5tSp14EAkUH1",
  "key35": "5esS5Uv9rX9gTf7FVoZy7nTPESxSzCVjtXfNtaPnHRCJKpWpRwaJ4831jns22xz3Sft4mpNDBuvboLR1UzfcRg1S",
  "key36": "2SxPGCAPuyVokxV2Ko7EoWpgZxKgrqazHzQk3KkGAsQA3iy9eoQNnPhTzhrRGbesjgvc4Zcs7KKxUZGH6aqrCEm6",
  "key37": "STFGcFukJnoEk5rPdRPCbqLiVpNVh5WFo6wqyVtbkaNt2uE3pDRVr1ZZ6GHia7MC3uygoLr3oBNxwrmm7ET5Qkq",
  "key38": "XavAi9KYZfRDsoGTH5Jq8exfoqoQgHBscjSqAhH32PVYNk6Sp5m6YJHQm8SgeL8qvakzMi1tMnceYbNXCn3ej5T",
  "key39": "26rmwzoC3D4m8jEPjBgYS5cJ9uuUJJeK2v5Xs7EhDmyBuFgZEtx8Rt7jeNYsJpyS16hQcFM8sEBbASrj1NAWscG5"
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
