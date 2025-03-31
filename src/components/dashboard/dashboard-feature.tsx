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
    "2rfP3oe5icwehHJjJYJhJ9kksWHfRrezVzMAK2SXqraDBg2iBMDDsduGPrX5FYEarooiYPZPo5U4EoKb6vVrmmWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eC37wsuKD3vNQYeUCQsKktvUCNW8He2rx6qtm8cK5pGF5AwmNhXcHd87E5ZdvjPGUtEcp3uJsggdety8Xjjuo7E",
  "key1": "2z8avTAcVxwLbHCmNfwfagGp4pTDo4brRvUDQLrHXkXN6stwHW4L9RPjEXpt9E4tD97v1saDA37ttYv1uy5dmbR7",
  "key2": "3eMaYjyAGkscM7bujsCoNvGApMskLR6wJDPyDWkH6MGByVJR9C2ZjqJ5xH2SPuZb4CsiShfQEtRxyhYRhP3PNBMZ",
  "key3": "2pRPH4fo8tgxqRecJQ99eDvbg12QaWiV1QVcb1ZDhgJezsLsr1iC8wJBFVf7GBQLsi8Ru53wqMYruNXiAkR7hn6U",
  "key4": "3qKizfgaVYN3he5DhnESqY3qBpzd4jUaH2j9G7fFNNLSs1U2HqAboUxay28FPAkRpKq2emzDZfi4GdZWMpJPY2UC",
  "key5": "4P5BtskHXNWtc4CKaHbj5Njog9mkp53YaZY38vmRR1UKJ1eE4s2TYgVfGjKuQmiVUrd5DRPEubTh7hoh6GtMNs33",
  "key6": "49ZBb5yAdJ55Xjwexp9m4CiBr3SRk7zuZ7RN51LDurbDE1zy66cmJsdtXE1ETkcvX1JcHrbnv9M86z7bxBRpaYqE",
  "key7": "45YBUSrydTdJq228bBJeK49SwgfQ6FGcyY8MfXi4Kk1sGBxUnjaKT84c3DCDcrkwGdbMWBNLSp77LFxWe6e36rVL",
  "key8": "69jCUXaA6CCQyPJQpLVuUhdd8BotdCKZf9kVyEWDxDVRHFDLrnRVGNcaiPe6m1cnat6ZujVewDdCVgW6o9Znezz",
  "key9": "4mDTmPSZG6viiyCpVjCvFCZdtbez5wttDJtktFjiZFYrbWx3tdyCt2KpxbkHrEEcPQcMh31jFdhJuHsTjgNbitfm",
  "key10": "iwZVLy6iQ9CXitUCMSHzyWq4vpifNzybH5XkbXLZy44zbihSqRufY567uM6tVz4f9zEzDdLGq6esiWwZADfJinp",
  "key11": "43c9BygvKGgwE3WHEePcyt3DAT1Tg5nqzZEXiE3ce265GVv2mzLHFXbmT8c3baqWwfWqdMPosFZNvvY6Dnc4rbo",
  "key12": "5am4MtLoPQkXvrep8d4rvgN1DpUNjQo5dT2FZhRvN48FwVRoTZrJSxwGdRoPjE4xFkLcrUtXhaaAUm8EJKGakJRH",
  "key13": "3H6fyyrGzEu9ai2m131hLLo4nAm4pqvHUsjLRrs9kr7hJXqjdcz56F46WzzNvZ3i1WfyiyiR5T9B1zYjoNDHByn7",
  "key14": "54hatQZNZPAXHQPvg8XZ4B2R5VJz73hQpNKG8jF1q18WCSv6i66oHeP18oq6Zico5LewYkQ4kFs2uWH4BLxPnho9",
  "key15": "7Cy7ep1copp7njFHnMZYj9Rb2Cq2ybjgmfbhjtYZ9pjdsr47nsJS9h6F3K3NYpCEzeCrYKzdgfd9U7PH2Q3Eivq",
  "key16": "2Z1zofq8VEnTt1qGx4sM6TyW6CxytU3MRsew53EPRipiNVSxCfDG9LXam8yQB2KBATXMhN1WyfxKK42QzoB7WJL5",
  "key17": "PbzmXEYpWStwJYSjdXLecmHTiGuTvNanVE8q4NUEW6SS69AtuxsniobwVXmccLCiaRtfhBoyunW1XaE8rUtqmsc",
  "key18": "zGt8FceG1fc1NeVQJZmd8MuuGVEukmW8rfkfpMznbuNdDEftbdGbcHt6ftgoSu5sogjFdPzAErfUxMms2AmihnX",
  "key19": "4xsKCACmkRVj5wg5nRjTdYbgZiFxKkn5rbxqnYR3sxX32jzUprDUJ2pgRMLiFrxyhq12rznKYg4BQAZXJrPRJha6",
  "key20": "i8WeufRSQkmfU6jzHdMqY4e3AwWDUxAhg6ZEwdUmKChRpp84LciBVFwyeCQEUHFcXVQiNcra34SzhHrH7spfV93",
  "key21": "57XxnWPfSQvy76N7rS9Wf3ksYAh9uSXMTsFaon2uUajdvSaihmAd3iebMK7NCE8A1HjfUbqrY68nEAg6TdWce8kP",
  "key22": "5VkQD6SPMd46piVM86ALxby9Nk1MjhYvmSy4x9t3weZyPQc3gBDVVpUTTeuk3WM5AEfk8a9GwTGEbbbtbgysoMrX",
  "key23": "3FX2GtQXCjm5ewi2oXuYxmvP8LFtsCQksp61WHCARsSmHuPAstyLtDf2eEh7zaf3FQdH61F9Jmt2fgzUR1QE9qJY",
  "key24": "vU9Aob8ij9VQTsWFRnHUyadvemo792DNGiZaP1hntHrx28FccTx2YWQ2yF2ysWA64gWCsjwb2cbZJa57HaFSGJ9",
  "key25": "3zd3iBrEfEhM4GiTq7seEwFxHM1Tb9e71s1kCnRJiLU8FMG2ZhzmAWmhsiahUQat3DxuUYgZg9oKTh6zUer9RUfN",
  "key26": "JCQYZY4ys9bQHVyAhLaERZKfFC2mi1VU5WgsiGjjFF4mkvwgdTDPxKbsvpvByMBu64NpZ6MEx57KFf2qA9T3xou",
  "key27": "4YQLHLsoXt6ykWbpKtnVfWWW2eycHwxPqiRBZb5yHUP8NfCXRrj9yZ2jj2sB99nY1gZJM2rpAybx9HdM52zi5Jho",
  "key28": "2aqmBX8fJW2YtD4gmddoEeyM7YDu8fxFxk254hMucrrduZY7t7FcvNWLiHDxVRhCWZsgLdapLhMC6PLKGQKieNv3"
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
