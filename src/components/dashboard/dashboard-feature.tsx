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
    "MVmDPTNX9tBEFLXdFjEXeq1SHgFe3TdJPW1NUm5qS9q4UoSiGjEAUGzqgPga4s9powqFf7kKvfHBMA9GcLB15et"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cfCfV8uJTSt3jQBcgQPrjMcpVU3364N3dsf5jNkNJbnDMrdqPASvELi8qHVsa4aVrrAc1zGy2DfDmVRr9Zftoca",
  "key1": "8Bi2YqKwEezuoTS8uZtHoWnKoLZuLFZsL3oqNQ9Vi8AWrxRv2vrZCW9F8tSZmwuSqZid5gdfbiMNb8kPERWYUYG",
  "key2": "3Zvfius3Ntw7omJvTxnhJkLFqzhdMpQGEPqGDcEErVRXd9mpwwt5XeLmXp3bDNDX1ngdpXELRB3coYy55av1ocRi",
  "key3": "5KgvsNQfR1KEtYPMfp76FvhscwFcTn67yY8ycpQryBJ3zxNEYyLskmdifWy9mfpuhcEcc253e5n3HcnM5JMacL9a",
  "key4": "5tH5UHt4HeA2fRhdC5WcRjXP5qJGz8mcmnXyHeBe7uWdQHb8G4wDaKqwR5CuCEZgLJaScNz7Uxi5esigtTYa3Cmu",
  "key5": "5uxKaFxxPrTZvtvAtcRduUp9uJjgokzPVnMWoG4A6nP4j7G7A7pxVkxbmRAgQph5jNVi6HMa1XecGstuozXMjpvY",
  "key6": "2QMBvNf9G23MZoNt8UdhKwVy24UN6fNTRUP23xCTsTRTEKRiNjHFzgY3vDKZJob1Um21VwhDYuURVT958YkJnnXT",
  "key7": "3ojKhpt1UNZGe7w2SomZPV3wnpp7nLNNM3vZoiBWD3ppyErpM2JbjSL5fgxV7qcFpvAtNQNTVGYCi85AVNGC6ev3",
  "key8": "54ZnrRvbgrR5zkfmwsRHugzRPSAvC3Y9XzyzCg5YnavwXB7niyTJTVuqurELKCx43K9tEjHBMWSqizfDArgSVR6d",
  "key9": "247Vv9aKGn8uWX8wzRGVpKarWjtHjgCs9UzkjTirTEeJBVBzEcDdnF1GWKFmmquBK3PchT8wUMPZ6QsQC95xZodq",
  "key10": "5sHB5whMJU6v7B5bFsax1iMS3CjpZ1S1BBoUwrgam7nHFt3wP5KgnjE5vGX63e6Wmi2q68pfsAeKPLHuy46yDDrw",
  "key11": "3Y3N94qWXphYuGbqry1vAdVX9SiVXsmeZk22fCPqXVh15q7sJJCfufk8CzT79Cjb14F4QUBPrUPHPKikPHEWHw9b",
  "key12": "4kzGBTAJkmENBaPRgokVX5gv6SuDUWs4Pk1HhisqPkTD6VoE273JeYCrnZE6eua9M8RYKsu9X1oNjwQHVv4MTw1S",
  "key13": "3LARjfBL1q9HTrZUWH3XBMUWF6ububq3SwsSgD1EXH2tVKFBeWisigBeiKg4Y9ZSRaVbMzdH7mopb14vKaHkASyz",
  "key14": "4trg4dX7VH8PaBPBzk4PhnnwSqaBY7QdzEQHRtykXoahvCNZwifgiEQRjaTQjVTJNjNcQfpowu8xECEM1fVh5F2x",
  "key15": "4L4UwfAzgqE4cZvnydzVRuyEBGMbte197LiQThVR2bSXYMcdL5Zog8Q4RP2iYwxWBcRCWrCEBpR5BCnriTK36d7s",
  "key16": "4cJh1RQfzGjvdafbQocjyiaL9ENUBBvpgG2fwLR8S5JaFbcVK2Q5XEMZwaibND8jd1yipi1UUWv2q2wB2w5PXGbo",
  "key17": "3vVFxJ1tBcHUCRG6AaRT6cmfDSwwwe4cQUVYE7N1izooMA8dHKSY8CbfsXzHt1dhRjczHDGQMzhSquQHRZsXzGa6",
  "key18": "oVoiZWSFMk8qLiCPEZjyYjehh5j6SHLarYwxg48tPt64keXEEWJXmrHcf7MMhCVkCWumE2di3QJPLXXVAZ46rKE",
  "key19": "5caiD8yNtkv4Cof4ZMxNhf46p9TxuTzedmHrFV9YR79agVUc2USXQuvS6pLfis3SxwYWGJCQcr3Ai4S8JvjUj183",
  "key20": "22pbK9TpH4sF2cfjDim7NNQCJYnsJWj6gkbqrvhoxEzktKTDHzezDNYHJaCWU5rUTktgzuv9Q26zFy1G73d2Cgok",
  "key21": "5o9NB1qBXDJBJcJ6o6ePfxyi6z5gL1JiTNxjknNHHvMtWp7SfYXWQZfVuPeawfm8CCs3tQCegn1Go2qtTPaNFhSq",
  "key22": "7E28vGV47Q7RYcVa4ATFtCgUHL5KvcEhtohoNjsta7dhZq916isKPPqGwPw5xgdr2uzHYqo2Fgdjq8SGgkfaC3Z",
  "key23": "3GhjDhz9CQhzEETuUpRhQvwijMNPYyq3qAC3KA2A8TiWakbs77oStRqsZzAQpN8LpE98DAeRMtnv8AoTrLS5qeGL",
  "key24": "wNqZC73Lxbs2vA7BJs6WtiYx3KpA9kWRvob8YnJHNP59ybnaMyF3rAhqFAJNLbcNBdwNZatuErEpVRoX5uRbUt5",
  "key25": "2Vcv7CLCq86UTDWhNyXjFLRT973mQzwChqGqWeAF8amzVNhXhrUukbLzRA2sQZfJt7si95wz3xvTq4DvTWCbAMkD",
  "key26": "95Xr3fDe5Tnsto1i8XcTq4J1ifN3GHyzL7FYXJT8JHWkAiSgJiRfSWJD4jbcyDRWUUqaS7uutK6rWunqtd5mE2A",
  "key27": "5K8Mbm84WggVmbgZLoegHo2MUBxsm6m5eTGduV8MDMRccT9fa4joHe7iy8D9ek6yqGuNbhPcFx3x3jfv4PucrGo3",
  "key28": "4taCNdQ9JRZsPwsoPaSaav2XkLFTDnXLJHUy7QK3qJEo2w7cyvsZ7jWponCodxMsvGSY4dPUW3vQ3JKCWrcypBk6",
  "key29": "3CLdkNoBQk3e76bLju3dw2MFzcCU1ceG3etnP7V14dbh8tRGZEVjdGXW8vQEbWhvgeYL3UdXbQUXE95EFCPnxgbr",
  "key30": "27fxesFNaUpxrkZsk974AEXh2V1Fiy4x9bYP3MeMn9bmVokf3yVzeQbppqCMqX4g9LguDtv55doCaAtAfyx84nw6",
  "key31": "4wgGVyy5T3eiky7iSB2nLe8noAzMNLZSEPbpNjfpjSv5VZ83YnDfShDNdfTxdNMDXGRgw1DCV3UUCqTbqtxs6c9r",
  "key32": "52TB6KrrjjNEjCeMZVHASsgB1Q6kKVnuvnTjHUuzwfDrQ3pcqhNi1sTKA3Ua7dye4uvNrQJQMkjfM9E53S844T7X",
  "key33": "5UEfUfuJaC6wjteAyXHxE1yvYTKfe54A2ZrJjDkj7VPaVy9SLs9b5ypyo8wJHoWxBj4AWgMz4zuHnUm3Puv6o7fG",
  "key34": "2g33kFwRumpxb46DWf8RwcuoeMbXbadmtx4XVAsHAgrjgtoH6AsifHwc3MBR8TFv3KoGpTve5K5UGJreFJVtRP4Z",
  "key35": "4zYXQD5NmBQgqbroPZ12a8Pn3K5QBrufZNMEm18dS3ofhMhDCpqraR6gj9KAUR3C8cmu9nCQh3TzY4Z1M7SVuuLA",
  "key36": "3CgAAaSXoW5DsSUu3LffV9E5KUWBaMX1ni75easQk8q6XKP5HVmBQW23DWs6s634HPf7pWex37CeW8TafiwA1TVw",
  "key37": "4mpoVwn5ieWvXojzjvzZqrHVY5HqMMhr5XBVcouVtyngtAtCaS1eGgUJNVdRXdYcFUpCTMbvYZkVsVZqRQBHCJx2",
  "key38": "5nH6ggv9kPYKcsMaxqa2Z3FeurjHs6BFRufM7wYTzGqycStTCL31HZVRj2V4fkq6Z22SVFMgXb6nLN7aER4embMa",
  "key39": "2Cyjyi8KSLTrTmnUuLromwjjX3WvbTYT1KQugTcN8Lp68N3Y83pDeuGqodrzMsRFLgzCywQP4rczmvnaNZqPbk9w"
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
