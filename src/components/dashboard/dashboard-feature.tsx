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
    "3XCAAxPitnRCpVmyKXwuQaiKRoScMQ5Hpxd81X9MCE6N7au1S4ZZfFa9JyhDrDZRBpCrcKaWJBzYNZLMxYh3rFzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qC6nKppsCSpyAzvYF4Bx6z8fRmcYYkwTtZzkYJWa33v2NzN1pjWGdqd4vGVyyUGUGsD6oEEvGt3rt7nf9tPqPg8",
  "key1": "GHPzhKmLDjgDfsPAZZxY1mZPkum9PXX1K6eJdB9nyPPTgHsfvsNZ21c1Yd6k6tbEP6Na7TJ2n9YaxapQbcByEf2",
  "key2": "2xJyYQbWAGW2NuH1JuTwwt6zVC816uU8XKHe2TguhVo3KmSpVe6KPFi1HrkLPpbaF1T6Uex1XNUy6Yyfijm3XV7S",
  "key3": "52nrQGqmZp8z7Qh2DYBbLoUR1dDuyWUYjpoBmCcmyNVJFUPVXrgwNX4PTVaVXAFUn6DjntedzDGeKiYSHjcZjRs2",
  "key4": "5nQMtj6N71oU41PNtkpLARkTnas8Pctkxdoog1Xy9Pdqp7ZfnB7eJEXWq8j4CAHXYHrtAMLEuFLxgf2fiYEVgXWW",
  "key5": "3G3ddupUEcNARWE7qwXKGuG5CacAczLDGzvqzyJ7kKxETYAPxQnkxvEoFaMx34UfysXL7MPjkLR6FXvnSLgWXyg4",
  "key6": "2Qyv8TJoqYfqRQkFCrzUK6eoqhBmCkJGYjNbGmZWDnZR8hHUTPfGdByQ3g4bXxXXbVu3kF29ezcSPSmqeNYM6MLd",
  "key7": "3xmHXm2nVJ6FBWoQezYZDv9KXaXyWZ7sxCLZaFb7ZjiBDisN81yuRb5oJoYY8cQM1C5ZMfZHsxG4bTMEssSbrTje",
  "key8": "2uPm9oZhWHTwW9ayxuoPbzADWXk6etbDYgRiH68gASEYXxNV89aW2NBFswLdLeKu3267sgLD4GfdNYchCmecRxjy",
  "key9": "3rB7Ea8ydmDCo9EvMoUEdQYbU8hPWfm9iH4TJJUd9Jo9XmVtssrksj3jb32PaNtPVJVDwumkxSEpDGT3gwsVbS9T",
  "key10": "LL6LBC3B5SAdbGsZRdZSnRWjNAJhFEivrYJjqrM8PTmnALJySq2iwgx2DBwqaHnGmqHznZWM6AxWbbjoJ3dR7vS",
  "key11": "2mhXwaKcGoqxfsBPPDLhVCSdDk5LSaw5ZuBEzThbwZr46L7y4Y9z6nL49ZRDPy2MYHHbsx3qf9ps98edhB3RcXWB",
  "key12": "3g74QtrvTNhTsUD8RH138ZgcBWHUCztpcV3cHceM5qc29xByRMxY21zL9n8cLE1ksgZ1Wkp4D9p9AaD7eeuDSDrK",
  "key13": "5Jytw8Ckb7635xV1aSAatnwYbtsVhpwD4BPadueMTAJHesJQWbxfGXhYJrSHUprcctza4JnTnCiCkLicvSQE29KL",
  "key14": "4zhGKxKGwsVY7qVhEP3PX5keXpE5bH113ryrG5EGyZvTgJaoRA3QXNii5QpQJ1nQeqB9pc6Rtyxcs4VWkfCNV5PH",
  "key15": "4189ifxTubbvP1Aymq2fEhAXU9tAYbmZ8wCHej3v1Kg7BeAKqgYWmqerA5LDNsNqRcBctRUqdMQjjZ4Q3FHhDNkM",
  "key16": "4KuRhsn4sG5SzcGQwAEyYY86vggqhcxCEMcWx74A7DvpRqQc3jfNBzbrpeD7dBWQpobGeMEgp8kMV1thyWEPR6AF",
  "key17": "2EzR5rvRo62WNoLz4sr7GtPvxpffQNxeXsgCpAZaqQiwrPzEbYVzvWjixic9zKow6odNiR4P4TjcZrNK8gLsSM2Y",
  "key18": "5t8ZZ4E7XErDJP7KfT21mQabtjfCWeYgSefEwuxVQtRRXsJ9ybP86hiRfPoh3Y8LAFEksTQ2LhoJsEpi4tcwmfLh",
  "key19": "2yrVU3YLyrLAYJtTJGPQTi8BmpkLFwjE26iJj8xRrvXv5zAwAHuTnKfgM7UB3cf44iJ3G85ai6xsPqhdxgZKiRUi",
  "key20": "3exSu1W1f8hjD9HrM8kKkdiYkUfLNKmKuug15rqz7huq4nrAsEs92dkRYhtXaHZckfPqiNqMvKZ74H9UzEpe2bA3",
  "key21": "2jXUiRkSQBkgvTrXLKyh2dDqQbA3rJn4CCUq8fMQ6sU379FcnUrhPFo9Kd9vGMznqPZkqyXsFS7SE2kYjDRy1BhG",
  "key22": "3zhfRXcH1UpSxtsP4nBLaF7uGfykeKJgFnbmqMFPTeeJ9LiUEyxAtMQSsX3d5Tgrgw1qketGsWFgL7ztfPhAH5MB",
  "key23": "5Y4QRFR9LKuXezivSvb2xbyfMfwSgnjBk4GosK9CSabWLWZ9m4ucAJzuXnMX8SDB3R7bfMbA4khNCgTMkkzHAK9n",
  "key24": "Z8JSLaSVHAxhQZq4hKVYQsRJdTDsAJXwwzftoKaeTPhR6xdQtdSkGsiey3YUHuuhehTmBSZDPFQGRj9isoUzSud",
  "key25": "2BjvWQP9G9MvK8A7pgsz2V7oRD13yG6RbYYYFu1rRq2h3ieqFxiv3VVNphMHgyzPrb7mvHvtyQZPDEKHR2DUrsLB",
  "key26": "2JNcuMRvW39gi4kEbghfpJKJR3xRnU1r4NqqsxQNHM5iKBuE2XnNuz9GKDb1WFLe586wAjb5F2fcyEcJkx7uUAAU",
  "key27": "3magze8JgoSin84zqiVY5WfZsGjJqQCGdYjWAPBSUM6BkfFpKxbZJzvuGKeDA14BAsozeE27NU8PfsDUqPwLpGby",
  "key28": "2gC6DT14itW44BXUcwNrvPKQXPGHS4mzSDoZ8osZFcApAAQgSpAPScWGTpEBkgrPg8zzGqhwo2prkAXH2CRYXPNK",
  "key29": "3uB7KERvJHWNCJAGzAPYwZxGqRRm7j57c2oRek1E8WMH4aPZMF4as779p277sKixrMKtq8x7F89XwzBZkTLoZQmb",
  "key30": "4ZK4LgQrk94rxz7iuPaedTUGB8m2Cn2Kyt2wQudcKq9p26h7VkVa6CCNLi8KirfjtKJUTNHJCeXHDm4yMCTqTdHZ",
  "key31": "3hvBq6Ha66xNULy9PVcCp9jyzP1Be7iSLmrrQq9GaMwwMcQA8h6S4Zghz6eYEtuyDhFYDGpuuALAKhFdDjMqfugJ",
  "key32": "5JEKPWKdV7GNjBTS3zVQ29TchA7TtbTtzu79PXB5NHNKvszLxVtPeUg1a2nNd85hQjoEJpynzjLoQjtB8ZEob3o1",
  "key33": "4MpzY2aBjGUyqeKKU4iscJATrFtTqDP9wb4A89WEZco2S2aAPnmWRzEBiboCpXj3j3K2u1YWaLgNyDmsMY6Rr7wB"
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
