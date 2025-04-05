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
    "5v8sqvCQneybg29GTobgpmy1NiVPG1Nrs68Knj9zr6VggKo11cZe5JBLzyraPEcTS6D2J8zcRJUS3ZdYCTPXvV2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dFDxTwfLQVMswyKbENygPgumZV3SMgWAhYa21LFF9Tf4ZTRxjvv6cep7HyGTJo9PnpvX73sZTJj7EfeS2YDyUp4",
  "key1": "5VEbTinUPFX8WQEnjb19kSuLU2ToAYWqfxPxCNTozRvSbz9FNH6tz6QqPcoUdJXnMHuHyeMWYUXGKyLD8Wm5e9mX",
  "key2": "461W5e9H3ghwnkjTwRPPXzNUiKg1pUSeV6p6XfG5DDc7GskbSjZBFbF36WRvM9E9iSUHCYTTxPZQdmX4x7cHmK99",
  "key3": "2k7J8nBmEZWbYbdpvB9LYAVVeXBpUeo6EA65m84ZdrWzZbcKYE78s9X7ac5F94PkRAsb6P5JWLQ5PGFYgXRvVLYQ",
  "key4": "4ZkZw3PeUZPbDYeq9g5ntsinxrqGqNtQsgj2oRTKU4quxfuThksCwpcQezhhUCCUaaSsSP2SzPw5sRjYwgpym6Wh",
  "key5": "7T6oZQcGFJNRTCjqezKu4QULw4xHFkE1HXAe4vMYKhqiVKek1H32qipfFn4bUJZtz4RR973Y3hGxCd1KNReGLkt",
  "key6": "5HAJYZFpSrbum2ZJGDSQeFKBVSmXVqRkoFMwyUUieYVXe9dxDwp16kSXc2vTZiY8Zrk4SEF6qyH2Z8USN8zTg5LE",
  "key7": "56Ne5YRZdn2BjNtQJjx7rnpbVjWviXqH9z6pzAypvKiQjnLY7WrAWiGVjLYUecCeEHYxZrTVVP9TKPZWaVPTBqJ5",
  "key8": "3ccCgsyyN93S7fi4vyJ2EEFCQzouFu64UKKPve52cLRPeQkA5VgY3EiNhdfA2M2sEEeQyEAyMHdDRnqKssVasxTx",
  "key9": "24QfPKFUepxZDw5QpeH1j2EgPox9iJztZcgzn8Ag6L2qUu9HnedYXZN3ZmFbYgPrHeVxfeyuT48s5oYa4YnYamCv",
  "key10": "3JV1F9BgoTxEUNmboB946vvjdqTJc5mymjEuLUA3gHPHcw8oV7jbApfmtdWgjveRE4g6hSJKp4FKsu4cLi76NnN2",
  "key11": "5iCNYX9HhJt4Z9pyNNF5RT3zJqikBnR8cqjBsrkhkMxMJhjGaLcsVer1gNH3TxxZfJrJbHgkYVYFLDBYeiSvygsW",
  "key12": "pGRL8s3JQEib4A4diuYo59cL47GRW12YgkTUpzQUdNKDke95sy9pkq1dj5VF1jESZ8AtAFV514wk4ejSA4cnPBd",
  "key13": "2oQjjFQBnko2KRpJ77ummniCogh5rZ2iYf4YwimmVVeoMwTrU5WZgayfFjFLAefaetN6net2LS8uxQ5jdXR9eDuc",
  "key14": "2GteLZQWXRX7BFTXGL7W7riRN1N2x3CWCWMzs27LftBzJESJappk3CSJ3ZexHrkLDakddRWFUqCwWVHtE32i8q4z",
  "key15": "qZ4i8CsKLNMmvNsj2GkpkRHFAJdRepscWcR2NoEEwbu5eWFxbzoY5b3HBwVLTnk2HzaKNs8Xb4Fs1X87wsayCW9",
  "key16": "2z7TQAUBC7JDRSkDVk9529ujApwcNQMcTvmfdWKGcB4PHUzxkG2Nsd3hcNEjjjS9vqskXAoMnS2zTUr2sr3BnrbT",
  "key17": "23C93En22dZtY2UPf8Tiw6VU2ZHig4MRYvnxkhGXQAfJTjhwzw3BjHD9jSxxphG1TKX4j6mNuwGj9Yz6nSxmVxKw",
  "key18": "2thLLbGcvjJRg4ZRAW73cVytzGrZoEurLJ4ABUKJNsBBmWwM24sjNxk9Nz74BfXEfS7kBUCSAgnMCDhzVhazYg11",
  "key19": "2W9iwJsPcY1B3dBcfWvLAHJxyXoA8898GBhKWmXNjRqVwZohdsP5NuDuTZ2S9qgV68oEmWE7iZHf8sJrngKx7bky",
  "key20": "2VuanyWCCnm384UmCWZgkpMG2QWhQ9SfLFCGe3W9iHJdsGuiTrn9GgTkzswydw4DyG1UdJ5kDMiVNh1j5S9Hgyab",
  "key21": "2W1c6fYYvLhHhXBzqKZyP72Y66N6PbX8AniSQnJ6MWBPa2aBWWi5eGwTpPKnmYGW7Tu4rvt73mDGnnSXcsqwm1fu",
  "key22": "3i5hrJ4MmcrVhcMFCLCSTBYZhnTZYBESdyEkXogkxVbuzqhyURgtLbiBQdZgHQXuVci2B7ekeFSD86QaePTnSZw1",
  "key23": "5NNPJW67ke8gECg716U3NzRopvqYMyH8S9nVG7j8Yur72tzSqMdmbgBLbj4E9Ro961s4pT5PiFkvuMhXAHrdecrK",
  "key24": "5eQam7DzS88e4wgfjwvGk7fcKWXsJPK6fR6YzWE41NUBwYLPnpWZRkTf1x85HpkRBpcAVH5WRbRuu7pHtvnPgVCJ",
  "key25": "4oFzB7R13hFz1QmRK5nfvXDPKVBqdu9cHERts6RgsqXa9VwK7ks2WheR7w5G5apy31EBUQDKXB2uUVke7zJAJBws",
  "key26": "7BV74KUEetjkZXccQ244ENN81kyFN9dr9Ekg4vo1pqShjrAbJfr9Mho6bYm5zhmficRdW2tRrrR8owZJHcbvTJS",
  "key27": "5HdZduRsdvntuTr1fPG7BtSz5kph1arQKnSKf87oaZx6XFXMN4MT9CaDKoDMBpJPCFaZyqGsULeWvfBgfc2c72iD",
  "key28": "4tUVTT2JquEqStak71jTsXjvQz5gv2K7fwmZzba4TddDcXvhxz3uQjQ8dSoxsxwcfhH2g8P1kvawJoVjzgzMsNVx",
  "key29": "wxUWF9drzyfVe1qyPMhG2JqQHWogj5df2pUu1cFCQE3MNba5UKfvQcwaSfXhTQsB7fQwydxuqmXou9ik4WA8yrw",
  "key30": "5DVqV2FdbTp6x8CQTt4aaH91YatvtXqFynGeTpjKkfLpAahHgW1rUkHSFvNQfGaCWWQu1fjb8mdP5SeH2uvfJhd4",
  "key31": "2vjYMGAZSgE8vceyPkVizxGwoNp7zmE4cT3bBx7Mb6LXAxS1KcsKQY5pm28AeJnqiQbAQmiCurtv5QopRphtWY1J",
  "key32": "Rjn6ALHkvMLPxKzDLKSk7n1vCmZ7ixFpxjYZk8RMoM9WVrDHbUhEPjiy6aURG3vAsVUmX5Fw2B2vzZ8rFMygULd",
  "key33": "37qtRp7K3BTDTK73yjMqL9fWuVwjdL4DgR6R3RuXBkiefJcb1sFPR1aFNq9HmTRshxuuHc8d1aEvJJeiaRXmSfgf",
  "key34": "3gWkKFSqzYwFeD2FvTowhDQFNmZr3VzGG1fm6jvMvCkBsTePev8n27u2ApCFd3znRdCfSdV9Ljp578fnnmgWuH9R",
  "key35": "1iU3rA23pKq82rxSXVhENXqtBeUyzyLMP6H8VLNHXPLPXqm164iu4Rw3UyrjC1rG4i3oxr7Nb7M2hUMacsqnoPC",
  "key36": "3tXZsBLazX5xtVpj6BqKHhoRjYyTHCLQFvYjKnnEcJmgrVy8tgxGn65LvBmMRtyBss8HiHdEdPELgLGvwpRRRn8V"
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
