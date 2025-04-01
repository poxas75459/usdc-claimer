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
    "3rEVW9RR2AdKmSWFxGcaGdZdDE3W8v7RchjDMtKkp9V8kCmirEBi5Tvx9NTvFEiZnWYjFytAbrdpDTFyHEVae6Ks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DiFvE8gbifCNpwGNBUo14eWvfy4MU5jTQYKgujaRBL7WjKn2uwWwzstbR33wEZmXgE3vq2agf2ALncuCzZ9mXD6",
  "key1": "53YKMmXT7AXir2LZEfeeACUuWQF6TDjveuRg2b7KehrLxEpEgQ8jMzq7h471uL6JMyfAANgLzcKju8Y6o5zLxUyg",
  "key2": "3Jpbn6QogqVaAEpnyLiPqoVF6vYmPbWaF1qz66fkiRMrpw3ZdqJwitov3ewqoNXxDvVq2n3CYFUW5Wh86qzppJwD",
  "key3": "4zawmoMFfzUz6BLAWGBJMY79LaWPH2JxvbuRJhQ1nYHWsaZGXL5zn3RbnA6A6hvz6ZDNJQU42ch42ua1A1aqP711",
  "key4": "5AzB3xkJ9GNVn9ji3rL19UvCguujTzL1Qe62Wx8ahHtYG5hHTz4ij3zdchpx2cBbuPeB53RKASEZ4cmfeKF8F57T",
  "key5": "3XnJXrC5RcYnxEh4rQRUVkVdqkTsCtkLMuTapvMJHwgdEgHZ3uYRecEUnxysBRDegd381qXMgNHDQpQGv1AjuGAR",
  "key6": "4vtb1oSppkcZYTHcCDQB6fh3S2v69kQB9rmphreosm1xJ9a9ZBzoJWkfrx2xT2pCLb6XFxDP9QFb44FctFXE6Y1x",
  "key7": "5NdaRfZJu3i9sB3U2tTsvRddrdLdNdUXKyGjpXtMmnrbfWVNcMzKQL8JSCLZXoYMzj34XKdB5WSfUXvzgLpK4TSu",
  "key8": "65WwTGDZUA6PiUL1AcrRfgaYTXvBsr19byH2qUYs7Wo7ja6HzqCm2UhTsetU5VgbVvYuxynD7qYvngrjnH48JgPi",
  "key9": "59U1rJE8JA5dkeUym4rDDVTVqWh1urRj2LWXDabfvVwCJRrAsL5A9HfRAuDF9bH5aVSLU7rbkdXi4toFNrf6o7eb",
  "key10": "2tGhMRCnqqhSLUjV4PCPRded3EMBSiFBEL7nKTHVB6qsap9iAgKKrvhsTdjejB1mnASKTXprTiBRjG8bML8sFjJr",
  "key11": "2Bs1HrnP92oTU2LekeXGkZ6KcngZ4JsLM9qssxHdYq8VuLKEo4iMdLcdVMzcdrphtHDoThuV5Ga5L21r6vHfkDGk",
  "key12": "4pDA9WyQXhLFdNiGAcpWa5fCc97USc58uXMKdGVYpSH1ZGcBsAS8U6E6jDEjXc9Z6kLn1id8tWBaUix8AP2TTYuU",
  "key13": "5x7zuUPyxooAD3UVFjBvxX6fLcvMbR1MY7aDwKh9aAVbVr8en9ZhPR5b4NrNPpj6MAzNvDR8683oFKv1PssB2GwF",
  "key14": "PN1Yqiy525W1bKrxrwJ2WJaK5KeoBNxvgZTzUMUp4vR7E2yM9rggPYNp7z5Nfws8Hgsp5zrBpWeNarLe5yKWbYb",
  "key15": "tE9i7H1ke858CupiDRHFKKgo1WuKX3HtRYcHTYkqQLKG2ftDid1iwrpippZrxtobvmhA66ws7upMcZXS3hHxJhJ",
  "key16": "5PNEycS2dDGB16Pv6o9cv1gBHcdY6FtAahG4Wb1YmpAnRE2mPWxiQvUR7uc6iB7dDGwxmaobooE9uCJ9uBy48taa",
  "key17": "kXUwNXGXAvftbskxBUQ71Qgiv11kr9KypwAcWUFYbzqtfzYjEZWHSn6GsGk6wYJpWxaxw3xDcNTY27Uq7DTdr8U",
  "key18": "2NLhRYVNaXwQshw2WiBjiQoYEbZYnDjGdj21W4WirZQzJP1NXEh63ex7Ru12nwvpbqT7zGzWM4pyzVtBr9KF6i1Q",
  "key19": "5z21LPMhTvvhZ7YxgYzaEHKiAYkj4jGczJUH24bJfgy9GcnQUZcfTfeKqixdHrN6aMRb8ociFNKkNu7G2azdi3KF",
  "key20": "33xJyJSgs6os8qpVPnybiLE48hLA4x6cHVcG5MP9GsmZcmPQZshVL9qftLKvfKY5hPEU7J7mxfAxbCfnbNpB4TLT",
  "key21": "3JTb2wRxmAyxJAg2ibMQQG1QCyftD3BoQx3uEtXHmQ4wnw2vBio4ecBpVqVqo9WVSH3LZxU9qEDVs7H5ATZiQTKZ",
  "key22": "cJo2ALzRDJznaLeCjUdK3vgv34eDxTiSrCsMcSf9Ry4osaLkPEgVEEQsX5AC65WDQm7haFZcyQKKqk5ADX8YrVc",
  "key23": "3bkg5LkSpnEDnAJrCwGmXPLRRCSCzrEyT3T4WTT7HHBTwVBMGNM7PbguhNp964VPRskARoo6Z9Sp9z5vkj24xz3q",
  "key24": "4zo74EgGfCJ3Jjmk2yMBDXvVQFbsDMbHQbCtS8m5ptKL49Wiq9EH7e5uXBuVSYC1VMmmwLadiAW6LkQ3TmEJp6S9",
  "key25": "5Q4a9hTFkM8mSFhM3bk3Kz2D1q7mMXY8FtEazkRVfcsumKbZeG31ZdWKvYuS42CNavrGfXkZJ7UVwaCSHe1d3tjn",
  "key26": "2KyK8LbHmP1QvkX7qkGFq1KCw6bSFHQGuE82qMYXVXZvzm6of2NoFyq4ps5chAbWz821PnhcsLZ68mwzXapPNJkr",
  "key27": "2TcqNGR3vAT9RGxzYmcV7Ph4RJQmiZSrJJTL9bckpg3XdHYPFTP48CBcWCcDEG46or7FbSRB3vTN8ichuVQPPjo1",
  "key28": "2rYTLHXV4Gtd1qsKpphuiYWNBsmT1gCJ1jJTLRG8QbCvNG5WY2nT7s2rnsnnizj4jTi9prQysyz5zSX9kpea3i1k"
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
