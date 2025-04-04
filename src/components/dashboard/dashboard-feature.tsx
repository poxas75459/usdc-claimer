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
    "5UBLwnfFdGdpvQsGZjhEp2EdByggJeZGHR4bQr31iTvY5qr2n2NbMagVo4MCYzzf9wEN7hiPWjQ769pkQ1PviTgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47LtCyeGUPT6vhiAFAZuXXs7wMPvGvkeo5398jmqQuNGj9K89xJcgJ2X2XhHsEmRhd3gPXddZWVbP673wz33KUkG",
  "key1": "5oCz8HeLYrA4LgeW1xH5gZv7HQnyt3aCpFioWpW124jmzzoxx9NjrtrVDw3mbkiJPeBbfK6Hms3mQrLtD6JMqAAs",
  "key2": "4KwWCrhvoU2Y6RuDvzJfDeAWZJ4Au2ZpKd1bpowig6QgedzJcu4jmPXsMuhYUxKygVqzVdTowT4qfxopTkvC8mz2",
  "key3": "2tXha1rKuhNcUpPHAPY5zpvxYFV4aNSxo565wmph9fC26zA3w1LNZMZ862LuL82u68f9t8WqKpr1fNKkZJWoAGvn",
  "key4": "55uK5DSnzVRrEHan3r2RTUiUDeRQaR5QHi3cfuHYsEGNuNaG7gvZ3Ye1SdHnLBADatZzRdrV13y15mtZJmqWt4dM",
  "key5": "47u2vUkv6SjR1g1QukL82WJNaSgjwA5se3NS8pjF69b4zrzJ2HhEPWeZkuncSbRtuKvAFhdENpXYaG8Jr9XshFyM",
  "key6": "5F9itdZW44HgKLvWW9xiPUorij6RLgKcweANaXEnNrizJumZuSQqphhuGoj5HEaaMuqRC2uXRdJP5kgSKoY6ZMY1",
  "key7": "3KMPfTs6nfWYcBhssRgftBWzKEmARqoT8hjePGUDVHqZSf3LVaL2WPXsieHma1s9wMspPhHzBPzKG7DdBC5ubFoi",
  "key8": "4nbwrNennvaZ9ZKCabv39QZeJ68cAPNarEMmYQahU4YKxwfwcwPRb1s33tGrobsQGdHha9QivrDXqYzFnAp4FsJK",
  "key9": "3u4uY6fYh23vtwu1E8AS4MZw5XfNJuwGPpzujwH9Q1R39Gj6dn4F9MFdCgqoChPscacabKnWsaRMYcNMZdnWbSBd",
  "key10": "3KskNQpLzEmvN89Xfkj76c6TEGd5WiRhxq1cG5TixHVK6WED6cLaWEWrGUmPDLiZ2QMEhEtJdq78UzBWxUGs9a4K",
  "key11": "rPzAQpc4qRQg44CrWmS8SWtaf2QddXqjGaVhcX5pYd6eV6j8rBXyS649SFc2pPgcNnVNDJ95tXsm4dxe4xhHEZ5",
  "key12": "4TgwYT7zQHwv54p4Qe4XueWizPSbBB3MNve6RPCr9TcLe7difFBSimCmDpMkjhZqbUjhBSsNWxF1kk3cxtWNV9cT",
  "key13": "2Z2rwjMMccny2mhmULn2MVD6n46JzQ5uukf6cRPwRDAi36rbs79gyzVh7jCbuuVCc2meqgSKgGEeuT1UqCgAeEDm",
  "key14": "3c2w4RWR7J4t25mLnt1SbdyBeHnjsvk5Q9svMxZxutirLnaTAD8a5aVjVvNHkbVDxWpGr6FGaFmF3zUBy5UBR3tF",
  "key15": "5Nr5YWbM7EaLz9KuzNoJrybibd9jXsjQqPJF9nKsi7tUn1qTervZHuzCFn3ooFYTM13FWbuBqHonF97gTRrdo64e",
  "key16": "2q5fzK6hp1HPNMjtGsxhbdEhciGpSm1CA9kzT2W1cdsEnsYE5549tQ4JtV1Q4oqo5PJ9XngKAzmC48McC9feyNhd",
  "key17": "vsdmGcqNc32Mg7owhrFTxuwjURxPyroxZS4mT1s5bTGNVaTS3ibJyqb7yFBMUcdnNRMYFXcpZ33iewhjXgXaAEf",
  "key18": "2VqgZJuXyL2LUiwPh8xxTX97vAuYjHwymvKX8ytvJyhQnQwhNcaxDRC7Y721yYLwLLFdq4wUhDwNKLZZDAcS6KCT",
  "key19": "5AxG3Du2E7DVGYnNWK6g7TAvDm9bTQ88ZXkAXBgQh2cDXp2xLwbrKMR1eQwGvkrfezF8HSnTihWfFiCukNaoKm7j",
  "key20": "3bxRqHM8Pjx22SsfQGwU6SeQxF8638yyqSYrXDENMkDXD9RcZruVZWJxwsF1A4JVCmUEihaP3yA17gTk52nMgU9c",
  "key21": "3gZCV3memm88mayMfg2rXKtG9cPimfPq7kd3q2K5DVQVNKQd2mX51snqywbFv95CaCxxVJwqEVxbNoFgiAPptRD8",
  "key22": "2TGbovrQnxMabcYNTyi8x5cC5w1uwY254wMCWqVkgHr3kX6QG5UpSbkJ75gDaU3eQWqWYQPTAVNMGhrmAF7V16Gp",
  "key23": "5VSHogTTZXG1TdzHAFNsiHCD3DLFMpaA9rhDas99m7XopU9HrfhKwMzesU93zXFYWbtrwMQvQERhqpxaqWdVMdUu",
  "key24": "5PSNh9eG9btiXdBRhHujmaZiWcMTSjWFq2CW64K7GcTT2943AdMHDG5E1N9Gx9BMsYA2oLdPTWZVmtF421N87nwJ",
  "key25": "4HDih7oi1MV8P7ScbzPtLzjsbrxvSVqaiEZ14MAP7T2iGhZp3A7qGUYYrdLM9NPxXfzHjbegspchZjA4zkFrkVgc",
  "key26": "5dPvjbvLjSZXbDCQiH5Fcr7tDguRPcbbWNpEG33CqpNGYV7ETkbmWcVtRzH9u431uT15werrCq1u5oBBEebfYzY5",
  "key27": "4FJHqeEjve89js9YZ4ZS8WWV49D417asZsMLg7K58LMUVcuTE9f2ZgN5wRUGRjfVscDeSjj1MUhfCExFiRm1YqzM",
  "key28": "MZ6zeFqwPdDmoqUW8A9wxiiJJ5PDUXPfSrHZYeg3be8Q6fBvxXteKuH5ukXT4MmMRqtrhG5h1r6VAwX2KFHiQHa",
  "key29": "3SKhVdv1NPs2juMmzrKLGnsqQPj2aVzV8oyiMnR6oFTiBQJAhrWxcURC7Js5a9gwzJfsbw3jMAQcmUqhPBh3j7QV",
  "key30": "4JKhh2sGEskypAXsmnBDc3HxTfr3XV5ghpMuBbuPY3qcXz7fubK5kEVxqfd9GSYbAQQAhuZgLVhYgZp3UAEdd3sK",
  "key31": "4KSNVYP1uyqLjd1C1vhPYSnadV9MhcGB5Z4QCxCkUWaPHRUFUKHwfQEzAbzExnqBFAFgmUNFJehVgkjszsQR3K7S",
  "key32": "2ym4U6ki9eEFuP6kAASjHE6EFudY77PaBEmfhpnzKA8L3dsf2bWk6DNBx9H1Zu55Eb6wTQroq3rLMfr2QuCd8qWk",
  "key33": "5mCxGqg6uTFRSJeX9KGDNKbFTJnVaPT4gudw156u1qfbHYk5xWY55oCWd68ej24tCDUJj6pCSLZLgUBc8womWp1B",
  "key34": "E8PKYsoNdj9gFmGwUQvF6rhfpGrL1UExc31koq468BRfGVnZH2nLiYwY8AtWBZVe62UQp4GFLEcVK6Bj3piM6rv",
  "key35": "2d6U7D1ePzXKcCyBs8J5WvJCUhue5Vy6pipf3PZU4QHWePxfyuAckeyKvNqCfieyJz1m3K44fd4j9FznYe1GirWU",
  "key36": "FHxx5ERikodz97EC2nhw3T7mpom3nbbYCsB8Bn2gYmjMymtTYHeSRyGr3GfVVDGhn48zLi4hjeKAhpdrJxRKpYR"
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
