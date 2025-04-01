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
    "492tFpHSMJqX7kspTtssXyk3dDAXJwUPXVpZFw6MCG4WXTrsUMSS4jnMLNtuxbVnW9wfXmTvBC3xWMEajQxYUV1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sBDnxQpTzyty93Ebh9tCgffvoS7UQXgC7wcsrcK62eUAK1CouXwfuqQSU7Z8rXZ1VnoJjmn12MJws7vKGNRCVxw",
  "key1": "3Gj4pxXbCT8RDrgS1A3vYNvD7zMwyyy4gyK5o7aFVJv3PLHDHyKhASYgkQBSiZQXoM5d5B6PpmwVYywMkPvgB275",
  "key2": "2jESiq3iV8eHFeyfVP81e9nfgW4R62hoGLsxqVgeNpTeJYeg2RVSiFB584Ano8ByKXhHQQnrPjbPmgFqg8cjGpUA",
  "key3": "2vHD77z9Pc1EuEsKLMN3ejDGjjPmEK6WncWmvpHC2w8JtQFCsnwEBcr6hM6tC1kzTAgza1SvG14jsRnn9dpm6xSw",
  "key4": "NbZhJmn7fPP3rvVxfY2Jmr8sitsreRjsDPqLNQk1ZyMxAjNEV5EPKML3pZwpPHw17Am6LaVwWNfUA2PTS3V7zbn",
  "key5": "2R8D49bPQXeqdMigCRdf2mZhBvtSEsDfabZGyKqUC1o7hPnSNUvzfjpD7BSp79o59xE4Fvnfu2FL5xpBfLDiBtJy",
  "key6": "5DoTSWpYXnQgtHAMwcQSa1QJG876SPrkGEB2Tm6daTbybEkaMpYQa1KX3FYFbGzYm4je8oJfUeYW6jJjrRL4YAX3",
  "key7": "4NbhxGSH2zMZnWC7c94hcMr3ATDCWkdukAi5uowTPExR6J7v1d7PrmYrvTSo61yvz7G3yi2ab7RE7Am5cGbhskjd",
  "key8": "4wWM4uXhFLFcrcP7VBMZb23HeaHFU4anj2SR5Fjzgicd1oVorPm9SAuPzB1SUnJ17TKqnww2HecmXYzCRPTXXjXu",
  "key9": "6jgR4WPn7HgubJs82AEF7MiZ6GWCp5LZFLu4jgTPEpHAobvcUaonhQcZbdopNhsrH6KBiayQSkHRc3zaukhuL2w",
  "key10": "4NVH68GhXmRSkoUDJPnyou5NNTWz7h9Pzz6XP7zku7vE4T3TuxfNkqNyZhLzr1jwv69QPnhNRgDtt6TuSL6DN5Hr",
  "key11": "4JburXX1u4VPmW5M79UXv8T7L86YXL5LKcSXTEhon35k8F31Aq6kj3uuft6NSnVAJCXaJ1pK9tH67TrdcrKi8Jks",
  "key12": "37WPbqnu2c8UaxF17LgLw5d7ABkxEteSRfi9zXnexLezyaw4i51GHq5TD5QEhPzz16EnbutfGRqtK8p8qh7EqUkU",
  "key13": "4xEQyMdMnGuSp7DckqPzoZfYaESUcp5bConMj9rfN4DsCsuZCcxttqt6PSz1KfAiFaLX91Q1XjN7BKxjcuCZHfXx",
  "key14": "41qbtmKG3S2UGo9GFjWsCT7c6kbzerzFVC1uSHcNgRRFC7Xcw8JrXKy3vYM2bncKShYc3YYHMqpjYbrE7ZK212bC",
  "key15": "5Yzk4g3cgjWVSbwqUExZuhqpZXhd84Nn9QfdWjTGt6P5rugfgQczLPJbg9z1vjwDkxvnwp6kkAvDGPRCWfYkCRT6",
  "key16": "2BncowU4VhpK6b4EmoTGRRutMDnt4feMVM7sFgyrSnwUZJb7nHhBjH6rzbrSkTn8ZpAqdcDYmCbuUxJcRuN7fQn2",
  "key17": "2tnhnV89oYut9xdQMTBtZfwvSrJKAEiN9KKkcrSoiK4TzyCnrpUeYPBhpgaHYNTUjunRFiamPs2fJqt5QCXZyiAr",
  "key18": "2od8rgUjgncKSU7eD5NprzjZTTVgswhjisP7BdY2rdeZfrr1JpxPXVMe4HzohX3gSd4Gz6kUsSZaYdiWnuJthjHW",
  "key19": "m3PEPYynYaUpmakWfN1CnDL4HRr6hJyZs1wvc1Zermmp35AcuZRrhqAFn8zS2fam6ofv4Zz4Zk8H9vwoZJo3ig5",
  "key20": "45gvZAXisxq1YeScFdQ4agW29cH1QDXoq79iCvG8kcw7RNc32Tgo8vtCY9jqbtNE2yvxGngrBbHzVKGF28WEWFMx",
  "key21": "5FKSrb4AgU9CWcz6MqSdZz3p4BbCNph4Rr6VAgcnwdLHay4JV6Jo5sCZfUCpJmzsfBjCBefAdC5xbucKHgrTXTJS",
  "key22": "5x8KqQzQs4DDnzyQRW7GMQ5fqFrtbh8YQhcuQuKDgNg1MHKZT3EEX7WBMtn35zDAXxR5rpwgo2guMy2E5HAWECCi",
  "key23": "5KsBZtTwbHLrxvqjLpx5NE1miDccKHFU5TEPkhfzHg2BSpawu4JnQD56jHbhDezw5jeh2CfXddZeGp785zFPF3tv",
  "key24": "5eg8oTi2guYwN7BwcGLLJK6FvoJDY5RSrkdyPYzBYoWSHPBrNNVHAyAW8mnjSYzVt8kgARTjpdRmQkJtzi3b4MeC",
  "key25": "5GZjhHQfYMGYoRmjxyq1zHKiTBPUYouXv3ecqtAYdH4VjWCJqEb3BKAqdpBdhBNaqVNcP1A2AvKbYAUVNSq5fcop",
  "key26": "3t5mT3DuRi3HNitib2hUE8faAQfpANuUgfXV6WgSYETZjJReKsTAVr4jBBBwfJLe5gNRqGrANW6qy6hbFotmCVrv",
  "key27": "5uCCYBePjbKvvL8cjtfizrpuBoNruxhRMpm3AzkiTtijDwjvHsmgsgkP91sVyq32oz5ZEv4bUEDQiHXdW4pKeAVk",
  "key28": "66X8xkckFbPvATerRQN4cpeUReT7tdHyVw7kDMrLeCSiLoTB8KejzU7CkM1AyNZqaYXLf3qoRjMjvvPhoprfGAC3",
  "key29": "28dDWgnJ6SPK8caNcD1zDWevwV3BhMgVmCvNrAHfKrPY8Mxci8toRS1X2kFXpyjGv3PzieVQXzTmMSfZyK4Nf1g3",
  "key30": "5ZKLfVpg17bqr9FGuX5Lnp5y1XCGNTNaKiF8cqhU67JpR7dTcw4iH9jYYjqA4Gm29x2f5B3Z8F4dWqRBshi8XQ48",
  "key31": "3b1DW8cT6mBZhH3TsJ8qa1mn9HunWxjCELPEfPcJiLD3h7NFcohzv4V31rga46VWwJCcRgmVAmzUxcPQU9zCZVJk",
  "key32": "NWJCJLAgBSTkQM7ezRhCJ6y4ch1PKtnkm7SSDuk2YAV19iw9e3q7hXi7nm8MZGCp9iPk1xBQw1ur4f4ATTnKh6N",
  "key33": "4E4ciAjAB9hYcpAkur8Mvx4HhN6nrEEotWKk4dip58ncC9SK1RyPk3UogebeyEeVzYNZAVb3sRf2e3icngK2Tv2d",
  "key34": "3WmhmXvHAnVyDsMcrN87NDssukEW4GQZQzGutCfLgiL1YDyiP95Boj8gW2XgvZCKgzmsAYrhMTvRnciU6z4WYy12",
  "key35": "3GguYsJi8uz6sQEsdW3X7ABqhi1aiT9eamYgn5XHxnJq5yUEwtPnW1gH4TZ3SKbegmEMgxidCY6Me7qoiSs9SFxr",
  "key36": "2vyuzvRktD6pBsGEJVDwV7if7KKbTZ3CNMAzyp16N9bKmk41WRDaPdBKrweUmYKvUi7pwADTNUSot1CJX3YaV5vZ",
  "key37": "5Hscq6jnCxoqYYER1VC93EYRYyjF2xSoWiftVsebvZgq4FtFseJnzeoJNs5JYuHaf4VXnGw2fmg5MPNHPEdiLqt1",
  "key38": "JeT5FXD4xsawcNL9v7ByLnkv47uUagCAXvWYsxPvJF23uAVB2gScvLfsBDFjeFDeXy7C1Nhf7ZaY4H5GpMDDuxG",
  "key39": "56uSBcYEi71kWJm3CwAQKcj7RQm28CKMFe43pA9V7tpenBqmd4fHoMTE8Xr8UBzCpPS6cGVcPUjRQQa1RyL7xaEr"
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
