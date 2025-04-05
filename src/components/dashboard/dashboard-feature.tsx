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
    "25ZyMmZtpS23epERKQCsVZd4QcEnV15jKSPZh3FCr11TekG9ATva8JTZWMC9AYoHyCRftjfhw2BKoCvdG5n2v973"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HuuVYsZGhZBmSfTf6yWeZAZiBH3DxNrxi8y6wDPzs4CjD2TnUZKSqsyPSs6WysL5dPk78PeEYS6Fw2ymzFMx8L6",
  "key1": "3onUVvb18HtjNvdqfrVS6sCkt1iFyJ1GTFNDQkFF3kyQUAY13jEuPebbjPaVXF3LjWretK4rSM7dn9qe7hPbWJkA",
  "key2": "Qys5Tjqu6yXZdsoHGfgCRkDkaS4ufmEZPftcnUukN28QZ7ob4RiLba6fyCUhSi6sZgANRLXjtbaWCusckA1MEpZ",
  "key3": "ZURhE3GXA9Px6UL2cs3ReCHa7KwJBptXN3KXpdeD19t67N8QQm7ZYmHCAoxcAFaGUvit66pzbRML4muufWrVVXn",
  "key4": "RtWN2UxMQV1SFcC71ARJipEibZy8aS6nHZUkJUjtqeT3xQRbM4BksSpSaaEaWXkaVjZHUYGJ7D6DeSYYHrQ9BSk",
  "key5": "5gZP653kjYFeWd9P6ugugrF3UqVxEzmpdJJfkVrD16er71ig88yAiXNN28JrYU28eStdPs6dZjnSwhhyWBbharJs",
  "key6": "ARJrvufH6k5h2736yes4qFiDRJoMN4mnLTzUPZ4Vyq3PhUNSg2vYcpdofWhq9ouAENzCEhT1ih2pbXqPkpgH1G3",
  "key7": "3UiLc4JfvCjSaWGyiauDCdne2bFZ8F7VnqrXYdkHDDQZ1kRmpTfNeoxa6hyYcZKFWbWfe2DaYq4GP5ypJyHrsHZT",
  "key8": "4Ngj71L6Hvbd5GbRo68ZVVuMXLuPHtXnDc3in8GLfo57FiRQUPj7d9aeNChpL6tSwJ2mqzLoZGfo68wEfv6QwE2H",
  "key9": "6ekgDoD6mYm84RK48eA6CWBwCWZABMcCqTCftk8BRcv1R8Zb4P6qynUTd4uvpsNHdCjptfXtu4C26Eq6GsaoXRb",
  "key10": "nXT6trsNT9bsNJZWrDTLXFQjBkvzWCh8VuT79kPtjC9ts2D8dwcFZTyjRbavtAer22sPeUgTzBp4RZwM8au1QfT",
  "key11": "299nzJsa64vUHhrceMJZwwLFg3Y1iC6cwM3e2tdDUMAiPsZ8eQPBDJpzrnoDAQ6LiHhytnmtEGksThwEXN7FP1Qm",
  "key12": "3Hgw36neMXpPj8VYCynrponpw2LAXULNZPgdXzs7isYmiLHeq72aJMicWtgJcdu4Z3Rh2tsgMYinaM2dzr9cfM1s",
  "key13": "2fgHfFJ25BX72M46scV9asnPgGMzAaK8wH32cZK5zVnj77Cbmh3tG4aBSuWHdNAMu7tkiXSDE5QMJdqvogJnxD5W",
  "key14": "3WqCoNH91XHDEuo6vGxh7UqYi7ReUvm7rzm6LUnppVzvqARoaAaeW9SVqNRihvp8VRjeFETciJv6hgJsMgwUb4LN",
  "key15": "4AfSMETmU2Z82VTi4E85ZE2bzPA7W151nvmRyksBzpjGdp9MheQLXsXwB9WBgQs7G7MeyQLQunJfzZoCypGiQJHv",
  "key16": "5oiX84QMKsgNtfCUbcqFAJRKW2KRGEbXS92Jj1aptN1j3fpWH9XyTgBzj7izPn5xZmf96Abg9hqn4iH8QuK1F94k",
  "key17": "4LbzgisCXqca9L7mggzsn5358A5r4UajS5vekJvuvA6wxJV76nBjwJs7STnw3g8nEmQCWTdQ9kV1tVqNzU6F511R",
  "key18": "4cXq9aF95N88qX5T7xda1tdBezaqoGcczwWAAsspz8GBpwrPyqi8BReMoStXG5iK8tJuZAuijuqEEg1nDrmE5R2f",
  "key19": "2cw3V5BDKKYA9mnd9SYfYwUSAD2m2rRJAZtQWaEjwSgPLBUkWXjsakpmGLwchfAJrTeztGPhFiuqxs3dhsw8KgvN",
  "key20": "4EXC9BZfQbHHkpmGoQKgAjrcUxpr24Go92waN9xmEGGjpG4Ks5AGHwG4X2zotnNmzGwX8BMWvaB14LhzZQPbGHqd",
  "key21": "5Ws75eMZsthMvQUrfficYsa8NJEBkBowV6NPbyDVQrYAoLK2Mc424yia95rWsNpoUUrUVkEt4J5CTYtbRJnAPD9v",
  "key22": "5dVHx1c11Z28XZ1KdD4oWoMG3S7Z7PXcJ7aPvP58bq3WnJe7QfLtm4yxHwk3ScBmAMSpJkvSodGCaF4koW1zhogs",
  "key23": "5p5xy5ypa791ex8aHXEwLvEDYHRbfJf8xAchPSRrM7x3KBdQmdU3YCb6AcPwQ23NV5xtwr2XdUdYVKzKfXM1Qco2",
  "key24": "4AL99wp9jjjpbC8UuUt2Eq7aFLa7ULJ8wQKHq3uNMRZ3mrGeduG5mznniuRrQhwqUeZR1RFjXR6M1DkTBxGzMJbQ",
  "key25": "4Rk73NJbSVGd1tQwMbcYyq915u9DmDbhjuNpXj6b71xbPMM2vBdL515cq6VqHC8DSW6Pn9MkyYtwQm7CxTF6ByuD",
  "key26": "5dVVdBumGDnPLopmZSnnANeFAnxou4oi656212Jq3r8W3ANBL5tipB5CY5a2ABVWTSHXeXUbDUu6tjfSuKMWPTLD",
  "key27": "4w4s5PbctrMRpuURjcvDfz95ddGgKMAPe348Aq2WDQFJJYJFWDBcoH1soHiyWKQy4DEg5fnybg4n7wb5PFDFwMHN",
  "key28": "1FkiqQkNCByQpuBpzBXSzf3CaXypu5x7zLrfRuYx2PBArWHUxGzYbfdjdjWPRs183DVmhXNCzKzuEe7LcSr8aEq",
  "key29": "5aR9AQ2pvZqYhc9NzknrZUv81ybioetjuTVGHwqh9yVd5LSmD194f9Mx3QtUppxMVXn9VLPcxxrrmqVaYcvwcKty",
  "key30": "2hgCS9bQXp3zU7vAowUa1uhbGDwxWjs6SfMLS655ZdQq8PzZt39dh7g75YE7xNm6Kti4w8Y9XU4Z3rdpioF8f2gq"
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
