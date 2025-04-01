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
    "4FGmxwUSfPR82Fm2uARvhxLxzkGrp6BN5uWQ6QqUSHi7P2V5oLhemRPAiSLcXVx2fgfVqkWF9C2PhhS8GTpp3Jwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KzizuavWmKAEu4ZTdoCB4VntDDQioZ5n9frPTRC8oSJyhnK4ZWYyULThasGfhfnDwEgouJB2hkShEfXBHdts4kS",
  "key1": "4h6q3A4PMVAKEVs49ZsSjmHaLyzgmbD4C1pZrnCyVtU2hscc4Q8pxzv2yEX8F1aZhXcY6xp3vJzXi7bt9M2BwZNL",
  "key2": "5PBhY1vpt17JuRHEa87H4U4ykSzcUr4GX3TqUbPfZfky9UNPREbse1TiwCBEYyvFKt1UeJ7NX28A3EUYUaBrcm7c",
  "key3": "8Dr3sAd8ZRDLCPo13SkqBUkzSLh1Qccysc9UeoUZyx1vcckwKBha3PjPNBZJeSkFgxHkjtPtNSQNsfBQ8ECREGH",
  "key4": "4DLDx8DrsnGVDLxAwpeepoAgRNnxw7qHbonJQMCJGTbAxJUuf3mv47x5pf55iNUAA6vMzihLFjAPUxppoFpRJVox",
  "key5": "26NCNkLLqGrAmsJ4k2Bvc8WoUDpe2hvfjeXotn5DuwwD4sA5fkB5REJghb3k4zGFptq5X8trcEUMBJL5z2UXVYBN",
  "key6": "4KTsnoTmbMX1dZoukChqWLZaKELmreJJn3GY6mviewszuwUHfanjqzR2weAvyJqGrYr1uLzsqqTcbDst2A4HS3fm",
  "key7": "2pMeJYYpKbw7Me82L4Aen3amkazUdffhiEvWdCMLU2VGPBtJpdfAf15EKLsQGY9y1iA7TNdcNy6BmMaw4PoaAs8k",
  "key8": "4zZWbxXh8xxUPahvZ29MyKeQ39syzkEV3mAJHpwE9hW7wcQv3nJgbharx9UqG6x9W9quHwiw2fRtfXuEFRuXgnXc",
  "key9": "McSXs9XKfhcZadqQG6ktBAc3EqU1CXfX9DgdJ7mVPbbH9hoa9U4nfZTN6YkpmSeq2cwMzP17Xy6ti8DMbCTpVnp",
  "key10": "4rHzyTYRYuh2vuBwKqyi1GsdzNNhMn6MDgEk7wWz6RDaEuyXLX6rZZRsdCNWz6nXJLWxA1hzoppctPRrNEF6UmFj",
  "key11": "5XA1kBsWAoKk4fXuNWWTfKXcLFF79Hvhf1mrDYwAHp7by78Ec4uboKqBiuWiAJYgfKNZZjKTNbmrXGFWQzmDCBur",
  "key12": "a5LQZFTvmgSKUC3h7C4RiwrqzM8hwwucHmfdwctE1oik4qWxisuG4nsUtKtYS6mYDnqJHLPWTVPYvb7v5dtZUej",
  "key13": "5nM7SeYHeExyc1caXwjc1NkoXv8usRGaCD228FrxsnqbZ5ervyYteKXCXswt2s9aG8cVMfKmtYSAos4gRozgRtLZ",
  "key14": "3PSx76dXuCX7KcqTzXL2UpLNX9Bd6fw7jgF3HE7YdbkfeRzoD45JJg9ZwNPq7fyuPUKCPGFoMhjVaUsbiW83PP6A",
  "key15": "4PwpWPWY6uQwLao14ZC46ctTdhaYfdQBWYqE51PTTHX3EKFWTJQVTeYy5LGrZmKAR4tmiHVds3kAXTYDNUcYzQZ7",
  "key16": "2bF2fkBzvz1bjskS3mX6QeKRqvBMq31A7zbozgxUyRfvpSqLZmGgN6oFFs1sjPEtarL7WM4R3Tu6auXqhubRU6ZS",
  "key17": "2Z28APXimYzcgu6SerUfsPZgDuSvgpkjAsgGJPqdLeHCUWoa22LSmQ6mNbGGjX9GTvz7fipjY55vgXdBMC3eXaXj",
  "key18": "HTBZVfqN36qNrCrKvnzjVJUjgwzjmrXxfGgFbVaJcyqFV73suaEs8TJNmS9pmSHH21h1S5WoPHHmg4atDuXXyuY",
  "key19": "3E7tsT4cSfbQjjCAoSvLhaUoUaRZ6HtWKVZX4ek8fuNQaYszy89wBVCFoicuss53vgM4WBvDUg8eJ7f9kVjcX61K",
  "key20": "5owNWbeyPN8HAseVPjAZ42NCJr3nyburQNHb2PK3tRhiJrcr9XqZN14giBGA8gUk5rSns4XJtYToYDqMFS9ymh5q",
  "key21": "5vHfJM48ctnawhcYRnpiNt5zGnqgoWbk7eENTSBvEkrEcnMwsHYEBqa8rDHyHESPqajdm2fkuwGEymPLYaNZ32ud",
  "key22": "4mgMouMriLmYE4PFHymMmK2z7LDVctuUWdEcihpyCpkrwKn5uJ2GtmyTGyUe1j6wkkTDH6dUXyVA9CuvcxS1Zy3z",
  "key23": "4nnLspStUKsRTWLRXW9Di2QKvMFSTvxLcExKHAVcBcc6YgL7krSKodSXM714kRMs1jeJgy7JDo4E1GdWSH2cjP5",
  "key24": "GjP3TtxbQYznMxuqVafTka8sF74Djzh8KXLuzWXU3whpuhTssCSx9hN8V8QAbNh8sw3V53kw3MFyXEJDpCWYXF8",
  "key25": "5oWPVKCYmJS7DP9qcyNoqx9LYKSL8WryNgdVGha8RcpadV9wv9xTmq6gwr7BUc6e2QthPp96DmTB6BjmDopNG2Gh",
  "key26": "JLqKAfGxRMcZovqxBm8CDhjmExNCeMj2B6JpALmUvTyHeDkMXLtcQqpoxqixb4HDvSxvozySFLQSs3ShjA8c4mG"
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
