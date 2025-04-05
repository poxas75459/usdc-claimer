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
    "5hptbLxPdygdjyKTtWZX2pzwGfVFUeXG25U2csSc44EQPXnMWeHLgb5essjJcWqeFy1GTUU2XLHxWwTQkGRAUcVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K5gMc7SvV92bStokkhWka8EnbovLRaUSPMhDSGBVQz1bwZipkaKbPW5ftRra46D2yrQM7HU8jCvyxkmJdNbfyek",
  "key1": "2A9ErJEs5Ap1hCTyTim4Mbu2stD3gxyBFiEyDUgz572BcH2H7h3Sg9NFA76UKLYwKD4mQnmiPWqXWnDgF9Tm8Q6H",
  "key2": "5WCp98jtop2QyLG9hUYbPuq9ckxGbLzjWNqVUsk319ejpVtxXxVmMfgq3nAQW1JjVaCe1xBRRmwquKuGrmA6iWja",
  "key3": "m4ZdP3Lmr5Ws8fHYvwTraUsAGTnLZavkoGq5dzchoh4N6DKfNUFnMboaC3kXhnuwjS8E83UA9UL2itRK2X8Wexb",
  "key4": "R1wHqdT4fmZrKu9SG8XSTdDf1D7dVsAARea3Meamrf7dTfR7SP84ZX2fLmuM79etyj6mCFjRFyNHBWhNUamdh9Y",
  "key5": "4qy4yi6nmXnPe4Rm7bqvj1M4ztWRDArY6r8aySAjPURud1UDZHejL1FYDe5DbKQebztJ2KvUsErUCErhBKqkKBbS",
  "key6": "3uxGmZd5CsczWgJdskHVx44KeoWRRpabjswyKZW1te3Wgn6pQjT8WLpjWrFP93zo7LfSMVcufZBHWqNMpu3yLBUx",
  "key7": "3cR8BLpLUBNroMcVsqL1ZzNjywsM65JKdzrw9j217xgagPxNeFZV449P348B3KGKNK75mrdciXmCRnMZsE6Tn5jD",
  "key8": "2vBSoUoxL7MgQMmeZW6TtDW9Z24zzUU2FozQnG1meRFSDuwpQbhjjE9ixcR2DzAtfaBDrXybKa2fDDtBevayssq1",
  "key9": "4Nj9d9Kj1J3EjbErmJ97JbWXRoB7cUZj7cmjK3whZyGZAYu8VSRMFE2AqbBrGqTwwfzFb2v9xoxjkVqjgFZYWd2P",
  "key10": "4TeyLC1M2K1VZ4F5uusWPP5pFJZ6MjnshqNnQXjkoesBiisqZHcZkvZ3BiuBq4akutFdbhAdm5DTb7UWGH2cJQb5",
  "key11": "pADD98xeR3cdykzwwGVBpxtX9u9czBfY2JxbQyW7tZyd4pF9meHHMbeYj1Bp6tgskea6h8gStz7A5vuktDTtYS5",
  "key12": "ni15TyD1itzVJw6kuNQ2oGxxHbZzPexcD1Wb7cy2Lk8hVBCUUEVARoyEtwH8JTB37ztMU8eL8SbifB7wxcKsCdW",
  "key13": "5fcxEMpHkZqjRYtKNHCnb6B6WfqTLZBsKJv6W6SXp3Vg5R1SS8JWwfhfpM1kdtTgt6Z2cjfVKa6hcMZkxm8juHk",
  "key14": "3eJeDkbQyhFwwMpCrwoCTcpjVbJu8HcPhjjNXVHjRvMd7QdBPzAx3nSaQQXBn22smZgHb6fxfae857eLMsB6qDkJ",
  "key15": "2Z2RBPbrrZvP7F1KuVv2ro61YUHeG7X93HYVTy5QYdzSEhgDBssmP54Eve53DoRkXC833bVkKrXaYcfL6e9YEhJj",
  "key16": "27T6YmrVTpeyf76UK7Da1rLKvFFH1bUPkzZ8ghrwzRFUtDesubbXgRTxd3Wu3r3TgEiLC6EDrM8vtBhncZ6U3rHU",
  "key17": "3GL1kgVU1NJ5xDfDUS4aCAMUeLSXkepYtLJxM1MyzhiehJRoFyYd7AepPGx1qZSYQWHFW28c9ftjYkDacdoNhGHV",
  "key18": "6raCTf7MpyPU6eJHfYmEoDkg1Z2QVGvzodu3cWfuXwRSnGNzErJHBoRRCkeNVcqEU4bMPRpp84fReoAQJT7vgEJ",
  "key19": "2i7SZNniwedDNAaxnpEfFP2udSZHBTaqRvbij6tqUvkWfWfzduTvvPCU9sUmmmwo6n5YTZQ7sCRsgnQ9ZA7p3zoo",
  "key20": "4eLe66KGVHijdJWS1rcoPvLHmgc6zSjukixd968Hj2tStFKhRWexK84vn3yAYCwVG2PTusRGbRLEHqkVeNGEbGQA",
  "key21": "4HuR7kehgccXmCi4AXWBW1HiDcm2pNoT96BZw8Nzd3JiNBeWtEYBEC8NNd2UEdFD4MZaXXrRFERu2dNC7Xjc2JR5",
  "key22": "o3BzTVGnS29yXwafrVmANyCeKjp2ZxzFPnFYZzpRiCJyCauKx3LEVepR2Gs59MM2vVaS74RhXzCmEydjrto44wo",
  "key23": "4Ksbh1BCetH6F3DeA53iymUC8cMEf8SRs6XzDvf1EGjTEyv9fXiuW6nmkTrPCFpNtQjee4kUwGQqYpwku4rHYQZG",
  "key24": "2FQTQLJ9JLeCazEzdQdTSduekuoDeFBwZ3ZQgqdbc7zut6ikiP3YW5pG4VojWW1qbpFWkCotBaJfhCu6YrLzmFUU",
  "key25": "5utej7jbaxi5BrWDjL9SyxYnqieWxDKR4RednWQtRnQWHiNwY77fSW17JLnLD2J84hFsmEJWUiRhVt3mr8GKqG5Q",
  "key26": "4oEQaeCne3syFUHE9B3hqifpbiRd7Z4yTpLfmDKondDtFMP7UMU6JVRzpFk1hFKbjjAq6kyf712NS5cHmRopVmNR",
  "key27": "XXMwGwWzrjxAYbGipybHQsf4HRcwQEtewBo7sTw5qhe4U2AQFE716z8wYz3MjjnkYboPQnHSXPnmLXotwceW9xY",
  "key28": "64ZP1rjuyhBj1rjxos3HMSPUJ6TSsSHdM9TcKjHmjbJAUeXSJf91JWeeWEUSRnJEuSZN3XySkF21Kmv4oZyemMpc",
  "key29": "4P7uBYcjsGSMfWVmAtzD9fsYzJ6wBYUEyxY1WyAgDHAz1G8WDF55jNPGgB51qiW72FArUdosUUyFiUSwaUW3X2Vg",
  "key30": "38QFcdEddbW3hhASEj6hBsdzKwG68sAzL6zgzdQHQrAYsqRFH9YJQzmGYQoNFdoTuV4fnYpqZYVeRGqQfk15uuyH",
  "key31": "4mKvB37vmbCzADfWMAd1wfi1fAnYCU4bM38vFmDr1W2WepiLc7SPpPjeua387PVNWStksMspSjKBfdmSA6hXJKvK",
  "key32": "3PwaxwyG9DPoKYvHXapeiH6hc2dvyDYAHixaTQvFr54Ptm8pxqVSEXfh55wskkxGgXdZkHSSmTggST7fqdD3L4xX",
  "key33": "2Sr16tiD7e269ra4nALkxSG2EezeNzkECydjWpM9VpMKzhD7AipcjJiZTmTmduESQbbNM2tXR7wtQPYJCFiJ6ZJa",
  "key34": "4QDwUrYjUyz7V9FQhcM7zzN7tJFtHiNRGY4gPe3yyLLpaZtVJJgBZDcHcbHtHLqg9q7Mo7xv3RkPSmV1LMetewzy",
  "key35": "3S3mdWTcTmy8FJu4n7QNoNEjpTHeEU5FgppbsJYqh24v5quvmF9BhSdniGCuwbGKNrGNRcpi6eDNJKHs8HKi31zA",
  "key36": "2QLmppimBmxAEoJY1jVhaXyKTH71D4TmSXypzo6McnQtT1ZXrpTHZk8LGASE24XieHYCPDLH4XE2GwP3MSf9oWF",
  "key37": "2AQbTFXUgwywmtNBUPCJN7ABNZsAbikZYK67ynuoU6xLqz6M6XpsZQA4yc8TVAviUhcVfCoh5pnWehLQiCQpFPJB",
  "key38": "4PPncbUY1xKXBVFxe8YeBgNsqDAtWV6tGJxoG8R96QkfKWUUPJ1x7hv3LXqmsuyFy39URsS2LuuETc4ct3gbwxY2",
  "key39": "3MMzbmxWrxWqoGHxqm5v8SsnvwDFGn9g1z5VJcQgEhJf5YVW8eW8SBFHR1g2NaSKgKdCFE2ZgdcLFR9hwAbNjZRJ",
  "key40": "3dsorL7biyvVLKhqBtuA9n662wPLzoo2A7xYjonUGQanoMw9d8UZRyTQGvXf7s9H9zhfSDQvk7rCBpXeNm2kGZGi",
  "key41": "5hDaCp6QzRxhmxUTKuAM6nHhSSFqbqqXVU9CvkF9CqiVeB61T4KbHH2xRxPrKxTmivMWM7r6iJXDdqypZA1cc7bo",
  "key42": "2QeuLq88podT8ys5sh3hqTVu473WiJ3PDqJNUV6MXf3swP2mk81SrMxX7dYM9QKzUdqzKZZ41nuag9fBKwpLUAw6",
  "key43": "41JeQpLDq4zcjM9xoPWF57wJM7oShyuRQVyhttCdvHgyA3DS45TmseNkjf1URsdcxQEKVCMJAqHMZPvfoDbJP1Pa"
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
