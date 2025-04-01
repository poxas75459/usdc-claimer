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
    "61VUL2PuZ21eqAYEaBinWqjA9h7RXjpiB1dScaRD8hzkTKdLWdY4F1SWYsHZ4jLGdk622ANVtaQr7cyokiTfmwFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wwJCVwhytfyg3k4Xy6YKT5NPHj7AUiez1MsheevchLbMGd5tdJjrDgSmvx6RrVPY3NZVEbENyUqU4XRRabc1daL",
  "key1": "6mv9f8mVqD7Q7b4MtKoNTVVeSYE3ojXrWtADUknQF3ZQ9Wud2vVkh4bfs7Luj6RNzFSbDN9Ps1ydDx6jguF59u1",
  "key2": "Zb1bgWgmWgiz1atdSUTqZGyFpTWzxfqjzMf73riyBKWgdKqz3N8Rt18FVCj7MYZfre91kx3mZ81PTZtsWMTJdmH",
  "key3": "5zSLmSeoTwhWgZNNqbBLXEwVc3rfQdyeu5qc1AW6eVhUZidhxEQSbHgC9vDjS6qmiqxHWPst7cvYyGEhS3XGJqN4",
  "key4": "3YjyQcDXLhVDX9hxkDxiNSCVa6HgoijatE7C8Aknch95xop36oG21midq9fWDnBxVzZWjxhyoKNQTQNbmp6QbJPB",
  "key5": "2MhnW83H6e14ZbqDjvgZLXtivf3MgDw5yEi3zKD5xBd1JuKPxrQiMMxJY2Ltmthw2fKUnqq12k52gW9KmasqkFMK",
  "key6": "4K28qQTU55jipnjsUYjFJPrUL5fdcfnrGCG5AHuZdoLBZnTucAXF3mTtBXR9KUrcvisQmLb3wivQ9VMTcU8FfCHm",
  "key7": "sbc88v3NEZpaCE8gGBGSoetFeKqbxXbgA91SLpUDAY288VRVoHv4tpZgkLf83JoQtM87EzH8BihPs242VbvtkTh",
  "key8": "2gefMcd7cPvhAHYEpqjkH5CEjPvRSxHUYdnDq8uazD1Pyu42RnHaoAw2cLmLXa2dUu5GBNTSBUZeMajiZXaYzC2U",
  "key9": "4QqXcbvc5k4zu61y8XUfhexa45QhoDnWRnkXaL6MhLQdgLY5JstKxwWUHSLBa7r9MHr377YF3HgV9Y6PqHos1AJC",
  "key10": "2FHYA6qjArRio2bibwjygfyzBisWCHLY75HwgGksPKjrbp5LCrkWy16b4kvdZdw4z44117qoWrzDGuhhXuHus8Vb",
  "key11": "2bgKp7Xu3kDRymVP7LEzmD8vtCKgK7hcxT7aZAKuiAVqaSagTwPftZqQMtmmZznpcNtL3dtFNWXCbrqQCgETxnG4",
  "key12": "4Vd6sXWbwFjRxL77B54jCi2yirVM17kZ7zYy6jsn27Xzf6A3imJB9mhNQnGHJZQ6wFGt2U4ppRoc2JpjywzaN4PD",
  "key13": "661uAXyD6hvk9MAkjJLfnNZgoNjMoiCP47yctqKTYZDtiGH76s2mSh7s3eo4RWXRzd1oqGPvnPiWhUawLuxfwo2o",
  "key14": "3ccU4cGvZU23HKBJs49GCu1K3orfogvgJDQrW6zSRMXGdDDCqRkYixf63ivZf4iHpdBKUhx9nYPhd4uKDD2fYL6b",
  "key15": "5Rh4gEA5AS2CNxbqxRvuVweaeRPxhj1o1fKKd6acLtkffLSxQDJBb7FD4WAD5t44fn7AMXLwL9yqMkk2D9EQo27t",
  "key16": "5AP7TqumtHj3XEYQGmHAzNsDQBWoRBRkiv86h8aMvHpeUABDrLrJo7x4GY9qhfGVGk2e6Kt7MtQtXazFXeFU8T4b",
  "key17": "27f4ipXn84JfQefbKVuikUFHmdz3Mb6i8URBSSRHAErnkcx975CHBF46gDQzU9DEJ61cDxHiefeM6jztCAZKehhw",
  "key18": "3Uw2tAaevHWEXgXTKFHMUvYoU8r3qNsgQLayDpxMyr6djGPoYsob9AtLmBYtaXroDSvaxwBTsyv78acpavd5vtgD",
  "key19": "2DApFvEeUwk4Dp91dcmEvFp8dLVcPnBoY8UTP5dVhkSXedxQDvzSFS6EvT3hVpANBWkbstufVnw2pFykRw32AzZg",
  "key20": "5jnHxNwACJKZxEe2ck1JWQR8XYSakxUcEa4A4X6MU21sThfKKJZrGhDao5oVYCa7pehn8NeMxnY1QzHJshRafdBt",
  "key21": "5QoGi9Dsc8LvmNMyFKc8VFdFN67Ag636tmiphAmMEdPAFGcXioomTGS3KBrkrNY7M5Vdd8vxp8GwJJkcHBF8y2Rm",
  "key22": "UeujT357p4JC3AwQT6CwdbAWQ8VFPop8c3WTxWS9rXo1XJgvBFdE44gyHLvYTqTAifpR5vMHuYYqAoNZvHwcNzo",
  "key23": "3VTGnvN8F7Hn5GZSmvfBdifW6q7y77vb48fidbA9Qw6odS8tMNcSH6A3ciWkgciuunzGG1Nw6mk45NGzheajUH77",
  "key24": "4Rf1Cuq1zUHoDn1WTXFF7viFG8se6bHYiMjUr377NWsJ2yhoXjjpBSXRDZZ2FKg53U4qaBT3gY5zeR9WTHBbnjvs",
  "key25": "tLzZEvzU9BbnJgp1cEcpUWLMEH9hGqUrTJ745mNotns7djBmZBWAaxo3s3BK6ghXcTXxj9oqzV6CaegHRyU1sGz",
  "key26": "3jDNeRK1NSakvdiup7QAqbL7Fx9N5F3L6JDMYXyLFkZf6E7wVd2yUXuHH6YPNHEyyAV3BFMZGfWCaHR9wffcEyHT",
  "key27": "5X7SHfSsS4pyv5ibWGkR8R7tGjVdM7TjtN7E99uYbL8D5TGmvHfkX5nRigykp9yMLfAWBsm52MBF4XHr8Ptceifw",
  "key28": "3PNs9dsZWsrYVeABZcLLFa4WPUDjRCddwgbMAP2jQpvFnPjGkZQ1XFCUwg1juYRzP3cLA88hWChhsHPe9dw5rvHW",
  "key29": "DZ4veiu4abpM6oqsoR51HKZjGAgYnxqz5A6onCTkp8LPAwAi1D7mB7tiAg3SpgiHHtt4aWwL7kvij73UHopxaGa",
  "key30": "2opAcgNWrsLsF2ivyN25KfeuDbqXFPp1d53ocn8ahxa6F9D3HCuThm2Nz8tXdUZgpxUGC988J2BfQr87S8BCt5oE",
  "key31": "3Q8EYEBVTagMpjDeyy3VQVPYs7cSenp4cWGzEMYicYZbFPjFurCfAkUP16mreRuaH68oeZ9ujvkVnQk5JoZr176b",
  "key32": "TigmEcRH1DWYFk6mJ5SyKsf3ETfBmnywk82yjinMv34vWsg16fCbvfa2nqUNnCFfVok6F5AiPkZGoJb9ePQTsd2",
  "key33": "35YoNuxJ6xJHb44h4hwKWtcXU4A47ossuSExhbBnvbTcSkaHtA752711GABR5LE4MwJbiGQmb56dkHVnaDYf3ZZi",
  "key34": "5qH1kTK4Jk4rebPJZ3YWvax1gdDpUPECzFprX6BjDFNEjVn5VGJ9FNi58xha4BFxZ2Eg64imrGaz5mYV2Q83PPHA",
  "key35": "3StcjeziMWxqeq5YJzZKWcdX3friEBHu2dpAFWvsmWVtQpQLoet2XcgJrNfFiX3qWjHMNDmLeMnLCoqqR8W9tfy9",
  "key36": "5oHrkFnyvUZX53YcMVZFQHWkoRJPr2RxCd6RUHGSsH8J5rCSxjYhYQuQCq25e4KT9dZWKAv1JvWRLpvByMcP2UPY",
  "key37": "3W1R5sermDLWdvrvJf5GzHCevDV1P29VK6Fi8ArsrnQLxn5FW5GkyirHuakMHnv57tbLZmn3XiC5b5SQTm3fLJ9K"
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
