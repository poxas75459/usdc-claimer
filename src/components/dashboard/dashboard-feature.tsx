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
    "XHSESUkqFea6xi1yfNKnmee355n6L7fNHEabmDdZTdxtZWMZxgZgB5U7NR7vt3oscQvzNDxtYLVENAuypEXWHa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jJEAPLjz1qGBFD3JdSskn5Jj2LKKS9w2KqQpuMWvD1juW3GevbtPgQagFA6HUz12T3429rcQczWdG1MyT5HREbR",
  "key1": "3NFWvrdqNQpiYMBLk32h612hNHo6ESdp6S2bMniGqkbM8fvwAw2GTSGiGceE1zx1AVsKTJUcM1BeFgVof4U3aGnX",
  "key2": "4YMkbAfvRdXZDspjYU77Ur7Mn1pE8FG7PvB6AMJZ9jwhta7hCgF385t2PsHfZoMn6YArhbPVavewoD9rfvKnChj3",
  "key3": "3Mn9S6JArMYGjhSmWVU5uqnbLzbriaBYJP7bVZNkCc8wS5qWGy2j3sNT8hmLWT2JwtCvKeRmm5Wq2rkjtb8xALWq",
  "key4": "5dgtMT89Q8LDKqWtfw3VYJUaiuhc8w6RePQ7RazZfNrPkcr836ALRGvceaGu32LpAJSGpGP3GPnbC2UyapaMA6kV",
  "key5": "2Y5CuMQChHQogNH9jxh5hCsUYHHZ2ApmM9GNsjjfGEzz4AJHXAqDK7qfRKSnDrtakYuVhE4tiTG4By538mDnB7Sd",
  "key6": "3npspmorvGge4XGnxev5A4k3dsMWS51UrMwRDfU4dU5JdYSEJtWaGVwycNqswJ3ZGDAPRLsLYpTaB39Bu37puzz5",
  "key7": "4xVeF9W2C9dda2VnbZo6FPqGcoEoByd3cbSuDQtguciworCNnnB5m89t5nE4RpSUs41cSCthtRPAGjQNeKgigoaT",
  "key8": "43u1x8ApCeP86NRZtW9swT9dXHyHxj86ZNZ7jPRVUWwSYSjGkC7RVuwFJgorCYdjiAcbUSigcUr4J8Ci7uZ1jQvo",
  "key9": "3sV8s5h3WwC8NLmMhdGN3ndJyBfYLwMKpa7CNbAK1yqgfS3oH3AvzvDbfU4gTEZHipmkiL9oZpQeJnX4mvoq6Rni",
  "key10": "2v19fxyWxPFja2SfQojJRAsGVzFR64MsZBDac51Wkj2Yx7vwjHUx6T7i9Gqg642uYBUm3971khDMqFrm3og7oXgS",
  "key11": "4Tx4aALzG4PZY3qnffe9wMhDAgcmrDM7f1wjTBQju9tTGNvb6PNLU3CNvZQkPYvNLN323nUKLkJMDSqHZjZFrLYY",
  "key12": "5zFzhtLKaLQAbipxJqAFsLVkuoYe4MMtJxNPvmoSyNJahN25gsH1Q9vQhtfgXtHv4eqD8NTTw43E9WLqGdp5piH9",
  "key13": "2WmVrZgYsZwttgzBuBaWKUhVX1vgcGkSSXTyn8oCemvkUbEVCwFHDC7Sv7hAHTDX9so5PovgLNtdsmcKjZwjUcXg",
  "key14": "5TQHTQ7fjdEtgBfkxXnvz4W8uzXbBLXqw9zG32NLsbnUisXFCV6LJkgm48WGvDhP7efRoGrNpDateML2Mk7VFTML",
  "key15": "5ehkBGoPmYEs1B1ijJTH1hRJGitLymycPN4tXLLrA55imtttgzCfteFwkncaTSWHwZj8DezBdVtP1KYJVsuwxDuc",
  "key16": "35Gq1SK4CeSSJKnQvAWwgoptuA8xKKXaahKzBgbqZ47BPjLPLwReN1k3bR3Q9r3zRAxhJ5qJdbxxhKQ34xBpxaHk",
  "key17": "CQ28usf2vY4RMjH1cnfrs4vy4w86Bp5MYbuQNYTEtBz1HvXk5mbUPPMhE4tqLnw6Ezw1mMMfawNYxz4Hht2ZQzp",
  "key18": "2z3iLLMhRjWZTgpAoNxFCgawuoyfqG87pebD4VpYMtgF8xjCj2AwQrfLgkpiwe21zZeJy9yQfVBH47Z9GmxTB97Y",
  "key19": "2GaxEYxv522XPs3whRXCheLtbkm9Yvi9CFjqspbFLfEFPZv4Yt1g9bwotEwsfNEJexXGiVYke81akwpFqC9w1zzG",
  "key20": "3VKDLQP7F97qShDEMtMVqALpnHrLcc5XoLwfBGsRN25svEZbdch2LX5mQ6FTmXBpsyo1JWDQdMh6eHSRPypeS9nC",
  "key21": "24eowC1UiXgxrZ42TcWbaEYaWweQxr3Y59GzoxbuhEpQ9BhRUEATS9KwUpqHjyzJGFcHyveCFGgpHzvkcHxStvnZ",
  "key22": "4EiQpiucaRNoKWbrHzR1ubaGZqsVqyMEBo8fCUAdCfQ9kSDLbpXfUbtSRF7a1B7QTbC4UdBAk5DyaML2ERe95vRv",
  "key23": "4vEaP1ihYjcRn9Wm4v56pxzuiKcLZW9MDAf2RfvSLruvckUHp5XmWD4rvQVychJcUgpfV532LfzZ6hJjg3vy5D2F",
  "key24": "3qqKAm9wqD4kxGiToPkqJLC8BUXhbCKoT9fMsJqtvsn4bnd4zuhn2bwdTTtoCfCkzPbUkmbbAxyJVrqTW7BUXued",
  "key25": "5zntST3xuMrv2CrrnUucE7B91XbYNZutLjQySkkoyQUKpTagdAcVNNYfPcdRhQa8Hd4KemGfxwNdzjGvmLxkv4NG",
  "key26": "4VTeymEC39gcph4Pr2Bz3Bj4XJom5gKWivAkkxxSL3g96QXHNqqJGQUhoMHP2Q47byKcr18vSZUWCdBx2CmvyApT",
  "key27": "4jBFCZVg1vr2mGCD8xEkpovoCeaCnvqoqPdMXwZasrsYGnifyYYgiQbuA7fGUKoASU7zwTPXT5ATjnM8GZdNLDYb",
  "key28": "2rvzJQMJTiauTF5NKih7eD9GZQtRkQ8RpiWgXTXwyPrNQaVmEW4yRXaRt6p7bGM4cthjNZvi68yxkTqR8sqnmjPr",
  "key29": "h1TZu2c8EGobuo9hCLY27wk6UMCpefFG6kPXivyji3EJ3HLkFo8vgJ13M3q3XkgpnRBYGwmDAaXhLYP65j82YBt",
  "key30": "62yGxjj7RSaMihvEZP6JRrVX28EENPcyHvjXmYjnuVWGpnFfhenTKLD9YbyrgdxkxTC7mud5Pr4ogfrTds4SUjsE",
  "key31": "4rpXfP2AGbCsUmw2R6dvcKdoLN5TM8WsP4D9Z2RXP2jjYLPGNyHGFN6PjVAvF86Jizqb2LUFV2DQqYX6kwV74J2i",
  "key32": "5LbwQMgivD3fZfLqyEnwMFJ2fDfzSwDyLKwvDuvk2iowEaistsDuRGukJZigbmKzzc6mt3zEiRw66pUHGG4zaXye",
  "key33": "3c9C9iiRcTUJNbSrAWdgRVAwei1r6nnib68ciQfh15Nwe6pKNUz7XXnLsTKGmMpP5CQJ1uw656vLyYZmpXHRv3o8",
  "key34": "2cBpGh2Zh7g7w96867ykm9kUY6NeY6crZx8ymeCjMwUJS6uAj7wDwPDVUfwEG1qKkS7zeMKk4nC5NPQJ6Q7fHHZu",
  "key35": "5dqf84HwEkUijdpY6S2qj6TVoY9srp6YS837WxnYGAvExqYxiRx892SN5aMeyNHQhDnouMBRpgBwKa74BxwSrxQU",
  "key36": "QysCrrR8RU6hZkMzgb5bapvJvVBtaNLYo43NwonGepADCE9PYdoZB3LkmoEsNsHrmq3ouQHtJeFgPtq4c2ey84N",
  "key37": "vkUco7sz3qw9EhgiYsBxfEQzX9gQVLjd7GakHJNkwjCkNcMG7BRCD2ex9rqdRhdZZedMkhMSUW7D6C2g7hTtDUo",
  "key38": "2wTp1VR2g6qJxmx6FdAnV6TL4GSBk5sFYr5D43zuc6FdGu5AiHc3QEwTu4hg2ZVtyr1WWrdeWHAWtj7yNKdcVpDp"
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
