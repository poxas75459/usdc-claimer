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
    "5d8oseYUgm8esdibXYk7DKk67Y2goiWoeauKtXteXM8UaZ4zgdoG9tzLe8tgZE39B1ztKKLcandiLh4oxnNF9jNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xNS8KPtUJodyUqgqBVZPHwWpUPCp1sEBoMjRHCiZEv5S1BCuvMS5NoE6eGL3Y3QMLWeLaSCBeYNH2RLoXGpdbfP",
  "key1": "UGqHjLedCuumg7k5kujZwadTUyG5YmNGQ2SJfuixwD6SR9z9c2gftMNK5tiUM6TDYeTVWv8DpVqTvryaLMWiwr5",
  "key2": "4xwNGjMVkRtuDHbYzosgrWsf1EP96WRspkNVpnkvnFZ4kfQs2aX69DQVM9KmuhZiTvnb7P1HJAi419qP6SL7xs2o",
  "key3": "3kgXjwEoKK5E9vqYuN1W5krFWLKJ1PwYrKvrFwHhMRoKWFMcn92pQmekPxtFnQsWNeXHAD1fjQzii1bjiaWrB2og",
  "key4": "2e6wWR1LPnVndrQ7p75iiFQTpZwNaY263c5gN2JVMpWqF2PoP4XCtQtoH1ymCFAaNt1AqfQmS3tdCmdZuHvJ2eea",
  "key5": "3jMGWUkqjrKDuuNWBS6Y2CcNDafr9vyxMgqfCetAiwz5zVc2m7K4on6eE5C3pvP6m7XSbEV84rjBAnviQ3LHrTAp",
  "key6": "uhGXt6TRRU5gxESLh2KJL2fV1AobCPLV6KKs5WDgf6jwJrs69UNvLYLEMrgbAAMUmULdVJ3C8u2a8kQLthT3ktZ",
  "key7": "3PPodUjCyKtuugejJm731MrPgXnofbduEJz2xhRf3Dc4H15Zg9WxwKZZkkkYNs6X2sg4U2buc2cY8tzzDznXAudd",
  "key8": "4CDcu8ez8XbWnoqmnfzVA8rBThYJHXeBWA1nBfChGJDo1eyaR2qhGxBQ4sfUqybn2MD5k6PinsicLVzwvPP7pU21",
  "key9": "2rAVbicS5Znt6DUpC8pE7QsJYvzFdyYwHnFrJagcMPE2Gk2DNndLvKFXskFAZv5yEaRA7UbmFGziRGwvvmNVMjXV",
  "key10": "55dzgyuKXvQpV96K68PpvULpj4J7egHAtue3ZkkZjkDtkYWE7Xhvsr697ebGog4RcpMLniAninQ3zttmwWAHv5UN",
  "key11": "QiyXcgzpVCeyK91hCCe3zZmyQz4DmebL8ctAxxfCoT612Am9dnZaGVWqMdeF62EArDEnpqNrxmYHsVd9pr6hfry",
  "key12": "4FpUrfR37oEtAUH4aFkxevqFt3v3unZvETpzAd8LmsYz78qhgV8MaqA1Dc6DakpNZheJmiYRBB7BuVVbSExYVaWV",
  "key13": "5nkz8sNqjS1HQMZYwLR7YQGq1TRbFcRHxQgS3KZLuyE5rNjAUdjwnDZvynZBHWALs18vUCR8E7k41pQC4xHJffjj",
  "key14": "3h4Jns7qZDZMo1am1Za9Scf9KRHaUd1udWwtZ1cAmaJJ7hQsr6F1mC2a1NwtndCRajuMzgphJWhqdhzBjcxw5SRB",
  "key15": "3WZyturNpNB12DFyT8tnHpZbG5f9Lc9dZK1C6EjTkynyiaNiWAgfWNHzsba5qzjMSdPBjMaaRksZJFiP4dv4mUdJ",
  "key16": "2ezBxzRBZvuUxAGryjPGS56vZJ8d9knf27qMt4iEG1sHiZsp8RBomvmq3F9W9f9Ep7rqfTwtwB7E8GZj1m2w7csp",
  "key17": "5MvEMgJvhxHAXRtsXHr7aE4rJ47kZp48DRksdY8zZXqYVyxNXsL9G5Mv2jgyomssthHtSBSYcY6mts23uVyUCSpG",
  "key18": "3oc1QuTZihjkpkg9oeUa6am6A9d5ZMwQn1sP8VGF6i6dsp58k2k8JNXKBj3uqa8b682Hb5fLpRbnCjRotWd8twSa",
  "key19": "3tJ3ojmvTk6kgcQHFZJ3o3KpLEK8dcNCw2Wu4eBybj6bwCKR2y3Vn4PFQjkREd6Dp2KEwairgDZtJgdJScwyoTxF",
  "key20": "4pUTiM6wrUybpAd1WC3bguTBtj1AqJawSsT3RAWQLmfYmNZr1WM8gH4wmkXFJz2uAbgC6p2MsHAs8FeD7enaTNMn",
  "key21": "2yXqzDTQwZuWM236sKkb1D3dNoySxHJcntu4c1iiWhxeJoWoRxurHCBTsmLw976SKGpxNxi2WFL1fxppXrHPUdNo",
  "key22": "4MzFX3bZ3hEjMTiEBTTGCYij3K9Za2pukHnukrYc1ci3H4VjhZk4YzmH9fxin7K9GEuuKxLi4T3UTjq8tK5LqLvh",
  "key23": "2gq5NkeFAyFgFx2kHX9MNopFVQyEwf7E8SvboDETHBiFjaJ38BKYwnbW5irSdFe1WtpWPtRS7YAGwukwqNFQAEEp",
  "key24": "4dBGg8wWmCC1LtuEVJFispgmvMtwHGKB8QZSUNN93Xjc6KDx4T1K5pghSh8PuW2wFpU5kwQRKhFDVJfzB1XdweGs",
  "key25": "4H9bBcDhFWJXSg45PHMAc5jFK2JihohZZ9o71MLFL1oTtxYczGninZNC83qSPpiHBQuMYC36WRczoXtH5DkHsZ4X",
  "key26": "32ADKBJKs2n55rT3eoakWsRecnvk2VokXW5ibV76CXKWn1pHjQ1nJrWaT41o9y5Ki26xmiUGF8Ev4JjVJr4tB5v7",
  "key27": "41UdWgnC65zSXjDpcFu1F1M3zGHxJeRpCbVfn5vGDeKVojyNc3MK1Lr5SsJXgUKjYq3nB6FijingRvEgHavJ5QZH",
  "key28": "3KMU7BjLL7yKYoM38x4xuQdnbPhhyk1gyhkw6qTTCRiLP4HPjHFMjSsT3QDRywhxwY5vKkadsVBta2bVLEAsaq5e",
  "key29": "5rkAwkZNXvZ3Em7QheWPChdba2xRWgKqgvaCFN4TPLRmimbScTCs8VU6c94Mo4TBcmM8wY6LGuZteCo6DKQBMNSo",
  "key30": "3k97j581nFBEebs7Mp3mkFPNjhZUwLCAyTmKqxBMBxRcdY4jWSPGdJrZZsJDg9uMpeLTJTFXvyv1gGRzycwKyzsj",
  "key31": "2mQ8U9DrUcgzc4BWmHeNXKBRvLoSiufn5t3G8SF5yFcCMFH17kgp7RjZQqtSFxE6S2bRHbzYmcvFzxNW9p9Nh2Fe",
  "key32": "2vDCKY3zzXYLh8dH8VwjQyz3gkw7Wd1zLPxPQfLqsH4vN1GpPLnA27Y7Hjo9FBZHgKgx9X6vJWszz9uraKb9eEaV",
  "key33": "5CfEDWtwjjVnPvpSUhFwv5mqnbbHJS99vjchkAgHvYLhWoLy1ecbDS6RGJSCnqZMcvyzbJRo3j7KBBC7zxq14f61",
  "key34": "PM9UwqmgZ7gq2YYTpvQLeeQdgeJF495yMShkA9ZPbgsTte7skqJF3cW3bddnEaYf5xMZFj8pXazovJwDXfDvNZC",
  "key35": "4vNyJ74jFPzN2dmpqwzEjj4UTY8JqxWnfuJrFoSc8zNoSR3gUeP3H4XfB8i58vbJuyUz1ZGcvnzHnGwSUHpMXukb",
  "key36": "2hf1zWBycpVTLZQkbXQHMw4Dy6QNtdttJk7bJ8KhS1bF3mfy77n4NTVTAYDj4eRPLNm7XB8WhAYJkePaQvRgcbRK",
  "key37": "2CAAW6p6XuzwPtBiSitaNZHRMWVuFuyns3sdWL6UWj3HTEqWJppdG9wuuv3TijAtWtNfCs5WU8cKLuwPkJFazK5f",
  "key38": "4qfVgnmKKzU55MhTZkryVt6KmjYfwibYveDxM8mkGEnRxuPsAZNURaSpC9iZZBHGwjem1FTq85F7oaRjQh6wFdkY",
  "key39": "3AtWv8jtkaNaP1ZNSmFyqw1XXzRqt1bsSpbqZXC5fV9m5u62SwesfiftQZH4j66Dh3WM3tgZqJwyJR5dCgqB5rhs"
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
