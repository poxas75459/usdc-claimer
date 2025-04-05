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
    "h5WX2v9wV6nberFXBusJJgjxmN8ANZb1NJRMu8YYPREFhs3jCPv1RfSivkdJgyjZEuUhHrQn1pyhjUxtG1QdYYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wMEVZP4nm376Bjsyvncd1F6KACqhnY9Cvk3tskPpm8Hs4MvsRxYAgFjcQdpbUzwbC6VTuawiZKSoC4L7Rv7yuou",
  "key1": "48XoBk3cyD2Ns4rS68Lo9WJfbErCcBd62yNX4FxCkQtpdgQ6twRauoRVtYXGVfwSDEuhK4GHoS1v9qf3Soo3yimy",
  "key2": "3tFeZyJCqhFKt7ong6Wrp2v6iyEVqMgc66nPakr3SCc7xyfAgZyfxitLQrCEd6wVFZvWUP9rhAiT5BbuNkyGpFHx",
  "key3": "2UDsqdYMBCcs47XKRrgXXAea1eqg24AbLM1cVJueJ9bp7AYW1TJax8kqrZUoKSf1DM7HYtzNsW3LyNoX5WxUhsbW",
  "key4": "cRqT2wDMaKaQkPVKJfKarSUxBxqiatbZWqriKCQeo4qdv8YPx2RnA4BzMPcqz5hStDUHW1azR25jnA88rbR2h6e",
  "key5": "DTunbwRVgkp9oRCbommCfD325rxd6qE7q4pY6NFLhUStxqySUUQjsY9ehhQNPMNSoCsm2eoUFay4VNApz5EQqhi",
  "key6": "2DL45vvXNL74eZMxbMRSeei2hSBaF45YGdL5ZYfCLS1sxgyT1ieibxnEgWGom8ZMmrppgN4KZBXcuRmSuUnjEudS",
  "key7": "2qUQk3TD5Rny1P5Ly29RPDt7Xc4rWB43nwaCyNFRLsy6rMHPEYWbW9hXHg3d6yLk7akPbs1BVo6demc9dmbMoia7",
  "key8": "sSqUj2ndrJMJiY8kTeU4Ki4pUBTThn57VHRV21TNUxSPYLxr6QY6GoHCzFHQpYLGqf5LFKUdvQCRs69Jwn72MAp",
  "key9": "4a5EwiTUZUtHUeeH8ZM7WqP8kjwrR2W32VsAkuFNjR5JY3xj5yr2XGjgXizoYZSMFkcXV7EBU13xXmzXq4z75n6K",
  "key10": "zjcLazdBxPdPTnNQktNPXnm1vAm2UVoLqg7JUT7bkivyqUzfioHoJjTE2ngHFwTGRA96cgi3zCbjhDHdtRwaJX6",
  "key11": "4uU9e9mrimcduU96z76Nox9959dYTcbdY4gibsZA2oELVdGeHofYrny1dNdaHXRDrQyfp7cTyWumCdKNuGE81K2X",
  "key12": "4r13yVVjAZfNsoDTWMsPnFbiSjfs1ajqYkExVTcRYu6NqaWueeBh7stmaGS8BMxASJZ1kkmUAkghqT9KjWZDznbH",
  "key13": "3pijVYGEndveHoYSVf8jk96Jnk4gJDxbpdZixYA1XvCyVBavBtv2FQumCuqfYYVs1Ed48rS6Rq753hnxmpM9gZf1",
  "key14": "4wtajsyayRcpWJZPhaKbZpr6T2Mx86R4fA55yo1Z1XnKaAmveGfuKnYuk2yNZWzhsBNs5ESjoDv2Ps5UiYDS4kW3",
  "key15": "2Phg2oZwNn4BBMx7VHbRS3sVtJ3eo2aQD5joqowhvfob5R9qFrfCN1jBHRvZNWbFe1P9unmb8p91zFeyoY6LpTNR",
  "key16": "2CBisi1Bu26Rmo33UeSvTwbrYTW7JmRx2aavvvY9RQinyAPQ4NNjVUFMpe4nowcM21BohydCvb2jqitD6pJeYd4t",
  "key17": "4Y2W3FiKipAZZt22BgtJQG3jgpYWYBU44oru3irNk5qBPB337TN4bAHEQrjshY8QAkQhG28QGMN4RxmSwvzawV2c",
  "key18": "4Abe4CuuwLiMf5r9tHXrBTKcjkYZrXk7eiMyKme5YzFbwWRHchwREi9CRvxmtVB1viX58KtkrCmxueGzSL7kVsZn",
  "key19": "2UEt4W2urE6hg5E5xkayLU7bMuN7hjyg921J6jqafwQTs7Kg4saiFU1ojpEciyGXac4KViwTiq52Ppg1DUET88G6",
  "key20": "39zEQGZQ7TAgTwT6mLHHjhPC6oqTfQpNUYg2KWXmVGtDUxHjfUC1WV9v2uqMjP3EfxYXZwSg43LN1JpAnP9bULEe",
  "key21": "2bXfiKLgZEyeB4eYNv72UoUvfbdHupnHXZ8ZSJ3HrokaU3r8eeoR2iaRcukr4NAANXRDk1pjy8mDBZ7a4BWRVx8u",
  "key22": "5FXB1urbjJhjhAugsRZe1yWmKd5EaHnD5RAdzWDZyi45PtDQTXvG1E1ZfJRHDtqmS9YkmcpFGj9EKZVRfuMY7sBV",
  "key23": "2JanWD3Mj3h47qgAnkNmqUSYkoNAe71LyvGkthZK3t24h6wR48cFiqiqn7tftNj9uMeUrv4yjFSpQ4LCZSo8SZ9d",
  "key24": "6PEsAxSrCpGwxy23UpsjiXyPxVc9Yu2W813sjwNixqqSAbFsoRxEwYGrzr72duar6rJ9Uan9nq2MMSHkuwnWSsv",
  "key25": "cp1TxsEwvVHftEn8Pa9eJpdqJCpKBGbo3wFRvma4SL6pxpec1wG91BifJA1VEmf2zNJRx63pkZ82ugnwVjaW38d",
  "key26": "wNft4UAVCMpMC1LFngjmT5Gt5afkcopWzDMjXSCoosyTSWNuVD21dmXuABwMdThJCLLffEUW5PU4His4mj9qHmt",
  "key27": "65ecudAXKxddxneNYePwJeRwpCFSYAqbQekqJ8aPntREj5Y1PnJmHozqg4LGRqPbyxULU96koDuR9ptyS3UBv3fn",
  "key28": "4aZJRYxDP5uTsTMVwmtwGi5EkTWicK6bMiWvqYFDw5LVSxrJYuqLNFCTvG9ecmGFrWnc8m8RSCbkLQxo8mUSsNZM",
  "key29": "4Un2bGHERNQ1KAeAjipCs7ZqFahbHBxG9rEbjE384JmG4vByWBCRzPfZcYc4hTqYjb8gGupchMf8fCMbDnSypcit",
  "key30": "38FT2pPmAbsFbLcuWrBpgvY2oroMxz7BBTstMzv9yaYcW6BEHC4fQXEMHhb7Dycusin4zhbo2t3byfxTaE46gTBT",
  "key31": "3J4gy2ahDRzuaVUi5NBZSsfMVZxiNVuypHSnfhYNPLdNWUfKwGwj2doXUfTqikQkHTTqffqE8MJNcqC24sR9SDfb",
  "key32": "63wvtn1wdHxRqMNiJTFBRcF9TatTPZwTC3ZJyppUneFzbtGnYWvvPHjVpApgDBJo9gMgyKbovbTNKBea6ypcRcbc"
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
