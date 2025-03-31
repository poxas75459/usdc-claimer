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
    "4caxTN3ay4Lap5DUvQ6bQ2z4yFLLNrMRJsR8u2MMTvk4xnQNDPMwWmgAUPT8Zev7BcxeybZ3yrpvJeeoHD649wJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S3u2v9pkmrzksQTyNNEsPwpzEcW6MEF9Fo2bMzDvFbB1ULgcq64VYSNPLYqF4KjANKmceVTWYWSC72JUtWsaQkt",
  "key1": "2bpJRAZPAeBTw3Xn1Co9ijBTTYfjWdFfPyUNcJrifke1DTYJPuP9dAdyaMw8TijtwMg3WtqhKqGTyJHsfQR5ovDW",
  "key2": "3wuBiyJJsMrAf4trvFmPTYYrj3d5gXeLkqdqCL4VqZNAHbQcSjgRXe4fZKYD3YAwMXpq9Fmi9BcHsPRqAHZb8tRs",
  "key3": "2CgGo2H8bjaWdbMhhLmZW6eRAvqahuAb7pSpsdmVAf26vKfeyQZ38GpzSvM63o5TTxSjZe4VdmAjDyD8YBHt1PbQ",
  "key4": "2voghGd2RXjWV99Bt4xguYGqDPaQCr7v1EDcPCDY19p6ecfsYCcAKzRsaZu2pUf4QYLkGZx4isc1EERTr46Rfnsq",
  "key5": "2TaGNv2tWZ89J9pJq44f8zgtMr3R87GQ5a5Y64WN8g9Tx6in6EMhffj8RPWxGMYGtBtAjkJYoeSVwVDLSYDoPrNb",
  "key6": "3JrcWEcasjKiTXfVbNhk532ueHyi1K2jmt4QrxBxoLqoPGpGL8edYzwebKNKda6iQKS1iox1VrXC6uq6ACtDYW7c",
  "key7": "3NQ8NfQdC68nFHJ73kHeiQ39sjR8KAgzNW6dY7KFti3JxovAvkqN2k17cL1pb7Rm6HYd11CGGi6sG6exUTWwGUdK",
  "key8": "41SFZbpzLQTnkjQyoyaaehXe7zDfqKZao7wYzFzWtMugNnaQNagiTpkXejKQN3oZPwncDLbgTmkm7J5C3xDBy9Ro",
  "key9": "2F9NmWUxBe2FAEhmkJJdVvvK34PWqGLTpxzvRFCpZvPyYmSySpT5bPVw6Eq6NiUi6GPaQ5SQD2RroD6MDMHetMaF",
  "key10": "56bnErofEKXh1N1rcKRoYhqWZQDTuXfCn8pnpUaSnTnsTpz2mcGx724F2zBi8DBn7Q3RuTva6chUiJxEetGUFgTx",
  "key11": "xDYGNuN62s4pyDYLC96cVtvmyaRgERgkBgY1byHvFtgMcbGWTiqzA2H93jHrfXJcyqUc96wja35xEbNXeCdaZFr",
  "key12": "56sqwQdtQ4UawsePyUchaZKHiDwZy91i4yENhFt1cC5bejVgZd6exy1cDSFqSmvUNqySSvMhuzc4iKGn3BjqqQBt",
  "key13": "4ts8tHd2maDfSY1c5UUtso1hRtjuUButUTXSjzPAu1fpw2EVSxRC2Bk5B3sopzHNGyPcDVj8LuAMuFcpPRQ4sj5X",
  "key14": "mHJktbJhGW5bQ94B7snmqo1SqXgQTuVXWcfesLrF3138W3fGX3TNP9AiMYQm2QPr6r9ATebMfGg8wFUYnW3hpjs",
  "key15": "3tqDiZHWQeaybYFExrgjoumNWS9iKv3EaWZoD4UxbGj7vTBJF7KYhxi9ui9F73cqwrjSMZTiuHannUCDqrwHXbZD",
  "key16": "Ep8YuFndNx9e3gVjZEi11Ty4JzepTbmC8DLXsia7GM1g3v2mQckpwptbAfzZR7UJ37GkGmdTF5Lgrs91SwXk9Jj",
  "key17": "2d78VB8PaTR2jkKsa8Dt1qq8QiAZ88SRbi572YN9wP6zuhmSB4HPWyYccjVKnXzHnJerWaJFHUFZ53fJXW1qwm14",
  "key18": "3rV8XCsu1bunLHodZWsX2aU7Kv5qDUenWvhsFu1NPmUD8ET9N3MYQKzhbYoVDaEYgKKbXUTPCVVNVCHMUPsPF9a",
  "key19": "nHZeSHRDimm6ffGyPzNRQLxNFa6erFi4XALtPyFFZpapKmcCHrhybgaNRKjNJ2bAF3xAXJC3N2LdfaXEQvNFrpp",
  "key20": "58fCUJNTiEaJRy49owAEFRA5ZQycdxErgCm1uDhZXZtcgi7jLC7Wi8CBBEAHs5iYWfEBKRFgaYineXKz9VbKjNsA",
  "key21": "2YViEiRGM3BNc218shkkWRigt9PGzVpwUP66Sy5Z8PUhJMrj3c1b1RZA7AT19gahKpDwPpirfKJUdGiWs6smSfEb",
  "key22": "39vrWpGR6j88U4tUcvLkgKwP9K5au74dibCrhgKT7X87b2CCAJvXrgdPG4xtv5zpFyFQ6VQbJosuRc3Pa1oMptoh",
  "key23": "3S58EwqbYUmwzDrcUtCJSVHq68bqJnmz9D5Ac3w8vZaiK4W2HKAFX71iEs6ZRZPkXDti8qNUwBJinLUrSjG5eZQE",
  "key24": "j9k5VRLPuKHH2UcauroHewAyD1Be4LvXJD3JFjGrtAzDBQqhN7HXxtrHnsu3B78SBK6yfyN6Fm3M8Wb2cwoXdFU",
  "key25": "5CpfypLeS36JAJ7a6LV8UcorrY6DQHpUknUrm2hxCuiFdzCejknn2HwffGxkC4fFwiTX7qNyKKwFHJ3PMxrRMKTX",
  "key26": "5usRin5V2skK4aZzN5ec9CvLDoQw6tQkXydUBuRaCgdhRyMvFuXAgTcXQn3yErLJedxVQkFzKBBVPFjR4HvLZATh",
  "key27": "2G4jsviYL6DYqb7SYCauFEcnL6CujUU9AevrngFrgf5zzEqPVqQQ9CHeYfpTgMLpu5k6qEnBAebxMwnAPA5kXrLH",
  "key28": "5VCyrzXmB3QGjQaUVvAqgM1HYikeLzzBoL9gTR2y4fN9YLTdvKYCz8xt6KaBcMXTnuuD21QLY7xh448FuBYs5D35",
  "key29": "2gJyPr4fSaRn33Cg3hcUbMerabV2HhUPyWRAdCjJerg83Y45JF7SdmqGUkhbsmBuaUZ4SNBnqz6D87wbqke2ySBk",
  "key30": "37fgjA82AhJ6nwyHAgTfMSuAhWxrHRA9jF7zKhGgYog8kBAPEFsw143uvF9Uq5D1mxnN21zW9MWCrMZPspbtCUiA",
  "key31": "4fsHtqD7DyQK5N547NSsjkmMVazPWdvbgNxJUahC1jZy7X2KEMtWyxXBHumLPcoTRqfy3E1hAaN7QfRUuwcm3fSu",
  "key32": "5bAdxjTvGAaT6jvNqp2tkRM2EuKtQHQCT1jgYZCpL1ZrPhm6DimFcSdkanvVrShHErbs4kvu1NRzEbKtfCpRci4S"
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
