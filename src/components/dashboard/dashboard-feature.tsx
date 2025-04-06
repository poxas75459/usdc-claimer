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
    "qVYUiLiXpHQVAwqMoTBNkqpjLSr8G7KLdfHC3osVsF6WGjDcBqwTahH59RBNvc5m414k6L2F6oDiGugmdhHwr2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VyNEzdEbDqqkrP3YS4z6sLzuPDmEveUdygnr1JsmNEYSqzXeYxcknWpfhhL89QKP82e3pyKPHD9duA6AzZNBUs8",
  "key1": "5XePG9aA4wo6cVKszoUHj5aAecfTQV73yfpacrSZEckYvY5MEwjDQDFHzP4kETkRwKAaxmmDsJPRdiM2NcxrEx6R",
  "key2": "2r9uyjtkoJg1znts9RWFhkKxMV5cgPqijuu23QWa2DJ5hMKBQ5gi36ztkRZSU5agR3p7jUgonVrmijMQugdJZFif",
  "key3": "dQjSpttzrLv6NVVzKaTFDS7THu1oTWQKkr2WnT4GNebU1rD8Q1JtfK4ceuQ2iPLQs4q9V8Nqs7t2jyawsYc9p46",
  "key4": "3rqZE9FDvkRZKX49E8V5M3TEJRoT4FDESDYD6B4F7QykZDNeVj6UcMp4MZHtk4qgZwS6rEz382dT9y9Ty3GKX7bo",
  "key5": "FzkwBu9jEda2TabpBJ1v6ZTZumP6GEDtdpr83N2qPBBxapPs3DbewHSvuZfUmVQS3EZMEJ3s86xeTi3abxvP98Q",
  "key6": "5R6Gr1HvqaZD1YAdSdJauSiVfuSz8Qcd2wBEULsYM2Zkc7nUUc53KvzgLL1pBexX2dKRF5Ws3dpdJDt75VrrYJ5W",
  "key7": "5uzSsQJnSHAnPV8xxMvtgCQQrfV86Vpye6v1s19ebZ3cFFKTNhpXi2UiAe3d7hpwttexp7zPc1xcUcBRxtxVRZ8H",
  "key8": "4ugmEKqE74tXv1J4Dy8oNVNmDdxfYi4983pXS34LXk8qJWdz1LpSCphWb6bhhgf4k9Ab2YRhzf2ZG59ipr8JgydV",
  "key9": "5fT78Le4Pd9Go9iYfYoFhbwjNMj3kY7LvpKry7bxko7tiSM2Rj63jt7JCLEkUeHJE3BKZ9VoqM6vrDSLyKs1nwNJ",
  "key10": "2NHDo6bssbSZyZ5BUdvFsgstXcyZ9dGDzJkuuQnxQMgJnqoqvpbMo4c5SM3mmb5TzwqAFw57M3oYUFB1699JmF6n",
  "key11": "43txazXmxgPz1c9FNxNS21cVoxhoScxejmFF4z9V8GPFVNSv4sQh6Kz7x4rh9gmyTBj7q3GBUEmtgzgb6okbbKQ",
  "key12": "2nwaRXGEUoktm7PNfU7Guf9K2vzhY5FZvpmRcrTwg2WkJc7G53USJ26zsKqHhUiYiCAKfqy2ApbPioxvs1hveeRR",
  "key13": "2PKQ8fASJ4d6nAU5WGyVx2QX48RV4Pa5DEvrz7duGi4yXKcYYR1DEvRixCFqYyTs4PGA42jH8M2FRnpJ16edViik",
  "key14": "4wDFAEXdFnXv3ZU7jyadG1USjqmeT9PArd4XVTxnCca5U9Rpc9ZnoASMhSRH21sK23TWCSYrR65zht6Amk6o1RB",
  "key15": "2Fu3Q7Czbwpej1ZzuTcdnoEVPwzD7y7AUph2wJWPw8qDktPSknummLh8Hp2jmpdPmRP2beYQ396xZhxZyD5pmQqA",
  "key16": "ArC5NBPtbxArbwnHTHrzmVsSe7prGuoMkvdRKrsJbpQmZnN9FQTfR6TtnuNKYvRpADXkHocEkgLP33SDAL4EVyb",
  "key17": "33D2XRTbPKdLNWgzTuzk5owXe95emuLqUV7yEqKXVY8NCVoGje1T5WTtqYTWLm3PVgRDMxzdfgE8rfn3QgrotsTv",
  "key18": "3Ns6wU6uhsCUJXfxsW9sfnhXKHqCGjc3DcSxH9jZiHrouZQ4nzNkN1tphVFRXi2TFrHQw84NKnLxRUxCdvpqosdJ",
  "key19": "4NaqcHX7LRgxd6B8bDVDBvij1BKmtTiyqt6XBttmYeBYtFrSQxcRwQexeDiDntRZrAEavZVcQZkJ3iLSkobbrXc3",
  "key20": "4oiaHiZPK2cZ8hy9b9chMzGKyYqBHwVg4PZQN3qK6pJBbpp8pzvS3mLvYY2UEN58qf4BYQ2JwN2dhduTz7Uxy6fR",
  "key21": "6223FAheUKWcEcFiDAGZTZe5y8L95RXSgcVEwT2WHjaWp5wADUYkFRayWx2fzBwttrf3u6CqSUhoq7jJfuZXVg65",
  "key22": "2LjsR2d9DCzkUew9ohruJC3dxVU3rGWdMgHitaGC1Z8RGeJSwYzRh4qints5y4S92RaXXhyukWL2udn9NjU1mjUc",
  "key23": "7YjZMVtX8TVz5QhKFNGmTE9mVEAWjhBhM73hffAXNgbskPemVjbehzMMpcwzVHQhcrpzDFCBg6QuVWaHbuUJQf4",
  "key24": "4SPLg2xV5jCV7VtfTNrjW8URqJ8iD2JffgPHTVC1pPCJLzvzmDaEh1dYma7eaFHQm1LXPicYmXBmr8tvvCUtSGKm",
  "key25": "46C6Ad4GX8JtGRLcbwx4zpvFfG7kVMFmU89hNE6kWfNu7re9R6Jm3Uj5Ck3AoPCHbaBVRwRpsuLMay9Aj6anTCBg",
  "key26": "2SYY6DgaR4yhQVepnQLPMsYyzEUDQKBtSQVbAoxoUmATSaspc3EJ9AZaQf68jNtmEd6NJwFUL1kexrVqPHt1Fm6Y",
  "key27": "5nNEaAfGRbN69zG1MV45p1ZhkUXmmnDfhcRJNPFiiKZC8eGscRnLTB4QkBDbiVw3GJzNSKwc8vXJBb9CGHdRv7PJ",
  "key28": "3WbKSVZMe8gCSFGjDz1RKWrgn9DAJoGF9BHstwwB3a32stek4Z63e9bYXDKDtnFEW3QzV68DPiVVDSiJEAm7HqP4",
  "key29": "4gxPddobpkDyyc7JpB7rTQC2EdKYjDimn9mF8cmGEFJ4njZiJE44Ja1KCD9TPmNPDvwqZTFuf6rE8twthNKSoZm3",
  "key30": "5Wg1uqWGPFHaGeQDJduqoTuHEugWc7m98aW6X5UJzarVNS59QyKhaUE2eFcYiMKAQs9xF8zoK58CahWo4iMfeHbW",
  "key31": "QiyhV941iYtXWR1NXkFJq84PCJvzjMsCAVDrmSvX1axLMEgH7JX94TFtNVSEc9rxtsDhNBvLZmwT4wTPeFfkmw2",
  "key32": "3H2UM9JD3oTwQS2XXGLaahe8cemNxB45PNFUnGEEGYGXVb5ZsMASaojAkRKE4PS46GJfQ7sK7UatyKNuGQsNhjf5",
  "key33": "4Z6XqTZFDz8YsQnzFW4XecQPZCMsHQJGQLnnpbyMty7fXXFpdpaUiVeyoHkZx3JdUAzyMZa5662tCh5TBjpx8kBr",
  "key34": "5zgyTeQtDzCTGCAfvqBjpkuKnhh9AdTphAWWZfzFoXX8BU32pPZV8MswabbSEZNGc2LyMJ1iABETGJX3bxeoxqed",
  "key35": "57JbFjTkA5sFa9DLiWmZgZyhnmFF1tVXnw5bPuzUfnk11HmHcpWZhiw7t6JZDJY7CnwViVki3xFLDSUgzvnQDeMm",
  "key36": "3QifviYconP2hMMzhrra4H1v2dtpwDkcTfq7S21eNhFiqyuCHcuNfwDPo3veVR5ZFfSM3cwaUPpLSJsr1q2wb8tD",
  "key37": "5SQc8LT7h73gTHtVBU7kAEbjU2GVsiNmeCFrYiFkUJy7AJoJMYPHtb7L5EXibtgNnwqMxom6Cp9TeWa2MfxSQdFx",
  "key38": "55jYJv1Pt7uhnfwgLqc2n9WA8FF76XhYcewXxaZmKnP7iuLUKNAjbbp15UJRM9fA3ZXhDEiUrYYYrnVmUs8tYBW4",
  "key39": "3uEGXmWQYHcbYG7rBENT4oC3HNWuVE4yF3VdRgT3uzdrwrK97CSEpJFcEU3i9kzA58VCXMhS8WwS7CatM26LHcCU",
  "key40": "2kDxkGet7wVBzvCX2UiveFM9i4xExB5dd5wbQpiCj8Y3RVv6WFXmyBf8JZNrEGZje7j4NxK2tBBdijcH9gShVHx6"
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
