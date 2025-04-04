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
    "4gS7KFtEY3JSxDPxq9YiKUocGeHpSs6iJaMZk6UCKCxmRJrGYiKikFQye4oem8H6q5UoXNtnfMUeikU64rVxWrys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GQavHckxX8UirBPfziwLyRwL7Zu7VLeaJpsFBrJGwmsENSQRTw4kQJPd6Zkx4mDV2jYhqMFWoDKQ1XG2FGqC3aa",
  "key1": "5MeCbVCavZrVYdbjR8yTYFNYRsCB3VAesMGVq4vX4jmmxgC5D9gLStCP3116V3nQdCDWyU74yonrdsEcBpogscm7",
  "key2": "5AfNhRMbaYNZSbbAWCr9mUpC6ZuBiuA2AhyxMnRcVdUwNtkh14fVWzcttGzjTX6jeBowHpkDcrKTCfcoGDc3ooYQ",
  "key3": "5qXVb8wuUmA5zhvwBMZa6oqGGqMVzK4tQYMJ6ZtinmtrnJsULSq9QdmvDncppWDC8RKE6p66GNS4Br9AhEUDrzde",
  "key4": "61iCCgTqV81HjFJKLq8H2apk4UJhiwsF1VvfC7PCVhcvZ8hMVKsoXUdTFjXfV9gG2ZKbeep11KYnnFTdugnpgW58",
  "key5": "5RdEfvRowyswhv9nAyCVmwortAd3etfJxq9Lf9z26amur2cCYk38Aomwzyd8PipM2G7RhNvTcf8A5bVgR9BqBthc",
  "key6": "2Az7tvrfjHpCpqVyDcmXhLDjgqLJwWr58UABekHjnqYHPnv2WVDRnrqgWPDoTitCjvNCCPj3v3WopGzkvzS2R4G6",
  "key7": "4yUru21rEXLZc8u64pGXpurg7bxc9aTLKxfGa2FqtaiTQhgeUCSdPFZJD7uJBkKgvet3iiy4EGFDvta9U6xGJErP",
  "key8": "2oQVrnhs7BqKDLEHYoLumnWRBj64NWLtrsR4eZ9CKv6RQct7fJPziWeLGPRSHQdSUmrm96b3dGhwCQJErPRkvnEw",
  "key9": "3r33TSkcpZpLdMinSqL9kfGMAH1wZ4qVkUHVEPLHS3Wk8JEDV69KvtZqXcvyyiQSSxV83LgM99g92DiqqXUKdDhQ",
  "key10": "4YqC3JpCgpmew2z49P8EXfBkiUS5muXgqBn9qpDuM7tg75aBZ36Zuyer3ovUuFVBwYKN7zM2ZYC3peoBWhUrXk3z",
  "key11": "3srr7Njf31MHJsoEQ5R7cTyRyZd5c8nVqCDzQXR8JfNagFArRaJCMCReu73RVVxLozt8es4C7b1Pwpmc1ZkBHcQP",
  "key12": "2MddNiQPbADSFihmGwfQrwd1jdAucnCYJPzrX8ecnYTNvchzzCBf6oWicY74qNdzsRRuG9zsdArDSg7o5bQW2EeU",
  "key13": "5heaw7NiBHLEXk3sXxW5itLwErcYvSmjRnxLE1Uozh6yY1i16FiMpUYFJW6vGwfe6bZG677UGMM7nvzFsHWXrjRd",
  "key14": "3EuWARzv5cUVSYzxj8qP3XFsCT9yPXixFyeMRoz3hgcqvw2i7CKRKoDX2kGEjT7V321Z4x6X9KMqWrm1WCMEV8SP",
  "key15": "2hWSn59i1mj8KKszgi4d8cGdy8MzGZAh4TKy7wzYfQGmedB4DzaPZMpYLk8GMmFQzsJ9EwJnCFfCPFgnY7N49sE8",
  "key16": "5oWXkW6nKhS8bSRfPf351QwWSTcgeiDcJNun8chcUzFMY8f9qZqZ5C8jN3wnR5QMzSrkd7giwjjQfR4XrmbunSH1",
  "key17": "34XSC58ndFisFQ4GiTTW8qHkQ47y6s4eU1g5t2Gyn1ygMt5iiA82E8T8yu4tT8yMX1pCxmVbVFrhLrzkcG9WNT1T",
  "key18": "5zncFLs43J5XETzJSFWRGDMMyfCdYjR2f29XJvG9t8VYcdJEE1BSv9mzc7Y5zrBwD7XazsM8u3sqyxFaxLeUqYeL",
  "key19": "3ZP8njrxdD98fckUukMsFEcoemf78UWb5EpQ8ZxLYyhkYbMpcbvsznG3TB9RyphQM6B8ZQ1BnX4hTGgx9BDqVhdi",
  "key20": "2ekMCiWbM3JMVR5CFoFmFQzEhW3rBPetL1rBfQUP7CaRu9KmEo1JmoKwfzs9c82cEu7djCwQm6P6rn3J1cAn1BR3",
  "key21": "2qYq5KukFhNmSoJgAoNtd9PiwzYNk585VqyZykTWV391yBzjKAm42MkQ5HooRqZZK3oAsqrzNfmbGbvQ6rryNxGd",
  "key22": "2heyRPgcHksmzBmAMeW4KjYMHDtc8HGpnUGv6mQocTNY8haXMW4npfUpzmAK5NrwX69EjTTaPuVUNoenPWg4f8Hc",
  "key23": "5bdN4prEBK6dMhPTd3PQ4unmKDZMLoMATwNhoRr6aa7os7m67frLM8theb2nJiGpkipLXDvXsmSWYSyXHP1djB6w",
  "key24": "jVdogssDkFRoA1NgY9siJJAGDAQ2gVgGJ7DqkqdebeBhu65SVhAXxS2Mmvv1AZNYpaQmkzofRehDytPfTQV9WBs",
  "key25": "5WAbBi23X5h4Tgy9657NU1thhNtTWz4MFrXTkbBV7oyKCh6ZX8SxCxBZgGGMZfXMmTVs4GhF4e3mqpntovCot3oe",
  "key26": "3y91s5LDCq1RuEz36DfKJY7hzx7qWGNxRVgFxwFnHXuhbMTP5YrcWWWY5WLLMWw1CPCjEkEs5bhYMb6MXdwXCq2x",
  "key27": "2y7p3ayPiPjtP9ZXpDCnLYArT4CLrKi6CRKcUBo8N57BLUzqjRLqeJnvZ62GS7zzjMg8KB1T9so1G6A2aYinJcek",
  "key28": "3dQFowAaXAxwim8mVDePLRhFbyHyqoigZsjHU5pggqrqEsFN3kVR4EWP6FAp8gmFpGZQ7MZHtvWm9FUotQiVUFst",
  "key29": "3NmJ2s8k8BYZcspU7YjcNTCUgE9ehNsujTGjMuyQRQa8WuKnDMfjAdCdzrBWPRNtBQQodjmfG6tnTLSYwMEkz7aj",
  "key30": "5u5FQxd9sqLb7jGAYaHyVpPykAEhW1Rb4GqrU7mPuanG7MfZBTU3cCqKjmvmKkdj25YgQMVJWUYPLp8K8wJNnGZ5",
  "key31": "3MbN3TXte19LnJbtQH3xWAP4kGZJ3J3HA1kS5nWmFEYr357ors4WTUTPmyyS6A9CiNzZNMpdtcUL87Kyxz1HaykQ",
  "key32": "3Uffxh2P9ZnNzqndHGiNVZcEyrstpQz4bhWK85UJzJcfkoAemrei6DmtPhR5fHFRPXkEfRjBctMtAFY4kPNLJN9L",
  "key33": "2rqHKHCyaZ6eaVyP9ZiT9qoT9szKVcguiRQ8X6p3FvqThDnuz3oXZXHN9JDvz6KrPPe4PpztaXWi6Jr36RWLgMnp",
  "key34": "4bZnQhj2gjsZGet32Zqdsox7GxCqcJKgiHf1cV62Lkdavh1awjhZ4pxDKQDmPvEEmh9fmntiXWmXEBnqJ9u4txrV",
  "key35": "67TVBEZu9FojbtDVgnDUvohMMRq27RsuLArjVEr6CZigCHWNYHhKtPeVpktQ7UkbD3ggg55TGRkyUxi3tq6MtZEJ",
  "key36": "5SXqrd8fKdrkAL3WK4C2kqXTBZYpGY2iDCybCeVA4qBdY5RETH6wZyeCV5pcrdry6TGQxMcmePB2sRR13qrsyzA6",
  "key37": "2ym5WAxibv7uv1PApfZ36X8mWhKUhPdiMdh3ijotCfr6KxCiAWqwKajTkdnovnFRtDnpoMDRBFd9PoG5VuFc6Esu",
  "key38": "3AVe7AuqCqjev2VQCMxHQVvwioKEt4fw17bq4LShHqcvHL9k9eajbfji489HLXNxKNvdxaZpLsQYfuBDRghY672X",
  "key39": "5XHHjss7TjGKxkx7ixo9CUoEWL9Y65YAts9Bm5bWtTX35m5PjR8hfi7NxkGq3VVkTcYxHT8pNzQz6RXiv7XWhVaJ",
  "key40": "fT3zLUWpz4zkMyG7VHuR8tT8iQZLhyVNxt2LFMQ8tqdKaSMLrYEgfd29iBx8L3Wy8Cnng5HPxvgZPtqcfxWEcUk",
  "key41": "5cyXcpRuKDhnpF1H3HKFaarGfS1uTHz43J7dsmiz4pwm78wXhNC2sTz5NZKNEYth21jRgmShpriR3AcCEZcqJwe2",
  "key42": "4P4tV2EVuCyDTkzkEcYiHoAa8Mo5i3u5NPLd4b3YGafWVgtNyne6Kt1ckSibseS2WaVSSaZMm5TLA67dac4AxfXp"
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
