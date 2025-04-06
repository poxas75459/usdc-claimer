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
    "PcSj9uwNdC6hru4CLawZVkQDbPuzenHNJGkb3UuGtoju9W1W7ZdHZkmnM4NJC2oMdannYZNJ6wBVi67PwHzo6MB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nM3fhEKB8LdjwRUWT4BePJtysz16yq8cJSmhaFh6uDc76zdQX8pcSMJUpAUezqLsnrC75C28uDp4SW2pP2WJZki",
  "key1": "2ydyt6cXG4XtTay7WCkk8bTQQZLaCmzHpUutKuwhptQjvxkRSedWqaVXYqBDoagCDQjnGbKfkzSPRD9ZRAYAe9C6",
  "key2": "uZwgfqvN3V7m8jK6AjW9aQWcWtKpXn1aQ4gyVWdzdQMjBitQ8HSdYN9Vxm6iPbdHY21vSKATcxHVEHuy44emdLV",
  "key3": "5McccuyS6jW8LvTM34qGYRgPoDLLWkQQUn1345J2sZgXqaevyoT4Hwfp8wadgW9KuxhTbrRTxyZPRPEufbBSwEKh",
  "key4": "42264ZDwzynggt67cr18P8CtByJP6ixy2Z3KWje51Smvon1AndHFBrXH61qNi88KJpUYGNc3wicgWwVCTZDRAVen",
  "key5": "4SPZevqrNSrTXLFQxSsuBDCy5YF9hnqXNmydLtGbmhvP7MALUr8ExKvB4GzTNk9nC2RiweVMaaz1EM1bxJwtQdiC",
  "key6": "2au6kv1CzVCi9jjNU9n2ZX1Jp5Qzwum2jepm2ePxbfqb5V2pWGay23TbL94g3rCVL68Psimfty3DVohEot8Q3LwT",
  "key7": "3HJjh3cuTMEWgj6YDcJ2Fs85dJGKDr36uEQXqA8eYPMwFpoKd7taxLH3mcwExN1Ur6o2sjKf9z5aNUdprPmUwqhR",
  "key8": "42KJjgXStUj2w7tbdvq3Bh6DWxYfQG5baxZaW6WjK3vBmjLreHdGk2ESvugeCJyxWJg4jBXTgbKrBrnRmbiZNdgj",
  "key9": "2xpC9c5RXKnBR7iCyVnSuUXWi67QDE91azQURBKstxERfNezh7ErepEnuaRRq21BYW9sVQMdBsr2b7Ya8HARycar",
  "key10": "2H2Rhh5pWQaqSQhe81B1MdvgEo4FvtPDy8xei4bskxcuUPJKSBkvRL49RyckRqD5NTryKXdwAeFnNp9RMMGgisV3",
  "key11": "3CxwBkc3V8SUtDyp3weE3sGNVd2H86UqeFpfs3679QLpTbi9xYUfT3NXMGgayrCrHQ6rgzs6SRLZFckvJxsmL2Rg",
  "key12": "2t7oVVTJ4M5hhVPewnKfTt5wV4wVKKr9rkD98A3DxXXbM5yJbkMTc2R3W1drEBW4e8jDansxcNU2fPzvbfGFDh6G",
  "key13": "2JDwiV1jaVN9mCHT6d3paNRGU99GYwBShaHCPDrLEJ8v2JZkZgHjEeQbR3nR5uwwbV3XMaAQ8ESCjcA2vysjWBDm",
  "key14": "2nz8rGocdHNf4vJqfG1qnsFw4d7WRKhQtiM1TVUq6iHRzHXUEjZHik4f5FRP7DJyRW6mwBvmXjy7iWxBjK8JnvYc",
  "key15": "zyN4nSPwB9fAJz6zxf3hzM38j3jHcMSBCJtsTqCh2s9uHEPiSRGeSMEjGyxLXaZF8uSZVoV8gtpxwUVjH5tTXSq",
  "key16": "2QANeY1KP5VbPYMCicbQTr5AAb9tPMKLVPLY5vBDMWR1r1KyzmsxVVKRow6ZChEsKjd8QeEzXk4C8ApRqxFhdJgk",
  "key17": "4MGg7vULhXPyJsQhwYMssYP8gWVczVLcjZVryhvVb4TDsPBZp646df8EodCd1jWtzZK5KKfnPZwmD9wbC4hnZ7fh",
  "key18": "Y8RH5Xg1FZHoaZBfvSe6PkQTrpUQ8gYXHRWTbGkXBkXpKbm6unJWTN4NguK7D7Xjrv1vZ2PEHSvLUf8xXKxAXGV",
  "key19": "2yuPsQWuYLwxFjFWw8konUGdwdova5qKrvRd4EVDUC7TsgYhXmmrmpxU4pZcYnoeyV3MUqeCDcpTjxJPyckSbrcg",
  "key20": "UKMC5USmEsUzp2SKeVCTj1bM6XFiwccQK5mQQKVQ4Q6N88EYFqh2kkbuzs9B3fCpoLMPVcfdUBCDZwN1e8qDtnK",
  "key21": "4SB2Z2wkzw4zCNuXaSQpxtNSPAEAGy7nj1M4HWaa91ybUMdz5qK4yrmqSoGuwdoU92KUY49oEZXpe8ekDuYsyrmP",
  "key22": "38Yu28RadtNHi6hqVeKtFjNxa6cb5VCJpiyU87P7cvFer7k2TBAr3zHrRbviFySyJ5ZxCCtEzZdJUdU8iAp5A5rZ",
  "key23": "5P1Dqs8JoJrzvKpPWfqADFRv5tRPeCpa23EERF9eF9iobp5G6HTTdRZhdzf4H5c92Fc2qXoqSb4bDu72rmvDJHg9",
  "key24": "55HC49wnptdgsMyV1BTgnUtRCLYgxHLRn5njFT1eqm2j1cFvWCJC137VP8jP3Ewa8d1HaV3LimC9Wx4xp357wYsC",
  "key25": "4s4gYsEr6hPtB62Y8TuLcoW9B2pSLAkfJYEbKPqjYqFazkT2CsmRQS5iNyoFdkAAh9L5x1LPDN69ZLJHbebB4U3B"
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
