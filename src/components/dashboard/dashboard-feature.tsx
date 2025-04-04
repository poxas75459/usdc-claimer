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
    "8t9bHYFJTCcV4mdGPYCtfDvQfScKWeDMJNRQbqVMX7ryhq7AHyPNZ6DFYmDwJMJrbig5iKJUcCkLV4g7htwTvL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k4DbJuSbuJXRiL3j3MoDnUmQDC9Fd9RSu8Qpq6LgwgiTX3CHJxhoxceFQovo9X4SPfPdCjDT9XLFRs27GPf4mY8",
  "key1": "3F65tFkMHTF7mH9uwb3Tesm8KWn6dMxgRt5vBP6D8uBEMeK7WVLHrxFnVCBHnVEZaKXDVK2A6tobuxpqVgCkUUt8",
  "key2": "2b3aCPutxkgEjt8gzHoQEkWKwH6QCDy4WfX9bi9BDQvb4hVkvCj9djayGwkjy6LS5MwtHTcTBh59jU1PWnYLVJbw",
  "key3": "2F6E8P9o4nV7QDpFgX9sb91ouv4rC47EgChB5aeKQnSCGv1YqtMJyDKs3DemR8wNZk8yyFATydFxteVYrrfyyH3Y",
  "key4": "52MTtZDpZkXReWzqK3aSpeAWpKHpcThhf6dJnThGq82kGHMBL5eXDPChRUcmEbvDxLFNBeV17jXPMx8t3wSpkGyF",
  "key5": "2HKReDz3TLSDnhK72Us4dAWkt54U2xjMWAjYpUMuBjF6aJsCTbRPmBatU4PdSDMU1can7sPHyHiNqcjipqFZFMTD",
  "key6": "2RXGi71xK6gxDXJH2ndaxNYNyYLZSsBw1gBfzK4N9HmYA1H7nifXbDS1GoS3kkVXauJdyRxXmqma3hbxgLFg81j8",
  "key7": "33qGjQwnffjPy8vHqPaKQRsFsFAmnALAXzztxcbiYSyXZTFepZ6Ns9iGTEa3qF1cuLTvzYpNXVZZ4e9WrnKapZS1",
  "key8": "4QGr1kqBNGtU5Ewt6TgExkFHVqdkNQBTzo4BW7BM32TP3Ver7MNP6ESmR7bxGvBefKqL8SJBhd7uEYRBnFrTFoud",
  "key9": "3zdXM5Bjvokin8iR8b4Rr4CaHGRjYsEpY8EMqLfSP3rKvYZgk2XKDUM7ufHhPjLF96UeJbNkPg8mCPCqhMT5AHcb",
  "key10": "3Wfwm9X7KGwXStpiPZqde95NNP3hXzUoWUvtJKYVbJzfdGfshS962rZbz5hJg4mTpm5AWpqu2N7zBwqxkoJoFkTk",
  "key11": "jWyV4ext4dXRfvV3dSqj9aHPGxKf2sNtQ9TTsY4ZAKG3CFQ22U7e9GeaRgmqtKFaTMCao24sTvadoYu4fTLyyPP",
  "key12": "43eAhBAuT3n6bvzjwH4brNGXcDybMAXJdCPW84QuKHexw1KA2zqZrLfz1ojvg855N7HbrmwyWZH81fnFXXsaUkgi",
  "key13": "3x6SViwdXx7BrTkGHejtWshByVHkSkP8AddxvGWDnhnxms8rRY9egkzmnuqAo5ztv3y7SZ5645DfdGS7B6xLAsYG",
  "key14": "5K1zG6qgqWmydFpw883aXhBfWyNkqEDHBAy3PzuQTFqrspbaTJiFMLj1K32BMxMrxVP2Kr8b1xcofstMqw8suTJC",
  "key15": "zwxsevgDjVfed9gKpmRBTYPCLxEV2Qu6XiCWEM4ea8h26ZJ3vErojVuwV2BvcUkiaSWEorBhrP2ZKhiN1LbPjFc",
  "key16": "BFwLHPLgLjRbdLuQwQ9irVCmaPRDN3VEs52yuEFUtdwse2T4WjGiyuvBTpYYoRPfGhQrLtHpt93fK9tuox79P6z",
  "key17": "3seB9cNJUUo1wqP8NLh1wkHZsWBPDjz31Q8XkUQxLLWRs6y2EYGxDtoSBRr2fpngF9T8mgLXHrtS7Dni2p8pn7kE",
  "key18": "4fuXYk59v2XoBnHFwDGfw8B9obw4Hu3eTGqnnFKwc1bhi8T8kfJBGgAey5XMrnNX6n9AiGKToJegVuymSQ59u6P2",
  "key19": "HZoY5Hi4tWvC7V66H8w8rXnmBdRCupdqegRU4LSuCT8i1TQiVrvu5PZUUPqa6NzmK1qMRhKzNguu2zvrakzS3Sf",
  "key20": "5efuobsfmkxWaRj581mmGLLvd1Zf2eLEtnJ1QVozhXTZ6hGHoP6FYEmF6oJpytKh9FDikao6iNcvXEoJ5B3TmWVw",
  "key21": "DtsqT9fszbuUGoSiHhj3BNy36a63fewBb4LUhZq5creYg6yYTWs3RTMYvmw1GZgsyVD7XCVbsG5Rg3ALGJ9xns1",
  "key22": "CRr4eHMm3CLz5tFyHB4apkL8Lt9hWNYteG647MHatR4NVsh1EWhxhpjhZfxQgXvDFxC7CJWLvTmYnshLnPq81iP",
  "key23": "2ewd5BkK8PG7DK7RaepFTaUos46fXakRvCdfyRqNsp47EXT27UpuV8VSq9zNmSK4v4dJfh5szFUnryp7aHegmHXB",
  "key24": "41p38fXJrE2dP3eGQJgfAtdyB6piT1MY3AiHRxHw6Ry3bw6JR3qPjzFCUTJwbbGFipZF1AtuFXQpsjYkoLkSkZH5",
  "key25": "4eRjAhEksPEoMnBQjc4mvXsxoUFCH63uit4ogD7zQuDGCzKq3x3SZoR3G11nviQ29wCfVSnoz5NVEotwcA6Ev4PA",
  "key26": "2jW1b8y5GZ83XFnJuQwVH31L2g9FofMd5dgsTSfVAZru78uwieVYn8DZgc48N1EugtwS2ke4v5qya2mYdPvFrh3i",
  "key27": "yFDKKDvE6tAinzsCmaRbGXC2N9SBsNB7ynGNdGm52JDCxxv1BszesuxseNeAEgv6KR4dFH85VzmdRMQht2hG6Zc"
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
