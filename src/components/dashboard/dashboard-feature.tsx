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
    "3fRXf1Hb3MHHzCvuPm3hPM1eG7CSxDoFv6MmSqWUxqsoAJSJJp3oC6cQNAko4uJPTNe3KifdpScey6EVpDFF7o1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5im2gcYzmKjSCjojyxcZFA2GeXMaQJLmtPKSjnKmipj7tFyMyKYg2xom8wZgEcW3ibGhW7oYvR9YxridhMgDDvTb",
  "key1": "5Pnf8fnScRBTg7Z265xPEJKwkzySKvqMZ3Q2skUz1Jtg2ntY6fwpMJnun1aw3jxAziRkhijYnX2qvRearuQNdJxr",
  "key2": "4yWJC7LCn6Asf3rXef7LNorwEskPtZNvf4GhktzkNhB3FY2wg6LNU69NpaV13EmLDsHVyb6dUCdjN8oTVfiB35Zb",
  "key3": "4bbYD5MfuDf4J8UYnR8VP9Jts4KdCkWcdRH9MN8vxksLC9VMnjzAnNGwFy5ccRWwNaH6MR5zB9hEtLQWy24NVHdF",
  "key4": "51BF4gUQjmBtdc6WDx5dP15kWMzmFFrWvoDd24UBYtf2SzcUpz3fEAxHbVSnC7RoAA7TiiwzZvLLC3hcv61pzQp1",
  "key5": "c5QUB2YDc8Pft4dh7q5EcGnBZSdMbEVtxZqDWwyupcnkCPXH1DXZCHAgyaiLBWpgrjxN4VqyHcq8wspTWA1YBqU",
  "key6": "2Wxfz5hz4HNxesWytPTNatNJUX8Ht5Z7rMdT3EVj1hdSagmoGbzo7TRRSrcSmCTb3VM6RxQRNVBEGxfksZQdvWK6",
  "key7": "3ne6AyVZw1K5cRLzZGgJskKnxFPBVi1HiXKjahZgi2HLreV7zBscvMfaWqHYRTzpVqdra9VKHwAbgsTCY4aMP1zt",
  "key8": "mceHPLovcxujWxrTJvRjpsYLtWeujKcmaBHKpjVrzcv57dNDHZGS8GGeJKpT1LygmSrVwdFUoUnMqNLcQ11uizy",
  "key9": "5nVX2RFKF8osZLkhyjmyM86WJ6awPwf8xLMfFNK8r7kzxvvxXWZbfMYqp2P61fpHcqeyM2qHK5qqaicCRhFZpRLd",
  "key10": "ysfjtKL1M7mFXAdCtGKKfuAgnFAPW7iUXHfejDnzyabPjMbPRwoFi4ywHkm4AGizJKU5R3zxLpqtT85HAoC5Ljb",
  "key11": "3mbqrZuwsKTabu4fTS2muvc97qRMe8mdyK3iPdPVXoBjJToRXozDU84VKgJJt6o4FFcLNdYdExR6NvDoWcw1KPfP",
  "key12": "24gBRVdCz41ySWeQR4YVW7EUzvUJrFFA483PmK4C8TSFLiYucsaQS4p7Gmy8s2mcZwSmXh62jgQiNqbRh7GH6X4W",
  "key13": "5nE5R8Rep92RMgZAQL9FmgWo5VkAyvA1R7rKkvy45kpPEnonCiMWRMZ82T91XSdPDDPALk32gNSKCWm5NLXKXWaY",
  "key14": "5GfdMRsvvNXPdaLkYZNbMRZUjSXqVYDuvQyaTNTtfB1SsHzp4ndSvb1a4CJfh5Bqo6csdJJAtDMadQg4wSDqgyt9",
  "key15": "35KfEMfQA74n9rWAotpv4DN22kBM9io28j9sth5ZCgkvDgyQfumuUdKEz7SRvQsyPSECNnFKCT7MrE6Ace7ddZpC",
  "key16": "3pPuabZfGP6GwCue4JEGsEZiXM3ZiwAc9T2bReLrQvbHXDhcUVxqkUNgxZHrPKL2rbwKjNauevTGPf8rmGwkup5q",
  "key17": "63aCNL9nNX5qtUcCgiKpqoCUTheSZdbQ2yHUnDMHpEN35BN8Asxt4rKuTtopciYwTZ4UrZESFHZduMhPKMxoHdNM",
  "key18": "JGfsA7Ppqdi4XXgbTvQrwhLXtFJobJ6ZeqyE8LGZp2TR1kLWpNr3B24ccwTUzLxNHcKD5qyPuEhrPVXoMZsrKv6",
  "key19": "5kTeEKNgQCu7S1bQRGRwt7VLE1waDhApMJax1cpLJGFAoDzR1i6XrosEJyHe2fjmmG6eL3gHp4zWmwYRGQvmWuAf",
  "key20": "Q47DF8ZGmfmyGPQDfY3aQuvkEAoZQE6sVj4GTXFuhiEU7HYTh5D8RFXJnX1a8m3uoroUH3GHpadPe4B7FpMAhcM",
  "key21": "4oTxHcLxrr6s4d2pM9cjEZTK2AnqqDoFEQfVksmqbqahjzfAwYcMD8WmMHH93VTpLmRGhpAZMNMFZwpYuT7sD6RK",
  "key22": "5gxHWZWnv6X85w1bu5zVfmicdfA56UNsnHnGCR6qTZrUc6BaEXH4Q6TapTFxkgbSrALFixF6gtYPhGdvY4ZXHcC3",
  "key23": "4uE6MjzaLzuWvt7SLphyGdUB4FURypYbRoSxd7ahazknER3r7MhPpYdc1cGpCC4LRxouPkZQ6CHm75xyJm5TcEVZ",
  "key24": "4GN1JrDb4zEk9ArNjZFtsWH3RTFbt4wkRui8GADjhgWo2EfafcKQiPkRcSBFL21r6NnGgcBJ71FXwzS6ve1faoai",
  "key25": "3Pr4p4Lfk1weD36QECctZ6uTarGWd3EvtLmGCYk3itBg8eSzeeGaTLD1LsgXcGBgdhx3iXgs4MWr3R8gBRFMsPfh",
  "key26": "31hZj5KpWJdcWQopMRGEzfkgTuyjy2i9C6Se4JSk8JQoh5oPnzmV1r35QQ6UZJoBVJRn1XnVnYK63jMjf8wZqTFN",
  "key27": "5cHS1BFsbRwTrUX7NgptK8FdyLZ2M7E33SWVRTWx949CrJfcDARt5FNKi62zJ9HseDmFtpgUbWTvA2NUn6t5qheR",
  "key28": "WRtazstUP4oArYhpTxfA1fgHLe9TJaaVNSAsV6qK4QyYsbCf6BdXBKiDmPrEEDM4eCbEZGhg4YfMjQPwMyTF9SC"
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
