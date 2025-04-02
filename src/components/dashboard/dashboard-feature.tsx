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
    "2kc5hevwFrRmHzhXSSboja9s4hpx1vmBo2f1uSfGhqSnrvAw3WBUZgatk4zBLFfomASDdM56PLx8m2B1TCWmwQT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sJ6SqBMio4Ufr1SYy3kwtrmYebUEJt5pHe8Nt8nn19RwReXq3aWzpdSpLrhHqZP3gkYxwjbbEapY2nQS3GU4qLM",
  "key1": "2QnSHvBk23LPgX5Fn6uKfXAgAV8zxdyT5Cvu5CGJy5m7wXYowaTGn4ysuRCBNXukovfbsBCqJKuSAEypQ4zHy1C4",
  "key2": "3R8ktRC1wq8Aqj1biQ3boQQSJYxVUJrvtMFuJz7c6jQsN21CsFP7a5GcSnRVdVv3PWwTSU3NX9q6fT1LzUGxpMa2",
  "key3": "dg5TMoztzjpMvLYqQhX1KjsZKshpHG1i7MgjpaZmrYbchPLt78Tdx8MhhbNsQxPDgSdbnd5rpRK8r7Ta6yjeMW1",
  "key4": "3kvR2cZHwsKaiKLxN9Epn8NWi5LjJpU4e4JyRthibcfPgPQTLd5JwXkxWLUtGSznWB9xxtB9zpVVkY8RcQKvPPm6",
  "key5": "4GTqHBg9rQxymWQGjV8KZpDxepQwb593Ar9ZsTRaTYZzEa7WEFbxybAR6keDTgLXHK4Eex2xPwiiBNkXUsptbXVS",
  "key6": "4htieo4H7LiX2twoRZbbruQpDLC6Vz7qjtepbeW1aM5e76yR5E5N6sko6U7hfbeCJY78LyThnLc5BP9rY7b3e32C",
  "key7": "3p1nhru5LRtrfoti3iYtfjjdnswDfHAS8HgX8atwskRpQ17gSXxTfFoc8mktZMC1xYNRW8oCVm8ZvccajaLapGCK",
  "key8": "334SQC8PoeGUEU3K2VhVSm5JpinDQf4rbt17g4cDC8zoTZDjogYqhe9D7ympdk83LSKpTPq6XhpVCFLbS39utgmR",
  "key9": "2iDuJdRi2SVuzbtvZ26SRtnhrodwnNMipiEFMvQUhg2rbHxHAQHsTS33acDG52JA9bGr5hqcNrXCVqUyDJfStURB",
  "key10": "3yh48cK4owLRGsFuV56WPN6Qse2P9EBDQBkkXZkogLREvxobfSaYPe42VEdnWnLYHRYG6BoBbTJMeSWwLuD7GtbA",
  "key11": "4f4ycSbvn72QHdodWSYDY2HBtNzgYGQ2RRYy9KfChhhur9ULnCovfEE1BF2tXVbgvJsRzhmv34Czdnbmko7fXsub",
  "key12": "523x569HznkvHBBc8fu9u5GL9KRaaSA4TLJdqsgwBWCRGDRw3xq4fLTnTr1s96mQitqw4UdEPKgBDrZtZfPBj16N",
  "key13": "yJEt9FpJqR9T7wZhsbgttXGj2YW3TrTb8kxgSkBQ4XU4caaRpaKg9nYq7BTkWWdFRTdPucGgCRmv6KKeSqKX1mh",
  "key14": "35HFHCobjsyunbVTUiqs5tNoYtHBQT34yZWiuokKybXgsGfcra8tW8HmQwwccvhgDwLMBT4yNmrcMzXQByyUgdUJ",
  "key15": "3KRzxwaco1N1Gvy9NSUe5tFuzufdKgRGCz9bFymBvSVmDE5eNiYLPugqyZB2hFNuTGDquYYmDDuVTMK8MELj4xXb",
  "key16": "mxFLqBBRTgvRxwndrVhY6GYXWKJ4xnQWC7JprmE7h4dRe5b7rNw4xr9agoVV23GxQqceTWR5kHHqMbXAfrzWjsV",
  "key17": "FP2u9rrLwixhqqR8vwaa8mnCC7QLcAWNR89XhdP8eo57hSttscdA3kMHSBBjvQ7oySp8Meep1M4mfx2kZoT7qY8",
  "key18": "59eSiYakExHA36sevSb99cRg3Zq9rfcnKNC8oynMoB3sCtF7wtmaz2TdegiBGeCtnBwtBLKgETJziH4UrNcEnKxD",
  "key19": "5wpM3Jk2qTpUPbirEDmN3VxWZVDA4swe8cnFfJzbK1xTPi88sBrQ3uPuY6mb3ob1VnTWy6DFuUgFvNEW3FJHBh2z",
  "key20": "2GWjRRd1x8vLo33G3zgatHpMMkR5zkJDxBa2eiXSYDyDdMLLNWV6a9t1Ly8CCANkWVtCuezeh4xek4HEsEWWR2fD",
  "key21": "zDk42FWEYqeWVwhdtTKEkjozhy3TrTXQfhTjKJmgvUdjgVMrXVVawc5AcBm4VvyQP3ZE6ycGaKmarm8A5KtiNxK",
  "key22": "4mckJEiogv5jPMvaZX8GXTcQhetdFMEhVnunjP3jQp3PXyyvqXkuijb4GPFQ9SrF4BGAZzrWweD1zfxJXzy2C8S4",
  "key23": "4cao2AVQVa4ZexF34NgyxooJUNMksTVczS8tdTwct6x3E4KsNpN4PRJPk41XLgMnFHNZKkkjmbRoaWJV21pgzNzJ",
  "key24": "4cRYYNogu9MQZu4dG5jgeonGJiobXMgf38h6yh4iHqnNkRPY8KyKVudyS4rw3gmmJqMxm64e6g5XavWj3DYejnRo",
  "key25": "W6Sn7feN6WrCUrwSZVvJ9Mix1doNVaNTguS1kEA6UXfLmVrLtcQbvjhN76v6uizLgqmkcPwGvS93FSEWtzmrP37",
  "key26": "9TyZFbppSDuake1aRrBt3P8ZEbpJhBukJsdRBkrXyTF9fj3hAUaAXPzrCoNJtpFQSoGrVQk8unbZ5cDX4QXkX3N",
  "key27": "666WYCmgkurcbsApFWq4mbCxqn98zLACCzt6Vbnc6hE5Jahut626U8UShsDyeTQHDLbSwNuTmknf6p8PC9sboUXA",
  "key28": "5VgSqRqVeqzvoqsbWXhWaYsy62SNKDqZdv9itSKFqV3w9mmUphfSLUUQmY6nBhQj2PkNxyYjG5MsfBeaQBmLTC1",
  "key29": "2NrEYpkW5ToWd9DVv96rmLjKc5PEGVmMsRwQdASvSpjkxb3FXYuivktEKoGMPPAvQbcgF4T4JtL3LCFNpRRsPiiK",
  "key30": "2jPuQDL7GPzuzscgF9w82HFETxs6wUbVWiSX1Q1q3hd2cX87ttXJRnSjGv2r2gG7qx5yMHobXYABTLz5hLiPaaZH",
  "key31": "iFLJzwFXQG5oznYvFqQN1w3mqcyYBAebQ4Bwrqnjxkn6mP6WuzGEcF2zREC3oqHi4nQDTNw4cny6kBrFUrhCF9j",
  "key32": "5anKH6GWvBnH7kvaesDcZV3Yx6TQw4ZbC6S9sdL1skP161XPcwDLiiYYG9eotYUcwN2qr2fdGtnB4rHgNhh4sNo6",
  "key33": "f2kKwNPe8hvJahwuvZFnXES9Nrp6A6ttid4Qo9XdTR8YxGmiPTHbggnBj9Rrar2fUA6fSpCdAbDS5tqDV1Wtofo",
  "key34": "2tsquVEL9Kq1HsaqzDiei3uvcFXK6E2ukYTunXE8mCeR88DNnEmvUshfdLMFszRxLFC9qVv6pkE4tAHB16L5hhwr",
  "key35": "5a28UBFm8qpVsTrSPrZDsnD1Kydt72JXyHFxuSm4z96c4kaQPXRHvPUdPjuAAbH4PzrXxrVjqcUgUvWCkcGtpCUQ",
  "key36": "619YuEcmmCHfiWfQuyCcgabg2Ro3SR6uWd3DjmVeh6CZnfG6fgUjPiLbYnwx458JdzYgoCMZ7Fnwsum5FPDofScC",
  "key37": "2LTfU4ANnZZM5br3zZm34NKH1DZLGA2Nc5npR8GeDqNaxMA8zgc2pynH6uvCkiqWnCwQTsJ4fJMQ1bJvctvuABzf",
  "key38": "2NPn6e4bsAB4gFKcLxVZHGxChWrJEMDNvdZv6cWydtqJzx1FDUGYvybfGcgKAyn8SyKKZe5Yo9e6PijRJ2t2pBRU"
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
