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
    "3SFNoVBAdX2Eiy2cBhXuSHV1jCnNBWejN7EZoKC5L8FR6BLsoxeqXDyRjMCHKPQdmxzYZsW8JuFM3NHQkD5NCJni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WiLgo5QzheyXUfrZBRffLPRDLehTqedxZQWToGwTAjftFiNzRTAQsu23eH1SdLcceSXx3pshFwVZHZPmYqgd5yP",
  "key1": "4N4cweZ9wUF1NDthvf1xzyvHUPobi7Tjkzka8P6c8qKGWinpfLEW44vhpU8BkaVAFzcoX6mtMxGnDMq8uhtgjqHj",
  "key2": "5Q1bB46PnKcGnADw5K3aUGpzYHyQVyC98zdR2ut4Rh3sQsdq6RVZLUcpcTsBfKY5L9NRdLW6dtqaQtPYYMMPSi1G",
  "key3": "2LbSfXSq8eVdcvceJcakksYYLGegLzGtZBnhKwkm8ojHQWihFNU3g6pNkCevZt8rtbAy8RDfXsce75CocM7cPQ9u",
  "key4": "2TrrEtb1768zygPz4UNo9YLbJMoPDvWqRtimokADeqApjiw7JEwcemZH23H5TJbALcKQKbW6PVWoLDq9rFZedvL7",
  "key5": "4VTUpNT349n2GocsKvNYfgexu3jkzdgeEdGcSvMz7UmAc5JbhnpKKUbYUTcaYvXtwq6sMFcZibXJWrxtcAXdzAGK",
  "key6": "2tfGKDv2eaPiYTKyeHHN52nRVpwgUDbGcCrShnnr79aRdqTepY9ngWzidWKPUbNw2BGQzdU6FpYZs183bAnZg8Kn",
  "key7": "36sr4MhGvW2VTuUVY9RnX7t9fDtoXfdvgqTEJgMu2dFniXM2ZJzrt5suZ8a8K4x8MJtsp7LPfYJ29mBE8SecND9k",
  "key8": "3bPFAxsfMtWZ5aE6WkM2aF9CAb7wnpBioBxDp5WNGajHW1TBVDVozR3XcY1YipaXwx3jrr5TRttwWCFqrG9Y689b",
  "key9": "RVjy5Ex6JSzSk737nJR6eh24XpvBV3PNXDBpT317gDJ4K5DrUiwtrW1cZVX65mLoQuMpX5XoxnTkJvFVaiifNm4",
  "key10": "JHSX2hijpiqoLJBXcnAsfxSUPHKtsmEw3enxvfCLDvtHrBnmwPF7qsFZi1Qdsu6AteomF4FBF7PECSDavH5ekxK",
  "key11": "4k2SPeajHfFiRNzC29fzxQzN7Fg3tAFETajbAMBCkoTqv8CGP5cZRLGi9vPuuTsFjvHdH5R5qJNE5XjKShyN52YW",
  "key12": "65fpUq2ugNfpjN8P1bScLsmTxXJFSuidHqt5MnnxVZHuEqpxhg9gJku6hSQynArQc5RdyQoY8r3qpaxV6CvjB6Ju",
  "key13": "4Kz5FFGBhvWA9fRy85zNJ9CGxCSLvP3ZvTugKNwizqyvXrHQ4N9vQZzkBYyucF6wvifmgAPyhnR5fYG6fP5gcm4a",
  "key14": "3JHUKcuq6wAhXfxnouaL7WdAG1DeE3ENbuTQxgqyeNWzCKutoNKKw1JqpnZ9ehy167ymLD3jp9TuoyfcscJZWioU",
  "key15": "2gNebxAsfq3qDLC7qbRAj7KA2F7SEd78ZAqmbWYjHAFvB5bDMbLCsya1tN3nLDxFUBsM4GTwovzwcVqdAYwYyAS",
  "key16": "hp2Y5zwEojtoVWCXpW5woT5ktht8dge5eYrQsojS3V9u3y6jJ5L2kJ7RV5XXuG6Eh25f2XFrCwXpcqHg6PUquQt",
  "key17": "5nwVd5XJFJHSYsuEtjXWQLzuCUtrythiJJ6oJy9yhSJs7idBb9ihWCrFJ2QFLeWHdWunvfTshHLBoePsYGEbxNw3",
  "key18": "26pTCsDU4xuH52Y7kbwXF5zK3E3KUW3AaLTt5MW6vhhr6GXLNeE6bLYKc9u5mLochdXrfYf57uzhLofUf5BuHJYe",
  "key19": "YhLe3Cdf5Y9u5tWfSM4oHanpSjVXUdqv2EZ3pogGMfmojBP9CWeap3gGkKfefYKBZaeyekXJzm2diwWjmEyTore",
  "key20": "3sTzbnW2PX6dQBdJAqRRjbuWL9YuPNWYKj5jiZQFW8Beqfu4onMZB84esm7Crb88C4dgQ7VgPj7FxUFNvA2ke2Wd",
  "key21": "3GNYc5i3jFka3tZNspp333VdicRRnAgSULSDhdgrCSZTaDHAsDSXn6Pq9PU2o8Zk5qms7NvHDr22pfmiY27gUQhX",
  "key22": "22HtDA7uK1egYui6TBSwSWkQSyjWjqYtemujzaAzrp9DFSUv8GPu9Xh8qAMj1TTgLo38NFF3WeWScutZReduVPJw",
  "key23": "61UBY96ChsifsZikCCRLxiDJs4UEJKqFChP4YJ5yL65ejHNiMF1BRw1jJWQTss5MTQmWTKJhU4D5BGvzzaEEDhPt",
  "key24": "5XEYqjMxn8exQ1RBjunP19QrjSU1Bq2SPAz8qhkWe5N5rmGVtQxpmRiPirPcYdL9eBUfdsyUDmJnTR6ubdMjd3eB",
  "key25": "2iELgSQsCqqQ4GfbsjLLW8fwDDFGYRgmUCvtVEVB5vNK56e66nDbCeCcAiFbvVRE7BgzEZqpZCQmKmcXSxpz9BzQ",
  "key26": "tWFKz7o2KbDq8BsRQQZmC6EZBxkPH4B3DiaJj9uRntn4DD7uGZhPTup8tkCzijFdAincJDso7F2Yk3HzQX9urx1",
  "key27": "T8HyBWF7hatVzpZ3qp7CRuF1TtT23F9nZYKQjc3kHBG3yGFTAbjb7PiGc4LXFrKZdZ4wDXvhJG3HdCzeXMdFeXR",
  "key28": "5DwrJysdJqqgDLcAup2icfN9nkLbWu2BAyyxzZicDqRnAMWxURipGxXwgUr36FLtMtpVRiENy1b5x3Y9ncbrYks2",
  "key29": "JSY5qpZs4eRx6AhBemEAEsHBKLACZ2rkniiPzmoRYac8M3SBtJQKBCnKSz67P6ugfWoc9KhuMK6EKcRHfQgQNqz",
  "key30": "4UPcbhM8hhgwYGDizygUyhVKtJxsNd3Z1TTqMNjWpsMRCkqohYbZBNZjR9XpBi9KG7gY4TVYAL1GdYasjh6tz3YB",
  "key31": "2y8oieV2DbzDCaY72AxjJzvK52Z4Sx25yBC8thP6t4gWSz88PHQjDB4xZDpanXAk6hq19xnAty77tooUYrDHujo3",
  "key32": "tFNvdbmJnTbqocWAi4SvBaTKG5nAQmyJ58UJybZyRW46SWhF6WcpWTGNLESKHuriXF8zf5iLhvdk49n1YnBPTz8",
  "key33": "3RgrCPc7t3WoALqEhq8uUCaoUcTgQUCJ9BBTx1Epm1Fwzah4v9RBkvG7ZWjbh4nfd6Dd5VGz28iiMVVL2FATszW4",
  "key34": "4VyJ7P3uKBbBxbLXoEcSPQTb5CLsEqjNc3yM1sEW3hDmBwVngpMuqaCV6orTHYVcNKJKCw8aJNBGB7L3mFZuCoVk",
  "key35": "32qHb8F4bP2bmt5cAtxSQqWd9iAwGF9XXxYzGez6YxkKA56CvbWDUVsGe4vQ1frcnSiLFUHFXAWE7fH4APwhwb1s",
  "key36": "3d1fmwP4xRfUwRDZzx5ULgZuoCMJJzi8n2dy1xHz4EakarhDHWJ6qZoFRoVy3wijfQqC1UDV3tg8y8RkTAsR1WVN",
  "key37": "39cMn3VSqhmcaUVodrd6NboapTUHXJE5Aiio2tmDUiumMoAdHYQy811vNsvFdxzv9iz6fSCF8iY3SP1EGqS6ATrE",
  "key38": "2gvFJ9KweufjRt5E4v7WvwtBNosesMo6sTrmQZw5jrC1x2aCgtE7uEVZNvX8aaRsRAmdippCG5nAgMgQJBJk3HCw"
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
