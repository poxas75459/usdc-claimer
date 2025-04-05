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
    "5m8hPwqJ6tyoyiAwU52k7niFnQfAioj4STWvRiDUNiMdZmZuV9YHHNc9MSn77gVpPmoAUmwmRZPtB97vMJGiFSvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rhXU3afvTN4gaxhBQDGzHpCxNBVjaNJU8jq2ezRQCcYWbiyUaXNtoVMtkdCpAhuQSi866T9CCfNNfaqy6zt67qN",
  "key1": "3ceDHz2Ro8y47sLPqLdEmYyJppivPL7xjidKMQFqJy8gnS8zUXGHAaa3WJUWgzt1at4tdqVob9skMLQTa1bzF6Kd",
  "key2": "2FFNTZUWgAjLgk4vzeTJkZCCsFoFDiz2UF7DWrQHTPfop5fsRxBzFWzxSfuD1yrZ6CJZhJdca4N99n6R7DUwYApv",
  "key3": "4C6CSKRUDvy5DGeentULr7GEQDrNbagvS2iEKKmhQE3vFSrJN82vGrcvZAZzueCqsrFMJmSC7Ax56Z18H9T396uG",
  "key4": "49ttNncTYpFXNFwS8TJisux6TLY7BZpEiWqDRbpkja5B8RH12fEGgHfekXT54AseUy8gHYN1rFyFgpVuasjc7Fjm",
  "key5": "NgQzaL7JY4iXSjyMxrYDd1zqqkuDFBTWiFe2DKFH3m2qMBZAb9bx42jv5pij2qf5aeAyNDfPVD2DUAvwhVXJbZV",
  "key6": "473CqGqJPYpxqHviZG8uojXEigw3eyre4G8wbUkDTFRrNZuZd2YSDZB4KUnvVdfumnW5b3whZJxQfpbxQpV1csnh",
  "key7": "5KoYW71v2tpfRuM1hfiVFqdEAHnULncFYKcyKGnE29ZgEnvzPK8FUgHnshtCPcaBKCjwYWHApsbVaWzjn5d8u3vh",
  "key8": "3g4NmUmf5BypxobSCK34TcwEyVGrrK7gPReVK4B8xY4jW6TX5hnnRXMNSYQ5GSRvwx9v7bQvvTzCfVU7bWEtv8A4",
  "key9": "4nSMvQEuSbZbyjPzWrVG965Rn5eQMCKaYac8CEYKw41b1e9oTk4arm5Ztzv94UoTxVtr2kEHsFgCMdTay9ij853W",
  "key10": "46qnkJmXnBVQexWneS7NXMCfSett2DBkAyfbqNz66TmFf2KZ3fjPqw8KtFSTHWDDjxgyGbhcF2e5MeyptL7VXdc8",
  "key11": "BBXicbS5zNcMapaGtJ8Faez26bUeUEiA8A9WyR8bpP7KJSaePsGeCEKXmGuxSskHR1Y9E87kU3ixqsKquxC1xbf",
  "key12": "GZkbLLw5gizmbP6NHdLx5M34sLMrr8eEWSNqdxUFnCVeTeL8ShFwpTXrc2mRiDdR272dMX9BR8W9XjcqLKWzXQk",
  "key13": "2dBDLKVfdSU6VqDbmk3awMbBwidQP1oz1vymmLWn5PZDWAi8VCqrCnxUohn3U1jpeig8yFqRoYgBoa1DpQwve7Mx",
  "key14": "qVBnCss2qdUSWqdbHA4iBri96E2P633i6ExqGJgQoyngW3US9Uai3Du13pPZeiH1iqnuqnkjnh7RTknvg5VW1dF",
  "key15": "5Xjqx11wPZYPZti64Z6wCAkdG37usehCQfhh2xpBADfjPnoDeasTv3pVc8z17QETEfgnLTH6ino4CXZcodn9nKGm",
  "key16": "3vrgGAJbjFVhCfpUzrYuTpbBBou5vwHysVp8tir1RmaQQLGAuk39ugejZzh6KEfMM1NPq9czHpGUsvhgJX6b8w77",
  "key17": "3k97DfoRRfeKKGVMk2ybhctHjLdEtjQMszU4bGrNbwU2ZYJDMyTTBHWuepLrNpMXpWqQhrgdFpLu9cwPtYuRXs7V",
  "key18": "3A3nUfFVZHaMAT5oMPVY18HAba15Wtv5G7S8FNDvCTKWvdyMBgx52FKR9t7u6iW3hPmfW8erikDUaVBHzpeqno6P",
  "key19": "f9rBFsZZkSTU8b7RPZTy24cKo93bZeSueZtY9QFRigYYD9jz6JngyXJABjr4gcvsWHnZ5gDxjzhLnw1CCZTdWsw",
  "key20": "4qvSUJ5gm6GCBfE9yijGJzBRK8xn6jtuN4YqznpFZjZbTwcBFVb5T8u8XKhPqyDQcgcF6mQJf34rMZZkWMgBBBVB",
  "key21": "3jSi6SmWBoQ3hUaQWnG5pagU8wqaUSremtXEz6S3sN2RGEqJzQiMGd7wjRRFQhPwki11h2pu28C8HKovZYmrwypK",
  "key22": "5k5hdADPx66HgU4jikBiPXBSBUAZTEL7gDgYPFXwY8Pus8qEvM4oDepjJ4jXmCkB7VmyoPDxuiaVod6j7YJkttXJ",
  "key23": "gyUzm9UQBoFA5SyA8jXYFHMZR5KkwedfQ53FZbVY1tV57gw923rXVYiPKr3LWEnxZMq6r5qxMmxm57go1AZfLKc",
  "key24": "2XAt8DrgwuBPk5pSAPL2hh5gm79Bw5RKAEUvmQGptEUJCj4RYVXkEz8DoNVeS3Do1EdmgEGksjbXnLoQf4nQdfEZ",
  "key25": "4Xbh5hvjgVyLYiBhDcTehoBG4CwoFwGwxJcdsTcPTdNxZQa5gnNdwfSmDaWuF29qmpy5Xd1oiM4TCF8NPy5bL1YZ",
  "key26": "45efDNw3PbB4rxqjPn726mtQEYGc5B4zYFRPyNod9yajaZ8Ecz8baQ5eu14JtHHhurWNzYioU3pkUqaaCPRvDSpZ",
  "key27": "5oJnR2yf22pNfKYPQmpLrnbewnKZSVUTKmf3ErTTjSwu5kLvTkxDkFSwGd4TfVA53smJTJgBU2D8ec6mQBRTC7Vj",
  "key28": "5QbfnSuDkHXpKZzz8z3RCjSbJRdCcXRe9hKjY6MuyPUv51jqprXd92ptpv2uhjp1JoRkm2CXG8PWbqRnWGF4fc45",
  "key29": "4PM5bi7EVTvtsow2scWbX827oAx3VrY6GCqEiMA6pL3h3PtGegLWhvd3Jx5hRjkb1xFZVE5sQYuq4kr6A6w6ek9R",
  "key30": "3SEu49u8iTp3esRCELBqfA6CH2tjgVCZnqcSnjgFMkKf7PewTGWqVHpzqRYTpi681woWqxcGeEwWVqzoBd1bmDvw",
  "key31": "45KctzU5pQhhHjAbWKw8cDBVQaFH8s2BPPrsJ4RnGU1bcjqvVgQut6GUy63MZacA9PfTkvsf6RDQHSRPnH1ke8VC",
  "key32": "49Y5MmhwUBwrTT8A4dvDQd2utGe9XqbRYbNF52XL5MhEaBwdCznRz4twvYKjrqufkdvRdupiwNeUkB1Vhj9W5PVd",
  "key33": "4HawAFWd1cgmwfToXBsW1B9xipf5MteivFBy2PWyZd1vSMnJ5qPwxXXDk4XeAkCg2RfAUdMh7nV9bgh65VF2As8j",
  "key34": "36sK1MsPpMWppJhPfzLPBHj8JgWVdifnBdFTQzwxDhGzkJdbbfGtZPjuvDo1Xw93WfAhzNqAWxg9j5qWmVqMKaif",
  "key35": "3Qz9dMkcGgPL8AdCNVbddsdUFmuQHknAx6HKQPxNqW15bx8F4NqQHeVeKwzHQCrAxwsQsW42jDL7ncqELwV9vc2H",
  "key36": "3uXxe5STi61FAamYKQnk8Xa7goL4iXvXwcG4dKkaCrkEHShpUHJaXe6o3hF1f8xbdK7NbtYZ21HGK3owNLwQQBAF",
  "key37": "9KpcNUWLqUeqTRQJt2j76hTLwdAmFTVrXsPrkH61TGpuw8wX4iqRBtRz4koEM6XChDUw5TthDedfjQhsgTHAGLp"
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
