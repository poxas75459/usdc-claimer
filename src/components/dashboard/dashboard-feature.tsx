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
    "3MwwR69UPzkQMeJujhn5RSPafMw35V4Y2a3SyMoEtqASXdLbnu3QxPM28jFoZx2RePCwnJoLp5yDYH5LsnoU16ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jJipHuH3wvj5EPKgh3Q8oGsYP757rvUegfJ7KHuVGeUEzBPee1Jp3c9QAE2MdRKnpDa5hj7dQCTif3wL2G5XGjX",
  "key1": "3C9QPdmdeq4af6xZ6oGG7tHqD6izMFeGb5tfpTtTSUf97J9MwKGQBLgTcnJxGA8Wm9ybxkpoaTihHxtkQ9yygrrj",
  "key2": "3mSYtCWPyJ9yPYpBCy7hRPLmGY3V6GL8d4CLLdq8Wfnu6KsSrm9hpRveBQ3r68ExA7jq28ZHd8mhJdHir8HWE5su",
  "key3": "YkNbepLhuto6JpijKQYMER5x9ys1syYadbHocbNFYoEjTpG1xiA3Hvdca5uKrkibZa3DPTkamzAmE6RLcyrRWUN",
  "key4": "5vg7Jz7EHMbRxLEdvAmesA1Ge2tK6TGzt3r89jroEDSyDkBaPg37t5Q5bbGWs2bzs61ZjrQ7EA2vuDs72nrnqJUY",
  "key5": "2yoiY9LkKSKPx5c5JhZuNZP11ExujpirFGa8KuTfc3pFubY6LnV33SSqeVd3C3mfDGT32efMLey3svRghU8rDgMm",
  "key6": "zKzF6afJvK5AjfumuwAASRorwFkVZmmHnbuSsfHyoWFNbNjKDGcuUwd1kLqapTQNbaxEWPLZSj3Lq9CdjjHoyCW",
  "key7": "58QnxuCb5XxVsVE1CLNGoBLJ7MNv4cQDbqiPmnu7rk6DiSubp7BdRMPjeYBMtDQ7oAx4mCoEAG2CqVvwCRarq7xD",
  "key8": "521eNMkkHXYTGftonfHvMxeynHL14iBMWSGWSR3tAWgHj8a3CQ7J6ncaTQhWdCThP2xKSQ1E4W78sygMCr88oTV",
  "key9": "2uGrrbskN2tDhZ4X3yjTWK3t5FE1yTzGGz82zLRBKxYStPgSYW42186sGeKFs3gC2GeRW6g4xuGnmTxD2SqGSL9n",
  "key10": "3e3gJXP6r5z9n5gYc5PZNaXEs6NGXfR9CLgVJCPbcoUChqqyDpcnFGq8hLf47AjxTEHakmzRsd3qzhcKaUBPhSSr",
  "key11": "JiSRtMBmLaUExjfnnY5Gc4LaJu8DzwZAm3jJvDHf2r2dVy2tjhFKwD6jAdvBrEuoc6uwVbWDqHMExRgRJZeaiMj",
  "key12": "63LtKgRjH4h2SUMzyyGE2qZmp1aWY7HZ4BmpA73gF9TfQeMJpfcafd9nDQ2gpMN2xxXcN2ZVDsCK1vM7i7GWitF1",
  "key13": "59eGXL2zctnBY6Dz6NuswJ86c2RSn4mUUCFkXWY9srWq7GGVsWSg33Ksip4oinMi9MUCYFGAx488NaaDHDiL8m1N",
  "key14": "4KGv4UAZKNvAG69PYDWSxHmtra7NCAnUSZzsx6v5og73PBawN4JtQvQ2KPtxzHk5eXBjcLcoRbvzoHdy31Nzd1Pz",
  "key15": "3psTiGFUTFAvE4xRR5qTEJskYBLy4CEm4zGM71btdJH1z2vToCvL6FZDVyf847EvfF55Zww5dheQ3jV7c7vVnsnM",
  "key16": "2XCwDY1iimX5x5HHpvmTmXwa2VhUwdHCVwiz1zjCMfeRiG7UQzPvU9vBe5eFvxj9pp2wY3wH5mRQN3BaCy6G44vg",
  "key17": "2jSAfhQMmxh3wbwuKhKNq41BsG95gks6jELbnAUMJhtDHVKGtZGHyomxKLhbLg2iLig3dsfDMXzKA6FaaTp9yx9s",
  "key18": "34APnTQbFPTP92Z8q6TdQj45X61nYAF73Y6FBsdsCS3nkxXynRP9xcewvKkCkz1PbyTxQ5bhnZnAvoNKXJEPkVS7",
  "key19": "3eWySEscPrqa3eCPLKmcVNRcTr5LqA4zh2sg4sYuUKGayvt2QYPLt3uA6nJfCJiBy6QQ2zCPAS1d6ieaghqPSNDk",
  "key20": "B3RebVMFD8jccCVMKwqTCKR9jAGgHETVn9Vv5xDeJMqjRMYf1NFZq6gFp1zvMTmCsmMkDohkZuECtwwpfEEq63C",
  "key21": "3pxGKywv7c6dfik4xp1D1sSq639cLw9k598Ek7DsvVZEeyxJrW8uiXBkfGghYPjyFUHw4PrC33MPx3Z5k6Nkz6nA",
  "key22": "yXejhoUTAUdDhtCSE1vpYAEfoDZMJTwgGm2Lbx8KY8cMuQ7V5RMvrThYYkShB8UxmgZHGfvYrK38dQrKWe1UCZV",
  "key23": "1YC8UX39TjfwHhvP5HhaWgfyngM3mPDHtPg6T8jz2qKLa6uZa7AamwB6yNCUcXUQu2gxQ3oUowtc1Ez5W4svmta",
  "key24": "3uFVdRcmEM8HRpgfZj39nAbb3M2zZZcP1BwugFGqPS5Xq2yDWmbuKW7dBvum24a8pVU57agufwkJCDZPQMpvSCan",
  "key25": "4WpjrEJJCNFxbLT3QxDbmqYXbZKpTnQVcC8FtNRZNdUXoCsKegdFBjsKepLD1DXKTYCaKaDrfJgJpxdqhzYwj2W6",
  "key26": "4mFCBogB8R5zYtAP6TrJrnomi1gKYL9RJbX9X1pyWoVyDCQ2EkuZmkX1BR1oiB5zVEKjLk1SAkyZ7Ajtx8qni68a",
  "key27": "2ouwN69XuzsqscyDrAQKtogXN1A5jYnKtzC7oBG49PQiJPNKt8BJsv8jziUu8ppaAboW8Rp864H1onwbS6iPUEjD"
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
