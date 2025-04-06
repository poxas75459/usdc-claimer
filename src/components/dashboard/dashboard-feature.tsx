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
    "2JPUsUhN23coa5prayMh8mrozhUjcnTsYKkSWhtEKWWTc3S5cvbLPXi3HTPeXrLLcVi4f4ysy1YH3Ej3vAKG2tJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ugowz7HBGpJpz99mRGnfwoyZWo1k285TybAnpHjyf6cbAQu4tqz79GT9jxRQeWfnAjKS8tzYvz8BnNMPFVrjQnx",
  "key1": "5TByk6rrsyCjH9YiD8BbJtEKNPDG8usUdfWSUbZtiqc9y7bYMkZwWDiSzgetrsD8tRX9WkLVXomHJcQfxQLRdjia",
  "key2": "2o6LjtkbsKRUpHbgLNi5mkX91ANaYhzpvEkaTTBRydsBJWfyo7VXdD9xVo4GEKZ21rKuHC5dxomekXMPqFYsMxrB",
  "key3": "3RdrYp1FkR8ivTuGAEE1KwF78CztLbM1PZy4Jt6MhzKB2Q67MLkjqNq9B6rYdtJ5w93axDTrzJXxpXcmavEgMjkE",
  "key4": "2yLHS3UHfKikk2kEYHH4brEPmxp7B5A7nVrKUmJ7dRLtVojrHY3mWy2AZNnMYTZqzUTWo2f9fNAwznb4PYwqPZfS",
  "key5": "4ukY9q1RcQwMQ2LvQ1n1teQtBpfLH7qjFWz4FVH3bzmM3DJamMxoGZ6g5xQxwnEf7CGoj7s24Dq1ax6PUh3B5jgA",
  "key6": "3bz2LCCoPQQScpt2zS8z166HmN2RsHCqjFbARUVzp9mXSbpU6uZo1675MjairMvxpcJ4Rjqk2f1FVcpavEAsTXyw",
  "key7": "39a58RjjUTEHQqSRRg2FiqToHfL93Rx3QzyADWvmVprKiwJjxyPQvWTAbPXXUotXR5V5HSYUthmJfwXVBvvgRQFE",
  "key8": "2iTnWhi8n7bsBUZoRx7435hrXWWoBSkSgAqKJghyE5cU21vkdmtzi8wDxuXwTfjAR2MuZkE4NQ9WvojMZ4ki8bKN",
  "key9": "2qugZmN4CCZZELArizvGjMR4L9fWwoGtRGUGUqvyschc46PwumuBbJLbUjKEh9ewPrrUmqLzqejtc8Qmt1LcUcWH",
  "key10": "5UjsFntot265kdnFA5bsDQV9cSfX73pP3VemxuVLipLipjRuxQwCJZxqwU5tXcRzrFTp4VMRA1NmsPHSPtfM8Qe5",
  "key11": "3HnDFkXWVS3EMDtCDc2fy1wwBz8Qiuvm2qewF9nS1gbf8SyUxLygExs7if3oXtyUebZwA8utHuwYhnQdUCSPWscX",
  "key12": "3dYiAF4pB4K6mmQaJxhEbx8p6V97YKmDUqxCBNiPprnAcAcmVRLTuZAz4nqPcCM5nCk5JfUoMWCqmq3YLNeKW3b2",
  "key13": "4SLGoS84MVKH7crAUJwJasbZakRkQszK2M7m9sUiVugD4i2S86DATPoL2DRrbvHcG6Zo3FKJ6SPDXxY9X7Q39FVL",
  "key14": "8G8VpjtzJBC1sVCpKxPy93LcfU1jcwZMRCYJd3sdwvbQJ5WSo3pRujnYDF7LBnTYSmmSk4PnjTCWGNrdVZZQqCM",
  "key15": "55uhS3mMRHMLN8MrrbPP6iizF1tnTDUWw5roePrAjUUZvdg756LQi1zncE9KPt8tcHNmWNzvLZQ7dKNMG8PwH3KW",
  "key16": "3Jt9g6w7bDQFq6mynjzipHKsLaBLkPsUnnVyWddUBHfJcoh3EQBcrgN69NxRRYCPx1xyCrRFc59LTvbXx5HP1y9L",
  "key17": "2gbHKHVqiJhadvLAZeuuTk36MQZMeRZK6pQJi1tVfBUCmPu8k4JtThR6pe3wY1A9Ls1p6ZDJVnAfbc8jjeTfX5yC",
  "key18": "zSef13V4WX3xgqkAP5VU1KdaBye8V3NCMWB1k9QjDxDBM4RvMXBR3xzagPqrMyeyRJ6Hzzu1XmKARbdCTXUegHN",
  "key19": "2pEJJSRMPTZLR1vCoKMHL3pYEkUsQDPWSyeponRqL6B3Fizty4tryVFuzaLZ5yCEAqkedjnJGrhFPcGA2FNx2BXB",
  "key20": "4aBgqux5rx5mBC6VcqVd9darWS1THxbnSGVAwS8NRpSNmFFB4eUoqvyPbVhP2vwMmSUbNMjMgdSkNQsJ2WhdTVco",
  "key21": "2j4Fh5eM6VDuu8YKjNhyaZiSAfUZTyyMNpiaXE73h3hJ67dYZuV9JFUCdSRGDWqWthbHDhHmNc89bfuoQY7F9UzE",
  "key22": "5XCcstRc5NxiBEHoFFwiJLhPjshvUp5tjLnJJxynXQCTCsMpbrFxVTNEBAzSBLt63NUhxupkPq99MvtKHb3yqhR8",
  "key23": "3FT4nZNEvoyAo9dn1wr33yGHrBWayZhvvqq51evKCntBL6WnY5K4bpEpTPQiLqRvwFHXFcCGCBPooHBkg2D3SiLN",
  "key24": "E8AGVYgfe8jxUYEcpfjsWussLfeEe4STLtgtprUXRMgp1rfhBJVgkjCsiAfCa3iQWsY93TuC9Be3TNoCNGdFMqB",
  "key25": "5v2roH9Jn9StGeyZ6pJqF22zLNxHtnKzShUjWS6J9S894e4pbgekXpfxaGni3JmuXgya72wMbfQ8V7TvKtgyhg91"
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
