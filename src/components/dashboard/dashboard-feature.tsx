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
    "4GhJzBjyVcZjktWMGjduS6CvD389xJHNkCu7WsH76ZWZEwCsVAb23qgNzhs6tPYABF6ZJNzDZ8rt9RDsQSFGiVre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KSMuKJ4GyYhRwqC3M2o4WtXgecpASuV31q3sfadArjBHBsQ4TNeYqYXV9iH1hBoEaPVbd6bxNNUrWEfkkxfHBkh",
  "key1": "yL4p4smZueUisKFCgVJQ8BLwinjCDif8gbn9u7KsKa5Dnf9DKBQbKsfm3mUPBZ3hg19BMCkN6cutD9LfVhxeXBV",
  "key2": "2bfBHxbUpS7tmQAqajaqjcB8nBp9SdVZ9To53HPi7sjh2nzg1GfNFe5SpjyDPByFznGr812GaFWj2vexRSkixEuK",
  "key3": "XxhPerTyBTm5ET7Pxgy79tgS91UxAm6BkVh7j79aGM1AQcMcMn8DARcjUpf4d2hLtki51MiXJWmYCVJ9WCRMmqV",
  "key4": "fFVzQpkVopqevNco6qqhUXAc56UqeP7GPqQi12mUnaFbkNpAAP4JAuJ6hLcRBm6HvtqGta9AFb6N1QvL4uZqWai",
  "key5": "3PWTVBT1FXpJ1iqaPdL29V9W6YUjRGwN3D7eT2mmUfaZnsqvU9pAmwifBRWcJ15wzW37hp3QsFptfwwPRUV4jfpL",
  "key6": "2964DmHu7sdGNLtp6Jz6gfLHyKWckJ3SYS5kKeDnr6QJ7VN1bRrGqaJrMknE8v7TWAHJGxMvmk6MwMdYn8D1GHVY",
  "key7": "3CST9pBr9MSypLsT9Hn5xYVpc7cBn9osk3aEY1m8dQPP4ahd4ES3CuPJ8Knxt6h1WLSkun5Fx1SjPdzCL43rpeve",
  "key8": "3RvquPp1gcWNKxsgXcqser5iG6Nq7HSkpikT6KKC7rzDTiEh8jXidS2VydeCXMH4yWGKPknxyPSrYKV1j8YMb8XG",
  "key9": "2Wh2qUjA34wXKtw26AXhWKWee6Qx7EJTP2FN8nkABbapUVeLEjoGuWJCeSVTwmhoT9GkpwoCb6PxKAxCLTn3wb8u",
  "key10": "2BhM2CvxUbykmpL3dcnGRxkNa1KPRrjD3WkK2KLrvEKyR8Lyocq4ZbzPnTerSmfro3cxjRjjtvgnzQjW1TkER6j2",
  "key11": "4gkjaF5y6vZZeEWNizvo77yoTNjS76R42iejk6SwRoUciitqhHep6eKaTa9QNLaCygioSKMsRV9ZyTvLYnyFd9Ph",
  "key12": "4PVZymqcaLZAJALh2Di7QhbDdnPM7L8AV8S97u2GNWyC91m5fE9yPe5BZB6toyHp97wWwHCoYx6WRb3vvsmsCvpH",
  "key13": "5fJHgGKfF276MhJjif3oWtZzEG55Tsgd5DyXpG3svhDKaj9nKEg5HkRs84SbmmurRAojKbqQJ4Q2feu8HBXRJA8Y",
  "key14": "5RFty9RE1PuEgncdh7uTs8tVkH6msPgRCjAYvK33VtT3M2cAGHVC6vxndjprwSWQMHJneDMU8mkgcenPgs3i4Uny",
  "key15": "mTNDc8oP8YPvmgBQ5cni4gCXdqrnSezrDv4gU9m9uSaEcCSh7vAggKaus4b6qBQYwm322JhGifgphgMmec2SpXn",
  "key16": "3cQKajQzHcR3ShfLEJGTfj3tYzwjz3iaVPiHK3B2YhoSU3yKVgBm1mZZxhDwmwTLwQuXVEbT31zvmGyTW8nNycww",
  "key17": "5aiekcAt1jwdKaY76L7jyitSdCo2jC8Z8UQtBW4sctPNBMe3WB6GKqnRLRSm9afdYye71HYqaFUDD2YqShYmTB47",
  "key18": "2avAZpt7y7KXkwxAoW2hYkwYx8sbygaF6D8mLRzaD8pta7c2ExB8BEHaBEWmf2jHLPSWpvWdjK15rryJAFYhvbK7",
  "key19": "suHNQVWnm2jZryv3mCxiFsAxeM9CbxW5aNKahjtD1gWDmGcKQejyhhRuq6GSrt1b71KLDgKytGP1C6GJZgmm1ea",
  "key20": "2WFL79WCtZhPCxJaMJh43N24wCZmGzZ2BZhHFVKUXjd4tSRxAWPWnUjxWaqkMbewQjHeVVvC4vcVRuiMjrYzPL7c",
  "key21": "3XwdEM8j2WgyXEpYQFv2XNp5A8uCc9CGQp3iQhyiLAimvFrnQWEJysYrBgy2FQKvXTSSyw8EfMrPye6FhQWdpLbG",
  "key22": "5zRmL19WfS3bP1aKbWuyAv2KCi3455R26YH9gAGKATw2PCd8iRMA1JTANnc33XsgpPCfxNET7Apvii9x2nYhGWkm",
  "key23": "368ESCvgXJvTam7ySFraEUTzgK9hPm24eaPDKEfe8qgCYhB1rx1LW8yxddAtU11b9nqmEUy3mei18q5jTzxcefZw",
  "key24": "4AsgAkaKASeWXetbEs6N9SkfBFT1YANuZtyd9F7hLpqRaVD3ndBn6r3Aoft4yBn7XVdVviKBn2XRG243ggBzAYKc",
  "key25": "3dDMxmFiNkkihsX6v6mpMHAW9XKt7aeA8o9DzseFjsYfeiJPVs2G3aBUaT9NbzTNqbfycD7wsiWpMQhDod98iZ36",
  "key26": "2gBTnorw5UQBBJ7VSyiaAYudnuqaL43RvZZ1iMU8BWtJ8T4TxrWRCTv2X3hp37T6pt6pPvToPxA5qdTLvCrXF9oB",
  "key27": "3Sn6vwTg5vddeGNjZVEHrEWqFdQJz72h7hTrLDdn4nYDA2FpBVEqee4qpr2ZqUPdzZKTLdWuGEwJZcXb4Bye52Xa",
  "key28": "5kpUqBxgjBxtwhfbZJbtiQRRdH74sNZJQni8xzbV9YTE4bYLkXa4fRx4hsor6CtU8EnumG21BnnjqPaKA84BJfUw",
  "key29": "2PVpVAaNZMgGoqtGd3MSGeAveQH3cUPsGJvfzbp7iFX35BrXJZTbTcCxPu2YE6mF4dLA9Aivu9XoGCnBqtdqHihf",
  "key30": "5TcYbJhLqK15DCswmDdbp3YXd5UHWBtsvHvb69umUNGyyQCM7sB7M79PBdmt83rPNmxjRdY8jyd34bueRndo37it",
  "key31": "4spDqKi2929VUSQrhG8mifRT5nSLGQmv9osJ41dPVP8pqtGNaUDrp3UoBV8HNJZJJAWzkVocGtvrto6dSJHND4i5",
  "key32": "5TUtD2rN2pwsZfwhEaur8BLcsq6Jo1c5o1J9M5u5ZqXKtAEFHwiqJLXPDJ4cu84fYi5jfL4PhcqqJqZfJJ7nwDUN",
  "key33": "2P6HEy6jWbHnKeiXDJe3BEzMJkVAr2fzNNMYR655UTrhr8wqfZfZTned4t316qt3e4M6nGNmNT4pN13SnUvHhhWf",
  "key34": "48Atu2NCEGEiSh1wnvn4b9hd2fpuw97cwNeMqqWfTB8Qz3gN6p8temhhDTT8tG1tNjseSgNLpLn7WivuArndcA1u",
  "key35": "2Xp4T8p1GfFo7Hi3MVjuSXMquQPKNvLEJBJK8PvppWE3tXe5DgZ6QcnZdBXPmALLGVXbUr8wJSaNB7doV6mWrQRk",
  "key36": "5ukaX75Vu8JYsNc6cPMWHV2ekphrK6X77ZJaQDinmG7A6fHvrM35enQ8e4QUjQ6HLiS28QT3BYmxenX5fDAAZj4h",
  "key37": "4UTawmgSpduLafksDFJfZQTUjdfjViaVyauoMk8NygS6Aaopo8GhoPLwh5DKR6YKkk4t8WznkTQ9MhTE7MXjEyzG",
  "key38": "5NtAqxyWBcAeEdGDKzoCycND74jwmkuNVckzdxZ4g9Shpo7xaa2vNJZjJiBkiu27KegiAcfHwVhCRwAJ2CbeacEg"
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
