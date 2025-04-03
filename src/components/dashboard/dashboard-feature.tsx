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
    "hnhzoNG25sHsvFaYvXbDvXy4Wfwko7FamufckVGaTkMNhEemtGvdTK4HPJfsQuw82ZGTmeU1B8dX7vKHzksoUcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "661AZRNEFTfydxywkguB879bJRwLmGdoXd4o2eXKDzrVP5mnWNgie4PCULypYHJrFecKpzUrSi5VjHWWYBqiXB8e",
  "key1": "2W7Nz7tofy92yFtmo9Ne6KHcWdGkf1XMwvS4UxZVQ9GJWW3tFaxhuqHwqPNddFC9sFanfYiaxpZcQfvPDvNxKmmt",
  "key2": "523ji3Cthwc26xeLqwWvCJGHzNKErH8mebEEhMMMqCGpUvgWfVwWm7fxrsCNFZCgVct2MJbKFKZ2Vu5i8gb2WmZ8",
  "key3": "3sJYq71N7PR8oi6HNy5SNrD332UapQvh24MWKz8k1YeKKaViwzxNu1Q2wWgrcd7pVs55yMEXgPTDxu25gKthjibC",
  "key4": "SX8rE2F6fpjhqNxDyQzCdSiD8iig5gBu1j26FfXgae7Pao2nifvM8wDDchYejKGZC4hryBWt5Rj5hFCD1pYGfRS",
  "key5": "5u6wxWm2vB9o4NFC7mGu9TqpeVzBmCboXpfFifhrxpaw7fi6Quvk5JGB2fCnNKsXrsppYThrxJkg2aFwa6KM3kdm",
  "key6": "4Fy4Ap1hxJbhXqYQqcuodFZoiVFJaDYy5nXNYeR2wy5Mhuv5czDRbMFbzKHt9jXRxvbGc14dGzBByGDWZKjM5BeC",
  "key7": "4yifDt2neYgdDabYg5Qs34FZvp35yz6r5YzhQbF3BR9wd5usYixvMTnKmneQGk2Qzx2A2grxTG1PGT5LtaHwXpVh",
  "key8": "5yV3TcPuUGDnnPG33apJqGA3Ktbt7DjdiADMqEEttDUrku5wZvQwdQgAxdiq5dLEZNLdtL91F6ZFMmhzQRutmqqz",
  "key9": "4Y5bXTfw2XMU27uNy4RrfL8GzstwiUTEAYKptq8RmQwvsVk771oDY6H81oKKw6dYXd2t6Jb2jBTG5TMmhteBmnNb",
  "key10": "U5hntzxmSKYQTz7o3dpJtvwYjrGxDuwqWweeDCWmkPGezTXygjSwpywb21joWuKDRCxL3Vbzgtk7eopQTsMcgjS",
  "key11": "xYNVNuPqp7vfi575c5PfY9omKMBiEqskFRRoDctKuwip8YjLtPoAateZyYGSiH5k8YyccXEZsDpm1RM6qp9irvr",
  "key12": "4vMsKC5UytRz1ckPFMCkBcxFCrjTSx2Qj21LnpzQ1rbSM65xxBysHFU3JpWuPzGLxgk9dBio1NCwseC34GQeGSA7",
  "key13": "97tCP1LrgA5Cng85bE9Axzyvxkn5NbhrrLGEMEtEFyQz4sUnKBazew1hFhTHwz6y9wPMJC5VqMfHg7hD1y96SVG",
  "key14": "38YYgDaNLUBaNmpxZZMF4YMXWjvf9DbsRUcF9a1PP5cwwYPMM7UENQVQE951PvZ6mU4diZow2KQZmRKtHzDBf4KV",
  "key15": "3mdUFqZR3np93Qw9vTXHWDf53fozm2pRbNXDGKFXBFsMPC4ZDYm7Kb8571aaiSPHwX8RDBtZu55A6UvHUMmi6wbJ",
  "key16": "4JMXFicjGN9FJu631V7dYJhBSg4BjCf9vzFtBdeZr7LHdxUsVHNANadFVoxgzYQiJQJyZj2x1Fms4WoHNwBzM25Z",
  "key17": "39yqoJZTGzBW9kkUY8fYUoR16hsuGa784k4YfaTt6HCDj9iN2yhJm5yRawW6hj9MLmfMaXy8HUsugVrsQyRQtuxD",
  "key18": "2af5St7w7hRru6L2B6Q6Lsa1rt7xgFjmkzkrAEHbTVSp5Ghr6fMvhurzoW7vezgMLebWtmLH9kUefLP8jsRWpAA4",
  "key19": "4QJmeSh4Gfe2PqNUkXzkzi2aATQVnAGTdozyEXy5EdzGLDcFtGx6pZyqun5pFYDM1Xhbn3LNzDzujbSLTiX4nTyK",
  "key20": "5QEyMRjUVkMkqs5Y9k7NH1iPtULNzAP2xNspJ4BFqYxvNUH7YtoqnMw4FzUmjvM6kzMsP838ztyykuE7c2R428rY",
  "key21": "adoQGFFiD9xuVoe83jd8Ma2grVjrh5hGEhR14YCPTrASa1w97SWhHK15Y7HRRuANHxHJya4cBXW2amYE932TUmU",
  "key22": "5FfqbM72HibA3MyQb2MCmSuXF8QzR9Zw7UiEXN36fVwLagmeF2zA45WM7skw8DDtC6BxFuPTxPMekTx4FQUq43gm",
  "key23": "4t49RvBEPSmikS1vPUR8fVxdnw5c7i7Hth8VR76o4WUqKTYJXfAo5FUgXhmJynmSkNwGZ9qADCShBtmz287bh3HV",
  "key24": "2Rabrz1Do5qc3zhifi9vYNhMZejA5Vxpq4YhBshz37QJji3fYJqWQRFetNBshGALHfQB2RrqoV8xrqnu7rExmSt",
  "key25": "Lr38WkHL1kp3v24yZ1qMqCyNhHchxG4h2eX6F9BwfnqFqPGo53KYD39MFDpu4XTr5BPnBvtWUpUpHXt8zJsksqZ",
  "key26": "5FywUd4qtQsxTQmtmpPjZAVivPsxW2m6JL9W3AQanAtLHqkPtKAk4ZX2VG7xgqS9oA9wD1g9u8m4RWXtGu2dS6yj",
  "key27": "u5RDoHD5oJEcBnC3gTeCxGGrmogFsQkonq1kHPxK7GJTTr3wzMWFJ89fWz19DnCpeZWQEgaQBdQUfqZWCpBG4sg",
  "key28": "3rjz8k89JXc3aggNiqojjYAJaywt8pxTtoJp7Sd5qEXRhxCg4S28vuBbdcdX1zkMozdgaJzFFR5VkPKA1chHgJGe",
  "key29": "2MTDs84ow8iMbmKxgzfBVscDc6y5Ynai76Uf6mgULaghnEeMgvQF5cmdN3uhMAyhqbSk5PoVmHmq8rr8T3ZeBPKb",
  "key30": "3AemrX9NePAbhJM2MCJg3LYxQgHC3Z1vMwBfoLsZzVk2ZQhGaNyYM2Ysq7AEDKFDUSFyuy3zyHp9WFSTPcBE1Wdz",
  "key31": "2oWmyKkDZPkHrmqUXvEL9azSTar63TfUW597zL93MTjWJp89fPwvki2fyAh47UXT9Kwxr4g7LKX8iRkKe286bQBV",
  "key32": "2fJWhCJ8eWZTxutV51JWBRRHsai4LAZoDtMBJZNytmxZCyTbZY4wqf7xsK3naZSCpKhVmzqA2ArjqS3bhEwPJWrv",
  "key33": "3vFLxXSmqp9ydPmPbNFmfD6i6WXa54KLqNLN5UojhqbDeSnXVoFekQgfgkKQchwUYVAc9gtGohg6A6f4XuLo7xyg",
  "key34": "59j6ZbtTWubWnxX1F1VEG69LxjA18kwQEKfYNvCysVyfebmciwu2aTSzK8DhqTdfXb8RTX52WL4juXNPDHqWNaoa",
  "key35": "9pEKwLVNgumtmDWqV745M8DTy5PP7YCNMSGaJYMDjoW1nGgcRNxpLQRqcwK75fwPXbBuacRPrHfq54bMXd38RgA"
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
