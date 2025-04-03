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
    "5L6BwtrNfGxBiuKPexpcZr7ZS3oaY2khmpVTKDzxz3VTAzgumKRK23kiC9FWXnxoDJeuzbUjuWCmKDfofd3Ea5V3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dvCRbiurpcfhAahrT7f7QHU7z7kPA6fQmA733Ch1TQZWy8a1CfcP9VoN5KrcW8NGaJ7C6tMfkXwrKznWt9nTWVZ",
  "key1": "3uDYynESukE1DfueQCnqRawrMdBAV5BhJH26bJ33ZqhAHA3YTBurVXoVrCuWVgmNnNJVJDVZs8vrqwGxhwXSu1AP",
  "key2": "46xBjyWZXmrunbrFxDFNE4XSEbnYCF67MooCneEA6q13qTmB8k8vtQ5VkQktbS5rHLvR5MvwMePJdCaxvKNNtZCu",
  "key3": "1eJf4jmmrLsegHGQ2YkEacEAgZbsXWa67odXMhbEihXrgEhSvGVnLvvcM93SsYdphUeYnuSttrES4e8363gjPsR",
  "key4": "LpWfN6NJ38iZuQ5cLfgJLzsnDFiQ2P3A2HW3KHBGVuJKVj787N1E1vrX9V7AJdkDmPQfQVVkomujgHX4oDp6MYc",
  "key5": "25CL8RLtPY71SdoAufXQnbiQC4GKXn3mpaN6ZraYKQKwreTeUe9tJUH25yWGhBRAkRtTSqkYqEwSXCNnXTSAu8mh",
  "key6": "4rfknooBWStytiX1fJmKGmNFUpFx4LrwtwiDGLx7NmdadW9nVkjLjNgnjKbVTPCXB6TcCWQeVXQRX4gxf9RkoDiE",
  "key7": "wkagK9SuTJ95D2mTaZkmzwaS32oMBgrXABgF3A9nJ5cCPzFtS4PAZueaDiNf3oyNhTefbU69rEP5Accm1SeG3VM",
  "key8": "37QehzATj8ruYJQ5cckK3PWrJvqGB8QLMY6LNzYBeRoYJ76sg2XRX3sp6maJS7Es8v4iZWJNZskF2xmGYLZboNfU",
  "key9": "AxZ4wLHKssqEjskFNjbqFUUdyKro6euxg4qEQrt9CfKgiZkZY3HBEDNCFWoyHCSiHRKnbRGRHfhUyFcvuLGQN4W",
  "key10": "4xSXcY1a4bayvhpSGjseSBfogXDhmm6GY7qEimRAh442Dyx1SKYXmGAeKDnbXNK33t3HbpamG6367K2etCQfpcBj",
  "key11": "3VKuxvZcxNi3kdNdnrxkx4eVYEt2d5RLPdtpPh7BhJh7aYgQs4L6EdqGtix57SC5EUkQ3CMrhn2J3HwygyiA9okP",
  "key12": "3jYoDGKb32iBCquEpq4xshkS5FDb1A7jv6F31sVru8ebWbx2QK43hg3ekiwLwapatecpK1RFnoHgqLAwKhGzwFWX",
  "key13": "2krqszq2vDN5CJrVpdhpgGQGw65xE8AdDCGLbLjbpbXGcfpxfsAHHCxGBPqFNSHhhSj4XWAXWoGfLtVCrykQW73g",
  "key14": "5HNDspyDdfcDz1UmmcSt9Gi1JnqtJeKG5SAw3FwnYnLdLuF5JL9QF4Byjob18w1xKnj3dic1FRTtMQ2MAZhWz5ST",
  "key15": "3QmS21S7CAZUoY7gMMyrGLLcNBztxHN88rciuPhT9WLwUJQ1An3vxpDzX73pd2NWdVJs6LSxPZYeQFwT1qpB7dxg",
  "key16": "598nR6LPfYqKkxXKKDM7HKyZ3d6wmfajnVqT7T6oZMvntZPX587ogxfWh46hFUo1hWhhVu9nt8BaftLysnpFLxWx",
  "key17": "5PodZyUVhTrwr4oMSfoxPpWZ7mqTc1UFkcSCT32BojMMJtRBS53vAysYgyu5qNtwQ9YiE2YezpyyLtTavsTKwy2i",
  "key18": "3AC2r3Zj1QDqV7mbCwjeR8XcbRz3G9d8YMd21VmzK4FaErPz8EdndEceenWTySycFPPEu2sn7xxHUG8a7mSch2Lt",
  "key19": "4Vp3i5qWHEK84jaRFtWtKdL9edXUNyktG8Yv7RE3jBPwAtRiuwa2LvGwyxbFMkh1QYAW1NgnKYL2UfZgVmrGjFow",
  "key20": "5zB91Xhvcxv7pWrTupRVDAFPu78GtVv7bUShZkJGCvEwX7Vz6uEuFESpBrtgP2M4iMH4r73YBAqjqYK5mNxhMWhd",
  "key21": "3Q6M9dM3HSpqs5ZAhRAicmB2WAVcoxitp29xB5oBbNgT1ohEoj67mP4RtZDe7D8FGtfuqRMfDYqGUqajPc3RD2Rc",
  "key22": "2NQFhgVKHBBLxfmYEQ5nWYRfGTmtn4SNR2kMRXqEbouJdnWmcfuc3DSiEpYDE8n4paTzmY4J1DmLyUK3oWcAcRWQ",
  "key23": "62bejesBBXLeiVDjWYsqD74Y9BwTvisvGa7xfSb1NV3YfgrVWpL4YjewqB1oXY4JWwh5ir2vwCYNUeiP3bRLounZ",
  "key24": "3hucgWH5oEfsHWY5C4qCNB8ZuyJP59BdW8zMHm9E8FPVSFPVQvCQ3QwxsNTzVFxC79GQPBVRWQ1qpouXwXF9XxKb",
  "key25": "4YTpK5LpMDo68cTgF3rht2LWq9nbsL42EPgwd15JkkVSPiEjXjTjD6a5XmsWJH7R1pv9q7NNfDpzdBnNK7QiGE1R",
  "key26": "pYEnNhF5Wb3LRY5BQSpVW1kk31gLBNmcnhVZNSc14yP3z5EpRVBa7XHTuof4LUtoVZnyfCZfzLMUpWYttS4GgZw",
  "key27": "4QBp2ECiJr3yZ2F2Me14CHPVxDzZKuL9WsJrcnbYPGLWjRgAdYzxAJBLLueBKrb39PsHGenbxPvFiUhz67JaX4dM",
  "key28": "jJWR17jWXkEa4AgjzHSB8tgifM4M9sjjQAg1yooV2cNrK6tqDMJo9T6PZb7nqtoZZDJaLctb1rTakq4Tezp8cDC",
  "key29": "3mSEByBoVrkQR1f4gh7vGYj7nYLpFCRCcJkwATbsKSro47ga5ZCfhEVWa48BtFUW8ZrbHHanERLwm9MEiDAGbDgy",
  "key30": "34KFTBwxqSLbjNgJkwkZUpMMe2tFtL2qw6Wouw6PMaUoTNBdyyjSFDX89pxgvfFv17beKv74uNk69C8KnknUekXj",
  "key31": "2hwMvFWrbTBfrqvyxKz6Nc42a25fJHq2VMaMAy2wf6y81UNwmB1BBYH8qN5FRFvunPd7NjpB86J6ZR79oeCQmUh4",
  "key32": "52e7ESQnSdXqbJdKFMD498HctDmdazbDp4U9LYPrFVkbMJWn5Boxocg3hJXs7pDxbsbgpf8K6wMXTyYwifiS5LQt",
  "key33": "2oJ8DTpwQmvQezwz84niUftSKnzD4cAwLL5n3MJhqqN4owQfWJe3UVEjU1XWPKsgkoZkLG4gZ6AwpBGmvmz3fJYW",
  "key34": "3xtbXLoLnAK7LmtigdS9r52fKuFtu4B6yQRXXysyMpPeKVimGCMm7FNkQwZPmprJAkWzFeitYStADgMbjGY3kadK"
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
