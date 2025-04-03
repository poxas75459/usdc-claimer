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
    "5EDojibTw5hawwuN6BqwpPs8TyQ8Hd8c4HAEa3exrURXzzQgySXgXkDoLRasgKvYiCJYkj1uZYe8TkCxkWzc7Qe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WCunVJ3qPRP2F5TXpZBRFtnwsgkhiKJVuAM153EqpH5xtXyUrtaPGmTyQS6PNMm8r8hikWrbD2NaSgjcV9W9DBX",
  "key1": "5m3cZMYhjVcZuGcvE35ygwR66gFq3eZ8douhy6su5GSQuFMFAYd2p5v7JwxtqsVtwSV9Ws3ubyHpTNNyUZgqep9u",
  "key2": "5QXDTnNnNA1QyYSdnid8dRjyYwARGpdWUMZxnt5TJuW9F474kC6MdEKqAGAFD8nYcDjNS7hD7r8nBX7C68t733cb",
  "key3": "26VHmVma5tYYnE5jmKQHKMVkPdP65ueC591c3RzuZm1DVTh7vkWJnWyrtfi3dBggEA8XVoBBVjnxvzT3zJ6uq8XC",
  "key4": "5LNkdUUQajJwSYm8CANZjvSTFCFxEEpXTostmEADCsgsa5tGJsYaR4VyqypL4aAwsTiSqzMH9LxjuEtMGcGN65hL",
  "key5": "2H9N49Ng8JgD6JeqRBtVWW4EKAAU2ePSKtndR51DudR7uejNTBcUxffsDKNaRUdQuhDk8BgaX9ngzrvyVsWJFvD1",
  "key6": "5iJNYJqfzHijKezdTAkgXjS5WeMWpdEcDpkxhEVQTZUqNmEkdpQ4QQ92CPc3XNAAbHoLda9mrW1maBCPZviYbKQy",
  "key7": "5fuCcwNsZ43eGcAqYEacXCsnr8jFy1XEz216F5ng7C69J4bSJTtVZqPpzb6sPG1Etr6z343oXjshcJVMz3HWpsii",
  "key8": "2juVeZsoFWM9LafQURcCeTG5RMRvSuTY9NDMgrFNuBX2gfz8Zm6rUB1ADHXZK5P8j6S1D6DSmoQWXtbGcfWMFBNc",
  "key9": "5GpNX7PAFAjAuswaDwD1cMkFjTMNA35AxSFqRCWPBiaCGQ4CZKNjToQjXoLpdo3AkowGXw7BMsFqk4j4XtUVCgyJ",
  "key10": "a6CKjgSH7B7dXfHAkDa794NQcmqCrwamk4cHwmoY3boUeHsWjSH6K7vDS82TcYuZtTaNQN89UhcgCxNmwD1fQkR",
  "key11": "4NwxrfBNcRjCmvFx4DTEP6JFVY7oVaM61trFniXBofBdQegdG9YZVCimzbpvmiSpP3VXmouWmHiRXvpQwikVVfQV",
  "key12": "2rG9ZsoyQ1WxqdGWmczoPt2KETmZrFA5Mfcq2aChL2nqvSeR31eD3gbqbLpaoecTqyUWa5gMA3ibGnpwTwYqCYaY",
  "key13": "5kw19k8VmUwhJ28WWxMcXcZk8QnfUyYarj73ZJm6rGavrVtapXMgRZEbDeiPzP4dZZGuXTm2kQogQyEuaJfNJB8r",
  "key14": "26cEyyQPyPpjAoJYj52dC3wVemKkyVVayxP7d4AZ7YZnzcUmaaL3JBPU7r6BisDbfyaqBdCoGbcuP7AsME3HUPcF",
  "key15": "4chYK64igY3C3QJ71DFKo8pSAGgARbS1PXZKGWxx472oGsmRn5FJUPwSQQEMTK3wQtH7WVanCNhBUHL438mQdeE6",
  "key16": "52FjuDrKYmcLVcJoHwezPg6LcLSyyL7FEb63rdv5aayDBh3QwqAvbh2jNCPasEK9h7x6r8ZcM2q2amSoHkiWMmrU",
  "key17": "5p1JebSsoGYYKK8SHD3axGGeEd8gzkkkoHnWKXZuqn6ciGvaRhZpH7nQz6SG9gBhuKnyd3BaLq7X95bWpUvGErmv",
  "key18": "JFGQAZpxAiPJcWAV3AtQVYaxVMDoGUrnuceFM7ZcnL81szPZgjGJCT66khr7BkJoQMnrzpfaUpqdyHEcd3uMQT5",
  "key19": "3mM8kuYfTr4ZsfvMHcTAbgGPcBW9ECYWxZx42xVMANrSUo2kw7hVhYeNpy1Ndust9NUPoRV65ycwQar8jZZp7y1n",
  "key20": "YRKUdpGH2uGMqsNtxXNHJFyoW9GjSoH12ARmrscWeB2XJCeDVFViRXt6bZ8CfPvCeQjjE7FtYqxgnd7UmZffKW2",
  "key21": "5aRYPySaKn4tFRyjzr5QkoTJC5c9FqLSMvGQTys7V5ogKQ24NqxSid5M7YBofMzsEpLaGv9xeLWH37mvx77ZfhKL",
  "key22": "NubNvZ5XrMRPGMGd9FDC8M3a5QJx1AWioc8yQoy1fk3rNqHwkwqLX6N4jr1SQQRE4jWtqVFGGVor778wRC6RSEa",
  "key23": "4oQYoMQwYMQH4KRAqJizahkzPo2YXLjAikNkksTju4rkzo7kFHJNpPmTAGzzxxJxMVZ8F7ZpXMHyoyEp7MThFpse",
  "key24": "2uAnFNdvdF8vN9nPMsxp86a78aoXa4Mx5zhPag2NtXE4bx7QUBSzPo9NERS4QqyyKDa7MBoieWPoY7R3nbNwVcQt",
  "key25": "5JhyCucvBbpVHiofzCP6rtGLVYcNvhP6Btd4istWxdxyv9pJtuK2HJFU8u5fxEtGzEfHMGCUBXkgSAfMmwPVAxDb",
  "key26": "XZ9WQZodDkB9aiubQcfjBSij9g9piarw71nxTqtckdgAQGP1a2vCYaTd5nYwjZayZKDULJK1JFCggNiBrQCKRkx",
  "key27": "2PMELbHCfxu1jeerHLAtceKNxDLUQGcioHenCrKQpzUgB5b2ivjPHivGn4sabAhuYu33zJ7Y5Qr5uAWHqWgKPF9V",
  "key28": "381iA34gNKC57Q23rWkbYUTwg67868k4WE3fvL3CwomvgzEcmZGhpdXcpZcQmjKL5yQLxek2t2ktQcrGQNtzVGPk",
  "key29": "3K8NogmVqosRSNSTF2UG377i1Gs7kWDdrAY9BeXYCKwTjYS2HjQMziQpgE2BNFbikyW6mTGMMfVii1HzEuRn3cpH",
  "key30": "3euCLM1xwDKi3CYeNjqnvsXDr8T5jvd5ZzFaU8KakrzdBVy2Wcmij2iNgaRJ4SsoKRGc8MPnzeWkt6Ksfep414hb",
  "key31": "3stqZCzfdgdyuhAMbHxfqTuqMWHiq8NZcQLpfhUKwdvDoA4NQmtHMRC2qijRMzvEY1U9TPmyaggNnnUGDuYTst3E",
  "key32": "3xfXbPpCeGDrRVr8E3pryWJuiATGWsPpKEb81nRSCF9XiVNxPok6A4F3yAwQu7mb7wBsaFGWUM9ifLis1PmArt6f",
  "key33": "2zCgsTgwzPKhuUWEuDBzwovbJ3VqJg8ahEBhQR8iTR6NoHJ2hQrBRmK1DjNjsNNqutvfD659btZVKXyMAekFVJNj",
  "key34": "5vQ3FwLHyacJFCZof4NTXfq7TYGkuzZTaJyTDFWMKGD1tjA1FQAe6mHnYGjniE6sdsmSrPiPYw9k7nDzoSzbkBKS",
  "key35": "3jhHtwSaLT526ubjRmWfsFDxLAvtgYhtgiUwcaLtgwAMG7ULGYjd4Q5wfkbSrzH4GjGcPJFNZxAS3su5VrF7rTnT",
  "key36": "4VG7V9mRRYrdGbrZUDwo6Rm67iT1wPycExT8SkmiYYdYZ1kDeKfUFUsjyP31bJnAAJozj2cSKBALQLi7JHk36XbE",
  "key37": "5ojMU82TvLRS8AE12DZpB5VfNx8JR87qFZEWvuoqb8SV7QAVNsm9vjiMW3Q4UCoifWVLPvf7kAN44JSDzgPAibDk",
  "key38": "2fYhnsCBpEY3rRDtWCMfK22Jf7oywE1aX6myH5t2HmGAnzpSy5StcMjwvp6qb2DL85BV2mWYCYDGWogg18Hejccf",
  "key39": "3b4k17fiLviUu1Q7a3MWpL6R7bVgStrwD48Jz2JujHuJe5QbpWuoM4FDYDRCx98sdcuymX2B69evnAmqm8tP2Aso",
  "key40": "39rSEw74mZJjnqbBWwng3tW18p5hoQRugRWqnrf5uu2jKwNhY1MpYMc4esLjSatTk2FHQ4gZiCp7MJiniG9Ez3H3",
  "key41": "vYoyu2cwpuQGY6GsXBu2E5pdtQyHQvzeHNtLin2YRLRM346cmhH7Qym1EaivcEMsmVYjCmz5bP8RNi7L1xRmWni"
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
