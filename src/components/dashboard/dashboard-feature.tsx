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
    "2GhQTifcVpLfJXG8bx2TPQeqSM15AWR6h3uHdE2opw6QcbFBC46RQ59TTrmvMW3f53SnLGch4X4XbGnrsVzFW4CY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGxjtK1haerd53sGDuFqebQ8zmyVh6xAbE9pjc4rDg1XxKnTjDqyxffn9rY4snBkPTN5LguvMmmPsVZmiguJQx3",
  "key1": "5mVdBvojPUkMB4cDVHJVXhmFVN9UWjozGsbd5DYCCRzi67oMihXYM8e4SnbsmhhfNgT7Yy5J5WQcLFZU5J6cfULX",
  "key2": "3fNin63KhNSsZcMheLK6AdYE1vtchrA5CGYHzrBQUPNkbi4tkja22b8A2AFwDeWSnuMdzDtpM6pdJDu2CQRnRmm7",
  "key3": "nkQaRxx6u2To3nQm6qNviaDksmrUKYL6k63aUi3oPHNyDTh8PiHxQJme7VJqt44ZCgPPe33rX4VAivBNySLu8yH",
  "key4": "3LWLJnr5MNm9pviciPUkZMjqJijGwb8moDCv1q4mPZh8TkTH9HfbXhZHLxdULVikc689RU7DDA4Tp422FCXsCQ5b",
  "key5": "55QqKhXCwo24S1CaFZtqeokcTkfGyFGLy9Kngn9dQTt8FW7MBVddNBu7gXz2gfDvucSTCAab1SVAVvEeoyYZ8Fei",
  "key6": "52FkGfvhzXL7CMN2Eqi2q7XHZRyxj8KiiYMCJib4tfMhS9cSEEb41e2ps3LJQvAnTpauUupPvf9jqN9L4XkWAe23",
  "key7": "TnkXtYDsJN7v8xZs2hZQYaQF6bhzxnfLn89reGHZjyRKfnfrvK84wJ7WnpvNHTQLARRF8vQAfzR1BVTXj5ed9B9",
  "key8": "4kdNfZgsFB8Ekd9vjAXvuVZfSJbTQTXmzQzEKZHrNBTSbxBaEKFfhGC7ycfxs5HYfmpfZfptcj8TkeGt3pVtjwZj",
  "key9": "5w2tfasNWs2ySP2HgAdayCwhYzNnCkUdPK7Wu2oP2m14qNThGGGyKfiYt1yfArxCDmyandnHrQdvo4ubvegwfJHw",
  "key10": "3w4LJWrbmmSYjdCsvfZA3TeUEgiNM4QHfxMPxvSrcrwngzGLxt99ZcL9TYKuAGt6wsWtBpsEr99TjvRsxthNtnJH",
  "key11": "4VqePep9Yi2TvXjv4mFpdW8AhdWAPFea4FMUhaTNs8A7HkdUrt3bNM6tKhMBQN9oAqFcZi7Jji5xH6vw1PnVyK1u",
  "key12": "4wE7Y8cKZAPZfagfgr7syiviTUjUDcQtMqYy1V2Ea3ncgSWjW925RFJfhPrD73K1WpMptvTByE7b5EZtu269u87P",
  "key13": "513cB2FC57GTFLxiCG5mUVkv3hnZGo4PN8GnHXjijaPcyQifzk2wzFe6DqV1Z8dDYz1E8zn9rZKVjr6v7ZaN9u9C",
  "key14": "4FinYdrySNRbBgcthYhMjUfSY5srb5aY99hxHdpfkutWw9bPAghpYmyCeihX4MHf7w7pacZNiQg6NkU8dcBjPBDM",
  "key15": "2ZCn4MyynustsPYLhGtdx5DFLkq14haV7gnFX2iwhqQyRZ7r3x2RCEKEki4CeYqtZJf9SrY4gocAkYBdMyGJo4xe",
  "key16": "2b7BzkNJiNKVSdLKavHZymPqJfRNeDRARAqVoFT888D52tXSDQMg1cDHZcfx7fKoFH8PpTZM5Y7i2sjtSYind6Rf",
  "key17": "3b5QM5GpeEyiBp4LYrbAXVrr8NXT8xkyzHo8m98mudNNMcbKKP3b8CxxXM1VKuGbXjA3AXgkLGG4oCFuwUqTy3PP",
  "key18": "5ULUNX1jETHeLWeLTB5k8nWh7jxLmup6Yc37WmLEU5Jtuf4LkA4FVdFvp1XgdgVCj6S87DGdrpQxMqWz3dzrELRS",
  "key19": "3bBY5uSvsAnBivT3vSUN7kCemnbu6r1PqGvNbdh7CZdKuCt9mZVLfwA6DhXSddBv11WbVy5519heLigh8NvHi1TX",
  "key20": "3PMAb4YPprXbPx9dWTPVwhuzJGycYzPwxFfnBRJdoG2qY6F61Ksud1tXKrVNWeK7BFGCPGpPaBjDU13MMeSk5hgj",
  "key21": "MnjRVWsTGN5rf1sJX6Y6vr5FiLuFk9uiJEvU6MYFhXnfRRAftYQoFtdmHoqANCwwzGEPzNB54qf9dQTuVrmKPwf",
  "key22": "4aYFVybaj5dNz28r1oXMkeqcvqWvZo7EQV4qXxczSFPqphvpct47q4FAFQ9rWXRE6gPzp1UzKWPXZxSJCbv9cVXT",
  "key23": "4JtxCREcZg2FrZQyXyjdqgrCo4H5xyu5aRSmG7CMsVdjVhPLrgKhnTNKXohumbF3K2YE3WXKGDLLSA9cGq9ahbqR",
  "key24": "4BHXLizTdNYxrumY9iuBvzo8cxavFXZcbtPJUSHu44tuzArHVmSAYr1HNrcLjgmVqcP2MALp7ev92HDcNXP1GMZN",
  "key25": "5cvRqbstibqmPBtXHi4Kpqq3EXZQopqDWoUkLBnZWnQQ38CMAZTA8x8S3RpAWrb5MofVqAq7HfQPKybHqfni3RaC",
  "key26": "37rqrAcmQdVwogNMHGwgMEcbkYey8CKHui7EYj6tv4ye9kTVh4Rjm32zXk8GtFsKnqboQpYVsdEEM2onxXHDPUte",
  "key27": "5FCi9JHUqowH3yiRhsryq3TwsgFLa7B6ArxbSzCwb9c9WURNGeHDHCkSqyBJe3oVuX7teDfrZKTpVPdpVB4QwCDb",
  "key28": "224dEWHZmg6fTbTLLiHCZYiFYiW941jspnZ12fxKa11kPvZxMBvzMSnL4p2JtgM1vWVNDnQ2Zu5xVUUSLfJbRfLL",
  "key29": "4swiuSqvydpkyMwsqcWv7JzLHYBvwHKfLmzHNqMXm1kzhaY654WSs7WwyS5svnU8SxNGvUVQzNY7UhmHEkTaELYU",
  "key30": "5cjuvBdZiVbKynmkXPgCTuW8HVmxrrHwLivN7xUbbaQrEkKpBzErkcyq97C3jdtHoEojSgxsx5kZgn8CL6DMjzFg",
  "key31": "2XFqbkxXDUQytZJFd9fpwXU2wtGo1xt4NupntEz8UzQ7s62Vo81pt2AzWYkitTVB9QW9iGGsMrsJ9B2auXZobbnZ",
  "key32": "FJ375AAS2gNGxXWkCRARbHBk6VKhTTE5dV6dXz3wxCqzQFYcMkhV5eCi6EEqA9HHKVDq1fRcphbzX81tRYNBhnb",
  "key33": "4SZNoh7pZdow9ZfYWazuYUg8MpYKvTij8GBmGe7RgAEBuYRWmV9RiSbJAb8veAUcUa6HpsebBDkgyDB4XgWLe7oY",
  "key34": "4GN1QorDq5DKbhrhY6izmyBjXBTi114KM37q1pfyhkZPMMT5PdKvXwsMTAZ1fPP8gxEhH888L7uNDzCesKB1cNM1",
  "key35": "5yhtzb6WRDqPXhh1LCMvtAsNd5fCsKfQwjMnwiuHQtf9zpcmRwYnTvivMjxEoqeCxi9cSHM4o4SUxdLTFDiLRU7u",
  "key36": "3PQCqfEyzTUPrLmUYkERbHDyy2Ko5r5aD6mMpRe396nYQHF4ym4XRY6e7XovHvGvmBht78xmgZ5AUYgzwhM6YizR"
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
