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
    "3SCkVhtDCkieUhjTAqRBwoTo9ibuZ6U9sF7FC9fxhY46wovZW1GXLYPkSdznuFS9JShbWRWDkEmChFx3Gheit7MU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DS8bfTUKLJFTpiKMA6jieWUBzaXkXUZQt1HWWGio58fs3XBj8rRdkaaAKNczTp1zReSro2rTb5dPpsXXZHTHNsu",
  "key1": "4FvdfcHsE8uSQErEMCZYTtMDfeJBfv3C6eCCPjuKj1tFFKabMHmeddsAfJKwkdak5qLu7pRRMmwkNH32W8LvG5ne",
  "key2": "4w7RvgKzyJiJxUaJC21gihrQ5Zvrs874a2X4Du1qB6vmeG4JpU9RWoU2zdNH5WNjvqJ67vpbvqMMtqDvvXJdBeRm",
  "key3": "3beQdSNGp2NPPGdN8H9r6NpyJ8i6KJbUw9gcJ9Yh7QZ5YgSXFdV8BHtsp5WXyuEk1EPjxAjETMDshmxYaRPYMsUv",
  "key4": "4QSLqWhrBkpsEquuCBbPWwkmDxUiBzzFmDJAVbMt1EPcuXFWgzrakEeb4UZmGumq7865SExGKsYUMK5Jf4a1uGzs",
  "key5": "2Setpv8dnyRJh8T6AgWFgk5Z3TWHRbUt81wLqmLtediKmi4vkQohacn6ACYzdXPKVXrPttv1yhh64q41PvS1q5Pj",
  "key6": "5oTkCwHg29EmBze3T2GYhswNioBcxSMpqxhjXWtjTS2LA5wf7dhPtzow1aZ55EwZRKhTnzn4Esze4skAN3SaZdA7",
  "key7": "43MFgiF6GBkZm637QoQgVWUxCkdVSrj67d2iD55CnhkE2eTsJQ7Sf3ojYes3KBrSjLZ6aQmmQkRhXZSEYq7SpUpN",
  "key8": "rW1EFoMfe35tgjWLSnEzi8emHjoQ3dxQLrsmQL8JFyw6cqd5tRxPiaDxcAoZ1ZzeQNJjkqR4oYDKvuHeKg8jcmt",
  "key9": "3RtNkkSwLGScTBoYaR49cRHH6puei4Hn8zb191x1bt76M2KPmCqLUMMrBX6gSxvUu4Q9meqhNJqHz22555j9kUS2",
  "key10": "4dhh3mdJXNWi7oqVFLENJuVATGqk8JdVEmF9WFzEojh4exi5vMeWcJ4NsPSXJq4rx3p7ibynCvxtuSSA4YbMrWDP",
  "key11": "4kBAdVraE9qByFCdpnibYYn9YXgAHt8LH38mazhi2y8C27n9smUYWCKSMKjjQisAUiuHsWUQNm1BfT1Hro6xH88h",
  "key12": "53fSjh2FidGoxaPMKwGBjAfsJndjjfW1b9qXu3ZjVippfKXcRq16QBWBJ991ULzUMHAHRpr79GRcC7c85Tf2fnGq",
  "key13": "4q4ZfkZtewsgJpFnBTeLLCeekmzrior1SyRJShT44VhW1f3aG8nod1iR4RfiiT29T2xB5Fa3HbDgkk3wkAX9ygmQ",
  "key14": "2ppqXy8tgsChtebP6B2FjNnK3GHsEFyZtzoLQ5MUVXPbdXeWTmsxHh42L5WHNNm1DTSqi5Z6hhaNgeXS992pzjXj",
  "key15": "4uNb4JNZbLG29GbuufoCufeDbosR77SpoWCF9ZdMv3xa7X88ja8GYPyM3eB7by245uswapHkGkY3KXKGAh4bhn9r",
  "key16": "3P5xNDxGjugWJduT9yiSRDWmi7YLNuPp8SgCm5UxHE1fqBVzquKXD45aW8Npcf79mcipuDHQtHwsp53rfn7k9FAg",
  "key17": "4TsS2CUgfzAUrxK5oDH9wzeFghcbxwkjFm3s9R4AgfuzJNByDefAZ86GAD3oDradE3fr5RkxNgUqTwY3wuekGwNs",
  "key18": "3QMw7qaJXHvQoPx9drbcnj2XtiVSpr3DJPuXKfPr3ssJKTUHtJ8Q65FtsG7Mc3smLprkHH77ZgtBYKQ6XVJrTScR",
  "key19": "3BWEEM9d14CCk3iNdoGWASsC4YW2Ty7ATJjS9HTC5nPWs6b3S97xKuFvTGwPqUdJTEBe8JK3tDDeeYhhZHjWxN9B",
  "key20": "5Tos8ghsvxk2zRybCXGSoxXR9D6bbNe9w2bt1ZnSgErTHNvLdJNjkxnp5eSSvVhULA5ehSgtj5Hrr7ESg13Tf6dd",
  "key21": "4rtyQN9Dm63SxY3cBLuCuDF1NQFNW8kPLj981QvZdgZSxsk5LPB4KMMWG5ToGAVoua4Wrr3S9GHQzRwAVwcHhZjv",
  "key22": "4BkveAA6m6q3zFN7zwpKJpocWVtK6JFF8fWPQJbQm6anri1L9VdZ8prrQFAqxHT3tv78t7iJNUsnZ3YhVGQiU5U4",
  "key23": "4MjXJEndWeQHq9cZXW2YAJVbhRbHh2ReL8k2VPNm3WoiEXpDDf1JQuRPJNqzUZiB5eGXYLVzQVLh8NvxcbU9HodJ",
  "key24": "31YPQMTVbyAs9qHL6Vayv1DtfFZqStnPgyCCvc4rqDU21Gd8mtbtVjSgRW1dTnKV9LCMF1X1XfmEv7hfd4ip3RLR",
  "key25": "51eexogN65bgEiojVziZXasdPRqi2RARA52WkJZNvrLKbN5kzGMhukuBxVTyjN4AAfUSXUDmihy5LgFDXWEja8Ra",
  "key26": "5WcDeYRAoXjKpfX9a2xs3nxBHD3Xrkh7Ckb5E8WKYwucuKg3iespxhocJ3LpUEBfgqX9rXNvMhBwGppW1UWnhYtg",
  "key27": "4hPKaERDmtVPh1xzpuShpFQ18fyHxAkj2Qg4V9QpLLL7TCbBqvdbbRPFqTAJAe4XDQ7M8tLTQER8MkQbuRi5iwtA",
  "key28": "22XKa5mPbka4wbZQpyENNEovJVKTbDxFkWduAemwd1h6Hp6DEcYKxXQ7wwuVcnGZLp42VxTQTsARxiiUcuVVXsVK",
  "key29": "2RUKQgYCUBap6fwQ1WkcEp4jNBAs5gaJHi2gSrJ3pE9hXDyfL9vd6s59Uyu9gQUQ9n2nqupG4TB7QC47BbxFyA5M",
  "key30": "2yLyjFGaJMtNp1So6cRvmCM22MesVzUWZLc4koVFQweu2e6gk7nfi9mWEcNf3yFsZpX4Am5Pnzqd148S3ZtX9GLG"
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
