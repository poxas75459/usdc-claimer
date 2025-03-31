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
    "2ByEoL8AgcsDmFyTvrbcqCDkL1fow4JnANFoKLpsUC5ZDogvqQTCPAw4tfs2Cmc1jSn2FNLWKBCXvBiNVhzNSind"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J4mQfUmkQBxs1Nze3xsUboKzbFheGPr3ALFpY8TfpEVyuu9rkgs4hJMT1mMqL4PxERDEHcivQNHg8YUVQNqucYq",
  "key1": "2x7gpy6MunZAoWgxBVe2A81DUTVg3xBNcmumv4rAipG6ceNpekxibrovTESkdn85EtncUaFLYMEXq4T5CbB3Grf3",
  "key2": "4HpXwLGMnChXv1rcq3KzUwrdqNhTYNEK8pQGiuXQdswmRa1e9f586sPdcJYnfoPN63zKEKuZ1VxZVDE7ib1YzyQg",
  "key3": "4DhmGK78C8Z9g6qwEhVGPRFMEUBgzVW3setgGpAejhQMqq87Sps5BmbGYxdceB7UCpyW4QpdEm7z7BBwKVVRfiwM",
  "key4": "392P2HA1hKQyoozofSUeLi4Mj6edP342D3vX99MRLCDF21gkHXVtnryWb2EvamN9GHDFp8HHuZKzc2QDNpNkKN6R",
  "key5": "k8kNDD3JrqEY6NkN17fgVvCZnHhS2mwMksUVLNfw5YD7bemEUFc9VVTJvC2Eq1Mu5XTPzzA6FnzT29W83kKY3qW",
  "key6": "5SJsrBziPcCgEsVjZJW2RSHziTuzm7Va6nCv3U1wUZcvdoGEFQ6Y7w5QSkkoA17aKaEuZAqkkiSKH6CGTajqs5bH",
  "key7": "4ncRKEZgQDTfbpWUgcL4C8mWPPQcjBpEnhScWBAEvYndyj76mnLn1mMVSrqZBzcG3kzvREsq5Ghmf8bopjiXEUyG",
  "key8": "3x1RRu4JRWATkn5WXW1ctLpaTXeeF58jowvQt8uj9UMDQWAXyaZuFXK19zcy8xjY6UmMmEDCriYi9jVQ2FhyjbuH",
  "key9": "5FKsKyD4SjfDJ73ANzutHeW5JrpRutH6HCrEDSAuUHQUY6qA7rp6vDR6FCv5tXsNfcePX5qUT7h5DcYFSYKX6Spj",
  "key10": "5efZL3unKT73US8yWTerUVxzvA5hmraZKXq86k7anz8iR16ajVb1NpxZKK279KAvjDhg1x4ivaGHrUEmLASi9fmY",
  "key11": "3uDj2216usE5wr6sr5GUDi1aTTd6t4aFUWGWy2mMuezo8hXFShDQBFAkz47DRKdPmKDnzgvrHc4p2UDFHY8nVqV9",
  "key12": "2wrStRV5nqcHHDaK99tu2x5shSsqyCbGrrWJTGFN99FwXLQ1Sut13cNYPmM9dcKiuAgs4vTDKSYX9LbAw8xsAwK3",
  "key13": "SU1KEz2eQjb4XguShcx47hTRpyf5ywV8ZetnAWhRcpp874326kEjwNYKrvxNYFdP1fKTc6bPuZVgSufFyCrKtxT",
  "key14": "5j7NxhKP2umJDLmYaxUTi1zC8kiaVQqKmMcZGM8tAiS53VoWqx4GqFT9AWewFked33N4EdfPNKewyW89hJep5RGn",
  "key15": "4jX7c7NzmfPmDqADzFrth71MnWUVgU3CgFjG6ZDYYuzTce1kk8ZKfTF9d9qrEyRHenWi6fxoobrzkfTfL4KgPmUE",
  "key16": "26e2dzza65Wc2KXbVbcv66onzSQYG1VEQWwhsEm34hjXGuQuVSx9w9cCeGCcRzQDx8VAzD5Gjv6SNvJx1xNCgCJe",
  "key17": "5eBntoju44hhqgMtQfGgaZQ4P8gMcwdjebyxTdr1xiXQJGrjQEoUZXJmv9XAz9QRte7uJbXMX3XxUaZHXWTwbv6W",
  "key18": "5vqfWT1ZaFWKEbqpWFfiEh4LbVXL7F3YKco5nBxXWS331xMEbxiZPwiejxWFSp31mSrcMkeewmbVDc6ua99E6ZiK",
  "key19": "2JAwwa2ZyZyfdbComQv4rRpj9weBRA6rYrakwfzD85imD6PTWz4HLG9MmNfpPUmqQTr7brTPki4jRGfM2QT9FcaG",
  "key20": "4BDhyCRqDCGrY2WKpMaAnLLXeTbCDijA5puYdgnz7bhbKhmTJ1ehGGE2y9MUKCkyCVkhosrHJWCKZt3VH7G9ste3",
  "key21": "5TbQY1k2KGZJKgfX71DhYNVazmyE8Z1tuHX6ZvJQ1Qog9MmQxchnpNdwY5VcWWL6c8xZCphAsxwv4c4oTqHCpqWo",
  "key22": "3924jM7YG92UsftcHqsAMkFvACiZA7j9T444nDA5e6Q2P1jqVrZg6weg2XDgaRzAv3BLyDzdFeh2T15Yb8CHYbyW",
  "key23": "5NcUnAxXRcK9aXehzDu3Z1DrMY3szCgVHn8WWJeqQy9gckhHzG2NsFwBKnfXZLjwtw29kXM2adB88m8Xjov9nkBA",
  "key24": "Pu4rsaVfFpSUToisekMLdZLchCLfA2x8wR5dbUF4eYwFpQMi3XmxjHuN54gma9DefGuqnuPUkVFsZVdv4hNXf3r",
  "key25": "3m363gy4uVNawMM2Y6pC6mxbNf1RqYJS1LYZtr6CTUEKGndmQRCVmtwQQFuhaZAUZW8cxQGvaqNNSL9hctxqcxym",
  "key26": "21hCAb6DECqJSNq6PaXBVSndXLCCF1ZosdZhviCjT3qrQqvrWDKXvVo7xnnbFHNpu2imhpzXyZuqRKZ2FQoVfzVD",
  "key27": "2RWGzptAiQyB3D7fbovX1hePCsmrb7rGiCf4f9338ttUR48md79U8Jc5iW9fjpQuayxy2KmHsbCjdXj3QkoGPF8X",
  "key28": "vs8prhhus3FSn8Ukb6UYaFHVr4xevtpqi6QjDfPEvhse8cZgKfzi4SK6x9go9Sdqh1bCEurMPtUTvWg9g1G2nP4",
  "key29": "4urjqfaKVgwr9HNMeq1Dfsj29Qth83XxXB1X8rqejDA7HUA3o6ahTPqAbDdvBMnZPv6NVDoZNafLGtqwZMmzMCfj",
  "key30": "352sYsK6DdKpJAp1AxJqcBWv4a51TR416vZaZ7Yne5GngpDLvR8449FHVjn5fUDMAz1idRwPPcr9sW7xeajf5EWJ",
  "key31": "5N6jLQ6z8nq31HPR562o65vNEWUYENXiLJqxNemwYMsCKfUDGkD2NULtsdNK1ZqYZRZia5zoQqtq7A6DRfW12BjE",
  "key32": "3oqw4KNpnoJJGjCCA3xJX73AhZykvB9JnbeEn7YHAyauyq2ypvhM1LJ5dgQfxYotw52aSTenzdb3uidz5QFo7Y2f",
  "key33": "5pQm3iXdGo4nJueYEed5kqRS57Jp8T3u6iQ9onCwaFjjqmx5QhijAX3wgWi9CbhSwUjHPosWLQpivFPBN2fmFtBT",
  "key34": "59LYNDZYv5gEzn34kdRiUYiS8iijAogT5k9RsRbRvajxq2j1q5SSpCLXcCBUUHkoFAEPwByFpJJvtyjPVMoxE4mU",
  "key35": "3TvToLtc8ywzqQaZB6nsJmfL416mvsQRvu9AMMsbTtQnmKrCFSaCC9vSExAACqJPAmHw7nmjRJ9RvmGhcWxgQB8B",
  "key36": "2nSvaQnc2M7gFrgyufvsZpMVS1jQvTZiMBauGadqVwYQQtdEhadw1vnfn3o1uaJtqmoGhR4vZQZyqYYAm8q6Qudj",
  "key37": "5zqa2A8apLmxyw4nAsbPFk4yn3KuT3n3JGxdf4Qb6R8e157oiCNPPuVPHEZ6P9R4cLWYfk9J2JVyjzvXG4R8eEuH",
  "key38": "34MZGSjuuGJAqoFf1Javx8aF6ms7TkrJN2Aqf8Ev9w9rdPKAcunQJf66ief4cYM3eH5FopGMwfuy2FYdvEhFrs27"
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
