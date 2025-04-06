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
    "4yraNJwSfwBhJEukyCYfyJzzqrRZZkSe6sjrK4F1DEKCPFmSAkzCK2JxrfZBcSjNbti12zN8EzKPaCwqYDssPL4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4219CExXrHjre7ooFx66VZRuLfzSuQok6SYKizM3gbLzS1acGp2kCH8FxhGH2LKwWEYKVHoN1g5yWhhjZnnCAzDU",
  "key1": "4dEBWNkGZvdPKvzPwWNkjoHLrqqf7p7MTn1imzZ1pNvwvDRV1N8w73fbhr3AwSt2ZAZkAjcSW3nT3Rj8GXNgN9SX",
  "key2": "giayecEGR9xKVFdEdgjMvzpvbdZDx8KzqTdws9aaw1ZMygUoTt1vW5ZQtkaqQSDtAqAjpF9mhV7WUCiGVHTQsSN",
  "key3": "5KGK5VzuTr4U8JggddLyffJdA13vDSnxKw7aimTvZDgAXjo8xqfTVjmFMgMVct8GQM6hgUphn233qpwQctXeKAGN",
  "key4": "4viSjcyrLPzEWq7V4yZWsMfHSrhY18nodPvUXCrSzJEoEStt914BVDePnAMomz59m96T7qfrWjD7jUfzAmccnhJD",
  "key5": "5Z5vi9vBTaBDvHFKEkCD2pR5SqxjmstrhfVp61CKeJNoSkZEhLHjsFiaYfr7LzzQdXoEvdaUkKa7gX6QdwGYaNCQ",
  "key6": "4R4q6hsvWuVAznj3gLzbWANuAkA5aRefA5Ja8KDWEKuoVZqyhZBRuJRtmFxUw3NycirDRRjJgT7S8MFdBzUYzXXM",
  "key7": "4EGzSGbQq596rjNcJnXSCFX8SeRZtceeVcvKsAt2CbNmJSqvToywSvwApd2w7HLZ75QMAUv4NehJGDcMoS4GQL9m",
  "key8": "3aSY5DNBD9e2DHriCpT5kwgzvFoBYazBXdeiC1xYQHH8Evi4CNRccpoZXobSgzbiUU3ej5zPZKF5m2tGCjZxqC5o",
  "key9": "5t8NxKXRqCiebzNTwGiVUxNfs28Z6g2WX8cjSZgiBogFZwAkJj4DcupG1pujPzCUHZT1NLw7xGurgdEGxF6qP3BL",
  "key10": "cR841ABG6kGMpjaaAsgDWJZLx7ppMWEpJjWC65QTCZKfEzhsiV7XUvwdjHcjukpt8JtAnvH1oVsGfKoK8qGZ8nv",
  "key11": "5ogzkJxDYWr6R3H7UoKzRDDsge3cgexQ4hxM1oiy4RYTAMVyKsjDcGGGVLBwZ6JLgbxeg6NFWF3rZC9zqapSPYkp",
  "key12": "58KN2wLgJ4ecAXMAAGpsLpK46p5cDuf7MXJyV88VJ5c9yB3F8RoFLt5WVPVU6XmTn9mygHsC7Q6Tk7SHeHj5pyAC",
  "key13": "MJXRGTBWV49vVhonEa6sx2MVBoft1Hun2iFCUoSKSkLrHT7GF3vcGsBjgxckdRLSvV1Yb68C1X5BXeW6NJZzVZf",
  "key14": "37qph6QCKdYDBnEjjvwo5vYUQVfkAVATve9iRdQqiKzwo6LMqhn1gKBJUPTbA4AoLgAkSK9oRXaGarYHfGuCxzUX",
  "key15": "2LjcEeNkEEqB1y8TuXAqj1ruKkCzRq7LKjCfK2fNhh1NU1uRrKzSkgBBDvmqRgg4i1F2HPtdXUtxUordFb8EoV8b",
  "key16": "UpRfQaEHzXc78xy1ott2QFUFAhYKuSdx7i1wiC5t8Ad4x9fgVk29zVjnrHDW8SgxF5YtJhAtjLAFwiw4MYKs6Tq",
  "key17": "2iBMax6siryJyUNDjnZcCWABGqs7iwWHHook9wz7Q6Vhc7RhfTDBgbna4QWb14bXCZukz8x3egkmBWyUoXRYx5yj",
  "key18": "639vruU1PHtLtwMLaKhdsrjoYoXKAtJRtMA2ZBxcCQLHFEiy7nTRf1hhRH8CFyodxADF1h9iiyCyxmBQZKsKX9Pf",
  "key19": "5ExMqhLhFQ6cWQd2PLA8dQZT5B1W8ENrE2YedbDnPq3J3mRFp2LgSmnReE9HSNqmhTqH1o4tXm8L2ApswJtLrput",
  "key20": "pzKS7waNQsFxerreLNM54Ug9cnGF3sBJ7cc4JmrjHAYYgHjz2t2fczAoitYY1H69Rj5eDGWfi4b77rVf7j6Atrm",
  "key21": "58DiKN9oSzFe1isqyJWXFpAqVwNrxhzc6HSnExjAxon9a61x11XvyRNPnyUoT6Lc5dGQbFaid5kV8CYgNyZMkoxt",
  "key22": "4sFj6MrQRibcJUDH34ZcWHWV2AecjAHVoUTLF8J6qiER8AeY7uprdwPmczyHaW2qVR81BYy4YSv5fKBmaDCzwe8M",
  "key23": "BdpXVbQMpCaT35ofxMMxJQwv98vMYe2MyREbRcEzMi1qikJqZSjjqvrAeLL2kdeuDWx89Ze1pgH7VKrGUeJFZ2d",
  "key24": "4ffiL5wV2aFmWXumbjrZ54KKx5G4jAo56syB15BkfnaXfzPFJW4AK2Zz3v2J31DPVkFd5Hz4fkinvk2HFzFj4bLf",
  "key25": "345UBbsZQx6GsMEMJW9Q5tFC8V52dUoxGWgnEhGiNbyeoXbfrSTAJreYBJoQUeSKZzSXFw4q6YqXLeFG6u34Tfni",
  "key26": "ZfBTFiZy2m4b8CCH6jQvYG34m5Z5PT9XBHoNajJEEBK5oMk2Kop6WqiYvrqawBAAmzkiq7rWDWeCMCxLXeJN4u8",
  "key27": "3wrMKemnz9vcsWyUE1hjZRGPRdupXx9TZAcYruSCHM4r2nBJocBxxTSphYFof4PGdH335xKAdXR8xeUeZdfi9Md6",
  "key28": "3svV8ar3Yy1b5P7DDgzZNehA1gdtH19ogiGuqQ5iwLg5eLccHTQbg6TTPGPoa26fDYtbutLkp9YbJhuU833mzoZ5",
  "key29": "oW5w1ASxGwCsP9SU9zw1pqrVgXgN2rnATQ7iBNAVRg59jXqm6PXasCzoJWivobq1L3WXtUQ7u16BUUHk79ukPPN",
  "key30": "5bqVHJDg6h3jpFNj4tQXpc373GW8XTcynrjYfTsC7bEWchQHZDMCLRNieVBgqS6JmNrrtcydEUg6JgCiaUfjyPrh",
  "key31": "4zeTqhA2VgrzJTy6q2mstZea4rj6MEPt7564qFcyWK3znKMgyq98CRsjWYTbpDvUzUd6E37mZrGV9nausxdkpnx8",
  "key32": "48QB9Qdeb84TgnKN5hQkRRWTb5zjPLSvqprBXoi64jU2z8gQka4jTdx4BjE9ttWjfCnVYLgKrUmhbe22koe6PdmB"
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
