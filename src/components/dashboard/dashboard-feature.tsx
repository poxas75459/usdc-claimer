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
    "32LwnskFDqFEXzUx7h1iNbsiQG2aEbn67XTuvWrDN8MDjY3LQQeaynZvZHVfSsfUPLVqACEab9RJptZY7cKvUK11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nFNZgksS5F6d5xpx7Sb4dnDQQ3r86SNahvAHAgfH3QKaA682k3A9D7PXCLne5uQWWW9au2ffQrkJwjcZHovWpxd",
  "key1": "3D2wQfLJyEnc9RY3MXZQdhKv9dU1Nmn8Cc7Tg9RuKyctsf7FWins6SpCFMcuZ9b7etr5oh75wTMj5VCpiZ1hhz7V",
  "key2": "4o2mmqtYvNh6FFTGSXM6dUma8HHUWrjWjqgSLpSvsP6UxeyjSDjifbt1xM4PnZjFetErzWfvyhuZFaanyDLEcGAu",
  "key3": "2is7A856mQWpf1F77LmkZSbLnvRHbduXCbEfV359RwTmMqsCNcSxLPM2zjqtb9WxxMnJ8Ty2ALDXoHe8HRZTV4K6",
  "key4": "5RSp9HYQU7fEYwxNKjnUapakn1kEfsiJC8SsUUidMBg4yHdRsAivko1qUrB6smaZ73LpfYUuvAYQmQvrNjqKo4Tx",
  "key5": "2sbSCEMkWsQHAD2hnj8ioFXEMk8mBUTuJLzjAookfg7oUoAX1Qx3U111gA8Y1ShLexzKdGqzwjMfu8ndPoZcJ4QC",
  "key6": "2BsZTTvcmUUeKBvWaaKRNJDbPZWN3a5Z2DV9M3mvutGLi2TnQuPfL3yhAWVAHgM1qDuWpSZqivKoFb3ASkFFtutL",
  "key7": "36gQnBEhf5CGcqyLtVdPBdafc1bH7euqmnsCs1V1uRLdyVPiJWZVjSvFBbyiSbwv7AFAMMConttZ6Nt6Jc2BEikd",
  "key8": "5A9vSE6dEuJpKBzrsJ5NBRyRzb9H3YTDQ7pUMuc7ZW3t1hNV8S4fytqhi4c5z2T3S7ihcUDUqsW9BaZBH6xkGCit",
  "key9": "8oet9Zgnb7opSsU81msDXxhzz54PJJ657Z5WhCdF6aJYZRJyNGybUcrPoPNWuLcWdWBC6UmG9Tv18S8SzdVe8qy",
  "key10": "4Xg6Fqnw8PLWZpko9DAC5CevFxNmrAf6tNCtrVyjK6EmF9MXiAifg6p1BF2tJWd2YmbgBzeLCV1wLHV5gQjt1YB1",
  "key11": "4bPQ2Nv3sNs56zM1dwSc45hM6jX7iVny9hHMVF8F6AZVEREV1c3z3UE1YshiqKAsEeVecyyKg7TDW6dHZrdsFNni",
  "key12": "3Cysc3JRodCp1kAt3P6VzkbmwrCMjngacFzDZYjTpYsY29zCYr8iUDWdacBe3TiqYu6HWTVCdCgFex2mUh7Bp1YU",
  "key13": "51Jps76Sz8DYxpoFrxjTKcyLcrh5J4WhLBU1b9RqZNBXgXzaA6bSSaNWCfnvWFVGmTmjWRJ1B1J6A4WrUgcEfURN",
  "key14": "5zUxvfVD11GXYjuerjd8dqSEauPUvaW2fmTSShbYas4SXz9ETQCoLexqz8GQrc5ksek8uGzEgyVc96EmX8GQubDv",
  "key15": "31HgATa8DnbaJmvdeCPkCiZaW1kFNvXJ9P6a5hES8396DMSXT9PbhB2cm2fs9yKW6XmmNqvTWK7uZGrxi7Kg9Yeq",
  "key16": "4F1YXFHopgHt3dnvJ5Tj9rMcM1PLohqsTxMVfoTyhbzqE5itZg8wHtsra7RJwMnw8BZ4FEsuYTS9FNKeLs3V63jx",
  "key17": "3GqDymKTioBHcDGuNyF5B8mkTH2QV7oQG62x75fBKyaQLvZSm3RCspp4YJQxmfHD1r8rLHEWKZt6GNPcMuiLPdGZ",
  "key18": "5D9XwtSAraoLUGTdFHAAChxpaXvYgHFE1HuT7nyhAQz9BXM7KdeujkXPnSQXMdXy5wibcjWr6cYp6TKgsALVypnw",
  "key19": "MrEkrt3wMdswgj8yQbQ3mfyjTrfxhmeb24wvDjEpGjEHNiUdyfodyuDAh63TjQBfLWn7SsMcrEFY1MzRmnbCRXA",
  "key20": "3J8Vxm5FBX14eGvNKmEw1Xtww3sHXLj25umQQfsD9fgco8zdpXh3RXZx1nBmfLTTaWBfaePFkHZGnbsAb1PgVT1h",
  "key21": "x5VpXD3hDhSFkYDcE6dUtbT2oyUaGHNZqHwN6fQ4EwsBrpUt3pN7kFuT3CW7tFEqaedtQzzVRPS2C7E1QwrKUvy",
  "key22": "n6yhNTEJxtDHBoNhSd3kQmQbUvpjE3BNLDpDYRavXmuPzgmYPav4Gr6SCLxnmV7dwB7D4A7sJLDtuykcLRY3Afa",
  "key23": "3VX5pkJFEUHmMEW8GvEPpGjpYdeEzHmpo1fBrJzudKQsz3kRK4TmvajQjvwXiCZLLVFdLBarWu2tW8H4YAUKTPmG",
  "key24": "8h14gygwtGA8fcJ93M1ia5Lv5oMStzHdgpUiXJNrPaNrnw3o3KXRNqkpAbbT78w56vz14GkkpxgiDgGJp6Gtpvz",
  "key25": "4p4Vop5fPuHrpaxBJWNMNdGAqeKnqbdsnhDTN4JaQQomDSqzTncWiLHtWYPELsCLvzn65NP9rNzJKWUGpfQzpRQq",
  "key26": "248Qs5XbZVeatECSAJLa68AtLayxHcw5DFFNLVNDN8i8rju2i91gzBmL9URXRoc3hg5Hw4PMyWNEJQotV7PMbuVU",
  "key27": "3ZDeXyowv1c6N5Jh9jLxSoxZsEuwR8HEW7BxPqvuaJZRisBLR2MhqvhAyC9JjfUPavUuQMFeMkWmo5a9HFYGwvs6",
  "key28": "33twNnnZTPWnoH3zfjwshhLEPUiuBctEURSHf99LP4StXhKJMnCPpoD7Hixy6JPwT2B1U9rpJvqUZsFdogksVucW",
  "key29": "27JCwDhxiEgUUFzZ2XWHMFpwqTXSytGZS2kmJJiQdcDz8rYDDWv2mexLb511hz1ZBXisXWxYidNWnzTkXnSYinHk",
  "key30": "4eL9SjLosgnmBvwU73z7Hu3dFaBMSrepwEN6rRziJAXRdsrR3eK6nrc6YG8iLxLwnJyWPDqBRLe21f8ryYddCsMc",
  "key31": "3BbuxkLpXGa2CVa3PBWbsRaqHHgGm5F3yQtXvaSVczMRXmne9TjkKjJodDmsd6Mc3XPp6VQLPZJKRAcAqWff5gNb",
  "key32": "4vEmAKkK1p1Y4zBjjMBndievfR8F74LdxfEfMuvpqRcucbGmufJmt3WTogQK8AGzzbXojtoxDqAzjSqBwFoHWob4"
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
