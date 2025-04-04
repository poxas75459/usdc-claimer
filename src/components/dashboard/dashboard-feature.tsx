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
    "5iuCU6YgsuywotGNMiggPYbmNH5Urarnh438ZNkbcSumbqVRBfmwSf4rkbtnWWjC3tri5GzGCPv5yMcAdtJfqDS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pmcUZH997ouS6WoNf8QUDPuSMqctqeCHCVrnqEHNHbVNxoo6eQoRvBLoyFMwpp3ExdgJPPxSSPaKrS8ZukaetWJ",
  "key1": "637YDFqNCYErxLnSPtLsbNv27vWsPqs4Aekqc193h4DvrAPPqhARPLJ3s4vSxfDkWebz2N4kkmzcRC95gnX94a5P",
  "key2": "56FCWstkMCkt7sBjMn3ALAQXWY8fK8rS9Vqk7WB7oeQjfD6PJhY8C6AZZBB56dac2JMPhwqMjzpZFKqwkB7UGY4e",
  "key3": "362ATWKeoJhxqv7LMYK6z6t4CGxhTHFg44yvMvmVtdtR8csgeWGvfebyffoNAueAE8n5KLKq5VhLqGHo5EuCfczb",
  "key4": "Luwj1NuAoc9LxVyn8d8eU8b32sHACqRk54YeA8somHkS7Z2a1MHcsQWaH9JMnzK5g1knrF2JCV8jwWzpt6c9rYA",
  "key5": "5Bro8mDdYNMQPoFnoZyoAwkhH5hRKEsBr6m8ZVvFpoHX2LGfBTPKDH13sEwbgGQNve1E7MLFZqE4MFvLyFUEXqEZ",
  "key6": "3sSwDo1GnvqThnPXaQHwCGzNcHjT4ywk7y4x1NJYExRRRwRG9ZeU32bv8AJQSCZmDrrUwxiFesEQUjsNbLE6bGTN",
  "key7": "5TmEv13r5URQ26EniY5YmuHZS8npk1EBf2NJu847qcYmBjFwAQYAJvStsH61RgFmcH9ueeHuDApp3WuegnwewHLR",
  "key8": "2Z4qLyuhvffdGzG2ALEVNNxLmkvkJAcz68K5HSLi1pJq7gLAp66ywF221GkVSH8TdqqxQ8AGgY4WBXxDgDDPaqZB",
  "key9": "2SYMs3xpRiQenhZrPKw9ZYxtrn8ExL2CsYDSn2qhcsXota1psfb1AwUT9cMFHVrVC8XbSaYQzfp2UNPayZjqWdey",
  "key10": "4Ew6qj4RtdpUjVsGdrM8hSYAfAdD5MNcXHngHpyWmnoM1Bgc3BnMqRBtpAJ1yZ9AbCjmXTxMAeARUC4XNNj25h35",
  "key11": "2SKbvQn8fveTfLvQt6fVd4ToaZiq72ND5btpNgn65yutLo91dBdTEHH7DP3QWTHa5odT5ixYcvs1LsrWQm9mRL8o",
  "key12": "2P2Kxpk51S86dim1e854Fox6fiCUgLX6VaLLkw3RuJxzsZLYNhhh9iNJSnAcbbCAykJFDbhG43LZubgoHAaviean",
  "key13": "5gpFUkoHa8FqJktuEorNLtttA7NKpe4D6CmU5pv8oZt2iRpybMux87xSFhZvtZrCLBBy85q9sV8J2NEYFJ6sy5BB",
  "key14": "4fhe3ioNfTHvMY4MYUFqd4Hp4gbF83DEvymAKtPJNQtXW44CpvFFyywqPnaTUDAmEbfLgX9YDJQ4KKFc6KtcEzdR",
  "key15": "X4ikzjH5ZRTukqdEnkkHoALrTrUnbhQvRxHPYYoBXuHKncHH8PqnUXTS3pDGYZuxt6GB9cz4rZpg58B9yEewW19",
  "key16": "GajzBRhnpKbKzGTrZryG2ihQe7vhTkHfruKbuagaXpXjduhz5cPU8sFnY8yXmjS1rWrqGSvQKCGQtoJ7xBgZG7H",
  "key17": "5cQaDQjFkKHM4ptT3rK65QW9tp2VnL5beAfavugVv9mci9qakaxMsZp2NNodeVGNoNef5Jqe3sft5XTu8Tfwyxx2",
  "key18": "2sDzDCLonm2hu5vNU6HWbKSwcwxr5Kmv6G5ew1qyJSj17wcFdMQcEeFZy12ZPtCLaTVsmzkeaz8rc1F47Xy9mqxN",
  "key19": "LCpky7a3ZnZAj2J2u77vyL8xeyFaNnHmNvxq3ccKhbaHMjsTej7qWFdysrqERAoTVsqvjrzEVRxvZUxWaHuHnmo",
  "key20": "3Lo86QHuwKYyViZqqPwEFi8Hx9m95FuMspH8MmHFHEhLh7HnwRmHhyNdPK9V3qA9AouC4xgpvqueH1TdGapHqebx",
  "key21": "2AvWZSs2giineBHaNR5HFy5Qcq6u7EscSff7xxBJD5SuPgd58bSaNvKup7BLLHyhmZfNxG16c4594P1HfBp2pj4c",
  "key22": "4vFhRc8pT7x3mhbrHak34fnPkywutkPzcPevLwXWpA9drr5dmSTkJqkHwVpEc87hheed85XXH89GojauDqjHt561",
  "key23": "eQUpHvjtKotHm1nEQtbWax1Y9yooSBgYGqtDwVhPGXipJFwobT8LbtxBuaNScaKxA9imd6FcH5icxwUVm9awnDx",
  "key24": "3wwMwuRFYLN55nSa9cXc5X2wj2VF1vfggarGNEpJofC7zPqQmgicmKcikQruijaUodJtA6fnUJP7mANzJJ7RZCa4",
  "key25": "vugGnc4ukvzWHSgzx2SxTWQhNDy8MktV8w8t9GCKyd3E9WkRYJV4qyZMwWDsLkW25ri2gKE3ptExH1P2g1khUSU",
  "key26": "3dyt48z38uqaTroPArPfzm3fB2Z26du3ys5b9enWhV1fCCiF4uDw1zVF77zA2EbkraUfAAKQhBas1VfPm57fkfoN",
  "key27": "2aF5qU7RnF4BAgGQfZ29TTxFneuMy975AqVVYBwnBWVwidypNfTyUkJRdvGCxaqscKZCNL4jAqSGNtYRBFebLnYz",
  "key28": "4M5pUc6DTADnWnds4zGBNF9mnNQi7nxfZ1uPXmN8nSy4BeKrtCPXNAn4hpYGCo3JeWpx5ZoWSADRiCoqZfzkSW8P",
  "key29": "2pSA6DTD9rQ6USGcPzRVRiXhbwg2ED4L4znvbxS8tgAbPkv7JzXfjyGvD9Zk7b1222SuF4arexqXBB8Mrw1i8QZe",
  "key30": "wPKdGDiWqSkSoLmzz49jWHkHFQwBGu92Rm3MmdHYRnCQJyiHtToVJfzx8FswLKNr1McNc9Pw6CHTC6cdE7tC7eh",
  "key31": "28T3Gu75QBenda6VfHbgENZn9LuPxvZsQixmRNNAxoaP2knELf2qFRSoiqyvP2Gex2fRkDLbiBrPN4XBscN8Sxay",
  "key32": "5emhvncnS9qTkaEVaexYcBvqQ2BFkrdUhmfZxP3JaUAvBbemqL8ikeBvHtzzDVWUxyRa9HnPSjqwhHoCPrVrZD9N",
  "key33": "4RZcQp7UUv2zkfKXMh5LTgFWugfQ2UgKD1X5qnc2X9VrWc64vaCXkB1vtX5tqvcFd2MLnQmoJkdEaAufGr5Sj4Dd",
  "key34": "PSzWeHY1jUGLNwvJcTxuCPWk1j1mXnSPQuJ57XXTwuY8kMvmNqAJnwRDKVqi23YHMmsT61AGo4SvoythRV5U4cF",
  "key35": "ginUR8SdkgW7wP5WzmTNRz7N95PGrRLgFi1Scv7W55certwCayGGXzBeLpDkiGknYqiAAzYGvXzY67QTYFys2EB",
  "key36": "38eBF7rCTv8fMGrLaBPMcbt9AwL6Z94iSBQ1F4z1utuf6cG83q8o2taALJnH7Yk5h8RTxhFT2iNmrp8PCpJ7JNrK",
  "key37": "4ypLKHXNyopGHYAaViaL6TZZ7qjGnuZ3pPw1XY9yZxbJws2rg9gc2jGx9JCtBKzikFpcwQ9mGeJ7f6DNqh1b1muG",
  "key38": "4rcgNmA2bQzUSCyac49jnSSTzEQcn97U8QJfQqVVQ45AqCsNPfKqHw3rvnjssEjL5FDTg4rH6AYVn3A6Xu6McF1d",
  "key39": "3ZAFjAAnjA8jpEE9Lqks7eWVQukGfB2eFo6SffYKXxphm11Ds8fMG4EamvgqtcBVpwPSEj6zeNWsa63gBBha8PFK",
  "key40": "4Xb7PHWfZWJAdm9QShpbZHsWYB884AQt9DYFALnpgzJQKDYqv7YW3skEcqtpTfeQ6R3pSWpt58sFLrJHQHbeEG2N"
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
