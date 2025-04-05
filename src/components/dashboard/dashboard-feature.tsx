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
    "3FyZN7kppKVQzJ4Tk3tYJvtEuxnbTFLdKWo4CghtixmiJ7eJG8MANLLsSpDQcPKZny76CQ48AymPhqn4a75nuhFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mq4hFgbXwgrFybkV8VPT73SYCKc4SYm3TvAfXNzqQTWkb9gcNZFfkWtvkN2nJhmamCrqUXGpRrXVfgJjFZvV1q1",
  "key1": "2KQR7p9MZuqDFduCWKZdmL8ra4u7WRwJ1oPKdDmAwBHhZbGbSgXa8m6er9nXzVV4dZKKf9ebZABH9jeJ6a7Pzjje",
  "key2": "4wEpmAxhF7MkNNeBN5h86iLeRLyMBpJGS1rAyChkpN21LuHxuADH3PB6yMJgtg2BNPdWpJzHeMQDZTuijYctWtFQ",
  "key3": "3U7eqweoxpzptAWutgZ1up3SngeJsNBv7yXGPJG5i9pYG6jsGbYXVEMEE8UeTiszGtmu7t7D8oPoWuNV1AaLdWgz",
  "key4": "5c2cvfuixtWXki2iNuzBF1T1PfjNu1pzaiamwnWsHTGbAW4H5TgCaUtm8EVDoCpaxrP7mMLnFU59VwSndGJFvmtB",
  "key5": "4QpXg8i7uWAtE6BUeknEsJDdVjshrDVmJczRgGY28spZxUS4zrc8SAMKs1GshkDVoAZbwH7Hj8avf1FGbP55hkh7",
  "key6": "2FhzZtwxYw3JsJyDTGPyEWPkVahS23M1FPiWs5pr6B4gRd5febt15Kj3dasnRKacxQAW67Bc7sKqLW9BMM5ZL6fB",
  "key7": "44QsXxugAsBvkb7PdnaXcKFKcMZtaJsatEhsfyEVwMBrCJSLrWA9ZXz26Zw3iimvW9qWEYjMDRGoQzMVgbkzoiFJ",
  "key8": "2pDjcFeB6NkceX5PAfw7haxSsVCHiC1frzX2tQYzwnPpxs4pZZZxdN8w12HAPowLi1EiJ7kNWYf11FJUsdanvfjC",
  "key9": "5t67QFTgSzcWwLZzgCm7SXi47iSku95wEam6ZCKgZhZifLwbMSkw9J7DU7nWr3B9mZsUiTPuHdKNLuS6wHyhY6Zj",
  "key10": "2TksgiymGT9RMa1Krowo4UkDdTkbvgPMVXwUD8Z26GbPTHNa4ruFZM27jebe4cPkFt78JtKwBNvT3MVgfXXycgH6",
  "key11": "3Wx6ufCbfpj33wL5gQdAfMdYK7zjGrzmeq1oN7zaazd9CZSAAwADQNLvTEgNz25MnePR74aUn9vuFGeVQg64zoWe",
  "key12": "4K4x4LFVurKb1UNt6pkrNv1Ubszyh9PD3erVyditkHyyTRF2R8W9ELdkrbRzo1GP62r6vTBAbcqyyUpT8pzyhPxG",
  "key13": "53iLycBW2oHGziCm3Z85tAYvUo5wV9zCtuj4UmeoknYjytYXYkYbCwpjKtp4g3DireZJWzPKWcjuZUGu8xwv3gCQ",
  "key14": "2TAiKWpj3nT8wS7yPudQDXRCyGx23P3FqCCGq7EhFEBHU9Bi2jEMgVD4K5smARqdESM1DxRVexQLiLkVv1GTsAmP",
  "key15": "4SHUAoixJhZAAVAsXscLp7H87soJk3VZfoLRGDNEeB2o83V4mHRcsQruagNXioBVPfgjzyRysAH5kwZAEL9Hj8fB",
  "key16": "65w6NtC6xxYzER46eQ1KnikE4mLoGDNLDhujPUVgmkWurc1QbstLbd62MmUrzAZxqm14ReAFLW7BW6RiG7oW92VQ",
  "key17": "53RUeve71misd4d2f9SrHDhGC3KUPPaqTFiLrp3vejD7E1BKLM3dVRUFeHj78hBKbi72h3j5VXNpfw61JBefzsfG",
  "key18": "kH8NkY4UY41mhKWL72C3ZgvkNfUKc6ysKTwiWZBDHyvPPzj4hKXPQMMmqp4nBSD3exe5bR5jyVLfLhCJpqDmsok",
  "key19": "5zbV1nBA1v39CDEd5ttro6pEwBxL4Badp1cm4wvP45GCyqjWZKhAcmrXvJbZiHLQDYLt4BL3gy5zyUGFCrBm7phn",
  "key20": "BSYdLhybSPe4BBqu5YYaqQ9zHTuid2Tvjmz7vALfP3vNfgm73R6Zt7Eibfj3NgVxoWrUEcz19zkGY19pbTb5z6r",
  "key21": "4KfBpCRrqJVgUrVZov6sHYLQrq4kQdTfjULN99KARTVLwJVNkuBLa3xc5Lfq5sDwym3wco6yF6gmmhUZEX7ZSSMr",
  "key22": "5GMAQzZ2yz5vD8CcbxkDiYms9unKkrX4cJXcghke3M7yrfakjKAZCLXzwp2qJthXwHdk19cqGYyVxsqMixSinJpp",
  "key23": "5AJkLz1Us2yMn55CR57yYJBVbGQ1ghichqfuMmN9qcZuwssnqfm57xq5udtDQXQXRRg4GQo7TAm9Tds3HjSHF1LL",
  "key24": "3eu1rdDbC1kbzgUXhkMh1vKjYGSn9jgcVxqt1zTWSpELrtrCGe49F7puTQUTZBXJvkSUW7BTkaj4naCiTgbuSJVP"
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
