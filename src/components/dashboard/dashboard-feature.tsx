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
    "44yxupFpBSTzzZuGsZ8FgJXnUAuQDp8PRYeG99p9qGE7rNncTnVZwsUfb21igp7vioGoWkppCP86QJ4LMCrmTLfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ppwmvLHiVoH2jeVSfFENg6Dv72skZeyz7NCpfSRxWEeL4DbMhXrv9WdgYxVPvxyK8PxpP4oWdXQAGarLMX64ne",
  "key1": "4TVhKegvscVLazPz5SYjevF9P9MvXCtBmjxjdSvMpE1zk24ivyWYgttEjfVdSVzKafjryegtRSpHdAgWaXdrGSS",
  "key2": "5G9tX8m5Z4TKtwwpKLoMSoVweG6qFDZmcJp1SvF2RzTNuyN22FB5qzTx4JQzj4CctPGrv9dkXVraa3HBfzTBdyqC",
  "key3": "2naxuBDqBR3T8Uva5vwzgVzTiZEQqYyPUKSRe1FS2M4Tcan89VEaJV4DzFrxJTv8u3NHtr3GJFbYfxNr5Yc7txMx",
  "key4": "wPYoJt628bYdL7jUkQUr7TJwHsWK7fabAZDjth8RiY6fVyBvrmrfk5ng9Vc3vrc7e3cKBbvkgKmdJhN8QvYjGsk",
  "key5": "N19yUwowtrw46ov9HYWaHxo56wm7oqBz57vp5mxq2gE8HQ9SEa7fdz1UxxHUhw6q7rcaq5XGsruyyj8fCEBsaho",
  "key6": "4y5jGRvqi8bk3zaV5o7rXvsFG1b9CW316N1KFc3jSV4bYSXMou16C6MyLmG6UihqMgXY8wJEwD4zoXFfi2ijRGKB",
  "key7": "44KKsUxtKveV4dmwDWggKFs2PSMbq2NRuEZhLKHmsfBRdtRKPXSFhSkBFph5xUTADrnJUgHs4aVh4dhXgAoCxkQV",
  "key8": "59doQ2Wa9FTidCZW4rFwzxsNNFN2FVknUfrTLihCuBdbfHcrTKvj6ERtrk7xXNJwq4FHzgspscfta7adeSjGmRiS",
  "key9": "32P5Tto2E3yD3wSwbv7oMejLX8ug4Amv6qnyTq9mZa58t9UdYJRyfWrMjsQdc9m6ugDF8WQhVdUU8xqRjq9ST21G",
  "key10": "44NG9Nd5u1ibDy7y1g8QanzFzY8fnQgpnvgypUQKJUfQw4gDtpKDeR87UTyQkWFVv6X8RCPhmZ9Uz2FakvxgUaE",
  "key11": "45WA995T9keq6oJxgE7hzipLdETppnRS6Srx9TFEyT48n6UY7g5zn7apyCUssZudkXoemkdDC2heH6u9oogeSsKA",
  "key12": "3VLxhmdMXxQuSHhBVPKR9ngcqpySj8duCMG2ba9MKnU7ZbXgiMeX72pY47XUnsLhzty7kUgi5WRroTJGJgXNQ8q9",
  "key13": "3cyWcUw4JEzmiCgTaNUKWUbmqWXEDAQhqwuFHJsS84ayHN9nrebisitWewHewg2od1eWnPacgA6h5jseEpxuZtHs",
  "key14": "3UJWgxGi4QDvNAMEQH1EF2oLLetiYV9hr4GprxMMeKQoF6Np73FEuj2QiyUtmxuajUP2mEY6UuCciYEgck27YZ8C",
  "key15": "3KSmLRWNvW35dx6T4DyjzpXoQDipmmCXKTjgAyELHsdcnUBKLQRs1XFr6GjPiiUJzNNtQozRMFwfckSKvhh8UvwB",
  "key16": "5btD4shiNT4s8dmqSkgB58yonfB9mFGFk6kAcQFtYZk9E4TUUmMt5sRFE5qbNC7fq2zEcbJ4w2rcp28A9jCHEBfv",
  "key17": "4NjxDSKSr6ZkgDy4uRgbAqbkUXjUPdaHuFDo1TYgh6b34PbfbMPPHubDYYV4RiqDgmukzixxdgCsxiuX31Y2UsCy",
  "key18": "cLNvaHk84kXSexdNCrhtZfvcrazHconQp5CccN4emXyhBy8p4rZ92CFeVCV3V5vYQzmocdzqTBmYhJf3QxvHotn",
  "key19": "41wa5DAedgonxsv8qbhVQCjuZLu6q2KccApH7hDkC8bgQsHdwuxUomF5Uy2F25bWzCgh1G5FobMuPxwDzS7yab7X",
  "key20": "2j7XBVAunJtxRGEGQB8HJ5MtipsjHmGhwQYzFaT2P2Q3UZKdouvFUXzcBTSTBYAcyrDqFWFgHKsC6YfMgWVJnGw6",
  "key21": "525iExV5gBAS8qdL27351DwcAcRhmaNsCiNuLQSEirZ64uecgNZryfV9NPxkLHvF1AYLnqbvVL2rbwnGYRpCPgDB",
  "key22": "3sVWFfr8nrspMpxBvtaTZcJ8HgYWcGEVHiaR9fuPUhS7siiJRScZVzEkS79xSfyGzweG2ZXYSwYzDbVw3kcPbuPV",
  "key23": "4MYXh9KYg9p3gQ58yzZ8u4HRGAVghwEp5mmJPWYMm9wqaUDSgMJeuYTeAgCiA3q41ZkvbKTBrCme9LxSXgkgu7vo",
  "key24": "4HmjoweQnPETsLVhJRxWyZ2aKKKJkgN6ZQcmvZ1Wi9Hz5BUzojjjSnHEQEp42z9GWn6QiwXYuecZPDcV7sXYNsy5",
  "key25": "26rG1R3a1k5dH3EmSp9T6PpyszxtF1BxPGa2FKSa59VnqB2AgcK2a6b9fTsJaVAWtu3QBvmNzYhHopoq19jg3ore",
  "key26": "3Hd3gCJh4XBMk4g1gpVnPPFtJ5mh9QKgLhrudNJP1r7fLtMZpHxoDSbQ9wBnUTaHn33ZFc685bAuiiCSibtKJtdd",
  "key27": "5GSdoG3xw4v2pBwwwgpp8nVE2b33L1dXjGytRCWeSG8xEpRciLMvU8MfsK27oKNQG2P312Y4ZFJ3Eq5otFy8DVcY",
  "key28": "4n5Q5gEorRERQD671DmVMDmDec8jepzR8XTCJUWz9rVLxXQJxG2tE9aYVSvMjVCC81QHrXoHTbpYLFxCkiihK8iG",
  "key29": "3P3dPr6DjSc3LUZcnJPodHLtXZ3FV3rFGDkDdMRmNkKAsS5md1itqowYHjkVTpKe6V4tD9vwWByWC7ym8XobcS3C",
  "key30": "4UqqHaYwd3C4KVnYzdYb1zosVwhx8Et8vo1cHPb8hEiqde3kNDGCmqNKTafvjJmDU5RuJXpjLUfRwcVAa3L8KFna",
  "key31": "2P4cJwTqdcR1UUWPnnZgVs91ERvDkYjZE8AGm6kQvXL37vWYHdNhRE9Bd9chHyp3xYAom9Jc8yG8G2BfcTBNcx1u",
  "key32": "4qq7q9WcDRqGcrpBEaehMeViS7mqBqzU33mZNbA5shbBbkHD3jAssqmwVcTQFYm3YiFq52rKCNWBxAtfGVWPrWpq",
  "key33": "5PMrnHgYJmRz6Px8Sags2tz4AHpwWsY5DSarEZ8D5igLLiiVTQgD8NZYR7ffXR6f7Af654RgCqt9eEaWQmuhTHuw",
  "key34": "3ZjgWb7H61vbbfoBa3jUSkvNgeaUvWhTUoSmiNk1KMTpGdW2kSQoa3vguxQPJV5gQzEmxeVeweTqxB4pXRK78R3N",
  "key35": "4dtvaphk28DL8fgiACXkLMgqACsbkpjX6UfaBhNxgw4QkgPcUMd1vGKnH8cjyjPK5jTRGqpXTUiv4mUWY4zFeNQR",
  "key36": "8onH3q1gBfsb5EMadfSCfUARQGH9D3ga8NUxgrx7sLYMqmUadyABr9h9GfvqHXM5dJfRdzsbSnGMBd217VGJnk9",
  "key37": "5r5A6yo5uuXs2uHE3FVgahNq5hpUhfucwRpCbN5iZkGgcbscxqZYUwARbJp61KTdGG1rt1sCejJ7cQ9n6Hsf6Mg2",
  "key38": "5TKGuSmemQXtJrNMwA44PgcxKHH82vxo79TqfHaxKMY4t2cWfBVhtBPUqy251SGEW7dqdevN3ahnKQdZ7hmXrK7y"
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
