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
    "vub2XKgaAxp6XBwTHyAE4fUs394egqKqMbfsT4cjvypxxjrBhtanKbb5RV77mMNy48BAwHnKntt17bv13kArEHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46CL5WiKtpVtHPJKbj7mFvKopC1nf5iTThmqVbR8QjaLLSxoyZRVbhsnfeT4T6yajxiXR4i4pdHP9H9LQbqxfzLs",
  "key1": "3HbzzrnMrBsWiysQN2m5V2YEbYrMDvjYCbDuMgUkWPwTPKDfgGKGUDUJkMxQzy1EXShLX6Fn29Yp75PwYkEkMEe5",
  "key2": "3Kc6nkcfPD6k8pyyeo8WikzcM5gj5TCs7mUhvreN6kYyc4RuqpsAR5NU9pYxo8a9gcoUoNDNR2BnmCGNVJSjNCq",
  "key3": "2ENFUDJVqQyMpHkJz11fNQRw2kJjFuGeTV39MNBwuy6jNSoY1JSjtKtiMcFZ6mmCS4ZUcU6Cs7UELnD3Z9D1zPFa",
  "key4": "37v4RsSJfLFBbJxqb9ccueNoHVTKsa2sKhvdnqp1r3CT4zMfRKordsE2fHN9a3VrRwkhKVfE1gNKTYXsPDFAGE2v",
  "key5": "42jc6YmY2kTsiM2rZLi5fYzxd5q6f6CWbDfKZiCxH1km3RoFHz6rmiVmKZb5qf55W7PqZMGu4yymDbNx88VakRij",
  "key6": "vPYZG2GGcX3MR4y9ayoi3oy1QMapFAcucwGqHq8BkQBzVBHTK3XuqJeMr3zfKFP3hB2QsQRSpLQr1HSdgd7AZmp",
  "key7": "3CswfsPpjnwoXUy5cqXYvoHd2TcYv3RhvQ2dpoQwSi8yQJaa6Y5RLpiXTtcJCMG1J1M8FGLd67qV9LBvBmq4jebt",
  "key8": "tDdVihFoGFS5MsrtmDXvmQB77n7XCtambsCP4KQTga7SrGBT714TN5KQQ1bsdgpMeVJn3WiaoVPanseWuq9HTQQ",
  "key9": "5azbP4REFCeXegUUicEZdZyUQubs443i1Nzhki9rxPum3wNF1XvQ8UHvfrW5sRSxdRuotWzzaiUv1p84yCa9rdTY",
  "key10": "29gVVGXHYBV2TZBp8eov962BFBPXGJDFfSTuBxdbpKXRSoSoza3eG5eyJknKo461mMgPUNhVWfLbxNfUdi3KN92W",
  "key11": "5Dg8fp3mCf5HpR77F8LF8tL3pjLbwjLdJnjinhpwj9bvj9mBBxtnHPRrXzgqAbEe6isKpcpABpdWE8fj8Nkas1d7",
  "key12": "2SkN6FpZwxyMkXwpGTs2D7eQSZYB5oa9J4wQAEgBWV18MTsMUuXgXH4B6P3ZNSDUHxcsD9xNjMt1r4Mvkq8GXKPj",
  "key13": "Wn86cc1mGUJ3dzVJ9YjnLViRbjjiRj5nEKFfYcyKmGfUzUonkjMbc3vMeSDaZFFNZPFMzZkt4Ykup6ZSc4VPRaD",
  "key14": "ix3G92n1CKy8xhL74f9mywQHfkNbvLmvqwmfk9AEbAY8xw7fXK4y9MXfa4URZ6i4wNTe8ERuKdGzHxti8cxueFH",
  "key15": "5PJUbUChKWjQ2ic1AL3JdessHMFNoZGNUFcbGGutfEj7TMsnx85o6ZRZWcRf7KUL9Wx9GPNHQn3Wzyaptim5Sczf",
  "key16": "3S88hBrLa7TxrLP6d7wByMtdVhvZMuzmAP7zaPHDgc9qWK5oamTCmwCQY3jnUFGe1iaKJE9hJXWjLLqs3iNZkNFm",
  "key17": "r4wdhS1YxLPcGdJWB782Ndqokuom9qH48wyedaYLi3KdCqzRwKakrxRJPj9ojvn5rpamdQjUiPa5wKNeSygPLsz",
  "key18": "4d2aGsMyrwFpspCfoocMUh18KRU38DqmQPzNQUcFLPAvepRMDN6cXuSLa4kayuhXLPrzfcTVmpEAgwrsitCk2Kfg",
  "key19": "EZXNJmS5BxP1oJKetUHPHPcc8U4tZMDQZyZMNikyDzbiJCH5hbnZeVuwvCJRiD2QhgHtPLFK42tu1W8QXbfH6as",
  "key20": "5VbQfmNQT5JMSZYzW3bN4R3on2Jcnw9SPAcm6wHJansRUDQ37yqwABTcGbCWbvyciabBshscJm2SLZFzCm2buZd3",
  "key21": "53wNM238v7GoZ8hzfgCxhiVXJoVEEpYDBZZeaqjEtPwkpZ8ScPdXb6NYmnLejeehpGJJs7YH6b6VteUds3n3d6MX",
  "key22": "4ch1CzrVY2r1FeUQfzaT92u5xo2h7pvojjciA9gf9tcPFXWfzz5hudyGng91GxdJvdbS8N9mDjXYzJDHS7isP8WU",
  "key23": "2gNoEu1BULSP6sqncSebELV2Eowy49NMDvMiWDoehHCUtqF6dnsnC6NUfKD7M2Sc644cfPFzLN7u1q8AWh3Ekhzq",
  "key24": "5wetxNT9EtMWd6X3AHeNLQqQhM92nzappQWpCt8pmfXrLYpC2UFGAdn5YQoNFBthKYerP1pdB3KaVHzqLVvk9sUL",
  "key25": "4CytADtoVFVSDo9xkfUE4cgiNZSgNrDqFy4w5vVBKnm7oKDLJcWUmmwAKS5U9wrpnykUENLEijV5TMbmgdLPFte",
  "key26": "4bdWmgqypsnDRiJgJoxDxDNb4Hp7remkYC3M8nY4P4j5r6PiP3yxcTAdQzCYv8VgXCJfzuBk35C7BvKo5tfvx5fS",
  "key27": "2RJpVhxpDELxKNUYyDNEn5aMJeQdyAz5boQfDTFM6WKR7iVXy1qpDoPzR8c17h89DTo6jU6zQxeCWKeusmfAHfHT",
  "key28": "3pVRP8GAv5sk8WhLudDoBWeJV7SsWcLXbproxo5BFQWtvudTK1jvwcjsf2ByVB3R48eiD4CGGjzG2bTM6DxQnCKQ",
  "key29": "TvKTs48aFASY6Bq387Xb1W1aVyfYq44uHWc3mqqdAv9FWBHFcV4uZpKk1MDchHSq1bqNhDiSjo5aS78DZESSTHw",
  "key30": "67BzCsmhGB5yiBctsykfV3r4GoYa5BT1b1y5AvRU37UgUWow1PJjPc3gVTjGUzzVHMY6m58aJosms39idmBwhaxN",
  "key31": "4WXXk1tiFNayNgvtpxUcfCf1kYGEFFwhhxVNwtgxuuxkUKeHFamrnSMy9NEsYZyCjzumYHvzVU3ZyMN1N72QZEWP",
  "key32": "5fMLTBwzPvLhzUJhHuWJu1KRw8igZECqRqSLfy4to4ZxTA7Nu2PPupd6CqAjFnbGjX8bp4AULgCeeK6iag6X75KS",
  "key33": "ntYe2iCyXXyDFddJKF7Yctzn8tRh1XULbtVBgyHMxFvwKb4NdqsxjVJjtM6RAnYp4TcRayFDwHMH2BRcGZLyRx9",
  "key34": "4R9Z62eoR98Wk47ycumdGGQjpDhCb9YFJ4WydFpY9BWWTD32Y6GrSWe35hhjKjuVJG4qmsx9omzQe8xag72M1g3X",
  "key35": "3Q79e17AGbZJ83JnGMortUpgYyojrAaaBtPDQCrsCVy6sNEk8FJKBJUPT67URiz48TUhLZdnp28sLdXHJ95hcy95"
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
