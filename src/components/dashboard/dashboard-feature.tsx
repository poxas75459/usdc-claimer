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
    "2Fn8xVQrAhWVhptREV4H4wQzo9dSDDu8X5RDCSAnFNCeotGErdzg1CT9hxbXfDqB6wH1vvJbtLu7dxch8hfMNjCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G6iSb1iRdpMP5AeRhfXqN8cCXGRJv7aAYvZLV4aSuHiyyJ9t3vcZkWzyGmDk2UXptVMxjs2e3FcVq3WEmnqHkgu",
  "key1": "5a3BX2z646wpC3t853m91fFDQHEnYJMuYJ7T7YabrpeD1HgCwf1GkPCRNe5cD5s7KfkD13CCR5CTr422dkznGuZb",
  "key2": "4Vy6FoxDc8Cranabbke4ejaBHAf1s8NteX1DxKEd4D5trbHWKtTPyiWR9oMKLFDih23wRimMFvniiai92P8UGXjk",
  "key3": "4bRDwH7TxTebABDVaa2Qybaq4VYsrotLeAP4P34tD5Jf3iqWsuai8iTtjGNGU2CMrXNb4Be2oBSeyYVtGs5J1YtE",
  "key4": "5vSsisXUw3KKZ1m75S8oqaUpy5mzj35dqZQFKMvxpFFr5C8PE11ckJFYP5g8FQqZH8kaG6H288aycSbFXo5GQmo9",
  "key5": "4NGHQrftFdEEX5buEFBjcDXG5L2KcunDvr5AZppDhfBwfWGE6Nie64TZRugaYbrmBFqRvMFg9L276rRKQKp6Syhn",
  "key6": "29aRB3VV9hsNGXTnVQPxoX4FCKUCJyRUt9FFhTRS9Cnz4T45EF5XtpGginRpFvxtP5aYEei1pxcAtE4D28ZmQUb1",
  "key7": "55qX8Nz9e6KJh9zFEMg5qPnUHAPkdiAqeakrnpKM1TU2cLqT4AjXU3bqxKfaNYyFpj1Amk3Ux6PikL7Jn88weZas",
  "key8": "4sFtmtXbwoTjHRN8D3HthGhXiYYFZrhQFBogiQkT8uVzeYccjEgnQqCn3X7ezF7SKxfThfBkjRkbLqEwsdE2A7jy",
  "key9": "i7Ub57QXfN8jCYKLxHNrxN1MFqUVgsET4vnKdAJm8DsZjT1pNxRsNPc8LBYjmFAx19oEwVPFTFa8h7vbG8xeMK8",
  "key10": "4uqx2dy5WsJyPMT5qoiWDAaroQuEBQU71p8hfL6S4ummKdqMM4FeUWS3vkpFQqDaGYC5dNd7uYG8zSGBkVQD7vw2",
  "key11": "3vu7kZAhYp1wTeYSnW4GZqq5SwzK3Y7YPnfHVG44Efasdnev5CGHnK5DLxthcoQ7kK5kREwyJLHhM7cvqbnPRCNc",
  "key12": "5YvFuXrobWHki6vATyjeNY25Qdv4LxphP6a5mkz6ro58Wt6e1skYqoC487xDf2mBfypLYd7j2LBSmakWbzS8TXui",
  "key13": "387Zwuy68v9eAZ9kjpbBnSqusG16hqdfaPdS8gNL33jNcfcEUpHq4QD8dRkHjRAuoiRh2rxw69rxWfT7ikdaEsGq",
  "key14": "3138jNBfLwYRtbXrbmhG8wFMe7WLD9dRsWUwGZ8LGogPKqcbGqKptded6m4S46z9TC3rzHe6trnJd9pQ9xXi1Qdj",
  "key15": "2fUgc3EhFw61wBBcVmNu3LCK4T1XqE32ovNub5x5uVcs4RLG33fjqZJdgbcdhyxX9NHV39csiJajvngwJXU8GjwR",
  "key16": "5XR8BgTM8qz3WyZEWFqQirLRao1CMhpX9iTB4cvdj8kGCXKAnoyWue3JVJK9hHEUc2XEUnBUWce6rmxuPfFhsEPH",
  "key17": "2Yw2w49QUrjfLb9qrHQsnFcopmvUUELSZG3SDHeU87E9k9Z3qYJjZzAQgGFjiy63gQ12oqcFxF8TC9CgWo8fULui",
  "key18": "5e3my5yswYfsEGJ5pfWkF1VgdrbY2ngma9AbjJESeKkRkpJ9XgcrBitbCVcJPs1CSJxweACp9M6xbmvZuYFz67fP",
  "key19": "48nezhKAHTH9W461C1Mm1xHoafT9irRCasX2VhEH8HxajJ8iay87vkCejNYXd58bK2bqtjgJLUjqzv5LsZJkp4Mp",
  "key20": "4PLWJSCiau2KodrXs6BqTwCbV2wdvdNQJHDtJi3KgWGJsKdqbc7fNpFtD7dxZYaFJvyXhfJ1RPqLzFhUvoqQoAes",
  "key21": "r9A6wk9XMzSvW3bvUBtmSRFXo3YqhhLYwonD8MQUNTZFhd5X27FB5qrr42BGtNDifAUSpoxdK7g91YjNodE6Vha",
  "key22": "3F6py4C2TwEiCWXb2UF8CPytuKxL2tyi8VQka4yhxa5xPYQaWaekh82rgrBoG13qVsaVsdiEuauzqiBcp5roSTGJ",
  "key23": "4NdcUtfEHGsc3sf7yPUqANb5uEMCM6ddJUeMvEqqSdedPtT5kN2jyLKXV2ukVJ8HU9P3rqeEnmnLDGQmTKrmEKc7",
  "key24": "3HtHSipEqdYyLsvhDkaEqtynseuZmmX1xGdMrmUBVt67uHBomJRLNsE8dtcKg9HxMai2xzYtzeRwMzFnUB2JkWoj",
  "key25": "rqW2RyzDdH1hmvp24E2cy5cKCa5M43sHcCPqgCwrD7k7eTjBoY7Z6Js5ke3VRYiQTpiKxYtkwejG6GFuFotDUtx",
  "key26": "2eZgFBuwbYdHMmaj6jKZCRNrJwKKZRZbMucSEqqXYMwoViZdb8z1fiqK2mEkSh2aNWaQHWjvBzusMj8MU5LP5Bgo"
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
