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
    "3TAY8hkth2aQh5j24Fy8vSL2xedY5jEeRQSukyLhwzGJ7rTxf3eqszyuLvQHzdNwekdnndMQe4s5rh4kngXXJWq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37pm4v5s7e3PrzhHLhpu2gx5Nz43xEWEhm7WidLrtBs83A1AG1pp1gq8BjCczpGEofWCqhrp1vDUQjQpHNTqhVHk",
  "key1": "29SgDDWhi2P2us2Mujc15MZfANyTnZ8zMLUAX5XYn6jEWGzm3VhNcEhRhBb6x9KiRyN2JPEowHEeETzSHFT3EHQ4",
  "key2": "4hj7AbMpojzxrWHdFY7pb2BMJJ6u6c1qDdC3vXE5AhgrhjuY18bqcGnwmYBggCUTHTBaEzPYNpGmbKpkFRWwzBua",
  "key3": "HYkxtBaHCYEY6xa37mscNWAdGWmtZkq9jipJ5by927SyDNhpn3YaPNbgd9JAiegndCu5N9Cgg9PmdkEr4qKsBnt",
  "key4": "5kaeBBmfTpdHuZGMoRY6XVC2YypJG5tY7sdxkVcueAsKRShf1PmcCt7K9hYWPv6HWYtxymmEHG5NGVit8jmNrcco",
  "key5": "5MdB9oGU42tTVsyJgR46Yd86QubKpM8aDsYQxeXiQv7A1p7zyYhj54nZ1JdgL7BwXc4H7xmqwvJq97ph5vAodKsR",
  "key6": "46XGoZc2reWuQyqFQRVBYVMbEVkJXUyKztSN8c1XqCd5UY28uYNviYy44DmpqFKiVNk4EidLrueqdSaBsqRH884S",
  "key7": "FcfFB935E8xUW53f7NjYcR2R2mgUZ4S2NzHoFatZosBfCfejZ5AjcWrRL7xvie2QfdcAMJ2zu1yDRsHCtFVst7b",
  "key8": "57oRvaZDdK7fuKpFTMT5L8fWQZUCEYGAyMJdGLNz49LP5uP4K3WNZ1J3wt9n91hPhfH8r1dKP4JbWgmPKek2urqK",
  "key9": "4dwLddfogxwozwjJyqRd4jaAVGqAbdfkJmQ7XUszbCUu3xdjNjnkELbWYRxdfL6LPBxxSdmvRi7yhd4ZsZgn5hA8",
  "key10": "3nCzvwUaS8dE1t5KzY6qkTpfZe9iQ3z4den2PPyQxa2k4Aipn8pCxRnx6cczcatYuULacqZ25bqN318ioz6ZrXkV",
  "key11": "4hLCwDq5pwtUoW5HS4UDfoBNsLLJbnKdfsAeUf2X53esMmchyPbsmB36Y1LButndgHwMstEyTHDnnkfPt5kw2oG9",
  "key12": "6662W7R1gyLe9Wae7Y6WnxMcYSKXDYJ2f5VSr21XqhiZXBqpv42sCzFXzAiocWSgk72cPtGMRzdfFohT79eNRq2g",
  "key13": "3GMbDoRhaNZjevX6xhGacJmHJheKXaY7BFjWNS1DhCtYMyaez4hUfWwE1rG9GdboFFjt5qMrZ8HGtnbWouC2dEFN",
  "key14": "5w4692EXJCLD4FnzZu7TkhqBDs3LMrK475pdBj3dMZtDmskEJPLjE1eLGcL9ArB8aSCqwmPshDELKhzpK5xtBwz9",
  "key15": "39GkjxNKpYWkTKa9iiPqahEcwSeFCAT7X1HCzNTTWUh8CvoZAR4x1dVXb3hAJfyvAFZyQWx1QGzn5zJV8mbCATxP",
  "key16": "3QgX94KmBPkMuyCvQ4caSpagdhsAp3gRf2WQoQrW5RDrgjo3RsDrbVU8uDLx6sng5u9xie26bawiET8XcjMVwYbd",
  "key17": "NWt8rqH8k96UinW63kC6VUoH2xZdJESKUBAiK7QxgjyB1VNP2aJPH8wEhxa6QkshvbjQFP4znXj5FNiPJSq15Gw",
  "key18": "25A8gVdvAV59HQBLwT9YY8x6yu5KE8MT8X5vKSJ5SB5nvduesf4LW6sL4Kih471eaFf8G9KXi2FJe5A2Km3cipse",
  "key19": "5rGLcrruaCNzBUoT2vwV9c4ucuvLTp2PFjpMDUNDKQw1XHvL4yChu13Qsk2jd5k9xXMHs5KwKxkSP8LTdQCCqCa1",
  "key20": "KYRZnHm8qPsaB1ULWNn4d9tgbWgHHRaaALCs7ArL2dXiMGxA88SPKfAh9dwmFyQFuZedmo5NxBKjJo54a3CKCYp",
  "key21": "59k9E8ZVAm7ktQx66u1iAoyLe5C6KEpyW2agoydyuXmh6GAi3vvqRFTa5W7S9C9iMNNYvfPgr8FRAhJLwvb35cKn",
  "key22": "3K7jsjcPfcquqgywdgxmauAxKobv4j1mTN4gwS9n4pY5XanHULsednpLeGk7rgaUPL6NygHgxPgp6YMhBRRwykxy",
  "key23": "GPFhNj4aXsuFgdLXiLaUqJ2QBHeXbqAzQcJLVFK2mvmuUWysFznJoPT8pmSvbxF7y9e4dFHCe6PdTvctuXDoLqL",
  "key24": "4hrtGiRqi75FGamWoZoyUDTWnDBwMa9Jz2e98CNCAbThq7HX59DTPuMtEHH5ABdYsV1iQi5xNkuH1hwkddanmCVj",
  "key25": "2n9AyLxTGWtYDP9KWwkCTnDu31u6WKThSYxu8qeUtD8bRtj82wVwf2ZgMsT5AN1JYjcgE7FTp45DuimZXjEkLxzj",
  "key26": "3p47nzYA6GsSD9DWGBVRG3sTDTvpFKooguNz5AN9upDkYpqTxf8Ct6FooVLyMEvA5akaUDQooXSiBeGFcc6ULnnc",
  "key27": "57F2bLuhq6Ya9ShHQeQZQgR4pQPMYGYLKRStUrep86ugaR4tDWwGKCqpyrijaoQwWWZ57oWVwCSuQmjBFiEieWpe",
  "key28": "4WAkSv7uHm8fQcK12TJBBjjqQZoSa6evEsFxe6npDVLwfgbi745ZxsCa7kbr6apWcBEys1M1w3dgireD7qZDdQeK",
  "key29": "28oTaFNx7Sa5y4d7a1u3vpJWeLyLqe3rgopbVERdbzFc7U4nNpgS6SZj5zbFSqvDRksdPuWphqrXNHq5zzs6EhU1",
  "key30": "4q4gtaU1AtL3UyEpEYu6xb6jgJrSQXXEUsVu9Ctk2kkkE9oDpT9GzpczrFpVVKcEpPSWZbvDGJCJDK2Lov7HS6cX",
  "key31": "hSPigGGngktgeRinJvwBfyiNzYCzLjdv2PkCgh4q2p1UHFoxagH2jsFpDbJ2YZgK1jPQyadgyu7zvixr3vheaSm"
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
