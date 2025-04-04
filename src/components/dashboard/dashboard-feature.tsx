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
    "4LrYwSAYLjNnqyekEgaoC4vibrY4BktNGNHUtPpRisAfTRPByoN6wNH8tohTrSw2EUZJ8VRhruFeL4bVQjtaLLZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vH8ssk7UwWbJ7WHW9tHJuq3MseJ526kz85aGu5Nf5hJfZSZAwMXLQxzmrJEHwuzSaKKnkrHfxpnGRMzUb2wrToi",
  "key1": "5FDHZ7mZJ8AUcWqt9K5zT6aW2w2g1x8oFYKQsVcshbYA47WsZFQ3bKyMh4VjzrGkF3b36GggjnNxZsQAKGPFcYgW",
  "key2": "3ZkHiK24CKVsnGq7ttUAcmcR71YWLFZ11rGKqBar9JF6JTD4GTamBF4vY3J9f5PLQS7aaL4eEiwfbwTQhtdckC8v",
  "key3": "oFeQgjnzFtt3DWnBmqMonS3HUQ8HjnTfcJQLjge9gHfJRLyCQmD8Gz3CHh4PbBNeET3rnKHxZWxZNDH7SD1hEoN",
  "key4": "4j8HgptTAVDKMVEak1pU2WD2GVUhDsmB9wWPFhvxe7uTgxuddd5DZjeh6eH8Dgv4uwsNFoza2uk64awYeF9UzN2i",
  "key5": "5L72Cr8viyS1aFcLwkgPVeJNGVwqzjHpKPnJkbJ4vC9PbdGbWvDugd2VATVyy1sWC36ErAnDXJvixfzM4fmtD3dx",
  "key6": "5U4atiKb9EsKn6RBJkofKxKe1bZxHjLwDbkc4sYGnY5fk6fjVZzvxKARbVf4fQJXLgpknJWdfZm6d3ZmRdLn9EXS",
  "key7": "56Cu6AEYMu4wvYvLcB797GdXWtbrssUf1k3CFohc8oyGD7R9VVJfW4VEPxKwA6p3PZGsmoDDe6pSt5aBVbeWdXjH",
  "key8": "3G75MZsMReurzbHsbAippkLbtBTAAj5FKW4Z3FG86fnzcnP6iyPmrXzf2omMpLmHNsTNo3rfxh5YF7eriXuzoPH1",
  "key9": "5gqWUHqRMXLzcS5fSMhQtrdAJqEwy8MCvTT7MyyZFxctb3uwZ9gTvjEoMWzAGEokDrrTXQswyH6rtKQWDNZ9m3ua",
  "key10": "2go3ZxioXR2gjX8XXNnXuxXqRdUcKKtJTYbmVKtqHREDicqqa4tjKHd9wqm57ELk6K15c2BSW3aUWrmXSYDctZzH",
  "key11": "5f86WLcygThKZh8S5JGxtZkJY9tmpfHqRLQxBZcXXbKwupr2mVoBmnE5HYGNJAYnjpXm5KRsQaTV1ETPHeveMBRq",
  "key12": "HPePfQ9ftzz3EYfd6KntQ4ssgD36FKx1kRCHwdKGgzWG1nzwiWjyFEicfkng6saSg18UvtFj4nPG1VuV1Rq14HJ",
  "key13": "2Csip8FUY6kdENt17PrnBVUA4RJrF1gzMYnGu9R646BcfVqwLdZbDCgtquBe9MA24XN6NJW4Ajk5iLPPdpriZBQr",
  "key14": "52QrV7J8SJVDkS7VQtvSfBJ9qrw98p3A3FpRhrnruzFLckmpDdp1ToKfvw7EiriNKBFEx9kZ6sDrpyyvsYWg2i1o",
  "key15": "44oTzC8yxKMqResyRXsu5gLLULfKHccegWfTSyBuUX1LeMZLawPcTgxh6UNqtqepFdxmomLdZPXw8w3C6BYt2Eg4",
  "key16": "4rz9xLu4CtKrMWRSbuyotFfKSJPiDrgzk594cLYxz6SS2JXBmMdCKMEAusXwnWHNGQgpMmtkEhorVDusLsUar9mK",
  "key17": "3dYjLPfUczPr7JTjuxE33Cwow3qBnKZtaC2UUr6355nmfuWN9CfhNcC4Qei5JULo62ixn7yyhdpXiuG9wwEY736h",
  "key18": "5uqEbH7wqYW5EEcqU8WeyPjmgEE7LhjedH4SRNRF71RoJGEx46zP55ps8moakvdLToz8jCh4hi5e4RaQeey2spb6",
  "key19": "3j8vjmAGB8gtV7uhwoQceQzzrzcvKzB9m5e7Lc9v3jrq29zTTwp7rRzmTikSfB1ehPWNAF7j8mcQ6hC9QZMFQ5ZD",
  "key20": "26sNFwgeL6gRQASckyUR3WdsBPwNpJKBPbV49znj5zYBKycKJRbhvifvQtmSb6WkcCxB1WLytK7UmZzNmr2GLFQr",
  "key21": "4Eic2VM6ibNfURtc2C3u1u8gQEZ3cPexbByrmKzdG65vD19NRf7hQ8XThTUJCt7xpQyuC7XqxhrrxGEMLnQspmfQ",
  "key22": "4UcoJMMBJALt7Qa8hniA45KjeWXjdPGv3QXtCLsBJVAMkM3NF99GcAvVNvGuZgBackLo5vskZcn15DLfkTXDbzsG",
  "key23": "5kR6uJq8hQj9ojeUyJUvfVdqqZLurej3cH6YG1K5sbZM8caBMDE69uZMbgfXQ28LPH7A8YqswgGn1ZbZEkRJV97E",
  "key24": "3FgtyKaPRTg1ZawSaqMypXnjQUrqQvV1b3dDxACHjzaYFJEKdKwWyeJWj9cgBaur8XRbghtdybCdyhiP9LVnM22f",
  "key25": "39PdWeiK6UE9uX714NFqusLirtVBxgUYya42nu6oPkDdmA5ekkEiTH5Dj8DfMsD5ARdcbAC5q55WpFvgyFLLT1zo",
  "key26": "2ht2TytnDNgHsfLdEKsqoN2wL6rAEjuqcfpeHkf3gAAqiTneyG3NhHZLiopw2sax64GsK4tAWQWT6bVE5Rg7nTsQ",
  "key27": "2q4kKPMx5t2Nf3s53meqF6t4YTnkumUZs3bbnygFoiZWPmyLZFbZAJWSbKvstgFUGuyNH5ZMhHDipcqwoV2qkXqW",
  "key28": "3vrkLE2zYz1agLGf1f8TVx5v1nEWAHWTit5hU6N4xH9XLsG8EmgRE24HuZXLEL4dqFnhbSjx6TMoVeT6B6yLjwJR",
  "key29": "2EusTHT9TAdpRbvz2ukUQZCGzd4dgJzC5bdbmN1hM1WSnyBkv1DfLv8KF4tYUnrJ1DJtZMXk4XwRy68yYgSg1eE7",
  "key30": "5aUitfaDVmRcaPX15hhdw65A77YEpdQ1SPJgxT21tm3dk3kZUUWmr6XikCQBmUA5ykjDTz1bjWdUpMdRZX2ZXTtG"
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
