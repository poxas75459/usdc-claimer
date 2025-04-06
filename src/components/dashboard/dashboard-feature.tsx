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
    "661Q4nMwbbZCaSZVq64pMBeATbWcqYtpgyKVFmU9b6ECdguFxS6hUHotD3N5SdaBdDPXxx6v9SEHr9opc8P4D7wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x5KvjCdGd7uCm5JpeoPMvASZwJx6pq198QFKQQVvCYEVL5ML9p2of2aJt91d4pPUHotJ3TCTEqVcudRQk1kATCw",
  "key1": "4eSuZENPqzar9PSwYQqUyFh8PH2CgArFJHAsq32nQnaxeYuNoyNgmWCeXPCDUp2mqyDcg5xfHwU8gHnEELofk8zY",
  "key2": "3dpwBtD62rgn16cwxtJKxv7oh5PFCjgrKP6wD7rDDNudsqo4SeCAZ64MnQPbjsjWVPQNzbkWx12ZYcZogifR45ht",
  "key3": "3214GdKd2cbsnDiwwxTNqvhjYaQR1nxNg7LAjDgpNWsLk2pftp6bQ5SUop53wJXhFRNUhSJq9jtSB2Dij1ju35Dg",
  "key4": "5SU2SszdQffxWaegtbtXJ7Pev4ELofJE32ohfNSWgyDRYUniKXgiieyPdBAjRnxuAmGdyE2QFfGtjFSxnNByQ7Uq",
  "key5": "3EGNhGPv9MVLS8WTa13cnWzhjCLVdeNnAptAjAwiXFAGPCvKKZx5dC9aRMVLdnfBG94y32brpyyGRMDnnitQTN8k",
  "key6": "3TKUoMvJVDYZTkTxPdxqe27WU6S5Kdf5dwEPDrrMkbKQ78EdwfGsFT3MDh9R6aAuwRRd8bahgA8GgaqX9UXNjzDw",
  "key7": "4QpogkrQPtaLG4tFEazSv2WgvG1wdsg2D7vHEMxNxPjk67MvcQoikcbrw9TQwLtTZqkKyxL6bTWWnNxomtLnzM82",
  "key8": "3ExhWg74CPXyh23En8jQjHdRpgo9mAQb7RDJG8QsgsGZuo6pBTwkUZWTVTWsheUyWh1mJA9tiAyhMgMB8ZCLLCzA",
  "key9": "5TnhK45bSEiQ5JGXwTksshPpBMWCvLj4NizP2vppTXW9cgQodCnYNKhhksSQ5MdyoFtBWKbm3imneGNbH6TPavGu",
  "key10": "2RSDXYN8b54FSK4DuTgqDTMb7K9181SPU1VHWo7avdW8b4x41rq63oLgrtoduqykdSQf3NF14FyX8MuHmM4mJRSt",
  "key11": "2ZerBU9ZxHsa1aAX5sFfwk7Qe87S7sEJ2BeVSu1fGBr1VTgpFfWoSPKAHYqmLHjZzLxod3KWdjnNJqaHAL4vEsed",
  "key12": "43jbzmPQnatdeq6GMJk3kpkLkNoWeyi2T9Ede4ptdpK9VYW91MGhySDfFGXJ3bag4LJZsWzFWS7R7CSTZixsf577",
  "key13": "3J3RD1Fw6VSRxxPg9TUoCh8uawR9yUFCfFqU7HPtRtP3K5pvP8YSo5miPGNWdbQ15KYcS2YkdBhXAxrqjAzQDDag",
  "key14": "5XdKCV9QPUEEhWrx9C2J3cCxt5uxuxvi54qhPMdbxyPHKRQgC7bQYkhhGSVg41dLLUgjZETZNmDo88EyRpFX3rwg",
  "key15": "2fNmHYFKgQtTgkFjQQaSCRWB1n4BGtaYRHBEZEvN1BpBR5FwxmBMDLCEY1uvtzaxXPDb6NAPADME8aEDgNN3NAuq",
  "key16": "25njMp6ihXvdoZ3sAHhicFcUJZjfXJGU2BzmhN9yeUVqSPRp6Ri33r6mFTfQbkuq5gXuccnoTNhcweVUQH9KkB1R",
  "key17": "3Quvu4uFgNenUH6RKfnFHx3387MFwg2TudwypvD6R5F5eMZhbgjep9L795JEVBmZ624Qyj4wqvwTKXHANtsQ7mUL",
  "key18": "37tRa7YdTDvMYU4s4M7Xv7wFgRpdJTVUhmMq6AwtiuYcvuDYbSVUJxWUH9sVbh6g7CX65yDdpVoKuvcxETR32bLG",
  "key19": "2g22UbaQrDKEe77HNMU2J1Qjtppo3tDWdNWmWKHzp4PysT79515QnjAJWWLMgpvXapeohQ3zXq2h7F5hedjh59fM",
  "key20": "5H1wWVbqUz9Z6FnHafMVxxjNYBkDYVSyNNjEcGSqGV2VdUW17o3RyiBzUTLh9BB4CWnde2zdY5zXGeXGZ3fqFjdT",
  "key21": "6pwXWNrrAMRLW9xqWJgjL3qJyMevhDZ2iZvTAdXRemRwDMiFZE24YTXjZmUes1zJ1ekEYueoTYQkwNGFcLeizkV",
  "key22": "5tEpVGXZAQH3dgm82wGJfZUp1dhEAhCke6v337ywkWRSojDbjwhZziy2zEEW9yyc2nk1GonwSyv4MjhLeuvgY47A",
  "key23": "3TsNU4tnDqBGzBx4gX4pADFWFuxnKMnbYdync9w1ueYg29rYWkoxspBongCY4EdjKeiDdBv4P4QSDeugU34gi4eT",
  "key24": "2mN69BJohRGgfxrQwwwFYajMZq2qzwM3H5GT83rG93pAwCBDwHeTVahu9LJL5kZDa4wfQ9SmbK7DRwYJJXeXBQa7",
  "key25": "5Sqycnv6b1hXCBNTT23AKnBB2bbR3ePxvZeLvgoy8P7cuj7byNP95k8y7aBmMNg26cPdwHSVG6aMPBp6wiCwNHDc",
  "key26": "3XAPzm9a7rp1CCaFJsTsBdQETJW9RuGYi54QCDMa9Htj7jHXgJctBnDhpDAr4RtxaFJpCMsbm7Z4ijyjhbYeKXCv",
  "key27": "251kxdw5hFwwqa9cjfJmBhxCfpM9HwMdRVL2aNZFrkA2tv8cmATKF7fJr51CJX1JzwxtqHrsFjiCBfM7t1iKh9ou",
  "key28": "2vRucpsdiTdDfzKVANJy1EYnWfTRwYgCyy6aL2vwk11zKySTFURaWJkvinzGzXstuKUJy8f5G2cijNVerRyecADo",
  "key29": "4mZhYwxvgiLs9TQL4HVCFaxfM67r4DErddkCbdj8fWsfttiDcEjbJK16iTLzfQhqiHQcPA9XnPmRxRxnWgDtqDTp",
  "key30": "mcJpGMsxXS2mFGypzSGoQkyctp5xZVU6kHUTW68cyFLUcEE9RLfqRUQG9nB2AcsKxkmiuPmsayDMLYa2rDL3BGE",
  "key31": "4zfyKTda5Zk7GZ7ByiTvbFEjJJKHfLJtGHN4sernMtX24SDDmtSc2LqQQKVyx2dqeeafhLHRCh1mndU6VpxmLHun",
  "key32": "3CCDT8oP6JZsxJrHG2BttcUu1iHpQXPg8XqfM6STMFuLD7VNvrgq9aRRSYuf5gL1f8r4iVacpjokvUMGn2fcQrKa",
  "key33": "2tQoSvR9UmK5PztVgh4b4x3F5dd9x4xnrpeVPpeowL6oNsQ92kRyJfsQrcjfocq8qJWFSHuk59CGJ82A2BMFScg6",
  "key34": "NfqKo2ugLJ5c63YVSSEh47JtdpuNjCqMGJiEy5pEUJJCnGsAeLZGJQ4YUx66KN66MZyVgjbQ7XB3myMfHMKg3U4",
  "key35": "4zng7LfWgqhT2LCMD1PkbxayVdiyJPEkF1kNeyVXAbWxLU3P3b5DWn76EMD6tAjHQ828N8mQTn4G6PYzux9f9HHj",
  "key36": "3hHUZzYGZ9Rpgfckku44GQoEyaZejhuuGL2KP8PLXEV6XvCeDrJjULd9RzNumau5ndYkGWa2RTEYYjdyd5TA52mi",
  "key37": "4UxEEwuuX3XXxia3CRWm1uv7MjwK6ocd5u4swMsPNydYjCwWqTLeJqTguxG6PAeHpQPkGFEZQDKruP2k8CXytxdX",
  "key38": "23QjN9JjdFLYrjcXNz9vo6rR4ch5XWrLLUBegFvY1Sj3AFJVwqCGaxsoZhEwRZak4WPQg1et1GKJ74qAb3aLugBx",
  "key39": "2oqv8NGHUjx2VN4ZqDqWcY36f5pUY4zqXLLgMDmi3ZyDpy26X3b4gv2UxfDYGSik3ZTWmH8Y6w3ymVvFGYqLUcj6"
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
