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
    "4Hnx97qjNqCxsgiWLed23KXQZXNtanuCh3ETzHGXozkjBoueV3LgR1KrQsBUtXD7zMyyhbzxUjfvZH9H9c4NwCWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BVZ4hUk1vPoBLhHCZWyTztssCY71G4nNk74Ph7Aj8dzVS86Hj5X3E9cPDf8XKA7ED2qfG5QyMHamLbbrsSh4wop",
  "key1": "4f4FeCiceEYn1EwRniJZnrHvaS5DNu7C3h1FkpTYFZgBKApPiALgFM9mrtqX2EwNM6fpEqyxPHX7A5vg6CdmJXu4",
  "key2": "2whLnnAx51ERtyU5RNwM4CyQFz6Dt8ZJoFkzcZdtJJNgHs2jhiXayzqK2MeNSneCrRPahxsXRLt6a1EKjAXKuZnx",
  "key3": "3NAziFTmt7j7mbipZ3oq6LJYUoKgTYuF2iLk6nAPJeCHtTwuLLKm1FRzuiU3oawX5P2Urio8HRuqoSqyiKsBHrth",
  "key4": "hWBHpSuif24zUuFZgkK7VEKm3TjY9JQ9QdAPNA6DNkyT7LVRhoJdEVX2wdmSoAica8MoPnDVDtZHkAg7KMwvTcg",
  "key5": "27KSHJbRiByEz85TmhhBrd79XCUw8e742QEyWi4hvgJqiPKAPQM1BBavs3dZEQdW3nNGc9Y2zUL5CW2wb3HTxufu",
  "key6": "3YFLKkHQRYomJoU19FBXcvSDQNeGUqn38nuBXJua2wA9mvw4zBxY7hzeBrgxGcptG2fDUaHSBRybyAxF8tFE2mfG",
  "key7": "5KJNN7SMd3MgqqvAEG4QeBAcHpw3GA9qfs3CdE9yvwhT4wjdNUKkFfdkaLtHmn3ANLTTYNEASHrZv1Zybw5kmfJQ",
  "key8": "EUA1L8MRqYa2EREZXpsW3P9YzqsMYpo7AAZeQ48vH7m4KcfoCGEs8DDAYddwmYD57nxuuxG5rUDjdRioTBMGcHR",
  "key9": "45cnDaAiy8RaHn6oMZQ9kdtF6QXqhFdA9WYfxssjchHZtzNDauZ7A74jH9a9K1d97UK4aS5oY4YmfeyYzDjcyAkG",
  "key10": "4Y7KqpXuqV8KQXyAeu1TtY3THLUAPy1vuw3UGLh17BmaRwxeEZtJMZnqxyf47xMZCKD38bCkNfeUedYHspU3fvhF",
  "key11": "XLDcwmsUPzmaNirFwujCnZpEBH8BURRcLi1Fp5HHiwui7bXdKxfp8tmNsbmMcQwaaHu8iQECsCK5RVsfQvpFnMd",
  "key12": "4uTBqjFt1pRxv871RRAvC5N1YjHa9JimwarYhkkCngdw46hm3H4uZiUNLy2GEhyKyR9rRR7Sp88C6AHa28p3ya15",
  "key13": "4dQHGQvV5wFA3zr3Kr6pLWPeLTSrJvRDHTqPPrjSMtP2Um9VWqdrUrkH4R9aRg377ehxqLAvYyviD7gMP54FSxjH",
  "key14": "3TZHWt7gxjPNWSMb2pGYV8Btte4BKgexvizHPqFdNR9wbbWqCU1atyfJCwBxidtXqt18zW2z3o8c22Fbtyn1ywdj",
  "key15": "47S4jXLjZYJMqNoRQNQztVEgfUV6Aobsd5gqbkSUMMirDzYtCbU3g42GSxJhRY3ro1j3KYpy1KuwSTzu3JkDE2ZA",
  "key16": "4fQc4LQfGeSjWZ1oLTeajyhQjm6EA9q1W1pJKTEh88wvtQWg7biFniAcgFqH7qUaFuoWWHBzANa1SgP6arGSwWyz",
  "key17": "5zYPgZBK8PqPRH3JBj67dnzhNPExtG7xXerw5thKf8gEqeoXdv9sQzso1SM5VL8KQQshBRYzEui8GEt9YiFXDsf8",
  "key18": "2ZS9VAXJPDHdj4ERtUQDiRa8XsAFRQ8q4dMMeqk5weJmuyL3zffQ1dW7Xs1AW9L98BYE6NwdRwotcZKT7E1EFcat",
  "key19": "49Prn68ZJYW91umAsHZ4xVT5ZySir4qp3mhTKnEyKvcHsHuyWvybdJeEbdGaLPMD9cxEffb2xdkgtvxHsLkwXxMd",
  "key20": "42rDGQgX8N9MbhNruE9xuey16rLYWMRa5x3jH2M7SxprCfXh8afWRRauFCZZT85KY8NriHXKdZBBvDs3mHVM21cY",
  "key21": "4dtrmz3sCsxWFUdAuFKuSXeuTDEYB7D6z63ksRwuFyQgpApnu9hZf9sSavYvMuPWcqX1zZ9wf43tSSPWo4fN8hpk",
  "key22": "39ikdaqYCJeS56PJSXYEK4QbgZnUsZdDHe2SeqJTkVYVDV4xkqFvbNdDdEvUWYZdRrpUbhC8V7kWnZZWTAnU3t9w",
  "key23": "4BVBYiDGzN6Xw8EX83obJamFWzJwGEHVodbB1Deqi63A6Z4kVn52RLnqU5i9kUVG8qm28GeFmuGdWt83g5xb67oc",
  "key24": "2EuoMNmDKzehZX7ayHo7oNownuwMTxDNxcMTXse4u2A1cAGuayfB6kwePS71BPDfFppaPsrLXRDfjPHV4gTH7yZ5",
  "key25": "23wKRenywNQbgRytThDsAEqNnmbr4AA2vEYQR67wpJrDvvJdYdJBLuuxLzXGRmRNkvSmeLhGizwGKXN8HnxCdVHP",
  "key26": "fFGRKqfu2M83acvVUtHTbLiGqBABkjN9dPqTnqivcr1YJ24wnQtRVubD4CzrxHY5eXQJDWbv6se2EVmeMFEZjVo",
  "key27": "4FQFboFAJkVVADCR7YterLBbfrp3k155KiaXMYLbbTv9EYb2vhEcDoamD4q8ZGPyZA4R9BjPTeXiXXXna7jwKLt5",
  "key28": "5FKc8UiZBKTTWpo1jzbkWn3GPPWyU5kLAyo9aVWdEHT45ZBQQoe8Ys9Yg1n42skgV2wmqSFUq9JYHwqVsRGUSh8H",
  "key29": "2v3hLCpuPGsJqjo4Ct949STKjNuWyf6h6WEtVjYMKQAyyCrHXmVDWcC2dCNaV4T1Nx8ieiA2oSSZubbBPBzMnUpP",
  "key30": "rjqvKPEFkFinSBABKYfaiqqJtkxd9Rce3BnQP5a3mA3MFZFjwPuDoPAyZNVeCfui3GyHGSkbyKyjdSvdvfKwkpc",
  "key31": "2M7Pwra9FpDSYdTM1mMQyzLbMB8h2usr1UwJMdMaPFN48LxRzb43WPnEmGY5xw3xsj9vw5DdLa2XH8B8D6bV5Jto",
  "key32": "3n8EdSLnEfn3sPhcKwiSTzdDq6dUv8b83oBz1foY1NHj6xxdisaLqWuK9ndc7cxj1P2PmTVLu3D95GY8iq9S3q7e",
  "key33": "5H9bxQyqcL4DRZU5uVXrdaWFZcooPRDHAVSMGytY8pFWRREswxPREDUAhfDCErm4nPcnqcVGDkebN1xBAbnVXQ3m",
  "key34": "5bi3pCRLd6AvmRW8tZocJKKMgzCFXU4v7oZKReNPmqF3riFL8bLYM9kS15ZttCWkUzqGpHD3ZPzPKi68fEEWJ3Rp",
  "key35": "5b4rRBdTesfpbz4hKEmepY6GGYizWSjst2UFGUVdmE5B79cmoYmbuC2Py5td6A69Nde79qM6QpPzjoRnUoYzB15q",
  "key36": "2DbJBu4DdNbX57qV7JSrbEGqNFRtohJ9Hm7tTcbqZ2qwECeD2Xqg596T7ze9S7Pdph9mTz7TzUQHe7EommXig2MQ",
  "key37": "Rqt75d5MKdGDVyu8JD4yRVcaqPksfhavr9nuccrLj1QrG3WF7NFKzc8Hce4pTj9TmY72y8fQe9HtiXMa9Ei6MsT",
  "key38": "2f5weiwnZ8QBzuhrWFPRoaE9j4sfkm79MbuRz2uxRMQzBg5N4zRtdxiUUBVM2eS1T38JpLRwH9VftP1WYgVxFJYv",
  "key39": "g6edtgcucMophSecyKPXqYZ2aoYoXxeCVPLqBWeFyaAALHrdhGfDn4zrikAYgRKqciFLVFfP1b3L25BcCVJNGvr",
  "key40": "5ZGoxd5Fyu9UCW2e8AxzvpJPZad5srHs8wM2ScsMEHukEfXR9KtxCcoM3CqjXBCMaJ7T8Rm4VtXQksFHWPzZJMBc",
  "key41": "4DrbKykWVksWPVzRwWb2amo3Sn1GbBYbC6NCyZHmD5dmH6NKrQUxig7uSGTTEU5rWhc6qu8LLgKABtNTiJGJqRVL",
  "key42": "5XfPEdPgtvjPYVJq7EbKbVGV425DscqXXp7PGe9vPQs6mTw54xXRiEMU3FpfG5PuJjJsEBbJsCY2TgptQnvqCsiA",
  "key43": "ZfoWCZdXTAu9ChUezxXWWU39ok3c5C6aWMTpjy8WsoeAnmKiYaG8yH12kuy6AJZvGeJhhBzt8ommJZRMeSYzac3",
  "key44": "4PiNRkW4ubBHcmfK2WJWW3o6jYRdJnCAyJg9EmyzuV3Dzbc4peELsKRxvxLy3QhqAS779nYnar8USm8XfL8t4GSa",
  "key45": "4dRTxxnJzF1xYwyCq6pw878YizwEM3MNoZLWQHE437JdxqHAW3aJ6LFHCPfVT9rqBenffsbj1UQHcwYpVbhjvrGE",
  "key46": "3QoVPPxRC6yo2e65extVvahCT9v5yucj6ugAWBnRLxyw3jj7gEdnTWNwdTmm6Tqi8qp9SQkSPf98nYCRnUxkRr6W",
  "key47": "KmN234nXyEdxxzMFADaktmD2oayGZPDJnqBN4AHvuCpKVFXErdZs4Gu2rK5o3eBuc9pFePgT6atb1FvHQRemEvs"
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
