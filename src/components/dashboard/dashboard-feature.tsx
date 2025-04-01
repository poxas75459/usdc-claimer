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
    "4e6SMi6A9aEfG1SwLqZg1k3J8Dyi143HWJ3tVJXBxWBtYraXxrsyVxF5UYwh5rK96XANjfxq5VWVPvHE3BcrcCJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T4KxKensBLZjGftXwMytEo8kFwWMnSQConLsNWZKKYMXLqZ1MxhSZd7fFr14QwWwDjx2tsF6XithJy3Jgsp5Py4",
  "key1": "5mH6mh6ZqmvAce82SXXtf3iPTXBjLXg1z8RrdxWJSUERF1hxt4hBBHRmxk2seqM247ps6ZXZ27zjNm15XsJy3Nrf",
  "key2": "5NU8ykrLGyjzFjHTFNHR3rpGCEb8ydT7gEfko7JEYn8csB4A2w6gp9DB9hjagfsDL8enApuG5SLuVJzA33eFHz5V",
  "key3": "Fm3td884NYyg9XhC26kNP5Vn6toQtY5VWpU8NcMRLTBkyEpz3XHmCRXZqPCvMA3YQfoqXvbyNnnEJH8QRpSSXHG",
  "key4": "43M2ReKipAwbuccUmfj7sggbJp1oqpiVw9NxkxU6QsU3UxCtPAEvTujCxKUKVXZFoz79qRvCQiyJYdZf1pFJwFhk",
  "key5": "4ax1p5RFrqcrwbgQx1tD7wsoWcjzeTkBrRbSwkcmBbwhgD7CPm7MqWuLWcS7RhavRB74KRXAEEqUBoKWVjw7WM8v",
  "key6": "WyBGZPiJGtz44uJms8AWD6m8NFNnsB4uMEPG9NgYDcHyeiwmDq6wWZKeYd1XteFZxEfcnS7LxPT3GEQ3QmYDZ1x",
  "key7": "2UQMwBBTjhsaMtHQ6jn4uFXD46JG5NouYFTsgQcxqUj62qnknHmuJHoYUPrQewkuYKF7qCrxgtYXHjPFX52Q4wS",
  "key8": "3554a4vNSpvuFZYm59TuDZY6Aa1TQP4zDpvQYohDoMfvZKA6FxaZDauLq3dPsd88fszQ4dRqNSEXLKfhvuCRqd28",
  "key9": "4sjeRAc4j6EHARoCoBfj77qBaKUJWQ2qRJNVCyGYimVdM2tZXusxKsFW8YUxTNCXmKxB8aFz61YkmYuPeUvmoYks",
  "key10": "4UWgAYPhxUjDZESdJvu7tKv3uSVAQ5LCYbCkBmn15A8b17uJ48is12GnP7MfR3HDEV9V8E2exw3oYj2V6pdXTdRr",
  "key11": "xj2RD1KxPkZDdErbxxkHoNkJG9AB75oM9sRJXNtZ8WkdnsvvzfF7Sm6QbnQoqZLzvjbfeBxf1DtTfudjZAW36Rd",
  "key12": "T7S5X6PsRxGTp1PXnRDbJgRpsqkKibhobeS8rKLQREFttwdUXj71La2fMu9a6hp6ZgQ5hzPhDm2qCr5ZEjPfqLM",
  "key13": "9hSTYJECAjFnVwtasDsYPhwQVk178NxxGPg1HKPFXfx241pgh77YwAGoRW6KeiVVQfHnfywgZQ5RTkdzGEAgK7t",
  "key14": "4vwBqanibvMaEJNDD9hkyaQDfGRRMiWdbJUgGJfvr3DCeCjNd7MomoppizZ7V4YeNFio1UPnAQm16E3Da5hC9qzH",
  "key15": "4yuJNJtE8wfnEZ7SU4jqAmMmsD92ACbMhA3ebVi7GUxppaDKa3gXPKxW2D7oojyp4d3gURoEnxGH7Zc1iLvRUHaM",
  "key16": "3eRuHfbJ4g5ENXZMUajRNoxm1X2rCQUyyLRJxap3CutnQRdnGHCaKLuU2UR2ZX7P4VnNuGZttn4msaZN2xTLR2LV",
  "key17": "63CZwxgYcaqmFv6XYApoJNnaNkS8ThFtUgLxqFcpMyuSgj6NTifGoNC8LugGS4uGzSjAqMGp5Ru2W9hTHvvVkh93",
  "key18": "gQJ2fz9HGvMGZJpDPB8duidYHsN3jn3FiW73xwyTcVAqZx1hX37gSb43PXqhPvD6v7XjJqNJJyoSP1JSiLQi8GC",
  "key19": "5n41nbWEDJK8sK5VY97sxjHQxFKvCY86Zm7ckLiGok382TiDswoFak28zEs5bxytuvufH8vwk7na86AMenZYstbx",
  "key20": "xUHoQdefwyxnw4uC6aAkM4FQ9grQWr3ub6HC7HNhanG4i8XMKKtXZx346y7VTFwns2YrVDZe1FRKsL5FqUnpwAB",
  "key21": "3P422MdN9eWb1gkRyubmdaziwYM3cYtVW3T3qvrauVK8SsCZrkLvcnaghKFHwz6XeZuUfzufAryEuQjfQzEEnomV",
  "key22": "HvrugvjiMvBGFtZuBEiY2Aerf7xpmA1WzwD23y2B7pJzC5ujEmt4Vk2tJDRYhmwEK3FAkSej4r8WWcehG7dcCh5",
  "key23": "4qyMcwfTMoChuae9XCgoW9fR9xnFDz8SYcUChBF9xB5jL7Xu5QkCunEdzb4aJ59mZqNqXfmu1CF55BXtShDsrMQ1",
  "key24": "3fca7x1SXAjGuHtR4gbdAnhQsVfgciDBq41ZJiLttUS9PvPfi9L7bht3zuhcmjGdk9XGv9hB1ay6MaFrGhXqDs4c",
  "key25": "qY52p2y5WUKFLsHstGb5JnRMWnMV73DJbmYAnVyEVSAxBh2qWpvbUvJZss3MyxDx3swZUK3T3qRm171p1p9cnLL",
  "key26": "3oQKpzrAQVm5ApQxenV2rFmX6soB3F1eLLG74Nsnp7WindQrmreGXhWamEB8Qzcec4u9hEqkEmFNaTXLVjaTLT4v",
  "key27": "2FoFGtQNCRPbTuFeGsR4wMaSReeaQGPWiXUVkvNXG5edgjQf3AhQ4wgahoaWRVRe5Y1famJSsf7uPt17HYtX7j5w"
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
