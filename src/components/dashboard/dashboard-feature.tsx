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
    "5n1c2aF4UCeB6RQDU1MJJj8aTBx144wnmbe1T6HvWQAgYfKB8H859Wu69CUwRqrs6dMvVzdJdBVj8mcGenqT2atE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZPhKFXNyUQ1PmSiji7LRnLncy2Wi5DxiY6KAbAwW7ViQLu7iXsdc7mihxbxYTz5uxNmMnLjcnGTHbVidGntih11",
  "key1": "62L5niWRpZdGyDhyiNEXH73msRTAW7zguQhB2H4aYUMUfAz8pkk3JLpGApMAQeV6Zj1iEvkU5LfpNBB2wvLGHcdZ",
  "key2": "5mBrzw5YUznhHf9wQFfP5LfW5Hm7nNw4PW5hnr2AX1Q8FLhJnnXgtc4YNosGuvTzekhMx4rLFtiDfneUXAvbDzMU",
  "key3": "2uq7u2j4JrDqUsa8e23h7Ho8czRoVBvahsDxDpVrZFHLx9u38xrDpMUivqpZxNxSXSub1QKfMBw3tGBozq6QY1d5",
  "key4": "4X7ekFnhNGjAx17LmFE5ugosMH6XpvwWc2qDxYntAmz48LFTUFWYDopGXVNCi19PYyKRJJchjHRbvMscvimCAtad",
  "key5": "4Jwzpfqdvb624KWD4jPYgB4ZqQhQ52j9KnskEtLQLEWV7Gf5GJMJJPod4uPzMoPK5LNaFUoZQWHWgArRa5UmDtf7",
  "key6": "J7RkHNSzBQhMBdSrdgxBHYanCSpbhs927Ek2Htr8zkNRK6NXdpvydGEthg8RTr4NpG38kAqrcFQJNwEDVe8n5uZ",
  "key7": "2Em1D6moaRAihEJhpau4BHffWYY9peMKCVRum4Nydg9NrPipHUwCG6Z6ChTnFq8t1ZDkZVfnVWoJdcsYmTgLdupa",
  "key8": "4tcGeYuM7AtSgzy6PGcpsJWTV9JYn5bsQEWCdBeKvwrDJ6F4oxFQsb7pqVbKUzLinYc3SyGJscHV7jr3nnrMuhBv",
  "key9": "3rjyMfghtp54U48o42wbxocqTaVWcxf1KAKFFyoBvNqkPopZDTMXxUxhykMTpEfpTa2NEYtEGZxmzJyxyQBUwdBt",
  "key10": "2ZvBS5dA1kbzM14DR31xpREdSWgkkBh7dUTCp8hSyKYnyHSZVubtA3ZTxLKKz86e4245vK1m9x5QgNUJffvnUkxW",
  "key11": "LsNsSaK8347Nd4Nya4VADBtLHG1T1huwBsoGstdqkEoLF9QoQcjdZ3qkAknquRDdfjQs8kLY4Deo3ADbxx3Hck2",
  "key12": "5VsijJr8CazbQ1Uz8J3dj6AiHmjMNKiDkttup1knFB6M4ALYnHNbPePdyMw9sq4vghjthWrtYYhRvFZc83x5ozyr",
  "key13": "5rRfdvw2MJmDy6qfvmbGf7DyjqAmGdp6uuEB7wpKTs5rwqgQMSNTQHX2RpXCtBuqSSJaBp69EkrtneKtAnUa9wXA",
  "key14": "5jq2bEcvZVzPDrWZoXzszRsxQ9o8bkEKf84uXdZctNNaALTt3YqRigg1brSg56DCyPPL5CeUXArQNoFbuDvg6rf4",
  "key15": "3iNs9Qe3XxCMKHBRQs6SsioaxV5npkPbTi3P1ro9rB5zVQLzDcsqTyEhdt85fEXMS3i4kUC9piGxnb8fxuuJRsk8",
  "key16": "3aa7WoorMLWhziaFy6QJcS241WocvSSnKTDZNj5mVXojsjTCDLMGvEwvpaDfVMSVQgGPZd1kJYTvCRa4XHrj8HGA",
  "key17": "31v1yKeA2ENMQTvpj9ne5F4gVV89J4rMA9DJvnzD9CdADsz58PzWzhL8bJ6sesnUmWigaH7xuygXLY5ExYdHLx8s",
  "key18": "4ycgdeQgQwDcjb3vvc1SMYPTgNJVL4QJgk8oytVcS7goMyaCRuWsEhXKoeMJBjb8aapc5cyU39dedaVmPiu2gc6z",
  "key19": "4owKKUgRAy5MtJ7xesUK12up4RxJeDUy3ug3AJpyjp2AaviV6PriuodYzFWQR3USN33NCshbvt2XjPaqwnwfabeg",
  "key20": "63FmaUeHda2odP3S3LHsSTGgguannRz6J9EUz85z7eHtBHYatMJE8oAmCisVrBb2UhaNum4h5JbcA3kEggXrYYbB",
  "key21": "hjmS4YMbKwMJiRiLuZNMr6SyDSnDWmJMxkCFA9wEG2fe6GhcY81Bdi9XXaq7pNromrHmH1LG2bSxS2rUrhg2bA7",
  "key22": "4XCJ3R8uJgwYQtbKcq6XjprbJiarNQmbQr5t2CUHDz5YiUBQH7Ci2UBMsetJwgMeidr699wg64FuhZrauM1DmsNh",
  "key23": "MEFK4HMmhCpNgSx4X4h4kvTgXNR1H4pGBZtQa4X6AsGcBUaLms2FMNnLC8Q5Jt6DH4hVF3qS81mdn1VpJ9QeEVZ",
  "key24": "58rENnDCuy2Cq2mpa5cyvgmJsXftyjLFzHwh6tBRDnybBFwUUsoVBkULHDS1yQ2uz1h8DVBv6azrBziBRWnwbSKL",
  "key25": "4x27V4chDqbiYfTPkJEEWQDCdUTbpjAE2nK7xjfisMVGp1KE6pNYv9SLtDw6V3cEzpDmW4kWHdUrWJCgo9b2xRt4",
  "key26": "3gBzt4BmdGw24AvyspfxA9AhkaJTa1cgYKGvzUoJ8hniYPs62wsitzjKsFJW1jePaV8b19mNdCrr7FGw76sRYJAm",
  "key27": "38dCyZxXacQVnbdkGrpUR3q4kqwNKAKbjsLzAEiH4N4CQXu3uXUbnTR9v7mEQhYkvX8iaePJpCQdREN8MaQuXRox"
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
