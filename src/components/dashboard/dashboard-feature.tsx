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
    "216nrYLDLfS3BdwzPJ1qBLjuLHceuQZKVP4cttSVrkWMGh7sjGDVfNQayWxCpDdmTy1ZVZoDVmH6eQXS7mUaGvpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wC6toEVNT58XDozVV4qMBZNYbaUB3oNDEmrVLpdjoRc6VutAU5eGzQ3fxQkMWaTLAkkcnUC4r6XG66WycP7WUVY",
  "key1": "3UWZAPjCvNLtpagR8eEKX7uKnbmxzh86BLw19cUAXxjuxqwVXtc9FV2d3AXq97S6nn3LfnYYgaVQMn9uy1woWnWi",
  "key2": "3TfX4BZZaMogXrc1DxsEaXKZt5jhRQX6XovUhK37jZg3oiDtjChWEd44ggUYLq553HBqpiq33ViCJPqyzreuZi6a",
  "key3": "613ASCX3Up6MaZf9j3vZWmVbzJxqCHJbJfcMQxYatPTJQFzrN2pLymLSkR3qKgGRA7nCu83W3XEsL62iDX55y7q1",
  "key4": "262UNHjGgeCZM5JcUaGKkcTsCXQvWVoi8kLbB9wmMbw5uTbTAWVKZfCgfeprspcM1mDmU45mw6crwVdw2MeodhSC",
  "key5": "2xpoQGWTTBN16aDg7X3qvbuhvNXVy7B2fHYqrE7ShYCpaJFouCmziAJiEtwJJ47jvhhGPwoNhVnWMqL9qXMtdm6B",
  "key6": "5j3whrWxaeEjxuTU7dTzorzsKqZhMFt8z14E1faBPM5jCjt2Cg1ztmg9BQbXTNAnZoYdREL1bzszm69eN2McGD54",
  "key7": "3fR2poZZbGZWobZQNcgN6t5ywhfpDFrXDoDZCtHmP3mJmLpGW4rRAroKfeN6tCHiTVzB1DoquJEyXqAC937GunbW",
  "key8": "xzKJVUSeEJNZwCgLKYRDQ3DW1vPoYacAVqsipgDNFZNsVmX7Pfh2j9F7YnbexvjjtgT4HPy53YsEhK3zjzGCL6a",
  "key9": "4jTpH2mCHTTcWr4gGtKEhXSYgHYHyeVkd3pbYHy5nFy8eEKy7L8JcTgztHurBzJs2RQSzdgC9MCxNpdZ8QhHcAWr",
  "key10": "2mM6U3d9AzeGDHsZy89V1MNkypBN8gU8JLEYR7UEwPvry4DNsbUmdQbHgRiZqpPkgsxRGnBHKJtvgYH1Mtgt7vX2",
  "key11": "3xnoJvAiQdkFC1RRbxD5YXWcSXDTPGx3yD7nCDsW85X9jaYpseM6c9tGbid7h2REdHZtFvPiVqvanukDk9TYUsEy",
  "key12": "LhKpS9WPUTxhuMHe963GJNGKbwo5pYbFxdWAHko1Vq4MuezW3d5BeHEYU9sekgW1wprw739i3ShCVSbi4Pxf4ur",
  "key13": "W8oa8AfktBoreSQH4KW7HALWntvXB8YAh6ZXaUAQBxroefwUe94U7QcfqxADB3XwXsXyXaCHcxE3CP8Fokm5saZ",
  "key14": "4exB7oubmj8zFdELbdpVo7YRJTTjKvH4FPkpe26rojFfUNcPhq1Sk2uJyEFvkCVC3dpnt5XXWX8FCUvyE3t54x62",
  "key15": "2G6PX1qTSxdjb9EnGGv953CHyN1cVshpURoNuguPP2cuivMbHivMLPyPTyEHbXuDNHYCJtn9z5FyJ9LgmqqRmaBK",
  "key16": "Ys5QpwLqQCzepaZzA1k6pNy6u8Lhd8oThbEjS6yTCAduhYEmn5AKXBXAxiu2XCFTehiAC7YRkznSH4cHDr2pjeb",
  "key17": "4iWDdQpA7ziiw1hYGFfQn8mqLCcaZ1xdPi1vs6PxsVL659hXhRcXZy2zf766jxACobiLnSdFNrXMFxX2ZmwMcZCw",
  "key18": "3kThAr4NE9vsCt6vZw4rg384AkD1xu63Wxc9ucqSbYcX4rrE41oW21yw52LhwAViMwV7j3evRrL7TLxkgnk12XD7",
  "key19": "i3i67o4ytjhr4QjZZiMrKHvoybpA4PKJWf2iLFgVxESgpkqKibFizuCdnN86widU9BXjxRPNNn297XeJLduWTbf",
  "key20": "rEM2nd1w6S7w3EmcFwewFcsoDUiE1Ns86AbL45g5ESVigpSNnTZ7eYdYaexCEumtibMFD7vDvMhgc7VD3WNxDD6",
  "key21": "3S5iRihRTVMtChqWxLyqdDeWtDVCcJwNzpxzcfpFVBwFF88goUPsGyGuJ2ZVbRQzsPmpoSJzKTocwrnnn1GgUyD3",
  "key22": "4JoFBtY6WLgzU2p6479jbKooNmQdByVyjbLzuLhExwbUroD915N8RTKzrDEvuDvUNRU3c7B7CLciF2TWCW6A7AJy",
  "key23": "5We1tAvRnmrUeW3BLK82vA6dgEgc4FnqmWVbQfEAHQCmEh3fCFFAJSYSxLtPouaC3kaYhnvutQehqDmv5zra6H7L",
  "key24": "2EXvfSUVM8wHVagxtyu8CkwuHtVhUwEARZxrAGUiU52YHJsFuxP5w4eUoJsum6QNtJ2Vaf2t2rQZYtLueimuY75g",
  "key25": "2DwyFGZk9p4frHJGPhxAPHWKTyJfvhnQfHx6eGwAXUVEbuGiMMBJ4mEvhz3M5KsLA9gXzqsqasYiFMh2rzqVwFjf",
  "key26": "4BnzcmxKhgMMi28L95Na5fd4fEw7EQKNJkwNLXcUugPQU2sgTjhSwmBhjFu3yAAX4Tn2xmrYyXqZHH1v5MbiSWF2",
  "key27": "3JmuXBJ5uuJgpp1BjStNkHFQCafVDh9hkAPxyipWWdBoNmLQQ6vowLcgsWZx6rvyPoRxbMXKchTvGXgEunzUs8yt",
  "key28": "5W2Ej8DoYMZBuBTDcR56mKvPwKpfg15F7qPSeN5mZYhYDmeQoTNXxthzANeeCFm1tQBxMjC3DuzZ6GBduUX9d9ei",
  "key29": "47gfPyvx2f2aw7kYfLsLrvd6MM8VJGrEMwwMGUUoJrVqfpN5sV6LJ4vykqm8HhcxLPXKDaZahLSXp6WW8LfRowpW",
  "key30": "3kT2eP7PUD7cFudbqozy4Y1PxH3b19iicgCJdohroTkeBqc89z4eUrESUa2PaPZzKJJrvB8nQkfdbgAGW5oZ8uwD",
  "key31": "5VcV1NtE6ncdm42iCNME8f4WTc9gC8qVpdyepnKs5vqMqjm5ZmEQcy6wErXvAp5UJBHUiGwXiaBBSp5q3ZyV33VK",
  "key32": "4N4XAaYxdw49y8rYkiqM3htD84pXUTkiudFgqXcfCwpPFQrSNV2X8S7o1Y4NLnSFuGKtf3LkTFBmsYafVpsxPtLb",
  "key33": "3tC1ort6dp8354NdDbJikBjDnxkVRGQs7P5peXSf48ww9MhEJGajbFdeKK5f6jrp4w1xF2AFH6HGSs9tJigDd3pq",
  "key34": "5sj6WWPj9R4QzcsrZwWayHk3Fr3pyDz6zWcZbCxaZi7jXhpcn8E6qJiH3y2q7x6H5ZdQFsb7eC71AKTycc9puF7T",
  "key35": "5ua9qRAwpF8ixroR4H56qFezdAje6EgvpWYM1y8nvPr53tk8yxDNsyg39cUgp9ozKqtHbPkjuGxizgKCxfzdQagq",
  "key36": "2kwqQLqFkYK2fEU4Z8gad3k2jrxFA6Uf9GJ9YG9u2yNomStKpjSNDLmERbar71QjQ47i5nKMcn8CpAh4uiMiyWXV",
  "key37": "5mEvN5FZ4zKRv8adEbtsyAKvdWsShQPRgq9Hp4EzbB2NLJq7ooCvPhAPkhKU6eHKHxFwJ2bBK6EbPkryRZowuvMa",
  "key38": "jpdtJAAtgcQx8hceFXjPvnHw1PsJL6CZKdv5x3HsBaHSjRWykqBkv36FLNcizZkDMoVhZSSa31rAcmnBT1rPLKx",
  "key39": "33SdvY1sXTPLngJ5oj8DQS1nMCErrDKp8MTjxweJcQCJZtG4DcPEvtfreLJVZ4THMvTV3jzmvqarsJgayatXAeSH",
  "key40": "4iQWpVmmgfzGTw3kdGxXZQHWsT5iCKz6Egd6PFMX1vhc5rUE84GD6MVzSKNrz84qMuT6Y6qJ73izRNXemr1KbyyS",
  "key41": "gH7opnFdPhoL3Bg5f963xuq9ck9wtoGMCoRaK9QroGQCSmZroiqg5pSZiepWroNCmJYh9Zxa7UGxY7UUqN5EjbY",
  "key42": "2BJSaeZ96cB17rABCN5FCGVwnBhj1dtfFaef7pNytUWYcPDvYkjxzQSdYvfFicJLWgp2rsErkmYXnQdVTy2uerdY",
  "key43": "3yg8crVytMFqjKxqQVyf66M4mqDuGFABezKXt6zwPFotcF359TRPJYc6tEsHCdrMUJ9d4dbjBqzGfzerxDJQV8Sz",
  "key44": "3nn1TsrQgQFE4P8wbmdFG2pyJEekCbRdyRRSoPaG8DAqouuYQJW1rHeJH4jTCxbVkymQyZo7Qt3PH4e1o3W4SRyu",
  "key45": "2nbrfagPk15YGkurMYyNeQfQosU6aS3vUqyRmr5Ns5iw8s79DueG32LV3u5iqshcXjcB5oMzHdthkGsS7DZ4Zgc7",
  "key46": "3ZHpuEbU2KEE3iEbRBXrLKuboUggac1LFzxA74FU8zd5eUHSk6YosFTgesE2CXj789GCh4zten4qsdH8E6qMtLTu"
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
