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
    "iB3aH1eQBvDJP7jowzwwNcJGskVsM2VJcGnL1qHXm89xTA9a7UnwuxYUU9KEmusG6jFALYNiZMeE8iqhZDRvXAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mrpHk4YVn5244xfq5wqnRvwqDZRRr4DjCAshr5iTjL6uLygqHZQV4fVzJhTTsirHq3i8nNmtZ85bN5fDzZLDiPG",
  "key1": "5HAU2quM3VWNfziPiKQ5LhhPCkKXVX4DHFUBiziwyC3zs3kApEAJm71Y3qSLVAghhjKSp5d9gWz9AYStEDSTRUdh",
  "key2": "4YzjmotbJzsX4p4PW2VuPyyKFscgaLNsu7ak1VPLSvaiyEuxfD1dTEN9iTwGSjdL7nxCzQeeN5BqZN3AbL2WmopZ",
  "key3": "2eZg6fbgRwrEGhn5YAZNHvQH5LM6fHcBRshLgDjqgZQAHGBUotFJwxYRTUWgZQyQ33Upj2KKRZxfw4QXKT8jmp1g",
  "key4": "3gkcbeEXW6kNKc1iHXsVmjcNm5wjZS754s6cutFTLxAkSDtxooGepy3C9kK22AcxpTuhJkaGcxaFdo8L7EGkNeUz",
  "key5": "3ww5jwxYDoTwgGGUC5MvzAKfcQYrHNcCHzdyP9vuSA41w33aRkntFaZCad3rt5BYPz93DLDvhM1fiHhTRLWPtHG5",
  "key6": "4oiwiL2uqUq1gcGWWq27Tmb7xqKjcUL7Hd5SUaTeh4ivgdWkuPZU8XfQ6DQjdAQV891kAjPHsWBjheU9pVGmu56y",
  "key7": "2MLiog67e4ijXqx35tvW8muzXNdjZxUMkUu2xFa5iDMhryuyqyPBsN2Pm1XnzogHjeKVcm8vsvdGLjk7omyKgJoa",
  "key8": "2FEzgh28mttN5JW8sj4sWCFSrsgkYaCDin1E1yPNd2mBCPpV4jcynh66m94oqMQr69y48kWftkirfaHGbNNtTAkk",
  "key9": "44WjPV9U4ipKz6h8dSmsaxuqNkNeFDwQLPtHmhXgmji55VVtYNPnkTN6yRp5DDwQ613TCVgmfZNw5uHeDJkhCgPp",
  "key10": "3KQjXoCWiznB4mZg4QZprkXBVGAKmJMDwp2qJ5fa9PKx6wJLacmpfT6w9z1mRivHUUeTr9tanieMYa3SwoQLtigN",
  "key11": "61rq5e2ieftKdy46jMocftNp7nU9YaCBtdQM2WvyLhsceWC1wi9obG48mTjRKx1LJqLyg5fLz3BHmPeWdpaGQmRE",
  "key12": "2ivt6xPWr6vP4WguU5qYKGZti9kT1osug3nugLBfcke3N9fELX4LxvATaeZa2y8wwg1cqPFkhbof3xRVJEqHvRjB",
  "key13": "4zwUPR8SAVzSK226vhjUHroHXQ3tDiE63SoEeBsNcGxgKBXeNvBjuoUHSZWk2UZn7zdssJ3rPpr9RqBMhCHTmepo",
  "key14": "fykqwcPamZ5Kg9Ta5RAycxcMNSzDmCoucU7kB8EpdPQfr6jvVkyToX6GsaaWmE8zWaVnJdPNB7PdrnLawaB8ZsD",
  "key15": "4mABWxoWBfCFeCyhHnZ3G8cfhuYGmUg1PHFUaHgtHzqP6FA7SECWTmdEce1uux1UBg2y9xTmFXNYYeAAev63FjyJ",
  "key16": "eACU9LsH2AsLBAn3AK5xcCPPsA7gna5HG2quUJxwuGDaqoGSdcDLdpPJUmnssTzob8UDVkcGrkN1eqpDEFfmFCk",
  "key17": "5BG1J1aaJYPkGKGQVzBXwGGZbYs1ZTeMCSf1YbAxsrVYboSzciguDuk6ww7PVZerqZ8AUFLi4984SmdnTEhwkqZ",
  "key18": "2tmDzc1DyLKyRNY2N3qUAoNhFgQbqAqjs2hNQnkW5QJAndh9CkTpVJQZQ2iDeUKzbHNBefvpDPGhLy2LMMDaG5nk",
  "key19": "2tsi3AWZAQ2T2tuFpJchEw3XeadZG5mpi82Qqgqq5oxzoMpRjk3CijdtcpGm4htU57W9nhhJ3e2mgBA4fuAKPyEW",
  "key20": "3sH5ywV429QCQrYSiVxE8PVp3kDKxF8Pn2kBeXqYXwrudDEJAapjCG5xGwbShiFGF9YN6HhZKFCjXApu1JM3E8hM",
  "key21": "121gfpiRaSdyzAcw6x858eXmvk35rydQQPNeZ3TJQTXBgN7RCAytosMojZz6WxraJXssru16iDpNp6Wg6w2vjSHk",
  "key22": "5UJxvVULfF9on3FbpgnZxd9mxj564M1rmzwQbqMajwfoAasPJFK99aJBeL3tATgpyt4NogPdi1d18AGf2kGe1K2R",
  "key23": "4ktufEwA8gT7ZdejDYoZrJc9kjg7msqMj1nMwX1xWbv3cXFVpYE2uxYvw4zvzLqV6NuD4geRATrL2Se3TgjVArJ6",
  "key24": "4tiF52arFkypEdyBUti8zc3g4nWYrrRhdJ1ZYmp4JHm6Hk7iejorU3UqHauis1NohyUGqKhjdvKp9kk85HkHsMCp",
  "key25": "3obaSbZjvSk2LudG98gQs7AxsU8cYePoNbci12bEutvdRGbzRc36bM3iX3YG7bmZJeZ7qXijDdP5ePQC6Fqamp56",
  "key26": "5iJKmdHSwfJDqZM9D7dtyGfK3tawuSgheXtuy51hwqSRPvWXp2yHEXbt889xniXcybfog1MNtbL3b8aJ3XtyHYqd",
  "key27": "4hArAZvbhXHuHrzPQzbMdTWCEcRxbDBbMv9CEMV9oicfTxJgumVandngrdz3kLxUfaheWMk7HKmkb64Xq22HXc8d",
  "key28": "1eKrocq4a1bVGtsEjhK55NJeB1yK4FAH1STnmKMgphtEpJrmo6Wf9nV1XzPJAHH9iNqpMq1EebqHDHe4LVwKYBo"
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
