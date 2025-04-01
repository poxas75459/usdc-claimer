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
    "5ZwteuGZsC7N3cxjTyShth4xw2NYQ5CyN5fhLkuVsxNrpQEqK4SS2iSxLsyXpqicnqQZ3HthKUh1AFawx5ivpH5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MfAk9u4Z4NxXuSNbymV57tsEPucwf6FnK1bBLDgLd4gVrG5gZqG4hj5S6wMhTGq7AfFkfD33mXVSrMsKJWhiKfZ",
  "key1": "56CQkd8NfXJ8jLjJxXMCAfgPJHyDuJfy6KtB9aHpkyPBHrcLzB4MnWjaEDETByzrzamroGoChJ1qS2EzUuoa8hvE",
  "key2": "22LsLS28Er9U2s8C47zasaqdRwAPgC4pq8xb619E4RUQG5JJ8LiARitKx9B6DoaxMAoEt73t6vBDhkf5T2MFmK2z",
  "key3": "4bhXRwVUtNXqZBbsydrMMmMJENm7SKDZeRNdyt5hNuEHk5hzfbVuDwB9VU1cY6sMPQ2jWQQ6j4Rj8YwrrCQRTuzR",
  "key4": "2gW5NBD4Bni29V8DayFX1MEZs1kcEhcrGnSsyPv2Qmt7BtgdzAbGfwjXTDPhUQmXwkNrGTT93XyFAq4sQWbzJobg",
  "key5": "4c16Po9nyECLxkyfyRa1MWPxajVbrPEDwQX71D5dBhLFPUd59PwURiGa4W4We6z1Ytw2w2nmHSQMMYCiGGtm8bw2",
  "key6": "66WnM1xYeZY6icyaVM7LrL8rQJkMsRbNbm9EzhFaE8wwPRWGmwq5TLkwxMgLFWEd8nDdu51wHMJdPZYMosugv2Ui",
  "key7": "eDvK6Bio8Vea56aWFVchynRsVUYbonzFfeaZap9JrJUfQF5NMYLvQWjDCf4EZwb9dfF13hPWhF8BpXniHNb3Dn3",
  "key8": "2N1yhYxShJinUjfhVqHEVDoD9zmam772Exp7GW7bBwV2pqhLU4rfi4NFgWgzeunTK3Sdva9zhxm2fwpmbhvLdc9X",
  "key9": "21CpvoSeY9Bp3PE8ojqkL7L6etiazbiCL8UUwJvUQZ1tS4dqkHVWaNoA3TsQtVYpRDMPUeXNQoGJZQAuvTcH4Kos",
  "key10": "NsfSS515sNUeSnjLzsPGSoSp3MU2nrjFaM9YjXHLsG68Y9K8LFpbFCwxjuYNZESuSFhYab2sCJsQT8LPujUqE4M",
  "key11": "4DDtiEpJc6MP3mCHUKepP1C7AcVeKBgwXjMwyU83boLhXzf55m8HqxHxGnmfmhQSXTUMMgxKMaBqWU78AgXG5vtt",
  "key12": "2VNHHA8aSiYyVP38zRa8xmSD4HrjK3JuoDMTiHfGkPBrLM74uYabE7orQ9gDArVfs8fQKc9Qv4PSwNHkVhfTRqQm",
  "key13": "kRqghcJx4Y7fHpMi822ddZyZFbk1LWznHFiVV7vR46NEFHkzpH9mRKEUAu1Tt8Na12LNfmkHViV46KSNgKJCHEj",
  "key14": "5ZJGNMUwwio7B2kegFRTVJkro1HN7HeuQ1Zr3Q9wsS4ZY5kGuyAkHj9VFLB5QnS4m6Zfjdacj8pHfPJv6kGFGuqQ",
  "key15": "5U9gBT7emYx5JLMjBxqsKiuCTkiDTvp9nLEjNQoeB8BnXBViBZvws8UUCkxmf1uE8WsTAiVT5eo9mEQGrdnYYmbQ",
  "key16": "3YKarq5juTJgseYphoppgwJANNeHS28MZ6RkdabMNQnUHT8xcUeSFqQMgGTDvAcGvFFcv8hGEcRvxUwNMGiVkUfw",
  "key17": "3Pkc48Gu1WVnKX7qvEEH5Qg6MAjAJkHp8zSCEcVwGSoNskuJFRUmkNTmeHRb37zFqkttrgYaQa9ZJMcwZT4VU4Xu",
  "key18": "4yE4w5xc5CPU7bTWg7yrbb1a6J3rwRtsBBUbqb6B8AbTLShKTQy1o7HPxyyZFxNybSwmHdRPET9jfscyDqcaME49",
  "key19": "5GSgf17P8B3HwWr6YfFpWKqZRmP52wGUE7JdNf3GFco79xxJ9Pk56HEeRSyMwFjswBTLUpS4PTcT2aorF1s4ELbz",
  "key20": "5JEVUNJMb3hUx3jyNvzBAiisuPRTPViqHNKa4MMxGSnAZG7Auw9CcotVw4kZKNtveRNdebWYvW2qNTbnLPPfHRZ3",
  "key21": "iCHRVtrgm8Cj3jWYWtsi5kZLRPch4eFnniTDprQLucgcEQ5Y9Zjv7AKSszsh92oEXWUuLiADs7fGy2bWG5CV5S3",
  "key22": "4dyQn6f9zNsxCzpgxbYbhVR9SFLT13mbqhSqNTAdvdLo3EiccEvuiwZFUvXF4f2TR7kptCG5FZqiDdZuC8FC9Mj4",
  "key23": "3DRQCdD1qBe875rUkQiMuRNFXKAVeSe1qZfY3HXWUeCvqqwaGnLhB6yuwwKJSj4sjRbfxWVGyhddg41F9gPju1Tt",
  "key24": "3uL6LzQUVPY6QbsTvhMHxd5x9kA9PTvBVNNyBaf6MQCKkZgEbxjs4u7wZqT9RuxEgX82UXmamfqRH5QByENGbyNU",
  "key25": "3kaNo8kp9UvJVP36AC5QoQNi9EmzZXySNFQEbtYGwxz2aWaKbKgrfBFrJbKMzeknECKeb5hdmMdmqoUKxJYdkLmv",
  "key26": "45TRW2xonntDqCzSwQj84iHBTXcZBkuWPeeykLR6KkGtNF5aapGP246VVhgDSQ9KwCThdVsngz67qKpsV84G2ukB",
  "key27": "2epYJD37Ye2MhDrzBcbcRWMFXpEW2m6KGCxBiXVNJo5URhUc5RtDbktUQqrPozuobjkNS3UarTt5doCj2NtLVmb5",
  "key28": "VTN3sCqrAw6kjjmdoEVM1eAUo2J3aiyFaZiKn5uEgGp731mGSyXFb1eGiT7hGqNsm2DRZDz6Pe3bcqfjsZyMdDn",
  "key29": "52s696oBaFCTpG3tgcms5uic8y41u9M6WByMsmP2tmY5zmLsGmzTBheLcy58dyJf6vZGHRj4DQ3iRdUVoXCv7DFx",
  "key30": "4dZZqGWy4nKTo81ejcC6XZv9C3caBDuYfgyGtwKo92SRLCTrpyPbLPrLM74ArnqG1FJztEBNkD4o3gDDLMnE8PFa",
  "key31": "2EfDpujB2h39UaZNSo2KkACQF3aVLMQEB7UWWkPwZX4FnGz51vaFtbgmgz4bMs9mz7iNnnsG8vGyaU1tD9fFugjG",
  "key32": "2DZmMwaUtBDjRnKFEVk6tNtTPBKosJGQoDLBxDv29tmhKwrbAWQ7PDgEoPfcdTAMdwtvpEGN9qLLyMss9ANtbvcG",
  "key33": "5nYJoUuJA2oeWnCpiC3U4ijPndApqfim3Ny4qbhAWPyuzQArXaiiZ3Y76oW2NbTQDJV3PzuX93xKEV2upK8n3RJt",
  "key34": "2k8gV8BqvGAmAEuzV7C2U4c4uq4ZX9vNNUByCyMmYkvVnXbF2EjY8LKVLDsvUwS47yLzAy1rztPi7a54Gg3HxbC9",
  "key35": "6gbduYzdC4JYfVtFFjg6Hos1r2VPf85cQGjBWFwZcs5Nqzzm2W6gGL34FgnFjKwkyodsVtdfEVffkrgFZwWJnvx",
  "key36": "4oRdtyXtwgWcq9QmCUUUHB3TcA7orioubH8HR3nbQfUrQbSyx8gtJCBqEbS8dcg7jD8ZSsjDEqerqBzXWpZ9sGRe"
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
