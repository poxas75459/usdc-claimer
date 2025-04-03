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
    "yZt86jcHeqZoBv7kfb46y9M5ts3ADogHophxWZwcQYQ53uUf6JY46CzzYeXXEheVBM6SJL2nMMKjT2RWzDiXesy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CmnLGCGwZip3K4xCJd6uAoH2y2NAfckGf8ysacgybRECBSYCT9pu9nYTQ2UqL9BVDoAPw3dqoibJNf1atgB5iGp",
  "key1": "4YVEJNVkaQbyxmjDFGj52totmqgwbngVyshB55e147dwpPkvd8yog343FGcLj4H1ym4Xz12REP2SnypNQEdFUMMU",
  "key2": "2uVggJoNNrWJ9VDqo8bV9qSNnNELfJgXiyq2aPXrqcjnx9Lg1dP1YbLzGDBoWcBrF3u4JsFRzRnjoEmQXLWkEjPX",
  "key3": "igj4zP2C5mwaW2WrWRD7LTHwGGBKN1wHZKDzFV4ePpkQJftzYPQHeTE1wb9j34zZRxDVwJQbo7zo354WekDBY7H",
  "key4": "5nUtG4Mdows6RJpKeLcQCoRAtPjjrsHQBCmZK5zLZJnqW87cafBeqzj6zTq9eZfFHEvZQTuJMph7twkui5ivyTPW",
  "key5": "3PkwmMiGo1d8Roee1jcHmapqM3nZAJQyhpGfzu3XdaDomK52nsvwVysAxo2zahZWvKwFd2PNbRPsiRPRiLaqzBdP",
  "key6": "519ohXkA9Ti1eA1RLSr4G9rxmQCWAX8f8TxRPvb6uphFo7dq2nCFBTj9YEYwmwYvAAG5FnF5QwPcbjCrmp94zX4u",
  "key7": "45PVDneViU6YM8QSdY18CoKjuefdnWax88KmHJHUbFU5HpgZS9RJhaMjL598GdjyBDUTLKLLehVzGjK8H3KffSjX",
  "key8": "64jNDdQvdtnnr9XUJbmEBYqwXYrZSp3VXJymraAsnoNusUsyEgkozZGgzKiUhWHrmrADMsj4oT6ANMfidH4RgZ5c",
  "key9": "5Bk1n1UgQbPxji7YbPqAjBwY5FjNswvLuy7n4G1aQivacdFxiwujs1PXcbMAjw7VfgkzaX3aFoJJsw3atqBsxTNm",
  "key10": "5dmECgwUBTnqitz2sRcJFzrZ4nVmY3euRyPs8jtLLwdFjLyGq4ax9jfHqeBidijGnPAxKCUbDYH3dhuACUaZiWA9",
  "key11": "3iEW42Z4bqnfhZcv2CnP26UspEFEfxV4mbwgJvCuXeFyrSsUPPrHd7aAbdo2ayJNwu78shCR1JtDN1id3qTF884k",
  "key12": "3XKUsjg5fDUEmRaV5zJvoH1N2ftHWkXfraXNbTaqYfp9NsarbM8sDjLha6W18Xzy9GPnMGEuEGszbin3An4RvJjv",
  "key13": "6WwLx5AAfxRL3GmHTqZfH2wnMq1FUKRMsinjn45Kmnk8JLHsiDUFfioms85RLLNupeCHfeFkDD4nnegf6H7Vgdf",
  "key14": "JN2gP12HZG7G9RejMAis2LcuAzTP8hB7hRaQ2Hw55HY2Grojq213jRxoSTGPXpg1Yxsitm5YF1jcMhwc1fjrY7t",
  "key15": "5kmr12hDveZT9WR6tyzNzrAAu9W8yf4ypCibn4SN6CMyFxccyqxiePKpBktd4BytkM6vGYbsFR39X1tBn2vAkLd9",
  "key16": "pSSxRsnFKpXRjWmkJY3sTYQpK4KiHEVSBwaczy3ZcWGkuAB2qRid7W2wo8TPTw6Kpz4V9t8MqRzGoGztKxN9HRv",
  "key17": "2mH2pzmM7T25LvUEKWL1tFFaiZAqPKjvCTHKvqZfYF3yJfbLE5aPvwmzDKcDQQdLZz9nTHhwV94mUTQoYX2Q3SuW",
  "key18": "5QL5eR874Rj2EQnDKRmNb1a1sTgkfBwTVWRYFfvPMedfNh4h6WKTqgyiDXo9v6iEH1daamMNbYbAMUFF7gMCMaPL",
  "key19": "2s7HaN36UoLekcKn8gfSPxrYrzwxAUUmNn9Xzin3YaGJEVX63cWDDvxTZsJWj2GK4cguReHysAEaVehQFEabaR6T",
  "key20": "2sdiFaYYGnv4Z1wEPGBshq5nVuMvp6iC4UnvtiMczUSei9a4sfebfkia3rnw618XEEh5UrjGqBksByH5SFDYy7Ts",
  "key21": "4m9hNia4Nds7a5SMkskB9P9xbxCPtFP8MGHRHk1cpZfSzMC2LqWesW4RP4ANjcFpHs1U3b3bzpKE7shG8D3v1sKj",
  "key22": "4HS6Vn58UosxqGy5CE1KSPkhomDhqdSrHeFyyUmWN1EBYmHhAW2H389p2sUchmtByPteA4rzPKrJpYGmevbRNtLV",
  "key23": "5LDqBPwcNktajxGtJZYAtKcCnypFWXKLUDEwPkGv6EAmDcwDok62tuxXGGKgj7wAcfJA3ELw6HQkC6KU8RYb9hVq",
  "key24": "3io93Gdvi1kMydf5ykfkH6omMa8TDN9cp9PLveAV2j22CEAxFAC7H2h13v6EFiVUR99hb3P5dvUGZ4c3R4FEGqTZ",
  "key25": "vnCm7ya3u9hTG8Ln3BSH9EV3qXg45xHAxYt3YJJ9Mz6tLppZYRyyFjrJbvc5mZ4tKDy9phFjxY6pu1vkz6fCQpn",
  "key26": "3kBqXpBir3KAJGEdJwoGT7NV2ThgRReqZ3j14t2AfpA5Vn2eDZuQV61dwdj2WvjhzDprRiU4XDvboVQHgrxrYWae",
  "key27": "31TNc8GEs6MVpFpu68fpqD3PniD4wQCJXJLR2RkMAyv5xJgyZY95FH9eTSCNSHxbpHS2Akh6MmB9u5Kj58o95xbx",
  "key28": "xyLEESpJE1NYJpThGMwuBeKtRCjejsuDhixDPah6wVzBjHHQyE6nopsdYgQQVFBBurxRYiL2jzyrGNXjgfUddj7",
  "key29": "2aH9f7FdAQH6uvdiBv4nWNWJoTM2KjUiPe84Aits7NxrUQ8NELZLzYqfqKpTDzaNMFTMJtCY4fnNbx6da2h5Fw9F",
  "key30": "4DoMMphbSoWuYLfSxKsv6MoynW5tEt3yGKZCu52UAQUdZTYqaZ26a4PAH4snq1yjpYYahLqi7WBLBeJDoiKAZUkj",
  "key31": "4rXgjShUAGnS8eDGci4qKwxdShjHPhE5xNvZdhDWPobAUAuzwTPhR9bgJB4hWU5a86cQmgkwoi85rtkCLdKDmHEm",
  "key32": "51ZwPUj8ZC9CT4fGHfevQ5otyt3nz8DkwhVLTWKtxqNBc77W2EqqQDQQJLuLNoaCQrkUu34EG3AQjw15EcFxdFdi",
  "key33": "24F5vENV4Q87kU9K29h5XkHB7VLQVDQHxaB1teMSvbec93BYM6VuNGviAyqdEKpZ5z5gxftQ8heD4YLJjrqvm4xi",
  "key34": "2Lq5bNLtrfg3F1z3n23AiPERsmJDoi4HuucKF7Kw9oWdjkYXApjbhRGqHTtMMzwkJajBYYcW7oFMeYMBeYHw2nUo",
  "key35": "qtPPbJ2ydQt7zFxovf6eNbuTgnP1XGnrBe9fnrVRqvoN7LNAm3WkzdrEeSybxGWbJnsiyHvR7dZWtGvvWHrKY4E",
  "key36": "3wv943ZKPYKFLdYSH4sDtQ6xpUfxQGhwQPpaR7dzirWaatKebebRwybhc8rxLXRozsnygzpbficEjr3BrGMDaLpb",
  "key37": "284STd46UHqaW7R44nJDRMKubdf4BgW1MSm9uqiJQ8sx1U6yenMNEGGebPFnnux5ECrJDW5sDKDyZq38JxAGYuaE",
  "key38": "42h3jMZGMNjz4czZiz6dcTGL9pr6PAZwp7jmZrTLv38dAgNiy9TwW5FRrEUV8PeXZYp7P95qDnCUCJnGzJVhSRKs"
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
