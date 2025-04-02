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
    "5uJQ6m9FDCj2m3rUHe2eQhTi61WJdCyCBwMxUUPRUTTgp5DbFuBMVxkCgH1Tr1XGzzLARHRPRQvoh4hgaSekXLe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AzJ1JNv42ptzpzmW5w8DYZZDvwe6gkdqeRczk8cCSAYwYpzgETrUHCbFRHHEZmZ96A3h4wqd2bYqz7uHFsrb4S3",
  "key1": "5SzRQdWmSrsiA13E5JsafaghT72WUikMvsr1rfwsxugApHBaxBxCL26ZQ2RDRAhFUTgjbTgXmDivCY3bYiDtbeZY",
  "key2": "2ww4Dzeyk17y8ryUaUsbfywuiSjozuiiCx1Jks8ak3LHda7WKRvrAb2QPFqjZAqgq5uhrhi7qJ8JNRris5g9ttNL",
  "key3": "2tsG1rPSR8PYozzz9XGG9DWdQbDZv9KEPTH4z3MyqjCypp1CbR41oV9bmPw8QaYxfesTkJCwiEVnPAjmg6NHJBYF",
  "key4": "csrWkocEsubWUrPfHfxPgfvgGRwu9mzhHZCwDCMQbMt8KcjyMpfJGaWS3zXKzMxTn4fZnEC6f3XGN1NAh4k1WDt",
  "key5": "HvrHCDWTobhh1fbWA4tU8nLHTJaNhAsatsvzXYEZemWZszwVbFPyrw1ENxLX4graWb17P1PJsZtjvU2hMpA5huq",
  "key6": "2fV7h5ydMkFXeo57Rbz88QC97A8SRd5oyQxbkWSq1RHcbnMysbGcqhvftot64WwoH54UbcZUbCjFNEJKTtqvzn4V",
  "key7": "3FAtKLwDuLxG9UWgyXGoSgcZuzjDtCUYve4t9m85Y2QhXczDDHZxuGpqBNZsGj62fNMsWNgz86CkC9oF7vFw2txj",
  "key8": "5AYmsSgeGPCKzndq2M8c6wu1bDAD9GyR23YKEFB4mgL9KD1knr6tGYtHt1UuzWSazGMfjpTbYffeKcP4X5AurnzR",
  "key9": "3YG7UxqMBA7EiSNnK5Cu4MAUfK9L3ghyTEqCH5RdVghCcDpaFWC7sPvNoF2x4ebj1JpRRVsEb4XgRwqecEECC8L2",
  "key10": "2NjABc7fnBaGxVJsgkWHbzncbJS28r8M1rhF3V1kwfb9cXBzA1di1gMM4nVNXFmMi3ATVQhn9EYAiJoKFRZyeWdE",
  "key11": "3WeSDZ5UkSSaKk2RD9s8WbLosfcSfrZjhdKYJWiApDfxEcHd4e1eBpGaNpZEZKhMwWwZjuisdEixaYNWkYd3Ggtc",
  "key12": "4jbv545iZA9PDCjrxWoA9XUHxca1eJBmUvhdBddApsqcFjWncnL119LV7NDgXfzYXsiiguzxJ4ZPrEYYDTBndquz",
  "key13": "2nQwyPqWWd5w4UWRojiA4pSpHFULeYMT2uGkau6kXWhWhubQzCWdJPjANpmqFh7ihSNvYbARA4SprKAAL1xTrCFP",
  "key14": "4QXfenhmRBbNmA6U1oTEvy5yzGqgeAtcr8xGuvCqPierzE5M93ZVjLJAXn9Yxho6NLRBgd4bxNTHVCAkzJrSRMxQ",
  "key15": "5fjnCkKYjyFoQL9iKRDTzU9qrK5Y2nMmdayVinqeJFtbQBPaDHx9sbm4Vwod2VSVSCQ8LgqbWpqiozBymxKz8XPz",
  "key16": "5TDzUDzMMAPj2npnGPcPJbB1psWZcRKknPgjHsgASbU8AGkkZbAkBSe1mkmrR2GYAPiZoC6awSbSKdZUS7Xsd2TW",
  "key17": "3vAaaWYVMMLGrhVDeka9VsBW97i9zBg9tvAFmU9RaGRbSBod7Vs5W8VYd5F2KCg3vCuYrtx54rPkvaCVTosXBLuu",
  "key18": "3HdLoQUKMWBDL86TK9RN69tESr1JMyJowdDnDig6GsEW5CF5V5RxkuCEzcu8rbuYGfaNDJxeqonPKgagGQvnHcAs",
  "key19": "3KdQyy8KacsnswMCrZyikwqpPJu6tZd3bD47hHT9Adaj8PCzjyGf4z9ZgPqGwmSTyYv927ixkDFGs8qwfhKboLAs",
  "key20": "4tZ9ZHbihBHFUJi58Lxdbd6gTGQQEeGfvhV5ZfFuRxQdUqkBtbxSkt6sxsbpe6hcUVMD3ncxXQqyYBiq3GbD8h4p",
  "key21": "4W5no4oxeaspvQQtiK6Cc8WqvFo1naCTx3eyKK98mmW2T4fz27sijxk6zMUKH1dzgJ2oUhnSfYCYuSjFpHxhaFnv",
  "key22": "3gLNXMkekQnahbheuRQV5ybAkWXM2owBWkaZtCs7CNoyxRGaYxu9feB2SL7WBwpkf9jguStGhdU3tkijVwJWycyn",
  "key23": "44BPLFRoP3hcyBPRkMb4Lhjmj1mjToftTtgoA5iNiTEjdE9KMnVEQsp9dpEivvj98FBxfFwwXaiB1ZFwWZkUKSJF",
  "key24": "2ZZvJQcQy5kfSD46BsLErqa1abisHFq8SfuCLQoQ3kLe7qe2uhCoJXeiAuoJdPeMDjrCfgU8KReiBcoBp3Yomw67",
  "key25": "4oH9tsJbETKC4Mx7qHpsg6Ah5ZnwdTPSq7KR3wZDHq2q47YvSGBETqELcDerdr3Kd88yRmm6ni1W6tVjPVLPXFAq",
  "key26": "2VKX9iEwnyKw3iBUmX8KM7arArxCS7AsNWgHD5DHmbHBgHqZDYNNqZPxQiWHq9SmHp296fKzDeMFZ44k3R33MfeQ",
  "key27": "59WVwP8cCWPhSV7p2xvdYpCxAtDPmMtSWW8QQKaSv4T1MzWAJyjdisCFeJxqjfnQTfLcK7q1VsAUndtNQ8xvysco",
  "key28": "5mamF5wfG36XEhif9GBoFfTGaE7iNR4Bara3WTiiZuQ7u8HzyDH9DVKB7jJ7F3FeBJNuLBCtEQfrocJUjta29kur"
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
