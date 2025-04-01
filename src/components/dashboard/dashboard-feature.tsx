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
    "3D9c2zFU45uLq2VWRkjM5oL9v31K7jzW1dMuhoToWELj2Gyfd1J3e7HJUYbiPtqsN3o9VtKtfXiaStELK7hrwuCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "468b19vpq9At6z2Mibz7onNqPtphQjJgKNhzfmnQBCU91T8g7yC6gsJxxyNWHv6sYe2ax7N6QDSR3aZx7M9AsVpX",
  "key1": "3ZLUghWYWEjsQpFb6uHS7hikspcBnmFUHiqQeeSiN79ELot671yiQHPngdbx5HFZVRiNe5MRu2AyX3uopYrHBAAM",
  "key2": "Uo15bAyzE7mf5Ko5H1JXx5PoqFmcsmHJPmJ6t8rTsCSWcQfYQhLZpbeCenbRHwKixPdKFNc4k5hJsbrfFWuQKim",
  "key3": "5hHoWdf9d7abAaVLK4GwBrEv5jTU186rHNS7Dw3Ca4HgoPS5723FyULq57BioHFTe9c3EpSzg8tTqiYCDFGERZow",
  "key4": "5trMSWzMxwjfgRoBShMc87J9hMAyvfYDi7hM7joKpAViZtjUNtuRWibP6qn3i11YBTpvu3RrT5Rb19Cxjsy6Uzqk",
  "key5": "4YydcG5ppMukhGQWVX2vfRZkTzqbeMHamWLj6o6xsS7sWmcT84DYJtWpmT4BCD8Xo99unXr6ZrK8Cq2GfJnjWz9P",
  "key6": "3apSPW45Z2XYhi7acK5MvrWtyEG5bL8vQkhtQ1kPRVpmRvXYTJVNnYJYDMFyudDhXyCtj3s2kCQvUiYnR4fVfCy6",
  "key7": "3jgYeYjXEncUqSTkJwDBWAwaVzECgiqB3hBFstrhbjv31EpYJiJsRzbhZ7BjcXF3R8p3DK8Bg7D8uXB1ucTZx5vA",
  "key8": "5jRoNRvTQdyTLuXzytGPiEFLDd9a4ByToeGwYBUk292HgVNB5N5W43pwT3ZV9YvpxSjmg8P7ZUBPwVyAq7HoV6ZE",
  "key9": "3q8xYGnAxK9JEBCSMo6ZRBeT6fuQPXoz2fgSBrnfFsz4BTXTw9jMHNCirVNSokYo7CVZfBh3sWdToqaxiR9igd9D",
  "key10": "3JqfxDnTVymYNdWe6epeaNoZDbAb3KVftQMoGfBXTQrs6TwY8gDbsx5LN6tRvG5iJ7EviBeisdfZi9e3LitiGy46",
  "key11": "3VTeTd1tGngbUhCg5QZEa3JHzJb3gqVte1DWqiH72oF5emaLgFYW9t69mup2rpdrZqBsC2bLsi7NukwfPyF8yHid",
  "key12": "4KDrUzBHSEazUSjT9jd2U78xbdxNN5EFFRoSYw3ZesbUie5gb2Xici1mz2drWczaDYE5MbfhvFsBnNzMrafSrpxW",
  "key13": "5xrcq4JuDCJuedGY8PLtQAQEmTukKGPWSL4uSwDLSEXU4Eu4NwFqpNJfRJbHJMAsUMKzg1TE56WjsFrdEdEC4S73",
  "key14": "3r8E1rtVB8SEEHX43JQJwRebxUDovYRhn75s1cpHVjpkaHKFUmMwapwSCZA1SNJbj4ujvDxYepqDsaLVTtpnCz7a",
  "key15": "2XkWCYkSNJY6R6ZAzfcVrxJLUFaGK4E49QE8rokyCdeujbwNakfNNhgYYBz7ekqzVKCFrCQGHECDAfFN2BGYCoBP",
  "key16": "JbLxDowD8yWgs46zMw57wSSTUMHMEk6MGmK1CfsMpNqWUmPt8MvRgHyhF2xXzjMeMzkhRtP6B9BipZmAp9Av8aK",
  "key17": "4p93mtA46LGGcvEBqYQDKKj6s3DWgegeH4wmMq46bAtxdigqx1FT3KmrDxgY3CeBTdnGhSd9FBXd2c2LcSG27SED",
  "key18": "2cQ3Y38d2sCk8fnG23QZajhsd1CX75dL7tsh8NVTK4Rkfz5MgyFGmT9Vi2ZpaDQ9huoj2xtZmUStKyeELBLCgyku",
  "key19": "3KRGMdakrQyK3eAanpuQS8SUtSFhXbX7yYwLXzkLVCd6fVXGtoaJu1WfgdSv2mpHf1DeQjrBExUmiS8YK3xZR45V",
  "key20": "3hXLYdYH8nWQiV2cTXnroPfavaWjdC5DYphg2kmFATBBMvmfjZJQvSM5xuWfSaCo18jL8eapT85Etb4pn48izySf",
  "key21": "5R3pFhvoa4sEFT2F82N6WnXkzxgW3MWMxsxkMTkA2hYomFqSfEMJzj3H3KPxqAJ6VXADFBC2Q5mv4rbDeLy2bx2j",
  "key22": "2C8tA9ZsNsVwbDxPWwduz83ZxkCuPgWQnmDJ2xjD54wy3UaipYFC8EB7P1kAnNLzjEiFoRErnrVaf5QcV2KLgvN2",
  "key23": "3gdqQsqfKQr5xLfXYuxkiqiyz1UELMx6AnBzTRs1Nt91VhGoWso8Lw6Vwm4B8M98U3vMqizuM2cVyfWaRoTv1o5f",
  "key24": "2VrASTNJrgZdka4VR6xud2RGPwD3CZfDJXB7GRDF8dfakHfFFXPsBZrJRt88caFE7jWJcoUirX1cN4GQ68GmPkRh",
  "key25": "4Y43vN4DyYcCnshTf7MksNK39TqETcfWc6zMYHqL1v7ThLk3gnmR6UeNHUN18bvfi39nP2Kg3iDvfiwrp8fzgVr1",
  "key26": "57nWy4BQJmgH8K6RQVj6fhqqgANQrRP3ABPmTR66UPjYA8upFhPPXEeG2iyHAhJNNyWB4AuAmGAg9rWae4bbemxd",
  "key27": "buf82NnsgSu6dsthZGbVzqkFMT66ioh9RDkbRyWHz2jrvW1ZHECFdmnfsEQR3Gjwfe8c5h9iQvDajjTwxQUeqZ9",
  "key28": "5y4GyvqbWGdafCquXpm13jonHQ3nZS2D8EMktYoxzQmjnYF3iHgsUatv3AgH6VniDsgbSy1Y7ap18futKzpnmTvb",
  "key29": "5rNBTSaDqdo5eozcmymbu1jBwNQWhmsoN9WFoEMAN3cro5LsmSm8s5BwGJMk1Z8djLqAfPzNNqW1WDLG5U3dXSwv",
  "key30": "4Wk4gANy1X29pvUNRSN9hkqZFnmnxk2bdNjw7pP2gT6CqgH647pLCJU7hDCFoiJZNs2cXf44CiFKDaneadqimf2c",
  "key31": "2LsszfwNc3mF6vhauUWTaBkDgXKGPTy1x6XGcYcFGa8EinFdK3CwAP4xxYR57EBaJv5va2jGGr4DBX6XzRik7QHw",
  "key32": "23XnE6s2ePADvddWsnu6kqvbPdVoooh24Q29dMuQa5TZNnNXcATNCcu3DdS2VUGFLLNmNuS5SbjxyF2fWPxLgngX",
  "key33": "hLMvWATbKeuhMgbdhZZnxozqRuDne9uwkPguJeURCexVbi7YS6XWEhKNGq7AebZ8u1G9rS4zpBfiyhkDFbmfN7n"
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
