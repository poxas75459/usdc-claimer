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
    "5PiBZekFzMC2edkYir8v9VLVsNZjeUZP8KYoEbGMiihxfZK4pYjfZfZpE2hSgNr1B8d2AXpS1CS6rv8V1FaH3DoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mPc3ZsrPuiwxW6vb7nDEFrwbbnwrrBRNr2FFXwJEUc5RUJxL8Df3mVrPZXgVRMgwPrE625ABpJGqkSj3dhUxh1r",
  "key1": "67LoXU6N7VYFrcdYBemcxovgoiJQeL2BA6pSGVi7AZzi7svAASeARdjB5XgLkzMHpPTNNSoYGWCexM3pZ7T1Joyb",
  "key2": "5MYswsydoDmt2uZdj3EmGzMbY5YKXL36ZjQmtEUfkAbfqe2YUjvKRuUnPLpyRBAkoPkgwxjYD4x2i1xrxaLGR79h",
  "key3": "ifXXjD9qm3nYq8he4sqnw6Ayv5EryF4ZUhGFQDgvYMVzrU9f4VQ6mMEPssw67pwmb22crEAtTeHviaS9w4LtY8G",
  "key4": "4FXVJCsYGNMFUUzLTCqpQTfgWiwmHCEeiub2V66534ZCyrD32EZpXBNiWQTixWogmVTZ27MnXKArSyC1cRmaEhx1",
  "key5": "72Yzr1J82DMrRaXcWHvcEZkNBmAcTw39KFVRFKohBbkGy82mqfe6zyD88Z57kkiHhFtwQz5HtGpBVyJCVe6yfYJ",
  "key6": "kh8S9EFCNyCdKMCGR8vHRUWMMAd4Be22oS6oomA8yMbVkZijrGJDHSwxnqRJ1Cw3AVPaavnM7YLMW5LbhKqdkUk",
  "key7": "PjfF3FKvDNLdTRrrfDsDa2wxUPtS3QmyL7HMq6R58AvhwQv4s33xPrXqsgSv7yS6r7hBiRuUuJtfnoZ33B8Dc2F",
  "key8": "5DHqBPUM1ApWbit9xKGrTQf3pvsK77Mp5Euu7VKT6NGpWrPVzpdvdj1DqWJLEEysmDEaETnpDQk2ZCrNfg6SdLNw",
  "key9": "67Tip6f7wufYE1NezsogKFuzFwuyLwR3sqGVMJgeMqFBRZBcKmi2LZiePe1KCQY1vCWvpqrLLVqnpj8Etg9X9G1o",
  "key10": "5cDsbViAMdxGBaWpHM6RR2bSyBPz1LGTEGRvAdFW88eLD2fxGRprQvg3Nj9SQpiCt1jVX3neZLpeHtqo4TGjbZPQ",
  "key11": "5eMhAD3K3awXbMYvTWW7hy8mY8K5VJbPq3HrzZa2iAahFNRrQ6MGBagw8JdLDSeYLMrbH7hkrUDcH3qkxMW3AtaF",
  "key12": "4fUQFmspVuKVv7sbmvZmazDhAjKH8ygSdzfoN43P8fba4DV1hnvP4mytAu7iV517KziGPgFpz6oPngDNL41eWAKt",
  "key13": "4sgLpfiBMPwCuJX9PVi9sS3Faw2x6jU12SxVL1P852kxx3FzibLFtJ4NhwSs6p3SsXrgU9438XqCXE8YSFwf8RSm",
  "key14": "3TLjSTQ3QZEnaM67eCQi2DicUQMC2RuekcAApHVi5go57wEehLPvD9iDo4VCDTjdsFvhQcpoaUDFCtoZRxnmT99a",
  "key15": "4v3FyEoUeLsbPdgao8k6wLerMUGtny8pdFaXwozbGTG6gHaikB8gBTWPJcJbkk3LTpEbhbnWV44dxnYNNthbH3bL",
  "key16": "3ScDkDdtyAonqphkeEmSqCnRZmP5q4yh9YdT9oxjjBgKEgnvYHT7ydb3yNRdwiqYa1Sv4TSD5pMvmpyzdJzVnePM",
  "key17": "3jznonUNZ7pjMYsvcQ2csagyUMbs2mdw4LdXAe2CCid1dY78J2xzDAtSpdvnxfTwhYTi8pYE5vUS8Ecg3midwgyd",
  "key18": "2M1HFwdTWVDSdjKSmkXTeJGVwsxpsTyF5mmubHwxSu7bxC5euHUKyGGvAW1MXAdR2sETnnAnW8nuhEjjcVxCr929",
  "key19": "3DwxHaXpXrb5kGFy7Bv6suhQQEXxqozRFJCpS2Z96gGtx5Edy8xcmuDrvFKMp4YsiryTPkRurHKNU5ePCMAyJTCc",
  "key20": "5o63GdChLXYpNh4ExPV2zLi6KhXaVxKPJvkZCmFshNLeTBhLhSzg2s39YDeeg87ov9jroAEBLHUBnLMUWT9ECHMQ",
  "key21": "M2QCEh9qh93aFznRib1BgA4wyLcs6ZSkeg51nLX3S2mvwfzzBd7dNkQhHJXaXknMYnYXSr8LNnZp5bjf4pvgMgu",
  "key22": "5J7w8bcn43ZbZ8F8BfMR71CMQWpSVv1YdB593P34YHr13538AaU6ZV4xru8rss4ANg8KAZdouvSLS72euHmdz3j9",
  "key23": "3Cyz1PJMt6HCsy7ycVrhbABFafdAmXQLmNwv7yVMibVpJWMLKi71oTnAqvn4fbjLCiFiYPcppK7yk9PBfmLoxdwj",
  "key24": "54zZVHp2LbmrAW3Dg6wnsgutAxbVucSmPtrX85dVg1woWXsQux75JyqwLfRLTtKfQjhDsBqEPmeDGMDZLU1Q2vG9",
  "key25": "2neEarPTwJZhJHhNj2Mwjt3jgx7noof91CaPHgsgi8D84ftceE5vdKrRsmFnk6Bd9B2oqd2N1SXoBjfWMWJfhrPn",
  "key26": "RUCrERyeMq9Q1RHASfAq2y76zvrS4DoST8ZNfWXtY1XzYjca9zn5jCAtaUW9sQyZPVemmwT91ETUi4Xbx1LJYqU",
  "key27": "FsbmWSkpitFhwsD5QDhsj41MY92Dtjbu2kPLnDa9xqr1xu4KAdAceKcGTN3uZNYA2AT5c8jsBW8DPyzAFbgZptG",
  "key28": "J5VSZyCztFPmaJ6skHThxdhXg4cutA48RChNivQgMKRwzWiNz9EiKXsgueGMgFKhEq6WJSDrUsKDeEiigAYsggP",
  "key29": "39SQGpGrwg9Ym1dPuBKgCWEQmL29fGj4L45mD5Bz4NDCrE25rw4zr9gNQvxxLJquevAeTiNHi34LunkazLPsSxTf",
  "key30": "FJmmakrwADoMZoUtySjryM271FJfuGZmFcoXPc22Zk4YxYogcjuLsGHQwYUyW6cfkDERqM3kHatTivKbUWjBzco",
  "key31": "KwnctkY3WCwNKZj4mGFkoKPEH7GFMeAU9HTwp7RadyS7AkZ5MCs484N2G7x6ADXiKXfmcbS1seNShtsdDeL3aGk",
  "key32": "44ocEM3JtJdwNc2YG1SRDcMjuJRLM5KB6TbC6QNViSRV2dRzQC4UE8e5uHw7cXyW32cxsJ3tHyeqa1dFuxkQLDXN",
  "key33": "2xvF8K61uHsYwUaWTJ9LEAqaFESa9cnpymkuAxFnaJaHsZ6qDvZWHtE9N3VwnpyB9PaccdwrKFkB719wvXngH86d",
  "key34": "2pHkx7Ddmg4FiFyTkJRB3wF3TpgjVP3d5rnhDYB2tMU4r7AE2F4xKofmjno1yRfcTJFTABUAY4AnuK5YavGRLo49",
  "key35": "4nQzEroSTYoHqdt4uLqSaXdHNbEmHh3sbvEd8N8ZYy6p7GL3iKuKM9RfvcPAKyFC4yN29Sm53eK4NjYFi17EAz6t",
  "key36": "3ydTTso5nGc6fVUwDrmjtHrzsGtRE3WiC6Fwb9RqYLEZHUJVkQqiMzQKRFL6w13m2nbzRh8yknfykmkFUm1vaHwB",
  "key37": "QKNhGpgMeVtH3XgDb5LsT3AUKL7EV6VEFSsttGmtqVnYPtQEebhTXCoDwwE8jaMkMB9EN8LtkahDigcbPF1w4j9",
  "key38": "3xUveKw8Xjcw8ax1sbUscP7rwbeo5V58Xmf2MPvLy8LLTbxtvUVSTZNMgawK7sd9JY5vzZc14u4ivNxZd6sqFLit"
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
