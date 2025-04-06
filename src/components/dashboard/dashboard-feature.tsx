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
    "3UeJSWLcWQdq3JUtuQDdhBgUpK17eq8Z81JXVCTU2QFxE9JSABGazur5yqRSZgzM2tEqWXmNupu7a8ryK1BGawUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a6BFGuRzmTZZ7ZdL4NhTui1U9gFkcXti4N1mS94tnM8CyDVAt9Q7mQM8Cz2Us6MrkwDGXTvCyhgniYeXsyvCi4V",
  "key1": "5KnGiikeCb44FASthonkpxg5YKe8w19QdX5yozy5uh8msFVFK8m69jfZMo61SdtLQPmiL8f5ZWvdYE5VThTCZdrU",
  "key2": "3sWDrXfk681XR1shhrSKjkpckC851DerXeDU4kaPnn1bBKk1jbTqCUzYdpUx8k9DMtvJAuqqXnuBfq5yaeHd4Bwe",
  "key3": "3JCWLWgyLKjDL72fc39gc4fd8GVf9K64eCHAmdeH7A3cPCed75hzuY4A9ZNHcAirLNUsMragLDeXK6UwFhbDjPL4",
  "key4": "3zz8PjjQCKsifg93cd7VFeEr1wkWJzqvC9LJCni9b4qjaWBk2LVLmzcjY7kptH7xoJK6kwGZqpzrm9McKUJ99wCp",
  "key5": "5gGnnBvsXXyjAazbsouaju4ez2Yaev8ZyPqPXx5wzozpuNaPzePjpxRegMiCeTcvBT8Ca6YYmyGX4vHAewmFN2Fi",
  "key6": "4LUVnBvhFbUPpU4av8qukG3jE1Q2oFdoRkaz8u5uNc9ricCTUSCZkfLWSXv4f4odnLM7BiAUEQovbgGf7ZE754h9",
  "key7": "H1PkihjqYCkxfHgfugLEwbEb3hX376LTGRki1UJ8uc2kkqJoR9mZ1X8TAQsmXfsmsDfb5PjyuCjsLY4JWQgQZD5",
  "key8": "5eYTAvfQCMEVVNW7gJLgLN9kpLksmJCj3qXepGzcx7XUQqqTfEqYu2TPeCt4aw7tbAGFofXTfeNjb1A7mHb9ptDi",
  "key9": "2VcGtdgmZTZH4wMMkq5CbBpbPtgVSgE9y59wzqQA9PLgczer4LptKHVy5g9b3D6JeAocnpyYwLwZe2Eeg4D3tNBV",
  "key10": "5EJzYwu7nYPSyJLovdRNeVeQp7iNuM4fVpmbdZ8XvoRNpcS6fEfiu11UJwH4B1SRdNy4nZj7C3aaDGRg3dKMerJz",
  "key11": "2q3ALB2F87fxjq4bA9jVTzVxfdzTHkK2xe1rEL8JkdNdNTprzoyfAQLhK9XWQ98PJKufykmmGp4DDLEHAWU3FccN",
  "key12": "3M4CD9zKXqSqXa6J3okPFHie51ErATndP2TB98HE8gjppog58Nnpe38zzYSGx89BLCjFKjwgxHUgJRhzrC94Kjpr",
  "key13": "2x1cUqaNDtRuAzyLQUcSUDg2LTmHPvTAnCjmpnPGja5gxyXNBf14ByHoq2uCTmbPmPvCaqz6Asoxa3u3AMWkueFz",
  "key14": "3KnHe1MkEDXYR1GSKsrHJ2kVS2qm9UbeQxt1S2GsGgSVgHUWyTvpfBiGgJSYLKv4dm3yd92DmjFGUzWDms43kGdM",
  "key15": "2AM1RKTxMpvvFk24cgy9pD3MNaNFbFzRFiSVqbNt4mQwVS2nKNTj1gDVVc1XQgEGetvsbZju9RPzj1msWj1S65Jh",
  "key16": "8uY58KKxws8t6ZjYmRj1CqUoUhyk8ihoYUb5kryLRQbRhF8PKgyagd5zxdw7DURhNYYD8KKVBTwpdFTC4Xfhnya",
  "key17": "5xGT31BmQt8oHhLRcg4EcVUYFKRxEVi6vgHVMWBnPSSRvNTKut9Ln6FMqmGiuNCgU97jd9vEmFYVUtHDgqfZhMW9",
  "key18": "2GkxeRf6SETqW8V7QvCyxPtVP7UTJKxTJ7gznwR8Mnq8utrNwfg1j8KzfW2LvCfhCmPx3gL8eUAYmdQtvBSNtShd",
  "key19": "4bvxCHS93uPA9xQqXNsU6dDpsYkUFhD4jrhjBWWhA1saEPptq72FTH7eVp7ZUSzDdgES4CcKuHpBQSZssmHimdnz",
  "key20": "4FM2zvs3xuECEnQTK7o2omuwLUQ5EAbE8dXozfYfunNnabJcSHDjJVMBGKgA8E28ciesPxEsWFNxGtirrX7ooGYC",
  "key21": "agn9J3zpbEZXgYwo9YyB6dPy3CfwVRGVhfgu3jocN6Bp1UpAZfvY7L2iTWGqFGUNYMN1fRUEnZkSNU9e2C6coH4",
  "key22": "S3hqgkkXZXH893YcnGRZgADcLWpxPgQn9txA8vAtZgKc3nVbwCGTfYooNbJ4be3VGv2Us2X3oQRg8KUP3Q4zfU3",
  "key23": "2g4iuvjH88tgDGh7ibT5k8WPJQiT24eESC4WdmdD55DpTKpesxWRKC124wTmoN3XbondtyCRMUmivsonFTadeKW8",
  "key24": "5GojFiw1hevozAx2d6jXHJpYwRdJHKPMHPACx9a1a4PGMHy8uTcEFcjHnvr8GavyoUx1kGSyPYDfTAMWFDPfwWsU",
  "key25": "2S5o9i1fDccwSbNho2JhRoPRFPwZR8TrC38yyogCyCYPuu6sRWiksQS1rjtd4LBiY8BmVS428jDFNxtzqsffbzWM",
  "key26": "3gC9irELD9WKXYRZAFZsJGJLE5jH8gHDzkwvCybqyGbRwwb2XebHhMaegs3MHfBoitcg8WvWhw4oPXfcHAk4S1LE",
  "key27": "66gvVHjBex3VZ3cVXdqUJ1CDCaSCQjodkB9nGzEBkmXNGP1xrfZvpWacFvQzPvqmaKyMG6s64bJt5dLXbLbux39C",
  "key28": "5fRwcwVG9A8joR4wW7RrjSoVpAfvcNHc23kGZysSHEGQ43J7RmkvQxmxHHGC1LvR1fAfWe1Wmn3WcjmquoDyUWsr",
  "key29": "65Ptgptw9vRt81b5DTMjv1a8xw1WH7CWnZXFezik8j4SD6j9JmJiYHogQubriwhYDNUm4TLbfY9VjZ9AvRUcPB82",
  "key30": "zLH4vyWQ6Gz2RY5JyrozsUXZTJpNd3tgGAyYh7h8iGzmPxc5hzeBNvBLRqgj7LwAdnm5qG4Ehzg41kckyQERzeT",
  "key31": "5SqfN2GmNfGVan1TTe5hV4PcNJ6c37yMXQgyEZfBywq2BHyUoUXc9CYjULny6PGFLbdaxEvbPRMinpr1uDVruqXa",
  "key32": "vteaCgoNhYdpbb1HymMrfUSTLiehHsssk6oVE5kt6gM1kEXXZGprey1NsVpNxkUv3fm2VDVA5eByQxkfNSHnwYt",
  "key33": "3MM32g9hCqmtuBdoTUf7pe59BJiRd4RjxK29G8dsNtoVXkVWiCoMv3BmGNPjdFQDX1jwCeCfHRABCH1x5UdCMfJS",
  "key34": "39PpBZPHieBKsb5Zy4Tex9U9Ue6gYLHfRmmzfvfdvsYPWVZoZpsrUbm1if9H2c2Kh5ZUrdKVaC6rTSkJ2nUpPEd3",
  "key35": "3qb19SKbuVQWEiGE1K4wGXCFT68fxTY6YhvUdzt9cS8WaUSfS7EM4Bqo8BV9iKn2e26hDmoqwau5JH4ZZfsQB8HW",
  "key36": "2Y3CrfWZtR9wWn8KzhWpGC6tB9FTqcgUFJBZeFwR4i8YxmtEK4mPYJy5g5g9M5cmuDhRAcK69W931bwCDPJB9BPG",
  "key37": "38ph8mfqogfJtkNPM9VvJeuQ7p6jevaQpFUWBHVjb6NjQsj5z9Ve6iS6ZAsARwp6aymfFSepRyo4XEKfKGyvB4zq",
  "key38": "XgqyCfghBFjn5kPTBicn4UzhcVkFfmtbrVE9Zj3LP9C13SGCiWDMY2iuGcX6eyHgPCsvo67adx2MrnKGbznF9Yf",
  "key39": "28ZDEwD6xtDsm1jUQwDVHEQGWMysbDh6WRgfhXcSZsr6do27bLovvkRK4pPqsDhNBsq6jK7ybt1yj5WbfVfU546f",
  "key40": "YTa4K6m7YCyzSe43Jm3pbmBrDFdLguXh39PN7G1ZVVBDUnzTjZ1kftncRNNT7PuzEkkp3hEyguvkJFmWyn6iR7n",
  "key41": "5cnnYFXShqhxtMnRUPJEUbBTzYESH4vNtkpuyykLs5ikrF9K866PLfz7UQtXLN4ChHuiHtxzUeN122aHmai65MM5",
  "key42": "VtDmWwT2qqGWHRB8RYXMqJd162gdm3Y3AiJvy1uijzZJk3FqbZndxYZRenZ4t1DJetQ6PGa3pyn3kndwRW7yPcG",
  "key43": "2xhTJx5iYLJWeer8MkyNpGxFVWe6XFqdwqoi9UYBsg9smgYAwfmQFsWaLCJ5CMGroXyFdBUSEhN88EioJaJgijzt",
  "key44": "3e1oCLJ44Qt5L6C7rMUGgm4HeveFfghTgHvo3hkMueBjo3oeYMgjLHKF2HhAZPbkJi41kMskMZSvL6mRmu1xiHVy",
  "key45": "2T9Zgb7HeGwL4mugBazPSA3SsWs2NkhTCu2MgfnmthoRjnQJ9H2oBGEfCGbWbkDwyDwEE1tkceimtNBdwe3o9wHt"
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
