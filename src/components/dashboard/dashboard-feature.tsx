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
    "3VwoSxwN2ZfsxLQvgcDXWPnk8DWHbGynZPPjMJDZYeDbXh3iHYMY9qLFyrzzPxyVcKaEBGdcqrCvisU8d8qmGGfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VYysYJxv4dE17ojvRJXE6UowKzZEnCqafLxHMfFUDPEkxuZM8CDQ2P32EjQKFEkiQAao6weVEdjUns7VJpKBcca",
  "key1": "6hQyB5nomF87QXg6viZJLXih7UKLvejw5of6dh8bE1qDVJfrq4VTnnSDzAuzPJW6sh4jPRZ8r4ZnsgoL4WtxwTy",
  "key2": "22YTPPVTekdFpSu6iT1dAxxfBiH83YaYo7hTA4F4NtXCWNjpJSpyKw31Ea2t7XRu36M2TgUAHYjB7rj4LJLdC4Xm",
  "key3": "5X2kGM4HGvtovZNkhSXTMYPnLw7Mvk6b12SFFvkrr51QkAgk8VokZE9EMNJ7E4fz4h1rwDvRyhKysAhDVoUbu388",
  "key4": "4Xky7ZUgRb31wxSHyKxN4o8Vj9tjvhVMPwPqC32sPzt6SyT687hDuVZe5pJLxrK37SXcTRdAo21KHLgNCN3mN37y",
  "key5": "2czK5JjFwu8bYcJs7CtGNAjAf6p4ujprDrfSx6P4FmrVjZ3WFWac4hX6S3Abp42Q7NnWEuW4Twp46pLsr9K8E8Gs",
  "key6": "5u9vj31NV6uZLqPeETg2kHn2MuJBybKJtwg4GSxNpVJyRf5TVaamdk8Rk2KSrayNsbgZVCnVNNFgC84HFVdYDQSH",
  "key7": "3JVHLgziqGpAxC9cB4G3huxMjtg7aAqEYJN9SvuaayLyo3Jrzs3sdHamMkCxfA7MsMFjE7LS4PrA845xjHZvXFa",
  "key8": "ibmxJyHSJwaZyDjd4bYFTgmvKj8YaATuvBPxDbJFcqfEVM9qLV1unUm66J46gQEiFqR1g2fBoiEhwB74QgGVYza",
  "key9": "5gmLgbhzfc4bzTisq8UpWVFmJU1XeB89PPKaLb86xuBiwrjt3c1fCp1oXJibh6z86ohx53w3pe2rFRNvdT4fwfUV",
  "key10": "3EtggG5nebscJGrJ5tCWSVwv35QWNKk1dv2Dibwt72ZcDZjZjPLB9hWFeZ9fq2WTLzWNQg94x6Ji9doSjLGSp6ag",
  "key11": "3G2PcCGQnL2fPuTdJsBEBEfNwuQ7WCGaeFwdQUrtDVfs6h3LJK7QTexS4LgY4HKK46atftBSTR2VaqZPmd5nP6wM",
  "key12": "27CpxWPnbuxTvFNJ3NyDAqyGRbgEuh69Gnx3dFsAmj8x46Rc1mh2Dfjw5mMRnwQRVoow3Gza5dAByG8kBXxqDLuz",
  "key13": "3h7pTnsx1b9WVq99uiPD8tJwVDepk6PHXc4LVLz9uSeF1aT95VAaeZwMcyk1YVk9GgYAvYuWrUaMQQqgudWtYfZt",
  "key14": "5G9qZnhpXvpykpL8u8jwSjbCUy32shvgCSTffYa5P5iuPtQHYN1CuaLch68sqXCKeTYN1w9rnvW7iaCYbqsfSkBg",
  "key15": "TCSMVuMnr9ryKCB4ARqWjKquB61nFFsZXnGYgVvApakfvJp7LssvWPHj9KbSodhajbKVriaFxTEgarS4MY4zkYV",
  "key16": "48Wp3QjicoYdhpPyTQCAwYMEP1Rsd5CQr8qiEFKtpVFWYPZieSNxc7mTg7xd1nnm4XpBh4tpbrPaZzvm74QscRGo",
  "key17": "2DwZFfZS9fQTJMhZwYcLtN7wXBKn93g9Po9XwYcFCMc92vqgF1k83UR7wYsDEewqFZifJ3txghGNBG6NS1HwjeeK",
  "key18": "4exTC5Mo1kvam5GZXme5WH1EXz1PviTKxeWJrPcueAPVvcK818MsmNWzQoojL69qPRAZJg8KxBtC1b6N9RqPdjfE",
  "key19": "vfUWMUiLcfNtZFiE87mFa4wMRDbG3eTEsV7Vu6sgqkUjYHEx9htMT1N6FTcV6dTCyqhKoZvno6jiWXARqzk8Rk5",
  "key20": "63itrDh5FPV7Z1Qdc1brziN9rs6x6Un4uPDfheGR8PZYNxncUNB3cwwMesJUTn7bkeCsL9kMwBtEMP4sBXeP8QBX",
  "key21": "3HoDCrQniM4CdNiGGdS3MTuHWGcHeGnZu8j5wNMKq3uvrxXgBZ8kBNqUg6uG67bi3kVxHRq6DZuouZE7BxNFnNHq",
  "key22": "5sJCHK9CToanBphwjuTGLxJ7CmMGSY2ixTPHpHzvWAbVyN5zdhnVWz8i72gWcTKPdBt7b2nPfBNdPqZTuZy4Pn8a",
  "key23": "3USD2iS5RsHbYnR9QUkignX3A6Prxe25eGG4fApBBcc2EjNTsLGGinm7mrTQdu5F6yCw9ZBeGkzqGtGjHoKMQoJZ",
  "key24": "622xZRTuk1nSjUfUVeE6i89aXywiUM4GHN1iVupAm7eVurktBqrxBb4Eed4Ksjre8JTASK5RxpPKEmUaMLR7mv8o",
  "key25": "f1XPui1PYvZMA8osa8SpR64EubwwBRfx7p1osQ9AL6dSvYFiwJLttRxf6hzA4RoP3huYqYzs6RV8dx4HSg5DWWw",
  "key26": "3fCLnrtqiVX5jgPaT7UoobBheDXsTMgAuKyyZrgfES8cpnBatLjPPypcXXNPi1yHGK65gBUAPbb1F6VBxYMvSFQR",
  "key27": "5RVqz3s2Ggp3R5LEfNPoUfMRBX2YRaKr3fbe2HW18zFWRRv2xFzGwh5g7D393nbJSJ9Rr2Bfu32xDxP4gynNt2BE",
  "key28": "GePusk7641t6Y2SvZojfEVsL9AmcummeDauXuTNkMR8v6TgRPqUvFTwNfzKmpU3qoy1aqmdp39zYvV8UdXWFZFg",
  "key29": "HQvpfnrqBmdqHe4DbkEMPPRUe1nWtD3BZQjsWHgDfAFCSE4xM6JdgE7VDNndTk8aZEqHG4ATiiAjQbXmWmviEWN",
  "key30": "2bueaBNAS6oqWbgnidm5v7QtgbXxEV9NEsPsyxF64158KrqbJdHMom7pDzap12XdPXAujLkEn9iNdWJjtqEysENb",
  "key31": "2SZSQwwWbQ56QzX1S2XitjYMw4Z1Uf8VGWDkJLgeHMvhvBTK2DL6bPY4cLB9iKRjAsyP3bHGaRP71LcKyUNmzofa",
  "key32": "2tBYjJvEQJVvedDLiWC3EuEo29Qy1cw2fkKHFnsVVdrBi737t8mbRoC5LCkvWxfrY1Tiek8mkcCb23pduL91rLT7",
  "key33": "4R6dPqXkF7WDsdg7CTthNYdaTXis2pKMFWTbrvzWF2rE8vzBN9M5vs7VEbtEur5Q223ax57EMDseQ65sRtupXgDr",
  "key34": "X5sNFbAqY4ZwwrzfDmiwEVQZzYCDbepyk8qTSCPyZZAKPUaMsnqT8DUpt853YW337NLAdmGgKRfSb7F785t99SM",
  "key35": "JkGhbcPsbA2bU9jKfLusiLC7sYcKbhhWR5qoXpCxT4iE9QjVwPBcGC53e875HZi2kY9mGCcBT6vqveyiZuRDoYP",
  "key36": "3GFFCf3nsaXS21Tpwzozngt3535a3jJ2iJ9aQzPMdCJtZwf4jZpit739DB3ExKG3k6WHuULMjni9sWfZSchQ6gDE",
  "key37": "3A9TMq9HqU3ZJJoKM7gZ3MSCiSZW7QUDbosV4ReAKPLD6PeELGpN3bjp2rJn1PNzzXyF6Shtpy9Ty8jzm7Wwc8vn",
  "key38": "WBxt17RBCqgAnWtAEuntaW5khpdJqyBaz4rwRiiEoo97WqvRyPZnRXFC2968kDW72AMjGyAzvUdSC3eyTdSHQ4P",
  "key39": "5X515Ja5RRG2MBBv8zvbYVUi828FkDX8Z2qyXfHcRn7A85jrwyjpByReRv5Jv66GQ5jqmsgihYu9p4a95GVe4vLh",
  "key40": "5rbSyopPSrwdBhiQho9G1wjXdcvetk3bzTWW5sjZg6raXABejoGJniqjjVRHNzA2Nej4soB4Ttb6P88tCsSvRVnu",
  "key41": "51qND4UJwaGuTH4XSn7yqstQuEf8Z4ngrCa5wbvfhLak9eYC32XmCwNdxTPWKeiQ3J9kLRzPfHEz87MPVLqJZQiN",
  "key42": "4DgiAr3z7K4bWVrML7Nz24phhC3kaVmBgpetTWYPjJmtx1NN2hfqZ9ZsBHbhwq9DyGg7WdcQ5yTpXFogEXdgXUNo",
  "key43": "4aShEK5KH66UERPe6LTkHLcDHzKHu8rG5sQhpD4B3so8vZgJf8Ei2ZB4XHfroFV19ZhCfks7YVtaucugucXAvbUN",
  "key44": "46dw3ssM5uJu2deCM8E9BKEyQtNeC76tFWEyRGZNe8CndttKw2WoWnKTWc9TvxhK88uA4pbzYw4m1bJXnqS3pbeg",
  "key45": "uKGikYjLYb9VyoqJEygiRQDjioWRQ6VusHyA3yXEywmHkwfQfGcYBgF8YQAo2XUdv2W1wBhDxgh7Lkm7fZ5giPx",
  "key46": "KATkYAQMxDRZ5PSw5f62rFtaUrpQcFacNRvNWqJK9DT5KLNBm2Qknhbs4mqhQpQoNgggpXctseStnSd2cGAxdUP",
  "key47": "3hsK37MKNbgNhD3pJGntf81N9WpCoUR2zm4NgxVnot9zsPjYticdgzXKpPCsGByF44PEdhFYzBvPQj1JJARYfR9M"
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
