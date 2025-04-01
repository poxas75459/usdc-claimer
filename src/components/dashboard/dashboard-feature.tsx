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
    "fBbCnAer1ZGgM5tdfKC7fuRZYN5gBieCr3EGb9R8vLbE8xzvu4Jytk83HRi9Y7dHqvXrc1Cf4gUC19XAiivekX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hJENV61DF1mDQNXY11F15kb9YBiPxgZzSGvqimR2ijJ7v3g3AYZJDveUcvdXn2mYFfyTXdPp1BirL3h2jciDZdQ",
  "key1": "3t2MeCgFq8mCV83cd1yVKU7UjFR3bsPce24LVB7iSebsDaKbUVjLAkAYCaoGcJsEGeMPBSicEDsqyQ7r6WJQGL2P",
  "key2": "42CB2EgYWackRLdDx9qZ1qGo7a4p9iEs4W9qGgzbthj539AEx5CcCPGDsuigukgZX7SLVj32T17At2wYqkv7hVxD",
  "key3": "5T8fTeNzJYt1gGiafoNckfCCWv9W1fJ2Us96esREum9LQ2GmkFXvKoeMpn32nswPhj1os7akQYuNMrqQ4nfLYKQW",
  "key4": "2cvuXNkbC7i2WqYKmv8S6sG9TLyxcSGTStREYtAYJmg6hA2ejiYMT6Dx4EbPaGnekBUgDLWXVDqoTTtaR85Qnm34",
  "key5": "41LnGVnUdtThBMTQQ441osKpXfFZ7JKbzFoAGomk3oTHioRoHVR3JJitobEwupicLLWRjibaF71MLuDmkcrAK4S5",
  "key6": "2uhRjh9WPm2tMpXQn86mTQCmPNKmz6MX25eKBbtr4hAESsa27qkTxXRpmisYwLPFBydTXAwSjCqNxtmScVnayUHH",
  "key7": "2XpLnLKeLL1E4VXDcXnqLD2xXjcEScmXqPRhRvTKtottxHhfMkhs1bTLNwGYLhGGAN5qsXmcKA2sxC6YgTStBSHb",
  "key8": "2Fydc1SUML3J9s8DymKezicce5ZnyL2TCtbKqRE538r5syNzZKFpEm4fDSPzQa6B8Xw5empctQUTRqKcUcUZs1JE",
  "key9": "2MqTpQBjMYhWa8Ufgohr1D4kDeJiYn5HnhYju7yscNmB8E13GqorLcmBBEmB6ytCJKYWMQBPwxdsVkZR6u2BeTG7",
  "key10": "5c8bdV67dWUA2aAXMGAJikPZ43r71jxaeCK7XwdDY9Zsh43SBQrsrHj9qY5k2ujsqgQjxxHBM9zvjbkdr7coykuC",
  "key11": "2hpxLUFhHikUUZ6YVM6bQ6sDAxtE6ae6LxMq1e4ecRLdXh5tWRAEraAW6NVNSiqs4AiAXMxPhdQiqjd1XgcZiCFh",
  "key12": "424kpsCNq6nN1hRRVCQSh19d6idfbEkoRXZM3q4cMxLF1YMHH9Xm8VJuqFVCPtpZxtqAZcWeEjbVzyJcbzK3r9ou",
  "key13": "54bRa7ZQWcKWxoedgE1HqEq4nwjQ1pn7ho2h6KhTxJZMPPPro2exKhdekhUEBqPyUB8gYxpqP3JLV52jU2WeFJsR",
  "key14": "A8ZbdDzBwu2YoDnSKEAs36pC5vVUSh9nZ1akWdaL2pJvtkanLqD4TPHmYKcucqsnWuezUqd1qtZCPciTD4qJsET",
  "key15": "5hsV2BoYaQqSUKov6KpipC9ekjcjvBYPX3iGpNb4ZMSXDvNR1jFZm93zJDnbgiEAfWVnHxHq4qMey8M1hW5DuSCi",
  "key16": "4fhVRD6mZWV951ohvW8odQc8zZS5ZgiWUPh2eASJSxiRvqBxspCMWwABPa3xtjmxN9rbT4NB59oeZF1uh2mHAB7A",
  "key17": "3TcCzwsrKgyZ3BZtzFBC88ipVt6UwbV9ECbHcWqPhsKwmC5JbrBhXXqN8KY1uptJ77ENRJBf9yCwZ4Aj2wdzkHY4",
  "key18": "42oWyfumMjLjzsmfaRg8JftAAHnaMUgxCR1CyanEj2bRk9ELRirATT294A9ta7QrCAWaJZh1bnqEngq9oynGJLL8",
  "key19": "z5DyAt65DEnSRJLVS92FJn6Ba2TsRdkB1eRJWxnVrMUHPeDx7mHcYZA7Lx3heUf6eszGnH51UAuBSLMWDiRLbju",
  "key20": "5WDBwh9X3KcjzKssnKpxB3xZmum6CiZSYDbZWpy9nogN9fvNSDPtMN2MG3DKy2sFqDjj4mKCUvzeBMfmjWhasjXx",
  "key21": "5qGRVvWxGmFWZbNG3Apnijn8WPMSzknQUFawdbEqCaHZz3PtCDfuVUvdYb4yPG783t8LWEbbGyB98o1R9z5VPKCP",
  "key22": "4wXK2ubfstFrnXEAnYbdbmJhYFKF8XHcF4iRDHYa1NkaU4MYRT9m5cjYx2erJAKqRoLn7SUSidbXeRCGRm76GdSi",
  "key23": "52FZ4yGJHRE1sEzqguvHND3rW5uTXL9yPbr8P747WS9yDfxEa1vLnLrGfrAb8EAg3GbasfztjHQrUEMHRJDde87E",
  "key24": "4Y1rBcPHPpSqgEyTjGr17WB2JgyTj3D93dbevqmzB89GRXtwRXg4QDCiGqvWRNHCTc2FDAs79V4uFn89CaBj52ay",
  "key25": "L3btuUCKMkbPKD5AZAgm61LN4zy3ov2U3TbjFQr54u4Fft6s3qeoiKhjSRVeXNi3yx2GEWvZoqqVrzS8ZQEX4qj",
  "key26": "4EFCEMvr1F2Zd9EceVMaBBvthqHU77sGcn9jjSeGnL6wjif4RktHK4L5GRpNTnWbNn3zCymWLYfytwK9bemfDH4q",
  "key27": "5a6bSGDmrK4W7xjoTPeXkyCXunp42CH48N5m7zwFQSwgcsV4gszaHT9R7Fc6bYyXQCGcJg43fDjKwL9Lzv5T12N1"
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
