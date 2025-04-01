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
    "4HdyYicWTC1QQYX6KDhysTq8m5RjqBSrmhz7vAsEvT23wACDhgSHY6fHmnvwQPgmJV34FoDsebQYtuvKVwcUnGHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EuU5EuM4DieV6n5Ef3n27rn2HJYAhqRowL6RyrLr2RqXiL7oKsaxiay9hv4omv3yUkETL4UbdyDg4qVarJfM2rS",
  "key1": "2pZxeUrgjaKjQh2nAsrShFDxSNvLHYAc5YmtSApJHXQx7A3cEz771ptocpdpSTeKsdu5QTuYLs5n5TUkvAmH3uYh",
  "key2": "671NjMp9ywf7efLh2jx3kfpnvcAXzCHH16MPqyWUTjwe3Z8YSnPhtfY2vBrfuqhMaukh6cE8G2DAX9K29VRmYnkj",
  "key3": "zNscZKDU3UPR6LmWnyoasnn1Wc42ND5SuDAdind8qvF8gYsdoaFgbLafw6MTMpp52hniYnALuH6dmjmjKnPZUMz",
  "key4": "5AvBxE5gqCWpuEn6BvDo5ZoW8HaGxFim9KTnD9CKxXEoWNqhLhSRSZb12CXU4gnS4aGuyvLTLo8RTNNbo54abBQU",
  "key5": "5PaUJxEd8vegxaPomvDLvcWFT5XrNC55yjUZztK85zDLCnnxMZhPAiW1Ff5PhfXm7NTyffvHAdFeu2LCF6qJbsi2",
  "key6": "2CVcUL7QJguBgad8UsvzYMX2cammN43ZH5PCZnJd826oKHXT4sCW8HvskvdnsKsBXe16iZhZGW1SvHqjR9sMRkve",
  "key7": "2imNk5B2498AYg4eP4dTP8g5RCNrFtUAqgVgXsHNLQdD4Kr2YCXnpc5PgYiYjCvAtioKNDf5RB3TrFfqLg4c6KUy",
  "key8": "567JTJVnpAccCtjhWAy76ogc8onGUdGUcGFS1YidDz6YWzCJMk2GPt5sTSSJCD3uniKePG9T7e3RAarQg1gptyVP",
  "key9": "fgsf7jg9A9XMQMhkG4GdtWL8bh4tdzLxrEvHNNq3zip4rXJBqjbgprcjJKsxgnFVmwn93eMvo2xGZHTgc9s7c98",
  "key10": "2yp76Ahp1bMngEho9vgJZgRuPVZarPZ1T4GZw3pv4vhHy6KafvbdvbxkXejVtVP62sW2LurTA61JMFfpdeL9F6oN",
  "key11": "TWAn1oZAFxKQinh36Z8ECJQjTSgrXRJdHPwbNc88cmFRRU4pixMVgZuGzrcBhxuQeSLrVeMvodQqBY4hHpK1Ymt",
  "key12": "3Z9hAhXJdNBhtQJh4S1nxo5YRz2No7TM2kRbqPtStNLNWmDcpXHivrk7JuiZUwvVDzXB6J3oBaWs7DqzZjaJwR5b",
  "key13": "3esWnNZBBGVXFudp5fMMShKWbbpdtCxG7MmPdRFdAXc7LsP7JF1RF9SYTvtdmYxGXpcWB1ALEsHFrhxegr98Yy56",
  "key14": "2SMNe4BJnZB5WYZmCxpeAXXnAMUbcqwnERHJU1jt9GKg4Mrk2gqsaQppmM2Gx6b6csieMRbpsfAGBgxRiwH7srhR",
  "key15": "NgQ99vvEfAqYPhvavNjLjFFEDGieLg4qRBtyhxr2AXB7yQxcRTe6F2nJ9Asw4AHDa5woVTiHT7mUr8qZ7pg1S34",
  "key16": "3t5VFVWfpfGmNU8kMAMvvZPYB8si3WnEo8mafYURNAiVTyipoectbxwmg6SHXsbnoigPQCLjBkmANYeYtQjuWjjY",
  "key17": "AVom5p3y79En4ZE4BE4PkaMqaW9riqrvTC1wJ9aTGNqwgRLfboWSJfWC9JSE9kZfS2dAmkqgwHebgrNdv8V76oW",
  "key18": "pKzyNGqDprMhnW1fdx9PWna5VZGH9he6cxM4JcdvDmxGs7kjryThkXEigk7JZMRDNt9RJjEid7F7qKBMQsWxgRc",
  "key19": "3Re4eWJpu7G9koi2xNz6nNC1eoWH2zWVGXs98uWciSL6ryXzgSiQCiHN35HBY9zV7esBofKLPwT4eeUYTDfQCSSE",
  "key20": "3JSbNKSYMzcZNJGy5G9TjUvXT7NFW57stR9YquVbo5aKq4VAXPbVcfgx2zAcZ62n2xEV6SqsVFbjERNEZTf35C4E",
  "key21": "4ULkUitERcvXLhxtHAUEbZ7vsxdPztQAA2RDNhNbtD9QhWmAEsRrmCXLd1TgHvpiWHZ3XZTXPsnopLHgbsdA9BF2",
  "key22": "3gcVf3X2HQ79oz14VAaASJpm1bL54jmPhf3BCChDDuDNztKfwZ6cY2U46iccAmLwuFCtSK7VcobgW64RH2T1n22P",
  "key23": "4hgn9QK94URJKyEdQnA4ZSw7WyLiVz87pGRdP2cKrcvrPzuU4JJK6jJ6siKmgPi3hUR4afhC4UZsQFDnnnC1HKzt",
  "key24": "2fCDXVdGCaLW9rqeriRp2xvVH8FhS3EXcczoKyQ3vDGKdmDCQ7PATHxqSYdnQCXoKwH9CgvYCSDxQJKAtoGWXv7z",
  "key25": "2SMNGGjy84xHSK1v8M2zHBZWUmpLfyHdqzfXaCKH3MwFe7642RScVSjyai1b2CWDJmyJgkJN4murp2PG6jSpummR",
  "key26": "2YopQhXz8Zh9QoZ3C8Nu355ceeQctb7pDMgz4Aeo5iRLd3wHc78Vs5sRczjR1YgaSXvcvP5oJtQZufxFBkP4t3rg",
  "key27": "tg7Sm8PyAKEBSa3Dhz8Bt8hR6Fxj6aR9437jdNUy4eJaZm5fbyZtyQRR5u1NFn3SMjq6gHCN9d3yDrVvdZN1syt"
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
