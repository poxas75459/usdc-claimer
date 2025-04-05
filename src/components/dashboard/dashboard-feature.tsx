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
    "GExH6yT8YF5rbxKP7yaoWQRDszixCXtqCzUCJAE6oTzJqibo3sEUoynqSR832K9DVJWDAajvs4t551HiRVKmBAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wP6RSYuuDfmNbCPQUSfcmPoMVveKp5RaWYsdcFVTf5C5LHaJa7itzhBS7p6Rc2yqwGBZoV2n8mvTU5GSuPQGCCe",
  "key1": "5mJXVSmEwcZgu5bsEMVQLUt4kmKxq6jefUqMgisZjRp83BdZeaXfnJrcmqvbr8khe5eVV5qMrtQ991SnucTKEjg7",
  "key2": "5oBsVFqUTBBpoSEsy744fnprjyxbLb69s7hPiXkP5o8gQ6jFqw5B7WiJf8dove54kw38du1sMK3NC4gTqC9xk3Pd",
  "key3": "2HLJXom7WRLAjrJKRRTJzYAXor4RqdG2Yho5PZAPcWC7mZ2KYRF6EAtxZ8upyhPH7z5euYdc3tkWveBe8NzcHfey",
  "key4": "54gKwbVK8piiZnfg749Dg7gWURTX8jfjzzGMYh4YLcAiunednVHa6zPuioEBFusBowFBdG5a5PdCNeVLM1cCjPwA",
  "key5": "5hcdMPTZzduyf4gnbEQyNjH1mm3DgHAdMKf3fGqzmrMVH1Q85nDCBxz5TswmSmisdQwqohradyoGoZp4YyKdNMDm",
  "key6": "4TxQdAyszaFMPW8DucqQY63vZFSjZpr4ggGm673MK2fkCybR8VAdkMhud4fGxHvPsH3x5dWSnF2vzDsE5Mtq9FBK",
  "key7": "LXXTUFdHuPuJJZMQ6ruGjFFR5mkc9DkVLYE38U4q2bmWuF3Asygp38opN1PAkJgvjGMDZcyknYEEBs4YufTB8kc",
  "key8": "AjYB3XfBeQxtekKTLJodBqne4WcDta1CfE35yXWqDLh6F6HdvYfrqpiD1fX78bNqDP6WaSvRRu99J8b3A8D2i3V",
  "key9": "576mLxKLzjV5foSErvd9yNJGWzGdwXqWBSgTpjhFy6i8HWgr1NPGpfUVfpEF6796u17FWp21e4oS4F4xm7GeHgca",
  "key10": "43MJLJGBrccpFhE138HcX13q3TEoJEpvoNXfiE19JfF8JBZDiULoM83sMmm5Qo1rfuLF1fqBjLPKgdnCNbsn9Fxm",
  "key11": "534H9T3AKJYLp92TKKJSN11JSMNbhgzTuMdMLTWm7HLjnjNPwsTsn95GQpkKXxKSHnyccaWBPLF4FkS19i1W6ZRX",
  "key12": "5zyDqMv4NvmzQJ2dWPDgoh8w5zj4nxT6MBxa9dh2k75zRD9bzi1bmYNhXmbhZrrx4fzRWAZZoMp5WxPJHjpub7rb",
  "key13": "38uiAmznYQbxW2KwnbhhHsYQn6StPJXtSBkRZEc831AWYCh4HEFrPJ72jKgCYsJcpBo9qYKDPVvr5V3DNJQJ2hHc",
  "key14": "27vgvcfVnyJHza5nRZXKR9B3T1iY5VwvHEGaPrA7qoN2T8eKwCMXJh5RQ4dgAES9wvHmeejM9oVMJ5ss6kXtJoSc",
  "key15": "2zuSBJFdme5QE3sQZcr2WNwuBwnGfCeebEkfavdKKDHstDKTTkgKpCXZeazwjtJgwUuYKVavHkJW9ysCT43iu72v",
  "key16": "2AwWDTxEL1CYxx1vPbkCpqnBYj27jUXRBp8nPBpZsotUc8Aq59FetdiD1xW7E8QGDitHqGXSwPjH8xo6G26bUr7i",
  "key17": "5c49A1zDpL4fdQVZjsyJ5HoMXiZzYJKFfjMjrafqpW3ACPwRC1PjFawo5iucG8HMHD33WpYZWMkDjhZKnYuUqUvs",
  "key18": "2xWnLeymsHY4C2uUjMEDqEx6pgfkRVZX2jo4N2ZTPbeRXn3nwJfRZ1gGFthBC8dZhh1btjpWtHb96eFoLY64boPU",
  "key19": "2unD5AVPpaNMLNjQ9GxQKTecWXeiE4aukRgqhuGhJy54wVbxJRLWviha4uGqy2iQtFz8QyyRPw5yJXy9Ae3awcnD",
  "key20": "5W1qQFkrVGfiLScs8WvTpqRwiGp7mfW7N6viTbeEPLjd5GibLZaNCbFM1GQmNTPQd1hQYbVpFYRQ1PZ378y3xPb1",
  "key21": "UveAgSWY5UrG2TjsNnTatURRwAN1hiJNea5ZJoQz7nyuEthvqiwEnCubbftPNVXrAfaH7StYwnbYACTx3gWbceP",
  "key22": "4SDWLpM1k3xZVUkT5QB3XuWvMseGZTsBKLYFDSmi2bt7EEbdqxNvs4cy4RuoChGNBcmSz9h6yDJm5F9auqt2kume",
  "key23": "3j7YAdfstiXP9Y7vkMtnJhiHqZ28jqe4tKPswgkF73NgBv14DVAeUAZkjJ7SzMHrsvWDvG3nEspmxZtCa7L7kaXj",
  "key24": "5VgKGdA8aBsTkHPcQXQkcwapFme8KWKwCCqBSSgGLGw9QzxiorhwM3VY3pwV1swB7bf4xMGdkWnzNadYSawvfnnK",
  "key25": "5VzSm15Zyzzuk3ngqVmRRCPRhypdBbpkd98Nd5WgRPoecsYrSCrBGzRq3UhhnXBLgokEtvqkhWLvimLfpU8iwPU9",
  "key26": "4V6DhdRmWvZma1D3i1nFdy45GyevEMUPQZ6rw5TXJEfVTqJQPTWtBqwgq4gFjYvtZpedRz6cpAZPywDVftXNdSx",
  "key27": "3gbmWxYgySNC8i3oNokhNqQxeJFBR2smVnaazoJbibRaKWAbVCcEqXi5uhfCkCsMyj86W5jKYpcw1kE2G7mErJ9v",
  "key28": "42HDbBAk3fYx8pwBX2asfGzufXXJNMqPyGgd29uFkZSen47XzXyeVLHSGiwYrChRBXAH9a4dfGsL7H7suN1wwMGe",
  "key29": "2zPrcn81Efyj5BwY6AdogXSFCbmyqTnv5pDbsQrp7qr23NvnCfBY58jdYNF4kN246TE7h7QWbFFNaBtaT51JfLHQ",
  "key30": "29UL9KQBMpNoWm9F3XyvQvCdjBXbbg7rJbt5MRV4Np3khCkpk6ACBYjrUYnBrp68Spri3WUKg8QJACqxumS2pEed",
  "key31": "4eq1qsXK6bvumKvzqnpmxAdVPa9h6FkbXZLykJFh4hN2CK3YmrvnHEBv6xCovdeP1sPGLcYGm52ZFkJ1jwZB8tWi",
  "key32": "64E1GHmAkxws8kf1SHmLTvviGdJpT3jhZ7CGJE62nYZGvcq9eKM1jJr4kTPapV4Y3MDZuWRkJBLAYrAoDvLBYezg",
  "key33": "34ofSsKM9G2CPTwPW5kJCY12hYe9rz8gip5XhYjWXey9qvGPngKaovBFeRsMQpa9A4qVoqEEiVe3ZNzxn3xBzvYn",
  "key34": "3M2hwYU7rEiEbSgs72Tcss35UdQeJESDpuPcgLfHdCFAgDicjAncvAbNZYKcW5XY9Eg4jRwAkdq1mR4Gcn8gkoGJ",
  "key35": "4rVYaJdHXEgSGvjj7B5Sug1SAATeiSH2GWX9Y8HEYCHBR8NcataCVcHXLoyMDQdERieHEwLJzpNNvNhhzcnwLmLY",
  "key36": "2eefSn51u8cQL6BhSKXqVBxDYX3wMovRPMbYVTWAvLya3o5b42WNvbmQvp9NkGhJPx2nj3dXUosnzBBRifD7zQkS",
  "key37": "4TpnETJXduaYJNq6qWQqmPFKS2fNTssf4hsLQU5MoDnZ8KNVTRoNkNpmvh4GudBmKAvzrTwEvpDVQ89U1Y3DDSQ1",
  "key38": "4ur1z9PaQxGq2G8PtLuERmVLirLzGZ7wy1Wmcvhf5jcU1B2siPn2T2UvRCDZARsBg4nhndC11PZ6PdefPjpNqF8u",
  "key39": "3XMJbmum2F54JmxGHph2wg5kVnwbD7E5CzAMPa3XjhdPqj4P5oVw65P9xw3zeq4Rbjausn8dWdLpuwAe9VQEFSyK",
  "key40": "4RGRByz1w7sVTUstrvaPKbUVW5TxcXgXVwUTiCgeufcjWSX4fk9yz8Xhg68SHYpfUestZnxkUTEHyL5XwXExsxAt",
  "key41": "2q3PQBvLPyMhj7YqCf53d2hVx45cVJYUNrDWoEjZrHTJA5L6CxJ9nv7nbS6SRWNWkbG3Bp25TuzNAMnZwzb2Y2M8",
  "key42": "4dgJfxNaihE4R3jphevZbe9TqtgW6nEshQuEGy8RtvYbrnmvTKWLBP7bMHYo97zkFeUBo6MdmwM7eeHYNwdGEWLT",
  "key43": "2ukS97MGEwkVpnGduZUXsG3SrtME6EZsnLe5huDRjqC8h3Kv7TpBnkchF2jJ6jBto1KQiLWJBUo3WTNU8AYLXnP8",
  "key44": "aR2pUUK1VRHF9Z2yrF2tum5ZzQsZvuBMU2ofdmha6QWxbsHKUuGdM88CyXTn4Yybv2kJMH6AWpzmUCPW3jgpVrh",
  "key45": "246ij9YUYUjFTmJfK61U1LmAP2NNs4YtFqcBLEP7JxebaVpkjdHenWP9tWnHvDZbrR7DQVmnevwrcPXsy4LBERNE",
  "key46": "2VZyDnm6DphQ4iWJjQJkjcauoNKkDCyBtHyoGi8Wqzh4SvChEBKwuzdaHEbYx3UvJy2gWcmmMEHxC1W4ae4B1cRx",
  "key47": "rWYZX3DHPtjBEPxuQk2at6UQH3Ev4eUYEE5CM4kpZL9N3q9Zyht7mzzjuGWRw5yW6Bj5VAyKPHenMoFubx2p7BL",
  "key48": "3hyujafi3zNinv5HkzDUdhRj3npjG3YbHCfdGSXZPBwn7TCyJcpaJTXggGxhAsqab8UoYT8nikeLP55igasYQqdr",
  "key49": "2aZoyz1e61dTAeXew87FkMUGLTtABEZk7WnqYaBsDwdxeqpMWQu15qHCgVPoY3cubR1AyX9uFgduCaMD8FZoZevE"
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
