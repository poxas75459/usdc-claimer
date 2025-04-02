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
    "rqjHt8vwNxbf24XVsa4P3QAZPtEZ8w9Wy9nXieqC12uSRuWeVrpvJdg7sNTSDw91myPAcsBUsoCM5cikcqhBu4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aEKED1SnHhmKvSWYmaJzo21fDfGkQcyetVzyQpAjiUGJvuvfCUQLXUppCCdfUZrUA8qCi7dbj7gbwEKd5ehmNZA",
  "key1": "45DsHgjFcn4VaVUReEahqj9kv9NgvBLRPo9bx9mP2TEvpZP3uVDmFY1E7pwH1WM4AMH8XUMzsrfiypcua5t4XzCN",
  "key2": "4YKMSLyQepoBQWqXu2J7aA16NCuHq7LpGcXccS9hoZjbdLp7hK22gd9oz6VFKqynQUv9UCq5UuswN6fw3EYukgWG",
  "key3": "5Xa55fHSYjLNwiM2isk3CWtoQLzPL9ngeWGpapA8D2drrsCRQAJ3h3Y7DFoHUTXKUHTfDZoM8cdqpqNJLMsSWUFu",
  "key4": "2wJ7HSU6L96LZYtkE65uSxGEKpZoWrsGRymM6PmigcspG4hGtbSxmY4kVgEAXdmxA2NaaHRAV4fhLgJLsccFiKrR",
  "key5": "2hetbUt6TjGSBgV9VUcUYb2Fz8qx8Ay84jW1uSxHJBJtbsAMdrYxpLmKqg8cd99chod9M7PBXJwL2Niq5VBpTD3p",
  "key6": "3WHixnTYwh3f4eW4bES39wbNbMEQtthTgVQLYd8eWSpn2KMhEA44v8w5QAKf8yKvoCX7DeP3yzDGbQd48PwczEkD",
  "key7": "5kGcyXZgo1X2VNr41aaeEBFULfRGXQMLDv44xyZoRxWTfQXg8MB7v1BT1MwLTbHCZn3XB2uRt9vaxko2nSbwenJ2",
  "key8": "M3q2TsfJkQxGzRtHHrGeCfnRkzyqub2Dj68cReS553BwjZtYDh361qjB7iX8fAgnQiraRaQAQ3tbmdxrxmm9v2p",
  "key9": "38mmo6Do6Aq8rFpDjXo9pZ6sDJqdsAoc7x3UH8CojBokTTgKSFEEhL6tQCSb1yjj9seAg5j1UtzRrtMSYqpWyw7f",
  "key10": "27zcMkcTQS8kS4Y8aMbDWLPJD57zAUr3bNn6ipudjgioDgWCXRHUV6Un38LJXGHR36r2nAM179xtrvBRDyRpknrU",
  "key11": "4eFzymWzrYthauaWKavPpgNHiQ4y4eYbD7ZYZUAQEmxBz5Dq134ibaBJanoJpvNmenv2DWMnBZthJUisYYprHzAP",
  "key12": "2NmecUhUcHUz2a3FfPijZrWxywrdANeZRHa5hDukNrXSCMMDKjdEKtjQf9PncZRWgPkEh8jfoEB5tXMxr4AsQEvZ",
  "key13": "9h99YSFzhyGZRSx2rtRhHF13TUVs14dQEpU4v7s9AjtZmqsX1HMAAujoDSscbMWJpszqXAxNy5jP9n8u9go3cfL",
  "key14": "5wXmK6aLch6y5EPtp7BsZSdqoPSyzMsa7CEBZWYZErgyRzPvYSMqwmir3J3uZiJrtmnf1k8t9WVQ6d1qWbgBrgG3",
  "key15": "4eAsp27BjtuPNfh4NnY6fcw3z1PKJHddDPLSPcwge5ao77R8ocVWzMLCHcuwFM56iuD24ampLGb81Nh3LU7dTWfC",
  "key16": "uVzopx4rw3yWhdevXB7WyLqRCa3KVfBfuJP9XoVaBHNxaviXL6YHjKuo3TGNbeesK5XdTqdbabSWLohtaj4dgiT",
  "key17": "3jGPUcyQ8f44TUX2qVUu7s45TUJ6QZ7TBaUDQFSrzBJiKKhx6LL5ZoRZL8FZzMEdjizGDhXyrJ8XMjFu5LskcRAV",
  "key18": "5gTvkLm3QNC4krFMAY99y7sTZDt2KKA2ZFkVgsFaD4xnyafdFJtUmW62tm6Rp8VLKGi8vuNud141x3ZZYu73oLVU",
  "key19": "63qLDNfuvyqV9VqQKqrQnFp3sbyetfnRjsXVU9sZ2rE6VG5tpXDyU5Qw8a31PX8BwXcnHeLyxZMUtcgqiXpYgHYw",
  "key20": "2g27A3qf3DMPTA2x9NWhckTJ9rDRG9vgB2BgyH67G6zu2jVLMcjCnypyTo8utUuPuDb5U7HEEyaTDVADYruyy1G6",
  "key21": "DvLtxUR4LJzjswgbznT9B2WCQdPXL5DzcAB2A6ZaysdWhiAC8iuBmgU2xiPD38sjfx1yzqiHYYU8yhXN17eGCVm",
  "key22": "3st6zMXFjWR81WQLNwuLKVp9FNaWGpmVvP1oZB8CCD1yek8ojLKbBceVatb5XhJeE7ovj9xTqrYP6JuwSP86SbZV",
  "key23": "4c8PXdb7hsCq1y9BM1QYHBghUpPcq6zAhhKQ3B5w1uGYodvwVUZ2iNNBueLt42o18NZK43dKQo993rNYVSLCQJV5",
  "key24": "nLWGJhKfHQU2iQQtKwngD8RK9tPgaxTbfmZ7yhHKpLWmnwyC1CGFhBsQMLhqmvKiV1gWh91333u73Tmgsd4X6Ta",
  "key25": "5EJnY6Lo61YnR7FawyeWi6AhDhvNTgZqL6rr8bSM2wyAqPtK7zSW7cAeFZWq1znmH5mSAEiHs47pcgqZwLLvR6YT"
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
