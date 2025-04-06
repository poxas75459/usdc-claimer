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
    "KAjE2mMQu5fmiAfuxrrDftPvVsdEf5nw7zec4UD4zzLeM6EsnaXex6SwpogV84CgrQmYh5yLtUCH44atit13ku4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ff2qFujy5Kwve5Z5a4NTXZ8qojfiLBcAHA8jt2sQVjBmaMCcSpaS5KKYFpDhDBgmFTh325BCbdcF5zKBGvAEnrh",
  "key1": "4Sq2zng4ksVFLXnR7X47PUPR7A284pY36pCaNgiXbLyugLiVf5MLGtxtrGUznGU8achWU9BbGkb6ZuparZDy3VBB",
  "key2": "2znUbuUR1LtzT9uPM3XuboVCu87dGpNB8s318Rw9W5f8gM1fApGwmamT3YaxkhzsaX7vGQ5TtsoSLqAgMSEfNXoD",
  "key3": "31ZAN5P6PKZ1jcwbiL3WjDzLHCaRe1SKB8UbnbvZqSpkKaLp77qSz3i4YP9aH5izsJ7guiJdDNFU5ecdFe3BZV5S",
  "key4": "2dUVty2gSpVEDLwHADDJkr2woVemtuRx6XELt8Qhv25FRa9P2vnBvaoxhitDhrY9aFNCopbFihn73bqzbifx7Bhx",
  "key5": "3V4Rj6bRWYCqLUgFB9bPjWsRpTMK9Eb9aCtjPD2Fee2B7CSXmhDoqdrCHdHRpqTYxTfnpYXWmhDJPdrq8Q38LwWR",
  "key6": "4fAovQXJUPWEbwUPQuZk8GrHFqpd2C8nBXYr3jAQMxj95Y4uVCm7d2vsvKYyt4WAH4NjAG5sYMXuWCmQWifacJxG",
  "key7": "3s6dn6PnHj25Y4zgxwdz9ZCAjGTdDMwbYEfj5tEm655SG4RLC7T2jizbmCqsGZSde89oxZPRgHEJRT1e4axkPmNT",
  "key8": "2SS6FyL1z6WPue5b5afTJJRUcQw99PBEcLpjLpkgbeQcmVWGG9MA7j9esabzNmfaeLyc32kqFWeurh7cCVa3CryM",
  "key9": "4WVxSbgxTvYxaospv93qMcfJ8efbYDy1mHyS8C8ddaQaHKqg3ezFBoCZvd4fgX69MaEjrgTzZGw2WdFQm4gjdgkZ",
  "key10": "3HpDQptdhHmssZFrpF5stFPHuvv2TXALL7YdNS17UVYbZRaXyyZQAk8QJ84MDQ69S4gY2ENc6TMn2YaTkJF4wbbm",
  "key11": "32NpFdmWH7iNRKhXfkjYecC57TppRTsPRJa4CagNQQMPnrNqfj8DidHNEvrpzUtjbfPgSx9kkYrCwhRyB8Wv1m2n",
  "key12": "3ufwmvjQ5JN7AoJCmc1e14GMWZovYnbLRaKdtGxuwA1th98fY4zcLiB2gRbShB1RpyYM5T3xdGWwZUskHrBizV2T",
  "key13": "3zexd6G125W1qBroKG1a1EPvvycnpHc84PuXWbF7eiB6FLxSijdzBJE3WWf2V4VCVEnzVkYDpKb7Liy76yPUCvXY",
  "key14": "2rcLm2fFTrSTNttvcj9G7kAhrq3dVN21ZzakbkhWnsCQuRMnnJpTGB89KDmSVBJvLh4Q7xAouNeTU4WGuhT7Jaw4",
  "key15": "5hJqbmt5fq6BHnjyiw3N6ampd7C2gKwbZBhfcKYcKMXvZKyRn1CvnmuZZ5Gh53EJvTWvbsJ3ronwHaE71oHQtSew",
  "key16": "47pqP72osnUEYy5MPTzHrS5ADjqaMWJpcuAjpGvQecyrQPqQweVuziX9Qf25QgFswxDr72HffaYBokkycGtu2cZE",
  "key17": "39mhtCxCiuuXatRRvCZfjD8UNRnfUK9K3uar1ALuoysSByrgV7rQ6bwddjYGuKdNuDxjBxAAaANPVhADLURbTBK4",
  "key18": "2BXncygMJPyV8VWmJiNGnoWFAyD2Nz8Wb8GwY7UMW6QVGv8q1iF1fQk5imZmGM3wEcqzWardrZmLehRw7sKPTcGx",
  "key19": "oqGCefCtyKfNo7hcaWnHen8JtzVk1xyWygWaVnSUTUdKSNhsNUf8K6WaAzjWQvgE2YxYiDdcfwy5dBcXqTEdSgP",
  "key20": "5rUsbAv7ySBTBtNrq8QQHHd7TYcdvNvPJNdM2JQixRFEAZJuzSKgv8eDAXEMUmSK8ywvhD2MBgkVVPWiBjyhFhjk",
  "key21": "6vfnBZvrpa8JtZk8BupuJj2S6gj5eZXtrQcdzrUaN99berLwYaVY3YnRfRNKynq8He2Xzbvqq6NFbsbAjpyTPZT",
  "key22": "53V4zfnQaJMG9DJ8CpBWowvWYnJT3yBaMATikLEwBTGc2hnxiNgeUqY6n4yNasECVmnXrrBemaaJHti7Nsrik7sV",
  "key23": "3MWip83Se746pFuNru6TYLgWJ1KSpVhdFtowhXKqPAxfbHoj9QqQuncMvuTjnogsRD86X6xWnkinqvk2JRXXyovW",
  "key24": "4aQw3UW6LEmox7KTxK7MwHhrh4XHZWdGyHBjeXb4X3zB4HHerFs3JaZgWtVCvnriYbH9BoC2VR8xgfyZFiGLioWZ",
  "key25": "5GFu1MsrUGDevHHvU9HsqFS5duBNByLVGiGjpwj9yUq9y3tajENQw3i9zAv8DqnF4TLgvPVoaZuZZtM6KJNaTFjP",
  "key26": "ayzrJoFsHgjhiKrNBntbhkMRcNBPQ4TLgaaLZUhizpVXN1h4b98vzUeid3LiMyJtwK7AY6pqMhpAUXSBSRdZjKE",
  "key27": "5zg1pdSjL2tAB4AcMvf8YzskRYb3PJY4sg3R6Vec1aaFunn5iuf9cZXUwEK2Sjk76DsY9RyJiArV9D34Xe7A2KFD",
  "key28": "4AKn9uGtKJX633FQutijg7f182618pZSfQBApLMNT9aweJ88DQkpMjFYNJLDCCMW47YxQbnJEo5SXE7dZniygnu6",
  "key29": "2Gk6MLTjtCH9EbkVFW37VqXXnBrGHtofS9SX4t5iPmDMioFFyAKVhNY773kXqiUbdapmjoQ7HxcwVnyhwg6WgwtG",
  "key30": "2yKGpW18pYPeqX3PXRHeqjy5sa3y9z8LravC21hJwCvHBX5rHRB8RKTYYYnHMrDNvbtEQTSKW4YTYqHjiytXPaQo"
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
