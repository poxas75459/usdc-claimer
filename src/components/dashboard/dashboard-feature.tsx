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
    "4mGPYoacUpRn3bqmWtrGg2nDfy17RAyrhijrquyoWei6za7qS1UatHu9aUPbdebxnNmaWFNbzPRkV6X5iRkNFbA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iVwTTfkBw5WPWiWhXeXwaV6FYD5g8EyicrewUXWRv7kkgY5LRNrLzLpPLDiKLoGoabtc1YmdRaWgH2mR1dkapiY",
  "key1": "uytvBsZMjRqbhbp4ucUC9jpZXM4Zv8mNhVCmE22Lj6QWnAnyZpL57cagwot3KkWAhnEx4ugvG5nMBU5aEaMCeC8",
  "key2": "2Zt2GACKqVL4RQrZ7sJQ8jtd9w8zAw5NGHKMFBrPR6UksJrhDYZPbxFx5b9nZFDhKdSyo2etQGcSSV4uq2h7Zetm",
  "key3": "33fY9YRxNNwhx3ft1CeGyQBm87cHNMpjBP7hcvpyzB2iuunMJDUSfmdFNahdCFq25NPGfy26yxs7HYCWq66A8QF6",
  "key4": "2yrL93zgs5Y9V9m6DLukZtA6XmppsSbqTJqASBrSV8BhHo2zEXN3PViZee2bUuQSwj9AjamiXZ4bDgyJm45rr3oY",
  "key5": "4eXBp1XbEsrjeQ518UzEycLEjscmxQUW15aBv6pLpzuC24YqxC3GuSPKo4ZftNfoSogJ2jXiau9AxmMxfQwy3NNy",
  "key6": "62ti6BeyvQBvfhxM31iJnKaDJn6NoGZH4fTubXhaoV9QWSuSrXogstABvzkj3FPdBx9FxBHCaoLRZKSzcJsPxTt9",
  "key7": "58qPJAqHfCyDg4qY4ykYwEqtDpGxmopSh8Mf7gch2jFF48oMbHmL1MrsYHwQoVCfPrkbhTtTicpPyCfrmX33vhxZ",
  "key8": "45dQw3U7rpJFKosgtDEBHFBx1a1uzAbtRFyZGLcypZb6jFQcfs97Snxcdcqp1RZzggNbcKaKaGgFYMiQ6C26ApwU",
  "key9": "64ub5jM4uVEmewfzRTi2ej22xbnE7J2YpgJfL4VW76y8ZAMAXDEpgaf74vGbHo1FxEGs6q561CDY8Xq2R3cs8p4p",
  "key10": "2xmfEEfaog7wSJd1KKKSBfvoctmN9bpEmGWmURWuo96kDUBpTJ6KvxjfM6xQwMnBwMimqqbLjSnutSyn9FWWn6fk",
  "key11": "4irsXuSJgYPGa6V5UaVwHQHN15p3j4i7k4aM3c9S4Uu2JXysTf5tAhkbhknAMMTy1oBFgN2NKFhk62bPkMotNjN3",
  "key12": "4JUvVfmCUCQRevxcxBFSZmPDtLLudA5XxPRH2xDoZ1D77coTVUv2fwgMewoCrCfuwR99qmSJCw8cHFhMmYoAFcHv",
  "key13": "2PGSdkYbFRXVkBXeLTv1XQShvdw9gGCAHAfD7ZJoME9zA6B9iHrB9N7mYCk5gUAzCquoWLc4HEjUjQBgcpxYXosu",
  "key14": "4c8j1N33NNwXSkCsGnnSvm6AnhdEsEFPo8G1Vwto5JA1BrrAmq3rXg2t2ft2w6NoxwyXgsD433Rct4prhvoRTtXm",
  "key15": "3aQiXAG3oGd7PtM6DRVaQsLKAVz2cMUusobYtFUQBanZpx7EMrAYU8zepsWqDCb2G6KhUes4yMNQXcyBu6DLvBww",
  "key16": "2pT6u6eh2ZnMSvWu1HicxV68p5BH4zG4BrWnaPp136JJAoySF2NruCvzgPZPw1DqgL5eTF26AdooKpsUzN1sUEBL",
  "key17": "4V7fuqTYJKgYxott8rUT4AruLzWqzQEk3bRLPxbYiw9tG73hhUtkQ3wH2ekjYshpJ4vXVkuvEm4pKW1U7J3xHpC1",
  "key18": "4u11vFEFDcfhYyynVEJvjsWBonS5QZReVsaYz43DcxMXA8cWsXBiDDug6AJaPGgRkM3ToDrifeL5XN6oMG7hWwey",
  "key19": "R687qQtxm3Dobutt3EHYACqBe6ARGmZcs6e2zaK6vaUnYTeWHgG87ry8qwpfE9yqVPRZ6LMtqJqgYJWExvbD5U3",
  "key20": "5TvBoWU5cZwthv6EcZMTnYyWKN4sFzTT2CSNPwyoU4CpPJ3zhCdUHvcVWjLsKuoPXvRCfysfS8hzJmQ4wjAXfMqF",
  "key21": "4xPaTjwH9ST7yY32CK2CWwTCpdSRjpNroysYqUds2P4C7wPFw5UktSvJjuudtXgpBzuQgNMNDiJFdbbtuKmXRntY",
  "key22": "3jqHZVSttKMRSFvN2azXAUiZuehu5rwkuRV5rW7Lp6cxpV77KTRVBdbixBR29HAXp8WB41zuBKaBt6ijSxLfgouF",
  "key23": "57ww54zqhuChPJRoc5Wvv5nRW7LPW5FTVr3k87TKvVGNmfbFQxxbJxqRWZdzvaJrPZ9Miaix4KrFXWZUtSLAm7rs",
  "key24": "JEgAb8KP8VFW2S8dcBwuj9vLfPFgnNsTL385dqHFtGqcUw8perkEZgCDxYDabpTNGgKfLTEgJEYofwBgVzaF5pu",
  "key25": "2J7KTyNJo45vQDbXsto8mh5jnQfy71eEWaGnuYqzGxUjdTED9ZnbVY3eoGFBAFAPg54X36qjtEpT9HqBdb9CF3Lq",
  "key26": "3XJNP35xuYV7yGmu7B181FreWS11ASzezugC1UD1uUumNcFiZrw7Bi56bgknEkefHiabF6ewdS9BdRiLWyvxisSj",
  "key27": "PGReC6zNBSeaDUcaLNeBZiqHbLdWVZrhXeHXP4Drbv95d4aBXHvZJNWVJVRy8EqFYut3sJ3sZQTCWeFR2rDfSWa",
  "key28": "3iMf2uX5Wfwt4B5gP9twraBsYwg9amLxiWxmTHk8ASyVLWZAK2HZ8xBU3sHgtyT2fMLDmBHq1zdvgGuSV8aiEb4n",
  "key29": "2s3qdYz8LzSQAs38yYr8Aar1SNu29uquqsX5EUp4R3k3MUf31GwyBPiSBBUccDe8Ykmun3RJ3cifKNYeFkq47Bbs",
  "key30": "275X7revwBEnbHCJLv3ow1zk2pPKCixitfnhGx6R9AHibXPZcCCEdVNgc9L4PkCd2kP3vTgJxuMYBgxkp5FiGaB1",
  "key31": "DNJbrtLpEioGZyFW1wZKFNdbLjnHh1E9EUmF4n48tk7cWGXUWxsLAfcQ7gPgxAp8167jaJWxiZ5bMdPS9bnCYuJ",
  "key32": "42j6v5eGNg837zq8xttESSqru1P4z3iqRR2eKjHV5Wv77QPkpt2FUwK3oZifVSnyWzAfJjfgkjimZPsFPATNmxG6",
  "key33": "5oAvdXp6syRr4a6jKva5mpiGLf86JhHPTufpyHpfxo6DVu2Lehj99cMK1Lr6PJLY8YgEb9crX4F2wGhh72BXTUhA",
  "key34": "2UnMNQ5DqvrLRQhxtFYM8f6XuVoDVLTuojURSMuEVe9gkonVvJBxA3C2pSqmn5sxE4ekGXCir6WHU6fe9aTg8yv6",
  "key35": "2dFXr442pYqwveNj2ZhQsDaWdkzhWEDTNqmkdYwxHeCQYRNqapLkbgZcdUtA6qPkKrSxC1wodm5GD5DPmaJwp8KJ",
  "key36": "4Jp4wYviJ8SGKC3hHjZ8aLxkZPmMCoytvCiBuL7tsbzkysyTpJZym1eXank5RGBRfqhqRaLiyjgnNbyvD1jM5LUA",
  "key37": "PQfVEcZUX1H4BNbQ3S73n5c6hZjJjgiATXVHAY1RUFyKcc1eac1UTj6V2HpoPWeDQVwVQBLnHnM5PpsKV1Tbpci",
  "key38": "5NmtEt5pTMJH4QPPiN3XTLFyEyGhrxUXToSJiPR2PoN7qufXyQMnTWqRft4o536FHTux3YH876uVR3CAmZ4RD7NZ",
  "key39": "2Ly4nxkMogCZwKy2uEnTv17Uj7RBZj9fGZYw4ybQe7u18MAcF3sdJoYBdLqAWAbiAsvz5EL36hvGX1qtYZtC7jw6",
  "key40": "RKFbbvf4GmBb8fAf95V56oQAXaS7PPwBMF9zd7jH67TemuZdGhveDjRwQAZK2VmFgRYZXv8q3nEKiHFTs1iJuBi",
  "key41": "4USRaJuRmB3WxJt96SXjKhJFuFVVJKeoyb7Fo67pcDq2p2eyhT6HYtJEqitvCFikyoTV1ofovh7PSoSBrLeLfqzY",
  "key42": "HiH9NNeBPkCKAhadND83pvgEkSG4CEQj3XS4TtYTkE1uzq6wzAPxpaMyKNqvLXPAQoYd3GexiQ1JbRLpw16TuD2",
  "key43": "3SS4hGPsu4HoSsRgftAFqZy71Qmi2REaBqYPEGcD6dJqy4yUQtdH8TApXcervL9nu1jxV1Fv56JXJmLEfFQCmFGy",
  "key44": "ZVyHeMEcKy6op45TFk8zuNYaEjiw7iuoEwhDVU83yyecCxwEJHxdQD1SQmrGrCtAJjeXE1bVsuEnBjyC6ufJomo",
  "key45": "3DjgcZZcGZpEjkxFgj5R5qwpdrHW2hXMhgw9NUXjqPkjyk2kAKncZi6vG2rLZWFAcWNQfc5jqWJi2eqMuCbJdQAo",
  "key46": "cNSMnP49ZXDZjUc1gjqWXyh2zgsKQSjtr1Z3BsM2GL9dizbPrHFUG5VzwWD1jagvhFkNwwWUaR8vPeAqZ9j8bng",
  "key47": "5j4g4Gc319P4SNfpteqXmo3otgYz2NwzvA3VwSGKK8Ba6BwMMaNkcBpXZ8ACibsy8saK7sMFsUGDe1sUmPkNmW4S",
  "key48": "5X5YpynujE53iXU4cERvBWjc5DCW1i9Fw6138v89y5RLz4qYmXrNFKKEsUZCSg2be3oHv8Fb2jB6MZX463omE43v"
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
