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
    "9qVnNPX9pqhWkt7Jg8mY2mis4D4DpgBrjdrw3cXh8w41B5TmiZtEjRf4LTQm1AmTXb9K7Wv9QtVT8x2VaHjdH36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RV9nw4b8s8xKFZX2Mwno2YBEStzP3wzwmzjvCvtuqFzhhdFkUkXHdBU6YkiTcQ7ZnbRbgYddjCSW7bctDUr6Pzb",
  "key1": "3B2SEVpzfwJT9MZEDPBtrgjceCLLyn7ocxq5MBWbfj3sdLkRj8jb6Poki7uApLJ4Krv2utyvpk861iX51oHCoXo5",
  "key2": "3NEu3utxyrmRrjpHeasfVegBt5gvcdAHC2Qmu85qsFBgUfDXmDac6oeQwZENKyRGcKj2JFrPxbfdcbCZZKyzULc2",
  "key3": "gouBC3Tk9pFEdNtq53LvhKMifGiArJiqeUkPC9ymUakkqmA5vb5aQbhF35VmPAie2E9oEfkAVWV1uwir3vDq79h",
  "key4": "5fwyxZ1C6scmGV7C8BaqFLSuwpmSBdNP7gRM9HCwQPd6LfPhRdUVPGghV9yiFEREEDRLwMypJn7ahwGhDUqUtTMc",
  "key5": "4vFzH4bGJeiGHjUtkGiGvJGguLbG7Gyv1YrrGLoLumTHoUa6wbDgVrEhxPeJRoh6jwnhcAQotopvvKdevMvGGYie",
  "key6": "5P9wLxvWuhGeAKnEQqAhvkqwxWw2SWfR9ZmcHFiA1P152AyZqgErdBE6kJiX6Y3fn21JsZBq8HUHtZYkYvXRK6JB",
  "key7": "4W5SGqY1osDHLC97XFZcNdihsN4AKe5LnoAqQs6vRz1zQp9M7QJtzmVbnSnLzX5SSg2AmWDy6eAaC1ssmtjQpeBZ",
  "key8": "5YXHJFhv9bK6YQhBrxRDGQhygBdsfKp8RhBK3vQK8DXzAbDgwr23FE51herZ4TARF4gUqJwCjpMubzxvC2yLzHEb",
  "key9": "gey67gHMYtNk6AXDhqwPGqPVHGgzPCEa7unGGorYKDaEpCHawEF5A2rqiAKcRpQwy3yTTwxbgW2tK2o3R2AnBMj",
  "key10": "67ZHQ8JbbvsTNQUJAP4HLirs6XEknpexuhMASKEjc2zfaAxJe4DwGdVySHNnStBKckeetFE14XZmCNSPSErsXGkx",
  "key11": "48FnKG9h1TnWuNHy1PzQ3neAfKbu6TZfbqnP2cB7AcFKajpvW9Et6g3zE1MWVMpKRWQBEhnZgPZC7vGVyCk6LHZq",
  "key12": "4GBEoNj3mdXAheNWMhm9SBtMX4r6EbFWX4HLSk5ELocApxXKbCxmUY8FCvySQaQ3uXDS3QLBqiM3CDqkGUWgHcWv",
  "key13": "35zAuH2TRE6BJ6eSjmePvHznY6tRJNeibz5GLVLu1KfATbTgvnVF3wS9wWWR8JTz9WEjKMZZWkngBoLs9rFtzraj",
  "key14": "2FvUFqnPprEkzBuXYoDhhejp129YJe1vAHCUAKrpLoEesjeQnBFKoVzFDXozqZkC42qigFWoczMAjW3qaz2oaDWE",
  "key15": "211APdqDgM3dVqM4qGs9ELYsRPXk7DzDqJd1st6S8MY9KzY9t9yUpbWkZZtVY7xPzbT5rvJY5Tk1KtqwPRgT9xwb",
  "key16": "LUm26NQfMDnC4U5UcbYqXok1rRMjJDSppC8hrwosbddDHXDQJnZrFKMzW7rPWM5Bkr7XfidgJKm8Yg15NZVbzrU",
  "key17": "2NDdJRapuy3nLfKj1cB7Nxf7vBY5NAXewLkih32ThfSNsqmZK7tkHzzigGQWUJK9wxmS8F5oFPbxw1Q2Guv39yfU",
  "key18": "2er63DpwsnXEDqtpYqUyr6uN72zCjLjwCS4cxi37sfkGuJcCBmECEVyTdxUCK1GeL8VfkekXBnQU56TCnS1YH3MR",
  "key19": "3kEjJfmmwnJe9Po7EQmiLEi8mRf8SoegFcZGceXGYxpZeGa9FNc9c89hdtGGxrAQMNqHT32nfADKzJ6TcnxL1SbD",
  "key20": "2wnPTfiPB7BXYJftdQXJFMrouEXuJQp7FWoAsGFWeRatReXvJMKQknwJ5xXbZZN7vfDQcqBSbbEvdTYwJPuh8Em3",
  "key21": "2JompkQRzk7HooKRBGmU24uM9udXsCAiSJQyBj1ut421wTczAJBaWJ4bicpT8KL9QKN9uaQUAUQ9T3fMPpRjxDwM",
  "key22": "3K4nxuaiGxoWt381krX4nDRZp2GxikeCMNwrXyuq62Movh4493ut2CYaJgqPaguMYDxnUta8ih99X47XziUQoNgj",
  "key23": "55e7jPPXgNz3oQFKek9vfsTZ62xb4bcQWxMBZyZHCs98yQTznQeudYFNrABGbqna7Vh7nRXd6vTLJUVT57W8LHAp",
  "key24": "yYwbKzcrTQ6h8SToAc5r9enWdSc4aEpSaJXFpTwGT66jb9c7J2xFJcT68oYCNH4QDvMKU6FTZXv6rPhns1sNrXR",
  "key25": "2SiPeRsevnXAK2RVNRUaMRWDUUFAkUGWWsPQDcCFa3cGDKgFeeiUefcCVGpdrMXQaXx5RdE4vtLibDcmYostmW2B",
  "key26": "5JXmm9SbjgUTyRGBsHLQopkKA6NHXNSjvKnjW4GF3ZUv1CEiL6ydrPHA1Zr9S1nsLxRYSBoLD2zzkyPJRk6VtNpP",
  "key27": "5UjeA2HSjqZnoQRszskpyooq969zbDHeGvV1x6rvrftNa9Co42wyWEGhD88g56k9TsbNyKXsDnF1dzMg3avA4aJH",
  "key28": "3pVFrutbZhcJTtmV4RQHGuwk9GiVpTMYMHv5UiDv84sb8LQ4uj4m3kSHZV68DjhNj6eUACR8V9pwEEN3PtR8PgJ",
  "key29": "59bquNKmbZiDNr47hY8fAmE6NRRFTVGJuk3Bmfv8WRWd7XbkTXzC5T1PwquY8KAwXxRE1MGXHEwhpkkgwtcu4rQ9",
  "key30": "x2tFdo37cBzeKY1bJAaYKEPVgLFmsw3k68Uy6czuGq826k8EG5LFTPxTjDsdRL9KwNZrf7pDQwAe9D4vYhFtNQf",
  "key31": "2jFTtug3sWENBT3aJo6NpmDS8Lx11ZyAmgzWnH38cz9PyztAFjSYtUvp6nCKFRUMy121SLrKVdVgFeGFxwLg2gnG",
  "key32": "4Tdk6oEQfhTDYTCQA2iZM4Aphf5j5TQ3g6kKQ2v2eZKba9nstPusm7CpBLJKyiCcCadSmD2BSTprPYV3477qbEX6",
  "key33": "3w4TZttKjA8jADMJ3MxNvnqmA9ygVkR7UdFSWAWZwqSRonHcapNq1PHnSsgJqp2uGGFzjMsMgQYZtDgxk53GjSvw",
  "key34": "2pC6JqshWvCPMhmc7boHc1kMgxDM4cBxr6zVRZRVam9DwWHnJiTCZNtdeqgD2wBry6kUa2aRQ2hG55ZRrmtGkK4C",
  "key35": "iFu9cyjzdJuaA9ytZ8BM2TcCdLDrtmXSuJX6gYn4RQcngwS4pRLHE22XwDQfxQYeJaDxvFrhCBgjxF5GRpQBhKg",
  "key36": "4JHUo3dZM7HGfXV2sNbqeTgPMvZGiPQHW1GTHuzQgxn44fZUuzCTNU2R1j3UZT4tigZfzsBux1dXeLKBFXVuxhyQ",
  "key37": "o8G4AL6ivb6TqXVjxQ7xpSyKHZNzdzDxyAsx7nFNNxsgXjiZqVBmAouvGi1N3QXBnTjMUNkyobdcU3XDLYLEEDY",
  "key38": "5uHtgPsiAenM68jZN9tjEmKvZvKAZjS9WuKx712CmWwnFUbJ7hxWhJ1K9mSJ3cdM3yi8rgFpC5ep7Da3WsJLjTie",
  "key39": "3dV75FTsqjDbRScBoyqW3AT9j3aNYE2vwiUJtJNCD9omC4cnt22eho38d7qe3o7uqP2Qaz7MwoFYdY1eYw9P5NtH",
  "key40": "387sYsvyMmBnBTUMzKGYxSSuJWCUyqibNx1KnMePebptXGAgKMhDMCRkaKD8QCnj7Z4YrvWWAZKLaSi6Z8P1mdPF",
  "key41": "2U9XXCf5BokNPYLKd4UKGAeXFPCyTkayBfRH3CZgrUs5YbwMPBH7si7iHJUf8XMyaT8VYD4xvoXaJLtYhvtTJcX"
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
