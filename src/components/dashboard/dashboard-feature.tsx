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
    "2JnAcSQTDyycKLuWiLhUGgAinbLTk78mne6SKisWBJcbncUvepiT2nkFTzV6DuYCgQ1vCSCufPSPdRtbs5sk7oU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46eEz6w69Hp6zUwc6vwniPKE6YJsEHNdxA16AtJwoLFpHAPMhXeZDwJEzwSJkiAoSjCZh3nfUV63JQTpvA8apgn2",
  "key1": "43e7gB7wDDhVXRHoAnDBBKHapgbbAwrDHVxHP1ZNZVHRuQGi42wveVD7f7YSkvRxQsPZEbuX6c8U6NFVr8TtZ3Qu",
  "key2": "2QoqSZUR1HANieHAEEzX84vnFGBSMRkt7NNCrFF3hzxYnUCz7982NKCMEZsncYwXpTQX8gHvoAFGsw2rKTRcyKBw",
  "key3": "5qw3DDc79REnjAi4TJDKXZL56Z1MqbR5LYDRG236YzYHodS9bG7K6wj3MKB9VazAc1VgA8oAgBjhhC8FKMAs5KRk",
  "key4": "5aeP3zSqPEwNgx4CrZxKeptVbakoJtHmVCCmKcWr5tVyFQCMZ6PPQQeRsVTYBNwgQ6JSHY1SGLti952EULyD7ip1",
  "key5": "Tqqc9NBi1EePNMkKswCMkwS2cepjQ1bwx1KWuQAELZpCj97AdYnrSXRproxZrcRLR3SZddwFS85pdL6LLQaLP3S",
  "key6": "3YsGrGu4tR4ZR947XaVUTuZuNhsCkKAH8aobTQTGy51rjGQWnX4F6zF3miLYbpMwSBZZuoU4518T4oKY2j93CAif",
  "key7": "5NNEvWYwWjQwEMLdZzEXGrhzyEjZqWuvT6FDY7H4wbyuuJBB8eaQJGA4XJMC9oEA4vuufefFAai4ae8w8fSjEAEx",
  "key8": "4ABdRUNGEbrZnDd9nzvVYLqj7jLPVEVrd4DejJnHc6xefFs2EThsooEmdhRgoaYSb3ijhBo4gLYZ9pspqatit7Zz",
  "key9": "5a2RrJMeZ1RRYfAyzSzsa7yt1g48QfkNvPUxuJts4kbMaG6Uuy38bb5LjwkRKw2yx9jirVFt7bQbPhwb8myXwqmx",
  "key10": "5iutT3cUHfn6P115XeNTy1f6JJwTVD7MGDMFyVPTVgE5yHkGf833sPacEKXxW9JeUxdZbevFxFd8zhj3QpuTUbqK",
  "key11": "3qgwMTQcckNUsS4UicpW42MyETeWUiuvpyaBTG5WXSMQ8TPXSjuhKLSzW1tKfbYnBpjAcKq1u7V4wdE6NEci4mMK",
  "key12": "5Cmqaj4CmWxgBMdnU6xPyttMSXrzK7U4UP71PSWxJfRuuNmDfZxF9VJuX3FgG38g4PG6EnG4WuGi829quzwMyQro",
  "key13": "4ZAoEqBe5LW6gfPhY28amQmtb6w1W7gjozLFWjCGvexGSDXT4V5ovBwUsARHRQf3XsvYXx6ZEHWN4YLVjKzNLRT6",
  "key14": "54QPJ5wgD26yZdXdXxw7NTSsfJvdn8Et9G8J4GZ4k2YyuVAhsFcb447JgAbwGuFJ5FYTzgG2k8784rxH9Ywe8JnM",
  "key15": "iuzahqjQW1Yz292KXYP6HoSY8gbch3Q1PqisJJfWzn5u3wzMic6aETny9dCmwSPN6Ed2cR14RQeDtPNzhGDU6b3",
  "key16": "4TaPALct5vnEuTup4mWZMGW89RKn9VbEWTZJD4FRhZvdkZ2qkGGivzxYKzVnBQoFnfuP9hpRUWEgrGgAYRv9MtUQ",
  "key17": "41m6yR4tqL7FAfdj8S4EPgifvAz1qimC1ow3deJ8WmwxDE8DTaiRzAYA9UL6uHK2UnRQfHyAMiMxLZQHAxS8Wfuz",
  "key18": "3BUw4vo17xs4xjLreuF9EDNYcZNeCmnP4Y27zjGN3fhtyZKpXpLBMBnShjuoYvQ1tMeGMDvxU5HTgVyVSUTYNCRJ",
  "key19": "YoEvBaG9SYJ7U91G2BfA6X6hWTSAJHkdV2aPuWdBy9fatnfhuh2QwwEw9jxf3FVxExrzBQNWXMWZm5BbZkJ8gE5",
  "key20": "3zy6Lm5vnctjFeRoTvG9t76F6W4CUzEGtsQSDijdzPaJifG5U9ZtYYseYzZuRA1adRFA2SggYgm5P5GW2L2cTGEK",
  "key21": "4BebRzDiKMX4oPMHqNP5sGrGidNDhZ5mJ7SJjToyY9hHjKaATrboTkjpKbZkqDqTsKNWGZoDDynkMB1LrnA2N2PD",
  "key22": "3FAcLYQgtq5qVyr4UaexHX5vuupN24QqAsAhSwhzicQYX2VEWkC6qmQFfudTVyYngEm2eQZgJ35UopenM8AwViGK",
  "key23": "2WdB9pWMxcSrxxirVUN11uUK1vDamH5CDiJLrMVVqg88Mfuk9jtaxEs2VWEvmBYjhFGNyHk8CQwQSTYFAt76oPbX",
  "key24": "PC5A8znzjoHDRK2gUCJtzkR3E2q4rMq4ceFpEHx6o5eH5A64U9EWbCGYuu7oe6uhr85YAK6EBPWiqfD2ce37uN8",
  "key25": "5j4MWq5Exq9zwrVEqHW6Yevv952kQsPda3vPrhS3pZ7osAqUTUnbGQhvt6MVd3Wb9gC26wQHg8mZmD43NMihxw3g",
  "key26": "598vXVXPKE5HKCnph8SA5TSda274PyXGG9qb3CapN4dyPqWUHmwsF7iA5ZKttNwUTDxNCk9fH2FqDYmZ8ys6s1ym",
  "key27": "4hEra97G6ZHiZLJJWeNVaRS85kR5PSMWvB7hcMCZws7jxVAGrTFDKKSTJbZ1pLmXGEFXdEfaw7ERvxEtmHJNx7Ce",
  "key28": "2uTPRnbw4cgcwk7zpQTYhAmRQXkcYHRiq3y8pQY9betxuQZxEiCKouPwW9HvxhbVG4BrfEQqDvYDdAQtjsGk6Tgz",
  "key29": "2T4KSc7QBWtzqYYkm1DKfFyLVbyv8XrZAwfoSNJaFdFnRZtgGL3K8nSRwykEwaKH38fZJJfUdcJVF4hwARUUWSM7",
  "key30": "5f7dp5hiQZTfrpMx7ED78faoT56NGVe161ggnrF2jQ2bMmuLq4yZGYc9qJ7BqU8tPxeNypLZYySjja4AJy9jc5VW",
  "key31": "ioUqV5WnQp8D4nfLzt4M3ioaxs8cQQbdRCfD9XUoGdLXhyAcVWvKCrw3P3tLabHecfxNzwDbyrijBa1LV3EdXvP"
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
