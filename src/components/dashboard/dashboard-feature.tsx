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
    "LpWzYiPT5ozGfz3juQBLQZRzfbayjsWiJYVSUmW2Hc31sJykfxKd8KsTTZ71weEg6PH5PiGZJAenPpN3Fuzrbz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rADYbzuLtTQXJaTjLjCB7HtZqj6eG6csVmAz8gSgPZY442Tfzj7KxCmS9Q2AhCqhMGejocH1nSyVdPPj3xY95nY",
  "key1": "yn86qZwF6xEwjvSvzwdcM9LoeWQT9Kr81ZqsJxiT2B61BTvhdTaVy4FMZaQXfUT7qiascbcK2xTH8hFHdjZvdbP",
  "key2": "5SHJFhQ3w8EgixZdQkogWPbuFa1yuyfLa9fD7m22fgojwj492TDnkVgkx1k12a71RbHANG5RjRYakNdtXVr7eEGg",
  "key3": "5dV9tg34CbWaMESRV5dnLgWKfC5p4F2Ld64CNDAginLuqCh1skkhujWEMmVzeF5hJqVtkQ4Hnx61cmiEinm2RhQm",
  "key4": "EUGQaHZ9KwQPmX138rbw7ucv8WjTsP17vHWTNjwV4s1i6FUS8fugf4jaKpQbfrbq5yE5WdtvAvEe7tFCY2wvSgA",
  "key5": "4Lxhiw1niv9gHCujaqzkrzw4DxzhgYQm1qL7wGt9p94ju1Cif6NShTPHRfBriB7PBTThyKMNTMjjC4J6pGgKkZvy",
  "key6": "EGbCDxmfTTDCcvp7uYnJtfyyasyt2YfmF7bgUgejGgSqFS1L2tiAKTRFkHKwDaRUW5YcboXTNsbDM4VCzW7LVs5",
  "key7": "5L3hqjjhwhAhtVrTW6es45QHoCBBdcV3FgCaVEKmAy8zYPx6aXH3yfXBBRcPF7ujahSwc2Bw4CZdrCm82NP8VGhJ",
  "key8": "28AsdXzR5DSSCCPZdKfjEBR6KnxLYqymrECrLqzfdWbNhnVckiqmZTSHeEDVnPDr219qKkhZbTevQx4URa2f26oe",
  "key9": "M15vME31xtdeGJYumM3r1r6zz1RG49MfBFAUTQ4Qb9W4mgiSY9X6qA1ay8y21gGqXo333rnpscq6CnxNR5nzKaD",
  "key10": "2qfLeyFMQCG26chf8jHKQazFyqDi1CTPhvK314bFi19sSzr6q8rzsNrE6QiHkfikuXt3SEi7H29jhMHVn1XrXM5Q",
  "key11": "26P8bZfcCVw8erV1apGNBxnNDyF9FpJj5J5Zisane6s3RTbrEXocHEoM3bWdAdyXR8joav48KuXbhfP7rqBx5Pr5",
  "key12": "3L9sFzmEzD86wira3s4oXgKm32xeXQXm9CJMa13A6sXosjirPXM1ZvkfsHYQrALqsmTrqTyTTmt6Dcz9seyuXMVS",
  "key13": "2i7bdGM7AVQwBrD8mWHD8UmjeVoQmvfMwLFNFJzv1dXymnQjkAK3KhjTTJqmu8LbtSa5tcpKnC18XNnh2GtEh1Ph",
  "key14": "47j8knRHFpy6T8wpK3LgRpsfqUR2n9GD6yvCPTNXkNKmHyr3zM2i1jxxMXFUugCdftZLVbvyZthwxdPtLsEWcdhW",
  "key15": "br75jQSicAWu1qw4FVLtzzt3LdEBrA2yFS2Sk6bRRshZMMxWHpc4VaTYQBrwdC4swxqgDvR1TiLjNgTqPKXWzT6",
  "key16": "2M9LL8viEQdgipYNwXcFWxv4hM3bWm4yZd72YoRCZrKsgFoXtPxHLzRpqyBU8AZ5MnBrF1dVbvuQyTer256qjj3x",
  "key17": "4RfrphN8cUBozSAcNEYQiugPzjtcAK7zQe6popQBioA7tk1JE52gMrAZzxG2EWQUQyEVMPV2K2ggpMsAUKiMXDbA",
  "key18": "2jHKppKMcgscShhDvQPaoGP5WaZUDAXM4fQLPJFaNUScMqvFqjrMSU5piiLYhAX4AVuaLMPCBpYTm56WNVcYfrxZ",
  "key19": "48MQknepWdRB1RWPLzdmyTFdFt6ivf54g4m3AwMih1jGTxdcBu6y5tjc7iYC7SRLFKzJzSxqdom4rXBjcRcLawUV",
  "key20": "w3nU7QgNtvwyuSr1nnffanTcoEAW8abtpT1MoSoM8jzGah6iJFJU3wQ2GFMmPJLfakLfaARQRYUnGKNkgmQpYm2",
  "key21": "358aWxvXFPQTHxpEKKX38eZUQsX7EQNfDH8qKXW5DhYT2iHx54zJoH5kcni4aKk8PEMDiqWYc5jcu2chg34qzX1m",
  "key22": "2oqSxnMSmJnF2cw3RmvRHgcgSESuCuESPAWtF7K64vymYdJmUXEHkTydsjzbdSzeNhxcE39hggNEnK42PZdy1gcd",
  "key23": "4d3XLU7iqJ66kka8zocrpcWvCxwQoqfcNqxX5Wh4uuMQFHSy6BFDsGHPR64UBNGma9usrYAqJNsvvXWEopu8veH1",
  "key24": "BUkBWM5TuNSEStdxUtEAE4isWmfbKbYeyZhyC991LgzTDNWcA1NmvPaP37XJzSEEFjCFHUbFQwbshvo53cUcET2",
  "key25": "2g4JYPPMvXUfPSKun7Tbk88Dy6A1YHNKpLcUs26oKf5FJpP28XTLUVxsLZdA3ZhUhbBX41zACcAqEpRYfMT8udX2",
  "key26": "2r2CpRyS2PRACPefQNcLRFSv3A6q4tTihkKRgNsRzuefb9bnibQ1MREHzP2x1MBfBynXLPYGbNG4cRf7REopRbzG",
  "key27": "2At4itxQtWkmny2qrMs7jYEqvMpEPnEVrUd13uFiXyj9uY8aAx7LRL4LmZk84TvH2GLNfwUFrx8P3tZWxT4sUXZv",
  "key28": "3nts8vWkWvwWF1VTfCY2EWmtLNdjyDKUwvVh8uEaugoHyrqrwukxJUbtHXcBA7HT6oB7iwgE53bJ1Z6EVAuJHwsp",
  "key29": "3YcmhPH5fp3tgkt724LuufBgbmorn7oQwRwD8pQf8j62d2pgPUErVqYntiRJwAbrxBPSHBWWaKBUYENEGc16tNQg",
  "key30": "5RXoGnTuA1BpGzvnj1GT8LkmKFWVTE9HAiUbvi8yy4xHsXYdJTwiboPbeQJtusBK4WUjaffFWXQtAs4SNebgsZYo",
  "key31": "4MLxAsXeDvNdMryDLZSMMQniqwq5yxsscqYrQwbX2d1LNiMV1aFLDh2EZ2U7N9VqNcA18wyBr94cP5UehFijJfwA",
  "key32": "5dw2jqd7qToX7FG9y2g5DDwMEKRgDF3x4KLyzhwJ4HgtkvT8J8wTga9i9hWgT5DJvck2Es2wEZsRmo3agLmcCDxk",
  "key33": "2yHc5RjougFyBQ1ya5wQogdKCB88h1VDZfctFPLs3Y64MKqgN4F8CCVXaPWf6o13YdTXvdnXvUszFn2WdVEFUGGW",
  "key34": "3ZfvxKX1Rx7xiREY9iMzXWewL9yUbisfakq8EtkQt9t7wv2FvysZqk1mVo1qryuwrefCQh7gMSBgukoxdaaAB1nc",
  "key35": "2v41rdy68hNTKQk8fnZgV7hFxjNHpXLiPjka2tLrQBHZn1SHDhQRcKETqpvGEndiNbcqNVYMW2do4jdtBUeTeidW",
  "key36": "3jGKCxU8npzB84Aa5TWmQme7uj9GG7AdNvYSCZ5p42Xnfb3cmQCHee9TdPPoBRWdxvfVd6ZRJ9nHdPeBgUp2Xjns",
  "key37": "63sWfyLVpjx2jy5ZXHxJqpw6TsykEDEEaDCPPh5GnGi2q4UuYZgwXgAjFmkycNvtPuXZCp2F9t8QieknM6o76Uuc",
  "key38": "5eE6psg4fpv6zMJThfJ59gUrdYXYJMqMjCJ6RqpMG1FzRuKYkZjSNSAXtoo9bY4tcN1GYre3dVtav5YDcxdaqhvX",
  "key39": "2BzUkmcSKMWG2xeBWHGtFK4hbhcxc3W1nyb7s5hWGkeQ9BY8Bi8y8UJhCJWT32xBozC6pB38m9W6ZwfB7SQsX2hg",
  "key40": "3ACCXZKeyf5gXAoiKRfdhWys1JycvEADGD3EhwVhJjQsPz8SBVASnqP317aXMJ6cvEcZeabecFgwYxQkbvUkzzCV",
  "key41": "5tvfvqsmZDz4E4mBKrAaUgSWpbXiWj9J8WNVNJfLf7XESGsC4NMeoZhuPS2EFY9YiNLrPn8st3Lu2bXt4kuiF1L1",
  "key42": "3ZgrbcWK3BwPvAW2wx7RkrVa6Rbs8x4TtyHaM4QUnxt36fPa8DVHaDbzTXuJMYbQyMjXDF46hKqgaL4BBhurfpBt",
  "key43": "5DTNGWU1UmPCMmDXqaD2S3QpDwZuaGHkn5r2iVcaHuCaEQw6FrVQKdgdZ1gAW8FpGB4K2d3TMQmRCLMhjdYvv4oT",
  "key44": "5bL7TCncBs6Xrt3UDTjQAeYzcdfqKyuhvKJR6DLqzFEkH29rFhpBuBb5Gq2tfWGgy8EvhbEEQJ6RJQz6AtaC8ggJ"
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
