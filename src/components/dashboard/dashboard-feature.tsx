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
    "2idD1yE4i4d3FTS9D432dRvr2WHseR6Epf1RPURXGrguXdaCuNnxaArctgwsEKt7aHc5Baufy6ZjWeDcyqwomgnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mmFQWM9bXK6dHtjFC88ESbu6j8WjNHX6ECbLu2piYKZmU2cQc5pWTSexx8Jri2MNJ336dChELbVufiP9XciaZfR",
  "key1": "3eF6f5LGSUn4fXHu3iVsqw8WSeQEYpWnG2NCuKwMw6eHieFWxXUjR6JtgFzhBhpsHehM7iiwBBRe9dyndj3kL9Nz",
  "key2": "3TBPMfJ1SGYMbGLnek5jVbojQeWDn7YGWvdZDkP9wiaSA9TFTzh19Sv4FiB5oUmrv2FeU2FLhHdFz3GZti34Axth",
  "key3": "4sTzJPAe19tbshCJwH9ceFM9kgNbgL8fCxKi92YbJkcY9egS7ZzWQJ3oe8B7seg2sm9KzL9KwV2nmvB1EiaRPzvC",
  "key4": "5Zsh4eF8bcrFmctC39g2qeZahSmrJ7Ya17Ck8HoBTEWdqAkB6CBjbfzmywXupPKbEQ5gmGe9J21HnfwFRkCqzDrG",
  "key5": "4dnHLSTFEmpMtvUkZtbjDxTw6ZFA4ZYU1ks36nwqNUvag7rii824j8Rdd35JTb48vtpe945njV1MgjZJEHFguFa",
  "key6": "3p8BxD2YC6q1ds4iRVMsiYUMqAavApS5YtHojS5GMiFpdmV1n3YxE85Uv9Qp2ZYWbwt1vhvJpvwRS2dTmE3kWRwz",
  "key7": "3eyvoW51exKkMNQFFMReNtr8XzcA6THdrtcto1RQ4CgpjrVG4gHGKteGx1SNFA3kzew2D3ZfKDA6BLqyGncuN2VJ",
  "key8": "4vgA2isU6PKAkpbRrcbP1merw5FeqFRyavmsgp9UpvMfiyRdxZD7p3usgwoWxexsd8AwQRAN7JpmncsTAmawQe5u",
  "key9": "5o7JPoGNwEnjfvLw6oQPSDvEPbhvK4uje6cnyX45TeK2NDLxQzzbYggsUxF4Ri5wP7CGLsYBh1HsivTJtoVAi6DY",
  "key10": "546o4axvUdF7bMu41JBey5PoXEetsfkGtsEjLk1Xp5uBkAUP3h7NrsndB2BKiUQ47tQ5gS639bxH5ECk2iPCZ1Fc",
  "key11": "4KxWRKunVYx1QsihXXEfxzsWchpVPD2Lpspy75k2aFJf8vaWpsY5F9YP2YJ6dCEsvUazxVbXhcm61Gw4P9tqiWVp",
  "key12": "3sghzxFGm4ATZYSEfaJWCupQytDGduPwCjHdLDuWdcfSsMpT9JqPhRkaXho6THsrLBYKQ9UefFq3wHQKRCQF3ZGx",
  "key13": "2XCPvLgN7WwYq8skfS2LKhiuFG5evWGcrGnfmTvyKiSc2iZPxYA4hvDgnv8XuNg8awAeJ7NeUX7LQwdxuC7K8kr",
  "key14": "3WqJUumk1yeYav7dd54ZFL2ziLwbrSqTKqxneFAV8QsyxpVum1kkVUkKQF2QWb34yRyDKCGL1f6pWfmBxXiqWTic",
  "key15": "4beezAN7YFuCyneShvAtHtmzpqkZY8nTeB32KxeunR7mYgsrrx9BG48wAygr18gbgtS4QszKieLkdeaAm3mFWWAc",
  "key16": "2Fiy7RHT7vBjwV3UUWyyvGW5b715vdheFH62XsGbAtVq8Q7ChTP9Gsz4sTUmLsbeKHfVGKUart3XXtCDsgaygpTW",
  "key17": "54V9UMcYqjwWsjEx2V1DBBGiEagB2JYgoj7PJAbgygEhrWjHBoystGY4Xdcaf5dFk3Jj5ddxT8jhQX4JTKu8uEKE",
  "key18": "y9U6AwMyedspGkqqJmXWKFs1nXc31doWL4mWFcsbFcNGbj8zRnJWYzV2Mmor9nEhrCuz6DaaKYU5QcHdM913j9H",
  "key19": "5JgmpqwmUeJVYd3vVGTg7vE4caSJHQXNQ4BRW7UxdPEBxVTHGmMGAAuCuHWdBSDHiY7J1G4asxU4v51tCJwb5ZyA",
  "key20": "3LBbHEt6D5jSBQPxKiX2UujDD2riJf9cyhCAoXzvKVmPCrU1BqDhPzKZDF76sLWknHqhJzLL5eYSGeMShLMePw1a",
  "key21": "5khGLqxSFBakmfZUqwMnbjFD2uE58xTsk6Y7yeobsSojVUqy2F8vRnjkph7c96KjkGv76ekotMYJSajCHLmDke3H",
  "key22": "hH2fihdjkiFVXSqFAWwfhmi6RUr2xbdt1HsM89Q8t3312wLA3gxhDcrTL4YK3C79bcCiugyFKNSYaXs3PBdUFjW",
  "key23": "J6vTr4PFbjNf4LXV6mKFzVMKBhBChRM2tGpqAe8A9E7TRS5ixs42rg2gu8921cJ1yTad2ZFCVFRBYuYHo6ewHD1",
  "key24": "33bzxd8UKAvRX1exL9s5PnERSseL2tmY8moiLpwSszaaxngZ1WXruQYCckq6C5JmAkdqyHbxo62upGxYxCCKefRT",
  "key25": "233vjkzLzizpFPMuZzbsVUvCowZcYeB6VVs5MDVPwrmpvAophZpLYqB4vLM4YjoFbRTa2PbgKeCnHQm9sYEnwrqF",
  "key26": "5xPogjtEFKRJUbfDxNA2ffumcjAbM63ZPt5cCvPLJo2DHJV852cJ5mZTdeQuRztHD3LUFpEk1a4tDCDZDQihu2tz",
  "key27": "5qTdRfg8crTQ1Jn8dGVcavwsLUZDDeUBf4BfyyTWdBmYRatU4HmFBNRBMxMaBBCiKKwRauh1YjJ5fakqjmbCpFiG",
  "key28": "3nUpb8Yfda83fXoKxLFVBLWBFzJuNBkGmKeTjEm9CTqNxJduja2MEqgXhvTcPfakQ167joBsnX67rCNot9BvW21a",
  "key29": "2QUS1fse7x4MvrGpYz5TG4o5iuUoi3CQP5q6N1uHXi3gX7K5L5JY7JhtB4xNfvfXhEqXw968BX3Skszm9uj9jM3o",
  "key30": "ZD2VwgqA2UcGabXvD4d9MgTm7iLgespuaMSGe7kVVEYvba9vy9Qv5MGMtpDDGzXRRbTgyZ4AZQCqpmg45TsFaVe",
  "key31": "3LoVdtaQuLZDdU2PqzoJGXQbaFs8cCzLPaUd7Nz8Gn1PPyWc9fPAf3xKqsQtiY2YG1Xqcx4dUhN166bnawt9WPA9",
  "key32": "2fsUfitw1PCFJwCKASMSiuJfpwHVzV95cTa38qbvsHhRs5cD2jTBWSDMqLuXYZRc2iUHHPEXhpsd4W1QT5BW7HjX",
  "key33": "2iEwjax9odmd3P1z4mmLth41QnApQbCGjWtSH4CR4dnpfzfF7jipZPrYRtuspona3BKD3Hj9KXXXNsJLm5s6rzSn",
  "key34": "xRMxmw9A8meUeCNMyydk9wrtBQx4s9hP9YyaeuGF5YmqcirgktXTJpT56xWVvvUPK2eFskcAsfNixrB9QYNCjWT",
  "key35": "4eAoPM1Bxc99mkfSKtzNittVECQ9o9rhupM5iYSvjjfkxyecExUbUFKTCxHt3nPKrntTTpsHxuucTJJAA3yCgDL2",
  "key36": "5t6QRDaGqUJDTVbXY5mjNExiJgXpB1BebrwfVu4x84vYGwq4HoQbZYekuGjKa9JG2xMHQ5RkTBZLv5NhXSEPR6RP",
  "key37": "2TTcsyXadSHTVgtRieiyaEV2siRgwTByK92UmgFgSs7Bx2ETmhodw1ZC5j4SG5v1C5AeRu85eCvgbWApUoGfkNai",
  "key38": "51GxjSCapcbLo3nJZs3B6Kx4B76UuhsnFnrNtghSeWsPr333dP6iAnXteotKKkgswD28wQak5BtVFDohK1XqCEaX",
  "key39": "27rCkgn1xGWyNTVbpmAENEdgjsUCjASznRHBZR23iHBV7pPHiT3kefhXrjp4Fb9kewPrKq2mNS6UnSrZJGW5jTnr"
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
