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
    "5foqX1wt7C6WfF7DtYQK5xv989a1ztgwhK9RWQRwrgfnfxuQzqQ2eAy91jGCqtkMNHsF36gHCWnSyz1QcfTNG9sP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HEw5xJUz4FSwxjPbMsCgDoWEo9jrdHoCUD3mrYN2dXFiBA1VrKVSgURhS6GKe592osGfUAsWic4NHF7r3r59K3i",
  "key1": "554cHxk82um1oxxFfj3KMHDoNE6eMz9nVLRpMUFDct8huJonnKfyk8aYie7YX5ycvasEYhJPXdcsdCM38GWi3kNv",
  "key2": "4NDYDYGB1xxzVoBNu9FB6p98zxGRgYpN9ywfX57puztsskVYVECQvvDpdyXdevasRGMCQZmja49MD2Pq5GTfdWr4",
  "key3": "5ugYBG6MyUVMhUHDwQaDwUZCkx35FU3asSw4RQ3eUNHm9iczA75Jqd8VKjaRP9qVzHvF6LmVM1eABJgqRaM9Lg5Z",
  "key4": "3heMBbELs5w9kMu13HYwJykXoV62k6XEygRn8bspDYkgZ3a7goVHqoo9Aq5PtzfjMATHcfYoftNZqwhFcqLpttRc",
  "key5": "5emmYKbZnSgBsDpgmCg1cZL8HoVjuQhHN6au8ERnmWXRgE3eswLMjUKwyqvHobHGWfyDC3dnDjYUzquHQPejCkp1",
  "key6": "29v3rYST99dxzjha72bsTsAqs53964YSqWaxZkjdeR8RK87TnZhi6bvjuvft4j2Zjj7LEJCU3TsShW5AcG9gSgn3",
  "key7": "Tuq8DRKkYNd68DksoMmfw7eUhZZWQGBae35SzDRPJsqU5oGWYuFhK59vmBQdiWtBCahMoPbxguFJT4nshXMpmHs",
  "key8": "2qznqKBDRnZCfrrAC6vEMNbaDj27MK6FHopeFgQEBMA57sYoUux51aUz269jBT7RUjqv4eqSH9JVvv1z2FYkXm1w",
  "key9": "5FJyTJ1BYXTvDB6BpLzB7B4gUP1etwvkdvU38sV4NSnnPphiAqezadYZmYorqnoEDdq4aj8vDhRfcL9bBuXoeU97",
  "key10": "4qmDsJvrQqmiaFJuXPDkR1FS4MqLf8UAPHZ3sNGbh8RThUVUWRRBLhwhuZiDqDcmj1fX2FVoQEXPCMKciG33KWHX",
  "key11": "3xmq2uhEwVeruZH2b7YYWohsbWRUG2XcWGPrw4u1Kza5dvKxA3uyahmttdv8BLqRherwnKan4ZMT6wabJYmZPSzE",
  "key12": "5UdJ9ZD4rNJTW4RJ8TYkNAQNo2McSyDWSu1oJ8ZR5ZwTbfkdPYgbzqWQssDgfF1nnjGeM5e8oJQdonzJzGLeYQWD",
  "key13": "4Gd1krNu113RSJ6vUmR2YB58JohNN92ioaMXhrrdsE3b9jKGg71S3BexYoNXKDCdL9KZvv2ZbH1REUkVD6yYgCUF",
  "key14": "616cU9jSgsvLsf2nzu2tw9cBpLYxBGhiEioGdU52GNr1xhixEUta5ucFgGZhq6kpPDUBQBTDR3TzgXP5GrLEwfqy",
  "key15": "Zq7tzFyXNTzdNyFQwaLCAYrTdGBvngeqC4yEY8GjxWpU5fyyaSFepdpbaqcE9Veztz9EyoEW6J6SfG3dKD59NAq",
  "key16": "3feXcoQnFpqJ8iyv24VXKp8Cvoy1sAdmgbxapDPe5B6ihnBE1E5ZfmtTRYKoV2pjqufdDwfLF5oWCedSN9MRUpQd",
  "key17": "4RtyEWjVJGwrdZcLNfCsJfXntBQAqViP5nD56kCU4mZijM4M3Tn4N29noGg8iaYoEehC1caaqhZi9YiEsGQjgK4S",
  "key18": "MjuV5v86DCiXg6bY1Vhoa4meNXymytGwXEY2D7vt7TkexocLufW9a2G1JnrY1EVtM2hBe8JuEwfbYHKDM8H5ebi",
  "key19": "4GX3Vp36eqYnecngDusMyxbDK5M5HKz6GX7HStkGKrhMB3zFRbDSZdvECPiK4kQaLMAEDXx6wbCuvsQAzUB6nsCu",
  "key20": "MYHwsSqDYPwS1uH9Cjg5x5Cse4bvhF7SALaqNXHUNkBP3SWNmGqzKymnVNMuAphnP25G6mb2MtYWgWBQHNHaxc2",
  "key21": "4PwK8L1tLjcdmE9D4kb9BAsoYRiqzRYpaV83piSzd8L8pDHANNfngsMpkte1xVNgRs8a1zie34Gsh25FL3GDAogi",
  "key22": "3Vc1WueSP2xSNHMH3JiMHurTeJtiwoUFQCtbq5mCSFQ1zWXYvvtSSfVLsSb7cQJeLv2WE5m9gsHxLTfsgYU5BaMc",
  "key23": "29pDkvnGasQEpfsoMiWQpxFbixv7mwNc6VCrvytzrTtcWJtmLqYcwMAkwvGKj5jXdyZ2ijxxCWo9pL3Ko4nXfHLc",
  "key24": "3UVf4AGKxaHNpJn3vrVmFG34RfkE2UV1wGz7pXEmtGfTy1xPAQRwoPuMr99XHhjQQTMLCXc7AJNJauyp5inD2i3K",
  "key25": "5bhQockb4WPRkPPuPzxe1tP5fj2m8nQtzvcgtL3xm4YJYn7nvLEELs9cPo1dG3wGmRra6jqrLRprCB2eSDw1CChu",
  "key26": "4meKwWsTa2CzdsxcaD8721UNs3xHtAY1H35LvKE96AbTgga6tg4tx8yx3VW45XcJhSfGGAfjA31sJeTsMK1BCtr8",
  "key27": "2m95r7nDyAsKxR5aPtNUu56d997CateA5JinXwgxGpR7JRjt8Lps5P5TdwRW3h166qJNdVpRNAYoJbp1Er8PpcJp",
  "key28": "5rJC1NwVPGYXQhpdZEZWD2wG8jbwHLju428jyDMr7A2Cg9QctcZL4j4zaDp3H4aMK6hDv3TDb37T9HjpnxvV2poP",
  "key29": "2BA9EA2MKUcK8gbitF4LJUZk7zzFipBaDtsHxUvbwwaHHzwtnL14eiHfoUJ6Q5oCfJcDypf8JFrVQMVrZftJQwFv",
  "key30": "5jTMWP8FHtTPDq6MPctLWJMxo9KvuFCrzztvzNikazQTqFNgMQLKrWVQjBkaHXdtPeuKKxJ1KzPswEqsEjuG6zU3",
  "key31": "2F8q6HdAAB6rFseU7t7Ghg2wbDaB53Zc3AeF8EbUozcMXRtJmEuCnLM6oDhUtUG4R5UNmMApwmgphLRYdgjw6AG8",
  "key32": "4fbcN8URWcLbyvBhxLSkxmDuGNgTKBiQyg5Z5E4EmNp2qAvJC9DuD6AvVryYr3hK61uVayFDbY1dt6BY2fRxFgcy",
  "key33": "46mxnaR1XkwDwax1saeU7wRzuszCWQ6YpMuPGyKCxoUp4ZJ5NyTdDo33XD2xxmsNBtRRNjUaL4a7EbXAnRpYSmNR",
  "key34": "4oePyesicorJN8YiFHC1GSXBLsLQhExuMitc1mimBcjEscm6gvLeBm5DfmdrnSRBsvZpKYKDJJPqpwJFAVJJoTC5"
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
