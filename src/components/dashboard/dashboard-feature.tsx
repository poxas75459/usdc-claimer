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
    "38tSk72MB9fCRCyp7SH2cdVkvd9532kcBPUAtPD7eZmE6wJzJ7D5cJr5d7sswjKkAitFc789A2WkP4NWs4ie8Xkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AvvUfucSmY3KbjUKqPkza9ACHxFoavv7N4TzhrVHsP8aY2qaueLQz8TR1h9JuNEvhtBGCKjJ7nuZUSJAWSxc6W3",
  "key1": "j5T1PBiRufuQ7dcpscV3eXry1LrM9vPD447cvFfo1hC7e4YQxgA9eUjMLmYrvB7X79RWyrh9Ae7dCgTLZHKX7En",
  "key2": "5bNCb8MN8znD2RGAqtRhmMw34xVnGdL5PmHNWZAS8YkhMn55g5Jb38hXsyvBDGXURgh3erPPUwabzQX3skWE6reQ",
  "key3": "4o97BaiuxhAjQw2CV6DpWqQYsgZLuyfiy3u2LsXJceJLXvvuxChjjQrLQPzpCLFPjbtkgsFhwqR2RYwDbkVPc3Z6",
  "key4": "LRV7ooeUHHFpt5a5RpWmbvyXXZDuo8FK5TyLM3Pm5QZcExteNzByq7KLv1V57SvK3CqpZYXxbaCS6M6AFrv99gX",
  "key5": "VFzxV2yZhvv3vtF4M6Bqn7x2e6HWa5iKZzWj8Xby22yW44RqEHKmRYCnXf8cZBugzxasNr97rPN9bovviZ52bDY",
  "key6": "3RY64kttrGoYxdFSSxamtDbNfn5W9DXkVhVxT6pg9bCnUq235o8bLFNcMv6x7FMy28dSqygkX5iwtF8LmBdWVmLK",
  "key7": "5Lap73jxQyPu4o1SQbs4eAMjkZMHKw7PEX9aDh6AyQtw78zn2tehfDBDpzcy3WPjjakTiua6y9qwos1sx4B9PJky",
  "key8": "5JnxCpnzfD8Px56CgGduGxtREEKxBext5hD54vxg32yLCbGGe3gVioo7FmMSKPXihtj8ZJcNqZZ7dwztmSG2hgrm",
  "key9": "3nHYY3UTe29bFZbZwuij7ge5X8ZaAozY58BQVB3ZJmV658Hkcj43ohVG3dBq3L51kX54JLNkDJpzcwv8aWNmS9QR",
  "key10": "v7csuBiNe7ooqoPZ2SYhQmcLTTRQMYkHvjiSnvG5t6PcX8Tqe4zWoeDpouHmnKATeB6bN9Lj3ykxyQyaC3vFKuJ",
  "key11": "Heg6KXZ54mqj2K2nCF97xrAidaSMRB5JaBDEKZR2Vw5DmYDJaNQt4RfqUGxLqn3e4z4HNdvWhsjshkbHh6GbUHC",
  "key12": "5RuNDULmaRHMjJzFvsasFSoSRStpyEvpjuBFbrJjUdDcfv2C6ecJxeQyGDVqxS3WSsZ2GEJSfsb5msNc4nL72VXj",
  "key13": "4GAhjBQ3twAYS3SbeMMFCD4ojBWeiRKdxTfXsSEg1enCery6CNyhYwN97niaJeF7GdqrVycEzBSZgPDjFEKjTV3s",
  "key14": "JMUMnw6wZwvCCq7j2mo3YwphjeV6AFKxa9J7urdFLDpZsAss6gnBYKCESwyFL8T94Ah4v67zTwDTJ7mC8fWKzb4",
  "key15": "2DNTo1mnQMh8EuztQr84jVqQgegQCFzzMsSBienf1dmYQTeNh9jWvQ52mogVFYbGYDTMZe9DbrHUNB1hQPwTnBPw",
  "key16": "3AYftoDC3Nnn5RjW6oLdiNRNXg8TsWcJcqqFzmauAXPu7jRkjyKpy1bQD7G9k2McCXf2WP7fagtF5Trb1WXSuG6T",
  "key17": "4ydqwYXBnNgwFVtAnePzyj8M3fFAgCmCoi1vSt9o2xKShanuvBVK5G7xWTqcFnNs5NfqzGN2HZn5Ff2nKnFipBXW",
  "key18": "5jgPMFRGcNdSddZZRATuFg43rE2r2L5zhjnKWoFFvMgFU8WLqDNV27Gw1HfMdCbRhxoY4EGZjg9L8R4MQwNezdKg",
  "key19": "5vpmi5U9DDxJBJuJVLNLNGXu6ZiiDs9nNPgME3aUGAB5T4mGR3MdM2mUfEXE6aKYJJck2wmJkhRPsMbQNqLop72n",
  "key20": "43jr1qj4TrcXBiz3owzDmD1v5YGz1KKBoTgTq25ZYfNrLMEKL4JNoQ9utiAQvo9jRQ2DAepBAjLpmxNrZ1DVihUk",
  "key21": "4QoGmahuXHBrghiRQoR3aWJKLH9iWEnkRSsrKWBuZKrMWRWgr2MxGmtU5LWCKVb7mvpZuiQMCqaAKht7i7s7E6vM",
  "key22": "3XEuQkXZcSLTkS63MfriptwQfKFvFzrAVjbfTiqih1rAx4Ng8Q3mmoXmSMsgdYg1JwHnXKN3RhByR5bWz2z7nWxY",
  "key23": "DZXCWpUhYAa9drznLfWBiJYufUSiuJrSpXtf7yScce2iTq8WiDW2X9wVnB7cPaXm4ejq8D7iKFEqmCJrZhMUXZU",
  "key24": "2v4u7ZqZsbusvbvhAocTBC98puiZkb5jEXFJ636pH8t734uCRZtjveD8B7DhaFYzt72EBhpGwF7iYFMRMup8eSJT",
  "key25": "2mSw98cn9MtrFHbLtARSJXPpyHDF6BPSW3KUG5GawtcPaMudxTFyRUw9mfN7BT1vuF4w7Nb2jsXrXrP6YUzBMh8M",
  "key26": "5WHqqQog1gDhjnZpn8gX6NthoF2RxLf1nyfbhNMTDXmS5VMMNpYCJBebhuyYuwYzEzD9b76ALQKAEJ4D2h6UmytB",
  "key27": "2vQS6bXNdcRAeXoJXAbURrFs5GTDZRbB4X2Mrrum81EpJJya6j5drXTqLT2AYEKpyENnsmrR1REG42ceaZXyBJZ6",
  "key28": "2emeYxeBZLKmc1pud9tv3hsxGQuykFh9roihsc5pjnpVyZfqCak4fCpXzR3kaq3nw5JFhbFqe1Kbpp7wRMoLAaXu",
  "key29": "39WoGWMeJcpkKpCByDvspUrKZb2Ah3WhySQw66YWh9HrF6mn8GHSRYRKG6MMMWUkUP4uVAJ2Jt7G8xMYQGvzu14t",
  "key30": "2tXCVC8ur78kXQyyHqgTVumwFK9W73uzfnfoV5CvSkgyYe4X4hJJhAhoBzwZHELucdRV7xDrozmxmgbuzDiNsygM",
  "key31": "e5ic8Tv3tQRbMRk3y6JGVVg12Wda7Lsx4DNz6p235GQtMo6BQZQSEYcTAEmz7uDQcQK8htva4LkT1DtSJNH16co",
  "key32": "5EDjp168QSwqVeDKZ7RYyGGTyg4zpvntuLoBknJmwrA8M1rk1ht68SUCjmYTNrD9UWAYXUwgcAyKk2PLfhbsmJBn",
  "key33": "59589J74sTNH84ws9tk872VaJJRnMmDw1dFNL2YDKhRA1BMVzYvLt1ZHTAJtcodLCDoa39NFsVZp5x25iHFrymBY",
  "key34": "3B8mmkT8n7N5AVRQMhy5ug3vHqpjSFuZr5pVGog6kWQuZ8xxrvAJc7FVbbBfEweu6FfJ4ehHdFzMLoscEdJSN6hn",
  "key35": "2FX3VYCCFNEQKyr3dxbrk4KQ7t4CAVG3YgrgW2wFM7XiE2zjbAK6YfTdLsArxc2HMoYGTk7rsUXuAA1LWSBpM2XS",
  "key36": "39o6YPfZPVsetwJyj7aV6R7QKXHEz9sThCp51cBVmFryvLmocJDVURgpwqtGQJHQUVvHR4hAXYa5kidWhLa7X5Cq",
  "key37": "3JYUaT6Zfkedz8DgEHBCXZqcs9hRbmANjvb3CvY2B6hweeabpFH7ZPy1x7Q6q7veWgEo7syAkFZzh6RgYJog8wmM",
  "key38": "2bd9ksYRSS4tvgNSSX35gCCd2Tfceqjq6mf3sNRuzFJwSqGywHaZ4YjhbgD5hDTkvahL8UX3TaJjUgcYL6gtw9f5",
  "key39": "wvwzNGdykS4fyaHxHdoLnBMTMne8LTzxqoyEmKoj1YttntfDf5wTRKqqdyQ7hscd53n8bJCWQgAY3Woqq2BwoWQ",
  "key40": "hZzywGzknc1zibAPzypedoj9eUvJAXcL7JAdyGwhjZTMMoL3tztkMB4g7vioGnY1XopgiZrxa7ppWHFZGcrB3WL",
  "key41": "5NREiykn3AXL7xuGcMWfnhJpcKXyBmcJ9P7yfX77CxVKLdvrRnAfg92v89k18nzx8z3S83WRdQNVHxfz2nj2FZ5E",
  "key42": "3j81qPnsCYqNpJztDr96auqa6V9aqAxB6UKmJffhDULuGy6APiV1K8t64yV7Cz8KdJ2QnxhDHoTh8EQa6SvmbLMP",
  "key43": "3dijPYU6e7Xpgxq9LQnMe3iTCzEVPq1C8psrtoduWUwwCB3NXNq11wRHcmBfncxPVmXsFy78SgWzWRs72BZzTP5E",
  "key44": "yUnuBsJP1Z34bvn8aXVE8DPbTGeHYUf2N6o5ttCQcyX9RjBZDRRg6Dzo5xAvi2MTxX2bKQpJqfupvUUj2aVBH6D",
  "key45": "2dKs8MMDUPKLngbtU68jp1Dg5z79YqaHEFLQCrL8FJbB68RCmfDVfUwuh4tsL6F6e2S4izVdE9ngVCAxyRwVDRsQ",
  "key46": "5qBMGxgkJG68dSFUwg2mkQhtQf3mY6hMydoU7oaN6cVzPNKsXhqxsoPqLqrKm1BPfcqM2wLQipnpY4wLdzECFe8y",
  "key47": "RbRwte6jJ3LdQGecnqBPA4wdaFS6uRwkn2qj9D5QVWCUX9XqpwmQJ3aAGpjVPzoBMo1CtXMaVzh6i2s3tizAZY9"
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
