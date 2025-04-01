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
    "2J4ndbPHoY7PMRHZiPLUQii85HcB2QB7MqBkknQFxq6QR3oYR58qMESggZLM4wDSegRswmVHHB1j314LvyfScpHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mJB1WVjkpmbmmNjJDtGSNcHcNhWeUzugwDyUAB7NuhJF5kf4wdAq2GvSEhL18MtyLcjC1stV3KCauJzGrqrTaFk",
  "key1": "5eG1QubpWJTz3nzSPZcmvUoBrSF8MtzJGR8zPx3wqfUNawU1LSfHJkBJKnkqPaiqwapAoUNANgfMsBDjZXsZRGsz",
  "key2": "47WENGRJi9k9rM7nfXn5zYPZLQe87STrwsjm9AsJ6ZiHFJWDh6zdkKB7QKvAPh5WGVG2N6DjCvgrxbDRjfmxiJs5",
  "key3": "2QcYgUemr7rkxMc4gt1w6DrtZyKoBZc5WPswPPJzpVqEaueZaKEP1D3Zr4fHFLNXsVDULUsa6YYNVMNZifpASuN9",
  "key4": "2fAGtgTQrwBxibZ619NBfNR9S7J4P3qqMuXMkaEX65xPh1oxeEhEeVBe7Z23xLq2vM3eQict5QV7hTx3sf2rkkyy",
  "key5": "6mgaX3aidQaA6MGWJFY1g4LNx9mf79biZRGeX9LTeAzFV5zGNt6Tx73TLPLfZDwkqzLeMBUEWDjxZyreMfFe1fy",
  "key6": "SRTxbCDmuvbqi8JkKEYWZZ5q6KYQde6zftUbQxnWgezs6gwhNHFi9Dprk6bGnHYi9xRhDpjoL17a4TVWL8fWgoN",
  "key7": "wkBUcn7RTqv4UQG5Ds8PMq3rii2LtXTXJNGsoFKnTy5hpWgNBrjyA9Hyj7cXbxcy3zKEfTWkPvVUD4pH8KRKf73",
  "key8": "Qte9m34P1LzGJDDbumZBRcAR2db6LL32muraY1XyerBBaqWCvp1m78fhQrMEdeGtZNvqvE1pyUqbPxFosGBcuZq",
  "key9": "5CMuQhUcoaSDoBy8VLKap3jxRfDXHsfZ1E1J2D51sGw1mpVF2qsP9sxGcHN1AWfSghUGLW4iCY8uHE77C7fcTfUM",
  "key10": "4E3cFLSQMuTbJzaV5JJXVMtzjGK5NMf2EgNvpSrAvaZ2auxVEDY9mgrtCmWtGG63GFCpkp4cvY3TQGZyV33HbSb2",
  "key11": "pcqPUCCaUQYBHfTZVSKQbmSqLgoUhJmT9mdru6kqAT4nxduz22ee22wDL1Ar1jj5sdi3zLcWj3hTtcUt6xXyBCN",
  "key12": "4NGdVhxcxJW9AwMKQsXsozkJj8HoNj4J8aqTKtxBqaYbD9gBuWVJ94AfXorhv6BqkwYRxZFqF3kc4yEvANwgJfRz",
  "key13": "n7BK3XFCqadzGCUcNamzLiHzWk9ZwpWYbd82etcKzTK4SnGFiDwLxRxKppZKQm6SMwteVJEd9nTL2su6DBBMSHj",
  "key14": "GNMSSgq6VE6Es4cMDD8rqFXf56UWX6pzujazGRZ7Ct36Yyi4fbdgiUFn4v69RMSY2i517e9Lx1TzpDsezsnL2xd",
  "key15": "WqR2iiGfonirJ8ppqt4P9XKM9iBAPrJcRdzRNJKXuW4GtjaMC57uXeimB3MY9FhV9EBgVVA3w4vSnJMuFr5r4eh",
  "key16": "5veibsKQPL8kDrPRx6mB42N1oitDZj5MKS4hfrw5p6XotyFvtmFKucsorvTj9YgrhM8S1yKRzVoGqhegngK11mzn",
  "key17": "5MEEjTHcdJp2E5tMJwLktmRN2mTNnFT4uccH9bMQmt6RBK4ctyszvpeRXyDjCD8T6dBHGCQwesrkvYRnHkL5QaSA",
  "key18": "3Zrk7Hy23U6gTST1FgAyh3J3bi4Bgfkk3bVM4toYQ84EqZpkdf1AKMS4CLxWoDWvN96JhoY1wL9UL9Z44ijVgnaE",
  "key19": "3f4ua1sq22VFjprBcgbbjjjGf5n5NBx4scSbbcxjwbv7sDogjUw8okTzfH8ELuvDK4Aygie4jAX5WhfFc7Aoj4we",
  "key20": "D5yocD76qW7Nd6yfeL2f4NwB23BtSnkusTrjwHfQRhYFATE26TXAR6PyKewbEUmEhXjbRgqh7EwyZaSC2JtQ7bK",
  "key21": "3ZpybAsUaQKCpVnu1KxMN4Jo9JH4vH44Bi2AZD6adYVVuJFB4Nj6TgNH71tmUmXypscyHD3FofPL74VdhMPPd3uT",
  "key22": "3YF3PKkhggrURWuDNN2Hw5qP1vRtDCcfThkEx1Pi35WiEDbdHFQF8tpNyodimn74QQtmNbftVnQbrqCqmSwQyAzZ",
  "key23": "3XJXaT6LKWTSFkWrPmDfFeAe8fjWyuxfZ5syZsaBkDujRcFR4CK1tkv7Tmff25KTfUi3zkkrQnxKNkMo7GsPkwQk",
  "key24": "u36dxYLD6J9Y29rSxyt1Ew3BQwVpAf4VSqCmgGBFRoQNRX6BjdTPP4vmyiajvsXypzuPp42cm9zvo3wcMXa6j7d",
  "key25": "4pHZdhm6hxeMHHwqk99cYjJuWf1uhqiWCV4x9K8hTdAQnpz4yKBjUdVXJdBYWpjdyW9wV5dishHprekDusegeWUw",
  "key26": "ikXkpiekjwJ7CmMDMgttxCG1KebPbhoUiTT93GKVjx31TxLTsoHXVTNcsZkgCGHTo8P3pGaxDERkMQ9EtUH4qHr",
  "key27": "Qa5hZebxyv5s8DCLW7N71ALaiy1K6NG2tsyk6aKs66P7Kqw74871usmo6da8bzcfvKnT6jPNURUGpqjL34r6DQA",
  "key28": "3b35TLeggWN6wnnw2E1qGoHzBPugfbVzWGWvdNEvTug2nKeBYisfMHHw1eQMGbUAMgHPhTodP6c5dPky7QcAQMi1",
  "key29": "BTquqgDKzP4wrY8PreAGMTstQUcxFkMVQvqpsWk9iMoUmMjESe5x5AiKfGXPpGF1tpbdf2oCFBKWSuDSPbTsJwj",
  "key30": "465WnJrrYHsX1KYVjj4y3JoKAx2da526ML9JaGrKW33oE1oMdXvesoaJnJzt5b5Y9oUsykbm8nv34YmrfUjnFVPw",
  "key31": "5kZzZJn8G7ShXg5ou3couWRKqaHn8ohmU8YVpcSErHqCydsgQDX5Lt5E7iLDzNqY3H79c9YsUsUjtPKK2UZCLWkL",
  "key32": "5d7W8s9XF4xnRYibQgoQDCy1dT2ra2iAC66gyBDE8Nrq98ARURiFjjmYcb8VpMaaGyuSvj6ugFhjEbBBMcrWVwRs",
  "key33": "2ASQUkqzvD5trPbaCo2hodrmtdQjCguR7p3Pa9gHnWS3bUXLz6EbxToXdvny9iYGKY9zLY5veXapJjwvf12M5rEs",
  "key34": "2wbaAbvb3qWMuvCBridqpdfjpJiZkt49y4LubSuPpQDTL2N68cd2hjahvXygQZikNtjrsJbqiUqC5Gsv4R1kwx3k"
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
