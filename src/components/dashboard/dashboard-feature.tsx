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
    "55fKdF3DnW8Vvwfeqqy95TriehP8q42ueshP1ikw4z6EVWax4PHk2fvRANNnDpMp9ifzgtydGYYwfp7Ahe2KzK3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DEgmUpWVDE9aKedTdX1tx2FfAYccLMzediATq6282NCSVBhLXVdBTVToayB5rgduABZFgA4JLSZXxcz1oWqQqzg",
  "key1": "2k7uam23tVZxw3PXKwN7oyRWdRGhvMsCjkyrjbdsZwa1bPetFudoGpz8xCr7dVR2s6GZTJXNdDXJPwPNX9sNJWgj",
  "key2": "4U4fAZD7iUwiXUDsWyLD5rwKaYApttCMsxRhhNm7UDAEGcmVps6TiSYnQFEbjyji39jgntgmnrF8HbrYvcQakjSj",
  "key3": "3FPE9wAgkGDFVMFdUmQCkdVRphizF6a1aJ9GN33hbhydHTZJkfMjV1Y9XqVVYaoBS8ahznuBAT9h1WCD1d3er5qd",
  "key4": "2bipDqDeihP5JKuZMch1tpUwYR1Ufb6cRhSd3JSDjwJLHxyKkNprvAyRnrH7vSMnYcFwmaxyG74jvEhrEdpEmChN",
  "key5": "ybf8RXus5zj5nav2bvzz2VtRmQeNU6gf1ccJX5WsNRwEJSaaneWUaBE9oe5GXS5ecdmwuP9mc7eAY6pVtTMZ6UL",
  "key6": "52FmhesQ7GdtE1YHrv2fc7tq8pWkpSydHhHmrDaSLyQpEoGb2Qc3Z6r2nxL2RmXHNjmCaoXfGcwgVn89kKV9rccw",
  "key7": "67b6HMCBymf2GJCPXVHzaZzhgDBYxhZVGrtaukToDLbcKw1qQd78SA94e6Gp3Lxra2qppnQ7ornkAJKsW66auRhh",
  "key8": "2NVkkFqzNEHTyF8uMzKsPfLXygJoCQpbox2BYYo5DR3AiiFskaiBejLVwdG6WGHUq6khCX7xXKePJn7VjeAwyMbv",
  "key9": "2iGhotnpZejdUduwtYANM6uwoVhqgHGgmPnZW2ZKTcFRa18Z861XiBoD9e9L3TejcyVyikWUVX81dE3726rGueG7",
  "key10": "4pEKPjqJijsPCSrMNmwWbNPjPhEqnjWZmpR2yKMaL1G5YQ1WiV6QPMJBTUNuh6z3LQBBQHn99zbVLFjMnUM2UXko",
  "key11": "QhCTJbPNXnMcE8dqZaUxXsbBaNVVVac2cXpCeVKsuSqRotE3JfLLXc8m8BARTxribvW13DeNbgWG7aLFEgQjA8d",
  "key12": "57KUYQHi9ZhZXneY57ZivAyFBostJe3hkwpnNy2WR92UfXuE1R8tiDAAffRWkDj7Qhss6K8xJGSw3BWV4vGkGstL",
  "key13": "5z8xvZaZLTpTvjosjxDSqQbQzTjs7EyRCxEqhDJTxg4Bw9uCQhFRS6C8KdYdnyN6pD1kedmM8NfT5jDEieT28r8P",
  "key14": "2ueHBHAthDqcyuzuundcXMAzXAzL3CaCDBEHbPViE8ySCixzrUdivm2nUdppnZjmbmgX3513EWkqMsvq293qt9EK",
  "key15": "5MJZRqaaFgAkksCdwWxCkEWP8TGBnPpcdo1pCvDL7pjGkahRE7jHcQHXGqpfDNFCnKXw7Yc9jmt1V5zs1FwGU1y2",
  "key16": "5sQ6DqcUoZK4zHUhQsdtxZn7sKAbJrrTyUVVHneN5jRiVVsGsvXEHMMmRiBEnVDrkt51rdH4NYyXXXQmJYehHv3J",
  "key17": "3VSjeRQpRmLQRH17kYKY1gkVTn5j6cPgb6FYwFovVwMoJQA739epqcy7BS5ZNz8HHVZLtHcJ5ZoTQjxQhv1piDEF",
  "key18": "5AbhYJGYcmVuhZRGaNvvMDXvSjcMN3RuUwKjQrkqckEQ57Tq6o4CXfpUc8PcqPxS4fzKynNADtkwa8afqh2hmW8G",
  "key19": "4ADptDrsfjh7sPQM35B5xAaxawWncyiaVjEHB2qk6GSfwKyw71TWxG8KaJGxm8vvAHRnqPkjqaQ1F2sDbs2VDbK4",
  "key20": "5WLtyYyZku4AcLXaPfyLUJJX1Z39ihrnfhBJbUhzmtKyih3p4PeNTuX9nnqRAK6K7qabKC1atCF3hA3RwJjsSJZr",
  "key21": "5RwK4FapXLZxjUpGEYcQCr2EvEfbporXU7aqCdMZYP4CmqyTGQN2qebgpGxgSUhGTbtuwNYniTsgXCiMVukRvwRj",
  "key22": "4pksn42XVrkGbqFZJLhiK9f2xxSM7TwNDGA6LAsykyJWsiWWq1ZSao3bRcowaVCiWB38Dh823a2kZUiYPPVmYYza",
  "key23": "rw7QUqprzJ8QfUYpwqC3td5i7z6tUCisYzQFUZMNWGwah1tXnSyZBc9jaHF3nHMDgvgD4zZiqKoh6wksjjJb6F1",
  "key24": "2mPPvznm31MfUq8pT8JZd9ksJbqNKsZZRze4ic8vGZPVYGc6nT6AnKY4PNvz1AaEeeeJBGiVYNghUimr1LjhJhmR",
  "key25": "2kteozXCG8CbzS2vNm4EnRHvBv3H9DzLZvDKVZkLKnfZ9oc7ozi4rMkjenqSnBubqgWmFQk8k4nUVpAcXCQP7WcU",
  "key26": "rQMSPUWWq5UM51AiGojThg2wjUipmsHDsnwnaUzmRK5FDXQugVQsnuaWMMfrTL4cArwgr9j77S2CnzcqSoZy78L",
  "key27": "ShJwoepcyUBL9vEWoC2pucWPdKDVHXzCbwhkobkjd9X65SkfEsNhYLqV1SQ44C3Vbcdiq3eeDfhJgzehaTgrpmK",
  "key28": "2CNH6moDZgkjqBBZc9T5ZhbTYw1m3MSeFYi9dHW5BwhCcALwbdVRZYxjJFL6yw6qAZKXR4xT9426UjcMhtAZ9YVX",
  "key29": "4zRwXvjeeuik5qjtj7p56akTvQbPXkAsHEsADrh5jStLuQDmku1LM3dpCau3oFsPheLhjtsgp14KyHbJBX4nqwcm",
  "key30": "389ACFH379t68hwrzNZ7iRXE37m1EYstXwqnaRPJSxFQzQPF4KPDfMU9mBiy9zRbk1Bwcnby3HRq3dDq9XfXFoY5"
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
