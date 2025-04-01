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
    "63BTa2rmWz3pjKWChrsqe6rx6dexF1wduHswdgGXeQbgeKomLiUB89egVuFcWToDGsUcuRs4zEMFqiuhMkB1Ne4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64FbWE3fjPYct25zLmQAhHQeyMkCCKyYDW5UV83NXrwZ875nxzwYXTe7E6vCEL2cdPpzkp5EWivzDdYwM2wG31Ha",
  "key1": "44Dzs3WxmDAEw8jZZGcXzTnTjTnCM9qVhDuPM2RuEy8u3sVTjSRJZ5dgrNNsz1qqb9o8Z2qgnJpouEjKpJMPyByF",
  "key2": "66eAet4aW5G9dHtMmYdL8h5odbfBupghvTyXg88YGiU4gEXhQvHNid3ESG7pDQAL9m27SAXux4MFQ56sZNQPVR8e",
  "key3": "4qSsqiiXkEefGFTVCGn8abfxMQ2nkGDb56DuK3yzaVvtvLNtMmyMFwA69XHHE5cGVv39XNifzDNKuSL8ddFiMQfC",
  "key4": "2eKf6Wg9cLTCgCMqHof8frVcz4mMrsaLyBK7HYKkTstqNHwPPmuFsMvPMPGYygBr6LkHbwcJawEaH4hcHUAGEitP",
  "key5": "3NgcSrocMwZVt1brsrLTegqGp9BgDjj8D5o7fuPCm8PFPKCkeTabW79YLLXwcgDzg2efuqKAWSFQdMtErgtuKSgX",
  "key6": "3WU5oviwWYhpwrMHacfTycS4Wnd4pQSaXuvZpN2NT4JgfViUhaayWaKeQJ948XoWj2z13Pd99arfsBjhbqC4DuMj",
  "key7": "xvjy4CeTDzkqeXE8izztsmafof5xwdVEp5gYH2xB9tff7A5XqXZC9tYjKZADobz32XAyVmsw5g3FcvZbvsWRKcc",
  "key8": "3oopA35rpkUxeJHWAr41poTiFsBf2285GbzLmc5YUZG4debWviusGVT6bjoUvGui1RZCkTrENN12hGQCB7Nqi6rX",
  "key9": "4PCMdEycjYCifNLBkCpMQtdSgzF2aUjSZq6MX5c1bDvkHorbXeKjXGntrT5vH7hv4HuFZRzfLy6GT5tDqCPDCTCv",
  "key10": "5Se3kEYTkGz1Q1ttC3Az2LqwTnbLP3cVyqwjWw37gF6C1WjEVZQ4DZwqYXfUYdD9vwiqwSKv84PQJgwPzoWQdcPP",
  "key11": "3nBhzSQa5ZZEotA25pzyJEd4nanaQgn8dE5SAGZ3fT631KaJQdt4vvXA9QQaArFr9gAmdAw5ejv4CTFppL8wjmRY",
  "key12": "2KmWTpf71QgRFqjwh1rgKFdw3Mn7UPvBNakCwuuGeiAszXaPGa3jchiEs6Sw64z8r4ychiM85ytDati8ro2hGbX8",
  "key13": "4WTTWnAQrGFBKBAsp5PeiCzQjUfHpEjHA7ZYNdpheFiXwak2mQhhFQkbUbykYjNSj86PLWqHpFLhe9Rv4Vrjgjb9",
  "key14": "3eeQ951R3cHdH66aMp8hMe3W8zDEZRDpzjR6c46Z852wevik6hfTidvP9P1ePSQoZiSMpZCv1mmnkaNbLBBC3t3J",
  "key15": "2QzFam1BETLx3BUgJTqHF8F8jrP1RgarDTmE9jGcSz9bU8V6BX6mkMmzAwd1sfXs9m6UVqkdDQFLoBBEgCSSjRRt",
  "key16": "aks22p3Pud6GzubDcNGJmg8FtQbtsNPtUhvySfFffsSEb8XbBY3Umob1MTEb8xP2Q1mVxGprrz2yFrmJdLcsCCs",
  "key17": "5Myf5dJGsS7ddF4voBrxGDErt4oTuUBx9Zuj9zFg7xWU2g6UReK139EzXc7sUBSrRrBmCEpLL9z5SdPCHkE82nUh",
  "key18": "2Kech7BYez1PWUKNwskCuL1ZPsjXzF1HBFSqG6LFn8sJrXWmWEtzDvwLiYnzMhyHQHShcNvRRASG285JQxrk83oM",
  "key19": "amrfC7xSuuGc1rLM1zLqSJ2ku3wwxvzeKPdHvzwxwyuwGaDMjDDrTrSgsU3x4GT86HpFPFA4LvTHqiMxXEsoszN",
  "key20": "24NqtUckJYpmtrTcMZqCBzXQf8yteLwsukxRN5wMf4AVVuuQF2P4ZFDodukTKce8wWHSqPsXkwCqJbeoinjzDyV2",
  "key21": "2AimhQ5wJevcB4fVjgTLCLk61QGuuWzLhrkizZYRfiDUWwtMBU1iADGsKZugbokxUrEDq5sZyQoDBGA5MAcQLQgN",
  "key22": "4nHppHdxtSqhhUuBE4bWCK6h3xfW4xjkqziCxgMoavTmc1i5T2CDZfgVDGB8zDiVxgupjXMxRu8HfpYPHfQmaaMV",
  "key23": "4PwqJHSZzFkLznsdcqosAQj5Jv6UK125zETmpSfaLxiEbFsjzxR6zQYPemQR69B3jSYN3j9FzqqHeRvVSMNQiKcd",
  "key24": "35VL6cjiVgm42Q8NjyVs3dHDpeTgj59mz4DDgsPpZJ82XmDsLgwQkb6A4BGRE81DSPoMM8qJq6P2SX9md1PhAFDK",
  "key25": "2A4QnA8bzjtUsCNZRwnpF2kJdUuTc4BAEJpWv9TkubT3GDcdbDy13X9bLmsoLDJpzhEg8QKoK8e6EfGcnmioTCKS",
  "key26": "4Uxu3hF3RDTjQmYheHDrqeY4v5B1Z82hPrM4TsqxLcsGRqaNkS3iPyt71kdJ5avhhtUDHfFQFrYepAqx9jLbgJeC",
  "key27": "sR5MaXoUtbCtHzuWgUhQZe5oLkRrKd8mEzLzUKwkLWCSDSjC3nEtbH5y9D7mviAhKeTPc8zJknPxs11RasBvDwx",
  "key28": "4CfxjbzTCPJ2F17eYkX2vbx5ow4oropsL3QcyAvMAj7r2GLXGf2vudMS1aN3oqV4w4wcsZFUdboi4zvZHxZngfSL",
  "key29": "5aUduwY2XA4UjrY6FAPdPTwCvPrLoFNm7PzN6AKKEmG11EWmbFiBEUSX1qtViAULJsonSV5DrLJAseEUPEr911YP",
  "key30": "8SBbMZviKR3tSEz8oQQMUfQqeCaKEqKapFNwtvqUGWUVY6Kio895dw1tuWLUSHZt3u3rsGFiiBiqfvebZctG6cH",
  "key31": "59cw8bimgikVnsevWJoKwZWb5SLBoSuLCWz8v2cCi2rBQFGSpB9GwPeCmBCNucj8XyZaW4dezJbyUqNf2cZsvL8U",
  "key32": "3kp1iZQt8gZrPNE2yPeR2e6tSq9VDP9kuU7hhyz28m2BqTYFoXZefL3Mzg1TpvPmbwMnC119J6wA75gVFsNRQc5y",
  "key33": "3oHGP5iwt6i9Uu4gHiJSnfFYYiAn9fTYdwCyFHB124whZE4S1akzyKxPXWhBQPdF5EQBCSX2pKuWmyi3y68hR9eZ",
  "key34": "cRYrmnyrSAbnu8xvjZK2soaXpV14EjWBSiKaX8LDL8efzLfRgBEYq4urRHq7Xi7jRm1Q73C23VwCNoBc2MfWshS"
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
