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
    "53AtyWRbU4PtBbVYvgQMQHbk6688cSRHafb9vFJkDaLsWunvZQuuvBQPdynGatLemUWGWJtMqDAurAt4pVCvNvgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tY3HkNMnxBNK7CcV2nXtkdGHSJ5tUwzffMwCDE2BZD1Nkv8NTy8VzC7vDTTrgaqvoxoU32A7DkF5SiPMvVzAsvk",
  "key1": "5sPJ6gmwpf4uxJ3Ch5mWnh51ZyE7q2dq4YwYoUiXywJcUwUmuUpukC4qbeZWfbbamQW3vJo2F1jheKB7JCAjzGAX",
  "key2": "2kbexMEuiyiCFkJm3W2EZtCgJjREmdMvKQMXDg6UX6h8snnnzg6JPwSBV2bn1KJzeSt8493i82pTqhQEaJc8Aa5R",
  "key3": "4LZcAemEr3RAxRRwUxb6g3wBDqASVmkDAtbMHqEXCYsPD24r9mZvnNU3cHy6gttAnKQSbm3CvNLhoioFctdi2nah",
  "key4": "545GkuyYrSDGtYMLmodQAZpH5bFQTH2vQ87LLPWT5q8xCKcw4XEvShY6EvEcYorhqsidxoNS9moy7EvVZx3ecFbt",
  "key5": "2cT8qHSjqsSNyx9FMHB2tTR7YecLm8GtM65CMhjN4sh3NUFwYULtLNaPJ9WHo28WAybXP4inJpRhgRkpr8jGAksX",
  "key6": "2QFHsLPzneVgbmBy1euW7vCBxbcTGS5NB1PnrBmU5BXvZqj2vy2UYuMqhYHGuFtwsUAzCUqHTyKAFnXmVhNpTqg4",
  "key7": "5j93o2qvrktbkCiwve3kvStUKXi8wrqa3oEWgbQfS9ng1ckFQP6BhQkhwDFvF7S2nLbRjY24WpSjrZhnUoisL1Xn",
  "key8": "3cNBRDsPzMKQyNSqo3YAhRkYGWzArbwK6AGGJd1AWFWDaajQ3TwMv1SDrnzmAbBYaY88art1eRf3Ln2NyRBJNC1H",
  "key9": "3pjbnekNg6JErQ5Qgosd49BUx7Su8FeAM3teY4a8xVmUithX8oqyYYzJyoiSrWVoyZ3YcQHZafdPDyHmhVMRNGBg",
  "key10": "59kvwNL86soEZ6H2LsYeKyYR5P3vyftUhrGSiSYDTZujf7FoWVVbcXDD3UYuUa1JL2fsUQn6pLmL3JXYiB2rJ4Hk",
  "key11": "31gJoFGYDbS1pnLqnDuZqHHd98ZvFsS8ecGDrJqR9p9E3znEqoPWn7qTKuMspZvisjLTCyozjh96oZpHEL93Dbtp",
  "key12": "2Fvq1xBiHwtfw86qYkmMiFpJTenjRXdHFtLqCWXkTLQA624qaYhWNcz5MVRfJSJaELwnemy84e7vimRPYKmf8uNE",
  "key13": "4TzKtFbFRFuYEXJ4ttKt7hrhm2dop9Z4iVjDEhW5Gksx1oHyHh4RudJ4eoQtgbQfAsm79cXFH9d62e6qXhmnyFhq",
  "key14": "2KSjvWz5MjFQ4Mj8feqjCnPsXtzF4EiSw4wpExPbdEpA6STVoYRwqnGG946sKvH75JGu5kxqvffSyzSD6asHfBNp",
  "key15": "48LC2z2oG5niaj72z9brAXaEhNNmoGLgZiuZEcEMAc5kUoRWZpdsDmnWQSEtb8XfDPqD63x9kPVUoW4Vxshv2P3G",
  "key16": "bScWjgakMHWqJZPbEWegigGF676upjDenQ69BncWQJDRntALyHePHmNhkzZxFnXBw63jiWFLnpk7qqx76YCnbwi",
  "key17": "3Yokdn5L6GHCfnHDmALSi6VRqMHUeJ6zzYXLMc3Ues9U12JbUyLbQpPxxzAYk4vTMGZokvhMHKU1de4uuN6WL54d",
  "key18": "pU24EnpPY82wDXUpkyX5YXq68gbSD16XSpSCscuBWZ2hzutoH4aQgZzmoNudGYKA9jH6XptjDjVk8VHek8YmS9E",
  "key19": "FCE4zbAgCVv7jKjmXDjTP5CWp4U1rmMn5crDePHFuFhiyq1GCfAyhyGNPBWtBQn3khQtFF5CDxEWHcF39zQM88h",
  "key20": "5K8jz9stASSfHUvWg74bEVnJQWzszZNX72TyVnreRz17mS9ZWMyobwfhRJZ1rDhmyyFxJt7EpQy6nfuKNKDQds15",
  "key21": "4CNMJeQ7pnBFTshHBaxbP6sQ1ZjxdRPE8KmYsgMyPseFPL3e9JCszDtp7qdC3uaD1UiSmuTu9wyV2mrUcdUAghdX",
  "key22": "27JEbiNiZWAiSYJKnSNZCwhHix92qKcANtSgNnJTGZUciTKXxErupndnH9qiNJZ7pATUEkh9qmP47UdJtP75PwX6",
  "key23": "5oWp86v3VSiqGSvZkRF8nmZtBAUXvMWRjjMam6PC1jMPr8xmqWiJKXr6C8exufEPrGogojbnZcGqAFuyUpapUMvQ",
  "key24": "2LympoN2g8VgsShd1uSDgrc77CjTCGiBpVi9emFaBdnQMjhCPXnJxBpEDXoWHmjQsDH9822gjRcYKLKbumGu48Yv",
  "key25": "2khMnJXsp2JXADPoUD246K5xktKvN6FCRv41vFvgimwr353tXyryFd3wqX8t8ncU7cRY8Td9DcuZETn1FdrCQYjc",
  "key26": "5KgxzcZ3z8h7wuBuRL2QQ16ZtZa95iTLFvENYP3pBPzrtuEewVBvgQagkBk3Dm7zbg7xoUXAzfQjpfsfQ4Rs6YWp",
  "key27": "3JnKkqsyw6Nzt595s7geqn7odezr3CW2LJMiRaUpJNhQdAt6qtnPDA7KvCudD5Z7AeFtHq3DmYBAC2Yxt7L31ndW",
  "key28": "2Q3YJkQHx8RsC1UFEVrXhGJEG5Rd8RRqqqGFsUZ8y559XrkXTS9vwZDnsBD7GD8h2Cs7D1m1qHi82JjBgtaEhLE8",
  "key29": "4H8ddKNN1PNNBkNhH1hhv68BRtFequwFaqYZqTPLVqt2K3YFRvaa9FNnZwBzGtmgcn8T39RfLBfmuh7GKnnbQD9F",
  "key30": "5YVdCRhBKEYM8MVzHWJEXFULa1KJ6qA6pm4KeB6efr6653dDzzWvQPHuKfKrBNeNgKtBMnqQEwPgd5vKCvRuUm6X",
  "key31": "5iFA4CVrCdqZzPzH9AqGHUkTUiAzMzFphJ8BtoCSSziYhAo6BXERA8TBvjERqtj8dnn2MDB9qikaVTm7xSYaRJno",
  "key32": "LvSh3n9s1mXTcSgm7bSmuSqjtF5wm79fPfSw3r27WaumNcPgnMddFvBaJN6UARFXLdPsYYbRDKaH4bZQrC3sWRP",
  "key33": "28LApQz2Qb4RmLm9WPptfosFBb1FTgneLQuuae4J4TyBQg7ZA4zDtgNzxMh61Axqttnttm7cTpo2CAwgv1fM6TMG",
  "key34": "3Fu4utDCheQB2pdHFKCvnizXT6qFZLFQ6GGFKyvVFbTuP4SWYVCz4MSPudEsE5e2yr9fNEbBTQcefgfDJPJ7PJtu",
  "key35": "zGpvLnV68AeSVvGreWSKdxXER9kEmST3VFHoJESC3hEdQuaZk4GsxVukLUYBmnGavoQpm7mSyD2WbSyrKMoFgAo",
  "key36": "kuPfGHFFBaFjstpo47ZsDiv3g6W1fMzaWFzVch9QULfwkvLD1trN5qw31bKLYPf812T7N8SGBpXkeTed8fAdB5W",
  "key37": "31Xa71P4atjV2hNpSWNbW94jq6HgmySvNf2cFRYeVGbGvSd94XEFPeXeAvTfwqzGVbD17YhST1wiM27mJ1gzosJ6"
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
