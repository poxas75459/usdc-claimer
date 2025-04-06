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
    "12iQZ2DYyVCVBvcUBNi9r2ew8sJMh7UE7cZPA8XyNK1dA3GXVQhwa3TvhPnYDJ4zVXB3MSSpM4cQaSNNEyCo1Z1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cmA3mA8AQAiUVJQkQRzS19XBfzYJSaxg9eGZkC2pZTC8njWJtRoBTi3P6ryxfKK22q3TVsbeDPf4gvR7jbr3Hwa",
  "key1": "4E61SDH2EmacXWyAC8sjnoj8g8YNSiMRRmJ1Sd3bkpfSp6An8uDDtLDLC9h4aaCnJVe8XYpC57GanWUBTo5MaqrY",
  "key2": "45CQru1Gm4ttwQtGTGu8j4QcvUrDfk79sw7GC2PkCP48UquqaBMBcWYofcDCjptPnA56MLgv2WnZ4jmkrdZax257",
  "key3": "4fBi5MLW56Rjr3WprfH6eNF192CC5eyZxdhY4QM5RosxiiUg6uKjGKpqPufR3C1ohxpDeWHnNqAt26TdF31iz9tS",
  "key4": "3aD5F7WCvpD3oDiqQ21HYpr1VssnYmmZzJ9rWWgrnwvCD5FNhp3z4zsvhskLw6nEkHovDBVMB98E5AWwq2hZMQFD",
  "key5": "34iRGmCXTpPogaR7kmLkLU4KdaZKLuTm1iUrr6jJra5wLyU9hYG66QZZM4H9PfYBQuoa2fMaRxXcVUA5B6VdhPdv",
  "key6": "66hPVYd5JdeNFxnyGEttWZ6pu2Nkp8uvEMcHE91G6H3FRY1Pke34oJWsVFgwdtvJZdSArXYjgVnWZ2d7BQukHuuN",
  "key7": "5yHnKrBFUPnLc9R72RvK8HCNGn9WEsp4mcTSdTJDiAak3oYG1WmFcKjUDcck8eYDXmKGgCoRbtQk2pBKrP1AbZhU",
  "key8": "4LyMS9ktBxXN433S1maiCU2QruggW5UDqzg4LxNgMkioEBnDGFont2PJS5PfLsQx2J55KMvzDvhFYoevg8LFp7Gk",
  "key9": "3zWsSUHQGcL6hCGLwUzSbAnfABUmveosn9YPUzpC7KtgbqhmHvaC6aC5j7azrk7wf5eJf85Xm8fJTbZeGQwcikqr",
  "key10": "2BV4YkNRihaijmaz9b5DuACggagRH82YPkXSoJcUBzhM3hD23ySbkp7PoGS4nATqWYr6s1zGqwoL1e4nA5GwS1Xw",
  "key11": "4UZHN8CZMzvTL2xFoZeMXpHgtk7E1bCE3dntH5cNYDUyh3HWJjz8ZDW6PSsJNfyqU1H3zcjR23ENpE2E1sLBGqT5",
  "key12": "4iL2XzhLdgYEtkfE6BQmL51CrBq9AnnJLRtgNa8nNHwF8i2tvF9WTT4QtQjWYuhiiCNHRJmNfrPF3awzgk68d6Ca",
  "key13": "HLyjqxdw8jwPyTnXvSrgNmKCwtFYNRDBUyYVywGtBpLLVPb1vDJa1Ndn48E55QvyrZog1CsHtLBvRXC9TYWrZPK",
  "key14": "3fwgVzSGspSc8N5vCo6Ry8Ewp4kCebTr1xPrUEpqvuofuazHZqSoPNhKeAmZa3zX5QNqyisdyLCgX9zBSufjNqiX",
  "key15": "5L2jvVDbaPCqKw4jSR976DEQE4DDGDHqYKMdyyz1Ka5XqH8ex4CMQJvLn1X3LfLEMdf7tBZn31qfwU4dowXTm9qV",
  "key16": "btXQN5WH2DU2Z1MB9XgYGoE4GGKbXZw1SLUmauY2TaZheWtFB4E9KdRv4kQVmeuVcwaxKNB2SqWT4kTegCQwF4a",
  "key17": "5vxDjhcjLkS4JWD5nZMXNM2NZvvwNUHwBBR1muY5vDVR9pRUQFbhSU4fi9RCrG5idsFfNarMvRMZ27foE1t5ooKw",
  "key18": "2yoxjz6Z3NBovsU2GD2AV3HabKRC1KE2WS3YyhLrg9t5fgrnLczAPpizLBZJ4qQrCWCQavDGSeeTb5RUJAqPbcwC",
  "key19": "4w55JEGMAKZbfKxKm7KkoECYdC5DEmNs2BAhjHY9QddK4FBNHj9uyeNeErnBDbsqC2KEvinyWwuvcGrzdGgHrdyU",
  "key20": "5jZkeDaS8pg3jpEjMtoCd3nGTeWcdxKck8RwfvgsNCvQhRktjuXnLqzF3QfahUQvbsoD2ctssvHzd4j4m4mrM7WA",
  "key21": "3N1CCxAAGn84Sa6CQEaqBUbVWi7Yb4ynampg65L5TtM8AFfMpoeEynCXV94YSWepKxbRUK1AQYP7PtUNGY1MaT4F",
  "key22": "4CZLhzSK7rZhNyZAHtm7pFkifAirtq3iKiKMTsG4oph7qPsi36NDqTjinwhpXA5ekaWWVZBfhA2cpAN2TwDCe4M1",
  "key23": "553Vaf4Z4aPr3ULfeyXvHF2xxv3z9xFhuQBwa24jA3UrJGwY5P6eBojinKbXxrJqsUC3wnqCdpjrLZGQgtzyucUN",
  "key24": "n9F3uJWRyyxVBT2cGWzJrR8cNNWoYADEBHzXR3ADUciVr4scQFNPjbm2ZkZnBJpAswxqwZtmsJohWakPj8sjMow",
  "key25": "3PPqi2Mvb55NVa1dhzjJFN3ik8iu4QgWc8GGXZx3ussHdgTAXEWTGjvu5SzPqf4dJsqjHCoH6Xu2MkL7AuCyZNUW",
  "key26": "42t1dgvtMPMJ23HmEGUZ5XsRf5dwxT34vAnqU85RJaZKqvmXTEv3k7No4cRNxmGggkTGQao2Rnt4jjrDUYDWP5nr",
  "key27": "3gafmhRfCAmPxBY7gBDd73DW5SPXqaT2WS48LzBSLi1Mb4yaqSRj2ckRVXY1PhEuCzXAL6WkEP1sM79sycVuo63p",
  "key28": "2odSq1Jcmxa4LNnmtXeU9vRJfE85E4XEmUpGUYQiN33mR13HwYtmpc4HEZEYbqEu33SSTPe2NgsR8y8vnwLkuwsa",
  "key29": "3ThPk678P2pUtd6yW7rKAw5bAwmkpXMnUNFfLHDCGcN9MKUZjL3zhZEduhptJ1DRomHAqUneHdzTQNRE4AqGRDKs",
  "key30": "2t6KpEuubzdbihUTqVkkcYtjFT6BGhU5QQE3XEmH8X1nVezvv4iRfkbEDGC1cu8UW8rr3ZMggdF7UhNBJWvTprZs",
  "key31": "5ryd2wPiGDvmavAK19u8yB7yazxhpeN9F7TEorfKAukGFtsvyLyqkD8SxurNbNtLeS2JZua7Yu9DaiFzituMUNMp",
  "key32": "3i1R7Di67BS7Lcuon9T1pRnmoMcA5za7c1RsjQEAKywvA8mrA3vZR5JLyCxqUtY1FuNYuQNH9uj6M4B9gwPohj8Z",
  "key33": "RtbTsfdfqyPDemLHmRyzSfi2PenYX8jF5nU8u9wnM6cxfrCSGeSFqKsSi7vyRaQN6PB6mDtCGEfH9WFpBNHjFED",
  "key34": "3oSCcPVSXNTVDa19p1ZYEZT1jYDtmRmUHbjhpsHXU24iaZ35Z3PcgAWYNWLpFxU7s8weUjGfywu8YRNQUryMEEoe",
  "key35": "5BCijRXT9RDcf9PeRxsbPRtnzBS8ZD4J92YSZWuYZvsVmuj4p7CVV885gLKG5E64oZJ4YGZ6g3PKtBsNCCYJdbTA",
  "key36": "38ifW8cjYe7NuPezRRe5ZC8C1P19HV2uXG3bSei8AEv91jFTW8G6WihnNSsZcJgjxHjWhfSvzmBJR8uVRgTowCyj",
  "key37": "2cYdpfB45YiHrwZWRHuwAeLaqtCPiMBJ9b4QbY2DAsfQNbu3C4zRbHpEwUn98bMr8fPpj6kMzv3BNXujDPACXk9W",
  "key38": "2kYGxGYXuL5NKc3awrv7gipjykgFiP6UFC3mP9eCE4yGtkU9UJY2t4L8wLvcs4SpgDu1ShFKtxmfFvU8ViiXVEbb",
  "key39": "SHKadG89esvkiAHvm5UgArs5GnZEJzdaozvuSkeQowfNroCmxrJdaXrH2TBEASbUnqfe1iDsjdprm6T4w5THwnt",
  "key40": "3GbNS47YA7cSKbjJV9YsXvGvctXKQLxEmbZZtYuV2wMkTFjLDtDgu1eA4TxXAug16pkkc6LxYpG55uA6nVbyDqzs",
  "key41": "4Ksrudmfd1Q4j8W53U5cdDa74VdbY8kKiFMMrSNkWEECnAaSbku35tjEFmjBMinjH6SxsiuDaBN3mjmLy4izxdxh",
  "key42": "2MXoVvgEcmUh5F4AbKHDLqMAwzK7s1c6BYqDhFDo3znJK57dDzgEeEu7n7ymix4ZjntXUEfG48VnX68aVG9PSgdh",
  "key43": "TP6bVrJ4yPw7VHWTJQtxGzDmynBkoJx6u77KPsKnFQ3WrbdokPv6SuAZ58DRYXTDgnggEGYnsSg1gQEpSbD3Buq"
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
