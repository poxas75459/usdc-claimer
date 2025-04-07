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
    "5mNHhWyqixRaGT5X66NRDTBf1YVDuycQNS1XzyFh7WryenCXCEGGZjsuBTKv42RM9cK1K9SwsgtbTfWezBifs89m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MoEVjoLx2qSHCSkyjFwLCUknoD65k9f6DJ4ShiUS8DDNKZGpP3j4aBNsdUkFAB4gYJAiWSxmGT3q1gPwjnfzgRm",
  "key1": "5boCk4bsQP36c7oCHFxksoRUtEUe2PaF2e5jeCqyWsKe5cQGyqLfW6QH5JCDm7Awqrr47Q8RNXYvfHqMHsgNPeqf",
  "key2": "42NTaoemQxrxh77NPUZEfunKuXLjs5rwEgHnnvmXCAG2Qyk8sLARMUkxNXdXWebaF2XXQgLcMvvcRwf1dPmaTdwi",
  "key3": "2ehqKQSaZu5F2u1UCM6HquvxSPqAaizpqoFR8capTGJDkJV7utgBiUx7cUkZ611BwFe8fmDYbPKLs4s7dqPE5AZj",
  "key4": "2h2oDmSWWmjo3ABqfV2taHiajQgdEM9ywph1GfQL23mQ7rqXmrBehqrVSBLQJdU9RHgqDiE73uUaXCLVYGBoMoQ5",
  "key5": "eNcuho8JHomhfnHVLXjkdzKGoecfnUbLqYgfe4PWdhGW8tFfgBnMKa86ZfVUqqrFA8DrZLPjUVvZcMCdYJP24x2",
  "key6": "58Wt9go7yZVAMaNrmoDK8nZe6kCY3t95NJvrNaQe7Uzd76drZC92ZSfVih7pavYo99oTYbeWU8b65zmrCs3NvtqB",
  "key7": "3xV3ZJNZfZErAnaBf4XPGtEGkvR6MooMsDb3MtusKfHeswQy9dKgCRJK7ECm1HwW9i856hAJjv2ZjtKhnEk7SA95",
  "key8": "TH6yPAMfjkPM2GSiKwNonNq72RwK4PoCJ1LubG9xR9AcrLzratEQRMk43LLRg6xK3qNefgawcCq6PwLx4thEQSd",
  "key9": "8bojxUWF4AGKWTTUwpTs2nhR1kcSbS2fLUwJPjDJ1xu2REwbxAgimsdzWQzWnG2m73QZVhLWGrzX7ihxiC4c4Qi",
  "key10": "5rvUMcb4Lxgy4atw218LiDewQbA1DA94tz5ZMbuXV7UzVnzevXUyfsfQBdQ67W4TfifJ3LGcHZ2Zy1vTud6dVWFy",
  "key11": "4bzyHaBQ7bR5p7QK5vZaQGTwAkMd2Q7JpDpzcnkWX9ZMoBExcEsz2UqRggnwFi8m9hxJHRQkVjrnZuGGKpMVMN9Q",
  "key12": "34hw6Zf152JUx6dEyPfT7jcU8PVhEGWxXZwnBCe2TqpJkC1YQuYfMUyyp1FQ8f6YSoRJTtg3RKoe76TYBzCTjRYb",
  "key13": "2S71JyryFWmm97EqAqAhWWmSxyzVBhJ5fF6k9ZZ7fV7BLSC29oTYSL8qGzQjHBm75ZW9bU8Xp1pKY1C41wR7C33W",
  "key14": "2vkhCeYdXiu7nbrvyZmMa4ZXWBXcGXe6aW8tNSsQYLRxrZonGEDd8x3DdKQD3YuxBbm8mK2e9WS1GiwT3evbE8Dm",
  "key15": "2P5j8MrnYe4zAdqTva4FAx5tM113ArkJdYqbHs3PvX5tr5FVZK9L1zSvurtYX6ZMzDoiamrKmaEfhQ4yex1JGtaq",
  "key16": "2h6g7oer9swS3tn6UA6rt25hTkMaXJFL5QYcCgwrzXrJMYA3BsdfnizbHtYoRvs9sBvBaisQ1yFmg6GbRB4ezuN1",
  "key17": "5S5EYFdkRJJdasG8r51FG7VAsy8K4gh2j8FN3uAVNid9KjSLnLwcuxnniYKvxjiLD3grZJ57GBNp5JDKVnttEKEp",
  "key18": "3bixyEa1HsCyrcTGfG73EjXsD9fdKhaUnMKHNjvJgbLcfzkLJ4MYTrwbhyzBtKuYkrVBmQ9Ci8KhDC2HwySgiRTs",
  "key19": "5sQos49pxSoC2g3AU28GSxGPzeVdhvFL7VU6g7fwzSYL4XJ4KVtfttt5kQkefJSPd8AbA1bqFX5fik6LmkgvBpqq",
  "key20": "DAeMfYsp7dnehqBbZbAMasiTJkT53PJGTmwMDPVpnkEHWK193TVytxEKJdmykDHyDxyf2fqaVDr5pJqQ2oReBDn",
  "key21": "37CmaQY6ApNGj7QxPYv747nu17MuiXbhZg91vnd1uAn3PfyMAyhWJnz6ppTk1VNhJ3yHZADehHFGqS6fXGGshUP1",
  "key22": "2dz1ugCuw9AHcFQQy4ALaqWFYVTyPWw7HwZVRhzccmKV8uvpjV9iP2GysEYuRauTT3cxYYNdSYvKBBvvGxc7G5Ep",
  "key23": "5M8gNrm7tBgK15F8g8J5Dm6y8GbqvGSewz4doGvPYaqorzehbd6ooMUgbRkaWhDvt71viyMqxYjWjuRtxVoKpY5m",
  "key24": "2uiXK7HWxbT5Db1zGpYfLavoLfihBtpU3vyonSDiPWDbRG71UeSTdcAq9x3Tpo5e5ufUt32DFBrCsKEkhUajdHQi",
  "key25": "4bYhEDGzQ2LM8yeQibKicxLELGthjyGGHkW8QJXiZn9YQ9FwHq8xRFQjYVeopwjYwECxbSnDH1d3GJgB8KdgzLhu",
  "key26": "5qNKuEosmNoTG1qDZg9Hcc3U4ykDhGipkHjJfXzgtXeFybUnkwkqQnTVVqtTNSYMqyytskKpK415m4WkmQfrz253",
  "key27": "3fYXbG3mm4corsc8J68SQ2i7vJuNyLSCx5CG5EAyiBzM2XHWEdU42s3jhDF2eNFfsBfbyfiAhnz8SgftoEPZgugJ",
  "key28": "5H2ifandP4GeqGCtzD4nmUy3MXW1PjXq5g5vc8XzokbwdwNerbAkzUXNY6AVRLuqXjXfgWhMB4616xFK4SQwLq1S",
  "key29": "5imm7his8NBZ5irWTsbFoG4oKP2Y4JFtma6LusxyMWVNY71RffxWNME1U7rY85m8cSX1ZLTHue2ZKxLz138Gziu1",
  "key30": "3fWZUjwJreJDUK4oTPXSPndEfipytu7Jkg5Bnekb5z5wdTF3gnSrmUfXtsEwwkaTgyLNhmGw1Q6uxZTsYJEsteXY",
  "key31": "2HocD2V4nukV2j17qMo2nudFE1aGv84uDEkicY3P4URiuDUdJDxMbPodt3Wnn24Cpb4gLEdqVCs2nrQ6wouh4Y5P",
  "key32": "MEFU2QwNrJv57azY26ED54XE8vBj46JA9tRY33PjAVDn356ty7cSpmuCdibCDj8B5bg9TXZkqoZsyWSHuPZDoPV",
  "key33": "37tFSjux5DnW81N7ExUpZaAvrPUN5eKQiBXJq68BXxQSXmBQVJRxeF9pVzEAqM7FNafdkERoacjqasE8ZH9b19Qc",
  "key34": "3vYjA1LDru6wYoT7cCdzHQzPvNzsHLrLe666sjATTa2f769XFzTP9i94EHU6YxtCKJu6bm99fYT7aicdnJ3hpWxx",
  "key35": "5uC5w2hH9s9yk3t4JUnHixNguxEZvKfMxDMUc9W3Qk3LuEARsxs54oqVaLrSb1CrkhBZdsVyVAoU1qnqWWHrsydk",
  "key36": "3hJQWx4DNwZbeA4zk1EvtjrnjZWqkxEkhgHxSk1dsSRBJW6Z4xd8FvvtiktsSYQQG3WaR6d9uyC9cxhmJPc49GiG",
  "key37": "3B6g7o85WFe9qR1DpBWdmh2wV48JYBaXpj3pcFGT6Ntm7tg3Brs8ftXekvkVuAQCG1ao3fbTaatmrNzvkbGWxPfY",
  "key38": "2DJDp94WHPPwDnAtvyTXTg7CCCMvdVnDFfc3M7icZXZ8tbL7KH6VCiCrKpF8nmk8CrQ6YCn9MxPngkmSKvoZfyiu",
  "key39": "2ZGjbUpLPtwZNiNvGS1BsijzhecjNuAr2Fa8CBD7Di42nRpsa12PWcuomQaZidADeNkWp7MjFJF7UrcUYfERbpGU",
  "key40": "31Tu9MZHijzLUae8diRNwseENkGMNRUzfRhpWRiGCWjabJYPizwt7FLhej1AUa26oJ2M9SPkXrXA3GKNozB5CnY"
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
