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
    "33tDLyZcVmu8Vd3WWCgEyhdfUc1cPbVvhTweihKkp3EZPcEKqe1vnjgu8Je71qgihpR5149kegFyL38yyjqcLS63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29H8QWp4UNVSS38ZnhpPBvw5KdRbc4DqFGgDpNuE9mUGU2mV2nDxg8WXj9qB4unmoMZhUPj9BHPPDnrau16Zm3Lv",
  "key1": "2TK3mDo2NxAJwooqjNaAboBa4W8DjvFsZuQupzQZMFYew21KaYh2YzYH3S5gs3JvnQS73eq74QH2H2XqgNmNPWVt",
  "key2": "2UtFrU5StiQmxNWxohQQt2Xy6pRmkjgmjyEMCRYBaowU99sBjxveesQL2xdAg7LgjKSEH2QdYgxcY23MGkCbRTKN",
  "key3": "5FJR4fPVCz82jwm27FK8yDRHmFdBzTU46WJbkaqArTAXiKpEtY585R9ZTeLHjSgyZCNr4RBYG2ZqSJkdphc1aGsv",
  "key4": "55zDfGN1VWHKAZUF3gMN8qVBjJtQxgKyKnun4LQPh7cXNiqSBxnqkojh8YpDU3L3Z3MFRYm2htJkTEWyXfWhDHNJ",
  "key5": "2asZrnproDASNCkhB1yAgceMTyTy6ycV4FNfS2szCzKBY6KZRHJMh3iumSA31PFFovTTP3sgYLka3kApqghX6GVn",
  "key6": "3garn6oDijrZwtXPpzxXvbfVNpmywtbtvaCvBpmXd8t8u8PCJUdHHXb7gcELLCUVLZqgLXWeELpvPr3WEWpwbwcc",
  "key7": "2DV522JRbSw9DV9Haz7vvemQYgammXJSoiAjYfnz5QTpEEzSDyDVGHLNbY2MXJqWGGqjKcHN8LEGo39GsxmsbiSy",
  "key8": "3Qo821geqHE85weo7sJZrWzB2Amh2p2PvnjqKgqc2WsEfupMEFtb6ET8kCEs5sjv3cW8mPuyxmysh3AWp1kUwRS1",
  "key9": "3B5RmhHtsqFVkLCoZtRwZZLVBzkcRnuhaFou3DWyM5yYjTVEq7gTADVo3LokJXB266YN5te5CvT8NP8RF9KN4dei",
  "key10": "4AWrMseNyiFTxQCAQZ3zgQi2dZYan8F7qKPg69Si4fPQ8uDdHPzQzSu4W21myFSEDzdNgFGL2wA456xvUPW9mbVm",
  "key11": "4w5J6at333aWMwRsC6g2jP1Y5fosmbG5a9BZx9UZMjz5v8GuvopSJQRGqBLyhmRLS1DM5PJNt3uZLvtboAD1kcZH",
  "key12": "2hzvyTnXPd1CgtakWhG2a8iaHYb4h4kS117iq8XxpRpjToSpAtKKjrZQKFDrNFFufxfmNxGYAdVPseQ3Snzmgi8o",
  "key13": "4aWtYnRL5T6wsUAZaU15GPz96Mn4CJNEQfpLn4S7YMeDiKx1FWXoYKupnn7u57PZ1nt97escJvqwhEC1K5ZWA5Wg",
  "key14": "2Lk9WneCWZUEg4wgFVrbe76fn6yM7thxj91SHrhKVxArc54VKh99sD4ypUbjdTFWdVok5CeG1V4YEb2CMxuZiCWk",
  "key15": "52sgyShpQXCZAhtfd8DKmpVZATZmyRbPVGk9UDM7GjHJRbfVYEVjhWMzk99KXUqddxf2djVc6GY7C3JVsav6xfyN",
  "key16": "3QL9YT69Z4RHTwJWXDUaTuciU6bAsnh8urWWnAFPGWTBWxTTjdWq84KchXWBhEdB5t6PcSE1zZ9LxW5kAmSK1UX5",
  "key17": "cZWc1j8VmWXPEoNekorsySytfkVaPP3RaXc9FPRiqJFVo9uCYnN3tnts4MGVhNrYMuEeLpB6RtxXe9tYhsctVcv",
  "key18": "3JH7terjQKi3xWWcEko4yfM9NBfGTPKKFLS3hJg5Gp3M6eqdSthFV2jaASWQZtyqLJ2tVhb4G4jyG1Rgv1qRvsAD",
  "key19": "46nuaqrLpwJg9STgMsbSFpt4NMaFxwuWCbYNXGEZt5CwCMJSC8Q1CSk4xxz29m37wLTDg6W3R3ekoUJSpzhQrWLy",
  "key20": "4hun5a1gSKzPRgu593XjqXQaX1GG7Xjfx7NTxhGVTbABQ5YZwTWMnZLA6oufHpYnvwkz8X4fQtFfP3tzBwxHYyZB",
  "key21": "ZibfmfcwatqcQPq5ExC9dxwSWr6adM9kHJ22iTad5bm1nY7qZf9H1aapQAmLbZGkp4GccZahM7Yp9YVB7J6DPTU",
  "key22": "5BhWqyFjqCw8xNMQwGULQVb2VPmxd216mYwbpyrzXm8mnMi9dB9DMjYXpMgbfE6vkX9nieK8BrHHzmF8irRLd1kV",
  "key23": "2mvNDpL8Searqd8YJAAdr3TH4p32P2jNFmbpxZ2sp1THhWkoma6qjWYzEFcEDgvZFE8WArb8a38HVcjpPtvyaW2J",
  "key24": "3SwLUGBahjvePBdFpoXmmwJWqHhZLB4Dj352xy7tgNJyiSScjZZsBaaCEiaLTD9JwHvfjNcdndhxf2EH8ruZmRoi",
  "key25": "5SA8XtU2Ha4LoyEjGYPpf4QWwPTVfWha19kaTx4aunkJsG61oZuzyeTSXyLR7GNU5g3RyJpHWrdQDtLNxCg1NZN7",
  "key26": "fLCgfNN96tkqt1ZNNXEsf947VeaEDpzWy53RBv7z45PGMgeh8VVfUnWJhWMTi6Pk8JkeKrVL6HKHfeGRQrNtmhk",
  "key27": "48cZ7Q29xfKQ8L4PTErGBnT8ChCD8bFSZCkJF28y1c8g2ertnvVNCtSQjKAQvYFADg688izvSqgt6j6bhD5xaJFG"
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
