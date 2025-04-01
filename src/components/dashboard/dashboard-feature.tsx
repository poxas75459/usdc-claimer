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
    "4uaSydH38dJC937DXqi4fvBudjkEAT8Jhzk7LFyN36q2U14uHBxiSuWNDFEMVfKZ9Bq97RWaDKy4S8oxfbMweQWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AnnbvY9cJrxh4YSAjkg97gooy5behCJbkMYnZqXRxBrduubua9d8qd4ZQTxZ2xZxFAhwhbRvJBie7KWejQgJx3T",
  "key1": "2985n8waZszJWL5d1okNFVyYM2FS3oZysFnUBGYAWRoGjsdqCMfNiFcvAahRTBXm2QBYD2PZE8gr9GdKtmDvRmdK",
  "key2": "5RSjk5Cj9kMwM66CAUn3p4kp92rS5DTCWsuq3tiyLKZprwFfin2c5hcdoZZeGeKKGntdovhUyJ9iPuChDZ5Nju1r",
  "key3": "2w3Vq9PnBhTuooTAzMgjRC2mqqTW73E43Rr8U9MTxUMPdV3SjHTJAhvoQkPFw7sGfnatFqUp2mZjyUFUUiwjXKqs",
  "key4": "2H1i3QGe1tRuYsg6LBLQjLrWU2pt9dKVnTNrWFzDsKKnaG6YnZvRDBUASKVgrcVTQe7dcmVEVuk4YMBawCd63DUc",
  "key5": "2VebKVgkgWBDsZh63c19ik6b4adGMLQfptfMDRoMNAxVpDb8iZJwmmjVsseS2u7EzzsMD9sDBtzDxQwN845YrrVR",
  "key6": "5XPZSTaFCuoiiyMNCASCA5FdAEmYmjjWMoedsmJx5xJiqLBiB1LR5viWMdvMgFUijd6Gq4oy2sdKmcqTT5sHC1Wx",
  "key7": "4RaMLPVp1y9SBX9zTMMRV1o7PACwSrgLi1fs4ATFHeVqDLZdWA9LurfZh8fXpbhALrJqdaEGbtmERp4jgrebbbvQ",
  "key8": "G8ZNikUP8kWsEW66BGMjdTGqFG178vMnbjmCssrf74tNukVFfKeVc37Z5iVK7HaiZnX22z4HYAFbFYUj4o1tSGp",
  "key9": "5Qph66hhQfNd7FviN4771oJTBLSTPrCXY4VCpXwT3tzqq3XdByYyUYn78qtRxGRoaZF1pLYFpRTM75KGQSUQ6tkL",
  "key10": "Fc5yeqJboJEXCCQGYSqhbAWA5vFWH6fiDVEBEC4b8yCqLfSqg4v99SeiCUrkiRb7fyfwFggDZWhNhcmhqv65dQx",
  "key11": "2KcCXuQVZxYYmHc731wnmyDocmGb37jNhBBddfsEzsbzhEojaV7Bhr3kCkCSavxVyw6hBFZHe9xRTwTW5UigedBH",
  "key12": "5PYZc9Yyyf6in2ad5rfsHtFV6AHC6NuV1nxRRxfPAUemF2VP25RCfYKK3svysmRz1zWjbhBvkB67KJn492MomjJz",
  "key13": "33JFs5Bv8BxWUzYvnGZhkn4PzNb8PHG7NuUMqxXUPjaUQQ5AFjbm2ujAEuFZqD6mtp3btr23zLZPZSdkrzJvURrN",
  "key14": "3WnVBqcSZQVUsxtEQ9s1Jckkpm2xhgEVu3W9i6PgXGyekuBgR2WNkdqezEXSBM4k2L3Tmpsa2Ct31JGsm1CzmKpf",
  "key15": "2xnaxdXBFsvvdkYYRXXQZreML9Z5NjPwhVcyigUeDXK3tPcP4dp3GDNSQSgN6Ym63K3rKYUKmzosdHiJ5z1Unhk9",
  "key16": "2WVpEBhKE6WFXyv1txE359KrnxNvJCCk3dmEPSxL2WbsQFe4Gdh59dYTAST8agYrktbkPffxuHj5JCZQVf3EfReu",
  "key17": "2V3QSLgv4xoH2dzB6prK2MYN1XMFUP4rGFdDCW4suD6w1LpJwpgYuFMmsVkcRkUndmsNKFvro7GHqK11RHjJ1E5k",
  "key18": "3WyGkeqM6EQ8D7MswRnhmoXssPaKUG6VCcxWWwrpiFoJBDbGZA6Wk7EZ1aE7MNhMuB7t5zTC9s9CB1ntndKgUg3k",
  "key19": "W3nwzfCrmcEch8QmEsBqJGV4GVuhBSrBRjYSW8pBg8ExXDAcDQBFoPYMahwKjT4UQwUnNxmyZWMq1q59T4NyEwF",
  "key20": "3txT8xCvzZBopdzeLzWRMR45GCpC1TJKxvRbTUUJWnLNAD9hYoumKfJSQ5sppGjzkZsJSr9fC6KVwXU1sTjFMoAP",
  "key21": "2DnspfRjnTneys2qUaUtnprtT1YJnunC5FLxwWzGvspdUz2SE7aSpmhp31cFQejr7FJn2hriLe2ACsqest1G5jjx",
  "key22": "2gHMYHZDc9yDhicxh3KqGfSxtf5q5L63ZR3WftDgUfqhfdcHwtrgyiX9z3DHyGTqunMTGh7Z1YPCRReFGrhEBAsv",
  "key23": "Q6SG7fMfbwLH6gGQ7hj1HSpDrLD9ZCUpZ6fn6jgFeSgfVdi8ZdBcfeiaoqb3cgHDkhsBv3NcUYCwkUoVyLtnprk",
  "key24": "319V7kZLqcS3wcqmr4mc8riyNtSuFhuhJQjEazAJ5P7TX4atDn3hm9BvqyturAQ2cB1JJwFDLestukp2LjcA59jq",
  "key25": "2v5UC8qNUDP6gubeWk2LSVWSog3ERfjuBr5yE3VPX8wGbiX6kdahBvsLeNbfwss6NJLMS4KWsj6dsK8GmtUueCVH",
  "key26": "2hmG95hozAkgwdPJiMrM1iiuyU9CydqP3gUWfXHzrHbKakc8VYNED4f7jp7PBMnFAMoRWAGFrvrbsEXGDy6W1oNb",
  "key27": "a66BNyYXdHGvDpdEBKcH9izUeBeZCnP5eZENMEsH1TVvc6iovUcV1cS3T9b1vm2Z12dFn8WRi7EXVNZXmUyykuf"
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
