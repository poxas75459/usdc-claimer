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
    "3Lst3gsr7NYKhcuik756U3QbPXVgWAjNeAs7dAR6JwentAQ3nRUDMp7E6feXj143R6DsAGgBEk9jaPFM1yLu2nFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qhYjZiCXtXraNvqVBdHruSB57ZS7LQNKsfruB4UEev7vUygq2XyVKe3Pgn3TZtRSifBxgwiQAFv6cLaAyMM4hLC",
  "key1": "MVWXWf38fjRFrpA4A5gKh6K2yAbcEGYMeafqvQcjRwW9ULVwjgqW4DAdinbhfey3HA9pSLEhfD6EY7d2E715YJ9",
  "key2": "5WhZE17S9aZJdDEVpas8b9DwB3A1hRowof3PBGtVKgRfqYFTcBbTbxK45Yr42oBU8PCQDVFTHA2zKTU8rPBfdXUw",
  "key3": "3U1XEkCRGNp22to6izdw6JLSWkfDFrVoUd2keYmhJDUBPHRym9ZA1JEWjrfiygCjjA4EPeexJvo23URZjLmH6UZ1",
  "key4": "2tkKgPDQ9GKgyWcZ169ZP7mQsBaJVC8bQWMXaNZsaADviopbLZjaNRykRkTpq9WDBfnTuWZF9Laib9comDQujgU6",
  "key5": "2kGgubv96Xkwma1hzXCYgri9Lqqmj4XQzLE9bAr7yp21MKV6U5e1HDQ9mRbJPDGHffUpSU15yTiMJsqBeYRyzPXJ",
  "key6": "3tqUrV1PwbpEYEoetXhTDqcZGEyamy53e6KqkNwRtHe4FJ3xTSiaVqAC1pm1nzSpBdiRVia7jFvU5D9SWkXudCeF",
  "key7": "5KGb3sg7iqJgvem7xEwtwTpwpACZzovJedVkWNViwyb45rspkoqa6JDXV1faLsaB5sdMJRBWkCqVe9bv4xqCD2aH",
  "key8": "wR17Rt6ywdGYvuayKkga3NyAmfMDhkpD1xciZpKxKqyzxBuHCo7iFoKF8DwgzwDwAJ7yXDafvnMMbzeDqDfddbH",
  "key9": "2oZYRsSXCAtjqJCLsi7arynECDpD4nabpnBpet5NRbG7mvE4wSUTsojZ3GcSjgXeKyqJbcaUwGY8wKu961zTpNYC",
  "key10": "5UAAX7Bw6sGcjACFdav1pmPpvVUJHo1vTMNnE1XUbxUh8QCtAVpiCYSuUQDCig8baGM6XaB97c8Rxy5NRB4Rkvyo",
  "key11": "441BHDU3d4UnJ2HWmqQ4ob2ALBSyAH5iRvRdu3WfxXTa15691YqBjr74Y1JZJKPGNtmgMV5B1eCVzLZ3v6ecPJsR",
  "key12": "4g81fMnBBdEYahRYybq5A4hind4mTZb4X3DDEaY5H9732joXS7EvN6dYbkLadMCusWHSGLsykUVNvNd1NocbDXTF",
  "key13": "2xtCrc6Jr3xQKz3jN2wBUPy1BdgXYrv5NEL7GkJdrzgkozagwtkZeMsgM8HRDG9Rv8o4Ydsd4xCi9NLrRpjzNSNm",
  "key14": "66UAmrQSQ6NuR7NWq42CXYYGzj5hYAkjdFe9Ep4X1mP9jm9A52vPgdy3fZ3R2ePCcGcGFG5r7eLg1zuo6JqFm4JU",
  "key15": "3M3Dmz5DnDKToA1FScAB2LfsVgfaaM34RScZn9stP7hAYexsnPbzk2sLPthGXBsYQFChZ45Ay2E3d8gyvYXVWPHY",
  "key16": "3bg73Nf2Dg6W6HynJsaJ6n8fzVwuSpqDkrZYuihC3JXXaGMptuF7yoB5iZXMm9KaY2EYoq9Z7caCYM43Rviacj7N",
  "key17": "5AZJJkFkf3grQ399nQCSm14WKaDikJRL8kXuEkQykg2hGCpQjx8fDSevHyazNuzf4bU2owJqsRDSEYYmqFqSMWqp",
  "key18": "5Mpay2JUzisM2oZRy127i9wy7rRgaT2bdbAsHXwpDvMEv2v1igCM7iGhz2PYFA2TpzGtS3yzKfy3hwXXFrq6BybV",
  "key19": "2zPzeGLJCM1BsdyyAWBtr9M9Wj7uUqbB22sUCAvJCBhXKSwH43AjLd7xHeb69RB7ScHsqgpXhCdLQLJCEDSUC5SJ",
  "key20": "5ZqF7ZPcVjWg7gEXGyNSqu7Ak59HFJb58ZQipQmtghTTSQbZ3SSmBQSZoaA8ugaQnfjwG2MpVWyzXHLfnzytzYP5",
  "key21": "ZddQJF3oEwpRgCzvMgVZcu1uwA22VmgDjQHiCYAWVVUotXS1wVi3ZR54XFCEW6mE24DPuatWtT3C1EPYSZorniM",
  "key22": "Tx7YUveRaapkA41yVSAgU3kPbgdnWKkTxjmi5JuDCyWnrWWJAsvKkxFbVPZqtL6DpPwaFkPBpMJjY317cg176C5",
  "key23": "2Ufyr2FjjaggdJ9yKK57kGT42mmBDMc79YSsVm554M3N5eSAK3Nrk6MW42h8puB4KX1nDXY7UGPv9gvQRfQRjqKD",
  "key24": "61aGrtxJ5xPXSDjKDcXq7MgmehYm96eoCoRXvB62d6xYeXEajtXQakFs9zk5v3ouKk48tkmBcgEatTgdokFztZnN",
  "key25": "4Rb5j8YJt1G25DZukw5FnYwcHkfWnqAKLbrWg1EhQccBm9NxbwtTWiJhYAo9TpA2nsHuugp9KH6rH4oqa7bszh3u",
  "key26": "3kgivsGu8ENi2HVS53Gifv6UpN7t6cVdtSQVXmhneNJUxsZoemKQpLripBBVQszkSnrCouFqE5KDcsU2h7rYgGRH",
  "key27": "RkHb3uQdk8SQEeC2iZh9wev4pR79L7gFDDFvyAUannJTaMGhMjpDeKdiZQxzR446VntfgTCADtqQrp8WzPkfbSL",
  "key28": "uZrUwMQcQAHvnKhAZodZY6DQgQQg6UTA9YyLKFdUxJRLC7nrVrA6dgqaStLY7KgAsmggwNpboHWkqvyvqfndWrN",
  "key29": "5QkYmAqcHpjAtvB5zr4Br7r8xtKU7Q2o9CkUHt6HCdUpTx2EFEihjAjHXMfD9xX33gLzQbcR4wfT8CkZZQA6cxNK",
  "key30": "2ZaFCRBbK6fJ5G5qcjDYDH1EbCPE4To183gX7PfNHGQUdZZ2NmxGyXM3savFrJ2bLRoFAdkddzPSV2SWNncsFmjU",
  "key31": "wVTSgnp77DhCe9J5Jbw5rxzJdQaQsqHtmdr2YAH2rhVWk2dzvfZCapDFp4fUnaPU4zsZTp7EU1wayUvhY267G1m"
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
