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
    "38T96pLAsMinqNUnGJqrS4amznrZKRPe7gJSoooGRHK9DkADkyqxLZBagjRAMoVpWLjbRDVo3G6kjEAkMtCKnijp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BxKJoWN3mhQ7oojYzZpRoVoygfVvAs31MWE1vENXz9fDyjdS28ydAU6MJrRsFAMJCdd4oBfhAEMKAfpEud8TqHi",
  "key1": "W8W5odhWHYDLVLJ5CuvyNd2AQphtZ4MSQfriZuVBPnyYu9tNTZnU3QK5QYMYYhZeKvt8wLiKpyq7GiLfwQPDjwg",
  "key2": "oxDFUK4SYhsX43EieBpvH38MbwsMreVLd1H2ZC9MWtKBc6gtiZD4B74YkeSQuuanrtm6DmLKnqSB6ynkweEvLLn",
  "key3": "rZuUmoAKfQxKbTZ18MzTJfFLBxPa5mFQZHKBfgFvEuD8oMsPNXR1KS7v4uLkLLAhQavDLWtBcQTKMtbwprrWabi",
  "key4": "2GcCixunfc7mL2KmuxyfiYjFWtfy13QzMUpDMrBsiXsgn2spggDpTuUzqFGeiFnFR7zNUM7n2YuaKEoj8tWzQu3c",
  "key5": "GLeKZDDYFefyr5uZFQVsfuLXMmGc8mDpQ6yzajLNi2kRKJS6iEnTzjQaPRmftqM7raMoZsAws2BW6ELd1u3jnKm",
  "key6": "5VEv9PTwwmeAxrUVehv4cmiCvmY1V4xiqm3LRv8BAMZg8aumr8EwmgPFGjPUvyftV1sfdcVDwDTgJd4XNhuhw5cE",
  "key7": "uLG1WjseUmHtZFvdFE91AhobbFFXrEkKh1CGTci37YXLRZBHRT9sqtpi9eUptFsd3jEBFEDtgFWWs4UNmef3wt9",
  "key8": "5FTbaWrPEnH1PXMCmPP1eU3DKdqfRYZ12LAivhkKn4C5mWUZczV7WKXSVdVSvsmikn3kx9Nw7j8s5zVNkPsKL11",
  "key9": "5su1P5eWWkXRSDp8CDQZg4UXW7Hx2c6F4ib3PuvwnbxYTxdKZWeYUYXg7GBx72MCQya3zwxmEBfpRUTJmRnR1qcN",
  "key10": "5SSgkYwty4DQSaU3eVoZ7EBAta5Eu1RzWz9M3Y31aAjjV2zTvG2vcbyVEinXMKcVL42tzyxsCHqM5GuY9mYzwxWr",
  "key11": "2AtaBPFyp6bazWNCBBW86VpSgds2cugcrphWXLyrJTVtSrbyMLnBDsPMVT9Lr9BnZTU9wQKq45yUKva3GfGf756o",
  "key12": "4hLEEL5pmxrLvUkqv1ERHcvPF3dkDqTV68W7YLTRk3p87AccJu11BcxZPW2HA7AHnouQQvxt94sGj7kQWe5Eyr7S",
  "key13": "3MpocY9d4jV5A7Em9oYT2Wd75fxSmWEp2dRDNTkTCWcUBeTaEYdnezSWnjMTjg6EJxNfnktDqif46rMqDHE6cVgY",
  "key14": "hoBMVemwi9mKm8WmBPWaMNo8J2MCbFfbe3wUkuJXdwErLF1WtywrxiBKyzqdUR6cXYbG8hYcLD2PWnT69ViFBr8",
  "key15": "4uuuTdWobZrXvia9WtyVMsMBNiuiScsQhpHhkQ94RVYW3F5nkK7qajZkEuA91v2ZbP1RusoYjiZPi8NvFKfDLMLq",
  "key16": "3zjgjB4df5dt9MNn36uPPuLRXFHF2rthHon1gZ89MbGi7U9Qqb2gN6g37xKV4m7B3SpuY8hdqp3YReHxRgigcLZX",
  "key17": "3t7tALu5hhpG5RRcbKHvGHRZjYMLpZNgwheXVU3bQk7825kJYzYBXb4ctCyV6f6VRuToZSUgMPjyAptLU9nYx2w",
  "key18": "25SWDa3nEj4RtTpUvodXdZ9BejknFazmq9yhQyDha746fL1f7ndL2Z44diVzDhykgh9mc12LK2zpsRvZptUmeoVC",
  "key19": "38s7FYecnSEnfHQNwdNwjpzwV8htuNL8XTNUpxU3uXFNqH7wLhRHtzzAwefzcpUcQXd4JSyrrLLTus3dZeFgESqn",
  "key20": "3FpbkhPoYbHZEqUQZbHDx5pyxEcUqKZ7VwFattWqr7A13YVTKRdxvB4Rm631sYwLzoLy75No7t1L2Tw7oWCgxVno",
  "key21": "4ozAY3vxCLpLroQv1G1DXXZrXL3LRtwnDu3oAUq1zBBkBL9fnoppSwMBqc1VXm5tXRzxUDXtDgUhw6GTNAGbxmvk",
  "key22": "3Rj4xH57YcSikE8LCo6RcF85yz8owihDG2JurEFRuTokLCSRgFHuKj52VCA5v6KcuNjpAqmXAwWnJbTHXvpq8ek6",
  "key23": "2fkvhoeYFMqJeZ2hbK5E4pczTr5ytzMi84FZo3pQZQTXJYPaLdRtH8H1pktMjVckm44zh4eDTyPzzFoykLw38CCU",
  "key24": "4tpd9MC3M48C3wUCV38qNtMC6jauCz1eT5EAC3b8B6cfXkAhPWWtP2uQDx89JTQvYt7LoGVQmbwegfk8B9vZApXu",
  "key25": "nvYT5d9i1RJKBqvxkKLfgsQ91yYBRsmXizH38BKMR4SDaq6eaTaPwmR5gcjrt1uiXDaGut5KY2s44aNxgqaMDjy",
  "key26": "3ryKHDwq8Sde65nAgnR3GpkysC4Y6AauC5sm2fubDogYoTNmqpaF6mMypc1BLeVCQ6xVwdszFSgvmTcJU6hY257k",
  "key27": "5mvyft9V9rZq16vv7KT25ABaHLVoybSaHZ2zqTVBrKVKLWTzwjHRuhCpY75DLSY6LkkyqMfivr4VXNqL5TGrLnap",
  "key28": "2fo2AGxYcRm3xe1Q3MWvBzG9TKMChkvKfduJDf52mAuTf8Cwanwn3Y6vhHzn2ZLFRBQgPSzTV342vZD6ybVdzeNS",
  "key29": "2dNjR5cK76zAwheMdVNTarwgT3uyqTYc9VNddAATEd4UdK47pX5vtoSn89xatMSQpjkj2FXjBPLoZ5WGHyEhVeEH",
  "key30": "3D9qFcvDcAX9VHPz3orQL7M98VHRbMJh4F4rL89M4KyWjfqCUZTXjWus8do6cUcQwVYWLfy7X8ZNYKoMNsdChH3V",
  "key31": "3JgcCvSGeeLzzcQ3UAU7zLEvCSnThKpgBUYsHuWCbSARJxxCXpXXY9fcbj4VhHHF5fw7E5inkwjiF45DH1mTNSHY",
  "key32": "228wSPFDywrktXyqb7b7QhC43dD1yBnRCrippixivEhFYquQnkuSc8f7m1q6x8EH3tKyW1gXZefKX7Tm98Ukkqjc",
  "key33": "5boTadb3sjRXQByMLVbihQUdoUZWqavhsQxASooDZa58YaqTxHEzsnQPkHvparAB3SsmiofLuAkmPsC9UpqrS2rm",
  "key34": "5AD8yAf6pfB7zwbgePKC9p9tWNkbYiPB8Fq33UrRNa5W1vZX2edYZgochHhE5AzNqDVyX3FvQPoH6jPE6s7UgsvW",
  "key35": "5y2fe5TKzW5BtEp6JSucj1HiRHxPyFEhxD4tUjom7RQMSULnZHbPMCmMhafHgz52qW5wkW8uQrGdpqVmt7z5vk6n",
  "key36": "2Uy1LKyryfKshXwQuyBWHbNT7F8TzvwYinnFEx93KSs2LQnBTcwR2GGr1x2o8vQNGq1Uf54xniVfcCLJhcV4WBNU",
  "key37": "2ARtw2xfUahjxVTZgueiWTfmAotQQawjosrXJqLJJRDAFBEfyXt63UjgZUGtUspdqRUSjTiN9Vv6TEoCrY9fPJ63",
  "key38": "26g8isXVu1vnjp8WST5HVsE41XL9GH16n29AECVk5YUCFntCiTXGqgjCyAGJ3GTY1uiGa9Mm7Z1D2iLWpH2qZGQr",
  "key39": "2o6QesLWHfUyFJFphBeJVqG5kvATzQp3ENH1wmhGDsX4GMeWnjSA3wQ4qSnuwVz8WKEBPqcSkiFsx64ZfCkrq8yw",
  "key40": "4cTMcYmNifXKm1uAA8QgvgLo5eDSCHEi4YghMtmQsw45iEdF4yyYcWf7eRcYV2xGkXarJLnMpNJoGxfVyGb4a48k",
  "key41": "4WE9CMznTaEZXEWV9bibvQavt8a6jS45rYdpv5ebeVdwpJQP3Z72WHtyPhzvHcPjAfhqpqCQf7Bumox2hThR8N1G",
  "key42": "4pLptaXAi9LLe5c63DE1ntRkBJtYfbPnrsQQkbqF93mHbg9c4PStCf4LUydm3XZfAwmMFuKSC2rPCmoxqeJYJ2f8",
  "key43": "oakNZDT3sgADNnmkiZiD5TyjFce8NZgX5ZBSFquWUowTWsZP8kVZ1mbk9p6Y8w7Eed9Yf8Qi4rXnfurHLdj73uz"
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
