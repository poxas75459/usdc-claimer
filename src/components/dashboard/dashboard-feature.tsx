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
    "3ZyPiGLy4CE1iHuR3xybDYNr1TH8UNcvgJSZWHWFGuN8aUfpDHng5teC2q68PK4AeG6jvvi9NUcG73TFzsi8nKr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NYrh3gpPmSvKKAQErkUvR8wwt6dnaKzdFgNApsTLQCsTYnewY5X7VoPnen2tyB8UdV49UTz5oMiMHqSL48FEDkj",
  "key1": "4sYaG8me87yced7m2dNVJLdR8DUh7znjxnkucbwsFrFKSLrWiQwfqWFGFN9UU9ZMcJKd4ecvN72TRZqzWiK3ARTY",
  "key2": "3KboDW3ac44SAUKr7tCBhy8DqVQzbNEb1rwZmHD7Pro1CmhC7HPHaCFHVpdjkcKiKH3ZJn5GwdHQ4Dr5dSeH8pyq",
  "key3": "5rE2SNLKgZxvjHkmeFVqJyPR3GTsA37bbCK5gPUCQ7RtEg8BD6W32dNFUPQjL96GSTQfSf94e46D3HXGsE5ywtob",
  "key4": "3WRsj1id7qaDtdj7HhkmRqx2F5LJpGE3HpWCTFiQWfiv5qJH7xbwaQm1J8vNEDpwVciNwLoU4VyACXoMafaoPyDH",
  "key5": "2HYd6piwwJaBk7NTLpuxdiRv9oXUjaveC82V5yLSFUmk31vX1i3Jf7qHo7ADfMRyHai9Aewcfot35rfyHJrKKx8T",
  "key6": "2zAjBG3WtMXvCETc5YimKRYqUeQmyFnUcr9ytxjBsGr2ngty26Eq1eJG8meAeB6C75aehTXvbwmMqnbTjoCCuZe6",
  "key7": "5cg6vn7iK2YxfnPLfcsfakEnFRsLrB2P5wWZ8epuUoiCog5rYWT9aLKm3Vh1CzKbeWTct5dpijroPMFcKEBeFAqo",
  "key8": "i4BP6NUBJ8YNuh4eSGUyS93bbGqZTzFPLvJaT5QpZw5A4ifYsqz6rV3B5HF1ZE1cCYYJqLqubR3zZgo8tWL8MUx",
  "key9": "21cipmTo4NmmR1btebTVTYmc5oAWrEPupgEJtiRSDb1Rvkq9bPrYs9oe5PisWCnLPWYnmtBdB11ksbyzMNmwj2Lm",
  "key10": "4NYscmrzj2Bi5JFyQAV1dX8G9RsbUar38aYcLeoidNgXbh8bMMGKvrmyeJwqTLu4ijegdZtPeQNTt1jfLjzgDDad",
  "key11": "4sMj75mDKymAhc7hFF1bmtZHVNbAAyX69cPToWu49ViRP7hDxBTvygQ1RbE2FC1ru1pmGCht8Zk8cEArqZZNXsJk",
  "key12": "2xDvHUPeRR5Jk2RWnxH1RKxqFL2wt1ru8PTcHAptcC3PsRCzm6cyRKcospmGFMmep1mYpomiPzXD7goBeddzRbBW",
  "key13": "1aDg63VuDDy9VZKYyWXH11sQmv3FFgGNK5LZLWWUHDBPSUhMbE61dXHQprREqm5RAewZkknFmrDK2nRk1byAhPU",
  "key14": "2qerufp9HYxMPa2E5RhYkYdaiE3bFBjisRgUbqwTzHeQZY7GEV3VaoEoyoG6EqcuAEsSQ3vQSfYf2Jy32yqd291M",
  "key15": "RbBvFsr7BdJBpnPF5TKo7CB5cNQQQsCm5EDpnz4JVmxfafJxfEW8Lk1jPNoPpDh9uvX7mx5Ao9jK6CQ1ataq11q",
  "key16": "3Dc9WQ8doZxfLkw9JdQisu8HjxfZDbv8Uo6kvvmsd2acHspVYk2TsLzBqpeVE47LnH7CvbmbPjGHLvoioCSZ1nE9",
  "key17": "29et9TptNuautUwLznKvuzUCMSrYjUVN9eSFyg8mjr1EUpeh8DCLzLS52TSp6Qc8pHAyBtxXkmkivKJ6hzJZh4kz",
  "key18": "nR722YqajHZmBdJudCotG7HX8ZT5qMUEuV7sZxaZDhsEF1Tv8w3u3DSfHb6DnVPLyBasowjc1FyqQyAf6NNNFn2",
  "key19": "5z6AghQfeYyRc27r8UtEH6qM7qXukeqF5qWpouoS1iGYJNV9oFQGN5yV8VAH3Gmnye7pycgM4sCQEKJHhd22mSMG",
  "key20": "3AThmnjCGMzFHuoFpAfRp8XjtQqmtDCRMYwRNHcjiTyW2fEzWU6cBrcr9HiM8mX2JUAdxaDxhjGnRNfNDT8X6Qyx",
  "key21": "V8LiBgWzJyoTNKSp11siqPe47ygE5xCtqrip8PnxP8ttpa2QhXhQNfythtJtzJR7SicKkB2EkKXkTQ8nLvMu2jq",
  "key22": "5VgumT2jmF56xwDjWDrmjRRHFCNNv3eduzmV7fqL7aBxrNV1FE41mveVHr7nnKEjjXvCLKRqAC6s61u7PECGhvg8",
  "key23": "5RVaYfaf9wd5ZgA9T1tV4hsQuGXG9zefSRPL28kBrRWKM7BBEUPBbZDjEZzByjqXrAptcwCxhpZhaKWHwJhRW89B",
  "key24": "5TQkZeH2Yr184xwqRXCat5KUn16RVsQWWVofovhYcfz55MjppZ7RLeHHXJDx36Ct4yZFh3E5KqQRKevLSUzWQ8PU",
  "key25": "4s7us9ZAB9hPNv8yRhSAb5p4vt8N4UZLtzqVc1RSZkRBpDwjm6PSLEdEMUnAp6aHURCf99FieaevZQ2Rd8JiYcTd",
  "key26": "25XC3VpvLwjSo26bY1DugwMDQ2PttHi2L82jsad7uhA66tvX3prpsbKHZiEu2MP76E3a4sJyooAEqTir7fara3nc",
  "key27": "2hh1RvTY7jHuoxvQPha9kKLS8meFGeMeVHo2J8gcM1BYSo23enKGhaGUnfqMhG36EjJmEK8Pny4CnAm7nyjbGSAo",
  "key28": "3jcgSrBCjWmfMYpCsF3MLsuEencwuPfGTR3q1Awt5bD8TN9NM3Aa32gjz1zKabJmmcPLWHFBuXgRFTyEEiYfGu2J",
  "key29": "2yQm5kXbWyDzTGFVvMp1htoeRjWYg9pH9npkcJ5oPKdYuk7dcQgnQysWqDrFqWXP17CJswyQY92K7kLqomMuCNMP",
  "key30": "voFnwr8BFJHLP1Zb3DkN4cmumB1Zbi1N3XYrqtKH4mTZVGJu8GW1v2g7nB1ad2EpyacLEDyPQvLy41TSrvVw82r",
  "key31": "2QE8Byp3wAhZZpw1tRTZxwfAmoTFB5bh4YbiSS3BqpPR9SXp4ELRGdgxcZxnUFGXKfriZkhJqd6iqqCz7Datyw9h"
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
