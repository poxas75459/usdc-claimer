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
    "MPVS3DUgZhBr6RMJLbrBLKHfyXu5C68d8GmtfZ8hMbg27jzW5uokcSkUL3qRALivpJvgpr5A532zwP5b9Lx61SM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ui9ykM6Cf4tehksT4PcAbp5evcXMexvCEWcqeujtzYNCPLF2kHiZuoeYXPwgC7Ua5zkfEaBUEzFT3a7YXD5ZpFt",
  "key1": "2pZqmNUNMuwAHEUbjZ4qqe3R3nunxtXw3hFhyPbvm6PGaN6txvxo8RsQeyG42u7JMT5fsEPYKW4gpwCy1BJ9ZUpA",
  "key2": "4L22xt1MBsLuRu2ngeTeTM9RgTh4eoBAW2E9RpNvjq1hU5Uv64dTBQABsQuSCKVPoRHDS3LRVnWfMYosfxqSpFTP",
  "key3": "2NjR76955JjUAbHkhFPStvymiu4rWxRBugVy1sevKbddzEDeYANJ1F4jva8yvKamuFsookgfmdxPNmjWMwf7hngq",
  "key4": "3CPDrwXYMjcEFfGKDFrAmPQLi9ezKZt18goe6grMceUhpSXpMDDSWyvFnFdzxfKq7PFvTfa9MAwFzwqJopKv5djm",
  "key5": "2RVTXbKHGAsPWFRLCTEWNPN65Eiebvi4Rh83mFfbpZwKoR4MamVzuESF8NyHnwHoynPqRY4oyLhhHDEh1C19kBuW",
  "key6": "2UxHEcMbJaA3LgU8ii9J1jBueMc5wUpLnfxxXB4rmVXHaasBc8xdXKCy4mQiyyEoz7c3gfZGgGWRdZBxznxjjUhr",
  "key7": "3PPjCUFJuktPtr53TZcqqqyb6ecrboeUD6RMbRaxzsbE8qcVAvxikrf3cdZsKQhZGawq3fxKJi9dj3nF81sgniQN",
  "key8": "5uqsJ54TCxqtdbz69NNhwP7uBqdhBkhZdWMxLb9D4cU4JR7bwnZw2mFtPVBxy1XZvngME6cBJbGoPkQTqiUGcbFx",
  "key9": "ssXT9jnY9T4bK4Qww1jsZRTg7muwcfAzxxh1WQsX468nKGJoZJqKyuJkoogDiKgx537UWiEAwSR5DkxLgZrjnzx",
  "key10": "5Rbhmb699xNxMMY7V8wgtpxtWMdi7YRJQ6adDVw7YXC4s2gWu8adAEinJavEcBmbqAfwVppSd1Czn7rXs6JLhPTq",
  "key11": "5wWtCRumHxdFKwMzWKdiL1XdknswT2ah7TbbyxiWi4FYddb4eTtfjeQVDtek8k8vsqvE2X6Mg41YUNBGLiYb5xg1",
  "key12": "2jSs585S5vC2UZUNNwxWyQDcfiKHdC4BB6Jp5qUAAWiTPghvRG1k4vD4EMxPWAJwZWRNTN8PTqJ3GoG2fUfZ2MLZ",
  "key13": "2U889oSfczYNapH33aSG41yfZrrEUpniR5Xo5YLW6C75QAA6mnntBWyiHfQoYEgcksCMMAtnBqi54wMzdDjaR11P",
  "key14": "3ME98jeNs1WbepAQmrPHQizXr5TuWYkWo6dHbMTCwWSJ9xFU763X7BxtGfRERiqmjiBAkB5njaBJmxJNrixJuyeW",
  "key15": "3HLuZf2eo11TyD2J3x7f8mrxwF7Hr55r3Dn8SbmXxSAjZCv8Ky1scEGELVYM2i25bPRP4EECya9SEb2uASJPZxFu",
  "key16": "4wt2mQSwevmAB2RUVCUoCKpk8BSCMK7M8QmrewGkR7PMpU5gyMc66SbWwYF3fb7j5cW7YMWFWSsxxhEhovLQxzz",
  "key17": "4h4tARbKjCqJH2KDBrWqhFT4nDzWzvGnoqJzuRkvtAgha4gjnWxyf8623ZFxBfL3QAd6mzbosZriSsg6H7ZZWEwm",
  "key18": "578hh1trJv6ccvkUKXMEwFYa8t9s45KL1wHky7ZCY8iV3q3jVSjzUHP91zTGU8pbea4gW9UzP6WAj3K1ZQxMcVBy",
  "key19": "2nc7HFdYtPRCweSYwE9Dfspa9HZsFjVjbYsbCJn58o9TxgeTK1ta8AZqR9fzrAU9XspJyLZmoV8GT3Q25KTVe2vi",
  "key20": "4o3VkmTiQke7RfXK3xduQtyBXXqpxSCNUZE1RdEqk3L7a5b3vD6eKrmTakQTWTw5Yg6hE3pgfVLneYbeMRGmm3pZ",
  "key21": "2fPGuZTKPijNvEhhAoqujSWoHRPaELWt65chejqN9DHLLntug2aWqyew2wDAadVSsDgT75c5cVW14TQmJZ6f8vTP",
  "key22": "42KpZsEw2Qwut9Q2rCk5SrGzH4sRTrBVZ8QNssq8MA8HoLXPMpssCYXTHrQMMMGGZUsCHmcoXyLa2j5kwUHvPsbz",
  "key23": "8XasuoLtGk95bgTVbW6uZJqR5cmFTKRiP8ygjJX9DZefEqsEKnyAAAiRUxfiCPAy9V4Z4mDP1aWXRcYLTEqyitF",
  "key24": "CLsGgQgU3oqf9Nj7oBS2rAaYigKwns3Aza49bB9Z65C985KaGNNJ42h4P9vkoS6CtXHWSrGhQT3rF5qS9mAeoBA",
  "key25": "2nnMP275Af16yn9w6PZrJz7oPHaHsfkg9skSZKzmcJtHXMj4d7MX9GBaGzNwWNFQL6MNXqrTeaTF1vhawXro3s89",
  "key26": "2bDPgk1CnysZ25yLe9MDvuCeZQ5apGXwoNULhh1TR4VgzSX4DSqGn4pbRggSJNxG4DXnbeWxxei1wgTdfzxdFFdj",
  "key27": "2PTZ8DB2Cw3v6UDypK1cwMep7ReQn6mH9t4wQ67VZYLxHN3cfq2idncKErQEwJSupERSL22muXhtovRLURz9GTRc",
  "key28": "4EPG2eCiDVVrNdzxbTzkWdyh6ir6XnrgAfPCaK5cRdCL6ugXjcd99iJgdYa2XsxuAvFUNbXtkMBijf9ekzZfE6Ki",
  "key29": "3o1Wz4fKbFM92BgMwX7HNhXxZTsTw369uBuz9hMRgbabr9s1vh6HwwjFZirVZnWCsyqqi9aPb4a1wz7WLLp1Bemk",
  "key30": "5LBKkowNs2cQMht4f8XnuSvLWPsxFmxXWE95ixTuLCHmNGBYGM4sVCdDd4Y9hEyuwpQYUz5EbgUBL1aq6btWyiQA",
  "key31": "4ANwvWtPHQrfh6i179e7ziuwDLMdHS1LrYybJynqVD2sJQu1gFDs64DGhD4FomLJJKeaXNDZ2622UNGn4S99uEsA",
  "key32": "w7eBiu6y433muyH1BrXgM8NB5j6cem6Fau9h39aGwsKRw7NyMxerzecvMSUSfQVAQYCxHUj6eDBj2nMX3Zvouue",
  "key33": "3UvUANS6aPYPjNCgMxk1T3YCfDcJySMhRiSSFmQeaLikPiUZVB3jytmpKPqyEYiEzp7cT2rvqBMdezYVLtnkkMh4",
  "key34": "2C4PHizrbNcWr24f4C9MwUn4cewYfpq6FhVNUJf57krPJoKcxeJh7SkUfsP6tGH3K6dMMWpMDZrsKjxiBMdh47U8",
  "key35": "3paTychJpuQGjAnsZ1YzwUDA8StvYGRVDcpR95szkVMmhJ4d3A1MuQQHTjq2L9fzk9Sgbn2m7Yu5BBq6K7FX5XZT",
  "key36": "g57a673QbzsX22cyQeThxg5zM8CwgbFb3knoiva8uicNCNFZFfzSpPjKbPewY8kK9AhZ8mkqeE7wfDk3roswKar",
  "key37": "q4KrSf2RnZvgpevLtDiMdAN2z3xU4X4mXckAkdpgb2gebGqRuLmEjyp7PRYxGToZaJprdo8UeHePchgczNpDoZQ",
  "key38": "4DEPhUZ97bp5ra2JWDTsqnFivLghD93gB61qacaHzDZsDJuiQ8dVQ5wpHjwwPHtrpdEbbPurYyHRgidYQhQNqhu8",
  "key39": "39K6cfTR6bN4j3bZbbk7hP3N2HNHh1sRAJDKEUySMBfnkpiki1PNkKJ2iCKiRSExBpQ971erLaqiSyT1Nn4qjHzL",
  "key40": "4YLB6UAeCqJUgBRLv56YoNQ9ipcEAocfWADqaNwyaDKtQAiPFKH4iNE2PtJfy2SSTbKHdyPDDSwAL5Y8ZB1LtNEV",
  "key41": "5g9YR4afVBpFoNQQcKAMbN3kshhu7sULSoGzHWyFZTDghfqDynQCjxgusc8npWbdoruMpWuvGgxgzvYQ4sWEAC88",
  "key42": "YjVHntEtfiVhK2JiSfbp7pwv6p5yCbFePnhTQjPhpT8CkF19hhGTQfjsSjsGTENjrPFdhhZdqQjw5FMd88j2Lr5",
  "key43": "LKfJJCrMKi1fFqr2qJD5YtqY452oa1D13PJvKoaybPGfcSKCEqBQyscPSqqQWRgPBaksihymMw14t4GZZyX2uBA",
  "key44": "59poXpFDgBNSsgEoEfaBLND6NBvskUQ2Dby19fWRD7S5Mx2m1vsyzfPEy9VUsxzM3pxxs1NsrRLRUNXaXqhUVTta",
  "key45": "52YzPUd4CjijusHoQJYP5okuDMNHg9CfY5c3WRqnykWJ2poaRjCHu7zsYN36TbPSxsQLh3uMLCvraKRBpNSJ52tR"
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
