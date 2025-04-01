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
    "29gTkg2H8QwTHTKHztMiLahH2qx9K7H8tQ8bKebStRB4kWSK7udsokknDwDzanu4o5JgjsaQyJomg4dgyae15gC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PcdsowKyaLMRRc3YypFepjV5GPE8RoL6SZxfgga9PrjYgRL3VXGAHzHzoreCqF19oEVXVFkEpZfrQaDoX4XiC2F",
  "key1": "AixrBoRPdPbPQsA66JsBgADZuhjSxqhrHcComqjBJx4kra1fnXM7fN74YNfQm5sZ7tBPbEC51Bfo8VkVzkjoNpy",
  "key2": "5vJdhWXAgsnSujXtPE22nQzp5xks4Dj8SPhxgzqggguTCT9A3WBWedee6BowjhQbXBuwHwFndPL6MrsVGwDb22cQ",
  "key3": "2ToBtJr3tTJWxb7JNGTwqMemGJPZtcny8AiqBk39ui1eSn1sRTg3n1LbhsQuKW8x98d984hn5fiXER3uhbkBVrgS",
  "key4": "5q2QYDjDAy3iZh7HyQm3A6zcRafJ9Ty8mprJ5MG63j9VVpLEMSrvpw2aeThyF7fCEkHHpA5xVF22kewqhhVd2pys",
  "key5": "2zYt3cCbRaPWqod1w5efhQjffSDhBWqcfNu4ud2JUEaru9Jdx99as3FRKnm9yssAsnEk8Si3Q6mWsV94MDviSUnn",
  "key6": "45D6e134tBLnHGtApdRasLS5LcDX5Xun7Ax65A4bxMbLirK3dmjc7Kykh865uTt9H7dxU9bgWJnHsa3B6sETgcAM",
  "key7": "3V3xj7NG7KrV4SWo9KziYETkXjs3XsZaphVSLNFTaba5wgn2szFbmTuWmYnPrNvmx69nxn4qGsyetbSozNmgNoyc",
  "key8": "5SLvmxq3RJAUmJWwsKr6rT5iE5w2nuu2xSDwhp7GyYJWuRXD2PZuCHuQmdHNoMZWo5FdeFkPZrsnaa8xme66NMfw",
  "key9": "34ZVoYv38EC2uTwB2XuxSyxej8yDQGxHhs416NZFMkhv4GxzzKKddYsAELeR5k7WeqvWS94GBWfJLX7dorvvy9kB",
  "key10": "58LUtQqYUh11FX9CDkTo6V4YaqJ9We2KKi4FGgSKwXKK9fYugT79NxzgRSeP3ebvLGWmbrmxDCbqm9PUbLmTRhKE",
  "key11": "bZpVxUWAmzYyqpiMP6ScAzpWfGfBKjegy3dPjopB6Vy5obdRz5mcYxLSSZqFA54W4TBaKoX2xmN3M7iT2v2Gz99",
  "key12": "3iiYsXcnYYoSfWnWLU3t6Je73GjRGWU5db8vcyXSoRzwrYqkAy1MqjAJGGhgiDvmSsGsuyhjVQqToLVYrA9jzaY6",
  "key13": "3UeWqPfQgAbzv1pcSMbWeqdPBMLRrKNy1wNcuFMdN38S2AQsFNrHhBLbXz6xN3NVNhZpv5hKWemxGPdDDpAiGria",
  "key14": "4nB757m74aDpXZc6BpTX8KVy4CD47SASRcGDoHc43ygkMLCWULqkFUTugnQRssZgRykgzZHQA8BeMvPH54VZeAeo",
  "key15": "2TXkJGLewCQMCj5HwPbAb6VMETP6PKi6WMc31AqsSrXB8UP1ugQBwKLw65UYwy6SvHbD8jzb4F4qqUUt8HaQWdfr",
  "key16": "4gG9WmXDkBPAWhgatAZXZW3UtpuXCg141ruSi24FKXUANWxz9TDsJKKYtLN4xnxLUnAJYPiCwvZKRnJ4ZDSy4GMy",
  "key17": "4WZ49nQE2nvzLcyYQk4uoQsLqu4kBpKpVA8gWNUsuBS26pjE77mkYjpphvnh36RbCXJZ5WsCZzAK9aDWyVHuCRbk",
  "key18": "4JUeZEHXkFGCpz9bu6paBd5wyvdGcbKXuLur3ASCCuQacUYycwq9t2mcfxKv5FA7oqcTDcrzWLArWCxd27jBUQ4C",
  "key19": "4aKvhK4aYDopS58s1f1rEm54R4DZxCaKWMwePZcgamfcGS3LeFDAUoREs7Y69maEfobM3bEM4bq6sv386VLYeXh8",
  "key20": "63S42bEevdHtF433po9J9atVaB6S5GcYXmJC2y32Dz6djBuPEHFjpJXPM7Nf9vqNPQq4D4TG9Dyf7vuuijDHaPyg",
  "key21": "4crtBAiVUKnh6pirKxkFHfDyjyUDbQRrX3phZZu1sYLhYLcqRyrmeoQWMUvwwYqpMKK4dN6SFXrSDDxcJb2887x5",
  "key22": "3TQr1PJ2TTsNQLBVDNFsqXRtXE8JzUSoCr2hih6omVrH7wHzYuL2k7CBrKrPW12L39X8rRgtV24shmLsKYt8pKKm",
  "key23": "4ra6Wr4mi7vZgk3Ug5CqDxNVVXVC6uN5gfdsY3HKDfrue89Z8ZvtbYnnEGHeFYnqj23W5ker5qFgKPTXFunKFzmi",
  "key24": "4bz4RJRvp1r8WgDc5zJAt68RwVHxnayVkYWJhgFRenWJ3H2Pp6rr3piniFeZJCtJeEhtWVNKgfjs5Dff58A5o5sR",
  "key25": "2RHmvcsBA48igjQSfPWUidRqgAt16CM3QumpeFPFG44cGL4MazNafn3ksVKeHgdWNP5VujpHyYGnP27gG9EURapW",
  "key26": "4q6eP8FJjpTpE2zzUbzn1pXP65ubsfd3L6YqduBAdhtA2UKQXsWMUt6bAobur1SXM1Kh4NHqzzE1Z4T42WrKdm9p",
  "key27": "2RTE4brofNAKPQXjYuEgNntUBqgoAgdhhrzkUgTngW5MG11Rw7t4hkZvLqZJLPaFG83KNgC7bYcfFbx4MRqffb47",
  "key28": "2iJJWzig6TGGrMgwHtUDpFzwa82iUeybPDUBW4bZ3fGfhDu2AMYw6FrFnezog3ooGEZdpKKWpqfvfJKr7XeEFxVc",
  "key29": "3is3RChUXkSt7TB7NT1iyQLQiZ9yanMxSA74C57F8Mnn1erb9NoFdyJmJzqpgV5kUREi86GzQ4hueFxtSEakQmzU",
  "key30": "3d3Q3n1mQFdQDUxpyQKkRWqbr88Qas2iLDhrxKjhKhKorzE6waePopRbfRrQ4uQszWDuiKHd2S1tCZRgL4bWQxtU",
  "key31": "5xfSfGniPaLh27VWKW5EMafcTuPg7hWwRQLX9KN2cGq9N4CCWzjFXRG2vY7PFi9h3XHSKyZZQpY7mM7f4oYauhp9",
  "key32": "3BPwcCD7edKm96aBNbxrBdhwRCSVfUnbjMMMCCkWet4JC1mrxfm3oJvBAJgTM58Na181cSNvSxu6rW1eksrWi2CR",
  "key33": "4arEHZe3cnhdE9w645s7wN3T2wtuE7Sw7Q2fLA4gunCgw7V5VCudzr1WThbozoBe3fF6xYwR8N9uSL9TWHbMFiWp",
  "key34": "hXaSghnz9SWPFSLT26YzhrCqXikjjTW39gQ5Mz8txA6BszzUAwSWuYNMGzSMcFebMCJ6EZBiTLAqEySvq37TTtB",
  "key35": "5YasbjAxzwXeNwBYry5jCZe1F9zGg2J8yqcdg7E6q2nd9BDTqXX9JVJ4ZDy5UJxxfq3e1nnvvinrkgagZwmQ4Sqv",
  "key36": "2fhkyG9wLruB3cF9m1K3VUtnpHcDzL9AoqoZaMBAjBjpxHKCad1eBTsu4C6QQuLwQ49ZNezQ7bDa8wwu9VXgdLGu",
  "key37": "yXfxd7fMpJuqaeTXnExHmoMSpnbudZYEJYyxSCFUBjdJmkfd3rbxNdcXfKu3z6M2B2BgQcUFpgsp3KAWhvhLYnG",
  "key38": "2qfzhtzAH2f4RW6b1GkNFadn1mzupZQT6KW8cSj7uFwxT2FWmQZ4RiWx2epsRsHD6YoBss3EXZCioJaBpVAmnGB9",
  "key39": "4gMnRuPnqxDd6QDKRrNqYZ4YuvcgXP5zKwchR2fc9wKfRFpjqmKRNVJaNMoXcuZS7saVFPXZ667FbXJqMhEKrC1e"
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
