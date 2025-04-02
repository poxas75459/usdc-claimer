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
    "5gStizZ2QXAwJW3CEePibENY8h1eDsMxKSd5mEgabD5HVCmERLpLwCxEqnTw9rv7FKjLdXVj3tx7t6QPxKJAjCfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CgpRHbZenKK2spkvrWRWwZDc3ncdzc4ehDmy4VcUEwdXHQdzPyfjVzULDCYS4TYcZY5MdaEK75nQNasYx2VZP27",
  "key1": "2uS9ULJdHFVh9L2kUYkHFGHcarUBMxCRzS544Qy8NELf4Mqqni6u3jnTgbM87ms5r6pN7R1gFMTeKMzCwvLLxtjV",
  "key2": "2nEEiWTfZrFGhLfHjQcmJfk2eyKBzAQmcgzQ37UmjDQfrh6Z9X9VNWeHV8g11KJJPApdE5EPVYQZcxdHi8HwFVDp",
  "key3": "4dauKEaPouiuEfZqcpn9aobTSaqVTdg4c3G5ZF2h7M2bUCP3SfeqiyP2RpEwSJX7jksyv3PB2jJkW8kZeJ4FFvHu",
  "key4": "4h5Ng6owd8s7NBi9mEZmyfLa5LFNyyudsMahF4z6Fhw2ysDfFsN3q1xe7zA3LsazyvXwDvQJ4dw3qdmAAzh6tKZy",
  "key5": "49CfPr2W1tmvv6h6Ly8oou5EyRZ8b9BN7ooXZfG7URb3VrJhKT1GXAHkg7zgh9g2SNmMJTQVE4APxHCTV4yNyNLM",
  "key6": "2AYMsGV7b7AfjqoTg4GHokY1h6TZNpbGakyrBdQaA53NxUAzb7k1Hu5oL3fT36CHWNLcjbqXA5tFMQtS4yFjVk8V",
  "key7": "5gDV6SigSLbkDzwVwYseCdXVxkdpEQmTJnEgEeZUBtXoFprk5Va8jtwB33WGrrdARKDieBFqvMwifQzJHA9LN1rw",
  "key8": "5ixFpm3khfScL6QHG65YMZGVrTJR7XS9A7WbjTYnUmEjPRPgsFmwH5qDkKHg5mXJSuzPFNvTTzpfuJ3siD5cvHz8",
  "key9": "5bhYkyAXYp3RJ2bMQG4SZkFiB5bvnotqLVbn2pSptcZZkQQTJqEo4poRAosXubZmKoE4RwPkMmrFxPyotHxmLodF",
  "key10": "riZFEDiDjcpVtmaSf7hG1f99sHDYs32S8PrVpaMHTuuoRU3Pm7JUtFJQqZGjZdqJiiSBSFygyW7TVS5LWUgJ4PR",
  "key11": "bbkNW4VsBHCLTQsJAErKiQhsuJDnLG81HyRR7u7Qaant2Mud6ApXGQC4f161NNecAa628XX9ifP4z8i3qg1TrmW",
  "key12": "2h7BbV9fh2nNdtbMR3MLKocW5JLwGzCJuyBMjM3B871pKixThk1tBVSFz9LsUhFRMia39dnz74Y7SSbVdPg4WWUB",
  "key13": "4tYwmG44JqG8JPZNydXTzTJkADXNDBD3jxT43sjj9E1WRuWNZuGqgpNAq1so8vixTXj65USmUaDSSmMdeacrJyAK",
  "key14": "4hgspRuUsBpoX8w1ASCYUfPgaLdqKWuEeZXR7UpuxbdsyPhZPnVBMtYRiJywyRFy9dMDqMfsyWgb49RVYy48X2DR",
  "key15": "gb6Rq1pPG3HfMxVhXRugXs6sANpaTNZxWhgL1jTXsCV8deEkDsbQuAF3iLEyWms2dg6549sUvs3uB9SH4gKZD66",
  "key16": "4kiRt3UNoQ4yVCTwetGV5caDoMmqi5Jg61TWam2PDwPk15EmNHMRUY2qUNbfCaf9Hj9j4qPNaU2rxnvDefp8q6JG",
  "key17": "5uEaRpDCkRvQ5ckHZxqeh2F6Ri9JET3jEiYyeorEzbovmzthL7P3cku951ARKDzbmzSgU194V4LNFyeK2a7hRyQh",
  "key18": "2HFbV37MC512nveyduDRdbkZQtVZ8BNohhbar6EMcnsaNx4eVgLeo7Q5hw1qPBeSCLuUcxzdZMqHvyqpQucUWc1h",
  "key19": "88eEhCfGZeqg1FUjk6KEFUEMgYDb9AEjRo8UXNEysh63Ww4pL1zXWjnRnr4GUsY6qR7qJNrNZejGNAptLFEYr2A",
  "key20": "39QqWHrqxZd4aFD4eTP85znX4vvjLJRkT4Cxewp236Xmy6AQDjpcFnmNvzJNZad7RopG4D7E1ffR6iL8mx58czK8",
  "key21": "3g85Fbg7dFrmpX2HJiy8VqA8cQ7v29ircEgH7uZSGjcWVtSPuJxggAE2hZTztb1mUpAVX8ehCUHCdUycX3zgVooC",
  "key22": "2hHMhMpRvmtibbvdWojfMifUkN7fWBECu4wyPeoVgc2vgtMmXsDb88ti5VbaGS1VGYScTvgopxrGFYXKFDPsLtEN",
  "key23": "2vWwctthwPCYGQXPVXjxLKVsVhGfyu1B4EqV597eukznW9Erg5nqQsG6d1KnmWgLh4qgWXcJ4BHeP1cQSkiGrnWW",
  "key24": "4p38UkznarrHCa7VDzy6d2Whzq1g4sSznA5bVXv8phPH98tEZQyBNtdJfVHBRgV89DL7b4T7ERyEbRxfupoXJLpF",
  "key25": "5ZjYyu3DdakgrPxk2dELVkD98Kmv6RmUaHLk9wYJ9PggdxiSpLZiGLx9rtM5tagtTJ2uMryysAdNTwtsHNxvsiuy",
  "key26": "3sGma17YgxHqne6zNKPAKEZG246jX5LCvj2FMp8Zy2mfv3PWd1wpbpDu496upkDc4XNFf8EHJZ9YXyMtrJZYHw9C",
  "key27": "4WDC1SuycXT69M4UTofmEg5FAAMdv4hC6W7vTMXTdaSLK48SChypgSyMVDbfyvmn25YFd4iQZi4Wmr7L4xk3fr52"
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
