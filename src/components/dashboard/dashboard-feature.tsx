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
    "5Qoryx7W7odioGKYdkQM2Azas9ikkYtQu5nkPt2bwpmWKydsZMcyFCqaxERcuL4FztjBMQQZzusMwco64Gcud3M6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DpLmRMBTYS2GkYq7hKvzNMVvw5iBZ2udsLEtCrhoKTTNHV6ETaaoEHVn1H51Gkk9EXREkphtJx9ktQuDaZBtXyZ",
  "key1": "28Va4qBq2awXZ1VV45CBBn9u9pcWNHk6DycwWXYoQvqcmZK2p54BjfVoV5SM3s6NccFGaRgxG6TtUfmgizzxQzDL",
  "key2": "26B3zrd47ywRSJ3YmWo4afkcR6ZXFeeZ2Y83c4GzzrWgAX9vqpskB8vM3YVrW5rkcZh7VmSEJYbFfP7dNzusY25V",
  "key3": "5b5ukzWvCNmMSmiSBujY427UVKqr2ihRh8XgFV9myMM9NX5YFnBCZJk8v3tCtkJRNyfakDmPyS39m9JAoT9Bqm9N",
  "key4": "iFgbR7GQM93jpf6AUTkEuH5U7CgekRS5SanSXTJbzMRmwdABgvPxTMBjmrJ2bfp2YNS3d3oQfCbdo4W9M12zvaG",
  "key5": "5B2jp34iYTUjrApzm2WmryDRXfgzKCaVk1qLofwnxDdUMYBrn7F4zbhMakVScT62XB1pYshqnrd6DhFUD8cBTXnj",
  "key6": "2Dbo246iixA8L1u7LW59jWxoBL1LqpCHeAXfhtkTh74MFRYZrsxpyEpYafeEVjbChRe75uTZe2RdQThP6EAPmorN",
  "key7": "ytEWHQhaz8PxvQyWMH5keY1pJuwyvNoWGiSaxTbq2qYSs9f4xFCyCpbfrvsCSFb8d7v3ntmDuNakmk9UoFBxbV3",
  "key8": "62p5UcG8PzLsxhbysvSThFCkdNk7DFshkT9fjN3i2Wort5x61ZvmvwYT31GrBeD3KEDdm9TCKuCZvsx1CAB1kuTv",
  "key9": "26rU7kw2xpkZmeCRfc8faetA3UNQszuMWo1u817eVv751aSfwPxLbNCN5yVrYRRyJPVT3RvHka2PmnV86brxPpzz",
  "key10": "4ow8runuXBARw5gY6zKZF3gqhjciUjUWTA4wH5jATxjCPAQv8UCALPXoW19QZrukwLWzV6ERGFAQ3gmfzvyjPW2D",
  "key11": "4jB5RQwfjaCfeGtxSEZALsfNAXhiDmTJdh1cawhVKzLN4D64JG3S62dBdUMyQtdn28H1v7W3AQzhuvqKJUKynANq",
  "key12": "272bbD9jVRgvfnVAwDiF4P8YTGSjFJsjuemB3o8GjZY2dxtH8Gw3aWdE85FVBz28ry8HErxHC46MWBJ8GJyARuxK",
  "key13": "3rEDKVZmAeL4ZCHks5cgQ2FML9NryvdcrQkYpqMYF2r9RcDjKsB77BgTb7ccng9zJQJq1nyMv5jHknHJ5gU1v1iw",
  "key14": "64nAwhMAWMrV4Hmj69BKyVDxsZq4TbjntLdieXK4qjBX6VQP48U6v9L7hAy9KtKKxUT7aTH2rJogbkF4AEdcCPoM",
  "key15": "2UraE8KfxpFGYZBw1W7kZckdU59AZS1tYXxMWnGSv6UZ9sBWxpRZKpz1rfQ1abmM7TLVBfvAY534ZFm84ojWfPS9",
  "key16": "4bPyq8ofs4NdzydcLfGaQTjo18pkY3gJhThR55tEHpuKcBGCkrJQjKSzLRGnncXLKqiDU7VAqqt8G2Bpq6NaRTxY",
  "key17": "38fWAqQDFELcp6Y6SU3TnvgPxcqUuoGSi7x6PdXHRp2NCyQPFDA4ezGEoZYQzQZYdn8NgoctiSQVW2gTELXxujKs",
  "key18": "2ts7Cai8f3ux4HUa4HhDfPuHx74qj3V51sJbUu9bq3p4kyCjFQKQSvWyY47US9DRy8J8owZGhNPGYt56M4KmtXfh",
  "key19": "UZXQX1rXnGtW9ABiJL6ZDeqFr28nhYNediYDHgsb6NhCsNG6bNmo5zXXfJzeTsCbWThARMkYDKoELcB8WbDhxmg",
  "key20": "3dAJEz4eXFwNKTZ9idFDWv5bq39V6YYwFSKSucJFUHUiGnGNGSHhebjusUEZVrLwfxjedE7egigrfSC7uoJtMj61",
  "key21": "4J385N3csE7cVhXQ1py3Tzf4Rh2gGRpS2vdNSNtQKjqxVVuCEShz3VLhrij9TqvN4Li2xqHRYej34ubPDF1st6ka",
  "key22": "53gEw4GFmSJEZeFpbB9KRLei8VQ5yYX3vtbgGpRfopAugB5LnjC4631WLbciQCvDvuwfWCpVGzojeGrL5VkSQ3df",
  "key23": "9fuHmgkXptjMbPN8fi5T4RJnus9vdaB3gJeovisdbMhYoNFUXMQT2gqZhKuY3jwQPFrR68fc7WyK128R2pSdBV2",
  "key24": "5xCo6KtrbY4fn5dT9e1KDEjWiBh3Z7rrxUVS4d6qHQH64LyaB1ivYg6kUkGj5HdEP4cHcrf5R341bFLg3eG1SgDc"
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
