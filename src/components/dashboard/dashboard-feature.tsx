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
    "3pq5b4yq59qyJeWJVSc3aXDPBPKnAgUpRjm2q5rybpy134jy2chRCg6Rc2mqop9X2BtLD6b6AWJ6AuYRuYAtPQPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CNWRAJER21WzQ1WUg5DUjetTqPwJCfbJKQAD3bpxKq7wjEmdoaDUxM1afebcPdf4ss6BSEwdkM7AeVswYiz8Pqv",
  "key1": "skRYqN3dgA95oykVC4Ny5odyc8aqeDsxcFwpPQKzNuuWYixc8WGHz9qL3YHZRkFCjJZxdbXsTnKbUnrv5vkWonb",
  "key2": "5TYnE1Cy2NPfoUcfza7yYojuyx3MD4Bd2s51oE4MWWwf2YiRJ4yvU1ig6TuJTrXXdLk9uw9C9SK1Q7MsZkgkUX88",
  "key3": "4Zxc6QCAxsT86dQTv4HUVrzuemusUXhGDxpTpef8usPUq7zaiy5sGBawiX5dBr75TCGhGj9wZaUGnqdPvTR72sdy",
  "key4": "4MYr9EA5pLQ9EWCYD8qVDGZUBx26QmoqixEWFMVAoGQhF5DK7wXJT8S6toKmXkDcFUJCnpvmLRhHCStBygPQC3si",
  "key5": "4z8pyD6wqzgjR2xhrWEWdyGaew35nap2QFdKTbM4Htbd6N5Ut79gj6cyozHZvcriUch7KYMpMnobsFJMBTNeUct8",
  "key6": "4r5EvBs2uQacs4Z5ce1roVpRy8vTDNY6t7233jMeqyYbZq7aEssV1a7XPCF8A9576Wjok7Kj5hAWfxxAqeAikjZB",
  "key7": "vUvddLp5iZauEMwXGznC5Pf1TwozURxrAkJuqt8UxXEcSe1YN8uwPamr89T7je6Ai4HBbjq3zzQdpBnsmpTXphD",
  "key8": "4qduKda54ygXpjCjAWC2smyJW1dJqGoyAAn2J4aYWxweXypnVwPXSAn2eefuEw61AU4E6doXRNtgZ85yU426sQUm",
  "key9": "4px1EMFbP7mLC43mfKiJwxu2pzrWe7QwuQ7uzH8WgP5qM9P5fR8gAdV2ekSs9jcopJfnvYzXFa77Cbo2G6ET6c6a",
  "key10": "5FxxZvjBZuygJvKXcFCMqqpEc3ypaQxYJxvunxJfWNYcLiN2n1yLxbLhqbAjja651cmc3TMKxJDypaT7s6cHfxDZ",
  "key11": "4sQcfCFgSZ5TfQ6a9R1hUEuVqshgU2kWkSJFoqGfqHnoRjhBnr3w2y78Qowgh13nkU51dCiCo9frTJ7VjzMeAvDd",
  "key12": "3xL4HN5kdUZJ8XNk8LJiCWc3Yb4RbK5YsJivpjk7wPXfh4LiPaYzG6bjMhUtwbSB9NsQc5QWKnv7uTxvdqAmDouB",
  "key13": "5etaSShjXQwcLewKSDjY3RHjhY21Y8EkPSKbjY5ZGbBHxh4CPzgvRXz5a3zkxRJf1BTnGQq6D5SRFomKStKXm6m2",
  "key14": "5RWvNphTrKkWg5Wx9EwA25wB3G1CJ8H8gMayy5LEAZvbZUS6AcccvKdVgZvpbPPsaVpu2fqQgvP241Ln1Ui8jLT5",
  "key15": "2vioDFytjgtGH8md7EoPTcB4N4u7YMLQzMeGf9mEzRH36yshRBeGJ8Rm7p38QevbHJ6N285AATwCBbg7MGE822Mc",
  "key16": "FXZtkPD7aLiSSeknWRx7Fcn3nJA48cWQZNcjr2wGTmAx9uuwW5sfi6CoDpRCxXYy6YPUMUgMzvwAipXym7zP9J4",
  "key17": "3eZyuoK4YApckD17VCD41NG2bWoPRFK9nQv4WSg8rWxZYyky7QCcKaxne9DUk3midnrjgHgSBb94bgGvaxSScaH9",
  "key18": "4wz65qbxbb1HmohiFkAg3saVkMG7f4j1rbStZ2ejQ5WiJ6nKrgw9mKuShRsbQp47jMWB1zmGeZvsjturPQeTX9F4",
  "key19": "4dHW7uNfYwanDaZ8rciXVqnsC94WA6W3HW21ht1e1GSiRFYXBttGK4uMUQZaMaB5oVT7fVdSQKygMzyLrkcGRd7t",
  "key20": "5vGf9f6brC3tLiZPAQiST5tpExbqryNUP8YpYJ7pcSXXZhwTyTVDkR74RuLj4XVgBsXPkpeHmXxA2tqVzTC5k2Av",
  "key21": "51So2gBwffU5odA8KYW3Y9y2RcsDw6hi3WvCKU1mECox2sYKAeUo5Puk4YMJGskBUSxkRisE8Hmq56Y7LT8dCFyW",
  "key22": "4ERpoEMyjyV1fqRHxEAJnyAyPEjmibepNRap14QiXJ7yyh8ewJdorfXYpiH9xp8Fq5kaqc9BoBzyuDy8s4xou3xS",
  "key23": "4DBS9Rrcap62e4Z9HzwP2MZ1U7tciJAvkVz62i47FwEyB3E4gdokvAarP3XbZW75Mu2ri8CL2HcPUJdztJPm95nT",
  "key24": "3DYYVrDepXrnCf8EeEADbEuPekVu7kfbchYaLEpJaGEWWpBehVazaPNJZ71NDpHg1g4msL3U3TE7QdN2Kk66pYiX",
  "key25": "5TrEyDfYjwhpMYMBjB7Hkm7ALkovKkSjr2vVf1A1qFRNY6GR7AhEnHcUzwNWytUqu3je1JCWFEUAhQyCEJ9cnsPn",
  "key26": "2Uxf9HcA8cnHwYiJcy67J9JM9yn3pumUnRa6VCtamac1a5qYa8VgJjxFRzMFLUXKVsxEQAhuMXA5hSsu4dZ2wxwD",
  "key27": "5Qcvkg2idJhWgvuioBSfCkZuwhTcXFnU1jXX2NfXfPwYNJevM6Eed4vVfmbSF5b4gKPXDcsaQ8p2KtJNKbXV1pbi",
  "key28": "5w2NZqkjGUAhGQcm473Mzkb7W5swh82cH8xGdPznvcWKMo3pHo4aHRiFRpACJuh8NtrFAvW615ZfTUUEa54aVpZA",
  "key29": "3V1yeKaB9kzFgRaES7pd68fLNFEfxkZuqKSf2i65S2jQhySRoEwqzGtiyvaA8z2XhnVLrR99h1xvJATeoUMtyo9f",
  "key30": "5jFXPCd7ah11RnpBWrKcvthYvNinYpwmbfP4R9YV6b7R8yjjsypkjvwar1HP5M7hUB6v1Dy3KrXXqGRh6CJLXKPd",
  "key31": "JJX2suuTK3ThGKSaSHuudiwU9VbH4Uib7qQUEeXWroALoWPD93hYJDEsKcn8smDNerWQS2rVW3SqMmkhsfU2XRC",
  "key32": "2wxS95VcYPLsWeuhWpB9ycnkZ6TdW5reQ4AXyYxAb2vTCF9jFcwXFsbXYxcVPnk4taWVjyTvYYyM9xiRY21L8m7x",
  "key33": "omB7CcpNNmMKCj8s2JEP4svDrk1mj2M6wKSp8FLCVX4nMZadtixEzFC4uCcY6S3BVb4JsPbSZY4PKF97TmwtoGT",
  "key34": "W6QPavBkmrqNXWsFbxX1zz6zEKYRd5CxVjciM8ARuaCwaYXnJGXhXSjNHtaZM2pfsLB3ZpJaUWxqQuNN3LVvkc3",
  "key35": "4tmKCqcrUdF7ELx38rK3JwQTHm29Zy9vyimCt5BJAorWEsgjrCqCDQ7zh4pHymFMmHcGk8yhfgTa5d9H88e21tsr",
  "key36": "48xem5dnYSAQn2ApaNMar44ccss3q54rqQvRwSjUtMSSGzExm2cuhGnsdYKBaTfL5hLCNRHH1JztcgpT9w4QfHww"
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
