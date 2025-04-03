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
    "6jUpZGCCGGupnZn2ATPv8ZeUzjvSr2KGa4Vx1zifQCWEoyUFv3uENVphE6gF2uztVxxYJ5XwTAet7U2UsLKoiWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28J5MqjWLD1FtuZU4gLhLpTAUh7kHZMKrSRBmHtmzDDh3Y2Fu5NLnctQ2rKcsrFFwzJgaimHTofRzTmKXV82BLmZ",
  "key1": "2wbQCqdP59VTCYxSzkh6MjwiEXRfHxnTc7R9wjFCbJhKoPfiQ9i8u3dASvmRvyiKhno2peffKhcHFMy4k8iRKT4N",
  "key2": "wtPYjptnUszpaS9YgzrYWWcipofYWVPAgpgs76919FbWyPqkZ42ghby66XzGENVmxdH4bzWEmXakro3pRniK7Rg",
  "key3": "44qcT68EHptw583cDZEVBbA1KWKhgAuopeqrfb7RPDzdvMkYhJaodn82hDvW2pZ5QWVkp1PRvD3FKaEGZi9LaArr",
  "key4": "5QPz6VaoxCxPcYg6vfoRYWJ56qYiK6SHYtxGmYfFS4oJRQVQKbUdS4DweujnN6AxNzQq1MFU9sSZXWF3i98x5CVT",
  "key5": "qtj1DRhuQXXtKQZo2C7FWKvgRkNCav85Q3v191woNAyUTvdC1scWKuQD9vYRWJuTV3UXUH8ZHyRFDtewQQK7Vin",
  "key6": "3kberApobHLsYwAiF5zEobB6x8pPuGrKj1eckABhXNq68Cd8Xd5F4dKMb5k7XvTnPhZWJTHkabozhnbiDJKLjw98",
  "key7": "4zXa6K5CzKcDyY3AcwnDm1NNH52X5aLdFztYX79MHNAjEbzmMxKtZDSBXpkj4JZxsromMLt1Hi24jjudkDGTSU2T",
  "key8": "N7o3ENi54fWF8HnhzEnmhJxFTLYq1ib2YDTN3boXXb8jTnoLcqvti1ny2XZ3dHoeDDTdTqNujG6Bs6G62682xf8",
  "key9": "5azWgtBkUbUCVk3DzXLpBHGfX1Hs9nxfn5AL4WQxHxhrmCDYMi5uEJRnvsySQayfTWBT3uqgYnFsFs1HfzEbQdv3",
  "key10": "253dRMzXQnZ8iMMSRjP6Yb5CX4meVxz9azdLWA6RgarmiM1pVeccbVW28ufGBWhSpdLQvPaTQPiMpxMtFiAJD6if",
  "key11": "3DN5vnSrpcp9HiX1z7CdBv7hAJcVbUAmQucNHDtgk4Q4J9zrCSXJPAQgxZntpYJcBGiZLnySH874fJvgY1x7SqvB",
  "key12": "9CNv2RjhLqWCM4vL6fPKzgo5bfn64dw1krjbS81SQ4JaqqpePyFpaTie31ZKWS7QrpG1XKJu1dZCttAk8P6gceV",
  "key13": "5JNcdfWaYkw5QVwZBFFkfRgtNetQLwD21fCdvjA649pgbw1DWYkjSdxYVmsLJ1ooKCYtJqtUTxKYfuE6wKVkiBEu",
  "key14": "4di3EGHynLq47F2fDiLCXN1MHbRBTMKZZtwP7JQKnRMQGenQXEbCaZgztFgSwDTMCvwF9N8oZqkW9XNwD48uSVza",
  "key15": "2iocXMFoKGTM5DWrV4PdeHdRFNx5fXLLvRrzbdAokwRtNqivn6hHgMKhsh1nAfMsTsGmR2TABmcAWhK8XkmR5UAz",
  "key16": "cJLBdYHswuTRNVchtxA9HqUYVnJxzQ6vuFZ3w4deNzxMTEDeV3t7qEdFgsAvofgrtu3aCRyUFPfBukuneyKWFm2",
  "key17": "tNaUgG2HeXrJdr1eXJjZANcA54R1VvnNkfEZVZTvWQr5eAJrehu84YucvjdawqpJszf3wgiDMdWjMoV6ijQEXWb",
  "key18": "4ni2rGqU69scc23EzVmdQqBFi49RWQ1wgwbgH4nu332LwqGYZtfRMRDxPDDqbTrUhpjGs4haEtfr83pwJoZpG4RX",
  "key19": "BUAMc1633bjWeMidBxZSqNQnPzFTtLjvKSvfMDSREw9s8jL9GVo2DemBpoDQz3fa1riadUFNufPk7WAYLW8agDi",
  "key20": "5Gt9NKXJkN7atgoPWwu566xwsFGExHWhy4J96eWoC6ndt3FbK4KLNWzPqWf9bgRyT7WXiCMwNqrjRCsmUaFM81xt",
  "key21": "5gQz5W6PiGnoQ6WicX8hciW9VE251CkPpqTrCaNJBXiHtYTDfuxGoqhcwVe389ryhtxPxTkE8HVhny8QR8C8cbgX",
  "key22": "5qksmcKTUX7pAeZTnERyAqsy9fwTJu2ZojnXRGYaB22oA2hjyCi35mpgcRMsVK2ftMiEwjHVPNXVv2PfpucsxouV",
  "key23": "4NPUmZd944AFRViJ5SP8tazBjUDr4LJcg5u2WSAa49tPcpwuVXjBxarcfPaA2v7QZiYAnTKxPZTbLAr4KhHy7Cdd",
  "key24": "4hWf2bnex9RuuhHWwY1BcWJPjxsgQj62K6VfYhHF7GVqrGekjrLvq2anrPBuV9m1AwJGDLhTzeHbaSQFMq2hYUH",
  "key25": "KAYvzPX877oZgE4RXy4nPk7keaUh1b3uw52czErswtv8ZaRi6SLWSotvbS4Ju3ovVsLSmhts6jvjJHnxE4EhX4Q",
  "key26": "4yQfKPcYDDnX7a5dS9GoGnS22rh3SkhezTGtc47zWS8btGArJELu5LZXZBmXfwgSJ4v1hHCDzaqeMfaasS4FwsFn",
  "key27": "3vNUHCpjSwThNdYyyrqezti6huysB2wmjZrJifgKpZsAYdX6sqWqKVJi2uhfLSwpiSUtFp3FdBdzSy34kcdaRWk4",
  "key28": "5xAmasYaFnGig38z9sMsifYprcrRwZhhcmLWpFh52xAFsCs9GVVVqiYdUgwBwvAVKg7VAUNzsmFkQzSor7Wb7ugt",
  "key29": "3BAj2KbqobtJBrNrKkhwtCSEzfdNh1Rm5Ezv8HZPkqhUgGGkk84FE9DeW2bbWruBBbsAPfdCAnmYNnckoY5Ph9gk",
  "key30": "bhaULVvuDAfRWpoaW87eDt6ur9fNC7P11fTXK6znUZ7vPLfu8UWwqHKuJ1pXdEAvkqYHvnZfLmseswxwi2pWszA",
  "key31": "2cPEBpsGu6UpAiGaZzdnAoqg8wCPiw6rk7USqjAgUddUGzxmptRhpaFTvH5xhZ79juLBfaGDJTbS3ST84rBxL5hB",
  "key32": "4B3fLwxDeEoDvKpkK9qWSz8xERLsSrEWwhPdgtLv288Y3HU8heEaRMtWE6mqSbq6piapXNKjtLSPEFwKWbzsZqhP",
  "key33": "5J77gJtEMaQsWBmRyATYirnCxpirtfvcqz18zomZpNxthmaZuM3P4CWzqujVnyXp9sFYVyhR688vbwd6CqantnBr",
  "key34": "5SnuGDT7rVLPoN4hioLfbSgz1eykcoUWzFv5BWmanhBkGta5uUZdsEWDgRdEdDHMDM6HsuAh6opv6WWyxm24UMSK",
  "key35": "4FucURhThRAe56UZFJgwVXb4uuYCxHVwx6R2kpThTCmodSp8CWqbRLp87uo7KabVRWs58LLa9oXAiXWBe7K93nwm",
  "key36": "3F6p9xNQYunE7kGoesrC91NmL4chterzu68qRZUuMEZXhsNNyBEfuXjnjXn673FeMAHnxV3SqeynAY9u9Yzz1rRT",
  "key37": "55ERYBATzBjKKV49rPsxcM4H45CmEqvkuWwh6CyurLog68XDarcveJ48Tt4uY2s1W5uDh8Fa4Q3kzVJaCZ9yRrvG",
  "key38": "4rXDPvPC5AfqmyDvoDzPcSaGDrJc6cbh7vGrmM42dg35pHYxRNBHjaxq6tG1S1dQ42mrCnetnArVTrRpL4UFAvne"
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
