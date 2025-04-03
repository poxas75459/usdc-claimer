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
    "3d8deukHXphTDFV7hnoDwAT15Z7hQ9TPEE8tY18d8pky98nQAo9jWSw3eSvLoff1vMmERgFp9XQkBgrtTC8Yi7Vj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MA2aXVtm5beQeFUjSQnVFD2pVuzXw3o7phowsbUvVnf5i6S2wS1FUwtDF4PYFGDunyNnRLVfWJoMzdVkYppnU8z",
  "key1": "5ph42CqDYcKth7hRgmmgsHfcLrw6owkuo4Jg221rk8Z4mnjszYZRT3TE6juKw9Ea3RdKw1Nw212fYmFLPrzkQPf8",
  "key2": "2obeEzG3xsNhmDBjEcE9YEcPv7Dkg8HGjih6nDdP3SZYnvG7nhNnuH8a1xKi1J3urEkNSEtfArdqMoM9bxbyzsP3",
  "key3": "3yQcuVFFaokEkMmsLoBq9G9sqpVMUyphKH2hJRhAgewzbnGtbXtHzQtkjwMiwXYMwjosmiLxV7pnx3mdYXjaPFBB",
  "key4": "vT9CSoqZ4NoAtRRPhW2KBXH2gx3gu7ycRwP6knyqL21C12CSbHNSK2uPYj9uFt1fy5aCvERTD7d9cjbtUbmxX4e",
  "key5": "Cn8ayq4mMKe3VQGwDazT3wbcXbLAsazjRzYCuxNzFAKs15c93FecZWRVEhUEPajXPosRxQrp4xQrXkRAB2w3v8s",
  "key6": "xsH6meAJCecvDLGFetaex8EyrpPdNNGnqJEz8jfsgHeRJJPN7Y1i8fK9zWpWK36U6D6wkDUGdLGdQjdkALasQuc",
  "key7": "38SBbESbNiXLvYNuV1ThSDyh7M4cWPxArcQjKoWEPzW7htPgx5bPU8sMHPCER9J2kJ7nznsUrVK7uQnATDGv3tbJ",
  "key8": "4MvkyD6j8tQLpAXuvEcUHsFqqv61CAhvZLTXA1MPb8HpYMQEnU7y2iXFQNx7doS4g9jSQAB2qAaVNocy4AhnaPny",
  "key9": "4UGxBZy7CL8gNhaj6i9imcGvwvPLd4HXYgnpKnho4nNpqWaopRj3kAC1irmfusbpcJKMTZ4RLRUxpCZ2kGCRANLg",
  "key10": "sdT8vhpRtno4XBMcxTa3di4twvoVGVsrmVZNB3HUwZqKV8HJnmm42w9XXkSEoWenj72UsjdtajL6ciLptHATvjY",
  "key11": "5kDQAhChUp5QvwjfuCQpTyi36CMNHqfXb3oQ6HiN2wqRikH8nR8wuvayE738Z8uZMf21VCNxenVUeaNMJUiPndaF",
  "key12": "3VpKuWXgZAqCJ42iWETirDStvHjit6SQvVGN8taTfBtJX4mckvYKQCz6JumAEqGj6FZaEKv26NRnQFDEArCJ6rfp",
  "key13": "4uQnmYqwqU84cLjmTw8ebmGRjWd248axizZ2GcvTCd6WyJXrjS4KVPFMtt5HVBnqjqzXTsCFRVdy45Tva6bBMLrT",
  "key14": "22nLRK6LNNbJNKfKuRsR1tdYxR75WfBA4CWEEbR8XQsgHTFc7i6J7ep5GDRktkTtBbrxvua1eCeKCxzsXU4Chc6H",
  "key15": "3gekzSDgqd9gJ6EM6AEL6wjd7uDiMj8dBygjovwTDFQKWVCwXZ2mkjJjH2uGxgNUS8MH4vippbivf2XkB3Cxb8x5",
  "key16": "3AD5vkv8r6a1ejsrxWRsYc2wSL2h38ySKrBjcBoooGMUxzvdkReqiHywdqy2d8oPdjrP5mNDLFCjjHF8CA6usvCV",
  "key17": "41v62a2yPZDD9hPgt1NXqUMdmJxKQXZTUhZoLnfLuoDDwxGcwKJBkaNMqhLqtJfDE79fswupqcoGmdi1QYVo6gtS",
  "key18": "cM6xf8bYu71cYcNhECfnPmAz22BqekjM1gvqZNC9uSy4ehU6KZZsFipB7p9uZkFy9s9kL6ZekyLVzxXnQjPmV81",
  "key19": "3rPUAREjwLkBT6mCsQCugnsP23e9ccFWpMvCdoqoBu8XdjSqnGSPonqZbKWGVE3UU1aYtHF3RXSJmgD2EE7ft7qY",
  "key20": "2vhjvM16gG4wt3bFZhfkeoQi2z41A2UeBxZu1tkaZMahakca4He3SfmmBZzMYNJzYUMojzmw8c3ZaLJyBgKMAdtj",
  "key21": "2Ejd4XGsTbk5KcVi3f9iLDMT3VF6WG17ZdwYtQd3DMLF14ouH9umX2wPZmVo18uMjRY3aao44jWfTCSYfjxwqQVE",
  "key22": "4V6FBvxCGaHAW5WkND8r4kbZrMX1LopmKa1J8E2dt9FbJYGRFjfHJrez5eoCzk7NBu991sanjXYQfUWYbcrukHGa",
  "key23": "oq4kivxdtY4QaECuUrLN3RGd1qkAwD2cLng8sEFrwRYJoza8xPoRZFpSXgCXKkhhQ9CE2gDocpVQYYbaimyvW43",
  "key24": "5jCkbbsU4Lzgk5LtfsbaZygky2C3nNK7W9WdUfjCQ4WuGDqJND3ziHhtJEX5XAtu5X7NaZeQbVDWjGPyrPKu4L8X",
  "key25": "5GFVWwh2JAY5kRQ4wDogkoxkcmEXBoaxFQ28w44uT9Dc1257HZaqhycCd9uCvQXhjDFcc3AFwfRpNsjuaedBQUMi",
  "key26": "5yqSjyYAyzGs67vvZ87DAdXT9eynkSAypznRr6AMg3HV7rL5H5DWX6jAnuEcDGXywo92ZV5bGLY6UHR54wRyvwrx",
  "key27": "dWHqqCbcFPi3xuMs3STs1dCRG8uRg43hQyvNhL3T7JRptqeAjUBZXz4yu7YgRMfihV4t4c9RcGbieN6oNDHCQwS",
  "key28": "2j3VG1L4o6b54GAJ6VGWBoeJzkSxekpaZz1vvzesdze26FQtnKfx1eXdvmoAvn7fopoZzgFe9ET2hNawMKcwCaEP",
  "key29": "3HKRh8vEn8AdZiepDPbT7Zp9wUrQkQLDLvXhPwjc67gruwGi7skcMvNqeF3c8LpUTPtppsqGtixYXDiTfYMXoAVT",
  "key30": "KS7gjWsWjiFa4FCHPhnHaszRVMAvG3hCjUj9YXp1F5EDwfF3mA7PVhwu3FBcfA9cKvo5YBsvYTzaxYH4VqLQjWp",
  "key31": "3xCRrUrqhSCMcL6gfA4XN8gxuQzYm9DjvM2myv5N1UvXziszwgcHMnGAGHKQKXbKzYp47z4TXcktTknAPgN1VM28",
  "key32": "3HxwsRXzrF4B6ouqWBoS6EAN1HAYADL9hBTxTn96TyGzzdrtyFDyS4eryhTfgegCyDfRFbhq1SrRj5vZWiZ7kFvz",
  "key33": "zsTPKYSbwuc23tTAVdTDCheb6du8ZagijjavNFfjNL25reB42jH9VhnA54A3W1RbN8Zg6f3DGnLmmiRyVUE8qzc",
  "key34": "5vVDXKiehRzc1T6Qi1xTLzuDzjv4TzKX6P7Cbis95UuLStUuKYuDQ6xGXLnxuKte5y1fwULjYpKc6i7SipxbjXhs"
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
