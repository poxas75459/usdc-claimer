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
    "5QV43QJ39kKmqMivFLBzvxZ8cyuAM6h6HiA726rvUs9ipzifu9eiQ2Noez5WyWsp1rQ4e41gwpwicC5vzUvDAy2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hmz5ZwiD4ngMuzg6bQnbJ87G8HWKYsjogUSj9wLLaoQRLsfXw7L7Y2ZNDZ17offQUKQKJgcmws121sNBZYKhpP2",
  "key1": "TLGRn9u3fWCinsMNectNQ6oWZDhvTmcAPY8GkwsyM8CyKvzgtogxkVzGSfsJ6pshyEsEB1yTi1jKcpD8GLzUVXM",
  "key2": "3cbPciu9o2y2pMHqBfJ6fbBYqSBt1ysCHstdtaKGmJBUC9Lk6NzGkPeiKfKScMDa8YdAyHJxk15uCEDV8EELVuF4",
  "key3": "4vdrgucYMCPEYu36cp41pzVdffs8tEcYvvGW8UNwJm8QX3gYkwThGgBCuzmCdvc6ia8sDT2FjrKGh4tHsUMgKuCq",
  "key4": "4reBBqGcidGbz2FuiPeMoRNhMz5VqkZVt82DHwApmfE1qz1aXH9XgjcUt9QqvKvpph1DrP3YNwUfuzCsz1F8Bsrx",
  "key5": "5a1UXVXmsxanMQBEmDf6ZBDrN9yXAVbMCzbz3ugp2UTKQNKow41GQve3Brq59bhUN7mf2tZJbQYcxRUZNzijEkm1",
  "key6": "2aFTbzDKUNyCd2HJoMLmza3beevb1vDg38RvVdb67uHeR23tLxFZRZNXaD7vSKDZpQQS3DcDHHoQxayAQePpRufw",
  "key7": "4pxwwoReBYzRwjmT9gsdAz6xbW159hVn18HUTLuQa35MRm8soKyEsbbTXpv9xFVsQAuscgWWx2zFJXdCw9WRXqut",
  "key8": "4dgxkSFqdZ4X3P5f8X6SPqawcYG9eEwLTcJTtKmjN9PYo17kpcDCUXLCy3xyx7NyT11c6mS3H8TakiWWhzn8N4af",
  "key9": "67eEv1MTdCFvpcxvPGA8WbQjazSVAirQoYBUbmvNSqL8gSQWsQoCPHriq6iCwVUCU2YW7YS1XXqtyHXxwTzXCLHd",
  "key10": "49SnDk51YTV9LYvMGP1tbAeGWVUHe2kUMKvXEm1vwJwyJ8fetVZ9kf8oGxodhhSqSbPa3tHqMjPgSpS5rmni11ci",
  "key11": "3rR6aeXad8LLvmFySamX9yw9EsR648JZVXmHF2UD49dwGwMSK2hCiNsHZi2DHA6akpXCdHWdM7w7bmYkYDuznf94",
  "key12": "2mvn3RQEJATih4kYnqpBSVUijkANvSZ3FEdMZ4bUw9BNLCBCC5L6F6cH6mLQUhRnmnnXPmMhz3EyoHgkrLVt9sEV",
  "key13": "5tqgEY4g6nLBG6zixTGTX7TXiWKdhKtjH7k6Qz6E4baqRJEPBc1BKBRsY596NYvuiVTiyz2L7ctzoXjQcNhWrwEc",
  "key14": "3TJ4af8wdoCejrev26j6WQbbYGdSzhiBRqYr8GS5CxPCXf6UXE7ztHeeD1F1U2UTEnTtGXzSmX7GnfMJ81KuP4uX",
  "key15": "2EwnKMGAHW3RDxEUQm6wXVbrEk29CmDpDmXbHnSWt9x4Jy1mvWGeXFQB7Ve5i5VeMZLfmR6rPKuS9AhGXbkVrNMr",
  "key16": "3EiYvtw4U12uDqY76VRViywMdXM2qV1UUDesedYUYVwjjkMjKUt9WxKjLcxGD6KeLdW9w99gTtMRRr36mMUmjdbj",
  "key17": "d8mHkGvqUamZz2Vz641dvNGGSb4jkAWNen1DmX8GVx8dn5HfcBjG7hceeanC3oy9P17ZpDFzwANipDgEosqehSG",
  "key18": "2f2v44MtUUo5s1c7hFVwKWpXzVHzX4ZWAYa5ngjNFJqLGYzKUL5sAfG9pJ1BV6Tq9cpfk2osm5ySKZMCQhmvH7fs",
  "key19": "3YHoWMxt9emBVt3XZmobHpzYUsP4gsSixqZFg24xiXqojw3TpLrHTnjiaFLwkg4gJu5KZxTtTCdWmx9sR3cid4ac",
  "key20": "5tVbbyCVY7JzbSzWr9nALewx7qK5suWjXWQnbLSsxqRgVf5gtURypk8BYowS71RzDiJgCVAJc8LaEJ5y3L3c3tvp",
  "key21": "4rSaGq2LjxVH4B8pqZaPBshvdDVM36QM1RgHwwg9tuBVQxAd5fSGDzFL2rkhFfNKTraw3o3fBu7fcQLifD4NETq4",
  "key22": "NshwTSZkmzRV5S43mYxNuKCnNoUcdgFFzV39PZ4GAwtfBauQmuX8Awxe6U8etnjhr5Q6WRXnXJKFHNRnZ1xYwBi",
  "key23": "5G2q5cVTgzSMYKsQ9BUL9jPjsrMDwSmfTxHxC4iUQPJP9DDdLkY1PNSoYyqj6STt11Um4tzyCM9KGDKT8aVSNHWH",
  "key24": "3FZSxz8vubWfhVPVwVEhDWiaJXAY4f9Smqo1nz74y2svAGxQQEHHHbKTk2EdnvDYga8228kC9LqM3MF2khrrDtg5",
  "key25": "2L2JkEy1z3gadzbWMmJboWuUeRuKbeSkvUGPobt8hsvQKomLCiNn1HqyLjdgUumntTfAh82wbGbrNAx9UnFNTEaF",
  "key26": "2eL8WXb9J7kF8TpNYKi8CikF3bRujmJ3i4592L1W1pBiX5wxCGQXA9bKWc9DbtbrX5fScKF8Jc7x6rMYtFcx4DZj",
  "key27": "53eR71pUhuK311xsjCDLwEXEy2nKnqukGzEdud2zER9pziZStMYP97xQ5tQUfDFQRDQvKe1hNYEnfgdDYgnz6qeK",
  "key28": "5Rn8sMZPXtKH6Mh3VWnf8gsSJvoAkAMqEwE5XzfJiqwkX1DxkMyzjy2KBraBDkWcQMLCV94YHXShQYCySQwapZPZ",
  "key29": "aX24XZCb521oZnTxrcfMHjwGGJBPc9DkgLagV7WJvFGYmVghSPjgim9KzZyBxZgeM5JjtBZzb5SB4d68Smxyr4w",
  "key30": "3m6riCzRwHXSFxzDWvS17RCrDtx2Z6uiAujQ32V9piyhGyCMdx7phGMMHmcTEW9jzEcYTXKkqRNsDSMizpxcMmob",
  "key31": "5i7bAYZJz9PHuYSarNee3gUrCcjpsZogjTuXpCVFbEDGog8yYviiWAh7HEKEsXp1cytW7C2pGb21oNkceDavVms6"
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
