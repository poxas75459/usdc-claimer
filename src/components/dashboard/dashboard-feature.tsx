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
    "2cScUqYC7K3WpmqxtaHoqG1htnaST1767yZc2o52QRXPftDC4vzK7pPCExgBpFfh97F1BcxVDvtRUKJaz53UvgSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "445yEhdh2rCN21SgLX58XB2GqGiNcBaWX3YRcY9E3C1t4Uvv4eMtEBhPgdkZdbmuzsL7MdFJ6oDA47wH9nReLW2R",
  "key1": "jJr3gNAfR2BGo99ZssAQtmqr9nP9t2YVPqgjPsc2BCyhZAGLk8vwEadn7Nt9nybnqoa3g2cSW7PmPwxvvE1S76M",
  "key2": "5duDTW5iYu8udkNm2uY3UMTWcjp3ppttNvaZrWMkjZwyKQTUgvbPF3LCnVZ8N3fAFo5fLgaoA2ShAQcFbCHFJk6A",
  "key3": "4hdEbmqcUZrHehsroBrkMmPyRh29WhphRabL1r8vm5GG9twSiiDZ99MDk9S7J9PVMR7GLLiTnymjUrngjMsyMbXR",
  "key4": "5ekpe8dc4utqUTqAMsaTxM3JuH6wqi14DJ8NXkoBXtbq1jykzTHfKitdy2gpR8iaCTuFsFrs4MJG8DyE9zN2EBqF",
  "key5": "5qR6NkcxiYbbM19sBeAbAV1RFLDFWLNt8rAdQNxdkZbNS28xqUYhc6xjmZaEC2fh2vGcx3HPGW1wSt8cQ4np27MT",
  "key6": "5sXx6zB9JnEgTgQxKNkcxzbSxLjAyBognaRviET7cJNUvBMeYMZVpHZ9DtT2dVMsRQkWXRY8v2y4eLceWjAdacNw",
  "key7": "2ovvaigmsZ4q7cKKmrXDFMj6Au5t8esJ3BPhcpvPPYEmwkpXyR6hbhRiKBAaWtQXDFgoo6Vux2wfjSYTRGMEZwZz",
  "key8": "8jRJpQYvNxBbWTwu4GMLo16erfvg7gQmXkmgxJzuE34YhHv5aNiom6gfVU4a5mNRM9kBFf1y6ksWeFkaHNLPcMV",
  "key9": "3nbWzoDffbqMorHuGJutHy6JHrPbdyhnje9FZUpGexhQBVn5WHuSQamc8tEB9gExaFuHgsV14fnbxnGMQP6QsLHs",
  "key10": "3NRRJtQMwUcA3GE2VzrF7pHjJs1SyHp7s5hQsU35uaDzBdWAx1aZQFwuYAChMBtfGD6ZHt2mxV5tQjLx8YYvVoh7",
  "key11": "3hY4PyopDz1AXJJUfsZS6Fu2MasdMgDDmWL7UziuMk93qBQUB91TgwhRkVKREsCGbJrjDpKFnYx1kxP5xnvdrwWw",
  "key12": "4hDNJzfWHE9Un9nCxrweCyCAQKaCGCTMBvmL9m1kchnfjRhSyANyrG6uFrr5WTtcqScD2rATiqaj9VSHk18GFoDz",
  "key13": "3yWhxGbSbmELuTGhowzX2Xraxt2AUGww56njUgtLNxpje2vWHNrYpyx61nbcERkLxDeve1bvc998jtvw8nG3pR7y",
  "key14": "2zSsiXJZyREB4s4xToDjzfAFQYkKMhv5ZNNmiQLa2KTmirgqMAEKJVMzpMKPAy7jfsQWNtM6EUXbiUJxnTsJEJPK",
  "key15": "48L5u6vTo95wCGyCk2vJbo2EYCyAJL22windFLi7KzHP9D1eHx7etc2GxYs6VpPBLKoj8k5S5Pw9wVUswmuBM4Qx",
  "key16": "mBHDVHdaMYpwxyYdhETmePbD6Bq9DB2o3sM3MiFrEp2za4snYeVAnnnTB2PU8E3AJjhcZiZ3tahnq5oQMR1M8nE",
  "key17": "2mapN4JMyo3HzZ139YwDtaDf6r334dETk7ToW2v6q1ZjYE7HXNWiYVZyAMboKiUPg3rbDCofEzzgJTbVtihN6Ejo",
  "key18": "3T65WsgoyWb8HBgWpXFoAR8LawaQxQoQhc1bMqDNJmfPfnrzBwpb9EBNJRYwMxS5PUxgw61ArQbW3yjBky7jVvdH",
  "key19": "2AydauoSyRzT2Dqch4egqdFAzgXSiTZSWSmHVvGA62hwhNqCBvXQp5yJozGefeZizT9DNNsg7QBK6rhe2pb15c1N",
  "key20": "4dnQ8QHCP456K9mXNWkATLoRjY2EBhit5Y3LySU3zWFYN4M4eyyVJ8PGFAdE6UpJKMVSuT7AVdV9Yxq3Fc2iN3NK",
  "key21": "4qNGGe7sD3JWNXFLVxtzFuzZt1s8g3wAy2W7hQsotJcSVmftXnkFYDM6fVDwceqeCmWGE1KYxxkTD5SN7zQsWE1Q",
  "key22": "3GGphKoRiSq8q9sg1n2A1dx15Jtc4DDeCfBPpNKMb9HsfaT8MMR5Cy8KGQL1AZyoueVLui8JpNLmxhuTRWgcucv1",
  "key23": "5bkea7XHB7R7LCmDaN3AG9LrhRSLgZqsqMFMik7svHpnFvG9ggZmJsuyeHNvgzLrBjDzbQ5HiiRu1BiD2uq36xdk",
  "key24": "5La5phsRvJYBkyyzeA1yPjqpuFHSa4PqM1futcCqFYx2Xtx3tb4U5toS7McB6UYQvJHZ4qDXzNoyLtGi5asaPveG",
  "key25": "GQjMBiXuJL9VY7ksiRUT36YMedSULcRUGqaRP1e5NVXpBmXJGuQ67bZdwGonAfYz7c2NMACTL6mbeAhuoB8ELKP",
  "key26": "34WTsZFkQeyKKfV3WarsQQQrTLEabDvVYRWzHYL5NGhSBasZSed9ixqFBmRhcEtz15hv8HG94VPBu52VeaTtg1sW",
  "key27": "3v67MLkMQAnHzZZPpKdeVhp5gbaq8NQodHS4HP63mT3Pfqr7hmgaAHJz1BczWZqAfWUk4ByM7tDsL5cYMKueQd56",
  "key28": "C5QLitdM3qAvnZjFUzW28i6crEDNhdAKZVpowJJEEzYhP47vVwW8xvQpDLSp8mrCLUk1XeELBAsbEJXKymvfm6Z",
  "key29": "3Wcv2rCcR3LPMHjrYpssEkx9k1Vo4dZuhbFevCLpXXm1ym7rES2am2Z7pbgo81TXWBrmbaEja3WN2haFyanG1GNu",
  "key30": "5xrRCh6EfSLdsf8N43wLz4ZvC6mJpsrCpGTYE5tkyqAjAnsTAey83jHZKqrqDVdRWZHrmQ9NX2z5wAQGTUhZ2JDh",
  "key31": "5GU93aUG8wtwPFTgTnQTnjaYZ3vYCbbhtg1xUMgJBCvpR7unePKDwZVFQzxMjr5KX8ZXKS5xNLdic96b6CpXiRzW",
  "key32": "3jGUU4SsA8UhnmoYa4rL4Loa74YtdNnUhv117BrPykQSRE2BcodPCEiz2z1vFVcQJhww5XH4Ut9cLm3MVTHXJn7W",
  "key33": "5UXY45nvHcf1ErmZ4ijvrSHp64GSwoy1h91AbnwNJ58J8aDuzBLLJzSt7DBTmbwUAvSZGPpa2kX5untK2XxicTau",
  "key34": "5CkSiGfhsMxouPsZ4ywNi8qTXu3UaYKYDSEiLVLT8wDHWFX5i5ac3FAPWQEpT3CormBsBkKEiNYAgzaz5C5BHHXY",
  "key35": "3WKe6dpcPYuE6PAhPtZGDmVgV6hGpg26zsZzuoXL6xZYC3Fxdq4aDJQKW1xmoVSzhEqe49wYwvxm18yMsrpUTQvD",
  "key36": "28EgqvtNtJvdAAT2RYH2uB8LD5tbESYgh2HJXMroHigaoGeGTvnB98H4Q6XXPF3NSzvUNGN8wnBfMGS8bYnAbwsn",
  "key37": "5Lq7DrEYbVpxaNCLoRwn3E6rJ3eZppTEgcttoQk9K6P1H7p4odoQStkswraVJkPNEqEYbazoKBLLzN5WDFiGX5m8",
  "key38": "5Cs3XRft6Ahm5bhND8nY85iHGrFX1gPwZuGP6tHzYTS2ko2zmkEMqFNdtPAAmbukmMj9ska64VYkNniW9XLi6FtT",
  "key39": "4DyepWDjxWLDZYReLyeXmm4vb8oxEKegmoSh2vN46w22h9oFzUtWTNCmAF5ce4K5cVtBfirzM1G6Z7FbZnJzKWJy"
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
