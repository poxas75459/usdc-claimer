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
    "3nGy4PDtuU3kiUbBVAF8wG5dhWp97aGuoZicSvakJmfxyTL3pN1i1PDPu6jgWQW6kfFacj79FPLcFwNqm7EW7dom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44nM2zCm4NpB5Kq9Uzqua6guqKUy2KeH3NMGZKGedqSrZpvwAthCRAYhGyv82yLhvRn89GxQchhdjWHYdn11oq7X",
  "key1": "4QZsnE2JcZPyQgQXvcwHRg2wBaQCdwmrURJutD4jFyNpCqdqZnWDj6UvGHiTmTCuFqh3oiGwdn3oBysjm6vk6GfQ",
  "key2": "3UFXPQYAjf36EicaQTtVZmjYCuyFX87bwcHPZb1jN8MoVeNLDbomGqDXFYcHyDvS47sdumyR1mmW4xfnXp43Vv2E",
  "key3": "UdwSgopWDNiNrdedaMFva85Cz4tBnAEsBQH2wiKAdNgigTvKtVD9K6uuDJJRUpD2y3QDdwoAZoCxNdKRmSHwWuE",
  "key4": "4cSQ2yFULkoY69M9bU5AW33Vr9Hp9a1EpFpHuy51HyznqLQNP8CHCh5i6EGLA9Eoc4atgzBA3wbpMQoM21fqw79j",
  "key5": "2gXT1xSEKgnBFWfi6GiHt35GCjG2txAkH5ocVEuiwYPpbEKotESNWug253qJJACoFmYFRcYygiJmrD5eTBpsGJhZ",
  "key6": "5dPa8KXLbLKvTUUXTdLNCRgQx6WRCmVBvM3HGaRi4zbF6T1MEPfVTGJ1nBao1qhxoEwSLzw6D7c8xWioZwANLkfM",
  "key7": "TzT7rdVySpxNUfhHw6eFhnqSEfHiewwosyvjWoRmSnZ8k15KSCEEQrbLnFcwmec9YU8gk9Ne8sArKHkt8QnjXNg",
  "key8": "3PsErhKAdnbJQ1Z8pegmpkJXzSyd2x4hBJ3DsN9YaSbxEFSx5yHZuU3rHzYencioxFoa62RPppD8Hs8T5pQXGNJK",
  "key9": "29X2GXCtCFSJr9DCUapBkHD985sT77YG6K9cqzHMQwP2RgUmHb3C7vLW7io8DCyyLc89ASyN7oqii41cP6UVfecr",
  "key10": "3iowkkftULmaU3esQc8HY9pGF55rZDjqZkfUR8BJ4MpPviH8XYLbwKYQ6BxKNLfmDPagY23dFZLs9YKtuC1E7S6S",
  "key11": "2oC6pctSSCRCs3f9tTi2ueYoktYChVqoq6Qncwv7YXEn1ffxiNZX8MuT2HvVeWd64vHdVv5maJw9WSoZi7drqu16",
  "key12": "4FRymh1w5t8dmU48WmdcNhsN13XBWBw7EWgf1o6e2Uo24aBZZLtigaW7cA92vHcxu791AHBwzABBB5NrizbJiYH3",
  "key13": "2xSn7snfDdUCuUUhcN76EGaYDjqedGGz4mEcNuYR5kBg4vGACcHQ11G4h2xGyCL9YxhLtF5H7uBtyvoMvNxZS4VU",
  "key14": "58YbDREskVefpXdthupUVtBU3zYKJZ3T6f471jrX57fDUDiTnxxN84ex6oKVCTyxFYh7DDyKaAr8jNTFYPhPZgPe",
  "key15": "2QYcVZUzVNFmuTyFbmaVRBMm7jS9tFxmdY9aKYiwkZehCN26XZ7FZH9SNgKZnFPkaR2DfchfrmZY5YVtPDnkLAMr",
  "key16": "4tvRVpYroutPZierBVWeUqVWzGgKxnXw22cqwvJV1rRkVCx7XJBvPuTg2d1bUX5bHz7ZK5e7XqDm5hY4Bzdfqo5h",
  "key17": "3ie9wcvhxTPaFxdG3DfHvQTkLJX5bgnGbDxUGGTcUKQzESDfaFLqf37ZMPsAGbFJwwdgsT9n6CKxmLAijMP5F8KL",
  "key18": "4uTefjeTeVH9tfuP6gDoHKEnSyZq2bGzu5zpv6DnS8m6bAaeRPY4E8f4VE2w5ZbutWxjr3UudkX5MYWtzK1GYxjw",
  "key19": "4CNkJrc3o6ajzU5mU5viFcoRotpXnWaYBy5qZsZhBTHaNSJH137P6B4YN7adsSU5DR1Hj2Kt9raRmzjh2Vc7TJou",
  "key20": "3rgHfNT25JPd8WMR8q8Qn5nNygMYkw5KVphgTGPZ3bUJ8tU245bdrPx7PiAuF7M9vf5Ca7ULbbZX2eXeQGYukztJ",
  "key21": "5sgxHWzQExGG5UG7iQUytjNf9TTJAxPYdq6My4XZ5pcvbBjVv5JHa8dczsEWSibbhADG1KzcQ1sxSGNZNgojjVyS",
  "key22": "4DuFdXUq9hvyofZnXyk4ZxLC5pZUqHTrC3uLgzf1a87ZiFeLtDHzgcchLrWGaSryaCAenGWYsD2FGgqgmjAHN7jY",
  "key23": "2vaJfS1uAMBW46fC1e8hmXos5Ve7HbWeeNiU5R4Z1BMcwnezALQb8fncR4pQSKBMyoKC7zqZMgm8ULQeys6keojK",
  "key24": "KonnFkhHTwr14X4Nc9abLDWp5ix4qcAz1mEMgB7aeAKDeBJB9J8CCbEXE9SKqfVJ7RfjVBvCbeBtB6Sc4Myhxbk",
  "key25": "3zLpPSkN3yoiCTy3Be2gG1fCDJiMc13BQP397ZFp1XNgDmZMNGKs8KYWVuMkeWekpyu4HG6twyRX1yMhGuLQ6TSa",
  "key26": "5iQZqVJLiyzWNPPwn9DVnF9zrA5XokJzztuGPph6xTDrexnBLKxxG1d7Ma9MAuY3q5VFf7igq31cGw4N3fxzX66b",
  "key27": "4CvYohjJsgfAVcESK1PsTW9BczESqJpXo38pugHiREmPSMxBuT2K7QcTeebTQmQ4nL3rWz1GxQaofyL4h1mDvin2",
  "key28": "3qWMn2VSpEGDgBJLKXYCtfzBfm6oqioTj7eghWyXRidooJ8MxZeYdyNA1GCdDhcqCPfikYVsASUwUnB8oaeDRUc4",
  "key29": "4jXmYSnjujmeumGUR7auBkjBoWwSiL5bU7MwJY8yWwRUGHYQ3ADqhSTothgAGaWwbfN1yideccXq7ht3R16bD7RW",
  "key30": "3ZWzpmU77g1B4Wx42y36M4znba1yRfWGNVpFieNFKABFtjAxWfgePoSUSJpR2yEDr3vBRDfVh3DfhR1D1vBtHKWu"
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
