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
    "5EPCNvwSPFJPPwyFTXJ2Q2zWcoodup6prs5Tzav7q6YVinaDFfE8RVzoyEs8ZKEFQpMLLwe5HW86P6gzoRVpqFtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pRYSiTHGtcSvagNdfgrG5KGd1D4Zc31KhwTc186KUi3uKRcH13o8LXDX1vXkmTnGaKgZvp3DsYuTe95NNgAwVk4",
  "key1": "5WyrF2P4xmPQNw3DAQ9u535Sn9VPkVUtGnMo6P95o8QqxsJazKqavz9tajZmzAgt95sqCELzMmYe6c7VxzQxSZmc",
  "key2": "2qynwwA2dtSoqywHPyAiNcQi9eiWqXhtwNiymZpun8uhQcp8ph4zmo2yz39Aoz1BGGYP5WtNdf11j9yEQbwsNacg",
  "key3": "2WP1ggHE6joDJ5QinLcLRJ64RemQvY5kPEFZpvYkwotJKDrMe5X8B8RXeTP981T3cVxE6TBG2NRpiYMVd5ytusBJ",
  "key4": "3WrzHu84e9tdVwYKSoHTMUogf4wFivhsJScLM3gZEN6wEDWAZqwtkMCQJUXTaAwctJ1djk7527pr9ivdKPTyQN3g",
  "key5": "2M1nG1No6RP25o1bF1jgQGvkKfc4LHpLp2FrNb7a8GQ46ssSA3qCBEoh5jmfEXYGngNTdNawHXPsXeu7ZypPEeuS",
  "key6": "2RtgoBJgJgBR88BLJ9v9FtipkJiq8iBTDT6mxUBoxniZV3VLowdpAgBDG5JTxzzz6BoyB4SidfF174WYETwuaEwE",
  "key7": "2G13pVZAzdpvUMkvXCdydidzeKUSj15obZ9pw4NYkRUA4TcGJkNX8R3tm48DVGJXRb7efcnpK813yoDV7AdoS8wT",
  "key8": "3PEe4Jhqve6GtGiZByFdMdijhC2tf3wrz5JavyLDDqFxF7cwR16vYpfXg9kzyEhkoySYo2o1xvzwTjr5jMJ2NYNe",
  "key9": "4AK1mc2KLfNwy8xcH7ZYBrhuMQKvXTzYHo5UTtPko1mPbAXbSzuECNqWwAhK28RyL8HwoAgbMBvPEsXC3Hd9Xsdz",
  "key10": "3mVUXhRfob8tL4R3JTMVj74MCAgNBxkyGxBYyX4BqZHzfoaJHWzwzEheyNoFetWYVgbVz7A91XP4unBgXyccB65p",
  "key11": "2W8LD3KgD69yDhfQ67ppX9x4GfTbEfTrdZQMHZ8F6B3STLJteTVdknLfiYpJRH74nZiaxRxFBPmKJMpeyoaTrE6t",
  "key12": "31AUfxRxu8pBN3X4NvcAoXgVc55qEZbYV8QnAvmd6cYJkJdEQtDnC1M65LgwyAs6AjmJSWgmC3WNcchUFokeA2KM",
  "key13": "aBbViz2tVutYTuFJCbGkXCNY66RJXjdXM4ZZvK8QW1YgovKD5Yo5mkNnMMfoxfpb2YRvkdiWcc6v1r6rkAGTXsQ",
  "key14": "2btezXj98448cRM1bp7BsMDvNmhr9D1ohrf5YWxowmvgFqDpsKAwDeHWEsZ67sFpP7iVrrDPBg8DBp8UWgbdW3su",
  "key15": "464D15X8CSVtNghHphmWxUnHX8wrpY43cYQSm9sFB6UioxVDDBHk9iDFX9pV8icT7u48zpYNXBFA6eDcjhe3UXQc",
  "key16": "4sQ1XSGcJA1qzxu1kEEuun1MvRKqMenHTpNvhyq5TQbShFYApwjRrzQNgwMmWuaFF2HFCNTfTP8oU6piot235xYG",
  "key17": "5rzPcbcDUtbzhgF47CrAKp9XiMDdZM6bdUF2WWEysq3qHETiGLgcTECzqBsgs96LCt1TE8pzL1RnxRRyyRvXVDJ2",
  "key18": "ruk3JyLNkNVpHzzYtkCjTjVcCTRt3KUieDhP9buUDUcaCb3S3naXeECmZYKnWFNPVNaLqJkzV52g4cwTdSbus4G",
  "key19": "41b22ZM1VVkjM1Ntf5JuWE8XwP9dYmmNv6VHJRkUVrvsXrnK3yFVLtRHXAML25HakwV6Y46jSKptgdyBa8WxaeLf",
  "key20": "5SiS5ZGwgjEqbCZmqR4eSLGiKdKSRzCY44tifk6WC6cUpkb9uhP9UmADnGVkqj5F92UCxvTxrEXEARC5hee245qD",
  "key21": "3PjvckcsxTkZ3rujNXj8SFSY8TdNc2szNjSWns3bMYUy7C1dKztXxHV8td7pBckJwDfAr7gd2iF4wpF4TUQ2Gmn5",
  "key22": "4dqHSxB7PNneinJ8Ybqd7pjovMPfiLJvsZre5nDSMF83JjDzgTjSMUFs7XWpjvquMhfvJq2WHwvBFJDDBF59xKL",
  "key23": "gXqQ8z83vuBNh7ztddjDibXc7DYQdoxZRkKGVqTnsUtu7dFg1nfzKqr8fR2jWsTJi8haz26NJJG7xHNMP3hUkUt",
  "key24": "Z3RCyXgsXshZM1sUFhmXUGNmFRpYLEAcNpenHCczdeEMv1eKvXfi6M6rr6Ua1uPRUk7FS38V64Zq17owcYzxYar",
  "key25": "3sLhS1TteqRiz8PYnoKJvmVq1ajxgs8wndrgeCqGDvxT81gQe8DiwXrteqYPLBt9rdhsNri1fneMR75n8PCrN5AM",
  "key26": "4HsrmhPVvh92bxGSYQt3cJpYVGFfT7Nz6fTJS5CUaywFpqrfbahXWLoLhUUs3ECep2MQND8qV4pnqKCbfzWyE5yH",
  "key27": "4y5UDuxwFgp65i87p7RmBfdhXXmUGBT5dBDSuSzWbErQZcBwptZZ9md1rGN3LdmGmVks2f6G3a1VerJHubNPmU33",
  "key28": "2fBbgDj4iDaZWsRYtncGaMpkrUokEjG1cocLhGd5ixPRQfojRb2zdTc7RKEiuGDgFhLxgXWPg9LKs3k3ocTkZxy9",
  "key29": "4jcxhVYyQ4DmpeXpEM6M3e2CdDDVG8drxCTTTKEiZFHZLdjwxjMtauWPWYv9dHpRA7mbCf2nKEXbyQWH8TAQbocn",
  "key30": "sZQ82q1FdrjTAWqwXeS64nqb9PpSX9w2dYPa76QLVZPJU4gEeEi4eujuFbq6ksdNVUnZxNG3AAYZG92wdYSo8dy",
  "key31": "NpgsdjMcLSyZMC1xPRoZ4h4ifeDsiAigjxvLuyeP1X1w9XqCrGAq7NNr2ZRqfuraMZx1ATUz85fxpMqZcA3145Z",
  "key32": "36n6BtFeNjPmZojb5VwX4hQy7KfZPHBP6KVWmN8MaNdU24JyGFYavTa6Us1zmCMURTL7Xh7pM7FytSz2MJrUKsKw",
  "key33": "2RAja66659nC4xEExnEjjSqzwwaNtUeMADQAot2SqpBSfPhTAF3qSeHqgwtvCDbmQP2UokiPZDvsgReN2WKyJv7",
  "key34": "hfTnURMMbV6kyCoKUj8q7AZ7onygTbJ5YTYbrnaZPSpn4AHZTdbD5Z83pEEy455gj7uDpyaabkVC18YqQRsLmwk",
  "key35": "37DMpddEwJBeFeF9rh5dDKZ6mXHJk2TXoGaCY5DUSqqUScZFTXJYXC6vY9WgxqLuoiHuj48pkeZUDAVWheWXzV4n",
  "key36": "5H9G2k1EyLo4G6AmgCF182F9SaP4DZdvZo7NJnnCL2VkKzP7tHLbewfXDdNH72b1GEe8euUFYs8m6QaDMNwvgxCy",
  "key37": "4sZgpwJWW5CKWTQM5PsTRCHshFGXLp2ooupVFC4MkLZUv9dWgVTAFfrPS8Lmfntcn9j7azRYBjSuqZ1ntSaDp7oZ",
  "key38": "45Hovf54qoDwYPR4GkeGcD23ePFMZ52V9kQnoTwMqW16dJ5MJStCqaRnQLG3LPtam7gB63uVMdoBXLx1o5Q6DXoD",
  "key39": "2oVPQRNZshUEmmmBF4aYUM18gpxWUqSMarAcx6tGNLh3A7BBDNeeY53BbztUtv8uUe4udAeA9x3TMr7Z6ZKDKBoY",
  "key40": "3Tw879Sj8EjnLfi6dpuRM3hfTgeh5HCdjF1YdkMFcMda2MBD2i4L8EUwHJwvf2DaPNTKjCTx6feisUGrFcw7sNi9",
  "key41": "26phXdJN7ryVixUNjjiUX6h5o5ov4uRqfXgJdZDbJ3nAMUXQbn7hhMEbJc9KncF59k2Pvtu4Fh8QU2u4yL6WQoa7",
  "key42": "58zgM5rhM9S7wsMugGFG2VLAr2ipGDxvDsSxBStELdj8uKcMFjb6Wj2NN3TTAPV8TjkSHcwR9TP2PEwUePPU7nZj"
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
