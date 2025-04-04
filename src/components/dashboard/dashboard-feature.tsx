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
    "4UtmNY4x18AaCsfjSbKWGZ8bUpvsoZfYUEt4P2ND1pVKAVJhh2atMHGEK3inPSqE2iEtwGD2erttXY5qrsknkMth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ERBquuTJDNrMfb3CH7xkYX9eYfojeCDkL2W2VbRguMSu13gPUXwsRQV45VLZRVLA1XoZGUBr8xmBxH89uGujYNU",
  "key1": "5HP11A1rLSDv5NEALspbPVQQVvMVJ3KejCqVBQvzViVqGXfPLJYakiwGvgc7Udh3aVJrcQiJvkh4fchcEWqm8dSM",
  "key2": "QydymsFFgNDNHpxJVabvGfikh2oe3XS3EN3WyRhy4Ne2kqo5hvEBxVGGFPoJMuoxcGNY1jS4byCaYj6S1Ts3fKS",
  "key3": "4xZtWWf9JNbjHNg2Vswfgx9sFh2LjyTGq6ZjShUxHenE3UxfQJiBR93pTygPQQXoUhRsHnkbJyvbuhw3aj7mwLDv",
  "key4": "56SBPF3QBGRezcNsdAashVCHpZLLxyK5F1jzcDAmT9jFgN4Z4X59eHgd6bUH8S6bYAztoa1xyNQdw8nyZMAVq1UA",
  "key5": "xMFjiGrdXj1EUDiEsXJjJA8toAD3FKT1ij7cc4sxrCWn6ebcp8dF8qzeUP4ttDYyr6xyJzgdPQR9zaFE3TDxBFm",
  "key6": "58yihKmEd2qA6HGckXPyXVT2BuS7ChyXnSRdivP7wQqiqSgxU7fhEYkKEA1w4ChhQcGb4d96dc7EmmUgRbeQEVUU",
  "key7": "uWSuwLgwoM3YRt7S3yWPU39esTNHwA8kfpnirgpownVTqgzewLijddEfF58Ef2Tv1tNCDb58LtPPihQLu79wJWK",
  "key8": "8GvwyMWE97LDZyhDwPrwsh7DQ7TMPSoqdNd2hv877TfZ72Fc2QwAuthZdJUU6uh3wy6z9rHRiNDpVjPyTefe8PD",
  "key9": "hs5isnN75WjBHyXSVkM51nQFcJ8emNVNRiQUEfgJXVRNMw8U5gaZmw16pahgVM1XFWRuRMq5Yi7GTcEarB5qdq1",
  "key10": "57ZunausmJRZiWvMnqZbYP2Yon6wHTWL8zribR3XtxoZG73FHaqpSQuJExiYfwDaBSFAAeeev9NdyWAPjaxQkbBC",
  "key11": "2HBRSeQkZZQKkuDr129uS3cJM2Q23ecGKKbUk3X8HeWZbN3ocPpDLW88o8HgUm2YStKCSXB8pCrYxzZt2pbdw5wv",
  "key12": "34AqD1f4KUE8Fqqo6spRVRJyK9MqRR8smZn9tPPPgx5JdRs35yyKkBypcsU771zxCG17VW2eXgFahbtzxxFsEmxA",
  "key13": "3eU1tuSg7NDAbMnGZJHo5Gnx6RpvtcW9pKoquFYKve9QdtSbAbch9QR64Z31pnggJErMFUjDLevhxB9F4ZUatsEb",
  "key14": "2eTDZ64YvzV9Q2Xx9wXmotB2uT836fsqV6KSezWqSU4Brh8J6uza4kRfMZdRaUiNa33XnVsaF4mURbQ7rnhapLuJ",
  "key15": "5Vx8ZWkRQ5QFWx1bNDmAj9zkcTWtSCMdMHiJsWpw2B2Pmfq3bfUDnQgodh9Gqt4RiLUJHthgBtHwxpoKvXg1fawe",
  "key16": "f1vZqqjpBvzUWFPfMCrq2qXZTAyjZEz4tsP2zJ9wDSWzuZpXFt6kcc6jZeV3VsVGdJEWgkwip9mJSBBk6nA1STf",
  "key17": "2DNoTkiJCb7qLGH2mU4pC47QxADrugM3Y4bCpENzPSo68caD2XkTYCXcfPBCVUXE6mpWiuSotPyryh8sB3MEGqkg",
  "key18": "QSA6Z6ZmbePu4xDQjUnMNnfTr4KjtriusnbQzLUAsTbt63E5fTgkhE1M1peK8iVmhR5UrfZ4MiULfjXCvPV85bc",
  "key19": "3uZ1Fvgo2FxmqAvQpZcJb1N9Px2V3Tj3ED3sQVXzw8iiys6Ud4qXqCnzr4U57Q8EjivG4qt5V5mntMy8vzTYubpL",
  "key20": "nqpUtEK4zx8YDz2ZEKhZVQxNwBuVavBSp1cqRDgayryNkJQCoaNKszAdue8WZ5m2TbqvvhJMYkXxtPkuMgtDzxj",
  "key21": "4n87b4eUF3ZVmvejLeAVsVNVkBfQbH9Moa1n1ji8k5bCzPaWs4YCd44Xs3MREqUj4a76V4i3SzvFztVQdmmLEgLS",
  "key22": "3jbwChneA2rgD37ahV6ycwDKn3U6d9fRSqP2T4zZdWhMAA9WqHPGhqH5GHUk4iokWrDNVVW6t5xeEoLNKpHgJGAQ",
  "key23": "4xu2wgyGWjw8EEMGjs5an6zKfm5TvKtuU55CW7BsQpXQe8pYQHmwB2q3BvSJt6Q88W9jmDhyqXjG7skyuo8C129g",
  "key24": "29ziBHAwsmooUhHUDLi98dP8KCXse2WV9CYGWY8uQUY1oPV4KhEqsJKobTVvayZKE2ToruqxJZvZfkeGzF9BMqpA"
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
