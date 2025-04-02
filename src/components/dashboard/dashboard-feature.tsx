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
    "5tPZ8suk8zU93aFUFLyChN2hSRaii8jvBzPM2RaoooVfMy8jwKrs5YYsjLrccQVU5K8Tg2H3awSij8wMD7aqfqRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fghPpFY5HkVnVjpRKZbXDnAg2bjg8zG78tuKpxUh6YbmbpVbPF8PYrkvv2tipcxiKR42kSrgiG7cFWnftVHDQoG",
  "key1": "gvHUhbjHDbok2XxCzoL6swzozZoX74teBw7iu5fLZC336ehrptaUVCeYj5UkTYm9N12ZeY4aNZ771G61P4x42WT",
  "key2": "2QQvZJ8xzj98iCvEViGMNUjqsa667kCPx333hog2GWDtmq7q6ZkdiTcBqyAkvRRNtTCj98PRRg4hkbHga5tgGxd2",
  "key3": "2aV8xAbiEkZhvNAVsnBKo5TJwe1FAaTx6ebbuseGMdgMJWnbfWxfBMebPbkEzVs643GdNoZMLjQt1ZXV2nm9yxtR",
  "key4": "bDY6DDXFTe8qqiTETwG4VH9eE2onpCAHyMG4UKfwccjYqYYWXfdYWm2Bh8Sn7EKjw2i9Upv3YjT7sXew5QNtwZu",
  "key5": "2P8tGcZqUYXwfA22DdYY3G2AjJEjnXCvsdVk1pNB7oY5g7VgsiUeeUm3Mh588e46iMYBv5dCbTvgxBdy1y9mGvMe",
  "key6": "42km9pbKV6PNk9n7xDM8iGBi72UhYiEwCBDg89y5rvLKa2kHrjYezr3KpxyonYNUkpjMDvWqae46nfA4PW3aWB4n",
  "key7": "5EeF63sFjctqvtRGYC1tXWJjqvLBAiTEdJWEgzgPPtQc7mkHUUgjHuxuh8UeVwgsNnQnV8HuE2yHsL39S58DW5X3",
  "key8": "TtqUNbdCqJj52CEX6SG8tE843sz6vyAYYheyUAwQjqJLkVSxujcGQCpT99fYP5RQGzhaHGFDfkWmSjPcNzGrfc1",
  "key9": "557u3bopYNRjgJWC1kFn3Lke1E7KXrwQvETNffqNG57VbuLV6cHGrdB4v3ySgTy2xjY1bst7Ydn7NCAqVPbzAVYp",
  "key10": "4BihCCFtrwJNzxar63CSkxr4hJvBWw9i4Z7naACQCNCY3arpwaGEx21aetqkqqB1RXziUFkq5TqxN8LnChLVfQAV",
  "key11": "23Ue5axYphxzrPtq1TFMtBWd3BrWLzkujyjAGRU8QYobM1BVXe671ujMAeqYx6HaJzALzc3sGvuraoKRtfJkY4J3",
  "key12": "5VXKnJ8zfm693N3uwcHa5Rg2vJvzNj53E4stTVQ5H6hFiMoXnBDmtjPMUPVUvUfHUAyJPRMhLwzbqGRdizEoE7bc",
  "key13": "nwbUku6GWDBBHcBK5n6DnMQsBBmAkFEPNQXbfvdvj3AkuLyHArbjHJ3wE2GftjhMqhRu9smyzaMDDQNbmM83dWY",
  "key14": "QiDAZNyb9GTecYFSa4RMuWWEueiEPfXXcSNkMxf6JNvRkhvEFJB4wZw9DJcE1tLsXFpaCUyq9Ed7v4QJwEsYsdY",
  "key15": "4YpBkdN9eQTpgUctZ95RUpnQ8u8F4rNSsZcHYSqorNAHtEjVqyuFhPJahiEqdjyDZWrKc1b52d7yELKKgUMv5RtY",
  "key16": "3KyeFjGgu3nVwqQcPo1aRwVXSfMWPeqZrgAcnXDzxBpcLUYQfp45xoFYeJxn9qZYzg6gS1Paqwpv72YUkjcz9bAL",
  "key17": "KrqpP7MQFJWCJT2oGUXU8PrZXnHtbBvyh34M37twqLBikiCNE5bkDqXbLWCkdTeWTuJ3vw4vcWCLhvbuTTFiUdT",
  "key18": "4xvHQT9jgLyy7di8TH3yhjDDZLMkbSAeX7iuh5Ysuwszqqv2VxuuzZG1X26SJwCADHxqJhA19UYNVMZa3DHz65BP",
  "key19": "5GUsUCJES8PUoPuMbHGCi2z56vgCJybvjs9Me12VfRw1L5ZizuXEjFJp8PjvQrUXjCLe2hgQBsJxToLWfbNnUVjo",
  "key20": "3s3goj5a6fDZHvSTYLmb9HUbMncFKcdhE5sWNTZd8D9B5BrpSE2cmEqjaoLnBxLXb7UfBQ63xfzYoYEazn1zwXr7",
  "key21": "4VvpJW5eD7iJz97mR3m3Kz7KzMvS2NGb97J8QfsUzTZ7CPwU1CyLWEuARwyEsYYkTCmMgyJ1rVGoAcVS8JYUGafn",
  "key22": "HeaVnzHEHGE2UGEBHsjR6HcAriuwon9hNufzA9zRRswTa2Vp38RrAUeEtv7GTqjb2idG1GD3Tx5fERgwxnyognM",
  "key23": "2E1vYrSchFCEVVTuHio1jxgPDcD1VaW4BB32nppvJf2DcNdwhKvaiNyV7s6aH1b9WQJE7xoRPSFCyGkWNjhTdd6c",
  "key24": "5js8NM85X71hPUNbRZ9wszazoDFX97z9CQGsoh2TRbbvLr9N2RAAXvaiBBxMxMd6abpUK4gD9buDgucpPFdgqhHq"
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
