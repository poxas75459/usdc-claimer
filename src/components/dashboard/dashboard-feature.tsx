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
    "5fuTm7TSmaBudwzutRzfDEtPest3XHBMr2efSH9MirkpLLBw8nNJ3wrDDGgdKajNBwS1uqtcZNomN7q8PFusTzYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m5hNdzekZ2L9N7nmftzsL1BGYT3hdjSpzq22GdPppK4T2RGz17wzmwzgefsnD7Jr63vVXCGfFWbGep6NoHPzEzd",
  "key1": "37QLF7z2R3uZQqsA4UkyGirijHAGcehQts9Xbneg5uQpw14w7oEyuYnat3j6NEFPz9LMGckMCHNrihh66DjpxPFA",
  "key2": "4kk9Jo2dy9gXRsEHL8EuYq5JMULSNQGPyVuPz5TsYYyhRaRPLQs9Lepp5dyTd8wxUNUT6Ac3tLewi9N6x3eRD5BY",
  "key3": "4YFXQfSKQiPhzrL8eC7ak3ShSX4ULpnnzidQi8wo1XfSzMGDbXReohHejyEdLMB2ZMpv7aJJGfTu8gnw9UgRaV5n",
  "key4": "3TMqnmgQ1dpQrcu7C8WC6iYJgiogA2dUedPrgUkh8pQBTcDJJA3GWGyboBEH7FKAxF26k43xMHc5jgSDXyTpwJdV",
  "key5": "4ZJjU5BYJXQuC84YfZhwGVZqZHn3hmzXjLnhi1tSbLppHVXFYp86uVy4C7uDj5Ue7XgfHZJrJshu1ZgJqeozkgd1",
  "key6": "aMVDFGpZFS2qbhmsVib32cE2cMQ3PUJ4zt3gzfnifiHWgiPFPvs3GfCPGc15pMqoZSoVWBckZ1R2nwD3mxzsbPW",
  "key7": "46KAesSqy9LSBbe2uEAjTL8Yg3pVqTyqhRw4G2MbbX4gCXFCzeiwMrTwuEQkfiYAYagx3cuzBdjRTCV1FhE2hiG3",
  "key8": "4tG9d8Nc5PXDrHycQU1vsWyVCppzANEHp4YszN8xacBMH1om3YokyZmL9XtyrRE45QbEDZASSvgDGfJdJH5jbhDc",
  "key9": "246YoeHUG7HowfmJC4ddF1hVFmAtqA55ZtLuFHdxaoL2mX6uVLKh2DZQemaktbDDqre7xcZSwCFQmRPuWYTuqWde",
  "key10": "5sL5ZHHESTgj6sszNrdN1vsPfhCDcDCHmHqkEs91eLTr8DTPqkva74TrSQ3ki3Y1kLUUYMQALfQt4NaPBAgaR3W",
  "key11": "2n6mWvaXDezrMguYk39Rxsm5jgAv349inHvDNGLf2iMoZcXbdvP76vRzRBBjSha34fwMK6fBcHRCnvHfGhhMfCmL",
  "key12": "4B9dR9p9uABc4sqFzrvzVDUMk19295wjJWriajEk2N5tmoBKJFvqzQ42keD6MY98RnisLT6FRCu4oSPtKWTKhaMQ",
  "key13": "4MR2amC1Uzip3zxfzMJf1JCqP574oYXX88aWEW3EQRUvZyYz7ijYSSiJDWFqppoJqqyE9ks2EEq6yAcXMd3NvqFg",
  "key14": "4gyiTsR9AurcLPrf5MPTk9Zg4U8bcnrESiSQFo1U6HjMNka8Js9A2vQ4RAsH99J2SgCvH8NUywsvq7MxKGmPnMHD",
  "key15": "2P1FsEFVDjsrStcVADHLk1JWqG497ShCemfxDbL2iSA9UhAJQKRZ8x71YydhKdGp2oyav4Mz4tZoB5xHvReY7Rnu",
  "key16": "2pq3xvebn1QK4oHUhZhREqA27kjXqnG9ppDsjrpm6FTxNMoejLFG75B45b45KHz1Dp1YSR6NAd5FxKquxeUXc3iG",
  "key17": "27PQXmgWxyw68wXJvKQrNwqfMtmzrfryHy6jduVKGrA6T2c7h4JJHVAfPjaagnQ5SjJaacdQptXc3ZyCJJo2mguf",
  "key18": "3gKnsVFCwRLAzaUCHR3sqTs2TJZJcWrgKdJYwrt3cFgj5Qa7GSt4BH8xZ758kDTbZb2jKpbNW3yBct2nwMZCPhcx",
  "key19": "4EqWVeaxTcfjJBJYcxoxgdccWjo5ZeKH2KeCtSKs7CHKkz2Es9HkFEgW8RV6GtQmuG9bUE8zUnfUEkRxvyPDNkFU",
  "key20": "2mEXRv2zSn7wYTUFGfSP3kz1AnHytGUDvqWn4V76UxE92ZJj5PYhDgDpGxXvd7cYp3qnt7CUNGnmzH3iYuvobvjk",
  "key21": "4iY4AdGrrBaCCosCu8MKoKvDSoJfg6XJ2yVh1qMe3bVpG63erXUZHvtW8vGsk1MLuiZC9jK5VhCp6bgLroFqsnjX",
  "key22": "5UuFACuHsGehKbH6QYseGk8ycAZ8hg76TLQKFpWEdxURKgjZnZosmdoHF9h3kjAcu8R2DZ3eEzy1s2z8uKDA42jo",
  "key23": "5dES2oByXU9vSeibdqPRvNtpDhNPTyMxozZgn8CC1iR6MyH6Sr5nzDB8SgLQ2XeCNrPRd4Xa13mYRG63JrcP889g",
  "key24": "3ke1RuH1CKkDvjogn8bFSKaWVpoP4bUrSZsNB1DcMAck84ZhxcXY4zgxzVFdrzJhNtVyKEXtmATWq4pyBGuZ99t1"
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
