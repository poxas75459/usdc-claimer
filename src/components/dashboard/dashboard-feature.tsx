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
    "5a1RQpgkpxLuy1hv1cFYCMbMAq9NTyVtj4WsPwC9MY75NSHkZgDW8FUYhQNdLsenQJ5JTMW5AcJDh4a6bJ3MrHQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h4aBy9tmG93PYzrGX1w3QqEzi9pZfNjoAZqAQrP5xKELqNm1SgXDwxYQaTrXNmdex4xP8fPewVLFbyVeLLXmNHS",
  "key1": "1SzQwdc6J3qnWWoeCt5DvwYWbUnMp8W1t3H1dCFNA7bD7NQy2QbSTosrWqq9DCuCBZV3EvVLX2kBqJJD8M4xP8h",
  "key2": "3MzKPtGg6q4eHEgK59SiVfKiCrtYbbG3jbFei8GJe2U71a3a3Bf4jxT16isA71TD3u6vDuyJtWGMFMKSiCpbvqWP",
  "key3": "4gjAFdpRiXmpdHgzJa2uwkYoMgtnbogA8dWLpGAUY7bPrqStTWEzmEzX5aSTA5SLNjDwhUhYPGZ8KFDSNHAzbdoQ",
  "key4": "2gMR75UFKZpRwAjyTThNXJzYgrZNwDTYmpAzDTH5XQd6wdo6gnL9tkkt7TgK1Z57oBUKyFw1GNAEpQxTF6XmRiBA",
  "key5": "M5fqrYeW4r7Ns8YhKXMXJir4RiJDQjWPWuY6k8p7G5zYuELunF4my8YxioJBkZj4W52CXeDjRKYhj9RtrAy9TPR",
  "key6": "4n65kD6cYzofjzYmFTHttgzRp46utWrVUj6KkgCa19UGNkkrunEbx3vGpdcUfqUKC8oEmH6AkMCEvujgeZMbvMRh",
  "key7": "3MixQiFGLNvWGVU81Mz4tHos5D3ytwteNmRVMCKD1C3i1wgdEcECMGYUAS5Vz6UqS859yAgduqX8oiKpFWjVnQEC",
  "key8": "P59BFVGDB4y73hVfySsjayHmMSH2yDXfHzEvgv6sJjU1bFH1ueZf9rpNSDqV9GVry4bzUz2EzyJNeNUoQLs93ZX",
  "key9": "63FYuVSuU4jJrCWE3qzJqwb7nyTpK7qXQiEW3obsw4xqz3yP77feKJFw2GBpabzVWznW5Qsscr97RiVX2Zg4Ns9G",
  "key10": "2UdyRLqcRnJCyfbkNmpMthSFqGEABvUsvU6Pegv6m2iChR7wVVPrN9cMouJgNtbVctyCAN4CXK7ikgSoiVFMREZq",
  "key11": "3zsNdw6Ymesiywed9zsjhHzGJaDL45c7kw4YMN7ETSUWkfFb2BCtbehy6RjJd74EWo9siZ4QNVxFFZ841myQtycW",
  "key12": "4XpAyWwuWWEZU5SFPqewrpt7GemSCvD3AL64ohfJSc2MXkyUDcW6TKoAQuJnQdAwroVLrKF4NfbQoQnoQCcSptev",
  "key13": "3XLptMmKiJpEA3APd4sENBVkYJ3iWMVRcmW1aNBme4RrMte7FYCXdr86Kjz4BEzNYFFHHUVhqo3681xeaZQBV32a",
  "key14": "5LC6sEyQaTUF3SZQDebBXymfNNY2RJtkY3gnVC86XUbCYm4FqzBHmk6VnzGW74CxKug9xVUDxZcsFL736gN7Lw5d",
  "key15": "37uyRsmrvdqzWq7QGNZq43337uRkaFXJBCt2wN7TEt77z2xuFfQXTdjG2JNUD3c1AvpKb5me3at49MAPYHho7y74",
  "key16": "3ggXBvqs3DHW7FFhHJYcKKKUH3ViKeU5ngug9Ygir1uV58ZqR11Z3q9T2qEKeM1b5QzjiBfTnTs5rjDDCuAweBxZ",
  "key17": "3yw7f3mBbtwvEjik33biagiGzN8HR4AkryuCpSxQFWQNWUUwPbyKhVH8fMnCbAUxzRXwcwdPF4XbHifp44vYfdVF",
  "key18": "2VxAspR5DkamiXPHUYkFmuyaopXfAWbiHo5k9X5HgrawLY8NPVhdyMopD1PeYZcGAxeQyC3LvMEBVPhVDtNAmybd",
  "key19": "5fvvt4hHbGnQ8ujPAJiXyGqcRByQGdRRNffmXG6WubbcR3KLrQobq9DnhajjNk2p7gGvob8DghTSoJmtyykmwXAQ",
  "key20": "D9yXAqN7HGY64driq3iuj54PD8H4Qo2iJWLsm8Jues26HR7tfqbbv9qFDebdb7QWw8PmRTLQPTCuWYvtQkq1naQ",
  "key21": "5xBq85BRcd8VgSXcaDDWxUwjJxwW4soQLcuHM8q6QPffzXFoyCJRUpuoiistzNLeRh6nuV9dPjwQL1WtK2AsS1w",
  "key22": "5PnsCDJFgw8WuKJifME5sGDnYJGGMTR2U8G6iDRjAjD8VqiqUUC3BsZE9W1XpVS7AoCbBMsB8zWWpuY71djcrnDA",
  "key23": "3QcNB6UHNLRE8U9C5v7gBkuHaAqkYBP3XAc8cs9dwETNcDpf97HjHTSpYUPqyaJ4ouZnAu3XXaNyBc36F8RYTcWg",
  "key24": "C8EConQbws5VQ6z4cSCjjcioak5pfU4KNw23mfG3wDxj6szCztZV3EGHhUoPJYM2BhKHqRfcVLoHDQrMBBw8k1U",
  "key25": "4jBT2BiFenw8ffL65hud5tzsiCYdhSgHdpAjcnBv4b3nZjkK7TRFbaSYxE9n9pFb36qdbFBhLviwpokG7HeFZV3D",
  "key26": "mzjwupUMySMffUgQUTEGH8XTztMxaZrRRrqP5UjxTAgzUfiHSnZhXQDwNfLNRmHaND75tcZHebESUwbHuotvCNX",
  "key27": "5gP5y33tpvHEyf9zjyYCqiEVztRAFtYrsA7AUATtj7n2Ya3j3GneTFEqAcPR3xwXfzgigbHZ53qqGMKYhQ5ZCQ3J",
  "key28": "3sUdyTzE2YwchyJtMYAZJrc77kw6GdiMsTqCw3WCDf1dQUVy98UJkkptuzgL185AJnqSrGeEA5vAqjG1p41ZHs8w",
  "key29": "bdRCbA6i2NHn1KkbacebrpowGLG9UQXqc5Kba44KGGjvNFGZ6TXBXVziBoHRm5YDmFSjGBRRSZNF5GrHjixpHfg",
  "key30": "5BE7HNLtJjfJq5icRyHT6jTU5SdfYEsVgLeo63Z3R7GTVNqkBVTiqASW5mFQK5ZUV9ErMFZPnL5Ha1ngUntqMYVZ",
  "key31": "5f3j8QKtGtSiDpx1YHuM81FjKhUTZcojvAi1mwa9mEkLsMckBvvkCUMy3NMNgcCG7GVUyEhRHsEgs7bv6cFVv49K"
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
