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
    "3pJn27XvgDFS4KAjSPpG7kpeUcWyJzipMrtg9f8atWmm2pTgnEzFf2bCcZ8q2HeqEGrRkeqh9ro8NtihadhKyyPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mcB3CuNEmQHx2gcTk16cBs36u1Ts7gJ9rbbaE1JK5wte5REzF2dd4wgmuR2ZFd4c1B8cQBNVZFMwMMjspfq9qiW",
  "key1": "4HqysYTSJigMg5RH5z1VXrVMMMrVvqZNzKA3chbdBu76zSQ81VQDvY7G1n6jfh3t193nfxgYTR3cuTo1wMRpFWsw",
  "key2": "5MG6ciBkBLKkwJ5YXYPTP9b45MNKohhhkBKHXkwqCxxskLFjACy8WHKrcRBCQJCXEucFFrYherPYwboqeqWht64g",
  "key3": "3tXd4CWo4aw4mGkmTkY5wCdt8tLWKVREj7Pxyb34xBf2eSZgghdpBZJCwQSePi21Tk49j34HMfFm9C5tM2htEzdv",
  "key4": "3PU6p9jGZmwHLzMhMtSqcH3JPgumJUA8F2p3s1ULNqGWxHCaaTJJ5sAqrLys6miqXckjF5aEi5JcrsnmBCnS2xZb",
  "key5": "BBhJWEuwFQcceCpEasWNWuiGqarZXxs7MbK8ByEgkES4n8pEBLmSFs5VVj8vAZJWUnpacih4iFgHEzYaKXcZD9H",
  "key6": "612gZcRejM8p7EcPWAMnQy53bwfTR3py3HGujLD1MWsabJZdkcaGQcCuvqhrH7PN2fUVJSwgDZc7sx1wRDDtqkYU",
  "key7": "5Di5KNuaDyE4cHoKUd1ArZHrEg8kjvqrfxGETTfepC6rkaDcVALn1SimCbZR86ocPaJQD18EZSfMHLiAfmvH1njS",
  "key8": "5oZVP8nFvLkmZMWzAQe6ez1m9HPBmkCg1LYhtuRxogkBzSgYdksz9S2syZP6dNje9KQdcinCLTQzNxSRnYTiPUN1",
  "key9": "4E5SqHdEDSc944CNr6DuoBLxS45oRbEAZ8La52f96CjPVMgzdiUZ2fGZdNGxiayM1KZ2uAMBssHApS4smdZirDTo",
  "key10": "kkkMShoP9TMcRcbnJz8qytFi9oQDpJdo7HnKEsrGEog9saEbZyZwhZ46drsk1nwoMzuKBZ6SkERvW19dQ4gG4se",
  "key11": "VUE8STERpGypBiLH2kzErHPnS5VHAku6kxieZxSySETgr7MhXLSf5u7SqvxXC5hiuV61gAuSWNbNbcLMQf1uvQy",
  "key12": "63LSrVeiVaegjtxephHS3tnS3GsJMxH5NenUW3MGcHzvzQC6JbL9DQcZTeB5Q7veeJTcehmxTTg5qMkpK3Q5UzXP",
  "key13": "3VoQvCM7oWwcKQJWNTYsp1eCSNxnZVyfGZWBBuVUFhbiappfgTyKr8HKq1aiSJ3BNcrgWrWkrcTuw7fmcWPWEgJQ",
  "key14": "4j2ZwUh2e6QvRq356ekJ4yvdCFvBvb7DbiTPYnviiDdrQZxiXviha7NqZFwhPs8UXf2aMgp21gEBzuKcFMk96Q7m",
  "key15": "oGmvC17FcPzp9MFKs4vBaWvUBRKjVjFXocRDhrKh51pJcfvxFkXXHYDJBZSWUALWcq7WhPQf3fMwEtXujMRRcNE",
  "key16": "5myPMzuyWRFFh16wuM1RCxxjHqwTkXwZXFWkNzfxVcpiksFcUwK9CuujrrEwhfQownBA4ojFQTWhEgXGUqMTuyF1",
  "key17": "xpykV4eLCwpvzv4LhAUaUiHxEoEp79SF8L2Bmrru9LX352e244yCUaVBN9DG3BM9z9rVgSg7SGvYCM1m3NRzVYe",
  "key18": "2gHNWmweuwBzWfgQumfabPUx7GyBnipMfwpmu3uHSn3Z4kTWYPSsQfaRK8LeuPxvUq7CcFZs2TcXqHK4D4GBsQo5",
  "key19": "5VAXzsV5S3SbYegzBQ7d8MWi3fkzJ6thc5EmyP8dEQhWvj41eUEyhrbuWuTdePMTE9NQreVRxSbti4UfeTpsRPGS",
  "key20": "S5LjkbYcEjsD7r6iYXt1L8UHqQSGiTEWjAx4M2Dx8ao9EWhA9BMLjpVJYJtNuJNh9Mcnvhj2dXk6RShk6LQc8A5",
  "key21": "4GjchgEiKV8wBK2Y6ZPyPWKDw8bo4ZcP9UL1o9ErfcrUyBCHEwHoVyRrrbREurHfRa9hNXbaowibWKB128VvPCUM",
  "key22": "2crYCosaf1qZ2VMaKxeFxLPrMHUJyZcu19Jx1DfXw96xLXLautK1EQeZmSnnwVvBDd73QPoqyZ9e6ycbF8wYea38",
  "key23": "5S7AiLFXzeLVp5wtgrQECy7muABQkaRxzVyJo69agquEi6vYtZ4FF7g8Uq1LVDBQdvB93FwDxXgLYEfUozo9QSVr",
  "key24": "2a4ASM7Nq1zs2YtR56m7GZaKZaHsECkw7982Mf6V8ZW9Bqk2QPsurL7XcrZp9xXDg7aqhibw2JWMfcAXfahqAeGN",
  "key25": "5zBpb63fQcRB8QdKmtaajqNoALTP2RhnbG8LkJYnPpgt8dxBxi3NQFXVR1rKxBZ8jSo3tKYTYPJbCHd1xP915UMe",
  "key26": "5YeK6yYPgd8JpHP3PgVfkxQy5iFwkt8UfxMPtu1eHgRMNhbvf5Ati6boWQ72pN59qsYGywyaHKzMGpwHT3tHeYQR",
  "key27": "TxgU5rH6A1mKVWJboWJwdWx2U6dU7gBTWDDT3wUT2Ao9iumUCpDhtjkzp3REjbwYGWwFkhJLcACmVGZ45UcEBD1",
  "key28": "3vUbjb2THv9SYA9gDW9YLmZCqHVC1mv9UeRJWPfqFmRBxHpiGZ7doQNJWzNPgGYBaZwsn1fmCsguZWLEBQnGyURA",
  "key29": "2a6Em6yCLUThzNYuSzBg9fTibaeqjLwntwQ5wVw39VVKwmb8CBAcUApYTH9KLadMDD79dmRvLZkwbF4H6j21gkLq",
  "key30": "zwfeM3E1cW1cJYZCXeXGQ151PwpVBwsfQruZLqmu8jBeugyHngvJNmuPbvFSYi8Ty96htE7heQmaSoNDQg8GLe7",
  "key31": "N4XxCV8oTxcgP9HVycfCrD8Hmurz82B5CNroq8jwXDG2oK2kxCqXoNVWgCbURt28UZ1jYQWBnVGgGwwVjbaB4Pp",
  "key32": "5BgxCVBqmne5tsVPXqa6D76twm6nHdiZEPrdG74f4PxXvwsAmtGEZdVkEfnJB36HHwVhLHWS3NP5QX4i6T9SKF8E",
  "key33": "4mcy4iHSSEGuR3hXWwyY5GzjooqMTvFWf84abrjB1ZfGcGNAjFAACVjqS1A6sNwNXytGecYxQRRMqSx6VrWpi1Vk",
  "key34": "65PBxipuzmGCfnwTuuxxw6AHaBZmtdzawUHgpsSuSeKkUkDzQ85UUyEJA3rjFhxp4Lbt8FdSrxEKAtZiY9hcU8hW",
  "key35": "2kvWd2YbcXkjuyyiVQwYMxx4UVz6W76VoeGwzQwqxXCdCyREBeT4JcMHbPueSc8KpG8nCbAKdXgiSxuSSNGtfwB2",
  "key36": "3zKNKHuYxBnFxTaSzzeXhuFHdTUFsKQ8FxTg1ySumk3t1vTXYCVCGSBYAW6PPPmgNw22uA4r1hha7mQqYhSXtsoF",
  "key37": "3oUaXshWqXTVXJdK3HJ3jovF9MDDFduZFgJdWp1zMgFD7o7jww4xn9aWfvpQnUanAqe9KHaHa6FMHSx9z4wymGgw",
  "key38": "jfgioR6zfNJruCvVZ1Do1prK7kGsH99DmuQZJ4tkXY4d15hUK9HZ8azT3KTVJudeAkYnmhT4hfjGYyrGJ3BQt7V",
  "key39": "2jjVFC7vtJNMpTRUhSztptEkVzvThg9vdRwAvTy5LtvgeH4eY8JN3qQJ92ZqZKaRE5DbpAUTW9smKQ1WWCVEz4Jb"
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
