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
    "5iKQeXDdLLCG6adNtBDqM3iRj7MDRzZwB6CjKnJsuJEMUsa7BVVUd6hXkiPmbZe4fi8dHpvZBEcutNci7UMPce2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ke9TdQk1ZURfcTQonqqCkwRxWndeKp721U7UF4EEyjiov3CT1uABup44puYwSy2M7QhXh4cBxEdisesT4ak7wpz",
  "key1": "UmNWuY9QqL8erXMfRzqDMggivLHPiazZuWjJ6CVSrRDnFub1u1d8fyhfauL2thyGS3kM8uS33CfL1HbHxM43Vs5",
  "key2": "5RuvqkdebtBiUSsRhr3SBbLYsRL88PWvoHRNnRycaNA1KGUKtFBAT3wPDNHiqBZ7bE9F6F93zpy13uHdRN5sxuF5",
  "key3": "4SLpHhtXUBgmb3TQVX5Jd6EoxxiZk6oNKRfkxaUBwE21Zgk1DYDi2zPEarA5Nv4a7jyCyd56VMXdDV7kTzFiuUty",
  "key4": "5EqSwtfF3U7YoZyWN55CA985VuNfT27mEkUquqYEjPBt67enuJpANfUP8tfNXEcd3RfeS9GjcQPYDR2iYXZmwtsQ",
  "key5": "PcdLJNdusrtaa4FK8KCN6S6DZWvs6fuNXXwcsG3Cf9DqYgAuw9VZCGB3b6Y2tH7sUazjA2bEwaj8XCnZ1BSmJDJ",
  "key6": "2SD71YcpkQF3vj5naB4Ezd7GKzMxMYcUBibB7pEzGWbxPfiWvAGB3U7YFa3WUxkXYZ2QRLGPz3UDcfFPstnic3HZ",
  "key7": "2SKhHiTqSHTBm3eKTLy7sH2C1Avd4Y4igSEvFdQMLEvcU1X24t3bqwFeWBsWKVJWhiVGwRGf5qW5wvEsfzLW9qJo",
  "key8": "31CV61rhGvQvrX6BM1Py1ft66REFyHGn1JHVXUGa4VWAZXF4F1Zm51tupjLFaVonvHbfG4RYR6KQaQsoPbaK8NCi",
  "key9": "129kqPy4eNZPm24vJRmT7a4vnvLTn3KmpodpHkZCCKQVHjNVhHe4sT1mP4TaFSRnoGt5qja939Uq3TC6dEPRqdDM",
  "key10": "4qumUKLRDRi3DLmfQn5Z6PYVrkNfw6oWmHUq38kWTB41nYSHrACAEYktn8vQUm5d5f44VsgbiF6V1qJZDWh1vHZA",
  "key11": "zsr9XbXGHebGCJDESFbJwvLEzM76qfuiWGxjiEXRjVGWmy1n2hw994BMKFNgWyDA6G6Qt7qet7nRx1BuhMPjA1Y",
  "key12": "3kUc7hcGuEw1QEihBgm5wRyYMRqkbnx9qp2ubng82NjoXNnfsWe8zmKPdKx5ppYBceAD2yGrscguqK9snKeyCxic",
  "key13": "BpFSbA3bzPfySMG7bqg7rCK1t9BoFhwFgZd3G8HwE7iTB61E8Jcvoy8T3HjGpdYefbpEzGU2tiRvsNunR66iZQt",
  "key14": "bkTTjtF1GPG2ftTJiBmPxwuy4gNt3PpU4m1XrA7DBnhRQiaWdJGSsuavw8v3huCvC6sNEWZ3U6DRCf7xY8Mf1vw",
  "key15": "cLDYXMs5fyZJBMEvyKdAWHKRSRSRupGkKB9xzaaTAo9TSMVcGHQw2Cio1kBnir9zcxRwSarPa8HabAmCgRynJjF",
  "key16": "jKteMiQ4ucByUAn9Q83mGjAKjpmp8ktVJ1xhU4HBkGuUJvEqxgx9XnoiJQTF8wUspjvBXU47JX9cjukiCy4NLvR",
  "key17": "2uvAGqemH4CiTRMQ19aNfRSKvYemts6QDAy3vVSKsVxYTJM1rA8ynPS2v3SaWNVqwtGETExz2DtdU8cxtsRhmEmg",
  "key18": "znACfFuRMiYVBDwZRcUbsjA2EwWawtyuxYDMbjgARqstiyYvE3btYYcBi4DJwQkFu1qdXaq49BFX6mkJPc2fZ5h",
  "key19": "4RM1hqNsWhdUnP3J82j9E6KkwDFxgMFStzzMydDt4NJ6Y3FhpRjENthMHqyxXJtWtPXUxpoLW77oGz11DgKb949z",
  "key20": "3c8acM6SLpD1h2qhFURtJFKMhBnCdM3gB4XmTMs4nfGMQpVppibJ8PU6bWTbdjeUkuVhvvExicNUT7Y5Hp5GmdCu",
  "key21": "5TSwgmgCy7Rtb8VdtsRQ9x5RDdarqvhmuk6airtyHT5rQ6y7UkC2JTZTtvCzM3tQLo9mL3R7dDF7E92rKnC4LEVJ",
  "key22": "1VmnV69wtXp8k5WsbErqq2u4Lfh4F69nrkHgGvmbWssdS9mVe98UwKsS95DdCNernJzDwRzYRXq4q7i8ebx7W9Y",
  "key23": "2JwsAD2m3tCwJKEBmrMzjju9CivtPcEoJdx2Lawrr56XZXemWvh96M467h77dtETwTcPPrW3YRvomRhkoMCbScDd",
  "key24": "5dF8TWsXFLBapwqmZF1GBEjQHbYgH3QugahzzXqedKLdjeYXNQZHt7WywVYnGcEh5WRVM6E8K851X1waFUyZQWdL",
  "key25": "2qx7jGpbjMp9Wkxim6t41nvpFURNS6b4qRueehXSRqXUn7Mg1ZxEsDsDeSQbU26wDcNQuZC1wYNC3L242HyzxPPv"
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
