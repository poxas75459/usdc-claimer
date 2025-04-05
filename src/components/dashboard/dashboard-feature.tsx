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
    "3acn2VuLQ8LCb2ML6JF9SNcrenwJ34pEt5QHzqPHzz9NuCuNoHwYBeoaiTfA4YmZVf8Lr79gr2wKP8BsHBuu9NaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kqtgYJxBVZ2abxqdMThqz1jZCjGdgpPYVwaeAJxWqZrMJn7914EZVRn9R479CrP3UpReDEtGSQKuU3Pt5tiQb8R",
  "key1": "rRGekFr2CDvQgxaDDNbbfEi7LpUVSSTzdNj4VsyUfZ8coJzYpChp7HDCjDF1Sa1exvYmBtymm84rEf3x3hMWidy",
  "key2": "HDEYZER3MfFqed5bumkyWuEwNcQDjjrjqreXEcsUcE1NpDVd1dfrv1gG6h62tAVbhEy2rzc2Q6FK2mmybW7ghT2",
  "key3": "3LpP5TaqV44KmQiRijGDfnDghXPBTk8Jq1N6wgPuWDZzh7rVZzJzsaaAwsNSh69LSj7r7aJjXoG4iKzUGp69SsxV",
  "key4": "3rHgrXq2HnXXVhM15eM5ADH5959RHJd4XmzotgJukBa4rBZgVj6JcXhx3QTC9eKowKjgXngVbhQZH5UbAVxkcY2o",
  "key5": "417BLAwRTt1aj7SYi6T9aajtLtQDsbXWrd6vXBwrRQH3yLBvWoRRXViNzSJAH4oNN5ZptkNZmQDeUGuyoqRo31uG",
  "key6": "4j5iGYZ8MyZQRNPkbeugP3EFxDiuYPpr8drdWb9QxrkR1tskyErk72aNPYF4v38daPgtc4LXP4aE7pSq65jT68H4",
  "key7": "4rWh479Mu4n6j9DztMrwDsP8ik6Uuk8baMDcqMpCfuAAZpfoxA4LpBnyF21haXfcrTzXLniyv4o2kDCDbtNXKfvS",
  "key8": "2oactyipXrz1cYhWsvzV3qMQ2ULWFz4Qt1nuNtjq3iRpnmPHAg393gJk1RzG7KNY2qPor5K9Vwbk9Z4GHEJ5uQUR",
  "key9": "4FBXm1KqfRnQAJPC4Bx6bUeM7iRKWorXKM1x27nwT6ssyyScTkGJVX1pcdJ7iEsZw4CbWBth2i1HfNSqLPF7LTT",
  "key10": "G3M77nHu3FLUvTCB3qTpuoDmUAFm9VEBkUdme2VPkbAA8JMjWswiheBgTZQhQeV16R68ovpYKvq2Jsn4naKb14B",
  "key11": "45oBwrmAM8SNnvLLdAW7c2PFQkwAUgskN8JsaB9Sq9y1AMnn9Uhe3ztLb26FqditgL1j8zbXvkJjMpT5V3imGtnu",
  "key12": "3SLY127dHSN74XmVKTzYa32ZdfpdpMCcXJwbBMtE1Ld4P4wLx5HbGgNaTbxRHS943Gu2TQVyMgTbvVhp44qGGU5W",
  "key13": "319cFeXmyuTNkAj4nNe6XJAZnHhg9amwTaEwf1EU2TH5iqep9NvdCyw7C7tS5LGyMWiG8mRjStNNohM9S48FnJcM",
  "key14": "37pUBS6sNs4djRtfRR73CbhN3Ap19yBFv9fcBFKHWh6Bcyuzn8dyeRLwY4A1mT2toqo2bKHNWAyZfuN7ne8nNcWM",
  "key15": "54GUB6i9vZs9mFQGnNbrKgiZv1Q8xw6yTcNBRjncyUipfVcCFuqYQJJzDzrN6Zkzhd2jfiTBm8vJsva12Sr6CvMZ",
  "key16": "5vFuxfqEzpWasQ7DTjMyLvW8C6L9dvUNMqersPVhQpCcf2btNX6o7hrP9aHh3GUMfXh41qKz2ZiNHcut6m8t44ir",
  "key17": "2pwZc3RPr43PXZNcv7xnz53uwYKx8Saim4iSTwrCiUi32noybD7ZH2Z3qVeLAXg7zA6FZrZYs2j6PPAYSqvqkCMz",
  "key18": "5VVm4iSEa4iimsCFZiouxkSuVpR9uMN4gCK5K1CRADECWuJmzBkauxRRj9TyFb6Ae5b8vuoPowJ6fodmcxn3piSS",
  "key19": "3bcbXW3eeLx4LdF9BLb9SQH9HDdSnry42XRAHkRyhsazeJPmt5QtHtGZExadWzVJcR7AZokyfwqpap2vADRWQX3S",
  "key20": "2yhVYnMQjnPQDec7vtj98XV6iyw2cH59TKrWAgxGXx7ygdhCkGece4MU8CrTEz7o3kXEE3a4tAdy7tetA92Rh1fr",
  "key21": "4wCPTPj5ndv4hQJLBjb5KFeg8h27vh9zsFuT6pxGheCwk8qxksGQfHKxrbUfgnNATxKGBqaCKjg8VcqVvRn3orxw",
  "key22": "5a62yMYXcBG69ACv6uwqRhNa5fkKLjKTAhQWw99uXc6b5HtcSBU8R1eBRKNurgAiZcZoWwQgLphsuL6CspqtXyKd",
  "key23": "3gxgqGvdgMyPgcPUEsck55Hjr8G22UJSW296uMRX5DvJwYekbe9JwmSHgryeQbXJMSR9CYo5j3QiaNhwXnTDADMG",
  "key24": "5RWy2SZJk533rJqA6roz9368JQAfo93aBvPgcYGaujv3opvH4uznxKZcouMFdRzDuSeVBcjwDLsKFC9oVZFG1Krp",
  "key25": "53V9GLD9iQH4Ct3wadyuZ1Nv3Bfzp4chVqUtpLXiHUrnGU81Hi5bFqwf86mJsdo7aQY7woMBNZ4BU1FmmT18ay11",
  "key26": "2q8V2VFpX21EAMVTgP8i7AYSCm14n1szi9YM3X3vXt6Vg1UV2WKEpNaRMnCksi4DxsSuVgLStApbCvACaQ3Hv4r6",
  "key27": "53EmKXF7vY6464tLqLjWBw73LAZN1QEjaJetrq8ehbcML3S5449vze7ReRSnyNLVqegfKJuMxcb57TLFpkfGnFYZ"
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
