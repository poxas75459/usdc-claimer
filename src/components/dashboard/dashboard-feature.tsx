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
    "3pf4Ea9dmqDYaTNC9AgA8u9dTGd5avre4J9PF56MorQhky2xCxwGw5ZnUem6NT1qAWaq6EeZvC3LKmi6Vx8aphLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52JQJtDyXvfxnmY2fKFmQcAEP1vWWdDTSZfd1ff7bcW6PgWUj6QqZ4QgKUh5oc48u1b4FZKA5iyCcDaT2QnCFUcP",
  "key1": "4zqenAaBRm8kfSvsRxAKJwfU8y3U9yTccRpeSCNdBLiQn9vqS8swaj5PQ6z7oNBZtmh353PnJa2fB3mDTQeA11Ck",
  "key2": "2Wy5scr73VoNKfJ1vphz3eRx8yetoHtNnPc7hYrErKuCUGzk7Xy9qBdhREvdGscMhCQub9B9hehhJva3HPJA2ww9",
  "key3": "4pZaYqEYUy9BwiUGabvMGznT8i59k8BviMAD8acCcqhjXMYt4JQzb1G62ouZPu3YQ81BvL4ZM6y4nzp1NuMCW8dH",
  "key4": "5cM2XqhgkaCVu2RVDj3mgFRJM6PWTPP3VgJKN86KqPXdUr1JqCGtDozZYyxgFsWKsFvsNpusntj62XWG1BRbf6N1",
  "key5": "5TYp3grbdoZGjnYciXkVkHS5gDGsomG9y6CK2sv3PqmJcZ7VahRzJUFwHgYNq47zNY3E69UJMNLP7WPpXPtnxmqv",
  "key6": "2qj8yzSeVAbZYVZECzVHT1fcJX9eFHyqsC2sPY9p5YYEkdfe4nqzXC552A5DNPd2pntjAwNRdNfkbJFQXi35Z8NR",
  "key7": "5LfmeHByeSVyK4iJaxWK3Tbk9Vg9QAuQ9suE26pmhb9ZtmVvuk8fAEEjvNqzRAyL6W3sGnwkoGLd8gBYNMb9rozS",
  "key8": "2JSACrg7nQK8JVHsqAyCMcj2TaAFX2H6disG43XayF4h4SuhAW1kyVM1w1b4rE2mYrAVmLJJtQK6sqKN56yAD5nd",
  "key9": "2scj2CQgUJiLaHnAYkrgnuR5aESeKxVhVYafnR4uJ9Lh7cFPuAy9qfkkp1KEQKksNQbQRu4fkTDPWAyx6b7nHH6b",
  "key10": "4oztzWComgzegjvCk3sV9FeTyqLmFeWWLzyo928HLh3UTwgcMokFZQDkBFQervWt6vz54waDebjYZiVpaAuf6fWS",
  "key11": "5PhMpze7H1UCZdD8dw6B9DxAgiRLwnpxm5n3Q9yuBDgHddqBtkNzxwecn1VpDg6hY2CQjSsnxvMWWejwTKhXsaGD",
  "key12": "37W3Y9ajHMq91jGzaRUFFaYMDB6SHUkKTwnGdDSuDfStrbKSs5KtrEhgDTwzKuJ9395w1pykBfJZd9cuSrZaVY8J",
  "key13": "4y3sRB5o1NAYwAqBCmgK9LKFcJ3UQKFxQKBVqqBVCv2oXBBna1KB7TukWVuAgMpRSXbyghmLHWyVD3GHJQR9eVLs",
  "key14": "4pagiAorkTG59Sf7kbcBnK1P4k9yXiDs7BcaNUyszW84K6SFCoWVYF3gHtPV1m6Y9UWuyMhoGpUcQLD8HeCPUeLL",
  "key15": "5voCCEkwknrXzpp7y43Mt75mxbhoKhynWxTyTrgg5XUjXDtfV3DQkJZDxny97kUzTu84y2XFi9kjH5bAfPbMLaSa",
  "key16": "ruEUNKSBfj19ZRDpWKwKE9KoW89B8Lixtu5o9C2MFyxN3bPPUEyaXPwPUa6gmmAQdcnbcbRMJjzTcStBP9k64ta",
  "key17": "3ibDRKNKHGui7U5moynP5NsoarA8NLZ7u7iuPQy5wGU7tRtbxTByf4rkLkjY1G6gn7TGeLyUBb5cq43zcyhLqTs4",
  "key18": "cfLXAnDpcdxWATZu73xxx6j2cpJuNRGAPzGJsba6iXBv5E8Tvkrwixnv5AgGRLyog7dKqbvp1Lfk2GVt6dG28j2",
  "key19": "55uUJCPcS4Prxw7xACkXGtyCTYFehtVziwnQWfzDNC2WvMyAxbbmG1kxDWzaB9ZajghgMGKMA3wyfj9harWsAHFh",
  "key20": "1LjRPAj489xgQygPSv7MSTi9QuRmuBj2dZFQNscpDCLfhgi6odSUXNztwMZ63RsunH2F7c9f6XGsCyJDhrCLvuN",
  "key21": "5BfWvcNkSnv1xCdKns5FTAqawzMA6dgfkJUkYMB31y8mycJFd5kQYhT1cUhU4RjFv3h2XYiyTj5nNKK7zZXLxLBB",
  "key22": "5ya52pM2j41aesw7SyRFuCCbWJF9YCVsEu48FL2y7H2Sb2iTzxHBrZJTADf7BJeQGEopSvAirX2DaqbHVHkBkg6N",
  "key23": "5oRP5c1PzsyLFQJr2mCuddePLVMAYv8x8pVJn662PnKUW76ZaXo8w3WJD5ZgVQHctcEJZX77PebddK3pGjucwDix",
  "key24": "kA8nQekoWvSXqxKP8znfm5MfxZfTJqhF3LuXQjBvsddFbdFXYee9PxviWZRvj9maac9UM3VfKG2sscqNnStKSTR",
  "key25": "38PzeBKEF5BZv2reDL91VMRntYG8yWvW95CutR4sApRpBa4a4VQYzZchTTjYjsLwRHWuZ1XYQ6Qp7HF1dygNeKA6",
  "key26": "4Pmakpu3tH6LRivoybZRxvAj6sFh2uykATU6dUrK5oLYpFzTFnCJBnPpKFeRnWiKY6nGoMZLwzGupwEt3MBCCK3J",
  "key27": "35KddxCZJ6KYTWZ23Bh8PFUgdh2EWoxusdB24kiZ3rs9M4zwyDY7hLYFrsRmgo99wyKDTeQvqt67emb69YPaKgLH",
  "key28": "4N8FYVrheDNxHvWPUAi1KQszRX4n3zFPLXNEQGYuqh5gnFWqsKASDhLTPxTSCuKehSQgzgwroMvV587YBTTbENS1",
  "key29": "5XecJubtBiusyRFJqSUYeA1wuAoM5GLnd4nwvhTMnGwRSU9UEno56D4XqTyXbaseT4RrjPqCyMhVd82DyDPDZCvJ",
  "key30": "2LtkEfADq3pz8rhJWJmgnmvQen9LjvgJBnRMcameQYacdZ6kknUapngeM4ixFLc5TfMsw6cRSPpgYnjix1uapsUP",
  "key31": "oNGf3MLFXPCUbzpZkahfb8sLPNiUTsNnXMdbaXJd8ftbS2xdnzjWrtskzxsuz7nSgCtEw4FHug9gyLeAnqiG3hc",
  "key32": "1FHEDQDfznCqWtf3jrtG6GgeUySAJDKHQbQyTe7UEhfm1sHVoBXrGNHdgU2T1oe3y55nvEg7F2GxjdxYAQC8u9s",
  "key33": "3fR6yJtcSDWFMNCGqKasovqdutzGHEyQevyyADBzmvauhh9W24JprztzdkWXhWohjJMgf3jtsfUNexiHVR7Y1yYw",
  "key34": "5wSEEA5pApmkPRTePTwXJ2JW5yq2j69mW49qgzmsqUuPz8UZTdr5CL46Z2TV26nGwt1FT8YTzv7V2jAy9tcK9Y76",
  "key35": "3nCwvt3tA7U1ANWVjwUuYfM4Vj6e2z11vPnY54uGQTrhjA9ajx5tsZpGgWyP9rQFTFYdrgSJx4so32AAJXhEsVXV",
  "key36": "5dHb1qmEFqTtztc6izuikduKQnd66K6dMHQdiXjD3vXiio4budNhQdDUDPbdWkENHkJWyPnuZFDLqvrYc9wbrDm3",
  "key37": "3DJZctAH1dhiM9us5nnM7DTVaRNaWBgGNwJuNNLATU8dz9EKJJKWYBoQJhn8TJTtPv2fxuDNj6zr9WDT7V6Jug3F",
  "key38": "38jZrtgaU1cYvQJpHuUMkQq33VjUFY9LhmYpTKDF25nEwinucDi1DjkFmFKLa3LcRoaUjmp2NfXGoBuDg8mheumS",
  "key39": "4SMpMwxGmb61vBvVHu9DiFks45i4UaRJ2JyzTrzE6xmPUzh9z78eQqSD78GX9XiRsATYHWMqJEknXzH5GDz818iC",
  "key40": "24BNDA3kuSWVA7YvUaNiU6keVUee2uWhGcngM3QYzDQXfAfQ6CASDuvbKC5b1waoUEEQ9ZzkDqmKiYaUNGYCYtbS",
  "key41": "5MunNzDcs9HrHqfvmAJ8qpcCYj9Wta3cybSv17EK5xBs9dsMagsdGjfMh6odjrrXtSQd7bihUZ8aZ5TWjavSBb6E",
  "key42": "LvyVCSJzb6LjuZoJDXASArqAitg77Qonw1CBbD6GF9HVZoMz2JxFDnqfrmTb8T6xYbi3hSB5PDgGcqQR99bDY57",
  "key43": "Cu7kzFU1y3exxyaKRMxYunm66TJu4MrPM3WfgH7KCmJF7SRk4EUZ7LUGwDqeKSVepeHFNcszRfvKu346d1azNb7",
  "key44": "4y2UTpkGKngaXuNChUkzrTgjo5XNnSa3YCB8Sp7c3taYPRz2pV8MibfzcwuBjwpJdDA297Xx8StHAsGrozDD9vha",
  "key45": "2ozzwEMB1udR6m7iRnhm3PJxWZYGxkRVkddeGm9Z675VmJUZXE2XFyUkXvuukrJVZtduXM3AxgoY5q5VyyXfALWH",
  "key46": "2AfyCC4ZrnKVTqazc5id3kJS5RnuPHzKskkHkXbMAgCmoVcPdQEFG1EFo8L8HaWA38CRUBB8y11ez1aEFYcjSdHr"
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
