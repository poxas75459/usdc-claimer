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
    "AVHgnLqongqwysEq6f3HSnxgsoa12KkYB2M6vqVXWoRZ6xpW9zSN8XJbGLhwDAfEKccgbG81hsUGYoXmmRFHxQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rUNuQUmng7kAczttaqDR6jcBuU4Tc2sQQ2ypsT2KiRhc9kKSUCcN5VcafnxpZQHgEYSRybhP78k2aRrGf3YadEs",
  "key1": "q7gTg1k7ceZ35qNArR8YB5wJgKL45dKAbW8QxX7HmK3kzcS7KT4DegaLp5ig6VM1BjTWsQ5C111fjT9H1MkBXmw",
  "key2": "Dk6TrAuAQAuBa33jD3PzJB688PdZTcNLUxtVJcwEHtvMzm2oSKWNEnoWaifyvxcw3t5LUJHU2JuikMdmGVhLweB",
  "key3": "E77oAXeXx6AaUigrwfBg3jXMTqXf37XU72ZdqNMp8icuYu7uBcKmn4DR4aXwKv1FMsC1xQaR3H4Pwk9S6RngyFi",
  "key4": "VwMx59GB6RuMLyqs6oYTGnVoHrirBzNPfndyoAM9QzqkWExWUM4QzaYTmey8xMFaJkmxJmhWX7M8Qqm95HVusQ3",
  "key5": "8LktM44Soc2yoTDj6iNmnjoFCFLmnPLJciQCsr2AJv3LaPtwY8wv1zUhWP8LAQJDv9SU4wH1Z3B2DmHv58eEuPi",
  "key6": "2pfdiRBTCLnnnvZM8nY3QEvGWFLKMmxauJZ3abv9QqvjdPtzf54NYkB3cniFSUXEKy6AhxjzUwC2J2YVbS2RUP64",
  "key7": "45Kk7YKgmNjxD6Z75hEhRunqwMYXtNtmdNA7D3GA9ZqxGrUEghAMZ6Jw2AoWMpkcwxX4PxU2ycWfr73ouFUGsDwR",
  "key8": "2knaMQYiBtbSmfHjrMrUfh1cpYyimtF2EjufJDVUUey77SShhvRNPpfUHwqZxNY3iWTSkgjGU8eyFTsmi8pGEuyA",
  "key9": "2fhqFRw62qh8nhATgnQ2edVefqaynnttKd4TgRyyUjRfs6hJZpA6e5FJt5DxnuHGy6mfy9gCnWkSeJyD3rgomgVz",
  "key10": "3D4Lyc4zL8UHmmNcF5HmUbntvVNP5d26CGSeLfsCwrSYVE6aLoUifZZ5jDk9x3nedDFku2W7qsLGmbQWHV6DbevW",
  "key11": "2MtpTgZ75vo97x9HMaR18NamLwNZvbm7LzqQaGg3bPGZVuXqoCaPPwzobySGGrH33DZKHixQ4xfqt7A4j8YfLzqT",
  "key12": "61FsJhZTPu3QqX6AHeSzddaQcciUqi5SNXdfYtg7wB9zKWbu9D5c2mmtMW3n4W99qovbhXzaEDYg4dKsBWVswcCs",
  "key13": "3kEjXSpr7e84aGapJYvL8cYkPWv72Qn9ghq6zxazoxCZbv2iRruV2BrZRivt2ECc3WQMMmfn8MiWRQey7TnVKQjX",
  "key14": "5cnrvGizB76MaXBVT3yAkPtSj1g6otCLrjk6fcK8Zg6JtfauyWpY5ykyCvFYdVDFp8zr8vVgytRKU3Cg5ukVZo2M",
  "key15": "BLpo7jdihbKKqfirKCHsUNKPRU5NWFefjtDA91xuTK68tXSuGy5ooshXepayAkPCAjmAP9tqCwNpQfg5VCBYzGN",
  "key16": "3iSphrGFv7L4aRpgcmkHtfCvNiSKm3RHMBK1CKMQ2NPxF8TpfQfKr2aXVB1dyQDHv4UVuQHPT4dubXsbhdTG98Fg",
  "key17": "55j3gyz2Snu2bRbbKv6N6UP9dVf1Tz1LwQ9yjmFZ6ARRSEabKtByoAAcfNFtnd3EJz8BJVFRrNMScoL21Jfrb3tt",
  "key18": "y2SX7raMU6NaQMfGqA5AL2TsYLuC22kndSKGYezU9FEKDBhRtRhWpBpaU9G2LVpFA6SMXv3K63Bnom7GeuHofLs",
  "key19": "5BEPcHh24BE37uumCZnD5WqLBZMkhZ37vAjzwPAMDPnEt5BToUiLUH5pms7PJQ1uP9oMkP54ik4PSEreC1gWYMpJ",
  "key20": "3gxWozDLpCQKiGTFP6pirnbAfzuoHK7PjrCkm8255wVrjSC1WGaBFbSyM1Ku399EDoxrNebaRyCr8HEo1TJKg37M",
  "key21": "3PsiaeLyB7LcedRD32KaSbfX8K6oUqa4oKX2qUMENMtL2TtDhr3KYtWxHKDEQv546kZ487vWtRoLxMajdYM937Qx",
  "key22": "5jNLK1GY8vUEF9VbuGqLTBikPAvmRMkfSdkppm9fBxPKsNgrtNFzxC48F2s6BaazZf6ZzK5xGyRRjWJCDccMiYGE",
  "key23": "2wPB2VB7RqpB8pjndiuAvCBMfrY3wsaQy9j2DNS1Dwu9mujbZPhyNr5w7URQFwiaLjRF3KdeaSs2SC1qPeY3Rhoe",
  "key24": "jYkL48ExvURvn3HN3wND947sqNfVgN4qE3jnane5geXr3BWj7jFagjFkA6HHJHrHJ4HZKSyjo54skxYWygFWpWy",
  "key25": "4bkXdFhdjfLvkG3v7qzpeHfXZNE1GYuSwq6YSr9U1LeHyKEZcqvLTEWHs7n4KVbaMRfHiQFraVMybi6jM9i3L3e8",
  "key26": "4iTyD63foWuWy7ykUYZLnpuES1VrrgirjfvigvsmoxQebV49rvJ6CZSsXFNnPExvXw8QqQarahuDksWNgSoLfxZt",
  "key27": "QgcSeFTJQgekFcjixTm6UbkJ9PJxKNa6w1AfZZhMmzyi4bNJM1L76rjdGRXkKaKsqC55ngrjGggR9NNQdqGSWAh",
  "key28": "2W1Rjmagen9hANogA8ipD1xkDWDYhvsG1Z2QGUEE8gTC4cLwpxJt5dNFMqZUEmDw7snrop8HnzQjMrSMRnNJv35T",
  "key29": "Gg9AKigpPuiHm1t3pPhvhUNYJHgGPydqVJ9uauA335mk2T2qGAZKBjMwuEwsS8oaDD44rn2WqPneK57ctxi3aaE",
  "key30": "jKfG96qfMzBduoeNWTYCCBEVb8Z8F85FPe5jw7gVub2M1CZwF3LfsAPrFn2xnr4ARjTU3r14PC8aCVatzxAu6hq",
  "key31": "5DrUFEEN4sATmg4n9Rbi9hnG6h1d74cPFSipYmX6zTdggjKBnZzfREJx7t8jEfaLpqFmLxiP6qgeQHRPUmJqfgwJ",
  "key32": "5sjCCJqeDyWdzxNbZiC8yvenk4N5sX4MJqzN17JxTuJmrDD9hrtjHHEP33cUxya9iAg416Mi54kzZd2ffRinf1EW",
  "key33": "hrGfnuxqdHZrRMd7zuNH15ciKM88V3cidfrqyZuAqJgJY4bdReK1796t8bemAhQSfHmtwsu54NfWubRKM1P6G4M",
  "key34": "5U7t5Ncg4siztt8RqyAMbDDBry4PRFWrtjxfgE9uu5oH8EMkoqFzxZBe96kSiKiVovu6Wq46X9Ek7t95JqirStcE",
  "key35": "QLbqP58DfHAYvei2Eo7M7x1CoNRJC6e5LaBYq9T9JgYk97nTZUVMoyHvovbTtEaU19wWSUhK1PvXGX81aZjKoaB",
  "key36": "abY4pZS3nMiMrwkiYhX9oNBUkAeEEzJyFhibtQzc4wajKK8Houdn9xohPQUeccpBezxPWizrnvzkHb49FzQWBpp",
  "key37": "3JvBmCiLo5BnUKMdVUAtpYpXTfRQSpmCUoGBwqse1FxtJz11uCbSPFJjAuo1KyB7JcKqxQ7UCTDFFmwRVVbV2o6X",
  "key38": "2Zf464okBowLPx9fLirVRPGAKC6ECjuAwTMCW5o7t2DcXnyfuCay8B3qsVBjUQ2itvUofme66m3ecPAKbovWtwEU",
  "key39": "3H53ZUzfRxVn7WYspAG1HHsNqVPNTg4pL6wjg9G5tSZS4cEnz4wNqAxLiUTkufF8ReYNi2UzjcTsivu6354S3EWB",
  "key40": "3LEaCjSq34mjqhztuGpnuctvtAs3efEisDXL189zGh1bn53NtSYS25YkZVmmq6Ts8kuPpLK8USEGSnx6jjPXvWdY",
  "key41": "2GFWURkzG3iienBxRbr4r1V9TUZWmveWWUAkimXm3PeBHcxnhpXsR4fxVXKJp3KXc7o9WDgGaetzhJ8g6kjsZZHT",
  "key42": "5qHBw8A8eGu8Fizi6FyKMkHmXVahfvz9hu9XP88eyBkDBhgGiL8aywKCk1YRCLyp6z1CnvrNMEujBmphL433NXmg",
  "key43": "3MmvizMKw9pYQo1RyEHPxyU8VKnSjEADxuCNhJFYHm56jsJmhVExNdDrJ6j6JbFQFnbRtih4jbRA6auy1BL9suoj",
  "key44": "4ri1DAvr19JLWHwcuh74Y1d8TfqJmESW5TXQ22MQSj6GmipE2K4nnxhXqxSUWvA13LymkMJDV3eZgy5AWg6yKg6Q",
  "key45": "4XSKp1NLJYAx5k7PffXKFevp54o51qVobYwNSypLun7GkJMoFnsZkJnqNoMEEFWkv9gwkAqunUU9us3yw993vnDH",
  "key46": "76wiRX82syh54wPnn6Paq7gd43b4W4umhqdHRvU8Q64uHo8NZSQtco6LXhqcWYvLj1HpJX6Dr6DgdMNUPZnvSG7",
  "key47": "22GtHBBwe3DA9qHsP5qbCTEDCcxHpMxrUuYjgnR2oiiVbVJ7QaoZ62Kjk7TvUyJMsKpqED7FVjuGrjQ3KxoV7Eu6",
  "key48": "4uee4PQeKjcKAuKbWCgDYEQz2VakHDxUjm5o6nMuG44nobJDmwPhVbBVfrZARRTAyckTD3Mwrk1wFRryRzRaVvu3"
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
