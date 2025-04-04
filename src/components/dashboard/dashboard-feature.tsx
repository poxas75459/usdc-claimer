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
    "5wxLetU9gHGeTBnd1JbndnjQ6BUhXMpktThFsKeBhr2FCYCewNdrzUYQWmV42MyEP6bz9u62rijVdw3dEVkquwXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d2xGq1qQJrsENkLnnBQbosky9ZgcAwKreCyFiy3xBjMdDSEfmvRdFtAc5B7QyJCgvZjMQ7W4qHRZsSwDFkFHxrW",
  "key1": "2Pwmk1SqUZL5mUJE2MFsBtx5x6MLqC7XeUdubqhRthAFipnnBLSN7r2vFkAN4ExWLwfv39oMRLEm38pitYDdRi2m",
  "key2": "2iiLVNJYviuNo3dj4oD2gZ4nspBEjc54DiFjbh8ZhLy5xeEoQLhqR2UvuPeSN2yuCD3vvhsyR6V43QqPiiMMKvgL",
  "key3": "2rDELWfUP81n2AUmzcbZ2ePbRKMzhGqP7JiuLCTnNHkF9QB3BLuJ1kkcdMaGxzZqSNQF5fnHKxcYsNoKiR5A8EUB",
  "key4": "4BfjZZ85Wovtd7XSQZjqhowotXbCreRB4Fffd17JeXrqpWENkE7WLhgMAv3GPdzCaFHzDseJ6GzqGzVw174Qhkjc",
  "key5": "4nZqbqUCCfRLymXZWEGL87F5KYipbrj58S5Mqz3exBbH9LoZzptSP1uUM7rKQf5PWCq6jj2L2Ltc2U8qYQ44MraU",
  "key6": "5Q8Vb3hC6yvBtrEfwCaxvZ27c5cL94c5UmKpjseCLcv3ryjjcg4pRecJLNt2ApxHp91yuE85sEptVajkvKniBESY",
  "key7": "3zT3UdqrotgJnxLdXGDpNPhMUBtkT7p3PSKKiU1RTgrvYNouaRvze1Z5YAC8EYqkAgVvXNq5sPW6uMLX7pMku4D3",
  "key8": "2Kg3kSW77mz8KaiTB8GA8ryVz41WjYvPBg7UrDn1L4u6e1QjKjLv981eBwwo8orNr9tU9gfombi535Nn9XLbo7BL",
  "key9": "2kDTfHAgJDDJe3rGGSMxAdwxz24HthgWkN4dGALiKSTevMT4ajf7fRrRkr5CkCLF8Xz2EWHhB4yEvzewoLUK5zMj",
  "key10": "5d2kQ8YEBFi7LN7wZf3njUc56MjWdf98XdoW35uAoxiFBsd7uUh46hCFtogc43B9NZGMgjtELDNv1ZsYnhFZDUPf",
  "key11": "2sDMauJbS2ctojkb8vAko82H3ibcLejuRQe9gue3iBDgigNNYFNp17u4PoGvUWjNgQmBp2pXMQwgEdPjawMVMgEN",
  "key12": "3s29sEfWnLT1mJ1tjUvyAPnsvRVrqEMndWAHytMj7qnngWFPvVcapKp2QTN4LUVKTd632MZbGzkPvHJ8jPtPkNrG",
  "key13": "5BfHWj4DjknY7oo1R9wHonzANZsi7TWyGxwPtm6D43Di6RMyFS1NMeGYK8qTQ2csYYSwHS2HGUQTmrtXFMV6f8L9",
  "key14": "p4bgjeL4f5TrzFTp9Wu99qoyhL6pMM37gz2PkGYCcgktZXsD9sxsf4VRU6TSWPcr8AqewQWoSdhcp6YZmHexESB",
  "key15": "4rT2MX38LpWfnwEoBPgLas5NDdhYtbQhHVa7pA15xqF1Xk2dTJ6SPwsRQQVu9rbEsgWunqSrTtFv9axMqbCUTxR9",
  "key16": "36irWED3Qxp57sozYMwCgvXz73kkUhdNZrPXFGTV4nQo3cFQaLxaPUyTbrknXxjzvDFyhNkoNgEcHDftGFmCxEXM",
  "key17": "48vQW4afxn2vti3fWdQAJcQexAHEodwwW1L4btV2B6f9tyXCyZj75dm2RqPv5qLYc469pDvwC5ScxqTfogTpFjRp",
  "key18": "3w4ohTD4Lu3G1PvEQoFQSJQ4MdQ2eZ7scAmvfH1aXN5EGtYijScEfrZPE3eZCbbcUBY7ufso5gLJiGCWQfBSHhF3",
  "key19": "4asotcSw8FMpbgNfTwsBEuXLKJTYWzrNRLxUHLS11ABP1wmDEJqJu6RkhniFZE99tuMtNaboaqepZ25XpsZnCpir",
  "key20": "3ACgwAQBV5ZsWwGeKjhdEiCH8TtzPb9J32iiGqhQnaNcdFfzur8Ti7SvADqtKyWAx2xcfhS88G5huVX44ffrkzeU",
  "key21": "2A3exMjMEC9kufH4DwtuiF5c346BChRLgwGewbsa5cuF4E4MvxYFs9chafHzgbSAgnejXcX4JVU7c9AzAGykMjLK",
  "key22": "D2FAwGx5ARjrhFTknFTDndiofjJ93EVXt33eg9VPTjJniLG277KN7pRKTKMTfURvNkHysXFftDtQQgpPjhAS9m6",
  "key23": "3QYwAhVMcagwCnhrPYD2YB4jqMyvoHMuH2qpBi4w5UQrxTbv8b2VQxRLDeVM5ABHJdEqyGi8ZbrrkNfQ1si6Wvxd",
  "key24": "2dEbhQWR7TXCf6F7oLQhUHccJrr4R68bASpmnmE5942tfbwpHtgz74kJiicbdC5dfucpYeFfQ9VtrXafkN1oahj6",
  "key25": "9prSXcBRhggi1brd1kvwYkjmRiiHVLPo382ipWUdehhfEeQHYbsCq1pz9C8mBK4PngYdr6C5B1YkhMJtaEcEYrZ",
  "key26": "5k47TTAedKmQDv1t3dnNwtXF3NwgiktefKrWHvVLFhvVxFWVkNWM4bWpcU91g9LeqqzPgZSbMeDVY8e1Wd76E7EZ",
  "key27": "cSyKcgWBK323MF95SeBzwPxL7WZx5wL9gnKF42G4MWPoiQndrShq8fnsF5u7Cdbhv61fptkgczYTVmrT97BpVxj",
  "key28": "5QPa7Y3jcoHwBGZVCtLT5hmwqzUNapiU9EuLwYwwn8RCHyoY61ydCCRuD9ViPRYrWiKzGNpEgDYudtGA5MC8h29r",
  "key29": "5jQqfXGBexVWvBSUqFDnViC4ALoShw5rDjKLJq3MiYGzwp9nLYqaTaWEUd2JtrF6pEYQh2SbxohZviP5X6AGHaDx",
  "key30": "4uTBxtsWLEiMwzV7cuSW75EHhhxoszbcvoDXxueApeoaS8WXbotUJDG1yqHMGeZ4J1PWGP7GogVcFsTixkXBhXFE",
  "key31": "5H1Ps23gQ1E1JkkSMwhF8Yv2BF3c41wj1EeYDaLrqnqix2NTWHr3yZgPjWSABwdZYYoHZxQNXyVEN9AB83f8PY1i",
  "key32": "28E2m6HBFQcPYNcDrnrPPGkDSgjXJAUKqxeAYF2KcPoaD2ZKSYT8yUnqQAaQqcNy5NmSmiZnQkDoc3Q6Neda3ht5",
  "key33": "2sQmRzKTbmmqktLA8b3RVF2vhEdP9NYkG9uHrBeduoH9nixgxJqWLJcryafXzBjeZKVdXp68mSeGsQQXLZ2ibfEp",
  "key34": "32x4fJ21RoGjoN15WppmRHmrWWY7tJv6wFSo4drVZAT2tsHk2VXx4Ubzdj6WpiryHM8GEtyEL5Fp945AJJGpKkAa",
  "key35": "3ibv9w2MBXEQGPDEsH5PuC7iMESwuPuZeeU5XY94NKWnbVvQsmudX5Xaz5GARu7M6KHuQ3AdSZ9bsuYo8jjbn8tz",
  "key36": "2BYzC3PdMmujnZsGsKhfDS3bWi3hPpEe8jANxBup9jr6jqpEcs6jZPza9VwWHVR5fV7cscTk41acZmGpnu9B5can",
  "key37": "HSSyUjrPPk866eUAWG6GKNp2twiBwjbJcSmTRetrpWu4MLm1kd2QKzBhnWuUxbs25ffpHdZbxrEYqFRdYksJPig",
  "key38": "2awFFKhtBKKxcN2fTo29WyS59dK87FdS1ms8skJtNoZtu9QwcwNVV3knjXgJ9uhVGmVkbmb11qWBpH9c3gVPyLkg",
  "key39": "5rGiexQVNgzZU9Kh3YDQc4VS89dc4EhDtzYYHS4ayPNAMp3SmsaVNbuHu5ct3xwyZUjzG3o85eoiN6N5ppGzqijk"
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
