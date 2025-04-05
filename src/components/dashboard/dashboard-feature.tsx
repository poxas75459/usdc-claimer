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
    "57zcX6GRdWG7EW98M48ZWYtejxUNeGgAyhqQQHdhs9D5pgU1ug7bASgUuaKy1CydnnbqqGktkhNVfhYoi2KzrFCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EAL4gkpA2BtjWqMCU6U1U8yquNoPMt36UUebrG6zF6o3uQJncjvQokrkchkHpNeNNuemDQxP47ULrn95hnUszYf",
  "key1": "57YP8ECfjVpWTScoKKrQKinzhFpCUyK7Pt4uLbL54FBS363RHCZz293aTkU5HhrUeaKEn7KoLjs5J45B12oHTUrA",
  "key2": "5AvtkqHwCAfEzvzn24zZM579Ju2Uy6Y2cT8ya3SfEvNN87VTmrM6geAjf2ZhsCz55TyiGUM7gXkyiWR5PxpXwJHD",
  "key3": "2rQt1s54bq9o3zCDJTQ3xJm3A4wSZUYxyL7PXsdyLB3fZC5YL6UuDcNyruHboxBk3gzpMghdev8CJVvmReiUkbdY",
  "key4": "2QteCvpm92Urtw8XSXweQKU23xAneYFniWz27ChM4RcD9JteAYMmDhqJExLnjxEz3C7T1mo2VsqPVHfResXKHZDp",
  "key5": "63viPG2k2c7tZAeYyqzLVj4Sv5WfmUnavoXmm2JJ3Dh7aUsELEZ1R8yh1AnRSENuZaTZscqAScJM3bageMCj8qkM",
  "key6": "va5vyM5Wr5e6oJoZgCUDeb9m2X6GRvcfqW34ws7EDhraMqD7FM8aNdG9sYHEPQo6QFR3JzMH2hnEiLhbq1jadXT",
  "key7": "5mpzy23xyUM263unDNtCLuu9mo7bhqqJ2uWdkBNbq4ywg18uf9Rc7BuDqbSrhozMXLrWHCxkCTMaSrAdPZ9etQSF",
  "key8": "54BxwvPpbrg3doa5oCkXjYVaRWBvReqMzex8DGETYGLuYNeer7EWSWnSDna2oMbCynPWBNq7oPMVFBQZsxr1BoMM",
  "key9": "2Mmj5KUAk7RCbRVZS81RaFWZxF3kknQiEFeruYWhi4AiaQ3hHF679quvw9RAL5Any1hFX3sisMVAUxvmdwhREdW6",
  "key10": "4Q6SQsdDwkfdq2v54ys4Q7D1cR638ZtihHXQBmbQ43Si4kr9mH6cMTziFvak6mWLSYmZ56GMKqwbVuqPzFCw24sF",
  "key11": "3SztV7YNbe2yJuUimaEw9DiXJH23a1JUzfnZxtpjNpH9GFhSCCaqKzqGgPSL7Vaxq8eSBRmg2bf5Gp18i3o7BT7v",
  "key12": "33bsvgME6hU2zTeJB71ZWAtDrLcJdLKdrhogWyKxe8NLBn9yy5hnS9Lo3rBAEauntbcLZTKrN2qHNeY3e8bGguS8",
  "key13": "n4qeDA7A3X64WDUC24LEPFP2Em8u2xEZLKQugnroVnpBzN9kthnkLgmpz5NjgY128ZTfQVszn1iDcBpFdDX8MNv",
  "key14": "5SCy5qHviW4aHxNdipLtxTrKbaeLGXggvchJvHWzSLzkJjFVoSSBY1oL9PzMU5Wd81uXujKU52pBx1KpK5MT2s4b",
  "key15": "4mNEjcVcnRFi3oK1qu8fkZQEobnLf1HpgC8LyK1UUkrtDPrsVAaTtpb6PJtxbFVWMJrnA2qz7gTFkBCDiGTpdP3q",
  "key16": "4YxrMM7djRSz1MsVjLfrvD6jnBdZjPtpAVx6gKmQMii2YwKzreqMnb9u8mpArw8Eay4NXYLF71GZpGPYsHnfDMPE",
  "key17": "H9o42TM362a35LANRwLqw8e51Xe6zNQQgfTwV1g1vYhuqCTQwWky4BuYeu2vAdMoADD7vBeNuhBnFR2PbtRMgEW",
  "key18": "9wLMCo1MyfyuEJijk3eejdBXjYyD4U8n4hqEk8V39FXY42XcZTAUFDWUioJ5Wb9twbA4D3PnUTUfiLMVsznDFRv",
  "key19": "52tJZ2kg1B52sLPArYSofut7KeyUJ7Lepc5wmBRkp1LUbe1RQteTCJBZow4RotCae2T7QCEcNmgYKFH8ru41EdMy",
  "key20": "3JHG1AnhYtexCiYNoFzHjMeKEsq5g2t9JTvHcpkoZXnViQWi867auoDxLxBGtQPwAZdXwRcbWq89vW94PuCiHxk3",
  "key21": "3f4nhuRfmagfRaWTXTCQxhgbLsb124FQ7oAJsLGteBksvCsAFKpQrsMgf4z63rxXanjv1Mwva6XvWr2Kqnivaoej",
  "key22": "3KZ7C5cB9ZKCv1zoDc49EeNeX4wjfxEk7ZEPpBYtUcMVcvn83haMVcL4EvyjGooPdLz7yTivusLZTCfkHLRsLQbx",
  "key23": "3NQQHqrX848X59zUcgX1q1D7aTb5cZ5HdBqVwkAEkZQZwB3Sg3hYU25iwUcG3LCVRNyaRdrwAGRrWitu9qpkoive",
  "key24": "4jXkYfoKXWUnUVLKPGSEQaTgJWrHf8yBWr4Zu8ENbRxHfWsi1kxAgpMrsaMnZR8M43C1tW3ZCKUmWynBjxMj58xV",
  "key25": "nM7quoeFTN1xgd5qNaRAQzkLwQVfpXbtnTB6jQsux66oZp5evpKJ4Mu34RudtYLx4cP8nRjY8ngiYtHP2s23DAH",
  "key26": "xrDDvvJPBrHAwztLwrfGrbGetCrwnY443X3RU73jikJ8DZJsg8vHPz1TRzniesBvC2Ayzgu3jRNyQNvcmBqtuuZ",
  "key27": "5qWYiXCWa8RN1JsDTZQuQb34RmzDFmqCbebCMYPZX2NJBTNqsexJf1qu7P2T8m57UaHaEz2gyC9PfwNFRMzB8hoj",
  "key28": "5KKQDfjbadajdGz7zw8ev8KSyhmmNMzG5tZFAi1S5LtgYM6XSvFvwZv7KQ141Zm9TCj9i4gwuVv16AXdNRW9aVpz",
  "key29": "2CHv19E5ZeVTzfYxgWhL9C6a8nH2msUgvWyKHR6BEFGh6yiZs2jxvfinkZMi3R5YGxTooHYjwUpx5NhPCDLF8Dhw",
  "key30": "2fnq2ZNG7jUnXEH56jhFbVPoXfSNUstG8WNq6JYJe2LxcdS5AC2jyxc6sxnMjpZtDSPMdMwzG77QPKcPjWqxdQdi",
  "key31": "5WT4GpEDmDSznxN1RFwNFw5qXCEEEBReVz639uUyVRGG8YT7A3FqyyF9L3xNa7RycnoReUwcuLvE44ai7LZExCES",
  "key32": "2R7DFoM9cMWB75rqfRBPBpm2zqy5fDfcaAwTVxgAn7E2p7hxAJMftNTzEjHgdBHowJzdjSWBkgT8urLfN8PCWKG8",
  "key33": "2civn3yT88wMsJpUQjH7MPGA3AXZgikX6C9dgB7ndva7zPfwoj33bqUii4kfhpuaAZJ7nFwWm9NgYJxQGc2HaEv8",
  "key34": "3MqitcMh3LPk5N7U8UaxdVTDSMEFQmTZAQeJPe3zmKzztHz8Kv77Zpe951AF92HekeN5fNEQYH8Y7wy46qjriRFy",
  "key35": "2nroynm1jgdMosNvXCr6a7R6QuvWcAHjvNYsQkbWh4iAzKjMNDjmxNjnzR3Hiet5cpBUQZcXuopYgpqKUbfkus4Z",
  "key36": "3X576g9tuagmiKF5rGbNKUJBomY4iRZWBo7tRJQNg2tcMCUjND5fExU3H8EtysEfUDKrbeWqHDvzxvoBM5WHBcie",
  "key37": "2zCdLGEFQJgLE46TL2gQB9gHNSYJe5mFANKnhjBMfJtfuiarwHZVRPfbNQVaF7Ri38KhdwviAT3FQp9WcdjshGbQ",
  "key38": "2E6ChJX2dV9qygAGdTvsfqZs2LMWuVJEEmRZhbHzFNjoKyFt1851HvyVhsaimZPpMa6yMv75GKSAMWjriuswLRFw",
  "key39": "42D5rx81HaBAaJ9UDqzTu6agaLqZSS8WvDBaAohCR27rBSiXAjFFJhyT3FCzEBSyxMMXUAYzhCRLXQLYQUaxGy5s",
  "key40": "49GUjsvtqNKRmvwov2iBrk3AhJVjz9xYwJrgB8MMQ5cJqnthb7ytebqW8a5eiZBYwJ23ZAsqtSzwxX51T53mj2Dv",
  "key41": "3H7CQN3maZpBVveuh9Yir8nnTvJRyY9yA1U8X7gM3zdh7sJvmq7KH3jdfUmrVHg7Y5Upi8qgPrx9DSRTAVc2exeU",
  "key42": "2oYFDeCvoTnmGHYwvGDnPsjBtCLi6fbGYfmsHmsyqDQGYmYtu6Lqdt2UoJZ8w1jSYraaGfa4LZrjpyBMG4uZ3zyu",
  "key43": "G5kFf19hd29LsG5kjhVgnFD9VhQPXTve72dXMfBvYiSXbxbM4wSwyaaorAcBMP1avpcWPE3Vc5iJm6EsSEU9SsB"
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
