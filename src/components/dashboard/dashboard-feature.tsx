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
    "5bp5rsLSWgjTEU2ezgwKr5c9wQcqWgj6ADAbC1KCpJfDuz3ATCy4y9KWihvU9XmM3CkP3MEGtrnDpyyFnawQuesr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wJNoERbmA7f72TuCJgMyxWGisps3FNcdkyAf1kaY5nghk2aNhJBDYNL19jLJPyNSg73LeDp9PAS8fMiujcwUT9i",
  "key1": "3XY4eXy7ncoZ1LYooNVR7UD6Xdw87DGkbiYGpREp7sGMsM6c9ap7ZAXuR1jfMFEH6pMochUD2QKWYuyYq1YkKiLU",
  "key2": "38iJpw8UYZVqLNSU7D4dRQaJDyA89WKsZ73KqWvPbzF46NzNdsJB6dXKekLgLWUKyqDi2MYzSb7chRgMoSQdaLTo",
  "key3": "4aw3kmPieH6SqSTVmESkbzxUs28VBFXjzSe4T4PPrBMHZSW6osYJDchEUxWnSTKFeNMUBUY5KeCRpDS7PtqpPmEx",
  "key4": "2giXQ6gRLTiuDz63foZhstkkmEY6aks9RxfnyGTPX3REjPngaiHBsNXsVQ6WP6s4aHTK3ZSp6yYQYvtJLneHHiLN",
  "key5": "5BVSp6id8KhDkLQsjfvMXLU4dtj6nGY4SDMhZ3TTqJDQm1SwBq5LRGeEiRoXyGrmRxKr6yQum6YLZzuu9u3qbHLG",
  "key6": "2SioRyQnu9RLKk7AULaRWRn4CDoCWPdgHQU3PLaVUULuHegCsamrkLLTANYKBksSqZg3ASH6MXd2YTNz4bDLNcvW",
  "key7": "3wSKzY6jjeEDKwc1adTFxbtGTe4yL5YmFsk84xcRRPk9qbJhcFpMrJX85aQcJMcE7ppprBoezhsviGAdoJkHoPWo",
  "key8": "4ySpZqXy1eWECbH8pF35rio9VqKshqwpS88btJ3G6xqUjnmWqABDrSYsZoXwsUQVLpuMyaiXNjTThp2Ge8dG2Bhj",
  "key9": "7Qa5SfVGCFcVAPbQyiV7R6oDbRefo9kD7kbV8n64GNJ5NDinJbwYMAXUYk5cK2VxmxHjpjoMFv3yixB5dPPzeVm",
  "key10": "4txPz4X8LoVV9fNWvPqDf6taCHsU4G7Aawq9mSXE5SxB1zqYUW7PFvKZVwV3LxN1hCTGSL5DTyJ2Qaq7SP98gn18",
  "key11": "3GwmueUFcZrxA7Qm5fZ5uhTKhGDXsKNpM2hXf71Q3z5rLRVkJfcajuLmTgPS8Cq7KJaPMMPXbh29QGW8syyQya7C",
  "key12": "MTHSL3gVsVach6VkKV1HcKXBqvTheBonS1cSLVYZLNNYuujFC4Ptdaq4uZ4bBBRU1Z5YQM1qGgqSP1mPWf6QR8w",
  "key13": "5DwpgPNYfsqhpHEo3kqHr4rKEFC9nfrhpfRBJoTVHwYx4y88hKRs7QKxbSnzXfGKFdc7X3oDmshZmGHGeMdRr5sD",
  "key14": "63WzBCkYBBcVvpa23J3zh28GYNQEwLccUobo4w7QicvH93sG6V6hx4D8kjPqp9Kk1dvPc2mDky4TyULtafqf6dyB",
  "key15": "4YisTAefeTkJXcrQDEnX1KtuL5zgwbHBEwUEdxc3pkiwL4zv4qt2Lds32Nts5KUSn9UhTN8LhVc9RDS8XSvFTkn7",
  "key16": "41NhEQYaui671vEHjDdahT6VvwNR37W4wxqEzT557V5X9ZvhMD1KtXnpmP8SD2MmCj6WkyFx4sFstvL7rRV7mXcW",
  "key17": "3SKvRjyA4r5CqGBJoEtp3DQthU67mzYguAqHxRQcGC1Tyd8e9QBKCxJcGH7oa3aM2B2fjujTMKVSxvvxyJpQZfih",
  "key18": "2A81LygGixG8ok5Pk7SdkriQKgBfomCBfYiPuq6h4aTD2PaRPYZctUTTw38aDxi7AJYRiaVuKPUqBA57f1tPck9W",
  "key19": "thkKCARoqG1yxx2hhLVBcJAmYQr4TYoyU27LfS88fumGa1RRo8vuKHuwMPqcJrsrDrz9a8kWJSn9j4wB2ML4vDa",
  "key20": "GDz48NiVM282nDKvvPHiU7hrUGRoTkukJ7KJNNvMdKTTurckgkLCQcCP2FtPt1FSwQVbFK5BZF6LYrV3jcHLLVX",
  "key21": "2Rc6afRRcgf4hpwqTP15vphaza1TzrXBeHo9MbbkB6QS1f19CqdEWpz5Xcyqw9KbDuXoeqZEygV1E9HwMdupJzVu",
  "key22": "fFQRv99ngCUMM7SSEPjhEMbV61szqHJHh8ZRw2jsZTq9A8nx41G2Vtd9iN8x2qm8u6bv8Zd9D1DtboxnMoRG8Xr",
  "key23": "4MFbAxbpsh28zv9ZzXyr78FXE7R7wpeFk4EUuiAxY58j21cGWJeKUAyVDNmXi2RmDKywsvhyhVa9KnEgRv1wBMFv",
  "key24": "4UUkj6hdNZaNy3z52EDf2aAaRNLMSXJHzYePyheqRdYnDnbxDE58ReM1yegc3dAw6gnsBPkEVvCbRiQxCZp9a6s",
  "key25": "3HtFuJUkgSVcscE1uCfgQaCSpx5Yexz7SP8t2WDJRHZGXhJRdUZbANf5YVnT89LCpypuZBsUknRLaFWBSq4ZHQVA"
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
