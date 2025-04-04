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
    "GKjK7o2s2FR7QueQwjBg8DwWkMJYiWwb63di4pnrZYne3J9XUsKdMxpucngcjtJdNfyCBX4T4ZMyYHSVWgJDVif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FRYZ6MJewE5FMVQnKvyvx9ogQ59NPmtLtGJABpHaTtPc2pPKzer7sULscHqN83DntsBZLvoBJgU4ffubRjkGzXc",
  "key1": "4grZZ3RPQFhG1M3dUVRoBaFKwwrf8hshfhXRobkXxvkXwkD9GLbaeyyUkdh4mDJzWSQnAKeqdj5CPXJbJxPNAA59",
  "key2": "37iUvWKwMUnnQB3G9H8q4sBrPTjj2s7gxykPw7FyCGxKB2nKPfMXNUX8rTAgJ4t9aph9TCMroZ4X3XBPzeqhCbbs",
  "key3": "5fYxQDSSkMh3Lb8bic1savqRDyfNzHZA1p2JZYXDU62nWvt2qSkJoM9Vyiuo3W4erCNCSAoCLgibjgmThiFCJ8mQ",
  "key4": "4z9WPMQLMFF3kC3FKEBC4s3tVonN6N8ubjh3ayjjjCEhkhA8szCLxPRdfJaekhRURQxo92wt8xtQcidRvXq5i5i6",
  "key5": "L4AymNEGv1TEaoSb9WT2aWjd15LJKyhKNxPvz8i7DtKJ8qRUF8MMjEb89NRoFaauxyMdkCNNGVJc6E95C1Kndha",
  "key6": "7y4D97AM1q6WZM2cVc8nGo139BpgoT5yqFQmcvdHS7JYmGun4TKeJKpjaPhjtxYR3ojv6pcFW1ZHH1v1DdfjjJn",
  "key7": "2LsiN3MNdbkgzyu3tzyzXTqs9gRjpDWZguuhvo37Lt9jpPPZanUwrbjAfa9cZVZ3ju6ThrRNEn5SS5hsmautvVBu",
  "key8": "Cw8mUMqurV9ME6h1skahhPv6Vozz4KCr9Btt8tqBEHN2QYbhYoLaxKYLUWjvKX2Lodj7KcPYvJ7A6WPWDmdd2oP",
  "key9": "3MgMjdv14pRt15rZKWqsUDcf3AHJpBsnNzEWHwyTDWziqFPtWToGp8RH9d7J2ewq8FjhbSvFgePCm6fwh9rSRSET",
  "key10": "5pFE63mPKEvXiyLcC4hd6h5ACHtuFoComRwBWnA6EjsQYEwDepFPe1JeCfPebrnDzGNV3GiH1nt9RLFHudNPWkvm",
  "key11": "2pnPtpSqpARwYfMBLaBsTDwaYzNh6imtBTybE65HdNX32SSz5ceTh6gZCithgDYt5BjL4DBmYd2PA3R4G8uJAysm",
  "key12": "2KHJoHw4sed1nguQVDZooEMzxumRJdosqmZYk9neiE4KLrXPmjA6UoCDt8uLgxdcdCPwqg4QFDKCpGx8to4TRUao",
  "key13": "5i5Qf4BroRUvqWehNJGEiPjSjJgGhsBS3MnRFJrU38PEZfZVMXsHfSmBKZM7GL7rg3aRvyJLg9YNheVuNAFySvts",
  "key14": "261mavRLWPWinPLAjhtn9YunozHw2Sa4bVgUoGhZHcFvgBagmbDzF8qVximfmziJaG9zKgddVt1QYPzjC9PnxMMQ",
  "key15": "2LXV22X9KnR2YoPAtsqvbXA6W2RhBhx4ykZxoPsr3bVz2vPaL4CJ75bNz8UVvMWNrkNWUrTX6ibdhNRYa4mEvnjk",
  "key16": "3hHq75wrxzLM8616zLkQbnffVCFqHpxFxE1iLXCHnkxu1KNCXmX4KmgDxyUEWukf9VTSGygCRqEkV4BHJPgWmydh",
  "key17": "3ft7P7nqQgkDL4Z1WCZGbJrtQaaSqkBBkKorPT3EaMK8VJYSxr2cxmRio2DjQG6tZCAqxFA5g3LibMvHEP9CgMeh",
  "key18": "3CWt61x1BWu3Vv3BfU1BFN5DTUhSoXj8sXSUGGzmTzLqqaPk8tBo71BPB6Zv3t69C5sh2MT59y7BVrH7e4hUwefj",
  "key19": "3Sg2P6A2MS1djt3CtSusKqpgAzZeA8S7obKwgZNtgV7f7RgkaaySUCfJKfDznm4NDBXUSfukYjCzxYSNEekF8CrD",
  "key20": "iAozv8T6fFtMwp1VTTyoDzPpsad42A8dTggHTeJuP2RexmeAkGhxUovkC3JyrHZQi3kDpBC3of6qEWkRwCYvGK6",
  "key21": "36uUarWn7hbAXFuf1Q61Up3UibPRcpHLXDgENhsjj7D2PMvP9JFn82cHh53WCMPCFtp16icKtKasuX3LvSUqxGc8",
  "key22": "uL3JtPQhUQad11vyeKnUjFFsiwLb3FZWHQum24vcqjJJgByRRPTfMcEv1Wj1TFHhRRrr9foa4YGnRkYNCoCnKzU",
  "key23": "3xiPf63aTmA6f4YUATVLVf6ZRmCVnoF5ZCDDmroNG5TTMm7gmDerjmM8RWp7rSSZTtUutC5NUhVbpJXYUuBEtACs",
  "key24": "3FdFXaKEgUXaoig8krvpHRCmmxjZLtD3WSv6etZYFjoGtU3cwJqVJUaDDAe7iFVgMBN8yNKCa7CFUy3dXWVHp55f",
  "key25": "5KKUdBYkU3nsbFDaJBE3vM64D2h1tBjDGQP2zjPjo5YHaPTJEfFnedJWRikEksw9HKuS9H4heDktUP9ekTCDkPaX",
  "key26": "4h1XD8GDCB7RZ5jfNXdmo48XF2bx7bN2G1PxwUcbmW1bMsGV3LgAKy942E3UXHoEevRG3jGee4YX2kbhjwpbt1Ff",
  "key27": "2D8AyvgVFHZ32X2qYUYR4ndMCMYzhzRVJbVpMco5jFz7u9uqiPtgiWaufRVT5MzC7UPJYVPNXjvwpV6NsDZafX3f",
  "key28": "3BNJ7uWwAXESbSSZ3tqr2akB3GSTubQVCbnSw34tP6rSaFN8N9tgTnY8Ub5hcCfUAbz32QLxyU2jr1z5mWDamG7P"
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
