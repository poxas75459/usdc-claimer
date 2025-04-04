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
    "5SacYjQeQbN5hPC1frAgARYrKxopY4cNabofDSKVd9Y4pGaV6WTBDvQGKSXxGgX2PZ5hHFHM5VZp4vuhExhUBkWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iTKGkk3g5bKFCAQ2CwHVd3kQxZk7DzzE1pG7ibGRjoa3J6UFkxe1SZi4Qx6DYpKFPkEcZYv3SoMGU4t836VsRkR",
  "key1": "5rfjyhBNSFEuMwj9FXdu3pkTjtyFABVN2N7dCs8Kn6g7QHuiaaTfZR2kbqrr5NuzFURMEVjGycg4HNN2FcNqvA72",
  "key2": "EpfC3JJqndna3GWEm1DHR3psTWUaphWN3t5XyUJ1QPB9mipBWWEVQ4E6EjPGpc9K2rzz3Mw6BXJDCrizxjuTmvU",
  "key3": "4ShyNtvDAofhdPYBhc3CYJE1SjsComoHSv6CNTDQawMAixcUspzxs2KrQoGXqvApwj5XYEM5jBvHunVGEWdsTts9",
  "key4": "5isEtDpShY851D8Utww2ydwqJSBhLvR6VKFxhU7RFXF3jFNtcasd6onqRxys8qRLEVa8UJKmQu9UVuC8MLmYWCmM",
  "key5": "5SqpLjeWdt6xvcNVepbbVxeTvuabyRFmJsn6qrksJ1TuBJMij3si9AguWgv7e4WFBkDmi1fUCWVQDWnzX2EtxNwD",
  "key6": "3U74q9wPiRufj6hwr3x5QXeAdEsSWHTYjrYFC6nW6ym5qgCJgZ4jj15avBasfciup8Bqh5bti3FADDUczvvC3jFs",
  "key7": "5ukvh5ihy6r75zmxQ8oTdVcksdexijCRfEAm2NevKSWMbMBYxTJxY27hQSM6gHqPbUFVB9qyueX2dvfY42DQd9FH",
  "key8": "5VxWRzGkMvJ4zotcSa889BsJb7DbjCQd1EZNocuBeE9wuQHJW7bn9psRqwrM3DFBDzyhtrWiD16M1g78vcDeEbVV",
  "key9": "3pndh8grhiJNd1Ekzqqt5Ntfy6DH879AX6kiFFiMufPGkLkr4zE8aRk7PLazqX5X5JHG71omisVP77VjoKv1ynY3",
  "key10": "5FmPCShj2PfY4P5fGQpFAbyUJAVcCeWtzStdiqWjNDYnSuXP7cxqJ3Hbh4ViEJLanqu4CMAvXdAjdErAsQequTSY",
  "key11": "2gvCbGUUaDncw4uHJ4Rux5c3RNkcbKKkJD4SGJxZeifZHj3siUTqnMfe6TYtRCVZZDACLHyUPAgew96XkJdyq4QA",
  "key12": "3jxEJRwBfwWoKtQuoEzVcuszLLQ8GtixeMMiiRsAkpbpPrn2YhjQHoc3DNndJ171nsrVKiFefDNSGMyQrWvPV6GC",
  "key13": "3EoLaRq56GjyLszpcHtXEmH5xnkmsiv1yKXrb2YDGenATevPMW5Q2znq8cKkd7nLuFu1YYej1e5sqXM7zECb8fQX",
  "key14": "Knw456NzrmU4uaMxAaEquA9uDnycLBnr3hxnsbWQKsRxfnj56JSbKas6MHiEX5Zhyb23rL4eBi5REeD9j8J6d5M",
  "key15": "4k63yhU1SFFsQtNePxak1FcFo1hBKFZoMP9oUrGxSvLxHKjtkdraiusJN1u9rAFsQSE1wP7AzjRx12Hgrthqmaag",
  "key16": "4Bm6g7sUvgS8GECphtjg3ZTZMFgMHasj39Bc2sjKg1rPUDLjVrULReHwT6eeQZymgoaH7xVegiC1XaHMsYBTsGt5",
  "key17": "5R6hsXXgAGjgnfj2uFrd1HkUpjfUbVyVgGUQ89tyxWeyGWxHqFG1mP4qoqxe5orc7ZhxvGjhEfH86B9Yw9TzaKar",
  "key18": "2jD68cFSpgU5PwsVExxC9XLsNzQtLyJdFVQWX7hnkt7mVpPRssC36CfkARVDNQ3FEmcUPM97U8aWBk1s8Q3dzvev",
  "key19": "55FfWqYG95XLNBn1byy1wGhGzpkXkJioe5iBpUK8S5W4fZH3cH9Vrmz4GGKPqXwUk5xmju4YxjJg7sAUyjmtdEGd",
  "key20": "3npZrSZqW4Tufc5s3XeUf5NoAwN96x4FrGr2YH8sm9TAymsyEvQtdcam8wXgcHD5Wd8mwPqRTjcT4ARqpLYbQyc2",
  "key21": "5p6HoyLFPukhsDgD4odr2Tkm3shAGBMjmwm69XxJFrKqQRxSTQE9AtHpv9s26HAj6M6WajsCbEwEfzWMo1oEMUEp",
  "key22": "2HAPvZhNUqTPFjZvpFEcvF8VxsBNVWTZhpWnRSfuuWf3WWywApYDhv7SUZhMvQxP15TWR6KPVJvb5MVQawpwiM6u",
  "key23": "3Q8QveCDJCQuauXJkz5bSBEdMvNmDwCLNaMMxSUSrpG6DZFvCiUHvkoXyequ1xWCBUXpH2BdRMTBsZZM8JaspRvG",
  "key24": "vRJtRtoyiyZ1wcUsq8EyHF3Wi6KbnkScKtq1zBg6Ngqxni3PNyGW3WuDGcnhhB2SUX4rWsCji2H4bJAaH1U6ESF",
  "key25": "raXunYdK1T7mieRYdNRazZJ2TMu9riSx3gY8cgKnjf1DL8Q48NpJ5FpZYnTevaDqUoLia6wDWdxoQQ2gfeqXCrr",
  "key26": "5dcvR31uYWpcorbFDonhe4qrT1zR7NzGM6zXT45bJnQ9X2pE538LfyeZXKT8U7Ef1WLREdKiJWh58RWHLMu2J2X",
  "key27": "2CvgEioYhHFFKnfZGSXLn9NwYyDrdkvkouHS48gAwn1dawhj5j9ZoE5YqUqpBMBwpeWBhLEUBpzUhg8X2JUF84QG",
  "key28": "67i1xxMYVhF9EcFAaGNq6M6T9GoFPv8kwZnLAK6TuAueCix5RQiDMVsSyJGU3yDSEzLxfs428BRU8vbUFEzY3yXr"
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
