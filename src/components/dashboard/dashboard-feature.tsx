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
    "4fj3a8H4pLFopnvADbLxwPcUAcxHcWsyMhLxEpWtqnVyBKF7cPotF2qZVn7xZU8ort1yezSezJWqjcaDjy3Gj1wA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hYkKdbWQNHb77tAresEnbH4ZedXDDFjdCiNYzBMo9YDQn2dT9ZFBPpW7TtXzjsRi6wsoR9hbR8PXzs73WUc2sAw",
  "key1": "5pSKrRkk6s4rPdLPLjSNachJ9tB7jDMT1NEQYRodJm5NkPWorCMw8ZFnNP8odLSXrfmsAYxL4yDgQtx4Je2wURvn",
  "key2": "3tfwFtd7ZgGyncd5XW4S7xcCbWbFr8qds5Z6Ynbg6MEKKrEEVyXavqZaPLZZ7XaYzWQ7NFngwWfDoyh6LtsX7ReR",
  "key3": "275zc5z82Sj4CqT8Dz8QYexaokUoLUdkox7qhWDc8QaaeWgYxQcUB4ircJLhuLfpy9eUDVorKQdRSwUuKEYQeZd1",
  "key4": "2QtDiWVmiaazuoZVY2z1BBAQA5bjPZHZ7ZrfmbfER2EmhC2cASNjvdy1wYoMEvcPH6JdC1JZ1fyD7EvGvp8nh91y",
  "key5": "48CtpLjrQnxRyaLUaJxmvhQFuRk5HWszAez1ZicpqJkCGR8VtfqPG8VV6v2mvMGgfBroAYVY7Z1T9AkcJkV8HiFr",
  "key6": "S1Tt3aE6m5hzpjjVmT1bVkTZK3bWqqWJ1zv9L6AaFNpH3cmFL47KbmwXcLz7rqicayiDiMR3qjCYsNRLK2u1b6g",
  "key7": "4srvThopvDP2bN2pTdrzKdRX6qwGqdTRg2rnoBJpHETweGAK2bMQ1Wb7AxZ5PLucjdpSNU8YwKumRCVPPXJsBBp2",
  "key8": "5V4ore7vT7GNR3yy9StCJdsbWss7oH9csdhiUhBkjxBbauQGZA8S6BZHZ5F8hZMzGGmnrunHc7S4nBhjRU73EagQ",
  "key9": "61aVsSc7TzHTmxjMeE3dNuvrsPxCeDo27BT54Jv1TaS9dkT5ncKmSc7R5DcHLBfM4yFoE2oWUMEfeaHSm3fauvV6",
  "key10": "3T3RgCbHwM83rfwC7GUMcftLgdjfnamPFHeaZvo4GG8D8xau8FRfS2GZeF4FAmVjHt3E1Rx6MrMWFTpMounaMwRp",
  "key11": "29UDLTGyjHKvPyE2XfYKdc2Tw1zFnwi8aTPofMVU2UWk7L2nVHF4WHaq2SqDAk1ynFZWmAgPiqGFovquqTBTm15R",
  "key12": "3QtKGZAr3xgKJ29k5ZMnYYUqkfAs2eNzVtv9xhQB2igPvELGAkiGzEUzYweiMVNC2q4N1VwStpUDbCPzv9wmErrV",
  "key13": "3sNWLixjA9JYs7s5JwopoznVsBeiS7mQ9swUcKX2eYt97HNcDtCDgefmrynCbqVr9RvP4BjMgqUDKPmQyUTWAVxP",
  "key14": "3fFCU9yTH2UEZJbmEmxyJXFGybhmDJ5nsxGQCALujpBSqudQdEBMx6v4rQ5vnqmbKfsTt6mzJL2mNPNyaABpwdL3",
  "key15": "67coGLdfzzatorq7iJfYD8N9nPJiEhKW5bBTCZHqRQyGfHeZKWy8NQZ5GnKA2r3QVhFTnAWjAHWVTtryRJitwNEe",
  "key16": "4ogrUMp36kcoToHgZtBnwhe7HknYnWP1xZoDkZupNgUkDUEzHetiYVbNkMUfrBLRL3kQcS7J1hVJ8PfMx4bxdWXT",
  "key17": "5AcJ96t5NtVtyu2mwdyDjAsPj4nFprNkUuHjQce8S7nZCYVE68AR88dwLbGECHAbgPzaGwPRDwPQwvnzzwgNGRR4",
  "key18": "3d2LX5CA2tMGrKbvti5dKKCWpcQ7f7UmfJk7syBuL7vB8viY9pHjcnDTGVdBHybBpncgQiXMQpiPxXepP7nzwv7M",
  "key19": "4BN7AVCkaYVUtRJf5MwoopQNC9KRdcQH2wMXyttVQX7LeVpG5c5QuuT84feAgHVDiZGkM55sWgcAnzcAf9CPbLWy",
  "key20": "2VSaRTHktpXFrv53JeEEyxBto9w3YktdqfexGSPkL1BdwGCvPqPobgcxfmejg1EabsF9HJDCmr8ERAicv6fbryGf",
  "key21": "2oX2fjXp4urmQ25ZMyL1QzoovLyEBCjdzHpeVmc2WfGKDfB4v6QqnSe8t6t5y5Dx1YDezsobb1NgWc2VSvKTMM8m",
  "key22": "3tuuB6rsY4JxvAEWzSEEvdwPMRPuT1rqKf2tFHbezBJsttRWNiYhyfV4JNmNTL2cLiXMtqCPQref6o3ZHXMWinaP",
  "key23": "u7da3itZb94we4jkaC3XMvw4vSseA2FFEK7JBDtF16JMxHbuaeZGxSNw6BwjP8C8Ww3wzaP3SmAKWXRaKCDFdK5",
  "key24": "sBGEQbczQSvnzXj8D4oAxKJ5wt9CExRc5VbtLfjypPB6pyb96uiCaTMCHRU5SzLvPRXTK1SBQYua6Z3QYD7Mis2",
  "key25": "rj8vN3LeWHTsiHnJfpimf21zocfwsDk6FAnShhyncsvkP7EuA9vTbzNhZA95DNpvC3Dt5uPqvG3p7wHfH5c6oEN",
  "key26": "4p3EnM4nCpNDyy4iqnJ7kfyQDNdP53CaEZ8vVTGEN8i87XucZwvvG3sGXVEgnL8CW9R3upLtKZaUtQQLqwp5NJNg",
  "key27": "4Nwc7PaySeJiZR4baHsaX1wJpijomp8h3zMeLdwMYk5XjmqyZtUeNqiKG4wntf3UQcvGAAooEYfU4mSoYp9qLvSu",
  "key28": "4bmQFWYY6NYy2pCVuagksH74KVGhtpVyf183JUR8pNXZd7SZpZChyxx3tfqMEycuz6MQUsJHseG8VH1U5mCH2ph3",
  "key29": "4hnEZDnHQ596eDEvyKKFeBS9LtF8u7PKTdSXZMZxAmHAN4uUM6hknpzQ5nRzio2rzDELxNo7FR4Wdt7oZYXZ9kK8",
  "key30": "3C8o2LVzePgLiF6V9Hq3mpzk3shrSXgBqDwNGH2LBUgLZ2noV2iUQGcSzZsjBy7QMm6yAY9c4bsGJTmcQoooqfzE",
  "key31": "xdAUMEamrG1d5bj6gitkYyt3KdrxytQcS35z4kkmgPn8JLomPy19PSmqKKAAWorPvvaLquuatezSuqZx4ukX3ET",
  "key32": "94fEcDmS55a9pwQtwocoCLn7WxwgL3bPYbf6PqMDmJKrUwKoQv5e19PWTVnsoqCTAVumkG5bD6RpH5SMjt2kXb1",
  "key33": "2X8di4H7rXCov4XghXQMzbxRuNTr1qAJe9yaf1MhcEZKojYnzZqgsmt5CWKiAbwnvDvdSGQjy3aG47LS3SweCNd9",
  "key34": "hNbjih98Tzx2xbnCLEuFXjDtao3qE7GkRJd7iy2v3qBdiJGifrWnkmF4GG63x5gp4fNryaWRuyNVKjwJWLS1L9x"
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
