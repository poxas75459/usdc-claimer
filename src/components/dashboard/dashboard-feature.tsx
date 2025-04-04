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
    "63vy3XPAmhgunftnLAy7hrKTWpKg5dWAm1qFKTi6zn4fGXMT7zn8gdwuiHrpH2vTuPJAk9HZuuGLuJ558K1L83nB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n6QHDFuxctfHXjdELF7MUk2DS5vm2nDr3j1tMyNGLKnyThjszuJCexoLNAqZMhFVDd817Za7JnfBsPAzktUHNT1",
  "key1": "DDfBw7gfRjQwBTcJK53HtugXfSmQ6Uc7cdfcEYNdC3DdpKnDWaUfL6btsU1D4ngWzV6Ybs7myYmRZzFm9fR3YP4",
  "key2": "2vNyVS9xXKSkDkJDcwnnR4Xv8APkfeXeeZ6hF37HP9nj3k36U695uHLUCYofog9uSHKzGkEhbf8yZdwkg6PExqS5",
  "key3": "55foMjcYyvq6g9nc8VxXXW7xnUeZmcm7MhUH4nvNMGQ9MrJ8qZeuNoN9x4YZEMWmCYCyVfva7qeBJExsRyDckuRG",
  "key4": "47EW2876fJuzqNa88ux5wJLuZjhevVxLH8SqSkp1Knuk8gJz8qTTz4tqSCL7uWqHPVmBgYc3VnLgjE6m3xrw9gd9",
  "key5": "5u1k3pZerJHWFDJigHj35UrzZZHW3N41VKFpGt5prStF9tyG3AbqfoqSDKzM7XVeqKrZrt6fPuDf6v9Rsp8irjzh",
  "key6": "5VJWHE3zM4sRayEvQdCgTHyRZvGifA7LRt8SjwhpzUfA3Gm7LCqngLiLkubxwCQ9gKhJDLoigwQvsxdffBPbve77",
  "key7": "3RpQRT3a4LD9LAuQsdLoLkoacphyd497vrYG3koxHX19c1a7ymaXKe5xKp3VBWTkrGHTFyzCiiHCNfZyjwWkNY28",
  "key8": "4jLQ9eszQb7vyWzQUcUPNZfVmTjnKXM74tC6vGr6Zsx6QJQdKKk8tYWdkTq9eQV4UkyqMLMP1BGbxqpf5wg7XjGG",
  "key9": "5NFAFNr6raseMW221NpajVXLfcJ5eKbWWUwyzkAyfZ5DbJD9BFaNJjfnkHUMTYiTiv9zwBJioKaX8geDAiAaWVwK",
  "key10": "4NBkMXG2bgtc1sMxPxkNoAbD2e5gudrtKrhDgJQqTKCZAbSgotQv1KzhhQHTwhT94eYQ9bFqgWPFinQgxuuitChe",
  "key11": "axzi7EoJ1nkGyfDFyxbGAFVRbigSqJh2VNwmJS46qPa4c28NMmuCvp2oN3attB8rYqv7Jn1Vs4v4tbV63FChMsn",
  "key12": "62rtE5VTGC3XL161dkHdn7bte1tWWy4tu93pja4v9vdjZagZf8hwUr7QZqCvvwhHZRtYfgCVPwHqnWovTFkZVSTP",
  "key13": "4FZ13QUCschGWjmeDm1vDv777UMWfCVxHxsRcNp6fRfyDpNVDJJMNGivDHCrRh921WBHFACbA3X4b8nCXMpSEBAf",
  "key14": "5o9pXvhCf2TRAC32oN6DCXHxVpVNr2DyF1yC7tpCmoCxNvnVGx2DduP4HUmuSHrDZ46FNdFKJ17gJcG7w9rHgzfM",
  "key15": "2RQh2qMA6vZajE73kV2so8d1KiuM2Y1eenCGJ5jsfjuxQ2mNnzawovz8ywHvvgq9Exke5wAFg5rhximPZAwyPye7",
  "key16": "5AQAVaQWidshKPRPWeQwTijkVnkB1ttdSiEynmVNuNiTrsNwnqzTUtcY4P8vWHaoqbWqhKC1eHtqQnkBcusLjRXC",
  "key17": "2Pqjubw69bvNzzr1RAgm9fRDuv6mUBc9vhuAAE9BvgRSYeoAP8hdLRadWxjerYC2Byp95BNewkuhELseEewiJ1Tx",
  "key18": "2cTdNyruvidifHUrGf3Y3gxS4bXTHEyekr7G7CJ51dZwm3egnLygBvJFvtBw6f22eh8uVf8n1UpPMXA3mKoLz6oP",
  "key19": "3yWKGisSLkJBLCRmZPTFRhg7BiQyc76bCqeTmLqcR2T3kRpd7eRLLC7f2fpwnAYNy764Qq2n1unNATD8Krjv7G74",
  "key20": "5GGCN8wXbw4zzPtQo1uB7yEZYejzPxoJ2exRBvnQ3rPLnmh1xVw7yRP4Yt9JUXsjfQ872mSkm4woYtrDtbYoHtpp",
  "key21": "2SVnjUUn1NRQ9xVPkDpw8XxSW7mxsW5Gfx4ZiMT8N3ZJKG8vffLiQxuR3oyy3ReUTTNXttdut3wgt6ERQBfSmLwa",
  "key22": "61gxDfvo8HYng1mQEhFvyoCqaNZysGx2vSNARChmUoxk3ZdhaT4nVoQZSuGuAZH65dDrtp5mVauZBv639aYdkrw6",
  "key23": "Fa5ZJMd4WbP8Xgw1nnesfaMX1aSbJ2ym3qnE5zAPHMs2WnteQJBZizeTb3iBJxCzSCDGP5EtAAkT2K4dd2nvfv5",
  "key24": "8nBZy2rEnzCjXBXFUHiAQdn97FC2suphZP75LXB4TLcpgCNJWqSrxie3MzErAQzCqkTsneXzzZikk5FxLR421zR",
  "key25": "3WUcK8DzD49FtF42hvtjKz9c7rUKmDGKufMQ3FVBJDKn8rEvFirAfkKuWrwbZv7GuXsVrrt8JhVr1DXZCCoWWjqG",
  "key26": "4SMeDpz9mtWvRvP3uyj4MfgagHcRD47W8pKJbNoENPZ7TwcVEExSKhpUiFXyYwCAFG9LU5SmSH89Nsdt3KQZvrrE",
  "key27": "oiWo8oHYJFsGvrX9VYhMEh6x9xiwk5zLiZQ4gLH2VGmbuad6EJ7L8K4MTuYeSeggF5sX9cnurbhcjaFvtfzjDmE",
  "key28": "37zCTmYkmGvoNvM3BhqYkvH7LkGbUECUWDKD7azQugqHuLxyJ2pMM8VKw9HZ7GpBE9vfy5aTTGQaJBQgnqx73QHS",
  "key29": "qMpebC4PPFirEcWSVQahBHDnZdbAxyV7BwUiBiH6567iuGQMyhahLhGsNaAVcTBNpAnL6qQdibQr8ot6GFccS9U",
  "key30": "sgZEJL7HGfJGV6LQPWun5u8W5Lup5VaTm9BqbjKpefmUvFWtpsjNmWBCK5zmzVK77UKtoGmp6rHpqrkbf8KaDJa",
  "key31": "2fUAW1FbQdRpzfo6taQY9BnQmxjfcJHAj8DSoFMsJSpaVxu4mB2ULPY6UfDkgu5tzPaTtzj1oeBdX5sU2CBiuv1n",
  "key32": "373YJGwWTzAnqFRhv8jwd9tNU7nN4JyCE6KP1gH4nzKVDfn9qxY8ZRRKixurtG6PNvudEQqLeMg3S4B7CxJfaVmJ",
  "key33": "2jRGahWXNrKEk6SXhG6XCYLU8doppd2HGeAJ8aEk3dDd8SF4j5MDi65j6iWftrGkuDS3QfD2S6thZPiahG4Ve7HN",
  "key34": "5CUJ1TQKpdjr3vtZbuakXzL6ee1uAyijj6Jf42EHaUT8qZzNJdUisz6cjhKnDQrDSzSsuoU1iY17TBtDpa3F7Too",
  "key35": "VHj933spEW6uT6Wtm5MDfAbxiGheWEUySuty4We2vyAbsTM8txuZmwwniJW6HKkmDV5LbyCvaWYcHKccWkF5NDS",
  "key36": "4Jq5Hh7x32szAL16aErCayKix9yDxfvmJzMA4Z4C6TkqbbTtbEHgLCS7s1uBXUPPmCtG1P55SAwD4FYrQvgtQNHM",
  "key37": "3hpbcXY5mP94FJuYUBJ3rcqB6joCXWsJ31WWix5wvNc9QKBYByH2cs9UkfawjGebp15EaMsKj2XoU5mdVa33WQ7L",
  "key38": "51fFyZ99CzEvCa1h64CayeKvu5Fwa65Zb5aBruavASnUmKWwdmdCTmjFxKJY8KWS3jjqAmYRV6C7Sh3wuHkzJ1Ax",
  "key39": "493gFWk58WSbr7khj7jA8X9kj9qapTwaFJxsqEmJJjasfqaQ139SdsX1XcNFxWneopdZ6EKUsSUZMh1XkKxUyTA5",
  "key40": "4M2BxxMaa2vmw2jUPJBzXQAUKyWE8cAnLzUXWmBXkwCtbobtvDtADEjvCXPbKp2jbWYQR9b8NmXujMxvzzaEnxqf",
  "key41": "3gtao9kSRSxyxwv2Xj6EmoQTKbTsfmn496gR8rbWhrwgruHe7BjkhUTEG1o82eyrs8WMMA5cKMUng7XpMXxPeWRo",
  "key42": "5ZRQWTWwwUG6j7omEwfLDJSQLjzkEuRH2gMZF2GbdBQZpGFu344gtDWvcN21QfPUW4Jpa3FHUKVghmEbpqtnoJBt",
  "key43": "MoJYt9RUL3VdxwRyhoRDuszM2y1nkkJKZafrzL4zfsmgVxT33DdHUGmwhxEXmE9ec4kPRxspGKWvVBL8KXSuXAr",
  "key44": "b5Xgo5rF8dZR1Mbdk5NqeSbhmQ3Jdc1EEwmgUzV3tmH435QYAmGUu8xYiWmkgSnR7mfjSNkFt9DwyVydLCBuRz2",
  "key45": "4UBzNpbBL6uWKn4BvyZMSjFoQBr4PLx9ecRJK3W62H8i2keuDBG3xYDNiQ9vb8213sHsBARcyUNHA5U4F1p8bnHG",
  "key46": "33kNAXSqD6NBTd3PpQWtHhDVn26GdUiwGJfLTxzSQxkCPWvXmChRExACjrYMjjc4MwDUQySViK9YGeS1Kn9SWBRF",
  "key47": "5srTHst5ea3RSfD28GpuzkZM8hPUwF1qFJ7caaVYrEBnFz1UaaQsuSCz71VmiMiBv4R3o5HUJSomiomTcJq9nLw",
  "key48": "3LwRKSdGZSqSKd94V5BXwhjeWUU1XBhZPnVKiMKZjAK3WoceccLEhCpKpr6XkQm8rRtxknHEu7CLEthAa7zyuVKt"
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
