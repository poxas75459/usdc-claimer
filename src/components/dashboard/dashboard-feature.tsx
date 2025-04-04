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
    "2fgzWG3CN8iLginU876aAtxTsQJNUqeM6gkmz6DAuczG7QK4e9sTMsHVJWAMHkw2buGgVLFsJ1CEFJhWqGHard5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5avHNgMYYHMCdwg7znMVLgJwPmvdovrg1AwW2Yb8V22RrkE74pSdk7BEsfna3GAEzmRSnhGM7bjwkRd6UMhV9xSL",
  "key1": "3gJCWKYc9uJCBUSiRxADX2udhKpkAvfXQZdEmTqzSCS8GXcBuke1jeraHCJLMNoL3j1qxNAR4W7FjKxgYyTCHu8K",
  "key2": "5o5MLt5XUU8mtjxRVNpjtxqt5rgCpQsyxgW8zrXFBVXxyqXXzRfxK2ouaG2MYHW3cHdP7eevM86XqiAjFggbB4ds",
  "key3": "Cqu4avviDRC4h2aYRXE942hGXgU36NCRfQwDpg2WrknofaE8e2Yzop8QRq2gsHRfoqiC8rZ9qD11LFfnyeAW6qm",
  "key4": "2mdbYtc4SvSb4ZGFmtzkLdJhK1HRsG3Rcrk86BZJWXxfT3p3vjYGM5bJd8PYupeTJGStqTUrdsTmnH1FvXtEsrqg",
  "key5": "668SF9unB8mnqCjbzLJfW3r222vtvgffaGisqpmr49q3ZS3EKZbamJstWXWC2kF3V4Jh8rrpmap48kabjLd8uZqC",
  "key6": "nT5GHgGEPgzjWZ58jbk7Gu5T6DVXhsu86zVbro7C8Ro9WW5WKS3etEQuaqtq6c6wZ3QDqjjJEDX1qDSoJgxPCjq",
  "key7": "5EdPstLruqPfD4E65fipd4yF1YCrqrvGrgMMEGmMTUpS77pfYbk4YDqYpCKHFCuHYqRiTGHy3MA6SwY94jDg7UET",
  "key8": "4nEoDs3aCHG1rfu8bwGGoaCA9tJSBATeew9QwnkH6o5tvcmnky2HRcVrTEBu5pHgu3nL8CWFDCdpSgjcpnJnxzik",
  "key9": "5BNkcnBNQePQH5VDe68fABfQwCey3hA6jh2Q4Gu6wHrzmjX5Nmys4JA4qRdNcus7B5bRUJM6MASfYsTrkPZjwRbv",
  "key10": "1w6vL1w1TEUhFeV4DNWXzMFCFup3fonbTgtmZXRtF3u1DHUtejuvsMQL96ZCCMJXqZQAM9fpXUJWZh5tyYMuaRi",
  "key11": "5Fo1UuLdmmV18DVikK9ZyCaFUg9eyEQML7Vqz3yiXB94zRGtKcZvSM3UdG9v7kFhiS5favmhwXC86maVPj9Avjyt",
  "key12": "42Pw8giKB1S5e68B1hMRPwiBeC68z5HGNNkMFk4hoQijC6d568fARBermVFNHiuJVhCb1FWBj9hVLxEAS3uHAxFs",
  "key13": "46MELETx5T5Cegz2eWCghUALNwhpsGRnLDRAsFCEpKLYfue7MsDvNZ6JqEtJbc7edXnmuyWdMqS5eNq7nLzLR3b1",
  "key14": "5SANvw2H4xQim13Wi7p3KJhRx32Mo4pEMJRzNiT4cR5uKGoMH2AyR8EciB4wP9wHoDjURLQcBejJBUWJEfytZoqA",
  "key15": "3KanLGKN9KVzBcZgMPZy73BWm8YKq95Se5yALTMmR7DU8b1RVKcpztSPMHTqzavFcVndc2ouR7ddukuceZL8gc4F",
  "key16": "2uA9d7khx4sowv1PCMEQHLcSchTa9TFboP7zSfxLN11ifAPtJvWMgKbhxsyeXrQw1zNeUsGUoMU3e43g3vm4ER3B",
  "key17": "2Zv6CoraorJAuhCX8jrupJSThvN9X1yhnnaskEHPknWjigKkdvEPJQVrwWv74sQ3gbuohAQXpRHPsfcCi6kFFNfw",
  "key18": "21yeqQxgHhKUcbwLPpuwch6z59fzvfN6s6gQa1suuSG1aMA72QY241G5YeJndpvqtEQjrpW8FtZP3qMCpNAUSn1J",
  "key19": "FbefHAJLqwtrFptuHNRvxDe9bsj4W1RTiTz3mRWLVyXjBokQqbzanL5pX5VQh2ZuDytWAhCcEz2YmoFLC51TKgv",
  "key20": "2HqedNVhapRZBojNgqji3qGiLmj3WSV5Ja77RXMYgTN9cLs36pggSKTaYcBtHf9GwDNztfxniwX6VnndV319nfwa",
  "key21": "4YkCNFsazPxADkM5W2ExkUHh4P6qY7Syi1HDM5zRJtLYqYunjGJxZPhZAMX3i7Hc9uertPf6G84vQiSGprmczU4F",
  "key22": "PpZinDCEzkzVPWzCjvMh9ezMEBeDr5VsyWqqr8QUWG1TLe9mQ7w4CEjd6zGqFcMYZqjcF9rHpCjvqhgNPuH4HaY",
  "key23": "BCrU235BP6yhN3XZzbQg1UhuxVtstcnoMVvEofBm6GU2UqMCvToWSyoKA5tmM1g6NbFxHFBqYjz8y7QQyoJap1X",
  "key24": "5KP8pBeALSCccCeRWLX7TMSMs3UadTTEWsXvowJyZYtaLsfpgsYhYrqsRcTEy8msjhbPqRf3h4ja8hKKn6xL1quU",
  "key25": "5RyL1REZ2bRVQWw5aHGp5gQa6ef9WkUDJJFhQL2itGdbxKpJHWBEF5b9YmhdxEpsi77NgNnjSYNVKD3D2BvuPPc9",
  "key26": "5J81oLDPkVBiBivw4LqxpkwNh9kLUMQ1oTpG8e6e6r4Zad1migGDw19q94h695yuaDzsJNFSTm6zyPd5E5NLnMKw",
  "key27": "41vbhezsWXPesBVU24mpLeBb7aHWF2tEkJM15iwMt4uTdoJE22uuCkKtak1bF6W8ZFWx8JSZoc1Z4EQL3nriWtB1",
  "key28": "W3bjYXqueR9zuMXuR2ALBmxAqMWuP6QRJRqtWcwJcUaK8wDs6VFrsUh3Cvc6rKZcxia73wcyVW8gMDahzzd3vBc",
  "key29": "52tEcTF4bEFZqH73vLZpq23peWf2xQAe9P9vaQyn3bHrFNXTBKFCPZyhPET68CyV7JKSHbNJ2Ti3irtQ2fDAbTbq",
  "key30": "PaYbCMz5gg6aSvLySWQZbduXrzirowYu8eDVQFeRHFpwC9CBBzNcyzBEDzDy2vqD9REAKGsgtQiicENCNmEgUpx",
  "key31": "3DfECdFxrRaKn5E97twHPo1ArFxDNdPpKYyatbJN1aT1tYsJbqsv5fPiheyyEgzYxM5YsfneAVtUE8jHgEV8i2Gc",
  "key32": "379L6VWKMhz6z9PRFpcAEYmibetmvPoMHxHyEbzH7ortCseBxGvXiBhzwf3RXXfF94ERmJvFEdfhJ2XH5v6AzvGq"
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
