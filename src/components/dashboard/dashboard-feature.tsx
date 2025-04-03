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
    "2LehD82gJbzPS7Qo9cpU7ANehdu7kBeTjLnn7gQEoKMyHiJRAAymQzNC9CjYnGrhVdw7CKvTB7WorJWZpyQzAttT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pfPbkeu6vk5UB7LrpcNyYWg86FTRH9jL1SqVfgqSrAbo43MHLyw1YZZF7JBtwG6eo4TiexVkVnJKdXyTqXd2hTy",
  "key1": "3VWjVUN2VkDLps4J4s7MkMiBzPpyTtKoKVYMqoQJEqdpRmsjvhrRAwos8BzgAiq9nX7PviVcprpXGyoKETPBEuoy",
  "key2": "2JkVMoQLnKRD5UNR5xTRczPBYEt7WduvqjtpY4x8CahQ5DGWEEcJybau5sWucAqzLqcaYkp4ZshqH2rcGmcGnQNM",
  "key3": "3y6wxD3kNgysq3rgEQhsYqiJQHp7t6ZZ1wvxWxyZtiZeJ6rVPoeuWowkuVYvCzKLw1dpHyCKuGWWyRQxcP1LhnS",
  "key4": "t22LVef4eKLSXzW5784czRs218zf5s9riLjs46HuPth9ZsDswbmAAdDNKyx3iVircRm4PvervKVEZbXrRhJzncK",
  "key5": "YEmVj1vtx9W5CuZjKTfoKKKbG2oc2x4AVJZpeA3sMF4LzSAAdTpGSwpn99XJN1VQkdft5eP8HoMZt7qSrg1JHje",
  "key6": "2tjxtr4k1YFU8Ti3cQ9HyB3LqipeF5ufQiLRV1M3FCxAxV9ba2u3xy6ma2zNUrxNdAQufAgFdydrAr3jkQDEC3fL",
  "key7": "4eWXaKpbfNFudTX3P9CAoUS1YE2UF9sq6HgoHN52Skm1kCo6NgUcQTp4YaxWkNQ2JXVRF3TMk8Y1eVxfrQLstt7f",
  "key8": "3shVvDuNikRHF5vKmbC526rhR4QSWymCohVogAp6mCB4fbuyrJxg7B45Xn9pjRqvtgJvmTC7XKJQT5zERoDkY3vu",
  "key9": "2NiMnJX85bX3tioH7jmTNobaL4BvvL2Vt3megq8FHsjfcXYPQmRbUE3fKjArp64N9hx3xnP9sU3KwsA6NCwJDfAH",
  "key10": "5uDgAQFBKZ8NsPKkS4nG4JhXX1Pfg6nDVxJPCppedMctQcsDL3Xorr61Grc85ze5GxXs2VTLXdxKbWnr8objaUpA",
  "key11": "5Qo8DTCxTffmiCZ8vhNXNmXTDRF2BPwb7w9oDq6c1KdwRgH3aACC97ZWZtz9vt3mKUgSuyZPn4ATQZehWb6dzAnm",
  "key12": "4EwMdnkHZ6qDeTPExBA6NRNtFKBqatQiZnphbPvr7ByXU2bWgfxExcLPDN6FxZz2i1zLFjAPtGvk264w1pP3Dru1",
  "key13": "4AzzNMmB2aj2W3ekRyNzSVGbufbKuPP8Zz3SgCcWLTw3L7U2wzLXWyZrvMM2yyqWReDSSjfFNvLuCiLgcFvqz5qU",
  "key14": "3bqh2FdZs4v3Ng477raHL1fYT2fK8YbLziwAefKhmE6QRjeL2LAkMi81obwotL7FcJu3UbbYnNivUyxZNxpjDwrS",
  "key15": "4fFz4CDF7QwLnGx853WdCH8UMDZNinEoKVFD6QyGjZreZ9pR2MA9ghXUoSJGFt498ogLeTBxTSwuRc2aMpvdeG1d",
  "key16": "35nCChkL8gBesfs9zeCWzxNqy1tv5f7FWLYyH7wbJPWJgqaBtCjNQuW6QzHbs16Vag2MDCqgLUmwGLUeBS5i5S6L",
  "key17": "5BWm4dP4DmXaUqR38Jqb4FRR5ckfF8Zuenu8pF9dvDGHomjJdL7u5R8dGuRtR9xrSZSdEnr62MYmJuYDdY6GPRxa",
  "key18": "4JHJKqf2dTgDT8H81DwFEWN7yFJULHmYzdKFpy6nFL8CBHSWFCGHiwBQoX42DrFMmyLbap7ddTdPKLMn3JKXrkjm",
  "key19": "2AvbjirZQg6pJNVvUgP4bPG78qEh7UhajEbsiQSrPZhYd6u7CJ7AdzCfiTcy6TPUBR3RZ4pZzJDjQBfQ4W6PhTis",
  "key20": "51M4cGFRfwetihHTVDtApte1rxXvQ5aoscPEEVSf4hRkSgcMrK6x94Fc3DbqpvqqMuowuaguDsa9G1Gcwevj8dZz",
  "key21": "3UJRxKWFVYY7UutY2VxmS3pVMnvb4rNsoi1xHMMjkZLsxQs7VgJn27BLAjEPYnH7PPiQt5eqqxZUv6GYu9rzLXKi",
  "key22": "4AEBKLFcbRpMCx5qAgxVcTAJeFydRBFKkXr6hszUhqnAgxd4c5rojkBAKYCX76z2krFMQwevbtmEobCnNV1WHduo",
  "key23": "2muFA2kkdrUMwV5BWJkygR71XGHaBiNFJbqRZ14uxn16s8Yt9Zxq2UzjDDaYmyCxQsComKvApniFHPeLH1MDZxpc",
  "key24": "4LGwM2YZtR7aYFio33Nu41rjSQdkDTFPuSjPxd3oHY9SUJfpXkFVfHeooDVAtNiz6SSbnTvErzLvUrJCD5nbbb9L",
  "key25": "5pEvsFpGhpH5EMrRG9rnruT2GAcG7aPxELSkB3pJfsut47ktvFyik5pbKLztbSR4YXYKwKfyiZYKwkaZchRyRv68",
  "key26": "5eonG3LxixRiZjbJoYMuqeMkDrAhcaFMG5wGLeQehbkV16oqJq38mGQAC5woPHW7tth8anV87jogKYyofEzk63M",
  "key27": "dENpKTWt8pnjuGytUezjqb1Qe37waCD4SHXSGqUV4ZD7ePhwqiUFoXDNvUhSp1eC8MsQW9mNdzLwiDJd6VqnH1W",
  "key28": "2o1od7b2uATCkSZGD5KFLBvrb8hTWg3BRSJHcbyarkJkKsKkboxbDmYVAwiVCookkP1tyFnVNUgPU2GbuFLxMjqc",
  "key29": "KXd7bX7c5SrLw9aZHji3wrs8kFheFuxArKu6tLugTwpVePKGAWVUF1mR3KkZFDmz8HiLcgZYR8vN6Gyk9KtYhgt",
  "key30": "2X1N2QTR75eQJSwDh3p6Pk4RZDLSBUPbXJceztN3CCKBJwgmAa6wVcSzethrxuCraDKTgAUbYYv71J9g9g7Rt18x",
  "key31": "2C3Y3z1ntaEazF9GuDTFNtfRa2esiEHWw6HRjEM12thxfJQP1H8qSa4ReKi9eiZEvWhh5Zeb1iwgfBJ72XJvbFoP",
  "key32": "2UeL25e2wmffZj4Lu9jES4Hnso9QZMY6VNFJ8wCjBKEbWfUzJNEjufRSsQrSbJvNwrW8FshAVbWVgtynSRERS3s7",
  "key33": "5xjCRb8fbW6etkt6Y9KBeBD4dng4iGKLNPiLorck1bytYBkDhRXus4oHmjySCeRBputSJzs3LzJCQ6QickjLnxMs",
  "key34": "3FBnyuPsKyBL9DG2e5JBt479BothCoMMBVx5SbzN1JEACPiBbvUASMzqFvj2rSnrdYMWMJJ8tavvTYtc729TsmFn",
  "key35": "2XkaMgUQqJ6AMGMvCKdnyjwTV3CooXMBUcELovATR6AwzbMk9NvHX8wMjk5LFg8e8vwAZr2CZgWgHiwsZ1wZnkc1",
  "key36": "32YrpsJb1bTCgvJSiwSrt5LmcamVhWBpJU56oUa5Zmw7FQyfd3WErnfpEZerfhVkMbjvnKtw9ztk4aqpeeLBx6cV",
  "key37": "k5NRhYJoM4ZPmP1aSrhiRsRpX3YdpySRXrMxQzx5ExTEjqEV9xAn7Dbjig73ckb6SN7QqjTPWU9SMcN6N7napRP"
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
