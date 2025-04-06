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
    "Hf3eYesSBJPBUn84s6RkUhTi4eUnLBGuEojUuiuXKEd9nyVHqxBpz66HdGKChxeHgwH2zcA5wdZz6D5kGMEWqnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aDKupXhCTERAXyXiAC5PFReGu3xK5P8S8517LPTDmPj5pDJQEB132LmF3JkAyqNqyUm18gzwybUTLTjw54LJ2zX",
  "key1": "59yZU6BVHmmv33D1rTmCupAkTixZ7411avpfnNx4SRgPnjqSjMsWERpwT61bFr1qYhAzS4Q3dT8schGcB2N7SjNb",
  "key2": "2aVPX6PhFWRXXJSNGychZV3xzR7NzPhGTGkUehepxvgqsnDgM9UD4DeVi2G1SJmfgMz26kMkoeg6pXQ8FTLVoMm1",
  "key3": "2Wz8B4r9rkugFwx1dsv5k6HhcrWQZvXzPy4iVaUwDEAX4vFiQ9QChLPp6Q2GyhRghGvQzgDrdHV7qfqHNMt3wGxZ",
  "key4": "2sFUj45r2HiSdFhMQK2pKBzapXuqYpAjSLrrkNsDoQ8T1Hqp8cvWfom73UoKqrpudZwVpQvmbyzwbv5EXQwr1yXv",
  "key5": "5aaJQGPgTVATgExuUyNtva5SeYDpAMRoayKW2Bc6htNStYqwx38oTvuAm2KynzNK2jV6Q5P1W3m1V6mhm8wDyCeD",
  "key6": "5JbNL2paeErYHYev1tVQmFTcUc9dpcywNqunhJA21x7zwfCMS16sdtZLAAHWqNxZWJmTTKryRoBPGaRevCkWKq84",
  "key7": "pxHgotVApoi5BrS227SaucAG87jWwwQR1gFr55ddQdY85AGbRXkfYaRjVc7oyLJw2HkNznZYYDyd9hHM9X7YgZQ",
  "key8": "5FQozkmbC1CvsNMXNanEpoLQJZBanYVCL64nka1Ph6wCL3pkgehY8Y1i5bbKkJn4TNT3Z1c4cMLS3N8tN6JacSgN",
  "key9": "2UvAWZqCop1iWfwVvz1rQbX6WetZWpokNPUMpZx1FRWxqc1CiwKrMsy65uAFRJMo8S4PdEnADzStxKJujKuhzfy",
  "key10": "4gXjvDL9zavwngpvKCqfx3ngeLxjsFmSamtAkYYBeGgpjU8Ls4yyxSTfjLDSeZW19qFVFs2Fk7wLrQ23C2HxFzcK",
  "key11": "9sFFdxw6Kq49pY1vXJ8rXqM4cZCyEwAW2rTsUZGLBaYgnphG1drKcbGdeLMcx5yZgVcqPnqn4GXPaCVPkkguu94",
  "key12": "3UgAA2eUAjH9DHuE89NdiN31GshQxhSyX9YvxC2bhiJpixiGzWEFMgevthN9Ze4SGazGuZybiPF7mqJfAm51SAtR",
  "key13": "49ZDKNjEbg8CT4t4kL3SGhnVrLaWNcE4Dy8UKeVQ76HxgCTcpDGmRNPZnPvTp32ZqabFFbSVGxXHp7azUCK7EoQS",
  "key14": "5dfJYW21y9pMD5Sd9jCZrqg2SC7iBXr6FVcS1UHfeKhJM2iQsiqVNgNr1FvvC2hici6HaUc4i4Hd5ZyjAh5okkCb",
  "key15": "qASJmA1xQL2isetuKprTnYH44uze8shK8uAw2eNNFGRmJwWiEUpdsQYzb5VX177WDpBejgS36ov6wsFh4oTWpF6",
  "key16": "3tYkGsKjN7pPjMG8eVDFGTRHxBWX2bReHcuUvTE1BpE6S9FQQy2X5zwRV8PwSB7Dm313o6Ftk75N2iCVyfQXeYER",
  "key17": "KPtWoLvYGLiEXdNhcETb7K7GVGrRJaDW545sngiQDjNTxpinefqnNfsQH9VFs4WBeAwoiwhCx3iPaQkjHUyxdjj",
  "key18": "5EmBm4nT6Tq3cgZwhHvLowhVG5GSDKQ7ns7XZ22TVAN7DfKPfQ2dxTiwv8j98CfLdtii3ckSo5Nc6ozZgRiM5Nnm",
  "key19": "4tteZcZ65eYgGjhjXdLrawBtcaCAoBuAVXZLNBBZ8QaBL4kcc1zNxFr6mS4GNLZSMBaEDU5SLLviK4uLK7RKyPm1",
  "key20": "4yhVsmbC665BHYxeUmV3Yw7Zahrpw7dRMwJuT1ruJGnLHZe6YiuNP62yzCAh7sWyqG62EE5DMGnP1gdzrFWa5uC3",
  "key21": "5D1HEoGYAPbkGrwQEGEsi2Cq6iQRxGbm2d3Rqc7ZJcv9wGewMNiLmFWbqQDsbWBjFvh3A76woAQrjdqgHPtSrvCN",
  "key22": "UkbNHL63omm7FCda5Xa2VYNRyw88QGcxo9E4E6QCZDbuCfcz4bNzcqrJHrBnM9jp9PfbsbTC2pdnWJLwtYrshnM",
  "key23": "39c7n5SSJH3m1mUC7RJdwUQjvhaMLakxnmvRLETMgZ45opvvk79L7jXRDBHpKXYLWrbHWmFpU17T8BWLYHuEGeD1",
  "key24": "4ATLnr6ZDwAANL3c5bxzaCX8jZCwTHuZV1CsuhETsA8CbNLifAsCEPZ2VzHNE9scDg5Xe9ordusAMxZEDTwLELz5",
  "key25": "aWzntGDDKeSFshivCMgxznvqhvRCuLeSF2MWk24sHaCKKf8Q8mudnAvbii42zZ7bC2GFXDeF9MjpkDQUBsQMTmE",
  "key26": "2Qz8UrUcdjBvCKvezdn6VQAbwwAzfhqLZYn9S9uhwtsp8JDAicapds9w8egkNSnoxv6mBsvDNgHurAN9RFUMrGq2",
  "key27": "hNYnN3qZEVoUAwL99eWM5gFkrgmiAZcjC3Q7vzh7oQPPWt4aLfMH8bEseNb4y2RY11SWNTRBiBzfH1J9aRGaAGz"
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
