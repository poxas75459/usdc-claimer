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
    "3UfHyySEkaLK4ehuwkxeGtVs8T2AJ2zj81GETQ4Mb61xoaaaYvEU7pHAsNk783Bi2DiDZec2zqgAg4ikMVJHUy9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5egMwA7Tx4fyf11Rucqg1RBjc6QSsLbXQb38zcrho5VSzVP7qGK21qJFyC6rvbdrHDJ5rRe5DukfCWLCiow6dyCj",
  "key1": "4Vy3QmMVsrMnuax2ytfffkrHYCou9zWXwYaTsSvZq5QBANcFZ9ypt8UteZheHTtziGy3f1oWgTaa7p9KhRLPYumJ",
  "key2": "2pHR8Jb4dNSa2Sk1LntmGm9AHRQuVX3hz9g5TgVLCU7p1SXbwUHWRA4eNfRVvB9QaegepLtMV9xtKn2EQ27UHd1K",
  "key3": "4ovMSwUbnfi82sGecZxju1fQkgVjdQLH1imH8Z2QbiLjuZVoDxHh6qriSzNKJuM8U9wmPcAQKr2vkivE5Xgq89eX",
  "key4": "f9vLfZUSgPVnyd7Ce44DUNqMaFDfs8ksKkHwM5zT1KFkcc292uhb1WDTe2kirxgojEG41E59ALaTWPWeX6xj3H6",
  "key5": "3swhYiZbsqXzG8BB4dQMJSQ2YqdtjAKZ8qNHQuK3Rsc7DWbu4edQ7A4CnzpujbuB9Bzr9aCrn6diepmZCxcweaat",
  "key6": "4T71YHbLeeBEif4eeA2op5RL1cc6z9we38LPpJeSz1V7qTkWM5k4g3WsmjXDyVCu1tg1i2vdWNVoadJTf8hp9APf",
  "key7": "3wrK3nFpwZtxTe79sygqLs8jM1Wo24JXXyyVAbQK7y3gTeiUc5FYW54XrfsBmwWJT4wfXKw7XbAwhtwTQGJtAeiq",
  "key8": "k8ChK9fLdyctXijkfEFzjLz4tgwdLdLN6KH5jthfieURJiwZrn827MTA4rpXjLityHxxU4j9TgLCHC61K83xRk2",
  "key9": "28oBPXzQYyfYzJr1m3Pnbf7wFDgGPC4zQw4BeN5oGrdFhkVhbUJcpiNWCXnY49EA1Qd8oa3XzyZ3qyjBSrz1fA3J",
  "key10": "2YCQphHTxpQeHJ2YhBPQ3VVcDW9n1Lvrqhu3gBcRrteiWCYhWCsY738WsSxvZfekicnSz8YVDWMCoragiwkHo25n",
  "key11": "4HLxzJFqDFjrWSNMMw6qUS9nAh1bpNKe5kU1ZZmNVAAunX1KKhX7kvY4dVR2RBHmkLWY3XqKbr4YnGy6TjCRkqpV",
  "key12": "2cFc5a6b354TKtxFBSRPLh7sTtGy5FfQ8sQsTikcf2vKgYcqSzv9M7ry78RSjhiPYt8dn8cMfthjCvwomrEQjMGz",
  "key13": "4kSAsJ1rBkZbPq17srjJPz3Z7JUxoivzRDDXZ5NXmpQcBBsiixSh2GZW1DHDSN2txCtuTjcB1Hv1aZgeGF3J1MwW",
  "key14": "3yaBdPFRACfUxooJtZBioWF4BdDPXLk8xb4mANKXXbZLCJvi2DnhdyYAtioMXCh4RGwyjgLB6Nbzg8MqUL5bDf6Q",
  "key15": "5mfcFUHJ6eTPrZt2iEiS4q3BAPyHxTzwnfBvmSJaeQgxcX8x9QXkqqto9vH6wADqkEc9SM19UKwYAbvbnk2AeW7F",
  "key16": "5yraLQnyvbbpdYRdT2JiWHeCtHzu9gyS1vi2EwPiSGHWShPvan5mqhjwKB2BYKgGYJg3KXQFA5oheDVJnjbwzmM6",
  "key17": "3C1nEnGQa1kyCX2dow5fpCtxzxMjVjRCCxwdpmfB95YNpbpJnWnKJoPzkZTjFsW5pGjAw9N1dB7rH5MJ2JwGi94o",
  "key18": "3pojQFxyUBqM4pu6BU4arWtamcqwgCpWAefu5MFx6S77UpLLLXJncRN7fxgNGuf7kpN1AstTg41qAC3AK8P2GQ6X",
  "key19": "4Tx7bJP5wEV5Ym931pzhUqtprKgfpiW3hrGe1UM4W6rGq8UhFHXsctZJ4WLc9hfuterZed68wBQAKdzHU1JTdq8s",
  "key20": "52JP434YpANV42zZUFAcjm517qHtAdGAuC9LC8c4zjvRr8ZVX9S1WAziU7DJbMXgMKKGYQdS5Nt3zbj7b5fW5YNQ",
  "key21": "okimYPNZcNhuiZVkxBo78Pp2gfK9gwQDSr3dG8i1uapquGbMfkU6iANPU56R3TBMa1bArqyGQc52KwtoHDFSpTK",
  "key22": "2fe38xrhFn7TLXkyJMtR2bdEt5qyRdQkmqHsQRT1QC8kd2JEtfZ5tBUQxoatqzVGD1mqK2TfNg5veqs7BBpEwU3n",
  "key23": "3XRLvQzSnF8pZ2CGyGt7xR2avoRWStreD4ANZ3JQqir6Toazhko4g7Kj4ka82gSSeP94uGbEE2bV1KKn8yoxKV18",
  "key24": "28BDjaFppWyHJ69j5RvJXDLskUc1rRRR1qBF1ssSRLRVhydp6oo6jLrMKRHp5dE9rWmqZ2awKQze9NcgzLA7au5W"
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
