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
    "i1LBb5AUiCofXXmeFYxx5g5iZMxc5oUUo21MW4oc83fZadXXb1U7bwXwY4nqDh9BFFkMPjpge5n7zTQhmetncAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YvePELd88wPhc7tqTzvB53UYwATbVEV5CBj3gBMemTPf31m6gZn8kfFNpMUUYnMHb4f1fuHuNWAxuvu2tMwMARd",
  "key1": "544fQFxoQo1P5Vzni9AUWZ52URDrnp6GhHxAoK3mhUqqn7KapEvnELGwmLW45nkLL7n39Bxczefuigbd3KsAGFS3",
  "key2": "4vDxL3MvGFcnxUg9CNbz3C64Q5Xj33LQtcacpnn7xduJguWmzZs6mwgPcpSKfUviM9No3LmEPsyovKzxCBpPrDUJ",
  "key3": "5ipqJrt6pomoZbejW4Wid3DrEaVAwBCMEhKHy52ojyzVJytLkBhCPZjLDRbb7JZqhP1w2Mgd7QVCQk2bbYM1cJBo",
  "key4": "4rcoxovRgB1SUVVgS362F2oyzGRd7LHd5XV6WwQ2XK6Wkq4dWGVJYn5r8zv2sZqTLzyZd6p6qhcZ5iHZncjG2kxj",
  "key5": "3kJyzcFATyWVuV7R62z6nHFfYVKUwYV86yWVHfkzG6MeLDeUYoPaDXPxeXZZn2sYa3GMz2sbRCXiknpjMhZvs4QL",
  "key6": "2RJrmSJsJrsEzJdnPpSvqMSVtrchk8pT5SpgeqaokSYVS28gAWdvrcENH9iRugXHq6QTFaRQCTDtpYzk9vysTzg",
  "key7": "2fqwxAvLSQxwPUUzu9MhxWrCoDyasdsRs1B7UkFbA5GeBfYxnMnAnbHwwHamUe9c952EuiJ1mdPE7mtm55xPSu2U",
  "key8": "sHvmNseiTEeEssrBC6GTtxyFMsv2dLXjfKKCttxsJRjnqr3GSbzA6uYSxHtCwiFVUJy8jo4Z5wa9yjVLz5u6wuT",
  "key9": "3hmUeRUFoquKjyVDmQrSZbFrq39EKuY4ZPFfiSdA7CPNG3wZ36TmrRXPGCz1kd7DE5pNF8UYkipvLcX9fFnkgiSB",
  "key10": "bWY5gnoYJWafpKCWj2NeLpB3ng8unv5UTz2qzTnQnqpiBqb88AdPgSq7MA1Kf1VDzARxL3Z3uTdDmVq9XXmNhSi",
  "key11": "4ucj9jqzV9mM4Y23upyj9PGsuNzJZHXZFwcF8TCQcMUVJTzfnK9QK52vhbvHxMT2vRcHL2hbEXEzq2yEQvdQSrgN",
  "key12": "5G7ENgdUSH2SDv9TShPwguV3YS4JLeEJeHdV4YrvGPzZsmGm1jzB6nM2fkFSZUZEo3oKLRiGMTmci5UkkiTsvGsP",
  "key13": "4uqJukYKaZWjZvP1pKN76jL2L4MitMTQ1sGuus3mYpLGwTTS6NuXGM8C1x1bHjEPWZxXayFZrt6884MBo2KvG5sF",
  "key14": "8pwzL5eui7DgSnec3EDaxVd9atoCXDeq2jY8KrTkX6pNawGhuLsqrTKVFMvJxvjomexvX29sLbnicQGNQioHp9E",
  "key15": "pPkeGGHfkwZWMUU4jnj6Xd5SMgePv21R3ZCbZjoiGYPRwFVes4Ww7jgPsMw4a9PvV2qRLZpa68JNj1MWC2rLGBd",
  "key16": "66uCwd1qDZ93wWVL3NPgoqdqpx1qQo1719dBmDuGTr4PBRyXLUZ8wpX7wdrsU6JefMqQKWoJXVwY97FJhQGZqAWY",
  "key17": "5WSr6EnMD7WuhhXjnauwHtb8AmCUcki7q7j5gBRDLypTSGufcQJoQwFkmAPBUXxSyjSVbZUrLNfv7SgmqwGuhkeF",
  "key18": "24Fb4wYWpdcLSZQoa62PiGQtGiXx1e4BhrT6HobBFmvhEuUrrz6xgJk99DFGFrRddFSoEBboyFTdGq8mT1Tx6NKn",
  "key19": "2kU5fvZprProZwZZyZJPsKAMJVuH84RMr7n4MmiAKV5nTy629P2XzzAwyu93MgyQx1jUW7Uvn2qCbUC7G4sFZw6F",
  "key20": "4enpXdJXSWAsKx2GfmiPUPZWaZTkiXXBeDXE48E4GHY7TRQ6MsN4u28qKTedu5BqQwu8NMv93TKwkT73GCjYrVXa",
  "key21": "55om9ZMJi1wt9doGwAAWLfonoadEGSaWmuKCCym3bZXcwAQiFsFvHu18Apk2cj5JNDYRpz5BSnjcK8m95ZbLaMze",
  "key22": "3rhZZPmQerinYnPdMB5ShiCyQ2QrVP3Noxe3B2cb6ZircHJ5wRuZ5atMvREDtHxT7ca86AZV6ezwu5St1HEAZbaV",
  "key23": "Tv8Rv1TZH29NgmwriR6Dwzz8rxXHCNU9gSfWCUrdGFmCrmAumY4943HNmDx985yBQ6ZiBpZC67TSf3juMxMeohJ",
  "key24": "2vD2aDvPjqyT2ZJmwzpMNqZJbn14vWy1Zmhq2CyyF9quVfRJjk8Mdf3RCkh5oSMQnn7gaCTW1uak7iALifCUoCSr",
  "key25": "2qfyVwbgVcLCRMZXTxeDVjAPPJ7ynKA5i7JQ6PjVabSW9cEt3PtFsQSxTZZSjU2XrEKhbykjFk673avQPkaLkHm8",
  "key26": "2BPpxsuFcDMdZ3Mo7SZJYkZ458GFU3JrAH9ywYwW1bRyGkiawJfuFgj74RDN47gsihH9JxYAR8qf1idmGrUVmrq",
  "key27": "4PzGgQrgiGxKftwam41VVCyXrtxHFeA3Ss6Lyb1Bub3p5hUf1BJikdmDYdTfiX3y8uNFcAACNxc6MGsrWxFwGRhG",
  "key28": "37Cs6i8RhzjRTTrd53hHAejSfMq94GQ9VhLvymusRQbBp9yPtNwW2VFkJCpcUynLLcWELsTndQcKh6mDKV9MjQf",
  "key29": "5GAH1RKwX9UaUkjkDGKNXaavdWr4epQdE3UKVwD8BUbqXAQMkkYmjCcvZ83fRj2HxrHmXMiZ2iq32dYsWezTC9zk"
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
