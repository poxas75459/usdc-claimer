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
    "4bCySvmG1vkUDhmMKPCAQPuXs4NTeqEjD7J48rHvz4QZ5NUKvCCyLXavePYfkqEBPSJy2EazmF73S5reiWHAB2eC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MsVTGKhUocPtRT2GEQZHpY7cgqixArVRpZRZAGZUVLDoY244WadQ7pYk3jyzDai6PxMyV1dMWFkgBAsQb6oRq9c",
  "key1": "5BkLMQndg2di8uameHrE11BCXSZzgDuFv81uxWSG8euwgtBAT5yCAwf5uwkMdPgfUExyyrmjKyTPxLyLWGMDfmC9",
  "key2": "3PyL19MekrpHuCW7nYr9CYrVrTpL3KGx8PP9Tn68tKdEPUp7TrYxY1K7Dc5k4vVCTGLTrbKBZCBKWfHJ5Ezcx3JS",
  "key3": "2ZUJwtMBCVmoUDGTqRejbBFFh6to5PzchhAerm8Qpn91xarRTt8E7geju1Jv3HHj7jTwimLZbFkkauneaVTkFpUz",
  "key4": "5MVvYbkxsuPFmvQJHVMst4NjFHdKVsAdh2AEgg55WE46iqqLX9cazgXV5H6Ji9TmRHAVCYcdtpPKfoLU3TnWVYPE",
  "key5": "5Mrpmat9stS56RoGADxwB7kuNFZfRNotUwZcaZ6ZqPXwkjbxNio68euygXKFcTyc5ZUUEZJCu7pS1L2W8QRKE2cR",
  "key6": "53CwTrouy1ziJWH8F9VGdHTq79URKRz7ZdodMYaSZojpVMSvCG4F8SuJeMShjoLmu1JvU5YN75JP6rgGedGJe6KT",
  "key7": "23XtRJGF47L9DGdYXpPdzgKzh82SjyqyeohhszULvtrXfpxWHY8437jv4mihBEzryEtuDFniSBDkduyf5TKrxCEr",
  "key8": "21UpgZirUMi9zL9NLUsLJEJe5UC8pYUV44doWkBuCS82uugETkj2Xn3cHLaCnJMo7GAtotWMKD9bb3dgVmzgmG8S",
  "key9": "5QiVfx5X1VgZYeU2McHkvyCHqu9hRP22QTu4NnWre3Mf56iWEmAwUP2ZP7hvjcWP7V9Co19yRBQCLwW4gdo17L1P",
  "key10": "4ccdcaxxN3Jdskv9CrE4LJurWrE4L1pm36Sp8BWWVsaPZcm7kQ6nc8omXH5qMnVRRxrmSckGDyrLmrJzEa9p9W1F",
  "key11": "3vhAxkptys4rXhReUhDJGXK4fRgeZq1MuK48pJnohhwhkEvP9T7eU5YwdVArZx7UCiVbxf3E3JTrbStjHaQJvjJi",
  "key12": "3SA8vDeF25UZEjKnoMmkfdSdkHK1zXvJkoeRCodjjfLuG2UEhn362CTNK24nm8e6bXdL5qeoRLW7yVDvBrUi8j7i",
  "key13": "2UE4NdnstxgxaQgrsjEPxgo722TATFskGD2hghAmLGtG6qXCE3tnrZxJ92Hex2eVJVYDxsfkVLiDcbHzRWV7xLqN",
  "key14": "3doMLUGAmFvwsr7AMjuAti1RT1n6pF2nLUxbpdyB79vRD732nLcwQyEvGxTHdEEkAdwZthtXeCYcRQaYZ4BqtYdG",
  "key15": "2hvEmsNpDN3654aCr4g1wzLiXx3EgP2Xraibgz6btjodrrTDdWgNyuttSJERqAt6r5Qx7n3Yp5pKioeaETQK41Ly",
  "key16": "48ayn9WwUBAXxfKZwzySP9tPpHNEKJv8iJkq9PNFYCNt4iHiaS3GYU2BMu1X6FXkVw1AM9szF9KYXWzyvv94gCW6",
  "key17": "3nAp8YDCxypkUEat6KS3ETVC7hu43USYxwsNEjcSZskHANy9jtCQHQVWe92uRD8FUYgX51YqhE7xaw7xeHafhDpC",
  "key18": "5YrxivGUnNwnyJ35JsNC3itbo9sfV6iDzaFrH29dESuSgV8pKDMGpQq9SdTDJ1wQTAaUp5HPA2ijbRuGVapuoC66",
  "key19": "5JbCTovY4SkVJXY6YygBaeiMerQYqAugZSyb4rcBMcBZnbuot1Kq96f7wapZNwogdGG889opBqsCGFvmNQH11Xty",
  "key20": "47Rr9jsBzjVMBgR4qrRmcrhyZeA6kAYVs61NrXxNCyhmpR1MALYCU8Wwsw2gV4F9z4NAzeE3hx9Hoxd4KdvmFrbY",
  "key21": "4PHCfMBV4iuYBWesbCnJEHSLJ21qXgXk7u88BUMW3so7yJCjRBrw7mTvCh7h4t173SgAzH4Lr213k4MkMYsmPqVB",
  "key22": "3FG8M9D9oKLgXtymdQmEqayTtqgbGShLr6ribexBA3okVYHqoF8N57ey8SZJ9pM8LZUPrZX2b1NK2ZtqweTMyjTW",
  "key23": "zwscth9HuC6JEesz475DHrgdajpozSj9sZA35e7Rurh24vDisi5rMr2Aq6Hvoq7ZH24s7LHh41Hw8EjbT6vifob",
  "key24": "2NK9o4LjgT27zy2o7Mso34KLeReDk5T3GpzTjYdo6TXDXJXxqEoYV1njmgLeuXQgcywe229y7Lhvt9ucixSgYkBY"
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
