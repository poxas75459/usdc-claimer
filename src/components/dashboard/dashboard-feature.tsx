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
    "NBWndPPbeeJr1RVZTe5eAq9KQPpRLZaSuyaj81gbKhxvm3yyS1yHHFM1AsbS6mPQPZe2ebDtge5Uh6znxoCMu8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A7wP6J7fFdmszKAxaWbPZaY8b2fuempB7E3HgLHxYAVCLYNwXp8Q3eenwZ22kKc4kPXRszQA1DGobYSNuo3T51p",
  "key1": "6hRk6rjhurp5qHmmqfupYdiQZ8GMe3TxTrDefP8CiZkNL7sY6EonzWejr2jW2zafTvCNMfoj4apcSzAgFv2wDSv",
  "key2": "4wU2Wz1pXz2tKxzLHtQrxSYp8R6i1c22uH5iEgq6yfSfjaJU56iMQioo5PGGKJRuzGUAdU13qKGj3myDTkiSZtYq",
  "key3": "4pcu8RBFx74NF9GkShGWcnxRmdsd8vd13YWEgR6AyFgLNsWzeM957Ugp9cMUke1Mudtihcx5aJQ9F7QGEZ8RZSF9",
  "key4": "4Lqw23TxGfgUToJwQmNjctsRDX3kD7yS5uVvYx18fRdXPdjarT5pdEUp18pXZzuRjgD9URGQzjBrL8r98cp2Eyzp",
  "key5": "2NKBTQ8TZYdVcCeVajXTKCYXL5qoyYseA4CfRrLiUHLHTc2VocgRabU6tyNqjHeoeSfEQrR8zWbuNALeaUMAJ5G4",
  "key6": "uQQUT428dxHmzZLQHjS7wynuk6v1AUAdwboGwH1gwAyThJuWqrkGE2tvPpGCM6fJgoaBzTjg5282SMXGFBhn6yu",
  "key7": "2TWjEgThNHEvERKDW8UaSHzXLJC53AJqcWCbenpA3Asj8RXNWFV2bVi2Z78LyTzpLniVm2BsWkt24ZeAWpDkW6j",
  "key8": "5TiSJz8TMAbSRMMUi6mDAtX3x9YMc3EUX9cTxSysToXxb923dbWzdrRrenbboUdnJuA1Dcnhs1W6oLS9uh1SqKZL",
  "key9": "4ePiQtCLaD6LDzYnmpyJUVaFNBtxULRGzWy8nRyTfZJapxYALnFErCnFHMSW7iX4QCncuRTN5x91dpw61H4rGy5Z",
  "key10": "5kaWUXYvMi1E8ca3v5xtsMNTq1mzaW9h6AD5VV6BNuh6r3iApQBhFvUpcH8TrSXzya2XfktvzJQ6psW5M2XaUJzx",
  "key11": "2QYSgEYGvj3gPqoefjPaPWbsnahubbzRgPKgdJjwVCuZXueM9LgmfuG6xS3BokbWQw22DZaDJh8sgHUPA5RCSmZ1",
  "key12": "2VrKrUfi9Gb3mvYNqXJHhxCLxSsS2LgyR37wFQKE1R6vUabbNuK8wzufFMngSnqykS5n9KxCbJJ6ExxPGeswsVX4",
  "key13": "3cXm5sXotvddBA3NYAWGx7ntitNdJ1p6oZLUX83h1n1i8qFHuqgECf3Fc3hULp2cnCJnyXLSmLxQeUG3BHDZAAfj",
  "key14": "twwxDgGWvHwebitzqxmYwA1bsCEL4w3ktr2NV5qt5zJ6iFbqSwjTRpCExDmth6fkhGSUHUaHMW7JG3LrKz1PQ9P",
  "key15": "2LrxcRhkeBLaNZ8WeTFJVcXVmmKDZGPX39jcGmXRxUZq7Y71mVpYxvb7WnLjxAc7nw8XHB981by6R7knSTSnE3ms",
  "key16": "33t562HZTufLw7hpKFJ4SVCswahLXm6nmHnaKx4iYnqkTayyrExKJKkqXpgr9Fv95UBgTmnMdWNWPVeSSin1Piqk",
  "key17": "3QKrbCeD56DH1EbEJPxmaCwTV1gwGWM4GhHKPK2F8a23YBq7gk3ZDckGnQ389bKR1PisYQTmCRu3TiWTmJv2KbpW",
  "key18": "2CgHik2TcEUN4g52SQaGAce6VAZxuQqEzYxa6em62RNJF386gZ4tqn3n7sWusYsQSiU9kTWBPzMmNYScp7FCVp8b",
  "key19": "5TdqYv6SVM5imQwsha8XWmWdiH9X41umdDeV9Pcgx4VDTAXXJYNcWiBw6qoqYQo9tL8HZTpvYJpmfF8ofe6gBVQc",
  "key20": "1r19Tv2yU2hKBshdkri62jjYmaWatDQAGWWTkukGyXhCmxykpLvJk9iSK8o5i2nQUy6poEN9Uqu9ZuuAd7kUErj",
  "key21": "P1NZr6ashfYKmxbkMdbUcojjSFHykKw8ppkBcv9XCEQ7pxyu6Na2hscfU9PhgwVQQaWyafLbSe2GyT2XWf2BK6Y",
  "key22": "24ywESw22LFCnFzTPGsMgDVB8AeE7eoxzLtaqLnQJPDbAHcuetzux6zTKEZseWvBX7tuWHdjWXxMmQ38Py2bPwkX",
  "key23": "5mi23GELE1v5cj6EcmUK6t2FucNEhMdRwdwnAzHoCKcCi13CUHyk1q7bCdccq1rZTbEP2dNmeiovMybf3QPan8gK",
  "key24": "4ciCxcYZKJ3KWtWhWEe73pjA4jR73iBNerCWaAXg8EApZ6eo8WpHwMx52M4dZp8P6SZEVCibBXXSt771Fp16Xnt3",
  "key25": "53Tn59kmEHsgjXD2NqpMFvhnwZSEjhiqj4v9QCkGReg9KJox1JpPsU9wueqA7tHL3MGStV7y5rbUxX5NryCMatik"
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
