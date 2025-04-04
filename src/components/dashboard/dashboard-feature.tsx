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
    "4AkmCV49JYwWrDugJGmANqycNMm3fVXYVECzNhqSxH8AkoXy982ZEvNYKyWHbnW3jnPdVmbPBMYF74mwkNQvYW94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tRw4FzgwrkmYmv4ukZ7beNJnkp2i6qP75MmCTTxwrtZZkjtyHxskVacH2Pcth5GkCqefhurmNfssPvEgarijhFf",
  "key1": "RPjzRWqfxERyBM7eaehhE2QT5wM7xfTFJ32TBcZXDfhJvNmMFB4aj3yx4bqMHhXhvHCuGG8kRpud7P2HsRamToo",
  "key2": "2oXfh4ojrs9mGLEW5EdcgUkyv8WQ2KZBmM8wRyUdnYbEtXVGdxTXwKJAWp9m7xsTevUU99DRaTVxgxU4kGuVKQPg",
  "key3": "5GDyxveP8DHhCwyA1QbxQ72obWL7n1MWG8CHAfK1fjJvM7jQViq5aKi15hJUXWX3WoabxGnzguaeC1hDEXUJpQwv",
  "key4": "5kPx8oxwTd1fiiYmpHhNH4RTAPZEaoHqXcCRpFZKd9PorpWiHjru6dxTggMqXcDWhF3eBgZqvGhaLcYEDZNa28bK",
  "key5": "2pUz4jVXuUL7sxk6Vymt42jETkPpVVDbk9D26eJrwXrudYr8F6y8YKf5VtHG417i5ACBnxJjZvmTKGWGji6MAVeC",
  "key6": "37FgSReWpND8dzJtzcQp5xTgiMUkj2uijHtw1rEr1YTBH1AfQoVZEmqiZL5wBCTERR6rhmdznDoUcpTGs5cFxXHb",
  "key7": "4phPAWZqa7k7NzJ2yaXgYCmwhhwgWCjzseiZqUpocxWWb5omrcEW8QK4DpudtaJktUqHrj3anmGB7DtfvPJWuZ8f",
  "key8": "3kHD23hJGhRLcAxbq9xLrUnLZyUpanLA9phyBhCCA6aVE2yatoz3jEfQR73a58MDfmzngz5QMGZpMSXWuecrZX2D",
  "key9": "44fCTB1hAGR8jdDfmMZmdutjufSg4BJjD4AxmaY1Sqi4z9yhYR9T74NST54NfUEYF4wLe3gMCaJKMT2r4LUcnBda",
  "key10": "63aCxGk2AhvLKkW5uz74vbLVocai4Xjuf7WoHydtCAzGERr45cP3LYXpSaAKxjH5dVe2B1a9ivfJNr1XQSrJkG3k",
  "key11": "2nvLYYvWC1DghkaGYoJcze7Z2UrSwk84B4FHywgj2BzV47eFPdMigxKnbcGxgwLsH3pa3krjrmV4Pr3VKEWLhETA",
  "key12": "657WrhXqTi3DNZm3cp45qQoixaPe3GarGucmMdPGWbC5xFC2PquhgPzPBN8c69otDCWPqCiQwsNdkn8wrZdhR9sC",
  "key13": "26xXQWBZDZvWGHr3DnDYe8TdZNVqQ4hwACEwVndNjmNLSAB6Qkjesd1xj7r2v1HSPe5ovBgy2CaxoSZutph8LF1q",
  "key14": "4QiX6pYFMsFoR64LVwSp1rJ8y3mFActuXhbVKkGFXLDG4fQ3cFgr3LN4xVGvUCoA7e7jhrQvbUARi3qo8Y9TdcVL",
  "key15": "5qptfexRQW6Dyy7QcewmiFcmRxE1A9yusLfUHEyvFBa7TECYXjzkCYaNDBKZQEzqkMFtUbPJdPmh3fKLrsQkQJRy",
  "key16": "4nHtumuDYmKqxxHuy5NXJbRrbhym4JshQNteoorpn6UgbAVWnfKdyDNFzSofdbbgZzPzpbB1t8EaNUuM5TgcosRT",
  "key17": "5ujgSC98HQGH89YENcdGKF9XywfpfLL4Ksjjouwgic1uY36TpCWzGkichRFig7d4FqkpCf1cJ5G7aj4dFaT3mrtu",
  "key18": "JKZsbPe77peg56DEeGBayskV8HRdqCTZktNqPyV9wRgLJLGLaqB2XgmamTQTGeqS6z6apZz8J2FEMXGscT4sDjd",
  "key19": "65vhgz5byc9jcVDAMZKkVpTKxHcKRjFSvvGxDmRcbKBegsUizP1eKnvC2UQL3Tej3dCDkrZU2J2MXcqNd7ghk4kT",
  "key20": "4JSxXkAg3yeSMuK7FttHTirSrcsLzoXkSRuSGzJNJu9ARJzLBRnMi87yZWHHBctrrwVHYXiEUyT626RsG5GYEAar",
  "key21": "3FSictx3ACPsbpMpki7ivMDBeWCcSATqFarmG1ccrHM23oKPFHUPwvj4ryPEgua6Ytpf5NR9TcjGsmniKuVUvzNP",
  "key22": "2Qud8tiDXzfRi6GHC4g4r5V82btZeQapjN3DDr82Je6WkQzHM7bHMxAQMsvEVa31CPjP9689GS6nuEmnwAz6tyy1",
  "key23": "2xXeeTyRKURtXrqDHfXM44r2QmR1uuk9cwbUXZPTpdZfSaupC51opzxGCsFppZgdhtbxaZ9fHCr44bvfBLprJyhA",
  "key24": "5MySkbq3wsqCkH7czdkAwAC1GThzBB8mvM4jHfx1KkraTpCrmk46MUVDNz1YjQK1rXmGZ3gUhXpfw5YBkD6Zi5VE",
  "key25": "3SdCzDkvavVR28Zp6ARsnQ9hKAt6wZ7wSusSyYsNjWsicRa9PLap3v8EdfRekafdZ6KnAGFXvdRRaBgkLawfGQea",
  "key26": "5sqXfTva2yrPeTwKrUun7e2jegeiDEEmYEnFtFDL4Qhkk8N5H91QJXvcUiZ4t1BZBcrTBetwM4drF4KWySNPmp8T",
  "key27": "2thXi2L5qT7U8BYkcctzd3ECeb3VkNtEKXCLetuk8v2mWmvAETnkTHWvbTdH1szQnikaQXgNC7vVThMJ3uL8UgmU",
  "key28": "2AWE2A8GFAbFfwqkNRV7pqeDEZGTwnPSVAgkbQg7TUCXkFBwvhDcxhWz596AeKpx9PfYJ6HfmPgJSQjJnrTmAMNU",
  "key29": "891JVHwnBye6hnAujL6F7p7hL9Hmc51SzjKxpFLptoL4Gu2SsuRD6c2iN6H11jjGtJcfMii5dNKrAbaxizR8f3A",
  "key30": "3heBKS7NVZDsJzJ65Sh3gzgWMURAUUiASSUn2aLiG7sE5d9fSBs4gMEs43Dk5JyUU96MFH6tMTNxog362WPQj1ht",
  "key31": "2CufhvMgRwtqfSe2Q5fvMFnJA96ukmVY2NyUZuw1GwgjpPN6rzvoN4YbHUoqX8TsNknA23m94EAT1bEWwFXG9hHj",
  "key32": "4BDYMvWsi61W27jugRghASS6rDv1drbdQuTdNNV7oVGNs6ELagLdirNCmreiz8GayNwYCa89v5JbpS2Eq3yZWFbR",
  "key33": "5rKxydS25AbzaaT6nnsS5qHyVYv1PdUNzQXQvm3edCPCWmTWJiEazwd1CSFAM47ea8yUy3A9C5vJYhJ84REjcrAF",
  "key34": "3abZyognHD1y9tETEZ3W9r7M6fLiVPV9ja1acYQQBW1m9fKa9Vs33fVMqjU34278gM4GDFBp1Xfc5BsD9avLUzkM",
  "key35": "swUrgfQ9YP6gxhjQrb3TMBU4aCJLXDeuD8XkS9NQbj2J5RFmGfuafeUk8VNd47c3XqMfjbkYn3KsAp6C7PxhMU7",
  "key36": "2B8gokue9TBMMQpScNuqkev5xBSPRzVajpXvTsbQeqik76NjGfdDaza3fCvNYR9jKasqXzMY1FiR2vfpPemibHAJ",
  "key37": "2zpLsjPgvTvD6KgEFkyKp4szbw5f5kdQLRU9pKYtN7tmB8yTHpp1brvKLqUcAtJFByhUHDV3XZ4XyxRHFuC35NCN",
  "key38": "3reYL4418P4DVLffkmvsNEPyEx1kwLk6JBBW1152kKnSU76GMYqcDDejaxZr2uQfwQdLqrEjh2Yp7WeHSsckpHzT",
  "key39": "21irpzrcF5qeGjtEwQ4jCEgj274rfat4UKjGoQCk4EB15BdAMepVj5BrwMdAnFVskESnNMmLD8HJXy97QhsxhdbP",
  "key40": "3WK3uZENRGuvsuPDiZBhvEt9NDM3gtMd3fWAZ88beFtbtSXumT1kwmJH6M1nkufSgbFuVfsH8fUPT9u74v3SqPRW",
  "key41": "5e9KbQ6XjeJoqnHWVp5gnvnceTg6icYxPoPEd3opcxbycATVWEzD3zSRkcQT8hgcLgDqTeYUvhXPCzMqa2WqjZqV",
  "key42": "4xfX5jb9txuvQAjfuEmpJCaZ7fZLSSzRa869nhdjM89LRr57vagn5Qt9jcLhfNRgiaNQ4Yn76DfRrZH4fGQ27kCw",
  "key43": "5EpYqE5XTuFFGpLyBqBnN5zuKhtQ6ftZAg15tL7EQyJ7njLq3rkZknvFsNRVUoFN2KrDtiLE79Bx7iMptcd2Kw73",
  "key44": "5zsbu3AKZtgVYpaAgjbxWotAojNsLNJ4puxTmhDUgbDMRqv9dPcsc56hCFQbdg7hL7Jn2sKWYummjm4PzBf4Dg1v",
  "key45": "4DvL8SMUTejMjcnEZ9BcyAzsLcrTJmFzDgeMqtT8RYGkCMQzStYLWo1QXz7EcUP6RcYwTuz5fkp1U16xZw8Z9Doq"
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
