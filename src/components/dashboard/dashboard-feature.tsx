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
    "2y5x5bAPv6JRAo2jWKDb4SruhA5uTBQkVYyPCHJC4os4SWQn4dZfzyTQ6rq9RUyZM2xzp5mdZS4xgGY6FctFhFEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LuqG4JfmPk1rbTCBXN3qoLhZsSjk7Z2jm88Vkdw6btWFAAaTT9Ni74RkAaf66ofHM826KKC7Kuh5rMZsjSbBGWM",
  "key1": "4LUwHDqBpVsZcHCTqjeanNpB1BgM42AULSa4tY8TdaFeQeXYNiMUJHSB7U8gZMKK9dKvvMGCBePacq3edU4Bk1U4",
  "key2": "353qj8xAwDv14XG9cFXAnJLfskVBXQFDSAPvi3aBYwinYvNo3KB95uJ99v84RchfRs1yHDsBbPrYr2PZj7j1Fmsz",
  "key3": "4bK57h97p5FnVofZWznGTMfudGpoUYnotmQ8zyC6cxKxhwRd7mDRDutnrWd1X6dZrKWHLNa8q8AQFQiZKteNDFyq",
  "key4": "12ACvNSmmL2WVuFNZnysDAWSiWm6ujNFVJaE1ZW8UyuvioVqhhuKpdEGDmLeTucofi1AZ7ey3iprDZTUUK3TAm9H",
  "key5": "5LPtqnMYjGMPJov3WsiQ5UENXJtPvQXvREn4DpnoP7beamzwFHwwix1yGmyuwmHNRazKsFqmDimde62xQHK89azK",
  "key6": "5ixZfQsfSfSNiNJD6Q89QuQ9z3gvPMn3DQdEhFWgFrVx89sAv9xqTa1iJWAbc16deUTQsXanr1xGCv1jqGTqdNRE",
  "key7": "5GpTgRLFMfTQ2at7XDorDYQPEZJe684RsFiU8YyPRG4fWdzoTiA2s2W7NUMwAq8py5yrQvXUr4PhMevrvi9qANDJ",
  "key8": "5XKvZdATQSc9sdu3RRnQE63Q4QqdzEvSGBL8QWj7zgMQutF36X3wnMvYdmv2AHdNB7N41tp17vj9cL6zGvVMeNCw",
  "key9": "5WLPrx45Zw5UgkMEGB89wyyfMy7z2Vv8kzq8w411HEXsa4TerUXguCkAqvr9R99g62NpTBoviVNEcYZciwFZCrNA",
  "key10": "3XQmwFGKwuPkJohQPLVhNKJNsk8doMbDupKkMkPyer5mLnEkcFpUnrNGMLwf4EgLQZ7AEENzAGAovNK4LHFpaNTh",
  "key11": "3g6vQVA46tzavKhNh53c5sc6Q6cjVqMzo4qwB3cuQSSVXqVNaseKyysZaQ7edGVnN7BXbGWSi7Qwd3umd2ZAH8j1",
  "key12": "34We1cvYsUBmZk3bbsfb6uahEjbvkmqz9MpMvekTE5FokMFXQnwWrpv2a65JwPtuEfsrgXFVGJH8UfuQMqsQdoY5",
  "key13": "3BJYtf55TEKpQQ6kj5rUotSL91KGMhFMiM687V8ih8stehuXK1MnoRSMYEfvoMukMeMF5qxZZRaCjs6ytTCgtHRT",
  "key14": "38jP7ghtZJuYgVMNLLUzNB1jJZFi7gGbWxNNaQGDkzvUVYK4KDUNu9BMBwC8GN84AkkSxN8fZqYNF2UQG3atCcZP",
  "key15": "2PZ4UkT9CbxWeWG7z9Eav8ka38U3RtqkwjM4gg9enrv5yg2dgqifP7d9aijmXkx6kwRDW5hMjMs8Zm4xFPtxrCYA",
  "key16": "5mxfeBQdcwzfT7YRCJfGmonnZXuNSzZWaRPpaQEsTHUCP8G2HpfnMAQsh1UQF7JbqFAEVskUWX3GNR95nshcBD5m",
  "key17": "63fHWP1Q5fiCb4AWwGb7uGECp2FqkL5TdfyCmeHf65KV84P9L2HUj7YwZpEoYNLqskwcumVzaCYrCycJNzELpdnG",
  "key18": "4basWECNAVboQft8t2S8U7W4Lf8LaNdH6aGEpgvDDLEp14n7qQ7Mytjaqsg3a6dGKRqYK8KqT5cNfB6ZpqmS8RuA",
  "key19": "AhMDgWWbgm5U6f8UT2BApSmA7LXzCesSQ2P8M8m2Tj845n55Xe46YHt8tka4awfzRfGeqEX3x8Kb3RwnrxomkUz",
  "key20": "3ycxz4oAsburVEy8FKiASAcuajxDKwUoJ7GrxaYSVtYUNr8BvBFCdJV7xaJePRKf38HAyExvZMhdYcrvWKDxiaEz",
  "key21": "4iaCzMDpmwTarCamqR4DnHEtwSee4bMtfvLzFhq14ANDbxgwk3WWbQzZJK7iBtzQbfunvs4xbQBVehvNGAPxN5z1",
  "key22": "3anDW3JToMfbowxAfb8Rn5ZR13p1dkzShFmoGWcNKhmCj9R8tSGEsSkaW5ZAP7Z1xSJw4aa8oy3G8bS3ZofBuvtK",
  "key23": "rCw3oMrbM7ah846rmaG4uRwSYB2gJejnh5hoCHKHMv3XoZA7f2SuuFVVcdqS9dZKFWSMTbA8EjXdhXkXchHhoN7",
  "key24": "5gDyK3S7oWS1gVFZubKUmjZ7Vvk7gziE1NKYcaepcBCwX8kAwsL1oFWNanERrQuGKJE6BEhjwDkVSnGQgsQWNS1",
  "key25": "kQC7Wa1BZEYgDnmcSdDSk272zozWePLoCd9cq5B7jfZaHfjwadZGSL5Qokg9T8kkKeVifmU8z29UDKzELAp4tag",
  "key26": "4CfiQNF6dnAhtBGt8YHjDkXhi1a4TKzJzUubMRbj7HUBQtJotRqCPhhCHVrB4fevvL4dUY1iLrrcoxADA9LUbcUV",
  "key27": "3SoVmjggf9wjGweJMHsH13ztftkErT6CrJACtb6LT2gsHW4H4iUNNVnL2uhXACqBP35a4Dp23uakaWbN88yHH7BV",
  "key28": "4oyvm1gzzt2BZPeiZ5cyduVFtoCLKp2sKeADcJ6y6Q2EbVAaJMNXhH8gcT4fbq8kDB6AmAMb1UWnKFARFoEtkVhE",
  "key29": "233tbDsxvwgoU8ghhqtNUunk5YofmDs9NQbAWwofWNSspBJiZZqiWRmXftSm9g5hDTYu2NPRsnKTgKDVnCP3wUBM",
  "key30": "2wrG5JgFHaiCbFZ7gWuV3b2TxRykxLWqLvUQg2Fe5agovGxRASNEhfp2sA6iG7fu23ueTtSQsEAqZsoH8Xx1Yh94",
  "key31": "U8QT2qqdjQuBL8L4maFyuoe6CPVLDDNsTseokG1wD76HNAGE78VQcFcPtzZhAXruC4MKkvxngb9uNoe9feZYm78",
  "key32": "5uY5kDYJqM69VV5HC5rKPjm8FhSSGoRuyBh57P1aS3Q4WynbcRCKpoj9GmxaSNX46vdv45L5LroizAhm1sTz9rUa",
  "key33": "HHeMwwbjb3YNujzL9djuLqMVBojshXV6b7Uv5NR6MMaEgSWGE9kUBz5HQJqjYnSoKR3forwbYKmmj9TTvmgJyMp",
  "key34": "4ZYzGyF6JZLKaQxdJB4zZqCTNgvGLSyqv7oZymAMtHhXAuH5TDJZttCickchnYSpTCAYABg9KX3RZLGDkdbN5JeT",
  "key35": "41VAG52vGgfSsNke9tzAZ2PkzDkreqAH7zoC7MNZsQNpmEW4jbpkKZH2ZpVG9676eYNgnGPiaA6bEsVGK1rvy6sH",
  "key36": "3NNZX6Az16u9hCLM7Tfthpwk2vvjjWrmVYhCKU1oHCM79W3nbsgmFVi8tQ77bk3Ko3K87mFf2otEfa8FZVLmnqAk"
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
