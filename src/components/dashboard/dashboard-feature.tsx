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
    "5WgeoPH8qUuXumJ5kTXXBMvyNAPTfobGpzqTFLYqKgwDvbnoSQHL4Adz6adAEE8Wta6X1uu5RWYx6PNk3PeXzpzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "528WPR9hpdDijh5Vp3zfZyWDafxBCJ4LBMWXBeMBxypiCCm4sxYcnweya9xQjB2WgFeWkaFSaQfhEEydk5L1HruQ",
  "key1": "22RcwiDVUWyfzh2eXojdct6Ci3zKuvH7ZD8bkMeYfVb9kqACHA6bd9TrmpzVq2Twd8gHYvdDZenctGiZpP7EwDbv",
  "key2": "5ZruwNxsrvfiFuXPZEckMo19w9EMMkPwpuD63hHH2x3gPTWbUeia2uwHJGRpHJcev3JFw7RypaG9DLhWmU3H3QEq",
  "key3": "4ZWCUZ5fLwwwLvQ1J9cBSVSF3Uc31zQvUZwpauXFhQdsfuAM1dxehrcJvvekjm4yDDvq24njnwULgBPE3XBfPMDB",
  "key4": "4saqXdeQ69kBdfbVQAWsajgCwDHdLftF2nRYpsoxMT7jZJeiECQwGVGCmHf2X6zu5WV13Xaxkvv9UvMHu2reDCmK",
  "key5": "5hRddovdByBukHJPFszCsXXPrr2JiK6zHJTiEG4cw2Um9YJVJRF5JKXmwrRXndM2ikLXqC739HeX6UGmRefcjBzL",
  "key6": "2FUZWoHQuHeZiXXDzBXJGnyPqJbLkaeQUmTKJYeSRwpXywc4Dx8bMZG5seHMDXjVD5GhfwungupzCN2JTP1s26LY",
  "key7": "3hieDjpW4FHMdx3m69sUReuKEgAiRkTLnuLPUKtnkgugcJhcqcagFgtXWoSyNWHLpZHyShzM9JizdwJFTcTfh8i9",
  "key8": "3c2LdvJpvutj6VwWkKfeyR51hsLWB7a1GTkeqTTPL48uSc8J3sarav5YAmTvxsfwBPKzET5gaDb8Q4S8F7LkhTX",
  "key9": "2ey2i5qH8jpWiK6LLQTc7adc3M32iTUe1RqhAFHkxGc32vkV5tBxXTVAyfT56Ths7KUBE21mzJ17UxyzPentCqoi",
  "key10": "2Mx7ZpGasxpRQqDkT3PEBtptVMgomScjANXLXvwXBpo1AdE5xERLz5w1RsYhvzPLYSksJNEGXSZz2GVigfzGbg9Z",
  "key11": "8nhvStYVAjuvfhcQBd1VzAP6MGUDevingzpKDte9dBzcd5P2T3DUDZ4ztyXZtVBdwfeKyAxq7B51QL9cqVu13Vc",
  "key12": "5kp5vRk3qxh2VvGbZp3sKnpr3ce1bsJh6tq9QpjiSF8BTjLo1rQ4MUitvCzswm5dfhvnrPnLvBixTVzhEDNtvcx3",
  "key13": "4KkwwY5bZNFAYvL2LkdBnkUL5ZVvZfFxopBRe4KoNrqiQkXgD1xB35SrznUEKWVi9JBWbP5uciJnfzXL1Rivapbw",
  "key14": "4qhEu7NgbBju8MsSCV5VLutHR8PUzaFocHPfySgDkfk4LayHNKU5fpyu9wwqn97rzsyAkXsgBLxbvTJ63gGFroSC",
  "key15": "3iy63pQQT4xRUjC4v316iTy68irDLG3xJ6PSwEwLVtHyRDMddLMr2zVQfRNX7SYBD3As53FWz4uRn6AVn4wmzrAN",
  "key16": "3WDcGuEdsoi7cwEW2SNBXcUvps7geYV8UPWPgD7wFBQTC2Q5czw6qLfK3YqJHwFFxusffrQpzpaQsr2PVaeJFAuL",
  "key17": "5K6wodUrX32kj1mpzqVTEGWTWSRq4jkL8oTStZqiAbhv7g1jt32gusZrwgAPo2d6eV2CKg7tLU8VQMhqDQ1j9Yu",
  "key18": "3x1mJLnTRhVwwBGmQSzEoWUJtDyeQf8HyorjuBc3WcR1p3ExVrnAfTsz6TyoEZiBZNRPZ71ALPJF4UtvF7xXiqeT",
  "key19": "3zjnMsEBiHHsqSYsua3WxUHVU9ZccSTddk85jUEA5sSU6NmuU8Jep9TCwF6mJxEdsS7uVdfGvEL2E2VcJuGuSmhi",
  "key20": "5GT3FmoX7t1Hb9khQEfzatw3xbmQWdsDCaqXvUZzgHdiAEEWGXHD8hFbe9o8xTFoHwkR7tneHi5rArdp9isGppRQ",
  "key21": "3RUdosr9HosfBEK5g8S5kbtPpRqLLVrcKYcibVugpzgSesHS82JEAhBqY74KJ33AdM2MfGt2WTFhywi5rMybTT7z",
  "key22": "qfFYoojgfTKKmFCZJW4LG6YdzckyEVvzqgQgqqwPKDMccBzSL43q9YmGJ4jQAeJoCobWfkaVBrTS2g7b1tjW4qj",
  "key23": "DBDCTTgfPGExLDN7dHKztiwSYApGbfHkm4fzGCztY57RW2918znJzxE6onGkHB9Hodi6aPE8RVbE6mmMggP9oju",
  "key24": "nsqhF3LrzatzWweWcM7BPs5RQzDQQEfsAtNgAH7nwfKh2N7KqDcuSXzGg4amvGTJSqUYeLwfksGFYjLgwTHtxBX",
  "key25": "3cT1uodNHCKPobQd9cLVyqeN59oNtEyrnahPzMuYBQzLyECLbp7i3VUaVXhFo9EYBUSfkTUWHF1Qa62myYM5xo2E",
  "key26": "zbfLMSda3zty3vdfTF9tvCWux6PnNiqPF3EtxC159SB1DYwZbQF3sZJwvf9Y5PrKncKy6ird4BtLRdgVGKPK3gP",
  "key27": "62ShPQYJxvYDJpRyapcgnmkeJtHG3aGctyRH8YMq2ZykYyfHCTzPbjVg9V4Kx7wHru8Ypy1CpGf6VnzB5LaYQPW2",
  "key28": "3UmgraCDm3VCkjQfveEeo2Sk8FypFUd3n7ReJynrdKprSvskSgmC6kYZX1DKMEkAF9E9qhKDmN6dwKCzBFZEv5En",
  "key29": "2cSbDPPv9HBjcDmumThe6spGwZUDuiK1cujmwYdZSUQCmGAcGFJz8qfxJh6s14bBWrh9Vg87C1WDGD8najSME4et",
  "key30": "2NDvFqtCR8YpnoWZbf3MLjJJQSVGWhApbz3VwSsXaRvSoe3afEGo611hA69R8bDrf3ZjjgDyKLrfJcAmctvzPHMm",
  "key31": "vs6nfqax3U8ZWcS2ic2NDgg92YeLtJTiFxfYkyFzd4FdzX7ZwFWUeFV711e9SKYgMSy48x3PMpDkQm7cedy4bqf",
  "key32": "28VDC26dC9T9ZK5jZ9VCBALpst5J8sEewHSfQoCfFbESWun9e17DQr3KfrNRcwsRxahJdG8CvMgqegPJ43WyGrzV",
  "key33": "41rsT3ohNY5D7H4CvYUMdo48SQgyMcdBJxVdjNfUmrnxdi9EJfeXc7NtTCyN2boYjrT2B8ec7Tf1SmgHZNqBDa8G",
  "key34": "46LQm6TLfKw7MKYGVee3THttDV8EJ2hGc2Q4hvuQx1Q1AFCDQTDrEgtbdt95djpdtAoA3tMK8kaEhzKSmxiFM4AX",
  "key35": "4L6aveKhaDCJeimT8dpCjYRWtifVeoF9txpn7xyengt2pL2wua5yPYEHpbhVokpVDLUobKV1rquY6UAaKdiXKwTx",
  "key36": "3jYv3zqD7eB9MyHjzoaASbuAEJGt7oWRVz69eG6Jtw9tgti4WQhQEDnw4coBgpHTCXKjw4Z7gQGMvsSLLTdjXJRW",
  "key37": "4yYoynB6L7yWkvTaKaa4mYh9oUozd95LUj53ojGMR2HUvF8t621RUEZQxGj4WWhnW3vQKjcgKtCzF2AM7iwVFzBr",
  "key38": "66NRdgqau5X4YYiWYuhmMpwh6HPgHXyduSEHho6XvFLQ2yxQyNS1QxoWta5iLGWc6UEJK6kpo4VKEwHFTYXxVvJw",
  "key39": "5ggQ6q9ZK29X13Y7EKRAyRHRECfQvXWrDV7J9T5WNkdid11vS9Byc2mr615yiDrQeBb6uYisfkfMQKr6CaWafEFA",
  "key40": "WMLpVosLMVUsAYZgsfgqD9Q29xZAzNjM6bNHTfQDDj7eXo5oEKVLePcnihhDQ1eUYQc9vesnnvpjbbXZDQjCnc2",
  "key41": "5s6TVq31WkfmxKEWUVwEwExetkxViGVSPMY4YMeW33sizay6AycaFnapPfFtb4i6XqGSw6geg2r9VEwjn4f18pKH",
  "key42": "4fuF3ZGHxoSeWUgydcBzmGzNZtbYLSxRM8nuDQyKELwRoGmgEUeDmVfnQrbWk3nyUPw3zpYMG8L2p1hsJc1xq2f1",
  "key43": "5DcFd7TYnnsGs4cM4GGqZSvZiAg3mt8WCGp718ng1b7RZw1VvEQPTKhtf39DWQCoP7ZY1nsZnCAMFA7vQ2jtejJq"
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
