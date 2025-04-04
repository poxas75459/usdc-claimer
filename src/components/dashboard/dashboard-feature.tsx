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
    "65EbiY9xUNWmxmf28CMXhBafbyRdPFyxqj6W14s4E3PqthqYwKuigvSpdPuA4rnoCwVASvNvFVDDz7PjYzXAujDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BzxnjJg5B1oDFRJCxamTR2y7TsaDjzV7KwhFAFZ2hwotMGgNaJtKvxyDcKwKND8xz8FKcd8a3xB16EW6WDQXQH7",
  "key1": "whHVg9k2Pztwp9kC8iDQU1pnQuHDJG6pBLyzzgz4w71YVqzEhaTqo4fwnfjmzd68A1FGWdQs9To1JoRBMKgWtMc",
  "key2": "FxDGyq2nHX55QABMRq1i1jZJyfTGL6ZJLeYr14qGTWKFvuELFaMPez7QYYvD7JyzuyyHCsKPUbccgz4URQ1pLky",
  "key3": "2afGJcU9gfbEpQbQdXEtyvbhNpPZFp4si5jscgs4mdoxdKS45H7Ldw7XjvtpM97Gs1ktWSw4UH6UgUqtwAfjktHx",
  "key4": "57cvLuzLr4jW9u8roqdta7kPb6wH7k1FwZnTDzycDE53nzAiWRoK25CiAuM47Bu79cgVy8Bd7PdXVoSoZe7pc56d",
  "key5": "5zQhbKsoob26uL26hBX18ktdjwyK3Ppa8nXqEKL6C9gx8XGMgFc1DijTsxdcBiiHw4rHK5GVDFj3EKEuiRbsKp1L",
  "key6": "2QcBgkoJw8yhyQpduYwNWpa2yTQUXfu6iA2RVULYXATup9JuuBJp1rTpcsHnjnXWH75KQZBepjXLMPLMtzuRahWn",
  "key7": "5ACNG2uHxJxLpihBJXRFvhyno81nfrL7NSBZ16e9gfqgMEuvMFmQ4zvixmUsdXGcFdgGFP7BbgFp1JRQuaua1BBR",
  "key8": "5aZR7s7iDGQ4aY9zAPrqkbTJekbBrGsuvqXEhWqFEZoZ8zNJU2gkn7G7F6SG1sM8T96XEYbPemKNzJVUL6v4pcXA",
  "key9": "2Pgc71PviGsTHpS9pYLpiGZwyKce7UrnoEsVK6pET4CJaCVBKcUk9dW7PeBwEzKf88BjsK9icZSo5hWj7axPofeC",
  "key10": "2LSfav3WiHBMrkUVFbCSzZZAvv4PdepbnomoQoQH5nzBQpnMsZ8kkNTPZKbN6gJ8hxGydCbTWjsF8GC8vyCngbin",
  "key11": "62w5AwUEoL11K3Mgc4mBJPECMy3Uy4KnCZhU4ynaHN5vLLg58nWnM2RXH4KGBVdkS5XnbYqLqnZKbzUQPGve925g",
  "key12": "2tnPHykCfVmggWB86YM2VzqUbAwBMeyyvhYcGyfwfDmJcykBUq272rb1dx4ZT756BcpGJcoFudEEBgsFLntEradb",
  "key13": "5dk1KtPjC1CX9yyoSYmGsvVLNSZyZxC4ptMtkNfcBoSCwMabu4nVUDqR4uvJx6AQ25C1qrPZykPq9DY9fniC5A6b",
  "key14": "YJywYAMHZArQPKgg4ASKw97yPoEKxdppiEQtb9nFHwJLwXmnaWjdqvL6rFTSteD8VkFkyZW5Au2TNkgg7uRTPwx",
  "key15": "4u9QvQRGaNuWZtii6guLL8VbWRjFbr1v2m1ncXFVyF8EaaEXVtDAsnQqZqSyQfo2RqdgJ3eXE14cVGBuHkCLNnrV",
  "key16": "3BLEb5mgjuwXEXoKaBR8o9aZBnxFKgtS7Z62C6EAkwrq3xvz76fq4n5XJoD8a2MjfdrCRq5WhREgEPQWcwhDVCST",
  "key17": "2WqqHeVMFMvgSuMGRV3sqgyzfwhVm9d9dzYU5qUswZXmCbFx1n119GqFvRReZQQtgKHvxsnjr5ub9KFxbAqAq1Pb",
  "key18": "587mxmxRGSHj2YcUcm5n5R3wytMvzr2Uc2VMA8aRL7ECoNseSUbkrbL4AcxgnKF37WDyM5s59eGiY7twtVRohLnq",
  "key19": "4k9CPcUJaXfTsSxyBzQrA8Ju5v1HNU4hJp8o6Ce5Z7QuHo1P4j6WAUiU2nChLqRAMuwpjGuYuhfNpF1xoVtwac3q",
  "key20": "4JF3TVmsg2G26GGbQN6XLVUPqaABZENpX75spEK56vQZsfSgGoP2iWRVD3bkxD6cB3Xkc49vRPq1NUbNWktSi9w9",
  "key21": "33B9w9dwaasPwjtb87Au9jwxFJRGfAz9oq5AHSJsNnXGJDZ6JTLy4AVJxuznyz7za6ZxwURBpdJzWhf98obJfXXV",
  "key22": "4nYAvZ8beXc4zhW1qitaGKf73KGcqZ6JeQeFaXpPEmH42a6t42qUiFX8bnR84AbN9KKYU1zNzGkCVUR8EYjxUJZo",
  "key23": "3j4sPNiCX1NJgQubhgLn7KVueMeadtEjck49t9xL4j1Yk9VNS1x9mvZR9ckmSJjLA3r6MEwVEAwKFy3aELMnumTc",
  "key24": "56RWjDnSp1kWWsPCuMb9AEpKRoV39pexB2dtxoy2vZyYtHgJVZHRpYyWpg8tFKiLRhYnYXdGtwQvXpVb6YwEDStv",
  "key25": "KnZMWxHxk19ksaWV5p52b1VL4MaaXMRKFTvDnKwjfxi3kJ1EpYGky57ZX4zRwZ2ijD7NcPgqxdKRaum5dY2SGrQ",
  "key26": "54eTKXjxyYugTTkmfoXk3MssQd3cxqwQhfCAW5ByddD44L1iB6joncNx6C3bmbX1n7Yo5qaS2EKrEphKUMVLnVdH",
  "key27": "5iq582h76Mzc1VAEYhYr1cT9d3efNqUhK3v72YH8AWALm74KVZNnvjLu8hKBwM5G9bxpMEmSrmdFtfahFuqqQDNv",
  "key28": "2ep2i5KmLo5NuyWiuM4NZLKeeJ655YpxufXAkQYLmATH1uiJwWpwSkzm6uA1CmCQM35G7Do8oGuPgnan1QMNxTXR",
  "key29": "4fKYhSxmQiDHFxHWg6Uue8skjSdXAQNPGV5RtYbquD3Fe1zeXBLXkuk8x58wmA2UKfdE5bMzdXBgeFCsDvXLmcR9",
  "key30": "5TmFqbnVav3PJWLQJRYRZBo67L926Sn7t43RWq3366UZ31hrsXe9pRTH7BZyiKnshYwWvhgEkWvSsxAjNhvXJ3w4",
  "key31": "5UuBU3T54eN1EusVmCiDRTmWqByGCzaX4xUWDTSWq2eUVLszB8Ror2M7ThMzTUwBXcNtAVr1kMvKjk2g2zzCWUP2",
  "key32": "3U3XYdeYCaxVNhVqaQZL22NXKsegdeh2C7KfthSRgHhpWg21ayZoxRxBR4FomtfxAC6PQutWbJ5fXPvA3ZdKHxFD",
  "key33": "DusVgiRnfMo4ajDvWeMLPr1eZLHMWukWZ44BqPQLimLtWzfrDi96x93cuWBUsfw9hXLUBfSKw9JjYZHWRP1DvYu",
  "key34": "42xMohU7gXrjBKw2kiux8JzZGTwMGf5azNj6NDLmaPvFL8HYFUhKBue5yX1WUS2AAN8MsU2Z57nfkbWsTJYmaKpx",
  "key35": "3ozYfkxkYnw4qSAaBWxyDA2jn2fpBMfR1yQoDyGwAB7aWcWQmzJg1fPruyNod3jCk8GmTHzCQeyUTvofXSyocnhx",
  "key36": "5kEnJLyVwKcPqFCPBwtujCLryyxytzfWSEczKfaDAzwN6ef2t6xnCKSr5cHLu9dSRNwxa7hh78SeT8BF5FPpXneW",
  "key37": "3a9crVyCvARYnPpn5RSR9CLXhMYTjXRLBWxUByXqkydWc4S5PiAUt7jV8vYEsbhoBZt393TCmPczcteP4FGiF7wp",
  "key38": "2F54wFswfma4Ypeb4jeWQAQrd3VEXoGCnVQAMyd1dWNGrEbRtGRfxEDGckf5a2KoSqvfeZMkd16aWT1KhtXdG1qq",
  "key39": "mZPc2gd7Z8WxT8xTY2HMCA3euNJ3waqCBbSfWpAmkAzxkie8kELDdgcZgiQs4eaD7qsyzJj7hyfRg36sHAQfe64"
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
