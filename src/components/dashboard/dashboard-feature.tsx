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
    "4p4JwAjCb73rqjRwWQGoY9oRSosth8XenZvpEccbwSdTnqMXAPmif96nsUC3dBcZgBhAgM2CNUzZGDGy4nj27u4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ag3gsQ41MHpsz1gCCLmucfKEb22dr86iCsHEXWUKpGEU48VJvjr14CRYwmb3s94Fogcjo6zThC3Qap4FiqXseFD",
  "key1": "3PWTT5ennC6VBrhb7wcJCEaVUEFqFdTjy5o1FNn6BHw7ewxgFE7XPQbc5uQamG2jKbikdRpDviBCfJHPndGhZbXP",
  "key2": "4vK7vot7VsNYvRdiJkmEYC8ZCdSjSMYk3whXZ8eEUKK79y1KJw9vjaP9GbCaR8NK3mwGz44obTZaW9PQCEVzEb1t",
  "key3": "toitG9EDpTDYrBdRRW4EJGyCpF1Ct5nSiAKcVnJDwzTqGYaa8gZbyPNMP4N4j2Ge2oXwn8dM9pqHU9moyUwjAcd",
  "key4": "mBtNe2odCNDfTGC6m6ypCoW7PWBtVHKQ2zgxxJ8pmUGz1AqNRueUjsZGDgkbsZbdLiEMMoEF7VWkmCE4m4DWFzn",
  "key5": "3EuQ7djSJ5zfcNu4rwykHDqTxLJRSXcdqWMBXLdxaLvD17RXotiTksHjuitED72ZPGQ38jWfrfSC5pcUS3R3gzdp",
  "key6": "uzsrsmSD6nqXn7qHgdtFCp8UTujx32VXRjsDnooZehxkeX7Z4e6Jrkq9vAfVB3jN5qQm9v6fDvhesBUppS5X1PB",
  "key7": "3jXvSHyeG9EzwaJrvRhtvZoDLaG5GPc5uDbCy4NpeyygbEMDdDzPaH1DKH7gaz6cB1YZXBdciUH94SJr2MvNe35V",
  "key8": "2n9XA6Q1DeoHndJvmzoEkPW9ZNtUePr44jHMDjDeufxfGSNoYn8S5CHPcye1hgRiVuUoLf3r8onqYW6zmHVZpq6U",
  "key9": "HxmE8tEbS6gPh7xcCeeXBUgvQZu7guQpgLiVCZ4TGRw5KtsbmLJoAXiSs51i2vd1XUDgkpVfwm6FM7gPqaQMysz",
  "key10": "2tY7AonMrhvBDHpAKqZ7WZuqAevJ6VeNd44tZNGuMPAK1t3KN4ZoGkXwYFSxgSFLSgKX5jkoKG22syzHmNfeQJQK",
  "key11": "wvfRAW5NQpMUe9X32jgkyarP8dH1bfh7uFFF1YDuZg3hkoD6uTDGCGf1hTJ26uz2c2Uu78wvmqvBf7TEyG4YVWz",
  "key12": "2DA9mfCyCHCZs1x2jBXmszNaMUWH8pmQm5FbeU98N26f1VmukxZJKaaqXtHjFc5WEEFcqjPi2GZxeeCvSiKVX8rg",
  "key13": "5FkUH19pojKPeA4YD7WnEgiBa7BcG5DitX8PPZiAQo2kX4emvyKwTcNMddVbRWRwr5m8Ned9oXSo9KUSouGgsDEv",
  "key14": "4hpsuFRGPLgAT6cVWXoUkAa4X3GvRUM6mHcNTXNvjGpVHXPANPL13MXQpRxdr3rVCeQ1Lq4E2piHui46jLsG9zCN",
  "key15": "2ZjXagQVRvEK3wXmvExePomqvoiwfnYeyrGERbMtpoEB84xrA6v92Mp9maUbgrut47CzTmLGtJDkJvLQRxEJdnHA",
  "key16": "2FBhexoaoyZLxtTTtGuwfMeTF1Hw5ackTHcrsRKDF6aqGene8zZkbwzCf6B8HykyE15kCWyMoqFDJqD1YwZb8kiP",
  "key17": "2NEuhkf28fLjZa1CX4meostEPHSbSGdXzE9ctETc5xXF8rzMxKhGsv9JCyaC7Pwb9DzqDnEUavr83m2LcMWeAERY",
  "key18": "2w4pyFwAPAAE2zqw8xphhGwG3rsDfXrGk4MrRj8yeZGPiFdeeQuKX9dQFvQrhHeymTh3ACeRUNeiEPGkJfBqYKVC",
  "key19": "2GDt2BzwCyThqKQwSzVYTZLYLGSbb44So6qvSjhpMuW5nGKDzazUo4Z6Qia3oQFA44po5hkDXsc76bvFJWZChtEo",
  "key20": "3SZ45sj3rJbjNTokT4m9QNg8MKXHP9jePTGc8eqVCy5Y9ahMFeVvp2sSreRcXkryA15P7jNCXpnEiFh8xcaFMCUB",
  "key21": "wSsnh8Twr8fKGM82B8zHb4uwaGsErL7SmtAVquM7mxgCg6hnanXnhYhVrsgVLCEuzNoATeQS3as2PEZ7mRkn3nJ",
  "key22": "Y6TEqre95wti7qowbpmcw3uJmg3fs6wVJWE26wkCPFicFjc4NVTfXjZmLwyWjmN9rMjyttk3xmomLJp5MamQwXJ",
  "key23": "4dg4qHnZSb3mxSD1uF9CQCXGAfAYACULjV1t5iXgc89joEjA9euL6CfcoVMXTzcsSuk1bubajMbTEsaHjMLwvCpZ",
  "key24": "qvR6c3hgGjzb2NDZ9z9PMWAZbEbe3xUnYB8HyrQ9KHQzhJ4bxNGnKwWuMaS1uUk4T71UkxMMcLddfowAtf3YpGB",
  "key25": "33z19o56LWnJCto6Yscku8NazQYrSjsfPdwSZgX7raXAzBthsgwdKLZ6RhzCVgHbSLQCJRmSkoJjZMfDX4pp869J",
  "key26": "4hQ3jSQLxM35MKxaGD7B8ZxfwPACou8ivyoHJMdQtK9uCx37piW77NWtVKTpH6zmKk2GgCCAPD9xV7BxqgK5RX7o",
  "key27": "4hvE4n2eRL1Ec2bBGJwrecsxXYqSikgAo3gq36ysneD1Zj4LXVkx2CDppKURJaefa5sTmscfKQ3qvtWUs8aDcHh4",
  "key28": "4dgcnNjiXkH8FacjM3cgpEqCtoPuCADzrJRo24U2mvvwVeSdtVXxpdnGUsHEL1rsaFGhyg1VkGDXFZk21BHT1bHF",
  "key29": "5GnDuNW1HPoCMtpXYxsJSz9XJyQCSfkSq1diED6JVVj43fF7CyURwGyDCADe9p6ywCmD45ouWPyjS1JQAU9pPGjE",
  "key30": "wSHXshrkGi5fdmWkuZ4wd6Ge7M7wi3a6y5wmmAhQJffmRSpCqWdKUmgPi8sffBWrugMRWMsek7STsyPWsxXMXws",
  "key31": "4ZHYnBNR42ZQ8tyyZdN8XBpse4azWj5EGWpRB7LXpes8xCJdG8hBL9oexmutb5qEiFem8w4U9t2NLiJWT5TxrBko",
  "key32": "4oFDkxw8ztcsuVnPZGaF5qMptxn6hjJkqEFPBwwdm7zJ7LcQkXgKLmydoi586ApZKvcJJPeh9mu3tf1WAyGtN5QE"
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
