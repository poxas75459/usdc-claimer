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
    "5qMN2EDphhHBYjZrEqWF9Nx4ZLKL2kC6Tf3bQyvSpRGr4dh82yvG2HMNa7RxJS8SgFHh527n5qvvRVqwKriX2KHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A8PcNmVoN5T1t9vzY3MfHRw2EZ9Z3WjyJXFamPd7FjrG5s65c1sKqFwvpXbD8PkvqqkbXaDomdLwWRUSj2VBrii",
  "key1": "5zviVEVW7aD1Atay8pwYwqTQaCtnDBGr1jkGV3cZ98fzpJhDsf5bfJwS2Ca6Qsg7SVDUATsdSHupuM1tsNUy4QDG",
  "key2": "34V2c7ANUEqkChj7tdU5WinqLZeEkMYGQ1c8F55BdNRRKTqgi1eXG9EkA5Bw2sBzxto3ctmrDL4bzWvfxC6838D1",
  "key3": "49gskH9tk3f3atEPFeUWaDBf9PChqM38Sm8Hg795oNyWJFHFEeWHRftqNpTxLgQKuhqLdw4WGbmpCySPFZpz4rsH",
  "key4": "5kP56cF14k72WUowYzUUffU9j9DYpK12oG7agyCnR8fjjUuTcT7dwWzjEJWBJmWpuDs5GKVBUB1af7dpqtpRGcBm",
  "key5": "3WNyes5yYurv52JPDMEo5obzH99dQfYSdwMkXijDYxkp4XTwvVE9hymHi4qdu6d7HubeayrPTHPQE2W9ESqet3iw",
  "key6": "5cu4cTPkT4tDSdJygkJdw3Z61Yp6MZTzYKeCDWTWxUNUVVazapvovHqBs71i1XnifHDKgi6eFP7roCFMPFRskEfh",
  "key7": "5nVK9vTkxqFoRZYiFhbDivQvAb1BWpoKasDkeQDbbNdY3fcto8SETcnxQW4T1mtypBFYFGaG39qyQycArTNc6KWQ",
  "key8": "X1L3gHoHok9hSscxLzRs1GmDoNx9eTyuGhbEbmaH3txcmVYput1njxeT8vkRJkMRUSgMfsw6ZSXT3K6fDwrnNcS",
  "key9": "uPyeRVgWPeJydvn5eJC38MiEv3Wj4qz7gsfzyeK88RYMcTVrUDEsS25b8JnHJJa7u7mv1Bct5E8Kh4eW4A8Pfvw",
  "key10": "4rzLPKCFKX9gXysaBkvv1DYtyZqiUR4euGtKt3QbgeAETW2D2xgHz4hvbGaXHNFytExS69C8nAZGfJ1Lgh54n9jy",
  "key11": "5uqEBi7JtdCbwY8fxvVBRS9Fe3d865QpGnaTtpokBUyhZAa8HQ5dfTq4pSETcXJbpLS79pQPumnfY9Syjvg3TFWY",
  "key12": "5Pg61PTjWzXpwtWNdztVRStZJua7Ue4Xn9uiwLawwEbSvm6JWuTc5KTcjDvoAYnwviUjtJvDiCBQbTQMKu5xadSF",
  "key13": "3VdmaThthE61bFvj29VAmiy9gefyRtgyKPJ3mDzXnhBPQoHqUUouxPNyhXxi1nuJjpYJ12BMJ1CvURJ17xs46MAr",
  "key14": "3H8x6hggJErVCBAC519XZ69U8K3ck5TXYX332L4NSroHy29AnHnvXBEuSJ3hPoqou5p2nibeH8hmhBe8tVY73HZD",
  "key15": "2m8prGuvWxLVaeAhycsEFYw7XP4TTt82UinEKBZa1LtRcsg2iocyNnfLWuBZMwgyRDy2eQRDZa1sNMvbgr8aa2fz",
  "key16": "3J5BxshZ9swcREe55yP9oSZtCmef8JRzLgPU66Ci29STRUFfhhFCojhcC65RSs3VT57nDxKefbJyJ1tq92ALdZHx",
  "key17": "4zGw4xJBjofzEvWuvX5fU47BXUtdZKhaTvFQmw2gA8vm4pn5XMBxJRhz9nW8TtDqBZDExADnrQyLa1qeRV9inysS",
  "key18": "5rvLCiyFqM9ts7UysPXjZXma2XbPVsQagJmVgZwowyK4YGoWpsrxGH86G93sWoPWKWjKnGB21pMhQJirSp9G8hXn",
  "key19": "2ia8ThQCewu82ihH7U2EvqTXKb6AtzLZBrT7kQagBLGQJkmJR7KffiFd6tYqFp5R7vkxgDZPBnKFJbHJgauSDz8B",
  "key20": "5aNbJPPDn5Z5EsycSjhHFL2cUdbCVahZVqMUFzXJmJVkRMptMsK7CtTxEkvjENJKkpCq2niRxvxCyLKKkiaw7oKH",
  "key21": "4uJKZxEwNmN3Wh3tmRghXUgj7pAghg44qFP7ZwfYahQhR2TzfM3GYMfWVa46WkXVUixeu2AxZyLV7EFUnPsyHBWP",
  "key22": "gkegKYpWMkBi1PCYycPHUyCr3WLdzfopzkm7u7QVwztdd8h2BQuEdojWykjgiHRCs6KyKP6D1fd9WHpKzWsgq8h",
  "key23": "324EVF1KRE6zyrqt4kQDtz82cakr337CjrvpE5Jq4oiyEtd4HKiixCFX9mX4mxcytUJ2uGBTvQdwipCcWPpzDN6j",
  "key24": "XYD5eyp7uiCTK26rmZBkubxwWdi5U4ayyBm4a7FNgkSftQU6rzxNGnot8KNaduSnv3LiLcxQTVnmW9Lej1wm2p9",
  "key25": "kxxi6eDYR2gDzytV7gSHs6MBbEp61pPe1UrHjvZzit2dxfP3vAU84iBNbyVp1vuxhabV9PekEH4XYEbX8UaEL8N",
  "key26": "5VDFJwBDJZ8qKaPJSXxqGHotGBXhVNA2BcQuzadvxJMkv3rszNXZBgRJF85bgMhKU4SCGdHaGQ5MJd1PQwsn9ySB",
  "key27": "4pGDX78Mzq4VZWpMXt469Z9ch9Npbe6nQ3H94hahgU9f7dAT7XkdGGrHdHuuUZ71qxThgerhQ94mUCG7NZsd3er9",
  "key28": "wnG35VSzWgkDoRdH6t5Lx9TNDBvCFwswq7Mw8cL88tMv3nSD94TrYB1gVyv2DSina6oGJXvc3G5xVCLxya39VbQ",
  "key29": "2harEzg3deqv6fpzRsb7B5jgAHbpsVcJoa79QPdQFapC2sQDCA4KuEX1j2BDi64T8QpfiXMX6WoKPNxTrrCEGURn",
  "key30": "6tzCbXf3ycLRM3auvbc9fe7TVJERRWTpV5uUPe8XQ9S12wsMghHqGixJCm5jZxKkphmbqHjdMBp3PVxCe2a5fQu",
  "key31": "3TAPLpT52A6U4gy2uWyiZciiSRQmUGgFHXQhWQpxinHQjxNyUwzkfHefjdkTh4NFkPFZ6wYwsTftpwDuc4t157sj",
  "key32": "uAe1QPqfbMhWJpSeUG14tfeFdJcBcsVe2wj75FgxX5iFLJ4BKG62dQejNNt3UfA1es58yPobdYCfUDs8nooKobi",
  "key33": "3mf7RVwkiFTfave6c5aTnyzXJHoKtpDtymKcwQZpyzexQ5CwV9mRcSHE2Lagqji1a6j8cDLUAvQECg5iBvkJCECh",
  "key34": "4HQTaxDtBH4Snp6CYboPks6SbXDnn6ynjPAFPQCkYNkxJxquAzRvdweSassmZ284qz6pG8FFbMvNgec16ycsEojW",
  "key35": "2noKMf1YzXSbZvgibmKvH6v8XFppMFNYoWeanUZgz4dZuMTXjXF4AMxmCAasQ7NdpNKCpjFCYVh3URFpGhyT8jEQ",
  "key36": "5gNMYeL7c6oF14re77wxRTpQVTTywK5ztcmBW9UDR34T23KGhP7EYDqy7fHovhBxXSgJDXj7X4YmzjmRhW32dmTW",
  "key37": "5kizQiGCTPdG2XDYeF337Au3hJp5vM2AdRStLYPsJGDig7AvNER7XTVQsJzKwks5UZdixHDTpn59eRdi8Wprc6Rs",
  "key38": "2ej8zuBqaGb1aZEJt9mQwW1U8M66XtnNXzyjYYWFBR5a2FjCsqNkX3KxGBPDpXU11ZQ3AULhtWBaGHaonp4dJfhD",
  "key39": "3ycHNyYeimsDoeg4Mb3kRTn7ttCkTmP2iRAo7NrhNbvCkDqe7cwfReMZyYLUtKx1ToP6KRRErRZgYAoYfDJRArW1",
  "key40": "2RRTH7WTbX54bf1xYf48xW1uumGwCQxRQYsufHmcS6fxgi2A1FmfTRKCvzH6vtFsp1VzfTaLVuHJf8dCQDUYM62R"
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
