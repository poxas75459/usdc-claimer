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
    "59kB378SAVyDikqnmYGRtxYFs5sQqMGuJ9MtaBTud5KtMPNUT2h2VYNP1P2xciJgwFPPBQr2rvY3N4yij5mXA18Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e71owWvFXXqiyVFYAmhRJrUDpqPgponrNn5jZ3HpPffC8fpU2iZijep1V1BHADvxMCYWoie4WjfrMdaJV88TAxY",
  "key1": "3GA56oEaV4QrdXtNk6xpkcPuAB9WgkxQT9ADbXCGHRvsBagLLEh59uBD9oLjNABksrjp9xDxaoEauBx1cXtpQtWk",
  "key2": "2YSZaetBhPhX5WFNXovNBwDXY8qKP1L9RRc78oPE35EukgvQgCzVG2WGw8497fZXfFdGJoM2o4NwF9BErHzZfLNV",
  "key3": "25krxPCviVZAVeaeX4em1MYYcj2AuVUXguDikTAEuhxGES1tfxQ5Jp27BkvoAgrBq2PfJYVaHpo55hi3f4TtCKNo",
  "key4": "3vqfNMMnwdivUvrYBcywt3C27JDeKeapFkYxf85KAjxax4yYnJ1XPkxXhsSnW8T761DMune9HCh2oXzUVYXPjE4v",
  "key5": "2pnJS7MEk8L2o1XEwak9RyvsnCVoFxey7vEWWbbNgofm8i7YGy1ZiYhnDezwDVmcG2oSz798aHR3niuvrUuaRWvr",
  "key6": "cmF6pkF8vBEGfDtDsGrfoqDMnpXAf6ratXEwuyZCijvjcVZQeTef1WKmVWH9nYZP82fotx14TmQJhtv2ge9dHux",
  "key7": "31eN3oNjVy8HjQi99jUEeXytmSwT9DyaJdEjmA7VCoV3DwiTQZHi4GoKmiX3y3sseDHH6up9g9ttf2S1QBguiN1q",
  "key8": "LWYrXs8zpgkRNiYvtUy5NmsGLbKzs9oyhBxjMC5tWeVc1j1Pm5p6NC2feHXwcmK71Jmw8hwgjXM2mD9LhP7iwyR",
  "key9": "5k9NH5uMD7nXY6vgd6HSnne4cTkNxVQzWMGaTce5Lausud83dWWwqR9e7m6MVtgKEPwv7rBpP33p3Te1LhDqsxrQ",
  "key10": "3Le4gA6Rowq9coY1gk3WxKSMWwtMrUDdBG8gizy8JeruC6RpNtasAKRNCPniF1FEqSx4koGQkwhe1hHeMvNziyjA",
  "key11": "5LqurZd3xbEPcoiTzTNuakJF3QedQbc9LvMrLvTjHJGWh7QJ9MCc4yRXFzYVPDZR8yCojWJbLjZGZB5dLagb8kLx",
  "key12": "4s8htQfLAHhi1bwhEn1y7WJaVkQpEyoqRkYHSmU3ES5w9h7tFfZA2bprRbN11V2WWqLtiFpVKYp3GSpn77YfPC9z",
  "key13": "3aTKd7cPr7ZMa3JGqw1tTvjNFGFuyLnG9sxxB5jy5MWJtXMdD3LRkB1UBSouioGE6F7S3Wmg91xJGoNvdQ3nTWGt",
  "key14": "27TTY7GbjN7bpqP1zprcqMcFvuS5eD9uUNCwjURfY22kN9pXS5ZKJtAJQ6nxnGUYpCEwfwSmAUn5tcBPBwTeSW4M",
  "key15": "3DdegRc4nm8LZieCcDu28NKPr3PEqD7CvKap8no22EiL97zQfVRPmJDmYQDa6Xi1gtJGfB6VRXZ7qFQBehGhUXYS",
  "key16": "2aZcAHYGp3QkFCXJnPW5FAJ1SbRpmM7wJU3vdeD8CcokeXep1dAinmf6CUaGjzXPsyAB4MDkR9wHzoCFSB6eZV8W",
  "key17": "5WAcyAZ2a49zu8QiT23HbCrr77VTG2HJUtopxHcwwLDDUvJpLWax6VYW1NXBayPKkXXg49gRJxG2MntPg5FBa3Ji",
  "key18": "4xq4rzGF9pvG4HVmdkKqbhTUPz5fABc7Ms9bWQe44AtruYbRTWKy3bXfiT2xhx1wNPrvKDR7oh6g1vKssWmoPkd4",
  "key19": "5y8mH36DGAGepGEWuhtLxeQF3M9vmjaVwst2sSiKdsLhHBfr5s3DcoqEvGB7LYdtXsRuUwun1WjDwvoDSe7hbJsV",
  "key20": "4VFxnkP9KasbKfqjSLhgctBEnSnZmCeTtzfXbFqaQcikp1U6M8PKswMhhwqH3X3DinxsiAXqYwrUUsSqGtnnTEQp",
  "key21": "4dejjrJKYcHcMXwqoe4SiAxJPXJSmkRZQVdt1MfXoGx7U8PbcSFtgi6EeYmMB95zrXvYoKuZZcMAQA83SyTEcCJx",
  "key22": "4DxEuoaJrB6B48aG5fRp53ceAP2WNkufYyUfVVbzNUYp4152VPhaZprHXRoAU3gvP8XCTjkLX4X4jFu8NVTtGLyK",
  "key23": "5tmednZz7iaxzPbWBJQJPRDXsJLoJJvLERzykWDe55fBjcvX7T3rKc216kSaVsnMXttAHdPMcH7MfUZE79M63GJx",
  "key24": "374CBjsjWNgLJmLnBFNpbHh63oBhdoLCfm6AYkyC1wafG93dyNdoHn6JibWUMN3BKFtWLCBRARej8nNk5bdr6F28",
  "key25": "2i7bv5xvwoQAiM83uo75VgCvDq1SiDqv11mjvZWcwThcsfwuhoG2XU145vQLnLnyjqgrEN4qYrgjz8mSZ9j2rRj1",
  "key26": "4NKF9HZSYWNgCk5FMVuh831FKvPjvSo6VnPZNJKdjfmN7YMnRiwWwxLbiF5nqnT16K7DcXQnchmyo9huiscUDedJ",
  "key27": "2v4tZkXhEmHZXzJsnWWCzRr9eU6axpX1QhfDPNmvU8XmbXHbkBUd2C4U9YtjtVPbxDvUfoveEFanLTPGGKxHFYR1",
  "key28": "3p9GVZQNWXD4wWowVKyWiFV1Ag33Xm8PB2NqT3QBwQymLCmjjN53rQU8acrvAUi6Q3sFYPDTH33LkCtcFBTcSVY3",
  "key29": "53wfGmxXbD1eRu1XHjJ49FDHcFvYCdCzFVUeSDtxapKEq5SHUGETdezAdsZ2bfHHdt8soouTJFVPmvd8z7G6Sffp",
  "key30": "39LQYscEL1vNxjE7Xe3CR1UFbbiWfsfBFNPsCE1c15wHg3Yz2S7aks5GKF78G6w3xAH6HWC5EWVgMF3xQxvePTwN",
  "key31": "4G8xFe9NpBonzjUL7WWHdkqY29zLhDuUPb9GhQdsdBYYxExYiMovpwwfnzH7reC7gg8HDyBPYJcoFGXFxRDZyw8n",
  "key32": "38SgAa5SFjuoEoTpq5XP8xZuk41sq4mpvANuLEKNosHAuSWcYBiYb3dao3395GHbZszHU8yLrj3dgskhsh8Pnf5W",
  "key33": "EeeGD5SagYDeqSrjq3Agy4u4KEDUFo1DxKLWWL2nfmPiTDLNd8Su761JpnQ7yqjMXcJxhz4zxPrywwzDaSHV39x",
  "key34": "2cqj7APCxm4tC6HRLoT7siSVA7svqiFe2JRV6EU6eoJtVLooy7LGfeCh3Tn9A2bWm4iwKDfP8etKfUgLBWGtrP5k",
  "key35": "TkSHp7AQ3VxAx7DxJVNQd7e7qfpMapxctDtV3WzuobHFX87tA5MFucWJLZUC3Av5ZyZ5Ws3Dt2XAtJ3fZBRgzGB",
  "key36": "4L7yYZfhRNxwVKQbH9tEr7c3HTzRFckzMmW1qq1rwLrY7EMmsnYPVWtURKAKnUTdMB3xGCCgbAk5UYjNVLfYbafg",
  "key37": "4uA9SvJ4fqZ5fNfEKtu3nELkSof42QTut1YPnpiLDq3t8CrN5ot9FPnQVXHdw4etbreLV5zDZEXkKv5NDfCtSZhX"
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
