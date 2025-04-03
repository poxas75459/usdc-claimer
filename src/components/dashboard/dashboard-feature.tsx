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
    "5aex2rvKY8xjK5TAvco7mSRaaQiQWg1hQDP9SKfLrUuyQqAGeej9VUz1vipNH92jCSBx2jo1KU2s5FEjg6B8AgRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VNum7QMBydN8ZT9DZGBJ4cpuv8qB2jVU3fbsQmwF21zUUKGxhi1oWGmtVtNDALCWoKVZgjUhdDkzpqgALh5nu9u",
  "key1": "5RNs6MW7qUcJoK2VT7KxpuGdpG3wkR1mj2FtfmyBpVfFoNCF2hwkDuQY5Bmsky77KTuFYZ1fkMatNLeQZq2vwnBa",
  "key2": "2MwEGhWLKcqrR6WrcRJhDtvZ5TKqjyne37ProfWnMLpeRCCXwqzLPBZN9VVDUjnQJPeFQtPq3wppyoZFG9Z48pVS",
  "key3": "FauwjBgJHs3Twp75NGpgG84AAKQurAQwVGpJxqqH6wCjd3Di8dUDNLvWHWkpVDKgWLWsBdxF5oipraneHjXCm7L",
  "key4": "5L1m2E5ujAPeLg5MYYrfZnKXEhNFb5m1Ddj2GSbdVrvSCPYADEkWqaaB5b9e2YC3T7wUBLVEX4grtkoJYRiwwhfN",
  "key5": "4Z9bfa5VTFZXZZHH6cJDihTsM6WJVmnRt2U1wvmXUdKbhPG7bNrcB3qpB5BpfSbwJr9yXq8XkugErnPZ8Ki7tKV3",
  "key6": "3jfEscffmXafXh9eDyv9KsdJK4qTFjCPjDh2fohvgtP4oFNhPgNNxTzfgSQevDXih8auDDXYuPMtzvQwwbrGPiWe",
  "key7": "2k1szawZmhVEQNZ5dVX2FgvBjaiVsU1o8wa8g1YoEFDfLEqvmEtwupu2B7bL8dhm5RddaFHhfad29zsBespXyroF",
  "key8": "4v7T2vWa71QLHEWJiYM4HtTL6YroHZgNWmjVawikwN9SLPgVXoyNtbd2ZYFDMBQ5gGC9Dq3XcYFqy3bQEG9SSqry",
  "key9": "5gsg3kvNVYxWzpaLFvAFzYsi2xpRRta66A7ujvErEctyvxrJZCyqeNgfnekMa2nUscEbZ6wzsjmP916QPxaNVt81",
  "key10": "4zDyqgdgsMcbF9AVp3Hh8v7XH26EbfoAE2c9iJv3sRqHem9THMWQLAZkdst9H7MjVoke7q1cxezz4rczDAXirDG1",
  "key11": "5csNjU663N4icy2hwB57xHEM7WeCtszZxYBGVcs3nrzEfUkVVAzJGoX47d3nwFYnRuPKpi5fJxdgZpPUxGyz9uRh",
  "key12": "4YWns1CETwW4jFJDBbjUJgTGC3nawJtmdqMWe3XC4bQ7CbQBEJfXqvS6o77ti3gLk3gby1nRLroEj7ezc6MaYKsY",
  "key13": "WfscVw2s913ZnisPZpiRW8BuYfYkn2AUPgCo4PETAtP3etpPZjFqsqdJMVQzxLdderDqrcL3asaqMVthGriihxU",
  "key14": "2v6ML8JXiAdzUD8pMyDmdNo9pYVWYfSdR6NWsXMXS7gwH5rXPv8uJMHcep4Mp6wX8REjKFMeNQY4pLwgGMJPVxys",
  "key15": "23KSSRAVFEbQuDQtqjig82A8PBN9EmhreVWddsXUr18KEw4Gg7nHufLMakrRrUFes6c5aeorNfNPJVbVuSGwLfxp",
  "key16": "4uJ6pXpbw3G4mD9QAjUuqHZTNcYEwMZBtT7FqyNLrXE834F3U3JeE27yhV2mpbDrMXXKrvY5eeZMBckeTrZu6MKt",
  "key17": "QoJq2hFD32AXCqfBKstxwKSJefVj661ZutWBQ5E9XeLLWRqbXmas5m4SLpABUe7x6rMqke5HGsKHNuvDCqDEWiM",
  "key18": "t4gUmmdrvnzBkbs6roDXuNqHRvtE8uUGPybwjb6SB5xvDPBa1YJsxmHJB1PwHHUdBtGGL1WoCeBQW9JtYXbTzZ8",
  "key19": "4r8zStWnDxwpMKGGnGrpBEVNYXD5rFwvuhQRZbbvt9kEbPM89z8H7YWp4sRXgSVMfXQT7WSeEtENAFUvnPAV5XQW",
  "key20": "h9dpjW7seEdehe4F18Yva5uDqD2tk5bwyTTHmqGgErbNAUjdqF7ohm43bsQL7RJyUdiwFpsSH8A6YovcHr6HRgT",
  "key21": "3y4F7rR4Vws8FPNsD6ZpHdG1vkUbgh326ZwNNTRcZVCY5kB4pjSbrFt2guX6QnLhUbPfPjkqkPDvHbYGawwyH1vB",
  "key22": "3zuyZksKUBXCm57XtYFNmdBr8SR5jdUAb4RvwJEYo14m9bLrJgH8ESJkLoEMMVXKhJVZ6eG2ncPDvAv6GLpJFVWH",
  "key23": "3aDfbmz33M8sLp6wGybti4Hh9doP3FQTJWsDVCXUCx83zgYWfp6WWwGwSzwPja4xTqYZRvqojSKPquLarFLa4yk9",
  "key24": "3iWEaLu88wT35sRjY97U1gciQR8HTLJhWdSn2u6jcSU1WPXKwKGHDwqYZXcFRAXKoVXMv9s46xUYULFWzw97oqeX",
  "key25": "YDKeQGeaN2iiTfBn5CWgrRvQ3C8UneYKo7X64URghNzEAb8KFpSY5WARgMHRr5Sg28LYSqnHB1Zg9pATB9gdRee",
  "key26": "5S5hBb1ZeromEz4XpGAHaUeDdLayTsAvGFXqxWj2n1nwDzFGMhVmkxuz4KvMHZEHJpriS18J7b875h9FCGp5tY3R",
  "key27": "4CKptCCNdGwmeNbmxg7e7jgwcwDrRkyKbY5hzAo1YRTmW2aZgCo61zKtytWt6tX8jUfFQiWqPinkBnkcV6R7fneB",
  "key28": "5isJqY6sAVQFFiiHBQQuKRwvk5yNg1KHWLxQVrRpPzzcrm2jmYEvshGq3EJC1bWrUNGjeas7ephE8FBRNcXVz4zA",
  "key29": "4HxnzDtPgM1uKPnvZBMr41Wnz8MnfTJ6s9xcqLRWP3yAyRzNTnzBCbmvptkgZHvFJAeHUeX4QUjxHPAG6hmZdZAY",
  "key30": "4AmSG3LSnm8Ui6oKy66ELakuy3pxmKi3AfMwpNAQEU4SFMPogWQj1DFfJENrCF79J1pfbh26Seqe325MfsX2Fnqt",
  "key31": "574CDtGiSfUBeEEjknAMuCsGr7UG1GNvaGXubkK1z6k3sDtPdThXmdYB3kNdyaRHGcgaCaZFYmkuCxEmrhJ5J1UF",
  "key32": "8yKPj4Rs2MTP1hvv8XcYVrLnxPLJExPhBkPWjpjiRyfpmQT9avBSLxPgcyUH5PTTyWUwU7hZmff14ERqewvtPN8",
  "key33": "3nwa33Z1oS6HWsmej9QBTzWqnSkK64qWttb9tJpGcAKhj3FUx1VmFCgHxnKJ9PWvWJPQpYPz7Fpyn246fpdzXHCP",
  "key34": "H6fbTpvC9k4HSrPkeV8yh4fWgYunre3LsnetUd8YjQTkknHckJ2kVQw6NWQzZzdo2SFsCmyGGPwrQSN9xiQwDJ1",
  "key35": "3W7TR2kymw9u8G2tbpkKWbh5PGRQRwMu1upMmQvfzGySb96yeuti7mbunzmJ3KSR7rPyC6V2VsLGgGnGLN9zHRXF",
  "key36": "5eZqFVJT2zzP7QHEsP4U9HgVWro1f8zsLPv2bnbtpyMtxMRG2F9MucugmUCbuWtJgdEKfwCA2oxuQ3Tpr81pcbnM",
  "key37": "33sULDmMM65ixX8hAdZaR7g9EonPWWr81w5GEfdeFVef5ZWncrCbtFjvtxLHnGHxQHvNJ33Ntargr8mH3a8TDASC",
  "key38": "3NwJZKKmotytzxDw2YoeUr79JGX7TaSL9RN44zbSuMPNpiedgFMJLNUps6bchNiN5MtDa1qjt2MmzcmAWdyY6WPN",
  "key39": "4SVgRGNQpYJFZi7S5AEk7W5S3Vze2ERTdEaNCZ54EtsShGVNUsZr6hxYN8ehhkT3tSGvUb5jeYAQ6eGBGyNPqo55"
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
