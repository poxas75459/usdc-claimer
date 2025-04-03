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
    "2ZZgRriF2hA6trEnWA9VVAghtKUL4Sst49BXztX3RcSX2WuvUzB5SuYojmt6h2z7McPNu147t2vHrGfAUhFUmiyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FWvaHumyXm2d92JmPgBnr7q4NG4CcuN7rt1igcbeD2Pnd9K7SJNsy3zCiVGNUzCeTaiqDrJkzvwjPiVEQ6qwxVR",
  "key1": "4KrEPBLgA8HStskMq4G8WaApjW6xnRUZN4VLGHkH3bGTRSEDL1PMgiYBDFc6nE7CExAFJZ7tqWsSgjD4QL19DJRG",
  "key2": "55yuB7JmL3R6vqBC97NsdQojf2dgfYaj1LyudzvEyLnmGcUPLbmzJBUfnJAgA6z6wBed1JHi8gzRVwp5y7h2k7yi",
  "key3": "3YxciRdbyTdEr3gwhRXznA8xsFoKAT9FkxcdwscNyUhbpsB5ToG7aoUnArZN81iqu9skVodyCGbtV5kFczr9SVaX",
  "key4": "3GrjZ8ojC72qHUhueE4hX3AwLviTJ48tkWPiDr2XMWxY7ygH9WWfhRFb6xyDkTWXcEjC1x4PwhjWZzRyEqM2XhUw",
  "key5": "4NTx2ihCkGqNwZi5BCee8LFXv6DLWw1qKSAYCMgvpGjmY7fU8PuPdww3MDTSYkHCRSwe54v8bCFooNijFhLNY9X7",
  "key6": "597PAnCu8viqxbMAcEtEUahBRGaoCxNLHZgi1HrM6XXdS3KnacTUZQXXQA4mNPg4S3Ju7vf93dwqPfbzVVSDmxU9",
  "key7": "8ZRsJ9Ay53Gwfj8EBEiGEo52UbDYJXcGEouMozHVZeZAxiZmb94Fmzg7umgreqZ5odr6yehqroPJ44cdsCzhHP9",
  "key8": "3xKa7kyi7w5ZRd1bqaZJ9rNTHwgmrHsyYsLaiMrmjRzhyPqS4MgW51kutPT54EFtF3T2bQBmPHbvk3a967KqePjS",
  "key9": "4qR2KZ1RzdbgN1HchsW4kczpzUFvCCjbpnQ3yrUpjiLmTLYFMRJyrrjdqtrYsY3pXX5yadxAjcz7Tii6eA98Ug6t",
  "key10": "4R9QMvzdCXuWhy91233Sv5enhPkBh3cfCHTKd2oFbhD6qS32QNpcMVJ92REPNcZLVdUquFcgvRERcvuAZWRyxM5j",
  "key11": "2GTzwPNE8gCih3iNua9wEehHkHTyKxpC5kedxTZxYkd7nv6w1YdwNukhdx4mocpnsb1yMB1rh668get2aQfsmerG",
  "key12": "2N6MC9HNNjuuc7K7p8FvAcCwCzFq7wiTYctqiYrD3niDkxtMqwVjkg9BvKcmEGachdWdyoudhAJ1SxKgfKmHd412",
  "key13": "2bdhfjaR3C41ZWq5gSg9FRb1owg1rZoafJLZr8Wo74nsWKkxB7mXKfjGp1biwx1UMo967RhubMvsP7ggFfjhSCAE",
  "key14": "22sGcWTJQB1enw9pHH9FmNgbgQbya6H8n9n7e7bBGL7jVZ6JmN5rUpZM8Y3wh9aD4FTcyFkForJrK7Br2xyo1okc",
  "key15": "4mar7uyJKupoTo4fsnAGSdexG1hz9HkhF4mBfj6SgjnNs9MxVvqXPph1xNh5XKcyYn4NNDAD1bQL4nmLN5qBJmPQ",
  "key16": "4Av8HiTJyuSdnWQCUUDaCp9PjGWRjM8DfvZ8afbovym9Rb59XxEZ1gAxWxgR8T4cDyK9jXniywZ1ppHVdcTaYcvn",
  "key17": "4VqbVf9a9KTB6t4v3QZpeRafR9J7EuhD3CkbPKqX1gZHs8T33batutB9Ns3rAcS3vBXH5NH5tMiC5oD6MPDArP7c",
  "key18": "newZP27NeJYBafzrCDefLgNaMsPkWM2kLnLmDmCTd4QSZvkUWbsNtA9JsFCReXvB27XXbXWZ8f8JRGX6vCk3iHi",
  "key19": "2LdGDRdiuThZ5rj2kH52SgxUuSL3KMFkuRvo3pVST7hs3ieNFdP4UaxhvdTVdnHwc6VLwMkD6WkgRCV5giipqwDZ",
  "key20": "644qa7FBFYV49TVborGNtW55SmcFG56wfuRuwX9hho8TvPhewHZmUFkePDnrFfXmgph9SjJTuSZkDEeygMmK2iZg",
  "key21": "5Xqg9UD2gtvYG1XwjmkbMY5sf6iiRW13Qf53H3yfeQ6jpxp2ioaycibiqKEjsMR3UjhEmRiKY6LhJWXWrbEaYex8",
  "key22": "4aVQMVucHRhwj73hwq5CBPBcWrapxZyupyZSnZ7K5WvmJbfdh7EzM5nddHXr6QtHaRgAkJqPfsBq3RCf7UjMZmHp",
  "key23": "3cmcpUYwgnWwBG88jz3tc7aozWS1ELfdTAU9CuxENrdK5YBDd8EQNackHVwdZGnSPYVCiHGqKaGM6Usxqsaf2Rn2",
  "key24": "5v81GrsETZPiiQXbW7qE6s2dpC3ud6Rjtj7TRyeNWZ3cesr2xov1oy4i42pwP8wbHp74yA3wL2CqVm7y2pfECJLY",
  "key25": "4ZCFYfu4yrEX431C25amCeMBxv2Q4YRcmPGExDFgwAPpxVo8yrztMGboeXs7RW33rNtTUk9FahPPXE49AzkVc6ss",
  "key26": "2pURBY5NfBVTPDjWDNsuuFRPCdbt4haYuJ5ZgksbiUCxTLfj4xZxqWN9KfvPUkQJoqqRqV7aVGZgjmj9mnxMeMTE",
  "key27": "B1dPcUstHBNSNDbLYKpCo93A6k8Tnz9dkm3ZzCSw3oG6wYwbbdYtvUZoHVSRWYnEFpviHnyJf9YmXtXDMy74ceM",
  "key28": "3VYWzwYnFxiijyrPBL3s9u86iuMtrSDYmBZJXB1CGxV2sdaMLw7oJjZN3qDTEysVmvBr1WB28HpxfnUP7eYKE712",
  "key29": "2hJPPDTf77gWQmLq7N6Kmikn9LTNaHTY8GK64AxLxSYaivk2e7i4JbtQNhLPxfNK9zaQwZr8P6EVztFZP8NMiHuG",
  "key30": "3oBm3UbYGSoD2XZxRJUeuVTcQPRW6hRXuRzKoSKoZTK3TJXwJkjfQVxKWmaZvY3dFHfDrXibqFyjWJWxSDSRUY4H",
  "key31": "4caoJtkcSgcebek5UoErZzpFobxDdQGTV9BhftcFHP3WkuUydn6RaCxLDRoGzJh78Z87DhNt78cn4Lt3iNKWY49A",
  "key32": "5z7kxwCmEFkMu2AckzoC2zsGDH99csa7ZYaX2AN3VbwTFRo8hMr4zCqAsTCQqahXaCjT5uk8LSf52BgEBwHWMjUN",
  "key33": "4U18cBkBi7eem6McWSRzdesXYbg5yCASyU4iN57UdtgMsfKZQy953QLFNJcV18giw5aqrPdNWZAcDXHdm3v9dyeq",
  "key34": "3i4ieLyKvhVhkBrB6mGiz9hL989oaMDwXGv4E5HkdCZiFowwRu6nH3DRaCkoKpT4yxsf5vK1AdxsCyki39d5yN57"
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
