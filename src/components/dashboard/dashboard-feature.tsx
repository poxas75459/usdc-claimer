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
    "3LVriyX3S1ELM8S7cgJtckHNukTYSrDyPy5ccKWTc2QhDAwDGqC67WWPKkr49Ex4HKJwFCrpqkebb9EUX8jromeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G2itW57BsqWuSAxNWUa2Qh6zPiCP13XXEmsAShYxZSKH2jLywpUHA7yYPrfefVsnpQcByjHboYCX5JXrX24vfRx",
  "key1": "4eHYTp6zQxNiactUzYtFjicbGvT9qKVYaJZFVhw546jc6Fnnqn8LPVumifXYRqnyCvQrxhkB5SFKyHuuEX7shgA2",
  "key2": "5K8R8WLFSnF249WNH21xhbzz6xqLpU62H9KfECgQbNT8iBtS7Ff9LaKby7UtTaSQgLrXjCR81EDssWZRmGSfgjYG",
  "key3": "5cHwhjgCc8wuVHHTmVXjnhwLpQzs6DeWnnFRXYuGGMZuDgNxsaivz2Ny5tDBVWrTCSS9YTLf63TUDnDsB18Z4pir",
  "key4": "2RnjU6m8krJgzUgzyBWe7o5NVaCqcnh3wfayAZ8mDN1RNACHQF4P531mXbSQYxWkxNqo8uTLPmXdynrvmkyKr47G",
  "key5": "5M7ithsMYrvT33hQ3it4FyD33kwBpKLKrdiPq8MxexQgpQLkGyeNYUT1JH7sLF2Y1jbRvS5Fi9VVZdTYvkKdzM1Y",
  "key6": "5EgVRRtabboP6YLEqtShFZgDgbCnZkQU5f5WKzwwCqsvFFrnfXEKepxkqqZ8grxkuWSFeQujmXHuCmnnyq4V2e8j",
  "key7": "5gBsm7rdfgnvJwu3Nj2DFi8RWSvCyAKKQLG3s9n9EHUpd4yu9coLDXsMPRJVbfqb9g5qxKXAghTLzrzBPsuvJJVT",
  "key8": "4VcZwxu3aZuPw8spFZf3gg7WELswEBE8E9BV37CQfhFDXCJcSoyKXyZWvyFNgH36fSm9suem9KoeD51Rhuxi1kA8",
  "key9": "4wdnTTyygzqi41EYrsMR5U9jxs4DPpDqYmQaJYFLBfWkg9TNg77LT7f2HptWgDEHZ57kBfD1aqjmjHZRFtV8AP3o",
  "key10": "3EnEUuEzhwcPWWKEKt2diad2a41CTp4gpRTfh8kpystabyKQfYNRzL1S9bsRkLrC9S2gocKfPuJJ6BY59TrDLcD4",
  "key11": "3PitKMu3ND6uSRNEyszWZfmwdLjoeDPqhSS63P559xNpj1dWSbAdYsGwBimMtKVzRQcjQbbAc7E2yM4FiKGB9CoB",
  "key12": "RrtMYat3Q3m45uNLHxi6KseBoWkWnbkJfywBuYf1TFoTLQThu5N9EqJBks97SJeUWuiZuGXSBUxgMMBdtguDP7H",
  "key13": "5CgyisrxYt8YaeaJy7pvQt3Cb56ZigMmCz1Y1X5MEwiLPQ4aExbTt1cFiNUjwiycvbzihV5gncnfbEnKzpDBs3Hx",
  "key14": "21Hd9ZvReDdiBtSbcWCaQgifugwMNhocxZj7iFjT2zVCRpU2P7gx6BXUTZyUyGSQ8gsQFJKrmduoEfjobDuGoCQo",
  "key15": "5ggBxDUmVzxjdoSQkmDmbPh8KnFMX4e5GrrxSKNJ9WLuDZJkvTeAXeprosuA8hqCua6hBGbjZFFPkHHsNLujN1wn",
  "key16": "5dgHAyrnyocA7WJoqYK99a2KQ4N8Ub9kswH29bkVghL4FHA8ENgkhn7sissAiXCxAUCxFWLDyG2rpw4zLPjACoSG",
  "key17": "38Ho2KrLRY3c8kUWVXVxebt51yrqUwbWtM8p5YFVpJ5ctqLfwDA94qcfthazRjNKNAQmcWNUnMPqJop2jQusdpkE",
  "key18": "4jSFxcJsjfupMPJkVmZJPJXXioQ2QxTMz2JjaquNBYLi6LzpehTqCBkWarA8Gp34oPPQiugsBmvZbmg5nZUKYnqW",
  "key19": "4GkxjrTosLxndvddebJhLQBR6BJ5usP9CxBr9JgC6uFdC5oQpmzTxDeJvRvmgfhihK8px6m7N67g7ctpt3Tnhwhh",
  "key20": "62k2ydgbp8AtygANAZrx26a22Lkfh58EEAsaoBTSpKmkFkAeVnkJNmXW7NeZgZsfKoZCwjj1SsQ1oSGdrpZVpzw7",
  "key21": "5JEZkQ71sGBXGFy2zsYRfvrFaGvyhiVjRn82mRX6gdfcT2s4MiPbQmizMFnhZvoxCpsdJhmphLCyTMAHmPrFa1N6",
  "key22": "49Zr5rnLjit6Ubv3qvok9xswUc191zA1fpyYs5m3EhzHTyJCGRxuVMpkKfWoBYMYn9prsMrKUtSsHEfFmyCdXgpg",
  "key23": "5TzLum6Qv33H8jkALdvhyh3wimEvkG92c2HEzjQiPXuGfN3XYQu74AmzA3voPoVzB6Qw9HFii2X7JxSS91c98BpW",
  "key24": "nU3V4uQ1HWPnNL8Zdhf2wd22XxXVTmqL9xjaqL6VQF5Y8XVD1UbpixhT9igKrjk3c2kBrRFiwHuotbMBHqBys5w",
  "key25": "3KWwVWmU4CEQdLC3M3ASxTbJ95stSy67m8K73HzFkHQvRzo2EZvt6HoQkyHYzNK4YmVFq9PbqRd8vtYpLfS4bFHK",
  "key26": "u7gv5iGcGrouctJ2uqBrLh8V9ugmw2tRKu3ZYSnZa43BQETYdPpwhnExPEamG8W9DpyZZcYaYBHom65LjCMMt6v",
  "key27": "61a1Zs7tRvHvSqSg4Z7tw3j4cR8KBqTMsb8YFohXHVkrUrP2fXe4TQE6GNXEAReswEN44Ms7Ba1MCes4cMYs3dve",
  "key28": "bNixtBWzjNAaAEguFKphu91TkAftGaMog7aTpKfMVVmSQWbg5cEnn6E15hTesno1xebZRcPbeEyjqkBWBNRHTwt",
  "key29": "3gS626V5SR57ZNfTtgfQVybvVFeDrsZHaK1mg8Nz7jPpmTyAnRJcitnJdPRsJ1jesaH4bKm5fgvooVTp3iPdCscj",
  "key30": "5eXSQoiW83LYnyA35kcYW2spL3moPWbM2XvoJjRsxzN4nr3e2aZfpEFCSuNHLLdZzZCHo96TDz16XUzi99for6jp"
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
