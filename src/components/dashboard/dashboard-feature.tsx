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
    "3X7BdTzDJu8rhZ5CFbFeE7hURpQxo13adkgDFMnDR4j24grB4w7vduQPrY9wU1iCW8R1cNguLJkgcFsx2pbLchc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JyGqz2K6VYKorem7ZE9qsQa9U4JRHZqhrE7njLEQRaVAMn1vms8EFPFS3tTNxs18xZYLT5tFqLvQaRsaDNiac8j",
  "key1": "54TrXoFYjUfxvKrUoQu7tbGsyMTvBAEjMsQErhpkWXTYiEKLtpYceq2ZmCiDawARdnjaKZv2FsW3e9nAWsKZgVro",
  "key2": "4GXPZR2pQ1JcBP9CCWhskycEUUoCwtXdSJAx99deTedruWsMJi6mGy7y5J28CcrK3grsssnm76L5jD5YMKy1tH5g",
  "key3": "ieGGZQMuEReLSppDb6EY9sv4MoaPNE3Se1YFJsfiPz2Gfc9iwtToMhXXAqkWCG7DEg5KgSHoG1pzXSannawWxuY",
  "key4": "4edD4b3M8o7nV7KxsCcMpPivZmFHRE9Vbm7fZkiFrqty6JmLVy7r8jcPa2sJpTmCL5otfy7xXDHdZbLxc63xKW1R",
  "key5": "35bcys3v3XPq1fFFYLToKyWA7SWMvdgHnHn9eJoGGtqtzmAcYBwAmZsRRbysPpfWa7AQKF4ePCLYmE1LRnDKYBUP",
  "key6": "gn5z7pcxvTEsaMCGWo8TLWjnshs7vpE3B3mgBtfQ6E9fRKtdXArSeYTmvTr5MQiGZnB3FopuGQVwCk4cz23r7qB",
  "key7": "4WcdcAWc1XQKCUTGtqeZXZ7Po6cVKDi7kMNMyqcuLda6NJcxkMrajffdqBacKChMZ86m5GMctiGWPJFLrmgvnig1",
  "key8": "667L24iZMbZxoeNYQUYSJNNaFkZQ6GU6rpm1n4ij4RPbhxTr3vusgksXSizXRJ9ZC2fXNwNkQz7VE2gkHJHdH7R7",
  "key9": "4Sce953PbzjokZQ8QWVYPve1ADz5nNZc8a1JqnnQ2mbHNaqpbjp3ySeYJHxJ7af11xrmbko2ZaMnepaA2YYvTbQe",
  "key10": "3nYWR3WENnwZfMoAwX73kEft9eNyxVdSMUhvq32vHp8gLdBoEe97eU3vCvHpL2s94n3cRnC9JGvitHC5S3MZnL8w",
  "key11": "xUPjrDFQoZLoDHR81BCFuGV8aQkmMvFshCgkSYNaVhEpsb6eJdpiK1zNKSM5dyXSV34WwcJJ8vzytYumMrQE1As",
  "key12": "271zF5bvWHczWWk2kBnCnm3b4PQWcQUygFhJ6BCTpXtjsnP6WR5jg33FV37VxoaCjhTAgxGN84uRfD6zzercFALL",
  "key13": "5bcGQwBiPx9hnAix5wBSXSG6ZHNqQQzVgp1nyx91tpN7dsGUNS3U1hBJjThzhVLVMrTzsqZCRkzVX8MCgU1gFNTG",
  "key14": "29v2QjHSHvHkEKBcV6ZXmyUiq7GfRFkSNj6FX5eEcF4V8YJsXVxUUuADibVCTzSuyyvCmEgcDx6HagVuRY3jiCW3",
  "key15": "2Ead7dkFuKsdPddGpD4cE7wWaoDBG6NoEU4BkotJxUeSTLyDgkdquNuiXKSeANrr4HgmGq1HYhAwScgMD6dJHtZk",
  "key16": "4GUaCdcBfoBCXULZonz3nLsdatkj3AYudUVq7dXRQdXVV6FNmGSCk9UdEQyrxNDDJgk3Bb6vyGrjhoWxJaZnpmCY",
  "key17": "2HJhcWTR1seNMRKqbesX9qWJwHveBNesw3tiSqBp1MmZF9x1EakStbJKMtUPVHr6t6hfbY9YMoNCH1JbMvGopeKF",
  "key18": "3KbKvDgmP3v1pAbxztSMSjjKSbXLh6QRqxVYfTWDzkJ5i7SjjXpfET7BKHdYbciht6sV4KeKbXSLkcuEvSbTpuyG",
  "key19": "4zX2kpn3X7CtV3HKNeEPgFdAxAzvzbq2DgbBtkEftj7X36bHmJiW6i3RMs3grgNExGozdCX85WzZhHMEmDfQx6YK",
  "key20": "4FMF9sN9bRqgjGugHtUrMUNmt5uvXAL5exVKu6eRrXDQ1CwUypVbHRt5WQ8ZffgPag4SKSTKbqCyVTunbFC29rxU",
  "key21": "4FE4Hvb432GvfBiSAjv1EB1rwoDyKNKVKQPBeBvzgA9HebQ3wvz5AgDDcuPpmsPF21U4tu2cfXYv2HxfQWvyHFrK",
  "key22": "3JDNBq4UJ82qzp4d4SD9UPLGorASq8dZ85BCHADrCetjUSvVnJnH4nAHqXvwpb8TsLWK299syoTp5vjwS9Qsq2gD",
  "key23": "42RwPCD1XvwbKcbcbBVSJHTzgzor5dL8JDJ5Z9VeQJWdic1vGUVY3WvzVqfLohtBPp6JgkU2rRuXx8Npoq6DY4T2",
  "key24": "55cK3R1HdgtY5vVFioas8kDdLcHj2tV9YveCPd4DLH1KJM23FukGFfa4nLNZs2BhrzTeS9ZTav93U5aZSB8jTKAq"
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
