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
    "4zYqgEFzs3Utv2noPJTh9eGoTBn6jjht3Hb2bG9P83jRje6BN5UMmwjgpjMXiyZruYsPpN8gqQMLST29yt9d5GXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YdQ86AnCC4gGBN1iRM9me2ZTvo4oyJCJvwfLPhsM6L83sEEgPfx38wz1vJ6JuhNHwcPbGZ7Sx2bHqewd71qYUro",
  "key1": "4QuFbdcjJDubVRmvLkyebz4CdMCgFEDXXgD3yJvVi9SU1Txu4cctqCMRW5Uzs9tZgHFmWqA5F2CxgENgnourLM3A",
  "key2": "22PWMMU9NiowWJkJebBD9fWwTSHjrT66PjgUhtxpwshV3P628eSE4onz1iDmXyR8GGtTmvkcYjdvKMoHPj3huyta",
  "key3": "2Ay7ysxGffUtF8gBmHerZALQrBgcugjsUXNWWaggGER46iFuPxdw4Gc1ow4UiwoGirsGxv1dHA1DxwNvagR3KAGY",
  "key4": "5ZYw6XghciVp7dVnex9SeCBAFrnzCcjciFAHLRqMpKy8WaixzcaKBR2UhZ7LExAhoGcgJJW8DaHxHCb92benqZa",
  "key5": "4gPpYrXSNL2b6Yp8dQvhTrbdC71oBS41vCjwqkifCwoyGJzqmajBPZA6SgcEYATCzopEbrchaQbnUwXcmEz55fn",
  "key6": "3ZAgV2P6enwQFA8dEY2sPgxb5kkNcZ5mzPJCRtU8zopGrFSxPrn7nqcGETYYBYoQzqQeDz5n5SgFyjL8fVhjf38i",
  "key7": "4RPXEusdTxzKKknEgDDeGMWM9Zws8YaZuZrVZrf4865tSRE9ats7CnyowXSYfkbYfE1PCYFvmdSSmmvqyXiGmJP4",
  "key8": "4szk9E5YYNn1MP3kHteM3j316kz1AiChBdsdXqSQGRyfiAvc6qFX36Ayetb5voRVXkLnLsCc6kh86ViUREbVGfmC",
  "key9": "2UKm251cKzQHWEQ4zpQCUaVCCJ4GCLHsP5aTse4jxmaR6M8APaWnyJbAtLCbb5wrSc4Q8rKrSbYhigMVu2rfcKfn",
  "key10": "3PZnwVYC3iCxKhwbs73xEQ8Yg28qY8QF2aybB8oyEc7qoitrZrGQsM9muQTeCSGLofWUHdmbQwSiJkiXHddxbJWP",
  "key11": "2jCctJ9W9QjKKYc6kdvckdQCBjS3xgXPuAuo9oEAFk7SD3EbPKKJSXkyfdR4fzJwKFTXK87mqHnUQRUwxpc2p4ez",
  "key12": "2oaQ47rUMidvwa2myb9bUYNnTgsyzcrMwxPfgeZCnhWRCxzVE5RDtsF9NLKYDYuAuWH1QV8xDpxjKTYky9DH8pVb",
  "key13": "P2TrmYNsWtBADTErAKtcPMyYa4YkvKnQMSGXLP3fUyZCHwfArMcgesov53q3QzdhaUGBCfnu5b78rBKUnH85FJf",
  "key14": "4pQDoyoHpb6fhXjhSV8XYJBKkk8BZH54bq2DmfVw14TP5uB2rsWdd26TWHz8f3Pe21xXB2MRLp442Vn2Mcdyd6Y",
  "key15": "4afXVZPm3XUAPEuDhsASvkm5LkrbMJW98btusvqcVT9Et8eZFDkFjuuWQaGRn3Diwqr7cBFBFTaSqNLaSQW3KaGH",
  "key16": "5P4UzrAfccVUTiPiuP9Sj9QV7JVrorQAcaRtpxHo95YYSuwW7wvptXe1XricnUvYfWsxCws4du527nVnZkDZWWyr",
  "key17": "3Lsztx8pZZ5rvDrM4BJVzXzqNgGHXT8xhPYwjaRiUXnDgyjHNRKEnpKA6nEsz23dGh7deVgoYhquonwbwJUEHigm",
  "key18": "2ArEBEsUhBH31j6RzNEfzaBq8XNujV4zHy1GfJrQoyXj1uEEbjstzNFWCWo9skXsNWbsksCx4QzJZGhVAzZQTBUQ",
  "key19": "aBrsGVzTGNsMhadhoEwTugVfijUuEbiougcSeD22PGQVhDLQgijgfo1jQT9ALZR83JzVVFxee9A4dFR1T5ub3ev",
  "key20": "4omPxx8gKd7FDQXi1iUZPmuTZLwqRRghe6XAsL6cMXcs2aps6TzvsPo3a9pnefTDDvD4ncS8rxrJu5Kdrac96aEx",
  "key21": "5g1w92pzaGsiqU34hmN9sZqSLMyeU4sPJ7LRBth7TkvuSKWUeXb59cm8bsxTBkKS9qzi2XEMF4LLgXfTSpPPHp7Z",
  "key22": "4thnpyfKQ4nqcs5skhBeW1KmPyqd2HeMiUiPkB2qey7XpPaTVrF1mDb8MWvG56qwkruyH6qghB6azew6LwhyS8k2",
  "key23": "djWZpAEeKLmok939XTngSsRgzwzXfuf9kfiWx9PN8TK8VVgXnDxhcKFtsJNYgSx2zMoZ5uRexJe5zLjap4VuJhg",
  "key24": "2Kn8g2L1MYCLbxL4DZoDaS5p3nWUsJctPZTTwZx7d61xyZ8JwD7i2XfEdsLRrLgXGMMwquNw9LLCynJCuoEoEHj3",
  "key25": "4qrsPSCpm1E81QGnpGPLkcaJcRfwgwQRMrTtFUVJ81Uec8djpwfVqoePXUUNCHqNLwaZetP1KifvQ3WmfgrtVsro",
  "key26": "4xhSMvh2H3rvboicj5vJDpJw1Yie19wze2MRjkUupQmcGvVW6wGnz9cLbJvuqitesfXbzStAkKXkak5qN2ijToX",
  "key27": "2rwqavTvhfrqkGzX3MHHab43zYD2YFFQW8bCgKKJ3uDsUKesDn8YbLNoGyfRsb36tAdQe6HuibQvybc3ZsLdG1ad",
  "key28": "3nBr5VN5bmt7QSLgKkMAAGVR8NGm8wnji5q7GfHRiREtYE7bvm14re3wz9PWjTFDSRNhduktXAQnUMmA2K371RDK",
  "key29": "4D4urbxjJRjCTTqvbBX6NdeKBz43bQ3RhdtMhmbarmGxhoo1UuYnqBgP43u7HxFdLRs2n75bQzyieCvC91fJzyXS",
  "key30": "239rLzHTYsVe3k6K9gNoVZxMYd1LRCriQ7eNGbZTMSyyqedhApRz5HmWYbTXtiEE2ouxkhngBqdt3eC2uoXdonSn",
  "key31": "2ERT5g5KKfYvGLHDE3AJhvtMReBvVUrv8tFzVCQ2UrLCjr2YPvrc8uJDtLg7xAh6WSvbUGgzXpjZCv6MdFPnKqjj",
  "key32": "5F2E1yNd9bFnnp7XASq7zRF1DKCSQozaUomQxHwPVMNrBCtx4NuTwjywqDFAyjbZRpicmPfR85UnZGBV2CSjsAD7",
  "key33": "cpcvTq8sLUPyRBUTt1zajkL6jZx7ZWcmEdguxHZaSuEUQDQn7AKDsSBPvMXvoKx6coTGqvekkKQHoMGgkbttvw3",
  "key34": "hVe6GqXguM1mySq6hHs9HDSp2ERKjf6vajmHXWN5wC37ZLcVAGHHaYV8Qqm9D8Mmk4pQQ5SjJ24XFXcCEsvxdTV",
  "key35": "5DAj2awNcaRXuKKmafGiG9MGC3nD44gnkBhmhMVvXUxurA8Rr8RAkAvGuR7CWzELP3UAYoibHzj96KVjNpds6XBj"
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
