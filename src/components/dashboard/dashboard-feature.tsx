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
    "5KDUQcLz81uqF2yftasEj6YaChWcFm2pSr8Lji9NT6gFHbWeY5n6MYMQ7LHvJ9JtL37C771m8J3id4nm1sLXVmJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rkarwbW12jdwndCzx6nY9j4kFLRwvrho4B4tAss3fbxfphv7QwxX2mJFePyKfjLT6iAYmup3m8uX4TjeuD9EZUs",
  "key1": "4qa8FE6BpA3R2ZYHvTo97jMuUvwb1LebM5UxQkypvLJEhAqfrSy8r7mo2utiamk2une4gRBtJQ7Ncc6VdHVd8kpi",
  "key2": "24uU3xnjwqmqKqbAEYMDHChLYDEFRC92K8Q18CAufh6jiVFU8hskUCL9z7jFXAF8LTo5f8bZFRyhXpu8ph2RstXy",
  "key3": "1reVNggnwoYGoBznyAZ9Xxz3wLSujMkTJ7YDat7EVbHgkD8XrDgvjcSBqC1Uf7Cvy2URwt9HkS79BXMBGoJAaoc",
  "key4": "2d3Sb9fjCZ5HtXy4NzqiXiM5p7HPUvYtYYPSGZWWvH4pQ1F4iEVqG8vYVcEB4yuRHj24h57TSscw6LUS8zM5Zm9i",
  "key5": "GeZ7T6cuNXcu6iRNejSv7344xN2NzT9tHvTrHw3ck6ABYHQdjZW8giUC7DKn5iSyz3GXAgt2tEHCPwteUY93eMV",
  "key6": "5ThMhcWDpABUaDYuASHqyn4fGTSpf1XmHCRvrcJrDooZNbmsfRTY369fKDm8Ed5i6hxFchmSftSA66yazevMRkFE",
  "key7": "iM4Cy2jCCRxFg7xXXNpwEGx9ggSKwaBEjEXFxVxe8ELddEcXtw5AzCjgB843SjjVxGvFqf3VEg7288VD2sbPwNx",
  "key8": "cGyjXiaapReDKTWZZTuaJvzHUn4U4zkBE9YGTJuswZcEeYpHaPRt4UJG6h2TPRnUKhggRG2ioBXcYoXWM4ej9Ag",
  "key9": "4C8Si2yNF7aBxKy6CzYqU7jAK33uuyHwfYf3232xr47ZF9dYqKUYgsPaGAKmRE5NLNXGPSWC65ac66q2drDhcHtK",
  "key10": "g9WwJSKyNBa1HBoDdfkw7Qf6wnjQ9qjuDjUKZq4g7hxYzgrKDgpttWqXxd2t4RKVYpmkrufF6hYdf54xkXu4Ug7",
  "key11": "5kthKF2wNBht1oHLjWjUgzTrLnLN6oaCUC3ToT57nxcNYv4oed3UWYs6QkgtCuRL28NrKnVaZ8m6yfHU57ZcdZqy",
  "key12": "5MoYmBv8J64qFGVbsS4HB7hNjvtUYngJVuaZBKkDa6w4wsdeNgmXdCMBURrkxeKvBgWqNdq3QLgkt8PSv7frNEnv",
  "key13": "268opUsoEU2ffLuQE2PoBxR2XkMRcjkzx1uANQm4Kri2EkFEnbAsZLaDXpUnDoVV3iTQ2JiGtJY1oVARPowpCXAm",
  "key14": "5bz2TXzcfLBXCF58airvLsiL6rYQswgfg1A38xhtvPw2MFZN762dwefKCznma1Lr2UTCanh1Xcs75TUua2dzYsaV",
  "key15": "3daVNxwBncRmniKxEK3FUu25KNkxjSdzAG9U2ndNF11bFePF6SRLQR5zeWj3tngSZCPtcDtcb8L1fRBvggbXVb7H",
  "key16": "NKmFKyW3GnHSs9Fhyk5x89pnr5RLP4ujAa8J8QwGsHHAV7vuzrSJ27hugQKrvoSq4UrUTuci7a5zTWmG48mCNtr",
  "key17": "kWurXYw8nuR3ctr5QgrdEHY6mjnk2Gmuk56MBoVQEhMkUeeM9AqkGgKFjpYhd4iHZjtkPYwYqyUfwD4wsu5D78p",
  "key18": "3Ms46enSxjU6VuvFhJdgvHcUJ6aa9cDjN1xfNGcWTfHuV6uRxu74RgLSdH6JR3tb2HSbTdQ8iN2kxfXSARfdhJM5",
  "key19": "SPN6EfydMqWGnqgF49BesZWYi4gXqSgC4sqUhJ5VGNDF2KLpwXHsScFn6sAZoYRd9iELRqF27gKx19ymwmW5hwd",
  "key20": "3HQ1qhASoXYUUjNXbhYmjiMNDUA4vGeSgcAUVcQZ5aum9ThbmZZGW576YzFhC3NjPK7ZWN98E3oHXCTcKKokgQrs",
  "key21": "5FaHBwF8xs6zojTQYTdMbPkeVFDERsSp7GTXSU1RuKfdTs3EwE9mZitFgJcS5EaErVuAXvuJLuQETdfq12W4LAGg",
  "key22": "5YvmXNtfTbYjdNXWMMkWMP6NR7fqjKtczXfT2wKefpgodHczKh28jSzcVQvmimK9GXHvxp8vq165utCD1WZie11W",
  "key23": "48tXDnkzXgGiHRF5jS9fpTM4t7JtLv4uk4HwHDHnPWazAeTBrPdbvb6nqg6DyWYdUPNb4VcFg2hcNPpu7vQNYUGb",
  "key24": "5NyQhRVGzwBo9PrMyygDDtHsjMpethSR61uXPnUFCRscaJBPQC6WMehgGnJiU5YMm1o7GwqvtT46trECWvrE9ftu",
  "key25": "2wAw6mmUWwX7t6XoDTrSdgcnErX3noBcF6wCtE4jrdAuoxZsiK28zDgm53ssSfNTjeyMFfMurUCjMmAeo8GGkz5s",
  "key26": "38jKfRgonJJ6JyERZBJjqEyLWEiYUzuLAtSzWPc9yedoHKWxt6tBGCAjpQ1CoqK2yzQhnu4E37afNTLTGhSRrPoy",
  "key27": "2tSjDDyZMTEyVB7EP9XndzfCSrEJN8mrjadW4m3WmvZZJXSxEbEZnCfyDeevDPZr2rXuBTCEK5nzoeSg5S85Dbhg",
  "key28": "4AZbxZRirDNKAUGLXzzBGNaJqot2BjnPUCasx7UJpEM7sgXkjTGXBnoXrWfMTNGFVkwW3LEQRVxJUaVSZMNDfvfa",
  "key29": "2228CXSLey8AJtG4Ar9cGKUN6PBRzbWmvhStGbvj5MMUvtjZXAoFR7KZ41xdXbDdwXWWWEs22nBVBBy5XdK1s3HV",
  "key30": "2PGoH7ebWwmxu7mCfpUxCd23JnZctxYW4ZktgjTsiTdmifBFg2w93jZtbXvL6p3xGEBAZ4FWcHCRTiXMd7SLire5",
  "key31": "4puANWQppsMNcowi74UPkWCKufYXDopc6zBfkqqfgTfAiFJgnixWvPTzAxLb65uXyDgJ2e2oShv5UsDKrYBZ1fPs",
  "key32": "HjEuJL1ofXSV7B1YaxSAAgNH9TMmQMbqsyPVGMzPJ6kVVKdSejThoTbqdYhaiLZ54B1af11sT6WKrPsesXhvcAM",
  "key33": "5uKKLwoBhKq2LZNWx2aR7FD6wihHG3cxbhstXuKCbqMkkAUC3QZSTm42adf3TJeBCNgdQGSf5S9DWSvoWkDNqiAB",
  "key34": "4quXSAESuPUUMH82Frp7CBrnSQLhiKJpe5DQs46edBrQfjBu4DVuL1J28MDkuF7X9EQE8EfSb92wskM4enknuEyD",
  "key35": "cg9XySJRtELDZhsvBJAEYSP5bPY6S7KScdyTTXR3qmJ7nDsBHN18UZ3Bj1XHViN9nSCFZrREnSFBuQEtgm8dYzZ",
  "key36": "XPg8kzpstfwmdR3STymiQ4ncVWRcYD8NZKPGNPKLW9sXc53vfYhH8CrDeCPyxo1HzpfmBEMkqFh3NJRH3tSjswq",
  "key37": "4qAooW89gKoCckR7jcTRd1AF4MeuHFPQSSHHBYVXAUwjCbAMH9CzxRySJigYwdq3DhTHoiCg3s5WumdTtiM9tbhc",
  "key38": "2RvgWWnSTpEyErRdpeJfXv75V7BuXXgAvN8u2KGY6iuUxeywmaN4m9dq2xtMrZbBcGEZLNyuszQxjVTHb9Vdmesa",
  "key39": "2yRTfCQydk2YQkL4ByzLs3vtdqroCGBrAMNgtHm1apakFEFS6MhktRssfVtdYEMd5Y2pGx1F5Vr5NuX97KPzVGVd",
  "key40": "3KWx81qHvAeb96CAf1xA4erbkwKpLwiQpM8WDem883hMHbnJmHQp9r5XRCejhPUeFrGxroz4hRv2QHbZTxKmk5ek",
  "key41": "Cgp9FsErgtH1szxcQGeXu69q7AFQNNh3pHyskBoaopDqkV4jQfxAC2M1KhDk93TgBdu6ioWnSiLQJeQR2iUPqR6",
  "key42": "UspJvJDUiKcRBzSS3ffeXcWNkQ2SyzVkSZjcdmAsjHdDozKvor13Q1SY3xPcx1zVEZZUKNZSEQUzmgHQzEZJDbb",
  "key43": "2CTHPwyXKcr1PNcenFVagchFDR2kuF4ipCBgaUTUYFWgmqsgthgdD5nqQCwA8xnWzQV1DeoXd59PVU4tSMdbXUoD"
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
