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
    "Gk91z15UeKvbJET4Yp7eTYrjgBdTAGMFRhEsnQwZ1iDuCpDnNALMYzpkg9EyPSUg6RhHdwa3HtV9AdKzR7npCB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KRed7jduwBbGvP4JdpoYUMcwC8RAryPWinCJYQi18pmTnDmTuDQ3vjjNzjXC4LfC6w9YpqKw7SQmUxsioQ5J6v",
  "key1": "4kmgr43QHYEqCSBp6moCV9ogqEfU15m2YrWSqcKgfbyfGCBHsQW9etva4jZRvV3FdPt5eqoffBtV7s4BsMNiuU5f",
  "key2": "3N88zundqqY9x51583KD6eMWBXbPosaYrM6sPuBV9gWa1CAdJgBpLAdgCs8CQmUi2zHcVrqnnYuA7fqsDi69zS4d",
  "key3": "3qCq4BTU6jLLMdsywPArKUriC4ACZ8Pf2D2cghXmfHoAEzma5tkPZtr9LLbL9WFFBMnrCSgvJXLdC7LdGoHhQNsn",
  "key4": "5Eg4RgjaU1Upf8AgHVWrbQZX6BaVn4EwpZ4FJFKhcPVhMt716p3YhUogJU3VmzBRnV9EUDyiwrMQNV5rvw39XEyF",
  "key5": "L6tZPtfPdhotGwqCsH7tmZFvLFhHFiVMBBhrcnrzpahZnR4QbZC52giMhQ7rc6KvWy4jW9ShFPvEhVmUuieqLxE",
  "key6": "5hKNnX9d1G5MVmnGKFZ8MYVD2KS962t7mkULutFwRjPUy4xdQGanjTWbCH8MwFSChMjrkstPTmqfpUgm5d3jFLWj",
  "key7": "hnh5Gy7mm2GrD7gcDgAxh1yqqVhURSfuvGoGWrKDYCcihSkLrJKUxm3eZLQGC8NW1Q8psSpkrit9LzHonmoUbP5",
  "key8": "4XfstH2Rmucz4DLobJcaaKM43edw7jFjsPEdwAWGmmaXK3DL8mk5SVJhjLSJU7YnqU864NbZqRpdsB7dSbQkjW12",
  "key9": "5BZKSc29qGQijnyNqfr9zPTci79nyjgSxB6PTAy9wcfGsaotTfJqHK2zJbWsbwjMHR4h7Mmzc8iS9mhAEGxb3DP1",
  "key10": "UfYiZfWVz1AcFYEhLFTW2CeBW8RMy4KEuRRKGusFCZHxNTuk1SqTrYFasfdMaB9yvE6pkLmbeZ3gt9545UmGQif",
  "key11": "67S5nYENQArVaBhDnTTNSbyMiWppqvuyUYPyDa7MXbo42zGZPGsw9pE9whB36P98AXH6q5ZJC8s4iwrVpsdAsk15",
  "key12": "x21WvdBHriieqGyEs9HcLc683FsMRSXbbi41T1hMcNgWtnSfmyQFvjTmPaZAuLtYtg7o6DfhbsV4v7wWrDh3GKQ",
  "key13": "3okLVZwnB9j9XBcPwvPL6LugAdh4ZKeb6TPmLDT6juJctg4fT5TfN9Jbxz4spbmuNiENLJjmFDnsMhoL1S83LmWK",
  "key14": "5CayKHWqVD3attLtFJAxDvjmjkn1RRR3WT6oLZ3HARjpQCtUFuza3VpYXjjRELqKmvV3incfmLmVHGN1Lz7PuaMz",
  "key15": "2wcnHLPTZxrdEKE9y8VGBxzSBjomE7miHFmY5sgtoBZtcRzPCe8VFduVYpvQiJNsSBAq7hke8Qh59B8m1J7jKWRd",
  "key16": "3c3HqZ6hY67o2NwWyXmuwGgUAwQv1ZVchFVtk3xw6FyLbuC6nkpjdzyjKWPxprHT8mtdCbYkNEo8TmRqn7X725Kp",
  "key17": "3W6qWFdaWBCWZpRr1swsTZn2zty9PiPkoMvBUw5M33B2K6s1JSGpcvhcpiyZty3ynkSV5jaVmjJ2XEaAmpfomWBU",
  "key18": "FW1QYKUwXkWAG9YkbY8NaSXtvKX9JDbDsTEXvaFR1uKMqBEbBcmaK3TvD2iN3pRzQ9qNcHqobHS2Tr4A7UfbE6f",
  "key19": "4eFSSLxMRpaYk8Tfgi85kAnvC8nts3fN1wMgjuh1qVar24eQUxJWvNhYzhEFcf7BYZrQcqbaHuq1A4MZ3gzeNb99",
  "key20": "2su7repAwHQn7xxDjsiiTycTwMTqfBgojbpuo8yowQXg1fFdJJ7XRECEFJbNHNE9MhmxwEXa8GpeQbGBti4BQnhx",
  "key21": "45nsUS58UZKL7UPKVYpnVduVYxAV4KgEcNgsaRoesquyYAT8VBmGbGyYyNnHCJGjJd6D59hYCmxmJJSbzNJJaZXU",
  "key22": "3Sq3hnSd3vHLtgmfa87u9tLK3SrtNXgCRRenBs79xa317Ddh8wezb4neiEZPFGtgCUUjG6d4N1HKJgStddYR1Mgv",
  "key23": "3HGwiaEkAp4Qx9ajCQA4jnwN1v1mv7hfJitm549cvhyZ78aEUrBMmiaZ7tF1UREVWsXxo9ZhwU56tLXK4mCwXn8K",
  "key24": "4AKrHp5ne7Nhkd3ZPDVTx1fRdtRZV5f2RukFFYPJpWyRe3wwBsiZrPy7Vn94DRd2T2tHxCEETdqmoQaei52gyHXR",
  "key25": "BPbrvvbdCN1GUuVKmDKuT5fKPdvZWKfueUYuN5VSMe3Vt9SDag7QYxZeRCSTyodvTCJuKRPSPw5tktX49krpLri",
  "key26": "3WNdRLUAaLY4VbGtkQgDJ651hDLK7bo1Kg4rdydxmQXYZfbBccjtyfybzBrZ45RV2sah2MbBmpwgwVN3BdN7mwwo",
  "key27": "EagRPkZhurkmBynf9bLS6GdGUQPL9Nr7fWXQjPbQ9xiz6uDJmc5r7f3ANfxFSQuqf2GLTX1VQmVR1gDob5gCsCD",
  "key28": "2LLpCUSR9Ysn9WBuutuLHaHX9iDkXjqQMDaNyMJdfLiof6tWuhzjAxM4tkhcLWCPTV5Wxdkxx8L3aEkAbHnENJwo",
  "key29": "2vcKnFwvFPbNKXbP8JvsF4K3tfwLk2EEBt4JWRiZ9HMUv8oW1BMYMTEHJZzgob2efdL5yVLMkxcGY24BsYN4Evpj"
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
