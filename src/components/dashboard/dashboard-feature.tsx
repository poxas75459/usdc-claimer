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
    "3xh8hpw6V7Lf98tzLCDc7cbGfebyQ23iEtTLtnUT799igndaELooq1pNEJF5Wuhfymk4um9g9GViCho5u4ybCop3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38yKKPcqSjmcqjV8nzEnQqpt5YgE7qJTDH4iCVShSP4FfzcZeVxcyuNUJQhCMT9vzxfcHyMjwb7GtDRfP9a5Wsf1",
  "key1": "3nzGUFi3YWEcwsKvWJtEXTPQRCv6oxXas8BsHLcsTjm5HoBVauRHFyyjuavxpPGVXrNLBSJVLWyKAFKZh8AxQPuX",
  "key2": "36i82rtWRCaXuFAiefyqUgx8GfzFftbbZjieNQefDTLLtFCw7NDaQGtv1vC7CZzfLX61oWyDJBzFEr2XGYAFc7ot",
  "key3": "674EWSfZsjhbqV4sydS2wqzkHD8QcCEf4Jop6q6t2JbrTWqwJc7YgxqDvNE6pYAmh3JbXpCUD3Hz8EFn6SKwAcAq",
  "key4": "5hmVnMsGyqXyYrNsNLZcpWrwdonVH7CxHgFNLK2jzPUFWn4bQJzPBDNszjufUtq2mPVDduYpFYS9f1AMwrWKivmi",
  "key5": "4RQrE5dETtrouyWDkZwsscszKxYvvFjETWuygr3zpx2yyMQ1m1jkkoUCanPxE19hs93FgXRmUebigKohNrrA5N57",
  "key6": "5xnHRE4Qf1ppXjXGXXRPjoFecBU4YeKw1Kcd2TrXLSaEKjn1sY89o3ciYtBp9UUh7UaDDR2ArYp3cA686DUNDVYw",
  "key7": "C17F8nvNX2cQ476akHxDkXmaZmSyRQ8sAyM3XnzKvsWiGGAdX2hcSHUX4sWTS6ATRkrzwtvRcaCsjZP95zV7PFi",
  "key8": "nJCXJMc1HhCJRv7caL44mbZZc5D2dFeDW7j2MTi7zgPsDyCJUYJ9RvnZLaDuGxpCq42J8tL7eiNt7gqZLVcD7Ns",
  "key9": "4q28SxppdKatqjNQAQFcTXD8g7rh4VS7mX9ADRA8hmULdJJofp4aX4dn742x2W2XQfNzTqc1PsnknAogZtADZLG2",
  "key10": "2ah4x67eLNDgdZJdBKE2Na7A1cAmKfmfeU7n4ewB7LhEvNCJdPeq3GFu9aQVPiPGSzcqReMk9z6PWeM4Fd7rjeqs",
  "key11": "4VSs9wKUPghwZn9C9vuyL4aEQT2Je8hCZALZTjafwD9AV9yLYCPRqEdAJm3GLDafPUrbLXh8hGc7mAcf4Zuhvp5R",
  "key12": "3kBbac6d8EL9VUy2W3ijh5aAfPJwr7wPik6TT4Qgrs8r25j6u4yRNfep9hG3M53dqn8jA1gu9oMECgwF37pEke1n",
  "key13": "49ZWuWntpVFd4NtkJfurd52SytbhWy7xP3uPbwq18ijFQUVuKYLDgDrauV7VRBfN8UfbrnN3C5ppP5eZUrw7QYsb",
  "key14": "5kCGtKvZPm4jp4vLmcEdcTjGzcmJmZqpth7v6BD3ffgFF4v4Ju81PeQikEh7nFLSXM5wcXo7xdSKLM5qj8fPAP7p",
  "key15": "2gSiGUatPiLg8rbFXyajnkKX5wPtVCP6QHY4MF6KVJ9CYM9jwdG94M5e8D6GppDBJX3nmv3yDmyVuZtDCS7gmnvq",
  "key16": "4dot3Z5rbNh8FMSQJnHDMrYXiGmrTZUDgiYqeW8sTMeTePjaPtK7jtH6PP38W9u8fTL4LowAxHRF2ccQSS3RHGu2",
  "key17": "2Y6u6J4mkD6vGk37LM7N2LQXxrReSZKRPtrnwBmWXGiijbTdynXAn2xaPebfn4et3nT8E7UmjjEshRokCMLCCdDk",
  "key18": "2cs4519GPnNJtkuTNS7TLUepavUyWRS16gjqTyfoykVt6YRLKX25qqX8dbTmpw2jwFs2J2dFeqEpacVYi58J1uVr",
  "key19": "4pNP2pCYQKJNNKxw4agvANxzQ8NFrdKfoDtdJU3D5U1CY3DK6ZUJptxhQyvwcdfZiBQUjNNYL4hb1ysbMVPnCsAo",
  "key20": "55LcF16QuEmJe5QKYUBSTuAtshrZWc3T7MQKmb4BaXo2Msmpr8pfMEibLJKjMSfnbG5YSeHXv7vjPLe13EntNrcR",
  "key21": "67Wwhq4vSfEDpUM56ojdi5RZFrKTC2oR9u987Q3oigoYkxnfhf195HtHoAqHqqVaTRWd5yFTpajyGkrQdaKxbTFh",
  "key22": "33aDAru1SBRtPcnmJRmtdTRbQUQic2TDstUEnVy2TbUJEJGwVWPYiHkyboM57CfUueffmvPw2ziF7fWQSPjYgfgG",
  "key23": "2PHTvajDtBxUux8WC9g4XyBWduJ9AjsQJzYZn9VVnBqcw8ix9yRw1hcGwWuuXyzEyZiru7w11FcZepVmyYHrNkei",
  "key24": "2Ldz4eKQjPrAeczQPZXGVe411jz7Tpegrr8XAAuqwW18Kq15o75Q9P4DSNqpnsqVixLaX7Zono3MWyMhK141H4AY",
  "key25": "2BhNiRv7iMyoDoRPdZsus3inVg7Hr3qJLsfkieNyDFtBH3CMffSGiu5FAAQXmgA811nu1uDAJJH93igzLRUr8NYW",
  "key26": "3jCxEy2v5ujdUBF4BM6mAc7XhJz847edjywt7uHpTaTZCmtLw1dty8CewMSB3cdx92TnmBubmFUmRnmHzXEMB4ad",
  "key27": "5BPshaMfnbihuURMWq1vtpQpzHguRrHBx2WNL1z7ngg8tTkPcqxUN4Yx7XnjdjcARwFVKkBkuz5YMgDZEw61sjq7",
  "key28": "4qgXaASG9SooqgQddmcNGFkjwq549rYdsfWJSkVde6jKLUVHa6NUCnUZE8iqKA1rBh7GUbUGHUfeMfveWbqWEeFJ",
  "key29": "9xeRb7esANxFTi3f7CYe2qACaZFLkhwJzepXixkECFFdgD4cVxtvreNdii8M99QdRLuNA9LdktbuqjDsXA3N6uk",
  "key30": "35pG1WjbipAiygPVsDegRhDqP1gfToyKA6v5sXvaxB1DNyAe6K4ai1ak5NZnM6gu4yq67WmP5t3qxmiAr6qYmGak",
  "key31": "qNmo4s9Byrn87HvGyRiAibZjJd7eR3U9C26cJs2tyy4Pqvx6LGACMfi4suBcPj9W1wGYf8ms8LVbztRrCuHasRN"
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
