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
    "5qdF8ijaMKvGUjBBsrPdvrVyjM7QzQgzJJFhT1eUL4o13WsJYWre5YYmpY48KQgGSs9DCpwXQwaC1RRa6Zjxzpt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65TejGhc7DtHW74WKWH9T4rkXvj2wL6i9mo78Cffrexus4D7cxhQXrSRNyECrU8BLY8cpVbNSX5LxJCgYmsjqYPd",
  "key1": "3v2eG9HPks5XVyjNqqV7ULA5sWesQwkgRnVsbkbCKgLetYQ9YVZfpGXVcfTJd2ic92Ed93fnh181dYkSV8mWjCT2",
  "key2": "4eHWSsoWinpWGCQxBQ7b1n5jxVjbr7b2t48HKAGdoSmzFk8wAV53DZnxiNJqkebypayVpGfRWXLPf2MjQw8EkBeU",
  "key3": "4UdPqi8VHd3yHyjDQXem7aEdphAPMc9Dp5qEkHCvFJoXtrgYfRbXQujAH82FmauoaRb29VPxMF8jpGSd4YZVSnUe",
  "key4": "3p8SWvLXyEtE4kaH4nH3qYAwNBktc27iRQ2s4pZhQTqmoa9C9XZ1Kf2pdWvwDA9Qq9Lk4AWXDvsnnPVkzbry6Q9",
  "key5": "FH7u88ZAt1vGsv2vyS4TvBACnmFLCfUVdEuHhwmeb3Xzoj7GraZfDbxUu9o15Uoi2nQdKNWDKS1nar4dqKMzsJe",
  "key6": "6PuU842Jui41LErYiD2DapgQLGMfFrFy9SEEtFvnPE9wmQ2bq8jf4nFzXFE9Jt3qt6zhxUneN8NaFrcBw6iaHW3",
  "key7": "5fudMGcgMbrxQSNP9vSjZW6tVtFSm2q2fjexMS1S2AR4DRCRC4uuA1webnoFo11gHbaKsMM2wCqxPD1vb8hLEnq8",
  "key8": "5V9VriLxLRXRZqgQ1uEbRmh8S6yPas9E8sjBTWRr6iT4cRA1aVBEBhxECtKyJLDzzrzVRCsdgh6JerYjcjSZZFeR",
  "key9": "5uTGx1nYay1ZG3fGCG9bnixZxqmriZ5WHMwCNpHEKQVtKsHe6ByBQy6hDcRJUFELi92uT9Ljmxgs2MJasfcsMAHR",
  "key10": "YJnJiyL34StSiWQGsBF18GLqCkk78b53gpCDrC8KpYcoWgEaP8FNUNoWLwgZv16GawqFMsaMaU2Lg8ZweqM3K3M",
  "key11": "4NWefh5ee6dP4ShE33AdJhh42QV56vWyAcTxXg1T2h2qvn3Gibwb2CRz2AgU8c8k4K8zdUGia9ZSChz8ToQhjNYV",
  "key12": "ouWL9S7gpTSkKG2YWCwPdgJSPH41LPyCs36JVsrAPEYmsSXvfUJ6ieY8npQPrumMFpB2rDZ9xMEv4pWjRCYZy75",
  "key13": "5X6pmuLWouauJyWjGz1oAXyrk7xJidqL61ifYJR6NHRPNpvJbjudpyS96Q25rWGavQ3P7VdwiKZfd644pVtHCbWU",
  "key14": "5HsC5jsgWh1kQ67DYwRYHNiDEGMm424KRoicEyFNkE6VZw9nt1sDM8ccjrijK1YiYzKzjVSTiM2MqUz2VDajE546",
  "key15": "5UXUBvZzsqgsc9teotc6aDKJJAaqRB1rpn5NPkNNda4JcgVBATe8nPDB6wGiuFZyFMpFVvwamBf3dHzeEWT6egyo",
  "key16": "5WqZATHuPiuoC8duMBVhcJtXAvupdcCrMEwBFroAgj4qgeaovtxVj5a6fJ5Hq6eJFqqENhrxNoGCpiVj19T4dUvz",
  "key17": "3ku9QpJA7F5Yuxu8Dnoer3HRENPpXiEtoNybcxayutZ5aauK72JfN6B5HoU6A8Q5ZjZanfTGMUXjW6jHBxx92xrg",
  "key18": "26JkNuos2aHkoSG7JtNohzc6kE6TY9p2wudyRi5C8Gy2Eho1p7Q4zuhnRtYDxLMRhUt2J5P3FpwRPFq3vxWbx8Gk",
  "key19": "2fXWVJQExNVFJi9Ag6zEciQWBgsHaoikh6GKhdUZLfQKQatvc5t3fNWSS4kdjaqD5sggykdXg8kGZAotuoQc4ouT",
  "key20": "GsnKeqe5CJNqk9ncuVqUv9R1wbqBRHRNkNSEzzqSxvw3xFLbSpgagLyqL9CLLvwjb2uYbtuFUKChLip3TzyUeXS",
  "key21": "2nrvFxKfa8gXm9YGZvkGwspPe1d4xou5ELE7ufDDayDUHgGtwH41S6p4GvjWF5ot8xhhGUabu9xfU9iGxD4HTfkG",
  "key22": "5vqk1K1fnpkiY7xB9h1PBTaZK8e3VeR9EzK6cp1xB5uxCyFxkHb7ux74LtwtYaKuHFrDwXtqc7kqgNGi8SbUFrXW",
  "key23": "3HA2UvfqaURvooW9x6KgPCGAvd5H2cT6ngqYYhmhMdpau77h3YpNswhTPfqe51vVS31EDGBhJLH79vmFmpyLn2aN",
  "key24": "2v5hegWZUw45MqjXo1w896EvraSQwtMiV99WPjiFHMgtPjt4FLGv3tvEckZKfGMb3ZnLADcKbdWncff5qw5C8ZmV",
  "key25": "3PyS1VjF6vmA8tGNGosiu4WRvaA4uABB7Bu6Mj5DPqmYqhyCxC2e22xiAj6XNeX1UXREYbwnHqyiMQxfUxoF96Hu",
  "key26": "2xneW8Y4pcDQx62kQdyfx4agpnXv4WzPWfNgtibhG8zXEp766eHy4sPzTpVAWakUgJ5NspfudgewAsbQHntgWbTD",
  "key27": "3aywfSNTC4JE4jiEWSyysfwkGX1XZAK4hjRsf3oVzDrwYn2Aca1FqpDBS6uyKwh2usissePexxUNhsuLH6hXjHem",
  "key28": "28NwjPEi2QiGndDufNyGTa4DygU4FZmUoNTAgVSJvi2wqqLGYCaWmh5HoaEYht29nNoSZVbzhbrqajDoudpvLSfe",
  "key29": "3ps8Au5i5d9gq7YSvougFzBFG5xoxsoQ7yykZTJ3rRY6g8dDFDsH3tbmZM2xp6hQe2iTWCFyaXarS8warWzkHnWN",
  "key30": "3KoDLKTParnDhgd8dAPAEDZnSqqPAnmTiryQKc9z9kW42MtT6LAVgtqyvbmEnW2b3jGHBokmDz5z3Z531RHdNs2H",
  "key31": "7hA5P5SENTSq16BMcVEdizLAhR3Jdzi1RkKEtLFJCP4oxz6GxuvveZZpNz5PZw9YEhRinZb6cW8UaBDQYXmtquL",
  "key32": "5p2FzxTNjd8WDBXGgDBRB6fdGCJTDFghJWWySVPi2L8yudvxz2qRKcBhNj639UBZDzRjorKyeKqmkMxZP7doeHQg",
  "key33": "3f52gFBMwaDqwoYt4pm4ChhP2FFr1qKv4Annjw9UHcE6nmct51ekkYWqMHE7AQbVtvdNGyFUzFT2kzZjxSTaTMm1",
  "key34": "5NGHox3vB85R9Pbv8mXvXqVMHahy6px9mATcWPnUuhToQZQibuaS7877RTtBGGcAvaKD4P9KnMkgrana96HhDq28",
  "key35": "5GuGMkpXBFhsD8aaMnLa9YTV3PnvBUv7VUhb8vGJRof9fbsbdpCHWzwgadtCdZEx7B4KFBJkkUwz74mGBtpWrPne",
  "key36": "4WpLBNj9RcB6sWXqgPpDwHno1wCCz6Sg9sJYFk9JxCMLQAoJwNGy7rrNP3xtgWc1Gu1PyhkLqvYMcnBmsw5QHdmM",
  "key37": "2Px7Yu6cmYX1xCKiMmyiMpvAwysToYTaYvgDGrp3UwHqGGdVgZvET7kzprP5juXQNeEQ21hcWjSN2puzn9kGM5Gs",
  "key38": "4LsgWv35Te1uRRCAi1Y9bud9Ey49YqQBf9BFVVXfqZoNWywKwUHSvoza9RDYUUAtKm47rS9uwtVqbxhoFjtJ12Ut",
  "key39": "2ng7UV9nd88VtMXpyh5Zse29cKYaEm8N64hzuQZqqy8TDwHkCrCfNEp5pmLoWzso9gCfBxaWdYHewyBxTXx9aMa2",
  "key40": "5U3Ki5m13A65qRJypFAF7p14PGQ88pN9Ji2EhP9fyob5Gotrv8ofRJxBergRFWxBoXZUjh7yu2PBCETG6sXEjC1C",
  "key41": "3hARRmJCRLuZZ38Fz7mus9kf3dr3JquHQSxS3KhgMbqH2tRrbWLsuwcidvRpeEztmXs1EBdM7kHTRZEZaRSeTQYq",
  "key42": "2G3d9YfiB9pnF2Fey1zxQfiiPHYiwaJ9g5UmfzhDY6L5Gy92QyYvNpovQrkRJboWgU5yiDtNs5MMQph4igxmQdSJ",
  "key43": "31Cnscr7hh842mDkHGYi1ypUigxprLVekxZmScGsymdPDYcPZwkt24bHNCoRGy2X5kscr9MFQ5XXtgdZWqd3SSa6",
  "key44": "5W3pELLyRwEhXi9WkqmPRuU6idmFAgdv3fdCUERQZPmRpdrZa3Yi7tzCgsQbEW7dGWcAWCduAvjiYpxBy7g6hp7N"
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
