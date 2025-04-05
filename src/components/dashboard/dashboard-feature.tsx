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
    "3rxDWaGKQ8HXwxKyFXbgFsAY7Y4HDZcD9JPpBVtYqT6dSmcbE24TokPQvWGU6o7botFfqSqEyxVFixAPTEECfuqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sc6kXVM3vRXn2XY6koF7kBSFtWsnL8ubNUPtfQTUCMqPtSWzDv5csGKfNxu4AnTzBScgfpf6ofcu94TX4X3NcGK",
  "key1": "66ssPWEdwDQAGn9s9E9628ApkE5AinGJW1QAAXSq17KmjUSw2uL2vCCiqEBpxtZCv6bsNXGvSFYX7J69KZMBeWsV",
  "key2": "5ELF2UrZ5k1uvrLGrGQfGmtxBivPrrhitAjEa6RA4Ld4seuGeWAb7zdnJHMpm4L27n6GW1axrnEvoDqVG7etkq8T",
  "key3": "3uKficTRLMwr5oxXYBRg7ztChG7TrCUEJq95sM43EwrhgLAzkxUfxaME1GasziUsCeojSSmwz4fB17UYepz9SEuH",
  "key4": "5nUnkiAseunxW9yYYADiwfAMP1hjqGDhRn7YGoR5aE2f7wBs2z1YMbPJbsSKoqaTAq6weWVQTwRESzsnEJUvVaXh",
  "key5": "4ZvwbVTaTj3a61KwsrtupW7m8gzWJp8AfsUqkLeeLmAA4qCQY6pw2oTrY7NvHz14zkimF7dbiuoAjeHiQwHBXNpK",
  "key6": "RYJRXH6EehQ6EaPRdLqXEMNEUHLZQDax4fKwH8rbH4ndYHVt2N8fyCsiJkyL3S8De2PYuSiargJt5UqusDygLKr",
  "key7": "4866sHXVkwRRrM6S6KJyLGUQ6nJuN2HqYtyJGTpDgM532u1hXvmSQ5VCMD6EpNP96janMRno18v6wLpvtUK9RB3o",
  "key8": "YatT7qhPXGBYWcXoNTN1NkrFoPYeVBic9cmKx8LcqDzDxctXETr9Z1ZTY7C8NZquDB7wbXoAdjQsQLpQS4qi3tC",
  "key9": "2Q76vxdcdjJN8XW9njB4QwEvm8y5nk3cTmEPZKop1TVgztLWchafZEc3qWrMmCz3B7oy4tGCR5S78DDzN6PAgMYx",
  "key10": "5NPwAhmEZb8e5qzy4S5WP7gNBvmGR1TpH7njiwYfkJxS6ppjaWThcxraqN5BRxQzf8fXJhwDypmewo1ik37XTxFw",
  "key11": "5BcqD4Pn5furz4oBxESkjL96WWFaVMHKFxzAgQ4KQJF3VgkzgVmphgLt3xNdLo7bhxQ9ox7Wv1T7D7MEYjRb8REY",
  "key12": "3m4kt4HnNKzsQowo8kMKcSbMwC3RRyB9rJP4kgZZ2GDowZwcdmPpTbZsfEqVh9S3oQsp76goPSSRV3BiKW5GoCAP",
  "key13": "yjY7VJhe8kUqjJfo3sF4Y4r6RRTCyCnz9w5rg2svHjtZymbrLDEBKJnGr2Xm5Dno5k1CoGq4UMuTdYip57BKYCm",
  "key14": "5iNLz3ir1nvgztqMdPaRGfNkNKhRdvXieNqnqQKuV7r8HVZK8b8u1utQ1C4fpgiocLB4UGbaUnwSbjowEV8WU5TR",
  "key15": "4zo2wCRMiEo6DAJEZNjBDpRiV4Nnea9jp86CRKbQBnQswCDsxavbhpEZqG3kSoSLyhBHsECpZcWBYutFHFUj7H7g",
  "key16": "3BFLoeMKnQwnSCwbNNVZ3jhr5aPAu8n26WvRPCLStxYcXwGHU5CvSm1Tve9zoZsHfKTyCRa2SqvNDhksSh5GVzPP",
  "key17": "agN3QAioBAS7ZMtji1MrSr5ejLEQT1ZMnaJ3ggzHNoJTRc6UQsrBuKZFC7sQ4ibkQBNpb2aaoBM2fdReTe5ufng",
  "key18": "2AHKtDuk9bvgfZ6fEBNbeim7ev3ho6p7rrYvkkL7GPaF49Ne4J4ULps99LAXUytn5PpFTvsLBtzGzKQnGoYj4bqw",
  "key19": "3mqpGWyJ1ttYUqkAieqC3n52mi8q1V5jRPRN2exnQGJ3b29bYPK856vgmKAWM5AJ5nzuMLmY6fUvZ4DJZF8VD8Bd",
  "key20": "J8Ds1Q1gungemsTTbZ8bdnwdXadCmpnCRBf95wesRSSL8vPhPrDvn6YNtsQW533Sus8Kag5NYUE7bSz4ZqVwJqg",
  "key21": "4joVmzqgbZo2yAKb8tLakJfYjrB28qNRZApsaLt8JKRs5DSBNbqJeJzREXwYV4jZZ93zDJ2GVALBoEVnN556sjmS",
  "key22": "46UaabVKhTCycn4ncnJ92VpRaYn3TeSJaez2W7xJG2ZEyAn6fYm6sbthkTq6ndHaQfK5KaUE9tschSoP2cns7sGC",
  "key23": "QmPbtFZ2fcc3JkNiKhoXFZdXFgs4MynohbaUiAEgXXR9W49LczdZjefyKjR38rVAzM2gmqpZ4trjsBGWSZedFw2",
  "key24": "2vqDQH7YNs7FmqbZ38MYeSoyXVELXvdTntvLxfryh7w7em44n6MeK873hrAC8XkyqnaeKpobhnswaoNNqHP9GAZG",
  "key25": "234eLxjcMzhaGLcCtB9fiMLAaU2QKgfaCG4DSPFeVAcfNLQxZGBkYhAfqgg8avtiv435sReM6Go7R4pLsWRz4pTc",
  "key26": "8cxbS5v77LNcqGYn41ujtC3jD3f2NRNtAx2AYVBe9gbBvpBrLKvx3Tn3MW1ZdSz9ydhfNU72Uc7EnfgXZCyHLhR",
  "key27": "4PbaKNqFriN634kBdWZnmQgu5GSUw5yP3t8w6Pc5mZaR1peGbVWBBBnjqNM885aKusbX2yrAU6kEvaDbVqj4KsUe",
  "key28": "5ZyNW6kyGUV5LttekdZ5xJ4NecfaZTyp2xmDb3rT3GVSMz7sQJfyxoBSusn986P5R3c8BuYdWYL2vK1GgcUtEWan",
  "key29": "4dAHdh1JX6BBrqkXWKZsz6h5tbfkHMMreGjp8kLsjVu9n5GEEu8nhkYhHEaR398qvYtJsUxKyvf7vyfyyMAfkob3",
  "key30": "3NbaHf91RxR72eXFfqG1mT9DHgjMu92ZoJsB95SPLFoPXkN9gBfwevZTJ29qgZbJC3YxLPHJD78rnRYJKX55vxxG",
  "key31": "2JDyEQuAK1dZC16zner4LSqPqKwUQ8tBUqPXPgaT7MRM8WwnFuEq6ruW2V2zaLkjCdEr3cY9SgwfqnjWETm1wwBH",
  "key32": "3JX4XWR4CSLe5cph1fSHn4YoZA3XzifpSNFMZhnWyAL2gH7ngHC95ZJqYY6eV8Bbubep7x8PtwVKCxC22y1bx8fN"
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
