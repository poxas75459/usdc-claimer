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
    "2SLbbnfCzw3gFNfFoY3VPS42rN2kwHUp9mj2qa8Qwn1UujF7Fb3CmQr3PErnGPHTWBqeRxUff4X5QE3pNaL2QzTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aTkqbVftS6zvGWvkdHq6ijVYT3tpLFVfNwEkSPizPUVcH7xPwBBqhjgJyPhEwAvxm5RwFe5rRgZSbf5pRNbkuRx",
  "key1": "5wTxyXDF8Bp39SwosqimPYBsmhT3wC57RBvrJFf3rhzRjGqKv6jApjfnEU8UdTH4SMUMi4Gv7jKuhQbsR4Yv2Ds5",
  "key2": "3XqFD4No1ynza6Nx7B6GtpQ8TWaFoh5GFSvJUgdWza5Dx2ifPSJFdubMT9ejNxubYiSpMLhoM25hKQQFGhc6GSrc",
  "key3": "2qdzySUfX1EST5QJdLu5gwrtnaQQa56ibAgWKfQYErdfP2r1n9YpuxPcHStWHwaXeTEahLpxG87xyD1D5eiMU4qi",
  "key4": "5SUKkhvXnmsdtFmnMqdcuELogFqQuxYjRAc98EWcTSweZQV3JareAGFYVmWo6hh8W3wznjZDB3vyNy1ouycwy9zs",
  "key5": "vmrT8HowesSS8CUqRW1q9SLdiy2TDpNmpB7s2dtDbABYZrUez1xu3FGgDyaDASz2C7jPLhHgLe1eMhySNE8NLGx",
  "key6": "3n4usVtEY166vSNnyKuBiJ5b69G54sJojoMCFmUAtv68kxQthdikw6ghwm3nrZPvoniF1t9T4HC1jKFHdcuJvLpw",
  "key7": "5azAyuMkaSSBmG8f7EUy7x7HA1Fx7yXB7vxchBJF4RFBa8vWogr48uQBEnk7mQ9yjsxUnBSPTubkrjSnVPVAps1h",
  "key8": "4a2jJA8iwJDd5X5AF2WLnugefSSi9djY24VRr8gaXU84FLV1QpfmbZJDbY3aADLAywgDAU19b1rbK3uutJZt3dU7",
  "key9": "2eFaysPXJFhGhkD7D9i1qPSzfBmp1poNQXFshV9wJiEpHupRTRoF8FgHb9hNfothmcjL5LS1BSBATUYgezR615Ra",
  "key10": "3kc1RuWwKjfTyAWzxJoXWTab3vuUbTtWfNDdm3F7DhRnWgKHFxZjWd9HSV2JBjKm2dJGvaJzqrDcVEhFyMHMrH8L",
  "key11": "2fxgwqGBBe7psgQc2wLaT3KCZYSLhCeLVFFn3haeeUhWMi49a2WNb1mM5JANDiNQECJ9MPu2BK3uRwNGRGs3URaE",
  "key12": "4SR2Fg5QV6FCmohbLLtuhz8aXYm7nT61ooFgKZ56BAzcPqHGysmwDAoSsXgT97Q3yJqNMHyxMjnPe5Hwc2YfQSme",
  "key13": "3PCJNuagA6ERQQomLGZ9YFhgdgpWZjJBUoyRHyJjWdLCR3gCBzqPFXNYHsJDgtpP6D92mkTTXUDhEPkBuvNbmz8R",
  "key14": "63akn8JHV2rkjhQAix52zvK1SUcitVzWS6pwFAy26rZQEwTvdFzGmDKcpjs76rZzvRjRJRGz7iiXvoGhDjZdMBab",
  "key15": "1U82SSR6csAS8hzJ475HJwiZJ1iPigp8p7j1NvTsD17wxYWGPKPFP4awhjnT9A77dCVqYCnEVc7YTrmKxScKRL1",
  "key16": "54pqLczzAmnd3Qtb8LhYny7dgddU3dzsfPRxJPdrg3v17Eri4mDQCKsnmXEKr5w7KVD8fdoqWH8a4kWSQNaPVzmL",
  "key17": "5Htdz5vwZV7LwXgNWi9LUMfzEx2VQq1chntzaw6VaSCQ7y6JxibM627Rn2fwN3XXpJp9g2EonuLco4gPtj5oJHUF",
  "key18": "5qPkeZoFUgeKR1MCvRiCW48LmZugF9YDDqxUUpAQjCJNfv2wPirTQW1Kfxw2SEYojNtjcjqwyUpu56mDh1B1yPcK",
  "key19": "63pansZkGekRz5td2X2dg4JGU4oK79SZoqKYjSdoTcr9E59u6KHtzabC8P7W8ScCFrvmaK4BsDdKii63UyEmNFGn",
  "key20": "58AsV2e5hyrjP8wuH8rdVtsGuS5wXBfYyDmKH9ywsLAexmMuoDw9vfnqn66ZZKdJdShgv6oY7eHJMRzMkCh8BqM8",
  "key21": "3D3AYcjjgpDWEfKpTQ9TrtGnE9D1vGY5kRFF9kKw1cP7MzHb2qdpXs3gqaV6Gkmu8dj2papJijrG1auaUFDRbfrn",
  "key22": "4h5RjU63D2Gm3S78f6GvdKSLWVQ23GxMmdydwstNC162oxUJZ4LCiaLWBoQpBMsujpeWrZ4TNsiUikpW5KDPUTRh",
  "key23": "3CAZrXc7TpeYAR6di6N6xQyHmXfcom29Gzsym1hndko7yYkTpdMvuJ8w2V8eriKnxDexcR5FYDFAiKvwijtZhaZ4",
  "key24": "5fPXeq5G3bUtVjs6LyCtF3jTEtxfCYsuW9V5i9rV2Quf28iz6gDfGLsY9pELJpLBCxxUek5cSd7f6dXLAeU9DMcP",
  "key25": "3gbAUQUXTFNheeAEwjcNbtmYN1Uoh4uVLpZLvsYpaNwe7Vfqd455uAbnsWfMXHHuPkUKavjuiLUYWQrcZjAXSWby"
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
