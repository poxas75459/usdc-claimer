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
    "5C69tbVRVpF2pDK7n1Je4vinR53t1CzZzoHc9CQsJF9MZ6Vt6DnxJDD1KnBx3uLFcJMxfNwN2zDJAFJQzVYGwgMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MYXZ8rYhvhz1XE9m67b7tZD4XtuVc5185mbmaCsF4fxmxnG5gR4rGPAp44XhvcfJVngtwtqC4UgnTbU1tfv25HG",
  "key1": "5JcHP32CJ29dWPW1pWbfPcQUruw82Yzcy4C4EM95CkaZDtcgH5uDuNaAsewyTG4QCcfffL6anAT9PC5XT8Lzr888",
  "key2": "VEog66RwaUU9ryhcAnEZqmZnKCc6ktVrbtxaJBD7SHE9bX1HkF7wizLrHXaUmVz6GRtoyHF9xK5qrLBHvMhSGmE",
  "key3": "3Pii7aL76BnCY9Ynsf4axp9bwgsSTQFt7g915Jgmp18WFjdK9rJ6gV2sTC6Xh3M84sZvDdQHYD9RJ3CqnpyxQH8y",
  "key4": "mzbpRqfjnbD56e6Qsr35cFZT8hfcHWHmVeq8UforVMRX758aFyioo74ek3CbEawi9xnha2csCJrR3fswD7kmqQb",
  "key5": "5kiWcvXD3PN6P3HFuKEKWXg7DHEVn1BpPvjPYAdcZBR53AEnqTDRTMjYwH4desk3cs4nFojWLoVpQu8gQF3KALF8",
  "key6": "YdsVLRurDwmCtWrzmjsoA3DcgAXhXMogYX6xfkSdi6pP31hvVZtmKNotM4mFhJLVxWfPXNVEWGofWyt9RLRtBaV",
  "key7": "3pd8BkaVzX1GJTfLXiEcJxTAQR6JbweFGwbCapkHqep5QB6KnPdbgpsWfCtMFbwpke6Zqm6H3R9zrqZhmieKH4kR",
  "key8": "63LAP8zJXAQdRHGDDaLDtHBUvzmENy8Er8VfS6p85j2kN7ZKVA6EtAVN1RoUybU1Hx1YsfJPDYT8RcbJvqixnKDy",
  "key9": "4t8sdD7JALcZeCvbFDvs9ed1WpZMBgJ9JTJDQDMVRnbe8oL3o1xGU39t5WrFVtNe4FyPLLzqfS5h9Zovg16dmUaF",
  "key10": "3BXug6nsRbwHVCuLa9okqP1A7tpmSEbSqxzyGxh8FKA1za9GjMEwvYsidgtB2Nwj8gQxVqSL8dzTo6HWwCCgwwMo",
  "key11": "4miMk5dHi2oKbrdryWQUdUTFxC8vZ2jLwUoRLMsNZkg989P56LXxcZg8YuRYYMNZ9nZtG9v4UPJWJeckRQFcjtiq",
  "key12": "26DbEcHx7Dm1xnNUjXWDfBQtieWsju1Hdx3TQRmJMyn5mahSBtVqGKs2sHAQ27vJUM6ZPFZdV5p7ivLcBr35PRDR",
  "key13": "3xziuefhyqPhr5k8SkNdJVsnVBPjL6aUMgoQsdewPH7NjxBWbRNosuAwYpRjfQ6YUrBzEaF7YoqGrxLBPpvicgJV",
  "key14": "pzaCrf2Cqp4Jyi5p22y41P2GeeNq2VkDt5rjwYCit7xgdN4UAodpjKF4q4bN6hjLHvZ27cGPr5KqVDcs7QrFoRP",
  "key15": "2nrDTGDbZikR9auwzEWfNkd8x2CZC3DTW6CnaMZn8RevUL84k41nkGuMoGdVFVd6mF4B8TR8SzuRsLSY435NtdKn",
  "key16": "27hUDt2r41UKYjSELq9X4JobNG79ubu5yzHEFQsWG87TjYhWUAzZZmmCvzBVEp5jmWUw8g1phHhf76SG8WXYVWnU",
  "key17": "25H2oRgSPDQKoz2HLVxNKjPyG9ZiqB1nK8grEtZ5RK6jEeRNLQbXk3y9gDXGJwgG3oiyAoRVuXEaXcZgJ2WUegNr",
  "key18": "WdqkjziC8KLtK2CzRgHQVD3FCY81zq22tTf7dHx1J6p5mMULbzZq1S7KABVc4F5r9dVdmgjZPiN7e6tHYtbikjL",
  "key19": "5TDRh8VJRdASqSmyWZtft9yn3MFMC34jMkvmUM27k3UWrP2TVRZgtb7hR56qpEmp27ypBZoKyJhaTtKZywwwm3JW",
  "key20": "2jbgUQ67NNQdaVULaZTwykPGkrDG4kXxeWbNumsesLvX5mBey6v1gvMpJmHY6FuP5Vdof2QcRzxW8sgnaFbUufyN",
  "key21": "65Z2UtUVnqi2oijiPXMDGfwL7CCXXjZ1HTg9R28iDepts8HtNJCjzc7knRdBzxFGv9QRAkaeNW17GSwe5qzxvXtH",
  "key22": "46Yfzk6pzniSwMFR6kUoiT3YR1gLvy7guTf58GK7Lbm3T83kMoPoM9LJCzpwQDesBv5W3Z13V9Cd7kLWyd7pG75Z",
  "key23": "5rfVLhgNT4vVgk8o6mBenZMbnrm1aTwmLWfgfqBrrsc2vVWurhSz5hgEbeg3NKqM458vU9qmoBitqhwvPzXLMRwe",
  "key24": "617e7xvYKrog8g9jPu8Qw1R5ib4FZmELJa1qzAzKJsWy8reftJa2gJKMtGdnTAk95vNhbqLeurKnm7CUsgpcxQuD",
  "key25": "5u8hAwndeWKfR3XouAzBVjmz1KT55KD8aBGC8Y5Z4hfHWtaEf6EMPaGipKpCcE1G3e4kL8VdfAnf2CsYZzwYBML6",
  "key26": "41tGGCn2wUUPmY8iHhUMUV6ns1PeftFB6E2egY5psL9ucRS3HawvzvRiJPScggnQKJRpnvD8iyVd3qADx1Hnjia",
  "key27": "55VCzU8NYyVxLRxueE8PrZXf9XTtkzvjaFKwQuLMnZtDRYAvJcMQYe7FP6FfMvYvhnYMXtNx6MP1hF1G5guoYZh7"
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
