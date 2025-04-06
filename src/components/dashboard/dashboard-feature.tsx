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
    "5aGiX7bAa39Jv4anUayJwnufnDdtGRLbXBTqUZj4fDbbKs3Tx8gagMvmuboJeik54MkAceiKrZWdatdGUW8ubLXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YNVHkv7ApNgHHwTqzhkW1yZSrC5VMi1smMGdqYuAJxgd2bfuWPd9edmvvafS3P7tz4uGRB8HKvLErTaR5Cvy79v",
  "key1": "21S3TXtWsoNP2eE4fZbSrGSBZtdebxHqtp9WZpikaLtuDmBufQjKpSdWdnt8jBEvLh84mTVHZ41T6UMJBWCmjzeU",
  "key2": "4tDDVsUnjqcg7rVepodAz9BtqNu2Kn4aoT9eu1AcC8nKGXearRuJ5TsYBXo4xQaL3F5isejF2hXHfZiSQfxhFp9p",
  "key3": "5bUvtFRr5HmYoWEK4GVLu7HjAP2vsxhU6nVg9t3zRAbJaEZX8cqGNoGb5CDhTcuCG9pF6JQYaJGGxGodqUCtzLzs",
  "key4": "3o4vqzWWrwCn8K9umMHLaR3DPiMoAXf3o7vmQZyZoDnbcmEEEsDSzGdbQJbPzHVfcN6mNk4YyHEBLNzP64qe3Ym3",
  "key5": "zMnXHNdEEqJXrrMoVgKS19p9iuJwiTsjge7hEpSjFezN3dtNjNWk8XwkLmAVTkthQswSVxY6BZqssSjVnWiUQC4",
  "key6": "2urjRETuWnuhzwefWN2JzEy4XAVAuckqhatYa1rk493RtXpqGoeLxtyMMSynT8PFs4Gp5dwbrmyndDmvCdxDC94A",
  "key7": "5AwYRX5q22K7YZsg786v1BjnRJGFSZZzfCKCJtyRSnLcwgfPQkXHvEqjgjXCRq9Uk4dnN6cmZcBxm1PLji1Ti6Qv",
  "key8": "2ZJFRMgwi7FHpthcHP7tHsHDcwxU8QeXmNPtuQsiK6ZLf7uCG6NYybRn27cRG5AntjVAx4Et8arAUF2xvQBr13QF",
  "key9": "KWxZfGwqHcq2KgT8YeXm6ZAY8y2Ux9gVRXWQ2zN98JCiUh5uTnqtoxj8HknukiaDz8J9xVfNrEAR4fEK65Jds5R",
  "key10": "2JuKQSBPpLJr3SbCjznUip5ePywBZ7DqQcCDLwTpNE21oFEWMn3QQSJLYeyvToZDyrvSht64Q4xGy6R5Peh6Chgv",
  "key11": "ssQAzeuFdM9kLogsjeazsjgWfEsZem4gPtkyHVzrNfXN5PdAo2uRb3aRBs6wDVvzntv6NU6KLtVaqDgYXZwERT9",
  "key12": "5ctM7Y3GZ5YcF96RA2HhyJ8hEZB2TeS4nFTZScpfxg7WF7hwi8aWUgHJcqWvrSUkCap3NKkzER9pzPRFfZbbWYzq",
  "key13": "2pwek1V13m5nJdisHkmh9EyFg2HeNGFVBjyicnKBZ7TETFLAcqyQm5jT8HoVHV5YSG47fVYuWDzg36oajN3vjgAe",
  "key14": "5ubM5SMqGRjg5hxwhWNhoqxNjvLbScw7u3GJ7KnCPgQ1jUhyuXeZnEhDCP5tvtdCb2uPnkh9foLdj1cyj3inF22K",
  "key15": "4GQecZAMJZiMdwgwK6fo8U8e1E9Nx3L5vkiE1JiCbLR9LGnCfh4tntvH6xU66oBDMPXnnq38D4wEZH7TG49d8yWD",
  "key16": "4rRpCERcaRB69MudPbZfxwY7PGSXdh7kPaiQctySxynniu84GaJMTvDQpKZFAtdanuHuRECWdG5Fb1fX5canH7RH",
  "key17": "8U2KLSW22ur19vyr9AVPV1hp6UhgaZDknfyqaxffsQpqcekqGbhj1MqT9TMM1VzoAHFudnnBfTXQ7YBFH6cU8vr",
  "key18": "2F3AzJQD1vQgbfFj5LhAweuv3bi6eb7AeXMbMm7jD4CerqLPYernqpJuqxHBZUJKZvn4Trr7cUb4zAJXQ9owiX4m",
  "key19": "8ATBb1ApyvMpSrPWkmfkNfoe6vV5fw77KRCwhbbf7xStmwzUAbXTcYfAKhpQoGqgX6Wvgp97uxVMcZfHmfzVsoT",
  "key20": "66951Sm383Xf5htMH2Qi1DwopFjpUAUXNxaSsm2rwdzbKhZbZPPfL5gDW33DE6PEKRnPox3nAvzaEaQa5vNorHfz",
  "key21": "3rJn53aj1hwaCS3mzeabYU7YyoUTKsVqmsVw8tixTYvSv1HeSqPLRQSgPXHSCzDtGqJj3DDCWQTjS2Dwtgc3KN1q",
  "key22": "3AzqDqp5S1Zaw6Lj3RxnCeR6fktcLaaCqVTcs1g17vTMH7HN2QQciAmnV2xtvtQQXHsjmzqzcWMY51qwiWbuzPM9",
  "key23": "5TADF44jjFtQTTJCr3YtxfEFhyhgzHQPh6rrE9hmhHP2xz1BJXX8fLFb4to2B62ixakCXM927ubhkhAwkomPzdHG",
  "key24": "58rXDuMFHRied2tKJHADRftiu8v5j4gxoJVpmuUpQzfLw9ZpLAVr1cLVNV62B3moxWwr1qXF2wf6eZudXyAadGaM",
  "key25": "4AULJwQS67k3q5kdcdJPY9V4a82pYkiae9gcBsFFH66zT16ELFhNewnYVW4TXAFg8LrVvnAMcNBJuXMyTKubcFje",
  "key26": "4AWck5g4BDpSJriRcFdSviDhi4kzxVDtEBqmvuFu7roBbfq22aV8YRdJxxo31SKvgWNEPhaiQyADsEgeDKhKePSo",
  "key27": "2UG2NUaBpMogHBEuUARqT1E7xwLhcXdrbiqjd7LsyJpYtMVtL5k2Ay6K12297eVz2kG3zx4LGt39iXs3zTbdnkDA",
  "key28": "3LNx4MzbGAqGtXt51A13tB2HcvykhNkUjq39i5bHC52SrDhgAoFMBLCpiVQvcGYmSyCEMzWaQDhb1Zso9LsCBAQG",
  "key29": "56pDYaDrPCPteZdgxfbfXMQYmndaRNzhS5foJuCM34vUkN8WDETPACVC15i99NzGMcpUvwyg9ySvB8XhXfgo6b5m",
  "key30": "4hR5cb1nmeCcbgSXsizYZsQ5M28tLthpfYgcU9VvQTSfwpQBQc88qkuUxZETZ9UPq5jRUubTYaKuDLpHUoFy8X6",
  "key31": "3cAjedUfRvNBmQph8Lij9yxf3gaDvTdD99JpnmBdxuPV4Qga2LBxVn8zAAC3aEWisdQAHCsdBYS1SxNo7Qg4CN6f",
  "key32": "49mzYNQGZbnpMEtugMNQYQPLjvCrZT9UZhMJ6C5N1HjWxhemLtXSSYd19ZFuRM8xu43wx64UQQTaxL7RFtZfzjB9"
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
