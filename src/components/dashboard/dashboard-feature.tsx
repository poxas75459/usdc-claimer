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
    "46L3WCCmo7d3X3qh8SdanJkoEhSRNH62Pzg4eZLbPuYEtLzS8ckEbxUPhM4VaJyPRdFLDL69WgNHCWcxDEARcXzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R6uicduSn4ywVV9izCtZkMEorK9WNQcukyi3nw3DwAF4uwfgGFHQspWywrwHXnEVBbFDHcyzTdNThqACLmE3DZq",
  "key1": "5BL7YMdKm4kaCmYa4xNz4fvCQzWCd5FMaaRXNi9U3HNgNTnJRKmT9G74g1apA74yhBPRuRKPeFM7CzscoiTrEbjb",
  "key2": "2c9HBiSoPHcXdo3FczsT78XyFyuhRCuc6QtZdqvfgh6FHe25LJopS3HKzWo4L2NApZkoTKMwy2YgmoDuUYMG7Y6F",
  "key3": "4ySyZ5bPeWDduAfFGTzZo25HQHh72LFttTB5TnpmZudMPEU4at1LaK5QXM6HvfQ2rDZMtb5uaPgtEPaS7T7bsjNA",
  "key4": "3gBg5ihVPn2WcrR4nDETMN1UTqaPN9BAC4zyJgchD9EJoRfRWY8N9ESXTFgWvwk7BakQB839hMtmTzgRLfXtTMuN",
  "key5": "65HahoMgcTcu2EupJKBcZsaDcngpNmyaw7RGhNG6hHyZTh8RFougs7wHMZuRiFHuoD3w6qxnGiuhtfAJnkvuadPM",
  "key6": "4xC9gbvwAQRMqAKK9deNJCracZnkshnX31USdrEKK112XznoaP3GxMa6NKvro8kz1b4xAQbt3qGvvhezeqcQKFyV",
  "key7": "5o9nsHwcdYUsRDeMvTm6B7Hv6UFrZwvRJKPHtpyDeB7p1xkTYX4Z2d2c912P9MfxWgBDWKcwWiZzByFycfJJeyx8",
  "key8": "27E9iWSscAruemNvRx1edRmTkJQf7quDSWgi7MVnD9To7rYRpLZg4jsXTFMB3beaCMrd45BirCvNFMywCZpCc1a1",
  "key9": "41GZZJ3Wc3g5e2x91s5RkN1EGTHMbYYXJdU875SqJesPip4dCmjv7wdU4kGkpaMhs4BRVgcew8PVVSYso8V1buZN",
  "key10": "BbjGn7uuBxk8AA68iiUNitbbYtGb3orxGM5jyPxRiC3xgMz68PfqYLcTFMDvub7xVE1EZojPAsdtQqdGh6MZMHC",
  "key11": "22yTTzYj94x9NZP2dVuP7f6eGmziNHrNFRm1NPMKbY856LaR8baZENxW97NtkCMvkLC5Fm7ZmKrbSMEr87PrSHpW",
  "key12": "556moCmoLR4KzctC7qTy6n7TDvRUDyCJ7xE6r4Sy5zCYY97zzp5XJ5eSPaZjEQ9r5VzWHbKAtNFax7kR46tcmkSR",
  "key13": "2NrgCJ9ywyfxQRujqzB52bN7LQgMS2p8nTPyKNmsMbbhpPYWNeVfUYiQC7Ynjgt8tL4DmrwaXeFXECXs8SrgJwp8",
  "key14": "2QixxLWuK1vxFhXg7exdkvMwkegxQKmxJwgGic2fppFdj9ENZj3u7YF31fLGshqws4XE2Qn6jWPFCWgmYso8fMY3",
  "key15": "2oLeVYNkhik547kyKhLkjCB8maQj2KKV7ktWos436aoG1cCkxEwCfauKVQV7AtEAHPEXynMQtZD7VabJYjaanfGH",
  "key16": "46WG9Eto7jeYd1cZ5vT2h1afSWhV3RVFqHBVsVfidhZc3J9cbnxjXsizirqU7C6mEsx4tUGZ7q9FnzU18tSQ7DbZ",
  "key17": "7rWnsvCq5bnWNUtx4w7q8CPCCQDQZ5BEExz3PUWfeDTffHZAGPTdRNmzGxWEXSWyvL4KeoCdSHxQfGLStxBJ7qU",
  "key18": "4LaqEeJHp3j5ge1Pc8HraKFM9PPRuvcwk2zJwkU3BspzntVXqyuV9sNX5vxLWAyjK1TjbcEakN4oSwgVXmC3VJXM",
  "key19": "5zxhNASr99msfKXyvgbyWW5y9iZ9iQmZitjrjmqoE848Nbni7sRav2o2h4vgkdAf3Hqf9k8osoS9X17soD1imbi9",
  "key20": "66sbWkMfTgBpiNX46MzLqUkomPPkbzZXBiWthaXLU5RxeCNtdqrgAUiizpki9Z9wq5gZweKjEnW9GeHipauXiDwR",
  "key21": "2Z5ZWRZor49gNMTQwxX5cNNTuEEsMGvUuCj8knx2U3U7NbrJJgeWSxZxYdFFvxVJFHaeX2ZBpsS5MpohbzLTtgAB",
  "key22": "4bp2sUC3Uknaxr5MnNMQTs2athmzSa9R53he3L2DoB1EfNFubKf1rK6cbHHdvSvTfHu17oXwh5enTrLxCmrJ282S",
  "key23": "5SQPuaGDHRM58AjEVmrAmjV5GSX4XLD6KEbjf3M5t8wcs83u8BdUfP6Hg1ZHnkGfzhTLngamaANoeSa3YWrL1pUC",
  "key24": "Te3p1doXY2NLWueo3cVeKxuDhL9UQLaRVyTwXfJicRLGnNZgEq59qbWxS42PQBTPbFcrWNFhAvcBD7vTbokGdk7"
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
