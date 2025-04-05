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
    "5jibF9QYMaVf92KQnoiYUvXX9cGQ64ik73kUsaDG3au4E1W1K4w9MD8JirE32EzBXXAtye7uLVWepwj3HLFb6m6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nGCjJfC25zkncZDbYzD1nPub3DnV1nUuTP85LFjKcCQPGsfQKE3LQTWLNWzLeChgfrDF3TTckBk4jDLg7ffBFjn",
  "key1": "2paMtSVdC1mFfZ49H48NuGw7wgAEkKquu4FdTwL1FXwM6NmhQAhommmK93mWnBrpCHujWPiLFcSSMD3G92Fb2D1M",
  "key2": "2b6Waw6fhwZ1WGC1pvd2HqsDvXqv4HDBFNQbmmEgHPmTpCLD3w4Ftu8WeEjb9XSLDWzMpg3Q5NcH2oJTi4mp5R2A",
  "key3": "2ngaeYRm15jv7TfWYD8qauukNbZj6ApbBReKxRZRRAxC2X6HATcgabWtn5zET2ArspUqCn9JUWe8Ljb5wtzwy3aB",
  "key4": "JvoT4KGQw5M5ayy1yUpK2AtnkApLWaUtwgJ1A3vu78HCp7U6iTjVEYTPUJQ6izDcFk5gWw8heQavh1vJw48QAEX",
  "key5": "gq35n6b2PPsXCG3yG76YsyCVoCrK5qMufkK6GhDoW3s8T6ZxCvkddwkuo6PjpGfEQ1xMMhwcNLmGxRvmtDLt7RU",
  "key6": "474Z5dgyZy7V7CWRBXy4hQgiqpKWhwwfmSR95uxzy1E85nz3qufQ3XrC8wAciDHuPRCMUn29V4pc2LHNm8nYdSmL",
  "key7": "4g9Nb8vS3s9t4PEs8BBTEWveLipXYRhvJjE6fyPjhV6dtxAQDCs9Fh6dnzuiQEdi4kEAVZZY386bkHjmmdkcyYon",
  "key8": "5L2s7TMbJXxFij5PjbFQTAJkfLTrYmmt6NV2QyPsGpCpbavRnz7HbpfG62VsMPkdZcDrYWPcV9uP7Jrp8fa6wu1d",
  "key9": "2zbfdCeWwF2dS7iL2rBg5VCWgb1Bp2s4RtXhaUHJ27FzgzxA3TVvmBPVSdU8wp1fuQ3hTSiHWGMLy5DDRWJUUyvn",
  "key10": "3kJ4hSXgrA75aBCrcBPXXuducwSsmA1Ss4RV8bJmjsbU3JePsP1BjGCS7yurGCftCr1ipy8tewHMsCo6RwXqff6t",
  "key11": "5Gdztc2omEMkzmWJKWLKgPZt7XNi1QCZXEydr3NGNUSZ6qs78m1MHW6nrvdMX4HLJ36Cmof4aSPpMAdfYXVX97x",
  "key12": "4HWjvkvd7j5wk2ueeKJ5FyBWvjrAQjk4D9zCaVv159oaxuG4utekpSoNhovb25s6Ztwy9DMCXHCzVbtKcU8ZUBfx",
  "key13": "3YU91HsKPByWGaER7iZrykAj6mphpgsuZU7rhZZ11sMxWYGgQfMg4ZWVXKCvZqyQatL1FzczzafHdR1EYDP5jd3E",
  "key14": "4bYVoGGGzt8yDEFBp7HScoAugc3JswpahxfWRsYh6rVWNX3zjeRpouNBUpRd9knwQPVijwwW1VSWdUBx3G9DhEpG",
  "key15": "5sQiTSrS8nXbHRy9j158D9KooCC7SQUKm3RFTrSfTrpAperyNtHRv6XCp2z5gXvF2qD5AHBgCAvB8CkdbysSdDf2",
  "key16": "4QpZKUQtHyXhTWAnJ1UqP8BBfv7giBAr2uUqbn13HgjmvGNid5NSpPTt8SqUc3eiZVxDPbTgvFhVg81P6sH5tY2Y",
  "key17": "4QaQHhArwQ7dBXsLW6oFpr9KNTJFk8dzdsyey6k9M76nqjkQuJCWpYz533pQH7PztbddMeZfEuPZanR1c6txoBMc",
  "key18": "2YRH27rdLTNRbYNJxwbUuUCy48P1LVnRtPtWbVrfdhpefz74B7kA1BumeaEbEVXGrBC3EVRth7hi87gB3j1eEss6",
  "key19": "4GHksKUeT8u6FLHAs5AgTt7cD11QRptJTwsvoJr1wxWtR56aBV8V5er1bqTi1JzBEzwqsQyRvmcbJ8BtaY9u4fKc",
  "key20": "2FcnUab7CgfVMgcisHnB66VniWg9cDs5bMQ5Lz6jJE41VeeN9udLWtcmkQbxLF5w5qpgynYtqxQ8mM2ymByrwkDC",
  "key21": "48cEqGTJPakX8X8CAqYPFs3rDzSXTZiRSgXvMy9bCKDa1jEZx5G35QUnjBfbVEDhzwjWpWZMbKjiTpCjb1B77Sb3",
  "key22": "qZ8N6WRR2WC1L47ti1ZcLssxUTqPWNK6ND3dWu8ZBUJScxovbcWH72ZJ72Wvf6EAiyZWekAUr6AscEGEDMvszzT",
  "key23": "5CC4bVZJ944Vk8KMd23RV3eSM13tcMC9sVVaunmzgvrcRusweX6EpPRE5Lt91nMd7QFVUamrtazFrfAb4amvUcEP",
  "key24": "2xjdU4Wxo2ZiNK4MprnpgsdTgPnFkKFPxiGLADKHzX12By3cmmq897k9f9XtN31yGxwqLY6EsLAYEzq1ypG6LihH",
  "key25": "2DuxRaTfkHs3UVzJfAggcBjUUhcSZRxauQbxqdyNmEz5cxwJ51h4nSEE7s1RPEHFo9bARa5VQfGkF6MB8VJMvJqy",
  "key26": "3a8VdkQzeRr5gX3jq58qGGyJZVCACSNisczHTdBsNLgdjSSG7THCgsDgsriZzoV3Jq3ZMwFMy6a1C7x1qvKBjTCy",
  "key27": "3e7PzSJbYjsc2opL7JKZ81TptLo3c8tv7NPqFm2aZeGJBXMuLEZ3UvNVhJ4dhMbzgnaVAidtJrYmNd82zibG63z5",
  "key28": "59ymq4cvTZUcZsFev1iToZjG2dGSTND8wLXFqvsqrzdTJyhTdnteS9P1cKci7qiP3fir8uC8BE7J2jiTp7pP55Qj",
  "key29": "3Msux5sHXuYjA5DtX4BYD2srJujVGZYZvwWnzFpty1a9LrjxAtFtHNLbbQxWsxhiQDi36gW1w8KjiN7Rm4A19uGK",
  "key30": "2W19kgjrGvTdX8WzTCNJXmyVuXCz6n7T7ayKcgsAyZhDFiUjdpdwq4uPio9RarfMfC5mXxBBYugMmjsDLa78cyQH",
  "key31": "3CeaUeLusoxZYceiw6oLzU9SF7gH15D9V4QBDxgM3jV3QSGdTearC7ff1WgxmbPAZqy1h4S2LsWXELVq4o5HCqL4",
  "key32": "28D3XYViGrvrkmErE3qDup93jceGRY2GyRMptQFBcVRnixwUJEjDuG17YCdTLMAA7fyqDyjQC1SNz1VKVjRLhSti",
  "key33": "34AoUXBj9mUoAvL54hcPA6bfYwuFbHD73GPs7HmEypibTMJr9TPUqrVZbXrg4cm5WXfqeqxYQGJmrCknfuuDL3tt",
  "key34": "612xEEMxvN1fgWLzZRZb8CvJmDpveM9QUhJxerhe4xsjTMS5Zzi8RTEcC2iHKHPGNSvt8A7ctgkpcoQ3Y7ryBMUL",
  "key35": "5cpyfbvFcP5LeebVEtbBv1iV6fEi5j44J4frqj1WPJQTMtnhegZpbZj7iFWe2VMD1kDoWoDmbb9iFFhn18ksT4LG",
  "key36": "57fkiDDkbaT99oad4bJZfL8618ZcN6LpjZkcjLjjcXbc2vktJVbLDxcWMtGH5VJVytXKHeychJS2z8NMbMpKybnz",
  "key37": "4xB5oNEtyZPV6ssqhv4k1gjPwFVJDgRLT9fEMLLaCyAHpVZGuy8nG8i1sj4Zn4BpFvRJz3bwCttG4GpZnT4VXeDQ",
  "key38": "3fvgUrfUWgBZmw3impdFPMrbgh7Mu3TLskno1Gprok4m2Ch3qdcCdrpkTE182FKD2k6zP7ePCw8XvND9Lx2Ae3y8",
  "key39": "5wkYzmd4A3aJa9DN62AtfKWMrQea21c7QDL72KXkyu3sPQTvog4yJtNBJhS6kpy7qemZ7ZbB2RYgaxhzvubEeNRo"
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
