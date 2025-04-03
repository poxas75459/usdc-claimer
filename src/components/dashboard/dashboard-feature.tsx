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
    "5Aao8rToU4dKhRXyGhKFWMwtyq8PQD48GWYAhkoGv4DPxd63uwd4ti5fAA1BTnkqzMdo6AfkxPfYQaZeNR1K1Z1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35K4HZfBK3wsMdL545yEQJ6SanHMNQvuZYZN9oaHEYVKit2zVApoeuUuG3qh9Amk2KhyqWrm57JnDLUbDZqRnXy8",
  "key1": "4J6kJUAusYdtyrcLNfUP4FviczD7std5K4kBEvKT67VfRf8mDW8EiQG2HfXNTv3CJZTDFRHhG6iVfZfv3N2rU7ji",
  "key2": "trV2osbbhLqxdXQ95mmfPXDbqdKkJ9ZMZAA2fsDMuKcbHk7p9pKWvBbzvWfh1P6BtKboN5pgt927kNDfJMTPZuD",
  "key3": "etwnPoyAocrv4AWzp6BRjtBSiV9vBYCRSDZWit6gUqiD2d9AFH9SkEtufMDFY4CX2vQCGzC4KUhWscu34BMETzX",
  "key4": "4XbL79ycD5ohxtnVGRqZkUdUd6rJZEg3fiz9X656N9ApdcGYhfrMeN8zhcbe3aL5gwCm9kXm61eqKZMXFfKXJGWM",
  "key5": "1ima8GsVNgB65BBhQXru3mkxjn7MVEw3NPBRVA6xi1SiExAvaoeC25VaU75hgDSUPPhdCWS3o6sm9hxjQjYCg2S",
  "key6": "5rCEov18sXrx9NP1ZDoZhKYnsbPWaG4wUAiHG853zqFr66WsfdpbUUyz2Dt4rhKASJv6tQQEpY45QzoSbxkUhAoa",
  "key7": "YsrL7bEQfFASQ3TaCGDsYfkpsfxzC4eHbyNgpwEdxTs96g6AnzFciwwyjRcUTkrNe5S7Sk49M2PMgg8gzwuEEmS",
  "key8": "XpwEYZSN8UAWjfLqPPYekxwNTCV6jsxU57MvZAaWhRFZwWYGZSEw5fnhoSmbeQnFhGeaC4RSNj8ch3Dbpe18fVP",
  "key9": "2kDCqNV42JPFrSLCUrfvNALMLupYsx1CZVyfPbwxokX5gdZ8jTdD6UR9ddTkhbZzw9jpvZbhQQJBpxy19WHwBL84",
  "key10": "2thaLSfWmTLCyiss6N3hboMUXxuvkGy8PPXjpfsbXH2XqY5sG33opk5kSxFkD5yyy3B6X5MFmbBTKjdJ78TAJ9fY",
  "key11": "3U2WTPbzyxeFuwkPz5BXfcY8mia7jUyhWLApBMfzk2fLaxVn63ThyspMq5pztc9LZbphtPK3GXRFa5d6QsYZqrnZ",
  "key12": "o5ZaSDec5RR1uZBXpdnj9Js3hsXGipogJZB2mMFgJR9vcjs4vjHspbzAq8m1pr3gwGjkTiH8XCcstUipK4pPRwa",
  "key13": "4tMcdViDUe59M2WK1h9fqaGtNVPjE1tfaAufWX7tsBmrpA7nvCFXxgqyDATPvw5ag7ugj6jLkbQLv7yiTSz5wLTo",
  "key14": "57X4eUm9pGWzvSxC8fcrZ5dVnYbGBrnTJpRUDzs2MkeF2E6P2Mt6fToyaNefaW39WXtE6VPxnGJowWNoVTMFXx4W",
  "key15": "4ff8mHW28LmjCEaWJoxxrK113JxdiugguyAEUu3hj6CguMhQs8qt2Kj8s9MC7wD8Frwwodq472FKoM9BqCqGsATn",
  "key16": "3z9CQzqtEixhA42XE3AFNFndB8i2NJN6GiDRcHVdc5wAE2hE1fmMYywe3d3d3ArrRTHXncdrviTTedYRuJoakNM1",
  "key17": "RDAtVoWQDbkpodUV7ty5wbNEfbEGegz2Rkv3LdYi56dB1NGWdaPxKmgzDLsyYvLjkiwevoU6CkehdALmoyuLzTq",
  "key18": "4AhE7eGkXLJiG3BkEX2yQF7AinW4xZdR3U5hYFDpMaEYzJwJ91vLuKpdwTpBGdJcYhJXMzft7fGXLr7o3L7jiaf",
  "key19": "ERVpyA2s3QAUGPP7KTVCoQJHy68DZ3YiugT8mMK4dF2fFTMU5HL9LkTRycwkU9rm9roZ6Sz3RdzVMq6t5nkoiUh",
  "key20": "2AV5oqae9kfg6YzYmxhSL21pYFTUxptU4aBVa9rUwECg7H2MYzsTKo5i2WcaejKDSS4sEauDRGzRvaAEjY9yxSx4",
  "key21": "3AUJjxqcpKREyCHzoRtZCQXJC9ZjLhVvUJxq4p8LV51Ym476nHFf4nYUqtAHt3obB1USJounFV7dE8KTftoT5baY",
  "key22": "23bTH3Y38jqqFHrvGmzsvnQSbuF9DWW3y69HRthuUCxYSfhXXqH5a8M9yr56eJz3wBjALpbQ6nLfgQLJBMofCJdr",
  "key23": "5GoXrY31jMRAwQt5njRqcS1dY6AGjkNWHdZV6eUJCm5A4SLZx87iSnt4vSskA6WSERB5uaHo5juuo1XBEpQt73wA",
  "key24": "2X81CJ3SUvMN7dcikRLPJMKPefrTHbKYNL73Ud6XeMMnjf8mHxHhzkU9xpdynQRHxSej9UDyrnbAqyRdEeZcmiC3",
  "key25": "66MY6dShE2JhCGfBbkN1EQfpqFTHPQQydmUtytyzLsvMEcQVJkPmvjcFnSP4xd6t8eJiojeXY1peT8EarSWnuP58",
  "key26": "4pLA1WrVPCSwPPRnMV5ejwMeUEQthPp9Z9WWGfsbhsNCEuRzSPYuhkGNqnwuLhXa2zTH64W5gsNWogmVBwq8M8MP",
  "key27": "LrQn2u6qvjFGJHSWoKK9ZR2kiEu3ssPhX5bERea7Fy9uaHmDSGHkJvwW7QeTv8ibz6xjUnhBnqBvV5rWd5md88E",
  "key28": "7hzSxbs2smxrFLDyE9T3QAZaqcn7exHKHMmZM6u4mQs5mZykBbuP3bWpxPnaCSmhxWSqG4wBve1xqNDNRwpoQSj",
  "key29": "5Sq4obCUwwevHhSkubXkBYGSPTSNVw7CNxi7WB2uspzHuXXFW7fFx92HciKvz9PiryhqQPeJQkTxD2hji6M5PFsA",
  "key30": "39oKon3kCHyBWNwFs68Lydq4i7NhSByun3RSEtx74qJLrsz27Sm272s57DAPpcbbhVpWvjRNAsV3f1j4ucGuG1xS",
  "key31": "5C9wrMdNbBtZDZFmQH8utZbUZn8ZCLcdqgfvAPEcehwLrR8CsYWCxLLYY5cdnw6KHKVf6rQQFdaySZ9JrWtzBnw1",
  "key32": "Nca1xNyyATCJWdNhDMxUFqugipaDqHi4wNAyBtTpqf7Ga85DLL3y2a3Lnif9SYbTKuFAY9N8PvPJEb2SYP7spzX",
  "key33": "2wwQkmMF747LE5xKdgKeHYF6kz9DvDgtzKEVpQC2q2L4hVqct44TL1savkW1YFeED99uc8PX1tni1HRXFNbSxU5f",
  "key34": "5apPFKBvvynRStD2orby55Xj2eRubquA9xFMKkoBFi7mBL1RTqgoaX63b4dMqtiTps3hgtLauvGfJb22tGf2Qe23",
  "key35": "4bJTeJM1ta5LZvsCXYro7TsaJa9ZXzkeBHfi3QdCULmxoCymZTJVRx6Y4o4kRDvy35qLj7rphdbPTahfEP7KGEXC",
  "key36": "5fcCgSBUAVHaVLtbWbwiPosKMSFTisGCitMeGhbciditZSfzsjfg7MFF6sK5QWVTR34S9h77ZCvgWjGDwjT25zcu",
  "key37": "2ysof21RkpkWoqEBvEohqyumNsHFiKJTReQZoDgd1ai8n3VDMqL1kFXvzsBFLwnvu39XV2KNYWbZxUqXPYARjV8F",
  "key38": "5weZQGDYs3FT4FHUzQPrxQjhrTdPvazYbcYDhhVNQwtpBRhydGQX3TCWFy4ho2jN145X6Jqtrtj8yCpCGBrYkQuQ",
  "key39": "3AC7iYfQN6DWcyqtpn9t2vXZDuMsgUCeavzpwLdG5Vqy36W3auLhBBPj9vKbUDz9yvXkTtW7HFspNr1wsGpoEYvx"
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
