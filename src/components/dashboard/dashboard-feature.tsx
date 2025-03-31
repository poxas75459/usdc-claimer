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
    "zZdGPpsrDfy9tTeQjYT7EipWecZy2WjiyTVKpqkFUFf5UFJ2DErquze3bTXhLu8Uxc749uR24i2MyMPBq2b6J4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GXEshPuwbkGDArppzmFUr3yS4CvZF6zjr2kDWZ1XFRuNuUPRvXFz8gj5scZEsWHv9ir4aMLiQw2PQmmGG5RnWM2",
  "key1": "JJ6KE1nGsBchQxB6CnMN1unZbL7RgcyUXLFs2BDdC69YPLBEYHWyN6fWgLdJ4haHBbyMoMucCqGyCWhzS3fwKYz",
  "key2": "HdpBdw2G3xTqaBGfr6Q5XAvGmX7VACWHcegSEJXBC3JzCAnTYKT3XXgU8hpi8aJhavThWqkhp4GWCLUNRYvdzBe",
  "key3": "3RdTQ6fevafw1wLe7iefyPmJaWadhp56hr2kNxeD6cm4oy7NUKPVu39HvfEq8J4RYveDR5f7g4Fa74C7Ywfc4uWr",
  "key4": "5qkZnXJSZxhMyKyaEwjxLicphq2NQf7PzZuykPTFUtvWBqEnDFnP3YsPzExLSLiT2nf1B9nMCzQbgaK3VnfnjXds",
  "key5": "5NKJyTpPijrdqStugncB5aEZjsFnHM52baxSuXvFfJDVf6rguHxy2VkVfwU7CkqGgWyoTawL1oRTEtrFkLYTgBKx",
  "key6": "2mzX9BPR2XvJWqXP891rvubmxbobkeSfdceA64opSFGxKGWRoYHEpJsS6heVYusgRfiWmLk8CLcJfavFZ7TSprgg",
  "key7": "2VF4DgbXA5jdVSVMhps3H3Rd5y7ifRBxv1kSdgaQs5UE1puNXxANGqoY6ckC9mv2u3rWE3rg49n9BHXEWqKAkGcD",
  "key8": "4Wzb4ZRdHbbMdats8j9gm6hAhUPfBVuq2hUmrEUz5URHTHynFcjsTusicE43kpQBjH6ntDYqgGmiBa1wkEaKkAQJ",
  "key9": "63BHWLdFP1eFcrioQzgnKS8MpmgnXbpan3F5FWG9g5rJqDqpmWS5wncJV9mEvYbWN27xAGirJyTEN4kcrJaYAXN9",
  "key10": "n2fAb9CxAUChJfaTVxFWfd8QKYgs96DQkG6hVpwpe13K4fUf1BwV5Z3oEquxsSKXPW8npkCcbHMYURF3HR4Vt1s",
  "key11": "3xfkRausChNKmjpXsR4fG9F8DagFjXsRtF6pJ9jmkb2bGEkUyV1dbPL3Sjkd3VeUcaUxM1UMHukVLvZn27f9wcnP",
  "key12": "4D7N4o52wmVFpnm5nQtQ9b9cHag4gNBEAKUbTbDNBCe8uxWAgHVhMn1ADSM4nbdBDF7ktNwJh4mHxD9Ti41bB1hK",
  "key13": "3FiGJnSzLkkst3v75yAmJD1hVHW1SU3QvbVpnhXwPvTPoTAuPZfpKddBJG5qmMFLjwxe4Xz7YtvMnpDwPVcXb1YC",
  "key14": "nvburfaHqNQePA2SW5SwrmCAtgb2UkU6TyZbx53nL1P59aJ4ePFRiUV9q2ERSEeZVf78UFtnUzcoVUGqmHRZA1V",
  "key15": "wytCoVdLuTnQtcTFu91hh9PPoXsX4merYW6CuCREg4gZ4YFzBPRxHcGu1dZ981MvWdiaCzxEZt79uwvAtpEnqWE",
  "key16": "3YuPc3mQq8QqFSwcxkAnFSaWeggKw4tD8C16kGc1h9rqtgaeED2RkdaynJT6bh3KvAsSVdPWGm5RW6nWVL22RdJ8",
  "key17": "24MqNsZjoDLWDRojfffWVtMRiuUdqoLDmJuHToSrjScmejMpGLp3LjTxpPBgzu9xYDyds17YLCueyWgkwyEu9Vji",
  "key18": "5fAnQzFK9AUSEsAi8nyeaQMAFegkqwyWn8BPTP61YfWUwtmJr8R2C7h9XR5QLwXvX9SeZNssf3KwKmuY2XUnBjvG",
  "key19": "2VEymbfD8RBAgNU8t72rxvFr24foRX8dtA8yb4xEV6L3URsRCvUW2qH8jK8ayPJRjpp3N8mNdwLp1h5mBrUHS3mY",
  "key20": "2TrP3mSKFnzNniJMFvGByzGYt8E7HzukJdFzc5K8N4ztQE1xwtvDg2fJgcu4pX6yFbX34QVj2gAGgYdesjPDEJ39",
  "key21": "4ayxYWny9CHsTv62au4oP1UrSLNfCG9Dnxonnw9ncqGYh18BmVNSFaRZCzLTD1Gn1wh5wPADhZQ1M4j44LFrHYSG",
  "key22": "4QoEnwKZAnVHDsHnc5cwo25ovGHFxSBE6Wkfyx7svX1JHpAGzSvrNuKRRS4H72B8rEUud4aEhKw9uf84sy7Qeg7S",
  "key23": "dfpaYHfLYz6tQGENfD7ruod3VKWPonTCbcGdARTGUGvQQER9QmajXH25r6cYCNjHjUohgSQdZyZAVvmYxbNHnLa",
  "key24": "5JeK81HrdLKe6Vj6LdetEJZhgaqx6mdZd7UwJRqHzWHjY2PXZcs5BY3RPX6GR4ofE2PifoB6HLWN7BWTewqey2DD",
  "key25": "233Tu5ycBXCNaUshrAuDuyhL4jyKKqQMGv6LwrD5hk9pW9Ziq3vhJuYKnUkaxfgGnB99U8rspjnaHnRFJg4SLgEc",
  "key26": "5zrqAakfMPdS43ZiRkWD3d9KzjKohdaQjgbdBKZjdxmrEdJXZbUcZdj1UAPC2MbPpRNmwrMsNsaA91TVCjRKHdvi"
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
