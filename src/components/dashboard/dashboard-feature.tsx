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
    "2aE3Us6j3DcKsChit6vUBBUVx7Z4wFYUD9AZXiNXtqSiWKtg8F6Np4nBAWqxj6wozv9FJ4xG1vmBo4EupW5VbNdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TriRnmo8c3bagVsUx51hyAJhTjz5zbHzavyWb92jEXv3xq5egVVFAaRThni5WB2vwrJqBd4J6ui8bixANUib6Jq",
  "key1": "567Ga1VrxvrNC1TJa6wbEvqRdJmtanZRAWLG5GgHS396Hbi5JcuxqvDRfqpbpEF7mx94e5Azg27qegtgaCj5RWFo",
  "key2": "2HWpqz28PH8jHUqS7gFwkfHcCkispKUfiYghBDELUnVLiLXaReCemvTvZ2Qa5LkjnWYNsKfRMcP4icVRG6Xtjab4",
  "key3": "2LcDumRDUecZNP86Tfe7myDpSzSZV4tgubFmxLVPb6yrDxFzo5LEQ6nS7nY3X5KaKLtrKuiVbanSFd2NvfeUHf8i",
  "key4": "2nRCZ84oRqXE639uRBpknUBYrPwMkQxKo6Wr2xHSbJkAX4ZhvmUPP9aa7G1cdu61EZECZbpV4J8C4fKRQjPeWsHv",
  "key5": "fcbKpf9yLeUZtZrPQfXjDCdid8kaoXXhgEZLUjUf68pQ6aWnxqX8T8De1K3Jj2uMhmos3p1Tu1GBu6vbJLWQsc3",
  "key6": "35fasbUYKLJUB8Rv1ghXzWPGcSiJqf4TeM5KRyLthTsBUqzuQCVbooa9BmimoVEKrSNGH2dpDs5zDVEaebYwNVL7",
  "key7": "3aUpseEfazpxrt1ae4PmEqMFrQEnu2magoyiheZwDbNUQ4P9ZhzCDqDF8hMq1KWjxxsKkL3ebmoRLyFYdvtSNHpm",
  "key8": "5eZpMZDMpAHeuWyDLwQFJDGq3hwoEWpqYk5XmHJ9ayW2cTEwhBGKMMhtEXdCEA52SNL1TuPD9DiipbK4tUAULiXv",
  "key9": "2k7KEUoFsTn8HxcdznwCZm8cSL8macd9KJ1TRgduPwWyLZ8o1mM5Zpk9r3FSZUTVzzK5mhgFSh4EgpRqbnvuLeA8",
  "key10": "5xnx7kHzNKyx6PJ11roSFskuwU7P8fmaXKFcK7h3hWKFHiv77QNCiLqFQaS5SRUG2ny2LwQdJgGZtXMutZYgDjDo",
  "key11": "3EXBZ7UobppkwLoxKh8GU3NmkbC9JtKSuakLveWvfoDLoZ4msMWMiEnpa1JG8NQ7k2GGKXTVMtS5btGospG8Ld14",
  "key12": "5CJPXjCkQyFLfH91cC5SiXnYtTWdotMGgPShZ4ixUtjx8YrDk7yzsP1Cwpavh2kMKGrneYBzPG9mZ9o66rXMYKSq",
  "key13": "3saW7PSs639PgNzahFLgWAXb3CyZJrsTwUoTWYGvzbLEqjXyZELouexQwVVp7TKoHdtJg532UdG46RjbuXRoaMsW",
  "key14": "5LmebPo1mKAvS6Q6paBgqyWZikNXkTwRCubcpp3zyEhtRDAHfvGMQKLqV41YSASSdTAGzb8t4vqCdruemJ5bbBT",
  "key15": "4FpBKimkVY68A7EFt1vUC6MxusmEYygym3A45bZpfGpjqhjeKbieqBSEu6RSatmJVtxnTyBywo6ztp8B46hjP7x7",
  "key16": "2vAqZAphDCspAxgZqwVoDk8ws9rxX6hRY7jnXa5uwndywXp8P6aQBTHa1fvHtj9ujBRFDzvsArN87mj18gMaULEu",
  "key17": "4PYbr8WhitbQjn9j26fwcTU22Ko6iUiTSwMtmRbTR196Ng94q7MpX1uqGAoyN1Xbt8LLhcFhnvt3FTQ9ovFUYNg9",
  "key18": "2GNUs44DW4dygLQijbBsohC57WyzA8CchWcjwvoVuhsXtCvWoaTn3krHGwAnsAyRUDG8PL1zUxL9VRep5q9n1JLn",
  "key19": "43FW3JphHr1LKoQToZrHvZTKZtrmXWUWMzkVfEAxKqCFw8YubK9NMWNUvsSsQSFddg4mXuBbokqaP4EdkZuLfvoq",
  "key20": "5XriCCp9JVWenHAqP6xz3LpHd7Lwe5Lg7jbd64WviNvKCvStupmxFEj7Tvb5GYxmAffD1UGJxvugqsCJoZS3phZZ",
  "key21": "2RL8tFQMEdvUjt7ksq89MtckG3LgWstrmNG4SBLTHs7Ykjzj7dJ3GmuSvgSoXxMgxVgKTR7E2ncpu9E63rjJQuoQ",
  "key22": "41XRdKgANMdWDJxJF3M9EEGxUUtkAPM6dGeqADJUHBFL6i3wPbMZgLRPAPxYgw2egdL1EHUbKvEhQWxZrLezvZt9",
  "key23": "msb3ZazvppBRhn19vTQrKTa7NQS5wFh4xq4yZ7qTNeT9URcsTMGCuyTxnauBpEEaXntP4mBkgzQfjH3e8iVWVxv",
  "key24": "3h32TgKvRjRveZ4WUqbeunLjJqEyPD4Y8sqn79H1yzPFsb3dg19WgFsFbVQ1JBrVuJ6pKU7BLyawthSHDupfxk3Q",
  "key25": "4TX4mCqDL5H6rrSHqK91EpQrBTiy6ptXJ3HA7fdfRspgtkXGCVcHWeGUHRsC2AtpBxrjquJcLbaHCsLwfXDzvZgE",
  "key26": "3x8baVxWr4V66xGdvuVXbjGo2mmSsQeYCvm51qtPzQy9u5u35X3RubCfocH2FrksHciatYSx19jx7VNCbgetQdjA",
  "key27": "58fAQcT8EErbRMX6wJBxDcZQLmZdDvjbgM5pG11BTqiS5nqU9AfX56k4ecXUGPVqLjSdghEfJmAu2J2hNfL2myMV",
  "key28": "3wLmZMapEs8T5QLqBEifgHrmdsji3cYs3mx12idCxRdKFdadymmetJmTf8e3vF5ZG3HUirmZ76pKn2GNrqVwKquM",
  "key29": "67ncYpniDfvty366rrxsbZDcPJAhmwdHWow4XtoQnB7UfthFQmG9cG5y33W1MtvWB7fYCoh4KrWvj4XszMeWN8ax",
  "key30": "59qtGTY9HgBLRt9SccAiSJQkMcLaXmx4EQn134uotWVasGajs7HRRUM1LJ8zyMQU3E56wRR5hKqEhsPk6SyNAUSJ",
  "key31": "38bQZV2MUJih4mQRhy4hrofPuUaCA9kCVAdLQKmhc52D2FPdRG1NUiVGLwUHBmENo87Vi5FqUE1pt31wiqu4r81z",
  "key32": "3X8oTGnFHxZX9KiUR2yWmvmeP1LVBcAJH5bi2MfBhJKgFn97sJGdxrEaAXmUcq8my2q7J2XpSZYqTEGyPvq53or5",
  "key33": "43zF1z94qT2iWjwwwKEG7MfmBKT5CwH7NRBFh6axCspeUniuSmfKTw31aNaN4k895VhEqK7SwntSMmQu6mTpqivo",
  "key34": "55yULFvELkqHrvuw2vRK2uvP3BYR7KhgysjfaEbfS77Xu1j1EJMpr5zRRVUkpbKNgxefWa7DMa4nuWJ6CGEXm7kX",
  "key35": "4HpUwbJtur9zdpifSQ1CpkQxyPEb2LGwLhDpLQaeVoYqgcuRususzLafMUSGTP9wqQiq6da1p6fqKpY4tgDWDgMs",
  "key36": "2bC1ZxcvPP1gkp7biifyqL1fjiSxhBEspeWmGMLmTkUyttYdDMBVYTd7WNRqVic3Y2Mf43PfQXQzr8P5aqttYiap"
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
