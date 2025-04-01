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
    "4sHhTWXsY4m9xygfBUnHgV9xa8d38hSrvb97LAmuhtf8BkPCBiXHWwvJrEdBXS1Ni5Mm1UirYjrteCN3LByZ7yfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WCyrrRiwCx1DCuHqvPTYki47FFR5v8wc8XEiuqXfZJxpADe6GoT92Ro6o4XGJ9D4kEthD12Hm4SWuEWGZStGKRN",
  "key1": "8Ua7hzMXeYJ3pZ2FRVCvQ7FjTux341BhNAsF4GLFRbdRXzoWSP3gfL4wZzyoikekrBW3WUe7pKtp6FwFnu8d8Vk",
  "key2": "5ryfeGMignoqxsRKxkDLP1iecm5zAUNYfpmST5mmNNzbk12SQK47xaRmwvbgboUsv8MvDumYwK7e22b1qpofz1Z3",
  "key3": "63B6gS8PrRzhLQEv91A7XJQfbUE9GsUyJ1tAsd7Ce7faQFoki8jbyNPJDfG2RxiJPkZVtqo8qpB7zCnRzUuNDmhx",
  "key4": "2sa2e9czKedDm2Q7SYQNc3tKKLKReEFUDrzabi6mpMrWTKTP1ono2trmz86Enp6bky2s3UGhbeEH9TGqYEmwwE8L",
  "key5": "51vGbxxpG9Mv4KTvqekTkVU5UsHBkikVbaFq3mBRuViotbDX4NzWA4KVsdmPrb6T2xgvF7SxkZwWtxbLVLQDevJa",
  "key6": "3gVUAvystMgWUnocDuzqzskDmTv2p8dEDqioTuhsVVCHfE687az4Ej6CTe2uDa9K5Us6mbzYarWZR4fgrYcfYTms",
  "key7": "3NvbWQ8PGnaye36GvWpJnEZcSMjUJZhFi5KQ2osdbKBcs9YsusDGBBDEfeNnhymE8rhVW34XTTBnPBvpR5VCCSMr",
  "key8": "xSgL9fChMYTJJod3EMRfnHt9A8FtnXFpXuWX4NXMGL6qbHVj9FwA6K6phSutg8PVgmdmBHtdL1zABNvfeiGatAe",
  "key9": "4Hc8ifzMTAB8haUsTRX2aGDXTRYBC7gNnu3fRMSCJtYyKs3kbtY3839LBfRGitE6tewhUFuPxWsbEdkkQB86uFPm",
  "key10": "p1TJbELqxmMonm5rVdM3uDVb5Jj3vtwoPtyrizn2e5C8MLTBwqT3YoHEJiNzxCDFcr7zsP9gaxrnk3a5McZHiQT",
  "key11": "3iGkg2J3Jssdioz6Rf165ULyaLTSh2CjtUnWF2WZGd2L9yBkdxA8iN6LYt58vv1bwUvGKukW2cFWGSQKSAznocfu",
  "key12": "61DwSwh8xiELHYg4TNBbGg1VSPkP1pDFf7rdqfZchPYbeaTgmZt4X51WGXzEU8TMMY4WmyWKJh2F8e3mG5ef6AHS",
  "key13": "4ReJyVayPFi4E1fHpeW27F9GYbrMuLmPwsifpHS2CHAYMUrMwxNGRvnDDeuVqAg6jdtE4bnJENBoUNRBbLLFWZQ3",
  "key14": "241qHwJins4WafFerMAuvuzzTBhbQ5EgU2V9LQajDkRdHfH4M9khQG1uBWSaerV4ykhus4J2eFJqPeKiwbtV8DGf",
  "key15": "2A1CgQdN9utXDGfa5Jw9XNvQcwePim8dQeTTpS1i27Y6Jur9SVyTpYwvHp4TZZjS5JJc4rcr8U2LmUXVb9s6g5pv",
  "key16": "5fL8yfLqzXf2eXpZwBejPyAmwyDypBQeYzA3qFrmPjiyWq2GHcUbwh4W8FGfkkA4pmqDzCWJJ5y8XgjUjKxJN2rC",
  "key17": "5uzEEUAuD6GhrEF2GMpynGGzT54G5UnC6DrfRiPCc8wCGDitcTLwu7Tn9tvikchwS85PCbt9Uc2woPqe9Yf4fKDa",
  "key18": "2wdvLqfS1YQUZB8qbbkC2AU7LoJbbKt6VS3gKneNkgYcgpQqqcdzN59e6wgATWqY5Johs5ZdzuWbtRxxtAhzVrRP",
  "key19": "3qGhTWfeJJ7GqMgJQLEjJkFHbn24tNeBP4mWHgi2rG6j141eAeQtFTNu5cBSG5hnSuTSD9uDYs45kERZMKSgA5Lc",
  "key20": "2v4FDbMfwNQFVYxQNp7BTcv2Eqs4KipueeDYRmvLAbuMWHan8VD4fLcD5NN3686nwXs1wdXQQLdUwPCDbkxQGrHk",
  "key21": "56Y6HsYojc8HqfqMJ5AMEjMbhNHmNYzAQf4uqSn8B7aa117rtG8A8uVLFWtMxp4Ao2J6MowANkbfw9uBg739vmsd",
  "key22": "iWJTT7qGCqRCjgFAYrkVvoT3zpAxJdY3Y1tbbebxkZX9cEN95XbJr8kV5rev2AS12ued9jrJbUbidVLuMVUThZr",
  "key23": "2Z9sd2HbCGXEr6iZY51o15vQJyB711QKLWNzgqvifLauUwEyXTUqyUkesi3xS7sJQcbV1FbhncEa4wdqkY1ZS42E",
  "key24": "3XXtLA9kHW4GiDXeF2ydF5TsjQBEdaY93cCV4wN11pnLfn4qVdmFpSUstiseYoRq639xgLBEGXBh5CYHM7dMLtDD",
  "key25": "CeA1Zz7ecthdfUULcprP8TxK9QXG6ZZ322DfgGkbncpp4mqpdfBf5ZBHS52T8yWqmaLqT5u5ifqfaWGjxCx6EHG",
  "key26": "2dDrJU4414Kwz5ZJycZydp8ibWwvVpN5rsFvs1zAXWhMdnoJuwqKYvM5PgMNYPyJnPQVXVRJwMXhAMDzwZcj7rpp",
  "key27": "5wh3tG67gVNhxPjFDKLtHySncxfPbWigpRRBApausfvDVxW9MijpMuQvX2isHbMqrw4QdkaHascAtiE8kMV4Rpjb"
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
