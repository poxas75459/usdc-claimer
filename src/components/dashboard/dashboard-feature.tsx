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
    "xnpwVyEpE8evpiTn7SnSteiuwQQhe6rHBWFsj3sjD6iABzFqU3Wh1usudBNrerrUCdATzgaepbrtnavABhaj5L2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n9WGZ2QQosTqFBQ9PWpCMm6xBgkC9Rzar3G9PHiNWGArUfZHEZUumHnJYXfXfwiPitPCwtNzmviU1KgDAqsGbXf",
  "key1": "3AQq6kCV2WQhW5xAZpW2a7yzWDZ3CDrM8nEmv5bAhemSFyQE4bxNnN2aCSx1ZtkH27niBUVqzA2zc53JQcrPiXmD",
  "key2": "2eSph81hXnfWf8JMDa3FjTWdK7aD3gnopFynHg3L797jqRrKztyFZ9GNH3Wbn5hp84ojXJpce9tDZHbZAm1pcsna",
  "key3": "5PRENdNCcYLDaManJJXAe5fKgvcuKNFQhmbccqDrVioSBHfumRG2p47qtsRbavWD2Y9LUQgAmx2MzdFejhCGRtfN",
  "key4": "41u4jBRwAPZPS4ii5fpaR2uu7N279XVtARbWADsqHw6fccYnw2iuoFYYh3ZKkudwz2sB3XHx7ZNWvAzuZF9ky7DV",
  "key5": "66BGQo1hz5BmKQp2frDJRW4xobWRuwLaoRkc4YkGUBNsCUECqGFpn3tb3bmQB6n3djoSGkB1LN7XA5p5koanUcwu",
  "key6": "3sKtQKCQdrXCwjzEtFq6XVevtMDqQbrcgxpPbxaXGtFSj8dRs14LiX2baKXzx4hyyoCfVCV5axYpXJHuNU4oGna7",
  "key7": "2XJCwp64DQPSHFMLySJ8v7PqemfTm4jWY6ypVNKUWU8Yugypvb9rUjVEb6vMPJdmicseBggcpUVubuVRj5asdyKX",
  "key8": "4Gp16EuKgZ6h84LDUmswDGbo11mR7W21vNKnawVrNjHrx7yRVp5ZmQb3RDRqLAvoyx4Rgb3Tdv1suvEy1YFZMsTs",
  "key9": "5Et1cwM2zUhvFjLQof4CnjWDRD6qUX3i5tsPiMR4QFxn5EFL97rLUG7QZDqXNgHgJW83BRzFrET3JQS772jt9J3h",
  "key10": "2RuYj92MC2pDJsoV5cSbm5L9tnAx4Rrq76T1Kfn64RyHgVQW3YgqPxsSUxGEk7WmsXDMNXTBmxtRXVJBo1zkcoi6",
  "key11": "5SZHbHqCvwHt7HzWPq9WRMZTqQPUZMmBTs6mLpzHNHVsNstChhGW8TsBFfMAPm9Ky1Kw8b4oJ52RmLkko1akUm2K",
  "key12": "5iRctjchSkifu6iGo7opzNiyb56aJ5piFvqJ4FfwqT2xy1Ngn6HPShsua4ShmgBPGtQFt78wY6QRoxgtwgWQugN1",
  "key13": "78HaSJWaTMadxraZNRs91LeSf5nWkNKsEkT5SkppSB9uzjH4okHPq5Q75h7eSQ7v1ZTEvy9EvnaCrBYF4TaRx8H",
  "key14": "5YsWe8cdF1cJmDjD6tHUQfatKFdeJi7tme9usQJ1veN8zaXFsQSDvUdRjbKCCJ9JXL8mqXkVwXD23mMfR7DHjbdU",
  "key15": "gfVYpWoEs2sDJMe2fx8Rr9oD3Y35YU18Ky3kXbqrg9p5qLp79nJFZiVtX8nhw9z3qc8b18jUtcYrExqpoGPzBex",
  "key16": "4xfasBVPzsE7xrWpYWAjgt5FhmC3Vm8tfWajrX2z6xcQbZBfiBFa76MFQQwo9hCYNQYTdQauPw83AFuurnYEhqmS",
  "key17": "3gWP6svzKz82vHYjCpPBjoN8jp8WPNYgw83vnL6rQE3y3y4RjMxSjoLK2gY6XdzEZse1u7u1GyKcos8fEZJTEBYz",
  "key18": "37mBmbc5k6KSDjVDohAk449qZgEr9qNQJvz8gfx9SpcWCZqezJjHVzeCyT3kwLd5Jh4HoymnXX7RrbrwsMswGSYv",
  "key19": "VMRpiLXPsVHXFrLdGYoCPCHQ1tkgfU7zc9pBLtwEU2isdMzyCYtksh357nVKDA9JG1zJmcwmwQxG15KD68DEebk",
  "key20": "3VteckHQ12PdUQAWK3Lofrydcxhnfpbfjar3zhfiLtVQ7RnqkmPBJZTiK8hmTHd3YwgFKaYLF89UTj6LoTcvBfGd",
  "key21": "4pFaNnrtRu3YVtHy2zk8GaBNwLPZ52sjNWyawEaB9rMJwpL6gWmmzTZ6bYn8AsYVMUYqLz3uUTj5jCA8eu85adj",
  "key22": "2fqaHKnZQVh1NrXsMG9MAKe9eu17efNXZ1HCbeakzf5buFXJfWonnX9di2X3K8Zqup8HggksxzTwpdYDkLrM296K",
  "key23": "3qCidT6sCXBeEXBptpcH7zpginjhCamrSYGHBvB1gP8Hia6NCPDasQ6HTYZLBmjLqFB5AaobHspaWzcvK5khYXDE",
  "key24": "5PcDKwefyoQ768aGwvjPVZBPNUTvF2ws1hjTJUEp2YTq4RpGsD9FexmR6fCtNEHas6gRfNcD6eWsBmDm1z8y3d4W",
  "key25": "55zgtiRVoKj5ZPRXaMSgqnYR7czcevTeSiWAraNpkgWWpKWEwp2hgApgUrXgWnpZpgDai99bZLPt6jrJvLnNcrJH",
  "key26": "2SVepgNkmbbV6m1BJ7Qx7Tr5XKgTdKKmM354FW5hDZhQz68ADGuWRFhXrWRkeGUefXMLoZtVyXZBCpxUETfcsEbr",
  "key27": "4m3PHJYw8qkBw3vz2GqsNNe1LczM5aNz1i6idwWUSw9Hj9FdsnyUi5sKY4gMJqAfvRTM9Av2j61ehkfNWXh56FwM",
  "key28": "5oc2mmtfGta98HkeMsYaaqPw3CFaeMyRHVm16FCXAipdxyV7YU4f7Gt3CKu8rx8MEYxEoVAodWbYF9Z6DrKaPLDh",
  "key29": "3AFFnT81JReiPiHuuoiWsM1TunwiTHAGSe7rozufDGhCqKMsfyNaxuEiQ5ycFsyXcATbNQ4vYt5FXLA1n9qPfxkn",
  "key30": "aPevQVZ7BRJAx9LVtnqvDHViLPshqkYY1ZoLUu5LLdKjoQ3GGdzWPEwXvcDg4ZjvLUFAuUC2jtTjgZu39rBevVJ"
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
