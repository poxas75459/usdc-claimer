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
    "2uh3cW3a2wmd3n5ah2FEFKZ5Fi8FjNY6fuzQWuoZZHABvNvjDj1t2Fy9HoF5uzky2jcTPpK586zfLTnY6bUB2wV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p92g35R6LS36RMTfd4MxHjbfNh7ounrB2bbMV8gCCeq6LKeUHGBZojfv5ziKsPZJNj4jD38CFksqZUgPqKKP3Uk",
  "key1": "5ziorYK6puaeRCbT7HR27rB7whw8DpCPVJzujFidaQ9CNHSysUEVjdGKVdwfjD12jaz6JbXSzgc8m9ngx7gaRmnE",
  "key2": "Df2XetBRPMAy8DCjy3efNjnRJroVVJCFVBr3yNnSfnQXmnbVYB5RnKcFTbjsnVExh7UT7rM18xp38C1StzpFraG",
  "key3": "5ZkP2bQj6JsBAks8m8bfheKTN523NE4QRBfbYyeerjF2DYUuWqgxWNjVvg2zoic2KmoBqjDQLjb7ygyqBJnbLYYr",
  "key4": "3U4izFA9ivsM7uppmGM5BZHGs3hSuyb2wQbAAHnNUdUhLPcwF5yuqcFs9vwQSs8fxruyoycGVJRdKTnLsRGv5ind",
  "key5": "8otcuUv61aiRxEPJUC339n5zZxwCYU4YXeKsbWuznFr9KLixiCcobgBmGDe8b2rhJvB4xwieac4NUFJ8CqAvK3j",
  "key6": "42uhYaqnLXRzJYYXWBiigXNbRuPz64rGC5zy69UsfynNVcnAK35JbnyEHsJ4Tr5KEJ4JpUUxeYouZi7Ja9NPZaVV",
  "key7": "5uvR6GJZ47KzYuzDKsQbszgRMjinjn7B9Z3bn7A97CVZCGtk25NTx2W5AZrDR4UYLLG7GfchAGgjKiUMAu2FJu8b",
  "key8": "3VFeWag14yu2bzNEBz9tseKgbJ8oSirHgahrkVr9xpjEZxX8xXUiq3fF9zz8XdAqpmEzb3Dhyy4kJf3gphJBW7hm",
  "key9": "61K5RfTvznKVYqvajpN5765tEr94gLkJJrdCWvwdgcS5DSty3Hy4W3jup5vKDpWXhjDkEAypMsn8wYpH3rvjby3C",
  "key10": "4Qx3asBCMz7FyswUzjoSUAaDmFwVWG8AxDWnZrJVRCsL4Ses5DX4uKbGuuj88XMzyV3uqpHRN5beSQZvxp4xiBvp",
  "key11": "2sVsj1AFBXEqBAD8LvVH8pspxpSKoTgbULNewVAzsth57FVADwNKRizm1L9bwCkas425btEsw2bWkAFg3rYJMep7",
  "key12": "3LtmfgX2HAWGPg19KjZWJABWGRJg5cMRCVonhgZExNLM5G9EwptzaYtoR6FMfPzBeFhTqtN6PLCbVGzF2Y5q3cei",
  "key13": "2o3yDqsQWeNu8FVFcsxwtCnUTbFR3HJDHzQuVKZpHMuNJtBiGDu5uT6XhK3Cb8Y5uTYS7gmZJVSpyFXbJAattrhL",
  "key14": "2gW1p7q66HTj8SStne2RpEbtCeaWf5pavboLDgUmctZh7RsCbnDa33Wifw9UywHutziLeuBN5RCtzG41kQtacXiz",
  "key15": "2KHoc78tQ1tEa289yBNTXtzXdgy5J5Ve5pvjzZD9cMtJghn5VeJy2Be4FATXzc4okHpHihWpXCRhymJVSgWiPor",
  "key16": "2iSpu1YnbgKqxRhSTEDtX693tjEmAnWyi7LNYXCi9b5efTRa4MnYLYnuHP2wgAbatG2okozgJERg2qGyA8R8zWVc",
  "key17": "3GAn3jCrxj81rvVBG9unR6QGKSFctmGgCSiiTeqNXcz8U1vLhTFmNRtTNZjjCEfRyqQdhNW4wPuUuY9EiMgg9a4u",
  "key18": "3C6g2crBUPp5HxDLZq4fknssYrciKYJk9bNGpcWRTVBBoHUwojuvJWivnABr6r9gBGYvaCUuwXxyYsCqWzGLxF2i",
  "key19": "3rCciopHhzVQhJqVBEokFRY3honS5m6ZXCevLBURhkkbXSZtek3xCeaVpSZnVEHPcZ68Bn9YkPT15LDMTYpSny85",
  "key20": "4KBDe3y1BVMFXXRXDKB6khJWZKHWjqH2varGpy2agM7nurfjNE7ApHJHGUGLyb29S8nwvdXrsAK3trzjfBG7W882",
  "key21": "3dirFehA2WR7GLCfWKsaQUMsDZQZrnnaGhKNHH92JWeUa1LhKrQFkBmK9TumHceY9worsNpZQ6mVFZnYxLhjn5ki",
  "key22": "XFZbibndo5EwupS91k8NqPEdveikvkCizQaEiGNmJDmwWXLqEaKN8Ykh9jPXoCiriWVTyJpaoDz3T7efsDZDoS9",
  "key23": "3Pcs6fvvPt2oB6JNXH1rBSRfXdSrw3hnAYZDEVXZfBbqQ5vvfRr6j9WxqXzco8WoU5iKxFULePm6fcSWF8XQzi9P",
  "key24": "i7RwSMHLZWSmKmeUbUc2GmFvwS3wN8HohADCGSMGdsXq2BPU4XZismfCFnE8929fUbRQbAJNgPgfym3wT3gySrU",
  "key25": "4t4QVpRDXmRjT5EgdBW8toXsXqjWNKAT9jVvm5SX2hSf9bdcYWBQLGQrwoFLnWAzAQMC8SNoTYVhb3nYXEX6p6sx",
  "key26": "VXBoGTK2VM4rXpARwWPMxgtmNQ45sGZqT1F9M6gW73Vyuf2Bj2XCBQkd9ZKs6mF1KAEhrJLYKKvVt7GSTRCtLm3"
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
