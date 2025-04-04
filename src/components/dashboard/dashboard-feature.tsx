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
    "34iLLcsuQ8D4YJyCqVwodk5w9vsPyCvtNCsEk1CijzyM3aYPYjbQJ7dFYLprw9MvUDiUN5WXdbgUfufAZWsHcCVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hyDzK15WadDCaFQ1zzrkofzLnLqa2mN5WaMEjHdsVgvhDu6FKMhfWxJdSgP6YTf7DuwNG9C6jPCNn8DmFGvEns9",
  "key1": "5CzHTueykreB2FSMeMQ1qaqKh69eSmrR1rfJrJHFCWwDHMu4ve3HVLLfsmAXHAdUE7uEETHjFw3ZdnchexZ68U9m",
  "key2": "3i2NMNPHMcoWYu59X8PLwcECzyTGtQDh21HjXPKe9y4AEMHZFwP5YqgLM95H2vgExhb5JcGiQLKDhPeHjfHftBuR",
  "key3": "rYYTHrbb9KvQdXYRyrEKrgThduWgKdPz4dcVHTDZTuh3mNrsw81nrfSrohAWZoyr2iohph4A7aZpoSxdHkU363c",
  "key4": "67WSF6RxxPuW1audAPWS3sgagvfTuVdwvBKrwS37hihBfcdG6djgN2uvfYtKGfaPFC8JEUqEnPEgpfE378UcVV5p",
  "key5": "4Hzh9hrzzAe5ECCaZAyDSJ5AYuAXJFd3L6qhToRvUucMifDk6nZmAo4sB2xtKRbg81W6kkABpPXivRxBuHKepJhT",
  "key6": "3DumKd1gA7nL7RcD1RmpWeM1v2o8VLnZp5t11s7GrGZQ8ASD18cziJpDQ88BqViEVR3AvJyy7GE55sprTU9EGk39",
  "key7": "48Jd328RcUi7X9zamm48MLgLgx387KkAfLpg7Tybg4xRzmM4oCBzDugLUf3YMB5YTyoxQcKTd5UJrpQwn8yJMbm7",
  "key8": "89AEVWCJpKPRtptM3L6kh4B1VAijGuC7otG6ynNJZfML7SqFGoXA3FmZPcHnF2YZ7jL54RYmWnH7SNQyP7EPR1n",
  "key9": "2MRzLoB6U3RFPGJYs2DbcgNrKvYmMYPgSdMCArvRbZ4aeHQuLv6Rak3xsNRA8tHth9eaQPz5wwSUChrqhFoZBBi4",
  "key10": "2CyRfVFhgSv1VKU4f6i5TxYLJYMn4eF5KXA6o8mRYaZECfHrHUzDRJi4xF36hSDSPtaVtPjd6edvij6Pw1g9HyJ2",
  "key11": "F4YVNwgNpPoukG9PuqC5qb7Jd1DVyn4Afjewe3hDuGDS6iS1Zg8epK5DY7P3eKBJP8yjtezXfB97ZASY17PEaJZ",
  "key12": "2qg9p74LM8k5XDuRCoSptEDsb9G3EWydpNmrSnwiB5eF9WDG2Fgeud9TCrXmxCQoJgEWMa7UZhWmrMofgQ6EAskm",
  "key13": "3GyBXtCfoafAHvgi26RM2BcRCWzHo4y5oXJWxkbrU77R5wc5iNiWsK2gGh2wmQVSjdWa5eZwoEAY328CLgb5czYT",
  "key14": "57YPrwWyvssRhAQjkmqsaTa1GMuBhmX3sttaEjZKJsxCf3CYgvSfVAhmPdFmrAsxCV3RF6txfdcFuLBxpGn22Bfi",
  "key15": "2oKqd3q3cK1XW5P2tXb4ozNzKERFULMszHio8a14MkBh9HdSYyEuJWfu8vjFWhnHCVM2LDGdDKcswbfwPsAGQhu5",
  "key16": "2Azy8FGtpFPyK3h87qJXa8KVPK4CfHBidqLD8CVirSwgyth99vuTMyykFF3bY7fG1YWfsrso9Ny36y35dWM9sn2x",
  "key17": "5Tjqm7jRa1jKBYMh6SC8dSk89i7PPhfnnWHvoj4NKdpPqxMxv5pYEQNJV9kUBpZABgjiSZGniannjW7oTiDxg5FZ",
  "key18": "2BeEFMfrwgi3Jpa15jP7VawCtP6uQVj4djKLzEb6GdyH6bPeBKBhtjtwuBCsMBfa9UYz99vQVywCCvJjzsQvUrhP",
  "key19": "bsb4kTyMx5sVDYQSgr9vgcFVP5Kk3fx1QrF46afNFzkPmFyp1guM4SuTcfJeKWcK8YfPczKyTzUg92VNPNhPd3m",
  "key20": "5MS6xHMXeFpGiZoPR2vWiVUKJDLbpZ3piYwZYb9GNWPm2WpEC6TXF77sFRiGoNgv3wWbYrJnsqddj6HAodYRFit2",
  "key21": "AeJGWMX85zN5RgMDVD1ituu91W2ySfnQPycYxNL2teaacLDG9KxifUJTR6taVHMpCbAyks5MLrcWsWumQnzpdsf",
  "key22": "3nikQoyvov6MBK2ALD5k1Sj7AYzi4ZG8A7eujHBY5W4gSYttmQevr6DzxAFKzMG4iRRxyM3qRYoJVpedG8wLvkYd",
  "key23": "63u77RsXRWGpFmnL3KYUPSESx16QS3LWZdsm6NhZrpCdPetB8k8P1JT4pxmz7s7NWXFf7pN3FiWGFB1bGqryWzkc",
  "key24": "4BuPBjV4WmFhwygVu599WE9AFJGXUVAyA2gvwbzxThbzwSputfmS1vuTZapzh7ryxJCqwb2Noj5FrYTLVSaA6c12",
  "key25": "4pbpp1tLhKkaqzMgpqQgyBDcyDy5pGZvDbYYMN8QNMVK3r3SmJEEYTP9ymf728Li7puxTYReLP2MUF4oCSgB5otC",
  "key26": "2ujbRjgSCimeZjvPf7ToHNdS9rf3Ms4wgNj2ySRzfit8YHVao9J8uqFizqyPmEN1LTrkNJtsCf4yQfJquCcoSFJZ",
  "key27": "4hEXqGhPtgYDFu9RKwRxNF6fgFHSb6riwBuSiYeWker7YZ8yxPvSqQp35JygA3a2RMBCox1C1Cr2CWoJrCCPULbY",
  "key28": "2NYaYSYNaRZydXgrqcAVT3n8zaVqjRP9AJuiWb33S58TtaGMJpnQ8K5NJQFFxZ6MVQiqULBpyhA2BjWeixqsR73B",
  "key29": "4BZgDvu1nrtS2MejiF4NUC2gZ6somEcaNUnGsoU3pM33tSiFELsfZ6XwCYFvDBXiUxb4BQwG5DDWKyTfdHFxysZu",
  "key30": "2no6t4xH985wXS1so9UkRmV2vABhu69h6fHP2eCMM5PRpTKDZjmCu3mRJNNra4nz4WpG7XMPFba93oSjzcUFTT7g",
  "key31": "35Q5fGN8CNEsh3zYrJrbj78gPETZJD8bX77Siz6pxRveQogMB2b1B9PyfRbBpyoHKgr5m1yBP2e6oxkwNjcBKxxj",
  "key32": "2rSmdgAC68sN2QZYyBXX9j4pWdiuKKGUxYW84iENwJeMmWwJ5GPLmCuYEEfku8bGZ6QpGccovgLS5e6efBtV9snt",
  "key33": "3W3xVRmVUyaygDJmRLPTyfu7RSzs3i5nTRUEfVp1Z1cahGMcyrm1cEQ3rccE4s2CPDubN1mB9bg1EEJE8SMtN1VU",
  "key34": "58wSiQeghFtrx61yvFyTBPMJgahvbcx3esmtjbJSwYp89mZ1dZGshdsBDJ33u8dgF2bArVYjWRCC61DzSCxwfw2G",
  "key35": "PRHUXnDg15r4VXQxa7bE3XDfEWBtsfEKkpN8J8sfF2zNJFbUCriYqQv8APpwiXdjffk1rpiWjEUJCT61maoLBqm",
  "key36": "2pwGqaYLCLA2BgtxptXPKLmA3FNWJMdq9SvwEuTXPsQEo1DXWFBHudLtFxfBRMbLHxTnwTCSXve1ZtTMyzRemWAm",
  "key37": "3oMbVfphrGZCRjkNSwaDeW5tjcJtGsm4RHoYJcg3Z5XvcTuYPTZFDSYzNWiSSHfw7RDaBhD3XLx1spty943iE28e",
  "key38": "419VmTNum8GrmKmARZgiavHeo42VUMNWCQ9jnRaU7uuNJchrFbUt4y2r8DXKkamP3DirAnbtAgVZ61oPcFn2N9P5",
  "key39": "5WAAicp2JJ5DZznkqiktcjj9zrgHqwLZSNCuLSCyUZrFMyfbVJqa5nYMRSYrPfpvrcgmTu63WRViuHLsDsEeGypM",
  "key40": "2haP1vEeSX346LD1P6PN6z6KHmAmtUv7Gn9g8mi39wYmpVTwCwtC5qdL4dWtXqJMjkNPdPbVVduJ4ACg3bP1zAB3",
  "key41": "sE9UTAi8544ZoWbcg5bGCGA58zZuMbWUZQa8MXSghtDe7xdk7cGY4KVkw72SxxmQsrk7qwDrVSRdvAEEtd4D5wG",
  "key42": "5e1MtfWzYJBYiwFJF661hULf1v5bXUgzcUEjqKwUaGMwAvqgNgKmaF9Mt39jw7B9xNbugarwbH8gL2gkNuURr2LQ",
  "key43": "4uwRA1HjBck1oWqnxj2zsMevUcFK7MVm8LSEsM5P2ioPUeVvTJXDobJ8zfNDnrRUzievhXCwLche3VbZApDCWUky"
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
