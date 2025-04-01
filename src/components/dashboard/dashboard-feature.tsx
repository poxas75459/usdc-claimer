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
    "VDuSFfZst9MDRCJT9J7ccG6aDUgMTQwMuKstBkjSNi7BAfD3z8ZttgRdLozbgudHerUyiWHbDsNgYou4pgZ2uZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGoJwMQpiuN8TjXQiGiwgJdjKycThPYHHyckKhoSzrcKuo55KBHwX7RqJkRJDaXPMA42bQ6WDLYfVq7mVsRSwbL",
  "key1": "5nrDWwFe7Jc4RTMzjhjaNajF6WzNXQ53TMhyGgSKCD79u9DkeBpS4i4jjBCPUyVBympBatmApCuRx88bzDtoCTCA",
  "key2": "59HpqijAFHxKAetXHUup5YJt66FSikhFdSGKjTjoqJbGF79Yw2wfcQTR7qjGCwjLNro99RXeAsaof5F1NnyYjRti",
  "key3": "4gy9JuPykaQ29zYmEAodBGoXPtQ4gx7QHhdNvstUGzG1QFcd4eobj7h2XSoqS8u1RsxM3BuGHxAUAbTd12h33hCm",
  "key4": "5G5qQ9opp1tcQrqEH3v4H2Na86tdxgMBeB7QBpDxAjP3SFpDuokXsDRWRU8nUiXYQwtqK231Qhe26CECwaj5EC8q",
  "key5": "21QkcBq2NWMvc3NW8fAyZTNUYp6foW2pAM2btQGyrUqEkVgPKakvnwnNp15tGxe6mhsxQ75L67YZcgYGpNYu3e7E",
  "key6": "49KA9mNGWgAnqeLhAH78iMHNgL4JVrxR88GKC5pcGht8ubd7rzsWvCFo7qdNT4y3auJz2g2HFG2Kp9Z1EvxYsacF",
  "key7": "5vFTyasPzYf8syG2wociptVR8NySMNp3wN5DBK4bewHETzYfEvqqbEPAB3o48kcXFxvMAubGBkNrDtzLvDDRFrt5",
  "key8": "2akBiLHub9Zy7b3deaiY944TxoNr6b7bjnCRewvKHtjEsZnHbuoWbxQje9AxsXxfHid8RTjNYvzU4mTwMrxzu49Q",
  "key9": "WHojHpeuobTYLa8JjqnXxLcBhSmDVGMs3H6K2pVqqEMt964xJtBevmZKtTwWxPFSU1Wm2uwwLHG58adfZCHErTN",
  "key10": "5oudP1Xrys8nTC76sT63qN7B7rwiZSZW1bfS2avJ72txwAKxLQc34gb3mn1WCKJRc5yowWatsguf5gJc5HJQ9nPp",
  "key11": "4x8wPgvKdgYjqbrtgugWjqyz4GcVeAG2f4fRzcsXJJTnLzajqnELRwH9vKqo6itD3MMF8YbFiDiA7bfWwN7cmELX",
  "key12": "4DMU2HhCTN9un1F1UkxEf1tb9j9ywDGp9JNc5rSDKVCtFfYGwN2CxmEQRa4g7yPmKm5VWSLoFeGkySZr5bRLm6y4",
  "key13": "2N2GXKF1k6xYAyy1ziH14nh32LMFfDaWhyPNwt1fDDZa8NexUbWxSwkWEidHBhbkxBQP4p3EhJv3YSfnDrpgXcPK",
  "key14": "cnp64PDnrxkXXMxx3Dv1ZVp1yCx8aFZWaYMkPW6f8ausDDv3BhMxw6BcVCKmwdzsmBie94ZzT81FTaP4oo2PzWN",
  "key15": "vGVuYLcE5xg4off6AsouNWjRHothT3c2keZT9w8w7a9KoPoTcVnAnTZRKi14LwcQiTmuTa34RMVj2JznsV9MLmw",
  "key16": "24NTLEEnrZQyKJ33g4sUV9YKEy6JNqV3hhgSVwfnUSUZtzJhBC845fSNUTo4n5oQbYi6CEPM7FhyRoUCfbZHyREs",
  "key17": "5HJLwc7ysyk7kKoTEM6tHMiusze2c11e4fDu63G8YzjkSHUdFVAPu2u3L8Yb6vQwtMZh15FNRsPNc7rWfmZSRrnJ",
  "key18": "4eLZxhxhUCbQLwe7yJ73zqMhX4GHHXn31yRiS4y5sLprs2sR2k26kbcVXWJwp5nVUBXTfP5dHGwKFaEYZMxokCjG",
  "key19": "64cyKJHnJpBktagj7nwEHiEsRNVvPpHhTsdqVoi2sC8LQaZmQHJgEGqTNiCkoJ2EZPvorX4WqbfqUsnBzmwhHUa7",
  "key20": "F67eZgev8xAYBTqJtAWvxt7oGWPdzRfoJHHwDT5iDtAEFm8JSD31R6M8qqy8JiQ8sgaYZFs482zkBTXDWQrMKs4",
  "key21": "4ZvczTWqVbgrG3yqnFCZA8fvX8nyNYifyWYG1xJ4G7Vm5Npe1PBBx72ZTjw9kbByFXvvgR49WQVwafEnxbYCZdK4",
  "key22": "VKoxGYqoCDBnBZfVwHPfK52X1ksDVETppwuaZPnxRbhqLZHbBXfCEVaVX5YVTksxCXkgmdKScbx16J9fyqMDF9c",
  "key23": "36GZYRfyXfF6NSzctFts9RtSbn9QXJSjgdRPUjKoLeUhGdEFzGXrhMrQrwu3finfZYCEAJAvK6uNUdrXrRRfYgt2",
  "key24": "3b4uaRvsEeyn8vtzbnzFcW9JzdAUKzzAER2S97c3mS6xEpH5Kfteu8tynCX11hxXKoNBPowuUQiyfWSUvbq87mNX",
  "key25": "56Yy1xEyoHNee4H4CQUAXswcYPY9d4RS4C2qjEWpqiWBGkLs3taNtQzaVacd7nA5LzyhJEQoBX9qtV9UoX6o3Mv",
  "key26": "3UP3UwqLKM8DkoWXDTDhMrsUQc8YNpks9pZvfwCpTGP8hMAmAyK5f3YHw2tuVUytiWyGfvCoDv1rsjJjwMvSx2C6",
  "key27": "2MgqJWLT85LadfgpvhxoVHxFKQWr4k1e3yBRScBDqftJ5ZHFHLqgugHFD71CBrahZ3a9eZLA6TFr9gBjpgyPr8S2",
  "key28": "5FiXfKNG9ZY1Zo3MhxZPzJ22cdFfWzwcYLnq3UddCZ1heJC9QkZgER8oUuTAikUrveLLGPJTups8qE1jZv5zYH2A",
  "key29": "sUgjJwXhAoYZvt68hSZgxaVnboLm242GaEwbCCmc2zicrb8SALcJgHQH9zB3NsZ1jTMwA5omPRFFXgJkxDsCXrR",
  "key30": "56edjKkRd4vqyPuow5PqDaTkrQ3JuH8kmJJHqHo15SMSMqTWYoUQJtseSZmidg9z8ahhhzyqvKR3DSQPsE3QHEwc",
  "key31": "ZyMC6jZnFGTLhHwVAUa8d8Rumir3YaCDGS3GwRzzP7S9y3YNFsGHRcMzk1baSHGFb6Urh1heLzEinNgqcfaBsTq",
  "key32": "2X29bLwAiqrrPeF2rfY8w9VgaLomGn2FML3oUGyEZEjZ8RUxiiztcNghvinosQRfkxyBC38zrgS3dG5kSDo6mPua",
  "key33": "5ZzaSJACYSrtsKuW6cm9ViuNFk9FP4h3ZvZtyw3ktwFyNXTZva15eCrsNLfbtimVKADL5KQsacTHSbkPpazuic7Q",
  "key34": "5my8ozKJuW3YPQQsoNh3uUxxUvAqKDk2dcthwKoi1HB5B53Ufka3x3Wja5X4ToNq2oNXYcb1ACJ4RcfTDTWfE7ty",
  "key35": "3gt1gurLJc6vNzjYQGNaPfaLGKYUQroaxHwoubo6ExQVCW2AkhVQfNCtJuTy3iqgZf6NtzvbnkZnuAWQ83gMQCZ6",
  "key36": "3A2HVACp9FBuKG8UJepteLoWoJQpsnr1jqYWZCaiTKgs6QLQ2AaXc2uuLmwNQyhaSekKp5RCzDS1fpNLtRmjiEa2",
  "key37": "4sSzNhJPVXbzHQs5pVraYXDxjB3MjN1W6qp9bFQqcKncebzWoXyTFjoGFQCahrcoawUvGs8BKsJqJrW5e3mzLn9T",
  "key38": "sDLdxzEL24tdcfc2gK9Z17S7hmhoowoSm9A1DdMfybFaVynVBqVBJBJqs71tsKSZA6d9bwqCLmVjkDY1BL8pYKZ",
  "key39": "5kj6u6zzGFd9jYTQyzGMoMdtN2d94bMmX4s9JG127s5MKsYMKHMpHRYq8VcD2wSKu4oJoyS342AA6rhoZimUxYSo",
  "key40": "3zRNDxusGd3jdGSctgcUPZQ8iYYbaywEHFXWDQmNtzUExP5ctB6kmBMgj2KZy27iL7V4c2HF2FJgnJu8qfXfAWYG",
  "key41": "2bCZx1D2hDKc6V6EqeyezQECESMj4bxpBo6aHWj34exo6xcNdvRrb9iLP7SaBkhjLLwZYkxjq8bBMe42SdakPozD",
  "key42": "3GbJSruNnEw5VyPGk8CscA5rXLovHNnmYd3GuREiWvwQUJfBaTDJePYkygtoTyuc2tsdrNEHdHAhTDfKJtbJjcaA",
  "key43": "5Comoig9kCjYV3C3yXMez8zT8bPMgQ94oPX6emkNadp2Az2jcT77oYU7kzL5UpQBbKhnpxYianBChqSrgxH4zveD",
  "key44": "3mRYz2dWGkUf4Nibm7BQkQdKa6eRaHpjg2QCAFwLLnnzfNup4eufcYXm9jWvSuJ7RQJrUaJa9fqxuekTvHbeQbFX",
  "key45": "B3M3ofra6xgBXi8fqUKPdpvdr7imejoGPPSQ62exoMXQN7MZRE4bQf3ye6RXWjoqAhkfqV5n1GRXhMDwJHUBwoS",
  "key46": "5pbFypmhPu3ScJxjZJiNntpuQZ9rX7ZGGY9uSsFy7XVxnAswVJnoncAzrBVYfDxX2XrB8mdvKWN5oigVWkz2jDe5",
  "key47": "2ZUH4KZE1AQYUrWQFuz3TcZeaWs8wjnq27sXMTkuBgYQzVzwXx9k58K2zZTgVuQPBMaQV8QND8g4F1wF3oWLug9U"
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
