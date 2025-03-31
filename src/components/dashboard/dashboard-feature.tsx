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
    "3E2RjQED3d5ZQZMKfP3ADd5ZSUyXxGqThmZq6xK8DVZ1ZJ3BkaQhVjqrLSWcxDwQ9tA2dFjCrArnhjVzGAP89zC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V4B9yEzMw2HsAV4a2z9Ecpmt6VKYJr961jRKzFJGGRHiLpA2PNDNC5xYaNTWinCSuqNoFL5Z2wDt5yU7fNJpg1k",
  "key1": "3J2yKQ8o9twBZa6jPKVvD6TBtkCkkpZVDFoephSse1DxoYnxbtaCMzLNCutzscpbwRrzUoALLzTbHkcuUyTJx4hW",
  "key2": "4gx4NHh1pH2kqV1eCMiM9tjstpCTik2n8BTabZA9SnXpUogWk7whZiKm2HKGhvTcsMdJGNwYUSjprP8JF1nwggF6",
  "key3": "3wkzY2aXNCZUm8QreWSyMo1bhiVjMa6R3ACUon426JQYGKTU96nEAii5Wa7vSoMWtK4jhbXBZZy4Z2fA1TkeoRDb",
  "key4": "2pQ9VqxiGmnayWGUn1FRg2SEASMK8AnfHVLrhGTsU7729DuR1gdyuNQmchhkQk1Z8gKKSg6gXBrP6x1Y2BjPD6cq",
  "key5": "4PeSarkvBCXPjT1Geyiez25tnR5rYbFzQVPLieKTK9MhbGecQAy4GrnF8J5HFT7jiCnPm2y2q67Zxcseh8NEWJv",
  "key6": "3ZP29tBbZGqdeg4PpDT6JfP41pcyGX8csLmg6HY2MZkzhrDi25Av7VDSMTmSTGKHzqhEbGznX75dkDbsKQrRx7Zt",
  "key7": "NrwT6eq89gsdwNhuAvhs4hDi3rABzmvzJ3YULotoRYcv7qCwKnDaE4aQgVoUffJWjCVDqSp5eVwAm8BvgAQVYB5",
  "key8": "2U9fFAsWMtXhU4J7gg32tLzNBUve3bwjXnyDPnAkhHu39i3mkpgemB95MsTfALPMZi52eQSq9q32atdPa1ZbS26h",
  "key9": "5MkJvNwGGaHgRWMSgezG6G38TqNdvNZpk1xGrbwi3uKqfkrHVT6TuG1tBAd5QX6sFrCFnLTtxCMrby5ydJRE6U4B",
  "key10": "3oWNFNzdxdt96NVewkUYSs7wzkBn3JUEb2r2aY9Gn6CWKJSV12NsNPePtCkkNiPNYx97acEQACp6hm9vVujDMA7M",
  "key11": "61ssECJFK6ff6QAdfG6jrUAj4VxpDxEQXUJc5Uxe7dARgUH8uyCZj2uparRUiq2BfqwY372yEqooFcqHm4ZWHdda",
  "key12": "36M1dzNNEx7iSycBfyWx4zxDLvVrnVQqHqGxMRW1nndGWnmsouK4G1LBpXrSPfjTmAEN9ndrDSR7vW72vwHDYj2W",
  "key13": "FnM9MTa4fUJZNijVVHqJ7UyLSJwuLPD5Z7Fex8suvuEXPBLQcBz65q1Gmr5osYQU7V6hkgwVqM2TQX2DKUpGZKk",
  "key14": "22DXYGRy42k98nWdS3hSsBJWrmokJZdWynybZE3ybGeP21uARucuhPyunadRxXAUoxhjThKUmQepM8VP2zeGC9HR",
  "key15": "4kDymXcy53TJMjnPAs5H91V5vm4CWCt2m7MsVUZx1QroyBfvPCV5i57Pqoqbsc7syErfLCk6p4KK8RxeRi1kCkMw",
  "key16": "2U2rTypPvroCuv959QPv2bgRG4AtZT8gqbWDZJj3mWKuaqrJevwhD1BWtHFbsGhTRtFHHvKMiGyfkrTdakDgwjQy",
  "key17": "5kF5iPPHiyvFBUMHL4FLkuW6rVWSwVfnqz9Bxuv4vCWGZVnz6dxk5kkpjyxBhpgzn4KG2robsq4cBTQvaTu2dSNJ",
  "key18": "4zh4tdwy6GFXqnoSKCKNU6Vg5FjECPpuYT5NA1ftf4Cjb5hWvAntzY2SWKTSY7goSwBbiZoUnkFfRhdZ58mM3Erb",
  "key19": "38VFX9twCjsWC6RSSVSW38R8LHhHMsvwzqHbEHDzsaDRx844EGZFnWvtxCteqhUG6nQzbNnzDE63VTpH8PTdWG8x",
  "key20": "5JVzuvaTAEJbGscoLyhkzFSG44nMwdvrX4G95joXmhhwH2PDgdTU3tDEULMnkaWjKNekzqURczergqyKQdeqLoCD",
  "key21": "M7T7p935snJ52feHRcEv9bAz5nkQrVe48NAGDckUBafkA85dpXGrb5zRxfgzijy9duVyPZTNwTaoCdYtbLrYxnV",
  "key22": "3QJqt7Sj2cv1ePkriLsVLpEpcJsHwjoXgLKX4uDCPxZfERdYzctpFW32ErKtjoCy74Cm2A25X5RV9zPAJ14ChqRR",
  "key23": "4PGWT9Eph6vG5QF8XDK9fejLyaF9fB4R8zKybX7LtfpAc5nv9ZP9hz3TqrcUAV51dfiPbihBhNjbjjaKx7RgX8zX",
  "key24": "58wZA3KKxy86pNJNofVRzyeyLpNYy7Sup95p2aRxkkTkW5bseK53WyU3i6awNSBpx7fXQG8ChdAg27JJGawnE3Jv",
  "key25": "3xCbcMGohq74EiWNQKmiHHhEQdLabMuwaq37Vp3Fi81sK7ET55aWto1AJRMNxZix231xdVWGhMySv3dgMoc3ogyx",
  "key26": "3JxQAc4p2fVenUhYQK8t2kAhcdp5SMQQV5qtn7NF6YCn95MSsoUyDKBtsrgSvqs7uixeBU9r2Yo8bZxuaTTRtEVv",
  "key27": "2XtEENfGUDEEXuwhD5tB1sZPDwb9rUdLEYdxT1YoJCx7oyGnt59x8vjSZUbsZGa9bpumuLRETmmLedyZaxYx72vA",
  "key28": "R2EFScEHzbccyVT4gsGLkzkMpQFvEkQqL45StjBwfodrZ2gef5DAqo75PfU6Ph3dXQHSWnvVdhKTZAFZ7a3czLo",
  "key29": "4Qw2BMFE175u1vuUKdGNJRwDFK5x9AYfUhdy177UsyhtmGc5anjRHRKgV282wwGKfbpg8zD5iZUnHKniuCknntxu",
  "key30": "2Ksw4ede9nyqUjJQvb7jebVLkTKnkVGgf8yjvpMdFEcCwDPTc9wwX69zdnPCo41CSLEGhoctcoKFJL5fHCKWUDz5",
  "key31": "4A2mKtQWUdWbTq6vgdsTp3YaTE8bY7xEFgQyUonHzfZ9pKioz5PdSY5Guf9n3oo4Qto72s9TqrCJ5Uxse2or4Ksc",
  "key32": "2GAT42gA1aVTUUTfq9M4eRd4S4LdxX6R3qVvVAwXCHueyz3T8g29yBtxqDgigjp1wmjHkseMm4Nn8k1dLfSDYUX2",
  "key33": "2KjrtjFqmxgzhhx5aesnh3KZCatWLuZMCUFamUtWWXXkbKbEJ8Hj2JJ7TETpSSg8YnJivDEU7VGz5gMD6PdFVWRm",
  "key34": "61CHGCM4her1xLXSNYiB4C4dk3TqKUhWBvsETELLq8askMmJtZLBBHkNUapc7dEk3YUUgr7zasa75qPAdtVVqmMk",
  "key35": "5x1iPDsjgbRGc2mgxNm92RyfckjuhSdXERuGSy5bZGhaXSccBCXtvbnA7rPM31ynsXNwcZeykYQHkW8Ccnbgdfp9",
  "key36": "3EB4bCiHAT2pA2Xit4hpHP9xRjYKczkgRfVegP1Pi4wM5tHbH3YUb9yxxyjHcyADc2VJ9T42BooC9Ec9DCYNKfvB",
  "key37": "ub1c7pedmXkfxoH6zgCarQgZBEzcGLfq46vgAYQAJkW7SWk1pn6VBtfL9nCY1bV8iToRXpK8dvNY3yvY5Upz8oA",
  "key38": "3UnpbgiPWk9tiZxbGzv99shsoHdMSnkZekUpY8NiYEpygdcH17mQy4knN2849AuYb8nnKuUc32T2nUrrY2ryMy2b"
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
