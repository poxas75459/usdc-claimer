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
    "3sCNfYgdU7ehBPA7txSZMLj9q9AQ2PLxtXt86os7pHe7ohbTy6DitYhUbtemLtJrPqjZnX3GoaURm3nBC7jMGanE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ar4makSGnqSQJV11gxaUxxmRxSnn7Lwvhm1VC2izoAs6moJaqbSvdFP3e74mqFf2ZmX7sreWEFz4VeqhruBdfyZ",
  "key1": "3ZL3S77X1s2EKMZZZ1wx47MkJ9wvFmxAmLRDpuivRP54ggfaswsRJP5N8eqsnKfzM1i4ghFg5D2aRCH8Dq2PhocE",
  "key2": "4xi2uDxL7ndTEhJSHVrFtjZiGE3e7b5qAm2hcxpmXNEhsJQrSuhRnHTDUp62LCiZKjwCHje5vGbWnNuzKLMm2F5y",
  "key3": "2mgWRYT5S4oWTn7UJ1xK5i12RWdFSJ5fVJ36wEB34xp61K2kxgBPMKmTF34Sju2QjWWnLj6QvoJxJjRHRzNMib8x",
  "key4": "EPrj47Z7rYPFUpYVA6cV59NcujADFv8USxKH8aZuynzcyY2oy3wvXUtm5DGLAD55k4pbbr9ZLVeSJoBZZwWfhJJ",
  "key5": "oafrsRMEgm2BvU87dwvKAfk5XJNaq5uPTZ34Uz3CN8kaow5rQJHA2jtG5rpEw4jDtzvDCR3d3kLDF45X5cZr75s",
  "key6": "5t6PsLm8drJy9PkFFZJdZ85FbRp8UMKkxYrma2Q1C8sAtnTSqi3fJuEyRLMu9rVLfp5qyU5WWKjVv4mEUV5kVApt",
  "key7": "4wHyZLsKsGC7uih6SZE1ZWnsumG6zM2PR2rbZU3xbM2Penpan6eLiHnVvxYP6Xb4tBJo9YPYm3kdgdTuyhUZxFEY",
  "key8": "PaYR1GCBTh9E3j3KyecouEPccaqafcVFn7TrXZQp5NNvbD7ohAAMziQY297F8DC4HuUQw1RLTAar5kVfucRctVt",
  "key9": "8ZEBvrj8P47DATSq32H9MxQPLVyqB3CXceEurHiJL6fYqKs5akLc9Avk2wejoC951n2rczbpiVaoxppbe359ZwP",
  "key10": "3PHDds3MGzGG1S7Ue6LtYee2qYSy8NunVSjhv2Nx2bMtfpBHGMu3xmqenmBEY2vG3SpsNyijgoseFw1hAhwKWzMZ",
  "key11": "26t9Chqybni2CLmqqTkwHsFgPCvLDZPXGynZCciHkayqgVAmAjWAjRU8DT2MiYJbip9EhTGhXdFQ9KmHnB3igDWW",
  "key12": "2mxBNRHh3mnLc2PcKGD5YgUn4sfnaUx47yY5ExfBfwPxLKVmyFX8tGeie8YugoPVn5aPymgGLgiLX1fJNFhSDMyR",
  "key13": "3oqh8fUdUDqTFEPHGvC9mkwrmM1RPCWUsz7KhWtVQwNphwed2vrJmgCReBMpJosaH5ZcDRH8kbd1cXJExetvcN4Z",
  "key14": "5DqBsowRh3RZDEddkqdFYs4WDWnvKXyK3KEktCCaprsRjUueni55RAKnYZYUinVya8CffSF2C8noc3nCTLLBcL1r",
  "key15": "4nAtLJqd3o3ZSMsAvkMboC1M9WrephMCZpRWjPy1fm4eChdUEzUijor7e4T4yP4F1aY7J64fvA66zHgNPPKtA6AK",
  "key16": "2qu43FzBQ7TaLkhJEiCbFdg84Go9GixQpVMzWMkC4TyAa9cUSJ3iUJSKMbEfHjm3zxhqWEjQeAKL9YNuRtu4y1c9",
  "key17": "4PNKZe1CKRfSFVLRJHuDWrtUeVUZCX16US6YyEMq1CHxFXYb7GTJjZxjCLq57aM2vsqkchMJgv6yZYct78dCscYH",
  "key18": "3qq4mZ7MR8FGNgKyw8JBv27nYv859KdCwfAyMf3fYLowJQq9fuXWFoHT2RFXGYATG1MHGM2vzsabn13q51SNt8qq",
  "key19": "3piBia5h5H4gezhF1E1bYxBCPXVF5u8WXy2fKWfwcBjNs9pMLSjygdYxpEBBG9n5wjUZ7ZWccCvQGaAUPyQKgMpz",
  "key20": "2j21Qekt8yULfPWYntX3qSKiSfR7LxC975nsvf1Npcy8SXmfZM7Cdrej1wgguLdBXi8As5uvStFxFwYm7jeZd5MR",
  "key21": "AAX4dGUmNz9ZVX8ri3kwj74SjeM4YbUR3Z6asqaBvAPQMWWZfWUJ6T7GCvDgSqAcDngPWv7JZGNkgDSNWfhDbrE",
  "key22": "2zL8xpR78CLUxLiLiVRFy2zcWb89T3pAcVpuvyoPHPSGWAyXjGbkUsHjsHB9BVMuZptu3uy2FgwYAnUD2C4w5QNj",
  "key23": "2HB4PeYxjkmAB1qgnB6jakR6daNAuBonbSfFyoWm4kfUbhwU48PtFjm1uMj4N4vtJPJ3FEE982RwWGHsr5mPqHP5",
  "key24": "32HjSJW8GJJ1KwVjWZuzUkFjEZdQWDNxxJhjumnZAAXhxGVjMUqRDoH9VDJecNHKZ5vAxXCGj5cDcVpNJLhPGpVm",
  "key25": "QJgxTsnSVfLGRyg3UrdNkA2nL2eDTBNdzHbupFt2u9P6tWrsGVdYDY74WxJHavu5KdFAnhrbX4ChCTxznh7ByKE",
  "key26": "5afhgvrTy1nJ3x3LEV3ap3wcJQQwC3sLL9g5CgXpZHdVModSpvgtD4artJm1A76X5AEQfqX6TMdCRizVbfRYZK4i"
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
