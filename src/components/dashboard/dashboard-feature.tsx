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
    "H9z5YhbxWzgRj1hEUqZTDRPuuXtwQC72xAdTQVXxJAUrKxy8qXaVGSaHdUuidAcwuwpZ85jJzdAHo8zGTT2ugun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KW9d2uBWHfzuaa7GRcqjHyDxsj16yE4kumktx5ptZaWBYyBwKe2t1EFN1SJAAchvzT1jxPJgexuvg6evJQgvnNk",
  "key1": "22jBnSufaNz4LTrkmcFbMM16yXrrwiSRoS5UBGK3CH46zxA7iiRf9DgLBeGa6U4zk12sZAdSCw9qmvb7SyRQVVHs",
  "key2": "39cY1dQXo3xnGvu4sPN2GQ2RwJoXtK5fPsaX24M6TJWF2DykQM1NwcDXkbAuqBrDdvmkCTB5LkzPzPLjJSA72nnu",
  "key3": "39XNxBVmm1eNbHMfFQxHMtkV6tQBTXvtdtDeakRQZaJA8NdHbQN4UKchDjDKgFBye7fspNdtNksyNCs448v8CKyL",
  "key4": "2FKgz3cXiJM58q7JPTCbT7fJMGNNCbTp5X7ZYhi4eHKugRMifW3VbxxSrTmeHK1mx55aoe3U1x3Mttk6Nx34Q9vi",
  "key5": "3kJAwKN2TZGUXD8UWKa8tM526rHzuWCBXXBApwE6rWBaxo3mgjoC4kBD5Q4Xo1X6inEqLdXWLVMqxgQSPRjmq1TB",
  "key6": "2UAdETVcLhJZ7W8T8VnwYgV4HFVmeDkrXqVym39Rtx3EkRr5odEk5Qp6jC2S8SVYwoHTSCRLxRLcUUvCbCQut7TF",
  "key7": "e3moyh93QP4btqsNTvwB2zD67CvUpP3grBkJrEqfsPz8K3i2dPJFuqgx6D7jnCY4dFFQ6yBVPK9yHrdSmpNSYvC",
  "key8": "3G48K5uVqrxwEDyng6wuHc352yH83rYRFMYXE3g1boGhxSAt4wT98dX7D6LPWn2dReHv8kzembmZHtyW8JkzZmS1",
  "key9": "4RiLyHnmn7dz2PTkFNozuT2MN8dyqZitWDPVQMHh2NHvW8tGdN38FbKc6DadZBz7yFDNVqkySdgXF66nHXEnLSeJ",
  "key10": "4cdJw1vhJ7Sv1MMXazYz6FR2gVjhwsjWH3QbhPaFF2SWQmGoRchFDf2Bgyzz2gtV6PoVgB9JLkFC8aGvyruDA4F1",
  "key11": "27KbtpMv9i4tViZaM2k6v696U8Pj4n5S1a9CVX3w69TwomvN6hP4nRvqGC1kGCLcFp99BiEGQMKgdxwMWBeXoJ4C",
  "key12": "dGtryUVCYb3rNapqxX8Y2qi4aJk1zGGz645ZcnT14VakX4ypqDNWEr1sS7fGP2FsYwxULTZwYHSkcteiMf3776k",
  "key13": "4k7iCEqdaT4jJARxwrdAWjP1HcAssjmRhLGCJPdMuGjxA97TuA5NAEFAg2E7B4KyABqtzGYKYLYZuySfnzHjFsQq",
  "key14": "2BwG5yZbseNET9fHwcANfgV8JUZwDLsFijRhK2EgH8piyEkxsjJ9pzzcAXj63F6ggmG6sEzSHxbgkfTfDGwHEgmS",
  "key15": "51SxTyZmsvbdRuh8TwQY3iSvyPvLZLc5W5BRzagLcaac8vF6YZdzBXiZKUyVhzsQQ3AGDjUUbXdzWSsjJfbEuwBF",
  "key16": "2JtUwKYGbPL4UnRh8nzvKx2Y8TpVJX5b5kS5JMBJ4Dk3qUVKKBvYTVEQctk9rE6dH86iajp7NGGbZWxsrKhCuPvY",
  "key17": "1dkzok4Rq5Cyo2wpnyimgMtzpxDonRbRo9oGyrF88op3FepJaYdKoykvZBs3WG34b48SZcrVR5qD9BnbxSgh5Gu",
  "key18": "55WcL4oVuTy9DEZn78fzYQ5fQEAgKvZFBjMqTY5sJMn5T2Amu3u9aAUxi3D5EHh3J8toNY6nUEP9ywgUyMCFXS2z",
  "key19": "2sAMfPddxspeYh66JhYpuqCC6sZHnSWtaua8MR8RU5L7c4PXHTG87Luc8DZTQthpAiX9ZRMyzJeBoqraMXMY5hh5",
  "key20": "2EF73UBavmg49YFyyZWMrpuYEqkwek6Qgqpr58iF5kR4CPCnituh1VmNHH9JFJTf1zT9qUKdAcHnivZo9YKmjzG6",
  "key21": "3MV3RKDkKeMRsT8eUtn3FrJT5uAkcQyXx99AriSqEoSVsyxG2FU3e6ALZN1BeE9k1wwq4WMdPc8Yr93PCL395wUB",
  "key22": "2KNAz5YYVvhSKrN7nsAGXVzMPwvoJv2qHq8WW6uqu3RsuE3wtkMrrxUc7fbHfJGjFMV5MWsKTGs4epZvfRhb9zNp",
  "key23": "5vJg976K1QK7tQtgo9hfGAjeKPo8A9BCtTocYbgrQKgFsRU7JsxmMFferdNM2ijLrxtS6BP4xD5qwxsG3tM3nh4J",
  "key24": "5MJMf12jriYHVFcHoD52qa45b6C4xu2pWa585hpmFpUmASQAnP2aJqgyVE4zAfeyghDS8UCPu8sta2u4YbEiJN5w",
  "key25": "29nxUxpHZbchECJsg47TRwNvSm24KditaJ948g2MMzBkmfSYnXUnajAMibRAW1hqt6AyQsA7No5zHdkZHHiDrU4f",
  "key26": "2mG5DjgRrcfAQG51j7KieyAdvv9BwwTS8khCimHoAYFFFC9KqczWRFZ33Ymf3XP7ED5QBSRxygZsEP2Sxz4d3k6k",
  "key27": "5deUUNP9DqtyandWfDLGf13dX1AqDqPVvwtU3i58GoqHHB6srmHCBQRYU8pzFpSTWWAiKgNs7EThQ6CNkwZQPJXc",
  "key28": "38Tjw6KucxeZGr8nTRwJhfaFhNEpi52VnnXXTxq4zLsZRv1EosVQbpAmUW5XWEotyYUBS2pbLuJj9gHytYB66V1d",
  "key29": "5fjGXMjDVgDVtcUQAZBqMnWLaF862Yyn5GqqG1vd7WpgrnoLaZ2UKGpphCdNajSZCpCgqGnyFbPRh9Em5a6oyDrK",
  "key30": "5gcci89qU1HNr83tj1GVAhUDqfMfCw1TVNW5whCHPdc36VsK4W7r224uLF8azEMVJmpG3AJyu2jRw9Ktf7rKWMur",
  "key31": "2u5jDTNAisxaG1gv2PMEHuAZc284hQjqyGYKUgE2VWBqD3Qq49dWXfxyZtiGCG66PsX6EgLywv14ha4shx7UpUb8",
  "key32": "4cFSD7BVgi81LDwuCk5orHvfE4VwVS2dc9k5qMSySANDzd6s2dYFU4vYGY5PH7Z8WUwEVcrwmyPJqqvjSHjajRHb"
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
