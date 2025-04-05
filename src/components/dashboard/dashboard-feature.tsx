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
    "FtAq5z5BsJZ3vCN3GAdcbDWbHk9vdDEas1EhzSpT4hwm7S4DHMXVzkGezak31APo7j8kN2sXvPctwfYqJjfm4o5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n46fUYvrCQucLKtHk1sxVrWecAfST2oLS6NvuzHbnCJbLEGxj1sF5sSsmRb45CHZec38N5DPofpjLrLcEB9Bow",
  "key1": "Q5yEGPMJP8GzTELnQwedgnCTQC773knZbcQTHDB7oseoVVXXkUgGukiiytMBuABMEMHqqwqJnQTRs7HbzuhwSxC",
  "key2": "2UQ6cJJNaMQZ45Pjs7LxPqCACnvqyRCuzzQ2aVpQhLqE9syByQVEAkysbBPShnBthrbSZKxnNDJLoaDB83MPU4qp",
  "key3": "3KKrATtdJXhEL8KaFVVZmBuo5hRasYHyzMFYuuZrUTa81iaUJtQRFKM8H5KP2aPzFW5KncBDTkv9k97rsuof1JRh",
  "key4": "33scdSTfoCfQ66sPG4mKXB3wJxfPvkdXtSJhswL9sscEwUxudxxnzk24b3rbErSZLzgwDcRbXLKUBZRsr6tNqLi5",
  "key5": "2JtiAc6XrQGq9Z26aQpR9LqHUmVLqo5U1WsrwvtC9aQKZqVdhoresERsdvhUTuEU9Bfssvfc4qt9314Yu5ErJktk",
  "key6": "5mNySjwHdCCnGXCq7A7W3KaZnje85EHjTUnsgFo9xoVXtKQeaDCYKT88rjBj6d4N9ieqrBWvUpFRaXii3BWtZiDS",
  "key7": "2dWLgWdoJ1a5m2RAatTkdo7stv2E5ypmx563zmo2PPmfDcfuRZWc8CWqB41uBDqnGCxjZXtdtaUrkp5Q3AfAfbeU",
  "key8": "5ByeC4ZManX2RLXcZZXjzixdUdNNpwrjHvLjrpHAbMk8td7W3813481q19p2vM73uvcJWatDSjD1W6PHm9QCa7k1",
  "key9": "2kiB7hL2CvATidT9Fs774AnBu2FSSG55tRuYxqFwakZoC7caDJQtzpAmpGDehcGtciieZyF9VsXWx76AkHCqcZ2",
  "key10": "45fZBPtBngFCJm55coyH9T8i5g3ZH7NbKvQ2qRBbAqCUKGqzEXK7bHQfvGCef9RU6betq4bKiVHQrdTfFafYyg1w",
  "key11": "27CM8eDyjVmAeQR7PiSEsX4Sj4W1WxUTTLJTaFqAUvVAxJoAUVWkyBFnW9u83E7XCtEweyWf8qDkakRcmtsWkAsV",
  "key12": "2r1PvcwWEzCCSAbrrEQwzLt5roJUX9Lbkm9qE2AFdMw7Z6FQhFDZrrjvm5tbyp8nhG9vhwkM5uDm4y7GPTXFqt33",
  "key13": "5LT6zH7NyKtu1iBdXWhggbDkhcRx7NWnsype58rASNMzgPvyz9ZZEMU7a5JQmfVa1E8fYno1F7L1877V8EkaE2fu",
  "key14": "4ZMotDwm6SYTurTUVYCtnydtzadWwKV2q4BnsDxiPJmpcHKiADkoTsUEaRLnMPcjRgzxrSgmPfwB8qETsxPP2BWJ",
  "key15": "4QajjiMcBStbeBkNL97wvBmNPmvex1SfVUu1F4h8z9Ff7FZUN54CD9EAS5UyNdsHCUFmRPhUuS8CANYnZ3HBoXJV",
  "key16": "pzbTLVLmgQ3LCdmA9Ajfv5SYJ51mcXQw9GYUhh6C5JQgF4XofdBCoozt79oEdMUQCUgMTxk9urDcnQVKtbUTRfQ",
  "key17": "5amPz7tNwCmDu1UD4aiSdAdoeyWrjszJhuzGPGmiUm2qXVjHNfmbtZujJVyhvteQrWQv14pgqvnHAhB6CsmiBZgp",
  "key18": "Vk9ThsfAatpCgteviNgw22J5zYwFmSVtH2staKUXG4XK1D3Mw4MztHp8XTpaCVh4Hhe7gpqSRYaQsPFRwEdCuWx",
  "key19": "4WxjrAL5hZcJRnpLx4Hwo8gD4dLuAxhXpfWfJzcjo3G58RMQ13xMMCjtAMgTwQRqq1tSPSiXkrJcHannx3UNDBHk",
  "key20": "3bHayv91wTccqXKYZ8QvUs5qm5r6EJEiuMiZ5q3LgJ3y5dgVf4e5jJvMvRbq5GdA2CQzfTJfNxdwNHZoMN6UtuqL",
  "key21": "3BwRosw2oQpNbpcef5EXVkGkHYXhdtotVWiZUwxz53PwkA6ouE1U5S5XvtWGQWyUdyK6yHjWmi12XjYmzGbtxXW6",
  "key22": "2rSxxKvGrVp6E3XVJyM2ibtD4ZyCxigj5MhwjfBwX58kNGtm82yQKBETARHQuRqwK2YTViHntNhavSkKLkAWqAFo",
  "key23": "3mzMgbSfGRvooudtcJ38J61KG8A2m1jt2SiXcYqcWMz98ArYuYfsQ3VGDdxqR5SWwd9QdaYv6Xg8tgARR7nwT7yK",
  "key24": "515NFPvHtju7JpiQC1wzCrSVBDexWbvC1FEg43s8tk7vetA22VepJ6rPxUDv4Kx4SPGecQ9apAn4RPrAL8drTmmr",
  "key25": "3XzmNDWtKm9f9Epdp5BPev63aNRU7h88XDQHdLY1YJTs42FFaekwGjZwwp2CjSvAnVpuwxZzaY9YAhBLXroYJTyT",
  "key26": "5SrGLfhbitRMJN9ubpdGzVayzii4F3QbghxVGMU91xAHRVt7DRfoPV3UfbnFsWzqZDEjeXyVtzBAqJ3tEfJ3uFPS",
  "key27": "3J9xPm7KR75jH7JgghAR3SnRrF3j2M55oiqe5yjcLYGmHozSWwqKdp1JbfTwmLZ8BJp85yVEnYduW6Upygxe9WFs",
  "key28": "5C48dRfNSTEdbE6HufPYkEEnhLa4nKDKBVvWr9H2QfiAFpKsxScNbo5969zENiY9sTxQ618fY775JchoMfZGKg7G",
  "key29": "3SydfqG8MetjHEGnuc4hi6TSHVnNNdKP5FW9XuVwpphDa8P7YDSJCbU9Lrm927NJYyT6NksRdi2KQkahJ2T72h3d",
  "key30": "44yVxAouEaNZRekuNyDgxVksE6GGm4chKydxkM6gXvHNE2g2kJKNX3Sk5VM51AsCzmhNzNVq2mQ7bnL66GwcwU5p",
  "key31": "3UfXQuTLhDJwV7XLdZJBHVUpWxRFor6w6YkWDDuyhxbQwG1XZgN1Fj3RNm1D7crpJu3cW8Dqa7GQopJ4Wstq3RAD",
  "key32": "4JikEMDWTT1oJE45fyjmzXBbETCTVUwWUKHSzAmL253HYa7opVnNokqw43socXorXoJox2JKwdt81fAVrNsCLjs1",
  "key33": "4bkYxCJs3pAsdRJp5agKAqEkzVRQbcoWdWkgZzPdUCyDB56fe3iGmtRGf853o74X92HcwSacu8PTexrYpYVUUED2",
  "key34": "n354LUxrm9oeaqmwpHYJm6HAdYp9USN5j5jTKi3qBpoyHAdX5BVfNSaFeCb8yiqNiZZCZbLc1fL6vvpiiSQh17p",
  "key35": "3KvgYkUEMa1rcKDW4H9dcZt4tcz2zGsqGYXtL8utsdp9rqSmn8boQzfDHZLbc7WCQzwdQ5FNBt7BBhYLwxVhKXQm",
  "key36": "3c1hLa8M7shDuXhypsmmaaYYStfAGA6bBNi7rGY9JS7Crxibz2KYaBLRn18ZmQusPZijq1AYAfrqPVPptkBEXkof",
  "key37": "4dm47GiVJMgUVVZCgXExBUE2TMBxVsamjJ48At9xhVbPmFvCcpBFiUVxzXbN2FDgMkK9PDQfvRPvfUZyiELjLwRR",
  "key38": "5SLd5QgpcujJM8EYinBQorhgqqBTmQxw6ZfJPhGk7XQr238LvbEzrj1HExBiuDvibwShorPMRJfxzLCH7fUbHdFS",
  "key39": "5ApukT1s8R7qAebcbDDs711RNHrNbLwz7QbKHvR1qcue5FPip6Kv6qRtraLd5tun9oghQDiMgu3fb81ZxHif4gPG",
  "key40": "51GZKQfZhGHDLUdQhMXfeCp3EwpPsiw8sRfXnmB1aYhaoUjBmoE6aSHXdXi7NMzNgpUhhvvUt5wqB7DxarTiA7MG",
  "key41": "4mv6MJBLSSgFLDVt714LiYLjqeeXS1hUH22zE9Xn4oedFGniBNfSa1wscanhAcLZnvz9JZos1qXCJu1s7hxCDouH",
  "key42": "P556vLHmtuwSYXrD3B2S88ggNQGvnXBvpe7mKVm2bScjxLHoHMRQJJ394y2qaZ8FRKVJk28B2idUvUDSgNrTWTo",
  "key43": "uByuzFPR8td9q2NMWiBw3PQ4vxHaJEECMx6Cre22b7bdPTAdYMCmSrHAue5hEpJf95DVgVJseR8Lm6FSd21z8AA",
  "key44": "4RysZRhrwYwjLpVFA37m6pnnmwE6dXpGhEwneVVLHQUfmv9bRk6FqyWt2K7FvLz34YYQgdo11bn9nRE67z9ryhWS",
  "key45": "5Vm9vvZPyC3xaVvDhbQEvUHUbfWKwDNmXDkPB2M9cPF4gA6ZyfnCvtXyFhQ6qyag6UuaH2hUm5wRy1SYdVBfYwRY",
  "key46": "4KE6pgxngo6ShZK5H9dETTksjXXrnG1d2uUdLxpffAPZGNHBFX7t3TmgBLUdDpwxBXXsvESF7EnFWuBcqFZZFpSR"
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
