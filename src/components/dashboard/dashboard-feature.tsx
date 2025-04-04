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
    "38m78fMExr3n6ZQ7MTGBNdWB4WFcQLcNBRvCFeAwJT85oRNZBZXQofq7sANkSZLVMhTioA3946wGu5sK4q32Ackt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65RZ3DzbTigrXygTZeH5ymqcVabQTDF7YePt8qeeLfgFQqVoNNbqCR9qcBsCFVvfBPGJxbDpUTBjsCgAyrqoW635",
  "key1": "33BxebVnuxmhPofjvHuA9mbTsjUAtYovM4ezA9MCLFqG41HJVcnwK7n3AH4dfpwUW7xnCQny3LDcZtUzdNEinrRb",
  "key2": "36KKKqTxWXW2M7RY2X1APzvYWzDhxJCQuinKcvu1rMr7YZ3umdtUxZgz98zGovNE38ugqWPBwcgiMAYvb83qxz11",
  "key3": "4Sz6Rucy2GdWXTbDxN5pEQpRnQGymE6icCVcNExE3qSwjfDeXG3axXmvFX8EzuTdYPG92jXim9QutySbQonj47WJ",
  "key4": "5GUGonPnUga69yGB7EdtWuUEt7upp2v3nsgiGHVDfykt62rS57H9RYsp7ANzuE7hgHVgDLJWoYjDFMftFZFxEdtu",
  "key5": "4DXANadMWptAvbz1gUWQCpd6CcFipoHWL9uHu3Jc56MzRxNfrSd58Ypupz3gPjosYLWaKHmVks1jfdYeU7G5WPv7",
  "key6": "7zVBG3dcGpiSD6LEfwe35EvMZyQa5ZtrjksRNSC8qsT3A7PxVrTnqS6f9Ay2s5Fk4KPQiC1ZNranuPnS7HCVCGy",
  "key7": "3ybW1nbnzS3v6J7MUwKtmbsMii4Dxr7fcSYN3mNtLkotpbBQRJA4nDAM9dJQ3zFaMwGMvgGcTDgynq4eCouYgBrd",
  "key8": "2WUPQCMM6dYW1mJpkt8vTH3sudrezpWxPzbTFbQ9yF4sfGCDB7RPJMpvC3t7AWKa1rR7mbytwQcTboeNybN7smaX",
  "key9": "5ut9KmAhaGhBgLvYU2FdVXHhvhxp2hiZcFoJrWyvHdTDsjwvJ4BxBDy1tvqXnomuMudt1nHfRmJf4zncz8YypZYC",
  "key10": "49i1Eq86BZ5w9C6rU1CHuzeLGrmoYMBFaXbaQawSmEJhbqfVYQGtz8zAVf4xoqcTAQAVZWLb6GWAZ6HuWdRMQ6cm",
  "key11": "4gViCruH7S5uFRcQUqXszriYjcnu29W81vFVfbwULthT3gSdzynJBb9WoCzbVsjtqhXitJQ6jjghpw8CTuPCejkH",
  "key12": "NPyxRRKvRCxZePJgMDE6ebYUFxpJLGgGkuXT31zZ5qvwB6xrJoUH79WUZe54r2Jeub4sxTCuXqJKDdunxfucpga",
  "key13": "2UzLPxpytgkrBaz3kAn9VeghsMKZCwNDUKP55GnqjSmeUXf6G8YqgS85FfJHs6pw4YargN6Xr85KzytBUgAaoXUk",
  "key14": "SHjaRQCALic6EJ1DdaJaCghBwqZk6pqoXKor8YmVL9BjWT3hCkVGXcfgcepcUfme9QX2sEZTcQMXsrQggsBeUeX",
  "key15": "4zL3sDDjjWKu6ECJgbzkKnjuKhbnbraCG71De579VzotYM2bHiB4X9s7TbEoBxFxgaP2J73PTVX6RaoXRh3vKHdu",
  "key16": "5jwzXUN1bXSYzqGVAAbKdmUnDhi2krZLgjECHGMN1hqky4mZh6aEiDqRGxgauW9FroovWYMnjU9gzn4NYxkkWgXR",
  "key17": "5DTyQKuYAu5Pnrfdmzd3ATqukpZPsNswVwe51wx1gBTiZnvicnWyMHjzhcU1TfWEpNHeiAgNNTdZAtN8ctxoCv3f",
  "key18": "4WfGY5uZWNHmWDsC7RVazCom9C2uXjjkWtN3XJtMMie4mpP68dHAKSdwhM5wVGvTJirErWhJSvJj4DB3yh2jUS82",
  "key19": "5An11LvZcN25bu5WDk81d7MQBJEgifsddH22mNgHg9T2HEfH1fQGDoCri282CWmzq8idG9L4Wnz4KcDM6Zq39S3G",
  "key20": "GgwDyScAKBvNRDcK1BNL3Svu2aW8BNnmkZWQ4qmi3Pao6BWSnHhabgseLNVNDJLajRUDRwzRfAMCP95V4RiwzEd",
  "key21": "2Zn1nF9DEG5h5moMi2gvymQYv9WsPFiefnohBgrJiHCSnNZpdr6Aj8RQBraRjgv1bnMPZxh79DyAJxAqYepDvbMa",
  "key22": "5wH2PGj5w4NKpCV8ve8DQZRACdKa17fMarYFSfWZQcNRCfZUJQZJiBcp2fzfaQxQo7mQPTrHefs5qNtEzWmqaify",
  "key23": "4kdRvsWsh1HZATkAcq1whMTJNFt5Qbzie9w8AwvjbgzJd5TRLsLcM1M1DPjR99orhdrxqyEwHSB2bdFZEfiSMWL3",
  "key24": "45BR1BkmHZ5xSyBr7Snszxxehvm5cRpYYpdzDpozRLNwPdPNYDbewwihwyYj9MgM4UkbKKFxJttgTyKzeAoQHDjo",
  "key25": "3EcaBanzFN4w55kUgjNmYCBr4ps3M7HGK92mnC2oH9yvX3iE2SXPXqyKb2MufWVHYcx6KAFAMj1PXzuc7XqRH8FY",
  "key26": "4KpMAqC7gZC3ogDJpuft6W2sYtUy1kzNRV83jUEd7mqwiLoHvTk5rTQ5pPr5Mh3M4Jmj8282oSvLvwU5SvfTuGmL",
  "key27": "2wRMY7WohwfuKvXho3PWUvJcP2DFEajDu6EeNsS8VYJvMyAdT2bkg4KoLRxwbQSov3Tv5SeMBG14zZEzbBi7BQ9E",
  "key28": "5vRxFfAE4UtnwHaqr2MswKeV9AwZ5L5BFjyR1qR9FE3dwGdgzszv1QVxMh3p6mmcG4cNgsdzDX2Wx97Hv9tdVVV4"
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
