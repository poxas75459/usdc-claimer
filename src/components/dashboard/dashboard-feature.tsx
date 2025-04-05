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
    "4Tk1oLmZyoYzynGeWzka1RBXSErueMkc7azWPrbXMBMRzXsVHZGJzSmQjpveDZSBAkCox8Hf6zohwHgtQKNTihG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JY9KG7U5SSD7YAedYubhgeqzP9qNYXsvxkHefdL3EwyMqwScpQcqjc7C57R7L528vteUv4LjvpKvH3dCRMP4zi6",
  "key1": "27eUf28yp6fWKdzWevPvt3os5734kpcnNtD58fba5mKELTzGANDvsneNj3yDXDgvsJNjjdSLQUj4dsnTGL1v6mb4",
  "key2": "5zMZ2WWitBgqZCYZwiYrd4ZMvMnvkmBJapEL9LJGkP87KHppbjgb192xCAjyU7xDhiAGW3PLsdAysyYW8frsKg4B",
  "key3": "5TKWuXDzFiZwZETtcsnLXZyXqg1YYuLgZmZwZyJxCZiBVy6JBRjdonZKGR4ctiQWLPJqdn6xX5LNkZq81D92YX2s",
  "key4": "4yurweFdeNuR2pnh8ibMERCmmAXxB8DYjU9XPY3CPgZzaxquADEW6gn7sd5pSdvqavJPRL6xxWghcXX4P6q9A1j",
  "key5": "3QBep1pFyUKcKnq41VaD7vYm6YVYUirHJqVNyjGPjKSWhMMYPfRGGUXWBnGQdiBxQEMSpwoWyjmontVhqWWmSSn8",
  "key6": "2bXtuCmQhctPLFYnyYRPwE3CUnGbXcMPBqpGbpaUbVK3SQzqgU9HzgnRBqLkG8xFk1q9tgpmGS9DTQKZ6yCkGaNf",
  "key7": "9HPXbgj7Mx8DBnbBrkE5sA2wsotbFwGMM4pC7vCkjA47eNjRQRhwLBNiDTn6fQ8rPduzi8LEwBShd5e5oxbSWg7",
  "key8": "2Yh6duFvN6Hrb3PwJ8rWzqrQePcppmHxSvQSNs4sL1vncv7ZCSyuZSGDPeVxHtbj7A8NcG281rCzcsFaiKJEB3HT",
  "key9": "4E3jtyrxjGLgkrXXuhwC1B78Qjf5bAhhtjSSnPTYVTpHAnbLkR7b1mfUq2GApVyCaQ3VByLENLHTz8ojzjMjX9d9",
  "key10": "4XwPvnsd4W3NpyhmVevThM3jaUDScioUM7yw44ttf1tJkzg66MXxknXZQwsc3Vwc1CP1PkeTSMtrhhAP5opgFzf4",
  "key11": "4Rq5sH8vwLy4JiDjrqk9Hku8Cs7YVSJtehYyJKTJbC4gLyBawSbGnGXXxUvd8jx1h8QcbbjnMBypoGfjNLYNJzdj",
  "key12": "5kKqXm9F8Gw4GWM9Az41a4PkL4NXAN8Cgh2agqnqZWvABpe2wCBZDg6oS6Y1u5FAXbJmEdr6Dj6sg1528V1Krp8c",
  "key13": "3LPB2qBmbjuYfeN2fTXT8DepaoVuj5iBPgZGHQHEH76J58dgMeiVgH4MCcUvvLW8qB3vUGyPW92HLW75mVNBhBSa",
  "key14": "2aSQTnXK6fW1MeHzckGqfSgn1hSbadvXpo3bZkhNLyVvkPh98tBCka4uGQJ9Xf9BKega7XH4AobnUtx44KhPLSAo",
  "key15": "3qJY6wYACxcBb9ncwGE3wWpeDRBJkYJEaWZZwtKnaXSEYXWRmjrsve7ErUffJHo9be44YpLQbejuLD11VSFM1WUc",
  "key16": "449BX3EmB4boghux8ds6wDWYPAfnKWCHBLiLd2GP2CoNpnfVYa26L5Q4BhwFJ2WN32rPDHP9JyKn1ZwRaDpoub4K",
  "key17": "2c64ZrsVBQStKC9MgYkKL8gqwfWeMQS1AnP8dtbTfTZi3s3Zc35CkSve1qN5aqjbwCsw1dye6pqRrZYUhXG369G5",
  "key18": "5LCgK2gMJm2kXUGtQzmM1QMaWXwEq8zxnqBsrLMDxs2WSoMUgPiQHPwaXcAU7Gk1yzUnZapju8P59DFJJntsGbco",
  "key19": "5qoReNC1knvCjZQ5ve6rzjdaJVpu4s5KhuCjYoxFY6PdFA3Yr4yqa77etxyjB2Pj4WRPdJRe1SXsjh6zmV6TPQ4b",
  "key20": "5if3GLCDB1PsDUTue1p4YQ9H61PoCY1LXfyKUzQYe55YpaPkvhuWV9zXEtaZq5LX1FYBoakjLMQZm6DXckGGRvdA",
  "key21": "wrJV8Cp7uMa5inJCAVsxz9An9XRJt7UpUwCWxcqEwsemar8S9Ba3dhtX9mYRnGrm8asXpfjt3PQwkcaB3AhEyNS",
  "key22": "5VfAhtHmhXLXuKm1bMxk3ng1KsoryNQhqRxK6uWPfNvfkyJ4sWCrKztrJQLBGLrmGhBZ7rwW3XhocwmpoN6Zynpf",
  "key23": "5JQ8Jth3BZQczqmZcVJ22SZ1PTQjfScEV76PkBXhkcrwR7ir3GmWwuD499JRAoE2668YVCwkvyWddAmJuCjmqgYT",
  "key24": "47vBegHCu9iXo3ysCEbD5dxcNW1fygKy3CsJHv1TtxJzt252d3JY5Vu5YuQ5MQjnodygg6Tnc6K17hyHfAfC4Zf9",
  "key25": "4aKuEiUT9XFwyL4nJffjz6N3qzbcJz9UbncGQCgV4oHQn6ZhX6r9rxPEqejRwjjYmnFSsFRd2U7wWK3MXSBfe6js",
  "key26": "5wh5HqqxpCVQ7iiJ522AGa8imF8fNpbULQCVKrmRiqoqtcyAz923cW8sdupWriXexYMErmfeq93SoJXvYSgLw2Xw",
  "key27": "3DxmquonXVKLj1qCDEw9PL8GzQszZeViLExwAKvsCm5GSEu6nmXHDB3De1Tx8hky9ZQhkkyd1UmtF8BWH3beuCvf",
  "key28": "5HMCuBGmKVgcyGYQwZEgN69HYY6vp7Qt5qs8Fkd84rnwRDuy3XaSxTXCmVYMUSiTKCyGsRW2B61D1ZrFTrGnT8a5",
  "key29": "3Xng11mikJDNt1s5iNMcz76gQSZ5rCXV3nHLHNwVjg3anhdLBGTuyEpQjCMLJswCJzN9doNttc1Ffai7imd6juNm",
  "key30": "5G8aR5QDgj93BZrWcCSNs9ws4MVxsg3hziUBWCchsniwxsLhq2vka7b8GReqZX7kAT3WE9cv3nTdHj6T6Vj41XET",
  "key31": "51gEYvd9kxshSCsRqP4ZYX4DsbG9Dt6xVmJfKEYB1ab8cmev8N4eJcQ4ApTJZtHw7xhTP1eB6yuj8LKiczvEDG8S",
  "key32": "64HgsCGY4UnXS1CsdczzcvxVa52wWPrKkVyMAFfV3RqZecSLPLYnLkVgqHrm5Robz3kUp6Bhm1umfv9Lx7Vh7Au9",
  "key33": "3eNRGDEqoo6kYuJosy85J6sJA31jFCur8h7i5rtjWsZthmAWnSEMKqMyrjEmkWAWse1ekaUHmNh7m8t9vK3xDkRZ",
  "key34": "6YBrsRMjnQyNcyP3UbqjntkcSNMzqKjhNMPyTikx2C4PtEMc5Lqpk2rzZpXffJTNKNzELzYXK8ZVfhTvx1L8bww",
  "key35": "3tKvkB1TiYimXzak2mLCVPHzWuDLAMpL3K7cEHqoRTmTXEP26wPyucaePnaSbdioqt8SV9kgUNjmbSYsSGggc6pL",
  "key36": "5n7wSeUahAav1ZHKQtbW5a1csp1apLBNYg2iX3vSqpu1GUmwWyTmvN565p5x7S9k2Fm1jLtmixDPnQ25S54FW14c",
  "key37": "5geKjU4dcy3Y2NnV1jpyZFeJEjB7B2khsVBTXBD6Y1vuXt2uoTFihzBjAkboqZ1y7tAFWVNtuUofuS4ZpjFVdKcq",
  "key38": "229jELsNRCWW6EAgsyXmt782fk2hgPxhvVRUcyNhD9e2FACrtUqdyUaAMFnaBVUd4qAumYCD2pCi9TKvQVrAQ17y",
  "key39": "HDfd8V5sjwNrtjfY1hSBCGhYZtqTHMufP7k84BbjHVm42z16wGY3P39WUf4uGUB7KN3BHKshBe5rBrkFEbF5YXH",
  "key40": "2NXfrCCTpehg323YRbAE1kayj7T7WHYWgjbgLPBLzrR3XXDAfuPFwxmpGQgPW2LicVAEZTyqTvPFP1EAEDCu1E5j"
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
