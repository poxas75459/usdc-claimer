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
    "2RT2r7YacGtpCApzYTN46FPRHGgyZcuTo6WBqjUF7FCwV2TFgbuCax8jeKq6Ms9dDvT77kKhQVFZFdwiTC33cJxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7iZh49VypkJBpz3EqywcuVMwbZsFdksieWkBumt2Ad148To7m4gGS9deD1otBWVcY3VeotTSTqGyHHbjo41pxUY",
  "key1": "462aPUNwTEFdGQ6eJK2vpJhyj4XkSia1aBfJuERFM4aWiUquydikNhYBUXMbqpz521JfK6H98YhP6Xg3rKAFNQLE",
  "key2": "4kVVrf2RvHKtR1NcUkKbcdYVqGeQ7c7fNugNbgGJV4SZ2YZY8jJYgfMrpNXZNzExmkqwrNhnQdH9JEmCm8hJ6x4E",
  "key3": "ckTJrZSE26pVX7MchuWSC8w1VtKDr9jzm4BVZz1JFLTRYKbMWNadeNC48pEqto8z6aSebzMpoPUWAwLiJRXrRvh",
  "key4": "5PonLiSGtvhM4BLk5L1sGPvEPVaxSqbDTok1Ac1yvwkeEJ7Gb42vMRPRvL1ogQL53FtHbPxwrwF1cbGuXjeVxoFR",
  "key5": "5HaE7nrjknukvtEgH3c97S5otkzE2gr7ytmdJAjnULXzqqNBNzNk9i12VQrZHcM5sABJSJ94YVCunPnLvD8WCnJf",
  "key6": "53XEJGTven5VbpuaEJhJpqiwsdGsUK9zt1EoUirswy2mTTYqwfdvrGKthp5nHRHjCFoTZrWU7Vk9NHL2Vf6oiiUj",
  "key7": "3oEJ2UZV8KEGRVxHwi8RxQ777Z1HicnNrCCn4TYtaffkJU1Qbw3v8F2s5npENbAc1xuj33C5daLC5LP7f1HpEdUj",
  "key8": "4m5JcHycoNp3GXBC6dBiQmqYHi8pgmB5mS9sVr5GgkeB55YPd8VPJ8sHLeAVkE99Yo1hBgvChEQLjUjVp7zbJCDB",
  "key9": "4QbwuGmHYDoLD22tyXUKRKZtpR8UjjidPpMkvYZsGtNthVGuT3kDFccc1B5nzomPhcxrRqQJkgoxxAHkTxu6xrsp",
  "key10": "5GU1x14hhgZsvV9WufycG1at7dqX6KfdpQ6TXnf4fAGStpWf8zMuZgqcqAeXRr55ooSLZbPNLYZZbnpnFCM1CqKN",
  "key11": "3oMS6b84U2irEjbGDTKcbzXUyiSHXNqsQ1zDryc3s2yXMnPeCm6FESCrDqxK4CkEfWkRmGqPjQdBxtHzFy5AdeHP",
  "key12": "3Wa5FFZXN5ZLtN819ThcHWngbLd6HGeDkWvPe2NK3QLbWz54dXBXpQdoUM4ZkCTLuJA89ki7K3gAVAqKcZbafVTQ",
  "key13": "5T4bTPme6ZouSTEFPN7ak2K2LX8nRK5QHCxJygrfLPQER8WDLkFdcWZhJ5YxUeam2idNFYFhmjWSG94xNKXgybQa",
  "key14": "gMCddRUxcEUDZVCvc4XBM2QwaRA6mGmTy8XM2GnYeoe7Aiy19XbRuMtDx4mGsiQFkrmKzfq1XvYCnRvXx1ns5Mq",
  "key15": "2n4YskEpFFoWVdUAsiCAKxZpLzfq7gNeC8NCexTNh5kcgsGYWbXJFn2YxawpbhC15VHXRmzdfTn3qW7jmkboPSB9",
  "key16": "4XoQk76x8W3UuggG69Cm1pwxKBoqqpGtwzzs7KCgmkZ3yen1zWSCzvcK9pqDwJWxkDw4BcL1cNcetTfQAei2Ztgo",
  "key17": "3NgafSmowtB2LBrHaWoJZa3DinQ23oR3SUjWDakS7UpbpDuoJC66b8Tt8Dt2LwyBMqDXAYN7xdGwAMCsdceUKBYT",
  "key18": "UHoqKFpU9o6DGojzhnP47tXrBLt93JXP8KeZbmQxdBTK5rCT2fn7FPbqqrgUnrFRTYiQ3bBW6QStiYdCR4Uq5fw",
  "key19": "3RrNtVYD6uxPUxcXhVf8KKVG7eEPjwPXP34RqjyHKnoAeFyxifuTHLonN21RP3ezLtJ8gCg9qiWTXcR15GtRHVoD",
  "key20": "4fRqxMNuapBBUujRM6E41FxXxkjETTrLFw4tDYdC8Tru282W2sY5YC7XybaGLG8DS77f31iUaud5fCaWC1w384Rj",
  "key21": "5F184yVPhPGEP14gLJgfeQQXcVh7wqhWqJ2wYAp8K4crpkomWW7vWia2sn9xaTRAWwXemv4ksBBAmB5uRFV8iFEq",
  "key22": "2k8rWnin6rvCNHhn2MmAotrxG5mBVrD1Di7bL15ch2o96QPGPPuFYZWULZPB5icSsv9gMnNWYjTyx2HQvWNTEYJx",
  "key23": "563HuR9kG9QBab7NDJdgEcXHampmaxBiKW3u4ahgxEj8aZx3rZjpxQ3iEyCFzZTpSu76eBb5gGy6QYv3Fw4HNjQa",
  "key24": "UX3PfRRCwnVJvw4kLfLRJdJQrnMWF3X7GLh3UAnC1BoN4Z7AnhBSRPE8DXnJg6VFTzsucj6t9mK2cK1nG8j8Zs1",
  "key25": "2KdUHL2bNaaQuJRBJHFc9S71sDmR8sPPMXrNL2jDtuYt4zXWCSin8mb8H7RsG2WWUKoAXRXmsD9o8jH7FGCG2hgs",
  "key26": "2Gmej1p7PnNEzWRRQw6RRX6iGQRxLhZf7GNe2c5sfeZAvD1Q7AKeir6vnbrQhtjyQnh89tLDHUpESYTYJMz3EspB",
  "key27": "4QxENBeTm2zYTVQdc9TeBbdQQd5d7cGeCi2nvDVQgJERphN3ZHx8EgnRcUKYw9bd4mhZhc6h7EkqHaW8PvxCat68",
  "key28": "5tB753TMw6VJj5q1TrsgFCsrgxdLHevqD36yXXSshCf7Td9wAsD7moGvFuJQP7GMAtjYcLfxUc51GdrXY7zpJe3Q",
  "key29": "5rXsKoJe33755hnfkTMBCZvNPKwjezTPq2c4ori6PJt5rUwCBEuW1BurQT1Mr1LZozj5erXc5tpk1dEayRMVZKqJ"
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
