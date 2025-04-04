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
    "2VrDRrrizuiJguRP6ELhzGS2KcpcvmQDB6o4ReaboxPgSMBYb5S2V7UMaLfHGVNBE5oB2Y6JQFKEVqCvSuPMPWfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sg2n89JJXvoi9gXYWV3ZGiCAPhsZMwW4qnWqCid5NkL3AaEPgZWNbwGV8AFDhLB8tPjySXkXwC3ruaXr4mrXfmS",
  "key1": "vmBwPBKXLpcwmGpsPMXChUYkcxHs9GqPoERERuWo1F664aw1ffcPsPHiZ5FmiNfEPC2xB5WaU6mEknzpCrwmLyZ",
  "key2": "3YCQBohoTZExhe69Vz416cdoUHwS8bsonZpw2dRG2hotNwgSW2vzZhVaffi7S8YUwPGUj1f8Wr22JDcbTHtDgK2R",
  "key3": "36v5pCBTZ7kwQN6gD71EvqFK5qGFFMP8Jqg7qj6eK4vz1bmqDQjwbXGCNn2kUsn8DFS4Xoxp8Y1pno3KMmBXhexY",
  "key4": "45gr12qoRTMmhJswPfqndzpfkUCYd5XUjiKEx8jiAxVEs2fgX2mMnquRnpMERQbARrnN9WC4S52sUYebFFmJJhUV",
  "key5": "3RUKEPhQAVekV5d1sbW96m4JQWnd13Z1KinpGLieNKmjHXK51K2RfFtMf5pD8LCLqo9WHHfeAEfqtJT1UcZ8Vxsa",
  "key6": "ZrzY53qHvTC6Mcxw6RrVm693kDJdsTZYFdjdCiG4bGU5cDHtouFXqN2eDuqJsXi2cKzZfJf6YfPhuFBtwvBRC3t",
  "key7": "23KBumk3LDvbsBGTXyaqp9ZPHFee1aMMwh9G3eM8HgL5dKmYK1QJVyqV7G5sZdijFjhLHUGSWVTc996D3X2ETs6H",
  "key8": "5h9MfceiGZq9AoKVcmGqubjXGDDjDi4pkJ1fHAGJ5MJwwAsfwQ8gT55rf256iPwDk9vuEsGvG7E1qcGuyzCbsFVw",
  "key9": "4bUYnGPssAaKWDibw8mwaRspkJkAy15W1BNwKWrL9LcSpJ8CVsKw9mBHQbb9pqcJJhDG3ceBazf4H482aMAKcN1M",
  "key10": "2My2fJcARWTo62u38Hg5Pa9asoiTrAAUbY6UnZdhQNXL28UWEdbQLv3bgdEM9gpR9G6JFeZtVEM24MZYcURiySWg",
  "key11": "5NqN2fC29QYP7V35Tq7eZ4Y9Mnn266GrVNLt6LxpKYv4dBB6C19HSRu3BCrxqnYcoLRdv3qhvxfTn9AfoPG5HMuo",
  "key12": "2XWTU7ftV4eEoAKVNfSKEE9K9ZSUdS5DP8ZBC9uY93icDbi55Ka5PrmdmRK36voRrQrmbTcH8YA6E4zd1wnYtfvx",
  "key13": "SMLSiX9dejWpWDmJeaXQpbvpYgz76mQx3rkMxpp6KhjdX2dJZVNUYc8YtKFKbCyZAUrVFzzF3ewToh4ZbHEgQp6",
  "key14": "33rSRam5TKa9N8uAY7abpVfJxZgNQ8JvPdxwP7EqDRfR6aBRXzUnZhuAwG1F8VsgpHQYEP4E1j1Ndz5JFhf8nG5r",
  "key15": "BcRyZQ3nw6nPejtXM7zFTRXLYqE5atZUTaRxc8CT6nRsn7RwDp1ggnfrAUPReFTZFq71ud6cwRQ6DcEZUm1QMwL",
  "key16": "RhJ225gTcL78jECC7AAF3k66fP5TSKBwxgkoDZnP31rUu3L2rwti6rtcfPE1Ff1r9shnZpmbPczE9A8NuGTpRps",
  "key17": "UyJQhJs6bMRx6gh2tAQuXrhJh1NtkeMUS41jdt6GLSgi7pFokTAFtzC3kuvv2zyBN8WqhCgmguvnQeFKWQthC7a",
  "key18": "2ZfKZZmLDkBuuzFcxQEbLzh2cqCfnnJ4SqjRMbyGV1XjXcARp1EW2Jvn6b2VM9kg24ckAcY4Lsj34cvmVsnUAjMw",
  "key19": "46dZxd8Q25eEwqxk3kdCgVpLE9GqucAD7vMXMrTEJD6B4jfb39swYTqsEiwA9Z1TbUAiUcNvUb7QMkZKfmZcWpco",
  "key20": "4i8RQpogghu2jRMrStoyPjbW6xPWEGNZ7hmTYAGv9EzYNCFvgd3K3sVSbLiH7FNySLN3nTkAiqjauyVr5HdbCLzZ",
  "key21": "5Jq1XKAyxu1rdmJi7rcB6mjHAdAqz5QGmtrotVCNqoKzA3HJ6SCFR6FDJBNvAPXbP2T5Sgf25GAWsVnLyqXj5gcy",
  "key22": "4mZvNyE8UTE8f4jVEPYVQoWchsvzJJJXb3Y3pfdvwFsZkBUNgkTK13g6EGLdxv73NohLoirNRLoydaJSFbHfQHtZ",
  "key23": "3SwRKdp8zSiDgneMkdZwp47SnxsHFFZ1b9Dwa2NcnqNRCHCKe6TQMKGMY2cMXNT8hAgWEXu1WFEQq7E4J57pyUvv",
  "key24": "Pj2yzZMvnKVT885gHmjzi4fbU2uamziiYVvcrs5M9RbA29Sa4atfV9d2marWbYAGbkizJZmFxgb8h8FYhqk4eYM",
  "key25": "5vpNTb58JSDYxTiNHowLNZxLmokvn5dAvpjZFDncZ3TCxxjgSf1bfBX1LRP16nmhJsH14DDRR8KmB6c6FVr1pWqQ",
  "key26": "2roKJR27B3LdPw4EUmRJGQjG1qzRvkZ6NHe8nsitqg5FyK73V5SvgVDLURzf3Hf4L3CaLQQ7DyCJBE2E1xY2iiPA"
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
