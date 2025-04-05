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
    "358kpnWGgUmoi77tzFA2PJhcgDJyR4BpR8PezN5cpXnq3xEE6JjAUkF48dZormnE2RJWTey6AUrf9P3kUPguiK7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2my6eC6AjzSf3EUgogV7VtrRzor2fbxhJq8f5XJJMExNFAFUm8P1qUddzHBcTpoDNQhSrgXLRuy2R71sbyrb7NSE",
  "key1": "4iCzRuhxEyZBNHHivhhLLhfWzPxeccBHgx2PwsdDTzkZY7HkQAHwDJTEcvVfT6XH8SHxQeNzbpBwyjh94GJ8swBH",
  "key2": "3FARuhKM4LeGwrwFNZNxf4Lciep3zKu1AbZUamJpaB3v77sYeeUHKJXwCxLD9RrFoXxLD79kNab7MED93EMywMGT",
  "key3": "xyHzbD9Lk4EnyN4rYJqgegXPFWBAuVC4g2eDZYMwqRMPFr41EnXkuVbvbDsMLmMBa7jxwZ5AYrSgbxtN3Q254Gh",
  "key4": "59FfuSJ7xKzNGLbBSBbUxwYAuP4r6AhkrRyvPyavfcgLVxR3V3xSuazPDbscn56w5huygxJxttBreWQJ5kFxfFpD",
  "key5": "3zKSd3DRBietJoyNoBKfxcp8DndmQ1NVZJPddALb74BDVPNMVHamCUbeD9iQ1XBfoEDvGAAtp2ZeFcu8bEdMaCa6",
  "key6": "xyYi3qszhUKDjfpF7z4j3Xc1qw2Gt1hmf5j4MuDQdwVKSTgpN9LP1Tqr81fx1G3bW6mpA3K7qF2DxTqVbjgVTLn",
  "key7": "VnkWcxQrJDF51u99FmqVxPePPm6R49URgkGR3QmLCXxXSS5RFipjosAK6LYNyhxZd6DheawQZHh8SPR6uTAZhBJ",
  "key8": "sQhJxG1TU6ReiJohx2uinXeKJoRhSoixfLHE6Sp6pMkR1aJgP6VmMjzE636UmFwgpAxr6XGeNxH2qf2X4zjpDPj",
  "key9": "2QMyYmDFjzBowyVdPSnUnYu2RU8uqKZ8PTwGmQZhdbtErApqrhd2Yv781Gr6AXSBgpxFWCcc691EsGcqSGSq9C8g",
  "key10": "32tqVuUY5wXpQ7BhJcCAGhy8CCXmH6DGaGr5xBt9q2WZeL11dhfXbs6sZrTEN1kvWniLg3wjnKf97jWxb1HkYYRg",
  "key11": "2PrxuGDLTdeYnxcV9rSr6q2B8jqc3ANAg62tQKHBFEuRLE3P5mAgmzH3rrD9MKig8dEq8paH8nicfvLMSmirNXLS",
  "key12": "JAdk8763eEj5rTL6tQN7M5RqdWMdPjkdRQhjbAjMazZtfFBQVaDHv84GWwWkBjMxc25yGHeqUxzi35wpsbe9nDK",
  "key13": "5fPQgSdR3na6RM7TswZ3dQXfXHizBQQBytY7w7CxNrNTotJy455AUinW4joxZGdxC8SStKxV7w52nvTvaeRXBxDc",
  "key14": "2uT41ffffm8KFZ5MGqrPfigXaeMZyg2YH9ejWRhnK9mnb61PL5KH7gXhfv99HLLsrRxBroPq8aF8SRc3Sygr2SrV",
  "key15": "3gPUSaVUP2xeWAemgjNgqVfN4wyUSDRMghx4TBeouyxVKMbjmyCPtoK6UJjSEHnwojZW2CpJY5s9Bqjxw7Av38wn",
  "key16": "QSFEvJReM84tv7xUr3N7oSAaHWq2X56nT9EK5KhWHBWUvgg8vg9ExRq2YvKqstkfyJs8SPC9xHPkPq4Ubk9eBQM",
  "key17": "WEiEYu7h5SDUKGyhVsYcmJ8GV3WhvSCThtBPn2wZjbF1cUMxrEbvmQLsy5J6B6fLQYxEJociBvVcNGircecHPQC",
  "key18": "3Xf1hSR5aZRNMckT3HPaix2nLmdADRvFzDJitcpNGhYSjxG91VzheaktgJCMF2sHKhtKVbmPmLGYWWzwayNvsYSx",
  "key19": "51cp9nws8neNRWVY3uHpGzExotKmYutNKjMcQAWj8NQemzHsETnjNZqdhkAMBHaGC1ryxE6dbZpfy89m7EsJBvH9",
  "key20": "5SXXMTS7x4kyaidvgpj53Tr8T1wR4HV4yNmbFJTURwWEsYeoCmoVVBgswvGRkuHMgqR1KENgTViuPhr8NkoetDUj",
  "key21": "3sUmN2wS6y1HqxE3CCrHvuynq6ZrTDSrUQQkHJmAiQzCnRvmdJGj2DmTuBg4zw72tpuoTU7RTz6yeJ8s7vWZTVb2",
  "key22": "3VAK693dCmUkLBsH5YV9JZRo9ZEVtkNccvhmDzCXVpYdsNYaqwhKPYTLGM9EYMNpWCYyG6qj1Y14eYPdD3B6KTVA",
  "key23": "343T4E6Hnre81tRXxUMpSxPtP7AM1BKqHicwRhnocznh6hQFt99sDzmiC8he55usuNmb3Segiu2EVQCLdxd1EX4Q",
  "key24": "4MueBwbfVzxUA9RnzCXZMnXeTtHLFDgdssxNaCYf2UzktmZqqmii5q2YMM38LUBPc5kwawLPwwAGXZ6uHqcUP3A",
  "key25": "VGDGyA4VHJkKyzik1MQXiszWFco8Uks2N5fBKm3y9QBVAsNEyjCwhguhvjvW8phyk4Ds6KMKdwHnsgcCbXDFfgf",
  "key26": "NygfzAJPwdfnXkV5eoyR52DRioZT9jbUTp2ULTHSSX4rsf49KugxBJKHoGowQSR69z3B2TxteBKh9KXrpkCD1FX",
  "key27": "47kyEngDnjcZu4JDePU1AWk9PjUUBTFEAJaNTcQ4S3ASwiBswxMgZfydBTp43mDjboNjBcAafuJeyzjY2JPYYZHZ",
  "key28": "DNZmCSNmMYkZAxat5ePbZ6aQ4rguHJLo52xvafWp5ugfoa2T7EGoNtJ3nLXHGsyidD2T8r5P9xnj6SrA4K3o56N",
  "key29": "JbuFwwdcX4BzLudb7tey5VT83dwQi2DUCfanwXLhJCJMa936goHz9Ffq93n8PBfHgMusBc1NtuHL4Njwpu2oDiu",
  "key30": "A4Z2P3GYbq7Bo8SKVYPNfwuTZ8rSmjpfqitx8ushpWTpkm68jtxqCjPNhKNk71P3GABrnMyYScgcQTjXj3j9ry7",
  "key31": "5AEHG3SW8Q5tp4EuGdDyXqkfuXF5hEfDn3wswBYwF2EC4FTxUiFnmLhzsoLChjrup5a28cmPDnqVUgyccEfC4ee4",
  "key32": "34N5YJoABWetWXou8ZbWDf3duUkCnRzafWnuwQffGZ9oj5DqDiXMHeJDZeXkr78FyL9guD66XM8ZebV7w18BaZ4J",
  "key33": "5XpRHTXPFyRPkpWRNhRYJc8KCXkhrHtAagc5T7qaWv8C7pH3ntkUBadzDBXSUAJSgmGWK4qxG6P4Ym1ZdHPPQiCC",
  "key34": "2pPTQFKiwgZYScRCCXLXJMtDCegg9ccsVsF2zZW76DEUEUu8aB9tmGcVn3Pdg7A5URqGyLDxy4hZ7qYeDz3bFWJU",
  "key35": "3XJLWPp5rjwvqXwRE1a4N4x94RPUC2KCszFh2K2BPHf4FiNU553ch6Tn72awj4Bk8ycyPgVFCPeSru2UTjQJXrBu"
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
