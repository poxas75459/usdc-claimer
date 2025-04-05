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
    "5LazBkdhqTvZgpDief8GQMt2gBJENt8raR9p6V3Yt7C3KrC9UKpKqGgMZCSujLgEe1tUKoTcQj4yxpHXSPEAtMi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sJe5WZWJdsRfL8tyMjaVPzVurm542248BaPETyjsDLRWmfszs5tVSbH7NXFapc5eSAtYMsPS61yKqCSrY8jeRG7",
  "key1": "2HYgBxS8QqtRAsFg652o28rDLQyLmaVUZjxChPq1vzHJU6KQaaypkWqFRQEMBx7cSSTmj18SeTi6unKoVfrB5Guy",
  "key2": "5daRwsu64x9GWjT8LaWLiRg18budwyq2Qk2xhcoCpsDGbgxwHbfJ7tBd32L1ucnfGdDEcdQVSnUiTJPT8mfzqjjS",
  "key3": "67jASxtaELrX9d7vaxiWVXBXtW2GGGGaj9WYxTa48fgonvonsSs9dh8FHFYUcX5TCjHnDG3TQyHiw85N24iK8jWd",
  "key4": "2FavK22JfpaNMPHWMtsbkcVwhuXzBHvi5xUCpHsrWFiJAusSxj3ejMCSCj4ddHdyK19Tzp8QvB4JA3D6oVGruZZy",
  "key5": "4jzMTb4AK4T7XJg1zSSiNAyrWZTnGHqFYRfuRsyDrA3pAdmF6JwjB2Tc8xoHogB4hXA8hTraCpjecxZauu9mb1Ze",
  "key6": "35LtVnskZ38dE2XUdSySuTCBMsyf1dHgNfNjALmxWkmCb7zMLEVeAsFQ7ccrtStSXyAF2yHZQ3tgyWxWzKTeWRLv",
  "key7": "o15t8guGZQtZ3vrCtmVdaxsDTHaYxW94UtuuwSRC6ebt4T5xbXJ32o6wthpj5owYJUTaPbr86y36uPRboE1ze6x",
  "key8": "371pwPCkMeZYqAVVZneXTYW8hdbNGdPaRwd3YDqom9AwkD1RHRMJ5PwbzpVxtK2DRNAqLk8f5tr45qxuoaEK3oJL",
  "key9": "2oZczqkGgK5JG46aNdSHaP4cvJ3SMfsymbowFATxure3Z9EDYJWXLQnjLYkyiuRpwXQ4hDhXwbxt6yoqMUcDVYqa",
  "key10": "2PaQ8Bhtnyjz3TWZnYTR9r9xvUk7fpR7aHaCdtitZqdDiWdcdoCFZX9xbd3Euygt2w7xS9GJgiYcGdqy5qbCPkfJ",
  "key11": "4JaFQK6LtjD4gaxxkPozeAp76HSczeZMiS4gW9d1NEtzPYEex3NTt4YTUJFj7pLktYbaMHmNJDUiSe89Hf29QHqm",
  "key12": "kwsXpbHXCvdaf78z6CYdDjMqaREdMNQVcvsNvUTwjdKLeUDjCRuh1SZ8eHJ6SGeXz4HWQFCw91Hwxyx9qR6FZiF",
  "key13": "GTjkTD5J1chmsHvZcUK43TuKEYRTxSv8P5cAxiW1vcPK275yXa7i2CVrWc6QWdJ8dELYg8uuPgNfFYaMsqmyMNG",
  "key14": "4PVP1Cfn27uA9x9YpHvqCQWDRmAN4Rm7wHy9M3A1GZirsCvQ6mD8LPM5Y6tJYHzZzk32PA6QMxb5SArn11kQpofa",
  "key15": "rqvmvxGAwfK4DpdQuWnLL17acNuU1zWLg2ryq7n6i5EWkqQAuA6DVcTsz8kceGhCuk7SHgbccG3zLoXQnDognKB",
  "key16": "jf2p9PM9N6maeXn7oSZfUgxEkJMZiNdB9doixPsFx1tQPEwonAkU568Y4Y5rg2oNyynh8zUttLDF821nF2oz5qt",
  "key17": "5AbuDwWcJoT13ekeVDP9ShcvD6xUTPgWNDHCmR2mE1kjg4TS1MNEW65ifTzptZUDfq9YiSDs9F9bKJR2j6RB9Y9e",
  "key18": "49fFzKs74MUUKTKeq8c99PDYA1ZaEsCA1krBvZTW6B8TWMxFVrQzbAdTR2Q1XEbEfgjK7ew8FUJYumbKFim1s12A",
  "key19": "2hMJ4sfS9SshXYPpjUZYNSgt7xCkKsSe5HLd7R8z4SbgZk1wH9TDsah35BzwGoZQrUK3saVM4zB8NzhecMB7mVpp",
  "key20": "2UEE9sCGxUo4aUdjZoQxSg77au6dgDqAFYsLGJGDMGZhUobNxEQxLW6bBRLDXrKV5xoFMj7diopdJrztJ4PTRhQt",
  "key21": "3Wa6X6pNGWkYgs287QH8SuaLdP1wcsGoLF2wcADfjL3ktZ9ZVgnFy2pThKckAtAkbecJB8ojXjqiTR2fzDmtbzDF",
  "key22": "5HfQ5b25CsG1xHDiusuCcUmgYWBAYcpNRXgauea16EMm1Xz8pna5fc2JpwcRps5qq9brLpju7UADARPC1wpqB7CM",
  "key23": "4rpYjrk8dVn8zdHcTyNJP8aJ5X7vjb1M8DGFybk9u6FkaULKT6TnhgC8nyNKZ8iJDufs7YdQPkj5xmGZM4zpUjKH",
  "key24": "5rWYqAFAmnHWBgFmPVrx1XbgKTonKNirtwCg183zAqA6dL4vn8wCjFRvktSySvCyyLyap1wRsD6gDRCHNGhTxP9U",
  "key25": "YyXBHavogufNf9rrYcZ21f3TnAxJTkjFB84x4YJKUSzZTonmEMfXBnnGGqKRxLmTdwZuJxPynPRsEYZtFhMBCrY",
  "key26": "3TjkKNDhgEqwcGQx8YzABz7EAyjP4zPe42U37R6GSh81iiKQmTLRZVY54TtZ8yzYgTiYWeMBHudPUsY2Qy8SVFQA",
  "key27": "5Tm6uuMzCVvpcscMGMtWY61gKfrzXGNVgCxEszi1hUeywKgsv7sqKWz5aDxqKKBWGBBAhRcTKsnZKbHHciQyEihr",
  "key28": "2iKoxGSEY7YjPBmow9c7He5jX3t3uAbRSUDfvZhuHn5Z3R1VM1jadpw1hbUuT63ria92MfxmAuYJQArd9ziJHuMh",
  "key29": "41YYxSo5dTpLVhwpfvfXBE4eAdcx9GyUeYNrNCMhpxNcbDtRXboxrevcrt2ej7MGyzfSJSiNBma4kUtd6NCCQoZK",
  "key30": "5A7rFoyXSB96wNyKfKpssApTFcDY5dMbcHhnuiW9boAF5nmfCE1R43EWqJxmN62oUmNiXaRxP7arNdtW3aUCXYz5",
  "key31": "5xkaihwdcue6RJgUHE1t13mSBXErsvspfUUqBDernM8GxrZw5ZvBEn5rTtKx8LiYYMXNE9XAqoDD37bN9wb1Tc5g",
  "key32": "5saTdK9h6E56d5oc4r9DVkfRp1w85J5szV4iJ53kNKA27aB4RQBo6W55ZaG1HFK5HB3wQmExNgjsL2YxZw9rQYp2",
  "key33": "3Gdtp9ZJ1F9eKwYoSDL9dBGPCgnxwNiyH6BtyschY5MuoPkmn8LqTCTBp1f8mWDkcx5E2WkmZFfK6ojJFXs3s9cT",
  "key34": "2jaeyggDMZLQygEyCBUCTWeGEizfjNbGXGsFf4ADu7roAHTkYsBjuXhBYLnWNfvdiDtEysVseChmHpX1h4jJn3s4",
  "key35": "4FCp6T2MFd5MFipguNsenGiFhgLHZeVbAEAXH5hDehehxKTWY2HeNbZQZHeEFQNZGkX1j875W6CS11VCk66CH2rM",
  "key36": "5Wy9BWJWuSMSqhA4fM8yNH3kjZ1mkrf7pmeyaQvYkBw1uX4MzYwJwhXJXrRu2bZhLRGwxZgJfUYevPFw5VBhZjAx",
  "key37": "221e9CHRUr7DtvnaeHWMkaNsWrLfojkujfRpwFh7LToJew5G89jsNsw6QV1ak6yWqgWM8F8eoSoGb966gyiVPUWs",
  "key38": "5jx4eJ8MU6nSQ94FJQSQNuT5ziskpKtVRTx3KL45kJ6UMAuUyJuktn6S5iSdLvKK3PtiJ8LcmmC4PvLTgTx2UJVR",
  "key39": "3ap2v6oJDG6FHF6mGzfgWYjFod6hnSe95U6KYhmzcDCGKRS276jkdbfp94rQnqLGaDWtTWxL7RtkRUgKmPUrhbFo"
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
