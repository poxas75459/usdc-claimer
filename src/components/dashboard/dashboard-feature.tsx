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
    "P5zPcRS6xMv28Rfd1cy9QQYZRSUPvhMP8zaZoZQYmp5bYtx9WaemNqUgTDVr9aynZvKatQy45oxGEAKUxgudyMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xVX1AtA1mQLKuZrJNL3KauWXk1avwxeicXaERgu48632p7r35Z9d4vJERPJAj1UrSiQdcZu3z62BRvWkFyBSbgR",
  "key1": "TxhmoJ52dNPmVcUcJfrQvdYiaVsm69w3pNMYDgLjDUNPmCN8jpgSpi9XTXU4oXGGh6rKgQ8LCXaXv2pBAZgBF7k",
  "key2": "51cT2xgUsV7udQzb9i1R3fU2jPdxQD9kc9PaZ5LmUm1dE3FNsCV4xW4EBsnrGiiABFmLozfewms4XSc9jMdnzK9S",
  "key3": "2n7Vuvwpquf4tqKZ3LxFC4rMt4WqMHGofHTpogDDnYizcHCbAPoeX46MLBdGCcyXmftser68DXshEEbKuyUVRcyt",
  "key4": "yBRunKkiCVwa7MuVUFoZMv2HREZRfaZSMfdfgrGk3rGk2YpFnRNHvj7o27X9G8xFYeJLrKKU752oMtkr6m48Xx2",
  "key5": "qbdi2zgk3ivr49Mi7qe6w87ARS6tXqUvZxAy4Aqgf9CPpkJ2uDVPi6jCrct8T2LYaqkXBYqJf3mPS9ozRdDtTLK",
  "key6": "3XQRNpe5es1Zq37v9PE9HcSEjdEVdD9LshevKPbdHmyTQcc8tpgUvVrPQxrgvaCUUxbXGrKtrY7J6CXxHUsufyf3",
  "key7": "CrjAFFDGYsuxPL8Yqd8NsYmQqDLdCN3uFBa3oRkEpSZsJvs21BKTR9q7tWY56SnSHeuFsLQYJVRHcU5e4dTotpm",
  "key8": "22R1YPM2rkbE4szbDtAB46kRQaRVWaC1i4y6JvHK7Gj5n3K3atm89qUmgxMbWbaG7FkEkmN2w2U6tCrgLm68DqQn",
  "key9": "nnXCgmG3n1WcpYaMKqfXuTf3pPStiEJtvCnpMffqRBjjsNRkv9ZJDHEXNEBJQLxk9Q4gZqdUXEP9dz1aMNNzaT9",
  "key10": "4U5BigfLtBBB6eB6XZH3BzKNQx8Tento4KGcvcxtVCe1HgHHagkmcDQtEgeJdqem8CErNEd5QYGBj1VCHv4PC2Kv",
  "key11": "CMsaGhxnWZfTfMa93MPx6Qdodmx8MeWHGLDEkWvhvXRUJH1ZoF7x6zhXNUs1aVtekwqVuDNhoUsY3CXUn1UqYXx",
  "key12": "rrdnqEWJhWeKEMoTnN9HzfH3bakZJHKxRcsJpMEhB1ied5a3HJ7noAjoKRMU24fa5EjR1ENjCA2VavnMdTkhxdz",
  "key13": "woreAJk8673Avy5GQv9eHzEhrG181RnYhuNu1yDHys2fKMEHC8RWsSnhBaJZ536WMHkL6s6fxhd7yp6qEcceuEQ",
  "key14": "5DYwgKE3M47Cyrmr59YNSaj59ZyjK1bNGtEsxcSmn6XHWAqW9h4smNWK79XVso9bMnbfbSwhv696wDJUqVUHAH4L",
  "key15": "2JV69Xv6Fayf2QxMGdw2JgPpycivvxYNpqBB2tzPSEagkATLaMLmgQCBoVB7gKUZdjhWipCdAfJvYmdnJ3DdZ2Ed",
  "key16": "mVKpGzw5cR4Aou1jBU92hrHRk15HUeZKczo3XHqybsM895iGY6pbdur69QWUPQWh78tpYuEpREkfvMyQtPmqdYo",
  "key17": "3NkhkoYh1op7GLiA9xqps7Zfoan7mqYdvaZihQTjqZwuVWF5YCCsaXKqs8naSNKHBerhbtdzK5Dz1hFW235wxcCX",
  "key18": "2PfnSF2tndqAatQZbAy24CQ3J1grLAUZQpGRifnb2W7LctLUgTWJeuNZWVv34woPYNjJffawAj1nuGwK7QmVYPQ7",
  "key19": "QmWZzGZ9RGw6ygzD7qmv9fav63czQArW6wyeKNTQbKGtjCB6uupzswoQK22XsB49T6Asy3PZcxppQcyU3cQVNQe",
  "key20": "4XrfbV2Mxqv9f9traHp2p1NLrFJeSvcNS2gJjVNAAPrdYXx7SmNVEMhVZ928mqUcKikG68QdiXWQi5YDNpzr7QtA",
  "key21": "A5ar3Zv8GSnzwxCxLBvgiicq1EZLas33TUcsEAjrQ7yKmWt3eJS2n3hTWrJLr1Xj4WnZVgmzHQcMrTjxoQvss8B",
  "key22": "2uoh6LFdcuyd3uzwxDfsdEuRLDjMbLPdvoztvyhK8uRtNT2TXAzTLw7jx6muFQjmAz7DmiWr9ck187J2ArDcD8U4",
  "key23": "4cW6CHrersELMe7DyBRC3TadLbZT85R1D7AtfaJaH6tcnCvyKpYNSGnzESch4Jyj5zvAYKTfLbtsWk5gnnQMDu7D",
  "key24": "2tvH4T2dcpzQWqegtRkrbDyRcjqmJX6n9Achp2d7WAXFLjVC1W9Rbkc6h5aSft8H7rtenQZf2zpM1BmU7WE6vF1V",
  "key25": "2zyu5GPkT2DtqxEJbDQL5NYCkXisTy2tZeEbYxn1KsNSnRoESTDH7x6p1D322BdwYuDzxUzQg2X9V72fWXenJhnp",
  "key26": "4RppPwdXR8iv78HD455xuzmi4hVDGi5H5CGmimfu33pwUYaFgaD8D2yZPgoWpbgoX3JZ2x1v5nAxkjCKo3JuDHc4",
  "key27": "2Y91LNPtDUDwvaxumvY14HHEYMEBPAVVH6hYRosZ7g98GBVZwdUSdPPJGU2o1DE7Yaqg6ePQsDLbqJYY5utCZDBg",
  "key28": "6217zNQ3e8c9if7HoALv4QthZ2CCqZQAqPfePHpaFfkhrNnAhkNzXzRe2SmB38cFbxseKW37TKuTFJ85SwoukRX7",
  "key29": "5bVQUqtj7nhJ4QyC1LkYbZ2Wf2nXciZFMhJeoWsCwFXZtqcKWcN2LATLF8fP6nYyLpgQ6ihzWjtjzc9q2gyHKSsQ",
  "key30": "2YeH1m3UkPaB4Q8AaVrjupJHC8t7wEttUpxk4r2a8cWYrozKtoEnwyFHkySkU2w5jDHM1TcZb6wUCTovAdgv4ZUA",
  "key31": "5DyKxNdiuKfzYNeyMJVM58DssuDUj7ZTeGmhB12AjJgbdEgAb3pu8bPV9wh6xVvA8YaamLKPGahq7BtAfjB4f8oD",
  "key32": "527ac7sfzYtKyVrfKqdbwimuedY7Xfs5WfmjpXHAhwyX1AsLArxfcG8xFNH25iThQJsTztj2Vd7Rb8NFHXaAvUCW",
  "key33": "3h7682fxMxzz8eq9kPoVGiYTzNSVfiop45mwbgt78hv72FkpGVCP3jsCXSPiupydRZiQmTdcKHyYtSuiUzRsMtKY",
  "key34": "4aPK8apPEf8DPyYXYTj4RHD4EEFHtqDUM2wVx7NbCUKQLpMyKQR7NUsbidwqyVY7mG4x7k7WK85vqGVGrLD8rX6H",
  "key35": "ab2hVARJq143LmKK6dsfja3xhyn5QwS8d7j6ryLPxXDTsJVRfQmLDWLVBCX1and3uZ7nwRdJrfqKE7dpHyhx7NG"
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
