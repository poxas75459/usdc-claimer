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
    "4cWC8651iA39LRCssLwo8vM52CGJgNBWAkNb5kpmwbtXXjHhifgaY2HTwWr2vGmbdeYsxo52VTJkSDNxVoZMvxQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mr9L1SQDjd3NCKhxnVWcd92UifJkibC9s8QxuVzT178wK159FMSpGERLn8uAU2jphDv7VZ9s9Y3mDEQjG52U4a9",
  "key1": "3DJ5FdCMKLB7Gh4pnVBNz699E8vvcYcNwaC8mq5Ew56cd6jPU5vpTBFrciXK3V16DTEfjWYPHfkzTNSoRN5PyTmo",
  "key2": "67RsRQJmAcspTBFjVtxgoiAB9cCwQgdv2QRNSi531bt8i5JLbotJvmtkNC527Yy3sSSuRn43UAJFhyj8CAhAfFyF",
  "key3": "2b6aLwLfP1JSDBzUduy8is8WEv8fqQDFmWo7WFMeYZ9KFusiUnhxBGkKp5ETJtEcVksPC1YbStA1vn5qNm8QdX5w",
  "key4": "4V4ZcS3zEeC4e3MKh4VZtL6XyUvVnrY6PVfczwmu7vbYTJ6U2q6E9WH7aQ168JP8Ta3gsfKZHDCYMMV8ZM9KivD6",
  "key5": "2V2Nkn987hREMJcGCQ3JHNUxaLjCpM2aWCxBjy7crLrbQL8zyh1pcWGoLMmueKsvXByKMxmqUNbwZLzCPtdMURnS",
  "key6": "5twP8nDbdvd8g989zY998zfRVyRtUyAkMvTmeHNHDYewLocMotyCMRSS4f9gsYfcHv7kc5NLPo9oyLVSwy9X19ip",
  "key7": "4SyGVPaEU3mRDPz7SBXpv95fZzovzhhm4B62chT76832YmrpMY11VjJMFqfgHA6mnPLf6iLPFZJTwzhzEWM9Ceao",
  "key8": "3wFjPmwTDsc7nuxhqyMmHJuTAKDvGT4EopYFWigFUBbKTsSGMYog54NXUWKAezKWUiwKGr6u9AXjdvEaZhTh1vSV",
  "key9": "4A4W76gsqYTTg1LZjLG3TCQdLfFcVZnMV9qUXezvWHBP3CRgYuyXKZjNve1QhTY5xELV9gnR1Vauz1vi21snpuND",
  "key10": "46Qp8E8P4XYkSvRsWaQMyRtAV92nk7mE29Yr1mcKrTPwZFJs9vH3U6nkgUkEjKL8SNaHGEGVRmo6kCasA9xvQuYX",
  "key11": "2hjnTXN5WBpMid2dT5BdS6LdD5Hog5Rwytohjd1vjkQerGfCW6x24F8Qeds4uME16PnUWfVFvnBAmfkh8VefVWxH",
  "key12": "2hymn2qe3PgcjtfvQyNudGDmZwco7V15HBncNPfKGzYS9V4zUTpEefrgxVtfF1CDUuE9pf8UXLQapg4G1V3hRkai",
  "key13": "2NV761cjGRft9UQ8R9KgXP7dXZzqSuVx1vXFVfFmiruy9k2L41HjQjN2AKXAeeKofcDy6HTAFPjfo951GYfpiZTe",
  "key14": "2cHijmPu8CM7XtCcr3DQ6AeofPDsQQ96MAwue7Kpr8GTRaxZcoizwvX8VhYaVDBGQUye7nmxYhvrWy97qPmGNJWQ",
  "key15": "5LKTsw4KS5WX7L3QrStskBWDEPmpUCnLVPQGREQ2k3yFQJV88rzjNMnToyD7azLPf1YhDXE6PawWGHJmbzWa5pc1",
  "key16": "3kcR1eG5vy5Cb1uHwpGWqbM2sWuQif1TcLgGeFz5dqtj46wvQwEB2FQBM9WZGtapURdAeTk35zSjVuePjCZp3iLE",
  "key17": "4nDczH6N135RtCYex3nyv9E5RwNbBZQP2vEhN3DXTmZtxbxPxy4tzKxoBkvGWJqgq25CAqQWrgZnxrfWaj1xZ572",
  "key18": "3e8gz5Wx9GkwjkaBaXJVryDcS2dBPanLQc3cANCQJnpd4RR4LSAHNKHyVS3BSo3AE9LzXZz5Gbw8zuHEwy6BvwEo",
  "key19": "2aorX9w8nK1bZGozdHiCyibtC5zmeXQGnQZPRvQj51f5qAh7GwAQ9F3xfgoqXgoN5P8nPBbMhZ3MnKsLhvZNYZBh",
  "key20": "2ikXDaM5bRumZLmXjF9n2k41MfNXV3ViLeWFYGGn6iP2FU545kkTtRTZo1quPa4jaqEspQBBvwfDpLesELGr2Aqq",
  "key21": "2mdY5BaGzF2LytgK6VJUJumccAAzSf1EnY52SZWq6WcGzKRPp66ddGMF5XDPDkMFqFsNeVmAyGbWQ4GPFWC2RSjN",
  "key22": "4aCnabHaUTXAhEX5pbJpKP6z1JHrxtZ1GM9PvCaS4PrK2aiN6aPGS4wHGH81f1cDtnpnmNoDXEY4g67zgt5N4DTG",
  "key23": "31hz6tDUrmMKf3gFejgHCafUhyjwKRcNeB8EAzjXJFwGZgZaZCMXpYFSQnoMggRJNgqmHciPJsBRbLKCTEDRJQGr",
  "key24": "3vtawHQoZnFwH4nioKBDq3Dh4bY1S2uNdPSswAdzp2R4FKSu4tGsiruc3uaGBTqcZpQEaja2reJKBPRf2Rqp1vXY",
  "key25": "4iEtXJThhmz92CyxYEzDXWnoyhpZxn2kvMMtcs8Ag4wH7rDNbqSapa8hXoLBHduDdmgn5ZSNnYBrDmBLxXdCVuNt",
  "key26": "4N3sFM5Zceu9fhRuqehj2NLwagejTEQNHeFrRsXa1YuAYnEtaUWzm91owpmZ1ERQYwsqCVX5kiPTCZ6k9zoVU6F9",
  "key27": "5xb1EjnhGWQjcaQBYEhpV1VeeBjgvsXJC6qjKzpftuZcYXmXRwTNfrCkhXZGA53Tt6BXJcQQt3UmTLemLyNWQtEH",
  "key28": "wAPqWeNd3EeYnB4aWrHzAEkZPQcdkrQMznHxGQf9ahXyxv5UJY8aBh4hWZhKDcnaoH16YdSzKt7VfGGAvUdMQs9",
  "key29": "4nHZxQSxHxf4JhuKfDbDYNXkr7MuZBiBjmwQgwuW4ici7jUaFxWwMqSpwP3UwKFkQktVPNnTaF65JoNbHvC1aXvC",
  "key30": "4aNUJfBtgWpgjNv6z3V16hdr8jF2EhcH4Q4CNJK79vRMxpTzDwvwpcqBAjRJy1YPLhan7WMBV5DTPnL5XKaABpwy",
  "key31": "3MoFiWtriwYMB9Lj98ctb2zDdkEkFSTNCr7FGgmi747EiQrB7bN93YngXPMXeDdmcADuN7EHWHJ5FQwTKixmUfNs",
  "key32": "5FSdU4EMc5Ma79BZxqyfzkSfV1tFaeNcFdyn1BUqaA7t1e9v3GJkimfbLUUAaJzd4ScQvFLHrvmASuVKkYouqjA8",
  "key33": "2NYmrLfGUwUZJZpQgGAHtEDQusSkZ84YXYSG7vVWeYNZT2gN9NVD6K5k7TFWgAngbQS8Tma7GJCRA1enX6r16i94",
  "key34": "2f9vekg6K6wdsdggBrGsUmgQG4HJxUMpBBuN5r1PENrDZ1smzyk8FnMa3YXRNvUtZ9AQ4CT9pTXLkWqykGAePMpa",
  "key35": "5y7uRod9eR8qSXFimqVCPeSR5WPNWzrfPngN582uSd53mr1ayxXoxvzCTe9RtZkUFqg5KBBbRaxbXEij5DBuHGeQ",
  "key36": "4BF5irEXpNjVwE1KCsfYYKEEodtrrEuwnDUCWCmVQLGzhJJ8GZqmazmATpSowMP7GBssFNeCGD6guWobvfin1nuk"
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
