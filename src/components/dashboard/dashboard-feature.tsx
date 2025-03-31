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
    "2ShmftYcdnWF6JXbJesqSD19k23aEoh5Nh9wdnRKW63jPAnyknwnBzBgrQmZ3GLuddMYtr4T9Yy2Rk8wntu7QWHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TCPRRgC8DUXRt3vu6cCJcn2kZqkF43eWAND9kKLDuWVVUhVM7UQBPkpAU39exu3Zb1RYrzxE7XRAaqP1ay2dmBE",
  "key1": "5nXVykKLsY4ufPRfZzuQowAGstrxqLXF7h8uLroRd74UjmsfjA4g4Fzqq3PyZ8SBXcV979EbCvgz7xH2rkqvYkC9",
  "key2": "NqAw9rZWGDyzeGbMSEPXXdK9wP4oQSDfLza3WgtF7GpFgSsarHaQ67aNRxxWTjg1gWAyVv9RVznjyyVJnRFjTCz",
  "key3": "2ZZHzSd8sCz6aCQfNu8n6VHeqaGJtAizaW61xUT7dUsmshs13AwvCw8WdgMgYgxeHmKZLQ7HMLBdwzP7jP84asAc",
  "key4": "5D2FZ6dVapXoDuZbh8SvMChserYNfpM1nYeM6kmZmZkFnjasNAB7zrLuu3G3xB1i1MctqrmMsz1RRySBRktmra4K",
  "key5": "uoSqTSBuBE4qLNnhuA3SSiHPr5z5X2YpW7DeYUDnzyq3FX412cCxhabrPW9xx5gLU8JQfKdgmrSX3RmtUgfj4LP",
  "key6": "3n6nhVtLeG5zPDKLA2h9vZt2U9qh1JBtuPDc6og3LML26nTWKvyDcx8MVc7hiD9FkhuBrN2xvHm71VGYZAS6TB55",
  "key7": "42MGWY53vwRaHUwkXfcdjgLjyCssVFEZJP7KbEnvoAgwiAM3LbJSEor5qQH3doFY1NMaQrnZBDENtfie1sQ3QKWQ",
  "key8": "4ApreuG1SrQs4ZkbNzLL1XjjMuR84coVhCMp8MZpVhotAX8HJRogvoGfyqwPTd5XoSkJN22NEYAgFPs7P9LCSZ4w",
  "key9": "MYvd3rjKdkoYMp1yYYKbhTnJF83RYL9VcaMphNLrWhvwkJnBnmX6znf2xCKCyUfRdrjL4ArLp4EkN9Gs9Y2aYKg",
  "key10": "SFwH44vzWhZUF4vADDodW2foiXuktWkrpLGAQumFCpTvnVfcnX2Z4XiR5m4vkTfLyB2CTR98Zuu3GnNHGEhVpWx",
  "key11": "2YWsCv9FkaqDZXfgn6c5RjZNj9dD1Ufzc2UexH8oPEuvpDQ12tDhaHgrUi9FBUCqHeRMv8Bk1NjM9qbQSX2PR4eH",
  "key12": "u7ED7qmw9gpEsc3RxsyZWhSHfU1zeQzDEPpBnwRrV9k7QgRxFwC2ArnJk6wETpEwq1s7hT4URdN6G4aQPPzPfVu",
  "key13": "GmgKro4ohk5GEiTAMqx1j252jPYn82CaQfwN8sJJrBH1Fq6f7pTHJWpvhw7GQhFpkAaCB5nV8AEvtJuAX7oVmZY",
  "key14": "4FDY4aqj1C7p5fNX6ykc4KehB4EGui1j4WbkaN2rf29rnYHNiyD2bj6bkjRHEeSAxe1ksPTf2Feke7vHMxYxwfFk",
  "key15": "51KyAvQGp6Am3KnwMuPeYvK38F2Ec76evjurSvphto2BVHQcBXTFeysJb4ApyFo6nDPad4gazxmqyWKhbr7dqXcJ",
  "key16": "3PmU7EwsMfuRcnzCPtqmgFtNmyotzw4gT6w2uWbfbAUUtMp84UGok8ouhf1K9qU1ZELe3eMv672V39koYYLMHVj7",
  "key17": "3E9jaK1EA6yEp2hhWHSigTKmY4uDGYaRicTknfRqrZuS5oy1jPfWkj1oJbKrKqadcyD1H679dypbCRaPaMqvYkvL",
  "key18": "5nhdVsRng132M8Vp8S2Hnejnkm7pbQLnkVXjZtxd55k8uqYWqEzRTQuLexDNdNGNwYWSimDGjKWhf2grVznrKLHs",
  "key19": "2WmboKRKHwneowzKAvQrcA7dJ1nmeunnwDDH5eaza9nMomUdUjiuLE5oKQwggG79XZCLt19af6MdMikKiupHTTWG",
  "key20": "5AP8rLVots4tSF9NHbSJTc8gT7Mco5hMAVZdiyYiPvmFziDx14ELuFj9tqNQ5w4ohTgrXAndEKfvyzqv4bjnPRDx",
  "key21": "2Pp5FXYaWBV9S8qL8d6R9rCct577gHep9HxxQuGkLXN5FQMM2ogbJta5S7d8fioQtF27nWfdjTJ5J85QX33bXZtD",
  "key22": "3kpYDufvr8jYxLjR7BasEaYDNmDqtpjfj5Q4tTUDK2FQAAdCxEAmFfcGTrEpEEQnEZ1hqVMhKW9pN3mYmdr9sMcP",
  "key23": "3ZBUn3w5V9giPkMEMyXweoiD9pCJuvEhGURQ2zpyhic7p4GrWNinUZbAmNfQG35V7P5xRBEWurgWYhtSxAVQdnfJ",
  "key24": "4KXBTG8eZVqqoRjbokwHQ1psRqXyGcuKtswJimQPriar9JNU8AdRggU6Ebik1sm3Di1qN7BvoCoWGxgdkNuUkq19",
  "key25": "5YkNmyCuq79QrkLhRPQkh6ELYcUaspWFBv48XSZQEiNojzJ7C6NKRKRrktUzsPXEdwhaXskZYjVQ8iUMvTj9e7TY",
  "key26": "2mG96Ngfr1KaDJ9XARVxj59B5i2yaQ2QXsuR6kNWhmiRnC1wtfkVENeZ3JG1CX4VfbdcaawpWZDoy7XxsQ41MFH",
  "key27": "2F98n934xrjiHm3aPqZMXX9EkHETNwZSAnK1D42yuZKyLd7Zq5WHWXaxgRbzKcoTvvuWU5xTCJp2z8TMENzJAy3E",
  "key28": "4N1Hw1vV68exkh2aB5Wswc9YEuQj962SLQmvHyxJykhpVZqjXdpu6Qpg55zLo5CHKAUTEHDG6Vb8GT4tsShSjvvW",
  "key29": "3Wpr3aLvwjmhgiFj3gAg4dzy3H2oQStD4NpVswDAUaXvofax6D72hzqsdCywW2A9S9tsPied8ucbkLV7wLdVqSid",
  "key30": "5K2Ui41J2chHNr4Y5EVeeTycEh7VEvCsEVDGGMvPcWC1qCg98kqeEz772qpiEgpMSXiumTCWffNSNxKJhpx8UvJB",
  "key31": "4hwbcrsDRNngzBEh6eyaTzVszor7XbkbnxAwQidY6xJ2YXCoLv6AN5Y4V96NYw8JkUT5Kg2uPQRSbxbFtJTXCKHF",
  "key32": "4HTUvycTTaYtzPv5tcY7tiJi6HbDbibexA27PFFYVvxwJw7cSjoRotq8jSePLgFgiezrekYsjnwpZ491mhCxByyv",
  "key33": "2BQQhGKstkbL5FcSVhSEzsrBJtQrQmJusPtyN4A4Je2p7SCy3LVGivM1bEE1mFwhaB1ZjvhCyXg7CJirhh4w2nNU",
  "key34": "2n7PoW1URpXbukBRG3NWXK2hFhh2Z3aj34X8cc8ci7Pp8GaFdaMDbVJ7RkuaHjqttLyDnQ4wQfKsZRBDV2mioRhz",
  "key35": "5jBW5s49uABNvzGnsQaq7B6w5L4T6vVxSzaH9SVmHncmaoJbBQ38koxQb2rpLZYEJrvVLbmmRPS6HXhMdSX6QRsV",
  "key36": "2sRu4HTyjAj7u6cx6XyAoPLVWeMQpT3aY4gkRRV6a4SFoqUdZsNaHgXu37RwxwJbiEhCq8TjxYwCVLf7vAknKwJs",
  "key37": "36LgfCqtipa97dJkYw23AiZ8o9nbzB3cQp9hDcknasWHHG4N4iDcJJTeUzJ9VBNwHqgPBMBneE9hTnuUmXKi38ri",
  "key38": "3ZGM6uCdEKn8L1KsKEzx5GqKJe11aBX48NFeQKWiD63HQUxZzE5RiNnAF4bhY9C9eizrP2y3haEkmNFbDZY4znFV",
  "key39": "ds3FUrK1oAxvR9x6aTnva7DpoMmkz56V6irJL71mXL2RNxYdVMst88t53NxXvm7TBNxMT5iQABjPa5LZ8e9Nc4A",
  "key40": "42XEpW9mY1RA2keSvK5RiZgCshv5wKkJFihWx2nwSHuavidRKjacsaNesccGUWqrN1eH8pdMHwjazVTNEWdvrZ7D",
  "key41": "3Bw5uVwGsZBsBHUBXYD7MHotf8QXTz4ffa6JG6X3yzpyAEf1jjFnQX5V7g3bzYmC2QHcEcWQZ2hCU75FXeQqoFYf",
  "key42": "5evw6woYD6ZRLDXBgShjjnbh5ATSz5L43Bh43M4zHmYupwBPNXTo356aEr1c43HwP3DEuSPPMhtF8Yco6K8Shj74",
  "key43": "5fruTeFmrxihwqcTJrQQybRMFzW9HDGYNEVUa2yrhFH8t2uJFgnfj2WxojEZPLnd1f1Jkf9qFBwfmRKiYYxAeNkg",
  "key44": "4EUqevSP1A7j92eJ4Y8WqGFc3poK5e1FtTHfcWAjwjqYf8CdjQK3sDFc7sGU9pCRsmHwNjDmbAfUp1dXRX3VbkoK",
  "key45": "3qDkPUsprrYMmQELgHoCLzsX5Xt9dQWFLtWpLPZNNynVkzyWxmi3SBLbUeMYYWZwmkdyuHD7Tkemkp8GQLs6kjFE",
  "key46": "2aiL8xFsoxAFDhELKeSC7evEb8PC1r5zfdrnMqEJWASa8mGNNSwdJML9dWuw8u9UzqMnJKA9sGsC1e7Xg6yGhpSs",
  "key47": "4XkSsbA6rMQan5jMUNJq3NdsGauqB3y8mTTJQFBRzLDztuQSXDMnTkVwexFyLM3CgUdVA8zmd47mjca2wG3PVSSS"
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
