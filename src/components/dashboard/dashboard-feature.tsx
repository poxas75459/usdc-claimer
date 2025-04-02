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
    "62Eyvt9d1SWSU76f56FcHtM3i41JQH7nFmaJi5NH2eL5vwzRbVjM9saUGHr9ZJdroxdQCrta1cZgednWXN8MA3z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37dpeLyDsBShadRC16eNuGRQy1uY1qUzBk9T3bHpN2iQXYkVa3VzzqsxVTZyXhhFEeWdBvDSy7NEzNBQJHwX6yY",
  "key1": "3USAYXUzzoG1nZrCLQsmuPKr7n8PQDLhAvyeTFZLVNeGYLTWVb2onvc5bXmwKiCMSgTnDeB5hwWXztUj3TVG7yvj",
  "key2": "4vGgkqKWEuDzVA96TUZFsiTcMgAqawvTvvRcEy8G3aBm111JNUBfRc112nmJStk3SiNJwbDEoptZwdZdYtw4bCUz",
  "key3": "cHmGNwc53vFnar7xMQV77Vxbjn9cYA2wxEzMk2W5dfqQNio3JAu5EQJR7yMKx8eD349b89uG3pCn5mUsfZKj776",
  "key4": "3m7LwsanGsaUZFc8qEZQ5KsqywAYNiiKLbZodvsWWXRaeaHcc9xWvgfrxbL5MK9zFjqeUjnL1UU7XG4q4LTUYPHH",
  "key5": "5HB9AqEXb4KUBXmuVtqme9PRKfMCMvPv5FYvQjwdgGiz2wVhPxV3Bn5E9CQcujBEHKcfXKYtEyYurQKeva4cahip",
  "key6": "4VnTnUwWPqKgWGUyC1yKW4Fi2RcxwdigbRQpyGRRrEeeg6x8bYioWUKLfNZ1tTgSSXPrVGY9uPvF16MJcPqR4e4H",
  "key7": "2fYKDNVNdHsrEWD6ZjTETJcdzGGDatqSUYj62GWKQkpqfYZycDNuwQjnwKGuTc6HeVS8UGYGygzrt36rthm4StnE",
  "key8": "5eThSewKUBpKtPGoNnz9osb1uJnYxiyzYVBBVEtewTzzEEUbWne56S3YzNyrHVq4ZKruEbMViWQCnBqmJ86QBVoc",
  "key9": "2kM5DMAvDXtWHiMZARGCn45xyhyL5RzwF4xFtXwiK2igo52DQ9Ta6tnYZdQLf5XQ3zrjNZPxxcD2CPfD7hPph87i",
  "key10": "4AELoxMN3NhdKMVLu8dqFZPnXxinLgkotU34M8tzkVGQDu8pUW8tWQKdkbQQTaFmPL8DZKhkQga2EBA6CGge3DX9",
  "key11": "2nN5wEcTBVKqvH5NXSc4vqJwfnbP1Wm2VKmjqo7pJVCUysBEoeyjx4k73Y9u3Bw4FA4oHhaMdzKH9GU6vWv9Cahb",
  "key12": "BVfsS5LDKHj4PhF7pQHA4D1fo1pbVHiTT3uUTYEQkWSBAzc1y2ZBVuD71izYLkHw9u1NskTgTN3e4Dweo4XxxC6",
  "key13": "Q9dfQfAxgARD1t16vF9CxduF1rrHaqLdceGS5qoPX1szY8dhra2dxqzifNt3RiPiumvU8fSERBBDmzni3eizwSb",
  "key14": "rEjjMc1ocHRzBFjhaxZMGZye7mT7tzTbEeaxcHRL2AnFRfyiUzfSjZKTfp1rG3xqjfP1jGaTbk1bv7azsufAiX5",
  "key15": "2d9h7aQFAg182x61ubvoUsLW3ByGUTcNykUKNoBSeBVpz2FKtqk5poL6Dt16NrZgiWpmr4oRqndk2EHabxXqqdQt",
  "key16": "2LcGQPCCF2z7deMRff7G5q2pihs5MbwhMJwVF2uWVwks8sYCvuEvTRSRh1Lb5VB4GMXF6qu11wo9kxnezCovMHgE",
  "key17": "5ZPEDcQyhtMXm2pM8XvSUk37XTb6DQo8FX9Troz5tkXkY5tPZaefwZ3arWA4hTpggS7f8BPk4xzLoe2bKz5oe5N3",
  "key18": "3EArp3fnthGS1ptDJN7gPjfdthBZUoAbFu7uMBpKhdXUyswZBatHcoyZHmNfhYGr4vcCzhoKd4U65974pWBXYjpL",
  "key19": "LZTGD9qUXwgBcmL3FFLWYQBmackLE95Bie1PMZ6jBHyJTomGz14C4ZDesW9Wvac5oMYQtd9CpngyCWDWqHjK39r",
  "key20": "1DPWAq2FKXTq1852XtmKgqa1esiKjeQsV3kG3uHeLPny927DUknp6HxjqyU6Qvyr3FEthZ8tUdh2ycRFLXFbMEh",
  "key21": "5p2X5sxKNpRM9XWqwchBuydsWJGuDJ67EMt7LVrVYbi84VafzX6moBru3CF7k3WmgaXGdSW9kDXbeLcwsAz3omqr",
  "key22": "3ku9AfCPmbh7qcucCaSNAyYabje2Y7BVMrvWRsDfwJ4tfRGDJmDB9YEFqtBAKdyERL6D62aLteeHFxGgYmAo8DLV",
  "key23": "2jhWDfP4tS3du59CXdCXLcoQ3xdeZorWxJZ6uLdsiZH9TVuGDY3qonnTe6MZsjwxkZCj3yV4B2RE6b7XBQGunfsg",
  "key24": "5DdsTuj1wmMrmuUG6X3GXgt8XVHQn2eZDWPvRSVEpLE4R72ypV1haXSCaYfByN1EQDJMx581S6Bnf66JFiydD8k9"
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
