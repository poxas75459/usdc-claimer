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
    "2cnkEt8B9u2f8gS6U43AR9Yx5KDjei6o378WX5aNUA414NJGzhBNAdDUu6a6oXmXr8jHAKw3R5RCr6972GzTUDXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xrg7EpXPAsifNgC2MwPGVJfmx5DS6Q8FniFqFxqUMWJXV47fqYk6g7kB1PZPjdvJKqFnK3EdrMJQU3r6zhjxcbW",
  "key1": "3YjMGwxdrB2zjwvrNeDYz4bPWoc57GAkYFBtZQaiVoYRyFWEruyjp2TtBWbEmXF5R7RSxqMCGBGpaYPmHBvAAS3U",
  "key2": "4p6zcDW6bNz5pVySHUC7dU2Jf1YDUw56prnca1izQWuykhcmeoj2pNFtbwMGkUeeN89yLiTf7xCAB2zqqjRMXnMT",
  "key3": "5aaWVp2UhmujYmzYBWwj4E83AfowurQihWj2RqMLDgSFuak3QMepPWYUA54iJ2V8XY5N9dwuPoNuqromCcGstkL4",
  "key4": "3aNPCTkqvwHvJPFoEoJQhXAyjgHYQxjw48LpTi6nPJuaDBrAsqvmcHULkxo4WKqdHX3fz7xpoGXgRT7s5PEUqoWv",
  "key5": "2Mdhr6DTJRDbggDikLZ9rmcxkBviNLKEmoiwXxwBy3nAurZg2cMkeaWk1YkrxofgsoUUrVfChe9UjREueFkUddnm",
  "key6": "45dhMGmWnkNUeHUTqD3NqPsn9PZeyx2FjBd4YHpzuD8Tk8qopfmW2xUycpyhvmJsBUrTc2oihc5dJf1X1mFtnQ8F",
  "key7": "5cmEqMSDvBRjGnMcTUPoisv88jHyTp4kiM6HSVVMjceq9gFRXrhvdcwBNdJVWZNXGX965TQFNGbkdj5R8JBVqTkN",
  "key8": "5jvc5jWgqF3GnaDfimT8k6yxgPvo49i81d5XakTkAdtYCzHdVW4fxYWGzTfuMZcZVT5KSzQ8VypjPv9vZnUN8Woi",
  "key9": "64Wec1KphYD5DgK5EP7mFgTyoyon53rU2UXioYoixfsk1pxGj6WUmYCwyi6igCsHMBYURAzKaoGh9KwcwsxD4TWg",
  "key10": "43TymWy2AGHodGaWay73MKwKSSJCehr4LzZdYffx2GUHFb1maRPN6LHjkwDzCy3jQ19Jggftwv6Q1AkUfcCKJiVM",
  "key11": "4xyu6nsrwVZ8t1C4kvPqPT5PnQLEVfHTvCfkHKE2xpyVYNVcfoJd7TV3XTrfNs55Zc1Y8m1TdM1QWCPxEr8Qg6cq",
  "key12": "5yJkrb7in1Jm2B3QQd6kaC88Z8qU3NuQyGzDgKZy1zeFznhJRnvzRMkmbsiSAKK97ByrBqoKkri3SXBx25HaNFFV",
  "key13": "33Jg2mewRQxbFck4z3f55DzGvWHsXhAHaNZufJvWvX4jPuWEe76otMWXG2DVopBWsysFVpeWTouXMn9vm1cQ2eTV",
  "key14": "5p1yR6xxMKJxh86i1yqZ4aDtHBcbeSp5eaN7PNbHqGwkcLHcwrxQbPJpSethtR7QrAbH7RVKTF8TnyU9KeqgoDHb",
  "key15": "4Jq2VJTeTz1YzDzbHGW4hsEJn9DmM8Xt7zPYpZAsKC277BBUoFbM5FkUvudTqAorNzYdsbi7xYzSQzfeju9yxHct",
  "key16": "3bCcxmiqALKoPp3PVmoQeuW3dVo1c3YzrHKKFwKymKUTDMmwaRLcqfq9PEjNNKmjjTQGPedp7fjq7S9RyJ4NYKef",
  "key17": "5rokukAdePLUJwz4e8YBNWMmHo9JQFEJ6uxmKW9vAgY83DdjaJjzfaKHz8q81V3Za4BiHZuwUS9AmwFwLunoTfnx",
  "key18": "55w6Y6HEUzQ8tiTTkXMnwKbECByyEtJ9Fzfi2pSe91a27WZ62rq5M1J6dnJheBANQ7vfrwqGMNWvcwUPn8uZZTAF",
  "key19": "3USkX2qEny8zZZo6LqCE6Q6r3zFDoSJkomctmfEpdh2KzbXpevVwWiXK9eYuxspopMPKoFpiefTuTeJqQHpX8J2F",
  "key20": "dzprTs13yD8vJxdKmU8MM7Rw16JbRvsyH2rUu4SxkGomzDokRqtj5gTiWBveWMUr4zzKj1KDnuwz3FuiTUH36i3",
  "key21": "4YfrPBFFhH9ePZh9v7cDrZ4DqSzXGUJSMcpH9PRKn1TcbfvU2gtMk4XREDBsrca8TSgn2p289qPAK3x9vg8VQfiV",
  "key22": "5RLeTqiEBaQEZwEBRqekYXQt9Sn3aHAC4oqrwnV7AccA6AKZtBaKQYcBsdzefi1Uqi5Dkpx7GFLagk8YtXNDwLdm",
  "key23": "2ym6KjGQBHAwx31Rvn7VTuPbGqMokRwe4yz323zdNWyA5eEPdZjVxr4eZNp9mK1VFEGLdJ7WCXB1ZtQSB7Dynoqs",
  "key24": "5FsVgkyYdyqXyukGRG7LnGdMpJCvLkrV9MdgjDPnXDyrCjZM5o4wNPEkSreBArhdwaoWy62mwAj3V6eGH3PYmKh2"
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
