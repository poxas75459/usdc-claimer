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
    "1K3QyKEiHBess3h4T6id3JL2Gg2CbiN5ZTKZvGsth968d5YPZEVaHkoM2kzWcxBooDos3qjt1tAMQeboCEtAHeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SPNRisdKdu8W1h58jFAiZcmAxryE2U16jpquGRxXjseTQLjjsbTFdXygXNv3jM4DNtoFtEoCHzscifVEniQ1jVm",
  "key1": "4715LzXwbELRFZuxfUmiWWy87AUM1mAhMt3ugop1XYnqs2EvRs99PTWzQejredvVm3qfFRnppgCUD94zNYQCFbC1",
  "key2": "36wweXsLZgZRqcFKdFa51FuSEAXzfogjNSmAy4678ei1PsboSJXPTTxwHvvomYxSJNfD78LEMDgvChbrZcLBDDGr",
  "key3": "3PnT6nHphcGtRzmLkYLdGroQj65wPkZ9LW5EA6JSPyLeukrftAVCQqDz25LA1kKajUWaXa9vG5e46WNTakLKUFa1",
  "key4": "3MrBrRtrNcpqeCHYECfwoebCxQFGHX3RDEEHhEP2s9VbmRewnyXa3oFATU4GxvNgoMc3LMihbaGejwsVfdDvobMe",
  "key5": "3XXRjs2mM94mLdv6vt3JsgttNwGQZYbS2R51KJ3csyn96G6Vqz7uqKkMW5XrmwbuCAyRLN32b5BhrpzKtcVyg8xU",
  "key6": "5yQsKeptDPodZrUyC9pC5oRsPhMotUsnHg9xXLJgdq3zJBUnkYEzidM6z3R5oEB77FUtGmHSHzYu7Cmtq7eExJeG",
  "key7": "5rNa1mKs6xxJvMUwRBUZU69didcRxiuMrCpXFpw4jw5EYx6RZ5CNPgAdR5VFLeBMU4UKzxGtHU7cNnMmceUhprVr",
  "key8": "4ZPtna7LtScdn1MewJU3TVbW2bcWs8XaSWcDmbjs3tJ33aMEW7aVU7DLoH7gZ4Upa4T4pR5kEg2YZYtxKd9jaGU1",
  "key9": "3VpgUo2DZQpHHnKEqoX9RaCKVY8kyQpu9yWUjCpuM8Eeqc4aWW7mQWRNVBPUcLd2W56dDVvkFccQS2utMMPKU2bT",
  "key10": "64mebHMppT56ZUmLUKXUvomzCmb74pqc14ndM1Ro1xPwPBn3g6oijJBSupyeAnsZ4sTm6qRgaNA7RfRYN6zakK7U",
  "key11": "4eUFFR3ToqcqHxrf69MuJQLdHoy4aWvPrbpfG1pfEVuvgzCG31wDgTpqHCJ5YgEhM11PTM63eKvgMURCnQZ8pomA",
  "key12": "48PmyKCSwYBiFpTNi9fvEnFEx6ewmDjy7yFUpwEJf9fXudTAHfLrF2FkH32ZhkDaV5xXKT4shfLAdJ67TSpNem4k",
  "key13": "5QtYa7E3wyg5CbwwH19Hz5BBdJGZfZVeQiYSZkQdSCATzpUBQLzZex6sF2kEEyLopm74qTRjrS859sXrk5y9UsMf",
  "key14": "4tT8TG22s3KyfAySW21pQnzS4f4zDttQCmXDgW5jqFHAHfCYS4X9QraR9CXtbTuQrDkujnqCoMeDMnZGZyTiWgx4",
  "key15": "4km41JFEc5YsUKeDbZ6Fg3oqndVmV77ZrgfdJpzMuYtA5E7eCS1byy8jqjxYxTXHz4AEWYYdGE3YytSXQprXjgAg",
  "key16": "DYxWAnGh7MA75XC1a1GJhMHCDoDM3Nu51hhESf85EAgNTUDyHNSbp5mPDhP1qi6HUeq4W8hjrBbNPaX1NwB5N6d",
  "key17": "AnQgFyntxYKEouBFB9yHHXStJc5Q5WNJKDBYzVeqHQu9tBuwtaPuF2RNEMj7etFFoxjYUvG9mKaTsxGNy5cfQKC",
  "key18": "3LgL8ctK8zcUH8tkM7ugMCyZF4vVfBr5HwwTJSueATV8akZTnvhLWGU9a5QoV2MDkNKhyp3goVcTKBPhjQusS1m2",
  "key19": "4jacwt7WeBJqhuMchRRNG4MXheoP2eWcHud9VS8KV6f9zrDx74Gj5YegNGXtPqPXpyNzre2cwehHkbeHNLdt1vtX",
  "key20": "5i62JMwZKmnN1UXLevGifDF4HdDeRbziNfhyrjbjny4vM9rXR39qo1GQe9u5DKCETetxarrp1BLSbARwhpjbg64Y",
  "key21": "3cVdKXEeZ3gDMph1gtSJGYZiNcF8jVpnCGk86pYWmxMcbAMKiVL8sQGNVHYHKjeAkAXQc3TPSYGARwuMX5N9Sf3t",
  "key22": "5zggVgiahJfwgLY6WvbRZ95GpGa2NHUUcXiBrd5ft9xwQTcKBBC7zzhj43LvpFt1YienMKfg7o78DDd4WnB5mNn8",
  "key23": "5CYYn2WJmRBSkfnLDHvQQdir9smQwJqMYopjRGsJAMkjiuU6zcesZpredv3XkTPMoYfqewRkFRz2wQmcB79wtMK6",
  "key24": "1MKivBNrTDaz1KcCM4T1p7gBgVrga2gHj6tEUCaGGiskQyocihDrvEgNHkxAjV2YVAJmnfsYZnTqWGRZxDWvviQ",
  "key25": "3JBYeGVyAq1nNtGpPsGAcv6zRAFcz5m5pBzAktvzfuT8V11JMPt5yNGu8cM97GVTbr8Zp4KDF3QGQp5ein41esEr"
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
