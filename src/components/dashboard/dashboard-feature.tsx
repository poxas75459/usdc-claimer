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
    "5eT1xcwwyvZcGjESJGoTFvVzdn3qcaVnY5QWnfV8jYJyU3JDf8JqYXCEoRnQebWeEmX4eA8qmiZtYfDy4sC6QnZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cgU4kYquNRb8zxXdUoHy1jFxJuH5yftD1MupQiKcZx1UyVumofkufSjFYehJV3zK5ETvoo4BKGFUhYHj3Hmj4Ak",
  "key1": "5bteh9sB7c4Tfwb15byxJwybES24PanxJfJSpWhPnwfx1EVhdK8r6tnrzcebvCauh6duBZYLytXKcXT86UmJ9H8g",
  "key2": "aTmtnbTjAdr3t5Uk9STAmFEmz9bJMBWiWyUUF8efqRUg99XQRwnQ2XeQiHJ467jTBnM1RzoZrzBt7PBuxor9peZ",
  "key3": "35HZKYcYAq9RAyLn9PX3rNLcgtASqzVkv73u2SssSHg1X5k1QW2e5YnJsabDuzGmnwQ5o1d8cAfWMzH6SkmDaPLM",
  "key4": "kP6P6xxjJtgj8YBGtPUotnqtrTRrHVT9K5g8PaSwZi33xYJzNtKyXTJa7wJtwjfH5uzKcrPfbBLbLALAzpXou5b",
  "key5": "4X9RBMaSJKcSwa9UZBigSecp8QnRR5ohEc4EbTEc76zcPkVieiQZcbWSSZtpw3RFq5wJZr1s2W8wtRX8viGmsv6M",
  "key6": "5VT6Rft1NqjK5gJB8rC6ozZps7piBMdPtcPZjXrYjFMtwjwGXyitkY9GH9K77wd4Rq6fGyqJFezBjyvMXxU51uCb",
  "key7": "5RXkaeUNfzCLNAdbvDBBwcQQeSMrguhdVKJ99b8xyaybryqMKccSQGK58Vuu53B63S8rY8fNuTpGAPWaMrFc1BWd",
  "key8": "3vYJWRUXpajqmXcyshqkdic6eRmZbgsW3syiY1n9RuCyiWNKky71XtTinYZFn54podMWXsJVBvDRCutztJNaKGRr",
  "key9": "2qqdhVzKwrmXPem7ziHGYP3Kh7Jn8ZS4ffxqbAjK5AM2jjrtrx4kHDiygoTYaJdDRe352pjcDS6iwYBkJLZDPUpW",
  "key10": "337qzmB2H7JW4EfpLDFkWEepiYzyFnE41vskyCigpraw24WGtYxfEPX12j6RjrG47cuDbB4tffvoKppzyH3HtpRP",
  "key11": "25WnRQyzYAApuFshzaW4PuJ8PCxdFTHYrsELz3LHPdrTa67M1sK7DpqwtUomELRdhA7sBe1PmoyWeyTjfPRy1TZi",
  "key12": "61qamMUZcG4rTrCWqcSUZ4m4dc3qzAJqqYrSLyYbt3UokCUq9TZHRpyVAoiN4AuWrrFS6xpnQqxwkqfDc3oUyn27",
  "key13": "qGicvLbxr9Mp1tBX2fiAGEAWsr1fcJDkR3CRJGVoPnzcWNy4yYMU9WgfNC9EkaUpstqa5YhHqXuzdxZX2ph7ewG",
  "key14": "n3NViJi6P8sQ8qxD8Vpa269W6mUQk7bTSXbX61aeJkofXcWyCR9NBiozoSTaarGLYdbC4H6kZjq2TMBLrkdeBth",
  "key15": "vC7UM52WYmC5Ryw7u7y7YqrxJ1Yjv8aLRQGAhn91jn4Y6aNohNg5Y7eTAvutYJXxsLGtQRj95jaTP9dAdRZFW19",
  "key16": "bE88xwzJe2Xx2CyQ4xafP3KqstvBsGhjh9EBT4zLfYWPDVDA7ykFDojCRE6ofsjDvRiPRd5YgHfBv2ffY8Unma4",
  "key17": "5sZ1sv9aoiJgx6AgSLBaRG95Rzrx3NdnxjxKXVFF6Y9c1Aoyp9yQSit8mZq1oTHZSFZ6b9KtTSKor84TcB9xpJUq",
  "key18": "31T7GZrXQKvLweEyc3hfhKUeaZvF9ArWMPg4CUkwZj24f8oCMoc9GL5ZEmC6bvoNnABjFM9jQpp3xpCTpsu5TsUb",
  "key19": "4cYZahyz6CVr5XjnaPiAQjYmLXnW82FRwZHEK3dH5zwGMFaDXpYVrJ3qwh9b1tpwvUbFNoeD8gZjaxSQBqTJTT8C",
  "key20": "5xWcsCC5Hmz1ga3nZzZrvpZjMtqeQXe2DpBNuYqP4MHvFs5kHdo5xj1tWY5xky9dCm2d2iGT3cEwhqfvv6B2wqcL",
  "key21": "5JZbxsKBkuFLbh9PfDNTCzoZSBfeGVsPQfXDdKX4spw1kT7NK23uv2obZugVDCSGqZxbvM2pvgHwTfkq2mhjvCzh",
  "key22": "3beyvESzqvMc6myrsNfGY79iersS7eCSGpK3XBfGd6B6CrGN9JDD5VGTEgBd5qPPg4GkKYapDGD4faye41B117by",
  "key23": "3kwYSuk8BsyZrR5JPcpjX5CFNSxDnFsJzN2kTow4PSuXZDpund91qQyi2vXJQBWqvCe8tf64DgVrryRzQLSrpV9",
  "key24": "46znAZbxCiUM2VJJHmevmFiXu9bTj3fZFUVLYqnpk5RxyiLhLkgJGnzMewEPK9kDcDExHfCXMXCjYh9Y9vxThVvq",
  "key25": "353j6eosEbxULLAKHh1JXzc4jmeaqprChryDwQ9Nbb8iViQGGWveVFCNQQoLPddkUgDXpn13FcmozStd3oCtB5Pa",
  "key26": "2hPpAGk29bngKaA3sKQtdPhQzJSvD9XaQKNPexz2wYQD653tpRESExvDiPSpsvxfyPK3JCiB14wSqKaFcraGN98q",
  "key27": "3Jsh7T6EAubfZVLvYYt1XGqZTxSspJj5R2wkkNPMnqyqCUQeSuerk6PWdaFzo4oHfw8sgYtkgn7JkRTycMi9grN8",
  "key28": "wZd31DB6AeCkxxeYiVxuiwBUDfphoxdjkFBJ6xyDz25xq2X8PYTDnbjgW4KEQfHNSMbyoUj6W3LwAST2i3b2T65"
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
