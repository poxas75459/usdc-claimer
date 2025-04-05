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
    "2sATpw2NiTkGo8BD69LBgZEnGhy2CjW1bhBUQs2W8p6ZfMfSAWsySdXeFgFCeJfmjzkuom7Ri6A5nnCsrsmCsiaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CEBVRgX8UiHTVFaQ2MTnvTAhGCR47hak3Yn6iLktWHaJGZCFhT7X5GqA2MxJ1MBqstrJ2RupCznuEb9KnFqKKd8",
  "key1": "vsja1ydY7JX2Nhf14PNQH71b6BihXwFLFihhcixY2QSY7hi2XZQH3GSTavGTRzpvdGiEmHi5R4Wm3t5htXdKqQa",
  "key2": "4tAXg4ZW79fJkXZhKVxCmaeuuv7b3L1dSYbvdeNrSRrUu6jng8utFw6qmgW1DCMB8mNnDBq3i9syznkDeziVyAnh",
  "key3": "3LWsPmsSwjwZ9S6rKFYSBf6mMX4oqmBbsryDcrNgWCPntU1HZaTyAqqizpaiC9wb2s9q6khupW9zGfhpnLwn8Eu2",
  "key4": "53qE1ZSFTKhMPB8aEGaro3GSWTcKHuguDaRiqLLd5r2vThCBDK4Vnn4TmWhuFGt7hmkRJJJkpnX7eomSo1t8mAxL",
  "key5": "61YUW3PJJj8a6cBrfjWFjprneisrnkVZDDBX2Ye7vuXggWALh8S99dL94KZhgKiaHoGGXrVmn8ijPshGQ7hZw7dQ",
  "key6": "26t7k5uGHD2wYgj6X7quoB6kqjoRjwfWcB3n6tJCvJppx95AqSCUcd5k9dfSkeguBkk8HikNgE8JPNySGMGP6ZYN",
  "key7": "k1shUtuiknueuSUxYMv9vJASk89ZCiUc1RKWVmWYq9DzjzQsMDFvcNqt1x848k9166LAkvH8niV3h1gnsyuEXAr",
  "key8": "2yYkJrrNnVnB4C94rciRBT3RVX9YtDsqVqjpYh2Ztj6KaHUcjyyLkf5PYMeivDvKBZA1CF2xmT4CtARU3HFUqc8x",
  "key9": "2casZpvfmQTGHKdFg1UnoGFFd1q38Da1UxdT6Z4Wxd5h8RAf2rxBiTKABsBPuhFHzs4CUBFUrc9YoxwhjsLVaohj",
  "key10": "3hd9ZGvqg8iH7Xiiuwzfx5HwZDJBTR3mvToHSjSYpUhNP9bxPoW2FifT2fgb4q4dXtKQuvsTs1rWgCyXVMADXAzS",
  "key11": "5VSwXDxJQGegbYd3bz3NNbrwMsD8VkZSUo9YvoBfPHPYqavL4KjCvv78PGHTv1Gfunz3uiLjGd4xtBgPiAY1Zg7o",
  "key12": "3pSDJWAip1BmagYpZDSGEEY9XaoiQwhqGYUTF1YQ7VFQydLEde7MrxMbWwa8FFYPCMm7jbNvVeRnx2evzZvHcsT2",
  "key13": "5rWvWr8uqG7sPFDX1AX2mMfCoxsVMFHRJTrW1nSM86dGwCUJwEtFbtc1DLe4dymD9y5VTBqtdqn5CviRoXnJqJ9z",
  "key14": "3h5tnEUr4fziWA1huP99ic1oVogiugbPGpKuuY4N1xUSJdruwn9Buxk4BUN9aNJt3Jet8p1izjM8D5hchoyGXCjX",
  "key15": "4K8q1zjE491RoWne3KvHrrWzpTNN1UKp9TdNsWvCi9Urkftj797L9czjSYhhadSked5BoeQ2XcAex1LTEJrevFBk",
  "key16": "3NBvzYrGfLe5J6JKGGQMSUryzUtgGtVJ4NzF27iEjJuNBKRjQ2XCHcPwLKXwseb12tjHdpVAknb2TtoJEBKPXFbG",
  "key17": "5r5DETzVnaRPzNRV6tgf7dnpdL9x6Vc2c7Do7miuQ3xadRsR4wyMZb4isPFfDohyf43PEcYVRFKAebhT656v782b",
  "key18": "5VkHJ8jXM69f9P1JWtBT5ZoQezvEQcsikLc2UBqjerKTuFnGpbnQctQMiiPvKRPrjAufyaqbzFsMzRrKHKHcJUtX",
  "key19": "45PA6kYszrfNRwNYc4x9tBPHr5ptjB9yu1gQcS5szqG6L8e8abut7CFriuUgKpTtFHzZri8u6ef6UuNtDvge22Yu",
  "key20": "3anJQX4UK9JAYqDUmPVwQNeQXuCZUHJMa5ri9VJ4uQEkZUPRutYfuY6cX3LeCWNd2tS9RctuLg3UkgrLBu16CCSt",
  "key21": "5cSH7iw7wFGt4D7gu6aWbcXKcCqDTE4Sd8X8hvioai2h1AhES8JEcRSgoi7uN3xdDGky7pz7JrA3oANkxj1B7TJ4",
  "key22": "2ksAkGJuAr2oiWLaFP3R5KUEkBN1Vt2CNd6tNFLm33axYwK8Cva55uN8NnwoQ61qAvG3UHP4HByftCJBAjfqrCAD",
  "key23": "86YnWaivbFRJ83WUYami9roruKmGQff9ERagPr16dY7ZLf7feonzdTLy1wY6cFzrgx3Z6m78XytEAqMkMhE51VJ",
  "key24": "3mEXfx5J6V722PaA3959zknjinaekjbqDDB2nPbBpnqeQpSsZKMxiSdCCRMzAX2Cg7tajzmqUF2ziVDZDkN6Er3C",
  "key25": "46V5JMdiwkG3r4tHRGeXBeuRRSGitToq1yLVctM93oBUQVycGR7xanisw7qpErjBqdUyRkAyNVLuFY13shXfnVmm",
  "key26": "5JM5ApLbGmoU9DV2jkZw6u3zkTaYUc8JNamuY4VcFZ91ge4vHg6ViQwUUboquW3d7iXgjJe2UdzVba6rPRq8rR5Q",
  "key27": "ei3vPK3uNtqxbfP5W8eeW39Qv8Kb5YcPYjx6dJAEa6QLonyPeLknqUBvG9oD5hvK9pCZvLRkermBLFtvXfDEsEu",
  "key28": "2aY5Vd5YgEySjkdgj8kCMupv7iSoDtxCWq7GYTh7oEGC5cpn8expffaR3EHERGetcqUSJ3EPHb2bfhXwjdwSdfAw",
  "key29": "2iqNiV2PxsA9BjmRm7aWnGAAQcstnMMAJCNWhvURg7pAjDJysxmaetdpm4UDLhRFX1fUUwqPRsF5xcQYKXofVqCF",
  "key30": "2LFu2uL2sk2GwE7y6ZmwpMssyFWqGKQysp6ihpinBYFJTqWFACp52msUqmDZpegRbFYv4uiSpPa2nET2d868qVFy",
  "key31": "2dMx8Nj1Mwbm1gZ86z2V2jaMktENMQm3iG9WCKPq8FhQS1ZUtDcVpXzKzr86e7kdwd5QNYd1yrCdeLoy9jPyjM8r",
  "key32": "2uoCr3cwRYurLwWu78BUFTNPRJSNuNKxHz9YNCdBWYiNoi8y7vCS32dY3vvsdxWgpWjEqWJ9CN2cRrLjgRCX5R7L",
  "key33": "2kjDfvNhPCVGz3gW2CPdDsxUDKKvMruswXdogB4BDaUEC9KHo5Fo49t3UBULz8AA5m6XyT1EkRWkZ1nwT7XNs2WA",
  "key34": "vvk9VPhzp9MZ4DXEMJSvHTDjSp9XeRnexvRpuFmBjusGm7oKvSCHgQi9VGiBUos4UsZPAM5A9ooRhEegUVbswr6",
  "key35": "4mXJfYwYH4vpJZ1tvBjVdgD3RCwkxufsuiag8YSjyRrxQLYUsef1sk9dmUp3dtLu7yHp5ESRGRGrkqVtjdAfmpYU",
  "key36": "Bftj1ZihccVu9uQbxYHKi3Zte6BcXg2SFGKziA3KFA97SrMK3Xc1uuJb8BsgsYJB7RSUuueVvgnSwCUp5j1eqXR"
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
