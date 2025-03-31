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
    "5WRN1c32venC5ZgHfRmULwhWyF7MKNaFjS8JYNJsAKpa8q2Cwj4ajSfdqtyeXiXUfPLodHLf5mRzTuBmerz3SmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dk7PStDiMpagX84xKjqzUDpwHNo66YpPqvUJwQZBm5V4m9pMutmWe12oeCduB2n26hDEej7qxMu1vpVdS7JcGKM",
  "key1": "5LuwbMQvo8n93Zv23menznBUuXTVM9uheS8iFhLQxT9VCaH9AgYRA7tdvBokNudjcckdQTW2VjrFKwWrPKP6rLgf",
  "key2": "31LCHHwC4tDzENa6s2bR9kXkFaY7WTN77ECNuBYWCAeBo4buT6ee8G3VT5tBneA7WdUMm6yPzuh3MEjNqzGhei82",
  "key3": "2x49KRwTARN27ghxrk5X1mL4rAnem3kbDM2Jhugp3CGwcxJStBzfVyMm5dpq1EhEgWZgaj3weHGcLJjRGx2rbmZ6",
  "key4": "2YKNVuHRG8gUb7MYnLcN3oeKmC1tn9sR4XSVr1rn5AXtQw9w5Jmf3M1FDZFUoyVhQbqiWrMoU7b8wQdJapsQ54ev",
  "key5": "59JY93P5jw1oUzUKvzAsMPqu5drTX4FWmc9zSxNvrsqGzss9CrcCS2ttuvnprFYBkjCmvfmJJPCZbY6tQu3noZ54",
  "key6": "3F6nULVSwQKMJxGdWM7HWkEFs42nwru5NtJV5LTQuFdaQc1B8XsDhvGFDAhGvgCN7qJf1wbpsUKCBQdbVQuoFHwh",
  "key7": "4KDp1Yemro9jGCrVW5n4iYtBVs7xaUzznAFSFHS13t1r1mtTxf3LSeKzorUDJMKwaqHLbf2wQTMcxyigkzXPWYYi",
  "key8": "26bpRzjP583qeov6qBWKYZG3Hw24Kyummwuyjtf9pmhvJLb18ntAfkXrV9yLRp3qcwJohDj8MVYfoQaHYD36VLeh",
  "key9": "5sdvuySTe5X2x8nZSvYscXdS85R9Nu6eKPt4fDYyookFF2Xj7sLyszxGibz9MgA2ogKjJKwUiiTwRWn2DRcRijpT",
  "key10": "uXT6SFYTiXnyPJo9gX15pqABYexsRf78B3M3Gom2cvSrXs4hGAFxfwe6XuNhxr2ns8m3dFJ6Rtkwfza7tT8riuT",
  "key11": "4gQ2jZ6XDh8V6XrbXcczjJUjJU9SHxXoii5wszqmvUh3o3LQfFb3Y9EqFoT9aNnBz2eC1F1xHVgyDqYf5TPxyu9R",
  "key12": "3YAx1gtC6C48prpGaRSU7U7kxR2XmHbW3M5HAh5ksMd2j59gJpXc8DmjBYiLshdxYAZm5dZf3SXMsZ4ouXdWKe5U",
  "key13": "2pyjJMXKuMYJQWMeB61BYWZy4Du8tGw2wafKz47TJGPogUHBreFZnvJLwmhZXZD9PeoKDavvZJEw9pzyGAUHt1mt",
  "key14": "5FCw2eQ4DAxGZ5LQkjYfEcMrTRrgrDyikC1m8qqZPiGZqgFBiTXT2rZoSx1N287NPCLE7Hgz8TEZdGVFRBgYEvZB",
  "key15": "kfP8AKvk185tjAujP7g3DcaNWP9zucd3hmdXJYk8oDgSkTFQ7zu2dzXZKV98A81TLx8vNjH34QzSGxSoWjhs9RP",
  "key16": "3RWGUVxyDx4bqAxb9VTF5229Exe9EkbVEPNir63EDJrBceLwcWU5Ze3XpiEiCDn2tHbF5dThTx96uPa6S9hVbPvw",
  "key17": "2bdt9dKg9LPASCNnnnmjxi3mwen32HkfMxF645VK2yjbSa2PvxDjGHo4oZNYy5nmBq72qQkyvtdM3aY8Z4pHuaJB",
  "key18": "2JQiJ56kCakCuoyzxEydKDhZeKzu8GCmKtPsisLvH7BFAfZLc8dYWBFxMrHpKdjZX5j2NcwYNi8rianP9K2mGa2C",
  "key19": "2DSdoZPWVD14mef66HnS5x6NVeo74uZTijMpgrLYRcbWhkSHaR9riVY5sXGuqDdyUNRetXAsNkuxQqtPffLBhYyU",
  "key20": "43CrarxVJkbF2QHf48g4xJQkNbZEppJBoHzuFMf4thWXvCgZVyKew8XLyR6AE63HGv1QJkEiYgomWJ5q2oiALWPt",
  "key21": "AwsGivXcfverWizMriq4DcAzfWKe4qWzaR8DM4n3NGguQZHXHaELaAGc2s3DPYCyyWc4XxT28n1RfvfG5hw9AYW",
  "key22": "5hXkxTLjqhqSRGBm4ohpAYmRUFHHEgXwdYBb61VFPde7kjEd46zyBgKappcYy3JrkgPxCm2tC6tbGNFBSAcS1CbA",
  "key23": "4wdyzKBZAJjR8UL7pomsugizvsDkBzvLgeLy8kYUqePEzrWVPW2sGiWeRomR1E5at7XUPHV4j4E9DAtpCSjUrs1U",
  "key24": "2Pq72t8ozgYAbEHTpvqDCkrPHnW971s67anuEAR1SUq6ksMZjNDFbJorrtZMvfbsNvboPq7UUuXBMfZraZ1dsgoy",
  "key25": "3E6yMQAEPpSVGsyKEXk9hKQADtLJCcu5ucX9ndG6XPpz4tUjjACHsHNoawVbdxFsfxcyNFz6Fi9r78iPuPytv4kW",
  "key26": "5zxapNMC87Caah4dziXmhzddLXAzQP27ZgvBNzCnX1FxosrK3XKRiK3QpiCpNNWsGPtTxsZQZkNZmq9pPTZSs9La",
  "key27": "ihEryks24G5ZAQ2pdZhAdaMq6WpCS15aTiHwcd1oXrVuwUXBEXnDTGzPqNFzXSK8GLnBw7cucien295r9cZtdpH",
  "key28": "3YVWUacAeDSZs1Wet5c59HBMMRzn2LCSYKim6AbwHkds3v5xFAuPh7dWm9Sq3GMf4mPiVBaCBB2crSPHiniMjuQM",
  "key29": "3AM9JheYSM53M8BhYpr9J1S6tWVPwutcBNZJHmKxzUnjcRct1fdrXutyGmQLaw7Bu2tzLfZ47HcfQF2tdTJKuNz",
  "key30": "5sqqZUHC3wWQvBteqk5jxZgYhMi6bvAma2gcrpmjHppm84jm6wzakyirEVF4PXEJBSCaYYivCrmxuNdQDWgMUs37",
  "key31": "48ggvbYfVD9BCyWG11Uj8M8u8QxeysZcVN28kuCMJbFmzRFEqdBek7b5ZoQSCGTQ6PqhV6JRs2WXCjEBbZMrUtha"
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
