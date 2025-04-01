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
    "2nZH1yr5yntAbxF6hBYwXwsX3zmrhmivjJWPz9pDtHRkDU7i1mv3ULgzfbYGuTrcQsWhEeTvweBH4rEyD19bHHg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y1vzmNvZCSFHNKGPGuVUGDX3NBUb7VLttxFMc9GWh1SyAspxi2Tr9TtUsAQzPkwPy5C67Ss3vPHQ1wYDNAkqXKa",
  "key1": "2KBje6r1wNVKA2grPEswEf1SSAk6twj1MBrTvmSHt84adTVVggcFQCeRerfsrd63mkYuuRnv4A4BpeoZEpBkJVxc",
  "key2": "3VQEzeQ8KsTadyWWcjF61aFrtTa9VrVUnpQjLjAi5pioEAMSVwDUqcrwh2YjAXtKpMhZfWFM3111qCyfeJf9xXdS",
  "key3": "4uXSsArixqPN1gMxFmVPK6VREZT6SqoYkNnafJ7sntLbLBwaCsf3BHfTPjbTgC7EBmaG157CQ7KvaQWuaiqEbbSY",
  "key4": "5SAK54pobzBvuStjB97apzp1zvkg85s45Vx91qk45XjHkavuRoxUAGsVsDfVrVUR9XF4qfreR6QjWEaiXLfuiLz8",
  "key5": "2b6Amr4ej86jNoid8qqeNfFY4tuV53Y1x5UfcJxKqxvJxwjdsXbSJPheAR4K2R6PYcuPpAyMbQMBRMyRX7shKv7m",
  "key6": "2CC7fDDnPHhP6qZ2vbNMg19Q6kd3CqoHAzb9DMV9eZs5STmvH8vrLLUhddvXPRmX3Wt8VqUuGWChyd3VCAFRkvyf",
  "key7": "39UmmR5Y8kzS5gA5h3kMZZNJGCt1Gwent7mipLi7ESBphC1aEBtf8QHyQnexGTTxdEqmgCyjeyM6BhtinsvmCoVo",
  "key8": "22uPv5sSgUPYaZg4QmJwzrGDkcq8jsVwWHL8MmiB9HzD1pueuj1JSCKtAn9sNxmm9uojUi8AeDesoZCqN9A5FNej",
  "key9": "3KFwT47UeXuuxv3NC1jicbttHT3oHeDd9tmrytYDk6sqNqMraA4nPRp5wazzn9iEq5GhM3qfayzZ2JiUyj54b6BG",
  "key10": "37KEiqiVmHGd6Rjo3UUD2LiQREgHqVNca4kHC8pToGpsRagcwEbz15eWGBYWExNrgLRUcxQV5RpFcedA8BkpVGCG",
  "key11": "3owTUZ12Weok3mrzKUyTFcfpxFB1Z5XwXfSiE4Y5qkc4K51k8oMws5tK3vAZwvfzHcgNjy3497fUnm5kmDPpVjeQ",
  "key12": "4Bxtf3SuYqktskzNDad3gEK2epopuzg7W1SgiJnhUXZ8FK5e2EmKmkX5QQjGV2SK1jtjpjpmq7Z2tuzG7fkv6U87",
  "key13": "sz1uYXCyqhw8EJv9XtubaurQ2ewNmmteWNWqstZQDTNFNKzmEVRVAddDHakr72CVPo74sWmKS4AjnwiiUoxVZng",
  "key14": "3TpnyK5BEQkNwhJqFcS7xiW9Z3WKjmiZMrLwfjeqjoiF3uGP8cZMcYY3F8bexJdYoi19HH8h7VghrAiyuYPuuJ24",
  "key15": "5tXyHRUzbdxGz9Zo87uTVuNXE18Gd1z9Z3pmcyd3L6Hc3oSBVsPLSo4KcEeCDTnqana6pEBvGF95Y6cw6w3d9Cwr",
  "key16": "6A2oMxHCXRXT44PYqqqdsFK89bcDz7zz9nWgN9c9xZ3C5P5CpoKbQyBeE1T5GnTD75fMGwADM4qHJWNTrVf1573",
  "key17": "39zczxNq9zbs77HHUTYAtiM7ZxbAq97jmLXbmFEAVYaN619ccdBAYSU8QYtz8kSUMhPEg6kD7cWTVqyQxn8Lqxt6",
  "key18": "2sgZ4H6GryNbfbuA8p5BAuBQzvegL6nyZiSDyaK5AswNUrf7t9e1TycdnC9xK6HcZ3xoPkD8BQtRwLj3ViTy8MRj",
  "key19": "5UtDRZqjHXVhLLMgtZ4YcnqpAJSb3jQz7MHM9XKehop2TcHiUe6ymQ2LWq5fSU7eHGM55kMZj3TAi9CnW6WKsi7d",
  "key20": "5QRtoR9E7jZ6YHyHQjw4WHKLo9dhQjJmU4eEZwmSE8gUvVCKj9Cdz2Z9fHoFAR5Sw4Fc3B3Jpt3enEpc7PWhxpF2",
  "key21": "2FrykdsVhV1vTPX6GJyhU2w6HmEFCen7RQDAa4Pvegt4bcJSFr59D44UcekCf8R2AQQbwc5tpwTfouByCLmfPhLg",
  "key22": "2aJVYivRAnjQgp7hVqkn37HfPq8VY8Wt8moAfsJnyKfSPCb2R2PvevXB87C41W67DoW9aEN8VJT7ZC1atmyWxwkk",
  "key23": "2XoeAmJ9wbGBzUgJAtFaY4Jhc3Gdr9PJHjScmbP6QBFoJ7Hr7gKfpAEE5rUib8y6BZT3w7wKaWqPi4k82LCqW8Am",
  "key24": "5TUoxWm5TVL7LC5abs8KyERodWXyR6b9dexTvFxR4Z8RSevmDhp2GCXakXhtc7eq4GfkX7q5x14MAhbkmUThkxth",
  "key25": "2TT1hXgmPuLVuuJKpVszdiPNoZDPY3mCBWN6PfgynhFdgJBsheaEcSVd8XWbgNrrAegoJ7uZyeRUFafVkiAwvX7S",
  "key26": "5AuUAZExL4Yp4HGH3v5ioeeT723mXVa2EjAZD5RkjtYiFQqw42jeWd3ptLG9jA3e9KzZjSJPaTwhwBuCVHffWpNJ",
  "key27": "29fbymrmjFtQkRU5mWpXFzgbr8fJJ1SRhtTJmg4fqehDFes9VB4AYNR1AhSfUsTrVF6ZMEMRkdgC33dGTa4VejPB",
  "key28": "3hYB9kbMt6yFzNbPqpijbp3xiUyitx3U3X66QUz1ryZ6Sfhk56BJJrRK4wMTq1zSBKBsk5qjAnr7ExX8A6db8Vj5",
  "key29": "5vZB9wfbZS8mWpsV1yJEDU8F38h56uV5FzqDq8jZ9iG1r1gqebzs7tAqhUPL9qVHKgDeErQS3G7WRrei2XVWX3Jm",
  "key30": "5bDMnyCBqREvTw6mq8JTeHfEkD7Szj1Q8ggFF1aDMjh1ZvFunCSjZQuyh4ov9CabMWsPAzoyPnSaRGrDAgAxiQfQ",
  "key31": "2Uywqy1gGnXV1DQz1EXjPbQrDXySx1gQL7H64iKiUAdCJyUaV2A1sNe5UTtwsL1xNEvKpwEr7g7Cc4S8wPN9VFQR"
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
