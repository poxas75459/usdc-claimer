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
    "247qEqE5Y4W1Hs5iY11MoPRkkxoeszedsrSukRaQMcx4HRBFW9ztZQJamj6Ki65UicYsAprkWxh8kDSjRmLqDezo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o2En5Dr8nMGBnG9cinsqUmzYJrtDhjCqSETSStfpq8FqeAXkLJee5ctfsyAbQFouoGD1wTufr9P2PrMhzRgPAF8",
  "key1": "FMZ6mskws1wkpzZxJyzT1CtWcdnnoqf3yjTuni3JCjuaLfdME7Deev8zDQBotm1UYMW7rQo1XDZR3DX35M3V2my",
  "key2": "2egTJ2Yodg7eJgYcpA5QLySwLpgKSb8YnToywnFDGu19pw1xbDM6RudD6AGocasgvy3KgWt5tS1NuwXYLeNXwk1H",
  "key3": "5KEyFJQpgQ9Wa4GLKFdYcN2GgdthNvRdxprGunC12tSag3Fc6j4Z5SEF1ESCQNWjZ5XEzUh15nh6bxc4QNskEXDk",
  "key4": "MuxCmYroWoEJ4TzLTJMTfkUNr4ta7mooJ88TgrxZr4dhbRCzrgWUhjufPte1SbHuioTxg7JqvPyDAcMKqpvuHA7",
  "key5": "3Lr4vSKZrSdhsSuVwXuUbz7sGmkCMzWE16WEYDspvxLtYX16M5X4tFjyaHoMAuxR3GPU3dAekbXuRDaGPg2h7UEV",
  "key6": "kHccfjLWVMWmixPEsMkrV4AyTZDzwBTJqTj58x2YMk3mDQ3r4iVgaE93f6k5uGyoMHuVa9cioMTCq1LmxJeKa2X",
  "key7": "4NenuJfd25nnChvoREBLKQUKrc8t8JfTS9oyM58QtVFBxqF8UyuovRyYGdzdknMLDfQHHRjYRagE37bLy2p4hWJq",
  "key8": "3Kp1wJbMTJuPhj86v2Rm5158U4jV67gAHyackqokqRwFUebtMEtEDpsxWKkjcGwz9585jEPgctLqZapb5avsu32m",
  "key9": "4Su7X9XnHRt8oE9RC2abpZzdaUT3vsga8uQQgAoBYiTeqF7fNuifBf6sY9bz1Z6tkjbBGqFmdfPaqtswcXk7iijp",
  "key10": "2bR2dKd6SDrzj4YpQYsz867AQxZFM9opK5G9LvwVFbPjW8cDxodBBAJeuN7uqKz6eorjfAF8jneQ1PYbX5DPJRqM",
  "key11": "4U8ofdpSzKpNEnZBWBsYzkNXs1a7K8uBJq2H9peZqSgFrytrny8ozFRXszDFNjZFiZuYDRnARd5zhR8P1366VMjc",
  "key12": "3i3cBC5nxwXNY4FTNzDcgnpSzaJvaRezxC1o4xC1tQay7mZZTNwhUywY6Zb4R35CG1KrrvFW26qG4KR7GTPRAztY",
  "key13": "5mW983gA6VKkyH92oaVtPG5yUpJJCkeQuTHv4iBYPdQqqJoPfRqpuGKirrXiedmumVELKFFg1w8aGXzkjkdx967c",
  "key14": "4SsWTP3UMUf7urBkwePfzMeP4t7ph9aQVJXaYNGjRieqmZmebvj6VPUPauCPdBcwzDdgXirQ96zS5KSDJQFyFhJL",
  "key15": "5ANbfw7nve6KLxPCuo1pJAY7kNFJQUYZZW3tkPhXjN7PAwmovZXAW1hE1CKMJJmay3hg4cX6Dw9YiB5iPDtPHXAX",
  "key16": "6GSMF8fw8ykSoER1rS9jm1FULDx9srBiP91NRpktCXyBMA7H9Z5BJpdG4BcA5p67ajWDRkx2EgSKKwUwdeSP7WE",
  "key17": "4eXek21HFFobivUmcwwqQjsw5BrsucJxWa6HvvZhz881qbTWA9ycFxorCXFJHF8RoeTHwgjFtAhp4vkHuEBFihVp",
  "key18": "4VNTPFRaesHp5GUEJReRrTJ8F99SRByVX5RkpJUYn125fymhwq1rNYFhownRYtK1n61RY4nEkEzbywQ2w9X7NBRK",
  "key19": "2fNGj2QwGM9Q7ex94i2LtMk1w3ymxMhtDxQjWBAcbARUyJGVcS6t5vmAvWHjn3oGjYmJW4xjiiDyFrbgSzSA8Cpn",
  "key20": "5UMC54LtXvvHK43sAmiAMZaYCHuNdGgRrsPoa8NZdNAvAH6PDXUJvsd9GFsBtkP64TRoajadPZG6mKVLoTdu5iiD",
  "key21": "fohsmW97aNRFSAEeXXzc6td4nz7GmEdxn12zD16WcmDQAMaSy3KKbL6i444YHGGMcPpDLDLRFWmLSRZfST1TUCp",
  "key22": "2dk8cLaSCGvadVsoTpz5K67E63z2Ke2G9Ujt4YqLUXCFvKDDfvJiYPmqHGkbqX1z1ZhL5bbTJkzyv8WpRN1ES5B2",
  "key23": "584Say2eASXJJ1S13owevbyh1ayeQP9DqNyjCSu7bWpRoa9oBtBkYYvVjCQQPPXFyYxS7ugQcH5KpUF7VaDzh3Sg",
  "key24": "5w1mL988fBPSFt4Rhg4tf2axe1rKmnTVKAD3m8Cyaj6mZztCZt13AcnHyGGEsaGrNoGJCbF4BcfyFTun9iY2sqUq",
  "key25": "hRCxJZpHQmxnfAYfXUwZmzrQa3HdeDHVabzMU7McjsS3JHKUyLA19QwU9vUXUzMZfE8h5PzjLjk6FNwSLFxAv99",
  "key26": "4h3ouhnebXnhNEfvkCbcMDAf7Aq9vPttpZuukCsuRXs9WDuyZYmHp29CGm1V788Z6LkWjuHxaj8PY5QairSiAXB6",
  "key27": "4ZNJsAuXdG9CWEyhfJQ3ydVMmFCTYPvgD1Fyh7UwS6qYa9SXYoWUWrSs9J7HKMEfVpK3n6f9ZA5WsjKGDDLZLcQX",
  "key28": "3swSGYGZCV4CNWiJNPDgeoNvm9CjJ5H4TGxTcR33ZsdsgpkCtwDjCspAHLz91wWgPz5Ys8Y4v2SZ3TcTSgonSfWJ",
  "key29": "3ofqGv2ZCKKdPTKS5y4veUm4aJuSZcE3ENKuhruXJRZEmi4zRnbMEYTZULy4YaawHxVhUEAUdymSuSxXhpBx727A",
  "key30": "4uRtCmTaSLBRbKsjVKnqikMmuRWbZAsdrMjU7geBG1tZ6hs31NWLMKXnLbPQmrto3VnX1ptoNPCMNEFNFjQ9gDot",
  "key31": "3Tikhbr9ihQca87dQYopZ4fmNU4vYUuJPtM9JUQvWLBLvHqJnoTKCxcTtVMFmmGzeb9RFKBA8hT5hGDhMAVWB9wn",
  "key32": "4h4rA82zFws2pZKgkiitogXiVsM8zeUoD1RAYWR9CPENfedSybY1n6rfVbfJqb3v6NbBY9a4ePvdBEAHjE8Tuny8",
  "key33": "5W22RHJLEx5zJgijEtYWFYRRW5dWKQDwjFfXX8Wd116LPJtbzSyJqMzMeUzTda8SQGvSckkvAZ6xquKPc6HvKtcz",
  "key34": "3Lx8ccdBo1Nkjuh36s9MKGdB2yN6SDCrFFfKTmZq7pF3udxZYWhBmaSyTYdWjsFYmXJpLmJzo6AawMUKXAgoSNEz",
  "key35": "66zpoTV31tLEEbvEFy5m22fg1GxaYEsupK1pwcpKwRj73isdVY7tY3iv6XZ4B1pnxr7jW7PtWt3okTaWBXGVNUJ5",
  "key36": "ZFKHyNXw8nhaBV9C8pE6deKhpLxgE9jRBYHEdhL6c4aEGuFc62FysqEEHziNAGtesYezUz2eFdcKCYhJDrbhBHD",
  "key37": "3nTB5bgevp6RsvGzLjGPeM4RRAmXxEcjiJf2YWLh8ZaojchQeZrTaW5G2nXiZ6VHpyFMJrBx8uKkby123iTP9eyb",
  "key38": "4xn8FvC8XWiwDynkvYccCVniLbQD82p1VPFfuZsnXNrVhGqKKSAJ2W3snMnRwuBsgpYaTAUGcw5p9pmD29uc7GdQ"
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
