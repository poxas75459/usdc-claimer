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
    "5uUDEJHjHM3593Z99Fc3QxWAmCA9Bim6Vi5z96MBe2xGf8TSDM6244QXdnxiRJ6xTEa1cKeeWN72VSZwfHcS7RBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KduTdAzhKxKTizogHnSLPsa9XLqRVMkYBYL2dd3RACGVAugF2BhyHHhQv4Read6HjzcHE5bQqDKTaG9xZizx9Ec",
  "key1": "5ooZcFAVVJsQQL6wMDuXSz5oPDxrN3RpdyTNRGe59SyG9xHKm5KsHGg32vg3skSVepgmmRso97Sh3RKRmVK6SkTE",
  "key2": "4nFAEnF915CbapQXDEkFXKRUhx15mrj37DQxbUJL8KVHijfpfSgnYsT87vC44gQaT4GfrVPhtC7sCP9q4ZwsfrT6",
  "key3": "4QaDUoXVsQzJyHbcY9g6AjuoJXqZXmNzZNGh7RwFc7CMAQHwBW2PTezt7SAAtTbAgjvfa6Fsvd2LmZ7EABfhtxhR",
  "key4": "5xDYrEnkj9a6qcxTn9WeG55bpgeGS3G3XzmnksU54f8tAxhg6A3ahdtpeV3X51ngVLRAs9Ga3azrgZA5zF9SpLDv",
  "key5": "3bqFvc1TtRUibKmU5SGNuCdYt7YGzXySSPuDGr2LTs9KHKBZGtCTfKGiVr6XykeenQ2XF7XJH4V6Geg8cmVaUweX",
  "key6": "2me5S4Et9bRiHnvyByF3uAxLwNQAS3JFWNCzC3k2Fmd5aqKMCC34eNEnFjRwXoCjS9jC2hJMfXud8QqWBrYh89Vi",
  "key7": "1jKiQ3MQakg12ZmHsB8qiyhfrTd5UebnewKVNfqtRvmZCr6Mb9RqQfxuqgZWK3xN5Ufxkm5qvBKnFBV6hcjGxPs",
  "key8": "T49z3caiypNJ2yMG2t8f8a6dC64DX6B7enqDuo4MvYqynfjQNoVd5DWasBXUTEunSm6e4NKHptQU3KgJQDH4qWN",
  "key9": "26MKJngkz2A5d9ErqHEkV5c3VzFrqsfCBbTmrw8TKdqXvGLcD3pJaUpjuux5RpUPgyHQNQPjHPaoYwv3N3YAK8c8",
  "key10": "4Xtg5tH4w2QTtBKQyhPs6ENDwQXT3VSRnmdHUqXX9RxjbQTbmqKGrtwrThXmDJpcreQBn9Dxv85ub9bmJYiGk7cs",
  "key11": "i9bXFEbxxgA1G74hcCGstncFtGSoMcRV1gmAsfYfevmTmsKt46NDX5bC1YNU8KvGD92JbHSjqquMtpUyNuPjU21",
  "key12": "33E3mG6HxhB6wgeng2Z3e5NvPUPs1BVCAYmrDCPKXAD3Hb686hNtuYda32USNxeQp4xu9oyvvW3wDmvf1GY9SL9T",
  "key13": "2ymYzPtNvzCAFQQkDXWyPFHmUWG3eMCe4Rr1PN4v1FqeqU6q2BvuCb2jF5M6qrFBpnWpru3TpBpQ8YruPZ8cDjvK",
  "key14": "4STSxPvqBFZGa99MixmCG2Thr3sDxpJvon3h9XMNp27m3Zo9oD8SFZPfqytw7YRyRjw5YvhhGGW1oJPCJ8T5QjfS",
  "key15": "3dmqiGoV8nUtcCMFdjufvcm8GPP1ZSYVZwPoan4ZUuxaQmG9iqoQgqcYh1Ff3E8utb6UKVWywyLxhukxTNobgTm7",
  "key16": "4eNvyz5SjkNtQD7Vco8PPgH8exQG4KA1Znp2xKiXVpYTy2edN7ALaC5mXHBcSpQBBhkNpi6tM7hKrohphdzrjUUm",
  "key17": "2vxVUtsCnTmn126of26LgmtqAfpUN3zepVh3yYD9YTsigWkAf89VncTtM7smSdq4CwZ7pvXoqqwQf9JBsPn3BAEJ",
  "key18": "wsdPGnXAauq3NuoXhRPetD7N9Wo1XF6JhkEzFdNXjSK3ABFeYjG25J2Rr4gDeYgW6PfXD86qNYAk8r7gsMwM9YN",
  "key19": "23FczQyrrADPUL7WupmNSLkf8Tc1rM2QD76dSx7KiFSwM2GzcJHEmryAUCNkztmewbuqpXuBJ3bc9LW44nwgJgbT",
  "key20": "26jQFpp3RqnsCWoRn3hGCgAz9qWM4hSAupsjCup28eGmdxZ36HQUbZ1H7PxUQUeyj3nZqxJEjxyqG6P3wEFnNBpt",
  "key21": "5fy1BzjNwVHsfYMJ5dghxyZFjRAy4SCij9FJuRk1rbaiEB59qGUJR91Wa4gjALeQ56gb2T1R9ZJGQB9PkMttM2Xg",
  "key22": "5qf49VU9RaksX8B1H9M87x8LtAN7hKAeScAUdNnPJ8PJyfx8yzbKa7WLocfEF6aGv2qCZEWFBED8y7QiAweqLQQM",
  "key23": "4gEP6KwguhuSfCkFscDNzCpC8bkUXWwZyXoMrQieJVm48VLJvyDyh9edC8pSAHTUgyuVKYEngWLsBDTaeAh2yjfx",
  "key24": "4EpJv3PQ9BLatJNA7ozdY75jL89mC5aH8nLMyD5w3JFQvH6F1pQmEkghh7iikSddLjTiVTbMVACEQgKL3kjivawQ"
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
