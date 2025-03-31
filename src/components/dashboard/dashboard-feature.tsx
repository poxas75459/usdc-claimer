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
    "3Miz5hnBLSdq5YxDHAQ3noPCVjQV8ZrRBNdfJHRy46r1s8zdZhmSrAxCAU92SowdmSeiCrsf5ZEKaVmuxcunjEg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zS5Q2asah88bf6mxJxJ9xocRypH9iF6UAUAbaKEzE7mXcW3nTS3UsSxhgQiFdn8PgkmauHU8793oveiBbGwxtpP",
  "key1": "5f3kKgKCpD1pcxm9y1qEPyBoA5wGAA9fpon2HZXXeRsPR2GTS7LQ9HcPh8WaRHjkJswfppHreMuVLCRVw7oCdQVh",
  "key2": "2ZDn6QSY15xJBcGPoTMGfwQaiQPxUDRViBnmtdt6Gj86dKjdVpgUwUjFb4AiCw9Xjk3ReFMHPoVa11qhGkhbJW3Y",
  "key3": "UpkAfiQaFiwAEioVwzfWtFiwRdFaB3sgbUJ57YYoAUtsFJyVcrxWhfTkNGi3pSTs7rkeBC7SqwwgQr4xaowsjh2",
  "key4": "BdX9UUHvRne2LM65ByVdyh7gCfJaXKsjj7YognqSf9d9ko489s2cvJYRKbtn4aWU9eX9LZSDRMCv4HSvLMeikNT",
  "key5": "2z9gX4Aqnqx1BJALj5Nh1feY1X7gFh5zzRpt7X2GYBsHysFgECLo1jgZAmiF76Rmv3fezEukuXiu9wxvUNAP2Vky",
  "key6": "TVWRjfxSSFUG95SGQLktayJPpDrGvaz3voh7S6BZs1mDgZLt3Di2z8xgMK7UzxEkfhw89wn95L8dJZVMNtjygtb",
  "key7": "2ZEv4xx5P49Qg92fxBJm1F2KVLwtuT8Zn7nTikBoL6pbkW18qRsrEcivvyQ5xRA5TZZdGR94SQPA3DPK3P6LtaEG",
  "key8": "3ZyZ2nuZQm5HsDdYdQYkuWbWwRCrYj5oQrrbHcMfjxTJeC7fWxgQKAnF67U8cHTBzpeoZWYopCbQK897krnpiFZn",
  "key9": "2RkqEvWx6n77PY9NF4rKd4ecwgha5dcKzM6zk5SzZoWtZBedbt2jrBF4JUqRn8jq5MXwhgGH43qmsSTyCvHyNsDy",
  "key10": "cu6t6gmaZAr5FvAvZ4BVBf49i3sqb7sEr5tChBLiPqgY4U9o13cb4bzyqsR5YGE1DJS4o6R2PDHRZLoD32VpVtM",
  "key11": "3xeewmuqhfjLpkH6z8ruXYNnTED6bgHpiow4vGjurayg4uQWSX8qcqCxpYnkrsqWGMgiZMMut3qfSbjN4auaHqoX",
  "key12": "3tjHTDJUM9eTUbTgvgS7h2ACN6kkNSvKMQwSGwBmaS4MA9Moe1GffoLJLG8EfQJhvJ7auMcSTPXMWPDr4YjGsouX",
  "key13": "66tj624q63L5fhtV3VYxHXKaDspog8Wn5RQ5bWWVwJobQDjhTKYdck3gvhZgg8dbnPyQr7e736m5Srcpaekc37mT",
  "key14": "2a2vf3Zuz2kCFbvrVXAMbjEhRJhEndBuFH6gzagsFgoyBjQ1SUgxM3z6Nh7U3TAvuV66SEfqGF2AJV43GUaVU3MN",
  "key15": "5mnR54jNjmU8U2NQH3GRfQuYwxDBgtan7H7bs1e73TQKmu93D319Rkv64NiNwymCfdMBfqbMWGvwMm1231p7Y3tF",
  "key16": "hwQMFov2LjuBPJ3dWN1JEFBSEURhnEfqcPJbRJvRZcJkjhEVyodmiYfSupTNv55EqpHQuaSf8pGbky9ChBs2Fbp",
  "key17": "5XUfvkeLVBoQyLsxwhh1cmBgkXhyHnZGVMMUrfRLNpS4PpnuWZzyPaLVTRdFhAt86m93SUKCcZqMR8UAUTTWZ5MC",
  "key18": "4b32JSzkFZEEASAL7F3wgWu61NSkdriC1hyPtEUzKL4izqtvVrq4X3JQAnnuWeuMbtYfvAYhqNTkd75R3iZCs8LJ",
  "key19": "xfDWket65qmqrMY211H5ixSpDJ5gTsBeSmC8eUMei5qDRfnpPq7BGUghowFoMLj28e46XPE7LP583SJiiD8QARs",
  "key20": "2hmZRQKTR3RWfT4wyQHbCW4D8bW3YL7n8iRB9TKFdRAQs1FVCEtgNasHSrAfppD6J816VcHA1Z4oUdd2SUt7m1ok",
  "key21": "4v3yGqFQLA4vKCE3GYbraBeLG8ZWWubYHDbzqhVDyV8oapi3jHTpdxosLY4TGGGcBFPU7CyHCK1nM8bPtrcGE9JS",
  "key22": "2oNrC3Vq4no6yDoswzGwVTn8F9gc6kDteQ15u9N8v76YkSUZRDDBnEi6A4F77sS1zKY2vkKqNGXFWweqSiREDNK6",
  "key23": "evXhAGUM1syggWKLSw65oGrUDkJi1BAP8sY6fr4hGnvxKuRWwmSzistTUxB1hbLn2ShBnaJUbwDrGULuP25HCWT",
  "key24": "5kxfu9pDaXvWj6Bc5uzXNVW7ifxfToVmbh6NQeJu84CVEteuNiYRxL5hpGrUnhDbwT2H1WB7oK2JRgH3fsPxmyA5",
  "key25": "4NQs7WPqYPtLLe8MXrVE5uxWs2TddHSK8vz9NyEvE8LFaLUYBiXe1whFaZ1dsrh7GR72arjHcbjR3fpiyHsvubbX",
  "key26": "32YnrpDy7tYgmJh2EitKorwA1hgiUyfrBW8WNxBgjdZxzgfYgVNJaWgRuXA5WnffmVQetNz9LrwW7FgLke92FFXa",
  "key27": "3uUiVPV2DLe8mAS2SGd3FGUw5txwxT7XjnEAQoHcnZBrCF2hXbLDkxhtF6ZZQQS9C1gVCt86BpbjJRehjruU275L",
  "key28": "3HSPct3tUBhEBw9aiXhQZ97Tpacw3kbUfthuBK4fCwMRpnsnYc4jAX4kWLsUAwVpjLZqJHYnGTKyhTFyroZfFqKW",
  "key29": "2o517iebQhHW2urcRD1NnJpJovVpYtPPd3gPYM1MLLV5eemLsqStoqrZCrPVGDvnffw7UohHDRbEQKcRge7GgXLq",
  "key30": "YqBvUNW3iqC17eKZ4u7KwUfsFoRfWZCNWHSQ7zVt6PbA1gNNeHyTRUywMvuDnKe1Zwr1bHHBvAnvJ7LAagSJbKF",
  "key31": "ALajwYTPqdseXwVd1t8X37K2jx5gbJhfkonmskw2MtUPp5Y9X5swprs8cyWE34xyA3cDtA6iu9AwTL8CM5EfcHR",
  "key32": "5jMZgmPEcM76e6gCYpdteMGo5FArGQpv8ZmsWZniBVnkok78NmJmEnkLX1bkkF252J9basdHhWEEq5KRhFfNB9j4",
  "key33": "22Q4DXTSuXXvZc9CB6aB4oYHQ7pFPKbH8wx8FgUCE6ESz5ATe31s1eLTfVVEUygMf9nV5k4CcXotgsspQMo9Znt8",
  "key34": "so3x8LnpB7tsdvkgmTexeFpjbZcr2foNpujh19JgPaSk5EZk1WVqKusNSM9aHzvcR68vG8UxjDH9bBHNTgAF95X",
  "key35": "46enHNgZyd6iWWxRbuLMR3QDT5edj6UYcUsVszsZ1GBModkroWr8Uio7eAbtZrek4mK1Aq4kAyyGzuhQibapTkpm",
  "key36": "3C3GMFx6WJgJ6L7zBTN4cqv6v9nvLGyegGfg865dXo9zF3toWbzR6Qka96SAty4Egots7ERwHg4drTasg3TSGQP",
  "key37": "5oz9DncZ3YpYxE7GFRRkqWsxhRX7xwazthGdFHPU9r5s2ypxHP59U414zCSKhA5LJax8QAad3gwStT79SbQvmYuB",
  "key38": "26a3npCKAB6JbaVV6Jss55tnDSGvc2AQPzsWD9pZH2CfdCAGYoQxkPSJhp8Pw8MdEmTKVpufZrbPWRiZtdpEfd3h",
  "key39": "4UfMHYV2VWN5k7BzKAzR9u53GpqyNmuyC6X1aRxazgcb5AnqJvou78MQWQKNruYH9RkgKKeMJ9metVeohLEm4xNu",
  "key40": "3edAhVM2Zfwwqw4W4ixTCb7g82ZSD9eh6cVkrYyzFRRJwsMrHYDijaKw1S3er2oHNyVT44dBVdzJrqsyCgFdgrA2",
  "key41": "2h9ApoXZokxMJ9FLoxaHMsxLi7SsPRyt8QQcbs9RbVXCbCin7ryTwmFhBJwZgsdgvJccYjsqvTtp7NcEdxWiNT9o",
  "key42": "8KfvEYpFhscirtgJ8toZA6zMJLTyHf1Fj5JeKcw59VE3tELW6xs6RtV9UB6Gxk6zQSRdnMy1HQ44BTGiQqg5dic",
  "key43": "5dSog7z568BdSUYLG6VHEnr4x5tbhr8B9Hzeko3aVvJNj7Y4nUTgEwkf3h6NA3uWSni7H5TeGf1bJ8A27SGoK5mi"
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
