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
    "34Ct5UdfCJCcQqVyKmDEsHmqKU3SgcRUBSK5ZJ9wRdrWhh7vVjF5ggg4NNXFa3wcV6VLpSvZq2YRWw9u6KK46qbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GYe2WEwdiSQXdyDT8Hmf851gsuSY5fsWd5gGSYmZdDjA1oJcbufzTbRfqCnHcjDcqMsCzQ7cYhX43vcc5vdGVR1",
  "key1": "wSpgp4yoHPvge2zpEZrYfRKVPXNuNfRQtD2vDwv2EQRtJ2xZPnHtf66jxNymBWeEHZt6bncnPw4D7TDGXeoK72A",
  "key2": "g43He9GkYXszmssiNKwXycA18ocyeYLDWgvGPaa18HkDqhCXdii1C8rTwti5Y7oqPAH8nBzpS2w7sSX6zPzddMy",
  "key3": "55xtoQ3btvahxYrWo6icK9ae1N8Ez69Ps945y1FU4jpKxueyDQ8Dzp6GY7UcvrC2WTToYGTZeDqLjJhthChNxJyi",
  "key4": "43dgBCJp9FTqnTNHyoFzuzynXDx6GgoBjEVNJsNFp1Lg5xCiaCYxXyY2qDvP3k6g1aB2chRTBejPpwuY8MVwQqJS",
  "key5": "2aheEK2UupnTbEqFTke26psgkpc31wiZyTSX2DVrZNk95HJQ4MjZ5QLhamrgwwny3vg7ybvEJMFdNrSK8Dw3DBKg",
  "key6": "3tKoYHWdttroJgeocz6eWc1YTUBEhiY3fB6ULd1nA2J1hngxkqXEKhDuQEHtWFzce9EjmXDEhp7T8NtdTaJyUE7G",
  "key7": "3MC9ZJrVqFMFN3wzfVFiFKDySnn7Mqp1MwkQt5aw85cuADpsTGCYuHwo7tJVM1Gux8ydzk8oedrnbQXR5ozRLhoM",
  "key8": "3hhv3vvGthGVGYtRA2xsfQrXKfxEMqh57W5bGLXwDUbkcAMXkWcGPbrUbpVX4nPjWo7DUoN3T5L2ZwntFXBoXUvN",
  "key9": "5uxmTQpT6Agqjdd6jisiKYShyeQwnjD9tZVHqsxQxPp3dsx4xCHRCy84r7qj6FT9dTZv8V9ArJ1FJDdLnozce1Sw",
  "key10": "3GsjZjK1JiN7YaMGYDmxnf1UA5xFipKAtkv5pKzkEPfedDuwkMhCYCuBGYnP15oB2onA7x8Se8C9zHKh87L37E9V",
  "key11": "2gN9xjKvqti7hM6v7TLdCB4mxETBDr22FWXEBep9LzyQ9yzH22nm8EY1eKALJXg9RMLF1GaMzf9QKs9TbzVrwqPr",
  "key12": "553C6UhYLr4k24jNu3ug4gAF7tsUtGneDpdWp9qLva9uMy1c9LcwZmjWnM6kWrNgQX7eB9YQGgStknFBBePAn6sw",
  "key13": "4QsUcWK6m4ibezhgmiSgmBme65J3byzqWpQEBCNV5rnWWYY2b9qvG2JswxwTgXyg7imXhnKkcTTHrviQKv8jysuQ",
  "key14": "65rthFHhhRW4KWNZENPUmGsXmdPFrydqhZh6362LNBQVduhkEtcUGqsXRBukkhWoHjBmTeGgysih56zGGraWAfHD",
  "key15": "uCVxGgfw3m4VsPySQ9h6a8arBoAzdvBDFD3Qnbv7bcFJZphtAUXhqjT39Ud96MG1fGeVzdHWsK6ibk5JrwAu5UH",
  "key16": "TtSRAc53GNcAcaKKW7dgd7avufafwRVZFQyYcuiTxfJBwNX1rku3T2Fc5LJMX1cAxsUWh83KjnRhR3z7Q2XX3MJ",
  "key17": "2fXQPUTDDLKdyhxmC88prmzXmuttXZuobkxtBLEUh264DcJnqHUq1Ykmb57GdWCwLbopb5ZEkenGYP9brjXtUdrs",
  "key18": "5fkoPfGKmdaTMQN1EpgvZ8Mwt7vikqBXm7jS6KgJNcCJs7HQzRCruzQ4XLs17YJVSydBKL1xKz8ux8H1UkWhHBpX",
  "key19": "5a45KjtDn5Kd61xiK7PoaocAFRo1e2ak7utjbP7QL4BZxRJBc9eBb31QCZFWTXpsufzirjLFy3n998pnMdkjwbqU",
  "key20": "269Egf65PtrfvooYqitvrg4qGADWNZDrMeArrkqZyBx5DWP4Yu6MABhUgdsRzPimarSxFo2Lr2y6W5p8xkaTd5df",
  "key21": "66aAejgoa4xWFpP59TYwt7E55tcvQod5zasyLLfFjDReNRC84vkQEmJCpCvDk25qAyRUez9XDqgkfJUV1CvycBfS",
  "key22": "5FqVtDuem6K66UmFUAZNPVYEx8vQjdLuRD6JEXyxPnX4tbnTAD7s3TqRzyNWm76e4Sm9YobPnRSq3fnvyvHKLQyY",
  "key23": "66SLxpuFFc3TEPwELhmKtpyuYr9hWupy3xrkvJUe9XxgotDuPMyFKD1YTxAiR3p2p2pY7hVRq1b5F5jKG3RGc2Bi",
  "key24": "3npnnmbLmr2yN6RrnxNa2a252nJd6EP1WYGzZHt289SiyiWZF9fT1Z1LDJ2bTkKxfNcB5PHXYCvKzXY12RpWLJwZ"
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
