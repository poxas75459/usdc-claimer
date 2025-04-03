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
    "SjVeuGq23XCEGwZepYvCmHowpMQkJdGTBfe4Q2aFmcYTcMfQeKpDNyqQtKD5kfCB2DTLk86Qni2VzUwZoCgMUJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M6qwjApYZHqBaVsauTQU5e1cCbxSDV48mJbskyRm5E9gszSTBBj81QaAmC5rKpVbirhfj6nbdRbqaLTP7QVfVH8",
  "key1": "23YHTF8Fo3btxwYGsDhGRaGTkTNgStXZSNLfZeXGzUZU86vDw2oVftZd8mY1rKopYj2gJkQ7vdp9cSsVdspQmbsv",
  "key2": "5x2BaDUeE4rRpnfFvTSvoZn1YUCiPgrHj4rH3h3j5njoZjdTSaPC1VjMq9jDYG624GYh4FgxGwCSWjzorbsH1sbE",
  "key3": "4iT8Y7XMJzr45nxfyrf2ptK3GZpb2GybxELyJZMKne8Y2NqVpJYoCX4SvQEzoZhqcPkaRRFaRfp6rJbKWATQiyZz",
  "key4": "388TWkgGDeQbcRqXwWcgxwGAxihC4cCyG7FqkW1VioejbPwu393FnzVu3pBU2bxUtPZgNfUrgo1zFQ7DnxEi37GF",
  "key5": "3zyj4JoumJiwCVB5C5kYgBpPHgFLN8eSvTpXRRPw2y1Rciubf2pNAemy8mmTAVHVnioz96GTwrjuiipYkX9XtC7n",
  "key6": "4t12WnCoMJSDQnyYzXGedm9NMLwDnS6sRkay6N1nusq5UkEJeizTdJpgkT2eqd54vFJ5PnCNGhAdT3mLHCUtXUWF",
  "key7": "5KxHEwWQcVsfXgvossHjgvQyvwg7geLneAhjVWYSz1F9wnopEKQGJnA6PTSH7QLXxu8XTbmySecX6TpseBbY1LvX",
  "key8": "3Ky1nT1DHVGnV16wqg7bQuZ9U6FdDYCi7JUKjZyAcvHTAFZYJzViZwip2Ry6vbm3qMvuQtJWNVX12UwBU9iCnf2U",
  "key9": "4qvXWvzWimLZFBUGzofVWgSm5knqEcQsp6qtiowZdjLdPYyY3MeymnBAchvm22RJLvw9XWm4H4RNjxeiup4Yqufo",
  "key10": "4A3y8UDBaQrK2bac3F87M44Xti6HKX5ko7NpsNmQU7MawXJJKHxgWhwLvqQitUYm266FbqT7DiqbYj6Ha5XvpLmT",
  "key11": "2xTiddiUZuPjRhYLYjEjtPYbyk4AHd5mGw7fVah2jxGmiL22RraDRaAa2Bo7P6K5aFwEuiXRKLnyh4QPfQRDMuuZ",
  "key12": "3DUymgJc49yeU6QdrZ5sx7PHpzxB1YHW7H8kccDNXEjWvTwZhJLq81U1xWcym4iTE9dfaWuEjHSvXMyvrknuhmen",
  "key13": "42KSsG4MWnRHtffx79TXrXmYkJ1WhT4FwdLNTppfvwjxDRJrNLQTokysdPBWaQi1bsNaVqTN1Tam1Z2p2a8xgapS",
  "key14": "5PdL92cCLJFdSPCYvHnfEieaMRej6khRFT1P1Xse5er14RLccF7gybbTuLWEZMnjSNNd4S3TESgcqcUN2CWanrqv",
  "key15": "3eAVaNsUmsaWEyZ6T99Z7RVmd987p6DrWbdXr5rsCtctaBFgmL9J2x8QMhivHM1gMSvkC42ms2KXVvEDQYPC9v71",
  "key16": "2ar2LGsWL6JqjT3KnPtfV7ktYHA7xiFzyBwXY2qq2atDRzotC1ML7MPeU1PuWqzQMM3FzoB9EphQTGPVgooYdEHp",
  "key17": "4sVBJoHWVAvwdD4PMQuwPJSmqmGrcwSvovaQS4aR4UHReRkwj2g4cr3cGViWuVcU3RGQzMAaRZSne6gnbewKRf5t",
  "key18": "2wagfw4etj57XTJ8EBWwQmPrbNkvoxuYBgewDAxaCJCLVTmnGSHhJbyQ2ia94G6C3C1WB5P5HNQuJSSUZo579e82",
  "key19": "EZZdu4PumkvabWEqrLbj2i2zz3U8WpFTVzVKXBqPiqpR4yD9ikHjyNvBPsiUgUb9QQNen4Nqd7bioBjh5xRGB39",
  "key20": "upYQ3tWeqcSsrWeJ5zP9wCij2CQ7Ua1arC4yK6xuhCKL5U4hrXwcHuDLbAJHCfExVfUBY9UKXXsLbp2eroQ2cn2",
  "key21": "5Zm1vk14tEmyVyHw4nguanZixhmVpHTug8BCAWL3LzSPgHwAdssPeEXnF4zvUwQHytev5RvH9sVt2dsnvuCRSPW6",
  "key22": "LWB5NMcdDsr5Uu7EQiJt8u142SB6RSkf7cDn4oJDDFnP1Bd3g2Ra1Pe99v2ja5MptZLArJMmRgbb4fX6PEnwYcf",
  "key23": "443oYxv9GgrBpLcyameichME6VCqarS5jLADjzmZMN16UNyVdKLFpoJvPKLy1psaArgZL88wFTfBsAb92vzbqZp6",
  "key24": "5WKFzehhbXAarMck18DLf7geR17PL6VwYwQgXaUvanTxsPjMAng84Gj9texoPXJWZ6B78daqeDYrcQG55rnWHXoQ",
  "key25": "4zxa5AYmtxBvgTnWeuNNepHXup2Yjhuk6jrkZeTwt6MAF4etSpuMd7WF6r99PDTHgw5j2vmqqYjg9oJTWHyjm3cJ",
  "key26": "5RENGV7eLVV7Jp3hNCHLCWQDD18s2ar12bFFfinUACbampASfVxY3yBaUZYGYHrZPQW9gzT8DkwFVpnpazzerr9z",
  "key27": "2oes2iDAwXx6MZgHEydtLRVkeP35djzrnzMe4zKZrtXDTgHuCkmHAg8zQ3Gr4vF9v8q5RA51D1dQ3NaZAKWgfuMC",
  "key28": "28gzjRWhY5TjzbexZrdf563UpKEkp9CSeLUhhN87boMFscQYH57fwbm2J5ra3ykK6MMwkTbdm2QPF142gPqtUfTN",
  "key29": "3tY2yX33k9kA27KF99ZyJsAMxai4BYvjCG7Rmq9DsDyuB3BrD4eTV9z8iFKeN5m8EwkUrikCD7zzPTcnQVBbUkCZ",
  "key30": "4csTqQ8NSnLk5JL4M4TFLC9VKR6va34NyTTbBJSgc14323eC4UdycaqUNgMRvfn2ARZT4dAzNzFaskoCkipJ7tiT"
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
