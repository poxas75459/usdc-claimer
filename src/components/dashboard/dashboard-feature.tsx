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
    "vj3fVyexZ54aP1F7vQc1s6TwbK2VaK4D24pd6Dt2ZGACjfsdFhUg1sFB83CAxWviNto8y3E4Fr93wJZFAjB3ofN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YJZgd5XHVYLCLErRjDgL1mXNMeaH4sGGmQLiSdKAXfkpxpejaFM9AoRp11GSDJWxNYrzzTv78bpxWQ9vwdDkTSn",
  "key1": "3T5rER5cxwGjbZ4RiTA1s7s11ymcvKTLyYPBCeCu24WWYyjcrdQsubxDDF45dL5U71cpTnrQKGouZuqTdYcc1gTG",
  "key2": "55AMiznUZGgheLe6hKUJtr7Bop2iTNZztHFYJKyUYQRJfgbnVy937KRTKkG1ehjDVesfN25ZNZVMHAWyULNJEVm9",
  "key3": "2RGXFqFd9AeQwi1YcgDJLkSrMBvWbE8m5nZNMDKRkftn487QKbYbEcxYYTXdi2oqcsk9pBrCDNS9pgwRuYrkyghV",
  "key4": "5EfVrPuuny457BKHSmhyGwd5jZkEExYrf6fxxSr6vPCnoF6hHVjqtVWrXmvWGxXi4drqnz81FCacfodzVnYg8LyM",
  "key5": "4uhHNPqKgqRVeQdEGqH4SZqNQ9797Zt6gdDjRfMYDKgpFZSh6LPJfViMyMDz8WptQ5wvWEcukdGfCYnnLsxpXYaE",
  "key6": "kGt2sALDqX1qTsJi2b4w21pmh4rP9x7tcsn8LQ2qpLA5ns3N2DYfTEDbQ8vtEiQ3LFf5GT1px95r972vyHBrEz3",
  "key7": "4uUAui7Jifu2D18DJ2vSJGRaWTE39TNaDy8KJ6TqdRyWX7zg54S9hZWJaV841m5SU15jEmFCJfst1S4aqY4eNq5Q",
  "key8": "PSxQLc2m9s1DW8b7cP663fN6Mq1Mx8kVem8mNADs1Rde4FMzL26DQh2WgMSRLVWXNzmTCYiKfvpzgUQpPbyCc8A",
  "key9": "5SE7uK3N5JFctUphsVoavMjBmDk3x7bQ9nzAhJiiWnchUZXTXiXdN59DZENBoBczLgHMQtTdnH2D717pM9s9usi8",
  "key10": "3uV4MtmmDSt6JK7ikmFDeK7DcGfEVkaKuF1Be7J4x1XyecxnkZj7kyox6nECWhT3GppyvyaUA3RfxjBGw3Vyup6H",
  "key11": "RYc4LLzUGSCtNYj32trtGVEHE5PPfQKe6q4s3DD9Tr7tmtb86TiGMasnfPxCJRSd3exWcB2mPiRskhVNGSyZzNz",
  "key12": "5iQuATBCmvHvXkLFmfpQudtBCtsFqBwNKLJ2K2j1PLRyyKtTgJh37LKMRXzAk6AnDvWDTZh5QSZfpSj8dih8EqRS",
  "key13": "5AjuV6euooAcdDkYG5MGTfzqtyMyBW6gBqv9FQV4JQEW87j8HZ3jsQEZtPJnRwc3qLWnmEPgWuehwDLUau8S56fy",
  "key14": "2opC4Zsv6N1V1nZKTVyHNktWecBdeHY6xJv4ZKpof65dMN7MUdn3BF1hyNjrDMQqNw7cpaVFkGVUHV9VeEHUuKck",
  "key15": "4Gjwos6ncQrzayjodpJTk5UYt1uiWJDj2Er6wtJ5P1rhy87iUKHtsXcHUcWFUPD6rL4okK6wbav8AdxHDoFZKLZK",
  "key16": "46hyFogF5NsFBndJfKgYjE3fqhdt9Cjdi4DwyL4hNBN5xuzc2PCS1xdboTxRmQ8HkXBfKCN7bA8tQ4j53JPNzxLa",
  "key17": "2BjMwKhvZ78PWgyFEZ41622zRd5wCjwdXUcEZuNV172WSguCw8nMG4PXhkBWb3TcnSnjMP2A9XqceRSsppsfJaGS",
  "key18": "5dzYQsDxU4WsLwg7saKQz29Cj1u4FYuC6zSZ3C1eYfLvbuKL2Qv6ZW49uBmUQvNJzwB6RyQbGk5QViLBaXKztxxT",
  "key19": "5SkpLsw8zScNSp9DYkvZ3UM1mrG3Zsx9rYSAUCLbSKYgz5A84hm8U73crWCmdhPeJzfckLpGXbEkd6ercLXLmbUK",
  "key20": "2JGN62AFPTo8tbDZABZ6UBd5GG1mu3zxfQC6TXAwD3ibuS1fvcCL2NF6J6hjPduKqcE3cuu529m5SKPntRwe3hrL",
  "key21": "2D1w7kE8tWCp3ZYFBtAvzUj5aN6j27i4Ajcc7x5ooZegTXLiE42Xf92dtHjZNT9zSuHCKq6xgyGaxEF7sPjmnrjG",
  "key22": "4iNh2vciNh6MQjzfqmNbPBJGU3huAqEjW1ny36S5yRnSL1fEu1Ctp3tSMovPnbhK2zo9sV31DbnU8LcR4BiDtn56",
  "key23": "sHArbcFma3YwT6XPQ2USkX1PHtZKq6uq1CjsSfN9UDicvv837tMEqGAm5efNFGXEoVAts75GyEVctD7G6dVYdyQ",
  "key24": "2UbiyYBN6DLMZgSXqSoTM5x6S6Nzvdo1RxFnM2GpMEPVzh1cH6F3vmBzhKoLjHJVQd6stPnLnrvJjqq3SnJXMcZL",
  "key25": "5PLeDGQiSUzHSMWDRL7yeontJZdquqpWPjx2rXvkkfMTWpWhCSy7NKS5E1FggMWWXCCaygZ5WBNbLUdBAXW8qp8L",
  "key26": "MhgFPbK7BLExWEAM2gAx7pPnvFSDfUG7xCHgsCmaYAWFuVijFRz8EhTvAD2arBtDg7mZTHtK1oWAxwQmcSeno3w",
  "key27": "4Fqfo4NsxJoAf5xjLtXwQ3hwJiL9XhswEvhy9jC6VtqRFD5r1sB3LrtzofAW7WsLwhQkDemzU3LhnqrSUbEEgPWJ",
  "key28": "4h782WcFtUmeA2V78V95dugwYtXm17ghJAibmN4gBqKkMNgDjhKNwkEP34iAuoaRDyxvqDALSLrgjrroqM525PNi",
  "key29": "5duU36hDeDpMWcwDpdyWH6oepdiyNEso3Z82fzjzdM2BpWWTJpza3noGxUnkmwSCWNwPRBWqsdT6Ydi1mkD7FxxP",
  "key30": "3Rqeh7dusQmwC6zVfKeBM467d4jqQoEntoi9ToBJoxnzZsVFBdD3wq7iQEo3M86UCoj3JzpGaMvKzc4KBpcgu1ZC",
  "key31": "7of5BKLguGRXJP5GFuhAR7PeffTQZgwL2Hde4gnSf7fMKHx96CGyy3KhiAoE8UCMbkJDAGnEAJSHSQAD9S6DtYr",
  "key32": "3sLNP8TZLtb6QBi42e1voLSbSXhJ2iG4HHxDihPuhSsQYcxdAaAfzp9j3jui7egCdncaDbqmLShoQBqy7gGkhsGc",
  "key33": "aiJFivKD1fVDifsuARqAeg9RjG7Ym3cu4LspGdwRJJWbYbky1RTGCrjGffo3UHKauWCihrNXbdEmjSx2zS4BRYp",
  "key34": "5rt1o8RgYjREJKhZcfotNbXx5aiaxr3D7KFx2CVKHRhHQGx5MwC9eyxrM6n3fBSvKeNR1yfhA6hYeLgEx9k5NTX7",
  "key35": "Ji7zdwTtn1y1xhoVE4rrRShvZRS6gyV7wA7dD1r8zvqPX5fnXbPM8dA6wLFS1RjKUmGezYYfogu4GeUnZYrNCEH",
  "key36": "42jiGnnR1FBAWCtenMsc8hBggALusGwRgiJLb1vPUy9HHVT82MB7uTCBhLnTYbXjdcW1gJhKu7mqMeGXKHXLsn43",
  "key37": "4uddgGLEZedUCUUs66gLDgB1BDgMeM5vwuVKahFoJzo1ZC7bHrKbjn9h83jKGE7bZDUuLtu4yAdcAw2tiy2e6Hkb"
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
