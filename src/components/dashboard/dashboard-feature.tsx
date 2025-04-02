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
    "3goQsX3jo4pWM1VsAmR3VMEgeLTaLSTvgPuv1nhZzanQ6Je6PtDyANmDxxFBSCYL1WYE89wyeMUMfgiHRwMQJfCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jVx5DKSWZTqNCKVhYoimH1EErdv6LSxFD8kdpY4B6V63uLcAv2zPyBix5NHSELHMTjWhf8fzydMAATgJRVLe9Aa",
  "key1": "3WVjjk7Qv6oSTDBaBELSHQkohE132iH11CgE28MfjRg8VnTVNDPqeroevoSKTPhHbC2QtsyxwGiSUjpgef2WqXg1",
  "key2": "5z1e8TSAoji14nkmXqznhSz9vazWb4mipSTffyJQ6oucfmE5y3YtsbM8sA1MRsZPLCEYM4BxBuTPCRYx6hnkcR5X",
  "key3": "3a8NwkwgYLbUnQ4TDnVuyzp9ost7uP4nkYf7GqKh2vpro2kSbSfj5YzEir4NUMfRwhvNGxBkDAcXVSMK4M32d8r9",
  "key4": "SGHv3DydxSxBZc8SMnX299xDyDi2hRsARLXmKFUS5VWR8516RqpsHPJ6RbpcXaHp1AdhQsXdJv8r8Ziwn5sqB59",
  "key5": "3Pyf3yLRzEE2s8gC53RqvGGMLnqFHGD6vrmn64J8LUYZp8f4iDgtC8Pibkqe9Tb2k3Mmmq6jbam6ZKTXEcxk9CaC",
  "key6": "eMbnt9wUeCGixUA4nWfsj3tYXSUxcK6JXuN66nvS4Sbzz9oURawBpJZ5UKNQGypMUQoqrSPMLRWDfLCu8kQzdZ7",
  "key7": "wXTGyoLivWz3oYsBtG2CbsdaMm3UZo13j84cjU8mMMAj4DsF54Qe7pReLS6aD3eDT7LPkaV82s4tpQEHQ9UNoNC",
  "key8": "23rYFAWNsTX6z7hB6KbYMA7WTwGqxu2ZkgGooqqmapSq5K4mS92wdaozUhc2792XqroN6DrKcBGYMZCiiWHU3MXQ",
  "key9": "3Ymq1tiPT89gcsnquoACaapVygaQ7Pybz7qaDxb5YQuxug5pEE2Zf56BvB9TbNKsqEph688cqsEDvHFwiAwom7FQ",
  "key10": "KMco8K6Qe1uaDfZH7LzzNNMfAJScAzouqJRURMKJ9xfLmfZq585HyXJYeN3GZZTp5M2EptsvQax3wZaDoLwxsjZ",
  "key11": "1LT3P2TexoVjjZKqAkeG1qHiYsorG66ZihCdQuinAM7GpBvDEjQM7KGudaYxHYzXRsUF4VZHrtVrvBCrLNrh7xq",
  "key12": "xyXdCJ5LXSMW4VEmje5g8ssGeALXHhNpDaQYNhd7GhMKS1mY7BP9SEHB29WSz4wcByVVocPTJkQzRX1Q6GjVNAs",
  "key13": "VCuezbVnRKyHLLoW9x4xvNo4BzPufKhyt228ALpnxGAG7KL83y12ZZhs44CHjobswLDAJ1cXsDG2PftkKZmxBtz",
  "key14": "3oTsLsw2XDLbebNTNSegHHkC3dmpJbuw73tnhkmBEwf684z3D1vxMQFYdMDeaTBk6pmzyNqzSSnFfeM68sQyN4Ad",
  "key15": "3vwCYErwiMvJ2f77fhntr2LV8zLWTFBpSY5UgjhhSTyxGzAZH1RHcPmsMx3nnHeW8q7tBEPt6YLXL7Kud7QBD3fu",
  "key16": "F5bCHGdCb2MXcgC3BrZcF2i1qhD8ZCt3eatP4dAf8pGXb1ogS1TNJ5aoe6Hcz4mhs2CyNAEesAHJEw4ZSE9cMgU",
  "key17": "4xA6tZfRUfzQbAhsGskAg8VUEfr4pWXaREzHXfV76Rn5GbdnRgTYhQa76TbyxNicACkcJ8B2JvSTYvpLgAhonTwW",
  "key18": "5KLJAuoXdUHYuSNQdbWUics1tWzy3mZcsCZnYWWFMNZPm8M8iKpu8CvAmj3QRQPV2wjWuTRNR18CoyomdNcWW5Nu",
  "key19": "2UE9ZgoaDmpYYiJPGYnNS4QXhk6K6aUdEjJ7k9soj56zmefY85CYcP7vwbLrGuwZwxmKk45vGPYKvb7vDQeeqzzq",
  "key20": "7WgHNSPej8QGpcx8FJZEPWYXUmaSitZsZHwADtSSy8c5DN2m6Nt1Twjs4HoTjB9ZgPQfMC5mQwtSLfWeSaFBKJk",
  "key21": "5ScCRiaKuListE2F4Q787TQ1HHS7qivqDJU4HoKAxiqNbuwKnG4Vvi7jBCMshVDsDDhkZtvURnjCMmfWKXCKb7Dc",
  "key22": "Zmrd3N2ggAg9WMRzfnGbbXeq6NCNWrwPToBsxzQhs1DyFwUcKthZsXcCmL2LXNSdkHydVp7UE9oeHiqtxHPYdRh",
  "key23": "56XWoDPgWS9wN2F3Cz1V9H5wsEmG5XR6GjxoJbwzqx9YoveDHjj1mEEDvY6dr8sW4ygqW27d4nj8oTu9BXrfyQw8",
  "key24": "63QbXeiTFhMc3MEkpQs4VyvrvAPKJXLdFgGb9DQs48HtQCRvmt8hz69USeMSkaxeDoWvPDAxckQtGnWDe5trXLpj",
  "key25": "3x4ppr448q2wdmxCM7jWowTxuVHYPPL36gHYVBxtsig3gn2FGytuyHjgDvFZtDpokT2EGmqW69J2hQK6g4WkHNvz",
  "key26": "4MibSxzSQGRYa2QZoR9pwHHrzJ9n2uxA9pUN84KMqHAJY6Fu8P2D4Lg7BNY5stBh3paHyNKb4aXMQcFVVVXJrZqz",
  "key27": "Fq69Eyq7nyVwyVFgfE7zoVsjiYCK5kTaEdYSFdC82RNfFThim6YMpx3oPz8ZvQZfr488f86KJLTjQZUKhFnaVX8",
  "key28": "22PJiFt24GHa8Yw1V6dm5fVNJg18TLXN5pQTYHXNWRMzEikcMUZvoTmw7hsUTBFnZFhYV5jG6P2zMUkFatt2aRyU",
  "key29": "wqYPxRjhGNBB5hmzWEWnXDoY3iW25SZhQFf8qrh7VA7Qa5Jh8LyLnrEW3vnjXWjq9fa7w5dmBL5DxFWKaMtj2hV",
  "key30": "3EN428smPrsbweWqXbCeU1S7qoAbd3dWchF2Gbhd81o74jqhtWgnsqcwFN3DNATqKWA1DbtA8P7phnMzLXJ4o2jv",
  "key31": "2cBt2kFdqmzrWv91QwHgJbCxYRTN4fYX67qvAVn7Uf8MQm8bfiMYCo6GgT58HoE44pCnRkYE64vgL923AFATadxB",
  "key32": "YZrSdV9R4JFHwiyzaTVSkRPtJBVj7EV3muDHhZEzmrS4WzWZRwm79sssuwctJe9iRB9rDxhKFheduSnb7yKuoDd",
  "key33": "2Hk8Va4jXkYV782846LkU3P4iUXtBoom4paHBJz9TdKDe1Z2aPmcixTjwofGcpsyDrQtFU46TqES2rmsXASNdWf9"
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
