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
    "4hbxj5r23cRSgCWF9eCa8ySMXU4eNCcRyGMBHb6U4iKw4xmcW8TxVu2oEApjtmB9XUmFnYSuxB6mVKYWdXFAM3Mh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yp9Cq4JnCZRZXTqUxUzvG7jVCPyMGztGZifTgNq3GGFBbRL95cKYdVQcaoRDwvMGQwdTGYSojp7WLmhpoEhNySF",
  "key1": "5ShQnAJs5tH6a9o3yseQQyiayiJkWYktLPkR6FMWvyP1fKSxRjZKgVHibcvzguiX5PrZW9t4e5MHpZ5sU6Sf5bWq",
  "key2": "5SwXUTr3xdEma3wcmyAKjjQBgJKLS9fC8ut5fw2N4U51iQky5Q9LWxakubTKbipYias9XQtvLp1PSTAoQfhkPuwL",
  "key3": "4EBzYwKQQJ1j66UNVFKuwdkiWQz3g5dmJ3pZ6cpdmykbAuAfGpBNERBkeSeoUnVUnAoTBMNBDhKsSmbsGr7K21rb",
  "key4": "4jbg33SfoDP7RyZvthCpoScFuH5R5SnPNT3TNwTHociq9a1fUGzyaiecvRt6XMsazqvmA3rUnLvSRcEBxAnv7u3M",
  "key5": "3eunp23dtHA5XY7KmGfdQfBUMssDj9ofLqFvAkam4sffZ2XLYu1V3WUBjhwznrCNLGqoZPTjnGn6mHEDYYt6ETLg",
  "key6": "4euh2voF9JoZj7SxnFQFHpG94oiEfedBTnN3opWdGvrnmiY7ifVt4th2X5htecK2ZyswjemBgEDP85NhxahUVTnN",
  "key7": "4A72QLP95pAvvcuPkWGZbpwX5Y5fWwtDQ7cghTc2dcgLh6FnWtk1VVLAgnM1kseyig49fJYsd8M8H66tjAFxTjGY",
  "key8": "2Xjf73HFKS7TeAHh1d8nySqwc9wfDfHCG8aFuYRhL9kn2rAvmCxhvhUwKyAeH6ZBshWGPDVs4RRpQ4sqi3K4cQ19",
  "key9": "5i6VFAZBQq8XE9BU65EB9eGj2LcPgtTP54yeympqYE76mfnv7bg3FpfhsXmp813rK4Ry93zvvKx5GutkkncMfn3g",
  "key10": "3Z5TxR92ouj8v5fyuQEsMwUEquDtpCE6MUy3JuTLVR9oMxhuDQZZmiejRzg15eBnUugHDURTJNH4F2PKYTsxdpZw",
  "key11": "36X5m5wk8CxQvTXY1jxks6pzXyi48JBhVbCNNCuEUQcjoVf73Kfp4SRTtytwwV9SZz9p63zAaoZtQY8q5Mz9xpgw",
  "key12": "237ULUFJaRwzhYvcpxAabUaBMXyGxAUukFZcruFwTusttqLV7rGFtrUgttndDhqj8shiUmAyWo8H4oHt7dCp4PG2",
  "key13": "66HEkdNJMfRJ2ryiwqRa3DB4oydpAdfctgZGkEdFFMVJZrLFpaYFzm9qY3jRrwLTJWR65P3fQosUD11Nn9bvVkhj",
  "key14": "3Gamy7UtGYeGg8tjALaT4EiZzZhjENvm3EsiYpcZUbAU1VDkrGi35G6binCQTMQpsb39Fvi2cQdLR4fLDEUUMFHk",
  "key15": "2KTXTeAf7mX4kXS5NNGpBGM3XmaTeuW6ZNVRsroudFy8Atu5WYsnYS92YEspXytneQQMsXKdSCnxbxg49zbj1bRp",
  "key16": "4eDiGSXgn4FpxVnZ3AhtPP6fFmu6c1sruzWSvMuN3vMZwS4ohaSZACDyEYSmPV6ZcPfm19u7ADfoFBf2dfStnxHx",
  "key17": "4u7g5Bs6tmCBPdfaiEUzWkhmkumF198S4Qxn2XdcxhiMrN8sbjq1gjm1EYrne9YvU8WpVsn3XfS35ZnNkWoBKVCa",
  "key18": "4QhAGFfW74rVF2CrAGUGjCu5suBcxBYNTmbLocTRDLF2WNCt4nEA6YVe32hfGVpAzAguCbKTyT28jd229r3ataPi",
  "key19": "MtvjWxt9DS1VqrNPRDQHtMxzxMAUh8CGmMkYWoBkrZCypusCiQVasQNdeFYU9zhvbrKQwy6orMkKj98hedT84nx",
  "key20": "rZLxGobYVnYxueoJGK1sZzhUJUMk38BYv6BuYkW2QtDtFeH5uXQAnBKfWVrgDpuiSD4tvL3snsjJFCNPZZHto6o",
  "key21": "2k1VenWZHrqy6zSR5hKRARMRf1ACwaMvSrwHKH8SbDKatmhD9KuAGrKdtp8uj4LwffzK9pnX9L3XQug6DU3aTcWz",
  "key22": "zRCrWMwzy1CffTCaNTyq2zWVoSoCUcRKYAmusikVbQLmhyNXjCyxXP9ymJqPBtEas4SYaM5xGfAqhRUd8XBQWup",
  "key23": "4m2r13LgPSaegBmhdG3V2qBcC9SfjxwncMA4sUxSTLFPLXxDgiqAtv9KKG3nENJgZ1W9fg28av6fginkVEc9yKDc",
  "key24": "5BsRoHbrYJ5iKj47c8T7XzEwzhEZpf1WY1xg8rRX3uTfg7diXac5aGnHH5mKTyNB22E5t6ixAZmQANmVRfzFCN7V",
  "key25": "SbGMk94FvvWXg46hfsHkzYW1dgsX511VJnVaiPfXoTFndyVvQ8t6B1EjgA3b2Cx38VJi6nK37sWcC9mr5nRMNn8",
  "key26": "3vUsPerve1GebnSjFYgRSRiN7HBsEKDpxFpDf7NoMf24Y3uje4d8bBRuBNRqnYaD48EnCiUkaWJdoWWq2nvjnyXb",
  "key27": "3fVRtuiyHfyBiKEqVo1Co5bbgEj9TyQY4r5onPoEHfaYy6XXiTRR6fKfWFHbj2tUNEQryN7hru4GUcc4RHnx8SiM",
  "key28": "2FPSCVnKLLYd9PX6cX6eapNg175h3aDP6o5k3ZMi68MzWtMyCzp5edog74Whgd8j7PDkb25BjfCQiTcQgjTm3L6r",
  "key29": "4Phq3NHPkxhbrDRFU7oZxTXEsLNDcEMfgC5iziQaTuHBbKSMfm7eztDy33vrSkvzzqBD8dX8s3jHTCtvuJByujcF",
  "key30": "3hWrJvAgRkLupcfdJq37dssgCBKhUeFkR1aR6TF5PNBRfGbVbUPmUZjXaXrBbQD85fbaffiaTjVNamhSDDvHJVBa",
  "key31": "2ggNDCWfbMdA649cAd4LBsWLvn8YEFRVDbLiT38GQGQPCaVYxUdkTMWcAkpyna7oRzsgteCjcpeFVp2cB2mB385e",
  "key32": "5nKzc4RH8Uzt7nMyFvM6iiDLwZSWXnGzVCcdUokjdrwyY9XHdppm8ociTwd2Hwtk8DKzdnPib8Dpcc46n2U4uZ59",
  "key33": "35D1eN6vfjjZUFa9rCSLc2BqcEdJBgftvRWZfQe5a2nb9SHCurz9EwdWKvFn3822PMB9novdp2ecagYEqhj3AaLA",
  "key34": "2tdcoYWvWboE6uLQAtYb9yHupvKnY8esCn77Ved5p53M9SEhNdMFJBqX3b2DhD7z6qJhx9raJUeP9un81mxMx7aj",
  "key35": "39tRXT3a6zwZmwx8d2KvFeGwwY2KESnZy5zHGwx3X3AGZHBjDaPhDx4HLxWY54SGZfQjb1HDTzKirYF9ixjbZ2WP",
  "key36": "2kpTFeR4ZqxMqrbqWA9raSCSRPt3bzUKyhKe6GXHjWHVN5i72n4N5cxKU4Pq39UYEioe2wz1z1MeB2aRxY6gQByn",
  "key37": "2bQaUThWM5YpX26TvAmGqKAmVdzP34nyohqT8nj6ZCTMVk3EqrGLb1PHyyJvigmXa15zH15vjDtBEtYMihTm2Vvc",
  "key38": "3SLba4AQtT5C9khxMGyDmiWAN6rL2shGqBH4QR2obpez5yBLxeuMB2Z8mmZCcpdYHdLp2ZPxYMMcFvHeyVqGgM1u",
  "key39": "5c87pQY3Rmrh9CXffDBBZqm6VXH73VNwfCCgQG7J9B1bbyb3RYiJomU3vLLMZgQ34xt2921u9wjHweDg3oNUdsfy"
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
