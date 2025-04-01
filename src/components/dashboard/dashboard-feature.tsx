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
    "3MRoUrKCasovu3TaZP2dry4k4UcenqrNeazhhTqZMKKqbEAbzKhqAay8JZ7V2bKYggCJeYv5WdSsdNyGVVPnk2in"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aThrcaby3cncuCH7s58Sz5SyHHapVLY4MywrVxH52BkQUQJUcfAT6SN4nZnY1UkFfGE4nABjUqeTM43z95Rz6Qb",
  "key1": "5R8r1wS79QkdJ3GUNMSx2tv9KhUk9QMgULvQmUY3k5N9pGfcUUny1oiBVWUqUBWQbEiFuMG8rdim8g3hK4zns28P",
  "key2": "4NvXmCnxyEyk6VdRX5iYJZY9yTGQnPhSJcNkX74t6raQbSryie87C1RrcSnm6WKoFJEfMcGRZYbRhGoRYzcLciSh",
  "key3": "3Gf5PfkEnqAw2iEc8D3rMpd8hh5ARS8SDsvxYJmoec4Yrg3zbfHUhZSuwsHZeym5XwuVWHhKp7g8ncJwD6SKSEBt",
  "key4": "2bVpUJbgHuFSZSTpD5hWU9oJ1GpmCBUqiAXYhKSaaYefdtFvh5X1EGcmwXwfpXwxmJsAeyt8U2ocBJbWYSMvBarv",
  "key5": "3FZRuAQH3hFB74wCURzBGPGYX8nYpoJGctojWknsu8kyicYqxW7dRqkYKo1G1ti2qNsaetmTTwTHYtTAgzqW9V6n",
  "key6": "3RrTKWgiqWHyE5sZYWgJsQBgYPJ7uKogPo2VJ1kxjGabpQRds3UEqve7K2uG8V1Y7iBZuvN7G5f3tB5tA4Gmn84L",
  "key7": "4npjev8ST35dPswvYkFbibtJRVBtaCW9csM3GhqYR4UuSAGucvf37XWe91TUJDZTzXf3rYaSnRDZ3JGfcoFfN2sW",
  "key8": "3vj467xi47a3Tda2zTKgPeyb5FEzarkcaNp5SpramA75js3kYyerqkXdBzdu8U3gRBY2Gw2wgGf7ofkuPze49C8k",
  "key9": "5kVakHZz3tw6cJTGFpSHLWuYenydpLnR69ZyE7DA6KS8ZzxA3dmaRyQ9ai9pEpCAB7mBy7uy1zbF4DVkzn7CUVRj",
  "key10": "2FtkokuDTZp1qAa6p51hAGnHtZrDHJYVd8mbAvvzSPjhfnpwXuhpC3ZsKEu4kcmZbaTtLiLGoiEMCHfpbh4PjUCm",
  "key11": "4KoaUdsuU5NkP2jor1WVqGtqhtNnTeVb5PDnxjgJhbyWs66CWXoJx1kppisqPiAiUpTM7xErshpGobCYEXJ9UVB1",
  "key12": "5ryH2kBmdDqCry9E4ucxKWdmXsPgaoaKtLdyNCZieqcNKLZqiqEZuCFtvMxZKT28C3Vov4LNHcyztG3c5ZUmARif",
  "key13": "38uZURtDez61yeuexuqT52Dcm8XXkEqUrmhQnwNZLdseb4Q5AoWM5w9ZgxAS57FUMVzysZf7KUMq17B7BeuafMrH",
  "key14": "2Tnbht2ucJ7QhWJnQP4LBj3Q1FFtrkUqqjb4Enn3g1fhaFdzNqbcFrVvf4W2tFKjQYmrotK9PjsZ759KBC99TnvB",
  "key15": "3ceiq75NEXdbZ8p5dVikY4kuiQumgmUrDKLqRJA2zFiXsDc1XiZ5YrfqgpHcrKod8yvcwvYe8G2fjpp2tdctFHiU",
  "key16": "2cTMkx4hiCPvrH4DEBgLMbNTa9MsFeyAor8i32432ebdJCPmnyCy8DA3GZkbedp1r8n6z4cajtdTq8DvfdMwxBw9",
  "key17": "3f3ZEqASQgKpqj4gRozC4Qh9aVfdQwPZrsGU7nRzQ6xTJXfjkY2H5wAruUTgZrFsAHQ1vLu5RNyQFWx5mE8av7My",
  "key18": "XyVozu5nXBLaozQgP92SQRw3yCojTuGMnNMS89JyevZyDnycC5kA5BZAURBPViEDuo7DtyJvYD3aZcgppGZPq9k",
  "key19": "uv18sRokmiEtgzWpnjNRbsVymiRCoaL6jXKY7gy4TRcw1Kp85ecwsHXP3MsstKdHtvBH15xiWNrsoCCmtrJXVoR",
  "key20": "2C1ur32R3LpSgv8gBG11WatU4k9W8aJZdamWmE9DkvzRZb5BVE96VGqmwMWycThaWJXsaRkSbkfmxZtrBEFRxuM6",
  "key21": "jSkZBQKthQQPFpJM7TRHhXZFJ2QoKr3xWtuhhBvGmQoRKUvZy53fxzpuR6kPUchHnS3BSsHrK7tR7paEFabTziM",
  "key22": "59ZMAVxnp3MsQQQvsSepyHATH54ocPyZ2ZrjvL8h4MSZcfzRTRcoQUFiusb7L1JimHsYvs3faRdBVg2xxJ6XNsKA",
  "key23": "4fiFCoSmddzmm8XCcHHmjoWcGz2nMoDccAcNZwyLLB6BeAHb65XJfWHukxkoeqD1gkMLk5Er4cWe2rwmZANgfLMJ",
  "key24": "67E9D27StQfGs1UZ1C2p3qMs7XYvWmbYwoCLkp2kwLVzrKPMHcHHsDvbGmEqjr22Qa3EikAi2x3yxX9u3u819QGr",
  "key25": "sXQ4DD9FTD8pNXhAUPJXMgZTDzWP5SxJeea2vWKWzjHspVapsPuf8eJKQyXTArjvTcraoYakzie68Rtd8WZR799",
  "key26": "3Q8uAHRKUxLxMasT84xkvigQeMPc4PcNCjc88xGJwiJZStWS8mp5aBwXBu2HizgWfSz4voZEcsG6DjzUD71kDtZe",
  "key27": "5UCwgDaB67Mjkqf3hJ9Zwmv5Fy95EWybhZDeVed9CSHuz2WUVTN2HMSJ4JBXZcvfNkNuEf8gDL89rraMqhjSTu2n",
  "key28": "4UYmp9ykMC2jWAc7F4TaLH5LtSw7gcpnX6GZYxHCFKFzae8ttoSAcJQ8tPHQPPM71CuyiJ2kk7goeMJMZQhZxFPh",
  "key29": "4UYkhzPerQyBrGbbit2CicKbm99mjQaVZi8XtJnLRb9m6assp2gQk253HTq6zgb8LoJNWubMnEKAYwiCgSFy535P",
  "key30": "MyqFmHunmNUVa2qWEn8MgEDyQeCauRVucgRizjauUkwn3FD98csyM1jqXZVQrvMpFwVj6CfQdADvtMJUBqN5BuV",
  "key31": "329aq2BEKg3VPSEf7hkX6b49FqG3mB5gX4E7Ej2UtKV6sexm47WZnFhM1P4DqpvfRHCvTcTV4f969WL3WJQsdDgz",
  "key32": "ejU6vdghepV8b7bzh7RUK9R95VVj6BZZPbyR8votzXzeFPQimKWVWgmuS79rKMnTsLdDUnFuQM8jeA1bJhyHq5S",
  "key33": "62Wpb1CRr7zjZVjqCUf5nmkQpcxNHwqkNxCn76yz2XSbzVNU1tKjP37ajjB1irpNSt2zHBcUiai5fr17HWvUHmCH",
  "key34": "22ePw971R8RiAgoVz7XnPaN9zA9d8YUHLaULTQp99sWWsSU1Rjwnny1U2Kxkm9ffFcp7LymJUy3Nk9wfZtfPn3LP",
  "key35": "61BnLDrvoqRAbHmjF1GXti6RRJ1U58JKNXMYUcXTsjeQYtjRtwTA3fWQV9sLuVhGdyidRQrC89mYSjSJUydjLVy4",
  "key36": "5uBPC5vE8inVKDHNmxgakE5ym3KGpY3qQo3dpNbD76bb1j8GgeFmxQGhN5kiMbk79rpqUxj2BZVKkW6enPhW81uv",
  "key37": "43NYqffUseBWViQJYT9oCuKF8CH2TJtz5cx5p5SRncarNCNpAh7uZ9i3wUX3rmuDEFJZFX1EvLYcRVWjUzNwNizq",
  "key38": "3Lo4bzWSQtdz4JdAJbAG6REfebqkaPkQgQ3iVjr2wWvcCW4g7ekCNSvYVe41LkxBQNSbnbF8DaHo2DgzFsosDbM3",
  "key39": "3UYtjzgsSJa4nkFyvCXr7KmjwWfVoicPAzWrMuM3cgs34x8bdYudfQZz7BSzKJcNFJfz4djSwQjqzGPYb5rpTiV9",
  "key40": "2pWSPsTgAGy1CL5uj59fnZzhsqFXfBcswAkoPBMrbMGZt3F8kembUwiU9EG2m7svNLr1FdXKKMxR9JLwzxh21zR8",
  "key41": "DXgYD9dUSq9BxjGiqZSzcuaQyHxqpfvxg3s2jWiaNzSmrkgGsswQHYQ8uxpfFWRuAPicR2M7DW1NhUQ443QDPXK",
  "key42": "5R8ErCJnYqqeAXSEeaeyFYL64j2oeCns6cnTYzBVVMBhqHJwTzhffzrPyeAuz9sLuu6mEYyAxuPkqTUzjfNb2x4p",
  "key43": "2tjXFTRcuLGo7m7ZWhQCgdmyCpdxi1VLsmBJU6L6QQNKieEAd5T9uvjjAaMsGkp4YXsHRgWyg7k5LwaeS6U8XYBh",
  "key44": "2zB2xUP2AsFYgG7XhyQzpdojAf2r1kA6iHpBu2R83QFDRTpFwyKMwAbQ1p76eLZue7DC3f8W2KMSBxqFN4YkfWFV"
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
