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
    "53TR68HR731KeXRXFzmaX89eTGwSWxK94Hopn4P6S2cRNgsTQe96dqfj91r7sJLxvunVA2dNoPa6b9RpDMFBSdu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nzc4kPA9pDdAN9QtSbiwrp7TPTCstffWAwY2UYHAsrnuVK3uJgLyE33sgXcS6VZLpysyTFTLPQVe7QkzoPRKQA4",
  "key1": "4zZ38zCfDmnWswCjrtXeUBtHcKaMyjnhpEGpBjPrE6cAB4vJDB5zdtquP8XK68uXXw1n3rrQs3droWMqixNc1VFq",
  "key2": "28BswUWBjb5yRgDqzJUr4GqH95RcVJuBQsRXV6fahVG8DnbbBb6ZYqv6gpm2Pt4y9yVnKURTHoDA6FFvmD2MoKc6",
  "key3": "3DApJgXmaAv4Zfe5tzZwHExZRJoR2vT3QLodjFD4LoSxYNmuU7H8c3gEZ8x9YEY1V7amCofwpyDF1CWJRdZ4Xqdf",
  "key4": "4vGRLiCP5YruxXogsdBiVH9n2yEXpvhBXeAP6RD6Gu781t1CAbJGecZ23z4itEfPzNqCmHA3bsSwyNLBH7NHZz2q",
  "key5": "qeZRV5z7KuuaXN66bdgPZzEqeUxawQwDwRcFK6Sz2FfEFkQDyPc6qB9TW7Bi5nZ5NCFszFFHWa8Mmg41RHxxPuU",
  "key6": "2YZT7KrH69tLcMkCgzCVA4PZUtBACGK6SgwVUJarUYYhcEaBN4tYmjgosi7fT4f2W4Tcnmwa939V44dXQPuKsuYw",
  "key7": "4KuAGRPm7RP6m4UNHyGesU9bdPxkbpPYmkvz1NptpQBN168ErTDgK4EPVzqnKTZKVLJ55qgwjiT21Zyq7rusevGH",
  "key8": "nQZ7ZKBBQaqExSbipowRyoE3Ni8LNy7z872AYyJY6tTjAnxHRKuNumSS8ywwmwaY1KJm398Q5aViZowiCPgooq1",
  "key9": "2VfeboVXGhH1Z692tDyNz4jjU6o8tKCjWUibnXCMyDbykqSVaKuTDkmdZFmmUpqoUhBnRmyeedaor8CEtPTBf5Vv",
  "key10": "3m7t88r1b8BmRpAkZBpvk6oTRb7Ls4HQ1jEyAdVFkxt9shctkYWcXyECPuhxNxd4bGZwZgpEKv3TphKvXqwTi1YA",
  "key11": "VzcxzuCf1DKYoajwfZSHeP2b1V4j1JNoWRq861L3u8kvhN3YNapTx4UQrqyxmRzXarXtyV8JT6pahRqA2NTaUwj",
  "key12": "2FvZYJ4mMzxDbXWQxszimMNHMDpPkzGYUjf7DYQSp8RVMrXGeJJfoThGgjwGhFHccaFxSNvvigw2yc9H6cPkKcEB",
  "key13": "2RpnGZvM8hBK1SAhVM32FRaUYEz1QkwkWJBq4sQnvAQ78om4DKds1tsEJsrH2fEhQvN3ZgH3zsZ1jAYZo8QkC8QV",
  "key14": "4mJS5xxAgWpBR4QETW1PpPqZwgJLWrDeJoPS2hfEkxKTXt4DZqs33fRQBkrtqTWUKfJJ4RHgeMXLEGneEhwfW3xw",
  "key15": "4gdoE94cYMeSVMvNjRBCXS1ajzGFctMKbYbr9A4KrU9oQakW8usKEi6dX5EWvwv6LxV2J7UU18aT54YAJmwx4fsh",
  "key16": "B88YRHktNZYmknGkTWfmXPmNsRgv29GctwqftNoYqaVTbiXSZf21dgMmvsX6oC9QiytEoovtGjbDuBB7H5RMBLD",
  "key17": "2gFrtmw6SGShbfbWocQHpodhHgRJtnURWMb5BoLGcMrMccQtRVaBbGhJ7DoVHa5gCsBRBjbN9K37cyUPtmVDwiBW",
  "key18": "2HPpA7ysBMDAoLhu4gBR445xrEZswCx8chiANvFCcL63Nsqtgv3cBAjseTpx5QGBd3efe2pEMpMM3js1vFEiPKHx",
  "key19": "3tHYHbGjhnpPzdnA3GQax8TNL8uXcnJpgSGhgMgd3oUpMYCPg2t9cXhihDJj2iBur6KJ9LtUn4XxY3kciDN48Jet",
  "key20": "2UPgtWpgBvjkTAiHiQrdR8S5EU1mvZ9LScGrGRwMyYcVXw8XSvMWrc9GtLk77AtMqfKusAydtiVm4NkeeH4SRgpa",
  "key21": "2hFbnnUGqBrFE3qrvXBdEXNRmfvXe2kpRRVnivGFVGsDXkqe2gjdSMpVVKxJ5GJ19yQ19kKZ42x7ZBCDLRtJsK6n",
  "key22": "3tp7ywPAvWkV6yixjGpaKUR9zsXtu4twcNLFXyZ85AFY6FzoqjA5oSyhK218UdDrNzzAe5VFK2Px6ecKiyJzWGhD",
  "key23": "36J3PqFfRuAEcKrMgtd6KpurqsqpdDGPABWmyPg4Q3GarT7cz3awitM9PxTWmPkF7JVteZpLLScSttwJx1LqdyBY",
  "key24": "2mgE2z4JTecAfEs7CAHajHS4qiYj2oE38nDV4FiPL6jy6F3fMmzsra16f47XWFuJpopW8hQSsmSJsmMZn6uVrffb"
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
