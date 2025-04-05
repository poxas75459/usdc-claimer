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
    "39Nw4h6D9xDBqvpWhd92cJAvnichgNkLcS2d1A8dAfwXBKRZsMWeaUR5Y12ezc1bEJtJyH5H2mpnZjVVXmxW3YMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tmJG3jYEC9Pn7kuMcFdShq387jH6TzXys2TjKXdDooTJSTbhroHqni8dfe1XG3muFcwy7XeDWCaqLKd8sGURFc8",
  "key1": "3GgVBfw7uV6tkhb1buaxXN42XuF3nuYdd7QzrZTBsUwqRnczXPxRcdk6xrmc1jp5ah9W38nBUFPsueGLvuLwA7m3",
  "key2": "5KVDTDoo7ytUhCzKAaYNuzHbDs88SznyQGo7jhGKdjph88qMb6Li7a39Rk1EaiEn4RaQCbNDas9yzktHu14t9NUY",
  "key3": "2gBdLeecf9S8KNTrNpq82PGU9HSrenEWJ5uXHXQ4VkmPk4ueAWAsx33t5LKMwoUqH93kkjKWYhQS2sjnFzQwiGx8",
  "key4": "Sb9SkiEajwG47gzpW3mWqH7Dk8VWJP8eVcaNsaKEjYfszYDWv3QVmKGvRD3NgLCR1cjf4sQAGviMgmkVSNqLxof",
  "key5": "32YGqow5sDBdDTMjHKY3rA5o9CRaCvfCxhV5juFtugaBsiAw8R8fqWsd6x23J5rriSY1sFKh475afE97PyHA8iah",
  "key6": "9oXK6GwU4p8yPyGuFhgTZnQhiqDibchEhsALP4StmxK26AJQXDvAyyUr7YcamCe5YpHLPT7oKbakkcvWhZhgUNe",
  "key7": "21YyaTVeE4dz14XG3KWfacpy6GHB2AZJvhQyANV6E2PQ1m7evm1Uaj2MgU9bWxjNawjmxnui1jd2b7yud22AR5RX",
  "key8": "2wp2GQNLXUwXdpXrRF2HXL17ZdbnuQcWi4vyNxXbMEXZhmkTGQiJ8gx4Di36f5NaAfRcYLEJDyWqFLyo9fVeoF3c",
  "key9": "wNzNGoDuRrtL85uJNPFozQq1umroosNZVQYi8mx6z3Tsnp487SCwXiUGuGYFxeYfEqTV6A1KpUHrcLKhaFnD7Xx",
  "key10": "3mAuCmPsqBua6BF9VoUioSccZfKksAkAov2WQfCM2Wffr1B5QSs2sVk3KsLvZB8MnpMdEdWBegDjH6vKHJ9xZtwt",
  "key11": "2pHDi2ozZam5bVDpK7MtGPQQgskFnzz7nac4YmZQvxmtmviZG5KvXZoBopWqowNXXRheaUfrnufCGX9GZfoVFony",
  "key12": "5ackPkSRRNjmSAyNsKZit5zuGUsdhyqCrdgWMs8Ryx6BJTTCFvrx4B2BWsuP5ofqY3PvXmULSWyPZvgMxNZwLikU",
  "key13": "s2HF6giNb2XaaKrXmkzYhGnV2mrnVaivKZt6J3G7UY7cynFkEUdsZcDvxVJtcriBsTNswwcQdyPcbJvHDVvrVD9",
  "key14": "2EULE3gon2L5q1hiZMXj4aYDviofiVY6VyicWYQGSZQxiJiVo2Lm18w8oz3ozd1kAjLV1kQ9bRgLPFSBdMYy792Z",
  "key15": "2URsmWLVVGaxLDS6etEp3zR3KcVUg6bEhMAGdKKWxmRnKxkykFbp3KC26JNBuopxKhyLfCzBkHC36fkmuWSzNHrj",
  "key16": "NGPDFXae2YkgnKhbUA4fjH1tGBnAPxnKbqbCyEvhRuAi5swYN9pJw21SRRD5Gb6RNNGiMn9xNS9RsWUXZ5Y7seS",
  "key17": "5HHYhsyGKctmz7RyWYg9qiPsVyvHA7wqhQuxmUGWDYt7LXshsUZVaZqhSTRnitUQgtb2HtdsEmTHAEYdDGCcuSaZ",
  "key18": "5qxFJaSGbTqhVDt2qCBKxW5Fp1171h2673Uc9gQSjdEkTA3b6yLNmnW8cReBrKuuudzUsnC7BLbTur55iTnNyKiZ",
  "key19": "zeM4yzRHePufPLUHv755hzriTkC6rQEVbBkse3LuDXV71qbV16MeFeYY3y8xedaWymhFi6x2Bj6jxdL986hXby3",
  "key20": "2TKAfAjssKnW1aeNnC2pawTRepjfNEz1bwc79vdR1SpvyMefbVtzYe4JoAH9HZYX8MWswqzgoeA3R4iqxR3VAinm",
  "key21": "4eVyZ7eucCjjMLQN7xr1RDikgydrsYp91cYtAQhbdAQx94hwfuVTuuKA6HuzyGUuC4Ns7df9ARpn1KeaNGZH5Cv8",
  "key22": "NGZeqQ8SzgxbWvy8CKu94R2osN4FMeouK2JfvSWXpZ4LXwUoxqZTRkY35kXGq6khdahYnLzs3eP2taVtrMDs3Ar",
  "key23": "2X6tmo7aLFJS9LusQf3A1ipNVxkZa22JWzGgjWtuUm5mRN52afquDXVabxcKPFD4Lp4zqULuZGX71vAAxc4Krpsz",
  "key24": "4N5V7pwdyBciNirKBS73CLSUj9Qto2ygUxAbrtEeCAMhRUQuZ9GjSDJfCJY31dryZaBLrHmFR187jvP8wzXJ1FUz",
  "key25": "2PnWd4nJystuS8UWxgUxgs7L91S7KzbhfsaVyNTtkaTMpdbT8PY3aCc9oPG8cUdFdZ5iCwiwKU3cGNtRUH3W5wvC",
  "key26": "484y3yL5rDja74aSUmVf8oH3WiHbgXUNZfBWW81JDnmtWMvpefo3eJLDp6vJ5gtuNXkZMWTXBrEE1iWdsK6puckB",
  "key27": "3mWieTieXrgEDZWCLMZgJ4f4g9ituN3ak4T7sPhDLPJ2ZuT1eNJzkZrStdKdKCuX4DSN2qob4s4MBQ8rM5pNR6yL",
  "key28": "4DbwXmz7yx8hFMQG9mmKgcfZZgBBbuEeENuLYvoGgsKt7CYmDqp1HQ62S9zqY86NkSwwVLufU2uXyzYdE4XmirMP",
  "key29": "3HhRGNbt4tz4fUwBM3J5VhRwQ3PqsadXPwrFjkDWp66JsBxPMw2fiHNjzWKa1ac9ayfQRHFYUJKnkN9EmT1wKYEQ",
  "key30": "2x1CvZXChN3EUxcEBj2JMY8hf4ft2EEaDx82FnuM5VfWvFzwXcbki9kQKXDjejFcRMuvnKddZE3ns3RaGJBV43CT",
  "key31": "3Wa5JPdiHvWufbvJNQP2D9xqaqAdLPV8C2C8ALHY6dhFb7t9WxEMTzytjn1oayHEbXsgzEHVXATQ3KE6yNmQpNRo"
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
