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
    "QFGnb9CNSKVJMBqiWKiF8u6fwQxEHaUgbW3auhZXnmjCU5nEZMrwb52Ze8DbgDcXisgtKBhXaCpCcNpPQ3WLugr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58RAx1387tFE6J2TFXvrCAkLhDvcGGUy3f7zc3gvFSM5W1V47X7DnqUooxij32rxPifGS1qJJprQGUn1VSxPe6g9",
  "key1": "B8X7t81MvUmTxeove1bSHFqHfm353kYrG27Wx6BqfzFPJnQhLjdCqNRa9Bm3RHU7CJnPketRXaiZHYVk2aYQU2f",
  "key2": "5mi5wmggeGPGJm6rcMzJjFRo9iHvUTUS4e3JL3LsvWgwmxARAWkQ8Y5wiPDGQCwYzEhQ2UENZJxyM46PggycotC7",
  "key3": "63tVEB3U6vUoUWTJN1TrTtPjXUUSdukKGSBQBMhCNNeaEMNXtUFDLXn3VvTTRLu2FBzZAQsBYtzPUeynXjZtq96X",
  "key4": "4tC2a5wb7GZfZ3UK2VybveChKSt1rG3dQJ4dqAAjtJ43CCFbTJs7HJda453WyYFMJtgyZ1sDUQPt47RSkV5XEdu6",
  "key5": "3adiYrob1rsKB8hP1vwU4km2PrAn8KKvJ91YSqvpVcVW6oDqCKYE4vLSneJeydjEixU2AsLNXzoJ7LFha5Z3SYMw",
  "key6": "Zdo1pFiSfEzdNb6Wq9nr5DgUDKyuSERWCPCaNLM5JrVWGqunUhmWPm7Xr2VJuNta8NkzpCfgo7Y2AtY6m8bSFNL",
  "key7": "5i5xygEWB65Y89VsaQAhGvdMwYYCLEWS3DUHMNfN65BdX5qGbeJ5vUVgM2pX6bztS5TDxAzKzBujScT8UvJ9FNLb",
  "key8": "5thivsa8PUKayEQFT1FJYuEtWmoLf5PRkX2TWtfGwaj4FqUqDWnhANNRvBeN3kUZnC292WvsqDUb3zLcEw89xwU8",
  "key9": "U3jg9evVDgNKp1kjvDLchgcupFaPE8zi6wPW5FNUXzsmgAX2LXBxHfpAdUV8t28vtwrMV6o1oJwK52ypdvzsE2Y",
  "key10": "4CGEcsKtE4KrnqrEbwNku9N7zbFdGroZRqu84K3Dn4UBnVm57LDVTxpiWjQ22Y5xxP3WZGNAx63G6aMknUokWG83",
  "key11": "2FQuCUKr9Uxk6K4HSfwR24ezsY3dR8wK99jqWXcs8U16ZJH8GPRQJUNi86HEa8s8n5pWPhcVBemJNEBgmm6eqfgP",
  "key12": "4ch24L6coKv5vx9Yd7aAn6vvC6XbWKsjB6Jek2GPBde6xJ7ywENT9YiHxKwLJ8pno7oJbH331JDFyfRacQZMDN1W",
  "key13": "nmQTV6c8pe5J1aLutJCF1zguYbS5MA4tPkfd9hvFRwUVueDsHgPBpFbKeH5XFLNyXNecMu5E5jYQsppxFQZFA8r",
  "key14": "5FvFqX188SAaeCTJNAReuWmTVZeZqZEqPQnxZPko5gio738tE91f6HQv7zm22k4Vr2iLWcqeoDhiSEP3k2ibwvJb",
  "key15": "cZJRKAWkcUssWMo28LXYLCkff5SEYpP2RtptRTZqNTaRiByLxWoSkW5gQny1YX4vwzgtGXAKFSaCe8grQq2bzvQ",
  "key16": "3mTHy8FLEEieLQ2BzaABExHGRkYEEWyrsnShJJwAy3jsoJGCKBa4Smn3nSBsyHwvCjGb1ydMjjbcWiLpcQoJ1N6P",
  "key17": "4Waf4VnSzx6dZfwnvWEwm6ytXqwLYLX1jAZzx2cgVrrVdzzPqor48mfeVswLpzm3fhNNZtjeaNcALtAaHjXtVMNL",
  "key18": "5wi11Wc7hV9HjVbHxfGHvBkLJn9p9tpCwdBtwZi9tG66tVbzLJaoQoNq31cvzpEhk5ixq2LXmbdK415GjKDdE1AR",
  "key19": "4qMApfTuGkPMonBfF8WSPymd7n58NT5LtkRU66MXjyKvuqfKiowsN1chGGZoPtVHZCvYXNiX7an442mcoY2asKfW",
  "key20": "317uqGxkdd1ayyYRUVvr9Py5zoXjaqmQhZ3cmGiLXWjKLotEnEAnz1JRoahpuABoPe7SJfd4QsPXgiLx56Lmkijd",
  "key21": "2UbJN8t9F5cXB8KcHGjg51h8hbXoy9CG2ZBQbrGUqFikz55qRH8KrGkKpxDzYDdxHyrn1Y6U6wdzzkZvfXFJK1gv",
  "key22": "2qXkj64JcAcdBKUuqCdYnJLaqfn7XtbtkgLDZW7X8XdxC7JEiC6ynC54qou7qAAVtBBhHrVAUv742LDAY6vFwsMr",
  "key23": "5ta2jYebCLCzrCPP7s9XvQ4x1iEYgZ7jMFVF4d9ehvJjAy7y3ELmxx66xx9tSqQGy4P9BPngYg1v46TGQj1tCDvV",
  "key24": "49KWKrqvUSbn2qzFjJv41BgBpBAMLJ7B9YeAW82akE6jAxoijrcTqafMe6kT4a4erxBMZUwp3gp3pJ3qCySkRVce",
  "key25": "LdXL1JhF27YNzuZzvcdpkL7zAJqi6DaHbSbW2UB6DcNrL6LKhfADJtEMfQSfzLeoqMHCaMGTEfVsu1fvziRpb31",
  "key26": "hXrHreAKQtmVTgtYYRrkQfpNgwvV2z319cAWdfC8dG74K1KNHMR9wFSm1QZQyQCGwgHQv2AhVPpeQh1ovXSzbX9",
  "key27": "52nswC62F5Pks851DS6Hk3fFqrhd3UPnr5RTFSuCZTp8FJdC3fgN3YWzXxQiy12pspncFUXTViLLEU6MNzNrffrL",
  "key28": "2XD8enRuwN19FCUVWhYk829La9oJhsrDh759oGERcMNQC96xX4LbTVDYu1n3FMqKfxvZ6P26cGSKtKL9MMFD7dEC",
  "key29": "4zxZ1az4K8sRrNRZFJshrmwXJiBPk3Ahu5yBmKSAsYoCC5SNyUKFENL53p961pzCrUcMf9c5aUrbtFKhunD6LhsS",
  "key30": "3RzSYr3X2tzNacKzHzdw7VsJzeNW1ZvimgbnYVeiUGmr2RtGsQsLmsdxxeYEyTYRw8Tm3t17idYuw61w6nT6HZka",
  "key31": "DY9rbfvTg3tANKna4S1G6DxBj54WVYDyqNaVPhV3kZjwNwGarkAZd8jtkLUmp9LzBbfCarbnBBJXwoMi1m9iPzK",
  "key32": "5j2wjmeKgXXqF3a6hya8pyq5Y6XKs1xvUaihXRP8wEKCTB1vEdGQczzU6yrrf52jGsRAJuNjS8oNoqMDhSdsDwnW",
  "key33": "4mWe3ipeEb9e7JWtLJhfqD5mA92hXtUirxu4vfqFvBjQYHdnPDr8gguBj3su3KDD9Rex3soMebpsMhkobBMa3yTR",
  "key34": "5UKQEnLc3zY74H27JTi5R19zD8pbogKr8Vp8pLUVyYup5bmBcbYRE9PDfYW8xWxuFwVQKgdsXZJyxWT4MnzW6vjq"
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
