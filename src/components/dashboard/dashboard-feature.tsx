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
    "4DGJd3Hb7oHFicNBgS1fPg3Ybj38Y79xYhVDsvgZ2d7m6Gi1ZK3p53iNdgaDLxi9xoYDXffjy7hqxcTh8AGF2zRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EEhzgXxs7DcHZkzqGSwdNUCdaKyFxDxQ4WWRERaMKHeiYGYfJghaUb6ZwcQ6DiLYcDApreMgSCcYsuC6o5qjeRA",
  "key1": "3A8LRjnVytDkEYvPAvzXzmDVKPuTNT4fJnsDHGyiU9C6AKHP68XCvtCZMGesbbDmX64i5TcJs9VgtRaVKzGmPAJ8",
  "key2": "22RLHBKGwn4ZG9So3ftB8q8uCoHpYU8TNhEejhwLiCEUV9KQP5Mhv1weHHbhQ2Hc39VUUvsAfCz3ctyzVL4in3yQ",
  "key3": "DEHdTPfEL4JNv8caVXUgpwwkhoDErbtqY7VoZuY8bEUbEUQnTUEsnweT1p9SoNtRZPfZe5ZMWufBivZBqvy2u84",
  "key4": "FnJZe4EyXEgf4thJnvrrCFf3W7S8WMVqbtf5t1hcASPjdp5HkpnR1qLXUQ2M8c6QuuoSVSZS1oz6aiMcHvF9qEo",
  "key5": "5QriZLomufgRRseJN19e5m94ssLzBPL4oaKyGaMziWHQcordbnkCU57t3F6QY3ynYD9Lf35V1n9ofyYB7xHySKJS",
  "key6": "5FBZRrwSYRPNCnqzHE4U5igBs8TYKxB72tadZXNiMm1DEx6XGxR4B26LeG5b1ea2WfkwJm9Esz1oCZeGa1fft1i6",
  "key7": "SxJyoH4tk5DbEUzTNFyjCwjsnFvdKYs73fCrrkRZM3Rx4Vdak1vVqhqnEEc63dvRMhM3V5BvscoWo4NFJcECCjZ",
  "key8": "26YtVAmnG4gL4fA5NFGM4hWEkmY6B8Uq7PNd7XM5iguYRmq7Pv63onwnpxyj9MxZyJubCkEG29S5gy38qVaJM5CM",
  "key9": "3SJASrzEKRmXeHup3fgBvVCzYvMRjMp1QdNVe5X45T9AxRCzvyFhiXAqNrhoSrEZUi9f1mqWcBa8PbVq8o2evt2k",
  "key10": "57z3pd4ZZdQNUZPMYHS6fGKe1jSjWWFJJsLMQWLSET3kgKwrGpmkXEbijE4FXMPwQpDXL6wtmw4WVcFuDsav4uw7",
  "key11": "3Bx4Pbh3cWLio5sNWEvHS8Um15nmykssX1FhvGzuq9wziB5uNJynxX44doLV1CNgGwWqeb2nohuzwieAW6Lh4cJu",
  "key12": "2CEQfifCrw2TCugGEj28tpnJ5FZ4EspvpmqcZuR6VroUwjNfzUwxkNBSsyjMjCnVxKg8TEeU1UTGuwAprzF3EkHc",
  "key13": "4rKF7M2NiuLc8kFo4SXJFSdqre5MLZFrhkWnC3jhqBPWFBn5voAcNPLdjXHrndNhQBCL9r5CHwjUfVUDLjQ3GvuT",
  "key14": "3tjCXECRfJVfZL6GNsLcCp4DWQQZtHfkmycG27Gc7LfHQoMhoW1YYP7E829Pg7Qj9wya4V8cuE4mUsE4Mxrvwjs3",
  "key15": "4diTRwH76c2PMB5iCocjCiger6iTCE7JH6CkmXb7zJHSPXyGRZ4Zpi1iDoaFmhHu8UZkrweb4Vmo6nGQ8x7tmH8P",
  "key16": "5CQyGNtyy6Qh5u91Ku9yRh8yNMZxY3kYU6XtspjsCHH8PdJgdmA6oBojnn11ETgwVCpdweEzioz7sW5uXrd5oUU8",
  "key17": "3CsGeiEXeqa3VShycU42G7VTGVJt82gZg7ZZFPBtDsWWHKWskYqGs2ohpgzsnDyQUmzkLLXef9zsM8xLng6QKH3p",
  "key18": "43tChoD4RQPcMKGs2F8vUPwKWnA9aGFK8Rwdmf53n7JSLJ8mDDJhSCRTDSHkL44kuVWEyFNKWYt5mG3GyqHuLKpL",
  "key19": "5LpiTAeYrBwdw9E8M6L34g1jnEBurPqa6uVAMFttCwMaxrTNkse8GkabhB45z4zTELL9FTg5gmeARQwEnMau7Cxh",
  "key20": "tcqhvNUi7xsWvc7W8UKEQPdedNBfAmopx38ozsRYEsziy8k5U9qDAcjJgnKN9SS47fvXdHZiUqYs5JgP2en1Mmj",
  "key21": "DeJNj2QYCmKWUdtcjxFeNDrFvpLzjCFM8dxzgiLKLF1id8sfp7S9oLwRVRN6DYxRzJrzhY6LPyvdjCKwDGMhqMr",
  "key22": "5pYivST1B5wt4oU8NefvosgAuiPfyLWt5CMfb7Cz5RZXMgkmqTb6bbLnhsKzykyGHgQXCDvmM53KH31zbgLvQBec",
  "key23": "4JA8Nk168PjFPdGFZm4uNMvan2K1Lx8siEGdHJYoHn29suYPG3cQn7y2t8a6A4nhYS5DVKL1qHCsZvM4U94KNRHz",
  "key24": "2YvD6T9EgWvzHyPMGHuvSoYsmDonSQ4jghJVRMUgBsvGGdKK9KMCz1tYLEiwpSKK9mw7bYM1R8PqgThhPzRCXfcQ",
  "key25": "4PLDxJQgH25z17ovYRffk67N2v3Z7uDJqzGP9p5wHwFuaCA2yfCX5JsMoxkrgQrnbCyvpkssWQh7uN33nunirLFh",
  "key26": "gj4gNjeRK5ymQWdqJZvue4yBLwTLXHB77er4xwcoPSdavkJPYR8jkSoDiptcmU9Apwt41rTB1FVVW8FrbYuncJZ",
  "key27": "5uuaPUdWPGLVGvRM23vpXg8hJpm6YTVtnYQ2ZjpAZ7vgTWk1uAt61HfnnEMetqVxBqocrB924tFBHPNjYKENzznX",
  "key28": "3wUYrs1zYgTgzrDsy9Vj62NqSY7o5nTGA9wadAw8nz3JAyxfhxBTghAHLDZ84t6gxpBKUYPcFSApqNsWxkbUExHT",
  "key29": "2YP9y8wCNdk35ccuLjGZDBfnC7iXghvPYUaRQ9zS9QpcKP5NfLACNM8SjBtLhedsD3PFPwyn66SJA2KrDm69qT4P",
  "key30": "2djeqZ4JczjExu2syu4nBfZUrqKnTdA2U6ZF9dLV6chyX6CQc7XYZB82o1GGveb3jRs92xVRhs38JSRHtpzdxtRg"
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
