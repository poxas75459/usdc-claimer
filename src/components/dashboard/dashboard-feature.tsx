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
    "4Tjf64vTS8pq377pD75j6eGeav8dkGerWJKbzsjw9DNBvCPwDra4fTr2KtJuseHFf2iuSDMMqQnKCoCE67pKA6Z1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t2vs8cEmNa6sUMzUFm98sRiqe2SU7uujMyvEcoyoN6hgDzJx5yRA1pbx6cTLTdhJxXgRmXzAaDzsYisjfDjnTik",
  "key1": "2rjoibD34cCi7rxRir5HyFS8vyESg5gmmoS8sg85NaBhMxW6BShSSiaCxUp6htcUtEcHqNDMY952vCX9yHNM9ZTD",
  "key2": "53NmzFEbendNi7V1bhx8DUKj6Mzp88zj3RfrkoSr8JV73cqZbJswNijLaZPxRjJVRXKM6JUprYQbwM4DEnqZLJHL",
  "key3": "4AfdqAYVAYSH6bpAri9JNvUHWzTXQWSTG7buRwKdshaHyc33FT42UV9FpxK15Fu9A6Gz87n18QSTvjWgv9vLx1rW",
  "key4": "5n5UL6NhvGkKuqoaS5Md2AcwY5VHF7Wt3ejMrNRv2Yi5JR4RJFPdfps1XLpjogFuXo9u3MHrx7sR1qPrtjpKgNwS",
  "key5": "4jnjJsWcqC6DHKp2BRH5t5YUqzcF6bFJyWLwkLchVjszgHtBE79DynpTomZQBpVe3sG7NybZ9vCCReFdYWTiEmQa",
  "key6": "2keUhNWNi8ehVyQUDqAZWA2JwXEnk3tu2dCj26YEuGssTm4rkatthG1RQHBBRgwaCb1RWxaZWMwCYnA9qvyY5m5P",
  "key7": "yFDgtzXzKTznaE5zju2YWMRXZrN18bnFS7zCG1hcm9khxLgJN4qCwBNyK1BdpyGfDGpfeJPrEtrDHS6G2j18BqR",
  "key8": "33b3LwxneGxWdzxvsU44s7RorvG62SmrJJ5iVx63UhvBx8ZSkREXPgNTN7V57PGuz1kjpLdxM59FtP3LHWtgKdyt",
  "key9": "3SzGzPstUA2us2zKicibseFooxdi4nQnx3vFZfqVZiHtsF9LvdxHMPtd4KKz18XD4tSGz4miWYM4omnojPYV3CD2",
  "key10": "3UNFvuNtjuvYVxiLkVfxoUS54QcBrUBp29ffbNZ2p4hxf2Ji389DqgLuMFnL3a79BWti5fPebTpsXnLSdWJLeQ84",
  "key11": "4ftYyoUtJjyXn2QtegEtLYEBaQh3tzwmWeAwbuGW1U4kBW6XnpSk1xRTtAE1yL16jfQSHWBoSYL95xvzAXyrh7zP",
  "key12": "2y2kGbzX9EhZTqh68FE6XdAjUdzqLoTddcVNqixgnPpP85Un552zcvjxp6qJ3SJK2b2VzgMmNF5XZpAW5K7Hez5C",
  "key13": "5or1nXpcweYQenoAuiAGpBfqqJ4vXvU55SAVsFxdhN9KFwRQpQN6FkTuXqsX81knaBn9cpxSM8oJbA8YnejxFEpQ",
  "key14": "4QBdnxxBR4JW5Yb1KKrcfK1FpaH1hq1fwyc2a3EHGzuKbw5khtgVT5hFosvXY3MU58PyoL43tB5AuHPhyhrLgBUh",
  "key15": "4uK2QLt56vNpSwRhmcDhXShknNMhiCNxeEKftt5mTPe43a6BzRrcLij7gHq4Z14vFQPRjndBhrM5aaWcNRFRCjma",
  "key16": "436J6mJ3MLJG7cshGt6ZrsHVg4C266Xhzvbhp9LtyWxARaDGWQfi5RUH9H8bjsdvr9Kyk618JQC6vLUFREHarffK",
  "key17": "KUVtJqkYgDSajXni6kkHEQ2sx9YW5WBgBH7EjavvUzu5bFc9LQNdWt7Uf58JCUvatznjYyrYf5paDqP1NNTfp16",
  "key18": "5JpMfo1jwbQb9yBHKg6HKhbvq475Ex4k8rgbxZm5CkyiiiY7uRF6i8kvzsEjvaiyieCaBPJEu8wJ5ArdeQjJSCaE",
  "key19": "4cSh1SL6dTVDj2weXBR2sB2PcUKFjHeAqu8VVCezuUsdUNPbyAvdn6bm8zr8rzJ6562YnuE49WEbWmGhGLep3nHf",
  "key20": "2pdivVGH1NyVmuJbz49noVQ7pqcDbUANKguq35ZmpN8cvbH3er3QpYzUVRCGH2TPCnVrp488XBJefru8JVShhKBF",
  "key21": "2XsqT2JpSaMnACwWGwbfjLqqrRg2WRAPKkZiGChHJCZDQDw8yg9Jm2BhapcrWCgkaPn7ahqYKXWt36u8aB78obBs",
  "key22": "NqJBkMsRqx6HQe5c5qFQ6KTFv3SALSHAbAKecsHJp9dhxgm1FVHLSBREZyi78vwYHhak7UL2YtM3FatznhNsHDT",
  "key23": "RsD6Rsz2xAPwiaf2CCQVvViXX1if18V5FE9jX8eYfrXeNG7XRRyhNR2WTrkiVKtBqLFqgijptvHGyEbNyy41VeW",
  "key24": "43Xaxy2MHWz4vhH7H1WDdipWBj1Ws5AbdVirbWVjyYsNiqN2rnxtQJRo5EaiFJWtfehmPrZwyUiZTFr2C4sE3y5"
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
