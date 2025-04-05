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
    "okGPpwRyU85Lfg1HNvN2qPFfb2ZKQc9mG4p2i6FH7a8UxRGYfVDkQkTfhPTKUgrof54XLDnzi8aM3V7PciFpdPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TMQPMMmTicYqtr7xEQ9wFHZsQvj7LoUxwMNk1RrLB5fNv6gy9infuHYapaSyTHtXRLtwsnQszg24gDkvgCddvHo",
  "key1": "XbbCbTYGcVNSpfSJgCqFJPuLNDdjvszrwm79M6dTaXr5SVeofb57cdA37436zsACB3fwys6dzdzVt62WeUAwzj6",
  "key2": "3WAMWFj7QWqLn7hjSgEyDySMw7F6X4zHEHSnABYAgywup7WJTt2AGXpNQQkbKTxYSYVfytPGt6nuE3VUmkw5NsZZ",
  "key3": "NjPVpN8xW5LfHi2dNxLGx497qL2uBipJMLM8awRKyMjA8K4YsM9HBwAmHcibEK5CqC6hWfp9mdhTZUcrsuMACYo",
  "key4": "23N5k7yvo9uRZPCTuq1PzCqYpVE5cvitGWj3idwCNTeuW8QfJgehFyXf82EGjQq66C4MgMwjxBNiRZ9nbth3QgdR",
  "key5": "2omwUAH7wDe8xbrdwe4Fmo3zx7WEuWB53QobSDnVAGeCcs1zF1UEQbgVJUx325LEZtntYqPnRTQ3tG12HcWtF5AC",
  "key6": "5cBQdxTwBkdfT54jNtepA9UZMK15Y2qMgajHoDZMikCFaqgKSJxyDfCeeqFuJnp7SxwCyQ81N5kXn9KaxKxy4xws",
  "key7": "5GybWjZ3HzG514AKkEXWdDyJm9XioFLjxeGC9DrLQ8M2TwnhZsDgjQYvmKe5WL8XZamJrhE5AJJerC1nS3G7T4aQ",
  "key8": "sZqrriagsFLi2z8opHNMu4V6s6PJXUwBZdw9x3UpuiSNiuFEStT1rCKNWJ53KuxUkQLecyixou26d3fkwWd1Fhh",
  "key9": "4fAu2szg6fZ8ysMBer87XA5xEn1Z5k3xwGoX67KUz4USe7eM6xbf4SZxcUNi5fR4ccCC3YRghuv3QfuTfj5VnG2G",
  "key10": "3iTHeEUujg5gTyL1g3BsYMXnPHm5NneqjQnXPAh61vEtuo6w3r5rw5mHUmC914Hx98RPs3CVcw4n9qG1hfCsyujn",
  "key11": "48vxvBM1ASCQDtExwSzvGFsNHgp4zSaLWzKdJ3kop6j41cpEUmTj4NDmnZKVfKMoW86XMy8eUPGRuy5PQMr3o8NT",
  "key12": "5KVXYUCbb9buLYsxE5aLnHyoob1ZsTfE1rK1ETjcWFeoMQytPvKLjhp8egrC6J2XCGD1pD1iXBkqFy95EUJE2MFt",
  "key13": "4w4gsvyYygyfEokWb9KYK2zs2QGuHCYsdahxh8zL11gKqSjBr1tyPSvUHaRqyjAqGRA1Gud4YSDar5PQzKm69faH",
  "key14": "5XfHb6AQ2yh1fj1jnvgCcQ3N6hvq9FNCunGYDTiungWHanQ7VoDsoxBozyAXEH3Foa9TszQd6kZy2AVYXHn8R7w3",
  "key15": "2C9Y8vx2Gu38fGMhP4Ndz5fHnzL5ALsa5TGcdD5cvMf9rLBfhv9FBPmXExZ6m4ti4yndyStRc3aiaCSxMFb8byJc",
  "key16": "g9QqWs2VB2Ugqur1K5u9MbLjmmxkeTz24URHMCbwXcD9MMv7VspUii5LvmNN2vAX14EypeLTyAheTMysqRwgtTM",
  "key17": "5DQNfQBUV7HsgijYWEm95Tc8tpSq7xvy2oZrapoZFKuGVoMUzfabnD4Dp7YmV6LBb5SipNpLQjoGvamNa52bzsq4",
  "key18": "nunj3CUrXupZ8vdAoeFQSeLjcRBX6d8bkfUwZdMAHAWWDxAi3teJnsE2XCnYXHP6g9ZxgUsazuSUb8WaD4jBZXZ",
  "key19": "4X3F6eU694rGY54mpLuvW4kP8ok1UWWr1ZAZcgCu2XezNoDKXcLmbxP18Z1nw6SbUH2vvAotUV5LFQF1wBc4hAC9",
  "key20": "tURhoYV98HtQ9WGE2okyrFToUFCTpqhWTLdFsFzJVr25tNQgd3FYvJEPLYevgnk1oQGx2Pj73jjpE2puQRcqcup",
  "key21": "3niwzuNfGzJxhR98ia1dDb8NTm9Cx5S9ALh62Xu6dEiWEQrLhfbEqSGUx2doijXLxg7e6azhpEsmg4bdMeikz15K",
  "key22": "3JRTPJEVH1QNhQNYQv47odDYofqsT5qXEgwxQ64ZuFivyin9gfJGGYrz5VqJHVsCxWo3by2AFS7j2SpyhpZWT3VZ",
  "key23": "3d8aD7xRmqxbeKUe8zzpYHjKunxXLNQvpbCXMcV2MfV2i5xw3F23r7joe4Lob75oEdVSDodwAq2YfT7Bok2Jz3zt",
  "key24": "3TfD7aEkyhwyZAfR6HRenKtDi5UWvfBkE89rYimxDQDhFrqdixXiXHgxSaTXTr6un5Rso5fZpEf1mMoS5o2BtmGj",
  "key25": "4b45zhvE8EX8ML9DRYMjkwv6cCK67mFnVJEqxTqzGpomtEB4XQv3jG5j8CDwS1LVwxDDXUCgRAfnE7YUzy77U5nr",
  "key26": "2kdDJXbHtweqH842dMQe5WjLhBQWe8KbVzK6jzapYWRxe5uUz3p8LDGNbSJRyUt2b6xMPkRK5nv9SbTRAmHMd6AZ",
  "key27": "2H65gPTvKxch62gZpxXEELFbTkgnfjUSqh4jkvKFTNFLZfMCfvspJHFbUwQixv4WjuV2oU95Aq6Ec4bAobBvznPf",
  "key28": "3BozBQC7ZRFtD5BCfmBLAo52fs693j8FLamay4GVxa41YUGfwm8WQRRAGpWKMMvd89nj4wf2LkXTUGv25PoHX4fV",
  "key29": "54RauNfEqfgo3r21PKmnWzKvqXM7KCpSg4BDm2e54AKhapt663ovEMJMJ4MesCcqRstJLh2UrFUrhEZQip1bd5Vz",
  "key30": "2ucD2ohpwHzALbmfUiGUpM56p5z8o1VN7UX9Ksuc771yd1k5MeCrvohtwWrnvNoSQKJzr3pcso2dVTP2eKLtq5LB",
  "key31": "3Zu5mUm5eN3NdEho4ttGpcR5NHhaZw8gNXuf5C2kj5htWLW75zzYpb8imGNx7vV4znEYXunz9WB75nRwzBfyGzBU",
  "key32": "3q7PwFfLy8rwVRcuaYjv7GiUPkPv7FkffwEEeBdjxcZpirNp1s1o9md5M19K3gpwfieDX9HWY7SUaixNEuVMMiJC",
  "key33": "5rDC3zwStpFi4zFJSMxz5S9m3ktD3ZNE1QZG2e3Thye6zP287ns9kFvBzgpJFitjKZ532oFjAERjZsaRm72Kussz",
  "key34": "5P7rCcSMWYKz1WrEirJRuUnMoBS2cmQfReNBoR8j6EFVwoLpT5tm7ccPcpmKFafybgXRwUBErEaAHEq5qvgbhzgw",
  "key35": "237kQ9LtoX6xuJa7WtYX9tV96q33WT1G4EjVgMbEPC2ZB4gmHZ3hvbwhA5VYccH9UuRaEHcYi5suhWZBFox2yKTD"
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
