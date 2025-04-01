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
    "5EUbcpPrEmBDQf7HWjYH951YyaqoWWbf2hCpxB5mCfqJJcg7WaVbVKADYxG6BjcgwCAtEkfB9S35Z4p9R8b1ATGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nfy2BxHEkX8qsjvV2MkAnxMwhmjGSpz5Y9uq9jkFsFBmL7k4JK6pfJMYGDmSY9XJzkjDBkDVBL5fQvYSLwVCLtj",
  "key1": "4B4QFimJRxbs7wPJgR4kCFyoBaDy7fEnUKmWHnKFyzSmzEyAATSeYTTGERBFrstToybsAGm4tGdvJAfnD3X63y3a",
  "key2": "2gt3ZQf1nZGNhgaVPPM68gShnjuN77MZtYR1YUHsHFffD1idQNBpWv3MR8XieCRbF5Jgw6buyhk8Jw8P2kKdVKX8",
  "key3": "3K8zhnVz1zSLeNdtfT7px9UmpwXv62JUDCJtqtosDLwi5svQpBCwYMHxJG34jhgAaGmuZiCayhDRNbzjbUUhowEx",
  "key4": "koT8B6iQxccgXUHdBUvtMhsav6ViGTvKDyrxsW6ArzRL8As5uCxk7Epv5kSMPBijKtgYba5BNP4VZajLor8p7JM",
  "key5": "2qraiCaDKLTAsq2F2EU1s64Dx1b8kJExnrc9Qj2JCSjNzmbVZi2pmbY7hAq9CGpt95f1BEuB8DiJJaMp7X4SQCE8",
  "key6": "4DY6kGuYi2MPdgoZ7TCujbYoY4Y8gQak8EMu1xTpR8qKsQrvhrachi3eqjNtrZfxAt5hC7wf3UCrhaBAHW8M1SyV",
  "key7": "cGXwMsnKLHgtqRfVp6uWQHTeXEXgAmPN7G9MSnh3XJtiWdPZCGjoRsWrUqKQn2HdeohpAEQQSoqHJHMPVsDmVB9",
  "key8": "2cFWoKvrfFZwqvZCWAgYgAStBr1g3kdJ7SwvW31CoSVZEhKTvJ2HYg8j5oGKTGVGzfwHm9qhmgEMSs32ARLX8gbC",
  "key9": "2rRfYVrniUrpsi8Hrz1q4twAib3F6m2V9SbbgRM4HyMfmTWK1fGKUHpWf4unCYDo4NhwGMR4a81uGEArtEkjaczx",
  "key10": "v459miSME4gBbVhfxDX2QsMRs7R6gYDKrx89i5dBSQ4koQxpmNkBFsAQeC5ymXWWcEXaDo5djJ2GFxVydN9GFdd",
  "key11": "ncU5oGMNpykkMeHhcdY8DhkkQD7ZZHaBT3i4umswMiwaFEXYWkmNbh7W8vnFmVk4ZXoPipcjdBKD4aSvomaDEgz",
  "key12": "4DpzBrUrmAzmkSN8xvCsQVREUtxPSJmw6kYgScAaodR5DagxQpLbMWt6LnkR8UXp56C8oWjRB4rVs251auQPxNVh",
  "key13": "7MLwryVqEizdEXu3x2bmeqxHoUngvKyjkcJ9tJLR6DUEidTqJ5821QYwTwKukdkPkt7EUkEcEwKPisnzoEtaU2Q",
  "key14": "2wdVa2ysLKDATzMQgD8QFyHXUQRMpEcu5p88vwzmgEmKUaGFZoertbcwA17xX4iFP4p12kccQhAfu8mmXXTdsZKy",
  "key15": "47SkWeimDAgv8n91XwepzU6oa1ZKkffSM6NueCfB3FABJ5DaYCQ6hnuEVGeHrioXXuSDuNVH8vMD6ftsLk8kkyFc",
  "key16": "4fkbvoYwL6wZ5cLQqDPHDYcWWnQgzMhYH5qQCve2c5serUbiGR2JK3ki7vvhZrttgApSe1xzLGrQcAm6Y8X2h2DW",
  "key17": "2ZuQ2iGrXuaRv1ZYh4h6YJeeh1Hu6jSDMvfmaVwXdRJEqvrSYH5tQnFa2GBtbLydzxhDfof6FZyCKG9rBUhY1HF7",
  "key18": "2SxJRkTj4zFW9Muz1RxPLWXXY57gcbmT3oVfFfQv6MwFpYYagBoiX53vvYLtZnmWh9W6m4CtBoUJmajKA4zuEFwM",
  "key19": "5pBe2HkS3JacWTpLt1htanYnb9iZvP2kkxUNAYkhgEjyrMRQDmHjqzRDoDcsew7sPjFyu6LEtabXVG4ZGQMjCMX3",
  "key20": "3szQjwf3jvLrMyT8wtJ3ky5LCFVCJ5bLFLihxnB6xCVdLe3RKaadsSWRBwkbBiHd2nB6beq2heRg9F6B9c1t4uUP",
  "key21": "3yVWTSNz9sJ6LfQ1M6A8KfSKNC8pcs5dvWbocsEadj4RcVDn5GB1Ua7kiGXbpMEVeinaC3eTjV4gPj81Mq2nsGki",
  "key22": "2HEbfVELFa8cqqwfSuZCRcK4XnPQurzSnyrcacpvsSUfQmGu8Tu7CtMgtdisk7iTBXX2ZN8KwNNc2VVU8hSJSpZC",
  "key23": "2CCxLaayrnSDfYjvQJuQEbjPPCMDFp99CYqWQnm9Gfd7azqGCWkfzyZouE6JwKaxkZ5MaNTtnimGUAy68gJhqUV7",
  "key24": "3zDaGDjXshGV4thLnLrGfBiEBbo8Nu6Phft454xRpc3QS7jwVnykU63yaUSqpLof5sDzwTdpNRDPsqoXrKx4amfd",
  "key25": "sA7Q1bTCay2LybFMryAgM62NMxjjXzv16MXZxF6XZHaoCmz35ZECctdfYjSHjMs3UVAkoHaB2JTeQ7i4uYp6zy7",
  "key26": "5EGqVuVgbK5U8XRhQaRVNa2HGeyzXeBfE8sMD2M8VrNvpRjhgE29TfMMVon7yoDgyBkPTKz22MqUgy37sF3PZhBE",
  "key27": "NHrzURCxRWid4Wmhri4FLYAghFLfWaBYa5upMJyULX4EuZogjQmwX5RkCKnd1v5LxjxQdBL1U9DGHpt2n1CAUKG",
  "key28": "2RCCcEP77ZE6GK3vucCVXWUbDS9nEQw5bGbAakJzBa8bkRQ93jzxWNhTNKZPxBEPge2onfYNnqtjiVXs86JBnAxq",
  "key29": "2iwnzzcQnyTPTnHs6Y6rEQkpyJfx5VarrRcf81qGUeouFQhuCyKVjL3m6X6VxrJNktUkFTHkaCnT91aWPwPi3oN",
  "key30": "5rSytu1wBnBu49bnTa7FcwCyZLoDUvzL8Et5tXaT8bo6DmU3weaFvY9jj4Hcbp9fEaeWyWGLGUpTXba2E5xKhHQv",
  "key31": "5GX2RM9Zb39PwhAHtKqA9Ez3E9hVsXT69bLFkTqM1VGnVeqabmPA8hhcMN44Nh7URSVNUbKKqyyfB4Y1nKxxtWPP",
  "key32": "2zVznWLELcJM7s9qV1cccDkRpYZu2ePrLPEv9ksSas4ZPCHGHSZE5YVf5sYXFotULGMisEMjajyoyyWpUjrawULR",
  "key33": "5iD8XwnSSmyoGLbKkwjaCPyJMgpfepVi8BYYAx4MWGFLKR2VgEBgLGQhA2YFZnLNS2rUkbNKBq4KGcA1LtSHPJUA",
  "key34": "2uFv2nRajyDsJGTBJCfDwJsu1erpJnEBXXyfh2yaobFNTgCBtkpVKuSHhLtFbDDR8q4PWobPu2sFqBHKPsoTwKGu",
  "key35": "3T9rfMPhBfFKSxTSFAXJgqDtwPZ7MXGouC9yJbo8RHJEUg6qfBoGUTug3CaJJVfYJs8xq8WLLrQrGDdiy586Yx5w",
  "key36": "44LkgLvbfDE2nKz3g3ZM3EwhdyTdKsp1EjST3bKS25h1fVke5ixrTUYgRfMHV2eKuTbceRXUNN7V6cA67iNRyGGR",
  "key37": "3vRrLTcmp8Mo6NdrTrFv1XEKbueQEHqi9oZ7JNSWeNm38GXSE9BeZAk6tqQCpVhevzmmg2pcS4QJ1x5TNjsDoem4",
  "key38": "67YmcWatbwCP61btgb2nYsecHtQiWCqeUUzwjnL75Sorons194CZLV5W8YcD58ACQFTCCEUYdkaZRuUY4v8RUwdF",
  "key39": "66KSJzk8JTkLn4Nk73evGCqQF8zXXBvNbtNyTMRirjbtKsY6koC6nhaQz7cxzg7mw33V53ezr1DBoQwNXzyYvWBB",
  "key40": "4XmovQQpq8xZrzE2cuv8wHWk6Jzc8CH7YBf8PZzPodDr36pcvhJCfh1aMd6rLQP8hmuvYho78D27sNVJPi7H1BUF",
  "key41": "2djdjoi4raVnXxEtXS7qy88LBLfgUwJGGdhRwFNmuK7tBCKLwuh6EmDaKe1RaykoWXBe51eQLdka3HNjwdKUtPCd",
  "key42": "R424f4k1XduZfLHz7XtnEfN2LJt57EJbpMyi3JFYY2Yp7kNWbByyUMFfebreakpQMEM8htoaEJivfXEZixyKY6R",
  "key43": "5miLDyer9fra6kVJ7ShMq5kZF79XWkvtfesiAovjj8YLMb8TbMoMjJcRFXDsdF5hBZMo7qmgzvxdqxuaZyz5MMy4",
  "key44": "7pMUdAtUXsaik3neZu73mko6SwavJjminuNM9xZXKCZSfxtVK2po96Y4po6fnVka7q3yN3P55ki8Bb4zMHS3Gyt"
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
