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
    "4WziRpmfX3Uo1D5pAPmvn4HZkNgZZSnrYYEuBQjpo7ZcANjvawdSoqFRGqN2uawUZgWVU5YHwkGcUGKNUB4r8hU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FGDfgbQiPzTS7hWhigAg9K2qaxDJ7KhXSjdz3qzr1ybmJ8Eo4rLiHM83z714n5HkBoisS3rq1Ka9t3q1XyaWHwF",
  "key1": "28EBEfpX5Acdy1oLTipK9kkaPxcGjR85GE4UybvT16CG6HgCnX5qz5KUtx3pbsN4CegBK2oDtvUBLWfP4QCijbwn",
  "key2": "76b2FUmUY6ndfhLjNKgaUHm65sPGfAK7CuY2WEF5QGFuStwKPbpgzaowUSmMn35En6MYcoTH9nhpu5Lxf7KYQyD",
  "key3": "bycwyhkhLzVRo7uVjLHNaqrhqiJkUJuGZD9oj68NsU5F8ReDEvvpZUP9mWdaH2Xw2z3fzuxG2g2ysoquk12Am82",
  "key4": "vxao2ozYZA7Nbbm2n4TZ1t9JZN6m7epfkMU4zjCkrFMxcSDL6ixema4DtP2xjnekgZaodwT7EW2ZVr5CDZmbYbE",
  "key5": "UQ8quPaqymVVL2wYnWv7J4FxiHWQdPUnJx5HeiVZYvUsZEA4UeJMZFkNdKzR6onXe9N9tUbPj4J5qoPSFq59cvJ",
  "key6": "2cFRdbQytL5tarCThWNBCvPwY5MtMUVQSdtM6Fi8tZZGnNyZ1GVnL6soPA5MbHxLpCzuwir8iHSEA18aRK9w3BgN",
  "key7": "5FiA5383v5vTC6bRpx31gQBMaXUWkT7D8qTtwBzgzjjYPthUePRXakJHubkFf7VuRLn616tpYuLUymhPMzN49rqn",
  "key8": "2aCSQLjRTB6AXDjx1fMxQHPRpDR7foowYNGzZUyu5wV4cYpeHy418UC2hKyjEBTL4aQ5bA15K3zsWYmKyq27xEpc",
  "key9": "4Yh5YJf51Df6sBx1wbSVezr5Ji7XYUVtN3ZyE9EnzSkmpNtdQAbeyszkxuXarcubtu84UYjmvACZhT1z6jRjff6h",
  "key10": "5SgCFvG75d8CaiNbwtbDGGx4eVo7hdqx3ffN3qbGgqNmahQBeUqU8ucmZ7N6CWU4ZBR8XYomyhzoxHt7nc1pddRD",
  "key11": "W7rr5n7k5SZvEExu7A7ke1nWKkGgYoBY4GRiQfeeoB3cjV2kPidpWnuuq5vtLJakHE4fL58onCkX7ZPnQv8SV3q",
  "key12": "2nxp5VqSTTv2qQUJcoiNMCGV9c7t5FVJrJLdc27qk8atMESXU8SyrMh2vZavPFneBXysS9nQSJpHyCRr7qdWjtg5",
  "key13": "5PQ6fhR8zHcfw8ma5xVbxgvR8hbgwtD4yjHgmHi4iMXhy2JQhnE9Dn3u26r7zZko6W1P4SWB39Sg8PwjhDrZsCag",
  "key14": "3dM1shzaagpiJheuzo6XnUCsK2AWhRbmY6SeZhZ4E5HPGvi9K7BDiGowsL4T4kfgX34QTezFiEvmHsgwHqo1r8oS",
  "key15": "2tLfXdZsWUsENnpDSjYiFBBhzQgYHc1fH7McUTxivpj7gGtFaGk9Xr2KiFcfvgWz958zSKRgauvLXN24d3XPPsE7",
  "key16": "5bomSj2qLWMg3Cz7csVDhBxa3HrjBSGdaYNQYY75hz5stdwq6bZoRHEF6CGtc2F45GRUAUyVp8i7oJWZLhghyUtF",
  "key17": "yayh7A3rMJgcucYX6nWPoWiYK6JJCJ37EvDWwe3DPRj6eKpswof11km36g2d3vH56dRowXYnczdgNmgDUymEjPj",
  "key18": "daMGGMuN9eaNpBJcjFtvJwrjWzvPzNH9QWGDpSKEqY4n5GtLuacw1LRijU1qrmn4FUgq5TRWbifGpxV5U2JrPcy",
  "key19": "426ceW4cgKMAyJfTLNLaCr5vnDCL7ruHBEbd8Y9q42644tHyVsdTLcNo5uMoFzvyd6sdWKgCgdj3EG8RVVt7jgKo",
  "key20": "zzupurR1LhD4EE4tVDr7s4sEAr4gjHr42FEqcFvBtyUEXQDLdx9u5THYVuJJVpEUNTUSt8FD44viot4PfJfxyPD",
  "key21": "2nMeNzKE2AZfjFt5yKJtNP8BUogKyZrpRS6mW3sjwCnnkMDVnbGC5R4u4WkHeoeXFfscZqBfqtfWdtSMgPWe1fjW",
  "key22": "3GKr991LPzNh7CbVkNNKube4tBtxpkzhdmpUTFcoVnCk8pS1kHWdKnM6Z24esU3MfGxUPDWZrH7nA4vCM6nRk9J2",
  "key23": "3CqGZBdMCsKRii9pqBx2NEeJyHuy6sjuR6zQL71kMi3cS1YHmVtcFp8HKrzH1wcBsrVTpRcCLFbiNEnbrT8RHgDq",
  "key24": "4tfSJamxPSUtuRcNDSwbtD4xYUkC1fRi7PjfHNHCMwZvHDPjgboeNE8ns9QagnFNKEupnFyiCYNbGTRLbyuBoj8x",
  "key25": "3CV2VzqpsteLzSxR8QMVyWW2W94FwVCNyPpHT1b3fpz9huv3rPNebB1Qu8eLnh2kMbRz6iBwGRniFima6twBLNni",
  "key26": "2zf71CFJJNQbPKwkntokxn3pquPxFyMaDiAWo1Gh2GXDz8ncBCerCGJoftX57n9nqzXntM31Uxf1pU13Q31SSPwM",
  "key27": "5EdgnLGAbx99iLgfQrwbDQr9FsisNufehBNktitPtsKafQVWUydaYsJem2i8VLYjXUtrVQT3upUFbtiSCLb8Yc4z"
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
