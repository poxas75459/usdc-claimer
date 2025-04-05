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
    "6c4hzJaeVkpNv5Z7AMALV4cukJKw12be7Kypci8qYSaSUP2DpP2pE6dnxVQicLCMmr73m4drEsCRx7YS5yudAN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3763mFYXU1GagLVoFvUfcs7CbLZMENfBbRPs9HbPYHERbu25JMKZ7xqLvcWyu8Bgse9sR16ZYPRq1GYgoa8nyCwZ",
  "key1": "4xVSKzJFc9cgz3AipyggXU48pX2ePjdYEGn9L4znJFg4aT7cuZ3hJYXcjhQTacwVQ9wbrxANSCvFNh1WWJzjQyAj",
  "key2": "2ZTtkkrws4kW731WbL2PGSZyWnTbQQexsH8SSDCcFB6M1vKQGjFg4q2W4euYJeQTXEVbgYEyJfBMUYRwm3dTbVoA",
  "key3": "4Cz7nZcKaV5j6HLZo1fBtY48VyzFRJUGjZd42i9Qg7ZMDE9e6C684j7sVhjTQXUVorhdzfNupCrSS94xyinqA4P2",
  "key4": "2A4R6acFRaaHo6Gt7L99jRC2G4GCVCewqDCMk9BeA6As1GRimFAMC9mrUhvdGxFh5AXjFVfCy7Sc7FHpEB1njUNd",
  "key5": "66oBojdvzyahcayGLjR8Z578EXPkfHErvUvjS6quQsEXDogaHn5b8XHNxkzYtVYGyEshCp9YAfQNqLfQEkRtmVkU",
  "key6": "Eea8jJUjMLpRSHYGC1TXPLmjshzcsuKSC4cpeWzGV6mm85Y1ddqQaWSnWssSJn2i6h1De1n1UhL5uV7cZifrNhf",
  "key7": "4aJyuKUuYZrHqNdGDP37tAcdCaEHm3bto7mLvY79QeNfHXnZZ87xp4YoUbH9bACMTW7aJ55QvK6rUkzyiRdubvT6",
  "key8": "NSjYpg1GzeTdjUmNCddFQQosygayqmNyDvfCUe8WZuenof2UfjqcaHGYxUobDAeZVv3d2ZFdawbSMXKsQbWd7YN",
  "key9": "3qdnQXU7HPUjUu2FfLhEZFZmaiec5Ss8BmisKP7zEazz58TDgzEiX3XTKfyRa4P4x3665iwLzWUoHhS46eaEouMq",
  "key10": "4QLs7aS6P1D2AyCFQtCLJRa7YqsiDT8Zb72BzXjX48zXxCDXFD3kD1cG62nAxwv1oaDkJAbqB9fbgEhhhpvB9ob6",
  "key11": "5ZL5rrj13t1Z7mASRzb1h4rhKcfHDXtBTnA8hsRwdEgqmeixbFTzb7CcU6NyxWePpHjecbWGhAU8wEmRK7AsC3Qq",
  "key12": "if7xe8wsujqM6E1wjGY5BpY8Sty6RtBp4euxHU2scCB1TgHP682NkyJ57Fpn1BTL33FC5H2JHoqLbSrBfEoYNFg",
  "key13": "tJHXCdruzCgLqSrkomLDmzYB8RRnMLSUwgQduukPi6iSXz9rXyNmpLHrKKFS9CvKvQmYfsG388GUCBLxBXsi6Ff",
  "key14": "4VcLSLmJ9X4QLuLqGMH37tB8x9GuYitqntC7qkpGSccoaaiXmAdupTUCRgaU8tZVpRNoMsbFZaDzpB4rL63Dh9Yg",
  "key15": "3uPmCNkhp86FZVhsoJZuwuQprvUvXrAKEhFRbCXezCCb1NnRWmkzcVVVMfwnLJzV3vXd49r9NJ32mfiBLsaS3kpa",
  "key16": "3Qw5B33H5DXnXLEBrGjb3GyuCYktiHnfiUULWx6Ye753iRKaZQQGZWC5ceJJAjezE8jzAndCyPUBtr1FAtEbNto",
  "key17": "5gsvqKCezD8RxmdFWgiB7JHMi27EZG2X8SKRzHgyTxXArHDgcPr5WcG5LwfsWxByogbDgAQyhFShJ8uP4qifiN2a",
  "key18": "4epxdQhYTkz4U9YMZU6YBiMQB7U6yvJzpfbHrgQssaMNAQXGb6zxTP5mMTVRVFywUysi3kNaQGP9swH6CNGCfecs",
  "key19": "4JC8ZwVUxJBKUYj4akQPZrPZxEjUsvyTabMZzvvdSyJP5vTtr37ytChvAxtN5AtbSRLuddHJvX4oHUrhE6ij8xUi",
  "key20": "3ybTAsxYZYfCjionEhGsu99DMxvXa5WmZzkANZN1945wNzYw22ehrA3dfUqHdo9GCA51rHp2hQCYry842T6nQcER",
  "key21": "3Lv2Sr7vPJG6XB7ueRnHdL3VZEtkJqDmPQiE1RiKkrUcUQuG5G99uvry4U6UjVxYTtiTVPx5efSUUyx14w3YyJPP",
  "key22": "3DdTPqcYquCicgbEUKcpCnnfFPau8AuwPQyUZstADsR9RCeAirqLWtHR2aCdUw5cQ977gDca4wqSLvLoq5LwgxiS",
  "key23": "2BYxKnHJYXSXnFrJXpMhRrX3aSFDv9gVbdkLQrjFgpQ2njouL8KxP4hsz77PrvR4s7cF3QAE3XQbynev5QBaMQXd",
  "key24": "5Ti7QXNHG66GpRJsEwP724nG51WUdV8PwRkBr669bTRA3UUPTURJkYkxf9TPrKdb2Z9A9gUFwh1nNDbv1zNP1VmL",
  "key25": "5dPVaNy2P3ziiN66f4CavFnANDuhtjDQMb2mnQYVYg1LkrxGb5Sqc6b3SnSKA2sxPrpZmEWuicSqaFSasDxAoyz4",
  "key26": "2wrq8emzKMgLY3u5LGjW6upUNFyeQApYxw27EtqHnSEGbngcrQ3QAtjbFfYhXhMrvnvzsYt565c7iXTkesfRc6aK",
  "key27": "61pzafetDjsbMfUW8ZTYVBnFdZ6ZFX9Znwm1wsqvaGWfeWfUoXqmkfBzyj1TM9foc2Kib177qPciUuAJdHschM8u",
  "key28": "U9UfpvBqKjacoxrDG5rnDyzhmJFgsiC9xSTsfS39A74bKfaF7dGraFY7sBgqQF1FWpHjQBRULLPZ8vz5EZdgWzx",
  "key29": "QShdUhv6wL6wQUVwJ9eW9KHm38j1tyMXFCD3RwAhKPh9nbH9Z5KCBs27KN6CjQAeaeroLmCZ2wXGb8dsJFKYjdQ",
  "key30": "4SSWcuTYDcmXrVe96ZqK5iLEFjrzYg1QViQSAN6TWTpJtjokA9T3My9GTinnoeDLTiQ6a1A1tkPgH3jMh22koSN6",
  "key31": "5ZTmSRUSZitCUM22hhpeBNVpevPqoHrJ1T9cPRYRjaqzRpJnaNfCN7Mne4KPNqea9R213PdeYpZaXTd8FvMs3Hkz",
  "key32": "56DtN5BrATwSQmuzX9d6zYCWCQLSUxh3FtwrASq2TsHc32qMxDLTuUrG3Rb9K4AArLht1hhtuXZb355mk62S17A6",
  "key33": "2aDPWmSSS3aGxgogm694CMHGc96Qf8MyepkAcFL6mR8pn7iqNRBh6JYWTabW2DSddYMqdyXq7tfUkcGzzMp6smP5",
  "key34": "yBEu2fJRuv2Wuz7UY52CBqgzZD1HGQYApxVbKzj5TDgGA2S7rPSkfSqfT8Fvixr5KY3niMuvbE6SNsBFtAreAV7",
  "key35": "3J3F7kWsszhzhW3WeQprZarRKRTp2ymvseCRbm7ei1bc28EjGcBuVJmdDmYm4CKJfV6YTgyKaRtRuyFq8CWJ77KP"
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
