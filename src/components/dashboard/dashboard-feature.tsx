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
    "3juFRRfUQvvu7WmZnACwYjMyYAk7Ue9znZZchhzSERk4XTwSLGnmmZx1Kwf4uWrmorrPpyZcrTj46MMHVnWeggEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J5BQn7LjPwqvcTDup9zLf9fp5Uv62tN4UCgK5VcJUyqRJjwaXZ4uGENbvnAj1H5L1fbcB16rme7uNXXgXcx1vcu",
  "key1": "2mE1wgARRd4SdujMXw2gVErq5kzRBLATmiw6sMu1tHE57D42KEDqNJFTckVFP8WKt2TW9tC7uwhKbSE6D36x2S6c",
  "key2": "4Y7Rntm7j4BV9TN1xR6fdeq3UNt4HZVoKBqKSW9T5Mo4ssga3CwxgFyAQTssfph4811h11SPjt6UcEsX1xwW6ct6",
  "key3": "21WT3d49J1Tc2dksE9Btuhawg1FJWopzvuipz2jiFAejcBJXDTdeALUEoXieKyorzw3HBQogrWGTyR9hnRaA5tft",
  "key4": "3uJGGA5xJVuCu7SDsUiSiSeMpz8wHujBXo8AURor5o2ZEfwvYnm483GZmMGuDqprip7JxFuFvMa4ZwV4bZB4KRF1",
  "key5": "RgFaSYMhu2c9o5cARti2q4durWHJF84K9tBu4pv4g7M1Mp25GwBLGDJmKeZzfx3uYirQRYPqmAGaDaMhbvJqKcE",
  "key6": "NhJZivooaJF3XpW2QSdnNkprfcUG1Xj8atc9tkPA2PnHfd5y2tnXp78mJPGkVJvnSGgxjWuThibHsv4bXZC37dg",
  "key7": "4k8ddw5QdUvgdq6CbQMrGq3PXeYBAJ9wc2RihMsF7saatoqGC4P6QYxmFALTDye5DfucFs31hoJekih4XW6yo1fg",
  "key8": "4F5MQbC1FP27kCFBKHjUNvWB6mep3Pk4gremaVdo1kTR2vJgFfEs22W8VbVumNmZw79S4BuzL1AMQDtRdXEw2nUM",
  "key9": "42hrhtcKArUS18AVY1eT9LRD9TEtLRGxoCFoWvHXwH9Up4gdhnHXxCTrrdvdkaoic9bNABezuChziXvMNqcWjR3Z",
  "key10": "sAXmBYMMVBfpF8gRgvtpzeEtzrEJXdxXZaASiuq1yP3NCDC1qasLf2owMsjdV5wW6KcfZrRvJ1L4u3vRgFT1Zfe",
  "key11": "3SevUe9eh5jMMpTkJbcRAvAwtWYnGqo4MitmChU4Rm283Rp2orE4gyRkJ2ma3DEmJketBwWJnpK2X1ckt6tFqZA",
  "key12": "j44u5beNNuUFGGP7bfpzwN3JfhrAUcf2L6xkbnXm7SrmvgK5KzAjTSXWP7BXE7ajoke3nAZ9ybYPCXUmxZ89F5b",
  "key13": "3oiFbNgYiQN4i5dBRFZLx5AkmLE5h3sdrqtVyGVMganRtRiVMhPdHy7Ysz8SgESDEfhADL6zKdVLKbrvYuNkTANZ",
  "key14": "4hH46i3GraCjZR9cmK2wm3aCKyc46WiciDEUgNBK78mQveWf8MPV3YwScABzkWyBWog81cCD7dTzVKgrS9x7PZnz",
  "key15": "64UcNe7EBDxrmARnsQizhETkEFZxX3Kh5fHfjSjGiVX9f41Yt98zk7a2ztzfp6xN1pPLk6x16uw869iDpCViUHdP",
  "key16": "5h4yV7cbojDr4umX6mQVftS2H8hBtVdtU6D4UWx3HBunXiUZZnakqL37WB2U2BEWqywEEFb8DJE1eJPBc6TBQ9FF",
  "key17": "rVnSjRMbvHXvgLSL2ww84Uy2vA1HpuUA4wHQBx2Ss5fQw5WxiBBhk1sXJDFMgqnUeFFFAFmdaFgyLuiXoY7STz8",
  "key18": "3Wzj3soY7qWoGZHfqb9yFw4zqFHiSJ9JfX9D8aGKU1R1tAdkEDZnyrNyLTZ4N5DxsVdSZamKV8yy9mZSegcJKnwP",
  "key19": "5Q9rccjd2mGnqdm6VTrbmUidSL1jG64sTb93a39o1fFwrNdzwPJ5bzyVS2UWJ7eu8z55Ps4gMHLw27m8M8ctdRfB",
  "key20": "3GBE1wAefLK2ue1MTNRw1SoEQ38hQieBXKfBXLCd1hiFCwrccQv8xDPPdysoa8ib3QuYMNcQUwKZYWm8bao2ET56",
  "key21": "6VhFqoXCXRsjv8rjMnGhuwmsDmQ1TnYc6hEcCzPTtH4e4MKPiFo1JNdrEnwoJyo7BTMpaFGQhGHnHHaGEzGzhtv",
  "key22": "3Hf1jbiCMmsmKdKoh7FoKYhm2rfH5o5RyRGV26nTmsYxauZFN7X4Udt9pyxqxx4jmZiHJtmkukzRMkQQzjvoJRqH",
  "key23": "3R7YbMxYGz9Y5xdEAbhEopCd5JY7kndHq4XEh9jXUf1yCvBvbvXMV7nEFNKL4kmkjsu3WeoqPpR8qttzutNPosFn",
  "key24": "2Wu8kXVAMMiq611yWSMQvWDtGxupGz8PrCRh1nbbfhxU9ofMdiA9PFeX9BTVTASr1heLU32k99S11XH21Z6DKTEe",
  "key25": "5D1Tqvh1S6TqaqTHtzSkQUQRE9c2LbveeYw7T1AG7Qf9sYp9k9VXsMZQNEzTVZhVkPgbQikcLNrfxZ1hpeXTes1V",
  "key26": "3pmR2xZhkfpD3kUVKSPBEpy1veT6VUqsUsJtWyRUayc3JPXEUjMRgp46toMHWBfZkcVqJyMWtmWqXs2vX6YkkNLa",
  "key27": "5czhcKjx9LhxQJuXsTj5WDLACrxCYNuwBbH2otFkcTeFmHkxpUo8PEyndT6mGjJSiySYim87vsVSVZiYPhEAw2Jc",
  "key28": "2kYCGVpZnyv5CdMPYumT5yg1dhQHuBsanVBKGKZ9XjcD7M8o3AgFqgygr16HN6wUgppnJdQDHJAH1guEaFfx5ug",
  "key29": "2vDcCYhmmZrMDDENityMKDfTaUc4trFMwzNdtMMf543KXTthH7u1eTLK9pATyYajVyewUqLgLw1u6qeA7Abpfsuc",
  "key30": "4m3KvEJSr6p8fSfhwjNEcpZBVFrvTLwFeqSBg52nX7vQHRA47EKthnisWXuYbfYJE8EgcZem9Er9m2RwdVUMhshL",
  "key31": "4m6jWchidkU6UWgXcxQVGuZUffHTK78B5C7e9D4BiYAaCPLFhGACLQ4VSKDg8UtninywWCssT83qYxyBgecZ5KAU",
  "key32": "2vSbMot7sfcBg5bKoZUX5y67xp3162vqoFrq9hygsYhrD44ACcY7dW6CvTEgeo8BeRDhQq1dxeCdKtqq6p17Q5xB",
  "key33": "5gcLmEubNmSZxzXK4ovBzW6pSikS2ymTqPa1Z58RMteysjcokdQLjGmcKk2JLKDBo824oaYZiKYJ4sVHodR1KTPB",
  "key34": "35rJo83snHkkua4FA7A29xVHbdB1fDmYK8ShUY6gkrL1LGx3ShREiip256kEfs2MZrG1XU5deowK5rBaYNAf7sTm",
  "key35": "4rSrQBh22LNwcPwuDjp96uYPyuLmHpcMweys3kzzmkhKJbehFrZk96vmTT5Jo22n3fRzKyuAaEJR9vh4o11fbVi8",
  "key36": "5yyd2gWCHpu5LdJQFZVZiXJEt4EtvohDADHHdz4kQhbDJwgxGrUqae3nkUUYRMQoX3gNPXeS8cVTxBMjbfdrkUU5",
  "key37": "3wt8LtRvimri2Ho97GWo21Mk3EEE6o8kT2NpgUjQk2utiLvtVDuSuq16tfjNEDd1wjY4yve4GuHv7jRvSPezjtvn",
  "key38": "3NoTmrTJe8pHcATNTMeY24zAdjmW43piUmeoJsHLy9V7Q1urpe5msjL9x8g9MvnFgW3AP85v5AxM1pi367bmZnBr",
  "key39": "Lrcj2rsGBU5hjV2CjxeZrZ8PAK3MxKskH3PWnTTLAjzLJfH63vGH2vaJQsvgVrgVCTXyEj5FdzJUicngxMy2aoG",
  "key40": "pipZYBpPuP51WhGa8kC4kfueSpRrZ1iNNZAcyPxGrN1y4LfCV99BiwJJKMyXJH9h4o65wUqLHbWb2JjEPv7vdwG",
  "key41": "52DFdGPbcwErpSGKzKaieseQrQEuAeSxeZkeAKKxmqsWkR6Q2i3yf4T26bwFDJDYE8brebdma7er5PNNZHeJRgY",
  "key42": "345E5sHcWNgn2Ri1Zv42yjGYWA7nsBLoVaC9HGBF9ktwyfMWhouLN1rQ5v1afNFKCWnRbp6vQAygcg3ny3GrTav7",
  "key43": "3r5hm183KSYMLwnajWDkWfGbaLqLYKmDaHygvBVvXJG63VzUVFiegAtfzmasEJGXN5Gu54XQkRYgYaZpFuPTE3QG",
  "key44": "URHFaTJWu2CtiUZqFW4eTufnHkfbgj3nmKqv3MRrNmJAqBYVweJpQbvLrX1mRLKuF8MKN8TbJuXJYMYYhAAmcuy",
  "key45": "crrtLPg4CM6e1nSHQ532KKpbW96tr75ph2nXvtFK3mDizCFQNJhzXrawXLYN9RQcas6V35B4W9zcvGXCwp8uCsk",
  "key46": "5GFvnAxb4MXCL4S3CBL1192udvrLD1BHi2bcCocr6JMxm1TUTr4QBgFdhitvxxYM93w7YJjSyhyXGeTPGVMgwxra"
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
