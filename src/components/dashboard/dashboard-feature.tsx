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
    "5nrEAPcuseuErXwFpTLwo5GjHRkyYpGujJLUucKJhBaiDH5Kk8Poo2oESzfdwWyS8JdBoMfnhdMD8Wtf3CeSDmgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45GvbVQc8DJRP6d52cBDyng4SMNfVZMXmBd1SNhYryzweRCpN4JCec85soQQKEcHA7UJsTeMZ5pE2qntkvT4bxdL",
  "key1": "2rxozQZXEmAKb4ssxmFQzuqAw4EpRCcwsPXS7kgjfqTCfp1a9FyhmrZqVmi2uA3barswZ27HNvaJXBtutH7Y1c67",
  "key2": "23iqKatEHaVCYN3yg4pLh2tDvPfDfgvq4XK9Wgwq2tHZ17yGBr3niK9rc8FbG1sfN9yWaTkySyuYRYYGkn4M6xhV",
  "key3": "63Vw1ywAJz92aCMe9GXXfHd6Grvv5z5C6rm9p7UjabdrRCXrTh4C2NeM1d93pa4FmWh4aBhyQYQjmRaoZ3syFRcX",
  "key4": "5gQcDXrzkmDFsXHRFqasWt4gCMQtVTZ8Pg7HAY2sFhpZBM1QeG4rosuaupnGZ8kvZWUdFuA5rXfnXNQZUtoEMjrC",
  "key5": "3kydFrGeNDMKZ7ekQTGewhtajpDqZ5Me5Ke3AgcZqjN3kRhCpfxWtXK3aizLt1JbqyQEsLF3M9pwzeHQYx6m99Vd",
  "key6": "324QdJpoi7Km9HnL5CaVX2JqN3FkojNWVDgEU2EBV5FnCoiQRDtRguq5uTdVt71hzvF3vAYaYUi4ijXsJoYj5yZJ",
  "key7": "3sDQzVZ9s5ixFwrDgBg37CBXtZ6UjUY6J4zYX7jMt5C6YDG9FC7EgY9bvEAUZ5fP4piAQ5LMUaB6XJfEgPZneXtZ",
  "key8": "HuAM8yzHbEBP3XSiNqoMhL14hXE6Y8LuaFTkSqaD1heFC8L7tYGiN2pRtZzjqzVUE7CSTzF8eYh3CVKF95A2Wmy",
  "key9": "5a7kZVHWdq6FcvA3ReMvuBaJEfEnQ6gX1uFLvTZ8JiLr2xnPQJCTSP2VHKRzwxLJKCD1gWtiKKfuhiyR6Z1kMrn8",
  "key10": "3AQRyMKRmCDsxU2qe3d8DiZenyNH2G55y76cwbQjd2ffAhmVu3UMjso4XwsVzZbT8KbHgrnb1jZPjCmpEU6pVdo1",
  "key11": "2Kbo9GxSWVi7BUyrgjSkEEBZGshACfzbsG5AFa3Me7dnM7gcoS3AC5nKedNyMywWx1K3HiP9R5kZQMP5anwdEpSX",
  "key12": "44LbSP5PNXAZJuQJMFVzxxNKGRX29EQPCoo9mYho6oziNJQnuF5pqaHuBUmKu1BwNBSTaSSrH3xspFPQLmZAZyn",
  "key13": "4NzZVy3dm6Ef4jkFZuTweXrdfGq3DiPYyRECAi21Dixzmtjj6YHWJ35LT6DwbjifXJvJrKQFsC1k4w2SruCRSXwb",
  "key14": "mqcmHWjXhABUtEoHoJcMyH46VwLCjb9SNSn37RayCaLsnJ1v34UdRjwuEoE5yeM7dg8NEfgeyRsdbJBJHbHreX2",
  "key15": "4cmdNLbiJkL6GGAzAcPnuj2wXq3JU2AZWiVBWg5JrvrHn7sT2Ws5ijHvzdrSQZjTkxcHonBvLHneL2bwxoLZm86F",
  "key16": "5gKdyDd8M9bu7aAk44UHfcHAYMqCYULoWGU7F1kTfQvHdSuKeqs6uUiSkjoTJpEXheFV89B8C9svHCu2xNdx4Awn",
  "key17": "4dXyh5ba7E2KJSjkwHTohLxHhGKCYQTciJk4n1jmwcMT4M8vtWvsykw1ooUpoKYEk29ad5ReqD4sNpnZ17TbjyKm",
  "key18": "H6LGeCHyivayqXqqf5sy7rjHxRtt96NZhoLYbpPFGG1ZgCKpaCDhdZNKogkZNWyRH6rPtRDBSjnuy1YPS2FgsFP",
  "key19": "3gjrff95gs7hitXHpowtem6gAjrnS4JD1iVNtVGNVnmPswAZxdoQMHYkxrTXuHQrASgWRx2vb9RzTkerna5TCP9Z",
  "key20": "5kNk1WykYnyHXvSoTjiPqfANssWAqnvPrGxURyeBKgDLYr3QTirey6VLkVJWRueewPts3my3avDNCV9eHGt1Q31D",
  "key21": "4ogktQiz5DxAY3TedELKGW6wDdxAnFAzjUgDpztQ6PG4YGsY9Yu4ZK1hV3x5UzCnNPocRoibzf28ZWadfcbvy169",
  "key22": "GJNmZ8khB9VBJnGgWnTDVsR8s6CRE3LQctmwAmHiEFwcLnSzkj5nFTfmxhyoo6GrQJQswUjPo5dosrCTZe5WrrK",
  "key23": "3sx6fnWtUm8gx6pGLUbr5QRzrYDNyvCHzDvUUvZ5BjfCHCts8P3DCptCchtyEqdzsfY15ezkgWp2pXdfjPBxd1Kx",
  "key24": "3ynZrVdqB1vKcXm7CMsLUJMHEwg4r8JY6nhbwXjgd1ThjTYekjdKbL3DiajtEHbvZLt1LCW8A3GZoPDSFLfsPfeQ",
  "key25": "pQU4LZYq9dSGAtBWUxrofLM1sYEJ8SHfGDMrCXjxMvvjrjazc45sDDzBPB3S9K2J4fsMWY5T1ZW3KMhjReGb4Wh",
  "key26": "5rzHqpvi6yuRyYZM7n71X1wQ11FWgDfjUBPq2VEueAotJebRaYARQ6QJSnLB5XQnaTisjXByeDP6dUHpP8vLLUQE",
  "key27": "2WAPbMewL3XaF6S2SNwDMiKRczNs5oRBfG9rhrmhUZYgEyKzqhBHtnYrrKuWbdhvKpTFjRvji8rVbPmSKRXzJx5M",
  "key28": "42rSEmAQ7vSdinydVU2toNGVMtHgrfd3j8kWjxqRAZCxw7RPoQK73ce9gBJ3TMwmid67WVtYCCU6zyTxCPt73SyP",
  "key29": "3dANnSAxqVp39d5JcVL5jDDim2vYA74iN9rWPstuGo51KqWVeeARKCijzHJPz2orWLro8NUBoRwCTtgUrvpwtNFJ",
  "key30": "45YuiTUY1FhSvhpEU5tNVEgdi1DpTzHL2MRFf7DLBecMXq5ns4P4dmHnDuu4vutY6hC9oxgjajuAXQBPbP5jVCSt",
  "key31": "byWUCFy6y8NchTSiw1B6LtL7AvWYweNHjR3RkRepZmYsWioBVb6qvSu5M22qNiotNvqLmfzhDTx1s4mLMBNQCgJ",
  "key32": "2pBiBBrcDaLk3TVRJ47cqZ7npvmYNrVP86cAqKvLHANLqJB23yLDc4Hnxb1D6f44Zahqau7JJVqKUMaPQcyAU12t",
  "key33": "CvqzygpYdsZPGwSFDTNanycGU5cnVHsgkTNsbyti8tKxXq3nQKhhiZTMADfFSxYro5YHkCUi6hSFyiU2MVLYBrU",
  "key34": "28sCDYzHusedmxCoEswYnKSNLVtB8cQNaBjGFSAaaDfnwq1YwebSAEPGX9y8uQMd77iMtHAnLZrPubUGuxu9DWYc",
  "key35": "5qkRnVTDxvetWZK792siqiXrHaM61NUCpG9QmJRiuCTNc2jzM6bKA7zTKJaN55jpCs9NBfnZg7LtY81i1WGNzfHG",
  "key36": "5BsvpqwRFmJkdu1Dw1FgzwWWExNVmCnxxJDn6WRzAivNhwAqW8FcERJH4aAokhpBx9jGYqUqYW3vyPZJUPCAG7P3",
  "key37": "4sEvqX6jeFc67ApeR49suaQHoaLgCeJApxEYi7h2PpLDn3T8npRpGFHzoYGjRXJW2apzoQGNGpk2mE4rGdUTyuco"
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
