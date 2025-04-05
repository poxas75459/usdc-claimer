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
    "3VZYnGw6HQwnDcNtb5orTx1EnJ8J9tywtbHMCSv3WaFU8PN1XNxqJmegUorKeKyGSMGvQdCLG7Yojp6Ru9tXFCYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ioGaXhJcTmqsjpZ6SmsqvgNAEcpppEMv7DFdWMEaePUZuYPH4Gtah4kQ5n3ZRo554JNDTboZFbxygVVfUo8F2CW",
  "key1": "5uh1t2ToJoUAS9AzexP9Wp5hYSE2XXwA8cMuMgvyyBksvNVZBghUiKyeMytTsAhKdznjpoWR46BSL3XCj8MMv1f4",
  "key2": "5yJBjPZy51NBF1HshM14FUB82A6r26fSAX4qF1tiBSm2T3qpNWJ367tqriFSVXhvgsEoqWnEQW8S4GfgNT2WkHmj",
  "key3": "4GBuEeeqbn8KkY5VPG7wTPkHWKXSVgkHgCU9QGnrmsugkYQJkdAEDv6BVVZea2PKMeE34rVZBFUny2BQaCr8DnVV",
  "key4": "3a21jVUTpz5dqHuRhfPbYoAVJJBC1LY2HJpRpu8b2HsNyeuyjpd8TMvAbmvo2o5BDjJ28KPeiZuBBHoJpoZ7547J",
  "key5": "4fFZLP9H8WZ3z1xLL822hZBtN3L96b9HjTMUnpUDE3tiFxFokSwWVLofBytmrhBdyMX6ivqBvZb8cbqTQFNE1PzK",
  "key6": "3MkASeq2cFMduKSXDuwFRaLzFqd1vMr9GKhFdNc9uV874WBc8nPkXEAxiVdYHYjHGXbTseFkbKewfFT2ymRw3k8z",
  "key7": "55BtNNamVwKE5WqAoRvxzY8NWLWZHhkSiUuRYw4ENoLXcCJvdDwtWEYcQsnVxzcDpPYx7Wzjct7YsR1cVfuqTUgE",
  "key8": "5SaaEsA9JrDo7dAvbN2ioYHmgtp3ZYm2w1ffRFH8hzMDJZSfKDS23L7HBsS45WdcCUQg4Gr5VVuf9zDVnKkDAyKi",
  "key9": "3ncibaSFkVhjXyvDvX8N1ys7cFpP3m8HYQZFUzsFA1r6hmfv6VMSH7YEpuFJ4YbDbMKaU3NPN5bbVC7kqPytLSXf",
  "key10": "2VRpszqEdKbzX2rif72BQ1W9jLDBXiYW19dmWC7Jafqd56r2BF8RzaVFN6EfyC8LteQx7uNuYv9LM7LKjLEBSiSp",
  "key11": "3FiPXqG8mp2vzLazVtPXWbVjyPY5iMc2p42yoZjHHwLK9Y2PQ29grdvUZDophYqWDbbRwuTFezFr6sH437YNxoRk",
  "key12": "36iKTmpr4EfbHsPgLFGPjm4h4HzCFagFCwksMgTahE9Yyw4qR3c7VuorSFXQoMN2q5tLidgk7FLc84A6SUL7mRK1",
  "key13": "5y59TLMTEptDQrouunKqgNVwJuPBurj8kLuVZbkUBhrgcxtp2CJJVhcQrk4B12AMztPyRW4g3vJFKCeauiAroknX",
  "key14": "5nM63v8AH3bjieBMhYNp7DLhJSrYAzWzxy6obGyjbWZzVWCmkvHkWb4Zx7eVx18f46ofkzuTvzMbWz6yTA7W8iJE",
  "key15": "35wzorJfU78Bf8kkDrjMJWT42A58vqKrUsKQtuHJvc1FmN1fyCmQiwpq8DbuKMv3Ba1Ak3Gedq3wRESMQyjHXCTt",
  "key16": "5iEE7NrNkwhKUyEmq6pdMheRhSZ68ERDUEHW8efvkZR9pcFkPcwmWUVN3hHy1EQVWAvtyGJyQt8p2MrYSbWKiR5b",
  "key17": "59c2ZzWjL5Ugh9yFc11VrfcKvGKs7CdRu6veUQpRZ9RmT2c9tpqy8Hh893TkNcmyoALP6tPdFdKeM18NTBtK5UyT",
  "key18": "2ChXbq5JFkLrtuX1zybqtXzMp9UpaEJJ4QkJb1rhzLs84hTcb5s2MyZvsPkpvudLudQg5Pv4f2mBRSuekDqzSwU1",
  "key19": "ASjYyQHmn4HdsmAFWkSeLGkfTnXaFXPEkfqzM3AtV5u5bB2JqBM8to7t8JBepC9HWfaqdWLnpuLUGz5gVcgwaKF",
  "key20": "31xyjmYdHmc929ggFCaEuMjExNWL6D4yrzrJbbMUu3kncnJn4HJT9Xn6TLJfBTKszGjxe37T5ibuiEDkWVqa6PXp",
  "key21": "247Nxe1vRShGkPKErk7JoDNFtAcs4nnrjLxoaE57oP7ASRX3GvoCvxF9CgsL3AD5UNB1bprawcLtdsRqXwJG7Qsq",
  "key22": "2QjVAd4B7DS66WVbsLEkJM1a5SbVcetQTbFTgXZcXw17yYwp7yW1S31Ht2Ao95CVxj7EKajY8dSkUpDxEcrjuntA",
  "key23": "2FSzbEzxZqXKdfGbM2KkoaBbFotNu6UUm1YfXWssVQYbSX4Z8Jwvg3HiQoYmKnmuvtq3P2yJj18XuFeMdy35G4CC",
  "key24": "2jo5ACgUDoa4MV5Aa9eDkLiFr7vTzy3wJaeueiXuavWeAPmDJqkKZRXg9VLbsZ7WE3AoVsLpfKkCA8KqKksStKyR",
  "key25": "4EMyeJs4RfonLP8x7P1UZfV4mJahGT6aZFbwMpZFCzMWvcFMwwGE9aaB82bY8qYFtVMXZ3o2vLvJUx12CVC7voo5",
  "key26": "W32HWMWwN4z6jYo1trZ8UuxTqPtxAtvwMgs6MYweNVRNWyps46Vi6uvJ94ChHhwEZ7rc4Dt45FjMQ4u4uHLs7ei",
  "key27": "2VVr7i7fNxX7FKa7gtBuSU3B3dU8kbSoR96StDynHxEeinvoZgmhRHh7fgWgfVM5rWdCuj1TATdMcLDdKoEioNLG",
  "key28": "3N6BEohoMyqbYssMaUyF58ozMrNAJa1rDvrcx6CsbtXEYwaQ7EpH8E57QdQiap8QrJbXZQs3xGVDKRqE4E9B88CT",
  "key29": "3bN1ePw7vViEjNjf1SusHv1snbRMETfpDEu7UueuZgSH8oaDGNh4EB2M5x1hLP8vemPfUKpv6MHyTg58hJj3eVt4",
  "key30": "3LTvTKqYxKFZurNdox9u3sqo5LvGBqr5p4xzuK3ie5hU2eMCeETSKCtgxvPPNGQdTBqPnGto7T9XzBbVdDFcz9GJ",
  "key31": "43LffJj4xEKV2NJe54z74uJeMHpuF4CRWnYiomsT1Ya6CB16xDAnPELb68bVfdxHW82t6mwrUVn4ugm3q4qNpjHj"
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
