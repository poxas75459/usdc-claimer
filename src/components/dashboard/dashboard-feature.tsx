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
    "GvuYVZhfbR6hgkpkJH51Tmpo5BX2YDgu3SMvoxpshjj1XD1JUrFTgZ9aLZdDEvG8tLUy15ZksisdBoCxbdKtuDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i283Q1xWMjuCQ1SQPeiqrpDNCP4YCAwS7ohmM3AxcEcVL5Dd51r9Xi3kaAq1dm1n8gEJngRoKcDA59YfRYn7vfG",
  "key1": "21SjEGckLtnBdMmBoX1iP9U6ucPuFqofQ2QxsAU8nzpJVHQLNB4MUao1pEUWbafcN8oVFZ3JA9PnwhyX4MkLQYfa",
  "key2": "2KQCk8QgtWqhF5tniuEwTY576AbueYQDB3fBxLifM6VZM56AUgUvqYs32Ls5Nz2oWocqHtryQXmEPpmhppDja5x6",
  "key3": "25kG3khTJ8oUXrV5ca8Tf8kwdKDte9XVa1oijhuq45SfXjpFPwvvdRTKWutc6MuLbeBcSHEXPjyN4Twor9deNntd",
  "key4": "43VfofxKUWY5K2REWhhZNNXapaCApE3XgdYzpCtDd6yttAJoXFiZdZ8rgTsmtjba5e7uSv7W97HupmwHpxiuMFFX",
  "key5": "2uo5dGnMNHh5uxCw51Mnq1YyrB6GyWvBSajeGjmkQJWJyA5P7mVe7tx2VyEQPGcY9F89Hy8N9UMguT6uoqgZnTda",
  "key6": "4twdFBtZjiRgUms1pVnyQaUQ2Nakbp26Eksxt664FWcwR7yHeWYoqCGA65tsaxuPYL9Ny9XueY8T78qR8YTfawVV",
  "key7": "ryRKUPVArQb3eUWJk743HaSh4974KQEcoJn5GQVwhtTyhtEb3BsEUfJfV8QRCGg6zJkjTMPkTg57EPjnFcVtpwu",
  "key8": "RYqM5BK5Lm2kgwu9Gg63e2zW8nP8xtJbBGSQJVnBAGHtMrohnAcnwH57RjewrZsNNWs8ATMMDvSk1mgi3ie5i8a",
  "key9": "CJZWFhfEcV2JUV6Da8j2SnPGXGpj2aceQ4Fjagjg9TeoHS8NJUTXFNThfHqmbMEygkY798X4dSmtmhWV9R46z1X",
  "key10": "3DvTMXd46b3dBQY3SRtphvJLdZLLdRFRy88vK5YjAK18NyAuEaUHF9ssnrkSW3qEgRp5tbmQMZS3yhFWh4kr8Q8p",
  "key11": "xXkFV4YNCc23wp9ajwxGG88os1k1k233A9cMndrt2KQ36hs2msHitaWgRYH4HH4LgJjHyGjc95M7g5R5JfXWDXL",
  "key12": "2Cw1ufpWWazANorc8odGQFHq48DqarMY5dNadaMjCvKt4DYJQxuHpUg4AmMAHDQqxsFYGQ4GieKw7s28kdc26gNn",
  "key13": "2omW2JYptxHgizw49K1w4GiRHgcWsXfAE1NPFWzsAc6DBxE3NpXxfTCLVh2SvRdXg91A4NjamsnYNFrRytDGkiSp",
  "key14": "V6irDTmfU4MNPV6oFFjkL8Ky8YGZ44ntEGHKstbvkfKbQCvgVpvULUyecHEa17NxB7Pc44BgV3rN28kcgWBjt5q",
  "key15": "4stoahLPU6CpEVMKvskCVNDtet7sVoWykJ2Tip4rWReHk1ZLdq6PyCJqn9meH96pzg9cLqV6ZzUJwm2gr34yxGB5",
  "key16": "2HogUDmt3kFRXt622YU6s7m8LaBEh4kao3BNcmKgL7DASE31wQDyivyn1DfWCvd6KE4j6rEv4cio7q49jdciLVHV",
  "key17": "4zK8BD2UUWEK597JEKymoCHdJovL8mqxGDVdAxXgMSam6TfrzVq7XtACzhbf15LQkueLdWNEeX7dH2TP3rTUVjYS",
  "key18": "5N3rKBRkpnbkC7hJddTB1MCTpYpbJpCE8G1szUiEcgm8xY82Uv6yNqGYe7BmrBPXJuBgUANWKx4r8XdGeDN4QWZK",
  "key19": "3EkVAAj8fYtjKv1zTvGpfRjTYSvAZ1zceMQorEzziR2iXra5hyiwriBUPCmL8yayBgardRF5ChorM6YHxw7wJpT1",
  "key20": "QMxxzgw3sXAbPtCgyPZwRVtXR1dDjx1433ieyPBi7MoTCSKYumhodfqnmPXzUSMYYqQ5ZjFn4vMqiR3sao5c1Dh",
  "key21": "5pSXZggfo7aBZ7aMi4XSj3rJUNJsDXcZUNZmajJmxVCyq4MMRsPzAskXrdCu3zRmLt9hBezfYpyxcVRS8wQd8SzB",
  "key22": "3JjaSf11vpFQQatCTPbScm3tXVnAYMvjQmFDzBqyCTc9jPdL7SRrf3HSqTvvvMCBq4JzPU27nL6vKxU8vCZQ7s2Z",
  "key23": "2ZvWmLykmfNxv15L9UKrDQe4nXCL44YBFyLxQRxsiVCLziu4nWxsfroBe4Mpj73oAUrEMjgeBJtj4kJC7fGHGjU8",
  "key24": "3oTxgoCauykmg6pWKKGemayRabu8pXFpcHPTziSLVCbgQDPtimidHr7mxwi9i3bdng47recBUqtRUwwp845eMx1b",
  "key25": "8uJQcX2KrHwtaSkNvQw5EzJkvAf8dDXeMrvmjra2uBDbykuHonhpwb6NJ9ynNjt9BCrELrBrb7j3YWYy8va9cZ5",
  "key26": "3Zm4nJ9BxL2pEnHcXVJCbt3FNDFSZ8vECnR7XdB1YfPhPdc2ttHpLJ9xdZSwcopcSnWDfHkXHA5NFboGPzrCRpKb",
  "key27": "4i2Wb54uAxYunuQRmZxEkkGFkewoeVhNdTmueY94u1ymSHAXtXGssZFtRyHyMf747o44eD2bCnr52kaExvF63ghw",
  "key28": "41yXD6RhFHvAQMaPisza5xWk4NCv1xa4yv7PHcdW3qk8vtKxvnJuaQs1nXHaBbrjq9kPDZt7o4eqGv29VSX2Cph8",
  "key29": "zu6hxrU9cf3JLq3zcL596okSAiap1ibXbtAvtHCWQ52hZfKB5QkukNg1sgRHzMYRLquvBZV84Aq9j2mwnP1HLnC",
  "key30": "XqHrD4cBpGeqUByBgyYeMW9tuSi63M3hZoYgtzzKA67k4FNbH4cLdG1veYjHMziLL9W5yX7KjdimbXnqXEsQ3u4",
  "key31": "5zQxNsGHYqAH5iAe1MiuBY1j3qCVJmnk1jWw38jxbzjLqLYqQHJqh2JLkXh5Guzm8iEHtQWAqzvbTv2nwd6eDcmC",
  "key32": "3Kg3WSJrirbxJ6TiVV7X6KoKoBasYGtsL8MtBTi7FHqsZwSRwyhcMsaToZV92fspkNV7tcS2BQ9oG9zPUxJpuucP",
  "key33": "4Fh7CeV2nAAttNFydQMsBC17qscPEaS2axxk7csaCeN3piFdx78NnA6KuzXCUFjEBzPBTfg3dFHpeBAxqmbu4a1",
  "key34": "43QwVEaYFXjv91czS5EiCxwBnEVFHVkgcUZwNyusUuqwjJhJ2qDGoTDVdeUAiTGxH83kPsfZ5hJrDizjkwRUTmQK",
  "key35": "3zornWm53kHNxxHyKR5Rx4zwncTducnL1qTpSw3V2stzgJ5Khy7NQhq8HVNbd88em8FQpd6X4AzyD73Zrki2N1KA",
  "key36": "GveNBACQ2HpsFSoqQS4JJ1Mp1jf3CJ6t4PdBNcinHkBTHrREuijhA6GJJqgEHRxQuoVGWzpjmr45MFM472Se7rN",
  "key37": "3yT26SY1zqK5rpQoaW8JGqTxed9VG22WuG23XphAbPNJbJxCCXUqnd4UXQ6KZ8BMYMmrTz4ajS7Yfx7vkmq7sj31",
  "key38": "Ake7dFbssDb1Tm9T2aJuZQDGU1ZwtTeHr84huK5eW8CvEgew7g2j9D1oLSoEn28xB8GwCtxQuCxhTGqD8LZTst7"
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
