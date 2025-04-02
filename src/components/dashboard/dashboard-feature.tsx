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
    "4UkhhXAngDg9BfdkikSiPNJLHCAcw5VMScfDTArTFK7TTC7TCkFxknyJTYcbJTg9EUvTHoUgVrLGJp6TZLMShydQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hCG6UWyQi2FprdP5UmYB7u9ALSifRGchvwaDjr72ZMJfBhbMBQHdEfvftQqvXGaFnGyF3TqpwwoZp1HkmGJ1bjm",
  "key1": "maXhUUmyeimouJmuzJU7MngQJLJj8eMKhNEN7c5L8KFo99odT8gaAwSShP4we9KrnWWJv6A6ACzBn8MJcwiHFoF",
  "key2": "3hHv5o2QQtBJikNP88CmMYTqfkLcwcVXyD9PV4yTWzotxCFhkRsicez8qFuaLq9zVuBAM277Tdg5iwEzNvtrpwfR",
  "key3": "Aj362VdAdAA9A3CU2A8nfKXyUGcMwCuaURxESic9Qqoho37ZwwXa4Hdy639U74DEMAtmgBr21ZVQXuiveLS9Pac",
  "key4": "2BL57VFCoMVopd8wJwUY9keaJaU8DrkeRRi6ZBkZcxj8zX9EfojAyyx1LG7EEjGPrDZ82vb1JC2bPU8CvDLBq9nc",
  "key5": "3Wk1roeUU9QowTkfM8nLXgyRysjNj1141aREgBdHuE5YMfQX89NAbjiK1S2sUKwQccQQLawaeU59xuQCaJ9DZbrr",
  "key6": "62V6YCQY4VtxXqUtCPBtihgJmsbtN965yQ1LKAQ1vCLdnwR9PNG5GXCwwNTjEt8aKcND3UGZGwFaYPKogMb5pYHt",
  "key7": "4g3fK7G4yJhrDY5xChJukFaqbfdn8Psvu42uhj1CutKYg7HMyAaixi5zbNhxunpZrqL274mVAGAG23szfHUCbMFG",
  "key8": "67hCJ8Hhw3zXDyFagJNMQTkcDFtaTAGDXeTTHTViGG9FTCfHWPSRXTG8RNdZAyQ5dSypkAkVZfeqQQojeG6pQxRA",
  "key9": "uufzU6ucQVJ2JySXT742Njwmr3etQXf6LPhFWetdjTR6v9r9bwfGLeQ8X7zu4N69aZs51UxuQYW9pYdhLiehfSU",
  "key10": "5txWSQQfvLij2Wzc7TKbaZnLnqWFM4LYWurAW2txMcWhNKtnnyXLH3Qo3iY9VccZWkbB4cy6T5dLeFZoY2kJCLu7",
  "key11": "2sYBHeeAxvmYLpX7ZaGXNLKanqMCUjDACGS1haB8c7KX7m43nkMqzgr56HKLb59fMpR67vJWb79Ji6G5GDV1LBxL",
  "key12": "vM2moeU5fjrjdpzACx7Ea1xjBeoCXkiCGiErD7rox785Uh9HS7SzcChdiwDgzRd6u6j25SKurjLFDnByWvMJXKY",
  "key13": "5DSZiLVdWWuPDaBgdLDWfm3Yq8LYmYbTpsabz6M3HtGj5KmQpoQ95PP2kX667ejgwRYjgN28EnxwXcf6cRLARVJX",
  "key14": "2JKsqocqoaQKgYgaT5HS4wDpKdgFx5YGAnh1RSUncnor3Rs8czJzHe48tSRJVNmgXU89gvhmQo8UNXuywUix4BX6",
  "key15": "3RQ1oWFFcQD4Gq5uJ93g37SPA6idFTUnKFS9NbkQi1XHQwfaBce8WG7j7JJDuBbAPWYSSMMbVyTkDAsqWY7syBFJ",
  "key16": "5xN5ST1FfPLKiFGVWShQoLgEkv2gdVKqrWEnPNRXrDgqrtRkMdnMLi638QA1ujGejspFVbgjetg2159pYWmkorU6",
  "key17": "61BPAPGLuLSnh5LcZwWBYDZ25ofKMtPq86VGY4X6QEcqw5FdY8ppwY1AS2xosXy4vEX7xxjygrzvUPuWMzivwn7U",
  "key18": "WXKfqJVXjEQVDX2yFF4ErB6QppRkPcvx3thfXackrc3GBPqTvErCWatAB1RtbuZ47WYKPgxfmbdL3n7Hm9UgEtB",
  "key19": "5y5KHGPq6n3F4f6FKz2y84ebMZMtj997eE8BvzzsaGB3CKb8XQ8Wa4qSBccYo1ECnqqa1YbaGb1SYU2V1r3H3rsd",
  "key20": "5hEhJ8g8RmmHxzq4aST5arQQCYFYWAj5z8ZhHigSEiJeDpL4yCJKaeo427NbRBnhV1BJ9JPdZC2WLrKQnMGYCTyF",
  "key21": "27D9H2k4toe1gdzo8MaEHs658YGo7Zo2iAf9fT6qdynDubELQ8jnicQdCCzMpu85Dk8QuJEPWJJfwpGHYJmYzitD",
  "key22": "SWn56fVqUoeWBsKbjrnQWTsgapp5UX3FDiZqGWtohH51CN7RUfNZqWXKYooUYzSmTqWuZC2FLiWNp3GPMhXeF16",
  "key23": "3NPfAb1cQPKwbDZBxkL9VMXHR4dZH1maC5EbXBTMQKLTBL49xL3tHL6jwi7zPD9jj3EUkCFyZVJefo5P8k5Bh3hu",
  "key24": "5uGVtz6SazEWvxnGtXQWxuFqCviUFL1RnqDGTt2U6vMPcw6JYSkvkU7B5xbLWM1P56QqQMxYeYeodwbZ9gSwpjeH"
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
