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
    "2CJEtbKYsRnn4izdEX38t7M1i71ESsXimgk34wpaBhwrn1KCmqqPUET1AAdWC9mNJJThcEyZrZQcxjv5FTXm7ZCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ouGbet7MHenEdo9nb57xSoQzWwK5ZDKJmoggtKNJ51oqFxsNtZwZF5anUQWMNrH5bAvoNdHzjVRz2bVTXDXiYdC",
  "key1": "2Lh55U8HpYeoEnGqHkXhPJNZs9EhbmLR8u4xvpc9UJvtxs41J4BESdkTgD6pSv6roTbdQASM4tHgSYt1RkeZBdAw",
  "key2": "4r67RmXbGnS7ZtMidYP9E9wwLH7gs6CzvfRqZKTi38x3e686MzGkWtd9T9UKHvjh1huNyubD7Kj2kcYhHQwSQYbF",
  "key3": "2ZXhh4aSY884obL4vL6BQHnpvvy1yfK12QgmbqFhPeEQFErRrzk4AUoMemdxZRKVfR2Nyd8Ark9iBxJ4Fag1iKes",
  "key4": "4X1WcweLfCxCmduafCAupryRof8EhgdcMEQjQTeUgfH6csZ9G6DfWS2pCtAZ63B4uTnbo6H45MHGNtv2tGqTBKeo",
  "key5": "3RegEwW5ycHmjKuJGEJiJ1HikMawrPHf2mE5z4Wjin8arYuXFf9UMUgz68A61ssE2C3KxjuxZKn1x4n6UjTL8DsN",
  "key6": "5mcoqVqegCbzj3vp7MY6NNxidHf5kbz6QxLVENNE4rNjh4qYeBzocqTBALnaGdLjJ8ELXBxrSkGAieGn6LfENUp8",
  "key7": "4HDXk3wWczJmrbxVwhdJQFSps4xxVx3GybwGTciUvgrmuaSSXJT1MYDkoLE3UAzeB5sncENEXE3PzhUcHyTN5KJZ",
  "key8": "2sWzAxLqSBaSbzxucqDxaTvAvvZFrZAXB2ebk5MA1Doog63HdP6vFQnuBPfMmmA7dKbNy3EqWDX4QfJoxC5prGGT",
  "key9": "4dpunpE4mQ5b79NRNXvEgntXr7R5kv21ogtWPn4wiTaFS5UCegJDm3K2EcRo6soA1MWcEbgBQzec149Gdz1o3z5g",
  "key10": "2jqGAHtHZDQPADR5CKeGs967oY9MPQhtxio4KE4dYBzKcfwdUF3rLYdYC5JnSoBRR7BQEACpPSBqVgkRktMBqNGK",
  "key11": "3in24mNcdUVXybNpLexgCymwpYNz4fqDQC3dWZKJ56eYLisyZhVdpPE97zDwo3BhC9nxiR3spEMEFkMaeRPnpc8s",
  "key12": "4rBL7itEWe8LCjZJ5pjM2DAHHXAJPEX5ej3CpdWUnBNRmLN6mZ2mzKDoYkR5LWumSkMwM2iMJpje139GwfL9QaUh",
  "key13": "5vRcfpfBzJEkTPVwwHhRvcsS7HRjuq6CbG43LzjYmy8sz5CQ2swVn8Y5WAHMh5PXZPtH8mvot3pkPnmHFotdF5F",
  "key14": "5JTFBMxJG6MBdmuQgoVrDJ7u3mYD9udzWzNfi8TDKJ26BRSfrqz478W6ZnyEPf3xS2rmKwqp1rUWnTezDBbrFTYw",
  "key15": "5nxB8HjVKvBf64cM3mBGMwr1CRiubtHD5JzB2NKWw2YzSwNRYYVcXHtBNc2h6P3fR4539nN8D9bsgv9qub2hPxcs",
  "key16": "4St7NKj7WcaLbECpyDye74jwx4PsJxm8bmD8FXXfpTRv3J15nyEmVsJvU2fFDULmMjXyWzPUqP8wqqavFF3APmJH",
  "key17": "6d19WEVaKe2XBEa8yHQ8ywafoorGDFdBLSxkrMar9hY7rmQnMWtJ4iAzWbVSYujyr5j9fxp3uCe9wsZopLHUVsD",
  "key18": "25EzfCSsUSbNExUNCwJd7dse8kkotxTLBjyvpjtZPKqnipFxKVWjxAvjd7mvgmpXWX4QJfyGbJ9zHaLZ7iBjLFNp",
  "key19": "3mReBdSsUuLvTC9MyyY7XVrCTFnwGVScYGi4H8xSVmLdDriAcuxNADtAN2wMMhTCgravQDUJQ5X6fT3auus4BufD",
  "key20": "26LqFSWSEC2kcS9fjuGHKmJbHvzQYQrXBZ5RwsbDR9mXDXDA7tCErqao9DGuhku5YzzsxpbgywLQ5eR8U2NKLzxb",
  "key21": "48vVNnUHk5e1DUrFinRPtqR6Cprgu2kxr1F5GiREHcDtCWspAbSQtCh82z59wQ7AaFv7T1pH8cFE9NAtgb2TFRGi",
  "key22": "4FWn1vvjCtqtmzxL9hWyXW7CJAF5pVTrMRcuZaNh5srjofaTXNvsk1Ztf2NXB6AVfLV6MpGRxEUPTMKgKFbbnpfn",
  "key23": "25DTP1KRWDFv5qgAYd99VzNqEJ2SvJUJTCpSV4HDLNz37PDFbh8SqRrDb4io74Wo3VVkLhZG51fTtnZEs2CEQtJs",
  "key24": "3UQUE3qWvqQipa2AzEfeQHjskHQv9jLSGHyrYWV2Sfk1S1jsFXkdmJKbjTRovS22yf2gYErWHMqPE6fcqgRGAQm",
  "key25": "4XEM2oyHaoPRGZVoYhFXrhjv2xAqxXUahfLziocisTM3ckXq1xbDo5uTX13BeKVsYgjzL6oCyLkN25YEkmR5w95r",
  "key26": "4vSuJYwNkCXDZR2XMFSE6MZGx6qYd6DRK4rqNP6DDGRqbp7NGkkDSihCrX9eMEWyTya5BNsEdEtXxvATtsfyezBk",
  "key27": "4ExjiNPC9kJZM9Pqi9WyLNzEfobtu2Fr1KCCgjmwi88xjkWoHEaop4dmTeYiHAMJuiWWhdcqgxn2PkFoWVWHcV3s",
  "key28": "3pZxiFUKTXrX5VvcR4XfskA9fTrVHXF7PgrVozHPh9JotwRmHdRefwx1GEFDAJPAPKd3We3taXi4Jvp3HnxqTSEA"
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
