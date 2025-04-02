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
    "2m7Zjuu3S4z5BGWy6KP59XHv2BBErJzaSCFibjx6z5N1rz6L2mjBtLk3VDwoZKozEvaKyDgMAvDWjTo3x5HKSiBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zj1hUoj4g5cnEKXqh3n4zE8Jhz1C6qmYXfrtdpH3b6oScyyGrzPEtjzSUDfRafahu4S1SQioKpnj9BRJ6yqVzin",
  "key1": "3rU5ZnjR9oFZLTfpiKzVz6mGRY63VXA47tfofqMrMoEr3jTS27f6GZkCapQQyJyALN7fiR8d5ptfuzKkCkJaJ5Bx",
  "key2": "LQkt6rA33sRFjVZBBZoLkAjjEJx9yZ3Q3VpYqTX5JUjQoBpSu8B34TYQ7HRoogiLRFeMYMEy3Zhj1RiApYzevgr",
  "key3": "2o1RyJX5p2cedSWppgyKj5fB3a6wGKbtfJJt6TJfh1VBCHNSgHDourAo77qoyDSVLCFddByx4MR7r1wQYkmf8G1q",
  "key4": "5QqyMtypkJYGSUpy4vnnJuLXC1orAbo5sueqySct8maPE16yxKdie4uEdroZ94LAJPseooSwJhX2TbDVoQjrTXEr",
  "key5": "5JSsymfGCvWThAy7X73bjMACZ1ZHMoHPLtAsVUvCfXZ4gxo5XpDfaYACnriNgRZG3wrVCLMN54Z7qqv7Vt8144Ek",
  "key6": "55tcFcBNUr8jFf9rzYPQnS7Ngf1menaweeAno3NVp1DirPJbUAcLKB9GG51UBpzyRF7j9c1PUCK2eMEYiCgxwSQM",
  "key7": "2LUYwNEYxsqMzShj2uP9p9gJyWP2yogoeFjAvJ7HiifZkVPLGDdwaUkEE2BdpjFZsT41dFi8dmb46SHk1BiTAFvh",
  "key8": "sdVekrsFhCQihb7zS3svx5vrUne7hzv6mpPZX5J3RhGzd6TTqGXKZoDsdbGcFwmSdSMN8XgX93NpWu8yNcaDkJK",
  "key9": "4GcvCT1iwxxYZidGKWcxtGqNjKGRfgxkxNgscH7SwT2QDQkFKSpaPTxccaUZSjo89mbSw7gnZn6S78eGEZ449CTa",
  "key10": "ME2TN5SAJeMrPXjqkZAanE8zbPDNpedmF4QCAM8PWVSutfRTpzthvitf8BdezwGkBoBg9CKDb4ayaB7joU9GfvR",
  "key11": "3KoxdsuQf3Jw6oMcSBojW6qJeCVCmWn4TQbUfLwrw6b5K6Cu7RJoWACfPzAXLx2C6x8GzH7E39mXEqhFNutoRLgz",
  "key12": "613RqCLRtTW9sHYZHQMsvUNZMwKgWE22bHTsx3srPxLzHeWVuwBakyuVigEqSpRCjDCHQTpF8JUeZYRy4UxA2XPh",
  "key13": "4NkApuRVpekSatKxFDDZK6MSZMc6KUGjgTuto198J4mh8SvtCHg9Uwvi8gmWKASwe1Pir92c2zf3xWKQi9nR16KX",
  "key14": "2byY7KqA5oQFSBdSXu2LoTEgAjMJULwtCbC2pEHqD4UHPYXaKBsgq43UajaSRoXgu1bbXcHzNH6SShmUzyjsZkoH",
  "key15": "634Ywq8eejU2XWegAz2HD6i7gpEpPYKaGJZQVktNn69tM3sTDobXB5zSzx91MWz4YzQUPwYvant1hqsg3HJvZTdf",
  "key16": "4G1Vz9hKMYntohdMPvPaaZresGCcZpBrGPJc6ZuSpD8tYyssWngLB9XZhPSmbCRPQbUsitdGaPVaBz2wRAWExZdc",
  "key17": "2bybPZn9j6ocLWaTzHkFMDPo8KKdP2Pph489gVZ2anuGgZrvP2jzqS8XMGqgDGCww8kCbP5qkwUtu1yqcv8DEL7T",
  "key18": "3H38P5c3d7AqKrACSqiz9YtrxFu3oeNZQCbJkPWcEu3dHtCDM2GZVWnAxHQpWh6KoB4hdQ11cXUi494URLw9qxtU",
  "key19": "26QV6QKrRQFGazUCRiWqKmEmqif9TPYFuVZCQAZLuFkVwa8hXbdshsQhjvxBrNeWW1h1kk5WhjZyLbbg7NgNyXTa",
  "key20": "6AtguDheBK94eJdUTSDJ5E2XvXKT262KuEyHuMnE7MwF1iRLU2ok2ViZ2n8RVpWrEZ4D4tBgMBfRnpDJeFZMuiM",
  "key21": "3H5aW6wXhKXGzsSnfa55B9eqRDJXmtXaXfyDaHAq3WWGaMoX7URDJLriEmAXGWecZbRRGayRLo9y5UMtBeNkZFkM",
  "key22": "5s8wvsy3G73C4QT4jp1LpFneQAUjtXjtnJTNAvmgQ9oLPe9K6qEocPGSpf7yPBnHTmtWq3Zp8Xf6oJQW1Ez1RSve",
  "key23": "2wNeSoMKpuSbphscqJkyHkWdMzWuVXPKphfCqGyQyA9GgJWW1bJtSSgQAS1DjSRbQ3gqWg2a8JAhjQJwQrWK2uWH",
  "key24": "4F7RS5P9EMuyiHh8jeEFGYBxY6aFUR7jkyh86bdMErTawM2ShNdg55CkXVU7Hzm8bPmFZona66NU9Vu18a7YSZve",
  "key25": "4n5dmXFZkXFMFPBUTivkcoF9acgF2KeWUWwGKMQ84dcARzWuAztNogkwbPxFaydC3ABcKLhLzHhTkGswPYcrC5GG",
  "key26": "cre9kDZ4ULaWfa3rnThM8YRrQz4LYo4LUYPHjDyHNzkn375oVhBukLFQgSMLaGSbnGxmiDU55Z1jFoQe3LihUgA",
  "key27": "4kXx7iR3KpVDNdmiejVxLtHJ9VS3GEh7gdy8eygv3H5L7pM7E4VS7oAZXDyuHaHwTou9rZXVwGYbVkBTQuaMqnkX",
  "key28": "3Rc5d6iekYnKj9iLu8WvN5QZZ2NoJKvrohKHty7j7L3EBVToGSmRCxAx5b6hh5aqZF6ogdzwSDFdv5YHEMwLJYK5",
  "key29": "2Ns1mmSbdnzZ71B8PzBP56HxodKHdGFiRYCLKS3iJ5VszgazmND6jzCnoT7BDuAw3kTLrbBiWJEaj2HkJD2PxLoV",
  "key30": "KQCvrqvySAjAzgqDGqVmffiwRJUsyjNMBz9Xckk37hQtzh9GmLyWWvC46bFKZvWVv4qF4tqcEna5gkxxpaHxDhb",
  "key31": "2L963j5DKuxZDgvKMmAWsFEYVgkdHjq8cdWZnBT6ZPzsfxtzYDYQYB4bqviNU2iX7XMRdL8zJ6wDhWoK1M2DaNbu",
  "key32": "2TDZTDhKuSsDvhFpsxbd7o8jZnsgcCHKxTjJ5KqTpy8Px5X8LG2SnQMBFwP1vWHYgxhr6GJuDbUfEcw7Dar2mbXQ",
  "key33": "5RR8gA4WQqrRcs8cZq33hqmuEGG588cSV1hPuTZgcX2smijB2z8kW1495epdZvrAu9jHPt6RY2N5hvfxP8HY3pKD",
  "key34": "5cK3yEBe5mZjAnvhWeFpqD24e9eKWF321UdcT22B7U5ce2Np1JxY7SP53co9L8X8Lrq37zwyqBKn46ztqvTouhP2",
  "key35": "2qFxhFw6teYm39igbA4MNYBykH38jikYX26kuzEThydXrm5hbdc5jFxjNBxrzSiXgJuvLsjc9td1M7ekYenUYD23",
  "key36": "28Z9R1hnPpGcZt9fWzHbZPiW1TvgJ48z7d9km57bKxTyVvsC2d61ipjuBd7cbE6DuhpN4uFDcX4rcn5SzeW4L8WN",
  "key37": "5B4UyuukJ4KDT6239yGjryxHnyNzVBAKqDutots3rMc39EXZ7pJnvhGJEciPBCCuLH39kWvgJtG1ZZAS4eXLDxfE",
  "key38": "63k6W54SfQBkDZbgZq61f5pq5cQBZAWhAVhp7zrXkuqD9pxxzjTgBvEELkBcwLw1fh3Cyx8cnWzgzrsjFHdyXUsC"
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
