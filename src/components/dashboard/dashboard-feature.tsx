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
    "1xqfgC91fG7BYEVHgF2Dz9KBhX37LVyBYTBT2GtSaTasyh4skty9MusJmgcKPHX5EaHLAFyULpC9eHqoV8mwJPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iGdvX15Jj9hAVseS5YxUNMhHpAJMzNXkWU4zFsnTvgPj1jaR6AFEBAXhFR1MCF1cebhr8CA3fL4WJ56NTcJ8du9",
  "key1": "3o7HgEAUtJ9Di9tM3nBGxPsUdCBsSaC1ZFxPah4AFTsoWdqNRNgDFHaqLVQXRNXsfyH3pe42eKrSCwk7xfFWPhzm",
  "key2": "4CtmzPzJLbf1v3vkTc4AELc9qVYYkMijJ2vPgEVQKtBxP5YhNCqCxfKByH8hzMwUw4x8mYMwPvRC19CKnMzJjpBG",
  "key3": "3dAKCyGqGjWxjxZ9nSVGk16KhwPDWqtsMc2Gfbt5iT66qT5woosRmqeFg4EJkG561TLEFfXLaFgf4y4oCQoVBjnD",
  "key4": "5RzpiWRj3TozNvTcMH2V2UmdQU8p3RtfEgRuPyzS1v7vm1PPsDG7NSHhH39LbPV41M3KeKitefyrTX8x6AvjQWuL",
  "key5": "37CP7wfU1jgQWmHYktctwp2x2qQYpoibEas7Ae7d9udoBPdoWwx7u1dSTwVtBQpASsZSGC8mfBu1RPKWoqvUXNNm",
  "key6": "4oDh5ecDoA42BmACwTGhGfFB1QcxMf98LjBnSk2GWtu1qoyzyHow9XMCpCDzZy1QvbHt4b82Mk4yysrNXvVr5B6j",
  "key7": "27pgMUB9YRKMzXf8pWbz53QDiqhqwh8A6zhxmEBbatghmHwRBwzCmi2xRmyAy8Ucep1k5yHT2AuZnUZLMxbd3X2g",
  "key8": "UBGnz5vYDScQkmBp3bPusRFC5qQHvULtvCiv4wJ4xKs4X43h8Swk4n6fbmRu3qLWwWxxesjKrMJGVLYyDhoxU7M",
  "key9": "3xLFNpUF257cH9wFBiExW9jMogvMoVDwug4E427zkVZtJWVaexAVTJgPJyrTsU2A1AATtkXdcYi2aEhZTD5tLJLz",
  "key10": "kAMHVq86nRtogNnhCsGrDR3DXm72NZkNXxvrbLxGUynp7qxRnUnCk1y9fhg9Y9hPRoyEZ9Bq1LpMvUCR1CFqUS1",
  "key11": "5bAfx4UQ5EaYqbjhjePqSAngNzYQ5jJk9VBZUZeBuitzgxt7KKVT1t8X4BHGJRUB2f63NnzEyBtmYPTn75spj5cW",
  "key12": "62JrHNwQ9oVddnpCc6zChdMsARChWTtDT24BgT9vC8YjH9Mo66VsTsgaEMmbjUiuuuQUV4oeJtxZrNy8fCeD1nNU",
  "key13": "3L6ZYFp62vRkMSCHitEsURrUV6ZADgLb4ZNexYM5BngCkZSUPgh1jGtak5MwEWHdf4bgU9TDuUXakonLvUyEz5X5",
  "key14": "4pDdhH7zsKGvQkkArhjRT3djVqzg2QjE4f5a3aAhTZwnc2oGcd1GHrkpJ7D9Z62wibv5uyKfLdUvhHUndVGqXhEF",
  "key15": "5yZv6r5o1xtViUndvQbmLqpAbYhWqkqvULc4AVSzoRTEezQYWnuAnuAKJRqHdVMGFR6Kfgi4eDnBxacYF9ceZnzz",
  "key16": "mc16m1Jci5ZikV6LicQtL9osT41R6VerJb7YMeT3SMxe2SJEt994p1NwapqEEXqLqcfWqDVRvyisTnT8puT5dcP",
  "key17": "Ef5c255H78yZu79JBZAEfQ6EGJRD3vKTzX7BAKqitHg2Kb8kuBeoetk5fb8sU5j5LoKsSZWJhfh2cZ6RnMzBKtk",
  "key18": "4tmqcLvY9KYxn1oTvSYWD3wbqpQM31HxrKctEUw3MTokUQnYdf3vEtY2fa6U39aEKbLzaPAf3KPNANMgdqPKhGGH",
  "key19": "54cwPXZSk2mfqmjhf2gj2nDgZ7yW1rk9D3RqX8W9W2EPQ7g4r8c952WmRdZWLcaj9FjJZmMQSwggDVRrf8NKzFts",
  "key20": "5MvxhiHcj2584em7YNhCnjVWrNTFkfdmC6XiKDdnUa933qPxyJw9jNzW6VbzWdwqWLggjgLxMzFRqcD9UUmPAwfT",
  "key21": "4A265ZyMB5YoXQRrcX3tg37vNvMeGiUoT7HbJhRXgds2QihksbTmDGfLD8bMQMpQ3KXZqgi7mUGvFg533Qvfivrr",
  "key22": "4bMLJqorDJ2a1HHUwTRQk3D5nhtdhYt2oDu9BS53MBAsykTzFF39i5CDX6J8SnyyCkJDeMHrLjv2x4y38xEx5SK3",
  "key23": "4ZyAvVyJdpGvEahmEDdxyMV6LN2q39aLsRbTTvhaEMnw8dgybX3oK4e8NLtqgrkAUNtuMomqKbeTku4jJdiP4H9f",
  "key24": "5jZyt2bQRPKgmU5Y2zEV8T9XnaFEiS7E5MNMaUDivoYMnZPceTkaWERS3BZiQzrgSr8Nmqfb6CrGEKnGqBUA1ubM",
  "key25": "2UUVWWpTaVhVsAg9ER31fi9kfSA54gGMX1cSJTc6avKo8mxaLQp2sq37FKrP57Z5iKdLo4TxrXwx5SULcxX4E57S",
  "key26": "3uFC1HNPhScnQurQTfnxBvt2LZJydGVTrBwYwb96tnRGRSDjzyTZD862rgRQhhm7VRruJqTdDwvjRWLMLUFWkJth",
  "key27": "2aWZTaijaFYUL28rBaHpZP41Yjo21ucNaxFKKfJa9cqg6xHhWxFPuerz31kFNjhEEWpBiGsp36TqH2XFZrXHHdTE",
  "key28": "49gh1xEt9aqTUqqL4meU5cTWkDtJbNDKcrLbXEP8PQr1pNfJK7b1dWCgtRsedadVUbZUXJzuuYMbHarayPCsxQ58",
  "key29": "31j6qKQm7UULhGbQnNDhWdZtTfmwWDMxDvUPrhtHirRX5qR6GNjjMe9bhoqgDmdfw2NhVQorbFXqfQFrFqfPYg7p",
  "key30": "5venZGFeChMwbZENg3cf3pNM4kmVAPLzr2H3WicLgtuHdZMzdx6i6wYrDhofXgEwGi1b7hVNF6vQi2ayh1i2SZa8",
  "key31": "Uzu69CJxBREtLh97HuRx54heGc6m6LYw59WE85LbwLh5FecEeWaUD6vKcGc9bdzRgCSpuGU5tAcG6c1ftWvjSTb",
  "key32": "vyU6jhYB9M6o5tuXwHKYWfL5HwHtiHdm2wXLjw318S7gh2SDjWedwQcysV5r27iMzYadSRKdKtesx5E44vaw7Sw",
  "key33": "57PArLrQgLyJaeUzyA87SvQeJk32E8AnTMGkrjbKCuqk8r4KP8CWHigtQ2ei7asWXcjcuQJwSEW4xAcfJyBE7GK3"
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
