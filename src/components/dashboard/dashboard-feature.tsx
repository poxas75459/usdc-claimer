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
    "3tgZAv1vkS1EPBENhhxsnkfU8VwKDh2DG5yqNSqobLqSSgV4o8j7rKVnjNJhR8gFnftM8Gj6Ycz5AJYLJyZjrtPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k9Xz5DqK83QbK8UaVEAcZvkaxMndjENCd1TnceqHdFvY6XSxsou3ZCJTSh1ccCvrAQHzjbgU69x2KmBbnqGenen",
  "key1": "3e2UNxtrdtMSQyLjevYoVaR77wEurXk8LWCDdyrce8qFXNaCkpkb6GAPr7BCqS6N2Jb7fzRuF9zVnZwRJo3K7KWv",
  "key2": "vKDfmSCoeZLF74iSB1PbNrAEoV5soai9gg1V7sfpk6dsghnrQ157BHf72ns1yuRVDpCCL2Tjy6xJGmJjyRf9Cid",
  "key3": "43FRf2ywFzrqpAJ6Netr1JDSkTWLE1k1r1VprRrhwGhiEsBwyDLNsjdBZms42NhpUmkepdmcPnEkCuRt1CRwas88",
  "key4": "5gQJy5LW7FwZRnyAABuDeib9c4L4szMfHqhgDL6wLKuXziCqNGqP2xUCYjxePZpTfeNKw4foaetssxeFqkDt6no",
  "key5": "3K791hpcdLkvf89X9kAjEL8hEsurHECzLqVYPqrUDkmM7pXtfNkquWyvGgSDm3C71Av8Xww8KgGf4hweyHLmK4bD",
  "key6": "5GjE8TbHzoYx4vT4gkUPrpmC3Hgmg2meypPu7jAYGuNeTVv1V8B4obsxPvCQxWrLeNnWtG9Gruxbsh4xT69uFKvV",
  "key7": "63RZxxHxy6dXCZ1jGGYbXPMUW1HidbrjdKtx9VxSYgiQdv651TtnMdqRS4ecPCDYdj9ZNrRyy7ioym6wvrvQdyut",
  "key8": "5MpzReYwHsknfaKXWNrav8xjimzsZpm61mfBynokYn9B8TwFApnNmWr8U4qPmMrwNe8mAnmFh11X1BjHLXQhpwHu",
  "key9": "4zoKmkrHkALLHfgKiFVz1CshBvymtqY7YT5Kvr6nT3HUSq3N46yVy3emXFdLGY3AGLrgZ2uCcVc5Y1PfZF9QbQYw",
  "key10": "4ntFJrYtjFWJewpNRTTjdoEtmAG1JCAVBx2bV87DW6JTgQW7Bfpr8i9LP4rSeiRQXdUJa9UdDt4oJx2RZMN7b4Je",
  "key11": "56dGMYrfWdxpqi7juxpD8MfTLZLSKK3fNSPpNSTWqNLbM4DTraQnGvGSPyTMQWwG87kD6P21XmA224hQCuLCtAbt",
  "key12": "64Msqut1qqQss1NG7FLZNnxMJhd7uw1iszH52mdFSLUgEvwsbRvnY9wTdiGsrFidPXXiYaYKs4PfNqYLpMoRzaGY",
  "key13": "4TCS1cTcbD95TTVLgJPnRwD6i2MxHzuNhm1wN6ySXf88hMo4JVFYWhYRFLbnEFAUoa9dKqvHWuN67QWJXUrAv3hj",
  "key14": "4onMZotr8BWXN126jmfd7YbscQcDEfTG6jx3ToFKhpMoHdbB66TNww2wfvyPncGHb17g1dZ16inrTLmdsnUMbJme",
  "key15": "4tKcSriaj9ETbjoXHRcqPpyezsvvhmkhDdr7rHKQ6uUMRqGr2Q6xh1k7GTbncxkHv1fQLUH8edUpgRqrfk2DkLwU",
  "key16": "3YaTzBxeyuVf4WNb8JBV4g9PdfeaAYZavohHCRMk2SyvujaNCLkcKdqFQHLcF73K6rkmPKhJ3Ad3tu9kSgeh14nt",
  "key17": "4zA8aYxpScvW3nUjmWCrPLM6uymyV8tnWvz7crqs3JAxsZ4UWAMMwwFggEe7smXYs1KCkGh1XVDwBhmK4P1r7KFB",
  "key18": "5JS5fcz7cvJgYKCyXa5u1PacLq9aAre3v36RzgiSUijiD4VhzS79VaPi2auSXoC3LDtrKvCPhqKW9qqAwbXx76tj",
  "key19": "gh3M6YENtq7AgJxDpSPFK4HNVtkqJps5NWEbMkFiduNhJ3ERvXjVUAvUNudJaLjvAwKw9rSyXt8UxM85MzTGZ9m",
  "key20": "4cQp7LBiJqGgLtFKku7mEBJG9N8QDuNjqBzp2sbY7NwXtNVNaPU5uuQGvAu5bkiYzTtvXfamPzwo7NYRh4L9ok6U",
  "key21": "67f5oVFRr3yZ8mVKAuPV2NGQTm2az7GmcTUL648jyL1Z1uwiDH5qJtstpdXGHy3aM3Fou9fMoJuKbEsyjWsGaFff",
  "key22": "2YZV1dXh5FGXsnJfRPaLZo4CrtfPGvFW7dHGJmWbxY4j8bdF5Muw6FBuh5BXXaUHVPaLaXG2LE7idrKrN49K37j9",
  "key23": "qM6xJ9xFXxNuSf186Qph58gWMFCU5Q7MQLYzAVsNsmXopjwdSaWaTkpghnfsYUQPFm5LW2Pw6vtVcxiaxnQNCXc",
  "key24": "4L2iDhfD2xK3tUgTW95JMoF4iP6b7uCde6GBPwvhgdgvRHScCK4FKZrhURSF1j2AEQbJ4vuPQMkMu162YmrcJFkQ",
  "key25": "5ooWi29136aQ6cLTqehfCBXVr4PMgDqVYbz6RDNkx9Krr2jjLKkTboJczxV9ihLyNhVb9F2QdvrQVaNGi7TYjeZH",
  "key26": "3Evh1vyXWBogWCtGsJHodWBKaaffoNxRVBWNwU3RCdvwCauR45YPgfy1FSQEhrTQxefaZKA8b4FJrMdNngCTogxU",
  "key27": "62PMoWKALeg7nvonWVWoing3zio6jZX1DLRFeW9yq3GESStCM8j8ssfJC3sQtRRymZmqLZYfry4ndTutd4q41Z36",
  "key28": "2RztrcfzzPpbcDRa7RiyTfo1V5snYFUvXnqa3MJZzeDJyjyF1oPU8zue9ebBAzeXySFprRnstKCDETjrpFGBcfJ6",
  "key29": "2BJnEzfNrh4jVK6CgNXP5bAHpVwgRm7GybVhQ4iyQxNGJ8EgVtk12AiTPB2FQx8kiSTFHrGcg6ob1dZcmVLQYxi",
  "key30": "35EBa5PuJh9LpgzrmtZwKzP2zZMpdJ3wkVd6LEAYyc9Wcq73GadKU9QxgmeDenJ7811TMnBVF4GwoT6LKbxFXxjn",
  "key31": "33gHXw5wzRux2JuXHiKqmq2ojsmKVRbjkim27saCHxJti88Y4pLVaW3UZCebvZNtdpfArA25G8b5HwBbym8ppEZW",
  "key32": "2eTFpg97C5cgtvJxAiVsbjNAR5HV4oUmw7kgnHuS51DZa8oyVMG7B6Ap5on3kk6gSCEH3axeRdm6RnR2XXoKuBtd",
  "key33": "i17rmyr4MLXcVSE9roeHPzGvuppDcAqe5rSN7fRGjuzDaATqMriWeT3XGxv6HHbBQ8YzVuf5i8wLmkedNN7SeUM",
  "key34": "EaoPYWkYcMKWCBDyWWz8dL2mpwc9sL1PURoDgUg1fWYBxbMLzBCQVBQGxSHFLGgABcYL7R351FJ3MxPFYWuVPNN",
  "key35": "2EU8uZPP2zExJUyqhn3ZShfKcRasf3XwdzTo2KLWwTrB2ZtegJGz67C8Pq3TDHtTSbrDNjMmX8cVoZyUoRFLJtfx",
  "key36": "CqgmrYaEdf5hdkeudnPtkT3vh8MQtbVERdNhJAm1f7JkixfxmoYhri9shKvp2Cmb8oqvAgGEKwvqLxhJ4LrDSTV"
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
