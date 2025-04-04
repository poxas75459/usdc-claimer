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
    "4XfTjqYFvkMtJXynzYNtDVfFLQorapjYXh7cnm82Cufk2uvJwcBvzj4HQooWr2W43PxmEDBwGcqgcU9GbBj8Njku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vsd7RS1EGq9DCQioCSrMReF5x3HoKRtRRK4PWTwiit5LGmAUDUneqqvaHCz1SnimNU7htnCwa5fnaDfu5bD79Kq",
  "key1": "TsHGwQ6btRc8CHpWdrg6gmh9eSJVFVGuk3qNqLrrxkztrzvJvnCdj4vKUyoDJ9SsfotMM8AN6puAEYV7TxDmHDa",
  "key2": "2xLvAHiH4Y42tQZQYnYhzWXMJMQ52q176XrABMZmEr8me1CrSH8ywjdaYK1VX9Txe8zv6iGgVnfUF3BeEqtYteeU",
  "key3": "3WXLDe1i1cF52eCXmpgyyvAsfbocvVscsDKaM9nYrPJKixVW9ajs5UXR99wb5sK3u2s4v7qQWGqv1R66Qr7nJFjV",
  "key4": "4pWXFo3CPzzggb5dizN7B8qQkqRTMXC5E4ZhHoN8AmsKeWecP8gJVV9tAqme5SMuyuUcihi6n4R51cGf2kjvQyvj",
  "key5": "5MTkxEjeDoHi8mS9yvKQc5NPhPNze5Qr3EwoHfLCPzcKNQHAr2ChkMQGHPjeBDeFVit1v8wdmRsbzM17AwfLGYCt",
  "key6": "2E9U8CjA3rMBRktjJVjkcDctKtBkqhKowo4RWbnxstnF85gsmKRN786gcxaPBxbEQ2CjtQ3jGxEV2pc9RsdE4BwZ",
  "key7": "4FE8TCfNVJoog2iLZ19X72LKTHZvMc4RPfxHkM7wv51SZRDHyiWSA87DsgSebpn1EaHa9m739uQWSqBJt9K26fnx",
  "key8": "4mMnSXL5nVsushDsmM1RPXtd1YUqnM1tmxeQtrbUCFUN6Hsseq4uBbkmDbWWhwMGtBuuZzXttvgqgb8U7UBWbWyS",
  "key9": "3sLg2t9SioiKL6xYEF8dJAtUiNAW4LtBrBz3fmp7EzbfJ3g8Jo2A5Dw87kyPkoub4W8cL94AEMwfjiYbY3gytoh4",
  "key10": "5qC8i4pNvaPk6xB7sydUhNGbDroEtBYHTcT4q7SDDJAkcqPmKDBwitnE5PY3R2K8XNRUpsLjSFuQoFXfK6STdBSi",
  "key11": "4LwA3gNerpw3RZdmGk2sv2CnEuziH26xKvMxcnmGQjKgYVwe5DgnMgz32VmxtNDnR8dF5UrXL8AT4KMwgvEcsNBv",
  "key12": "2ZNVa3W7m8F6bYTMNzWncNuk2FKZJzPyp6PJQzqAMJhWgsGB64egbCUUXt1Gd7khjmG8EQAvV8wQXwiP2wXRYX32",
  "key13": "62WVxctgKAS9CU6We4Tqq1PEPpKWZ7czTvmvT9mivAJTRjUNUqZ32a81xCFgBo81CVeSPmyBpZFcDMY7RTEVRDHu",
  "key14": "2ktyLSp9u4B62S4jukMiW2bj9szqFFg5VbKAKQXFGcckNzjxgDAaVHUJZAu4dJAV77usj5ZQEcE4yns8f4wMJFXF",
  "key15": "2HDmzb8vrs2S3DZC2SCdqQ9puHAhiUazTetbnYapdnfFhLMUru54HzXqacGx5CBQBaZ5dXgjjG82K4Fxo1kiwHRD",
  "key16": "4zLTMGyPW3y7zkVb8tjwbksupVgsuA9MnyneKsHN5TPNieE14xwMWYyKWdKfjh8yhEqpPTjAQVaPwnK9V5nPvUr6",
  "key17": "S1MxLcA7VeEt8n3em5ChqMRHqEb337dSd3Wa6Y68Sq3ECxywDC4fvTN2PWyaN63d5ARvmut2zFZX6CmQtTStezh",
  "key18": "42dnLNHMgx8R1BxKnNdf6dLMLYr8yMYnnSfAjt2o6QnM8YHHz6XU6J9ANcpM5KJ4RxtHbMwXt9bvhc4hSYRKSfp7",
  "key19": "57rm8LHCoTXQnt8rzkpUscp3QFMjWoCbL6t4fzPGMoWhqdaLiCFjBsoDZuH9GWbAHDoGBxTemF67KZzS1xoir2CU",
  "key20": "tFgiQu5b1bj2kkXJKGoRPqzWbhgXdqimEwtrbszbxkNpenNuzoK5Et2rpxFWL7ebn9Q2x83dpugVCw4iu2BPcL9",
  "key21": "5ppzFhZ3sctgsFT3wbvLAwCFtsts6D59qNFnhL7e1kFPkvvGHXErRsXFJFprimHHVe2PYZFRpTM87vTjDa5inUe",
  "key22": "67Ba8Q4DdUFPNkUzDx5497JEgVMx2x3JhH7hV7LqoSt3eHySwN47btokppvngoKJAH1H8GUnjH9TRUfS84NjZeyV",
  "key23": "3oeM2KhUeMcfxgpg1Uz7ZczE9VUfP464m3buRAVHH5UE3hchyAePLwwkc7CBosTuCVANUgL2FgJ4Cxv4dLjuvDHC",
  "key24": "2eKV9n1amQkQ24kCGQ9C8RmBwxxBbSDHK2CZftx1LTNMrsA6E5NpGbvUXrMC1jKYiRF83qn3PekPumMSDTa1SDJX",
  "key25": "5roT5GFfkoeP7YcdGEBuQXoNvB1T9bfv6HAn3xbgeaajQV1dwZgVdjBMaCkV9zfccDW3UxUsaFKv2wZ8bqyZXESd",
  "key26": "4ZJMh7uPQQaCcVUx13q1dyPh2NYAcB5uXB2LYgK41KocdTsRcMLCibNhHiDv3y2Jw13Y4yUp7BBJ1cRa9SjuLwwo",
  "key27": "3yomd88JazGvEzqV5JQyU2aTumrHvqh7Nu9mkoBg3wJ3bVGEezbMmgQUcB9aUDEE8VkvZJh9LxJb55vETTzySmCB",
  "key28": "3AXhvRG2Ryd56fFXnHYK7uwF6Z5jHdRexyn9VtavZdDPvmKK5anZmXqEmZrJUQyRrtnaXuej1CG9KKdFMAeqPSp5",
  "key29": "4jKbxm2Ck6FFVPJL1mwvzpWf3LfP7y6tCidMdWhrWFcXQEKxa3F3F4JSeykuLqE3soqq4fB7oBhxb88WMMg2yrFa",
  "key30": "kFeDWiWMAokcynAfotbpPPuN6Q3SeyH6wqmm9KAHSEBMuazPoJvbKhVBgsnWUepxpMDfsRitNVsvN3dYTX6bcLn",
  "key31": "3Y93enzpW2gc3GzoBgUyeF1CVgnQ3fbCw69Rn2jqiRAfkjLFnZdSK6vBJMTx2aLkVvCLE7smJpHc2Y71K4igWjAD",
  "key32": "4Msr2CuPFwV8vgd4SQ4GngaZpPnoaq4KgRd5ANKmAvaTWW4oKhcAoucHbPFJTEnA5F7sW17gUxtajUUrnhWMcHNf",
  "key33": "3wuPBzacKf7YutKrrTXyM9dsBGKe9tb1Xp65B5EH35YDe7GLQRuC3YBwMK1MbVYPhieZKaKyBEV4Y1UnFQUhBoWN",
  "key34": "2tzMfRQWJtRybffaUrfNdkjZPFWYbbH7AhagZYMfTE1FG9ua5ronFwPNfnYSJ2jWSJ7iUkEbWBpM1Cz59E2369Dh",
  "key35": "4qZxUr4RxtyxmVTuW9aq9AzbZWdaCB2UJ1bQWiL43p37pmHUDdGyfn4dVhSJLD3E5iNRpP4CHMZ5x2hL7wmWthXd",
  "key36": "36RSo33zbuj7jGxXxcmTF2pKgu9prYioLPDh3vQJmwt6xfSNBDaJpBKG426aRjTcPBrsSjXN4A5dMPp7NEDnw7W8",
  "key37": "2Xt7BFpXTyz4Rpy76Dw4mAD1L9rdz8e8NPi8GCM3HEiq6JDdqKk4orELSaHuysv4A34NuRwcieYBLuSk1rLPmYuT",
  "key38": "5UicNW287PCkRStegoeVJ63BpfPPeuejCdkD6eEXgYJotdMTbJpP2H7eKM57TSyLRhfHwfTiig8btWqtuxEaFLUU",
  "key39": "Vo3YjakX1RoYFsuP9iqSWCjN39y4RWJ4LP5UEUe5FHZ3XTtJtM4P8WBxQprKba5TG8x9jq81K6TZZCjnBACnXdM",
  "key40": "3Pk5SgfnmGbNpor2hBfyqsvBJsXrdaZ5xmXsXooixkM8bjRxbDLn21nBQUAzJ44bo3erFpUSGDWnJjwDrCWFgLWA",
  "key41": "5hJp18BbjAhi1UgAhR7DvWtTcnwyZNxfPpLTUrsDy7nHvdkSVmSAgKfuySaBqoqZYzSUTSw4mF6md9adiYCCTdRs"
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
