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
    "JXWjKuitiEgffqPpHLMdEKg7saD71EKhuE5cTD9mkxHsJVmidSEUk6XjytiKRtJFP9Sma4zTgWgGJ6tWBxqnht2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f7pdifE2qHiw7B9AKGy67khRNwKbcxftfJ7UH98ZFEoG8cyoWsBUH2AH6JzPGkUDN2bKxyGJYo3b1q4KEPDK4xi",
  "key1": "MeBimCXmwHS4beqFxcEtxvankEZ2vQh8VubRm5jsVdftuJ94SXTq6xyxZ8WEwAAZviRFxKqGCyTwHcMUuSNrSGs",
  "key2": "2eGmnqV9mPxafwphQGqJNbqcvKj6qGqtC126BXZtiyy6jUMuSDsdwNBRQoqiomwHVxe26N52nMoUC3inTbnRkArm",
  "key3": "4MWndvgtUMJgztNU3X4UnCw4MrxhoXwheg89EK1TxE5yUs4wC6G6idC5mob11nZLHgETqtNDpSoD1AKuRyJDHcER",
  "key4": "65Vhugs15LCGbV34rthx9JoiRwKj9AgbhUCaxQxVbbKL4ycsKsU61EGX9J85orZf4GmyNQx1C7Mb45yZJRjNcsWd",
  "key5": "2yDEzVC93Bfns3Gnt755ncn5p2V5kCvUtLPVuo8CCZkmTiHy5UFprZ7N1F1Lo4hGHVMqEV879fcr3q3ZverKfYTe",
  "key6": "4W9DKBLk8hFiVrU2iFFsDbdKXqPftA4GaBH2Wrq4nksGWGTdTz7UecBJvYVwxPJ2xqrxTKtKe7hgRRCcnpxjy8Ft",
  "key7": "3JrLbBGfWQ76haVgzJmJL2maZnutz46JPEuPFoSwXYjDe5eK8WFpDwqDZywCmt732tdNMQ8pS8vGCeinzgBXiN3L",
  "key8": "5Mi1uLqD1jJ5aF276t5XBVsb95NWxjaSVjEzYAfEjs1nex8xa8qr9oVpY4sc9vpX9LA5GaG1kGZzDHV8p21UdqRj",
  "key9": "3vU3Sg4UkTXiC4uNcuKi4NJ3ETr3Yjn7aNoamWe83mU7S6ZfYJS5oHgQXAaTDvSZ6bAikEBd5RjjSGtk8hAF23h7",
  "key10": "MG5GPsx3BP2QqZ2PZnrnV8bCr4AzZv9ptEzWPwDhdmA7MiwjCjWrjL3pM74pSG55Yfpcq5xT8vgYjTxvcPiWv5G",
  "key11": "2QYnv6THuykvC1EXCbBBPLwYVPdnhdLChjnzuyvQ5v7Rp2Xobk7SBSFmmd54hs58NAAEywctKVxV9qEa2MXgu2Ny",
  "key12": "5wQG443TUgTbrojdfKwT2JuuiRoyRAuXwB4CcaaHaEP9uiVHKybhFMHktmxwh7jW2oapHTHBZ78c8KubDeMowatg",
  "key13": "25Zk6msAWjpXUvNKZKbMojf72RxWWu6EdLkfJh2WtVbwbwQTA5BR1jntEkFbpQAifQkdwjqjQKycTXu2wowUByhk",
  "key14": "VrW3mAtEc1HGevnpEyWnNWwPKdbUageRMfWLBTv9Qqh4Z3nzZhp6iHAq5gMMswqF6iRspXMxvhHzaXvix9yhtuR",
  "key15": "5CXXR83iBiTqveGCWCGF6uKkZH4HkMbLLPm1YQTnjrMaBbn942pXUkPtJgLMRJDy32b3dBig7cQxxJiV3zBHA3cy",
  "key16": "4oEidGyxFo3YgvSnX9wgDzCKiCYQn38zuXXsXGT4WChGGgf25GC91EzD2KS1xmtJ8ihR8Md3dBtSkzUq8DaRDeAo",
  "key17": "2Eokf1mCRJsR9f4ajBWr3AeLAvdDCVJuhihCRUXcYGUoEnZh9BPUwB8pHjuT7LbF7RZptyvK6cASEWW588MqiQz9",
  "key18": "5SQyg1vJydVdPY6N7qoCgjuADS3tqPrTcro1hBSFrTEu4h4aPCgG97aMjV7LAauLkcPVV5xjLCDCYDq6waREVujP",
  "key19": "5z7EJe2M8FWf76SgPMim8Sq6U9D5ZK2heveVBBXgQXfq7NCgn2WoKFhqVq7qutC8EoCXatNFX292xa3MyNKwMPhT",
  "key20": "5xq5NYgEJQ8qKvto5zQhbPiUMxDaf1u4AgQAF4gRmt6JJFf6na7Nof8opDrEA5udng9FtCBh9BsBiiTHRcowqyZb",
  "key21": "5Cu6DhLc2RfHq8makCLpvwTLbBL8aTmGNj9KYLkvDh9FqSNxoWChBz5nn9Z8ys8aT7fubqLhZ76qo7bjuX7eHHL1",
  "key22": "5siRo2s1iJ3iP8ShQ3yfVBiyDGQgaH2iYX2sdLtAAv4j8Xrr8UQtRk3FRLeKz6cdzxBcGpbW2cakw23sBoQDMiJh",
  "key23": "3vzz2MR6ytw4qA6FY1zYRiJcS8NJ1FDZNFbWU1fpuPugt48UBEAnnuUisU5oUBU6PbPS9QofqcFB6QcNeTgcLASV",
  "key24": "5JFpdjpo21xUDi8SYG1L1kpV2mfNTcBKKGhtcQw2mPKAc5hVx3fvNupTmmJ3U6hndPsRB7mv1cBScWJ64FL8Qgzw",
  "key25": "2tf7Aakdui5WuDx3Tm2jQ5kwFnHH8mtF2nE1sGLQTVaWmuPu24cpVCwoDoVZKiPXoZnWhP5VcrNSFB9rEMjo4d9Y",
  "key26": "2kgYYPbB3Q4HdYtsjRMfCkXNeRz6soTHCvfKzn9FusWMBpu9cWsixq3oRHXvGvRbfPph8Z4P1gabBjvNmLbqv3eU",
  "key27": "37VdqvLa1Ge2pZznVSSNkCDRAeHcw8o6YUmkF3pc5SKCGFZqjygmHWUjmNVj3PzcURJKSTPcjeAFL1kN9uRBHQPc",
  "key28": "3i5DyvdZ62PVXqg4rUhsjLLXehd5dTb6qtc87Zehv5XeEEtJvm5dB6KA3GZzJHnzJeVfVDBdB6xtEb4691aVsLCr",
  "key29": "zVTg5A7m9uJx1vbJTyzohHACHVMuYaGS6Nh2Vn4jDPtisXJpnSnF6ZgMnzbFcPWykueLiGcB9nYHTanAz7R9Kma",
  "key30": "4VzxdvjAC4bxzx53eYHhyp64D5mEyVB9aRHW1HtNKqVB8xp4CkUbpkYXwK6gcqSKdtkY9ycg8FvuPtKpmmQt36QQ",
  "key31": "31n61fbjL8UYMhh2SFVbcq5VSgMqAaWHPAFz5Gkpfd3co5XbHg4hKb2LhAnBLtsp4vMDNtT3QGwLwAyWaKbZoQTB",
  "key32": "BWPbAoH2ZMv9gDkEYLHbpfnFa9S7z1cdrR7bn798quMoZUadkcTW2QQ6QnMBEquZtekxWbniY7amhkzwbCpr8mx",
  "key33": "3BbVBpNsSLuuqHjwtwqV6QYSYRsDTDMDG4LQH6rhKshbj9Db984onaTAjFkigfiVWHdkvYgqenZRRevMnCQMMtZq",
  "key34": "4nxwGbeCtdSSNzwTfV6VfXW7unpx12RhSWGG7ozZLG2Sm2QRJNVUP2TbeGbHyHHDTAxQAY7N3LucifYH6kpGmMfE",
  "key35": "5VroqBZjLxbsh1uvGE92EUTuaD7WdEgXfPiW6CuWQqp19WcfPgJg1in21etrDn2dGD2MXgsRnXbKAw3ZAXF1fuZD"
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
