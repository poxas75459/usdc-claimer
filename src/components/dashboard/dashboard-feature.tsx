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
    "MJiGJhUHBVxjEaex1n9rQ3cT7eCVnn8QquKeaeD7KdZsppKaNTd8F1a5BFL6uAzPktGcpSCquvsMJwTb1JsK2g5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mJ8miZJ2HfeAHPnbmiBJCMfHrUJQ95AAW4YnTrnuthpuw7qzyogm5R9rqvSCZYsh2N94DydRdhwC6ffqoEycptN",
  "key1": "4MvDgGBAzEavhTEWZ5rpkWrTSivv7RDQdAcU7Mq4G9HCjdaj6y7RbTX3TGVzGH3L3hyAbkV4NHZPvdHN7yDqjYeB",
  "key2": "X6iuW4YdmnaZXdKAJuskZW2F3DUfKDW7DxebhJ9WLgwuWdNJ4EhvsXgki5B6rYaLMQNpjgocvXnJGLeoey2k6o9",
  "key3": "3YCXLMbsH3U4nb39nWNcqfLf8RGfej4pk5BRH1DGnZKPRX9SeHr7RtTAZZ3n1SLDQx3pcKLBZfrbp52wjjCh9LxN",
  "key4": "W2ZUcsmjPDZ6fehSZY5WjujGwhsAgd9fN6zPjgCcKAAzLQWogpfY4fx9ws2GkejU9UrFnfVGxu5mgng5fSRFJ6D",
  "key5": "5mN4eEt9C3fksz99Ed4wUfEmBy1suwBVHgMro176pQTzvx6xJKWzeYg3RKN1SaFHvYrNvw1HWBn9XYeBGHy7GMfR",
  "key6": "5LUFqMuE1G4SKkMNBdViPpErmAhcHJrzdxydyQViEsw2jTNP1Awib5HiAc9ZMjLVXvUZEGjarrphxTS62pnfgcgJ",
  "key7": "5MNiGgQKSfsYXtX2HCGiesEsP8q81sF3vGpMzGTKb8qfrK7QhmZmn1g1QyVA7mavnd3odv5FLbTRVLYH5RLxdsy2",
  "key8": "5fKH2E3azyiKY3UqsYj2c9ap7X1tTc5S7GWJfoKiRLCpc1ToK9nrbb4qRuAcPNb8TCqXSmBHPvNNL4p83z47XXDB",
  "key9": "4XZQ4E4DuouX7gCsPGJVg2ixWEZgbF23Zumk5z1XGtqivbnNE9xGTcWcgHW76tXMPSDvU7hJ52yzi7q9XUgge4qz",
  "key10": "QB93YS2bv7BjYYsBLvMX6BXwJjHqoQYA5xban5YCcZrTGRtinotHYinvrmu34Ywt4UuXqVZmygnXoYct32MWbTZ",
  "key11": "2p1kEBtN4bRTR1DkWknbDRWiDarxXmB6b89hidEYcHp3WTe9oSYwiUF5srjz45M29UaDgCRxeEw6oYGuqPYPtXBg",
  "key12": "52iii4QGjQdAogeLNyYUwFTeQ6Uot9Co5SLZwDVnB9cduPtvPgWDetSCox27pq9UfBig1by8ek5FANzjFigNF75v",
  "key13": "4TCYsjSU5ekBSMQqk4RuQ8WLxLZ33wQNjqW3MxWVpKGSmL2oYzfkjf2PxW17fFJHAZ91xtb7JaC3pVgPbPYSA5Fq",
  "key14": "5eX93cSkqZXsrGBQ7NCRu8njXz48tdhnL5ck4NFx7VAWN3mtpFFRa581bk5nUmV8xMdvR4P6DaSz2bufUdmfffn1",
  "key15": "JgWeKJ9CK5pjVEmKH4rz2Eug7vmXRbBG5W1teKkrkVhJtjydatDbyDnzme8LysRDyLRTQYFVPrmr4SPJsJfmaQr",
  "key16": "3wvAFbVvt9TdfEgZVyBTjunLBzQtVydKNfFSrc9HPLuRKqPgqoPTKPtRonKjt67Zv9kaRf6sQFEFyiv9Pi4iMvgb",
  "key17": "65TqBYBwGpNyzPJYWcBUU339hVYYE7WmcUeqNRc4NbsTAPYQXMhb4KhcMKyXNWWj7DB1i43hqYW3zqLv4sjArAQg",
  "key18": "M4yDdPUTauWLFHrRspJ7gu2THNFaYh1oDwHfTJ9ZEzTzZ7ovhJrMoMGKqwFoteKH94upEeXhQPbaqmHocYSqFEd",
  "key19": "kwubvhxsxYJCAfiZGqU4RTvNjWCJrM2fCgrWxtYHLMsbPKARGD69k19oKVUhvQf5L6hgqufkoxd4yEnvV9yEEZg",
  "key20": "5X7552F2UXg8D3YXiugC8kKpX4ZsRG3hvWZfcqKzTQuDVjz4Rr4wcEywS6XXmUz1aPBdWVQ6wq8JV9Yt3udPYCRG",
  "key21": "5FCeF4y3EpPKzS7eK5SXqoi5sZiv2ba7FCEuSujGyxkxVXAq6VUkFSC82ETrU2LZuFECfSBTr6mGeyLXGZqZEGQr",
  "key22": "5bhuEtDCqPZwVtzvTonTAeP74svadRWFTvJp5fzhkWeai8aZtpL8hihqEkMZc6xzx9qawK6jvapq9ZVxamu5uBzU",
  "key23": "2HfAkKTF5XNyT4y8cPHGzA4P8VJEUryCS9LixrBXb4BoUGctJVCxpsEKzM6nzj1bRq7ZvtuxWz2ieMqvoMALgy1d",
  "key24": "5N221MA7mCsCDwdezDkqZEpHf2wAkn7kTpPVbuxNouiiCvr59qr5XGiHsQ97xeeP3kMa8SEdwS63w3Gjqh1RSajE",
  "key25": "2tb2zcN1dhrdLrW3nhuy8sdujcanUDQ19JfmXNAcXhbf7RhtmKLKDL6wZdiC37NyP1cD96cA8WToVHXp1vFThEiF",
  "key26": "33aagTrZCi7tTFw4XdgMVCh2BHMFCsVgy4Emv476AoypUHKtMnr1AGgXGYE2Lj98J6CYicLURxTAVFkYgN1mbep8",
  "key27": "Adhnya3Y5rKhmrQ8X5BLmVtTWPd33iLnJr85nZKr4eJ6GiLetv4nzot71x4HXDG2VqAq9AH62y3VtZpRS7hFYBm",
  "key28": "2V1oASAYtEJR92WJisfxoBtCR9YG3NUAxY7EZyAkzdVnFQ2kpT32doaJUrHB3gZeSLAwEJaRiWe8uEUNyrQBm3HD"
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
