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
    "32nWb5q8YByLwfMbG76bXiNiip88ajrYh6ckdrMptG3zgdXSo4gi1UiAAxrmsG6cnvS1KUj6Mg5ekyYbii2vMM2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34xHMdYtvYDJKcPGNxRwaC4GQKz1JALqRWEsdYxCtSJC4xP8yJ2TncJHSpVpe4Kw9JgrkQ64SAoAQd4hB4zdQqJR",
  "key1": "2EG85As1der3S7JAw7XC3sR7x6antfMUZtopPCjrf3nHJ45p55kX2qvsC5E4iUThjypzG6ESUagAz8re65JmEVus",
  "key2": "2dm5cMn5cYaygfsg3bu4CxvAbZr9dpv5cVaPpYssMG5K9LQc4LNZLkPLZSo1Fs9Knpvir2FARLuWwSBKo3CACZnw",
  "key3": "4ciCWjMqKNqJNF9VZkPfFc9K4n41RNFzCrsMRL2aKNUcNz59w8qXePW5amEhyepp2EjJLzMQmF9dcjxWRdDiK3xt",
  "key4": "3v5YKAgLVfUDJUmkckXWFrkKEZtiAMqW1uE9D2Sd72et7T8UVoWrkznAKXT7AfhfXGdRPz2d7SWaPe3f5uxRgW4a",
  "key5": "5j7ecjeY3DFd9S2KJiWV8PFxR9mGFaEiLmLsbPfrpPsmQLYeuyzHF5KrnZM89ev1HMbd1WBXwxRBDeiywF8pbQms",
  "key6": "2ByAPT4LhqBSTxDbAuNxnuTU8Ga2UcDvjwVoJHX3JwCv4yF7fREsqnNNGt27hAKLaLC2tPoZRofo7aqy19WANGBb",
  "key7": "53vZoftxx5jK6U6LtkkazApcMwHa8EsirUQXu8KSjaBrUDVZ8g1rubYApVHwZ4mwnn2pEQp7ZzMEHaHFdNpihfyk",
  "key8": "5twwWBAGD5NYquc299vwPsiB26Le6gYGBFmqcpHpbgQ8VfBSnPcKS9Bar1ULP75VNEPdCoHuyVHFHKb5DoqxF9nF",
  "key9": "65a9FeTEES3cX5q7vzuwxHoducUXV9fRzNkWLUCj4SWF37PENzqp12EnEyi7Nc9VtBZJNJgHWwTgtAGgA1YEnt5U",
  "key10": "59CDHqTWMMGLgSjTzRrf7arZo6eDtQ8Z7pVvN217X4MwEMoYnyHPiYhE33gWwHZSeKPbJWn6KcYf6zs8yEEsJnqy",
  "key11": "g7NPzr95iNsUtYZXxLDQwkHM28tLnRr1abgwBpzTHauysu3MBuXRwF9qD1hoQGME7q4ab4cr4EsE7cmpTqJZQbS",
  "key12": "5SbWwZcPJbQ7MvGEERH2LfxEuGkaj3bwpMy59mLhKvjokm1eJeiFcTdyP7DsW5btpNADWVM6gAeeXJTNcV2TVHS3",
  "key13": "BVYKQEexzDdWcUsu16hKdctmJkSNvgeUPEHAvDstpFEY6K75Z24XDyGyr2j2jtCj6H1hUf3XuAx9H9NEuC23swR",
  "key14": "corwvWwrF96qMHEx8yrrhMSSxwoQxsEFSjSYNqNwiUeDcwvCHMMX64uLnUtcR54buGKA1VTiL2kbSq8GcWC8qZt",
  "key15": "2Jg2g4t43VrD4QzZf7kKSpozVE3P4BJ9uDP5ErnBpiFLCPsgQZT1GXsKY975jcdD6FvkcBYT1TG8m6otDsuDocD5",
  "key16": "3EDMXMjyaX7wH7jGbdKCzsaoA4CTqnfFUU6KyJ27cfdcmwmPM5Tnn1i7LRLzCEwzLGGBV921mp6xJPHU6RAAwEa5",
  "key17": "4NNuBRKDfn9VwoNc7NZtwrViE7oMBYBeuys5pToTbgFK3wqLf5pquWtYKpF5K5xaPw5QbNWK47uqbNRyqWKbDFV6",
  "key18": "2yja7DSeYF4EXCgSvf6r5eF7BWPYvsVHUYMBjgqkBD13svPAGPrMk9fSbF4zXSbhZANPLdcQUJ8KsCjBZRkEDfjT",
  "key19": "5XpAhYQyY2cWdr55XpkhZtssGutRYW3t7UDDa4FL4hK5MHDn3ERjRXzuJNbnH8ui37sbSsDsavK4Lwe45tNKV6jp",
  "key20": "3VX733h2RTc7bEzsMvqoKTZCu4SE6a1Ax6VLFUCYK796rL1g9QQnbtMKPLt3aXKm51pPPHA9X9JeZsFdjXcRsgn",
  "key21": "4kpMoBeqoDwYJrCmqh3Vph7B9MqzfAA7fdihqoVvXFE29xnxRqfv9Qsd2zB4SQr5raJuLWgTUoAawLHUBzFwDa33",
  "key22": "2ZPw5GVcJhpK2BGE9fHo3ootJWB2xLuTuYEeZb5PbnkXjZVTqw9289YThZCDqfanszqzEJeaSFZahpYJmTXjMEo6",
  "key23": "3g2T2rPyUHrEEsFRCeqkB14bfCKnrb7aTW1r4kCS84XC1UtNgzaBA5YK3giC5y6J8YjDY1tiF56zWfxnehbLBTTp",
  "key24": "5NZd4NfMmxL3DJs1Zu3jBqtLHtQ4CmTzc9VWnaDzEajbHeUdy2wW9d3TuLybAsSwqGbTxUCFrHzdchbGYyfgJ1Y8",
  "key25": "2jZZzS3uUgBNeMAEuh8fynb8pFXsXVEs2qTifTyjj1VkdeCUx79vxznrNNjh2oMwRscaWKEh64wdemf8nwXgFvu1",
  "key26": "5GyDrJZj6gUqVcUjLgqjcb7EtL4iVP4JdLTh6ktrk3eWPTWwvTxr8ptfpa3dEuBzFmu9UEqDjJnCE3iAwM2V9rQb",
  "key27": "5NGSfcbDEtKaDHqaPULw9Wjk7jQo96gTTrBKprSnr2rrh2k9NaDSA6c9nwWeoYSyscn36HTkw4GTkqG3G8Jw6iKQ",
  "key28": "53C3woJo2oMBxVGL9yxr5h9xn6588foHbEhWDiF8G5w2Z1gA9uRADuiqVN9rYRevckM5UcJxwEsnrkkchmTw5vs9",
  "key29": "2ze19jEx9xmfXCnfJRue1MkjWLgRCofxr8tbSAD6DaeuEbko3hX7WesRrTGsjDu7u323tf9pJfZ1iD8FJg6QFe46",
  "key30": "tabdP6Keoh7JwGRmuNRakpkVFgLny6buM4i5kSurXhwUq37xt2ZhgHGYXCsfzNq1f4qkEVQiw5cdu67uznu2VM6",
  "key31": "jDu7aAG6YCpkkDEsGCtZU9ffu7WzRjU8saSNDkB4rRbLvmmGGJNu65mFGQS1NHg9Ee3DNyNaG8TR31XYy2F5Ms7",
  "key32": "2JqpPsxzzADJkfTJjZvp14zrWjMwNYKWVFqDgTuxUXya8XR3W3fMZEm2ZKTXZEFctu5wK2eqAqeqyRDACkSS2uM4",
  "key33": "f6M3KeY84SuubkAq7hR41mFnBQXT6c6t5DKtvkdBwsGoPgqQcxi1r3UTbt5CYGJhmHC4NYWDRofU2mzypBiALuF",
  "key34": "59LQ1ny8bThtuZSFr83rgETFEE3YCBXDL5EuKf4o6TX6dZSrM52JyNtbKzhq8Neh8jWq1MCd9rHWbXezrvi8bQY9",
  "key35": "3H8DtNcieH9b1mgYm8kYkzJ4b89JSm6S7xeVZMyeeeFopscSpAzQAR8ZPDW5DQfTVJfRZkyuMR4k24TBcU7kZuXR"
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
