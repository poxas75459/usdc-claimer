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
    "cPgk4GvS6fxXHeS3Hi7nyZ3Z8T9yhQFfWNW58jyrXBNHqo7i5VkxKUhUEdexMuTiRw9LtRxaGfeipsWD3CBUzYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C64t2xhA3CmJvYGoHZEPj8VgTW8YLTp59TP7mGrWCdGH8SpCJzebD7BuozSbH75iQPkN6qBcFA2jRRL5TFDaUtg",
  "key1": "5WmpoDrzSGxk9nJbRUFg15Hwj752Rf6Uod4H5axVGnfr4FexajzqZoC8CYeZEQ3onjcVjEy4d1uupFVZtmw9xPja",
  "key2": "3zDQB2Wrha5MWrfxK3iKz1NoShxH1FJU7w8iE2a4qDwLjEGJn6d9XtFbyzgVdhnhQ5JCrCA9j44eJPoFVZV1jeQY",
  "key3": "2ihm127RAnSN6FrRJmCZoxtsW8YHyofspJeCLkGsyT4Qgo8TkL9kMqemzN6V2bmsyNBfD59GG3jXzSP5WF9w8FAP",
  "key4": "4SHTpB37KPcKhtvBxnj6rBySwcwyG4YJD9zV31eBzT3eLdaUjSxcQdEL32H9yXPedknvkrgh9AXAYqb3WmL8WxQE",
  "key5": "4GCWicGBPvSsjNHkDJiDLKrnxfYXqwh1f2o7rib32TNYtMb5PXmbAQnkg7jta9x82DXz3278zMnccGjNn6Hxzdie",
  "key6": "3EMVAEUDGnmsM91Zqyg4RyEyr9xK3fXrT5jAwwt943WMpJvmET5tEesq7LgT6pri9uumaPuY2M3QB4JQz3HNsjR6",
  "key7": "4ZWSE99XnEwUdPP2tNRM8Ssw4kz4HXvgXHn3zhERvN8ndtUS98U3UnX6U1va8q61kitRorZRdWTtYRn9S2SPrjvw",
  "key8": "5PFnHd9BvSey1smsTDyPsipfkuCzDEVSKrXTu3YCFkBFmtWTaiM7Pe3yuc9rsEP69LZiRtJ8xdJtGyU2oCCMmjEs",
  "key9": "5LsezCGEJHQYjCMSvNz2Y1afummh9Z2re4hdCJ1fPMSgj57WY52sxhup4wFFJaPSfbJu4qTbvzLj7NuEN1wBwrbC",
  "key10": "2V1WRQxx6HZiSNhw6tW4niL1v4dEq68Q9r5ZBGvSeV7mNtmPHM9d1yBPJdbmKnUDt6QntnhXvkqmTQWQJLfor8ck",
  "key11": "5cb84KLSFSW21z77xHzrqeFR45RS4s3EF7NLKzMmAAmuA7eDMmHQZ2n6QaEDEzBgYUn6p19XZUW57zbnTJJbFJC4",
  "key12": "DVE16A97NMuZvjPMqod5BPSBBpAd7JBRZbyFLZrppEBYFCb4nfhjhzgSCWCyqfLxmwLC4sydp2v2T1qZSkALtyh",
  "key13": "5ocXNYN3VeKGdTt4aWg1PwyFSXRuxdDxjKrx5oUbMimr4v8KBASnpCrRF6YrR4fmFcHxGinHb6RG5avtqfdoMJYV",
  "key14": "3E47NSW2A7Nudf41fSmpF8tE9Mqohnfe75o4j2hGqEg2YBiPJUqxT31e5S52EquhQtRkVakiQEYaLdNVCdtZwf39",
  "key15": "3iRzPcgBAaA2BVDSesZQ8LxMgsttA7idKw1d4mkBcaqQg6naY1kFHBSbjrPRqenZ2LJ9KBbDfbPD12yZoVofVHfg",
  "key16": "3xwjv8Fn1dJLk6ijXEEHN8reYSW1TLJFt17vUkDHggGTHoanTyViwJvBfR4Pdtjhk6Coht8zTzx7ojefuHzi14Lb",
  "key17": "522bMBwRJmoSvjVqbkbnT7zsWzKoV7ugLJJAP9TQbNBnDUWZuKQ269obKYAbZPJ5C9bgWaSP5S9Z5vEocXprwoyX",
  "key18": "AZ29os2iwSSWDtd7mx2rqDAKnmyutmn4ySND8iyubqj2gxVrCxXrVkAswEnUwHEaiykGgBCGte3w8NzHmwmDiQZ",
  "key19": "4z1xWaBWE3R2tB8AoqzLKPvSPi6TPknX34Xc2v98jhPStFfzv9fzuCFoz3nLDbj731Jf3BDvxFSZMtrcCLFpohBe",
  "key20": "3fCmnFtVoH4atzZKoKX3NnRkv9n9jG7GvLFYgb1BkPJB86XjtqMmht2pUvnWavWszZkyxKuMXjQciz3TfJfcVVZT",
  "key21": "3NajYnAntBcA45ZLwuYBYWKqF2dXywuQfjzyc2tTvRD9KrM9zkTfW9c2cQPUCRveGmzyHbzMdTVnNG3Xe6sCy6bM",
  "key22": "2GxgXufCPh664vGcSYZweTd4bV4UNLYkvY7a7zVbvgS37vVuixvmKg4uqUiHvugmX75EPYVH9ahyPGt6J2oXVBT8",
  "key23": "2zCfWv7t81br8HEgfe8b2Je2VXkxDZeuf3PNRRgb1G6jwFSpb42UHif2XTGH9WutYf6SakBEeH1FgFkvMVwfqkHS",
  "key24": "B9YtKRTVpxdG9UWAftViA4AScKxnNx2bqyw2d83FGwkUoFzDxWkT3jr8h7biwwbXrHeyQLxFjE5MsEFLMUg5WSD",
  "key25": "Xbuz3Zm8dviGJLbjZpBKm8csToysdxK6DYd3oTgAdz8ZYtExjDXbbFDibfs9VkN3WmrMgPBiBLG9mSbSGxVF6Ts",
  "key26": "LirEimrhUnKHuAgeE22twRuPNKNCqoDEkBUbc4LgUbKqHtWwwmQ1cSsqy1xCouhZZmzBMi3rB6qrdEx1GRJsHLU",
  "key27": "3N59Xut6uXSt6iswgajGEHkJzjvkW6Y1WWivWzh14q1mgwEPXLxgS1muTbq1yxXciKPTQWzkxcuQ2FVoq68AwhVt",
  "key28": "2WsMb4eCxyoWxtSf8Q8A2PS3E8WJitr3z9R6fHTU4C8b7Fnma1LXFwCGHJtRJ9rehfMcH6cjr2zcXhAymhjmNWcg",
  "key29": "5M4Lum6mQP3m5bRSqnUS7K3PU6Lb9A7sWGU4FaWqCPpaAAaPC9VYCbzVgWxZ7wUdnxsojskQsYpKqL7vR8crufze",
  "key30": "2J3fGfwSAJGLwpc7f6su3XuLbLZqJQYzi7RGy3xGjfS5Ygk2L9R6vG1qrxpvmPqjNtPhGgPYuBLNaGQRzr8Lt5bX"
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
