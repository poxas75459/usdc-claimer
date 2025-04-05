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
    "49zErKJw5VgunpHUprEShqDnsa89YiFLN8NPnC7KGRK3KbVdLvwK8Js3h3eRijBRB2dpF5tiqBxsFrjXChSzSgZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bjGjPP1TLYUs5Re5bBqEFuWehuyQGD5w6UY2xE2mLNNUNt2ZLfz3NixNfagjbpehvLPCxbdjYYQBFPtMZPdWPjQ",
  "key1": "4TnQarsiyHMfT73ZmnkEVsXXVzpR8kMAgPT8rbPrdoZPdQ21FZfxeD3B2F1irMQv2v8LinuN19BhCEUWKvmVQhQg",
  "key2": "a2xA8brtb1uhn1g9FiW1dMzYSasG6KPZADo29PHtM9KMkLFJP6BbLxNrk5V9vNM7M4YwzpDGTzeEwhzwmyBuzky",
  "key3": "5G7thzimRdbMxsLifHtAUWSZxziVSgG57tRLuVdA6piJwuiqR8BcqPeTNnBx72haojkXu5tgPo1DZPVG7o9MCZJV",
  "key4": "2Rgk4Yxcgsg7CdfTzHVWQrHTwSgGYw8Zy3YH7FkHgURmYgaNTNc4ATupV83M5qfAmD2xhBXndeNiRoqJaMbbeCJb",
  "key5": "5dNSXxRuKcxysunk3MR2cYm3VubFoX8rcY66RyiSTfTGDRDhkL5438Xn16AZTvN2AcpF7ZaXwgVZMGbtTfo18inT",
  "key6": "2CuDkZiGJY5VhFak6k6oVqAqs5QKHnghYZTKZrj3ZQ6uu7GEkh9SYgCPQkUpu96yZVi43KZkvGqodhHjbTpBkpiJ",
  "key7": "u8qMrRw195UGnAxCfYDPXyNXTEa8F5kyzt8XtMTy2JkNraYG2aq25UBUZGEbk3Q7juoqWcywjzaKanS6WNHxe9Y",
  "key8": "4WfSpQygmeRVSPTTd1PiWhcswgNLDuZWVGXjYefFmuJLbfctNnxvBUShkkDAY3WCop1e8wDivZ9P7wFF7LbaERHb",
  "key9": "4dGqHFcYZMiNvvEnPYM9pwD18KhkHztq7s66U9rJyi7xyLbeic8TtDFQ88MRRkiihCa5QgmpPR86bwhTPWhMGCaM",
  "key10": "3wN5LrzZpGPMv75rXfyNxwYe3TfBi9SXkah5X6MnhuzRo8kVrDTuZXF9BdcLYZpUkn5eGRt7AydJfQFnkDjwnq7s",
  "key11": "2qrPr2QL1xAbmT8y4ZmHVGeHJqrfBe54MjVrBeQDA96A19KL32eGKUwV9BYnTfot1JEkMpVF6UDEfejT7PoBWXpT",
  "key12": "4HRUk71zdAezhqodwUp23wjTugcXfTrkMM8BDXfo222JqyDzCY2LTqGk2h83BqZN4ZgSBms9MCkd3e4KMZPURvUS",
  "key13": "dMGEH4Z67zLhEhdJwQ6NGr2fVPBvr95oYo6dSqZMQifUj1Lw4QLvhpRSQ4SGoVQjtyUzYnEMorfhBWvdcQHa6jb",
  "key14": "4tCJr3H5PmXAvveyND7jXt7aJVwWnx36C3ijHhAjKqP4gvhvxxGecUs121nwRVAXPfuMYby2S6rtXoZ277P5jCPQ",
  "key15": "RnZuJPa35Xo53nmUXRrQex1Z82VQijD6oE6GVaeuUTPTBaC5EHqn2vGqZetfK6EPwGZukVv6eawKXiaD9Mho7mq",
  "key16": "3tgdRLq6Jr8cgeY3YSZgerSTP1f9b7PgP23QKRzuqz5NYHCu8DcWVNFLbrCjGDGx4KuzfsMBgSfRxtbeUU37RQ8e",
  "key17": "5V8dDtf8GuUqa8xQQqWM6g7LeK5gWWmPWXxYYRaPWiS6dSZgguVFgn3p2YkF8WRQE1f41G1tFnGDyJFXCfNwvqNn",
  "key18": "3Uf1KWpsJyoXyWPSxRuMXvBU3fyrc4ersFT8VCUzD76n5vR1oQx158V5ZEasn5Q8GC7q5ZmBGJb7wRsPc5HJBsac",
  "key19": "4ysy1atAzoci8xBwXMywni9YqtPWy82P8yNWFv5Sd1TwYfx9PVRpJAJGLNFQoUEBbNvXjMnJiaLJ72i4Sg592hgb",
  "key20": "GGyRFzji5rWAt1QfPbuxSZrFt16KajJX2en3jPR3vbaN3UsUMcivaDMYYsuDRCtNq6Xht3DfiFnZjwPHZdPcVR9",
  "key21": "5yxvgpMgkaFiWRHVBgMrRp4HNrp7BriWtjwenm98LVw6ZdC2WnRRM6Ndxgb5pEoM9ayfWDqkmPXnN98ND18Up2hC",
  "key22": "2S2jqnshF3VzgomKFDcChAwM8Nav5QN87qD3dpwxsLnYnwt7uLiGXmNXvvVWkSTu5RiFM6jN6UtWdk7AvnukYNFP",
  "key23": "31bCh8KssnXrZSumaHZEES6bWfYykoYwKVsRwHYzNSYiQ2KisF5ZY48ajLFZt3bgGjFHvasfjEJR4KJAHvRP3aJs",
  "key24": "5a3djcvooP2apDfP6Wuydo9fEAoziTEKEW9C1ayWziPB8V4JFSDnA7mikJN8mftD2ekrkT3ki3acHYDWEVversCr",
  "key25": "6h9VGQE1Sd8agCkenh2YFz1ZuZGTMhqcc34uTzYehBJbZvPq3WMyAibNKUfAJAY8q2g3Y7oBtN5MTdWx4R8QvA3",
  "key26": "5UVuYcf6ZmfFXoCz87XdqCTn4Nh1E6RT8JehuFV3xVr5ckwa4cmyAHwZGXzBUUAcuwGSahNiBsXzWmBm5bDtFgL",
  "key27": "5gKrFjKHN2CVRDXXxibPTetBeeafifBDKgqBbhn9a5Bq6MBP96kmSrf6mKpnuFR1JyCZoEYoEZ6hUc2n1CeK1cha",
  "key28": "3PoEnmEgrzK2JxgLtQo3eL6571aEvanSWwS69fsp9w4eatkaeG9fJNXsxmNzsbLaWq5kufwfHSASzLtjbcc5yeUx",
  "key29": "4EJmfGCUrtJYN8aPJw6fK79HBPTPutmfcRBY8apKeQLbdf7aQ4cPPZLj6teupCs7mjcyVTajY3d4boqAx2rpTwYL",
  "key30": "3SCX6E861hukTrZ3rwTdwSS25i9quCszh7HK9KY2Bph7AqS6Tt7u76ifdFDbeLo3R3XMYXF5z7XQ8NZD3v29Fz2R",
  "key31": "3iCBsXPRdApURAX186LM1kmxSRgFoz4ShxWDZQYqZsUW5efvYMUqsCsfroKrofTrCjM9DStRKdPVHuL83a1SxR2",
  "key32": "th4657EUVazp5nE465inrZ4Wt7pR3dxgSAAq5zbHaJ8KStYn4WLMa6qybiDmCNaiTnHBDZBjyFhxAjhdfo8X9g1",
  "key33": "4LQ6n9wD1zYihhPH41c2ujUZ7Tjof6r646ti1jEmVZuqzgHg5bqp4T4a1FaVkgZA2qvarUeZk5PP4EdhhnfCaBYt",
  "key34": "2Bn6oKVfhuF4w5yozUCr6ue1yGCzWDacmLKKJTGEkJV3g1S2tZiwmH49nNzL6zGnHpcHcn9SvSoHy2A2rGmmDGQK",
  "key35": "3sVWgxqbo28E4rBrZvC5Ew5cR4q1fkAkh2FfsdkNAWvj3B7Qv7FZ18khh5GZWQuYNwiZZfXWR5ePWsgoVQViygCC",
  "key36": "3sToJrQAdhPQzsLX5UKxNRvF4JrGUUVuC4fJ4dtndfPCQGN6We4RPeGgD7iU3B4ovhmBqYkiQmgmJniRKjPfNwS6",
  "key37": "n1phHcsGD6Z5kMwaXvg4fgwShiT8EaJdx9pYXsrd1yegRTZCPkU7GwhktCxnXogGd9QQM6nbWe7aVX7NSgoW6Ww",
  "key38": "3ics3VejmchZtM7F9XgrcuPyf9ePVMebFgg6rGipXj9p32emiGm3qyXai282WYiCgfCW3pb8VVyZxg1JbY2uHCPW",
  "key39": "npUshex3twUqRWSWyMN7UkwkAmHxMPrGBvcdbHbnZK3aKkYvS42bD5Ni1icxNqk8VohypGBPadRy7n5waRAEsYk",
  "key40": "5bRUhjgoX8i2uRDdfDi3k4bWyRzbqvPZmLB7Kv2Ad2aW2NgsmNVqm2Yjw4uF1PqX5kHrch71haUkiVB7dQtDtK8K",
  "key41": "29fPwDoeKNB9ygaVXHbrGi3z3AZixMLerYEJUYWTqUpDcEpzm3jqGhXta1ktVJH9kiRqACJSR26yuPJ2pxoWQVWZ",
  "key42": "52GwWEgHKeU8wS31ixJes2TiggCgPDa7yEHeUwrnsF9JTeLFfUFYVLXCy6X3FXxiEfKFTJMhc8vQ36S3PYWeaYJE"
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
