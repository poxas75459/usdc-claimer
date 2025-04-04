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
    "jDJwtbockBM6A8hsG7TRL2TZKib9b2PfNxMiUaTyigb9waQSjpPB4nqLQUxqxWMcNWgqcKkRz1GCPGvvKL2ZPyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ut9TvjmjSbo72S7y4NcU1uNjQHE4LWcN4bcjGx7sW9gJr68qxiKp4bvf4iaLe9ccedTK9cWRoN6XpFXc3WHkSUy",
  "key1": "2E1Ru6chRm9SnvjPC8KbtyxW3MqvHfWMHoVpt49pkAUUQqHXQpb2oQxFN6g8nrhK3D5TCknykajsCqRdDKKQcM53",
  "key2": "pdpMZxyqj9dkDnSV8vaBKAmjc9z96Cm4Axo6j8aQJTpRu5TnH4w5qpGL1ie1LdzrkXLFmgcf1WvgUPJw6ysUG6o",
  "key3": "3CNjpMW8cnqXeVmYVfkiTXKknN2TCcZDsjfM4TU3Un5zruVTdYQNoWLvWNKcCFMU5CeASdAqA2oU8nffQ4wBCcZA",
  "key4": "2yRxt43dPQmYxgXrArP1nnRW5NZa3vCp4RX3fCRWvCmaqqxpVwGbwBZNKVxboXGFXAVQLsUr3zdAkoiRhKDMbpW3",
  "key5": "QwWe8QKnM1kDF1iTV2ixwSGa6stXnBGEExzq2E2tD7zftgVuXkAS7DT4m287NmHsdRiJryt6WUUbhDwUzgChPVb",
  "key6": "AY1MHTvafY6WVVqtRBPVAunH9XXDnf5aFJLnsbi1NB9DpFXzhyHR2szC3UNF47CEY3uYxxLf3S6VSUWtBKFbET5",
  "key7": "45oA4zoRmEgFmdJzsc44AfxEDiWQ7nSNfZYUM8qZiybrxZoNr2hogA52aTdnHTFDWdNVT4xUq2EBYdYqPBRDNbHn",
  "key8": "2sXghyph62xrK4d3uGtY5mKDVijbBD8UexWK2DXd6rEAJuaWVAQUQ7F7ZX3J7T3ArTrmxPx7VqZifcViWx9efuLT",
  "key9": "3V2i71JtpFwAv6ZBLzQn6LbhybDw4z2q4q7mN9wBzYANapWUvi5KakNdkrp3GYGb7WLu1TmBwcDJLdeLBWYr2SES",
  "key10": "4dMTrD7KehsbWBcPjS6iqswhty4E2MYvqkoQXeTs5qBkHqsDrzQKhByHZisgtArT8qz1Q8XeXFMcZKFeNr3bUWtx",
  "key11": "47gsBSteXFzFFRgeCrjM9SSLtoFFi55KXiYnwqdwig1nsnqNramRFM3rRcqffosPoTUvN3ZUudU88cN4VWD5Pegv",
  "key12": "e5oS1iiwf6oV7Gjgio3Dy3hkTYDAbmX2HdcvLFSsnqEjpS9nSQgyyHYqg7mJHU9ESGa475B4J93GMikpaPdtRMw",
  "key13": "5qqj7tjYsMknkccTTTFkLzjQwgf6uxwogFYrxsDGmcS2TZDY4NVCc9M6ZSmHqZ1yhhgLyd4thHyojn11u19MBnEu",
  "key14": "4e1WZVjNJVTWjXe7ukKWM3FD6QZhRrLKzdJaLWdnBeSfXDYZ1tpowJkos5DNwWCfPeyXAqZ2UwoEQ9bGpcSHRjqD",
  "key15": "3CHhLrmN9adCdpZxK39j2rAPHihNXoKSbHiUJnR2WjfQ2viJQ8HLtBJX1EDquGaQMjtcRwcAuS8XLWPvWLfctmR8",
  "key16": "sBTd2fmWt84jQkdGzW5E9DF9Mk6TASYgh1Ui5k6wGkuZ3a6KeWb9niu3JynMGwp2SrfbAyh1sH5x27SL5aRC8YE",
  "key17": "5qpXJHajsDJ7pWTaLMESwMfCraTmNCvghV831uPJiVkem48rttfJPD5j4jTEVXDZaF9o6YmAiNVgtQojbicGCig2",
  "key18": "3wK5ocZHAX2CXFLbtrvPunwr7nTTjgLES3DNSm7aup2Nmt2eLVr4WHXrmYDU7WhU5hrPUfdMNss2SVnqk8DthaeB",
  "key19": "5hUoFDkHQA2K1GgMVuX2KrCvV5GiHGYP5htaQtNZ7aREU1vCH9W1yxp39nkbVN5KYM3s44TYZBEVNnZdqddWbgs",
  "key20": "5UPzYDm9quDnynxM6jBFrefurgcMgxBtQmXs8S3o148KKkFMFGtNVWgGSUPWDsYz2m3MyjrYBbDVEMRbQhVMhvys",
  "key21": "8PZ68qPdbJ776ys4u5mqD6NVnCpoBVGizT4XW4Z3jokWtxjqYj83LFd32TstgKHYvJkGnZ2CWueUnrRqin6mfWM",
  "key22": "3hg4nr79uHPmpn3q7EuU7MJrdSA2R9bKqXmQ4Y1M1Jh7EaorGRpUzn3nYRfsx8Uo72TA2b3WfDmLyeJW1vF1fi6V",
  "key23": "38MnWjbKm2Xt3QguCbmX4kfWiYica1mk6LTom5U3uFahJLzTkYTEuwNsUXLCuLVaUr9S25qzjuarvAgHVLyTMd1i",
  "key24": "26Pwi7EEYK1FVuAiy6D4V7ELV2tmgiXphgq7sg3pLLEjrcRhQDDDGUG4763GdH6eGK6dnP1mi7YPRcR7vkz66aB2",
  "key25": "LPnbEsJJgib71LR53Z64VRtfzWJ2J8p2vc4eDfFH569NDVWpzMKs2TfAY8EtKzUjab7LirCtYEUP2tyufvjgpA7",
  "key26": "2Y4J7UjFZyGG2CG6vR8AokgPoWXeF2WZoS5vEJGANYyhgdy2DkjFgpz9tMbiKz81jXToQdi58sXoTVfBcenRWkmb",
  "key27": "mrKKrEKUAXmo3mKaXg5qMgeStzDFrRXHXfro8eCQHjKV3mJmUAhhq4WDCrSVc6fR7EoCQUF74PrE7FmW9KjLTRn",
  "key28": "SFocPifHcqZTqzxCyPtWE1epGcr2wAHendb5URuHQtPMfb9NRXg35pQB6Seb5vkko2sYjCrx7fDJPR54k59EWnv",
  "key29": "5nyS6B9BPxvEBzrzpvEZ8RYDthEsEmki13zCDZcQRb4DqQF15G4uE8ZqqrweP34nZC3iBNN6QLVbdigyGM6kWoDN",
  "key30": "37vUHgoRTxt1dtqTFGUgpjAuY1FYs3iyCU9iWAVuMwZun5ALkuf1svbq8gmJNAys6RsbUYv4oSNX7ZZKwYVvHiXx",
  "key31": "jds7XAPCcgt698MLf6m9LYZn7yBsbQ8m8pFqZe22y9SkQ3iy1qBiop6VsUzkgsSXcGLp2Ak4PuWDdMknkYAxFjS",
  "key32": "3pa4aKonv36MPeDBHgfSenrgPJ6MEugsQbey4ojm9eDPNSKPt4g8NE6vF3YXdmceiuLqpb2pbULFeJRJSeXWsJou",
  "key33": "4ypmUB6VGSFLahVQPbQDmc7p1df1kKAVXaAQ5NbPpAcs8uDSUvX9Q1MGcc18xRrDjWWEJkbGNrrdxJdGvVEKKygH",
  "key34": "7FXHthDPpUVzrwUtxnQLNgizhM3XHjXeAwXPXzByf9gWf3Yh18fkRAiUcct123GiX2jFCc646kxb3C69oPCDsZV",
  "key35": "2HA1NQvJHiszjgXT4v1NqJAzdFSPEWntoNimWEv3rqEGN1arGi6Zmrf9876PGo4rt3BxV2FDviU3EpR42VKrVRku",
  "key36": "4hj4VGVGw2XjuFNcERaqxJRos8QdbgCNAJTquNuPxUmoXmu9ARWckuY4Kft4RNqFN27bg8bcxSNqVsRbDUcRc1pC",
  "key37": "5v1fx7xWutddekMJzwVmWFrERyQsvFJQpjnvGTfgK3w3L3L1vApBo2Zer356F9gMUc4PJkqsQ6mfvFm8eBt2uRJQ",
  "key38": "4nahfjabcvjLJkLkhTRBGFXHevNhfYiCAQTG2RRxzruxBgx65UBTWJ38jPKrntm38HNopJYNU3q6QfGcKCLLzCmc",
  "key39": "3jgQnfZHB1NgLzj1x2RsSNVEUHM1TwfnmJR4fk6FMcBSGHzAPct6Y5bZtAKowk14BQaDBQgJfRfQf3hTN6bSpzFe",
  "key40": "5FaK76mJ6mfszdZcCvVZZqAFgc461Ewct8wn6jHwVAfyTe52rsgECBDA9a6xo4KcsNZKXgffyajTo2kUYzHh7A7r"
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
