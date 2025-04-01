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
    "9GZoRrAAoC5ubcH8KxtNWYS5QE29YvrcGSJMFFUL6XtzjmSnRi72KyzKzpidsUMWdnmBrMNwXYWVdjfff4fVSFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tdNyL8WDJWtpxLiJsaipz5E1iJTxT43aMPqA8YLX99emv6fd7XWeEczjYNKGoDAautesxqvjJvJuNWq9HUJD4Lo",
  "key1": "2FCo2UjbJ8fve7wK4TJ5ndgH4ddLxsh7Lz7saRSCWyZhFM65Jm9rEzMeNAiSWN68B5M2qPVfdT9rP7D3fnsJhwbx",
  "key2": "akFYXPgq1tPeGKe9kzWG7sPtu89UYx6y2qgHnEmDhyzKNakSsM9Psxfhns214FaVEaHc893EQNHt6wTcJdFi1yJ",
  "key3": "65M9LLCcv6PxJzs8289EijAA2VfpJQszMHhGuvMDcd2d1Z8A25m2yqFLecz1hxuQAS1tEMXG1YyfQW6bBAMt8z4q",
  "key4": "4RJryVYfvSNGbCXA2kcLQsVy4m3iCHt25UgGYPiJc92cCJS8hnpLYHiaLpKJY6Auyf8zRoiRnpqDu1oxuBzzeWMq",
  "key5": "Ho2aPTztwiTbwN5ZeyHKLBqn3ZNf3i82GeoPXdMmBBD1Vi3Nho9y2kM1S8GXCQ4JES9BbTfVN4MVffh936aT5vb",
  "key6": "4EPCsVtLh9XfvGxZvknE1kD2Vp9xgqAhHdjucMX3k5zusUUME3m9AXyLN5E8eftdKUAHmQJpesx34p3GMqfXtFug",
  "key7": "5YtcPMXxRS5LYvapbfrQ5ZjfVH6VRX2KWSYFsjs2AYjs8ThGxbEysMqcwhMNNTcKg5hpwrXXdd79tmgP9G3dVosF",
  "key8": "JdMkvikMqJbMjSggr6ee1xfcp5JtGaQ7eQbyhxDFkEGy3X76KAmxde5EE1py62kd2Jgt51C3qxCxAEmdy1Tp2hh",
  "key9": "4orz9z56YG6TSH9HyewLybwi68pRCzXmFrKTLRcysXLkJ4kheC7MvgEYT7Az9dL9vyLgcGZvNGgcrsHjxhsApx1G",
  "key10": "5ozsyrpcgnbUyPAwJ8vtFZahJCU9UJFgfXt32wDJvqtHZt3GDSM5iVTVzuivq9v2ACJ96Y64wkwVZiQNWcx7L96g",
  "key11": "26b96SCqF6EdHrgFg8y8A1SScrieLpDrQo1oF1B5CJv9ZHNBQM3VtDGxEWJ5d7J9WCE4EsLYDZtNU6KmAutAQLAu",
  "key12": "2tMxb38fbEdFGHon5B2Q3go8ZWFJCw5LoCLYo1JmdvVPDxP8PUg5kCGz3MEeMgcF8dvx6tZcdXPv7U5LqWYaSo4M",
  "key13": "3RkUaxyfEDQQ44RW9zVhkXfaX8a1hGLPUrLbTCSTe37T2UcEDiys4hc5b3j1cFHEZZaFiiRtBe9XhnNhM9cdLdMz",
  "key14": "PN8pbCo7jtreDsnG4VLwhVmLL5W7BEMrfAr5fR1cn155EFei5vkBW31X4sVSE8Hr5yoH3nucGNUG6TiaVFopCe7",
  "key15": "5fNYt51MsKfX1tXzYLuz8KJQG25aot1ehJ5rE2SPq9CoS4bENhjzwGS735YfDUAdDkAgpJ2U2S7EGJzfj91NQE8y",
  "key16": "3MHXXd4QJc4xRUK5V3pAx7VaGQUFn6uEgBXSVyKsALZqge9RY3CWvZ8mzLbBQvhobnMXx3TU8oqoGw6AJLWdEf2M",
  "key17": "5XdVNdogSyeF38zcdV5SsAttMeqT8RKTofgzvgj1unpeZ7bB5LvRq9rHYa6KumVgR85CLp3kZgBdungv99V3sZCu",
  "key18": "3nTbyvrhzktCmXYYVzCtXHNi9B2e842DmjUhpcKSPM87ceu7HpayVgfiZXpcfqj3QpsaBGqc8CMpozjHq1YLitFE",
  "key19": "5ducX6RBKxr7dePA1oxRiTRiHrH6CPPbJTrbvVsEokKVtqUdxAG6nqfxwfCQyUaUingowPaey95Lt17asW2dGHs",
  "key20": "5XS7bpKYKULrF3v5ToTFPfvLAnSuaW9rqFxjZFBtrCVL88RXJb7xSvNakrmJk1Ye1TwaHYdE98ohk7HtmrCt4Dxh",
  "key21": "2HTuXJyASDWKpm5z4678CchvSVwN5QUMi69kNuTnkoittdH8XDYjAGzAv48b9kkmsBGYKMvtDE6DWjiSs1zNAT7H",
  "key22": "3a2ze9nmC8fQN4i3aZvP4q91weFHEtGWnWXcZAuMMpungX1d82Dxbtn24mNNehKVECYLDJRwhhNUyGjNz5pud6ZT",
  "key23": "5BsXVGhubRCgLYrJHPB9nntSWNrR1iE7DikJKNEPCD2e3jEHJuUp3zyfm24WagxCY5QhHLZVc8DiXPfFaGrNXthL",
  "key24": "3jQBWy1tfGets6FKFvKJR3kaocDNsy35k1RJCkfRWLe9KpvsqNzC5kagARqHwVeuvvCJty1DqBp95pmY1wWx3Pwv",
  "key25": "4FrmpspKN3sCJ8j8AxkLNapy4P9pMpD1jRGVrroXJ21hnaST8gCTRsYDWU2uChRryxmndPn6yGy5oqKFCFSyS4Fi",
  "key26": "rL2oRFAAknJn5eDf6yxi2PpaxjjmYbf9Y5okdrXFe6sNbQ1Gp6XGqUks2QxsEzkiQ9idW8FktVdUy6HskB4vtk4",
  "key27": "sQ3kPh1aj3C1yjLeoX2GFHRdr7pjWQhEUdq3kNu9thYad4oy5azodpT8UnnUspMdf7vAG8EfuXqELnex95ckpTL",
  "key28": "5XqFPCH9qkkydDLqjL962hDnJah3qaB4vtc2smvmiVkmizyUMrGmt3XdaZc5B6QgHbnZLpw3pxTAWGct9cRdLH1E",
  "key29": "5448LvgUwWufWbbtmwn3Xez37xwAnUDAiZCkaMJZxMo75kWAZGwr4xXD8C4L3W8CDyWZYGXENusmeK7R21RuUE8T",
  "key30": "gK9j8XyioWBJHJ6YxPeXmC7czHtByqrc2bx3ysJEBEmFeEkhQZRzPdzEgwLny5t6RCUEGC51R6H8ZxyaKLmaKK8",
  "key31": "3aL5fxpqcxkibqEfSo1rms21WcwYm96dwqjpsEWbTHkjPEf2Jw29kUpnwzmhKuG7Hwu8rQvFzwxr4YkGs5HbY49o",
  "key32": "2XuWXQbbLNJWwkW8yynHrywd35xT7VcQDdkLz25ZvNVZKn8PedFd7M3BKGcGxK71rRh4yA2HaLf2eC1A71KmSimB"
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
