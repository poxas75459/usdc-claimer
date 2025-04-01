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
    "46iZeWuZXJgnu5waLCKA3Mu8f4gnvWDMn5NBDMnX7QQxq6Umg42gTRxfEQA5yPZFuYRbfKCqpEdg67LxH1TJ1NNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iSsgcw5kG97NpkhiMf9Cr6pWNFnJQ9jR8MPo1qXEFQqTpePTzyxqYwdQbJNfEBGLNn7acc1G115mc4LXXYMoqaA",
  "key1": "4vNia3LNKvf4Pn77gJHbAyrwiKPZfqWr38zMuXkemsN4Q9tvPvExJiviN9HyUEmGnZ1XWVM27n9Uc3TKeBQiV9GP",
  "key2": "HJ2pFgikRJSwPunt7E8jj9Q3A4pQ1NmRRhsbUd2SejFysVng5tFi6YJd2BeKDDNMN6yqeLZxAtg9Wt3rBc831Sv",
  "key3": "5niu6CwPF135XRLXawZEuaLKZvRAy7NypD3NUdw2Z6W8bLtmwBcGh2APmWSsjoBWZKRzGuaAUmRHnAbqKJvuV8ar",
  "key4": "GZYVwPdTp11REuN23L5P3bDqBqL1uscBKSPz2EBfrNo5o4agcSJDmuCSpNyoxQUKU8QSBGB9TTBdLFDNbV9K3BC",
  "key5": "s4xyS5PcAjF82NPJwjeR6mS7UqZhhrunWkMrb9sn34aWA6wKSonv459z7852CTU1iPHL77HYHRr55hH7YEQtPEG",
  "key6": "jayhca1YnT5i13FExgwAfFS6snU6c3keEBAL8DkCt5JDzBKYgSMo7dv6H5Q7YthDPTWyMEKpEaCiMk8CJf6c4E1",
  "key7": "1HDeRFAFhHCywiRfwEzMMgBj7MRLwrc9prmFgzZdDyDBTjF9MK33UPm2o1e3N1Nn6CcwF5w5rRxBRap7Q4WMebp",
  "key8": "Xfde8xfStecA3AV5URmwsupqKXfCJhnRepfrXj9TAJMJxWTaHxwg55uixA3DyAqSFedevqXzsC48ECEtKCwSjex",
  "key9": "598WB66VAsyfAgE2i9XSMsQwnvjieVKGnz4Yeb3U9akVXymLGyeunY7Ef9WxEsXamaupzVhjxEfTghscWa5Bgc85",
  "key10": "4CmYGVsrKrgh6VGyXygYAVwNoydEXZk9ice7r6zStPL3qN2C4bBvh3NLdkBBQgHDHMvyCHPxDwU7VCWN6Fj3usa5",
  "key11": "2YGAJyL4vf7CoxkMLPBTgeznsoUhH2ogj4RwAW1sKxNLFNsbVhZHHYnpEbzBnPizwi59EeN9vRitm8Axs48awPzN",
  "key12": "5WE5aKGUxAz7X1Tey43NPZcScg95QjYg8sn4CDxZbC4ngcaKzUax1ztnaTzkhpDd64wHaY28v1MECSLw6cPQZku4",
  "key13": "3NZFEcZAkFK2w4m5gaZJ6B47pd7zgPd9RcstFp9r3xV6QfwKZ9WLxfo7skvM1PNnt3aySM1dg4D31ihRu3TmRWiM",
  "key14": "GgnHHBPLQUE5oQ6T1sp7rjtp88GMGNvRRdFuHdqqhEZxhg49gwbErwMEp7VbCnkdUcafBQgJ6mUyazKDBtZ1qi6",
  "key15": "59q86bUFc1XsJGk5Z2DVm2TWGzjaEsynJZpcs8mDouG1HJTY8JMM2N9vcdcpgh4xPLLiVoA4DLD74dLDyxPpX4Tk",
  "key16": "5xkD2msNwFc2oopkiXBfAf7NQh32f5is61hibviF8z6Tp1mwWERH8YimwEBrxS6JJ925tsN6wC8iKyW27VnAE8JP",
  "key17": "3iRuCprnmdYgMGAm2Db2AqkdDudtKtmFtWHAjWpMEbSmJGYFsniMuTkaQLmDcs3AetyjWMhbzCGCMhNg3nZtcG14",
  "key18": "N4r2UHsMu93NA4eM6cDuEy8e1ynGqv8wQYS4BoLShzz9rcWEKoVaHeWicnmx6HDdaasg8jHVbg66jzaDAQwnzwX",
  "key19": "26FX4XnB5Aif1sACWqE3PiNHdAmmyc5DKhgL6S4TgWkLh9wLLAfdXLdRGrH5Di9H4HUSLGDajqaQaRMmxUH9RRRH",
  "key20": "28qT6XnjGe3waHW4yXK6VXWjMUhgPC7HcJMrBE3YHVJq6nYiLqEX2kEpiTutL4xiK7up9WofKVNot5Kg9NZ6eGRk",
  "key21": "efSC4dj4MPEsFFhurZLjnWVf2sR8hKKpndgSQsnwrgNLMVzPySakvHo7sGDSYukNWVpgoaMySgRhpP5vJzEWRvz",
  "key22": "43FM4LhNUgJnkLebRKvTurzgHYCG7YHUoFt5TiuJvZNxwkrLAwSjHytmDWPy4QrdNTcG2QzTVNDYvVpU6sqyBZjv",
  "key23": "4YY4xqnTCzCoJkNUkpn67XRdfdi25PzhYxLiV6LPqzcuKTmKt1p7NBqkZkrscvqQEPbCbctnZj7BSPHXh67E7xPZ",
  "key24": "2wiyhPMu94yJWtoVuUiuZ6nLX9xZc7KNvfdrfXd2trZJLkJa6cxJPHfyMyrmYsvcNMXx96SNbC5o4JgdEpC9Ftxw",
  "key25": "N16QXCumcBGDMg3ozS5HCqYQ8B4nCSwDYhcGaGSuEQAhondTtPWLDyRRgmjmPp7CnswFZCJ29maQfGNwUMQ9Mwz",
  "key26": "3VnNj8T1ecZ7AM48svoNkeEmMU7na8K2pHqgRpk2U8c7gnp4nvAPbmRX2Z3DSwBR4SVV9esKaRWpdAsPpssktJjD",
  "key27": "3Ee5vUhWp4u3JZaNdtSaueQUMNfYVyLuj1WWnnCwRedSw5aevNhSdtGDypUcEsqAgiae7JMbxRMPUEHPSKveobCE",
  "key28": "4nJ1Ns64WjFfecyqCEGTWKGR3ncwHf93AaNUA4KE6CxGN9TmHhPjvMXsqf13Qbn5r3fXpuueeg4v73RdsLwrNznc",
  "key29": "2omgoaajuBMQTc7JPpi8mWcW8RrmvtAxdqZntUdXzoyLK3w4fL4m8SSgCDr8omJn5VMv2THZMTHaXHfgwFFmwvTP",
  "key30": "63FREdcjPVsytyvXuHTWTEp6aJh14b8ig7zNs4sh1tARXsXbuPyD3GMoTPkYohbw1C9eHD59awjXsgxdWdxqgVb9"
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
